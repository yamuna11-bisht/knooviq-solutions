import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  ChevronRight,
  Search,
  FileText,
  Database,
  Layers,
  ShieldCheck,
  Zap,
  Building2,
  Lock,
  Compass,
  Cpu,
  HelpCircle,
  Network,
  Share2,
  FolderSync,
  Workflow,
  CheckCircle2,
  FileSearch,
  MessageSquare,
  Globe2,
  Boxes,
  Users2,
  Activity,
  GitBranch,
  ArrowUpRight,
  XCircle
} from 'lucide-react';

interface KnooviqAIInsightsPageProps {
  onOpenContact?: (service?: string) => void;
}

interface InquiryCase {
  id: string;
  question: string;
  category: string;
  badgeColor: string;
  response: string;
  sources: string[];
  keyTakeaway: string;
  actions: string[];
}

const INQUIRY_CASES: InquiryCase[] = [
  {
    id: 'update',
    question: '“What changed in our latest business update?”',
    category: 'Executive Briefing',
    badgeColor: 'bg-sky-100 text-[#0077B6] dark:bg-cyan-950 dark:text-cyan-300 border-sky-300 dark:border-cyan-500/40',
    response:
      'Cross-functional analysis highlights three key shifts: logistics lead times have stabilized across European corridors, vendor contract negotiations shifted toward Q4 terms, and operational priority moved to omnichannel fulfillment.',
    sources: ['Executive Operations Log', 'SCM Inventory Sync', 'Commercial Briefing'],
    keyTakeaway: 'Operational priorities pivot toward Q4 omnichannel fulfillment.',
    actions: ['Stabilized EU lead times', 'Q4 contract realignment', 'Omnichannel inventory priority']
  },
  {
    id: 'report',
    question: '“Help me understand the key points in this report.”',
    category: 'Document Synthesis',
    badgeColor: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 border-indigo-300 dark:border-indigo-500/40',
    response:
      'The audit confirms compliance across regulatory standards, with primary observations focusing on software license consolidation and streamlining cross-border customs declarations.',
    sources: ['Regulatory Audit 2026', 'Legal Master Registry', 'Procurement Schedule'],
    keyTakeaway: 'Full regulatory compliance maintained with software consolidation recommendations.',
    actions: ['100% regulatory pass', 'Consolidation opportunity flagged', 'Streamlined customs filing']
  },
  {
    id: 'decision',
    question: '“What information should I consider before this decision?”',
    category: 'Strategic Context',
    badgeColor: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border-amber-300 dark:border-amber-500/40',
    response:
      'Synthesizing historical supplier performance, current inventory buffer levels, and active customer delivery commitments suggests locking secondary distributor terms before month-end.',
    sources: ['SAP S/4HANA MM', 'CRM Pipeline Tracker', 'SLA Commitment Ledger'],
    keyTakeaway: 'Lock secondary distributor terms to safeguard customer delivery deadlines.',
    actions: ['Supplier risk evaluated', 'Buffer threshold verified', 'Lock secondary distributor SLA']
  },
  {
    id: 'summarize',
    question: '“Summarize what matters from these documents.”',
    category: 'Knowledge Harmonization',
    badgeColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-300 dark:border-emerald-500/40',
    response:
      'Unified synthesis: All 3 regional agreements standardize indemnification caps to 12 months, eliminate redundant audit clauses, and align billing cycles to net-45 terms.',
    sources: ['Commercial MSAs (EMEA & APAC)', 'Finance Master Terms', 'Legal Risk Registry'],
    keyTakeaway: 'Unified 12-month liability cap and aligned net-45 settlement terms.',
    actions: ['Harmonized liability cap', 'Removed redundant audits', 'Standardized net-45 payment terms']
  }
];

interface EnterpriseDomain {
  id: string;
  name: string;
  role: string;
  badge: string;
  contextContribution: string;
  icon: React.ComponentType<{ className?: string }>;
  connectedSystems: string[];
  keySignals: string[];
}

