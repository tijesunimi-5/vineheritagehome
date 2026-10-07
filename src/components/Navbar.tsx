'use client';

import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { VHH_DATA } from '@/data/vhhData';
import { Menu, X, Heart, Handshake, ShieldAlert, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenSupport: () => void;
  onOpenVolunteer: () => void;
  isHighlightMode?: boolean;
  onToggleHighlight?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSupport,
  onOpenVolunteer,
  isHighlightMode = false,
  onToggleHighlight,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md py-4 lg:py-5 shadow-md border-b border-stone-200/80'
          : 'bg-gradient-to-b from-vhh-dark/90 via-vhh-dark/50 to-transparent py-5 lg:py-7 border-b border-white/10'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center shrink-0">
          <Logo variant={isScrolled ? 'dark' : 'light'} />
        </a>

        {/* Desktop Navigation Links (Spacious Flex Gap) */}
        <nav className="hidden xl:flex items-center gap-8 xl:gap-10 2xl:gap-12">
          {VHH_DATA.navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold tracking-wide transition-all duration-200 border-b-2 border-transparent py-2 ${
                isScrolled
                  ? 'text-vhh-charcoal hover:text-vhh-green-800 hover:border-vhh-green-700'
                  : 'text-stone-200 hover:text-white hover:border-emerald-400'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Action CTAs (Spacious Padding & Gaps) */}
        <div className="hidden xl:flex items-center gap-4 xl:gap-5 shrink-0">
          {/* Secondary CTA: Partner */}
          <button
            onClick={onOpenVolunteer}
            className={`px-5 py-3 rounded-xl text-xs xl:text-sm font-bold tracking-wider uppercase transition-all border ${
              isScrolled
                ? 'border-vhh-green-800 text-vhh-green-900 hover:bg-vhh-green-50'
                : 'border-white/40 text-stone-100 hover:bg-white/15'
            }`}
          >
            Partner With Us
          </button>

          {/* Primary CTA: Support */}
          <button
            onClick={onOpenSupport}
            className="px-6 xl:px-7 py-3 rounded-xl text-xs xl:text-sm font-bold tracking-wider uppercase bg-vhh-green-800 text-white shadow-md hover:bg-vhh-green-700 transition-all flex items-center gap-2.5 group border border-vhh-green-600/40"
          >
            <Heart className="w-4 h-4 text-vhh-red-500 fill-vhh-red-500 transition-transform group-hover:scale-110" />
            <span>Support Our Mission</span>
          </button>
        </div>

        {/* Medium Screen (Tablet/Laptop) Compact Action & Mobile Hamburger */}
        <div className="flex items-center gap-3 xl:hidden">
          {/* Compact Support Button on Medium Screens */}
          <button
            onClick={onOpenSupport}
            className="hidden sm:flex px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-vhh-green-800 text-white shadow-sm hover:bg-vhh-green-700 items-center gap-1.5"
          >
            <Heart className="w-3.5 h-3.5 text-vhh-red-500 fill-vhh-red-500" />
            <span>Support</span>
          </button>

          {/* Mobile/Tablet Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-3 rounded-xl transition-all border ${
              isScrolled
                ? 'bg-stone-100 text-vhh-charcoal border-stone-300 hover:bg-stone-200'
                : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
            }`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Refined Mobile & Tablet Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[75px] sm:top-[85px] bg-vhh-dark/98 backdrop-blur-2xl border-b border-vhh-green-800/50 px-8 py-8 shadow-2xl flex flex-col gap-6 animate-in slide-in-from-top-4 duration-300 max-h-[calc(100vh-85px)] overflow-y-auto">
          
          <div className="flex items-center justify-between pb-4 border-b border-vhh-green-900/80 text-xs text-stone-400 font-mono">
            <span>VHH NAVIGATION MENU</span>
            <span className="text-emerald-400 font-bold">&bull; NIGERIA</span>
          </div>

          <nav className="flex flex-col gap-2">
            {VHH_DATA.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-base font-serif font-bold text-stone-200 hover:text-emerald-300 transition-colors py-3 border-b border-white/5"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-stone-500" />
              </a>
            ))}
          </nav>

          <div className="pt-4 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSupport();
              }}
              className="w-full py-4 rounded-xl bg-vhh-green-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:bg-vhh-green-600 transition-colors"
            >
              <Heart className="w-4 h-4 text-vhh-red-500 fill-vhh-red-500" />
              <span>Support Our Mission</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVolunteer();
              }}
              className="w-full py-3.5 rounded-xl border border-stone-600 text-stone-200 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
            >
              <Handshake className="w-4 h-4 text-emerald-400" />
              <span>Visit / Partner With Us</span>
            </button>

            {onToggleHighlight && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onToggleHighlight();
                }}
                className={`w-full py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 border transition-all ${
                  isHighlightMode
                    ? 'bg-amber-100 text-amber-900 border-amber-400'
                    : 'bg-white/5 text-stone-400 border-white/10'
                }`}
              >
                <ShieldAlert className="w-3.5 h-3.5 text-amber-500" />
                <span>{isHighlightMode ? 'Placeholders Highlighted' : 'Toggle Review Mode'}</span>
              </button>
            )}
          </div>

        </div>
      )}
    </header>
  );
};
