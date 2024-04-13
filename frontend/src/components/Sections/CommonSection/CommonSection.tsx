import * as React from 'react'
import ValueBox from '../../Charts/Box/ValueBox'
import './CommonSection.css'
import SectionHeader from '../SectionHeader/SectionHeader'
import { SectionActivity } from '../../../models/common'
import { LineChartDate } from '../../Charts/LineChart/DatesLineChart'
import SectionActivityChart from '../../Charts/SectionActivityChart'

export type BoxInsideProps = {
    value: string;
    value_additional_text: string;
    label: string;
}

export type CommonSectionProps = {
    courseId: string;
    numberOfStudents: BoxInsideProps;
    activeNumberOfStudents: BoxInsideProps;
    sectionActivityChart: Array<SectionActivity>;
    weeklyActivityChart: Array<LineChartDate>;
}


export default function CommonSection(props: CommonSectionProps) {

    const headerText = `Аналитика по курсу "${props.courseId}"`

    return (
        <div className={'top_analytics'}>
            <SectionHeader text={headerText} style={{ paddingTop: '30px' }} />
            <div className={'main_content'}>
                <div className={'side-container'}>
                    <div className={'side-box-up'}>
                        <ValueBox
                            {...props.numberOfStudents}
                        />
                    </div>
                    <div className={'side-box-down'}>
                        <ValueBox
                            {...props.activeNumberOfStudents}
                        />
                    </div>
                </div>
                <SectionActivityChart items={props.sectionActivityChart} />
            </div>
        </div>
    )
}

