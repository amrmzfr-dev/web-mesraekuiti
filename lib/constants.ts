import type {
  TreatmentTier,
  FAQItem,
  BenefitTile,
  HowItWorksStep,
  WhatIsOzoneColumn,
  ComparisonRow,
  OperatorBenefit,
  StatItem,
} from "./types";

// ─── Site Metadata ────────────────────────────────────────────────────────────
export const SITE_NAME = "OzoneCare";
export const SITE_TAGLINE = "Chemical-free. Eco-friendly. Made for Malaysia.";
export const SITE_DESCRIPTION =
  "Professional ozone sanitization for car interiors. Chemical-free, residue-free, and effective against bacteria, mold, and odor.";
export const CONTACT_WHATSAPP = "601XXXXXXXXX";
export const CONTACT_FORMSPREE = "https://formspree.io/f/placeholder";

// ─── Navigation ───────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Technology", href: "/technology" },
  { label: "Treatments", href: "/treatments" },
  { label: "For Operators", href: "/operators" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

// ─── Hero ─────────────────────────────────────────────────────────────────────
export const HERO = {
  eyebrow: "O₃ Technology — Chemical-Free Car Sanitization",
  headline: "Your Car Interior Is Not As Clean As You Think.",
  highlight: "Not As Clean",
  subheadline:
    "The average car interior harbors bacteria, mold, and allergens that conventional cleaning cannot reach. Our ozone technology eliminates it all — without a single chemical.",
  ctaPrimary: { label: "Explore the Technology", href: "/technology" },
  ctaSecondary: { label: "See Treatment Tiers", href: "/treatments" },
  badges: [
    { value: "99.9%", label: "Pathogen Kill Rate" },
    { value: "15 min", label: "Maximum Treatment" },
    { value: "0%", label: "Chemical Residue" },
    { value: "O₂", label: "After Treatment" },
  ],
} as const;

// ─── The Problem ──────────────────────────────────────────────────────────────
export const THE_PROBLEM = {
  eyebrow: "The Hidden Reality",
  heading: "What's Living Inside Your Car Right Now?",
  subheading:
    "Studies on vehicle interior hygiene reveal numbers most car owners would rather not know — until now.",
  stats: [
    {
      value: 700,
      suffix: "+",
      label: "Bacterial Species",
      sub: "found in average car interiors worldwide",
    },
    {
      value: 80,
      suffix: "%",
      label: "of Car Owners",
      sub: "never disinfect beyond surface wiping",
    },
    {
      value: 500,
      suffix: "+",
      label: "Contaminants",
      sub: "detected in untreated vehicle cabin air",
    },
  ] as StatItem[],
  facts: [
    "Your steering wheel can harbour more bacteria per cm² than a public toilet seat",
    "Mold spores begin colonising damp fabric and vents within 24–48 hours after rain",
    "Air conditioning systems recirculate trapped bacteria and allergens every cycle",
    "Sweat, food residue, and pet dander accumulate in fibres no spray can fully reach",
    "Children and allergy sufferers are disproportionately exposed in enclosed cabin air",
    "Chemical-based fresheners mask odours — they do not eliminate the source",
  ],
} as const;

// ─── What Is Ozone ────────────────────────────────────────────────────────────
export const WHAT_IS_OZONE_HEADING = "What Is Ozone Sanitization?";
export const WHAT_IS_OZONE_SUBHEADING =
  "Ozone (O₃) is nature's own sanitizing agent — harnessed to clean where chemicals cannot reach.";

export const WHAT_IS_OZONE_COLUMNS: WhatIsOzoneColumn[] = [
  {
    icon: "Atom",
    title: "What Is Ozone (O₃)?",
    body: "Ozone is a naturally occurring molecule made of three oxygen atoms. Found in Earth's upper atmosphere, it has been used for decades in medical, food, and water industries for its powerful sanitization properties. It is not a synthetic chemical — it is a form of oxygen.",
  },
  {
    icon: "ShieldCheck",
    title: "How Does It Sanitize?",
    body: "When ozone gas disperses inside your car, it actively attacks the cell walls of bacteria, viruses, mold, and fungi — breaking them down at the molecular level. It also neutralizes odor compounds on contact, eliminating the source rather than masking the smell.",
  },
  {
    icon: "Leaf",
    title: "Why Is It Safe?",
    body: "Ozone naturally reverts back to plain oxygen (O₂) after treatment — leaving absolutely zero chemical residue in your car. No synthetic compounds, no fragrances, no moisture. The car is ready to use as soon as the treatment completes.",
  },
];

// ─── How It Works ─────────────────────────────────────────────────────────────
export const HOW_IT_WORKS_HEADING = "How It Works";
export const HOW_IT_WORKS_SUBHEADING =
  "A simple, non-invasive four-step process that requires no preparation and leaves no mess.";

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    number: "01",
    title: "Seal the Interior",
    description:
      "Windows up, doors closed. The car interior is fully sealed to allow ozone to build up and reach effective sanitization concentration levels.",
  },
  {
    number: "02",
    title: "Machine Activated",
    description:
      "Our ozone machine is placed inside the car and switched on. It begins generating ozone gas that disperses evenly throughout the entire cabin.",
  },
  {
    number: "03",
    title: "Ozone Does the Work",
    description:
      "Ozone penetrates every corner — air vents, under seats, carpet fibers, door gaps — reaching areas no spray or wipe can physically access.",
  },
  {
    number: "04",
    title: "Back to Clean Oxygen",
    description:
      "After treatment, ozone naturally converts back to O₂. The car is ready. No residue, no odor, no chemicals left behind.",
  },
];

