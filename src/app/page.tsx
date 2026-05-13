import content from "../../config/content.json";
import type { ContentConfig } from "@/types/content";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection";
import FlowSection from "@/components/FlowSection";
import AIReportsSection from "@/components/AIReportsSection";
import ClinicSystemSection from "@/components/ClinicSystemSection";
import SetupSection from "@/components/SetupSection";
import FitsBestSection from "@/components/FitsBestSection";
import ImpactSection from "@/components/ImpactSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import InsightsSection from "@/components/InsightsSection";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const cfg = content as ContentConfig;

export default function Home() {
  return (
    <main>
      <Navbar data={cfg.navbar} />
      <HeroSection data={cfg.hero} />
      <PartnersSection data={cfg.partners} />
      <FlowSection data={cfg.flow} />
      <AIReportsSection data={cfg.aiReports} />
      <ClinicSystemSection data={cfg.clinicSystem} />
      <SetupSection data={cfg.setup} />
      <FitsBestSection data={cfg.fitsBest} />
      <ImpactSection data={cfg.impact} />
      <TestimonialsSection data={cfg.testimonials} />
      <InsightsSection data={cfg.insights} />
      <FAQSection data={cfg.faq} />
      <CTABanner data={cfg.ctaBanner} />
      <Footer data={cfg.footer} />
    </main>
  );
}
