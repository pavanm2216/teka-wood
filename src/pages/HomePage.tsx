import React from 'react';
import { ArrowUpRight, ArrowRight, ShieldCheck, TreePine, Droplets, Compass, CheckCircle2, Sparkles, Quote } from 'lucide-react';
import { BRAND_ASSETS, SERVICES_CATALOG, RAMANATHAPURAM_PROJECT } from '../data/proposalData';
import { StatsCounter } from '../components/StatsCounter';
import { TimelineJourney } from '../components/TimelineJourney';
import { FieldEvidenceGallery } from '../components/FieldEvidenceGallery';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen">
      {/* SECTION 1 & 2: HERO */}
      <section className="relative min-h-[92vh] flex items-center justify-center bg-[#102B23] overflow-hidden">
        {/* Background image with calibrated dark forest scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={BRAND_ASSETS.heroImage}
            alt="Nature's Canopy mature teak plantation in Ramanathapuram"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#102B23] via-[#102B23]/75 to-[#102B23]/40" />
          <div className="absolute inset-0 bg-[#173F32]/30 mix-blend-multiply" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center pt-24 pb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-[#B78B53] bg-[#102B23]/80 border border-[#B78B53]/30 rounded-full mb-6">
            <span>Teak Plantation Development & Management</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-[#F5F1E7] tracking-tight leading-[1.08] mb-6 max-w-4xl mx-auto">
            Growing Today. <br className="hidden sm:inline" />
            Building Tomorrow.
          </h1>

          <p className="font-sans text-base sm:text-lg lg:text-xl text-[#F5F1E7]/80 max-w-2xl mx-auto font-light leading-relaxed mb-10">
            Building and managing structured teak plantation projects through scientific land
            preparation, precision drip irrigation, and verified long-term silvicultural care.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('projects')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#102B23] bg-[#B78B53] hover:bg-[#D4A972] transition-all rounded-sm shadow-md cursor-pointer whitespace-nowrap"
            >
              <span>Explore Our Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#F5F1E7] bg-transparent hover:bg-white/10 border border-[#F5F1E7]/40 transition-all rounded-sm cursor-pointer whitespace-nowrap"
            >
              <span>Partner With Us</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Scroll cue */}
          <div className="mt-16 flex flex-col items-center gap-2 text-xs text-[#F5F1E7]/50">
            <span className="uppercase tracking-widest text-[10px]">Scroll to Explore</span>
            <div className="w-4 h-7 border border-[#F5F1E7]/30 rounded-full flex justify-center p-1">
              <div className="w-1 h-2 bg-[#B78B53] rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: BRAND INTRODUCTION */}
      <section className="py-20 lg:py-28 bg-[#F5F1E7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#B78B53] font-semibold block">
                Editorial Overview
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#102B23] font-normal tracking-tight leading-tight">
                A Long-Term Vision Rooted in Nature
              </h2>
              <p className="font-sans text-base text-[#575D52] leading-relaxed">
                Nature’s Canopy approaches commercial agroforestry not as speculative trade, but as
                an engineered biological asset. Through rigorous land preparation, micro-clonal
                tissue-culture sapling propagation, and permanent water management systems, we
                establish high-yield teak plantations built to flourish across multi-year cycles.
              </p>
              <p className="font-sans text-sm text-[#575D52] leading-relaxed">
                Our management methodology integrates on-site labour supervision, precision drip
                fertigation, continuous weed suppression, and disciplined stem pruning to foster
                defect-free, straight boles with dense heartwood. Every phase—from baseline soil
                preparation through Year 8 harvest planning—is documented with operational clarity.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#102B23] hover:text-[#B78B53] transition-colors group cursor-pointer"
                >
                  <span>Discover Our Approach</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-sm overflow-hidden shadow-lg border border-[#DCE5D8]">
                <img
                  src={BRAND_ASSETS.saplingImage}
                  alt="Micro-clonal tissue-culture teak sapling nursery"
                  className="w-full h-[400px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-[#102B23] via-[#102B23]/70 to-transparent text-[#F5F1E7]">
                  <span className="text-[11px] uppercase tracking-widest text-[#B78B53] font-semibold block mb-0.5">
                    Biological Foundation
                  </span>
                  <p className="text-sm font-light text-[#F5F1E7]/90">
                    High-performance tissue-culture teak saplings nurtured under controlled shade-house environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: KEY PROJECT STATISTICS */}
      <StatsCounter />

      {/* REAL FIELD EVIDENCE GALLERY: 4 REAL OPERATIONAL PHOTOS + FARMLAND COMPARISON */}
      <FieldEvidenceGallery onNavigate={onNavigate} />

      {/* EDITORIAL PHILOSOPHY BANNER */}
      <section className="py-12 bg-[#173F32] text-[#F5F1E7] border-y border-[#B78B53]/30">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
          <Quote className="w-7 h-7 text-[#B78B53] mx-auto mb-3 opacity-80" />
          <p className="font-serif text-xl sm:text-2xl lg:text-3xl font-light text-[#F5F1E7] tracking-tight leading-snug">
            “A teak tree planted with scientific discipline does not merely survive—it channels every photon of tropical sunlight into dense, knot-free golden heartwood built to outlive generations.”
          </p>
          <div className="mt-4 flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-[#B78B53] font-semibold">
            <span>Nature’s Canopy Silvicultural Principle</span>
            <span>·</span>
            <span>Ramanathapuram Agroforestry</span>
          </div>
        </div>
      </section>

      {/* SECTION 5: PLANTATION SERVICES PREVIEW */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#DCE5D8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#B78B53] font-semibold block mb-1">
                Full Lifecycle Management
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#102B23] font-normal tracking-tight">
                Our Plantation Services
              </h2>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#173F32] hover:text-[#B78B53] transition-colors cursor-pointer self-start md:self-auto"
            >
              <span>Explore All 10 Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_CATALOG.slice(0, 6).map((service, idx) => (
              <div
                key={service.id}
                className="group p-6 bg-[#FAF8F2] hover:bg-white border border-[#DCE5D8] hover:border-[#B78B53] transition-all rounded-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#575D52] mb-3">
                    <span className="uppercase tracking-widest text-[#B78B53] font-medium">
                      0{idx + 1}. {service.category}
                    </span>
                    <span className="font-mono text-[11px] text-[#575D52]/70">Scope Included</span>
                  </div>
                  <h3 className="font-serif text-xl text-[#102B23] font-medium mb-2.5 group-hover:text-[#173F32] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-xs text-[#575D52] leading-relaxed mb-4">
                    {service.summary}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#DCE5D8]/60 flex items-center justify-between text-xs text-[#173F32] font-medium">
                  <span>{service.roleInDevelopment.slice(0, 48)}...</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#B78B53] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#102B23] bg-[#FAF8F2] hover:bg-[#DCE5D8] border border-[#DCE5D8] transition-colors rounded-sm cursor-pointer"
            >
              <span>View Full Silvicultural & Operational Scope</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 6: FEATURED PROJECT SHOWCASE */}
      <section className="py-20 lg:py-28 bg-[#102B23] text-[#F5F1E7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative">
              <div className="rounded-sm overflow-hidden border border-[#173F32] shadow-xl">
                <img
                  src={BRAND_ASSETS.aerialPlanImage}
                  alt="350-Acre Ramanathapuram Teak Masterplan"
                  className="w-full h-[440px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B78B53] font-semibold">
                <Compass className="w-4 h-4 text-[#B78B53]" />
                <span>Featured Master Proposal</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#F5F1E7] leading-tight">
                350-Acre Teak Plantation — Ramanathapuram
              </h2>

              <p className="text-sm text-[#F5F1E7]/80 leading-relaxed font-light">
                Located in Ramanathapuram District, Tamil Nadu, this flagship project proposal is
                engineered for 1,22,500 micro-clonal tissue-culture teak saplings planted at a
                rigorous 350 trees-per-acre density across an 8+ year commercial lifecycle.
              </p>

              <div className="grid grid-cols-2 gap-4 py-2 border-y border-[#173F32]">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#B78B53] block">
                    Location
                  </span>
                  <span className="text-sm font-medium text-[#F5F1E7]">
                    Ramanathapuram, Tamil Nadu
                  </span>
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#B78B53] block">
                    Proposed Area
                  </span>
                  <span className="text-sm font-medium text-[#F5F1E7]">
                    350 Acres (1,22,500 Saplings)
                  </span>
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#B78B53] block">
                    Planting Density
                  </span>
                  <span className="text-sm font-medium text-[#F5F1E7]">
                    350 Trees / Acre
                  </span>
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#B78B53] block">
                    Target Harvest
                  </span>
                  <span className="text-sm font-medium text-[#F5F1E7]">
                    End of Year 8
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('ramanathapuram')}
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#102B23] bg-[#B78B53] hover:bg-[#D4A972] transition-colors rounded-sm cursor-pointer shadow-sm"
                >
                  <span>Explore Full Project Dossier</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span className="text-xs text-[#F5F1E7]/60 italic">
                  *Detailed scope, costs, milestones & source reconciliations
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: THE PLANTATION JOURNEY (TIMELINE) */}
      <section className="py-20 lg:py-28 bg-[#F5F1E7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest text-[#B78B53] font-semibold block mb-1">
              Silvicultural Lifecycle
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#102B23] font-normal tracking-tight">
              The Plantation Journey
            </h2>
            <p className="text-sm text-[#575D52] mt-3 leading-relaxed">
              From foundational topographical survey and precision drip assembly to selective bole
              pruning and Year 8 commercial harvesting, follow our structured operational stages.
            </p>
          </div>

          <TimelineJourney />
        </div>
      </section>

      {/* SECTION 8: TRANSPARENT PROJECT ECONOMICS */}
      <section className="py-20 lg:py-28 bg-white border-t border-[#DCE5D8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest text-[#B78B53] font-semibold block mb-1">
              Financial Transparency
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#102B23] font-normal tracking-tight">
              Transparent Project Economics
            </h2>
            <p className="text-sm text-[#575D52] mt-3 leading-relaxed">
              We uphold transparent project reporting by distinguishing initial capital expenditure
              from illustrative gross biological harvest projections.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Box 1: Estimated Initial Project Cost */}
            <div className="bg-[#FAF8F2] border border-[#DCE5D8] p-8 rounded-sm">
              <span className="text-xs uppercase tracking-wider text-[#575D52] font-semibold block mb-2">
                Proposal Baseline Cost
              </span>
              <h3 className="font-serif text-2xl text-[#102B23] font-medium mb-1">
                Estimated Initial Project Cost
              </h3>
              <div className="font-serif text-3xl sm:text-4xl text-[#173F32] font-normal my-4">
                {RAMANATHAPURAM_PROJECT.initialEstimatedCostFormatted}
              </div>
              <p className="text-xs text-[#575D52] leading-relaxed mb-6">
                Approximately <strong>₹12.60 crore</strong> encompassing Phase 1 certified
                tissue-culture saplings, planting labour, pre-plantation clearance, drip irrigation,
                perimeter fencing, and site infrastructure.
              </p>
              <div className="space-y-2 text-xs text-[#575D52]">
                <div className="flex justify-between py-1 border-b border-[#DCE5D8]">
                  <span>Saplings and planting:</span>
                  <span className="font-mono tabular-nums font-medium text-[#102B23]">₹8,08,71,000</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#DCE5D8]">
                  <span>Drip irrigation & water:</span>
                  <span className="font-mono tabular-nums font-medium text-[#102B23]">₹1,44,08,100</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#DCE5D8]">
                  <span>Pre-plantation & fencing:</span>
                  <span className="font-mono tabular-nums font-medium text-[#102B23]">₹1,06,80,600</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Other civil & site works:</span>
                  <span className="font-mono tabular-nums font-medium text-[#102B23]">₹2,00,00,000</span>
                </div>
              </div>
            </div>

            {/* Box 2: Illustrative Gross Harvest Calculation */}
            <div className="bg-[#102B23] text-[#F5F1E7] border border-[#173F32] p-8 rounded-sm flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#B78B53] font-semibold block mb-2">
                  Illustrative Harvest Math
                </span>
                <h3 className="font-serif text-2xl text-[#F5F1E7] font-medium mb-1">
                  Projected Gross Harvest Value
                </h3>
                <div className="font-serif text-3xl sm:text-4xl text-[#B78B53] font-normal my-4">
                  {RAMANATHAPURAM_PROJECT.illustrativeGrossHarvestValueFormatted}
                </div>
                <div className="bg-[#173F32] p-4 rounded-sm font-mono tabular-nums text-xs sm:text-sm text-[#F5F1E7] mb-4">
                  1,22,500 trees × 25 CFT × ₹2,000/CFT = ₹612.5 crore
                </div>
                <p className="text-xs text-[#F5F1E7]/70 leading-relaxed">
                  Calculated using proposal assumptions: 1,22,500 commercial trees at Year 8,
                  averaging 25 CFT of usable merchantable timber per tree at an assumed market rate of
                  ₹2,000 per CFT.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#173F32]">
                <button
                  onClick={() => onNavigate('investment')}
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#B78B53] hover:text-[#D4A972] font-semibold cursor-pointer"
                >
                  <span>Open Interactive Economics & Calculator</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Prominent Mandatory Disclaimer */}
          <div className="bg-[#FAF8F2] border border-[#B78B53]/40 p-6 rounded-sm">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#B78B53] shrink-0 mt-0.5" />
              <div className="space-y-1.5 text-xs text-[#575D52] leading-relaxed">
                <strong className="text-[#102B23] block text-sm">
                  Mandatory Project Economics Disclaimer
                </strong>
                <p>
                  These figures are estimates and illustrative projections drawn from the project proposal, not guaranteed outcomes. Actual survival, tree growth, usable timber volume, market prices, operating expenses, harvesting and transportation costs, taxes, permissions, and other factors may materially affect the final result. Gross harvest value is not net profit or a guaranteed investment return.
                </p>
                <p>
                  In accordance with proposal specifications, maintenance costs for Years 2 through 8 are not covered by the initial establishment cost and are separately billed quarterly based on actual manpower and wages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: SEPARATE AUDIENCE JOURNEYS */}
      <section className="py-20 lg:py-28 bg-[#F5F1E7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest text-[#B78B53] font-semibold block mb-1">
              Tailored Engagement
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#102B23] font-normal tracking-tight">
              Separate Audience Journeys
            </h2>
            <p className="text-sm text-[#575D52] mt-2">
              Structured pathways for agricultural landowners, institutional partners, and project investors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Corporate Clients */}
            <div className="relative group bg-white border border-[#DCE5D8] rounded-sm p-8 sm:p-10 flex flex-col justify-between hover:border-[#173F32] transition-colors shadow-sm">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#173F32] font-semibold block mb-2">
                  For Corporate Clients & Landowners
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#102B23] font-medium mb-3">
                  Plantation Development & Management Services
                </h3>
                <p className="text-sm text-[#575D52] leading-relaxed mb-6">
                  Planning a plantation project? Explore our turnkey agricultural engineering,
                  certified tissue-culture sapling propagation, drip irrigation networks, and
                  comprehensive silvicultural management services.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-xs text-[#575D52]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#173F32]" />
                    <span>Turnkey civil, boundary, and irrigation contracting</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#575D52]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#173F32]" />
                    <span>Certified micro-clonal saplings with verified genetics</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#575D52]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#173F32]" />
                    <span>Quarterly manpower and silvicultural audit transparency</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-between w-full px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#102B23] bg-[#FAF8F2] hover:bg-[#DCE5D8] border border-[#DCE5D8] transition-colors rounded-sm cursor-pointer"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4 text-[#173F32]" />
              </button>
            </div>

            {/* Card 2: Investors */}
            <div className="relative group bg-[#102B23] text-[#F5F1E7] border border-[#173F32] rounded-sm p-8 sm:p-10 flex flex-col justify-between hover:border-[#B78B53] transition-colors shadow-sm">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#B78B53] font-semibold block mb-2">
                  For Project Partners & Investors
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F1E7] font-medium mb-3">
                  Ramanathapuram Project Economics
                </h3>
                <p className="text-sm text-[#F5F1E7]/80 leading-relaxed mb-6 font-light">
                  Explore the proposed 350-acre Ramanathapuram plantation model, capital expenditure
                  assumptions, four-tier payment milestones, and illustrative harvest economics.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-xs text-[#F5F1E7]/80">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B78B53]" />
                    <span>Itemized initial cost breakdown (₹12,59,59,700)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#F5F1E7]/80">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B78B53]" />
                    <span>Dynamic interactive gross harvest calculator</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#F5F1E7]/80">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B78B53]" />
                    <span>Transparent disclosure of Year 2–8 operational costs</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => onNavigate('investment')}
                className="inline-flex items-center justify-between w-full px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#102B23] bg-[#B78B53] hover:bg-[#D4A972] transition-colors rounded-sm cursor-pointer shadow-sm"
              >
                <span>View Project Economics</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: FINAL CTA */}
      <section className="relative py-24 lg:py-32 bg-[#102B23] overflow-hidden text-center text-[#F5F1E7]">
        <div className="absolute inset-0 z-0">
          <img
            src={BRAND_ASSETS.irrigationImage}
            alt="Nature's Canopy plantation rows"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[#102B23]/90" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8">
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight mb-6">
            Let’s Build Something That Grows.
          </h2>
          <p className="text-base sm:text-lg text-[#F5F1E7]/80 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Start a conversation about plantation development, corporate collaboration, or the
            Ramanathapuram 350-acre teak proposal.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#102B23] bg-[#B78B53] hover:bg-[#D4A972] transition-colors rounded-sm cursor-pointer shadow-md"
            >
              <span>Contact Our Team</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('ramanathapuram')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#F5F1E7] bg-transparent hover:bg-white/10 border border-[#F5F1E7]/40 transition-colors rounded-sm cursor-pointer"
            >
              <span>Explore the Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
