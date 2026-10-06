'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GalleryItem } from '@/data/vhhData';
import { X, ShieldCheck, Sparkles, MapPin } from 'lucide-react';

interface GalleryModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-vhh-dark/90 backdrop-blur-xl overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="relative w-full max-w-4xl rounded-3xl bg-vhh-green-950 text-white shadow-2xl overflow-hidden border border-vhh-green-700/60 my-6"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-vhh-dark/80 text-white hover:bg-vhh-red-600 transition-colors shadow-lg"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Image Viewer */}
          <div className="relative h-96 sm:h-[480px] bg-vhh-dark overflow-hidden">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-vhh-green-950 via-transparent to-transparent" />
          </div>

          {/* Details Content */}
          <div className="p-6 sm:p-8 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-vhh-green-800 text-emerald-300 border border-emerald-600/40">
                {item.categoryLabel}
              </span>

              {item.isDevelopment && (
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-vhh-red-600 text-white flex items-center gap-1.5 shadow-md">
                  <Sparkles className="w-3.5 h-3.5" />
                  Active Construction & Expansion Zone
                </span>
              )}
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              {item.title}
            </h3>

            <p className="text-sm text-stone-300 font-light leading-relaxed">
              {item.caption}
            </p>

            <div className="pt-4 border-t border-vhh-green-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-stone-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Vine Heritage Home Campus &bull; Nigeria</span>
              </div>

              <div className="flex items-center gap-1.5 text-amber-300">
                <ShieldCheck className="w-4 h-4" />
                <span>Child Dignity & Consent Verified</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
