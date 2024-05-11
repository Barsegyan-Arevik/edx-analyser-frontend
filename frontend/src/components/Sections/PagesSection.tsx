import ChartWrapper from '../Charts/ChartWrapper'
import * as React from 'react'
import { PagesReport } from '../../models/report'
import CoursePagePopularityTable, { RowData } from '../Charts/Table/CoursePagePopularityTable'
import CoursePagePopularityTableWithStatistics from '../Charts/Table/CoursePagePopularityTableWithStatistics'
import { ChartSize } from '../../utils/utils'
import {Grid} from '@mui/material';

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
    width: '55vh',
    height: '73vh'
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
        <Grid container direction="row" justifyContent="center">
            <Grid item xs={12} md={9}>
                <ChartWrapper
                    chartTitle={boxTitlePages}
                    chart={
                        <CoursePagePopularityTable
                            rows={convertPagesReportToRowDataArray(props.report)}
                            columnName={columnNamePages}
                            columnCount={columnCountPages}
                            labelText={labelTextPages}
                            tableSize={baseTableSize}
                            isLink={true}
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
            </Grid>
        </Grid>
    )
}
