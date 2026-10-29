import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ShieldAlert,
  Clock,
  Activity,
  Layers,
  Server,
  Network,
  Users,
  MessageSquare,
  FileText,
  Search,
  Radio,
  Share2,
  Workflow,
  HelpCircle,
  Sparkles,
  RefreshCw,
  GitPullRequest,
  CheckSquare,
  Sliders,
  Eye,
  FileCheck,
  ShieldCheck,
  Flame,
  LifeBuoy,
  Zap,
  RotateCcw,
  BookOpen,
  Database,
  Cpu,
  Boxes,
  Compass,
  FileCode,
  Tag,
  GitBranch,
  FolderGit2,
  Maximize2,
  X
} from 'lucide-react';

interface ChildPageProps {
  onOpenContact?: (topic?: string) => void;
}

export const ProblemManagementPage: React.FC<ChildPageProps> = ({ onOpenContact }) => {
  const [activeApproachStage, setActiveApproachStage] = useState<number>(0);
  const [selectedRecordSection, setSelectedRecordSection] = useState<number>(0);
  const [isFullscreenOpen, setIsFullscreenOpen] = useState<boolean>(false);

  useEffect(() => {
    document.title = 'Problem Management – Root-Cause Analysis & Prevention | KNOOVIQ';
    window.scrollTo({ top: 0, behavior: 'instant' });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsFullscreenOpen(false);
      }
    };
    if (isFullscreenOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreenOpen]);

  const handleOpenContact = (topic?: string) => {
    if (onOpenContact) {
      onOpenContact(topic || 'Problem Management');
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Section 3: Overview Connected Data (Evidence to Validation)
  const overviewFlow = [
    {
      step: '01',
      title: 'Incident Evidence',
      tagline: 'Log exceptions & alerts',
      desc: 'Telemetry, error logs, and tickets collected from across past disruptions.'
    },
    {
      step: '02',
      title: 'Pattern Recognition',
      tagline: 'Clustering symptoms',
      desc: 'Grouping related failures by service component, trigger condition, or time cycle.'
    },
    {
      step: '03',
      title: 'Root-Cause Investigation',
      tagline: 'Empirical analysis',
      desc: 'Testing diagnostic hypotheses to isolate the underlying technical flaw.'
    },
    {
      step: '04',
      title: 'Corrective Action',
      tagline: 'Permanent engineering fix',
      desc: 'Coordinating code modifications, configuration fixes, or architectural updates.'
    },
    {
      step: '05',
      title: 'Validation',
      tagline: 'Prevent recurrence',
      desc: 'Verifying that operational stability holds and documenting learned lessons.'
    }
  ];

  // Section 4: Common Problem Management Challenges Data (5 Challenges)
  const problemChallenges = [
    {
      id: 'repeated-symptoms',
      title: 'Repeated Symptoms',
      tagline: 'Similar incidents occur repeatedly without understanding the underlying cause.',
      description:
        'When teams only focus on surface restarts and quick triage, identical failure patterns recur across subsequent shifts, draining engineering time and degrading user confidence.',
      icon: RotateCcw,
      accent: 'text-amber-500 bg-amber-500/10 border-amber-500/20'
    },
    {
      id: 'fragmented-data',
      title: 'Fragmented Investigation Data',
      tagline: 'Incident records, logs, configuration details, and findings are spread across sources.',
      description:
        'Critical diagnostic evidence remains trapped in disparate APM platforms, server logs, code commits, and chat transcripts, making comprehensive causal correlation difficult.',
      icon: Database,
      accent: 'text-rose-500 bg-rose-500/10 border-rose-500/20'
    },
    {
      id: 'hidden-dependencies',
      title: 'Hidden Dependencies',
      tagline: 'Interactions between applications, APIs, databases, and infrastructure obscure causes.',
      description:
        'Modern distributed architectures contain complex cascading interactions where a database index bottleneck or third-party API timeout manifests in an unrelated downstream service.',
      icon: Network,
      accent: 'text-purple-500 bg-purple-500/10 border-purple-500/20'
    },
    {
      id: 'temporary-fixes',
      title: 'Temporary Fixes Without Follow-Up',
      tagline: 'Workarounds restore service, but the underlying issue remains unresolved.',
      description:
        'Emergency workarounds and manual cache purges allow services to resume quickly, but without disciplined problem management, the latent defect stays unaddressed in production.',
      icon: Clock,
      accent: 'text-blue-500 bg-blue-500/10 border-blue-500/20'
    },
    {
      id: 'incomplete-knowledge',
      title: 'Incomplete Technical Knowledge',
      tagline: 'Investigation findings are not documented to support future diagnosis.',
      description:
        'Valuable diagnostic discoveries often live in the heads of senior engineers rather than in an accessible Known Error Database, forcing subsequent responders to re-investigate known bugs.',
      icon: BookOpen,
      accent: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/20'
    }
  ];

  // Section 5: Core Capabilities Data (5 Distinct Sections with Unique Visuals)
  const capabilities = [
    {
      id: 'trend-analysis',
      badge: 'CAPABILITY A • PATTERN DETECTION & CLUSTERING',
      title: 'Recurring Incident & Trend Analysis',
      tagline: 'Review incident histories, identify repeated symptoms, recognize patterns, and group related incidents.',
      description:
        'Knooviq helps organizations analyze operational incident records across extended time windows. By aggregating error signatures, stack traces, and component tags, our approach identifies recurring failure modes that might otherwise be dismissed as isolated events, grouping them into prioritized problem investigations.',
      image: '/images/cloud/problem_mgmt_trends.png',
      points: [
        'Historical incident telemetry analysis to detect recurring error signatures and intermittent anomalies',
        'Clustering of related disruptions based on shared configuration items, infrastructure hosts, and software versions',
        'Identification of chronic low-severity issues that collectively degrade user productivity and system efficiency',
        'Prioritization of problem records based on recurrence frequency, business service criticality, and operational friction'
      ]
    },
    {
      id: 'root-cause-investigation',
      badge: 'CAPABILITY B • DIAGNOSTIC EVIDENCE & CAUSAL MODELING',
      title: 'Root-Cause Investigation',
      tagline: 'Examine technical evidence, application dependencies, configuration changes, and validate hypotheses.',
      description:
        'Effective problem investigation moves beyond assumption and intuition to follow empirical evidence. We guide teams through structured causal analysis, reviewing deployment diffs, database query executions, system resource saturation, and network latency to formulate and rigorously test hypotheses until the definitive cause is validated.',
      image: '/images/cloud/problem_mgmt_investigation.jpg',
      points: [
        'Detailed timeline correlation matching incident symptoms against recent releases, patches, and configuration updates',
        'Dependency path inspection isolating upstream triggers from downstream cascading effects in distributed services',
        'Formulation of falsifiable diagnostic hypotheses tested through targeted telemetry and reproduction drills',
        'Clear distinction between validated root causes, contributing environmental factors, and unverified theories'
      ]
    },
    {
      id: 'known-error-management',
      badge: 'CAPABILITY C • KEDB & WORKAROUND GUIDANCE',
      title: 'Known Error & Workaround Management',
      tagline: 'Document confirmed findings, known errors, temporary workarounds, and diagnostic guidance.',
      description:
        'When an underlying defect requires an extensive code rewrite or third-party vendor patch, immediate permanent fix may not be possible. We help organizations establish a structured Known Error Database (KEDB) that documents proven workarounds and diagnostic shortcuts, enabling front-line support to resolve future occurrences swiftly.',
      image: '/images/cloud/problem_mgmt_known_errors.jpg',
      points: [
        'Standardized Known Error Database (KEDB) entries linking symptoms, affected services, and verified workarounds',
        'Documented step-by-step relief procedures that first-response teams can execute safely without escalation',
        'Clear applicability criteria defining under what specific conditions a temporary workaround may be utilized',
        'Continuous synchronization between incident handling workflows and active problem investigation records'
      ]
    },
    {
      id: 'corrective-preventive-actions',
      badge: 'CAPABILITY D • ENGINEERING REMEDIATION',
      title: 'Corrective & Preventive Actions',
      tagline: 'Translate findings into configuration updates, code fixes, dependency improvements, and process changes.',
      description:
        'A root-cause finding is only as valuable as the corrective action it inspires. We work alongside development, infrastructure, and change enablement teams to translate problem insights into formal engineering tasks—such as code refactoring, database indexing, infrastructure scaling, or automated health probes.',
      image: '/images/cloud/problem_mgmt_corrective_actions.png',
      points: [
        'Translation of technical root causes into actionable engineering tickets, backlog items, and architectural requests',
        'Coordination with Change Management (CAB) to assess implementation risk and schedule non-disruptive deployments',
        'Validation of corrective fixes in staging environments with automated regression tests before production release',
        'Implementation of proactive monitoring thresholds and synthetic checks designed to catch early warning signs'
      ]
    },
    {
      id: 'review-knowledge-improvement',
      badge: 'CAPABILITY E • LESSONS & CONTINUOUS LEARNING',
      title: 'Problem Review & Knowledge Improvement',
      tagline: 'Record outcomes, review action status, validate results, and share lessons to improve future decisions.',
      description:
        'The final phase of problem management ensures that operational lessons are permanently embedded into organizational practices. We facilitate post-resolution reviews, track post-implementation stability, retire outdated temporary workarounds, and update enterprise architecture runbooks to ensure past failures are never repeated.',
      image: '/images/cloud/problem_mgmt_review.jpg',
      points: [
        'Post-resolution monitoring to confirm that recurring incidents have ceased following corrective action deployment',
        'Formal problem closure reviews verifying that all associated incident records, tasks, and documentation are reconciled',
        'Retirement of obsolete workarounds in the KEDB to ensure support personnel use permanent standard procedures',
        'Publication of engineering post-mortems and architectural guidelines to prevent similar design patterns in new services'
      ]
    }
  ];

  // Section 6: Root-Cause Analysis Framework (5 Connected Investigation Stages)
  const analysisFrameworkStages = [
    {
      step: '01',
      title: 'Gather Evidence',
      tagline: 'Telemetry & Context Collection',
      description:
        'Collect relevant incident records, system logs, configuration information, change history, and technical observations.',
      icon: Search,
      deliverables: [
        'Aggregated application traces, error logs, and metrics',
        'Recent change requests and infrastructure modification records',
        'Operational notes and responder transcripts from incident triage'
      ]
    },
    {
      step: '02',
      title: 'Identify Patterns',
      tagline: 'Symptom Comparison & Clustering',
      description:
        'Compare related incidents, examine recurring symptoms, and identify common conditions or dependencies across disruptions.',
      icon: Layers,
      deliverables: [
        'Symptom timeline correlation across multi-tier application components',
        'Identification of common triggers (time of day, batch jobs, traffic peaks)',
        'Mapping of affected services and shared database or network paths'
      ]
    },
    {
      step: '03',
      title: 'Develop & Test Hypotheses',
      tagline: 'Empirical Cause Validation',
      description:
        'Explore possible causes, evaluate supporting evidence, and test hypotheses using targeted diagnostics and sandbox reproduction.',
      icon: Sliders,
      deliverables: [
        'Formulation of falsifiable causal hypotheses',
        'Controlled validation in non-production test environments',
        'Formal separation of confirmed root causes from environmental symptoms'
      ]
    },
    {
      step: '04',
      title: 'Define Corrective Actions',
      tagline: 'Remediation & Workaround Documentation',
      description:
        'Document the validated cause where established, record workarounds when needed, and assign appropriate corrective engineering actions.',
      icon: CheckSquare,
      deliverables: [
        'Submission of formal Requests for Change (RFC) for code or config fixes',
        'Publication of verified workarounds into the Known Error Database (KEDB)',
        'Assignment of engineering ownership and target release milestones'
      ]
    },
    {
      step: '05',
      title: 'Verify & Document',
      tagline: 'Outcome Validation & Institutional Learning',
      description:
        'Validate the outcome of corrective work, record findings and remaining risks, and update relevant technical knowledge bases.',
      icon: RefreshCw,
      deliverables: [
        'Telemetry verification confirming the failure signature has ceased under load',
        'Closure of the problem record with full audit-ready documentation',
        'Updating architectural runbooks and retiring temporary workarounds'
      ]
    }
  ];

  // Section 7: Problem Records, Known Errors & Workarounds Structure
  const problemRecordComponents = [
    {
      title: 'Problem Description & Scope',
      category: 'RECORD METADATA',
      icon: FileText,
      description:
        'Clear statement of the technical problem, affected enterprise applications, business services, and severity categorization.',
      fields: ['Problem Title & Unique ID', 'Impacted Business Services', 'Functional Classification', 'Assigned Problem Manager']
    },
    {
      title: 'Associated Incident History',
      category: 'SYMPTOM LINEAGE',
      icon: Tag,
      description:
        'Direct bidirectional references linking past incident tickets, resolution notes, and recurrence frequency records.',
      fields: ['Linked Incident Ticket IDs', 'Initial Incident Dates & Timestamps', 'Symptom Descriptions', 'Estimated Cumulative Impact']
    },
    {
      title: 'Investigation Notes & Evidence',
      category: 'TECHNICAL EVIDENCE',
      icon: Search,
      description:
        'Chronological log of diagnostic investigations, logs inspected, hypotheses formulated, and results of testing.',
      fields: ['Log Snippets & Stack Traces', 'Hypotheses Formulated & Tested', 'Observed Trigger Conditions', 'Diagnostic Testbed Results']
    },
    {
      title: 'Known Error & Workaround (KEDB)',
      category: 'SUPPORT GUIDANCE',
      icon: BookOpen,
      description:
        'Verified workaround instructions enabling service desk personnel to mitigate future occurrences before the permanent fix.',
      fields: ['Known Error Summary', 'Prerequisite Validation Checks', 'Step-by-Step Workaround Procedures', 'Applicability & Safety Constraints']
    },
    {
      title: 'Corrective Action Plan',
      category: 'ENGINEERING REMEDIATION',
      icon: GitBranch,
      description:
        'Designated engineering modifications, configuration adjustments, linked Change Requests (RFCs), and deployment schedules.',
      fields: ['Linked Change Request (RFC)', 'Responsible Engineering Team', 'Target Release / Sprint', 'Pre-Release Verification Plan']
    },
    {
      title: 'Closure & Verification Notes',
      category: 'LESSONS & GOVERNANCE',
      icon: CheckCircle2,
      description:
        'Confirmation of post-deployment stability, formal sign-off from service owners, and archival of institutional learnings.',
      fields: ['Post-Deployment Stability Period', 'Residual Risk Assessment', 'Knowledge Articles Updated', 'Formal Stakeholder Sign-Off']
    }
  ];

  // Section 8: Collaboration with IT Operations Functions
  const operationalCollaborations = [
    {
      title: 'Incident Management',
      tag: 'INCIDENT DATA → WORKAROUND RETURN',
      icon: ShieldAlert,
      direction: 'Bidirectional Handover',
      description:
        'Incident Management provides problem teams with real-world incident histories, war-room transcripts, and error logs. In return, Problem Management delivers verified workarounds and Known Error Database (KEDB) entries that enable responders to restore service faster during future disruptions.',
      focusPoints: [
        'Escalation of recurring or major P1 incidents for in-depth analysis',
        'Immediate delivery of tested workarounds to front-line support',
        'Joint review of incident closure data to spot emerging failure trends'
      ]
    },
    {
      title: 'Change Management',
      tag: 'RFC CREATION → RISK EVALUATION',
      icon: GitPullRequest,
      direction: 'Governance Alignment',
      description:
        'Problem Management coordinates with Change Management to submit formal Requests for Change (RFC) for permanent defect fixes. The teams collaborate to evaluate deployment risk, schedule maintenance windows, and ensure corrective adjustments do not inadvertently introduce new operational vulnerabilities.',
      focusPoints: [
        'Submission of documented RFCs with verified root-cause justifications',
        'Collaborative risk and impact assessment during Change Advisory Board (CAB) reviews',
        'Validation of post-change telemetry to confirm the underlying defect is eliminated'
      ]
    },
    {
      title: 'Infrastructure Operations',
      tag: 'SYSTEM TELEMETRY → HARDWARE EVIDENCE',
      icon: Server,
      direction: 'Technical Investigation',
      description:
        'Infrastructure administrators contribute server hardware diagnostics, hypervisor telemetry, firmware versions, and storage array logs to problem investigations, helping pinpoint physical resource constraints and network route anomalies.',
      focusPoints: [
        'Inspection of hardware diagnostic logs and controller firmware baselines',
        'Storage, compute, and networking capacity trending during failure windows',
        'Execution of infrastructure configuration adjustments and kernel parameter tuning'
      ]
    },
    {
      title: 'Service Management',
      tag: 'SERVICE IMPACT → CATALOG ALIGNMENT',
      icon: Sliders,
      direction: 'Strategic Governance',
      description:
        'Service Management aligns problem resolutions with broader service definitions, updates CMDB configuration item dependencies, coordinates ownership expectations, and communicates progress to business stakeholders.',
      focusPoints: [
        'CMDB dependency updates reflecting newly discovered component relationships',
        'Service level coordination ensuring critical business processes are prioritized',
        'Alignment of technical fixes with organizational service catalogues and support models'
      ]
    }
  ];

  // Section 9: Practical Operational Outcomes
  const practicalOutcomes = [
    {
      title: 'Better Understanding of Recurring Technical Issues',
      description:
        'Systematic trend analysis eliminates speculation, replacing gut feeling with evidence-backed insights into why specific components fail.',
      icon: Eye
    },
    {
      title: 'More Structured Root-Cause Investigations',
      description:
        'Disciplined hypothesis testing and causal dependency mapping help engineering teams isolate real causes rather than treating superficial symptoms.',
      icon: Sliders
    },
    {
      title: 'Clearer Documentation of Known Errors & Workarounds',
      description:
        'Curated KEDB repositories ensure front-line service desks have instant access to safe, tested workarounds, speeding up future incident relief.',
      icon: BookOpen
    },
    {
      title: 'Better Coordination of Corrective Actions',
      description:
        'Tight alignment with development backlogs and Change Management ensures that permanent code and configuration fixes are safely deployed.',
      icon: GitBranch
    },
    {
      title: 'Improved Reuse of Technical Knowledge',
      description:
        'Centralizing diagnostic evidence and resolution runbooks prevents engineers from having to solve the same complex issue multiple times.',
      icon: FileText
    },
    {
      title: 'More Informed Efforts to Reduce Incident Recurrence',
      description:
        'Targeted architectural enhancements directly eliminate recurring failure modes, progressively hardening the enterprise technology estate.',
      icon: CheckCircle2
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050B17] text-slate-800 dark:text-slate-100 font-sans antialiased selection:bg-[#00A3E0] selection:text-white">

      {/* =========================================================================
          SECTION 1: HERO SECTION (Full-Screen Immersive Canvas with 16:9 Uncropped HD Visual)
          ========================================================================= */}
      <section className="relative w-full min-h-[660px] lg:min-h-[740px] flex flex-col justify-between pt-28 sm:pt-32 lg:pt-36 pb-10 overflow-hidden bg-[#030712] border-b border-white/10">

        {/* FULL-SCREEN HERO BACKGROUND IMAGE (16:9 Widescreen Crystal Clear HD Visual) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden">
          <img
            src="/images/cloud/problem_mgmt_hero_wide.jpg"
            alt="Enterprise Root-Cause Analysis and Problem Management"
            className="w-full h-full object-cover object-right lg:object-center brightness-[1.05] contrast-[1.05]"
          />
          {/* Subtle directional dark gradient on the left ensures pristine text readability without dimming the visual on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/90 via-45% to-transparent w-full lg:w-[65%]" />
          {/* Bottom subtle edge blend */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#030712] to-transparent" />
          {/* Top subtle header blend */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#030712]/70 to-transparent" />
        </div>

        {/* Ambient Subtle Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#00A3E0_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />

        {/* HERO CONTENT OVERLAY (Full-Screen Unified Text Canvas) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
          <div className="max-w-2xl lg:max-w-3xl space-y-6">

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#00A3E0] animate-pulse" />
              <span>IT OPERATIONS &amp; MANAGED OPERATIONS</span>
            </div>

            {/* Main Heading & Subtitle */}
            <div className="space-y-3">
              <span className="block text-sm sm:text-base font-semibold uppercase tracking-wider text-[#00A3E0]">
                Problem Management
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.12]">
                Problem Management
              </h1>
              <p className="text-lg sm:text-xl font-bold text-cyan-300 tracking-tight">
                Find the Cause. Fix the Pattern. Prevent Recurrence.
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
              Knooviq helps organizations investigate recurring IT issues, identify underlying causes, document known errors, and coordinate corrective actions. Our problem management approach focuses on learning from incidents, understanding technical dependencies, and reducing the recurrence of operational disruptions through structured analysis and evidence-based improvement.
            </p>

          </div>
        </div>

        {/* Problem Management Signals Ribbon */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-8">
          <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/10 backdrop-blur-md">
              <span className="font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 text-xs">
                <Search className="w-3.5 h-3.5" />
                <span>Evidence</span>
              </span>
              <div className="text-sm font-bold text-white mt-1">Telemetry &amp; Traces</div>
              <div className="text-xs text-slate-400 mt-0.5">Log Correlation</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/10 backdrop-blur-md">
              <span className="font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 text-xs">
                <Layers className="w-3.5 h-3.5" />
                <span>Patterns</span>
              </span>
              <div className="text-sm font-bold text-white mt-1">Symptom Clustering</div>
              <div className="text-xs text-slate-400 mt-0.5">Trend Analysis</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/10 backdrop-blur-md">
              <span className="font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 text-xs">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Known Errors</span>
              </span>
              <div className="text-sm font-bold text-white mt-1">KEDB Workarounds</div>
              <div className="text-xs text-slate-400 mt-0.5">Published Runbooks</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/10 backdrop-blur-md">
              <span className="font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 text-xs">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Prevention</span>
              </span>
              <div className="text-sm font-bold text-white mt-1">Permanent Fixes</div>
              <div className="text-xs text-slate-400 mt-0.5">Defect Remediation</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: PROBLEM MANAGEMENT OVERVIEW (Evidence to Validation Visual)
          ========================================================================= */}
      <section id="overview" className="py-20 bg-white dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <Search className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>ROOT-CAUSE ANALYSIS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Move Beyond Symptoms to Understand the Cause.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Repeated incidents can point to an underlying issue in application logic, system configuration, infrastructure dependencies, integrations, or operational procedures. Problem management examines these patterns to help teams understand why issues occur and determine appropriate actions to prevent or reduce recurrence.
            </p>
          </div>

          {/* Editorial Visual: Incident Evidence -> Pattern Recognition -> Root Cause -> Corrective Action -> Validation */}
          <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 shadow-sm space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#00A3E0] block">
                  SYSTEMATIC INVESTIGATION PROGRESSION
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  From Disruption Evidence to Long-Term Prevention
                </h3>
              </div>
              <span className="px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-[#00A3E0] text-xs font-bold shrink-0">
                Empirical &bull; Defect Isolation &bull; Permanent Relief
              </span>
            </div>

            {/* 5 Progression Steps */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
              {overviewFlow.map((item, idx) => (
                <div
                  key={item.step}
                  className="p-5 rounded-2xl bg-white dark:bg-[#070E1E] border border-slate-200/80 dark:border-white/5 space-y-3 flex flex-col justify-between shadow-xs hover:border-[#00A3E0]/40 transition-all group"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-400">
                        {item.step}
                      </span>
                      {idx < 4 && (
                        <ArrowRight className="w-3.5 h-3.5 text-[#00A3E0] hidden md:block" />
                      )}
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-[#00A3E0] dark:group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h4>

                    <span className="text-[11px] font-semibold text-[#00A3E0] block">
                      {item.tagline}
                    </span>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 dark:border-white/5 flex items-center gap-1 text-[11px] font-bold text-[#00A3E0]">
                    <span>Phase {idx + 1}</span>
                    <ChevronRight className="w-3 h-3" />
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: COMMON PROBLEM MANAGEMENT CHALLENGES
          ========================================================================= */}
      <section id="challenges" className="py-20 bg-slate-50 dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <AlertTriangle className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>THE CHALLENGE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Recurring Incidents Often Have Deeper Causes.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              When organizations treat every incident in isolation, underlying architectural flaws remain undetected, accumulating technical debt and operational risk.
            </p>
          </div>

          {/* 5 Challenges in Editorial Horizontal Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {problemChallenges.map((challenge) => {
              const Icon = challenge.icon;
              return (
                <div
                  key={challenge.id}
                  className="p-6 rounded-2xl bg-white dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 hover:border-[#00A3E0]/40 transition-all flex flex-col justify-between space-y-4 group shadow-sm"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${challenge.accent}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-slate-400">Challenge Area</span>
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-[#00A3E0] dark:group-hover:text-cyan-300 transition-colors">
                        {challenge.title}
                      </h3>
                      <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 leading-snug">
                        {challenge.tagline}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {challenge.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-white/5 flex items-center gap-1.5 text-xs font-bold text-[#00A3E0]">
                    <span>Investigation Need</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: CORE PROBLEM MANAGEMENT CAPABILITIES (5 Distinct Blocks)
          ========================================================================= */}
      <section id="capabilities" className="py-20 bg-white dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>CORE CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              A Structured Approach to Root-Cause Resolution
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Knooviq helps organizations turn incident history and technical evidence into actionable findings, documented knowledge, and coordinated corrective actions.
            </p>
          </div>

          {/* 5 Distinct Capability Blocks */}
          <div className="space-y-12">

            {/* Capability A: Recurring Incident & Trend Analysis (Image on Right) */}
            <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                
                <div className="lg:col-span-6 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-200/80 dark:bg-white/5 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider">
                    <Layers className="w-3.5 h-3.5 text-[#00A3E0]" />
                    <span>{capabilities[0].badge}</span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      {capabilities[0].title}
                    </h3>
                    <p className="text-sm sm:text-base font-bold text-[#00A3E0] dark:text-cyan-300">
                      {capabilities[0].tagline}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {capabilities[0].description}
                  </p>

                  <div className="space-y-3 pt-2">
                    {capabilities[0].points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium">
                          {pt}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-6 flex flex-col justify-center">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-950 group flex flex-col">
                    <div className="w-full overflow-hidden bg-slate-950">
                      <img
                        src={capabilities[0].image}
                        alt="Technical analysis visual showing recurring incident patterns and log clustering"
                        className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.01]"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3.5 bg-[#070E1E] border-t border-white/10 text-xs text-slate-300">
                      <span className="font-bold text-white block">Recurring Incident &amp; Pattern Analysis</span>
                      <span className="text-slate-400 text-[11px]">Symptom clustering &bull; Timeline correlation &bull; Defect prioritization</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Capability B: Root-Cause Investigation (Image on Left) */}
            <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                
                <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col justify-center">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-950 group flex flex-col">
                    <div className="w-full overflow-hidden bg-slate-950">
                      <img
                        src={capabilities[1].image}
                        alt="Sophisticated diagnostic illustration showing interconnected system components and causal fault path analysis"
                        className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.01]"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3.5 bg-[#070E1E] border-t border-white/10 text-xs text-slate-300">
                      <span className="font-bold text-white block">Deep Root-Cause Investigation &amp; Causal Tracing</span>
                      <span className="text-slate-400 text-[11px]">Empirical hypotheses &bull; Dependency isolation &bull; Verified defect</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-200/80 dark:bg-white/5 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider">
                    <Search className="w-3.5 h-3.5 text-[#00A3E0]" />
                    <span>{capabilities[1].badge}</span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      {capabilities[1].title}
                    </h3>
                    <p className="text-sm sm:text-base font-bold text-[#00A3E0] dark:text-cyan-300">
                      {capabilities[1].tagline}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {capabilities[1].description}
                  </p>

                  <div className="space-y-3 pt-2">
                    {capabilities[1].points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium">
                          {pt}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Capability C: Known Error & Workaround Management (Image on Right) */}
            <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                
                <div className="lg:col-span-6 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-200/80 dark:bg-white/5 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider">
                    <BookOpen className="w-3.5 h-3.5 text-[#00A3E0]" />
                    <span>{capabilities[2].badge}</span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      {capabilities[2].title}
                    </h3>
                    <p className="text-sm sm:text-base font-bold text-[#00A3E0] dark:text-cyan-300">
                      {capabilities[2].tagline}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {capabilities[2].description}
                  </p>

                  <div className="space-y-3 pt-2">
                    {capabilities[2].points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium">
                          {pt}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-6 flex flex-col justify-center">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-950 group flex flex-col">
                    <div className="w-full overflow-hidden bg-slate-950">
                      <img
                        src={capabilities[2].image}
                        alt="Technical knowledge visualization showing documented known errors and support workarounds"
                        className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.01]"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3.5 bg-[#070E1E] border-t border-white/10 text-xs text-slate-300">
                      <span className="font-bold text-white block">Known Error Database (KEDB) &amp; Workaround Catalog</span>
                      <span className="text-slate-400 text-[11px]">Validated relief runbooks &bull; Fast-path resolution &bull; Diagnostic cues</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Capability D: Corrective & Preventive Actions (Image on Left) */}
            <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                
                <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col justify-center">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-950 group flex flex-col">
                    <div className="w-full overflow-hidden bg-slate-950">
                      <img
                        src={capabilities[3].image}
                        alt="Engineering illustration showing corrective adjustments and component improvements within connected technical systems"
                        className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.01]"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3.5 bg-[#070E1E] border-t border-white/10 text-xs text-slate-300">
                      <span className="font-bold text-white block">Corrective Action Execution &amp; Change Handover</span>
                      <span className="text-slate-400 text-[11px]">Engineering fixes &bull; RFC deployment &bull; Regression hardening</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-200/80 dark:bg-white/5 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider">
                    <GitBranch className="w-3.5 h-3.5 text-[#00A3E0]" />
                    <span>{capabilities[3].badge}</span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      {capabilities[3].title}
                    </h3>
                    <p className="text-sm sm:text-base font-bold text-[#00A3E0] dark:text-cyan-300">
                      {capabilities[3].tagline}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {capabilities[3].description}
                  </p>

                  <div className="space-y-3 pt-2">
                    {capabilities[3].points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium">
                          {pt}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Capability E: Problem Review & Knowledge Improvement (Image on Right) */}
            <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                
                <div className="lg:col-span-6 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-200/80 dark:bg-white/5 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3E0]" />
                    <span>{capabilities[4].badge}</span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      {capabilities[4].title}
                    </h3>
                    <p className="text-sm sm:text-base font-bold text-[#00A3E0] dark:text-cyan-300">
                      {capabilities[4].tagline}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {capabilities[4].description}
                  </p>

                  <div className="space-y-3 pt-2">
                    {capabilities[4].points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium">
                          {pt}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-6 flex flex-col justify-center">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-950 group flex flex-col">
                    <div className="w-full overflow-hidden bg-slate-950">
                      <img
                        src={capabilities[4].image}
                        alt="Technical review environment focused on engineering findings, documented actions, and operational learning"
                        className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.01]"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3.5 bg-[#070E1E] border-t border-white/10 text-xs text-slate-300">
                      <span className="font-bold text-white block">Post-Resolution Review &amp; Knowledge Playbooks</span>
                      <span className="text-slate-400 text-[11px]">Outcome verification &bull; Workaround retirement &bull; Institutional memory</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: ROOT-CAUSE ANALYSIS FRAMEWORK (5-Stage Analytical Workflow)
          ========================================================================= */}
      <section id="approach" className="py-20 bg-slate-50 dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <Workflow className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>OUR APPROACH</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Follow the Evidence. Validate the Cause.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              A distinctive analytical investigation workflow grounds problem resolution in empirical evidence, distinguishing verified root causes from unproven hypotheses.
            </p>
          </div>

          {/* 5 Connected Stages Process Diagram */}
          <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-white dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 shadow-sm space-y-8">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#00A3E0] block">
                  EVIDENCE-TO-CAUSE PROGRESSION
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Five-Stage Investigation Framework
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-[#00A3E0] text-xs font-bold shrink-0">
                  Hypothesis Testing &bull; Empirical Proof &bull; Auditable
                </span>
              </div>
            </div>

            {/* 5 Stages Grid */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
              {analysisFrameworkStages.map((stage, idx) => {
                const Icon = stage.icon;
                const isSelected = activeApproachStage === idx;
                return (
                  <div
                    key={stage.step}
                    onClick={() => setActiveApproachStage(idx)}
                    className={`p-5 rounded-2xl transition-all cursor-pointer flex flex-col justify-between border ${
                      isSelected
                        ? 'bg-cyan-500/5 dark:bg-[#070E1E] border-[#00A3E0] shadow-md'
                        : 'bg-slate-50 dark:bg-[#070E1E]/60 border-slate-200/80 dark:border-white/5 hover:border-[#00A3E0]/40'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-400/20 text-[#00A3E0] flex items-center justify-center">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold text-slate-400">
                          {stage.step}
                        </span>
                      </div>

                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                          {stage.title}
                        </h4>
                        <span className="text-[11px] font-semibold text-[#00A3E0] block">
                          {stage.tagline}
                        </span>
                      </div>

                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                        {stage.description}
                      </p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-slate-200/60 dark:border-white/5 flex items-center justify-between text-[11px] font-bold text-[#00A3E0]">
                      <span>Stage {stage.step}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Stage Detailed Focus Breakdown */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-[#070E1E] border border-slate-200/80 dark:border-white/10 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-white/10 pb-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#00A3E0]">
                    STAGE {analysisFrameworkStages[activeApproachStage].step} ARTIFACTS &bull; {analysisFrameworkStages[activeApproachStage].tagline}
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    {analysisFrameworkStages[activeApproachStage].title} Deliverables
                  </h4>
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Click any stage above to inspect activities
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {analysisFrameworkStages[activeApproachStage].deliverables.map((deliv, dIdx) => (
                  <div key={dIdx} className="p-4 rounded-xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/5 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#00A3E0]">
                      <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0" />
                      <span>Deliverable 0{dIdx + 1}</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {deliv}
                    </p>
                  </div>
                ))}
              </div>

              {/* Rigor Principle Note */}
              <div className="mt-4 p-4 rounded-xl bg-cyan-500/10 border border-cyan-400/20 text-xs text-slate-700 dark:text-slate-300 flex items-start gap-3">
                <Compass className="w-5 h-5 text-[#00A3E0] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 dark:text-white block mb-0.5">
                    Scientific Investigation Principle: Confirmed Causes vs. Hypotheses
                  </span>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Problem investigations must strictly separate confirmed empirical root causes from working hypotheses. A theory is only promoted to a verified root cause after evidence conclusively accounts for all observed symptoms, and corrective tests confirm that neutralizing the condition eliminates recurrence.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: PROBLEM RECORDS, KNOWN ERRORS & WORKAROUNDS
          ========================================================================= */}
      <section id="records" className="py-20 bg-white dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>KNOWLEDGE REPOSITORY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Preserve Knowledge. Improve Future Diagnosis.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Structured problem records capture comprehensive investigation findings, transforming fleeting operational knowledge into an enduring technical asset.
            </p>
          </div>

          {/* Editorial Diagram & Knowledge Architecture */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left Column: Visual Architecture Illustration */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-900 aspect-[4/3] group">
                <img
                  src="/images/cloud/problem_mgmt_records.png"
                  alt="Connected technical knowledge framework showing relationships between incidents, problem records, known errors, and workarounds"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070E1E] via-[#070E1E]/40 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#070E1E]/90 backdrop-blur-md border border-white/10 text-xs text-slate-300">
                  <span className="font-bold text-white block">Connected Problem Knowledge Lifecycle</span>
                  <span className="text-slate-400 text-[11px]">Incidents &bull; Problem Records &bull; KEDB Workarounds &bull; Change Requests</span>
                </div>
              </div>

              {/* Relationship Flow Card */}
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 space-y-3 shadow-xs">
                <span className="text-xs font-bold uppercase tracking-wider text-[#00A3E0] block">RELATIONSHIP CHAIN</span>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  How Problem Knowledge Connects
                </h4>
                <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-md bg-rose-500/10 text-rose-500 font-bold flex items-center justify-center shrink-0">1</span>
                    <span><strong>Incidents:</strong> Document symptoms &amp; initial surface relief</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-md bg-amber-500/10 text-amber-500 font-bold flex items-center justify-center shrink-0">2</span>
                    <span><strong>Problem Record:</strong> Logs investigative evidence &amp; causal hypotheses</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-md bg-blue-500/10 text-blue-500 font-bold flex items-center justify-center shrink-0">3</span>
                    <span><strong>Known Error (KEDB):</strong> Provides verified workarounds for immediate relief</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-md bg-purple-500/10 text-purple-500 font-bold flex items-center justify-center shrink-0">4</span>
                    <span><strong>Change Request (RFC):</strong> Governs permanent engineering fix deployment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-md bg-emerald-500/10 text-emerald-500 font-bold flex items-center justify-center shrink-0">5</span>
                    <span><strong>Learned Knowledge:</strong> Hardens architecture runbooks against future defect</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: 6 Record Facets */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {problemRecordComponents.map((comp, idx) => {
                const Icon = comp.icon;
                return (
                  <div
                    key={comp.title}
                    onClick={() => setSelectedRecordSection(idx)}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer space-y-3 ${
                      selectedRecordSection === idx
                        ? 'bg-slate-50 dark:bg-[#0B1528] border-[#00A3E0] shadow-sm'
                        : 'bg-white dark:bg-[#070E1E] border-slate-200/80 dark:border-white/5 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-400/20 text-[#00A3E0] flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        {comp.category}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        {comp.title}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                        {comp.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-100 dark:border-white/5 space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#00A3E0] block">Standard Fields</span>
                      <div className="flex flex-wrap gap-1">
                        {comp.fields.map((f, fIdx) => (
                          <span key={fIdx} className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 text-[10px] text-slate-600 dark:text-slate-300">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: COLLABORATION WITH RELATED IT OPERATIONS FUNCTIONS
          ========================================================================= */}
      <section id="collaboration" className="py-20 bg-slate-50 dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <Users className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>OPERATIONAL INTEGRATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Connect Investigation with Operational Action.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Problem Management acts as the analytical bridge, turning incident signals and infrastructure evidence into approved change requests and verified service improvements.
            </p>
          </div>

          {/* 4 Operations Interface Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {operationalCollaborations.map((collab) => {
              const Icon = collab.icon;
              return (
                <div
                  key={collab.title}
                  className="p-7 rounded-2xl bg-white dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 hover:border-[#00A3E0]/40 transition-all shadow-sm space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-white/5 pb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/20 text-[#00A3E0] flex items-center justify-center">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-slate-900 dark:text-white">
                            {collab.title}
                          </h4>
                          <span className="text-[11px] font-semibold text-[#00A3E0]">
                            {collab.direction}
                          </span>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/5 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 shrink-0">
                        {collab.tag}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {collab.description}
                    </p>

                    <div className="space-y-1.5 pt-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#00A3E0] block">Key Collaboration Touchpoints</span>
                      {collab.focusPoints.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3E0] shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-white/5 flex items-center gap-1.5 text-xs font-bold text-[#00A3E0]">
                    <span>Inter-Team Handover Alignment</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 8: PRACTICAL OPERATIONAL OUTCOMES
          ========================================================================= */}
      <section id="outcomes" className="py-20 bg-white dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>OPERATIONAL ADVANTAGE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Less Guesswork. Better Technical Decisions.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Structured problem management delivers tangible operational consistency, helping engineering teams reduce disruption recurrence through empirical investigation and disciplined knowledge sharing.
            </p>
          </div>

          {/* 6 Outcomes in Distinct Editorial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practicalOutcomes.map((outcome) => {
              const Icon = outcome.icon;
              return (
                <div
                  key={outcome.title}
                  className="p-7 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 space-y-4 hover:border-[#00A3E0]/40 transition-all shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/20 text-[#00A3E0] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {outcome.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {outcome.description}
                  </p>

                  <div className="pt-3 border-t border-slate-200 dark:border-white/5 flex items-center gap-2 text-xs font-bold text-[#00A3E0]">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Operational Advantage</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 9: CLOSING CALL TO ACTION BANNER
          ========================================================================= */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-[#070E1E] via-[#050B17] to-slate-950 text-white">
        {/* Subtle background graphic overlay */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <img
            src="/images/cloud/problem_mgmt_closing_banner.jpg"
            alt="Enterprise technical investigation and problem management background visual"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#050B17] via-[#050B17]/90 to-[#050B17]/70 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-8 sm:p-12 lg:p-14 bg-gradient-to-r from-blue-900/30 via-cyan-950/30 to-slate-900/60 border border-cyan-500/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 backdrop-blur-sm">

            <div className="space-y-4 max-w-2xl text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 block">
                IT OPERATIONS &amp; MANAGED OPERATIONS
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
                Turn Repeated Issues into Lasting Improvements.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Build a disciplined approach to root-cause analysis, technical knowledge, and corrective action with Knooviq.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-4 shrink-0 w-full lg:w-auto">
              <button
                type="button"
                onClick={() => handleOpenContact('Talk to Our Experts – Problem Management')}
                className="px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-gradient-to-r from-[#00A3E0] to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-lg shadow-cyan-500/30 flex items-center gap-2.5 group cursor-pointer"
              >
                <span>Talk to Our Cloud Experts</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                to="/cloud-operations/change-management"
                className="px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 hover:text-white border border-white/20 font-bold text-xs sm:text-sm tracking-wide transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>Explore Change Management</span>
                <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Fullscreen HD Lightbox Modal */}
      {isFullscreenOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={() => setIsFullscreenOpen(false)}
        >
          <div
            className="relative max-w-7xl w-full max-h-[95vh] flex flex-col bg-slate-950 rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 bg-slate-900/90 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded bg-cyan-950 border border-cyan-800 text-cyan-400 text-xs font-mono font-bold uppercase">
                  HD Fullscreen
                </span>
                <span className="text-white text-sm font-bold truncate">
                  Problem Management — Root-Cause Isolation &amp; Prevention
                </span>
              </div>
              <button
                onClick={() => setIsFullscreenOpen(false)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
                aria-label="Close fullscreen view"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative flex-1 flex items-center justify-center p-2 sm:p-4 overflow-auto bg-black">
              <img
                src="/images/cloud/problem_mgmt_hero_wide.jpg"
                alt="Problem Management"
                className="max-h-[82vh] w-auto max-w-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default ProblemManagementPage;
