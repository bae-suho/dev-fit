import type {
  ApiAnalysisResponse,
  FullApiResponse,
  AnalysisResult,
  Synergy,
  Gap,
  TechnicalFitItem,
  Keyword,
  InterviewStrategy,
  CareerStage,
} from "@/types";

// 축 이름 -> 한글 라벨 매핑
const AXIS_LABELS: Record<string, string> = {
  technical_fit: "기술 역량",
  execution_style: "업무 방식",
  collaboration_style: "협업 방식",
  growth_learning_orientation: "성장 마인드",
  product_user_impact_orientation: "사용자 중심 사고",
  ops_quality_responsibility: "책임감",
};

// 축 이름 -> 차트 라벨 매핑
const CHART_LABELS: Record<string, string> = {
  technical_fit: "Tech Fit",
  execution_style: "Execution",
  collaboration_style: "Collaboration",
  growth_learning_orientation: "Growth",
  product_user_impact_orientation: "Product Impact",
  ops_quality_responsibility: "Ops Quality",
};

// score_band -> matchLevel 매핑
function getMatchLevel(
  scoreBand: string,
  score: number
): AnalysisResult["matchLevel"] {
  if (score >= 90) return "Perfect Fit";
  if (score >= 80 || scoreBand === "very_high") return "Great Fit";
  if (score >= 70 || scoreBand === "high") return "Good Fit";
  if (score >= 50 || scoreBand === "medium") return "Moderate Fit";
  return "Low Fit";
}

// axis_score를 숫자로 변환 (unknown이면 0)
function getAxisScore(score: number | "unknown"): number {
  return score === "unknown" ? 0 : score;
}

// aligned 축들을 Synergy로 변환
function transformSynergies(
  alignments: ApiAnalysisResponse["axis_alignments"],
  highAlignmentAxes: string[]
): Synergy[] {
  return highAlignmentAxes.map((axisKey) => {
    const axis = alignments[axisKey as keyof typeof alignments];
    const score = getAxisScore(axis.axis_score);

    return {
      title: AXIS_LABELS[axisKey] || axisKey,
      matchPercent: score,
      companyRequires: axis.rationale.company_signals.join(", ") || "정보 없음",
      myCapabilities:
        axis.rationale.developer_signals.join(", ") || "정보 없음",
      insight: axis.summary,
    };
  });
}

// risk/mismatch 축들을 Gap으로 변환
function transformGaps(
  alignments: ApiAnalysisResponse["axis_alignments"],
  riskAxes: string[]
): Gap[] {
  return riskAxes.map((axisKey) => {
    const axis = alignments[axisKey as keyof typeof alignments];
    const score = getAxisScore(axis.axis_score);

    // 점수에 따라 Level 결정
    const level: Gap["level"] = score < 50 ? "Significant" : "Moderate";

    // 회사와 개발자 포지션 계산 (점수 기반으로 추정)
    const companyPosition = 80; // 회사는 보통 높은 기대치
    const myPosition = score;

    return {
      title: AXIS_LABELS[axisKey] || axisKey,
      level,
      companyPosition,
      myPosition,
      strategy: axis.rationale.comparison_notes || axis.summary,
    };
  });
}

// 기술 적합도 항목 생성
function transformTechnicalFit(
  alignments: ApiAnalysisResponse["axis_alignments"]
): TechnicalFitItem[] {
  const relevantAxes = [
    "technical_fit",
    "ops_quality_responsibility",
    "execution_style",
  ];

  return relevantAxes.map((axisKey) => {
    const axis = alignments[axisKey as keyof typeof alignments];
    const score = getAxisScore(axis.axis_score);

    return {
      skill: AXIS_LABELS[axisKey] || axisKey,
      percent: score,
      needsImprovement: score < 70,
    };
  });
}

