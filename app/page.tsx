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
        <AgendaSection /> {/* Kisi Materi per Sesi (Carousel) */}
        <TopicSection /> {/* Benefit Konten Keseluruhan (Kenapa harus ikutan) */}
        <ExpertSection /> {/* Profil Pemateri (Carousel) */}
        <CertificateSection />
        <TestimonialSection /> {/* Testimoni */}
        <PricingSection /> {/* CTA Pembelian Sesi & Bundling */}
        <FAQSection /> {/* FAQ */}
        <CTASection /> {/* Final CTA */}
      </main>
      <Footer />
    </div>
  );
}
