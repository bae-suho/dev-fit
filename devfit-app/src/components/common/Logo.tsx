interface LogoProps {
  size?: 'sm' | 'lg';
}

export function Logo({ size = 'sm' }: LogoProps) {
  if (size === 'lg') {
    return (
      <h1 className="text-4xl font-bold tracking-tight text-text-primary">
        Dev
        <span className="text-toss-blue">Fit</span>
      </h1>
    );
  }

  return (
    <div className="text-xl font-bold tracking-tight flex items-center gap-2 text-text-primary">
      <div className="w-2.5 h-2.5 rounded-full bg-toss-blue" />
      <span>
        Dev<span className="text-toss-blue">Fit</span>
      </span>
    </div>
  );
}
