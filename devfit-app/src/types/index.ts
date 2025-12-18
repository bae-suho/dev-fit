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
  url?: string;
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

// Evidence type used in company/candidate analysis
export interface EvidenceItem {
  doc_id: string;
  line_refs: string[];
  quote: string;
}

// New Full API Response Types (with separate company/candidate analysis)
export interface CompanyAnalysis {
  _id?: string;
  schema_version?: string;
  profile_meta: {
    profile_id?: string;
    company_name: string;
    industry?: string;
    stage?: string;
    primary_domain?: string;
    analyzed_scope?: string;
    analyzed_date?: string;
    source_docs?: ApiSourceDoc[];
  };
  company_info_fields: {
    basic_profile?: {
      summary: string;
      evidence?: EvidenceItem[];
    };
    technical_environment?: {
      stack: string[] | {
        languages?: string[];
        frameworks?: string[];
        data?: string[];
        infra_cloud?: string[];
        ops_tools?: string[];
      };
      ops_deploy_experience_required_or_mentioned?: string;
      scale_traffic_platform_mentioned?: string;
      evidence?: EvidenceItem[];
    };
    role_and_hiring_signals?: {
      hiring_summary?: string;
      open_roles_mentioned?: string[];
      employment_type?: string;
      location?: string;
      remote_hybrid_onsite?: string;
      required_experience?: string;
      evidence?: EvidenceItem[];
    };
    execution_culture_signals?: {
      summary: string;
      speed_vs_stability?: string;
      prototype_vs_structure?: string;
      business_impact_vs_tech_quality?: string;
      evidence?: EvidenceItem[];
    };
    collaboration_culture_signals?: {
      summary: string;
      code_review_culture?: string;
      documentation_culture?: string;
      cross_functional_collaboration?: string;
      decision_making_process?: string;
      evidence?: EvidenceItem[];
    };
    growth_learning_culture_signals?: {
      summary: string;
      learning_support?: string;
      new_tech_adoption?: string;
      feedback_culture?: string;
      evidence?: EvidenceItem[];
    };
    ownership_expectation_signals?: {
      summary: string;
      problem_definition_expected?: string;
      decision_making_expected?: string;
      role_positioning?: string;
      evidence?: EvidenceItem[];
    };
    work_environment_expectations?: {
      summary: string;
      work_mode?: string;
      wlb_vs_immersion?: string;
      pace_intensity?: string;
      oncall_or_shift?: string;
      overtime_or_night_work?: string;
      benefits_or_perks?: string[];
      evidence?: EvidenceItem[];
    };
    verification_needed_areas?: {
      missing_or_unmentioned?: string[];
      needs_followup_questions?: string[];
    };
  };
  scoring_axes?: Record<string, unknown>;
  extraction_quality?: {
    unknown_policy_applied?: string;
    notes?: string;
  };
  created_at?: string;
  updated_at?: string;
}

export interface CandidateAnalysis {
  _id?: string;
  schema_version?: string;
  profile_meta: {
    profile_id?: string;
    candidate_name?: string;
    name?: string;
    primary_role?: string;
    target_role?: string;
    seniority?: string;
    years_experience?: number;
    title?: string;
    source_docs?: ApiSourceDoc[];
  };
  user_info_fields: {
    basic_profile?: {
      summary: string;
      evidence?: EvidenceItem[];
    };
    technical_capability?: {
      stack?: {
        languages?: string[];
        frameworks?: string[];
        data?: string[];
        infra_cloud?: string[];
        ops_tools?: string[];
      };
      skills?: string[];
      ops_deploy_experience?: string;
      scale_traffic_platform_mentioned?: string;
      evidence?: EvidenceItem[];
    };
    project_behavior_data?: {
      projects?: Array<{
        name: string;
        timeframe?: string;
        context_problem?: string;
        responsibility_scope?: string;
        technical_decisions?: string[];
        outcomes_metrics?: Array<{
          metric: string;
          before?: string;
          after?: string;
          notes?: string;
        }>;
        evidence?: EvidenceItem[];
      }>;
    };
    execution_experience?: {
      description: string;
      evidence?: string[] | EvidenceItem[];
    };
    collaboration_experience?: {
      summary?: string;
      description?: string;
      code_review_participation?: string;
      documentation_communication?: string;
      cross_functional_collaboration?: string;
      conflict_coordination_experience?: string;
      evidence?: string[] | EvidenceItem[];
    };
    growth_tendency?: {
      summary?: string;
      description?: string;
      learning_mode?: string;
      new_tech_adoption?: string;
      feedback_receptiveness?: string;
      evidence?: string[] | EvidenceItem[];
    };
    ownership_tendency?: {
      description?: string;
      evidence?: string[] | EvidenceItem[];
    };
    product_user_impact_experience?: {
      description?: string;
      evidence?: string[] | EvidenceItem[];
    };
    work_environment_signals?: {
      summary?: string;
      work_mode_preference?: string;
      work_life_balance_vs_immersion?: string;
      pace_intensity_preference?: string;
      evidence?: EvidenceItem[];
    };
    verification_needed_areas?: {
      missing_or_unmentioned?: string[];
      needs_followup_questions?: string[];
    };
  };
  scoring_axes?: Record<string, unknown>;
  extraction_quality?: {
    unknown_policy_applied?: string;
    notes?: string;
  };
  created_at?: string;
  updated_at?: string;
}

export interface CultureFitResult {
  _id?: string;
  schema_version?: string;
  meta?: {
    generated_at: string;
    scoring_version: string;
    axes_used?: string[];
    notes: string;
  };
  inputs?: {
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
  created_at?: string;
  updated_at?: string;
}

export interface FullApiResponse {
  schema_version: string;
  meta: {
    generated_at: string;
    scoring_version: string;
    notes: string;
  };
  company_analysis: CompanyAnalysis;
  candidate_analysis: CandidateAnalysis;
  culture_fit_result: CultureFitResult;
}
