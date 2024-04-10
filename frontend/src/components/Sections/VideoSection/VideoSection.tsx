import * as React from 'react';
import {useState} from 'react';
import './VideoSection.css'
import Header from '../SectionHeader/SectionHeader'
import TableHeatMap from '../../Charts/Table/TableHeatMap';
import LineChartWithModalWindow from '../../Charts/LineChart/LineChartWithModalWindow';
import {LineChartDate} from '../../Charts/LineChart/DatesLineChart'

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

export default function VideoSection(props: VideoSectionProps) {

    const initialRowsData = props.studentsVideoViews.data
        .trim()
        .split('\n')
        .map((row, index) => {
            const [user, time] = row.split(',');
            return {user, timeSec: Math.round(parseFloat(time))};
        })
        .sort((a, b) => b.timeSec - a.timeSec) // Сортировка по убыванию времени
        .map((data, index) => ({...data, id: index + 1})); // Добавление идентификатора
    const [rows, setRows] = useState(initialRowsData);


    return (
        <div className={'video_interactions'}>
            <Header text={props.headerText}/>
            <div className={'video_interactions_container'}>
                <div className={'item_video_1'}>
                    <LineChartWithModalWindow points={props.dailyVideoAmount}/>
                </div>
                <div className={'item_video_2'}>
                    <TableHeatMap
                        rows={rows}
                        boxTitle={props.studentsVideoViews.boxTitle}
                        columnName={props.studentsVideoViews.columnName}
                        columnCount={props.studentsVideoViews.columnCount}
                        labelText={props.studentsVideoViews.labelText}
                    />
                </div>
            </div>
        </div>
    );
}