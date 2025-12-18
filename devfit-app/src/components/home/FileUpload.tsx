import { useState, useRef } from 'react';
import { Upload, CheckCircle, X } from 'lucide-react';

interface FileUploadProps {
  onFilesSelect: (files: File[]) => void;
}

export function FileUpload({ onFilesSelect }: FileUploadProps) {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      const newFiles = [...selectedFiles, ...files];
      setSelectedFiles(newFiles);
      onFilesSelect(newFiles);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files || []);
    if (files.length > 0) {
      const newFiles = [...selectedFiles, ...files];
      setSelectedFiles(newFiles);
      onFilesSelect(newFiles);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const removeFile = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const newFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(newFiles);
    onFilesSelect(newFiles);
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-text-primary ml-1">
        이력서 & 포트폴리오
      </label>
      <div
        className={`w-full min-h-40 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all relative overflow-hidden ${
          isDragging
            ? 'border-toss-blue bg-toss-blue-light'
            : selectedFiles.length > 0
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
          multiple
          onChange={handleFileChange}
        />

        {selectedFiles.length === 0 ? (
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
          <div className="w-full p-4 space-y-2">
            <div className="flex items-center justify-center mb-2">
              <div className="w-10 h-10 rounded-full bg-toss-green-light flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-toss-green" />
              </div>
            </div>
            {selectedFiles.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-white rounded-lg px-3 py-2 shadow-sm"
              >
                <span className="text-text-primary text-sm truncate flex-1">
                  {file.name}
                </span>
                <button
                  onClick={(e) => removeFile(index, e)}
                  className="ml-2 p-1 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-4 h-4 text-text-quaternary" />
                </button>
              </div>
            ))}
            <p className="text-center text-toss-green text-xs mt-2 font-medium">
              {selectedFiles.length}개 파일 준비됨 · 클릭하여 추가
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
