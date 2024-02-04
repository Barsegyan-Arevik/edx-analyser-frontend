import { PieChart } from '@mui/x-charts'

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
    return (
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

          width={550}
          height={250}
        />
    );
};
