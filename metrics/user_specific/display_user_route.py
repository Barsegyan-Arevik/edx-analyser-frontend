import re
from urllib.parse import unquote

from metrics.sql_queries_dictionary import sql_query_user_route
from metrics.utils.db_operations import *
import plotly.graph_objects as go

from metrics.utils.file_operations import find_alias, save_output_to_file



def calculate_user_way_of_moving(connection, user_id):
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
    return user_way_on_course


def calculate_urls_and_names_mapping(connection):
    return execute_query_with_result(connection, sql_query_user_route)


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

    fig.show()


def main():
    user_id = input("User id: ")
    connection = open_db_connection()
    user_way_on_course = calculate_user_way_of_moving(connection, user_id)
    urls_and_names_mapping = calculate_urls_and_names_mapping(connection)
    result_file = "display_user_route.csv"
    save_output_to_file(result_file, user_way_on_course, ['time_access', 'page_url'])
    generate_figure(user_way_on_course, urls_and_names_mapping, user_id)
    close_db_connection(connection)


if __name__ == '__main__':
    main()
