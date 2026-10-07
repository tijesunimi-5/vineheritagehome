'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Navigation, Calendar } from 'lucide-react';
import { PlaceholderBadge } from './PlaceholderBadge';
import { VHH_DATA } from '@/data/vhhData';
import Link from 'next/link';

export const ChapterComeSee: React.FC = () => {
  return (
    <section className="py-28 bg-vhh-dark text-white relative overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-25">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=1920&auto=format&fit=crop')`,
          }}
        />
      </div>

      <div className="absolute inset-0 bg-hero-gradient opacity-95" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-16 h-16 rounded-3xl bg-vhh-green-800 border border-emerald-500/40 flex items-center justify-center mx-auto mb-8 shadow-2xl"
        >
          <MapPin className="w-8 h-8 text-emerald-300" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl sm:text-6xl font-bold tracking-tight leading-tight max-w-3xl mx-auto"
        >
          You've seen the story. <br />
          <span className="italic font-normal text-emerald-200">Now come experience the home.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-lg sm:text-xl text-stone-300 font-light leading-relaxed max-w-2xl mx-auto"
        >
          Vine Heritage Home is more than something that can be understood through a screen. Come meet the people, walk through the home, and experience the community for yourself.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="w-full sm:w-auto px-9 py-4 rounded-xl bg-vhh-green-700 text-white font-bold text-xs uppercase tracking-wider shadow-2xl hover:bg-vhh-green-600 transition-all flex items-center justify-center gap-2 border border-emerald-500/30"
          >
            <Calendar className="w-4 h-4 text-emerald-300" />
            <span>Plan a Visit</span>
          </Link>

          <Link
            href="/contact#directions"
            className="w-full sm:w-auto px-9 py-4 rounded-xl border border-stone-400/30 bg-white/5 backdrop-blur-md text-stone-200 font-semibold text-xs uppercase tracking-wider hover:bg-white/10 hover:text-white transition-all flex items-center justify-center gap-2"
          >
            <Navigation className="w-4 h-4 text-emerald-400" />
            <span>Get Directions</span>
          </Link>
        </motion.div>

        {/* Contact & Maps Frame Box */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-vhh-green-950/90 border border-vhh-green-700/60 shadow-2xl text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-4">
            <h3 className="font-serif text-2xl font-bold text-stone-100">
              Visitor Information & Desk
            </h3>

            <div className="space-y-3 text-xs font-mono text-stone-300">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <PlaceholderBadge text={VHH_DATA.brand.addressPlaceholder} />
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <PlaceholderBadge text={VHH_DATA.brand.phonePlaceholder} />
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <PlaceholderBadge text={VHH_DATA.brand.emailPlaceholder} />
              </div>
            </div>
          </div>

          {/* Interactive Google Maps Frame Preview */}
          <div className="lg:col-span-6 h-48 rounded-2xl bg-vhh-dark border border-vhh-green-800 overflow-hidden relative flex items-center justify-center p-4">
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#133d30_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="relative z-10 text-center">
              <MapPin className="w-8 h-8 text-emerald-400 mx-auto mb-2 animate-bounce" />
              <p className="text-xs font-mono font-bold text-white">Google Maps Location Frame</p>
              <PlaceholderBadge text="[VHH GOOGLE MAPS EMBED DATA READY]" className="mt-2" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
