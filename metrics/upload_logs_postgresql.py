from metrics.utils.db_operations import *
import glob
import os


def create_logs_table(connection):
    create_table_query = '''
        CREATE UNLOGGED TABLE IF NOT EXISTS logs
        (log_line jsonb NOT NULL)'''

    execute_query(connection, create_table_query)
    print("Table logs has been created")


def insert_lines(cur, lines_array):
    records_list_template = ','.join(['(%s)'] * len(lines_array))
    insert_query = 'INSERT INTO logs(log_line) VALUES {}'.format(records_list_template)
    cur.execute(insert_query, lines_array)


def ingest_logs(connection, logs_file):
    print('Начинаем загрузку файлов ')
    lines_in_batch = 100
    lines_array = []
    count = 0
    cur = connection.cursor()
    with open(logs_file, encoding="utf-8") as logs_file:
        for line in logs_file:
            lines_array.append(line)
            count += 1
            if len(lines_array) >= lines_in_batch:
                insert_lines(cur, lines_array)
                lines_array = []

    if len(lines_array) > 0:
        insert_lines(cur, lines_array)

    print('Лог-файлы загружены ')
    print('Количество загруженных записей: ', count)


def upload_logs_postgres(database="ITMO_2"):
    print('Загрузка лог-файлов в базу данных')
    connection = open_db_connection(database=database)
    create_logs_table(connection)
    folder_path = '../log_files/DATANTECH2035/DATANTECH2035_лето/'
    file_extension = '*.log'
    file_list = glob.glob(folder_path + file_extension)

    print(file_list)
    for file_path in file_list:
        ingest_logs(connection, file_path)
    close_db_connection(connection)


if __name__ == '__main__':
    upload_logs_postgres()
