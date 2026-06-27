'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { skillGroups } from '@/lib/data';

export function Skills() {
  return (
    <Section
      id="skills"
      label="02 // Stack"
      title="The toolkit."
      description="Languages, frameworks, and tools I reach for when building production systems."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <Card glow className="h-full">
              <div className="flex items-baseline justify-between mb-4">
                <h3 className="font-display text-lg font-semibold text-ink-0">
                  {group.category}
                </h3>
                <span className="font-mono text-[10px] tracking-wider uppercase text-ink-2">
                  {group.skills.length} items
                </span>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <li
                    key={s.name}
                    className={
                      'px-2.5 py-1 rounded-md font-mono text-xs border transition-colors ' +
                      (s.level === 'core'
                        ? 'bg-accent/10 text-accent border-accent/30'
                        : s.level === 'learning'
                          ? 'bg-bg-2 text-ink-2 border-line italic'
                          : 'bg-bg-2 text-ink-1 border-line')
                    }
                  >
                    {s.name}
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