const ENTERPRISE_DOMAINS: EnterpriseDomain[] = [
  {
    id: 'finance',
    name: 'Finance',
    role: 'Financial Integrity & Cashflow',
    badge: 'Core Ledger',
    contextContribution: 'Provides real-time general ledger records, billing milestones, cash flow trajectories, and credit exposure limits.',
    icon: Database,
    connectedSystems: ['SAP FI-CO', 'Treasury Systems', 'Billing Engine'],
    keySignals: ['Live balance reconciliation', 'Milestone invoicing', 'Credit limit guards']
  },
  {
    id: 'sales',
    name: 'Sales',
    role: 'Revenue Pipeline & Accounts',
    badge: 'CRM Velocity',
    contextContribution: 'Correlates deal velocity, account histories, renewal timelines, and contractual customer delivery commitments.',
    icon: Users2,
    connectedSystems: ['Enterprise CRM', 'Pipeline Forecasts', 'Partner Portal'],
    keySignals: ['Opportunity momentum', 'Customer SLA terms', 'Territory allocations']
  },
  {
    id: 'operations',
    name: 'Operations',
    role: 'Supply Chain & Fulfillment',
    badge: 'SCM Grid',
    contextContribution: 'Monitors distribution network nodes, dispatch statuses, cross-dock transit, and inventory buffer replenishment.',
    icon: Boxes,
    connectedSystems: ['SAP S/4HANA MM', 'Warehouse WMS', 'Freight Logistics'],
    keySignals: ['Stock availability', 'Transit milestones', 'Depot capacity']
  },
  {
    id: 'procurement',
    name: 'Procurement',
    role: 'Vendor Governance & Contracts',
    badge: 'Supplier Hub',
    contextContribution: 'Tracks supplier master records, SLA covenants, active catalog pricing, and purchase order lifecycles.',
    icon: Building2,
    connectedSystems: ['Ariba / SRM', 'Vendor Catalogs', 'Contract Master'],
    keySignals: ['Vendor scorecards', 'Catalog rate cards', 'Indent allocations']
  },
  {
    id: 'hr',
    name: 'HR',
    role: 'Workforce & Organizational Policy',
    badge: 'People Ops',
    contextContribution: 'Harmonizes departmental roles, reporting lines, organizational policies, and workplace compliance guidelines.',
    icon: Users2,
    connectedSystems: ['SuccessFactors', 'HRIS Master', 'Role-Based Access'],
    keySignals: ['Role permissions', 'Compliance tracking', 'Workplace policies']
  },
  {
    id: 'documents',
    name: 'Documents',
    role: 'Unstructured Enterprise Content',
    badge: 'DMS Vault',
    contextContribution: 'Extracts semantic meaning from contracts, audits, technical specifications, and addendum documents.',
    icon: FileText,
    connectedSystems: ['Document DMS', 'Policy Repository', 'Legal Archives'],
    keySignals: ['Clause analysis', 'Version comparison', 'Addendum alignment']
  },
  {
    id: 'knowledge',
    name: 'Enterprise Knowledge',
    role: 'Institutional Memory & SOPs',
    badge: 'Wiki & SOPs',
    contextContribution: 'Preserves organizational best practices, technical playbooks, and verified historical problem resolutions.',
    icon: Compass,
    connectedSystems: ['Wiki & Knowledgebase', 'Engineering SOPs', 'Support Guidelines'],
    keySignals: ['Resolution playbooks', 'Engineering specs', 'Best practice index']
  },
  {
    id: 'processes',
    name: 'Business Processes',
    role: 'Workflows & Orchestration',
    badge: 'BTP Engine',
    contextContribution: 'Traces multi-step approvals, cross-department handoffs, audit checkpoints, and compliance sign-offs.',
    icon: Workflow,
    connectedSystems: ['SAP BTP Workflow', 'Approval Engine', 'Audit Trail'],
    keySignals: ['Active sign-off chains', 'Escalation paths', 'Audit logging']
  }
];

