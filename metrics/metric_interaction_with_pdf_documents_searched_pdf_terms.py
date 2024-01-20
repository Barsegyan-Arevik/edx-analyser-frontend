import plotly.express as px
import pandas as pd
from db_operations import *
import csv
from sql_queries_dict import *

def unique_views_of_available_pdf(connection):
    print('Вычисление метрики')

    user_pages_visited_at_timedate = sql_query_searched_pdf_terms

    cursor = connection.cursor()
    cursor.execute(user_pages_visited_at_timedate)
    user_way_on_course = cursor.fetchall()
    cursor.close()
    connection.commit()

    print("Слова из поиска по слову вычислены")
    return user_way_on_course


def save_output_to_file(result_file, result):
    print('Сохранение результатов в файл')
    with open(result_file, mode='w', encoding='utf-8') as res_file:
        field_names = ['count_number', 'word']
        result_file_writer = csv.writer(res_file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
        result_file_writer.writerow(field_names)
        for res in result:
            result_file_writer.writerow(res)
    print('Результат находится в файле ', result_file)
    generate_figure(result_file)


def generate_figure(file_with_data):
    df = pd.read_csv(file_with_data)
    fig = px.bar(df, x='count_number', y='word')
    fig.show()


def main():
    result_file = "../results/searched_pdf_terms.txt"

    connection = psycopg2.connect(user="postgres", password="s1n2e3i4p5", host="127.0.0.1", port="5432",
                                  database="ITMO_2")

    video_start_times = unique_views_of_available_pdf(connection)
    save_output_to_file(result_file, video_start_times)
    close_db_connection(connection)


if __name__ == '__main__':
    main()
