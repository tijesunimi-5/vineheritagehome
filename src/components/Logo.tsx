'use client';

import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'dark', className = "" }) => {
  const isDark = variant === 'dark';

  return (
    <div className={`flex items-center gap-2.5 group cursor-pointer select-none ${className}`}>
      {/* Brand Emblem Icon */}
      <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-vhh-green-900 border border-vhh-green-700/40 flex items-center justify-center shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-105 shrink-0">
        {/* Soft background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-vhh-green-700 to-vhh-green-950 opacity-90" />
        
        {/* Vine & Leaf SVG Emblem */}
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 w-5 h-5 sm:w-6 sm:h-6 text-emerald-100"
        >
          {/* Main Stem & Vine Curve */}
          <path
            d="M10 32C10 32 14 24 20 20C26 16 30 10 30 10"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Left Leaf */}
          <path
            d="M14 23C10 21 8 16 11 12C15 13 18 17 18 20"
            fill="#34D399"
            fillOpacity="0.85"
          />
          {/* Right Leaf */}
          <path
            d="M23 16C27 15 31 18 30 22C26 23 21 21 21 18"
            fill="#10B981"
            fillOpacity="0.9"
          />
          {/* Warm Red Accent Blossom/Bud */}
          <circle cx="28" cy="11" r="2.5" fill="#B83232" />
        </svg>
      </div>

      {/* Brand Name Typography */}
      <div className="flex flex-col">
        <span
          className={`font-serif text-base sm:text-lg lg:text-xl font-bold tracking-tight leading-tight whitespace-nowrap ${
            isDark ? 'text-vhh-charcoal' : 'text-white'
          }`}
        >
          Vine Heritage Home
        </span>
        <span
          className={`text-[9px] font-sans tracking-widest uppercase font-semibold hidden xl:block ${
            isDark ? 'text-vhh-green-800' : 'text-emerald-200/90'
          }`}
        >
          Nigeria &bull; Care &bull; Growth &bull; Protection
        </span>
      </div>
    </div>
  );
};
