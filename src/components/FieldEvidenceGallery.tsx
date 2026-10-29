import React from 'react';
import { BRAND_ASSETS, MOTHER_BIOTECH_RESEARCH } from '../data/proposalData';
import { CheckCircle2, Trees, Ruler, Users, Award, ArrowRight } from 'lucide-react';

interface FieldEvidenceGalleryProps {
  onNavigate: (page: string) => void;
}

export const FieldEvidenceGallery: React.FC<FieldEvidenceGalleryProps> = ({ onNavigate }) => {
  const cards = [
    {
      image: BRAND_ASSETS.girthMeasurementImage,
      badge: 'Proven Tree Growth',
      title: '42+ Inch Girth Expansion',
      description: 'Silvicultural field audit measuring trunk circumference with calibrated tape, showing rapid diameter growth under structured drip fertigation.',
      highlight: 'Measured in Active Farmland',
    },
    {
      image: BRAND_ASSETS.farmlandSixYearsImage,
      badge: '6-Year Stand',
      title: 'Straight, Knot-Free Boles',
      description: 'A 6-year-old managed farmland stand in Karnataka showcasing uniform vertical stems, clean leaf mulch, and disciplined lateral shoot pruning.',
      highlight: '30–40 Ft Clear Bole Height',
    },
    {
      image: BRAND_ASSETS.nurseryWorkersImage,
      badge: 'Nursery Operations',
      title: 'Dedicated Agricultural Workforce',
      description: 'Trained nursery teams caring for thousands of certified micro-clonal tissue-culture teak saplings in raised polybag beds before site deployment.',
      highlight: '1,22,500 Planned Capacity',
    },
    {
      image: BRAND_ASSETS.delegationPlantingImage,
      badge: 'Leadership & Trust',
      title: 'Inaugural Planting Ceremony',
      description: 'Corporate partners, community stakeholders, and agroforestry principals collaborating at the ceremonial groundbreaking of commercial teak land.',
      highlight: 'Structured Partnership Model',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-y border-[#DCE5D8]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Simple, clear section header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs uppercase tracking-widest text-[#B78B53] font-semibold block mb-1">
            Real Field Proof
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#102B23] font-normal tracking-tight">
            See the Plantation in Action
          </h2>
          <p className="text-sm text-[#575D52] mt-2 leading-relaxed">
            Authentic operational photography showing real tree girth measurements, our 6-year-old
            farmland stands, nursery infrastructure, and on-site workforce.
          </p>
        </div>

        {/* 4-Card Open Photo Grid (Directly visible, no complex tabs) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#FAF8F2] border border-[#DCE5D8] rounded-sm overflow-hidden flex flex-col justify-between hover:border-[#173F32] transition-colors shadow-xs"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-[#102B23]/90 backdrop-blur-xs text-[#F5F1E7] text-[11px] font-semibold px-2.5 py-0.5 rounded-xs">
                    {card.badge}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-serif text-lg font-medium text-[#102B23] mb-1.5">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#575D52] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2 border-t border-[#DCE5D8]/70 flex items-center justify-between text-xs">
                <span className="text-[#173F32] font-semibold font-mono text-[11px]">
                  {card.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Simple Side-by-Side Comparison: Farmland Teak vs Forest-Grown Teak */}
        <div className="bg-[#102B23] text-[#F5F1E7] rounded-sm p-6 sm:p-8 lg:p-10 border border-[#173F32]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#B78B53] font-semibold block">
                The Farmland Teak Advantage
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#F5F1E7]">
                Why Managed Farmland Teak Matures 4× Faster
              </h3>
              <p className="text-xs sm:text-sm text-[#F5F1E7]/80 font-light leading-relaxed">
                By combining certified tissue-culture clones, precision drip irrigation, and regular
                pruning, farmland teak achieves commercial timber volume in <strong>8–12 years</strong>,
                compared to 45–55 years in wild unmanaged forests.
              </p>
              <div className="text-[11px] text-[#F5F1E7]/60 italic pt-1">
                *Published research: Indian Journal of Genetics and Plant Breeding (Prakash et al. 2026).
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Option A: Managed Farmland Teak */}
              <div className="bg-[#173F32] border border-[#B78B53]/40 p-5 rounded-sm">
                <div className="flex items-center justify-between text-xs text-[#B78B53] font-semibold mb-2">
                  <span>Nature’s Canopy Model</span>
                  <CheckCircle2 className="w-4 h-4 text-[#B78B53]" />
                </div>
                <h4 className="font-serif text-xl font-medium text-[#F5F1E7] mb-1">
                  Managed Farmland Teak
                </h4>
                <div className="font-serif text-3xl font-light text-[#D4A972] my-2">
                  8 – 12 Years
                </div>
                <ul className="space-y-1.5 text-xs text-[#F5F1E7]/80 mt-3">
                  <li className="flex items-center gap-1.5">
                    <span className="text-[#B78B53]">✓</span> Certified micro-clonal saplings
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-[#B78B53]">✓</span> Subsurface drip fertigation
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-[#B78B53]">✓</span> Apical pruning for straight boles
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-[#B78B53]">✓</span> 100% 2-year mortality warranty
                  </li>
                </ul>
              </div>

              {/* Option B: Wild Forest-Grown Teak */}
              <div className="bg-[#0D221C] border border-[#173F32] p-5 rounded-sm opacity-80">
                <span className="text-xs uppercase tracking-wider text-[#575D52] font-semibold block mb-2">
                  Traditional Method
                </span>
                <h4 className="font-serif text-xl font-medium text-[#F5F1E7]/80 mb-1">
                  Wild Forest-Grown Teak
                </h4>
                <div className="font-serif text-3xl font-light text-[#575D52] my-2">
                  45 – 55 Years
                </div>
                <ul className="space-y-1.5 text-xs text-[#F5F1E7]/60 mt-3">
                  <li>✕ Variable seed genetics</li>
                  <li>✕ Dependent on unpredictable rain</li>
                  <li>✕ Uncontrolled knotty branching</li>
                  <li>✕ High juvenile mortality</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
