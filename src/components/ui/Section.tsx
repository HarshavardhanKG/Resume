'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type SectionProps = {
  id?: string;
  label?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, label, title, description, children, className }: SectionProps) {
  return (
    <section id={id} className={cn('relative py-24 md:py-32', className)}>
      <div className="container-px max-w-7xl mx-auto">
        {(label || title || description) && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12 md:mb-16"
          >
            {label && (
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs tracking-[0.3em] text-accent uppercase">
                  {label}
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-accent/40 to-transparent max-w-[120px]" />
              </div>
            )}
            {title && (
              <h2 className="font-display text-display-md font-bold text-ink-0 max-w-3xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-ink-1 text-lg max-w-2xl leading-relaxed">
                {description}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
