# DevFit API 명세서

## Base URL

```
https://api.devfit.io/v1
```

---

## 분석 요청 API

### `POST /analyze`

채용공고 URL과 이력서를 분석하여 적합도 결과를 반환합니다.

### Request

**Content-Type:** `multipart/form-data`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string | Yes | 채용공고 URL |
| `resume` | file | Yes | 이력서 파일 (PDF, DOCX) |

**Example:**

```bash
curl -X POST https://api.devfit.io/v1/analyze \
  -F "url=https://wanted.co.kr/job/12345" \
  -F "resume=@resume.pdf"
```

### Response

**Status:** `200 OK`

---

## 응답 필드 상세 설명

### 최상위 필드

| 필드 | 타입 | UI 컴포넌트 | 설명 |
|------|------|-------------|------|
| `matchScore` | number (0-100) | MatchScoreBar | 전체 적합도 점수 |
| `matchLevel` | enum | MatchScoreBar | 적합도 등급 |
| `company` | CompanyProfile | ProfileCard (기업) | 기업 프로필 정보 |
| `user` | UserProfile | ProfileCard (사용자) | 사용자 프로필 정보 |
| `chartData` | ChartData | CultureChart | 레이더 차트 데이터 |
| `synergies` | Synergy[] | SynergyCard | 시너지 포인트 목록 |
| `gaps` | Gap[] | GapCard | 갭 분석 목록 |
| `technicalFit` | TechnicalFitItem[] | TechnicalFitCard | 기술 적합도 목록 |
| `keywords` | Keyword[] | KeywordCard | 매칭 키워드 목록 |
| `careerTimeline` | CareerStage[] | CareerTimeline | 커리어 타임라인 (미사용) |
| `interviewStrategies` | InterviewStrategy[] | InterviewStrategy | 면접 전략 목록 |

---

### `matchLevel` (enum)

적합도 등급을 나타냅니다.

| 값 | 점수 범위 | 설명 |
|----|-----------|------|
| `"Low Fit"` | 0-20 | 낮은 적합도 |
| `"Moderate Fit"` | 21-40 | 보통 적합도 |
| `"Good Fit"` | 41-60 | 좋은 적합도 |
| `"Great Fit"` | 61-80 | 높은 적합도 |
| `"Perfect Fit"` | 81-100 | 최고 적합도 |

---

### `company` (CompanyProfile)

대상 기업의 프로필 정보입니다. **ProfileCard (대상 기업)** 컴포넌트에 표시됩니다.

| 필드 | 타입 | UI 위치 | 설명 |
|------|------|---------|------|
| `name` | string | 카드 제목 | 기업명 |
| `industry` | string | 부제목 | 산업군 (예: Fintech, E-commerce) |
| `stage` | string | 부제목 | 투자 단계 (예: Seed, Series A/B/C) |
| `techStack` | string[] | "기술 스택" 섹션 | 기업이 사용하는 기술 스택 |
| `cultureDNA` | CultureDNA[] | "기업 문화" 섹션 | 기업 문화 특성 목록 |
| `summary` | string | 카드 하단 인용문 | 기업 특성 요약 (1-2문장) |

**Example:**

```json
{
  "name": "A Corp.",
  "industry": "Fintech",
  "stage": "Series B",
  "techStack": ["Python", "FastAPI", "AWS"],
  "cultureDNA": [
    { "icon": "Zap", "label": "빠른 실행력 (Speed)" },
    { "icon": "TrendingUp", "label": "성과 중심 (KPI)" }
  ],
  "summary": "기술적 완벽함보다는 비즈니스 임팩트를 최우선으로 하는 조직입니다."
}
```

---

### `user` (UserProfile)

사용자(지원자)의 프로필 정보입니다. **ProfileCard (내 프로필)** 컴포넌트에 표시됩니다.

| 필드 | 타입 | UI 위치 | 설명 |
|------|------|---------|------|
| `title` | string | 카드 제목 | 사용자 성향 타이틀 (예: Deep Diver, Fast Shipper) |
| `experience` | string | 부제목 | 직군 및 경력 (예: Backend Dev · 3 Years) |
| `coreSkills` | string[] | "핵심 역량" 섹션 | 핵심 기술 스킬 목록 |
| `workStyle` | WorkStyle[] | "업무 스타일" 섹션 | 업무 스타일 특성 목록 |
| `summary` | string | 카드 하단 인용문 | 사용자 특성 요약 (1-2문장) |

**Example:**

```json
{
  "title": "Deep Diver",
  "experience": "Backend Dev · 3 Years",
  "coreSkills": ["Python", "Django", "Docker"],
  "workStyle": [
    { "icon": "Shield", "label": "안정성 중시" },
    { "icon": "Microscope", "label": "원리 탐구 (Deep Dive)" }
  ],
  "summary": "빠른 구현보다는 견고한 아키텍처를 선호하는 엔지니어입니다."
}
```

---

### `cultureDNA` / `workStyle` 아이콘

`cultureDNA`와 `workStyle`에서 사용하는 아이콘 목록입니다. Lucide 아이콘을 사용합니다.

