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
  LifeBuoy,
  Zap,
  RotateCcw,
  Maximize2,
  X
} from 'lucide-react';

interface ChildPageProps {
  onOpenContact?: (topic?: string) => void;
}

export const IncidentManagementPage: React.FC<ChildPageProps> = ({ onOpenContact }) => {
  const [activeLifecycleStage, setActiveLifecycleStage] = useState<number>(0);
  const [selectedPriority, setSelectedPriority] = useState<number>(0);
  const [isFullscreenOpen, setIsFullscreenOpen] = useState<boolean>(false);

  useEffect(() => {
    document.title = 'Incident Management – Respond with Clarity, Restore Services | KNOOVIQ';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  useEffect(() => {
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
      onOpenContact(topic || 'Incident Management');
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Section 3: Incident Response Challenges Data (5 Challenges)
  const incidentChallenges = [
    {
      id: 'unclear-impact',
      title: 'Unclear Incident Impact',
      tagline: 'Difficulty determining which services, users, or business processes are affected.',
      description:
        'When service alerts trigger without clear contextual mapping, teams struggle to identify whether an issue affects a single internal utility or a critical customer-facing revenue pathway.',
      icon: Eye,
      accent: 'text-amber-500 bg-amber-500/10 border-amber-500/20'
    },
    {
      id: 'delayed-triage',
      title: 'Delayed Triage',
      tagline: 'Incomplete incident information complicating prioritization and coordination.',
      description:
        'Missing error logs, ambiguous alert thresholds, and fragmented notification feeds delay initial validation, causing high-priority disruptions to sit in general queues without timely response.',
      icon: Clock,
      accent: 'text-rose-500 bg-rose-500/10 border-rose-500/20'
    },
    {
      id: 'fragmented-ownership',
      title: 'Fragmented Ownership',
      tagline: 'Multiple technical teams collaborating without clearly defined responsibilities.',
      description:
        'Without a designated Incident Commander or defined escalation matrix, engineers frequently operate in silos, duplicate troubleshooting efforts, or assume another team is addressing the disruption.',
      icon: Users,
      accent: 'text-purple-500 bg-purple-500/10 border-purple-500/20'
    },
    {
      id: 'communication-gaps',
      title: 'Communication Gaps',
      tagline: 'Inconsistent updates leaving stakeholders uncertain about status and progress.',
      description:
        'During active incidents, irregular or jargon-heavy updates create confusion for executive stakeholders, customer support personnel, and affected end-users who need predictable timelines.',
      icon: MessageSquare,
      accent: 'text-blue-500 bg-blue-500/10 border-blue-500/20'
    },
    {
      id: 'unstructured-recovery',
      title: 'Unstructured Recovery',
      tagline: 'Missing response procedures or incomplete handover complicating service restoration.',
      description:
        'Ad-hoc recovery attempts, unvetted rollbacks, or premature service reopenings without systematic health verification risk secondary failures and extend operational downtime.',
      icon: RotateCcw,
      accent: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/20'
    }
  ];

  // Section 4: Core Incident Management Capabilities Data (5 Sections with unique images)
  const capabilities = [
    {
      id: 'intake-triage',
      badge: 'CAPABILITY A • CAPTURE & VALIDATION',
      title: 'Incident Intake & Triage',
      tagline: 'Systematic report intake, initial validation, categorization, and appropriate routing.',
      description:
        'Knooviq helps organizations establish rapid, dependable intake channels that capture disruption signals from monitoring tools, support tickets, and service desk notifications. We categorize reports according to business urgency and potential operational reach, validating raw signals to filter false alarms and route genuine disruptions directly to qualified responders.',
      image: '/images/cloud/incident_mgmt_triage.png',
      points: [
        'Multi-source ingestion aggregating telemetry alerts, user reports, and system exceptions',
        'Initial signal validation and correlation to prevent alert fatigue and redundant ticket creation',
        'Structured categorization identifying affected technology tiers, geographic regions, and services',
        'Automated dispatch to on-call engineers and response coordinators based on established routing models'
      ]
    },
    {
      id: 'impact-escalation',
      badge: 'CAPABILITY B • BLAST RADIUS & SPECIALISTS',
      title: 'Impact Assessment & Escalation',
      tagline: 'Evaluate service dependencies, estimate blast radius, and escalate to technical specialists.',
      description:
        'Understanding how a localized component disruption affects downstream applications and business operations is critical for proper prioritization. We help teams analyze service dependencies, determine user impact, and execute tiered escalation paths that bring the right domain experts and decision-makers together without organizational friction.',
      image: '/images/cloud/incident_mgmt_impact.png',
      points: [
        'Interdependent service mapping to evaluate whether core business transactions are compromised',
        'Impact estimation assessing affected user populations, transactional throughput, and regulatory exposure',
        'Tiered escalation triggers notifying subject-matter specialists across database, network, and cloud tiers',
        'Leadership notification protocols ensuring operational management remains informed of high-severity disruptions'
      ]
    },
    {
      id: 'coordination-communication',
      badge: 'CAPABILITY C • WAR-ROOM & COLLABORATION',
      title: 'Response Coordination & Communication',
      tagline: 'Single-threaded ownership, technical war-room management, and structured stakeholder updates.',
      description:
        'When multiple engineering groups investigate a complex disruption, centralized coordination is essential. We establish a clear incident coordination framework with designated lead ownership, structured investigation war-rooms, immutable timeline logging, and a predictable communications cadence for both technical responders and executive stakeholders.',
      image: '/images/cloud/incident_mgmt_coordination.jpg',
      points: [
        'Incident Coordinator assignment to maintain command structure, assign investigation tracks, and eliminate distractions',
        'Virtual incident war-room management enabling cross-functional engineering teams to collaborate in real time',
        'Structured stakeholder communication delivering clear, concise progress updates on an agreed timetable',
        'Live event logging capturing hypotheses tested, configuration actions applied, and diagnostic outputs'
      ]
    },
    {
      id: 'restoration-validation',
      badge: 'CAPABILITY D • REMEDIATION & VERIFICATION',
      title: 'Service Restoration & Validation',
      tagline: 'Execute approved recovery actions, verify system health, and confirm business function resumption.',
      description:
        'Restoring service stability requires disciplined execution of validated recovery runbooks. Whether rolling back a recent deployment, enabling traffic failover, restarting constrained microservices, or adjusting configurations, we ensure that remediation actions are tracked and validated through end-to-end health checks before services are reopened to users.',
      image: '/images/cloud/incident_mgmt_restoration.jpg',
      points: [
        'Controlled execution of authorized recovery procedures, configuration rollbacks, and failovers',
        'Synthetic transaction testing to verify database connectivity, API response latency, and authentication',
        'End-to-end business transaction validation confirming critical user workflows are fully operable',
        'Post-restoration stabilization monitoring to ensure services remain dependable under normal traffic loads'
      ]
    },
    {
      id: 'closure-review',
      badge: 'CAPABILITY E • RECORD & PROBLEM HANDOFF',
      title: 'Incident Closure & Review',
      tagline: 'Document timelines, summarize resolutions, capture lessons, and hand off to Problem Management.',
      description:
        'An incident is not complete when service is restored. We help teams finalize incident records, publish objective resolution summaries, gather operational feedback, and conduct blameless post-incident reviews. Issues requiring in-depth root cause investigation or permanent architectural remediation are seamlessly handed over to Problem Management.',
      image: '/images/cloud/incident_mgmt_review.png',
      points: [
        'Comprehensive timeline documentation capturing detection, diagnosis, mitigation, and resolution milestones',
        'Formal resolution summaries published to business service owners and operational leadership',
        'Blameless operational review meetings analyzing response workflows, tooling gaps, and detection efficiency',
        'Structured handoff to Problem Management for in-depth root cause analysis and permanent corrective actions'
      ]
    }
  ];

  // Section 5: Response Lifecycle (6 Connected Stages)
  const lifecycleStages = [
    {
      step: '01',
      title: 'Detect & Report',
      tagline: 'Early Disruption Identification',
      description:
        'Receive incident signals, synthetic alert anomalies, or reports from users, support teams, monitoring tools, or other operational channels.',
      icon: Radio,
      details: [
        'Automated alert thresholds and synthetic monitor alerts',
        'Multi-channel report aggregation from users and service desks',
        'Initial timestamping and triage queue dispatch'
      ]
    },
    {
      step: '02',
      title: 'Record & Classify',
      tagline: 'Documentation & Categorization',
      description:
        'Document available diagnostic information, identify the affected service or infrastructure component, and categorize the incident record.',
      icon: FileCheck,
      details: [
        'Capture diagnostic symptoms, error codes, and server environments',
        'Categorize by functional module, platform layer, and geography',
        'Attach initial telemetry graphs and relevant historical notes'
      ]
    },
    {
      step: '03',
      title: 'Assess & Prioritize',
      tagline: 'Scope & Priority Determination',
      description:
        'Evaluate urgency, business impact, service dependencies, and assign the appropriate response priority based on agreed criteria.',
      icon: Sliders,
      details: [
        'Determine potential operational reach and affected user groups',
        'Assess whether critical workflows or financial transactions are halted',
        'Assign appropriate response priority and escalation tier'
      ]
    },
    {
      step: '04',
      title: 'Assign & Investigate',
      tagline: 'Ownership & Technical War-Room',
      description:
        'Establish single-threaded ownership, mobilize required technical responders, and coordinate systematic diagnostic investigation.',
      icon: Users,
      details: [
        'Appoint an Incident Coordinator to lead the response effort',
        'Open dedicated technical war-room bridge with required specialists',
        'Track parallel investigation streams and log diagnostic findings'
      ]
    },
    {
      step: '05',
      title: 'Restore & Validate',
      tagline: 'Remediation & Health Verification',
      description:
        'Coordinate suitable recovery actions, verify affected services through health checks, and confirm restoration with relevant stakeholders.',
      icon: CheckSquare,
      details: [
        'Execute approved recovery runbooks, traffic failovers, or rollbacks',
        'Verify end-to-end database, API, and transaction processing health',
        'Confirm service stability with application owners before closure'
      ]
    },
    {
      step: '06',
      title: 'Close & Learn',
      tagline: 'Closure & Problem Handoff',
      description:
        'Complete incident records, communicate formal closure, document findings, and transition underlying causes to Problem Management.',
      icon: RefreshCw,
      details: [
        'Finalize incident timeline and record verified resolution steps',
        'Send formal closure notification to all subscribed stakeholders',
        'Hand off complex or recurring defects to Problem Management for RCA'
      ]
    }
  ];

  // Section 6: Prioritization Matrix Conceptual Model
  const prioritizationMatrix = [
    {
      priority: 'Priority 1 (Critical)',
      impact: 'High Impact',
      urgency: 'High Urgency',
      badge: 'IMMEDIATE MOBILIZATION',
      color: 'border-rose-500 bg-rose-500/10 text-rose-400',
      description:
        'Core business service unavailable, major financial or regulatory impact, or severe disruption affecting a large majority of users with no viable workaround.',
      action: 'Instant Incident Coordinator paging, technical war-room mobilization, and executive communications cadence.'
    },
    {
      priority: 'Priority 2 (High)',
      impact: 'High Impact / Medium Urgency (or vice-versa)',
      urgency: 'Elevated Urgency',
      badge: 'EXPEDITED RESPONSE',
      color: 'border-amber-500 bg-amber-500/10 text-amber-400',
      description:
        'Significant degradation of a key service or critical workflow halted for an important user segment, though partial temporary workarounds may exist.',
      action: 'Dedicated specialist lead assigned, prioritized technical triage, and frequent stakeholder status notifications.'
    },
    {
      priority: 'Priority 3 (Moderate)',
      impact: 'Medium Impact',
      urgency: 'Moderate Urgency',
      badge: 'STANDARD RESTORATION',
      color: 'border-blue-500 bg-blue-500/10 text-blue-400',
      description:
        'Non-critical business function impaired, localized user group affected, or system performance degraded while normal primary transactions continue.',
      action: 'Normal resolver queue dispatch, routine investigation during operational hours, and standard progress tracking.'
    },
    {
      priority: 'Priority 4 (Low)',
      impact: 'Low Impact',
      urgency: 'Low Urgency',
      badge: 'SCHEDULED RESOLUTION',
      color: 'border-slate-500 bg-slate-500/10 text-slate-400',
      description:
        'Minor cosmetic anomaly, isolated individual inquiry, or minor inconvenience with straightforward workaround readily available.',
      action: 'Addressed through routine operational maintenance or scheduled support workflows without urgent escalations.'
    }
  ];

  // Section 7: Roles & Responsibilities
  const responseRoles = [
    {
      role: 'Incident Coordinator',
      tag: 'COMMAND & CONTROL',
      description:
        'Maintains response coordination, establishes clear ownership, tracks action items, and oversees status visibility across all teams.',
      activities: [
        'Directs the virtual war-room and manages discussion focus',
        'Ensures single-threaded ownership and prevents duplicated effort',
        'Oversees response timeline documentation and action assignments'
      ]
    },
    {
      role: 'Technical Responders',
      tag: 'INVESTIGATION & RECOVERY',
      description:
        'Investigate the issue, analyze system diagnostics, evaluate recovery options, and implement appropriate corrective or recovery actions.',
      activities: [
        'Review application logs, server telemetry, and database queries',
        'Formulate and test diagnostic hypotheses in orderly succession',
        'Implement authorized restoration procedures and verify stability'
      ]
    },
    {
      role: 'Service Owners',
      tag: 'APPLICATION & BUSINESS CONTEXT',
      description:
        'Assess the effect on affected applications and business services, evaluating functional scope and approving critical remediation paths.',
      activities: [
        'Determine business workflow ramifications and end-user exposure',
        'Authorize significant operational changes, rollbacks, or failovers',
        'Validate that restored functionality meets business requirements'
      ]
    },
    {
      role: 'Stakeholder Communications',
      tag: 'TRANSPARENCY & EXPECTATIONS',
      description:
        'Receive clear, relevant updates about impact, progress, and restoration, translating technical status into business-readable updates.',
      activities: [
        'Maintain a predictable update schedule for executive leaders',
        'Supply customer support teams with accurate user-facing messaging',
        'Deliver timely restoration confirmation upon validated recovery'
      ]
    },
    {
      role: 'Problem Management Team',
      tag: 'ROOT CAUSE & PREVENTION',
      description:
        'Receives incidents requiring deeper investigation into recurring or underlying causes once initial service restoration is completed.',
      activities: [
        'Conduct detailed post-incident root cause investigations (RCA)',
        'Track permanent code modifications, architectural fixes, or patches',
        'Analyze incident frequency trends to prevent recurring outages'
      ]
    }
  ];

  // Section 8: Practical Operational Outcomes
  const practicalOutcomes = [
    {
      title: 'Clearer Incident Ownership & Escalation',
      description:
        'Defined coordination roles and escalation paths eliminate ambiguity during critical disruptions, ensuring qualified specialists are mobilized promptly.',
      icon: Users
    },
    {
      title: 'More Consistent Impact Assessment & Prioritization',
      description:
        'Objective evaluation of business reach and urgency ensures that high-impact disruptions receive immediate attention while minor issues follow orderly workflows.',
      icon: Sliders
    },
    {
      title: 'Better Coordination Between Technical Teams',
      description:
        'Structured virtual war-rooms and collaborative investigation channels reduce friction between infrastructure, cloud, database, and application specialists.',
      icon: Workflow
    },
    {
      title: 'More Structured Service Restoration & Validation',
      description:
        'Executing tested recovery runbooks coupled with disciplined transaction health verification prevents premature closures and secondary service interruptions.',
      icon: CheckSquare
    },
    {
      title: 'Stronger Incident Records & Operational Learning',
      description:
        'Accurate chronological logs and blameless operational retrospectives ensure valuable operational insights feed directly into long-term system resilience.',
      icon: FileText
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050B17] text-slate-800 dark:text-slate-100 font-sans antialiased selection:bg-[#00A3E0] selection:text-white">

      {/* =========================================================================
      {/* =========================================================================
          SECTION 1: HERO SECTION (Full-Screen Immersive Canvas with 16:9 Uncropped HD Visual)
          ========================================================================= */}
      <section className="relative w-full min-h-[660px] lg:min-h-[740px] flex flex-col justify-between pt-28 sm:pt-32 lg:pt-36 pb-10 overflow-hidden bg-[#030712] border-b border-white/10">

        {/* FULL-SCREEN HERO BACKGROUND IMAGE (16:9 Widescreen Crystal Clear HD Visual) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden">
          <img
            src="/images/cloud/incident_mgmt_hero_wide.jpg"
            alt="Enterprise Incident Response &amp; Service Restoration"
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
                Incident Management
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.12]">
                Incident Management
              </h1>
              <p className="text-lg sm:text-xl font-bold text-cyan-300 tracking-tight">
                Respond with Clarity. Restore Services with Confidence.
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
              Knooviq helps organizations coordinate incident response through structured triage, impact assessment, clear ownership, technical collaboration, and service restoration procedures. Our approach helps teams understand the scope of disruptions, communicate effectively, coordinate corrective actions, and capture operational lessons to strengthen future response readiness.
            </p>

          </div>
        </div>

        {/* Incident Management Signals Ribbon */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-8">
          <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/10 backdrop-blur-md">
              <span className="font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 text-xs">
                <Radio className="w-3.5 h-3.5" />
                <span>Triage</span>
              </span>
              <div className="text-sm font-bold text-white mt-1">Intake &amp; Validation</div>
              <div className="text-xs text-slate-400 mt-0.5">Rapid Assessment</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/10 backdrop-blur-md">
              <span className="font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 text-xs">
                <Layers className="w-3.5 h-3.5" />
                <span>Impact</span>
              </span>
              <div className="text-sm font-bold text-white mt-1">Scope &amp; Priority</div>
              <div className="text-xs text-slate-400 mt-0.5">Dependency Mapping</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/10 backdrop-blur-md">
              <span className="font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 text-xs">
                <Users className="w-3.5 h-3.5" />
                <span>War-Room</span>
              </span>
              <div className="text-sm font-bold text-white mt-1">Cross-Team Ops</div>
              <div className="text-xs text-slate-400 mt-0.5">Live Coordination</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/10 backdrop-blur-md">
              <span className="font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 text-xs">
                <CheckSquare className="w-3.5 h-3.5" />
                <span>Restoration</span>
              </span>
              <div className="text-sm font-bold text-white mt-1">Verified Recovery</div>
              <div className="text-xs text-slate-400 mt-0.5">Healthy Service Signoff</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: INCIDENT RESPONSE CHALLENGES
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
              When Services Are Disrupted, Every Decision Matters.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Technology incidents can affect applications, infrastructure, integrations, and business workflows. Without clear triage, ownership, and communication, teams may struggle to establish impact, coordinate investigation, and restore normal service.
            </p>
          </div>

          {/* 5 Challenges in Editorial Horizontal Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {incidentChallenges.map((challenge) => {
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
                    <span>Response Focus Area</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: CORE INCIDENT MANAGEMENT CAPABILITIES (5 Distinct Blocks)
          ========================================================================= */}
      <section id="capabilities" className="py-20 bg-white dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>INCIDENT RESPONSE CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Coordinated Response from Detection to Restoration
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Knooviq helps organizations establish a clear incident-handling process that brings together technical investigation, service ownership, stakeholder communication, and restoration activities.
            </p>
          </div>

          {/* 5 Distinct Capability Blocks */}
          <div className="space-y-12">

            {/* Capability A: Incident Intake & Triage (Image on Right) */}
            <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                
                <div className="lg:col-span-6 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-200/80 dark:bg-white/5 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider">
                    <Radio className="w-3.5 h-3.5 text-[#00A3E0]" />
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
                        alt="Enterprise incident coordination workspace focused on incoming incident reports and structured triage"
                        className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.01]"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3.5 bg-[#070E1E] border-t border-white/10 text-xs text-slate-300">
                      <span className="font-bold text-white block">Incident Intake &amp; Structured Triage</span>
                      <span className="text-slate-400 text-[11px]">Multi-source alert aggregation &bull; Rapid validation &bull; Priority tagging</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Capability B: Impact Assessment & Escalation (Image on Left) */}
            <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                
                <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col justify-center">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-950 group flex flex-col">
                    <div className="w-full overflow-hidden bg-slate-950">
                      <img
                        src={capabilities[1].image}
                        alt="Connected service-dependency illustration showing how an incident can affect multiple enterprise services"
                        className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.01]"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3.5 bg-[#070E1E] border-t border-white/10 text-xs text-slate-300">
                      <span className="font-bold text-white block">Service Dependency &amp; Blast Radius Mapping</span>
                      <span className="text-slate-400 text-[11px]">Upstream tracing &bull; Business transaction scope &bull; Clean escalation</span>
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

            {/* Capability C: Response Coordination & Communication (Image on Right) */}
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
                        alt="Cross-functional incident response environment with engineers and service coordinators collaborating"
                        className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.01]"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3.5 bg-[#070E1E] border-t border-white/10 text-xs text-slate-300">
                      <span className="font-bold text-white block">Incident War-Room &amp; Response Coordination</span>
                      <span className="text-slate-400 text-[11px]">Incident Commander ownership &bull; Technical bridges &bull; Regular updates</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Capability D: Service Restoration & Validation (Image on Left) */}
            <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                
                <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col justify-center">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-950 group flex flex-col">
                    <div className="w-full overflow-hidden bg-slate-950">
                      <img
                        src={capabilities[3].image}
                        alt="Enterprise application restoration visual showing connected services returning to a stable operational state"
                        className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.01]"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3.5 bg-[#070E1E] border-t border-white/10 text-xs text-slate-300">
                      <span className="font-bold text-white block">Service Recovery &amp; Health Verification</span>
                      <span className="text-slate-400 text-[11px]">Approved remediation &bull; Synthetic validation &bull; Resilient resumption</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-200/80 dark:bg-white/5 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider">
                    <CheckSquare className="w-3.5 h-3.5 text-[#00A3E0]" />
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

            {/* Capability E: Incident Closure & Review (Image on Right) */}
            <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                
                <div className="lg:col-span-6 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-200/80 dark:bg-white/5 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider">
                    <FileText className="w-3.5 h-3.5 text-[#00A3E0]" />
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
                        alt="Professional technical review environment focused on incident documentation and operational learning"
                        className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.01]"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3.5 bg-[#070E1E] border-t border-white/10 text-xs text-slate-300">
                      <span className="font-bold text-white block">Incident Closure &amp; Problem Management Handoff</span>
                      <span className="text-slate-400 text-[11px]">Timeline completion &bull; Blameless reviews &bull; Root cause handoff</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: INCIDENT RESPONSE LIFECYCLE (6-Stage Connected Flow)
          ========================================================================= */}
      <section id="lifecycle" className="py-20 bg-slate-50 dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <Workflow className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>RESPONSE LIFECYCLE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              A Clear Path from Detection to Recovery
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              A disciplined, connected six-stage workflow guides responders through rapid triage, structured investigation, authorized restoration, and systematic operational learning.
            </p>
          </div>

          {/* 6 Connected Stages Workflow Diagram */}
          <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-white dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 shadow-sm space-y-8">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#00A3E0] block">
                  STRUCTURED INCIDENT RESPONSE TIMELINE
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Connected Response Lifecycle
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-[#00A3E0] text-xs font-bold shrink-0">
                  Restore Service First &bull; Then Transition to Problem RCA
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
                    STAGE {lifecycleStages[activeLifecycleStage].step} FOCUS &bull; {lifecycleStages[activeLifecycleStage].tagline}
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    {lifecycleStages[activeLifecycleStage].title} Operational Activities
                  </h4>
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Click any stage above to inspect procedures
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {lifecycleStages[activeLifecycleStage].details.map((detail, dIdx) => (
                  <div key={dIdx} className="p-4 rounded-xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/5 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#00A3E0]">
                      <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0" />
                      <span>Activity 0{dIdx + 1}</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>

              {/* Crucial Distinguishing Note */}
              <div className="mt-4 p-4 rounded-xl bg-cyan-500/10 border border-cyan-400/20 text-xs text-slate-700 dark:text-slate-300 flex items-start gap-3">
                <LifeBuoy className="w-5 h-5 text-[#00A3E0] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 dark:text-white block mb-0.5">
                    Clear Distinction: Incident Management vs. Problem Management
                  </span>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Incident Management focuses strictly on coordinating the response and restoring service availability as rapidly and safely as possible. Once operations are restored, underlying architectural flaws, recurring bug patterns, and complex technical root causes transition to Problem Management for comprehensive investigation and permanent mitigation.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: INCIDENT PRIORITIZATION & RESPONSE COORDINATION
          ========================================================================= */}
      <section id="prioritization" className="py-20 bg-white dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <Sliders className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>DECISION FRAMEWORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Prioritize by Impact. Coordinate by Responsibility.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Effective incident management requires structured decision-making that evaluates real business consequences rather than reacting solely to subjective urgency.
            </p>
          </div>

          {/* Prioritization Factors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-400/20 text-[#00A3E0] flex items-center justify-center">
                <Server className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Business Service Impact</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Evaluating whether core revenue-generating systems, external customer workflows, or internal productivity tools are impaired.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-400/20 text-[#00A3E0] flex items-center justify-center">
                <Users className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Number &amp; Type of Affected Users</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Distinguishing between enterprise-wide outages affecting thousands of concurrent users and isolated local workstation issues.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-400/20 text-[#00A3E0] flex items-center justify-center">
                <Clock className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Urgency of Disruption</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Assessing time sensitivity—such as time-critical billing cycles, payroll runs, or market open hours—demanding expedited recovery.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-400/20 text-[#00A3E0] flex items-center justify-center">
                <RefreshCw className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Availability of Workarounds</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Determining whether viable secondary procedures, backup routing, or alternative interfaces allow users to proceed safely.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-400/20 text-[#00A3E0] flex items-center justify-center">
                <Network className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Dependencies &amp; Downstream Effects</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Tracing whether a minor database query timeout has the potential to cascade into message queue overflows and application halts.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-400/20 text-[#00A3E0] flex items-center justify-center">
                <ShieldAlert className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Required Technical Escalation</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Identifying the specific domain expertise, infrastructure access privileges, or vendor coordination necessary for remediation.
              </p>
            </div>
          </div>

          {/* Conceptual Prioritization Matrix Model */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#00A3E0] block">
                  CONCEPTUAL IMPACT VS. URGENCY MODEL
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Illustrative Incident Prioritization Framework
                </h3>
              </div>
              <span className="text-xs text-slate-500 dark:text-slate-400 max-w-sm text-left sm:text-right">
                Illustrative model adapted to each organization's operating environment
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {prioritizationMatrix.map((matrixItem, mIdx) => (
                <div
                  key={matrixItem.priority}
                  onClick={() => setSelectedPriority(mIdx)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-4 ${
                    selectedPriority === mIdx
                      ? 'bg-white dark:bg-[#070E1E] border-[#00A3E0] shadow-md'
                      : 'bg-white/60 dark:bg-[#070E1E]/50 border-slate-200/80 dark:border-white/5 hover:border-slate-300'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border ${matrixItem.color}`}>
                        {matrixItem.badge}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        {matrixItem.priority}
                      </h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        {matrixItem.impact} &bull; {matrixItem.urgency}
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {matrixItem.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-white/5 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#00A3E0] block">Response Posture</span>
                    <p className="text-[11px] text-slate-700 dark:text-slate-300 leading-snug">
                      {matrixItem.action}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed italic border-t border-slate-200 dark:border-white/5 pt-4">
              Note: This impact-versus-urgency framework serves as an illustrative conceptual prioritization structure. Actual priority classifications, escalation criteria, and response workflows are tailored to each organization's operational governance without predefined contractual resolution guarantees.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: ROLES & COMMUNICATION DURING AN INCIDENT
          ========================================================================= */}
      <section id="roles" className="py-20 bg-slate-50 dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <Users className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>ROLES &amp; RESPONSIBILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Keep the Right People Connected.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Effective incident coordination relies on defined responsibilities that keep responders aligned, eliminate confusion, and ensure stakeholders receive accurate updates throughout the disruption.
            </p>
          </div>

          {/* Editorial Roles Composition with Visual */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left Column: Visual & Overview */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-900 aspect-[4/3] group">
                <img
                  src="/images/cloud/incident_mgmt_roles.png"
                  alt="Connected incident response roles and collaborative cross-functional team communication"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070E1E] via-[#070E1E]/40 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#070E1E]/90 backdrop-blur-md border border-white/10 text-xs text-slate-300">
                  <span className="font-bold text-white block">Connected Incident Coordination Matrix</span>
                  <span className="text-slate-400 text-[11px]">Command ownership &bull; Technical responders &bull; Stakeholder updates</span>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 space-y-3 shadow-xs">
                <span className="text-xs font-bold uppercase tracking-wider text-[#00A3E0] block">OPERATING PRINCIPLE</span>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  Adapted to Your Operating Model
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  These roles represent core operational functions that can be adapted to your organization's team size, existing ITSM tooling, and operational structure. In smaller teams, roles may be combined, while in large enterprises they represent dedicated operational personnel.
                </p>
              </div>
            </div>

            {/* Right Column: 5 Key Roles */}
            <div className="lg:col-span-7 space-y-4">
              {responseRoles.map((r, idx) => (
                <div
                  key={r.role}
                  className="p-6 rounded-2xl bg-white dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 hover:border-[#00A3E0]/40 transition-all shadow-xs space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-white/5 pb-3">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-lg bg-cyan-500/10 border border-cyan-400/20 text-[#00A3E0] text-xs font-bold flex items-center justify-center">
                        0{idx + 1}
                      </span>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">
                        {r.role}
                      </h4>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/5 text-[10px] font-bold uppercase tracking-wider text-[#00A3E0] shrink-0">
                      {r.tag}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {r.description}
                  </p>

                  <div className="space-y-1.5 pt-1">
                    {r.activities.map((act, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3E0] shrink-0 mt-0.5" />
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: PRACTICAL OPERATIONAL OUTCOMES
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
              Better Coordination During Critical Moments.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Structured incident management turns operational pressure into calm, coordinated restoration, supporting dependable business continuity and organizational learning.
            </p>
          </div>

          {/* 5 Outcomes in Distinct Editorial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practicalOutcomes.map((outcome, idx) => {
              const Icon = outcome.icon;
              return (
                <div
                  key={outcome.title}
                  className={`p-7 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 space-y-4 hover:border-[#00A3E0]/40 transition-all shadow-sm ${
                    idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                  }`}
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
          SECTION 8: CLOSING CALL TO ACTION BANNER
          ========================================================================= */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-[#070E1E] via-[#050B17] to-slate-950 text-white">
        {/* Subtle background graphic overlay */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <img
            src="/images/cloud/incident_mgmt_closing_banner.jpg"
            alt="Enterprise incident response and operational readiness background"
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
                Be Ready to Respond When It Matters.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Build a structured incident response approach that clarifies ownership, supports effective communication, and helps teams coordinate service restoration.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-4 shrink-0 w-full lg:w-auto">
              <button
                type="button"
                onClick={() => handleOpenContact('Talk to Our Experts – Incident Management')}
                className="px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-gradient-to-r from-[#00A3E0] to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-lg shadow-cyan-500/30 flex items-center gap-2.5 group cursor-pointer"
              >
                <span>Talk to Our Cloud Experts</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                to="/cloud-operations/problem-management"
                className="px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 hover:text-white border border-white/20 font-bold text-xs sm:text-sm tracking-wide transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>Explore Problem Management</span>
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
                  Incident Management — Incident Response &amp; Service Restoration
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
                src="/images/cloud/incident_mgmt_hero_wide.jpg"
                alt="Incident Management"
                className="max-h-[82vh] w-auto max-w-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default IncidentManagementPage;
