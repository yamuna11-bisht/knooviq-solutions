import React, { useState } from 'react';
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
  Database
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
          HERO: High-Velocity Automation Pipeline Tracker
          ========================================================================= */}
      <section className="relative pt-28 sm:pt-32 pb-20 overflow-hidden bg-gradient-to-b from-[#140826] via-[#0D051A] to-[#040209] text-white">
        
        {/* Violet / Purple Glow */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-400/30 text-xs font-mono font-bold uppercase tracking-wider text-purple-300">
              <Workflow className="w-3.5 h-3.5" />
              <span>INTELLIGENT AUTOMATION &bull; PROCESS MINING &amp; RPA</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Mine Bottlenecks. Automate Workflows. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-sky-300">
                Accelerate Enterprise Velocity.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Combine data-driven process mining (SAP Signavio) with enterprise robotic process automation (SAP Build Process Automation) to eliminate friction and convert slow manual workflows into touchless operations.
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
