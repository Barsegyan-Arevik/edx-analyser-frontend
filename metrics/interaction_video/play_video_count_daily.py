from metrics.sql_queries import SQL_QUERY_PLAY_VIDEO_TIMES
from metrics.utils.db_operations import execute_query_with_result
from metrics.utils.file_operations import RESULT_PATH, generate_line_figure
from metrics.utils.metric_operations import calc_metric


def calculate_video_start_times(connection):
    return execute_query_with_result(connection, SQL_QUERY_PLAY_VIDEO_TIMES)


def main():
    result_file = "play_video_count_daily.csv"
    calc_metric(
        calculate_video_start_times,
        result_file,
        ['time', 'count']
    )
    generate_line_figure(RESULT_PATH + result_file, ['time', 'count'])


if __name__ == '__main__':
    main()
