import React, { useState } from 'react';
import { motion } from 'motion/react';
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
import { ConsultationModal } from './components/ConsultationModal';
import { WhatsAppModal } from './components/WhatsAppModal';
import { BrokerModal } from './components/BrokerModal';
import { TelegramModal } from './components/TelegramModal';
import { StrategyCalculatorModal } from './components/StrategyCalculatorModal';
import { LegalModal } from './components/LegalModal';

export default function App() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [brokerOpen, setBrokerOpen] = useState(false);
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'enrollment' | null>(null);

  const handleOpenWhatsApp = () => {
    window.open('https://wa.me/15632800598', '_blank', 'noopener,noreferrer');
  };

  const handleOpenTelegram = () => {
    window.open('https://telegram.org', '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#0C0F0F] text-[#e1e3e2] antialiased min-h-screen void-bg relative overflow-x-hidden selection:bg-[#FFD700] selection:text-[#0C0F0F]">
      {/* Ambient Background Dynamic Floating Glow Orbs */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-30 mix-blend-screen overflow-hidden">
        <motion.div
          animate={{
            x: [0, 35, -20, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.12, 0.92, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-[-10%] left-[-8%] w-[60%] h-[60%] rounded-full bg-[#3B82F6] blur-[150px]"
        />
        <motion.div
          animate={{
            x: [0, -45, 25, 0],
            y: [0, 35, -30, 0],
            scale: [1, 1.15, 0.88, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-[-10%] right-[-8%] w-[55%] h-[55%] rounded-full bg-[#FFD700] opacity-20 blur-[170px]"
        />
        <motion.div
          animate={{
            x: [0, 25, -30, 0],
            y: [0, -20, 30, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-[40%] right-[15%] w-[40%] h-[40%] rounded-full bg-[#3B82F6] opacity-15 blur-[140px]"
        />
      </div>

      {/* Floating Island Navigation */}
      <Navbar
        onOpenConsultation={() => setConsultationOpen(true)}
        onOpenWhatsApp={handleOpenWhatsApp}
        onOpenTelegram={handleOpenTelegram}
      />

      {/* Main Content Layout */}
      <main className="relative z-10 pt-[140px] md:pt-[160px] pb-16 md:pb-24 px-4 sm:px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto">
        {/* Hero Section */}
        <HeroSection
          onExploreServices={() => scrollToSection('services')}
          onFindBroker={() => scrollToSection('broker-recommendation')}
        />

        <PortfolioSimulatorSection />
        <ServicesSection />
        <ProcessSection />

        {/* Broker Recommendation Section */}
        <BrokerSection
          onViewBrokerDetails={() => setBrokerOpen(true)}
        />

        {/* Telegram Community Section */}
        <TelegramSection
          onJoinTelegram={handleOpenTelegram}
        />

                <FinancialEducationSection />

        {/* Final CTA Section */}
        <FinalCTASection
          onScheduleConsultation={() => setConsultationOpen(true)}
          onOpenWhatsApp={handleOpenWhatsApp}
          onOpenTelegram={handleOpenTelegram}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
        onOpenEnrollment={() => setLegalModalType('enrollment')}
      />

      {/* Interactive Modals & Screens */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />

      <BrokerModal
        isOpen={brokerOpen}
        onClose={() => setBrokerOpen(false)}
        onOpenConsultation={() => setConsultationOpen(true)}
      />

      <StrategyCalculatorModal
        isOpen={calculatorOpen}
        onClose={() => setCalculatorOpen(false)}
        onOpenConsultation={() => setConsultationOpen(true)}
      />

      <LegalModal
        isOpen={legalModalType !== null}
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
