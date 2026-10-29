import React, { useState } from 'react';
import { BRAND_ASSETS } from '../data/proposalData';
import { Sparkles, ShieldCheck, Droplets, Flame, CheckCircle2, ArrowRight } from 'lucide-react';

interface WoodProperty {
  label: string;
  value: string;
  benchmark: string;
  description: string;
}

export const TimberSpecimenStudio: React.FC<{ onNavigate: (page: string) => void }> = ({
  onNavigate,
}) => {
  const [selectedGrainMode, setSelectedGrainMode] = useState<'quarter' | 'heartwood' | 'rings'>('heartwood');

  const properties: WoodProperty[] = [
    {
      label: 'Natural Durability Rating',
      value: 'Class 1 (Highest Global)',
      benchmark: '25+ Years Untreated Soil Contact',
      description: 'Contains dense natural tectoquinones and rubber latex polymers rendering it immune to subterranean termites and fungal rot.',
    },
    {
      label: 'Air-Dry Wood Density',
      value: '~650 kg / m³',
      benchmark: 'Optimal Hardwood Strength',
      description: 'Provides superior structural rigidity while retaining exceptional workability for fine architectural millwork and boatbuilding.',
    },
    {
      label: 'Radial Shrinkage Coefficient',
      value: '1.2% (Extremely Low)',
      benchmark: 'Superior Dimensional Stability',
      description: 'Does not warp, cup, or split under extreme tropical humidity or scorching summer conditions.',
    },
    {
      label: 'Silica & Marine Water Resistance',
      value: 'Natural Hydrophobic Wax',
      benchmark: 'Gold Standard for Marine Craft',
      description: 'Naturally repels moisture penetration, ensuring wood fibers do not swell or delaminate.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-y border-[#DCE5D8]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B78B53] font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#B78B53]" />
            <span>Material Science & Commercial Grading</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#102B23] font-normal tracking-tight">
            The Living Gold: Teak Timber Anatomy
          </h2>
          <p className="text-sm text-[#575D52] mt-3 leading-relaxed">
            Why does teak timber command an assumed market rate of ₹2,000 per CFT? Examine the
            natural cellular architecture that makes <em>Tectona grandis</em> the world’s most valued
            hardwood.
          </p>
        </div>

        {/* Interactive Specimen Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Specimen Macro Viewport */}
          <div className="lg:col-span-6 bg-[#FAF8F2] border border-[#DCE5D8] rounded-sm p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#DCE5D8] mb-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#B78B53] font-semibold block">
                    Specimen No. NC-TK-8Y
                  </span>
                  <h3 className="font-serif text-xl font-medium text-[#102B23]">
                    Seasoned Golden Teakwood Grain
                  </h3>
                </div>
                <span className="text-[11px] font-mono bg-white border border-[#DCE5D8] px-2.5 py-1 rounded text-[#173F32]">
                  25 CFT / Tree Model
                </span>
              </div>

              {/* Timber Photo with Loupe Zoom Effect */}
              <div className="relative rounded-sm overflow-hidden border border-[#DCE5D8] shadow-sm mb-6 h-72 sm:h-80 group">
                <img
                  src={BRAND_ASSETS.woodGrainImage}
                  alt="High resolution golden teak timber specimen grain"
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    selectedGrainMode === 'quarter'
                      ? 'scale-110 contrast-110'
                      : selectedGrainMode === 'rings'
                      ? 'scale-125 brightness-95'
                      : 'scale-100'
                  }`}
                  referrerPolicy="no-referrer"
                />

                {/* Ambient Timber Lens Badge */}
                <div className="absolute bottom-4 left-4 bg-[#102B23]/90 text-[#F5F1E7] backdrop-blur-md px-3 py-1.5 rounded-xs text-xs font-mono">
                  {selectedGrainMode === 'quarter'
                    ? 'Quarter-Sawn Straight Ray Grain'
                    : selectedGrainMode === 'rings'
                    ? 'Micro-Clonal Annual Rings'
                    : 'Golden Heartwood Core'}
                </div>
              </div>

              {/* Mode Selectors */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#575D52] font-medium mr-1">Inspect Grain:</span>
                <button
                  onClick={() => setSelectedGrainMode('heartwood')}
                  className={`px-3 py-1 text-xs font-medium rounded-xs transition-colors cursor-pointer ${
                    selectedGrainMode === 'heartwood'
                      ? 'bg-[#102B23] text-[#F5F1E7]'
                      : 'bg-white text-[#575D52] border border-[#DCE5D8] hover:text-[#102B23]'
                  }`}
                >
                  Heartwood Core
                </button>
                <button
                  onClick={() => setSelectedGrainMode('quarter')}
                  className={`px-3 py-1 text-xs font-medium rounded-xs transition-colors cursor-pointer ${
                    selectedGrainMode === 'quarter'
                      ? 'bg-[#102B23] text-[#F5F1E7]'
                      : 'bg-white text-[#575D52] border border-[#DCE5D8] hover:text-[#102B23]'
                  }`}
                >
                  Quarter-Sawn
                </button>
                <button
                  onClick={() => setSelectedGrainMode('rings')}
                  className={`px-3 py-1 text-xs font-medium rounded-xs transition-colors cursor-pointer ${
                    selectedGrainMode === 'rings'
                      ? 'bg-[#102B23] text-[#F5F1E7]'
                      : 'bg-white text-[#575D52] border border-[#DCE5D8] hover:text-[#102B23]'
                  }`}
                >
                  Annual Rings
                </button>
              </div>
            </div>

            <div className="pt-6 border-t border-[#DCE5D8] mt-6 flex items-center justify-between text-xs text-[#575D52]">
              <span>Biological species: <em>Tectona grandis</em></span>
              <span className="text-[#173F32] font-semibold">100% Micro-Clonal Lineage</span>
            </div>
          </div>

          {/* Right: Technical Properties Matrix */}
          <div className="lg:col-span-6 bg-[#FAF8F2] border border-[#DCE5D8] rounded-sm p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#B78B53] font-semibold block mb-2">
                Physical Properties & Market Premium
              </span>
              <h3 className="font-serif text-2xl text-[#102B23] font-medium mb-6">
                Why Teak Holds Unrivaled Market Value
              </h3>

              <div className="space-y-4">
                {properties.map((p, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-white border border-[#DCE5D8] rounded-sm hover:border-[#B78B53] transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                      <h4 className="text-sm font-semibold text-[#102B23]">{p.label}</h4>
                      <span className="font-mono text-xs font-semibold text-[#173F32] bg-[#FAF8F2] px-2 py-0.5 rounded border border-[#DCE5D8]">
                        {p.value}
                      </span>
                    </div>
                    <span className="text-[11px] text-[#B78B53] font-medium block mb-1">
                      Benchmark: {p.benchmark}
                    </span>
                    <p className="text-xs text-[#575D52] leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#DCE5D8] mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="text-xs text-[#575D52]">
                Proposal Timber Assumption: <strong>25 CFT × ₹2,000/CFT</strong>
              </span>
              <button
                onClick={() => onNavigate('investment')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#102B23] hover:text-[#B78B53] cursor-pointer"
              >
                <span>Simulate Harvest Scenarios</span>
                <ArrowRight className="w-4 h-4 text-[#B78B53]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
