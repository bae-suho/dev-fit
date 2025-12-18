import { ClipboardList } from 'lucide-react';
import type { InterviewStrategy as InterviewStrategyType } from '@/types';

interface InterviewStrategyProps {
  strategies: InterviewStrategyType[];
}

export function InterviewStrategy({ strategies }: InterviewStrategyProps) {
  return (
    <div className="bg-white rounded-2xl p-6 toss-shadow relative overflow-hidden">
      <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl pointer-events-none bg-toss-blue-light/50" />

      <h3 className="text-text-primary font-bold text-lg mb-6 flex items-center gap-2 relative">
        <ClipboardList className="w-5 h-5 text-toss-blue" /> AI 추천 면접 전략
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
        {strategies.map((strategy) => (
          <div
            key={strategy.number}
            className="p-5 rounded-xl cursor-pointer group transition-all duration-200 bg-bg-secondary hover:bg-toss-blue-light border border-transparent hover:border-toss-blue/20"
          >
            <div className="text-xs font-bold uppercase mb-2 text-toss-blue">
              전략 {strategy.number}
            </div>
            <p className="text-text-primary text-sm font-semibold mb-2">"{strategy.title}"</p>
            <p className="text-xs text-text-tertiary leading-relaxed">
              {strategy.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
