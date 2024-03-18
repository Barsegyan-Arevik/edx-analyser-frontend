import os
import zstandard
import pathlib


def decompress_zstandard_to_folder(input_file):
    input_file = pathlib.Path(input_file)
    with open(input_file, 'rb') as compressed:
        decomp = zstandard.ZstdDecompressor()
        output_path = pathlib.Path(work_dir) / input_file.stem
        with open(output_path, 'wb') as destination:
            decomp.copy_stream(compressed, destination)


if __name__ == '__main__':

    work_dir = r'../log_files/DATANTECH2035/DATANTECH2035_лето'
    files = os.listdir(work_dir)
    files = list(filter(lambda x: x.endswith('.zst'), files))
    for f in files:
        decompress_zstandard_to_folder(work_dir + '/' + f)
        pass
    files = os.listdir(work_dir)
    files = list(filter(lambda x: x.endswith('.log'), files))
