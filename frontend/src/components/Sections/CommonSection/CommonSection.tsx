import * as React from 'react'
import ValueBox from '../../Charts/Box/ValueBox'
import './CommonSection.css'
import SectionHeader from '../SectionHeader/SectionHeader'
import DatesLineChart, { LineChartSize } from '../../Charts/LineChart/DatesLineChart'
import SectionActivityChart from '../../Charts/SectionActivityChart'
import ChartWrapper from '../../Charts/ChartWrapper'
import { getStudentEnding } from '../../../utils/utils'
import { CommonReport } from '../../../models/report'

export type CommonSectionProps = {
    report: CommonReport;
}

const baseSize: LineChartSize = {
    width: 750,
    height: 470
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
        <div className={'top_analytics'}>
            <SectionHeader text={headerText} style={{ paddingTop: '30px' }} />
            <div className={'main_content'}>
                <div className={'side-container'}>
                    <div className={'side-box-up'}>
                        <ValueBox
                            value={numberOfStudents}
                            valueAdditionalText={getStudentEnding(numberOfStudents)}
                            label="Всего на курсе"
                        />
                    </div>
                    <div className={'side-box-down'}>
                        <ValueBox
                            value={numberOfActiveStudents}
                            valueAdditionalText={getStudentEnding(numberOfActiveStudents)}
                            label="Из них активных"
                        />
                    </div>
                </div>
                <SectionActivityChart items={sectionActivityChart} />
            </div>
            <ChartWrapper
                chartTitle={
                    'Активность на курсе, по неделям'
                }
                chart={
                    <DatesLineChart points={weeklyActivityChart} size={baseSize} />
                }
                additionalInfo={'Сколько человек посещало курс'}
            />
        </div>
    )
}

