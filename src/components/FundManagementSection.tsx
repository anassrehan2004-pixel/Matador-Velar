import React from 'react';
import { motion } from 'motion/react';
import { Landmark } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FundManagementSectionProps {
  onScheduleConsultation: () => void;
  onOpenWhatsApp: () => void;
  onOpenCalculator: () => void;
}

export const FundManagementSection: React.FC<FundManagementSectionProps> = ({
  onScheduleConsultation,
  onOpenWhatsApp,
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      id="fund-management"
      className="mb-24 md:mb-32 scroll-mt-24"
    >
      {/* Main Glass Panel Card */}
      <div className="glass-panel glow-border rounded-2xl p-8 sm:p-10 md:p-12 lg:p-14 relative overflow-hidden group shadow-2xl">
        {/* Ambient Gold Glow Corner */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.09, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-[#FFD700] rounded-full blur-[110px] pointer-events-none"
        />

        {/* Side-by-Side Grid Layout: Text on Left, Dedicated Image Frame on Right */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Information & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Institutional Icon Badge */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-12 h-12 rounded-full bg-[#373a3a]/60 border border-[#FFD700]/30 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(255,215,0,0.15)] cursor-pointer"
            >
              <Landmark className="w-5 h-5 text-[#FFD700]" />
            </motion.div>

            {/* Heading */}
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-[40px] text-[#e1e3e2] font-bold mb-5 leading-tight tracking-tight">
              Professional Fund Management for Serious Investors
            </h2>

            {/* Descriptive Text */}
            <p className="font-body text-[#d0c6ab] text-base sm:text-lg leading-relaxed mb-8 text-opacity-90">
              Our fund management services offer a highly personalized approach to portfolio construction. We leverage rigorous analytical frameworks and proven methodologies to help you navigate complex markets and align your capital with your long-term strategic objectives.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 sm:gap-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                id="fund-schedule-btn"
                onClick={onScheduleConsultation}
                className="btn-neo text-[#FFD700] font-headline text-xs sm:text-sm font-semibold uppercase tracking-[0.1em] px-7 sm:px-8 py-3.5 sm:py-4 rounded-lg border border-[#FFD700]/30 transition-all flex justify-center items-center gap-2 cursor-pointer shadow-lg"
              >
                <span>Schedule a Private Portfolio Consultation</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                id="fund-whatsapp-btn"
                onClick={onOpenWhatsApp}
                className="glass-panel text-[#e1e3e2] font-headline text-xs sm:text-sm font-semibold uppercase tracking-[0.1em] px-6 sm:px-7 py-3.5 sm:py-4 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex justify-center items-center gap-2.5 cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </motion.button>
            </div>
          </div>

          {/* Right Column: Dedicated, Distinct, Crisp Image Card */}
          <div className="lg:col-span-5 relative w-full">
            <motion.div
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.4 }}
              className="relative w-full h-[320px] sm:h-[380px] lg:h-[420px] rounded-2xl overflow-hidden border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group/img"
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsm6rctSs4JoHshBRZp3PsLtbBINsdbwVORlVORtCKVRrL1wpz5H40WPbp5NJoEZJ4d9E3oExLNP6ZqBV4rp3TY6_rOL1N1pXo4RG9aodEQ6sBbcr8kvpYWN_jRZEyYSRQLzgokQqPed5xsyKf6lWuCvLMrd23hZXf_1Q7gm7_R-8yrAAyut9mAwJxypiR4T4s5rO4Kx9GppNdwdlguvqn27U4bwyJ80JQeaYibsaSTAAhvteabgTW"
                alt="Professional wealth advisor in private office"
                className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700 ease-out brightness-90 contrast-105"
                referrerPolicy="no-referrer"
              />
              {/* Refined Edge Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0F0F]/60 via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
