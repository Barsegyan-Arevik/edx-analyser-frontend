import * as React from 'react';
import DonutsChart, {DonutsChartData} from '../../Charts/DonutsChart';
import CustomBox from '../../Charts/CustomBox';
import './CommonSection.css'
import Header from '../SectionHeader/SectionHeader'

export type CourseInfo = {
    courseId: number;
    courseName: string;
}

export type BoxInsideProps = {
    value: string;
    value_additional_text: string;
    label: string;
}

export type CommonSectionProps = {
    completionDegreeData: DonutsChartData[];
    aboutCountOfStudents: BoxInsideProps;
    aboutAverageTimeToEnroll: BoxInsideProps;
    courseInfo: CourseInfo;
}


export default function CommonSection(props: CommonSectionProps) {

    const headerText = `Аналитика по курсу "${props.courseInfo.courseName}"`;

    return (
        <div className={'top_analytics'}>
            <Header text={headerText} style={{paddingTop: '30px'}}/>
            <div className={'main_content'}>
                <div className={'main-box'}>
                    <DonutsChart data={props.completionDegreeData}/>
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

