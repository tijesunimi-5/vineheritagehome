'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  MapPin, 
  Calendar, 
  Clock, 
  ExternalLink, 
  MessageSquare, 
  Film, 
  BookOpen, 
  HeartHandshake, 
  Navigation,
  Compass,
  Camera
} from 'lucide-react';

interface VisitUsSectionProps {
  onPlanVisit?: () => void;
}

export const VisitUsSection: React.FC<VisitUsSectionProps> = ({ onPlanVisit }) => {
  const shouldReduceMotion = useReducedMotion();
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const engagementPillars = [
    {
      icon: BookOpen,
      title: "Educate & Mentor Our Children",
      subtitle: "Share Your Real-World Skills",
      description: "Visiting mentors and professionals are invited to run interactive extracurricular life skill sessions in Tech & Digital Skills, Financial Literacy, Business, Character & Relationships, Health Emergency Safety, and Creative Arts & Music.",
      tag: "Skills & Education",
      badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-200"
    },
    {
      icon: Film,
      title: "Cinema & Sports Days",
      subtitle: "Bring Moments of Pure Joy",
      description: "Sponsor or host a joyful Movie Screening (Cinema Day) afternoon with snacks for all 239 children, or organize weekend football matches, relay athletics, and board games on our grounds.",
      tag: "Recreation & Joy",
      badgeColor: "bg-amber-100 text-amber-900 border-amber-200"
    },
    {
      icon: HeartHandshake,
      title: "Ground & Home Care",
      subtitle: "Lend a Helping Hand",
      description: "Join our dedicated caregivers for a hands-on service day helping clean, landscape, and care for the residential grounds, garden, and common rooms.",
      tag: "Hands-on Service",
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
      features: ["Solar Inverter Power", "Clean Borehole Water", "Gated Security"]
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
      placeholderTag: "PHOTO PLACEHOLDER 04 — DINING & COMMAL MEALS",
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
    "Hello Vine Heritage Home, I would like to schedule a visit / mentorship session for the children at your home in Kuje, Abuja. Kindly provide visitor guidance. Thank you!"
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
            <span>Come and Visit Us</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-vhh-charcoal leading-tight">
            Spend Time With Our Family. <br />
            <span className="italic font-normal text-vhh-green-800">
              Discover Vine Heritage Home For Yourself.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-stone-600 font-light leading-relaxed">
            We warmly welcome prospective supporters, professionals, mentors, and groups to our home in Kuje, Abuja. Your physical presence, encouragement, and time mean the world to our <strong>239 children</strong>.
          </p>
        </div>

        {/* 3 Ways to Engage Grid (from handwritten draft) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {engagementPillars.map((pillar, index) => {
            const IconComp = pillar.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ 
                  duration: shouldReduceMotion ? 0 : 0.5, 
                  delay: shouldReduceMotion ? 0 : index * 0.1 
                }}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-stone-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-vhh-green-50 border border-vhh-green-200 flex items-center justify-center text-vhh-green-800 group-hover:scale-105 transition-transform">
                      <IconComp className="w-5 h-5 text-vhh-green-700" />
                    </div>

                    <span className={`px-2.5 py-1 rounded-md text-[10px] font-mono uppercase font-bold tracking-wider border ${pillar.badgeColor}`}>
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-vhh-charcoal group-hover:text-vhh-green-900 transition-colors leading-snug mb-1">
                    {pillar.title}
                  </h3>

                  <p className="text-xs font-semibold text-emerald-800 mb-3">
                    {pillar.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
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

          {/* RIGHT: Interactive Google Maps & Visiting Logistics in Kuje */}
          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between bg-[#fbf9f5]">
            <div>
              {/* Interactive Google Map Embed (Centered on Kuje, Abuja) */}
              <div className="w-full h-56 sm:h-64 rounded-2xl overflow-hidden border border-stone-300 shadow-inner relative mb-6 bg-stone-200">
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

              {/* Verified Location Points in Kuje */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                
                {/* Physical Location */}
                <div className="p-3.5 rounded-xl bg-white border border-stone-200/80 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-vhh-green-900 font-bold mb-1">
                    <MapPin className="w-4 h-4 text-vhh-green-700 shrink-0" />
                    <span>Location:</span>
                  </div>
                  <p className="font-mono text-stone-800 font-bold text-[11px]">
                    Kuje, Federal Capital Territory
                  </p>
                  <p className="text-stone-500 text-[11px] font-light mt-0.5">
                    Abuja, Nigeria &bull; Detailed address update in progress.
                  </p>
                </div>

                {/* Visiting Hours & Arrival Lines */}
                <div className="p-3.5 rounded-xl bg-white border border-stone-200/80 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-vhh-green-900 font-bold mb-1">
                    <Clock className="w-4 h-4 text-vhh-green-700 shrink-0" />
                    <span>Visiting Hours & Phone:</span>
                  </div>
                  <p className="text-stone-700 text-[11px]">
                    Weekends: <strong>10:00 AM – 5:00 PM</strong>
                  </p>
                  <p className="font-mono text-emerald-800 font-bold text-[11px] mt-0.5">
                    Call: 09019303646 &bull; 080344229935
                  </p>
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
                <span>Message on WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
