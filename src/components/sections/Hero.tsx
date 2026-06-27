'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, MapPin } from 'lucide-react';
import { profile } from '@/lib/data';
import { Button } from '@/components/ui/Button';
import { ParallaxAvatar } from '@/components/ui/ParallaxAvatar';
import { GridBackdrop } from '@/components/common/GridBackdrop';

const taglines = profile.rotatingTaglines;

function useTypewriter(words: string[], speed = 70, pause = 1800) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === '') {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => {
          setText((t) =>
            deleting ? current.substring(0, t.length - 1) : current.substring(0, t.length + 1),
          );
        },
        deleting ? speed / 2 : speed,
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

export function Hero() {
  const typed = useTypewriter(taglines);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      <GridBackdrop />

      <div className="container-px max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">
          {/* Left column: copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-bg-1 border border-line mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="font-mono text-xs text-ink-1">
                Available for opportunities · {profile.location.split(',')[0]}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-display-xl font-bold text-ink-0 mb-4"
            >
              {(() => {
                const tokens = profile.name.split(' ');
                const first = tokens[0];
                const rest = tokens.slice(1).join(' ');
                return (
                  <>
                    <span className="block">{first}</span>
                    {rest && <span className="block">{rest}</span>}
                  </>
                );
              })()}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-mono text-lg md:text-xl text-ink-1 mb-6 min-h-[2rem]"
            >
              <span className="text-accent">&gt; </span>
              <span>{typed}</span>
              <span className="cursor-blink" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="max-w-xl text-ink-1 text-base md:text-lg leading-relaxed mb-10"
            >
              B.Tech IT student at SKCET shipping production grade systems with blockchain, AI,
              and modern web stacks. Information & Digital Intern at{' '}
              <span className="text-accent">Bechtel</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center gap-3"
            >
              <a href="#projects">
                <Button variant="primary" size="lg">
                  View Projects <ArrowRight size={16} />
                </Button>
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="lg">
                  <Download size={16} /> Resume
                </Button>
              </a>
              <span className="ml-2 hidden sm:inline-flex items-center gap-2 text-ink-2 font-mono text-xs">
                <MapPin size={12} className="text-accent" />
                {profile.location}
              </span>
            </motion.div>

            {/* Quick stats strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-14 pt-8 border-t border-line grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {profile.stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-3xl font-bold text-ink-0 leading-none">
                    {s.value}
                  </div>
                  <div className="mt-1 font-mono text-[11px] tracking-wider text-ink-2 uppercase">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column: avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="order-first lg:order-last"
          >
            <ParallaxAvatar />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
