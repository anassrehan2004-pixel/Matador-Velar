import { BrokerFeature, StrategyDetail, TelegramPost } from '../types';

export const BROKER_DATA = {
  name: "Equiti Capital Prime / Multi-Asset Prime",
  regulation: "DFSA (Dubai) • FCA (UK) • ASIC (Australia) Regulated",
  licenseInfo: "Category 1 / Tier-1 Institutional Prudential Supervision",
  websiteUrl: "https://www.equiti.com",
  features: [
    {
      title: "Direct Equinix LD4 / NY4 Low Latency Execution",
      description: "Sub-millisecond trade routing with direct fiber cross-connects to primary institutional liquidity providers.",
      highlight: "Execution: <12ms average"
    },
    {
      title: "Tier-1 Bank Segregated Custody Accounts",
      description: "Client assets held under strict statutory trust in leading international custodians (Standard Chartered, Barclays).",
      highlight: "100% Capital Segregation"
    },
    {
      title: "Institutional FIX Protocol 4.4 & Multi-Asset Liquidity",
      description: "Deep non-bank liquidity access across FX, Precious Metals, Global Indices, Energy, and Sovereign Debt.",
      highlight: "Raw Spreads from 0.0 Pips"
    }
  ] as BrokerFeature[],
  tradingSpecs: [
    { label: "FX Majors Spread", value: "0.0 - 0.2 pips (Raw)" },
    { label: "Gold (XAU/USD)", value: "1.1 cents tight spread" },
    { label: "Execution Model", value: "100% True DMA / STP (No Dealing Desk)" },
    { label: "Platforms", value: "MetaTrader 5, cTrader, FIX API, TradingView" },
    { label: "Leverage Range", value: "Up to 1:100 (Professional Elective)" },
    { label: "Supported Base Currencies", value: "USD, EUR, GBP, AED, CHF" }
  ]
};

export const STRATEGIES: StrategyDetail[] = [
  {
    id: "global-macro",
    title: "Global Macro Alpha Mandate",
    subtitle: "Tactical asset allocation across G10 currencies, sovereign rates, and commodities",
    targetReturn: "16.8% - 22.4% p.a.",
    sharpeRatio: "2.14",
    maxDrawdown: "-5.8%",
    minInvestment: "$250,000 USD",
    focus: ["G10 FX Differentials", "Precious Metals Arbitrage", "Energy Cycles", "Sovereign Yield Curves"],
    description: "Captures structural macro imbalances through proprietary quantitative models and institutional order flow analytics."
  },
  {
    id: "systematic-yield",
    title: "Quantitative Multi-Asset Yield",
    subtitle: "Market-neutral systematic strategies engineered for consistent capital preservation",
    targetReturn: "12.5% - 15.2% p.a.",
    sharpeRatio: "2.85",
    maxDrawdown: "-3.2%",
    minInvestment: "$100,000 USD",
    focus: ["Cross-Currency Basis Swaps", "Statistical Volatility Arbitrage", "Cash-and-Carry Spreads"],
    description: "Designed for family offices and institutional treasuries seeking superior risk-adjusted yields uncorrelated with public equities."
  },
  {
    id: "bespoke-private",
    title: "Bespoke Discretionary Mandate",
    subtitle: "Custom-tailored institutional execution for ultra-high-net-worth individual portfolios",
    targetReturn: "Bespoke Target",
    sharpeRatio: "Custom Benchmark",
    maxDrawdown: "Capped Risk Limits",
    minInvestment: "$1,000,000+ USD",
    focus: ["Private Direct Liquidity", "Hedging Complex Portfolios", "Off-Market Block Executions"],
    description: "Full dedicated portfolio manager oversight with weekly institutional committee debriefs and continuous liquidity access."
  }
];

export const TELEGRAM_POSTS: TelegramPost[] = [
  {
    id: "tg-1",
    time: "Today, 08:30 GST",
    category: "MACRO RADAR",
    title: "Central Bank Liquidity Divergence & GCC Capital Inflows",
    summary: "As global sovereign yields compress, Dubai DIFC institutional capital flows accelerate into real asset arbitrage. Key levels on XAU/USD and DXY breakdown.",
    views: "2,410",
    pinned: true
  },
  {
    id: "tg-2",
    time: "Yesterday, 16:45 GST",
    category: "STRUCTURAL INSIGHT",
    title: "Order Flow Liquidity Imbalance: Crude Oil & FX Crosses",
    summary: "Institutional positioning data reveals aggressive accumulation above key support zones. Proprietary volatility skew analysis attached for members.",
    views: "1,980"
  },
  {
    id: "tg-3",
    time: "15 Aug 2026",
    category: "PORTFOLIO BRIEF",
    title: "Weekly Risk Allocation & Algorithmic Strategy Review",
    summary: "All active mandates closed the week +1.4% net of fees with maximum drawdown contained within 0.18%. Read full risk metrics in our subscriber portal.",
    views: "3,120"
  }
];
