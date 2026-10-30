import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Zap,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Server,
  Layers,
  Cpu,
  Sliders,
  Database,
  BarChart3,
  HardDrive,
  Eye,
  ShieldCheck,
  TrendingUp,
  Headphones,
  Boxes,
  Network,
  Clock,
  Activity,
  Workflow,
  Sparkles,
  Maximize2,
  AlertCircle,
  Gauge,
  LineChart,
  GitCommit,
  X
} from 'lucide-react';

interface ChildPageProps {
  onOpenContact?: (topic?: string) => void;
}

export const PerformanceManagementPage: React.FC<ChildPageProps> = ({ onOpenContact }) => {
  const [activeApproachStage, setActiveApproachStage] = useState<number>(0);
  const [selectedEnv, setSelectedEnv] = useState<number>(0);
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
    document.title = 'Performance Management – Optimize Performance, Maximize Value | KNOOVIQ';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleOpenContact = (topic?: string) => {
    if (onOpenContact) {
      onOpenContact(topic || 'Performance Management');
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Performance Challenges Data (5 Challenges with varied spacing)
  const performanceChallenges = [
    {
      id: 'user-experience',
      title: 'Variable User Experience',
      tagline: 'Inconsistent application response across user journeys and environments.',
      description:
        'Users experience intermittent latency spikes depending on location, device, or feature accessed. Without granular transaction analysis, teams struggle to recreate issues that occur under real-world network and client conditions.',
      icon: Gauge,
      accent: 'text-amber-500 bg-amber-500/10 border-amber-500/20'
    },
    {
      id: 'resource-inefficiencies',
      title: 'Resource Inefficiencies',
      tagline: 'Poor resource allocation, excessive consumption, or underutilized capacity.',
      description:
        'Over-provisioned servers drive up operating costs while misallocated memory and CPU threads create local bottlenecks. Lack of continuous sizing reviews leads to wasted compute without delivering performance gains.',
      icon: Cpu,
      accent: 'text-blue-500 bg-blue-500/10 border-blue-500/20'
    },
    {
      id: 'performance-bottlenecks',
      title: 'Performance Bottlenecks',
      tagline: 'Constraints within application code, database queries, integrations, or infrastructure.',
      description:
        'Sub-optimal SQL statements, unindexed tables, unmanaged connection pools, or synchronous third-party API dependencies introduce backpressure that cascades through the entire application stack.',
      icon: AlertCircle,
      accent: 'text-rose-500 bg-rose-500/10 border-rose-500/20'
    },
    {
      id: 'scalability-challenges',
      title: 'Scalability Challenges',
      tagline: 'Difficulty adapting systems to changing workloads.',
      description:
        'Applications perform acceptably during baseline hours but experience severe degradation or service drops during traffic surges, month-end batch runs, or seasonal transaction peaks.',
      icon: TrendingUp,
      accent: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20'
    },
    {
      id: 'limited-visibility',
      title: 'Limited Performance Visibility',
      tagline: 'Fragmented information that makes the source of performance issues harder to identify.',
      description:
        'Separate teams monitoring servers, databases, and application code rely on conflicting metrics. Without end-to-end tracing and profiling, troubleshooting becomes speculative and prolonged.',
      icon: Eye,
      accent: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/20'
    }
  ];

  // End-to-End Capabilities Data
  const capabilities = [
    {
      id: 'assessment-profiling',
      title: 'Capability A: Performance Assessment & Profiling',
      badge: 'PROFILING & ASSESSMENT',
      tagline: 'In-depth transaction analysis and runtime behavior investigation.',
      description:
        'We examine application execution threads, call stacks, and transaction workflows under operational conditions. Our assessment identifies inefficient processing loops, memory allocation churn, and excessive lock times before they impact users.',
      image: '/images/cloud/perf_assessment_profiling_wide.jpg?v=2',
      points: [
        'Method-level execution timing across core business transaction paths',
        'Call-stack inspection to detect thread blocking, lock contention, and wait states',
        'Evaluation of memory allocation patterns, garbage collection pauses, and object lifecycles',
        'Baseline response-time benchmarking under varied real-world traffic profiles'
      ]
    },
    {
      id: 'resource-capacity',
      title: 'Capability B: Resource & Capacity Optimization',
      badge: 'CAPACITY & UTILIZATION',
      tagline: 'Balancing compute, memory, and database consumption for maximum efficiency.',
      description:
        'Our capacity optimization evaluates how physical, virtual, and cloud resources are allocated to workloads. We help teams align resource sizing with true consumption patterns, eliminating wasteful headroom while preserving stability.',
      image: '/images/cloud/perf_resource_optimization.png',
      points: [
        'Compute and memory utilization profiling across virtual machines and container fleets',
        'Database memory buffer, cache sizing, and connection pool right-sizing',
        'Workload scheduling optimization to prevent batch job contention with interactive transactions',
        'Predictive capacity planning based on historical growth curves and upcoming workload shifts'
      ]
    },
    {
      id: 'bottleneck-analysis',
      title: 'Capability C: Bottleneck & Root-Cause Analysis',
      badge: 'ROOT-CAUSE DISCOVERY',
      tagline: 'Isolating hidden constraints across databases, APIs, and network tiers.',
      description:
        'Performance issues rarely reside in a single tier. We trace end-to-end request flows across application services, message queues, relational databases, and third-party integrations to isolate exact latency hotspots.',
      image: '/images/cloud/perf_bottleneck_analysis.png',
      points: [
        'Database query execution plan review to identify missing indexes, full table scans, and lock escalations',
        'Downstream API and synchronous microservice latency impact mapping',
        'Network path analysis including socket wait times, packet retransmissions, and DNS resolution delays',
        'Disentangling symptoms from foundational constraints to avoid wasted engineering cycles'
      ]
    },
    {
      id: 'tuning-scalability',
      title: 'Capability D: Performance Tuning & Scalability',
      badge: 'SYSTEM TUNING & SCALING',
      tagline: 'Refining configurations, query efficiency, and elastic scaling architecture.',
      description:
        'We design and apply targeted technical optimizations across application runtimes, database parameters, caching tiers, and scaling policies to prepare systems for sustainable growth and workload variability.',
      image: '/images/cloud/perf_tuning_scalability.png',
      points: [
        'Runtime configuration tuning for JVM, .NET, Node.js, and containerized runtimes',
        'Strategic caching architecture implementation (Redis, in-memory buffers) for high-frequency queries',
        'Horizontal and vertical auto-scaling policy calibration to handle sudden load surges smoothly',
        'Synthetic load validation to verify that tuning changes achieve intended throughput targets'
      ]
    }
  ];

  // 4-Stage Performance Improvement Approach
  const approachStages = [
    {
      num: '01',
      title: 'Measure & Assess',
      tagline: 'Establish empirical baselines across transactions and resources.',
      description:
        'We capture application performance indicators, resource telemetry, and user transaction patterns to establish an objective baseline of current behavior under normal and peak operating conditions.',
      activities: [
        'Capture baseline response times for critical transaction workflows',
        'Collect compute, memory, I/O, and network resource utilization data',
        'Document existing architecture, dependencies, and configuration parameters',
        'Identify high-impact business transactions where latency impacts operations'
      ]
    },
    {
      num: '02',
      title: 'Diagnose & Prioritize',
      tagline: 'Distinguish foundational bottlenecks from surface symptoms.',
      description:
        'Using profiling telemetry and architectural inspection, we drill into processing paths, database query plans, and integration points to rank constraints based on technical impact and business priority.',
      activities: [
        'Trace slow transactions to specific code paths, SQL queries, or API calls',
        'Analyze concurrency constraints, connection pool exhaustion, and thread wait states',
        'Correlate infrastructure resource spikes with specific application processes',
        'Deliver a prioritized backlog of performance recommendations with clear rationale'
      ]
    },
    {
      num: '03',
      title: 'Optimize & Validate',
      tagline: 'Implement targeted adjustments and measure verifiable impact.',
      description:
        'We assist engineering and database teams in applying recommended optimizations, query refactoring, configuration changes, or scaling adjustments, followed by rigorous validation to verify improvements.',
      activities: [
        'Refactor inefficient database queries and apply missing index structures',
        'Tune application runtime memory pools, thread limits, and timeout thresholds',
        'Configure distributed caching and asynchronous processing where appropriate',
        'Execute controlled load tests to validate latency reduction under simulated peak demand'
      ]
    },
    {
      num: '04',
      title: 'Monitor & Refine',
      tagline: 'Sustain performance gains as software and workloads evolve.',
      description:
        'Performance optimization is an ongoing discipline. We help teams establish continuous performance monitoring, automated regression alerts, and periodic reviews to sustain healthy application operations.',
      activities: [
        'Configure performance regression alert thresholds within existing monitoring tools',
        'Establish automated performance checks within continuous deployment pipelines',
        'Conduct periodic capacity and resource utilization reviews with operations teams',
        'Continuously adjust scaling thresholds as business volumes and application features expand'
      ]
    }
  ];

  // Enterprise Environments Data
  const enterpriseEnvironments = [
    {
      name: 'Enterprise Business Applications',
      tag: 'CORE SYSTEMS',
      description:
        'ERP platforms, CRM systems, supply chain engines, and custom line-of-business applications requiring sustained transaction predictability.',
      focus: 'Batch processing tuning, background job scheduling, and high-concurrency transaction response.'
    },
    {
      name: 'Cloud-Native & Containerized Applications',
      tag: 'MICROSERVICES & K8S',
      description:
        'Kubernetes clusters, containerized services, and serverless functions where transient latencies can propagate through inter-service networks.',
      focus: 'Pod resource requests/limits calibration, horizontal pod autoscaling (HPA), and ingress routing efficiency.'
    },
    {
      name: 'APIs & Integration Services',
      tag: 'MIDDLEWARE & GATEWAYS',
      description:
        'API gateways, service meshes, message brokers (Kafka, RabbitMQ), and data pipelines handling cross-system synchronization.',
      focus: 'Serialization overhead reduction, connection pooling, and asynchronous backpressure management.'
    },
    {
      name: 'Databases & Data Services',
      tag: 'PERSISTENCE TIERS',
      description:
        'Relational databases, columnar in-memory platforms, NoSQL stores, and distributed caching layers.',
      focus: 'Query optimization, indexing strategy, buffer pool sizing, lock contention, and I/O latency reduction.'
    },
    {
      name: 'Hybrid & Multi-Cloud Environments',
      tag: 'CLOUD PLATFORMS',
      description:
        'Workloads distributed across private enterprise datacenters, AWS, Azure, and Google Cloud interconnected via direct links.',
      focus: 'Cross-cloud egress latency, transit gateway routing, and multi-region data replication efficiency.'
    },
    {
      name: 'On-Premises & Cloud Infrastructure',
      tag: 'COMPUTE & NETWORK',
      description:
        'Physical hypervisors, storage arrays, network fabrics, and software-defined cloud networking components.',
      focus: 'Storage IOPS throughput, network packet loss elimination, and CPU thermal/throttling governance.'
    }
  ];

  // Practical Business Outcomes (No fake percentages or fabricated statistics)
  const practicalOutcomes = [
    {
      title: 'More Informed Performance Troubleshooting',
      description:
        'Engineering teams spend less time debating where latency originates and more time applying targeted optimizations with confidence, backed by verifiable execution profiling.',
      icon: Eye
    },
    {
      title: 'Better Visibility into Resource Consumption',
      description:
        'Organizations gain clear visibility into how compute, memory, and database resources are consumed across workloads, revealing both bottlenecks and over-allocated headroom.',
      icon: BarChart3
    },
    {
      title: 'More Efficient Application & Database Operations',
      description:
        'Resolving unindexed queries, connection leaks, and thread contentions reduces operational strain across core databases and runtime platforms, increasing stability.',
      icon: Database
    },
    {
      title: 'Improved Preparation for Changing Workloads',
      description:
        'Proactive capacity modeling and load validation provide technical leaders with advance warning of system constraints before high-demand business events occur.',
      icon: TrendingUp
    },
    {
      title: 'Better-Informed Technical Optimization Decisions',
      description:
        'Leaders can prioritize engineering refactoring efforts based on measurable operational data rather than anecdotal complaints, ensuring investments deliver tangible value.',
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
            src="/images/cloud/perf_mgmt_hero.png"
            alt="Application Performance Management Platform"
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
              <span>SRE &amp; APM | APPLICATION OPERATIONS</span>
            </div>

            {/* Main Heading & Subtitle */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.12]">
                Performance Management
              </h1>
              <p className="text-lg sm:text-xl font-bold text-cyan-300 tracking-tight">
                Optimize Performance. Maximize Value.
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
              Knooviq helps organizations assess, analyze, and optimize application performance across the technology stack. We help teams investigate response-time issues, identify resource constraints, improve application efficiency, and prepare systems to handle changing workloads.
            </p>

          </div>
        </div>

        {/* Engineering Focus Signals Ribbon */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-8">
          <div className="pt-4 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-400">
                <Clock className="w-3.5 h-3.5" />
                <span>Latency</span>
              </div>
              <div className="text-sm font-bold text-white mt-1">P99 Profiling</div>
              <div className="text-xs text-slate-400 mt-0.5">Response-Time Audits</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-400">
                <Cpu className="w-3.5 h-3.5" />
                <span>Capacity</span>
              </div>
              <div className="text-sm font-bold text-white mt-1">Workload Sizing</div>
              <div className="text-xs text-slate-400 mt-0.5">Headroom Modeling</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-400">
                <Sliders className="w-3.5 h-3.5" />
                <span>Efficiency</span>
              </div>
              <div className="text-sm font-bold text-white mt-1">Resource Tuning</div>
              <div className="text-xs text-slate-400 mt-0.5">CPU &amp; Memory Bounds</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-400">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Throughput</span>
              </div>
              <div className="text-sm font-bold text-white mt-1">Query Tuning</div>
              <div className="text-xs text-slate-400 mt-0.5">Thread Contention</div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2: PERFORMANCE CHALLENGES
          ========================================================================= */}
      <section id="challenges" className="py-20 bg-white dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <AlertCircle className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>THE CHALLENGE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Performance Issues Impact More Than Just Speed.
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Enterprise applications depend on multiple interconnected components, including application services, databases, integrations, networks, and infrastructure. Performance problems can emerge at any layer, making it important to understand the underlying cause before making changes.
            </p>
          </div>

          {/* Five Challenge Areas with Compact Icons and Varied Spacing */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {performanceChallenges.map((item, idx) => {
              const Icon = item.icon;
              const isLarge = idx === 0 || idx === 3;
              return (
                <div
                  key={item.id}
                  className={`rounded-2xl border p-6 transition-all hover:shadow-lg flex flex-col justify-between ${
                    isLarge
                      ? 'md:col-span-2 lg:col-span-1 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-[#0B1528] dark:via-[#070E1C] dark:to-[#070E1C] border-cyan-500/30 dark:border-cyan-500/30'
                      : 'bg-white dark:bg-[#070E1C] border-slate-200 dark:border-white/10'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-3">
                      <div className={`p-2.5 rounded-xl border ${item.accent}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        AREA 0{idx + 1}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs font-semibold text-[#00A3E0] dark:text-cyan-400 leading-normal">
                        {item.tagline}
                      </p>
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/5 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                    <span>Targeted root-cause investigation required</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: END-TO-END CAPABILITIES (Distinct Asymmetrical Editorial Layout)
          ========================================================================= */}
      <section id="capabilities" className="py-20 bg-slate-50 dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Section Introduction */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-cyan-500/10 border border-blue-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#00A3E0]" />
                <span>CAPABILITIES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                End-to-End Performance Management
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-6">
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                We examine application behavior, resource utilization, system dependencies, and workload patterns to help teams identify performance constraints and implement practical improvements.
              </p>
            </div>
          </div>

          {/* 4 Distinct Capability Blocks with Unique Technical Images */}
          <div className="space-y-12">
            {capabilities.map((cap, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div
                  key={cap.id}
                  className="bg-white dark:bg-[#070E1C] rounded-3xl border border-slate-200 dark:border-white/10 shadow-lg shadow-slate-200/50 dark:shadow-none overflow-hidden transition-all hover:border-[#00A3E0]/40"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center p-6 sm:p-8 lg:p-10 ${
                    isEven ? 'lg:grid-flow-dense' : ''
                  }`}>

                    {/* Content Column */}
                    <div className={`lg:col-span-7 space-y-5 ${isEven ? 'lg:col-start-6' : ''}`}>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
                        <span>{cap.badge}</span>
                      </div>

                      <div className="space-y-1.5">
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                          {cap.title}
                        </h3>
                        <p className="text-sm font-semibold text-[#00A3E0] dark:text-cyan-400">
                          {cap.tagline}
                        </p>
                      </div>

                      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                        {cap.description}
                      </p>

                      {/* Technical Points */}
                      <ul className="space-y-2.5 pt-2">
                        {cap.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                            <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                            <span className="leading-snug">{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Image Column - 100% Uncropped & Crystal Clear */}
                    <div className={`lg:col-span-5 flex flex-col justify-center ${isEven ? 'lg:col-start-1' : ''}`}>
                      <div
                        className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-950 shadow-xl flex flex-col transition-all duration-300"
                      >
                        <div className="w-full overflow-hidden bg-slate-950">
                          <img
                            src={cap.image}
                            alt={cap.title}
                            className="w-full h-auto block"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-3 bg-slate-900/95 border-t border-white/10 flex items-center justify-between text-xs text-slate-300 select-text">
                          <span className="flex items-center gap-1.5 text-cyan-400 font-bold">
                            <Zap className="w-3.5 h-3.5" />
                            Engineering Review
                          </span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: PERFORMANCE IMPROVEMENT APPROACH (Connected Workflow)
          ========================================================================= */}
      <section id="approach" className="py-20 bg-white dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <Workflow className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>OUR APPROACH</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              From Insight to Improved Performance
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              We follow a structured process to understand existing application behavior, identify constraints, and introduce targeted improvements.
            </p>
          </div>

          {/* Horizontal Desktop Process / Vertical Mobile Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {approachStages.map((stg, sIdx) => {
              const isSelected = activeApproachStage === sIdx;
              return (
                <div
                  key={stg.num}
                  onClick={() => setActiveApproachStage(sIdx)}
                  className={`rounded-2xl border p-6 transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-blue-50/80 dark:bg-[#09182E] border-[#00A3E0] ring-1 ring-[#00A3E0]/30 shadow-md'
                      : 'bg-slate-50/50 dark:bg-[#070E1C] border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20'
                  }`}
                >
                  <div className="space-y-4">
                    {/* Stage Number with Connected Flow */}
                    <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 dark:border-white/10">
                      <span className={`text-sm font-black tracking-tight ${
                        isSelected ? 'text-[#00A3E0] dark:text-cyan-400' : 'text-slate-400 dark:text-slate-500'
                      }`}>
                        STAGE {stg.num}
                      </span>
                      <span className={`w-2 h-2 rounded-full ${
                        isSelected ? 'bg-[#00A3E0] animate-pulse' : 'bg-slate-300 dark:bg-slate-600'
                      }`} />
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                        {stg.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">
                        {stg.tagline}
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {stg.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#00A3E0] dark:text-cyan-400 block">
                      Active Step Focus
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Stage Activities Detail Box */}
          <div className="p-7 sm:p-9 rounded-3xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-white/10">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#00A3E0] dark:text-cyan-400">
                  STAGE 0{activeApproachStage + 1} DELIVERABLES &amp; ENGINEERING ACTIVITIES
                </span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {approachStages[activeApproachStage].num} — {approachStages[activeApproachStage].title}
                </h3>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-white/10 text-xs font-semibold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10">
                <Clock className="w-3.5 h-3.5 text-[#00A3E0]" />
                <span>Structured Engineering Protocol</span>
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {approachStages[activeApproachStage].activities.map((act, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white dark:bg-[#070E1C] border border-slate-200 dark:border-white/5 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-normal leading-snug">
                    {act}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: PERFORMANCE ACROSS ENTERPRISE ENVIRONMENTS
          ========================================================================= */}
      <section id="environments" className="py-20 bg-slate-50 dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-cyan-500/10 border border-blue-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <Network className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>CONNECTED APPLICATION ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Performance Across Your Environment
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Performance management must account for how applications, data services, integrations, and infrastructure interact. Knooviq helps organizations examine these relationships to support consistent application behavior across their technology landscape.
            </p>
          </div>

          {/* Architecture Visual Stage - Full Box Fit, Zero Black Bars, Zero Crop */}
          <div
            className="rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-950 shadow-2xl transition-all"
          >
            <div className="relative w-full aspect-[16/9] overflow-hidden">
              <img
                src="/images/cloud/perf_enterprise_architecture_wide.jpg?v=2"
                alt="Performance Across Connected Enterprise Application Environments"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-4 bg-[#070E1E] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-slate-300 select-text">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00A3E0] animate-pulse" />
                <span className="font-bold text-white">Full-Topology Performance Architecture</span>
              </div>
              <span className="flex items-center gap-1.5 text-slate-400">
                <span>Applications &bull; Integrations &bull; Databases &bull; Hybrid Infrastructure</span>
              </span>
            </div>
          </div>

          {/* 6 Connected Environment Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {enterpriseEnvironments.map((env, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-[#070E1C] border border-slate-200 dark:border-white/10 space-y-3 hover:border-slate-300 dark:hover:border-white/20 transition-all"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 dark:bg-white/10 text-[#00A3E0] dark:text-cyan-300">
                    {env.tag}
                  </span>
                  <span className="text-xs text-slate-400 font-semibold">0{idx + 1}</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                  {env.name}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {env.description}
                </p>

                <div className="pt-3 border-t border-slate-100 dark:border-white/5 text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
                  <strong className="text-slate-700 dark:text-slate-200 font-semibold">Tuning Focus: </strong>
                  {env.focus}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: PRACTICAL BUSINESS OUTCOMES (Light Background, Editorial)
          ========================================================================= */}
      <section id="outcomes" className="py-20 bg-white dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>MEASURABLE ADVANTAGES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Better Performance. Greater Operational Efficiency.
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Practical application performance engineering delivers clear operational advantages across development, database, and infrastructure teams.
            </p>
          </div>

          {/* 5 Practical Benefits Grid (Concise text, suitable icons, NO fabricated metrics) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practicalOutcomes.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 space-y-3 hover:shadow-md transition-all"
                >
                  <div className="p-2.5 w-fit rounded-xl bg-cyan-500/10 border border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {benefit.description}
                  </p>
                </div>
              );
            })}

            {/* Advisory Highlight Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#070E1C] via-[#0B1528] to-[#050B17] text-white border border-cyan-500/30 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-300 block">
                  ADVISORY ENGAGEMENT
                </span>
                <h3 className="text-base font-bold text-white tracking-tight">
                  Independent Performance Verification
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  Our performance specialists provide objective analysis of vendor software, custom builds, and cloud migrations before production cutover.
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleOpenContact('Independent Performance Assessment')}
                className="text-xs font-bold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1.5 pt-2 cursor-pointer"
              >
                <span>Request Assessment Details</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: FINAL CALL TO ACTION (Dark Navy Closing Banner)
          ========================================================================= */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-[#070E1E] via-[#050B17] to-slate-950 text-white">
        {/* Subtle background technical graphic overlay */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <img
            src="/images/cloud/perf_closing_banner.jpg"
            alt="Enterprise Technology Visual"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#050B17] via-[#050B17]/90 to-[#050B17]/70 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-8 sm:p-12 lg:p-14 bg-gradient-to-r from-blue-900/30 via-cyan-950/30 to-slate-900/60 border border-cyan-500/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 backdrop-blur-sm">

            <div className="space-y-4 max-w-2xl text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 block">
                APPLICATION OPERATIONS &bull; PERFORMANCE ENGINEERING
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
                Build Applications Ready for What's Next.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Identify performance constraints, improve resource efficiency, and develop a practical approach to application performance with Knooviq.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-4 shrink-0 w-full lg:w-auto">
              <button
                type="button"
                onClick={() => handleOpenContact('Talk to Our Experts – Performance Management')}
                className="px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-gradient-to-r from-[#00A3E0] to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-lg shadow-cyan-500/30 flex items-center gap-2.5 group cursor-pointer"
              >
                <span>Talk to Our Cloud Experts</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                to="/cloud-operations/availability-reliability"
                className="px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 hover:text-white border border-white/20 font-bold text-xs sm:text-sm tracking-wide transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>Explore Availability &amp; Reliability</span>
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

export default PerformanceManagementPage;
