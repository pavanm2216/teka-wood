import React, { useState } from 'react';
import { Sparkles, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

interface GrowthStage {
  year: string;
  stageName: string;
  heightFt: number;
  heightDisplay: string;
  dbhInches: string;
  heartwoodPercentage: number;
  cftVolume: string;
  biologicalMilestone: string;
  silviculturalRegime: string;
  estimatedValuePerTree: string;
}

export const TeakGrowthInspector: React.FC<{ onNavigate: (page: string) => void }> = ({
  onNavigate,
}) => {
  const [selectedYearIndex, setSelectedYearIndex] = useState(3); // Default to Year 8

  const stages: GrowthStage[] = [
    {
      year: 'Year 1',
      stageName: 'Root Anchoring & Sapling Establishment',
      heightFt: 6,
      heightDisplay: '5 – 8 Feet',
      dbhInches: '1.5 – 2.0 In',
      heartwoodPercentage: 5,
      cftVolume: 'Juvenile Biomass',
      biologicalMilestone: 'Taproot penetrates deeper subsoil horizons; canopy establishes initial light capture.',
      silviculturalRegime: 'Intensive scheduled drip fertigation, organic basal manuring, and 100% mortality replacement warranty.',
      estimatedValuePerTree: '₹2,000 (Biological Model)',
    },
    {
      year: 'Year 3',
      stageName: 'Vigorous Apical Dominance & Bole Formation',
      heightFt: 20,
      heightDisplay: '18 – 22 Feet',
      dbhInches: '5.0 – 6.5 In',
      heartwoodPercentage: 25,
      cftVolume: '4 – 6 CFT (Juvenile)',
      biologicalMilestone: 'Rapid vertical stem elongation suppresses understory weeds; lateral branch shedding commences naturally.',
      silviculturalRegime: 'Systematic desuckering and lateral shoot pruning to maintain a knot-free cylindrical trunk bole.',
      estimatedValuePerTree: '₹6,000 (Biological Model)',
    },
    {
      year: 'Year 5',
      stageName: 'Heartwood Core Formation & Girth Expansion',
      heightFt: 32,
      heightDisplay: '30 – 35 Feet',
      dbhInches: '9.0 – 11.0 In',
      heartwoodPercentage: 55,
      cftVolume: '12 – 15 CFT',
      biologicalMilestone: 'Parenchyma cells convert to dark, extractive-rich heartwood naturally resistant to termites and fungal decay.',
      silviculturalRegime: 'Seasonal soil discing, quarterly manpower audits, and crown diameter spacing assessments.',
      estimatedValuePerTree: '₹10,000 (Biological Model)',
    },
    {
      year: 'Year 8',
      stageName: 'Commercial Timber Harvest Readiness',
      heightFt: 44,
      heightDisplay: '40 – 48 Feet',
      dbhInches: '14.0 – 16.5 In',
      heartwoodPercentage: 80,
      cftVolume: '25 CFT (Merchantable)',
      biologicalMilestone: 'High heartwood-to-sapwood ratio, rich tectoquinone oil concentrations, dense golden timber rings.',
      silviculturalRegime: 'Timber volume inventory validation, statutory transit clearance, and planned commercial felling.',
      estimatedValuePerTree: '₹50,000 (Proposal Assumption)',
    },
  ];

  const current = stages[selectedYearIndex];

  return (
    <div className="bg-white border border-[#DCE5D8] rounded-sm p-6 sm:p-10 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#DCE5D8] mb-8">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#B78B53] font-semibold block mb-1">
            Silvicultural Anatomy
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#102B23] font-normal">
            Interactive Tree Growth & Heartwood Simulator
          </h3>
        </div>
        <div className="text-xs text-[#575D52] bg-[#FAF8F2] border border-[#DCE5D8] px-3 py-1.5 rounded-sm self-start sm:self-auto">
          Scrub through the 8-year growth cycle
        </div>
      </div>

      {/* Stage Tab Scrubbers */}
      <div className="grid grid-cols-4 gap-2 mb-8">
        {stages.map((st, idx) => {
          const isSelected = selectedYearIndex === idx;
          return (
            <button
              key={idx}
              onClick={() => setSelectedYearIndex(idx)}
              className={`p-3 text-center rounded-sm transition-all cursor-pointer border ${
                isSelected
                  ? 'bg-[#102B23] text-[#F5F1E7] border-[#102B23] shadow-sm'
                  : 'bg-[#FAF8F2] text-[#292D27] border-[#DCE5D8] hover:bg-white'
              }`}
            >
              <span
                className={`font-serif text-lg sm:text-xl font-medium block ${
                  isSelected ? 'text-[#B78B53]' : 'text-[#102B23]'
                }`}
              >
                {st.year}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#575D52] hidden sm:block truncate mt-0.5">
                {st.heightDisplay}
              </span>
            </button>
          );
        })}
      </div>

      {/* Interactive Anatomy Display */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FAF8F2] border border-[#DCE5D8] p-6 sm:p-8 rounded-sm">
        {/* Left: Graphic Diagrammatic Simulation of Tree Trunk & Heartwood */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 bg-white border border-[#DCE5D8] rounded-sm">
          <span className="text-[11px] uppercase tracking-wider text-[#575D52] font-semibold mb-4">
            Trunk Cross-Section ({current.year})
          </span>

          {/* Concentric rings visualization */}
          <div className="relative w-48 h-48 rounded-full border-4 border-[#292D27] flex items-center justify-center shadow-inner overflow-hidden bg-[#EBF1E8]">
            {/* Outer Sapwood Ring */}
            <div className="absolute inset-0 border-[6px] border-[#C5D3BF] rounded-full pointer-events-none" />

            {/* Inner Heartwood Core */}
            <div
              style={{
                width: `${Math.max(20, current.heartwoodPercentage * 1.8)}px`,
                height: `${Math.max(20, current.heartwoodPercentage * 1.8)}px`,
              }}
              className="rounded-full bg-gradient-to-tr from-[#9B7038] via-[#B78B53] to-[#C9A26D] flex items-center justify-center text-center shadow-md transition-all duration-500 ease-out p-2 border border-[#7D5320]"
            >
              <div className="text-[10px] font-mono font-bold text-[#102B23] leading-tight">
                {current.heartwoodPercentage}%
                <span className="block text-[8px] font-sans font-normal">HEARTWOOD</span>
              </div>
            </div>

            {/* Growth Rings texture */}
            <div className="absolute inset-4 rounded-full border border-dashed border-[#575D52]/20 pointer-events-none" />
            <div className="absolute inset-8 rounded-full border border-[#575D52]/15 pointer-events-none" />
          </div>

          {/* Cross section legend */}
          <div className="flex items-center gap-4 mt-6 text-xs text-[#575D52]">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 bg-[#B78B53] rounded-full border border-[#9B7038]" />
              <span>Heartwood ({current.heartwoodPercentage}%)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 bg-[#C5D3BF] rounded-full border border-[#575D52]/40" />
              <span>Sapwood ({100 - current.heartwoodPercentage}%)</span>
            </div>
          </div>
        </div>

        {/* Right: Silvicultural Profile */}
        <div className="lg:col-span-7 space-y-4">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B78B53] font-semibold mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#B78B53]" />
              <span>{current.year} Silvicultural Status</span>
            </div>
            <h4 className="font-serif text-2xl text-[#102B23] font-medium">
              {current.stageName}
            </h4>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
            <div className="bg-white p-3 rounded-xs border border-[#DCE5D8]">
              <span className="text-[10px] uppercase tracking-wider text-[#575D52] block">
                Estimated Tree Height
              </span>
              <span className="font-mono text-sm font-semibold text-[#102B23] block mt-0.5">
                {current.heightDisplay}
              </span>
            </div>
            <div className="bg-white p-3 rounded-xs border border-[#DCE5D8]">
              <span className="text-[10px] uppercase tracking-wider text-[#575D52] block">
                Girth (DBH)
              </span>
              <span className="font-mono text-sm font-semibold text-[#102B23] block mt-0.5">
                {current.dbhInches}
              </span>
            </div>
            <div className="bg-white p-3 rounded-xs border border-[#DCE5D8] col-span-2 sm:col-span-1">
              <span className="text-[10px] uppercase tracking-wider text-[#575D52] block">
                Merchantable Timber
              </span>
              <span className="font-mono text-sm font-semibold text-[#173F32] block mt-0.5">
                {current.cftVolume}
              </span>
            </div>
          </div>

          <div className="space-y-3 pt-2 text-xs text-[#575D52] leading-relaxed">
            <div className="bg-white p-3.5 rounded-xs border border-[#DCE5D8]">
              <strong className="text-[#102B23] block mb-1">Biological Phenomenon:</strong>
              {current.biologicalMilestone}
            </div>
            <div className="bg-white p-3.5 rounded-xs border border-[#DCE5D8]">
              <strong className="text-[#102B23] block mb-1">Active Silvicultural Maintenance:</strong>
              {current.silviculturalRegime}
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between text-xs border-t border-[#DCE5D8]">
            <span className="text-[#575D52]">
              Illustrative Valuation: <strong className="text-[#173F32]">{current.estimatedValuePerTree}</strong>
            </span>
            <button
              onClick={() => onNavigate('investment')}
              className="inline-flex items-center gap-1 font-semibold uppercase tracking-wider text-[#102B23] hover:text-[#B78B53] cursor-pointer"
            >
              <span>View Financial Model</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
