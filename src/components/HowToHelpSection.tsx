'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Utensils, 
  GraduationCap, 
  HeartPulse, 
  PackageCheck, 
  ArrowRight, 
  Heart, 
  CheckCircle2,
  ListFilter
} from 'lucide-react';
import Link from 'next/link';

interface HowToHelpSectionProps {
  onDonate?: () => void;
}

export const HowToHelpSection: React.FC<HowToHelpSectionProps> = ({ onDonate }) => {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const pillars = [
    {
      id: "nutrition",
      number: "01",
      tag: "Nutrition & Pantry",
      title: "Provide Daily Meals",
      summary: "Feeding 239 children 3 hot, balanced meals every single day at our home in Kuje.",
      keyItems: [
        "Bags of Rice (50kg) & Beans (50kg)",
        "Tubers of Yam, Semo & Flour",
        "25L Kegs of Groundnut & Palm Oil",
        "Packs of Noodles, Milk & Formula"
      ],
      icon: Utensils,
      imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop",
      badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
      accentBorder: "group-hover:border-amber-400"
    },
    {
      id: "education",
      number: "02",
      tag: "External School Fees",
      title: "Sponsor External School Fees",
      summary: "Our children attend accredited schools in town. VHH covers 100% of their tuition, uniforms, textbooks, and daily school bus transit.",
      keyItems: [
        "Term School Fees Sponsorship (External Schools)",
        "Calculators & Mathematical Sets",
        "Textbooks, Exercise Books & Pens",
        "School Bags, Uniforms & Bus Transit Fuel"
      ],
      icon: GraduationCap,
      imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
      badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
      accentBorder: "group-hover:border-emerald-500"
    },
    {
      id: "healthcare",
      number: "03",
      tag: "Health & Therapy",
      title: "Medical & Clinical Care",
      summary: "Routine clinic checkups, emergency medications, and therapies for children with special needs.",
      keyItems: [
        "Resident Home Nurse Consumables",
        "Hospital Bills & Emergency Care",
        "First Aid Kits & Disinfectants",
        "Care for Albinism & Cerebral Palsy"
      ],
      icon: HeartPulse,
      imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1200&auto=format&fit=crop",
      badgeColor: "bg-rose-100 text-rose-900 border-rose-300",
      accentBorder: "group-hover:border-rose-400"
    },
    {
      id: "essentials",
      number: "04",
      tag: "Daily Comfort",
      title: "Basic Living & Hygiene",
      summary: "Providing personal dignity, sanitary care, clean clothing, and restful dormitory comfort.",
      keyItems: [
        "Sanitary Pads & Hygiene Packs",
        "Laundry Detergents & Bar Soaps",
        "Toothbrushes, Towels & Sponges",
        "Standing Fans & Quality Beddings"
      ],
      icon: PackageCheck,
      imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
      badgeColor: "bg-blue-100 text-blue-900 border-blue-300",
      accentBorder: "group-hover:border-blue-400"
    }
  ];

  return (
    <section 
      id="how-you-can-help" 
      aria-label="How You Can Help Vine Heritage Home"
      className="py-20 sm:py-28 bg-[#f5f2ea] text-vhh-charcoal relative overflow-hidden border-t border-stone-200/90"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-vhh-green-900/10 text-vhh-green-900 text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <Heart className="w-3.5 h-3.5 text-vhh-green-800" />
              <span>How You Can Help</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-vhh-charcoal leading-tight">
              Our Needs Grow Daily. <br />
              <span className="italic font-normal text-vhh-green-800">
                Here Is How You Can Stand With Us.
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-stone-600 font-light leading-relaxed">
              Nurturing, feeding, educating, and healing <strong>239 children</strong> is a daily commitment. We have organized our most critical ongoing needs so you can support in the way that matters most to you.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <Link
              href="/get-involved"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-vhh-green-900 text-white text-xs sm:text-sm font-semibold hover:bg-vhh-green-800 transition-all shadow-sm group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <ListFilter className="w-4 h-4 text-emerald-300" />
              <span>View Full Itemized Needs List</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* RESPONSIVE CARDS CONTAINER:                                              */}
        {/* - Desktop (lg): Horizontal stacked spread layout with smooth hover focus  */}
        {/* - Mobile (<lg): Clean, intuitive vertical cards arranged one-by-one       */}
        {/* ========================================================================= */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-5 items-stretch">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            const isHovered = hoveredCard === index;
            const hasActiveHover = hoveredCard !== null;

            return (
              <motion.div
                key={pillar.id}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ 
                  duration: shouldReduceMotion ? 0 : 0.6, 
                  delay: shouldReduceMotion ? 0 : index * 0.1 
                }}
                className={`relative rounded-3xl overflow-hidden bg-white border border-stone-200 shadow-sm transition-all duration-500 ease-out flex flex-col justify-between group ${
                  // On desktop: flex grow behavior when hovered, but keep legible when not hovered
                  isHovered 
                    ? 'lg:flex-[1.5] shadow-xl border-vhh-green-700/60 ring-2 ring-vhh-green-700/20' 
                    : hasActiveHover 
                    ? 'lg:flex-1 opacity-90' 
                    : 'lg:flex-1 hover:shadow-md'
                }`}
              >
                {/* Visual Image Header: Rich, clear framing on mobile & desktop */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-stone-100">
                  <img
                    src={pillar.imageUrl}
                    alt={pillar.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-900/20 to-transparent" />
                  
                  {/* Floating Pillar Number & Tag */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center font-mono text-xs font-bold text-stone-800 shadow-xs">
                      {pillar.number}
                    </span>

                    <span className={`px-2.5 py-1 rounded-md text-[10px] font-mono uppercase font-bold tracking-wider border backdrop-blur-xs ${pillar.badgeColor}`}>
                      {pillar.tag}
                    </span>
                  </div>

                  {/* Icon & Category Title Over Image */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2.5 text-white">
                    <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center text-white shrink-0 border border-white/20">
                      <IconComponent className="w-4 h-4 text-emerald-200" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-white tracking-tight leading-snug">
                      {pillar.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body & Itemized Needs List */}
                <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                  <div>
                    <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed mb-4">
                      {pillar.summary}
                    </p>

                    {/* Bullet Highlights from Handwritten Notes */}
                    <div className="space-y-2 mb-6 pt-3 border-t border-stone-100">
                      <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-stone-400 block mb-1.5">
                        Urgent Needs Include:
                      </span>
                      {pillar.keyItems.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex items-start gap-2 text-xs text-stone-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-tight font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Direct Link to Dedicated Section */}
                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                    <Link
                      href={`/get-involved#${pillar.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-vhh-green-900 hover:text-vhh-green-700 transition-colors group/link"
                    >
                      <span>Explore this category</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                    </Link>

                    {onDonate && (
                      <button
                        onClick={onDonate}
                        className="text-[11px] font-mono text-vhh-red-600 hover:text-vhh-red-700 font-semibold"
                      >
                        Give &rarr;
                      </button>
                    )}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* BOTTOM ACTION & RADICAL TRANSPARENCY BANNER                                */}
        {/* ========================================================================= */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-vhh-green-50 border border-vhh-green-200 flex items-center justify-center text-vhh-green-800 shrink-0">
              <PackageCheck className="w-6 h-6 text-vhh-green-700" />
            </div>
            <div>
              <h4 className="font-serif text-lg sm:text-xl font-bold text-vhh-charcoal">
                Need to arrange physical food drop-off or financial bank transfers?
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 font-light mt-0.5 max-w-2xl leading-relaxed">
                We accept physical provisions at our home in Kuje, Abuja and official corporate/individual bank transfers through our registered Nigerian NGO accounts.
              </p>
            </div>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            {onDonate && (
              <button
                onClick={onDonate}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-vhh-red-600 text-white text-xs sm:text-sm font-semibold hover:bg-vhh-red-700 transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-vhh-red-400"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Donate Funds Directly</span>
              </button>
            )}

            <Link
              href="/get-involved"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-stone-100 border border-stone-300 text-stone-800 text-xs sm:text-sm font-semibold hover:bg-stone-200 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-400"
            >
              <span>See Full Needs Page</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
