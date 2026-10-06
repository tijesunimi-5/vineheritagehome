'use client';

import React from 'react';
import { Logo } from './Logo';
import { VHH_DATA } from '@/data/vhhData';
import { PlaceholderBadge } from './PlaceholderBadge';
import { ShieldCheck, Mail, Phone, MapPin, Globe, Lock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-vhh-dark text-stone-300 pt-20 pb-12 border-t border-vhh-green-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-vhh-green-900/60">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Logo variant="light" />
            
            <p className="text-sm font-light text-stone-300 leading-relaxed max-w-md">
              A home built around care, protection, growth, and hope. Vine Heritage Home provides a safe, nurturing sanctuary for vulnerable children in Nigeria.
            </p>

            <div className="p-4 rounded-2xl bg-vhh-green-950 border border-vhh-green-800 text-xs text-stone-300 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white">Registered Nigerian Humanitarian Organization</span>
                <p className="text-[11px] text-stone-400 mt-0.5">
                  Operating with institutional transparency, child protection safeguards, and verified governance standards.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-lg font-bold text-white mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              {VHH_DATA.navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-stone-300 hover:text-emerald-300 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Contact Placeholders */}
          <div className="lg:col-span-4">
            <h4 className="font-serif text-lg font-bold text-white mb-6">
              Verified Contact Points
            </h4>
            <div className="space-y-4 text-xs font-mono">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <PlaceholderBadge text={VHH_DATA.brand.addressPlaceholder} />
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <PlaceholderBadge text={VHH_DATA.brand.phonePlaceholder} />
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <PlaceholderBadge text={VHH_DATA.brand.emailPlaceholder} />
              </div>

              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
                <PlaceholderBadge text="[SOCIAL LINKS — TWITTER / FB / INSTAGRAM]" />
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light text-stone-400">
          <p>
            &copy; {new Date().getFullYear()} Vine Heritage Home (VHH). All rights reserved. Built for institutional presentation.
          </p>

          <div className="flex items-center gap-6">
            <a href="#hero" className="hover:text-stone-200 transition-colors flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Child Safeguarding Policy</span>
            </a>
            <span>&bull;</span>
            <span className="text-amber-400 font-mono text-[11px]">Interactive Prototype Mode</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
