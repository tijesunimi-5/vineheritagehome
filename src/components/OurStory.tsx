'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { VHH_DATA } from '@/data/vhhData';
import { PlaceholderBadge } from './PlaceholderBadge';
import { ShieldAlert, BookOpen, Calendar, ChevronRight, FileText, CheckCircle2 } from 'lucide-react';

export const OurStory: React.FC = () => {
  const [activeMilestone, setActiveMilestone] = useState(0);

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

        {/* Editorial Story & Milestone Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Interactive Milestone Navigation */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="p-2 rounded-2xl bg-stone-100 border border-stone-200">
              {VHH_DATA.storyMilestones.map((item, index) => {
                const isActive = activeMilestone === index;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveMilestone(index)}
                    className={`w-full text-left p-5 rounded-xl transition-all duration-300 flex items-start justify-between gap-4 ${
                      isActive
                        ? 'bg-vhh-green-900 text-white shadow-lg'
                        : 'hover:bg-stone-200/60 text-vhh-charcoal'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs font-mono font-semibold ${isActive ? 'text-emerald-300' : 'text-vhh-green-700'}`}>
                          {item.stage}
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
                    <ChevronRight className={`w-5 h-5 mt-1 transition-transform ${isActive ? 'rotate-90 text-emerald-400' : 'text-stone-400'}`} />
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

          {/* Right Column: Narrative Focus Card */}
          <div className="lg:col-span-7">
            <motion.div
              key={activeMilestone}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
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
