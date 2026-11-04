import React from 'react';
import { X, Shield, FileText, BookOpen } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | 'enrollment' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  type,
  onClose,
}) => {
  if (!isOpen || !type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="legal-modal-title"
        className="glass-panel glow-border rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto p-6 sm:p-8 relative bg-[#111414]/95 shadow-[0_25px_70px_rgba(0,0,0,0.95)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label={`Close ${type === 'enrollment' ? 'enrollment information' : type === 'privacy' ? 'privacy policy' : 'terms of service'}`}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-[#FFD700]/10 border border-[#FFD700]/30 flex items-center justify-center text-[#FFD700]">
            {type === 'privacy' ? <Shield className="w-5 h-5" /> : type === 'enrollment' ? <BookOpen className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
          </div>
          <div>
            <h3 id="legal-modal-title" className="text-xl font-headline font-bold text-white">
              {type === 'privacy' ? 'Privacy Policy' : type === 'enrollment' ? 'How to Enrol' : 'Terms of Service'}
            </h3>
            <p className="text-xs text-[#d0c6ab]/70 font-mono">
              DEMO • Institutional Grade Advisory
            </p>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-[#d0c6ab] leading-relaxed font-body">
          {type === 'privacy' ? (
            <>
              <p>
                <strong>1. Information Collection (DEMO Privacy):</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                <strong>2. Data Usage & Security:</strong> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                <strong>3. Confidentiality Framework:</strong> Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida.
              </p>
              <p>
                <strong>4. Third-Party Disclosures:</strong> Fusce convallis metus id felis luctus adipiscing. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Quisque id mi.
              </p>
            </>
          ) : type === 'terms' ? (
            <>
              <p>
                <strong>1. Acceptance of Terms (DEMO Terms):</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
              </p>
              <p>
                <strong>2. Advisory Limitations & Scope:</strong> Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus. Nulla quis lorem ut libero malesuada feugiat.
              </p>
              <p>
                <strong>3. Market Risk Disclosure:</strong> Cras ultricies ligula sed magna dictum porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
              </p>
              <p>
                <strong>4. Governing Law & Jurisdiction:</strong> Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin sagittis nisl rhoncus venenatis pellentesque.
              </p>
            </>
          ) : (
            <div className="space-y-5">
              <div className="border-l-2 border-[#FFD700]/70 pl-4">
                <p className="font-headline text-base font-semibold text-white">
                  Forex Trading Training Programme
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[#FFD700]">
                  Learn the foundations. Develop a method. Build discipline.
                </p>
              </div>
              <p>
                Contact our team to ask about the next available training schedule, delivery format, programme suitability and payment process. Please specify which programme you are interested in.
              </p>
              <div className="rounded-xl border border-[#FFD700]/30 bg-[#FFD700]/[0.06] p-4">
                <p className="mb-2 font-headline text-xs font-semibold uppercase tracking-[0.12em] text-[#FFD700]">
                  Programme Fees
                </p>
                <ul className="space-y-2 text-xs sm:text-sm">
                  <li className="flex justify-between gap-4"><span>Beginner Lessons</span><span className="shrink-0 text-white">$300 USD</span></li>
                  <li className="flex justify-between gap-4"><span>Professional Strategy Session</span><span className="shrink-0 text-white">$800 USD</span></li>
                  <li className="flex justify-between gap-4"><span>Private Mentorship</span><span className="shrink-0 text-white">$2,500 USD</span></li>
                </ul>
              </div>
              <p className="text-xs text-[#d0c6ab]/70">
                Private mentorship coaching format, access channels, response times and scheduling should be confirmed in the enrolment terms before payment.
              </p>
              <a
                href={`https://wa.me/15632800598?text=${encodeURIComponent("Hello, I'd like to ask about enrollment for the Forex Trading Training Programme. Please share the next available schedule, delivery format, programme suitability and payment process.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-[#FFD700]/40 bg-[#FFD700]/10 px-5 py-3 font-headline text-xs font-semibold uppercase tracking-[0.1em] text-[#FFD700] transition-colors hover:bg-[#FFD700]/15"
              >
                Ask about enrollment on WhatsApp
              </a>
            </div>
          )}
        </div>

        <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="btn-neo text-[#FFD700] font-headline text-xs uppercase tracking-wider px-6 py-2.5 rounded-xl border border-[#FFD700]/30 cursor-pointer"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
