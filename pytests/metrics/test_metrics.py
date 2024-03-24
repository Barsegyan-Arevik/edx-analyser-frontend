import csv

import pytest as pytest

from metrics.course_activity.completed_course_users import calculate_users_who_finished_the_course
from metrics.course_activity.enrolled_users_without_activity import calculate_users_who_enrolled_but_not_started
from metrics.course_activity.started_but_not_completed_users import calculate_users_who_started_but_not_completed
from metrics.course_activity.time_on_course import calculate_total_user_time_on_course
# from metrics.decompress_zst import decompress_log_archives
from metrics.upload_logs_postgresql import upload_logs_postgres
from metrics.utils.db_operations import open_db_connection, close_db_connection
from metrics.utils.file_operations import save_output_to_file

EXPECTED_PATH = "result_files/expected/"
ACTUAL_PATH = "result_files/actual/"


@pytest.fixture(scope="session", autouse=True)
def setup_complete():
    # фиксируем состояние тестовой базы данных
    # decompress_log_archives()
    upload_logs_postgres(database="itmo_logs_testing", logs_dir='../../log_files/DATANTECH2035/')
    yield


@pytest.fixture
def fixture_metrics():
    return [
        (calculate_users_who_finished_the_course, "completed_course_users.csv", ['user_id', 'username']),
        (calculate_users_who_enrolled_but_not_started, "enrolled_users_without_activity.csv",
         ['user_id', 'username', 'enrollment_date']),
        (calculate_users_who_started_but_not_completed, "started_but_not_completed_course.csv",
         ['user_id', 'username']),
        (calculate_total_user_time_on_course, "distinct_user_time_on_course.csv", ['user_id', 'time_on_course']),
    ]


def assert_csv_equality(expected, actual):
    with open(expected, 'r', newline='') as f1, open(actual, 'r', newline='') as f2:
        reader1 = csv.reader(f1)
        reader2 = csv.reader(f2)

        size1 = sum(1 for _ in reader1)
        size2 = sum(1 for _ in reader2)

        assert size1 == size2, f"Number of rows is not equal: {size1} != {size2}"

        for row1, row2 in zip(reader1, reader2):
            assert row1 == row2, f"Rows not equal: {row1}, {row2}"


def test_metrics(fixture_metrics):
    connection = open_db_connection(database="itmo_logs_testing")
    for metric in fixture_metrics:
        metric_func, result_file, fields = metric
        metric_result = metric_func(connection)
        save_output_to_file(result_file, metric_result, fields, result_path=ACTUAL_PATH)
    close_db_connection(connection)

    result_files = map(lambda x: x[1], fixture_metrics)
    for file in result_files:
        assert_csv_equality(EXPECTED_PATH + file, ACTUAL_PATH + file)
