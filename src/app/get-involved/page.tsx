'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { NoGiftTooSmallBanner } from '@/components/NoGiftTooSmallBanner';
import { LogisticsDeliveryGuide } from '@/components/LogisticsDeliveryGuide';
import { NeedsDirectory } from '@/components/NeedsDirectory';
import { MedicalOutreachSection } from '@/components/MedicalOutreachSection';
import { BrandPartnershipSection } from '@/components/BrandPartnershipSection';
import { FinancialTransparencySection } from '@/components/FinancialTransparencySection';
import { SupportModal } from '@/components/SupportModal';
import { VolunteerModal } from '@/components/VolunteerModal';
import { 
  ArrowLeft, 
  Truck, 
  Package, 
  HeartPulse,
  Handshake, 
  Landmark
} from 'lucide-react';
import Link from 'next/link';

export default function GetInvolvedPage() {
  const [supportModalOpen, setSupportModalOpen] = useState(false);
  const [volunteerModalOpen, setVolunteerModalOpen] = useState(false);
  const [modalDefaultPurpose, setModalDefaultPurpose] = useState<string>("Food & Nutrition (239 Children)");

  const handleDonateCategory = (categoryTag: string) => {
    setModalDefaultPurpose(categoryTag);
    setSupportModalOpen(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-[#fdfbf7] text-vhh-charcoal overflow-x-hidden selection:bg-vhh-green-700 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        onOpenSupport={() => setSupportModalOpen(true)}
        onOpenVolunteer={() => setVolunteerModalOpen(true)}
      />

      {/* ========================================================================= */}
      {/* EDITORIAL HERO SECTION                                                    */}
      {/* ========================================================================= */}
      <section className="pt-32 sm:pt-36 pb-20 sm:pb-24 bg-gradient-to-b from-vhh-dark via-vhh-dark/95 to-[#0f241c] text-white px-5 sm:px-10 lg:px-16 border-b border-white/10 relative overflow-hidden">
        
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#1a5342_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-300 hover:text-white uppercase tracking-wider mb-6 transition-colors px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Homepage</span>
          </Link>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
            Every Gift Has a Real Name and Place. <br />
            <span className="italic font-normal text-emerald-300">
              Our Live Itemized Needs &amp; Consumption Directory.
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-stone-300 font-light max-w-3xl mx-auto leading-relaxed">
            Market prices fluctuate constantly across Nigeria, which is why we don&rsquo;t post rigid price tags. Instead, here is our transparent catalog of actual physical consumption—so whether you purchase and dispatch goods directly via courier, connect doctors and engineers, or transfer funds toward a specific need, you know exactly where your support goes.
          </p>

          {/* Location & Receiving Assurance */}
          <div className="mt-8 inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-xs text-stone-200">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Physical Delivery Destination: <strong>Kuje, Abuja</strong></span>
            <span className="text-white/40">&bull;</span>
            <span className="font-mono text-emerald-300">239 Children in Daily Care</span>
          </div>

          {/* Quick Jump Shortcuts */}
          <div className="mt-8 flex items-center justify-center gap-2 sm:gap-3 flex-wrap text-xs">
            <button
              onClick={() => scrollToSection('logistics-guide')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium transition-colors border border-white/10"
            >
              <Truck className="w-3.5 h-3.5 text-emerald-300" />
              <span>Courier Delivery</span>
            </button>

            <button
              onClick={() => scrollToSection('needs-directory')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium transition-colors border border-white/10"
            >
              <Package className="w-3.5 h-3.5 text-emerald-300" />
              <span>Browse Needs &amp; Food</span>
            </button>

            <button
              onClick={() => scrollToSection('medical-outreach')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-red-500/20 hover:bg-red-500/30 text-red-200 font-semibold transition-colors border border-red-400/30"
            >
              <HeartPulse className="w-3.5 h-3.5 text-red-300" />
              <span>Doctor &amp; Hospital Alliances</span>
            </button>

            <button
              onClick={() => scrollToSection('brand-partnerships')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium transition-colors border border-white/10"
            >
              <Handshake className="w-3.5 h-3.5 text-emerald-300" />
              <span>Diaper Partnerships</span>
            </button>

            <button
              onClick={() => scrollToSection('transparency')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-200 font-semibold transition-colors border border-emerald-400/30"
            >
              <Landmark className="w-3.5 h-3.5 text-emerald-300" />
              <span>Direct Bank Giving</span>
            </button>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 00. NO GIFT IS TOO SMALL (DIGNIFIED REASSURANCE BANNER)                   */}
      {/* ========================================================================= */}
      <NoGiftTooSmallBanner 
        onOpenSupport={(purpose) => handleDonateCategory(purpose || "General Operational Support")}
      />

      {/* ========================================================================= */}
      {/* 01. HOW TO SEND PHYSICAL GOODS (LOGISTICS DELIVERY SYSTEM)                */}
      {/* ========================================================================= */}
      <LogisticsDeliveryGuide />

      {/* ========================================================================= */}
      {/* 02. ITEMIZED NEEDS DIRECTORY BY CATEGORY (WITH CONSUMPTION REALITIES)     */}
      {/* ========================================================================= */}
      <NeedsDirectory 
        onDonateCategory={handleDonateCategory}
        onOpenLogistics={() => scrollToSection('logistics-guide')}
      />

      {/* ========================================================================= */}
      {/* 03. HEALTHCARE, DOCTOR OUTREACHES & EMERGENCY HOSPITAL RETAINERS         */}
      {/* ========================================================================= */}
      <MedicalOutreachSection 
        onOpenDonate={handleDonateCategory}
      />

      {/* ========================================================================= */}
      {/* 04. BRAND & CORPORATE PRODUCT ALLIANCES (DIAPER ALLIANCE)                 */}
      {/* ========================================================================= */}
      <BrandPartnershipSection />

      {/* ========================================================================= */}
      {/* 05. RADICAL FINANCIAL TRANSPARENCY & DIRECT BANK ACCOUNTS                */}
      {/* ========================================================================= */}
      <FinancialTransparencySection 
        onOpenModal={() => setSupportModalOpen(true)}
      />

      {/* Footer */}
      <Footer />

      {/* Support / Direct Bank Transfer Modal */}
      <SupportModal
        isOpen={supportModalOpen}
        onClose={() => setSupportModalOpen(false)}
        defaultPurpose={modalDefaultPurpose}
      />

      {/* Volunteer & Visit Modal */}
      <VolunteerModal
        isOpen={volunteerModalOpen}
        onClose={() => setVolunteerModalOpen(false)}
      />
    </main>
  );
}
