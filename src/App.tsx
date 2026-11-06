import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FinancialEducationSection } from './components/FinancialEducationSection';
import { PortfolioSimulatorSection } from './components/PortfolioSimulatorSection';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { BrokerSection } from './components/BrokerSection';
import { TelegramSection } from './components/TelegramSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';

export default function App() {
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'enrollment' | null>(null);

  const handleOpenWhatsApp = () => {
    window.open('https://wa.me/15632800598', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-[#0C0F0F] text-[#e1e3e2] antialiased min-h-screen void-bg relative overflow-x-hidden selection:bg-[#FFD700] selection:text-[#0C0F0F]">
      {/* Floating Island Navigation */}
      <Navbar
        onOpenWhatsApp={handleOpenWhatsApp}
      />

      {/* Main Content Layout */}
      <main className="relative z-10 pt-[140px] md:pt-[160px] pb-16 md:pb-24 px-4 sm:px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto">
        {/* Hero Section */}
        <HeroSection
          onOpenWhatsApp={handleOpenWhatsApp}
        />

        <PortfolioSimulatorSection />
        <ServicesSection />
        <ProcessSection />

        {/* Broker Recommendation Section */}
        <BrokerSection />

        {/* Telegram Community Section */}
        <TelegramSection />

                <FinancialEducationSection />

        {/* Final CTA Section */}
        <FinalCTASection />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
        onOpenEnrollment={() => setLegalModalType('enrollment')}
      />

      <LegalModal
        isOpen={legalModalType !== null}
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
