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

//
//
// import * as React from 'react';
// import { LineChart } from '@mui/x-charts/LineChart';
// import { Box } from '@mui/system';
// import Slider from '@mui/material/Slider';
//
// export default function BasicLineChart() {
//     const [xAxisRange, setXAxisRange] = React.useState([1, 10]);
//     const [yAxisRange, setYAxisRange] = React.useState([0, 10]);
//
//     const handleXAxisChange = (event, newValue) => {
//         setXAxisRange(newValue);
//     };
//
//     const handleYAxisChange = (event, newValue) => {
//         setYAxisRange(newValue);
//     };
//
//     return (
//         <Box
//             sx={{
//                 bgcolor: '#fff',
//                 borderRadius: 1,
//                 p: 2,
//                 paper: '#fff',
//                 minWidth: 550,
//                 border: 1,
//                 borderColor: '#F5F5F5',
//             }}
//         >
//             <LineChart
//                 xAxis={[{ data: [1, 2, 3, 5, 8, 10], min: xAxisRange[0], max: xAxisRange[1] }]}
//                 series={[
//                     {
//                         data: [2, 5.5, 2, 8.5, 1.5, 5],
//                     },
//                 ]}
//                 yAxis={[{ min: yAxisRange[0], max: yAxisRange[1] }]}
//                 width={500}
//                 height={300}
//             />
//             <Box sx={{ mt: 2 }}>
//                 <Slider
//                     value={xAxisRange}
//                     onChange={handleXAxisChange}
//                     valueLabelDisplay="auto"
//                     min={1}
//                     max={20} // Настройте максимальное значение в соответствии с вашими требованиями
//                 />
//             </Box>
//             <Box sx={{ mt: 2 }}>
//                 <Slider
//                     value={yAxisRange}
//                     onChange={handleYAxisChange}
//                     valueLabelDisplay="auto"
//                     min={0}
//                     max={20} // Настройте максимальное значение в соответствии с вашими требованиями
//                 />
//             </Box>
//         </Box>
//     );
// }
//


//не отображается график, хотя дейт пикер работает, эх
// import * as React from 'react';
// import { LineChart } from '@mui/x-charts/LineChart';
// import { Box } from '@mui/system';
// import Slider from '@mui/material/Slider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import * as dayjs from 'dayjs';
// import { Dayjs } from 'dayjs';
// import DateRangePicker from './DateRangeSelector';
//
// export default function LineChartWithCustomDateRangePicker() {
//     const [selectedRange, setSelectedRange] = React.useState<[Dayjs | null, Dayjs | null]>([null, null]);
//
//     const handleChange = (newValue: [Dayjs | null, Dayjs | null]) => {
//         setSelectedRange(newValue);
//     };
//
//     // Ваши данные для графика. Массив объектов с полями date и value
//     const data = [
//         { date: '2024-02-01', value: 10 },
//         { date: '2024-02-02', value: 20 },
//         { date: '2024-02-03', value: 15 },
//         { date: '2024-02-04', value: 25 },
//         { date: '2024-02-05', value: 30 },
//         // Добавьте больше данных при необходимости
//     ];
//
//     // Логика фильтрации данных на основе выбранного диапазона дат
//     const filteredData = data.filter(item => {
//         const startDate = selectedRange[0];
//         const endDate = selectedRange[1];
//         const currentDate = dayjs(item.date);
//         return startDate && endDate ? currentDate.isBetween(startDate, endDate) : true;
//     });
//
//     return (
//         <Box>
//
//             <DateRangePicker value={selectedRange} onChange={handleChange} />
//             <LineChart
//                 xAxis={[{ data: filteredData.map(item => item.date) }]}
//                 series={[{ data: filteredData.map(item => item.value) }]}
//                 width={500}
//                 height={300}
//             />
//         </Box>
//     );
// }


//
// import * as React from 'react';
// import { LineChart } from '@mui/x-charts/LineChart';
// import { Box } from '@mui/system';
// import Slider from '@mui/material/Slider';
//
//
// export default function DateLineChart() {
//     const MIN_DATE_DIFFERENCE = 86400000; // Минимальное расстояние: 1 день в миллисекундах
//
//     const initialStartDate = new Date('2023-01-01');
//     const initialEndDate = new Date('2023-3-31');
//     const [dateRange, setDateRange] = React.useState([new Date('2023-01-01').getTime(), new Date('2023-12-31').getTime()]);
//
//
//     const handleDateRangeChange = (event, newValue) => {
//         const newStartDate = newValue[0];
//         const newEndDate = newValue[1];
//
//         if (newEndDate - newStartDate < MIN_DATE_DIFFERENCE) {
//             // Если разница между новой начальной и конечной датами меньше минимального расстояния
//             // То мы корректируем одну из дат, чтобы поддерживать минимальное расстояние
//             const diff = MIN_DATE_DIFFERENCE - (newEndDate - newStartDate);
//             if (newStartDate === dateRange[0]) {
//                 // Если изменилась начальная дата, корректируем конечную дату
//                 setDateRange([newStartDate, newEndDate + diff]);
//             } else {
//                 // Если изменилась конечная дата, корректируем начальную дату
//                 setDateRange([newStartDate - diff, newEndDate]);
//             }
//         } else {
//             // Если разница между начальной и конечной датами больше или равна минимальному расстоянию
//             setDateRange(newValue);
//         }
//     };
//
//     // Генерация примерных данных для LineChart (даты и значения)
//     const generateData = () => {
//         const data = [];
//         let currentDate = new Date(dateRange[0]);
//
//         while (currentDate <= new Date(dateRange[1])) {
//             data.push({
//                 x: new Date(currentDate),
//                 y: Math.random() * 100, // Ваша логика для генерации значений
//             });
//
//             currentDate.setDate(currentDate.getDate() + 1); // Увеличиваем дату на 1 день
//         }
//
//         return data;
//     };
//
//     return (
//         <Box
//             sx={{
//                 bgcolor: '#fff',
//                 borderRadius: 1,
//                 p: 2,
//                 paper: '#fff',
//                 minWidth: 550,
//                 border: 1,
//                 borderColor: '#F5F5F5',
//             }}
//         >
//             <LineChart
//                 xAxis={[{ data: generateData().map((entry) => entry.x), min: dateRange[0], max: dateRange[1] }]}
//                 series={[{ data: generateData().map((entry) => entry.y) }]}
//                 width={500}
//                 height={300}
//             />
//             <Box sx={{ mt: 2 }}>
//                 <Slider
//                     value={dateRange}
//                     onChange={handleDateRangeChange}
//                     valueLabelDisplay="auto"
//                     min={new Date('2023-01-01').getTime()}
//                     max={new Date('2023-12-31').getTime()} // Настройте максимальное значение в соответствии с вашими требованиями
//                 />
//             </Box>
//         </Box>
//     );
// }
//

