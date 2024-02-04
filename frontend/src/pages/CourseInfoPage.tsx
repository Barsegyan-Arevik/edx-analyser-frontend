import * as React from 'react';
import PageBase from "../common/PageBase/PageBase";
import DonutsChart from "../common/Charts/DonutsChart";
import SimpleBarChart from "../common/Charts/BarChart";
import BasicLineChart from "../common/Charts/LineChart";

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
