export function GridBackdrop() {
  return (
    <div
      className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
      aria-hidden
    >
      <div className="absolute inset-0 bg-grid-pattern bg-grid-size opacity-[0.35]" />
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-0" />
      <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay" />
    </div>
  );
}
