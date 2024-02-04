import { PieChart } from '@mui/x-charts'
import Skeleton from 'react-loading-skeleton'
import * as React from 'react';
import { useState, useEffect } from 'react'
import { ShimmerThumbnail } from 'react-shimmer-effects'


export type DonutsChartData = {
    value: number;
    label: string;
}

export type DonutsChartProps = {
    data: DonutsChartData[]
}

// const data = [
//         { value: 10, label: 'Прошли курс' },
//         { value: 20, label: 'Начали, не прошли' },
//         { value: 15, label: 'Не начали' },
//     ];

export default function DonutsChart(props: DonutsChartProps) {
    const { data } = props;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Имитация задержки загрузки данных
        const timer = setTimeout(() => {
            setLoading(false);
        }, 4000);

        // Очистка таймера при размонтировании компонента
        return () => clearTimeout(timer);
    }, []);

    return (
        <div style={{ position: 'relative' }}>
            {loading ? (
                <ShimmerThumbnail height={250} width={550} rounded />
            ) : (
            <PieChart
                colors={['#5471E7', '#02CEA9', '#FEF045']}
                series={[
                {
                  data: props.data,
                  innerRadius: 50,
                  outerRadius: 100,
                  paddingAngle: 1,
                  cornerRadius: 3,
                  startAngle: -180,
                  endAngle: 180,
                  cx: 200,
                  cy: 100,
                },
              ]}

              slotProps={{
                legend: {
                  labelStyle: {
                    fontSize: 14,
                    fill: "#667B98",
                  },
                },
              }}
              width={550}
              height={250}
            />
        )}
        </div>
    );
};
