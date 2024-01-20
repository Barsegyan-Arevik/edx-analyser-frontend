import plotly.express as px
import pandas as pd
import csv
from db_operations import *
from sql_queries_dict import *

def calculate_video_start_times(connection):
    print('Вычисление метрики')

    get_play_video_times = sql_query_play_video_times

    connection.set_isolation_level(ISOLATION_LEVEL_AUTOCOMMIT)
    cursor = connection.cursor()
    cursor.execute(get_play_video_times)
    video_start_times = cursor.fetchall()
    cursor.close()
    connection.commit()

    print("Количество проигрываний видео посчитано")
    return video_start_times


def save_output_to_file(result_file, result):
    with open(result_file, mode='w') as res_file:
        field_names = ['time', 'count']
        result_file_writer = csv.writer(res_file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
        result_file_writer.writerow(field_names)
        for res in result:
            result_file_writer.writerow(res)
    print('Результат находится в файле  ', result_file)


def generate_figure(file_with_data):
    df = pd.read_csv(file_with_data)
    fig = px.line(df, x='time', y='count')

    fig.show()


def main():
    result_file = "../results/play_video_count_daily.txt"

    connection = psycopg2.connect(user="postgres", password="your_password", host="127.0.0.1", port="5432",
                                  database="db_name")
    video_start_times = calculate_video_start_times(connection)
    save_output_to_file(result_file, video_start_times)
    generate_figure(result_file)
    close_db_connection(connection)


if __name__ == '__main__':
    main()
