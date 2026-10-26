'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Heart, 
  Landmark, 
  Copy, 
  Check, 
  MessageSquare, 
  MapPin, 
  ShieldCheck,
  Tag,
  CheckCircle2
} from 'lucide-react';
import { VHH_DATA } from '@/data/vhhData';

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPurpose?: string;
}

export const SupportModal: React.FC<SupportModalProps> = ({ 
  isOpen, 
  onClose,
  defaultPurpose = "Food & Nutrition (239 Children)"
}) => {
  const [selectedPurpose, setSelectedPurpose] = useState<string>(defaultPurpose);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  if (!isOpen) return null;

  const purposes = [
    { id: "food", label: "🍲 Food & Nutrition (239 Children)", tag: "VHH FOOD" },
    { id: "school", label: "🎓 School Fees & Education", tag: "VHH SCHOOL FEES" },
    { id: "medical", label: "🩺 Medical Care & Clinic Bills", tag: "VHH MEDICAL" },
    { id: "bus", label: "🚌 School Bus & Transport Fuel", tag: "VHH BUS FUEL" },
    { id: "solar", label: "💡 Solar Power & Compound Care", tag: "VHH FACILITIES" },
    { id: "general", label: "❤️ General Sanctuary Care", tag: "VHH GENERAL" },
  ];

  const currentTag = purposes.find(p => p.label === selectedPurpose)?.tag || "VHH SUPPORT";

  // Official Nigerian Bank Accounts
  const bankAccounts = [
    {
      bankName: "Zenith Bank Plc",
      accountName: "Vine Heritage Home Foundation",
      accountNumber: "1016849302",
      type: "NGN Operating Account",
      isPrimary: true
    },
    {
      bankName: "First Bank of Nigeria",
      accountName: "Vine Heritage Home Foundation",
      accountNumber: "2038472910",
      type: "NGN Project & Care Account",
      isPrimary: false
    }
  ];

  const copyToClipboard = (text: string, fieldId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldId);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Vine Heritage Home, I would like to make / have made a bank transfer in support of: ${selectedPurpose}. Kindly confirm receipt. Thank you!`
  );

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/80 backdrop-blur-sm overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-xl rounded-3xl bg-[#fbf9f5] text-vhh-charcoal shadow-2xl overflow-hidden border border-stone-200 my-6"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-vhh-green-950 via-vhh-green-900 to-vhh-green-800 p-6 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-vhh-green-700/80 border border-emerald-400/40 flex items-center justify-center text-white shrink-0">
                <Landmark className="w-5 h-5 text-emerald-200" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold tracking-tight">
                  Direct Bank Transfer
                </h3>
                <p className="text-xs text-emerald-200/90 font-light">
                  Vine Heritage Home Foundation &bull; CAC Registered NGO
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 text-stone-300 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            
            {/* STEP 1: What is this transfer for? */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-vhh-green-900 mb-2.5 flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-vhh-green-700" />
                <span>1. What would you like your transfer to support?</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {purposes.map((p) => {
                  const isSelected = selectedPurpose === p.label;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setSelectedPurpose(p.label)}
                      className={`text-left p-2.5 rounded-xl text-xs font-semibold transition-all border flex items-center justify-between gap-2 ${
                        isSelected
                          ? 'bg-vhh-green-900 text-white border-vhh-green-800 shadow-sm'
                          : 'bg-white text-stone-700 border-stone-200 hover:border-vhh-green-600 hover:bg-stone-50'
                      }`}
                    >
                      <span className="truncate">{p.label}</span>
                      {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300 shrink-0" />}
                    </button>
                  );
                })}
              </div>

              {/* Transfer Narration Helper */}
              <div className="mt-3 p-3 rounded-xl bg-emerald-50/80 border border-emerald-200 flex items-center justify-between gap-3 text-xs">
                <div>
                  <span className="font-mono text-[10px] uppercase font-bold text-emerald-800 block">
                    Suggested Narration / Remark:
                  </span>
                  <span className="font-mono font-bold text-vhh-green-950">
                    {currentTag} - [Your Name]
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(`${currentTag}`, 'narration')}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-emerald-300 text-emerald-800 text-[11px] font-semibold hover:bg-emerald-100 transition-colors shadow-2xs"
                >
                  {copiedField === 'narration' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Copied</span>
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

            {/* STEP 2: Official Bank Accounts */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-vhh-green-900 mb-2.5 flex items-center gap-1.5">
                <Landmark className="w-3.5 h-3.5 text-vhh-green-700" />
                <span>2. Official Foundation Bank Accounts:</span>
              </label>

              <div className="space-y-3">
                {bankAccounts.map((account, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-2xl bg-white border border-stone-200/90 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-vhh-green-600 transition-colors"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-vhh-green-900">
                          {account.bankName}
                        </span>
                        <span className="text-[10px] font-mono uppercase bg-stone-100 px-2 py-0.5 rounded text-stone-600">
                          {account.type}
                        </span>
                      </div>
                      
                      <div className="text-xs text-stone-500 font-medium">
                        Account Name: <strong className="text-vhh-charcoal">{account.accountName}</strong>
                      </div>

                      <div className="font-mono text-base font-extrabold text-stone-900 tracking-wider mt-1">
                        {account.accountNumber}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => copyToClipboard(account.accountNumber, `acct-${index}`)}
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-vhh-green-900 text-white text-xs font-semibold hover:bg-vhh-green-800 transition-colors shadow-xs shrink-0"
                    >
                      {copiedField === `acct-${index}` ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-300" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Account</span>
                        </>
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* STEP 3: Notify via WhatsApp or Physical Drop-off */}
            <div className="pt-2 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <a
                href={`https://wa.me/2349019303646?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] text-white text-xs font-bold hover:bg-[#20bd5a] transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Notify VHH on WhatsApp</span>
              </a>

              <div className="flex items-center gap-2 text-[11px] text-stone-500 text-center sm:text-right">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% of funds go directly to child sustenance.</span>
              </div>
            </div>

            {/* Physical Food / Goods Drop-off Note */}
            <div className="p-3.5 rounded-xl bg-stone-100 text-stone-600 text-[11px] flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-vhh-green-800 shrink-0 mt-0.5" />
              <div>
                <strong>Physical Goods Drop-Off:</strong> You can also deliver bags of food, toiletries, or clothes in person to our home at: <span className="font-mono font-semibold text-stone-800">Kuje, Federal Capital Territory, Abuja</span>. Call <span className="font-mono font-semibold">09019303646</span> for assistance.
              </div>
            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
