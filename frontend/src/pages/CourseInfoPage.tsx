import * as React from 'react';
import PageBase from "../components/PageBase/PageBase";
import TopAnalytics from "../components/unionParts/TopAnalytics";
import DocumentInteraction from "../components/unionParts/DocumentInteraction";
import VideoInteractions from "../components/unionParts/VideoInteractions";
import './CourseInfoPage.css'
import Header from "../components/unionParts/Header";

export default function CourseInfoPage() {
    const chartDonut = [
        {value: 10, label: 'Прошли курс'},
        {value: 20, label: 'Начали, не прошли'},
        {value: 15, label: 'Не начали'},
    ]

    const windowHeight = window.innerHeight;
    return (
        <PageBase>
            <div className={"layout"}>
                {/*<h3>Общая аналитика по курсу</h3>*/}
                {/*<DonutsChart data={chartDonut}/>*/}
                {/*<SimpleBarChart/>*/}
                {/*<BasicLineChart/>*/}
                {/*<BasicLineChart/>*/}
                {/*<BasicLineChart/>*/}
                {/*<BasicLineChart/>*/}
                {/*<BasicLineChart/>*/}
                <Header/>
                {/*<div style={{height: windowHeight}}>*/}
                    <TopAnalytics/>
                {/*</div>*/}
                {/*<div className={'container'} style={{height: windowHeight}}>*/}
                    <VideoInteractions/>
                {/*</div>*/}
                {/*<div className={"document_interaction"}>*/}
                {/*    <DocumentInteraction/>*/}
                {/*</div>*/}
            </div>
        </PageBase>
    );
};
