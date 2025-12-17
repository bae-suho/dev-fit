import { ClipboardList } from 'lucide-react';
import type { InterviewStrategy as InterviewStrategyType } from '@/types';

interface InterviewStrategyProps {
  strategies: InterviewStrategyType[];
}

export function InterviewStrategy({ strategies }: InterviewStrategyProps) {
  return (
    <div
      className="rounded-2xl p-8 relative overflow-hidden"
      style={{
        background: 'linear-gradient(to right, rgba(108, 92, 231, 0.1), rgba(6, 182, 212, 0.1))',
        border: '1px solid rgba(108, 92, 231, 0.2)',
      }}
    >
      <div
        className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none"
        style={{ backgroundColor: 'rgba(108, 92, 231, 0.1)' }}
      />

      <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
        <ClipboardList className="w-5 h-5" style={{ color: '#6C5CE7' }} /> AI 추천 면접 전략
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {strategies.map((strategy) => (
          <div
            key={strategy.number}
            className="p-5 rounded-xl cursor-pointer group transition-colors"
            style={{
              backgroundColor: 'rgba(11, 16, 32, 0.6)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(108, 92, 231, 0.5)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255, 255, 255, 0.05)';
            }}
          >
            <div
              className="text-xs font-bold uppercase mb-2"
              style={{ color: '#6C5CE7' }}
            >
              전략 {strategy.number}
            </div>
            <p className="text-gray-200 text-sm font-medium mb-3">"{strategy.title}"</p>
            <p className="text-xs" style={{ color: '#9CA3AF' }}>
              → {strategy.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
