import DonutsChart from '../../Charts/DonutsChart'
import * as React from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import {ProblemsReport} from '../../../models/report'
import ChartWrapper from '../../Charts/ChartWrapper/ChartWrapper';
import TableWithLinkAndSearchBar, {RowData} from '../../Charts/Table/TableWithLinkAndSearchBar';
import {ProblemComplexity} from '../../../models/problems';
import TableWithLinkAndSearchBarInsideWindow from '../../Charts/Table/TableWithLinkAndSearchBarInsideWindow';
import {ChartSize} from '../../../utils/utils';
import './ProblemSection.css'

export type ProblemsSectionProps = {
    report: ProblemsReport
}

const baseTableSize: ChartSize = {
    width: '50rem',
    height: '30rem'
}

const modalTableSize: ChartSize = {
    width: '50rem',
    height: '25rem'
}

const donutsChartSize: ChartSize = {
    width: '20rem',
    height: '37rem'
}

function transformData(data: ProblemComplexity[]): RowData[] {
    return data.map(problem => ({
        value: problem.problem_link,
        count: Math.round((problem.successful_attempts / problem.all_attempts) * 100),
    }));
}

export default function ProblemsSection(
    props: ProblemsSectionProps
) {
    const problemsSummary = props.report.task_summary_chart.items.map(
        item => ({value: item.percentage, label: item.attempt_count})
    )

    const transformedData = transformData(props.report.task_complexity_chart.items);
    const columnNameProblems = 'Ссылка на задачу';
    const columnCountProblems = 'Процент успешных решений';
    const labelTextProblems = 'Поиск задачи...';
    const boxTitleProblems = 'Сложность задач';

    const chartTitle = 'Выводы по задачам'
    return (
        <div>
            <SectionHeader text={'Решение задач'}/>
            {/*<div style={{display: 'flex', justifyContent: 'center'}}>*/}
            <div className={'problem-charts'}>
                <ChartWrapper
                    chartTitle={boxTitleProblems}
                    chart={
                        <TableWithLinkAndSearchBar
                            rows={{items: transformedData}}
                            columnName={columnNameProblems}
                            columnCount={columnCountProblems}
                            labelText={labelTextProblems}
                            size={baseTableSize}
                        />
                    }
                    popupChart={
                        <TableWithLinkAndSearchBarInsideWindow
                            boxTitle={boxTitleProblems}
                            rows={{items: transformedData}}
                            columnName={columnNameProblems}
                            columnCount={columnCountProblems}
                            labelText={labelTextProblems}
                            baseTableSize={baseTableSize}
                            modalTableSize={modalTableSize}
                        />
                    }
                    additionalInfo={''}
                />
                <ChartWrapper
                    chartTitle={chartTitle}
                    chart={
                        <DonutsChart data={problemsSummary} size={donutsChartSize}/>
                    }
                />
                {/*<DonutsChart data={problemsSummary} chartTitle={chartTitle}/>*/}
            </div>
        </div>
    )
}