import DonutsChart from '../../Charts/DonutsChart'
import * as React from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import { ProblemsReport } from '../../../models/report'
import TableHeatMap from '../../Charts/Table/TableHeatMap';
import TableHeatMapInsideWindow from '../../Charts/Table/TableHeatMapInsideModalWindow';
import ChartWrapper from '../../Charts/ChartWrapper/ChartWrapper';
import TableWithLink from '../../Charts/Table/TableWithLink';
import {PagesSectionProps} from '../PagesSection/PagesSection';
import {studentsVideoViews} from '../../../mockdata/CourseInfoPageData';
import TableWithLinkAndSearchBar from '../../Charts/Table/TableWithLinkAndSearchBar';
import {ProblemComplexity} from '../../../models/problems';
import {RowData} from '../../Charts/Table/TableWithLinkAndSearchBar';
import TableWithLinkAndSearchBarInsideWindow from '../../Charts/Table/TableWithLinkAndSearchBarInsideWindow';

export type ProblemsSectionProps = {
    report: ProblemsReport
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
        item => ({ value: item.percentage, label: item.attempt_count })
    )
    const transformedData = transformData(props.report.task_complexity_chart.items);
    const columnNameProblems = 'Ссылка на задачу';
    const columnCountProblems = 'Процент успешных решений';
    const labelTextProblems = 'Поиск задачи...';
    const boxTitleProblems = 'Сложность задач'
    return (
        <div>
            <SectionHeader text={'Решение задач'} />
            <div className={'problem_charts'}>
                 <ChartWrapper
                    chartTitle={boxTitleProblems}
                    chart={
                        <TableWithLinkAndSearchBar
                            rows={{items: transformedData}}
                            columnName={columnNameProblems}
                            columnCount={columnCountProblems}
                            labelText={labelTextProblems}
                        />}
                    popupChart={
                        <TableWithLinkAndSearchBarInsideWindow
                            boxTitle={boxTitleProblems}
                            rows={{items: transformedData}}
                            columnName={columnNameProblems}
                            columnCount={columnCountProblems}
                            labelText={labelTextProblems}
                        />
                    }
                    additionalInfo={''}
                />
                <DonutsChart data={problemsSummary} />
            </div>
        </div>
    )
}