import { CheckCircle } from 'lucide-react';
import type { Synergy } from '@/types';

interface SynergyCardProps {
  synergies: Synergy[];
}

export function SynergyCard({ synergies }: SynergyCardProps) {
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        backgroundColor: '#151b2e',
        border: '1px solid rgba(34, 197, 94, 0.2)',
      }}
    >
      <div
        className="p-4 flex justify-between items-center"
        style={{
          backgroundColor: 'rgba(34, 197, 94, 0.05)',
          borderBottom: '1px solid rgba(34, 197, 94, 0.1)',
        }}
      >
        <h3
          className="font-bold flex items-center gap-2"
          style={{ color: '#22C55E' }}
        >
          <CheckCircle className="w-4 h-4" /> 핵심 시너지 (강점)
        </h3>
        <span
          className="text-[10px] px-2 py-1 rounded"
          style={{
            backgroundColor: 'rgba(34, 197, 94, 0.1)',
            color: '#22C55E',
            border: '1px solid rgba(34, 197, 94, 0.2)',
          }}
        >
          높은 영향력
        </span>
      </div>

      <div className="p-5 grid gap-6">
        {synergies.map((synergy, index) => (
          <div
            key={index}
            className="relative pl-4"
            style={{ borderLeft: '2px solid rgba(255, 255, 255, 0.1)' }}
          >
            <div className="flex justify-between mb-2">
              <h4 className="text-gray-200 font-bold text-sm">{synergy.title}</h4>
              <span
                className="text-xs font-bold"
                style={{ color: '#22C55E' }}
              >
                {synergy.matchPercent}% 일치
              </span>
            </div>
            <div
              className="rounded-lg p-3 grid grid-cols-2 gap-4 text-xs mb-2"
              style={{ backgroundColor: '#0f1525' }}
            >
              <div>
                <span className="block mb-1" style={{ color: '#9CA3AF' }}>
                  기업 요구사항
                </span>
                <span className="text-gray-300 font-mono">{synergy.companyRequires}</span>
              </div>
              <div
                className="pl-4"
                style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.1)' }}
              >
                <span className="block mb-1" style={{ color: '#9CA3AF' }}>
                  나의 역량
                </span>
                <span className="font-mono" style={{ color: '#a29bfe' }}>
                  {synergy.myCapabilities}
                </span>
              </div>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: '#9CA3AF' }}>
              <span className="font-bold" style={{ color: '#22C55E' }}>
                인사이트:
              </span>{' '}
              {synergy.insight}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
