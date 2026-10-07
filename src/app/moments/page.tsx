'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Gallery } from '@/components/Gallery';
import { GalleryModal } from '@/components/GalleryModal';
import { SupportModal } from '@/components/SupportModal';
import { VolunteerModal } from '@/components/VolunteerModal';
import { GalleryItem } from '@/data/vhhData';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function MomentsPage() {
  const [supportModalOpen, setSupportModalOpen] = useState(false);
  const [volunteerModalOpen, setVolunteerModalOpen] = useState(false);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);

  return (
    <main className="min-h-screen bg-vhh-cream text-vhh-charcoal">
      <Navbar
        onOpenSupport={() => setSupportModalOpen(true)}
        onOpenVolunteer={() => setVolunteerModalOpen(true)}
      />

      <div className="pt-28 pb-12 bg-vhh-dark text-white text-center px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-300 hover:text-white uppercase tracking-wider mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage Journey</span>
          </Link>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-stone-100">
            Moments & Living Photo Journal
          </h1>

          <p className="mt-4 text-lg text-stone-300 font-light max-w-2xl mx-auto">
            A continuous record of partner visits, celebrations, achievements, and facility updates.
          </p>
        </div>
      </div>

      <Gallery onSelectImage={(item) => setSelectedGalleryItem(item)} />

      <Footer />

      <SupportModal
        isOpen={supportModalOpen}
        onClose={() => setSupportModalOpen(false)}
      />

      <VolunteerModal
        isOpen={volunteerModalOpen}
        onClose={() => setVolunteerModalOpen(false)}
      />

      <GalleryModal
        item={selectedGalleryItem}
        onClose={() => setSelectedGalleryItem(null)}
      />
    </main>
  );
}
