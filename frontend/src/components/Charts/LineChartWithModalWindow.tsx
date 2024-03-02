import React, { useState } from 'react';
import { Slider, Box, Modal, Button } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import { SlMagnifier } from "react-icons/sl";
import Paper from '@mui/material/Paper';


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


export default function GraphWithModal() {
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
            <Box sx={{ml: 3, width: 700}}>
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
