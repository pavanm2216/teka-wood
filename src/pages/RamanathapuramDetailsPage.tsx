import React from 'react';
import {
  RAMANATHAPURAM_PROJECT,
  PAYMENT_SCHEDULE,
  PROPOSAL_ITEMS_TO_CONFIRM,
  BRAND_ASSETS
} from '../data/proposalData';
import { CostBreakdownBar } from '../components/CostBreakdownBar';
import { MasterplanBlueprintExplorer } from '../components/MasterplanBlueprintExplorer';
import {
  MapPin,
  Calendar,
  TreePine,
  ShieldAlert,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Receipt,
  FileCheck2,
  RefreshCw
} from 'lucide-react';

interface RamanathapuramDetailsPageProps {
  onNavigate: (page: string) => void;
}

export const RamanathapuramDetailsPage: React.FC<RamanathapuramDetailsPageProps> = ({
  onNavigate,
}) => {
  return (
    <div className="pt-24 min-h-screen bg-[#F5F1E7]">
      {/* Editorial Hero Header */}
      <section className="py-16 sm:py-20 bg-[#102B23] text-[#F5F1E7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B78B53] font-semibold mb-3">
              <MapPin className="w-4 h-4 text-[#B78B53]" />
              <span>Project Blueprint Dossier · Tamil Nadu</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#F5F1E7] leading-tight mb-6">
              350-Acre Teak Plantation — Ramanathapuram
            </h1>
            <p className="text-base sm:text-lg text-[#F5F1E7]/80 font-light leading-relaxed">
              Complete engineering, silvicultural, capital allocation, and milestone specifications
              sourced from the Final Updated 350 Acres Ramanathapuram Proposal.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 1: PROJECT OVERVIEW KPI STRIP */}
      <section className="bg-white border-b border-[#DCE5D8] py-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="border-r border-[#DCE5D8] last:border-r-0 pr-4">
              <span className="text-[11px] uppercase tracking-wider text-[#575D52] block mb-1">
                Location
              </span>
              <span className="text-sm font-semibold text-[#102B23] block">
                Ramanathapuram
              </span>
              <span className="text-[11px] text-[#575D52]">Tamil Nadu, India</span>
            </div>

            <div className="border-r border-[#DCE5D8] last:border-r-0 pr-4">
              <span className="text-[11px] uppercase tracking-wider text-[#575D52] block mb-1">
                Proposed Area
              </span>
              <span className="text-base font-semibold text-[#102B23] font-mono tabular-nums block">
                350 Acres
              </span>
              <span className="text-[11px] text-[#575D52]">Master Parcel</span>
            </div>

            <div className="border-r border-[#DCE5D8] last:border-r-0 pr-4">
              <span className="text-[11px] uppercase tracking-wider text-[#575D52] block mb-1">
                Planned Saplings
              </span>
              <span className="text-base font-semibold text-[#102B23] font-mono tabular-nums block">
                1,22,500
              </span>
              <span className="text-[11px] text-[#575D52]">Tissue-Culture</span>
            </div>

            <div className="border-r border-[#DCE5D8] last:border-r-0 pr-4">
              <span className="text-[11px] uppercase tracking-wider text-[#575D52] block mb-1">
                Planting Density
              </span>
              <span className="text-base font-semibold text-[#102B23] font-mono tabular-nums block">
                350 / Acre
              </span>
              <span className="text-[11px] text-[#575D52]">Precision Spacing</span>
            </div>

            <div className="border-r border-[#DCE5D8] last:border-r-0 pr-4">
              <span className="text-[11px] uppercase tracking-wider text-[#575D52] block mb-1">
                Project Duration
              </span>
              <span className="text-base font-semibold text-[#102B23] block">
                8+ Years
              </span>
              <span className="text-[11px] text-[#575D52]">To Commercial Harvest</span>
            </div>

            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#575D52] block mb-1">
                Proposed Harvest
              </span>
              <span className="text-base font-semibold text-[#173F32] block">
                End of Year 8
              </span>
              <span className="text-[11px] text-[#575D52]">Subject to Growth</span>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE 350-ACRE CAD MASTERPLAN BLUEPRINT */}
      <section className="py-14 bg-[#102B23] border-b border-[#173F32]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <MasterplanBlueprintExplorer onNavigate={onNavigate} />
        </div>
      </section>

      {/* SECTION 2: SCOPE OF WORK BREAKDOWN */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-widest text-[#B78B53] font-semibold block mb-1">
            Turnkey Engineering Scope
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#102B23] font-normal tracking-tight">
            Detailed Scope of Work
          </h2>
          <p className="text-sm text-[#575D52] mt-3 leading-relaxed">
            As outlined in the Ramanathapuram project proposal, Nature’s Canopy delivers an integrated,
            multidisciplinary scope covering site clearance, civil infrastructure, biological establishment,
            and continuous silvicultural supervision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 border border-[#DCE5D8] rounded-sm">
            <h3 className="font-serif text-lg font-medium text-[#102B23] mb-3 pb-2 border-b border-[#DCE5D8]">
              01. Genetics & Planting
            </h3>
            <ul className="space-y-2 text-xs text-[#575D52] leading-relaxed">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#173F32] shrink-0 mt-0.5" />
                <span>1,22,500 certified micro-clonal tissue-culture teak saplings</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#173F32] shrink-0 mt-0.5" />
                <span>Specialized safe transit in ventilated carrier racks</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#173F32] shrink-0 mt-0.5" />
                <span>Standardized pit excavation, basal organic manure & bio-fertilizer</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 border border-[#DCE5D8] rounded-sm">
            <h3 className="font-serif text-lg font-medium text-[#102B23] mb-3 pb-2 border-b border-[#DCE5D8]">
              02. Water Infrastructure & Drip
            </h3>
            <ul className="space-y-2 text-xs text-[#575D52] leading-relaxed">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#173F32] shrink-0 mt-0.5" />
                <span>Complete pressurized drip irrigation with pressure-compensating emitters</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#173F32] shrink-0 mt-0.5" />
                <span>Agricultural borewells, storage ponds, booster pumps & tanks</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#173F32] shrink-0 mt-0.5" />
                <span>Sand media filters, disk filtration & automated valve controls</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 border border-[#DCE5D8] rounded-sm">
            <h3 className="font-serif text-lg font-medium text-[#102B23] mb-3 pb-2 border-b border-[#DCE5D8]">
              03. Site Survey & Demarcation
            </h3>
            <ul className="space-y-2 text-xs text-[#575D52] leading-relaxed">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#173F32] shrink-0 mt-0.5" />
                <span>Complete topographical survey & CAD sector master layout</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#173F32] shrink-0 mt-0.5" />
                <span>GPS boundary demarcation and sector marker installation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#173F32] shrink-0 mt-0.5" />
                <span>Land leveling, clearing, and peripheral contoured drainage channels</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 border border-[#DCE5D8] rounded-sm">
            <h3 className="font-serif text-lg font-medium text-[#102B23] mb-3 pb-2 border-b border-[#DCE5D8]">
              04. Boundary Security & Lighting
            </h3>
            <ul className="space-y-2 text-xs text-[#575D52] leading-relaxed">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#173F32] shrink-0 mt-0.5" />
                <span>Heavy-duty perimeter fencing with lockable entry gates</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#173F32] shrink-0 mt-0.5" />
                <span>Solar-powered boundary lighting poles & emergency alarms</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#173F32] shrink-0 mt-0.5" />
                <span>On-site CCTV surveillance & perimeter intrusion deterrence</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 border border-[#DCE5D8] rounded-sm">
            <h3 className="font-serif text-lg font-medium text-[#102B23] mb-3 pb-2 border-b border-[#DCE5D8]">
              05. Workforce & Camp Facilities
            </h3>
            <ul className="space-y-2 text-xs text-[#575D52] leading-relaxed">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#173F32] shrink-0 mt-0.5" />
                <span>Dedicated on-site agricultural labour teams and technical foremen</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#173F32] shrink-0 mt-0.5" />
                <span>Administrative shed, storage facilities & staff accommodation amenities</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#173F32] shrink-0 mt-0.5" />
                <span>Internal wiring, utility switchboards & backup power linkages</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 border border-[#DCE5D8] rounded-sm">
            <h3 className="font-serif text-lg font-medium text-[#102B23] mb-3 pb-2 border-b border-[#DCE5D8]">
              06. Silvicultural Maintenance
            </h3>
            <ul className="space-y-2 text-xs text-[#575D52] leading-relaxed">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#173F32] shrink-0 mt-0.5" />
                <span>Apical shoot pruning to ensure knot-free vertical heartwood boles</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#173F32] shrink-0 mt-0.5" />
                <span>Mechanical weed removal, inter-row soil loosening & mulching</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#173F32] shrink-0 mt-0.5" />
                <span>Quarterly growth measurement (DBH, height) & silvicultural logs</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 3: ESTIMATED INITIAL PROJECT COST BREAKDOWN */}
      <section className="py-16 bg-white border-y border-[#DCE5D8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <CostBreakdownBar />
        </div>
      </section>

      {/* SECTION 4: PAYMENT SCHEDULE & GROWTH BENCHMARK */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-widest text-[#B78B53] font-semibold block mb-1">
            Contractual Milestones
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#102B23] font-normal tracking-tight">
            Proposal Payment Schedule
          </h2>
          <p className="text-sm text-[#575D52] mt-3 leading-relaxed">
            The proposal states a four-stage structured payment schedule tied to concrete operational
            mobilization and biological growth milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {PAYMENT_SCHEDULE.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#DCE5D8] p-6 rounded-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#DCE5D8] mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#575D52]">
                    Milestone 0{idx + 1}
                  </span>
                  <span className="font-serif text-2xl font-semibold text-[#173F32] font-mono tabular-nums">
                    {item.percentage}%
                  </span>
                </div>
                <h3 className="font-serif text-lg font-medium text-[#102B23] mb-2">
                  {item.trigger}
                </h3>
                <p className="text-xs text-[#575D52] leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#DCE5D8]/60 text-[11px] text-[#173F32] font-medium">
                Phase: {idx === 0 ? 'Signing' : idx === 1 ? 'Mobilization' : 'Growth Milestone'}
              </div>
            </div>
          ))}
        </div>

        {/* Growth Benchmark Explanation with Real Field Measurement Image */}
        <div className="bg-[#FAF8F2] border border-[#DCE5D8] p-6 sm:p-8 rounded-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-4 rounded-sm overflow-hidden border border-[#DCE5D8] shadow-xs">
              <img
                src={BRAND_ASSETS.girthMeasurementImage}
                alt="42+ inch girth measurement on mature farmland teak"
                className="w-full h-48 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="bg-[#102B23] text-[#F5F1E7] p-2 text-center text-[11px] font-mono">
                Field Audit: 42+ Inch Trunk Circumference
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="flex items-start gap-3">
                <FileCheck2 className="w-5 h-5 text-[#B78B53] shrink-0 mt-0.5" />
                <div className="space-y-2 text-xs text-[#575D52] leading-relaxed">
                  <strong className="text-[#102B23] text-sm block">
                    90% Biological Growth Benchmark Protocol
                  </strong>
                  <p>
                    The proposal references a silvicultural growth benchmark stipulating that at least
                    90% of planted saplings must achieve designated height (5 feet, 10 feet) and stem girth
                    standards prior to releasing the respective 10% payment tranches.
                  </p>
                  <p>
                    Shown above is an authentic silvicultural field measurement conducted with calibrated tape on
                    established farmland teak, documenting girth acceleration under micro-clonal drip regimes.
                  </p>
                  <p className="text-[11px] text-[#575D52]/80 italic pt-1 border-t border-[#DCE5D8]">
                    *Note: This benchmark represents a proposal-stated operational term and must be
                    confirmed against verified contractual provisions and mutually accepted inspection
                    protocols.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 & 6: MAINTENANCE AFTER YEAR 1 & MORTALITY PROTECTION */}
      <section className="py-16 bg-white border-t border-[#DCE5D8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Box 1: Maintenance After Year 1 */}
            <div className="bg-[#FAF8F2] border border-[#DCE5D8] p-8 rounded-sm">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B78B53] font-semibold mb-2">
                <Receipt className="w-4 h-4 text-[#B78B53]" />
                <span>Operational Expenditures</span>
              </div>
              <h3 className="font-serif text-2xl text-[#102B23] font-medium mb-3">
                Ongoing Maintenance (Years 2 through 8)
              </h3>
              <p className="text-sm text-[#575D52] leading-relaxed mb-4">
                <strong>Critical Distinction: </strong> The initial estimated project cost of
                ₹12,59,59,700 covers Phase 1 establishment, procurement, planting, and initial Year 1
                stabilization only.
              </p>
              <div className="bg-white p-4 border border-[#DCE5D8] rounded-xs text-xs text-[#575D52] space-y-2 mb-4">
                <p>
                  According to proposal terms, maintenance costs for Years 2 through 8 are not fixed
                  upfront. Instead, they are:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-[#292D27]">
                  <li>Calculated on actual manpower deployed and prevailing local wages</li>
                  <li>Billed quarterly with itemized labour logs, materials, and supervisory records</li>
                  <li>Reconciled transparently with client review before payment</li>
                </ul>
              </div>
              <p className="text-xs text-[#575D52]">
                This variable billing structure ensures clients only pay for verified agricultural
                operations actually performed on site.
              </p>
            </div>

            {/* Box 2: Mortality Protection */}
            <div className="bg-[#102B23] text-[#F5F1E7] border border-[#173F32] p-8 rounded-sm">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B78B53] font-semibold mb-2">
                <RefreshCw className="w-4 h-4 text-[#B78B53]" />
                <span>Sapling Guarantee Clause</span>
              </div>
              <h3 className="font-serif text-2xl text-[#F5F1E7] font-medium mb-3">
                Mortality Protection (First 2 Years)
              </h3>
              <p className="text-sm text-[#F5F1E7]/80 leading-relaxed mb-4 font-light">
                The proposal specifies <strong>100% replacement of non-surviving saplings</strong> during
                the first two critical years of establishment.
              </p>
              <div className="bg-[#173F32] p-4 rounded-xs text-xs text-[#F5F1E7]/80 space-y-2 mb-4">
                <p>
                  During routine quarterly inspections, any dead or severely stunted saplings will be
                  uprooted and replaced with certified tissue-culture nursery stock to maintain target
                  stand density (350 trees/acre).
                </p>
              </div>
              <div className="text-[11px] text-[#F5F1E7]/60 italic">
                *Contractual Notice: The exact terms, force majeure exclusions (such as extreme climatic
                drought or natural disasters), and verification mechanisms must be confirmed in the final
                signed agreement.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: IMPORTANT SOURCE INCONSISTENCIES ("ITEMS TO CONFIRM") */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B78B53] font-semibold mb-1">
            <AlertTriangle className="w-4 h-4 text-[#B78B53]" />
            <span>Integrity & Due Diligence</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#102B23] font-normal tracking-tight">
            Proposal Discrepancies & Items to Confirm
          </h2>
          <p className="text-sm text-[#575D52] mt-3 leading-relaxed">
            Rather than silently modifying or papering over inconsistencies in the source document,
            Nature’s Canopy provides this transparent checklist of items requiring formal
            confirmation before contractual execution.
          </p>
        </div>

        <div className="space-y-4">
          {PROPOSAL_ITEMS_TO_CONFIRM.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border-l-4 border-l-[#B78B53] border border-[#DCE5D8] p-6 rounded-sm shadow-xs"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                <h3 className="font-serif text-lg text-[#102B23] font-medium">
                  {item.title}
                </h3>
                <span className="text-[11px] font-mono text-[#B78B53] bg-[#FAF8F2] px-2.5 py-1 rounded border border-[#DCE5D8] self-start sm:self-auto">
                  Audit Flag #{idx + 1}
                </span>
              </div>
              <div className="space-y-2 text-xs text-[#575D52] leading-relaxed">
                <p>
                  <strong className="text-[#102B23]">Source Finding: </strong>
                  {item.finding}
                </p>
                <p className="bg-[#FAF8F2] p-3 rounded-xs border border-[#DCE5D8]">
                  <strong className="text-[#173F32]">Recommended Action: </strong>
                  {item.action}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#102B23] text-[#F5F1E7]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-normal mb-4">
            Request Complete Ramanathapuram Project Proposal
          </h2>
          <p className="text-sm text-[#F5F1E7]/80 font-light max-w-xl mx-auto mb-8">
            Connect with our project engineering team to review detailed CAD drawings, irrigation
            specifications, and the complete source proposal.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#102B23] bg-[#B78B53] hover:bg-[#D4A972] transition-colors rounded-sm cursor-pointer"
            >
              <span>Contact Project Team</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('investment')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#F5F1E7] bg-transparent hover:bg-white/10 border border-[#F5F1E7]/40 transition-colors rounded-sm cursor-pointer"
            >
              <span>View Financial Economics</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
