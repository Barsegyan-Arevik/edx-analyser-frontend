from datetime import datetime

import psycopg2
from psycopg2 import sql
from psycopg2.extensions import ISOLATION_LEVEL_AUTOCOMMIT


def open_db_connection(database="itmo_logs"):
    try:
        connection = psycopg2.connect(
            user="postgres",
            password="s1n2e3i4p5",
            host="127.0.0.1",
            port="5432",
            database=database
        )
        return connection
    except (Exception, psycopg2.Error) as error:
        print("Возникла проблема при установлении соединения с PostgreSQL.", error)


def close_db_connection(connection):
    if connection:
        connection.close()
        print("Соединение с PostgreSQL завершено.")


def execute_query(connection, query_text):
    print('Start query execution at ', datetime.now())
    connection.set_isolation_level(ISOLATION_LEVEL_AUTOCOMMIT)
    cursor = connection.cursor()
    cursor.execute(query_text)
    connection.commit()
    cursor.close()


def execute_query_with_result(connection, query_text, isolation_level=None):
    print('Start query execution at ', datetime.now())
    if isolation_level is not None:
        connection.set_isolation_level(isolation_level)
    cursor = connection.cursor()
    cursor.execute(query_text)
    query_result = cursor.fetchall()
    cursor.close()
    connection.commit()

    print('End query execution at ', datetime.now())
    return query_result


def execute_user_query_with_result(connection, query_text, user_id, isolation_level=None):
    print('Start query execution at ', datetime.now())
    if isolation_level is not None:
        connection.set_isolation_level(isolation_level)
    cursor = connection.cursor()
    cursor.execute(query_text, (user_id,))
    query_result = cursor.fetchall()
    cursor.close()
    connection.commit()

    print('End query execution at ', datetime.now())
    return query_result


def create_database(connection, database="db_name"):
    execute_query(connection, sql.SQL(f"CREATE DATABASE IF NOT EXISTS {sql.Identifier(database)} WITH ENCODING 'UTF8'"))
    print("Создана база данных " + database)


def is_database_exists(cur, db_name):
    cur.execute(
        sql.SQL("SELECT 1 FROM pg_database WHERE datname = %s"),
        [db_name]
    )
    return cur.fetchone()


def create_database_if_not_exists(database):
    try:
        conn = open_db_connection(database="postgres")
        conn.autocommit = True
        cursor = conn.cursor()
        exists = is_database_exists(cursor, database)

        if not exists:
            cursor.execute(
                sql.SQL("CREATE DATABASE {}").format(sql.Identifier(database))
            )
            print(f"Database '{database}' created successfully.")
        else:
            print(f"Database '{database}' already exists.")

        cursor.close()
        conn.close()

    except psycopg2.Error as e:
        print("Error:", e)
