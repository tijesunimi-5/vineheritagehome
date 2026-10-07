'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const ChapterIdea: React.FC = () => {
  const statements = [
    { text: "Every child deserves more than protection.", highlight: false },
    { text: "They deserve a place to belong.", highlight: true, color: "text-emerald-400" },
    { text: "A place to learn.", highlight: true, color: "text-emerald-300" },
    { text: "A place to grow.", highlight: true, color: "text-emerald-200" },
    { text: "A place to become.", highlight: true, color: "text-vhh-red-500 font-serif" },
  ];

  return (
    <section id="chapter-idea" className="py-32 bg-vhh-dark text-white relative overflow-hidden">
      {/* Soft Background Vignette */}
      <div className="absolute inset-0 bg-hero-gradient opacity-90" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Chapter Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vhh-green-900 border border-vhh-green-700 text-emerald-300 text-xs font-mono font-semibold uppercase tracking-widest mb-16"
        >
          <span>CHAPTER 02 &bull; THE IDEA</span>
        </motion.div>

        {/* Sequential Cinematic Statements */}
        <div className="space-y-12 sm:space-y-16 max-w-4xl mx-auto">
          {statements.map((stmt, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
            >
              <h2 className={`font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight ${stmt.color || 'text-stone-100'}`}>
                {stmt.text}
              </h2>
            </motion.div>
          ))}
        </div>

        {/* Section Divider Accent Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-24 w-32 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent mx-auto"
        />

      </div>
    </section>
  );
};
