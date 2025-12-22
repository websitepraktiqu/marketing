import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TopicSection from "@/components/TopicSection";
import AgendaSection from "@/components/AgendaSection";
import ExpertSection from "@/components/ExpertSection";
import CertificateSection from "@/components/CertificateSection";
import PricingSection from "@/components/PricingSection";
import TestimonialSection from "@/components/TestimonialSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-white text-slate-900">
      <Navbar />
      <main>
        <HeroSection />
        <TopicSection /> {/* Keuntungan/Topics */}
        <AgendaSection />
        <ExpertSection />
        <CertificateSection />
        <PricingSection />
        <TestimonialSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
