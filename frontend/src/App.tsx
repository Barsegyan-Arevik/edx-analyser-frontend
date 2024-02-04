import './App.css'
import PageBase from './common/PageBase/PageBase';
import DonutsChart, {DonutsChartData, DonutsChartProps} from "./common/Charts/DonutsChart";
import SimpleBarChart from "./common/Charts/BarChart";
import SideBar from "./components/SideBar";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CourseInfo from "./pages/CourseInfo";
import StudentSearch from "./pages/StudentSearch";

export default function App() {
    // const csvData = `user_name,user_id
    //     abrosimovaoe,328
    //     akimovnv,328
    //     alenatresh,280
    // `;
    //
    // const chartDonut = [
    //     { value: 10, label: 'Прошли курс' },
    //     { value: 20, label: 'Начали, не прошли' },
    //     { value: 15, label: 'Не начали' },
    // ]

    return (
        // <div className="app">
        //     <PageBase
        //         showBackButton={true}
        //         showContinueButton={true}
        //         content={
        //         // todo pass here everything you want to see
        //         // ChartComponent(
        //         //     {csvData}
        //         // )
        //
        //             <div>
        //                 <DonutsChart data={chartDonut} />
        //                 <SimpleBarChart />
        //             </div>
        //
        //     }
        //     />
        // </div>
        <BrowserRouter>
            <SideBar>
                <Routes>
                    <Route path={"/"} element={<CourseInfo />} />
                    <Route path={"/CourseInfo"} element={<CourseInfo />} />
                    <Route path={"/StudentSearch"} element={<StudentSearch />} />
                </Routes>
            </SideBar>
        </BrowserRouter>

    );
}
