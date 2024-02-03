import PageBase from './common/PageBase/PageBase';
import DonutsChart from "./common/charts/DonutsChart";
import SimpleBarChart from "./common/charts/BarChart";

export default function App() {
    const csvData = `user_name,user_id
        abrosimovaoe,328
        akimovnv,328
        alenatresh,280
    `;

    const chartDonut = [
        { value: 10, label: 'Прошли курс' },
        { value: 20, label: 'Начали, не прошли' },
        { value: 15, label: 'Не начали' },
    ]

    return (
        <div className="app">
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
                    </div>

            }
            />
        </div>
    );
}
