'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Bus, 
  Users, 
  Utensils, 
  HeartPulse, 
  Sun, 
  Landmark, 
  Copy, 
  Check, 
  MessageSquare, 
  ShieldCheck, 
  Tag, 
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';
import Link from 'next/link';

interface FinancialTransparencySectionProps {
  onOpenModal?: () => void;
}

export const FinancialTransparencySection: React.FC<FinancialTransparencySectionProps> = ({ onOpenModal }) => {
  const shouldReduceMotion = useReducedMotion();
  const [selectedPurpose, setSelectedPurpose] = useState<string>("All-Round Sustenance (239 Children)");
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // The 5 core operational expenditure pillars from user's handwritten notes
  const fundAllocations = [
    {
      id: "bus",
      icon: Bus,
      title: "School Bus & Transit Fuel",
      subtitle: "Daily School & Clinic Transit",
      description: "Fuel and servicing for our bus transporting 239 children safely every weekday to accredited external schools and hospitals.",
      badge: "External Transit",
      color: "bg-amber-50 text-amber-800 border-amber-200"
    },
    {
      id: "caregivers",
      icon: Users,
      title: "Caregivers & Staff Stipends",
      subtitle: "30 Devoted Home Staff",
      description: "Supporting 30 resident house mothers, caregivers, kitchen cooks, and a resident home nurse providing 24/7 loving parental care.",
      badge: "24/7 Home Care",
      color: "bg-emerald-50 text-emerald-800 border-emerald-200"
    },
    {
      id: "kitchen",
      icon: Utensils,
      title: "Kitchen Need Bills & Sustenance",
      subtitle: "3 Hot Meals Daily",
      description: "Cooking gas and bulk staple provisions (rice, beans, yam, palm oil, formula) to serve 3 freshly cooked, nutritious meals every day.",
      badge: "Daily Meals",
      color: "bg-orange-50 text-orange-800 border-orange-200"
    },
    {
      id: "medic",
      icon: HeartPulse,
      title: "Medical & Clinic Bills",
      subtitle: "Routine & Emergency Care",
      description: "Routine pediatric wellness checkups, emergency hospital care, prescription medications, and specialized therapies for children with disabilities.",
      badge: "Healthcare",
      color: "bg-rose-50 text-rose-800 border-rose-200"
    },
    {
      id: "maintenance",
      icon: Sun,
      title: "Solar Power & Compound Care",
      subtitle: "Continuous Clean Energy",
      description: "Servicing our solar inverter battery system and clean borehole pump so children never sleep in darkness and always have running water.",
      badge: "24/7 Power & Water",
      color: "bg-blue-50 text-blue-800 border-blue-200"
    }
  ];

  // Quick purpose options for direct bank transfer narration
  const purposeOptions = [
    { label: "All-Round Sustenance (239 Children)", tag: "VHH SUSTENANCE" },
    { label: "External School Fees Sponsorship", tag: "VHH SCHOOL FEES" },
    { label: "Food Pantry & Kitchen Bills", tag: "VHH KITCHEN" },
    { label: "Medical & Clinic Care", tag: "VHH MEDICAL" },
    { label: "School Bus Transit Fuel", tag: "VHH BUS FUEL" },
    { label: "Solar Inverter Maintenance", tag: "VHH SOLAR" }
  ];

  const currentTag = purposeOptions.find(p => p.label === selectedPurpose)?.tag || "VHH SUPPORT";

  // Official Verified Foundation Accounts
  const bankAccounts = [
    {
      bank: "Zenith Bank Plc",
      accountName: "Vine Heritage Home Foundation",
      accountNumber: "1016849302",
      type: "Primary Operating Account",
      currency: "NGN"
    },
    {
      bank: "First Bank of Nigeria",
      accountName: "Vine Heritage Home Foundation",
      accountNumber: "2038472910",
      type: "Project & Sustenance Account",
      currency: "NGN"
    }
  ];

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(id);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Vine Heritage Home, I would like to make / have sent a direct bank transfer for: ${selectedPurpose} (Narration: ${currentTag}). Kindly confirm receipt. Thank you!`
  );

  return (
    <section
      id="transparency"
      aria-label="Financial Stewardship and Direct Giving"
      className="py-20 sm:py-28 bg-[#f5f2ea] text-vhh-charcoal relative overflow-hidden border-t border-stone-200/90"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-vhh-green-900/10 text-vhh-green-900 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-vhh-green-800" />
            <span>Section 05 &bull; Radical Financial Stewardship</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-vhh-charcoal leading-tight">
            Where Every Naira Goes. <br />
            <span className="italic font-normal text-vhh-green-800">
              Clear Accountability for Every Single Gift.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-stone-600 font-light leading-relaxed">
            Sheltering, feeding, educating, and healing <strong>239 children</strong> requires disciplined, transparent stewardship. Every transfer directly sustains our children and the dedicated staff who look after them 24/7 in Kuje, Abuja.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* THE 5 CORE EXPENDITURE PILLARS (Handwritten Notes)                         */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {fundAllocations.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ 
                  duration: shouldReduceMotion ? 0 : 0.45, 
                  delay: shouldReduceMotion ? 0 : idx * 0.08 
                }}
                className={`p-6 rounded-3xl bg-white border border-stone-200 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-stone-50 border border-stone-200 flex items-center justify-center text-vhh-green-900 group-hover:scale-105 transition-transform">
                      <IconComp className="w-5 h-5 text-vhh-green-700" />
                    </div>

                    <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-mono uppercase font-bold tracking-wider border ${item.color}`}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-vhh-charcoal group-hover:text-vhh-green-900 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs font-semibold text-emerald-800 mt-0.5 mb-2.5">
                    {item.subtitle}
                  </p>

                  <p className="text-xs text-stone-600 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-1.5 text-[11px] font-mono text-stone-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>100% Directed to Beneficiaries</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* DIRECT BANK TRANSFER CARD (Simple, No Complex Gateways)                   */}
        {/* ========================================================================= */}
        <div className="rounded-3xl bg-white border border-stone-200 shadow-md overflow-hidden">
          
          <div className="p-6 sm:p-10 bg-gradient-to-br from-stone-900 via-stone-900 to-vhh-green-950 text-white">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 backdrop-blur-md text-[11px] font-mono uppercase font-bold tracking-wider text-emerald-300 border border-white/15 mb-3">
                  <Landmark className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Direct Bank Giving &bull; No Gateway Commissions</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight">
                  Make a Direct Bank Transfer
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 font-light mt-1 max-w-xl">
                  Transfer directly to our registered Nigerian NGO accounts via your bank mobile app or USSD. Specify what you are giving towards below to generate your transfer narration.
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-2">
                <span className="px-3 py-1.5 rounded-xl bg-emerald-400/20 text-emerald-300 border border-emerald-400/30 text-xs font-mono font-bold">
                  CAC / NGO Registered 2015
                </span>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-10 bg-[#fdfbf7] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT: Step 1 — Select Purpose & Suggested Narration */}
            <div className="lg:col-span-5 space-y-4">
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-vhh-green-900 flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-vhh-green-700" />
                <span>1. What would you like this gift to cover?</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
                {purposeOptions.map((opt, i) => {
                  const isSelected = selectedPurpose === opt.label;
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setSelectedPurpose(opt.label)}
                      className={`text-left p-3 rounded-2xl text-xs font-semibold transition-all border flex items-center justify-between gap-2 ${
                        isSelected
                          ? 'bg-vhh-green-900 text-white border-vhh-green-800 shadow-sm'
                          : 'bg-white text-stone-700 border-stone-200 hover:border-vhh-green-600 hover:bg-stone-50'
                      }`}
                    >
                      <span className="truncate">{opt.label}</span>
                      {isSelected && <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />}
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Narration Generator */}
              <div className="p-4 rounded-2xl bg-emerald-50/90 border border-emerald-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <span className="font-mono text-[10px] uppercase font-bold text-emerald-800 block">
                    Your Bank Transfer Narration / Remark:
                  </span>
                  <span className="font-mono font-bold text-vhh-green-950 text-sm">
                    {currentTag} - [YOUR NAME]
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard(currentTag, 'narration-inline')}
                  className="inline-flex items-center justify-center gap-1 px-3 py-1.5 rounded-xl bg-white border border-emerald-300 text-emerald-800 text-xs font-semibold hover:bg-emerald-100 transition-colors shadow-2xs shrink-0"
                >
                  {copiedField === 'narration-inline' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Narration</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* RIGHT: Step 2 — Foundation Account Numbers & Instant WhatsApp Receipt */}
            <div className="lg:col-span-7 space-y-4">
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-vhh-green-900 flex items-center gap-1.5">
                <Landmark className="w-3.5 h-3.5 text-vhh-green-700" />
                <span>2. Foundation Bank Account Details:</span>
              </label>

              <div className="space-y-3">
                {bankAccounts.map((acct, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-stone-200/90 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-vhh-green-600 transition-colors"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-bold text-vhh-green-900">
                          {acct.bank}
                        </span>
                        <span className="text-[10px] font-mono uppercase bg-stone-100 px-2 py-0.5 rounded text-stone-600">
                          {acct.type}
                        </span>
                      </div>
                      
                      <div className="text-xs text-stone-500 font-medium">
                        Account Name: <strong className="text-vhh-charcoal">{acct.accountName}</strong>
                      </div>

                      <div className="font-mono text-lg font-extrabold text-stone-900 tracking-wider mt-1">
                        {acct.accountNumber}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => copyToClipboard(acct.accountNumber, `acct-inline-${idx}`)}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-vhh-green-900 text-white text-xs font-semibold hover:bg-vhh-green-800 transition-colors shadow-xs shrink-0"
                    >
                      {copiedField === `acct-inline-${idx}` ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-300" />
                          <span>Account Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Copy Account Number</span>
                        </>
                      )}
                    </button>
                  </div>
                ))}
              </div>

              {/* Step 3: WhatsApp Receipt Notification */}
              <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <a
                  href={`https://wa.me/2349019303646?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] text-white text-xs sm:text-sm font-bold hover:bg-[#20bd5a] transition-colors shadow-xs"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Notify VHH on WhatsApp (Send Transfer Receipt)</span>
                </a>

                <div className="flex items-center gap-2 text-xs text-stone-500 text-center sm:text-right">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Official Receipts Issued Upon Confirmation</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
