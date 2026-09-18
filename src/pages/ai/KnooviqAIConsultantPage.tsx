import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  MessageSquare,
  Sparkles,
  ArrowRight,
  ChevronRight,
  Search,
  FileText,
  Mail,
  CalendarCheck,
  CheckCircle2,
  Database,
  Layers,
  ShieldCheck,
  Zap,
  Users2,
  Workflow,
  Compass,
  Cpu,
  Bot,
  HelpCircle,
  Lightbulb,
  Building2,
  Lock,
  ArrowUpRight,
  Clock,
  FileCheck2,
  Flame,
  XCircle
} from 'lucide-react';

interface KnooviqAIConsultantPageProps {
  onOpenContact?: (service?: string) => void;
}

interface CapabilityItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  promptExample: string;
  aiResponse: string;
  highlights: string[];
  systemLink: string;
  icon: React.ComponentType<{ className?: string }>;
}

const CAPABILITIES: CapabilityItem[] = [
  {
    id: 'find-info',
    title: 'Find Information',
    subtitle: 'Locate files, records, and policies instantly across enterprise silos',
    badge: 'Instant Retrieval',
    promptExample: '“Show me all signed supplier agreements from last quarter.”',
    aiResponse: 'Located 6 verified supplier agreements across Procurement and Legal records. All metadata harmonized with active SAP vendor master files.',
    highlights: ['Zero data leakage', 'Full permission compliance', 'Sub-second lookup'],
    systemLink: 'SAP S/4HANA MM & Enterprise DMS',
    icon: Search
  },
  {
    id: 'understand-docs',
    title: 'Understand Documents',
    subtitle: 'Synthesize complex contracts, technical specifications, and audits',
    badge: 'Semantic Extraction',
    promptExample: '“Summarize the indemnity and liability terms in this draft.”',
    aiResponse: 'Extracted key liability boundaries: standard cap applied at 12-month trailing service fees, excluding intellectual property covenants.',
    highlights: ['Clause risk flagging', 'Executive briefing format', 'Direct citation links'],
    systemLink: 'Ariba Contracts & Legal Document Store',
    icon: FileText
  },
  {
    id: 'draft-comm',
    title: 'Draft Communication',
    subtitle: 'Generate context-aware client updates, proposals, and briefings',
    badge: 'Contextual Authoring',
    promptExample: '“Draft an executive briefing on the SAP migration timeline.”',
    aiResponse: 'Prepared executive summary: milestones sequenced across Phase 1 cutover, staging checkpoints, and post-launch hypercare governance.',
    highlights: ['Tailored to leadership tone', 'Auto-populated milestones', 'Instant export ready'],
    systemLink: 'Corporate Communications & PMO Hub',
    icon: Mail
  },
  {
    id: 'organize-tasks',
    title: 'Organize Tasks',
    subtitle: 'Convert unstructured meeting transcripts into prioritized action items',
    badge: 'Workflow Automation',
    promptExample: '“Extract action items and assignees from today’s meeting.”',
    aiResponse: 'Identified 5 immediate action items with clear ownership, priority tags, and automated reminder triggers for project leads.',
    highlights: ['Automatic owner tagging', 'Deadline synchronization', 'Jira / SAP BTP Sync'],
    systemLink: 'SAP BTP Workflow & Team Collaboration',
    icon: CalendarCheck
  },
  {
    id: 'answer-questions',
    title: 'Answer Business Questions',
    subtitle: 'Surface accurate answers grounded in enterprise documentation',
    badge: 'Grounded Truth',
    promptExample: '“What is our standard protocol for expedited customer freight?”',
    aiResponse: 'Standard protocol requires regional director sign-off for premium air routing when delivery deadlines are within 48 hours.',
    highlights: ['Grounded in verified SOPs', 'Zero hallucinations', 'Direct policy references'],
    systemLink: 'Enterprise Policy & Compliance Engine',
    icon: HelpCircle
  },
  {
    id: 'support-decisions',
    title: 'Support Everyday Decisions',
    subtitle: 'Evaluate scenarios with historical context and policy alignment',
    badge: 'Scenario Intelligence',
    promptExample: '“Help me prepare the risk comparison for these two vendors.”',
    aiResponse: 'Vendor A offers guaranteed SLA commitments and localized inventory hubs; Vendor B provides broader SKU variety with longer freight lead times.',
    highlights: ['Side-by-side trade-off matrix', 'Cost vs. risk analysis', 'Audit trail preserved'],
    systemLink: 'SAP Strategic Sourcing & Vendor Matrix',
    icon: Lightbulb
  }
];

