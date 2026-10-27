'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Compass, 
  Heart, 
  Truck, 
  Utensils, 
  GraduationCap, 
  HeartPulse, 
  Baby, 
  ShieldCheck, 
  Stethoscope, 
  Handshake, 
  Landmark, 
  Layers, 
  X, 
  ArrowUp, 
  ChevronRight,
  Pin
} from 'lucide-react';

export interface FloatingNavItem {
  id: string;
  targetId: string;
  category?: string; // If targeting a specific tab in NeedsDirectory
  title: string;
  shortLabel: string;
  categoryTag: string;
  icon: React.ElementType;
  badgeColor?: string;
}

interface SupportFloatingNavProps {
  onOpenSupport?: () => void;
}

export const SupportFloatingNav: React.FC<SupportFloatingNavProps> = ({ onOpenSupport }) => {
  const [activeId, setActiveId] = useState<string>('overview');
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isPinned, setIsPinned] = useState<boolean>(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const navItems: FloatingNavItem[] = [
    {
      id: 'overview',
      targetId: 'overview',
      title: 'Directory Overview',
      shortLabel: 'Overview',
      categoryTag: 'Top',
      icon: Compass,
      badgeColor: 'text-stone-300'
    },
    {
      id: 'no-gift-too-small',
      targetId: 'no-gift-too-small',
      title: 'Our Giving Ethos',
      shortLabel: 'No Gift Too Small',
      categoryTag: 'Reassurance',
      icon: Heart,
      badgeColor: 'text-rose-400'
    },
    {
      id: 'logistics-guide',
      targetId: 'logistics-guide',
      title: 'Courier & Logistics Guide',
      shortLabel: 'Send Goods',
      categoryTag: 'Delivery to Kuje',
      icon: Truck,
      badgeColor: 'text-emerald-400'
    },
    {
      id: 'need-food',
      targetId: 'needs-directory',
      category: 'food',
      title: 'Food, Rice & Nigerian Dishes',
      shortLabel: 'Food Pantry',
      categoryTag: 'Needs: Food',
      icon: Utensils,
      badgeColor: 'text-amber-400'
    },
    {
      id: 'need-education',
      targetId: 'needs-directory',
      category: 'education',
      title: 'External School Fees & Books',
      shortLabel: 'School Fees',
      categoryTag: 'Needs: Education',
      icon: GraduationCap,
      badgeColor: 'text-blue-400'
    },
    {
      id: 'need-health',
      targetId: 'needs-directory',
      category: 'health',
      title: 'Clinic Consumables & Special Care',
      shortLabel: 'Medical Needs',
      categoryTag: 'Needs: Health',
      icon: HeartPulse,
      badgeColor: 'text-rose-400'
    },
    {
      id: 'need-newborns',
      targetId: 'needs-directory',
      category: 'newborns',
      title: 'Diapers, Formula & Infant Needs',
      shortLabel: 'Newborn Care',
      categoryTag: 'Needs: Infants',
      icon: Baby,
      badgeColor: 'text-amber-300'
    },
    {
      id: 'need-facility',
      targetId: 'needs-directory',
      category: 'facility',
      title: 'Cooling, CCTV, Power & Security',
      shortLabel: 'Sanctuary Facility',
      categoryTag: 'Needs: Home',
      icon: ShieldCheck,
      badgeColor: 'text-teal-400'
    },
    {
      id: 'medical-outreach',
      targetId: 'medical-outreach',
      title: 'Doctor Outreaches & Retainers',
      shortLabel: 'Doctor Alliances',
      categoryTag: 'Clinical Care',
      icon: Stethoscope,
      badgeColor: 'text-red-400'
    },
    {
      id: 'brand-partnerships',
      targetId: 'brand-partnerships',
      title: 'Brand & Diaper Alliances',
      shortLabel: 'Diaper Alliance',
      categoryTag: 'Corporate CSR',
      icon: Handshake,
      badgeColor: 'text-emerald-300'
    },
    {
      id: 'transparency',
      targetId: 'transparency',
      title: 'Bank Accounts & Transparency',
      shortLabel: 'Direct Bank Giving',
      categoryTag: 'Verified Accounts',
      icon: Landmark,
      badgeColor: 'text-emerald-400'
    }
  ];

  // ScrollSpy & Progress Calculation
  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }

      // Determine active section based on scroll position
      const scrollPosition = window.scrollY + 220;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const element = document.getElementById(item.targetId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveId(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll and category trigger
  const navigateToSection = (item: FloatingNavItem) => {
    if (item.category) {
      window.location.hash = item.category;
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    }

    const targetElement = document.getElementById(item.targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    setActiveId(item.id);
    setMobileDrawerOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveId('overview');
    setMobileDrawerOpen(false);
  };

  const isExpanded = isHovered || isPinned;
  const activeItem = navItems.find((item) => item.id === activeId) || navItems[0];

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. DESKTOP FLOATING VERTICAL LONG-HEIGHT PANEL (lg:screen >= 1024px)       */}
      {/* ========================================================================= */}
      <aside
        aria-label="Page Quick Navigation Panel"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="hidden lg:flex fixed right-4 xl:right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center select-none"
      >
        <motion.div
          animate={{ width: isExpanded ? 280 : 56 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className={`relative rounded-3xl bg-[#091510]/95 backdrop-blur-xl border shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between py-3.5 ${
            isExpanded
              ? 'border-emerald-500/50 shadow-emerald-950/50 px-3.5'
              : 'border-white/15 shadow-black/60 px-1.5'
          }`}
          style={{ maxHeight: 'calc(100vh - 120px)' }}
        >
          {/* Subtle Vertical Reading Progress Bar along the left edge */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/5 pointer-events-none">
            <div
              className="w-full bg-gradient-to-b from-emerald-400 to-emerald-600 transition-all duration-150"
              style={{ height: `${scrollProgress}%` }}
            />
          </div>

          {/* Top Panel Controls: Status & Pin Toggle */}
          <div className="flex items-center justify-between pb-2 mb-1.5 border-b border-white/10 w-full px-1">
            {isExpanded ? (
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-emerald-300">
                    Quick Access Nav
                  </span>
                </div>

                <button
                  onClick={() => setIsPinned(!isPinned)}
                  title={isPinned ? "Unpin panel (auto-collapse)" : "Pin panel open"}
                  className={`p-1 rounded-lg transition-colors text-xs flex items-center gap-1 ${
                    isPinned
                      ? 'bg-emerald-600/40 text-emerald-300 border border-emerald-400/30'
                      : 'text-stone-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Pin className={`w-3 h-3 ${isPinned ? 'rotate-45 text-emerald-300' : ''}`} />
                  <span className="text-[9px] font-mono">{isPinned ? 'Pinned' : 'Pin'}</span>
                </button>
              </div>
            ) : (
              <div className="w-full flex justify-center py-0.5">
                <Layers className="w-4 h-4 text-emerald-400 animate-pulse" />
              </div>
            )}
          </div>

          {/* Vertical Navigation Items List */}
          <nav className="flex flex-col gap-1 w-full overflow-y-auto overflow-x-hidden py-1 max-h-[calc(100vh-250px)] scrollbar-none">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeId === item.id;

              return (
                <div key={item.id} className="relative group/item w-full">
                  <button
                    onClick={() => navigateToSection(item)}
                    className={`w-full flex items-center rounded-2xl transition-all duration-200 text-left ${
                      isExpanded
                        ? 'px-2.5 py-2 gap-3'
                        : 'p-2 justify-center'
                    } ${
                      isActive
                        ? 'bg-emerald-900/60 text-white border border-emerald-500/40 shadow-sm'
                        : 'text-stone-300 hover:text-white hover:bg-white/10 border border-transparent'
                    }`}
                  >
                    {/* Icon Container with Active Dot */}
                    <div className="relative shrink-0 flex items-center justify-center">
                      <div
                        className={`w-7 h-7 rounded-xl flex items-center justify-center transition-all duration-200 ${
                          isActive
                            ? 'bg-emerald-500 text-stone-950 font-bold shadow-md shadow-emerald-500/30 scale-105'
                            : 'bg-white/5 text-stone-300 group-hover/item:text-emerald-300 group-hover/item:bg-white/15'
                        }`}
                      >
                        <IconComponent className="w-3.5 h-3.5" />
                      </div>

                      {/* Small Active Badge Dot when collapsed */}
                      {!isExpanded && isActive && (
                        <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-[#091510] animate-ping" />
                      )}
                    </div>

                    {/* Expanded Content: Title & Tag */}
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -8 }}
                        transition={{ duration: 0.18 }}
                        className="flex flex-col min-w-0 flex-1 leading-tight"
                      >
                        <div className="flex items-center justify-between gap-1">
                          <span
                            className={`text-xs font-semibold truncate ${
                              isActive ? 'text-emerald-200 font-bold' : 'text-stone-200'
                            }`}
                          >
                            {item.shortLabel}
                          </span>
                          <span className="text-[9px] font-mono text-stone-400 shrink-0">
                            {item.categoryTag}
                          </span>
                        </div>
                        <span className="text-[10px] text-stone-400 truncate font-light">
                          {item.title}
                        </span>
                      </motion.div>
                    )}
                  </button>

                  {/* Hover Tooltip when panel is COLLAPSED */}
                  {!isExpanded && (
                    <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover/item:opacity-100 transition-opacity duration-150 z-50 whitespace-nowrap">
                      <div className="px-3 py-1.5 rounded-xl bg-stone-950/95 text-white border border-emerald-500/40 shadow-xl backdrop-blur-md flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-emerald-200 leading-none">
                            {item.shortLabel}
                          </span>
                          <span className="text-[10px] text-stone-300 leading-tight mt-0.5">
                            {item.title}
                          </span>
                        </div>
                        <div className="w-0 h-0 border-y-4 border-y-transparent border-l-4 border-l-stone-950 absolute left-full top-1/2 -translate-y-1/2" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Bottom Controls: Quick Action & Back to Top */}
          <div className="pt-2 mt-1.5 border-t border-white/10 w-full flex flex-col gap-1.5">
            {isExpanded ? (
              <div className="space-y-1.5 w-full">
                {onOpenSupport && (
                  <button
                    onClick={onOpenSupport}
                    className="w-full py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-emerald-950/60"
                  >
                    <Heart className="w-3.5 h-3.5 text-rose-300 fill-rose-300" />
                    <span>Donate Directly</span>
                  </button>
                )}

                <button
                  onClick={scrollToTop}
                  className="w-full py-1.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-stone-300 hover:text-white text-[10px] font-mono transition-colors flex items-center justify-between"
                >
                  <span>Return to Top</span>
                  <ArrowUp className="w-3 h-3 text-emerald-400" />
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-1.5">
                {onOpenSupport && (
                  <button
                    onClick={onOpenSupport}
                    title="Direct Bank Support"
                    className="w-8 h-8 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-md transition-all hover:scale-110"
                  >
                    <Heart className="w-3.5 h-3.5 text-rose-300 fill-rose-300" />
                  </button>
                )}

                <button
                  onClick={scrollToTop}
                  title="Scroll back to top"
                  className="w-8 h-8 rounded-xl bg-white/5 hover:bg-white/15 text-stone-300 flex items-center justify-center transition-colors"
                >
                  <ArrowUp className="w-3.5 h-3.5 text-emerald-400" />
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </aside>

      {/* ========================================================================= */}
      {/* 2. MOBILE & TABLET FLOATING DOCK & DRAWER (< 1024px)                       */}
      {/* ========================================================================= */}
      <div className="lg:hidden">
        {/* Floating Trigger Pill on Mobile */}
        <div className="fixed right-3 sm:right-5 bottom-5 z-40">
          <button
            onClick={() => setMobileDrawerOpen(true)}
            className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#0A1A14] text-white border border-emerald-500/40 shadow-2xl backdrop-blur-md active:scale-95 transition-all"
            aria-label="Open Sections Quick Access Menu"
          >
            <div className="relative">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 block animate-pulse" />
            </div>

            <div className="flex items-center gap-1.5 text-xs font-bold font-mono">
              <Layers className="w-3.5 h-3.5 text-emerald-400" />
              <span>Jump:</span>
              <span className="text-emerald-300 truncate max-w-[110px] font-sans font-semibold">
                {activeItem.shortLabel}
              </span>
            </div>

            <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[10px] text-stone-300 ml-0.5">
              &uarr;
            </div>
          </button>
        </div>

        {/* Mobile Full Quick Access Drawer */}
        <AnimatePresence>
          {mobileDrawerOpen && (
            <>
              {/* Dark Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileDrawerOpen(false)}
                className="fixed inset-0 bg-stone-950/80 backdrop-blur-sm z-50"
                aria-hidden="true"
              />

              {/* Bottom Sheet Modal */}
              <motion.div
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={{ type: 'spring', damping: 26, stiffness: 260 }}
                className="fixed inset-x-0 bottom-0 max-h-[85vh] bg-[#0A1A14] border-t border-emerald-500/40 rounded-t-3xl shadow-2xl z-50 flex flex-col p-5 text-white"
              >
                {/* Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center">
                      <Layers className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-sm text-white">Quick Access Directory</h4>
                      <p className="text-[10px] font-mono text-emerald-400">Jump directly to any section</p>
                    </div>
                  </div>

                  <button
                    onClick={() => setMobileDrawerOpen(false)}
                    className="p-1.5 rounded-full bg-white/10 text-stone-300 hover:text-white"
                    aria-label="Close Quick Navigation"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Items Grid / List */}
                <div className="overflow-y-auto py-3 space-y-1.5 max-h-[58vh]">
                  {navItems.map((item) => {
                    const IconComp = item.icon;
                    const isActive = activeId === item.id;

                    return (
                      <button
                        key={item.id}
                        onClick={() => navigateToSection(item)}
                        className={`w-full flex items-center justify-between p-3 rounded-2xl transition-all text-left ${
                          isActive
                            ? 'bg-emerald-900/60 border border-emerald-500/50 text-white pl-4'
                            : 'bg-white/5 border border-white/5 text-stone-300 active:bg-white/10'
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div
                            className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                              isActive
                                ? 'bg-emerald-500 text-stone-950 font-bold'
                                : 'bg-white/10 text-stone-300'
                            }`}
                          >
                            <IconComp className="w-4 h-4" />
                          </div>

                          <div className="min-w-0">
                            <span className="text-xs font-bold text-white block truncate">
                              {item.title}
                            </span>
                            <span className="text-[10px] text-stone-400 block font-mono">
                              {item.categoryTag}
                            </span>
                          </div>
                        </div>

                        <ChevronRight className={`w-4 h-4 shrink-0 ${isActive ? 'text-emerald-400' : 'text-stone-500'}`} />
                      </button>
                    );
                  })}
                </div>

                {/* Mobile Bottom CTAs */}
                <div className="pt-3 border-t border-white/10 flex items-center gap-2">
                  {onOpenSupport && (
                    <button
                      onClick={() => {
                        setMobileDrawerOpen(false);
                        onOpenSupport();
                      }}
                      className="flex-1 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md"
                    >
                      <Heart className="w-3.5 h-3.5 text-rose-300 fill-rose-300" />
                      <span>Direct Support</span>
                    </button>
                  )}

                  <button
                    onClick={scrollToTop}
                    className="px-4 py-3 rounded-xl bg-white/10 text-stone-200 text-xs font-mono font-semibold flex items-center gap-1.5"
                  >
                    <ArrowUp className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Top</span>
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
