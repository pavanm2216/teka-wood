/**
 * Nature's Canopy — Source of Truth
 * Drawn directly from "Final Updated – 350 Acres Nature’s Canopy Ramanathapuram Proposal"
 */

export interface CostItem {
  category: string;
  amount: number;
  formattedAmount: string;
  notes: string;
  percentageOfTotal: number;
}

export interface PaymentMilestone {
  percentage: number;
  trigger: string;
  description: string;
}

export interface TimelineStage {
  period: string;
  title: string;
  focus: string;
  activities: string[];
}

export interface YearAppreciation {
  year: string;
  valuePerTree: number;
  formattedPerTree: string;
  totalValueCrore: number;
  formattedTotal: string;
  stageNote: string;
}

export interface ServiceDetail {
  id: string;
  name: string;
  category: 'Planning' | 'Establishment' | 'Operations' | 'Infrastructure';
  summary: string;
  deliverables: string[];
  roleInDevelopment: string;
  inRamanathapuramScope: boolean;
  notes?: string;
}

export const RAMANATHAPURAM_PROJECT = {
  name: "350-Acre Teak Plantation — Ramanathapuram",
  location: "Ramanathapuram District, Tamil Nadu, India",
  proposedAreaAcres: 350,
  plannedSaplings: 122500,
  plannedDensityPerAcre: 350,
  projectDurationYears: "8+ Years",
  proposedHarvestTiming: "End of Year 8",
  initialEstimatedCostNumber: 125959700,
  initialEstimatedCostFormatted: "₹12,59,59,700",
  initialEstimatedCostApprox: "₹12.60 Crore",
  
  // Baseline Harvest Projections
  assumedVolumePerTreeCFT: 25,
  assumedPricePerCFT: 2000,
  illustrativeGrossHarvestValueCrore: 612.5,
  illustrativeGrossHarvestValueFormatted: "₹612.5 Crore",
  
  // Mortality & Maintenance Terms
  mortalityProtectionTerms: "Proposal states 100% replacement during the first two years (subject to final signed contractual conditions & site protocols).",
  postYearOneMaintenance: "Years 2–8 ongoing maintenance is billed quarterly based on actual manpower, wages, and materials with verifiable operational reports. Initial project cost does not cover ongoing maintenance for Years 2–8.",
  
  growthBenchmark: "The proposal references a target benchmark where at least 90% of planted saplings attain designated height and girth standards before milestone handovers."
};

export const INITIAL_COST_BREAKDOWN: CostItem[] = [
  {
    category: "Saplings and planting",
    amount: 80871000,
    formattedAmount: "₹8,08,71,000",
    notes: "High-yield micro-clonal / certified tissue-culture teak saplings, transportation, digging, and planting.",
    percentageOfTotal: 64.2
  },
  {
    category: "Pre-plantation",
    amount: 5337500,
    formattedAmount: "₹53,37,500",
    notes: "Land surveying, demarcation, clearance, land leveling, soil preparation, and drainage layout.",
    percentageOfTotal: 4.2
  },
  {
    category: "Drip irrigation",
    amount: 14408100,
    formattedAmount: "₹1,44,08,100",
    notes: "Mainlines, sub-mains, lateral drip tubes, filtration units, pumps, and water management controls.",
    percentageOfTotal: 11.4
  },
  {
    category: "Fencing",
    amount: 5343100,
    formattedAmount: "₹53,43,100",
    notes: "Heavy-duty perimeter fencing, corner reinforcements, gates, and boundary deterrence.",
    percentageOfTotal: 4.2
  },
  {
    category: "Other costs",
    amount: 20000000,
    formattedAmount: "₹2,00,00,000",
    notes: "Borewells, ponds, site sheds, internal wiring, surveillance infrastructure, solar lighting, and labour amenities.",
    percentageOfTotal: 15.9
  }
];

export const PAYMENT_SCHEDULE: PaymentMilestone[] = [
  {
    percentage: 20,
    trigger: "At Contract Signing",
    description: "Initial mobilization, survey, site layout, land clearing, and procurement commencement."
  },
  {
    percentage: 60,
    trigger: "After Saplings Reach Site",
    description: "Receipt and verification of 1,22,500 tissue-culture saplings, installation of irrigation, fencing, and mass planting."
  },
  {
    percentage: 10,
    trigger: "When Plants Reach 5 Feet",
    description: "First biological growth validation milestone, confirming survival and establishment standards."
  },
  {
    percentage: 10,
    trigger: "When Plants Reach 10 Feet",
    description: "Second biological development milestone, establishing strong root structures and canopy formation."
  }
];

