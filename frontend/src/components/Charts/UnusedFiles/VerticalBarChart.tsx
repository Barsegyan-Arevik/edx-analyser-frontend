import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

// Данные в формате CSV
const csvData = `pdf name,scrolling amount
1._Введение_в_науку_о_данных.pdf,16747
1.Введение.pdf,50
10._NoSQL_хранилища_2021.pdf,44
11._Redis_2021.pdf,39
12._MongoDB_2021.pdf,37
13._Cassandra_2021.pdf,38
14._Neo4j_2021.pdf,31
2._Инструменты_обработки_данных.pdf,252
2.Python.pdf,420
3._Визуализация_данных.pdf,186
4._Анализ_и_преобразование_данных.pdf,160
5._Работа_с_временными_рядами.pdf,36
5._Работа_с_временными_рядами_2022.pdf,81
6._Системы_управления_базами_данных.pdf,103
7._Проектирование_структурированных_данных.pdf,133
8._Запросы_на_языке_SQL.pdf,81
9._Объекты_базы_данных.pdf,48
LogisticRegression.pdf,37
norm_МГК.pdf,39
SVM.pdf,31
Классификаторы_KNN_и_наивный_байес_fin.pdf,32
Кластеризация_fin.pdf,30
Подкрепление.pdf,43
Регрессия_fin.pdf,39
Ресемплинг.pdf,29
Энтропия_и_ДПР.pdf,31
,0`;

// Разбить данные CSV на строки
const rows = csvData.split('\n').map(row => row.split(','));

// Преобразовать данные в формат, ожидаемый компонентом BarChart
const transformedData = rows.slice(1).map(row => ({
  pdf: row[0],
  scrolling: Number(row[1])
}));

// Настройки графика
const chartSetting = {
  xAxis: [
    {
      label: 'Scrolling Amount',
    },
  ],
  width: 700,
  height: 800,
};

const valueFormatter = (value: number) => `${value}`;

export default function VerticalBarChart() {
  return (
    <BarChart
      dataset={transformedData}
      yAxis={[{ scaleType: 'band', dataKey: 'pdf' }]}
      series={[{ dataKey: 'scrolling', label: 'Scrolling Amount', valueFormatter }]}
      layout="horizontal"
      {...chartSetting}

    />
  );
}
