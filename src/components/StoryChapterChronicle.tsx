import React, { useState, useEffect } from 'react';
import { BRAND_ASSETS } from '../data/proposalData';
import { ArrowLeft, ArrowRight, Sparkles, ChevronRight, Compass, Droplet, Sprout, Trees, Shield } from 'lucide-react';

interface StoryChapter {
  id: number;
  chapterNumber: string;
  tagline: string;
  title: string;
  subtitle: string;
  quote: string;
  narrative: string[];
  metrics: { label: string; value: string }[];
  image: string;
  imageAlt: string;
}

export const StoryChapterChronicle: React.FC<{ onNavigate: (page: string) => void }> = ({
  onNavigate,
}) => {
  const [activeChapter, setActiveChapter] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  const chapters: StoryChapter[] = [
    {
      id: 0,
      chapterNumber: 'Chapter 01',
      tagline: 'Genetics & Inception',
      title: 'The Selected Micro-Clone',
      subtitle: 'Eliminating biological variance before the first seed touches soil.',
      quote: '“Wild forestry leaves timber quality to chance. In engineered silviculture, the tree’s destiny is forged in the nursery.”',
      narrative: [
        'Every single one of the 1,22,500 planned saplings for Ramanathapuram originates from elite micro-clonal tissue-culture mother trees selected over decades for apical dominance and superior heartwood formation.',
        'Hardened under controlled shade house microclimates, these saplings exhibit zero seed-borne diseases, uniform growth velocities, and immediate vigorous root colonization upon field transplantation.',
      ],
      metrics: [
        { label: 'Tissue-Culture Saplings', value: '1,22,500' },
        { label: 'Genetic Uniformity', value: '100% Micro-Clonal' },
        { label: 'Transplant Survival Target', value: '≥90% Benchmark' },
      ],
      image: BRAND_ASSETS.saplingImage,
      imageAlt: 'Micro-clonal tissue-culture teak sapling in nursery',
    },
    {
      id: 1,
      chapterNumber: 'Chapter 02',
      tagline: 'The Master Blueprint',
      title: 'The CAD Grid & Land Demarcation',
      subtitle: 'Transforming 350 acres into an organized geometric agroforestry reserve.',
      quote: '“Order in spacing is order in light. Give every tree its calculated solar azimuth, and the forest rises as one.”',
      narrative: [
        'Before a single trench is dug, high-precision topographical surveys and CAD planning map the 350-acre expanse into designated sectors, 20-foot access corridors, and peripheral stormwater channels.',
        'A calculated planting density of 350 trees per acre guarantees optimal canopy competition—prompting saplings to surge upward toward sunlight rather than branching outward, minimizing knot defects.',
      ],
      metrics: [
        { label: 'Plantation Area', value: '350 Acres' },
        { label: 'Planting Density', value: '350 Trees / Acre' },
        { label: 'Perimeter Barrier', value: 'Reinforced Solar Fencing' },
      ],
      image: BRAND_ASSETS.aerialPlanImage,
      imageAlt: 'Aerial view of 350-acre structured plantation landscape',
    },
    {
      id: 2,
      chapterNumber: 'Chapter 03',
      tagline: 'Precision Lifeblood',
      title: 'The Subsurface Drip Hydration Grid',
      subtitle: 'Delivering metered moisture directly to the taproot in semi-arid Ramanathapuram.',
      quote: '“Water is not flooded across soil; it is measured drop by drop directly where cellular growth occurs.”',
      narrative: [
        'In semi-arid coastal Tamil Nadu, water security dictates plantation survival. Nature’s Canopy integrates deep agricultural borewells, dedicated water harvesting ponds, and an automated drip irrigation mainline.',
        'Pressure-compensating emitters deliver targeted moisture and organic fertigation right at the root bulb, reducing water evaporation by up to 60% compared to traditional furrow flood techniques.',
      ],
      metrics: [
        { label: 'Drip Network Capital', value: '₹1.44 Crore' },
        { label: 'Water Conservation', value: '~60% Savings' },
        { label: 'Storage Infrastructure', value: 'Dedicated Ponds & Borewells' },
      ],
      image: BRAND_ASSETS.irrigationImage,
      imageAlt: 'Drip irrigation lines and plantation landscape',
    },
    {
      id: 3,
      chapterNumber: 'Chapter 04',
      tagline: 'Silvicultural Discipline',
      title: 'The Craft of the Straight Bole',
      subtitle: 'Continuous pruning and desuckering to produce knot-free golden heartwood.',
      quote: '“A magnificent teak log is not born in the wild; it is sculpted through eight years of disciplined pruning.”',
      narrative: [
        'From Year 1 through Year 4, our on-site labour teams conduct systematic apical shoot desuckering and branch pruning. By removing lateral twigs before they thicken, the trunk forms a pristine, knot-free clear bole.',
        'As the tree enters Years 5–7, the central core undergoes chemical transformation: natural tectoquinones and hydrophobic oils concentrate into dense, dark golden heartwood prized worldwide for architectural permanence.',
      ],
      metrics: [
        { label: 'Target Bole Height', value: '30–40 Feet Clear' },
        { label: 'Heartwood Proportion', value: 'High Density' },
        { label: 'Pruning Cycle', value: 'Quarterly Audits' },
      ],
      image: BRAND_ASSETS.woodGrainImage,
      imageAlt: 'Rich golden teak wood grain and timber rings',
    },
    {
      id: 4,
      chapterNumber: 'Chapter 05',
      tagline: 'Commercial Maturation',
      title: 'The Year 8 Commercial Harvest',
      subtitle: 'Realizing 25 CFT of merchantable timber per tree across 1,22,500 trees.',
      quote: '“The culmination of eight years of biological stewardship: sustainable hardwood for generations to come.”',
      narrative: [
        'At the end of Year 8, the stand reaches commercial harvest readiness, with healthy trees averaging 25 cubic feet (CFT) of usable timber. Formal forest transit permits and serialized timber depot logs ensure verified traceability.',
        'With illustrative gross value modeled at ₹612.5 crore (1,22,500 trees × 25 CFT × ₹2,000/CFT), the plantation stands as a testament to disciplined agricultural asset development.',
      ],
      metrics: [
        { label: 'Assumed Timber per Tree', value: '25 CFT' },
        { label: 'Assumed Rate', value: '₹2,000 / CFT' },
        { label: 'Gross Illustrative Output', value: '₹612.5 Crore' },
      ],
      image: BRAND_ASSETS.heroImage,
      imageAlt: 'Towering mature teak forest pathway in morning light',
    },
  ];

  const current = chapters[activeChapter];

  // Auto-advance feature if user enables it
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActiveChapter((prev) => (prev + 1) % chapters.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, chapters.length]);

  return (
    <section className="py-20 lg:py-32 bg-[#102B23] text-[#F5F1E7] relative overflow-hidden border-y border-[#173F32]">
      {/* Background visual grain subtle atmosphere */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#F5F1E7_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#173F32]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B78B53] font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#B78B53]" />
              <span>Scroll Narrative · The Living Canopy Chronicle</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#F5F1E7] tracking-tight">
              From Seedling to Crown
            </h2>
            <p className="text-sm text-[#F5F1E7]/70 font-light mt-2 max-w-xl">
              Follow the five-stage visual journey of how 350 acres of Ramanathapuram land are
              cultivated into an engineered commercial teak reserve.
            </p>
          </div>

          {/* Chapter Quick Selector & Auto-play toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors border cursor-pointer ${
                isAutoPlaying
                  ? 'bg-[#B78B53] text-[#102B23] border-[#B78B53]'
                  : 'bg-[#173F32] text-[#F5F1E7]/80 border-[#173F32] hover:text-[#F5F1E7]'
              }`}
            >
              {isAutoPlaying ? 'Auto-Advancing (Pause)' : 'Auto-Story Mode'}
            </button>
            <div className="text-xs font-mono text-[#B78B53]">
              {String(activeChapter + 1).padStart(2, '0')} / {String(chapters.length).padStart(2, '0')}
            </div>
          </div>
        </div>

        {/* Chapter Navigation Rail (Desktop) */}
        <div className="grid grid-cols-5 gap-2 mb-8 border-b border-[#173F32] pb-4 overflow-x-auto scrollbar-none">
          {chapters.map((ch, idx) => {
            const isActive = activeChapter === idx;
            return (
              <button
                key={ch.id}
                onClick={() => {
                  setActiveChapter(idx);
                  setIsAutoPlaying(false);
                }}
                className={`text-left p-3 rounded-sm transition-all cursor-pointer whitespace-nowrap lg:whitespace-normal ${
                  isActive
                    ? 'bg-[#173F32] text-[#F5F1E7] border-b-2 border-[#B78B53]'
                    : 'text-[#F5F1E7]/60 hover:text-[#F5F1E7] hover:bg-[#173F32]/40'
                }`}
              >
                <span
                  className={`text-[10px] uppercase tracking-widest block font-mono ${
                    isActive ? 'text-[#B78B53] font-semibold' : 'text-[#F5F1E7]/40'
                  }`}
                >
                  {ch.chapterNumber}
                </span>
                <span className="text-xs font-medium truncate block mt-0.5">
                  {ch.tagline}
                </span>
              </button>
            );
          })}
        </div>

        {/* Cinematic Chapter Stage Container */}
        <div className="bg-[#0D221C] border border-[#173F32] rounded-sm overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 min-h-[540px]">
          {/* Visual Showcase (Left/Top) */}
          <div className="lg:col-span-7 relative h-[360px] sm:h-[440px] lg:h-auto overflow-hidden group">
            <img
              key={current.id}
              src={current.image}
              alt={current.imageAlt}
              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            {/* Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D221C] via-[#0D221C]/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-[#0D221C]/20 lg:to-[#0D221C]" />

            {/* Chapter Pill Badge */}
            <div className="absolute top-5 left-5 bg-[#102B23]/90 backdrop-blur-xs border border-[#173F32] px-3.5 py-1.5 rounded-xs text-xs font-mono text-[#B78B53] flex items-center gap-2">
              <span>{current.chapterNumber}</span>
              <span className="text-[#F5F1E7]/40">·</span>
              <span className="text-[#F5F1E7]">{current.tagline}</span>
            </div>

            {/* Floating Metric on Image (Mobile/Tablet) */}
            <div className="absolute bottom-5 left-5 right-5 lg:hidden bg-[#102B23]/90 backdrop-blur-xs p-3 border border-[#173F32] rounded-xs flex items-center justify-between text-xs">
              <span className="text-[#F5F1E7]/70">{current.metrics[0].label}:</span>
              <span className="font-mono font-semibold text-[#B78B53]">{current.metrics[0].value}</span>
            </div>
          </div>

          {/* Narrative Details (Right/Bottom) */}
          <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#B78B53] font-semibold block mb-2">
                {current.chapterNumber}
              </span>

              <h3 className="font-serif text-3xl sm:text-4xl text-[#F5F1E7] font-normal tracking-tight leading-snug mb-3">
                {current.title}
              </h3>

              <p className="text-xs uppercase tracking-wider text-[#F5F1E7]/60 font-medium mb-6">
                {current.subtitle}
              </p>

              {/* Editorial Quote */}
              <blockquote className="border-l-2 border-[#B78B53] pl-4 py-1 italic font-serif text-sm sm:text-base text-[#D4A972] mb-6 leading-relaxed">
                {current.quote}
              </blockquote>

              {/* Prose */}
              <div className="space-y-3 text-xs sm:text-sm text-[#F5F1E7]/80 font-light leading-relaxed">
                {current.narrative.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>
            </div>

            {/* Silvicultural Metrics Strip */}
            <div className="pt-6 border-t border-[#173F32]">
              <div className="grid grid-cols-3 gap-3 mb-6">
                {current.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="bg-[#102B23] p-2.5 rounded-xs border border-[#173F32]">
                    <span className="text-[10px] uppercase tracking-wider text-[#F5F1E7]/60 block truncate mb-1">
                      {m.label}
                    </span>
                    <span className="font-mono text-xs font-semibold text-[#B78B53] block truncate">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Chapter Controls */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setActiveChapter((prev) => (prev > 0 ? prev - 1 : chapters.length - 1));
                      setIsAutoPlaying(false);
                    }}
                    className="p-2.5 bg-[#173F32] hover:bg-[#B78B53] hover:text-[#102B23] transition-colors rounded-xs text-[#F5F1E7] cursor-pointer"
                    aria-label="Previous Chapter"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      setActiveChapter((prev) => (prev < chapters.length - 1 ? prev + 1 : 0));
                      setIsAutoPlaying(false);
                    }}
                    className="p-2.5 bg-[#173F32] hover:bg-[#B78B53] hover:text-[#102B23] transition-colors rounded-xs text-[#F5F1E7] cursor-pointer"
                    aria-label="Next Chapter"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={() => onNavigate('ramanathapuram')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#B78B53] hover:text-[#D4A972] transition-colors cursor-pointer"
                >
                  <span>Explore 350-Acre Blueprint</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
