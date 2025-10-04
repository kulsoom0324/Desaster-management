import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import FeaturesSection from "@/components/sections/features";
import DisasterTypesSection from "@/components/sections/disaster-types";
import AiToolsSection from "@/components/sections/ai-tools";
import PartnersSection from "@/components/sections/partners";
import ContactSection from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <DisasterTypesSection />
        <AiToolsSection />
        <PartnersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
