import * as React from 'react'
import {useState} from 'react'
import './VideoSection.css'
import SectionHeader from '../SectionHeader/SectionHeader'
import DatesLineChart, {LineChartSize} from '../../Charts/LineChart/DatesLineChart'
import ChartWrapper from '../../Charts/ChartWrapper/ChartWrapper'
import {Box} from '@mui/material'
import {VideoReport} from '../../../models/report'
import {studentsVideoViews} from '../../../mockdata/CourseInfoPageData'
import TableThreeColumns, {RowData} from '../../Charts/Table/TableThreeColumns';

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

const convertToRowData = (item: {
    video_link: string;
    views_count: number;
    unique_students_count: number
}): RowData => {
    return {
        value: item.video_link,
        count: item.views_count,
        uniqueViews: item.unique_students_count
    };
};

const convertPagesReportToRowDataArray = (videoInteractionReport: VideoReport): RowData[] => {
    return videoInteractionReport.video_interaction_chart.items.map(convertToRowData);
};


export default function VideoSection(props: VideoSectionProps) {

    // todo: replace by report.video_interaction_chart
    const initialRowsData = studentsVideoViews.data
        .trim()
        .split('\n')
        .map((row, index) => {
            const [user, time] = row.split(',')
            return {user, timeSec: Math.round(parseFloat(time))}
        })
        .sort((a, b) => b.timeSec - a.timeSec) // Сортировка по убыванию времени
        .map((data, index) => ({...data, id: index + 1})) // Добавление идентификатора
    const [rows, setRows] = useState(initialRowsData)

    const dailyVideoAmount = props.report.video_play_count_chart.items.map(
        item => ({
            date: new Date(item.date),
            count: item.count
        })
    )

    const boxTitle = 'Популярность видеоматериалов';
    const columnName = 'Ссылка';
    const columnCount = 'Количество поисков';
    const columnUniqueViews = 'Уникальные просмотры'
    const labelText = 'Поиск видео...';


    return (
        <div className={'video_interactions'}>
            <SectionHeader text="Просмотр видеоматериалов"/>
            <div className={'video_interactions_container'}>
                <div className={'item_video_1'}>
                    <ChartWrapper
                        chartTitle={'Количество воспроизведений видеоматериалов, распределённая по дням'}
                        chart={<DatesLineChart points={dailyVideoAmount} size={baseSize}/>}
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
                            <DatesLineChart points={dailyVideoAmount} size={modalSize}/>
                        </Box>}
                        additionalInfo="Какое-нибудь длинное описание, зачем нужен этот график"
                    />
                </div>
                <div className={'item_video_2'}>
                    <ChartWrapper
                        chartTitle={boxTitle}
                        chart={
                            <TableThreeColumns
                                rows={{items: convertPagesReportToRowDataArray(props.report)}}
                                columnName={columnName}
                                columnCount={columnCount}
                                columnUniqueViews={columnUniqueViews}
                                labelText={labelText}
                            />}
                        additionalInfo={studentsVideoViews.labelText}
                    />
                </div>
            </div>
        </div>
    )
}