import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock } from "lucide-react";
import { HomeBackground, Logo } from "@/components/common";
import { UrlInput, FileUpload, SubmitButton } from "@/components/home";
import { useAnalysis } from "@/context/AnalysisContext";
import type { FileMetadata } from "@/types";

const API_BASE_URL = import.meta.env.VITE_API_URL || "";

export function HomePage() {
  const navigate = useNavigate();
  const { setAnalysisData, setIsAnalyzing, setResultKey } = useAnalysis();
  const [url, setUrl] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    setIsAnalyzing(true);
    setAnalysisData({ url, files });

    // 백엔드 API가 설정된 경우 실제 호출
    if (API_BASE_URL) {
      try {
        // 1. 파일 메타데이터 생성
        const fileMetadata: FileMetadata[] = files.map((f) => ({
          file_name: f.name,
          content_type: f.type || "application/pdf",
        }));

        // 2. presigned URL 요청
        const uploadResponse = await fetch(
          `${API_BASE_URL}/api/analyze/upload`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ jd_url: url, files: fileMetadata }),
          }
        );

        if (!uploadResponse.ok) {
          throw new Error("업로드 요청 실패");
        }

        const uploadData = await uploadResponse.json();
        console.log("API 응답:", uploadData); // 디버그용

        const { result_key, presigned_urls } = uploadData;

        // 3. S3에 파일 업로드 (upload_url 또는 presigned_url 필드 지원)
        await Promise.all(
          presigned_urls.map(
            (
              presigned: { upload_url?: string; presigned_url?: string },
              i: number
            ) => {
              const uploadUrl = presigned.upload_url || presigned.presigned_url;
              console.log(`파일 ${i + 1} 업로드 URL:`, uploadUrl); // 디버그용
              return fetch(uploadUrl!, {
                method: "PUT",
                body: files[i],
                headers: { "Content-Type": files[i].type || "application/pdf" },
              });
            }
          )
        );

        // 4. result_key 저장 후 결과 페이지로 이동
        setResultKey(result_key);
        navigate("/result");
      } catch (err) {
        console.error("API 호출 오류:", err);
        setError(
          err instanceof Error ? err.message : "업로드 중 오류가 발생했습니다"
        );
        setIsAnalyzing(false);
      } finally {
        setIsLoading(false);
      }
    } else {
      // 백엔드 미연동 시 mockResult 사용 (개발용)
      setTimeout(() => {
        navigate("/result");
      }, 1500);
    }
  };

  return (
    <div className="bg-bg-secondary min-h-screen flex items-center justify-center relative overflow-hidden">
      <HomeBackground />

      <main className="w-full max-w-xl z-10 p-6">
        <header className="text-center mb-10">
          <Logo size="lg" />
          <p className="text-text-tertiary text-base mt-4 leading-relaxed">
            지원하기 전,{" "}
            <span className="text-toss-blue font-semibold">DevFit</span>으로
            먼저 맞춰보세요.
            <br />
            AI가 공고와 이력서를 분석해 컬쳐핏 적합도를 알려드립니다.
          </p>
        </header>

        <div className="bg-white rounded-3xl p-8 toss-shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <UrlInput value={url} onChange={setUrl} />
            <FileUpload onFilesSelect={setFiles} />

            {error && (
              <div className="p-3 bg-toss-red-light rounded-xl text-toss-red text-sm">
                {error}
              </div>
            )}

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
