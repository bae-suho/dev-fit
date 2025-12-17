import { useNavigate } from 'react-router-dom';
import { Logo } from './Logo';

export function Header() {
  const navigate = useNavigate();

  return (
    <header
      className="w-full p-6 flex justify-between items-center z-50 relative border-b border-white/5 backdrop-blur-md fixed top-0"
      style={{ backgroundColor: 'rgba(11, 16, 32, 0.8)' }}
    >
      <Logo />
      <div className="flex gap-4">
        <button className="text-sm text-text-muted hover:text-white transition-colors">
          PDF 저장
        </button>
        <button
          onClick={() => navigate('/')}
          className="text-sm px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors text-white"
        >
          새 진단
        </button>
      </div>
    </header>
  );
}
