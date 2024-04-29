import ChartWrapper from '../Charts/ChartWrapper'
import * as React from 'react'
import { PagesReport } from '../../models/report'
import CoursePagePopularityTable, { RowData } from '../Charts/Table/CoursePagePopularityTable'
import CoursePagePopularityTableWithStatistics from '../Charts/Table/CoursePagePopularityTableWithStatistics'
import { ChartSize } from '../../utils/utils'

export type PagesSectionProps = {
    report: PagesReport
}

const convertToRowData = (item: { page_link: string; visits_count: number; }): RowData => {
    return {
        value: item.page_link,
        count: item.visits_count
    }
}

const baseTableSize: ChartSize = {
    width: '50rem',
    height: '30rem'
}

const convertPagesReportToRowDataArray = (pagesReport: PagesReport): RowData[] => {
    return pagesReport.pages_popularity_chart.items.map(convertToRowData)
}

export default function PagesSection(
    props: PagesSectionProps
) {
    const boxTitlePages = 'Популярность страниц курса'
    const columnNamePages = 'Ссылка'
    const columnCountPages = 'Количество посещений'
    const labelTextPages = 'Поиск ссылки...'

    return (
        <div className="document_interaction_container">
            <div className="item_doc_2">
                <ChartWrapper
                    chartTitle={boxTitlePages}
                    chart={
                        <CoursePagePopularityTable
                            rows={convertPagesReportToRowDataArray(props.report)}
                            columnName={columnNamePages}
                            columnCount={columnCountPages}
                            labelText={labelTextPages}
                            tableSize={baseTableSize}
                        />}
                    popupChart={
                        <CoursePagePopularityTableWithStatistics
                            boxTitle={boxTitlePages}
                            rows={convertPagesReportToRowDataArray(props.report)}
                            columnName={columnNamePages}
                            columnCount={columnCountPages}
                            labelText={labelTextPages}
                            tableSize={baseTableSize}
                        />
                    }
                    additionalInfo={''}
                />
            </div>
        </div>
    )
}
