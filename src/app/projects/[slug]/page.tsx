import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, Github, ExternalLink, Lock } from 'lucide-react';
import { projects } from '@/lib/data';
import { Badge } from '@/components/ui/Badge';

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.hook,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <article className="pt-32 pb-24">
      <div className="container-px max-w-4xl mx-auto">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 font-mono text-sm text-ink-2 hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft size={14} /> All projects
        </Link>

        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className="font-mono text-xs tracking-[0.3em] text-accent uppercase">
            {`// Case Study · ${project.year}`}
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
            {project.status}
          </Badge>
        </div>

        <h1 className="font-display text-display-lg font-bold text-ink-0">{project.title}</h1>
        <p className="mt-3 font-mono text-sm text-ink-2">{project.subtitle}</p>

        {/* Action row */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          {project.links.github ? (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 h-10 rounded-md border border-line text-ink-1 hover:text-accent hover:border-accent/40 transition-colors font-mono text-sm"
            >
              <Github size={14} /> Source <ArrowUpRight size={12} />
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 px-4 h-10 rounded-md border border-line text-ink-2 font-mono text-sm">
              <Lock size={12} /> Code private
            </span>
          )}
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 h-10 rounded-md bg-accent text-bg-0 hover:bg-white transition-colors font-mono text-sm"
            >
              <ExternalLink size={14} /> Live demo
            </a>
          )}
        </div>

        {/* Meta strip */}
        <div className="mt-10 grid sm:grid-cols-2 gap-6 p-5 rounded-xl border border-line bg-bg-1/50">
          <div>
            <div className="font-mono text-[10px] tracking-wider uppercase text-ink-2 mb-2">
              Tech Stack
            </div>
            <ul className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <li
                  key={t}
                  className="px-2 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider bg-bg-2 text-ink-1 border border-line"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-mono text-[10px] tracking-wider uppercase text-ink-2 mb-2">
              Year
            </div>
            <p className="font-mono text-sm text-ink-0">{project.year}</p>
          </div>
        </div>

        {/* Body */}
        <div className="mt-12 prose prose-invert max-w-none space-y-6">
          <p className="text-lg text-ink-1 leading-relaxed">{project.description}</p>
          {project.longDescription && (
            <p className="text-ink-1 leading-relaxed">{project.longDescription}</p>
          )}

          <h2 className="font-display text-2xl font-bold text-ink-0 pt-6">Highlights</h2>
          <ul className="space-y-3">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex gap-3 text-ink-1">
                <span className="text-accent mt-1.5 shrink-0">▹</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
