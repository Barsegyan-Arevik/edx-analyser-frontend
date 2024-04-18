import * as React from 'react'
import ValueBox from '../../Charts/Box/ValueBox'
import './CommonSection.css'
import SectionHeader from '../SectionHeader/SectionHeader'
import { SectionActivity } from '../../../models/common'
import DatesLineChart, { LineChartDate, LineChartSize } from '../../Charts/LineChart/DatesLineChart'
import SectionActivityChart from '../../Charts/SectionActivityChart'
import ChartWrapper from '../../Charts/ChartWrapper'
import { getStudentEnding } from '../../../utils/utils'

export type CommonSectionProps = {
    courseId: string;
    numberOfStudents: number;
    numberOfActiveStudents: number;
    sectionActivityChart: Array<SectionActivity>;
    weeklyActivityChart: Array<LineChartDate>;
}

const baseSize: LineChartSize = {
    width: 750,
    height: 470
}


export default function CommonSection(props: CommonSectionProps) {

    const headerText = `Аналитика по курсу "${props.courseId}"`

    return (
        <div>
            <div>
                <SectionHeader text={headerText} style={{ paddingTop: '30px' }} />
            </div>
            <div>
                <div className={'custom_container'}>
                    <div className={'boxes'}>
                        <div className={'upper-box'}>
                            <ValueBox
                                value = {props.numberOfStudents}
                                valueAdditionalText={getStudentEnding(props.numberOfStudents)}
                                label='Всего на курсе'
                            />
                        </div>
                        <div className={'lower-box'}>
                            <ValueBox
                                value = {props.numberOfActiveStudents}
                                valueAdditionalText={getStudentEnding(props.numberOfActiveStudents)}
                                label='Из них активных'
                            />
                        </div>
                    </div>
                    <SectionActivityChart items={props.sectionActivityChart} />
                </div>

                </div>
                <ChartWrapper
                    chartTitle={
                        'Активность на курсе, по неделям'
                    }
                    chart={
                        <DatesLineChart points={props.weeklyActivityChart} size={baseSize} />
                    }
                    additionalInfo={'Сколько человек посещало курс'}
                />
        </div>
    )
}