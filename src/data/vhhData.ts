export interface VHHCategory {
  id: string;
  name: string;
  description?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'home' | 'children' | 'education' | 'events' | 'construction' | 'everyday';
  categoryLabel: string;
  imageUrl: string;
  caption: string;
  isDevelopment?: boolean;
}

export interface ImpactStat {
  id: string;
  value: string;
  placeholderValue: string;
  defaultDisplay: string;
  label: string;
  description: string;
  note: string;
}

export interface StoryCard {
  id: string;
  role: 'Child Success Story' | 'Alumni Story' | 'Staff Perspective' | 'Partner Experience' | 'Volunteer Story';
  headline: string;
  summary: string;
  placeholderTag: string;
  tag?: string;
  privacyNotice: string;
}

export interface VHHNeedItem {
  id: string;
  category: 'Nutrition' | 'Education' | 'Basic Essentials' | 'Healthcare' | 'Home & Facilities';
  title: string;
  description: string;
  status: 'Urgent' | 'Needed' | 'In Progress' | 'Fulfilled' | 'Ongoing';
  placeholderTag: string;
  priorityLevel?: 'High' | 'Medium';
}

export interface VHHMomentEntry {
  id: string;
  date: string;
  title: string;
  description: string;
  imageUrl: string;
  tag: string;
}

export interface ExecutiveProfile {
  name: string;
  role: string;
  bio: string;
}

export interface CommunityAreaCouncil {
  councilName: string;
  communities: string[];
}