| icon 값 | 아이콘 | 의미 | 사용 예시 |
|---------|--------|------|-----------|
| `"Zap"` | ⚡ | 빠른 실행력, 속도 | 빠른 실행력 (Speed) |
| `"TrendingUp"` | 📈 | 성과/성장 중심 | 성과 중심 (KPI) |
| `"Shield"` | 🛡️ | 안정성 중시, 보안 | 안정성 중시 |
| `"Microscope"` | 🔬 | 깊이 있는 분석 | 원리 탐구 (Deep Dive) |

---

### `chartData` (ChartData)

레이더 차트 데이터입니다. **CultureChart** 컴포넌트에 표시됩니다.

| 필드 | 타입 | 설명 |
|------|------|------|
| `labels` | string[] | 차트 축 레이블 (5개) |
| `companyData` | number[] | 기업 데이터 (1-10, 보라색 영역) |
| `userData` | number[] | 사용자 데이터 (1-10, 청록색 영역) |

**Example:**

```json
{
  "labels": ["Growth", "Tech Stack", "WLB", "Team", "Compensation"],
  "companyData": [9, 8, 4, 8, 8],
  "userData": [8, 9, 7, 9, 7]
}
```

**차트 축 설명:**

| 축 | 설명 |
|----|------|
| Growth | 성장 가능성 |
| Tech Stack | 기술 스택 매력도 |
| WLB | 워라밸 (Work-Life Balance) |
| Team | 팀 문화/분위기 |
| Compensation | 보상/급여 |

---

### `synergies` (Synergy[])

기업-사용자 간 시너지 포인트입니다. **SynergyCard** 컴포넌트에 표시됩니다.

| 필드 | 타입 | UI 위치 | 설명 |
|------|------|---------|------|
| `title` | string | 카드 제목 | 시너지 항목명 |
| `matchPercent` | number (0-100) | 프로그레스 바 | 매칭 퍼센트 |
| `companyRequires` | string | "기업 요구" 라벨 | 기업이 요구하는 역량 |
| `myCapabilities` | string | "내 역량" 라벨 | 사용자가 보유한 역량 |
| `insight` | string | 하단 설명 | AI 인사이트 코멘트 |

**Example:**

```json
{
  "title": "Backend Tech Stack Fit",
  "matchPercent": 98,
  "companyRequires": "Python, FastAPI",
  "myCapabilities": "Python Expert, Django",
  "insight": "즉시 전력감입니다. Django 경험을 바탕으로 FastAPI 로의 전환 비용이 거의 없습니다."
}
```

---

### `gaps` (Gap[])

기업-사용자 간 갭 분석입니다. **GapCard** 컴포넌트에 표시됩니다.

| 필드 | 타입 | UI 위치 | 설명 |
|------|------|---------|------|
| `title` | string | 카드 제목 | 갭 항목명 |
| `level` | enum | 뱃지 | 갭 수준 (`"Moderate"` / `"Significant"`) |
| `companyPosition` | number (0-100) | 슬라이더 마커 | 기업의 성향 위치 |
| `myPosition` | number (0-100) | 슬라이더 마커 | 사용자의 성향 위치 |
| `strategy` | string | 하단 설명 | 갭 극복 전략 제안 |

**level enum:**

| 값 | 설명 |
|----|------|
| `"Moderate"` | 보통 수준의 갭 (극복 가능) |
| `"Significant"` | 큰 수준의 갭 (주의 필요) |

**Example:**

```json
{
  "title": "Dev Speed vs Stability",
  "level": "Moderate",
  "companyPosition": 20,
  "myPosition": 70,
  "strategy": "빠른 배포를 저해하지 않으면서 안정성을 챙기는 CI/CD 자동화 테스트 역량을 강조하세요."
}
```

---

### `technicalFit` (TechnicalFitItem[])

기술 스택별 적합도입니다. **TechnicalFitCard** 컴포넌트에 표시됩니다.

| 필드 | 타입 | UI 위치 | 설명 |
|------|------|---------|------|
| `skill` | string | 항목 라벨 | 기술 스킬명 |
| `percent` | number (0-100) | 프로그레스 바 | 적합도 퍼센트 |
| `needsImprovement` | boolean (optional) | 경고 표시 | 개선 필요 여부 |

**Example:**

```json
[
  { "skill": "Python / Backend", "percent": 95 },
  { "skill": "Cloud (AWS)", "percent": 80 },
  { "skill": "DevOps / CI/CD", "percent": 60, "needsImprovement": true }
]
```

---

### `keywords` (Keyword[])

매칭 키워드 태그입니다. **KeywordCard** 컴포넌트에 표시됩니다.

