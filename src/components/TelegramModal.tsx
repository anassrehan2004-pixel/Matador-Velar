import React, { useState } from 'react';
import { X, ArrowUpRight, CheckCircle2, Shield, Radio, Copy, Check } from 'lucide-react';
import { TELEGRAM_POSTS } from '../data/content';
import { TelegramIcon } from './TelegramIcon';

interface TelegramModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TelegramModal: React.FC<TelegramModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText('https://telegram.org');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleJoinDirect = () => {
    window.open('https://telegram.org', '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div
        className="glass-panel glow-border rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative bg-[#111414]/95 shadow-[0_25px_70px_rgba(0,0,0,0.95)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Channel Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-[#FFD700]/10 border border-[#FFD700]/30 flex items-center justify-center text-[#FFD700] shrink-0 shadow-[0_0_20px_rgba(255,215,0,0.15)]">
            <TelegramIcon className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl sm:text-2xl font-headline font-bold text-white">
                DEMO Community
              </h3>
              <CheckCircle2 className="w-4 h-4 text-sky-400" />
            </div>
            <p className="text-xs text-[#FFD700] font-mono mt-0.5">
              @DEMO • Institutional Market Participants
            </p>
            <p className="text-xs text-[#d0c6ab] mt-1">
              Macro intelligence, structural market flow models, and high-conviction thematic research.
            </p>
          </div>
        </div>

        {/* Live Channel Posts Feed Preview */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-between text-xs text-[#d0c6ab]/70 font-mono">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <Radio className="w-3.5 h-3.5 animate-pulse" />
              Live Channel Feed
            </span>
            <span>Dubai DIFC Advisory Desk</span>
          </div>

          <div className="space-y-3 max-h-[260px] overflow-y-auto pr-1">
            {TELEGRAM_POSTS.map((post) => (
              <div
                key={post.id}
                className="p-4 rounded-xl bg-black/50 border border-white/10 space-y-2 relative group hover:border-[#FFD700]/30 transition-colors"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2 py-0.5 rounded bg-[#FFD700]/10 text-[#FFD700] border border-[#FFD700]/20 font-mono font-semibold text-[10px]">
                    {post.category}
                  </span>
                  <span className="text-white/40 font-mono text-[11px]">{post.time}</span>
                </div>
                <h4 className="text-sm font-headline font-bold text-white">
                  {post.title}
                </h4>
                <p className="text-xs text-[#d0c6ab] leading-relaxed">
                  {post.summary}
                </p>
                <div className="text-[10px] text-white/30 font-mono pt-1 flex items-center justify-between">
                  <span>{post.views} Views</span>
                  <span className="text-sky-400 font-mono">Verified Analysis</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
          <button
            onClick={handleJoinDirect}
            className="btn-neo text-[#FFD700] font-headline text-xs font-semibold uppercase tracking-wider py-3.5 px-6 rounded-xl border border-[#FFD700]/40 flex-1 flex items-center justify-center gap-2 cursor-pointer shadow-lg"
          >
            <span>Open in Telegram App</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            onClick={handleCopyLink}
            className="glass-panel text-white hover:text-[#FFD700] font-headline text-xs uppercase tracking-wider py-3.5 px-5 rounded-xl border border-white/15 hover:border-white/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Link Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy Invite Link</span>
              </>
            )}
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 text-[11px] text-[#d0c6ab]/60 mt-4">
          <Shield className="w-3 h-3 text-[#FFD700]" />
          <span>Official channel. No unsolicited private direct messages will be initiated.</span>
        </div>
      </div>
    </div>
  );
};
