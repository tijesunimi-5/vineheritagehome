'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { VHH_DATA } from '@/data/vhhData';
import { ArrowRight, ShieldCheck, Heart, GraduationCap, Award, Compass, Sparkles } from 'lucide-react';

export const MoreThanAnOrphanage: React.FC = () => {
  const pipelineSteps = [
    { name: "Safe Home", icon: ShieldCheck },
    { name: "Education", icon: GraduationCap },
    { name: "Development", icon: Award },
    { name: "Community", icon: Heart },
    { name: "Future", icon: Sparkles },
  ];

  return (
    <section className="py-24 bg-vhh-green-950 text-white relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-hero-gradient opacity-80" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-vhh-dark to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-vhh-green-900 border border-vhh-green-700 text-emerald-300 text-xs font-semibold uppercase tracking-widest mb-6"
          >
            <Compass className="w-3.5 h-3.5 text-emerald-400" />
            <span>Defining Our Paradigm</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-stone-100 leading-tight"
          >
            More Than an Orphanage. <br />
            <span className="italic font-normal text-emerald-200">A Place to Become.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg text-stone-300 font-light leading-relaxed max-w-2xl mx-auto"
          >
            We do not operate as a passive holding facility. Vine Heritage Home is an active human developmental campus where children discover who they are and who they can be.
          </motion.p>
        </div>

        {/* Visual Transformation Pipeline Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 p-6 sm:p-8 rounded-3xl bg-vhh-green-900/60 border border-vhh-green-700/50 backdrop-blur-md shadow-2xl"
        >
          <p className="text-center text-xs uppercase tracking-widest text-emerald-300 font-bold mb-6">
            The Continuous Transformation Continuum
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            {pipelineSteps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <React.Fragment key={idx}>
                  <div className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-vhh-green-800/80 border border-emerald-500/20 shadow-sm text-stone-100">
                    <IconComp className="w-5 h-5 text-emerald-400" />
                    <span className="text-sm font-bold tracking-wide">{step.name}</span>
                  </div>
                  {idx < pipelineSteps.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-emerald-500 hidden sm:block shrink-0" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </motion.div>

        {/* 5 Content Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VHH_DATA.transformationPillars.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.12 }}
              className="p-8 rounded-3xl bg-vhh-green-900/40 border border-vhh-green-700/40 hover:border-emerald-500/50 hover:bg-vhh-green-900/70 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950 text-emerald-300 border border-emerald-800">
                    {pillar.tag}
                  </span>
                  <span className="font-serif text-sm font-bold text-stone-400">0{idx + 1}</span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-stone-100 mb-2 group-hover:text-emerald-200 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-4">
                  {pillar.subtitle}
                </p>

                <p className="text-sm text-stone-300 font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-vhh-green-800/60 flex items-center justify-between text-xs font-medium text-emerald-300">
                <span>Holistic Nurture</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
