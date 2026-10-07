'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, GraduationCap, Award } from 'lucide-react';

export const ChapterFutureVision: React.FC = () => {
  const progression = [
    {
      stage: "Today",
      title: "Care + Protection",
      desc: "Providing safe sanctuary, housing stability, nutrition, and immediate security for every resident.",
      icon: ShieldCheck
    },
    {
      stage: "Growing",
      title: "Education + Development",
      desc: "Accredited primary and secondary schooling, digital skills, sports, and character building.",
      icon: GraduationCap
    },
    {
      stage: "Tomorrow",
      title: "Opportunity + Independence",
      desc: "Equipping young adults for university, vocational self-reliance, and active societal leadership.",
      icon: Award
    }
  ];

  return (
    <section className="py-28 bg-vhh-green-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vhh-green-900 border border-vhh-green-700 text-emerald-300 text-xs font-mono font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>CHAPTER 10 &bull; THE FUTURE</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight leading-tight">
            The story is <span className="italic font-normal text-emerald-200">still being written.</span>
          </h2>

          <p className="mt-4 text-base text-stone-300 font-light leading-relaxed">
            Vine Heritage Home is an evolving movement, continually expanding facilities and pathways toward youth self-reliance.
          </p>
        </div>

        {/* 3-Stage Progression Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {progression.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="p-8 rounded-3xl bg-vhh-green-900/60 border border-vhh-green-700/50 backdrop-blur-md flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-950 text-emerald-300 border border-emerald-800">
                      {item.stage}
                    </span>
                    <IconComp className="w-6 h-6 text-emerald-400" />
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-white mb-3 group-hover:text-emerald-200 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-stone-300 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-vhh-green-800 flex items-center justify-between text-xs text-emerald-300">
                  <span>Future Horizon</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
