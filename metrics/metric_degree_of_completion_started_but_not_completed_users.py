from tabulate import tabulate
from db_operations import *
from sql_queries_dict import *

def calculate_users_who_enrolled_but_not_started(connection):
    print('Вычисление метрики')

    get_users_who_not_finished_the_course_query = sql_query_started_but_not_completed_users
    connection.set_isolation_level(ISOLATION_LEVEL_AUTOCOMMIT)
    cursor = connection.cursor()
    cursor.execute(get_users_who_not_finished_the_course_query)
    started_but_not_finished_users = cursor.fetchall()
    cursor.close()
    connection.commit()


    print("Users who started teh course, but not finished it are calculated")
    return started_but_not_finished_users


def save_output_to_file(result_file, result):
    with open(result_file,"w") as file:
        file.write(tabulate(result, headers=['user_id', 'user_name']))
    print('Результат находится в файле  ', result_file)


def main():
    result_file = "../results/started_but_not_completed_course.txt"

    connection = psycopg2.connect(user="postgres", password="s1n2e3i4p5", host="127.0.0.1", port="5432",
                                  database="ITMO_2")

    started_but_not_finished_users = calculate_users_who_enrolled_but_not_started(connection)
    save_output_to_file(result_file, started_but_not_finished_users)
    close_db_connection(connection)


if __name__ == '__main__':
    main()
