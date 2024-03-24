import pandas as pd
import plotly.express as px

from metrics.sql_queries import sql_query_play_video_times
from metrics.utils.db_operations import execute_query_with_result
from metrics.utils.file_operations import RESULT_PATH
from metrics.utils.metric_operations import calc_metric


def calculate_video_start_times(connection):
    return execute_query_with_result(connection, sql_query_play_video_times)


def generate_figure(result_file):
    df = pd.read_csv(result_file)
    fig = px.line(df, x='time', y='count')
    fig.show()


def main():
    result_file = "play_video_count_daily.csv"
    calc_metric(
        calculate_video_start_times,
        result_file,
        ['time', 'count']
    )
    generate_figure(RESULT_PATH + result_file)


if __name__ == '__main__':
    main()
