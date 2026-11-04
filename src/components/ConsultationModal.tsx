import React, { useState } from 'react';
import { X, CheckCircle, Lock, Calendar, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { ConsultationForm } from '../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState<ConsultationForm>({
    fullName: '',
    email: '',
    phone: '',
    portfolioSize: '$250,000 - $1,000,000',
    interest: 'Fund Management & Portfolio Mandates',
    preferredTime: 'Dubai Time (GST) • Morning',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      portfolioSize: '$250,000 - $1,000,000',
      interest: 'Fund Management & Portfolio Mandates',
      preferredTime: 'Dubai Time (GST) • Morning',
      notes: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div
        className="glass-panel glow-border rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 md:p-10 relative bg-[#111414]/95 shadow-[0_25px_70px_rgba(0,0,0,0.95)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/40 flex items-center justify-center mx-auto text-[#FFD700] shadow-[0_0_25px_rgba(255,215,0,0.2)]">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#FFD700]">
                Mandate Request Received
              </span>
              <h3 className="text-2xl sm:text-3xl font-headline font-bold text-white">
                Consultation Scheduled
              </h3>
              <p className="text-[#d0c6ab] text-sm max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{formData.fullName}</strong>. A Senior Portfolio Director from our Dubai DIFC Desk will contact you at <span className="text-[#FFD700]">{formData.phone || formData.email}</span> within 4 business hours.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/10 text-left max-w-md mx-auto space-y-2 text-xs font-mono">
              <div className="flex justify-between text-[#d0c6ab]">
                <span>Reference ID:</span>
                <span className="text-white">NCA-{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>
              <div className="flex justify-between text-[#d0c6ab]">
                <span>Strategy Interest:</span>
                <span className="text-[#FFD700]">{formData.interest}</span>
              </div>
              <div className="flex justify-between text-[#d0c6ab]">
                <span>Capital Bracket:</span>
                <span className="text-white">{formData.portfolioSize}</span>
              </div>
              <div className="flex justify-between text-[#d0c6ab]">
                <span>Session Time:</span>
                <span className="text-white">{formData.preferredTime}</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="btn-neo text-[#FFD700] font-headline text-xs uppercase tracking-wider px-8 py-3.5 rounded-xl border border-[#FFD700]/40 cursor-pointer"
            >
              Close & Return to Overview
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700] text-[11px] font-headline uppercase tracking-wider font-semibold mb-3">
                <Lock className="w-3 h-3" />
                <span>Confidential Private Advisory</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-headline font-bold text-white tracking-tight">
                Schedule a Private Portfolio Consultation
              </h3>
              <p className="text-xs sm:text-sm text-[#d0c6ab] mt-1">
                Direct briefing with senior asset allocation managers at DEMO.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-headline font-semibold uppercase tracking-wider text-[#d0c6ab] mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Tariq Al-Mansoor"
                    className="w-full bg-[#191c1c] border border-white/15 focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-white/20 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-headline font-semibold uppercase tracking-wider text-[#d0c6ab] mb-1.5">
                    Official Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="tariq@familyoffice.ae"
                    className="w-full bg-[#191c1c] border border-white/15 focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-white/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-headline font-semibold uppercase tracking-wider text-[#d0c6ab] mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+971 50 123 4567"
                    className="w-full bg-[#191c1c] border border-white/15 focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-white/20 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-headline font-semibold uppercase tracking-wider text-[#d0c6ab] mb-1.5">
                    Target Portfolio Allocation *
                  </label>
                  <select
                    value={formData.portfolioSize}
                    onChange={(e) => setFormData({ ...formData, portfolioSize: e.target.value })}
                    className="w-full bg-[#191c1c] border border-white/15 focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700] rounded-lg px-3.5 py-2.5 text-sm text-white outline-none transition-all cursor-pointer"
                  >
                    <option value="$100,000 - $250,000">$100,000 - $250,000 USD</option>
                    <option value="$250,000 - $1,000,000">$250,000 - $1,000,000 USD</option>
                    <option value="$1,000,000 - $5,000,000">$1,000,000 - $5,000,000 USD</option>
                    <option value="$5,000,000+ USD Institutional">$5,000,000+ USD (Institutional)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-headline font-semibold uppercase tracking-wider text-[#d0c6ab] mb-1.5">
                    Primary Area of Advisory
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full bg-[#191c1c] border border-white/15 focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700] rounded-lg px-3.5 py-2.5 text-sm text-white outline-none transition-all cursor-pointer"
                  >
                    <option value="Fund Management & Portfolio Mandates">Fund Management & Portfolio Mandates</option>
                    <option value="Institutional Broker Recommendation & Setup">Institutional Broker Setup</option>
                    <option value="Macro Alpha Quantitative Strategy">Macro Alpha Quantitative Strategy</option>
                    <option value="Family Office Multi-Asset Treasury">Family Office Multi-Asset Treasury</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-headline font-semibold uppercase tracking-wider text-[#d0c6ab] mb-1.5">
                    Preferred Time Window
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full bg-[#191c1c] border border-white/15 focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700] rounded-lg px-3.5 py-2.5 text-sm text-white outline-none transition-all cursor-pointer"
                  >
                    <option value="Dubai Time (GST) • Morning (09:00 - 12:00)">Dubai GST • Morning (09:00 - 12:00)</option>
                    <option value="Dubai Time (GST) • Afternoon (13:00 - 17:00)">Dubai GST • Afternoon (13:00 - 17:00)</option>
                    <option value="London Time (GMT) • Working Hours">London GMT • Business Hours</option>
                    <option value="New York (EST) • Morning">New York EST • Morning</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-headline font-semibold uppercase tracking-wider text-[#d0c6ab] mb-1.5">
                  Specific Objectives or Portfolio Requirements (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Looking for quantitative diversification away from traditional real estate/equities..."
                  className="w-full bg-[#191c1c] border border-white/15 focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-white/20 outline-none transition-all"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-neo w-full text-[#FFD700] font-headline text-xs sm:text-sm font-semibold uppercase tracking-wider py-4 rounded-xl border border-[#FFD700]/40 flex items-center justify-center gap-2 cursor-pointer shadow-xl disabled:opacity-50"
                >
                  {loading ? (
                    <span>Securing Private Consultation Request...</span>
                  ) : (
                    <>
                      <span>Confirm Consultation Request</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#d0c6ab]/60 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FFD700]" />
                <span>All discussions are covered by institutional Non-Disclosure Agreement (NDA).</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
