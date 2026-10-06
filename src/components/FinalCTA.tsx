'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Compass, ShieldCheck } from 'lucide-react';

interface FinalCTAProps {
  onOpenSupport: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenSupport }) => {
  return (
    <section className="py-28 bg-vhh-green-950 text-white relative overflow-hidden">
      {/* Cinematic Background Image */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1920&auto=format&fit=crop')`,
          }}
        />
      </div>

      <div className="absolute inset-0 bg-hero-gradient opacity-95" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-16 h-16 rounded-3xl bg-vhh-green-800 border border-vhh-green-600/50 flex items-center justify-center mx-auto mb-8 shadow-2xl"
        >
          <ShieldCheck className="w-8 h-8 text-emerald-300" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl sm:text-6xl font-bold tracking-tight leading-tight"
        >
          Every child deserves a place to <span className="italic font-normal text-emerald-200">call home.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-lg sm:text-xl text-stone-300 font-light leading-relaxed max-w-2xl mx-auto"
        >
          Help Vine Heritage Home continue creating safe spaces, nurturing potential, and building brighter futures for vulnerable children across Nigeria.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={onOpenSupport}
            className="w-full sm:w-auto px-9 py-4 rounded-xl bg-vhh-green-700 text-white font-bold text-sm uppercase tracking-wider shadow-2xl hover:bg-vhh-green-600 transition-all flex items-center justify-center gap-3 border border-emerald-500/30 group"
          >
            <Heart className="w-5 h-5 text-vhh-red-500 fill-vhh-red-500 transition-transform group-hover:scale-110" />
            <span>Support Our Mission</span>
          </button>

          <a
            href="#story"
            className="w-full sm:w-auto px-9 py-4 rounded-xl border border-stone-400/30 bg-white/5 backdrop-blur-md text-stone-200 font-semibold text-sm uppercase tracking-wider hover:bg-white/10 hover:text-white transition-all flex items-center justify-center gap-2"
          >
            <Compass className="w-4 h-4 text-emerald-300" />
            <span>Learn More About VHH</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};
