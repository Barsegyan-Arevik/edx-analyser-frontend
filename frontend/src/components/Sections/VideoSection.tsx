import * as React from 'react'
import DatesLineChart from '../Charts/DatesLineChart'
import ChartWrapper from '../Charts/ChartWrapper'
import {Box, Grid} from '@mui/material'
import {VideoReport} from '../../models/report'
import CourseElementInteractionTable, {RowData} from '../Charts/Table/CourseElementInteractionTable'
import {ChartSize} from '../../utils/utils'

export type VideoSectionProps = {
    report: VideoReport;
};

const baseDatesLineChartBoxSize: ChartSize = {
    width: '45rem',
    height: '34rem'
}

const baseDatesLineChartSize: ChartSize = {
    width: '45rem',
    height: '20rem'
}

const baseDatesLineChartSliderSize: ChartSize = {
    width: '40rem',
    height: '20rem'
}

const modaDatesLineChartBoxSize: ChartSize = {
    width: '60rem',
    height: '25rem'
}

const modalDatesLineChartSize: ChartSize = {
    width: '60rem',
    height: '20rem'
}

const modalDatesLineChartSliderSize: ChartSize = {
    width: '55rem',
    height: '20rem'
}

const convertToRowData = (item: {
    video_link: string;
    views_count: number;
    unique_students_count: number;
}): RowData => {
    return {
        value: item.video_link,
        count: item.views_count,
        uniqueViews: item.unique_students_count
    }
}

const convertPagesReportToRowDataArray = (videoInteractionReport: VideoReport): RowData[] => {
    return videoInteractionReport.video_interaction_chart.items.map(convertToRowData)
}

export default function VideoSection(props: VideoSectionProps) {
    const dailyVideoAmount = props.report.video_play_count_chart.items.map(item => ({
        date: new Date(item.date),
        count: item.count
    }))

    return (
        <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} md={6}>
                <div className={'item_video_1'}>
                    <ChartWrapper
                        chartTitle={'Количество воспроизведений видеоматериалов, по дням'}
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
                                    borderRadius: 2
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
                    />
                </div>
            </Grid>
            <Grid item xs={12} md={6}>
                <div className={'item_video_2'}>
                    <ChartWrapper
                        chartTitle="Популярность видеоматериалов"
                        chart={
                            <CourseElementInteractionTable
                                rows={convertPagesReportToRowDataArray(props.report)}
                                columnName="Ссылка на видео"
                                columnCount="Просмотры"
                                columnUniqueViews="Уникальные просмотры"
                                labelText="Поиск видео..."
                                size={{
                                    width: '40rem',
                                    height: '30rem'
                                }}
                            />
                        }
                    />
                </div>
            </Grid>
        </Grid>
    )
}
