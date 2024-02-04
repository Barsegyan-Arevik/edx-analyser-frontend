import csv
from db_operations import *
from sql_queries_dict import *
""" 
* Fetches distribution of the courses' enrollment.
* @returns map - course ID and enrollment time. Not that course ID is not distinct.
"""


def get_enrollment_distribution(connection):
    # NOTE: The result should generate a table with columns 'id' and 'average time to enroll'
    enrollment_distribution_sql_request = sql_query_average_time_of_the_day_to_enroll
    connection.set_isolation_level(ISOLATION_LEVEL_AUTOCOMMIT)
    cursor = connection.cursor()
    cursor.execute(enrollment_distribution_sql_request)
    enrollment_distribution_course_id_and_time = cursor.fetchall()
    cursor.close()
    connection.commit()
    return enrollment_distribution_course_id_and_time


def write_result_to_file(result_file, result):
    print('Start writing the data to file.')
    with open(result_file, mode='w', encoding='utf-8') as res_file:
        field_names = ['course_id', 'average time to enroll']
        result_file_writer = csv.writer(res_file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
        result_file_writer.writerow(field_names)
        for res in result:
            result_file_writer.writerow(res)


def main():
    print('Start calculating average time to enroll the course.')

    result_file = "../results/average_time_of_the_day_to_enroll.txt"
    connection = psycopg2.connect(user="postgres", password="s1n2e3i4p5", host="127.0.0.1", port="5432",
                                  database="ITMO_2")
    enrollment_distribution = get_enrollment_distribution(connection)
    close_db_connection(connection)
    print(enrollment_distribution)
    write_result_to_file(result_file, enrollment_distribution)
    print(f'The result file could be found at {result_file}')


if __name__ == '__main__':
    main()