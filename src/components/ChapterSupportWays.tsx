'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, GraduationCap, Wrench, Palette, HeartPulse, Shield, ArrowRight } from 'lucide-react';

interface ChapterSupportWaysProps {
  onOpenSupport: () => void;
}

export const ChapterSupportWays: React.FC<ChapterSupportWaysProps> = ({ onOpenSupport }) => {
  const categories = [
    { title: "Education", desc: "Support academic tuition, uniforms, textbooks, and homework mentorship.", icon: GraduationCap },
    { title: "Skills & Technology", desc: "Support digital literacy, computer hardware, and vocational training.", icon: Wrench },
    { title: "Music & Creativity", desc: "Support artistic expression, musical instruments, and creative supplies.", icon: Palette },
    { title: "Health & Wellbeing", desc: "Support medical checkups, emergency care, and hygiene supplies.", icon: HeartPulse },
    { title: "Daily Care & Shelter", desc: "Support daily nutritious meals, beddings, and residential upkeep.", icon: Heart },
    { title: "Institutional Partnership", desc: "Support long-term campus construction and infrastructure expansion.", icon: Shield },
  ];

  return (
    <section className="py-28 bg-white text-vhh-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vhh-green-50 border border-vhh-green-200 text-vhh-green-900 text-xs font-mono font-semibold uppercase tracking-widest mb-4">
            <Heart className="w-3.5 h-3.5 text-vhh-red-600 fill-vhh-red-600" />
            <span>CHAPTER 09 &bull; WAYS TO SUPPORT</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-vhh-charcoal leading-tight">
            Ways to <span className="italic font-normal text-vhh-green-800">Support the Mission.</span>
          </h2>

          <p className="mt-4 text-base text-vhh-muted font-light leading-relaxed">
            Choose where your contribution creates direct, immediate impact in a child's life.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {categories.map((cat, idx) => {
            const IconComponent = cat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-vhh-cream border border-vhh-green-900/10 shadow-sm hover:shadow-card transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-vhh-green-50 text-vhh-green-800 border border-vhh-green-100 flex items-center justify-center mb-6 group-hover:bg-vhh-green-800 group-hover:text-white transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-vhh-charcoal mb-3 group-hover:text-vhh-green-800 transition-colors">
                    {cat.title}
                  </h3>

                  <p className="text-sm text-vhh-muted font-light leading-relaxed">
                    {cat.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-vhh-sand flex items-center justify-between text-xs font-semibold text-vhh-green-800">
                  <span>Impact Area</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Support Mission Button */}
        <div className="text-center">
          <button
            onClick={onOpenSupport}
            className="px-9 py-4 rounded-xl bg-vhh-green-800 text-white font-bold text-xs uppercase tracking-wider shadow-xl hover:bg-vhh-green-700 transition-all inline-flex items-center gap-2 group"
          >
            <Heart className="w-4 h-4 text-vhh-red-500 fill-vhh-red-500 transition-transform group-hover:scale-110" />
            <span>Support The Mission Now</span>
          </button>
        </div>

      </div>
    </section>
  );
};
