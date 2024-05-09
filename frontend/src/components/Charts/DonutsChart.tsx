import * as React from 'react'
import {PieChart} from '@mui/x-charts'
import {Grid, Typography} from '@mui/material'
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
        <Grid container justifyContent="center" spacing={2} style={{height: props.size.height}}>
            {props.data.map((item, index) => (
                <Grid item xs={12} key={index} display={'flex'}>
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
                </Grid>
            ))}
            <Grid item xs={12} md={12} justifyContent={'center'} alignItems={'center'} style={{textAlign: 'center'}}>
                <div style={{height: '16rem', justifyContent: 'center'}}>
                    <PieChart
                        colors={['#02CEA9', '#FEF045', '#F06C79']}
                        slotProps={{
                            legend: {hidden: true}
                        }}
                        series={[
                            {
                                data: props.data,
                                innerRadius: 70,
                                outerRadius: 120,
                                paddingAngle: 1,
                                cornerRadius: 3,
                                startAngle: -90,
                                endAngle: 90,
                            }
                        ]}
                    />
                </div>
            </Grid>
        </Grid>
    )
}
