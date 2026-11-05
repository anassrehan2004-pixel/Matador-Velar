import React from 'react';
import { motion } from 'motion/react';
import { TelegramIcon } from './TelegramIcon';

interface FinalCTASectionProps {
  onScheduleConsultation: () => void;
  onOpenWhatsApp?: () => void;
  onOpenTelegram: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({
  onScheduleConsultation,
  onOpenTelegram,
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      id="final-cta"
      className="mb-16 md:mb-24"
    >
      <div className="glass-panel glow-border rounded-2xl p-8 sm:p-12 md:p-14 text-center relative overflow-hidden shadow-2xl">
        {/* Subtle gold gradient bottom overlay */}
        <motion.div
          animate={{
            opacity: [0.06, 0.12, 0.06],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 bg-gradient-to-t from-[#FFD700] via-transparent to-transparent pointer-events-none"
        />

        <h2 className=" mb-8 relative z-10 font-headline text-3xl sm:text-4xl lg:text-[40px] text-[#e1e3e2] font-bold mb-5 leading-tight tracking-tight">
          Ready to Discuss Your Portfolio?
        </h2>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 relative z-10">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            id="final-schedule-btn"
            onClick={onScheduleConsultation}
            className="btn-neo text-[#FFD700] font-headline text-xs sm:text-sm font-semibold uppercase tracking-[0.1em] px-7 sm:px-8 py-3.5 sm:py-4 rounded-lg border border-[#FFD700]/30 transition-all cursor-pointer shadow-lg"
          >
            <span>Schedule a Private Portfolio Consultation</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            id="final-telegram-btn"
            onClick={onOpenTelegram}
            className="glass-panel text-[#e1e3e2] font-headline text-xs sm:text-sm font-semibold uppercase tracking-[0.1em] px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center gap-2 cursor-pointer"
          >
            <TelegramIcon className="w-4 h-4 text-[#FFD700]" />
            <span>Join Our Official Telegram Community</span>
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};
