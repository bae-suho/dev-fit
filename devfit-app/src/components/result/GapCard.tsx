import { useState } from 'react';
import { AlertTriangle, Lightbulb, ChevronDown, ChevronUp } from 'lucide-react';
import type { Gap } from '@/types';

interface GapCardProps {
  gaps: Gap[];
}

const GAP_LEVEL_LABEL: Record<Gap['level'], { text: string; color: string }> = {
  Moderate: { text: '보완 필요', color: 'text-toss-yellow' },
  Significant: { text: '차이 큼', color: 'text-toss-red' },
};

export function GapCard({ gaps }: GapCardProps) {
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});

  const toggleCard = (index: number) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="grid gap-4">
      {gaps.map((gap, index) => {
        const levelInfo = GAP_LEVEL_LABEL[gap.level];
        const isExpanded = expandedCards[index] ?? false;
        return (
          <div key={index} className="bg-white rounded-2xl overflow-hidden toss-shadow">
            <div className="p-4 flex justify-between items-center bg-toss-yellow-light border-b border-toss-yellow/10">
              <h3 className="font-bold flex items-center gap-2 text-toss-yellow">
                <AlertTriangle className="w-4 h-4" /> 보완 포인트 {index + 1}
              </h3>
              <span className={`text-[10px] px-2.5 py-1 rounded-full bg-toss-yellow/10 font-semibold ${levelInfo.color}`}>
                {levelInfo.text}
              </span>
            </div>

            <div className="p-5">
              <h4 className="text-text-primary font-bold text-sm mb-4">{gap.title}</h4>

              <div className="relative h-2 rounded-full mb-6 mt-6 w-full max-w-md mx-auto bg-bg-secondary">
                <div className="absolute text-[10px] -top-5 left-0 text-text-quaternary">
                  {gap.leftLabel}
                </div>
                <div className="absolute text-[10px] -top-5 right-0 text-text-quaternary">
                  {gap.rightLabel}
                </div>

                <div
                  className="absolute w-4 h-4 rounded-full z-10 bg-toss-blue border-2 border-white"
                  style={{
                    top: '-4px',
                    left: `${gap.companyPosition}%`,
                    boxShadow: '0 2px 4px rgba(49, 130, 246, 0.3)',
                  }}
                  title="Company"
                />
                <div
                  className="absolute -translate-x-1/2 text-[10px] font-bold text-toss-blue"
                  style={{ top: '14px', left: `${gap.companyPosition}%` }}
                >
                  기업
                </div>

                <div
                  className="absolute w-4 h-4 rounded-full z-10 bg-toss-green border-2 border-white"
                  style={{
                    top: '-4px',
                    left: `${gap.myPosition}%`,
                    boxShadow: '0 2px 4px rgba(60, 212, 160, 0.3)',
                  }}
                  title="Me"
                />
                <div
                  className="absolute -translate-x-1/2 text-[10px] font-bold text-toss-green"
                  style={{ top: '14px', left: `${gap.myPosition}%` }}
                >
                  나
                </div>

                <div
                  className="absolute top-1/2 -translate-y-1/2 h-0.5 bg-gradient-to-r from-toss-blue/50 to-toss-green/50"
                  style={{
                    left: `${gap.companyPosition}%`,
                    right: `${100 - gap.myPosition}%`,
                  }}
                />
              </div>

              <div className="mt-8 p-3 rounded-xl bg-bg-secondary">
                <p className="text-text-secondary text-xs font-bold mb-1">
                  <Lightbulb className="w-3 h-3 inline mr-1 text-toss-yellow" />
                  전략
                </p>
                <p className="text-xs text-text-tertiary">{gap.strategy}</p>
              </div>

              {isExpanded && (
                <div className="mt-4 pt-4 border-t border-border-light">
                  <p className="text-xs font-bold text-text-secondary mb-2">상세 분석</p>
                  <p className="text-xs text-text-tertiary leading-relaxed">
                    {gap.detail}
                  </p>
                </div>
              )}

              <div className="flex justify-end mt-3">
                <button
                  onClick={() => toggleCard(index)}
                  className="flex items-center gap-1 text-xs text-text-tertiary hover:text-toss-yellow transition-colors"
                >
                  {isExpanded ? (
                    <>
                      접기 <ChevronUp className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      상세 보기 <ChevronDown className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
