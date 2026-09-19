import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  Activity, 
  Store, 
  Truck, 
  Briefcase, 
  Layers, 
  Flame, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  AlertTriangle,
  Award
} from 'lucide-react';
import { INDUSTRIES_DATA } from '../data/knooviqData';

export const IndustriesPage: React.FC<{ onOpenContact: (topic?: string) => void }> = ({ onOpenContact }) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>(INDUSTRIES_DATA[0].id);

  const getIndustryIcon = (id: string) => {
    switch (id) {
      case 'consumer-commerce': return <Store className="h-6 w-6 text-emerald-500" />;
      case 'industrial-manufacturing': return <Cpu className="h-6 w-6 text-sky-500" />;
      case 'health-life-sciences': return <Activity className="h-6 w-6 text-rose-500" />;
      case 'energy-resources': return <Flame className="h-6 w-6 text-orange-500" />;
      case 'built-environment': return <Layers className="h-6 w-6 text-amber-500" />;
      case 'technology-logistics-mobility': return <Truck className="h-6 w-6 text-[#00A3E0]" />;
      case 'financial-business-services': return <Briefcase className="h-6 w-6 text-indigo-500" />;
      case 'experience-media-education': return <Sparkles className="h-6 w-6 text-purple-500" />;
      default: return <Store className="h-6 w-6 text-sky-500" />;
    }
  };

  const current = INDUSTRIES_DATA.find(i => i.id === selectedIndustry) || INDUSTRIES_DATA[0];

  return (
    <div className="pt-28 pb-20 bg-slate-50 dark:bg-[#050B17] text-slate-900 dark:text-white transition-colors duration-300">
      {/* Header */}
      <section className="py-16 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#00A3E0]/30 bg-white dark:bg-[#0B1528] px-3.5 py-1.5 shadow-sm mb-6">
          <Sparkles className="h-3.5 w-3.5 text-[#00A3E0]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#00A3E0] dark:text-cyan-300">
            Tailored Domain Solutions
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0A1931] dark:text-white leading-tight mb-6">
          Industry-Specific SAP{' '}
          <span className="text-gradient-cyan">Transformation Blueprints</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Tailoring SAP standard best practices to solve domain bottlenecks across discrete manufacturing, pharma compliance, CPG distribution, and energy asset integrity.
        </p>
      </section>

      {/* Vertical Selector Chips */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap justify-center gap-2.5">
          {INDUSTRIES_DATA.map((ind) => (
            <button
              key={ind.id}
              onClick={() => setSelectedIndustry(ind.id)}
              className={`industry-category-tab flex items-center justify-center px-4 py-2.5 rounded-2xl transition-all shadow-sm ${
                selectedIndustry === ind.id
                  ? 'bg-[#00A3E0]/15 dark:bg-sky-500/20 text-[#00A3E0] dark:text-cyan-300 border border-[#00A3E0] dark:border-sky-400/50 shadow-md'
                  : 'border border-slate-200 dark:border-sky-500/15 bg-white dark:bg-[#0B1528]/60 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[#0B1528]'
              }`}
            >
              <span>{ind.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Selected Vertical Detail Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="rounded-3xl border border-slate-200 dark:border-sky-500/25 bg-white dark:bg-[#0B1528]/95 p-8 sm:p-12 shadow-xl dark:shadow-2xl backdrop-blur-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Overview (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="industry-category-title text-[#00A3E0] block mb-1">
                  Industry Focus
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  {current.name}
                </h2>
              </div>

              <p className="text-base text-[#00A3E0] dark:text-cyan-300 font-semibold">
                {current.tagline}
              </p>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {current.description}
              </p>

              <div className="pt-2">
                <h4 className="industry-category-title text-slate-500 dark:text-slate-400 mb-3">
                  Tailored SAP Functional Solutions
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {current.solutions.map((sol, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2 rounded-xl bg-slate-50 dark:bg-[#050B17]/60 p-3 border border-slate-200 dark:border-sky-500/15 text-xs text-slate-700 dark:text-slate-200">
                      <CheckCircle2 className="h-4 w-4 text-[#00A3E0] flex-shrink-0 mt-0.5" />
                      <span>{sol}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Case Snippet */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#050B17]/80 border border-slate-200 dark:border-sky-500/20 text-xs text-slate-600 dark:text-slate-300 flex items-start gap-3">
                <Award className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white block font-bold mb-0.5">Verified Delivery Outcome:</strong>
                  <span>{current.caseSnippet}</span>
                </div>
              </div>

              {/* Dedicated Sub-practice Deep Dive Link */}
              {current.id === 'consumer-commerce' && (
                <div className="p-4 rounded-2xl bg-[#0070C0]/10 border border-[#0070C0]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <span className="industry-category-title text-[#0070C0] dark:text-cyan-300 block mb-0.5">
                      Dedicated Industry Practice
                    </span>
                    <span className="industry-category-item text-slate-900 dark:text-white block font-bold">
                      Retail & E-Commerce Comprehensive Blueprint
                    </span>
                  </div>
                  <Link
                    to="/industries/retail-ecommerce"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0070C0] hover:bg-[#005a9e] text-white text-xs font-bold transition-all shadow-md flex-shrink-0"
                  >
                    <span>View Practice Page</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              )}
            </div>

            {/* Right Side Challenges & Advantage (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl bg-slate-50 dark:bg-[#050B17]/90 p-6 border border-slate-200 dark:border-sky-500/20 space-y-3">
                <h4 className="industry-category-title text-rose-500 dark:text-rose-400 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4" />
                  <span>Key Domain Challenges Solved</span>
                </h4>
                <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                  {current.keyChallenges.map((ch, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-2">
                      <span className="text-rose-500 dark:text-rose-400">•</span>
                      <span>{ch}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-slate-50 dark:bg-[#050B17]/90 p-6 border border-slate-200 dark:border-sky-500/20 space-y-3">
                <h4 className="industry-category-title text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>KNOOVIQ Advantage</span>
                </h4>
                <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                  {current.knooviqAdvantage.map((adv, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2">
                      <span className="text-emerald-600 dark:text-emerald-400">•</span>
                      <span>{adv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => onOpenContact(`Industry Practice: ${current.name}`)}
                className="glow-btn w-full rounded-xl py-3 text-xs font-bold uppercase tracking-wider text-white flex items-center justify-center gap-2"
              >
                <span>Consult Industry Architect</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>

          </div>
        </motion.div>
      </section>
    </div>
  );
};

