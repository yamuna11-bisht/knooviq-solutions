import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  Server,
  Layers,
  Search,
  Zap,
  Shield,
  Clock,
  Compass,
  AlertTriangle,
  GitBranch,
  Cpu,
  Workflow,
  Sparkles,
  RefreshCw,
  Sliders,
  Database,
  BarChart2,
  HardDrive,
  Eye,
  Maximize2,
  X
} from 'lucide-react';

interface ChildPageProps {
  onOpenContact?: (topic?: string) => void;
}

export const ApplicationOperationsPage: React.FC<ChildPageProps> = ({ onOpenContact }) => {
  const [searchParams] = useSearchParams();
  const [activeWorkflowStage, setActiveWorkflowStage] = useState<number>(0);
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsFullscreenOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    document.title = 'Application Operations – Enterprise Reliability & Observability | KNOOVIQ';
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Handle deep link query parameters
    const tabParam = searchParams.get('tab');
    if (tabParam === 'observability') {
      const el = document.getElementById('monitoring-observability');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (tabParam === 'performance') {
      const el = document.getElementById('performance-management');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (tabParam === 'reliability') {
      const el = document.getElementById('availability-reliability');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [searchParams]);

  const handleOpenContact = (topic?: string) => {
    if (onOpenContact) {
      onOpenContact(topic || 'Application Operations');
    }
  };

  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Operational Challenges Data
  const operationalChallenges = [
    {
      num: '01',
      title: 'Limited Visibility Across Distributed Applications',
      description:
        'Modern enterprise environments span microservices, legacy monoliths, message queues, and external SaaS APIs. Without unified telemetry, transactions disappear into blind spots, making it difficult to trace failures across service boundaries.',
      impact:
        'Teams spend critical hours debating where an issue occurred instead of resolving it, leading to elongated triage cycles and fragmented operational oversight.'
    },
    {
      num: '02',
      title: 'Difficulties Identifying Performance Bottlenecks',
      description:
        'Intermittent response-time degradations are often hidden within database thread locks, unindexed queries, connection pool starvation, or memory garbage collection pauses rather than high-level application code.',
      impact:
        'Slow user experiences and checkout or processing stalls arise unpredictably during peak business cycles without clear early indicators.'
    },
    {
      num: '03',
      title: 'Unexpected Service Interruptions and Recurring Incidents',
      description:
        'When incident response focuses only on quick symptomatic restarts rather than underlying defect analysis, the same root failures recur repeatedly across production clusters.',
      impact:
        'On-call engineers suffer from alert fatigue, and business units face cumulative service disruptions that erode end-user confidence.'
    },
    {
      num: '04',
      title: 'Complex Dependencies Between Applications and Infrastructure',
      description:
        'Applications depend heavily on underlying cloud infrastructure, multi-zone networks, distributed caches, and synchronous partner services. A failure in one auxiliary tier can trigger cascading failures across the estate.',
      impact:
        'Isolating blast radius becomes exceptionally challenging when dependency relationships and network topologies are not continuously mapped.'
    },
    {
      num: '05',
      title: 'Inconsistent Operational Processes and Change Coordination',
      description:
        'Varying deployment practices, undocumented manual configuration changes, and incomplete runbooks across teams create operational variance between environments.',
      impact:
        'Routine deployments introduce preventable operational regressions, leading to post-release firefighting and delayed feature rollouts.'
    }
  ];

  // 4-Stage Operational Approach Data
  const operationalApproachStages = [
    {
      step: '01',
      name: 'Discover',
      tagline: 'Understand application architecture, dependencies, and current operational processes.',
      focus: 'Architectural discovery, dependency mapping, and process review.',
      activities: [
        'Inventory all application components, runtimes, and external dependencies',
        'Map synchronous and asynchronous transaction pathways across tiers',
        'Review current operational runbooks, escalation paths, and alerting configurations',
        'Identify monitoring blind spots, undocumented manual steps, and risk areas'
      ],
      outcome: 'A comprehensive dependency topology and an objective operational baseline.'
    },
    {
      step: '02',
      name: 'Observe',
      tagline: 'Establish visibility into application health, logs, metrics, and service behavior.',
      focus: 'Full-stack telemetry standardization and distributed tracing.',
      activities: [
        'Deploy standardized application telemetry across compute and runtime layers',
        'Implement distributed tracing to track end-to-end transaction latency',
        'Centralize log aggregation with contextual correlation across services',
        'Establish health probes, golden signals, and meaningful alert boundaries'
      ],
      outcome: 'Real-time visibility across application health, transaction flows, and service dependencies.'
    },
    {
      step: '03',
      name: 'Improve',
      tagline: 'Address identified bottlenecks, recurring incidents, and reliability gaps.',
      focus: 'Targeted performance optimization and systematic resilience hardening.',
      activities: [
        'Analyze response-time distributions to isolate slow database queries and runtime locks',
        'Tune compute resource utilization, connection pooling, and memory allocations',
        'Implement fault isolation patterns such as circuit breakers, retries, and timeouts',
        'Refine alerting thresholds to eliminate noise and false-positive notifications'
      ],
      outcome: 'Measurable reductions in latency anomalies, alert fatigue, and recurring incident patterns.'
    },
    {
      step: '04',
      name: 'Sustain',
      tagline: 'Review operational signals, refine procedures, and support continuous improvement.',
      focus: 'Continuous operational governance and evolutionary service stability.',
      activities: [
        'Conduct regular operational health reviews and trend analysis with engineering teams',
        'Continuously update and automate standardized operational runbooks',
        'Validate disaster recovery and failover procedures through structured operational drills',
        'Align capacity planning and resource headroom with upcoming business initiatives'
      ],
      outcome: 'Predictable application performance, consistent operational discipline, and dependable digital operations.'
    }
  ];

  // Environment Landscape Data
  const environmentLandscapes = [
    {
      title: 'Enterprise & Business-Critical Applications',
      tag: 'CORE SYSTEMS & ERP',
      summary:
        'Operations practices engineered for large-scale enterprise suites, transactional ERPs, financial backbones, and mission-critical databases where availability and data consistency are non-negotiable.',
      keyAspects: [
        'Strict change governance aligned with core enterprise financial and operational schedules',
        'End-to-end monitoring of batch processing windows and asynchronous data pipelines',
        'High-consistency database health auditing, lock tracking, and transaction safety checks'
      ]
    },
    {
      title: 'Cloud-Native & Distributed Applications',
      tag: 'CONTAINERS & MICROSERVICES',
      summary:
        'Specialized operational frameworks for containerized microservices, serverless components, and horizontally scaled cloud deployments running across Kubernetes clusters.',
      keyAspects: [
        'Dynamic pod lifecycle monitoring, liveness/readiness probe calibration, and autoscaling policy tuning',
        'Ephemeral container telemetry capture and centralized log indexing without performance overhead',
        'Service-mesh traffic routing oversight, canary verification, and blue/green deployment stability'
      ]
    },
    {
      title: 'Integrated Application Landscapes',
      tag: 'APIs, EVENT BUSES & MIDDLEWARE',
      summary:
        'Support practices focused on complex integration middleware, API gateways, enterprise message brokers, and secure B2B connectivity channels.',
      keyAspects: [
        'Message queue depth tracking, consumer lag monitoring, and dead-letter queue investigation',
        'API gateway rate limiting, authentication latency analysis, and payload error inspection',
        'Continuous partner endpoint probing and external interface availability management'
      ]
    },
    {
      title: 'Hybrid & Multi-Environment Deployments',
      tag: 'HYBRID CLOUD & ON-PREMISES',
      summary:
        'Unified operational practices spanning on-premises data centers, private cloud infrastructure, and multi-hyperscaler cloud platforms with standardized procedures.',
      keyAspects: [
        'Cross-environment network transit latency profiling and hybrid connectivity monitoring',
        'Standardized operational runbooks executed uniformly regardless of hosting location',
        'Single-pane operational visibility uniting legacy physical hosting with modern cloud landing zones'
      ]
    }
  ];

  // Business Value Data
  const businessValueItems = [
    {
      title: 'Improved Visibility into Application Health',
      description:
        'Gain complete, transparent insight into how applications behave across all architectural layers. Instead of checking disparate servers individually, teams inspect unified telemetry that shows real-time system state and component health.',
      operationalShift: 'Shift from reactive, blind troubleshooting to continuous, transparent health awareness.'
    },
    {
      title: 'Faster Investigation of Operational Issues',
      description:
        'Eliminate manual log hunting and inconclusive post-incident debates. Correlated distributed traces, structured logs, and service metrics guide engineers directly to failing code paths or constrained database tables in minutes.',
      operationalShift: 'Replace cross-functional guessing with deterministic root-cause evidence.'
    },
    {
      title: 'More Consistent Application Support Processes',
      description:
        'Establish standard operating procedures, verified escalation protocols, and structured runbooks across the enterprise. Operational handoffs, incident responses, and patch applications occur with repeatable precision.',
      operationalShift: 'Transition from reliance on heroic individual efforts to structured, institutional operational standards.'
    },
    {
      title: 'Better-Informed Performance Optimization',
      description:
        'Base engineering optimizations on actual runtime profiles rather than theoretical assumptions. Resource allocations, thread configurations, database indexes, and caching strategies are tuned using precise latency and utilization signals.',
      operationalShift: 'Replace over-provisioning and guesswork with empirical performance engineering.'
    },
    {
      title: 'Stronger Service Continuity and Reliability Planning',
      description:
        'Build resilience directly into operational workflows with verified failover sequences, dependency risk assessments, and proactive capacity planning. Applications withstand unexpected infrastructure fluctuations smoothly.',
      operationalShift: 'Shift from hoping systems do not fail to ensuring systems recover predictably when disruptions occur.'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#050B17] text-slate-900 dark:text-white transition-colors duration-300 font-sans">

      {/* =========================================================================
          SECTION 01: HERO SECTION (Full-Screen Immersive Canvas with 16:9 Uncropped HD Visual)
          ========================================================================= */}
      <section className="relative w-full min-h-[660px] lg:min-h-[740px] flex flex-col justify-between pt-28 sm:pt-32 lg:pt-36 pb-10 overflow-hidden bg-[#030712] border-b border-white/10">

        {/* FULL-SCREEN HERO BACKGROUND IMAGE (16:9 Widescreen Crystal Clear HD Visual) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden">
          <img
            src="/images/cloud/app_ops_hero.png"
            alt="Enterprise Application Operations Full Screen Architecture"
            className="w-full h-full object-cover object-right lg:object-center brightness-[1.05] contrast-[1.05]"
          />
          {/* Subtle directional dark gradient on the left ensures pristine text readability without dimming the engineer visual on the right */}
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

            {/* Practice Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/25 text-cyan-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
              <Activity className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>KNOOVIQ CLOUD &amp; APPLICATION OPERATIONS</span>
            </div>

            {/* Headings */}
            <div className="space-y-3">
              <span className="block text-sm sm:text-base font-semibold uppercase tracking-wider text-[#00A3E0]">
                Application Operations
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.12]">
                Keep Enterprise Applications Reliable, Responsive, and Ready for Business.
              </h1>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
              Knooviq helps organizations maintain stable, responsive, and dependable applications through proactive monitoring, performance analysis, operational management, and service reliability practices. We help teams identify issues earlier, improve application visibility, and support consistent digital operations across enterprise environments.
            </p>

          </div>
        </div>

        {/* Operational Anchors Strip */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-8">
          <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/10 backdrop-blur-md">
              <span className="text-[#00A3E0] block font-mono text-xs font-bold uppercase tracking-wider">TELEMETRY</span>
              <div className="text-sm font-bold text-white mt-0.5">Full-Stack Signals</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/10 backdrop-blur-md">
              <span className="text-[#00A3E0] block font-mono text-xs font-bold uppercase tracking-wider">TUNING</span>
              <div className="text-sm font-bold text-white mt-0.5">Latency Analysis</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/10 backdrop-blur-md">
              <span className="text-[#00A3E0] block font-mono text-xs font-bold uppercase tracking-wider">TRIAGE</span>
              <div className="text-sm font-bold text-white mt-0.5">Rapid Root Cause</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/10 backdrop-blur-md">
              <span className="text-[#00A3E0] block font-mono text-xs font-bold uppercase tracking-wider">RESILIENCE</span>
              <div className="text-sm font-bold text-white mt-0.5">Continuous Stability</div>
            </div>
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 02: OPERATIONAL CHALLENGES (Compact Editorial Layout)
          ========================================================================= */}
      <section id="challenges" className="py-20 bg-slate-50 dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-semibold uppercase tracking-wider">
              <span>OPERATIONAL CHALLENGES &bull; ENTERPRISE REALITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              Navigating the Realities of Distributed Application Complexity
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              As enterprise software environments evolve across microservices, hybrid clouds, and integrated third-party platforms, traditional support approaches struggle to maintain stability and operational clarity.
            </p>
          </div>

          {/* Compact Editorial Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left Editorial Executive Summary */}
            <div className="lg:col-span-4 p-7 rounded-2xl bg-white dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 shadow-sm space-y-5 lg:sticky lg:top-36">
              <span className="text-xs font-bold text-[#00A3E0] uppercase tracking-wider block">
                EXECUTIVE PERSPECTIVE
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-snug">
                The Operational Visibility Deficit in Modern Enterprises
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                When applications are fragmented across diverse hosting models and complex integration layers, failure points multiply. Without holistic operational discipline, teams operate in reactive silos, addressing symptoms while the core technical causes remain unaddressed.
              </p>
              <div className="pt-4 border-t border-slate-200 dark:border-white/10 space-y-2 text-xs text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200 font-semibold">
                  <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Key Friction Points Addressed:</span>
                </div>
                <p className="font-normal">Telemetry blind spots, hidden latency bottlenecks, cascading outages, and uncoordinated change releases.</p>
              </div>
            </div>

            {/* Right Editorial Challenges Roster */}
            <div className="lg:col-span-8 space-y-4">
              {operationalChallenges.map((challenge) => (
                <article
                  key={challenge.num}
                  className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 hover:border-[#00A3E0]/40 transition-all duration-300 shadow-xs group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-100 dark:border-white/5 pb-3 mb-4">
                    <span className="text-xs font-bold text-[#00A3E0] dark:text-cyan-400 uppercase tracking-wider">
                      CHALLENGE {challenge.num}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#00A3E0] dark:group-hover:text-cyan-300 transition-colors">
                      {challenge.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {challenge.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-dashed border-slate-200 dark:border-white/10 flex items-start gap-2 text-xs">
                    <span className="font-semibold text-slate-500 dark:text-slate-400 shrink-0">
                      Operational Consequence:
                    </span>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">
                      {challenge.impact}
                    </span>
                  </div>
                </article>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 03: APPLICATION OPERATIONS CAPABILITIES
          (Four Detailed Capability Sections with Unique Layouts and Relevant Images)
          ========================================================================= */}
      <section id="capabilities" className="py-20 bg-white dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

          {/* Section Introduction */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-semibold uppercase tracking-wider">
              <span>CORE DISCIPLINES &bull; APPLICATION OPERATIONS PRACTICE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              Application Operations Capabilities
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              We provide comprehensive operational capabilities across support governance, full-stack observability, performance tuning, and service reliability to keep your business applications dependable.
            </p>
          </div>

          {/* ---------------------------------------------------------------------
              CAPABILITY A: Application Operations Management (Layout 1: Split Architecture)
              --------------------------------------------------------------------- */}
          <div id="operations-management" className="pt-6 scroll-mt-24 space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

              {/* Left Column: Narrative & Pillars */}
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 text-xs font-semibold tracking-wider uppercase">
                  <Workflow className="w-3.5 h-3.5 text-[#00A3E0]" />
                  <span>CAPABILITY A &bull; OPERATIONAL GOVERNANCE</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                  Application Operations Management
                </h3>
                <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  Establish structured application support processes, operational health reviews, incident coordination, release support, and day-to-day application stability. We ensure production application environments receive the rigorous operational oversight required for uninterrupted business execution.
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    {
                      title: 'Tiered Application Support Processes',
                      detail: 'Structured L2 and L3 technical support frameworks with standardized runbooks, clear escalation criteria, and defined component ownership.'
                    },
                    {
                      title: 'Operational Health & Readiness Reviews',
                      detail: 'Routine operational audits assessing runtime configurations, resource headroom, dependency statuses, and operational logs to catch degradation early.'
                    },
                    {
                      title: 'Incident Coordination & Rapid Triage',
                      detail: 'Disciplined incident management protocols uniting technical leads, tracking timelines, and conducting blameless reviews to eliminate repeat failures.'
                    },
                    {
                      title: 'Release Support & Deployment Governance',
                      detail: 'Operational validation during production rollouts, blue/green change coordination, canary verification, and documented rollback plans.'
                    },
                    {
                      title: 'Day-to-Day Application Stability',
                      detail: 'Continuous configuration synchronization, routine patch maintenance, dependency hygiene, and proactive monitoring of process lifecycles.'
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-[#070E1E] border border-slate-200/70 dark:border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">{item.title}</h4>
                        <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed font-normal">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Architectural Image Showcase */}
              <div className="lg:col-span-5 space-y-4">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-900 aspect-[16/10] sm:aspect-video lg:aspect-[4/3] group">
                  <img
                    src="/images/cloud/app_ops_mgmt.jpg"
                    alt="Application operations management architectural visual showing runtime systems, health review coordination, and release stability pipelines"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050B17]/90 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#070E1E]/85 backdrop-blur-md border border-white/10 text-xs">
                    <span className="text-xs font-bold text-cyan-300 tracking-wider uppercase block">OPERATIONAL CONTROL PLANE</span>
                    <span className="text-slate-300 text-[11px] font-normal">Coordinating day-to-day stability, releases, and incident response.</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="border-t border-slate-200 dark:border-white/10" />

          {/* ---------------------------------------------------------------------
              CAPABILITY B: Monitoring & Observability (Layout 2: Inverted Asymmetric)
              --------------------------------------------------------------------- */}
          <div id="monitoring-observability" className="pt-6 scroll-mt-24 space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

              {/* Left Column: Technical Observability Image */}
              <div className="lg:col-span-5 order-2 lg:order-1 space-y-4">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-900 aspect-[16/10] sm:aspect-video lg:aspect-[4/3] group">
                  <img
                    src="/images/cloud/app_ops_observability.png"
                    alt="Monitoring and observability visual showing distributed telemetry, traces, metrics, and service dependencies"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050B17]/90 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#070E1E]/85 backdrop-blur-md border border-white/10 text-xs">
                    <span className="text-xs font-bold text-cyan-300 tracking-wider uppercase block">UNIFIED TELEMETRY TOPOLOGY</span>
                    <span className="text-slate-300 text-[11px] font-normal">Connecting distributed traces, metrics, and structured logs.</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Telemetry & Tracing Narrative */}
              <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 text-xs font-semibold tracking-wider uppercase">
                  <Eye className="w-3.5 h-3.5 text-[#00A3E0]" />
                  <span>CAPABILITY B &bull; TELEMETRY &amp; TRACING</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                  Monitoring &amp; Observability
                </h3>
                <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  Establish deep visibility across application telemetry, logs, metrics, distributed tracing, service dependencies, alert management, and root-cause investigation. We turn fragmented application signals into actionable operational clarity.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#070E1E] border border-slate-200/70 dark:border-white/5 space-y-1.5">
                    <div className="text-xs font-bold text-[#00A3E0] uppercase tracking-wider">Application Telemetry</div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      Structured log pipelines, standardized trace propagation, and high-resolution metrics tracking application behavior across runtime environments.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#070E1E] border border-slate-200/70 dark:border-white/5 space-y-1.5">
                    <div className="text-xs font-bold text-[#00A3E0] uppercase tracking-wider">Distributed Tracing</div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      Tracking individual transactions across distributed microservices, message queues, and databases to pinpoint exactly where latency occurs.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#070E1E] border border-slate-200/70 dark:border-white/5 space-y-1.5">
                    <div className="text-xs font-bold text-[#00A3E0] uppercase tracking-wider">Service Dependencies</div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      Real-time dependency topology mapping showing how upstream client requests map to downstream microservices, caches, and third-party APIs.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#070E1E] border border-slate-200/70 dark:border-white/5 space-y-1.5">
                    <div className="text-xs font-bold text-[#00A3E0] uppercase tracking-wider">Alert Management &amp; Triage</div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      Disciplined alert thresholds, alert deduplication, and context-rich notifications that reduce on-call fatigue and accelerate root-cause isolation.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-cyan-50/60 dark:bg-cyan-950/20 border border-cyan-200 dark:border-cyan-500/20 text-xs text-slate-700 dark:text-slate-300">
                  <span className="font-bold text-[#00A3E0] dark:text-cyan-400">Root-Cause Investigation: </span>
                  When an anomaly arises, operations teams inspect unified telemetry with linked trace IDs to identify the exact failing span or database lock without guesswork.
                </div>
              </div>

            </div>
          </div>

          <div className="border-t border-slate-200 dark:border-white/10" />

          {/* ---------------------------------------------------------------------
              CAPABILITY C: Performance Management (Layout 3: Stacked Deep-Dive)
              --------------------------------------------------------------------- */}
          <div id="performance-management" className="pt-6 scroll-mt-24 space-y-8">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 text-xs font-semibold tracking-wider uppercase">
                <Cpu className="w-3.5 h-3.5 text-[#00A3E0]" />
                <span>CAPABILITY C &bull; RUNTIME &amp; RESOURCE TUNING</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                Performance Management
              </h3>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Conduct response-time analysis, resource utilization audits, bottleneck identification, capacity planning, and targeted performance tuning. We ensure applications deliver consistent throughput and low latency under real-world enterprise workloads.
              </p>
            </div>

            {/* Performance Visual Showcase & Engineering Practice Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              {/* Infrastructure Visual */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-900 aspect-[16/10] sm:aspect-video lg:aspect-[4/3] group">
                  <img
                    src="/images/cloud/app_ops_performance.jpg"
                    alt="Application performance management visual displaying enterprise server blade architecture and compute resource optimization"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050B17]/90 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#070E1E]/85 backdrop-blur-md border border-white/10 text-xs">
                    <span className="text-xs font-bold text-cyan-300 tracking-wider uppercase block">COMPUTE &amp; RUNTIME OPTIMIZATION</span>
                    <span className="text-slate-300 text-[11px] font-normal">Aligning memory, CPU, and database throughput with business demand.</span>
                  </div>
                </div>
              </div>

              {/* 4 Technical Deep-Dive Cards */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#070E1E] border border-slate-200/80 dark:border-white/5 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#00A3E0] uppercase tracking-wider">
                    <Clock className="w-4 h-4" />
                    <span>Response-Time Analysis</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Latency Profiling</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    Granular decomposition of request latency across front-end rendering, network hops, application logic, and database query executions to locate lag sources.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#070E1E] border border-slate-200/80 dark:border-white/5 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#00A3E0] uppercase tracking-wider">
                    <Sliders className="w-4 h-4" />
                    <span>Resource Utilization</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Compute &amp; Memory Balance</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    Continuous monitoring of CPU saturation, memory allocation footprints, garbage collection pauses, and disk I/O to avoid compute starvation.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#070E1E] border border-slate-200/80 dark:border-white/5 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#00A3E0] uppercase tracking-wider">
                    <Search className="w-4 h-4" />
                    <span>Bottleneck Identification</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Query &amp; Code Tuning</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    Systematic identification of unindexed SQL queries, excessive synchronous API round-trips, thread contention, and connection pool exhaustion.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#070E1E] border border-slate-200/80 dark:border-white/5 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#00A3E0] uppercase tracking-wider">
                    <BarChart2 className="w-4 h-4" />
                    <span>Capacity Planning</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Workload Growth Modeling</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    Forecasting infrastructure resource needs based on historical workload trends, transaction volumes, seasonal peaks, and planned business expansion.
                  </p>
                </div>

              </div>

            </div>
          </div>

          <div className="border-t border-slate-200 dark:border-white/10" />

          {/* ---------------------------------------------------------------------
              CAPABILITY D: Availability & Reliability (Layout 4: Resilience Showcase)
              --------------------------------------------------------------------- */}
          <div id="availability-reliability" className="pt-6 scroll-mt-24 space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

              {/* Left Column: Reliability Tenets */}
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 text-xs font-semibold tracking-wider uppercase">
                  <Shield className="w-3.5 h-3.5 text-[#00A3E0]" />
                  <span>CAPABILITY D &bull; SERVICE RESILIENCE &amp; SRE</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                  Availability &amp; Reliability
                </h3>
                <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  Implement service health monitoring, resilience planning, dependency assessment, recovery procedures, and continuous reliability improvement practices. We build predictable stability into the core operational lifecycle.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#070E1E] border border-slate-200/70 dark:border-white/5">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#00A3E0]" />
                      Continuous Service Health Monitoring
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 pl-4 leading-relaxed font-normal">
                      Synthetic end-user probing, multi-region endpoint validation, and golden signal tracking to identify service degradation before customers are impacted.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#070E1E] border border-slate-200/70 dark:border-white/5">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#00A3E0]" />
                      Resilience Planning &amp; Fault Isolation
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 pl-4 leading-relaxed font-normal">
                      Architecting circuit breakers, bulkheads, exponential retries, and graceful degradation fallback modes to ensure partial failures do not cause catastrophic systemic outages.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#070E1E] border border-slate-200/70 dark:border-white/5">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#00A3E0]" />
                      Dependency Assessment &amp; Blast Radius Control
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 pl-4 leading-relaxed font-normal">
                      Continuous evaluation of upstream and downstream coupling, ensuring that failure in an external third-party service or storage node does not compromise core transactional journeys.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#070E1E] border border-slate-200/70 dark:border-white/5">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#00A3E0]" />
                      Validated Recovery Procedures &amp; Runbooks
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 pl-4 leading-relaxed font-normal">
                      Well-documented, regularly rehearsed failover procedures, automated self-healing scripts, and disaster recovery playbooks tested under simulated stress.
                    </p>
                  </div>

                </div>
              </div>

              {/* Right Column: High-Availability Visual */}
              <div className="lg:col-span-5 space-y-4">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-900 aspect-[16/10] sm:aspect-video lg:aspect-[4/3] group">
                  <img
                    src="/images/cloud/app_ops_reliability.jpg"
                    alt="Service availability and reliability visual showing multi-zone redundancy, failover routing, and mirrored database clusters"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050B17]/90 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#070E1E]/85 backdrop-blur-md border border-white/10 text-xs">
                    <span className="text-xs font-bold text-cyan-300 tracking-wider uppercase block">HIGH-AVAILABILITY TOPOLOGY</span>
                    <span className="text-slate-300 text-[11px] font-normal">Multi-zone resilience, automated failover, and dependency risk management.</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 04: OPERATIONAL APPROACH (Clear Four-Stage Workflow)
          (Horizontal process visual on desktop and vertical sequence on mobile)
          ========================================================================= */}
      <section id="operational-approach" className="py-20 bg-slate-50 dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-semibold uppercase tracking-wider">
              <span>STRUCTURED METHODOLOGY &bull; CONTINUOUS IMPROVEMENT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              Our Operational Approach
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              A disciplined four-stage operational workflow designed to establish clear application visibility, systematically address vulnerabilities, and sustain dependable performance.
            </p>
          </div>

          {/* Desktop Horizontal Process Visual Stepper (Hidden on mobile) */}
          <div className="hidden lg:grid grid-cols-4 gap-4 relative">
            {/* Connecting line */}
            <div className="absolute top-7 left-12 right-12 h-0.5 bg-slate-200 dark:bg-white/10 -z-0" />

            {operationalApproachStages.map((stage, idx) => (
              <button
                key={stage.step}
                onClick={() => setActiveWorkflowStage(idx)}
                className={`relative p-6 rounded-2xl text-left border transition-all z-10 cursor-pointer ${activeWorkflowStage === idx
                    ? 'bg-white dark:bg-[#0B1528] border-[#00A3E0] shadow-lg shadow-[#00A3E0]/15 ring-2 ring-[#00A3E0]/20'
                    : 'bg-white/70 dark:bg-[#0B1528]/50 border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20'
                  }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`w-8 h-8 rounded-xl text-xs font-bold flex items-center justify-center ${activeWorkflowStage === idx
                      ? 'bg-[#00A3E0] text-white shadow-md'
                      : 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10'
                    }`}>
                    {stage.step}
                  </span>
                  <span className={`text-[11px] font-bold uppercase tracking-wider ${activeWorkflowStage === idx ? 'text-[#00A3E0] dark:text-cyan-400' : 'text-slate-400'
                    }`}>
                    STAGE {stage.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                  {stage.name}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 line-clamp-2 leading-relaxed font-normal">
                  {stage.tagline}
                </p>
              </button>
            ))}
          </div>

          {/* Active Stage Deep-Dive Card (Desktop Detailed View) */}
          <div className="hidden lg:block p-8 rounded-3xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#00A3E0] dark:text-cyan-400 uppercase tracking-wider">
                  STAGE {operationalApproachStages[activeWorkflowStage].step} &bull; {operationalApproachStages[activeWorkflowStage].name.toUpperCase()}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {operationalApproachStages[activeWorkflowStage].name} &mdash; {operationalApproachStages[activeWorkflowStage].tagline}
                </h3>
              </div>
              <span className="px-3 py-1.5 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-semibold uppercase tracking-wider">
                CORE FOCUS: {operationalApproachStages[activeWorkflowStage].focus}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  PRIMARY OPERATIONAL ACTIVITIES:
                </h4>
                <ul className="space-y-2.5">
                  {operationalApproachStages[activeWorkflowStage].activities.map((act, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                      <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#070E1E] border border-slate-200 dark:border-white/5 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="text-xs font-bold text-[#00A3E0] uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4" />
                    <span>OPERATIONAL DELIVERABLE &amp; OUTCOME</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-100 leading-relaxed">
                    {operationalApproachStages[activeWorkflowStage].outcome}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200 dark:border-white/10 text-xs text-slate-500 dark:text-slate-400 font-normal">
                  Disciplined execution ensures predictable progress without operational interruption or untested production changes.
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Vertical Sequence (Shown only on small/medium screens) */}
          <div className="lg:hidden space-y-6">
            {operationalApproachStages.map((stage) => (
              <div
                key={stage.step}
                className="p-6 rounded-2xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 shadow-sm space-y-4"
              >
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/5 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-[#00A3E0] text-white text-xs font-bold flex items-center justify-center">
                      {stage.step}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {stage.name}
                    </h3>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#00A3E0]">
                    STAGE {stage.step}
                  </span>
                </div>

                <p className="text-xs font-medium text-slate-700 dark:text-slate-200 leading-relaxed">
                  {stage.tagline}
                </p>

                <div className="space-y-2 pt-1">
                  <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Activities:
                  </span>
                  <ul className="space-y-2">
                    {stage.activities.map((act, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300 font-normal">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3E0] shrink-0 mt-0.5" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#070E1E] border border-slate-200/60 dark:border-white/5 text-xs">
                  <span className="font-bold text-[#00A3E0]">Outcome: </span>
                  <span className="text-slate-700 dark:text-slate-300 font-medium">{stage.outcome}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 05: APPLICATION OPERATIONS ACROSS ENVIRONMENTS
          (Refined architectural illustration & multi-environment operational practices)
          ========================================================================= */}
      <section id="environments" className="py-20 bg-white dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-semibold uppercase tracking-wider">
              <span>MULTI-ENVIRONMENT ARCHITECTURE &bull; COHESIVE OPERATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              Application Operations Across Environments
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Modern digital enterprises rarely run in a single homogeneous environment. Our operational practices support business systems, cloud-native platforms, integration middleware, and hybrid hosting landscapes simultaneously.
            </p>
          </div>

          {/* Refined Architectural Illustration Showcase */}
          <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl bg-slate-900 aspect-[16/9] group">
            <img
              src="/images/cloud/app_ops_environments.jpg"
              alt="Refined enterprise architectural illustration showing business applications, cloud-native services, API integration bus, and hybrid cloud infrastructure unified by operations and monitoring"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050B17]/90 via-transparent to-transparent pointer-events-none" />

            {/* Overlay Banner */}
            <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 rounded-2xl bg-[#070E1E]/90 backdrop-blur-md border border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-cyan-300 text-xs font-bold uppercase tracking-wider">
                  <Layers className="w-4 h-4 text-[#00A3E0]" />
                  <span>UNIFIED ENTERPRISE OPERATIONS PLANE</span>
                </div>
                <p className="text-slate-300 text-[11px] sm:text-xs font-normal">
                  Synchronized monitoring, health checks, and incident workflows uniting legacy ERPs, containers, APIs, and hybrid clouds.
                </p>
              </div>
            </div>
          </div>

          {/* Four Environment Pillars Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {environmentLandscapes.map((env, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 flex flex-col justify-between space-y-4 hover:border-[#00A3E0]/40 transition-colors"
              >
                <div className="space-y-3">
                  <span className="text-[10px] font-bold text-[#00A3E0] dark:text-cyan-400 uppercase tracking-wider block">
                    {env.tag}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                    {env.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {env.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 dark:border-white/5 space-y-2">
                  <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                    Core Operational Focus:
                  </span>
                  <ul className="space-y-1.5">
                    {env.keyAspects.map((aspect, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2 text-[11px] text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0] shrink-0 mt-1.5" />
                        <span>{aspect}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 06: BUSINESS VALUE (Practical Outcomes, No Fake Stats)
          ========================================================================= */}
      <section id="business-value" className="py-20 bg-slate-50 dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-semibold uppercase tracking-wider">
              <span>MEASURABLE OUTCOMES &bull; PRACTICAL ENTERPRISE VALUE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              Predictable Business &amp; Operational Outcomes
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Our application operations engagements focus on grounded, repeatable improvements that bring operational clarity to development, infrastructure, and leadership teams.
            </p>
          </div>

          {/* 5 Practical Outcomes Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessValueItems.map((val, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-white dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 shadow-xs hover:border-[#00A3E0]/40 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="w-7 h-7 rounded-lg bg-cyan-50 dark:bg-cyan-500/10 text-[#00A3E0] text-xs font-bold flex items-center justify-center">
                      0{idx + 1}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      OUTCOME 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                    {val.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {val.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-white/5">
                  <div className="text-[11px] text-cyan-700 dark:text-cyan-400 font-semibold leading-relaxed">
                    &bull; {val.operationalShift}
                  </div>
                </div>
              </div>
            ))}



          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 07: CLOSING CALL TO ACTION
          ========================================================================= */}
      <section className="py-20 bg-gradient-to-b from-[#050B17] to-slate-950 text-white border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#00A3E0_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00A3E0]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/25 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <Activity className="w-3.5 h-3.5 text-[#00A3E0]" />
            <span>KNOOVIQ APPLICATION OPERATIONS CONSULTING</span>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Make Application Operations More Predictable.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
              Build a clearer view of application health, strengthen operational processes, and support reliable enterprise services with Knooviq.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => handleOpenContact('Make Application Operations More Predictable')}
              className="px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-gradient-to-r from-[#00A3E0] to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-lg shadow-cyan-500/30 flex items-center gap-2.5 group cursor-pointer"
            >
              <span>Talk to Our Cloud Experts</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <Link
              to="/cloud-operations/monitoring-observability"
              className="px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 hover:text-white border border-white/20 font-bold text-xs sm:text-sm tracking-wide transition-all flex items-center gap-2 group cursor-pointer"
            >
              <span>Explore Monitoring &amp; Observability</span>
              <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </Link>
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
                  Application Operations — Connected Application Architecture
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
                src="/images/cloud/app_ops_hero.png"
                alt="Application Operations"
                className="max-h-[82vh] w-auto max-w-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
