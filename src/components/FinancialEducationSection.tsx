import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { createPortal } from 'react-dom';
import { ArrowUpRight, BookOpen, Compass, UserRound, X } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

const programs = [
  {
    number: '01',
    title: 'Beginner Lessons',
    description: 'Build your understanding of forex fundamentals.',
    introduction: 'Start with the language and mechanics of the forex market.',
    price: '$300',
    details: [
      {
        heading: 'Margin & Leverage',
        description: 'Understand how margin works, what leverage changes in a trading account, and why leverage can magnify both gains and losses. Learn the relationship between position size, required margin and available equity.',
      },
      {
        heading: 'Pips, Lots, Orders & Spread',
        description: 'Learn how price movement is measured, how lot size affects exposure, and how common order types work. Understand the spread and how trading costs can affect an entry and exit.',
      },
      {
        heading: 'Market Hours & Types of Traders',
        description: 'Explore the major forex trading sessions, how market activity can vary throughout the day, and the differences between common trading styles such as scalping, day trading and swing trading.',
      },
      {
        heading: 'Introduction to Candlesticks',
        description: 'Read the information contained in candle bodies and wicks. Understand open, high, low and close, and learn how individual candles and simple formations can describe price behaviour.',
      },
      {
        heading: 'Risk Management',
        description: 'Learn why protecting capital matters. Cover risk per trade, stop-loss placement, risk-to-reward, position sizing, trading plans and the importance of managing emotions.',
      },
    ],
  },
  {
    number: '02',
    title: 'Professional Strategy Session',
    description: 'Learn a structured chart-analysis approach for Gold, Nasdaq, and US30.',
    introduction: 'Move from learning the basics to following a repeatable chart-analysis process.',
    price: '$800',
    details: [
      {
        heading: 'Market Context',
        description: 'Assess the broader price picture before focusing on an individual entry. Learn to organise chart observations instead of reacting to every price movement.',
      },
      {
        heading: 'Chart Structure',
        description: 'Practice identifying directional movement, consolidation, key swing points and areas where price has previously reacted.',
      },
      {
        heading: 'Key Levels & Zones',
        description: 'Learn a consistent way to mark relevant support and resistance areas and evaluate whether a level is meaningful in the current market context.',
      },
      {
        heading: 'Trade Setup Criteria',
        description: 'Work through how to define a potential setup, what conditions should be present before considering a trade, and what would invalidate the idea.',
      },
      {
        heading: 'Entry, Exit & Risk Planning',
        description: 'Build a trade plan that considers entry logic, stop-loss placement, target areas, position sizing and risk-to-reward before execution.',
      },
    ],
  },
  {
    number: '03',
    title: 'Private Mentorship',
    description: 'One-to-one private mentorship with lifetime coaching.',
    introduction: 'Individual support for traders who want a more personal learning experience.',
    price: '$2,500',
    details: [
      {
        heading: 'Personal Learning Direction',
        description: 'Discuss your current level, learning priorities and areas that need more attention.',
      },
      {
        heading: 'Guided Chart Practice',
        description: 'Work through chart observations and trade ideas with an emphasis on reasoning, planning and discipline.',
      },
      {
        heading: 'Strategy Development',
        description: 'Strengthen your ability to apply a structured approach and review whether your decisions followed your plan.',
      },
      {
        heading: 'Ongoing Coaching',
        description: 'Lifetime coaching is included as stated in the programme offer. The format, access channels, response times and scheduling should be confirmed in enrolment terms before payment.',
      },
    ],
  },
];

type EducationProgram = (typeof programs)[number];

