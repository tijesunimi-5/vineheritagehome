'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ChevronDown, Compass, ShieldCheck, MapPin } from 'lucide-react';
import { PlaceholderBadge } from './PlaceholderBadge';
import Link from 'next/link';

interface HeroProps {
  onOpenSupport: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSupport }) => {
  return (
    <section id="hero" className="relative h-screen min-h-[680px] flex items-center justify-center overflow-hidden bg-vhh-dark text-white pt-20">
      {/* Cinematic Slow-Zoom Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 animate-slow-zoom opacity-90"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1920&auto=format&fit=crop')`,
          }}
        />
        {/* Soft Multi-Layer Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-vhh-dark/95 via-vhh-green-950/75 to-vhh-dark/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-vhh-dark via-transparent to-vhh-dark/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
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

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-stone-100 leading-[1.05]"
        >
          More Than a Home.
        </motion.h1>

        {/* Short Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-6 text-xl sm:text-2xl text-stone-200 font-serif italic font-normal max-w-xl leading-relaxed text-emerald-100/90"
        >
          A place to belong, to grow, and to build a future.
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#chapter-idea"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-vhh-green-700 text-white font-semibold text-xs uppercase tracking-wider shadow-xl hover:bg-vhh-green-600 transition-all flex items-center justify-center gap-3 border border-vhh-green-500/30 group"
          >
            <Compass className="w-4 h-4 text-emerald-300 transition-transform group-hover:rotate-45 duration-300" />
            <span>Discover Vine Heritage Home</span>
          </a>

          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 rounded-xl border border-stone-400/40 bg-stone-900/40 backdrop-blur-md text-stone-200 font-semibold text-xs uppercase tracking-wider hover:bg-white/10 hover:text-white transition-all flex items-center justify-center gap-2"
          >
            <MapPin className="w-4 h-4 text-emerald-400" />
            <span>Plan a Visit</span>
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#chapter-idea"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-stone-400 hover:text-emerald-300 transition-colors"
        >
          <span>Begin Journey</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-emerald-400" />
        </motion.a>

      </div>
    </section>
  );
};
