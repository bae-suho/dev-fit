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

export interface HistoryItem {
  id: string;
  url: string;
  companyName: string;
  matchScore: number;
  matchLevel: string;
  createdAt: string;
  result: AnalysisResult;
}

// Backend API Response Types
export interface ApiEvidenceRef {
  path: string;
  quote: string;
}

export interface ApiAxisAlignment {
  status: 'aligned' | 'partial' | 'misaligned' | 'unknown';
  axis_score: number | 'unknown';
  summary: string;
  rationale: {
    company_signals: string[];
    developer_signals: string[];
    comparison_notes: string;
  };
  evidence_refs: {
    company: ApiEvidenceRef[];
    developer: ApiEvidenceRef[];
  };
  followup_questions: string[];
}

export interface ApiSourceDoc {
  doc_id: string;
  filename: string;
}

export interface ApiAnalysisResponse {
  schema_version: string;
  meta: {
    generated_at: string;
    scoring_version: string;
    axes_used: string[];
    notes: string;
  };
  inputs: {
    company_profile_ref: {
      profile_id: string;
      source_docs: ApiSourceDoc[];
    };
    developer_profile_ref: {
      profile_id: string;
      source_docs: ApiSourceDoc[];
    };
  };
  axis_alignments: {
    technical_fit: ApiAxisAlignment;
    execution_style: ApiAxisAlignment;
    collaboration_style: ApiAxisAlignment;
    growth_learning_orientation: ApiAxisAlignment;
    product_user_impact_orientation: ApiAxisAlignment;
    ops_quality_responsibility: ApiAxisAlignment;
  };
  overall: {
    match_score: number;
    score_band: 'low' | 'medium' | 'high' | 'very_high';
    confidence: number;
    scoring: {
      weights: Record<string, number>;
      excluded_axes: string[];
      calculation_notes: string;
    };
    high_alignment_axes: string[];
    risk_or_mismatch_axes: string[];
    unknown_axes: string[];
    overall_notes: string;
  };
}
