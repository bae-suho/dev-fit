import { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import type { ChartData } from '@/types';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

interface CultureChartProps {
  data: ChartData;
  isAnimating: boolean;
}

export function CultureChart({ data, isAnimating }: CultureChartProps) {
  const [chartData, setChartData] = useState({
    labels: data.labels,
    datasets: [
      {
        label: 'A Corp',
        data: [0, 0, 0, 0, 0],
        backgroundColor: 'rgba(108, 92, 231, 0.2)',
        borderColor: '#6C5CE7',
        borderWidth: 2,
        pointBackgroundColor: '#6C5CE7',
        pointBorderColor: '#fff',
      },
      {
        label: 'Me',
        data: [0, 0, 0, 0, 0],
        backgroundColor: 'rgba(6, 182, 212, 0.2)',
        borderColor: '#06B6D4',
        borderWidth: 2,
        pointBackgroundColor: '#06B6D4',
        pointBorderColor: '#fff',
      },
    ],
  });

  useEffect(() => {
    if (isAnimating) {
      setTimeout(() => {
        setChartData((prev) => ({
          ...prev,
          datasets: [
            { ...prev.datasets[0], data: data.companyData },
            { ...prev.datasets[1], data: data.userData },
          ],
        }));
      }, 2000);
    }
  }, [isAnimating, data]);

  const options = {
    scales: {
      r: {
        angleLines: { color: '#1f2937' },
        grid: { color: '#1f2937' },
        pointLabels: {
          color: '#9CA3AF',
          font: { size: 11, family: "'Inter', sans-serif" },
        },
        suggestedMin: 0,
        suggestedMax: 10,
        ticks: { display: false, backdropColor: 'transparent' },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: '#E5E7EB',
          font: { family: "'Inter', sans-serif" },
        },
      },
    },
    animation: { duration: 2000 },
  };

  return (
    <div className="w-full aspect-square relative z-10 p-4">
      <Radar data={chartData} options={options} />
    </div>
  );
}
