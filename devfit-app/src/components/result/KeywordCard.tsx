import { Tags, Check, AlertTriangle } from 'lucide-react';
import type { Keyword } from '@/types';

interface KeywordCardProps {
  keywords: Keyword[];
}

type KeywordStatus = 'matched' | 'partial';

function getKeywordStatus(keyword: Keyword): KeywordStatus {
  return keyword.matched ? 'matched' : 'partial';
}

const STATUS_STYLES: Record<KeywordStatus, { bg: string; text: string; icon: React.ReactNode }> = {
  matched: {
    bg: 'bg-toss-blue-light',
    text: 'text-toss-blue',
    icon: <Check className="w-3 h-3" />,
  },
  partial: {
    bg: 'bg-toss-yellow-light',
    text: 'text-toss-yellow',
    icon: <AlertTriangle className="w-3 h-3" />,
  },
};

export function KeywordCard({ keywords }: KeywordCardProps) {
  // unknown 상태 제외
  const visibleKeywords = keywords.filter((k) => k.matched || k.strikethrough);

  return (
    <div className="bg-white rounded-2xl p-5 toss-shadow">
      <h4 className="text-text-primary font-bold text-sm mb-4 flex items-center gap-2">
        <Tags className="w-4 h-4 text-toss-green" /> 핵심 역량 매칭
      </h4>
      <div className="flex flex-wrap gap-2">
        {visibleKeywords.map((keyword) => {
          const status = getKeywordStatus(keyword);
          const style = STATUS_STYLES[status];
          return (
            <span
              key={keyword.tag}
              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium ${style.bg} ${style.text}`}
            >
              {style.icon}
              {keyword.tag}
            </span>
          );
        })}
      </div>
      <div className="mt-3 flex gap-3 text-[10px] text-text-quaternary">
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
