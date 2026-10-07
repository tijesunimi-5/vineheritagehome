'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { VHH_DATA } from '@/data/vhhData';
import { Sparkles, MapPin } from 'lucide-react';

export const ChapterExploreHome: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scenes = VHH_DATA.chapterHomeScenes;

  // Compute active scene index from scroll progress (0 to scenes.length - 1)
  const activeIndex = useTransform(scrollYProgress, [0, 1], [0, scenes.length - 1]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-vhh-dark text-white">
      {/* Pinned Sticky Viewport */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden">
        
        {/* Top Floating Bar */}
        <div className="relative z-20 pt-8 px-6 sm:px-12 flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vhh-green-950/80 border border-vhh-green-700 text-emerald-300 text-xs font-mono font-semibold uppercase tracking-widest backdrop-blur-md">
            <span>CHAPTER 03 &bull; EXPLORE THE HOME</span>
          </div>

          <div className="text-xs font-mono text-stone-300 flex items-center gap-2 bg-vhh-dark/60 px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span>Interactive Campus Journey</span>
          </div>
        </div>

        {/* Scene Background Photos with Crossfade */}
        <div className="absolute inset-0 z-0">
          {scenes.map((scene, idx) => {
            // Opacity calculation based on scroll progress
            const start = idx / scenes.length;
            const end = (idx + 1) / scenes.length;
            // Opacity transforms cleanly for each scene index
            const opacity = useTransform(
              scrollYProgress,
              [start - 0.1, start, end - 0.1, end],
              [0, 1, 1, 0]
            );

            return (
              <motion.div
                key={scene.id}
                style={{ opacity: idx === 0 ? useTransform(scrollYProgress, [0, 1 / scenes.length], [1, 0]) : opacity }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={scene.imageUrl}
                  alt={scene.title}
                  className="w-full h-full object-cover scale-105 transition-transform duration-1000"
                />
                {/* Multi-layer Dark Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-vhh-dark via-vhh-dark/60 to-vhh-dark/40" />
              </motion.div>
            );
          })}
        </div>

        {/* Foreground Content Card & Typography */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 mb-16 text-center w-full">
          {scenes.map((scene, idx) => {
            const start = idx / scenes.length;
            const end = (idx + 1) / scenes.length;
            const opacity = useTransform(
              scrollYProgress,
              [start - 0.08, start, end - 0.08, end],
              [0, 1, 1, 0]
            );

            return (
              <motion.div
                key={scene.id}
                style={{ opacity: idx === 0 ? useTransform(scrollYProgress, [0, 1 / scenes.length], [1, 0]) : opacity }}
                className="absolute inset-x-0 bottom-0 px-4 flex flex-col items-center pointer-events-none"
              >
                <div className="p-8 rounded-3xl bg-vhh-dark/80 backdrop-blur-xl border border-vhh-green-700/50 shadow-2xl max-w-2xl w-full text-center">
                  
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-950 text-emerald-300 border border-emerald-800">
                      {scene.tag}
                    </span>

                    {scene.isConstruction && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-vhh-red-600 text-white flex items-center gap-1 shadow-sm">
                        <Sparkles className="w-3 h-3" />
                        Active Expansion
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-3xl sm:text-5xl font-bold text-stone-100 mb-2">
                    {scene.title}
                  </h3>

                  <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-4">
                    {scene.subtitle}
                  </p>

                  <p className="text-sm text-stone-300 font-light leading-relaxed">
                    {scene.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Interactive Progress Indicators */}
        <div className="relative z-20 pb-8 px-6 flex items-center justify-center gap-3">
          {scenes.map((s, idx) => {
            const start = idx / scenes.length;
            const end = (idx + 1) / scenes.length;
            const isActive = useTransform(
              scrollYProgress,
              (v) => v >= start && v < end
            );

            return (
              <div
                key={s.id}
                className="h-1.5 rounded-full bg-white/20 overflow-hidden w-12 sm:w-16"
              >
                <motion.div
                  style={{
                    scaleX: useTransform(
                      scrollYProgress,
                      [start, end],
                      [0, 1]
                    )
                  }}
                  className="h-full bg-emerald-400 origin-left"
                />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
