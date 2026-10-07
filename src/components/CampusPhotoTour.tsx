'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { VHH_DATA } from '@/data/vhhData';
import { Home, Sparkles, ArrowRight, Hammer } from 'lucide-react';
import Link from 'next/link';

export const CampusPhotoTour: React.FC = () => {
  const spaces = VHH_DATA.homeSpaces;

  return (
    <section className="py-24 bg-white text-vhh-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-vhh-green-50 border border-vhh-green-200 text-vhh-green-900 text-xs font-mono font-semibold uppercase tracking-widest mb-4">
            <Home className="w-3.5 h-3.5 text-vhh-green-700" />
            <span>PHYSICAL CAMPUS & ENVIRONMENT</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-vhh-charcoal leading-tight">
            Our Physical Home: <br />
            <span className="italic font-normal text-vhh-green-800">A Safe Sanctuary.</span>
          </h2>

          <p className="mt-4 text-base text-vhh-muted font-light leading-relaxed">
            Every building, dormitory, study hall, and playground at Vine Heritage Home is intentionally created to provide stability, peace, and dignity for our children.
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {spaces.map((space, idx) => (
            <motion.div
              key={space.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="rounded-3xl bg-vhh-cream border border-vhh-green-900/10 overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-60 overflow-hidden bg-vhh-dark">
                  <img
                    src={space.imageUrl}
                    alt={space.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-vhh-charcoal/80 via-transparent to-transparent" />
                  
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-vhh-charcoal backdrop-blur-md shadow-sm">
                    {space.tag}
                  </span>

                  {space.isConstruction && (
                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold bg-vhh-red-600 text-white shadow-md flex items-center gap-1.5">
                      <Hammer className="w-3.5 h-3.5" />
                      Active Expansion
                    </span>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-vhh-charcoal mb-2 group-hover:text-vhh-green-800 transition-colors">
                    {space.title}
                  </h3>
                  <p className="text-xs text-vhh-muted font-light leading-relaxed">
                    {space.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-vhh-sand flex items-center justify-between text-[11px] font-semibold text-vhh-green-800 uppercase tracking-wider">
                  <span>Dignified Living Space</span>
                  <span className="w-2 h-2 rounded-full bg-vhh-green-600" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Link to Full Campus Guide & 3D Masterplan */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-vhh-green-900 to-vhh-green-800 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Campus Expansion & Blueprint</span>
            </div>
            <h3 className="font-serif text-2xl font-bold">Want to explore our full physical facilities & 3D layout?</h3>
            <p className="text-xs text-stone-200 mt-1 font-light">View dormitories, dining halls, learning centers, and active construction projects in detail.</p>
          </div>

          <Link
            href="/our-home"
            className="shrink-0 px-6 py-3.5 rounded-xl bg-white text-vhh-green-900 font-bold text-xs uppercase tracking-wider hover:bg-emerald-100 transition-colors shadow-md flex items-center gap-2 group"
          >
            <span>Explore Campus Guide</span>
            <ArrowRight className="w-4 h-4 text-vhh-green-800 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
};
