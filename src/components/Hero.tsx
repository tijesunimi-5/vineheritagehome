'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import Link from 'next/link';
import { Logo } from './Logo';

interface HeroProps {
  onPlanVisit?: () => void;
  onOurStory?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onPlanVisit, onOurStory }) => {
  const shouldReduceMotion = useReducedMotion();

  // Gentle, purposeful entrance animations
  const fadeInVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.7,
        delay: shouldReduceMotion ? 0 : custom * 0.12,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    }),
  };

  return (
    <section 
      aria-label="Vine Heritage Home Introduction"
      className="relative min-h-[92vh] sm:min-h-screen w-full flex flex-col justify-between overflow-hidden bg-vhh-dark text-white"
    >
      {/* 
        AUTHENTIC DOCUMENTARY PHOTOGRAPHY
        Natural-light photograph capturing warmth, dignity, and real human connection.
        Optimized with art-directed photographic grading: natural deep green undertones 
        that preserve authentic skin tones and radiant natural lighting.
      */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: shouldReduceMotion ? 0 : 1.2, ease: 'easeOut' }}
          className="absolute inset-0 w-full h-full bg-cover bg-center sm:bg-[center_top_25%]"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=85&w=2400&auto=format&fit=crop')`,
          }}
          role="img"
          aria-label="Children in Nigeria laughing together in natural sunlight, radiating warmth, dignity, and hope."
        />

        {/* 
          CALIBRATED ART-DIRECTED VIGNETTE
          Provides uncompromising contrast for editorial typography on the left,
          while letting the radiant warmth of the children and environment shine through on the right.
        */}
        <div 
          className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-vhh-dark via-vhh-dark/85 sm:via-vhh-dark/75 to-vhh-dark/30 sm:to-transparent"
          aria-hidden="true" 
        />
        <div 
          className="absolute inset-0 bg-gradient-to-b from-vhh-dark/70 via-transparent to-vhh-dark/80" 
          aria-hidden="true" 
        />
      </div>

      {/* 
        TOP BRAND BAR
        Quiet, unhurried, and refined. Establishes institutional credibility 
        without noisy buttons or cluttered navigation.
      */}
      <div className="relative z-20 w-full pt-8 sm:pt-10 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          href="/" 
          className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-vhh-dark rounded-lg"
          aria-label="Vine Heritage Home Home"
        >
          <Logo variant="light" />
        </Link>

        <div className="text-xs tracking-wider uppercase font-sans text-stone-300/80 font-medium hidden sm:flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
          <span>Abuja, Nigeria &bull; Humanitarian Sanctuary</span>
        </div>
      </div>

      {/* 
        MAIN EDITORIAL CONTENT
        Carefully proportioned visual hierarchy with generous whitespace.
        The message does the heavy lifting: direct, emotionally resonant, and dignified.
      */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-12 sm:py-20 my-auto">
        <div className="max-w-2xl lg:max-w-3xl">
          
          {/* Subtle Institutional Kicker */}
          <motion.div
            custom={1}
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            className="mb-4 sm:mb-6"
          >
            <span className="text-xs sm:text-sm font-sans tracking-widest uppercase font-semibold text-emerald-300">
              A Sanctuary Built on Care &bull; Protection &bull; Dignity
            </span>
          </motion.div>

          {/* Meaningful, Human Headline */}
          <motion.h1
            custom={2}
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]"
          >
            Where vulnerable children find family, protection, and a{' '}
            <span className="italic font-normal text-emerald-200">future</span>.
          </motion.h1>

          {/* Concise, Poignant Mission Statement */}
          <motion.p
            custom={3}
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            className="mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl text-stone-200/90 font-light leading-relaxed max-w-xl sm:max-w-2xl"
          >
            Vine Heritage Home provides a safe residential home, 24/7 loving care, and external education sponsorship 
            for 239 children in Abuja, Nigeria—creating a dignified path from vulnerability to confident adulthood.
          </motion.p>

          {/* 
            TWO DISTINCT, ELEGANT CTAs
            Visually distinct, uncluttered, and purposeful with tactile hover/focus states.
          */}
          <motion.div
            custom={4}
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5"
          >
            {/* Primary CTA: Our Story */}
            {onOurStory ? (
              <button
                type="button"
                onClick={onOurStory}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-vhh-green-700 hover:bg-vhh-green-600 active:bg-vhh-green-800 text-white font-semibold text-sm tracking-wide shadow-lg shadow-vhh-green-950/40 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-vhh-dark group"
              >
                <span>Our Story</span>
                <ArrowRight className="w-4 h-4 text-emerald-300 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            ) : (
              <Link
                href="/our-story"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-vhh-green-700 hover:bg-vhh-green-600 active:bg-vhh-green-800 text-white font-semibold text-sm tracking-wide shadow-lg shadow-vhh-green-950/40 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-vhh-dark group"
              >
                <span>Our Story</span>
                <ArrowRight className="w-4 h-4 text-emerald-300 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            )}

            {/* Secondary CTA: Plan a Visit */}
            {onPlanVisit ? (
              <button
                type="button"
                onClick={onPlanVisit}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl border border-stone-300/40 hover:border-white/90 text-stone-100 hover:text-white bg-white/5 hover:bg-white/10 active:bg-white/15 backdrop-blur-sm font-semibold text-sm tracking-wide transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-vhh-dark"
              >
                <Calendar className="w-4 h-4 text-emerald-300" />
                <span>Plan a Visit</span>
              </button>
            ) : (
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl border border-stone-300/40 hover:border-white/90 text-stone-100 hover:text-white bg-white/5 hover:bg-white/10 active:bg-white/15 backdrop-blur-sm font-semibold text-sm tracking-wide transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-vhh-dark"
              >
                <Calendar className="w-4 h-4 text-emerald-300" />
                <span>Plan a Visit</span>
              </Link>
            )}
          </motion.div>

        </div>
      </div>

      {/* 
        GROUNDED INSTITUTIONAL FOOTNOTE
        Quiet anchor at the base of the hero that reinforces transparency and permanence.
      */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pb-8 sm:pb-10 pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-sans text-stone-400/80 border-t border-white/10">
        <div>
          <span>A physical sanctuary in Nigeria dedicated to long-term care and community impact.</span>
        </div>

        <div className="flex items-center gap-4 text-stone-300/80">
          <Link 
            href="/contact" 
            className="hover:text-emerald-300 transition-colors duration-150 focus:outline-none focus-visible:underline"
          >
            Visit the Home
          </Link>
          <span aria-hidden="true">&bull;</span>
          <Link 
            href="/our-story" 
            className="hover:text-emerald-300 transition-colors duration-150 focus:outline-none focus-visible:underline"
          >
            Verified Mandate
          </Link>
        </div>
      </div>

    </section>
  );
};
