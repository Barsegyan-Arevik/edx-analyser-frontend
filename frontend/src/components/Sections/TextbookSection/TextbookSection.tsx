import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SectionHeader from '../SectionHeader/SectionHeader';
import ChartWrapper from '../../Charts/ChartWrapper/ChartWrapper';
import TableThreeColumns from '../../Charts/Table/TableThreeColumns';
import TableWithLinkAndSearchBar, {RowData} from '../../Charts/Table/TableWithLinkAndSearchBar';
import TableWithLinkAndSearchBarInsideWindow from '../../Charts/Table/TableWithLinkAndSearchBarInsideWindow';
import {ChartSize} from '../../../utils/utils';
import {TextbookReport} from '../../../models/report';
import {WordSearchCount} from '../../../models/textbook';

export type TextbookSectionProps = {
    report: TextbookReport;
};

const baseTableSizeTextbookViewsChart: ChartSize = {
    width: '50rem',
    height: '30rem'
};

const baseTableSizeSearchedTerms: ChartSize = {
    width: '30rem',
    height: '30rem'
};

const modalTableSizeSearchedTerms: ChartSize = {
    width: '50rem',
    height: '25rem'
};

function transformData(data: WordSearchCount[]): RowData[] {
    return data.map(problem => ({
        value: problem.word,
        count: problem.search_count,
    }));
}

const TextbookSection: React.FC<TextbookSectionProps> = (props) => {
    const boxTitleSearchedTerms = 'Поиск по слову в учебнике';
    const columnNameSearchedTerms = 'Слова';
    const columnCountSearchedTerms = 'Количество поисков';
    const labelTextSearchedTerms = 'Поиск слова...';
    const transformedData = transformData(props.report.word_search_chart.items);

    const boxTitleTextbookViewsChart = 'Поиск по слову в учебнике';
    const columnNameTextbookViewsChart = 'Слова';
    const columnCountTextbookViewsChart = 'Количество поисков';
    const columnUniqueViewsTextbookViewsChart = 'Уникальные просмотры';
    const labelTextTextbookViewsChart = 'Поиск слова...';

    const rowsTextbookViewsChart = props.report.textbook_views_chart.items.map(
        item => ({value: item.pdf_name, count: item.views_count, uniqueViews: item.unique_students_count})
    );

    return (
        <Box>
            <SectionHeader text={'Работа с учебником'}/>
            <Grid container spacing={2} direction="row" justifyContent="center" margin={2}>
                <Grid item xs={12} md={7}>
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
                            />
                        }
                        // additionalInfo={'Какой-то текст здесь'}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <ChartWrapper
                        chartTitle={boxTitleSearchedTerms}
                        chart={
                            <TableWithLinkAndSearchBar
                                rows={{items: transformedData}}
                                columnName={columnNameSearchedTerms}
                                columnCount={columnCountSearchedTerms}
                                labelText={labelTextSearchedTerms}
                                size={baseTableSizeSearchedTerms}
                            />
                        }
                        // popupChart={
                        //     <TableWithLinkAndSearchBarInsideWindow
                        //         boxTitle={boxTitleSearchedTerms}
                        //         rows={{items: transformedData}}
                        //         columnName={columnNameSearchedTerms}
                        //         columnCount={columnCountSearchedTerms}
                        //         labelText={labelTextSearchedTerms}
                        //         baseTableSize={baseTableSizeSearchedTerms}
                        //         modalTableSize={modalTableSizeSearchedTerms}
                        //     />
                        // }
                        additionalInfo={''}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default TextbookSection;
