import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './LineChart.scss';  // Create a separate stylesheet for chart styles

const LineChart = () => {
  const data = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    datasets: [
      {
        label: 'Data',
        data: [3, 5, 4, 2, 3, 1, 2, 3, 5],
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 5,
        pointHitRadius: 10,
        tension: 0.4, // Add this to make the line smoother
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
        max: 8,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="chartContainer">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
