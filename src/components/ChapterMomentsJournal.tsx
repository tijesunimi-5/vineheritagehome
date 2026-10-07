'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { VHH_DATA } from '@/data/vhhData';
import { Calendar, ArrowRight, Camera } from 'lucide-react';
import Link from 'next/link';

export const ChapterMomentsJournal: React.FC = () => {
  const journal = VHH_DATA.momentsJournal;

  return (
    <section className="py-28 bg-white text-vhh-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vhh-green-50 border border-vhh-green-200 text-vhh-green-900 text-xs font-mono font-semibold uppercase tracking-widest mb-4">
            <Camera className="w-3.5 h-3.5 text-vhh-green-700" />
            <span>CHAPTER 07 &bull; MOMENTS AT VINE HERITAGE HOME</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-vhh-charcoal leading-tight">
            Moments & <span className="italic font-normal text-vhh-green-800">Living Journal.</span>
          </h2>

          <p className="mt-4 text-base text-vhh-muted font-light leading-relaxed">
            Real events, partner visits, educational achievements, celebrations, and construction milestones documented over time.
          </p>
        </div>

        {/* Timeline Entries */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {journal.map((entry, idx) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="rounded-3xl bg-vhh-cream border border-vhh-green-900/10 overflow-hidden shadow-sm hover:shadow-card transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="h-52 overflow-hidden relative bg-vhh-dark">
                  <img
                    src={entry.imageUrl}
                    alt={entry.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-vhh-charcoal/70 via-transparent to-transparent" />
                  
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-mono font-bold bg-white text-vhh-charcoal shadow-md">
                    {entry.date}
                  </span>
                </div>

                <div className="p-6">
                  <span className="text-[11px] font-semibold text-vhh-green-800 uppercase tracking-widest block mb-1">
                    {entry.tag}
                  </span>

                  <h3 className="font-serif text-xl font-bold text-vhh-charcoal mb-2 group-hover:text-vhh-green-800 transition-colors">
                    {entry.title}
                  </h3>

                  <p className="text-xs text-vhh-muted font-light leading-relaxed">
                    {entry.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-vhh-sand flex items-center justify-between text-[11px] font-semibold text-vhh-green-800">
                  <span>Logged Milestone</span>
                  <Calendar className="w-3.5 h-3.5 text-vhh-green-700" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Full Journal Archive */}
        <div className="text-center">
          <Link
            href="/moments"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-vhh-green-800 text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-vhh-green-700 transition-all group"
          >
            <span>View Full Moments Archive & Photo Journal</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
};