//
// import * as React from 'react';
// import {LineChart} from '@mui/x-charts/LineChart';
// import {Box} from '@mui/system';
// import Slider from '@mui/material/Slider';
//
// export default function DateLineChart() {
//     const MIN_DATE_DIFFERENCE = 86400000; // Минимальное расстояние: 1 день в миллисекундах
//
//     const initialStartDate = new Date('2023-01-01');
//     const initialEndDate = new Date('2023-12-31');
//
//     const [dateRange, setDateRange] = React.useState([initialStartDate, initialEndDate]);
//
//     const handleDateRangeChange = (event, newValue) => {
//         const newStartDate = newValue[0];
//         const newEndDate = newValue[1];
//
//         if (newEndDate - newStartDate < MIN_DATE_DIFFERENCE) {
//             const diff = MIN_DATE_DIFFERENCE - (newEndDate - newStartDate);
//             if (newStartDate === dateRange[0]) {
//                 setDateRange([new Date(newStartDate), new Date(newEndDate.getTime() + diff)]);
//             } else {
//                 setDateRange([new Date(newStartDate.getTime() - diff), new Date(newEndDate)]);
//             }
//         } else {
//             setDateRange([new Date(newStartDate), new Date(newEndDate)]);
//         }
//     };
//
//     const generateData = () => {
//         const data = [];
//         let currentDate = new Date(dateRange[0]);
//
//         while (currentDate <= dateRange[1]) {
//             data.push({
//                 x: new Date(currentDate),
//                 y: Math.random() * 100,
//             });
//
//             currentDate.setDate(currentDate.getDate() + 1);
//         }
//
//         return data;
//     };
//
//     return (
//         <Box
//             sx={{
//                 bgcolor: '#fff',
//                 borderRadius: 1,
//                 p: 2,
//                 paper: '#fff',
//                 minWidth: 550,
//                 border: 1,
//                 borderColor: '#F5F5F5',
//             }}
//         >
//             <LineChart
//                 xAxis={[{
//                     data: generateData().map((entry) => entry.x.toLocaleDateString()),
//                     min: dateRange[0],
//                     max: dateRange[1]
//                 }]}
//                 series={[{data: generateData().map((entry) => entry.y)}]}
//                 width={500}
//                 height={300}
//             />
//             <Box sx={{mt: 2}}>
//                 <Slider
//                     value={[dateRange[0].getTime(), dateRange[1].getTime()]}
//                     onChange={handleDateRangeChange}
//                     valueLabelDisplay="auto"
//                     min={initialStartDate.getTime()}
//                     max={initialEndDate.getTime()}
//                 />
//             </Box>
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
    // new Date(2022, 7, 24),
    // new Date(2022, 7, 25),
    // new Date(2022, 7, 26),
    // new Date(2022, 7, 27),
    // new Date(2022, 7, 28),
    // new Date(2022, 7, 29),
    // new Date(2022, 7, 30),
    // new Date(2022, 7, 31),
    // new Date(2022, 8, 1),
    // new Date(2022, 8, 2),
    // new Date(2022, 8, 3),
    // new Date(2022, 8, 4),
    // new Date(2022, 8, 5),
    // new Date(2022, 8, 6),
    // new Date(2022, 8, 7),
    // new Date(2022, 9, 10),
    // new Date(2022, 9, 11),
];

const values = [
    963, 1347, 1605, 2573, 1899, 1612, 1327, 1797, 666, 1074, 915,
    1745, 1083, 953, 694, 388, 507, 730, 883, 837, 1047, 1185, 593,
    617
    // 790, 1215, 1165, 1324, 1724, 415, 1001, 897, 1118, 1434,
    // 1507, 1037, 824, 543, 739, 34, 378
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
                p: 2,
                paper: '#fff',
                minWidth: 550,
                border: 1,
                borderColor: '#F5F5F5',
                height: 400,
            }}
        >
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
                    },
                ]}
                width={500}
                height={300}
            />
            <Box sx={{mt: 2, width: 500}}>
                <Slider
                    value={dateRange.map(date => date.getTime())}
                    onChange={handleDateRangeChange}
                    valueLabelDisplay="auto"
                    min={dates[0].getTime()}
                    max={dates[dates.length - 1].getTime()}
                    getAriaValueText={formatDateLabel}
                    valueLabelFormat={formatDateLabel}
                />
            </Box>
        </Box>
    );
}