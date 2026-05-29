import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ThreeRoles } from "@/components/ThreeRoles";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { Showcase } from "@/components/Showcase";
import { TrustSection } from "@/components/TrustSection";
import { Mechanics } from "@/components/Mechanics";
import { FAQ } from "@/components/FAQ";
import { DownloadCTA } from "@/components/DownloadCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <ThreeRoles />
      <HowItWorks />
      <Features />
      <Showcase />
      <TrustSection />
      <Mechanics />
      <FAQ />
      <DownloadCTA />
      <Footer />
    </main>
  );
}
