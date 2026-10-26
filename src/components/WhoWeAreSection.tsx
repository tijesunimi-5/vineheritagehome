'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Heart, Users, Home, Sparkles, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { VHH_DATA } from '@/data/vhhData';

export const WhoWeAreSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const keyFacts = [
    {
      label: "239 Children Protected",
      detail: "Sheltered, fed 3 hot meals daily, and mentored from infancy to teens in Kuje, Abuja."
    },
    {
      label: "Over 70% Saved from Burial",
      detail: "Rescued from traditions mandating infant burial alive when mothers pass in childbirth."
    },
    {
      label: "12 Children Reunited",
      detail: "Safely reconnected with biological families as communities renounce harmful customs."
    }
  ];

  return (
    <section 
      id="who-we-are" 
      aria-label="About Vine Heritage Home Foundation"
      className="py-20 sm:py-28 bg-[#fdfbf7] text-vhh-charcoal relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Two-Column Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Authentic Documentary Photography with Floating Quote */}
          <motion.div 
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: "easeOut" }}
            className="lg:col-span-6 relative"
          >
            {/* Primary Photographic Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-stone-200/90 aspect-4/3 sm:aspect-5/4 group">
              <img
                src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=85&w=1600&auto=format&fit=crop"
                alt="Children and caregivers smiling together in a warm, dignified family setting at Vine Heritage Home"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              
              {/* Subtle Natural Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
              
              {/* In-Photo Caption */}
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 text-white">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white/20 backdrop-blur-md text-[11px] font-mono uppercase tracking-wider text-emerald-200 mb-2 border border-white/20">
                  <Sparkles className="w-3 h-3 text-emerald-300" />
                  <span>Kuje Sanctuary &bull; 24/7 Family Care</span>
                </div>
                <p className="text-sm sm:text-base font-serif italic text-stone-100 leading-snug">
                  “Every child deserves more than protection. They deserve a family to belong to, quality schooling sponsored, and a future to step into.”
                </p>
              </div>
            </div>

            {/* Floating Credibility Pill */}
            <div className="hidden sm:flex absolute -bottom-6 -right-6 p-4 rounded-2xl bg-white border border-stone-200 shadow-xl items-center gap-3.5 max-w-xs z-10">
              <div className="w-10 h-10 rounded-xl bg-vhh-green-50 border border-vhh-green-200 flex items-center justify-center text-vhh-green-800 shrink-0">
                <Heart className="w-5 h-5 text-vhh-green-700 fill-vhh-green-100" />
              </div>
              <div>
                <span className="text-xs font-bold text-vhh-charcoal block">100% Real Sanctuary</span>
                <p className="text-[11px] text-vhh-muted leading-tight">
                  Over 70% of residents rescued from live burial now thriving under 24/7 care.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Meaningful Story, Clear Mission & Actionable Gateway */}
          <motion.div 
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: "easeOut", delay: shouldReduceMotion ? 0 : 0.15 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-vhh-green-50 border border-vhh-green-200 text-vhh-green-900 text-xs font-mono font-bold uppercase tracking-wider mb-4 w-fit">
              <Home className="w-3.5 h-3.5 text-vhh-green-700" />
              <span>Section 02 &bull; Who We Are & Why We Exist</span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-vhh-charcoal leading-tight">
              More Than a Home. <br />
              <span className="italic font-normal text-vhh-green-800">
                A Lifelong Sanctuary and Family.
              </span>
            </h2>

            {/* Narrative Paragraphs */}
            <p className="mt-5 text-base sm:text-lg text-stone-700 font-light leading-relaxed">
              Vine Heritage Home Foundation was founded in 2004 by missionaries <strong>Stevens Olusola Ajayi</strong> and <strong>Dr. Stevens Gloria Chinwe</strong> following the historic 1996 rescue of infant Aishat Ruth Garba from ritual harvest sacrifice.
            </p>

            <p className="mt-3 text-sm sm:text-base text-stone-600 font-light leading-relaxed">
              Located at Kuje, Federal Capital Territory, Abuja, we exist to rescue and care for children facing cultural infanticide—particularly infants whose mothers passed away in childbirth, twins, and children with birth differences. Under the care of 30 devoted house mothers, caregivers, and a resident home nurse, <strong>239 children</strong> receive round-the-clock loving shelter, 3 nutritious daily meals, healthcare, and full sponsorship to attend accredited external schools from nursery through tertiary level.
            </p>

            {/* Factual Highlight Points */}
            <div className="mt-6 space-y-3 pt-4 border-t border-stone-200">
              {keyFacts.map((fact, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-vhh-charcoal mr-2">
                      {fact.label}:
                    </span>
                    <span className="text-xs sm:text-sm text-stone-600 font-light">
                      {fact.detail}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Gateways to Dedicated Detailed Pages */}
            <div className="mt-8 pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                href="/our-story"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-vhh-green-900 text-white text-xs sm:text-sm font-semibold hover:bg-vhh-green-800 transition-all shadow-sm group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <span>Read Our Full Founding Story</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/our-home"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-stone-300 text-stone-800 text-xs sm:text-sm font-semibold hover:bg-stone-50 hover:border-stone-400 transition-all shadow-2xs group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <Users className="w-4 h-4 text-vhh-green-700" />
                <span>See Our Caregivers & Home</span>
              </Link>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
