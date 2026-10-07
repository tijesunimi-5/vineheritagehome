'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PlaceholderBadge } from './PlaceholderBadge';
import { ShieldCheck, Heart, ArrowRight, Lock } from 'lucide-react';
import Link from 'next/link';

export const ChapterChildrenStories: React.FC = () => {
  const teaserStories = [
    {
      title: "A Story of Protection",
      tag: "Sanctuary & Safety",
      summary: "Intervening where vulnerable children require immediate, secure shelter and guardian protection.",
      placeholder: "[VERIFIED PROTECTION STORY — CONSENT REQUIRED]",
    },
    {
      title: "A Story of Resilience",
      tag: "Academic Growth",
      summary: "Restoring educational confidence and encouraging young minds to excel in school and STEM subjects.",
      placeholder: "[VERIFIED RESILIENCE STORY — CONSENT REQUIRED]",
    },
    {
      title: "A Story of Possibility",
      tag: "Talent & Dreams",
      summary: "Discovering creative talents in painting, athletics, music, and vocational crafts.",
      placeholder: "[VERIFIED POSSIBILITY STORY — CONSENT REQUIRED]",
    }
  ];

  return (
    <section className="py-28 bg-vhh-cream text-vhh-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vhh-green-100 border border-vhh-green-200 text-vhh-green-900 text-xs font-mono font-semibold uppercase tracking-widest mb-4">
            <Heart className="w-3.5 h-3.5 text-vhh-red-600 fill-vhh-red-600" />
            <span>CHAPTER 06 &bull; EVERY CHILD HAS A STORY</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-vhh-charcoal leading-tight">
            Every child has <span className="italic font-normal text-vhh-green-800">a story.</span>
          </h2>

          <p className="mt-4 text-base text-vhh-muted font-light leading-relaxed">
            Behind every resident at Vine Heritage Home is a journey of resilience, transformation, and dignity.
          </p>
        </div>

        {/* Story Teaser Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {teaserStories.map((story, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="p-8 rounded-3xl bg-white border border-vhh-green-900/10 shadow-card hover:shadow-elevated transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-vhh-green-50 text-vhh-green-800 border border-vhh-green-200">
                    {story.tag}
                  </span>
                  <Lock className="w-4 h-4 text-vhh-green-700 opacity-60" />
                </div>

                <h3 className="font-serif text-2xl font-bold text-vhh-charcoal mb-3 group-hover:text-vhh-green-800 transition-colors">
                  {story.title}
                </h3>

                <p className="text-sm text-vhh-muted font-light leading-relaxed mb-6">
                  {story.summary}
                </p>

                <div className="mb-4">
                  <PlaceholderBadge text={story.placeholder} className="w-full text-center justify-center py-1.5" />
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-[11px] text-vhh-muted font-mono">
                <span>Child Protection Verified</span>
                <ShieldCheck className="w-3.5 h-3.5 text-vhh-green-700" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Stories CTA */}
        <div className="text-center">
          <Link
            href="/stories"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-vhh-green-800 text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-vhh-green-700 transition-all group"
          >
            <span>Explore All Stories & Alumni Reflections</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
};
