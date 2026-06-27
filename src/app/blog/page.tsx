import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';

export const metadata = { title: 'Blog' };

export default function BlogPage() {
  return (
    <div className="pt-24">
      <Section label="// Writing" title="Blog.">
        <div className="max-w-2xl">
          <Badge variant="accent" className="mb-6">
            ◐ Coming soon
          </Badge>
          <p className="text-ink-1 text-lg leading-relaxed mb-6">
            Notes on what I&apos;m building, learning, and breaking. First post lands once the
            Bechtel internship wraps and I have something honest to say about it.
          </p>
          <p className="font-mono text-sm text-ink-2">
            Bookmark or check back in <span className="text-accent">Q3 2026</span>.
          </p>
        </div>
      </Section>
    </div>
  );
}
