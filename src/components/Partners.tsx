'use client';

import React from 'react';
import { PlaceholderBadge } from './PlaceholderBadge';
import { Building, ShieldCheck, HeartHandshake, School, Stethoscope, Landmark } from 'lucide-react';

export const Partners: React.FC = () => {
  const categories = [
    { name: "Corporate Partners", icon: Building, placeholder: "[CORPORATE PARTNERS LOGO WALL]" },
    { name: "Humanitarian & NGOs", icon: ShieldCheck, placeholder: "[NGO PARTNERSHIPS]" },
    { name: "Faith & Church Organizations", icon: Landmark, placeholder: "[FAITH COMMUNITY LOGOS]" },
    { name: "Schools & Universities", icon: School, placeholder: "[EDUCATIONAL PARTNERS]" },
    { name: "Healthcare Providers", icon: Stethoscope, placeholder: "[MEDICAL SUPPORTERS]" },
    { name: "Individual Patrons", icon: HeartHandshake, placeholder: "[PATRON NETWORK]" },
  ];

  return (
    <section className="py-20 bg-white text-vhh-charcoal border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-vhh-green-800 mb-2">
            Institutional Network
          </p>
          <h2 className="font-serif text-3xl font-bold text-vhh-charcoal">
            Those Helping Us Build the Future
          </h2>
        </div>

        {/* Clean Logo Wall */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat, idx) => {
            const IconComponent = cat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-vhh-warm border border-stone-200/80 flex flex-col items-center justify-center text-center hover:border-vhh-green-600 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-stone-200 flex items-center justify-center mb-3 text-vhh-green-800 group-hover:bg-vhh-green-50 transition-colors">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold text-vhh-charcoal mb-2">{cat.name}</h4>
                <PlaceholderBadge text={cat.placeholder} className="text-[10px] py-0.5 px-2" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
