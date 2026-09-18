import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  FileText, 
  CheckCheck, 
  ShieldAlert, 
  Handshake, 
  TrendingUp, 
  RefreshCw,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Lock,
  Layers,
  Award
} from 'lucide-react';

interface StageInfo {
  number: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  color: string;
  tagline: string;
  bullets: string[];
  systemAction: string;
}

export const VendorLifecycle: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);

  const stages: StageInfo[] = [
    {
      number: '01',
      title: 'Invite Vendor',
      subtitle: 'Digital Invitation',
      icon: Send,
      color: 'from-blue-600 to-cyan-500',
      tagline: 'Automated invitations with granular role-based permissions',
      bullets: [
        'Single-click invitation dispatch via custom portal link',
        'Custom onboarding NDA & corporate compliance acceptance',
        'Built-in invitation token expiry and tracking metrics'
      ],
      systemAction: 'Triggers automated SAP Business Partner draft record'
    },
    {
      number: '02',
      title: 'Register',
      subtitle: 'Supplier Self-Service',
      icon: FileText,
      color: 'from-cyan-500 to-blue-600',
      tagline: 'Streamlined data entry without tedious paperwork',
      bullets: [
        'Automated master data fetching using GSTIN and CIN numbers',
        'Multi-currency banking setup with penny-drop verification',
        'Factory location geotagging & MSME classification capture'
      ],
      systemAction: 'Auto-populates 75% of vendor attributes via API lookup'
    },
    {
      number: '03',
      title: 'Verify',
      subtitle: 'Automated Compliance',
      icon: CheckCheck,
      color: 'from-indigo-600 to-blue-600',
      tagline: 'Instant 3-way validation and anti-fraud verification',
      bullets: [
        'PAN-to-GSTIN reconciliation via official government gateways',
        'Global sanction list & OFAC screening against PEP databases',
        'Certificate OCR extraction with automatic expiry tracking'
      ],
      systemAction: 'Zero human touch required for authentic documents'
    },
    {
      number: '04',
      title: 'Approve',
      subtitle: 'Multi-Level Governance',
      icon: ShieldAlert,
      color: 'from-blue-600 to-indigo-600',
      tagline: 'Cross-functional approval matrices with strict SLA guards',
      bullets: [
        'Parallel routing across Procurement, Tax, Finance & Legal',
        'Rule-based delegation and mobile one-tap approval sign-off',
        'Automated escalations if SLAs exceed designated thresholds'
      ],
      systemAction: 'Generates active SAP Vendor Master (XK01/BP) code'
    },
    {
      number: '05',
      title: 'Collaborate',
      subtitle: 'Procurement Sync',
      icon: Handshake,
      color: 'from-emerald-600 to-cyan-600',
      tagline: 'Seamless daily transactions and transparent communication',
      bullets: [
        'Real-time purchase order dispatch and acknowledgment tracking',
        'Direct Advanced Shipping Notice (ASN) generation and E-Way Bill sync',
        'Automated invoice 3-way matching and dispute resolution'
      ],
      systemAction: 'Direct integration with SAP MM & FI transactional flow'
    },
    {
      number: '06',
      title: 'Evaluate',
      subtitle: 'Performance Scoring',
      icon: TrendingUp,
      color: 'from-amber-500 to-orange-600',
      tagline: 'Objective, data-driven supplier performance indices',
      bullets: [
        'Real-time On-Time In-Full (OTIF) delivery metrics calculation',
        'Quality rejection percentage tracked against GRN entries',
        'Composite vendor scorecard with tier classification (Gold/Silver)'
      ],
      systemAction: 'Calculates dynamic vendor tier discount and allocation weight'
    },
    {
      number: '07',
      title: 'Manage',
      subtitle: 'Continuous Lifecycle',
      icon: RefreshCw,
      color: 'from-blue-600 to-purple-600',
      tagline: 'Continuous governance, renewals and risk mitigation',
      bullets: [
        'Automated renewal triggers 60 days before contract expiry',
        'Periodic GST return filing status verification and ITC safety checks',
        'Complete chronological audit log stored for tax & legal audits'
      ],
      systemAction: 'Maintains 100% statutory compliance readiness at all times'
    }
  ];

  return (
    <section id="vendor-lifecycle" className="py-20 md:py-28 bg-slate-50 dark:bg-[#050B17] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/70 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/60 text-xs font-bold uppercase tracking-wider text-[#0052CC] dark:text-[#00A3E0]">
            <Layers className="w-3.5 h-3.5" />
            <span>End-to-End Governance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            The 7-Stage Intelligent Vendor Lifecycle
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A unified, automated pipeline replacing fragmented emails, manual spreadsheets, and compliance delays.
          </p>
        </div>

        {/* Desktop & Tablet: Horizontal Timeline Navigator */}
        <div className="relative mb-12 hidden md:block">
          
          {/* Animated Connecting Line */}
          <div className="absolute top-7 left-8 right-8 h-1 bg-slate-200 dark:bg-slate-800 -z-0">
            <motion.div 
              className="h-full bg-gradient-to-r from-[#0052CC] via-[#00A3E0] to-cyan-400"
              initial={{ width: '0%' }}
              animate={{ width: `${(activeStage / (stages.length - 1)) * 100}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>

          {/* 7 Interactive Stage Nodes */}
          <div className="grid grid-cols-7 gap-2 relative z-10">
            {stages.map((stage, idx) => {
              const Icon = stage.icon;
              const isActive = idx === activeStage;
              const isPassed = idx < activeStage;

              return (
                <button
                  key={stage.number}
                  onClick={() => setActiveStage(idx)}
                  className="flex flex-col items-center text-center group cursor-pointer focus:outline-none"
                >
                  {/* Node Circle */}
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-md ${
                      isActive
                        ? 'bg-gradient-to-tr from-[#0052CC] to-[#00A3E0] text-white ring-4 ring-blue-500/25 shadow-blue-500/40'
                        : isPassed
                        ? 'bg-blue-600 text-white'
                        : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-[#00A3E0]'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>

                  {/* Stage Step Badge */}
                  <span className={`text-[10px] font-bold uppercase tracking-wider mt-2.5 transition-colors ${
                    isActive ? 'text-[#0052CC] dark:text-[#00A3E0]' : 'text-slate-500 dark:text-slate-400'
                  }`}>
                    Stage {stage.number}
                  </span>

                  {/* Stage Title */}
                  <span className={`text-xs font-bold transition-colors ${
                    isActive ? 'text-slate-900 dark:text-white font-extrabold' : 'text-slate-700 dark:text-slate-400'
                  }`}>
                    {stage.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile Horizontal Pill Selector */}
        <div className="flex md:hidden items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            const isActive = idx === activeStage;
            return (
              <button
                key={stage.number}
                onClick={() => setActiveStage(idx)}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap cursor-pointer transition-all ${
                  isActive
                    ? 'bg-[#0052CC] text-white shadow-md'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{stage.number}. {stage.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Showcase Card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="p-6 sm:p-10 rounded-2xl bg-white dark:bg-[#0A1931] border border-slate-200 dark:border-white/10 shadow-xl shadow-slate-900/5 dark:shadow-cyan-950/20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left: Summary & Bullet details */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-xs font-bold text-[#0052CC] dark:text-[#00A3E0]">
                      <span>STAGE {stages[activeStage].number} OF 07</span>
                      <span>•</span>
                      <span>{stages[activeStage].subtitle}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                      {stages[activeStage].title} — {stages[activeStage].tagline}
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {stages[activeStage].bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-950/80 text-[#0052CC] dark:text-[#00A3E0] flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-sm sm:text-base text-slate-700 dark:text-slate-300 font-normal leading-relaxed">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* System Trigger Callout */}
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-white/5 flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-amber-500 shrink-0" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        SAP Core Automation Trigger
                      </p>
                      <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                        {stages[activeStage].systemAction}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right: Stage Visual Graphic Card */}
                <div className="lg:col-span-5">
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-[#0A1931] text-white border border-slate-800 shadow-xl space-y-5">
                    
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <div className="flex items-center gap-2">
                        {React.createElement(stages[activeStage].icon, { className: "w-5 h-5 text-[#00A3E0]" })}
                        <span className="text-sm font-bold tracking-wide">Stage Workflow Ledger</span>
                      </div>
                      <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                        ONLINE
                      </span>
                    </div>

                    <div className="space-y-3 text-xs">
                      <div className="flex justify-between py-2 border-b border-slate-800/80">
                        <span className="text-slate-400">Automated Rules:</span>
                        <span className="font-semibold text-white">Active (v2.4)</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-slate-800/80">
                        <span className="text-slate-400">Data Governance:</span>
                        <span className="font-semibold text-emerald-400">100% Encrypted</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-slate-800/80">
                        <span className="text-slate-400">Audit Compliance:</span>
                        <span className="font-semibold text-cyan-300">ISO 27001 / SOC 2</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="text-slate-400">Downstream Handshake:</span>
                        <span className="font-semibold text-[#00A3E0]">
                          Stage {activeStage === stages.length - 1 ? '01 (Cycle)' : stages[activeStage + 1].number}
                        </span>
                      </div>
                    </div>

                    {/* Step navigation trigger button */}
                    <div className="pt-2">
                      <button
                        onClick={() => setActiveStage((prev) => (prev + 1) % stages.length)}
                        className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#0052CC] to-[#00A3E0] hover:from-[#0041a3] hover:to-[#008ec3] text-white text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-blue-500/20"
                      >
                        <span>Advance to Next Stage</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
