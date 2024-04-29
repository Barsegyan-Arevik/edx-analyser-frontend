import * as React from 'react'
import Grid from '@mui/material/Grid'
import ChartWrapper from '../Charts/ChartWrapper'
import CourseElementInteractionTable from '../Charts/Table/CourseElementInteractionTable'
import CoursePagePopularityTable, {RowData} from '../Charts/Table/CoursePagePopularityTable'
import {TextbookReport} from '../../models/report'
import {WordSearchCount} from '../../models/textbook'

export type TextbookSectionProps = {
    report: TextbookReport;
};

function transformData(data: WordSearchCount[]): RowData[] {
    return data.map(problem => ({
        value: problem.word,
        count: problem.search_count
    }))
}

const TextbookSection: React.FC<TextbookSectionProps> = (props) => {
    const transformedData = transformData(props.report.word_search_chart.items)

    const rowsTextbookViewsChart = props.report.textbook_views_chart.items.map(
        item => ({value: item.pdf_name, count: item.views_count, uniqueViews: item.unique_students_count})
    )

    return (
        <Grid container spacing={2} direction="row" justifyContent="center" margin={2}>
            <Grid item xs={12} md={7}>
                <ChartWrapper
                    chartTitle="Взаимодействие с учебником"
                    chart={
                        <CourseElementInteractionTable
                            rows={rowsTextbookViewsChart}
                            columnName="Название главы"
                            columnCount="Просмотры"
                            columnUniqueViews="Уникальные просмотры"
                            labelText="Поиск главы..."
                            size={{
                                width: '50rem',
                                height: '30rem'
                            }}
                        />
                    }
                    additionalInfo={'Какой-то текст здесь'}
                />
            </Grid>
            <Grid item xs={12} md={4}>
                <ChartWrapper
                    chartTitle="Поиск по слову в учебнике"
                    chart={
                        <CoursePagePopularityTable
                            rows={transformedData}
                            columnName="Слово"
                            columnCount="Количество поисков"
                            labelText="Поиск слова..."
                            tableSize={{
                                width: '30rem',
                                height: '30rem'
                            }}
                        />
                    }
                    // popupChart={
                    //     <TableWithLinkAndSearchBarInsideWindow
                    //         boxTitle={boxTitleSearchedTerms}
                    //         rows={transformedData}
                    //         columnName={columnNameSearchedTerms}
                    //         columnCount={columnCountSearchedTerms}
                    //         labelText={labelTextSearchedTerms}
                    //         baseTableSize={baseTableSizeSearchedTerms}
                    //         modalTableSize={modalTableSizeSearchedTerms}
                    //     />
                    // }
                />
            </Grid>
        </Grid>
    )
}

export default TextbookSection
