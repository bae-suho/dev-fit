import { ArrowRight, Loader2 } from 'lucide-react';

interface SubmitButtonProps {
  isLoading: boolean;
}

export function SubmitButton({ isLoading }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-indigo-500/30 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 group disabled:opacity-75 disabled:cursor-not-allowed disabled:hover:translate-y-0"
    >
      {isLoading ? (
        <>
          <span>AI가 데이터를 분석 중입니다...</span>
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
