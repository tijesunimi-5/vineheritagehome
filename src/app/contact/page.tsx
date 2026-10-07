'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SupportModal } from '@/components/SupportModal';
import { VolunteerModal } from '@/components/VolunteerModal';
import { PlaceholderBadge } from '@/components/PlaceholderBadge';
import { VHH_DATA } from '@/data/vhhData';
import { ArrowLeft, MapPin, Phone, Mail, Navigation, Calendar, Send, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const [supportModalOpen, setSupportModalOpen] = useState(false);
  const [volunteerModalOpen, setVolunteerModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-vhh-cream text-vhh-charcoal">
      <Navbar
        onOpenSupport={() => setSupportModalOpen(true)}
        onOpenVolunteer={() => setVolunteerModalOpen(true)}
      />

      {/* Header Banner */}
      <div className="pt-28 pb-16 bg-vhh-dark text-white text-center px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-300 hover:text-white uppercase tracking-wider mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage Journey</span>
          </Link>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-stone-100">
            Come Experience the Home
          </h1>

          <p className="mt-4 text-lg text-stone-300 font-light max-w-2xl mx-auto leading-relaxed">
            Vine Heritage Home is more than something that can be understood through a screen. Come meet the people, walk through the home, and experience the community for yourself.
          </p>
        </div>
      </div>

      <div id="directions" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form & Directions */}
          <div className="lg:col-span-7 space-y-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-vhh-green-900/10 shadow-card">
              <h2 className="font-serif text-3xl font-bold text-vhh-charcoal mb-2">
                Plan Your Campus Visit
              </h2>
              <p className="text-xs text-vhh-muted mb-8 font-light">
                Schedule an official visit for individual supporters, educational groups, or corporate partners.
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-vhh-muted mb-1">
                        Full Name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Dr. Emmanuel Okafor"
                        className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:ring-2 focus:ring-vhh-green-700 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-vhh-muted mb-1">
                        Email Address
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="e.g. emmanuel@organization.org"
                        className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:ring-2 focus:ring-vhh-green-700 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-vhh-muted mb-1">
                        Preferred Visit Date
                      </label>
                      <input
                        required
                        type="date"
                        className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:ring-2 focus:ring-vhh-green-700 focus:outline-none bg-white font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-vhh-muted mb-1">
                        Number of Visitors
                      </label>
                      <select className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:ring-2 focus:ring-vhh-green-700 focus:outline-none bg-white font-medium">
                        <option>1–2 Visitors (Individual / Couple)</option>
                        <option>3–5 Visitors (Small Group)</option>
                        <option>6+ Visitors (Corporate / NGO Delegation)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-vhh-muted mb-1">
                      Purpose of Visit / Special Requests
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Share your interest in visiting Vine Heritage Home..."
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:ring-2 focus:ring-vhh-green-700 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-vhh-green-800 text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-vhh-green-700 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-emerald-300" />
                    <span>Request Visit Schedule</span>
                  </button>
                </form>
              ) : (
                <div className="text-center py-8 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-vhh-green-100 text-vhh-green-800 flex items-center justify-center mx-auto">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold">Visit Request Logged</h3>
                  <p className="text-xs text-vhh-muted max-w-md mx-auto">
                    Thank you. Upon deployment, your request will be reviewed by the VHH Executive Desk and a confirmation email sent with safety guidelines.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-vhh-green-800 text-white font-bold text-xs uppercase tracking-wider"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Address, Phone, Email & Google Maps Frame */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-vhh-green-950 text-white shadow-xl space-y-6">
              <h3 className="font-serif text-2xl font-bold">Direct Contact Points</h3>
              
              <div className="space-y-4 text-xs font-mono">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block mb-1">Campus Physical Location</span>
                    <PlaceholderBadge text={VHH_DATA.brand.addressPlaceholder} />
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block mb-1">Official Executive Phone</span>
                    <PlaceholderBadge text={VHH_DATA.brand.phonePlaceholder} />
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block mb-1">Official Desk Email</span>
                    <PlaceholderBadge text={VHH_DATA.brand.emailPlaceholder} />
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Integration Frame */}
            <div className="p-8 rounded-3xl bg-white border border-vhh-green-900/10 shadow-card text-center space-y-4">
              <div className="flex items-center justify-center gap-2 text-vhh-green-800 font-bold text-sm">
                <Navigation className="w-5 h-5 text-emerald-600" />
                <span>Google Maps Location & Directions</span>
              </div>
              <p className="text-xs text-vhh-muted font-light">
                Interactive map frame highlighting the physical campus road access in Nigeria.
              </p>

              <div className="h-64 rounded-2xl bg-vhh-dark border border-vhh-green-800 overflow-hidden relative flex items-center justify-center p-4">
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#133d30_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="relative z-10 text-center">
                  <MapPin className="w-10 h-10 text-emerald-400 mx-auto mb-2 animate-bounce" />
                  <p className="text-xs font-mono font-bold text-white">Google Maps Interactive Embed</p>
                  <PlaceholderBadge text="[VHH GOOGLE MAPS LATITUDE / LONGITUDE DATA READY]" className="mt-2" />
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      <Footer />

      <SupportModal
        isOpen={supportModalOpen}
        onClose={() => setSupportModalOpen(false)}
      />

      <VolunteerModal
        isOpen={volunteerModalOpen}
        onClose={() => setVolunteerModalOpen(false)}
      />
    </main>
  );
}
