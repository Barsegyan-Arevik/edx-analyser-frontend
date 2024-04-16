import * as React from 'react'
import './VideoSection.css'
import SectionHeader from '../SectionHeader/SectionHeader'
import TableHeatMap from '../../Charts/Table/TableHeatMap'
import TableHeatMapInsideWindow from '../../Charts/Table/TableHeatMapInsideModalWindow'
import DatesLineChart, { LineChartSize } from '../../Charts/LineChart/DatesLineChart'
import ChartWrapper from '../../Charts/ChartWrapper'
import { Box } from '@mui/material'
import { VideoReport } from '../../../models/report'
import { useState } from 'react'
import { studentsVideoViews } from '../../../mockdata/CourseInfoPageData'

export type VideoSectionProps = {
    report: VideoReport
}

const baseSize: LineChartSize = {
    width: 750,
    height: 470
}

const modalSize: LineChartSize = {
    width: 1150,
    height: 400
}


export default function VideoSection(props: VideoSectionProps) {

    // todo: replace by report.video_interaction_chart
    const initialRowsData = studentsVideoViews.data
        .trim()
        .split('\n')
        .map((row, index) => {
            const [user, time] = row.split(',')
            return { user, timeSec: Math.round(parseFloat(time)) }
        })
        .sort((a, b) => b.timeSec - a.timeSec) // Сортировка по убыванию времени
        .map((data, index) => ({ ...data, id: index + 1 })) // Добавление идентификатора
    const [rows, setRows] = useState(initialRowsData)

    const dailyVideoAmount = props.report.video_play_count_chart.items.map(
        item => ({
            date: new Date(item.date),
            count: item.count
        })
    )


    return (
        <div className={'video_interactions'}>
            <SectionHeader text="Просмотр видеоматериалов" />
            <div className={'video_interactions_container'}>
                <div className={'item_video_1'}>
                    <ChartWrapper
                        chartTitle={'Количество воспроизведений видеоматериалов, распределённая по дням'}
                        chart={<DatesLineChart points={dailyVideoAmount} size={baseSize} />}
                        popupChart={<Box
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
                            <DatesLineChart points={dailyVideoAmount} size={modalSize} />
                        </Box>}
                        additionalInfo="Какое-нибудь длинное описание, зачем нужен этот график"
                    />
                </div>
                <div className={'item_video_2'}>
                    <ChartWrapper
                        chartTitle={studentsVideoViews.boxTitle}
                        chart={
                            <TableHeatMap
                                rows={rows}
                                {...studentsVideoViews}
                            />}
                        popupChart={
                            <TableHeatMapInsideWindow
                                rows={rows}
                                {...studentsVideoViews} />
                        }
                        additionalInfo={studentsVideoViews.labelText}
                    />
                </div>
            </div>
        </div>
    )
}