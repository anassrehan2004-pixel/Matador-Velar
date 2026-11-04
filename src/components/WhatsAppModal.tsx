import React, { useState } from 'react';
import { X, CheckCircle2, Shield } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedTopic, setSelectedTopic] = useState('Fund Management Consultation');
  const [customMsg, setCustomMsg] = useState('');

  if (!isOpen) return null;

  const topics = [
    'Fund Management & Portfolio Mandates',
    'Recommended Broker Account Onboarding',
    'Telegram Private Alpha Channel Access',
    'Institutional Liquidity & FIX API Inquiries'
  ];

  const handleOpenWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello DEMO,\n\nI am reaching out regarding: ${selectedTopic}.\n${customMsg ? `Details: ${customMsg}` : 'I would like to speak with a senior portfolio advisor.'}`
    );
    window.open(`https://wa.me/15632800598?text=${text}`, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div
        className="glass-panel glow-border rounded-2xl w-full max-w-lg p-6 sm:p-8 relative bg-[#111414]/95 shadow-[0_25px_70px_rgba(0,0,0,0.95)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <WhatsAppIcon className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-headline font-bold text-white">
              Connect on WhatsApp
            </h3>
            <p className="text-xs text-[#d0c6ab]">
              Direct channel to DEMO Private Client Advisory Desk
            </p>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <label className="block text-xs font-headline font-semibold uppercase tracking-wider text-[#d0c6ab]">
            Select Inquiry Topic
          </label>
          <div className="space-y-2">
            {topics.map((topic, i) => (
              <button
                key={i}
                onClick={() => setSelectedTopic(topic)}
                className={`w-full text-left p-3 rounded-xl text-xs font-headline font-medium transition-all flex items-center justify-between cursor-pointer ${
                  selectedTopic === topic
                    ? 'bg-emerald-500/15 border border-emerald-500/40 text-emerald-300'
                    : 'bg-[#191c1c] border border-white/5 text-[#d0c6ab] hover:border-white/15'
                }`}
              >
                <span>{topic}</span>
                {selectedTopic === topic && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
              </button>
            ))}
          </div>

          <div>
            <label className="block text-xs font-headline font-semibold uppercase tracking-wider text-[#d0c6ab] mb-1.5">
              Additional Note (Optional)
            </label>
            <input
              type="text"
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              placeholder="e.g. Inquiring about minimum mandate of $500k..."
              className="w-full bg-[#191c1c] border border-white/15 focus:border-emerald-400 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-white/20 outline-none"
            />
          </div>
        </div>

        <button
          onClick={handleOpenWhatsApp}
          className="w-full py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-600 active:scale-[0.99] text-black font-headline font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/20"
        >
          <WhatsAppIcon className="w-4 h-4" />
          <span>Launch WhatsApp Chat</span>
        </button>

        <div className="flex items-center justify-center gap-2 text-[11px] text-[#d0c6ab]/60 mt-4">
          <Shield className="w-3 h-3 text-emerald-400" />
          <span>Encrypted communication with our verified advisory representatives.</span>
        </div>
      </div>
    </div>
  );
};
