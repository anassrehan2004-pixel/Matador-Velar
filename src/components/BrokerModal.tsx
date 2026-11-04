import React from 'react';
import { X, ShieldCheck, Server, Lock, ExternalLink, Activity, Award, CheckCircle } from 'lucide-react';
import { BROKER_DATA } from '../data/content';

interface BrokerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const BrokerModal: React.FC<BrokerModalProps> = ({
  isOpen,
  onClose,
  onOpenConsultation,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div
        className="glass-panel glow-border rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 md:p-10 relative bg-[#111414]/95 shadow-[0_25px_70px_rgba(0,0,0,0.95)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/30 text-[#3B82F6] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Institutional Due Diligence Report</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-headline font-bold text-white tracking-tight">
            {BROKER_DATA.name}
          </h3>
          <p className="text-xs sm:text-sm text-[#3B82F6] font-headline font-semibold mt-1">
            {BROKER_DATA.regulation}
          </p>
          <p className="text-xs text-[#d0c6ab] mt-1">
            Independently vetted by DEMO for institutional liquidity, algorithmic latency, and statutory capital protection.
          </p>
        </div>

        {/* Technical Specs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 mb-8">
          {BROKER_DATA.tradingSpecs.map((spec, i) => (
            <div key={i} className="p-3.5 rounded-xl bg-black/40 border border-white/5">
              <span className="text-[11px] font-headline uppercase tracking-wider text-[#d0c6ab]/70 block mb-1">
                {spec.label}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-white font-mono">
                {spec.value}
              </span>
            </div>
          ))}
        </div>

        {/* Key Vetting Criteria */}
        <div className="space-y-4 mb-8">
          <h4 className="text-sm font-headline font-bold uppercase tracking-wider text-[#FFD700] flex items-center gap-2">
            <Award className="w-4 h-4" />
            Core Advisory Selection Rationale
          </h4>

          <div className="space-y-3">
            {BROKER_DATA.features.map((feature, i) => (
              <div key={i} className="p-4 rounded-xl bg-[#191c1c] border border-white/10 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#3B82F6] shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-headline font-semibold text-sm">
                    {feature.title}
                  </div>
                  <div className="text-xs text-[#d0c6ab] mt-1 leading-relaxed">
                    {feature.description}
                  </div>
                  <div className="mt-2 inline-block px-2 py-0.5 rounded bg-white/5 text-[11px] font-mono text-[#FFD700]">
                    {feature.highlight}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="btn-neo text-[#FFD700] font-headline text-xs font-semibold uppercase tracking-wider px-6 py-3.5 rounded-xl border border-[#FFD700]/30 cursor-pointer"
          >
            Request Institutional Introduction
          </button>

          <a
            href={BROKER_DATA.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel text-white hover:text-[#FFD700] font-headline text-xs uppercase tracking-wider px-5 py-3.5 rounded-xl border border-white/15 hover:border-white/30 transition-all flex items-center gap-2"
          >
            <span>Visit Broker Portal</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
