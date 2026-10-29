import React from 'react';
import {
  RAMANATHAPURAM_PROJECT,
  ILLUSTRATIVE_YEARLY_VALUES,
  INITIAL_COST_BREAKDOWN
} from '../data/proposalData';
import { GrossHarvestCalculator } from '../components/GrossHarvestCalculator';
import { TeakGrowthInspector } from '../components/TeakGrowthInspector';
import { TimberSpecimenStudio } from '../components/TimberSpecimenStudio';
import {
  TrendingUp,
  ShieldCheck,
  AlertTriangle,
  ArrowRight,
  Info,
  Calendar,
  Layers,
  FileSpreadsheet
} from 'lucide-react';

interface GrowthInvestmentPageProps {
  onNavigate: (page: string) => void;
}

export const GrowthInvestmentPage: React.FC<GrowthInvestmentPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 min-h-screen bg-[#F5F1E7]">
      {/* Header */}
      <section className="py-16 sm:py-20 bg-[#102B23] text-[#F5F1E7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-4xl">
            <span className="text-xs uppercase tracking-widest text-[#B78B53] font-semibold block mb-3">
              Economics & Silvicultural Modeling
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#F5F1E7] leading-tight mb-6">
              Growth Timeline & Investment Overview
            </h1>
            <p className="text-base sm:text-lg text-[#F5F1E7]/80 font-light leading-relaxed">
              Transparent review of project assumptions, interactive gross harvest modeling,
              illustrative biological asset appreciation, and explicit risk disclosures.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION A: PROJECT ASSUMPTIONS CARDS */}
      <section className="py-12 bg-white border-b border-[#DCE5D8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="mb-6">
            <span className="text-xs uppercase tracking-widest text-[#B78B53] font-semibold block mb-1">
              Baseline Metrics
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#102B23] font-normal tracking-tight">
              Core Proposal Modeling Assumptions
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="bg-[#FAF8F2] p-4 border border-[#DCE5D8] rounded-sm">
              <span className="text-[11px] uppercase tracking-wider text-[#575D52] block mb-1">
                Planned Trees
              </span>
              <span className="font-serif text-2xl font-semibold text-[#102B23] font-mono tabular-nums block">
                1,22,500
              </span>
              <span className="text-[11px] text-[#575D52]">350 / acre across 350 acres</span>
            </div>

            <div className="bg-[#FAF8F2] p-4 border border-[#DCE5D8] rounded-sm">
              <span className="text-[11px] uppercase tracking-wider text-[#575D52] block mb-1">
                Assumed Volume
              </span>
              <span className="font-serif text-2xl font-semibold text-[#102B23] font-mono tabular-nums block">
                25 CFT
              </span>
              <span className="text-[11px] text-[#575D52]">Per tree merchantable yield</span>
            </div>

            <div className="bg-[#FAF8F2] p-4 border border-[#DCE5D8] rounded-sm">
              <span className="text-[11px] uppercase tracking-wider text-[#575D52] block mb-1">
                Assumed Rate
              </span>
              <span className="font-serif text-2xl font-semibold text-[#102B23] font-mono tabular-nums block">
                ₹2,000
              </span>
              <span className="text-[11px] text-[#575D52]">Per CFT timber market price</span>
            </div>

            <div className="bg-[#FAF8F2] p-4 border border-[#DCE5D8] rounded-sm">
              <span className="text-[11px] uppercase tracking-wider text-[#575D52] block mb-1">
                Harvest Timing
              </span>
              <span className="font-serif text-2xl font-semibold text-[#102B23] block">
                End Year 8
              </span>
              <span className="text-[11px] text-[#575D52]">Subject to growth verification</span>
            </div>

            <div className="bg-[#FAF8F2] p-4 border border-[#DCE5D8] rounded-sm col-span-2 md:col-span-1">
              <span className="text-[11px] uppercase tracking-wider text-[#575D52] block mb-1">
                Phase 1 Initial Cost
              </span>
              <span className="font-serif text-2xl font-semibold text-[#173F32] font-mono tabular-nums block">
                ₹12.60 Cr
              </span>
              <span className="text-[11px] text-[#575D52]">₹12,59,59,700 total</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION B: INTERACTIVE HARVEST VALUE CALCULATOR */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-6 sm:px-8">
        <GrossHarvestCalculator />
      </section>

      {/* SECTION C: PROPOSAL'S ILLUSTRATIVE YEAR-BY-YEAR VALUES TABLE */}
      <section className="py-16 sm:py-24 bg-white border-y border-[#DCE5D8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs uppercase tracking-widest text-[#B78B53] font-semibold block mb-1">
              Biological Asset Appreciation
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#102B23] font-normal tracking-tight">
              Illustrative Year-by-Year Valuation Model
            </h2>
            <p className="text-sm text-[#575D52] mt-2 leading-relaxed">
              The proposal incorporates an illustrative schedule showing cumulative tree asset
              valuation across the 8-year growth cycle. These figures represent biological
              capitalization models, <strong>not liquid or guaranteed resale values</strong>.
            </p>
          </div>

          <div className="overflow-x-auto border border-[#DCE5D8] rounded-sm shadow-xs">
            <table className="w-full text-left text-sm bg-white">
              <thead>
                <tr className="bg-[#FAF8F2] border-b border-[#DCE5D8] text-xs uppercase tracking-wider text-[#575D52]">
                  <th className="py-3.5 px-6 font-semibold">Growth Cycle Stage</th>
                  <th className="py-3.5 px-6 font-semibold text-right">Illustrative Value per Tree</th>
                  <th className="py-3.5 px-6 font-semibold text-right">Illustrative Stand Total</th>
                  <th className="py-3.5 px-6 font-semibold hidden md:table-cell">Biological Benchmark & Development Focus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DCE5D8]">
                {ILLUSTRATIVE_YEARLY_VALUES.map((row, idx) => {
                  const isHarvest = idx === ILLUSTRATIVE_YEARLY_VALUES.length - 1;
                  return (
                    <tr
                      key={idx}
                      className={`transition-colors ${
                        isHarvest
                          ? 'bg-[#FAF8F2] font-semibold border-t-2 border-[#173F32]'
                          : 'hover:bg-[#FAF8F2]/60'
                      }`}
                    >
                      <td className="py-3.5 px-6">
                        <span className={`font-medium ${isHarvest ? 'text-[#173F32]' : 'text-[#102B23]'}`}>
                          {row.year}
                        </span>
                      </td>
                      <td className="py-3.5 px-6 text-right font-mono tabular-nums font-medium text-[#102B23]">
                        {row.formattedPerTree}
                      </td>
                      <td className="py-3.5 px-6 text-right font-mono tabular-nums font-semibold text-[#173F32]">
                        {row.formattedTotal}
                      </td>
                      <td className="py-3.5 px-6 text-xs text-[#575D52] hidden md:table-cell">
                        {row.stageNote}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Table Caveat Notice */}
          <div className="mt-4 p-4 bg-[#FAF8F2] border border-[#DCE5D8] rounded-sm flex items-start gap-3 text-xs text-[#575D52] leading-relaxed">
            <Info className="w-4 h-4 text-[#B78B53] shrink-0 mt-0.5" />
            <p>
              <strong>Proposal Caveat: </strong>
              The valuations listed in Years 1 through 7 are theoretical biological asset valuation
              assumptions reflecting growing standing timber volume. They do not represent an
              immediate liquidation or cash-out value, as juvenile teak timber does not possess
              marketable commercial heartwood until maturity. Realization of value occurs through
              planned commercial harvesting at Year 8.
            </p>
          </div>
        </div>
      </section>

      {/* BIOLOGICAL ASSET ANATOMY & HEARTWOOD SIMULATOR */}
      <section className="py-16 bg-[#F5F1E7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <TeakGrowthInspector onNavigate={onNavigate} />
        </div>
      </section>

      {/* TIMBER SPECIMEN & MATERIAL SCIENCE STUDIO */}
      <TimberSpecimenStudio onNavigate={onNavigate} />

      {/* SECTION D: INVESTMENT TRANSPARENCY & RISK DISCLOSURE */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B78B53] font-semibold mb-1">
            <ShieldCheck className="w-4 h-4 text-[#B78B53]" />
            <span>Integrity & Governance</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#102B23] font-normal tracking-tight">
            Investment Transparency & Risk Factors
          </h2>
          <p className="text-sm text-[#575D52] mt-3 leading-relaxed">
            Agricultural forestry is a long-term enterprise influenced by natural biological processes
            and commodity market dynamics. We maintain transparent disclosure of all contributing
            variables.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-[#DCE5D8] p-8 rounded-sm">
            <h3 className="font-serif text-xl font-medium text-[#102B23] mb-4">
              01. Gross Harvest vs. Net Returns
            </h3>
            <p className="text-xs text-[#575D52] leading-relaxed mb-3">
              The projected figure of <strong>₹612.5 crore</strong> is an illustrative calculation of
              gross timber market value. It is <strong>not net profit</strong>.
            </p>
            <p className="text-xs text-[#575D52] leading-relaxed">
              Net realizations will be reduced by: commercial harvesting labour, log debarking and
              sorting, road transportation to timber depots, sales agent brokerage, timber transit
              permits, applicable GST or state agricultural levies, and ongoing maintenance expenditures.
            </p>
          </div>

          <div className="bg-white border border-[#DCE5D8] p-8 rounded-sm">
            <h3 className="font-serif text-xl font-medium text-[#102B23] mb-4">
              02. Ongoing Operational Maintenance (Years 2–8)
            </h3>
            <p className="text-xs text-[#575D52] leading-relaxed mb-3">
              The Phase 1 initial project cost (₹12,59,59,700) covers setup and Year 1 operations only.
            </p>
            <p className="text-xs text-[#575D52] leading-relaxed">
              In accordance with proposal specifications, maintenance costs for Years 2 through 8 are
              billed quarterly based on actual manpower, supervisor attendance, and material inputs.
              Project principals must budget for these separate operational cash requirements.
            </p>
          </div>

          <div className="bg-white border border-[#DCE5D8] p-8 rounded-sm">
            <h3 className="font-serif text-xl font-medium text-[#102B23] mb-4">
              03. Biological & Climatic Factors
            </h3>
            <p className="text-xs text-[#575D52] leading-relaxed mb-3">
              Tree growth, heartwood ratio, and final volume per tree are governed by natural biological
              variables including soil fertility, water table consistency, pest management, and weather
              conditions.
            </p>
            <p className="text-xs text-[#575D52] leading-relaxed">
              While our micro-clonal tissue-culture approach and precision drip irrigation optimize
              growing conditions, exact timber yield and quality cannot be guaranteed.
            </p>
          </div>

          <div className="bg-white border border-[#DCE5D8] p-8 rounded-sm">
            <h3 className="font-serif text-xl font-medium text-[#102B23] mb-4">
              04. Market Price Volatility & Statutory Permissions
            </h3>
            <p className="text-xs text-[#575D52] leading-relaxed mb-3">
              The assumed rate of ₹2,000 per CFT is a market projection. Actual timber realization at
              harvest (Year 8) will depend on prevailing market demand, timber grading, and import
              tariffs on global teak logs.
            </p>
            <p className="text-xs text-[#575D52] leading-relaxed">
              Commercial tree harvesting and timber transit also require statutory approvals from
              relevant state forest and revenue authorities.
            </p>
          </div>
        </div>

        {/* Closing Notice */}
        <div className="mt-8 p-6 bg-[#FAF8F2] border border-[#B78B53]/40 rounded-sm">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-[#B78B53] shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs text-[#575D52] leading-relaxed">
              <strong className="text-[#102B23] text-sm block">
                Independent Advice Recommendation
              </strong>
              <p>
                Nothing on this website constitutes a formal offer of securities, collective investment
                scheme, or guaranteed financial return. Prospective investors and corporate partners
                must conduct independent legal, financial, and silvicultural due diligence prior to
                entering binding agreements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#102B23] text-[#F5F1E7]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-normal mb-4">
            Request Complete Financial Dossier
          </h2>
          <p className="text-sm text-[#F5F1E7]/80 font-light max-w-xl mx-auto mb-8">
            Speak directly with our project principals regarding structured participation, landowner
            partnerships, or investment modeling for the Ramanathapuram project.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#102B23] bg-[#B78B53] hover:bg-[#D4A972] transition-colors rounded-sm cursor-pointer"
          >
            <span>Consult With Project Principals</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