export const PLANTATION_JOURNEY_STAGES: TimelineStage[] = [
  {
    period: "Year 1",
    title: "Site Establishment & Planting",
    focus: "Foundation, Infrastructure, and Early Canopy Rooting",
    activities: [
      "Topographical survey, CAD demarcation, and sector plotting",
      "Land preparation, soil enrichment, and drainage excavation",
      "Installation of perimeter fencing, water storage ponds, and borewells",
      "Assembly of precision drip irrigation networks across sectors",
      "Planting of 1,22,500 micro-clonal tissue-culture saplings (350/acre)",
      "Intensive weed management, mulching, and bi-weekly growth auditing"
    ]
  },
  {
    period: "Years 2–3",
    title: "Early Canopy & Structural Development",
    focus: "Girth Expansion and Apical Dominance",
    activities: [
      "Targeted lateral pruning to encourage straight, knot-free clear boles",
      "Continued scheduled drip fertigation and soil micro-nutrient replenishment",
      "Mortality auditing with 100% sapling replacement under proposal terms",
      "Quarterly operational maintenance reporting and labour supervision",
      "Fireline maintenance, boundary protection, and monsoon drainage monitoring"
    ]
  },
  {
    period: "Years 4–5",
    title: "Continued Canopy Growth",
    focus: "Timber Density & Heartwood Initiation",
    activities: [
      "Secondary selective pruning and crown management",
      "Girth and diameter breast height (DBH) annual silvicultural audits",
      "Ongoing seasonal soil loosening, organic manuring, and pest inspections",
      "Systematic maintenance of irrigation pumps, pond liners, and power infrastructure",
      "Quarterly manpower and wage reconciliation reports"
    ]
  },
  {
    period: "Years 6–7",
    title: "Pre-Harvest Planning & Maturation",
    focus: "Commercial Timber Volume Consolidation",
    activities: [
      "High-precision timber inventory surveys measuring merchantable CFT volume",
      "Logging logistics, transit route planning, and heavy access road reinforcement",
      "Review of forest transit rules, local regulatory clearances, and cutting permits",
      "Preliminary engagement with certified timber yards and industrial buyers",
      "Final phase canopy health preservation and fire prevention regimes"
    ]
  },
  {
    period: "Year 8+",
    title: "Proposed Harvest Stage",
    focus: "Selective Commercial Harvesting & Value Realization",
    activities: [
      "Formal verification of commercial tree girth and volume readiness",
      "Procurement of statutory timber cutting and transit permissions",
      "Staged tree felling, debarking, measuring, and log serialization",
      "Log grading according to girth, heartwood ratio, and defect-free length",
      "Transportation to authorized timber auction depots or corporate processors"
    ]
  }
];

export const ILLUSTRATIVE_YEARLY_VALUES: YearAppreciation[] = [
  { year: "Year 1", valuePerTree: 2000, formattedPerTree: "₹2,000", totalValueCrore: 24.5, formattedTotal: "₹24.5 Crore", stageNote: "Sapling established & initial root system anchored." },
  { year: "Year 2", valuePerTree: 4000, formattedPerTree: "₹4,000", totalValueCrore: 49.0, formattedTotal: "₹49.0 Crore", stageNote: "Rapid vertical growth with initial bole formation." },
  { year: "Year 3", valuePerTree: 6000, formattedPerTree: "₹6,000", totalValueCrore: 73.5, formattedTotal: "₹73.5 Crore", stageNote: "Canopy closure and stem strengthening." },
  { year: "Year 4", valuePerTree: 8000, formattedPerTree: "₹8,000", totalValueCrore: 98.0, formattedTotal: "₹98.0 Crore", stageNote: "Heartwood formation initiates within the central core." },
  { year: "Year 5", valuePerTree: 10000, formattedPerTree: "₹10,000", totalValueCrore: 122.5, formattedTotal: "₹122.5 Crore", stageNote: "Girth expansion accelerates; commercial volume building." },
  { year: "Year 6", valuePerTree: 15000, formattedPerTree: "₹15,000", totalValueCrore: 183.75, formattedTotal: "₹183.75 Crore", stageNote: "Substantial merchantable wood volume reached." },
  { year: "Year 7", valuePerTree: 20000, formattedPerTree: "₹20,000", totalValueCrore: 245.0, formattedTotal: "₹245.0 Crore", stageNote: "Pre-harvest maturation and log grading preparation." },
  { year: "Year 8 (Harvest)", valuePerTree: 50000, formattedPerTree: "₹50,000", totalValueCrore: 612.5, formattedTotal: "₹612.5 Crore", stageNote: "Projected harvest value: 25 CFT @ ₹2,000/CFT gross." }
];

