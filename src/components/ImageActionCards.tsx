'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Utensils, Wrench, Calendar, Heart, ArrowRight } from 'lucide-react';
import { PlaceholderBadge } from './PlaceholderBadge';
import Link from 'next/link';

interface ImageActionCardsProps {
  onOpenSupport: () => void;
  onOpenVolunteer: () => void;
}

export const ImageActionCards: React.FC<ImageActionCardsProps> = ({
  onOpenSupport,
  onOpenVolunteer,
}) => {
  const cards = [
    {
      title: "Sponsor a Student's Education",
      desc: "Full school tuition, uniforms, textbooks, and daily homework tutoring for a resident child.",
      imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
      badge: "[SCHOOL SPONSORSHIP]",
      ctaText: "Sponsor Tuition",
      icon: GraduationCap,
      onClick: onOpenSupport
    },
    {
      title: "Nourish a Home (Daily Meals)",
      desc: "Fund fresh, nutritious daily meals and kitchen pantry supplies for our growing family.",
      imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop",
      badge: "[NUTRITION FUND]",
      ctaText: "Fund Monthly Meals",
      icon: Utensils,
      onClick: onOpenSupport
    },
    {
      title: "Provide Technology & Skill Kits",
      desc: "Donate refurbished laptops, art supplies, trade tools, and digital literacy equipment.",
      imageUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
      badge: "[SKILLS & TECH]",
      ctaText: "Donate Supplies",
      icon: Wrench,
      onClick: onOpenVolunteer
    },
    {
      title: "Come Walk Through Our Home",
      desc: "Schedule a physical campus visit, meet our dedicated house mothers, and see the impact for yourself.",
      imageUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=800&auto=format&fit=crop",
      badge: "[SCHEDULE VISIT]",
      ctaText: "Plan a Campus Visit",
      icon: Calendar,
      isLink: true,
      href: "/contact"
    }
  ];

  return (
    <section className="py-24 bg-vhh-dark text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-hero-gradient opacity-90" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-vhh-green-900 border border-vhh-green-700 text-emerald-300 text-xs font-mono font-semibold uppercase tracking-widest mb-4">
            <Heart className="w-3.5 h-3.5 text-vhh-red-500 fill-vhh-red-500" />
            <span>DIRECT ACTION & SUPPORT</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-stone-100 leading-tight">
            How You Can <span className="italic font-normal text-emerald-200">Help Today.</span>
          </h2>

          <p className="mt-4 text-base text-stone-300 font-light leading-relaxed">
            Your involvement directly anchors a child's safety, schooling, nutrition, and future independence.
          </p>
        </div>

        {/* 4 Photo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {cards.map((card, idx) => {
            const IconComp = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative rounded-3xl overflow-hidden bg-vhh-green-950 h-[420px] shadow-2xl flex flex-col justify-between border border-vhh-green-700/40 hover:border-emerald-400/50 transition-all"
              >
                {/* Photo Background */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={card.imageUrl}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-vhh-dark via-vhh-dark/60 to-vhh-dark/30" />
                </div>

                {/* Card Top */}
                <div className="relative z-10 p-6 flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-vhh-green-900/90 text-emerald-300 border border-emerald-500/40 backdrop-blur-md flex items-center justify-center">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <PlaceholderBadge text={card.badge} className="bg-emerald-950/80 text-emerald-200 border-emerald-700 backdrop-blur-md" />
                </div>

                {/* Card Bottom */}
                <div className="relative z-10 p-6">
                  <h3 className="font-serif text-2xl font-bold text-white mb-2 leading-snug group-hover:text-emerald-300 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-xs text-stone-300 font-light leading-relaxed mb-6">
                    {card.desc}
                  </p>

                  {card.isLink && card.href ? (
                    <Link
                      href={card.href}
                      className="w-full py-3.5 rounded-xl bg-vhh-green-700 text-white font-bold text-xs uppercase tracking-wider hover:bg-vhh-green-600 transition-all flex items-center justify-center gap-2 group-hover:gap-3 shadow-lg"
                    >
                      <span>{card.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  ) : (
                    <button
                      onClick={card.onClick}
                      className="w-full py-3.5 rounded-xl bg-vhh-green-700 text-white font-bold text-xs uppercase tracking-wider hover:bg-vhh-green-600 transition-all flex items-center justify-center gap-2 group-hover:gap-3 shadow-lg"
                    >
                      <span>{card.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
