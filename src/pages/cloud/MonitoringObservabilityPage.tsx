import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
  ShieldCheck,
  TrendingUp,
  Headphones,
  Maximize2,
  Radio,
  Network,
  Boxes,
  X
} from 'lucide-react';

interface ChildPageProps {
  onOpenContact?: (topic?: string) => void;
}

export const MonitoringObservabilityPage: React.FC<ChildPageProps> = ({ onOpenContact }) => {
  const [activeApproachStage, setActiveApproachStage] = useState<number>(0);
  const [fullscreenImage, setFullscreenImage] = useState<{ src: string; title: string } | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setFullscreenImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    document.title = 'Monitoring & Observability – Full Visibility, Faster Insights | KNOOVIQ';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleOpenContact = (topic?: string) => {
    if (onOpenContact) {
      onOpenContact(topic || 'Monitoring & Observability');
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Operational Challenges Data (5 Challenges)
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
      title: 'Difficulties Identifying Hidden Performance Bottlenecks',
      description:
        'Intermittent response-time degradations are often hidden within database thread locks, unindexed queries, connection pool starvation, or memory garbage collection pauses rather than high-level application code.',
      impact:
        'Slow user experiences and checkout or processing stalls arise unpredictably during peak business cycles without clear early indicators.'
    },
    {
      num: '03',
      title: 'Alert Storms & Noise-Induced Alert Fatigue',
      description:
        'Disparate point tools emit thousands of uncorrelated alerts for a single underlying failure, bombarding engineering channels and masking critical customer-impacting signals under a flood of false alarms.',
      impact:
        'On-call engineers suffer from alert exhaustion, increasing the risk that severe degradations go unnoticed until end users report outages.'
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
      title: 'Inconsistent Telemetry Standards & Fragmented Tooling',
      description:
        'Disjointed instrumentation, unstandardized logging formats, and siloed monitoring consoles across teams prevent end-to-end trace correlation and hinder root-cause analysis.',
      impact:
        'High organizational overhead, conflicting metrics during incident retrospectives, and an inability to establish enterprise-wide SLOs.'
    }
  ];

  // Core Capabilities with Technical Visuals
  const capabilities = [
    {
      id: 'apm',
      title: 'Full-Stack Application Performance Monitoring (APM)',
      badge: 'CODE-LEVEL TELEMETRY',
      subtitle:
        'Continuous bytecode diagnostics, call stack execution analysis, and end-to-end transaction latency tracking across all major application runtimes.',
      image: '/images/cloud/apm_code_telemetry.jpg?v=2',
      features: [
        'In-depth method-level execution profiling for Java, .NET, Node.js, Python, and Go runtimes',
        'Automated database query analysis and slow SQL execution plan detection',
        'Thread pool starvation, memory leak detection, and garbage collection pause profiling',
        'End-user real user monitoring (RUM) correlating browser rendering with backend latency'
      ],
      spec: 'Sub-millisecond bytecode instrumentation overhead with dynamic sampling rates'
    },
    {
      id: 'distributed-tracing',
      title: 'Distributed Tracing & Service Dependency Mapping',
      badge: 'OPENTELEMETRY NATIVE',
      subtitle:
        'Unified transaction propagation that follows every API request across microservices, asynchronous message queues, and cloud boundaries.',
      image: '/images/cloud/distributed_tracing_wide.jpg?v=2',
      features: [
        'OpenTelemetry (OTel) standard context propagation across HTTP, gRPC, and messaging brokers',
        'Live topology maps revealing synchronous and asynchronous inter-service dependencies',
        'Tail-based trace sampling ensuring 100% capture of error transactions and latency anomalies',
        'Direct correlation between API Gateway requests, Kafka topics, Redis caches, and DB queries'
      ],
      spec: 'Full W3C Trace Context compliance with zero vendor lock-in'
    },
    {
      id: 'log-analytics',
      title: 'Centralized Log Management & Real-Time Analytics',
      badge: 'STRUCTURED LOG PIPELINES',
      subtitle:
        'High-throughput ingestion, structured JSON parsing, real-time error clustering, and bidirectional linking between logs and distributed traces.',
      image: '/images/cloud/log_analytics_wide.jpg?v=2',
      features: [
        'Petabyte-scale log ingestion from Kubernetes pods, cloud services, and bare-metal nodes',
        'Automated log pattern recognition and anomaly clustering to detect novel failure modes',
        'One-click jump from a failed trace span directly into its corresponding log stream',
        'Hot, warm, and cold storage tiering with immutable audit archiving for regulatory compliance'
      ],
      spec: 'Sub-second search execution across billions of indexed enterprise log events'
    },
    {
      id: 'aiops',
      title: 'Intelligent Alerting & Automated Root Cause Analysis (AIOps)',
      badge: 'ACTIONABLE SRE INTELLIGENCE',
      subtitle:
        'Machine-learning-driven alert deduplication, dynamic anomaly baselining, and automated fault isolation that accelerates incident remediation.',
      image: '/images/cloud/aiops_root_cause_analysis_wide.jpg?v=2',
      features: [
        'Dynamic thresholding that adapts automatically to seasonal, weekday, and diurnal traffic curves',
        'Intelligent alert storm suppression grouping related downstream alerts into a single incident',
        'Automated root-cause graph attribution pinpointing the exact faulty container or database',
        'Integrations with ServiceNow, Jira, Slack, and PagerDuty with pre-populated diagnostic context'
      ],
      spec: 'Over 90% reduction in redundant alert volume and false positives'
    }
  ];

  // 4-Stage Operational Approach
  const operationalStages = [
    {
      step: '01',
      name: 'Discover',
      tagline: 'Understand application topology, dependencies, and current telemetry gaps.',
      focus: 'Architecture discovery, tool consolidation, and critical transaction path mapping.',
      activities: [
        'Catalog all microservices, monolith tiers, databases, and third-party APIs',
        'Audit existing logging frameworks, metrics collectors, and alerting rules',
        'Identify unmonitored blind spots across private datacenters and public cloud accounts',
        'Establish baseline telemetry requirements aligned with enterprise business objectives'
      ]
    },
    {
      step: '02',
      name: 'Observe',
      tagline: 'Implement standardized OpenTelemetry instrumentation and centralized ingestion.',
      focus: 'Agent rollout, distributed trace propagation, and structured log pipelines.',
      activities: [
        'Deploy low-overhead OpenTelemetry collectors across container and VM environments',
        'Standardize structured JSON logging formats and trace context injection',
        'Instrument golden telemetry signals: Latency, Traffic, Errors, and Saturation (RED & USE)',
        'Synthetically simulate critical user journeys for proactive 24/7 endpoint monitoring'
      ]
    },
    {
      step: '03',
      name: 'Improve',
      tagline: 'Eliminate alert fatigue, tune service levels, and resolve recurring bottlenecks.',
      focus: 'SLO/SLI governance, error budget policies, and automated root-cause discovery.',
      activities: [
        'Define meaningful Service Level Objectives (SLOs) and customer-centric SLIs',
        'Implement error budget alerting policies to balance feature delivery with stability',
        'Filter alert storms using machine-learning correlation and dynamic anomaly detection',
        'Profile identified slow database queries, thread deadlocks, and memory allocations'
      ]
    },
    {
      step: '04',
      name: 'Sustain',
      tagline: 'Maintain continuous operational excellence and empower SRE engineering teams.',
      focus: 'Telemetry governance, self-healing automation, and ongoing optimization reviews.',
      activities: [
        'Embed automated observability checks into continuous deployment (CI/CD) pipelines',
        'Publish interactive executive dashboards and on-call operational runbooks',
        'Conduct monthly reliability retrospectives to review error budget burns and latency trends',
        'Empower internal engineering teams with SRE best practices and troubleshooting workflows'
      ]
    }
  ];

  // Measurable Outcomes
  const businessOutcomes = [
    {
      value: '65%+',
      metric: 'Faster Incident Resolution',
      description:
        'Unified traces, logs, and metrics eliminate diagnostic guesswork and cut Mean Time to Resolution (MTTR) dramatically.'
    },
    {
      value: '100%',
      metric: 'End-to-End Visibility',
      description:
        'Zero telemetry blind spots across multi-cloud environments, container clusters, legacy databases, and partner APIs.'
    },
    {
      value: '90%+',
      metric: 'Alert Noise Reduction',
      description:
        'Machine-learning deduplication suppresses downstream alerts, ensuring on-call engineers focus only on true root causes.'
    },
    {
      value: '99.99%',
      metric: 'Availability Confidence',
      description:
        'Proactive anomaly detection flags performance degradations before they impact customer transactions or breach SLAs.'
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
            src="/images/cloud/monitoring_observability_hero.png"
            alt="Monitoring &amp; Observability Full Screen Architecture"
            className="w-full h-full object-cover object-right lg:object-center brightness-[1.05] contrast-[1.05]"
          />
          {/* Subtle directional dark gradient on the left ensures pristine text readability without dimming the robot on the right */}
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
              <span>SRE &amp; APM | APPLICATION OPERATIONS</span>
            </div>

            {/* Main Heading & Subtitle */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.12]">
                Monitoring &amp; Observability
              </h1>
              <p className="text-lg sm:text-xl font-bold text-cyan-300 tracking-tight">
                Full Visibility. Faster Insights. Better Decisions.
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
              Knooviq helps organizations gain deeper visibility into applications and infrastructure through application monitoring, centralized logging, metrics, and distributed tracing. Our approach helps teams identify issues earlier, understand service dependencies, investigate root causes, and maintain dependable application operations.
            </p>

          </div>
        </div>

        {/* Key Telemetry Pillars Ribbon (Spanning full width under both columns) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-8">
          <div className="pt-4 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-400">
                <Activity className="w-3.5 h-3.5" />
                <span>Metrics</span>
              </div>
              <div className="text-sm font-bold text-white mt-1">Golden Signals</div>
              <div className="text-xs text-slate-400 mt-0.5">Latency, Errors, Traffic</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-400">
                <Network className="w-3.5 h-3.5" />
                <span>Traces</span>
              </div>
              <div className="text-sm font-bold text-white mt-1">OTel Spans</div>
              <div className="text-xs text-slate-400 mt-0.5">Distributed Flows</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-400">
                <Database className="w-3.5 h-3.5" />
                <span>Logs</span>
              </div>
              <div className="text-sm font-bold text-white mt-1">Structured Logs</div>
              <div className="text-xs text-slate-400 mt-0.5">Contextual Events</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>AIOps</span>
              </div>
              <div className="text-sm font-bold text-white mt-1">Correlation</div>
              <div className="text-xs text-slate-400 mt-0.5">Rapid Root Cause</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MAIN BODY LAYOUT: Full-Width Content Container
          ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-20 lg:space-y-28">

        {/* -----------------------------------------------------------------
                SECTION 1: OPERATIONAL CHALLENGES (5 Challenges)
                ----------------------------------------------------------------- */}
        <section id="the-challenge" className="space-y-10 scroll-mt-28">
          {/* Header */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-cyan-500/10 border border-blue-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>THE CHALLENGE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Modern Applications Are Complex. Keeping Them Visible Isn't Easy.
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-3xl">
              Distributed applications and interconnected services make it difficult to understand system behavior from isolated monitoring tools. Teams face fragmented telemetry, elusive performance bottlenecks, cascading cross-tier dependencies, and delayed incident triage that impact business-critical transactions.
            </p>
          </div>

          {/* 5 Operational Challenges Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {operationalChallenges.map((challenge, idx) => (
              <div
                key={challenge.num}
                className={`rounded-2xl border p-6 transition-all hover:shadow-lg ${idx === 0
                    ? 'md:col-span-2 bg-gradient-to-br from-blue-50/60 via-white to-cyan-50/40 dark:from-[#09182E] dark:via-[#070E1C] dark:to-[#070E1C] border-[#00A3E0]/40 dark:border-[#00A3E0]/40'
                    : 'bg-white dark:bg-[#070E1C] border-slate-200/80 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20'
                  }`}
              >
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="px-2.5 py-1 rounded-lg bg-[#00A3E0]/15 dark:bg-[#00A3E0]/20 text-[#00A3E0] dark:text-cyan-300 font-extrabold text-xs">
                    CHALLENGE {challenge.num}
                  </span>
                  <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    OPERATIONAL FRICTION
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2.5 tracking-tight">
                  {challenge.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {challenge.description}
                </p>

                <div className="pt-3.5 border-t border-slate-100 dark:border-white/10 flex items-start gap-2.5 text-xs text-slate-500 dark:text-slate-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                  <p className="leading-relaxed">
                    <strong className="text-slate-700 dark:text-slate-200 font-semibold">Business Risk: </strong>
                    {challenge.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* -----------------------------------------------------------------
                SECTION 2: CORE OBSERVABILITY CAPABILITIES
                ----------------------------------------------------------------- */}
        <section id="capabilities" className="space-y-12 scroll-mt-28">
          {/* Header */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>CORE CAPABILITIES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Full Visibility Across Every Layer of the Application Stack
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-3xl">
              Knooviq integrates metrics, logs, distributed tracing, and AIOps into a cohesive operational fabric, giving your engineering and SRE teams the real-time context needed to protect critical business outcomes.
            </p>
          </div>

          {/* 4 Detailed Capability Cards with Bespoke Technical Images */}
          <div className="space-y-10">
            {capabilities.map((cap, idx) => (
              <div
                key={cap.id}
                className="bg-white dark:bg-[#070E1C] rounded-3xl border border-slate-200/90 dark:border-white/10 shadow-xl shadow-slate-200/40 dark:shadow-none overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 lg:p-10">

                  {/* Left: Content */}
                  <div className="lg:col-span-7 space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
                      <span>{cap.badge}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-snug">
                      {cap.title}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                      {cap.subtitle}
                    </p>

                    {/* Bullet Highlights */}
                    <ul className="space-y-2.5 pt-2">
                      {cap.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                          <span className="leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Engineering Specification Badge */}
                    <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <Cpu className="w-4 h-4 text-[#00A3E0] shrink-0" />
                      <span className="font-semibold text-slate-700 dark:text-slate-300">Technical Specification: </span>
                      <span>{cap.spec}</span>
                    </div>
                  </div>

                  {/* Right: Technical Visual - 100% Uncropped & Crystal Clear */}
                  <div className="lg:col-span-5 flex flex-col justify-center">
                    <div
                      className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-950 shadow-xl flex flex-col transition-all duration-300"
                    >
                      {/* Image Stage: Full Box Fit, Zero Black Bars, Zero Crop */}
                      <div className="relative w-full aspect-[16/9] overflow-hidden">
                        <img
                          src={cap.image}
                          alt={cap.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      
                      {/* Telemetry Stream Status Bar */}
                      <div className="p-3 bg-slate-900/95 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-300 select-text">
                        <span className="flex items-center gap-1.5 font-bold text-cyan-400">
                          <Activity className="w-3.5 h-3.5" />
                          Telemetry Stream
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </section>

        {/* -----------------------------------------------------------------
                SECTION 3: 4-STAGE OPERATIONAL APPROACH
                ----------------------------------------------------------------- */}
        <section id="approach" className="space-y-10 scroll-mt-28">
          {/* Header */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-cyan-500/10 border border-blue-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <Workflow className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>OPERATIONAL METHODOLOGY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Our 4-Stage Observability Lifecycle
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-3xl">
              A proven engineering framework that guides organizations from fragmented tool sprawl to systematic telemetry governance, automated root-cause discovery, and proactive reliability.
            </p>
          </div>

          {/* Interactive Stage Selector Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {operationalStages.map((stg, sIdx) => {
              const isCurrent = activeApproachStage === sIdx;
              return (
                <button
                  key={stg.step}
                  type="button"
                  onClick={() => setActiveApproachStage(sIdx)}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${isCurrent
                      ? 'bg-[#00A3E0] text-white border-[#00A3E0] shadow-md shadow-[#00A3E0]/20'
                      : 'bg-white dark:bg-[#070E1C] border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-white/20'
                    }`}
                >
                  <span className={`text-[11px] font-bold uppercase tracking-wider block mb-1 ${isCurrent ? 'text-cyan-100' : 'text-[#00A3E0] dark:text-cyan-400'
                    }`}>
                    STAGE {stg.step}
                  </span>
                  <h3 className={`text-base font-bold ${isCurrent ? 'text-white' : 'text-slate-900 dark:text-white'
                    }`}>
                    {stg.name}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detailed Panel */}
          <div className="p-7 sm:p-9 rounded-3xl bg-white dark:bg-[#070E1C] border border-slate-200 dark:border-white/10 shadow-xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-100 dark:border-white/10">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#00A3E0] dark:text-cyan-400">
                  PHASE 0{activeApproachStage + 1} OVERVIEW
                </span>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                  Stage {operationalStages[activeApproachStage].step}: {operationalStages[activeApproachStage].name}
                </h3>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-white/10 text-xs font-semibold text-slate-700 dark:text-slate-200">
                <Clock className="w-3.5 h-3.5 text-[#00A3E0]" />
                <span>Continuous Execution &amp; Feedback</span>
              </div>
            </div>

            <p className="text-base text-slate-700 dark:text-slate-200 font-medium">
              {operationalStages[activeApproachStage].tagline}
            </p>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                KEY STAGE DELIVERABLES &amp; ACTIVITIES:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {operationalStages[activeApproachStage].activities.map((act, aIdx) => (
                  <div
                    key={aIdx}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/5 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-normal leading-snug">
                      {act}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </section>

      </div>

      {/* =========================================================================
          CLOSING SECTION: Dark Navy Executive Outcomes & Consultation CTA
          ========================================================================= */}
      <section id="outcomes" className="py-20 bg-gradient-to-b from-[#070E1E] via-[#050B17] to-slate-950 text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <TrendingUp className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>MEASURABLE BUSINESS OUTCOMES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Actionable Observability That Protects Digital Revenue
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Eliminate operational blind spots and transform fragmented alerts into reliable engineering intelligence that elevates system uptime and releases developer velocity.
            </p>
          </div>

          {/* 4 Outcome Stat Cards (Strictly font-sans) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessOutcomes.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-cyan-400/40 transition-all space-y-3"
              >
                <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  <span className="text-[#00A3E0]">{item.value}</span>
                </div>
                <h3 className="text-base font-bold text-white tracking-tight">
                  {item.metric}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Consultation CTA Banner */}
          <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-blue-900/40 via-cyan-950/40 to-[#070E1E] border border-cyan-500/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 block">
                PARTNER WITH SRE &amp; OBSERVABILITY EXPERTS
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Ready to Achieve Complete Application Visibility?
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Schedule a technical discovery session with Knooviq architects. We will audit your current telemetry architecture and deliver a concrete observability roadmap.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-4 shrink-0 w-full lg:w-auto">
              <button
                type="button"
                onClick={() => handleOpenContact('Monitoring & Observability Consultation')}
                className="px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-gradient-to-r from-[#00A3E0] to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-lg shadow-cyan-500/30 flex items-center gap-2.5 group cursor-pointer"
              >
                <span>Talk to Our Cloud Experts</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                to="/cloud-operations/performance-management"
                className="px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 hover:text-white border border-white/20 font-bold text-xs sm:text-sm tracking-wide transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>Explore Performance Management</span>
                <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Fullscreen HD Lightbox Modal */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={() => setFullscreenImage(null)}
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
                  {fullscreenImage.title}
                </span>
              </div>
              <button
                onClick={() => setFullscreenImage(null)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
                aria-label="Close fullscreen view"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative flex-1 flex items-center justify-center p-2 sm:p-4 overflow-auto bg-black">
              <img
                src={fullscreenImage.src}
                alt={fullscreenImage.title}
                className="max-h-[82vh] w-auto max-w-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
export default MonitoringObservabilityPage;
