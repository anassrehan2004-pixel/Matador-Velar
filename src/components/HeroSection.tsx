import React, { useEffect } from 'react';
import { AnimatePresence, motion, useSpring, useTransform } from 'motion/react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Globe2, X } from 'lucide-react';
import { AumPortfolioSimulator } from './AumPortfolioSimulator';

const HeroImage = new URL('../../assets/hero image.jpg', import.meta.url).href;

const aumSlides = [
  {
    eyebrow: 'AUM SNAPSHOT',
    title: 'Capital in perspective.',
    description: 'A snapshot of assets under management.',
    tags: ['$5.8M AUM', 'Portfolio management'],
  },
  {
    eyebrow: 'MARKET ACCESS',
    title: 'A connected view of markets.',
    description: 'Explore market access across FX, precious metals, indices, and energy.',
    tags: ['FX', 'Precious metals', 'Indices', 'Energy'],
  },
  {
    eyebrow: 'OUR APPROACH',
    title: 'Built around your objectives.',
    description: 'Personalized portfolio construction guided by analytical frameworks and long-term objectives.',
    tags: ['Portfolio construction', 'Risk-aware'],
  },
];

interface HeroSectionProps {
  onExploreFund: () => void;
  onFindBroker: () => void;
  onOpenTelegram: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreFund,
  onFindBroker,
  onOpenTelegram,
}) => {
  const animatedAum = useSpring(0, { stiffness: 55, damping: 30 });
  const formattedAum = useTransform(animatedAum, (value) => `$${value.toFixed(1)}M`);
  const [aumExplorerOpen, setAumExplorerOpen] = React.useState(false);
  const [activeAumSlide, setActiveAumSlide] = React.useState(0);

  useEffect(() => {
    animatedAum.set(5.8);
  }, [animatedAum]);

  const changeAumSlide = (direction: -1 | 1) => {
    setActiveAumSlide((current) => (current + direction + aumSlides.length) % aumSlides.length);
  };

  return (
    <section
      id="hero-section"
      className="min-h-[100%] lg:min-h-[100%] flex flex-col justify-center relative mb-24 md:mb-32 pt-8"
    >
      {/* Editorial Number Watermark 01 */}
      {/* <motion.div
        animate={{
          y: [-4, 4, -4],
          opacity: [0.03, 0.055, 0.03],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="editorial-number top-0 right-0 transform translate-x-1/4 -translate-y-1/4 select-none pointer-events-none"
        aria-hidden="true"
      >
        01
      </motion.div> */}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Typography & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 max-w-3xl"
        >
          {/* Main Headline */}
          <h1 className="font-headline text-4xl sm:text-5xl lg:text-[58px] xl:text-[64px] text-[#e1e3e2] mb-8 leading-[1.12] tracking-[-0.02em]">
            Matador Velar Commercial Brokers<br />
            <span className="text-[#d0c6ab] italic font-serif-accent font-normal tracking-normal text-3xl sm:text-4xl lg:text-[54px] xl:text-[60px] block mt-1">
              Trusted Trading Access.
            </span>
          </h1>

          {/* Body Description */}
          <p className="font-body text-[#d0c6ab] text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mb-10 text-opacity-90">
Matador Velar Commercial Brokers LLC is a Dubai-based company licensed under DED License No. 1344455.
The company provides institutional portfolio and capital management services and connects retail traders with
Tier-1 brokers          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 sm:gap-6 mb-8 items-center">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              id="hero-explore-fund-btn"
              href="#fund-management"
              onClick={(e) => {
                e.preventDefault();
                onExploreFund();
              }}
              className="btn-neo text-[#FFD700] font-headline text-xs sm:text-sm font-semibold px-7 sm:px-8 py-3.5 sm:py-4 rounded-full border border-[#FFD700]/40 flex items-center gap-2.5 cursor-pointer group"
            >
              <span>Explore Fund Management</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              id="hero-find-broker-btn"
              href="#broker-recommendation"
              onClick={(e) => {
                e.preventDefault();
                onFindBroker();
              }}
              className="glass-panel text-[#e1e3e2] font-headline text-xs sm:text-sm font-semibold uppercase tracking-[0.1em] px-7 sm:px-8 py-3.5 sm:py-4 rounded-full hover:bg-white/10 hover:border-white/25 transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <span>Find a Reliable Broker</span>
            </motion.a>
          </div>

          {/* Telegram Channel Link */}
          {/* <motion.button
            whileHover={{ x: 4 }}
            id="hero-telegram-link"
            onClick={onOpenTelegram}
            className="text-[#d0c6ab] hover:text-[#FFD700] font-body text-sm inline-flex items-center gap-2.5 transition-colors duration-300 py-1 group cursor-pointer"
          >
            <TelegramIcon className="w-4 h-4 text-[#FFD700]/80 group-hover:text-[#FFD700] transition-colors" />
            <span className="underline-offset-4 group-hover:underline">
              Join Our Official Telegram Community
            </span>
          </motion.button> */}
        </motion.div>

        {/* Right Column: Abstract Wave Institutional Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative w-full h-[360px] sm:h-[440px] lg:h-[480px] flex items-center justify-center"
        >          
          {/* Glass Card Container with Floating Levitation */}
          <div
            className="relative w-full h-full glass-panel rounded-2xl overflow-hidden glow-border shadow-[0_30px_70px_rgba(0,0,0,0.9)] group"
          >
            {/* Visual Image */}
            <img
              alt="Dubai skyline viewed from a private investment office"
              src={HeroImage}
              className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              loading="eager"
            />
            
            {/* Overlay Gradients */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0C0F0F] via-transparent to-[#FFD700]/10 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0C0F0F]/30 to-[#0C0F0F]/80 pointer-events-none"></div>

            {!aumExplorerOpen && (
              <AnimatePresence mode="wait">
              {!aumExplorerOpen ? (
                <button
                  key="aum-summary"
                  type="button"
                  onClick={() => setAumExplorerOpen(true)}
                  aria-label="Explore assets under management"
                  className="cursor-pointer glass-panel absolute bottom-5 left-5 z-10 rounded-xl border border-white/15 px-5 py-4 text-left shadow-2xl transition-colors hover:border-[#FFD700]/50 sm:bottom-7 sm:left-7 sm:px-6"
                >
                  <div className="mb-1.5 flex items-center gap-2">
                    <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
                    <span className="font-headline text-[10px] font-semibold uppercase tracking-[0.16em] text-[#d0c6ab]">
                      Assets Under Management
                    </span>
                    <ArrowUpRight className="ml-1 h-3.5 w-3.5 text-[#FFD700]" />
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
                  <span className="mt-1 block font-body text-[10px] text-[#d0c6ab]/65">
                    Open portfolio simulator
                  </span>
                </button>
              ) : (
                <motion.div
                  key="aum-explorer"
                  initial={{ opacity: 0, y: 12, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 12, scale: 0.97 }}
                  transition={{ duration: 0.25 }}
                  className="glass-panel absolute inset-3 z-20 flex flex-col overflow-hidden rounded-xl border border-white/15 p-5 shadow-2xl sm:inset-5 sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[#FFD700]">
                      <Globe2 className="h-4 w-4" />
                      <span className="font-headline text-[10px] font-semibold uppercase tracking-[0.17em]">
                        Portfolio Explorer
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setAumExplorerOpen(false)}
                      aria-label="Close portfolio explorer"
                      className="rounded-full border border-white/10 bg-white/5 p-2 text-[#d0c6ab] transition-colors hover:border-[#FFD700]/40 hover:text-white"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="relative mt-3 flex min-h-0 flex-1 items-center">
                    <motion.div
                      aria-hidden="true"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
                      className="pointer-events-none absolute right-[-24px] top-1/2 -translate-y-1/2 opacity-40 sm:right-[-8px]"
                    >
                      <svg viewBox="0 0 220 220" className="h-44 w-44 text-emerald-300 sm:h-56 sm:w-56">
                        <circle cx="110" cy="110" r="87" fill="rgba(12,15,15,0.65)" stroke="currentColor" strokeOpacity=".35" />
                        <ellipse cx="110" cy="110" rx="40" ry="87" fill="none" stroke="currentColor" strokeOpacity=".35" />
                        <ellipse cx="110" cy="110" rx="70" ry="87" fill="none" stroke="currentColor" strokeOpacity=".2" />
                        <ellipse cx="110" cy="110" rx="87" ry="31" fill="none" stroke="currentColor" strokeOpacity=".3" />
                        <ellipse cx="110" cy="110" rx="87" ry="60" fill="none" stroke="currentColor" strokeOpacity=".2" />
                        <path d="M36 83c28 17 53 24 74 21 29-4 49-21 73-18M38 139c30-16 51-22 75-18 25 4 46 20 69 17" fill="none" stroke="#FFD700" strokeOpacity=".5" strokeWidth="1.5" />
                        <circle cx="71" cy="103" r="3" fill="#FFD700" />
                        <circle cx="145" cy="68" r="3" fill="#34d399" />
                        <circle cx="151" cy="143" r="3" fill="#34d399" />
                      </svg>
                    </motion.div>

                    <motion.div
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={0.12}
                      onDragEnd={(_, info) => {
                        if (info.offset.x < -45 || info.velocity.x < -350) changeAumSlide(1);
                        if (info.offset.x > 45 || info.velocity.x > 350) changeAumSlide(-1);
                      }}
                      className="relative z-10 w-full cursor-grab touch-pan-y active:cursor-grabbing"
                    >
                      <AnimatePresence mode="wait" initial={false}>
                        <motion.div
                          key={activeAumSlide}
                          initial={{ opacity: 0, x: 24 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -24 }}
                          transition={{ duration: 0.2 }}
                          className="max-w-[82%]"
                          aria-live="polite"
                        >
                          <p className="mb-3 font-headline text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FFD700]">
                            {aumSlides[activeAumSlide].eyebrow}
                          </p>
                          {activeAumSlide === 0 ? (
                            <>
                              <motion.p className="font-headline text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                                {formattedAum}
                              </motion.p>
                              <h3 className="mt-1 font-headline text-sm font-medium text-[#d0c6ab]">
                                Assets under management
                              </h3>
                              <p className="mt-3 font-body text-sm leading-relaxed text-[#d0c6ab]/80">
                                {aumSlides[activeAumSlide].description}
                              </p>
                            </>
                          ) : (
                            <>
                              <h3 className="font-headline text-2xl font-semibold leading-tight text-white sm:text-3xl">
                                {aumSlides[activeAumSlide].title}
                              </h3>
                              <p className="mt-3 font-body text-sm leading-relaxed text-[#d0c6ab]/80">
                                {aumSlides[activeAumSlide].description}
                              </p>
                            </>
                          )}
                          <div className="mt-4 flex flex-wrap gap-2">
                            {aumSlides[activeAumSlide].tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full border border-white/15 bg-black/20 px-2.5 py-1 font-headline text-[9px] uppercase tracking-[0.08em] text-[#d0c6ab]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </motion.div>
                  </div>

                  <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-3">
                    <span className="font-body text-[10px] text-[#d0c6ab]/65">
                      Swipe to explore
                    </span>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5" aria-label={`Slide ${activeAumSlide + 1} of ${aumSlides.length}`}>
                        {aumSlides.map((slide, index) => (
                          <button
                            key={slide.eyebrow}
                            type="button"
                            onClick={() => setActiveAumSlide(index)}
                            aria-label={`Show ${slide.eyebrow.toLowerCase()} slide`}
                            className={`h-1.5 rounded-full transition-all ${index === activeAumSlide ? 'w-5 bg-[#FFD700]' : 'w-1.5 bg-white/30 hover:bg-white/60'}`}
                          />
                        ))}
                      </div>
                      <button
                        type="button"
                        onClick={() => changeAumSlide(-1)}
                        aria-label="Previous portfolio insight"
                        className="rounded-full border border-white/15 p-1.5 text-[#d0c6ab] transition-colors hover:border-[#FFD700]/50 hover:text-[#FFD700]"
                      >
                        <ArrowLeft className="h-3.5 w-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => changeAumSlide(1)}
                        aria-label="Next portfolio insight"
                        className="rounded-full border border-[#FFD700]/40 bg-[#FFD700]/10 p-1.5 text-[#FFD700] transition-colors hover:bg-[#FFD700]/20"
                      >
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            )}
          </div>
          {aumExplorerOpen && (
            <AumPortfolioSimulator onClose={() => setAumExplorerOpen(false)} />
          )}
        </motion.div>
      </div>
    </section>
  );
};
