import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Volume2, VolumeX } from 'lucide-react';
import { forestAudio } from '../utils/audioAmbience';

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [audioActive, setAudioActive] = useState(false);

  const toggleAudio = () => {
    const active = forestAudio.toggle();
    setAudioActive(active);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'investment', label: 'Growth & Economics' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#102B23]/95 backdrop-blur-md py-3.5 shadow-md border-b border-[#173F32]'
          : 'bg-gradient-to-b from-[#102B23]/80 via-[#102B23]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single text element brand wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-left group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B78B53]"
            aria-label="Nature's Canopy Home"
          >
            <span className="font-serif text-2xl md:text-2xl font-medium tracking-tight text-[#F5F1E7] transition-colors group-hover:text-[#B78B53] whitespace-nowrap shrink-0 block">
              Nature’s Canopy
            </span>
          </button>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-1 text-sm tracking-wide transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'text-[#B78B53] font-semibold'
                      : 'text-[#F5F1E7]/80 hover:text-[#F5F1E7]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B78B53] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action + ambient sound toggle */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={toggleAudio}
              className={`inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-xs border transition-colors cursor-pointer ${
                audioActive
                  ? 'bg-[#173F32] border-[#B78B53] text-[#D4A972]'
                  : 'bg-[#102B23]/60 border-[#173F32] text-[#F5F1E7]/70 hover:text-[#F5F1E7]'
              }`}
              title="Toggle Procedural Forest Ambience"
              aria-label="Toggle Forest Ambience Audio"
            >
              {audioActive ? (
                <Volume2 className="w-3.5 h-3.5 text-[#B78B53] animate-pulse" />
              ) : (
                <VolumeX className="w-3.5 h-3.5" />
              )}
              <span className="hidden xl:inline">{audioActive ? 'Canopy Sound On' : 'Forest Sound'}</span>
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wider uppercase text-[#102B23] bg-[#B78B53] hover:bg-[#D4A972] transition-colors rounded-sm cursor-pointer whitespace-nowrap shadow-sm hover:shadow"
            >
              <span>Discuss a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleAudio}
              className="p-2 text-[#F5F1E7]/80 hover:text-[#B78B53]"
              aria-label="Toggle Forest Sound"
            >
              {audioActive ? <Volume2 className="w-5 h-5 text-[#B78B53]" /> : <VolumeX className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F5F1E7] hover:text-[#B78B53] focus:outline-none cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#102B23] border-b border-[#173F32] px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left text-base font-medium py-1 transition-colors cursor-pointer ${
                  activePage === link.id ? 'text-[#B78B53]' : 'text-[#F5F1E7]/80 hover:text-[#F5F1E7]'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 border-t border-[#173F32] space-y-3">
              <button
                onClick={toggleAudio}
                className="w-full flex items-center justify-center gap-2 py-2 text-xs font-medium text-[#F5F1E7] bg-[#173F32] rounded-xs"
              >
                {audioActive ? <Volume2 className="w-4 h-4 text-[#B78B53]" /> : <VolumeX className="w-4 h-4" />}
                <span>{audioActive ? 'Mute Forest Audio' : 'Play Forest Ambience'}</span>
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full text-center px-4 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#102B23] bg-[#B78B53] rounded-sm cursor-pointer"
              >
                Discuss a Project
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
