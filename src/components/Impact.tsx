'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { VHH_DATA } from '@/data/vhhData';
import { PlaceholderBadge } from './PlaceholderBadge';
import { BarChart3, Clock, Sparkles, AlertCircle } from 'lucide-react';

export const Impact: React.FC = () => {
  return (
    <section id="impact" className="py-24 bg-vhh-green-950 text-white relative overflow-hidden">
      {/* Subtle Gradient Overlays */}
      <div className="absolute inset-0 bg-hero-gradient opacity-90" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-vhh-green-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-vhh-green-900 border border-vhh-green-700 text-emerald-300 text-xs font-semibold uppercase tracking-widest mb-6">
            <BarChart3 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Verifiable Institutional Impact</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-stone-100 leading-tight">
            Empirical Impact. <br />
            <span className="italic font-normal text-emerald-200">Human Futures.</span>
          </h2>

          <p className="mt-6 text-lg text-stone-300 font-light leading-relaxed max-w-2xl mx-auto">
            We track our progress through lives transformed, educational milestones reached, and long-term security provided to children across Nigeria.
          </p>
        </div>

        {/* 4 Impact Stat Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {VHH_DATA.impactStats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="p-8 rounded-3xl bg-vhh-green-900/60 border border-vhh-green-700/50 backdrop-blur-md hover:border-emerald-400/40 transition-all flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-emerald-400">STAT 0{idx + 1}</span>
                  <PlaceholderBadge text={stat.placeholderValue} className="bg-emerald-950 text-emerald-200 border-emerald-700" />
                </div>

                <div className="font-serif text-4xl sm:text-5xl font-bold text-white mb-3 group-hover:text-emerald-200 transition-colors">
                  {stat.defaultDisplay}
                </div>

                <h4 className="font-serif font-bold text-lg text-emerald-100 mb-2">
                  {stat.label}
                </h4>

                <p className="text-xs text-stone-300 font-light leading-relaxed">
                  {stat.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-vhh-green-800/80 flex items-center gap-1.5 text-[10px] text-stone-400">
                <AlertCircle className="w-3 h-3 text-amber-400 shrink-0" />
                <span className="truncate">{stat.note}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Central Editorial Quote */}
        <div className="max-w-4xl mx-auto text-center mb-24 p-8 sm:p-12 rounded-3xl bg-vhh-dark/90 border border-vhh-green-700/40 shadow-2xl">
          <blockquote className="font-serif text-2xl sm:text-4xl font-bold italic text-stone-100 leading-relaxed">
            “Behind every single number is a child, a story, and a future waiting to unfold.”
          </blockquote>
          <p className="mt-4 text-xs font-semibold tracking-widest text-emerald-400 uppercase">
            Vine Heritage Home Mandate
          </p>
        </div>

        {/* Editorial Impact Timeline */}
        <div className="p-8 sm:p-12 rounded-3xl bg-vhh-green-900/40 border border-vhh-green-700/40">
          <h3 className="font-serif text-2xl font-bold text-stone-100 mb-8 flex items-center gap-3">
            <Clock className="w-6 h-6 text-emerald-400" />
            <span>Institutional Progress Roadmap</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="p-5 rounded-2xl bg-vhh-green-950 border border-vhh-green-800">
              <PlaceholderBadge text="[FOUNDING YEAR]" className="mb-2" />
              <h4 className="font-serif font-bold text-white text-base">Founding Phase</h4>
              <p className="text-xs text-stone-300 mt-2">Establishment of sanctuary and initial child rescue intake.</p>
            </div>

            <div className="p-5 rounded-2xl bg-vhh-green-950 border border-vhh-green-800">
              <PlaceholderBadge text="[EARLY YEARS]" className="mb-2" />
              <h4 className="font-serif font-bold text-white text-base">Care Stabilization</h4>
              <p className="text-xs text-stone-300 mt-2">Formalizing school partnerships, nutrition, and healthcare support.</p>
            </div>

            <div className="p-5 rounded-2xl bg-vhh-green-950 border border-vhh-green-800">
              <PlaceholderBadge text="[MAJOR DEVELOPMENT]" className="mb-2" />
              <h4 className="font-serif font-bold text-white text-base">Campus Construction</h4>
              <p className="text-xs text-stone-300 mt-2">Building dedicated dormitories, study halls, and play facilities.</p>
            </div>

            <div className="p-5 rounded-2xl bg-vhh-green-950 border border-vhh-green-800">
              <PlaceholderBadge text="[CURRENT HOME]" className="mb-2" />
              <h4 className="font-serif font-bold text-white text-base">Current Capacity</h4>
              <p className="text-xs text-stone-300 mt-2">Full-time residence, school sponsorships, and holistic nurture.</p>
            </div>

            <div className="p-5 rounded-2xl bg-vhh-green-950 border border-emerald-500/40">
              <div className="inline-flex items-center gap-1 text-emerald-300 text-xs font-bold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>[FUTURE VISION]</span>
              </div>
              <h4 className="font-serif font-bold text-white text-base">Expansion Horizon</h4>
              <p className="text-xs text-stone-300 mt-2">Tertiary scholarships, tech hubs, and youth independence housing.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
