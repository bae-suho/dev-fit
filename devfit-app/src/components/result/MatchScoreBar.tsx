import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

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

  return (
    <div className="relative py-4">
      <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-3">
        분석 결과 리포트
      </h2>
      <p className="text-text-tertiary text-sm mb-8">
        AI가 분석한 나와 기업의 컬쳐핏 매칭 점수입니다
      </p>

      {/* Gauge Bar */}
      <div className="relative h-10 w-full p-1 rounded-xl bg-white toss-shadow">
        {/* 배경 바 */}
        <div className="absolute inset-1 rounded-lg bg-border-light" />

        {/* 채워지는 게이지 */}
        <div
          className="absolute inset-1 rounded-lg overflow-hidden"
          style={{
            width: `calc(${currentWidth}% - 8px)`,
            transition: "width 1.2s ease-out",
          }}
        >
          <div
            className="h-full rounded-lg"
            style={{
              width: `calc((100vw - 2rem) * 0.98)`,
              minWidth: "500px",
              background:
                "linear-gradient(to right, #1B64DA, #3182F6, #5BA0F8, #8BBFFA, #3CD4A0)",
            }}
          />
        </div>

        {/* 칸 구분선 */}
        <div className="absolute inset-0 flex justify-evenly pointer-events-none p-1">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-1.5 h-full rounded-full"
              style={{ background: "#F4F4F4" }}
            />
          ))}
        </div>

        {/* 화살표 표시 */}
        <div
          className="absolute -top-7"
          style={{
            left: `calc(${currentWidth}% - 4px)`,
            transform: "translateX(-50%)",
            opacity: currentWidth > 0 ? 1 : 0,
            transition: "left 1.2s ease-out, opacity 0.3s ease",
          }}
        >
          <ChevronDown
            size={24}
            strokeWidth={3}
            className="text-toss-blue animate-bounce"
          />
        </div>
      </div>

      {/* Labels */}
      <div className="flex justify-between mt-3 text-xs px-1">
        {[1, 2, 3, 4, 5].map((step) => {
          // 점수에 따른 현재 단계 계산 (1-20: 1단계, 21-40: 2단계, ...)
          // currentWidth가 0이면 아무 단계도 강조하지 않음
          const currentStep =
            currentWidth > 0 ? Math.min(5, Math.ceil(currentWidth / 20)) : 0;
          const isCurrentStep = step === currentStep;

          return (
            <span
              key={step}
              className={`flex-1 text-center transition-all duration-300 ${
                isCurrentStep
                  ? "text-toss-blue font-bold scale-110"
                  : "text-text-quaternary"
              }`}
            >
              {step}단계
            </span>
          );
        })}
      </div>
    </div>
  );
}
