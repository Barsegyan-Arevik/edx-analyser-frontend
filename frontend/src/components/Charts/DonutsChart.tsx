import {PieChart} from '@mui/x-charts'
import * as React from 'react';
import {useState, useEffect} from 'react'
import {ShimmerThumbnail} from 'react-shimmer-effects'
import Box from '@mui/system/Box';


export type DonutsChartData = {
    value: number;
    label: string;
}

export type DonutsChartProps = {
    data: DonutsChartData[]
}

export default function DonutsChart(props: DonutsChartProps) {
    const {data} = props;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Имитация задержки загрузки данных
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        // Очистка таймера при размонтировании компонента
        return () => clearTimeout(timer);
    }, []);

    return (
        <div style={{position: "relative"}}>
            {loading ? (
                <ShimmerThumbnail width={579} height={292}/>
            ) : (
                <Box
                    sx={{
                        bgcolor: '#fff',
                        // boxShadow: '0 4px 6px rgba(50, 50, 93, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
                        borderRadius: 1,
                        // p: 2,
                        paper: '#fff',
                        // width: 579,
                        // maxHeight: 292,
                        border: 1,
                        borderColor: '#F5F5F5',
                        color: '#405479',
                        fontSize: 15,
                        textAlign: 'center',
                        fontWeight: 'normal',
                    }}
                >
                    <PieChart
                        // colors={['#5471E7', '#02CEA9', '#FEF045']}
                        // CHANGING
                        colors={['#02CEA9', '#FEF045', '#F06C79']}
                        series={[
                            {
                                data: props.data,
                                innerRadius: 70,
                                outerRadius: 120,
                                paddingAngle: 1,
                                cornerRadius: 3,
                                startAngle: -180,
                                // //CHANGING
                                //   startAngle: -90,
                                endAngle: 180,
                                // // CHANGING
                                // endAngle: 90,
                                cx: 135,
                                cy: 130,
                            },
                        ]}

                        slotProps={{
                            legend: {
                                labelStyle: {
                                    fontSize: 20,
                                    fill: "#667B98",
                                    height: 20
                                },
                                itemMarkWidth: 10,
                                itemMarkHeight: 37,
                            },
                        }}

                        width={579}
                        height={292}
                    />
                </Box>
            )}
        </div>
    );
};