// ─── Treatments ───────────────────────────────────────────────────────────────
export const TREATMENTS_HEADING = "Treatment Tiers";
export const TREATMENTS_SUBHEADING =
  "Three levels of treatment intensity to match your needs — from everyday maintenance to full antimicrobial protection.";

export const TREATMENTS: TreatmentTier[] = [
  {
    id: "basic",
    name: "Basic",
    duration: "5 minutes",
    tagline: "Everyday Freshness",
    description:
      "Perfect for routine maintenance and daily use. Eliminates mild odors and refreshes air quality — ideal for a quick refresh between deeper sessions.",
    features: [
      "Light odor neutralization",
      "Air quality refresh",
      "Surface-level bacteria reduction",
      "Suitable for regular maintenance",
    ],
  },
  {
    id: "standard",
    name: "Standard",
    duration: "10 minutes",
    tagline: "Deep Sanitization",
    description:
      "Comprehensive treatment for allergen reduction and deeper sanitization. Recommended after long trips, wet weather, or seasonal maintenance.",
    features: [
      "Everything in Basic",
      "Allergen reduction",
      "Bacteria and virus elimination",
      "Fabric fiber penetration",
      "Air vent deep clean",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    duration: "15 minutes",
    tagline: "Full Antimicrobial Treatment",
    description:
      "The most thorough treatment available. Targets deep-seated mold, fungi, and contamination across all materials, gaps, and surfaces in your car.",
    features: [
      "Everything in Standard",
      "Mold and fungi elimination",
      "Maximum ozone concentration",
      "Deepest penetration into all gaps",
      "Under-seat and boot coverage",
    ],
    badge: undefined,
    highlighted: true,
  },
];

// ─── Comparison Table ─────────────────────────────────────────────────────────
export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    feature: "Treatment Duration",
    basic: "5 minutes",
    standard: "10 minutes",
    premium: "15 minutes",
  },
  {
    feature: "Odor Elimination",
    basic: true,
    standard: true,
    premium: true,
  },
  {
    feature: "Bacteria Reduction",
    basic: "Surface-level",
    standard: "Deep",
    premium: "Maximum",
  },
  {
    feature: "Virus Elimination",
    basic: false,
    standard: true,
    premium: true,
  },
  {
    feature: "Mold & Fungi Treatment",
    basic: false,
    standard: "Partial",
    premium: true,
  },
  {
    feature: "Allergen Reduction",
    basic: false,
    standard: true,
    premium: true,
  },
  {
    feature: "Air Vent Penetration",
    basic: "Light",
    standard: true,
    premium: "Maximum",
  },
  {
    feature: "Under-Seat Coverage",
    basic: false,
    standard: "Partial",
    premium: true,
  },
  {
    feature: "Recommended Frequency",
    basic: "Weekly",
    standard: "Monthly",
    premium: "Quarterly",
  },
  {
    feature: "Chemical Residue",
    basic: "None",
    standard: "None",
    premium: "None",
  },
];

// ─── Why Ozone ────────────────────────────────────────────────────────────────
export const WHY_OZONE_HEADING = "Why Choose Ozone?";
export const WHY_OZONE_SUBHEADING =
  "Six reasons why ozone sanitization outperforms every conventional cleaning method.";

