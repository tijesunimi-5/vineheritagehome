'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Home, Layers, BarChart3, Heart, Camera, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const DeepExploreGateways: React.FC = () => {
  const pages = [
    {
      title: "Our Story & Vision",
      desc: "Deep historical context, founder notes, historical milestones, and long-term vision.",
      href: "/our-story",
      icon: BookOpen,
      tag: "Deep Narrative"
    },
    {
      title: "Explore Campus & Facilities",
      desc: "Detailed visual guide of residential quarters, study halls, dining, and expansion masterplan.",
      href: "/our-home",
      icon: Home,
      tag: "Physical Campus"
    },
    {
      title: "Detailed Care Programs",
      desc: "In-depth breakdown of child protection, schooling tuition, healthcare, and digital skills.",
      href: "/programs",
      icon: Layers,
      tag: "Integrated Programs"
    },
    {
      title: "Empirical Impact & Metrics",
      desc: "Verified student intake counts, educational sponsorships, and historical timeline.",
      href: "/impact",
      icon: BarChart3,
      tag: "Verifiable Data"
    },
    {
      title: "Children & Alumni Stories",
      desc: "Dignified reflections honoring resilience with child protection & consent safeguards.",
      href: "/stories",
      icon: Heart,
      tag: "Human Stories"
    },
    {
      title: "Moments & Photo Journal",
      desc: "Living photo timeline of events, partner visits, celebrations, and construction updates.",
      href: "/moments",
      icon: Camera,
      tag: "Living Archive"
    },
    {
      title: "Plan a Visit & Directions",
      desc: "Visitor guidelines, campus tour scheduling, phone, email, and Google Maps location frame.",
      href: "/contact",
      icon: MapPin,
      tag: "Visit Us"
    }
  ];

  return (
    <section className="py-20 bg-white text-vhh-charcoal relative overflow-hidden border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-vhh-green-800 block mb-2">
            Navigation Gateway & Depth Pages
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-vhh-charcoal leading-tight">
            Explore Vine Heritage Home <span className="italic font-normal text-vhh-green-800">In Depth.</span>
          </h2>
          <p className="mt-3 text-sm text-vhh-muted font-light leading-relaxed">
            Choose a chapter to dive deep into dedicated interactive pages for full organizational context.
          </p>
        </div>

        {/* Gateways Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pages.map((pg, idx) => {
            const IconComp = pg.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <Link
                  href={pg.href}
                  className="p-6 rounded-2xl bg-vhh-warm border border-vhh-sand hover:border-vhh-green-600 transition-all flex flex-col justify-between group h-full shadow-sm hover:shadow-card block"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-white text-vhh-green-800 border border-stone-200 flex items-center justify-center group-hover:bg-vhh-green-800 group-hover:text-white transition-colors">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-white text-vhh-charcoal border border-stone-200">
                        {pg.tag}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-vhh-charcoal mb-2 group-hover:text-vhh-green-800 transition-colors">
                      {pg.title}
                    </h3>

                    <p className="text-xs text-vhh-muted font-light leading-relaxed mb-6">
                      {pg.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-vhh-sand flex items-center justify-between text-xs font-bold uppercase tracking-wider text-vhh-green-800 group-hover:text-vhh-green-600">
                    <span>Open Chapter Page</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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
