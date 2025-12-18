import { useState } from 'react';
import { CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import type { Synergy } from '@/types';

interface SynergyCardProps {
  synergies: Synergy[];
}

function getMatchLabel(percent: number): string {
  if (percent >= 90) return '매우 적합';
  if (percent >= 70) return '적합';
  return '보통';
}

export function SynergyCard({ synergies }: SynergyCardProps) {
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});

  const toggleCard = (index: number) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="grid gap-4">
      {synergies.map((synergy, index) => {
        const isExpanded = expandedCards[index] ?? false;
        return (
          <div key={index} className="bg-white rounded-2xl overflow-hidden toss-shadow">
            <div className="p-4 flex justify-between items-center bg-toss-green-light border-b border-toss-green/10">
              <h3 className="font-bold flex items-center gap-2 text-toss-green">
                <CheckCircle className="w-4 h-4" /> 적합 포인트 {index + 1}
              </h3>
              <span className="text-[10px] px-2.5 py-1 rounded-full bg-toss-green/10 text-toss-green font-semibold">
                {getMatchLabel(synergy.matchPercent)}
              </span>
            </div>

            <div className="p-5">
              <h4 className="text-text-primary font-bold text-sm mb-3">{synergy.title}</h4>
              <div className="rounded-xl p-3 grid grid-cols-2 gap-4 text-xs mb-3 bg-bg-secondary">
                <div>
                  <span className="block mb-2 text-text-quaternary font-medium">기업 요구사항</span>
                  <ul className="space-y-1.5">
                    {synergy.companyRequires.map((item, i) => (
                      <li key={i} className="text-text-secondary leading-relaxed">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pl-4 border-l border-border-light">
                  <span className="block mb-2 text-text-quaternary font-medium">나의 역량</span>
                  <ul className="space-y-1.5">
                    {synergy.myCapabilities.map((item, i) => (
                      <li key={i} className="text-toss-blue leading-relaxed">
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
                    {synergy.detail}
                  </p>
                </div>
              )}

              <div className="flex justify-end mt-3">
                <button
                  onClick={() => toggleCard(index)}
                  className="flex items-center gap-1 text-xs text-text-tertiary hover:text-toss-green transition-colors"
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
