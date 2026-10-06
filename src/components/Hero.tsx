'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ChevronDown, Compass, ShieldCheck } from 'lucide-react';
import { PlaceholderBadge } from './PlaceholderBadge';

interface HeroProps {
  onOpenSupport: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSupport }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-vhh-dark text-white pt-24 pb-16">
      {/* Cinematic Slow-Zoom Image Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 animate-slow-zoom"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1920&auto=format&fit=crop')`,
          }}
        />
        {/* Soft Multi-Layer Gradient Overlays for Dignity & Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-vhh-dark/95 via-vhh-green-950/80 to-vhh-dark/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-vhh-dark via-transparent to-vhh-dark/50" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Institutional Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-vhh-green-900/80 border border-vhh-green-600/40 text-emerald-200 text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-md shadow-lg"
        >
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Vine Heritage Home &bull; Nigeria</span>
          <span className="text-stone-400">|</span>
          <PlaceholderBadge text="[ABUJA REGION]" className="bg-emerald-950/60 text-emerald-200 border-emerald-700/50" />
        </motion.div>

        {/* Main Editorial Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-stone-100 leading-[1.1] max-w-4xl"
        >
          More Than a Home. <br />
          <span className="italic font-normal text-emerald-200">A Place to Grow.</span>
        </motion.h1>

        {/* Supporting Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-6 text-lg sm:text-xl text-stone-300 max-w-2xl font-light leading-relaxed"
        >
          Creating safe spaces, nurturing potential, and building brighter futures for vulnerable children across Nigeria.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={onOpenSupport}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-vhh-green-700 text-white font-semibold text-sm uppercase tracking-wider shadow-xl hover:bg-vhh-green-600 transition-all flex items-center justify-center gap-3 group border border-vhh-green-500/30"
          >
            <Heart className="w-5 h-5 text-vhh-red-500 fill-vhh-red-500 transition-transform group-hover:scale-110" />
            <span>Support Our Mission</span>
          </button>

          <a
            href="#story"
            className="w-full sm:w-auto px-8 py-4 rounded-xl border border-stone-400/40 bg-stone-900/40 backdrop-blur-md text-stone-200 font-semibold text-sm uppercase tracking-wider hover:bg-white/10 hover:text-white transition-all flex items-center justify-center gap-2"
          >
            <Compass className="w-4 h-4 text-emerald-300" />
            <span>Discover Our Story</span>
          </a>
        </motion.div>

        {/* Key Operational Pillars Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 pt-8 border-t border-stone-800/80 text-left w-full max-w-4xl"
        >
          <div>
            <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">Safety</p>
            <p className="text-sm font-medium text-stone-200 mt-1">Secure Protection</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">Care</p>
            <p className="text-sm font-medium text-stone-200 mt-1">Family & Wellbeing</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">Education</p>
            <p className="text-sm font-medium text-stone-200 mt-1">Schooling & Skills</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">Future</p>
            <p className="text-sm font-medium text-stone-200 mt-1">Self-Reliance</p>
          </div>
        </motion.div>

        {/* Subtle Scroll Indicator */}
        <motion.a
          href="#intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-12 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-stone-400 hover:text-emerald-300 transition-colors"
        >
          <span>Explore Vine Heritage Home</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-emerald-400" />
        </motion.a>

      </div>
    </section>
  );
};
