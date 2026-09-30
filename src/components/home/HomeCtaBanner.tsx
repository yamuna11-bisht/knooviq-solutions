import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, MessageSquare, ShieldCheck, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HomeCtaBanner: React.FC<{ onOpenContact?: (service?: string) => void }> = ({ onOpenContact }) => {
  return (
    <section className="relative py-24 bg-slate-50/90 text-slate-900 overflow-hidden select-none border-t border-slate-200">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-sky-100/60 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-14 shadow-xl relative overflow-hidden text-center">
          
          {/* Subtle Ambient Background Gradient Inside Card */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-sky-50 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-50 rounded-full blur-2xl pointer-events-none" />

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 mb-6 shadow-sm"
          >
            <Sparkles className="h-4 w-4 text-[#00A3E0]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#0070C0] font-display">
              Start Your Enterprise Journey
            </span>
          </motion.div>

          {/* Big Impact Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-[#0A1931] tracking-tight leading-[1.12]"
          >
            Ready to Build a{' '}
            <span className="bg-gradient-to-r from-[#00A3E0] to-[#0070C0] bg-clip-text text-transparent">
              Smarter Enterprise?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            Partner with certified SAP functional and cloud architects. Map your Clean Core transition, automate critical business processes, and achieve near-zero downtime cutover.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4 relative z-10"
          >
            <button
              onClick={() => onOpenContact ? onOpenContact('Enterprise Consultation') : undefined}
              className="btn-primary-gradient shimmer-sweep rounded-2xl px-8 sm:px-10 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all flex items-center gap-3 active:scale-95 font-display"
            >
              <MessageSquare className="h-4 w-4" />
              <span>Let's Talk</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <Link
              to="/solutions"
              className="rounded-2xl border border-slate-300 bg-white hover:bg-slate-50 hover:border-sky-300 px-6 sm:px-8 py-4 text-xs sm:text-sm font-bold text-slate-700 hover:text-[#0070C0] transition-all shadow-sm flex items-center gap-2 active:scale-95 font-display"
            >
              <span>Explore All Solutions</span>
              <ArrowRight className="h-3.5 w-3.5 text-[#00A3E0]" />
            </Link>
          </motion.div>

          {/* Trust Strip */}
          <div className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-500 relative z-10">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              <span className="font-semibold text-slate-700">Confidential Non-Disclosure Assured</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#00A3E0]" />
              <span className="font-semibold text-slate-700">Certified SAP Architecture Advisory</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#0070C0]" />
              <span className="font-semibold text-slate-700">24/7 Global SLA Governance</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
