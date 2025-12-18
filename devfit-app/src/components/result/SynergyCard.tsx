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
                  <span className="block mb-1 text-text-quaternary">기업 요구사항</span>
                  <span className="text-text-secondary">{synergy.companyRequires}</span>
                </div>
                <div className="pl-4 border-l border-border-light">
                  <span className="block mb-1 text-text-quaternary">나의 역량</span>
                  <span className="text-toss-blue font-medium">{synergy.myCapabilities}</span>
                </div>
              </div>
              <p className="text-xs leading-relaxed text-text-tertiary mb-3">
                <span className="font-bold text-toss-green">인사이트:</span> {synergy.insight}
              </p>

              {isExpanded && (
                <div className="mt-4 pt-4 border-t border-border-light">
                  <p className="text-xs font-bold text-text-secondary mb-2">상세 분석</p>
                  <p className="text-xs text-text-tertiary mb-3">
                    이 역량은 해당 기업의 핵심 비즈니스 목표와 직접적으로 연결됩니다.
                    특히 최근 업계 트렌드를 고려했을 때, 이러한 강점은 입사 후 빠른 적응과
                    성과 창출에 큰 도움이 될 것으로 예상됩니다.
                  </p>
                  <p className="text-xs font-bold text-text-secondary mb-2">추천 어필 포인트</p>
                  <ul className="text-xs text-text-tertiary list-disc list-inside space-y-1">
                    <li>관련 프로젝트 경험을 구체적인 수치와 함께 설명</li>
                    <li>문제 해결 과정에서의 본인 역할 강조</li>
                    <li>해당 역량을 활용한 성공 사례 준비</li>
                  </ul>
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
