import * as React from 'react';
import PageBase from "../components/PageBase/PageBase";
import DonutsChart from "../components/Charts/DonutsChart";
import SimpleBarChart from "../components/Charts/BarChart";
import BasicLineChart from "../components/Charts/LineChart";

export default function CourseInfoPage() {
    const chartDonut = [
        {value: 10, label: 'Прошли курс'},
        {value: 20, label: 'Начали, не прошли'},
        {value: 15, label: 'Не начали'},
    ]
    return (
        <PageBase>
            <DonutsChart data={chartDonut}/>
            <SimpleBarChart/>
            <BasicLineChart/>
            <BasicLineChart/>
            <BasicLineChart/>
            <BasicLineChart/>
            <BasicLineChart/>
        </PageBase>
    );
};
