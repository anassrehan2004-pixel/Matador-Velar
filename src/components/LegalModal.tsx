
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
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
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
              Matador Velar Commercial Brokers LLC • Institutional Grade Advisory
            </p>
          </div>
        </div>

        <div className="space-y-6 text-xs sm:text-sm text-[#d0c6ab] leading-relaxed font-body">
          {type === 'privacy' ? (
            <>
              <div className="border-b border-white/10 pb-3 mb-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#FFD700]">
                  Last Updated: November 2026
                </p>
                <p className="mt-2">
                  <strong>Matador Velar Commercial Brokers LLC</strong> (“Matador Velar,” “Company,” “we,” “us,” or “our”), a commercial brokerage and business intermediation entity registered in Dubai, United Arab Emirates, is committed to safeguarding the privacy and confidentiality of personal data provided by our corporate clients, high-net-worth individuals, institutional allocators, and website visitors (“User,” “you,” or “your”).
                </p>
                <p className="mt-2">
                  This Privacy Policy outlines how we collect, use, process, disclose, store, and protect your personal information when you visit our website, submit inquiries, request mandate briefings, or engage our portfolio advisory and commercial brokerage services.
                </p>
              </div>

              <div>
                <p className="font-semibold text-white mb-2">1. Statutory Compliance Framework</p>
                <p>
                  This policy is drafted in accordance with applicable data protection laws of the United Arab Emirates, including <strong>UAE Federal Decree-Law No. 45 of 2021 on Personal Data Protection (PDPL)</strong>, Dubai Financial Services Authority (DFSA) data standards where applicable, and international privacy benchmarks.
                </p>
              </div>

              <div>
                <p className="font-semibold text-white mb-2">2. Information We Collect</p>
                <p className="mb-2">
                  We collect personal and corporate data to facilitate commercial intermediation, evaluate client suitability, and provide portfolio advisory services.
                </p>
                
                <div className="space-y-3 pl-3">
                  <div>
                    <p className="font-medium text-white">A. Information You Directly Provide</p>
                    <ul className="list-disc pl-5 space-y-1 mt-1">
                      <li><strong>Identification & Contact Data:</strong> Full legal name, job title, company name, corporate email address, telephone number, residential/corporate address, and passport/Emirates ID details (for KYC verification).</li>
                      <li><strong>Financial & Mandate Data:</strong> Investment parameters, corporate treasury allocation objectives, risk tolerance metrics, source of funds declarations, and transactional preferences.</li>
                      <li><strong>Communications:</strong> Correspondence, meeting notes, inquiry forms, and electronic messaging exchanged with our brokerage desk.</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-medium text-white">B. Information Automatically Collected</p>
                    <ul className="list-disc pl-5 space-y-1 mt-1">
                      <li><strong>Technical & Usage Data:</strong> IP addresses, browser types, operating systems, referring URLs, device identifiers, and website interaction metrics gathered via security logs and analytics tools.</li>
                      <li><strong>Cookies & Tracking:</strong> Essential session cookies to ensure security, functionality, and optimized site navigation.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <p className="font-semibold text-white mb-2">3. Legal Basis and Purpose of Processing</p>
                <p className="mb-2">
                  We process personal data strictly under lawful bases, including contract performance, compliance with regulatory obligations, and explicit client consent:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Service Execution & Intermediation:</strong> Facilitating introductions, commercial negotiations, deal-sourcing, and portfolio advisory arrangements.</li>
                  <li><strong>KYC & Regulatory Compliance:</strong> Conducting Anti-Money Laundering (AML), Counter-Terrorism Financing (CTF), and Know-Your-Customer (KYC) checks as required under UAE Federal Law.</li>
                  <li><strong>Communication & Inquiry Response:</strong> Responding to mandate inquiries, scheduling consultations, and delivering requested briefings.</li>
                  <li><strong>Platform Security & Optimization:</strong> Preventing unauthorized access, detecting fraud, and optimizing website performance.</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-white mb-2">4. Disclosure and Data Sharing</p>
                <p className="mb-2">
                  Matador Velar does not sell, rent, or lease personal or corporate data to third parties. We may disclose information under the following limited circumstances:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Counterparties & Execution Partners:</strong> Verified financial institutions, liquidity providers, institutional brokers, or commercial counterparties strictly necessary to fulfill your requested transaction or advisory mandate.</li>
                  <li><strong>Professional Advisors & Service Providers:</strong> Trusted IT hosting providers, legal counsel, auditors, and compliance consultants bound by strict non-disclosure and data protection duties.</li>
                  <li><strong>Legal & Regulatory Authorities:</strong> Governmental, judicial, legal, or regulatory bodies in the UAE (including CBUAE, DFSA, or law enforcement) when required by statutory obligation or court order.</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-white mb-2">5. International Data Transfers</p>
                <p>
                  When cross-border transfers of data are required for international transactions or cloud hosting, Matador Velar ensures adequate safeguards are implemented in compliance with UAE Data Protection Law, ensuring target jurisdictions maintain equivalent data protection standards.
                </p>
              </div>

              <div>
                <p className="font-semibold text-white mb-2">6. Data Security and Confidentiality</p>
                <p>
                  We employ robust technical, physical, and administrative security protocols—including end-to-end data encryption, restricted access controls, secure server infrastructure, and routine vulnerability assessments—to protect your personal information against unauthorized access, loss, alteration, or disclosure.
                </p>
              </div>

              <div>
                <p className="font-semibold text-white mb-2">7. Data Retention</p>
                <p>
                  Personal data is retained only for as long as necessary to fulfill the purposes for which it was collected, or to satisfy legal, accounting, tax, or regulatory retention mandates (typically up to <strong>6–10 years</strong> under commercial record-keeping laws in the UAE). Upon expiration of mandatory retention periods, data is securely destroyed or anonymized.
                </p>
              </div>

              <div>
                <p className="font-semibold text-white mb-2">8. Your Data Protection Rights</p>
                <p className="mb-2">Subject to local regulatory constraints, you possess the right to:</p>
                <ul className="list-disc pl-5 space-y-1 mb-3">
                  <li>Access and review personal data held by us.</li>
                  <li>Request rectification of inaccurate or incomplete data.</li>
                  <li>Request erasure of personal data, subject to statutory record-keeping duties.</li>
                  <li>Withdraw consent for non-essential processing at any time.</li>
                </ul>
                <p>
                  To exercise your rights, please submit a formal request to: <a href="mailto:compliance@matadorvelar.com" className="text-[#FFD700] hover:underline">compliance@matadorvelar.com</a>.
                </p>
              </div>

              <div>
                <p className="font-semibold text-white mb-2">9. Updates to This Policy</p>
                <p>
                  We reserve the right to amend this Privacy Policy periodically to reflect operational, legal, or regulatory modifications. Any changes will be published on this page with an updated revision date.
                </p>
              </div>
            </>
          ) : type === 'terms' ? (
            <>
              <div className="border-b border-white/10 pb-3 mb-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#FFD700]">
                  Last Updated: November 2026
                </p>
                <p className="mt-2">
                  Welcome to the website of <strong>Matador Velar Commercial Brokers LLC</strong> (“Matador Velar,” “Firm,” “we,” “us,” or “our”). By accessing, browsing, or utilizing this website (the “Site”) or submitting an inquiry for our services, you (“User,” “Client,” or “you”) acknowledge that you have read, understood, and agreed to be legally bound by these Terms of Service (“Terms”). If you do not agree to these Terms, you must immediately cease using this Site.
                </p>
              </div>

              <div>
                <p className="font-semibold text-white mb-2">1. Corporate Status & Regulatory Disclaimer</p>
                <p className="mb-2">
                  Matador Velar Commercial Brokers LLC is a commercial brokerage and business intermediation entity incorporated and licensed under the laws of the Emirate of Dubai, United Arab Emirates.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Intermediation & Advisory Desk:</strong> Matador Velar acts strictly as a commercial broker, business matchmaker, and portfolio advisory consultancy.</li>
                  <li><strong>No Direct Banking/Custody:</strong> Matador Velar is not a retail bank, depository institution, or direct custodian of investor funds. We do not hold client cash or accept deposits directly on our corporate balance sheet for investment purposes.</li>
                  <li><strong>No Unlicensed Fund Management:</strong> Services described on this Site relate to commercial intermediation, discretionary strategy advisory, counterparty matching, and trade execution consulting. Nothing on this Site constitutes an offer of pooled retail funds or unauthorized collective investment schemes.</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-white mb-2">2. Nature of Site Content (No Financial Advice)</p>
                <p className="mb-2">
                  All materials, research briefs, market commentary, service summaries, and presentation contents published on this Site are provided for general information and business overview purposes only.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Not Solicitations:</strong> Content on this Site does not constitute a public offering, financial advice, legal counsel, tax advice, or a direct solicitation to purchase, sell, or subscribe to any specific financial instrument or commercial transaction.</li>
                  <li><strong>Independent Evaluation Required:</strong> Prospective clients and investors are advised to conduct independent legal, financial, and tax due diligence before entering into any commercial contract or portfolio mandate.</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-white mb-2">3. Scope of Services & Formal Mandates</p>
                <p className="mb-2">
                  Website inquiries, contact submissions, or downloadable materials do not establish a binding commercial broker-client relationship.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Formal Mandates Required:</strong> The provision of any portfolio advisory, deal-sourcing, or corporate treasury structuring service is strictly subject to the execution of a separate, formal written agreement (such as a Discretionary Advisory Agreement, Mandate Briefing Agreement, or Commercial Intermediation Contract) signed by authorized signatories of both parties.</li>
                  <li><strong>KYC / Compliance Clearance:</strong> All engagements remain contingent upon successful completion of our internal KYC, Anti-Money Laundering (AML), and regulatory onboarding protocols.</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-white mb-2">4. Risk Disclosure & Investment Performance Acknowledgement</p>
                <p className="mb-2">
                  By utilizing our Site and consulting our advisory materials, you acknowledge and agree to the following market realities:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Market Volatility:</strong> Financial markets, global indices (US100, US30), foreign exchange (FX), commodities (Gold/XAUUSD), and commercial asset classes carry inherent risks of capital loss. Past performance figures or backtested metrics discussed in strategy overviews do not guarantee future performance.</li>
                  <li><strong>Capital At Risk:</strong> Advisory frameworks are designed around pre-agreed risk metrics and drawdown caps; however, market gaps, slippage, extreme macroeconomic events, and liquidity disruptions may impact asset pricing.</li>
                  <li><strong>Client Discretion:</strong> Unless explicitly assigned under a formal discretionary agreement, all final operational and allocation decisions remain at the sole discretion of the client.</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-white mb-2">5. Intellectual Property Rights</p>
                <p>
                  All content on this Site—including text, trademarks, logos, graphics, icons, service names, trade names, PDF briefing decks, and layout architecture—is the exclusive intellectual property of Matador Velar Commercial Brokers LLC or its licensors. You may not copy, reproduce, modify, distribute, publish, frame, or create derivative works from any part of this Site without prior express written authorization from Matador Velar.
                </p>
              </div>

              <div>
                <p className="font-semibold text-white mb-2">6. User Obligations & Permitted Use</p>
                <p className="mb-2">
                  You agree to use this Site solely for lawful, professional, and corporate evaluation purposes. You expressly agree not to:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Use the Site to transmit unsolicited commercial communications (spam).</li>
                  <li>Introduce viruses, Trojans, malware, or destructive code to our web infrastructure.</li>
                  <li>Attempt unauthorized access to our servers, private databases, or administrative networks.</li>
                  <li>Misrepresent your identity, financial capacity, or corporate authority during inquiries.</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-white mb-2">7. Limitation of Liability</p>
                <p className="mb-2">
                  To the maximum extent permitted under applicable law in the United Arab Emirates:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>“As-Is” Provision:</strong> This Site and its contents are provided on an “as is” and “as available” basis without warranties of any kind, whether express, implied, or statutory.</li>
                  <li><strong>Exclusion of Damages:</strong> Matador Velar, its directors, officers, partners, employees, and agents shall not be liable for any direct, indirect, incidental, consequential, special, or punitive damages—including loss of profits, revenue, data, business opportunities, or capital loss—arising out of or in connection with your access to, use of, or inability to use this Site or reliance on any content contained herein.</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-white mb-2">8. Third-Party Links & External Platforms</p>
                <p>
                  This Site may contain links to third-party web portals, trading infrastructure partners, liquidity platforms, or legal databases. Matador Velar exercises no operational control over third-party websites and assumes no responsibility for their content, privacy policies, or execution practices. Accessing third-party platforms is entirely at your own risk.
                </p>
              </div>

              <div>
                <p className="font-semibold text-white mb-2">9. Indemnification</p>
                <p>
                  You agree to defend, indemnify, and hold harmless Matador Velar Commercial Brokers LLC, its officers, directors, employees, and legal representatives from and against any claims, liabilities, losses, damages, costs, or expenses (including reasonable legal fees) arising from your breach of these Terms, unauthorized use of the Site, or violation of any third-party rights.
                </p>
              </div>

              <div>
                <p className="font-semibold text-white mb-2">10. Governing Law and Jurisdiction</p>
                <p>
                  These Terms of Service and any dispute or claim arising out of or in connection with them (including non-contractual disputes) shall be governed by and construed in accordance with the laws of the Emirate of Dubai and the federal laws of the United Arab Emirates. Any dispute arising out of the access or use of this Site shall be subject to the exclusive jurisdiction of the Dubai Courts (or the DIFC Courts where mutually agreed under formal contract).
                </p>
              </div>

              <div>
                <p className="font-semibold text-white mb-2">11. Severability & Entire Agreement</p>
                <p>
                  If any provision of these Terms is found to be unlawful, void, or unenforceable by a court of competent jurisdiction, that provision shall be deemed severable and shall not affect the validity and enforceability of the remaining provisions.
                </p>
              </div>

              <div>
                <p className="font-semibold text-white mb-2">12. Contact Information</p>
                <p className="mb-1">
                  For legal notices, policy inquiries, or formal correspondence regarding these Terms, please contact our administrative desk:
                </p>
                <div className="bg-white/5 p-3 rounded-lg border border-white/10 space-y-1">
                  <p className="font-medium text-white">Matador Velar Commercial Brokers LLC</p>
                  <p>Dubai World Trade Centre, UAE</p>
                  <p>Email: <a href="mailto:dinesh@matadorvelar.net" className="text-[#FFD700] hover:underline">dinesh@matadorvelar.net</a></p>
                </div>
              </div>
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
                  <li className="flex justify-between gap-4"><span>Beginner Lessons</span><span className="shrink-0 text-white font-semibold">$300 USD</span></li>
                  <li className="flex justify-between gap-4"><span>Professional Strategy Session</span><span className="shrink-0 text-white font-semibold">$800 USD</span></li>
                  <li className="flex justify-between gap-4"><span>Private Mentorship</span><span className="shrink-0 text-white font-semibold">$2,500 USD</span></li>
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
            className="btn-neo text-[#FFD700] font-headline text-xs uppercase tracking-wider px-6 py-2.5 rounded-xl border border-[#FFD700]/30 cursor-pointer hover:bg-[#FFD700]/10 transition-colors"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};