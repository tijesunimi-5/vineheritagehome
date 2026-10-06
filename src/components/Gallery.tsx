'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { VHH_DATA, GalleryItem } from '@/data/vhhData';
import { Image as ImageIcon, Maximize2, Sparkles, Filter } from 'lucide-react';

interface GalleryProps {
  onSelectImage: (item: GalleryItem) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onSelectImage }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'home' | 'children' | 'education' | 'events' | 'construction' | 'everyday'>('all');

  const filterTabs = [
    { id: 'all', label: 'All Photos' },
    { id: 'home', label: 'The Home' },
    { id: 'children', label: 'Children & Community' },
    { id: 'education', label: 'Education' },
    { id: 'construction', label: 'Construction & Progress' },
    { id: 'everyday', label: 'Everyday Life' },
  ];

  const filtered = activeTab === 'all'
    ? VHH_DATA.galleryItems
    : VHH_DATA.galleryItems.filter(item => item.category === activeTab);

  return (
    <section className="py-24 bg-vhh-cream text-vhh-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-vhh-green-100 text-vhh-green-900 text-xs font-semibold uppercase tracking-wider mb-4 border border-vhh-green-200">
            <ImageIcon className="w-3.5 h-3.5 text-vhh-green-700" />
            <span>Editorial Visual Archive</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-vhh-charcoal leading-tight">
            Visual Gallery: <span className="italic font-normal text-vhh-green-800">Moments & Growth.</span>
          </h2>

          <p className="mt-4 text-base text-vhh-muted font-light leading-relaxed">
            Click any image to view details, location context, and child safeguarding notes in full-screen view.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          <Filter className="w-4 h-4 text-vhh-muted mr-2" />
          {filterTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  isActive
                    ? 'bg-vhh-green-800 text-white shadow-md'
                    : 'bg-white text-vhh-charcoal border border-stone-200 hover:bg-stone-100'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Editorial Masonry / Dynamic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, idx) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              onClick={() => onSelectImage(item)}
              className="group relative rounded-3xl overflow-hidden bg-vhh-green-950 h-80 cursor-pointer shadow-card hover:shadow-elevated transition-all border border-vhh-green-900/20"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-vhh-dark via-vhh-dark/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Badges */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/90 text-vhh-charcoal backdrop-blur-md shadow-sm">
                  {item.categoryLabel}
                </span>

                {item.isDevelopment && (
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-vhh-red-600 text-white shadow-sm flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Expansion
                  </span>
                )}
              </div>

              {/* Hover Zoom Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-0 inset-x-0 p-6">
                <h3 className="font-serif text-xl font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-300 line-clamp-2 font-light">
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
