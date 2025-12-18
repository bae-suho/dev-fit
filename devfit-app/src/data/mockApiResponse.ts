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
    schema_version: "1.1",
    profile_meta: {
      company_name: "현대오토에버",
      industry_domain_label: "Enterprise IT",
      company_stage_label: "unknown",
      industry: "Automotive Software / IT Services",
      primary_domain: "Automotive Connectivity / OTA Systems",
      analyzed_scope: "company",
      analyzed_date: "2024-07-29",
      source_docs: [
        {
          doc_id: "job_posting",
          filename: "채용공고: [M&C] Backend Developer - OTA 차량 관제 시스템 개발 및 운영",
          url: "https://career.hyundai-autoever.com/ko/o/188578",
        },
        {
          doc_id: "official_site_people",
          filename: "People",
          url: "https://career.hyundai-autoever.com/ko/people",
        },
        {
          doc_id: "official_site_life",
          filename: "Life",
          url: "https://career.hyundai-autoever.com/ko/life",
        },
      ],
    },
    company_info_fields: {
      basic_profile: {
        summary:
          "현대오토에버는 자동차 커넥티비티 서비스 중 차량 편의 기능과 관련하여 다양한 서비스를 제공하는 조직입니다. 특히 OTA(Over-The-Air) 차량 관제 시스템을 개발 및 운영하며, 차량 내 제어기나 AVN의 펌웨어/SW를 무선 통신을 이용하여 차량 내 설치하고 이를 관제하는 서비스를 국내뿐 아니라 글로벌로 제공하고 있습니다.",
        evidence: [
          {
            doc_id: "job_posting",
            line_refs: ["합류하실 팀을 소개해요"],
            quote: "OTA플랫폼개발팀은 자동차 커넥티비티 서비스 중 차량 편의 기능과 관련하여 다양한 서비스를 제공하는 조직입니다.",
          },
        ],
      },
      culture_keywords_overview: {
        culture_keywords: [
          "활발한 커뮤니케이션",
          "지식 공유 문화",
          "스스로&함께 학습",
          "새로운 기법 도입",
          "개발 문화",
          "개개인의 역량 중시",
          "커리어 개발 장려",
          "수평적인 조직문화",
          "자유롭고 책임감",
          "꾸준한 성장",
        ],
        culture_summary_keywords: [
          "communication",
          "knowledge sharing",
          "continuous learning",
          "new tech adoption",
          "meritocracy",
          "career development",
          "horizontal structure",
          "autonomy",
          "responsibility",
          "growth",
        ],
        evidence: [
          {
            doc_id: "job_posting",
            line_refs: ["동료의 한 마디"],
            quote: "우리 팀은 활발한 커뮤니케이션 및 지식 공유 문화가 특징이에요.",
          },
        ],
      },
      technical_environment: {
        stack: {
          languages: ["Java", "Go Language"],
          frameworks: ["Spring Boot"],
          data: ["RDB (PostgreSQL)", "NoSQL (MongoDB)", "Redis"],
          infra_cloud: ["Cloud Native", "Docker", "Kubernetes"],
          ops_tools: ["Git", "Jenkins", "ArgoCD"],
        },
        ops_deploy_experience_required_or_mentioned: "yes",
        scale_traffic_platform_mentioned: "yes",
        evidence: [
          {
            doc_id: "job_posting",
            line_refs: ["이런 분과 함께 하고 싶어요"],
            quote: "Java, Spring Boot 기반 백엔드 개발 7년 이상 경험. RDB(PostgreSQL), NoSQL(MongoDB), Redis 활용 개발 경험. Git, Jenkins, ArgoCD 등 CI/CD Tool 사용 역량",
          },
        ],
      },
      role_and_hiring_signals: {
        hiring_summary: "OTA 차량 관제 시스템의 백엔드 개발자 (경력 7년 이상)를 채용합니다. 주요 업무는 OTA 관제 시스템 백엔드 개발, 신규 연동 시스템 API 설계 및 연동 테스트, 시스템 운영 및 관리입니다.",
        open_roles_mentioned: ["[M&C] Backend Developer - OTA 차량 관제 시스템 개발 및 운영"],
        employment_type: "full_time",
        location: "서울특별시 강남구 대치동",
        remote_hybrid_onsite: "onsite",
        required_experience: "경력 7년 이상",
        evidence: [
          {
            doc_id: "job_posting",
            line_refs: ["top section"],
            quote: "구분 Enterprise IT, 직군 Backend 개발, 경력사항 경력 7년 이상, 고용형태 정규직",
          },
        ],
      },
      execution_culture_signals: {
        summary: "안정성과 효율성을 중시하며, 클라우드 네이티브 기술 도입과 프로세스 개선을 통해 구조적인 접근을 지향합니다.",
        speed_vs_stability: "stability",
        prototype_vs_structure: "structure",
        business_impact_vs_tech_quality: "balanced",
        evidence: [
          {
            doc_id: "job_posting",
            line_refs: ["합류하실 팀을 소개해요"],
            quote: "우리 조직은 이러한 서비스를 안정적이고 효율적으로 제공하기 위해 클라우드 네이티브 기술 도입 및 서비스 구축/운영을 위한 각종 프로세스를 지속적으로 개발 및 개선하고 있습니다.",
          },
        ],
      },
      collaboration_culture_signals: {
        summary: "활발한 커뮤니케이션과 지식 공유를 강조하며, 격주 팀 공유회를 통해 업무 이슈 해결 방안, 신기술 적용 이점 등을 공유합니다. 수평적인 조직문화를 지향합니다.",
        code_review_culture: "not_mentioned",
        documentation_culture: "not_mentioned",
        cross_functional_collaboration: "mentioned",
        decision_making_process: "unknown",
        evidence: [
          {
            doc_id: "job_posting",
            line_refs: ["동료의 한 마디"],
            quote: "우리 팀은 활발한 커뮤니케이션 및 지식 공유 문화가 특징이에요. 격주로 팀 공유회를 통해 팀 공지 사항 및 다양한 정보들을 공유하고 있습니다.",
          },
        ],
      },
      ownership_expectation_signals: {
        summary:
          "개개인의 역량과 자기주도적인 커리어 개발을 중시하며, 시스템 개발, 설계, 운영 및 관리 전반에 걸친 주도적인 참여와 책임을 기대합니다.",
        problem_definition_expected: "yes",
        decision_making_expected: "yes",
        role_positioning: "owner",
        evidence: [
          {
            doc_id: "job_posting",
            line_refs: ["팀 리더"],
            quote: "OTA플랫폼개발팀은 개개인의 역량을 중시하는 조직입니다. 개인별로 경력 목표 달성을 위한 커리어 개발을 장려하여 역량을 향상하고 이를 통해 서비스 품질을 올릴 수 있도록 시너지를 내고 있습니다.",
          },
        ],
      },
      growth_learning_culture_signals: {
        summary:
          "다양한 방식으로 꾸준한 성장을 적극 지원합니다. 온보딩 프로그램, 맞춤형 직무 교육, 자기주도 학습 지원, 자격증 취득/갱신, 어학 교육비 지원 등이 마련되어 있습니다.",
        learning_support: "mentioned",
        new_tech_adoption: "high",
        feedback_culture: "mentioned",
        evidence: [
          {
            doc_id: "official_site_people",
            line_refs: ["WhatEVER"],
            quote: "다양한 방식으로 꾸준하게 성장해요. 온보딩 프로그램, 맞춤형 직무교육, 자기주도 학습 지원, 자격증 취득/갱신 지원, 어학 교육비 지원",
          },
        ],
      },
      work_environment_expectations: {
        summary: "서울 강남의 고층 건물에서 근무하는 온사이트 환경입니다. 선택적 근로시간제를 통해 유연한 근무를 지원하며, 풍부한 복리후생 제도를 운영합니다.",
        work_mode: "onsite",
        wlb_vs_immersion: "wlb",
        pace_intensity: "stable",
        oncall_or_shift: "not_mentioned",
        overtime_or_night_work: "mentioned",
        benefits_or_perks: [
          "선택적 근로시간제",
          "중식 제공",
          "심야 비즈니스 택시 지원",
          "온보딩 프로그램",
          "맞춤형 직무교육",
          "자기주도 학습 지원",
          "자격증 취득/갱신 지원",
          "어학 교육비 지원",
          "현대오토에버 어린이집",
          "종합검진 지원",
          "하계 휴가 (연차 외 추가 5일)",
          "휴양소 이용 지원",
          "차량구입지원금 (최대 30% 할인)",
        ],
        evidence: [
          {
            doc_id: "official_site_people",
            line_refs: ["WhenEVER"],
            quote: "선택적 근로시간제. 새벽형 인간, 오후형 인간 모두의 취향을 존중합니다.",
          },
        ],
      },
      verification_needed_areas: {
        missing_or_unmentioned: [
          "code review culture details",
          "explicit documentation culture",
          "detailed decision-making process",
        ],
        needs_followup_questions: [
          "교차 기능 협업의 구체적인 방식",
          "새로운 기술 도입의 측정/장려 방식",
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
        score: 3,
        summary:
          "회사는 클라우드 네이티브 기술 도입, 프로세스 개선을 통해 안정적이고 효율적인 서비스 제공을 목표로 합니다. Java, Spring Boot, Go, RDB, NoSQL, Redis, Docker, Kubernetes, CI/CD 툴 등 폭넓은 기술 스택을 활용합니다.",
        confidence: "high",
        evidence: [
          {
            doc_id: "job_posting",
            line_refs: ["이런 분과 함께 하고 싶어요"],
            quote: "Java, Spring Boot 기반 백엔드 개발 7년 이상 경험",
          },
        ],
        subsignals: {
          languages_frameworks_depth: 3,
          infra_cloud_exposure: 3,
          ops_deploy_monitoring_exposure: 3,
          scale_platform_exposure: 3,
        },
      },
      execution_style_company: {
        score: 3,
        summary: "회사는 안정성과 효율성을 최우선으로 하며, 클라우드 네이티브 기술 도입과 프로세스 개선을 통해 구조적이고 체계적인 접근을 지향합니다.",
        confidence: "high",
        evidence: [
          {
            doc_id: "job_posting",
            line_refs: ["합류하실 팀을 소개해요"],
            quote: "안정적이고 효율적으로 제공하기 위해 클라우드 네이티브 기술 도입",
          },
        ],
        subsignals: {
          speed_vs_stability: "stability",
          prototype_vs_structure: "structure",
          business_impact_vs_tech_quality: "balanced",
        },
      },
      collaboration_style_company: {
        score: 3,
        summary:
          "회사는 활발한 커뮤니케이션과 지식 공유 문화를 특징으로 하며, 격주 팀 공유회를 통해 업무 이슈 해결 방안 및 신기술 적용 사례 등을 공유합니다. 수평적인 조직문화를 지향합니다.",
        confidence: "medium",
        evidence: [
          {
            doc_id: "job_posting",
            line_refs: ["동료의 한 마디"],
            quote: "우리 팀은 활발한 커뮤니케이션 및 지식 공유 문화가 특징이에요.",
          },
        ],
        subsignals: {
          code_review: 0,
          documentation: 1,
          cross_functional: 3,
        },
      },
      ownership_company: {
        score: 3,
        summary:
          "회사는 개개인의 역량과 자기주도적인 커리어 개발을 중시하며, 시스템 개발, 설계, 운영 및 관리 전반에 걸친 주도적인 참여와 책임을 기대합니다.",
        confidence: "high",
        evidence: [
          {
            doc_id: "job_posting",
            line_refs: ["팀 리더"],
            quote: "OTA플랫폼개발팀은 개개인의 역량을 중시하는 조직입니다.",
          },
        ],
        subsignals: {
          problem_definition_involvement: 3,
          decision_making: 3,
          role_self_positioning: "owner",
        },
      },
      growth_orientation_company: {
        score: 4,
        summary: "회사는 온보딩 프로그램, 맞춤형 직무 교육, 자기주도 학습 지원, 자격증 취득/갱신, 어학 교육비 지원, 성장 Lab, 사내 공모제도 등 다양한 프로그램을 통해 꾸준한 성장을 적극 지원합니다.",
        confidence: "high",
        evidence: [
          {
            doc_id: "official_site_people",
            line_refs: ["WhatEVER"],
            quote: "다양한 방식으로 꾸준하게 성장해요.",
          },
        ],
        subsignals: {
          new_tech_adoption: 4,
          self_directed_learning: 4,
          feedback_loop: 2,
        },
      },
      work_expectation_company: {
        score: 3,
        summary: "회사는 서울 강남의 오피스에서 온사이트 근무 환경을 제공합니다. 선택적 근로시간제를 통해 유연한 근무를 지원하며, 풍부한 복리후생 제도를 운영합니다.",
        confidence: "high",
        evidence: [
          {
            doc_id: "official_site_people",
            line_refs: ["WhenEVER"],
            quote: "선택적 근로시간제. 새벽형 인간, 오후형 인간 모두의 취향을 존중합니다.",
          },
        ],
        subsignals: {
          pace_intensity_preference: 2,
          wlb_vs_immersion_preference: 4,
          responsibility_density_signals: 3,
        },
      },
    },
    extraction_quality: {
      unknown_policy_applied: "yes",
      notes:
        "채용공고 및 공식 사이트 정보를 기반으로 분석함. 코드리뷰 문화, 문서화 문화 등 일부 상세 정보는 명시되지 않음.",
    },
    created_at: "2025-12-18T06:59:55.921000",
    updated_at: "2025-12-18T06:59:55.921000",
  },
  candidate_analysis: {
    _id: "6943a6a40cd52905ca25692a",
    schema_version: "1.1",
    profile_meta: {
      candidate_name: "이다은 (Lee Da-eun)",
      primary_role: "frontend",
      target_role: "Front-end Engineer",
      seniority: "entry",
      years_experience: 0,
      source_docs: [
        {
          doc_id: "portfolio",
          filename: "Portfolio – P2 이다은 (Lee Da-eun).pdf",
        },
        {
          doc_id: "resume",
          filename: "이력서 – P2 이다은 (Lee Da-eun).pdf",
        },
        {
          doc_id: "essay",
          filename: "자기소개서 – P2 이다은.pdf",
        },
      ],
    },
    user_info_fields: {
      basic_profile: {
        summary:
          "비전공 문과 출신의 신입 프론트엔드 엔지니어로, UI 구현을 넘어 사용자 문제를 이해하고 견고한 구조로 해결하는 것을 중시합니다. 실무 경험과 피드백을 통한 지속적인 성장을 추구하며, 기술적 선택의 '이유'를 설명할 수 있는 개발자를 지향합니다.",
        evidence: [
          {
            doc_id: "portfolio",
            line_refs: ["P1, L5-6"],
            quote:
              "프론트엔드 개발자를 준비하며 가장 중요하게 생각한 것은 \"얼마나 많은 기술을 아는가\"보다 실제 사용자 화면에서 어떤 문제를 인식하고, 그것을 어떤 구조로 해결했는가였습니다.",
          },
          {
            doc_id: "portfolio",
            line_refs: ["P1, L15-16"],
            quote:
              "이 경험을 계기로 저는 편한 환경보다 실제 손을 많이 써보고, 피드백을 통해 수정할 수 있는 환경을 선호하게 되었습니다.",
          },
          {
            doc_id: "resume",
            line_refs: ["P1, L4-5"],
            quote:
              "비전공 문과 출신으로 프론트엔드 국비지원 부트캠프를 수료한 신입 프론트엔드 엔지니어입니다.",
          },
        ],
      },
      technical_capability: {
        stack: {
          languages: ["JavaScript (ES6+)", "TypeScript"],
          frameworks: ["React", "Redux Toolkit", "React Query"],
          data: [],
          infra_cloud: [],
          ops_tools: ["Git/GitHub", "Vite", "ESLint", "Prettier"],
        },
        ops_deploy_experience: "no",
        scale_traffic_platform_mentioned: "no",
        evidence: [
          {
            doc_id: "portfolio",
            line_refs: ["P1, L21-23"],
            quote:
              "JavaScript(ES6+) / TypeScript: 기본 문법 숙지에 그치지 않고, 컴포넌트 props 설계와 타입 안정성을 높이기 위한 용도로 TypeScript를 점진적으로 적용했습니다.",
          },
          {
            doc_id: "portfolio",
            line_refs: ["P1, L25-26"],
            quote:
              "React: 함수형 컴포넌트 기반 개발에 익숙하며, 상태 흐름과 컴포넌트 책임 분리에 집중해 구조를 설계합니다.",
          },
          {
            doc_id: "portfolio",
            line_refs: ["P1, L28-30"],
            quote:
              "Redux Toolkit / React Query: 전역 상태와 서버 상태의 성격이 다르다는 점을 프로젝트를 통해 체감했고, 각각의 목적에 맞게 도입·비교해 사용해 보았습니다.",
          },
        ],
      },
      project_behavior_data: {
        projects: [
          {
            name: "커뮤니티형 웹 서비스 (팀 프로젝트)",
            timeframe: "2024.03 ~ 2024.05",
            context_problem:
              "초기 빠른 UI 구현에 집중하다 보니 컴포넌트 간 의존성이 높아지고, 상태 흐름 파악이 어려워지며 불필요한 리렌더링과 중복 API 호출 문제 발생",
            responsibility_scope:
              "4인 팀에서 프론트엔드 개발 담당. 게시글, 댓글, 좋아요 기능 구현. 단순 CRUD를 넘어 프론트엔드의 역할 이해에 집중",
            technical_decisions: [
              "전역 vs 로컬 상태 관리 재정의",
              "컴포넌트 책임 분리",
              "Redux Toolkit으로 전역 게시글/사용자 상태 관리",
              "UI 상태는 로컬 상태로 분리",
              "공통 UI 컴포넌트 분리로 재사용성 향상",
              "React.memo로 불필요한 리렌더링 감소",
              "API 호출 시점 정리로 예측 가능한 데이터 흐름 구축",
            ],
            outcomes_metrics: [
              {
                metric: "재사용성",
                before: "unknown",
                after: "향상",
                notes: "공통 UI 컴포넌트 분리를 통해",
              },
              {
                metric: "불필요한 리렌더링",
                before: "unknown",
                after: "감소",
                notes: "React.memo 활용",
              },
              {
                metric: "데이터 흐름 예측 가능성",
                before: "unknown",
                after: "개선",
                notes: "API 호출 시점 명확화",
              },
            ],
            evidence: [
              {
                doc_id: "portfolio",
                line_refs: ["P2, L4-20"],
                quote:
                  "Redux Toolkit을 활용해 게시글 데이터와 사용자 상태를 전역으로 관리하고, UI 상태는 로컬 상태로 분리하는 구조를 선택했습니다. 공통 UI 컴포넌트를 분리하여 재사용성을 높였고 React.memo를 활용해 불필요한 리렌더링을 줄였습니다.",
              },
            ],
          },
          {
            name: "사용자 대시보드 웹 애플리케이션 (개인 프로젝트)",
            timeframe: "2024.06",
            context_problem:
              "팀 프로젝트 이후 서버 상태와 UI 상태를 보다 명확히 구분하고자 하는 문제의식에서 시작",
            responsibility_scope: "기획·디자인·프론트엔드 단독 진행",
            technical_decisions: [
              "React Query 도입으로 서버 상태 관리",
              "로딩·에러·성공 상태를 명확히 분리하여 사용자 관점에서 화면 설계",
              "사용자 인터랙션 흐름을 고려해 데이터 갱신 주기 분리로 체감 성능과 가독성 개선",
            ],
            outcomes_metrics: [
              {
                metric: "체감 성능",
                before: "unknown",
                after: "개선",
                notes: "사용자 인터랙션 기반 데이터 갱신 주기 조정",
              },
              {
                metric: "가독성",
                before: "unknown",
                after: "개선",
                notes: "상태 분리를 통해",
              },
            ],
            evidence: [
              {
                doc_id: "portfolio",
                line_refs: ["P3, L12-25"],
                quote:
                  "React Query를 도입해 서버 상태를 관리하고, 로딩·에러·성공 상태를 명확히 분리하여 사용자 관점에서 화면을 설계했습니다. 이 프로젝트를 통해 'React를 사용했다'가 아니라 왜 이런 상태 관리 방식을 선택했는지 설명할 수 있는 경험을 얻었습니다.",
              },
            ],
          },
        ],
      },
      collaboration_experience: {
        summary:
          "PR 기반 코드리뷰를 성장 기회로 활용하며, 백엔드 개발자와 API 명세 및 에러 처리 방식을 논의합니다. 코드 구조와 의도를 명확히 전달하는 능력을 중시하고, 기획자/디자이너와 기술적 제약 및 대안을 적극적으로 협의합니다.",
        code_review_participation: "yes",
        documentation_communication: "high",
        cross_functional_collaboration: "occasional",
        conflict_coordination_experience: "mentioned",
        evidence: [
          {
            doc_id: "portfolio",
            line_refs: ["P3, L4-6"],
            quote:
              "백엔드 개발자와 API 명세를 기준으로 협업하며, 에러 코드에 따른 UI 처리 방식을 함께 논의했습니다.",
          },
          {
            doc_id: "portfolio",
            line_refs: ["P3, L7-8"],
            quote:
              "PR 기반 코드리뷰를 통해 구조와 의도에 대한 질문을 받았고, 이를 반영하며 코드 설명 능력의 중요성을 체감했습니다.",
          },
          {
            doc_id: "portfolio",
            line_refs: ["P4, L4-7"],
            quote:
              "팀 프로젝트에서 코드리뷰를 '평가'가 아닌 성장을 위한 피드백 과정으로 인식하게 되었으며, 지적받은 부분을 그대로 수정하는 데서 끝나지 않고, 구조 자체를 다시 고민하려 노력했습니다.",
          },
          {
            doc_id: "essay",
            line_refs: ["P2, L14-17"],
            quote:
              "팀 프로젝트에서 기획자와 디자이너의 요구사항을 그대로 구현하는 데서 그치지 않고, 구현 과정에서 발생할 수 있는 제약이나 대안을 함께 이야기하려 노력했습니다.",
          },
        ],
      },
      growth_tendency: {
        summary:
          "비전공 배경을 빠르게 따라잡으려는 강한 동기로 실무 경험과 피드백을 적극 추구합니다. 코드리뷰를 성장 기회로 삼아 구조 자체를 재검토하고, 트렌드보다 '문제 해결'을 위한 기술 학습을 지향합니다.",
        learning_mode: "self_directed",
        new_tech_adoption: "medium",
        feedback_receptiveness: "high",
        evidence: [
          {
            doc_id: "portfolio",
            line_refs: ["P1, L11-14"],
            quote:
              "특히 부트캠프 후반 팀 프로젝트를 통해, 단순히 주어진 작업을 빠르게 처리하는 사람보다 설계 단계부터 참여하고, 시행착오를 겪으며 구조를 개선한 사람이 훨씬 빠르게 성장한다는 점을 체감했습니다.",
          },
          {
            doc_id: "portfolio",
            line_refs: ["P1, L15-16"],
            quote:
              "이 경험을 계기로 저는 편한 환경보다 실제 손을 많이 써보고, 피드백을 통해 수정할 수 있는 환경을 선호하게 되었습니다.",
          },
          {
            doc_id: "essay",
            line_refs: ["P1, L4-6"],
            quote:
              "하지만 그 부담은 곧 '어떻게 하면 실무에서 빠르게 따라잡을 수 있을까'라는 질문으로 바뀌었고, 저를 계속해서 움직이게 만드는 동력이 되었습니다.",
          },
          {
            doc_id: "essay",
            line_refs: ["P2, L10-12"],
            quote:
              "이후 기술을 학습할 때도 '트렌드이기 때문'이 아니라, 실제로 해결하고 싶은 문제가 있는지를 먼저 고민하게 되었습니다.",
          },
        ],
      },
      work_environment_signals: {
        summary:
          "연봉이나 복지보다 실무 비중이 높고, 코드리뷰와 피드백이 형식적이지 않으며, 성장 과정의 시행착오를 감내할 수 있는 환경을 선호합니다. 기능 하나를 처음부터 끝까지 책임지는 end-to-end 오너십을 추구합니다.",
        work_mode_preference: "unknown",
        work_life_balance_vs_immersion: "immersion",
        pace_intensity_preference: "high_intensity",
        evidence: [
          {
            doc_id: "portfolio",
            line_refs: ["P1, L15-16"],
            quote:
              "이 경험을 계기로 저는 편한 환경보다 실제 손을 많이 써보고, 피드백을 통해 수정할 수 있는 환경을 선호하게 되었습니다.",
          },
          {
            doc_id: "portfolio",
            line_refs: ["P4, L17-18"],
            quote:
              "혼자서도 프론트엔드 기능 하나를 처음부터 끝까지 책임지고",
          },
          {
            doc_id: "resume",
            line_refs: ["P1, L6-8"],
            quote:
              "연봉이나 복지보다 입사 후 1~2년 안에 실무 역량이 확실히 성장할 수 있는 환경을 중요하게 생각합니다.",
          },
          {
            doc_id: "essay",
            line_refs: ["P2, L28-32"],
            quote:
              "연봉이나 복지보다, 실제 프론트엔드 실무 비중이 높고, 코드리뷰와 피드백이 형식적으로 이루어지지 않으며, 성장 과정에서의 시행착오를 감내할 수 있는 환경을 선호합니다.",
          },
          {
            doc_id: "essay",
            line_refs: ["P2, L33-34"],
            quote:
              "힘들 수는 있어도, 이 회사에서 분명히 성장하고 있다는 확신을 가질 수 있다면 기꺼이 도전하고 싶습니다.",
          },
        ],
      },
      verification_needed_areas: {
        missing_or_unmentioned: [
          "배포 경험",
          "클라우드/인프라 경험",
          "성능 개선의 구체적 수치 (리렌더링 감소율, API 호출 감소율 등)",
          "테스트 경험 (단위, 통합, E2E)",
        ],
        needs_followup_questions: [
          "프로젝트에서 기술 부채를 어떻게 관리하시나요?",
          "팀 프로젝트에서 갈등이나 의견 충돌이 있었을 때 어떻게 해결하셨나요?",
          "개인 프로젝트에서 데이터 갱신 주기 최적화의 구체적인 방법과 효과는?",
          "선호하는 팀 규모와 협업 구조는?",
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
        score: 3,
        summary:
          "React, Redux Toolkit, React Query, TypeScript 등 핵심 프론트엔드 기술에 대한 탄탄한 이해를 보여줍니다. 상태 관리, 컴포넌트 재사용성, 불필요한 리렌더링 감소, 예측 가능한 데이터 흐름 등 일반적인 프론트엔드 과제를 해결하기 위해 이러한 도구들을 적용했습니다.",
        confidence: "high",
        evidence: [
          {
            doc_id: "portfolio",
            line_refs: ["P1, L21-23"],
            quote:
              "JavaScript(ES6+) / TypeScript: 컴포넌트 props 설계와 타입 안정성을 높이기 위한 용도로 TypeScript를 점진적으로 적용했습니다.",
          },
          {
            doc_id: "portfolio",
            line_refs: ["P2, L16-20"],
            quote:
              "Redux Toolkit을 활용해 게시글 데이터와 사용자 상태를 전역으로 관리하고, UI 상태는 로컬 상태로 분리하는 구조를 선택했습니다. React.memo를 활용해 불필요한 리렌더링을 줄였습니다.",
          },
        ],
        subsignals: {
          languages_frameworks_depth: 3,
          infra_cloud_exposure: 0,
          ops_deploy_monitoring_exposure: 0,
          scale_platform_exposure: 0,
        },
      },
      execution_style_user: {
        score: 3,
        summary:
          "빠르고 무계획적인 구현보다 구조적 무결성, 명확한 컴포넌트 책임, 예측 가능한 데이터 흐름을 우선시합니다. 성능 문제(불필요한 리렌더링, 중복 API 호출)를 식별하고 해결하며, 데이터 페칭 전략의 반복적 개선을 통해 체감 성능을 향상시킵니다.",
        confidence: "high",
        evidence: [
          {
            doc_id: "portfolio",
            line_refs: ["P1, L5-6"],
            quote:
              "'얼마나 많은 기술을 아는가'보다 실제 사용자 화면에서 어떤 문제를 인식하고, 그것을 어떤 구조로 해결했는가였습니다.",
          },
          {
            doc_id: "portfolio",
            line_refs: ["P2, L18-20"],
            quote:
              "React.memo를 활용해 불필요한 리렌더링을 줄였습니다. API 호출 시점을 명확히 정리하여, 사용자 행동에 따른 데이터 흐름이 예측 가능하도록 개선했습니다.",
          },
          {
            doc_id: "portfolio",
            line_refs: ["P3, L20-22"],
            quote:
              "초기에는 모든 데이터를 한 번에 불러오는 구조였으나, 사용자 인터랙션 흐름을 고려해 데이터 갱신 주기를 분리하면서 체감 성능과 가독성을 함께 개선했습니다.",
          },
        ],
        subsignals: {
          speed_vs_stability: "balanced",
          prototype_vs_structure: "structure",
          business_impact_vs_tech_quality: "tech_quality",
        },
      },
      collaboration_style_user: {
        score: 3,
        summary:
          "PR 기반 코드리뷰에 적극 참여하며, 이를 단순 평가가 아닌 성장 기회로 봅니다. 백엔드 개발자와 API 명세 및 에러 처리를 협업하고, 기술적 의도 전달의 중요성을 이해하며, PM/디자이너와 제약 및 대안을 논의하는 교차 기능 협업을 수행합니다.",
        confidence: "high",
        evidence: [
          {
            doc_id: "portfolio",
            line_refs: ["P3, L4-6"],
            quote:
              "백엔드 개발자와 API 명세를 기준으로 협업하며, 에러 코드에 따른 UI 처리 방식을 함께 논의했습니다.",
          },
          {
            doc_id: "portfolio",
            line_refs: ["P4, L4-7"],
            quote:
              "팀 프로젝트에서 코드리뷰를 '평가'가 아닌 성장을 위한 피드백 과정으로 인식하게 되었으며, 지적받은 부분을 그대로 수정하는 데서 끝나지 않고, 구조 자체를 다시 고민하려 노력했습니다.",
          },
        ],
        subsignals: {
          code_review: 3,
          documentation: 2,
          cross_functional: 2,
        },
      },
      ownership_user: {
        score: 3,
        summary:
          "설계 단계부터 적극 참여하고, 문제 범위를 정의하며, 기능의 전체 라이프사이클(기획, 디자인, 프론트엔드 구현)을 책임지는 강한 오너십을 보여줍니다. 어떤 기술을 사용했는지가 아니라 '왜' 그런 아키텍처 결정을 했는지 설명할 수 있는 개발자를 지향합니다.",
        confidence: "high",
        evidence: [
          {
            doc_id: "portfolio",
            line_refs: ["P3, L13-14"],
            quote: "역할: 기획·디자인·프론트엔드 단독 진행",
          },
          {
            doc_id: "portfolio",
            line_refs: ["P3, L24-25"],
            quote:
              "이 프로젝트를 통해 'React를 사용했다'가 아니라 왜 이런 상태 관리 방식을 선택했는지 설명할 수 있는 경험을 얻었습니다.",
          },
          {
            doc_id: "portfolio",
            line_refs: ["P4, L17-18"],
            quote:
              "혼자서도 프론트엔드 기능 하나를 처음부터 끝까지 책임지고",
          },
        ],
        subsignals: {
          problem_definition_involvement: 3,
          decision_making: 3,
          role_self_positioning: "owner",
        },
      },
      growth_orientation_user: {
        score: 4,
        summary:
          "비전공 배경에서 빠르게 따라잡으려는 강한 동기로 매우 높은 성장 지향성을 보여줍니다. 실무 경험과 피드백을 적극적으로 추구하며, 이를 통해 근본적인 구조를 재검토합니다. 트렌드보다 '문제 해결'을 위한 기술 학습을 우선시합니다.",
        confidence: "high",
        evidence: [
          {
            doc_id: "portfolio",
            line_refs: ["P1, L15-16"],
            quote:
              "이 경험을 계기로 저는 편한 환경보다 실제 손을 많이 써보고, 피드백을 통해 수정할 수 있는 환경을 선호하게 되었습니다.",
          },
          {
            doc_id: "essay",
            line_refs: ["P1, L4-6"],
            quote:
              "하지만 그 부담은 곧 '어떻게 하면 실무에서 빠르게 따라잡을 수 있을까'라는 질문으로 바뀌었고, 저를 계속해서 움직이게 만드는 동력이 되었습니다.",
          },
          {
            doc_id: "essay",
            line_refs: ["P2, L10-12"],
            quote:
              "이후 기술을 학습할 때도 '트렌드이기 때문'이 아니라, 실제로 해결하고 싶은 문제가 있는지를 먼저 고민하게 되었습니다.",
          },
        ],
        subsignals: {
          new_tech_adoption: 3,
          self_directed_learning: 4,
          feedback_loop: 4,
        },
      },
      work_expectation_user: {
        score: 4,
        summary:
          "높은 실무 비중, 형식적이지 않은 코드리뷰, 시행착오를 감내하는 환경에서 빠르고 진정한 성장을 추구합니다. 보상이나 복지보다 실무 경험과 학습 집약적인 환경을 우선시하며, 도전적인 환경을 기꺼이 받아들입니다. end-to-end 기능 오너십을 목표로 합니다.",
        confidence: "high",
        evidence: [
          {
            doc_id: "resume",
            line_refs: ["P1, L6-8"],
            quote:
              "연봉이나 복지보다 입사 후 1~2년 안에 실무 역량이 확실히 성장할 수 있는 환경을 중요하게 생각합니다.",
          },
          {
            doc_id: "essay",
            line_refs: ["P2, L28-32"],
            quote:
              "연봉이나 복지보다, 실제 프론트엔드 실무 비중이 높고, 코드리뷰와 피드백이 형식적으로 이루어지지 않으며, 성장 과정에서의 시행착오를 감내할 수 있는 환경을 선호합니다.",
          },
          {
            doc_id: "essay",
            line_refs: ["P2, L33-34"],
            quote:
              "힘들 수는 있어도, 이 회사에서 분명히 성장하고 있다는 확신을 가질 수 있다면 기꺼이 도전하고 싶습니다.",
          },
        ],
        subsignals: {
          pace_intensity_preference: 3,
          wlb_vs_immersion_preference: 4,
          responsibility_density_signals: 3,
        },
      },
    },
    extraction_quality: {
      unknown_policy_applied: "yes",
      notes:
        "배포, 인프라, 트래픽 규모 관련 명시적 정보는 제공되지 않아 unknown 처리함. 성능 개선의 구체적 수치도 명시되지 않음.",
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
