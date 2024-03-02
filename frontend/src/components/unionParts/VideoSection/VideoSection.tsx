import * as React from 'react';
import DateLineChart from "../../Charts/LineChart";
import SimpleBarChart from "../../Charts/BarChart";
import './VideoSection.css'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Dayjs } from 'dayjs';
import LineChartWithCustomDateRangePicker from "../../Charts/LineChart";
import Header from "../HeaderSection/Header"
import CustomTableRealData from "../../Charts/TableHeatMapRealData";
import { useState, useEffect } from "react";
import GraphWithModal from '../../Charts/LineChartWithModalWindow';
import { TableHeatMapProps } from '../../Charts/TableHeatMapRealData';


export type TableData = {
    boxTitle: string;
    columnName: string;
    columnCount: string;
    labelText: string;
    data: string;
}

export type VideoSectionProps = {
    tableData: TableData;
    headerText: string;
    // !!!graphData?  
}

export default function VideoSection(props: VideoSectionProps) {

    const initialRowsData = props.tableData.data
        .trim()
        .split('\n')
        .map((row, index) => {
            const [user, time] = row.split(',');
            return { user, timeSec: Math.round(parseFloat(time)) };
        })
        .sort((a, b) => b.timeSec - a.timeSec) // Сортировка по убыванию времени
        .map((data, index) => ({ ...data, id: index + 1 })); // Добавление идентификатора
    const [rows, setRows] = useState(initialRowsData);


    return (
        <div className={"video_interactions"}>
            <div style={{ color: '#fff' }}>
                <Header text={props.headerText} />
            </div>
            <div className={"video_interactions_container"}>
                <div className={"item_video_1"}>
                    <GraphWithModal />
                    {/* <DateLineChart /> */}
                </div>
                <div className={"item_video_2"}>
                    <CustomTableRealData
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