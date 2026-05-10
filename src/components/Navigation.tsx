import React, { useState, useEffect } from 'react';
import { Instagram, Mail, Car, CarFront, MessageSquare } from 'lucide-react';
import { ActiveTab } from '../App';

interface NavigationProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
}

const Navigation = ({ activeTab, setActiveTab }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabChange = (tab: ActiveTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToForm = () => {
    const section = document.querySelector('[data-section="contact"]');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop / top nav */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-dark-900/95 backdrop-blur-md border-b border-white/10'
            : 'bg-dark-900/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/logo/moz-logo.png"
                alt="MOZ Growth"
                className="h-10 w-auto"
              />
              <span className="text-xl font-black tracking-tight text-white">
                MOZ <span className="text-blue-500">Growth</span>
              </span>
            </div>

            <div className="hidden md:flex items-center bg-dark-800 rounded-lg p-1 border border-white/10">
              <button
                onClick={() => handleTabChange('exotic')}
                className={`px-5 py-2 rounded-md text-sm font-semibold transition-all duration-200 ${
                  activeTab === 'exotic'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Exotic Car Rentals
              </button>
              <button
                onClick={() => handleTabChange('limo')}
                className={`px-5 py-2 rounded-md text-sm font-semibold transition-all duration-200 ${
                  activeTab === 'limo'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Limousine Services
              </button>
            </div>

            <div className="hidden md:flex items-center gap-2">
              <a
                href="https://www.instagram.com/moz.rodriguez/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:morrisseyr@moz-growth.com"
                className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* Mobile: logo only, no hamburger */}
          </div>
        </div>
      </nav>

      {/* Mobile bottom tab bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 px-4 pb-5 pointer-events-none">
        <div className="pointer-events-auto mx-auto max-w-sm">
          <div className="flex items-center gap-2 bg-dark-800/90 backdrop-blur-xl border border-white/10 rounded-2xl px-2 py-2 shadow-2xl shadow-black/60">
            {/* Exotic Car */}
            <button
              onClick={() => handleTabChange('exotic')}
              className={`flex-1 flex flex-col items-center gap-1 py-2 px-3 rounded-xl transition-all duration-200 ${
                activeTab === 'exotic'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              <Car className="w-5 h-5" />
              <span className="text-[10px] font-semibold tracking-wide leading-none">Exotic</span>
            </button>

            {/* Get in touch CTA */}
            <button
              onClick={handleScrollToForm}
              className="flex-1 flex flex-col items-center gap-1 py-2 px-3 rounded-xl bg-blue-500 hover:bg-blue-400 text-white transition-all duration-200 shadow-lg shadow-blue-500/30"
            >
              <MessageSquare className="w-5 h-5" />
              <span className="text-[10px] font-semibold tracking-wide leading-none">Get in Touch</span>
            </button>

            {/* Limo */}
            <button
              onClick={() => handleTabChange('limo')}
              className={`flex-1 flex flex-col items-center gap-1 py-2 px-3 rounded-xl transition-all duration-200 ${
                activeTab === 'limo'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              <CarFront className="w-5 h-5" />
              <span className="text-[10px] font-semibold tracking-wide leading-none">Limo</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
