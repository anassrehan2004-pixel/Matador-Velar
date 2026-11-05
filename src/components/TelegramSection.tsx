import React from 'react';
import { motion } from 'motion/react';
import { TelegramIcon } from './TelegramIcon';

interface TelegramSectionProps {
  onJoinTelegram: () => void;
}

export const TelegramSection: React.FC<TelegramSectionProps> = ({
  onJoinTelegram,
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      id="telegram-community"
      className="mb-24 md:mb-32 relative scroll-mt-24"
    >
      {/* Editorial Number Watermark 02
      <motion.div
        animate={{
          y: [-4, 4, -4],
          opacity: [0.03, 0.055, 0.03],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="editorial-number bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4 select-none pointer-events-none"
        aria-hidden="true"
      >
        02
      </motion.div> */}

      <div className="glass-panel glow-border rounded-2xl p-8 sm:p-12 md:p-16 text-center relative z-10 flex flex-col items-center shadow-2xl overflow-hidden">
        {/* Background Radial Glow */}
        <motion.div
          animate={{
            opacity: [0.04, 0.08, 0.04],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 bg-gradient-to-b from-[#FFD700] via-transparent to-transparent pointer-events-none"
        />

        <motion.div
          whileHover={{ scale: 1.1, rotate: 6 }}
          className="mb-6 text-[#FFD700]"
        >
          <TelegramIcon className="h-9 w-9" />
        </motion.div>

        {/* Heading */}
        <h2 className="font-headline text-3xl sm:text-4xl lg:text-[40px] text-[#e1e3e2] font-bold mb-5 leading-tight tracking-tight max-w-3xl">
          Join Our Official Telegram Community
        </h2>

        {/* Description */}
        <p className="font-body text-[#d0c6ab] text-base sm:text-lg leading-relaxed max-w-2xl mb-10 text-opacity-90">
          Stay informed with our latest market perspectives, structural insights, and macro analysis. Connect with a community of sophisticated market participants navigating global financial landscapes.
        </p>

        {/* Action Button */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          id="telegram-join-btn"
          onClick={onJoinTelegram}
          className="glass-panel text-[#e1e3e2] hover:text-white font-headline text-xs sm:text-sm font-semibold uppercase tracking-[0.1em] px-8 sm:px-12 py-4 rounded-xl hover:bg-white/10 hover:border-[#FFD700]/40 transition-all duration-300 flex items-center gap-3 border border-white/20 cursor-pointer shadow-xl group"
        >
          <span>Join Telegram Community</span>
        </motion.button>
      </div>
    </motion.section>
  );
};
