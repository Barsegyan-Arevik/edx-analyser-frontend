from metrics.sql_queries_dictionary import sql_query_distinct_user_names_ids
from metrics.utils.db_operations import *
from metrics.utils.metric_operations import calc_metric


def calculate_users_and_ids(connection):
    # Необходимо сначала получить список уникальных идентификаторов, а затем объединить его с именами,
    # поскольку возможно, что EDX не генерирует значение 'name' для некоторых событий.
    return execute_query_with_result(connection, sql_query_distinct_user_names_ids)


def main():
    calc_metric(
        calculate_users_and_ids,
        "distinct_user_names_ids.csv",
        ['username', 'user_id']
    )


if __name__ == '__main__':
    main()
