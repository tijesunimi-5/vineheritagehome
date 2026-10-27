'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SupportModal } from '@/components/SupportModal';
import { VolunteerModal } from '@/components/VolunteerModal';
import { VHH_DATA } from '@/data/vhhData';
import { 
  ArrowLeft, 
  MapPin, 
  Phone, 
  Mail, 
  Navigation, 
  Calendar, 
  MessageSquare, 
  ExternalLink,
  Cake,
  BookOpen,
  Gamepad2,
  Film,
  Heart,
  Smile,
  Clock,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const [supportModalOpen, setSupportModalOpen] = useState(false);
  const [volunteerModalOpen, setVolunteerModalOpen] = useState(false);

  // Kuje Location Query
  const locationQuery = "Kuje, Abuja, Federal Capital Territory, Nigeria";
  const googleMapsUrl = `https://maps.google.com/?q=${encodeURIComponent(locationQuery)}`;
  const embedMapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(locationQuery)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  const whatsappVisitMessage = encodeURIComponent(
    "Hello Vine Heritage Home, I would like to schedule a visit / birthday celebration / mentorship session for the children at your home in Kuje, Abuja. Kindly provide visiting guidance. Thank you!"
  );

  const engagementWays = [
    {
      icon: Cake,
      title: "Celebrate Your Big Day",
      tag: "Birthdays & Milestones",
      desc: "Celebrate your birthday, wedding anniversary, promotion, or family milestone with 239 lively children! Share refreshments, cake, dance, and music."
    },
    {
      icon: BookOpen,
      title: "Educate & Mentor",
      tag: "Skills, Finance & Rights",
      desc: "Run hands-on workshops in Financial Literacy, Tech, Coding, Career Advice, Creative Arts, and Personal Rights & Safety."
    },
    {
      icon: Gamepad2,
      title: "Play Games & Sports",
      tag: "Recreation & Energy",
      desc: "Host weekend football matches on our green lawns, play board games (Chess, Scrabble, Monopoly), and laugh together."
    },
    {
      icon: Film,
      title: "Cinema Days & Fellowship",
      tag: "Movie Days & Treats",
      desc: "Sponsor or host a weekend Movie Screening afternoon with popcorn, juice, and snacks, or spend quality one-on-one time talking with the children."
    }
  ];

  return (
    <main className="min-h-screen bg-[#fdfbf7] text-vhh-charcoal overflow-x-hidden selection:bg-vhh-green-700 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        onOpenSupport={() => setSupportModalOpen(true)}
        onOpenVolunteer={() => setVolunteerModalOpen(true)}
      />

      {/* Header Banner */}
      <section className="pt-32 sm:pt-36 pb-16 sm:pb-20 bg-gradient-to-b from-vhh-dark via-vhh-dark/95 to-[#0f241c] text-white px-5 sm:px-10 lg:px-16 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1a5342_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-300 hover:text-white uppercase tracking-wider mb-6 transition-colors px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Homepage</span>
          </Link>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-100 leading-tight">
            Come and Visit Our Sanctuary. <br />
            <span className="italic font-normal text-emerald-300">
              Your Presence Changes Mindsets.
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-stone-300 font-light max-w-2xl mx-auto leading-relaxed">
            We are lively, energetic, and welcoming. We love having fun around our visitors, playing games, learning from your life experience, and welcoming you into our family.
          </p>

          <div className="mt-6 inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-xs text-stone-200">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Sanctuary Location: <strong>Kuje, Abuja</strong></span>
            <span className="text-white/40">&bull;</span>
            <span className="font-mono text-emerald-300">239 Children Eager to Meet You</span>
          </div>
        </div>
      </section>

      {/* Reassuring Visitor Ethos Callout */}
      <section className="max-w-6xl mx-auto px-5 sm:px-10 -mt-8 relative z-20">
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-900 text-xs font-semibold border border-emerald-200">
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
              <span>A Personal Welcome &bull; Every Person Matters</span>
            </div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-vhh-charcoal">
              You Don&rsquo;t Have to Come With Big Gifts. <span className="text-vhh-green-800 font-normal italic">Your Presence Is The Gift.</span>
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed max-w-3xl">
              Please never feel that you must bring expensive gifts to visit us. Your unique personality, listening ear, and warm presence have the ability to inspire our children, reshape mindsets, and show them what is possible. You are deeply valued and celebrated here!
            </p>
          </div>

          <a
            href={`https://wa.me/2349019303646?text=${whatsappVisitMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-vhh-green-900 text-white text-xs font-bold hover:bg-vhh-green-800 transition-colors shadow-sm shrink-0"
          >
            <Smile className="w-4 h-4 text-emerald-300" />
            <span>Message to Plan a Visit</span>
          </a>
        </div>
      </section>

      {/* Main Visiting Details & Map Grid */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-5 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Visiting Schedule & Contacts */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Visiting Hours Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2.5 text-vhh-green-900 font-bold">
                <Clock className="w-5 h-5 text-vhh-green-700" />
                <h3 className="font-serif text-xl font-bold">Official Visiting Schedule</h3>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-stone-700 font-light">
                <div className="p-3.5 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-emerald-950 font-bold block">
                      Saturdays &amp; Sundays (Best Visiting Days):
                    </strong>
                    <span className="text-emerald-900 text-xs">
                      Open <strong>10:00 AM – 6:00 PM</strong>. Our 239 children are free from school and ready to play, interact, and learn!
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200/80 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-amber-950 font-bold block">
                      School Holidays &amp; Vacations:
                    </strong>
                    <span className="text-amber-900 text-xs">
                      During Easter, Summer long vacations, Christmas, and mid-term breaks, weekday visits can easily be arranged with prior notice.
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-800 font-bold block">
                      Term-Time Weekdays:
                    </strong>
                    <span className="text-stone-600 text-xs">
                      Dedicated to accredited external schooling. All children are in town attending classes from morning until afternoon.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Phone & WhatsApp Enquiries */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0b1712] text-white shadow-xl space-y-5">
              <h3 className="font-serif text-xl font-bold text-white flex items-center gap-2">
                <Phone className="w-5 h-5 text-emerald-400" />
                <span>Enquiries &amp; Coordination Lines</span>
              </h3>

              <div className="space-y-4 text-xs font-mono">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-emerald-300 font-bold uppercase tracking-wider block mb-1">
                    Kuje Sanctuary Receiving &amp; Dispatch Desk:
                  </span>
                  <div className="text-base font-bold text-white space-y-0.5">
                    <div>09019303646 (Call &amp; WhatsApp)</div>
                    <div>080344229935 (Call &amp; SMS)</div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-stone-300 font-bold uppercase tracking-wider block mb-1">
                    Gwagwalada Liaison &amp; Admin Office:
                  </span>
                  <div className="text-sm font-bold text-stone-200">
                    08024343246
                  </div>
                  <div className="text-[11px] text-stone-400 mt-1 font-sans">
                    No. 17, Opposite Faculty of Law, University of Abuja Mini Campus
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-stone-300 font-bold uppercase tracking-wider block mb-1">
                    Official Email Inquiries:
                  </span>
                  <div className="text-sm font-bold text-emerald-300">
                    contact@vineheritagehome.org
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Map & Ways to Spend Time */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Interactive Google Maps Frame */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-vhh-green-900 font-bold text-sm">
                  <MapPin className="w-5 h-5 text-emerald-600" />
                  <span>Sanctuary Location &bull; Kuje, Abuja</span>
                </div>
                
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold transition-colors border border-stone-200"
                >
                  <Navigation className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Open in Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map Embed */}
              <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden border border-stone-300 relative bg-stone-200 shadow-inner">
                <iframe
                  title="Vine Heritage Home Sanctuary in Kuje, Abuja"
                  src={embedMapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale-[20%] contrast-[1.05]"
                />
              </div>

              <p className="text-xs text-stone-500 font-light leading-relaxed">
                Located in the serene hills of Kuje Area Council, Federal Capital Territory, Abuja. Gated sanctuary grounds with parking, security, and open green lawns for sports and celebrations.
              </p>
            </div>

            {/* 4 Ways to Spend Time With Us Cards */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#f5f2ea] border border-stone-200/90 space-y-4">
              <h3 className="font-serif text-lg font-bold text-vhh-charcoal">
                How You Can Spend Time With Our Children:
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {engagementWays.map((way, idx) => {
                  const IconComponent = way.icon;
                  return (
                    <div key={idx} className="p-4 rounded-2xl bg-white border border-stone-200 shadow-2xs">
                      <div className="w-8 h-8 rounded-xl bg-vhh-green-50 text-vhh-green-800 flex items-center justify-center mb-2">
                        <IconComponent className="w-4 h-4 text-vhh-green-700" />
                      </div>
                      <h4 className="font-serif font-bold text-xs text-vhh-charcoal mb-0.5">
                        {way.title}
                      </h4>
                      <p className="text-[11px] text-stone-500 font-light leading-relaxed">
                        {way.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setVolunteerModalOpen(true)}
                  className="w-full py-3.5 rounded-xl bg-vhh-green-900 hover:bg-vhh-green-800 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-emerald-300" />
                  <span>Book a Visit or Celebration Session</span>
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Support / Direct Bank Transfer Modal */}
      <SupportModal
        isOpen={supportModalOpen}
        onClose={() => setSupportModalOpen(false)}
      />

      {/* Volunteer & Visit Modal */}
      <VolunteerModal
        isOpen={volunteerModalOpen}
        onClose={() => setVolunteerModalOpen(false)}
      />
    </main>
  );
}
