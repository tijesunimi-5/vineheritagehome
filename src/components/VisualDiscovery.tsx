'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Maximize2, ShieldCheck, GraduationCap, Utensils, Trophy, Palette } from 'lucide-react';
import { GalleryItem } from '@/data/vhhData';

interface VisualDiscoveryProps {
  onSelectImage: (item: GalleryItem) => void;
}

export const VisualDiscovery: React.FC<VisualDiscoveryProps> = ({ onSelectImage }) => {
  const photoStories: GalleryItem[] = [
    {
      id: "vd-1",
      title: "Academic Growth & Schooling",
      category: "education",
      categoryLabel: "Education",
      imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
      caption: "Unlocking intellectual potential through formal school tuition, tutoring, and afternoon reading mentorship."
    },
    {
      id: "vd-2",
      title: "The Main Campus Sanctuary",
      category: "home",
      categoryLabel: "The Physical Home",
      imageUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=1200&auto=format&fit=crop",
      caption: "A secure, tranquil green campus providing a safe environment away from vulnerable social realities."
    },
    {
      id: "vd-3",
      title: "Communal Dinners & Family Fellowship",
      category: "everyday",
      categoryLabel: "Nourishment & Family",
      imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop",
      caption: "Gathering around the dining tables daily for freshly prepared nutritious meals and communal gratitude."
    },
    {
      id: "vd-4",
      title: "Creative Arts & Expression",
      category: "children",
      categoryLabel: "Joy & Creativity",
      imageUrl: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?q=80&w=1200&auto=format&fit=crop",
      caption: "Fostering individuality, drawing, painting, music, and craft training."
    },
    {
      id: "vd-5",
      title: "Outdoor Sports & Athletic Teamwork",
      category: "everyday",
      categoryLabel: "Recreation & Health",
      imageUrl: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200&auto=format&fit=crop",
      caption: "Energetic playground fun and athletic games building discipline, camaraderie, and health."
    }
  ];

  return (
    <section className="py-24 bg-white text-vhh-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-vhh-green-50 border border-vhh-green-200 text-vhh-green-900 text-xs font-mono font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-vhh-green-700" />
            <span>DISCOVER THE HUMANITY OF VINE HERITAGE HOME</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-vhh-charcoal leading-tight">
            A Place to Belong. <br />
            <span className="italic font-normal text-vhh-green-800">A Place to Grow.</span>
          </h2>

          <p className="mt-4 text-base text-vhh-muted font-light leading-relaxed max-w-2xl mx-auto">
            Explore everyday life at Vine Heritage Home through photography. Click any image to view details and child dignity safeguards.
          </p>
        </div>

        {/* Editorial Photo Mosaic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Main Hero Photo (Spans 7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onClick={() => onSelectImage(photoStories[0])}
            className="md:col-span-7 relative rounded-3xl overflow-hidden bg-vhh-dark h-96 sm:h-[460px] cursor-pointer group shadow-lg hover:shadow-2xl transition-all"
          >
            <img
              src={photoStories[0].imageUrl}
              alt={photoStories[0].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-vhh-dark via-vhh-dark/30 to-transparent opacity-90" />
            
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-white/90 text-vhh-charcoal backdrop-blur-md shadow-sm flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-vhh-green-700" />
                {photoStories[0].categoryLabel}
              </span>
            </div>

            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <Maximize2 className="w-4 h-4" />
            </div>

            <div className="absolute bottom-0 inset-x-0 p-8">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                {photoStories[0].title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-200 font-light leading-relaxed max-w-xl">
                {photoStories[0].caption}
              </p>
            </div>
          </motion.div>

          {/* Secondary Photo (Spans 5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onClick={() => onSelectImage(photoStories[1])}
            className="md:col-span-5 relative rounded-3xl overflow-hidden bg-vhh-dark h-96 sm:h-[460px] cursor-pointer group shadow-lg hover:shadow-2xl transition-all"
          >
            <img
              src={photoStories[1].imageUrl}
              alt={photoStories[1].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-vhh-dark via-vhh-dark/30 to-transparent opacity-90" />

            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-white/90 text-vhh-charcoal backdrop-blur-md shadow-sm flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-vhh-green-700" />
                {photoStories[1].categoryLabel}
              </span>
            </div>

            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <Maximize2 className="w-4 h-4" />
            </div>

            <div className="absolute bottom-0 inset-x-0 p-8">
              <h3 className="font-serif text-2xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                {photoStories[1].title}
              </h3>
              <p className="text-xs text-stone-200 font-light leading-relaxed">
                {photoStories[1].caption}
              </p>
            </div>
          </motion.div>

          {/* 3 Bottom Grid Photos */}
          {photoStories.slice(2).map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
              onClick={() => onSelectImage(item)}
              className="md:col-span-4 relative rounded-3xl overflow-hidden bg-vhh-dark h-80 cursor-pointer group shadow-md hover:shadow-xl transition-all"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-vhh-dark via-vhh-dark/20 to-transparent opacity-90" />

              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/90 text-vhh-charcoal backdrop-blur-md shadow-sm">
                  {item.categoryLabel}
                </span>
              </div>

              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>

              <div className="absolute bottom-0 inset-x-0 p-6">
                <h3 className="font-serif text-xl font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-300 font-light line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};
