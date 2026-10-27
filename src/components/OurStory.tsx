'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VHH_DATA } from '@/data/vhhData';
import { 
  BookOpen, 
  ShieldAlert, 
  ChevronDown, 
  ChevronRight, 
  CheckCircle2, 
  Heart, 
  Users, 
  MapPin, 
  Building2, 
  Landmark, 
  GraduationCap, 
  FileText, 
  Scale, 
  Compass, 
  ShieldCheck,
  Award,
  AlertTriangle,
  Quote
} from 'lucide-react';

export const OurStory: React.FC = () => {
  const [activeStoryTab, setActiveStoryTab] = useState<'milestones' | 'traditions' | 'objectives' | 'communities' | 'executives'>('milestones');
  const [activeMilestone, setActiveMilestone] = useState<number>(0);
  const [expandedMobileIndices, setExpandedMobileIndices] = useState<number[]>([0, 1]);
  const [selectedCouncilFilter, setSelectedCouncilFilter] = useState<string>('all');

  const toggleMobileAccordion = (index: number) => {
    if (expandedMobileIndices.includes(index)) {
      setExpandedMobileIndices(expandedMobileIndices.filter((i) => i !== index));
    } else {
      setExpandedMobileIndices([...expandedMobileIndices, index]);
    }
  };

  const storyTabs = [
    { id: 'milestones', label: 'Chronological Milestones (1996 – Present)', icon: BookOpen },
    { id: 'traditions', label: 'The 6 Deadly Traditions Overcome', icon: AlertTriangle },
    { id: 'objectives', label: 'The 8 Constitutional Mandates', icon: Scale },
    { id: 'communities', label: '58 Communities in MATAI Project', icon: MapPin },
    { id: 'executives', label: 'Board of Trustees & Leadership', icon: Users }
  ];

  return (
    <section id="story" className="py-20 sm:py-28 bg-[#fdfbf7] text-vhh-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* EDITORIAL HEADER: THE SLESSOR PARALLEL & MISSIONARY ORIGINS              */}
        {/* ========================================================================= */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-vhh-green-50 border border-vhh-green-200 text-vhh-green-900 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5 text-vhh-green-700" />
            <span>Official Profile &amp; Historical Documentary</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-vhh-charcoal leading-tight">
            There Is a Story Behind <br />
            <span className="italic font-normal text-vhh-green-800">
              Every Single Rescued Child.
            </span>
          </h2>

          <div className="mt-6 space-y-4 text-stone-700 text-base sm:text-lg font-light leading-relaxed">
            <p>
              While Nigerian historians have largely credited <strong>Mary Slessor</strong>, the 19th-century Scottish missionary, with helping to eradicate the killing of twins in southern Nigeria, it is heartbreaking to note that infanticide and dangerous ritual customs silently persisted within rural tribal communities adjoining the Federal Capital Territory (FCT).
            </p>
            <p className="text-sm sm:text-base text-stone-600">
              Started in 1996 by Christian Missionary Foundation missionaries <strong>Stevens Olusola Ajayi</strong> and <strong>Dr. Stevens Gloria Chinwe</strong>, Vine Heritage Home exists to stand in the gap—rescuing infants from burial alive, ritual harvest sacrifices, and tribal abandonment, nurturing 239 children into educated, thriving leaders for a greater Nigeria.
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* INTERACTIVE STORY EXPLORER TABS                                          */}
        {/* ========================================================================= */}
        <div className="mb-12 border-b border-stone-200 pb-3 flex items-center gap-2 overflow-x-auto scrollbar-none">
          {storyTabs.map((tab) => {
            const IconComp = tab.icon;
            const isActive = activeStoryTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveStoryTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all border ${
                  isActive
                    ? 'bg-vhh-green-900 text-white border-vhh-green-900 shadow-sm'
                    : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-50 hover:text-vhh-charcoal'
                }`}
              >
                <IconComp className={`w-4 h-4 ${isActive ? 'text-emerald-300' : 'text-stone-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: CHRONOLOGICAL HISTORICAL MILESTONES (1996 – PRESENT)              */}
        {/* ========================================================================= */}
        {activeStoryTab === 'milestones' && (
          <div>
            {/* 1A. MOBILE & TABLET EXPANDABLE ACCORDION (< 1024px) */}
            <div className="lg:hidden space-y-3.5 mb-12">
              <p className="text-xs font-mono text-vhh-green-800 font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-vhh-green-700" />
                <span>Tap any historical milestone below to expand full story:</span>
              </p>

              {VHH_DATA.storyMilestones.map((item: any, index: number) => {
                const isExpanded = expandedMobileIndices.includes(index);
                return (
                  <div
                    key={item.id || index}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden bg-white ${
                      isExpanded
                        ? 'border-vhh-green-700/50 shadow-md ring-1 ring-vhh-green-700/20'
                        : 'border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    {/* Clickable Header */}
                    <button
                      onClick={() => toggleMobileAccordion(index)}
                      className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-4"
                      aria-expanded={isExpanded}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-serif font-bold text-xs shrink-0 mt-0.5 ${
                          isExpanded ? 'bg-vhh-green-800 text-white' : 'bg-stone-100 text-stone-700'
                        }`}>
                          {index + 1}
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <span className="text-[11px] font-mono font-bold text-vhh-green-800">
                              {item.stage}
                            </span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-50 text-emerald-900 border border-emerald-200">
                              {item.yearPlaceholder || item.year}
                            </span>
                          </div>
                          <h4 className="font-serif font-bold text-base sm:text-lg text-vhh-charcoal leading-snug">
                            {item.title}
                          </h4>
                        </div>
                      </div>

                      <div className={`p-1.5 rounded-full transition-transform duration-300 shrink-0 ${
                        isExpanded ? 'bg-vhh-green-800 text-white rotate-180' : 'bg-stone-100 text-stone-500'
                      }`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {/* Expandable Story Details */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: 'easeOut' }}
                          className="px-5 pb-6 pt-2 border-t border-stone-100 bg-[#fbf9f5]"
                        >
                          <div className="space-y-4 text-xs text-stone-700 leading-relaxed">
                            {/* Summary & Full Narrative */}
                            <p className="text-stone-800 text-sm font-light leading-relaxed">
                              {item.description}
                            </p>

                            {item.fullNarrative && (
                              <p className="text-stone-600 text-xs font-light leading-relaxed">
                                {item.fullNarrative}
                              </p>
                            )}

                            {/* Authentic Quote Block */}
                            {item.quote && (
                              <div className="p-4 rounded-xl bg-white border border-emerald-800/20 shadow-2xs space-y-1">
                                <p className="font-serif italic text-vhh-green-950 text-xs sm:text-sm">
                                  {item.quote}
                                </p>
                                {item.quoteAuthor && (
                                  <span className="text-[10px] font-mono font-semibold text-emerald-800 block text-right">
                                    &mdash; {item.quoteAuthor}
                                  </span>
                                )}
                              </div>
                            )}

                            {/* Key Facts Checklist */}
                            {item.keyFacts && item.keyFacts.length > 0 && (
                              <div className="pt-2 space-y-2 border-t border-stone-200/80">
                                <span className="text-[10px] font-mono uppercase font-bold text-stone-500 tracking-wider block">
                                  Key Verified Historical Realities:
                                </span>
                                {item.keyFacts.map((fact: string, fIdx: number) => (
                                  <div key={fIdx} className="flex items-start gap-2 text-xs text-stone-800 font-medium">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                    <span>{fact}</span>
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* Verification Tag */}
                            <div className="pt-3 border-t border-stone-200/80 flex items-center justify-between text-[11px] font-mono text-emerald-800 font-semibold">
                              <span>Verified Milestone</span>
                              <span className="flex items-center gap-1">
                                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                                <span>{item.verifiedFact}</span>
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* 1B. DESKTOP INTERACTIVE TIMELINE & NARRATIVE (>= 1024px) */}
            <div className="hidden lg:grid grid-cols-12 gap-10 items-start">
              
              {/* Left Column: 10 Chronological Step Selectors */}
              <div className="col-span-5 flex flex-col gap-2.5 max-h-[780px] overflow-y-auto pr-2 scrollbar-thin">
                <p className="text-xs font-mono text-vhh-green-800 font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-vhh-green-700" />
                  <span>Select any milestone to inspect historical record:</span>
                </p>

                {VHH_DATA.storyMilestones.map((item: any, index: number) => {
                  const isActive = activeMilestone === index;
                  return (
                    <button
                      key={item.id || index}
                      onClick={() => setActiveMilestone(index)}
                      className={`w-full text-left p-4 rounded-2xl transition-all duration-200 flex items-start justify-between gap-3 border ${
                        isActive
                          ? 'bg-vhh-green-900 text-white border-vhh-green-800 shadow-md ring-2 ring-emerald-500/30'
                          : 'bg-white text-stone-800 border-stone-200/80 hover:bg-stone-50 hover:border-stone-300'
                      }`}
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className={`text-[11px] font-mono font-bold ${isActive ? 'text-emerald-300' : 'text-vhh-green-700'}`}>
                            Chapter 0{index + 1} &bull; {item.stage}
                          </span>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold ${
                            isActive ? 'bg-emerald-950 text-emerald-200 border border-emerald-700' : 'bg-stone-100 text-stone-600'
                          }`}>
                            {item.year}
                          </span>
                        </div>
                        <h4 className="font-serif font-bold text-sm sm:text-base leading-snug truncate">
                          {item.title}
                        </h4>
                      </div>

                      <ChevronRight className={`w-4 h-4 shrink-0 mt-1 transition-transform ${
                        isActive ? 'translate-x-1 text-emerald-400' : 'text-stone-400'
                      }`} />
                    </button>
                  );
                })}
              </div>

              {/* Right Column: Active Narrative Showcase Card */}
              <div className="col-span-7 sticky top-28">
                {(() => {
                  const currentItem: any = VHH_DATA.storyMilestones[activeMilestone] || VHH_DATA.storyMilestones[0];
                  return (
                    <motion.div
                      key={activeMilestone}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200 shadow-xl space-y-6"
                    >
                      {/* Card Header */}
                      <div className="flex items-start justify-between pb-6 border-b border-stone-100 gap-4">
                        <div className="space-y-1">
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-mono font-bold">
                            <span>Chapter 0{activeMilestone + 1} of 10</span>
                            <span>&bull;</span>
                            <span>{currentItem.stage}</span>
                          </div>
                          <h3 className="font-serif font-bold text-2xl sm:text-3xl text-vhh-charcoal pt-1">
                            {currentItem.title}
                          </h3>
                        </div>

                        <span className="px-3 py-1 rounded-xl text-xs font-mono font-bold bg-stone-100 text-stone-800 border border-stone-200 shrink-0">
                          {currentItem.year}
                        </span>
                      </div>

                      {/* Primary Narrative */}
                      <div className="space-y-4 text-stone-700 leading-relaxed font-light text-base">
                        <p className="text-stone-900 font-normal leading-relaxed">
                          {currentItem.description}
                        </p>

                        {currentItem.fullNarrative && (
                          <p className="text-stone-600 text-sm leading-relaxed">
                            {currentItem.fullNarrative}
                          </p>
                        )}
                      </div>

                      {/* Authentic Quote Box */}
                      {currentItem.quote && (
                        <div className="p-5 rounded-2xl bg-[#0b1712] text-white shadow-md space-y-2 relative overflow-hidden">
                          <Quote className="w-8 h-8 text-emerald-500/20 absolute -bottom-1 right-4 pointer-events-none" />
                          <p className="font-serif italic text-sm sm:text-base text-stone-100 leading-relaxed">
                            {currentItem.quote}
                          </p>
                          {currentItem.quoteAuthor && (
                            <p className="text-[11px] font-mono text-emerald-300 font-semibold tracking-wider text-right">
                              &mdash; {currentItem.quoteAuthor}
                            </p>
                          )}
                        </div>
                      )}

                      {/* Key Facts Checklist */}
                      {currentItem.keyFacts && currentItem.keyFacts.length > 0 && (
                        <div className="pt-4 border-t border-stone-100 space-y-2.5">
                          <span className="text-[10px] font-mono uppercase font-bold text-stone-400 tracking-wider block">
                            Historical Realities &amp; Documented Outcomes:
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-stone-800">
                            {currentItem.keyFacts.map((fact: string, idx: number) => (
                              <div key={idx} className="flex items-start gap-2 bg-stone-50 p-2.5 rounded-xl border border-stone-200/70">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                <span className="leading-tight">{fact}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Verification Footer */}
                      <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                        <span className="font-mono text-[11px] text-emerald-800 font-bold flex items-center gap-1.5">
                          <ShieldCheck className="w-4 h-4 text-emerald-600" />
                          <span>Official VHH Foundation Profile</span>
                        </span>
                        <span className="text-[11px] font-mono text-stone-400">
                          {currentItem.verifiedFact}
                        </span>
                      </div>
                    </motion.div>
                  );
                })()}
              </div>

            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: THE 6 DEADLY CULTURAL TRADITIONS OVERCOME                         */}
        {/* ========================================================================= */}
        {activeStoryTab === 'traditions' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="max-w-3xl">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-vhh-charcoal">
                The Six Traditional Beliefs Driving Infanticide
              </h3>
              <p className="mt-2 text-stone-600 text-sm sm:text-base font-light leading-relaxed">
                Within native Bassa-komo and Gbariyamma communities, infants were systematically condemned to death based on entrenched superstitions. Here are the 6 documented cultural causes VHH works daily to confront and eradicate:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {VHH_DATA.culturalRealities.map((item, idx) => (
                <div
                  key={item.id}
                  className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="w-7 h-7 rounded-full bg-red-100 text-red-900 font-mono text-xs font-bold flex items-center justify-center">
                        0{idx + 1}
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-red-50 text-red-800 border border-red-200">
                        {item.statistic}
                      </span>
                    </div>

                    <h4 className="font-serif font-bold text-lg text-vhh-charcoal mb-2.5 leading-snug">
                      {item.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] font-mono text-emerald-800 font-semibold">
                    <span>VHH Sanctuary Protocol</span>
                    <span className="text-emerald-700 font-bold">100% Protected</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Over 70% Maternal Mortality Callout */}
            <div className="p-6 sm:p-8 rounded-3xl bg-emerald-950 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-mono uppercase font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>The Primary Threat: Maternal Childbirth Death</span>
                </div>
                <h4 className="font-serif text-xl sm:text-2xl font-bold">
                  Over 70% of Children in Vine Heritage Home Were Saved from Being Buried Alive.
                </h4>
                <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                  When a mother passes in delivery or nursing due to inadequate rural clinics, the baby is blamed as evil. VHH saves the living infant and provides the formula, maternal care, and loving family they were denied.
                </p>
              </div>

              <div className="shrink-0 p-5 rounded-2xl bg-white/10 text-center min-w-[200px] border border-white/10">
                <span className="text-3xl sm:text-4xl font-serif font-bold text-emerald-300 block">
                  &gt; 70%
                </span>
                <span className="text-xs font-mono uppercase text-stone-300 mt-1 block">
                  Of Rescued Children
                </span>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: THE 8 CONSTITUTIONAL CHARTER MANDATES                              */}
        {/* ========================================================================= */}
        {activeStoryTab === 'objectives' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="max-w-3xl">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-vhh-charcoal">
                The 8 Official Objectives of Vine Heritage Home Foundation
              </h3>
              <p className="mt-2 text-stone-600 text-sm sm:text-base font-light leading-relaxed">
                As approved by the Corporate Affairs Commission (CAC) upon registration in January 2015, VHH is constitutionally mandated to fulfill these 8 foundational pillars:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(VHH_DATA as any).foundationObjectives?.map((obj: any) => (
                <div
                  key={obj.number}
                  className="p-6 sm:p-7 rounded-3xl bg-white border border-stone-200 shadow-sm flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-2xl bg-vhh-green-50 border border-vhh-green-200 text-vhh-green-900 font-serif font-bold text-sm flex items-center justify-center shrink-0">
                    {obj.number}
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-serif font-bold text-base sm:text-lg text-vhh-charcoal">
                        {obj.title}
                      </h4>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase font-bold bg-stone-100 text-stone-600 border border-stone-200">
                        {obj.category}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                      {obj.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: 58 COMMUNITIES IN THE MATAI PROJECT (EU & ACTIONAID NIGERIA)      */}
        {/* ========================================================================= */}
        {activeStoryTab === 'communities' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="max-w-3xl">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-vhh-charcoal">
                58 Rural Communities Covered in the MATAI Project
              </h3>
              <p className="mt-2 text-stone-600 text-sm sm:text-base font-light leading-relaxed">
                Under the Mobilizing Action Towards the Abolition of Infanticide (MATAI) project, funded by the European Union and co-implemented with ActionAid Nigeria, VHH directly intervenes across 58 indigenous settlements in 5 Area Councils:
              </p>
            </div>

            {/* Area Council Filter Buttons */}
            <div className="flex items-center gap-2 flex-wrap text-xs">
              <button
                onClick={() => setSelectedCouncilFilter('all')}
                className={`px-3.5 py-1.5 rounded-xl font-bold transition-all ${
                  selectedCouncilFilter === 'all'
                    ? 'bg-vhh-green-900 text-white'
                    : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-50'
                }`}
              >
                All 58 Communities
              </button>

              {VHH_DATA.affectedCouncils.map((c) => (
                <button
                  key={c.councilName}
                  onClick={() => setSelectedCouncilFilter(c.councilName)}
                  className={`px-3.5 py-1.5 rounded-xl font-bold transition-all ${
                    selectedCouncilFilter === c.councilName
                      ? 'bg-vhh-green-900 text-white'
                      : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-50'
                  }`}
                >
                  {c.councilName.split(' ')[0]} ({c.communities.length})
                </button>
              ))}
            </div>

            {/* Communities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {VHH_DATA.affectedCouncils
                .filter((c) => selectedCouncilFilter === 'all' || selectedCouncilFilter === c.councilName)
                .map((council) => (
                  <div
                    key={council.councilName}
                    className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-4"
                  >
                    <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-emerald-600" />
                        <h4 className="font-serif font-bold text-base text-vhh-charcoal">
                          {council.councilName}
                        </h4>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-50 text-emerald-900 border border-emerald-200">
                        {council.communities.length} Villages
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {council.communities.map((comm) => (
                        <span
                          key={comm}
                          className="px-2.5 py-1 rounded-lg bg-stone-50 text-stone-700 text-xs font-medium border border-stone-200"
                        >
                          {comm}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 5: BOARD OF TRUSTEES & LEADERSHIP PROFILES                           */}
        {/* ========================================================================= */}
        {activeStoryTab === 'executives' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="max-w-3xl">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-vhh-charcoal">
                Board of Trustees &amp; Executive Leadership
              </h3>
              <p className="mt-2 text-stone-600 text-sm sm:text-base font-light leading-relaxed">
                Vine Heritage Home Foundation is governed by a distinguished 6-member Board of Trustees spanning legal luminaries, medical advocates, and lifelong missionaries, supported by 30 devoted staff:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {VHH_DATA.executives.map((exec) => (
                <div
                  key={exec.name}
                  className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-2xl bg-vhh-green-50 border border-vhh-green-200 flex items-center justify-center text-vhh-green-800 mb-3">
                      <Users className="w-5 h-5 text-vhh-green-700" />
                    </div>

                    <h4 className="font-serif font-bold text-lg text-vhh-charcoal leading-snug">
                      {exec.name}
                    </h4>

                    <p className="text-xs font-mono font-bold text-emerald-800 uppercase tracking-wide">
                      {exec.role}
                    </p>

                    <p className="text-xs text-stone-600 font-light leading-relaxed pt-2 border-t border-stone-100">
                      {exec.bio}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-100 text-[10px] font-mono text-stone-400 uppercase tracking-wider">
                    CAC Registered Trustee
                  </div>
                </div>
              ))}
            </div>

            {/* Official Physical Locations Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0b1712] text-white shadow-xl grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <span className="text-xs font-mono text-emerald-400 uppercase font-bold tracking-wider">
                  Official Residential Home:
                </span>
                <h4 className="font-serif text-lg font-bold">VHH Residential Sanctuary</h4>
                <p className="text-xs text-stone-300 font-light">
                  NO 4 OPPOSITE HEALTH CENTER KIYI, ALONG KUJE / GWAGWALADA ROAD, KUJE, ABUJA.
                </p>
                <p className="text-xs font-mono text-emerald-300 pt-1">
                  Phones: 09019303646 &bull; 080344229935
                </p>
              </div>

              <div className="space-y-2 md:border-l md:border-white/10 md:pl-6">
                <span className="text-xs font-mono text-stone-400 uppercase font-bold tracking-wider">
                  Liaison &amp; Admin Office:
                </span>
                <h4 className="font-serif text-lg font-bold">Gwagwalada Office</h4>
                <p className="text-xs text-stone-300 font-light">
                  No. 17, Opposite Faculty of Law, University of Abuja, Mini Campus, Gwagwalada, Abuja.
                </p>
                <p className="text-xs font-mono text-stone-300 pt-1">
                  Phone: 08024343246
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
