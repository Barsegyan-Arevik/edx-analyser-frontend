import DonutsChart, { DonutsChartData } from '../../Charts/DonutsChart'
import * as React from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'

export type ProblemsSectionProps = {
    problemsSummary: DonutsChartData[]
    problemsComplexity: {problem_link: string; success_percentage: number}[]
}

export default function ProblemsSection(
    props: ProblemsSectionProps
) {
    return (
        <div>
            <SectionHeader text={'Решение задач'}/>
            <DonutsChart data={props.problemsSummary} />
        </div>
    )
}
