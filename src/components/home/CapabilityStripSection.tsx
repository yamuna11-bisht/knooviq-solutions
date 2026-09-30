import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Server, Brain, Workflow, ShieldCheck } from 'lucide-react';

export const CapabilityStripSection: React.FC = () => {
  const capabilities = [
    { title: 'Technology', icon: <Cpu className="h-5 w-5 text-[#00A3E0]" />, desc: 'Clean Core & BTP Architecture' },
    { title: 'Infrastructure', icon: <Server className="h-5 w-5 text-[#0070C0]" />, desc: 'Resilient Multi-Cloud Foundations' },
    { title: 'Intelligence', icon: <Brain className="h-5 w-5 text-indigo-600" />, desc: 'Predictive & Autonomous AI' },
    { title: 'Automation', icon: <Workflow className="h-5 w-5 text-emerald-600" />, desc: 'End-to-End Orchestrated Workflows' },
  ];

  const enterpriseTrustBadges = [
    { label: 'SAP Ecosystem Ready', sub: 'Clean Core & S/4HANA Certified' },
    { label: 'Multi-Cloud Native', sub: 'AWS • Azure • GCP Supported' },
    { label: 'ISO & ITIL Governed', sub: 'Tier-1 Enterprise Standards' },
    { label: '24/7 Global SLA', sub: 'High Availability Framework' },
  ];

  return (
    <section className="relative bg-slate-50/80 border-y border-slate-200/80 py-8 select-none z-20 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core 4 Capability Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pb-6 border-b border-slate-200">
          {capabilities.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/90 hover:border-sky-300 hover:shadow-md transition-all group"
            >
              <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:bg-[#00A3E0]/15 group-hover:border-[#00A3E0]/30 transition-all">
                {item.icon}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <h3 className="font-display font-bold text-sm sm:text-base text-[#0A1931] tracking-tight group-hover:text-[#00A3E0] transition-colors">
                    {item.title}
                  </h3>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00A3E0] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-[11px] text-slate-500 truncate font-normal">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enterprise Governance / Quality Indicators Strip */}
        <div className="pt-5 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-slate-500 font-medium">
            <ShieldCheck className="h-4 w-4 text-[#00A3E0]" />
            <span className="font-mono text-[11px] uppercase tracking-wider text-slate-700 font-bold">
              Enterprise Delivery Standards
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-8">
            {enterpriseTrustBadges.map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00A3E0]" />
                <span className="text-[#0A1931] font-bold tracking-tight text-xs">
                  {badge.label}
                </span>
                <span className="hidden lg:inline text-slate-500 text-[11px]">
                  ({badge.sub})
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
