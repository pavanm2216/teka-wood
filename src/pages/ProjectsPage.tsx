import React from 'react';
import { RAMANATHAPURAM_PROJECT, BRAND_ASSETS } from '../data/proposalData';
import { ArrowRight, Compass, Calendar, Layers, MapPin, Search } from 'lucide-react';
import { ResearchEvidenceSection } from '../components/ResearchEvidenceSection';

interface ProjectsPageProps {
  onNavigate: (page: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 min-h-screen bg-[#F5F1E7]">
      {/* Header */}
      <section className="py-16 sm:py-20 bg-[#102B23] text-[#F5F1E7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#B78B53] font-semibold block mb-3">
              Portfolio & Development Pipeline
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#F5F1E7] leading-tight mb-6">
              Plantation Projects Portfolio
            </h1>
            <p className="text-base sm:text-lg text-[#F5F1E7]/80 font-light leading-relaxed">
              We present our active, source-verified commercial teak development proposal with
              full transparency into planned silvicultural scale and capital projections.
            </p>
          </div>
        </div>
      </section>

      {/* Primary Feature: Ramanathapuram Project Card */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="mb-8">
          <span className="text-xs uppercase tracking-widest text-[#B78B53] font-semibold block mb-1">
            Active Master Proposal
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#102B23] font-normal tracking-tight">
            Flagship Teak Agroforestry Project
          </h2>
        </div>

        <div className="bg-white border border-[#DCE5D8] rounded-sm overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 hover:border-[#173F32] transition-colors">
          <div className="lg:col-span-7 relative h-[360px] lg:h-auto min-h-[320px]">
            <img
              src={BRAND_ASSETS.aerialPlanImage}
              alt="350-Acre Ramanathapuram masterplan"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4 bg-[#102B23]/90 text-[#F5F1E7] px-3.5 py-1.5 rounded-xs text-xs font-medium flex items-center gap-1.5 backdrop-blur-xs">
              <MapPin className="w-3.5 h-3.5 text-[#B78B53]" />
              <span>Ramanathapuram, Tamil Nadu</span>
            </div>
            <div className="absolute bottom-4 left-4 bg-[#102B23]/90 text-[#F5F1E7] px-3.5 py-1.5 rounded-xs text-xs font-mono tabular-nums">
              350 Acres · 1,22,500 Saplings
            </div>
          </div>

          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#B78B53] font-semibold block mb-2">
                Proposal Stage · 8+ Year Horizon
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#102B23] font-medium mb-4">
                {RAMANATHAPURAM_PROJECT.name}
              </h3>
              <p className="text-sm text-[#575D52] leading-relaxed mb-6">
                A 350-acre commercial plantation layout utilizing certified micro-clonal
                tissue-culture teak saplings at 350 plants per acre. Designed for automated drip
                irrigation, security fencing, dedicated worker amenities, and structured Year 8
                commercial harvesting.
              </p>

              <div className="grid grid-cols-2 gap-4 py-4 border-y border-[#DCE5D8] mb-6">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#575D52] block">
                    Planned Density
                  </span>
                  <span className="text-sm font-semibold text-[#102B23] font-mono tabular-nums">
                    350 Trees / Acre
                  </span>
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#575D52] block">
                    Initial Cost Est.
                  </span>
                  <span className="text-sm font-semibold text-[#173F32] font-mono tabular-nums">
                    ₹12.60 Crore
                  </span>
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#575D52] block">
                    Project Duration
                  </span>
                  <span className="text-sm font-semibold text-[#102B23]">
                    8+ Years
                  </span>
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#575D52] block">
                    Proposed Harvest
                  </span>
                  <span className="text-sm font-semibold text-[#102B23]">
                    End of Year 8
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onNavigate('ramanathapuram')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#102B23] bg-[#B78B53] hover:bg-[#D4A972] transition-colors rounded-sm cursor-pointer shadow-sm"
              >
                <span>View Full Project Dossier</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('investment')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#102B23] bg-[#FAF8F2] hover:bg-[#DCE5D8] border border-[#DCE5D8] transition-colors rounded-sm cursor-pointer"
              >
                <span>Financial Model</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH & FIELD EVIDENCE SECTION */}
      <ResearchEvidenceSection onNavigate={onNavigate} />

      {/* Honest "Upcoming Projects" section (Zero fake claims) */}
      <section className="py-16 sm:py-24 bg-white border-t border-[#DCE5D8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-2xl mb-10">
            <span className="text-xs uppercase tracking-widest text-[#B78B53] font-semibold block mb-1">
              Expansion Strategy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#102B23] font-normal tracking-tight">
              Future Project Pipelines
            </h2>
            <p className="text-sm text-[#575D52] mt-2">
              In adherence to our strict transparency policy, we only showcase verified, fully
              modeled proposals. Additional land acquisitions and project blueprints are undergoing
              rigorous site feasibility before public listing.
            </p>
          </div>

          <div className="border border-dashed border-[#DCE5D8] bg-[#FAF8F2] p-8 sm:p-12 rounded-sm text-center">
            <div className="w-12 h-12 bg-white border border-[#DCE5D8] rounded-full flex items-center justify-center mx-auto text-[#173F32] mb-4">
              <Search className="w-5 h-5 text-[#B78B53]" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-[#102B23] font-medium mb-2">
              Rigorous Site Selection in Progress
            </h3>
            <p className="text-xs sm:text-sm text-[#575D52] max-w-lg mx-auto leading-relaxed mb-6">
              Our silvicultural engineers evaluate prospective agricultural tracts based on soil pH,
              percolation rates, aquifer depth, and road connectivity. New projects will be posted
              once complete CAD surveys and feasibility documentation are finalized.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#102B23] bg-white border border-[#DCE5D8] hover:bg-[#FAF8F2] transition-colors rounded-sm cursor-pointer"
            >
              <span>Submit Land Parcel for Evaluation</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#173F32]" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
