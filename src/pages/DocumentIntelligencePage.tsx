import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, 
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
  Layers,
  UploadCloud,
  FileSearch,
  FileCheck2,
  Database,
  Binary,
  ScrollText,
  SearchCheck,
  Server,
  ScanLine,
  FileSpreadsheet,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface DocumentIntelligencePageProps {
  onOpenContact?: (service?: string) => void;
}

export const DocumentIntelligencePage: React.FC<DocumentIntelligencePageProps> = ({ onOpenContact }) => {
  useEffect(() => {
    document.title = 'Document Intelligence | Enterprise AI Products';
  }, []);

  const [activeWorkflowStage, setActiveWorkflowStage] = useState<number>(1);

  // Auto-cycle the "How It Works" step every 3.5s
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveWorkflowStage((prev) => (prev % 4) + 1);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const challenges = [
    {
      title: 'Manual Data Entry',
      description: 'Re-keying information from PDFs, contracts, and scans consumes thousands of labor hours.',
      impact: 'Drains legal & operations bandwidth',
      icon: Clock,
      tag: 'Labor Intensive'
    },
    {
      title: 'Unstructured Information',
      description: 'Freeform paragraphs, varying clauses, and embedded tables resist traditional rule-based OCR.',
      impact: 'High template fragility',
      icon: Layers,
      tag: 'Format Complexity'
    },
    {
      title: 'Processing Errors',
      description: 'Human fatigue leads to skipped clauses, misspelled terms, and missed contract renewal dates.',
      impact: 'High contractual compliance risk',
      icon: AlertCircle,
      tag: 'Error Prone'
    },
    {
      title: 'Time-Consuming Workflows',
      description: 'Multi-day document review queues delay legal clearances, underwriting, and deal closures.',
      impact: 'Sluggish business execution',
      icon: Workflow,
      tag: 'Operational Delay'
    }
  ];

  const workflowSteps = [
    {
      step: 1,
      phase: 'Phase: Intake',
      name: 'Upload',
      title: 'Multisource Document Intake',
      desc: 'Ingest multi-page PDFs, scans, TIFFs, Word files, and images across cloud drives, email, or REST APIs.',
      icon: UploadCloud,
      badge: 'Format Agnostic'
    },
    {
      step: 2,
      phase: 'Phase: Cognition',
      name: 'Understand',
      title: 'Contextual Semantic AI',
      desc: 'Multimodal vision models analyze document geometry, semantic hierarchy, clauses, and key tables.',
      icon: FileSearch,
      badge: 'Layout Cognition'
    },
    {
      step: 3,
      phase: 'Phase: Extraction',
      name: 'Extract',
      title: 'High-Precision Entity Extraction',
      desc: 'Transform complex prose, signatures, metadata, and key-values into structured JSON with confidence ratings.',
      icon: Binary,
      badge: 'Precision Extraction'
    },
    {
      step: 4,
      phase: 'Phase: Integration',
      name: 'Automate',
      title: 'Downstream Workflow Sync',
      desc: 'Push validated structured records directly into your CRM, ERP, contract repository, or core business APIs.',
      icon: Database,
      badge: 'Touchless Hand-Off'
    }
  ];

  const capabilities = [
    {
      title: 'Smart Data Extraction',
      desc: 'Extract important information automatically across unstructured paragraphs, tables, checkboxes, and signatures.',
      icon: FileText,
      tag: 'Key-Value Parsing'
    },
    {
      title: 'Document Classification',
      desc: 'Identify and organize different document types automatically without manual indexing, sorting, or tagging.',
      icon: Layers,
      tag: 'Zero-Shot Tagging'
    },
    {
      title: 'AI-Powered Understanding',
      desc: 'Understand content and context intelligently using large multimodal language models fine-tuned on corporate documents.',
      icon: SearchCheck,
      tag: 'Context Comprehension'
    },
    {
      title: 'Intelligent Validation',
      desc: 'Check extracted information for accuracy, formatting consistency, and cross-reference against internal ERP master data.',
      icon: ShieldCheck,
      tag: 'Master Data Matching'
    }
  ];

  const strategicAdvantages = [
    {
      icon: Zap,
      title: 'Instant Document Ingestion',
      category: 'Autonomous Parsing',
      description: 'Convert dense multi-page corporate agreements, scans, and disclosures into clean structured datasets in seconds.'
    },
    {
      icon: ShieldCheck,
      title: 'Flawless Entity Extraction',
      category: 'Cognitive Reliability',
      description: 'Multimodal vision and LLM models capture critical clauses, complex tables, and key-value pairs with verified accuracy.'
    },
    {
      icon: Workflow,
      title: 'Zero Manual Interventions',
      category: 'Workflow Automation',
      description: 'Eliminate human re-keying and tedious classification by routing verified structured payloads straight into core systems.'
    },
    {
      icon: Layers,
      title: 'Enterprise-Wide Scalability',
      category: 'Universal Coverage',
      description: 'Scale effortlessly across millions of pages during enterprise M&A discoveries, compliance audits, or high-volume daily intake.'
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
                <span className="font-semibold text-slate-900 dark:text-white font-sans">Document Intelligence</span>
                <span className="text-slate-300 dark:text-slate-600">|</span>
                <span className="text-[#0077B6] dark:text-cyan-400 font-semibold font-sans">Multimodal Cognitive Extraction</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.18] font-display">
                Cognitive Document Processing From{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-[#0A1931] to-[#00A3E0] dark:from-white dark:via-cyan-200 dark:to-[#00A3E0]">
                  Unstructured Papers
                </span>{' '}
                to Structured Knowledge.
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-2xl font-sans">
                Transform dark data inside commercial agreements, regulatory filings, and complex technical reports into structured, queryable business intelligence. Layout-aware multimodal AI extracts clauses, cross-references risk entities, and pushes verified JSON payloads directly to enterprise workflows.
              </p>

              {/* Hero CTA Group */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                <button
                  onClick={() => onOpenContact?.('Document Intelligence')}
                  className="px-7 py-3.5 rounded-xl bg-[#00A3E0] hover:bg-[#008bc0] text-white font-semibold text-sm shadow-md shadow-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2.5 group cursor-pointer"
                >
                  <span>Request Live Document Demo</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="#document-friction"
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
                    <Binary className="h-4 w-4" />
                  </div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider font-mono">Parsing</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5 font-display">Neural Engine</p>
                  <p className="text-[11px] text-[#0077B6] dark:text-cyan-400 font-medium mt-0.5 font-sans">Multimodal Vision</p>
                </div>
                <div className="group/item bg-white dark:bg-[#070E1C] p-3.5 rounded-xl border-2 border-slate-300 dark:border-slate-700 hover:border-[#00A3E0] dark:hover:border-[#00A3E0] transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-2 group-hover/item:scale-110 transition-transform">
                    <SearchCheck className="h-4 w-4" />
                  </div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider font-mono">Context</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5 font-display">Clause Match</p>
                  <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium mt-0.5 font-sans">Semantic Search</p>
                </div>
                <div className="group/item bg-white dark:bg-[#070E1C] p-3.5 rounded-xl border-2 border-slate-300 dark:border-slate-700 hover:border-[#00A3E0] dark:hover:border-[#00A3E0] transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5">
                  <div className="w-7 h-7 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-2 group-hover/item:scale-110 transition-transform">
                    <Layers className="h-4 w-4" />
                  </div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider font-mono">Diversity</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5 font-display">Omniformat</p>
                  <p className="text-[11px] text-[#0077B6] dark:text-cyan-400 font-medium mt-0.5 font-sans">Multi-Column Grids</p>
                </div>
                <div className="group/item bg-white dark:bg-[#070E1C] p-3.5 rounded-xl border-2 border-slate-300 dark:border-slate-700 hover:border-[#00A3E0] dark:hover:border-[#00A3E0] transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-2 group-hover/item:scale-110 transition-transform">
                    <Database className="h-4 w-4" />
                  </div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider font-mono">Integration</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5 font-display">Direct Sync</p>
                  <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium mt-0.5 font-sans">ERP &amp; CRM Ready</p>
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
                    src="/images/document_intelligence_hero.jpg" 
                    alt="Document Intelligence - Cognitive Multi-Page Agreement Extraction" 
                    className="w-full h-full object-cover object-center select-none group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Subtle Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070E1C]/85 via-transparent to-transparent pointer-events-none" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-[#070E1C]/90 backdrop-blur-md text-cyan-300 border-2 border-cyan-500/40 shadow-lg flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      SEMANTIC CLAUSE EXTRACTION ACTIVE
                    </span>
                  </div>

                  {/* Bottom Floating Telemetry Strip (No Numbers / Pure Assurance) */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2 p-3 rounded-xl bg-[#070E1C]/95 backdrop-blur-md border-2 border-slate-700 shadow-xl text-xs">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                      <div>
                        <div className="font-bold text-white text-[11px] font-sans">Autonomous Schema Match Verified</div>
                        <div className="text-[9px] text-slate-400 font-mono">Legal &amp; Risk Compliance Standards Verified</div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                      ERP &amp; JSON READY
                    </span>
                  </div>

                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          2. DOCUMENT CHALLENGES (4 Compact Cards With Darker Borders)
          ========================================================================= */}
      <section id="document-friction" className="py-16 sm:py-24 bg-white dark:bg-[#070E1C] border-y-2 border-slate-300 dark:border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00A3E0] dark:text-cyan-400">
              Unstructured Data Friction
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              From Document Complexity to Clarity
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto">
              Unstructured corporate files lock valuable intelligence behind manual reading and error-prone copy-pasting.
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
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-blue-500/10 dark:bg-indigo-600/15 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00A3E0] dark:text-cyan-400">
              Transformative Workflow
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              From Documents to Intelligent Data
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed">
              Watch unstructured documents transform into validated, actionable data in four seamless steps.
            </p>
          </div>

          {/* Master-Detail Interactive Canvas */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: 4 Dynamic Interactive Stage Cards */}
            <div className="lg:col-span-5 space-y-3.5">
              {workflowSteps.map((step, idx) => {
                const Icon = step.icon;
                const isActive = activeWorkflowStage === step.step;
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
                    onClick={() => setActiveWorkflowStage(step.step)}
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

                        <h3 className="text-base font-bold text-[#0A1931] dark:text-white font-display">
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
              <div className="relative rounded-2xl p-1 bg-gradient-to-b from-cyan-500/30 via-indigo-500/20 to-blue-600/20 dark:from-cyan-500/40 dark:via-indigo-500/20 dark:to-transparent shadow-2xl">
                
                <div className="relative rounded-[14px] bg-[#070E1C] border-2 border-slate-300 dark:border-slate-700 overflow-hidden shadow-2xl p-5 sm:p-7 min-h-[460px] sm:min-h-[500px] flex flex-col justify-between">
                  
                  {/* Subtle ambient internal glow */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

                  {/* Terminal Window Header Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b-2 border-slate-800 relative z-10">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      <span className="ml-2 text-[11px] font-mono font-bold text-slate-400">
                        knooviq-kernel://document-cognition
                      </span>
                    </div>

                    {/* Interactive Step Quick-Selectors */}
                    <div className="flex items-center gap-1.5">
                      {[1, 2, 3, 4].map((s) => (
                        <button
                          key={s}
                          onClick={() => setActiveWorkflowStage(s)}
                          className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-bold transition-all cursor-pointer ${
                            activeWorkflowStage === s
                              ? 'bg-[#00A3E0] text-white shadow-md shadow-cyan-500/30'
                              : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                          }`}
                        >
                          STAGE 0{s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Main Live Stage Simulation Canvas (AnimatePresence based on activeWorkflowStage) */}
                  <div className="py-6 flex-1 flex items-center justify-center relative z-10">
                    <AnimatePresence mode="wait">
                      {activeWorkflowStage === 1 && (
                        <motion.div
                          key="doc-stage-1"
                          initial={{ opacity: 0, scale: 0.95, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="w-full space-y-4"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                              Multisource Document Intake Ingested
                            </span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                              Format Agnostic
                            </span>
                          </div>

                          {/* Ingestion Stream Cards */}
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <div className="p-3.5 rounded-xl bg-white/5 border border-cyan-500/30 space-y-2">
                              <div className="flex items-center justify-between">
                                <FileText className="h-4 w-4 text-cyan-400" />
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                              </div>
                              <div className="text-xs font-bold text-white font-display">Scanned Documents</div>
                              <p className="text-[10px] text-slate-400 font-sans">Skewed scans, multi-page PDFs &amp; images</p>
                              <div className="text-[9px] font-mono text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded w-fit">Auto-Deskew</div>
                            </div>

                            <div className="p-3.5 rounded-xl bg-white/5 border border-indigo-500/30 space-y-2">
                              <div className="flex items-center justify-between">
                                <ScrollText className="h-4 w-4 text-indigo-400" />
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                              </div>
                              <div className="text-xs font-bold text-white font-display">Contracts &amp; Legal</div>
                              <p className="text-[10px] text-slate-400 font-sans">Agreements, clauses &amp; master contracts</p>
                              <div className="text-[9px] font-mono text-indigo-300 bg-indigo-500/10 px-2 py-0.5 rounded w-fit">Clause Ingest</div>
                            </div>

                            <div className="p-3.5 rounded-xl bg-white/5 border border-blue-500/30 space-y-2">
                              <div className="flex items-center justify-between">
                                <FileSpreadsheet className="h-4 w-4 text-blue-400" />
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                              </div>
                              <div className="text-xs font-bold text-white font-display">Forms &amp; Tables</div>
                              <p className="text-[10px] text-slate-400 font-sans">Multi-page forms, spreadsheets &amp; grids</p>
                              <div className="text-[9px] font-mono text-blue-300 bg-blue-500/10 px-2 py-0.5 rounded w-fit">Table Detection</div>
                            </div>
                          </div>

                          {/* Live Ingestion Telemetry Bar */}
                          <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-between text-xs">
                            <div className="flex items-center gap-2">
                              <Zap className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                              <span className="text-[11px] text-slate-300 font-sans">Zero template creation or pre-training necessary</span>
                            </div>
                            <span className="text-[10px] font-mono font-bold text-cyan-300">STREAMING</span>
                          </div>
                        </motion.div>
                      )}

                      {activeWorkflowStage === 2 && (
                        <motion.div
                          key="doc-stage-2"
                          initial={{ opacity: 0, scale: 0.95, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="w-full space-y-4"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                              Semantic Parsing &amp; Entity Cognition
                            </span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
                              Polyglot Neural Engine
                            </span>
                          </div>

                          {/* Simulated Interactive Document Scanner Sheet */}
                          <div className="relative p-4 rounded-xl bg-white/5 border-2 border-indigo-500/40 overflow-hidden space-y-3">
                            {/* Animated Scanner Laser Bar */}
                            <motion.div
                              animate={{ y: [-10, 130, -10] }}
                              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                              className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-indigo-400 to-transparent shadow-[0_0_15px_#6366f1] pointer-events-none"
                            />

                            {/* Extracted Bounding Box Chips */}
                            <div className="flex items-center justify-between p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/30">
                              <div className="flex items-center gap-2">
                                <ScanLine className="h-3.5 w-3.5 text-indigo-400" />
                                <span className="text-[11px] text-white font-mono font-bold">Clause &amp; Legal Terms</span>
                              </div>
                              <span className="text-[10px] font-mono text-emerald-400 font-semibold">Identified &amp; Classified</span>
                            </div>

                            <div className="flex items-center justify-between p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                              <div className="flex items-center gap-2">
                                <FileSpreadsheet className="h-3.5 w-3.5 text-cyan-400" />
                                <span className="text-[11px] text-white font-mono font-bold">Multi-Column Tabular Matrix</span>
                              </div>
                              <span className="text-[10px] font-mono text-cyan-300 font-semibold">Key-Values Extracted</span>
                            </div>

                            <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                              <div className="flex items-center gap-2">
                                <CheckCheck className="h-3.5 w-3.5 text-emerald-400" />
                                <span className="text-[11px] text-white font-mono font-bold">Contextual Metadata</span>
                              </div>
                              <span className="text-[10px] font-mono text-emerald-400 font-semibold">Normalized &amp; Tagged</span>
                            </div>
                          </div>

                          <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-between text-xs">
                            <span className="text-[11px] text-slate-300 font-sans">Deep spatial transformer preserves natural reading order across complex multi-column documents</span>
                            <span className="text-[10px] font-mono font-bold text-indigo-300">PARSED</span>
                          </div>
                        </motion.div>
                      )}

                      {activeWorkflowStage === 3 && (
                        <motion.div
                          key="doc-stage-3"
                          initial={{ opacity: 0, scale: 0.95, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="w-full space-y-4"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                              Contextual Consistency &amp; Integrity Audit
                            </span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                              Zero Drift Guarantee
                            </span>
                          </div>

                          {/* 3-Way Match Verification Triad */}
                          <div className="grid grid-cols-3 gap-2 text-center">
                            <div className="p-3 rounded-xl bg-white/5 border-2 border-emerald-500/40 space-y-1">
                              <div className="text-[10px] font-mono text-emerald-400 font-bold uppercase">Layer A</div>
                              <div className="text-xs font-bold text-white font-display">Syntax Logic</div>
                              <div className="text-[9px] text-slate-400 font-sans">Type coercion check</div>
                            </div>
                            <div className="p-3 rounded-xl bg-white/5 border-2 border-emerald-500/40 space-y-1">
                              <div className="text-[10px] font-mono text-emerald-400 font-bold uppercase">Layer B</div>
                              <div className="text-xs font-bold text-white font-display">Ontology Rules</div>
                              <div className="text-[9px] text-slate-400 font-sans">Cross-field checks</div>
                            </div>
                            <div className="p-3 rounded-xl bg-white/5 border-2 border-emerald-500/40 space-y-1">
                              <div className="text-[10px] font-mono text-emerald-400 font-bold uppercase">Layer C</div>
                              <div className="text-xs font-bold text-white font-display">PII &amp; Security</div>
                              <div className="text-[9px] text-slate-400 font-sans">Automated redaction</div>
                            </div>
                          </div>

                          {/* Audit Verification Checklist */}
                          <div className="p-3.5 rounded-xl bg-white/5 border border-slate-700 space-y-2">
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-slate-300 font-sans flex items-center gap-2">
                                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                                Cross-Field Mathematical &amp; Date Consistency
                              </span>
                              <span className="text-[10px] font-mono text-emerald-400 font-bold">VALIDATED</span>
                            </div>
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-slate-300 font-sans flex items-center gap-2">
                                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                                Confidential PII &amp; Sensitive Field Redaction
                              </span>
                              <span className="text-[10px] font-mono text-emerald-400 font-bold">PROTECTED</span>
                            </div>
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-slate-300 font-sans flex items-center gap-2">
                                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                                Enterprise Schema Schema Conformance
                              </span>
                              <span className="text-[10px] font-mono text-emerald-400 font-bold">CLEARED</span>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {activeWorkflowStage === 4 && (
                        <motion.div
                          key="doc-stage-4"
                          initial={{ opacity: 0, scale: 0.95, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="w-full space-y-4"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                              Enterprise Vector Store &amp; API Sync
                            </span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/10 text-blue-300 border border-blue-500/30">
                              Instant Event Dispatch
                            </span>
                          </div>

                          {/* Connected Ecosystem Hub Cards */}
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <div className="p-3.5 rounded-xl bg-white/5 border border-blue-500/30 text-center space-y-1.5">
                              <div className="w-8 h-8 mx-auto rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center">
                                <Database className="h-4 w-4" />
                              </div>
                              <div className="text-xs font-bold text-white font-display">Vector Database</div>
                              <span className="inline-block text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                                Embeddings Indexed
                              </span>
                            </div>

                            <div className="p-3.5 rounded-xl bg-white/5 border border-blue-500/30 text-center space-y-1.5">
                              <div className="w-8 h-8 mx-auto rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center">
                                <Server className="h-4 w-4" />
                              </div>
                              <div className="text-xs font-bold text-white font-display">Enterprise ECM / ERP</div>
                              <span className="inline-block text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                                Metadata Synced
                              </span>
                            </div>

                            <div className="p-3.5 rounded-xl bg-white/5 border border-blue-500/30 text-center space-y-1.5">
                              <div className="w-8 h-8 mx-auto rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center">
                                <Workflow className="h-4 w-4" />
                              </div>
                              <div className="text-xs font-bold text-white font-display">REST / Webhooks</div>
                              <span className="inline-block text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                                Event Stream Fired
                              </span>
                            </div>
                          </div>

                          {/* Audit Logging Assurance */}
                          <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-between text-xs">
                            <span className="text-[11px] text-slate-300 font-sans">Full contextual provenance, extraction history, and confidence scores archived</span>
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
                        Cognition Engine: <span className="text-emerald-400 font-bold">Autonomous Execution Active</span>
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setActiveWorkflowStage((prev) => (prev === 1 ? 4 : prev - 1))}
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-slate-700 transition-all cursor-pointer"
                        title="Previous Stage"
                      >
                        <ChevronLeft className="h-3.5 w-3.5" />
                      </button>
                      <button
                        onClick={() => setActiveWorkflowStage((prev) => (prev === 4 ? 1 : prev + 1))}
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
          4. INTELLIGENT CAPABILITIES (4 Compact Cards With Darker Borders)
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-white dark:bg-[#070E1C] border-t-2 border-slate-300 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00A3E0] dark:text-cyan-400">
              Cognitive Architecture
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Intelligence Inside Every Document
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed">
              State-of-the-art multimodal extraction designed for enterprise documents.
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
                  className="rounded-2xl p-6 bg-slate-50/80 dark:bg-[#0B1528] border-2 border-slate-300 dark:border-slate-700 hover:border-[#00A3E0] dark:hover:border-[#00A3E0] transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl hover:shadow-[#00A3E0]/10 hover:-translate-y-1.5"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-[#00A3E0]/10 text-[#00A3E0] dark:bg-cyan-500/20 dark:text-cyan-300 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#00A3E0] group-hover:text-white transition-all duration-300 shadow-xs">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-[#00A3E0] transition-colors font-display">
                      {cap.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                      {cap.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t-2 border-slate-200 dark:border-slate-800">
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 font-medium border border-slate-300 dark:border-slate-700">
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
          5. STRATEGIC ADVANTAGES (No Numbers, Pure Executive Value)
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-[#F8FAFC] dark:bg-[#050B17] border-t-2 border-slate-300 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00A3E0] dark:text-cyan-400">
              High-Impact Automation
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Less Manual Work. More Intelligence.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed">
              Transform document analysis from an operational bottleneck into a competitive advantage.
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
            Cognitive Processing
          </span>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Turn Every Document Into Intelligence
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-sans">
            Automate document processing and unlock valuable business data with AI.
          </p>

          <div className="pt-2 flex justify-center">
            <button
              onClick={() => onOpenContact?.('Document Intelligence')}
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

export default DocumentIntelligencePage;
