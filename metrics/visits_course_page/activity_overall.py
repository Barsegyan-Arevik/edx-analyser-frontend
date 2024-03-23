import plotly.graph_objects as go

from metrics.sql_queries_dictionary import get_unique_pages_urls, sql_query_urls_and_names_mapping
from metrics.utils.db_operations import *
from metrics.utils.file_operations import find_alias, save_output_to_file
from metrics.utils.utils_operations import remove_parameters_from_url


def calculate_pages(connection):
    return process_urls(execute_query_with_result(connection, get_unique_pages_urls))


def calculate_urls_and_names_mapping(connection):
    return execute_query_with_result(connection, sql_query_urls_and_names_mapping)


def process_urls(result):
    urls_without_parameters = dict()
    for item in result:
        url = remove_parameters_from_url(item[0])
        interaction_count = urls_without_parameters.get(url)
        if not interaction_count:
            interaction_count = 0
        interaction_count += item[1]
        urls_without_parameters[url] = interaction_count

    return list(urls_without_parameters.items())


def generate_figure(activity_distribution, urls_and_names_mapping):
    x_axis = []
    y_axis = []
    for key, value in activity_distribution:
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
                      height=30 * len(x_axis))
    fig.show()


def main():
    connection = open_db_connection()
    pages_urls = calculate_pages(connection)
    save_output_to_file("overall_visits_course_page_activity.csv", pages_urls, ['page_link, count_of_visits'])
    urls_and_names_mapping = calculate_urls_and_names_mapping(connection)
    close_db_connection(connection)
    generate_figure(pages_urls, urls_and_names_mapping)


if __name__ == '__main__':
    main()
