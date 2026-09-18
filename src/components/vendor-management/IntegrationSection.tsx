import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Database, 
  CreditCard, 
  ShoppingCart, 
  Users2, 
  BarChart4, 
  Network, 
  CheckCircle2, 
  ArrowRightLeft,
  Sparkles,
  Zap,
  Globe
} from 'lucide-react';

export const IntegrationSection: React.FC = () => {
  const integrations = [
    {
      title: 'SAP S/4HANA & ECC',
      type: 'Native ERP Backbone',
      desc: 'Bidirectional sync with XK01/XK02 Vendor Master, BP (Business Partner) replication, and purchase order tracking.',
      icon: Cpu,
      syncRate: 'Real-time (BAPI/ODATA)',
      status: 'Certified Native'
    },
    {
      title: 'Enterprise ERPs',
      type: 'Multi-ERP Support',
      desc: 'Plug-and-play connectors for Oracle Cloud ERP, Microsoft Dynamics 365, and Infor M3.',
      icon: Database,
      syncRate: 'REST / Webhooks',
      status: 'Plug & Play'
    },
    {
      title: 'Finance & Accounts Payable',
      type: 'Cash & Payment Ops',
      desc: 'Automate 3-way invoice matching against PO and Goods Receipt (GRN) with automated payment advice dispatch.',
      icon: CreditCard,
      syncRate: 'Sub-second API',
      status: 'Direct Bank Rail'
    },
    {
      title: 'Procurement Platforms',
      type: 'Sourcing & SRM',
      desc: 'Harmonize catalogs, vendor contracts, and RFQ responses with SAP Ariba, Coupa, and Jaggaer.',
      icon: ShoppingCart,
      syncRate: 'Continuous Sync',
      status: 'SRM Connected'
    },
    {
      title: 'Workforce & HR Systems',
      type: 'Contractor Compliance',
      desc: 'Integrate temporary workforce onboarding, background checks, and statutory labor compliance with Workday & SAP SuccessFactors.',
      icon: Users2,
      syncRate: 'Batch / Daily',
      status: 'Automated'
    },
    {
      title: 'Analytics & BI Platforms',
      type: 'Executive Intelligence',
      desc: 'Stream live supplier risk, delivery OTIF, and spend analytics into SAP Analytics Cloud (SAC), Power BI, and Tableau.',
      icon: BarChart4,
      syncRate: 'Live Stream',
      status: 'Instant Schema'
    },
    {
      title: 'CRM & Supply Networks',
      type: 'Ecosystem Portals',
      desc: 'Synchronize customer contracts and direct vendor delivery commitments with Salesforce and supply chain portals.',
      icon: Globe,
      syncRate: 'Bi-directional',
      status: 'Synchronized'
    }
  ];

  return (
    <section id="integrations" className="py-20 md:py-28 bg-white dark:bg-[#070E1E] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-500/5 dark:bg-cyan-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/60 text-xs font-bold uppercase tracking-wider text-[#0052CC] dark:text-[#00A3E0]">
            <Network className="w-3.5 h-3.5" />
            <span>Connected Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Seamless Enterprise System Integration
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Connect your vendor operations directly to your core SAP systems, finance rails, and procurement ecosystems without data fragmentation.
          </p>
        </div>

        {/* Central Hub Architecture Diagram */}
        <div className="relative mb-16 p-8 rounded-3xl bg-slate-50 dark:bg-[#0A1931] border border-slate-200 dark:border-white/10 shadow-lg overflow-hidden">
          
          {/* Subtle Grid Accent */}
          <div 
            className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, #0052CC 1px, transparent 0)',
              backgroundSize: '24px 24px'
            }}
          />

          <div className="relative z-10 flex flex-col items-center text-center">
            
            {/* Center Core Node */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-gradient-to-tr from-[#0052CC] to-[#00A3E0] text-white shadow-2xl shadow-blue-500/30 max-w-md w-full border border-white/20 mb-8"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
                <span className="text-xs font-black uppercase tracking-widest text-blue-100">Intelligent Hub</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black">Raapyd Vendor 360°</h3>
              <p className="text-xs text-blue-100/90 mt-1">
                Centralized Orchestration, Master Data Governance & Compliance Engine
              </p>
              <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-center gap-4 text-xs font-mono">
                <span className="flex items-center gap-1"><ArrowRightLeft className="w-3.5 h-3.5" /> REST / OData</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Zap className="w-3.5 h-3.5" /> Event-Driven</span>
              </div>
            </motion.div>

            {/* Downstream Ecosystem Connectors Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full text-left">
              {integrations.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="p-4 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-[#00A3E0] dark:hover:border-cyan-500/40 transition-all shadow-sm"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-950/80 text-[#0052CC] dark:text-[#00A3E0] flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded-full border border-emerald-500/20">
                        {item.status}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">{item.title}</h4>
                    <p className="text-[11px] font-semibold text-[#0052CC] dark:text-[#00A3E0] mb-1.5">{item.type}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-3">
                      {item.desc}
                    </p>

                    <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[10px] font-mono text-slate-400 flex items-center justify-between">
                      <span>Sync Mode:</span>
                      <span className="text-slate-700 dark:text-slate-300 font-semibold">{item.syncRate}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
