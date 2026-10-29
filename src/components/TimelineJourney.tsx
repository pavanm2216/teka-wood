import React, { useState } from 'react';
import { PLANTATION_JOURNEY_STAGES } from '../data/proposalData';
import { CheckCircle2, Calendar, Sparkles } from 'lucide-react';

export const TimelineJourney: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const stages = PLANTATION_JOURNEY_STAGES;
  const currentStage = stages[selectedIdx];

  return (
    <div className="py-8">
      {/* Desktop Stage Selector Bar */}
      <div className="hidden md:grid md:grid-cols-5 gap-2 border-b border-[#DCE5D8] pb-4 mb-8">
        {stages.map((stage, idx) => {
          const isSelected = selectedIdx === idx;
          return (
            <button
              key={idx}
              onClick={() => setSelectedIdx(idx)}
              className={`text-left p-3.5 rounded-sm transition-all cursor-pointer ${
                isSelected
                  ? 'bg-[#102B23] text-[#F5F1E7] shadow-sm'
                  : 'bg-white hover:bg-[#FAF8F2] text-[#292D27] border border-[#DCE5D8]'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span
                  className={`text-xs uppercase tracking-wider font-semibold ${
                    isSelected ? 'text-[#B78B53]' : 'text-[#575D52]'
                  }`}
                >
                  {stage.period}
                </span>
                {isSelected && <Sparkles className="w-3.5 h-3.5 text-[#B78B53]" />}
              </div>
              <h4 className="text-sm font-semibold truncate">{stage.title}</h4>
            </button>
          );
        })}
      </div>

      {/* Mobile Stage Selector Dropdown / Pills */}
      <div className="md:hidden flex overflow-x-auto gap-2 pb-4 mb-6 scrollbar-none">
        {stages.map((stage, idx) => {
          const isSelected = selectedIdx === idx;
          return (
            <button
              key={idx}
              onClick={() => setSelectedIdx(idx)}
              className={`whitespace-nowrap px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors cursor-pointer shrink-0 ${
                isSelected
                  ? 'bg-[#102B23] text-[#F5F1E7]'
                  : 'bg-white text-[#292D27] border border-[#DCE5D8]'
              }`}
            >
              {stage.period}
            </button>
          );
        })}
      </div>

      {/* Stage Detail Card */}
      <div className="bg-white border border-[#DCE5D8] rounded-sm p-6 sm:p-8 lg:p-10 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#DCE5D8]">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B78B53] font-semibold mb-1">
              <Calendar className="w-4 h-4 text-[#B78B53]" />
              <span>{currentStage.period}</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#102B23] font-medium">
              {currentStage.title}
            </h3>
          </div>
          <div className="bg-[#FAF8F2] border border-[#DCE5D8] px-4 py-2 rounded-sm self-start sm:self-auto">
            <span className="text-[11px] uppercase tracking-wider text-[#575D52] block">
              Silvicultural Focus
            </span>
            <span className="text-sm font-medium text-[#102B23]">{currentStage.focus}</span>
          </div>
        </div>

        {/* Activities List */}
        <div className="mt-8">
          <h4 className="text-xs uppercase tracking-widest text-[#575D52] font-semibold mb-4">
            Structured Operational Milestones
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentStage.activities.map((activity, actIdx) => (
              <div
                key={actIdx}
                className="flex items-start gap-3 p-3.5 bg-[#FAF8F2] border border-[#DCE5D8]/80 rounded-sm"
              >
                <CheckCircle2 className="w-4 h-4 text-[#173F32] shrink-0 mt-0.5" />
                <span className="text-sm text-[#292D27] leading-relaxed">{activity}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#DCE5D8] text-xs text-[#575D52] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <span>
            *All stage timelines and biological development benchmarks are planned schedules subject to site conditions, soil biology, and seasonal monsoons.
          </span>
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-[11px] font-mono text-[#173F32]">
              Stage {selectedIdx + 1} of {stages.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
