import re
from urllib.parse import unquote
import csv
from db_operations import *
import plotly.graph_objects as go
from sql_queries_dict import *


def calculate_user_way_of_moving(connection, user_id):
    print('Вычисление метрики ')

    user_pages_visited_at_timedate = '''select 
            TO_TIMESTAMP(log_line ->> 'time', 'YYYY-MM-DD"T"HH24:MI:SS')::TIMESTAMP as time_access,
            log_line ->>'page' as page_visited
        from logs
        where 
        log_line #>> '{context, user_id}' = \'''' + user_id + '''\'
        and log_line ->>'page' is not null 
            and log_line ->>'page' != 'x_module'
            order by time_access'''

    cursor = connection.cursor()
    cursor.execute(user_pages_visited_at_timedate)
    user_way_on_course = cursor.fetchall()
    cursor.close()
    connection.commit()

    print("User way has been calculated")
    return user_way_on_course


def calculate_urls_and_names_mapping(connection):
    print('Вычисление метрики ')

    get_urls_and_names_mapping_query = sql_query_user_route

    cursor = connection.cursor()
    cursor.execute(get_urls_and_names_mapping_query)
    urls_and_names_mapping = cursor.fetchall()
    cursor.close()
    connection.commit()

    print("Urls and names mapping has been calculated")
    return urls_and_names_mapping


def save_output_to_file(result_file, result, urls_and_names_mapping):
    with open(result_file, mode='w', encoding="utf-8") as res_file:
        field_names = ['time_access', 'page_url']
        result_file_writer = csv.writer(res_file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
        result_file_writer.writerow(field_names)
        for res in result:
            result_file_writer.writerow(res)
    print('Результат находится в файле  ', result_file)


def process_urls(url):
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

    return url


def find_alias(url, urls_and_names_mapping):
    for url_mapping in urls_and_names_mapping:
        if url_mapping[0] == url + '/':
            return url_mapping[1]
    return None



def generate_figure(user_way_on_course, urls_and_names_mapping, user_id):
    x_axis = []
    y_axis = []

    y_ticktext = []
    for user in user_way_on_course:
        if user[0]:
            x_axis.append(user[0])
            cleaned_url = process_urls(user[1])
            y_axis.append(cleaned_url)

            alias = find_alias(cleaned_url, urls_and_names_mapping)
            if alias:
                y_ticktext.append(alias)
            else:
                y_ticktext.append(cleaned_url)

    fig = go.Figure(data=go.Scatter(x=x_axis, y=y_axis, line=dict(width=5, color='#b22222'),
                                    mode='lines+markers',
                                    marker_size=15))

    fig.update_layout(
        height=1000,
        width=10000,
        title_text="Way of moving on course per day of the user with id '" + str(user_id) + "'",
        xaxis=go.layout.XAxis(
            title=go.layout.xaxis.Title(
                text="Date of moving",
                font=dict(
                    family="Courier New, monospace",
                    size=18,
                    color="#7f7f7f"
                )
            ),
            tickmode='array'
        ),
        yaxis=go.layout.YAxis(
            title=go.layout.yaxis.Title(
                text="Page URL",
                font=dict(
                    family="Courier New, monospace",
                    size=18,
                    color="#7f7f7f"
                )
            )
        )
    )

    fig.update_yaxes(
        ticktext=y_ticktext,
        tickvals=y_axis
    )

    print("Opening browser...")
    fig.show()

def main():
    print('Введите id пользователя')
    user_id = input("User id: ")

    result_file = "../results/display_user_route.txt"

    connection = psycopg2.connect(user="postgres", password="s1n2e3i4p5", host="127.0.0.1", port="5432",
                                  database="ITMO_2")

    user_way_on_course = calculate_user_way_of_moving(connection, user_id)
    urls_and_names_mapping = calculate_urls_and_names_mapping(connection)
    save_output_to_file(result_file, user_way_on_course, urls_and_names_mapping)
    generate_figure(user_way_on_course, urls_and_names_mapping, user_id)
    close_db_connection(connection)


if __name__ == '__main__':
    main()
