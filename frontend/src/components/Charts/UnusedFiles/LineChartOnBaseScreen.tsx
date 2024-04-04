import * as React from 'react';
import { useState } from 'react';
import { Slider, Box, Modal, Button } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import { SlMagnifier } from "react-icons/sl";
import Paper from '@mui/material/Paper';


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

export type LineChartWithModalWindowProps = {
    data: string;
}


export default function LineChartWithModalWindow(props: LineChartWithModalWindowProps) {
    const { dates, values } = parseCSV(props.data);

    const [open, setOpen] = useState(false);
    const [dateRange, setDateRange] = useState([dates[0], dates[dates.length - 1]]);

    const handleOpenModal = () => {
        setOpen(true);
    };

    const handleCloseModal = () => {
        setOpen(false);
    };

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
        <Paper sx={{ overflow: 'hidden', padding: '10px' }}>
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
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: 16,
                        color: '#405479'
                    }}
                >
                    Количество воспроизведений видеоматериалов, распределённая по дням
                    <Button onClick={handleOpenModal}>
                        <SlMagnifier />
                    </Button>
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
                    width={750}
                    height={470}
                />
                <Box sx={{ ml: 3, width: 700 }}>
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
                <Modal
                    open={open}
                    onClose={handleCloseModal}
                    aria-labelledby="modal-title"
                    aria-describedby="modal-description"
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            bgcolor: 'background.paper',
                            boxShadow: 24,
                            p: 4,
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
                                    color: '#02CEA9',
                                },
                            ]}
                            width={1150}
                            height={400}
                        />
                        <Box sx={{ ml: 3, width: 1100 }}>
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
                </Modal>
            </Box>
        </Paper>
    );
}
