1) Склонируйте проект на свой локальный компьютер.
2) Измените 24 строчку кода:
   conn = psycopg2.connect(user="postgres", password="000", host="127.0.0.1", port="5432", database="ITMO_logs"), указав в password="000" Ваш пароль для входа в PostgreSQL.
3) Измените 36 строчку кода:
   work_dir = r'C:\Users\Arevik\PycharmProjects\ITMO_logs\Logs\DATANTECH2035', указав кавычках Ваш путь к файлу Logs. 
4) В программе PostgreSQL создайте базу данных ITMO_logs, и создайте таблицы, которые будет заполнять программа, выполнив все запросы из папки create_table_queries.
5) Программа готова к запуску!
