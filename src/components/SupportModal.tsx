'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, ShieldCheck, CreditCard, Landmark, CheckCircle, AlertCircle } from 'lucide-react';
import { PlaceholderBadge } from './PlaceholderBadge';

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SupportModal: React.FC<SupportModalProps> = ({ isOpen, onClose }) => {
  const [currency, setCurrency] = useState<'NGN' | 'USD' | 'GBP'>('NGN');
  const [amount, setAmount] = useState<string>('25000');
  const [paymentMethod, setPaymentMethod] = useState<'bank' | 'card'>('bank');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const presets = {
    NGN: ['10000', '25000', '50000', '100000', '500000'],
    USD: ['25', '50', '100', '250', '1000'],
    GBP: ['20', '45', '85', '200', '800'],
  };

  const currencySymbol = currency === 'NGN' ? '₦' : currency === 'USD' ? '$' : '£';

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
          {/* Top Banner Header */}
          <div className="bg-gradient-to-r from-vhh-green-950 via-vhh-green-900 to-vhh-green-800 p-6 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-vhh-green-700 flex items-center justify-center border border-emerald-400/40">
                <Heart className="w-5 h-5 text-vhh-red-500 fill-vhh-red-500" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold">Support Vine Heritage Home</h3>
                <p className="text-xs text-emerald-200">Official Donation & Sponsorship Portal</p>
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
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Currency Selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-vhh-muted mb-2">
                    Select Currency
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['NGN', 'USD', 'GBP'] as const).map((curr) => (
                      <button
                        key={curr}
                        type="button"
                        onClick={() => {
                          setCurrency(curr);
                          setAmount(presets[curr][1]);
                        }}
                        className={`py-2 rounded-xl text-xs font-bold transition-all border ${
                          currency === curr
                            ? 'bg-vhh-green-800 text-white border-vhh-green-700 shadow-md'
                            : 'bg-stone-100 text-vhh-charcoal border-stone-200 hover:bg-stone-200'
                        }`}
                      >
                        {curr} ({curr === 'NGN' ? '₦' : curr === 'USD' ? '$' : '£'})
                      </button>
                    ))}
                  </div>
                </div>

                {/* Amount Presets */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-vhh-muted mb-2">
                    Select Contribution Amount
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mb-3">
                    {presets[currency].map((val) => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => setAmount(val)}
                        className={`py-2.5 rounded-xl text-xs font-bold transition-all border ${
                          amount === val
                            ? 'bg-vhh-green-800 text-white border-vhh-green-700 shadow-md'
                            : 'bg-vhh-warm text-vhh-charcoal border-stone-200 hover:bg-stone-200'
                        }`}
                      >
                        {currencySymbol}{Number(val).toLocaleString()}
                      </button>
                    ))}
                  </div>

                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-vhh-muted">
                      {currencySymbol}
                    </span>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="Custom amount"
                      className="w-full pl-9 pr-4 py-3 rounded-xl border border-stone-300 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-vhh-green-700"
                    />
                  </div>
                </div>

                {/* Payment Method Toggle */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-vhh-muted mb-2">
                    Fulfillment Method
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('bank')}
                      className={`p-3 rounded-xl text-left border flex items-center gap-3 transition-all ${
                        paymentMethod === 'bank'
                          ? 'bg-vhh-green-50 border-vhh-green-700 text-vhh-green-900 shadow-sm'
                          : 'bg-stone-50 border-stone-200 text-vhh-muted'
                      }`}
                    >
                      <Landmark className="w-5 h-5 text-vhh-green-700" />
                      <div>
                        <p className="text-xs font-bold">Direct Bank Transfer</p>
                        <p className="text-[10px] opacity-80">Official VHH Bank Account</p>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`p-3 rounded-xl text-left border flex items-center gap-3 transition-all ${
                        paymentMethod === 'card'
                          ? 'bg-vhh-green-50 border-vhh-green-700 text-vhh-green-900 shadow-sm'
                          : 'bg-stone-50 border-stone-200 text-vhh-muted'
                      }`}
                    >
                      <CreditCard className="w-5 h-5 text-vhh-green-700" />
                      <div>
                        <p className="text-xs font-bold">Online Gateway</p>
                        <p className="text-[10px] opacity-80">Paystack / Flutterwave</p>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Placeholder Notice Box */}
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs leading-relaxed space-y-2">
                  <div className="flex items-center gap-2 font-bold">
                    <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
                    <span>Official Bank Account Details Placeholder</span>
                  </div>
                  <p>
                    For actual donation processing, verified VHH bank accounts (e.g., Zenith Bank / GTBank NGN/USD Domiciliary) will be displayed here:
                  </p>
                  <div className="font-mono bg-amber-100/80 p-2 rounded border border-amber-300 font-bold">
                    <PlaceholderBadge text="[VHH OFFICIAL BANK ACCOUNT & IBAN PLACEHOLDER]" />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-vhh-green-800 text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-vhh-green-700 transition-all flex items-center justify-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Proceed with {currencySymbol}{Number(amount || 0).toLocaleString()} Contribution</span>
                </button>

              </form>
            ) : (
              <div className="text-center py-8 space-y-6">
                <div className="w-16 h-16 rounded-full bg-vhh-green-100 text-vhh-green-800 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <div>
                  <h4 className="font-serif text-2xl font-bold text-vhh-charcoal">
                    Prototype Contribution Recorded
                  </h4>
                  <p className="text-sm text-vhh-muted mt-2 max-w-md mx-auto">
                    Thank you! This is an interactive presentation prototype for Vine Heritage Home leadership. Official payment keys and bank details will be linked upon board deployment.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-3 rounded-xl bg-vhh-green-800 text-white font-bold text-xs uppercase tracking-wider"
                >
                  Return to Website
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
