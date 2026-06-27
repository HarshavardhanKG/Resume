'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { Button } from '@/components/ui/Button';
import { projects } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <Section
      id="projects"
      label="04 // Projects"
      title="Things I've built and shipped."
      description="Real systems, real users, real constraints. Not coursework demos."
    >
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {featured.map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <ProjectCard project={p} index={i} />
          </motion.div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Link href="/projects">
          <Button variant="outline" size="lg">
            View all projects <ArrowRight size={16} />
          </Button>
        </Link>
      </div>
    </Section>
  );
}