// 키워드 생성
function transformKeywords(
  alignments: ApiAnalysisResponse["axis_alignments"]
): Keyword[] {
  return Object.entries(alignments).map(([key, axis]) => {
    const isMatched = axis.status === "aligned";
    const isUnknown = axis.status === "unknown";

    return {
      tag: `#${CHART_LABELS[key] || key}`,
      matched: isMatched,
      strikethrough: !isMatched && !isUnknown,
    };
  });
}

// 면접 전략 생성 (followup_questions 기반)
function transformInterviewStrategies(
  alignments: ApiAnalysisResponse["axis_alignments"]
): InterviewStrategy[] {
  const strategies: InterviewStrategy[] = [];
  let number = 1;

  Object.entries(alignments).forEach(([key, axis]) => {
    axis.followup_questions.forEach((question) => {
      if (number <= 5) {
        // 최대 5개까지
        strategies.push({
          number,
          title: `${AXIS_LABELS[key]} 관련 질문`,
          description: question,
        });
        number++;
      }
    });
  });

  // 최소 3개는 있어야 함 - 없으면 기본 전략 추가
  if (strategies.length === 0) {
    strategies.push(
      {
        number: 1,
        title: "강점 어필 전략",
        description:
          "높은 정합도를 보이는 영역에서 구체적인 경험과 성과를 준비하세요.",
      },
      {
        number: 2,
        title: "갭 보완 전략",
        description: "부족한 영역에 대해 학습 의지와 빠른 적응력을 강조하세요.",
      },
      {
        number: 3,
        title: "문화 적합성 강조",
        description:
          "회사의 핵심 가치와 본인의 업무 스타일이 맞는 부분을 구체적으로 설명하세요.",
      }
    );
  }

  return strategies;
}

// 기본 커리어 타임라인 (API에서 제공하지 않는 경우)
function getDefaultCareerTimeline(): CareerStage[] {
  return [
    {
      year: "1Y",
      badge: "The Adapter",
      title: "적응과 조율",
      description:
        "회사의 업무 방식에 적응하며 본인의 강점을 발휘할 영역을 찾습니다.",
      color: "cyan",
    },
    {
      year: "3Y",
      badge: "Core Contributor",
      title: "핵심 기여자",
      description: "팀의 핵심 멤버로 성장하여 주요 프로젝트를 리드합니다.",
      color: "brand",
    },
    {
      year: "5Y",
      badge: "Tech Lead",
      title: "기술 리더",
      description: "기술적 의사결정을 주도하고 주니어 멤버를 멘토링합니다.",
      color: "green",
    },
    {
      year: "10Y",
      badge: "Expert",
      title: "도메인 전문가",
      description: "업계에서 인정받는 전문가로 성장합니다.",
      color: "white",
    },
  ];
}

// 차트 데이터 생성 (기존 방식 - axis_alignments 기반)
function transformChartData(
  alignments: ApiAnalysisResponse["axis_alignments"]
) {
  const axes = Object.keys(alignments);
  const labels = axes.map((key) => CHART_LABELS[key] || key);

  // 회사 데이터: 정합도가 높으면 양쪽이 비슷, 낮으면 회사 기대치가 높다고 가정
  const companyData = axes.map((key) => {
    const axis = alignments[key as keyof typeof alignments];
    const score = getAxisScore(axis.axis_score);
    // 회사 기대치는 점수가 낮을수록 더 높게 표시 (갭을 보여주기 위해)
    return Math.min(100, Math.max(50, 100 - (100 - score) * 0.3));
  });

  // 사용자 데이터: axis_score 그대로 사용
  const userData = axes.map((key) => {
    const axis = alignments[key as keyof typeof alignments];
    return getAxisScore(axis.axis_score);
  });

  return {
    labels,
    companyData: companyData.map((v) => Math.round(v / 20)), // 0-5 스케일로 변환
    userData: userData.map((v) => Math.round(v / 20)),
  };
}

// 차트용 축 매핑 (scoring_axes 키 -> 라벨)
const CHART_AXIS_KEYS = [
  "technical_fit",
  "execution_style",
  "collaboration_style",
  "ownership",
  "growth_orientation",
  "work_expectation",
];

