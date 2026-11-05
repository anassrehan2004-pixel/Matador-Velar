import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

const logoUrl = new URL('../../assets/Logo.png', import.meta.url).href;

interface NavbarProps {
  onOpenWhatsApp: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenWhatsApp,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 md:px-6 py-3 rounded-full mt-4 md:mt-6 mx-auto w-[calc(100%-24px)] md:w-[calc(100%-48px)] max-w-7xl backdrop-blur-2xl border border-white/10 transition-all duration-300 ${
          scrolled
            ? 'bg-[#111414]/90 shadow-[0px_30px_60px_rgba(0,0,0,0.9)] border-white/15'
            : 'bg-[#111414]/70 shadow-[0px_20px_50px_rgba(0,0,0,0.8)]'
        }`}
      >
        {/* Brand */}
        <a
          href="#"
          className="flex items-center px-2 md:px-4"
          id="brand-logo"
        >
          <img
            src={logoUrl}
            alt="Matador Velar"
            className="h-12 w-16 object-contain md:h-14 md:w-20"
          />
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden xl:flex items-center space-x-0.5">
                    <a
            id="nav-link-services"
            className="text-[#d0c6ab] font-headline text-xs font-semibold uppercase tracking-[0.12em] hover:text-[#FFD700] hover:bg-white/5 transition-all duration-300 px-2 py-2 rounded-lg"
            href="#portfolio-simulator"
          >
            Simulation
          </a>
          <a
            id="nav-link-services"
            className="text-[#d0c6ab] font-headline text-xs font-semibold uppercase tracking-[0.12em] hover:text-[#FFD700] hover:bg-white/5 transition-all duration-300 px-2 py-2 rounded-lg"
            href="#services"
          >
            Services
          </a>
          <a
            id="nav-link-process"
            className="text-[#d0c6ab] font-headline text-xs font-semibold uppercase tracking-[0.12em] hover:text-[#FFD700] hover:bg-white/5 transition-all duration-300 px-2 py-2 rounded-lg"
            href="#process"
          >
            Process
          </a>
          <a
            id="nav-link-broker"
            className="text-[#d0c6ab] font-headline text-xs font-semibold uppercase tracking-[0.12em] hover:text-[#FFD700] hover:bg-white/5 transition-all duration-300 px-2 py-2 rounded-lg"
            href="#broker-recommendation"
          >
            Broker Recommendation
          </a>
          <a
            id="nav-link-telegram"
            className="text-[#d0c6ab] font-headline text-xs font-semibold uppercase tracking-[0.12em] hover:text-[#FFD700] hover:bg-white/5 transition-all duration-300 px-2 py-2 rounded-lg"
            href="#telegram-community"
          >
            Telegram Community
          </a>
          <a
            id="nav-link-financial-education"
            className="text-[#d0c6ab] font-headline text-xs font-semibold uppercase tracking-[0.12em] hover:text-[#FFD700] hover:bg-white/5 transition-all duration-300 px-2 py-2 rounded-lg"
            href="#financial-education"
          >
            Financial Education
          </a>
        </div>

        {/* CTA Button - Chat on WhatsApp with Green Neon */}
        <div className="hidden md:flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            id="nav-cta-btn"
            onClick={onOpenWhatsApp}
            className="btn-whatsapp text-[#22c55e] font-headline text-xs font-semibold uppercase tracking-[0.1em] px-5 py-2.5 lg:px-6 lg:py-3 rounded-full border border-[#22c55e]/40 hover:border-[#22c55e] transition-all duration-200 cursor-pointer flex items-center gap-2"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#22c55e]" />
            <span>Quick Chat</span>
          </motion.button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden text-[#e1e3e2] p-2 hover:text-[#FFD700] transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            id="mobile-menu-overlay"
            className="fixed inset-x-4 top-23 z-50 xl:hidden glass-panel rounded-2xl p-6 border border-white/15 shadow-2xl"
          >
            <div className="flex flex-col space-y-4">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#e1e3e2] hover:text-[#FFD700] font-headline uppercase tracking-wider text-sm py-2 px-3 rounded-lg hover:bg-white/5 transition-all"
              >
                Services
              </a>
              <a
                href="#process"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#e1e3e2] hover:text-[#FFD700] font-headline uppercase tracking-wider text-sm py-2 px-3 rounded-lg hover:bg-white/5 transition-all"
              >
                Process
              </a>
              <a
                href="#broker-recommendation"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#e1e3e2] hover:text-[#FFD700] font-headline uppercase tracking-wider text-sm py-2 px-3 rounded-lg hover:bg-white/5 transition-all"
              >
                Broker Recommendation
              </a>
              <a
                href="#telegram-community"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#e1e3e2] hover:text-[#FFD700] font-headline uppercase tracking-wider text-sm py-2 px-3 rounded-lg hover:bg-white/5 transition-all"
              >
                Telegram Community
              </a>
              <a
                href="#financial-education"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#e1e3e2] hover:text-[#FFD700] font-headline uppercase tracking-wider text-sm py-2 px-3 rounded-lg hover:bg-white/5 transition-all"
              >
                Financial Education
              </a>
              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenWhatsApp();
                  }}
                  className="btn-whatsapp text-[#22c55e] font-headline text-xs font-semibold uppercase tracking-wider py-3.5 px-4 rounded-xl border border-[#22c55e]/40 w-full text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#22c55e]" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
