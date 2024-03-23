from datetime import timedelta

import pandas as pd
import plotly.express as px
from dateutil import parser

from metrics.sql_queries_dictionary import sql_query_play_pause_events
from metrics.utils.db_operations import *
from metrics.utils.file_operations import result_path
from metrics.utils.metric_operations import calc_metric


def generate_figure(result_file):
    df = pd.read_csv(result_file)
    fig = px.bar(df, x='username', y='time(sec)')
    fig.show()


def calculate_times_for_users(play_pause_events):
    user_times = dict()
    user_played_times = dict()

    for event in play_pause_events:
        event_type = event[0]
        username = event[1]
        time = event[2]

        if event_type != "play_video" and event_type != "pause_video":
            continue

        cur_time = parser.parse(time)

        if username not in user_times:
            user_times[username] = timedelta()
            user_played_times[username] = cur_time
        elif event_type == "pause_video":
            user_times[username] += cur_time - user_played_times[username]
        else:
            user_played_times[username] = cur_time

    return map(lambda x: (x[0], x[1].seconds), list(user_times.items()))


def calc_play_time(connection):
    play_pause_events = execute_query_with_result(connection, sql_query_play_pause_events)
    return calculate_times_for_users(play_pause_events)


def main():
    result_file = "fetch_video_viewing_times.csv"
    calc_metric(
        calc_play_time,
        result_file,
        ['username', 'time(sec)']
    )
    generate_figure(result_path + result_file)


if __name__ == '__main__':
    main()
