'use client';

import React, { useState } from 'react';
import { 
  HeartPulse, 
  Stethoscope, 
  GraduationCap, 
  PhoneCall, 
  Building2, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  Sun, 
  Clock, 
  MessageCircle,
  Copy,
  Check
} from 'lucide-react';

interface MedicalOutreachSectionProps {
  onOpenDonate?: (tag: string) => void;
}

export const MedicalOutreachSection: React.FC<MedicalOutreachSectionProps> = ({ onOpenDonate }) => {
  const [copiedBank, setCopiedBank] = useState(false);

  const copyEmergencyBank = () => {
    navigator.clipboard.writeText("1014187063");
    setCopiedBank(true);
    setTimeout(() => setCopiedBank(false), 3000);
  };

  const pillars = [
    {
      id: "outreach",
      icon: Stethoscope,
      title: "Doctor Outreaches & Free Checkups",
      tag: "Regular Medical Missions",
      description: "If you are a doctor, pediatrician, dentist, nurse, or medical foundation, we invite you to host regular health outreaches at our Kuje home.",
      deliverables: [
        "Comprehensive pediatric physical checkups & vitals",
        "Free essential drug distributions (antimalarials, antibiotics, syrups)",
        "Rapid diagnostic testing (malaria RDTs, typhoid, PCV/blood counts)",
        "Dental hygiene, vision screenings, and deworming drives"
      ]
    },
    {
      id: "education",
      icon: GraduationCap,
      title: "Caregiver Emergency Health Training",
      tag: "Capacity & Rapid Action",
      description: "Our 30 housemothers and caregivers are on the frontlines 24/7. We need medical educators to run practical emergency training workshops.",
      deliverables: [
        "Seizure & convulsion protocols (knowing exactly when and how to act fast)",
        "Managing acute high childhood fevers to prevent neurological complications",
        "Triage for home incidents: burns, deep cuts, choking, and fractures",
        "Pediatric first aid certification and CPR readiness"
      ]
    },
    {
      id: "tele-triage",
      icon: PhoneCall,
      title: "Standby Tele-Triage & Clinical Advisor",
      tag: "24/7 On-Call Guidance",
      description: "A dedicated on-call doctor or clinical officer our home nurse can contact day or night to quickly assess sick children and advise on immediate next steps.",
      deliverables: [
        "Instant symptom triage: advise whether to treat at home or rush to ER",
        "Accurate pediatric dosing instructions for clinic dispensary drugs",
        "Home injury evaluation and clinical escalation protocols",
        "Continuous medical oversight for chronic childhood health cases"
      ]
    },
    {
      id: "hospital",
      icon: Building2,
      title: "Hospital Retainerships & Zero Rejection",
      tag: "Emergency Admission Guarantee",
      description: "We seek formal partnerships with accredited hospitals in Kuje and Abuja so our children receive immediate admission without fear or rejection.",
      deliverables: [
        "Guaranteed immediate emergency room entry without gatekeeping delays",
        "Specialized pediatric surgical, orthopedic, and diagnostic support",
        "Transparent medical billing coordinated directly with our board",
        "Backed by our dedicated VHH Emergency Medical Escrow Fund"
      ]
    }
  ];

  return (
    <section 
      id="medical-outreach" 
      aria-label="Medical Outreaches, Doctor Partnerships and Hospital Retainerships"
      className="py-16 sm:py-24 bg-[#0c1f17] text-white relative overflow-hidden border-t border-b border-emerald-900/40 scroll-mt-20"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-400/20 text-emerald-300 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <HeartPulse className="w-3.5 h-3.5 text-emerald-400" />
            <span>Healthcare &bull; Doctor Partnerships &bull; Medical Retainers</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            We Spend Heavily on Healthcare. <br />
            <span className="italic font-normal text-emerald-300">
              We Need Qualified Medical Allies to Safeguard 239 Children.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-stone-300 font-light leading-relaxed">
            From routine malaria infections to unexpected seizures and emergency hospital visits, preserving child health is an enormous ongoing financial and clinical challenge. Here is how medical professionals and hospitals can partner with us.
          </p>
        </div>

        {/* Real Story / Transparent Context Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-red-950/30 border border-red-500/30 backdrop-blur-md mb-12">
          <div className="flex flex-col md:flex-row md:items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-red-900/50 border border-red-500/40 flex items-center justify-center text-red-300 shrink-0">
              <AlertTriangle className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                  The Honest Reality: Why We Urgently Need Medical Partnerships
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-red-500/20 text-red-200 border border-red-500/40 font-semibold">
                  Critical Need
                </span>
              </div>

              <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                There have been painful times when critically sick children were initially rejected at hospital doors, or when our caregivers were terrified to take an ill child to the hospital because of crippling out-of-pocket costs. <strong>We will never toy with our children&rsquo;s lives.</strong>
              </p>

              <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                We need compassionate medical practitioners who will partner with us: doctors who can host regular checkups and training, standby advisors who can evaluate fever and seizures over the phone, and hospital administrators willing to grant guaranteed admission when minutes matter.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {pillars.map((pillar) => {
            const IconComponent = pillar.icon;

            return (
              <div 
                key={pillar.id}
                className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase font-bold tracking-wider bg-white/10 text-emerald-200 border border-white/10">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-white mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed mb-5">
                    {pillar.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-white/10">
                    <div className="text-[11px] font-mono uppercase text-emerald-400 font-semibold tracking-wider">
                      Key Objectives:
                    </div>
                    {pillar.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-stone-300 font-light">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-stone-400">Location: Kuje Sanctuary</span>
                  <a
                    href="https://wa.me/2349019303646?text=Hello%20Vine%20Heritage%20Home%2C%20I%20am%20a%20medical%20professional%20%2F%20doctor%20and%20would%20like%20to%20discuss%20medical%20outreach%20or%20clinical%20support%20for%20the%20children."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-300 hover:text-white transition-colors"
                  >
                    <span>Connect on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dedicated Albinism Dermatological Protection Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-950/40 via-stone-900/60 to-emerald-950/40 border border-amber-500/30 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-300 shrink-0">
                <Sun className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-white">
                  Specialized Dermatological Care for Children with Albinism
                </h4>
                <p className="mt-1 text-xs sm:text-sm text-stone-300 font-light leading-relaxed max-w-2xl">
                  Several of our rescued children live with albinism. Under the intense tropical sun in Abuja, lack of adequate sunscreen leads directly to painful burns, precancerous solar keratosis, and skin malignancies. We need steady consignments of <strong>SPF 50+ mineral sunscreens, wide-brim UV hats, and periodic dermatologist reviews</strong>.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onOpenDonate && onOpenDonate('VHH ALBINISM CARE')}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold transition-colors shadow-sm shrink-0"
            >
              <span>Fund Albinism Skincare &rarr;</span>
            </button>
          </div>
        </div>

        {/* Action Callout for Doctors & Hospital Administrators */}
        <div className="p-8 rounded-3xl bg-emerald-950/50 border border-emerald-500/30 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Are You a Doctor, Nurse, or Hospital Director in Nigeria or Abroad?
            </h4>
            <p className="mt-2 text-xs sm:text-sm text-stone-300 font-light max-w-2xl leading-relaxed">
              Whether you want to volunteer for a weekend medical mission, adopt our clinic dispensary, or establish an institutional hospital retainership, we welcome you with open arms.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
            <a
              href="https://wa.me/2349019303646?text=Hello%20Vine%20Heritage%20Home%2C%20I%20am%20reaching%20out%20regarding%20Medical%20Outreach%20%2F%20Hospital%20Partnership%20for%20your%20children."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-emerald-950 text-xs font-bold transition-all shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Message Medical Desk on WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={copyEmergencyBank}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-colors border border-white/15"
            >
              {copiedBank ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-300">Zenith Account Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-stone-300" />
                  <span>Copy Emergency Med Account</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
