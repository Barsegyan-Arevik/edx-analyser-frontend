import * as React from 'react'
import './TextbookSection.css'
import { TextbookReport } from '../../../models/report'
import ChartWrapper from '../../Charts/ChartWrapper/ChartWrapper';
import TableWithLinkAndSearchBar, {RowData} from '../../Charts/Table/TableWithLinkAndSearchBar';
import TableWithLinkAndSearchBarInsideWindow from '../../Charts/Table/TableWithLinkAndSearchBarInsideWindow';
import {WordSearchCount} from '../../../models/textbook';
import SectionHeader from '../SectionHeader/SectionHeader';

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



export default function TextbookSection(props: TextbookSectionProps) {
    const boxTitleSearchedTerms = 'Поиск по слову в учебнике'
    const columnNameSearchedTerms = 'Слова';
    const columnCountSearchedTerms = 'Количество поисков';
    const labelTextSearchedTerms = 'Поиск слова...';
    const transformedData = transformData(props.report.word_search_chart.items);
    console.log('im here')
    return (
        <div>
            {/*{props.report.course_id}*/}
            <SectionHeader text={'Работа с учебником'} />
            <ChartWrapper
                chartTitle={boxTitleSearchedTerms}
                chart={
                    <TableWithLinkAndSearchBar
                        rows={{items: transformedData}}
                        columnName={columnNameSearchedTerms}
                        columnCount={columnCountSearchedTerms}
                        labelText={labelTextSearchedTerms}
                    />}
                popupChart={
                    <TableWithLinkAndSearchBarInsideWindow
                        boxTitle={boxTitleSearchedTerms}
                        rows={{items: transformedData}}
                        columnName={columnNameSearchedTerms}
                        columnCount={columnCountSearchedTerms}
                        labelText={labelTextSearchedTerms}
                    />
                }
                additionalInfo={''}
            />

        </div>
    )
}





