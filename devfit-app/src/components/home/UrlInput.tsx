import { Link } from 'lucide-react';

interface UrlInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function UrlInput({ value, onChange }: UrlInputProps) {
  return (
    <div className="space-y-3">
      <label
        htmlFor="urlInput"
        className="block text-sm font-medium text-slate-300 ml-1"
      >
        1. 분석할 기업 채용 공고 URL
      </label>
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Link className="w-5 h-5 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
        </div>
        <input
          type="url"
          id="urlInput"
          required
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-slate-950 border border-slate-700 text-white text-sm rounded-xl block pl-12 p-4 placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all shadow-inner font-mono"
          placeholder="https://www.wanted.co.kr/wd/..."
        />
      </div>
    </div>
  );
}
