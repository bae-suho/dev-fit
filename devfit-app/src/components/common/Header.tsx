import { useNavigate } from 'react-router-dom';
import { Logo } from './Logo';

export function Header() {
  const navigate = useNavigate();

  return (
    <header className="w-full px-6 py-4 flex justify-between items-center z-50 relative bg-white/80 backdrop-blur-md fixed top-0 border-b border-border-light">
      <Logo />
      <button
        onClick={() => navigate('/')}
        className="text-sm px-4 py-2 bg-bg-secondary text-text-secondary rounded-xl font-medium hover:bg-border-light transition-colors active:scale-95"
      >
        새 진단
      </button>
    </header>
  );
}
