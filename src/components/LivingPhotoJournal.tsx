'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { VHH_DATA, GalleryItem } from '@/data/vhhData';
import { Camera, Calendar, ArrowRight, Maximize2 } from 'lucide-react';
import Link from 'next/link';

interface LivingPhotoJournalProps {
  onSelectImage: (item: GalleryItem) => void;
}

export const LivingPhotoJournal: React.FC<LivingPhotoJournalProps> = ({ onSelectImage }) => {
  const journalEntries = VHH_DATA.momentsJournal;

  return (
    <section className="py-24 bg-vhh-cream text-vhh-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-vhh-green-100 border border-vhh-green-200 text-vhh-green-900 text-xs font-mono font-semibold uppercase tracking-widest mb-4">
            <Camera className="w-3.5 h-3.5 text-vhh-green-700" />
            <span>MOMENTS & RECENT EVENTS</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-vhh-charcoal leading-tight">
            Living Journal: <span className="italic font-normal text-vhh-green-800">Moments in Time.</span>
          </h2>

          <p className="mt-4 text-base text-vhh-muted font-light leading-relaxed">
            Real events, partner visits, celebrations, and construction achievements documented chronologically.
          </p>
        </div>

        {/* Timeline Photo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {journalEntries.map((entry, idx) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              onClick={() => onSelectImage({
                id: entry.id,
                title: entry.title,
                category: 'events',
                categoryLabel: entry.tag,
                imageUrl: entry.imageUrl,
                caption: entry.description
              })}
              className="rounded-3xl bg-white border border-vhh-green-900/10 overflow-hidden shadow-card hover:shadow-elevated transition-all group cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="h-60 overflow-hidden relative bg-vhh-dark">
                  <img
                    src={entry.imageUrl}
                    alt={entry.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-vhh-charcoal/80 via-transparent to-transparent" />
                  
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-mono font-bold bg-white text-vhh-charcoal shadow-md">
                    {entry.date}
                  </span>

                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Maximize2 className="w-4 h-4" />
                  </div>
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
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-[11px] font-semibold text-vhh-green-800">
                  <span>Logged Milestone</span>
                  <Calendar className="w-3.5 h-3.5 text-vhh-green-700" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Link to Full Journal */}
        <div className="text-center">
          <Link
            href="/moments"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-vhh-green-800 text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-vhh-green-700 transition-all group"
          >
            <span>View Full Photo Journal & Event Archive</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
};