export const WHY_OZONE_BENEFITS: BenefitTile[] = [
  {
    icon: "FlaskConical",
    title: "Chemical-Free & Residue-Free",
    description:
      "No sprays, no liquids, no synthetic compounds. Ozone does the work and converts back to oxygen — leaving absolutely nothing behind.",
  },
  {
    icon: "Wind",
    title: "Reaches Everywhere",
    description:
      "Ozone gas penetrates air vents, under seats, carpet fibers, and door gaps — areas that are physically impossible to clean by hand or spray.",
  },
  {
    icon: "Microscope",
    title: "Kills at Molecular Level",
    description:
      "Ozone destroys bacteria, viruses, mold, and fungi by breaking down their cell walls — not suppressing them temporarily, but eliminating them.",
  },
  {
    icon: "Sprout",
    title: "Eco-Friendly by Nature",
    description:
      "No waste, no chemicals, no environmental impact. Ozone converts to pure oxygen after treatment — a truly clean, sustainable process.",
  },
  {
    icon: "Car",
    title: "Safe for Car Materials",
    description:
      "Non-invasive and contact-free. Completely safe for all car surfaces, electronics, leather, fabric, and rubber seals.",
  },
  {
    icon: "AirVent",
    title: "No Smell Left Behind",
    description:
      "Unlike air fresheners that mask odors, ozone eliminates odor-causing compounds at the source. Genuinely neutral air — not a fragrance cover-up.",
  },
];

// ─── Technology Page ──────────────────────────────────────────────────────────
export const TECHNOLOGY_HERO = {
  eyebrow: "The Science",
  heading: "How Ozone Eliminates What Chemicals Cannot",
  subheading:
    "O₃ is not a cleaning product — it is a molecular process. Understanding the science explains why it achieves results that no spray, wipe, or fragrance can replicate.",
};

export const MECHANISM_STEPS = [
  {
    step: "01",
    title: "Ozone Generated",
    description:
      "The machine passes air through a high-voltage chamber, splitting O₂ molecules and recombining them into O₃ — ozone gas.",
    icon: "Zap",
  },
  {
    step: "02",
    title: "Dispersal",
    description:
      "Being lighter than most air molecules, O₃ disperses rapidly and uniformly, reaching every sealed corner of the cabin.",
    icon: "Wind",
  },
  {
    step: "03",
    title: "Oxidative Attack",
    description:
      "O₃ is an aggressive oxidizer. On contact with pathogens, it ruptures cell walls and destroys the molecular structure of bacteria, viruses, and mold.",
    icon: "Zap",
  },
  {
    step: "04",
    title: "Reversion to O₂",
    description:
      "Once the oxidative work is done, the unstable third oxygen atom detaches and pairs with another oxygen — O₃ becomes O₂. Completely clean.",
    icon: "Leaf",
  },
];

export const SAFETY_FACTS = [
  {
    title: "WHO-Recognized Disinfectant",
    body: "The World Health Organization recognizes ozone as one of the most effective disinfectants available, with a broad-spectrum kill rate against bacteria, viruses, and fungi.",
  },
  {
    title: "Used in Hospitals & Food Processing",
    body: "Ozone technology has been used in medical-grade sterilization and commercial food processing for decades — long before it was applied to vehicle interiors.",
  },
  {
    title: "Safe Residual Levels",
    body: "After treatment concludes, ozone reverts to O₂ within minutes. No residual ozone remains at levels detectable by smell or harmful to occupants.",
  },
  {
    title: "No Secondary Contamination",
    body: "Unlike chemical disinfectants which can leave reactive compounds on surfaces, ozone produces no secondary by-products. The only output is clean oxygen.",
  },
];

export const COMPARISON_METHODS = [
  {
    name: "Ozone (O₃)",
    bacteria: "99.9%",
    mold: "Full",
    reach: "All areas",
    residue: "None",
    eco: true,
    highlight: true,
  },
  {
    name: "Chemical Spray",
    bacteria: "60–80%",
    mold: "Partial",
    reach: "Surface only",
    residue: "Yes",
    eco: false,
    highlight: false,
  },
  {
    name: "Air Freshener",
    bacteria: "0%",
    mold: "0%",
    reach: "Air only",
    residue: "Fragrance",
    eco: false,
    highlight: false,
  },
  {
    name: "Steam Clean",
    bacteria: "70–85%",
    mold: "Partial",
    reach: "Limited",
    residue: "Moisture",
    eco: true,
    highlight: false,
  },
];

// ─── Who Is It For ────────────────────────────────────────────────────────────
export const WHO_IS_IT_FOR_HEADING = "Who Is This For?";

