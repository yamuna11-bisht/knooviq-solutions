import React from 'react';
import { motion } from 'framer-motion';
import { CASE_STUDIES } from '../data/knooviqData';

export const CaseStudiesSection: React.FC<{ onOpenContact: () => void }> = () => {
  return (
    <section id="case-studies" className="relative py-24 bg-slate-50 dark:bg-[#050B17] border-t border-b border-slate-200 dark:border-sky-500/15 overflow-hidden transition-colors duration-300">
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
              Proven Enterprise Track Record
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1931] dark:text-white tracking-tight">
              Real-World Transformation Impact
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              How KNOOVIQ partners with market leaders across FMCG, Energy, and Manufacturing sectors to eliminate bottlenecks and unlock intelligent operations.
            </p>
          </motion.div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study, idx) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-panel glass-panel-hover flex flex-col justify-between rounded-3xl p-8 shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-400/10 to-transparent rounded-bl-full pointer-events-none" />

              <div>
                <span className="inline-block rounded-full bg-[#00A3E0]/15 dark:bg-cyan-400/20 border border-[#00A3E0]/30 dark:border-cyan-400/30 px-3.5 py-1 text-[11px] font-bold text-[#0077B6] dark:text-cyan-300 mb-4 font-mono">
                  {study.clientIndustry}
                </span>

                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-4 leading-snug">
                  {study.title}
                </h3>

                <div className="space-y-4 mb-8 text-xs">
                  <div className="rounded-2xl bg-white/70 dark:bg-[#030712]/60 p-4 border border-rose-500/20 font-sans">
                    <span className="font-bold text-rose-500 dark:text-rose-400 block mb-1 font-display">Business Challenge:</span>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{study.challenge}</p>
                  </div>

                  <div className="rounded-2xl bg-white/70 dark:bg-[#030712]/60 p-4 border border-sky-500/20 font-sans">
                    <span className="font-bold text-[#00A3E0] dark:text-cyan-300 block mb-1 font-display">KNOOVIQ Engineered Solution:</span>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{study.solution}</p>
                  </div>
                </div>

                {/* Measurable Results */}
                <div className="grid grid-cols-3 gap-2 mb-6 pt-4 border-t border-slate-200 dark:border-white/10">
                  {study.outcomes.map((out, oIdx) => (
                    <div key={oIdx} className="text-center p-2.5 rounded-2xl bg-white/60 dark:bg-[#030712]/70 border border-slate-200 dark:border-sky-500/20 shadow-sm">
                      <div className="font-display text-lg font-extrabold text-[#00A3E0] dark:text-cyan-300">
                        {out.metric}
                      </div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold leading-tight mt-0.5 font-display">
                        {out.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div className="pt-4 border-t border-slate-200 dark:border-white/10">
                <div className="flex flex-wrap gap-1.5">
                  {study.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="rounded-lg bg-slate-100 dark:bg-sky-500/15 px-2.5 py-1 text-[10px] font-semibold text-[#00A3E0] dark:text-cyan-300 border border-slate-200 dark:border-sky-400/20 font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

