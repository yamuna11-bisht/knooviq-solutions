import React from 'react';
import { CareersSection } from '../components/CareersSection';
import { Sparkles } from 'lucide-react';

export const CareersPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 bg-slate-50 dark:bg-[#050B17] text-slate-900 dark:text-white transition-colors duration-300">
      {/* Header */}
      <section className="py-16 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#00A3E0]/30 bg-white dark:bg-[#0B1528] px-3.5 py-1.5 shadow-sm mb-6">
          <Sparkles className="h-3.5 w-3.5 text-[#00A3E0]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#00A3E0] dark:text-cyan-300">
            Talent & Careers Portal
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0A1931] dark:text-white leading-tight mb-6">
          Build the Future of Enterprise ERP at{' '}
          <span className="text-gradient-cyan">KNOOVIQ</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Join our elite team of certified SAP consultants, ABAP on HANA developers, and enterprise architects shaping digital transformations across global industries.
        </p>
      </section>

      {/* Embedded Application Directory */}
      <CareersSection />
    </div>
  );
};

