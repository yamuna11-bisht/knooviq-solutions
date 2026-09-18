import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, ArrowRight, CheckCircle2, Server, RefreshCw, Cpu, Sparkles } from 'lucide-react';
import { S4HANA_OFFERINGS } from '../data/knooviqData';

export const S4HanaShowcase: React.FC<{ onOpenContact: (srv?: string) => void }> = ({ onOpenContact }) => {
  const [activeStoryStage, setActiveStoryStage] = useState(2);

  const storyStages = [
    {
      step: '01',
      title: 'Legacy ECC 6.0 Landscape',
      subtitle: 'Siloed Databases & Custom Code Debt',
      icon: <Server className="h-5 w-5 text-amber-500" />,
      tag: 'Legacy Architecture',
      description: 'Disjointed batch jobs, heavy custom Z-programs, fragmented financial ledgers, and slow month-end reconciliation slowing down enterprise responsiveness.',
      points: ['Lengthy batch job processing', 'Redundant data copies across modules', 'High upgrade friction & testing overhead']
    },
    {
      step: '02',
      title: 'KNOOVIQ Transformation',
      subtitle: 'Automated Code Remediation & ACTIVATE Sprint Execution',
      icon: <RefreshCw className="h-5 w-5 text-[#00A3E0]" />,
      tag: 'Transition Pathway',
      description: 'Automated code refactoring, fit-to-standard blueprinting, selective data cleansing, and structured zero-data-loss cutover execution.',
      points: ['Automated ABAP code modernization', 'Clean Core side-by-side decoupling on BTP', 'Near-zero weekend production downtime']
    },
    {
      step: '03',
      title: 'SAP S/4HANA Clean Core',
      subtitle: 'In-Memory HANA DB & Universal Journal (ACDOCA)',
      icon: <Cpu className="h-5 w-5 text-sky-500" />,
      tag: 'Modern Core',
      description: 'Single real-time source of truth for all enterprise financials, live material requirements planning (MRP Live), and responsive Fiori apps across devices.',
      points: ['Instantaneous financial closing', 'Sub-second real-time MRP calculations', 'Seamless modular cloud extensibility']
    },
    {
      step: '04',
      title: 'Intelligent Enterprise',
      subtitle: 'Embedded AI, Predictive Analytics & Autonomous SCM',
      icon: <Sparkles className="h-5 w-5 text-purple-500" />,
      tag: 'Next-Gen Value',
      description: 'AI-driven demand forecasting, automated invoice matching, predictive asset maintenance, and autonomous decision intelligence.',
      points: ['Automated 3-way invoice reconciliation', 'Predictive machine health alerts', 'Live executive decision cockpits']
    }
  ];

  return (
    <section id="s4hana" className="relative py-24 bg-slate-100/70 dark:bg-[#050B17] text-slate-900 dark:text-white overflow-hidden transition-colors duration-300">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-sky-500/10 dark:bg-blue-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-bold tracking-widest uppercase text-[#00A3E0]">
              Evolutionary Pathway
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1931] dark:text-white tracking-tight">
              {S4HANA_OFFERINGS.headline}
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              {S4HANA_OFFERINGS.subheadline}
            </p>
          </motion.div>
        </div>

        {/* Interactive S/4HANA Story: 4-Stage Architecture Evolution */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              The Enterprise Evolution Journey
            </span>
          </div>

          {/* Stepper Buttons */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {storyStages.map((stage, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStoryStage(idx)}
                className={`relative rounded-2xl p-4 text-left transition-all border ${
                  activeStoryStage === idx
                    ? 'border-[#00A3E0] bg-white dark:bg-[#0B1528] shadow-lg shadow-sky-500/10 dark:shadow-[0_0_25px_rgba(0,210,255,0.15)]'
                    : 'border-slate-200 dark:border-sky-500/20 bg-white/60 dark:bg-[#0B1528]/50 hover:bg-white dark:hover:bg-[#0B1528]/80 text-slate-600 dark:text-slate-400'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                    activeStoryStage === idx ? 'bg-[#00A3E0]/15 text-[#00A3E0] dark:text-cyan-300 border border-[#00A3E0]/30' : 'bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400'
                  }`}>
                    STAGE {stage.step}
                  </span>
                  <div className="p-1.5 rounded-lg bg-slate-100 dark:bg-[#050B17] border border-slate-200 dark:border-sky-500/20">
                    {stage.icon}
                  </div>
                </div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white truncate">{stage.title}</h4>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 truncate">{stage.tag}</p>
              </button>
            ))}
          </div>

          {/* Active Story Details Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStoryStage}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="glass-panel rounded-3xl p-8 shadow-2xl relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#00A3E0]/15 dark:bg-cyan-400/20 border border-[#00A3E0]/30 dark:border-cyan-400/30 px-3.5 py-1 text-xs font-bold text-[#0077B6] dark:text-cyan-300 font-mono">
                    <span>{storyStages[activeStoryStage].tag}</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0A1931] dark:text-white">
                    {storyStages[activeStoryStage].title}
                  </h3>
                  <p className="text-sm text-[#00A3E0] dark:text-cyan-300 font-semibold font-display">
                    {storyStages[activeStoryStage].subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                    {storyStages[activeStoryStage].description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    {storyStages[activeStoryStage].points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 rounded-2xl bg-white/70 dark:bg-[#030712]/60 p-3.5 border border-slate-200 dark:border-white/10 text-xs text-slate-700 dark:text-slate-300 font-display">
                        <CheckCircle2 className="h-4 w-4 text-[#00A3E0] dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col justify-center gap-4 bg-white/60 dark:bg-[#030712]/70 rounded-2xl p-6 border border-slate-200 dark:border-white/10">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 font-display">
                    Transformation Impact
                  </h4>
                  <div className="space-y-3 text-xs">
                    <div className="flex justify-between py-2 border-b border-slate-200 dark:border-white/10">
                      <span className="text-slate-500 dark:text-slate-400">Data Architecture:</span>
                      <span className="font-bold text-[#0A1931] dark:text-white font-mono">{activeStoryStage >= 2 ? 'In-Memory HANA DB' : 'Relational RDBMS'}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-200 dark:border-white/10">
                      <span className="text-slate-500 dark:text-slate-400">Extension Model:</span>
                      <span className="font-bold text-[#00A3E0] dark:text-cyan-300 font-mono">{activeStoryStage >= 2 ? 'BTP Clean Core' : 'Custom Z-Modifications'}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-200 dark:border-white/10">
                      <span className="text-slate-500 dark:text-slate-400">Intelligence:</span>
                      <span className="font-bold text-emerald-600 dark:text-emerald-400 font-mono">{activeStoryStage === 3 ? 'Autonomous Embedded AI' : 'Static Reporting'}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenContact(`S/4HANA Story: ${storyStages[activeStoryStage].title}`)}
                    className="btn-primary-gradient shimmer-sweep w-full rounded-xl py-3 text-xs font-bold uppercase tracking-wider text-white mt-2 flex items-center justify-center gap-2 font-display"
                  >
                    <span>Discuss Transformation</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 3 Migration Pathways Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {S4HANA_OFFERINGS.pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-panel glass-panel-hover relative flex flex-col justify-between rounded-3xl p-8 overflow-hidden"
            >
              <div>
                <div className="inline-flex rounded-full bg-[#00A3E0]/15 dark:bg-cyan-400/20 border border-[#00A3E0]/30 dark:border-cyan-400/30 px-3.5 py-1 text-xs font-bold text-[#0077B6] dark:text-cyan-300 mb-6 font-mono">
                  {pillar.badge}
                </div>

                <h3 className="font-display text-2xl font-bold text-[#0A1931] dark:text-white mb-4">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-sans">
                  {pillar.description}
                </p>

                <div className="space-y-3 mb-8">
                  {pillar.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300 font-display">
                      <CheckCircle2 className="h-4 w-4 text-[#00A3E0] dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onOpenContact(`SAP S/4HANA - ${pillar.title}`)}
                className="w-full rounded-2xl bg-slate-100 hover:bg-[#00A3E0] dark:bg-[#030712] dark:hover:bg-cyan-500 text-slate-800 hover:text-white dark:text-cyan-300 dark:hover:text-[#030712] py-3.5 text-xs font-bold uppercase tracking-wider border border-slate-200 dark:border-cyan-400/30 transition-all flex items-center justify-center gap-2 shadow-sm font-display hover:scale-[1.02]"
              >
                <span>Assess Readiness</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Clean Core Accelerator Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-cyan-400/15 via-indigo-500/10 to-transparent rounded-bl-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 text-xs font-bold text-[#00A3E0] dark:text-cyan-300 uppercase tracking-wider mb-2 font-mono">
                <Zap className="h-4 w-4" />
                <span>KNOOVIQ Clean Core Accelerator</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-black text-[#0A1931] dark:text-white mb-3">
                Planning your move from legacy ERP to S/4HANA Cloud?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                Get a comprehensive readiness assessment report with custom code analysis, data volume reduction metrics, and an actionable business migration roadmap tailored for your enterprise.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <button
                onClick={() => onOpenContact('SAP S/4HANA Readiness Assessment')}
                className="btn-primary-gradient shimmer-sweep rounded-2xl px-7 py-4 text-xs font-bold uppercase tracking-wider text-white font-display"
              >
                Get Free Assessment
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};


