import React, { useState } from 'react';
import { SERVICES_CATALOG, CLIENT_VS_MANAGEMENT_RESPONSIBILITIES, BRAND_ASSETS } from '../data/proposalData';
import { ArrowRight, CheckCircle2, AlertCircle, FileCheck } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Planning', 'Establishment', 'Operations', 'Infrastructure'];

  const filteredServices =
    activeCategory === 'All'
      ? SERVICES_CATALOG
      : SERVICES_CATALOG.filter((s) => s.category === activeCategory);

  return (
    <div className="pt-24 min-h-screen bg-[#F5F1E7]">
      {/* Header Banner */}
      <section className="py-16 sm:py-20 bg-[#102B23] text-[#F5F1E7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#B78B53] font-semibold block mb-3">
              Comprehensive Plantation Capabilities
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#F5F1E7] leading-tight mb-6">
              Plantation Services & Engineering Scope
            </h1>
            <p className="text-base sm:text-lg text-[#F5F1E7]/80 font-light leading-relaxed">
              From site survey and tissue-culture genetics to turnkey irrigation and 8-year
              silvicultural management, we execute disciplined agroforestry projects.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-16 z-30 bg-[#FAF8F2] border-b border-[#DCE5D8] py-3.5 px-6 sm:px-8 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-1.5 p-1 bg-white border border-[#DCE5D8] rounded-sm shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors cursor-pointer whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-[#102B23] text-[#F5F1E7] shadow-xs'
                    : 'text-[#575D52] hover:text-[#102B23]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <span className="text-xs text-[#575D52] whitespace-nowrap hidden sm:inline">
            Showing {filteredServices.length} structured silvicultural services
          </span>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredServices.map((service, idx) => (
            <div
              key={service.id}
              className="bg-white border border-[#DCE5D8] p-8 rounded-sm shadow-sm flex flex-col justify-between hover:border-[#173F32] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-2 pb-4 border-b border-[#DCE5D8] mb-4">
                  <span className="text-xs uppercase tracking-widest text-[#B78B53] font-semibold">
                    {service.category} Service
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-[#173F32] font-medium bg-[#FAF8F2] border border-[#DCE5D8] px-2.5 py-0.5 rounded-sm">
                    <FileCheck className="w-3.5 h-3.5 text-[#173F32]" />
                    <span>Ramanathapuram Scope: Included</span>
                  </div>
                </div>

                <h3 className="font-serif text-2xl text-[#102B23] font-medium mb-3">
                  {service.name}
                </h3>

                <p className="text-sm text-[#575D52] leading-relaxed mb-6">
                  {service.summary}
                </p>

                <div className="space-y-4 mb-6">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#575D52] font-semibold block mb-2">
                      Key Deliverables & Activities
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.deliverables.map((item, dIdx) => (
                        <li
                          key={dIdx}
                          className="flex items-center gap-2 text-xs text-[#292D27] bg-[#FAF8F2] p-2 rounded-xs border border-[#DCE5D8]/60"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#173F32] shrink-0" />
                          <span className="truncate">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <span className="text-[11px] uppercase tracking-wider text-[#575D52] font-semibold block mb-1">
                      Role in Plantation Development
                    </span>
                    <p className="text-xs text-[#575D52] leading-relaxed bg-[#FAF8F2] p-3 rounded-xs border-l-2 border-[#B78B53]">
                      {service.roleInDevelopment}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#DCE5D8] flex items-center justify-between text-xs text-[#575D52]">
                <span>Standard Turnkey Specification</span>
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-1 text-[#173F32] hover:text-[#B78B53] font-semibold uppercase tracking-wider cursor-pointer"
                >
                  <span>Request Scope</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Scope Demarcation: Nature's Canopy vs Client Responsibilities */}
      <section className="py-16 sm:py-24 bg-white border-t border-[#DCE5D8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest text-[#B78B53] font-semibold block mb-2">
              Operational Clarity
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#102B23] font-normal tracking-tight">
              Scope of Work Demarcation
            </h2>
            <p className="text-sm text-[#575D52] mt-3 leading-relaxed">
              As established in the proposal, we maintain precise boundaries between Nature’s Canopy
              turnkey execution and client responsibilities to guarantee smooth on-site operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Nature's Canopy Responsibility */}
            <div className="bg-[#FAF8F2] border border-[#DCE5D8] p-8 rounded-sm">
              <div className="flex items-center gap-2 pb-4 border-b border-[#DCE5D8] mb-6">
                <span className="font-serif text-xl font-medium text-[#173F32]">
                  Nature’s Canopy Responsibilities
                </span>
              </div>
              <ul className="space-y-3">
                {CLIENT_VS_MANAGEMENT_RESPONSIBILITIES.managementScope.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-[#292D27] leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#173F32] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Client Responsibilities */}
            <div className="bg-white border border-[#DCE5D8] p-8 rounded-sm">
              <div className="flex items-center gap-2 pb-4 border-b border-[#DCE5D8] mb-6">
                <span className="font-serif text-xl font-medium text-[#102B23]">
                  Client / Landowner Responsibilities
                </span>
              </div>
              <p className="text-xs text-[#575D52] mb-6 leading-relaxed">
                The proposal explicitly carves out the following dependencies, which must be
                provided or facilitated by the client:
              </p>
              <ul className="space-y-4">
                {CLIENT_VS_MANAGEMENT_RESPONSIBILITIES.clientResponsibilities.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 p-3 bg-[#FAF8F2] border border-[#DCE5D8] rounded-xs text-xs text-[#292D27] leading-relaxed"
                  >
                    <AlertCircle className="w-4 h-4 text-[#B78B53] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-[#DCE5D8] text-xs text-[#575D52]">
                <p>
                  *Clear demarcation prevents delays during heavy machinery mobilization and drip irrigation commissioning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#102B23] text-[#F5F1E7]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-normal mb-4">
            Custom Plantation Engineering Inquiries
          </h2>
          <p className="text-sm text-[#F5F1E7]/80 font-light max-w-xl mx-auto mb-8">
            Contact our agroforestry team to evaluate your land parcel topography, water availability,
            and custom silvicultural development scope.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#102B23] bg-[#B78B53] hover:bg-[#D4A972] transition-colors rounded-sm cursor-pointer"
          >
            <span>Initiate Project Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
