import datetime
import plotly.express as px
import pandas as pd
import csv
from db_operations import *
from sql_queries_dict import *

def unique_views_of_available_pdf(connection):
    print('Start query execution at ', datetime.datetime.now())

    user_pages_visited_at_timedate = sql_query_distinct_views_of_available_pdf

    connection.set_isolation_level(ISOLATION_LEVEL_AUTOCOMMIT)
    cursor = connection.cursor()
    cursor.execute(user_pages_visited_at_timedate)
    user_way_on_course = cursor.fetchall()
    cursor.close()
    connection.commit()

    print('End query execution at ', datetime.datetime.now())
    print("User way has been calculated")
    return user_way_on_course

def write_result_to_file(result_file, result):
    print('Start writing the data to file.')
    with open(result_file, mode='w', encoding='utf-8') as res_file:
        field_names = ['pdf name', 'views amount']
        result_file_writer = csv.writer(res_file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
        result_file_writer.writerow(field_names)
        for res in result:
            result_file_writer.writerow(res)


def generate_figure(file_with_data):
    df = pd.read_csv(file_with_data)
    fig = px.bar(df, x='pdf name', y='views amount')
    fig.show()


def main():
    print('Start calculating unique pdf views.')

    result_file = "../results/distinct_views_of_available_pdf.txt"
    connection = psycopg2.connect(user="postgres", password="s1n2e3i4p5", host="127.0.0.1", port="5432",
                                  database="ITMO_2")

    video_start_times = unique_views_of_available_pdf(connection)
    write_result_to_file(result_file, video_start_times)
    generate_figure(result_file)
    print('The analytics result can be found at ', result_file)
    close_db_connection(connection)


if __name__ == '__main__':
    main()