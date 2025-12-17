export interface AnalysisData {
  url: string;
  file: File | null;
}

export interface CompanyProfile {
  name: string;
  industry: string;
  stage: string;
  techStack: string[];
  cultureDNA: { icon: string; label: string }[];
  summary: string;
}

export interface UserProfile {
  title: string;
  experience: string;
  coreSkills: string[];
  workStyle: { icon: string; label: string }[];
  summary: string;
}

export interface ChartData {
  labels: string[];
  companyData: number[];
  userData: number[];
}

export interface AnalysisResult {
  matchScore: number;
  matchLevel: 'Low Fit' | 'Moderate Fit' | 'Good Fit' | 'Great Fit' | 'Perfect Fit';
  company: CompanyProfile;
  user: UserProfile;
  chartData: ChartData;
  synergies: Synergy[];
  gaps: Gap[];
  technicalFit: TechnicalFitItem[];
  keywords: Keyword[];
  careerTimeline: CareerStage[];
  interviewStrategies: InterviewStrategy[];
}

export interface Synergy {
  title: string;
  matchPercent: number;
  companyRequires: string;
  myCapabilities: string;
  insight: string;
}

export interface Gap {
  title: string;
  level: 'Moderate' | 'Significant';
  companyPosition: number;
  myPosition: number;
  strategy: string;
}

export interface TechnicalFitItem {
  skill: string;
  percent: number;
  needsImprovement?: boolean;
}

export interface Keyword {
  tag: string;
  matched: boolean;
  strikethrough?: boolean;
}

export interface CareerStage {
  year: string;
  badge: string;
  title: string;
  description: string;
  color: 'cyan' | 'brand' | 'green' | 'white';
}

export interface InterviewStrategy {
  number: number;
  title: string;
  description: string;
}
