import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Server, 
  LifeBuoy, 
  Layers, 
  Smartphone, 
  RefreshCw, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import { SERVICES_DATA } from '../data/knooviqData';

export const ServicesPage: React.FC<{ onOpenContact: (srv?: string) => void }> = ({ onOpenContact }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase': return <Briefcase className="h-6 w-6 text-[#00A3E0]" />;
      case 'Server': return <Server className="h-6 w-6 text-sky-500" />;
      case 'LifeBuoy': return <LifeBuoy className="h-6 w-6 text-indigo-500" />;
      case 'Layers': return <Layers className="h-6 w-6 text-purple-500" />;
      case 'Smartphone': return <Smartphone className="h-6 w-6 text-emerald-500" />;
      case 'RefreshCw': return <RefreshCw className="h-6 w-6 text-amber-500" />;
      default: return <Briefcase className="h-6 w-6 text-[#00A3E0]" />;
    }
  };

  return (
    <div className="pt-28 pb-20 bg-slate-50 dark:bg-[#050B17] text-slate-900 dark:text-white transition-colors duration-300">
      {/* Header */}
      <section className="py-16 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#00A3E0]/30 bg-white dark:bg-[#0B1528] px-3.5 py-1.5 shadow-sm mb-6">
          <Sparkles className="h-3.5 w-3.5 text-[#00A3E0]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#00A3E0] dark:text-cyan-300">
            End-to-End Enterprise Services
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0A1931] dark:text-white leading-tight mb-6">
          Comprehensive SAP Consulting &{' '}
          <span className="text-gradient-cyan">Managed Practices</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Delivering 24/7 SLA-governed support, custom clean-core integrations, cloud migrations, and senior talent staffing across the full SAP product suite.
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((srv, idx) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="rounded-3xl border border-slate-200 dark:border-sky-500/20 bg-white dark:bg-[#0B1528]/80 p-8 flex flex-col justify-between shadow-sm dark:shadow-xl hover:border-[#00A3E0] transition-all hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 dark:bg-[#050B17] border border-slate-200 dark:border-sky-500/25">
                    {getIcon(srv.iconName)}
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-sky-500/10 text-[#00A3E0] dark:text-cyan-300 border border-[#00A3E0]/30">
                    SLA Backed
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {srv.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {srv.fullDesc}
                </p>

                <div className="space-y-2 mb-6">
                  {srv.keyFeatures.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#00A3E0] flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-sky-500/15">
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {srv.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="rounded-lg bg-slate-100 dark:bg-[#050B17] border border-slate-200 dark:border-sky-500/15 px-2.5 py-1 text-[10px] font-semibold text-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onOpenContact(`Service: ${srv.title}`)}
                  className="glow-btn w-full rounded-xl py-2.5 text-xs font-bold uppercase tracking-wider text-white flex items-center justify-center gap-2"
                >
                  <span>Request Proposal</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

