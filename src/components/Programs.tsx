'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { VHH_DATA } from '@/data/vhhData';
import { Shield, GraduationCap, HeartPulse, Wrench, Lock, Users, CheckCircle2, Layers } from 'lucide-react';

export const Programs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shield': return <Shield className="w-6 h-6 text-vhh-green-700" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-vhh-green-700" />;
      case 'HeartPulse': return <HeartPulse className="w-6 h-6 text-vhh-red-600" />;
      case 'Wrench': return <Wrench className="w-6 h-6 text-vhh-green-700" />;
      case 'Lock': return <Lock className="w-6 h-6 text-vhh-green-700" />;
      case 'Users': return <Users className="w-6 h-6 text-vhh-green-700" />;
      default: return <Shield className="w-6 h-6 text-vhh-green-700" />;
    }
  };

  return (
    <section id="what-we-do" className="py-24 bg-vhh-warm text-vhh-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-vhh-green-100 text-vhh-green-900 text-xs font-semibold uppercase tracking-wider mb-4 border border-vhh-green-200">
            <Layers className="w-3.5 h-3.5 text-vhh-green-700" />
            <span>Institutional Programs & Pillars</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-vhh-charcoal leading-tight">
            What We Do: <span className="italic font-normal text-vhh-green-800">Holistic Care Programs.</span>
          </h2>

          <p className="mt-6 text-lg text-vhh-muted font-light leading-relaxed">
            Our operational framework delivers integrated, long-term intervention spanning safe residential care, accredited schooling, healthcare, and life skill empowerment.
          </p>
        </div>

        {/* Modular Grid of Programs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VHH_DATA.programs.map((prog, idx) => (
            <motion.div
              key={prog.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white border border-vhh-green-900/10 shadow-card hover:shadow-elevated transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-vhh-green-50 border border-vhh-green-100 flex items-center justify-center group-hover:bg-vhh-green-100 transition-colors">
                    {getIcon(prog.icon)}
                  </div>
                  <span className="text-xs font-mono font-bold text-stone-400">PROGRAM 0{idx + 1}</span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-vhh-charcoal mb-3 group-hover:text-vhh-green-800 transition-colors">
                  {prog.title}
                </h3>

                <p className="text-sm text-vhh-muted font-light leading-relaxed mb-6">
                  {prog.desc}
                </p>

                {/* Sub-details list */}
                <div className="space-y-2 border-t border-stone-100 pt-4">
                  {prog.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-vhh-charcoal font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-vhh-green-600 shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-vhh-green-800">
                <span>Active Program</span>
                <span className="w-2 h-2 rounded-full bg-vhh-green-600" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
