import * as React from 'react'
import { useState } from 'react'
import './VideoSection.css'
import Header from '../SectionHeader/SectionHeader'
import TableHeatMap from '../../Charts/Table/TableHeatMap'
import TableHeatMapInsideWindow from '../../Charts/Table/TableHeatMapInsideModalWindow'
import DatesLineChart, { LineChartDate, LineChartSize } from '../../Charts/LineChart/DatesLineChart'
import ChartWrapper from '../../Charts/ChartWrapper'
import { Box } from '@mui/material'

export type TableData = {
    boxTitle: string;
    columnName: string;
    columnCount: string;
    labelText: string;
    data: string;
}

export type VideoSectionProps = {
    studentsVideoViews: TableData;
    dailyVideoAmount: Array<LineChartDate>;
    headerText: string;
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

    const initialRowsData = props.studentsVideoViews.data
        .trim()
        .split('\n')
        .map((row, index) => {
            const [user, time] = row.split(',')
            return { user, timeSec: Math.round(parseFloat(time)) }
        })
        .sort((a, b) => b.timeSec - a.timeSec) // Сортировка по убыванию времени
        .map((data, index) => ({ ...data, id: index + 1 })) // Добавление идентификатора
    const [rows, setRows] = useState(initialRowsData)


    return (
        <div className={'video_interactions'}>
            <Header text={props.headerText} />
            <div className={'video_interactions_container'}>
                <div className={'item_video_1'}>
                    <ChartWrapper
                        chartTitle={'Количество воспроизведений видеоматериалов, распределённая по дням'}
                        chart={<DatesLineChart points={props.dailyVideoAmount} lineChartSize={baseSize} />}
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
                            <DatesLineChart points={props.dailyVideoAmount} lineChartSize={modalSize} />
                        </Box>}
                        additionalInfo='Какое-нибудь длинное описание, зачем нужен этот график'
                    />
                </div>
                <div className={'item_video_2'}>
                    <ChartWrapper
                        chartTitle={props.studentsVideoViews.boxTitle}
                        chart={
                            <TableHeatMap
                                rows={rows}
                                {...props.studentsVideoViews}
                            />}
                        popupChart={
                            <TableHeatMapInsideWindow
                                rows={rows}
                                {...props.studentsVideoViews} />
                        }
                        additionalInfo={props.studentsVideoViews.labelText}
                    />
                </div>
            </div>
        </div>
    )
}