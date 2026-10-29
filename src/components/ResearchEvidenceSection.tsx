import React, { useState } from 'react';
import { MOTHER_BIOTECH_RESEARCH, BRAND_ASSETS } from '../data/proposalData';
import { BookOpen, Award, CheckCircle2, TrendingUp, Layers, Trees, ShieldCheck, Microscope, ArrowRight } from 'lucide-react';

export const ResearchEvidenceSection: React.FC<{ onNavigate: (page: string) => void }> = ({
  onNavigate,
}) => {
  const [activeTab, setActiveTab] = useState<'science' | 'gallery'>('science');
  const research = MOTHER_BIOTECH_RESEARCH;

  return (
    <section className="py-20 lg:py-28 bg-[#F5F1E7] border-y border-[#DCE5D8]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B78B53] font-semibold mb-2">
              <Microscope className="w-4 h-4 text-[#B78B53]" />
              <span>Patented Biotechnology & 30-Year Research</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#102B23] font-normal tracking-tight">
              Science-Backed Teak Silviculture
            </h2>
            <p className="text-sm text-[#575D52] mt-2 max-w-2xl leading-relaxed">
              Why farmland teak matures in <strong>8–12 years</strong> versus 45–55 years for wild
              forests. Grounded in 30 years of empirical clonal evaluation and certified field trials.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-1.5 p-1 bg-white border border-[#DCE5D8] rounded-sm self-start md:self-auto">
            <button
              onClick={() => setActiveTab('science')}
              className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors cursor-pointer ${
                activeTab === 'science'
                  ? 'bg-[#102B23] text-[#F5F1E7]'
                  : 'text-[#575D52] hover:text-[#102B23]'
              }`}
            >
              Clonal Science & Data
            </button>
            <button
              onClick={() => setActiveTab('gallery')}
              className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors cursor-pointer ${
                activeTab === 'gallery'
                  ? 'bg-[#102B23] text-[#F5F1E7]'
                  : 'text-[#575D52] hover:text-[#102B23]'
              }`}
            >
              Field Evidence & Verification
            </button>
          </div>
        </div>

        {/* Tab 1: Clonal Science & 30-Year Research */}
        {activeTab === 'science' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Top Stat Card Comparison: 8-12 Years vs 45-55 Years */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Left Highlight Box: Farmland Teak vs Forest-Grown Teak */}
              <div className="lg:col-span-7 bg-[#102B23] text-[#F5F1E7] p-8 sm:p-10 rounded-sm border border-[#173F32] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#173F32] mb-6">
                    <span className="text-xs uppercase tracking-widest text-[#B78B53] font-semibold">
                      Research Insight · Indian Journal of Genetics
                    </span>
                    <span className="text-[11px] font-mono text-[#D4A972] bg-[#173F32] px-2.5 py-1 rounded">
                      Patented Biotech Clones
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#F5F1E7] mb-4">
                    Farmland Teak: Accelerated Growth with Comparable Commercial Quality
                  </h3>

                  <p className="text-sm text-[#F5F1E7]/80 font-light leading-relaxed mb-6">
                    Published scientific data demonstrates that managed farmland plantations
                    utilizing micro-clonal tissue-culture achieve mature timber biomass in a fraction of
                    the time required by unmanaged natural forests.
                  </p>

                  <div className="grid grid-cols-2 gap-4 py-4 bg-[#0D221C] border border-[#173F32] p-4 rounded-sm mb-6">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-[#B78B53] block">
                        Managed Farmland Teak
                      </span>
                      <span className="font-serif text-2xl sm:text-3xl text-[#F5F1E7] font-normal block my-1">
                        8–12 Years
                      </span>
                      <span className="text-[11px] text-[#F5F1E7]/70">
                        Rapid straight bole & high biomass
                      </span>
                    </div>

                    <div className="border-l border-[#173F32] pl-4">
                      <span className="text-[11px] uppercase tracking-wider text-[#575D52] block">
                        Wild Forest-Grown Teak
                      </span>
                      <span className="font-serif text-2xl sm:text-3xl text-[#575D52] font-normal block my-1">
                        45–55 Years
                      </span>
                      <span className="text-[11px] text-[#F5F1E7]/50">
                        Slow unmanaged natural canopy
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#173F32] text-xs text-[#F5F1E7]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span>
                    Citation: <em>{research.citation}</em>
                  </span>
                  <span className="font-mono text-[#B78B53]">DOI: 10.1007/s44489-026-00016-1</span>
                </div>
              </div>

              {/* Right: The 9 Patented Clones Matrix */}
              <div className="lg:col-span-5 bg-white p-8 rounded-sm border border-[#DCE5D8] flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#B78B53] font-semibold block mb-2">
                    Mother Biotech Clonal Portfolio
                  </span>
                  <h3 className="font-serif text-2xl text-[#102B23] font-medium mb-3">
                    9 Clones for 9 Agro-Climatic Zones
                  </h3>
                  <p className="text-xs text-[#575D52] leading-relaxed mb-6">
                    {research.coreLesson}
                  </p>

                  <div className="space-y-4">
                    <div className="p-3.5 bg-[#FAF8F2] border border-[#DCE5D8] rounded-xs">
                      <span className="text-xs font-semibold text-[#173F32] block mb-1">
                        Strong Growth Clonal Group (Retained for High Yield):
                      </span>
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {research.strongGrowthClones.map((cl) => (
                          <span
                            key={cl}
                            className="font-mono text-xs font-semibold text-[#102B23] bg-white border border-[#DCE5D8] px-2.5 py-0.5 rounded-xs"
                          >
                            {cl}
                          </span>
                        ))}
                      </div>
                      <span className="text-[11px] text-[#575D52] block mt-2">
                        Demonstrated superior diameter breast height (DBH), apical dominance, and defect-free clear boles.
                      </span>
                    </div>

                    <div className="p-3.5 bg-white border border-[#DCE5D8] rounded-xs">
                      <span className="text-xs font-semibold text-[#102B23] block mb-1">
                        Screened Out of Commercial Production:
                      </span>
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {research.underperformingClones.map((cl) => (
                          <span
                            key={cl}
                            className="font-mono text-xs text-red-700 bg-red-50 border border-red-200 px-2 py-0.5 rounded-xs line-through"
                          >
                            {cl}
                          </span>
                        ))}
                      </div>
                      <span className="text-[11px] text-[#575D52] block mt-1.5">
                        Eliminated due to stunted stem form or premature early flowering limitation.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#DCE5D8] mt-6 flex items-center justify-between text-xs text-[#575D52]">
                  <span>Right Clone · Right Location</span>
                  <button
                    onClick={() => onNavigate('about')}
                    className="inline-flex items-center gap-1 font-semibold text-[#173F32] hover:text-[#B78B53] cursor-pointer"
                  >
                    <span>Read Full Silvicultural Model</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Field Evidence & Verification Gallery */}
        {activeTab === 'gallery' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-300">
            {/* Card 1: Girth measurement */}
            <div className="bg-white border border-[#DCE5D8] rounded-sm overflow-hidden shadow-xs group flex flex-col justify-between">
              <div>
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={BRAND_ASSETS.girthMeasurementImage}
                    alt="Calibrated girth measurement on mature farmland teak trunk"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-2 left-2 bg-[#102B23]/90 text-[#F5F1E7] text-[10px] font-mono px-2 py-0.5 rounded-xs">
                    Field Verification · Tape Audit
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-serif text-lg font-medium text-[#102B23] mb-1">
                    Girth Expansion Audit
                  </h4>
                  <p className="text-xs text-[#575D52] leading-relaxed">
                    Measuring tree circumference with calibrated field tape. Shows healthy trees
                    attaining 42+ inches girth at breast height under regular drip irrigation.
                  </p>
                </div>
              </div>
              <div className="px-4 pb-4 pt-2 border-t border-[#DCE5D8] text-[11px] text-[#173F32] font-semibold font-mono">
                Silvicultural Log Verification
              </div>
            </div>

            {/* Card 2: 6+ Years tall farmland teak in Karnataka */}
            <div className="bg-white border border-[#DCE5D8] rounded-sm overflow-hidden shadow-xs group flex flex-col justify-between">
              <div>
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={BRAND_ASSETS.farmlandSixYearsImage}
                    alt="6-year-old farmland teak plantation with straight vertical boles"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-2 left-2 bg-[#102B23]/90 text-[#F5F1E7] text-[10px] font-mono px-2 py-0.5 rounded-xs">
                    6+ Years Farm Stand
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-serif text-lg font-medium text-[#102B23] mb-1">
                    Apical Straight Boles
                  </h4>
                  <p className="text-xs text-[#575D52] leading-relaxed">
                    6-year-old managed farmland stand in Karnataka showcasing uniform straight trunk
                    poles, disciplined desuckering, and clean leaf mulch carpeting the soil.
                  </p>
                </div>
              </div>
              <div className="px-4 pb-4 pt-2 border-t border-[#DCE5D8] text-[11px] text-[#173F32] font-semibold font-mono">
                Target 30–40 Ft Clear Bole
              </div>
            </div>

            {/* Card 3: Nursery and workforce in action */}
            <div className="bg-white border border-[#DCE5D8] rounded-sm overflow-hidden shadow-xs group flex flex-col justify-between">
              <div>
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={BRAND_ASSETS.nurseryWorkersImage}
                    alt="Commercial agroforestry nursery with workers in uniform tending saplings"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-2 left-2 bg-[#102B23]/90 text-[#F5F1E7] text-[10px] font-mono px-2 py-0.5 rounded-xs">
                    Commercial Nursery Facility
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-serif text-lg font-medium text-[#102B23] mb-1">
                    Dedicated Workforce
                  </h4>
                  <p className="text-xs text-[#575D52] leading-relaxed">
                    Thousands of micro-clonal tissue-culture saplings acclimatizing in raised polybag
                    beds, tended daily by trained agricultural teams and supervisors.
                  </p>
                </div>
              </div>
              <div className="px-4 pb-4 pt-2 border-t border-[#DCE5D8] text-[11px] text-[#173F32] font-semibold font-mono">
                1,22,500 Sapling Capacity
              </div>
            </div>

            {/* Card 4: Leadership and partner ceremony */}
            <div className="bg-white border border-[#DCE5D8] rounded-sm overflow-hidden shadow-xs group flex flex-col justify-between">
              <div>
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={BRAND_ASSETS.delegationPlantingImage}
                    alt="Inaugural planting ceremony with agricultural partners and leadership"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-2 left-2 bg-[#102B23]/90 text-[#F5F1E7] text-[10px] font-mono px-2 py-0.5 rounded-xs">
                    Partnership Milestone
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-serif text-lg font-medium text-[#102B23] mb-1">
                    Ceremonial Groundbreaking
                  </h4>
                  <p className="text-xs text-[#575D52] leading-relaxed">
                    Agricultural leaders, community partners, and forestry principals collaborating
                    at the inauguration of the commercial teak development initiative.
                  </p>
                </div>
              </div>
              <div className="px-4 pb-4 pt-2 border-t border-[#DCE5D8] text-[11px] text-[#173F32] font-semibold font-mono">
                Verified Enterprise Stewardship
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
