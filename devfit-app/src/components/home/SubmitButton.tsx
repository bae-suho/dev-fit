import { ArrowRight, Loader2 } from 'lucide-react';

interface SubmitButtonProps {
  isLoading: boolean;
}

export function SubmitButton({ isLoading }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className="w-full bg-toss-blue hover:bg-toss-blue-dark text-white font-semibold py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 group disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.98]"
    >
      {isLoading ? (
        <>
          <span>AI가 분석 중입니다...</span>
          <Loader2 className="w-5 h-5 animate-spin" />
        </>
      ) : (
        <>
          <span>AI 컬쳐핏 분석 시작하기</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </>
      )}
    </button>
  );
}