const CHART_AXIS_LABELS: Record<string, string> = {
  technical_fit: "Tech Fit",
  execution_style: "Execution",
  collaboration_style: "Collaboration",
  ownership: "Ownership",
  growth_orientation: "Growth",
  work_expectation: "Work Style",
};

// 차트 데이터 생성 (새 방식 - company/candidate scoring_axes 기반)
function transformChartDataFromScores(
  companyScoringAxes: Record<string, unknown>,
  candidateScoringAxes: Record<string, unknown>
) {
  const labels = CHART_AXIS_KEYS.map((key) => CHART_AXIS_LABELS[key] || key);

  // 회사 점수 추출 (0-4 스케일)
  const companyData = CHART_AXIS_KEYS.map((key) => {
    const companyKey = `${key}_company`;
    const axisData = companyScoringAxes[companyKey] as { score?: number } | undefined;
    return axisData?.score ?? 0;
  });

  // 사용자 점수 추출 (0-4 스케일)
  const userData = CHART_AXIS_KEYS.map((key) => {
    const userKey = `${key}_user`;
    const axisData = candidateScoringAxes[userKey] as { score?: number } | undefined;
    return axisData?.score ?? 0;
  });

  return {
    labels,
    companyData, // 0-4 스케일
    userData,    // 0-4 스케일
  };
}

// 메인 변환 함수 (기존 ApiAnalysisResponse용)
export function transformApiResponse(
  apiResponse: ApiAnalysisResponse
): AnalysisResult {
  const { axis_alignments, overall, inputs } = apiResponse;

  // 회사명 추출 (profile_id에서)
  const companyId = inputs.company_profile_ref.profile_id;
  const companyName = companyId
    .replace(/_/g, " ")
    .replace("company profile", "")
    .trim();

  // 개발자명 추출
  const developerId = inputs.developer_profile_ref.profile_id;
  const developerMatch = developerId.match(/P\d+_(.+)/);
  const developerName = developerMatch
    ? developerMatch[1].replace(/_/g, " ")
    : developerId;

  return {
    matchScore: overall.match_score,
    matchLevel: getMatchLevel(overall.score_band, overall.match_score),
    company: {
      name: companyName || "Company",
      industry: "정보 없음", // API에서 제공하지 않음
      techStack: axis_alignments.technical_fit.rationale.company_signals.slice(
        0,
        3
      ),
      cultureDNA: [
        {
          icon:
            axis_alignments.execution_style.status === "aligned"
              ? "Zap"
              : "Shield",
          label: axis_alignments.execution_style.summary.slice(0, 30),
        },
        {
          icon:
            axis_alignments.collaboration_style.status === "aligned"
              ? "Users"
              : "User",
          label: axis_alignments.collaboration_style.summary.slice(0, 30),
        },
      ],
      summary: overall.overall_notes,
    },
    user: {
      title: developerName,
      experience: "개발자",
      coreSkills:
        axis_alignments.technical_fit.rationale.developer_signals.slice(0, 3),
      workStyle: [
        {
          icon:
            axis_alignments.execution_style.status === "aligned"
              ? "Zap"
              : "Shield",
          label:
            axis_alignments.execution_style.rationale.developer_signals[0]?.slice(
              0,
              30
            ) || "정보 없음",
        },
        {
          icon:
            axis_alignments.growth_learning_orientation.status === "aligned"
              ? "TrendingUp"
              : "Target",
          label:
            axis_alignments.growth_learning_orientation.rationale.developer_signals[0]?.slice(
              0,
              30
            ) || "정보 없음",
        },
      ],
      summary: axis_alignments.technical_fit.summary,
    },
    chartData: transformChartData(axis_alignments),
    synergies: transformSynergies(axis_alignments, overall.high_alignment_axes),
    gaps: transformGaps(axis_alignments, overall.risk_or_mismatch_axes),
    technicalFit: transformTechnicalFit(axis_alignments),
    keywords: transformKeywords(axis_alignments),
    careerTimeline: getDefaultCareerTimeline(),
    interviewStrategies: transformInterviewStrategies(axis_alignments),
  };
}

