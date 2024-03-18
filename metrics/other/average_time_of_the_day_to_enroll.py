from metrics.utils.db_operations import *
from metrics.utils.metric_operations import calc_metric
from metrics.sql_queries_dictionary import *


def get_enrollment_distribution(connection):
    # NOTE: The result should generate a table with columns 'id' and 'average time to enroll'
    return execute_query_with_result(connection, sql_query_average_time_of_the_day_to_enroll)


if __name__ == '__main__':
    calc_metric(
        get_enrollment_distribution,
        "average_time_of_the_day_to_enroll.csv",
        ['course_id', 'enroll_time']
    )
