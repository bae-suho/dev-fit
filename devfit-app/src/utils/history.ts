import type { HistoryItem, AnalysisResult } from '@/types';

const HISTORY_KEY = 'devfit_history';
const MAX_HISTORY_ITEMS = 10;

export function getHistory(): HistoryItem[] {
  try {
    const data = localStorage.getItem(HISTORY_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function saveToHistory(
  url: string,
  result: AnalysisResult
): HistoryItem {
  const history = getHistory();

  const newItem: HistoryItem = {
    id: crypto.randomUUID(),
    url,
    companyName: result.company.name,
    matchScore: result.matchScore,
    matchLevel: result.matchLevel,
    createdAt: new Date().toISOString(),
    result,
  };

  // 같은 URL이 있으면 제거
  const filtered = history.filter((item) => item.url !== url);

  // 새 항목을 맨 앞에 추가
  const updated = [newItem, ...filtered].slice(0, MAX_HISTORY_ITEMS);

  localStorage.setItem(HISTORY_KEY, JSON.stringify(updated));

  return newItem;
}

export function deleteFromHistory(id: string): void {
  const history = getHistory();
  const updated = history.filter((item) => item.id !== id);
  localStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
}

export function clearHistory(): void {
  localStorage.removeItem(HISTORY_KEY);
}

export function formatDate(isoString: string): string {
  const date = new Date(isoString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return '방금 전';
  if (diffMins < 60) return `${diffMins}분 전`;
  if (diffHours < 24) return `${diffHours}시간 전`;
  if (diffDays < 7) return `${diffDays}일 전`;

  return date.toLocaleDateString('ko-KR', {
    month: 'short',
    day: 'numeric',
  });
}
