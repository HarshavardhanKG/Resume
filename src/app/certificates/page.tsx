import Link from 'next/link';
import { ArrowLeft, FileText } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { getCertGroupsWithFiles } from '@/lib/certificates';

export const metadata = {
  title: 'Certificates',
  description: 'Verifiable credentials. Click any file to view.',
};

export default async function CertificatesPage() {
  const groups = await getCertGroupsWithFiles();
  const total = groups.reduce((s, g) => s + g.files.length, 0);

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
        label="// Credentials"
        title="Certificates."
        description="Verifiable credentials from various platforms. Click any file to open it in a new tab."
      >
        <div className="font-mono text-sm">
          {/* Terminal prompt header */}
          <div className="mb-10 pb-4 border-b border-line flex items-baseline justify-between">
            <div className="text-ink-2">
              <span className="text-accent">$</span> ls ./certificates/
            </div>
            <div className="text-ink-2 text-xs">
              {total} {total === 1 ? 'file' : 'files'} · {groups.length} directories
            </div>
          </div>

          <div className="space-y-12">
            {groups.map((g) => (
              <section key={g.slug} id={g.slug} className="scroll-mt-32">
                <header className="flex items-baseline justify-between gap-4 mb-2 pb-2 border-b border-line">
                  <h2 className="text-accent text-xs tracking-[0.3em] uppercase">
                    [{g.slug.toUpperCase()}]
                  </h2>
                  <span className="text-ink-2 text-xs">
                    {g.files.length} {g.files.length === 1 ? 'file' : 'files'}
                  </span>
                </header>

                {g.description && (
                  <p className="text-ink-2 text-xs mb-3 italic">
                    {`// ${g.description}`}
                  </p>
                )}

                {g.files.length === 0 ? (
                  <p className="text-ink-2 text-xs italic pl-4">
                    {`// no files uploaded yet — drop into /public/certificates/${g.slug}/`}
                  </p>
                ) : (
                  <ul className="space-y-0.5">
                    {g.files.map((f) => (
                      <li key={f}>
                        <a
                          href={`/certificates/${g.slug}/${f}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-3 px-3 py-1.5 -mx-3 rounded-md hover:bg-bg-1 transition-colors"
                        >
                          <FileText
                            size={12}
                            className="text-ink-2 group-hover:text-accent shrink-0 transition-colors"
                          />
                          <span className="text-ink-1 group-hover:text-accent transition-colors break-all">
                            {f}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {/* Terminal footer */}
          <div className="mt-12 pt-4 border-t border-line text-ink-2 text-xs flex items-center gap-2">
            <span className="text-accent">$</span>
            <span className="cursor-blink" />
          </div>
        </div>
      </Section>
    </div>
  );
}
