import * as React from 'react';
import DonutsChart, {DonutsChartData} from '../../Charts/DonutsChart';
import CustomBox from '../../Charts/CustomBox';
import './CommonSection.css'
import Header from '../HeaderSection/Header'

export type CourseInfo = {
    courseId: number;
    courseName: string;
}

export type BoxInsideProps = {
    value: string;
    value_additional_text: string;
    label: string;
}

export type CourseAnalyticsProps = {
    donut: DonutsChartData[];
    aboutCountOfStudents: BoxInsideProps;
    aboutAverageTimeToEnroll: BoxInsideProps;
    headerData: CourseInfo;
}


export default function CommonSection(props: CourseAnalyticsProps) {

    const headerText = `Аналитика по курсу "${props.headerData.courseId}" "${props.headerData.courseName}"`;

    return (
        <div className={'top_analytics'}>
            <div style={{paddingTop: '30px'}}>
                <Header text={headerText}/>
            </div>

            <div className={'main_content'}>
                <div className={'main-box'}>
                    <DonutsChart data={props.donut}/>
                </div>

                <div className={'side-container'}>
                    <div className={'side-box-up'}>
                        <CustomBox
                            value={props.aboutCountOfStudents.value}
                            value_additional_text={props.aboutCountOfStudents.value_additional_text}
                            label={props.aboutCountOfStudents.label}
                        />
                    </div>
                    <div className={'side-box-down'}>
                        <CustomBox
                            value={props.aboutAverageTimeToEnroll.value}
                            value_additional_text={props.aboutAverageTimeToEnroll.value_additional_text}
                            label={props.aboutAverageTimeToEnroll.label}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

