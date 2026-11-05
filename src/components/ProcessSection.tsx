import React from 'react';
import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    title: 'Mandate Briefing & Discovery',
    description: 'We evaluate your liquidity requirements, risk tolerance, and profit objectives.',
  },
  {
    number: '02',
    title: 'Framework & Risk Parameter Agreement',
    description: 'We build a tailored mandate outlining explicit drawdown caps, target benchmarks, and profit split structures.',
  },
  {
    number: '03',
    title: 'Desk Setup & Execution Strategy',
    description: 'Account structuring with institutional counterparties or client-preferred execution platforms.',
  },
  {
    number: '04',
    title: 'Ongoing Oversight & Performance Reporting',
    description: 'Active position monitoring, regular equity updates, and transparent reporting.',
  },
];

export const ProcessSection: React.FC = () => (
  <motion.section
    id="process"
    aria-labelledby="process-title"
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    className="mb-24 scroll-mt-28 md:mb-32"
  >
    <div className="glass-panel glow-border relative overflow-hidden rounded-2xl p-7 sm:p-10 md:p-12">
      <div className="pointer-events-none absolute -right-20 -top-32 h-72 w-72 rounded-full bg-[#3B82F6]/10 blur-[100px]" />
      <div className="relative">
        <h2 id="process-title" className="font-headline text-3xl sm:text-4xl lg:text-[40px] text-[#e1e3e2] font-bold mb-5 leading-tight tracking-tight">
          How an Engagement Works
        </h2>
        <p className="mt-1 font-body text-sm text-[#d0c6ab]/75">
          A clear, four-step onboarding process.
        </p>

        <ol className="relative mt-9 grid gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, index) => (
            <motion.li
              key={step.number}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="border-t border-[#d0c6ab]/25 pt-4"
            >
              <p className="font-headline text-[11px] font-semibold tracking-[0.12em] text-[#FFD700]">
                {step.number}
              </p>
              <h3 className="mt-3 font-headline text-base font-semibold leading-snug text-white">
                {step.title}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-[#d0c6ab]/80">
                {step.description}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </div>
  </motion.section>
);
