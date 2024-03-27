import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { ShimmerThumbnail } from 'react-shimmer-effects'
import {useEffect, useState} from "react";
import { Box, ThemeProvider, createTheme } from '@mui/system';
import { shadows } from '@mui/system';

const theme = createTheme({
  palette: {
    background: {
      paper: '#fff',
    },
  },
});


export type BarChartProps = {
    data: number[];
    labels: string[];
}


export default function SimpleBarChart(props: BarChartProps) {
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
      <div>
            {loading ? (
                <ShimmerThumbnail height={300} width={633} rounded />
            ) : (
                    <Box
                        sx={{
                          bgcolor: '#fff',
                          // boxShadow: '0 4px 6px rgba(50, 50, 93, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
                          borderRadius: 1,
                          p: 2,
                          paper: '#fff',
                          minWidth: 600,
                          border: 1,
                          borderColor: '#F5F5F5',
                        }}
                      >
                        <BarChart
                          width={600}
                          height={300}
                          colors={['#02CEA9']}
                          series={[
                            { data: props.data, label: 'Количество уникальных просмотров', id: 'pvId' },
                          ]}
                          xAxis={[{ data: props.labels, scaleType: 'band'}]}
                        />
                    </Box>
            )}
      </div>
  );
}