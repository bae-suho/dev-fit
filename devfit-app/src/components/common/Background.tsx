export function Background() {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 no-print">
      <div
        className="absolute rounded-full blur-3xl opacity-40"
        style={{
          top: '-5%',
          left: '-5%',
          width: '400px',
          height: '400px',
          backgroundColor: '#EBF4FF',
        }}
      />
      <div
        className="absolute rounded-full blur-3xl opacity-30"
        style={{
          bottom: '-5%',
          right: '-5%',
          width: '350px',
          height: '350px',
          backgroundColor: '#E8FAF3',
        }}
      />
    </div>
  );
}

export function HomeBackground() {
  return (
    <>
      <div
        className="absolute rounded-full blur-3xl pointer-events-none opacity-50"
        style={{
          top: '-10%',
          right: '-5%',
          width: '24rem',
          height: '24rem',
          backgroundColor: '#EBF4FF',
        }}
      />
      <div
        className="absolute rounded-full blur-3xl pointer-events-none opacity-40"
        style={{
          bottom: '-10%',
          left: '-5%',
          width: '24rem',
          height: '24rem',
          backgroundColor: '#E8FAF3',
        }}
      />
    </>
  );
}
