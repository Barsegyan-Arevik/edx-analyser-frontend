from tabulate import tabulate
from db_operations import *
from sql_queries_dict import *

def calculate_users_who_finished_the_course(connection):
    print('Вычисление метрики')

    get_completed_course_users = sql_query_completed_course_users

    cursor = connection.cursor()
    cursor.execute(get_completed_course_users)
    started_but_not_completed_users = cursor.fetchall()
    cursor.close()
    connection.commit()

    print("Пользователи, которые начинали делать курс, но не закончили посчитаны")
    return started_but_not_completed_users

def save_output_to_file(result_file, result):
    with open(result_file,"w") as file:
        file.write(tabulate(result, headers=['user_id', 'user_name']))
    print('Результат находится в файле ', result_file)

def main():
    result_file = "../results/completed_course_users.txt"

    connection = psycopg2.connect(user="postgres", password="your_password", host="127.0.0.1", port="5432",
                                  database="db_name")
    finished_users = calculate_users_who_finished_the_course(connection)
    save_output_to_file(result_file, finished_users)
    close_db_connection(connection)

if __name__ == '__main__':
    main()

