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
        label: '기업',
        data: [0, 0, 0, 0, 0],
        backgroundColor: 'rgba(49, 130, 246, 0.15)',
        borderColor: '#3182F6',
        borderWidth: 2,
        pointBackgroundColor: '#3182F6',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
      },
      {
        label: '나',
        data: [0, 0, 0, 0, 0],
        backgroundColor: 'rgba(60, 212, 160, 0.15)',
        borderColor: '#3CD4A0',
        borderWidth: 2,
        pointBackgroundColor: '#3CD4A0',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
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
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      r: {
        angleLines: { color: '#E5E8EB' },
        grid: { color: '#E5E8EB' },
        pointLabels: {
          color: '#6B7684',
          font: { size: 10, weight: 500 as const },
        },
        suggestedMin: 0,
        suggestedMax: 10,
        ticks: { display: false, backdropColor: 'transparent' },
      },
    },
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          color: '#333D4B',
          font: { size: 11, weight: 500 as const },
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 12,
        },
      },
    },
    animation: { duration: 1500 },
  };

  return (
    <div className="w-full h-full relative z-10 p-4 bg-white rounded-2xl toss-shadow flex flex-col">
      <h4 className="text-text-primary font-semibold text-sm mb-2 text-center">문화 적합도 비교</h4>
      <div className="flex-1 flex items-center justify-center min-h-0">
        <Radar data={chartData} options={options} />
      </div>
    </div>
  );
}
