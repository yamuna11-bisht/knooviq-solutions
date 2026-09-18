import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
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
  Check,
  DollarSign,
  FileSpreadsheet,
  Layers,
  UploadCloud,
  Cpu,
  Receipt,
  Database,
  Server,
  ScanLine,
  FileText,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface BankStatementIntelligencePageProps {
  onOpenContact?: (service?: string) => void;
}

export const BankStatementIntelligencePage: React.FC<BankStatementIntelligencePageProps> = ({ onOpenContact }) => {
  useEffect(() => {
    document.title = 'Bank Statement Intelligence | Enterprise AI Products';
  }, []);

  const [activeStage, setActiveStage] = useState<number>(1);
  const [activeWorkflowStep, setActiveWorkflowStep] = useState<number>(1);

  // Auto-cycle the "Intelligent Processing" flow every 3.5s
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStage((prev) => (prev % 4) + 1);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const challenges = [
    {
      title: 'Manual Ledger Transcription',
      description: 'Finance teams waste valuable hours transcribing transaction rows, value dates, and check numbers from PDFs into spreadsheets.',
      impact: 'High operational turnaround delay',
      icon: Clock,
      tag: 'Manual Friction'
    },
    {
      title: 'Bank Layout Variety',
      description: 'Every financial institution formats statements differently, with unique column structures, shifted margins, and table breaks.',
      impact: 'Breaks rigid template OCR',
      icon: Layers,
      tag: 'Format Fragmentation'
    },
    {
      title: 'Arithmetic Balance Drift',
      description: 'Transposed digits, missed bank service fees, and unrecorded foreign exchange adjustments cause reconciliation discrepancies.',
      impact: 'Costly month-end audit remediation',
      icon: AlertCircle,
      tag: 'Ledger Drift'
    },
    {
      title: 'Month-End Backlogs',
      description: 'High transaction spikes during closing cycles create operational bottlenecks that delay financial statements and executive reporting.',
      impact: 'Prolonged book-close timelines',
      icon: Workflow,
      tag: 'Closing Bottlenecks'
    }
  ];

  const processingStages = [
    {
      step: 1,
      phase: 'Phase: Ingestion',
      name: 'Bank Statement',
      subtitle: 'Raw Document Intake',
      desc: 'Ingest multi-page PDF statements, scanned images, and password-protected e-statements across global financial institutions.',
      icon: Building2,
      badge: 'Omnichannel Ingestion'
    },
    {
      step: 2,
      phase: 'Phase: Extraction',
      name: 'AI Extraction',
      subtitle: 'Deep Neural OCR',
      desc: 'Cognitive models extract transaction rows, descriptions, cheque numbers, value dates, and multi-currency amounts in real time.',
      icon: Cpu,
      badge: 'Sub-Second Extraction'
    },
    {
      step: 3,
      phase: 'Phase: Audit',
      name: 'Validated Data',
      subtitle: 'Checksum & Balance Audit',
      desc: 'Automated mathematical reconciliation ensures Opening Balance + Total Credits - Total Debits = Closing Balance with zero drift.',
      icon: ShieldCheck,
      badge: 'Mathematical Audit'
    },
    {
      step: 4,
      phase: 'Phase: Export',
      name: 'Ready to Use',
      subtitle: 'ERP & Ledger Sync',
      desc: 'Pre-categorized GL line items push straight into SAP S/4HANA, Oracle, QuickBooks, or internal treasury platforms.',
      icon: FileSpreadsheet,
      badge: 'Touchless Export'
    }
  ];

  const keyFeatures = [
    {
      title: 'AI Data Extraction',
      desc: 'Computer vision and deep learning models capture transaction dates, descriptions, checks, credits, and debits with sub-second latency.',
      icon: Zap,
      tag: 'Layout-Agnostic OCR'
    },
    {
      title: 'Smart Validation',
      desc: 'Automated mathematical checksum verification ensures opening balances, debits, credits, and closing balances reconcile flawlessly.',
      icon: CheckCircle2,
      tag: 'Automated Reconciliation'
    },
    {
      title: 'Multi-Format Processing',
      desc: 'Seamlessly processes scanned PDFs, multi-column tables, e-statements, and password-protected files across global banking networks.',
      icon: Layers,
      tag: 'Global Bank Support'
    },
    {
      title: 'Automated Classification',
      desc: 'Intelligent ML models automatically categorize transaction streams into standardized chart-of-accounts and GL codes.',
      icon: Workflow,
      tag: 'Smart GL Categorization'
    }
  ];

  const howItWorksSteps = [
    {
      step: 1,
      phase: 'Ingestion Stage',
      title: 'Upload',
      desc: 'Drag & drop statements or connect banking APIs and SFTP endpoints for automated bulk intake.',
      icon: UploadCloud,
      badge: 'Zero Manual Prep'
    },
    {
      step: 2,
      phase: 'Extraction Stage',
      title: 'Extract',
      desc: 'Cognitive AI parses complex multi-column grids, headers, and transaction narratives with layout-aware precision.',
      icon: Cpu,
      badge: 'Cognitive Processing'
    },
    {
      step: 3,
      phase: 'Verification Stage',
      title: 'Validate',
      desc: 'Running ledger balance checks and anti-fraud anomaly flags ensure complete data integrity before posting.',
      icon: ShieldCheck,
      badge: 'Continuous Integrity'
    },
    {
      step: 4,
      phase: 'Delivery Stage',
      title: 'Deliver',
      desc: 'Export structured JSON, CSV, or post directly into your core banking, ERP, or accounting systems.',
      icon: Send,
      badge: 'Instant ERP Sync'
    }
  ];

  const strategicAdvantages = [
    {
      icon: Zap,
      title: 'Straight-Through Ingestion',
      category: 'Autonomous Execution',
      description: 'Ingest multi-format statements and extract tabular rows with immediate pipeline readiness and zero human delays.'
    },
    {
      icon: ShieldCheck,
      title: 'Flawless Reconciliation',
      category: 'Continuous Verification',
      description: 'Automated arithmetic validation reconciles debits, credits, and closing balances with mathematical precision.'
    },
    {
      icon: Workflow,
      title: 'Smart GL Categorization',
      category: 'Ledger Intelligence',
      description: 'Machine learning models classify messy transaction narratives directly into standardized chart-of-accounts.'
    },
    {
      icon: Layers,
      title: 'Universal Bank Compatibility',
      category: 'Enterprise Scalability',
      description: 'Adaptive layout parsing handles e-statements, multi-column tables, and password-protected files across global institutions.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#050B17] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      {/* =========================================================================
          1. HERO SECTION (With Long Widescreen Visual & Executive Typography)
          ========================================================================= */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden border-b border-slate-200 dark:border-white/10 bg-gradient-to-b from-slate-50 via-white to-slate-50/60 dark:from-[#050B17] dark:via-[#070E1C] dark:to-[#050B17]">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#00A3E0]/10 dark:bg-[#00A3E0]/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Heading & Value Proposition */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="lg:col-span-6 space-y-6 text-center lg:text-left"
            >
              {/* Strategic Pill Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 dark:bg-sky-950/40 border-2 border-sky-200 dark:border-sky-800/80 text-xs text-[#0077B6] dark:text-cyan-300 font-semibold shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#00A3E0] animate-pulse" />
                <span className="font-semibold text-slate-900 dark:text-white font-sans">Bank Statement Intelligence</span>
                <span className="text-slate-300 dark:text-slate-600">|</span>
                <span className="text-[#0077B6] dark:text-cyan-400 font-semibold font-sans">Enterprise Financial Engine</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.18] font-display">
                Autonomous Statement Reconciliation From{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-[#0A1931] to-[#00A3E0] dark:from-white dark:via-cyan-200 dark:to-[#00A3E0]">
                  Raw PDF Ingestion
                </span>{' '}
                to Audit-Ready Ledger.
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-2xl font-sans">
                Eliminate manual transcription friction and reconciliation delays. KnoovIQ parses multi-page PDFs, scans, and encrypted statements across global financial institutions, validating opening-to-closing balances with mathematical precision and direct ERP ledger sync.
              </p>

              {/* Hero CTA Group */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                <button
                  onClick={() => onOpenContact?.('Bank Statement Intelligence')}
                  className="px-7 py-3.5 rounded-xl bg-[#00A3E0] hover:bg-[#008bc0] text-white font-semibold text-sm shadow-md shadow-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2.5 group cursor-pointer"
                >
                  <span>Request Live Financial Demo</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="#processing-pipeline"
                  className="px-6 py-3.5 rounded-xl bg-white dark:bg-[#0B1528] hover:bg-slate-50 dark:hover:bg-[#0E1A33] border-2 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-sm font-semibold transition-all flex items-center gap-2 shadow-xs hover:-translate-y-0.5"
                >
                  <span>Explore Pipeline</span>
                  <ArrowRight className="w-4 h-4 text-[#00A3E0]" />
                </a>
              </div>

              {/* Executive Highlights (Pure Qualitative / Dark Borders / Interactive Animation) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t-2 border-slate-300 dark:border-slate-700/80 text-left">
                <div className="group/item bg-white dark:bg-[#070E1C] p-3.5 rounded-xl border-2 border-slate-300 dark:border-slate-700 hover:border-[#00A3E0] dark:hover:border-[#00A3E0] transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5">
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/10 text-[#00A3E0] flex items-center justify-center mb-2 group-hover/item:scale-110 transition-transform">
                    <Zap className="h-4 w-4" />
                  </div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider font-mono">Parsing</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5 font-display">Neural OCR</p>
                  <p className="text-[11px] text-[#0077B6] dark:text-cyan-400 font-medium mt-0.5 font-sans">Cognitive Layout</p>
                </div>
                <div className="group/item bg-white dark:bg-[#070E1C] p-3.5 rounded-xl border-2 border-slate-300 dark:border-slate-700 hover:border-[#00A3E0] dark:hover:border-[#00A3E0] transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-2 group-hover/item:scale-110 transition-transform">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider font-mono">Audit</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5 font-display">Zero Drift</p>
                  <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium mt-0.5 font-sans">Checksum Verified</p>
                </div>
                <div className="group/item bg-white dark:bg-[#070E1C] p-3.5 rounded-xl border-2 border-slate-300 dark:border-slate-700 hover:border-[#00A3E0] dark:hover:border-[#00A3E0] transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5">
                  <div className="w-7 h-7 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-2 group-hover/item:scale-110 transition-transform">
                    <Layers className="h-4 w-4" />
                  </div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider font-mono">Compatibility</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5 font-display">Omnichannel</p>
                  <p className="text-[11px] text-[#0077B6] dark:text-cyan-400 font-medium mt-0.5 font-sans">Global Banking</p>
                </div>
                <div className="group/item bg-white dark:bg-[#070E1C] p-3.5 rounded-xl border-2 border-slate-300 dark:border-slate-700 hover:border-[#00A3E0] dark:hover:border-[#00A3E0] transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-2 group-hover/item:scale-110 transition-transform">
                    <FileSpreadsheet className="h-4 w-4" />
                  </div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider font-mono">Integration</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5 font-display">Direct Sync</p>
                  <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium mt-0.5 font-sans">SAP &amp; Oracle Ready</p>
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
                    src="/images/bank_statement_intelligence_hero.jpg" 
                    alt="Bank Statement Intelligence - Autonomous AI Extraction Command Center" 
                    className="w-full h-full object-cover object-center select-none group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Subtle Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070E1C]/85 via-transparent to-transparent pointer-events-none" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-[#070E1C]/90 backdrop-blur-md text-cyan-300 border-2 border-cyan-500/40 shadow-lg flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      COGNITIVE RECONCILIATION ACTIVE
                    </span>
                  </div>

                  {/* Bottom Floating Telemetry Strip (No Numbers / Pure Assurance) */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2 p-3 rounded-xl bg-[#070E1C]/95 backdrop-blur-md border-2 border-slate-700 shadow-xl text-xs">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                      <div>
                        <div className="font-bold text-white text-[11px] font-sans">Audit Trail Verified</div>
                        <div className="text-[9px] text-slate-400 font-mono">Mathematical Balance Check Active</div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                      AUDIT READY
                    </span>
                  </div>

                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          2. CHALLENGES SECTION (4 Dark-Bordered Friction Cards)
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-white dark:bg-[#070E1C] border-y-2 border-slate-300 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00A3E0] dark:text-cyan-400">
              Operational Friction
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              The Pain of Manual Bank Reconciliation
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed">
              Finance and treasury teams struggle under fragmented banking portals, disparate PDF statements, and tedious reconciliation errors.
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
                  className="rounded-2xl p-6 bg-slate-50/80 dark:bg-[#0B1528] border-2 border-slate-300 dark:border-slate-700 hover:border-[#00A3E0] dark:hover:border-[#00A3E0] transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl hover:shadow-[#00A3E0]/10 hover:-translate-y-1.5"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-red-500/10 dark:bg-red-500/20 text-red-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComp className="h-5 w-5" />
                      </div>
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white dark:bg-white/10 text-slate-700 dark:text-slate-300 font-medium border border-slate-300 dark:border-slate-700">
                        {c.tag}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-[#00A3E0] transition-colors font-display">
                      {c.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                      {c.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t-2 border-slate-200 dark:border-slate-800 text-[11px] font-sans text-slate-500 dark:text-slate-400">
                    <span className="text-red-500 dark:text-red-400 font-semibold font-mono">Friction:</span> {c.impact}
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
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-600/15 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00A3E0] dark:text-cyan-400">
              Autonomous Lifecycle
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Autonomous Statement Reconciliation
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed">
              Watch raw bank records transform into audit-ready general ledger entries across four automated stages.
            </p>
          </div>

          {/* Master-Detail Interactive Canvas */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: 4 Dynamic Interactive Stage Cards */}
            <div className="lg:col-span-5 space-y-3.5">
              {processingStages.map((step, idx) => {
                const Icon = step.icon;
                const isActive = activeStage === step.step;
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
                    onClick={() => setActiveStage(step.step)}
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
                          {step.name} • {step.subtitle}
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
              <div className="relative rounded-2xl p-1 bg-gradient-to-b from-cyan-500/30 via-purple-500/20 to-blue-600/20 dark:from-cyan-500/40 dark:via-purple-500/20 dark:to-transparent shadow-2xl">
                
                <div className="relative rounded-[14px] bg-[#070E1C] border-2 border-slate-300 dark:border-slate-700 overflow-hidden shadow-2xl p-5 sm:p-7 min-h-[460px] sm:min-h-[500px] flex flex-col justify-between">
                  
                  {/* Subtle ambient internal glow */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />

                  {/* Terminal Window Header Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b-2 border-slate-800 relative z-10">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      <span className="ml-2 text-[11px] font-mono font-bold text-slate-400">
                        knooviq-kernel://reconciliation-runtime
                      </span>
                    </div>

                    {/* Interactive Step Quick-Selectors */}
                    <div className="flex items-center gap-1.5">
                      {[1, 2, 3, 4].map((s) => (
                        <button
                          key={s}
                          onClick={() => setActiveStage(s)}
                          className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-bold transition-all cursor-pointer ${
                            activeStage === s
                              ? 'bg-[#00A3E0] text-white shadow-md shadow-cyan-500/30'
                              : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                          }`}
                        >
                          STAGE 0{s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Main Live Stage Simulation Canvas (AnimatePresence based on activeStage) */}
                  <div className="py-6 flex-1 flex items-center justify-center relative z-10">
                    <AnimatePresence mode="wait">
                      {activeStage === 1 && (
                        <motion.div
                          key="bank-stage-1"
                          initial={{ opacity: 0, scale: 0.95, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="w-full space-y-4"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                              Global Bank Statement Stream Ingested
                            </span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                              Omnichannel Ingestion
                            </span>
                          </div>

                          {/* Ingestion Stream Cards */}
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <div className="p-3.5 rounded-xl bg-white/5 border border-cyan-500/30 space-y-2">
                              <div className="flex items-center justify-between">
                                <Building2 className="h-4 w-4 text-cyan-400" />
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                              </div>
                              <div className="text-xs font-bold text-white font-display">Global PDF Statements</div>
                              <p className="text-[10px] text-slate-400 font-sans">Multi-page, password-protected &amp; scans</p>
                              <div className="text-[9px] font-mono text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded w-fit">Auto-Decrypt</div>
                            </div>

                            <div className="p-3.5 rounded-xl bg-white/5 border border-purple-500/30 space-y-2">
                              <div className="flex items-center justify-between">
                                <UploadCloud className="h-4 w-4 text-purple-400" />
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                              </div>
                              <div className="text-xs font-bold text-white font-display">Direct Banking Feeds</div>
                              <p className="text-[10px] text-slate-400 font-sans">MT940, CAMT.053, OFX &amp; QFX feeds</p>
                              <div className="text-[9px] font-mono text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded w-fit">Direct Connect</div>
                            </div>

                            <div className="p-3.5 rounded-xl bg-white/5 border border-blue-500/30 space-y-2">
                              <div className="flex items-center justify-between">
                                <FileText className="h-4 w-4 text-blue-400" />
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                              </div>
                              <div className="text-xs font-bold text-white font-display">Treasury Portals</div>
                              <p className="text-[10px] text-slate-400 font-sans">Multi-entity corporate treasury accounts</p>
                              <div className="text-[9px] font-mono text-blue-300 bg-blue-500/10 px-2 py-0.5 rounded w-fit">Continuous Sync</div>
                            </div>
                          </div>

                          {/* Live Ingestion Telemetry Bar */}
                          <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-between text-xs">
                            <div className="flex items-center gap-2">
                              <Zap className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                              <span className="text-[11px] text-slate-300 font-sans">Universal parsing across thousands of global banking formats</span>
                            </div>
                            <span className="text-[10px] font-mono font-bold text-cyan-300">STREAMING</span>
                          </div>
                        </motion.div>
                      )}

                      {activeStage === 2 && (
                        <motion.div
                          key="bank-stage-2"
                          initial={{ opacity: 0, scale: 0.95, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="w-full space-y-4"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400 flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                              Neural OCR &amp; Transaction Row Extraction
                            </span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-500/10 text-purple-300 border border-purple-500/30">
                              Sub-Second Precision
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
                                <span className="text-[11px] text-white font-mono font-bold">Transaction Dates &amp; Cheque Numbers</span>
                              </div>
                              <span className="text-[10px] font-mono text-emerald-400 font-semibold">Value Dates Parsed</span>
                            </div>

                            <div className="flex items-center justify-between p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                              <div className="flex items-center gap-2">
                                <FileSpreadsheet className="h-3.5 w-3.5 text-cyan-400" />
                                <span className="text-[11px] text-white font-mono font-bold">Multi-Currency Debits &amp; Credits</span>
                              </div>
                              <span className="text-[10px] font-mono text-cyan-300 font-semibold">Ledger Grid Extracted</span>
                            </div>

                            <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                              <div className="flex items-center gap-2">
                                <CheckCheck className="h-3.5 w-3.5 text-emerald-400" />
                                <span className="text-[11px] text-white font-mono font-bold">Payee &amp; Narrative Classification</span>
                              </div>
                              <span className="text-[10px] font-mono text-emerald-400 font-semibold">GL Standardized</span>
                            </div>
                          </div>

                          <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-between text-xs">
                            <span className="text-[11px] text-slate-300 font-sans">Cognitive layout parser handles multi-column tables and running balance streams seamlessly</span>
                            <span className="text-[10px] font-mono font-bold text-purple-300">PARSED</span>
                          </div>
                        </motion.div>
                      )}

                      {activeStage === 3 && (
                        <motion.div
                          key="bank-stage-3"
                          initial={{ opacity: 0, scale: 0.95, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="w-full space-y-4"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                              Checksum &amp; Arithmetic Balance Audit
                            </span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                              Zero Drift Guarantee
                            </span>
                          </div>

                          {/* 3-Way Match Verification Triad */}
                          <div className="grid grid-cols-3 gap-2 text-center">
                            <div className="p-3 rounded-xl bg-white/5 border-2 border-emerald-500/40 space-y-1">
                              <div className="text-[10px] font-mono text-emerald-400 font-bold uppercase">Balance A</div>
                              <div className="text-xs font-bold text-white font-display">Opening Ledger</div>
                              <div className="text-[9px] text-slate-400 font-sans">Prior close verified</div>
                            </div>
                            <div className="p-3 rounded-xl bg-white/5 border-2 border-emerald-500/40 space-y-1">
                              <div className="text-[10px] font-mono text-emerald-400 font-bold uppercase">Net Activity</div>
                              <div className="text-xs font-bold text-white font-display">Credits - Debits</div>
                              <div className="text-[9px] text-slate-400 font-sans">Line arithmetic check</div>
                            </div>
                            <div className="p-3 rounded-xl bg-white/5 border-2 border-emerald-500/40 space-y-1">
                              <div className="text-[10px] font-mono text-emerald-400 font-bold uppercase">Balance B</div>
                              <div className="text-xs font-bold text-white font-display">Closing Statement</div>
                              <div className="text-[9px] text-slate-400 font-sans">Perfect zero drift</div>
                            </div>
                          </div>

                          {/* Audit Verification Checklist */}
                          <div className="p-3.5 rounded-xl bg-white/5 border border-slate-700 space-y-2">
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-slate-300 font-sans flex items-center gap-2">
                                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                                Opening + Credits - Debits = Closing Balance Equation
                              </span>
                              <span className="text-[10px] font-mono text-emerald-400 font-bold">VERIFIED</span>
                            </div>
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-slate-300 font-sans flex items-center gap-2">
                                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                                Transaction Row Cryptographic Checksum Continuity
                              </span>
                              <span className="text-[10px] font-mono text-emerald-400 font-bold">CONFIRMED</span>
                            </div>
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-slate-300 font-sans flex items-center gap-2">
                                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                                Foreign Exchange &amp; Bank Service Fee Reconciliation
                              </span>
                              <span className="text-[10px] font-mono text-emerald-400 font-bold">RECONCILED</span>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {activeStage === 4 && (
                        <motion.div
                          key="bank-stage-4"
                          initial={{ opacity: 0, scale: 0.95, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="w-full space-y-4"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                              Touchless ERP &amp; General Ledger Sync
                            </span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/10 text-blue-300 border border-blue-500/30">
                              Instant Posting
                            </span>
                          </div>

                          {/* Connected Ecosystem Hub Cards */}
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <div className="p-3.5 rounded-xl bg-white/5 border border-blue-500/30 text-center space-y-1.5">
                              <div className="w-8 h-8 mx-auto rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center">
                                <Database className="h-4 w-4" />
                              </div>
                              <div className="text-xs font-bold text-white font-display">SAP S/4HANA Treasury</div>
                              <span className="inline-block text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                                Bank Ledger Synced
                              </span>
                            </div>

                            <div className="p-3.5 rounded-xl bg-white/5 border border-blue-500/30 text-center space-y-1.5">
                              <div className="w-8 h-8 mx-auto rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center">
                                <Server className="h-4 w-4" />
                              </div>
                              <div className="text-xs font-bold text-white font-display">Oracle Financials Cloud</div>
                              <span className="inline-block text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                                Sub-Ledgers Cleared
                              </span>
                            </div>

                            <div className="p-3.5 rounded-xl bg-white/5 border border-blue-500/30 text-center space-y-1.5">
                              <div className="w-8 h-8 mx-auto rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center">
                                <Workflow className="h-4 w-4" />
                              </div>
                              <div className="text-xs font-bold text-white font-display">QuickBooks &amp; NetSuite</div>
                              <span className="inline-block text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                                Cash Flow Updated
                              </span>
                            </div>
                          </div>

                          {/* Audit Logging Assurance */}
                          <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-between text-xs">
                            <span className="text-[11px] text-slate-300 font-sans">Reconciled statements and transaction audit records cryptographically sealed</span>
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
                        onClick={() => setActiveStage((prev) => (prev === 1 ? 4 : prev - 1))}
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-slate-700 transition-all cursor-pointer"
                        title="Previous Stage"
                      >
                        <ChevronLeft className="h-3.5 w-3.5" />
                      </button>
                      <button
                        onClick={() => setActiveStage((prev) => (prev === 4 ? 1 : prev + 1))}
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
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0077B6] dark:text-cyan-400 font-mono">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-display">
              Intelligence Built Into Every Transaction
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed font-sans">
              Specialized neural models purpose-engineered for the rigor and compliance of commercial banking data.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group rounded-2xl p-6 bg-slate-50/80 dark:bg-[#0B1528] border-2 border-slate-300 dark:border-slate-700 hover:border-[#00A3E0] dark:hover:border-[#00A3E0] shadow-sm hover:shadow-xl hover:shadow-[#00A3E0]/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between text-left"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-[#00A3E0]/10 text-[#00A3E0] dark:bg-cyan-500/20 dark:text-cyan-300 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#00A3E0] group-hover:text-white transition-all duration-300 shadow-xs">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-[#00A3E0] transition-colors font-display">
                      {feat.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                      {feat.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t-2 border-slate-200 dark:border-slate-800">
                    <span className="text-[11px] px-2.5 py-1 rounded-md bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium border border-slate-300 dark:border-slate-700 font-mono">
                      {feat.tag}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          5. STRATEGIC ADVANTAGES (No Numbers, Pure Qualitative Assurance)
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-[#F8FAFC] dark:bg-[#050B17] border-t-2 border-slate-300 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0077B6] dark:text-cyan-400 font-mono">
              Business Value
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-display">
              Smarter Finance. Less Manual Work.
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed font-sans">
              Drive unmatched treasury throughput while maintaining strict mathematical reconciliation standards.
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
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0077B6] dark:text-cyan-400 font-mono">
            Cognitive Banking Integration
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white font-display">
            Make Every Bank Statement Intelligent
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal font-sans">
            Eliminate reconciliation drift, empower financial controllers, and scale statement ingestion across multi-entity global accounts.
          </p>

          <div className="pt-2 flex justify-center">
            <button
              onClick={() => onOpenContact?.('Bank Statement Intelligence')}
              className="px-8 py-4 rounded-xl bg-[#00A3E0] hover:bg-[#008bc0] text-white font-semibold text-sm shadow-md shadow-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2.5 group cursor-pointer"
            >
              <span>Request a Demo</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default BankStatementIntelligencePage;
