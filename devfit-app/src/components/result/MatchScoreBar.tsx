import { useEffect, useState } from 'react';

interface MatchScoreBarProps {
  score: number;
  matchLevel: string;
  isAnimating: boolean;
}

const stepColors = [
  '#4834d4',
  '#5649D6',
  '#6C5CE7',
  '#a29bfe',
  'linear-gradient(to right, #6C5CE7, #06B6D4)',
];

export function MatchScoreBar({ score, matchLevel, isAnimating }: MatchScoreBarProps) {
  const [activeSteps, setActiveSteps] = useState(0);
  const filledSteps = Math.ceil(score / 20);

  useEffect(() => {
    if (isAnimating) {
      const timer = setInterval(() => {
        setActiveSteps((prev) => {
          if (prev >= filledSteps) {
            clearInterval(timer);
            return prev;
          }
          return prev + 1;
        });
      }, 200);
      return () => clearInterval(timer);
    }
  }, [isAnimating, filledSteps]);

  return (
    <div className="relative py-4">
      <h2 className="text-xl font-bold text-white mb-3 px-1">
        분석 결과 리포트
      </h2>

      <div
        className="flex gap-2 h-8 md:h-10 w-full p-1 rounded-lg backdrop-blur-sm"
        style={{
          backgroundColor: 'rgba(21, 27, 46, 0.5)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        {[1, 2, 3, 4, 5].map((step) => (
          <div
            key={step}
            className={`flex-1 rounded-md transition-all duration-500 ${
              step === activeSteps ? 'glow-bar-active scale-105' : ''
            }`}
            style={{
              background: step <= activeSteps ? stepColors[step - 1] : 'rgba(255, 255, 255, 0.05)',
              border: step === 5 && step <= activeSteps ? '1px solid rgba(255, 255, 255, 0.2)' : 'none',
            }}
          />
        ))}
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
