'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { VHH_DATA } from '@/data/vhhData';
import { PlaceholderBadge } from './PlaceholderBadge';
import { ShieldCheck, Quote, Lock, Heart, UserCheck } from 'lucide-react';

export const Stories: React.FC = () => {
  return (
    <section className="py-24 bg-vhh-cream text-vhh-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-vhh-green-100 text-vhh-green-900 text-xs font-semibold uppercase tracking-wider mb-4 border border-vhh-green-200">
            <Quote className="w-3.5 h-3.5 text-vhh-green-700" />
            <span>Human Voices & Reflections</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-vhh-charcoal leading-tight">
            Stories of Hope, <span className="italic font-normal text-vhh-green-800">Dignity, & Purpose.</span>
          </h2>

          <p className="mt-4 text-base text-vhh-muted font-light leading-relaxed">
            Every child who walks through our doors brings resilience. We strictly safeguard child privacy while honoring their transformational journeys.
          </p>
        </div>

        {/* Child Protection Safeguarding Banner */}
        <div className="mb-16 p-6 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm">Child Protection & Consent Protocol</h4>
              <p className="text-xs text-amber-800 mt-0.5">
                In strict compliance with international child protection standards, full names, confidential intake histories, and unverified personal details are never published without formal consent and guardian review.
              </p>
            </div>
          </div>
          <PlaceholderBadge text="[CHILD SAFETY COMPLIANT]" className="bg-amber-100 text-amber-900 border-amber-400 shrink-0" />
        </div>

        {/* Testimonial Story Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VHH_DATA.testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="p-8 rounded-3xl bg-white border border-vhh-green-900/10 shadow-card hover:shadow-elevated transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-vhh-green-50 text-vhh-green-800 border border-vhh-green-200">
                    {t.role}
                  </span>
                  <Quote className="w-6 h-6 text-vhh-green-200 group-hover:text-vhh-green-400 transition-colors" />
                </div>

                <h3 className="font-serif text-xl font-bold text-vhh-charcoal mb-4 leading-snug">
                  {t.headline}
                </h3>

                <p className="text-sm text-vhh-muted font-light leading-relaxed mb-6">
                  {t.summary}
                </p>

                <div className="mb-4">
                  <PlaceholderBadge text={t.placeholderTag} className="w-full text-center justify-center py-1.5" />
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center gap-2 text-[11px] text-vhh-muted font-mono">
                <Lock className="w-3 h-3 text-vhh-green-700 shrink-0" />
                <span className="truncate">{t.privacyNotice}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
