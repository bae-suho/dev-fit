import { Code } from 'lucide-react';
import type { TechnicalFitItem } from '@/types';

interface TechnicalFitCardProps {
  items: TechnicalFitItem[];
}

export function TechnicalFitCard({ items }: TechnicalFitCardProps) {
  return (
    <div
      className="rounded-2xl p-5"
      style={{
        backgroundColor: '#151b2e',
        border: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <h4 className="text-white font-bold text-sm mb-5 flex items-center gap-2">
        <Code className="w-4 h-4" style={{ color: '#6C5CE7' }} /> 기술 적합도
      </h4>

      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.skill}>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gray-300">{item.skill}</span>
              <span
                className="font-bold"
                style={{ color: item.needsImprovement ? '#facc15' : '#a29bfe' }}
              >
                {item.percent}%
              </span>
            </div>
            <div
              className="h-1.5 w-full rounded-full overflow-hidden"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
            >
              <div
                className="h-full"
                style={{
                  width: `${item.percent}%`,
                  backgroundColor: item.needsImprovement ? '#eab308' : '#6C5CE7',
                }}
              />
            </div>
            {item.needsImprovement && (
              <p
                className="text-[10px] mt-1 text-right"
                style={{ color: '#9CA3AF' }}
              >
                *보완 필요
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
