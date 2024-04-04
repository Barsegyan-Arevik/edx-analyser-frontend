import * as React from 'react';
import { useState } from 'react';
import { Slider, Box } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';

function parseCSV(csvData: string): { dates: Date[], values: number[] } {
    const csvRows = csvData.split('\n');
    const dates: Date[] = [];
    const values: number[] = [];

    csvRows.forEach(row => {
        const [dateString, valueString] = row.split(',');
        const date = new Date(dateString);
        const value = parseInt(valueString, 10);

        if (!isNaN(date.getTime()) && !isNaN(value)) {
            dates.push(date);
            values.push(value);
        }
    });

    return { dates, values };
}

export type LineChartSize = {
    width: number;
    height: number;
};

export type LineChartExtendedProps = {
    data: string;
    lineChartSize: LineChartSize;
}

export default function CustomLineChart(props: LineChartExtendedProps) {
    const { dates, values } = parseCSV(props.data);

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
        <Box>
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
                width={props.lineChartSize.width}
                height={props.lineChartSize.height}
            />
            <Box sx={{ ml: 3, width: props.lineChartSize.width - 50 }}>
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
