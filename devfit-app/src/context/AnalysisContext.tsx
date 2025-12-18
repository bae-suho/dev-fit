import { createContext, useContext, useState, type ReactNode } from 'react';
import type { AnalysisData, AnalysisResult } from '@/types';

const STORAGE_KEY = 'devfit_analysis_url';
const RESULT_KEY_STORAGE = 'devfit_result_key';

interface AnalysisContextType {
  analysisData: AnalysisData | null;
  setAnalysisData: (data: AnalysisData) => void;
  analysisResult: AnalysisResult | null;
  setAnalysisResult: (result: AnalysisResult) => void;
  isAnalyzing: boolean;
  setIsAnalyzing: (value: boolean) => void;
  resultKey: string | null;
  setResultKey: (key: string | null) => void;
}

const AnalysisContext = createContext<AnalysisContextType | undefined>(undefined);

function getInitialUrl(): string | null {
  try {
    return sessionStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function getInitialResultKey(): string | null {
  try {
    return sessionStorage.getItem(RESULT_KEY_STORAGE);
  } catch {
    return null;
  }
}

export function AnalysisProvider({ children }: { children: ReactNode }) {
  const initialUrl = getInitialUrl();
  const initialResultKey = getInitialResultKey();

  const [analysisData, setAnalysisDataState] = useState<AnalysisData | null>(
    initialUrl ? { url: initialUrl, files: [] } : null
  );
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [resultKey, setResultKeyState] = useState<string | null>(initialResultKey);

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

  // resultKey를 sessionStorage에 저장
  const setResultKey = (key: string | null) => {
    setResultKeyState(key);
    try {
      if (key) {
        sessionStorage.setItem(RESULT_KEY_STORAGE, key);
      } else {
        sessionStorage.removeItem(RESULT_KEY_STORAGE);
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
        resultKey,
        setResultKey,
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
