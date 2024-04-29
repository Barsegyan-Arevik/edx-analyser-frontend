import * as React from 'react'
import { useState } from 'react'
import { Box, Grid, Slider } from '@mui/material'
import { LineChart } from '@mui/x-charts/LineChart'
import { ChartSize } from '../../utils/utils'

export interface LineChartDate {
    date: Date;
    count: number;
}

export type DatesLineChartExtendedProps = {
    points: Array<LineChartDate>;
    boxSize: ChartSize;
    lineChartSize: ChartSize;
    sliderSize: ChartSize;
}


export default function DatesLineChart(props: DatesLineChartExtendedProps) {
    const dates = props.points.map(v => v.date)
    const values = props.points.map(v => v.count)
    const [dateRange, setDateRange] = useState([dates[0], dates[dates.length - 1]])

    const handleDateRangeChange = (event: Event, newDateRange: number[]) => {
        setDateRange(newDateRange.map(timestamp => new Date(timestamp)))
    }

    const filteredDates = dates.filter(date => date >= dateRange[0] && date <= dateRange[1])
    const filteredValues = values.slice(dates.indexOf(filteredDates[0]), dates.indexOf(filteredDates[filteredDates.length - 1]) + 1)

    const formatDateLabel = (value) => {
        const date = new Date(value)
        const year = date.getFullYear().toString()
        const month = (date.getMonth() + 1).toString().padStart(2, '0')
        const day = date.getDate().toString().padStart(2, '0')
        return `${year}-${month}-${day}`
    }

    return (
        <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} md={12} height={'55vh'}>
                <LineChart
                    xAxis={[{
                        data: filteredDates,
                        scaleType: 'time',
                        valueFormatter: (date) => {
                            const year = date.getFullYear().toString()
                            const month = (date.getMonth() + 1).toString().padStart(2, '0')
                            const day = date.getDate().toString().padStart(2, '0')
                            return `${year}-${month}-${day}`
                        }
                    }]}
                    series={[
                        {
                            data: filteredValues,
                            color: '#02CEA9'
                        }
                    ]}
                />
            </Grid>
            <Grid item xs={12} md={12}>
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        p: 4,
                        borderRadius: 2
                    }}
                >
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
                            width: '100%'
                        }}
                    />
                </Box>
            </Grid>
        </Grid>
    )
}
