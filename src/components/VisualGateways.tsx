'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Home, Layers, BarChart3, Heart, Camera, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const VisualGateways: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const depthRoutes = [
    {
      title: "Our Story & Mandate",
      desc: "Deep historical context, founder notes, timeline, and vision.",
      imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop",
      href: "/our-story",
      icon: BookOpen,
      tag: "History"
    },
    {
      title: "Explore Campus Facilities",
      desc: "Visual guide to residential quarters, study halls, and 3D layout.",
      imageUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=800&auto=format&fit=crop",
      href: "/our-home",
      icon: Home,
      tag: "Campus"
    },
    {
      title: "Care & Development Programs",
      desc: "Full breakdown of residential care, schooling, health, and skills.",
      imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
      href: "/programs",
      icon: Layers,
      tag: "Programs"
    },
    {
      title: "Impact & Empirical Data",
      desc: "Verifiable student metrics, sponsorships, and historical milestones.",
      imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop",
      href: "/impact",
      icon: BarChart3,
      tag: "Impact"
    },
    {
      title: "Children & Alumni Stories",
      desc: "Dignified reflections with child protection & consent safeguards.",
      imageUrl: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?q=80&w=800&auto=format&fit=crop",
      href: "/stories",
      icon: Heart,
      tag: "Stories"
    },
    {
      title: "Living Photo Journal",
      desc: "Timeline archive of partner visits, celebrations, and progress.",
      imageUrl: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800&auto=format&fit=crop",
      href: "/moments",
      icon: Camera,
      tag: "Moments"
    },
    {
      title: "Plan a Visit & Directions",
      desc: "Campus visitor guidelines, phone, email, and Google Maps frame.",
      imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
      href: "/contact",
      icon: MapPin,
      tag: "Visit Us"
    }
  ];

  return (
    <section className="py-24 bg-white text-vhh-charcoal relative overflow-hidden border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-vhh-green-800 block mb-2">
            NAVIGATION GATEWAY & DEDICATED CHAPTERS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-vhh-charcoal leading-tight">
            Explore Vine Heritage Home <span className="italic font-normal text-vhh-green-800">In Depth.</span>
          </h2>
          <p className="mt-3 text-sm text-vhh-muted font-light leading-relaxed">
            Hover over the horizontal card deck to reveal details, or tap any card to open the dedicated page.
          </p>
        </div>

        {/* 1. DESKTOP ACCORDION LAYOUT (Horizontal Stacked Card Deck for Large Screens) */}
        <div
          onMouseLeave={() => setHoveredIdx(null)}
          className="hidden lg:flex flex-row gap-3 h-[460px] w-full items-stretch"
        >
          {depthRoutes.map((route, idx) => {
            const IconComp = route.icon;
            const isHovered = hoveredIdx === idx;
            const isAnyHovered = hoveredIdx !== null;

            // Compute flex basis dynamically for smooth expanding horizontal deck
            let flexClass = 'flex-1';
            if (isAnyHovered) {
              if (isHovered) {
                flexClass = 'flex-[3.5]';
              } else {
                flexClass = 'flex-[0.75]';
              }
            }

            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIdx(idx)}
                className={`relative rounded-3xl overflow-hidden bg-vhh-dark transition-all duration-500 ease-out cursor-pointer shadow-md hover:shadow-2xl border border-vhh-green-900/30 ${flexClass}`}
              >
                <Link href={route.href} className="w-full h-full block relative">
                  {/* Photo Background */}
                  <img
                    src={route.imageUrl}
                    alt={route.title}
                    className="w-full h-full object-cover transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  />
                  
                  {/* Dark Overlay Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-vhh-dark via-vhh-dark/40 to-transparent transition-opacity duration-500 ${
                    isHovered ? 'opacity-95' : 'opacity-80'
                  }`} />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/90 text-vhh-charcoal backdrop-blur-md shadow-sm flex items-center gap-1.5 whitespace-nowrap">
                      <IconComp className="w-3.5 h-3.5 text-vhh-green-700 shrink-0" />
                      <span>{route.tag}</span>
                    </span>
                  </div>

                  {/* Bottom Content Area */}
                  <div className="absolute bottom-0 inset-x-0 p-5 xl:p-6 z-10 flex flex-col justify-end">
                    
                    <h3 className={`font-serif font-bold text-white transition-all duration-300 leading-snug ${
                      isHovered ? 'text-2xl text-emerald-300 mb-2' : 'text-lg line-clamp-2'
                    }`}>
                      {route.title}
                    </h3>

                    {/* Description - fully visible when hovered or unhovered base */}
                    <p className={`text-xs text-stone-200 font-light leading-relaxed transition-all duration-500 ${
                      isHovered
                        ? 'opacity-100 max-h-24 mb-4'
                        : isAnyHovered
                        ? 'opacity-0 max-h-0 overflow-hidden'
                        : 'opacity-90 line-clamp-2 mb-2'
                    }`}>
                      {route.desc}
                    </p>

                    {/* Action Button */}
                    <div className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                      isHovered ? 'text-white opacity-100 translate-y-0' : 'text-emerald-300 opacity-90'
                    }`}>
                      <span>Explore Page</span>
                      <ArrowRight className={`w-4 h-4 transition-transform ${isHovered ? 'translate-x-1' : ''}`} />
                    </div>

                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* 2. MOBILE & TABLET LAYOUT (Normal Vertical Grid for Screens < 1024px) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden">
          {depthRoutes.map((route, idx) => {
            const IconComp = route.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <Link
                  href={route.href}
                  className="group relative rounded-3xl overflow-hidden bg-vhh-dark h-72 block shadow-md hover:shadow-xl transition-all border border-vhh-green-900/20"
                >
                  <img
                    src={route.imageUrl}
                    alt={route.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-vhh-dark via-vhh-dark/40 to-transparent opacity-90" />

                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/90 text-vhh-charcoal backdrop-blur-md shadow-sm flex items-center gap-1.5">
                      <IconComp className="w-3.5 h-3.5 text-vhh-green-700" />
                      {route.tag}
                    </span>
                  </div>

                  <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col justify-end">
                    <h3 className="font-serif text-xl font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">
                      {route.title}
                    </h3>

                    <p className="text-xs text-stone-300 font-light line-clamp-2 mb-4">
                      {route.desc}
                    </p>

                    <div className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-emerald-300 group-hover:text-white transition-colors">
                      <span>Explore Page</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
