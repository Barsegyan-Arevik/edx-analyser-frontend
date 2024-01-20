import PageBase from './common/PageBase';
import MetricExtractor from "./metrics/MetricExtractor";
import ChartComponent from "./metrics/ChartComponent";

export default function App() {
    const csvData = `user_name,user_id
        abrosimovaoe,328
        akimovnv,328
        alenatresh,280
    `;

    return (
        <div className="app">
            <PageBase
                showBackButton={true}
                showContinueButton={true}
                content={
                // todo pass here everything you want to see
                ChartComponent(
                    {csvData}
                )
            }
            />
        </div>
    );
}
