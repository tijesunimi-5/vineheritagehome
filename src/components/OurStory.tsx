'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VHH_DATA } from '@/data/vhhData';
import { PlaceholderBadge } from './PlaceholderBadge';
import { ShieldAlert, BookOpen, ChevronDown, ChevronRight, FileText, CheckCircle2, Sparkles } from 'lucide-react';

export const OurStory: React.FC = () => {
  const [activeMilestone, setActiveMilestone] = useState(0);
  const [expandedMobileIndices, setExpandedMobileIndices] = useState<number[]>([0]);

  const toggleMobileAccordion = (index: number) => {
    if (expandedMobileIndices.includes(index)) {
      setExpandedMobileIndices(expandedMobileIndices.filter((i) => i !== index));
    } else {
      setExpandedMobileIndices([...expandedMobileIndices, index]);
    }
  };

  return (
    <section id="story" className="py-24 bg-white text-vhh-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-vhh-green-50 border border-vhh-green-200 text-vhh-green-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5 text-vhh-green-700" />
            <span>Documentary Narrative</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-vhh-charcoal leading-tight">
            There Is a Story Behind <br />
            <span className="italic font-normal text-vhh-green-800">Every Single Child.</span>
          </h2>

          <p className="mt-6 text-lg text-vhh-muted font-light leading-relaxed">
            Vine Heritage Home was established to answer a pressing humanitarian imperative. Children never choose the harsh realities into which they are born. Our purpose is to stand in the gap with love, dignity, and sanctuary.
          </p>
        </div>

        {/* Contextual Themes Tags */}
        <div className="mb-16 p-6 rounded-2xl bg-vhh-warm border border-vhh-sand/80">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-vhh-muted mb-4 flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-vhh-red-600" />
            <span>Contextual Mandate & Safeguarding Scope</span>
          </h4>
          <div className="flex flex-wrap gap-2.5">
            {VHH_DATA.storyThemes.map((theme, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-lg bg-white border border-stone-200 text-xs font-medium text-vhh-charcoal shadow-sm flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-vhh-green-600" />
                {theme}
              </span>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 1. MOBILE & TABLET LAYOUT (< 1024px): DIRECT INLINE EXPANDABLE ACCORDION */}
        {/* ========================================================================= */}
        <div className="lg:hidden space-y-4 mb-12">
          <p className="text-xs font-mono text-vhh-green-800 font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-vhh-green-700" />
            <span>Tap any timeline step below to read full story:</span>
          </p>

          {VHH_DATA.storyMilestones.map((item, index) => {
            const isExpanded = expandedMobileIndices.includes(index);
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'bg-vhh-cream border-vhh-green-700/40 shadow-md'
                    : 'bg-stone-50 border-stone-200 hover:bg-stone-100'
                }`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleMobileAccordion(index)}
                  className="w-full text-left p-5 flex items-start justify-between gap-4"
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-serif font-bold text-sm shrink-0 mt-0.5 ${
                      isExpanded ? 'bg-vhh-green-800 text-white' : 'bg-stone-200 text-stone-700'
                    }`}>
                      {index + 1}
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="text-xs font-mono font-bold text-vhh-green-800">
                          {item.stage}
                        </span>
                        <PlaceholderBadge text={item.yearPlaceholder} />
                      </div>
                      <h4 className="font-serif font-bold text-lg text-vhh-charcoal leading-snug">
                        {item.title}
                      </h4>
                    </div>
                  </div>

                  <div className={`p-2 rounded-full transition-transform duration-300 shrink-0 ${
                    isExpanded ? 'bg-vhh-green-800 text-white rotate-180' : 'bg-stone-200 text-stone-600'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Accordion Body Content (Expands directly underneath!) */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 pb-6 pt-2 border-t border-vhh-sand"
                    >
                      <div className="space-y-4 text-xs text-vhh-charcoal leading-relaxed">
                        <div className="mb-2">
                          <PlaceholderBadge text={item.placeholderTag} className="w-full text-center justify-center py-1.5" />
                        </div>

                        <p className="text-vhh-muted text-sm font-light">
                          {item.description}
                        </p>

                        <p className="font-serif italic text-vhh-green-900 bg-white p-4 rounded-xl border border-vhh-green-100 text-xs">
                          “The founding mandate of Vine Heritage Home is not merely to provide temporary shelter, but to build an enduring haven where every child's humanity, dignity, and future are restored.”
                        </p>

                        <div className="pt-2 grid grid-cols-1 gap-2 font-medium text-vhh-charcoal">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-vhh-green-700" />
                            <span>Dignified Protection & Safety</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-vhh-green-700" />
                            <span>Educational Access Mandate</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-vhh-green-700" />
                            <span>Community & Family Belonging</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* 2. DESKTOP LAYOUT (>= 1024px): SIDE-BY-SIDE NARRATIVE WITH CLEAR INDICATORS */}
        {/* ========================================================================= */}
        <div className="hidden lg:grid grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Interactive Milestone Navigation */}
          <div className="col-span-5 flex flex-col gap-4">
            <p className="text-xs font-mono text-vhh-green-800 font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-vhh-green-700" />
              <span>Select step below to switch main story view:</span>
            </p>

            <div className="p-2 rounded-2xl bg-stone-100 border border-stone-200 space-y-2">
              {VHH_DATA.storyMilestones.map((item, index) => {
                const isActive = activeMilestone === index;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveMilestone(index)}
                    className={`w-full text-left p-5 rounded-xl transition-all duration-300 flex items-start justify-between gap-4 ${
                      isActive
                        ? 'bg-vhh-green-900 text-white shadow-lg ring-2 ring-emerald-500/50'
                        : 'hover:bg-stone-200/70 text-vhh-charcoal bg-white/60'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs font-mono font-bold ${isActive ? 'text-emerald-300' : 'text-vhh-green-700'}`}>
                          Step 0{index + 1} &bull; {item.stage}
                        </span>
                        <PlaceholderBadge
                          text={item.yearPlaceholder}
                          className={isActive ? 'bg-emerald-950 text-emerald-200 border-emerald-700' : ''}
                        />
                      </div>
                      <h4 className="font-serif font-bold text-lg leading-snug">
                        {item.title}
                      </h4>
                    </div>

                    <div className="flex items-center gap-1 shrink-0">
                      {isActive && <span className="text-[10px] font-mono uppercase bg-emerald-800 px-2 py-0.5 rounded text-emerald-200 font-bold">Active</span>}
                      <ChevronRight className={`w-5 h-5 transition-transform ${isActive ? 'translate-x-1 text-emerald-400' : 'text-stone-400'}`} />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Leadership Verification Callout Box */}
            <div className="p-6 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-900">
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-amber-700 mt-0.5 shrink-0" />
                <div>
                  <h5 className="font-bold text-sm">Factual Story Structure</h5>
                  <p className="text-xs text-amber-800 mt-1 leading-relaxed">
                    This section is pre-architected for official historical data. Specific founder notes, dates, and growth numbers will populate upon VHH board review.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Active Narrative Focus Card */}
          <div className="col-span-7">
            <motion.div
              key={activeMilestone}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="p-8 sm:p-10 rounded-3xl bg-vhh-cream border border-vhh-green-900/10 shadow-card"
            >
              <div className="flex items-center justify-between pb-6 border-b border-vhh-sand mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-vhh-green-800 text-white flex items-center justify-center font-serif font-bold text-lg">
                    {activeMilestone + 1}
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-2xl text-vhh-charcoal">
                      {VHH_DATA.storyMilestones[activeMilestone].title}
                    </h3>
                    <p className="text-xs text-vhh-green-800 font-semibold">
                      {VHH_DATA.storyMilestones[activeMilestone].stage}
                    </p>
                  </div>
                </div>

                <PlaceholderBadge
                  text={VHH_DATA.storyMilestones[activeMilestone].placeholderTag}
                />
              </div>

              <div className="prose prose-stone max-w-none text-vhh-charcoal leading-relaxed space-y-4">
                <p className="text-base text-vhh-muted">
                  {VHH_DATA.storyMilestones[activeMilestone].description}
                </p>

                <p className="text-sm font-serif italic text-vhh-green-900 bg-white p-5 rounded-xl border border-vhh-green-100">
                  “The founding mandate of Vine Heritage Home is not merely to provide temporary shelter, but to build an enduring haven where every child's humanity, dignity, and future are restored.”
                </p>

                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-medium text-vhh-charcoal">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-vhh-green-700" />
                    <span>Dignified Protection & Safety</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-vhh-green-700" />
                    <span>Educational Access Mandate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-vhh-green-700" />
                    <span>Community & Family Belonging</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-vhh-green-700" />
                    <span>Long-Term Self-Reliance Goal</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
