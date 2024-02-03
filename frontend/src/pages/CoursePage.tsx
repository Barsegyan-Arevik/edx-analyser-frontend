import ChartCard from "../common/charts/ChartCard";
import DonutsChart from "../common/charts/DonutsChart";
import SimpleBarChart from "../common/charts/BarChart";

import './CoursePage.css'

type CoursePageProps = {
    // courseId: string
}

const chartDonut = [
    {value: 10, label: 'Прошли курс'},
    {value: 20, label: 'Начали, не прошли'},
    {value: 15, label: 'Не начали'},
]

export default function CoursePage() {
    return (
        <div className="course-page">
            <ChartCard chartTitle="Статистика по слушателям">
                <DonutsChart data={chartDonut}/>
            </ChartCard>

            <ChartCard chartTitle="Количество уникальных просмотров">
                <SimpleBarChart/>
            </ChartCard>
        </div>
    )
}
