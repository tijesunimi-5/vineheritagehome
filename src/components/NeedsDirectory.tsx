'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Baby, 
  Users, 
  Utensils, 
  GraduationCap, 
  HeartPulse, 
  Bus, 
  Heart, 
  CheckCircle2, 
  Package, 
  Copy, 
  Check, 
  ArrowRight, 
  Wind, 
  ShieldCheck,
  AlertCircle,
  Wheat,
  Smile,
  Scissors
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
  const [activeCategory, setActiveCategory] = useState<string>("food");
  const [copiedItemId, setCopiedItemId] = useState<string | null>(null);

  const categories = [
    {
      id: "food",
      label: "Food, Nigerian Dishes & Farmers",
      ageBracket: "All 239 Children",
      icon: Utensils,
      badgeColor: "bg-orange-100 text-orange-900 border-orange-300",
      consumptionSummary: "Cooking 3 freshly prepared hot, nutritious meals every single day for 239 growing children and staff requires truckloads of grains, authentic Nigerian staples, farm produce, and cooking fuel. Sustaining our kitchen is our single largest daily operational requirement.",
      farmerNotice: "Special Appeal to Farmers & Food Wholesalers: If you are a farmer or market trader, you can donate your fresh harvest (tomatoes, peppers, yams, grains) directly to our sanctuary. The greatest blessing is that God will surely reward, prosper, and multiply your barns — it is proven to be true!",
      items: [
        {
          id: "fd-farm",
          name: "Fresh Farm Tomatoes & Peppers (Tatase, Rodo, Shombo)",
          specs: "Baskets of fresh tomatoes, scotch bonnets, bell peppers & onions",
          urgency: "Vital Fresh Nutrition",
          details: "Fresh produce is preferred over canned pastes to protect our children's digestive health and provide rich vitamins for daily Nigerian stews.",
          transferTag: "VHH FRESH TOMATOES"
        },
        {
          id: "fd-noodles",
          name: "Cartons of Instant Noodles (Indomie / Minimie)",
          specs: "Wholesale 40-pack cartons of chicken or onion flavor noodles",
          urgency: "Children's Favorite Meal",
          details: "A quick, hot, and delicious meal that our children eagerly celebrate after long school days and during weekend activities.",
          transferTag: "VHH NOODLES"
        },
        {
          id: "fd-breakfast",
          name: "Morning Hot Porridge: Custard, Millet & Fresh Pap (Ogi/Akamu)",
          specs: "Custard tins, bags of cleaned millet, and bulk fresh corn pap",
          urgency: "Daily School Breakfast",
          details: "Served steaming hot with milk before our children board the school buses, giving them long-lasting morning energy for classroom learning.",
          transferTag: "VHH BREAKFAST"
        },
        {
          id: "fd-pasta",
          name: "Cartons of Spaghetti & Macaroni Pastas",
          specs: "Golden Penny, Dangote, or Honeywell 500g packs in cartons",
          urgency: "Quick Energy Staples",
          details: "Cooked with tomato stew, fish, and vegetables for hearty, satisfying lunches and dinners across all dormitories.",
          transferTag: "VHH SPAGHETTI"
        },
        {
          id: "fd-eggs",
          name: "Crates of Farm-Fresh Eggs",
          specs: "Dozens of crates of fresh, large table eggs",
          urgency: "Brain-Building Protein",
          details: "Vital high-protein breakfast and dinner supplement supporting cognitive development and immune vitality in 239 growing minds.",
          transferTag: "VHH EGGS"
        },
        {
          id: "fd-fish",
          name: "Cartons of Fish (Titus / Mackerel) & Smoked/Dried Fish",
          specs: "20kg frozen cartons of Titus/Mackerel & sacks of dried catfish",
          urgency: "Essential Protein",
          details: "Rich source of Omega-3 fatty acids and protein for authentic Nigerian soups (Egusi, Ogbono, and Vegetable pottages).",
          transferTag: "VHH FISH"
        },
        {
          id: "fd-fruits",
          name: "Fresh Seasonal Fruits (Watermelons, Bananas, Oranges, Apples)",
          specs: "Bulk wholesale sacks and crates of fresh tropical fruits",
          urgency: "Immunity & Digestion",
          details: "Daily fruit portions keep our children healthy, prevent vitamin deficiencies, and keep pediatric clinic visits low.",
          transferTag: "VHH FRUITS"
        },
        {
          id: "fd-snacks",
          name: "Children's Refreshments, Snacks & Treats ('Junks & Goodies')",
          specs: "Cartons of biscuits, cookies, chin-chin, popcorn & fruit drinks",
          urgency: "Childhood Joy & Refreshment",
          details: "Every child deserves joyful refreshments during weekend play, holiday celebrations, birthday parties, and movie nights!",
          transferTag: "VHH SNACKS"
        },
        {
          id: "fd-rice-beans",
          name: "Bags of Long-Grain Rice (50kg) & Brown Beans (50kg)",
          specs: "Stone-free Nigerian or foreign rice & drum beans in 50kg sacks",
          urgency: "Daily Core Foundation",
          details: "Our kitchen cooks dozens of kilograms daily. Rice and protein-rich beans form the bedrock of daily nourishment.",
          transferTag: "VHH RICE & BEANS"
        },
        {
          id: "fd-yam",
          name: "Tubers of Yam (Benue / Abuja Sweet Yams)",
          specs: "Dozens or pick-up truckloads of quality large yams",
          urgency: "Wholesome Carbohydrate",
          details: "Boiled yam with egg sauce or evening pounded yam and vegetable soup provides sustained energy for school children.",
          transferTag: "VHH YAM"
        },
        {
          id: "fd-oil",
          name: "Cooking Oils (25-Litre Kegs Vegetable & Red Palm Oil)",
          specs: "Pure refined vegetable cooking oil & premium red palm oil kegs",
          urgency: "Essential Daily Cooking",
          details: "Used every morning and evening to prepare stews, soups, beans porridge, and fried treats.",
          transferTag: "VHH COOKING OIL"
        },
        {
          id: "fd-swallows",
          name: "Bags of Semovita, Wheat Flour & Garri",
          specs: "50kg & 10kg bags of Golden Penny Semo, Wheat & Ijebu Garri",
          urgency: "Evening Swallows",
          details: "Served communal-family style with rich melon and vegetable soups for dinner.",
          transferTag: "VHH GRAINS"
        },
        {
          id: "fd-gas",
          name: "Industrial 50kg Cooking Gas Refilling",
          specs: "Refilling 50kg industrial cylinders for commercial kitchen burners",
          urgency: "Non-Stop Kitchen Fuel",
          details: "Our heavy burners run continuously from 5:00 AM to 8:30 PM to feed 239 children without interruption.",
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
      consumptionSummary: "Vine Heritage Home is NOT a school. All 239 children are enrolled in external accredited primary, secondary, and tertiary institutions in town. VHH covers 100% of their tuition fees, uniforms, textbooks, calculators, and daily bus transportation.",
      items: [
        {
          id: "ed-tuition",
          name: "Term Tuition & School Fees Sponsorship",
          specs: "Sponsor term fees for Nursery, Primary, Secondary, or Tertiary students",
          urgency: "Life-Transforming Priority",
          details: "Directly covers accredited school tuition and PTA levies so no child's academic future is delayed or halted.",
          transferTag: "VHH SCHOOL FEES"
        },
        {
          id: "ed-shoes",
          name: "Durable School Shoes, Crocs & White Socks",
          specs: "Black leather school dress shoes (sizes 26–42), sport trainers, white socks",
          urgency: "School Dress Code & Dignity",
          details: "Essential for 239 students walking onto school assembly grounds looking sharp, confident, and well-groomed.",
          transferTag: "VHH SCHOOL SHOES"
        },
        {
          id: "ed-bags",
          name: "Heavy-Duty Waterproof School Bags & Backpacks",
          specs: "Reinforced ergonomic backpacks with padded straps and water bottle pockets",
          urgency: "Protecting Learning Materials",
          details: "Built to withstand daily bus commutes and keep expensive textbooks completely safe from rain and rough handling.",
          transferTag: "VHH SCHOOL BAGS"
        },
        {
          id: "ed-textbooks",
          name: "Approved Curriculum Textbooks (All Subjects)",
          specs: "English, Mathematics, Basic Science, Physics, Chemistry, Biology, Government",
          urgency: "Academic Excellence",
          details: "Equips our students with the exact textbooks required by accredited schools to complete homework and prepare for examinations.",
          transferTag: "VHH TEXTBOOKS"
        },
        {
          id: "ed-exercise",
          name: "Exercise Books (40, 60, 80-Leaves & 2B Higher Education)",
          specs: "Wholesale cartons of lined exercise books, graph sheets, and hardcover notes",
          urgency: "Everyday Classroom Use",
          details: "239 students go through thousands of notebook pages and biro pens every term.",
          transferTag: "VHH EXERCISE BOOKS"
        },
        {
          id: "ed-calculators",
          name: "Casio Scientific Calculators & Mathematical Sets",
          specs: "Casio fx-991EX / fx-82 series calculators & Oxford mathematical instrument sets",
          urgency: "Senior Secondary STEM",
          details: "Mandatory equipment for our older students sitting for WAEC, NECO, and JAMB exams.",
          transferTag: "VHH CALCULATORS"
        },
        {
          id: "ed-flasks",
          name: "School Water Flasks & Insulated Lunch Bowls",
          specs: "BPA-free durable water bottles & stainless steel thermal food flasks",
          urgency: "Daily School Nourishment",
          details: "Ensures children take clean, filtered water and packed mid-day lunches to school each morning.",
          transferTag: "VHH LUNCH FLASKS"
        }
      ]
    },
    {
      id: "health",
      label: "Healthcare, Doctors & Special Needs",
      ageBracket: "All Residents",
      icon: HeartPulse,
      badgeColor: "bg-red-100 text-red-900 border-red-300",
      consumptionSummary: "Preserving the health of 239 children is one of our largest and most delicate ongoing commitments. We seek partnerships with qualified medical doctors for regular outreaches, training for caregivers, emergency hospital retainers, and specialized care for children with albinism and cerebral palsy.",
      items: [
        {
          id: "hl-outreach",
          name: "Medical Doctor Outreaches & Drug Distributions",
          specs: "Volunteer medical doctors, pediatricians & nurses conducting clinic days",
          urgency: "Preventative Health Outreach",
          details: "Conducting comprehensive vitals checkups, routine physicals, and supplying accredited pediatric dispensary medications.",
          transferTag: "VHH DOCTOR OUTREACH"
        },
        {
          id: "hl-emergency",
          name: "Emergency Hospital Retainership & Surgery Escrow",
          specs: "Emergency medical fund guaranteeing immediate private/tertiary hospital admission",
          urgency: "Life-Saving Safety Net",
          details: "Guarantees sick children are NEVER turned away or rejected by hospitals during acute emergencies, lifting the terror of crippling bills.",
          transferTag: "VHH EMERGENCY MED"
        },
        {
          id: "hl-triage",
          name: "Standby Tele-Triage & Clinical Advisor",
          specs: "24/7 on-call medical professional advising home nurse on fever/injury escalations",
          urgency: "Rapid Decision Support",
          details: "Provides instant clinical guidance on whether to treat symptoms with home clinic drugs or rush a child immediately to emergency care.",
          transferTag: "VHH CLINICAL ADVISOR"
        },
        {
          id: "hl-albinism",
          name: "High-SPF 50+ Sunscreen & UV Hats (For Albinism)",
          specs: "Dermatological mineral sunscreens, wide-brim UV hats, and soothing body lotions",
          urgency: "Skin Cancer Prevention",
          details: "Several of our rescued children live with albinism; daily sunscreen is essential to prevent painful burns and dangerous precancerous lesions.",
          transferTag: "VHH ALBINISM CARE"
        },
        {
          id: "hl-meds",
          name: "Pediatric Medications & Antimalarials",
          specs: "Artemether/Lumefantrine syrups, Paracetamol, Ibuprofen, Amoxicillin, multivitamins",
          urgency: "Dispensary Stocking",
          details: "Prompt treatment of malaria, viral fevers, and coughs by our resident nurse prevents severe complications.",
          transferTag: "VHH MEDICINE"
        },
        {
          id: "hl-firstaid",
          name: "First Aid Kits, Bandages & Playground Injury Supplies",
          specs: "Gauze rolls, methylated spirit, Dettol, cotton wool, plasters, burn ointments",
          urgency: "Home Incident Care",
          details: "Immediate treatment for cuts, scrapes, and playground injuries for 239 energetic children.",
          transferTag: "VHH FIRST AID"
        },
        {
          id: "hl-specialneeds",
          name: "Mobility Aids & Physical Therapy Supports",
          specs: "Pediatric wheelchairs, walking frames, sensory exercise balls & braces",
          urgency: "Special Needs Dignity",
          details: "Direct therapy and mobility aids for our children living with Cerebral Palsy and physical developmental challenges.",
          transferTag: "VHH SPECIAL NEEDS"
        }
      ]
    },
    {
      id: "facility",
      label: "Cooling, Laundry & Home Comfort",
      ageBracket: "Facility Infrastructure",
      icon: Wind,
      badgeColor: "bg-cyan-100 text-cyan-900 border-cyan-300",
      consumptionSummary: "Kuje Abuja experiences extreme seasonal heat and dust. Keeping 239 children healthy requires clean clothes, hygienic barbering tools, well-ventilated dormitories, cold storage for medical supplies, and 24/7 solar power.",
      items: [
        {
          id: "fc-washing",
          name: "Commercial Heavy-Duty Washing Machines (10kg – 15kg+)",
          specs: "Industrial top-loader or front-loader heavy-duty automatic washing machines",
          urgency: "Massive Compound Relief",
          details: "Washing daily clothing, bedsheets, blankets, and school uniforms for 239 children by hand is exhausting for housemothers; commercial machines bring vital dignity and relief.",
          transferTag: "VHH WASHING MACHINE"
        },
        {
          id: "fc-barber",
          name: "Professional Hair Clippers & UV/Electric Tool Sterilizers",
          specs: "Heavy-duty electric barbering clippers & hospital-grade UV sterilizing cabinets",
          urgency: "Scalp Infection Prevention",
          details: "Sterilizing clippers and combs before every haircut ensures our 239 children remain safe from ringworm, fungal scalp infections, and communicable skin issues.",
          transferTag: "VHH BARBER STERILIZER"
        },
        {
          id: "fc-fans",
          name: "Heavy-Duty Standing & Wall-Mounted Fans",
          specs: "Ox, Panasonic, or Century 18-inch industrial metal standing & wall fans",
          urgency: "Dormitory Airflow",
          details: "Ensures dormitories, dining rooms, and study halls stay cool and well-ventilated during Abuja's dry season heat.",
          transferTag: "VHH FANS"
        },
        {
          id: "fc-ac",
          name: "Inverter Air Conditioners (1.5HP / 2.0HP)",
          specs: "Energy-saving inverter AC units for the Infant Nursery & Medical Clinic",
          urgency: "Infant & Clinic Temperature Control",
          details: "Fragile newborn infants and feverish patients in our clinic ward require regulated cool air to prevent severe dehydration and heat exhaustion.",
          transferTag: "VHH AIR CONDITIONING"
        },
        {
          id: "fc-solar",
          name: "Solar Inverter Deep-Cycle Batteries & Servicing",
          specs: "200Ah tubular deep-cycle batteries, lithium storage packs, and inverter servicing",
          urgency: "24/7 Power Security",
          details: "Eliminates dangerous darkness, powers fans and medical refrigerators, and avoids toxic generator fumes on the sanctuary grounds.",
          transferTag: "VHH SOLAR"
        },
        {
          id: "fc-water",
          name: "Borehole Water Submersible Pump Servicing & Filtration",
          specs: "Industrial submersible water pump servicing & multi-stage filtration cartridges",
          urgency: "Clean Drinking Water",
          details: "Supplies thousands of litres of pure, clean running water daily for drinking, cooking, bathing, and sanitation.",
          transferTag: "VHH WATER PUMP"
        },
        {
          id: "fc-mattress",
          name: "Bunk Bed Mattresses & Waterproof Protectors",
          specs: "High-density foam mattresses (3x6), pillows, and waterproof protective sheets",
          urgency: "Restful Bedding",
          details: "Ensures sound, spinal-supportive sleep for all 239 growing boys and girls.",
          transferTag: "VHH MATTRESSES"
        }
      ]
    },
    {
      id: "transit",
      label: "Buses, Vehicles & Caregiver Wages",
      ageBracket: "Daily Operations",
      icon: Bus,
      badgeColor: "bg-indigo-100 text-indigo-900 border-indigo-300",
      consumptionSummary: "Our current vehicles are simply not enough to transport 239 children to external schools, forcing caregivers to squeeze kids in and run multiple tiring trips. Fleet expansion, qualified mechanic maintenance, daily fuel, and caregiver wages are essential.",
      items: [
        {
          id: "tr-vehicle",
          name: "Additional School Buses & Transit Passenger Vans",
          specs: "Donation or co-sponsorship of 30–50 seater Coaster bus, Toyota HiAce, or Sienna",
          urgency: "Eliminating Severe Transit Congestion",
          details: "Our current vehicles cannot carry 239 children; kids are squeezed tightly across multiple shifts every morning. Additional passenger buses ensure safe, comfortable school transit.",
          transferTag: "VHH NEW BUS"
        },
        {
          id: "tr-servicing",
          name: "School Bus Mechanical Servicing & Heavy-Duty Tires",
          specs: "New bus tires, brake pads, engine overhaul, suspension, and shock absorbers",
          urgency: "Child Transit Safety",
          details: "Our school buses must remain 100% roadworthy to transport 239 children safely without roadside breakdowns.",
          transferTag: "VHH BUS REPAIRS"
        },
        {
          id: "tr-engineer",
          name: "Qualified Auto-Mechanic / Engineer Sponsorship",
          specs: "Sponsor certified auto-mechanic fees or connect a licensed Abuja engineer",
          urgency: "Technical Maintenance",
          details: "Help us hire a verified automobile engineer to inspect and maintain our transit fleet on a professional monthly retainer.",
          transferTag: "VHH MECHANIC HIRE"
        },
        {
          id: "tr-fuel",
          name: "Daily School Bus Transit Fuel (Diesel & Petrol)",
          specs: "Weekly fuel allocations powering morning and afternoon school transit runs",
          urgency: "Daily Mobility",
          details: "Ensures our transit vans never stall on runs between Kuje, Abuja schools, and emergency hospital trips.",
          transferTag: "VHH BUS FUEL"
        },
        {
          id: "tr-wages",
          name: "30 Caregivers & House Mothers Monthly Wages",
          specs: "Monthly caregiver stipends, cook, laundry team, security, and clinic nurse support",
          urgency: "24/7 Frontline Loving Care",
          details: "Behind every child are 30 devoted caregivers who live with, nurse, feed, teach, and protect 239 children around the clock. Their stipends sustain continuity of care.",
          transferTag: "VHH CAREGIVER WAGES"
        }
      ]
    },
    {
      id: "newborns",
      label: "Newborns & Infants",
      ageBracket: "0 – 2 Years",
      icon: Baby,
      badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
      consumptionSummary: "Rescued infants arrive needing immediate maternal nursing care. A single newborn consumes 8–10 diapers daily plus specialized infant formula every 3 hours. With multiple infants under care, diaper packs and formula tins vanish rapidly.",
      items: [
        {
          id: "nb-diapers",
          name: "Diapers (Sizes: Newborn, 1, 2, 3, 4)",
          specs: "Molfix, Huggies, Pampers, Bebem or Softcare jumbo cartons",
          urgency: "Perpetual Daily Need",
          details: "Essential for 24/7 sanitary hygiene, rash prevention, and keeping newly rescued infants dry and comfortable.",
          transferTag: "VHH DIAPERS"
        },
        {
          id: "nb-formula",
          name: "Infant Baby Formula Tins",
          specs: "NAN 1 & 2, SMA Gold, Lactogen, My Boy",
          urgency: "Critical Nutrition",
          details: "Over 70% of our infants lost their mothers during childbirth; formula is literally their daily breastmilk replacement.",
          transferTag: "VHH FORMULA"
        },
        {
          id: "nb-wipes",
          name: "Baby Wipes & Cotton Wool Rolls",
          specs: "Unscented, sensitive skin wipes in bulk cartons & sterile cotton wool",
          urgency: "High Ongoing Need",
          details: "Used at every diaper change to maintain clean skin and prevent pediatric bacterial infections.",
          transferTag: "VHH BABY WIPES"
        },
        {
          id: "nb-bottles",
          name: "Feeding Bottles, Teats & Steam Sterilizers",
          specs: "BPA-free feeding bottles, replacement silicone teats, electric sterilizers",
          urgency: "Hygiene & Feeding",
          details: "Sterile bottles are cleaned and sanitized round-the-clock for day and night bottle feedings.",
          transferTag: "VHH STERILIZERS"
        },
        {
          id: "nb-care",
          name: "Baby Bathing Soaps, Oils & Rash Ointments",
          specs: "Cussons Baby, Sebamed, Sudocrem, Vaseline petroleum jelly",
          urgency: "Skin Dignity",
          details: "Gentle baby skin care protecting infants against eczema, prickly heat, and diaper irritation.",
          transferTag: "VHH BABY SOAPS"
        },
        {
          id: "nb-cots",
          name: "Infant Cots, Mattresses & Swaddling Shawls",
          specs: "Wooden/metal baby cots, firm foam mattresses, soft cotton swaddle wraps",
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
          id: "td-clothes",
          name: "Everyday Clothes & Sunday Wears (Ages 3–11)",
          specs: "Durable cotton shirts, shorts, trousers, dresses, church outfits",
          urgency: "Ongoing Dignity",
          details: "Clean, well-fitted clothing ensuring children feel dignified, loved, and confident at all times.",
          transferTag: "VHH CHILD CLOTHING"
        },
        {
          id: "td-shoes",
          name: "Sandals, Crocs & Play Shoes (Sizes 26–36)",
          specs: "Durable rubber sandals, play sneakers, everyday slippers",
          urgency: "High Wear & Tear",
          details: "With active children playing on our Kuje grounds, shoes require regular replacement.",
          transferTag: "VHH CHILD SHOES"
        },
        {
          id: "td-underwear",
          name: "Children's Underwear, Singlets & Socks",
          specs: "100% cotton panties, boxers, vests, everyday socks packs",
          urgency: "Personal Hygiene",
          details: "Fresh undergarments provided regularly for all growing boys and girls.",
          transferTag: "VHH UNDERWEAR"
        },
        {
          id: "td-vitamins",
          name: "Pediatric Multivitamins & Cod Liver Oil",
          specs: "Vitamin C syrups, Seven Seas cod liver oil, appetite stimulants",
          urgency: "Child Immunity",
          details: "Daily nutritional supplementation supporting brain development and immune resilience.",
          transferTag: "VHH VITAMINS"
        },
        {
          id: "td-play",
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
      consumptionSummary: "Dozens of young girls reaching womanhood and boys growing into young men. Sanitary towels and personal hygiene toiletries are consumed in large quantities every single month.",
      items: [
        {
          id: "tn-pads",
          name: "Sanitary Pads / Towels (Heavy & Regular Flow)",
          specs: "Always, Kotex, Molped, Lady Care (Cartons)",
          urgency: "Critical Dignity Need",
          details: "Over 40 adolescent girls experience monthly menstrual cycles; zero girl at VHH should ever face period poverty.",
          transferTag: "VHH SANITARY PADS"
        },
        {
          id: "tn-toiletries",
          name: "Bathing Soaps, Deodorants & Body Lotions",
          specs: "Antiseptic soaps (Dettol, Premier), roll-on deodorants, lotions",
          urgency: "Daily Hygiene",
          details: "Instilling strong personal grooming and self-respect as teenagers develop.",
          transferTag: "VHH TOILETRIES"
        },
        {
          id: "tn-detergent",
          name: "Laundry Detergents & Washing Bar Soaps",
          specs: "Omo, Sunlight, Ariel, Viva detergent bags & key soaps",
          urgency: "Bulk Compound Need",
          details: "Washing 239 children's clothes, school uniforms, and bedding consumes sacks of detergent weekly.",
          transferTag: "VHH DETERGENTS"
        },
        {
          id: "tn-teenwear",
          name: "Teen Undergarments (Bras, Boxers, Singlets)",
          specs: "Teenage training bras, brassieres, cotton boxers, singlets",
          urgency: "Comfort & Dignity",
          details: "Essential personal comfort items supporting rapid teenage physical growth.",
          transferTag: "VHH TEEN WEAR"
        },
        {
          id: "tn-hair",
          name: "Hair Grooming Products, Braiding Creams & Combs",
          specs: "Hair creams, leave-in conditioners, detangling combs, relaxers",
          urgency: "Maintenance Care",
          details: "Weekly hair grooming and braiding sessions for all 239 children before school Monday morning.",
          transferTag: "VHH HAIR GROOMING"
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
                className={`shrink-0 inline-flex items-center gap-2 px-3.5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 border ${
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

          {/* Special Farmer Notice when on Food Category */}
          {currentCategoryData.farmerNotice && (
            <div className="mt-4 p-4 rounded-2xl bg-amber-50 border border-amber-300/80 flex items-start gap-3 text-xs sm:text-sm text-amber-950">
              <Wheat className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold">A Direct Promise to Farmers &amp; Wholesalers:</strong>
                <p className="mt-0.5 font-light leading-relaxed">
                  {currentCategoryData.farmerNotice}
                </p>
              </div>
            </div>
          )}
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
                transition={{ duration: 0.35, delay: idx * 0.04 }}
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
                Dispatching a full vehicle load, farm harvest, or wholesale carton delivery?
              </h5>
              <p className="text-xs text-stone-600 font-light mt-0.5">
                Our gate team in Kuje will coordinate directly with your driver to ensure smooth offloading at our sanctuary.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/2349019303646?text=Hello%20Vine%20Heritage%20Home%2C%20I%20would%20like%20to%20arrange%20a%20bulk%20delivery%20(food%2C%20produce%2C%20or%20supplies)%20to%20your%20Kuje%20sanctuary.%20Kindly%20advise."
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
