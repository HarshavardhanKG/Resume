import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-24 pb-12">
      <div className="container-px max-w-2xl mx-auto text-center">
        <div className="font-mono text-xs tracking-[0.3em] text-accent uppercase mb-4">
          {'// ERR_NOT_FOUND'}
        </div>
        <h1 className="font-display text-display-lg font-bold text-ink-0 mb-4">404</h1>
        <p className="text-ink-1 mb-8 font-mono text-sm">
          <span className="text-accent">$</span> cat ./that-page.txt
          <br />
          <span className="text-ink-2">cat: that-page.txt: No such file or directory</span>
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 h-11 rounded-md border border-accent/40 text-accent hover:bg-accent/10 font-mono text-sm transition-colors"
        >
          <ArrowLeft size={14} /> Back to home
        </Link>
      </div>
    </div>
  );
}
