from metrics.utils.db_operations import close_db_connection, open_db_connection
from metrics.utils.file_operations import save_output_to_file


def calc_metric(metric, result_file, fields):
    connection = open_db_connection()
    metric_result = metric(connection)
    close_db_connection(connection)
    save_output_to_file(result_file, metric_result, fields)
    return metric_result


def calc_metrics(metrics):
    connection = open_db_connection()
    for metric in metrics:
        metric_func, result_file, fields = metric
        metric_result = metric_func(connection)
        save_output_to_file(result_file, metric_result, fields)
    close_db_connection(connection)

