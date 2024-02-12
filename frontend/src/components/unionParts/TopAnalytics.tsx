import * as React from 'react';
import DonutsChart from "../Charts/DonutsChart";
import CustomBox from "../Charts/CustomBox";
import './TopAnalytics.css'

export default function TopAnalytics(){
    const chartDonut = [
        {value: 10, label: 'Прошли курс'},
        {value: 20, label: 'Начали, не прошли'},
        {value: 15, label: 'Не начали'},
    ]

    const aboutCountOfStudents = {value: '864', label: 'Количество студентов, записавшихся на курс:'}
    const averageTimeToEnroll = {value: '10:54:44', label: 'Среднее время регистрации на курс:'}
    return (
        <div className={"top_analytics"} >
            <CustomBox value={aboutCountOfStudents.value} label={aboutCountOfStudents.label}/>
            <DonutsChart data={chartDonut}/>
            <CustomBox value={averageTimeToEnroll.value} label={averageTimeToEnroll.label} />
        </div>
    );
};

