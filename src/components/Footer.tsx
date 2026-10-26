'use client';

import React from 'react';
import { Logo } from './Logo';
import { VHH_DATA } from '@/data/vhhData';
import { ShieldCheck, Mail, Phone, MapPin, Heart, Lock } from 'lucide-react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#0b1712] text-stone-300 pt-20 pb-12 border-t border-vhh-green-900/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <Logo variant="light" />
            
            <p className="text-sm font-light text-stone-300 leading-relaxed max-w-md">
              Saving God’s heritage for a greater Nigeria. Providing 24/7 dignified shelter, loving care, external schooling sponsorship, and healthcare for 239 children in Abuja.
            </p>

            <div className="p-4 rounded-2xl bg-vhh-green-950/80 border border-vhh-green-800/80 text-xs text-stone-300 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white">CAC Registered Non-Governmental Organization</span>
                <p className="text-[11px] text-stone-400 mt-0.5 leading-relaxed">
                  Operating with institutional transparency, child protection safeguards, and partnership with the European Union and ActionAid Nigeria.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-base font-bold text-white mb-5 uppercase tracking-wider text-xs font-mono text-emerald-400">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              {VHH_DATA.navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-stone-300 hover:text-emerald-300 transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-emerald-500/60" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Verified Official Locations & Contact */}
          <div className="lg:col-span-4">
            <h4 className="font-serif text-base font-bold text-white mb-5 uppercase tracking-wider text-xs font-mono text-emerald-400">
              Verified Contact Points
            </h4>
            <div className="space-y-4 text-xs font-sans text-stone-300">
              
              {/* Home Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Home & Sanctuary:</span>
                  <span className="text-stone-300 font-light">Kuje, Federal Capital Territory, Abuja, Nigeria</span>
                </div>
              </div>

              {/* Office Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Liaison Office:</span>
                  <span className="text-stone-300 font-light">{VHH_DATA.brand.officeAddress.address}</span>
                </div>
              </div>

              {/* Verified Phones */}
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Official Phone Lines:</span>
                  <span className="font-mono text-emerald-300 font-light">
                    09019303646 &bull; 080344229935 &bull; 08024343246
                  </span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Email Inquiries:</span>
                  <span className="font-mono text-stone-300 font-light">{VHH_DATA.brand.email}</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light text-stone-400">
          <p>
            &copy; {new Date().getFullYear()} Vine Heritage Home Foundation. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link href="/our-story" className="hover:text-stone-200 transition-colors flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Child Safeguarding Policy</span>
            </Link>
            <span>&bull;</span>
            <div className="flex items-center gap-1 text-emerald-400">
              <Heart className="w-3.5 h-3.5 fill-emerald-400" />
              <span>Saving God’s Heritage</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
