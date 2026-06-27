import type { Metadata } from 'next';
import { JetBrains_Mono, Bricolage_Grotesque } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { ScrollProgress } from '@/components/common/ScrollProgress';
import { profile } from '@/lib/data';

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const display = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const sans = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://harshavardhan.dev'),
  title: {
    default: `${profile.name} · ${profile.role}`,
    template: `%s · ${profile.name}`,
  },
  description: profile.tagline,
  keywords: [
    'Harshavardhan',
    'Full Stack Developer',
    'Portfolio',
    'Blockchain',
    'AI',
    'React',
    'Next.js',
    'Smart India Hackathon',
    'Bechtel',
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://harshavardhan.dev',
    siteName: profile.name,
    title: `${profile.name} · ${profile.role}`,
    description: profile.tagline,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: profile.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} · ${profile.role}`,
    description: profile.tagline,
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${mono.variable} ${display.variable} ${sans.variable}`}>
      <body className="font-sans bg-bg-0 text-ink-0 min-h-screen">
        <ScrollProgress />
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
