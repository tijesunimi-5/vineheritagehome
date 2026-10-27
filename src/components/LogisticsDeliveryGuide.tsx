'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Truck, 
  MapPin, 
  Phone, 
  Copy, 
  Check, 
  MessageSquare, 
  ShieldCheck, 
  ShoppingBag, 
  ExternalLink,
  Clock
} from 'lucide-react';
import { VHH_DATA } from '@/data/vhhData';

export const LogisticsDeliveryGuide: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const deliveryAddress = "Vine Heritage Home Foundation, Kuje, Federal Capital Territory, Abuja, Nigeria";
  const primaryPhone = "09019303646";
  const alternatePhone = "080344229935";

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(id);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const whatsappLogisticsMessage = encodeURIComponent(
    "Hello Vine Heritage Home, I would like to send / have dispatched an in-kind package via logistics to your home in Kuje, Abuja. Here are the delivery details: "
  );

  const steps = [
    {
      step: "01",
      icon: ShoppingBag,
      title: "Procure Items Anywhere",
      desc: "Buy provisions directly from local markets (Wuse Market, Kuje Market), wholesale supermarkets, or order online via Jumia, Konga, or local Abuja delivery vendors."
    },
    {
      step: "02",
      icon: Truck,
      title: "Dispatch to Kuje, Abuja",
      desc: "Use any courier or delivery service (GIG Logistics, DHL, FedEx, Peace Mass, ABC Transport, city dispatch riders, or personal vehicle delivery)."
    },
    {
      step: "03",
      icon: MessageSquare,
      title: "Share Waybill on WhatsApp",
      desc: "Send us the driver phone number, delivery company, or waybill tracking number so our logistics receiving team is ready to inspect and receive your package."
    }
  ];

  return (
    <section 
      id="logistics-guide" 
      aria-label="How to Send Physical Goods via Logistics"
      className="py-16 sm:py-20 bg-white text-vhh-charcoal border-b border-stone-200 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-vhh-green-50 border border-vhh-green-200 text-vhh-green-900 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Truck className="w-3.5 h-3.5 text-vhh-green-700" />
            <span>Direct In-Kind &amp; Courier Logistics</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-vhh-charcoal leading-tight">
            How to Send Physical Items. <br />
            <span className="italic font-normal text-vhh-green-800">
              Direct Courier Delivery Straight to Our Gates.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-stone-600 font-light leading-relaxed">
            Market prices fluctuate constantly, which is why we encourage direct in-kind gifts. You don&rsquo;t have to be in Abuja to support—you can buy items anywhere in Nigeria or abroad and have them dispatched directly to our home in Kuje.
          </p>
        </div>

        {/* 3 Step Workflow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {steps.map((st, idx) => {
            const IconComp = st.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.45, delay: shouldReduceMotion ? 0 : idx * 0.1 }}
                className="p-6 sm:p-7 rounded-3xl bg-[#fbf9f5] border border-stone-200/90 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-9 h-9 rounded-xl bg-vhh-green-900 text-white font-mono text-xs font-bold flex items-center justify-center shadow-xs">
                      {st.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-800">
                      <IconComp className="w-5 h-5 text-emerald-700" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-vhh-charcoal mb-2">
                    {st.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Verified Delivery Destination Card */}
        <div className="rounded-3xl bg-gradient-to-br from-vhh-green-950 via-vhh-green-900 to-stone-900 text-white p-6 sm:p-10 shadow-xl overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Address & Driver Receiving Instructions */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 backdrop-blur-md text-[11px] font-mono uppercase font-bold tracking-wider text-emerald-300 border border-white/20">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>Official Waybill Destination</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-snug">
                Destination Address for Drivers &amp; Couriers:
              </h3>

              {/* Copyable Address Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-emerald-300 font-bold block">
                    Recipient: Vine Heritage Home Foundation
                  </span>
                  <p className="text-sm sm:text-base font-medium text-stone-100">
                    {deliveryAddress}
                  </p>
                  <p className="text-xs text-stone-300 font-light">
                    Landmark: Kuje, Federal Capital Territory, Abuja &bull; Call receiving team on approach
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard(deliveryAddress, 'address')}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white text-vhh-green-950 text-xs font-bold hover:bg-emerald-50 transition-colors shadow-xs shrink-0"
                >
                  {copiedField === 'address' ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-700" />
                      <span>Address Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>

              {/* Driver Phone Lines */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <span className="text-[10px] font-mono uppercase text-stone-400 block">Primary Dispatch Line:</span>
                      <span className="font-mono text-sm font-bold text-white">{primaryPhone}</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(primaryPhone, 'p1')}
                    className="p-1.5 rounded-lg hover:bg-white/10 text-stone-300 hover:text-white transition-colors"
                    aria-label="Copy primary phone"
                  >
                    {copiedField === 'p1' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <span className="text-[10px] font-mono uppercase text-stone-400 block">Alternative Line:</span>
                      <span className="font-mono text-sm font-bold text-white">{alternatePhone}</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(alternatePhone, 'p2')}
                    className="p-1.5 rounded-lg hover:bg-white/10 text-stone-300 hover:text-white transition-colors"
                    aria-label="Copy alternate phone"
                  >
                    {copiedField === 'p2' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Right: WhatsApp Notification CTA */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-300 mb-2">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span>Receiving Hours</span>
                </div>
                <p className="text-xs text-stone-200 leading-relaxed font-light">
                  Gate team is on duty daily from <strong>8:00 AM – 6:00 PM</strong> (Monday through Sunday) to inspect, offload, and acknowledge shipments.
                </p>
              </div>

              <div className="pt-3 border-t border-white/15 space-y-3">
                <a
                  href={`https://wa.me/2349019303646?text=${whatsappLogisticsMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#25D366] text-white text-xs sm:text-sm font-bold hover:bg-[#20bd5a] transition-colors shadow-md"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Share Waybill on WhatsApp</span>
                </a>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-stone-300 text-center font-light">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Photo receipt issued upon package arrival</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
