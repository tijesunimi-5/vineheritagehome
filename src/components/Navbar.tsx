'use client';

import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { VHH_DATA } from '@/data/vhhData';
import { Menu, X, Heart, Handshake, ShieldAlert } from 'lucide-react';

interface NavbarProps {
  onOpenSupport: () => void;
  onOpenVolunteer: () => void;
  isHighlightMode: boolean;
  onToggleHighlight: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSupport,
  onOpenVolunteer,
  isHighlightMode,
  onToggleHighlight,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-nav py-3.5 shadow-md border-b border-vhh-green-900/10'
          : 'bg-gradient-to-b from-vhh-dark/80 via-vhh-dark/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center">
          <Logo variant={isScrolled ? 'dark' : 'light'} />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {VHH_DATA.navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                isScrolled
                  ? 'text-vhh-charcoal hover:text-vhh-green-700'
                  : 'text-stone-200 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Verification Mode Toggle */}
          <button
            onClick={onToggleHighlight}
            title="Highlight data placeholders for leadership verification"
            className={`px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 transition-all border ${
              isHighlightMode
                ? 'bg-amber-100 text-amber-900 border-amber-400 shadow-inner font-semibold'
                : isScrolled
                ? 'bg-stone-100 text-stone-700 border-stone-300 hover:bg-stone-200'
                : 'bg-white/10 text-stone-200 border-white/20 hover:bg-white/20'
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
            <span>{isHighlightMode ? 'Placeholders On' : 'Review Mode'}</span>
          </button>

          {/* Secondary CTA */}
          <button
            onClick={onOpenVolunteer}
            className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all ${
              isScrolled
                ? 'border border-vhh-green-800 text-vhh-green-800 hover:bg-vhh-green-50'
                : 'border border-white/40 text-white hover:bg-white/10'
            }`}
          >
            Partner With Us
          </button>

          {/* Primary CTA */}
          <button
            onClick={onOpenSupport}
            className="px-5 py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-vhh-green-800 text-white shadow-md hover:bg-vhh-green-700 transition-all flex items-center gap-2 group"
          >
            <Heart className="w-4 h-4 text-vhh-red-500 fill-vhh-red-500 transition-transform group-hover:scale-110" />
            <span>Support Our Mission</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onToggleHighlight}
            className={`p-2 rounded-md ${
              isHighlightMode ? 'bg-amber-100 text-amber-800' : 'text-stone-300'
            }`}
            title="Toggle Verification Highlights"
          >
            <ShieldAlert className="w-4 h-4" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-vhh-charcoal' : 'text-white'
            }`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Refined Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[70px] bg-vhh-dark/95 backdrop-blur-xl border-b border-vhh-green-800/40 px-6 py-8 shadow-2xl flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-4">
            {VHH_DATA.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-serif font-medium text-stone-200 hover:text-emerald-400 transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-vhh-green-800/60 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSupport();
              }}
              className="w-full py-3.5 rounded-lg bg-vhh-green-700 text-white font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
            >
              <Heart className="w-4 h-4 text-vhh-red-500 fill-vhh-red-500" />
              <span>Support Our Mission</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVolunteer();
              }}
              className="w-full py-3.5 rounded-lg border border-stone-600 text-stone-200 font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white/10"
            >
              <Handshake className="w-4 h-4 text-emerald-400" />
              <span>Visit / Partner With Us</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
