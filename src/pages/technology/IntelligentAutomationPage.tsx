import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Workflow,
  Cpu,
  Zap,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Activity,
  Layers,
  BarChart3,
  Compass,
  AlertTriangle,
  Play,
  RotateCcw,
  Sliders,
  FileText,
  Clock,
  CheckSquare,
  Bot,
  Filter,
  ChevronRight,
  Boxes,
  Database,
  Maximize2,
  X
} from 'lucide-react';

interface TechnologyPageProps {
  onOpenContact: (defaultService?: string) => void;
}

interface ProcessNode {
  name: string;
  stage: string;
  beforeTime: string;
  afterTime: string;
  status: 'automated' | 'bottleneck-cleared' | 'optimized';
  impact: string;
}

const O2C_NODES: ProcessNode[] = [
  {
    name: 'Sales Order Ingestion & EDI Parsing',
    stage: 'Step 01',
    beforeTime: '4.5 Hours Manual Review',
    afterTime: 'Sub-Second Autonomous Extraction',
    status: 'automated',
    impact: '100% Data Entry Errors Eliminated'
  },
  {
    name: 'Credit Limit Verification & Risk Check',
    stage: 'Step 02',
    beforeTime: '36 Hours Bottleneck Loop',
    afterTime: 'Real-Time Automated Evaluation',
    status: 'bottleneck-cleared',
    impact: 'Credit Exceptions Auto-Routed via BTP'
  },
  {
    name: 'Warehouse Delivery & EWM Picking Trigger',
    stage: 'Step 03',
    beforeTime: '12 Hours Batch Waiting',
    afterTime: 'Instant Event-Driven Dispatch',
    status: 'automated',
    impact: 'Same-Day Dispatch Rate +44%'
  },
  {
    name: 'Billing Document & E-Invoice Clearance',
    stage: 'Step 04',
    beforeTime: '18 Hours Accounting Lag',
    afterTime: 'Touchless Instant Tax Sync',
    status: 'optimized',
    impact: 'Zero Regulatory Tax Penalty Risk'
  }
];

