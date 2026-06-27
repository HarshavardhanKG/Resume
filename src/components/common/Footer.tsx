import { Github, Linkedin, Mail } from 'lucide-react';
import { profile, socials, languages } from '@/lib/data';

export function Footer() {
  return (
    <footer className="relative border-t border-line mt-24">
      <div className="container-px max-w-7xl mx-auto py-12">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="font-mono text-accent text-xs tracking-[0.3em] uppercase mb-3">
              {'// Beyond Code'}
            </div>
            <ul className="flex flex-wrap gap-3">
              {languages.map((lang) => (
                <li
                  key={lang.name}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-bg-1 border border-line"
                >
                  <span className="text-base" aria-hidden>
                    {lang.flag}
                  </span>
                  <div className="leading-tight">
                    <div className="font-mono text-xs text-ink-0">{lang.name}</div>
                    <div className="font-mono text-[10px] text-ink-2">{lang.level}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-mono text-accent text-xs tracking-[0.3em] uppercase mb-3">
              {'// Connect'}
            </div>
            <ul className="space-y-2">
              <li>
                <a
                  href={socials.email}
                  className="group flex items-center gap-2 text-ink-1 hover:text-accent transition-colors font-mono text-sm"
                >
                  <Mail size={14} />
                  <span className="group-hover:underline">{profile.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-ink-1 hover:text-accent transition-colors font-mono text-sm"
                >
                  <Github size={14} />
                  <span className="group-hover:underline">GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-ink-1 hover:text-accent transition-colors font-mono text-sm"
                >
                  <Linkedin size={14} />
                  <span className="group-hover:underline">LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="md:text-right">
            <div className="font-mono text-accent text-xs tracking-[0.3em] uppercase mb-3">
              {'// Colophon'}
            </div>
            <p className="font-mono text-xs text-ink-2 leading-relaxed">
              Built with Next.js 15, Tailwind CSS, and Framer Motion.
              <br />
              Type: Bricolage Grotesque + JetBrains Mono.
              <br />
              Deployed on Vercel.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-line flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="font-mono text-xs text-ink-2">
            © {new Date().getFullYear()} {profile.name}. All systems operational.
          </p>
          <p className="font-mono text-xs text-ink-2">
            <span className="text-accent">v1.0.0</span> · Last deploy:{' '}
            {new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
          </p>
        </div>
      </div>
    </footer>
  );
}
