'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Handshake, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { PlaceholderBadge } from './PlaceholderBadge';

interface VolunteerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VolunteerModal: React.FC<VolunteerModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    type: 'Corporate Partnership',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-vhh-dark/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-xl rounded-3xl bg-white text-vhh-charcoal shadow-2xl overflow-hidden border border-vhh-green-900/20 my-8"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-vhh-green-950 via-vhh-green-900 to-vhh-green-800 p-6 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-vhh-green-700 flex items-center justify-center border border-emerald-400/40">
                <Handshake className="w-5 h-5 text-emerald-300" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold">Partner / Visit / Volunteer</h3>
                <p className="text-xs text-emerald-200">Institutional Collaboration Portal</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 text-stone-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 sm:p-8">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-vhh-muted mb-1">
                    Full Name / Title
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Amina Bello"
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:ring-2 focus:ring-vhh-green-700 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-vhh-muted mb-1">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. amina@organization.org"
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:ring-2 focus:ring-vhh-green-700 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-vhh-muted mb-1">
                    Organization / Company (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. Horizon Foundation / Individual"
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:ring-2 focus:ring-vhh-green-700 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-vhh-muted mb-1">
                    Engagement Category
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:ring-2 focus:ring-vhh-green-700 focus:outline-none bg-white font-medium"
                  >
                    <option>Corporate Partnership</option>
                    <option>NGO & Humanitarian Collaboration</option>
                    <option>Volunteer Skill Contribution</option>
                    <option>In-Kind Item Donation</option>
                    <option>Schedule Official Campus Visit</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-vhh-muted mb-1">
                    Proposal / Inquiry Message
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share how you or your organization would like to partner with Vine Heritage Home..."
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:ring-2 focus:ring-vhh-green-700 focus:outline-none"
                  />
                </div>

                <div className="p-3 rounded-xl bg-vhh-warm border border-stone-200 text-xs text-vhh-muted flex items-center justify-between">
                  <span>Contact Route Placeholder:</span>
                  <PlaceholderBadge text="[PARTNERSHIP DESK EMAIL]" />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-vhh-green-800 text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-vhh-green-700 transition-all flex items-center justify-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Submit Partnership Proposal</span>
                </button>

              </form>
            ) : (
              <div className="text-center py-8 space-y-6">
                <div className="w-16 h-16 rounded-full bg-vhh-green-100 text-vhh-green-800 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div>
                  <h4 className="font-serif text-2xl font-bold text-vhh-charcoal">
                    Inquiry Received
                  </h4>
                  <p className="text-sm text-vhh-muted mt-2 max-w-md mx-auto">
                    Thank you, {formData.name}. Your partnership inquiry has been logged in this prototype. Upon production deployment, notifications will route directly to the VHH Executive Office.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-3 rounded-xl bg-vhh-green-800 text-white font-bold text-xs uppercase tracking-wider"
                >
                  Close Window
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
