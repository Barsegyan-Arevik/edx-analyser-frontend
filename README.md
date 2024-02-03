<<<<<<< HEAD
## LogAnalyzer
Веб приложение, созданное для анализа лог-файлов платформы Open edX и визуализации результатов с помощью дашбордов.

### Использование (не актуально)
1) Склонируйте проект на свой локальный компьютер.
2) Измените 24 строчку кода:
   conn = psycopg2.connect(user="postgres", password="000", host="127.0.0.1", port="5432", database="ITMO_logs"), указав в password="000" Ваш пароль для входа в PostgreSQL.
3) Измените 36 строчку кода:
   work_dir = r'C:\Users\Arevik\PycharmProjects\ITMO_logs\Logs\DATANTECH2035', указав кавычках Ваш путь к файлу Logs. 
4) В программе PostgreSQL создайте базу данных ITMO_logs, и создайте таблицы, которые будет заполнять программа, выполнив все запросы из папки create_table_queries.
5) Программа готова к запуску!


### Инфо
[Подробнее о метриках](https://docs.google.com/document/d/10p5zKWXnF2LRT2V9M0zCFXjcEkOsdYNRg663pmJx4bI/edit?usp=sharing)


[О библиотеках для визуализации графиков](https://docs.google.com/document/d/11FnVxswTE5iMa1XV_n40CLleLSPWVutV43c76xMdOX8/edit?usp=sharing)


   
=======
## OpenEdu Analyzer

An application for analyzing the activity of online courses students on the Open Education platform
>>>>>>> 949c0d6d6bfeb4aced43c0f5ee7a47e41265e7ca