export const VHH_DATA = {
  brand: {
    name: "Vine Heritage Home Foundation",
    shortName: "VHH",
    legalName: "Vine Heritage Home Foundation (CAC/NGO Registered January 2015)",
    tagline: "More Than a Home.",
    subtagline: "Saving God’s heritage (children) for a greater Nigeria.",
    mission: "Saving God’s heritage (children) for a greater Nigeria.",
    vision: "To rescue and foster children who have been saved from cultural practices and traditions that endanger their lives and to give quality education that will enable them to live well and contribute to the development of our dear nation and the world at large.",
    centralCoreStatement: "Vine Heritage Home Foundation is a sanctuary in Abuja dedicated to rescuing, caring for, and educating infants and children saved from cultural infanticide and harmful traditions in rural communities, nurturing them into thriving leaders for a greater Nigeria.",
    foundedYear: "2004",
    firstRescueYear: "1996",
    cacRegistrationDate: "January 2015",
    founders: "Stevens Olusola Ajayi & Dr. Stevens Gloria Chinwe",

    // Compatibility fields for existing components
    locationPlaceholder: "Kuje, Federal Capital Territory, Abuja, Nigeria",
    foundedYearPlaceholder: "2004 (First rescue 1996)",
    phonePlaceholder: "09019303646, 080344229935, 08024343246",
    emailPlaceholder: "contact@vineheritagehome.org",
    addressPlaceholder: "Kuje, Federal Capital Territory, Abuja, Nigeria",

    // Official Physical Addresses
    homeAddress: {
      title: "VHH Residential Home & Sanctuary",
      address: "Kuje, Federal Capital Territory, Abuja, Nigeria",
      landmark: "Kuje, Federal Capital Territory, Abuja",
      city: "Kuje, FCT Abuja, Nigeria",
      plusCode: "Kuje, Abuja",
      mapUrl: "https://maps.google.com/?q=Kuje,+Abuja,+Federal+Capital+Territory",
      phones: ["09019303646", "080344229935"],
    },
    officeAddress: {
      title: "Liaison & Administrative Office",
      address: "No. 17, Opposite Faculty of Law, University of Abuja, Mini Campus, Gwagwalada, Abuja",
      city: "Gwagwalada, FCT Abuja, Nigeria",
      phones: ["08024343246"],
    },

    allPhones: ["09019303646", "080344229935", "08024343246"],
    email: "contact@vineheritagehome.org",

    // Verified Operational Stats from Official Profile
    stats: {
      childrenCount: 239,
      reunitedCount: 12,
      staffCount: 36, // 6 Executive Trustees + 30 staff including home nurse and 2 volunteers
      communitiesTargeted: 58,
      maternalMortalityRescueRatio: "Over 70%",
    }
  },
  
  navLinks: [
    { name: "Home", href: "/" },
    { name: "Our Story", href: "/our-story" },
    { name: "Explore Home", href: "/our-home" },
    { name: "Programs", href: "/programs" },
    { name: "How to Help", href: "/get-involved" },
    { name: "Visit Us", href: "/contact" },
  ],
  mobileNavLinks: [
    { name: "Home", href: "/" },
    { name: "Our Story & History", href: "/our-story" },
    { name: "Explore the Home", href: "/our-home" },
    { name: "Education & Programs", href: "/programs" },
    { name: "Verified Impact", href: "/impact" },
    { name: "How to Help (Goods & Fees)", href: "/get-involved" },
    { name: "Visit & Volunteer", href: "/contact" },
  ],

  // 6 Verified Traditional Cultural Realities Addressed by VHH
  culturalRealities: [
    {
      id: "maternal-death",
      title: "Maternal Death at Childbirth / Nursing",
      statistic: "Over 70% of Rescues",
      description: "Within native Bassa-komo and Gbariyamma communities, custom held that if a mother dies during delivery or while nursing, the baby is believed to be evil and traditionally buried alive with the deceased mother. VHH intervenes to save and raise these infants.",
      severity: "Highest Frequency"
    },
    {
      id: "multiple-births",
      title: "Twins & Multiple Pregnancies",
      statistic: "100% Protected",
      description: "Multiple births were historically viewed as dangerous evil omens. Infants were left to starve, poisoned, or buried alive. All 239 children residing at VHH belong to these endangered groups.",
      severity: "Harmful Tradition"
    },
    {
      id: "upper-teeth",
      title: "Upper Teeth Erupting First",
      statistic: "Customary Superstition",
      description: "Infants whose upper incisors emerge before their lower teeth were feared as evil omens within rural communities and marked for abandonment or harm.",
      severity: "Harmful Tradition"
    },
    {
      id: "harvest-sacrifice",
      title: "Deity Agricultural Harvest Sacrifices",
      statistic: "Historical Origin (1996)",
      description: "Infants were targeted for ritual sacrifice to local tribal deities to guarantee agricultural yields. The first child rescued by VHH in 1996, Aishat Ruth Garba, was saved from this exact practice.",
      severity: "Ritual Practice"
    },
    {
      id: "special-needs",
      title: "Congenital Disabilities & Birth Defects",
      statistic: "Health Vulnerability",
      description: "Babies born with Cerebral Palsy, Down Syndrome, or neurological conditions were targeted for death. VHH provides lifelong therapy, medical care, and specialized nurture.",
      severity: "Medical Stigma"
    },
    {
      id: "albinism",
      title: "Albinism & Pigmentation Bias",
      statistic: "Vulnerable Protection",
      description: "Infants born with albinism faced severe danger and ritual killing due to skin pigmentation superstitions. At VHH, they receive loving shelter and dermatology care.",
      severity: "Stigma & Threat"
    }
  ],

  // Four Foundational Pillars
  fourPillars: [
    {
      id: "home",
      title: "Sanctuary & Safety",
      subtitle: "24/7 Dignified Refuge",
      description: "A permanent, peaceful home in Kuje Abuja providing safe shelter, loving house mothers, and nutritious family meals for 239 children.",
      iconName: "Home",
      color: "from-emerald-900 to-vhh-green-800"
    },
    {
      id: "protection",
      title: "Abolishing Infanticide",
      subtitle: "Advocacy & Intervention",
      description: "Partnering with ActionAid Nigeria, the EU Commission, and FCT authorities across 58 rural communities to end child burial and ritual killing.",
      iconName: "ShieldCheck",
      color: "from-vhh-green-800 to-vhh-green-700"
    },
    {
      id: "growth",
      title: "Quality Education",
      subtitle: "Nursery to Tertiary",
      description: "Every child is enrolled in accredited schools with uniforms, textbooks, calculators, and STEM mentoring to build productive futures for Nigeria.",
      iconName: "TrendingUp",
      color: "from-vhh-green-700 to-emerald-700"
    },
    {
      id: "future",
      title: "Family Reintegration",
      subtitle: "Restoring Biological Bonds",
      description: "As target communities undergo enlightenment, VHH has successfully reunited 12 children with their reformed biological families.",
      iconName: "Sparkles",
      color: "from-emerald-800 to-vhh-red-700"
    }
  ],

  // Story Themes for OurStory.tsx
  storyThemes: [
    "Abolition of Infanticide",
    "Maternal Mortality Protection (Burial Prevention)",
    "Twins & Multiples Sanctuary",
    "Over 70% Saved from Live Burial",
    "Educational Access from Nursery to Tertiary",
    "Community Worldview Enlightenment & Reintegration"
  ],

  // Chronological Verified Milestones
  storyMilestones: [
    {
      stage: "The Catalyst Rescue",
      year: "1996",
      yearPlaceholder: "1996 (First Rescue)",
      title: "Rescuing Aishat Ruth Garba",
      description: "Missionary Chinwe Stevens was approached by an indigenous mother in the FCT to rescue an infant scheduled to be sacrificed to the local deity for agricultural harvest. Aishat was rescued, raised in love, and is now a thriving 24-year-old adult reunited with her biological family.",
      placeholderTag: "VERIFIED HISTORICAL RESCUE: AISHAT RUTH GARBA",
      verifiedFact: "First recorded rescue; origin of the VHH mission."
    },
    {
      stage: "Establishment of the Home",
      year: "2004",
      yearPlaceholder: "2004 (Sanctuary Established)",
      title: "Founding the Kuje Sanctuary",
      description: "Missionaries Stevens Olusola Ajayi and Dr. Stevens Gloria Chinwe, affiliated with the Christian Missionary Foundation, established Vine Heritage Home in Kuje to provide continuous, lifelong shelter for vulnerable infants.",
      placeholderTag: "CHRISTIAN MISSIONARY FOUNDATION AFFILIATION",
      verifiedFact: "Full-time residential operations commence."
    },
    {
      stage: "FCT Ministerial Panel of Enquiry",
      year: "2012 – 2013",
      yearPlaceholder: "2012 – 2013 (Ministerial Panel)",
      title: "Government Investigation & Confirmation",
      description: "The Federal Capital Territory Administration invited VHH to testify. The Minister of the FCT established an official panel of enquiry which confirmed the silent cultural killing of infants in rural communities, launching a National Orientation Agency (NOA) committee.",
      placeholderTag: "FCT MINISTERIAL REPORT ON INFANTICIDE",
      verifiedFact: "Official governmental recognition & validation."
    },
    {
      stage: "Amnesty International Collaboration",
      year: "2014",
      yearPlaceholder: "2014 (Amnesty Advocacy)",
      title: "Grassroots Advocacy Across 10 Communities",
      description: "Amnesty International partnered with VHH to carry out an intensive advocacy campaign across 10 rural communities in Abaji and Kwali Area Councils, leading almost all participating villages to formally renounce infanticide.",
      placeholderTag: "AMNESTY INTERNATIONAL COLLABORATIVE ADVOCACY",
      verifiedFact: "International human-rights partnership."
    },
    {
      stage: "Corporate CAC Incorporation",
      year: "2015",
      yearPlaceholder: "January 2015 (CAC Registered NGO)",
      title: "Registration as Vine Heritage Home Foundation",
      description: "After extensive legal work, the Corporate Affairs Commission (CAC) officially approved and registered Vine Heritage Home Foundation as an accredited Non-Governmental Organization.",
      placeholderTag: "CAC APPROVED NON-GOVERNMENTAL ORGANIZATION",
      verifiedFact: "CAC Registered Non-Governmental Organization."
    },
    {
      stage: "MATAI Project (EU & ActionAid)",
      year: "Present Day",
      yearPlaceholder: "Present Day (58 Communities)",
      title: "Mobilizing Action Across 58 Communities",
      description: "VHH is actively partnered with ActionAid Nigeria on the EU-sponsored MATAI project, reaching 58 indigenous communities, housing 239 children, employing 36 staff, and successfully reuniting 12 children with biological families.",
      placeholderTag: "EUROPEAN UNION & ACTIONAID MATAI PROJECT",
      verifiedFact: "European Union & ActionAid ongoing partnership."
    }
  ],

  // Chapter Home Scenes for ChapterExploreHome.tsx
  chapterHomeScenes: [
    {
      id: "exterior",
      sceneNumber: "01",
      title: "A Place to Belong.",
      subtitle: "The Kuje Sanctuary Grounds",
      desc: "Tranquil green sanctuary in Kuje, Abuja designed with gated security, solar arrays, and dignified living architecture.",
      imageUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=1600&auto=format&fit=crop",
      tag: "Sanctuary"
    },
    {
      id: "living",
      sceneNumber: "02",
      title: "A Place to Gather.",
      subtitle: "Communal Halls & Fellowship",
      desc: "Warm communal living spaces where 239 children share evening stories, music, and laughter under the care of house mothers.",
      imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop",
      tag: "Community"
    },
    {
      id: "learning",
      sceneNumber: "03",
      title: "A Place to Learn.",
      subtitle: "Children Dormitories",
      desc: "Clean, restful sleeping quarters equipped with solar-powered fans and supervised by caring house mothers.",
      imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop",
      tag: "Academics"
    },
    {
      id: "dining",
      sceneNumber: "04",
      title: "A Place to Nurture.",
      subtitle: "Communal Dining & Kitchen",
      desc: "Serving 3 hot, freshly cooked, nutritious meals daily for 239 children in a family-style dining setting.",
      imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1600&auto=format&fit=crop",
      tag: "Nourishment"
    },
    {
      id: "quarters",
      sceneNumber: "05",
      title: "A Place to Rest.",
      subtitle: "Dignified Dormitories & Solar Power",
      desc: "Comfortable, clean, and restful sleeping quarters powered 24/7 by solar inverters, ensuring children never sleep in darkness.",
      imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
      tag: "Rest & Safety"
    },
    {
      id: "expansion",
      sceneNumber: "06",
      title: "A Place to Grow.",
      subtitle: "Active Construction & Growth",
      desc: "Ongoing facility development expanding housing capacity and expanding residential quarters.",
      imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop",
      tag: "Growing With Purpose",
      isConstruction: true
    }
  ],

  // Day in the Life Sequence for ChapterDayInLife.tsx
  dayInLifeSequence: [
    {
      time: "Morning",
      title: "Dawn & Morning Prep",
      desc: "Rising together, morning devotions, nutritious breakfast, and boarding the school bus for accredited classes.",
      imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop"
    },
    {
      time: "Learning",
      title: "Schooling & Mentorship",
      desc: "Attending accredited schools, afternoon tutoring, and homework guidance with books, calculators, and math sets.",
      imageUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200&auto=format&fit=crop"
    },
    {
      time: "Meals",
      title: "Nourishment & Gathering",
      desc: "Communal lunch and dinner prepared with grain staples, fresh vegetables, and enjoyed together as one big family.",
      imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop"
    },
    {
      time: "Play",
      title: "Athletics & Recreation",
      desc: "Football matches, playground fun, and weekend cinema/movie shows with visiting mentors.",
      imageUrl: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200&auto=format&fit=crop"
    },
    {
      time: "Community",
      title: "Creative Arts & Fellowship",
      desc: "Drawing, music, cultural expressions, and visiting guest mentorship sessions in tech, health, and finance.",
      imageUrl: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?q=80&w=1200&auto=format&fit=crop"
    },
    {
      time: "Evening",
      title: "Rest & Peace",
      desc: "Winding down in clean, solar-powered dormitories under the watchful care of house mothers and the home nurse.",
      imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop"
    }
  ],

  // Needs Board for ChapterNeedsBoard.tsx
  needsBoard: [
    {
      id: "need-1",
      category: "Nutrition",
      title: "Bulk Food Staples (Rice, Beans, Yam)",
      description: "Non-perishable grain bags, tubers of yam, semo, flour, and 25L oil kegs needed for daily meals for 239 children.",
      status: "Needed",
      placeholderTag: "10 BAGS RICE & BEANS NEEDED",
      priorityLevel: "High"
    },
    {
      id: "need-2",
      category: "Education",
      title: "School Fees, Uniforms & Mathematical Sets",
      description: "Tuition sponsorships, mathematical sets, calculators, exercise books, and school bags for 239 students.",
      status: "Needed",
      placeholderTag: "TERM TUITION & ACADEMIC PACKS",
      priorityLevel: "High"
    },
    {
      id: "need-3",
      category: "Basic Essentials",
      title: "Toiletries, Sanitary Pads & Hygiene Supplies",
      description: "Monthly laundry detergents, bar soaps, toothbrushes, towels, water bottles, and sanitary pads.",
      status: "Needed",
      placeholderTag: "HYGIENE & SANITARY SUPPLIES",
      priorityLevel: "High"
    },
    {
      id: "need-4",
      category: "Healthcare",
      title: "Clinic Bills & Medical First Aid",
      description: "Medicare coverage, child clinic bills, emergency medicines, and dermatology care for children with albinism.",
      status: "Needed",
      placeholderTag: "CLINIC & MEDICARE FUND",
      priorityLevel: "High"
    },
    {
      id: "need-5",
      category: "Home & Facilities",
      title: "School Bus Fuel & Maintenance",
      description: "Daily fuel and servicing for the VHH bus transporting children to school and clinic appointments.",
      status: "Needed",
      placeholderTag: "TRANSPORTATION & BUS FUEL",
      priorityLevel: "High"
    }
  ] as VHHNeedItem[],

  // Moments Journal for ChapterMomentsJournal.tsx & LivingPhotoJournal.tsx
  momentsJournal: [
    {
      id: "m-1",
      date: "Academic Session",
      title: "239 Children Enrolled in School",
      description: "Every resident at Vine Heritage Home is enrolled in accredited primary, secondary, and tertiary schooling.",
      imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
      tag: "Academic Excellence"
    },
    {
      id: "m-2",
      date: "Community Advocacy",
      title: "ActionAid & EU MATAI Campaign",
      description: "Active grassroots mobilization reaching 58 rural communities across the FCT to end child infanticide.",
      imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop",
      tag: "EU Partnership"
    },
    {
      id: "m-3",
      date: "Joy & Fellowship",
      title: "Weekend Cinema & Sports Games",
      description: "Visitors and caregivers organizing movie screenings, football tournaments, and creative mentorship days.",
      imageUrl: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800&auto=format&fit=crop",
      tag: "Recreation & Joy"
    }
  ] as VHHMomentEntry[],

  // Transformation Pillars for MoreThanAnOrphanage.tsx
  transformationPillars: [
    {
      id: "belonging",
      title: "A Place of Belonging",
      subtitle: "Family, Community, & Care",
      desc: "Rescued infants and children experience true family warmth, peer camaraderie, emotional stability, and the assurance that they are deeply loved.",
      tag: "Family Love"
    },
    {
      id: "learning",
      title: "A Place of Learning",
      subtitle: "Quality Education & Mentorship",
      desc: "Formal schooling from nursery to tertiary level, afternoon tutoring, calculators, math sets, and digital skills training.",
      tag: "Nursery to Tertiary"
    },
    {
      id: "character",
      title: "A Place of Character",
      subtitle: "Faith, Values & Purpose",
      desc: "Founded on Christian values by missionaries, nurturing moral discipline, self-worth, and responsible citizenship for Nigeria.",
      tag: "Moral Foundation"
    },
    {
      id: "reintegration",
      title: "A Place of Restoration",
      subtitle: "Family Tracing & Reconnection",
      desc: "As rural communities embrace cultural reform, VHH has successfully reunited 12 children with their biological families.",
      tag: "12 Children Reunited"
    }
  ],

  // Programs for Programs.tsx
  programs: [
    {
      id: "infanticide-rescue",
      title: "Infant Rescue & 24/7 Sanctuary",
      desc: "Immediate intervention saving infants from live burial, abandonment, and sacrifice; providing 24/7 shelter and nursing in Kuje.",
      details: ["Emergency Field Rescue", "24/7 House Mother Care", "Resident Home Nurse Oversight", "Nutritious Infant Formula & Meals"],
      icon: "Shield"
    },
    {
      id: "education-scholarship",
      title: "Formal Schooling & Scholarships",
      desc: "Ensuring all 239 children attend accredited schools, receive tuition sponsorship, uniforms, textbooks, and STEM mentorship.",
      details: ["Tuition from Nursery to Tertiary", "Calculators & Math Sets", "Daily Homework Mentorship", "School Bus Transportation"],
      icon: "GraduationCap"
    },
    {
      id: "healthcare-wellbeing",
      title: "Healthcare, Nutrition & Clinical Care",
      desc: "Routine wellness checkups, emergency clinic care, specialized care for children with albinism and cerebral palsy, and daily hot meals.",
      details: ["Resident Home Nurse", "Routine Health Screenings", "Special Needs Support", "Balanced 3-Meal Nutrition"],
      icon: "HeartPulse"
    },
    {
      id: "community-advocacy",
      title: "MATAI Advocacy Across 58 Communities",
      desc: "Partnering with ActionAid Nigeria and the European Union Commission to educate tribal elders and eradicate harmful cultural traditions.",
      details: ["58 FCT Target Communities", "Maternal Health Advocacy", "Elder & Chief Dialogue", "National Orientation Agency Alignment"],
      icon: "Users"
    },
    {
      id: "visitation-mentorship",
      title: "Guest Mentorship & Cinema Days",
      desc: "Welcoming visitors to teach tech, finance, music, health safety, host cinema screenings, and organize sports days.",
      details: ["Skills & Tech Workshops", "Movie / Cinema Show Days", "Athletics & Game Days", "Home & Grounds Cleaning"],
      icon: "Sparkles"
    },
    {
      id: "family-reintegration",
      title: "Rehabilitation & Family Reintegration",
      desc: "Reconnecting children with reformed biological families when communities renounce superstitious practices.",
      details: ["12 Successful Reintegrations", "Family Welfare Assessments", "Community Safety Monitoring", "Ongoing Child Follow-ups"],
      icon: "Home"
    }
  ],

  // Testimonials for Stories.tsx
  testimonials: [
    {
      id: "t1",
      role: "Alumni Story",
      headline: "“From Infant Sacrifice Rescue to Thriving at 24 Years Old.”",
      summary: "Aishat Ruth Garba was the very first child rescued in 1996 from ritual sacrifice. She was raised in love, educated, and is now a thriving 24-year-old adult reunited with her biological family.",
      placeholderTag: "HISTORIC FIRST RESCUE (1996)",
      privacyNotice: "Documented historical milestone of Vine Heritage Home Foundation."
    },
    {
      id: "t2",
      role: "Staff Perspective",
      headline: "“Over 70% of our children were rescued from being buried alive.”",
      summary: "Our dedicated 30 staff members and resident home nurse work day and night to provide love and security to children who the world almost abandoned.",
      placeholderTag: "VHH CAREGIVING TEAM (30 STAFF)",
      privacyNotice: "Verified narrative from VHH senior caregiving and medical team."
    },
    {
      id: "t3",
      role: "Partner Experience",
      headline: "“A transformative partnership reaching 58 rural communities.”",
      summary: "In collaboration with ActionAid Nigeria and the European Union, VHH is eradicating infanticide and restoring dignity to every child.",
      placeholderTag: "EU COMMISSION & ACTIONAID NIGERIA",
      privacyNotice: "Verified partnership under the MATAI project."
    }
  ],

  // Verified Board of Trustees & Executive Leadership
  executives: [
    {
      name: "Mrs. Ajibola Oyejope",
      role: "President & Trustee",
      bio: "President of the Vine Heritage Home Foundation board of trustees, providing executive governance, institutional oversight, and strategic guidance."
    },
    {
      name: "Stevens Olusola Ajayi",
      role: "Vice President, Co-Founder & Trustee",
      bio: "Christian Missionary Foundation missionary who has spearheaded the daily operations, rescues, child care, and community mediation since 2004."
    },
    {
      name: "Dr. Stevens Gloria Chinwe",
      role: "Publicity Secretary, Co-Founder & Trustee",
      bio: "Missionary who performed the historic first infant rescue in 1996. Champion for maternal health, child protection, and public awareness."
    },
    {
      name: "Mr. Njoku Geoffrey Ndubuisi",
      role: "Treasurer & Trustee",
      bio: "Trustee overseeing financial governance, stewardship, and transparent allocation of all donor contributions."
    },
    {
      name: "Prof. Oluyinka Osayame Omorogbe",
      role: "Trustee",
      bio: "Distinguished Professor of Law (Nabo Graham Douglas chair), former Edo State Attorney General and Commissioner for Justice, leading legal and human rights oversight."
    },
    {
      name: "Gabriel Aghogho Efemuaye",
      role: "Legal Counsel & Trustee",
      bio: "University of Ibadan LL.B graduate and member of the Nigerian Bar Association (NBA), providing direct legal defense, drafting, and regulatory support."
    }
  ] as ExecutiveProfile[],

  // Key Institutional Partners
  partners: [
    {
      name: "ActionAid Nigeria (AAN)",
      detail: "Co-implementer of the MATAI project targeting 58 rural communities in the FCT."
    },
    {
      name: "European Union Commission in Nigeria",
      detail: "Official sponsor and funding partner for the MATAI anti-infanticide project."
    },
    {
      name: "Amnesty International",
      detail: "Human rights advocacy partner across Abaji and Kwali Area Councils."
    },
    {
      name: "FCT Administration & NOA",
      detail: "Ministerial Panel verification and National Orientation Agency community awareness."
    },
    {
      name: "Christian Missionary Foundation",
      detail: "Missionary affiliation supporting field rescue operations since inception."
    }
  ],

  // Verified Communities Affected & Targeted by VHH
  affectedCouncils: [
    {
      councilName: "Abaji Area Council (Across Gurara)",
      communities: [
        "Kpago", "Gulida", "Baragada", "Kwakwa", "Suhoipogokolo", "Paiko Bassa",
        "Gbangede", "Shadadi", "Baribari", "Ruga", "Nasarawa", "Kutara", "Zuhi",
        "Gwaja", "Kasha", "Adagba", "Kafako Kpando", "Lapaihulohuwo", "Shipukamdu"
      ]
    },
    {
      councilName: "Gwagwalada Area Council",
      communities: [
        "Tsoho-Kaida", "Dako", "Dawaki", "Pete", "Kwalita", "Ashara", "Tsako",
        "Wuranbi", "Kuturpo Jabili", "Alonwama", "Wuyewuye", "Kasanki", "Shipipikidi", "Balaki"
      ]
    },
    {
      councilName: "Abuja Municipal Area Council (AMAC)",
      communities: [
        "Dodo", "Awana", "Tepese", "Makana", "Gwara I", "Gwara II", "Deshi",
        "Kalagba", "Gwuin", "Kulo", "Sauka"
      ]
    },
    {
      councilName: "Kwali Area Council (Across River Usman)",
      communities: [
        "Tungbudu", "Gomani", "Fuka", "Golo", "Lapa", "Tsulogwo", "Tepese",
        "Gurugi", "Sadaba", "Keru", "Gberegi", "Kwala"
      ]
    },
    {
      councilName: "Kuje Area Council",
      communities: [
        "Kulo", "Kiyi Ganarsa", "Kiyi Bassa", "Chukuku", "Gaube 1", "Buga",
        "Gbebassa", "Sabo", "Chibiri", "Gawu"
      ]
    }
  ] as CommunityAreaCouncil[],

  // Financial Transparency: How Funds Are Used (Handwritten notes & profile)
  fundAllocation: [
    {
      category: "School Bus & Transportation Fuel",
      description: "Fuel and routine maintenance for the home bus transporting 239 children daily to accredited schools, clinic visits, and safe outings.",
      icon: "Bus"
    },
    {
      category: "Caregivers & Staff Stipends",
      description: "Supporting 30 dedicated team members including house mothers, resident home nurse, kitchen staff, and security personnel who provide 24/7 care.",
      icon: "Users"
    },
    {
      category: "Medical Bills & Child Healthcare",
      description: "Routine health checks, prescription medications, emergency clinic visits, first aid supplies, and specialized therapies for children with special needs.",
      icon: "HeartPulse"
    },
    {
      category: "Kitchen Need Bills & Sustenance",
      description: "Purchasing cooking fuel, fresh ingredients, and bulk staples to prepare 3 nutritious, hot meals daily for 239 growing children.",
      icon: "Utensils"
    },
    {
      category: "Facility & Solar Power Maintenance",
      description: "Maintaining solar inverter arrays (ensuring children never sleep in darkness and funds are saved from diesel generators), water boreholes, and safe dormitories.",
      icon: "Sun"
    }
  ],

  // Specific Supplies Needed (Handwritten notes itemization)
  itemizedNeeds: {
    foodStaples: [
      "Bags of Rice (50kg)",
      "Bags of Beans (50kg)",
      "Tubers of Yam",
      "Bags of Semo & Flour",
      "Bags of Potatoes",
      "Kegs of Groundnut & Palm Oil (25L)",
      "Cooking Seasonings (Salt, Maggi, Tomato Paste)",
      "Bags of Garri",
      "Packs of Noodles & Child Snacks",
      "Infant Formula & Baby Foods"
    ],
    basicEssentials: [
      "Bar Soaps & Laundry Detergents",
      "Toothbrushes & Toothpastes",
      "Sanitary Pads & Hygiene Packs",
      "Bathing Towels & Sponges",
      "Hair Combs & Grooming Kits",
      "Children's Clothes & Shoes (All Sizes)",
      "Water Bottles for School",
      "Standing Fans for Dormitories",
      "Beddings & Mattresses"
    ],
    educationSupplies: [
      "School Fees Sponsorship (Per Term)",
      "Calculators & Mathematical Sets",
      "Exercise Books & Textbooks",
      "School Backpacks",
      "Pens, Pencils & Erasers",
      "Tech Equipment (Laptops/Tablets for Computer Classes)"
    ],
    healthcareSupplies: [
      "First Aid Kits & Disinfectants",
      "Medical Consumables & Bandages",
      "Sponsor a Child's Clinic Bills",
      "Dermatology Lotions for Children with Albinism"
    ]
  },

  // Visitation & Engagement Activities (Handwritten notes)
  visitationActivities: [
    {
      title: "Educate & Mentor Our Children",
      subtitle: "Share Your Professional & Life Skills",
      description: "Visitors and professionals can conduct interactive sessions in Tech & Digital Skills, Financial Literacy, Business, Character & Relationships, Health & Emergency Safety, and Creative Art & Music.",
      tag: "Mentorship"
    },
    {
      title: "Cinema & Movie Day",
      subtitle: "Bring the Magic of Movies",
      description: "Host or sponsor a joyful movie screening afternoon with snacks and educational films for all 239 children.",
      tag: "Recreation"
    },
    {
      title: "Sports & Fun Game Days",
      subtitle: "Teamwork & Energetic Joy",
      description: "Organize football tournaments, relay races, board games, and outdoor fun that foster team spirit and build active confidence.",
      tag: "Athletics"
    },
    {
      title: "Ground & Compound Care",
      subtitle: "Lend a Helping Hand",
      description: "Join hands with our team to help beautify, clean, and maintain the residential grounds, garden, and learning halls.",
      tag: "Hands-on Service"
    }
  ],

  // Verified Impact Statistics
  impactStats: [
    {
      id: "stat-children",
      value: "239",
      placeholderValue: "239 Children",
      defaultDisplay: "239",
      label: "Rescued Children in Residence",
      description: "Infants to teens currently receiving safe shelter, nutritious meals, accredited schooling, and parental love.",
      note: "From ages hours old to teenagers."
    },
    {
      id: "stat-communities",
      value: "58",
      label: "FCT Communities Reached",
      placeholderValue: "58 Communities",
      defaultDisplay: "58",
      description: "Targeted under the EU-funded ActionAid MATAI project to eradicate infanticide traditions.",
      note: "Across 5 FCT Area Councils."
    },
    {
      id: "stat-reunited",
      value: "12",
      placeholderValue: "12 Children",
      defaultDisplay: "12",
      label: "Reunited with Biological Families",
      description: "Children safely restored to their biological families following community enlightenment and worldview reform.",
      note: "Long-term reintegration objective."
    },
    {
      id: "stat-staff",
      value: "36",
      placeholderValue: "36 Staff & Trustees",
      defaultDisplay: "36",
      label: "Caregivers, Nurse & Trustees",
      description: "6 Executive Trustees and 30 dedicated staff including a resident home nurse working tirelessly.",
      note: "Ensuring 24/7 round-the-clock care."
    }
  ] as ImpactStat[],

  // Home Spaces
  homeSpaces: [
    {
      id: "exterior",
      title: "Residential Sanctuary & Grounds",
      description: "Located in Kuje, Abuja, FCT, designed with secure gated grounds, solar lighting, and tranquil open spaces.",
      imageUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=1200&auto=format&fit=crop",
      tag: "Safe Sanctuary",
      isConstruction: false
    },
    {
      id: "living",
      title: "Communal Living & Fellowship Halls",
      description: "Spacious family rooms where 239 children gather for evening stories, music, fellowship, and joyful peer connection.",
      imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
      tag: "Shared Spaces",
      isConstruction: false
    },
    {
      id: "learning",
      title: "Children Dormitories & Living Quarters",
      description: "Equipped with books, calculators, math sets, and computers for afternoon homework and skill tutoring.",
      imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
      tag: "Academics",
      isConstruction: false
    },
    {
      id: "dining",
      title: "Communal Kitchen & Dining",
      description: "Preparing 3 hot, balanced meals every single day with fresh ingredients and grain staples.",
      imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop",
      tag: "Nourishment",
      isConstruction: false
    },
    {
      id: "solar",
      title: "Solar & Inverter Power System",
      description: "24/7 sustainable energy eliminating diesel expenses and ensuring children study, rest, and sleep safely.",
      imageUrl: "https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=1200&auto=format&fit=crop",
      tag: "Clean Energy",
      isConstruction: false
    },
    {
      id: "recreation",
      title: "Sports Lawns & Playgrounds",
      description: "Safe outdoor space for sports matches, cinema evenings, and recreational games.",
      imageUrl: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200&auto=format&fit=crop",
      tag: "Recreation & Joy",
      isConstruction: false
    },
    {
      id: "construction",
      title: "Home Facility Development & Capacity Expansion",
      description: "Active physical construction expanding residential quarters and dormitory facilities for growing children.",
      imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
      tag: "Growing With Purpose",
      isConstruction: true
    }
  ],

  // Gallery
  galleryItems: <GalleryItem[]>[
    {
      id: "g1",
      title: "Study & Homework Tutoring",
      category: "education",
      categoryLabel: "Education",
      imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
      caption: "Children engaging in focused afternoon reading, mathematics, and collaborative schoolwork."
    },
    {
      id: "g2",
      title: "Home Sanctuary Grounds in Kuje",
      category: "home",
      categoryLabel: "The Sanctuary",
      imageUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=800&auto=format&fit=crop",
      caption: "Tranquil green grounds providing a secure and peaceful home for 239 children."
    },
    {
      id: "g3",
      title: "Solar Power System Expansion",
      category: "construction",
      categoryLabel: "Amenities",
      imageUrl: "https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=800&auto=format&fit=crop",
      caption: "Clean solar energy providing continuous electricity for study halls and dormitories.",
      isDevelopment: true
    },
    {
      id: "g4",
      title: "Sports, Games & Cinema Days",
      category: "everyday",
      categoryLabel: "Everyday Joy",
      imageUrl: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800&auto=format&fit=crop",
      caption: "Joyful athletic activities and weekend movie screenings with visitors and caregivers."
    },
    {
      id: "g5",
      title: "Creative Arts & Music Mentorship",
      category: "children",
      categoryLabel: "Arts & Skills",
      imageUrl: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?q=80&w=800&auto=format&fit=crop",
      caption: "Exploring creative talents through drawing, instruments, and storytelling."
    },
    {
      id: "g6",
      title: "Caregiver & Medical Health Check",
      category: "events",
      categoryLabel: "Healthcare",
      imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop",
      caption: "Home nurse and visiting doctors conducting routine wellness screenings."
    }
  ]
};
