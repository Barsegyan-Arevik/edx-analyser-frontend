import * as React from 'react';
import {useEffect, useState} from 'react';
import {ShimmerThumbnail} from 'react-shimmer-effects';
import Box from '@mui/system/Box';
import {PieChart} from '@mui/x-charts';

export type DonutsChartData = {
    value: number;
    label: string;
}

export type DonutsChartProps = {
    data: DonutsChartData[]
}

function getLabelText(label: string): string {
    switch (label) {
    case 'first':
        return 'задач решены с первой попытки';
    case 'second':
        return 'задач решены со второй попытки';
    case 'more':
        return 'задач решены с третьей и более попыток';
    default:
        throw new Error('Неверная метка: ' + label);
    }
}

export default function DonutsChart(props: DonutsChartProps) {
    const [loading, setLoading] = useState(true);
    const [transformedData, setTransformedData] = useState<DonutsChartData[]>([]);

    useEffect(() => {
        // Имитация задержки загрузки данных
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        // Преобразование меток при загрузке данных
        const transformed = props.data.map(item => ({
            ...item,
            label: `${item.value}% ${getLabelText(item.label)}`,
        }));
        setTransformedData(transformed);

        // Очистка таймера при размонтировании компонента
        return () => clearTimeout(timer);
    }, [props.data]);

    return (
        <div style={{position: 'relative'}}>
            {loading ? (
                <ShimmerThumbnail width={579} height={292}/>
            ) : (
                <Box
                    sx={{
                        bgcolor: '#fff',
                        borderRadius: 1,
                        border: 1,
                        borderColor: '#F5F5F5',
                        color: '#405479',
                        fontSize: 15,
                        textAlign: 'center',
                        fontWeight: 'normal',
                        width: '200px',
                        height: '400px',
                    }}
                >
                    <PieChart
                        colors={['#02CEA9', '#FEF045', '#F06C79']}
                        series={[
                            {
                                data: transformedData,
                                innerRadius: 70,
                                outerRadius: 120,
                                paddingAngle: 1,
                                cornerRadius: 3,
                                startAngle: -90,
                                endAngle: 90,
                                cx: 135,
                                cy: 130,
                            },
                        ]}
                        slotProps={{
                            legend: {
                                labelStyle: {
                                    fontSize: 20,
                                    fill: '#405479',
                                    height: 20
                                },
                                itemMarkWidth: 10,
                                itemMarkHeight: 37,
                            },
                        }}
                        // maxWidth={580}
                        // minWidth={500}
                        width={200}
                        height={400}
                    />
                </Box>
            )}
        </div>
    );
}
