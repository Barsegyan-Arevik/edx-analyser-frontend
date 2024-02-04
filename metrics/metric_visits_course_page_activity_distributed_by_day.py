import sys
import datetime
import pandas as pd
import re
from urllib.parse import unquote
from plotly.subplots import make_subplots
import plotly.graph_objects as go
from db_operations import *
from sql_queries_dict import *

def calculate_page_activity_per_day(connection):
    print('Start query execution at ', datetime.datetime.now())

    page_activity_per_day_query = sql_query_page_activity_per_day

    connection.set_isolation_level(ISOLATION_LEVEL_AUTOCOMMIT)
    cursor = connection.cursor()
    cursor.execute(page_activity_per_day_query)
    page_activity_per_day = cursor.fetchall()
    cursor.close()
    connection.commit()

    print('End query execution at ', datetime.datetime.now())
    return page_activity_per_day


def calculate_urls_and_names_mapping(connection):
    print('Start query execution at ', datetime.datetime.now())

    get_urls_and_names_mapping_query = sql_query_urls_and_names_mapping

    connection.set_isolation_level(ISOLATION_LEVEL_AUTOCOMMIT)
    cursor = connection.cursor()
    cursor.execute(get_urls_and_names_mapping_query)
    urls_and_names_mapping = cursor.fetchall()
    cursor.close()
    connection.commit()

    print('End query execution at ', datetime.datetime.now())
    print("Urls and names mapping has been calculated")
    return urls_and_names_mapping


def process_urls(result):
    page_activity_per_day_clean = dict()
    for item in result:
        url = item[0]

        if url.find('?') != -1:
            url = url[:url.find('?')]
        if url.find('#') != -1:
            url = url[:url.find('#')]

        url = unquote(url)

        if url.endswith('/'):
            url = url[:-1]

        m = re.search(r'/\d$', url)
        if m is not None:
            url = url[:-2]

        dates = page_activity_per_day_clean.get(url)
        if not dates:
            dates = dict()

        interaction_count = dates.get(item[1])
        if not interaction_count:
            interaction_count = 0

        interaction_count += item[2]
        dates[item[1]] = interaction_count

        page_activity_per_day_clean[url]=dates

    return page_activity_per_day_clean


def find_alias(url, urls_and_names_mapping):
    for url_mapping in urls_and_names_mapping:
        if url_mapping[0] == url + '/':
            return url_mapping[1]
    return None


def generate_figure(page_activity_per_day, urls_and_names_mapping):
    print("Start figures generation...")

    titles = []
    for key in page_activity_per_day.keys():
        alias = find_alias(key, urls_and_names_mapping)
        if alias:
            titles.append(alias + " <br>" + key + "</br>")
        else:
            titles.append(key)

    pages_length = len(page_activity_per_day)
    row_count = pages_length
    fig = make_subplots(
        rows=row_count,
        cols=1,
        subplot_titles=titles)

    count = 1
    for key, value in page_activity_per_day.items():
        x_axis = []
        y_axis = []
        for date in sorted(value.keys()):
            x_axis.append(date)
            y_axis.append(value.get(date))
        row_number = count
        col_number = 1
        fig.add_trace(go.Scatter(x=x_axis, y=y_axis, name=key), row=row_number, col=col_number)
        count += 1

    fig.update_layout(
        height=count*250,
        width=2500,
        title_text="Page activity on course distributed by day.")
    print("Opening browser...")
    fig.show()


def write_result_to_file(result_file, result):
    print('Start writing the data to file.')
    pd.DataFrame.from_dict(data=result, orient='index').to_csv(result_file, header=False)


def main(argv):
    print('Start calculating page activity on course distributed by day.')

    result_file = "../results/distributed_by_day_visits_course_page_activity.txt"

    connection = psycopg2.connect(user="postgres", password="s1n2e3i4p5", host="127.0.0.1", port="5432",
                                  database="ITMO_2")

    page_activity_per_day = calculate_page_activity_per_day(connection)
    clean_page_activity_per_day = process_urls(page_activity_per_day)
    urls_and_names_mapping = calculate_urls_and_names_mapping(connection)
    write_result_to_file(result_file, clean_page_activity_per_day)
    generate_figure(clean_page_activity_per_day, urls_and_names_mapping)
    print('The analytics result can be found at ', result_file)
    close_db_connection(connection)


if __name__ == '__main__':
    main(sys.argv)