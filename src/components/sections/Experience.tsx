'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { experience } from '@/lib/data';
import { Briefcase } from 'lucide-react';

export function Experience() {
  return (
    <Section
      id="experience"
      label="03 // Work"
      title="Where I've shown up."
      description="Early career, but every entry is real."
    >
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-accent/40 via-line to-transparent" />

        <ul className="space-y-8">
          {experience.map((exp, i) => (
            <motion.li
              key={`${exp.company}-${i}`}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-14 md:pl-20"
            >
              {/* Node */}
              <span className="absolute left-0 md:left-2 top-1 flex items-center justify-center w-9 h-9 rounded-full bg-bg-1 border border-accent/40 text-accent">
                <Briefcase size={14} />
              </span>

              <div className="rounded-xl border border-line bg-bg-1/50 backdrop-blur-sm p-6 hover:border-lineStrong transition-colors">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl font-semibold text-ink-0">
                    {exp.role}
                    <span className="text-accent"> · {exp.company}</span>
                  </h3>
                  <span className="font-mono text-xs text-ink-2">
                    {exp.start} → {exp.end}
                  </span>
                </div>
                {exp.location && (
                  <p className="mt-1 font-mono text-xs text-ink-2">{exp.location}</p>
                )}
                <ul className="mt-4 space-y-2">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-ink-1 text-sm leading-relaxed">
                      <span className="text-accent mt-1.5 shrink-0">▹</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                {exp.tags && exp.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.tags.map((t) => (
                      <Badge key={t} variant="muted">
                        {t}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
