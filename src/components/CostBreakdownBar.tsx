import React from 'react';
import { INITIAL_COST_BREAKDOWN, RAMANATHAPURAM_PROJECT } from '../data/proposalData';
import { Layers } from 'lucide-react';

export const CostBreakdownBar: React.FC = () => {
  const costs = INITIAL_COST_BREAKDOWN;
  const total = RAMANATHAPURAM_PROJECT.initialEstimatedCostFormatted;

  const colorMap: Record<string, string> = {
    'Saplings and planting': 'bg-[#173F32]',
    'Pre-plantation': 'bg-[#B78B53]',
    'Drip irrigation': 'bg-[#292D27]',
    'Fencing': 'bg-[#575D52]',
    'Other costs': 'bg-[#986E3A]',
  };

  return (
    <div className="bg-white border border-[#DCE5D8] rounded-sm p-6 sm:p-8 lg:p-10 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-6 border-b border-[#DCE5D8]">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#B78B53] font-semibold block mb-1">
            Phase 1 Capital Allocation
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#102B23] font-medium">
            Estimated Initial Project Cost Breakdown
          </h3>
        </div>
        <div className="text-right sm:self-auto">
          <span className="text-xs text-[#575D52] block">Total Estimated Cost</span>
          <span className="font-serif text-2xl sm:text-3xl font-normal text-[#173F32]">
            {total}
          </span>
          <span className="text-xs text-[#575D52] block">(~₹12.60 Crore)</span>
        </div>
      </div>

      {/* Horizontal Stacked Bar */}
      <div className="mt-8">
        <div className="h-5 w-full bg-[#FAF8F2] rounded-full overflow-hidden flex shadow-inner">
          {costs.map((item, idx) => (
            <div
              key={idx}
              style={{ width: `${item.percentageOfTotal}%` }}
              className={`${colorMap[item.category] || 'bg-[#173F32]'} transition-all hover:opacity-90 relative group`}
              title={`${item.category}: ${item.formattedAmount} (${item.percentageOfTotal}%)`}
            />
          ))}
        </div>
      </div>

      {/* Itemized Table */}
      <div className="mt-8 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-[#DCE5D8] text-xs uppercase tracking-wider text-[#575D52]">
              <th className="pb-3 font-semibold">Cost Category</th>
              <th className="pb-3 font-semibold text-right">Estimated Cost (INR)</th>
              <th className="pb-3 font-semibold text-right">Share (%)</th>
              <th className="pb-3 font-semibold hidden md:table-cell pl-6">Scope Elements</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#DCE5D8]">
            {costs.map((item, idx) => (
              <tr key={idx} className="hover:bg-[#FAF8F2] transition-colors">
                <td className="py-3.5 pr-4">
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`w-2.5 h-2.5 rounded-full shrink-0 ${colorMap[item.category] || 'bg-[#173F32]'}`}
                    />
                    <span className="font-medium text-[#102B23]">{item.category}</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-right font-mono tabular-nums font-semibold text-[#102B23]">
                  {item.formattedAmount}
                </td>
                <td className="py-3.5 px-4 text-right font-mono tabular-nums text-[#575D52]">
                  {item.percentageOfTotal}%
                </td>
                <td className="py-3.5 pl-6 text-xs text-[#575D52] leading-relaxed hidden md:table-cell">
                  {item.notes}
                </td>
              </tr>
            ))}
            <tr className="bg-[#FAF8F2] font-semibold">
              <td className="py-4 pr-4 text-[#102B23]">Total Initial Establishment Cost</td>
              <td className="py-4 px-4 text-right font-mono tabular-nums text-base text-[#173F32]">
                {total}
              </td>
              <td className="py-4 px-4 text-right font-mono tabular-nums text-[#173F32]">
                100.0%
              </td>
              <td className="py-4 pl-6 text-xs text-[#575D52] hidden md:table-cell">
                Phase 1 establishment baseline per proposal specification.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-6 pt-4 border-t border-[#DCE5D8] flex items-start gap-2.5 text-xs text-[#575D52]">
        <Layers className="w-4 h-4 text-[#B78B53] shrink-0 mt-0.5" />
        <p>
          <strong>Contractual Verification Note:</strong> Figures are sourced directly from the Ramanathapuram project proposal. Prospective project principals should confirm line items against the final verified engineering quotation. Ongoing maintenance costs for Years 2 through 8 are not included in this initial figure and are billed quarterly on actual manpower and materials.
        </p>
      </div>
    </div>
  );
};
