import * as React from 'react';
import PageBase from "../components/PageBase/PageBase";
import TopAnalytics from "../components/unionParts/TopSection/TopAnalytics";
import DocumentInteraction from "../components/unionParts/DocumentSection/DocumentInteraction";
import VideoInteractions from "../components/unionParts/VideoSection/VideoInteractions";
import './CourseInfoPage.css'
import Header from "../components/unionParts/HeaderSection/Header";
import BarAnimation from "../components/Charts/BarChartWithSlider";
import CustomTable from "../components/Charts/TableHeatMap";
import {BarChart} from '@mui/x-charts/BarChart';
import {Box} from '@mui/material';
import {blue} from "@mui/material/colors";
import BarChartWithModalWindow from "../components/Charts/BarChartWithModalWindow";

export default function CourseInfoPage() {
    const chartDonut = [
        {value: 10, label: 'Прошли курс'},
        {value: 20, label: 'Начали, не прошли'},
        {value: 15, label: 'Не начали'},
    ]

    const generateSampleData = (count) => {
        const data = [];
        for (let i = 1; i <= count; i++) {
            data.push({
                name: `User ${i}`,
                score: Math.floor(Math.random() * 101), // Random score between 0 and 100
            });
        }
        return data;
    };

    const windowHeight = window.innerHeight;
    return (
        <PageBase>
            <div className={"layout"}>
                <div className={"content"} style={{height: '77vh', color: '#405479'}}>
                    <TopAnalytics/>
                </div>
                <div className={"bg_image"}>
                    <div className={"content"}>
                        <VideoInteractions/>
                        <BarAnimation/>
                        <CustomTable/>
                        <BarChartWithModalWindow/>
                    </div>
                </div>
            </div>
        </PageBase>
    )
        ;
};
