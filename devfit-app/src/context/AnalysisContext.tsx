import { createContext, useContext, useState, type ReactNode } from 'react';
import type { AnalysisData, AnalysisResult } from '@/types';

const STORAGE_KEY = 'devfit_analysis_url';

interface AnalysisContextType {
  analysisData: AnalysisData | null;
  setAnalysisData: (data: AnalysisData) => void;
  analysisResult: AnalysisResult | null;
  setAnalysisResult: (result: AnalysisResult) => void;
  isAnalyzing: boolean;
  setIsAnalyzing: (value: boolean) => void;
}

const AnalysisContext = createContext<AnalysisContextType | undefined>(undefined);

function getInitialUrl(): string | null {
  try {
    return sessionStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

export function AnalysisProvider({ children }: { children: ReactNode }) {
  const initialUrl = getInitialUrl();
  const [analysisData, setAnalysisDataState] = useState<AnalysisData | null>(
    initialUrl ? { url: initialUrl, file: null } : null
  );
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // URL을 sessionStorage에 저장
  const setAnalysisData = (data: AnalysisData) => {
    setAnalysisDataState(data);
    try {
      if (data.url) {
        sessionStorage.setItem(STORAGE_KEY, data.url);
      }
    } catch {
      // sessionStorage 접근 실패 시 무시
    }
  };

  return (
    <AnalysisContext.Provider
      value={{
        analysisData,
        setAnalysisData,
        analysisResult,
        setAnalysisResult,
        isAnalyzing,
        setIsAnalyzing,
      }}
    >
      {children}
    </AnalysisContext.Provider>
  );
}

export function useAnalysis() {
  const context = useContext(AnalysisContext);
  if (context === undefined) {
    throw new Error('useAnalysis must be used within an AnalysisProvider');
  }
  return context;
}
