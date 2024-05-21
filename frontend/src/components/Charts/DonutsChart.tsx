import * as React from 'react'
import {PieChart} from '@mui/x-charts'
import {Box, Grid, Typography} from '@mui/material'
import {ChartSize} from '../../utils/utils'
import './DonutsChart.css'

export type DonutsChartData = {
    value: number;
    label: string;
};

export type DonutsChartProps = {
    data: DonutsChartData[];
    size: ChartSize;
};

export default function DonutsChart(props: DonutsChartProps) {
    return (
        <Grid container justifyContent="space-between">
            <Grid item xs={12} md={6}>
                {props.data.map((item, index) => (
                    <Box key={index} display={'flex'}>
                        <div className={'label-vertical-line'}
                             style={{
                                 backgroundColor: index === 0 ? '#02CEA9' : index === 1 ? '#FEF045' : '#F06C79',
                                 marginLeft: '25px'
                             }}
                        />
                        <Typography
                            variant="body1"
                            style={{
                                marginTop: '20px'
                            }}
                        >
                            {item.label}
                        </Typography>
                    </Box>
                ))}
            </Grid>
            <Grid item xs={12} md={4} justifyContent={'center'}>
                <PieChart
                    colors={['#02CEA9', '#FEF045', '#F06C79']}
                    slotProps={{
                        legend: {hidden: true}
                    }}
                    series={[
                        {
                            data: props.data,
                            innerRadius: 50,
                            outerRadius: 90,
                            paddingAngle: 1,
                            cornerRadius: 3,
                            startAngle: 0,
                            endAngle: 360,
                        }
                    ]}
                />
            </Grid>
        </Grid>
    )
}
