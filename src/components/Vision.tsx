'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PlaceholderBadge } from './PlaceholderBadge';
import { Compass, ArrowRight, Target, ShieldCheck, GraduationCap, Award } from 'lucide-react';

export const Vision: React.FC = () => {
  const roadmap = [
    {
      stage: "Today",
      title: "Care + Protection",
      description: "Immediate sanctuary, housing stability, daily nutrition, medical care, and psychological safety.",
      icon: ShieldCheck,
      color: "bg-vhh-green-900 border-vhh-green-700 text-emerald-300"
    },
    {
      stage: "Tomorrow",
      title: "Education + Development",
      description: "Accredited schooling, tutoring, digital literacy, sports, character building, and creative arts.",
      icon: GraduationCap,
      color: "bg-vhh-green-800 border-vhh-green-600 text-emerald-200"
    },
    {
      stage: "The Future",
      title: "Independent Adult Life",
      description: "Tertiary education support, vocational skills, financial literacy, mentorship, and flourishing citizenship.",
      icon: Award,
      color: "bg-vhh-green-950 border-emerald-500 text-white"
    }
  ];

  return (
    <section className="py-24 bg-white text-vhh-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-vhh-green-50 text-vhh-green-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-vhh-green-200">
            <Target className="w-3.5 h-3.5 text-vhh-green-700" />
            <span>Strategic Direction & Vision</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-vhh-charcoal leading-tight">
            Building More Than a Home. <br />
            <span className="italic font-normal text-vhh-green-800">Building Futures.</span>
          </h2>

          <p className="mt-6 text-lg text-vhh-muted font-light leading-relaxed">
            Our vision extends beyond childhood care. We exist to shepherd vulnerable children into capable, dignified, self-reliant adults who will contribute meaningfully to Nigeria and the world.
          </p>
        </div>

        {/* Official Vision & Mission Placeholder Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="p-8 rounded-3xl bg-vhh-cream border border-vhh-green-900/10 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-vhh-green-800">Official Mission Statement</span>
              <PlaceholderBadge text="[MISSION STATEMENT PLACEHOLDER]" />
            </div>
            <p className="font-serif text-lg italic text-vhh-charcoal leading-relaxed">
              “To provide a safe, protective, and empowering sanctuary for vulnerable children in Nigeria, delivering holistic education, health, and spiritual guidance to prepare them for a purposeful future.”
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-vhh-cream border border-vhh-green-900/10 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-vhh-green-800">Official Vision Statement</span>
              <PlaceholderBadge text="[VISION STATEMENT PLACEHOLDER]" />
            </div>
            <p className="font-serif text-lg italic text-vhh-charcoal leading-relaxed">
              “To be a leading African humanitarian institution recognized for transforming vulnerable young lives into confident leaders, professionals, and agents of positive social change.”
            </p>
          </div>
        </div>

        {/* Visual Roadmap Progression */}
        <div className="p-8 sm:p-12 rounded-3xl bg-vhh-warm border border-vhh-sand">
          <h3 className="font-serif text-2xl font-bold text-vhh-charcoal mb-8 text-center">
            The Three-Stage Lifespan Progression Roadmap
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {roadmap.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className={`p-8 rounded-2xl border shadow-md flex flex-col justify-between ${item.color}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-white/10 uppercase tracking-widest">
                        {item.stage}
                      </span>
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <h4 className="font-serif text-2xl font-bold mb-3">{item.title}</h4>
                    <p className="text-sm font-light leading-relaxed opacity-90">{item.description}</p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/10 text-xs font-semibold uppercase tracking-wider flex items-center gap-2">
                    <span>Phase 0{idx + 1}</span>
                    <ArrowRight className="w-4 h-4 ml-auto" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
