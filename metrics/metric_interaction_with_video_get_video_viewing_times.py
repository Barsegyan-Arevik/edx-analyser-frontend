import datetime
from dateutil import parser
from db_operations import *
import pandas as pd
import plotly.express as px
from sql_queries_dict import *


def save_output_to_file(user_times, result_file):
    with open(result_file, "w") as log_fh:
        log_fh.write("username,time(sec)\n")
        for username in user_times:
            log_fh.write(username + "," + str(user_times[username].total_seconds()) + "\n")
    print('Результат находится в файле  ', result_file)
    generate_figure(result_file)

def generate_figure(file_with_data):
    df = pd.read_csv(file_with_data)
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
            user_times[username] = datetime.timedelta()
            user_played_times[username] = cur_time
        elif event_type == "pause_video":
            user_times[username] += cur_time - user_played_times[username]
        else:
            user_played_times[username] = cur_time

    return user_times

def get_result_from_db(connection):
    get_play_pause_events_query =sql_query_play_pause_events

    cursor = connection.cursor()
    cursor.execute(get_play_pause_events_query)
    play_pause_events = cursor.fetchall()
    cursor.close()
    connection.commit()

    return play_pause_events

def main():
    result_file = "../results/fetch_video_viewing_times.txt"

    connection = psycopg2.connect(user="postgres", password="s1n2e3i4p5", host="127.0.0.1", port="5432",
                                  database="ITMO_2")

    result_from_db = get_result_from_db(connection)
    user_times = calculate_times_for_users(result_from_db)
    save_output_to_file(user_times, result_file)
    close_db_connection(connection)

if __name__ == '__main__':
    main()