import { Tags } from 'lucide-react';
import type { Keyword } from '@/types';

interface KeywordCardProps {
  keywords: Keyword[];
}

export function KeywordCard({ keywords }: KeywordCardProps) {
  return (
    <div className="bg-white rounded-2xl p-5 toss-shadow">
      <h4 className="text-text-primary font-bold text-sm mb-4 flex items-center gap-2">
        <Tags className="w-4 h-4 text-toss-green" /> 키워드 분석
      </h4>
      <div className="flex flex-wrap gap-2">
        {keywords.map((keyword) => (
          <span
            key={keyword.tag}
            className={`px-2.5 py-1 rounded-lg text-xs font-medium ${
              keyword.strikethrough ? 'line-through decoration-toss-red' : ''
            } ${
              keyword.matched
                ? 'bg-toss-blue-light text-toss-blue'
                : 'bg-bg-secondary text-text-quaternary'
            }`}
          >
            {keyword.tag}
          </span>
        ))}
      </div>
    </div>
  );
}
