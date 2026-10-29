import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  GitPullRequest,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  ShieldAlert,
  Clock,
  Layers,
  Server,
  Network,
  Users,
  MessageSquare,
  FileText,
  Search,
  Radio,
  Workflow,
  Sparkles,
  RefreshCw,
  CheckSquare,
  Sliders,
  Eye,
  FileCheck,
  Flame,
  LifeBuoy,
  Zap,
  RotateCcw,
  BookOpen,
  Database,
  Calendar,
  AlertTriangle,
  FolderGit2,
  GitBranch,
  Settings,
  HelpCircle,
  FileCode,
  Tag,
  Maximize2,
  X
} from 'lucide-react';

interface ChildPageProps {
  onOpenContact?: (topic?: string) => void;
}

export const ChangeManagementPage: React.FC<ChildPageProps> = ({ onOpenContact }) => {
  const [activeLifecycleStage, setActiveLifecycleStage] = useState<number>(0);
  const [selectedChangeType, setSelectedChangeType] = useState<number>(1); // Default to Normal Change
  const [isFullscreenOpen, setIsFullscreenOpen] = useState<boolean>(false);

  useEffect(() => {
    document.title = 'Change Management – Plan with Clarity, Manage Risk | KNOOVIQ';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleOpenContact = (topic?: string) => {
    if (onOpenContact) {
      onOpenContact(topic || 'Change Management');
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Section 3: Central Change Pathway Visual Steps
  const changePathwaySteps = [
    {
      step: '01',
      title: 'Change Request',
      tagline: 'Formal proposal & scope',
      desc: 'Document the business rationale, technical parameters, and affected systems.',
      icon: FileText
    },
    {
      step: '02',
      title: 'Impact Assessment',
      tagline: 'Risk & dependency analysis',
      desc: 'Evaluate downstream services, transactional blast radius, and recovery needs.',
      icon: Layers
    },
    {
      step: '03',
      title: 'Review & Approval',
      tagline: 'CAB & stakeholder consensus',
      desc: 'Authorizations routed according to policy, technical reviews, and risk profile.',
      icon: Users
    },
    {
      step: '04',
      title: 'Implementation',
      tagline: 'Sequenced execution',
      desc: 'Deploy changes during scheduled maintenance windows with live rollback readiness.',
      icon: GitPullRequest
    },
    {
      step: '05',
      title: 'Validation & Closure',
      tagline: 'Verification & record finalization',
      desc: 'Verify service behavior, reconcile configuration items, and record lessons.',
      icon: CheckSquare
    }
  ];

  // Section 4: Common Change Management Challenges (5 Challenges)
  const changeChallenges = [
    {
      id: 'incomplete-assessment',
      title: 'Incomplete Change Assessment',
      tagline: 'Potential effects on applications and infrastructure are not fully understood.',
      description:
        'Changes implemented without thorough multi-tier dependency mapping often cause unexpected service interruptions in downstream APIs, shared databases, or integrated microservices.',
      icon: Eye,
      accent: 'text-amber-500 bg-amber-500/10 border-amber-500/20'
    },
    {
      id: 'unclear-ownership',
      title: 'Unclear Approval Ownership',
      tagline: 'Changes become difficult to coordinate when responsibilities are ambiguous.',
      description:
        'Without a defined governance authority or explicit decision matrix, change requests can languish in prolonged review cycles or bypass vital peer and security consultations.',
      icon: Users,
      accent: 'text-rose-500 bg-rose-500/10 border-rose-500/20'
    },
    {
      id: 'dependency-conflicts',
      title: 'Dependency Conflicts',
      tagline: 'Related systems, maintenance activities, and team schedules clash.',
      description:
        'Multiple engineering squads rolling out overlapping configuration changes during the same maintenance window introduce conflicting parameters that complicate deployment and triage.',
      icon: Network,
      accent: 'text-purple-500 bg-purple-500/10 border-purple-500/20'
    },
    {
      id: 'insufficient-preparation',
      title: 'Insufficient Implementation Preparation',
      tagline: 'Missing validation steps, communication plans, or rollback procedures.',
      description:
        'Deploying modifications without tested rollback criteria, pre-flight health checks, or stakeholder notice turns minor execution hiccups into prolonged emergency incidents.',
      icon: Clock,
      accent: 'text-blue-500 bg-blue-500/10 border-blue-500/20'
    },
    {
      id: 'limited-traceability',
      title: 'Limited Change Traceability',
      tagline: 'Incomplete records make it harder to understand what changed and who approved it.',
      description:
        'When configuration drifts or code modifications occur without auditable records, troubleshooting subsequent regressions becomes an exercise in guesswork rather than disciplined review.',
      icon: FileCheck,
      accent: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/20'
    }
  ];

  // Section 5: Core Capabilities Data (5 Distinct Sections with Unique Visuals)
  const capabilities = [
    {
      id: 'request-classification',
      badge: 'CAPABILITY A • INTAKE & CATEGORIZATION',
      title: 'Change Request & Classification',
      tagline: 'Document proposed modifications, categorize by risk profile, assign ownership, and establish scope.',
      description:
        'Knooviq helps organizations establish standardized change intake workflows. Every proposal is documented using clear parameters that capture technical intent, business justification, affected configuration items, and target deployment windows. Changes are classified into standard, normal, or emergency tracks to apply the right balance of governance and delivery velocity.',
      image: '/images/cloud/change_mgmt_request.jpg',
      points: [
        'Standardized Request for Change (RFC) templates ensuring consistent baseline information',
        'Categorization into standard, normal, and emergency paths based on risk and repeatability',
        'Identification of primary change owners and secondary technical coordinators',
        'Initial scope validation to verify that prerequisite dependencies are documented'
      ]
    },
    {
      id: 'impact-risk-assessment',
      badge: 'CAPABILITY B • BLAST RADIUS & RISK PROFILING',
      title: 'Impact & Risk Assessment',
      tagline: 'Evaluate potential service disruption, technical dependencies, business consequences, and rollback feasibility.',
      description:
        'Before any change proceeds to review, its potential operational reach must be evaluated. We guide teams through structured dependency mapping, analyzing whether a modification touches mission-critical transactions, external API contracts, or high-availability databases, and determining the feasibility of a clean rollback if unforeseen anomalies occur.',
      image: '/images/cloud/change_mgmt_risk.jpg',
      points: [
        'Multi-tier dependency mapping to identify upstream triggers and downstream blast radius',
        'Risk-scoring matrices evaluating technical complexity, user impact, and regulatory sensitivity',
        'Maintenance schedule conflict checks to prevent overlapping changes across related services',
        'Rollback feasibility evaluation verifying whether state changes can be safely reversed'
      ]
    },
    {
      id: 'review-approval-coordination',
      badge: 'CAPABILITY C • CAB & GOVERNANCE ROUTING',
      title: 'Review & Approval Coordination',
      tagline: 'Multi-tier approval routing, technical consultations, Change Advisory Board (CAB) alignment, and recorded authorizations.',
      description:
        'Governance should provide clarity rather than bureaucracy. We help organizations design pragmatic approval pathways tailored to organizational risk tolerance. Routine low-risk changes follow automated peer reviews, while significant architectural alterations undergo structured cross-functional review with the Change Advisory Board (CAB).',
      image: '/images/cloud/change_mgmt_approval.png',
      points: [
        'Automated routing to designated service owners, security leads, and infrastructure specialists',
        'Facilitated Change Advisory Board (CAB) reviews focused on cross-system dependency alignment',
        'Clear stakeholder consultation protocols ensuring business managers understand maintenance timing',
        'Immutable audit logging capturing every approval, condition, and authorization timestamp'
      ]
    },
    {
      id: 'implementation-rollback-planning',
      badge: 'CAPABILITY D • SEQUENCING & RECOVERY RUNBOOKS',
      title: 'Implementation & Rollback Planning',
      tagline: 'Implementation sequencing, resource readiness, communication plans, verification steps, and documented rollback paths.',
      description:
        'Flawless execution requires disciplined preparation. We help teams develop granular implementation runbooks detailing task sequences, responsible engineers, estimated execution durations, and definitive health-check verification milestones. Crucially, every plan includes predefined rollback trigger thresholds and step-by-step reversal procedures.',
      image: '/images/cloud/change_mgmt_rollback.png',
      points: [
        'Chronological execution runbooks with explicit task assignments and time estimates',
        'Defined rollback criteria specifying exact latency, error-rate, or failure thresholds requiring abort',
        'Pre-change communications notifying affected business units and service desks of scheduled maintenance',
        'Resource locking and access credential verification to prevent last-minute deployment blockers'
      ]
    },
    {
      id: 'post-implementation-review',
      badge: 'CAPABILITY E • VERIFICATION & CLOSURE',
      title: 'Post-Implementation Review',
      tagline: 'Outcome validation, change-record completion, configuration documentation updates, and operational learning.',
      description:
        'A change is not finalized when code deploys; it concludes when operational stability is verified. We facilitate post-implementation reviews to validate that systems perform as intended, reconcile CMDB asset configurations, document any unexpected behaviors encountered during cutover, and refine future change models.',
      image: '/images/cloud/change_mgmt_review.png',
      points: [
        'Synthetic and business-transaction validation confirming expected application performance',
        'CMDB and architecture documentation updates reflecting new configuration baselines',
        'Retrospective reviews examining unexpected anomalies to improve future deployment runbooks',
        'Formal change closure and distribution of completion summaries to all subscribed stakeholders'
      ]
    }
  ];

  // Section 6: Change Lifecycle Stages (6 Connected Stages)
  const lifecycleStages = [
    {
      step: '01',
      title: 'Request & Record',
      phase: 'PLANNING',
      tagline: 'Proposal & Scope Definition',
      description:
        'Document the proposed change, business rationale, scope, affected services, ownership, and supporting technical documentation.',
      icon: FileText,
      activities: [
        'Submit structured Request for Change (RFC) with clear technical details',
        'Identify target systems, configuration items, and code repositories',
        'Assign primary implementation lead and business sponsor'
      ]
    },
    {
      step: '02',
      title: 'Assess Impact & Risk',
      phase: 'ASSESSMENT',
      tagline: 'Blast Radius & Dependency Review',
      description:
        'Review dependencies, potential service disruption, implementation complexity, risk controls, and rollback requirements.',
      icon: Layers,
      activities: [
        'Analyze architecture dependencies and shared database schemas',
        'Calculate risk score based on business criticality and change complexity',
        'Establish rollback feasibility and define required testing criteria'
      ]
    },
    {
      step: '03',
      title: 'Review & Authorize',
      phase: 'AUTHORIZATION',
      tagline: 'Governance & Approval Routing',
      description:
        'Route the change for appropriate technical, service-owner, security, and CAB approvals according to established governance policy.',
      icon: Users,
      activities: [
        'Distribute change dossier to designated service and security reviewers',
        'Conduct Change Advisory Board (CAB) review for major/high-risk initiatives',
        'Record formal electronic authorizations with all attached conditions'
      ]
    },
    {
      step: '04',
      title: 'Schedule & Prepare',
      phase: 'PREPARATION',
      tagline: 'Coordination & Runbook Finalization',
      description:
        'Coordinate timing, maintenance windows, team readiness, stakeholder communication, implementation instructions, and recovery plans.',
      icon: Calendar,
      activities: [
        'Reserve scheduled maintenance window on the enterprise change calendar',
        'Confirm on-call support engineers, DBAs, and network specialists are prepped',
        'Publish advance advisory notifications to internal and external users'
      ]
    },
    {
      step: '05',
      title: 'Implement & Validate',
      phase: 'EXECUTION',
      tagline: 'Controlled Deployment & Verification',
      description:
        'Carry out the authorized change, verify expected behavior, record outcomes, and execute the documented recovery plan if necessary.',
      icon: GitPullRequest,
      activities: [
        'Execute step-by-step deployment runbook following strict timeline checks',
        'Run automated health probes and synthetic business workflow tests',
        'Immediately trigger abort and rollback if critical error thresholds are breached'
      ]
    },
    {
      step: '06',
      title: 'Review & Close',
      phase: 'CLOSURE',
      tagline: 'Reconciliation & Continuous Learning',
      description:
        'Document completion, capture unexpected outcomes, update relevant CMDB records, and identify opportunities to improve future changes.',
      icon: CheckSquare,
      activities: [
        'Update configuration management database (CMDB) with new baseline state',
        'Conduct post-implementation review (PIR) for changes with notable anomalies',
        'Formally close the change record and archive technical audit logs'
      ]
    }
  ];

  // Section 7: Change Types & Risk-Based Handling (3 Categories)
  const changeTypes = [
    {
      type: 'Standard Changes',
      badge: 'LOW RISK • PRE-AUTHORIZED',
      color: 'border-emerald-500 bg-emerald-500/10 text-emerald-400',
      description:
        'Pre-authorized, repeatable, and well-understood changes that follow an established procedure and clear eligibility criteria.',
      examples: [
        'Routine OS patch rollouts to non-critical internal compute clusters',
        'Pre-approved standard firewall rule updates within defined IP ranges',
        'Standard developer environment sandbox provisioning and tearing down',
        'Routine SSL certificate renewals executed through automated pipelines'
      ],
      governance: 'Peer-reviewed and automated execution without requiring weekly CAB sessions.'
    },
    {
      type: 'Normal Changes',
      badge: 'MODERATE TO HIGH RISK • CAB REVIEW',
      color: 'border-blue-500 bg-blue-500/10 text-blue-400',
      description:
        'Changes that require formal assessment, multi-tier review, authorization, and planned implementation based on scope and risk.',
      examples: [
        'Major enterprise application releases and microservice architecture shifts',
        'Production database schema migrations and data model refactoring',
        'Core networking topology adjustments, VPN changes, or cloud peering',
        'ERP software enhancements, batch job scheduling modifications, or integrations'
      ],
      governance: 'Thorough risk assessment, service-owner sign-off, and CAB review and scheduling.'
    },
    {
      type: 'Emergency Changes',
      badge: 'CRITICAL • EXPEDITED APPROVAL',
      color: 'border-rose-500 bg-rose-500/10 text-rose-400',
      description:
        'Urgent changes needed to address a critical active disruption or patch an urgent zero-day security vulnerability.',
      examples: [
        'Urgent hotfixes to restore a severely degraded core customer checkout service',
        'Emergency configuration rollback following an unresolved incident',
        'Critical security patch remediation for an actively exploited vulnerability',
        'Failover routing to a secondary data center during an unrecoverable hardware fault'
      ],
      governance: 'Expedited approval by Emergency CAB (ECAB), followed by mandatory retrospective PIR.'
    }
  ];

  // Section 8: Implementation Readiness & Rollback Planning Pillars
  const readinessPillars = [
    {
      title: 'Implementation Steps & Prerequisites',
      icon: FileCode,
      description: 'Documented sequencing of tasks, pre-flight configuration validations, and environment readiness checks.'
    },
    {
      title: 'Service & Dependency Checks',
      icon: Network,
      description: 'Verification of connected database, API, and message queue dependencies before executing deployment scripts.'
    },
    {
      title: 'Required Approvals & Ownership',
      icon: Users,
      description: 'Confirmed presence of designated lead implementers, rollback coordinators, and verified stakeholder approvals.'
    },
    {
      title: 'Validation & Acceptance Criteria',
      icon: CheckCircle2,
      description: 'Synthetically scripted tests and transactional assertions confirming the service operates within normal bounds.'
    },
    {
      title: 'Communication & Coordination',
      icon: MessageSquare,
      description: 'Timely status broadcasts to user support desks and executives at execution start, verification, and completion.'
    },
    {
      title: 'Rollback & Recovery Procedures',
      icon: RotateCcw,
      description: 'Pre-authorized recovery runbooks with unambiguous trigger conditions and time-boxed reversal execution paths.'
    }
  ];

  // Section 9: Relationship with Other IT Operations Functions
  const operationalLinks = [
    {
      title: 'Infrastructure Operations',
      relationship: 'PREREQUISITES & PLATFORM COORDINATION',
      icon: Server,
      desc: 'Provides infrastructure context, physical and virtual resource headroom, hardware baselines, and implementation coordination during maintenance windows.'
    },
    {
      title: 'Service Management',
      relationship: 'SERVICE CATALOGUE & STAKEHOLDER CONTEXT',
      icon: Sliders,
      desc: 'Aligns service definitions, maintains user-facing communication, coordinates service catalogue updates, and manages expectations with business owners.'
    },
    {
      title: 'Incident Management',
      relationship: 'DISRUPTION RESPONSE & ROLLBACK TRIGGER',
      icon: ShieldAlert,
      desc: 'Stands ready to mobilize response coordinators if a deployment introduces unexpected disruptions, facilitating rapid rollback and service stabilization.'
    },
    {
      title: 'Problem Management',
      relationship: 'ROOT-CAUSE REMEDIATION ORIGINATION',
      icon: RefreshCw,
      desc: 'Generates permanent corrective Requests for Change (RFC) from root-cause investigations, ensuring defect fixes are safely vetted before deployment.'
    }
  ];

  // Section 10: Practical Operational Outcomes
  const practicalOutcomes = [
    {
      title: 'Better Visibility Into Proposed & Approved Changes',
      description:
        'A consolidated enterprise change schedule gives technical teams and business leaders unified foresight into upcoming system transitions.',
      icon: Eye
    },
    {
      title: 'Clearer Responsibilities & Authorization Records',
      description:
        'Explicit approval paths eliminate ambiguity, creating an immutable audit trail of who authorized each modification and on what basis.',
      icon: Users
    },
    {
      title: 'Improved Awareness of Technical Dependencies & Risks',
      description:
        'Cross-system dependency mapping ensures that changes to one application never unexpectedly compromise upstream or downstream workflows.',
      icon: Network
    },
    {
      title: 'More Structured Implementation & Rollback Preparation',
      description:
        'Mandating validated cutover instructions and clear rollback trigger conditions significantly reduces operational risk during deployments.',
      icon: RotateCcw
    },
    {
      title: 'Better Documentation of Change Outcomes',
      description:
        'Post-change verification records and CMDB updates ensure configuration records match live operational realities across environments.',
      icon: FileCheck
    },
    {
      title: 'Stronger Learning from Completed Implementations',
      description:
        'Reviewing deployment variations and refining standard runbooks fosters continuous operational improvement across engineering squads.',
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
            src="/images/cloud/change_mgmt_hero_wide.jpg"
            alt="Enterprise Technology Change Management and Digital Transformation"
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
                Change Management
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.12]">
                Change Management
              </h1>
              <p className="text-lg sm:text-xl font-bold text-cyan-300 tracking-tight">
                Plan with Clarity. Manage Risk. Implement with Confidence.
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
              Knooviq helps organizations manage IT changes through structured assessment, approval coordination, implementation planning, and post-change validation. Our approach helps teams understand potential impacts, coordinate stakeholders, prepare implementation and rollback plans, and maintain clear records throughout the change lifecycle.
            </p>

          </div>
        </div>

        {/* Change Management Signals Ribbon */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-8">
          <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/10 backdrop-blur-md">
              <span className="font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 text-xs">
                <FileText className="w-3.5 h-3.5" />
                <span>Intake</span>
              </span>
              <div className="text-sm font-bold text-white mt-1">RFC Scope</div>
              <div className="text-xs text-slate-400 mt-0.5">Parameters &amp; Owner</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/10 backdrop-blur-md">
              <span className="font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 text-xs">
                <Layers className="w-3.5 h-3.5" />
                <span>Risk Analysis</span>
              </span>
              <div className="text-sm font-bold text-white mt-1">Blast Radius</div>
              <div className="text-xs text-slate-400 mt-0.5">Dependency Mapping</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/10 backdrop-blur-md">
              <span className="font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 text-xs">
                <Users className="w-3.5 h-3.5" />
                <span>Governance</span>
              </span>
              <div className="text-sm font-bold text-white mt-1">CAB Reviews</div>
              <div className="text-xs text-slate-400 mt-0.5">Policy Routing</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/10 backdrop-blur-md">
              <span className="font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 text-xs">
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Rollback</span>
              </span>
              <div className="text-sm font-bold text-white mt-1">Safe Reversal</div>
              <div className="text-xs text-slate-400 mt-0.5">Validated Recovery</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: WHY STRUCTURED CHANGE MANAGEMENT MATTERS (Pathway Visual)
          ========================================================================= */}
      <section id="governance" className="py-20 bg-white dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <GitPullRequest className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>CHANGE GOVERNANCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Every Technology Change Needs a Clear Path.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Changes to applications, infrastructure, integrations, configurations, and business systems can affect dependent services and operational workflows. A structured change management process helps teams assess potential consequences, coordinate approvals, prepare implementation activities, and verify results before closing a change record.
            </p>
          </div>

          {/* Central Change Pathway Visual Progression */}
          <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 shadow-sm space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#00A3E0] block">
                  GOVERNED CHANGE PATHWAY
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Controlled Progression from Intent to Verification
                </h3>
              </div>
              <span className="px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-[#00A3E0] text-xs font-bold shrink-0">
                Auditable &bull; Risk-Aware &bull; Predictable
              </span>
            </div>

            {/* 5 Progression Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
              {changePathwaySteps.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.step}
                    className="p-5 rounded-2xl bg-white dark:bg-[#070E1E] border border-slate-200/80 dark:border-white/5 space-y-3 flex flex-col justify-between shadow-xs hover:border-[#00A3E0]/40 transition-all group"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-400/20 text-[#00A3E0] flex items-center justify-center">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold text-slate-400">
                          {item.step}
                        </span>
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
                      <span>Stage {idx + 1}</span>
                      <ChevronRight className="w-3 h-3" />
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: COMMON CHANGE MANAGEMENT CHALLENGES
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
              Control Change Without Losing Operational Clarity.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Managing technology evolution requires balancing agility with stability. Without clear governance, change activities introduce operational confusion and service risk.
            </p>
          </div>

          {/* 5 Challenges in Editorial Horizontal Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {changeChallenges.map((challenge) => {
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
                      <span className="text-xs font-bold text-slate-400">Risk Area</span>
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
                    <span>Governance Focus</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: CORE CHANGE MANAGEMENT CAPABILITIES (5 Distinct Blocks)
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
              Govern Changes from Request to Completion
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Knooviq helps organizations establish repeatable change processes that support informed decisions, coordinated implementation, and clear operational records.
            </p>
          </div>

          {/* 5 Distinct Capability Blocks */}
          <div className="space-y-12">

            {/* Capability A: Change Request & Classification (Image on Right) */}
            <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                
                <div className="lg:col-span-6 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-200/80 dark:bg-white/5 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider">
                    <FileText className="w-3.5 h-3.5 text-[#00A3E0]" />
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
                        alt="Enterprise change planning scene featuring structured change request documentation and workflow categorization"
                        className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.01]"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3.5 bg-[#070E1E] border-t border-white/10 text-xs text-slate-300">
                      <span className="font-bold text-white block">RFC Intake &amp; Risk Classification</span>
                      <span className="text-slate-400 text-[11px]">Structured templates &bull; Parameter validation &bull; Governance tracks</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Capability B: Impact & Risk Assessment (Image on Left) */}
            <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                
                <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col justify-center">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-950 group flex flex-col">
                    <div className="w-full overflow-hidden bg-slate-950">
                      <img
                        src={capabilities[1].image}
                        alt="Architectural visualization showing relationships between proposed system changes and dependent applications and infrastructure"
                        className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.01]"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3.5 bg-[#070E1E] border-t border-white/10 text-xs text-slate-300">
                      <span className="font-bold text-white block">Dependency Mapping &amp; Risk Profiling</span>
                      <span className="text-slate-400 text-[11px]">Multi-tier blast radius &bull; Risk scoring &bull; Rollback feasibility</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-200/80 dark:bg-white/5 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider">
                    <Layers className="w-3.5 h-3.5 text-[#00A3E0]" />
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

            {/* Capability C: Review & Approval Coordination (Image on Right) */}
            <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                
                <div className="lg:col-span-6 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-200/80 dark:bg-white/5 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider">
                    <Users className="w-3.5 h-3.5 text-[#00A3E0]" />
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
                        alt="Technical review meeting showing collaborative change governance, CAB consultations, and decision recording"
                        className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.01]"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3.5 bg-[#070E1E] border-t border-white/10 text-xs text-slate-300">
                      <span className="font-bold text-white block">CAB Coordination &amp; Multi-Tier Approvals</span>
                      <span className="text-slate-400 text-[11px]">Delegated routing &bull; Stakeholder alignment &bull; Electronic sign-off</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Capability D: Implementation & Rollback Planning (Image on Left) */}
            <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                
                <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col justify-center">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-950 group flex flex-col">
                    <div className="w-full overflow-hidden bg-slate-950">
                      <img
                        src={capabilities[3].image}
                        alt="Controlled technical system transition illustration showing step-by-step implementation and verified rollback path"
                        className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.01]"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3.5 bg-[#070E1E] border-t border-white/10 text-xs text-slate-300">
                      <span className="font-bold text-white block">Sequenced Runbooks &amp; Rollback Assurance</span>
                      <span className="text-slate-400 text-[11px]">Time-boxed steps &bull; Trigger conditions &bull; Recovery runbooks</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-200/80 dark:bg-white/5 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider">
                    <RotateCcw className="w-3.5 h-3.5 text-[#00A3E0]" />
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

            {/* Capability E: Post-Implementation Review (Image on Right) */}
            <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                
                <div className="lg:col-span-6 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-200/80 dark:bg-white/5 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider">
                    <CheckSquare className="w-3.5 h-3.5 text-[#00A3E0]" />
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
                        alt="Technical review environment showing implementation verification, configuration documentation updates, and recorded closure"
                        className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.01]"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3.5 bg-[#070E1E] border-t border-white/10 text-xs text-slate-300">
                      <span className="font-bold text-white block">Post-Implementation Review &amp; Baseline Update</span>
                      <span className="text-slate-400 text-[11px]">Telemetry validation &bull; CMDB reconciliation &bull; Operational learning</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: THE CHANGE LIFECYCLE (6-Stage Connected Governance Flow)
          ========================================================================= */}
      <section id="approach" className="py-20 bg-slate-50 dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <Workflow className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>THE CHANGE LIFECYCLE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              A Controlled Process from Proposal to Validation
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              A disciplined six-stage lifecycle coordinates planning, risk assessment, multi-tier authorization, scheduled execution, and verified closure across enterprise environments.
            </p>
          </div>

          {/* 6 Connected Stages Workflow Diagram */}
          <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-white dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 shadow-sm space-y-8">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#00A3E0] block">
                  GOVERNED CHANGE LIFECYCLE
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Connected Six-Stage Change Process
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-[#00A3E0] text-xs font-bold shrink-0">
                  Planning &bull; Authorization &bull; Execution &bull; Closure
                </span>
              </div>
            </div>

            {/* 6 Connected Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 relative">
              {lifecycleStages.map((stage, idx) => {
                const Icon = stage.icon;
                const isSelected = activeLifecycleStage === idx;
                return (
                  <div
                    key={stage.step}
                    onClick={() => setActiveLifecycleStage(idx)}
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
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                          {stage.phase}
                        </span>
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
                    STAGE {lifecycleStages[activeLifecycleStage].step} ACTIVITIES &bull; {lifecycleStages[activeLifecycleStage].tagline}
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    {lifecycleStages[activeLifecycleStage].title} Execution Details
                  </h4>
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Click any stage above to inspect operational steps
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {lifecycleStages[activeLifecycleStage].activities.map((act, aIdx) => (
                  <div key={aIdx} className="p-4 rounded-xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/5 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#00A3E0]">
                      <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0" />
                      <span>Activity 0{aIdx + 1}</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {act}
                    </p>
                  </div>
                ))}
              </div>

              {/* Governance Boundary Note */}
              <div className="mt-4 p-4 rounded-xl bg-cyan-500/10 border border-cyan-400/20 text-xs text-slate-700 dark:text-slate-300 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#00A3E0] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 dark:text-white block mb-0.5">
                    Clear Distinction: Planned Change vs. Emergency Triage
                  </span>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Change Management governs planned, authorized transitions to preserve production stability. In the event of active disruptions or emergency interventions, coordination operates under expedited Emergency CAB (ECAB) protocols, followed by full retrospective documentation and validation during post-implementation reviews.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: CHANGE TYPES & RISK-BASED HANDLING
          ========================================================================= */}
      <section id="types" className="py-20 bg-white dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <Sliders className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>CLASSIFICATION FRAMEWORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Apply the Right Level of Control to Each Change.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Not all changes present the same risk. Categorizing requests into risk-appropriate governance tracks enables rapid deployment of routine tasks while focusing thorough oversight on complex, mission-critical alterations.
            </p>
          </div>

          {/* 3 Change Types Comparison Panels */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {changeTypes.map((cType, idx) => (
              <div
                key={cType.type}
                onClick={() => setSelectedChangeType(idx)}
                className={`p-7 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between space-y-6 ${
                  selectedChangeType === idx
                    ? 'bg-slate-50 dark:bg-[#0B1528] border-[#00A3E0] shadow-md'
                    : 'bg-white dark:bg-[#070E1E] border-slate-200/80 dark:border-white/10 hover:border-slate-300'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border ${cType.color}`}>
                      {cType.badge}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {cType.type}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {cType.description}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-white/5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#00A3E0] block">
                      Representative Examples
                    </span>
                    {cType.examples.map((ex, eIdx) => (
                      <div key={eIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3E0] shrink-0 mt-0.5" />
                        <span>{ex}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-white/5 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Governance Routing</span>
                  <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                    {cType.governance}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed italic border-t border-slate-200 dark:border-white/5 pt-4">
            Note: These categories serve as an illustrative classification model. Exact criteria, approval thresholds, and delegation rules adapt to each organization's operational governance and compliance standards without rigid predefined mandates.
          </p>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: IMPLEMENTATION READINESS & ROLLBACK PLANNING
          ========================================================================= */}
      <section id="readiness" className="py-20 bg-slate-50 dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <RotateCcw className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>DEPLOYMENT ASSURANCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Prepare for the Change—and for the Unexpected.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              A well-prepared change includes more than an implementation instruction. Teams should understand prerequisites, affected services, validation requirements, communication responsibilities, and the conditions that may require a rollback or recovery action.
            </p>
          </div>

          {/* Editorial Composition with Readiness Visual */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left Column: Visual & Core Principle */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-900 aspect-[4/3] group">
                <img
                  src="/images/cloud/change_mgmt_readiness.png"
                  alt="Implementation readiness planning illustration showing sequenced runbooks, dependency verifications, and rollback preparations"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070E1E] via-[#070E1E]/40 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#070E1E]/90 backdrop-blur-md border border-white/10 text-xs text-slate-300">
                  <span className="font-bold text-white block">Implementation Readiness Framework</span>
                  <span className="text-slate-400 text-[11px]">Prerequisites &bull; Acceptance criteria &bull; Recovery criteria</span>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 space-y-3 shadow-xs">
                <span className="text-xs font-bold uppercase tracking-wider text-[#00A3E0] block">RECOVERY ASSURANCE</span>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  Pre-Authorized Rollback Paths
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  Every change authorization includes predefined criteria for when to abort. If key transaction latencies exceed agreed thresholds or automated post-change synthetic assertions fail, the lead engineer possesses pre-authorized mandate to execute the reversal plan immediately, protecting service continuity without waiting for secondary approvals.
                </p>
              </div>
            </div>

            {/* Right Column: 6 Readiness Pillars */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {readinessPillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="p-5 rounded-2xl bg-white dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 space-y-3 hover:border-[#00A3E0]/40 transition-all shadow-xs"
                  >
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-400/20 text-[#00A3E0] flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {pillar.title}
                    </h4>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {pillar.description}
                    </p>

                    <div className="pt-2 border-t border-slate-100 dark:border-white/5 flex items-center gap-1.5 text-[11px] font-bold text-[#00A3E0]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Readiness Checkpoint</span>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 8: HOW CHANGE MANAGEMENT CONNECTS WITH OTHER IT OPERATIONS
          ========================================================================= */}
      <section id="integration" className="py-20 bg-white dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <Network className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>OPERATIONAL INTEGRATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Keep Changes Connected to Operational Reality.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Change Management operates at the center of enterprise IT operations, connecting infrastructure administrators, service desks, incident responders, and problem managers into a unified operational rhythm.
            </p>
          </div>

          {/* 4 Operations Interface Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {operationalLinks.map((link) => {
              const Icon = link.icon;
              return (
                <div
                  key={link.title}
                  className="p-7 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 hover:border-[#00A3E0]/40 transition-all shadow-sm space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-white/5 pb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/20 text-[#00A3E0] flex items-center justify-center">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-slate-900 dark:text-white">
                            {link.title}
                          </h4>
                          <span className="text-[11px] font-semibold text-[#00A3E0]">
                            {link.relationship}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {link.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200 dark:border-white/5 flex items-center gap-1.5 text-xs font-bold text-[#00A3E0]">
                    <span>Inter-Team Coordination</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 9: PRACTICAL OPERATIONAL OUTCOMES
          ========================================================================= */}
      <section id="outcomes" className="py-20 bg-slate-50 dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>OPERATIONAL ADVANTAGE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              More Controlled Changes. Clearer Decisions.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Disciplined change management eliminates deployment anxiety, providing technical teams with predictable schedules, structured risk governance, and auditable operational records.
            </p>
          </div>

          {/* 6 Outcomes in Distinct Editorial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practicalOutcomes.map((outcome) => {
              const Icon = outcome.icon;
              return (
                <div
                  key={outcome.title}
                  className="p-7 rounded-2xl bg-white dark:bg-[#070E1E] border border-slate-200/80 dark:border-white/10 space-y-4 hover:border-[#00A3E0]/40 transition-all shadow-sm"
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

                  <div className="pt-3 border-t border-slate-100 dark:border-white/5 flex items-center gap-2 text-xs font-bold text-[#00A3E0]">
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
          SECTION 10: CLOSING CALL TO ACTION BANNER
          ========================================================================= */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-[#070E1E] via-[#050B17] to-slate-950 text-white">
        {/* Subtle background graphic overlay */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <img
            src="/images/cloud/change_mgmt_closing_banner.jpg"
            alt="Controlled enterprise technology transition background"
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
                Make Every Change More Deliberate.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Build a structured change management approach that supports risk-aware planning, clear governance, and coordinated implementation across your enterprise technology environment.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-4 shrink-0 w-full lg:w-auto">
              <button
                type="button"
                onClick={() => handleOpenContact('Talk to Our Experts – Change Management')}
                className="px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-gradient-to-r from-[#00A3E0] to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-lg shadow-cyan-500/30 flex items-center gap-2.5 group cursor-pointer"
              >
                <span>Talk to Our Cloud Experts</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                to="/cloud-operations/infrastructure-operations"
                className="px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 hover:text-white border border-white/20 font-bold text-xs sm:text-sm tracking-wide transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>Explore Infrastructure Operations</span>
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
                  Change Management — Governed Transition &amp; Digital Enablement
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
                src="/images/cloud/change_mgmt_hero_wide.jpg"
                alt="Change Management"
                className="max-h-[82vh] w-auto max-w-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default ChangeManagementPage;
