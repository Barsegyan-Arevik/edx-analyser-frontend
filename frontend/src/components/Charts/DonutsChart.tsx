import * as React from 'react';
import {useEffect, useState} from 'react';
import {ShimmerThumbnail} from 'react-shimmer-effects';
import {PieChart} from '@mui/x-charts';
import './DonutsChart.css'
import {ChartSize} from '../../utils/utils';

export type DonutsChartData = {
    value: number;
    label: string;
}

export type DonutsChartProps = {
    data: DonutsChartData[];
    size: ChartSize;
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
        <div>
            {loading ? (
                <ShimmerThumbnail width={579} height={292}/>
            ) : (
                <div style={{padding: '10px', width: props.size.width, height: props.size.height}}>
                    <div style={{textAlign: 'left'}}>
                        <div style={{display: 'flex'}}>
                            <div className={'label-vertical-line'} style={{backgroundColor: '#02CEA9'}}></div>
                            <div
                                className={'label-text'}>{props.data[0].value}% {getLabelText(props.data[0].label)}</div>
                        </div>
                        <div style={{display: 'flex'}}>
                            <div className={'label-vertical-line'} style={{backgroundColor: '#FEF045'}}></div>
                            <div
                                className={'label-text'}>{props.data[1].value}% {getLabelText(props.data[1].label)}</div>
                        </div>
                        <div style={{display: 'flex'}}>
                            <div className={'label-vertical-line'} style={{backgroundColor: '#F06C79'}}></div>
                            <div
                                className={'label-text'}>{props.data[2].value}% {getLabelText(props.data[2].label)}</div>
                        </div>
                    </div>
                    <div style={{width: props.size.width, height: '20rem'}}>
                        <PieChart
                            colors={['#02CEA9', '#FEF045', '#F06C79']}
                            slotProps={{
                                legend: {hidden: true},
                            }}
                            series={[
                                {
                                    data: transformedData,
                                    innerRadius: 70,
                                    outerRadius: 120,
                                    paddingAngle: 1,
                                    cornerRadius: 3,
                                    startAngle: -90,
                                    endAngle: 90,
                                    cx: 150,
                                },
                            ]}
                        />
                    </div>

                </div>
            )}
        </div>
    );
}
