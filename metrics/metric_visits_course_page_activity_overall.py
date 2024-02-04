import re
import pandas as pd
from urllib.parse import unquote
from db_operations import *
import plotly.graph_objects as go
from sql_queries_dict import *


def calculate_pages(connection):
    print('Вычисление метрики ')

    get_unique_pages_urls = '''select  
            log_line -> 'page' as section_name, 
            count(*) as interaction_count
        from logs
        where log_line ->> 'page' != 'null'
        group by section_name
        order by interaction_count desc'''

    cursor = connection.cursor()
    cursor.execute(get_unique_pages_urls)
    pages_urls = cursor.fetchall()
    cursor.close()
    connection.commit()
    return pages_urls


def calculate_urls_and_names_mapping(connection):
    print('Вычисление метрики ')

    get_urls_and_names_mapping_query = sql_query_urls_and_names_mapping
    cursor = connection.cursor()
    cursor.execute(get_urls_and_names_mapping_query)
    urls_and_names_mapping = cursor.fetchall()
    cursor.close()
    connection.commit()

    print("Ссылки посчитаны")
    return urls_and_names_mapping


def process_urls(result):
    urls_without_parameters = dict()
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

        interaction_count = urls_without_parameters.get(url)
        if not interaction_count:
            interaction_count = 0
        interaction_count += item[1]
        urls_without_parameters[url]=interaction_count

    return urls_without_parameters

def generate_figure(activity_distribution, urls_and_names_mapping):
    print("Start figures generation...")

    x_axis = []
    y_axis = []
    for key, value in activity_distribution.items():
        alias = find_alias(key, urls_and_names_mapping)
        if alias:
            x_axis.append(alias + " (" + key + ")")
        else:
            x_axis.append(key)
        y_axis.append(value)

    fig = go.Figure(data=[go.Bar(
        x=y_axis, y=x_axis,
        text=y_axis,
        textposition='auto',
        orientation='h'
    )])

    fig.update_layout(title_text='Amount of interactions with the course pages',
                      autosize=False,
                      width=5000,
                      height=30*len(x_axis))
    print("Opening browser...")
    fig.show()



def find_alias(url, urls_and_names_mapping):
    for url_mapping in urls_and_names_mapping:
        if url_mapping[0] == url + '/':
            return url_mapping[1]
    return None


def save_output_to_file(result_file, result):
    pd.DataFrame.from_dict(data=result, orient='index').to_csv(result_file, header=False)
    print('Результат находится в файле  ', result_file)

def main():
    result_file = "../results/overall_visits_course_page_activity.txt"

    connection = psycopg2.connect(user="postgres", password="s1n2e3i4p5", host="127.0.0.1", port="5432",
                                  database="ITMO_2")

    pages_urls = calculate_pages(connection)
    print(pages_urls[0])
    unique_urls_without_parameters = process_urls(pages_urls)
    urls_and_names_mapping = calculate_urls_and_names_mapping(connection)
    save_output_to_file(result_file, unique_urls_without_parameters)
    generate_figure(unique_urls_without_parameters, urls_and_names_mapping)
    close_db_connection(connection)


if __name__ == '__main__':
    main()
