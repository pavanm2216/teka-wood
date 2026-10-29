import React, { useState } from 'react';
import { BRAND_ASSETS } from '../data/proposalData';
import { MapPin, Compass, Droplet, Shield, Sprout, ArrowRight, Layers, Eye } from 'lucide-react';

interface SectorPoint {
  id: string;
  name: string;
  tagline: string;
  topPct: number;
  leftPct: number;
  areaAcres: string;
  costAllocation: string;
  icon: React.ReactNode;
  specs: string[];
  summary: string;
}

export const MasterplanBlueprintExplorer: React.FC<{ onNavigate: (page: string) => void }> = ({
  onNavigate,
}) => {
  const [activeSectorId, setActiveSectorId] = useState<string>('reservoir');

  const sectors: SectorPoint[] = [
    {
      id: 'reservoir',
      name: 'Central Water Reservoir & Catchment Basin',
      tagline: 'Heart of the Drip Infrastructure',
      topPct: 45,
      leftPct: 49,
      areaAcres: 'Central Basin & Retention Ponds',
      costAllocation: '₹1,44,08,100 (Drip & Water Grid)',
      icon: <Droplet className="w-4 h-4 text-[#B78B53]" />,
      specs: [
        'Geomembrane-lined rainwater harvesting reservoir',
        'Direct connection to 4 high-yield agricultural borewells',
        'Sand media filtration manifolds & booster pumps',
        'Zoned pressurized mainlines feeding all 350 acres',
      ],
      summary:
        'Engineered to buffer Ramanathapuram’s dry months, delivering moisture and bio-fertigation directly to 1,22,500 taproots while saving 60% water.',
    },
    {
      id: 'nursery',
      name: 'Micro-Clonal Tissue Nursery & Shadehouse',
      tagline: 'Genetics & Biological Hardening',
      topPct: 68,
      leftPct: 52,
      areaAcres: '4.5 Acres Dedicated Facility',
      costAllocation: '₹8,08,71,000 (Saplings & Planting)',
      icon: <Sprout className="w-4 h-4 text-[#B78B53]" />,
      specs: [
        'UV-stabilized 50% micro-shade netting canopy',
        'Climate-controlled misting propagation zones',
        'Soil testing lab and bio-manure inoculation beds',
        '100% mortality replacement holding nursery',
      ],
      summary:
        'The primary biological hub where certified micro-clonal saplings are acclimated to local ambient temperatures before mass planting.',
    },
    {
      id: 'sector-north',
      name: 'North Sector Commercial Plantation Blocks',
      tagline: 'Precision 350-Tree/Acre Grid',
      topPct: 30,
      leftPct: 40,
      areaAcres: '160 Acres Master Block',
      costAllocation: 'Included in Primary Phase 1',
      icon: <Layers className="w-4 h-4 text-[#B78B53]" />,
      specs: [
        'Engineered 350 trees per acre spacing grid',
        '20-foot access corridors for tractors and labour',
        'Apical dominance pruning lines for knot-free boles',
        'Subsurface lateral drip lines at each tree row',
      ],
      summary:
        'High-density agroforestry sector oriented north-to-south for maximum morning and evening solar interception, promoting uniform vertical growth.',
    },
    {
      id: 'sector-south',
      name: 'South Sector Commercial Plantation Blocks',
      tagline: 'Deep Soil Alluvial Parcel',
      topPct: 62,
      leftPct: 70,
      areaAcres: '185 Acres Master Block',
      costAllocation: 'Included in Primary Phase 1',
      icon: <Layers className="w-4 h-4 text-[#B78B53]" />,
      specs: [
        'Deep red sandy loam soil (Terra Rossa) with neutral pH',
        'Automated solenoid valves for scheduled fertigation',
        'Secondary windbreak tree belts on boundary edges',
        'Quarterly tree height and DBH silvicultural log stations',
      ],
      summary:
        'Optimized for vigorous heartwood formation, sheltered by perimeter windbreaks and monitored through quarterly tree growth audits.',
    },
    {
      id: 'fencing',
      name: 'Perimeter Solar Fencing & Security Belt',
      tagline: 'Boundary Protection & Deterrence',
      topPct: 22,
      leftPct: 65,
      areaAcres: 'Full Perimeter Boundary',
      costAllocation: '₹53,43,100 (Perimeter Security)',
      icon: <Shield className="w-4 h-4 text-[#B78B53]" />,
      specs: [
        'Heavy-duty solar-energized non-lethal perimeter fence',
        'Reinforced corner strainers and vehicle security gates',
        'Solar illumination poles & perimeter security sensors',
        'Fire-break buffer strip preventing external bushfires',
      ],
      summary:
        'Surrounds the entire estate to safeguard vulnerable saplings against grazing livestock, wild animals, and unauthorized trespassing.',
    },
    {
      id: 'camp',
      name: 'Operational Camp & Agricultural Labour Hub',
      tagline: 'On-Site Management Headquarters',
      topPct: 80,
      leftPct: 50,
      areaAcres: 'Central Operations Yard',
      costAllocation: '₹2,00,00,000 (Site Civil & Amenity Works)',
      icon: <Compass className="w-4 h-4 text-[#B78B53]" />,
      specs: [
        'Resident agricultural labour housing and sanitation',
        'Technical foremen office and CAD survey record room',
        'Equipment storage sheds, machinery garage & spare parts',
        'Solar lighting grid with auxiliary power backup linkages',
      ],
      summary:
        'Accommodates full-time agricultural staff ensuring daily watering schedules, desuckering, weeding, and continuous site oversight.',
    },
  ];

  const currentSector = sectors.find((s) => s.id === activeSectorId) || sectors[0];

  return (
    <div className="bg-[#102B23] border border-[#173F32] rounded-sm overflow-hidden text-[#F5F1E7] shadow-2xl">
      {/* Console Top Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 sm:px-8 border-b border-[#173F32] bg-[#0D221C]">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B78B53] font-semibold mb-1">
            <Compass className="w-4 h-4 text-[#B78B53]" />
            <span>Interactive GIS Masterplan Explorer</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#F5F1E7]">
            350-Acre Ramanathapuram Blueprint
          </h3>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-[#F5F1E7]/60">
            Coordinates: <span className="text-[#B78B53]">9°22&apos;N 78°50&apos;E</span>
          </span>
          <button
            onClick={() => onNavigate('ramanathapuram')}
            className="px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#102B23] bg-[#B78B53] hover:bg-[#D4A972] transition-colors rounded-sm cursor-pointer whitespace-nowrap"
          >
            Dossier View
          </button>
        </div>
      </div>

      {/* Main Grid: Interactive Map (Left) + Sector Technical Details (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
        {/* Interactive Aerial Map Viewport */}
        <div className="lg:col-span-7 relative bg-[#0D221C] overflow-hidden min-h-[380px] sm:min-h-[460px] lg:min-h-full">
          <img
            src={BRAND_ASSETS.aerialPlanImage}
            alt="350-acre Ramanathapuram Teak Masterplan aerial layout"
            className="w-full h-full object-cover object-center filter saturate-105"
            referrerPolicy="no-referrer"
          />

          {/* Calibrated Overlay Mesh */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#102B23] via-transparent to-black/30 pointer-events-none" />

          {/* Grid Overlay Lines (HUD effect) */}
          <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#F5F1E7_1px,transparent_1px),linear-gradient(to_bottom,#F5F1E7_1px,transparent_1px)] bg-[size:40px_40px]" />

          {/* Interactive Sector Hotspots */}
          {sectors.map((sec) => {
            const isSelected = sec.id === activeSectorId;
            return (
              <button
                key={sec.id}
                onClick={() => setActiveSectorId(sec.id)}
                style={{ top: `${sec.topPct}%`, left: `${sec.leftPct}%` }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer focus:outline-none transition-all duration-300 z-20`}
                aria-label={sec.name}
              >
                <div className="relative flex items-center justify-center">
                  {/* Outer Radar Ping */}
                  <span
                    className={`absolute w-9 h-9 rounded-full transition-opacity duration-300 ${
                      isSelected
                        ? 'bg-[#B78B53]/40 animate-ping opacity-75'
                        : 'bg-white/20 opacity-0 group-hover:opacity-100'
                    }`}
                  />
                  {/* Pin Center */}
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shadow-lg border-2 transition-transform duration-200 group-hover:scale-125 ${
                      isSelected
                        ? 'bg-[#B78B53] border-white text-[#102B23] scale-110 shadow-[0_0_15px_rgba(183,139,83,0.8)]'
                        : 'bg-[#102B23]/90 border-[#B78B53] text-[#F5F1E7] hover:bg-[#173F32]'
                    }`}
                  >
                    <span className="text-[10px] font-mono font-bold">
                      {sec.id === 'reservoir' ? 'H₂O' : sec.name.charAt(0)}
                    </span>
                  </div>

                  {/* Tooltip on Hover / Selected */}
                  <div
                    className={`absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-[#102B23]/95 backdrop-blur-md border border-[#B78B53]/50 rounded-xs text-[11px] font-medium text-[#F5F1E7] whitespace-nowrap pointer-events-none transition-opacity ${
                      isSelected ? 'opacity-100 scale-100' : 'opacity-0 scale-95 group-hover:opacity-100'
                    }`}
                  >
                    {sec.name}
                  </div>
                </div>
              </button>
            );
          })}

          {/* Map Compass Rose HUD */}
          <div className="absolute top-4 right-4 bg-[#102B23]/80 backdrop-blur-md p-2 rounded-sm border border-[#173F32] flex flex-col items-center pointer-events-none text-[10px] font-mono text-[#B78B53]">
            <span>N ↑</span>
            <span className="text-[8px] text-[#F5F1E7]/60">350 AC</span>
          </div>

          {/* Interactive Hint */}
          <div className="absolute bottom-4 left-4 bg-[#102B23]/85 backdrop-blur-md px-3 py-1.5 rounded-xs border border-[#173F32] text-xs text-[#F5F1E7]/70 flex items-center gap-2">
            <Eye className="w-3.5 h-3.5 text-[#B78B53]" />
            <span>Select any blueprint marker to inspect engineering specifications</span>
          </div>
        </div>

        {/* Technical Detail Card (Right) */}
        <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6 bg-[#102B23]">
          <div>
            {/* Sector Selector Chips */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {sectors.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveSectorId(s.id)}
                  className={`px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider rounded-xs transition-colors cursor-pointer ${
                    s.id === activeSectorId
                      ? 'bg-[#B78B53] text-[#102B23] font-semibold'
                      : 'bg-[#173F32] text-[#F5F1E7]/70 hover:text-[#F5F1E7]'
                  }`}
                >
                  {s.id.replace('sector-', '')}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B78B53] font-semibold mb-2">
              {currentSector.icon}
              <span>{currentSector.tagline}</span>
            </div>

            <h4 className="font-serif text-2xl sm:text-3xl text-[#F5F1E7] font-medium mb-3 leading-snug">
              {currentSector.name}
            </h4>

            <p className="text-sm text-[#F5F1E7]/80 leading-relaxed font-light mb-6">
              {currentSector.summary}
            </p>

            {/* Spec Table */}
            <div className="space-y-2 mb-6">
              <span className="text-xs uppercase tracking-wider text-[#B78B53] font-semibold block">
                Engineering & Silvicultural Deliverables
              </span>
              <div className="space-y-1.5">
                {currentSector.specs.map((sp, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-2 bg-[#0D221C] border border-[#173F32] rounded-xs text-xs text-[#F5F1E7]/90 leading-relaxed"
                  >
                    <span className="text-[#B78B53] font-mono mt-0.5">·</span>
                    <span>{sp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Financial & Land Allocation Strip */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#173F32]">
              <div className="bg-[#0D221C] p-3 rounded-xs border border-[#173F32]">
                <span className="text-[10px] uppercase tracking-wider text-[#F5F1E7]/60 block mb-0.5">
                  Sector Area
                </span>
                <span className="text-xs font-semibold text-[#F5F1E7]">
                  {currentSector.areaAcres}
                </span>
              </div>
              <div className="bg-[#0D221C] p-3 rounded-xs border border-[#173F32]">
                <span className="text-[10px] uppercase tracking-wider text-[#F5F1E7]/60 block mb-0.5">
                  Phase 1 Budget
                </span>
                <span className="text-xs font-semibold text-[#B78B53] font-mono tabular-nums truncate block">
                  {currentSector.costAllocation}
                </span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#173F32] flex items-center justify-between text-xs">
            <span className="text-[#F5F1E7]/60">Source: Ramanathapuram Proposal Blueprint</span>
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-1 font-semibold text-[#B78B53] hover:text-[#D4A972] uppercase tracking-wider cursor-pointer"
            >
              <span>View Full Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
