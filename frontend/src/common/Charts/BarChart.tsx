import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { ShimmerThumbnail } from 'react-shimmer-effects'
import {useEffect, useState} from "react";


const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Глава 1',
  'Глава 2',
  'Глава 3',
  'Глава 4',
  'Глава 5',
  'Глава 6',
  'Глава 7',
];

export default function SimpleBarChart() {
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
                <BarChart
                  width={500}
                  height={300}
                  colors={['#02CEA9']}
                  series={[
                    { data: pData, label: 'Количество уникальных просмотров', id: 'pvId' },
                  ]}
                  xAxis={[{ data: xLabels, scaleType: 'band'}]}


                />
            )}
      </div>
  );
}