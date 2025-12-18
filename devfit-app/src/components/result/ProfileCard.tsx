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
    ? { main: '#3182F6', light: '#EBF4FF' }
    : { main: '#3CD4A0', light: '#E8FAF3' };

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
    <div className="bg-white rounded-2xl p-5 relative overflow-hidden flex flex-col toss-shadow h-full">
      <div
        className="absolute top-0 left-0 h-1 transition-all duration-[2500ms] ease-out rounded-t-2xl"
        style={{ width: `${progressWidth}%`, backgroundColor: colors.main }}
      />

      <div
        className="flex items-center gap-2.5 mb-4 font-semibold text-base"
        style={{ color: colors.main }}
      >
        {isCompany ? <Building className="w-5 h-5" /> : <UserCircle className="w-5 h-5" />}
        {isCompany ? '대상 기업' : '내 프로필'}
      </div>

      {!showResult ? (
        <div
          ref={logContainerRef}
          className="font-mono text-xs space-y-2 h-64 overflow-y-auto text-text-quaternary"
        >
          {logs.map((log, i) => (
            <div key={i}>{log}</div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col h-full gap-4 fade-in-up">
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
        <h3 className="text-xl font-bold text-text-primary">{profile.name}</h3>
        <p className="text-sm text-text-tertiary">
          {profile.industry} · {profile.stage}
        </p>
      </div>

      <div className="space-y-3">
        <div className="p-3 rounded-xl bg-bg-secondary">
          <p className="text-[10px] font-semibold uppercase mb-2 tracking-wider text-text-quaternary">
            기술 스택
          </p>
          <div className="flex flex-wrap gap-1.5">
            {profile.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded-lg bg-toss-blue-light text-toss-blue font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="p-3 rounded-xl bg-bg-secondary">
          <p className="text-[10px] font-semibold uppercase mb-2 tracking-wider text-text-quaternary">
            기업 문화
          </p>
          <ul className="space-y-1.5">
            {profile.cultureDNA.map((item) => {
              const IconComponent = iconMap[item.icon] || Zap;
              return (
                <li key={item.label} className="flex items-center gap-2 text-sm text-text-secondary">
                  <IconComponent className="w-3.5 h-3.5 text-toss-blue" />
                  {item.label}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="mt-auto pt-3 border-t border-border-light">
        <p className="text-xs leading-relaxed text-text-tertiary">
          "{profile.summary.split('비즈니스 임팩트')[0]}
          <span className="font-semibold text-toss-blue">비즈니스 임팩트</span>
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
        <h3 className="text-xl font-bold text-text-primary">{profile.title}</h3>
        <p className="text-sm text-text-tertiary">{profile.experience}</p>
      </div>

      <div className="space-y-3">
        <div className="p-3 rounded-xl bg-bg-secondary">
          <p className="text-[10px] font-semibold uppercase mb-2 tracking-wider text-text-quaternary">
            핵심 역량
          </p>
          <div className="flex flex-wrap gap-1.5">
            {profile.coreSkills.map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 text-xs rounded-lg bg-toss-green-light text-toss-green font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="p-3 rounded-xl bg-bg-secondary">
          <p className="text-[10px] font-semibold uppercase mb-2 tracking-wider text-text-quaternary">
            업무 스타일
          </p>
          <ul className="space-y-1.5">
            {profile.workStyle.map((item) => {
              const IconComponent = iconMap[item.icon] || Shield;
              return (
                <li key={item.label} className="flex items-center gap-2 text-sm text-text-secondary">
                  <IconComponent className="w-3.5 h-3.5 text-toss-green" />
                  {item.label}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="mt-auto pt-3 border-t border-border-light">
        <p className="text-xs leading-relaxed text-text-tertiary">
          "{profile.summary.split('견고한 아키텍처')[0]}
          <span className="font-semibold text-toss-green">견고한 아키텍처</span>
          {profile.summary.split('견고한 아키텍처')[1]}"
        </p>
      </div>
    </>
  );
}
