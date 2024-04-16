import DonutsChart from '../../Charts/DonutsChart'
import * as React from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import { ProblemsReport } from '../../../models/report'

export type ProblemsSectionProps = {
    report: ProblemsReport
}

export default function ProblemsSection(
    props: ProblemsSectionProps
) {
    const problemsSummary = props.report.task_summary_chart.items.map(
        item => ({ label: item.attempt_count, value: item.percentage })
    )
    return (
        <div>
            <SectionHeader text={'Решение задач'} />
            <DonutsChart data={problemsSummary} />
        </div>
    )
}
