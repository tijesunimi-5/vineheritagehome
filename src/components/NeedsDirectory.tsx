'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  Baby, 
  Users, 
  Utensils, 
  GraduationCap, 
  HeartPulse, 
  Sun, 
  Bus, 
  Heart, 
  Sparkles, 
  CheckCircle2, 
  Package, 
  Copy, 
  Check, 
  ArrowRight, 
  Wind, 
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

interface NeedsDirectoryProps {
  onDonateCategory?: (categoryTag: string) => void;
  onOpenLogistics?: () => void;
}

export const NeedsDirectory: React.FC<NeedsDirectoryProps> = ({ 
  onDonateCategory,
  onOpenLogistics 
}) => {
  const shouldReduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState<string>("newborns");
  const [copiedItemId, setCopiedItemId] = useState<string | null>(null);

  const categories = [
    {
      id: "newborns",
      label: "Newborns & Infants",
      ageBracket: "0 – 2 Years",
      icon: Baby,
      badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
      consumptionSummary: "Rescued infants arrive needing immediate maternal nursing care. A single newborn consumes 8–10 diapers daily plus specialized infant formula every 3 hours. With multiple infants under care, diaper packs and formula tins vanish rapidly.",
      items: [
        {
          id: "nb-1",
          name: "Diapers (Sizes: Newborn, 1, 2, 3, 4)",
          specs: "Huggies, Molfix, Pampers, Bebem or Softcare packs",
          urgency: "Perpetual Daily Need",
          details: "Essential for 24/7 sanitary hygiene, rash prevention, and keeping newly rescued infants dry and comfortable.",
          transferTag: "VHH DIAPERS"
        },
        {
          id: "nb-2",
          name: "Infant Baby Formula Tins",
          specs: "NAN 1 & 2, SMA Gold, Lactogen, My Boy",
          urgency: "Critical Nutrition",
          details: "Over 70% of our infants lost their mothers during childbirth; formula is literally their daily breastmilk replacement.",
          transferTag: "VHH FORMULA"
        },
        {
          id: "nb-3",
          name: "Baby Wipes & Cotton Wool Rolls",
          specs: "Unscented, sensitive skin wipes in bulk cartons",
          urgency: "High Ongoing Need",
          details: "Used at every diaper change to maintain clean skin and prevent pediatric bacterial infections.",
          transferTag: "VHH BABY WIPES"
        },
        {
          id: "nb-4",
          name: "Feeding Bottles, Teats & Electric Sterilizers",
          specs: "BPA-free feeding bottles, replacement teats, steam sterilizers",
          urgency: "Hygiene & Feeding",
          details: "Sterile bottles are cleaned and sanitized round-the-clock for day and night bottle feedings.",
          transferTag: "VHH STERILIZERS"
        },
        {
          id: "nb-5",
          name: "Baby Bathing Soaps, Oils & Rash Ointments",
          specs: "Cussons Baby, Sebamed, Sudocrem, Vaseline petroleum jelly",
          urgency: "Skin Dignity",
          details: "Gentle baby skin care protecting infants against eczema, prickly heat, and diaper irritation.",
          transferTag: "VHH BABY SOAPS"
        },
        {
          id: "nb-6",
          name: "Infant Cots, Mattresses & Swaddling Shawls",
          specs: "Wooden/metal baby cots, firm foam mattresses, cotton blankets",
          urgency: "Rest & Safety",
          details: "Providing safe individual sleeping spaces in the infant nursery under house mother supervision.",
          transferTag: "VHH BABY COTS"
        }
      ]
    },
    {
      id: "toddlers",
      label: "Toddlers & Growing Kids",
      ageBracket: "3 – 11 Years",
      icon: Users,
      badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
      consumptionSummary: "Active, energetic boys and girls playing and growing quickly. Footwear, everyday clothing, and undergarments wear out rapidly with 239 children running and playing daily.",
      items: [
        {
          id: "td-1",
          name: "Everyday Clothes & Sunday Wears (Ages 3–11)",
          specs: "Durable cotton shirts, shorts, trousers, dresses, church outfits",
          urgency: "Ongoing Dignity",
          details: "Clean, well-fitted clothing ensuring children feel dignified, loved, and confident at all times.",
          transferTag: "VHH CHILD CLOTHING"
        },
        {
          id: "td-2",
          name: "Sandals, Crocs & School Shoes (Sizes 26–36)",
          specs: "Durable rubber sandals, black leather school shoes, trainers",
          urgency: "High Wear & Tear",
          details: "With 239 active children playing on our Kuje grounds, shoes require regular replacement.",
          transferTag: "VHH CHILD SHOES"
        },
        {
          id: "td-3",
          name: "Children's Underwear, Singlets & Socks",
          specs: "100% cotton panties, boxers, vests, white/black school socks",
          urgency: "Personal Hygiene",
          details: "Fresh undergarments provided regularly for all growing boys and girls.",
          transferTag: "VHH UNDERWEAR"
        },
        {
          id: "td-4",
          name: "Pediatric Multivitamins & Cod Liver Oil",
          specs: "Vitamin C syrups, Seven Seas cod liver oil, appetite stimulants",
          urgency: "Child Immunity",
          details: "Daily nutritional supplementation supporting brain development and immune resilience.",
          transferTag: "VHH VITAMINS"
        },
        {
          id: "td-5",
          name: "Educational Storybooks & Indoor Play Games",
          specs: "Reading books, building blocks, puzzle boards, footballs",
          urgency: "Recreation & Mind",
          details: "Fueling creativity, collaborative teamwork, and vocabulary outside school hours.",
          transferTag: "VHH TOYS & BOOKS"
        }
      ]
    },
    {
      id: "teens",
      label: "Adolescent Girls & Boys",
      ageBracket: "12 – 18+ Years",
      icon: Heart,
      badgeColor: "bg-rose-100 text-rose-900 border-rose-300",
      consumptionSummary: "We have dozens of young girls reaching womanhood and boys growing into young men. Sanitary towels and personal hygiene toiletries are consumed in large quantities every single month.",
      items: [
        {
          id: "tn-1",
          name: "Sanitary Pads / Towels (Heavy & Regular Flow)",
          specs: "Always, Kotex, Molped, Lady Care (Cartons)",
          urgency: "Critical Dignity Need",
          details: "Dozens of adolescent girls experience monthly menstrual cycles; zero girl at VHH should ever face period poverty.",
          transferTag: "VHH SANITARY PADS"
        },
        {
          id: "tn-2",
          name: "Bathing Soaps, Deodorants & Body Lotions",
          specs: "Antiseptic soaps (Dettol, Premier), roll-on deodorants, lotions",
          urgency: "Daily Hygiene",
          details: "Instilling strong personal grooming and self-respect as teenagers develop.",
          transferTag: "VHH TOILETRIES"
        },
        {
          id: "tn-3",
          name: "Laundry Detergents & Washing Bar Soaps",
          specs: "Omo, Sunlight, Ariel, Viva detergent bags & key soaps",
          urgency: "Bulk Compound Need",
          details: "Washing 239 children's clothes, school uniforms, and bedding consumes sacks of detergent weekly.",
          transferTag: "VHH DETERGENTS"
        },
        {
          id: "tn-4",
          name: "Teen Undergarments (Bras, Boxers, Singlets)",
          specs: "Teenage training bras, brassieres, cotton boxers, singlets",
          urgency: "Comfort & Dignity",
          details: "Essential personal comfort items supporting rapid teenage physical growth.",
          transferTag: "VHH TEEN WEAR"
        },
        {
          id: "tn-5",
          name: "Hair Grooming Kits & Clippers",
          specs: "Professional hair clippers, hair creams, combs, relaxers/conditioners",
          urgency: "Maintenance Care",
          details: "Weekly hair cutting and braiding sessions for all 239 children before school Monday morning.",
          transferTag: "VHH HAIR GROOMING"
        }
      ]
    },
    {
      id: "food",
      label: "Food & Kitchen Staples",
      ageBracket: "All 239 Children",
      icon: Utensils,
      badgeColor: "bg-orange-100 text-orange-900 border-orange-300",
      consumptionSummary: "Cooking 3 freshly prepared hot, balanced meals every single day for 239 children and staff requires truckloads of grains, tubers, and cooking gas. Sustaining this kitchen is our single largest daily operational requirement.",
      items: [
        {
          id: "fd-1",
          name: "Bags of Rice (50kg) & Beans (50kg)",
          specs: "Local or foreign stone-free rice bags & drum beans bags",
          urgency: "Staple Foundation",
          details: "Our kitchen cooks dozens of kilograms of rice and protein-rich beans daily to nourish 239 growing bodies.",
          transferTag: "VHH RICE & BEANS"
        },
        {
          id: "fd-2",
          name: "Tubers of Yam (Dozens & Truckloads)",
          specs: "Abuja / Benue sweet yams in dozens or pick-up truckloads",
          urgency: "Essential Carbohydrate",
          details: "Boiled, pounded, or pottage yam provides long-lasting sustained energy for children attending school.",
          transferTag: "VHH YAM"
        },
        {
          id: "fd-3",
          name: "Cooking Oil (25L Kegs Vegetable & Palm Oil)",
          specs: "25-Litre yellow kegs of pure groundnut oil & red palm oil",
          urgency: "Daily Cooking Need",
          details: "Used for preparing daily soups, stews, bean porridges, and frying.",
          transferTag: "VHH COOKING OIL"
        },
        {
          id: "fd-4",
          name: "Bags of Semovita, Wheat, Flour & Garri",
          specs: "10kg / 50kg bags of Golden Penny Semo, Wheat & Ijebu Garri",
          urgency: "Dinner Swallow Staples",
          details: "Served with vegetable and melon soups during family communal evening dinners.",
          transferTag: "VHH GRAINS"
        },
        {
          id: "fd-5",
          name: "Cooking Seasonings & Tomato Pastes",
          specs: "Salt bags, Maggi/Knorr cubes cartons, Gino/Derica tomato paste",
          urgency: "Nutritional Flavor",
          details: "Essential pantry ingredients used daily to prepare savory, nutritious meals.",
          transferTag: "VHH SEASONINGS"
        },
        {
          id: "fd-6",
          name: "Cartons of Milk, Milo/Ovaltine & Sugar",
          specs: "Powdered milk bags/tins, cocoa malt drinks, granulated sugar",
          urgency: "Morning Breakfast",
          details: "Served with morning pap (akamu) or tea before children board the school bus.",
          transferTag: "VHH BREAKFAST"
        },
        {
          id: "fd-7",
          name: "Industrial 50kg Cooking Gas Refilling",
          specs: "Refilling 50kg industrial kitchen cylinders",
          urgency: "Kitchen Cooking Fuel",
          details: "Large burners cook continuously from 5:00 AM to 8:00 PM; gas refilling is a constant ongoing need.",
          transferTag: "VHH COOKING GAS"
        }
      ]
    },
    {
      id: "education",
      label: "External Schooling & Academics",
      ageBracket: "Nursery to Tertiary",
      icon: GraduationCap,
      badgeColor: "bg-blue-100 text-blue-900 border-blue-300",
      consumptionSummary: "Vine Heritage Home is NOT a school. All 239 children are enrolled in external accredited schools in town. VHH pays 100% of their tuition fees, provides uniforms, books, instruments, and bus transit.",
      items: [
        {
          id: "ed-1",
          name: "Term School Fees Sponsorship",
          specs: "Sponsor term tuition for Primary, Secondary or Tertiary students",
          urgency: "Future Foundation",
          details: "Directly funds external accredited tuition so no child's academic progress is interrupted.",
          transferTag: "VHH SCHOOL FEES"
        },
        {
          id: "ed-2",
          name: "Mathematical Sets & Scientific Calculators",
          specs: "Casio fx-991/82 series calculators & Oxford mathematical sets",
          urgency: "Senior School STEM",
          details: "Equipping secondary school students with the precise instruments required for WAEC, NECO & JAMB exams.",
          transferTag: "VHH CALCULATORS"
        },
        {
          id: "ed-3",
          name: "Exercise Books (40, 60, 80-Leaves & 2B Higher)",
          specs: "Wholesale cartons of lined exercise books & graph sheets",
          urgency: "Writing Material",
          details: "239 students go through thousands of note pages every academic session.",
          transferTag: "VHH EXERCISE BOOKS"
        },
        {
          id: "ed-4",
          name: "Approved Textbooks (All Subjects)",
          specs: "English, Mathematics, Basic Science, Physics, Chemistry, Biology",
          urgency: "Curriculum Material",
          details: "Enabling children to study effectively and do afternoon homework in our communal living hall.",
          transferTag: "VHH TEXTBOOKS"
        },
        {
          id: "ed-5",
          name: "Durable School Bags & Water Bottles",
          specs: "Reinforced waterproof backpacks & insulated water flasks",
          urgency: "Daily Transit",
          details: "Carrying heavy textbooks and staying hydrated throughout the school day.",
          transferTag: "VHH SCHOOL BAGS"
        }
      ]
    },
    {
      id: "health",
      label: "Healthcare & Special Needs",
      ageBracket: "All Residents",
      icon: HeartPulse,
      badgeColor: "bg-red-100 text-red-900 border-red-300",
      consumptionSummary: "A resident home nurse manages routine ailments, but with 239 children, medical clinics, dental care, malaria treatments, and special needs care require specialized supplies.",
      items: [
        {
          id: "hl-1",
          name: "Dermatology Sunscreens & Hats (For Albinism)",
          specs: "High SPF 50+ mineral sunscreens, wide-brim hats, soothing lotions",
          urgency: "Skin Cancer Prevention",
          details: "Our children born with albinism require daily sunscreen to prevent painful sunburns and malignant skin lesions.",
          transferTag: "VHH ALBINISM CARE"
        },
        {
          id: "hl-2",
          name: "Pediatric Medications & Antimalarials",
          specs: "Artemether/Lumefantrine syrups, Paracetamol, Ibuprofen, multivitamins",
          urgency: "Routine Clinic Supply",
          details: "Prompt malaria and fever treatment by our home nurse saves lives and avoids emergency hospital admissions.",
          transferTag: "VHH MEDICINE"
        },
        {
          id: "hl-3",
          name: "First Aid Kits, Bandages & Disinfectants",
          specs: "Cotton wool, methylated spirit, Dettol, gauze rolls, plasters, gloves",
          urgency: "Wound & Scrape Care",
          details: "Immediate first response for childhood playground cuts, scrapes, and injuries.",
          transferTag: "VHH FIRST AID"
        },
        {
          id: "hl-4",
          name: "Mobility Aids & Physical Therapy Supplies",
          specs: "Pediatric wheelchairs, walking frames, sensory exercise balls",
          urgency: "Special Needs Care",
          details: "Direct therapy assistance for our children living with Cerebral Palsy and developmental challenges.",
          transferTag: "VHH SPECIAL NEEDS"
        },
        {
          id: "hl-5",
          name: "Hospital Emergency Fund",
          specs: "Emergency medical escrow for external hospital surgeries & scans",
          urgency: "Life-Saving Reserve",
          details: "Guarantees rapid hospital admission whenever a child requires advanced surgical or diagnostic care.",
          transferTag: "VHH EMERGENCY MED"
        }
      ]
    },
    {
      id: "cooling",
      label: "Cooling, Power & Home Comfort",
      ageBracket: "Facility Infrastructure",
      icon: Wind,
      badgeColor: "bg-cyan-100 text-cyan-900 border-cyan-300",
      consumptionSummary: "Kuje Abuja experiences extreme heat during dry seasons. Ensuring 239 children can rest, study, and sleep comfortably without heat rash requires reliable fans, nursery AC, and uninterrupted solar power.",
      items: [
        {
          id: "cl-1",
          name: "Standing Fans & Wall-Mounted Fans",
          specs: "Ox, Panasonic, Century 18-inch industrial standing & wall fans",
          urgency: "Dormitory Airflow",
          details: "Keeping dormitories and study halls well-ventilated so children sleep peacefully and stay healthy.",
          transferTag: "VHH FANS"
        },
        {
          id: "cl-2",
          name: "Air Conditioning Units (1.5HP / 2HP)",
          specs: "Inverter AC units for Infant Nursery & Home Clinic",
          urgency: "Nursery & Clinic Care",
          details: "Newborn infants and feverish patients in our clinic require temperature regulation to prevent dehydration and heat exhaustion.",
          transferTag: "VHH AIR CONDITIONING"
        },
        {
          id: "cl-3",
          name: "Solar Inverter Batteries & Servicing",
          specs: "Tubular deep cycle batteries, lithium packs, solar panel servicing",
          urgency: "24/7 Power Security",
          details: "Eliminates dangerous darkness and diesel generator smoke, running lights and fans around the clock.",
          transferTag: "VHH SOLAR"
        },
        {
          id: "cl-4",
          name: "Borehole Water Submersible Pump Servicing",
          specs: "Industrial borehole pump servicing & clean water filtration",
          urgency: "Clean Drinking Water",
          details: "Supplies hundreds of litres of clean, drinkable running water daily for drinking, cooking, and baths.",
          transferTag: "VHH WATER PUMP"
        },
        {
          id: "cl-5",
          name: "Bunk Bed Mattresses & Waterproof Protectors",
          specs: "High-density foam mattresses (3x6), pillows, waterproof sheets",
          urgency: "Restful Bedding",
          details: "Durable bedding that stands up to bedwetting and ensures healthy spinal support for growing children.",
          transferTag: "VHH MATTRESSES"
        }
      ]
    },
    {
      id: "transit",
      label: "Bus, Fuel & Caregiver Wages",
      ageBracket: "Daily Operations",
      icon: Bus,
      badgeColor: "bg-indigo-100 text-indigo-900 border-indigo-300",
      consumptionSummary: "Getting 239 children to external schools every morning requires a well-maintained bus and fuel. Behind every child are 30 devoted caregivers and house mothers who provide 24/7 round-the-clock loving care.",
      items: [
        {
          id: "tr-1",
          name: "School Bus Servicing & Mechanical Maintenance",
          specs: "Brake pads, new heavy-duty tires, engine oil, shock absorbers",
          urgency: "Child Transit Safety",
          details: "Our school bus must remain 100% roadworthy to transport 239 children safely every single school morning.",
          transferTag: "VHH BUS REPAIRS"
        },
        {
          id: "tr-2",
          name: "Qualified Engineer / Mechanic Hire",
          specs: "Sponsor certified auto-mechanic servicing or connect a professional",
          urgency: "Technical Service",
          details: "You can either connect a verified mechanical engineer in Abuja to inspect our bus or sponsor maintenance fees.",
          transferTag: "VHH MECHANIC HIRE"
        },
        {
          id: "tr-3",
          name: "Daily School Bus Transit Fuel",
          specs: "Weekly diesel/petrol allocation for school and hospital runs",
          urgency: "Transit Mobility",
          details: "Fuel ensures our bus never breaks down on transit routes between Kuje and schools in town.",
          transferTag: "VHH BUS FUEL"
        },
        {
          id: "tr-4",
          name: "30 Caregivers & House Mothers Monthly Wages",
          specs: "Monthly caregiver stipends, cook, security, and home nurse support",
          urgency: "24/7 Human Care",
          details: "Our devoted staff members live with and care for 239 children 24/7. Their monthly stipend ensures dedicated loving continuity.",
          transferTag: "VHH CAREGIVER WAGES"
        }
      ]
    }
  ];

  const currentCategoryData = categories.find(c => c.id === activeCategory) || categories[0];

  const copyAddressForLogistics = (itemId: string) => {
    const deliverySnippet = "Deliver to: Vine Heritage Home Foundation, Kuje, FCT Abuja. Phone: 09019303646 / 080344229935";
    navigator.clipboard.writeText(deliverySnippet);
    setCopiedItemId(itemId);
    setTimeout(() => setCopiedItemId(null), 3000);
  };

  return (
    <section 
      id="needs-directory" 
      aria-label="Itemized Needs Directory by Category"
      className="py-16 sm:py-24 bg-[#fdfbf7] text-vhh-charcoal relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-vhh-green-50 border border-vhh-green-200 text-vhh-green-900 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Package className="w-3.5 h-3.5 text-vhh-green-700" />
            <span>Interactive Needs Directory</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-vhh-charcoal leading-tight">
            Browse by Category. <br />
            <span className="italic font-normal text-vhh-green-800">
              See Exactly What Our 239 Children Require.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-stone-600 font-light leading-relaxed">
            Select any category below to inspect our actual monthly consumption, specific items needed, and dispatch goods via logistics or transfer directly toward that need.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* CATEGORY TABS SWITCHER (Horizontal scroll on mobile, wrap on desktop)     */}
        {/* ========================================================================= */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
          {categories.map((cat) => {
            const IconComp = cat.icon;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`shrink-0 inline-flex items-center gap-2.5 px-4 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                  isActive
                    ? 'bg-vhh-green-900 text-white border-vhh-green-950 shadow-md scale-102'
                    : 'bg-white text-stone-700 border-stone-200 hover:border-vhh-green-700/60 hover:bg-stone-50'
                }`}
              >
                <IconComp className={`w-4 h-4 shrink-0 ${isActive ? 'text-emerald-300' : 'text-vhh-green-700'}`} />
                <span>{cat.label}</span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                  isActive ? 'bg-white/20 text-emerald-200' : 'bg-stone-100 text-stone-500'
                }`}>
                  {cat.items.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* ACTIVE CATEGORY BANNER & MONTHLY CONSUMPTION EXPLANATION                   */}
        {/* ========================================================================= */}
        <motion.div
          key={currentCategoryData.id}
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-sm mb-10"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-stone-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-vhh-green-50 border border-vhh-green-200 flex items-center justify-center text-vhh-green-800 shrink-0">
                <currentCategoryData.icon className="w-6 h-6 text-vhh-green-700" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-serif text-2xl font-bold text-vhh-charcoal">
                    {currentCategoryData.label}
                  </h3>
                  <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider border ${currentCategoryData.badgeColor}`}>
                    {currentCategoryData.ageBracket}
                  </span>
                </div>
                <span className="text-xs text-stone-500 font-light">
                  {currentCategoryData.items.length} specific ongoing needs cataloged below
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onOpenLogistics}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold transition-colors border border-stone-200"
              >
                <span>Logistics Delivery Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Realistic Consumption Insight */}
          <div className="mt-4 pt-1 flex items-start gap-3 text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
            <AlertCircle className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
            <div>
              <strong className="text-stone-800 font-semibold mr-1">Monthly Consumption Reality:</strong>
              <span>{currentCategoryData.consumptionSummary}</span>
            </div>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* ITEMIZED NEEDS CARDS GRID                                                */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentCategoryData.items.map((item, idx) => {
            const isCopied = copiedItemId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="p-6 rounded-3xl bg-white border border-stone-200 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Top Urgency Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase font-bold tracking-wider bg-emerald-50 text-emerald-900 border border-emerald-200">
                      {item.urgency}
                    </span>

                    <span className="text-[10px] font-mono text-stone-400">
                      Tag: {item.transferTag}
                    </span>
                  </div>

                  {/* Title & Specifications */}
                  <h4 className="font-serif text-lg font-bold text-vhh-charcoal group-hover:text-vhh-green-900 transition-colors leading-snug mb-1">
                    {item.name}
                  </h4>

                  <p className="text-xs font-semibold text-emerald-800 mb-2">
                    {item.specs}
                  </p>

                  <p className="text-xs text-stone-600 font-light leading-relaxed mb-4">
                    {item.details}
                  </p>
                </div>

                {/* Action Buttons: Logistics or Bank Transfer */}
                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2">
                  
                  {/* Logistics Dispatch Copy Button */}
                  <button
                    type="button"
                    onClick={() => copyAddressForLogistics(item.id)}
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold transition-colors"
                    title="Copy Kuje delivery address to send this item"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-[11px] font-bold text-emerald-800">Address Copied!</span>
                      </>
                    ) : (
                      <>
                        <Package className="w-3.5 h-3.5 text-stone-600" />
                        <span className="text-[11px]">Send via Courier</span>
                      </>
                    )}
                  </button>

                  {/* Bank Transfer Helper */}
                  {onDonateCategory && (
                    <button
                      type="button"
                      onClick={() => onDonateCategory(item.transferTag)}
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-vhh-green-900 hover:bg-vhh-green-800 text-white text-xs font-semibold transition-colors shadow-2xs"
                    >
                      <span>Fund This &rarr;</span>
                    </button>
                  )}
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Global Dispatch Advice Callout */}
        <div className="mt-12 p-6 rounded-3xl bg-[#f5f2ea] border border-stone-300/80 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-vhh-green-900 text-white flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-emerald-300" />
            </div>
            <div>
              <h5 className="font-serif text-base font-bold text-vhh-charcoal">
                Buying in bulk or dispatching a full truckload of provisions?
              </h5>
              <p className="text-xs text-stone-600 font-light mt-0.5">
                Our gate receiving team will coordinate directly with your driver to ensure swift offloading at our Kuje grounds.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/2349019303646?text=Hello%20Vine%20Heritage%20Home%2C%20I%20would%20like%20to%20arrange%20a%20bulk%20food%20or%20provisions%20delivery%20to%20your%20Kuje%20sanctuary.%20Kindly%20advise."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-vhh-green-900 text-white text-xs font-semibold hover:bg-vhh-green-800 transition-colors shadow-xs shrink-0"
          >
            <span>Coordinate With Logistics Team</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
