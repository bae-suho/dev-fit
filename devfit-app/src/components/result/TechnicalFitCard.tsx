import { Code, Check, AlertTriangle } from 'lucide-react';
import type { TechnicalFitItem } from '@/types';

interface TechnicalFitCardProps {
  items: TechnicalFitItem[];
}

export function TechnicalFitCard({ items }: TechnicalFitCardProps) {
  return (
    <div className="bg-white rounded-2xl p-5 toss-shadow">
      <h4 className="text-text-primary font-bold text-sm mb-5 flex items-center gap-2">
        <Code className="w-4 h-4 text-toss-blue" /> 컬쳐핏 적합도
      </h4>

      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.skill}>
            <div className="flex justify-between text-xs mb-1.5">
              <span className="text-text-secondary flex items-center gap-1">
                {item.needsImprovement ? (
                  <AlertTriangle className="w-3 h-3 text-toss-yellow" />
                ) : (
                  <Check className="w-3 h-3 text-toss-blue" />
                )}
                {item.skill}
              </span>
              <span
                className="font-bold"
                style={{ color: item.needsImprovement ? '#FF9500' : '#3182F6' }}
              >
                {item.percent}%
              </span>
            </div>
            <div className="h-2 w-full rounded-full overflow-hidden bg-bg-secondary">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${item.percent}%`,
                  backgroundColor: item.needsImprovement ? '#FF9500' : '#3182F6',
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex gap-3 text-[10px] text-text-quaternary">
        <span className="flex items-center gap-1">
          <Check className="w-3 h-3 text-toss-blue" /> 잘 맞음
        </span>
        <span className="flex items-center gap-1">
          <AlertTriangle className="w-3 h-3 text-toss-yellow" /> 보완 필요
        </span>
      </div>
    </div>
  );
}
