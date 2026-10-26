'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info } from 'lucide-react';

interface PartnerItem {
  id: string;
  name: string;
  sub: string;
  role: string;
  briefInfo: string;
  isCustomFont?: boolean;
  logo: React.ReactNode;
}

export const PartnershipStrip: React.FC = () => {
  // Track hovered item by exact index so only ONE single item highlights and shows tooltip
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const partners: PartnerItem[] = [
    {
      id: "eu",
      name: "European Union",
      sub: "Commission in Nigeria",
      role: "Official Project Sponsor",
      briefInfo: "Official funding sponsor for the MATAI anti-infanticide initiative across 58 communities.",
      logo: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="currentColor">
          <circle cx="12" cy="12" r="9.5" fill="#003399" />
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const x = 12 + 6.2 * Math.sin(angle);
            const y = 12 - 6.2 * Math.cos(angle);
            return <circle key={i} cx={x} cy={y} r="0.75" fill="#FFCC00" />;
          })}
        </svg>
      )
    },
    {
      id: "actionaid",
      name: "actionaid",
      sub: "Nigeria",
      role: "Project Co-Implementer",
      isCustomFont: true,
      briefInfo: "Humanitarian co-implementer mobilizing community action against infanticide across 58 villages.",
      logo: (
        <div className="w-5 h-5 rounded-md bg-[#ED1C24] flex items-center justify-center text-white font-bold text-xs shadow-xs shrink-0">
          a
        </div>
      )
    },
    {
      id: "amnesty",
      name: "AMNESTY",
      sub: "INTERNATIONAL",
      role: "Human Rights Partner",
      briefInfo: "Conducted landmark 2014 human rights advocacy in 10 communities between Abaji and Kwali.",
      logo: (
        <div className="w-5 h-5 rounded-md bg-stone-900 flex items-center justify-center text-[#ffff00] shadow-xs shrink-0">
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
            <path d="M12 2a4 4 0 0 0-4 4c0 1.5.8 2.8 2 3.5V17a2 2 0 0 0 4 0V9.5c1.2-.7 2-2 2-3.5a4 4 0 0 0-4-4zm0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm-1 7h2v6h-2v-6z" />
          </svg>
        </div>
      )
    },
    {
      id: "fct",
      name: "FCT Administration",
      sub: "Federal Capital Territory",
      role: "Ministerial Panel Oversight",
      briefInfo: "Constituted the official Ministerial Panel of Enquiry that verified and confirmed VHH's rescue mission.",
      logo: (
        <div className="w-5 h-5 rounded-full bg-[#008751] flex items-center justify-center text-white shadow-xs shrink-0">
          <svg viewBox="0 0 24 24" className="w-3 h-3" fill="currentColor">
            <path d="M12 2L3 6v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-9-4z" />
          </svg>
        </div>
      )
    },
    {
      id: "noa",
      name: "National Orientation Agency",
      sub: "NOA Nigeria",
      role: "Child Rights Committee",
      briefInfo: "Governmental agency facilitating community enlightenment on children's rights to life.",
      logo: (
        <div className="w-5 h-5 rounded-full bg-teal-800 flex items-center justify-center text-white text-[9px] font-bold shadow-xs shrink-0">
          NOA
        </div>
      )
    },
    {
      id: "cmf",
      name: "Christian Missionary Foundation",
      sub: "CMF Nigeria",
      role: "Founding Affiliation",
      briefInfo: "Missionary affiliation that has supported field rescue operations and caregivers since 1996.",
      logo: (
        <div className="w-5 h-5 rounded-full bg-stone-800 flex items-center justify-center text-stone-100 shadow-xs shrink-0">
          <svg viewBox="0 0 24 24" className="w-3 h-3" fill="currentColor">
            <path d="M10 2h4v6h6v4h-6v10h-4V12H4V8h6V2z" />
          </svg>
        </div>
      )
    }
  ];

  // 4 sets for mathematically seamless -50% loop on any screen width
  const marqueeList = [...partners, ...partners, ...partners, ...partners];

  return (
    <div 
      aria-label="Institutional Partner Logos" 
      className="w-full bg-[#f6f4ee] border-y border-stone-200/90 py-3 relative overflow-hidden select-none pause-on-hover"
    >
      {/* Full-width Marquee Viewport with Soft Edge Fades */}
      <div className="relative w-full overflow-hidden flex items-center min-h-[52px]">
        
        {/* Edge Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#f6f4ee] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#f6f4ee] to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track: Strictly single continuous horizontal line */}
        <div className="animate-marquee flex flex-row flex-nowrap items-center gap-6 sm:gap-10 whitespace-nowrap py-1 px-4">
            {marqueeList.map((partner, index) => {
              const isCurrentHovered = hoveredIndex === index;

              return (
                <div
                  key={`${partner.id}-${index}`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`relative flex flex-row flex-nowrap items-center gap-2.5 px-3 py-1.5 rounded-xl transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                    isCurrentHovered
                      ? 'bg-white shadow-md border border-emerald-600/50 scale-105 z-30'
                      : 'hover:bg-white/70 border border-transparent opacity-75 hover:opacity-100 grayscale hover:grayscale-0'
                  }`}
                >
                  {/* Emblem */}
                  <div className={`shrink-0 transition-transform duration-200 ${
                    isCurrentHovered ? 'scale-110' : ''
                  }`}>
                    {partner.logo}
                  </div>

                  {/* Name & Subtitle */}
                  <div className="flex flex-col leading-tight whitespace-nowrap">
                    <span className={`text-xs tracking-tight transition-all duration-150 ${
                      isCurrentHovered
                        ? 'font-black text-vhh-green-950 underline decoration-emerald-500 underline-offset-2'
                        : 'font-bold text-stone-700'
                    } ${partner.isCustomFont ? 'font-sans font-extrabold lowercase' : 'font-sans'}`}>
                      {partner.name}
                    </span>
                    <span className={`text-[9px] font-mono uppercase tracking-wider ${
                      isCurrentHovered ? 'text-emerald-700 font-semibold' : 'text-stone-400'
                    }`}>
                      {partner.sub}
                    </span>
                  </div>

                  {/* Tooltip Card: only shown for THIS specific hovered instance */}
                  <AnimatePresence>
                    {isCurrentHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 4, scale: 0.95 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-64 p-3 rounded-xl bg-vhh-dark text-white border border-emerald-600/60 shadow-2xl z-50 pointer-events-none text-left whitespace-normal"
                      >
                        <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase text-emerald-400 font-bold mb-1">
                          <Info className="w-3 h-3 shrink-0" />
                          <span>{partner.role}</span>
                        </div>
                        <p className="text-[11px] font-sans text-stone-200 leading-snug">
                          {partner.briefInfo}
                        </p>
                        
                        {/* Downward triangle pointer */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-vhh-dark" />
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };
