import type { AnalysisResult } from "@/types";

export const mockResult: AnalysisResult = {
  matchScore: 100,
  matchLevel: "Perfect Fit",
  company: {
    name: "A Corp.",
    industry: "Fintech",
    stage: "Series B",
    techStack: ["Python", "FastAPI", "AWS"],
    cultureDNA: [
      { icon: "Zap", label: "빠른 실행력 (Speed)" },
      { icon: "TrendingUp", label: "성과 중심 (KPI)" },
    ],
    summary:
      "기술적 완벽함보다는 비즈니스 임팩트를 최우선으로 하는 조직입니다.",
  },
  user: {
    title: "Deep Diver",
    experience: "Backend Dev · 3 Years",
    coreSkills: ["Python", "Django", "Docker"],
    workStyle: [
      { icon: "Shield", label: "안정성 중시" },
      { icon: "Microscope", label: "원리 탐구 (Deep Dive)" },
    ],
    summary: "빠른 구현보다는 견고한 아키텍처를 선호하는 엔지니어입니다.",
  },
  chartData: {
    labels: ["Growth", "Tech Stack", "WLB", "Team", "Compensation"],
    companyData: [9, 8, 4, 8, 8],
    userData: [8, 9, 7, 9, 7],
  },
  synergies: [
    {
      title: "Backend Tech Stack Fit",
      matchPercent: 98,
      companyRequires: "Python, FastAPI",
      myCapabilities: "Python Expert, Django",
      insight:
        "즉시 전력감입니다. Django 경험을 바탕으로 FastAPI 로의 전환 비용이 거의 없습니다.",
    },
  ],
  gaps: [
    {
      title: "Dev Speed vs Stability",
      level: "Moderate",
      companyPosition: 20,
      myPosition: 70,
      strategy:
        "빠른 배포를 저해하지 않으면서 안정성을 챙기는 CI/CD 자동화 테스트 역량을 강조하여, 속도와 품질의 균형을 맞출 수 있음을 어필하세요.",
    },
  ],
  technicalFit: [
    { skill: "Python / Backend", percent: 95 },
    { skill: "Cloud (AWS)", percent: 80 },
    { skill: "DevOps / CI/CD", percent: 60, needsImprovement: true },
  ],
  keywords: [
    { tag: "#Growth", matched: true },
    { tag: "#Backend", matched: true },
    { tag: "#Python", matched: true },
    { tag: "#Full-Remote", matched: false, strikethrough: true },
    { tag: "#Fintech", matched: false },
  ],
  careerTimeline: [
    {
      year: "1Y",
      badge: "The Adapter",
      title: "적응과 조율",
      description:
        "빠른 배포 주기에 적응하며 기술 부채를 최소화하는 하이브리드 워크플로우를 제안합니다.",
      color: "cyan",
    },
    {
      year: "3Y",
      badge: "Core Lead",
      title: "문화 전파자",
      description:
        "팀의 허리 역할로 성장하여 사내에 TDD 및 코드 리뷰 문화를 성공적으로 정착시킵니다.",
      color: "brand",
    },
    {
      year: "5Y",
      badge: "Architect",
      title: "시스템 설계",
      description: "트래픽 10배 성장에 대비해 MSA 전환 프로젝트를 총괄합니다.",
      color: "green",
    },
    {
      year: "10Y",
      badge: "CTO / Founder",
      title: "기술 경영",
      description:
        "회사의 CTO로 승진하거나, 축적된 도메인 지식을 바탕으로 독립합니다.",
      color: "white",
    },
  ],
  interviewStrategies: [
    {
      number: 1,
      title: "기술 부채 관리 전략",
      description:
        "안정성을 중시하는 내 강점을 어필하되, 회사의 속도에 맞출 의지를 보여주는 '보완재' 포지셔닝이 필요합니다.",
    },
    {
      number: 2,
      title: "실패 포스트모텀",
      description:
        "도전적인 문화를 가진 회사인지 확인하고, 내가 그 실패를 시스템적으로 예방할 수 있음을 어필합니다.",
    },
    {
      number: 3,
      title: "코드 리뷰 참여도",
      description:
        "성장 지향적인 내 성향을 강조하며, 팀의 코드 퀄리티를 높이는 데 기여하고 싶음을 드러냅니다.",
    },
  ],
};
