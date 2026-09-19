import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingBag, 
  Flame, 
  Cpu, 
  Store, 
  Activity, 
  Truck, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  Briefcase,
  Layers,
  Sparkles
} from 'lucide-react';
import { INDUSTRIES_DATA } from '../data/knooviqData';

export const IndustriesSection: React.FC<{ onOpenContact: (srv?: string) => void }> = ({ onOpenContact }) => {
  const [activeTab, setActiveTab] = useState(INDUSTRIES_DATA[0].id);

  const getIndustryIcon = (id: string) => {
    const props = { className: "h-5 w-5" };
    switch (id) {
      case 'consumer-commerce': return <Store {...props} />;
      case 'industrial-manufacturing': return <Cpu {...props} />;
      case 'health-life-sciences': return <Activity {...props} />;
      case 'energy-resources': return <Flame {...props} />;
      case 'built-environment': return <Layers {...props} />;
      case 'technology-logistics-mobility': return <Truck {...props} />;
      case 'financial-business-services': return <Briefcase {...props} />;
      case 'experience-media-education': return <Sparkles {...props} />;
      default: return <Store {...props} />;
    }
  };

  const activeIndustry = INDUSTRIES_DATA.find((ind) => ind.id === activeTab) || INDUSTRIES_DATA[0];

  return (
    <section id="industries" className="relative py-24 bg-slate-50 dark:bg-[#050B17] border-t border-b border-slate-200 dark:border-sky-500/15 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-bold tracking-widest uppercase text-[#00A3E0] font-mono">
              Vertical Domain Expertise
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1931] dark:text-white tracking-tight">
              Tailored SAP Solutions for Critical Industries
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              We understand the nuances of high-velocity supply chains, asset-intensive plants, discrete manufacturing, and strict regulatory compliance.
            </p>
          </motion.div>
        </div>

        {/* Industry Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2.5 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {INDUSTRIES_DATA.map((ind) => {
            const isActive = ind.id === activeTab;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveTab(ind.id)}
                className={`industry-category-tab flex items-center justify-center px-4 py-2.5 rounded-xl whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? 'glow-btn text-white'
                    : 'bg-white dark:bg-[#0B1528] text-slate-700 dark:text-slate-300 hover:text-[#00A3E0] dark:hover:text-white border border-slate-200 dark:border-sky-500/20 shadow-sm'
                }`}
              >
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Industry Showcase Card */}
        <motion.div
          key={activeIndustry.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass-panel rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-400/10 via-indigo-500/5 to-transparent rounded-bl-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left: Info */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#00A3E0]/15 dark:bg-cyan-400/20 border border-[#00A3E0]/30 dark:border-cyan-400/30 px-3.5 py-1 text-xs font-bold text-[#0077B6] dark:text-cyan-300 mb-4 font-mono">
                {activeIndustry.tagline}
              </div>

              <h3 className="font-display text-3xl font-black text-slate-900 dark:text-white mb-4">
                {activeIndustry.name}
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-8 font-sans">
                {activeIndustry.description}
              </p>

              {/* Solution List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {activeIndustry.solutions.map((sol, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 rounded-2xl bg-white/70 dark:bg-[#030712]/60 p-3.5 border border-slate-200 dark:border-white/10 shadow-sm font-display">
                    <CheckCircle2 className="h-4 w-4 text-[#00A3E0] dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">{sol}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onOpenContact(`Industry Solution: ${activeIndustry.name}`)}
                className="btn-primary-gradient shimmer-sweep inline-flex items-center gap-2 rounded-2xl px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white font-display"
              >
                <span>Consult on {activeIndustry.name}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Right: Real-world transformation snippet */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-200 dark:border-sky-500/25 bg-slate-50 dark:bg-[#050B17]/80 p-6 shadow-sm dark:shadow-xl relative overflow-hidden">
                <div className="flex items-center gap-2 text-xs font-bold text-[#00A3E0] uppercase tracking-wider mb-4 font-mono">
                  <TrendingUp className="h-4 w-4" />
                  <span>Enterprise Impact Snapshot</span>
                </div>
                
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic mb-6">
                  "{activeIndustry.caseSnippet}"
                </p>

                <div className="pt-4 border-t border-slate-200 dark:border-sky-500/15 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-semibold">
                  <span>Standard SAP Best Practice</span>
                  <span className="text-emerald-500 dark:text-emerald-400 font-bold">100% Compliance</span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

