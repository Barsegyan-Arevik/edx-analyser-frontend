from metrics.sql_queries_dictionary import sql_query_distinct_scrolling
from metrics.utils.db_operations import *
from metrics.utils.file_operations import generate_bar_figure
from metrics.utils.metric_operations import calc_metric


def unique_views_of_available_pdf(connection):
    return execute_query_with_result(connection, sql_query_distinct_scrolling)


def main():
    result_file = "distinct_pdf_scrolling.csv"
    fields = ['pdf_name', 'scrolling_amount']
    calc_metric(
        unique_views_of_available_pdf,
        result_file,
        fields
    )
    generate_bar_figure(result_file, fields, xaxis_title='Название PDF', yaxis_title='Количество прокруток')


if __name__ == '__main__':
    main()
