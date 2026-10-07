'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ChapterIdea } from '@/components/ChapterIdea';
import { ChapterExploreHome } from '@/components/ChapterExploreHome';
import { ChapterDayInLife } from '@/components/ChapterDayInLife';
import { ChapterStoryTeaser } from '@/components/ChapterStoryTeaser';
import { ChapterChildrenStories } from '@/components/ChapterChildrenStories';
import { ChapterMomentsJournal } from '@/components/ChapterMomentsJournal';
import { ChapterNeedsBoard } from '@/components/ChapterNeedsBoard';
import { ChapterSupportWays } from '@/components/ChapterSupportWays';
import { ChapterFutureVision } from '@/components/ChapterFutureVision';
import { ChapterComeSee } from '@/components/ChapterComeSee';
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

      {/* CHAPTER 01 — ARRIVAL */}
      <Hero onOpenSupport={() => setSupportModalOpen(true)} />

      {/* CHAPTER 02 — THE IDEA */}
      <ChapterIdea />

      {/* CHAPTER 03 — EXPLORE THE HOME (Sticky Viewport Sequence) */}
      <ChapterExploreHome />

      {/* CHAPTER 04 — A DAY AT VINE HERITAGE HOME */}
      <ChapterDayInLife />

      {/* CHAPTER 05 — THE STORY BEHIND THE HOME */}
      <ChapterStoryTeaser />

      {/* CHAPTER 06 — EVERY CHILD HAS A STORY */}
      <ChapterChildrenStories />

      {/* CHAPTER 07 — MOMENTS AT VINE HERITAGE HOME */}
      <ChapterMomentsJournal />

      {/* CHAPTER 08 — WHAT WE NEED */}
      <ChapterNeedsBoard />

      {/* CHAPTER 09 — WAYS TO SUPPORT */}
      <ChapterSupportWays onOpenSupport={() => setSupportModalOpen(true)} />

      {/* CHAPTER 10 — THE FUTURE */}
      <ChapterFutureVision />

      {/* FINAL CHAPTER — COME SEE FOR YOURSELF */}
      <ChapterComeSee />

      {/* Footer */}
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
