import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { StocksSection } from "@/components/stocks-section";
import { CtaSection } from "@/components/cta-section";
import { SiteFooter } from "@/components/site-footer";
import { ContactSection } from "@/components/contact-section";
import { AboutSection } from "@/components/about";
import { ScheduleSection } from "@/components/shedule-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <SiteHeader />

      <div className="flex flex-col gap-[50px] md:gap-[100px]">
        <HeroSection />
        <ScheduleSection />
        <ServicesSection />
        <StocksSection />
        {/* <CtaSection /> */}
        <AboutSection />
        <ContactSection />
      </div>
      <SiteFooter />
    </main>
  );
}
