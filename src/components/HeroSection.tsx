import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, useSpring, useTransform } from 'motion/react';

const HeroImage = new URL('../../assets/hero image.jpg', import.meta.url).href;

interface HeroSectionProps {
  onOpenWhatsApp: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenWhatsApp,
}) => {
  const animatedAum = useSpring(0, { stiffness: 55, damping: 30 });
  const formattedAum = useTransform(animatedAum, (value) => `$${value.toFixed(1)}M`);

  useEffect(() => {
    animatedAum.set(5.8);
  }, [animatedAum]);

  return (
    <section
      id="hero-section"
      className="relative mb-24 flex min-h-[100%] flex-col justify-center pt-8 lg:min-h-[100%] md:mb-32"
    >
      <div className="relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl lg:col-span-7"
        >
          <h1 className="mb-8 font-headline text-4xl leading-[1.12] tracking-[-0.02em] text-[#e1e3e2] sm:text-5xl lg:text-[58px] xl:text-[64px]">
            Strategic Commercial Brokerage &amp; Portfolio Advisory in Dubai
          </h1>

          <p className="mb-10 max-w-2xl font-body text-base leading-relaxed text-[#d0c6ab] text-opacity-90 sm:text-lg lg:text-xl">
            We bridge private capital, corporate treasuries, and high-net-worth investors with structured regional deal flow and high-yield asset allocation channels.
          </p>

          <div className="mb-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-6">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              id="hero-explore-fund-btn"
              type="button"
              onClick={onOpenWhatsApp}
              className="btn-neo group flex cursor-pointer items-center gap-2 rounded-full border border-[#FFD700]/40 px-6 py-3.5 font-headline !text-[12px] font-semibold text-[#FFD700] sm:px-8 sm:py-4 sm:text-sm"
            >
              <span>Request a Private Mandate Briefing</span>
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              id="hero-find-broker-btn"
              href="#services"
              className="glass-panel flex cursor-pointer items-center gap-2 rounded-full px-6 py-3.5 text-center font-headline !text-[12px] font-semibold tracking-[0.1em] text-[#e1e3e2] transition-all duration-300 hover:border-white/25 hover:bg-white/10 sm:px-8 sm:py-4 sm:text-sm"
            >
              <span>View Portfolio Advisory Services</span>
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex h-[360px] w-full items-center justify-center sm:h-[440px] lg:col-span-5 lg:h-[480px]"
        >
          <div className="glass-panel glow-border group relative h-full w-full overflow-hidden rounded-2xl shadow-[0_30px_70px_rgba(0,0,0,0.9)]">
            <img
              alt="Dubai skyline viewed from a private investment office"
              src={HeroImage}
              className="h-full w-full object-cover opacity-85 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
              loading="eager"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#0C0F0F] via-transparent to-[#FFD700]/10" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0C0F0F]/30 to-[#0C0F0F]/80" />

            <div className="glass-panel absolute bottom-5 left-5 z-10 rounded-xl border border-white/15 px-5 py-4 shadow-2xl sm:bottom-7 sm:left-7 sm:px-6">
              <div className="mb-1.5 flex items-center gap-2">
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
                <span className="font-headline text-[10px] font-semibold uppercase tracking-[0.16em] text-[#d0c6ab]">
                  Assets Under Management
                </span>
              </div>
              <div className="flex items-end gap-3">
                <motion.span className="w-[5.6ch] font-headline text-3xl font-semibold tabular-nums tracking-tight text-white sm:text-4xl">
                  {formattedAum}
                </motion.span>
                <svg
                  viewBox="0 0 84 28"
                  fill="none"
                  className="mb-1 h-7 w-[72px] text-[#FFD700] sm:w-[84px]"
                  aria-hidden="true"
                >
                  <motion.path
                    d="M2 23L16 17L27 20L40 10L51 14L64 5L82 2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0.4 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.4, delay: 1, ease: 'easeOut' }}
                  />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
