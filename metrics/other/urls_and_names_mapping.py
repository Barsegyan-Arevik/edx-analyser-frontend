from metrics.sql_queries_dictionary import sql_query_urls_and_names_mapping
from metrics.utils.db_operations import *
from metrics.utils.metric_operations import calc_metric


def calculate_urls_and_names_mapping(connection):
    return execute_query_with_result(connection, sql_query_urls_and_names_mapping)


if __name__ == '__main__':
    calc_metric(
        calculate_urls_and_names_mapping,
        "urls_and_names_mapping.csv",
        ['target_name', 'target_url']
    )
