import { AlertTriangle, Lightbulb } from 'lucide-react';
import type { Gap } from '@/types';

interface GapCardProps {
  gaps: Gap[];
}

export function GapCard({ gaps }: GapCardProps) {
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        backgroundColor: '#151b2e',
        border: '1px solid rgba(234, 179, 8, 0.2)',
      }}
    >
      <div
        className="p-4 flex justify-between items-center"
        style={{
          backgroundColor: 'rgba(234, 179, 8, 0.05)',
          borderBottom: '1px solid rgba(234, 179, 8, 0.1)',
        }}
      >
        <h3
          className="font-bold flex items-center gap-2"
          style={{ color: '#facc15' }}
        >
          <AlertTriangle className="w-4 h-4" /> 문화 갭 (고려사항)
        </h3>
        <span
          className="text-[10px] px-2 py-1 rounded"
          style={{
            backgroundColor: 'rgba(234, 179, 8, 0.1)',
            color: '#facc15',
            border: '1px solid rgba(234, 179, 8, 0.2)',
          }}
        >
          주의
        </span>
      </div>

      <div className="p-5 grid gap-6">
        {gaps.map((gap, index) => (
          <div
            key={index}
            className="relative pl-4"
            style={{ borderLeft: '2px solid rgba(255, 255, 255, 0.1)' }}
          >
            <div className="flex justify-between mb-2">
              <h4 className="text-gray-200 font-bold text-sm">{gap.title}</h4>
              <span className="text-xs font-bold" style={{ color: '#facc15' }}>
                {gap.level} 갭
              </span>
            </div>

            <div
              className="relative h-2 rounded-full mb-6 mt-6 w-full max-w-md mx-auto"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
            >
              <div
                className="absolute text-[10px]"
                style={{ top: '-20px', left: 0, color: '#9CA3AF' }}
              >
                빠른 실행
              </div>
              <div
                className="absolute text-[10px]"
                style={{ top: '-20px', right: 0, color: '#9CA3AF' }}
              >
                높은 안정성
              </div>

              <div
                className="absolute w-4 h-4 rounded-full z-10"
                style={{
                  top: '-5px',
                  left: `${gap.companyPosition}%`,
                  backgroundColor: '#6C5CE7',
                  border: '2px solid #151b2e',
                  boxShadow: '0 0 10px #6C5CE7',
                }}
                title="Company"
              />
              <div
                className="absolute -translate-x-1/2 text-[10px] font-bold"
                style={{
                  top: '12px',
                  left: `${gap.companyPosition}%`,
                  color: '#a29bfe',
                }}
              >
                기업
              </div>

              <div
                className="absolute w-4 h-4 rounded-full z-10"
                style={{
                  top: '-5px',
                  left: `${gap.myPosition}%`,
                  backgroundColor: '#06B6D4',
                  border: '2px solid #151b2e',
                  boxShadow: '0 0 10px #06B6D4',
                }}
                title="Me"
              />
              <div
                className="absolute -translate-x-1/2 text-[10px] font-bold"
                style={{
                  top: '12px',
                  left: `${gap.myPosition}%`,
                  color: '#06B6D4',
                }}
              >
                나
              </div>

              <div
                className="absolute top-1/2 -translate-y-1/2 h-0.5"
                style={{
                  left: `${gap.companyPosition}%`,
                  right: `${100 - gap.myPosition}%`,
                  background: 'linear-gradient(to right, rgba(108, 92, 231, 0.5), rgba(6, 182, 212, 0.5))',
                }}
              />
            </div>

            <div
              className="mt-8 p-3 rounded-lg"
              style={{
                backgroundColor: '#0f1525',
                border: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              <p className="text-gray-300 text-xs font-bold mb-1">
                <Lightbulb
                  className="w-3 h-3 inline mr-1"
                  style={{ color: '#facc15' }}
                />
                전략
              </p>
              <p className="text-xs" style={{ color: '#9CA3AF' }}>
                {gap.strategy}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
