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
        collection_name = os.path.splitext(file_name)[0]
        collection_name = collection_name.replace(".", "_")
        collection_name = collection_name.replace("-", "_")
        collection_name = collection_name.replace("+", "_")
        print(collection_name)

        with open(os.path.join(folder_path, file_name), "r") as file:
            collection = db[collection_name]
            print(file_name)
            for line in file:
                try:
                    log_entry = json.loads(line)
                    collection.insert_one(log_entry)
                    common_collection.insert_one(log_entry)
                except json.JSONDecodeError:
                    print("Ошибка разбора JSON в строке:", line)
