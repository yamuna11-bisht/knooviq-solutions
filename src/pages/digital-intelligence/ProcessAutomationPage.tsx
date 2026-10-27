import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Workflow,
  Cpu,
  GitBranch,
  Boxes,
  Server,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Layers,
  Lock,
  Sliders,
  ChevronDown,
  ArrowRight,
  ChevronRight,
  Briefcase,
  Building2,
  Receipt,
  RefreshCw,
  Zap,
  CheckSquare,
  Maximize2,
  X
} from 'lucide-react';

interface ProcessAutomationPageProps {
  onOpenContact?: (defaultTopic?: string) => void;
}

export const ProcessAutomationPage: React.FC<ProcessAutomationPageProps> = ({
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

  // Core Enterprise Process Domains
  const enterpriseDomains = [
    {
      title: 'Order-to-Cash Orchestration',
      category: 'Revenue Operations',
      icon: Boxes,
      desc: 'Synchronizes credit verification, dynamic inventory reservation, cross-border trade screening, and customer invoice generation across disparate enterprise channels.',
      erp: 'SAP S/4HANA Sales & Distribution'
    },
    {
      title: 'Procure-to-Pay Automation',
      category: 'Strategic Sourcing',
      icon: Briefcase,
      desc: 'Coordinates purchase requisitions, automated vendor evaluation, multi-tier corporate approvals, and contractual purchase order dispatches without manual latency.',
      erp: 'SAP S/4HANA Sourcing & Procurement'
    },
    {
      title: 'Record-to-Report Reconciliation',
      category: 'Corporate Finance',
      icon: Receipt,
      desc: 'Streamlines financial period close procedures, intercompany netting settlements, foreign currency adjustments, and compliant general ledger journal postings.',
      erp: 'SAP S/4HANA Financial Accounting'
    },
    {
      title: 'Hire-to-Retire Governance',
      category: 'Human Capital',
      icon: Building2,
      desc: 'Orchestrates cross-departmental employee lifecycle events across identity provisioning, hardware allocation, statutory benefits, and role-based directory permissions.',
      erp: 'SAP SuccessFactors Employee Central'
    },
    {
      title: 'Plan-to-Produce Synchronization',
      category: 'Manufacturing Operations',
      icon: Cpu,
      desc: 'Connects dynamic demand forecasting signals with plant production capacity schedules, bill-of-materials component allocations, and shop-floor dispatch instructions.',
      erp: 'SAP Digital Supply Chain'
    },
    {
      title: 'Issue-to-Resolution Lifecycle',
      category: 'Service Management',
      icon: Workflow,
      desc: 'Automates customer case triaging, diagnostics routing, field technician dispatching, warranty entitlement verification, and SLA milestone notifications.',
      erp: 'SAP Service Management'
    }
  ];

  // Core Transformation Pillars
  const transformationPillars = [
    {
      icon: Workflow,
      title: 'Event-Driven Orchestration',
      desc: 'Ingests real-time events across heterogeneous cloud platforms and legacy systems, synchronizing complex long-running business sagas with guaranteed consistency.'
    },
    {
      icon: Sliders,
      title: 'Declarative Decision Rules',
      desc: 'Decouples business policies from application code, allowing business operations teams to maintain routing tables and compliance policies without software redeployments.'
    },
    {
      icon: ShieldCheck,
      title: 'Automated Fallback Governance',
      desc: 'Detects transient system bottlenecks and anomalies in real time, executing compensatory rollbacks or routing edge exceptions to role-based review cockpits.'
    },
    {
      icon: Server,
      title: 'Clean-Core ERP Integration',
      desc: 'Communicates with SAP S/4HANA via standard OData services and enterprise events, preserving core application integrity while eliminating custom database modifications.'
    }
  ];

  // Simple Workflow Lifecycle
  const workflowSteps = [
    {
      step: 'TRIGGER',
      title: 'Omnichannel Ingestion & Event Capture',
      desc: 'Enterprise events from IoT telemetry, API webhooks, microservices, and message queues stream into low-latency brokers with automatic deduplication.',
      icon: Zap
    },
    {
      step: 'EVALUATE',
      title: 'Dynamic Decisioning & State Resolution',
      desc: 'High-speed rule engines evaluate corporate policies, contractual authorizations, and parallel task paths with automated compensatory fallbacks.',
      icon: GitBranch
    },
    {
      step: 'RECONCILE',
      title: 'Autonomous Execution & Clean ERP Commit',
      desc: 'Validated execution payloads post directly into SAP S/4HANA Clean Core via native BAPIs, while exceptions route to visual governance cockpits.',
      icon: CheckSquare
    }
  ];

  // Comparative Matrix (Zero numbers, stats, or percentages)
  const comparisonRows = [
    {
      feature: 'Process Orchestration',
      legacy: 'Fragmented point-to-point scripts buried across disparate departmental servers',
      knooviq: 'Unified visual event-driven state machines with centralized operational telemetry'
    },
    {
      feature: 'Business Rules Management',
      legacy: 'Hardcoded conditional logic requiring slow developer maintenance cycles',
      knooviq: 'Declarative decision tables maintainable by authorized business stakeholders'
    },
    {
      feature: 'Distributed State Handling',
      legacy: 'Brittle synchronous API calls prone to cascading failures during service outages',
      knooviq: 'Resilient asynchronous saga choreography with automatic compensating rollbacks'
    },
    {
      feature: 'Exception Governance',
      legacy: 'Silent execution failures buried in obscure server logs without oversight',
      knooviq: 'Context-rich illuminated exception cockpits with collaborative resolution workflows'
    },
    {
      feature: 'Change Velocity',
      legacy: 'Protracted regression testing cycles required for routine threshold updates',
      knooviq: 'Hot-reload declarative rule modifications without operational downtime'
    },
    {
      feature: 'SAP ERP Alignment',
      legacy: 'Direct database tampering and complex custom ABAP modifications in core tables',
      knooviq: 'Native SAP Clean-Core compliance utilizing SAP Event Mesh and standard BAPIs'
    }
  ];

  // Executive FAQs (Scrubbed of All Numbers, Stats, and Percentages)
  const faqs = [
    {
      question: 'How does KNOOVIQ Process Automation safeguard our SAP Clean Core strategy?',
      answer: 'Our architecture executes process orchestration decoupled from the ERP on modern cloud fabrics and SAP Business Technology Platform. Transactions communicate with SAP S/4HANA exclusively through standard OData APIs, BAPIs, and enterprise business events. By eliminating custom database modifications and bespoke ABAP code in the core ERP, your systems remain completely clean, compliant, and ready for rapid cloud upgrades.'
    },
    {
      question: 'How does the platform manage distributed transactions across multiple heterogeneous systems?',
      answer: 'We implement asynchronous saga orchestration patterns rather than fragile synchronous locks. When a cross-system process spans Salesforce, Workday, and SAP, our state machine coordinates each localized transaction sequentially. If an external service encounters an unrecoverable failure at an intermediate milestone, the orchestrator automatically executes deterministic compensating transactions in reverse order to restore enterprise data consistency across all platforms.'
    },
    {
      question: 'Can business stakeholders modify routing thresholds and approval logic without engineering support?',
      answer: 'Yes. We deliberately decouple volatile business policies from core orchestrator code using declarative Decision Model and Notation standards. Business operations leads can adjust discount approval thresholds, regional compliance guidelines, and routing escalations directly within intuitive decision tables. Changes take effect through version-controlled deployment pipelines without requiring application recompilation or service downtime.'
    },
    {
      question: 'How are process exceptions and unforeseen operational anomalies handled?',
      answer: 'When an edge case occurs—such as a missing customer credit rating or conflicting master data—the process does not terminate or generate silent log errors. Instead, the orchestrator routes the active process instance into an ergonomic human-in-the-loop exception cockpit. Operational specialists receive pre-populated contextual summaries, can execute corrections with single-click approvals, and resume the automated flow seamlessly.'
    },
    {
      question: 'What security and access governance safeguards are enforced across automated workflows?',
      answer: 'Every automated process execution is governed by zero-trust role-based access controls, comprehensive identity propagation, and end-to-end cryptographic encryption both in transit and at rest. Every event transition, automated decision, and human intervention is recorded in an immutable audit ledger, ensuring effortless regulatory compliance and complete enterprise operational traceability.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#0070C0] selection:text-white antialiased overflow-x-hidden">

      {/* =========================================================================
          SECTION 1: HERO SECTION (AI Agents Style Full Bleed Panoramic Background)
          IMAGE: /images/digital-intelligence/process_automation_clean_core_erp.png
          ========================================================================= */}
      <section className="relative w-full min-h-[560px] sm:min-h-[620px] lg:min-h-[680px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 overflow-hidden bg-slate-950 text-white">
        {/* Full-Bleed 16:9 Panoramic Image - AI Agents Style */}
        <div className="absolute inset-0 z-0 pt-10 sm:pt-14">
          <img
            src="/images/digital-intelligence/process_automation_clean_core_erp.png"
            alt="Enterprise Process Automation & Clean-Core ERP Orchestration"
            className="w-full h-full object-cover object-top sm:object-[78%_top] lg:object-top brightness-[1.10] contrast-[1.05]"
            style={{ imageRendering: '-webkit-optimize-contrast' }}
          />
          {/* Lighter radiant blue overlay for lighter, clearer look */}
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
                  <Workflow className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Process Automation &amp; Orchestration</span>
                </div>
              </div>

              {/* Animated Headline with High-Contrast Typography */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                Enterprise <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-200">
                  Process Automation &amp; Clean-Core ERP
                </span>
              </h1>

              {/* Subtitle with High Legibility */}
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal pt-1 drop-shadow-md">
                Orchestrate complex cross-departmental operations with event-driven state machines, declarative decision tables, and continuous ledger reconciliation while maintaining an uncompromised SAP Clean-Core foundation.
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
                <Workflow className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Autonomous Cross-Silo Orchestration</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-emerald-200 shadow-sm">
                <Sliders className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Declarative Business Rules</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-sky-200 shadow-sm">
                <Server className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Clean-Core ERP Events</span>
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
              Autonomous Orchestration Designed for Enterprise Resilience
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
              Move beyond brittle scripts. Our platform coordinates distributed applications, synchronizes enterprise state machines, and enforces governance across your entire operational landscape.
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
                Synchronize Distributed Systems Without Custom Spaghetti Code
              </h2>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Traditional automation architectures rely on point-to-point batch scripts that break during upgrades and leave ledgers out of balance. KNOOVIQ Process Automation decouples workflow logic from underlying business services using modern event broker architecture.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#0070C0] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Decoupled Microservice Sagas</h4>
                    <p className="text-xs sm:text-sm text-slate-600">Coordinates distributed transactional commits across enterprise software platforms with full compensatory rollback capabilities.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#0070C0] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Dynamic Context-Aware Routing</h4>
                    <p className="text-xs sm:text-sm text-slate-600">Evaluates organizational thresholds, regional jurisdictions, and risk scores in real time to determine operational paths.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#0070C0] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Zero-Impact ERP Extensibility</h4>
                    <p className="text-xs sm:text-sm text-slate-600">Operates seamlessly on SAP Business Technology Platform, ensuring your SAP S/4HANA digital core remains pristine and cloud-ready.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Dashboard Screen */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl border border-slate-200 shadow-xl overflow-hidden group h-[380px] sm:h-[440px] w-full bg-slate-900">
                <img
                  src="/images/sap_btp_command_center.jpg"
                  alt="Process Automation Command Center"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Floating Glassmorphic Badge 1 */}
                <div className="absolute top-6 left-6 rounded-xl bg-slate-900/90 border border-slate-700 p-3.5 backdrop-blur-md shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs font-semibold text-slate-200">Autonomous Process Fabric</span>
                  </div>
                  <p className="text-sm font-bold text-white mt-1">Real-Time State Machine</p>
                </div>

                {/* Floating Glassmorphic Badge 2 */}
                <div className="absolute bottom-6 right-6 rounded-xl bg-[#0070C0]/90 border border-sky-400/40 p-3.5 backdrop-blur-md shadow-lg text-white">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
                    <span className="text-xs font-semibold">Clean-Core Compliance</span>
                  </div>
                  <p className="text-sm font-bold mt-1">Event-Driven Orchestrator</p>
                </div>
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
              A Seamless Lifecycle Architecture
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
              From initial inbound trigger to immutable ledger confirmation, observe how enterprise operations execute autonomously across decoupled architectures.
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
      {/* SECTION 5: ENTERPRISE PROCESS DOMAINS (Clean 6-Card Grid)                 */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0070C0] bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100">
              ENTERPRISE PROCESS DOMAINS
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Engineered for High-Stakes Operational Workflows
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
              Pre-configured state machines and compliance logic tailored to mission-critical corporate functions across the enterprise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enterpriseDomains.map((domain, idx) => (
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
              Evaluate our event-driven autonomous process fabric against legacy point-to-point scripts, and examine our full-stack enterprise orchestration architecture.
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
                      <th className="py-4 px-6 text-slate-500">Legacy Point-to-Point Scripts</th>
                      <th className="py-4 px-6 text-[#0070C0] bg-sky-50/50">KNOOVIQ Autonomous Process Automation</th>
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
                  src="/images/sap_btp_architecture_3d.jpg"
                  alt="KNOOVIQ Full-Stack Process Automation Architecture"
                  className="w-full h-[400px] sm:h-[480px] object-cover rounded-xl"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h4 className="text-sm font-bold text-slate-900 mb-2">Event Mesh &amp; Ingestion Fabric</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    High-throughput asynchronous message bus connecting heterogeneous cloud ecosystems, IoT sensors, webhooks, and enterprise queues with zero data loss.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h4 className="text-sm font-bold text-slate-900 mb-2">Decision Engine &amp; State Core</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    High-concurrency workflow orchestrator executing declarative rules, parallel branched execution paths, and fault-tolerant distributed transaction sagas.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h4 className="text-sm font-bold text-slate-900 mb-2">Clean-Core ERP Integration</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Bi-directional connectors integrating with SAP S/4HANA and enterprise application networks via secure OData APIs and native business events.
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
              Executive FAQs: Enterprise Process Automation
            </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              Clear answers to foundational questions regarding Clean Core compliance, distributed transactional sagas, exception governance, and enterprise security.
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
            SCALE YOUR OPERATIONAL VELOCITY
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
            Ready to Eliminate Operational Bottlenecks and Automate Enterprise Processes?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed">
            Collaborate with KNOOVIQ to map cross-departmental value streams, decouple brittle legacy scripts, and deploy resilient event-driven orchestration integrated with SAP S/4HANA.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenContact ? onOpenContact('Process Automation Discovery Workshop') : null}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-bold text-[#0070C0] shadow-xl hover:bg-sky-50 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Schedule Process Automation Discovery Workshop</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <Link
              to="/digital-intelligence/ai-powered-automation"
              className="inline-flex items-center gap-2 rounded-xl border border-white/40 bg-white/10 px-6 py-4 text-sm font-semibold text-white hover:bg-white/20 backdrop-blur-md transition-all cursor-pointer"
            >
              <span>Explore AI-Powered Automation</span>
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
                <Workflow className="w-4 h-4 text-cyan-400" />
                <span className="text-xs sm:text-sm font-mono font-bold text-white uppercase tracking-wider">
                  Enterprise Process Automation &amp; Clean-Core ERP
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsHeroModalOpen(false)}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
                title="Close modal (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative flex-1 overflow-auto bg-slate-950 flex items-center justify-center p-2 sm:p-4">
              <img
                src="/images/digital-intelligence/process_automation_clean_core_erp.png"
                alt="Enterprise Process Automation Architecture Full View"
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

export default ProcessAutomationPage;
