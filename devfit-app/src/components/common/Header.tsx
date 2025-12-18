import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { History, Trash2, Building, X } from 'lucide-react';
import { Logo } from './Logo';
import { getHistory, deleteFromHistory, formatDate } from '@/utils/history';
import type { HistoryItem } from '@/types';

export function Header() {
  const navigate = useNavigate();
  const [showHistory, setShowHistory] = useState(false);
  const [historyItems, setHistoryItems] = useState<HistoryItem[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showHistory) {
      setHistoryItems(getHistory());
    }
  }, [showHistory]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowHistory(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDelete = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    deleteFromHistory(id);
    setHistoryItems(getHistory());
  };

  const handleSelectHistory = (item: HistoryItem) => {
    setShowHistory(false);
    // 히스토리 결과를 보여주기 위해 state와 함께 navigate
    navigate('/result', { state: { historyItem: item } });
  };

  return (
    <header className="w-full px-6 py-4 flex justify-between items-center z-50 relative bg-white/80 backdrop-blur-md fixed top-0 border-b border-border-light">
      <Logo />
      <div className="flex items-center gap-2">
        {/* 히스토리 버튼 */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setShowHistory(!showHistory)}
            className="text-sm px-4 py-2 bg-bg-secondary text-text-secondary rounded-xl font-medium hover:bg-border-light transition-colors active:scale-95 flex items-center gap-2"
          >
            <History className="w-4 h-4" />
            히스토리
          </button>

          {/* 드롭다운 */}
          {showHistory && (
            <div className="absolute right-0 top-12 w-80 bg-white rounded-2xl toss-shadow-lg border border-border-light overflow-hidden z-50">
              <div className="p-4 border-b border-border-light flex items-center justify-between">
                <h3 className="font-semibold text-text-primary">분석 히스토리</h3>
                <button
                  onClick={() => setShowHistory(false)}
                  className="p-1 hover:bg-bg-secondary rounded-lg transition-colors"
                >
                  <X className="w-4 h-4 text-text-quaternary" />
                </button>
              </div>

              {historyItems.length === 0 ? (
                <div className="p-8 text-center">
                  <History className="w-10 h-10 mx-auto text-text-disabled mb-3" />
                  <p className="text-sm text-text-quaternary">
                    아직 분석 기록이 없습니다
                  </p>
                </div>
              ) : (
                <div className="max-h-80 overflow-y-auto">
                  {historyItems.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => handleSelectHistory(item)}
                      className="p-4 hover:bg-bg-secondary cursor-pointer border-b border-border-light last:border-b-0 transition-colors group"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3 flex-1 min-w-0">
                          <div className="p-2 bg-toss-blue-light rounded-lg shrink-0">
                            <Building className="w-4 h-4 text-toss-blue" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="font-medium text-text-primary text-sm truncate">
                              {item.companyName}
                            </p>
                            <p className="text-xs text-text-quaternary truncate mt-0.5">
                              {item.url}
                            </p>
                            <div className="flex items-center gap-2 mt-1.5">
                              <span className="text-xs font-semibold text-toss-blue">
                                {item.matchScore}점
                              </span>
                              <span className="text-xs text-text-disabled">
                                {formatDate(item.createdAt)}
                              </span>
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={(e) => handleDelete(e, item.id)}
                          className="p-1.5 opacity-0 group-hover:opacity-100 hover:bg-toss-red-light rounded-lg transition-all shrink-0"
                        >
                          <Trash2 className="w-3.5 h-3.5 text-toss-red" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* 새 진단 버튼 */}
        <button
          onClick={() => navigate('/')}
          className="text-sm px-4 py-2 bg-toss-blue text-white rounded-xl font-medium hover:bg-toss-blue-dark transition-colors active:scale-95"
        >
          새 진단
        </button>
      </div>
    </header>
  );
}
