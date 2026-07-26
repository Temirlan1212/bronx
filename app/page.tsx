import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { StocksSection } from "@/components/stocks-section";
import { CtaSection } from "@/components/cta-section";
import { SiteFooter } from "@/components/site-footer";
import { ContactSection } from "@/components/contact-section";
import { AboutSection } from "@/components/about";
import { ScheduleSection } from "@/components/shedule-section";
import CircularGallery from "@/components/ui/circullar-gallery";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <SiteHeader />

      <div className="flex flex-col gap-[50px] md:gap-[100px]">
        <HeroSection />
        <ScheduleSection />
        <ServicesSection />
        <StocksSection />
        <AboutSection />
      </div>
      {/* <CtaSection /> */}
      <div style={{ height: "600px" }}>
        <CircularGallery
          bend={0}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.05}
          // Optionally load a custom font for the labels.
          // Accepts a stylesheet URL (e.g. Google Fonts) or a direct font file.
          fontUrl=""
          font="bold 30px Orbitron"
          scrollSpeed={2}
          items={[
            {
              image: `/images/showcase/image-1.png`,
              text: "",
            },
            {
              image: `/images/showcase/image-2.png`,
              text: "",
            },
            {
              image: `/images/showcase/image-3.png`,
              text: "",
            },
            {
              image: `/images/showcase/image-4.png`,
              text: "",
            },
            {
              image: `/images/showcase/image-5.png`,
              text: "",
            },
            {
              image: `/images/showcase/image-6.png`,
              text: "",
            },
          ]}
        />
      </div>

      <ContactSection />
      <SiteFooter />
    </main>
  );
}
