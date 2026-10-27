'use client';

import React from 'react';
import { Heart, Coins, CheckCircle2, Gift, Smile } from 'lucide-react';

interface NoGiftTooSmallBannerProps {
  onOpenSupport?: (purpose?: string) => void;
}

export const NoGiftTooSmallBanner: React.FC<NoGiftTooSmallBannerProps> = ({ onOpenSupport }) => {
  return (
    <section 
      aria-label="No Gift is Too Small Assurance" 
      className="relative -mt-6 sm:-mt-8 z-20 max-w-6xl mx-auto px-4 sm:px-8"
    >
      <div className="bg-white rounded-3xl border border-stone-200/90 shadow-lg p-6 sm:p-8 lg:p-10 relative overflow-hidden">
        
        {/* Soft Background Accent */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-50/70 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-50/70 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

        <div className="relative z-10">
          
          {/* Header Badge & Title */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-100">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-semibold tracking-wide mb-2.5">
                <Heart className="w-3.5 h-3.5 text-emerald-700 fill-emerald-100" />
                <span>A Personal Note to Every Supporter &bull; Our Giving Ethos</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-vhh-charcoal tracking-tight">
                No Gift Is Too Small. <span className="italic font-normal text-vhh-green-800">Every Single Seed Counts.</span>
              </h2>
            </div>

            <div className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-stone-600">
              <Smile className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>Received with heartfelt prayers and joy</span>
            </div>
          </div>

          {/* Deeply Reassuring Message */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-3.5 text-stone-600 text-sm sm:text-base font-light leading-relaxed">
              <p>
                Providing food, accredited education, and 24/7 medical security for <strong>239 rescued children</strong> requires millions of Naira monthly. Our needs are undeniably large and expensive, and we are transparent about that scale so society understands the magnitude of what it takes.
              </p>
              <p className="text-stone-800 font-normal">
                <strong>Please never let that scale intimidate you.</strong> Whether you are a student, an everyday earner, or in a tight financial season, your support is precious. Donating a single packet of pens, a crate of eggs, a carton of noodles, or sending <strong>&#8358;1,000, &#8358;2,000, or &#8358;5,000</strong> directly feeds, clothes, or protects a real child.
              </p>
              <p className="text-xs text-stone-500 italic">
                &ldquo;Do not withhold good from those to whom it is due, when it is in your power to act.&rdquo; Every gift is received with the same boundless thanksgiving.
              </p>
            </div>

            {/* Quick Micro-Impact Cards */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs mb-2">
                    &#8358;2,000
                  </div>
                  <h4 className="font-serif font-bold text-xs text-vhh-charcoal">
                    Classroom Books &amp; Pens
                  </h4>
                  <p className="text-[11px] text-stone-500 font-light mt-1">
                    Buys exercise books and pens for a student&rsquo;s new academic term.
                  </p>
                </div>
                <div className="mt-3 flex items-center gap-1 text-[10px] font-semibold text-emerald-800">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>Immediate Academic Impact</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-xs mb-2">
                    &#8358;5,000
                  </div>
                  <h4 className="font-serif font-bold text-xs text-vhh-charcoal">
                    Crate of Eggs / Noodles
                  </h4>
                  <p className="text-[11px] text-stone-500 font-light mt-1">
                    Provides brain-building morning protein or quick hot lunches.
                  </p>
                </div>
                <div className="mt-3 flex items-center gap-1 text-[10px] font-semibold text-emerald-800">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>Immediate Nutrition</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-xl bg-rose-100 text-rose-900 flex items-center justify-center font-bold text-xs mb-2">
                    &#8358;10,000
                  </div>
                  <h4 className="font-serif font-bold text-xs text-vhh-charcoal">
                    Sanitary Pads &amp; Toiletries
                  </h4>
                  <p className="text-[11px] text-stone-500 font-light mt-1">
                    Protects two adolescent girls with sanitary kits for their full monthly cycles.
                  </p>
                </div>
                <div className="mt-3 flex items-center gap-1 text-[10px] font-semibold text-emerald-800">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>Dignity for Teen Girls</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center font-bold text-xs mb-2">
                    Any Size
                  </div>
                  <h4 className="font-serif font-bold text-xs text-vhh-charcoal">
                    In-Kind Farm Produce
                  </h4>
                  <p className="text-[11px] text-stone-500 font-light mt-1">
                    Even a small basket of fresh tomatoes or yams directly nourishes a pot.
                  </p>
                </div>
                <div className="mt-3 flex items-center gap-1 text-[10px] font-semibold text-emerald-800">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>Every Gift Welcomed</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
