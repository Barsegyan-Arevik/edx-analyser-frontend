from metrics.sql_queries_dictionary import sql_query_distinct_views_of_available_pdf
from metrics.utils.db_operations import execute_query_with_result
from metrics.utils.file_operations import generate_bar_figure
from metrics.utils.metric_operations import calc_metric


def unique_views_of_available_pdf(connection):
    return execute_query_with_result(connection, sql_query_distinct_views_of_available_pdf)


def main():
    result_file = "distinct_views_of_available_pdf.csv"
    fields = ['pdf_name', 'views_amount']
    calc_metric(
        unique_views_of_available_pdf,
        result_file,
        fields
    )
    generate_bar_figure(result_file, fields)


if __name__ == '__main__':
    main()
