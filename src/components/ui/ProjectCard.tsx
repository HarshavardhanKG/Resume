'use client';

import Link from 'next/link';
import { ArrowUpRight, Github, ExternalLink, Lock } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import type { Project } from '@/lib/data';

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const hasGithub = !!project.links.github;
  const hasLive = !!project.links.live;

  return (
    <Card glow as="article" className="group flex flex-col h-full">
      {/* Index + status */}
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono text-xs text-accent tracking-wider">
          {String(index + 1).padStart(2, '0')} / {project.year}
        </span>
        <Badge
          variant={
            project.status === 'shipped'
              ? 'success'
              : project.status === 'in-progress'
                ? 'accent'
                : 'muted'
          }
        >
          {project.status === 'shipped'
            ? '● Shipped'
            : project.status === 'in-progress'
              ? '◐ In Progress'
              : '○ Archived'}
        </Badge>
      </div>

      {/* Title */}
      <h3 className="font-display text-xl md:text-2xl font-bold text-ink-0 group-hover:text-accent transition-colors leading-snug">
        {project.title}
      </h3>
      <p className="mt-1 font-mono text-xs text-ink-2">{project.subtitle}</p>

      {/* Hook */}
      <p className="mt-4 text-ink-1 text-sm leading-relaxed flex-1">
        {project.hook}
      </p>

      {/* Tech */}
      <ul className="mt-5 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <li
            key={t}
            className="px-2 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider bg-bg-2 text-ink-2 border border-line"
          >
            {t}
          </li>
        ))}
      </ul>

      {/* Links */}
      <div className="mt-6 pt-5 border-t border-line flex items-center justify-between">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 font-mono text-sm text-accent hover:text-white transition-colors"
        >
          Read case study <ArrowUpRight size={14} />
        </Link>
        <div className="flex items-center gap-2">
          {hasGithub ? (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub repository"
              className="p-1.5 rounded-md text-ink-2 hover:text-accent hover:bg-bg-2 transition-colors"
            >
              <Github size={16} />
            </a>
          ) : (
            <span
              aria-label="Repository private"
              title="Code private"
              className="p-1.5 rounded-md text-ink-2 cursor-not-allowed"
            >
              <Lock size={14} />
            </span>
          )}
          {hasLive && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live demo"
              className="p-1.5 rounded-md text-ink-2 hover:text-accent hover:bg-bg-2 transition-colors"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}
