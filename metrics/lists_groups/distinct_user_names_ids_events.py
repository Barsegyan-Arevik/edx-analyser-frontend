import csv

import xlsxwriter

from metrics.sql_queries_dictionary import all_pages_query, get_users_events_by_pages_query, all_users_query
from metrics.utils.db_operations import *


def get_all_pages_names(connection):
    return execute_query_with_result(connection, all_pages_query)


def get_all_users(connection):
    return execute_query_with_result(connection, all_users_query)


def calculate_users_and_ids(connection):
    return execute_query_with_result(connection, get_users_events_by_pages_query)


def write_result_to_table_file(result_file, result, page_names, user_names):
    print('Start creating big table.')
    events = [
        'play_video',
        'pause_video',
        'load_video',
        'edx.special_exam.proctored.attempt.started',
        'edx.ui.lms.outline.selected'
    ]

    print('Start writing the data to file.')
    table_headers = ['username']
    table_headers_top = ['']
    for page in page_names:
        for event in events:
            table_headers.append(event)
            table_headers_top.append(page)

    res_dict = {}
    for line in result:
        key = "{},{},{}".format(line[0], line[2], line[1], )
        res_dict[key] = line[3]

    # write to xlsx
    workbook = xlsxwriter.Workbook(result_file + '.xlsx')
    worksheet = workbook.add_worksheet()

    with open(result_file + '.csv', mode="a", encoding="utf-8") as file:
        writer = csv.writer(file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)

        # write to csv
        writer.writerow(table_headers_top)
        writer.writerow(table_headers)
        worksheet.write_row(1, 0, table_headers)

        i = 2
        array = []
        for user in user_names:
            one_line = [user[0]]

            for page in page_names:
                for event in events:
                    key = "{},{},{}".format(user[0], page[0], event)
                    if key in res_dict:
                        one_line.append(res_dict[key])
                    else:
                        one_line.append(0)

            # write to xlsx one by line
            one_tuple_line = tuple(list(one_line))
            worksheet.write_row(i, 0, one_tuple_line)

            # write to csv
            array.append(one_line)
            i = i + 1
            if i > 100:
                writer.writerows(array)
                array = []

        # write to csv
        writer.writerows(array)

        workbook.close()


def main():
    connection = open_db_connection()
    page_names = get_all_pages_names(connection)
    user_names = get_all_users(connection)
    users_events_by_pages = calculate_users_and_ids(connection)
    result_file = "distinct_user_names_ids_events.csv"
    write_result_to_table_file(result_file, users_events_by_pages, page_names, user_names)
    close_db_connection(connection)


if __name__ == '__main__':
    main()