export const PROPOSAL_ITEMS_TO_CONFIRM = [
  {
    title: "Fencing Scope Reconciliation (400 vs 350 Acres)",
    finding: "The fencing quote breakdown mentions 400 acres of perimeter protection, whereas the overall project scope states 350 acres.",
    action: "Confirm exact perimeter boundary perimeter meterage and survey coordinates prior to contractual signing."
  },
  {
    title: "Drip Irrigation Area Specification (30.67 vs 350 Acres)",
    finding: "An itemized drip irrigation quotation sheet in the source materials references 30.67 acres, contrasting with the full 350-acre requirement.",
    action: "Confirm whether this was a modular pilot quotation or if the ₹1,44,08,100 figure covers the entire 350-acre master network."
  },
  {
    title: "Total Scope Inclusivity of Initial Estimate",
    finding: "Initial project estimate is ₹12,59,59,700 for Phase 1 establishment.",
    action: "Confirm all land preparation sub-elements and verify that client responsibilities (power grid connection, clearing large external boulders, local community relations) are clearly carved out."
  }
];

export const CLIENT_VS_MANAGEMENT_RESPONSIBILITIES = {
  managementScope: [
    "Tissue-culture teak sapling sourcing, transit, and replacement",
    "Topographical survey, grid layout, CAD plotting, and demarcation",
    "Land clearing, leveling, deep plowing, and pit excavation",
    "Perimeter fencing installation, corner pillars, and gate placement",
    "Complete drip irrigation layout, sub-mains, and pressure filtration",
    "Water storage ponds, borewell connections, and pump installations",
    "Labour staffing, site supervisors, and worker camp facilities",
    "Silvicultural supervision: pruning, desuckering, weeding, and soil loosening",
    "Site surveillance systems, security alarms, and solar lighting installation",
    "Quarterly operational status and expenditure transparency reports"
  ],
  clientResponsibilities: [
    "High-tension / agricultural electrical power supply connection to site boundary",
    "Handling local community matters, jurisdictional permits, and rights-of-way",
    "Clearance of massive natural boulders or structural obstructions requiring specialized civil demolition",
    "Timely approval and funding of quarterly actual manpower maintenance invoices for Years 2 through 8"
  ]
};

export const SERVICES_CATALOG: ServiceDetail[] = [
  {
    id: "land-dev",
    name: "Land Development & Preparation",
    category: "Planning",
    summary: "Systematic topographical surveying, CAD demarcation, heavy brush removal, land leveling, and contoured drainage.",
    deliverables: ["Topographical survey map", "Sector-wise CAD grid plan", "Drainage channel network", "Plowed and pulverized soil beds"],
    roleInDevelopment: "Creates uniform planting conditions, eliminates waterlogging risks, and ensures orderly access for machinery and labour.",
    inRamanathapuramScope: true
  },
  {
    id: "sapling-supply",
    name: "Tissue-Culture Teak Sapling Supply",
    category: "Establishment",
    summary: "High-performance micro-clonal tissue-culture teak saplings selected for straight-bole apical growth and rapid heartwood formation.",
    deliverables: ["Certified genetically uniform saplings", "Disease-free inspection certificate", "Climate-hardened nursery stock", "Protective freight packaging"],
    roleInDevelopment: "Ensures higher survival rates, uniform growth rates, reduced knot formation, and superior commercial timber yield.",
    inRamanathapuramScope: true
  },
  {
    id: "plantation-layout",
    name: "Plantation Layout & Demarcation",
    category: "Planning",
    summary: "Precision grid demarcation ensuring exact 350-plant-per-acre spacing, internal arterial roads, and utility corridors.",
    deliverables: ["GPS-tagged sector boundary markers", "Inter-row vehicular pathways", "Inspection alleys", "Digital plantation registry"],
    roleInDevelopment: "Maximizes sunlight penetration, simplifies mechanical operations, and facilitates streamlined silvicultural maintenance.",
    inRamanathapuramScope: true
  },
  {
    id: "fencing-protection",
    name: "Fencing & Site Protection",
    category: "Establishment",
    summary: "Heavy-duty perimeter solar or chain-link fencing, reinforced corner posts, and lockable security gates.",
    deliverables: ["Perimeter barrier structure", "Vehicle-grade security gates", "Livestock intrusion deterrents", "Warning signage"],
    roleInDevelopment: "Guards fragile young saplings against grazing livestock, wild animals, and unauthorized site incursions.",
    inRamanathapuramScope: true
  },
  {
    id: "drip-irrigation",
    name: "Drip Irrigation & Water Infrastructure",
    category: "Establishment",
    summary: "Custom engineered drip irrigation system, header units, sand media filters, booster pumps, and water storage ponds.",
    deliverables: ["Zoned mainline and lateral piping", "Inline pressure-compensating drippers", "Water retention ponds with geomembrane", "Automated valve manifolds"],
    roleInDevelopment: "Delivers metered moisture directly to the root zone, conserving up to 60% water while boosting sapling growth velocity.",
    inRamanathapuramScope: true
  },
  {
    id: "plantation-establishment",
    name: "Plantation Establishment & Mass Planting",
    category: "Establishment",
    summary: "Full-scale pit digging, basal organic manuring, careful rootball placement, and immediate initial hydration.",
    deliverables: ["Standardized planting pits", "Organic compost and bio-fertilizer mix", "Trained planting teams", "Post-planting establishment audit"],
    roleInDevelopment: "Guarantees proper root establishment, minimizes transplantation shock, and achieves target survival benchmarks.",
    inRamanathapuramScope: true
  },
  {
    id: "workforce-management",
    name: "Workforce & Labour Management",
    category: "Operations",
    summary: "Experienced full-time agricultural labour teams, on-site camp facilities, safety oversight, and professional supervisors.",
    deliverables: ["Dedicated on-site labour force", "Field housing and sanitation amenities", "Daily work scheduling", "Safety and operational protocols"],
    roleInDevelopment: "Ensures continuous, disciplined execution of daily agricultural tasks without client staffing friction.",
    inRamanathapuramScope: true
  },
  {
    id: "growth-supervision",
    name: "Plant Growth Supervision & Silviculture",
    category: "Operations",
    summary: "Continuous monitoring by experienced agro-foresters, height/girth tracking, and crown health documentation.",
    deliverables: ["Quarterly growth audit reports", "Diameter breast height (DBH) logs", "Crown density assessments", "Corrective intervention plans"],
    roleInDevelopment: "Early detection of deficiencies or deviations, maintaining trees on the targeted commercial volume curve.",
    inRamanathapuramScope: true
  },
  {
    id: "pruning-soil-care",
    name: "Weed Removal, Pruning & Soil Care",
    category: "Operations",
    summary: "Scheduled inter-row desuckering, branch pruning to produce knot-free heartwood, mechanized weeding, and soil aeration.",
    deliverables: ["Clear-bole stem pruning", "Mechanical weed shredding", "Inter-row soil disc harrowing", "Organic mulch distribution"],
    roleInDevelopment: "Concentrates tree energy into vertical trunk timber volume and improves soil microbial aeration.",
    inRamanathapuramScope: true
  },
  {
    id: "site-infrastructure",
    name: "Surveillance, Solar Lighting & Infrastructure",
    category: "Infrastructure",
    summary: "On-site administrative sheds, solar pathway lights, boundary alarms, security cameras, and electrical wiring.",
    deliverables: ["Supervisory field office shed", "Solar illumination poles", "Site security camera setup", "Emergency alarm network"],
    roleInDevelopment: "Provides operational safety, protects valuable equipment, and maintains round-the-clock site vigilance.",
    inRamanathapuramScope: true
  }
];

