'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, GraduationCap, HeartPulse, Wrench, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export const WhatWeDoSection: React.FC = () => {
  const corePrograms = [
    {
      title: "24/7 Residential Care & Shelter",
      desc: "Full-time safe housing, nutritious daily meals, protective guardianship, and a warm family environment.",
      icon: Shield,
      points: ["Safe Sanctuary", "Nutritious Meals", "Guardian Care"]
    },
    {
      title: "Schooling & Tuition Sponsorship",
      desc: "Ensuring all children attend accredited schools with full tuition coverage, uniforms, textbooks, and tutoring.",
      icon: GraduationCap,
      points: ["Primary & Secondary Tuition", "Books & Uniforms", "Daily Homework Tutoring"]
    },
    {
      title: "Healthcare & Psychosocial Wellbeing",
      desc: "Regular medical checkups, emergency care access, clean water, hygiene, and mental health counseling.",
      icon: HeartPulse,
      points: ["Medical Checkups", "Clean Water & Hygiene", "Emotional Wellbeing"]
    },
    {
      title: "Digital Skills & Vocational Training",
      desc: "Equipping older youth with computer literacy, creative arts, trade skills, and financial independence tools.",
      icon: Wrench,
      points: ["Computer Literacy", "Trade Apprenticeships", "Life Skills Prep"]
    }
  ];

  return (
    <section className="py-20 bg-white text-vhh-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-vhh-green-800 block mb-2">
            What We Do & Why We Do It
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-vhh-charcoal leading-tight">
            Holistic Nurture: <span className="italic font-normal text-vhh-green-800">Care, Schooling, & Empowerment.</span>
          </h2>
          <p className="mt-3 text-sm text-vhh-muted font-light leading-relaxed">
            We intervene where vulnerable children require safe refuge, ensuring they receive the shelter, education, and moral foundation needed to thrive.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {corePrograms.map((prog, idx) => {
            const IconComp = prog.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-vhh-cream border border-vhh-green-900/10 shadow-sm hover:shadow-card transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-vhh-green-50 text-vhh-green-800 border border-vhh-green-100 flex items-center justify-center mb-4 group-hover:bg-vhh-green-800 group-hover:text-white transition-colors">
                    <IconComp className="w-5 h-5" />
                  </div>

                  <h3 className="font-serif text-lg font-bold text-vhh-charcoal mb-2 group-hover:text-vhh-green-800 transition-colors">
                    {prog.title}
                  </h3>

                  <p className="text-xs text-vhh-muted font-light leading-relaxed mb-4">
                    {prog.desc}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-vhh-sand">
                    {prog.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-1.5 text-[11px] font-medium text-vhh-charcoal">
                        <CheckCircle2 className="w-3.5 h-3.5 text-vhh-green-600 shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Link to Full Programs Page */}
        <div className="text-center">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-vhh-green-800 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:bg-vhh-green-700 transition-all group"
          >
            <span>Explore All Programs In Detail</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
};
