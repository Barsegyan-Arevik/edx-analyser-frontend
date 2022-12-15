#import pip
#pip.main(['install', 'zstandard'])

import os
import zstandard
import pathlib
import json
import psycopg2
import datetime

from datetime import datetime
from psycopg2 import Error

def decompress_zstandard_to_folder(input_file):
    input_file = pathlib.Path(input_file)
    with open(input_file, 'rb') as compressed:
        decomp = zstandard.ZstdDecompressor()
        output_path = pathlib.Path(work_dir) / input_file.stem
        with open(output_path, 'wb') as destination:
            decomp.copy_stream(compressed, destination)


# Подключение к БД
conn = psycopg2.connect(user="postgres", password="111", host="127.0.0.1", port="5432", database="ITMO_logs")
cur = conn.cursor()

cur.execute("DELETE FROM files;")
cur.execute("DELETE FROM public.json_t;")
cur.execute("DELETE FROM public.logs;")
conn.commit()


work_dir = r'C:\Users\Arevik\PycharmProjects\ITMO_logs\Logs\DATANTECH2035'
files = os.listdir(work_dir)
files = list(filter(lambda x: x.endswith('.zst'), files))
for f in files:
    decompress_zstandard_to_folder(work_dir + '/' + f)
    pass
files = os.listdir(work_dir)
files = list(filter(lambda x: x.endswith('.log'), files))
for f in files:
    curr_file = open(work_dir + '/' + f, 'r')
    sql = 'INSERT INTO public.files (file_name) VALUES (\'' + f + '\') returning id;'
    cur.execute(sql)
    file_id = cur.fetchone()[0]
    conn.commit()
    while True:
        s = curr_file.readline()
        if not s:
            break
        s1 = json.loads(s)
        fields = []
        values = []
        for ind, val in enumerate(s1):  #получаем названия полей таблицы
            #print(str(ind) + ': ' + str(val) + " - " + str(s1[val]))
            fields.insert(ind, str(val))
            q1 = '\''
            q2 = '\''
            s2 = str(s1[val])
            s2 = s2.replace('\'', '"')
            if True:
                #if (isinstance(s2, str)) and len(s2) > 0 and s2[0] == '{':
                q1 = '\''
                q2 = '\''
                s2 = str(s1[val])
                s2 = s2.replace('\'','"')
                s2 = s2.replace('None', '"None"')
                if(str(val)) == 'time':
                    s2 = datetime.fromisoformat(s2);
            values.insert(ind, q1 + str(s2) + q2)
        sql = "INSERT INTO public.json_t (json_raw,file_id) VALUES (%s, %s)"
        cur.execute(sql, (json.dumps(s1), file_id))
        conn.commit()
        fields_string = ",".join(fields)
        values_string = ",".join(values)
        sql = r'INSERT INTO public.logs (' + fields_string + ',file_id ) VALUES (' + values_string + ',' + str(file_id) + ')'
        cur.execute(sql)
conn.commit()
cur.close()
conn.close()
print("Соединение с PostgreSQL закрыто")
exit()


