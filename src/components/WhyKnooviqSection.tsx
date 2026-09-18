import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Layers, Clock, Users, Zap, CheckCircle2 } from 'lucide-react';

export const WhyKnooviqSection: React.FC<{ onOpenContact: (topic?: string) => void }> = ({ onOpenContact }) => {
  const differentiators = [
    {
      icon: <Award className="h-6 w-6 text-[#00A3E0]" />,
      title: 'Deep SAP Domain Expertise',
      description: 'Over 45+ certified SAP functional and technical consultants with average 8+ years experience across complex manufacturing, FMCG, and energy landscapes.',
      stat: '45+ Specialists'
    },
    {
      icon: <Layers className="h-6 w-6 text-sky-500" />,
      title: 'Clean Core Architecture',
      description: 'We keep your core ERP pristine and future-proof by building custom extensions and API orchestrations side-by-side on SAP BTP.',
      stat: 'Clean Core Compliant'
    },
    {
      icon: <Clock className="h-6 w-6 text-indigo-500" />,
      title: 'Near-Zero Downtime Cutover',
      description: 'Proven migration accelerators and simulated dry-runs ensure your business operations continue uninterrupted over cutover weekends.',
      stat: '0 Unplanned Downtime'
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-emerald-500" />,
      title: 'SLA-Driven 24/7 Support',
      description: 'Contractually backed L1-L4 response guarantees with sub-15 minute emergency response for P1 mission-critical incidents.',
      stat: '99.8% SLA Adherence'
    },
    {
      icon: <Users className="h-6 w-6 text-purple-500" />,
      title: 'End-to-End Accountability',
      description: 'Single trusted partner handling executive advisory, blueprinting, implementation, cloud migration, and continuous post-go-live AMS.',
      stat: 'Full Lifecycle'
    },
    {
      icon: <Zap className="h-6 w-6 text-amber-500" />,
      title: 'Corporate Workforce Enablement',
      description: 'Custom corporate training programs and change governance ensuring rapid end-user adoption and high productivity from Day 1.',
      stat: '2.5x Faster Adoption'
    }
  ];

  return (
    <section id="why-knooviq" className="relative py-24 bg-white dark:bg-[#050B17] text-slate-900 dark:text-white transition-colors duration-300">
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
              Enterprise Value Proposition
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1931] dark:text-white tracking-tight">
              Why Global Enterprises Choose KNOOVIQ
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              We combine deep architectural mastery with a business-first consulting ethos to deliver predictable digital transformation outcomes.
            </p>
          </motion.div>
        </div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {differentiators.map((diff, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-panel glass-panel-hover rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-400/10 to-transparent rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00A3E0]/10 dark:bg-[#030712] border border-[#00A3E0]/25 dark:border-cyan-400/30 group-hover:scale-110 group-hover:border-cyan-400 transition-all shadow-inner">
                    {diff.icon}
                  </div>
                  <span className="rounded-full bg-[#00A3E0]/15 dark:bg-cyan-400/20 border border-[#00A3E0]/30 dark:border-cyan-400/30 px-3 py-1 text-[11px] font-mono font-bold text-[#0077B6] dark:text-cyan-300">
                    {diff.stat}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-3">
                  {diff.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  {diff.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200 dark:border-white/10 flex items-center gap-2 text-xs font-bold text-[#00A3E0] dark:text-cyan-300 font-display">
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span>Verified Delivery Standard</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

