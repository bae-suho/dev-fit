import { Tags } from 'lucide-react';
import type { Keyword } from '@/types';

interface KeywordCardProps {
  keywords: Keyword[];
}

export function KeywordCard({ keywords }: KeywordCardProps) {
  return (
    <div
      className="rounded-2xl p-5"
      style={{
        backgroundColor: '#151b2e',
        border: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <h4 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
        <Tags className="w-4 h-4" style={{ color: '#06B6D4' }} /> 키워드 분석
      </h4>
      <div className="flex flex-wrap gap-2">
        {keywords.map((keyword) => (
          <span
            key={keyword.tag}
            className={`px-2 py-1 rounded text-xs ${
              keyword.strikethrough ? 'line-through decoration-red-500' : ''
            }`}
            style={{
              backgroundColor: keyword.matched
                ? 'rgba(108, 92, 231, 0.1)'
                : 'rgba(255, 255, 255, 0.05)',
              color: keyword.matched ? '#a29bfe' : '#9CA3AF',
              border: keyword.matched
                ? '1px solid rgba(108, 92, 231, 0.2)'
                : '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            {keyword.tag}
          </span>
        ))}
      </div>
    </div>
  );
}
