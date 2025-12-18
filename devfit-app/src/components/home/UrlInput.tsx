import { Link } from 'lucide-react';

interface UrlInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function UrlInput({ value, onChange }: UrlInputProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor="urlInput"
        className="block text-sm font-semibold text-text-primary ml-1"
      >
        채용 공고 URL
      </label>
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Link className="w-5 h-5 text-text-quaternary group-focus-within:text-toss-blue transition-colors" />
        </div>
        <input
          type="url"
          id="urlInput"
          required
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-bg-secondary text-text-primary text-sm rounded-xl block pl-12 p-4 placeholder-text-disabled border-2 border-transparent focus:outline-none focus:border-toss-blue focus:bg-white transition-all"
          placeholder="https://www.wanted.co.kr/wd/..."
        />
      </div>
    </div>
  );
}
