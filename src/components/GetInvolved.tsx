'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PlaceholderBadge } from './PlaceholderBadge';
import { Heart, Handshake, Users, Gift, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';

interface GetInvolvedProps {
  onOpenSupport: () => void;
  onOpenVolunteer: () => void;
}

export const GetInvolved: React.FC<GetInvolvedProps> = ({ onOpenSupport, onOpenVolunteer }) => {
  const options = [
    {
      title: "Financial Support & Giving",
      desc: "Sponsor a child's education, contribute to daily operational care, or fund campus construction.",
      badge: "[DONATION DETAILS]",
      cta: "Donate Now",
      icon: Heart,
      action: onOpenSupport,
      primary: true
    },
    {
      title: "Corporate & NGO Partnerships",
      desc: "Collaborate on CSR initiatives, infrastructure development, or institutional resource sharing.",
      badge: "[PARTNERSHIP CONTACT]",
      cta: "Partner With Us",
      icon: Handshake,
      action: onOpenVolunteer,
      primary: false
    },
    {
      title: "Volunteer & Expertise Share",
      desc: "Contribute teaching skills, medical expertise, digital literacy coaching, or artistic mentorship.",
      badge: "[VOLUNTEER INFORMATION]",
      cta: "Apply to Volunteer",
      icon: Users,
      action: onOpenVolunteer,
      primary: false
    },
    {
      title: "In-Kind Material Donations",
      desc: "Donate educational supplies, books, medical equipment, clothing, or non-perishable foodstuffs.",
      badge: "[MATERIAL DONATIONS GUIDE]",
      cta: "Inquire About Items",
      icon: Gift,
      action: onOpenVolunteer,
      primary: false
    },
    {
      title: "Arrange an Official Visit",
      desc: "Learn how prospective supporters, organizations, and partners can schedule a campus visit.",
      badge: "[VISITOR PROTOCOL]",
      cta: "Schedule Visit",
      icon: Calendar,
      action: onOpenVolunteer,
      primary: false
    }
  ];

  return (
    <section id="get-involved" className="py-24 bg-vhh-cream text-vhh-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-vhh-green-100 text-vhh-green-900 text-xs font-semibold uppercase tracking-wider mb-4 border border-vhh-green-200">
            <Users className="w-3.5 h-3.5 text-vhh-green-700" />
            <span>Humanitarian Collaboration</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-vhh-charcoal leading-tight">
            Join the Mission: <span className="italic font-normal text-vhh-green-800">Become a Partner in Care.</span>
          </h2>

          <p className="mt-6 text-lg text-vhh-muted font-light leading-relaxed">
            Whether as an individual donor, corporate partner, volunteer, or advocate, your support directly empowers vulnerable children in Nigeria to build dignified futures.
          </p>
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {options.map((opt, idx) => {
            const IconComp = opt.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between group ${
                  opt.primary
                    ? 'bg-vhh-green-900 text-white border-vhh-green-700 shadow-xl'
                    : 'bg-white text-vhh-charcoal border-vhh-green-900/10 shadow-card hover:shadow-elevated'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      opt.primary ? 'bg-vhh-green-800 text-emerald-300' : 'bg-vhh-green-50 text-vhh-green-800'
                    }`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <PlaceholderBadge
                      text={opt.badge}
                      className={opt.primary ? 'bg-emerald-950 text-emerald-200 border-emerald-700' : ''}
                    />
                  </div>

                  <h3 className="font-serif text-2xl font-bold mb-3">{opt.title}</h3>
                  <p className={`text-sm font-light leading-relaxed mb-6 ${opt.primary ? 'text-stone-300' : 'text-vhh-muted'}`}>
                    {opt.desc}
                  </p>
                </div>

                <button
                  onClick={opt.action}
                  className={`w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 group-hover:gap-3 ${
                    opt.primary
                      ? 'bg-vhh-green-700 text-white hover:bg-vhh-green-600 shadow-md'
                      : 'bg-vhh-green-50 text-vhh-green-800 hover:bg-vhh-green-100'
                  }`}
                >
                  <span>{opt.cta}</span>
                  <ArrowRight className="w-4 h-4 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
