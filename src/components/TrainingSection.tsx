import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, 
  Clock, 
  Monitor, 
  BookOpen, 
  CheckCircle2, 
  X, 
  Users 
} from 'lucide-react';
import { TRAINING_PROGRAMS } from '../data/knooviqData';
import { TrainingProgram } from '../types';

export const TrainingSection: React.FC<{ onOpenContact: (programTitle?: string) => void }> = ({ onOpenContact }) => {
  const [selectedProgram, setSelectedProgram] = useState<TrainingProgram | null>(null);

  return (
    <section id="training" className="relative py-24 bg-slate-50 dark:bg-[#050B17] overflow-hidden transition-colors duration-300">
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
              Workforce Enablement & Upskilling
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1931] dark:text-white tracking-tight">
              SAP Corporate Training & Certification
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              Empower your corporate workforce, functional analysts, and technical developers with intensive, project-oriented SAP S/4HANA masterclasses led by veteran industry practitioners.
            </p>
          </motion.div>
        </div>

        {/* Training Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {TRAINING_PROGRAMS.map((program, idx) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-panel glass-panel-hover flex flex-col justify-between rounded-3xl p-7 sm:p-8 overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="rounded-xl bg-[#00A3E0]/15 dark:bg-cyan-400/20 border border-[#00A3E0]/30 dark:border-cyan-400/30 px-3.5 py-1 text-[11px] font-bold text-[#0077B6] dark:text-cyan-300 font-mono">
                    {program.code}
                  </span>
                  <span className="rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-2.5 py-0.5 text-[11px] font-semibold text-slate-500 dark:text-slate-400 font-display">
                    {program.level} Level
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {program.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-sans">
                  {program.overview}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6 text-xs text-slate-600 dark:text-slate-300 font-semibold font-display">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-[#00A3E0] dark:text-cyan-400 flex-shrink-0" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Monitor className="h-4 w-4 text-sky-500 dark:text-cyan-300 flex-shrink-0" />
                    <span>{program.mode}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-display">Core Curriculum Preview:</span>
                  {program.modules.slice(0, 3).map((mod, mIdx) => (
                    <div key={mIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300 font-sans">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#00A3E0] dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{mod}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProgram(program)}
                  className="text-xs font-bold text-[#00A3E0] dark:text-cyan-300 hover:text-sky-600 dark:hover:text-white inline-flex items-center gap-1 font-display"
                >
                  <BookOpen className="h-3.5 w-3.5" />
                  <span>View Full Syllabus</span>
                </button>

                <button
                  onClick={() => onOpenContact(`Corporate Training: ${program.title}`)}
                  className="rounded-xl bg-slate-100 dark:bg-sky-500/15 text-[#00A3E0] dark:text-cyan-300 hover:bg-[#00A3E0] hover:text-white px-4 py-2 text-xs font-bold border border-slate-200 dark:border-sky-400/30 transition-all shadow-sm font-display"
                >
                  Enquire for Batch
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Corporate Custom Workshop CTA */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-cyan-400/10 to-transparent rounded-bl-full pointer-events-none" />

          <div className="flex items-center gap-4 relative z-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00A3E0]/15 dark:bg-cyan-400/20 border border-[#00A3E0]/30 dark:border-cyan-400/30 text-[#00A3E0] dark:text-cyan-300">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-display text-base font-bold text-slate-900 dark:text-white">Need Custom On-Site Training for Your Organization?</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium font-sans">We tailor curriculum modules to your company's live SAP landscape and business processes.</p>
            </div>
          </div>
          <button
            onClick={() => onOpenContact('Custom Corporate SAP Training Workshop')}
            className="btn-primary-gradient shimmer-sweep rounded-2xl text-white px-7 py-3 text-xs font-bold uppercase tracking-wider whitespace-nowrap font-display relative z-10"
          >
            Request Corporate Proposal
          </button>
        </div>

      </div>

      {/* Program Syllabus Modal */}
      <AnimatePresence>
        {selectedProgram && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-[#050B17]/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-2xl w-full rounded-3xl border border-slate-200 dark:border-sky-500/30 bg-white dark:bg-[#0B1528] p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh] text-slate-900 dark:text-white"
            >
              <button
                onClick={() => setSelectedProgram(null)}
                className="absolute top-6 right-6 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 border border-sky-400/30 text-[#00A3E0]">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#00A3E0] font-bold">{selectedProgram.code}</span>
                  <h3 className="text-xl font-bold text-[#0A1931] dark:text-white">{selectedProgram.title}</h3>
                </div>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {selectedProgram.overview}
              </p>

              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#00A3E0] mb-3">Complete Course Curriculum</h4>
                <div className="space-y-2">
                  {selectedProgram.modules.map((mod, i) => (
                    <div key={i} className="flex items-start gap-2.5 rounded-xl bg-slate-50 dark:bg-[#050B17]/60 p-2.5 border border-slate-200 dark:border-sky-500/20 text-xs text-slate-700 dark:text-slate-300">
                      <span className="font-mono text-[#00A3E0] font-bold">{i + 1}.</span>
                      <span className="font-medium">{mod}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">Target Audience</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProgram.targetAudience.map((aud, i) => (
                    <span key={i} className="rounded-lg bg-slate-100 dark:bg-sky-500/15 border border-slate-200 dark:border-sky-400/30 px-2.5 py-1 text-xs font-semibold text-[#00A3E0]">
                      {aud}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200 dark:border-sky-500/15">
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const title = selectedProgram.title;
                    setSelectedProgram(null);
                    onOpenContact(`Enrolment Enquiry: ${title}`);
                  }}
                  className="glow-btn rounded-xl px-5 py-2.5 text-xs font-bold text-white"
                >
                  Enquire for Batch
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

