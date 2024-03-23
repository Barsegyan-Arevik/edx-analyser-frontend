import pymongo
import json
import os

if __name__ == '__main__':
    client = pymongo.MongoClient("mongodb://localhost:27017/")
    db = client["itmo_logs"]

    folder_path = r'../log_files/DATANTECH2035/DATANTECH2035_лето'
    file_names = [file for file in os.listdir(folder_path) if file.endswith(".log")]
    common_collection = db["all_logs"]

    for file_name in file_names:
        with open(os.path.join(folder_path, file_name), "r") as file:
            print(file_name)
            for line in file:
                try:
                    log_entry = json.loads(line)
                    common_collection.insert_one(log_entry)
                except json.JSONDecodeError:
                    print("Ошибка разбора JSON в строке:", line)
