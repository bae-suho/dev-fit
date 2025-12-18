import { CheckCircle } from 'lucide-react';
import type { Synergy } from '@/types';

interface SynergyCardProps {
  synergies: Synergy[];
}

export function SynergyCard({ synergies }: SynergyCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden toss-shadow">
      <div className="p-4 flex justify-between items-center bg-toss-green-light border-b border-toss-green/10">
        <h3 className="font-bold flex items-center gap-2 text-toss-green">
          <CheckCircle className="w-4 h-4" /> 핵심 시너지 (강점)
        </h3>
        <span className="text-[10px] px-2.5 py-1 rounded-full bg-toss-green/10 text-toss-green font-semibold">
          높은 영향력
        </span>
      </div>

      <div className="p-5 grid gap-5">
        {synergies.map((synergy, index) => (
          <div
            key={index}
            className="relative pl-4 border-l-2 border-border-light"
          >
            <div className="flex justify-between mb-2">
              <h4 className="text-text-primary font-bold text-sm">{synergy.title}</h4>
              <span className="text-xs font-bold text-toss-green">
                {synergy.matchPercent}% 일치
              </span>
            </div>
            <div className="rounded-xl p-3 grid grid-cols-2 gap-4 text-xs mb-2 bg-bg-secondary">
              <div>
                <span className="block mb-1 text-text-quaternary">기업 요구사항</span>
                <span className="text-text-secondary">{synergy.companyRequires}</span>
              </div>
              <div className="pl-4 border-l border-border-light">
                <span className="block mb-1 text-text-quaternary">나의 역량</span>
                <span className="text-toss-blue font-medium">{synergy.myCapabilities}</span>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-text-tertiary">
              <span className="font-bold text-toss-green">인사이트:</span> {synergy.insight}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
