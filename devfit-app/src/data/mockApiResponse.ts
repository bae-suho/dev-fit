import type { FullApiResponse } from "@/types";

export const mockApiResponse: FullApiResponse = {
  schema_version: "1.0",
  meta: {
    generated_at: "2025-12-18",
    scoring_version: "v1.0-equal-weights",
    notes:
      "명시적 JSON 신호만 사용. 프론트엔드 신입 개발자와 DevOps 중심 회사 포지션 간 비교.",
  },
  company_analysis: {
    _id: "6943a66b889f4e10056041d3",
    schema_version: "1.0",
    profile_meta: {
      company_name: "토스",
      industry: "핀테크",
      primary_domain: "toss.im",
      analyzed_scope: "company",
      analyzed_date: "2025-12-18",
      source_docs: [
        {
          doc_id: "job_posting",
          filename: "unknown",
          url: "unknown",
        },
      ],
    },
    company_info_fields: {
      basic_profile: {
        summary:
          "자율과 책임을 바탕으로 빠르게 실행하며 고객 중심으로 문제를 해결하고 개인의 성장을 조직의 성장과 연결하는 문화를 지향함.",
        evidence: [
          {
            doc_id: "job_posting",
            line_refs: ["unknown"],
            quote: "㈜비바리퍼블리카",
          },
        ],
      },
      technical_environment: {
        stack: {
          languages: ["Java"],
          frameworks: ["Spring Framework", "JPA/Hibernate"],
          data: ["Kafka", "Elastic", "InfluxData", "Memcached"],
          infra_cloud: ["Kubernetes", "Cloud Native", "Istio", "Docker"],
          ops_tools: ["Jenkins", "Git", "Grafana", "Gradle"],
        },
        ops_deploy_experience_required_or_mentioned: "yes",
        scale_traffic_platform_mentioned: "yes",
        evidence: [
          {
            doc_id: "job_posting",
            line_refs: ["unknown"],
            quote: "Jenkins, Git, Docker, Kubernetes + Istio",
          },
        ],
      },
      role_and_hiring_signals: {
        hiring_summary: "DevOps Engineer (토스 소속), SRE & DevOps팀",
        open_roles_mentioned: ["DevOps Engineer"],
        employment_type: "full_time",
        location: "unknown",
        remote_hybrid_onsite: "unknown",
        required_experience: "unknown",
        evidence: [
          {
            doc_id: "job_posting",
            line_refs: ["unknown"],
            quote: "DevOps Engineer\n토스 소속\n정규직",
          },
        ],
      },
      execution_culture_signals: {
        summary: "unknown",
        speed_vs_stability: "unknown",
        prototype_vs_structure: "unknown",
        business_impact_vs_tech_quality: "unknown",
        evidence: [
          {
            doc_id: "job_posting",
            line_refs: ["unknown"],
            quote: "배포 과정을 혁신해요.",
          },
        ],
      },
      collaboration_culture_signals: {
        summary: "SRE, devops, SE 간 업무 분담 및 협업 구조가 언급됨",
        code_review_culture: "unknown",
        documentation_culture: "unknown",
        cross_functional_collaboration: "mentioned",
        decision_making_process: "unknown",
        evidence: [
          {
            doc_id: "job_posting",
            line_refs: ["unknown"],
            quote:
              "SE분들이 담당... devops는 ... 소프트웨어 영역들을 모두 책임지고 운영",
          },
        ],
      },
      ownership_expectation_signals: {
        summary:
          "장애 대응 시 root cause 분석 및 구조적 개선 책임, 오픈소스 수정/기여 언급",
        problem_definition_expected: "unknown",
        decision_making_expected: "unknown",
        role_positioning: "owner",
        evidence: [
          {
            doc_id: "job_posting",
            line_refs: ["unknown"],
            quote: "root cause 분석과 구조적 개선까지 책임지는 분",
          },
        ],
      },
      growth_learning_culture_signals: {
        summary:
          "기술 도입/검증 프로세스에서 작게 실험하고 측정하며 가설 검증 언급",
        learning_support: "unknown",
        new_tech_adoption: "unknown",
        feedback_culture: "unknown",
        evidence: [
          {
            doc_id: "job_posting",
            line_refs: ["unknown"],
            quote: "작게 실험하고 측정하면서 가설들을 검증",
          },
        ],
      },
      work_environment_expectations: {
        summary: "보안 규정 준수(전자금융감독규정) 및 보안엔지니어 협업 언급",
        work_mode: "unknown",
        wlb_vs_immersion: "unknown",
        pace_intensity: "unknown",
        oncall_or_shift: "unknown",
        overtime_or_night_work: "unknown",
        benefits_or_perks: [],
        evidence: [
          {
            doc_id: "job_posting",
            line_refs: ["unknown"],
            quote:
              "전자금융감독규정을 지키고... 보안엔지니어분들과 최대한 협업",
          },
        ],
      },
      verification_needed_areas: {
        missing_or_unmentioned: [
          "industry",
          "company summary/mission (company-wide)",
          "company official URLs",
          "work mode (remote/hybrid/onsite)",
          "work location (company-level)",
          "required experience range",
          "benefits/perks",
          "code review culture",
          "documentation culture",
          "decision making process",
        ],
        needs_followup_questions: [
          "공식 회사 홈페이지/채용 페이지/기술블로그 URL을 제공할 수 있나요?",
          "근무 형태(원격/하이브리드/상주) 및 근무지는 어디인가요?",
          "경력 요건(연차 범위)과 직급/레벨 표기가 있나요?",
          "복지/혜택, 근무시간/유연근무 관련 공식 문구가 있나요?",
        ],
      },
    },
    scoring_axes: {
      scoring_policy: {
        scale: "0-4",
        meaning: {
          "0": "no explicit signal",
          "1": "weak/indirect mention",
          "2": "some evidence (limited scope)",
          "3": "clear evidence (multiple instances or concrete practices)",
          "4": "strong evidence (clear ownership + concrete policies/practices)",
        },
        unknown_handling:
          "If evidence is missing, score must be 0 and confidence must be low.",
      },
      technical_fit_company: {
        score: 2,
        summary:
          "DevOps 관련 기술/도구 스택이 명시됨 (예: Kubernetes, Istio, Jenkins, Grafana 등)",
        confidence: "medium",
        evidence: [
          {
            doc_id: "job_posting",
            line_refs: ["unknown"],
            quote: "Jenkins, Git, Docker, Kubernetes + Istio",
          },
        ],
        subsignals: {
          languages_frameworks_depth: 1,
          infra_cloud_exposure: 2,
          ops_deploy_monitoring_exposure: 2,
          scale_platform_exposure: 1,
        },
      },
      execution_style_company: {
        score: 1,
        summary: "배포 과정 혁신 및 장애 대응을 위한 메트릭 도출 언급",
        confidence: "low",
        evidence: [
          {
            doc_id: "job_posting",
            line_refs: ["unknown"],
            quote: "배포 과정을 혁신해요.",
          },
        ],
        subsignals: {
          speed_vs_stability: "unknown",
          prototype_vs_structure: "unknown",
          business_impact_vs_tech_quality: "unknown",
        },
      },
      collaboration_style_company: {
        score: 1,
        summary:
          "devops/SRE/SE 간 업무 분담과 협업 구조 및 보안엔지니어 협업 언급",
        confidence: "low",
        evidence: [
          {
            doc_id: "job_posting",
            line_refs: ["unknown"],
            quote: "보안엔지니어분들과 최대한 협업",
          },
        ],
        subsignals: {
          code_review: 0,
          documentation: 0,
          cross_functional: 1,
        },
      },
      ownership_company: {
        score: 2,
        summary:
          "장애 대응 시 root cause 분석과 구조적 개선 책임, 오픈소스 수정/기여 언급",
        confidence: "medium",
        evidence: [
          {
            doc_id: "job_posting",
            line_refs: ["unknown"],
            quote: "root cause 분석과 구조적 개선까지 책임",
          },
        ],
        subsignals: {
          problem_definition_involvement: 1,
          decision_making: 0,
          role_self_positioning: "owner",
        },
      },
      growth_orientation_company: {
        score: 1,
        summary: "기술 도입/검증에서 실험-측정 기반 가설 검증 언급",
        confidence: "low",
        evidence: [
          {
            doc_id: "job_posting",
            line_refs: ["unknown"],
            quote: "작게 실험하고 측정하면서 가설들을 검증",
          },
        ],
        subsignals: {
          new_tech_adoption: 1,
          self_directed_learning: 0,
          feedback_loop: 0,
        },
      },
      work_expectation_company: {
        score: 1,
        summary: "금융서비스 운영 관련 규정 준수 및 보안 협업 언급",
        confidence: "low",
        evidence: [
          {
            doc_id: "job_posting",
            line_refs: ["unknown"],
            quote: "전자금융감독규정을 지키고",
          },
        ],
        subsignals: {
          pace_intensity_preference: 0,
          wlb_vs_immersion_preference: 0,
          responsibility_density_signals: 1,
        },
      },
    },
    extraction_quality: {
      unknown_policy_applied: "yes",
      notes:
        "라인 번호/공식 URL이 제공되지 않아 line_refs와 url은 unknown으로 처리함. 회사 공식 사이트 텍스트가 별도로 제공되지 않아 company-level 정보는 제한적으로만 채움.",
    },
    created_at: "2025-12-18T06:59:55.921000",
    updated_at: "2025-12-18T06:59:55.921000",
  },
  candidate_analysis: {
    _id: "6943a6a40cd52905ca25692a",
    schema_version: "1.0",
    profile_meta: {
      candidate_name: "이다은",
      primary_role: "frontend",
      target_role: "frontend",
      seniority: "entry",
      years_experience: 0,
      source_docs: [
        {
          doc_id: "portfolio",
          filename: "Portfolio – 이다은 (Lee Da-eun).pdf",
        },
        {
          doc_id: "resume",
          filename: "이력서 – 이다은 (Lee Da-eun).pdf",
        },
        {
          doc_id: "essay",
          filename: "자기소개서 – 이다은.pdf",
        },
      ],
    },
    user_info_fields: {
      basic_profile: {
        summary:
          "비전공 문과 출신으로 프론트엔드 국비지원 부트캠프를 수료한 신입 프론트엔드 엔지니어로, UI 구현을 넘어 컴포넌트 구조와 상태 관리를 중시한다고 명시함.",
        evidence: [
          {
            doc_id: "resume",
            line_refs: ["unknown"],
            quote:
              "비전공 문과 출신으로 프론트엔드 국비지원 부트캠프를 수료한 신입 프론트엔드 엔지니어입니다.",
          },
        ],
      },
      technical_capability: {
        stack: {
          languages: ["JavaScript", "TypeScript"],
          frameworks: ["React", "Redux Toolkit", "React Query"],
          data: [],
          infra_cloud: [],
          ops_tools: ["Git", "GitHub", "Vite", "ESLint", "Prettier"],
        },
        ops_deploy_experience: "unknown",
        scale_traffic_platform_mentioned: "no",
        evidence: [
          {
            doc_id: "resume",
            line_refs: ["unknown"],
            quote:
              "Language: JavaScript(ES6+), TypeScript / Framework: React, Redux Toolkit, React Query",
          },
        ],
      },
      project_behavior_data: {
        projects: [
          {
            name: "커뮤니티형 웹 서비스",
            timeframe: "2024.03 ~ 2024.05",
            context_problem:
              "컴포넌트 간 의존성 증가와 상태 흐름 복잡성으로 인한 불필요한 리렌더링 발생",
            responsibility_scope: "팀 내 프론트엔드 개발 담당",
            technical_decisions: [
              "Redux Toolkit을 통한 전역 상태 관리",
              "UI 상태와 데이터 상태 분리",
              "React.memo를 통한 리렌더링 감소",
            ],
            outcomes_metrics: [],
            evidence: [
              {
                doc_id: "portfolio",
                line_refs: ["unknown"],
                quote:
                  "Redux Toolkit을 활용해 게시글 데이터와 사용자 상태를 전역으로 관리하고, UI 상태는 로컬 상태로 분리하는 구조를 선택했습니다.",
              },
            ],
          },
          {
            name: "사용자 대시보드 웹 애플리케이션",
            timeframe: "2024.06",
            context_problem: "서버 상태와 UI 상태를 명확히 분리하고자 함",
            responsibility_scope: "기획·디자인·프론트엔드 단독 진행",
            technical_decisions: [
              "React Query 도입",
              "로딩·에러·성공 상태 분리",
            ],
            outcomes_metrics: [],
            evidence: [
              {
                doc_id: "portfolio",
                line_refs: ["unknown"],
                quote:
                  "React Query를 도입해 서버 상태를 관리하고 로딩, 에러, 성공 상태를 명확히 분리했습니다.",
              },
            ],
          },
        ],
      },
      collaboration_experience: {
        summary:
          "팀 프로젝트에서 백엔드 개발자와 API 명세를 기준으로 협업하고 PR 기반 코드리뷰를 경험했다고 명시함.",
        code_review_participation: "yes",
        documentation_communication: "medium",
        cross_functional_collaboration: "occasional",
        conflict_coordination_experience: "mentioned",
        evidence: [
          {
            doc_id: "portfolio",
            line_refs: ["unknown"],
            quote:
              "백엔드 개발자와 API 명세를 기준으로 협업하며, 에러 코드에 따른 UI 처리 방식을 함께 논의했습니다.",
          },
        ],
      },
      growth_tendency: {
        summary:
          "빠른 성장을 위해 피드백과 시행착오를 중시하며 개인 프로젝트와 반복 학습을 선택했다고 서술함.",
        learning_mode: "self_directed",
        new_tech_adoption: "medium",
        feedback_receptiveness: "medium",
        evidence: [
          {
            doc_id: "essay",
            line_refs: ["unknown"],
            quote:
              "편한 환경보다는 실제로 손을 많이 써볼 수 있는 환경이 제게 더 잘 맞는다는 확신을 갖게 되었습니다.",
          },
        ],
      },
      work_environment_signals: {
        summary:
          "연봉이나 복지보다 실무 비중과 코드리뷰, 성장 가능한 환경을 선호한다고 명시함.",
        work_mode_preference: "unknown",
        work_life_balance_vs_immersion: "immersion",
        pace_intensity_preference: "high_intensity",
        evidence: [
          {
            doc_id: "essay",
            line_refs: ["unknown"],
            quote:
              "연봉이나 복지보다 실제 프론트엔드 실무 비중이 높고 코드리뷰와 피드백이 형식적으로 이루어지지 않는 환경을 선호합니다.",
          },
        ],
      },
      verification_needed_areas: {
        missing_or_unmentioned: [
          "배포 경험",
          "클라우드/인프라 사용 여부",
          "트래픽 규모 경험",
        ],
        needs_followup_questions: [
          "배포 및 운영 환경 경험이 있는지",
          "서비스 규모나 사용자 수 관련 경험이 있는지",
        ],
      },
    },
    scoring_axes: {
      scoring_policy: {
        scale: "0-4",
        meaning: {
          "0": "no explicit signal",
          "1": "weak/indirect mention",
          "2": "some evidence (limited scope)",
          "3": "clear evidence (multiple instances or concrete responsibilities)",
          "4": "strong evidence (clear ownership + concrete outcomes/metrics where applicable)",
        },
        unknown_handling:
          "If evidence is missing, score must be 0 and confidence must be low.",
      },
      technical_fit_user: {
        score: 2,
        summary:
          "프론트엔드 기술 스택과 상태 관리 도구 사용 경험이 프로젝트 단위로 명시됨.",
        confidence: "medium",
        evidence: [
          {
            doc_id: "resume",
            line_refs: ["unknown"],
            quote: "React, Redux Toolkit, React Query를 활용한 프로젝트 경험",
          },
        ],
        subsignals: {
          languages_frameworks_depth: 2,
          infra_cloud_exposure: 0,
          ops_deploy_monitoring_exposure: 0,
          scale_platform_exposure: 0,
        },
      },
      execution_style_user: {
        score: 3,
        summary:
          "문제 인식 후 구조를 재정의하고 개선하는 방식의 실행 스타일이 반복적으로 언급됨.",
        confidence: "medium",
        evidence: [
          {
            doc_id: "portfolio",
            line_refs: ["unknown"],
            quote: "어떤 상태가 전역으로 관리되어야 하는지 다시 정의했습니다.",
          },
        ],
        subsignals: {
          speed_vs_stability: "balanced",
          prototype_vs_structure: "structure",
          business_impact_vs_tech_quality: "tech_quality",
        },
      },
      collaboration_style_user: {
        score: 2,
        summary: "PR 기반 코드리뷰와 백엔드와의 협업 경험이 명시됨.",
        confidence: "medium",
        evidence: [
          {
            doc_id: "portfolio",
            line_refs: ["unknown"],
            quote:
              "PR 기반 코드리뷰를 통해 구조와 의도에 대한 질문을 받았습니다.",
          },
        ],
        subsignals: {
          code_review: 2,
          documentation: 1,
          cross_functional: 2,
        },
      },
      ownership_user: {
        score: 2,
        summary:
          "개인 프로젝트에서 기획부터 구현까지 단독으로 수행했다고 명시함.",
        confidence: "medium",
        evidence: [
          {
            doc_id: "portfolio",
            line_refs: ["unknown"],
            quote: "역할: 기획 · 디자인 · 프론트엔드 단독 진행",
          },
        ],
        subsignals: {
          problem_definition_involvement: 2,
          decision_making: 2,
          role_self_positioning: "owner",
        },
      },
      growth_orientation_user: {
        score: 3,
        summary:
          "빠른 성장을 목표로 피드백과 반복 학습을 중시한다고 여러 문서에서 언급됨.",
        confidence: "medium",
        evidence: [
          {
            doc_id: "essay",
            line_refs: ["unknown"],
            quote:
              "어떻게 하면 실무에서 빠르게 따라잡을 수 있을까라는 질문으로 바뀌었습니다.",
          },
        ],
        subsignals: {
          new_tech_adoption: 2,
          self_directed_learning: 3,
          feedback_loop: 2,
        },
      },
      work_expectation_user: {
        score: 2,
        summary: "성장 중심의 환경과 높은 실무 비중을 선호한다고 명시함.",
        confidence: "medium",
        evidence: [
          {
            doc_id: "essay",
            line_refs: ["unknown"],
            quote:
              "힘들 수는 있어도, 이 회사에서 분명히 성장하고 있다는 확신을 가질 수 있다면 기꺼이 도전하고 싶습니다.",
          },
        ],
        subsignals: {
          pace_intensity_preference: 2,
          wlb_vs_immersion_preference: 2,
          responsibility_density_signals: 2,
        },
      },
    },
    extraction_quality: {
      unknown_policy_applied: "yes",
      notes:
        "배포, 인프라, 트래픽 규모 관련 명시적 정보는 제공되지 않아 unknown 처리함.",
    },
    created_at: "2025-12-18T07:00:52.427000",
    updated_at: "2025-12-18T07:00:52.427000",
  },
  culture_fit_result: {
    _id: "6943a70c91d4def5c697987b",
    schema_version: "1.0",
    meta: {
      generated_at: "2025-12-18",
      scoring_version: "v1.0-equal-weights",
      axes_used: [
        "technical_fit",
        "execution_style",
        "collaboration_style",
        "growth_learning_orientation",
        "product_user_impact_orientation",
        "ops_quality_responsibility",
      ],
      notes:
        "명시적 JSON 신호만 사용. 프론트엔드 신입 개발자와 DevOps 중심 회사 포지션 간 비교.",
    },
    inputs: {
      company_profile_ref: {
        profile_id: "toss_devops_company_profile",
        source_docs: [
          {
            doc_id: "job_posting",
            filename: "unknown",
          },
        ],
      },
      developer_profile_ref: {
        profile_id: "P2_LeeDaeun_frontend_entry",
        source_docs: [
          {
            doc_id: "portfolio",
            filename: "Portfolio – 이다은 (Lee Da-eun).pdf",
          },
          {
            doc_id: "resume",
            filename: "이력서 – 이다은 (Lee Da-eun).pdf",
          },
          {
            doc_id: "essay",
            filename: "자기소개서 – 이다은.pdf",
          },
        ],
      },
    },
    axis_alignments: {
      technical_fit: {
        status: "misaligned",
        axis_score: 30,
        summary: "프론트엔드 기술 스택과 DevOps 요구 사항 간 불일치",
        rationale: {
          company_signals: [
            "Kubernetes",
            "Docker",
            "Jenkins",
            "Istio",
            "Grafana",
          ],
          developer_signals: [
            "React",
            "Redux Toolkit",
            "TypeScript",
            "React Query",
          ],
          comparison_notes:
            "프론트엔드 신입 개발자와 DevOps 중심 회사 포지션 간 기술 스택 불일치",
        },
        evidence_refs: {
          company: [
            {
              path: "company_info_fields.technical_environment.stack",
              quote: "Jenkins, Git, Docker, Kubernetes + Istio",
            },
          ],
          developer: [
            {
              path: "user_info_fields.technical_capability.stack",
              quote: "React, Redux Toolkit, React Query를 활용한 프로젝트 경험",
            },
          ],
        },
        followup_questions: ["DevOps 또는 인프라 관련 학습 계획이 있는지"],
      },
      execution_style: {
        status: "partial",
        axis_score: 60,
        summary: "구조적 개선을 중시하는 실행 스타일이 부분적으로 일치",
        rationale: {
          company_signals: ["배포 과정 혁신", "장애 대응 메트릭 도출"],
          developer_signals: ["문제 인식 후 구조 재정의", "상태 관리 개선"],
          comparison_notes: "구조적 개선에 대한 공통점이 있으나 도메인이 다름",
        },
        evidence_refs: {
          company: [
            {
              path: "company_info_fields.execution_culture_signals.evidence",
              quote: "배포 과정을 혁신해요.",
            },
          ],
          developer: [
            {
              path: "scoring_axes.execution_style_user.evidence",
              quote:
                "어떤 상태가 전역으로 관리되어야 하는지 다시 정의했습니다.",
            },
          ],
        },
        followup_questions: [],
      },
      collaboration_style: {
        status: "partial",
        axis_score: 55,
        summary: "협업 경험이 있으나 규모와 복잡도가 다름",
        rationale: {
          company_signals: ["SRE/DevOps/SE 간 협업", "보안엔지니어 협업"],
          developer_signals: [
            "백엔드와 API 명세 기반 협업",
            "PR 기반 코드리뷰",
          ],
          comparison_notes: "협업 경험은 있으나 대규모 팀 협업 경험은 부족",
        },
        evidence_refs: {
          company: [
            {
              path: "company_info_fields.collaboration_culture_signals.evidence",
              quote: "보안엔지니어분들과 최대한 협업",
            },
          ],
          developer: [
            {
              path: "user_info_fields.collaboration_experience.evidence",
              quote: "백엔드 개발자와 API 명세를 기준으로 협업",
            },
          ],
        },
        followup_questions: [],
      },
      growth_learning_orientation: {
        status: "aligned",
        axis_score: 75,
        summary: "성장 지향적 마인드셋이 일치",
        rationale: {
          company_signals: ["실험-측정 기반 가설 검증"],
          developer_signals: ["빠른 성장 목표", "피드백과 시행착오 중시"],
          comparison_notes: "성장에 대한 열정과 학습 의지가 명확함",
        },
        evidence_refs: {
          company: [
            {
              path: "company_info_fields.growth_learning_culture_signals.evidence",
              quote: "작게 실험하고 측정하면서 가설들을 검증",
            },
          ],
          developer: [
            {
              path: "user_info_fields.growth_tendency.evidence",
              quote: "편한 환경보다는 실제로 손을 많이 써볼 수 있는 환경",
            },
          ],
        },
        followup_questions: [],
      },
      product_user_impact_orientation: {
        status: "unknown",
        axis_score: "unknown",
        summary: "제품/사용자 임팩트에 대한 명시적 비교 근거 부족",
        rationale: {
          company_signals: [],
          developer_signals: [],
          comparison_notes:
            "양측 모두 사용자 임팩트 지표가 구체적으로 제시되지 않음",
        },
        evidence_refs: {
          company: [],
          developer: [],
        },
        followup_questions: ["사용자 경험 개선 관련 경험이 있는지"],
      },
      ops_quality_responsibility: {
        status: "misaligned",
        axis_score: 25,
        summary: "운영 경험 부족으로 인한 불일치",
        rationale: {
          company_signals: [
            "root cause 분석",
            "구조적 개선 책임",
            "오픈소스 수정/기여",
          ],
          developer_signals: [],
          comparison_notes: "운영 및 장애 대응 경험이 없음",
        },
        evidence_refs: {
          company: [
            {
              path: "company_info_fields.ownership_expectation_signals.evidence",
              quote: "root cause 분석과 구조적 개선까지 책임지는 분",
            },
          ],
          developer: [],
        },
        followup_questions: ["운영 환경 경험이나 장애 대응 경험이 있는지"],
      },
    },
    overall: {
      match_score: 45,
      score_band: "medium",
      confidence: 0.65,
      scoring: {
        weights: {
          technical_fit: 1,
          execution_style: 1,
          collaboration_style: 1,
          growth_learning_orientation: 1,
          product_user_impact_orientation: 1,
          ops_quality_responsibility: 1,
        },
        excluded_axes: ["product_user_impact_orientation"],
        calculation_notes:
          "프론트엔드 신입 개발자와 DevOps 중심 회사 포지션 간 비교",
      },
      high_alignment_axes: ["growth_learning_orientation"],
      risk_or_mismatch_axes: ["technical_fit", "ops_quality_responsibility"],
      unknown_axes: ["product_user_impact_orientation"],
      overall_notes:
        "프론트엔드 신입 개발자와 DevOps 중심 회사 포지션 간 기술 스택 불일치",
    },
    created_at: "2025-12-18T07:02:36.718000",
    updated_at: "2025-12-18T07:02:36.718000",
  },
};
