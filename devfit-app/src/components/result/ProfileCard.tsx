import { useEffect, useState, useRef } from 'react';
import { Building, UserCircle, Zap, TrendingUp, Shield, Microscope } from 'lucide-react';
import type { CompanyProfile, UserProfile } from '@/types';

interface ProfileCardProps {
  type: 'company' | 'user';
  profile: CompanyProfile | UserProfile;
  isAnalyzing: boolean;
}

const companyLogs = [
  '> 기업 페이지 크롤링 중...',
  '> 기술 블로그 분석 중...',
  '> 기술 스택 추출: Python, FastAPI...',
  '> 기업 문화 키워드 감지 중...',
  "> 발견: '애자일', '속도', '임팩트'",
  '> 감성 분석: 매우 긍정적',
  '> 프로필 생성 중...',
];

const userLogs = [
  '> 이력서 분석 중...',
  '> GitHub 저장소 분석 중...',
  '> 기술 스택 추출: Django, Docker...',
  '> 업무 스타일 파악 중...',
  "> 발견: '안정성', 'TDD', '깊이 있는 분석'",
  '> 적합도 계산 중...',
  '> 프로필 완성 중...',
];

const iconMap: Record<string, React.ElementType> = {
  Zap,
  TrendingUp,
  Shield,
  Microscope,
};

export function ProfileCard({ type, profile, isAnalyzing }: ProfileCardProps) {
  const [logs, setLogs] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [progressWidth, setProgressWidth] = useState(0);
  const logContainerRef = useRef<HTMLDivElement>(null);

  const isCompany = type === 'company';
  const logSource = isCompany ? companyLogs : userLogs;

  const colors = isCompany
    ? { main: '#6C5CE7', light: '#a29bfe', hover: 'rgba(108, 92, 231, 0.3)' }
    : { main: '#06B6D4', light: '#06B6D4', hover: 'rgba(6, 182, 212, 0.3)' };

  useEffect(() => {
    if (isAnalyzing) {
      setProgressWidth(100);

      let index = 0;
      const interval = setInterval(() => {
        if (index < logSource.length) {
          setLogs((prev) => [...prev, logSource[index]]);
          index++;
        } else {
          clearInterval(interval);
          setTimeout(() => setShowResult(true), 500);
        }
      }, 300);

      return () => clearInterval(interval);
    }
  }, [isAnalyzing, logSource]);

  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div
      className="rounded-2xl p-6 relative overflow-hidden flex flex-col transition-colors"
      style={{
        backgroundColor: '#151b2e',
        border: '1px solid rgba(255, 255, 255, 0.05)',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = colors.hover;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255, 255, 255, 0.05)';
      }}
    >
      <div
        className="absolute top-0 left-0 h-1 transition-all duration-[2500ms] ease-out"
        style={{ width: `${progressWidth}%`, backgroundColor: colors.main }}
      />

      <div
        className="flex items-center gap-3 mb-4 font-bold text-lg"
        style={{ color: colors.light }}
      >
        {isCompany ? <Building className="w-5 h-5" /> : <UserCircle className="w-5 h-5" />}
        {isCompany ? '대상 기업' : '내 프로필'}
      </div>

      {!showResult ? (
        <div
          ref={logContainerRef}
          className="font-mono text-xs space-y-2 h-64 overflow-y-auto"
          style={{ color: `${colors.main}99` }}
        >
          {logs.map((log, i) => (
            <div key={i}>{log}</div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col h-full gap-5 fade-in-up">
          {isCompany ? (
            <CompanyContent profile={profile as CompanyProfile} />
          ) : (
            <UserContent profile={profile as UserProfile} />
          )}
        </div>
      )}
    </div>
  );
}

function CompanyContent({ profile }: { profile: CompanyProfile }) {
  return (
    <>
      <div>
        <h3 className="text-2xl font-bold text-white">{profile.name}</h3>
        <p className="text-sm" style={{ color: '#9CA3AF' }}>
          {profile.industry} · {profile.stage}
        </p>
      </div>

      <div className="space-y-4">
        <div
          className="p-3 rounded-lg"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
          }}
        >
          <p
            className="text-[10px] font-bold uppercase mb-2 tracking-wider"
            style={{ color: '#9CA3AF' }}
          >
            기술 스택
          </p>
          <div className="flex flex-wrap gap-2">
            {profile.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded"
                style={{
                  backgroundColor: 'rgba(108, 92, 231, 0.1)',
                  color: '#a29bfe',
                  border: '1px solid rgba(108, 92, 231, 0.2)',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div
          className="p-3 rounded-lg"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
          }}
        >
          <p
            className="text-[10px] font-bold uppercase mb-2 tracking-wider"
            style={{ color: '#9CA3AF' }}
          >
            기업 문화
          </p>
          <ul className="space-y-2">
            {profile.cultureDNA.map((item) => {
              const IconComponent = iconMap[item.icon] || Zap;
              return (
                <li key={item.label} className="flex items-center gap-2 text-sm text-gray-300">
                  <IconComponent className="w-3 h-3" style={{ color: '#6C5CE7' }} />
                  {item.label}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div
        className="mt-auto pt-4"
        style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}
      >
        <p className="text-xs italic leading-relaxed" style={{ color: '#9CA3AF' }}>
          "{profile.summary.split('비즈니스 임팩트')[0]}
          <span className="font-semibold" style={{ color: '#6C5CE7' }}>
            비즈니스 임팩트
          </span>
          {profile.summary.split('비즈니스 임팩트')[1]}"
        </p>
      </div>
    </>
  );
}

function UserContent({ profile }: { profile: UserProfile }) {
  return (
    <>
      <div>
        <h3 className="text-2xl font-bold text-white">{profile.title}</h3>
        <p className="text-sm" style={{ color: '#9CA3AF' }}>
          {profile.experience}
        </p>
      </div>

      <div className="space-y-4">
        <div
          className="p-3 rounded-lg"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
          }}
        >
          <p
            className="text-[10px] font-bold uppercase mb-2 tracking-wider"
            style={{ color: '#9CA3AF' }}
          >
            핵심 역량
          </p>
          <div className="flex flex-wrap gap-2">
            {profile.coreSkills.map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 text-xs rounded"
                style={{
                  backgroundColor: 'rgba(6, 182, 212, 0.1)',
                  color: '#06B6D4',
                  border: '1px solid rgba(6, 182, 212, 0.2)',
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div
          className="p-3 rounded-lg"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
          }}
        >
          <p
            className="text-[10px] font-bold uppercase mb-2 tracking-wider"
            style={{ color: '#9CA3AF' }}
          >
            업무 스타일
          </p>
          <ul className="space-y-2">
            {profile.workStyle.map((item) => {
              const IconComponent = iconMap[item.icon] || Shield;
              return (
                <li key={item.label} className="flex items-center gap-2 text-sm text-gray-300">
                  <IconComponent className="w-3 h-3" style={{ color: '#06B6D4' }} />
                  {item.label}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div
        className="mt-auto pt-4"
        style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}
      >
        <p className="text-xs italic leading-relaxed" style={{ color: '#9CA3AF' }}>
          "{profile.summary.split('견고한 아키텍처')[0]}
          <span className="font-semibold" style={{ color: '#06B6D4' }}>
            견고한 아키텍처
          </span>
          {profile.summary.split('견고한 아키텍처')[1]}"
        </p>
      </div>
    </>
  );
}
