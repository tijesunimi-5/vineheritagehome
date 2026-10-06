'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, MapPin, Eye, Box, Compass, Sparkles, Building2, CheckCircle2 } from 'lucide-react';
import { PlaceholderBadge } from './PlaceholderBadge';

export const CampusMasterplanPreview: React.FC = () => {
  const [selectedZone, setSelectedZone] = useState(0);

  const zones = [
    {
      id: "residential",
      name: "Residential Halls & Dormitories",
      status: "Operational / Upgrading",
      description: "Separate dignified dormitories for boys and girls, caregiver quarters, and personal study alcoves.",
      features: ["Comfortable Beds", "Personal Lockers", "House Mother Quarters", "Modern Sanitation"]
    },
    {
      id: "education",
      name: "Learning & Computer Center",
      status: "Active Construction",
      description: "Dedicated learning hub housing a modern library, digital literacy lab, and homework study halls.",
      features: ["Library Hub", "Computer Workstations", "Tutoring Classrooms", "High-speed Internet Ready"]
    },
    {
      id: "dining",
      name: "Dining Hall & Commercial Kitchen",
      status: "Operational",
      description: "Community dining facility designed for communal meals, celebrations, and hygienic food prep.",
      features: ["Commercial Range", "Family Seating", "Pantry Storage", "Clean Water Filtration"]
    },
    {
      id: "recreation",
      name: "Sports Grounds & Eco Gardens",
      status: "Phase 2 Development",
      description: "Outdoor sports lawns, playground equipment, and sustainable vegetable gardens cultivated with youth participation.",
      features: ["Football & Basketball Turf", "Shaded Playgrounds", "Organic Vegetable Plot", "Fruit Orchards"]
    }
  ];

  return (
    <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-vhh-green-950 border border-vhh-green-700/60 text-white relative overflow-hidden shadow-2xl">
      {/* Background Architectural Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#133d30_1px,transparent_1px),linear-gradient(to_bottom,#133d30_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />

      <div className="relative z-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-vhh-green-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/80 border border-emerald-600/50 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <Box className="w-3.5 h-3.5 text-emerald-400" />
              <span>Campus Blueprint & Masterplan</span>
              <span className="text-stone-400">&bull;</span>
              <span className="text-amber-300 font-mono text-[11px]">Future 3D Interactive Ready</span>
            </div>
            <h3 className="font-serif text-3xl font-bold text-stone-100">
              Explore Our Physical Campus Layout
            </h3>
            <p className="text-sm text-stone-300 mt-1 font-light">
              Click through the campus sectors to view current facilities and ongoing development projects.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <PlaceholderBadge text="[3D VIRTUAL TOUR ARCHITECTURE READY]" className="bg-emerald-950 text-emerald-200 border-emerald-700 py-1.5 px-3" />
          </div>
        </div>

        {/* Interactive Masterplan Layout Grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Zone Selection Tabs */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <p className="text-xs uppercase tracking-widest text-emerald-400 font-bold mb-1">
              Select Campus Sector:
            </p>
            {zones.map((zone, idx) => {
              const isSelected = selectedZone === idx;
              return (
                <button
                  key={zone.id}
                  onClick={() => setSelectedZone(idx)}
                  className={`p-4 rounded-xl text-left transition-all duration-300 flex items-center justify-between border ${
                    isSelected
                      ? 'bg-vhh-green-800 border-emerald-400 text-white shadow-lg translate-x-1'
                      : 'bg-vhh-green-900/50 border-vhh-green-800 text-stone-300 hover:bg-vhh-green-800/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Building2 className={`w-5 h-5 ${isSelected ? 'text-emerald-300' : 'text-stone-400'}`} />
                    <div>
                      <h4 className="font-bold text-sm">{zone.name}</h4>
                      <p className="text-[11px] text-emerald-300">{zone.status}</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-semibold text-stone-400">0{idx + 1}</span>
                </button>
              );
            })}
          </div>

          {/* Right: Selected Zone Details & Visual Blueprint */}
          <div className="lg:col-span-7">
            <motion.div
              key={selectedZone}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="p-8 rounded-2xl bg-vhh-green-900/90 border border-vhh-green-600/50 shadow-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-950 text-emerald-300 border border-emerald-700">
                  SECTOR 0{selectedZone + 1} &bull; {zones[selectedZone].status}
                </span>
                <div className="flex items-center gap-1.5 text-xs text-amber-300 font-medium">
                  <Sparkles className="w-4 h-4" />
                  <span>Interactive Blueprint Preview</span>
                </div>
              </div>

              <h4 className="font-serif text-2xl font-bold text-stone-100 mb-3">
                {zones[selectedZone].name}
              </h4>

              <p className="text-sm text-stone-300 font-light leading-relaxed mb-6">
                {zones[selectedZone].description}
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {zones[selectedZone].features.map((feat, fIdx) => (
                  <div key={fIdx} className="p-3 rounded-lg bg-vhh-green-950/60 border border-vhh-green-800 text-xs font-medium text-stone-200 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-vhh-dark/80 border border-vhh-green-700/40 flex items-center justify-between text-xs text-stone-300">
                <span className="font-mono">3D Mesh Model: [CAD/BIM DATA AWAITING BOARD UPLOAD]</span>
                <span className="px-2 py-0.5 rounded bg-emerald-900 text-emerald-200 font-bold text-[10px]">
                  Future Expansion Ready
                </span>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </div>
  );
};
