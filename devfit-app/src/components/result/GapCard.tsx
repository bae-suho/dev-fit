import { AlertTriangle, Lightbulb } from 'lucide-react';
import type { Gap } from '@/types';

interface GapCardProps {
  gaps: Gap[];
}

export function GapCard({ gaps }: GapCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden toss-shadow">
      <div className="p-4 flex justify-between items-center bg-toss-yellow-light border-b border-toss-yellow/10">
        <h3 className="font-bold flex items-center gap-2 text-toss-yellow">
          <AlertTriangle className="w-4 h-4" /> 문화 갭 (고려사항)
        </h3>
        <span className="text-[10px] px-2.5 py-1 rounded-full bg-toss-yellow/10 text-toss-yellow font-semibold">
          주의
        </span>
      </div>

      <div className="p-5 grid gap-6">
        {gaps.map((gap, index) => (
          <div
            key={index}
            className="relative pl-4 border-l-2 border-border-light"
          >
            <div className="flex justify-between mb-2">
              <h4 className="text-text-primary font-bold text-sm">{gap.title}</h4>
              <span className="text-xs font-bold text-toss-yellow">{gap.level} 갭</span>
            </div>

            <div className="relative h-2 rounded-full mb-6 mt-6 w-full max-w-md mx-auto bg-bg-secondary">
              <div className="absolute text-[10px] -top-5 left-0 text-text-quaternary">
                빠른 실행
              </div>
              <div className="absolute text-[10px] -top-5 right-0 text-text-quaternary">
                높은 안정성
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
          </div>
        ))}
      </div>
    </div>
  );
}
