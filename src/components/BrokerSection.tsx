import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { BROKER_DATA } from '../data/content';

interface BrokerSectionProps {
  onViewBrokerDetails: () => void;
}

export const BrokerSection: React.FC<BrokerSectionProps> = ({
  onViewBrokerDetails,
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      id="broker-recommendation"
      className="mb-24 md:mb-32 scroll-mt-24"
    >
      <div className="glass-panel glow-border rounded-2xl p-8 sm:p-10 md:p-14 lg:p-16 relative overflow-hidden group shadow-2xl">
        {/* Sapphire Glow Ambient Effect */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.08, 0.14, 0.08],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-0 left-0 w-96 h-96 bg-[#3B82F6] rounded-full blur-[120px] pointer-events-none"
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading & Advisory Description */}
          <div className="lg:col-span-6">
            {/* Sapphire Verified Badge */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="w-12 h-12 rounded-full bg-[#373a3a]/60 border border-[#3B82F6]/40 flex items-center justify-center mb-8 shadow-[0_0_15px_rgba(59,130,246,0.2)] cursor-pointer"
            >
              <ShieldCheck className="w-6 h-6 text-[#3B82F6]" />
            </motion.div>

            <h2 className="font-headline text-3xl sm:text-4xl lg:text-[40px] text-[#e1e3e2] font-bold mb-5 leading-tight tracking-tight">
              Looking for a Reliable Broker?
            </h2>

            <p className="font-body text-[#d0c6ab] text-base sm:text-lg leading-relaxed mb-8 text-opacity-90">
              Execution matters. We have identified a top-tier brokerage provider that meets our strict criteria for regulatory compliance, trading infrastructure, and institutional-grade liquidity access.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                id="broker-view-btn"
                className="btn-neo text-[#FFD700] font-headline text-xs sm:text-sm font-semibold uppercase tracking-[0.1em] px-7 sm:px-8 py-3.5 sm:py-4 rounded-lg border border-[#FFD700]/30 transition-all flex justify-center items-center gap-2 cursor-pointer shadow-lg"
              >
                <span>View Recommended Broker</span>
              </motion.button>
            </div>
          </div>

          {/* Right Column: Featured Broker Card Matching Screenshot */}
          <div className="lg:col-span-6">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="glass-panel border border-white/12 rounded-xl p-6 sm:p-8 bg-[#191c1c]/70 backdrop-blur-xl relative overflow-hidden shadow-2xl"
            >
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 p-3 bg-white/5 border-b border-l border-white/10 rounded-bl-xl">
                <span className="text-[10px] font-mono uppercase text-[#3B82F6] font-semibold tracking-wider flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-ping"></span>
                  Verified Institution
                </span>
              </div>

              {/* Broker Name & Regulation */}
              <div className="mb-6 pt-1">
                <h3 className="font-headline text-2xl sm:text-3xl text-white font-bold mb-1.5">
                  {BROKER_DATA.name}
                </h3>
                <p className="text-[#3B82F6] text-xs sm:text-sm font-headline font-semibold uppercase tracking-wider">
                  {BROKER_DATA.regulation}
                </p>
              </div>

              {/* Trading Features List with Sapphire Icons */}
              <ul className="space-y-4 font-body text-sm sm:text-base text-[#d0c6ab]">
                {BROKER_DATA.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    whileHover={{ x: 3 }}
                    className="flex items-start gap-3.5 group transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#3B82F6] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-white font-medium text-sm sm:text-[15px]">
                        {feature.title}
                      </div>
                      <div className="text-xs text-[#d0c6ab]/70 mt-0.5">
                        {feature.description}
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
