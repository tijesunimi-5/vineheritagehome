'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { AboutOverview } from '@/components/AboutOverview';
import { WhatWeDoSection } from '@/components/WhatWeDoSection';
import { ActionableSupportSection } from '@/components/ActionableSupportSection';
import { DeepExploreGateways } from '@/components/DeepExploreGateways';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';

import { SupportModal } from '@/components/SupportModal';
import { VolunteerModal } from '@/components/VolunteerModal';
import { PlaceholderNoticeModal } from '@/components/PlaceholderNoticeModal';
import { ShieldAlert, Sparkles } from 'lucide-react';

export default function Home() {
  const [supportModalOpen, setSupportModalOpen] = useState(false);
  const [volunteerModalOpen, setVolunteerModalOpen] = useState(false);
  const [noticeModalOpen, setNoticeModalOpen] = useState(false);
  const [highlightMode, setHighlightMode] = useState(false);

  // Toggle placeholder highlight mode on body element
  useEffect(() => {
    if (highlightMode) {
      document.body.classList.add('highlight-placeholders');
    } else {
      document.body.classList.remove('highlight-placeholders');
    }
  }, [highlightMode]);

  return (
    <main className="min-h-screen bg-vhh-cream relative selection:bg-vhh-green-800 selection:text-white">
      
      {/* Verification Review Floating Bar for Leadership */}
      <div className="fixed bottom-4 right-4 z-40 flex items-center gap-2">
        <button
          onClick={() => setNoticeModalOpen(true)}
          className="px-3.5 py-2 rounded-full bg-vhh-dark/90 text-emerald-300 border border-vhh-green-700/60 shadow-2xl backdrop-blur-md text-xs font-semibold flex items-center gap-2 hover:bg-vhh-green-950 transition-all hover:scale-105"
        >
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>VHH Leadership Guide</span>
        </button>

        <button
          onClick={() => setHighlightMode(!highlightMode)}
          className={`px-3.5 py-2 rounded-full text-xs font-semibold flex items-center gap-2 shadow-2xl transition-all hover:scale-105 border ${
            highlightMode
              ? 'bg-vhh-red-600 text-white border-vhh-red-500 animate-pulse'
              : 'bg-amber-100 text-amber-900 border-amber-300 hover:bg-amber-200'
          }`}
        >
          <ShieldAlert className="w-4 h-4 text-amber-700" />
          <span>{highlightMode ? 'Highlighting Data' : 'Review Placeholders'}</span>
        </button>
      </div>

      {/* Navigation Header */}
      <Navbar
        onOpenSupport={() => setSupportModalOpen(true)}
        onOpenVolunteer={() => setVolunteerModalOpen(true)}
        isHighlightMode={highlightMode}
        onToggleHighlight={() => setHighlightMode(!highlightMode)}
      />

      {/* 1. Hero */}
      <Hero onOpenSupport={() => setSupportModalOpen(true)} />

      {/* 2. Who We Are & The Big Idea */}
      <AboutOverview />

      {/* 3. What We Do & Why We Do It */}
      <WhatWeDoSection />

      {/* 4. Actionable Ways to Support (Sponsor School Fees, Food, Visit Us, Partner) */}
      <ActionableSupportSection
        onOpenSupport={() => setSupportModalOpen(true)}
        onOpenVolunteer={() => setVolunteerModalOpen(true)}
      />

      {/* 5. Deep Navigation Gateway (Clean Directory to Dedicated Interactive Pages) */}
      <DeepExploreGateways />

      {/* 6. Final Call to Action */}
      <FinalCTA onOpenSupport={() => setSupportModalOpen(true)} />

      {/* 7. Footer */}
      <Footer />

      {/* Modals */}
      <SupportModal
        isOpen={supportModalOpen}
        onClose={() => setSupportModalOpen(false)}
      />

      <VolunteerModal
        isOpen={volunteerModalOpen}
        onClose={() => setVolunteerModalOpen(false)}
      />

      <PlaceholderNoticeModal
        isOpen={noticeModalOpen}
        onClose={() => setNoticeModalOpen(false)}
      />

    </main>
  );
}
