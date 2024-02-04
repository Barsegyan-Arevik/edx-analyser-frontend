import * as React from 'react';
import PageBase from "../common/PageBase/PageBase";
import DonutsChart from "../common/Charts/DonutsChart";
import SimpleBarChart from "../common/Charts/BarChart";
import BasicLineChart from "../common/Charts/LineChart";

const CourseInfo = () => {
    const chartDonut = [
        { value: 10, label: 'Прошли курс' },
        { value: 20, label: 'Начали, не прошли' },
        { value: 15, label: 'Не начали' },
    ]
    return (
        <div>
            <PageBase
                showBackButton={true}
                showContinueButton={true}
                content={
                // todo pass here everything you want to see
                // ChartComponent(
                //     {csvData}
                // )

                    <div>
                        <DonutsChart data={chartDonut} />
                        <SimpleBarChart />
                        <BasicLineChart />
                    </div>

            }
            />
        </div>

        // <div>
        //     <h1>Listener page</h1>
        // </div>
    );
};

export default CourseInfo;