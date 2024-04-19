import * as React from 'react'
import './TextbookSection.css'
import {TextbookReport} from '../../../models/report'
import ChartWrapper from '../../Charts/ChartWrapper/ChartWrapper';
import TableWithLinkAndSearchBar, {RowData} from '../../Charts/Table/TableWithLinkAndSearchBar';
import TableWithLinkAndSearchBarInsideWindow from '../../Charts/Table/TableWithLinkAndSearchBarInsideWindow';
import {WordSearchCount} from '../../../models/textbook';
import SectionHeader from '../SectionHeader/SectionHeader';
import TableThreeColumns from '../../Charts/Table/TableThreeColumns';
import {ChartSize} from '../../../utils/utils';

export type TableData = {
    columnName: string;
    additionalColumn?: string;
    columnCount: string;
    labelText: string;
    data: string;
}

function transformData(data: WordSearchCount[]): RowData[] {
    return data.map(problem => ({
        value: problem.word,
        count: problem.search_count,
    }));
}

export type TextbookSectionProps = {
    report: TextbookReport
}

const baseTableSizeTextbookViewsChart: ChartSize = {
    width: '50rem',
    height: '30rem'
}

const baseTableSizeSearchedTerms: ChartSize = {
    width: '30rem',
    height: '30rem'
}

const modalTableSizeSearchedTerms: ChartSize = {
    width: '50rem',
    height: '25rem'
}


export default function TextbookSection(props: TextbookSectionProps) {
    const boxTitleSearchedTerms = 'Поиск по слову в учебнике'
    const columnNameSearchedTerms = 'Слова';
    const columnCountSearchedTerms = 'Количество поисков';
    const labelTextSearchedTerms = 'Поиск слова...';
    const transformedData = transformData(props.report.word_search_chart.items);

    const boxTitleTextbookViewsChart = 'Поиск по слову в учебнике'
    const columnNameTextbookViewsChart = 'Слова';
    const columnCountTextbookViewsChart = 'Количество поисков';
    const columnUniqueViewsTextbookViewsChart = 'Уникальные просмотры';
    const labelTextTextbookViewsChart = 'Поиск слова...';

    const rowsTextbookViewsChart = props.report.textbook_views_chart.items.map(
        item => ({value: item.pdf_name, count: item.views_count, uniqueViews: item.unique_students_count})
    )

    return (
        <div>
            {/*{props.report.course_id}*/}
            <SectionHeader text={'Работа с учебником'}/>
            <div className={'textbook-charts'}>
                <ChartWrapper
                    chartTitle={boxTitleTextbookViewsChart}
                    chart={
                        <TableThreeColumns
                            rows={{items: rowsTextbookViewsChart}}
                            columnName={columnNameTextbookViewsChart}
                            columnCount={columnCountTextbookViewsChart}
                            columnUniqueViews={columnUniqueViewsTextbookViewsChart}
                            labelText={labelTextTextbookViewsChart}
                            size={baseTableSizeTextbookViewsChart}
                        />}
                 />
                <ChartWrapper
                    chartTitle={boxTitleSearchedTerms}
                    chart={
                        <TableWithLinkAndSearchBar
                            rows={{items: transformedData}}
                            columnName={columnNameSearchedTerms}
                            columnCount={columnCountSearchedTerms}
                            labelText={labelTextSearchedTerms}
                            size={baseTableSizeSearchedTerms}
                        />}
                    popupChart={
                        <TableWithLinkAndSearchBarInsideWindow
                            boxTitle={boxTitleSearchedTerms}
                            rows={{items: transformedData}}
                            columnName={columnNameSearchedTerms}
                            columnCount={columnCountSearchedTerms}
                            labelText={labelTextSearchedTerms}
                            baseTableSize={baseTableSizeSearchedTerms}
                            modalTableSize={modalTableSizeSearchedTerms}
                        />
                    }
                    additionalInfo={''}
                />
            </div>
        </div>
    )
}





