import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';
import { HomeBackground, Logo } from '@/components/common';
import { UrlInput, FileUpload, SubmitButton } from '@/components/home';
import { useAnalysis } from '@/context/AnalysisContext';

export function HomePage() {
  const navigate = useNavigate();
  const { setAnalysisData, setIsAnalyzing } = useAnalysis();
  const [url, setUrl] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setIsAnalyzing(true);
    setAnalysisData({ url, file });

    // 시뮬레이션 딜레이
    setTimeout(() => {
      navigate('/result');
    }, 1500);
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen flex items-center justify-center relative overflow-hidden">
      <HomeBackground />

      <main className="w-full max-w-2xl z-10 p-6">
        <header className="text-center mb-10">
          <Logo size="lg" />
          <p className="text-slate-400 text-lg mt-4">
            개발자 커리어, 이제는{' '}
            <span className="text-white font-semibold">FIT</span>으로 승부하세요.
            <br />
            AI가 공고와 이력서를 분석해 완벽한 매칭을 찾아드립니다.
          </p>
        </header>

        <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-3xl p-8 shadow-2xl relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 rounded-t-3xl" />

          <form onSubmit={handleSubmit} className="space-y-8">
            <UrlInput value={url} onChange={setUrl} />
            <FileUpload onFileSelect={setFile} />
            <SubmitButton isLoading={isLoading} />
          </form>
        </div>

        <p className="text-center text-slate-600 text-xs mt-6 flex items-center justify-center gap-1">
          <Lock className="w-3 h-3" />
          업로드된 문서는 분석 후 즉시 폐기되며 저장되지 않습니다.
        </p>
      </main>
    </div>
  );
}
