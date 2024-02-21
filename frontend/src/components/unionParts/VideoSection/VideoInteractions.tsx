import * as React from 'react';
import DateLineChart from "../../Charts/LineChart";
import SimpleBarChart from "../../Charts/BarChart";
import './VideoInteractions.css'
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {Dayjs} from 'dayjs';
import LineChartWithCustomDateRangePicker from "../../Charts/LineChart";
import Header from "../HeaderSection/Header"
import {color} from "chart.js/helpers";

const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
    'Глава 1',
    'Глава 2',
    'Глава 3',
    'Глава 4',
    'Глава 5',
    'Глава 6',
    'Глава 7',
];


export default function VideoInteractions() {
    const [value, setValue] = React.useState<(Dayjs | null)[]>([]);

    const handleChange = (newValue: (Dayjs | null)[]) => {
        setValue(newValue);
    };

    const videoHeaderText = "Просмотр видео материалов"
    return (
        <div className={"video_interactions"}>
            <div style={{color: '#fff'}}>
                <Header text={videoHeaderText}/>
            </div>
            <div style={{paddingLeft: '50px'}}>
                <DateLineChart/>
            </div>
        </div>
    );
};
//
// <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <br />
//       <DateRangePicker value={value} onChange={handleChange} error="" />
//     </LocalizationProvider>
//
