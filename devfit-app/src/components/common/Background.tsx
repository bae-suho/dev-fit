export function Background() {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
      <div
        className="absolute rounded-full blur-3xl"
        style={{
          top: '-10%',
          left: '-10%',
          width: '600px',
          height: '600px',
          backgroundColor: 'rgba(108, 92, 231, 0.1)',
        }}
      />
      <div
        className="absolute rounded-full blur-3xl"
        style={{
          bottom: '-10%',
          right: '-10%',
          width: '500px',
          height: '500px',
          backgroundColor: 'rgba(6, 182, 212, 0.1)',
        }}
      />
    </div>
  );
}

export function HomeBackground() {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full glow-bg pointer-events-none" />
      <div
        className="absolute rounded-full blur-3xl pointer-events-none"
        style={{
          top: '-10%',
          right: '-5%',
          width: '24rem',
          height: '24rem',
          backgroundColor: 'rgba(147, 51, 234, 0.2)',
        }}
      />
      <div
        className="absolute rounded-full blur-3xl pointer-events-none"
        style={{
          bottom: '-10%',
          left: '-5%',
          width: '24rem',
          height: '24rem',
          backgroundColor: 'rgba(37, 99, 235, 0.2)',
        }}
      />
    </>
  );
}
