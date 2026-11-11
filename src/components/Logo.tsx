// NEW ART mark: a water drop built from flowing gold lines, with a shower head and spray.
const drop = "M60 6 C60 6 18 60 18 102 a42 42 0 0 0 84 0 C102 60 60 6 60 6 Z";

export function Logo({ size = 44, title }: { size?: number; title?: string }) {
  return (
    <svg
      width={size * 0.78}
      height={size}
      viewBox="0 0 120 154"
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <defs>
        <linearGradient id="goldLine" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f0d58f" />
          <stop offset="0.5" stopColor="#c9a24f" />
          <stop offset="1" stopColor="#a47b2c" />
        </linearGradient>
      </defs>
      <g stroke="url(#goldLine)" strokeWidth="2.2">
        {[1, 0.84, 0.68, 0.52, 0.36].map((k) => (
          <path key={k} d={drop} transform={`translate(60 102) scale(${k}) translate(-60 -102)`} />
        ))}
        {/* shower head */}
        <path d="M70 34 q14 -12 30 -2 M66 36 h40" />
        {/* spray */}
        <path d="M74 44 l-3 12 M84 44 l-3 16 M94 44 l-3 12 M104 44 l-3 10" strokeWidth="2" />
        {/* highlight inside the inner drop */}
        <path d="M52 108 a8 8 0 0 0 14 4" strokeWidth="1.8" />
      </g>
    </svg>
  );
}
