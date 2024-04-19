import * as React from 'react'
import ValueBox from '../../Charts/Box/ValueBox'
import './CommonSection.css'
import SectionHeader from '../SectionHeader/SectionHeader'
import DatesLineChart from '../../Charts/LineChart/DatesLineChart'
import SectionActivityChart from '../../Charts/SectionActivityChart/SectionActivityChart'
import ChartWrapper from '../../Charts/ChartWrapper/ChartWrapper'
import { getStudentEnding } from '../../../utils/utils'
import { CommonReport } from '../../../models/report'
import {ChartSize} from '../../../utils/utils';

export type CommonSectionProps = {
    report: CommonReport;
}

const baseLineChartBoxSize: ChartSize = {
    width: '50rem',
    height: '19rem'
}

const baseLineChartSize: ChartSize = {
    width: baseLineChartBoxSize.width,
    height: '14rem'
}

const baseLineChartSliderSize: ChartSize = {
    width: '47rem',
    height: baseLineChartBoxSize.height
}


export default function CommonSection(props: CommonSectionProps) {
    const courseId = props.report.course_id
    const headerText = `Аналитика по курсу "${courseId}"`
    const numberOfStudents = props.report.students_count
    const numberOfActiveStudents = props.report.active_students_count
    const sectionActivityChart = props.report.section_activity_chart.items
    const weeklyActivityChart = props.report.weekly_activity_chart.items.map(
        item => ({
            date: new Date(item.date),
            count: item.count
        }))

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
                                value = {numberOfStudents}
                                valueAdditionalText={getStudentEnding(numberOfStudents)}
                                label='Всего на курсе'
                            />
                        </div>
                        <div className={'lower-box'}>
                            <ValueBox
                                value = {numberOfActiveStudents}
                                valueAdditionalText={getStudentEnding(numberOfActiveStudents)}
                                label='Из них активных'
                            />
                        </div>
                    </div>
                    <div className={'activity_section'}>
                        <SectionActivityChart items={sectionActivityChart} numberOfStudents={numberOfStudents}/>
                    </div>
                </div>
                <ChartWrapper
                    chartTitle={
                        'Активность на курсе, по неделям'
                    }
                    chart={
                        <DatesLineChart
                            points={weeklyActivityChart}
                            boxSize={baseLineChartBoxSize}
                            lineChartSize={baseLineChartSize}
                            sliderSize={baseLineChartSliderSize}
                        />
                    }
                    additionalInfo={'Сколько человек посещало курс'}
                />
            </div>
        </div>
    )
}