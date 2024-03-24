from metrics.sql_queries_dictionary import sql_query_started_but_not_completed_users
from metrics.utils.db_operations import execute_query_with_result
from metrics.utils.metric_operations import calc_metric


def calculate_users_who_started_but_not_completed(connection):
    return execute_query_with_result(connection, sql_query_started_but_not_completed_users)


if __name__ == '__main__':
    calc_metric(
        calculate_users_who_started_but_not_completed,
        "started_but_not_completed_course.csv",
        ['user_id', 'username']
    )
