import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { Box } from '@mui/material';


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

const allProblems = `
2022-06-30,15
2022-07-01,19
2022-07-02,13
2022-07-04,1
2022-07-07,2
2022-07-08,2
2022-07-11,13
2022-07-12,4
2022-07-13,32
2022-07-17,52
2022-07-18,35
2022-07-19,5
2022-07-20,5
2022-07-21,2
2022-07-22,5
2022-07-24,17
2022-07-25,3
2022-07-26,2
2022-07-27,2
2022-07-30,49
2022-07-31,1
2022-08-03,13
2022-08-04,1
2022-08-06,1
2022-08-07,3
`;

const correctProblems = `
2022-06-30,38
2022-07-01,58
2022-07-02,28
2022-07-04,4
2022-07-07,4
2022-07-08,8
2022-07-11,40
2022-07-12,10
2022-07-13,82
2022-07-17,112
2022-07-18,84
2022-07-19,12
2022-07-20,12
2022-07-21,4
2022-07-22,16
2022-07-24,68
2022-07-25,12
2022-07-26,17
2022-07-27,10
2022-07-30,122
2022-07-31,4
2022-08-03,44
2022-08-04,12
2022-08-06,2
2022-08-07,6
`;

const allProblemsData = parseCSV(allProblems);
const correctProblemsData = parseCSV(correctProblems);

export default function DoubleLineChart() {
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
                fontSize: 16,
                paddingLeft: 1,
                paddingTop: 1,
                alignItems: 'center',
            }}
        >
            <LineChart
                xAxis={[{
                    data: allProblemsData.dates,
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
                        label: 'Общее число попыток решения задач',
                        data: correctProblemsData.values,
                    },
                    {
                        label: 'Количество правильно решённых задач',
                        data: allProblemsData.values,
                    },
                ]}
                height={400}
                width={1000}
                margin={{ top: 10, bottom: 20 }}
            />
        </Box>
    );
}