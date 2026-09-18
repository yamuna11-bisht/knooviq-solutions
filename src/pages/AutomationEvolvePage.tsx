import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GitMerge,
  CheckCircle2,
  ArrowRight,
  Database,
  Cpu,
  Layers,
  ChevronRight,
  ChevronLeft,
  Server,
  Zap,
  Lock,
  Workflow,
  Sparkles,
  Sliders,
  Table,
  FileCheck,
  RefreshCw,
  Clock,
  ShieldCheck,
  AlertCircle,
  FileSpreadsheet,
  Users2,
  FileText,
  UserCheck,
  Building2,
  Landmark,
  Boxes,
  UserPlus
} from 'lucide-react';

interface AutomationEvolvePageProps {
  onOpenContact?: (service?: string) => void;
}

export const AutomationEvolvePage: React.FC<AutomationEvolvePageProps> = ({ onOpenContact }) => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const workflowSteps = [
    {
      step: 1,
      phase: 'Phase Alpha',
      roman: 'I',
      title: 'Digital Form Initiation',
      badge: 'Responsive Form',
      desc: 'Business stakeholders initiate master data or operational requests through intuitive web forms with real-time field validation.'
    },
    {
      step: 2,
      phase: 'Phase Beta',
      roman: 'II',
      title: 'Dynamic Routing & Stewards',
      badge: 'Multi-Tier Logic',
      desc: 'Requests route intelligently through departmental data stewards, business unit heads, and compliance gatekeepers based on organization rules.'
    },
    {
      step: 3,
      phase: 'Phase Gamma',
      roman: 'III',
      title: 'Parallel Review & Sign-Off',
      badge: 'Audit Signatures',
      desc: 'Stakeholders review enriched fields, attach statutory documents, and provide cryptographic digital approvals with full version lineage.'
    },
    {
      step: 4,
      phase: 'Phase Delta',
      roman: 'IV',
      title: 'Autonomous SAP Posting',
      badge: 'Direct Clean Core',
      desc: 'Upon final executive approval, the validated record is automatically written directly to SAP S/4HANA or ECC with zero manual intervention.'
    }
  ];

  const frictionPoints = [
    {
      title: 'Fragmented Email & Paper Approvals',
      description: 'Critical master data creation requests lost in scattered email threads, spreadsheets, and manual paper sign-offs.',
      impact: 'Governance Blindspots'
    },
    {
      title: 'Dirty Master Data Contamination',
      description: 'Lack of upstream field-level validation leading to incorrect tax codes, duplicate vendor entries, and faulty material configurations in SAP.',
      impact: 'Upstream Errors'
    },
    {
      title: 'Slow SLA Cycle Times',
      description: 'New product rollouts and supplier onboarding stalled for extensive periods due to missing sign-offs and opaque approval routing status.',
      impact: 'Agility Bottlenecks'
    },
    {
      title: 'Stringent Regulatory Non-Compliance',
      description: 'Inability to provide unified, time-stamped audit trails to external auditors during statutory compliance inspections.',
      impact: 'Audit Vulnerability'
    }
  ];

  const coreCapabilities = [
    {
      icon: FileText,
      title: 'Dynamic No-Code Web Forms',
      category: 'User Experience',
      description: 'Construct responsive, enterprise-branded digital forms with intelligent conditional logic, drop-down lookups, and mandatory constraints.'
    },
    {
      icon: GitMerge,
      title: 'Visual Workflow Orchestration',
      category: 'Process Automation',
      description: 'Model intricate approval routes, parallel sign-off branches, fallback escalation paths, and automated reminders visually.'
    },
    {
      icon: Database,
      title: 'Master Data Governance (MDG)',
      category: 'Data Integrity',
      description: 'Maintain pristine records across Material Master, Business Partner, Customer, Vendor, General Ledger, and Fixed Assets.'
    },
    {
      icon: ShieldCheck,
      title: 'Full Audit Trail & Lineage',
      category: 'Regulatory Compliance',
      description: 'Capture every keystroke, status change, timestamp, and digital signature in an immutable, tamper-evident governance ledger.'
    },
    {
      icon: Cpu,
      title: 'Seamless SAP Integration',
      category: 'Clean Core Architecture',
      description: 'Direct bilateral communication with SAP S/4HANA Cloud and ECC using certified BAPIs, standard RFCs, and modern OData APIs.'
    },
    {
      icon: Users2,
      title: 'Collaborative Data Stewardship',
      category: 'Cross-Functional Control',
      description: 'Divide record enrichment across finance, supply chain, and operations with segmented role-specific field editing permissions.'
    }
  ];

  const functionalUseCases = [
    {
      icon: Boxes,
      title: 'Material Master Governance',
      subtitle: 'Supply Chain Operations',
      description: 'Enforce structured multi-plant material creation, bill of materials updates, and warehouse valuation extensions with mandatory data steward reviews prior to SAP commit.',
      tags: ['Plant Extensions', 'Bill of Materials', 'Storage Views']
    },
    {
      icon: UserPlus,
      title: 'Vendor & Customer Onboarding',
      subtitle: 'Commercial Partner Management',
      description: 'Streamline business partner onboarding with dynamic tax identification checks, banking verification attachments, and automated compliance screening.',
      tags: ['Business Partners', 'Tax Validation', 'Banking Verification']
    },
    {
      icon: Landmark,
      title: 'Financial Accruals & CapEx',
      subtitle: 'Corporate Finance Control',
      description: 'Coordinate capital expenditure requests, asset capitalization, and journal voucher approvals across authorized cost centers with complete delegation matrices.',
      tags: ['CapEx Approvals', 'Asset Capitalization', 'Voucher Review']
    },
    {
      icon: Building2,
      title: 'Cross-Entity Organizational Setup',
      subtitle: 'Corporate Administration',
      description: 'Manage legal entity expansions, cost center activations, and company code assignments through standardized multi-stakeholder governance workflows.',
      tags: ['Entity Expansion', 'Cost Center Assignment', 'Corporate Structuring']
    }
  ];

  const governancePillars = [
    {
      icon: Lock,
      title: 'Cryptographic Digital Approvals',
      badge: 'Audit Readiness',
      description: 'Every workflow step, approval, rejection, and modification is cryptographically signed, timestamped, and cataloged in an unalterable governance record.'
    },
    {
      icon: ShieldCheck,
      title: 'Field-Level Role Segregation',
      badge: 'Separation of Duties',
      description: 'Strict role partitioning ensures procurement enters purchasing data, finance supplies tax configurations, and logistics establishes transport attributes without overlap.'
    },
    {
      icon: Server,
      title: 'Certified Clean Core SAP Architecture',
      badge: 'Zero Custom ABAP',
      description: 'Standard BAPI, RFC, and OData connectivity protects your SAP core from custom modifications, eliminating technical debt during S/4HANA cloud upgrades.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#050B17] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      {/* =========================================================================
          SECTION 1: HERO SECTION (With High-Resolution Image & Professional Look)
          ========================================================================= */}
      <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-24 overflow-hidden border-b-2 border-slate-200 dark:border-slate-800 bg-gradient-to-b from-slate-50 via-white to-slate-50/70 dark:from-[#050B17] dark:via-[#070E1C] dark:to-[#050B17]">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-purple-500/15 dark:bg-purple-500/20 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#00A3E0]/15 dark:bg-[#00A3E0]/20 blur-[110px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Heading & Executive Typography */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="lg:col-span-6 space-y-6 text-center lg:text-left"
            >
              {/* Strategic Suite Pill Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 dark:bg-purple-950/40 border-2 border-purple-200 dark:border-purple-800/80 text-xs text-purple-700 dark:text-purple-300 font-semibold shadow-xs">
                <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                <span className="font-semibold text-slate-900 dark:text-white font-sans">Knooviq Automation Suite</span>
                <span className="text-slate-300 dark:text-slate-600">|</span>
                <span className="text-purple-600 dark:text-purple-400 font-semibold font-sans">Automation Evolve</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.18] font-display">
                Digitize Complex SAP Workflows with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-purple-900 to-purple-600 dark:from-white dark:via-purple-200 dark:to-purple-400">
                  Dynamic Forms &amp; Governance.
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-2xl font-sans">
                Replace slow manual paper and email routing with responsive enterprise web forms, multi-tiered data steward approvals, and direct automated SAP postings without custom ABAP development.
              </p>

              {/* Hero CTA Group */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                <button
                  onClick={() => onOpenContact?.('Automation Evolve Consultation')}
                  className="px-7 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm shadow-md shadow-purple-500/20 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2.5 group cursor-pointer"
                >
                  <span>Request Live Evolve Demo</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="#evolve-architecture"
                  className="px-6 py-3.5 rounded-xl bg-white dark:bg-[#0B1528] hover:bg-slate-50 dark:hover:bg-[#0E1A33] border-2 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-sm font-semibold transition-all flex items-center gap-2 shadow-xs hover:-translate-y-0.5"
                >
                  <span>Explore Workflow Pipeline</span>
                  <ArrowRight className="w-4 h-4 text-purple-500" />
                </a>
              </div>

              {/* Executive Capability Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t-2 border-slate-300 dark:border-slate-700/80 text-left">
                <div className="group/item bg-white dark:bg-[#070E1C] p-3.5 rounded-xl border-2 border-slate-300 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5">
                  <div className="w-7 h-7 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-2 group-hover/item:scale-110 transition-transform">
                    <FileText className="h-4 w-4" />
                  </div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider font-mono">Experience</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5 font-display">No-Code Forms</p>
                  <p className="text-[11px] text-purple-600 dark:text-purple-400 font-medium mt-0.5 font-sans">Responsive Design</p>
                </div>
                <div className="group/item bg-white dark:bg-[#070E1C] p-3.5 rounded-xl border-2 border-slate-300 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-2 group-hover/item:scale-110 transition-transform">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider font-mono">Governance</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5 font-display">Data Stewards</p>
                  <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium mt-0.5 font-sans">Field Validation</p>
                </div>
                <div className="group/item bg-white dark:bg-[#070E1C] p-3.5 rounded-xl border-2 border-slate-300 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5">
                  <div className="w-7 h-7 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-2 group-hover/item:scale-110 transition-transform">
                    <GitMerge className="h-4 w-4" />
                  </div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider font-mono">Routing</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5 font-display">Multi-Tier Mesh</p>
                  <p className="text-[11px] text-blue-600 dark:text-blue-400 font-medium mt-0.5 font-sans">Dynamic Logic</p>
                </div>
                <div className="group/item bg-white dark:bg-[#070E1C] p-3.5 rounded-xl border-2 border-slate-300 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5">
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/10 text-[#00A3E0] flex items-center justify-center mb-2 group-hover/item:scale-110 transition-transform">
                    <Cpu className="h-4 w-4" />
                  </div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider font-mono">Direct Sync</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5 font-display">SAP Clean Core</p>
                  <p className="text-[11px] text-[#0077B6] dark:text-cyan-400 font-medium mt-0.5 font-sans">Automated BAPI</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: High-Resolution Dedicated Enterprise Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
              className="lg:col-span-6 relative flex justify-center"
            >
              {/* Ambient Breathing Backlight Aura */}
              <motion.div
                animate={{ opacity: [0.35, 0.7, 0.35], scale: [0.98, 1.02, 0.98] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -inset-2 bg-gradient-to-r from-purple-600/30 via-cyan-500/20 to-blue-600/30 rounded-2xl blur-xl pointer-events-none"
              />

              {/* Floating Animation Container */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="w-full max-w-lg relative rounded-2xl p-1 bg-gradient-to-b from-purple-500/30 via-slate-300/40 to-blue-500/20 dark:from-purple-500/40 dark:via-cyan-500/20 dark:to-transparent shadow-2xl group"
              >
                {/* Visual Frame with Dark Defined Borders */}
                <div className="relative rounded-[14px] bg-[#070E1C] border-2 border-slate-300 dark:border-slate-700 overflow-hidden shadow-2xl h-[460px] sm:h-[520px] lg:h-[580px]">
                  
                  {/* User-Provided Interactive Workflow Image */}
                  <img
                    src="/images/automation_evolve_workflow.png"
                    alt="Knooviq Automation Evolve - Interactive Workflow Architecture & Master Data Governance"
                    className="w-full h-full object-cover object-top select-none group-hover:scale-[1.02] transition-transform duration-700"
                  />

                  {/* Top Floating Live Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 z-30">
                    <span className="px-3 py-1.5 rounded-full text-[10px] font-mono font-bold bg-[#070E1C]/90 backdrop-blur-md text-cyan-300 border-2 border-cyan-500/40 shadow-lg flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      PROCESS ORCHESTRATION ACTIVE
                    </span>
                  </div>

                  {/* Bottom Floating Telemetry Strip */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2 p-3 rounded-xl bg-[#070E1C]/90 backdrop-blur-md border-2 border-slate-700 shadow-xl text-xs z-30">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                      <div>
                        <div className="font-bold text-white text-[11px] font-sans">Master Data Governance Verified</div>
                        <div className="text-[9px] text-slate-400 font-mono">Multi-Tier Approvals &amp; SAP Clean Core Commit</div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                      GOVERNED
                    </span>
                  </div>

                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: OPERATIONAL REALITIES (Workflow Bottlenecks)
          ========================================================================= */}
      <section id="evolve-friction" className="py-20 bg-white dark:bg-[#070E1C] border-b-2 border-slate-300 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400">
              Operational Realities
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              The Critical Friction of Manual Enterprise Routing
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed">
              Why relying on unstructured emails, spreadsheets, and manual approvals causes enterprise gridlock.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {frictionPoints.map((pt, idx) => (
              <motion.div
                key={pt.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="rounded-2xl p-6 bg-slate-50 dark:bg-[#0B1528] border-2 border-slate-300 dark:border-slate-700 flex flex-col justify-between hover:border-purple-500 dark:hover:border-purple-500 transition-all shadow-xs hover:shadow-md"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center">
                    <AlertCircle className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">
                    {pt.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                    {pt.description}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t-2 border-slate-200 dark:border-slate-800 text-[11px] font-sans text-slate-500 dark:text-slate-400">
                  <span className="text-red-500 dark:text-red-400 font-semibold font-mono">Friction:</span> {pt.impact}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: EXECUTION PIPELINE RUNTIME (Interactive 4-Stage Mesh)
          ========================================================================= */}
      <section id="evolve-architecture" className="py-20 sm:py-28 bg-[#F8FAFC] dark:bg-[#050B17] border-b-2 border-slate-300 dark:border-slate-800 relative overflow-hidden">
        <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-600/15 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#00A3E0]/10 dark:bg-[#00A3E0]/15 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400">
              Interactive Workflow Mesh
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              The Automation Evolve Execution Pipeline
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed">
              Step through the four-stage lifecycle of form intake, intelligent routing, multi-stakeholder approval, and direct SAP commit.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Interactive Stage Cards */}
            <div className="lg:col-span-5 space-y-3.5">
              {workflowSteps.map((step, idx) => {
                const isActive = activeStep === step.step;
                const stepThemes = [
                  {
                    borderActive: 'border-purple-500 dark:border-purple-400',
                    bgActive: 'bg-gradient-to-r from-purple-500/15 via-purple-500/5 to-white dark:to-[#070E1C] border-l-4 border-l-purple-500',
                    iconActive: 'bg-purple-600 text-white shadow-lg shadow-purple-500/30',
                    badgeActive: 'text-purple-600 dark:text-purple-400',
                    tagBg: 'bg-purple-500/15 text-purple-700 dark:text-purple-300 border-purple-500/30'
                  },
                  {
                    borderActive: 'border-blue-500 dark:border-blue-400',
                    bgActive: 'bg-gradient-to-r from-blue-500/15 via-blue-500/5 to-white dark:to-[#070E1C] border-l-4 border-l-blue-500',
                    iconActive: 'bg-blue-600 text-white shadow-lg shadow-blue-500/30',
                    badgeActive: 'text-blue-600 dark:text-blue-400',
                    tagBg: 'bg-blue-500/15 text-blue-700 dark:text-blue-300 border-blue-500/30'
                  },
                  {
                    borderActive: 'border-emerald-500 dark:border-emerald-400',
                    bgActive: 'bg-gradient-to-r from-emerald-500/15 via-emerald-500/5 to-white dark:to-[#070E1C] border-l-4 border-l-emerald-500',
                    iconActive: 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/30',
                    badgeActive: 'text-emerald-600 dark:text-emerald-400',
                    tagBg: 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30'
                  },
                  {
                    borderActive: 'border-cyan-500 dark:border-cyan-400',
                    bgActive: 'bg-gradient-to-r from-cyan-500/15 via-cyan-500/5 to-white dark:to-[#070E1C] border-l-4 border-l-cyan-500',
                    iconActive: 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30',
                    badgeActive: 'text-cyan-600 dark:text-cyan-400',
                    tagBg: 'bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border-cyan-500/30'
                  }
                ][idx % 4];

                return (
                  <div
                    key={step.step}
                    onClick={() => setActiveStep(step.step)}
                    className={`cursor-pointer rounded-2xl p-4 sm:p-5 transition-all duration-300 border-2 ${
                      isActive
                        ? `bg-white dark:bg-[#070E1C] ${stepThemes.borderActive} ${stepThemes.bgActive} shadow-lg scale-[1.02]`
                        : 'bg-white/70 dark:bg-[#0B1528]/70 border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 hover:bg-white dark:hover:bg-[#0B1528]'
                    }`}
                  >
                    <div className="flex items-start gap-3.5">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all font-mono font-bold text-sm ${
                        isActive ? stepThemes.iconActive : 'bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-400'
                      }`}>
                        {step.roman}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className={`text-[11px] font-mono font-bold uppercase tracking-wider ${
                            isActive ? stepThemes.badgeActive : 'text-slate-500 dark:text-slate-400'
                          }`}>
                            {step.phase}
                          </span>
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                            isActive ? stepThemes.tagBg : 'bg-slate-100 dark:bg-white/5 text-slate-500 border-slate-200 dark:border-white/5'
                          }`}>
                            {step.badge}
                          </span>
                        </div>

                        <h3 className="text-base font-bold text-slate-900 dark:text-white font-display">
                          {step.title}
                        </h3>

                        <p className="text-xs text-slate-600 dark:text-slate-400 font-sans mt-1 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Interactive Console (Clean, Static, No Moving Scanning Lines) */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl p-1 bg-gradient-to-b from-purple-500/30 via-cyan-500/20 to-blue-600/20 dark:from-purple-500/40 dark:via-cyan-500/20 dark:to-transparent shadow-2xl">
                <div className="relative rounded-[14px] bg-[#070E1C] border-2 border-slate-300 dark:border-slate-700 overflow-hidden shadow-2xl p-5 sm:p-7 min-h-[500px] flex flex-col justify-between">
                  
                  {/* Background Ambient Glows */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

                  {/* Terminal Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b-2 border-slate-800 relative z-10">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      <span className="ml-2 text-[11px] font-mono font-bold text-slate-400">
                        knooviq-kernel://automation-evolve-runtime
                      </span>
                    </div>

                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-purple-500/15 text-purple-300 border border-purple-500/30">
                      LIVE MDG ENGINE
                    </span>
                  </div>

                  {/* Main Display per Active Step */}
                  <div className="py-4 flex-1 flex items-center justify-center relative z-10">
                    <AnimatePresence mode="wait">
                      {activeStep === 1 && (
                        <motion.div
                          key="evolve-stage-1"
                          initial={{ opacity: 0, scale: 0.95, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="w-full space-y-4"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400 flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                              Dynamic Form Intake Active
                            </span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-500/10 text-purple-300 border border-purple-500/30">
                              Responsive UI Portal
                            </span>
                          </div>

                          <div className="p-4 rounded-xl bg-white/5 border border-purple-500/30 space-y-3">
                            <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-slate-800">
                              <span className="text-slate-300">Request Template:</span>
                              <span className="text-purple-300 font-bold">New Material Master Creation (MM01)</span>
                            </div>
                            <div className="grid grid-cols-2 gap-2.5 text-[11px] font-mono">
                              <div className="p-2.5 rounded bg-black/40 border border-slate-800 text-slate-300">
                                <span className="text-slate-400 block text-[9px] uppercase">Base Attributes</span>
                                Material Type: Finished Goods • Industry Sector: Manufacturing
                              </div>
                              <div className="p-2.5 rounded bg-black/40 border border-slate-800 text-slate-300">
                                <span className="text-slate-400 block text-[9px] uppercase">Organizational Scope</span>
                                Plant: West Production • Sales Org: Global Distribution
                              </div>
                            </div>
                            <div className="text-[10px] font-mono text-emerald-400 flex items-center gap-2">
                              <CheckCircle2 className="h-3.5 w-3.5" />
                              <span>Required Fields Verified Against SAP S/4HANA Rules</span>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {activeStep === 2 && (
                        <motion.div
                          key="evolve-stage-2"
                          initial={{ opacity: 0, scale: 0.95, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="w-full space-y-4"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                              Multi-Tier Dynamic Routing
                            </span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/10 text-blue-300 border border-blue-500/30">
                              Role Hierarchy Mesh
                            </span>
                          </div>

                          <div className="p-4 rounded-xl bg-white/5 border border-blue-500/30 space-y-3">
                            <div className="grid grid-cols-3 gap-2 text-[10px] font-mono text-slate-400 border-b border-slate-800 pb-2 font-bold">
                              <div>STATION</div>
                              <div>ASSIGNED STEWARD</div>
                              <div>STATUS</div>
                            </div>
                            <div className="grid grid-cols-3 gap-2 text-[11px] font-mono text-slate-200 py-1 items-center">
                              <div className="text-purple-300 font-bold">Station Alpha</div>
                              <div className="text-slate-300">Supply Chain Lead</div>
                              <div className="text-emerald-400 font-bold">APPROVED</div>
                            </div>
                            <div className="grid grid-cols-3 gap-2 text-[11px] font-mono text-slate-200 py-1 items-center">
                              <div className="text-purple-300 font-bold">Station Beta</div>
                              <div className="text-slate-300">Cost Accounting Manager</div>
                              <div className="text-blue-400 font-bold">IN REVIEW</div>
                            </div>
                            <div className="grid grid-cols-3 gap-2 text-[11px] font-mono text-slate-200 py-1 items-center">
                              <div className="text-purple-300 font-bold">Station Gamma</div>
                              <div className="text-slate-300">Tax &amp; Compliance Officer</div>
                              <div className="text-slate-500">PENDING</div>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {activeStep === 3 && (
                        <motion.div
                          key="evolve-stage-3"
                          initial={{ opacity: 0, scale: 0.95, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="w-full space-y-4"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                              Parallel Review &amp; Digital Sign-Off
                            </span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                              Cryptographic Signature
                            </span>
                          </div>

                          <div className="p-4 rounded-xl bg-white/5 border border-emerald-500/30 space-y-3">
                            <div className="grid grid-cols-2 gap-3">
                              <div className="p-3 rounded-lg bg-black/40 border border-slate-800 space-y-1">
                                <span className="text-[10px] font-mono text-slate-400">Digital Seal</span>
                                <p className="text-xs font-bold text-emerald-400 font-mono">Verified Sign-Off Timestamped</p>
                              </div>
                              <div className="p-3 rounded-lg bg-black/40 border border-slate-800 space-y-1">
                                <span className="text-[10px] font-mono text-slate-400">Statutory Attachments</span>
                                <p className="text-xs font-bold text-emerald-400 font-mono">Tax Exemption Cert Attached</p>
                              </div>
                            </div>
                            <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-2 text-xs font-mono text-emerald-300">
                              <ShieldCheck className="h-4 w-4 flex-shrink-0" />
                              <span>Audit Standard Satisfied: Complete Lineage Recorded</span>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {activeStep === 4 && (
                        <motion.div
                          key="evolve-stage-4"
                          initial={{ opacity: 0, scale: 0.95, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="w-full space-y-4"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                              Autonomous Clean Core SAP Posting
                            </span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                              Direct BAPI Execution
                            </span>
                          </div>

                          <div className="p-4 rounded-xl bg-white/5 border border-cyan-500/30 space-y-3">
                            <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-slate-800">
                              <span className="text-slate-300">Target ERP:</span>
                              <span className="text-cyan-400 font-bold">SAP S/4HANA Enterprise Cloud</span>
                            </div>
                            <div className="space-y-1.5 text-[11px] font-mono text-slate-300">
                              <div className="flex justify-between">
                                <span>Generated Record ID:</span>
                                <span className="text-emerald-400 font-bold">MAT_ACTIVE_COMMITTED</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Zero Human Intervention:</span>
                                <span className="text-cyan-300">Autonomous Direct Commit</span>
                              </div>
                            </div>
                            <div className="p-2 rounded bg-cyan-500/10 border border-cyan-500/30 text-[10px] font-mono text-cyan-300 text-center">
                              BAPI Executed Successfully • Clean Core Architecture Preserved
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Footer Controls */}
                  <div className="pt-4 border-t-2 border-slate-800 flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="text-[11px] font-mono text-slate-400">
                        Status: Autonomous Workflow Engine Active
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setActiveStep(prev => prev > 1 ? prev - 1 : 4)}
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all cursor-pointer"
                        aria-label="Previous step"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => setActiveStep(prev => prev < 4 ? prev + 1 : 1)}
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all cursor-pointer"
                        aria-label="Next step"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: CORE CAPABILITIES GRID (6 Technical Pillars with Dark Borders)
          ========================================================================= */}
      <section id="evolve-capabilities" className="py-20 bg-white dark:bg-[#070E1C] border-b-2 border-slate-300 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400">
              Enterprise Governance Platform
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Key Capabilities of Automation Evolve
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed">
              Engineered to enforce strict master data quality and auditable sign-offs before anything touches SAP.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreCapabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="rounded-2xl p-6 bg-slate-50 dark:bg-[#0B1528] border-2 border-slate-300 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all shadow-xs hover:shadow-md"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                    {cap.category}
                  </span>
                  <h3 className="font-display text-base font-bold text-slate-900 dark:text-white mt-1 mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                    {cap.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: FUNCTIONAL USE CASES (Cross-Departmental Applications)
          ========================================================================= */}
      <section id="evolve-usecases" className="py-20 bg-[#F8FAFC] dark:bg-[#050B17] border-b-2 border-slate-300 dark:border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400">
              Universal Application
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Tailored Across High-Impact Enterprise Workflows
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed">
              How enterprise supply chain, finance, and corporate management teams eliminate data chaos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {functionalUseCases.map((uc, idx) => {
              const Icon = uc.icon;
              return (
                <motion.div
                  key={uc.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="rounded-2xl p-7 bg-white dark:bg-[#070E1C] border-2 border-slate-300 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all shadow-xs hover:shadow-md flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                        {uc.subtitle}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                        {uc.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300 font-sans mt-2 leading-relaxed">
                        {uc.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-5 mt-5 border-t-2 border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-2">
                    {uc.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/60 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: IT GOVERNANCE, COMPLIANCE & CLEAN CORE ARCHITECTURE
          ========================================================================= */}
      <section id="evolve-governance" className="py-20 bg-white dark:bg-[#070E1C] border-b-2 border-slate-300 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400">
              Governance &amp; Security
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Built for Enterprise Compliance and Clean Core SAP Modernization
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed">
              Zero compromise on corporate compliance, segregation of duties, or future-proof cloud architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {governancePillars.map((gov, idx) => {
              const Icon = gov.icon;
              return (
                <motion.div
                  key={gov.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="rounded-2xl p-7 bg-slate-50 dark:bg-[#0B1528] border-2 border-slate-300 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all shadow-xs hover:shadow-md flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-1">
                        {gov.badge}
                      </span>
                      <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                        {gov.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
                      {gov.description}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t-2 border-slate-200 dark:border-slate-800 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>Verified Compliance Standard</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: EXECUTIVE ARCHITECTURE REVIEW & CTA
          ========================================================================= */}
      <section id="evolve-cta" className="py-20 bg-gradient-to-b from-[#F8FAFC] to-purple-50/50 dark:from-[#050B17] dark:to-[#070E1C] border-t-2 border-slate-300 dark:border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-white/5 border-2 border-slate-300 dark:border-slate-700 text-xs font-mono font-bold text-purple-600 dark:text-purple-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span>KNOOVIQ AUTOMATION SUITE</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Transform Your Process Governance with Automation Evolve
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed">
            Replace chaotic email threads, eliminate dirty master data, and ensure seamless multi-stakeholder governance across your SAP landscape.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenContact?.('Automation Evolve Consultation')}
              className="px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm shadow-md shadow-purple-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Schedule Architecture Review</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AutomationEvolvePage;
