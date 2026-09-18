import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sliders,
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
  Key,
  FolderLock,
  History,
  CalendarCheck,
  Terminal,
  ShieldAlert,
  Gauge
} from 'lucide-react';

interface AutomationManagerPageProps {
  onOpenContact?: (service?: string) => void;
}

export const AutomationManagerPage: React.FC<AutomationManagerPageProps> = ({ onOpenContact }) => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const workflowSteps = [
    {
      step: 1,
      phase: 'Phase Alpha',
      roman: 'I',
      title: 'Central Script Repository',
      badge: 'Version Controlled',
      desc: 'Catalog, store, and manage all automation templates, queries, and scripts in a single enterprise-secure repository.'
    },
    {
      step: 2,
      phase: 'Phase Beta',
      roman: 'II',
      title: 'Role-Based Access Governance',
      badge: 'Granular Security',
      desc: 'Enforce strict role-based execution boundaries aligned with corporate IT policies and SAP organizational assignments.'
    },
    {
      step: 3,
      phase: 'Phase Gamma',
      roman: 'III',
      title: 'Lifecycle Promotion Matrix',
      badge: 'Dev to Prod',
      desc: 'Promote tested scripts across Development, Quality Assurance, and Production environments with mandatory peer sign-offs.'
    },
    {
      step: 4,
      phase: 'Phase Delta',
      roman: 'IV',
      title: 'Autonomous Batch Scheduler',
      badge: 'Off-Peak Engine',
      desc: 'Orchestrate high-volume automated postings during scheduled off-peak hours with automated failure alerts and audit logs.'
    }
  ];

  const frictionPoints = [
    {
      title: 'Untracked Desktop Script Sprawl',
      description: 'Automation scripts scattered across local laptops and shared drives without version control or central administrative oversight.',
      impact: 'Shadow IT Risk'
    },
    {
      title: 'Uncontrolled Production Access',
      description: 'Business users running unverified scripts directly against production SAP environments, risking unexpected system slowdowns.',
      impact: 'System Instability'
    },
    {
      title: 'Failed Compliance & Statutory Audits',
      description: 'Inability to prove who created, modified, approved, and executed automation scripts during strict financial compliance audits.',
      impact: 'Regulatory Exposure'
    },
    {
      title: 'Manual Scheduling & Monitoring',
      description: 'IT administrators staying late to manually trigger high-volume batch migrations and manually inspecting log files.',
      impact: 'Operational Overhead'
    }
  ];

  const coreCapabilities = [
    {
      icon: FolderLock,
      title: 'Centralized Asset Repository',
      category: 'Governance Core',
      description: 'Single source of truth for all enterprise templates, queries, and workflows with automated versioning and rollback.'
    },
    {
      icon: Key,
      title: 'License & Access Management',
      category: 'Security Framework',
      description: 'Allocate and revoke authoring and runner licenses dynamically with central directory and single sign-on integration.'
    },
    {
      icon: History,
      title: 'Tamper-Proof Audit Logging',
      category: 'Compliance Assurance',
      description: 'Maintain detailed records of every execution, user credential, transaction code, timestamp, and return status.'
    },
    {
      icon: CalendarCheck,
      title: 'Enterprise Batch Scheduler',
      category: 'Operational Agility',
      description: 'Schedule automated mass runs during off-peak windows with intelligent concurrency throttling to protect SAP performance.'
    },
    {
      icon: ShieldCheck,
      title: 'Script Lifecycle Promotion',
      category: 'Change Management',
      description: 'Formalized promotion pathways ensuring scripts undergo strict functional validation before production deployment.'
    },
    {
      icon: Cpu,
      title: 'SAP System Landscape Directory',
      category: 'Infrastructure',
      description: 'Connect heterogeneous SAP S/4HANA, ECC, and BW environments through centralized connection management.'
    }
  ];

  const functionalUseCases = [
    {
      icon: FolderLock,
      title: 'Center of Excellence (CoE) Standardization',
      subtitle: 'Enterprise IT Strategy',
      description: 'Eliminate local macro proliferation by publishing certified, approved automation templates to designated business user groups across global operating units.',
      tags: ['Template Catalog', 'CoE Standards', 'Version Control']
    },
    {
      icon: CalendarCheck,
      title: 'Off-Peak Mass Batch Postings',
      subtitle: 'Batch Process Automation',
      description: 'Schedule massive journal entry postings, billing document releases, and inventory reconciliations during non-business hours to avoid impacting operational daytime users.',
      tags: ['Off-Peak Windows', 'Queue Management', 'Throttling Control']
    },
    {
      icon: History,
      title: 'Strict SOX & Regulatory Audits',
      subtitle: 'Governance & Risk Compliance',
      description: 'Supply corporate auditors with instantaneous proof of script provenance, modification authors, supervisor approval stamps, and granular execution histories.',
      tags: ['Audit Trails', 'Approval Sign-Offs', 'Compliance Proof']
    },
    {
      icon: Server,
      title: 'Multi-Landscape Release Management',
      subtitle: 'Environment Promotion',
      description: 'Enforce staged migration policies ensuring scripts developed in sandbox instances are thoroughly tested in QA before receiving release keys for production.',
      tags: ['Stage Gates', 'Quality Assurance', 'Production Protection']
    }
  ];

  const governancePillars = [
    {
      icon: Key,
      title: 'Enterprise Identity & SSO Integration',
      badge: 'Single Sign-On',
      description: 'Directly integrates with corporate Active Directory, Okta, and SAML providers to enforce centralized user provisioning and multi-factor authentication policies.'
    },
    {
      icon: Gauge,
      title: 'Dynamic Concurrency Throttling',
      badge: 'Performance Protection',
      description: 'Intelligent server load monitors regulate background execution threads and RFC connections dynamically, preventing server memory spikes on SAP application servers.'
    },
    {
      icon: Server,
      title: 'Landscape-Wide Central Configuration',
      badge: 'Multi-Tenant Control',
      description: 'Configure SAP connection parameters, router strings, and client credentials once at the server tier, eliminating endpoint desktop configuration drift.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#050B17] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      {/* =========================================================================
          SECTION 1: HERO SECTION (With High-Resolution Image & Professional Look)
          ========================================================================= */}
      <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-24 overflow-hidden border-b-2 border-slate-200 dark:border-slate-800 bg-gradient-to-b from-slate-50 via-white to-slate-50/70 dark:from-[#050B17] dark:via-[#070E1C] dark:to-[#050B17]">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-500/15 dark:bg-blue-500/20 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/15 dark:bg-cyan-500/20 blur-[110px] rounded-full pointer-events-none" />

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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 border-2 border-blue-200 dark:border-blue-800/80 text-xs text-blue-700 dark:text-blue-300 font-semibold shadow-xs">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="font-semibold text-slate-900 dark:text-white font-sans">Knooviq Automation Suite</span>
                <span className="text-slate-300 dark:text-slate-600">|</span>
                <span className="text-blue-600 dark:text-blue-400 font-semibold font-sans">Automation Manager</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.18] font-display">
                Centralized Governance, Security &amp;{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-900 to-blue-600 dark:from-white dark:via-blue-200 dark:to-cyan-400">
                  Script Orchestration for SAP.
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-2xl font-sans">
                Govern automation scripts across your enterprise with central repository management, role-based execution boundaries, license administration, and automated off-peak batch scheduling.
              </p>

              {/* Hero CTA Group */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                <button
                  onClick={() => onOpenContact?.('Automation Manager Consultation')}
                  className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2.5 group cursor-pointer"
                >
                  <span>Request Live Manager Demo</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="#manager-architecture"
                  className="px-6 py-3.5 rounded-xl bg-white dark:bg-[#0B1528] hover:bg-slate-50 dark:hover:bg-[#0E1A33] border-2 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-sm font-semibold transition-all flex items-center gap-2 shadow-xs hover:-translate-y-0.5"
                >
                  <span>Explore Governance Engine</span>
                  <ArrowRight className="w-4 h-4 text-blue-500" />
                </a>
              </div>

              {/* Executive Capability Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t-2 border-slate-300 dark:border-slate-700/80 text-left">
                <div className="group/item bg-white dark:bg-[#070E1C] p-3.5 rounded-xl border-2 border-slate-300 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5">
                  <div className="w-7 h-7 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-2 group-hover/item:scale-110 transition-transform">
                    <FolderLock className="h-4 w-4" />
                  </div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider font-mono">Repository</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5 font-display">Central Vault</p>
                  <p className="text-[11px] text-blue-600 dark:text-blue-400 font-medium mt-0.5 font-sans">Version Control</p>
                </div>
                <div className="group/item bg-white dark:bg-[#070E1C] p-3.5 rounded-xl border-2 border-slate-300 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-2 group-hover/item:scale-110 transition-transform">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider font-mono">Security</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5 font-display">Role Bound</p>
                  <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium mt-0.5 font-sans">Granular Control</p>
                </div>
                <div className="group/item bg-white dark:bg-[#070E1C] p-3.5 rounded-xl border-2 border-slate-300 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5">
                  <div className="w-7 h-7 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-2 group-hover/item:scale-110 transition-transform">
                    <CalendarCheck className="h-4 w-4" />
                  </div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider font-mono">Execution</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5 font-display">Batch Runner</p>
                  <p className="text-[11px] text-purple-600 dark:text-purple-400 font-medium mt-0.5 font-sans">Off-Peak Window</p>
                </div>
                <div className="group/item bg-white dark:bg-[#070E1C] p-3.5 rounded-xl border-2 border-slate-300 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5">
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/10 text-[#00A3E0] flex items-center justify-center mb-2 group-hover/item:scale-110 transition-transform">
                    <Cpu className="h-4 w-4" />
                  </div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider font-mono">Landscape</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5 font-display">S/4HANA &amp; ECC</p>
                  <p className="text-[11px] text-[#0077B6] dark:text-cyan-400 font-medium mt-0.5 font-sans">Multi-Instance</p>
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
                className="absolute -inset-2 bg-gradient-to-r from-blue-600/30 via-cyan-500/20 to-purple-600/30 rounded-2xl blur-xl pointer-events-none"
              />

              {/* Floating Animation Container */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="w-full max-w-xl relative rounded-2xl p-1 bg-gradient-to-b from-blue-500/30 via-slate-300/40 to-cyan-500/20 dark:from-blue-500/40 dark:via-cyan-500/20 dark:to-transparent shadow-2xl group"
              >
                {/* Visual Frame with Dark Defined Borders */}
                <div className="relative rounded-[14px] bg-[#070E1C] border-2 border-slate-300 dark:border-slate-700 overflow-hidden shadow-2xl h-[400px] sm:h-[460px] lg:h-[500px]">
                  
                  {/* High-Resolution Dedicated Hero Visual */}
                  <img
                    src="/images/automation_manager_governance.png"
                    alt="Knooviq Automation Manager - Centralized Enterprise Script Repository & Governance Engine"
                    className="w-full h-full object-cover object-center select-none group-hover:scale-[1.02] transition-transform duration-700"
                  />

                  {/* Top Floating Live Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 z-30">
                    <span className="px-3 py-1.5 rounded-full text-[10px] font-mono font-bold bg-[#070E1C]/90 backdrop-blur-md text-cyan-300 border-2 border-cyan-500/40 shadow-lg flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                      CENTRAL GOVERNANCE ENGINE ACTIVE
                    </span>
                  </div>

                  {/* Bottom Floating Telemetry Strip */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2 p-3 rounded-xl bg-[#070E1C]/90 backdrop-blur-md border-2 border-slate-700 shadow-xl text-xs z-30">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                      <div>
                        <div className="font-bold text-white text-[11px] font-sans">Role-Based Access Governance Active</div>
                        <div className="text-[9px] text-slate-400 font-mono">Enterprise Batch Scheduler &amp; Immutable Audit Trail</div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                      SECURED
                    </span>
                  </div>

                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: OPERATIONAL REALITIES (Governance Bottlenecks)
          ========================================================================= */}
      <section id="manager-friction" className="py-20 bg-white dark:bg-[#070E1C] border-b-2 border-slate-300 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Operational Realities
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              The Critical Risks of Ungoverned Enterprise Scripts
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed">
              Why relying on decentralized local desktop scripts without central IT oversight exposes systems to instability and audit failure.
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
                className="rounded-2xl p-6 bg-slate-50 dark:bg-[#0B1528] border-2 border-slate-300 dark:border-slate-700 flex flex-col justify-between hover:border-blue-500 dark:hover:border-blue-500 transition-all shadow-xs hover:shadow-md"
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
          SECTION 3: EXECUTION PIPELINE RUNTIME (Interactive 4-Stage Governance Engine)
          ========================================================================= */}
      <section id="manager-architecture" className="py-20 sm:py-28 bg-[#F8FAFC] dark:bg-[#050B17] border-b-2 border-slate-300 dark:border-slate-800 relative overflow-hidden">
        <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-600/15 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-cyan-500/10 dark:bg-cyan-600/15 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Interactive Governance Pipeline
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              The Automation Manager Governance Pipeline
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed">
              Step through the four-stage lifecycle of cataloging, authorization, environment promotion, and scheduled batch execution.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Interactive Stage Cards */}
            <div className="lg:col-span-5 space-y-3.5">
              {workflowSteps.map((step, idx) => {
                const isActive = activeStep === step.step;
                const stepThemes = [
                  {
                    borderActive: 'border-blue-500 dark:border-blue-400',
                    bgActive: 'bg-gradient-to-r from-blue-500/15 via-blue-500/5 to-white dark:to-[#070E1C] border-l-4 border-l-blue-500',
                    iconActive: 'bg-blue-600 text-white shadow-lg shadow-blue-500/30',
                    badgeActive: 'text-blue-600 dark:text-blue-400',
                    tagBg: 'bg-blue-500/15 text-blue-700 dark:text-blue-300 border-blue-500/30'
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

            {/* Right Column: Interactive Console (Clean, Static, High-Contrast) */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl p-1 bg-gradient-to-b from-blue-500/30 via-cyan-500/20 to-purple-600/20 dark:from-blue-500/40 dark:via-cyan-500/20 dark:to-transparent shadow-2xl">
                <div className="relative rounded-[14px] bg-[#070E1C] border-2 border-slate-300 dark:border-slate-700 overflow-hidden shadow-2xl p-5 sm:p-7 min-h-[500px] flex flex-col justify-between">
                  
                  {/* Background Ambient Glows */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

                  {/* Terminal Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b-2 border-slate-800 relative z-10">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      <span className="ml-2 text-[11px] font-mono font-bold text-slate-400">
                        knooviq-kernel://automation-manager-runtime
                      </span>
                    </div>

                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-blue-500/15 text-blue-300 border border-blue-500/30">
                      ADMINISTRATIVE CONSOLE
                    </span>
                  </div>

                  {/* Main Display per Active Step */}
                  <div className="py-4 flex-1 flex items-center justify-center relative z-10">
                    <AnimatePresence mode="wait">
                      {activeStep === 1 && (
                        <motion.div
                          key="manager-stage-1"
                          initial={{ opacity: 0, scale: 0.95, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="w-full space-y-4"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                              Central Script Repository Active
                            </span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/10 text-blue-300 border border-blue-500/30">
                              Immutable Vault
                            </span>
                          </div>

                          <div className="p-4 rounded-xl bg-white/5 border border-blue-500/30 space-y-3">
                            <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-slate-800">
                              <span className="text-slate-300">Cataloged Script Asset:</span>
                              <span className="text-cyan-300 font-bold">MM02_MassMaterialUpdate.txs</span>
                            </div>
                            <div className="grid grid-cols-2 gap-2.5 text-[11px] font-mono">
                              <div className="p-2.5 rounded bg-black/40 border border-slate-800 text-slate-300">
                                <span className="text-slate-400 block text-[9px] uppercase">Asset Metadata</span>
                                Target T-Code: MM02 • Script State: Certified Production
                              </div>
                              <div className="p-2.5 rounded bg-black/40 border border-slate-800 text-slate-300">
                                <span className="text-slate-400 block text-[9px] uppercase">Version Lineage</span>
                                Author: Senior Specialist • Peer Sign-Off: CoE Lead Verified
                              </div>
                            </div>
                            <div className="text-[10px] font-mono text-emerald-400 flex items-center gap-2">
                              <CheckCircle2 className="h-3.5 w-3.5" />
                              <span>Cryptographic Checksum Verified • Ready for Execution</span>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {activeStep === 2 && (
                        <motion.div
                          key="manager-stage-2"
                          initial={{ opacity: 0, scale: 0.95, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="w-full space-y-4"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400 flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                              Role-Based Access Governance
                            </span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-500/10 text-purple-300 border border-purple-500/30">
                              Granular Boundary
                            </span>
                          </div>

                          <div className="p-4 rounded-xl bg-white/5 border border-purple-500/30 space-y-3">
                            <div className="grid grid-cols-3 gap-2 text-[10px] font-mono text-slate-400 border-b border-slate-800 pb-2 font-bold">
                              <div>ORGANIZATIONAL ROLE</div>
                              <div>SAP SYSTEM TARGET</div>
                              <div>EXECUTION PERMISSION</div>
                            </div>
                            <div className="grid grid-cols-3 gap-2 text-[11px] font-mono text-slate-200 py-1 items-center">
                              <div className="text-purple-300 font-bold">Supply Chain Specialist</div>
                              <div className="text-slate-300">S4_PRD_CLUSTER</div>
                              <div className="text-emerald-400 font-bold">AUTHORIZED</div>
                            </div>
                            <div className="grid grid-cols-3 gap-2 text-[11px] font-mono text-slate-200 py-1 items-center">
                              <div className="text-purple-300 font-bold">Junior Data Clerk</div>
                              <div className="text-slate-300">S4_QAS_INSTANCE</div>
                              <div className="text-blue-400 font-bold">RESTRICTED</div>
                            </div>
                            <div className="grid grid-cols-3 gap-2 text-[11px] font-mono text-slate-200 py-1 items-center">
                              <div className="text-purple-300 font-bold">External Auditor</div>
                              <div className="text-slate-300">GLOBAL_CATALOG</div>
                              <div className="text-cyan-300">READ-ONLY AUDIT</div>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {activeStep === 3 && (
                        <motion.div
                          key="manager-stage-3"
                          initial={{ opacity: 0, scale: 0.95, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="w-full space-y-4"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                              Script Lifecycle Promotion Matrix
                            </span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                              Release Gate
                            </span>
                          </div>

                          <div className="p-4 rounded-xl bg-white/5 border border-emerald-500/30 space-y-3">
                            <div className="grid grid-cols-2 gap-3">
                              <div className="p-3 rounded-lg bg-black/40 border border-slate-800 space-y-1">
                                <span className="text-[10px] font-mono text-slate-400">Environment Pathway</span>
                                <p className="text-xs font-bold text-emerald-400 font-mono">Development -&gt; QA -&gt; Production</p>
                              </div>
                              <div className="p-3 rounded-lg bg-black/40 border border-slate-800 space-y-1">
                                <span className="text-[10px] font-mono text-slate-400">Gatekeeper Sign-Off</span>
                                <p className="text-xs font-bold text-emerald-400 font-mono">Center of Excellence Lead Signed</p>
                              </div>
                            </div>
                            <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-2 text-xs font-mono text-emerald-300">
                              <ShieldCheck className="h-4 w-4 flex-shrink-0" />
                              <span>Promotion Validation: Script Complies with Production Policies</span>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {activeStep === 4 && (
                        <motion.div
                          key="manager-stage-4"
                          initial={{ opacity: 0, scale: 0.95, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="w-full space-y-4"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                              Autonomous Off-Peak Batch Scheduler
                            </span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                              Automated Dispatch
                            </span>
                          </div>

                          <div className="p-4 rounded-xl bg-white/5 border border-cyan-500/30 space-y-3">
                            <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-slate-800">
                              <span className="text-slate-300">Scheduled Execution Window:</span>
                              <span className="text-cyan-400 font-bold">Midnight Off-Peak Batch Window</span>
                            </div>
                            <div className="space-y-1.5 text-[11px] font-mono text-slate-300">
                              <div className="flex justify-between">
                                <span>Concurrency Governor:</span>
                                <span className="text-emerald-400 font-bold">Dynamic Thread Throttling Active</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Execution Health:</span>
                                <span className="text-cyan-300">Autonomous Monitoring &amp; Alerting</span>
                              </div>
                            </div>
                            <div className="p-2 rounded bg-cyan-500/10 border border-cyan-500/30 text-[10px] font-mono text-cyan-300 text-center">
                              Batch Completed Successfully • Full Telemetry Logged to Central Database
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
                        Status: Governance Server Online
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
      <section id="manager-capabilities" className="py-20 bg-white dark:bg-[#070E1C] border-b-2 border-slate-300 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Enterprise Governance Platform
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Key Capabilities of Automation Manager
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed">
              Engineered to bring total visibility, version management, and granular permission boundaries across your automation ecosystem.
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
                  className="rounded-2xl p-6 bg-slate-50 dark:bg-[#0B1528] border-2 border-slate-300 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all shadow-xs hover:shadow-md"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
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
      <section id="manager-usecases" className="py-20 bg-[#F8FAFC] dark:bg-[#050B17] border-b-2 border-slate-300 dark:border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Universal Application
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Tailored Across Enterprise IT &amp; Administration Teams
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed">
              How enterprise administrators, compliance officers, and SAP Centers of Excellence enforce automated operational control.
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
                  className="rounded-2xl p-7 bg-white dark:bg-[#070E1C] border-2 border-slate-300 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all shadow-xs hover:shadow-md flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
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
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60 font-medium"
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
          SECTION 6: IT INFRASTRUCTURE, SECURITY & LANDSCAPE INTEGRATION
          ========================================================================= */}
      <section id="manager-governance" className="py-20 bg-white dark:bg-[#070E1C] border-b-2 border-slate-300 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Infrastructure &amp; Security
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Built for Enterprise IT Security and Multi-System Landscapes
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed">
              Zero compromise on single sign-on integration, concurrency throttling, or multi-tenant SAP landscape control.
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
                  className="rounded-2xl p-7 bg-slate-50 dark:bg-[#0B1528] border-2 border-slate-300 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all shadow-xs hover:shadow-md flex flex-col justify-between"
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
                    <span>Verified Administrative Standard</span>
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
      <section id="manager-cta" className="py-20 bg-gradient-to-b from-[#F8FAFC] to-blue-50/50 dark:from-[#050B17] dark:to-[#070E1C] border-t-2 border-slate-300 dark:border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-white/5 border-2 border-slate-300 dark:border-slate-700 text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span>KNOOVIQ AUTOMATION SUITE</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Take Full Control of Your SAP Automation Landscape
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed">
            Centralize script governance, enforce role-based access controls, and schedule mass batch operations safely with Automation Manager.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenContact?.('Automation Manager Consultation')}
              className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer"
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

export default AutomationManagerPage;
