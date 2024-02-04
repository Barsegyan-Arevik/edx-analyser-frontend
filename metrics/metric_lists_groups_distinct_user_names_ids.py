from tabulate import tabulate
from db_operations import *
from sql_queries_dict import *

def calculate_users_and_ids(connection):
    print('Вычисление метрики ')

    # Необходимо сначала получить список уникальных идентификаторов, а затем объединить его с именами,
    # поскольку возможно, что EDX не генерирует значение 'name' для некоторых событий.
    get_unique_users_query = sql_query_distinct_user_names_ids

    cursor = connection.cursor()
    cursor.execute(get_unique_users_query)
    user_names = cursor.fetchall()
    cursor.close()
    connection.commit()

    print("Users and ids has been calculated")
    return user_names

def save_output_to_file(result_file, result):
    with open(result_file,"w") as file:
        file.write(tabulate(result, headers=['user_name', 'user_id']))
    print('Результат находится в файле  ', result_file)

def main():
    result_file = "../results/distinct_user_names_ids.txt"

    connection = psycopg2.connect(user="postgres", password="s1n2e3i4p5", host="127.0.0.1", port="5432",
                                  database="ITMO_2")

    user_names_and_ids = calculate_users_and_ids(connection)
    save_output_to_file(result_file, user_names_and_ids)
    close_db_connection(connection)

if __name__ == '__main__':
    main()
