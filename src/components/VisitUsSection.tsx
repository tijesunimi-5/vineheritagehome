'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  MapPin, 
  Calendar, 
  Clock, 
  ExternalLink, 
  MessageSquare, 
  Cake, 
  BookOpen, 
  Gamepad2, 
  Film,
  Navigation,
  Compass,
  Camera,
  Heart,
  Smile,
  Phone,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface VisitUsSectionProps {
  onPlanVisit?: () => void;
}

export const VisitUsSection: React.FC<VisitUsSectionProps> = ({ onPlanVisit }) => {
  const shouldReduceMotion = useReducedMotion();
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const engagementPillars = [
    {
      icon: Cake,
      title: "Celebrate Your Big Day With Us",
      subtitle: "Birthdays, Milestones & Anniversaries",
      description: "Celebrate your birthday, wedding anniversary, promotion, graduation, or family milestone with our 239 lively children! Share refreshments, cake, dance, play music, and create memories that our children will cherish for months.",
      tag: "Celebrations & Joy",
      badgeColor: "bg-rose-100 text-rose-900 border-rose-200"
    },
    {
      icon: BookOpen,
      title: "Educate, Inspire & Mentor",
      subtitle: "Life Skills, Finance & Knowing Your Rights",
      description: "You have real-world knowledge that can transform young lives! Run interactive sessions in Financial Literacy, Tech & Coding, Career Mentorship, Creative Arts, and Personal Rights & Safety Awareness.",
      tag: "Skills & Mentorship",
      badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-200"
    },
    {
      icon: Gamepad2,
      title: "Play Games & Have Pure Fun",
      subtitle: "Sports, Board Games & Outdoor Play",
      description: "Host weekend football matches on our green grounds, board games (Scrabble, Chess, Monopoly), relay races, skipping, and playground games. We love having fun around our visitors and laughing together!",
      tag: "Recreation & Energy",
      badgeColor: "bg-amber-100 text-amber-900 border-amber-200"
    },
    {
      icon: Film,
      title: "Cinema Days & Fellowship",
      subtitle: "Movie Screenings & Heartfelt Connection",
      description: "Sponsor or host a weekend Movie Screening afternoon with popcorn, juice, and biscuits, or simply sit down with the children for heartfelt conversations and story sharing.",
      tag: "Fellowship & Love",
      badgeColor: "bg-blue-100 text-blue-900 border-blue-200"
    }
  ];

  // Multiple Perspectives of the House & Living Environment
  const housePhotos = [
    {
      id: "exterior",
      label: "Exterior & Grounds",
      title: "The Home & Residential Grounds",
      desc: "Tranquil, secure environment in Kuje Abuja with green lawns and open space for 239 children to play and rest safely.",
      placeholderTag: "VERIFIED SANCTUARY GROUNDS — KUJE ABUJA",
      imageUrl: "/vine-home.jpg",
      features: ["Solar Inverter Power", "Clean Borehole Water", "Gated Security & CCTV"]
    },
    {
      id: "living",
      label: "Living Hall",
      title: "Communal Living & Fellowship Hall",
      desc: "Warm indoor family room where children gather every evening for devotions, story sharing, music, and peer fellowship.",
      placeholderTag: "PHOTO PLACEHOLDER 02 — LIVING & FELLOWSHIP HALL",
      imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=85&w=1600&auto=format&fit=crop",
      features: ["House Mother Care", "Evening Stories", "Warm Community"]
    },
    {
      id: "dormitory",
      label: "Children Dorms",
      title: "Safe & Restful Children Dormitories",
      desc: "Clean, comfortable sleeping quarters with solar-powered fans and quality bedding where children rest safely under house mother care.",
      placeholderTag: "PHOTO PLACEHOLDER 03 — CHILDREN DORMITORIES",
      imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=85&w=1600&auto=format&fit=crop",
      features: ["Solar-Powered Fans", "House Mother Care", "Restful Bedding"]
    },
    {
      id: "dining",
      label: "Dining & Kitchen",
      title: "Family Dining Hall & Kitchen",
      desc: "Where 3 hot, freshly cooked, nutritious meals are prepared and served daily for all 239 growing children.",
      placeholderTag: "PHOTO PLACEHOLDER 04 — DINING & COMMUNAL MEALS",
      imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=85&w=1600&auto=format&fit=crop",
      features: ["3 Nutritious Meals Daily", "Communal Seating", "Fresh Pantry Staples"]
    }
  ];

  const currentPhoto = housePhotos[activePhotoIndex];

  // Location: Kuje, Abuja
  const locationQuery = "Kuje, Abuja, Federal Capital Territory, Nigeria";
  const googleMapsUrl = `https://maps.google.com/?q=${encodeURIComponent(locationQuery)}`;
  const embedMapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(locationQuery)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  const whatsappMessage = encodeURIComponent(
    "Hello Vine Heritage Home, I would like to schedule a visit / birthday celebration / mentorship session for the children at your home in Kuje, Abuja. Kindly provide visiting guidelines. Thank you!"
  );

  return (
    <section 
      id="visit" 
      aria-label="Visit Vine Heritage Home"
      className="py-20 sm:py-28 bg-[#fdfbf7] text-vhh-charcoal relative overflow-hidden border-t border-stone-200/90"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-vhh-green-900/10 text-vhh-green-900 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5 text-vhh-green-800" />
            <span>Come and Visit Us &bull; You Are Welcomed</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-vhh-charcoal leading-tight">
            Spend Time With Our Family. <br />
            <span className="italic font-normal text-vhh-green-800">
              Your Presence Alone Changes Mindsets.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-stone-600 font-light leading-relaxed">
            We are lively, energetic, and welcoming. We love having fun around our visitors, playing games, learning from you, and being impacted by your life experience. We are ready and eager to receive you!
          </p>
        </div>

        {/* ========================================================================= */}
        {/* WARM VISITOR ETHOS CALLOUT: YOU DON'T NEED A BIG GIFT                      */}
        {/* ========================================================================= */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950 via-vhh-dark to-[#0f241c] text-white border border-emerald-800/40 shadow-md mb-14 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[11px] font-mono font-semibold uppercase text-emerald-300 border border-white/15">
                <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
                <span>Our Visitor Promise &bull; Every Person Matters</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                You Don&rsquo;t Have to Come With Big Gifts. <span className="text-emerald-300 font-normal italic">Your Presence Is The Gift.</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                Please never let the feeling of having to buy large gifts hold you back. Your unique presence, listening ear, and warm smile have the rare ability to inspire our children, reshape mindsets, and spark dreams for the future. Whether you come to teach a skill, play a game of football, or celebrate your birthday, you are deeply valued here.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <a
                href={`https://wa.me/2349019303646?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-stone-950 text-xs font-bold transition-all shadow-sm"
              >
                <Smile className="w-4 h-4" />
                <span>Enquire to Visit Us</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4 Ways to Engage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {engagementPillars.map((pillar, index) => {
            const IconComp = pillar.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ 
                  duration: shouldReduceMotion ? 0 : 0.45, 
                  delay: shouldReduceMotion ? 0 : index * 0.08 
                }}
                className="p-6 rounded-3xl bg-white border border-stone-200 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-vhh-green-50 border border-vhh-green-200 flex items-center justify-center text-vhh-green-800 group-hover:scale-105 transition-transform">
                      <IconComp className="w-5 h-5 text-vhh-green-700" />
                    </div>

                    <span className={`px-2 py-0.5 rounded-md text-[10px] font-mono uppercase font-bold tracking-wider border ${pillar.badgeColor}`}>
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-vhh-charcoal group-hover:text-vhh-green-900 transition-colors leading-snug mb-1">
                    {pillar.title}
                  </h3>

                  <p className="text-xs font-semibold text-emerald-800 mb-2.5">
                    {pillar.subtitle}
                  </p>

                  <p className="text-xs text-stone-600 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* INTERACTIVE HOUSE SHOWCASE (MULTIPLE VIEWS) & DETAILED GOOGLE MAPS        */}
        {/* ========================================================================= */}
        <div className="rounded-3xl bg-white border border-stone-200 shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* LEFT: Multi-Photo Interactive House Switcher */}
          <div className="lg:col-span-5 relative bg-stone-900 min-h-[420px] sm:min-h-[480px] flex flex-col justify-between p-6 sm:p-8 text-white">
            
            {/* Background Image with Smooth Crossfade */}
            <AnimatePresence mode="wait">
              <motion.img
                key={currentPhoto.id}
                src={currentPhoto.imageUrl}
                alt={currentPhoto.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </AnimatePresence>
            
            {/* Dark Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-stone-950/30 pointer-events-none" />

            {/* Top Interactive Perspective Switcher Pills */}
            <div className="relative z-10 space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-mono uppercase font-bold tracking-widest text-emerald-200 border border-white/20 flex items-center gap-1.5">
                  <Camera className="w-3 h-3 text-emerald-300" />
                  <span>Explore the House</span>
                </span>

                <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-amber-500/80 text-white font-bold uppercase tracking-wider">
                  Placeholder
                </span>
              </div>

              {/* 4 Interactive Clickable Views */}
              <div className="flex items-center gap-1.5 flex-wrap pt-1">
                {housePhotos.map((photo, pIdx) => (
                  <button
                    key={photo.id}
                    onClick={() => setActivePhotoIndex(pIdx)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all ${
                      activePhotoIndex === pIdx
                        ? 'bg-emerald-400 text-stone-950 font-bold shadow-sm'
                        : 'bg-stone-900/80 text-stone-300 hover:bg-stone-800 border border-white/10'
                    }`}
                  >
                    {photo.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom Caption & House Specs */}
            <div className="relative z-10 pt-6">
              <span className="text-[10px] font-mono text-emerald-300 font-semibold block mb-1 uppercase tracking-wider">
                {currentPhoto.placeholderTag}
              </span>
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-white leading-snug">
                {currentPhoto.title}
              </h4>
              <p className="text-xs text-stone-300 font-light mt-1.5 leading-relaxed">
                {currentPhoto.desc}
              </p>

              {/* Amenities Tags */}
              <div className="mt-3.5 pt-3 border-t border-white/20 flex items-center gap-3 text-[10px] font-mono text-stone-300 flex-wrap">
                {currentPhoto.features.map((feat, fIdx) => (
                  <span key={fIdx} className="inline-flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-emerald-400" />
                    <span>{feat}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Detailed Visiting Times, Coordination Lines & Google Maps */}
          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between bg-[#fbf9f5]">
            <div>
              {/* Interactive Google Map Embed (Centered on Kuje, Abuja) */}
              <div className="w-full h-52 sm:h-56 rounded-2xl overflow-hidden border border-stone-300 shadow-inner relative mb-5 bg-stone-200">
                <iframe
                  title="Vine Heritage Home Location in Kuje, Abuja"
                  src={embedMapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale-[20%] contrast-[1.05]"
                />

                {/* Floating GPS Navigation Pill */}
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-sm text-vhh-green-900 border border-stone-300 text-xs font-bold shadow-md hover:bg-vhh-green-900 hover:text-white transition-all"
                >
                  <Navigation className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* SPECIFIC VISITING SCHEDULE & ENQUIRY CONTACTS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                
                {/* 1. Best Visiting Times: Weekends & School Holidays */}
                <div className="p-3.5 rounded-2xl bg-white border border-stone-200/90 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-vhh-green-900 font-bold mb-1">
                    <Clock className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>When Can You Visit?</span>
                  </div>
                  <div className="space-y-1 text-[11px] text-stone-700">
                    <p>
                      &bull; <strong className="text-vhh-green-950">Saturdays &amp; Sundays</strong>: Open for visits (10:00 AM – 6:00 PM). Children are free from school!
                    </p>
                    <p>
                      &bull; <strong className="text-vhh-green-950">School Vacations &amp; Breaks</strong>: Open weekdays with advance notice when schools are on holiday.
                    </p>
                    <p className="text-[10px] text-stone-500 italic mt-0.5">
                      Term-time weekdays are dedicated to external school classes.
                    </p>
                  </div>
                </div>

                {/* 2. Direct Enquiries & Booking Lines */}
                <div className="p-3.5 rounded-2xl bg-white border border-stone-200/90 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-vhh-green-900 font-bold mb-1">
                    <Phone className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>Contact for Enquiries:</span>
                  </div>
                  <p className="text-[11px] text-stone-600">
                    Reach our visitation and gate receiving team directly:
                  </p>
                  <div className="mt-1 font-mono font-bold text-emerald-800 text-[11px] space-y-0.5">
                    <div>Call / WhatsApp: 09019303646</div>
                    <div>Call / SMS: 080344229935</div>
                  </div>
                  <div className="text-[10px] text-stone-500 font-mono mt-1">
                    Destination: Kuje Area Council, Abuja
                  </div>
                </div>

              </div>
            </div>

            {/* Action Bar */}
            <div className="mt-6 pt-5 border-t border-stone-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              {onPlanVisit && (
                <button
                  onClick={onPlanVisit}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-vhh-green-900 text-white text-xs sm:text-sm font-semibold hover:bg-vhh-green-800 transition-colors shadow-sm"
                >
                  <Calendar className="w-4 h-4 text-emerald-300" />
                  <span>Plan a Visit / Schedule Mentorship</span>
                </button>
              )}

              <a
                href={`https://wa.me/2349019303646?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#25D366] text-white text-xs sm:text-sm font-bold hover:bg-[#20bd5a] transition-colors shadow-xs"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Message on WhatsApp to Book Visit</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
