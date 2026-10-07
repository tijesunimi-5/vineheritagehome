'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { VHH_DATA } from '@/data/vhhData';
import { Sun, Clock } from 'lucide-react';

export const ChapterDayInLife: React.FC = () => {
  const sequence = VHH_DATA.dayInLifeSequence;

  return (
    <section className="py-28 bg-vhh-cream text-vhh-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-20 text-center mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vhh-green-100 border border-vhh-green-200 text-vhh-green-900 text-xs font-mono font-semibold uppercase tracking-widest mb-4">
            <Sun className="w-3.5 h-3.5 text-vhh-green-700" />
            <span>CHAPTER 04 &bull; A DAY AT VINE HERITAGE HOME</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-vhh-charcoal leading-tight">
            A Day in the Life. <br />
            <span className="italic font-normal text-vhh-green-800">Routine, Warmth, & Joy.</span>
          </h2>

          <p className="mt-4 text-base text-vhh-muted font-light leading-relaxed">
            Experience the daily rhythm of our children—from morning prayers and school prep to evening fellowship and quiet rest.
          </p>
        </div>

        {/* Editorial Chronological Sequence Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sequence.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group rounded-3xl bg-white border border-vhh-green-900/10 overflow-hidden shadow-card hover:shadow-elevated transition-all flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Slow Scale Hover */}
                <div className="relative h-60 overflow-hidden bg-vhh-dark">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-vhh-charcoal/80 via-transparent to-transparent" />
                  
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-mono font-bold bg-vhh-green-950 text-emerald-300 border border-emerald-700 shadow-md flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-emerald-400" />
                    {item.time}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-vhh-charcoal mb-2 group-hover:text-vhh-green-800 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-vhh-muted font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-[11px] font-semibold text-vhh-green-800 uppercase tracking-wider">
                  <span>Daily Rhythm</span>
                  <span className="w-2 h-2 rounded-full bg-vhh-green-600" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
