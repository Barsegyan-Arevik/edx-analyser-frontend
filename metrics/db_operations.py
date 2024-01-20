import psycopg2
from psycopg2 import sql
from psycopg2.extensions import ISOLATION_LEVEL_AUTOCOMMIT


def open_db_connection(user_name="postgres", password="your_password", db="db_name"):
    try:
        connection = psycopg2.connect(
                               user=user_name,
                               password=password,
                               host="127.0.0.1",
                               port="5432",
                               database=db)
        return connection
    except (Exception, psycopg2.Error) as error:
        print("Возникла проблема при установлении соединения с PostgreSQL.", error)


def close_db_connection(connection):
    if connection:
        connection.close()
        print("Соединение с PostgreSQL завершено.")


def execute_query(connection, query):
    connection.set_isolation_level(ISOLATION_LEVEL_AUTOCOMMIT)
    cursor = connection.cursor()
    cursor.execute(query)
    connection.commit()
    cursor.close()


def create_database(connection, database="db_name"):
    execute_query(connection, sql.SQL("CREATE DATABASE {} WITH ENCODING 'UTF8'").format(
        sql.Identifier(database))
    )
    print("Создана база данных " + database)


def drop_database(connection, database="db_name"):
    execute_query(connection, sql.SQL("DROP DATABASE IF EXISTS {}").format(
        sql.Identifier(database))
                  )
    print("Удалена база данных " + database)



def drop_table(connection, table):
    drop_table_query = '''DROP TABLE IF EXISTS {0};'''.format(table)
    cursor = connection.cursor()
    cursor.execute(drop_table_query)
