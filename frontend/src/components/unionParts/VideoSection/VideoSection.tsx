import * as React from 'react';
import {useState} from 'react';
import './VideoSection.css'
import Header from "../HeaderSection/Header"
import TableHeatMap from '../../Charts/Table/TableHeatMap';
import LineChartWithModalWindow from '../../Charts/LineChart/LineChartWithModalWindow';

export type TableData = {
    boxTitle: string;
    columnName: string;
    columnCount: string;
    labelText: string;
    data: string;
}

export type VideoSectionProps = {
    tableData: TableData;
    lineChartData: string;
    headerText: string;
}

export default function VideoSection(props: VideoSectionProps) {

    const initialRowsData = props.tableData.data
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
        <div className={"video_interactions"}>
            <div style={{color: '#fff'}}>
                <Header text={props.headerText}/>
            </div>
            <div className={"video_interactions_container"}>
                <div className={"item_video_1"}>
                    <LineChartWithModalWindow data={props.lineChartData}/>
                    {/* <DateLineChart /> */}
                </div>
                <div className={"item_video_2"}>
                    <TableHeatMap
                        rows={rows}
                        boxTitle={props.tableData.boxTitle}
                        columnName={props.tableData.columnName}
                        columnCount={props.tableData.columnCount}
                        labelText={props.tableData.labelText}
                    />
                </div>
            </div>
        </div>
    );
};