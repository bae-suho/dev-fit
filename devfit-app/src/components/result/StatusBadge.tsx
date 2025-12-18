import { Check, AlertCircle } from "lucide-react";

interface StatusBadgeProps {
  status: "analyzing" | "complete" | "error";
  percent?: number;
}

export function StatusBadge({ status, percent = 0 }: StatusBadgeProps) {
  if (status === "complete") {
    return (
      <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-4 bg-toss-blue-light border border-toss-blue/20">
        <Check className="w-4 h-4 text-toss-blue" />
        <span className="text-toss-blue font-medium text-sm">분석 완료</span>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-4 bg-red-50 border border-red-200">
        <AlertCircle className="w-4 h-4 text-red-500" />
        <span className="text-red-500 font-medium text-sm">분석 실패</span>
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8 transition-all duration-500 bg-white toss-shadow">
      <span className="w-2 h-2 rounded-full animate-pulse bg-toss-green" />
      <span className="text-sm text-text-secondary">분석 중... {percent}%</span>
    </div>
  );
}
