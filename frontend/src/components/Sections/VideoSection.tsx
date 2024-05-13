import * as React from 'react'
import DatesLineChart from '../Charts/DatesLineChart'
import ChartWrapper from '../Charts/ChartWrapper'
import {Grid} from '@mui/material'
import {VideoReport} from '../../models/report'
import {ChartSize} from '../../utils/utils'
import VideoPopularityTable, {VideoPopularity} from '../Charts/Table/VideoPopularityTable'

export type VideoSectionProps = {
    report: VideoReport;
};

const baseDatesLineChartBoxSize: ChartSize = {
    width: '45rem',
    height: '73vh'
}

const baseDatesLineChartSize: ChartSize = {
    width: '45rem',
    height: '60vh'
}

const baseDatesLineChartSliderSize: ChartSize = {
    width: '40rem',
    height: '20rem'
}

const convertToRowData = (item: {
    video_link: string;
    views_count: number;
    unique_students_count: number;
    popular_fragments: string;
}): VideoPopularity => {
    return {
        value: item.video_link,
        count: item.views_count,
        uniqueViews: item.unique_students_count,
        fragments: item.popular_fragments
    }
}

const convertPagesReportToRowDataArray = (videoInteractionReport: VideoReport): VideoPopularity[] => {
    return videoInteractionReport.video_interaction_chart.items.map(convertToRowData)
}

export default function VideoSection(props: VideoSectionProps) {
    const dailyVideoAmount = props.report.video_play_count_chart.items.map(item => ({
        date: new Date(item.date),
        count: item.count
    }))

    return (
        <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} md={10}>
                <ChartWrapper
                    chartTitle="Популярность видеоматериалов"
                    chart={
                        <VideoPopularityTable
                            rows={convertPagesReportToRowDataArray(props.report)}
                            columnName="Ссылка на видео"
                            columnCount="Просмотры"
                            columnUniqueViews="Уникальные просмотры"
                            labelText="Поиск видео..."
                            size={{
                                width: '55vh',
                                height: '73vh'
                            }}
                        />
                    }
                />
            </Grid>
            <Grid item xs={12} md={10}>
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
                />
            </Grid>
        </Grid>
    )
}
