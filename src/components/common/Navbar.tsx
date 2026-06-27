'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navItems, profile } from '@/lib/data';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    const ids = navItems.map((n) => n.href.replace('#', ''));
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: '-40% 0px -55% 0px' },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-bg-0/80 backdrop-blur-md border-b border-line'
          : 'bg-transparent border-b border-transparent',
      )}
    >
      <nav className="container-px max-w-7xl mx-auto h-16 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-2">
          <span className="font-mono text-accent text-sm">&gt;</span>
          <span className="font-mono text-sm tracking-wider text-ink-0 group-hover:text-accent transition-colors">
            {profile.initials.toLowerCase()}
            <span className="cursor-blink ml-0.5" />
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item, i) => {
            const isActive = active === item.href.replace('#', '');
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'group relative px-3 py-2 font-mono text-sm transition-colors',
                    isActive ? 'text-accent' : 'text-ink-1 hover:text-ink-0',
                  )}
                >
                  <span className="text-accent/60 mr-1.5 font-mono text-xs">
                    {String(i + 1).padStart(2, '0')}.
                  </span>
                  {item.label}
                </Link>
              </li>
            );
          })}
          <li className="ml-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs px-3 py-2 border border-accent/40 text-accent rounded-md hover:bg-accent/10 transition-colors"
            >
              Resume.pdf
            </a>
          </li>
        </ul>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="md:hidden p-2 text-ink-0 hover:text-accent transition-colors"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-line bg-bg-0/95 backdrop-blur-md"
          >
            <ul className="container-px max-w-7xl mx-auto py-4 flex flex-col gap-1">
              {navItems.map((item, i) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 font-mono text-ink-1 hover:text-accent transition-colors"
                  >
                    <span className="text-accent/60 mr-2 text-xs">
                      {String(i + 1).padStart(2, '0')}.
                    </span>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-mono text-xs px-3 py-2 border border-accent/40 text-accent rounded-md"
                >
                  Resume.pdf
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