export const FinancialEducationSection: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState<EducationProgram | null>(null);

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        id="financial-education"
        className="mb-24 scroll-mt-24 md:mb-32"
      >
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#111414]/80 p-6 shadow-2xl sm:p-9 md:p-12">
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.04, 0.08, 0.04] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
            className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full bg-[#FFD700] blur-[110px]"
          />

          <div className="relative z-10">
            <div className="mb-9 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <div className="mb-4 flex items-center gap-2 text-[#FFD700]">
                  <BookOpen className="h-4 w-4" />
                  <span className="font-headline text-xs font-semibold uppercase tracking-[0.18em]">
                    Financial Education Service
                  </span>
                </div>
                <h2 className="mb-4 font-headline text-3xl font-bold leading-tight tracking-tight text-[#e1e3e2] sm:text-4xl lg:text-5xl">
                  Learn the foundations.
                  <span className="block font-serif-accent font-normal italic text-[#d0c6ab]">
                    Develop your trading process.
                  </span>
                </h2>
                <p className="font-body text-base leading-relaxed text-[#d0c6ab]/90 sm:text-lg">
                  Practical, structured forex education to help you understand market mechanics,
                  build a chart-analysis process, and strengthen your approach to trading risk.
                </p>
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-3 cursor-pointer">
              {programs.map((program, index) => {
                const { number, title, description, price } = program;
                return (
                  <motion.article
                    key={number}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.12 }}
                    whileHover={{ y: -4 }}
                    role="link"
                    tabIndex={0}
                    aria-label={`Enquire about ${title} on WhatsApp`}
                    onClick={() => {
                      const text = encodeURIComponent(
                        `Hello, I'm interested in the Forex Trading Training Programme: ${title} (${price} USD). Please share enrollment details.`
                      );
                      window.open(`https://wa.me/15632800598?text=${text}`, '_blank', 'noopener,noreferrer');
                    }}
                    onKeyDown={(event) => {
                      if (event.target !== event.currentTarget) return;
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        const text = encodeURIComponent(
                          `Hello, I'm interested in the Forex Trading Training Programme: ${title} (${price} USD). Please share enrollment details.`
                        );
                        window.open(`https://wa.me/15632800598?text=${text}`, '_blank', 'noopener,noreferrer');
                      }
                    }}
                    className="flex min-h-[245px] cursor-pointer flex-col rounded-xl border border-white/10 bg-white/[0.025] p-6 transition-colors hover:border-[#FFD700]/30 hover:bg-white/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFD700] sm:p-7"
                  >
                    <div className="mb-7 flex items-center justify-between">
                      <span className="font-headline text-xs font-semibold tracking-[0.16em] text-[#FFD700]">
                        {number}
                      </span>
                    </div>
                    <h3 className="mb-2 font-headline text-xl font-semibold text-[#e1e3e2]">
                      {title}
                    </h3>
                    <p className="mb-6 flex-1 font-body text-sm leading-relaxed text-[#d0c6ab]/80">
                      {description}
                    </p>
                    <div className="flex items-baseline gap-2 border-t border-white/10 pt-4">
                      <span className="font-headline text-2xl font-semibold text-white">{price}</span>
                      <span className="font-headline text-[10px] font-medium uppercase tracking-[0.16em] text-[#d0c6ab]/60">
                        USD
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        setSelectedProgram(program);
                      }}
                      className="mt-5 cursor-pointer inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#FFD700]/30 bg-[#FFD700]/[0.06] px-4 py-3 font-headline text-xs font-semibold uppercase tracking-[0.12em] text-[#FFD700] transition-colors hover:border-[#FFD700]/60 hover:bg-[#FFD700]/[0.12] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFD700]"
                    >
                      View Details
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </motion.article>
                );
              })}
            </div>

            <div className="mt-8 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center">
              <p className="max-w-xl font-body text-sm leading-relaxed text-[#d0c6ab]/70">
                Interested in a program? Contact us on WhatsApp for enrollment details.
              </p>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="https://wa.me/15632800598"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#FFD700]/40 bg-[#FFD700]/10 px-6 py-3 font-headline text-xs font-semibold uppercase tracking-[0.12em] text-[#FFD700] transition-colors hover:bg-[#FFD700]/15"
              >
                Enquire on WhatsApp
                <ArrowUpRight className="h-4 w-4" />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.section>

      {createPortal(
        <AnimatePresence>
          {selectedProgram && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onMouseDown={(event) => {
                if (event.target === event.currentTarget) setSelectedProgram(null);
              }}
              className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-xl"
            >
              <motion.div
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.98 }}
                transition={{ duration: 0.22 }}
                role="dialog"
                aria-modal="true"
                aria-labelledby="education-program-title"
                className="glass-panel glow-border relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-[#111414]/95 p-6 shadow-[0_25px_70px_rgba(0,0,0,0.95)] sm:p-8"
              >
                <button
                  type="button"
                  onClick={() => setSelectedProgram(null)}
                  aria-label="Close program details"
                  className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors hover:bg-white/15 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="mb-6 flex items-start gap-4 pr-10">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#FFD700]/30 bg-[#FFD700]/10 text-[#FFD700]">
                    {/* <selectedProgram.number className="h-6 w-6" /> */}
                    {selectedProgram.number}
                  </div>
                  <div>
                    <p className="mb-1 font-headline text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FFD700]">
                    Forex Trading Training Programme
                    </p>
                    <h3 id="education-program-title" className="font-headline text-xl font-bold text-white sm:text-2xl">
                      {selectedProgram.title}
                    </h3>
                  </div>
                </div>

                <p className="mb-5 font-body text-sm leading-relaxed text-[#d0c6ab]">
                  {selectedProgram.introduction}
                </p>

                <div className="mb-7 flex items-center justify-between rounded-lg border border-[#FFD700]/40 bg-[#FFD700]/10 px-4 py-3">
                  <span className="font-headline text-[10px] font-semibold uppercase tracking-[0.16em] text-[#d0c6ab]">
                    Programme Fee
                  </span>
                  <span className="font-headline text-lg font-bold text-[#FFD700]">
                    {selectedProgram.price} USD
                  </span>
                </div>

                <h4 className="mb-4 font-headline text-xs font-bold uppercase tracking-[0.16em] text-[#FFD700]">
                  {selectedProgram.number === '01'
                    ? 'What You Will Learn'
                    : selectedProgram.number === '02'
                      ? 'The Session Focuses On'
                      : 'One-to-One Private Mentorship · Lifetime Coaching'}
                </h4>

                {selectedProgram.number === '03' && (
                  <p className="mb-5 font-body text-sm leading-relaxed text-[#d0c6ab]">
                    Private mentorship is designed around individual guidance rather than a one-size-fits-all classroom experience. It is intended for participants who want to develop their understanding with direct support and a longer-term coaching relationship.
                  </p>
                )}

                <ol className="space-y-4">
                  {selectedProgram.details.map((detail, index) => (
                    <li key={detail.heading} className="flex gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#FFD700]/30 bg-[#FFD700]/10 font-headline text-[10px] font-semibold text-[#FFD700]">
                        {index + 1}
                      </span>
                      <div>
                        <h5 className="mb-1 font-headline text-sm font-semibold text-[#FFD700]">
                          {detail.heading}
                        </h5>
                        <p className="font-body text-xs leading-relaxed text-[#d0c6ab]/90 sm:text-sm">
                          {detail.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>

                <div className="mt-7 flex justify-end border-t border-white/10 pt-5">
                  <a
                    href={`https://wa.me/15632800598?text=${encodeURIComponent(`Hello, I'm interested in the ${selectedProgram.title} programme (${selectedProgram.price} USD). Please share enrollment details.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[#FFD700]/40 bg-[#FFD700]/10 px-5 py-3 font-headline text-xs font-semibold uppercase tracking-[0.1em] text-[#FFD700] transition-colors hover:bg-[#FFD700]/15"
                  >
                    Enquire on WhatsApp
                    <WhatsAppIcon className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};
