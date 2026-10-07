'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const HumanConnection: React.FC = () => {
  return (
    <section className="py-24 bg-vhh-cream text-vhh-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Photo Feature Stack */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative h-[440px] sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-vhh-dark border border-vhh-green-900/20">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop"
                alt="Children at Vine Heritage Home"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-vhh-dark/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/90 backdrop-blur-md text-vhh-charcoal shadow-lg border border-vhh-green-100">
                <div className="flex items-center gap-2 text-vhh-green-800 font-bold text-xs uppercase tracking-wider mb-1">
                  <ShieldCheck className="w-4 h-4 text-vhh-green-700" />
                  <span>Dignity, Joy & Belonging</span>
                </div>
                <p className="font-serif font-bold text-base text-vhh-charcoal">
                  “Every child is cherished as a unique individual with valid dreams, talents, and a bright future.”
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Emotional Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-vhh-green-100 border border-vhh-green-200 text-vhh-green-900 text-xs font-mono font-semibold uppercase tracking-widest">
              <Heart className="w-3.5 h-3.5 text-vhh-red-600 fill-vhh-red-600" />
              <span>THE HUMAN CONNECTION</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-vhh-charcoal leading-tight">
              A Home Built on <br />
              <span className="italic font-normal text-vhh-green-800">Love, Safety, & Education.</span>
            </h2>

            <p className="text-base text-vhh-muted font-light leading-relaxed">
              Vine Heritage Home exists because vulnerable children sometimes face difficult social realities beyond their control. We intervene not with pity, but with sanctuary, legal advocacy, schooling, and unwavering support.
            </p>

            <div className="p-6 rounded-2xl bg-white border border-vhh-green-900/10 shadow-sm space-y-3">
              <h4 className="font-serif font-bold text-lg text-vhh-charcoal">
                Our Core Humanitarian Promise:
              </h4>
              <p className="text-xs text-vhh-muted leading-relaxed font-light">
                To nurture every child entrusted to us until they grow into independent, confident, and self-reliant young adults who contribute meaningfully to Nigeria and the world.
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/our-story"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-vhh-green-800 text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-vhh-green-700 transition-all group"
              >
                <span>Read Full Founding Story & History</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
