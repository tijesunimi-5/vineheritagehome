'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { VHH_DATA } from '@/data/vhhData';
import { PlaceholderBadge } from './PlaceholderBadge';
import { ShoppingBag, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export const ChapterNeedsBoard: React.FC = () => {
  const needs = VHH_DATA.needsBoard;

  return (
    <section className="py-28 bg-vhh-cream text-vhh-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vhh-green-100 border border-vhh-green-200 text-vhh-green-900 text-xs font-mono font-semibold uppercase tracking-widest mb-4">
            <ShoppingBag className="w-3.5 h-3.5 text-vhh-green-700" />
            <span>CHAPTER 08 &bull; WHAT WE NEED RIGHT NOW</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-vhh-charcoal leading-tight">
            What Vine Heritage Home <span className="italic font-normal text-vhh-green-800">Needs.</span>
          </h2>

          <p className="mt-4 text-base text-vhh-muted font-light leading-relaxed">
            Real, itemized priority requirements across food supplies, school materials, health consumables, and facility upgrades.
          </p>
        </div>

        {/* Needs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {needs.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-7 rounded-3xl bg-white border border-vhh-green-900/10 shadow-card hover:shadow-elevated transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-vhh-green-50 text-vhh-green-800 border border-vhh-green-200">
                    {item.category}
                  </span>

                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-1 ${
                    item.status === 'Needed'
                      ? 'bg-amber-100 text-amber-900 border border-amber-300'
                      : 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                  }`}>
                    {item.status === 'Needed' ? <AlertCircle className="w-3 h-3 text-amber-600" /> : <Clock className="w-3 h-3 text-emerald-600" />}
                    <span>Status: {item.status}</span>
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-vhh-charcoal mb-2 group-hover:text-vhh-green-800 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-vhh-muted font-light leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 space-y-2">
                <PlaceholderBadge text={item.placeholderTag} className="w-full text-center justify-center py-1.5" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Support Need Action */}
        <div className="p-8 rounded-3xl bg-vhh-green-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h4 className="font-serif text-2xl font-bold">Can you assist with any of these needs?</h4>
            <p className="text-xs text-stone-300 mt-1 font-light">Direct in-kind donations or sponsored supply purchasing can be arranged directly with VHH leadership.</p>
          </div>

          <Link
            href="/get-involved"
            className="shrink-0 px-6 py-3.5 rounded-xl bg-vhh-green-700 text-white font-bold text-xs uppercase tracking-wider hover:bg-vhh-green-600 transition-colors shadow-md"
          >
            Sponsor a Need
          </Link>
        </div>

      </div>
    </section>
  );
};
