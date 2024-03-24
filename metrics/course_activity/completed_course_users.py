from metrics.sql_queries_dictionary import sql_query_completed_course_users
from metrics.utils.db_operations import *
from metrics.utils.metric_operations import calc_metric


def calculate_users_who_finished_the_course(connection):
    return execute_query_with_result(connection, sql_query_completed_course_users)


if __name__ == '__main__':
    calc_metric(
        calculate_users_who_finished_the_course,
        "completed_course_users.csv",
        ['user_id', 'username']
    )
