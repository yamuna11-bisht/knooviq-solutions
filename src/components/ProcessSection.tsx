import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Compass, Search, Target, Cpu, Activity, LifeBuoy } from 'lucide-react';
import { PROCESS_STEPS } from '../data/knooviqData';

export const ProcessSection: React.FC<{ onOpenContact: (topic?: string) => void }> = ({ onOpenContact }) => {
  const [activeStep, setActiveStep] = useState(0);

  const getStepIcon = (phase: string) => {
    switch (phase.toLowerCase()) {
      case 'discover': return <Compass className="h-5 w-5 text-[#00A3E0]" />;
      case 'analyze': return <Search className="h-5 w-5 text-sky-500" />;
      case 'strategize': return <Target className="h-5 w-5 text-indigo-500" />;
      case 'implement': return <Cpu className="h-5 w-5 text-purple-500" />;
      case 'optimize': return <Activity className="h-5 w-5 text-emerald-500" />;
      case 'support': return <LifeBuoy className="h-5 w-5 text-amber-500" />;
      default: return <Compass className="h-5 w-5 text-[#00A3E0]" />;
    }
  };

  return (
    <section id="process" className="relative py-24 bg-slate-50 dark:bg-[#040813] text-slate-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-bold tracking-widest uppercase text-[#00A3E0]">
              Delivery Methodology
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1931] dark:text-white tracking-tight">
              Our Enterprise Transformation Lifecycle
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              A battle-tested 6-stage execution framework combining agile sprint velocity with disciplined enterprise governance.
            </p>
          </motion.div>
        </div>

        {/* Desktop Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              onMouseEnter={() => setActiveStep(idx)}
              className={`rounded-3xl border p-6 sm:p-8 backdrop-blur-xl transition-all relative flex flex-col justify-between overflow-hidden group ${
                activeStep === idx
                  ? 'border-[#00A3E0] dark:border-cyan-400 bg-white dark:bg-[#070E1E] shadow-xl shadow-sky-500/10 dark:shadow-[0_0_35px_rgba(0,240,255,0.18)] -translate-y-1'
                  : 'border-slate-200 dark:border-white/10 bg-white/70 dark:bg-[#070E1E]/50 hover:bg-white dark:hover:bg-[#070E1E]/80'
              }`}
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-cyan-400/10 to-transparent rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform" />
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 dark:bg-[#050B17] border border-slate-200 dark:border-sky-500/20">
                      {getStepIcon(step.phase)}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#00A3E0]">
                        Phase {step.step}
                      </span>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white leading-tight">
                        {step.phase}
                      </h4>
                    </div>
                  </div>
                  <span className="font-mono text-2xl font-black text-slate-300 dark:text-slate-700">
                    {step.step}
                  </span>
                </div>

                <h5 className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-2">
                  {step.title}
                </h5>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-sky-500/10 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
                  Key Deliverables
                </span>
                {step.deliverables.map((deliv, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2 text-[11px] text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#00A3E0] flex-shrink-0" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="rounded-2xl border border-slate-200 dark:border-sky-500/20 bg-white dark:bg-[#0B1528]/60 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">Ready to begin your Phase 01 Landscape Discovery?</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">Our SAP certified architects provide preliminary assessments with zero commitment.</p>
          </div>
          <button
            onClick={() => onOpenContact('Methodology Assessment')}
            className="glow-btn inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white flex-shrink-0"
          >
            <span>Schedule Discovery Call</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};

