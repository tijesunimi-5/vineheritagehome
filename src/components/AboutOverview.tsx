'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { VHH_DATA } from '@/data/vhhData';
import { Home, ShieldCheck, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const AboutOverview: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Home': return <Home className="w-6 h-6 text-vhh-green-700" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-vhh-green-700" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-vhh-green-700" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-vhh-red-600" />;
      default: return <Home className="w-6 h-6 text-vhh-green-700" />;
    }
  };

  return (
    <section className="py-20 bg-vhh-cream text-vhh-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Short High-Impact Headline */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-vhh-green-800 block mb-3">
            Who We Are &bull; Vine Heritage Home
          </span>
          
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-vhh-charcoal leading-snug">
            “Every child deserves more than protection. They deserve a place to <span className="text-vhh-green-800 underline decoration-vhh-green-300 underline-offset-4">belong</span>, <span className="text-vhh-green-800 underline decoration-vhh-green-300 underline-offset-4">learn</span>, and <span className="text-vhh-red-600 underline decoration-vhh-red-200 underline-offset-4">become</span>.”
          </h2>

          <p className="mt-4 text-base text-vhh-muted font-light leading-relaxed max-w-2xl mx-auto">
            Vine Heritage Home is a real Nigerian humanitarian institution providing safe shelter, accredited schooling, healthcare, and long-term nurture for vulnerable children.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {VHH_DATA.fourPillars.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-white border border-vhh-green-900/10 shadow-sm hover:shadow-card transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-vhh-green-50 border border-vhh-green-100 flex items-center justify-center mb-4 group-hover:bg-vhh-green-100 transition-colors">
                  {getIcon(pillar.iconName)}
                </div>

                <h3 className="font-serif text-xl font-bold text-vhh-charcoal mb-1 group-hover:text-vhh-green-800 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs font-semibold text-vhh-green-700 mb-2">
                  {pillar.subtitle}
                </p>

                <p className="text-xs text-vhh-muted font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gateway to Full Story */}
        <div className="text-center">
          <Link
            href="/our-story"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-vhh-green-800 hover:text-vhh-green-600 transition-colors group"
          >
            <span>Learn More About Our History & Founding Story</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
};
