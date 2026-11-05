import React from 'react';
import { motion } from 'motion/react';

const pillars = [
  {
    number: '01',
    title: 'Multi-Asset Allocation & Market Exposure',
    target: 'Investors seeking structured access to global markets.',
    coverage: 'High-liquidity asset classes including Gold (XAUUSD), FX Majors, Global Indices (US100 / Nasdaq, US30), and Commodities.',
    deliverables: [
      'Customized asset weighting aligned with client liquidity horizons and risk appetite.',
      'Tactical market entry and exit models based on macroeconomic policy and algorithmic technical analysis.',
      'Structural hedging strategies to protect core holdings against broader market volatility.',
    ],
  },
  {
    number: '02',
    title: 'Risk Management & Capital Protection Frameworks',
    target: 'Principals who prioritize drawdown control over speculative risk.',
    deliverables: [
      'Defined Drawdown Limits: Pre-agreed percentage risk caps built into every advisory mandate.',
      'Dynamic Position Sizing: Volatility-adjusted lot sizing to smooth out equity curves during high-impact economic releases (FOMC, NFP, CPI).',
      'Capital Preservation Protocols: Automated stop-loss architecture and capital separation parameters.',
    ],
  },
  {
    number: '03',
    title: 'Corporate Treasury Yield & Surplus Liquidity Structuring',
    target: 'Business owners, CEOs, and corporate treasuries with unallocated working capital or operational reserves.',
    deliverables: [
      'Short-to-medium term yield optimization models for idle company reserves.',
      'Diversification strategies moving capital out of zero-yield operational accounts into structured active instruments.',
      'Flexible liquidity options allowing capital deployment without restricting corporate cash flow requirements.',
    ],
  },
  {
    number: '04',
    title: 'Discretionary Oversight & Multi-Account Execution Consulting',
    target: 'Family offices, private accounts, and sophisticated traders needing professional desk oversight.',
    deliverables: [
      'Multi-account structure setup with clear profit-share and risk allocation terms.',
      'Independent performance monitoring, reporting, and trade audit briefs.',
      'Crypto and multi-currency settlement options tailored to international capital flow requirements.',
    ],
  },
];

export const ServicesSection: React.FC = () => (
  <motion.section
    id="services"
    aria-labelledby="services-title"
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    className="mb-24 scroll-mt-28 md:mb-32"
  >
    <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h2 id="services-title" className="font-headline text-3xl sm:text-4xl lg:text-[40px] text-[#e1e3e2] font-bold mb-5 leading-tight tracking-tight">
          Core Advisory Pillars
        </h2>
        <p className="mt-1 font-body text-sm text-[#d0c6ab]/75">What we actually offer</p>
      </div>
      <p className="max-w-xs font-body text-sm leading-relaxed text-[#d0c6ab]/70">
        Four focused disciplines. One clearly defined mandate.
      </p>
    </div>

    <div className="grid gap-4 md:grid-cols-2">
      {pillars.map((pillar, index) => (
        <motion.article
          key={pillar.number}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45, delay: index * 0.07 }}
          className="glass-panel rounded-xl border border-white/10 p-6 sm:p-8"
        >
          <p className="mb-4 font-headline text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FFD700]">
            Pillar {pillar.number}
          </p>
          <h3 className="font-headline text-lg font-semibold leading-snug text-white">
            {pillar.title}
          </h3>
          <p className="mt-4 font-body text-sm leading-relaxed text-[#d0c6ab]/85">
            <span className="font-semibold text-[#e1e3e2]">Target: </span>
            {pillar.target}
          </p>
          {pillar.coverage && (
            <p className="mt-3 font-body text-sm leading-relaxed text-[#d0c6ab]/75">
              <span className="font-semibold text-[#e1e3e2]">Coverage: </span>
              {pillar.coverage}
            </p>
          )}
          <p className="mb-2 mt-5 font-headline text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FFD700]/90">
            What we deliver
          </p>
          <ul className="space-y-2.5">
            {pillar.deliverables.map((item) => (
              <li key={item} className="flex gap-2.5 font-body text-sm leading-relaxed text-[#d0c6ab]/85">
                <span aria-hidden="true" className="mt-1 text-[#FFD700]">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.article>
      ))}
    </div>
  </motion.section>
);
