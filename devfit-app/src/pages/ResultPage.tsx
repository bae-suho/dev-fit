import { useEffect, useState } from 'react';
import { ChevronDown, Layers } from 'lucide-react';
import { Background, Header } from '@/components/common';
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
} from '@/components/result';
import { mockResult } from '@/data/mockResult';

export function ResultPage() {
  const [analysisPercent, setAnalysisPercent] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showDetail, setShowDetail] = useState(false);

  const result = mockResult;

  useEffect(() => {
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
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden selection:bg-purple-500 selection:text-white">
      <Background />
      <Header />

      <main className="max-w-6xl mx-auto p-6 pt-28 z-10 relative">
        {/* Summary Section */}
        <section className="min-h-[85vh] flex flex-col justify-center">
          <div className="text-center mb-10 w-full max-w-3xl mx-auto">
            <StatusBadge
              status={isComplete ? 'complete' : 'analyzing'}
              percent={analysisPercent}
            />

            <MatchScoreBar
              score={result.matchScore}
              matchLevel={result.matchLevel}
              isAnimating={isComplete}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-4">
              <ProfileCard type="company" profile={result.company} isAnalyzing={true} />
            </div>

            <div className="md:col-span-4 flex flex-col items-center justify-center p-2 relative">
              <CultureChart data={result.chartData} isAnimating={isComplete} />
            </div>

            <div className="md:col-span-4">
              <ProfileCard type="user" profile={result.user} isAnalyzing={true} />
            </div>
          </div>

          {isComplete && (
            <div className="mt-12 text-center animate-bounce transition-opacity duration-1000">
              <p className="text-sm mb-2" style={{ color: '#9CA3AF' }}>
                상세 리포트 확인
              </p>
              <ChevronDown className="w-5 h-5 mx-auto" style={{ color: 'rgba(255, 255, 255, 0.5)' }} />
            </div>
          )}
        </section>

        {/* Detail Section */}
        {showDetail && (
          <section
            className="pt-10 pb-20 fade-in-up"
            style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}
          >
            <div className="mb-10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: 'rgba(108, 92, 231, 0.1)', color: '#a29bfe' }}
                >
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">심층 분석</h2>
                  <p className="text-sm" style={{ color: '#9CA3AF' }}>
                    항목별 상세 매칭 분석 및 갭(Gap) 리포트
                  </p>
                </div>
              </div>
              <div
                className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full"
                style={{
                  backgroundColor: '#151b2e',
                  border: '1px solid rgba(108, 92, 231, 0.5)',
                  boxShadow: '0 0 10px rgba(108, 92, 231, 0.2)',
                }}
              >
                <span
                  className="text-xs font-bold uppercase"
                  style={{ color: '#9CA3AF' }}
                >
                  총 적합도 점수
                </span>
                <span
                  className="font-bold font-mono text-lg"
                  style={{ color: '#6C5CE7' }}
                >
                  {result.matchScore}/100
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
              <div className="lg:col-span-8 space-y-6">
                <SynergyCard synergies={result.synergies} />
                <GapCard gaps={result.gaps} />
              </div>

              <div className="lg:col-span-4 space-y-6">
                <TechnicalFitCard items={result.technicalFit} />
                <KeywordCard keywords={result.keywords} />
              </div>
            </div>

            {/* <CareerTimeline stages={result.careerTimeline} /> */}
            <InterviewStrategy strategies={result.interviewStrategies} />

            <div className="mt-12 text-center">
              <p className="text-xs" style={{ color: '#9CA3AF' }}>
                AI 분석 결과는 참고용이며 실제와 다를 수 있습니다.
              </p>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
