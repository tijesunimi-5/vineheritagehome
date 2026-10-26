'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Heart, Calendar, ArrowRight, Quote } from 'lucide-react';
import Link from 'next/link';

interface FoundersSectionProps {
  onPlanVisit?: () => void;
}

export const FoundersSection: React.FC<FoundersSectionProps> = ({ onPlanVisit }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section 
      id="founders-word" 
      aria-label="A Word From Our Founders"
      className="py-20 sm:py-28 bg-[#f5f2ea] text-vhh-charcoal relative overflow-hidden border-t border-stone-200/90"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16">
        
        {/* Two-Column Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Portrait of Stevens Olusola Ajayi & Dr. Stevens Gloria Chinwe */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.7, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            {/* Main Photographic Frame */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-stone-300/80 bg-stone-900 h-[420px] sm:h-[500px] lg:h-[540px] w-full group">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=85&w=1600&auto=format&fit=crop"
                alt="Pastor Stevens Olusola Ajayi and Dr. Stevens Gloria Chinwe, Founders of Vine Heritage Home Foundation"
                className="w-full h-full object-cover object-[center_20%] group-hover:scale-102 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Soft Vignette Overlay for Crisp Text Contrast at the base */}
              <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-stone-950/85 via-stone-950/40 to-transparent pointer-events-none" />

              {/* Top Tag: Placeholder indicator for user */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-stone-950/70 backdrop-blur-md text-[10px] font-mono uppercase font-bold tracking-wider text-emerald-300 border border-white/20 shadow-sm">
                  Missionaries &bull; Co-Founders Since 2004
                </span>
              </div>

              {/* In-Photo Name Card */}
              <div className="absolute bottom-5 left-5 right-5 text-white z-10">
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-300 font-semibold block mb-1">
                  LEADERSHIP &amp; FOUNDING HEARTS
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold leading-snug text-white">
                  Stevens Olusola Ajayi &amp; <br />
                  Dr. Stevens Gloria Chinwe
                </h3>
                <p className="text-xs text-stone-300 font-light mt-1">
                  Executive Director (CEO) &amp; Co-Founder &bull; First Rescue in 1996
                </p>
              </div>
            </div>

            {/* Companion Credibility Pill */}
            <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:-right-6 p-4 rounded-2xl bg-white border border-stone-200 shadow-lg sm:shadow-xl flex items-center gap-3.5 sm:max-w-xs z-20">
              <div className="w-10 h-10 rounded-xl bg-vhh-green-50 border border-vhh-green-200 flex items-center justify-center text-vhh-green-800 shrink-0">
                <Heart className="w-5 h-5 text-vhh-green-700 fill-vhh-green-100" />
              </div>
              <div>
                <span className="text-xs font-bold text-vhh-charcoal block">20+ Years of Parental Care</span>
                <p className="text-[11px] text-stone-500 leading-tight">
                  Raising 239 children as their own true biological family in Kuje, Abuja.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: A Heartfelt Personal Letter from the Founders */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.7, ease: "easeOut", delay: shouldReduceMotion ? 0 : 0.15 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-vhh-green-900/10 text-vhh-green-900 text-xs font-mono font-bold uppercase tracking-wider mb-4 w-fit">
              <Quote className="w-3.5 h-3.5 text-vhh-green-800" />
              <span>A Personal Word &bull; Our Founders</span>
            </div>

            {/* Editorial Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-vhh-charcoal leading-tight">
              &ldquo;We Did Not Set Out to Build an Institution. <br />
              <span className="italic font-normal text-vhh-green-800">
                We Built a Family for Children Who Had None.&rdquo;
              </span>
            </h2>

            {/* The Heartfelt Letter */}
            <div className="mt-6 space-y-4 text-base sm:text-lg text-stone-700 font-light leading-relaxed">
              <p>
                In 1996, when God placed the very first baby into our hands to save her from ritual sacrifice, we made a quiet, lifelong covenant: as long as breath remains in us, no infant within our reach would be discarded, abandoned, or buried alive.
              </p>

              <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                Over the past twenty years, people have called Vine Heritage Home an orphanage. But when you step through our gates in Kuje, you won&rsquo;t find an impersonal institution or cold dormitories—you will find <strong>239 children</strong> calling us father and mother. We wake with them before dawn, pray with them, send them off to school in our bus, celebrate their victories, and care for them through illness.
              </p>

              <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                Everything we have built in Kuje exists because ordinary people, organizations, and partners chose to believe that every child&rsquo;s life has purpose. We warmly invite you to come, sit with us in our living room, meet our children, and see the difference love makes.
              </p>
            </div>

            {/* Signatures & Credentials Block */}
            <div className="mt-8 pt-6 border-t border-stone-300/80 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              
              <div className="space-y-1">
                <h4 className="font-serif text-lg font-bold text-vhh-charcoal">
                  Stevens Olusola Ajayi &amp; Dr. Stevens Gloria Chinwe
                </h4>
                <p className="text-xs font-mono text-emerald-800 font-semibold uppercase tracking-wider">
                  Co-Founders &amp; Missionaries &bull; Christian Missionary Foundation
                </p>
              </div>

              {/* Interactive Gateways */}
              <div className="flex items-center gap-3 shrink-0">
                <Link
                  href="/our-story"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-vhh-green-900 text-white text-xs sm:text-sm font-semibold hover:bg-vhh-green-800 transition-colors shadow-sm group"
                >
                  <span>Our Full Story</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                {onPlanVisit && (
                  <button
                    onClick={onPlanVisit}
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white border border-stone-300 text-stone-800 text-xs sm:text-sm font-semibold hover:bg-stone-50 transition-colors shadow-2xs"
                  >
                    <Calendar className="w-4 h-4 text-emerald-700" />
                    <span>Plan a Visit</span>
                  </button>
                )}
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
