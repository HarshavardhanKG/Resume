import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { FeaturedProjects } from '@/components/sections/FeaturedProjects';
import { Contact } from '@/components/sections/Contact';
import { getCertGroupCounts } from '@/lib/certificates';

export default async function HomePage() {
  const certCounts = await getCertGroupCounts();
  return (
    <>
      <Hero />
      <About certCounts={certCounts} />
      <Skills />
      <Experience />
      <FeaturedProjects />
      <Contact />
    </>
  );
}
