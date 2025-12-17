import { Check } from 'lucide-react';

interface StatusBadgeProps {
  status: 'analyzing' | 'complete';
  percent?: number;
}

export function StatusBadge({ status, percent = 0 }: StatusBadgeProps) {
  if (status === 'complete') {
    return (
      <div
        className="inline-flex items-center gap-2 px-6 py-2 rounded-full mb-4"
        style={{
          backgroundColor: 'rgba(108, 92, 231, 0.1)',
          border: '1px solid #6C5CE7',
          color: '#a29bfe',
        }}
      >
        <Check className="w-4 h-4" />
        <span>분석 완료</span>
      </div>
    );
  }

  return (
    <div
      className="inline-flex items-center gap-2 px-6 py-2 rounded-full mb-8 transition-all duration-500"
      style={{
        backgroundColor: '#151b2e',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        color: '#9CA3AF',
      }}
    >
      <span
        className="w-2 h-2 rounded-full animate-pulse"
        style={{ backgroundColor: '#22C55E' }}
      />
      <span className="font-mono text-sm">분석 중... {percent}%</span>
    </div>
  );
}
