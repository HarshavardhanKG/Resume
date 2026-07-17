'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { profile, socials } from '@/lib/data';

const channels = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: 'GitHub', value: '@HarshavardhanKG', href: socials.github, icon: Github },
  { label: 'LinkedIn', value: 'in/harshavardhan-k-g', href: socials.linkedin, icon: Linkedin },
];

export function Contact() {
  return (
    <Section id="contact" label="05 // Connect" title="Let's build something.">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-ink-1 text-lg leading-relaxed mb-6">
            Open to internship offers, freelance gigs, hackathon teams, and interesting collaborations.
            Reply rate is fast and I prefer email or LinkedIn for first contact.
          </p>

          <div className="flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`}>
              <Button variant="primary" size="lg">
                <Mail size={16} /> Email me
              </Button>
            </a>
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="lg">
                <Linkedin size={16} /> LinkedIn
              </Button>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-xl border border-line bg-bg-1/50 backdrop-blur-sm overflow-hidden"
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-2.5 bg-bg-2 border-b border-line">
            <span className="h-3 w-3 rounded-full bg-red-500/60" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/60" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/60" />
            <span className="ml-3 font-mono text-xs text-ink-2">contact.sh</span>
          </div>

          <div className="p-5 font-mono text-sm space-y-3">
            <div>
              <span className="text-accent">$</span>{' '}
              <span className="text-ink-1">cat ./contact.json</span>
            </div>
            <div className="text-ink-2">{`{`}</div>
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="group flex items-center justify-between pl-4 -mx-2 px-2 py-1.5 rounded-md hover:bg-bg-2 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <c.icon size={12} className="text-accent" />
                  <span className="text-ink-2">&quot;{c.label.toLowerCase()}&quot;:</span>
                  <span className="text-ink-0">&quot;{c.value}&quot;</span>
                </span>
                <ArrowUpRight
                  size={14}
                  className="text-ink-2 opacity-0 group-hover:opacity-100 group-hover:text-accent transition-all"
                />
              </a>
            ))}
            <div className="text-ink-2">{`}`}</div>
            <div className="pt-2 flex items-center gap-2 text-ink-2">
              <span className="text-accent">$</span>
              <span className="cursor-blink" />
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
