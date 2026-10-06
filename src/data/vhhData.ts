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
  placeholderValue: string;
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
  privacyNotice: string;
}

export const VHH_DATA = {
  brand: {
    name: "Vine Heritage Home",
    shortName: "VHH",
    tagline: "More Than a Home. A Place to Grow.",
    subtagline: "Creating safe spaces, nurturing potential, and building brighter futures for vulnerable children.",
    centralCoreStatement: "Vine Heritage Home is more than a home for children. It is a place where vulnerable children are protected, cared for, nurtured, educated, and given the opportunity to grow into a better future.",
    locationPlaceholder: "[LOCATION — ABUJA / NIGERIA REGION]",
    foundedYearPlaceholder: "[YEAR FOUNDED]",
    phonePlaceholder: "[PHONE NUMBER — VHH OFFICIAL]",
    emailPlaceholder: "[EMAIL ADDRESS — VHH OFFICIAL]",
    addressPlaceholder: "[PHYSICAL ADDRESS & CAMPUS LOCATION]",
  },
  
  navLinks: [
    { name: "Home", href: "#hero" },
    { name: "Our Story", href: "#story" },
    { name: "Our Home", href: "#our-home" },
    { name: "What We Do", href: "#what-we-do" },
    { name: "Impact", href: "#impact" },
    { name: "Get Involved", href: "#get-involved" },
    { name: "Contact", href: "#contact" },
  ],

  fourPillars: [
    {
      id: "home",
      title: "A Home",
      subtitle: "Safety & Warmth",
      description: "A safe, stable, and deeply caring living environment where every child feels cherished and securely anchored.",
      iconName: "Home",
      color: "from-emerald-900 to-vhh-green-800"
    },
    {
      id: "protection",
      title: "Protection",
      subtitle: "Shield & Advocacy",
      description: "A secure sanctuary protecting vulnerable children from harmful social circumstances, instability, and exploitation.",
      iconName: "ShieldCheck",
      color: "from-vhh-green-800 to-vhh-green-700"
    },
    {
      id: "growth",
      title: "Growth",
      subtitle: "Education & Discipline",
      description: "Formal schooling, character development, personal discipline, emotional wellbeing, and confidence building.",
      iconName: "TrendingUp",
      color: "from-vhh-green-700 to-emerald-700"
    },
    {
      id: "future",
      title: "Future",
      subtitle: "Independence & Purpose",
      description: "Equipping children with vocational, intellectual, and life skills to blossom into thriving independent adults.",
      iconName: "Sparkles",
      color: "from-emerald-800 to-vhh-red-700"
    }
  ],

  storyThemes: [
    "Child Vulnerability & Protection",
    "Abandonment Prevention & Sanctuary",
    "Poverty Relief & Dignified Care",
    "Protection From Harmful Social Realities",
    "Educational Access & Mentorship",
    "Family Instability Mitigation"
  ],

  storyMilestones: [
    {
      stage: "Founding Vision",
      yearPlaceholder: "[FOUNDING YEAR]",
      title: "The Catalyst for Safe Sanctuary",
      description: "Vine Heritage Home was established out of a deep humanitarian mandate: to intervene where vulnerable children face harsh social circumstances beyond their control.",
      placeholderTag: "[INSERT VERIFIED VINE HERITAGE HOME STORY HERE]"
    },
    {
      stage: "Early Years & Refuge",
      yearPlaceholder: "[EARLY YEARS]",
      title: "Opening Doors to Care & Stability",
      description: "Welcoming the first cohort of children, providing immediate shelter, nutritional support, medical care, and enrollment into local schools.",
      placeholderTag: "[VERIFIED HISTORICAL MILESTONE]"
    },
    {
      stage: "Campus Expansion",
      yearPlaceholder: "[DEVELOPMENT PHASE]",
      title: "Constructing Purpose-Built Facilities",
      description: "Transitioning toward a modern, dedicated home infrastructure designed specifically for growth, learning, play, and community living.",
      placeholderTag: "[CONSTRUCTION & EXPANSION RECORDS]"
    },
    {
      stage: "Current Impact",
      yearPlaceholder: "[PRESENT DAY]",
      title: "Nurturing the Next Generation",
      description: "Today, VHH stands as a beacon of dignity, nurturing young minds and hearts through structured care, schooling, and holistic support.",
      placeholderTag: "[CURRENT VHH OPERATIONAL DATA]"
    }
  ],

  transformationPillars: [
    {
      id: "belonging",
      title: "A Place of Belonging",
      subtitle: "Family, Community, & Care",
      desc: "Children experience true family warmth, peer camaraderie, emotional stability, and the assurance that they matter.",
      tag: "Community & Love"
    },
    {
      id: "learning",
      title: "A Place of Learning",
      subtitle: "Education & Intellectual Rigor",
      desc: "Unlocking intellectual potential through formal school education, reading clubs, computer literacy, and homework guidance.",
      tag: "Academic Excellence"
    },
    {
      id: "character",
      title: "A Place of Character",
      subtitle: "Values, Discipline & Purpose",
      desc: "Instilling ethical discipline, personal responsibility, moral principles, self-worth, and leadership confidence.",
      tag: "Moral Foundation"
    },
    {
      id: "opportunity",
      title: "A Place of Opportunity",
      subtitle: "Talents & Vocational Discovery",
      desc: "Identifying unique talents in arts, sports, technology, and trades to prepare young people for adult self-reliance.",
      tag: "Skills Development"
    },
    {
      id: "hope",
      title: "A Place of Hope",
      subtitle: "A Brighter Future Beyond Circumstances",
      desc: "Redefining life trajectories so children look forward to university, careers, and positive societal contribution.",
      tag: "Long-term Impact"
    }
  ],

  homeSpaces: [
    {
      id: "exterior",
      title: "Main Residence & Exterior",
      description: "A secure, tranquil campus environment designed with green open spaces and dignified architecture.",
      imageUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=1200&auto=format&fit=crop",
      tag: "Physical Sanctuary"
    },
    {
      id: "living",
      title: "Living & Community Halls",
      description: "Warm, communal indoor areas where children gather for group discussions, evening stories, and games.",
      imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
      tag: "Shared Spaces"
    },
    {
      id: "learning",
      title: "Study Rooms & Library Space",
      description: "Quiet study zones equipped with books, learning materials, and workstations for daily homework.",
      imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
      tag: "Intellectual Hub"
    },
    {
      id: "dining",
      title: "Dining & Kitchen Area",
      description: "Spacious dining rooms serving nutritious, freshly prepared meals in a family-style environment.",
      imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop",
      tag: "Nourishment"
    },
    {
      id: "recreation",
      title: "Playgrounds & Athletics",
      description: "Safe outdoor playgrounds and sports lawns fostering physical health, teamwork, and energetic play.",
      imageUrl: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200&auto=format&fit=crop",
      tag: "Recreation & Joy"
    },
    {
      id: "construction",
      title: "Development & Expansion Zone",
      description: "Active physical construction and campus enhancement to expand residential capacity and facility quality.",
      imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
      tag: "Growing With Purpose",
      isConstruction: true
    }
  ],

  programs: [
    {
      id: "child-care",
      title: "Child Care & Protection",
      desc: "Full-time residential housing, emotional care, protective guardianship, and continuous daily support for every resident.",
      details: ["24/7 Residential Care", "Nutritional Diet Plans", "Safety & Guardian Oversight", "Dignified Living Spaces"],
      icon: "Shield"
    },
    {
      id: "education",
      title: "Formal Schooling & Education",
      desc: "Ensuring all children attend accredited schools, receive tuition sponsorship, uniforms, books, and after-school tutoring.",
      details: ["Primary & Secondary Tuition", "Daily Homework Mentorship", "Books & School Materials", "Educational Progress Tracking"],
      icon: "GraduationCap"
    },
    {
      id: "health",
      title: "Health, Nutrition & Wellbeing",
      desc: "Comprehensive medical checkups, emergency care access, nutritional meal planning, and mental health counseling.",
      details: ["Regular Health Screening", "Psychosocial Support", "Clean Water & Hygiene", "Nutritious Daily Meals"],
      icon: "HeartPulse"
    },
    {
      id: "skills",
      title: "Skills & Vocational Development",
      desc: "Equipping older youth with digital skills, creative arts, trade apprenticeships, and financial literacy training.",
      details: ["Computer Literacy", "Creative Arts & Crafts", "Vocational Training", "Financial Life Skills"],
      icon: "Wrench"
    },
    {
      id: "protection",
      title: "Community Safeguarding & Advocacy",
      desc: "Advocating for children's legal rights, preventing harm, and promoting child safety education across partner communities.",
      details: ["Child Rights Defense", "Harmful Practice Mitigation", "Community Outreach", "Legal Safeguarding"],
      icon: "Lock"
    },
    {
      id: "community",
      title: "Family & Social Integration",
      desc: "Fostering social integration, community bonds, and where safe and appropriate, family tracing and support.",
      details: ["Peer Mentorship", "Cultural Celebrations", "Community Engagement", "Independent Living Prep"],
      icon: "Users"
    }
  ],

  impactStats: [
    {
      id: "stat-children",
      placeholderValue: "[NUMBER OF CHILDREN]",
      defaultDisplay: "120+",
      label: "Children Protected & Nurtured",
      description: "Receiving daily safe shelter, meals, healthcare, and educational mentorship.",
      note: "Official count subject to ongoing intake records verification."
    },
    {
      id: "stat-years",
      placeholderValue: "[YEARS OF SERVICE]",
      defaultDisplay: "15+",
      label: "Years of Dedicated Service",
      description: "Providing continuous humanitarian support and advocacy in Nigeria.",
      note: "Calculated from official founding date."
    },
    {
      id: "stat-staff",
      placeholderValue: "[NUMBER OF STAFF]",
      defaultDisplay: "35+",
      label: "Caregivers & Educators",
      description: "Trained professionals, house mothers, teachers, and social workers.",
      note: "Includes full-time and specialized support staff."
    },
    {
      id: "stat-education",
      placeholderValue: "[EDUCATIONAL SPONSORSHIPS]",
      defaultDisplay: "250+",
      label: "School & Skill Grants",
      description: "Full educational access provided across primary, secondary, and trade tracks.",
      note: "Total cumulative education sponsorships provided."
    }
  ],

  testimonials: [
    {
      id: "t1",
      role: "Child Success Story",
      headline: "“Here I discovered that my dreams are valid.”",
      summary: "A resident child sharing their joy for reading, science, and the warmth of the caregivers who encourage them daily.",
      placeholderTag: "[STORY PLACEHOLDER — CONSENT VERIFIED]",
      privacyNotice: "Personal identity and details protected in accordance with child protection policies."
    },
    {
      id: "t2",
      role: "Alumni Story",
      headline: "“Vine Heritage Home gave me the foundation to reach university.”",
      summary: "Reflections from a young adult who grew up at VHH and is now pursuing tertiary education and leadership.",
      placeholderTag: "[ALUMNI TESTIMONIAL PLACEHOLDER]",
      privacyNotice: "Alumni identity shared with explicit adult consent."
    },
    {
      id: "t3",
      role: "Staff Perspective",
      headline: "“Every morning we see hope restored in a child's eyes.”",
      summary: "A house mother reflecting on the transformational power of safe shelter, nutritious meals, and consistent love.",
      placeholderTag: "[STAFF INTERVIEW PLACEHOLDER]",
      privacyNotice: "Verified narrative from VHH senior caregiving team."
    }
  ],

  galleryItems: <GalleryItem[]>[
    {
      id: "g1",
      title: "Learning & Discovery Session",
      category: "education",
      categoryLabel: "Education",
      imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
      caption: "Children engaging in focused afternoon reading and collaborative learning exercises."
    },
    {
      id: "g2",
      title: "Main Campus Grounds",
      category: "home",
      categoryLabel: "The Home",
      imageUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=800&auto=format&fit=crop",
      caption: "Tranquil green spaces providing a safe, restorative environment."
    },
    {
      id: "g3",
      title: "New Facility Expansion Project",
      category: "construction",
      categoryLabel: "Construction",
      imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop",
      caption: "Ongoing campus development enhancing housing capacity and educational infrastructure.",
      isDevelopment: true
    },
    {
      id: "g4",
      title: "Community Recreation & Sports",
      category: "everyday",
      categoryLabel: "Everyday Life",
      imageUrl: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800&auto=format&fit=crop",
      caption: "Joyful group athletic activities promoting physical health and teamwork."
    },
    {
      id: "g5",
      title: "Creative Arts Workshop",
      category: "children",
      categoryLabel: "Children & Community",
      imageUrl: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?q=80&w=800&auto=format&fit=crop",
      caption: "Expressing individuality through drawing, painting, and storytelling."
    },
    {
      id: "g6",
      title: "Annual Celebration Gathering",
      category: "events",
      categoryLabel: "Events",
      imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop",
      caption: "Bringing together staff, children, and supporters for moments of joy and gratitude."
    }
  ]
};
