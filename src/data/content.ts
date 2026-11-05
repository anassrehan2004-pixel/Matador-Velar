import { BrokerFeature } from '../types';

export const BROKER_DATA = {
  name: "Equiti Capital Prime / Multi-Asset Prime",
  regulation: "DFSA (Dubai) • FCA (UK) • ASIC (Australia) Regulated",
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
  ] as BrokerFeature[]
};
