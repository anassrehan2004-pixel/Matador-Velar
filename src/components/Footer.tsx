import React from 'react';
import { ArrowUp } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

const logoUrl = new URL('../../assets/Logo.png', import.meta.url).href;

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenEnrollment: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onOpenEnrollment,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className="relative z-20 w-full border-t border-white/10 bg-[#0C0F0F] pb-8 pt-14 font-body text-sm text-[#d0c6ab] md:pt-16"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-x-10 gap-y-10 border-b border-white/10 pb-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-12 lg:gap-y-8">
          <div className="flex min-w-0 flex-col items-start">
            <img
              src={logoUrl}
              alt="Matador Velar"
              className="mb-4 h-16 w-40 object-contain object-left"
            />
            <p className="max-w-xs text-sm leading-relaxed text-[#d0c6ab]/75">
              Matador Velar Commercial Brokers LLC (Dubai DED License No. 1344455) provides institutional portfolio and capital management services while connecting retail traders with Tier-1 brokers.
            </p>
          </div>

          <nav aria-label="Explore" className="flex min-w-0 flex-col items-start gap-3">
            <h2 className="mb-1 font-headline text-sm font-semibold text-[#e1e3e2]">
              Explore
            </h2>
            <a href="#" className="text-sm text-[#d0c6ab]/80 transition-colors hover:text-[#FFD700]">Home</a>
            <a href="#fund-management" className="text-sm text-[#d0c6ab]/80 transition-colors hover:text-[#FFD700]">Fund Management</a>
            <a href="#broker-recommendation" className="text-sm text-[#d0c6ab]/80 transition-colors hover:text-[#FFD700]">Broker Recommendation</a>
            <a href="#telegram-community" className="text-sm text-[#d0c6ab]/80 transition-colors hover:text-[#FFD700]">Telegram Community</a>
                        <a href="#financial-education" className="text-sm text-[#d0c6ab]/80 transition-colors hover:text-[#FFD700]">Financial Education</a>
          </nav>

          <nav aria-label="Legal" className="flex min-w-0 flex-col items-start gap-3">
            <h2 className="mb-1 font-headline text-sm font-semibold text-[#e1e3e2]">
              Legal
            </h2>
            <button
              onClick={onOpenPrivacy}
              className="cursor-pointer text-left text-sm text-[#d0c6ab]/80 transition-colors hover:text-[#FFD700]"
            >
              Privacy Policy
            </button>
            <button
              onClick={onOpenTerms}
              className="cursor-pointer text-left text-sm text-[#d0c6ab]/80 transition-colors hover:text-[#FFD700]"
            >
              Terms of Service
            </button>
            <button
              onClick={onOpenEnrollment}
              className="cursor-pointertext-left text-sm text-[#d0c6ab]/80 transition-colors hover:text-[#FFD700]"
            >
              How to enroll
            </button>
          </nav>

          <div className="flex min-w-0 flex-col items-start gap-3">
            <h2 className="mb-1 font-headline text-sm font-semibold text-[#e1e3e2]">
              Contact
            </h2>
            <div className="space-y-1">
              <h3 className="font-headline text-[10px] font-semibold uppercase tracking-[0.12em] text-[#FFD700]">
                Headquarters
              </h3>
              <p className="text-sm leading-relaxed text-[#d0c6ab]/80">
                White Swan Building, World Trade Center, Dubai, UAE
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="font-headline text-[10px] font-semibold uppercase tracking-[0.12em] text-[#FFD700]">
                Branch Office
              </h3>
              <p className="text-sm leading-relaxed text-[#d0c6ab]/80">
                25 Gilmore St, Whitehall, New York, USA
              </p>
            </div>
            <a
              href="https://wa.me/15632800598"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#d0c6ab]/80 transition-colors hover:text-[#22c55e]"
            >
              <WhatsAppIcon className="h-4 w-4 text-[#22c55e]" />
              +1 (563) 280 0598
            </a>
          </div>
        </div>

        <div className="relative flex flex-col items-center justify-center gap-4 pt-6 text-center sm:flex-row sm:justify-between">
          <p className="text-xs text-[#d0c6ab]/60">
            © 2026 Matador Velar. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[#d0c6ab] transition-all hover:border-[#FFD700] hover:text-[#FFD700]"
            title="Back to Top"
            aria-label="Back to Top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
