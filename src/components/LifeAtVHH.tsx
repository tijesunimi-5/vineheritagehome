'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Smile, BookOpen, Utensils, Trophy, Palette, Users, HeartHandshake } from 'lucide-react';

export const LifeAtVHH: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Everyday Moments' },
    { id: 'learning', label: 'Schooling & Reading', icon: BookOpen },
    { id: 'recreation', label: 'Play & Athletics', icon: Trophy },
    { id: 'creativity', label: 'Arts & Skills', icon: Palette },
    { id: 'community', label: 'Meals & Celebrations', icon: Utensils },
  ];

  const moments = [
    {
      id: 1,
      title: "Morning Study & Homework Hours",
      category: "learning",
      imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
      desc: "Quiet hours designated for academic focus, reading, and peer mentorship."
    },
    {
      id: 2,
      title: "Outdoor Football & Team Athletics",
      category: "recreation",
      imageUrl: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800&auto=format&fit=crop",
      desc: "Energetic sports games building teamwork, discipline, and physical fitness."
    },
    {
      id: 3,
      title: "Creative Painting & Crafts Workshop",
      category: "creativity",
      imageUrl: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?q=80&w=800&auto=format&fit=crop",
      desc: "Expressing individuality through visual arts, music, and craft training."
    },
    {
      id: 4,
      title: "Communal Dinners & Family Gratitude",
      category: "community",
      imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop",
      desc: "Gathering around the table for healthy meals, laughter, and daily reflections."
    },
    {
      id: 5,
      title: "Reading Club & Library Time",
      category: "learning",
      imageUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
      desc: "Exploring world literature, science books, and inspirational stories."
    },
    {
      id: 6,
      title: "Cultural Celebrations & Birthdays",
      category: "community",
      imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop",
      desc: "Celebrating every child's milestone, birthday, and special achievements together."
    }
  ];

  const filtered = activeCategory === 'all'
    ? moments
    : moments.filter(m => m.category === activeCategory);

  return (
    <section className="py-24 bg-white text-vhh-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-vhh-green-50 text-vhh-green-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-vhh-green-200">
            <Sun className="w-3.5 h-3.5 text-vhh-green-700" />
            <span>Daily Vibrancy & Community</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-vhh-charcoal leading-tight">
            Life at <span className="italic font-normal text-vhh-green-800">Vine Heritage Home</span>
          </h2>

          <p className="mt-4 text-base text-vhh-muted font-light leading-relaxed">
            Every day is structured around balance: education, nourishing meals, creative play, physical health, character growth, and deep familial fellowship.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  isActive
                    ? 'bg-vhh-green-800 text-white shadow-md'
                    : 'bg-vhh-warm text-vhh-charcoal hover:bg-stone-200'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Moments Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl bg-vhh-cream border border-vhh-green-900/10 overflow-hidden shadow-sm hover:shadow-md transition-all group"
            >
              <div className="h-52 overflow-hidden relative">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-vhh-charcoal/70 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-4 text-xs font-semibold text-white tracking-wide">
                  {item.title}
                </span>
              </div>

              <div className="p-6">
                <p className="text-xs text-vhh-muted font-light leading-relaxed">
                  {item.desc}
                </p>

                <div className="mt-4 pt-3 border-t border-vhh-sand flex items-center justify-between text-[11px] font-semibold text-vhh-green-800 uppercase tracking-wider">
                  <span>Dignified Routine</span>
                  <Smile className="w-3.5 h-3.5 text-vhh-green-600" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
