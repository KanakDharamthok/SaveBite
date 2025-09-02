import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { Features } from '@/components/sections/features';
import { HowItWorks } from '@/components/sections/how-it-works';
import { CommunityStories } from '@/components/sections/community-stories';
import { Download } from '@/components/sections/download';
import { AIShelfLife } from '@/components/sections/ai-shelf-life';
import { AIImageAnalysis } from '@/components/sections/ai-image-analysis';
import { OurImpact } from '@/components/sections/our-impact';
import { TopDonors } from '@/components/sections/top-donors';
import { LiveMap } from '@/components/sections/live-map';
import { GetInvolved } from '@/components/sections/get-involved';
import { AppGuide } from '@/components/sections/app-guide';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <HowItWorks />
        <OurImpact />
        <TopDonors />
        <LiveMap />
        <AIImageAnalysis />
        <AIShelfLife />
        <AppGuide />
        <CommunityStories />
        <GetInvolved />
        <Download />
      </main>
      <Footer />
    </div>
  );
}
