'use client';

import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { VHH_DATA } from '@/data/vhhData';
import { Menu, X, Heart, Handshake, ShieldAlert, ChevronRight, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
  const pathname = usePathname();

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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const mobileLinks = VHH_DATA.mobileNavLinks || VHH_DATA.navLinks;

  const headerBgClass = mobileMenuOpen
    ? 'bg-[#0C1210] border-b border-emerald-900/60 shadow-2xl'
    : isScrolled
    ? 'bg-white/95 backdrop-blur-md py-4 lg:py-5 shadow-md border-b border-stone-200/80'
    : 'bg-gradient-to-b from-[#0C1210]/95 via-[#0C1210]/60 to-transparent py-5 lg:py-6 border-b border-white/10';

  const logoVariant = mobileMenuOpen ? 'light' : isScrolled ? 'dark' : 'light';

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBgClass}`}>
        <div className="max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-8 xl:px-12 2xl:px-16 flex items-center justify-between">
          
          {/* Left Side: Brand Logo */}
          <Link 
            href="/" 
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center shrink-0 mr-4 lg:mr-6 xl:mr-10 2xl:mr-14"
          >
            <Logo variant={logoVariant} />
          </Link>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-8">
            {VHH_DATA.navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs xl:text-sm font-semibold tracking-wide transition-all duration-200 border-b-2 py-2 whitespace-nowrap ${
                    isActive
                      ? isScrolled
                        ? 'text-vhh-green-800 border-vhh-green-700 font-bold'
                        : 'text-white border-emerald-400 font-bold'
                      : isScrolled
                      ? 'text-vhh-charcoal hover:text-vhh-green-800 border-transparent hover:border-vhh-green-700'
                      : 'text-stone-200 hover:text-white border-transparent hover:border-emerald-400'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Side: Desktop Action CTAs */}
          <div className="hidden lg:flex items-center gap-2.5 xl:gap-4 shrink-0 ml-auto lg:ml-4 xl:ml-8">
            <button
              onClick={onOpenVolunteer}
              className={`px-3.5 xl:px-5 py-2 xl:py-2.5 rounded-xl text-xs xl:text-sm font-bold tracking-wider uppercase transition-all border whitespace-nowrap ${
                isScrolled
                  ? 'border-vhh-green-800 text-vhh-green-900 hover:bg-vhh-green-50'
                  : 'border-white/40 text-stone-100 hover:bg-white/15'
              }`}
            >
              Partner With Us
            </button>

            <button
              onClick={onOpenSupport}
              className="px-4 xl:px-6 py-2 xl:py-2.5 rounded-xl text-xs xl:text-sm font-bold tracking-wider uppercase bg-vhh-green-800 text-white shadow-md hover:bg-vhh-green-700 transition-all flex items-center gap-2 group border border-vhh-green-600/40 whitespace-nowrap"
            >
              <Heart className="w-3.5 xl:w-4 h-3.5 xl:h-4 text-vhh-red-500 fill-vhh-red-500 transition-transform group-hover:scale-110" />
              <span>Support Our Mission</span>
            </button>
          </div>

          {/* Mobile / Tablet Controls */}
          <div className="flex items-center gap-2 sm:gap-3 lg:hidden">
            {/* Quick Support Button in Navbar */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSupport();
              }}
              className="px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-vhh-green-800 text-white shadow-sm hover:bg-vhh-green-700 flex items-center gap-1.5 border border-emerald-600/40 transition-colors"
            >
              <Heart className="w-3.5 h-3.5 text-vhh-red-500 fill-vhh-red-500" />
              <span>Support</span>
            </button>

            {/* Hamburger / Close Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2.5 sm:p-3 rounded-xl transition-all border ${
                mobileMenuOpen
                  ? 'bg-white/15 text-white border-white/30 hover:bg-white/25'
                  : isScrolled
                  ? 'bg-stone-100 text-vhh-charcoal border-stone-300 hover:bg-stone-200'
                  : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
              }`}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* ========================================================================= */}
      {/* MOBILE & TABLET DRAWER WITH SOLID OPAQUE BACKDROP (NO OVERLAYS OR CLASHES) */}
      {/* ========================================================================= */}
      {mobileMenuOpen && (
        <>
          {/* Dark Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-stone-950/80 backdrop-blur-sm z-[90] lg:hidden animate-in fade-in duration-200"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Solid Drawer Container */}
          <div 
            className="fixed top-[66px] sm:top-[76px] inset-x-0 max-h-[calc(100vh-76px)] bg-[#0C1210] border-b border-emerald-900/60 z-[100] lg:hidden overflow-y-auto px-6 sm:px-8 py-6 shadow-2xl flex flex-col gap-5 text-white animate-in slide-in-from-top-2 duration-200"
          >
            {/* Header Status Tag */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[11px] font-mono text-stone-400">
              <span className="uppercase tracking-wider">VHH Navigation Directory</span>
              <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>239 Children &bull; Kuje, Abuja</span>
              </span>
            </div>

            {/* Menu Links */}
            <nav className="flex flex-col gap-1">
              {mobileLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between text-base font-serif font-bold py-3 px-3 rounded-xl transition-all border-b border-white/5 ${
                      isActive
                        ? 'bg-emerald-950/60 text-emerald-300 border-emerald-800/40 pl-4'
                        : 'text-stone-200 hover:text-emerald-300 hover:bg-white/5'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-emerald-400' : 'text-stone-500'}`} />
                  </Link>
                );
              })}
            </nav>

            {/* Action Buttons */}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSupport();
                }}
                className="w-full py-3.5 rounded-xl bg-vhh-green-700 hover:bg-vhh-green-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-colors border border-emerald-500/30"
              >
                <Heart className="w-4 h-4 text-vhh-red-500 fill-vhh-red-500" />
                <span>Support Our Mission (Direct Giving)</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenVolunteer();
                }}
                className="w-full py-3 rounded-xl border border-stone-600 hover:border-emerald-500 text-stone-200 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
              >
                <Handshake className="w-4 h-4 text-emerald-400" />
                <span>Visit &bull; Partner With Us</span>
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

            {/* Quick Contact Info */}
            <div className="pt-2 text-[11px] text-stone-400 flex flex-col gap-1 font-mono">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Kuje Area Council, Abuja, Nigeria</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Dispatch: 09019303646 &bull; 080344229935</span>
              </div>
            </div>

          </div>
        </>
      )}
    </>
  );
};
