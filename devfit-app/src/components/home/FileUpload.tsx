import { useState, useRef } from 'react';
import { Upload, CheckCircle } from 'lucide-react';

interface FileUploadProps {
  onFileSelect: (file: File | null) => void;
}

export function FileUpload({ onFileSelect }: FileUploadProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
    onFileSelect(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0] || null;
    if (file) {
      setSelectedFile(file);
      onFileSelect(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-text-primary ml-1">
        이력서 & 포트폴리오
      </label>
      <div
        className={`w-full h-40 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all relative overflow-hidden ${
          isDragging
            ? 'border-toss-blue bg-toss-blue-light'
            : selectedFile
            ? 'border-toss-green bg-toss-green-light'
            : 'border-border-default bg-bg-secondary hover:border-toss-blue hover:bg-toss-blue-light'
        }`}
        onClick={() => inputRef.current?.click()}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          accept=".pdf,.docx,.doc"
          onChange={handleFileChange}
        />

        {!selectedFile ? (
          <div className="text-center p-6 transition-transform">
            <div className="w-12 h-12 rounded-full bg-toss-blue-light flex items-center justify-center mx-auto mb-3">
              <Upload className="w-6 h-6 text-toss-blue" />
            </div>
            <p className="text-text-secondary font-medium text-sm">
              클릭하거나 파일을 드래그하세요
            </p>
            <p className="text-text-quaternary text-xs mt-1">PDF, Word (Max 10MB)</p>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-toss-green-light flex items-center justify-center mb-2">
              <CheckCircle className="w-6 h-6 text-toss-green" />
            </div>
            <p className="text-text-primary font-medium text-sm">{selectedFile.name}</p>
            <p className="text-toss-green text-xs mt-1 font-medium">파일이 준비되었습니다</p>
          </div>
        )}
      </div>
    </div>
  );
}