export const KnooviqAIInsightsPage: React.FC<KnooviqAIInsightsPageProps> = ({ onOpenContact }) => {
  const [activeInquiry, setActiveInquiry] = useState<InquiryCase>(INQUIRY_CASES[0]);
  const [activeDomain, setActiveDomain] = useState<EnterpriseDomain>(ENTERPRISE_DOMAINS[0]);
  const [activeTransformationStage, setActiveTransformationStage] = useState<number>(0);

  const transformationStages = [
    {
      stage: 'DISCOVER',
      stepNum: '01',
      title: 'Surface Hidden Information',
      desc: 'Connect to fragmented repositories across ERP, documents, emails, and operational logs to locate scattered facts and signals.',
      status: 'Unifying unstructured data signals across multi-cloud repositories',
      icon: FileSearch,
      accent: 'border-cyan-400 bg-cyan-50 dark:bg-cyan-950/60 text-[#0077B6] dark:text-cyan-300'
    },
    {
      stage: 'CONNECT',
      stepNum: '02',
      title: 'Map Contextual Relationships',
      desc: 'Build semantic connections between disparate records, resolving entities, dependencies, and business implications in real time.',
      status: 'Cross-referencing vendor terms against operational delivery commitments',
      icon: Network,
      accent: 'border-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300'
    },
    {
      stage: 'UNDERSTAND',
      stepNum: '03',
      title: 'Synthesize Actionable Clarity',
      desc: 'Transform complex business context into intuitive answers and verified confidence so leaders make sound decisions faster.',
      status: 'Delivering unified executive synthesis with zero guesswork',
      icon: Cpu,
      accent: 'border-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#050B17] text-slate-900 dark:text-slate-100 font-sans selection:bg-[#00A3E0] selection:text-white transition-colors duration-300 overflow-hidden">
      
      {/* =========================================================================
          SECTION 1 — HERO: SEE THE BIGGER PICTURE BEHIND YOUR BUSINESS DATA
          ========================================================================= */}
      <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 bg-gradient-to-b from-slate-50 via-white to-slate-50/70 dark:from-[#081226] dark:via-[#050B17] dark:to-[#081226] border-b border-slate-300/80 dark:border-cyan-500/20 overflow-hidden">
        
        {/* Subtle Ambient Aurora Light Spheres */}
        <div className="aurora-sphere-1 top-24 left-1/5 bg-[#00A3E0]/20 dark:bg-[#00A3E0]/25 pointer-events-none" />
        <div className="aurora-sphere-2 top-80 right-10 bg-[#6366F1]/15 dark:bg-[#6366F1]/22 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Headline & Value Proposition */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Strategic Pill Tag */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100/80 dark:bg-cyan-950/80 border border-cyan-300 dark:border-cyan-400/40 text-[#0077B6] dark:text-cyan-300 text-xs font-bold tracking-wide shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00A3E0] animate-ping" />
                <span className="font-bold text-slate-900 dark:text-white">Knooviq AI Insights</span>
                <span className="text-slate-400 dark:text-slate-500">|</span>
                <span className="text-[#0077B6] dark:text-cyan-300 font-semibold">Enterprise Discovery & Context</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12] font-display">
                See the Bigger Picture{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-[#0077B6] to-[#00A3E0] dark:from-white dark:via-cyan-200 dark:to-[#00A3E0]">
                  Behind Your Business Data
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed max-w-2xl font-normal">
                Knooviq AI Insights helps teams explore business information through natural language, connect knowledge 
                across systems, and uncover the context behind important questions.
              </p>

              {/* Hero CTA Group */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenContact ? onOpenContact('Knooviq AI Insights Demo') : null}
                  className="px-8 py-4 rounded-xl bg-[#0077B6] hover:bg-[#006296] text-white font-bold text-sm shadow-md hover:shadow-cyan-500/25 transition-all flex items-center gap-2 group cursor-pointer hover:scale-102"
                >
                  <span>Book a Demo</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="#information-to-understanding"
                  className="px-6 py-4 rounded-xl bg-white dark:bg-white/10 hover:bg-slate-100 dark:hover:bg-white/15 border-2 border-slate-300 dark:border-cyan-400/40 text-slate-900 dark:text-white text-sm font-bold transition-all flex items-center gap-2 shadow-sm"
                >
                  <span>Explore AI Insights</span>
                  <ChevronRight className="w-4 h-4 text-[#00A3E0]" />
                </a>
              </div>

              {/* Core Visual Story: Scattered Information -> Connected Knowledge -> Clear Understanding */}
              <div className="pt-6 border-t border-slate-300 dark:border-white/20">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3">
                  The Transformation of Knowledge
                </p>
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                  <span className="px-3 py-1.5 rounded-lg bg-white dark:bg-white/10 border border-slate-300 dark:border-white/20 shadow-xs">
                    Scattered Information
                  </span>
                  <span className="text-[#00A3E0] font-bold text-sm">&rarr;</span>
                  <span className="px-3 py-1.5 rounded-lg bg-white dark:bg-white/10 border border-slate-300 dark:border-white/20 shadow-xs">
                    Connected Knowledge
                  </span>
                  <span className="text-[#00A3E0] font-bold text-sm">&rarr;</span>
                  <span className="px-3 py-1.5 rounded-lg bg-cyan-100 dark:bg-cyan-950 text-[#0077B6] dark:text-cyan-300 border border-cyan-300 dark:border-cyan-400 font-bold shadow-xs">
                    Clear Understanding
                  </span>
                </div>
              </div>

            </div>

            {/* Right Column: Abstract Central AI Layer with Scattered & Connected Information Nodes */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-300/80 dark:border-cyan-500/40 bg-slate-950 group">
                <img
                  src="/images/ai_insights_hero.png"
                  alt="Advanced humanoid AI assistant projecting holographic contextual intelligence brain and digital data network"
                  className="w-full h-[520px] sm:h-[580px] lg:h-[620px] object-cover object-top select-none group-hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Floating Information Node 1: Unstructured Document */}
                <motion.div
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: [0, -6, 0] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-6 left-5 z-20 pointer-events-none max-w-[230px]"
                >
                  <div className="px-4 py-2.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-cyan-400/50 text-white text-xs font-semibold shadow-2xl flex items-center gap-2.5">
                    <FileText className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="truncate">Q3 Operational Summary</span>
                  </div>
                </motion.div>

                {/* Floating Information Node 2: Business Records */}
                <motion.div
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, y: [0, 6, 0] }}
                  transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                  className="absolute top-20 right-5 z-20 pointer-events-none max-w-[230px]"
                >
                  <div className="px-4 py-2.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-indigo-400/50 text-white text-xs font-semibold shadow-2xl flex items-center gap-2.5">
                    <Database className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span className="truncate">SAP Master Ledger Sync</span>
                  </div>
                </motion.div>

                {/* Floating Information Node 3: Policy & Compliance */}
                <motion.div
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, y: [0, -5, 0] }}
                  transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
                  className="absolute bottom-28 left-6 z-20 pointer-events-none max-w-[250px]"
                >
                  <div className="px-4 py-2.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-emerald-400/50 text-white text-xs font-semibold shadow-2xl flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="truncate">Global Policy & Compliance</span>
                  </div>
                </motion.div>

                {/* Central Connected Knowledge Synthesis Badge */}
                <div className="absolute bottom-6 inset-x-6 z-20">
                  <div className="p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border-2 border-cyan-400/40 text-white shadow-2xl space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold text-cyan-300 uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-cyan-400" />
                        Connected Contextual Intelligence
                      </span>
                      <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-400/30">
                        Active Synthesis
                      </span>
                    </div>
                    <p className="text-xs text-slate-200 leading-relaxed font-medium">
                      Scattered reports, ERP ledgers, and operational logs unified into clear, coherent answers.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — INFORMATION TO UNDERSTANDING (TRANSFORMATION)
          ========================================================================= */}
      <section id="information-to-understanding" className="py-20 sm:py-28 bg-white dark:bg-[#050B17] border-b border-slate-300/80 dark:border-cyan-500/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-white/10 border border-slate-300 dark:border-white/20 text-slate-800 dark:text-slate-200 text-xs font-bold">
              <FolderSync className="w-4 h-4 text-[#00A3E0]" />
              <span>Unified Knowledge Synthesis</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display">
              Business Information Is Everywhere.{' '}
              <span className="text-[#0077B6] dark:text-cyan-400">
                Understanding It Shouldn't Be Complicated.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
              Knooviq connects the context behind your information so teams can focus on what matters.
            </p>
          </div>

          {/* Transformation Stages Navigation (DISCOVER -> CONNECT -> UNDERSTAND) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {transformationStages.map((stage, idx) => {
              const Icon = stage.icon;
              const isActive = activeTransformationStage === idx;
              return (
                <motion.button
                  key={stage.stage}
                  onClick={() => setActiveTransformationStage(idx)}
                  whileHover={{ y: -3 }}
                  className={`p-6 rounded-2xl text-left transition-all duration-300 border-2 relative cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-br from-cyan-50 to-sky-50 dark:from-cyan-950/60 dark:to-slate-900 border-[#0077B6] dark:border-cyan-400 shadow-xl ring-2 ring-[#0077B6]/20'
                      : 'bg-slate-50 dark:bg-slate-900/80 border-slate-300 dark:border-white/15 hover:border-slate-400 dark:hover:border-cyan-400/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-bold tracking-wider px-3 py-1 rounded-md border ${
                      isActive
                        ? 'bg-[#0077B6] text-white border-[#0077B6]'
                        : 'bg-slate-200 dark:bg-white/10 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-white/10'
                    }`}>
                      {stage.stepNum} {stage.stage}
                    </span>
                    <Icon className={`w-5 h-5 ${isActive ? 'text-[#0077B6] dark:text-cyan-300' : 'text-slate-400'}`} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {stage.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                    {stage.desc}
                  </p>
                </motion.button>
              );
            })}
          </div>

          {/* Dynamic Transformation Visualization Container */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border-2 border-slate-700 dark:border-cyan-500/40 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Fragmented Source Inputs */}
              <div className="lg:col-span-5 space-y-3.5">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-cyan-300">
                    Enterprise Sources In Scope
                  </p>
                  <span className="text-[11px] font-bold text-slate-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/20">
                    5 Disparate Silos
                  </span>
                </div>

                <div className="space-y-3">
                  {[
                    { label: 'Unstructured Documents & PDFs', note: 'Contracts, specifications, RFP addendums', badge: 'Docs' },
                    { label: 'Core Business Systems (ERP & CRM)', note: 'SAP S/4HANA master files, pipeline records', badge: 'SAP Core' },
                    { label: 'Emails & Communications', note: 'Executive updates, vendor correspondence', badge: 'Threads' },
                    { label: 'Quarterly & Operational Reports', note: 'Audit logs, plant dispatch summaries', badge: 'Audits' },
                    { label: 'Enterprise Institutional Memory', note: 'SOPs, corporate guidelines, resolution history', badge: 'SOPs' }
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-slate-800/90 border-2 border-slate-700 dark:border-white/15 flex items-center justify-between hover:border-cyan-400/50 transition-colors"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-xs font-bold text-white">{item.label}</p>
                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-400/30">
                            {item.badge}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 font-medium mt-0.5">{item.note}</p>
                      </div>
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shrink-0 ml-2" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Center Pathway Indicator */}
              <div className="lg:col-span-2 flex flex-col items-center justify-center text-center py-4">
                <div className="w-14 h-14 rounded-full bg-cyan-500/20 border-2 border-cyan-400/60 flex items-center justify-center text-cyan-300 mb-2.5 shadow-lg shadow-cyan-500/20">
                  <Cpu className="w-7 h-7 animate-spin-slow" />
                </div>
                <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                  Knooviq Engine
                </span>
                <span className="text-xs text-slate-300 mt-1 font-medium">Semantic Graph</span>
              </div>

              {/* Right Column: Unified Knowledge Ecosystem */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-cyan-950/90 via-slate-900 to-slate-900 border-2 border-cyan-400/50 shadow-2xl space-y-5">
                  <div className="flex items-center justify-between border-b border-cyan-500/30 pb-3">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-cyan-300 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-cyan-400" />
                      Connected Knowledge Ecosystem
                    </span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-400/30">
                      Harmonized
                    </span>
                  </div>

                  <p className="text-sm text-slate-100 leading-relaxed font-semibold">
                    {transformationStages[activeTransformationStage].status}
                  </p>

                  <div className="pt-2 border-t border-white/15 space-y-2.5">
                    <div className="flex items-center gap-2.5 text-xs font-medium text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Contextual relationships mapped without manual tagging</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs font-medium text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Zero hallucination: grounded solely in verified enterprise truth</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs font-medium text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Instant clarity delivered in natural business language</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — ASK YOUR BUSINESS QUESTIONS (INTERACTIVE CONVERSATION)
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-slate-50/70 dark:bg-[#081226] border-b border-slate-300/80 dark:border-cyan-500/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-white/10 border border-slate-300 dark:border-white/20 text-slate-800 dark:text-slate-200 text-xs font-bold">
              <HelpCircle className="w-4 h-4 text-[#00A3E0]" />
              <span>Contextual Inquiry Studio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display">
              Ask Questions.{' '}
              <span className="text-[#0077B6] dark:text-cyan-400">
                Discover What Matters.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
              Explore business inquiries through a premium conversational interface grounded in unified enterprise context.
            </p>
          </div>

          {/* Inquiry Question Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {INQUIRY_CASES.map((item) => {
              const isSelected = activeInquiry.id === item.id;
              return (
                <motion.button
                  key={item.id}
                  onClick={() => setActiveInquiry(item)}
                  whileHover={{ y: -3 }}
                  className={`p-5 rounded-2xl text-left transition-all duration-300 border-2 cursor-pointer ${
                    isSelected
                      ? 'bg-white dark:bg-slate-800 border-[#0077B6] dark:border-cyan-400 shadow-xl ring-2 ring-[#0077B6]/25'
                      : 'bg-white dark:bg-slate-900/80 border-slate-300 dark:border-white/15 hover:border-slate-400 dark:hover:border-cyan-400/40'
                  }`}
                >
                  <span className={`text-[10px] uppercase tracking-wider font-extrabold px-2.5 py-0.5 rounded-md border inline-block mb-2 ${item.badgeColor}`}>
                    {item.category}
                  </span>
                  <p className="text-sm font-bold text-slate-900 dark:text-white line-clamp-2">
                    {item.question}
                  </p>
                </motion.button>
              );
            })}
          </div>

          {/* Premium Conversational Interactive Interface */}
          <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-[#050B17] border-2 border-slate-300 dark:border-cyan-500/40 shadow-2xl">
            <div className="space-y-6">
              
              {/* Step Flow Banner: ASK -> EXPLORE -> CONNECT -> UNDERSTAND */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-300 dark:border-white/15">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Synthesis Pipeline:
                </span>
                <div className="flex items-center gap-2 text-xs font-bold">
                  <span className="px-3 py-1 rounded-md bg-[#0077B6] text-white">ASK</span>
                  <span className="text-slate-400 font-bold text-sm">&rarr;</span>
                  <span className="px-3 py-1 rounded-md bg-cyan-600 text-white">EXPLORE</span>
                  <span className="text-slate-400 font-bold text-sm">&rarr;</span>
                  <span className="px-3 py-1 rounded-md bg-indigo-600 text-white">CONNECT</span>
                  <span className="text-slate-400 font-bold text-sm">&rarr;</span>
                  <span className="px-3 py-1 rounded-md bg-emerald-600 text-white">UNDERSTAND</span>
                </div>
              </div>

              {/* User Inquiry Message Bubble */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/15 flex items-center justify-center text-slate-900 dark:text-white font-extrabold text-xs shrink-0 border border-slate-300 dark:border-white/20 shadow-xs">
                  YOU
                </div>
                <div className="p-5 rounded-2xl rounded-tl-none bg-slate-100 dark:bg-slate-900 border-2 border-slate-300 dark:border-white/15 text-slate-900 dark:text-white max-w-2xl shadow-xs">
                  <p className="text-base font-bold">
                    {activeInquiry.question}
                  </p>
                </div>
              </div>

              {/* AI Contextual Insight Response Bubble */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0077B6] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-lg border border-sky-300">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div className="space-y-4 flex-1">
                  <div className="p-6 sm:p-7 rounded-2xl rounded-tl-none bg-gradient-to-br from-cyan-50/70 via-white to-sky-50/40 dark:from-cyan-950/50 dark:via-[#0B1528] dark:to-slate-900 border-2 border-cyan-300 dark:border-cyan-500/40 text-slate-900 dark:text-slate-100 shadow-md space-y-4">
                    
                    <div className="flex items-center justify-between border-b border-cyan-200 dark:border-white/15 pb-3">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-[#0077B6] dark:text-cyan-300 flex items-center gap-1.5">
                        <Cpu className="w-4 h-4 text-[#00A3E0]" />
                        Knooviq AI Insight Synthesis
                      </span>
                      <span className="text-xs text-slate-700 dark:text-slate-300 font-bold bg-white dark:bg-white/10 px-2.5 py-0.5 rounded-full border border-slate-300 dark:border-white/10">
                        Multi-System Harmonization
                      </span>
                    </div>

                    <p className="text-base leading-relaxed text-slate-900 dark:text-slate-100 font-medium">
                      {activeInquiry.response}
                    </p>

                    {/* Actionable Points */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2">
                      {activeInquiry.actions.map((act, aIdx) => (
                        <div
                          key={aIdx}
                          className="p-2.5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-300 dark:border-white/15 flex items-center gap-2"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                            {act}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Verified Enterprise Grounding Sources */}
                    <div className="pt-3 border-t border-slate-300 dark:border-white/15">
                      <p className="text-xs font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                        Synthesized Enterprise Sources:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {activeInquiry.sources.map((src, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-white/10 border-2 border-slate-300 dark:border-white/20 text-xs text-slate-800 dark:text-slate-200 font-bold shadow-xs"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#00A3E0]" />
                            {src}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Highlight Callout */}
                  <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900 border-2 border-slate-300 dark:border-white/15 flex items-center justify-between text-xs text-slate-700 dark:text-slate-200">
                    <span className="font-extrabold text-slate-900 dark:text-white uppercase tracking-wider">Core Takeaway:</span>
                    <span className="font-semibold text-sm italic text-[#0077B6] dark:text-cyan-300">{activeInquiry.keyTakeaway}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — CONNECTED BUSINESS CONTEXT
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white dark:bg-[#050B17] border-b border-slate-300/80 dark:border-cyan-500/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-white/10 border border-slate-300 dark:border-white/20 text-slate-800 dark:text-slate-200 text-xs font-bold">
              <Network className="w-4 h-4 text-[#00A3E0]" />
              <span>Enterprise Topology</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display">
              Connect the Context{' '}
              <span className="text-[#0077B6] dark:text-cyan-400">
                Behind Every Question
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
              Surround your business questions with the holistic reality of your entire enterprise footprint.
            </p>
          </div>

          {/* Three Strategic Core Principles: Connected, Contextual, Clear */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Connected',
                desc: 'Bring relevant information together across the business without creating duplicate copies or data fragmentation.',
                icon: Network,
                color: 'text-[#0077B6] dark:text-cyan-300',
                border: 'border-cyan-300 dark:border-cyan-500/40'
              },
              {
                title: 'Contextual',
                desc: 'Understand every record in direct relation to the question being asked, weighting business relevance accurately.',
                icon: Compass,
                color: 'text-indigo-600 dark:text-indigo-300',
                border: 'border-indigo-300 dark:border-indigo-500/40'
              },
              {
                title: 'Clear',
                desc: 'Present complex multi-system business information in an intuitive, natural format that people can act upon with confidence.',
                icon: Sparkles,
                color: 'text-emerald-600 dark:text-emerald-300',
                border: 'border-emerald-300 dark:border-emerald-500/40'
              }
            ].map((col, idx) => {
              const Icon = col.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  className={`p-7 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border-2 ${col.border} space-y-3.5 shadow-md`}
                >
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-white/10 border border-slate-300 dark:border-white/20 flex items-center justify-center shadow-sm">
                    <Icon className={`w-6 h-6 ${col.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {col.title}
                  </h3>
                  <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                    {col.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Connected Network Interactive Showcase */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border-2 border-slate-700 dark:border-cyan-500/40 shadow-2xl relative">
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-400/40 inline-block">
                Many Sources &rarr; Knooviq AI Insights &rarr; One Connected Understanding
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Unified Context Network
              </h3>
              <p className="text-sm text-slate-200 font-normal">
                Select an enterprise domain to explore how Knooviq AI synthesizes real-time context.
              </p>
            </div>

            {/* 8 Enterprise Domain Nodes */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {ENTERPRISE_DOMAINS.map((domain) => {
                const Icon = domain.icon;
                const isSelected = activeDomain.id === domain.id;
                return (
                  <motion.button
                    key={domain.id}
                    onClick={() => setActiveDomain(domain)}
                    whileHover={{ scale: 1.02 }}
                    className={`p-4 rounded-xl text-left transition-all border-2 cursor-pointer ${
                      isSelected
                        ? 'bg-cyan-950 border-cyan-400 text-white shadow-xl ring-2 ring-cyan-400/50'
                        : 'bg-slate-800/80 border-slate-700 text-slate-200 hover:border-cyan-400/50 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Icon className={`w-4 h-4 ${isSelected ? 'text-cyan-300' : 'text-slate-300'}`} />
                        <span className="text-xs font-bold">{domain.name}</span>
                      </div>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-cyan-300 font-bold">
                        {domain.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 truncate font-medium">{domain.role}</p>
                  </motion.button>
                );
              })}
            </div>

            {/* Central Node Active Deep-Dive Box */}
            <div className="p-7 rounded-2xl bg-slate-800/90 border-2 border-cyan-400/40 backdrop-blur-md space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-7 space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/20 text-cyan-300 text-xs font-bold border border-cyan-400/30">
                    <span>Domain: {activeDomain.name}</span>
                    <span>&bull;</span>
                    <span>{activeDomain.role}</span>
                  </div>
                  <h4 className="text-xl font-bold text-white">
                    Contextual Contribution to AI Insights
                  </h4>
                  <p className="text-sm text-slate-200 leading-relaxed font-normal">
                    {activeDomain.contextContribution}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {activeDomain.keySignals.map((sig, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-lg bg-white/10 text-xs text-cyan-200 font-semibold border border-white/15"
                      >
                        &bull; {sig}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-3 border-t lg:border-t-0 lg:border-l border-white/20 pt-4 lg:pt-0 lg:pl-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                    Synchronized Enterprise Systems
                  </p>
                  <div className="space-y-2">
                    {activeDomain.connectedSystems.map((sys, idx) => (
                      <div
                        key={idx}
                        className="px-3.5 py-2 rounded-lg bg-white/10 border border-white/20 text-xs text-white font-bold flex items-center justify-between"
                      >
                        <span>{sys}</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          BEFORE VS AFTER COMPARISON TABLE: DECISION INTELLIGENCE (COMPACT)
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-slate-100/70 dark:bg-[#060D1D] border-t-2 border-slate-300 dark:border-cyan-500/25 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-8 space-y-2.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border-2 border-slate-300 dark:border-cyan-500/35 bg-white dark:bg-[#070E1C] shadow-xs">
              <Sparkles className="w-3 h-3 text-[#00A3E0]" />
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0077B6] dark:text-cyan-300">
                Decision Intelligence
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
              Before vs After{' '}
              <span className="bg-gradient-to-r from-[#0077B6] to-[#00A3E0] bg-clip-text text-transparent">
                Knooviq AI Insights
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-normal leading-relaxed">
              Compare fragmented legacy reporting with a unified, context-aware intelligence fabric that explains the true reasons behind operational changes.
            </p>
          </div>

          {/* Comparison Grid (Side-by-Side) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
            
            {/* Card 1: BEFORE — Traditional Reporting & Siloed BI */}
            <div className="rounded-2xl p-5 sm:p-6 bg-white dark:bg-[#070E1C] border-2 border-rose-300 dark:border-rose-900/50 shadow-md flex flex-col justify-between space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/10">
                  <span className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-400 border border-rose-300 dark:border-rose-800">
                    Before • Siloed BI & Disconnected Data
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                    Legacy Approach
                  </span>
                </div>

                <div className="space-y-0.5">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    Descriptive, Blind & Reactive
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Siloed departmental charts that show numbers without revealing the root cause.
                  </p>
                </div>

                <div className="space-y-2 pt-1">
                  {[
                    {
                      title: 'Disconnected Departmental Silos',
                      desc: 'Supply chain, finance, and sales operate in separate software, forcing leaders to manually merge contradictory spreadsheets.'
                    },
                    {
                      title: 'Descriptive-Only Telemetry',
                      desc: 'Standard reports merely confirm past events but cannot explain why freight expenditures escalated or which depots created bottlenecks.'
                    },
                    {
                      title: 'Buried Contract Commitments',
                      desc: 'Critical vendor addendums, rate escalations, and SLA penalties remain locked inside unindexed PDFs until discrepancies emerge.'
                    },
                    {
                      title: 'Protracted Investigation Cycles',
                      desc: 'Diagnosing the root cause of regional delivery delays requires weeks of inter-departmental email chains and manual cross-checks.'
                    },
                    {
                      title: 'Reactive Leadership Decisions',
                      desc: 'Corrective commercial interventions happen weeks late because underlying operational insights are delayed by batch processing.'
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-2 sm:p-2.5 rounded-xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200/60 dark:border-rose-900/30">
                      <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <div className="leading-snug">
                        <span className="text-xs font-bold text-slate-900 dark:text-white">{item.title}: </span>
                        <span className="text-xs text-slate-700 dark:text-slate-300">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 dark:border-white/10 text-[11px] font-medium text-slate-500 dark:text-slate-400">
                Result: Unexplained operational variances, slow leadership alignment, and lingering supply chain blindspots.
              </div>
            </div>

            {/* Card 2: AFTER — With Knooviq AI Insights */}
            <div className="rounded-2xl p-5 sm:p-6 bg-white dark:bg-[#070E1C] border-2 border-cyan-400 dark:border-cyan-400/60 shadow-lg shadow-cyan-500/10 flex flex-col justify-between space-y-4 relative overflow-hidden">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/10">
                  <span className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-cyan-100/90 dark:bg-cyan-950 text-[#0077B6] dark:text-cyan-300 border border-cyan-300 dark:border-cyan-400/50">
                    After • With Knooviq AI Insights
                  </span>
                  <span className="text-[11px] font-semibold text-[#00A3E0] dark:text-cyan-400">
                    Contextual Fabric
                  </span>
                </div>

                <div className="space-y-0.5">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    Unified, Diagnostic & Proactive
                  </h3>
                  <p className="text-xs text-[#0077B6] dark:text-cyan-300 font-medium">
                    Multi-system context harmonized to surface immediate root causes and verified guidance.
                  </p>
                </div>

                <div className="space-y-2 pt-1">
                  {[
                    {
                      title: 'Unified Semantic Knowledge Fabric',
                      desc: 'Connects ERP ledgers, CRM pipelines, and warehouse telemetry into one harmonious business context graph.'
                    },
                    {
                      title: 'Causal Understanding in Plain Language',
                      desc: 'Asking “Why did freight costs increase?” instantly decomposes fuel surcharges, port congestion, and spot rate trade-offs.'
                    },
                    {
                      title: 'Proactive Contract & Clause Surfacing',
                      desc: 'Autonomous scanning flags impending vendor expiration windows and milestone addendums before financial impact occurs.'
                    },
                    {
                      title: 'Instant Multi-Depot Diagnostics',
                      desc: 'Traces stock variances directly back to upstream port dwell times and carrier tenders in a single coherent explanation.'
                    },
                    {
                      title: 'Verified Decision Confidence',
                      desc: 'Executive summaries fully grounded in verified ERP master records and official documentation with zero hallucinations.'
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-2 sm:p-2.5 rounded-xl bg-cyan-50/50 dark:bg-cyan-950/20 border border-cyan-400/30">
                      <CheckCircle2 className="w-4 h-4 text-[#00A3E0] dark:text-cyan-400 shrink-0 mt-0.5" />
                      <div className="leading-snug">
                        <span className="text-xs font-bold text-slate-900 dark:text-white">{item.title}: </span>
                        <span className="text-xs text-slate-700 dark:text-slate-200">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 dark:border-white/10 text-[11px] font-semibold text-[#0077B6] dark:text-cyan-300">
                Outcome: Instant root-cause clarity, synchronized cross-department decisions, and audit-grade trust.
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5 — FINAL CTA: TURN INFORMATION INTO CONFIDENCE
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-white via-slate-50 to-sky-50/60 dark:from-[#050B17] dark:via-[#081226] dark:to-[#050B17] relative overflow-hidden">
        
        {/* Ambient Glow */}
        <div className="aurora-sphere-1 -bottom-20 left-1/3 bg-[#00A3E0]/20 dark:bg-[#00A3E0]/25 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 dark:bg-cyan-950/80 border border-cyan-300 dark:border-cyan-400/40 text-[#0077B6] dark:text-cyan-300 text-xs font-bold tracking-wide shadow-sm">
            <Sparkles className="w-4 h-4 text-[#00A3E0]" />
            <span>Turn Information into Confidence</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display leading-tight max-w-3xl mx-auto">
            Turn Information into Confidence.
          </h2>

          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed max-w-2xl mx-auto font-normal">
            Knooviq AI Insights helps teams move beyond searching for information — giving them the context 
            and clarity they need to understand what matters.
          </p>

          {/* Final CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenContact ? onOpenContact('Knooviq AI Insights Consultation') : null}
              className="px-8 py-4 rounded-xl bg-[#0077B6] hover:bg-[#006296] text-white font-bold text-sm shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center gap-2 group cursor-pointer hover:scale-102"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <Link
              to="/products/knooviq-ai-consultant"
              className="px-6 py-4 rounded-xl bg-white dark:bg-white/10 hover:bg-slate-100 dark:hover:bg-white/15 border-2 border-slate-300 dark:border-cyan-400/40 text-slate-900 dark:text-white text-sm font-bold transition-all flex items-center gap-2 shadow-sm"
            >
              <span>Discover Knooviq AI</span>
              <ChevronRight className="w-4 h-4 text-[#00A3E0]" />
            </Link>
          </div>

          {/* Visual Progression Chain: Information -> Context -> Understanding -> Confidence */}
          <div className="pt-10 border-t border-slate-300 dark:border-white/20 max-w-xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3">
              The Path to Certainty
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
              <span className="px-3.5 py-1.5 rounded-lg bg-white dark:bg-white/10 border border-slate-300 dark:border-white/20 shadow-xs">
                Information
              </span>
              <span className="text-[#00A3E0] font-bold text-sm">&rarr;</span>
              <span className="px-3.5 py-1.5 rounded-lg bg-white dark:bg-white/10 border border-slate-300 dark:border-white/20 shadow-xs">
                Context
              </span>
              <span className="text-[#00A3E0] font-bold text-sm">&rarr;</span>
              <span className="px-3.5 py-1.5 rounded-lg bg-white dark:bg-white/10 border border-slate-300 dark:border-white/20 shadow-xs">
                Understanding
              </span>
              <span className="text-[#00A3E0] font-bold text-sm">&rarr;</span>
              <span className="px-3.5 py-1.5 rounded-lg bg-cyan-100 dark:bg-cyan-950 text-[#0077B6] dark:text-cyan-300 border border-cyan-300 dark:border-cyan-400 font-bold shadow-xs">
                Confidence
              </span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
