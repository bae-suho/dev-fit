import { useState } from 'react';
import { AlertTriangle, ChevronDown, ChevronUp } from 'lucide-react';
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
              <h4 className="text-text-primary font-bold text-sm mb-3">{gap.title}</h4>

              <div className="rounded-xl p-3 grid grid-cols-2 gap-4 text-xs mb-3 bg-bg-secondary">
                <div>
                  <span className="block mb-2 text-text-quaternary font-medium">기업 요구사항</span>
                  <ul className="space-y-1.5">
                    {gap.companyRequires.map((item, i) => (
                      <li key={i} className="text-text-secondary leading-relaxed">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pl-4 border-l border-border-light">
                  <span className="block mb-2 text-text-quaternary font-medium">나의 역량</span>
                  <ul className="space-y-1.5">
                    {gap.myCapabilities.map((item, i) => (
                      <li key={i} className="text-toss-yellow leading-relaxed">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
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
