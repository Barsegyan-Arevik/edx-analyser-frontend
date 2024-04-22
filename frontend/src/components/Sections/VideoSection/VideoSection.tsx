import * as React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import DatesLineChart from '../../Charts/LineChart/DatesLineChart';
import ChartWrapper from '../../Charts/ChartWrapper/ChartWrapper';
import { Box, Grid } from '@mui/material';
import { VideoReport } from '../../../models/report';
import TableThreeColumns, { RowData } from '../../Charts/Table/TableThreeColumns';
import { ChartSize } from '../../../utils/utils';

export type VideoSectionProps = {
    report: VideoReport;
};

const baseTableSize: ChartSize = {
    width: '40rem',
    height: '30rem',
};

const baseDatesLineChartBoxSize: ChartSize = {
    width: '45rem',
    height: '34rem',
};

const baseDatesLineChartSize: ChartSize = {
    width: '45rem',
    height: '20rem',
};

const baseDatesLineChartSliderSize: ChartSize = {
    width: '40rem',
    height: '20rem',
};

const modaDatesLineChartBoxSize: ChartSize = {
    width: '60rem',
    height: '25rem',
};

const modalDatesLineChartSize: ChartSize = {
    width: '60rem',
    height: '20rem',
};

const modalDatesLineChartSliderSize: ChartSize = {
    width: '55rem',
    height: '20rem',
};

const convertToRowData = (item: {
    video_link: string;
    views_count: number;
    unique_students_count: number;
}): RowData => {
    return {
        value: item.video_link,
        count: item.views_count,
        uniqueViews: item.unique_students_count,
    };
};

const convertPagesReportToRowDataArray = (videoInteractionReport: VideoReport): RowData[] => {
    return videoInteractionReport.video_interaction_chart.items.map(convertToRowData);
};

export default function VideoSection(props: VideoSectionProps) {
    const dailyVideoAmount = props.report.video_play_count_chart.items.map(item => ({
        date: new Date(item.date),
        count: item.count,
    }));

    const boxTitle = 'Популярность видеоматериалов';
    const columnName = 'Ссылка';
    const columnCount = 'Количество поисков';
    const columnUniqueViews = 'Уникальные просмотры';
    const labelText = 'Поиск видео...';

    return (
        <div>
            <SectionHeader text="Просмотр видеоматериалов" />
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} md={6}>
                    <div className={'item_video_1'}>
                        <ChartWrapper
                            chartTitle={'Количество воспроизведений видеоматериалов, распределённая по дням'}
                            chart={
                                <DatesLineChart
                                    points={dailyVideoAmount}
                                    boxSize={baseDatesLineChartBoxSize}
                                    lineChartSize={baseDatesLineChartSize}
                                    sliderSize={baseDatesLineChartSliderSize}
                                />
                            }
                            popupChart={
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        bgcolor: 'background.paper',
                                        boxShadow: 24,
                                        p: 4,
                                        borderRadius: 2,
                                    }}
                                >
                                    <DatesLineChart
                                        points={dailyVideoAmount}
                                        boxSize={modaDatesLineChartBoxSize}
                                        lineChartSize={modalDatesLineChartSize}
                                        sliderSize={modalDatesLineChartSliderSize}
                                    />
                                </Box>
                            }
                            additionalInfo="Какое-нибудь длинное описание, зачем нужен этот график"
                        />
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div className={'item_video_2'}>
                        <ChartWrapper
                            chartTitle={boxTitle}
                            chart={
                                <TableThreeColumns
                                    rows={{ items: convertPagesReportToRowDataArray(props.report) }}
                                    columnName={columnName}
                                    columnCount={columnCount}
                                    columnUniqueViews={columnUniqueViews}
                                    labelText={labelText}
                                    size={baseTableSize}
                                />
                            }
                        />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
