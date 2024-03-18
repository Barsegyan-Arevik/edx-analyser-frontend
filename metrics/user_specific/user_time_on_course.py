import plotly.graph_objects as go

from metrics.sql_queries_dictionary import sql_query_user_time_on_course_per_day
from metrics.utils.db_operations import *
from metrics.utils.file_operations import save_output_to_file


def calculate_user_session_activity_per_day_on_course(connection, user_id):
    return execute_user_query_with_result(
        connection,
        sql_query_user_time_on_course_per_day,
        user_id,
        ISOLATION_LEVEL_AUTOCOMMIT
    )


def generate_user_time_distribution_per_day_figure(calculate_user_session_activity_per_day_on_course):
    total_time = 0
    user_id = ''
    x_axis = []
    y_axis = []

    for duration in calculate_user_session_activity_per_day_on_course:
        user_id = duration[0]
        x_axis.append(duration[1])
        y_axis.append(duration[2].total_seconds() / (60 * 60))
        total_time += duration[2].total_seconds() / (60 * 60)

    fig = go.Figure(data=go.Scatter(x=x_axis, y=y_axis))

    fig.update_layout(
        height=500,
        width=2000,
        title_text="User with id '" + user_id + "' time on course distributed per day. "
                                                "Total time spent '" + str(total_time) + "' hours.",
        xaxis=go.layout.XAxis(
            title=go.layout.xaxis.Title(
                text="Date",
                font=dict(
                    family="Courier New, monospace",
                    size=18,
                    color="#7f7f7f"
                )
            )
        ),
        yaxis=go.layout.YAxis(
            title=go.layout.yaxis.Title(
                text="Time in hours",
                font=dict(
                    family="Courier New, monospace",
                    size=18,
                    color="#7f7f7f"
                )
            )
        ))

    fig.show()


def main():
    user_id = input("User id: ")
    connection = open_db_connection()
    user_time_on_course_per_day = calculate_user_session_activity_per_day_on_course(connection, user_id)
    close_db_connection(connection)

    result_file = user_id + '_user_time_on_course.csv'
    save_output_to_file(result_file, user_time_on_course_per_day,
                        ['user_id', 'session_date', 'time_at_session_per_day'])
    generate_user_time_distribution_per_day_figure(user_time_on_course_per_day)


if __name__ == '__main__':
    main()
