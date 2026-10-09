import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Activity,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Clock,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  BarChart3,
  TrendingUp,
  Cpu,
  Layers,
  Sparkles,
  Zap,
  Sliders,
  Server,
  FileCheck,
  Gauge,
  Workflow,
  Check,
  Headphones,
  Search,
  Database,
  ArrowUpRight,
  Play,
  Share2
} from 'lucide-react';
import { AdvisoryServiceNav, AdvisorySuiteFooterCrosslinks } from '../../components/advisory/AdvisoryServiceNav';

interface SapAmsPageProps {
  onOpenContact?: (topic?: string) => void;
}

export const SapAmsPage: React.FC<SapAmsPageProps> = ({ onOpenContact }) => {
  useEffect(() => {
    document.title = 'SAP AMS (Application Management Services) | 24/7 Operations | KNOOVIQ';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Section 1: Interactive SLA Escalation Flowchart State
  const [activeEscalationStep, setActiveEscalationStep] = useState<number>(0);
  const escalationSteps = [
    {
      step: 'Step 1',
      title: 'Incident Ingestion & Automated Triage',
      sla: '< 15 Minutes',
      role: 'Level 1 24/7 Operations Desk',
      desc: 'User logs issue via Teams, Portal, or automated OCC alert. The system auto-categorizes severity (P1–P4), validates user credentials, and starts the SLA response timer.',
      deliverable: 'P1-P4 Ticket assigned to functional pod with priority matrix.'
    },
    {
      step: 'Step 2',
      title: 'First-Call Runbook Resolution',
      sla: '< 30 Minutes',
      role: 'L1 Operations Engineers',
      desc: 'Checks standard operating procedures for known issues: password unlock, SU53 missing authorization analysis, print spool unblocking, or simple navigation support.',
      deliverable: 'Instant resolution or rapid warm-handoff to dedicated module pod.'
    },
    {
      step: 'Step 3',
      title: 'Deep Functional Investigation',
      sla: '< 2 Hours',
      role: 'L2 Dedicated Module Pods',
      desc: 'Specialized consultants in FI/CO, SD, MM, PP, or EWM recreate the transaction in QA sandbox, identify configuration errors, posting blocks, or master data discrepancies.',
      deliverable: 'Functional workaround or configuration correction deployed.'
    },
    {
      step: 'Step 4',
      title: 'Technical Debugging & Core Fix',
      sla: '< 4 Hours (P1)',
      role: 'L3 Senior Technical Leads',
      desc: 'Senior ABAP and BTP developers perform line-by-line runtime debugging, interface queue reprocessing, SQL statement trace analysis, and permanent software bug fixes.',
      deliverable: 'Tested transport request packaged for release.'
    },
    {
      step: 'Step 5',
      title: 'CAB Approval & Production Cutover',
      sla: 'Zero Downtime',
      role: 'Change Advisory Board (CAB)',
      desc: 'Change review board verifies regression test results, downdate protection, and signs off on transport import during governed release window.',
      deliverable: 'Production deployment verified with post-import health audit.'
    }
  ];

  // Section 2: Proactive Telemetry Stream State
  const [activeTelemetryStream, setActiveTelemetryStream] = useState<'dialog' | 'queues' | 'jobs' | 'db'>('dialog');
  const telemetryFeeds = {
    dialog: {
      name: 'End-User Transaction Latency',
      status: 'Optimal (Green)',
      currentVal: '640 ms',
      targetVal: '< 800 ms',
      detail: 'Synthetic monitoring across global branch networks tracking Fiori launchpad and transactional response times (Sales Orders, Requisitions, Financial Postings).',
      frequency: 'Continuous 15-second synthetic polling',
      impact: 'Eliminates UI freeze incidents and maintains high workforce productivity across regional offices.'
    },
    queues: {
      name: 'Interface & Integration Queues',
      status: 'Zero Blocked Queues',
      currentVal: '0 Blocked',
      targetVal: 'Zero Over 10m',
      detail: 'Continuous health verification of RFC, IDoc, OData, and Event Mesh pipelines connecting external trading partners and enterprise microservices.',
      frequency: 'Real-time event queue listener',
      impact: 'Prevents data drift and transactional synchronization delays between SAP ERP and peripheral platforms.'
    },
    jobs: {
      name: 'Critical Batch Job Orchestration',
      status: '100% On-Schedule',
      currentVal: '342 Executed',
      targetVal: 'Zero Cancelled',
      detail: 'Proactive oversight of critical nightly background workloads including MRP runs, billing runs, and period-end financial consolidation schedules.',
      frequency: 'Automated 1-minute job status monitor',
      impact: 'Guarantees order-to-cash billing cycles complete cleanly within overnight batch processing windows.'
    },
    db: {
      name: 'HANA In-Memory Engine Utilization',
      status: 'Healthy (Green)',
      currentVal: '62% Capacity',
      targetVal: '< 75% Peak',
      detail: 'Proactive monitoring of column store allocations, row store fragmentation, delta merge cycles, and persistent savepoint write latency.',
      frequency: 'Continuous 30-second telemetry polling',
      impact: 'Prevents out-of-memory errors and maintains sub-second analytical query performance.'
    }
  };

  // Section 3: SLA Performance Commitments
  const slaTiers = [
    {
      tier: 'P1',
      priority: 'Critical / Production Blocker',
      response: '15 Minutes',
      resolution: '4 Hours',
      coverage: '24/7/365 Dedicated',
      escalation: 'Immediate bridge launch; Senior Functional & Basis Principals mobilized; executive hourly updates.',
      criteria: 'Production instance offline, core business processes halted (order entry, billing, shipping), no workaround.'
    },
    {
      tier: 'P2',
      priority: 'High / Major Impairment',
      response: '30 Minutes',
      resolution: '8 Hours',
      coverage: '24/7/365 Dedicated',
      escalation: 'Lead Functional Consultant assigned immediately; hourly executive status bulletins dispatched.',
      criteria: 'Key business process severely impaired, viable workaround absent, widespread user impact.'
    },
    {
      tier: 'P3',
      priority: 'Medium / Partial',
      response: '2 Hours',
      resolution: '24 Hours',
      coverage: 'Extended Business Hours',
      escalation: 'Assigned to dedicated functional pod with daily progress tracking and status checkpoint.',
      criteria: 'Non-critical feature failing, operational workaround available, localized user impact.'
    },
    {
      tier: 'P4',
      priority: 'Service Request',
      response: '4 Hours',
      resolution: '48 – 72 Hours',
      coverage: 'Standard Business Hours',
      escalation: 'Prioritized into standard bi-weekly sprint delivery backlog with transparent ticket tracking.',
      criteria: 'Routine inquiry, minor report enhancement, role permission update, cosmetic UI adjustment.'
    }
  ];

  // Section 4: 5-Whys Problem Management RCA Case Study
  const rcaSteps = [
    { why: 'Initial Incident', finding: 'Automated invoicing batch job timed out during Friday month-end closing, stalling commercial billing.' },
    { why: 'Diagnostic Finding', finding: 'Database lock contention on billing document flow tables caused thread starvation across background work processes.' },
    { why: 'Technical Root Cause', finding: 'A legacy custom report was initiating an un-indexed full-table scan simultaneously with the production batch run.' },
    { why: 'Process Root Cause', finding: 'The custom report was migrated during an earlier system conversion without establishing secondary indexes.' },
    { why: 'Permanent Architectural Remediation', finding: 'Replaced full-table scan with an optimized Core Data Services (CDS) view; runtime permanently reduced from 4 hours to 8 minutes with zero locks.' }
  ];

  // Section 5: Multi-Speed Release Tracks State
  const [activeReleaseTrack, setActiveReleaseTrack] = useState<number>(0);
  const releaseTracks = [
    {
      track: 'Emergency Hotfixes',
      cadence: 'Daily / On-Demand',
      leadTime: '< 4 Hours',
      governance: 'Emergency Change Advisory Board (CAB) Approval & Automated Regression Testing',
      scope: 'P1/P2 production defect fixes, critical security vulnerabilities, statutory tax patches.',
      workflow: [
        'Issue Reported & P1 Classified',
        'Direct Fix Applied in Fix-Sandbox',
        'Automated ATC & Regression Check',
        'Emergency CAB Sign-off',
        'Zero-Downtime Live Import'
      ]
    },
    {
      track: 'Maintenance Enhancements',
      cadence: 'Bi-Weekly Sprints',
      leadTime: '10 Business Days',
      governance: 'Standard Change Advisory Board (CAB) Review & Business Process Owner Sign-Off',
      scope: 'Functional modifications, custom report optimizations, user interface Fiori refinements.',
      workflow: [
        'User Story Backlog Grooming',
        'Sprint Development in DEV-100',
        'Integrated Testing in QAS-200',
        'Downdate Protection Verification',
        'Weekend Bundled Cutover'
      ]
    },
    {
      track: 'Major Release Cycles',
      cadence: 'Quarterly Windows',
      leadTime: '6 – 8 Weeks',
      governance: 'Executive Steering Approval, End-to-End User Acceptance Testing (UAT), Cutover Protocol',
      scope: 'SAP Support Package Stacks (SPS), new functional modules, BTP cloud microservice expansions.',
      workflow: [
        'Scope Alignment & Architecture Review',
        'Clean Core Extension Modeling',
        'End-to-End UAT Across All Modules',
        'Cutover Dry Run in Pre-Prod',
        'Multi-Plant Coordinated Go-Live'
      ]
    }
  ];

  // Section 6: Performance Optimization Benchmarks
  const [activeValuePhase, setActiveValuePhase] = useState<number>(0);
  const valuePhases = [
    {
      phase: 'Phase 1',
      title: 'Incident Pattern Recognition',
      desc: 'Machine-learning analytics cluster daily tickets across modules, isolating repeating transactional errors and user stumbling blocks.',
      metric: 'Identifies top 5 root causes generating 60% of tickets'
    },
    {
      phase: 'Phase 2',
      title: 'Root-Cause Defect Elimination',
      desc: 'Dedicated Problem Management consultants refactor fragile ABAP user exits, correct inconsistent master data, and tune slow SQL queries.',
      metric: 'Eliminates repetitive ticket noise permanently'
    },
    {
      phase: 'Phase 3',
      title: 'Runbook Codification & Self-Service',
      desc: 'Every verified resolution is codified into an enterprise knowledge base with interactive step-by-step guidance for business users.',
      metric: 'Enables 30% first-contact self-resolution'
    },
    {
      phase: 'Phase 4',
      title: 'Robotic & API Self-Healing',
      desc: 'Automate repetitive administrative tasks such as IDoc reprocessing, lock release checks, and batch job auto-restarts without human intervention.',
      metric: 'Over 450 automated self-healing events per month'
    },
    {
      phase: 'Phase 5',
      title: 'Verified TCO Reduction',
      desc: 'Shift support capacity from reactive troubleshooting toward high-value business enhancements and new Fiori capability adoption.',
      metric: 'Average 35% reduction in overall support ticket volume'
    }
  ];

  const optimizationBenchmarks = [
    {
      title: 'Global Billing Batch Run',
      module: 'SAP SD / Billing Engine',
      before: '4.8 Hours (Critical window overflow)',
      after: '1.1 Hours (-77% runtime)',
      solution: 'Parallelized job scheduling across application servers and partitioned index scans on core billing tables.',
      impact: 'Eliminated morning billing delays for Asia-Pacific business operations permanently.'
    },
    {
      title: 'Financial Statement Query Latency',
      module: 'SAP FI/CO General Ledger',
      before: '28.4 Seconds (User UI freeze)',
      after: '0.4 Seconds (-98% latency)',
      solution: 'Replaced multi-level ABAP loops with push-down calculation views executing directly in the in-memory engine.',
      impact: 'Delivered immediate interactive financial statement generation for executive leadership.'
    },
    {
      title: 'Inbound EDI Purchase Order Ingestion',
      module: 'SAP MM / B2B Integration',
      before: '45 Minutes Queue Backlog',
      after: 'Near-Instant (< 4 Seconds)',
      solution: 'Redesigned IDoc processing queues into dedicated parallel RFC channels with automated retry handlers.',
      impact: 'Prevented warehouse receiving holds and supplier delivery verification delays.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-500 selection:text-white">

      {/* =========================================================================
          SECTION 1: HERO — SAP AMS (FULL-BLEED WIDESCREEN HERO)
          ========================================================================= */}
      <section className="relative w-full min-h-[600px] lg:min-h-[660px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 overflow-hidden bg-slate-950 text-white">

        {/* Full-Bleed Background Visual */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/ams/sap-ams-hero.jpg"
            alt="Knooviq 24/7 Global SAP Application Management Operations Command Center"
            className="w-full h-full object-cover object-right lg:object-[82%_center] brightness-105 contrast-105 saturate-[1.05]"
          />
          {/* Dedicated text-readability scrim on left; 100% bright & clear on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/65 via-50% to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 text-xs md:text-sm text-slate-400 font-medium">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li className="text-slate-600">/</li>
              <li><Link to="/advisory-managed-services" className="hover:text-blue-400 transition-colors">Advisory &amp; Managed Services</Link></li>
              <li className="text-slate-600">/</li>
              <li className="text-blue-400 font-semibold" aria-current="page">SAP AMS</li>
            </ol>
          </nav>

          <div className="max-w-3xl space-y-5 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-bold tracking-wider uppercase backdrop-blur-md">
              <Gauge className="w-3.5 h-3.5 text-blue-400" />
              <span>OPERATIONS COMMAND CENTER &bull; 24/7 MANAGED SERVICES</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              SAP <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                AMS
              </span>
            </h1>

            <p className="text-xl sm:text-2xl font-bold text-slate-200 leading-snug">
              Keep Your SAP Environment Stable, Supported, and Continuously Improving
            </p>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              Transform your SAP operations from reactive firefighting into a proactive, high-velocity engine. We provide 24/7 dedicated application management focused on uptime, rigorous SLA guarantees, performance tuning, and continuous value creation.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={() => onOpenContact && onOpenContact('SAP AMS Managed Services')}
                className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>Explore AMS Packages</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#tiered-support-flowchart"
                className="px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-base transition-all flex items-center gap-2 shadow-sm backdrop-blur-sm"
              >
                <span>View Support Architecture</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Sticky Service Navigation */}
      <AdvisoryServiceNav currentServiceId="sap-ams" />

      {/* =========================================================================
          SECTION 1: MULTI-TIER SUPPORT ARCHITECTURE & INTERACTIVE SLA FLOWCHART
          ========================================================================= */}
      <section id="tiered-support-flowchart" className="py-16 sm:py-20 border-b border-slate-200/80 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider block mb-2 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full w-fit">
              Tiered Support Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Structured Multi-Tier Support Model &amp; Dedicated Pod Governance
            </h2>
            <p className="text-slate-600 text-base mt-2 font-sans">
              Our ITIL-aligned support structure organizes specialized consultants across distinct response tiers, ensuring everyday service requests receive prompt attention while critical incidents mobilize senior functional and technical architects.
            </p>
          </div>

          {/* INTERACTIVE FLOWCHART & COMPACT VISUAL SHOWCASE */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-stretch">

            {/* Left 8 Cols: Interactive Multi-Step Escalation Flowchart */}
            <div className="lg:col-span-8 p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                  <div className="flex items-center gap-2">
                    <Workflow className="w-4 h-4 text-blue-600" />
                    <span className="text-xs font-mono font-bold text-blue-700 uppercase">
                      ITIL Incident Triage &amp; Escalation Flowchart
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">Click steps to inspect workflow</span>
                </div>

                {/* Flowchart Node Pipeline */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 relative">
                  {escalationSteps.map((st, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveEscalationStep(idx)}
                      className={`p-3 rounded-2xl text-left border transition-all cursor-pointer relative ${activeEscalationStep === idx
                          ? 'bg-blue-50 border-blue-500 shadow-sm ring-2 ring-blue-500/20'
                          : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                        }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className={`text-[10px] font-mono font-bold uppercase ${activeEscalationStep === idx ? 'text-blue-700' : 'text-slate-400'
                          }`}>
                          {st.step}
                        </span>
                        {activeEscalationStep === idx && (
                          <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
                        )}
                      </div>
                      <h4 className="text-xs font-bold text-slate-900 line-clamp-2 leading-tight">
                        {st.title.split(' ')[0]} {st.title.split(' ')[1]}
                      </h4>
                      <span className="text-[10px] font-mono text-emerald-700 font-bold block mt-1">
                        {st.sla}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Flowchart Step Detail Box with Animation */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeEscalationStep}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200/80 space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-blue-200/60">
                    <div>
                      <span className="text-[11px] font-mono font-bold text-blue-700 uppercase">
                        {escalationSteps[activeEscalationStep].role}
                      </span>
                      <h3 className="text-base font-bold text-slate-900">
                        {escalationSteps[activeEscalationStep].title}
                      </h3>
                    </div>
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 self-start sm:self-center">
                      Target SLA: {escalationSteps[activeEscalationStep].sla}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                    {escalationSteps[activeEscalationStep].desc}
                  </p>

                  <div className="pt-2 text-xs font-mono flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Stage Output:</strong> {escalationSteps[activeEscalationStep].deliverable}</span>
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>

            {/* Right 4 Cols: Compact Image Card (Fixed size, not full-width giant banner) */}
            <div className="lg:col-span-4 rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-white flex flex-col justify-between">
              <div className="relative h-56 sm:h-64 overflow-hidden group">
                <img
                  src="/images/ams/sap-ams-tier-model.jpg"
                  alt="Multi-Tier Support Model Governance & Dedicated Consultant Alignment"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-300 block">
                    GOVERNANCE POD
                  </span>
                  <span className="text-sm font-bold block">ITIL Aligned Incident Routing</span>
                </div>
              </div>
              <div className="p-4 bg-white text-xs text-slate-600 space-y-1">
                <div className="flex items-center justify-between text-slate-900 font-semibold">
                  <span>First-Contact Triage Rate</span>
                  <span className="text-blue-700 font-mono font-bold">&gt; 92%</span>
                </div>
                <p className="text-[11px] text-slate-500">Dedicated functional pod mapping for FI, SD, MM, PP &amp; Basis.</p>
              </div>
            </div>

          </div>

          {/* 4 Support Tier Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Headphones,
                tier: 'Level 1 Help Desk',
                focus: '24/7 Incident Triage & First-Call Resolution',
                desc: 'Round-the-clock user ticket logging, password resets, authorization verification, basic navigation assistance, and rapid incident routing.',
                sla: '15-Minute Triage Guarantee'
              },
              {
                icon: Workflow,
                tier: 'Level 2 Functional Support',
                focus: 'Business Process & Module Problem Solving',
                desc: 'Dedicated functional experts across FI/CO, SD, MM, EWM, and PP handling transaction errors, posting rejections, and configuration fixes.',
                sla: 'Targeted Same-Day Resolution'
              },
              {
                icon: Cpu,
                tier: 'Level 3 Technical & Architecture',
                focus: 'Complex Defects, ABAP Debugging & Core Remediations',
                desc: 'Senior technical leads conducting deep code diagnostics, interface queue re-engineering, database tuning, and permanent bug fixes.',
                sla: 'Architect-Led Investigation'
              },
              {
                icon: ShieldCheck,
                tier: 'Level 4 Vendor Liaison',
                focus: 'SAP Engineering & Hyperscaler Incident Management',
                desc: 'Direct interaction with SAP Product Support for standard software defects, kernel patch escalation, and hyperscaler cloud issues.',
                sla: 'Accelerated SAP Escalation'
              }
            ].map((st, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md hover:border-blue-300 transition-all">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 mb-3">
                    <st.icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-blue-700 uppercase block mb-1">
                    {st.tier}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                    {st.focus}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {st.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-[11px] font-mono text-emerald-700 font-bold">
                  {st.sla}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2: PROACTIVE OCC MONITORING & SYNTHETIC TELEMETRY FLOWCHART
          ========================================================================= */}
      <section id="telemetry-console" className="py-16 sm:py-20 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider block mb-2 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full w-fit">
              Proactive Telemetry &amp; Monitoring
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              24/7 Operations Control Center (OCC) Live Watch
            </h2>
            <p className="text-slate-600 text-base mt-2 font-sans">
              We monitor application health, user transaction responsiveness, interface queues, and background batch jobs continuously to detect and resolve bottlenecks before end-users experience operational friction.
            </p>
          </div>

          {/* TELEMETRY FLOWCHART + COMPACT OCC VISUAL (REPLACES GIANT BANNER) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-center">

            {/* Left 8 Cols: Automated Detection & Self-Healing Flowchart */}
            <div className="lg:col-span-8 p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <span className="text-xs font-mono font-bold text-blue-700 uppercase">
                  Automated Early-Warning &amp; Self-Healing Pipeline
                </span>
                <span className="text-[11px] font-mono text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  Real-Time Active
                </span>
              </div>

              {/* Animated Pipeline Nodes */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 relative">
                {[
                  { title: 'Synthetic Probe', sub: 'Runs mock Fiori orders every 15s', badge: 'Step 1' },
                  { title: 'Telemetry Listener', sub: 'Evaluates queues, jobs, and latency', badge: 'Step 2' },
                  { title: 'Threshold Trigger', sub: 'Flags anomalies before user notices', badge: 'Step 3' },
                  { title: 'Auto Self-Heal', sub: 'Restarts queues or alerts consultant', badge: 'Step 4' }
                ].map((node, i) => (
                  <div key={i} className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs relative">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-mono text-blue-600 font-bold">{node.badge}</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <h4 className="text-xs font-bold text-slate-900 mb-0.5">{node.title}</h4>
                    <p className="text-[11px] text-slate-500 leading-tight">{node.sub}</p>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
                <span>Mean Time To Detect (MTTD): <strong>&lt; 45 Seconds</strong></span>
                <span className="text-blue-700 font-bold font-mono">Over 84% Incidents Resolved Proactively</span>
              </div>
            </div>

            {/* Right 4 Cols: Compact OCC Monitoring Image */}
            <div className="lg:col-span-4 rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-white">
              <div className="h-52 sm:h-56 relative overflow-hidden group">
                <img
                  src="/images/ams/sap-ams-proactive-monitoring.jpg"
                  alt="Live SAP Operations Cockpit with Real-Time Application Telemetry"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase block">
                    TELEMETRY COCKPIT
                  </span>
                  <span className="text-sm font-bold">24/7 Operations Control</span>
                </div>
              </div>
              <div className="p-4 text-xs text-slate-600 flex items-center justify-between">
                <span>Global Synthetic Watch</span>
                <span className="text-emerald-700 font-mono font-bold">99.85% Green</span>
              </div>
            </div>

          </div>

          {/* Interactive Stream Selector & Stream Display */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left Stream Selector */}
            <div className="lg:col-span-5 space-y-3">
              {[
                { id: 'dialog', name: 'User Transaction Latency', sub: 'End-user dialog response time monitoring' },
                { id: 'queues', name: 'Interface Queues & Pipelines', sub: 'Inbound / Outbound RFC, IDoc & Event queues' },
                { id: 'jobs', name: 'Critical Background Batch Jobs', sub: 'Nightly batch scheduling & automated recovery' },
                { id: 'db', name: 'HANA In-Memory Database Health', sub: 'Active memory consumption, delta merge & CPU' }
              ].map(st => (
                <button
                  key={st.id}
                  onClick={() => setActiveTelemetryStream(st.id as any)}
                  className={`w-full p-4 rounded-2xl text-left border transition-all cursor-pointer ${activeTelemetryStream === st.id
                      ? 'bg-blue-50 border-blue-500 shadow-sm ring-1 ring-blue-500/30'
                      : 'bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-700'
                    }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-sm font-bold text-slate-900">{st.name}</h3>
                    <span className="text-[10px] font-mono text-emerald-700 font-bold uppercase bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      ACTIVE
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-sans">{st.sub}</p>
                </button>
              ))}
            </div>

            {/* Right Telemetry Detail Card */}
            <div className="lg:col-span-7 p-7 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 gap-2">
                <div>
                  <span className="text-xs font-mono uppercase text-blue-700 font-bold block mb-1">
                    MONITORED TELEMETRY PARAMETER
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">
                    {telemetryFeeds[activeTelemetryStream].name}
                  </h3>
                </div>
                <div className="sm:text-right">
                  <span className="text-lg font-mono font-bold text-emerald-700 block">
                    {telemetryFeeds[activeTelemetryStream].currentVal}
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    Target: {telemetryFeeds[activeTelemetryStream].targetVal}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                {telemetryFeeds[activeTelemetryStream].detail}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <span className="text-[11px] font-mono text-slate-500 uppercase block mb-1 font-bold">
                    Telemetry Cadence
                  </span>
                  <p className="text-xs text-slate-700 font-sans">
                    {telemetryFeeds[activeTelemetryStream].frequency}
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <span className="text-[11px] font-mono text-slate-500 uppercase block mb-1 font-bold">
                    Operational Business Impact
                  </span>
                  <p className="text-xs text-slate-700 font-sans">
                    {telemetryFeeds[activeTelemetryStream].impact}
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: SLA PERFORMANCE GUARANTEES & RESPONSE MATRIX
          ========================================================================= */}
      <section className="py-16 sm:py-20 border-b border-slate-200/80 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider block mb-2 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full w-fit">
              SLA Commitments
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Rigorous Service Level Agreements (SLA) &amp; Response Times
            </h2>
            <p className="text-slate-600 text-base mt-2 font-sans">
              Contractually guaranteed response and resolution targets tailored to business impact. We measure uptime, response latency, and resolution speed transparently through real-time executive dashboards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {slaTiers.map((tier, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md hover:border-blue-300 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-blue-700 uppercase bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200">
                      {tier.tier} Incident
                    </span>
                    <span className="text-xs font-mono text-emerald-700 font-bold">
                      Resp: {tier.response}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {tier.priority}
                  </h3>
                  <div className="text-xs font-mono text-slate-500 mb-3">
                    Resolve: <strong className="text-slate-900">{tier.resolution}</strong>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans mb-3">
                    {tier.criteria}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-[11px] font-sans text-slate-500">
                  {tier.escalation}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: 5-WHYS ROOT-CAUSE ANALYSIS (RCA) METHODOLOGY
          ========================================================================= */}
      <section className="py-16 sm:py-20 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider block mb-2 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full w-fit">
              Root-Cause Problem Management
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Disciplined 5-Whys Problem Investigation
            </h2>
            <p className="text-slate-600 text-base mt-2 font-sans">
              We do not stop at symptom workarounds. Our Problem Management practitioners drill down into root causes using the proven 5-Whys engineering methodology to eliminate recurring incidents permanently.
            </p>
          </div>

          <div className="p-7 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 gap-2">
              <span className="text-xs font-mono font-bold text-blue-700 uppercase">
                PRODUCTION CASE STUDY // MONTH-END BILLING ENGINE LOCK CONTENTION
              </span>
              <span className="text-xs font-mono text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                100% Permanently Remediated
              </span>
            </div>

            <div className="space-y-3 pt-2">
              {rcaSteps.map((step, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <span className="px-2.5 py-1 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold shrink-0">
                      {step.why}
                    </span>
                    <span className="text-xs sm:text-sm text-slate-700 font-sans mt-0.5">
                      {step.finding}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-emerald-700 font-bold shrink-0 hidden sm:inline-block">
                    Verified
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: MULTI-SPEED RELEASE GOVERNANCE & INTERACTIVE PIPELINE
          ========================================================================= */}
      <section className="py-16 sm:py-20 border-b border-slate-200/80 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider block mb-2 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full w-fit">
              Transport &amp; Release Control
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Multi-Speed Release Management &amp; Transport Governance
            </h2>
            <p className="text-slate-600 text-base mt-2 font-sans">
              Deliver urgent hotfixes rapidly without endangering production stability through multi-track transport release pipelines, automated test validation, and Change Advisory Board (CAB) oversight.
            </p>
          </div>

          {/* INTERACTIVE RELEASE PIPELINE FLOWCHART + COMPACT VISUAL */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-stretch">

            {/* Left 8 Cols: Interactive Release Flowchart */}
            <div className="lg:col-span-8 p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                  <span className="text-xs font-mono font-bold text-blue-700 uppercase">
                    Interactive Transport Release Pathways
                  </span>
                  <div className="flex gap-2">
                    {releaseTracks.map((rel, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveReleaseTrack(i)}
                        className={`px-3 py-1 rounded-xl text-xs font-mono font-bold cursor-pointer transition-all ${activeReleaseTrack === i
                            ? 'bg-blue-600 text-white shadow-xs'
                            : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                          }`}
                      >
                        {rel.track.split(' ')[0]}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-slate-900">
                      {releaseTracks[activeReleaseTrack].track}
                    </h3>
                    <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                      Lead Time: {releaseTracks[activeReleaseTrack].leadTime}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    {releaseTracks[activeReleaseTrack].scope}
                  </p>
                </div>

                {/* Animated Horizontal Flowchart Steps */}
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 relative">
                  {releaseTracks[activeReleaseTrack].workflow.map((st, i) => (
                    <div key={i} className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                      <span className="text-[10px] font-mono text-blue-600 font-bold uppercase mb-1">
                        Gate {i + 1}
                      </span>
                      <p className="text-xs font-semibold text-slate-800 leading-snug">
                        {st}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-200 text-xs text-slate-700 flex items-center justify-between">
                <span><strong>Governance Check:</strong> {releaseTracks[activeReleaseTrack].governance}</span>
                <span className="text-blue-700 font-bold font-mono">Zero Transport Regressions</span>
              </div>
            </div>

            {/* Right 4 Cols: Compact Image Card */}
            <div className="lg:col-span-4 rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-white flex flex-col justify-between">
              <div className="h-52 sm:h-56 relative overflow-hidden group">
                <img
                  src="/images/ams/tms_transport_management_system.png"
                  alt="Multi-Speed Release Management Pathways & Cloud Transport Governance"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] font-mono text-blue-300 font-bold uppercase block">
                    TRANSPORT GOVERNANCE
                  </span>
                  <span className="text-sm font-bold">Multi-Speed Cutover Gate</span>
                </div>
              </div>
              <div className="p-4 text-xs text-slate-600 flex items-center justify-between">
                <span>Change Advisory Board</span>
                <span className="text-emerald-700 font-mono font-bold">Downdate Protected</span>
              </div>
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {releaseTracks.map((rel, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between hover:shadow-md hover:border-blue-300 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-blue-700">{rel.cadence}</span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-700">
                      Lead: {rel.leadTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {rel.track}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans mb-4">
                    {rel.scope}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 font-mono">
                  <span className="text-slate-500 block mb-1 font-bold">GOVERNANCE GATE:</span>
                  <span className="text-slate-800 font-sans">{rel.governance}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: VALUE CREATION & SHIFT-LEFT FLOWCHART
          ========================================================================= */}
      <section className="py-16 sm:py-20 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider block mb-2 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full w-fit">
              Application Performance &amp; Innovation
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Verified Performance Tuning Benchmarks &amp; Value Creation Sprints
            </h2>
            <p className="text-slate-600 text-base mt-2 font-sans">
              AMS at Knooviq goes beyond maintaining the status quo. We continually identify high-overhead transactions, slow SQL queries, and queue bottlenecks to deliver verified throughput gains and automated business value.
            </p>
          </div>

          {/* INTERACTIVE SHIFT-LEFT VALUE FLOWCHART + COMPACT IMAGE */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-stretch">

            {/* Left 8 Cols: Shift-Left Continuous Improvement Cycle */}
            <div className="lg:col-span-8 p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
                  <span className="text-xs font-mono font-bold text-blue-700 uppercase">
                    Continuous Value &amp; Shift-Left Automation Cycle
                  </span>
                  <span className="text-xs font-mono text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    -35% Ticket Volume
                  </span>
                </div>

                {/* 5-Phase Interactive Nodes */}
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
                  {valuePhases.map((vp, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveValuePhase(idx)}
                      className={`p-3 rounded-2xl text-left border transition-all cursor-pointer ${activeValuePhase === idx
                          ? 'bg-blue-50 border-blue-500 shadow-xs ring-1 ring-blue-500/20'
                          : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                    >
                      <span className="text-[10px] font-mono text-blue-700 font-bold block mb-1">
                        {vp.phase}
                      </span>
                      <h4 className="text-xs font-bold text-slate-900 line-clamp-2 leading-tight">
                        {vp.title}
                      </h4>
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Phase Display */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeValuePhase}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-slate-900">
                      {valuePhases[activeValuePhase].title}
                    </h3>
                    <span className="text-[11px] font-mono text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                      {valuePhases[activeValuePhase].metric}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {valuePhases[activeValuePhase].desc}
                  </p>
                </motion.div>
              </AnimatePresence>

            </div>

            {/* Right 4 Cols: Compact Image Showcase */}
            <div className="lg:col-span-4 rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-white flex flex-col justify-between">
              <div className="h-52 sm:h-56 relative overflow-hidden group">
                <img
                  src="/images/ams/sap-ams-value-optimization.jpg"
                  alt="Continuous Business Value Creation and SAP Performance Optimization"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] font-mono text-blue-300 font-bold uppercase block">
                    CONTINUOUS VALUE
                  </span>
                  <span className="text-sm font-bold">SQL &amp; Batch Optimization</span>
                </div>
              </div>
              <div className="p-4 text-xs text-slate-600 flex items-center justify-between">
                <span>Value Sprints</span>
                <span className="text-blue-700 font-mono font-bold">ROI Maximized</span>
              </div>
            </div>

          </div>

          {/* Performance Benchmarks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {optimizationBenchmarks.map((bm, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between hover:shadow-md hover:border-blue-300 transition-all">
                <div>
                  <span className="text-xs font-mono text-blue-700 font-bold block mb-1">
                    {bm.module}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {bm.title}
                  </h3>

                  <div className="space-y-2 font-mono text-xs">
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                      <span className="text-slate-400">BASELINE:</span>
                      <span className="text-slate-700 line-through">{bm.before}</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center justify-between">
                      <span className="text-emerald-700 font-bold">OPTIMIZED:</span>
                      <span className="font-bold">{bm.after}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 text-xs text-slate-600 space-y-1.5 font-sans">
                  <p><strong>Action:</strong> {bm.solution}</p>
                  <p className="text-blue-700 font-medium"><strong>Outcome:</strong> {bm.impact}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Advisory Suite Crosslink Navigation */}
      <AdvisorySuiteFooterCrosslinks activeServiceId="sap-ams" />

      {/* =========================================================================
          FINAL CALL TO ACTION
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-t border-slate-200 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-widest block bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full w-fit mx-auto">
            PROACTIVE UPTIME &bull; 99.85% SLA TARGET &bull; 24/7/365 OPERATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Elevate Your SAP Operations with Dedicated Managed Services
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Speak with an AMS architect today to assess your support requirements, tailor dedicated pod capacity, and transition from reactive troubleshooting to continuous application value.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onOpenContact && onOpenContact('SAP AMS Managed Services')}
              className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base shadow-xl shadow-blue-600/20 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Schedule AMS Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              to="/services/sap-strategy"
              className="px-8 py-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold text-base transition-all shadow-sm"
            >
              Return to SAP Strategy Advisory
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
