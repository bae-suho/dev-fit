import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface MatchScoreBarProps {
  score: number;
  matchLevel: string;
  isAnimating: boolean;
}

export function MatchScoreBar({ score, isAnimating }: MatchScoreBarProps) {
  const [currentWidth, setCurrentWidth] = useState(0);
  const targetWidth = score;

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setCurrentWidth(targetWidth);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isAnimating, targetWidth]);

  const filledSteps = Math.ceil(score / 20);

  return (
    <div className="relative py-4">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 px-1">
        분석 결과 리포트
      </h2>

      <div
        className="relative h-8 md:h-10 w-full p-1 rounded-lg backdrop-blur-sm"
        style={{
          backgroundColor: 'rgba(21, 27, 46, 0.5)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        {/* 배경 바 */}
        <div
          className="absolute inset-1 rounded-md"
          style={{ background: 'rgba(255, 255, 255, 0.05)' }}
        />

        {/* 채워지는 게이지 */}
        <div
          className="absolute inset-1 rounded-md overflow-hidden"
          style={{
            width: `calc(${currentWidth}% - 8px)`,
            transition: 'width 1.2s ease-out',
          }}
        >
          <div
            className="h-full rounded-md"
            style={{
              width: `calc((100vw - 2rem) * 0.98)`,
              minWidth: '500px',
              background: 'linear-gradient(to right, #4834d4, #5649D6, #6C5CE7, #a29bfe, #7DD3E8, #06B6D4)',
            }}
          />
        </div>

        {/* 칸 구분선 */}
        <div className="absolute inset-1 flex gap-2 pointer-events-none">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex-1" />
          ))}
          <div className="flex-1" />
        </div>
        <div className="absolute inset-0 flex justify-evenly pointer-events-none p-1">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-2 h-full"
              style={{ background: 'rgba(21, 27, 46, 0.9)' }}
            />
          ))}
        </div>

        {/* 화살표 표시 */}
        <div
          className="absolute -top-8"
          style={{
            left: `calc(${currentWidth}% - 4px)`,
            transform: 'translateX(-50%)',
            filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.8))',
            opacity: currentWidth > 0 ? 1 : 0,
            transition: 'left 1.2s ease-out, opacity 0.3s ease',
          }}
        >
          <ChevronDown
            size={28}
            strokeWidth={3}
            className="text-cyan-300 animate-bounce"
          />
        </div>
      </div>

      <div
        className="flex justify-between mt-2 text-xs font-mono"
        style={{ color: '#9CA3AF' }}
      >
        <span>낮은 적합도</span>
        <span>최고 적합도</span>
      </div>
    </div>
  );
}
