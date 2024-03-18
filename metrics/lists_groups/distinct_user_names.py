from metrics.sql_queries_dictionary import sql_query_distinct_user_names
from metrics.utils.db_operations import *
from metrics.utils.metric_operations import calc_metric


def calculate_users(connection):
    return execute_query_with_result(connection, sql_query_distinct_user_names)


if __name__ == '__main__':
    calc_metric(
        calculate_users,
        "distinct_user_names.csv",
        ['username']
    )
