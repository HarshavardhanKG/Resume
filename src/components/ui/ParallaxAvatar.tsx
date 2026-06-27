'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

/**
 * Parallax avatar block.
 *
 * v1 ships with a stylized SVG that follows cursor with subtle 3D tilt.
 * To upgrade later, drop a PNG/WebP at /public/avatar.png and replace the SVG
 * with: <Image src="/avatar.png" alt={profile.name} width={420} height={420} priority />
 */
export function ParallaxAvatar() {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-1, 1], [8, -8]);
  const rotateY = useTransform(x, [-1, 1], [-8, 8]);

  const springX = useSpring(rotateX, { stiffness: 150, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 150, damping: 20 });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) / (rect.width / 2));
    y.set((e.clientY - cy) / (rect.height / 2));
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative w-full max-w-[420px] aspect-square mx-auto"
      style={{ perspective: '1000px' }}
    >
      <motion.div
        style={{ rotateX: springX, rotateY: springY, transformStyle: 'preserve-3d' }}
        className="relative w-full h-full"
      >
        {/* Glow halo */}
        <div className="absolute inset-0 -z-10 bg-radial-glow blur-3xl opacity-60" />

        {/* Avatar SVG card */}
        <div className="relative w-full h-full rounded-2xl overflow-hidden border border-line bg-gradient-to-br from-bg-1 to-bg-2">
          <svg
            viewBox="0 0 420 420"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            aria-label="Harshavardhan stylized avatar"
          >
            <defs>
              <linearGradient id="bg-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#12121A" />
                <stop offset="100%" stopColor="#1C1C26" />
              </linearGradient>
              <linearGradient id="head-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#00D9FF" stopOpacity="0.2" />
              </linearGradient>
              <radialGradient id="glow" cx="0.5" cy="0.4" r="0.6">
                <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#00D9FF" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Backdrop grid */}
            <rect width="420" height="420" fill="url(#bg-grad)" />
            <g opacity="0.08" stroke="#E4E4E7" strokeWidth="0.5">
              {Array.from({ length: 12 }).map((_, i) => (
                <line key={`v-${i}`} x1={(i + 1) * 35} y1="0" x2={(i + 1) * 35} y2="420" />
              ))}
              {Array.from({ length: 12 }).map((_, i) => (
                <line key={`h-${i}`} x1="0" y1={(i + 1) * 35} x2="420" y2={(i + 1) * 35} />
              ))}
            </g>

            {/* Glow center */}
            <ellipse cx="210" cy="160" rx="200" ry="180" fill="url(#glow)" />

            {/* Stylized geometric figure (terminal-friendly silhouette) */}
            {/* Shoulders */}
            <path
              d="M 90 360 Q 90 280 210 280 Q 330 280 330 360 L 330 420 L 90 420 Z"
              fill="#1C1C26"
              stroke="url(#head-grad)"
              strokeWidth="1.5"
            />
            {/* Head */}
            <circle
              cx="210"
              cy="190"
              r="70"
              fill="#12121A"
              stroke="url(#head-grad)"
              strokeWidth="1.5"
            />
            {/* Visor / scan line */}
            <rect
              x="155"
              y="180"
              width="110"
              height="14"
              rx="3"
              fill="#00D9FF"
              fillOpacity="0.15"
              stroke="#00D9FF"
              strokeWidth="1"
            />
            <line
              x1="160"
              y1="187"
              x2="260"
              y2="187"
              stroke="#00D9FF"
              strokeWidth="1.5"
              strokeDasharray="3 3"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="-12"
                dur="1.5s"
                repeatCount="indefinite"
              />
            </line>

            {/* Terminal prompt corner */}
            <text
              x="20"
              y="40"
              fontFamily="monospace"
              fontSize="11"
              fill="#00D9FF"
              opacity="0.7"
            >
              &gt; whoami
            </text>
            <text x="20" y="55" fontFamily="monospace" fontSize="11" fill="#A1A1AA">
              harshavardhan_kg
            </text>

            {/* Corner brackets */}
            <g stroke="#00D9FF" strokeWidth="1.5" fill="none" opacity="0.6">
              <path d="M 12 12 L 12 32 M 12 12 L 32 12" />
              <path d="M 408 12 L 408 32 M 408 12 L 388 12" />
              <path d="M 12 408 L 12 388 M 12 408 L 32 408" />
              <path d="M 408 408 L 408 388 M 408 408 L 388 408" />
            </g>
          </svg>
        </div>
      </motion.div>
    </div>
  );
}
