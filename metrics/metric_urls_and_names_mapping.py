import datetime
import codecs
from tabulate import tabulate
from db_operations import *
from sql_queries_dict import *

def calculate_urls_and_names_mapping(connection):
    print('Start query execution at ', datetime.datetime.now())

    get_urls_and_names_mapping_query = sql_query_urls_and_names_mapping

    connection.set_isolation_level(ISOLATION_LEVEL_AUTOCOMMIT)
    cursor = connection.cursor()
    cursor.execute(get_urls_and_names_mapping_query)
    urls_and_names_mapping = cursor.fetchall()
    cursor.close()
    connection.commit()

    print('End query execution at ', datetime.datetime.now())
    print("Urls and names mapping has been calculated")
    return urls_and_names_mapping


def write_result_to_file(result_file, result):
    print('Start writing the data to file.')
    with codecs.open(result_file,"w", "utf-8") as file:
        file.write(tabulate(result, headers=['target_name', 'target_url']))


def main():
    print('Start calculating urls and names mapping.')

    result_file = "../results/urls_and_names_mapping.txt"

    connection = psycopg2.connect(user="postgres", password="s1n2e3i4p5", host="127.0.0.1", port="5432",
                                  database="ITMO_2")

    urls_and_names = calculate_urls_and_names_mapping(connection)
    write_result_to_file(result_file, urls_and_names)
    print('The analytics result can be found at ', result_file)
    close_db_connection(connection)


if __name__ == '__main__':
    main()