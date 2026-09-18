import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileSpreadsheet,
  CheckCircle2,
  ArrowRight,
  Database,
  Cpu,
  Zap,
  Lock,
  Workflow,
  Sparkles,
  Sliders,
  Table,
  RefreshCw,
  ShieldCheck,
  AlertCircle,
  Eye,
  ChevronRight,
  ChevronLeft,
  Landmark,
  Boxes,
  ShoppingBag,
  Server,
  FileCheck
} from 'lucide-react';

interface AutomationStudioPageProps {
  onOpenContact?: (service?: string) => void;
}

export const AutomationStudioPage: React.FC<AutomationStudioPageProps> = ({ onOpenContact }) => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [consoleView, setConsoleView] = useState<'simulator' | 'architecture'>('simulator');

  const workflowSteps = [
    {
      step: 1,
      phase: 'Phase Alpha',
      roman: 'I',
      title: 'Record & Template Design',
      badge: 'Visual Recorder',
      desc: 'Capture standard SAP transactions, custom T-Codes, or BAPIs through direct interaction without writing complex ABAP code.'
    },
    {
      step: 2,
      phase: 'Phase Beta',
      roman: 'II',
      title: 'Excel Data Mapping',
      badge: 'Cell-Level Binding',
      desc: 'Seamlessly bind spreadsheet columns directly to SAP screen fields, table loops, and conditional header structures.'
    },
    {
      step: 3,
      phase: 'Phase Gamma',
      roman: 'III',
      title: 'Pre-Flight Data Validation',
      badge: 'Zero-Commit Check',
      desc: 'Simulate postings against SAP business logic before database commitment to identify formatting errors and missing required fields.'
    },
    {
      step: 4,
      phase: 'Phase Delta',
      roman: 'IV',
      title: 'Mass Batch Posting & Audit',
      badge: 'Direct ERP Sync',
      desc: 'Post volume transactions directly into SAP S/4HANA or ECC with real-time success logs written directly back into Excel.'
    }
  ];

  const frictionPoints = [
    {
      title: 'Manual Multi-Screen Data Entry',
      description: 'Business users spending extensive manual hours re-keying spreadsheet data across complex SAP screens, resulting in operational bottlenecks.',
      impact: 'Productivity Drain'
    },
    {
      title: 'Heavy Reliance on Custom ABAP / LSMW',
      description: 'Lengthy IT backlogs and costly developer cycles required to build and maintain brittle legacy data migration scripts.',
      impact: 'IT Dependency'
    },
    {
      title: 'Costly Data Posting Errors',
      description: 'Typographical slips and incomplete line items causing batch failures, reconciliation delays, and audit compliance issues.',
      impact: 'Data Inconsistency'
    },
    {
      title: 'Uncontrolled Shadow Automation',
      description: 'Unregulated local desktop macros and untracked scripts operating outside IT governance and standard SAP security policies.',
      impact: 'Security Vulnerability'
    }
  ];

  const coreCapabilities = [
    {
      icon: FileSpreadsheet,
      title: 'Native Microsoft Excel Add-In',
      category: 'User Empowerment',
      description: 'Run, validate, and execute complex SAP transactional workflows directly from the familiar Microsoft Excel interface.'
    },
    {
      icon: Sliders,
      title: 'Transaction & BAPI Recording',
      category: 'Visual Scripting',
      description: 'Record standard SAP GUI actions or utilize native BAPIs and remote-enabled functional modules without coding.'
    },
    {
      icon: Table,
      title: 'Intelligent Query Builder',
      category: 'Safe Extraction',
      description: 'Extract real-time data across joined SAP tables with strict criteria filters while protecting production database performance.'
    },
    {
      icon: ShieldCheck,
      title: 'Pre-Posting Simulation',
      category: 'Quality Assurance',
      description: 'Validate entire batches against SAP configuration and security rules prior to committing changes to the general ledger.'
    },
    {
      icon: RefreshCw,
      title: 'Multi-Line Loop Support',
      category: 'Complex Documents',
      description: 'Easily handle complex parent-child hierarchical documents including multi-item sales orders, delivery splits, and journal vouchers.'
    },
    {
      icon: Lock,
      title: 'SAP Security Compliance',
      category: 'Governance Core',
      description: 'Inherits all existing user SAP authorization roles, profiles, and organization-level security boundaries automatically.'
    }
  ];

  const functionalUseCases = [
    {
      icon: Landmark,
      title: 'Finance & Accounting',
      subtitle: 'Financial Operations (FICO)',
      description: 'Execute high-volume general ledger journal entries, period-end accruals, asset transfers, and intercompany reconciliations with cell-level audit writeback directly in spreadsheets.',
      tags: ['General Ledger', 'Asset Accounting', 'Period Closing']
    },
    {
      icon: Boxes,
      title: 'Supply Chain & Procurement',
      subtitle: 'Materials Management (MM)',
      description: 'Accelerate creation and mass updates of purchase orders, source lists, vendor info records, and goods movements without waiting for batch jobs or IT scripts.',
      tags: ['Purchase Orders', 'Source Lists', 'Inventory Tracking']
    },
    {
      icon: Database,
      title: 'Master Data Governance',
      subtitle: 'Enterprise Master Data',
      description: 'Maintain pristine master records across customer, vendor, and material hierarchies with pre-flight simulation preventing corrupt or duplicate records in production.',
      tags: ['Material Master', 'Vendor Master', 'Customer Hierarchy']
    },
    {
      icon: ShoppingBag,
      title: 'Sales & Distribution',
      subtitle: 'Commercial Operations (SD)',
      description: 'Update complex pricing condition records, seasonal discounts, customer credit terms, and mass sales orders swiftly while respecting corporate commercial policies.',
      tags: ['Pricing Conditions', 'Sales Orders', 'Contract Revisions']
    }
  ];

  const governancePillars = [
    {
      icon: Lock,
      title: 'SAP Authorization Passthrough',
      badge: 'Zero Privilege Elevation',
      description: 'Automation Studio operates strictly within the active SAP user credentials. If an analyst lacks transaction-level or company-code authorization in SAP GUI, the runner prevents execution identically.'
    },
    {
      icon: Server,
      title: 'SAP Clean Core Compliant',
      badge: 'Zero Custom ABAP',
      description: 'Eliminate brittle custom Z-programs, user exits, and deprecated LSMW scripts. Studio connects natively through standard BAPIs and certified remote interfaces, keeping your core pristine for seamless S/4HANA upgrades.'
    },
    {
      icon: FileCheck,
      title: 'Immutable Audit & Telemetry',
      badge: 'Audit Readiness',
      description: 'Every record processed receives an immutable SAP document number, user attribution, and timestamp logged back into the workbook and enterprise security ledger for regulatory compliance.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#050B17] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      {/* =========================================================================
          SECTION 1: HERO SECTION (With New High-Res Image & Professional Animation)
          ========================================================================= */}
      <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-24 overflow-hidden border-b-2 border-slate-200 dark:border-slate-800 bg-gradient-to-b from-slate-50 via-white to-slate-50/70 dark:from-[#050B17] dark:via-[#070E1C] dark:to-[#050B17]">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#00A3E0]/15 dark:bg-[#00A3E0]/20 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/15 blur-[110px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Heading & Executive Copy */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="lg:col-span-6 space-y-6 text-center lg:text-left"
            >
              {/* Strategic Suite Pill Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 dark:bg-sky-950/40 border-2 border-sky-200 dark:border-sky-800/80 text-xs text-[#0077B6] dark:text-cyan-300 font-semibold shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#00A3E0] animate-pulse" />
                <span className="font-semibold text-slate-900 dark:text-white font-sans">Knooviq Automation Suite</span>
                <span className="text-slate-300 dark:text-slate-600">|</span>
                <span className="text-[#0077B6] dark:text-cyan-400 font-semibold font-sans">Automation Studio</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.18] font-display">
                Empower Business Teams with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-[#0A1931] to-[#00A3E0] dark:from-white dark:via-cyan-200 dark:to-[#00A3E0]">
                  Desktop-to-SAP Automation
                </span>{' '}
                Directly from Excel.
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-2xl font-sans">
                Accelerate high-volume data entry, master data maintenance, and transactional mass updates without programming. Automation Studio connects standard Microsoft Excel workbooks directly to SAP S/4HANA and ECC while upholding complete SAP security and audit controls.
              </p>

              {/* Hero CTA Group */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                <button
                  onClick={() => onOpenContact?.('Automation Studio Consultation')}
                  className="px-7 py-3.5 rounded-xl bg-[#00A3E0] hover:bg-[#008bc0] text-white font-semibold text-sm shadow-md shadow-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2.5 group cursor-pointer"
                >
                  <span>Request Live Studio Demo</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="#studio-architecture"
                  className="px-6 py-3.5 rounded-xl bg-white dark:bg-[#0B1528] hover:bg-slate-50 dark:hover:bg-[#0E1A33] border-2 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-sm font-semibold transition-all flex items-center gap-2 shadow-xs hover:-translate-y-0.5"
                >
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-4 h-4 text-[#00A3E0]" />
                </a>
              </div>

              {/* Executive Capability Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t-2 border-slate-300 dark:border-slate-700/80 text-left">
                <div className="group/item bg-white dark:bg-[#070E1C] p-3.5 rounded-xl border-2 border-slate-300 dark:border-slate-700 hover:border-[#00A3E0] dark:hover:border-[#00A3E0] transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5">
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/10 text-[#00A3E0] flex items-center justify-center mb-2 group-hover/item:scale-110 transition-transform">
                    <FileSpreadsheet className="h-4 w-4" />
                  </div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider font-mono">Interface</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5 font-display">Native Excel</p>
                  <p className="text-[11px] text-[#0077B6] dark:text-cyan-400 font-medium mt-0.5 font-sans">No-Code Runner</p>
                </div>
                <div className="group/item bg-white dark:bg-[#070E1C] p-3.5 rounded-xl border-2 border-slate-300 dark:border-slate-700 hover:border-[#00A3E0] dark:hover:border-[#00A3E0] transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-2 group-hover/item:scale-110 transition-transform">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider font-mono">Audit</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5 font-display">SAP Verified</p>
                  <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium mt-0.5 font-sans">Zero Drift Commit</p>
                </div>
                <div className="group/item bg-white dark:bg-[#070E1C] p-3.5 rounded-xl border-2 border-slate-300 dark:border-slate-700 hover:border-[#00A3E0] dark:hover:border-[#00A3E0] transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5">
                  <div className="w-7 h-7 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-2 group-hover/item:scale-110 transition-transform">
                    <Cpu className="h-4 w-4" />
                  </div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider font-mono">Integration</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5 font-display">S/4HANA &amp; ECC</p>
                  <p className="text-[11px] text-blue-600 dark:text-blue-400 font-medium mt-0.5 font-sans">BAPI &amp; GUI Direct</p>
                </div>
                <div className="group/item bg-white dark:bg-[#070E1C] p-3.5 rounded-xl border-2 border-slate-300 dark:border-slate-700 hover:border-[#00A3E0] dark:hover:border-[#00A3E0] transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5">
                  <div className="w-7 h-7 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-2 group-hover/item:scale-110 transition-transform">
                    <Lock className="h-4 w-4" />
                  </div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider font-mono">Security</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5 font-display">Role Bound</p>
                  <p className="text-[11px] text-purple-600 dark:text-purple-400 font-medium mt-0.5 font-sans">Standard SAP Auth</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: User-Uploaded High-Resolution AI Automation Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
              className="lg:col-span-6 relative flex justify-center"
            >
              {/* Floating Animation Container */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="w-full max-w-lg relative rounded-2xl p-1 bg-gradient-to-b from-cyan-500/30 via-slate-300/40 to-blue-500/20 dark:from-cyan-500/40 dark:via-purple-500/20 dark:to-transparent shadow-2xl group"
              >
                {/* Visual Frame with Dark Defined Borders */}
                <div className="relative rounded-[14px] bg-[#070E1C] border-2 border-slate-300 dark:border-slate-700 overflow-hidden shadow-2xl h-[460px] sm:h-[520px] lg:h-[580px]">
                  
                  {/* User-Provided AI Workflow Automation Image */}
                  <img
                    src="/images/automation_studio_workspace.png"
                    alt="Knooviq Automation Studio - Intelligent Enterprise Workflow Automation"
                    className="w-full h-full object-cover object-top select-none group-hover:scale-[1.02] transition-transform duration-700"
                  />

                  {/* Animated Sweeping Subtle Laser Scan Line */}
                  <motion.div
                    animate={{ y: ['-10%', '110%', '-10%'] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00A3E0]/80 to-transparent shadow-[0_0_12px_#00A3E0] pointer-events-none z-20"
                  />

                  {/* Top Floating Live Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 z-30">
                    <span className="px-3 py-1.5 rounded-full text-[10px] font-mono font-bold bg-[#070E1C]/90 backdrop-blur-md text-cyan-300 border-2 border-cyan-500/40 shadow-lg flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      INTELLIGENT WORKFLOW RUNNER ACTIVE
                    </span>
                  </div>

                  {/* Bottom Floating Telemetry Strip */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2 p-3 rounded-xl bg-[#070E1C]/90 backdrop-blur-md border-2 border-slate-700 shadow-xl text-xs z-30">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                      <div>
                        <div className="font-bold text-white text-[11px] font-sans">Autonomous Cross-App Orchestration</div>
                        <div className="text-[9px] text-slate-400 font-mono">Spreadsheet &amp; ERP Systems Synchronized</div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                      CONNECTED
                    </span>
                  </div>

                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: OPERATIONAL REALITIES (Friction Points)
          ========================================================================= */}
      <section id="studio-friction" className="py-20 bg-white dark:bg-[#070E1C] border-b-2 border-slate-300 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00A3E0] dark:text-cyan-400">
              Operational Realities
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              The Critical Bottlenecks of Manual SAP Operations
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed">
              Why relying on manual screen entry and developer-heavy legacy tools stalls enterprise agility.
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
                className="rounded-2xl p-6 bg-slate-50 dark:bg-[#0B1528] border-2 border-slate-300 dark:border-slate-700 flex flex-col justify-between hover:border-[#00A3E0] dark:hover:border-[#00A3E0] transition-all shadow-xs hover:shadow-md"
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
          SECTION 3: EXECUTION PIPELINE RUNTIME (Interactive Simulator + Blueprint)
          ========================================================================= */}
      <section id="studio-architecture" className="py-20 sm:py-28 bg-[#F8FAFC] dark:bg-[#050B17] border-b-2 border-slate-300 dark:border-slate-800 relative overflow-hidden">
        <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[500px] h-[500px] bg-[#00A3E0]/10 dark:bg-[#00A3E0]/15 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-600/15 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00A3E0] dark:text-cyan-400">
              Interactive Automation Runtime
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              The Automation Studio Execution Pipeline
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed">
              Step through the four-stage lifecycle of recording, mapping, validating, and mass-posting data to SAP.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Interactive Stage Cards */}
            <div className="lg:col-span-5 space-y-3.5">
              {workflowSteps.map((step, idx) => {
                const isActive = activeStep === step.step;
                const stepThemes = [
                  {
                    borderActive: 'border-cyan-500 dark:border-cyan-400',
                    bgActive: 'bg-gradient-to-r from-cyan-500/15 via-cyan-500/5 to-white dark:to-[#070E1C] border-l-4 border-l-cyan-500',
                    iconActive: 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30',
                    badgeActive: 'text-cyan-600 dark:text-cyan-400',
                    tagBg: 'bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border-cyan-500/30'
                  },
                  {
                    borderActive: 'border-purple-500 dark:border-purple-400',
                    bgActive: 'bg-gradient-to-r from-purple-500/15 via-purple-500/5 to-white dark:to-[#070E1C] border-l-4 border-l-purple-500',
                    iconActive: 'bg-purple-600 text-white shadow-lg shadow-purple-500/30',
                    badgeActive: 'text-purple-600 dark:text-purple-400',
                    tagBg: 'bg-purple-500/15 text-purple-700 dark:text-purple-300 border-purple-500/30'
                  },
                  {
                    borderActive: 'border-emerald-500 dark:border-emerald-400',
                    bgActive: 'bg-gradient-to-r from-emerald-500/15 via-emerald-500/5 to-white dark:to-[#070E1C] border-l-4 border-l-emerald-500',
                    iconActive: 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/30',
                    badgeActive: 'text-emerald-600 dark:text-emerald-400',
                    tagBg: 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30'
                  },
                  {
                    borderActive: 'border-blue-500 dark:border-blue-400',
                    bgActive: 'bg-gradient-to-r from-blue-500/15 via-blue-500/5 to-white dark:to-[#070E1C] border-l-4 border-l-blue-500',
                    iconActive: 'bg-blue-600 text-white shadow-lg shadow-blue-500/30',
                    badgeActive: 'text-blue-600 dark:text-blue-400',
                    tagBg: 'bg-blue-500/15 text-blue-700 dark:text-blue-300 border-blue-500/30'
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

            {/* Right Column: Console with View Mode Switcher (Simulator or High-Res Pipeline Image) */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl p-1 bg-gradient-to-b from-cyan-500/30 via-purple-500/20 to-blue-600/20 dark:from-cyan-500/40 dark:via-purple-500/20 dark:to-transparent shadow-2xl">
                <div className="relative rounded-[14px] bg-[#070E1C] border-2 border-slate-300 dark:border-slate-700 overflow-hidden shadow-2xl p-5 sm:p-7 min-h-[500px] flex flex-col justify-between">
                  
                  {/* Background Ambient Glows */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />

                  {/* Terminal Header & Mode Switcher */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b-2 border-slate-800 relative z-10">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      <span className="ml-2 text-[11px] font-mono font-bold text-slate-400">
                        knooviq-kernel://automation-studio-runtime
                      </span>
                    </div>

                    {/* Console View Toggle */}
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => setConsoleView('simulator')}
                        className={`px-3 py-1 rounded-md text-[10px] font-mono font-bold transition-all cursor-pointer ${
                          consoleView === 'simulator'
                            ? 'bg-[#00A3E0] text-white shadow-md shadow-cyan-500/30'
                            : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        STAGE RUNTIME
                      </button>
                      <button
                        onClick={() => setConsoleView('architecture')}
                        className={`px-3 py-1 rounded-md text-[10px] font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                          consoleView === 'architecture'
                            ? 'bg-[#00A3E0] text-white shadow-md shadow-cyan-500/30'
                            : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        <Eye className="w-3 h-3" />
                        <span>PIPELINE BLUEPRINT</span>
                      </button>
                    </div>
                  </div>

                  {/* View Content: Simulator OR Architecture Blueprint Image */}
                  <div className="py-4 flex-1 flex items-center justify-center relative z-10">
                    {consoleView === 'architecture' ? (
                      /* Architecture Blueprint Image Display with Simple Laser Scan */
                      <motion.div
                        key="pipeline-img-view"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="w-full relative rounded-xl overflow-hidden border border-slate-700/80 bg-[#050B17]"
                      >
                        <img
                          src="/images/automation_studio_pipeline.svg"
                          alt="Automation Studio 4-Stage Execution Pipeline Engine"
                          className="w-full h-auto object-cover select-none"
                        />
                        {/* Sweeping Laser Scan Line */}
                        <motion.div
                          animate={{ y: ['-10%', '110%', '-10%'] }}
                          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                          className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#38bdf8] pointer-events-none"
                        />
                      </motion.div>
                    ) : (
                      /* Stage-by-Stage Interactive Simulator */
                      <AnimatePresence mode="wait">
                        {activeStep === 1 && (
                          <motion.div
                            key="studio-stage-1"
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="w-full space-y-4"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                                SAP Transaction Recording Active
                              </span>
                              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                                Direct GUI &amp; BAPI Sniffer
                              </span>
                            </div>

                            <div className="p-4 rounded-xl bg-white/5 border border-cyan-500/30 space-y-3">
                              <div className="flex items-center justify-between text-xs font-mono">
                                <span className="text-slate-300">Recorded Target Transaction:</span>
                                <span className="text-cyan-400 font-bold px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30">FB_POST / General Ledger Posting</span>
                              </div>
                              <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                                <div className="p-2.5 rounded bg-black/40 border border-slate-800 text-slate-300">
                                  <span className="text-slate-400 block text-[9px] uppercase">Header Screen</span>
                                  Document Date, Company Code, Currency
                                </div>
                                <div className="p-2.5 rounded bg-black/40 border border-slate-800 text-slate-300">
                                  <span className="text-slate-400 block text-[9px] uppercase">Line Item Table</span>
                                  GL Account, Debit/Credit, Cost Center
                                </div>
                              </div>
                              <div className="text-[10px] font-mono text-emerald-400 flex items-center gap-2">
                                <CheckCircle2 className="h-3.5 w-3.5" />
                                <span>Screen Flow Captured Successfully • Zero ABAP Required</span>
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {activeStep === 2 && (
                          <motion.div
                            key="studio-stage-2"
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="w-full space-y-4"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                                Excel Column-to-SAP Field Mapping
                              </span>
                              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-500/10 text-purple-300 border border-purple-500/30">
                                Visual Mapper
                              </span>
                            </div>

                            {/* Interactive Mapping Table */}
                            <div className="relative p-4 rounded-xl bg-white/5 border border-purple-500/30 overflow-hidden space-y-2.5">
                              <div className="grid grid-cols-3 gap-2 text-[10px] font-mono text-slate-400 border-b border-slate-800 pb-2 font-bold">
                                <div>EXCEL COLUMN</div>
                                <div>MAPPING DIRECTION</div>
                                <div>SAP FIELD (SCREEN)</div>
                              </div>
                              <div className="grid grid-cols-3 gap-2 text-[11px] font-mono text-slate-200 py-1 items-center">
                                <div className="text-emerald-400 font-bold">Column A: DOC_DATE</div>
                                <div className="text-purple-400 text-xs">--------&gt;</div>
                                <div className="text-cyan-300">BKPF-BLDAT (Header)</div>
                              </div>
                              <div className="grid grid-cols-3 gap-2 text-[11px] font-mono text-slate-200 py-1 items-center">
                                <div className="text-emerald-400 font-bold">Column B: COMP_CODE</div>
                                <div className="text-purple-400 text-xs">--------&gt;</div>
                                <div className="text-cyan-300">BKPF-BUKRS (Header)</div>
                              </div>
                              <div className="grid grid-cols-3 gap-2 text-[11px] font-mono text-slate-200 py-1 items-center">
                                <div className="text-emerald-400 font-bold">Column C: GL_ACCT</div>
                                <div className="text-purple-400 text-xs">--------&gt;</div>
                                <div className="text-cyan-300">BSEG-HKONT (Item Loop)</div>
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {activeStep === 3 && (
                          <motion.div
                            key="studio-stage-3"
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="w-full space-y-4"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                Pre-Flight Simulation Against SAP Logic
                              </span>
                              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                                Zero Database Commit
                              </span>
                            </div>

                            <div className="p-4 rounded-xl bg-white/5 border border-emerald-500/30 space-y-3">
                              <div className="grid grid-cols-2 gap-3">
                                <div className="p-3 rounded-lg bg-black/40 border border-slate-800 space-y-1">
                                  <span className="text-[10px] font-mono text-slate-400">Master Data Check</span>
                                  <p className="text-xs font-bold text-emerald-400 font-mono">Cost Centers Validated</p>
                                </div>
                                <div className="p-3 rounded-lg bg-black/40 border border-slate-800 space-y-1">
                                  <span className="text-[10px] font-mono text-slate-400">Posting Period Status</span>
                                  <p className="text-xs font-bold text-emerald-400 font-mono">Period Open for Posting</p>
                                </div>
                              </div>
                              <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-2 text-xs font-mono text-emerald-300">
                                <ShieldCheck className="h-4 w-4 flex-shrink-0" />
                                <span>Simulation Outcome: Complete Batch Clean &amp; Authorized for Execution</span>
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {activeStep === 4 && (
                          <motion.div
                            key="studio-stage-4"
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="w-full space-y-4"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                                Mass Batch Posting &amp; Log Writeback
                              </span>
                              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/10 text-blue-300 border border-blue-500/30">
                                Synchronous Commit
                              </span>
                            </div>

                            <div className="p-4 rounded-xl bg-white/5 border border-blue-500/30 space-y-3">
                              <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-slate-800">
                                <span className="text-slate-300">SAP Document Generated:</span>
                                <span className="text-blue-400 font-bold">BKPF Accounting Document Posted</span>
                              </div>
                              <div className="space-y-1.5 text-[11px] font-mono text-slate-300">
                                <div className="flex justify-between">
                                  <span>Excel Cell Writeback:</span>
                                  <span className="text-emerald-400 font-bold">Document Number Appended</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Audit Record:</span>
                                  <span className="text-cyan-400">Stored in Security Console</span>
                                </div>
                              </div>
                              <div className="p-2 rounded bg-blue-500/10 border border-blue-500/30 text-[10px] font-mono text-blue-300 text-center">
                                Target ERP: SAP S/4HANA Enterprise Cloud • Status: Synchronized
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>

                  {/* Footer Controls */}
                  <div className="pt-4 border-t-2 border-slate-800 flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="text-[11px] font-mono text-slate-400">
                        Status: Autonomous Engine Active
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
          SECTION 4: CORE CAPABILITIES GRID (6 Enterprise Pillars with Dark Borders)
          ========================================================================= */}
      <section id="studio-capabilities" className="py-20 bg-white dark:bg-[#070E1C] border-b-2 border-slate-300 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00A3E0] dark:text-cyan-400">
              Built for Enterprise Governance
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Key Capabilities of Automation Studio
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed">
              Engineered to bring rapid data execution directly to business analysts while preserving strict IT control.
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
                  className="rounded-2xl p-6 bg-slate-50 dark:bg-[#0B1528] border-2 border-slate-300 dark:border-slate-700 hover:border-[#00A3E0] dark:hover:border-[#00A3E0] transition-all shadow-xs hover:shadow-md"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#00A3E0]/10 text-[#00A3E0] flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0077B6] dark:text-cyan-400">
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
      <section id="studio-usecases" className="py-20 bg-[#F8FAFC] dark:bg-[#050B17] border-b-2 border-slate-300 dark:border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00A3E0] dark:text-cyan-400">
              Universal Application
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Tailored Across High-Volume Business Functions
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed">
              How enterprise finance, supply chain, master data, and commercial sales teams leverage Automation Studio daily.
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
                  className="rounded-2xl p-7 bg-white dark:bg-[#070E1C] border-2 border-slate-300 dark:border-slate-700 hover:border-[#00A3E0] dark:hover:border-[#00A3E0] transition-all shadow-xs hover:shadow-md flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-[#00A3E0]/10 text-[#00A3E0] flex items-center justify-center">
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
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-sky-50 dark:bg-sky-950/40 text-[#0077B6] dark:text-cyan-300 border border-sky-200 dark:border-sky-800/60 font-medium"
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
          SECTION 6: ENTERPRISE GOVERNANCE & CLEAN CORE ARCHITECTURE
          ========================================================================= */}
      <section id="studio-governance" className="py-20 bg-white dark:bg-[#070E1C] border-b-2 border-slate-300 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00A3E0] dark:text-cyan-400">
              IT Governance &amp; Security
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Built for Strict Governance and SAP Clean Core
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed">
              Zero compromise on corporate compliance, SAP user authorization profiles, or cloud modernization initiatives.
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
                  className="rounded-2xl p-7 bg-slate-50 dark:bg-[#0B1528] border-2 border-slate-300 dark:border-slate-700 hover:border-[#00A3E0] dark:hover:border-[#00A3E0] transition-all shadow-xs hover:shadow-md flex flex-col justify-between"
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
      <section id="studio-cta" className="py-20 bg-gradient-to-b from-[#F8FAFC] to-sky-50 dark:from-[#050B17] dark:to-[#070E1C] border-t-2 border-slate-300 dark:border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-white/5 border-2 border-slate-300 dark:border-slate-700 text-xs font-mono font-bold text-[#00A3E0]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>KNOOVIQ AUTOMATION SUITE</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Transform Your SAP Operations with Automation Studio
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed">
            Eliminate repetitive manual data entry, eliminate ABAP backlogs, and ensure clean core compliance with native Excel-to-SAP automation.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenContact?.('Automation Studio Consultation')}
              className="px-8 py-4 rounded-xl bg-[#00A3E0] hover:bg-[#008bc0] text-white font-semibold text-sm shadow-md shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer"
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

export default AutomationStudioPage;