| 필드 | 타입 | UI 표시 | 설명 |
|------|------|---------|------|
| `tag` | string | 태그 텍스트 | 키워드 (# 포함) |
| `matched` | boolean | 색상 스타일 | 매칭 여부 (true: 강조, false: 흐림) |
| `strikethrough` | boolean (optional) | 취소선 | 취소선 표시 여부 |

**Example:**

```json
[
  { "tag": "#Growth", "matched": true },
  { "tag": "#Backend", "matched": true },
  { "tag": "#Python", "matched": true },
  { "tag": "#Full-Remote", "matched": false, "strikethrough": true },
  { "tag": "#Fintech", "matched": false }
]
```

---

### `careerTimeline` (CareerStage[])

커리어 타임라인 예측입니다. (현재 UI에서 미사용)

| 필드 | 타입 | 설명 |
|------|------|------|
| `year` | string | 연차 (예: "1Y", "3Y", "5Y", "10Y") |
| `badge` | string | 역할 뱃지 (예: "The Adapter", "Core Lead") |
| `title` | string | 단계 제목 |
| `description` | string | 상세 설명 |
| `color` | enum | 색상 테마 (`"cyan"`, `"brand"`, `"green"`, `"white"`) |

---

### `interviewStrategies` (InterviewStrategy[])

면접 전략 제안입니다. **InterviewStrategy** 컴포넌트에 표시됩니다.

| 필드 | 타입 | UI 위치 | 설명 |
|------|------|---------|------|
| `number` | number | 번호 뱃지 | 전략 순번 (1, 2, 3...) |
| `title` | string | 카드 제목 | 전략 제목 |
| `description` | string | 카드 본문 | 전략 상세 설명 |

**Example:**

```json
[
  {
    "number": 1,
    "title": "기술 부채 관리 전략",
    "description": "안정성을 중시하는 강점을 어필하되, 속도에 맞출 의지를 보여주세요."
  },
  {
    "number": 2,
    "title": "실패 포스트모텀",
    "description": "도전적인 문화를 확인하고, 실패를 시스템적으로 예방할 수 있음을 어필합니다."
  }
]
```

---

## 에러 응답

| Status | Code | Description |
|--------|------|-------------|
| `400` | `INVALID_URL` | 유효하지 않은 채용공고 URL |
| `400` | `INVALID_FILE` | 지원하지 않는 파일 형식 |
| `400` | `FILE_TOO_LARGE` | 파일 크기 초과 (max: 10MB) |
| `404` | `JOB_NOT_FOUND` | 채용공고를 찾을 수 없음 |
| `500` | `ANALYSIS_FAILED` | 분석 처리 실패 |

**Error Response Format:**

```json
{
  "error": {
    "code": "INVALID_URL",
    "message": "지원하지 않는 채용 플랫폼입니다."
  }
}
```

---

## 전체 응답 예시

```json
{
  "matchScore": 78,
  "matchLevel": "Good Fit",
  "company": {
    "name": "A Corp.",
    "industry": "Fintech",
    "stage": "Series B",
    "techStack": ["Python", "FastAPI", "AWS"],
    "cultureDNA": [
      { "icon": "Zap", "label": "빠른 실행력 (Speed)" },
      { "icon": "TrendingUp", "label": "성과 중심 (KPI)" }
    ],
    "summary": "기술적 완벽함보다는 비즈니스 임팩트를 최우선으로 하는 조직입니다."
  },
  "user": {
    "title": "Deep Diver",
    "experience": "Backend Dev · 3 Years",
    "coreSkills": ["Python", "Django", "Docker"],
    "workStyle": [
      { "icon": "Shield", "label": "안정성 중시" },
      { "icon": "Microscope", "label": "원리 탐구 (Deep Dive)" }
    ],
    "summary": "빠른 구현보다는 견고한 아키텍처를 선호하는 엔지니어입니다."
  },
  "chartData": {
    "labels": ["Growth", "Tech Stack", "WLB", "Team", "Compensation"],
    "companyData": [9, 8, 4, 8, 8],
    "userData": [8, 9, 7, 9, 7]
  },
  "synergies": [
    {
      "title": "Backend Tech Stack Fit",
      "matchPercent": 98,
      "companyRequires": "Python, FastAPI",
      "myCapabilities": "Python Expert, Django",
      "insight": "즉시 전력감입니다."
    }
  ],
  "gaps": [
    {
      "title": "Dev Speed vs Stability",
      "level": "Moderate",
      "companyPosition": 20,
      "myPosition": 70,
      "strategy": "CI/CD 자동화 테스트 역량을 강조하세요."
    }
  ],
  "technicalFit": [
    { "skill": "Python / Backend", "percent": 95 },
    { "skill": "Cloud (AWS)", "percent": 80 },
    { "skill": "DevOps / CI/CD", "percent": 60, "needsImprovement": true }
  ],
  "keywords": [
    { "tag": "#Growth", "matched": true },
    { "tag": "#Backend", "matched": true },
    { "tag": "#Full-Remote", "matched": false, "strikethrough": true }
  ],
  "careerTimeline": [
    {
      "year": "1Y",
      "badge": "The Adapter",
      "title": "적응과 조율",
      "description": "빠른 배포 주기에 적응합니다.",
      "color": "cyan"
    }
  ],
  "interviewStrategies": [
    {
      "number": 1,
      "title": "기술 부채 관리 전략",
      "description": "안정성을 중시하는 강점을 어필하세요."
    }
  ]
}
```
