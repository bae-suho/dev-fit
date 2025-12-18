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

    setTimeout(() => {
      navigate('/result');
    }, 1500);
  };

  return (
    <div className="bg-bg-secondary min-h-screen flex items-center justify-center relative overflow-hidden">
      <HomeBackground />

      <main className="w-full max-w-xl z-10 p-6">
        <header className="text-center mb-10">
          <Logo size="lg" />
          <p className="text-text-tertiary text-base mt-4 leading-relaxed">
            개발자 커리어, 이제는{' '}
            <span className="text-toss-blue font-semibold">FIT</span>으로 승부하세요.
            <br />
            AI가 공고와 이력서를 분석해 완벽한 매칭을 찾아드립니다.
          </p>
        </header>

        <div className="bg-white rounded-3xl p-8 toss-shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <UrlInput value={url} onChange={setUrl} />
            <FileUpload onFileSelect={setFile} />
            <SubmitButton isLoading={isLoading} />
          </form>
        </div>

        <p className="text-center text-text-quaternary text-xs mt-6 flex items-center justify-center gap-1">
          <Lock className="w-3 h-3" />
          업로드된 문서는 분석 후 즉시 폐기되며 저장되지 않습니다.
        </p>
      </main>
    </div>
  );
}
