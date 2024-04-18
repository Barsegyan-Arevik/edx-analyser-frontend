import SectionHeader from '../SectionHeader/SectionHeader'
import ChartWrapper from '../../Charts/ChartWrapper/ChartWrapper'
import TableWithLink from '../../Charts/Table/TableWithLink'
import * as React from 'react'
import { PagesReport } from '../../../models/report'
import { tablePages } from '../../../mockdata/CourseInfoPageData'
import TableWithLinkAndSearchBar, {RowData} from '../../Charts/Table/TableWithLinkAndSearchBar';
import TableWithLinkAndSearchBarInsideWindow from '../../Charts/Table/TableWithLinkAndSearchBarInsideWindow';


export type PagesSectionProps = {
    report: PagesReport
}


const convertToRowData = (item: { page_link: string; visits_count: number; }): RowData => {
    return {
        value: item.page_link,
        count: item.visits_count
    };
};

// Преобразование массива items из PagesReport в массив RowData
const convertPagesReportToRowDataArray = (pagesReport: PagesReport): RowData[] => {
    return pagesReport.pages_popularity_chart.items.map(convertToRowData);
};

export default function PagesSection(
    props: PagesSectionProps
) {
    const boxTitlePages = 'Популярность страниц курса'
    const columnNamePages = 'Ссылка';
    const columnCountPages = 'Количество поисков';
    const labelTextPages = 'Поиск ссылки...';

    return (
        <div>
            <SectionHeader text='Взаимодействие со страницами курса' style={{ marginTop: '20px' }} />
            <div className="document_interaction_container">
                <div className="item_doc_2">
                    <ChartWrapper
                        chartTitle={boxTitlePages}
                        chart={
                            <TableWithLinkAndSearchBar
                                rows={{items: convertPagesReportToRowDataArray(props.report)}}
                                columnName={columnNamePages}
                                columnCount={columnCountPages}
                                labelText={labelTextPages}
                            />}
                        popupChart={
                            <TableWithLinkAndSearchBarInsideWindow
                                boxTitle={boxTitlePages}
                                rows={{items: convertPagesReportToRowDataArray(props.report)}}
                                columnName={columnNamePages}
                                columnCount={columnCountPages}
                                labelText={labelTextPages}
                            />
                        }
                        additionalInfo={''}
                    />
                </div>
            </div>
        </div>
    )
}
