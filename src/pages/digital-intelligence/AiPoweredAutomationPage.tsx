import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  BrainCircuit,
  Sparkles,
  RefreshCw,
  Cpu,
  Server,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  ChevronRight,
  Workflow,
  Truck,
  Receipt,
  Building2,
  Briefcase,
  Zap,
  GitBranch,
  CheckSquare,
  Maximize2,
  X
} from 'lucide-react';

interface AiPoweredAutomationPageProps {
  onOpenContact?: (defaultTopic?: string) => void;
}

export const AiPoweredAutomationPage: React.FC<AiPoweredAutomationPageProps> = ({
  onOpenContact
}) => {
  // Lightbox modal state for hero visual
  const [isHeroModalOpen, setIsHeroModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsHeroModalOpen(false);
    };
    if (isHeroModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isHeroModalOpen]);

  // State for Architecture Comparison Tabs
  const [activeTab, setActiveTab] = useState<'comparison' | 'architecture'>('comparison');

  // State for Executive FAQs Accordion
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Core Enterprise Cognitive Use Cases
  const cognitiveDomains = [
    {
      title: 'Autonomous Invoice Dispute Resolution',
      category: 'Financial Operations',
      icon: Receipt,
      desc: 'Analyzes multi-party dispute correspondence, reconciles line item variances against purchase order histories, and crafts compliant credit memos autonomously.',
      erp: 'SAP S/4HANA Finance'
    },
    {
      title: 'Dynamic Supply Disruption Rerouting',
      category: 'Global Logistics',
      icon: Truck,
      desc: 'Evaluates transit delay signals and port congestion alerts, autonomously calculating alternate freight corridors, rebooking carriers, and updating delivery estimates.',
      erp: 'SAP Transportation Management'
    },
    {
      title: 'Cognitive Customer Inquiry Fulfillment',
      category: 'Customer Operations',
      icon: Workflow,
      desc: 'Comprehends unstructured customer inquiries across communication channels, retrieves real-time order states, updates delivery instructions, and issues replacements.',
      erp: 'SAP Service Cloud'
    },
    {
      title: 'Predictive Employee Mobility & Retention',
      category: 'Talent Management',
      icon: Building2,
      desc: 'Analyzes engagement signals and team workload distributions, automatically recommending personalized internal career pathways and skill-development plans.',
      erp: 'SAP SuccessFactors'
    },
    {
      title: 'Intelligent Contract Anomaly Audit',
      category: 'Procurement & Legal',
      icon: Briefcase,
      desc: 'Evaluates incoming master service agreements against corporate legal benchmarks, flagging non-standard liability clauses and generating redlined proposals.',
      erp: 'SAP Ariba & CLM'
    },
    {
      title: 'Autonomous Shop-Floor Dispatching',
      category: 'Smart Manufacturing',
      icon: Cpu,
      desc: 'Assesses equipment telemetry signals and component availability in real time, dynamically re-sequencing manufacturing work orders to prevent unplanned line halts.',
      erp: 'SAP Digital Supply Chain'
    }
  ];

  // Core Transformation Pillars
  const transformationPillars = [
    {
      icon: BrainCircuit,
      title: 'Autonomous Multi-Agent Swarms',
      desc: 'Specialized cognitive agents collaborate asynchronously, decomposing complex business objectives into coordinated tasks with verifiable reasoning trails.'
    },
    {
      icon: RefreshCw,
      title: 'Self-Healing Workflow Adaptation',
      desc: 'Automatically diagnoses interface alterations, schema adjustments, and system latency spikes, rerouting execution paths without manual reconfiguration.'
    },
    {
      icon: Sparkles,
      title: 'Generative Context Synthesis',
      desc: 'Transforms unstructured documents, correspondence, and multimodal inputs into structured business payloads validated against enterprise compliance policies.'
    },
    {
      icon: Cpu,
      title: 'Predictive Operational Steerage',
      desc: 'Anticipates downstream inventory deficits, payment friction, and logistical bottlenecks, triggering preventative workflows before operational delays manifest.'
    }
  ];

  // Simple Workflow Lifecycle
  const workflowSteps = [
    {
      step: 'PERCEIVE',
      title: 'Multimodal Context Ingestion',
      desc: 'Cognitive agents continuously monitor operational telemetry, event streams, customer correspondence, and application states to construct a unified world model.',
      icon: Zap
    },
    {
      step: 'REASON',
      title: 'Goal Planning & Guardrail Validation',
      desc: 'Reasoning models formulate multi-step execution plans, evaluating corporate policies and regulatory constraints against strictly enforced safety guardrails.',
      icon: GitBranch
    },
    {
      step: 'ACTUATE',
      title: 'Autonomous Execution & Continuous Learning',
      desc: 'Validated action payloads commit securely into SAP Clean Core, while post-execution outcomes retrain localized models via closed-loop feedback.',
      icon: CheckSquare
    }
  ];

  // Comparative Matrix (Zero numbers, stats, or percentages)
  const comparisonRows = [
    {
      feature: 'Interface & Schema Adaptability',
      legacy: 'Fragile static selectors that break immediately upon minor visual or layout adjustments',
      knooviq: 'Computer vision models and semantic token mapping that adapt dynamically to UI shifts'
    },
    {
      feature: 'Unstructured Data Processing',
      legacy: 'Incapable of understanding free-form emails, contracts, or ambiguous operational memos',
      knooviq: 'Multimodal foundation models that interpret contextual semantics, intent, and table layouts'
    },
    {
      feature: 'Execution Decisioning',
      legacy: 'Rigid hardcoded decision trees unable to improvise around unanticipated edge cases',
      knooviq: 'Goal-oriented autonomous agents that dynamically formulate optimal multi-step paths'
    },
    {
      feature: 'Exception Management',
      legacy: 'Halts script execution and deposits uncaught errors into unmonitored administrator queues',
      knooviq: 'Self-healing automated remediation with collaborative human-in-the-loop triaging'
    },
    {
      feature: 'Continuous Improvement',
      legacy: 'Static execution scripts requiring manual developer redesign for every operational shift',
      knooviq: 'Closed-loop learning from human validation and historical resolution successes'
    },
    {
      feature: 'SAP ERP Alignment',
      legacy: 'Brittle UI scraping vulnerable to desktop updates and background session timeouts',
      knooviq: 'Native SAP Clean-Core integration utilizing SAP Event Mesh, OData APIs, and BAPIs'
    }
  ];

  // Executive FAQs (Scrubbed of All Numbers, Stats, and Percentages)
  const faqs = [
    {
      question: 'How does KNOOVIQ prevent generative AI hallucinations during mission-critical ERP transactions?',
      answer: 'We enforce a strict separation between cognitive reasoning and transactional actuation through deterministic safety guardrails. While foundation models interpret unstructured context and suggest action plans, actual execution into SAP S/4HANA occurs exclusively through strongly typed schema validators and bounded parameter constraints. If an agent proposes an action that violates corporate policy or ledger thresholds, the action is intercepted and routed for human authorization.'
    },
    {
      question: 'What distinguishes AI-powered automation from conventional Robotic Process Automation (RPA)?',
      answer: 'Conventional RPA is deterministic—it merely mimics mouse clicks and keystrokes along predefined paths. When a field position changes or an unexpected dialogue appears, traditional bots crash. AI-powered automation combines cognitive vision with deep language models. It understands the underlying operational objective, interprets unstructured text and irregular documents, dynamically navigates UI changes, and formulates alternate execution paths autonomously.'
    },
    {
      question: 'How does the platform maintain an audit trail for autonomous agent decisions?',
      answer: 'Every decision, intermediate reasoning token, prompt context, and transaction output is captured in an immutable enterprise audit ledger. Compliance officers can inspect the exact rationale behind every autonomous action, the data sources evaluated, and the safety guardrail checks executed, ensuring complete regulatory compliance and transparent explainability.'
    },
    {
      question: 'How are complex operational exceptions resolved when an agent is uncertain?',
      answer: 'Our architecture employs calibrated Bayesian confidence scoring. When an agent encounters ambiguous customer correspondence or conflicting contract terms where confidence falls below enterprise governance thresholds, the transaction routes gracefully into an illuminated human-in-the-loop review cockpit. Human decisions are recorded to retrain localized models, continuously elevating autonomous resolution capability.'
    },
    {
      question: 'Can AI-powered automation integrate seamlessly with our existing SAP Clean Core architecture?',
      answer: 'Yes. KNOOVIQ cognitive agents run side-by-side on SAP Business Technology Platform and enterprise cloud fabrics. They interface with SAP S/4HANA strictly through standard OData services, SAP BAPIs, and enterprise business events. Custom modifications to core database tables and bespoke ABAP code are avoided, keeping your ERP core pristine, secure, and ready for rapid cloud updates.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#0070C0] selection:text-white antialiased overflow-x-hidden">

      {/* ========================================================================= */}
      {/* SECTION 1: HERO SECTION (AI Agents Style Full Bleed Panoramic Background) */}
      {/* IMAGE: /images/digital-intelligence/ai_powered_automation_cognitive_orchestration.png */}
      {/* ========================================================================= */}
      <section className="relative w-full min-h-[580px] sm:min-h-[640px] lg:min-h-[680px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 overflow-hidden bg-slate-950 text-white">
        {/* Full-Bleed Panoramic Hero Image (Full Screen Edge-to-Edge, No Partition) */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/digital-intelligence/ai_powered_automation_cognitive_orchestration.png"
            alt="Enterprise AI-Powered Automation & Cognitive Orchestration"
            className="w-full h-full object-cover object-right sm:object-[72%_center] lg:object-center brightness-[1.08] contrast-[1.05]"
            style={{ imageRendering: '-webkit-optimize-contrast' }}
          />
          {/* Lighter radiant blue overlay for lighter shade and readable text */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/40 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-sky-500/10 mix-blend-screen pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-2xl lg:max-w-xl space-y-6">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.55 }}
              className="space-y-4"
            >
              {/* Practice Pill Badge (Breadcrumb and Full Screen removed) */}
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/70 backdrop-blur-md border border-cyan-500/30 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 shadow-sm">
                  <BrainCircuit className="w-3.5 h-3.5 text-cyan-400" />
                  <span>AI-Powered Automation &amp; Agents</span>
                </div>
              </div>

              {/* Animated Headline with High-Contrast Typography */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                Enterprise <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-200">
                  AI-Powered Automation &amp; Cognitive Orchestration
                </span>
              </h1>

              {/* Subtitle with High Legibility */}
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal pt-1 drop-shadow-md">
                Infuse cognitive intelligence into enterprise automation fabrics. Move beyond rigid deterministic bots by deploying self-learning foundation models, autonomous agents, and predictive decision networks that resolve ambiguous exceptions, adapt to shifting environments, and execute straight-through SAP workflows with contextual awareness.
              </p>
            </motion.div>

            {/* Enterprise Assurance Indicators */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.2 }} 
              className="pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3"
            >
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-cyan-200 shadow-sm">
                <BrainCircuit className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Context-Aware Multi-Agent Core</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-emerald-200 shadow-sm">
                <RefreshCw className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Self-Healing Operations</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-sky-200 shadow-sm">
                <Server className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Autonomous SAP BAPIs</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: CORE CAPABILITIES (Simple & Attractive 4-Card Bento Grid)      */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0070C0] bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100">
              CORE CAPABILITIES
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Cognitive Intelligence Engineered for Complex Enterprises
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
              Deterministic automation falters when data is ambiguous. Our cognitive architecture understands intent, reasons through unstructured inputs, and autonomously resolves edge cases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {transformationPillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="rounded-xl bg-sky-50 border border-sky-100 p-3 text-[#0070C0] w-fit mb-5">
                    <pillar.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: VISUAL SPOTLIGHT (2-Column Narrative & Screen Preview)         */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Column: Descriptive Strategic Value */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0070C0] bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100">
                TRANSFORMATION SPOTLIGHT
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Transition from Brittle Scripts to Cognitive Self-Directing Workflows
              </h2>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Traditional bots follow linear instructions; the moment an unexpected dialogue, altered form field, or novel vendor format appears, execution crashes. KNOOVIQ AI-Powered Automation leverages multimodal foundation models that understand operational objectives rather than rigid coordinates.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#0070C0] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Goal-Oriented Autonomous Agents</h4>
                    <p className="text-xs sm:text-sm text-slate-600">Agents evaluate real-time system states and devise optimal execution sequences dynamically rather than following static scripts.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#0070C0] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Deterministic Guardrails &amp; Bounded Actions</h4>
                    <p className="text-xs sm:text-sm text-slate-600">Cognitive reasoning operates within strictly enforced parameter boundaries, preventing model hallucinations and unauthorized commits.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#0070C0] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Continuous Ledger Reconciliation</h4>
                    <p className="text-xs sm:text-sm text-slate-600">High-confidence automated actions post directly into SAP S/4HANA via clean-core interfaces with verifiable audit trails.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Showcase (3rd Image: Transition from Brittle Scripts to Cognitive Self-Directing Workflows) */}
            <div className="lg:col-span-6 flex justify-center items-center w-full">
              <div className="relative w-full rounded-3xl border border-slate-200 shadow-xl overflow-hidden group h-[380px] sm:h-[440px] bg-slate-900">
                <img
                  src="/images/digital-intelligence/cognitive_self_directing_workflows.png"
                  alt="Transition from Brittle Scripts to Cognitive Self-Directing Workflows"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: HOW IT WORKS (Simple & Attractive Journey)                     */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0070C0] bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100">
              OPERATIONAL WORKFLOW
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              A Continuous Cognitive Feedback Loop
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
              Observe how autonomous agents perceive environment cues, evaluate operational strategies, and execute validated enterprise actions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workflowSteps.map((ws, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-all relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="rounded-xl bg-sky-50 border border-sky-100 p-3 text-[#0070C0]">
                      <ws.icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#0070C0] bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100">
                      {ws.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {ws.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {ws.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: ENTERPRISE COGNITIVE DOMAINS (Clean 6-Card Grid)               */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0070C0] bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100">
              ENTERPRISE COGNITIVE DOMAINS
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Trained for Mission-Critical Corporate Environments
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
              Purpose-built AI models pre-tuned for complex corporate operations across supply networks, finance, customer relations, and talent management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cognitiveDomains.map((domain, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -3 }}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0070C0] bg-sky-50 px-2.5 py-0.5 rounded border border-sky-100">
                      {domain.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2.5 mb-2">
                    <domain.icon className="h-5 w-5 text-[#0070C0] shrink-0" />
                    <span>{domain.title}</span>
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {domain.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-500">
                  <span>Target Destination:</span>
                  <span className="text-[#0070C0] font-bold">{domain.erp}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: ARCHITECTURAL RIGOR & COMPARISON (Clean 2-Tab View)            */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0070C0] bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100">
              ARCHITECTURAL RIGOR
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Topological Architecture &amp; Comparative Analysis
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
              Contrast autonomous cognitive agents with legacy deterministic RPA, and inspect our full-stack enterprise cognitive automation framework.
            </p>

            {/* Simple Tab Switcher */}
            <div className="flex justify-center gap-2 mt-8">
              <button
                onClick={() => setActiveTab('comparison')}
                className={`rounded-xl px-5 py-2.5 text-xs font-bold transition-all ${activeTab === 'comparison'
                    ? 'bg-[#0070C0] text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                  }`}
              >
                Transformation Comparison Matrix
              </button>
              <button
                onClick={() => setActiveTab('architecture')}
                className={`rounded-xl px-5 py-2.5 text-xs font-bold transition-all ${activeTab === 'architecture'
                    ? 'bg-[#0070C0] text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                  }`}
              >
                Full-Stack Architecture Visual
              </button>
            </div>
          </div>

          {/* TAB 1: Comparison Matrix */}
          {activeTab === 'comparison' && (
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50 text-[11px] font-extrabold uppercase tracking-wider text-slate-600">
                      <th className="py-4 px-6">Architectural Dimension</th>
                      <th className="py-4 px-6 text-slate-500">Legacy Deterministic RPA</th>
                      <th className="py-4 px-6 text-[#0070C0] bg-sky-50/50">KNOOVIQ Cognitive AI Automation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                    {comparisonRows.map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                        <td className="py-4 px-6 font-bold text-slate-900">{row.feature}</td>
                        <td className="py-4 px-6 text-slate-500">{row.legacy}</td>
                        <td className="py-4 px-6 font-semibold text-slate-800 bg-sky-50/30 flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-[#0070C0] flex-shrink-0 mt-0.5" />
                          <span>{row.knooviq}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 2: Full-Stack Architecture Visual */}
          {activeTab === 'architecture' && (
            <div className="space-y-8">
              <div className="rounded-2xl border border-slate-200 bg-slate-950 p-3 shadow-xl overflow-hidden">
                <img
                  src="/images/ai_agents_architecture_mesh.jpg"
                  alt="KNOOVIQ Full-Stack AI-Powered Automation Architecture"
                  className="w-full h-[400px] sm:h-[480px] object-cover rounded-xl"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h4 className="text-sm font-bold text-slate-900 mb-2">Multimodal Perception Layer</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Ingests streaming events, unstructured documents, desktop UI trees, and API payloads into standardized semantic embeddings with zero data degradation.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h4 className="text-sm font-bold text-slate-900 mb-2">Agent Reasoning &amp; Guardrails</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    High-speed cognitive orchestration executing goal planning, safety boundary validation, and multi-agent consensus protocols within enterprise policies.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h4 className="text-sm font-bold text-slate-900 mb-2">Enterprise Actuation &amp; Ledger</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Deterministic execution connectors that securely commit transactions into SAP S/4HANA and enterprise fabrics with complete auditability.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: EXECUTIVE FAQS ACCORDION (Clean & Collapsible)                 */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0070C0] bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Executive FAQs: AI-Powered Automation
            </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              Essential answers addressing model safety, hallucinations, Clean Core stability, exception handling, and enterprise governance.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-[#0070C0] transition-colors"
                >
                  <span className="text-sm sm:text-base">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${activeFaq === idx ? 'rotate-180 text-[#0070C0]' : ''
                      }`}
                  />
                </button>

                {activeFaq === idx && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 8: SAPPHIRE EXECUTIVE STRATEGY CTA RIBBON                          */}
      {/* ========================================================================= */}
      <section className="bg-gradient-to-r from-[#00529B] via-[#0070C0] to-[#00A3E0] text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-200 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20 backdrop-blur-md">
            ACCELERATE COGNITIVE TRANSFORMATION
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
            Ready to Elevate Your Enterprise Beyond Rigid Scripts with AI Automation?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed">
            Partner with KNOOVIQ to benchmark your operational workflows, deploy self-healing autonomous agents, and achieve intelligent straight-through execution integrated with SAP S/4HANA.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenContact ? onOpenContact('AI Automation Discovery Workshop') : null}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-bold text-[#0070C0] shadow-xl hover:bg-sky-50 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Schedule AI Automation Discovery Workshop</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <Link
              to="/digital-intelligence/workflow-automation"
              className="inline-flex items-center gap-2 rounded-xl border border-white/40 bg-white/10 px-6 py-4 text-sm font-semibold text-white hover:bg-white/20 backdrop-blur-md transition-all cursor-pointer"
            >
              <span>Explore Workflow Automation</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Full Screen Lightbox Modal */}
      {isHeroModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200"
          onClick={() => setIsHeroModalOpen(false)}
        >
          <div 
            className="relative max-w-6xl w-full max-h-[90vh] bg-slate-950 border border-cyan-500/30 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800 bg-slate-900/80">
              <div className="flex items-center gap-2.5">
                <BrainCircuit className="w-4 h-4 text-cyan-400" />
                <span className="text-xs sm:text-sm font-mono font-bold text-white uppercase tracking-wider">
                  Enterprise AI-Powered Automation &amp; Cognitive Orchestration
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsHeroModalOpen(false)}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="Close modal (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative flex-1 overflow-auto bg-slate-950 flex items-center justify-center p-2 sm:p-4">
              <img
                src="/images/digital-intelligence/ai_powered_automation_cognitive_orchestration.png"
                alt="Enterprise AI Automation Architecture Full View"
                className="w-full h-auto max-h-[78vh] object-contain rounded-lg"
              />
            </div>
            <div className="px-5 py-2.5 border-t border-slate-800 bg-slate-900/60 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Full Panoramic Architecture Diagram</span>
              <span className="text-cyan-400">Press ESC or click outside to close</span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default AiPoweredAutomationPage;
