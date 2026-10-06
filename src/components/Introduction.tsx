'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { VHH_DATA } from '@/data/vhhData';
import { Home, ShieldCheck, TrendingUp, Sparkles, HeartHandshake } from 'lucide-react';

export const Introduction: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Home': return <Home className="w-7 h-7 text-vhh-green-700" />;
      case 'ShieldCheck': return <ShieldCheck className="w-7 h-7 text-vhh-green-700" />;
      case 'TrendingUp': return <TrendingUp className="w-7 h-7 text-vhh-green-700" />;
      case 'Sparkles': return <Sparkles className="w-7 h-7 text-vhh-red-600" />;
      default: return <HeartHandshake className="w-7 h-7 text-vhh-green-700" />;
    }
  };

  return (
    <section id="intro" className="py-24 bg-vhh-cream relative overflow-hidden text-vhh-charcoal">
      {/* Background Accent Lines */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-vhh-green-100/40 rounded-full blur-3xl -z-10 transform translate-x-1/3 -translate-y-1/3" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Statement */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold uppercase tracking-widest text-vhh-green-800 mb-4"
          >
            The Big Idea &bull; Institutional Mission
          </motion.p>
          
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-vhh-charcoal leading-snug"
          >
            “Every child deserves more than protection. They deserve a place to <span className="text-vhh-green-800 underline decoration-vhh-green-300 underline-offset-8">belong</span>, to <span className="text-vhh-green-800 underline decoration-vhh-green-300 underline-offset-8">learn</span>, to <span className="text-vhh-green-800 underline decoration-vhh-green-300 underline-offset-8">dream</span>, and to <span className="text-vhh-red-600 underline decoration-vhh-red-200 underline-offset-8">become</span>.”
          </motion.blockquote>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 text-lg text-vhh-muted max-w-2xl mx-auto font-light leading-relaxed"
          >
            Vine Heritage Home was built to transcend traditional emergency response. We provide a holistic home environment where vulnerability is transformed into dignity, strength, and long-term opportunity.
          </motion.p>
        </div>

        {/* Four Conceptual Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {VHH_DATA.fourPillars.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="glass-card p-8 rounded-2xl border border-vhh-green-900/10 hover:shadow-elevated transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 bg-white/80"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-vhh-green-50 border border-vhh-green-100 flex items-center justify-center mb-6 group-hover:bg-vhh-green-100 transition-colors">
                  {getIcon(pillar.iconName)}
                </div>

                <span className="text-xs font-semibold tracking-wider text-vhh-muted uppercase">
                  Pillar 0{idx + 1}
                </span>

                <h3 className="font-serif text-2xl font-bold text-vhh-charcoal mt-1 mb-2 group-hover:text-vhh-green-800 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs font-medium text-vhh-green-700 mb-4">
                  {pillar.subtitle}
                </p>

                <p className="text-sm text-vhh-muted font-normal leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-vhh-green-800">
                <span>Core Commitment</span>
                <span className="w-2 h-2 rounded-full bg-vhh-green-600" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
