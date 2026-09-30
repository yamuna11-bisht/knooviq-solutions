import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  Database, 
  Zap, 
  Workflow, 
  Users, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { DIGITAL_INTELLIGENCE_DATA } from '../data/knooviqData';

interface ServicesSectionProps {
  onSelectServiceForConsult: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForConsult }) => {
  const [activeTab, setActiveTab] = useState(DIGITAL_INTELLIGENCE_DATA[0].id);

  const getCategoryIcon = (id: string) => {
    const props = { className: "h-5 w-5" };
    switch (id) {
      case 'artificial-intelligence': return <Cpu {...props} />;
      case 'data-intelligence': return <Database {...props} />;
      case 'intelligent-automation': return <Zap {...props} />;
      case 'process-intelligence': return <Workflow {...props} />;
      case 'digital-experience': return <Users {...props} />;
      case 'decision-intelligence': return <TrendingUp {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  const activeCategory = DIGITAL_INTELLIGENCE_DATA.find((c) => c.id === activeTab) || DIGITAL_INTELLIGENCE_DATA[0];

  return (
    <section 
      id="services" 
      className="relative py-24 bg-white dark:bg-[#050B17] border-t border-b border-slate-200 dark:border-sky-500/15 overflow-hidden transition-colors duration-300"
    >
      {/* Background glow elements */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header - EXACT structure as IndustriesSection */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-bold tracking-widest uppercase text-[#00A3E0] font-mono">
              Digital Intelligence Capabilities
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1931] dark:text-white tracking-tight">
              Enterprise Digital Intelligence Architecture
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              Unlocking autonomous AI agents, governed data fabrics, robotic hyper-automation, live process mining, digital experience portals, and predictive decision frameworks.
            </p>
          </motion.div>
        </div>

        {/* Digital Intelligence Category Tabs - EXACT structure as IndustriesSection */}
        <div className="flex items-center justify-start sm:justify-center gap-2.5 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {DIGITAL_INTELLIGENCE_DATA.map((cat) => {
            const isActive = cat.id === activeTab;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`industry-category-tab flex items-center justify-center px-4 py-2.5 rounded-xl whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? 'glow-btn text-white'
                    : 'bg-white dark:bg-[#0B1528] text-slate-700 dark:text-slate-300 hover:text-[#00A3E0] dark:hover:text-white border border-slate-200 dark:border-sky-500/20 shadow-sm'
                }`}
              >
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Showcase Card - EXACT structure as IndustriesSection */}
        <motion.div
          key={activeCategory.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass-panel rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-400/10 via-indigo-500/5 to-transparent rounded-bl-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left: Info & Subsection Items */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#00A3E0]/15 dark:bg-cyan-400/20 border border-[#00A3E0]/30 dark:border-cyan-400/30 px-3.5 py-1 text-xs font-bold text-[#0077B6] dark:text-cyan-300 mb-4 font-mono">
                {activeCategory.tagline}
              </div>

              <h3 className="font-display text-3xl font-black text-slate-900 dark:text-white mb-4">
                {activeCategory.name}
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-8 font-sans">
                {activeCategory.description}
              </p>

              {/* Subsection Shortlist Items Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {activeCategory.items.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-start gap-2.5 rounded-2xl bg-white/70 dark:bg-[#030712]/60 p-3.5 border border-slate-200 dark:border-white/10 shadow-sm font-display hover:border-sky-300 dark:hover:border-cyan-500/30 transition-colors"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#00A3E0] dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onSelectServiceForConsult(`Digital Intelligence: ${activeCategory.name}`)}
                  className="btn-primary-gradient shimmer-sweep inline-flex items-center gap-2 rounded-2xl px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white font-display"
                >
                  <span>Consult on {activeCategory.name}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <Link
                  to={`/digital-intelligence?category=${activeCategory.id}`}
                  className="inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 transition-colors font-display"
                >
                  <span>Explore Practice</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Right: Real-world transformation snippet & Strategic Advantage */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-200 dark:border-sky-500/25 bg-slate-50 dark:bg-[#050B17]/80 p-6 shadow-sm dark:shadow-xl relative overflow-hidden space-y-5">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#00A3E0] uppercase tracking-wider mb-4 font-mono">
                    <TrendingUp className="h-4 w-4" />
                    <span>Enterprise Impact Snapshot</span>
                  </div>
                  
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic mb-6">
                    "{activeCategory.caseSnippet}"
                  </p>

                  <div className="pt-4 border-t border-slate-200 dark:border-sky-500/15 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-semibold">
                    <span>Autonomous SLA Benchmark</span>
                    <span className="text-emerald-500 dark:text-emerald-400 font-bold">100% Production Ready</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 dark:border-white/10 space-y-2.5">
                  <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block font-mono">
                    KnoovIQ Strategic Advantage:
                  </span>
                  <ul className="space-y-1.5">
                    {activeCategory.knooviqAdvantage.map((adv, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <Sparkles className="h-3.5 w-3.5 text-[#00A3E0] shrink-0 mt-0.5" />
                        <span>{adv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
