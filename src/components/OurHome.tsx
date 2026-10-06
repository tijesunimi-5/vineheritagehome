'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { VHH_DATA } from '@/data/vhhData';
import { CampusMasterplanPreview } from './CampusMasterplanPreview';
import { Home, Hammer, Sparkles, Image as ImageIcon } from 'lucide-react';

export const OurHome: React.FC = () => {
  return (
    <section id="our-home" className="py-24 bg-vhh-cream text-vhh-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-vhh-green-100 text-vhh-green-900 text-xs font-semibold uppercase tracking-wider mb-4">
            <Home className="w-3.5 h-3.5 text-vhh-green-700" />
            <span>Physical Campus & Living Environment</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-vhh-charcoal leading-tight">
            Our Home: <span className="italic font-normal text-vhh-green-800">A Physical Sanctuary.</span>
          </h2>

          <p className="mt-6 text-lg text-vhh-muted font-light leading-relaxed">
            We believe that environment shapes destiny. Every building, bedroom, playground, and garden at Vine Heritage Home is intentionally created to instill safety, peace, and pride in our children.
          </p>
        </div>

        {/* Home Spaces Photo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {VHH_DATA.homeSpaces.map((space, idx) => (
            <motion.div
              key={space.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="rounded-3xl bg-white border border-vhh-green-900/10 overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden bg-vhh-green-900">
                  <img
                    src={space.imageUrl}
                    alt={space.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-vhh-charcoal/80 via-transparent to-transparent" />
                  
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-vhh-charcoal shadow-md backdrop-blur-md">
                    {space.tag}
                  </span>

                  {space.isConstruction && (
                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold bg-vhh-red-600 text-white shadow-md flex items-center gap-1.5 animate-pulse">
                      <Hammer className="w-3.5 h-3.5" />
                      Active Expansion
                    </span>
                  )}
                </div>

                {/* Body Content */}
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-vhh-charcoal mb-2 group-hover:text-vhh-green-800 transition-colors">
                    {space.title}
                  </h3>
                  <p className="text-sm text-vhh-muted font-light leading-relaxed">
                    {space.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-medium text-vhh-green-800">
                  <span>Dignified Living Space</span>
                  <ImageIcon className="w-4 h-4 text-vhh-green-600" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Subsection: Growing With Purpose */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-vhh-green-900 to-vhh-green-800 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-emerald-700">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Growing With Purpose</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl font-bold leading-snug">
              Continuous Campus Expansion & Facility Upgrades
            </h3>

            <p className="mt-4 text-sm sm:text-base text-stone-200 font-light leading-relaxed">
              Vine Heritage Home is actively developing its physical campus to expand intake capacity, construct dedicated STEM learning centers, and improve living accommodations. We view development not as a deficit, but as evidence of continuous progress and dynamic growth.
            </p>
          </div>

          <div className="shrink-0 flex flex-col items-center p-6 rounded-2xl bg-vhh-dark/60 border border-emerald-500/30 text-center min-w-[240px]">
            <p className="text-xs uppercase tracking-widest text-emerald-300 font-bold mb-1">Current Focus</p>
            <p className="font-serif text-2xl font-bold text-white mb-2">Expansion Phase</p>
            <p className="text-xs text-stone-300">Growth &bull; Development &bull; Future Safety</p>
          </div>
        </div>

        {/* Masterplan Blueprint Component */}
        <CampusMasterplanPreview />

      </div>
    </section>
  );
};
