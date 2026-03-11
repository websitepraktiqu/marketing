"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TopicSection from "@/components/TopicSection";
import RoadmapSection from "@/components/RoadmapSection";
import AgendaSection from "@/components/AgendaSection";
import ExpertSection from "@/components/ExpertSection";
import CertificateSection from "@/components/CertificateSection";
import PricingSection from "@/components/PricingSection";
import TestimonialSection from "@/components/TestimonialSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ClosedRegistrationModal from "@/components/ClosedRegistrationModal";
import { useState, useEffect } from "react";

export default function Home() {
  const [isRegistrationClosed, setIsRegistrationClosed] = useState(false);

  useEffect(() => {
    // Open modal on load
    setIsRegistrationClosed(true);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-white text-slate-900 relative">
      <Navbar />
      <main>
        <HeroSection />
        <RoadmapSection />
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
      <ClosedRegistrationModal isOpen={isRegistrationClosed} onClose={() => setIsRegistrationClosed(false)} />
    </div>
  );
}
