import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { ChevronDown, Layers, ExternalLink, Download } from "lucide-react";
import { Background, Header } from "@/components/common";
import {
  StatusBadge,
  MatchScoreBar,
  ProfileCard,
  CultureChart,
  SynergyCard,
  GapCard,
  TechnicalFitCard,
  KeywordCard,
  InterviewStrategy,
} from "@/components/result";
import { useAnalysis } from "@/context/AnalysisContext";
import { saveToHistory } from "@/utils/history";
import { mockResult } from "@/data/mockResult";
import type { HistoryItem, AnalysisResult } from "@/types";

// 백엔드 API 연동 시 사용
// import { transformApiResponse } from "@/utils/transformApiResponse";
// import type { ApiAnalysisResponse } from "@/types";

export function ResultPage() {
  const location = useLocation();
  const { analysisData, analysisResult } = useAnalysis();
  const savedRef = useRef(false);

  // 히스토리에서 온 경우 확인
  const historyItem = (location.state as { historyItem?: HistoryItem })?.historyItem;
  const isFromHistory = !!historyItem;

  const [analysisPercent, setAnalysisPercent] = useState(isFromHistory ? 100 : 0);
  const [isComplete, setIsComplete] = useState(isFromHistory);
  const [showDetail, setShowDetail] = useState(isFromHistory);

  // 결과 데이터 결정: 히스토리 > context > mockResult (fallback)
  const result: AnalysisResult = isFromHistory
    ? historyItem.result
    : (analysisResult ?? mockResult);
  const jobPostingUrl = isFromHistory ? historyItem.url : analysisData?.url;

  useEffect(() => {
    // 히스토리에서 온 경우 이미 초기값으로 설정됨
    if (isFromHistory) return;

    const interval = setInterval(() => {
      setAnalysisPercent((prev) => {
        const next = prev + Math.floor(Math.random() * 5) + 1;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(() => setShowDetail(true), 1200);
          }, 500);
          return 100;
        }
        return next;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [isFromHistory]);

  // 분석 완료 시 히스토리에 저장
  useEffect(() => {
    if (isComplete && !isFromHistory && analysisData?.url && !savedRef.current) {
      savedRef.current = true;
      saveToHistory(analysisData.url, result);
    }
  }, [isComplete, isFromHistory, analysisData?.url, result]);

  // PDF 다운로드 함수 (브라우저 인쇄 기능 사용)
  const handleDownloadPdf = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-bg-secondary relative overflow-x-hidden">
      <Background />
      <Header />

      <main className="max-w-5xl mx-auto p-6 pt-20 z-10 relative">
        {/* Summary Section */}
        <section className="min-h-[calc(100vh-8rem)] flex flex-col items-center w-full pt-6 pb-10">
          <div className="text-center mb-10 w-full max-w-3xl mx-auto">
            <StatusBadge
              status={isComplete ? "complete" : "analyzing"}
              percent={analysisPercent}
            />

            <MatchScoreBar
              score={result.matchScore}
              matchLevel={result.matchLevel}
              isAnimating={isComplete}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-stretch">
            <div className="h-full">
              <ProfileCard
                type="company"
                profile={result.company}
                isAnalyzing={!isFromHistory}
              />
            </div>

            <div className="h-full">
              <CultureChart data={result.chartData} isAnimating={isComplete} />
            </div>

            <div className="h-full">
              <ProfileCard
                type="user"
                profile={result.user}
                isAnalyzing={!isFromHistory}
              />
            </div>
          </div>

          {isComplete && (
            <div className="mt-auto pt-16 text-center animate-bounce transition-opacity duration-1000">
              <p className="text-sm mb-2 text-text-quaternary">
                상세 리포트 확인
              </p>
              <ChevronDown className="w-5 h-5 mx-auto text-text-disabled" />
            </div>
          )}
        </section>

        {/* Detail Section */}
        {showDetail && (
          <section className="pt-10 pb-20 fade-in-up border-t border-border-light">
            <div className="mb-10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-toss-blue-light">
                  <Layers className="w-5 h-5 text-toss-blue" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-text-primary">
                    심층 분석
                  </h2>
                  <p className="text-sm text-text-tertiary">
                    항목별 상세 매칭 분석 및 갭(Gap) 리포트
                  </p>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-white toss-shadow">
                <span className="text-xs font-semibold text-text-quaternary">
                  총 적합도 점수
                </span>
                <span className="font-bold text-lg text-toss-blue">
                  {Math.round(result.matchScore)}/100
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
              <div className="lg:col-span-8 space-y-6">
                <SynergyCard synergies={result.synergies} />
                <GapCard gaps={result.gaps} />
              </div>

              <div className="lg:col-span-4 space-y-6">
                <TechnicalFitCard items={result.technicalFit} />
                <KeywordCard keywords={result.keywords} />
              </div>
            </div>

            <InterviewStrategy strategies={result.interviewStrategies} />

            <div className="mt-12 text-center">
              <p className="text-xs text-text-quaternary">
                AI 분석 결과는 참고용이며 실제와 다를 수 있습니다.
              </p>
            </div>

            {/* 공고 이동 & PDF 다운로드 버튼 */}
            <div className="mt-10 flex justify-center gap-3 no-print">
              {jobPostingUrl && (
                <a
                  href={jobPostingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-toss-blue text-white font-semibold rounded-xl hover:bg-toss-blue-dark transition-colors active:scale-[0.98]"
                >
                  <span>공고로 이동</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              <button
                onClick={handleDownloadPdf}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-text-primary font-semibold rounded-xl border border-border-light hover:bg-bg-secondary transition-colors active:scale-[0.98] shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>PDF 다운로드</span>
              </button>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
