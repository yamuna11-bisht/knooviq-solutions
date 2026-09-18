import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Cloud, Sparkles, BarChart3, Workflow, Layers, ArrowRight } from 'lucide-react';

export const TechEcosystemSection: React.FC<{ onOpenContact: (topic?: string) => void }> = ({ onOpenContact }) => {
  const [activeTab, setActiveTab] = useState(0);

  const techDomains = [
    {
      id: 'sap-core',
      name: 'Digital Core & ERP',
      icon: <Cpu className="h-5 w-5 text-[#00A3E0]" />,
      badge: 'Core Foundation',
      title: 'SAP S/4HANA & In-Memory HANA DB',
      description: 'The central transactional nervous system unifying general ledger, supply chain operations, inventory, and asset management on high-throughput in-memory architecture.',
      technologies: ['SAP S/4HANA Cloud / On-Premise', 'SAP HANA Database 2.0', 'Universal Journal (ACDOCA)', 'Embedded Analytics Engine']
    },
    {
      id: 'btp-integration',
      name: 'SAP BTP & Middleware',
      icon: <Layers className="h-5 w-5 text-sky-500" />,
      badge: 'Clean Core Integration',
      title: 'SAP Business Technology Platform (BTP)',
      description: 'Decoupled side-by-side extension platform connecting heterogeneous enterprise ecosystems via REST APIs, OData services, event mesh, and Kafka messaging.',
      technologies: ['SAP Integration Suite / CPI', 'SAP BTP Extension Suite', 'SAP Event Mesh', 'API Management Gateway']
    },
    {
      id: 'ai-automation',
      name: 'Enterprise AI & Automation',
      icon: <Sparkles className="h-5 w-5 text-purple-500" />,
      badge: 'Intelligent Automation',
      title: 'Predictive Machine Learning & SAP Joule',
      description: 'Embedding automated cognitive workflows across procurement, financial reconciliations, dynamic safety stock predictions, and customer query fulfillment.',
      technologies: ['SAP Joule Generative Copilot', 'Automated 3-Way Invoice Matcher', 'Predictive Asset Maintenance', 'SAP Build Process Automation']
    },
    {
      id: 'cloud-infra',
      name: 'Cloud & Hyperscalers',
      icon: <Cloud className="h-5 w-5 text-indigo-500" />,
      badge: 'High Availability',
      title: 'Hyperscaler Multi-Cloud Deployments',
      description: 'Architecting resilient, multi-region SAP landscapes on AWS, Microsoft Azure, and GCP with automated disaster recovery and 99.99% availability.',
      technologies: ['AWS SAP Certified Architecture', 'Microsoft Azure for SAP', 'Google Cloud Platform', 'High Availability Cluster Failover']
    },
    {
      id: 'analytics-data',
      name: 'Analytics & Insights',
      icon: <BarChart3 className="h-5 w-5 text-emerald-500" />,
      badge: 'Live Intelligence',
      title: 'SAP Analytics Cloud & Real-Time Dashboards',
      description: 'Executive dashboards, dynamic financial planning, and operational cockpit reporting pulling directly from live HANA calculation views without data latency.',
      technologies: ['SAP Analytics Cloud (SAC)', 'SAP Datasphere', 'Core Data Services (CDS Views)', 'Executive KPI Cockpits']
    },
    {
      id: 'process-mining',
      name: 'Process Mining & Signavio',
      icon: <Workflow className="h-5 w-5 text-amber-500" />,
      badge: 'Process Excellence',
      title: 'SAP Signavio Business Process Intelligence',
      description: 'Continuous process discovery, bottleneck identification, and fit-to-standard conformance checking across complex multi-entity business operations.',
      technologies: ['SAP Signavio Process Manager', 'Process Insights & Mining', 'LeanIX Enterprise Architecture', 'Automated Conformance Checks']
    }
  ];

  return (
    <section id="technology" className="relative py-24 bg-slate-100/60 dark:bg-[#040813] text-slate-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-bold tracking-widest uppercase text-[#00A3E0]">
              Innovation & Architecture
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1931] dark:text-white tracking-tight">
              Enterprise Technology & Innovation Ecosystem
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              We leverage the most advanced enterprise platforms to build scalable, secure, and resilient digital architectures.
            </p>
          </motion.div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {techDomains.map((domain, idx) => (
            <button
              key={domain.id}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === idx
                  ? 'bg-sky-500/15 text-[#00A3E0] dark:text-cyan-300 border border-[#00A3E0]/40 shadow-sm'
                  : 'border border-slate-200 dark:border-sky-500/10 bg-white dark:bg-[#0B1528]/60 text-slate-600 dark:text-slate-400 hover:text-[#00A3E0] dark:hover:text-white hover:bg-slate-50 dark:hover:bg-[#0B1528]'
              }`}
            >
              {domain.icon}
              <span>{domain.name}</span>
            </button>
          ))}
        </div>

        {/* Selected Domain Card */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="glass-panel rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-cyan-400/10 via-indigo-500/5 to-transparent rounded-bl-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex rounded-full bg-[#00A3E0]/15 dark:bg-cyan-400/20 border border-[#00A3E0]/30 dark:border-cyan-400/30 px-3.5 py-1 text-xs font-bold text-[#0077B6] dark:text-cyan-300 font-mono">
                {techDomains[activeTab].badge}
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-black text-[#0A1931] dark:text-white">
                {techDomains[activeTab].title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-sans">
                {techDomains[activeTab].description}
              </p>

              <div className="pt-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 block mb-3 font-display">
                  Core Technologies & Frameworks
                </span>
                <div className="flex flex-wrap gap-2">
                  {techDomains[activeTab].technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="rounded-xl bg-white/80 dark:bg-[#030712]/80 border border-slate-200 dark:border-white/10 px-3.5 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 font-mono shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center bg-white/70 dark:bg-[#030712]/70 rounded-2xl p-6 border border-slate-200 dark:border-white/10 text-center space-y-4 shadow-sm">
              <div className="flex justify-center">
                <div className="p-3.5 rounded-2xl bg-[#00A3E0]/15 dark:bg-cyan-400/20 border border-[#00A3E0]/30 dark:border-cyan-400/30 text-[#00A3E0] dark:text-cyan-300 shadow-inner">
                  {techDomains[activeTab].icon}
                </div>
              </div>
              <h4 className="font-display text-sm font-bold text-slate-900 dark:text-white">
                Architectural Advisory
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-sans">
                Consult with our practice leads on integrating {techDomains[activeTab].name} into your enterprise roadmap.
              </p>
              <button
                onClick={() => onOpenContact(`Technology Architecture: ${techDomains[activeTab].name}`)}
                className="btn-primary-gradient shimmer-sweep w-full rounded-2xl py-3 text-xs font-bold uppercase tracking-wider text-white flex items-center justify-center gap-2 font-display"
              >
                <span>Consult Lead Architect</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

