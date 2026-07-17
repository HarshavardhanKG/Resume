'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { profile, education } from '@/lib/data';
import type { CertificateGroupWithCount } from '@/lib/certificates';

type AboutProps = {
  certCounts: CertificateGroupWithCount[];
};

export function About({ certCounts }: AboutProps) {
  const totalCerts = certCounts.reduce((s, g) => s + g.count, 0);

  return (
    <Section id="about" label="01 // About" title="Student who ships, not just lists.">
      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="space-y-5 text-ink-1 text-base md:text-lg leading-relaxed"
        >
          {profile.bio.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
          <div className="pt-4 flex flex-wrap gap-2">
            <Badge variant="accent">Production builder</Badge>
            <Badge variant="accent">Smart India Hackathon 2025</Badge>
            <Badge variant="accent">Bechtel Intern</Badge>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-5"
        >
          <Card>
            <div className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-3">
              Education
            </div>
            {education.map((e) => (
              <div key={e.institution}>
                <h4 className="font-display font-semibold text-ink-0 text-lg leading-snug">
                  {e.degree}
                </h4>
                <p className="text-ink-1 text-sm mt-1">{e.institution}</p>
                <div className="mt-3 flex items-center justify-between font-mono text-xs text-ink-2">
                  <span>{e.period}</span>
                  <span className="text-accent">{e.score}</span>
                </div>
              </div>
            ))}
          </Card>

          <Card>
            <div className="flex items-baseline justify-between mb-4">
              <div className="font-mono text-xs tracking-[0.2em] uppercase text-accent">
                Certifications
              </div>
              <div className="font-mono text-[10px] tracking-wider uppercase text-ink-2">
                {totalCerts} files
              </div>
            </div>
            <ul className="space-y-1">
              {certCounts.map((g) => (
                <li key={g.slug}>
                  <Link
                    href={`/certificates#${g.slug}`}
                    className="group flex items-center justify-between gap-3 -mx-2 px-2 py-1.5 rounded-md hover:bg-bg-2 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                      <div className="min-w-0">
                        <div className="text-ink-0 text-sm group-hover:text-accent transition-colors truncate">
                          {g.name}
                        </div>
                        {g.description && (
                          <div className="text-ink-2 text-[11px] font-mono truncate">
                            {g.description}
                          </div>
                        )}
                      </div>
                    </div>
                    <span className="font-mono text-xs text-ink-1 group-hover:text-accent transition-colors shrink-0">
                      {g.count}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/certificates"
              className="group mt-4 pt-3 border-t border-line flex items-center justify-between font-mono text-xs text-accent hover:text-white transition-colors"
            >
              <span>View all certificates</span>
              <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
