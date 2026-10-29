import React from 'react';
import { ShieldCheck, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#102B23] text-[#F5F1E7] border-t border-[#173F32] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-serif text-3xl font-normal tracking-tight text-[#F5F1E7] block">
              Nature’s Canopy
            </span>
            <p className="text-sm font-sans text-[#F5F1E7]/70 leading-relaxed max-w-sm">
              Growing Today. Building Tomorrow. Professional teak plantation development,
              infrastructure engineering, and long-term silvicultural management rooted in
              transparency and scientific rigor.
            </p>
            <div className="pt-2">
              <span className="text-xs uppercase tracking-widest text-[#B78B53] font-medium block mb-1">
                Primary Project
              </span>
              <button
                onClick={() => handleNav('ramanathapuram')}
                className="text-sm text-[#F5F1E7] hover:text-[#B78B53] transition-colors inline-flex items-center gap-1 group cursor-pointer"
              >
                <span>350-Acre Ramanathapuram Plantation</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#B78B53] font-semibold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-sans text-[#F5F1E7]/70">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-[#F5F1E7] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-[#F5F1E7] transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#F5F1E7] transition-colors cursor-pointer"
                >
                  Plantation Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('projects')}
                  className="hover:text-[#F5F1E7] transition-colors cursor-pointer"
                >
                  Projects Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('investment')}
                  className="hover:text-[#F5F1E7] transition-colors cursor-pointer"
                >
                  Growth & Economics
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-[#F5F1E7] transition-colors cursor-pointer"
                >
                  Contact & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#B78B53] font-semibold mb-4">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-sm font-sans text-[#F5F1E7]/70">
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#F5F1E7] transition-colors text-left cursor-pointer"
                >
                  Land Development & Layout
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#F5F1E7] transition-colors text-left cursor-pointer"
                >
                  Tissue-Culture Teak Saplings
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#F5F1E7] transition-colors text-left cursor-pointer"
                >
                  Drip Irrigation Systems
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#F5F1E7] transition-colors text-left cursor-pointer"
                >
                  Site Security & Fencing
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#F5F1E7] transition-colors text-left cursor-pointer"
                >
                  Silvicultural Care & Pruning
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#F5F1E7] transition-colors text-left cursor-pointer"
                >
                  Full-Cycle Operations
                </button>
              </li>
            </ul>
          </div>

          {/* Inquiries & Integrity */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#B78B53] font-semibold mb-4">
              Direct Inquiries
            </h4>
            <p className="text-xs text-[#F5F1E7]/70 leading-relaxed mb-4">
              All discussions regarding corporate development or the Ramanathapuram project proposal are handled directly via our verified project desk.
            </p>
            <button
              onClick={() => handleNav('contact')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-[#102B23] bg-[#B78B53] hover:bg-[#D4A972] transition-colors rounded-sm cursor-pointer"
            >
              <span>Submit Project Query</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Legal & Regulatory Disclaimer Box */}
        <div className="border-t border-[#173F32] pt-8 mb-8">
          <div className="bg-[#173F32]/50 border border-[#173F32] p-5 rounded-sm">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#B78B53] shrink-0 mt-0.5" />
              <div className="space-y-1.5 text-xs text-[#F5F1E7]/70 leading-relaxed">
                <span className="font-semibold text-[#F5F1E7] block">
                  Project Figures & Financial Transparency Notice
                </span>
                <p>
                  Project statistics, cost estimates (including the initial estimate of ₹12,59,59,700), and projected gross harvest values (such as ₹612.5 crore based on 1,22,500 trees × 25 CFT × ₹2,000/CFT) are drawn directly from the Ramanathapuram project proposal for illustrative and planning purposes. They do not constitute guaranteed investment returns, fixed biological appreciation, or contractual promises of yield.
                </p>
                <p>
                  Actual usable timber volume, survival rates, market timber prices at harvest, harvesting/transportation costs, regulatory cutting and transit permits, and statutory taxes will impact net financial outcomes. In accordance with proposal terms, maintenance costs for Years 2 through 8 are not covered by the initial establishment cost and are billed quarterly based on actual manpower and wages. Prospective partners and clients should verify all contractual conditions and obtain independent professional advice.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#173F32] pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F5F1E7]/50 gap-4">
          <p>© {currentYear} Nature’s Canopy. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Ramanathapuram Teak Development Proposal</span>
            <span>·</span>
            <span>English (US / IN)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
