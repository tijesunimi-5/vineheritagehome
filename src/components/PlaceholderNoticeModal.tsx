'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldAlert, FileCheck, CheckCircle2, Info } from 'lucide-react';

interface PlaceholderNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PlaceholderNoticeModal: React.FC<PlaceholderNoticeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-vhh-dark/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-xl rounded-3xl bg-white text-vhh-charcoal shadow-2xl overflow-hidden border border-amber-300 my-6"
        >
          {/* Header */}
          <div className="bg-amber-900 p-6 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-800 flex items-center justify-center border border-amber-600">
                <ShieldAlert className="w-5 h-5 text-amber-200" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold">Leadership Verification Guide</h3>
                <p className="text-xs text-amber-200 font-mono">Vine Heritage Home Governance Protocol</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 text-stone-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-sm leading-relaxed flex items-start gap-3">
              <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">Zero Fabrication Guarantee:</span>
                <p className="mt-1 text-xs text-amber-800">
                  In strict accordance with product design directives, no statistics, dates, or stories have been invented for Vine Heritage Home. Clear <span className="font-mono bg-amber-200 px-1 py-0.5 rounded text-amber-950 font-bold">[PLACEHOLDER]</span> tags are used across the site.
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-serif font-bold text-lg text-vhh-charcoal mb-3">
                How Board Members & Leadership Can Replace Placeholders:
              </h4>

              <div className="space-y-3 text-xs text-vhh-charcoal font-medium">
                <div className="p-3 rounded-xl bg-vhh-warm border border-stone-200 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-vhh-green-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-vhh-green-900">Step 1: Data Audit</span>
                    <p className="text-vhh-muted text-[11px]">Toggle "Review Mode" in the navigation bar to highlight all required verification tags.</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-vhh-warm border border-stone-200 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-vhh-green-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-vhh-green-900">Step 2: Update Data Store</span>
                    <p className="text-vhh-muted text-[11px]">All placeholder values are centralized in <span className="font-mono text-vhh-green-800 font-bold">src/data/vhhData.ts</span> for single-file content updating.</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-vhh-warm border border-stone-200 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-vhh-green-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-vhh-green-900">Step 3: CMS & Production Launch</span>
                    <p className="text-vhh-muted text-[11px]">Connect the Next.js frontend to VHH's backend/CMS when ready for public launch.</p>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3.5 rounded-xl bg-vhh-green-800 text-white font-bold text-xs uppercase tracking-wider hover:bg-vhh-green-700 transition-colors"
            >
              Continue Exploring Prototype
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
