import DonutsChart, { DonutsChartData } from '../../Charts/DonutsChart'
import * as React from 'react'

export type ProblemsSectionProps = {
    problemsSummary: DonutsChartData[]
    problemsComplexity: {problem_link: string; success_percentage: number}[]
}

export default function ProblemsSection(
    props: ProblemsSectionProps
) {
    return (
        <div>
            <DonutsChart data={props.problemsSummary} />
        </div>
    )
}
