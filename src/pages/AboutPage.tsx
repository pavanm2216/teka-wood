import React from 'react';
import { ArrowRight, Compass, Shield, Trees, Droplet, Sprout } from 'lucide-react';
import { BRAND_ASSETS, MOTHER_BIOTECH_RESEARCH } from '../data/proposalData';
import { ResearchEvidenceSection } from '../components/ResearchEvidenceSection';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 min-h-screen bg-[#F5F1E7]">
      {/* Editorial Header */}
      <section className="py-16 sm:py-20 bg-[#102B23] text-[#F5F1E7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#B78B53] font-semibold block mb-3">
              About Nature’s Canopy
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#F5F1E7] leading-tight mb-6">
              Engineering Value in Commercial Silviculture
            </h1>
            <p className="text-base sm:text-lg text-[#F5F1E7]/80 font-light leading-relaxed">
              Nature’s Canopy specializes in the development, infrastructure establishment, and
              long-term silvicultural management of high-density teak plantations.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Statements: Vision & Mission */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Vision Statement */}
          <div className="bg-white border border-[#DCE5D8] p-8 sm:p-10 rounded-sm">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B78B53] font-semibold mb-3">
              <Compass className="w-4 h-4 text-[#B78B53]" />
              <span>Brand Vision</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#102B23] font-medium mb-4">
              Cultivating Sustainable Commercial Timber Assets
            </h2>
            <p className="text-sm text-[#575D52] leading-relaxed">
              To establish disciplined, science-backed agroforestry ecosystems that transform barren
              or under-utilized land parcels into highly productive, commercially viable teak reserves,
              combining ecological stewardship with transparent operational execution.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-white border border-[#DCE5D8] p-8 sm:p-10 rounded-sm">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#173F32] font-semibold mb-3">
              <Shield className="w-4 h-4 text-[#173F32]" />
              <span>Brand Mission</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#102B23] font-medium mb-4">
              Transparent, Lifecycle Silvicultural Management
            </h2>
            <p className="text-sm text-[#575D52] leading-relaxed">
              To execute turnkey plantation development—from precision micro-clonal sapling
              sourcing and drip irrigation engineering to 8-year silvicultural supervision—with
              uncompromising accountability, documented metrics, and transparent quarterly reporting.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-white border-y border-[#DCE5D8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="rounded-sm overflow-hidden border border-[#DCE5D8] shadow-sm">
                <img
                  src={BRAND_ASSETS.woodGrainImage}
                  alt="High quality seasoned teak grain"
                  className="w-full h-[380px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#B78B53] font-semibold block">
                Development Philosophy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#102B23] font-normal tracking-tight">
                Structure, Genetics, and Long-Term Discipline
              </h2>
              <p className="text-sm text-[#575D52] leading-relaxed">
                Commercial forestry is a discipline of patience governed by biological laws. Unlike
                traditional wild forestry where growth rates vary unpredictably, Nature’s Canopy
                adheres to an engineered framework: uniform planting density (350 saplings per acre),
                precision subsurface drip hydration, and systematic desuckering.
              </p>
              <p className="text-sm text-[#575D52] leading-relaxed">
                By removing competing brush and pruning lateral shoots in early developmental years,
                we guide the sapling to channel all biological vigor into straight vertical growth,
                resulting in straight boles and maximized knot-free commercial heartwood.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#B78B53] font-semibold block mb-2">
            Silvicultural Execution
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#102B23] font-normal tracking-tight">
            Our Plantation Care Methodology
          </h2>
          <p className="text-sm text-[#575D52] mt-3">
            A cohesive four-pillar framework designed for consistent commercial timber development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white border border-[#DCE5D8] p-6 rounded-sm">
            <div className="w-10 h-10 bg-[#FAF8F2] border border-[#DCE5D8] flex items-center justify-center rounded-sm text-[#173F32] mb-4">
              <Sprout className="w-5 h-5" />
            </div>
            <span className="text-[11px] uppercase tracking-wider text-[#B78B53] font-semibold block mb-1">
              Pillar 01
            </span>
            <h3 className="font-serif text-lg text-[#102B23] font-medium mb-2">
              Micro-Clonal Genetics
            </h3>
            <p className="text-xs text-[#575D52] leading-relaxed">
              Certified tissue-culture teak saplings selected for disease resistance, uniform growth
              rates, and accelerated bole thickness.
            </p>
          </div>

          <div className="bg-white border border-[#DCE5D8] p-6 rounded-sm">
            <div className="w-10 h-10 bg-[#FAF8F2] border border-[#DCE5D8] flex items-center justify-center rounded-sm text-[#173F32] mb-4">
              <Compass className="w-5 h-5" />
            </div>
            <span className="text-[11px] uppercase tracking-wider text-[#B78B53] font-semibold block mb-1">
              Pillar 02
            </span>
            <h3 className="font-serif text-lg text-[#102B23] font-medium mb-2">
              Demarcation & Survey
            </h3>
            <p className="text-xs text-[#575D52] leading-relaxed">
              CAD-mapped sector grids ensuring calibrated 350-plant-per-acre spacing, access roads,
              drainage lines, and perimeter solar protection.
            </p>
          </div>

          <div className="bg-white border border-[#DCE5D8] p-6 rounded-sm">
            <div className="w-10 h-10 bg-[#FAF8F2] border border-[#DCE5D8] flex items-center justify-center rounded-sm text-[#173F32] mb-4">
              <Droplet className="w-5 h-5" />
            </div>
            <span className="text-[11px] uppercase tracking-wider text-[#B78B53] font-semibold block mb-1">
              Pillar 03
            </span>
            <h3 className="font-serif text-lg text-[#102B23] font-medium mb-2">
              Drip Fertigation
            </h3>
            <p className="text-xs text-[#575D52] leading-relaxed">
              Precision drip networks connected to borewells and storage ponds, delivering moisture
              and organic nutrients directly to the root bulb.
            </p>
          </div>

          <div className="bg-white border border-[#DCE5D8] p-6 rounded-sm">
            <div className="w-10 h-10 bg-[#FAF8F2] border border-[#DCE5D8] flex items-center justify-center rounded-sm text-[#173F32] mb-4">
              <Trees className="w-5 h-5" />
            </div>
            <span className="text-[11px] uppercase tracking-wider text-[#B78B53] font-semibold block mb-1">
              Pillar 04
            </span>
            <h3 className="font-serif text-lg text-[#102B23] font-medium mb-2">
              Ongoing Supervision
            </h3>
            <p className="text-xs text-[#575D52] leading-relaxed">
              Years 2–8 on-site labour supervision, regular pruning, weed elimination, and quarterly
              manpower expenditure reporting.
            </p>
          </div>
        </div>
      </section>

      {/* FIELD OPERATIONS & PEOPLE: REAL PHOTOGRAPHY */}
      <section className="py-16 bg-white border-y border-[#DCE5D8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-widest text-[#B78B53] font-semibold block mb-1">
              Field Realities
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#102B23] font-normal tracking-tight">
              People, Partnerships, and Field Operations
            </h2>
            <p className="text-sm text-[#575D52] mt-2 leading-relaxed">
              Real commercial forestry requires on-the-ground operational strength, dedicated
              agricultural labour, and trusted partner relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#FAF8F2] border border-[#DCE5D8] rounded-sm overflow-hidden flex flex-col justify-between">
              <div>
                <img
                  src={BRAND_ASSETS.nurseryWorkersImage}
                  alt="Agricultural workforce in polybag teak nursery"
                  className="w-full h-64 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="p-6">
                  <span className="text-[11px] uppercase tracking-wider text-[#B78B53] font-semibold block mb-1">
                    On-Site Labour Force
                  </span>
                  <h3 className="font-serif text-xl font-medium text-[#102B23] mb-2">
                    Skilled Nursery & Field Teams
                  </h3>
                  <p className="text-xs text-[#575D52] leading-relaxed">
                    Our agricultural teams carefully sort, weed, and harden hundreds of thousands of
                    tissue-culture teak saplings in shade houses and raised beds before field deployment.
                  </p>
                </div>
              </div>
              <div className="p-4 bg-white border-t border-[#DCE5D8] text-xs font-mono text-[#173F32]">
                1,22,500 Sapling Capacity
              </div>
            </div>

            <div className="bg-[#FAF8F2] border border-[#DCE5D8] rounded-sm overflow-hidden flex flex-col justify-between">
              <div>
                <img
                  src={BRAND_ASSETS.delegationPlantingImage}
                  alt="Leadership delegation planting ceremony"
                  className="w-full h-64 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="p-6">
                  <span className="text-[11px] uppercase tracking-wider text-[#B78B53] font-semibold block mb-1">
                    Stakeholder Alliances
                  </span>
                  <h3 className="font-serif text-xl font-medium text-[#102B23] mb-2">
                    Inaugural Ceremonies & Leadership
                  </h3>
                  <p className="text-xs text-[#575D52] leading-relaxed">
                    Corporate clients, agricultural experts, and project sponsors participating in
                    formal inaugural plantings, symbolizing transparent, long-term commitment.
                  </p>
                </div>
              </div>
              <div className="p-4 bg-white border-t border-[#DCE5D8] text-xs font-mono text-[#173F32]">
                Transparent Corporate Governance
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH & FIELD EVIDENCE SECTION */}
      <ResearchEvidenceSection onNavigate={onNavigate} />

      {/* Call to Action */}
      <section className="py-20 bg-[#102B23] text-[#F5F1E7]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-normal mb-4">
            Partner With Nature’s Canopy
          </h2>
          <p className="text-sm text-[#F5F1E7]/80 font-light max-w-xl mx-auto mb-8">
            Whether developing private landholdings or exploring corporate silvicultural
            opportunities, start a conversation with our project engineering team.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#102B23] bg-[#B78B53] hover:bg-[#D4A972] transition-colors rounded-sm cursor-pointer"
          >
            <span>Discuss a Plantation Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
