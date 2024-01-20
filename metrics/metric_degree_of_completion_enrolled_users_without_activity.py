from tabulate import tabulate
from db_operations import *
import plotly.graph_objects as go
from sql_queries_dict import *


def calculate_users_who_enrolled_but_not_started(connection):
    print('Вычисление метрики ')

    get_enrolled_but_not_started_users_query = sql_query_enrolled_users_without_activity

    cursor = connection.cursor()
    cursor.execute(get_enrolled_but_not_started_users_query)
    enrolled_but_not_started_users = cursor.fetchall()
    cursor.close()
    connection.commit()

    print("Enrolled but not started users are calculated")
    return enrolled_but_not_started_users


def save_output_to_file(result_file, result):
    with open(result_file,"w") as file:
        file.write(tabulate(result, headers=['user_id', 'user_name', 'enrollment_date']))


def generate_figure(enrolled_but_not_started_users):
    print("Start figures generation...")

    # for every date calculate count
    date_count = dict()
    for user in enrolled_but_not_started_users:
        if user[1]:
            count_for_date = date_count.get(user[2])
            if not count_for_date:
                date_count[user[2]] = 1
            else:
                count_for_date += 1
                date_count[user[2]] = count_for_date

    total_user_count = 0
    x_axis = []
    y_axis = []
    for key in sorted(date_count.keys()):
        total_user_count += date_count[key]
        x_axis.append(key)
        y_axis.append(date_count[key])

    fig = go.Figure(data=go.Scatter(x=x_axis, y=y_axis))

    fig.update_layout(
        height=500,
        width=2000,
        title_text="Distribution of users, who enrolled, but not started the course, "
                   "depending on the enrolment date. Total users: " + str(total_user_count),
        xaxis=go.layout.XAxis(
            title=go.layout.xaxis.Title(
                text="User enrolment date",
                font=dict(
                    family="Courier New, monospace",
                    size=18,
                    color="#7f7f7f"
                )
            )
        ),
        yaxis=go.layout.YAxis(
            title=go.layout.yaxis.Title(
                text="Amount of enrolments",
                font=dict(
                    family="Courier New, monospace",
                    size=18,
                    color="#7f7f7f"
                )
            )
        )
    )

    print("Opening browser...")
    fig.show()




def main():
    result_file = "../results/enrolled_users_without_activity.txt"

    connection = psycopg2.connect(user="postgres", password="s1n2e3i4p5", host="127.0.0.1", port="5432",
                                  database="ITMO_2")

    enrolled_but_not_started_users = calculate_users_who_enrolled_but_not_started(connection)
    save_output_to_file(result_file, enrolled_but_not_started_users)
    generate_figure(enrolled_but_not_started_users)
    close_db_connection(connection)


if __name__ == '__main__':
    main()
