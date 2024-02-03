import {useEffect, useState} from 'react';
import Chart from 'chart.js/auto';

// Function to convert CSV data to JSON
const csvToJson = (csvData) => {
    const lines = csvData.split('\n');
    const result = [];

    const headers = lines[0].split(',');

    for (let i = 1; i < lines.length; i++) {
        const obj = {};
        const currentline = lines[i].split(',');

        for (let j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j];
        }

        result.push(obj);
    }

    return result;
};

export default function ChartComponent(
    {csvData}
) {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        const jsonData = csvToJson(csvData);

        const labels = jsonData.map((entry) => entry.user_name);
        const data = jsonData.map((entry) => entry.user_id);

        const chartData = {
            labels: labels,
            datasets: [
                {
                    label: 'User IDs',
                    data: data,
                    backgroundColor: 'rgba(75,192,192,0.2)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderWidth: 1,
                },
            ],
        };

        setChartData(chartData);

        // Clean up on component unmount
        return () => {
            setChartData(null);
        };
    }, [csvData]);

    useEffect(() => {
        // Render chart when chartData is available
        if (chartData) {
            const canvas = document.getElementById('myChart') as HTMLCanvasElement;
            const ctx = canvas.getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: chartData,
            });
        }
    }, [chartData]);


    return (
        <div>
            <canvas id="myChart" width="100" height="50"></canvas>
        </div>
    );
};
