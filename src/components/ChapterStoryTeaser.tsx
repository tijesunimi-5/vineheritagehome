'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PlaceholderBadge } from './PlaceholderBadge';
import { BookOpen, ArrowRight, ShieldAlert } from 'lucide-react';
import Link from 'next/link';

export const ChapterStoryTeaser: React.FC = () => {
  return (
    <section className="py-28 bg-white text-vhh-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vhh-green-50 border border-vhh-green-200 text-vhh-green-900 text-xs font-mono font-semibold uppercase tracking-widest mb-6"
          >
            <BookOpen className="w-3.5 h-3.5 text-vhh-green-700" />
            <span>CHAPTER 05 &bull; THE STORY BEHIND THE HOME</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-vhh-charcoal leading-tight"
          >
            There is a story <br />
            <span className="italic font-normal text-vhh-green-800">behind every home.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 p-8 sm:p-10 rounded-3xl bg-vhh-cream border border-vhh-green-900/10 text-left relative shadow-sm"
          >
            <div className="flex items-center justify-between pb-4 border-b border-vhh-sand mb-6">
              <span className="text-xs font-mono font-bold text-vhh-green-800 uppercase tracking-widest">
                Organizational Genesis
              </span>
              <PlaceholderBadge text="[INSERT VERIFIED VINE HERITAGE HOME STORY]" />
            </div>

            <blockquote className="font-serif text-xl sm:text-2xl font-bold italic text-vhh-charcoal leading-relaxed">
              “Vine Heritage Home was established to answer a pressing humanitarian imperative. Vulnerable children never choose the harsh social realities into which they are born. Our mandate is to intervene with sanctuary, legal advocacy, and unyielding love.”
            </blockquote>

            <p className="mt-4 text-sm text-vhh-muted font-light leading-relaxed">
              Discover the full founding narrative, founder notes, historical context, early challenges, and long-term vision on our dedicated story page.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-vhh-sand">
              <div className="flex items-center gap-2 text-xs text-vhh-muted font-mono">
                <ShieldAlert className="w-4 h-4 text-amber-600" />
                <span>Zero Fabrication Protocol &bull; Verified Historical Records</span>
              </div>

              <Link
                href="/our-story"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-vhh-green-800 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:bg-vhh-green-700 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Read Our Full Story</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
