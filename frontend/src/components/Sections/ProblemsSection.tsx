import DonutsChart from '../Charts/DonutsChart'
import * as React from 'react'
import { ProblemsReport } from '../../models/report'
import ChartWrapper from '../Charts/ChartWrapper'
import CoursePagePopularityTable, { RowData } from '../Charts/Table/CoursePagePopularityTable'
import { ProblemComplexity } from '../../models/problems'
import CoursePagePopularityTableWithStatistics from '../Charts/Table/CoursePagePopularityTableWithStatistics'
import { ChartSize, getLabelByAttemptCount } from '../../utils/utils'
import { Grid } from '@mui/material'
import ProblemInteractionTable from '../Charts/Table/ProblemsInteractionTable';

export type ProblemsSectionProps = {
    report: ProblemsReport;
};

const baseTableSize: ChartSize = {
    width: '55vh',
    height: '73vh'
}

const donutsChartSize: ChartSize = {
    width: '55vh',
    height: '17rem'
}

function transformData(data: ProblemComplexity[]): RowData[] {
    return data.map(problem => ({
        value: problem.problem_link,
        count: Math.round((problem.successful_attempts / problem.all_attempts) * 100),
        additional_value: problem.question
    }))
}

export default function ProblemsSection(props: ProblemsSectionProps) {
    const problemsSummary = props.report.task_summary_chart.items.map(item => ({
        value: item.percentage,
        label: item.attempt_count
    }))

    const transformedData = transformData(props.report.task_complexity_chart.items)
    const columnNameProblems = 'Ссылка на задачу'
    const columnCountProblems = 'Процент успешных решений'
    const labelTextProblems = 'Поиск задачи...'
    const boxTitleProblems = 'Сложность задач'

    return (
        <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} md={9}>
                <ChartWrapper
                    chartTitle={boxTitleProblems}
                    chart={
                        <ProblemInteractionTable
                            rows={transformedData}
                            columnName={columnNameProblems}
                            columnCount={columnCountProblems}
                            columnQuestion={'Вопрос'}
                            labelText={labelTextProblems}
                            tableSize={baseTableSize}
                            isLink={true}
                        />
                    }
                    popupChart={
                        <CoursePagePopularityTableWithStatistics
                            boxTitle={boxTitleProblems}
                            rows={transformedData}
                            columnName={columnNameProblems}
                            columnCount={columnCountProblems}
                            labelText={labelTextProblems}
                            tableSize={baseTableSize}
                        />
                    }
                />
            </Grid>
            <Grid item xs={12} md={9}>
                <ChartWrapper
                    chartTitle="Выводы по задачам"
                    chart={
                        <DonutsChart
                            data={problemsSummary.map(item => ({
                                ...item,
                                label: `${item.value}% ${getLabelByAttemptCount(item.label)}`
                            }))
                            }
                            size={donutsChartSize}
                        />
                    }
                />
            </Grid>
        </Grid>
    )
}