// 새로운 Full API Response 변환 함수
export function transformFullApiResponse(
  apiResponse: FullApiResponse
): AnalysisResult {
  const { company_analysis, candidate_analysis, culture_fit_result } =
    apiResponse;
  const { axis_alignments, overall } = culture_fit_result;

  // === 회사 정보 추출 (company_analysis 매핑) ===
  const companyName = company_analysis.profile_meta.company_name || "Company";

  // industry: "unknown"이면 "정보 없음"으로 표시
  const industry =
    company_analysis.profile_meta.industry === "unknown"
      ? "정보 없음"
      : company_analysis.profile_meta.industry || "정보 없음";

  // 기술 스택: technical_environment.stack에서 모든 카테고리 합치기
  let companyTechStack: string[] = [];
  const techEnv = company_analysis.company_info_fields.technical_environment;

  if (techEnv?.stack) {
    if (typeof techEnv.stack === "object" && !Array.isArray(techEnv.stack)) {
      const stackObj = techEnv.stack as Record<string, string[]>;
      companyTechStack = [
        ...(stackObj.languages || []),
        ...(stackObj.frameworks || []),
        ...(stackObj.infra_cloud || []),
        ...(stackObj.ops_tools || []),
      ];
    } else if (Array.isArray(techEnv.stack)) {
      companyTechStack = techEnv.stack;
    }
  }

  // 회사 문화 DNA: execution_culture_signals.summary와 collaboration_culture_signals.summary 사용
  const companyCultureDNA = [];

  if (company_analysis.company_info_fields.execution_culture_signals?.summary) {
    companyCultureDNA.push({
      icon:
        axis_alignments.execution_style.status === "aligned" ? "Zap" : "Shield",
      label:
        company_analysis.company_info_fields.execution_culture_signals.summary.slice(
          0,
          50
        ),
    });
  }

  if (
    company_analysis.company_info_fields.collaboration_culture_signals?.summary
  ) {
    companyCultureDNA.push({
      icon:
        axis_alignments.collaboration_style.status === "aligned"
          ? "Users"
          : "User",
      label:
        company_analysis.company_info_fields.collaboration_culture_signals.summary.slice(
          0,
          50
        ),
    });
  }

  // fallback: 문화 정보가 없으면 axis summary 사용
  if (companyCultureDNA.length === 0) {
    companyCultureDNA.push(
      {
        icon:
          axis_alignments.execution_style.status === "aligned"
            ? "Zap"
            : "Shield",
        label: axis_alignments.execution_style.summary.slice(0, 50),
      },
      {
        icon:
          axis_alignments.collaboration_style.status === "aligned"
            ? "Users"
            : "User",
        label: axis_alignments.collaboration_style.summary.slice(0, 50),
      }
    );
  }

  // 회사 요약: basic_profile.summary 사용
  const companySummary =
    company_analysis.company_info_fields.basic_profile?.summary ||
    overall.overall_notes;

  // === 후보자 정보 추출 (candidate_analysis 매핑) ===
  // candidate_name 또는 name 필드에서 이름 추출
  const candidateName =
    candidate_analysis.profile_meta.candidate_name ||
    candidate_analysis.profile_meta.name ||
    "Developer";

  // 경력 정보 추출
  const yearsExperience = candidate_analysis.profile_meta.years_experience;
  const targetRole = candidate_analysis.profile_meta.target_role;
  const seniority = candidate_analysis.profile_meta.seniority;

  let experience = "개발자";
  if (yearsExperience) {
    experience = `${yearsExperience}년차`;
    if (seniority) {
      const seniorityMap: Record<string, string> = {
        lead: "리드",
        senior: "시니어",
        mid: "미드",
        junior: "주니어",
      };
      experience += ` ${seniorityMap[seniority] || seniority}`;
    }
    experience += " 개발자";
  } else if (targetRole) {
    experience = targetRole;
  }

  // 핵심 역량: technical_capability.stack에서 추출
  let coreSkills: string[] = [];
  const candidateTechCapability =
    candidate_analysis.user_info_fields.technical_capability;

  if (candidateTechCapability?.stack) {
    const stack = candidateTechCapability.stack;
    coreSkills = [
      ...(stack.languages || []),
      ...(stack.frameworks || []),
      ...(stack.infra_cloud || []),
      ...(stack.ops_tools || []),
    ];
  } else if (candidateTechCapability?.skills) {
    coreSkills = candidateTechCapability.skills;
  }

  // fallback: axis rationale에서 developer_signals 사용
  if (coreSkills.length === 0) {
    coreSkills = axis_alignments.technical_fit.rationale.developer_signals;
  }

  // 업무 스타일: growth_tendency와 collaboration_experience에서 추출
  const userWorkStyle = [];

  // execution 스타일 - growth_tendency.summary 또는 description 사용
  const growthTendency = candidate_analysis.user_info_fields.growth_tendency;
  if (growthTendency) {
    const growthLabel =
      growthTendency.summary || growthTendency.description || "";
    if (growthLabel) {
      userWorkStyle.push({
        icon:
          axis_alignments.growth_learning_orientation.status === "aligned"
            ? "TrendingUp"
            : "Target",
        label: growthLabel.slice(0, 40),
      });
    }
  }

  // collaboration 스타일 - collaboration_experience.summary 사용
  const collaborationExp =
    candidate_analysis.user_info_fields.collaboration_experience;
  if (collaborationExp) {
    const collabLabel =
      collaborationExp.summary || collaborationExp.description || "";
    if (collabLabel) {
      userWorkStyle.push({
        icon:
          axis_alignments.collaboration_style.status === "aligned"
            ? "Users"
            : "User",
        label: collabLabel.slice(0, 40),
      });
    }
  }

  // fallback: 업무 스타일 정보가 없으면 axis rationale 사용
  if (userWorkStyle.length === 0) {
    userWorkStyle.push(
      {
        icon:
          axis_alignments.execution_style.status === "aligned"
            ? "Zap"
            : "Shield",
        label:
          axis_alignments.execution_style.rationale.developer_signals[0]?.slice(
            0,
            30
          ) || "정보 없음",
      },
      {
        icon:
          axis_alignments.growth_learning_orientation.status === "aligned"
            ? "TrendingUp"
            : "Target",
        label:
          axis_alignments.growth_learning_orientation.rationale.developer_signals[0]?.slice(
            0,
            30
          ) || "정보 없음",
      }
    );
  }

  // 사용자 요약: basic_profile.summary 또는 technical_fit summary 사용
  const userSummary =
    candidate_analysis.user_info_fields.basic_profile?.summary ||
    axis_alignments.technical_fit.summary;

  return {
    matchScore: overall.match_score,
    matchLevel: getMatchLevel(overall.score_band, overall.match_score),
    company: {
      name: companyName,
      industry,
      techStack: companyTechStack.slice(0, 6),
      cultureDNA: companyCultureDNA.slice(0, 2),
      summary: companySummary,
    },
    user: {
      title: candidateName,
      experience,
      coreSkills: coreSkills.slice(0, 6),
      workStyle: userWorkStyle.slice(0, 2),
      summary: userSummary,
    },
    chartData: transformChartDataFromScores(
      company_analysis.scoring_axes || {},
      candidate_analysis.scoring_axes || {}
    ),
    synergies: transformSynergies(axis_alignments, overall.high_alignment_axes),
    gaps: transformGaps(axis_alignments, overall.risk_or_mismatch_axes),
    technicalFit: transformTechnicalFit(axis_alignments),
    keywords: transformKeywords(axis_alignments),
    careerTimeline: getDefaultCareerTimeline(),
    interviewStrategies: transformInterviewStrategies(axis_alignments),
  };
}
