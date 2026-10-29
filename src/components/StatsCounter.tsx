import React, { useEffect, useState, useRef } from 'react';

interface StatItem {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  sublabel: string;
}

export const StatsCounter: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const stats: StatItem[] = [
    {
      value: 350,
      suffix: ' Acres',
      label: 'Proposed Plantation Area',
      sublabel: 'Master-planned land parcel in Ramanathapuram',
    },
    {
      value: 122500,
      suffix: '',
      label: 'Planned Saplings',
      sublabel: 'Certified micro-clonal tissue-culture stock',
    },
    {
      value: 350,
      suffix: ' / Acre',
      label: 'Planned Planting Density',
      sublabel: 'Engineered grid for straight bole development',
    },
    {
      value: 8,
      suffix: '+ Years',
      label: 'Project Duration',
      sublabel: 'Full silvicultural lifecycle to Year 8 harvest',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div ref={containerRef} className="py-12 bg-[#102B23] border-y border-[#173F32] text-[#F5F1E7]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#173F32] pb-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#B78B53] font-semibold block mb-1">
              Project Blueprint
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-[#F5F1E7]">
              Ramanathapuram Project Key Parameters
            </h3>
          </div>
          <span className="text-xs text-[#F5F1E7]/60 italic">
            *Figures reflect the proposed project development plan
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="border-l-0 lg:border-l first:border-l-0 border-[#173F32] lg:pl-8 py-2"
            >
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#F5F1E7] tracking-tight tabular-nums mb-2">
                <CounterNumber
                  target={stat.value}
                  hasAnimated={hasAnimated}
                  formatAsIndian={stat.value === 122500}
                />
                <span className="text-xl sm:text-2xl text-[#B78B53] font-sans font-normal ml-1">
                  {stat.suffix}
                </span>
              </div>
              <h4 className="text-sm font-semibold text-[#F5F1E7] tracking-wide mb-1">
                {stat.label}
              </h4>
              <p className="text-xs text-[#F5F1E7]/60 leading-relaxed">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CounterNumber: React.FC<{
  target: number;
  hasAnimated: boolean;
  formatAsIndian?: boolean;
}> = ({ target, hasAnimated, formatAsIndian }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!hasAnimated) return;

    let start = 0;
    const duration = 1600;
    const steps = 40;
    const increment = target / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [hasAnimated, target]);

  if (formatAsIndian) {
    return <span>{new Intl.NumberFormat('en-IN').format(count)}</span>;
  }

  return <span>{count}</span>;
};
