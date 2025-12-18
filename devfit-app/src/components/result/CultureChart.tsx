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
import { GitCompare } from 'lucide-react';
import type { ChartData } from '@/types';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

interface CultureChartProps {
  data: ChartData;
  isAnimating: boolean;
}

export function CultureChart({ data, isAnimating }: CultureChartProps) {
  const [progressWidth, setProgressWidth] = useState(0);
  const [chartData, setChartData] = useState({
    labels: data.labels,
    datasets: [
      {
        label: '기업',
        data: [0, 0, 0, 0, 0, 0],
        backgroundColor: 'rgba(49, 130, 246, 0.15)',
        borderColor: '#3182F6',
        borderWidth: 2,
        pointBackgroundColor: '#3182F6',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
      },
      {
        label: '나',
        data: [0, 0, 0, 0, 0, 0],
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
      setProgressWidth(100);
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
    <div className="w-full h-full relative z-10 p-5 bg-white rounded-2xl toss-shadow flex flex-col overflow-hidden">
      {/* 상단 프로그레스 바 */}
      <div
        className="absolute top-0 left-0 h-1 transition-all duration-[2500ms] ease-out rounded-t-2xl"
        style={{
          width: `${progressWidth}%`,
          background: 'linear-gradient(to right, #3182F6, #3CD4A0)',
        }}
      />

      {/* 헤더 */}
      <div className="flex items-center gap-2.5 mb-3 font-semibold text-base text-text-primary">
        <GitCompare className="w-5 h-5 text-toss-blue" />
        컬쳐핏 비교
      </div>

      {/* 차트 */}
      <div className="flex-1 flex items-center justify-center min-h-0">
        <Radar data={chartData} options={options} />
      </div>
    </div>
  );
}
