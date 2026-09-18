import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, 
  Server, 
  LifeBuoy, 
  Layers, 
  Smartphone, 
  RefreshCw, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  X
} from 'lucide-react';
import { SERVICES_DATA } from '../data/knooviqData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForConsult: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForConsult }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (id: string) => {
    const props = { className: "h-7 w-7 text-[#00A3E0]" };
    switch (id) {
      case 'sap-consulting-outsourcing': return <Briefcase {...props} />;
      case 'sap-application-management': return <Server {...props} />;
      case 'sap-support': return <LifeBuoy {...props} />;
      case 'sap-integration': return <Layers {...props} />;
      case 'sap-mobility': return <Smartphone {...props} />;
      case 'sap-migration': return <RefreshCw {...props} />;
      default: return <Briefcase {...props} />;
    }
  };

  return (
    <section id="services" className="relative py-24 bg-white dark:bg-[#050B17] overflow-hidden transition-colors duration-300">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-bold tracking-widest uppercase text-[#00A3E0] font-mono">
              End-to-End Enterprise Capabilities
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1931] dark:text-white tracking-tight">
              Specialized SAP Consulting & Managed Services
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              We deliver outcome-focused SAP engineering to optimize operations, ensure business continuity, and accelerate your digital transformation.
            </p>
          </motion.div>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-panel glass-panel-hover group relative flex flex-col justify-between rounded-3xl p-7 sm:p-8 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-400/10 to-transparent rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform" />

              <div>
                {/* Icon Container */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#00A3E0]/10 dark:bg-[#0B1528] border border-[#00A3E0]/20 dark:border-cyan-400/30 mb-6 group-hover:border-cyan-400 group-hover:scale-110 transition-all shadow-inner">
                  {getServiceIcon(service.id)}
                </div>

                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-[#00A3E0] dark:group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-sans">
                  {service.shortDesc}
                </p>

                {/* Key Feature Bullets */}
                <div className="space-y-2.5 mb-6">
                  {service.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-[#00A3E0] dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-bold text-[#00A3E0] dark:text-cyan-300 hover:text-sky-600 dark:hover:text-white inline-flex items-center gap-1 transition-colors font-display"
                >
                  <span>Learn Details</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>

                <button
                  onClick={() => onSelectServiceForConsult(service.title)}
                  className="rounded-xl bg-slate-100 dark:bg-sky-500/15 text-[#00A3E0] dark:text-cyan-300 hover:bg-[#00A3E0] hover:text-white px-4 py-1.5 text-xs font-bold border border-slate-200 dark:border-sky-400/30 transition-all shadow-sm font-display"
                >
                  Enquire
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-[#050B17]/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-2xl w-full rounded-3xl border border-slate-200 dark:border-sky-500/30 bg-white dark:bg-[#0B1528] p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh] text-slate-900 dark:text-white"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 border border-sky-400/30 text-[#00A3E0]">
                  {getServiceIcon(selectedService.id)}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0A1931] dark:text-white">{selectedService.title}</h3>
                  <span className="text-xs text-[#00A3E0] font-bold">KNOOVIQ Enterprise Practice</span>
                </div>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {selectedService.fullDesc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="rounded-2xl border border-slate-200 dark:border-sky-500/20 bg-slate-50 dark:bg-[#050B17]/60 p-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#00A3E0] mb-3">Key Capabilities</h4>
                  <ul className="space-y-2">
                    {selectedService.keyFeatures.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#00A3E0] flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-emerald-500/20 bg-emerald-50/50 dark:bg-[#050B17]/60 p-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-3">Business Benefits</h4>
                  <ul className="space-y-2">
                    {selectedService.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <Sparkles className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Technologies & Frameworks</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedService.technologies.map((tech, i) => (
                    <span key={i} className="rounded-lg bg-slate-100 dark:bg-sky-500/15 border border-slate-200 dark:border-sky-400/30 px-2.5 py-1 text-xs font-semibold text-[#00A3E0]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200 dark:border-sky-500/15">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const title = selectedService.title;
                    setSelectedService(null);
                    onSelectServiceForConsult(title);
                  }}
                  className="glow-btn rounded-xl px-5 py-2.5 text-xs font-bold text-white"
                >
                  Request Consultation
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

