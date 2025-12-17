import { Clock } from 'lucide-react';
import type { CareerStage } from '@/types';

interface CareerTimelineProps {
  stages: CareerStage[];
}

const colorStyles = {
  cyan: {
    borderColor: '#06B6D4',
    badgeBg: 'rgba(6, 182, 212, 0.1)',
    badgeText: '#06B6D4',
    gradient: 'linear-gradient(to right, #06B6D4, rgba(108, 92, 231, 0.5))',
  },
  brand: {
    borderColor: '#6C5CE7',
    badgeBg: 'rgba(108, 92, 231, 0.2)',
    badgeText: '#a29bfe',
    gradient: 'linear-gradient(to right, #6C5CE7, rgba(86, 73, 214, 0.5))',
  },
  green: {
    borderColor: '#22C55E',
    badgeBg: 'rgba(34, 197, 94, 0.1)',
    badgeText: '#22C55E',
    gradient: 'linear-gradient(to right, #22C55E, rgba(5, 150, 105, 0.5))',
  },
  white: {
    borderColor: '#ffffff',
    badgeBg: 'rgba(255, 255, 255, 0.1)',
    badgeText: '#ffffff',
    gradient: '',
  },
};

function TimelineCard({ stage, index, total }: { stage: CareerStage; index: number; total: number }) {
  const styles = colorStyles[stage.color];

  return (
    <div
      className="relative p-5 rounded-2xl transition-all group"
      style={{
        backgroundColor: '#151b2e',
        border: '1px solid rgba(255, 255, 255, 0.05)',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = `${styles.borderColor}50`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255, 255, 255, 0.05)';
      }}
    >
      {/* 모바일: 왼쪽 노드 */}
      <div
        className="md:hidden absolute -left-6 top-5 w-6 h-6 rounded-full flex items-center justify-center z-10"
        style={{
          backgroundColor: '#151b2e',
          border: `2px solid ${styles.borderColor}`,
          boxShadow: `0 0 0 3px #0b1020, 0 0 10px ${styles.borderColor}40`,
        }}
      >
        <span
          className="text-[9px] font-bold"
          style={{ color: stage.color === 'white' ? '#0B1020' : '#ffffff' }}
        >
          {stage.year}
        </span>
      </div>

      {/* 데스크톱: 상단 노드 */}
      <div
        className="hidden md:flex absolute -top-10 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full items-center justify-center z-10"
        style={{
          backgroundColor: '#151b2e',
          border: `2px solid ${styles.borderColor}`,
          boxShadow: `0 0 0 3px #0b1020, 0 0 10px ${styles.borderColor}40`,
        }}
      >
        <span
          className="text-[10px] font-bold"
          style={{ color: stage.color === 'white' ? '#0B1020' : '#ffffff' }}
        >
          {stage.year}
        </span>
      </div>

      {/* 데스크톱: 연결선 */}
      {index < total - 1 && styles.gradient && (
        <div
          className="hidden md:block absolute -top-6 left-1/2 w-full h-0.5"
          style={{ background: styles.gradient }}
        />
      )}

      <div className="mb-2">
        <span
          className="text-xs font-mono px-2 py-1 rounded"
          style={{
            backgroundColor: styles.badgeBg,
            color: styles.badgeText,
          }}
        >
          {stage.badge}
        </span>
      </div>
      <h4 className="text-white font-bold text-base mb-1">{stage.title}</h4>
      <p className="text-xs leading-relaxed" style={{ color: '#9CA3AF' }}>
        {stage.description}
      </p>
    </div>
  );
}

export function CareerTimeline({ stages }: CareerTimelineProps) {
  return (
    <div className="mb-20">
      <div className="flex items-center gap-3 mb-8">
        <div
          className="p-2 rounded-lg flex-shrink-0"
          style={{ backgroundColor: 'rgba(6, 182, 212, 0.1)', color: '#06B6D4' }}
        >
          <Clock className="w-5 h-5" />
        </div>
        <div className="min-w-0">
          <h2 className="text-2xl font-bold text-white">AI Career Simulation</h2>
          <p className="text-sm" style={{ color: '#9CA3AF' }}>
            현재 역량과 회사 성장성을 결합한 미래 예측 시나리오
          </p>
        </div>
      </div>

      <div className="relative pl-10 md:pl-0 md:pt-14">
        <div
          className="md:hidden absolute left-4 top-0 bottom-0 w-0.5"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4 md:gap-6">
          {stages.map((stage, index) => (
            <TimelineCard key={stage.year} stage={stage} index={index} total={stages.length} />
          ))}
        </div>
      </div>
    </div>
  );
}