export const KnooviqAIConsultantPage: React.FC<KnooviqAIConsultantPageProps> = ({ onOpenContact }) => {
  const [activeCapability, setActiveCapability] = useState<CapabilityItem>(CAPABILITIES[0]);
  const [activeStep, setActiveStep] = useState<number>(0);

  const journeySteps = [
    {
      stage: 'ASK',
      stepNum: '01',
      label: 'Natural Human Inquiry',
      desc: 'User expresses a business need in clear, everyday language without complex syntax or prompt engineering.',
      quote: '“Find the latest vendor proposal and summarize the key points.”',
      details: ['Plain language recognition', 'Understands intent & scope', 'Multi-turn context preserved'],
      icon: MessageSquare,
      color: 'text-[#0077B6] dark:text-cyan-300',
      badgeBg: 'bg-sky-100 dark:bg-cyan-950/80 text-[#0077B6] dark:text-cyan-300 border-sky-200 dark:border-cyan-500/40'
    },
    {
      stage: 'UNDERSTAND',
      stepNum: '02',
      label: 'Semantic Context Parsing',
      desc: 'The AI interprets business intent, identifies document entities, and validates user access permissions.',
      quote: 'Identified: Global Logistics RFP Proposal, Revision 3.2, signed October 14.',
      details: ['Entity & version recognition', 'Role-based access verification', 'Cross-system metadata linking'],
      icon: Cpu,
      color: 'text-cyan-600 dark:text-cyan-300',
      badgeBg: 'bg-cyan-100 dark:bg-cyan-900/60 text-cyan-800 dark:text-cyan-200 border-cyan-300 dark:border-cyan-500/40'
    },
    {
      stage: 'CONNECT',
      stepNum: '03',
      label: 'Enterprise Data Harmonization',
      desc: 'Cross-references the proposal against active ERP vendor master records, payment terms, and delivery SLAs.',
      quote: 'Connected with SAP MM vendor history, payment milestones, and commercial SLAs.',
      details: ['SAP S/4HANA live link', 'Historical contract comparison', 'Active procurement validation'],
      icon: Database,
      color: 'text-indigo-600 dark:text-indigo-300',
      badgeBg: 'bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-500/40'
    },
    {
      stage: 'ACT',
      stepNum: '04',
      label: 'Targeted Business Momentum',
      desc: 'Produces an executive briefing, highlights commercial adjustments, and pre-fills the review workflow.',
      quote: 'Actionable executive summary generated; risk clauses flagged for procurement review.',
      details: ['Structured executive brief', 'Approval workflow initiated', 'Exportable to email & PDF'],
      icon: Zap,
      color: 'text-emerald-600 dark:text-emerald-300',
      badgeBg: 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-500/40'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#050B17] text-slate-900 dark:text-slate-100 font-sans selection:bg-[#00A3E0] selection:text-white transition-colors duration-300 overflow-hidden">
      
      {/* =========================================================================
          SECTION 1 — HERO: MEET YOUR INTELLIGENT AI CONSULTANT
          ========================================================================= */}
      <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 bg-gradient-to-b from-slate-50 via-white to-slate-50/70 dark:from-[#081226] dark:via-[#050B17] dark:to-[#081226] border-b border-slate-300/80 dark:border-cyan-500/20 overflow-hidden">
        
        {/* Subtle Ambient Aurora Light Spheres */}
        <div className="aurora-sphere-1 top-20 left-1/4 bg-[#00A3E0]/20 dark:bg-[#00A3E0]/25 pointer-events-none" />
        <div className="aurora-sphere-2 top-96 right-10 bg-[#6366F1]/15 dark:bg-[#6366F1]/20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Heading, Subtitle & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Strategic Pill Tag */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100/80 dark:bg-cyan-950/80 border border-sky-300 dark:border-cyan-400/40 text-[#0077B6] dark:text-cyan-300 text-xs font-bold tracking-wide shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00A3E0] animate-ping" />
                <span className="font-bold text-slate-900 dark:text-white">Knooviq AI Consultant</span>
                <span className="text-slate-400 dark:text-slate-500">|</span>
                <span className="text-[#0077B6] dark:text-cyan-300 font-semibold">Enterprise Assistant</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12] font-display">
                Meet Your Intelligent{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-[#0077B6] to-[#00A3E0] dark:from-white dark:via-cyan-200 dark:to-[#00A3E0]">
                  AI Consultant
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed max-w-2xl font-normal">
                Knooviq AI Consultant brings intelligent assistance into everyday business work — helping people 
                find information, understand context, create content, and move work forward through natural conversation.
              </p>

              {/* Hero CTA Group */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenContact ? onOpenContact('Knooviq AI Consultant Demo') : null}
                  className="px-8 py-4 rounded-xl bg-[#0077B6] hover:bg-[#006296] text-white font-bold text-sm shadow-md hover:shadow-cyan-500/25 transition-all flex items-center gap-2 group cursor-pointer hover:scale-102"
                >
                  <span>Book a Demo</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="#question-to-action"
                  className="px-6 py-4 rounded-xl bg-white dark:bg-white/10 hover:bg-slate-100 dark:hover:bg-white/15 border border-slate-300 dark:border-cyan-400/40 text-slate-900 dark:text-white text-sm font-bold transition-all flex items-center gap-2 shadow-sm"
                >
                  <span>Explore How It Works</span>
                  <ChevronRight className="w-4 h-4 text-[#00A3E0]" />
                </a>
              </div>

              {/* Core Philosophy Chain (Human Question -> AI Understanding -> Business Context -> Useful Action) */}
              <div className="pt-6 border-t border-slate-300 dark:border-white/20">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3">
                  Natural Intelligence Journey
                </p>
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                  <span className="px-3 py-1.5 rounded-lg bg-white dark:bg-white/10 border border-slate-300 dark:border-white/20 shadow-xs">
                    Human Question
                  </span>
                  <span className="text-[#00A3E0] font-bold text-sm">&rarr;</span>
                  <span className="px-3 py-1.5 rounded-lg bg-white dark:bg-white/10 border border-slate-300 dark:border-white/20 shadow-xs">
                    AI Understanding
                  </span>
                  <span className="text-[#00A3E0] font-bold text-sm">&rarr;</span>
                  <span className="px-3 py-1.5 rounded-lg bg-white dark:bg-white/10 border border-slate-300 dark:border-white/20 shadow-xs">
                    Business Context
                  </span>
                  <span className="text-[#00A3E0] font-bold text-sm">&rarr;</span>
                  <span className="px-3 py-1.5 rounded-lg bg-sky-100 dark:bg-cyan-950 text-[#0077B6] dark:text-cyan-300 border border-sky-300 dark:border-cyan-400 font-bold shadow-xs">
                    Useful Action
                  </span>
                </div>
              </div>

            </div>

            {/* Right Column: Abstract 3D Intelligence Core with Floating Conversational Prompts */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-300/80 dark:border-cyan-500/40 bg-slate-950 group">
                <img
                  src="/images/ai_consultant_core.jpg"
                  alt="3D abstract intelligence core sculpture with crystalline glass facets and luminous orbital rings"
                  className="w-full h-[450px] sm:h-[510px] object-cover object-center select-none group-hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent pointer-events-none" />

                {/* Floating Prompt 1: Top Left */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-6 left-5 z-20 pointer-events-none max-w-[230px]"
                >
                  <div className="px-4 py-2.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-cyan-400/50 text-white text-xs font-semibold shadow-2xl flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                    <span className="truncate">“Summarize this document”</span>
                  </div>
                </motion.div>

                {/* Floating Prompt 2: Top Right */}
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, y: [0, 6, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute top-20 right-5 z-20 pointer-events-none max-w-[230px]"
                >
                  <div className="px-4 py-2.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-[#00A3E0]/50 text-white text-xs font-semibold shadow-2xl flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00A3E0] shrink-0" />
                    <span className="truncate">“Find the latest proposal”</span>
                  </div>
                </motion.div>

                {/* Floating Prompt 3: Middle Left */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, y: [0, -6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute bottom-28 left-5 z-20 pointer-events-none max-w-[230px]"
                >
                  <div className="px-4 py-2.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-emerald-400/50 text-white text-xs font-semibold shadow-2xl flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0" />
                    <span className="truncate">“Draft a response”</span>
                  </div>
                </motion.div>

                {/* Floating Prompt 4: Bottom Right */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: [0, 5, 0] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                  className="absolute bottom-8 right-5 z-20 pointer-events-none max-w-[250px]"
                >
                  <div className="px-4 py-2.5 rounded-xl bg-slate-950/90 backdrop-blur-md border border-indigo-400/50 text-white text-xs font-semibold shadow-2xl flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-400 shrink-0" />
                    <span className="truncate">“Help me prepare for this meeting”</span>
                  </div>
                </motion.div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — FROM QUESTION TO ACTION (CONTINUOUS ANIMATED JOURNEY)
          ========================================================================= */}
      <section id="question-to-action" className="py-20 sm:py-28 bg-white dark:bg-[#050B17] relative border-b border-slate-300/80 dark:border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 dark:bg-cyan-950/80 border border-sky-300 dark:border-cyan-400/40 text-[#0077B6] dark:text-cyan-300 text-xs font-bold tracking-wide shadow-sm">
              <Workflow className="w-4 h-4 text-[#00A3E0]" />
              <span>Cinematic Storytelling Sequence</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
              From a Simple Question to Meaningful Action
            </h2>

            <p className="text-slate-700 dark:text-slate-200 text-base leading-relaxed font-normal">
              Observe how a single conversational request transitions seamlessly through comprehension, 
              enterprise connection, and tangible execution without manual friction.
            </p>
          </div>

          {/* Interactive Case Demonstration Canvas */}
          <div className="max-w-4xl mx-auto rounded-3xl bg-slate-50 dark:bg-slate-900/80 border-2 border-slate-300 dark:border-cyan-500/30 p-6 sm:p-10 shadow-xl space-y-8">
            
            {/* The Human Prompt Bar */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-cyan-400/30 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-sky-100 dark:bg-cyan-950 text-[#0077B6] dark:text-cyan-300 flex items-center justify-center shrink-0 border border-sky-300 dark:border-cyan-400/40">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs font-extrabold text-[#0077B6] dark:text-cyan-300 uppercase tracking-wider block">
                  Natural User Inquiry
                </span>
                <p className="text-base sm:text-lg font-bold text-slate-900 dark:text-white truncate">
                  “Find the latest vendor proposal and summarize the key points.”
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1.5 rounded-lg border border-emerald-300 dark:border-emerald-500/40">
                <CheckCircle2 className="w-4 h-4" />
                <span>Verified Access</span>
              </div>
            </div>

            {/* Continuous 4-Step Interactive Progression Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {journeySteps.map((step, sIdx) => {
                const isSelected = sIdx === activeStep;
                const IconComponent = step.icon;

                return (
                  <motion.button
                    key={step.stage}
                    onClick={() => setActiveStep(sIdx)}
                    whileHover={{ y: -3, scale: 1.02 }}
                    className={`p-4 rounded-2xl text-left border-2 transition-all relative overflow-hidden cursor-pointer ${
                      isSelected
                        ? 'bg-white dark:bg-slate-800 border-[#00A3E0] dark:border-cyan-400 shadow-lg ring-2 ring-[#00A3E0]/30'
                        : 'bg-white dark:bg-slate-800/60 border-slate-300 dark:border-white/15 hover:border-slate-400 dark:hover:border-cyan-400/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-extrabold ${step.color}`}>{step.stage}</span>
                      <IconComponent className={`w-4 h-4 ${isSelected ? 'text-[#00A3E0] dark:text-cyan-300' : 'text-slate-400'}`} />
                    </div>
                    <p className="text-xs font-bold text-slate-900 dark:text-white mt-2 truncate">
                      {step.label}
                    </p>
                    <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 block mt-0.5">
                      Step {step.stepNum}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* Active Stage Deep-Dive Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-cyan-500/40 shadow-md space-y-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-white/15 pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className={`text-xs font-extrabold px-3 py-1.5 rounded-full border ${journeySteps[activeStep].badgeBg}`}>
                      Step 0{activeStep + 1} of 04
                    </span>
                    <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
                      {journeySteps[activeStep].stage} Phase
                    </span>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-300 dark:border-emerald-500/40 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Active Progression</span>
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">
                    {journeySteps[activeStep].label}
                  </h3>
                  <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-medium mt-1.5">
                    {journeySteps[activeStep].desc}
                  </p>
                </div>

                {/* Rich Details Bullets */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                  {journeySteps[activeStep].details.map((det, dIdx) => (
                    <div
                      key={dIdx}
                      className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-slate-300 dark:border-white/15 flex items-center gap-2"
                    >
                      <Sparkles className="w-4 h-4 text-[#00A3E0] shrink-0" />
                      <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                        {det}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Enterprise Output Signature */}
                <div className="p-4 rounded-xl bg-sky-50 dark:bg-cyan-950/40 border-2 border-sky-200 dark:border-cyan-500/30 space-y-1">
                  <span className="text-xs font-extrabold text-[#0077B6] dark:text-cyan-300 uppercase tracking-wider block">
                    Enterprise Output Signature
                  </span>
                  <p className="text-sm text-slate-900 dark:text-slate-100 font-semibold italic">
                    {journeySteps[activeStep].quote}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — ONE AI CONSULTANT. MANY WAYS TO HELP.
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-slate-50/70 dark:bg-[#081226] relative border-b border-slate-300/80 dark:border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 dark:bg-cyan-950/80 border border-sky-300 dark:border-cyan-400/40 text-[#0077B6] dark:text-cyan-300 text-xs font-bold tracking-wide shadow-sm">
              <Bot className="w-4 h-4 text-[#00A3E0]" />
              <span>Multi-Modal Enterprise Assistance</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
              One AI Consultant. Many Ways to Help.
            </h2>

            <p className="text-slate-700 dark:text-slate-200 text-base leading-relaxed font-normal">
              Hover or select any capability around the central intelligence model to experience simulated natural language prompts and responses.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column (5 Cols): Capability Selector Grid */}
            <div className="lg:col-span-5 space-y-3">
              {CAPABILITIES.map((cap) => {
                const isSelected = cap.id === activeCapability.id;
                const IconComponent = cap.icon;

                return (
                  <motion.div
                    key={cap.id}
                    onClick={() => setActiveCapability(cap)}
                    whileHover={{ x: 4 }}
                    className={`cursor-pointer rounded-2xl p-4 border-2 transition-all duration-200 flex items-center gap-3.5 ${
                      isSelected
                        ? 'bg-white dark:bg-slate-800 border-[#00A3E0] dark:border-cyan-400 shadow-lg ring-2 ring-[#00A3E0]/25'
                        : 'bg-white dark:bg-slate-900/90 border-slate-300 dark:border-white/15 hover:border-slate-400 dark:hover:border-cyan-400/50'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${
                      isSelected
                        ? 'bg-[#0077B6] text-white border-[#0077B6]'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-white/10'
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-bold text-slate-900 dark:text-white truncate">
                          {cap.title}
                        </h3>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky-100 dark:bg-cyan-950 text-[#0077B6] dark:text-cyan-300 border border-sky-200 dark:border-cyan-500/30">
                          {cap.badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 line-clamp-1 font-medium">
                        {cap.subtitle}
                      </p>
                    </div>

                    <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? 'text-[#00A3E0] translate-x-1 font-bold' : 'text-slate-400'}`} />
                  </motion.div>
                );
              })}
            </div>

            {/* Right Column (7 Cols): The Live Simulated Assistance Viewport */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCapability.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-3xl bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-cyan-500/40 p-6 sm:p-8 shadow-2xl space-y-6"
                >
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/15">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-xl bg-sky-100 dark:bg-cyan-950 text-[#0077B6] dark:text-cyan-300 flex items-center justify-center border border-sky-300 dark:border-cyan-400/40 shadow-sm">
                        <activeCapability.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">
                          {activeCapability.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium">
                          {activeCapability.subtitle}
                        </p>
                      </div>
                    </div>

                    <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/40 shadow-xs">
                      Context Ready
                    </span>
                  </div>

                  {/* Simulated Human Query Bubble */}
                  <div className="space-y-2">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-[#00A3E0]" />
                      <span>Executive Prompt</span>
                    </span>
                    <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-900 border-2 border-slate-300 dark:border-white/15 text-sm font-bold text-slate-900 dark:text-white shadow-xs">
                      {activeCapability.promptExample}
                    </div>
                  </div>

                  {/* Simulated AI Synthesized Action Bubble */}
                  <div className="space-y-2">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#0077B6] dark:text-cyan-300 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-[#00A3E0]" />
                      <span>Knooviq AI Synthesized Response</span>
                    </span>
                    <div className="p-5 rounded-2xl bg-sky-50 dark:bg-cyan-950/40 border-2 border-sky-200 dark:border-cyan-500/40 text-sm text-slate-800 dark:text-slate-100 leading-relaxed font-medium shadow-xs">
                      {activeCapability.aiResponse}
                    </div>
                  </div>

                  {/* Key Highlights Inside Box */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2">
                    {activeCapability.highlights.map((hl, hIdx) => (
                      <div
                        key={hIdx}
                        className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-300 dark:border-white/15 flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                          {hl}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Connection Pathway Note */}
                  <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-300 dark:border-white/15 text-xs text-slate-700 dark:text-slate-300 flex items-center justify-between">
                    <span className="font-semibold">Underlying Enterprise Link:</span>
                    <strong className="text-slate-900 dark:text-white font-bold">{activeCapability.systemLink}</strong>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — BUSINESS CONTEXT (INTELLIGENCE NETWORK)
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white dark:bg-[#050B17] relative border-b border-slate-300/80 dark:border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 dark:bg-cyan-950/80 border border-sky-300 dark:border-cyan-400/40 text-[#0077B6] dark:text-cyan-300 text-xs font-bold tracking-wide shadow-sm">
              <Database className="w-4 h-4 text-[#00A3E0]" />
              <span>Grounded Enterprise Knowledge</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
              Intelligence That Understands Your Business Context
            </h2>

            <p className="text-slate-700 dark:text-slate-200 text-base leading-relaxed font-normal">
              Instead of generic public models, Knooviq AI Consultant operates directly within your enterprise perimeter — 
              connecting your people, operational systems, and historical data into one unified conversational experience.
            </p>
          </div>

          {/* Surrounding System Architecture Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { title: 'ERP Systems', subtitle: 'Master data & records', tag: 'SAP Core', icon: Database },
              { title: 'CRM Solutions', subtitle: 'Accounts & pipelines', tag: 'Accounts', icon: Users2 },
              { title: 'Documents', subtitle: 'Contracts & proposals', tag: 'DMS Vault', icon: FileText },
              { title: 'Communication', subtitle: 'Emails & meetings', tag: 'Memos', icon: Mail },
              { title: 'Workflows', subtitle: 'Approval sequences', tag: 'Sign-offs', icon: Workflow },
              { title: 'Knowledge', subtitle: 'Standard SOPs & guidelines', tag: 'Institutional', icon: Compass }
            ].map((sys, idx) => {
              const IconComp = sys.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border-2 border-slate-300 dark:border-cyan-500/30 text-center space-y-2.5 hover:border-[#00A3E0] dark:hover:border-cyan-400 shadow-sm transition-all"
                >
                  <div className="w-12 h-12 mx-auto rounded-xl bg-sky-100 dark:bg-cyan-950 text-[#0077B6] dark:text-cyan-300 flex items-center justify-center border border-sky-200 dark:border-cyan-500/40">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white font-display">
                    {sys.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                    {sys.subtitle}
                  </p>
                  <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-white/10">
                    {sys.tag}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Three Key Pillars: Natural, Contextual, Controlled */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-3xl p-7 bg-slate-50 dark:bg-slate-900/80 border-2 border-slate-300 dark:border-cyan-500/30 space-y-3 shadow-md"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-100 dark:bg-cyan-950 text-[#0077B6] dark:text-cyan-300 flex items-center justify-center font-extrabold text-base border border-sky-300 dark:border-cyan-500/40">
                01
              </div>
              <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">Natural</h3>
              <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                Converse effortlessly in plain business language. No prompt engineering or specialized querying syntax required.
              </p>
              <div className="pt-2 border-t border-slate-200 dark:border-white/10 text-xs font-semibold text-[#0077B6] dark:text-cyan-300">
                &bull; Intuitive human conversation
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-3xl p-7 bg-slate-50 dark:bg-slate-900/80 border-2 border-slate-300 dark:border-cyan-500/30 space-y-3 shadow-md"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 flex items-center justify-center font-extrabold text-base border border-indigo-300 dark:border-indigo-500/40">
                02
              </div>
              <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">Contextual</h3>
              <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                Deeply grounded in real business workflows, master files, active proposals, and operational transactions.
              </p>
              <div className="pt-2 border-t border-slate-200 dark:border-white/10 text-xs font-semibold text-indigo-600 dark:text-indigo-300">
                &bull; Grounded in enterprise reality
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-3xl p-7 bg-slate-50 dark:bg-slate-900/80 border-2 border-slate-300 dark:border-cyan-500/30 space-y-3 shadow-md"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center justify-center font-extrabold text-base border border-emerald-300 dark:border-emerald-500/40">
                03
              </div>
              <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">Controlled</h3>
              <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                Protected by strict enterprise-grade governance, role-based security boundaries, and full auditability.
              </p>
              <div className="pt-2 border-t border-slate-200 dark:border-white/10 text-xs font-semibold text-emerald-600 dark:text-emerald-300">
                &bull; Zero data exposure
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          BEFORE VS AFTER COMPARISON TABLE: OPERATIONAL TRANSFORMATION (COMPACT)
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-slate-100/70 dark:bg-[#060D1D] border-t-2 border-slate-300 dark:border-cyan-500/25 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-8 space-y-2.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border-2 border-slate-300 dark:border-cyan-500/35 bg-white dark:bg-[#070E1C] shadow-xs">
              <Sparkles className="w-3 h-3 text-[#00A3E0]" />
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0077B6] dark:text-cyan-300">
                Operational Transformation
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
              Before vs After{' '}
              <span className="bg-gradient-to-r from-[#0077B6] to-[#00A3E0] bg-clip-text text-transparent">
                Knooviq AI Consultant
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-normal leading-relaxed">
              Transition from fragmented manual searching to instant, verified enterprise intelligence inside your daily workflow.
            </p>
          </div>

          {/* Comparison Grid (Side-by-Side) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
            
            {/* Card 1: BEFORE — Traditional Knowledge Work */}
            <div className="rounded-2xl p-5 sm:p-6 bg-white dark:bg-[#070E1C] border-2 border-rose-300 dark:border-rose-900/50 shadow-md flex flex-col justify-between space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/10">
                  <span className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-400 border border-rose-300 dark:border-rose-800">
                    Before • Traditional Operations
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                    Legacy Workflow
                  </span>
                </div>

                <div className="space-y-0.5">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    Fragmented, Manual & Disconnected
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Critical hours lost to repetitive searching and administrative overhead.
                  </p>
                </div>

                <div className="space-y-2 pt-1">
                  {[
                    {
                      title: 'Fragmented Document Search',
                      desc: 'Switching through multiple local drives, cloud folders, and email archives to locate past contracts and proposals.'
                    },
                    {
                      title: 'Manual Information Synthesis',
                      desc: 'Laboriously reading 50-page legal documents to extract indemnity caps and liability clauses.'
                    },
                    {
                      title: 'Drafting Bottlenecks',
                      desc: 'Writing client memos and executive status briefs from scratch without instant access to historical milestones.'
                    },
                    {
                      title: 'Scattered Meeting Action Items',
                      desc: 'Action points remain trapped in notes without automated task routing, owner mapping, or ERP triggers.'
                    },
                    {
                      title: 'Isolated Policy Verification',
                      desc: 'Repeatedly emailing department leads to verify routine internal protocols, stalling decisions.'
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
                Result: Lost enterprise velocity, high cognitive fatigue, and inconsistent execution across departments.
              </div>
            </div>

            {/* Card 2: AFTER — With Knooviq AI Consultant */}
            <div className="rounded-2xl p-5 sm:p-6 bg-white dark:bg-[#070E1C] border-2 border-cyan-400 dark:border-cyan-400/60 shadow-lg shadow-cyan-500/10 flex flex-col justify-between space-y-4 relative overflow-hidden">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/10">
                  <span className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-cyan-100/90 dark:bg-cyan-950 text-[#0077B6] dark:text-cyan-300 border border-cyan-300 dark:border-cyan-400/50">
                    After • With Knooviq AI Consultant
                  </span>
                  <span className="text-[11px] font-semibold text-[#00A3E0] dark:text-cyan-400">
                    Intelligent Flow
                  </span>
                </div>

                <div className="space-y-0.5">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    Unified, Context-Aware & Instant
                  </h3>
                  <p className="text-xs text-[#0077B6] dark:text-cyan-300 font-medium">
                    Knowledge workers empowered by conversational precision and zero search latency.
                  </p>
                </div>

                <div className="space-y-2 pt-1">
                  {[
                    {
                      title: 'Sub-Second Cross-System Retrieval',
                      desc: 'A single natural language query surfaces verified records from SAP MM, DMS vaults, and legal repositories immediately.'
                    },
                    {
                      title: 'Instant Semantic Document Synthesis',
                      desc: 'Automated extraction of key covenants, milestones, and risk points delivered in concise executive brief format.'
                    },
                    {
                      title: 'Context-Aware Communication',
                      desc: 'Generates memos and leadership updates pre-populated with live ERP milestone data in your corporate voice.'
                    },
                    {
                      title: 'Automated Task Extraction & Sync',
                      desc: 'Converts meeting transcripts into assigned action items automatically synchronized into Jira and SAP BTP.'
                    },
                    {
                      title: 'Grounded SOP Answers',
                      desc: 'Direct, verified policy answers cited from organizational SOPs, ensuring strict compliance with role permissions.'
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
                Outcome: 100% role-based security, hours saved per employee weekly, and accelerated operational decisions.
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5 — FINAL CTA: WORK SMARTER. LET INTELLIGENCE WORK WITH YOU.
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-white via-slate-50 to-sky-50/60 dark:from-[#050B17] dark:via-[#081226] dark:to-[#050B17] relative overflow-hidden">
        
        {/* Ambient Glow */}
        <div className="aurora-sphere-1 -bottom-20 left-1/3 bg-[#00A3E0]/20 dark:bg-[#00A3E0]/25 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 dark:bg-cyan-950/80 border border-sky-300 dark:border-cyan-400/40 text-[#0077B6] dark:text-cyan-300 text-xs font-bold tracking-wide shadow-sm">
            <Sparkles className="w-4 h-4 text-[#00A3E0]" />
            <span>Ready for Intelligent Work</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display leading-tight max-w-3xl mx-auto">
            Work Smarter.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-[#0077B6] to-[#00A3E0] dark:from-white dark:via-cyan-200 dark:to-[#00A3E0]">
              Let Intelligence Work With You.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed max-w-2xl mx-auto font-normal">
            Knooviq AI Consultant brings intelligent assistance into the flow of everyday business — helping teams spend 
            less time searching, switching, and repeating, and more time moving work forward.
          </p>

          {/* Final CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenContact ? onOpenContact('Knooviq AI Consultant Consultation') : null}
              className="px-8 py-4 rounded-xl bg-[#0077B6] hover:bg-[#006296] text-white font-bold text-sm shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center gap-2 group cursor-pointer hover:scale-102"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <Link
              to="/products/knooviq-ai-insights"
              className="px-6 py-4 rounded-xl bg-white dark:bg-white/10 hover:bg-slate-100 dark:hover:bg-white/15 border-2 border-slate-300 dark:border-cyan-400/40 text-slate-900 dark:text-white text-sm font-bold transition-all flex items-center gap-2 shadow-sm"
            >
              <span>Explore AI Insights</span>
              <ChevronRight className="w-4 h-4 text-[#00A3E0]" />
            </Link>
          </div>

          {/* Value Highlights Bar */}
          <div className="pt-10 border-t border-slate-300 dark:border-white/20 max-w-xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3">
              Core Experience
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
              <span className="px-3.5 py-1.5 rounded-lg bg-white dark:bg-white/10 border border-slate-300 dark:border-white/20 shadow-xs">
                Ask naturally
              </span>
              <span className="text-[#00A3E0] font-bold text-sm">&rarr;</span>
              <span className="px-3.5 py-1.5 rounded-lg bg-white dark:bg-white/10 border border-slate-300 dark:border-white/20 shadow-xs">
                Work with context
              </span>
              <span className="text-[#00A3E0] font-bold text-sm">&rarr;</span>
              <span className="px-3.5 py-1.5 rounded-lg bg-sky-100 dark:bg-cyan-950 text-[#0077B6] dark:text-cyan-300 border border-sky-300 dark:border-cyan-400 font-bold shadow-xs">
                Stay in control
              </span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
