import React, { useState } from 'react';
import { RotateCcw, Info, TrendingUp, AlertTriangle } from 'lucide-react';
import { RAMANATHAPURAM_PROJECT } from '../data/proposalData';

export const GrossHarvestCalculator: React.FC = () => {
  const defaultTrees = RAMANATHAPURAM_PROJECT.plannedSaplings; // 122,500
  const defaultCFT = RAMANATHAPURAM_PROJECT.assumedVolumePerTreeCFT; // 25
  const defaultPrice = RAMANATHAPURAM_PROJECT.assumedPricePerCFT; // 2000
  const initialCost = RAMANATHAPURAM_PROJECT.initialEstimatedCostNumber; // 125,959,700

  const [trees, setTrees] = useState<number>(defaultTrees);
  const [cftPerTree, setCftPerTree] = useState<number>(defaultCFT);
  const [pricePerCFT, setPricePerCFT] = useState<number>(defaultPrice);

  const calculateGross = () => {
    const totalCFT = (trees || 0) * (cftPerTree || 0);
    const grossRupees = totalCFT * (pricePerCFT || 0);
    const grossCrores = grossRupees / 10000000;
    return { grossRupees, grossCrores, totalCFT };
  };

  const { grossRupees, grossCrores, totalCFT } = calculateGross();

  const diffBeforeCosts = grossRupees - initialCost;
  const diffBeforeCostsCrores = diffBeforeCosts / 10000000;

  const handleReset = () => {
    setTrees(defaultTrees);
    setCftPerTree(defaultCFT);
    setPricePerCFT(defaultPrice);
  };

  const formatIndianNumber = (num: number) => {
    return new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(num);
  };

  const formatCrores = (crores: number) => {
    return new Intl.NumberFormat('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(crores);
  };

  return (
    <div className="bg-[#FAF8F2] border border-[#DCE5D8] rounded-sm p-6 sm:p-8 lg:p-10 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#DCE5D8]">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#B78B53] font-semibold block mb-1">
            Interactive Silvicultural Model
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#102B23] font-normal">
            Illustrative Harvest Value Calculator
          </h3>
        </div>
        <button
          onClick={handleReset}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#102B23] bg-white border border-[#DCE5D8] hover:bg-[#DCE5D8]/50 transition-colors rounded-sm cursor-pointer self-start sm:self-auto"
        >
          <RotateCcw className="w-3.5 h-3.5 text-[#B78B53]" />
          <span>Reset to Proposal Defaults</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8">
        {/* Controls Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* Input 1: Trees */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <label htmlFor="tree-input" className="font-medium text-[#102B23]">
                Number of Commercial Trees
              </label>
              <span className="font-mono tabular-nums text-xs font-semibold text-[#173F32] bg-[#DCE5D8]/60 px-2 py-0.5 rounded">
                {formatIndianNumber(trees)} Trees
              </span>
            </div>
            <input
              id="tree-input"
              type="range"
              min={25000}
              max={250000}
              step={2500}
              value={trees}
              onChange={(e) => setTrees(Number(e.target.value))}
              className="w-full accent-[#B78B53] cursor-pointer"
            />
            <div className="flex items-center justify-between text-[11px] text-[#575D52]">
              <span>Min: 25,000</span>
              <span>Proposal Default: 1,22,500</span>
              <span>Max: 2,50,000</span>
            </div>
          </div>

          {/* Input 2: CFT per Tree */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <label htmlFor="cft-input" className="font-medium text-[#102B23]">
                Assumed Timber Volume per Tree (CFT)
              </label>
              <span className="font-mono tabular-nums text-xs font-semibold text-[#173F32] bg-[#DCE5D8]/60 px-2 py-0.5 rounded">
                {cftPerTree} CFT / Tree
              </span>
            </div>
            <input
              id="cft-input"
              type="range"
              min={10}
              max={40}
              step={1}
              value={cftPerTree}
              onChange={(e) => setCftPerTree(Number(e.target.value))}
              className="w-full accent-[#B78B53] cursor-pointer"
            />
            <div className="flex items-center justify-between text-[11px] text-[#575D52]">
              <span>Conservative: 15 CFT</span>
              <span>Proposal Assumption: 25 CFT</span>
              <span>Optimistic: 35 CFT</span>
            </div>
          </div>

          {/* Input 3: Price per CFT */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <label htmlFor="price-input" className="font-medium text-[#102B23]">
                Assumed Timber Price (₹ per CFT)
              </label>
              <span className="font-mono tabular-nums text-xs font-semibold text-[#173F32] bg-[#DCE5D8]/60 px-2 py-0.5 rounded">
                ₹{formatIndianNumber(pricePerCFT)} / CFT
              </span>
            </div>
            <input
              id="price-input"
              type="range"
              min={1000}
              max={3500}
              step={100}
              value={pricePerCFT}
              onChange={(e) => setPricePerCFT(Number(e.target.value))}
              className="w-full accent-[#B78B53] cursor-pointer"
            />
            <div className="flex items-center justify-between text-[11px] text-[#575D52]">
              <span>Base: ₹1,200</span>
              <span>Proposal Assumption: ₹2,000</span>
              <span>Premium Teak: ₹3,000</span>
            </div>
          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#DCE5D8]">
            <div className="bg-white p-4 border border-[#DCE5D8]/70 rounded-sm">
              <span className="text-[11px] uppercase tracking-wider text-[#575D52] block mb-1">
                Total Projected Volume
              </span>
              <span className="font-mono tabular-nums text-lg font-semibold text-[#102B23]">
                {formatIndianNumber(totalCFT)} <span className="text-xs font-normal">CFT</span>
              </span>
            </div>
            <div className="bg-white p-4 border border-[#DCE5D8]/70 rounded-sm">
              <span className="text-[11px] uppercase tracking-wider text-[#575D52] block mb-1">
                Value per Tree at Harvest
              </span>
              <span className="font-mono tabular-nums text-lg font-semibold text-[#102B23]">
                ₹{formatIndianNumber(cftPerTree * pricePerCFT)}
              </span>
            </div>
          </div>
        </div>

        {/* Results Panel */}
        <div className="lg:col-span-5 bg-[#102B23] text-[#F5F1E7] p-6 sm:p-7 rounded-sm flex flex-col justify-between border border-[#173F32]">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B78B53] font-semibold mb-2">
              <TrendingUp className="w-4 h-4 text-[#B78B53]" />
              <span>Projected Gross Harvest Output</span>
            </div>
            <div className="my-4">
              <div className="font-serif text-4xl sm:text-5xl font-normal text-[#F5F1E7] tracking-tight">
                ₹{formatCrores(grossCrores)}{' '}
                <span className="text-xl sm:text-2xl font-sans font-light text-[#B78B53]">Crore</span>
              </div>
              <p className="text-xs text-[#F5F1E7]/70 font-mono tabular-nums mt-1.5">
                = {formatIndianNumber(trees)} trees × {cftPerTree} CFT × ₹{formatIndianNumber(pricePerCFT)}/CFT
              </p>
            </div>

            <div className="space-y-3.5 pt-6 border-t border-[#173F32]">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#F5F1E7]/70">Initial Estimated Project Cost:</span>
                <span className="font-mono tabular-nums font-medium text-[#F5F1E7]">
                  ₹12.60 Crore ({RAMANATHAPURAM_PROJECT.initialEstimatedCostFormatted})
                </span>
              </div>

              <div className="flex items-start justify-between text-xs pt-2 border-t border-[#173F32]/60">
                <div>
                  <span className="text-[#B78B53] font-medium block">
                    Illustrative difference before additional costs:
                  </span>
                  <span className="text-[10px] text-[#F5F1E7]/50 block mt-0.5">
                    (Gross projected harvest minus Phase 1 initial cost)
                  </span>
                </div>
                <span className="font-mono tabular-nums font-semibold text-[#D4A972] text-sm text-right shrink-0">
                  ₹{formatCrores(diffBeforeCostsCrores)} Crore
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#173F32] text-[11px] text-[#F5F1E7]/60 leading-relaxed">
            <span className="font-semibold text-[#F5F1E7] block mb-0.5">Notice:</span>
            Gross harvest value represents biological asset harvest projections, not net profit or guaranteed investment returns.
          </div>
        </div>
      </div>

      {/* Mandatory Persistent Calculator Disclaimer */}
      <div className="bg-[#173F32]/10 border border-[#173F32]/20 rounded-sm p-4 mt-6">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-4 h-4 text-[#B78B53] shrink-0 mt-0.5" />
          <p className="text-xs text-[#575D52] leading-relaxed">
            <strong className="text-[#102B23]">Essential Silvicultural & Financial Disclaimer: </strong>
            This calculator provides illustrative mathematical projections based on user-defined inputs and proposal baseline figures. It explicitly does not account for tree mortality, grade/quality variations in merchantable timber, actual harvest extraction and transportation expenses, timber sales commissions, statutory cutting or transit permits, applicable state or GST taxes, inflation, or ongoing maintenance expenses for Years 2 through 8 (which are billed quarterly on actual manpower wages). Gross harvest value must never be construed as net profit or a guaranteed investment return.
          </p>
        </div>
      </div>
    </div>
  );
};