export const MOTHER_BIOTECH_RESEARCH = {
  title: "30 Years of Teak Clonal Data & Research Insights",
  citation: "Prakash et al. (2026), Indian Journal of Genetics and Plant Breeding 86(2): 241–251. DOI: 10.1007/s44489-026-00016-1",
  coreLesson: "Long-term evaluation over 30 years demonstrates that clonal selection governs plantation success. Growth performance is not explained by geographical proximity, but by elite genetic lineage and disciplined site management.",
  strongGrowthClones: ["APNPL-4", "KLK-1", "ST-16", "MHALP-1"],
  underperformingClones: ["ORPDP-29", "MYSA-2"],
  farmlandAdvantage: {
    farmlandRotationYears: "8–12 Years",
    wildForestRotationYears: "45–55 Years",
    biomassMultiplication: "Significantly Accelerated Biomass & Girth Expansion",
    qualityEquivalence: "Reported comparable timber density and heartwood commercial quality through precision silviculture.",
  },
  patentedClonesCount: 9,
  cloneSeries: "MBT-1 through MBT-9 (tailored to 9 distinct Indian agro-climatic zones)"
};

export const BRAND_ASSETS = {
  heroImage: "/src/assets/images/hero_teak_plantation_1793252595817.jpg",
  saplingImage: "/src/assets/images/teak_sapling_nursery_1793252595561.jpg",
  irrigationImage: "/src/assets/images/plantation_irrigation_landscape_1793252596512.jpg",
  woodGrainImage: "/src/assets/images/teak_timber_texture_1793252596502.jpg",
  aerialPlanImage: "/src/assets/images/plantation_survey_planning_1793252597059.jpg",
  girthMeasurementImage: "/src/assets/images/teak_girth_measurement_1793254039376.jpg",
  farmlandSixYearsImage: "/src/assets/images/farmland_teak_6years_1793254039721.jpg",
  nurseryWorkersImage: "/src/assets/images/teak_nursery_workers_1793254040355.jpg",
  delegationPlantingImage: "/src/assets/images/leadership_delegation_planting_1793254041067.jpg"
};
