interface SkeletonProps {
  className?: string;
  variant?: "text" | "circular" | "rectangular" | "rounded";
  width?: string | number;
  height?: string | number;
}

export function Skeleton({
  className = "",
  variant = "text",
  width,
  height,
}: SkeletonProps) {
  const baseClasses = "animate-shimmer bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 bg-[length:200%_100%]";

  const variantClasses = {
    text: "rounded-md",
    circular: "rounded-full",
    rectangular: "",
    rounded: "rounded-xl",
  };

  const style: React.CSSProperties = {
    width: width,
    height: height,
  };

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={style}
    />
  );
}

// 프로필 카드 스켈레톤
export function ProfileCardSkeleton({ type }: { type: "company" | "user" }) {
  const isCompany = type === "company";

  return (
    <div className="bg-white rounded-2xl p-5 relative overflow-hidden flex flex-col toss-shadow h-full">
      {/* 상단 프로그레스 바 - 움직이는 애니메이션 */}
      <div
        className="absolute top-0 left-0 h-1 animate-progress rounded-t-2xl"
        style={{
          background: isCompany
            ? 'linear-gradient(to right, #3182F6, #5BA0F8)'
            : 'linear-gradient(to right, #3CD4A0, #6EE7B7)'
        }}
      />

      {/* 헤더 */}
      <div className="flex items-center gap-2.5 mb-4">
        <Skeleton variant="circular" width={20} height={20} />
        <Skeleton width={80} height={20} />
      </div>

      {/* 콘텐츠 */}
      <div className="flex flex-col gap-4 flex-1">
        {/* 이름/타이틀 */}
        <div>
          <Skeleton width="60%" height={28} className="mb-2" />
          <Skeleton variant="rounded" width={80} height={24} />
        </div>

        {/* 첫 번째 박스 */}
        <div className="p-3 rounded-xl bg-bg-secondary">
          <Skeleton width={60} height={12} className="mb-3" />
          <div className="flex flex-wrap gap-1.5">
            <Skeleton variant="rounded" width={60} height={28} />
            <Skeleton variant="rounded" width={80} height={28} />
            <Skeleton variant="rounded" width={50} height={28} />
            <Skeleton variant="rounded" width={70} height={28} />
          </div>
        </div>

        {/* 두 번째 박스 */}
        <div className="p-3 rounded-xl bg-bg-secondary">
          <Skeleton width={60} height={12} className="mb-3" />
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Skeleton variant="circular" width={14} height={14} />
              <Skeleton width="70%" height={16} />
            </div>
            <div className="flex items-center gap-2">
              <Skeleton variant="circular" width={14} height={14} />
              <Skeleton width="60%" height={16} />
            </div>
          </div>
        </div>

        {/* 하단 요약 */}
        <div className="mt-auto pt-3 border-t border-border-light">
          <Skeleton width="100%" height={14} className="mb-1" />
          <Skeleton width="80%" height={14} />
        </div>
      </div>
    </div>
  );
}

// 차트 스켈레톤 - 동적 애니메이션
export function ChartSkeleton() {
  return (
    <div className="w-full h-full relative z-10 p-5 bg-white rounded-2xl toss-shadow flex flex-col overflow-hidden">
      {/* 상단 프로그레스 바 - 움직이는 애니메이션 */}
      <div
        className="absolute top-0 left-0 h-1 animate-progress rounded-t-2xl"
        style={{ background: 'linear-gradient(to right, #3182F6, #3CD4A0)' }}
      />

      {/* 헤더 */}
      <div className="flex items-center gap-2.5 mb-3">
        <Skeleton variant="circular" width={20} height={20} />
        <Skeleton width={100} height={20} />
      </div>

      {/* 레이더 차트 스켈레톤 - 회전 + 펄스 애니메이션 */}
      <div className="flex-1 flex items-center justify-center min-h-0">
        <div className="relative w-48 h-48 animate-radar-spin">
          {/* 육각형 형태 - 각각 다른 펄스 타이밍 */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-40 h-40 rounded-full border-2 border-toss-blue/30 animate-radar-pulse"
              style={{ animationDelay: '0ms' }}
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-28 h-28 rounded-full border-2 border-toss-green/30 animate-radar-pulse"
              style={{ animationDelay: '300ms' }}
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-16 h-16 rounded-full border-2 border-toss-blue/30 animate-radar-pulse"
              style={{ animationDelay: '600ms' }}
            />
          </div>

          {/* 데이터 포인트들 - 깜빡이는 효과 */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2">
            <div className="w-3 h-3 rounded-full bg-toss-blue animate-data-pulse" style={{ animationDelay: '0ms' }} />
          </div>
          <div className="absolute top-8 right-4">
            <div className="w-3 h-3 rounded-full bg-toss-green animate-data-pulse" style={{ animationDelay: '200ms' }} />
          </div>
          <div className="absolute bottom-8 right-4">
            <div className="w-3 h-3 rounded-full bg-toss-blue animate-data-pulse" style={{ animationDelay: '400ms' }} />
          </div>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
            <div className="w-3 h-3 rounded-full bg-toss-green animate-data-pulse" style={{ animationDelay: '600ms' }} />
          </div>
          <div className="absolute bottom-8 left-4">
            <div className="w-3 h-3 rounded-full bg-toss-blue animate-data-pulse" style={{ animationDelay: '800ms' }} />
          </div>
          <div className="absolute top-8 left-4">
            <div className="w-3 h-3 rounded-full bg-toss-green animate-data-pulse" style={{ animationDelay: '1000ms' }} />
          </div>

          {/* 중앙 점 */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse" />
          </div>
        </div>
      </div>

      {/* 범례 */}
      <div className="flex justify-center gap-6 mt-2">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-toss-blue animate-pulse" />
          <span className="text-xs text-text-quaternary">기업</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-toss-green animate-pulse" />
          <span className="text-xs text-text-quaternary">나</span>
        </div>
      </div>
    </div>
  );
}

// 매치 스코어 바 스켈레톤 - 게이지 움직임
export function MatchScoreBarSkeleton() {
  return (
    <div className="relative py-4">
      <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-3 text-center">
        분석 결과 리포트
      </h2>
      <p className="text-text-tertiary text-sm mb-8 text-center">
        AI가 분석한 나와 기업의 컬쳐핏 매칭 점수입니다
      </p>

      {/* Gauge Bar - 움직이는 게이지 */}
      <div className="relative h-10 w-full p-1 rounded-xl bg-white toss-shadow">
        <div className="absolute inset-1 rounded-lg bg-border-light" />

        {/* 움직이는 게이지 */}
        <div
          className="absolute inset-1 rounded-lg overflow-hidden animate-gauge"
        >
          <div
            className="h-full rounded-lg"
            style={{
              width: '100vw',
              background: 'linear-gradient(to right, #1B64DA, #3182F6, #5BA0F8, #8BBFFA, #3CD4A0)',
            }}
          />
        </div>

        {/* 칸 구분선 */}
        <div className="absolute inset-0 flex justify-evenly pointer-events-none p-1">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-1.5 h-full rounded-full"
              style={{ background: "#F4F4F4" }}
            />
          ))}
        </div>
      </div>

      {/* Labels - 순차적 하이라이트 */}
      <div className="flex justify-between mt-3 text-xs px-1">
        {[1, 2, 3, 4, 5].map((step) => (
          <span
            key={step}
            className="flex-1 text-center text-text-quaternary animate-pulse"
            style={{ animationDelay: `${step * 200}ms` }}
          >
            {step}단계
          </span>
        ))}
      </div>
    </div>
  );
}
