'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { PartnershipStrip } from '@/components/PartnershipStrip';
import { WhoWeAreSection } from '@/components/WhoWeAreSection';
import { FoundersSection } from '@/components/FoundersSection';
import { HowToHelpSection } from '@/components/HowToHelpSection';
import { VisitUsSection } from '@/components/VisitUsSection';
import { Footer } from '@/components/Footer';
import { VolunteerModal } from '@/components/VolunteerModal';
import { SupportModal } from '@/components/SupportModal';

export default function Home() {
  const [visitModalOpen, setVisitModalOpen] = useState(false);
  const [supportModalOpen, setSupportModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-vhh-dark relative selection:bg-vhh-green-700 selection:text-white overflow-x-hidden">
      {/* 
        GLOBAL TOP NAVBAR:
        Fixed desktop & mobile navigation connecting all 7 core pages,
        direct support modal, and visit booking drawer.
      */}
      <Navbar
        onOpenSupport={() => setSupportModalOpen(true)}
        onOpenVolunteer={() => setVisitModalOpen(true)}
      />

      {/* 
        HERO SECTION:
        Full-width, art-directed editorial hero with authentic documentary photography,
        meaningful headline, and distinct primary/secondary CTAs.
      */}
      <Hero 
        onPlanVisit={() => setVisitModalOpen(true)} 
      />

      {/* 
        PARTNERSHIP LOGO MARQUEE:
        Sleek low-height logo bar with infinite marquee scroll, hover pause,
        bold highlight, and floating brief info tooltips.
      */}
      <PartnershipStrip />

      {/* 
        WHO WE ARE & WHY WE EXIST:
        Human, editorial introduction answering what VHH is, why it was founded,
        the 239 children in care, and clear gateways to our full story and home.
      */}
      <WhoWeAreSection />

      {/* 
        A WORD FROM OUR FOUNDERS (CEO & WIFE):
        Heartfelt message and leadership portrait of Stevens Olusola Ajayi &
        Dr. Stevens Gloria Chinwe, dedicating over 20 years to raise 239 children.
      */}
      <FoundersSection 
        onPlanVisit={() => setVisitModalOpen(true)}
      />

      {/* 
        HOW YOU CAN HELP:
        Categorized actionable giving preview (Food, School Fees, Healthcare, Essentials)
        with stacked horizontal hover spread on desktop and vertical clarity on mobile.
      */}
      <HowToHelpSection 
        onDonate={() => setSupportModalOpen(true)}
      />

      {/* 
        COME AND VISIT US:
        Invitation to spend time, teach mentorship skills (Tech, Business, Art, Health),
        host cinema/sports days, with building photo showcase and detailed Google Maps in Kuje.
      */}
      <VisitUsSection 
        onPlanVisit={() => setVisitModalOpen(true)}
      />

      {/* FOOTER */}
      <Footer />

      {/* Plan a Visit Interactive Modal */}
      <VolunteerModal
        isOpen={visitModalOpen}
        onClose={() => setVisitModalOpen(false)}
      />

      {/* Donate / Financial Support Interactive Modal */}
      <SupportModal
        isOpen={supportModalOpen}
        onClose={() => setSupportModalOpen(false)}
      />
    </main>
  );
}
