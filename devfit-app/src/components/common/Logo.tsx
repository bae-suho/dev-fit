interface LogoProps {
  size?: 'sm' | 'lg';
}

export function Logo({ size = 'sm' }: LogoProps) {
  const logoFont = { fontFamily: "'KboDiamondGothic', sans-serif" };

  if (size === 'lg') {
    return (
      <h1
        className="text-5xl md:text-6xl font-bold tracking-tight text-text-primary"
        style={{
          ...logoFont,
          textShadow: '4px 4px 8px rgba(0, 0, 0, 0.25)',
        }}
      >
        Dev
        <span className="text-toss-blue">Fit</span>
      </h1>
    );
  }

  return (
    <div className="text-2xl font-bold tracking-tight flex items-center gap-2 text-text-primary">
      <div className="w-3 h-3 rounded-full bg-toss-blue" />
      <span style={logoFont}>
        Dev<span className="text-toss-blue">Fit</span>
      </span>
    </div>
  );
}
