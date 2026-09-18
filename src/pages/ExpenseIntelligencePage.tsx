import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Receipt, 
  CreditCard, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Clock, 
  AlertCircle, 
  Workflow, 
  Zap, 
  CheckCheck, 
  Eye, 
  Send, 
  ShieldCheck,
  Camera,
  Check,
  DollarSign,
  Tag,
  Building2,
  FileCheck2,
  Layers,
  Database,
  Server,
  ScanLine,
  FileSpreadsheet,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface ExpenseIntelligencePageProps {
  onOpenContact?: (service?: string) => void;
}

export const ExpenseIntelligencePage: React.FC<ExpenseIntelligencePageProps> = ({ onOpenContact }) => {
  useEffect(() => {
    document.title = 'Expense Intelligence | Enterprise AI Products';
  }, []);

  const [activeStep, setActiveStep] = useState<number>(1);

  // Auto-cycle the "How It Works" step every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev % 4) + 1);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const challenges = [
    {
      title: 'Manual Expense Entry',
      description: 'Employees spend hours transcribing receipt numbers, dates, and amounts into tedious forms.',
      impact: 'Productivity loss across sales & field teams',
      icon: Clock,
      tag: 'Time Sink'
    },
    {
      title: 'Receipt Processing',
      description: 'Crumpled paper slips, faded thermal printouts, and blurry photos clog auditing queues.',
      impact: 'Missing documentation & audit delays',
      icon: AlertCircle,
      tag: 'Lost Paperwork'
    },
    {
      title: 'Policy Compliance',
      description: 'Out-of-policy claims, duplicate submissions, and per-diem breaches slip past manual review.',
      impact: 'Unchecked corporate spend leakage',
      icon: ShieldCheck,
      tag: 'Compliance Risk'
    },
    {
      title: 'Slow Reimbursements',
      description: 'Multi-week approval latency frustrates traveling employees and complicates monthly close.',
      impact: 'Protracted reimbursement cycles & employee lag',
      icon: Workflow,
      tag: 'Employee Friction'
    }
  ];

  const workflowSteps = [
    {
      step: 1,
      phase: 'Phase: Ingestion',
      name: 'Capture',
      title: 'Instant Multichannel Intake',
      desc: 'Snap a mobile receipt photo, forward digital e-receipts from your inbox, or sync live corporate credit card feeds.',
      icon: Camera,
      badge: 'Instant Mobile Intake'
    },
    {
      step: 2,
      phase: 'Phase: Extraction',
      name: 'Extract',
      title: 'Cognitive Data Extraction',
      desc: 'Neural OCR extracts merchant, timestamp, line items, taxes, and multi-currency amounts in real time.',
      icon: Receipt,
      badge: 'Sub-Second OCR'
    },
    {
      step: 3,
      phase: 'Phase: Audit',
      name: 'Validate',
      title: 'Automated Policy Audit',
      desc: 'Instant cross-check against corporate expense limits, allowable merchant categories, and duplicate detection.',
      icon: CheckCircle2,
      badge: 'Zero Policy Drift'
    },
    {
      step: 4,
      phase: 'Phase: Reimbursement',
      name: 'Reimburse',
      title: 'Touchless Payout & Sync',
      desc: 'Auto-approved claims route straight to payroll or ERP accounts payable for prompt employee reimbursement.',
      icon: Send,
      badge: 'Direct ERP Posting'
    }
  ];

  const capabilities = [
    {
      title: 'Receipt Data Extraction',
      desc: 'State-of-the-art vision models extract merchants, dates, itemized subtotals, tips, and foreign taxes with high precision.',
      icon: Receipt,
      tag: 'Itemized OCR'
    },
    {
      title: 'Automated Categorization',
      desc: 'Machine learning automatically classifies spend into corresponding GL accounts, department cost centers, and tax codes.',
      icon: Tag,
      tag: 'Smart GL Allocation'
    },
    {
      title: 'Policy Validation',
      desc: 'Configurable spending rules automatically flag weekend expenses, missing itemized tabs, or excess per diems.',
      icon: ShieldCheck,
      tag: 'Continuous Governance'
    },
    {
      title: 'Expense Approval',
      desc: 'Touchless approval for compliant claims under preset thresholds, with smart escalation for policy exceptions.',
      icon: Workflow,
      tag: 'Dynamic Routing'
    }
  ];

  const strategicAdvantages = [
    {
      icon: Zap,
      title: 'Instant Policy Auditing',
      category: 'Autonomous Verification',
      description: 'Automate receipt compliance checks against company spending limits, allowable per diems, and weekend policies.'
    },
    {
      icon: ShieldCheck,
      title: 'Fraud & Duplicate Defense',
      category: 'Continuous Governance',
      description: 'Detect duplicate submissions, altered totals, and unauthorized expenses before reimbursement takes place.'
    },
    {
      icon: Tag,
      title: 'Smart Ledger Categorization',
      category: 'GL Automation',
      description: 'Map messy expense narratives directly to appropriate cost centers, internal projects, and tax categories.'
    },
    {
      icon: CreditCard,
      title: 'Corporate Card Integration',
      category: 'Enterprise Connectivity',
      description: 'Direct feeds reconcile AMEX, Visa, and Mastercard corporate cards with digital receipts automatically.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#050B17] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      {/* =========================================================================
          1. HERO SECTION (With Single Main Widescreen Visual + Executive Layout)
          ========================================================================= */}
      <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#00A3E0]/10 dark:bg-[#00A3E0]/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Heading & Executive Typography */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="lg:col-span-6 space-y-6 text-center lg:text-left"
            >
              {/* Strategic Pill Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 dark:bg-sky-950/40 border-2 border-sky-200 dark:border-sky-800/80 text-xs text-[#0077B6] dark:text-cyan-300 font-semibold shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#00A3E0] animate-pulse" />
                <span className="font-semibold text-slate-900 dark:text-white font-sans">Expense Intelligence</span>
                <span className="text-slate-300 dark:text-slate-600">|</span>
                <span className="text-[#0077B6] dark:text-cyan-400 font-semibold font-sans">Autonomous Spend Management</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.18] font-display">
                Continuous Corporate Spend Auditing From{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-[#0A1931] to-[#00A3E0] dark:from-white dark:via-cyan-200 dark:to-[#00A3E0]">
                  Receipt Snap
                </span>{' '}
                to Instant Reimbursement.
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-2xl font-sans">
                Stop chasing paper receipts, reconciling corporate cards manually, and resolving expense audit bottlenecks. KnoovIQ extracts line items from any receipt format, audits travel policies in real time, and executes instantaneous reimbursement directly to your core ledger.
              </p>

              {/* Hero CTA Group */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                <button
                  onClick={() => onOpenContact?.('Expense Intelligence')}
                  className="px-7 py-3.5 rounded-xl bg-[#00A3E0] hover:bg-[#008bc0] text-white font-semibold text-sm shadow-md shadow-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2.5 group cursor-pointer"
                >
                  <span>Request Live Expense Demo</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="#expense-friction"
                  className="px-6 py-3.5 rounded-xl bg-white dark:bg-[#0B1528] hover:bg-slate-50 dark:hover:bg-[#0E1A33] border-2 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-sm font-semibold transition-all flex items-center gap-2 shadow-xs hover:-translate-y-0.5"
                >
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-4 h-4 text-[#00A3E0]" />
                </a>
              </div>

              {/* Executive Capability Highlights (No Numbers / Dark Borders / Interactive Animations) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t-2 border-slate-300 dark:border-slate-700/80 text-left">
                <div className="group/item bg-white dark:bg-[#070E1C] p-3.5 rounded-xl border-2 border-slate-300 dark:border-slate-700 hover:border-[#00A3E0] dark:hover:border-[#00A3E0] transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5">
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/10 text-[#00A3E0] flex items-center justify-center mb-2 group-hover/item:scale-110 transition-transform">
                    <Receipt className="h-4 w-4" />
                  </div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider font-mono">Capture</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5 font-display">Neural Vision</p>
                  <p className="text-[11px] text-[#0077B6] dark:text-cyan-400 font-medium mt-0.5 font-sans">Itemized Parsing</p>
                </div>
                <div className="group/item bg-white dark:bg-[#070E1C] p-3.5 rounded-xl border-2 border-slate-300 dark:border-slate-700 hover:border-[#00A3E0] dark:hover:border-[#00A3E0] transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-2 group-hover/item:scale-110 transition-transform">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider font-mono">Audit</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5 font-display">Zero Drift</p>
                  <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium mt-0.5 font-sans">Policy Standards</p>
                </div>
                <div className="group/item bg-white dark:bg-[#070E1C] p-3.5 rounded-xl border-2 border-slate-300 dark:border-slate-700 hover:border-[#00A3E0] dark:hover:border-[#00A3E0] transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5">
                  <div className="w-7 h-7 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-2 group-hover/item:scale-110 transition-transform">
                    <Zap className="h-4 w-4" />
                  </div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider font-mono">Settlement</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5 font-display">Instant Sync</p>
                  <p className="text-[11px] text-[#0077B6] dark:text-cyan-400 font-medium mt-0.5 font-sans">Touchless Payout</p>
                </div>
                <div className="group/item bg-white dark:bg-[#070E1C] p-3.5 rounded-xl border-2 border-slate-300 dark:border-slate-700 hover:border-[#00A3E0] dark:hover:border-[#00A3E0] transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-2 group-hover/item:scale-110 transition-transform">
                    <CreditCard className="h-4 w-4" />
                  </div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider font-mono">Banking</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5 font-display">Card Mesh</p>
                  <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium mt-0.5 font-sans">AMEX &amp; Visa Ready</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Long Widescreen Visual Frame with High-Resolution Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
              className="lg:col-span-6 relative flex justify-center"
            >
              <div className="relative w-full rounded-2xl p-1 bg-gradient-to-b from-[#00A3E0]/30 via-cyan-500/15 to-blue-600/10 dark:from-[#00A3E0]/40 dark:via-white/10 dark:to-transparent shadow-2xl group">
                
                {/* Long Image Container with Dedicated Height and Darker Border */}
                <div className="relative rounded-[14px] bg-[#070E1C] border-2 border-slate-300/40 dark:border-slate-700/80 overflow-hidden shadow-2xl h-[380px] sm:h-[460px] lg:h-[500px] xl:h-[540px]">
                  <img 
                    src="/images/expense_intelligence_hero.jpg" 
                    alt="Expense Intelligence - Automated Corporate Spend Auditing" 
                    className="w-full h-full object-cover object-center select-none group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Subtle Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070E1C]/85 via-transparent to-transparent pointer-events-none" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-[#070E1C]/90 backdrop-blur-md text-cyan-300 border-2 border-cyan-500/40 shadow-lg flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      CONTINUOUS SPEND AUDIT ACTIVE
                    </span>
                  </div>

                  {/* Bottom Floating Telemetry Strip (No Numbers / Pure Assurance) */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2 p-3 rounded-xl bg-[#070E1C]/95 backdrop-blur-md border-2 border-slate-700 shadow-xl text-xs">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                      <div>
                        <div className="font-bold text-white text-[11px] font-sans">Policy Adherence Verified</div>
                        <div className="text-[9px] text-slate-400 font-mono">Autonomous Corporate Spend Verification Active</div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                      APPROVED FOR PAYOUT
                    </span>
                  </div>

                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          2. EXPENSE CHALLENGES SECTION (4 Compact Cards With Darker Borders)
          ========================================================================= */}
      <section id="expense-friction" className="py-16 sm:py-24 bg-white dark:bg-[#070E1C] border-y-2 border-slate-300 dark:border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00A3E0] dark:text-cyan-400">
              Corporate Spend Friction
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              From Expense Complexity to Clarity
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed">
              Outdated expense workflows frustrate employees, invite duplicate claims, and blind finance leaders to real-time spend.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((c, idx) => {
              const IconComp = c.icon;
              return (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group rounded-2xl p-6 bg-slate-50 dark:bg-[#0B1528] border-2 border-slate-300 dark:border-slate-700 hover:border-[#00A3E0] dark:hover:border-[#00A3E0] transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-xl hover:shadow-[#00A3E0]/10 hover:-translate-y-1.5"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-red-500/10 dark:bg-red-500/20 text-red-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComp className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200/70 dark:bg-white/10 text-slate-600 dark:text-slate-400 font-semibold">
                        {c.tag}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-[#00A3E0] transition-colors font-display">
                      {c.title}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                      {c.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t-2 border-slate-200 dark:border-slate-800 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    <span className="text-red-500 dark:text-red-400 font-semibold">Friction:</span> {c.impact}
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          3. HOW IT WORKS (Interactive Cognitive Showcase with Image & Rich Color)
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC] dark:bg-[#050B17] border-y-2 border-slate-300 dark:border-slate-800 relative overflow-hidden">
        {/* Colorful ambient background glows */}
        <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 dark:bg-cyan-500/15 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-emerald-500/10 dark:bg-emerald-600/15 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00A3E0] dark:text-cyan-400">
              Autonomous Lifecycle
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Intelligent Expense Processing
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed">
              Transform receipts into reconciled ERP entries in four automated, touchless stages.
            </p>
          </div>

          {/* Master-Detail Interactive Canvas */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: 4 Dynamic Interactive Stage Cards */}
            <div className="lg:col-span-5 space-y-3.5">
              {workflowSteps.map((step, idx) => {
                const Icon = step.icon;
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
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${
                        isActive 
                          ? stepThemes.iconActive 
                          : 'bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-400'
                      }`}>
                        <Icon className="h-5 w-5" />
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

            {/* Right Column: Interactive Autonomous Cognitive Simulator (100% Pure Code & SVG, Zero Images) */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl p-1 bg-gradient-to-b from-cyan-500/30 via-emerald-500/20 to-blue-600/20 dark:from-cyan-500/40 dark:via-emerald-500/20 dark:to-transparent shadow-2xl">
                
                <div className="relative rounded-[14px] bg-[#070E1C] border-2 border-slate-300 dark:border-slate-700 overflow-hidden shadow-2xl p-5 sm:p-7 min-h-[460px] sm:min-h-[500px] flex flex-col justify-between">
                  
                  {/* Subtle ambient internal glow */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />

                  {/* Terminal Window Header Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b-2 border-slate-800 relative z-10">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      <span className="ml-2 text-[11px] font-mono font-bold text-slate-400">
                        knooviq-kernel://expense-cognition
                      </span>
                    </div>

                    {/* Interactive Step Quick-Selectors */}
                    <div className="flex items-center gap-1.5">
                      {[1, 2, 3, 4].map((s) => (
                        <button
                          key={s}
                          onClick={() => setActiveStep(s)}
                          className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-bold transition-all cursor-pointer ${
                            activeStep === s
                              ? 'bg-[#00A3E0] text-white shadow-md shadow-cyan-500/30'
                              : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                          }`}
                        >
                          STAGE 0{s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Main Live Stage Simulation Canvas (AnimatePresence based on activeStep) */}
                  <div className="py-6 flex-1 flex items-center justify-center relative z-10">
                    <AnimatePresence mode="wait">
                      {activeStep === 1 && (
                        <motion.div
                          key="exp-stage-1"
                          initial={{ opacity: 0, scale: 0.95, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="w-full space-y-4"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                              Omnichannel Receipt &amp; Expense Stream Ingested
                            </span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                              Instant Intake Active
                            </span>
                          </div>

                          {/* Ingestion Stream Cards */}
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <div className="p-3.5 rounded-xl bg-white/5 border border-cyan-500/30 space-y-2">
                              <div className="flex items-center justify-between">
                                <Camera className="h-4 w-4 text-cyan-400" />
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                              </div>
                              <div className="text-xs font-bold text-white font-display">Mobile Photo Snaps</div>
                              <p className="text-[10px] text-slate-400 font-sans">Wrinkled paper slips, thermal receipts &amp; bills</p>
                              <div className="text-[9px] font-mono text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded w-fit">Auto-Enhance</div>
                            </div>

                            <div className="p-3.5 rounded-xl bg-white/5 border border-purple-500/30 space-y-2">
                              <div className="flex items-center justify-between">
                                <CreditCard className="h-4 w-4 text-purple-400" />
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                              </div>
                              <div className="text-xs font-bold text-white font-display">Corporate Card Feeds</div>
                              <p className="text-[10px] text-slate-400 font-sans">Real-time Visa, Mastercard &amp; Amex stream</p>
                              <div className="text-[9px] font-mono text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded w-fit">Bank Connected</div>
                            </div>

                            <div className="p-3.5 rounded-xl bg-white/5 border border-blue-500/30 space-y-2">
                              <div className="flex items-center justify-between">
                                <Receipt className="h-4 w-4 text-blue-400" />
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                              </div>
                              <div className="text-xs font-bold text-white font-display">E-Invoices &amp; Travel</div>
                              <p className="text-[10px] text-slate-400 font-sans">Automated Uber, flight &amp; hotel PDF inbox listener</p>
                              <div className="text-[9px] font-mono text-blue-300 bg-blue-500/10 px-2 py-0.5 rounded w-fit">Direct Sync</div>
                            </div>
                          </div>

                          {/* Live Ingestion Telemetry Bar */}
                          <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-between text-xs">
                            <div className="flex items-center gap-2">
                              <Zap className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                              <span className="text-[11px] text-slate-300 font-sans">Zero manual envelope stuffing or spreadsheet logging required</span>
                            </div>
                            <span className="text-[10px] font-mono font-bold text-cyan-300">STREAMING</span>
                          </div>
                        </motion.div>
                      )}

                      {activeStep === 2 && (
                        <motion.div
                          key="exp-stage-2"
                          initial={{ opacity: 0, scale: 0.95, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="w-full space-y-4"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400 flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                              Neural Receipt Parsing &amp; Itemization
                            </span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-500/10 text-purple-300 border border-purple-500/30">
                              Sub-Second OCR
                            </span>
                          </div>

                          {/* Simulated Interactive Document Scanner Sheet */}
                          <div className="relative p-4 rounded-xl bg-white/5 border-2 border-purple-500/40 overflow-hidden space-y-3">
                            {/* Animated Scanner Laser Bar */}
                            <motion.div
                              animate={{ y: [-10, 130, -10] }}
                              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                              className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent shadow-[0_0_15px_#a855f7] pointer-events-none"
                            />

                            {/* Extracted Bounding Box Chips */}
                            <div className="flex items-center justify-between p-2 rounded-lg bg-purple-500/10 border border-purple-500/30">
                              <div className="flex items-center gap-2">
                                <ScanLine className="h-3.5 w-3.5 text-purple-400" />
                                <span className="text-[11px] text-white font-mono font-bold">Merchant Name &amp; Category</span>
                              </div>
                              <span className="text-[10px] font-mono text-emerald-400 font-semibold">Hospitality &amp; Travel Verified</span>
                            </div>

                            <div className="flex items-center justify-between p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                              <div className="flex items-center gap-2">
                                <FileSpreadsheet className="h-3.5 w-3.5 text-cyan-400" />
                                <span className="text-[11px] text-white font-mono font-bold">Itemized Breakdown &amp; Meals</span>
                              </div>
                              <span className="text-[10px] font-mono text-cyan-300 font-semibold">Sub-Totals &amp; Tips Split</span>
                            </div>

                            <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                              <div className="flex items-center gap-2">
                                <CheckCheck className="h-3.5 w-3.5 text-emerald-400" />
                                <span className="text-[11px] text-white font-mono font-bold">Multi-Currency FX Conversion</span>
                              </div>
                              <span className="text-[10px] font-mono text-emerald-400 font-semibold">Exchange Rate Reconciled</span>
                            </div>
                          </div>

                          <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-between text-xs">
                            <span className="text-[11px] text-slate-300 font-sans">Multi-lingual neural model classifies complex receipt headers across global currencies</span>
                            <span className="text-[10px] font-mono font-bold text-purple-300">PARSED</span>
                          </div>
                        </motion.div>
                      )}

                      {activeStep === 3 && (
                        <motion.div
                          key="exp-stage-3"
                          initial={{ opacity: 0, scale: 0.95, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="w-full space-y-4"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                              Policy Adherence &amp; Fraud Audit
                            </span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                              Zero Drift Guarantee
                            </span>
                          </div>

                          {/* 3-Way Match Verification Triad */}
                          <div className="grid grid-cols-3 gap-2 text-center">
                            <div className="p-3 rounded-xl bg-white/5 border-2 border-emerald-500/40 space-y-1">
                              <div className="text-[10px] font-mono text-emerald-400 font-bold uppercase">Policy 01</div>
                              <div className="text-xs font-bold text-white font-display">Per-Diem Cap</div>
                              <div className="text-[9px] text-slate-400 font-sans">Within limits</div>
                            </div>
                            <div className="p-3 rounded-xl bg-white/5 border-2 border-emerald-500/40 space-y-1">
                              <div className="text-[10px] font-mono text-emerald-400 font-bold uppercase">Policy 02</div>
                              <div className="text-xs font-bold text-white font-display">Receipt Match</div>
                              <div className="text-[9px] text-slate-400 font-sans">Card line reconciled</div>
                            </div>
                            <div className="p-3 rounded-xl bg-white/5 border-2 border-emerald-500/40 space-y-1">
                              <div className="text-[10px] font-mono text-emerald-400 font-bold uppercase">Policy 03</div>
                              <div className="text-xs font-bold text-white font-display">Fraud Scan</div>
                              <div className="text-[9px] text-slate-400 font-sans">Unique submission</div>
                            </div>
                          </div>

                          {/* Audit Verification Checklist */}
                          <div className="p-3.5 rounded-xl bg-white/5 border border-slate-700 space-y-2">
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-slate-300 font-sans flex items-center gap-2">
                                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                                Corporate Travel &amp; Meal Policy Guidelines
                              </span>
                              <span className="text-[10px] font-mono text-emerald-400 font-bold">COMPLIANT</span>
                            </div>
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-slate-300 font-sans flex items-center gap-2">
                                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                                Anti-Duplicate &amp; Suspicious Charge Screening
                              </span>
                              <span className="text-[10px] font-mono text-emerald-400 font-bold">CLEARED</span>
                            </div>
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-slate-300 font-sans flex items-center gap-2">
                                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                                Automated Manager Approval Matrix
                              </span>
                              <span className="text-[10px] font-mono text-emerald-400 font-bold">PRE-APPROVED</span>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {activeStep === 4 && (
                        <motion.div
                          key="exp-stage-4"
                          initial={{ opacity: 0, scale: 0.95, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="w-full space-y-4"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                              Touchless ERP Ledger Sync &amp; Reimbursement
                            </span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/10 text-blue-300 border border-blue-500/30">
                              Instant Settlement
                            </span>
                          </div>

                          {/* Connected Ecosystem Hub Cards */}
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <div className="p-3.5 rounded-xl bg-white/5 border border-blue-500/30 text-center space-y-1.5">
                              <div className="w-8 h-8 mx-auto rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center">
                                <Database className="h-4 w-4" />
                              </div>
                              <div className="text-xs font-bold text-white font-display">SAP &amp; NetSuite ERP</div>
                              <span className="inline-block text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                                General Ledger Synced
                              </span>
                            </div>

                            <div className="p-3.5 rounded-xl bg-white/5 border border-blue-500/30 text-center space-y-1.5">
                              <div className="w-8 h-8 mx-auto rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center">
                                <Building2 className="h-4 w-4" />
                              </div>
                              <div className="text-xs font-bold text-white font-display">Workday &amp; HRIS</div>
                              <span className="inline-block text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                                Payroll Updated
                              </span>
                            </div>

                            <div className="p-3.5 rounded-xl bg-white/5 border border-blue-500/30 text-center space-y-1.5">
                              <div className="w-8 h-8 mx-auto rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center">
                                <Send className="h-4 w-4" />
                              </div>
                              <div className="text-xs font-bold text-white font-display">Bank ACH Gateway</div>
                              <span className="inline-block text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                                Payout Scheduled
                              </span>
                            </div>
                          </div>

                          {/* Audit Logging Assurance */}
                          <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-between text-xs">
                            <span className="text-[11px] text-slate-300 font-sans">Full compliance audit logs and tax documentation archived permanently</span>
                            <span className="text-[10px] font-mono font-bold text-blue-300">ARCHIVED</span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Terminal Window Footer Bar with Interactive Navigation Controls */}
                  <div className="pt-4 border-t-2 border-slate-800 flex items-center justify-between text-xs relative z-10">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[11px] text-slate-400 font-mono">
                        Reconciliation Engine: <span className="text-emerald-400 font-bold">Autonomous Execution Active</span>
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setActiveStep((prev) => (prev === 1 ? 4 : prev - 1))}
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-slate-700 transition-all cursor-pointer"
                        title="Previous Stage"
                      >
                        <ChevronLeft className="h-3.5 w-3.5" />
                      </button>
                      <button
                        onClick={() => setActiveStep((prev) => (prev === 4 ? 1 : prev + 1))}
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-slate-700 transition-all cursor-pointer"
                        title="Next Stage"
                      >
                        <ChevronRight className="h-3.5 w-3.5" />
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
          4. KEY CAPABILITIES SECTION (4 Compact Cards)
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-white dark:bg-[#070E1C] border-t-2 border-slate-300 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00A3E0] dark:text-cyan-400">
              Core Technologies
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Built for Smarter Expense Operations
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed">
              Powerful cognitive intelligence modules built to scale with global enterprise workforces.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group rounded-2xl p-6 bg-slate-50 dark:bg-[#0B1528] border-2 border-slate-300 dark:border-slate-700 hover:border-[#00A3E0] dark:hover:border-[#00A3E0] transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-xl hover:shadow-[#00A3E0]/10 hover:-translate-y-1.5"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-[#00A3E0]/10 text-[#00A3E0] dark:bg-cyan-500/20 dark:text-cyan-300 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#00A3E0] group-hover:text-white transition-all duration-300">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-[#00A3E0] transition-colors font-display">
                      {cap.title}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                      {cap.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t-2 border-slate-200 dark:border-slate-800">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white dark:bg-white/5 text-slate-600 dark:text-slate-400 font-semibold border border-slate-200 dark:border-white/5">
                      {cap.tag}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          5. BENEFITS SECTION (Strategic Advantages)
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-[#F8FAFC] dark:bg-[#050B17] border-t-2 border-slate-300 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00A3E0] dark:text-cyan-400">
              Executive Standard
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Strategic Advantages for Enterprise Finance
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed">
              Eliminate administrative overhead while establishing resilient, autonomous spending governance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {strategicAdvantages.map((b, idx) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group rounded-2xl p-6 bg-white dark:bg-[#070E1C] border-2 border-slate-300 dark:border-slate-700 hover:border-[#00A3E0] dark:hover:border-[#00A3E0] shadow-sm hover:shadow-xl hover:shadow-[#00A3E0]/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between text-left"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-[#00A3E0]/10 text-[#00A3E0] dark:bg-cyan-500/20 dark:text-cyan-300 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#00A3E0] group-hover:text-white transition-all duration-300 shadow-xs">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#00A3E0] dark:text-cyan-400">
                        {b.category}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display mt-1 group-hover:text-[#00A3E0] transition-colors">
                        {b.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                      {b.description}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t-2 border-slate-200 dark:border-slate-800">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400 font-mono">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      Executive Standard
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          6. FINAL CTA SECTION
          ========================================================================= */}
      <section className="py-20 bg-white dark:bg-[#070E1C] border-t-2 border-slate-300 dark:border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00A3E0]/5 via-transparent to-blue-500/5 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00A3E0] dark:text-cyan-400">
            Intelligent Spend Management
          </span>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Make Expense Management Intelligent
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-sans">
            Automate expense processing and gain better control over financial operations.
          </p>

          <div className="pt-2 flex justify-center">
            <button
              onClick={() => onOpenContact?.('Expense Intelligence')}
              className="glow-btn inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white shadow-xl shadow-[#00A3E0]/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>Request a Demo</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ExpenseIntelligencePage;