export const IntelligentAutomationPage: React.FC<TechnologyPageProps> = ({ onOpenContact }) => {
  const [activeCycleTab, setActiveCycleTab] = useState<'discover' | 'automate' | 'optimize'>('discover');
  const [isAutomatedView, setIsAutomatedView] = useState<boolean>(true);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-slate-100 font-sans antialiased selection:bg-purple-600 selection:text-white">

      {/* =========================================================================
          SECTION 1: HERO SECTION (Cinematic Full-Screen Panoramic Background, Left Content)
          ========================================================================= */}
      <section className="relative w-full min-h-[600px] lg:min-h-[660px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-14 overflow-hidden bg-slate-950 text-white">

        {/* Full-Bleed Background Visual: Robotic & Human Modular Workflow Automation */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/workflow_automation_widescreen.jpg"
            alt="Intelligent Automation - Mine Bottlenecks, Automate Workflows, Accelerate Enterprise Velocity"
            className="w-full h-full object-cover object-right lg:object-[78%_center] brightness-110 contrast-105 saturate-[1.05]"
          />
          {/* Dedicated text-readability scrim on left; 100% bright & clear on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/65 via-45% to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl space-y-5 text-left">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="space-y-3"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-900/80 border border-purple-400/30 text-xs font-mono font-bold uppercase tracking-wider text-purple-200 shadow-sm">
                <Workflow className="w-3.5 h-3.5 text-purple-300" />
                <span>KNOOVIQ TECHNOLOGY PRACTICE &bull; INTELLIGENT AUTOMATION</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
                Mine Bottlenecks. Automate Workflows. <br />
                <span className="text-purple-300">Accelerate Enterprise Velocity.</span>
              </h1>

              <p className="text-lg sm:text-xl font-semibold text-purple-100 leading-snug">
                Autonomous RPA Bots &amp; Closed-Loop Process Mining Intelligence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4 max-w-2xl"
            >
              <p className="text-sm sm:text-base text-purple-100 font-normal leading-relaxed">
                Combine data-driven process mining (SAP Signavio) with enterprise robotic process automation (SAP Build Process Automation) to eliminate friction and convert slow manual workflows into touchless operations.
              </p>

              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm font-semibold text-white">
                  <CheckCircle2 className="w-4 h-4 text-purple-300" />
                  <span>SAP Signavio Process Mining</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm font-semibold text-white">
                  <CheckCircle2 className="w-4 h-4 text-purple-300" />
                  <span>Touchless RPA Execution</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm font-semibold text-white">
                  <CheckCircle2 className="w-4 h-4 text-purple-300" />
                  <span>Zero Clean Core Impact</span>
                </span>
              </div>
            </motion.div>

            {/* Enterprise Architectural Trust Ribbon */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 pt-5 border-t border-purple-800/80 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
            >
              <div className="p-3.5 rounded-xl bg-purple-950/60 border border-purple-800">
                <div className="flex items-center gap-2 mb-1">
                  <Workflow className="w-4 h-4 text-purple-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-purple-300 uppercase">DISCOVERY</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white">Process Mining</div>
                <div className="text-xs text-purple-200 mt-0.5">ERP Event Log Telemetry</div>
              </div>

              <div className="p-3.5 rounded-xl bg-purple-950/60 border border-purple-800">
                <div className="flex items-center gap-2 mb-1">
                  <Bot className="w-4 h-4 text-purple-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-purple-300 uppercase">RPA BOTS</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white">Build Automation</div>
                <div className="text-xs text-purple-200 mt-0.5">Touchless Orchestration</div>
              </div>

              <div className="p-3.5 rounded-xl bg-purple-950/60 border border-purple-800">
                <div className="flex items-center gap-2 mb-1">
                  <Zap className="w-4 h-4 text-purple-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-purple-300 uppercase">VELOCITY</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white">-78% Cycle Time</div>
                <div className="text-xs text-purple-200 mt-0.5">Zero Human Friction</div>
              </div>

              <div className="p-3.5 rounded-xl bg-purple-950/60 border border-purple-800">
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck className="w-4 h-4 text-purple-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-purple-300 uppercase">CLEAN CORE</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white">100% Decoupled</div>
                <div className="text-xs text-purple-200 mt-0.5">BTP Microservice APIs</div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: END-TO-END AUTOMATION LIFECYCLE & VALUE CONSOLE
          ========================================================================= */}
      <section className="py-16 bg-[#040209] border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-400/30 text-xs font-mono font-bold uppercase tracking-wider text-purple-400">
              <Workflow className="w-3.5 h-3.5" />
              <span>AUTOMATION LIFECYCLE CONTROLLER</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Three-Stage Closed-Loop Optimization Pipeline
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              From event log discovery in SAP Signavio to touchless execution in SAP Build, eliminate friction across high-volume ERP workflows.
            </p>
          </div>

          {/* Stepper Pipeline Lifecycle Header */}
          <div className="max-w-5xl mx-auto rounded-2xl border-2 border-purple-500/30 bg-[#0C061A]/90 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
            
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div>
                <span className="text-xs font-mono uppercase text-purple-400 font-bold block">
                  END-TO-END AUTOMATION LIFECYCLE
                </span>
                <span className="text-sm font-bold text-white">Three-Stage Closed-Loop Optimization:</span>
              </div>
              <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-purple-950 text-purple-300 border border-purple-800">
                SAP SIGNAVIO + BUILD
              </span>
            </div>

            {/* Stepper Stage Tabs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
              {[
                { id: 'discover', title: '01. Process Discovery', sub: 'SAP Signavio Process Mining', desc: 'Scan ERP event logs to identify hidden rework loops, late approvals, and manual compliance bottlenecks.' },
                { id: 'automate', title: '02. Robotic Automation', sub: 'SAP Build Process Automation', desc: 'Deploy low-code attended and unattended bots to execute repetitive data entry and cross-app syncs.' },
                { id: 'optimize', title: '03. Value Governance', sub: 'Signavio Value Accelerator', desc: 'Continuously measure dollar savings, cycle time reductions, and SLA conformance in real time.' }
              ].map((stage) => (
                <button
                  key={stage.id}
                  onClick={() => setActiveCycleTab(stage.id as any)}
                  className={`p-4 rounded-xl text-left transition-all border ${
                    activeCycleTab === stage.id
                      ? 'bg-gradient-to-b from-purple-500/20 to-fuchsia-900/30 border-purple-400 shadow-md shadow-purple-500/20'
                      : 'bg-black/30 border-white/5 hover:border-white/15 text-slate-400'
                  }`}
                >
                  <span className="text-xs font-mono font-bold text-purple-400 block">{stage.title}</span>
                  <span className="text-xs sm:text-sm font-bold text-white block mt-0.5">{stage.sub}</span>
                  <span className="text-[11px] text-slate-400 mt-1 block leading-snug">{stage.desc}</span>
                </button>
              ))}
            </div>

            {/* Metric Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-3 border-t border-white/10 text-xs font-mono">
              <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                <span className="text-slate-400 text-[10px] uppercase font-bold block">Avg Cycle Time</span>
                <span className="text-base font-black text-purple-300 font-mono">-78% Reduction</span>
              </div>
              <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                <span className="text-slate-400 text-[10px] uppercase font-bold block">Error Rate</span>
                <span className="text-base font-black text-emerald-400 font-mono">Zero Transcription</span>
              </div>
              <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                <span className="text-slate-400 text-[10px] uppercase font-bold block">FTE Capacity</span>
                <span className="text-base font-black text-cyan-300 font-mono">4,000+ Hrs Saved/Yr</span>
              </div>
              <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                <span className="text-slate-400 text-[10px] uppercase font-bold block">Clean Core Score</span>
                <span className="text-base font-black text-white font-mono">100% BTP Decoupled</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2: SAP SIGNAVIO PROCESS BOTTLENECK EXPLORER (Order-to-Cash)
          ========================================================================= */}
      <section className="py-20 bg-white dark:bg-[#070E1C] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-700/50 text-xs font-mono font-bold uppercase text-purple-700 dark:text-purple-300 mb-3">
                <Activity className="w-3.5 h-3.5" />
                <span>INTERACTIVE PROCESS MINING SIMULATOR</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                Order-to-Cash (O2C) Process Bottleneck Explorer
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2">
                Simulate how Knooviq dismantles friction across high-volume ERP transaction paths.
              </p>
            </div>

            {/* Toggle State Button */}
            <div className="flex items-center gap-2 p-1.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 shrink-0">
              <button
                onClick={() => setIsAutomatedView(false)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  !isAutomatedView
                    ? 'bg-rose-500 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                Before (Manual Friction)
              </button>
              <button
                onClick={() => setIsAutomatedView(true)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  isAutomatedView
                    ? 'bg-[#00A3E0] text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                After (Knooviq Automated)
              </button>
            </div>
          </div>

          {/* Interactive Process Pipeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {O2C_NODES.map((node, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl border-2 transition-all flex flex-col justify-between ${
                  isAutomatedView
                    ? 'bg-sky-50/50 dark:bg-[#08152B] border-sky-300 dark:border-[#00A3E0]/40 shadow-lg'
                    : 'bg-rose-50/50 dark:bg-[#1A0A12] border-rose-300 dark:border-rose-900/40 shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-slate-500 dark:text-slate-400">
                      {node.stage}
                    </span>
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                      isAutomatedView
                        ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700'
                        : 'bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-700'
                    }`}>
                      {isAutomatedView ? 'TOUCHLESS BOT' : 'MANUAL BOTTLENECK'}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {node.name}
                  </h3>

                  <div className="space-y-1.5 pt-2 border-t border-slate-200 dark:border-white/10 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Latency:</span>
                      <span className="font-mono font-bold text-slate-900 dark:text-white">
                        {isAutomatedView ? node.afterTime : node.beforeTime}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200 dark:border-white/10 text-xs text-slate-600 dark:text-slate-300 font-medium">
                  {node.impact}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: CORE PROCESS TRANSFORMATION TRIAD
          ========================================================================= */}
      <section className="py-20 bg-slate-100 dark:bg-[#050C1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-xs font-mono font-bold uppercase text-[#00A3E0] mb-3">
              <Boxes className="w-3.5 h-3.5" />
              <span>CORE ENTERPRISE PROCESSES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Enterprise Process Transformation Triad
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2">
              Turnkey process automation blueprints configured for immediate integration with your SAP S/4HANA core.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* P2P Card */}
            <div className="p-8 rounded-2xl bg-white dark:bg-[#08152B] border border-slate-200 dark:border-white/10 shadow-xl space-y-4">
              <span className="text-xs font-mono font-bold text-[#00A3E0] uppercase block">
                PROCURE-TO-PAY (P2P)
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Autonomous 3-Way Matching &amp; Invoice Ingestion
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Pre-trained Document Information Extraction (DOX) models capture unstructured vendor invoices from incoming mailboxes, reconcile PO line items with Goods Receipts, and automatically release payment blocks when variance is &lt; 0.5%.
              </p>
              <div className="pt-2 text-xs font-mono text-emerald-500 font-bold">
                Impact: 92% Touchless Invoice Rate
              </div>
            </div>

            {/* O2C Card */}
            <div className="p-8 rounded-2xl bg-white dark:bg-[#08152B] border border-slate-200 dark:border-white/10 shadow-xl space-y-4">
              <span className="text-xs font-mono font-bold text-purple-500 uppercase block">
                ORDER-TO-CASH (O2C)
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Intelligent Dispute Resolution &amp; Claim Clearance
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Detect deduction disputes instantaneously upon remittance advice ingestion. Bots evaluate customer contracts, proof-of-delivery signatures, and return authorizations to auto-clear valid short payments.
              </p>
              <div className="pt-2 text-xs font-mono text-purple-400 font-bold">
                Impact: 4x Faster Dispute Resolution
              </div>
            </div>

            {/* R2R Card */}
            <div className="p-8 rounded-2xl bg-white dark:bg-[#08152B] border border-slate-200 dark:border-white/10 shadow-xl space-y-4">
              <span className="text-xs font-mono font-bold text-cyan-500 uppercase block">
                RECORD-TO-REPORT (R2R)
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Continuous Financial Close Task Orchestration
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Automate period-end foreign exchange revaluations, intercompany reconciliation eliminations, and asset depreciation postings with automated verification against SAP Financial Closing Cockpit.
              </p>
              <div className="pt-2 text-xs font-mono text-cyan-400 font-bold">
                Impact: Close Period Reduced by 3.5 Days
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: CALL TO ACTION
          ========================================================================= */}
      <section className="py-20 bg-gradient-to-br from-[#120724] via-[#1A0A33] to-[#05020D] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-400/30 text-xs font-mono font-bold uppercase text-purple-300">
            <Zap className="w-3.5 h-3.5" />
            <span>PROCESS DISCOVERY ENGAGEMENT</span>
          </span>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Discover Your Enterprise Automation Potential <br />
            <span className="text-purple-400">With a 14-Day Signavio Assessment</span>
          </h2>

          <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Ingest live ERP event logs into SAP Signavio. Identify your top 5 high-impact automation candidates with concrete ROI projections before investing in bots.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenContact('Process Mining & Automation Assessment')}
              className="px-8 py-4 rounded-xl font-bold text-sm bg-purple-600 text-white hover:bg-purple-500 shadow-xl shadow-purple-600/30 transition-all flex items-center gap-2 group"
            >
              <span>Schedule 14-Day Signavio Discovery</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <Link
              to="/technology/sap-business-ai"
              className="px-6 py-4 rounded-xl font-semibold text-sm text-slate-300 hover:text-white border border-white/20 hover:border-white/40 transition-all"
            >
              <span>Explore SAP Business AI &rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
