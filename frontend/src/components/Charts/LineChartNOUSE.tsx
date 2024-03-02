// import * as React from 'react';
// import {LineChart} from '@mui/x-charts/LineChart';
// import { Box } from '@mui/system';
//
//
// export default function BasicLineChart() {
//     return (
//         <Box
//             sx={{
//                 bgcolor: '#fff',
//                 // boxShadow: '0 4px 6px rgba(50, 50, 93, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
//                 borderRadius: 1,
//                 p: 2,
//                 paper: '#fff',
//                 minWidth: 550,
//                 border: 1,
//                 borderColor: '#F5F5F5',
//             }}
//         >
//             <LineChart
//                 xAxis={[{data: [1, 2, 3, 5, 8, 10]}]}
//                 series={[
//                     {
//                         data: [2, 5.5, 2, 8.5, 1.5, 5],
//                     },
//                 ]}
//                 width={500}
//                 height={300}
//             />
//         </Box>
//     );
// }

import * as React from 'react';
import {LineChart} from '@mui/x-charts/LineChart';
import {Box} from '@mui/system';
import Slider from '@mui/material/Slider';
import {useState, useEffect} from 'react';


const dates = [
    new Date(2022, 6, 30),
    new Date(2022, 7, 1),
    new Date(2022, 7, 2),
    new Date(2022, 7, 3),
    new Date(2022, 7, 4),
    new Date(2022, 7, 5),
    new Date(2022, 7, 6),
    new Date(2022, 7, 7),
    new Date(2022, 7, 8),
    new Date(2022, 7, 9),
    new Date(2022, 7, 10),
    new Date(2022, 7, 11),
    new Date(2022, 7, 12),
    new Date(2022, 7, 13),
    new Date(2022, 7, 14),
    new Date(2022, 7, 15),
    new Date(2022, 7, 16),
    new Date(2022, 7, 17),
    new Date(2022, 7, 18),
    new Date(2022, 7, 19),
    new Date(2022, 7, 20),
    new Date(2022, 7, 21),
    new Date(2022, 7, 22),
    new Date(2022, 7, 23),
    new Date(2022, 7, 24),
    new Date(2022, 7, 25),
    new Date(2022, 7, 26),
    new Date(2022, 7, 27),
    new Date(2022, 7, 28),
    new Date(2022, 7, 29),
    new Date(2022, 7, 30),
    new Date(2022, 7, 31),
    new Date(2022, 8, 1),
    new Date(2022, 8, 2),
    new Date(2022, 8, 3),
    new Date(2022, 8, 4),
    new Date(2022, 8, 5),
    new Date(2022, 8, 6),
    new Date(2022, 8, 7),
    new Date(2022, 9, 10),
    new Date(2022, 9, 11),
];

const values = [
    963, 1347, 1605, 2573, 1899, 1612, 1327, 1797, 666, 1074, 915,
    1745, 1083, 953, 694, 388, 507, 730, 883, 837, 1047, 1185, 593,
    617, 790, 1215, 1165, 1324, 1724, 415, 1001, 897, 1118, 1434,
    1507, 1037, 824, 543, 739, 34, 378
];


export default function DataLineChart() {
    const [dateRange, setDateRange] = useState([dates[0], dates[dates.length - 1]]);

    const handleDateRangeChange = (event, newDateRange) => {
        setDateRange(newDateRange.map(timestamp => new Date(timestamp)));
    };

    const filteredDates = dates.filter(date => date >= dateRange[0] && date <= dateRange[1]);
    const filteredValues = values.slice(dates.indexOf(filteredDates[0]), dates.indexOf(filteredDates[filteredDates.length - 1]) + 1);

    const formatDateLabel = (value) => {
        const date = new Date(value);
        const year = date.getFullYear().toString();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    };
    return (
        <Box
            sx={{
                bgcolor: '#fff',
                borderRadius: 1,
                p: 1,
                // paper: '#fff',
                // width: 550,
                border: 1,
                borderColor: '#F5F5F5',
                height: 540,
                justifyContent: 'center'
            }}
        >
            <Box
                sx={{
                    fontSize: 16,
                    paddingLeft: 1,
                    paddingTop: 1
                }}
            >
                Количество воспроизведений видеоматериалов, распределённая по дням
            </Box>

            <LineChart
                xAxis={[{
                    data: filteredDates,
                    scaleType: 'time',
                    valueFormatter: (date) => {
                        const year = date.getFullYear().toString();
                        const month = (date.getMonth() + 1).toString().padStart(2, '0');
                        const day = date.getDate().toString().padStart(2, '0');
                        return `${year}-${month}-${day}`;
                    },
                }]}
                series={[
                    {
                        data: filteredValues,
                        color: '#02CEA9',
                    },
                ]}
                width={850}
                height={450}
            />
            <Box sx={{ml: 3, width: 800}}>
                <Slider
                    value={dateRange.map(date => date.getTime())}
                    onChange={handleDateRangeChange}
                    valueLabelDisplay="auto"
                    min={dates[0].getTime()}
                    max={dates[dates.length - 1].getTime()}
                    getAriaValueText={formatDateLabel}
                    valueLabelFormat={formatDateLabel}
                    size="small"
                    sx={{
                        color: '#02CEA9',
                    }}
                />
            </Box>
        </Box>
    );
}