export const WHO_PUBLIC = {
  eyebrow: "For Car Owners",
  heading: "Your Car Interior May Be Harboring More Than You Think",
  body: "Every time you enter your car, you breathe air that has been trapped inside. Bacteria from sweat and food, mold spores from rain and humidity, microscopic allergens from dust and pets — all accumulate over time in your car's fabric, vents, and surfaces. Our ozone treatment neutralizes all of it, without a single spray or wipe.",
  cta: { label: "Ask Us About Treatment", href: "/contact" },
};

export const WHO_OPERATORS = {
  eyebrow: "For Service Centers",
  heading: "Bring Ozone Sanitization to Your Workshop",
  body: "As a service center, car wash, or automotive workshop, you can offer ozone sanitization as a premium service to your customers. No chemicals to restock. No specialized technicians required. A professional, value-added offering that differentiates your workshop from the competition.",
  cta: { label: "Learn About Operator Partnership", href: "/operators" },
};

// ─── Operators Page ───────────────────────────────────────────────────────────
export const OPERATOR_HERO = {
  eyebrow: "For Workshop Operators",
  heading: "Add a High-Margin Service to Your Workshop — Without the Overhead",
  subheading:
    "Ozone sanitization requires no chemicals, no consumables, no specialized labor. Install once, offer forever. Your customers already want it — they just haven't been offered it yet.",
  revenueLabel: "Potential additional monthly revenue",
  revenueNote: "Based on 5 treatments/day at illustrative pricing",
};

export const OPERATOR_BENEFITS: OperatorBenefit[] = [
  {
    counter: 0,
    suffix: "",
    label: "Consumables to restock",
    icon: "Package",
    title: "Zero Consumables",
    description:
      "No chemicals to purchase, store, or reorder. The ozone machine uses only ambient air — your only ongoing cost is electricity.",
  },
  {
    counter: 5,
    suffix: " min",
    label: "minimum per treatment",
    icon: "Timer",
    title: "Fast Turnaround",
    description:
      "Each treatment runs from 5 to 15 minutes. You can service a car while other work is underway — it fits into any existing workflow.",
  },
  {
    counter: 3,
    suffix: "",
    label: "Treatment tiers to offer",
    icon: "LayoutGrid",
    title: "Flexible Tiering",
    description:
      "Offer Basic, Standard, and Premium at different price points to suit every customer and budget — without any additional hardware.",
  },
  {
    icon: "TrendingUp",
    title: "Premium Positioning",
    description:
      "Ozone sanitization is a differentiated, visible service. Customers who experience it return for it. It becomes part of your workshop's identity.",
  },
  {
    icon: "Wrench",
    title: "No Technical Complexity",
    description:
      "The machine is placed, switched on, and removed. No calibration, no chemicals, no cleanup. Any staff member can operate it within minutes.",
  },
  {
    icon: "ShieldCheck",
    title: "Safe and Compliant",
    description:
      "Ozone technology is internationally recognized as a safe disinfection method. No special licensing or disposal protocols required.",
  },
];

export const OPERATOR_PROCESS = [
  {
    step: "01",
    title: "Inquire",
    description:
      "Fill out the operator inquiry form. Our team will contact you within 1–2 business days to understand your workshop setup and volume.",
  },
  {
    step: "02",
    title: "Onboard",
    description:
      "We deliver the machine and walk your team through a brief operation demonstration. Setup takes less than an hour.",
  },
  {
    step: "03",
    title: "Offer",
    description:
      "Add ozone sanitization to your service menu. We provide signage, consultation on pricing tiers, and customer-facing materials.",
  },
  {
    step: "04",
    title: "Earn",
    description:
      "Every treatment you perform adds high-margin revenue with no consumable cost. The machine pays for itself quickly.",
  },
];

