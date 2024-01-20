import datetime
from db_operations import *
from sql_queries_dict import *

def calculate_event_names(connection):
    print('Start query execution at ', datetime.datetime.now())

    get_unique_events_query = sql_query_distinct_event_names

    connection.set_isolation_level(ISOLATION_LEVEL_AUTOCOMMIT)
    cursor = connection.cursor()
    cursor.execute(get_unique_events_query)
    event_names = cursor.fetchall()
    cursor.close()
    connection.commit()

    print('End query execution at ', datetime.datetime.now())
    print("Event names has been calculated")
    return event_names


def write_result_to_file(result_file, result):
    print('Start writing the data to file.')
    with open(result_file,"w") as file:
        for item in result:
            file.write("%s\n" % item)


def main():
    print('Start calculating unique event names.')
    result_file = "../results/distinct_event_names.txt"
    connection = psycopg2.connect(user="postgres", password="s1n2e3i4p5", host="127.0.0.1", port="5432",
                                  database="ITMO_2")


    event_names = calculate_event_names(connection)
    write_result_to_file(result_file, event_names)
    print('The analytics result can be found at ', result_file)
    close_db_connection(connection)


if __name__ == '__main__':
    main()