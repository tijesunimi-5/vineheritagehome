'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, GraduationCap, Utensils, Calendar, Handshake, ArrowRight, ShieldCheck } from 'lucide-react';
import { PlaceholderBadge } from './PlaceholderBadge';
import Link from 'next/link';

interface ActionableSupportSectionProps {
  onOpenSupport: () => void;
  onOpenVolunteer: () => void;
}

export const ActionableSupportSection: React.FC<ActionableSupportSectionProps> = ({
  onOpenSupport,
  onOpenVolunteer,
}) => {
  const actions = [
    {
      title: "Sponsor a Child's School Fee & Tuition",
      desc: "Provide full primary, secondary, or vocational tuition sponsorship, uniforms, and textbooks.",
      badge: "[SCHOOL SPONSORSHIP DATA]",
      icon: GraduationCap,
      ctaText: "Sponsor Education",
      onClick: onOpenSupport,
      highlight: true
    },
    {
      title: "Food & Household Supply Support",
      desc: "Donate non-perishable foodstuffs (rice, beans, oil) or contribute toward daily kitchen meal prep.",
      badge: "[FOOD SUPPLY NEED]",
      icon: Utensils,
      ctaText: "Support Nutrition",
      onClick: onOpenSupport,
      highlight: false
    },
    {
      title: "Plan an Official Visit to Our Campus",
      desc: "Experience the physical home for yourself, meet the caregivers, and walk through our living spaces.",
      badge: "[VISITOR GUIDELINES]",
      icon: Calendar,
      ctaText: "Plan a Visit",
      isLink: true,
      href: "/contact",
      highlight: false
    },
    {
      title: "Corporate & NGO Partnerships",
      desc: "Collaborate on campus infrastructure development, solar energy, or healthcare outreach.",
      badge: "[PARTNERSHIP DESK]",
      icon: Handshake,
      ctaText: "Partner With Us",
      onClick: onOpenVolunteer,
      highlight: false
    }
  ];

  return (
    <section className="py-20 bg-vhh-cream text-vhh-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-vhh-green-800 block mb-2">
            Actionable Support & Impact
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-vhh-charcoal leading-tight">
            How You Can <span className="italic font-normal text-vhh-green-800">Support Right Now.</span>
          </h2>
          <p className="mt-3 text-sm text-vhh-muted font-light leading-relaxed">
            Whether sponsoring a student, donating household supplies, partnering on infrastructure, or scheduling a visit, your involvement transforms lives.
          </p>
        </div>

        {/* Action Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {actions.map((act, idx) => {
            const IconComp = act.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-6 rounded-2xl border transition-all flex flex-col justify-between group ${
                  act.highlight
                    ? 'bg-vhh-green-950 text-white border-vhh-green-700 shadow-xl'
                    : 'bg-white text-vhh-charcoal border-vhh-green-900/10 shadow-sm hover:shadow-card'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      act.highlight ? 'bg-vhh-green-800 text-emerald-300' : 'bg-vhh-green-50 text-vhh-green-800'
                    }`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <PlaceholderBadge
                      text={act.badge}
                      className={act.highlight ? 'bg-emerald-950 text-emerald-200 border-emerald-700' : ''}
                    />
                  </div>

                  <h3 className="font-serif text-lg font-bold mb-2 leading-snug">
                    {act.title}
                  </h3>

                  <p className={`text-xs font-light leading-relaxed mb-6 ${act.highlight ? 'text-stone-300' : 'text-vhh-muted'}`}>
                    {act.desc}
                  </p>
                </div>

                {act.isLink && act.href ? (
                  <Link
                    href={act.href}
                    className="w-full py-3 px-4 rounded-xl bg-vhh-green-50 text-vhh-green-800 font-bold text-xs uppercase tracking-wider hover:bg-vhh-green-100 transition-all flex items-center justify-center gap-2 group-hover:gap-3"
                  >
                    <span>{act.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ) : (
                  <button
                    onClick={act.onClick}
                    className={`w-full py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 group-hover:gap-3 ${
                      act.highlight
                        ? 'bg-vhh-green-700 text-white hover:bg-vhh-green-600 shadow-md'
                        : 'bg-vhh-green-50 text-vhh-green-800 hover:bg-vhh-green-100'
                    }`}
                  >
                    <span>{act.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* View All Ways to Support */}
        <div className="text-center">
          <Link
            href="/get-involved"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-vhh-green-800 hover:text-vhh-green-600 transition-colors group"
          >
            <span>View Complete Support & In-Kind Donation Guidelines</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
};
