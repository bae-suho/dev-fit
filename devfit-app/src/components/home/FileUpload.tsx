import { useState, useRef } from 'react';
import { Cloud, CheckCircle } from 'lucide-react';

interface FileUploadProps {
  onFileSelect: (file: File | null) => void;
}

export function FileUpload({ onFileSelect }: FileUploadProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
    onFileSelect(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0] || null;
    if (file) {
      setSelectedFile(file);
      onFileSelect(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-slate-300 ml-1">
        2. 내 이력서 & 포트폴리오
      </label>
      <div
        className="drop-zone w-full h-48 border-2 border-dashed border-slate-600 rounded-xl flex flex-col items-center justify-center cursor-pointer transition-all bg-slate-900/50 relative overflow-hidden group"
        onClick={() => inputRef.current?.click()}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          accept=".pdf,.docx,.doc"
          onChange={handleFileChange}
        />

        {!selectedFile ? (
          <div className="text-center p-6 transition-transform group-hover:scale-105">
            <Cloud className="mx-auto h-12 w-12 text-slate-500 mb-3 group-hover:text-indigo-400 transition-colors" />
            <p className="text-slate-300 font-medium">
              클릭하거나 파일을 드래그하세요
            </p>
            <p className="text-slate-500 text-xs mt-1">PDF, Word (Max 10MB)</p>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <div className="bg-indigo-500/20 text-indigo-300 p-3 rounded-full mb-2">
              <CheckCircle className="w-6 h-6" />
            </div>
            <p className="text-white font-medium text-sm">{selectedFile.name}</p>
            <p className="text-indigo-400 text-xs mt-1">파일이 준비되었습니다</p>
          </div>
        )}
      </div>
    </div>
  );
}
