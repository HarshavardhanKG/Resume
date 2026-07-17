'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { projects } from '@/lib/data';

export default function ProjectsIndexPage() {
  return (
    <div className="pt-24">
      <div className="container-px max-w-7xl mx-auto pt-4 pb-2">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-sm text-ink-2 hover:text-accent transition-colors"
        >
          <ArrowLeft size={14} /> Back to home
        </Link>
      </div>
      <Section
        label="// Archive"
        title="All projects."
        description="The full set of things I've built, shipped, or am actively working on."
      >
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <ProjectCard project={p} index={i} />
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
