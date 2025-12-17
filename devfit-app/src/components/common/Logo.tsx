interface LogoProps {
  size?: 'sm' | 'lg';
}

export function Logo({ size = 'sm' }: LogoProps) {
  if (size === 'lg') {
    return (
      <h1 className="text-5xl font-extrabold tracking-tight">
        Dev
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
          Fit
        </span>
      </h1>
    );
  }

  return (
    <div className="text-xl font-extrabold tracking-tight flex items-center gap-2">
      <div
        className="w-3 h-3 rounded-full"
        style={{ backgroundColor: '#6C5CE7' }}
      />
      <span>
        Dev<span style={{ color: '#6C5CE7' }}>Fit</span>
      </span>
    </div>
  );
}
