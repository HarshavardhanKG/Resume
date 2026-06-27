import { Download } from 'lucide-react';
import { Section } from '@/components/ui/Section';

export const metadata = { title: 'Resume' };

export default function ResumePage() {
  return (
    <div className="pt-24">
      <Section
        label="// CV"
        title="Resume."
        description="View inline or download a copy. Latest version always lives at /resume.pdf."
      >
        <div className="flex justify-end mb-4">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-4 h-10 rounded-md bg-accent text-bg-0 hover:bg-white transition-colors font-mono text-sm"
          >
            <Download size={14} /> Download PDF
          </a>
        </div>
        <div className="rounded-xl border border-line overflow-hidden bg-bg-1">
          <iframe
            src="/resume.pdf"
            title="Harshavardhan K G Resume"
            className="w-full h-[80vh]"
          />
        </div>
      </Section>
    </div>
  );
}
