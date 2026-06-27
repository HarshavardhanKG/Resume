'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { projects } from '@/lib/data';

export default function ProjectsIndexPage() {
  return (
    <div className="pt-24">
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
