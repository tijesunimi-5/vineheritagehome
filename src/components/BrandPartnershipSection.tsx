'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Handshake, 
  Baby, 
  Award, 
  Eye, 
  Camera, 
  Users, 
  MessageSquare, 
  Mail, 
  ShieldCheck, 
  ArrowRight,
  PackageCheck,
  CheckCircle2
} from 'lucide-react';
import { VHH_DATA } from '@/data/vhhData';

export const BrandPartnershipSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const brandBenefits = [
    {
      icon: Award,
      title: "CAC-Certified CSR Impact Reporting",
      desc: "Receive official NGO partnership verification and ESG documentation for corporate regulatory filings and tax-deductible social impact reports."
    },
    {
      icon: Eye,
      title: "Featured on Official Partner Marquee",
      desc: "Prominent placement on our high-traffic website partner strip alongside international partners like the European Union and ActionAid Nigeria."
    },
    {
      icon: Camera,
      title: "Authentic Documentary Photo/Video Assets",
      desc: "High-resolution, dignified documentary imagery and video storytelling showcasing your brand directly safeguarding vulnerable children in Nigeria."
    },
    {
      icon: Users,
      title: "Exclusive Corporate Volunteer Days",
      desc: "Host corporate team-building retreats and employee volunteering days at our Kuje residential sanctuary to spend joyful time with our 239 children."
    }
  ];

  const targetAlliances = [
    {
      title: "Diaper & Baby Hygiene Alliance",
      badge: "High-Impact Priority",
      desc: "Calling diaper brands (Molfix, Huggies, Pampers, Bebem, Softcare) and distributors. A monthly pallet or carton allocation ensures 24/7 dry comfort for our infants and frees massive funds for emergency healthcare.",
      icon: Baby,
      color: "border-amber-300 bg-amber-50 text-amber-900"
    },
    {
      title: "FMCG Food & Dairy Alliances",
      badge: "Nutrition Partner",
      desc: "Producers of baby formula, powdered milk, 50kg rice, vegetable oil, tomato paste, noodles, and flour. Bulk monthly supplies feed 239 children 3 hot meals daily.",
      icon: PackageCheck,
      color: "border-emerald-300 bg-emerald-50 text-emerald-900"
    },
    {
      title: "Feminine Hygiene & Toiletries",
      badge: "Dignity Partner",
      desc: "Manufacturers of sanitary pads, laundry detergents, antiseptic soaps, and toothpaste to sustain dignity for our adolescent girls and boys.",
      icon: ShieldCheck,
      color: "border-rose-300 bg-rose-50 text-rose-900"
    }
  ];

  const partnershipWhatsappMessage = encodeURIComponent(
    "Hello Vine Heritage Home, I represent a brand / company interested in discussing a product partnership (such as diaper, food, or hygiene product allocation). Kindly connect me with your partnership team."
  );

  return (
    <section 
      id="brand-partnerships" 
      aria-label="Brand and Corporate Product Partnerships"
      className="py-16 sm:py-24 bg-[#0e2119] text-white relative overflow-hidden scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-400/20 text-emerald-300 border border-emerald-400/30 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <Handshake className="w-3.5 h-3.5 text-emerald-400" />
            <span>Corporate Product Alliances &bull; CSR</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Partner With Us: <br />
            <span className="italic font-normal text-emerald-300">
              Turn Your Products Into Lifelines.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-stone-300 font-light leading-relaxed">
            We actively seek long-term product supply alliances with Nigerian and global manufacturers, FMCG brands, and distributors. Supplying our 239 children directly with monthly goods creates extraordinary mutual value.
          </p>
        </div>

        {/* Highlighted Priority Alliances */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {targetAlliances.map((alliance, idx) => {
            const IconComp = alliance.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.45, delay: shouldReduceMotion ? 0 : idx * 0.1 }}
                className="p-6 sm:p-7 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col justify-between hover:border-emerald-400/50 transition-colors group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300 group-hover:scale-105 transition-transform">
                      <IconComp className="w-5 h-5 text-emerald-300" />
                    </div>

                    <span className={`px-2.5 py-1 rounded-md text-[10px] font-mono uppercase font-bold tracking-wider ${alliance.color}`}>
                      {alliance.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    {alliance.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                    {alliance.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* What Brands Receive In Return (Value Proposition) */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white/5 border border-white/15 backdrop-blur-md">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold block mb-1">
              THE VALUE EXCHANGE
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              What Your Brand Receives in Return
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 font-light mt-2 leading-relaxed">
              We understand partnerships must be mutually rewarding. When your organization commits to ongoing or one-time product allocations, we champion your brand across our institutional and public platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {brandBenefits.map((ben, bIdx) => {
              const IconComp = ben.icon;
              return (
                <div key={bIdx} className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-emerald-400/15 border border-emerald-400/30 flex items-center justify-center text-emerald-300 mb-3">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-base font-bold text-white">
                    {ben.title}
                  </h4>
                  <p className="text-xs text-stone-300 font-light leading-relaxed">
                    {ben.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Direct CTA Bar for Brand CSR Officers */}
          <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <p className="text-xs sm:text-sm text-stone-200 font-light">
                Ready to allocate monthly cartons or discuss a customized CSR partnership?
              </p>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={`https://wa.me/2349019303646?text=${partnershipWhatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] text-white text-xs sm:text-sm font-bold hover:bg-[#20bd5a] transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Message CSR Desk</span>
              </a>

              <a
                href={`mailto:${VHH_DATA.brand.email}?subject=Corporate%20Product%20Partnership%20Inquiry%20-%20Vine%20Heritage%20Home`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold transition-colors border border-white/20"
              >
                <Mail className="w-4 h-4 text-emerald-300" />
                <span>Email Us</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