export const OPERATOR_FAQ: FAQItem[] = [
  {
    question: "Do I need specialized staff to operate the machine?",
    answer:
      "No. The machine requires no technical knowledge to operate. Any staff member can be trained within minutes — place the machine, press a button, remove it after the timer. That is the entire process.",
  },
  {
    question: "What are the ongoing costs after purchase?",
    answer:
      "The only ongoing cost is electricity. There are no chemicals, consumables, or replacement parts under normal operating conditions. This is what makes the margin on each treatment so attractive.",
  },
  {
    question: "Can I offer this alongside existing detailing services?",
    answer:
      "Yes — and we recommend it. Ozone sanitization pairs naturally with interior detailing, car wash packages, and post-service delivery. Many operators offer it as an add-on upgrade.",
  },
  {
    question: "Is there a minimum volume commitment?",
    answer:
      "No. There is no monthly minimum or volume requirement. You offer the service at your own pace and to the customers you choose. We support at whatever scale you operate.",
  },
  {
    question: "What support is provided after setup?",
    answer:
      "We provide ongoing operational support via WhatsApp, customer-facing materials, and guidance on service positioning. You are not left to figure it out alone.",
  },
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────
export const FAQ_HEADING = "Frequently Asked Questions";
export const FAQ_SUBHEADING =
  "Everything you need to know about ozone sanitization for your car.";

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Is ozone safe for humans and pets?",
    answer:
      "Ozone should not be inhaled directly, so treatment is performed with no one inside the car. Once the treatment ends, ozone naturally converts back to oxygen within minutes — making it completely safe to re-enter. No residue, no chemicals, no ongoing risk.",
  },
  {
    question: "How long does the treatment take?",
    answer:
      "Treatment durations depend on the tier selected: Basic is 5 minutes, Standard is 10 minutes, and Premium is 15 minutes. Add a few minutes for setup and a brief airing-out period — the entire process is quick and non-intrusive.",
  },
  {
    question: "Will it damage my car interior?",
    answer:
      "No. Ozone gas does not produce moisture, heat, or physical contact with surfaces. It is safe for all car interiors including leather, fabric, plastic trim, electronics, and rubber seals. Unlike steam or chemical sanitization, there is no risk of material degradation.",
  },
  {
    question: "Does the effect last long?",
    answer:
      "The sanitization effect is immediate and thorough. How long it lasts depends on usage patterns — if you regularly eat in your car or carry pets, a treatment every few months is recommended. For general use, a quarterly session is usually sufficient.",
  },
  {
    question: "Is it the same as an air freshener?",
    answer:
      "Not at all. Air fresheners mask odors by introducing a stronger fragrance on top. Ozone treatment eliminates odor-causing compounds at the molecular level — including bacteria, mold, and volatile organic compounds. The result is genuinely neutral air, not a fragrance cover-up.",
  },
  {
    question: "Do I need to remove anything from the car?",
    answer:
      "Remove personal belongings, food items, and any heat-sensitive materials. Pets and people must not be present during treatment. No major preparation is required beyond that — the ozone reaches everything including the glove compartment and boot area.",
  },
  {
    question: "What is the difference between the 3 treatments?",
    answer:
      "The difference is intensity and duration of exposure. Basic (5 min) handles everyday freshness and mild odors. Standard (10 min) provides deeper sanitization including allergen and bacteria reduction. Premium (15 min) is a full antimicrobial treatment targeting mold, fungi, and deep contamination across all materials.",
  },
  {
    question: "Is there any chemical residue after treatment?",
    answer:
      "None. That is the key advantage of ozone. It performs the sanitization and then converts back completely to oxygen (O₂). There are no synthetic chemicals, no fragrances, and no moisture — nothing left behind except a cleaner, fresher interior.",
  },
];

// ─── Contact ──────────────────────────────────────────────────────────────────
export const CONTACT_HERO = {
  eyebrow: "Get in Touch",
  heading: "We Are Here to Help",
  subheading:
    "Whether you are a car owner curious about treatment or a workshop operator ready to add ozone service — reach out and we will respond within 1–2 business days.",
};

export const CONTACT_PUBLIC = {
  heading: "For Car Owners",
  body: "Have a question or want to arrange a treatment? Send us a message on WhatsApp and we will get back to you promptly.",
  cta: "Chat on WhatsApp",
};

export const CONTACT_OPERATORS = {
  heading: "For Service Center Operators",
  body: "Interested in offering ozone sanitization at your workshop? Fill in the form and we will reach out within 1–2 business days.",
  note: "We'll reach out within 1–2 business days.",
};

export const MALAYSIA_STATES = [
  "Johor",
  "Kedah",
  "Kelantan",
  "Kuala Lumpur",
  "Labuan",
  "Melaka",
  "Negeri Sembilan",
  "Pahang",
  "Perak",
  "Perlis",
  "Pulau Pinang",
  "Putrajaya",
  "Sabah",
  "Sarawak",
  "Selangor",
  "Terengganu",
] as const;

// ─── Footer ───────────────────────────────────────────────────────────────────
export const FOOTER_TAGLINE = "Chemical-free. Eco-friendly. Made for Malaysia.";
export const COMPANY_NAME = "Mesra Ekuiti Sdn Bhd";
export const FOOTER_COPYRIGHT = `© 2025 ${SITE_NAME}. All rights reserved.`;
