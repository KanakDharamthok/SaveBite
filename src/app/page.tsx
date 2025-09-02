import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { Features } from '@/components/sections/features';
import { HowItWorks } from '@/components/sections/how-it-works';
import { Community } from '@/components/sections/community';
import { Download } from '@/components/sections/download';
import { AIShelfLife } from '@/components/sections/ai-shelf-life';
import { AIImageAnalysis } from '@/components/sections/ai-image-analysis';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <HowItWorks />
        <AIImageAnalysis />
        <AIShelfLife />
        <Community />
        <Download />
      </main>
      <Footer />
    </div>
  );
}
