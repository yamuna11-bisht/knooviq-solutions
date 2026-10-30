import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Server,
  Layers,
  Cpu,
  Database,
  BarChart3,
  Eye,
  TrendingUp,
  Boxes,
  Network,
  Clock,
  Activity,
  Workflow,
  Sparkles,
  AlertTriangle,
  RefreshCw,
  GitFork,
  Radio,
  FileCheck,
  HelpCircle,
  HardDrive,
  Sliders,
  ShieldAlert,
  AlertOctagon,
  LifeBuoy,
  Maximize2,
  X
} from 'lucide-react';

interface ChildPageProps {
  onOpenContact?: (topic?: string) => void;
}

export const AvailabilityReliabilityPage: React.FC<ChildPageProps> = ({ onOpenContact }) => {
  const [activeApproachStage, setActiveApproachStage] = useState<number>(0);
  const [selectedEnv, setSelectedEnv] = useState<number>(0);
  const [fullscreenImage, setFullscreenImage] = useState<{ src: string; title: string } | null>(null);

  useEffect(() => {
    document.title = 'Availability & Reliability – Stay Resilient, Minimize Downtime | KNOOVIQ';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setFullscreenImage(null);
      }
    };
    if (fullscreenImage) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [fullscreenImage]);

  const handleOpenContact = (topic?: string) => {
    if (onOpenContact) {
      onOpenContact(topic || 'Availability & Reliability');
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Section 3: Operational Challenges Data (5 Challenges in clean horizontal layout)
  const reliabilityChallenges = [
    {
      id: 'unplanned-downtime',
      title: 'Unplanned Downtime',
      tagline: 'Unexpected service interruptions that affect availability.',
      description:
        'Unexpected service interruptions that affect application availability and business operations, resulting in lost productivity, transaction halts, and elongated triage cycles.',
      icon: AlertOctagon,
      accent: 'text-rose-500 bg-rose-500/10 border-rose-500/20'
    },
    {
      id: 'single-points-failure',
      title: 'Single Points of Failure',
      tagline: 'Critical components whose failure can disrupt systems.',
      description:
        'Critical components whose failure can disrupt dependent systems. Non-redundant database masters, unmirrored storage pools, or solitary ingress routers expose workloads to severe outages.',
      icon: GitFork,
      accent: 'text-amber-500 bg-amber-500/10 border-amber-500/20'
    },
    {
      id: 'data-availability-recovery',
      title: 'Data Availability & Recovery',
      tagline: 'Challenges associated with data protection & restoration.',
      description:
        'Challenges associated with data protection, recovery readiness, and service restoration. Unverified snapshot procedures and untested rollback scripts introduce significant risk during failures.',
      icon: Database,
      accent: 'text-blue-500 bg-blue-500/10 border-blue-500/20'
    },
    {
      id: 'complex-dependencies',
      title: 'Complex Dependencies',
      tagline: 'Interconnected apps & infra that complicate isolation.',
      description:
        'Interconnected applications and infrastructure that complicate failure isolation and recovery. Upstream API timeouts or third-party cloud service stalls can cascade uncontrollably across internal services.',
      icon: Network,
      accent: 'text-purple-500 bg-purple-500/10 border-purple-500/20'
    },
    {
      id: 'operational-risks',
      title: 'Operational Risks',
      tagline: 'Configuration drift, infra failures & emerging threats.',
      description:
        'Configuration changes, infrastructure failures, and emerging threats that can affect service continuity. Manual parameter adjustments and uncoordinated deployments frequently introduce regressions.',
      icon: ShieldAlert,
      accent: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/20'
    }
  ];

  // Section 4: Capabilities Data (4 Core Blocks)
  const capabilities = [
    {
      id: 'service-health',
      badge: 'CAPABILITY A • SERVICE HEALTH & READINESS',
      title: 'Service Health & Availability Management',
      tagline: 'Proactive health assessment, availability monitoring, and operational readiness reviews.',
      description:
        'We evaluate end-to-end service health across application components, runtimes, and external dependencies. Our approach incorporates continuous availability monitoring, synthetic transaction testing, and latent failure detection so engineering teams understand operational state before disruptions affect business users.',
      image: '/images/cloud/avail_service_health_wide.jpg?v=2',
      points: [
        'Continuous synthetic end-user probing and multi-zone API availability checks',
        'Service health telemetry aggregation tracking golden signals (latency, traffic, errors, saturation)',
        'Upstream and downstream dependency health mapping with blast-radius analysis',
        'Operational readiness reviews for application releases, major changes, and workload migrations'
      ]
    },
    {
      id: 'disaster-recovery',
      badge: 'CAPABILITY B • DISASTER RECOVERY & RESILIENCE',
      title: 'Disaster Recovery & Backup Readiness',
      tagline: 'Recovery planning, backup verification, and coordinated cross-team restoration procedures.',
      description:
        'Our disaster recovery readiness ensures organizations maintain practical, tested procedures to restore application services after unforeseen outages. We evaluate backup strategies, define recovery sequences, and conduct structured simulation testing between application and infrastructure teams.',
      image: '/images/cloud/avail_disaster_recovery_wide.jpg?v=2',
      points: [
        'Assessment of Recovery Point Objectives (RPO) and Recovery Time Objectives (RTO)',
        'Multi-tier backup strategy review including snapshot integrity and retention policies',
        'Step-by-step restoration playbooks with documented operational roles and escalations',
        'Structured disaster recovery validation exercises to verify data integrity under simulated failure'
      ]
    },
    {
      id: 'failover-design',
      badge: 'CAPABILITY C • HIGH AVAILABILITY & REDUNDANCY',
      title: 'High Availability & Failover Design',
      tagline: 'Redundant architecture, intelligent traffic distribution, and resilient failover pathways.',
      description:
        'We help teams architect resilient application environments that eliminate single points of failure. By implementing appropriate redundancy, automated failover mechanisms, and graceful degradation patterns, applications withstand infrastructure faults without interrupting customer transactions.',
      image: '/images/cloud/avail_failover_design_wide.jpg?v=2',
      points: [
        'Multi-Availability Zone and hybrid-cloud active-active and active-passive redundancy design',
        'Intelligent traffic routing, load distribution, and automated DNS/ingress failover mechanisms',
        'Application fault-isolation patterns including circuit breakers, bulkheads, and exponential retries',
        'Systematic identification and elimination of hidden single points of failure in compute and storage'
      ]
    },
    {
      id: 'incident-management',
      badge: 'CAPABILITY D • RISK & INCIDENT MANAGEMENT',
      title: 'Reliability Risk & Incident Management',
      tagline: 'Systemic risk assessment, structured incident triage, root-cause analysis, and operational learning.',
      description:
        'Reliability engineering relies on structured risk assessment and disciplined learning from operational incidents. We help organizations establish clear incident response workflows, conduct blameless failure analysis, and turn operational findings into preventative engineering safeguards.',
      image: '/images/cloud/avail_incident_management_wide.jpg?v=2',
      points: [
        'Reliability risk assessment identifying architectural vulnerabilities and operational exposures',
        'Structured incident response protocols with defined commander roles and escalation workflows',
        'Comprehensive post-incident reviews (PIR) to uncover systemic root causes without finger-pointing',
        'Closed-loop corrective action tracking to continuously harden application configurations and runbooks'
      ]
    }
  ];

  // Section 5: Reliability Engineering Approach Data (4 Stages)
  const approachStages = [
    {
      num: '01',
      title: 'Assess & Plan',
      tagline: 'Review application architecture, service dependencies, availability requirements, operational risks, and recovery needs.',
      description:
        'We conduct an in-depth review of your application estate to understand critical business journeys, mapping dependencies across databases, message queues, APIs, and cloud services. We determine availability requirements and evaluate current operational risks.',
      activities: [
        'Document service dependency topology and critical transaction execution paths',
        'Define explicit availability and recovery requirements (RTO/RPO) for each workload tier',
        'Audit historical service interruption logs to identify recurrent failure triggers',
        'Identify single points of failure across ingress, compute, data storage, and external APIs'
      ]
    },
    {
      num: '02',
      title: 'Design & Implement',
      tagline: 'Define appropriate redundancy, failover strategies, backup processes, and recovery procedures based on the application environment.',
      description:
        'Based on architectural realities, we establish tailored redundancy patterns, failover strategies, and recovery procedures. We help teams integrate resilient runtime configurations and automate recovery steps where feasible.',
      activities: [
        'Formulate multi-zone redundancy and active-passive or active-active failover models',
        'Establish automated backup schedules, retention tiers, and cryptographic snapshot controls',
        'Configure application resilience patterns including circuit breakers, rate limits, and fallback logic',
        'Author precise operational runbooks for service restarts, database failovers, and DNS cutovers'
      ]
    },
    {
      num: '03',
      title: 'Test & Validate',
      tagline: 'Validate recovery workflows, test failover behavior where feasible, and identify gaps in operational readiness.',
      description:
        'Operational readiness must be proven in practice rather than assumed on paper. We coordinate controlled validation exercises, testing failover behavior, backup restoration integrity, and team coordination under simulated disruptions.',
      activities: [
        'Conduct controlled failover rehearsals to verify automated traffic redirection',
        'Validate database point-in-time restoration and data consistency verification scripts',
        'Run operational scenario walkthroughs to test incident escalation and response timing',
        'Identify readiness gaps, update runbooks, and fine-tune operational escalation protocols'
      ]
    },
    {
      num: '04',
      title: 'Monitor & Improve',
      tagline: 'Review service incidents, examine failure patterns, refine recovery procedures, and strengthen reliability practices over time.',
      description:
        'Reliability is an evolving discipline. We assist engineering and operations teams in continuously reviewing service health, examining incident patterns, refining runbooks, and embedding resilience practices into ongoing operational rituals.',
      activities: [
        'Establish continuous service health monitoring and automated degradation alerting',
        'Facilitate structured post-incident reviews to convert outages into architectural hardening',
        'Conduct periodic architecture reviews to re-assess dependencies as applications evolve',
        'Strengthen team reliability practices through shared operational playbooks and drills'
      ]
    }
  ];

  // Section 6: Enterprise Environments Data (6 Environments)
  const enterpriseEnvironments = [
    {
      name: 'Enterprise Business Applications',
      tag: 'CORE BUSINESS SYSTEMS',
      description:
        'ERP platforms, supply chain operations, CRM systems, and core transactional software where downtime directly interrupts business commerce and operational fulfillment.',
      focus: 'High-availability clustering, transactional data protection, and predictable disaster recovery failover workflows.'
    },
    {
      name: 'Cloud-Native & Containerized Applications',
      tag: 'KUBERNETES & MICROSERVICES',
      description:
        'Containerized microservices fleets, serverless workloads, and Kubernetes clusters where distributed components must self-heal and isolate partial failures gracefully.',
      focus: 'Multi-AZ pod distribution, automated container health probing, horizontal autoscaling, and ingress mesh resilience.'
    },
    {
      name: 'APIs & Integration Services',
      tag: 'MIDDLEWARE & GATEWAYS',
      description:
        'API gateways, service meshes, asynchronous event brokers (Kafka, RabbitMQ), and integration buses bridging internal and third-party partner applications.',
      focus: 'Dead-letter queue isolation, circuit breaking, request retry policies, and throttling to prevent cascade failures.'
    },
    {
      name: 'Databases & Middleware',
      tag: 'PERSISTENCE & CACHING',
      description:
        'Relational databases, NoSQL repositories, in-memory caches, and distributed persistence stores holding critical system state and transaction records.',
      focus: 'Multi-region synchronous replication, automated read-replica failovers, continuous snapshotting, and point-in-time recovery.'
    },
    {
      name: 'Hybrid & Multi-Cloud Environments',
      tag: 'CROSS-CLOUD TOPOLOGIES',
      description:
        'Complex architectures spanning private corporate data centers, AWS, Microsoft Azure, and Google Cloud connected via dedicated interconnects and VPN tunnels.',
      focus: 'Redundant network transit pathways, cross-cloud failover routing, and uniform operational procedures across clouds.'
    },
    {
      name: 'On-Premises & Cloud Infrastructure',
      tag: 'COMPUTE & NETWORK TIERS',
      description:
        'Physical virtualization clusters, storage area networks (SAN), load balancing appliances, and cloud virtual private networks (VPCs) forming the platform foundation.',
      focus: 'Hardware redundancy, hypervisor high-availability failover, power feed separation, and network fabric resilience.'
    }
  ];

  // Section 7: Practical Business Outcomes Data (Strictly no fake statistics or percentages)
  const practicalOutcomes = [
    {
      title: 'Improved Understanding of Service Availability Risks',
      description:
        'Engineering and leadership teams gain an objective, evidence-based view of critical dependency paths, eliminating operational blind spots and prioritizing hardening where it matters most.',
      icon: Eye
    },
    {
      title: 'Better-Prepared Recovery & Continuity Procedures',
      description:
        'Validated, regularly rehearsed recovery playbooks replace stressful emergency improvisation during infrastructure disruptions, ensuring rapid, predictable service restoration.',
      icon: FileCheck
    },
    {
      title: 'Reduced Exposure to Avoidable Single Points of Failure',
      description:
        'Systematic architectural reviews and redundancy implementations eliminate catastrophic single points of failure across compute, networking, and data tiers.',
      icon: ShieldCheck
    },
    {
      title: 'Clearer Incident Response & Recovery Responsibilities',
      description:
        'Documented escalation paths, defined incident commander roles, and structured runbooks streamline coordination between application developers, database teams, and operations engineers.',
      icon: Activity
    },
    {
      title: 'More Consistent Reliability Reviews & Operational Improvements',
      description:
        'Ongoing post-incident analysis and recurring architectural health audits instill a proactive culture of continuous engineering improvement across the organization.',
      icon: RefreshCw
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
            src="/images/cloud/avail_reliability_hero.png"
            alt="Availability &amp; Reliability Infrastructure Visual"
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
                Availability &amp; Reliability
              </h1>
              <p className="text-lg sm:text-xl font-bold text-cyan-300 tracking-tight">
                Stay Resilient. Minimize Downtime. Ensure Continuity.
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
              Knooviq helps organizations strengthen application availability and operational resilience through service health assessment, failure prevention, recovery planning, and reliability engineering. We help teams understand operational risks, prepare for disruptions, and build dependable application environments that support business continuity.
            </p>

          </div>
        </div>

        {/* Reliability Signals Ribbon */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-8">
          <div className="pt-4 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/10 backdrop-blur-md">
              <span className="font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 text-xs">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Resilience</span>
              </span>
              <div className="text-sm font-bold text-white mt-1">Multi-AZ Setup</div>
              <div className="text-xs text-slate-400 mt-0.5">Automated Redundancy</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/10 backdrop-blur-md">
              <span className="font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 text-xs">
                <AlertOctagon className="w-3.5 h-3.5" />
                <span>Fault Isolation</span>
              </span>
              <div className="text-sm font-bold text-white mt-1">Blast Radius</div>
              <div className="text-xs text-slate-400 mt-0.5">Graceful Degradation</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/10 backdrop-blur-md">
              <span className="font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 text-xs">
                <FileCheck className="w-3.5 h-3.5" />
                <span>Recovery</span>
              </span>
              <div className="text-sm font-bold text-white mt-1">RPO &amp; RTO</div>
              <div className="text-xs text-slate-400 mt-0.5">Validated Failover</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/10 backdrop-blur-md">
              <span className="font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 text-xs">
                <Activity className="w-3.5 h-3.5" />
                <span>Service Health</span>
              </span>
              <div className="text-sm font-bold text-white mt-1">Dependency Checks</div>
              <div className="text-xs text-slate-400 mt-0.5">Synthetic Validation</div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2: THE CHALLENGE
          ========================================================================= */}
      <section id="challenges" className="py-20 bg-white dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <AlertTriangle className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>THE CHALLENGE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Downtime Impacts More Than Systems.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Enterprise applications rely on connected services, infrastructure, data platforms, and external integrations. Failures in one component can affect dependent services, disrupt business processes, and complicate recovery. A structured reliability approach helps organizations understand these risks and prepare appropriate responses.
            </p>
          </div>

          {/* 5 Challenges in Clean Horizontal Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {reliabilityChallenges.map((challenge, idx) => {
              const Icon = challenge.icon;
              return (
                <div
                  key={challenge.id}
                  className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 hover:border-[#00A3E0]/40 transition-all flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${challenge.accent}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                        0{idx + 1}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-[#00A3E0] dark:group-hover:text-cyan-300 transition-colors">
                        {challenge.title}
                      </h3>
                      <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                        {challenge.tagline}
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {challenge.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex items-center gap-1.5 text-[11px] font-bold text-slate-500 dark:text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                    <span>Operational Risk Point</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: AVAILABILITY & RELIABILITY CAPABILITIES
          ========================================================================= */}
      <section id="capabilities" className="py-20 bg-slate-50 dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Building Reliable and Resilient Applications
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Knooviq helps organizations strengthen service continuity by assessing availability risks, improving recovery readiness, and applying practical reliability engineering principles.
            </p>
          </div>

          {/* 4 Distinct Capability Blocks with Varied Layouts and Different Images */}
          <div className="space-y-16">

            {/* Capability A: Service Health & Availability Management (Image on Right) */}
            <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-white dark:bg-[#070E1E] border border-slate-200/80 dark:border-white/10 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                
                <div className="lg:col-span-6 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider">
                    <Activity className="w-3.5 h-3.5 text-[#00A3E0]" />
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
                  <div
                    className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-950 flex flex-col transition-all duration-300"
                  >
                    <div className="relative w-full aspect-[16/9] overflow-hidden">
                      <img
                        src={capabilities[0].image}
                        alt="Service health and availability operations visual showing infrastructure health and interconnected application nodes"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3.5 bg-[#070E1E] border-t border-white/10 flex items-center justify-between text-xs text-slate-300 select-text">
                      <div>
                        <span className="font-bold text-white block">Continuous Service Health Surveillance</span>
                        <span className="text-slate-400 text-[11px]">Proactive dependency health reviews &bull; Golden signal tracking</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Capability B: Disaster Recovery & Backup Readiness (Image on Left) */}
            <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-white dark:bg-[#070E1E] border border-slate-200/80 dark:border-white/10 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                
                <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col justify-center">
                  <div
                    className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-950 flex flex-col transition-all duration-300"
                  >
                    <div className="relative w-full aspect-[16/9] overflow-hidden">
                      <img
                        src={capabilities[1].image}
                        alt="Disaster recovery and backup readiness datacenter environment with primary and secondary replication pathways"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3.5 bg-[#070E1E] border-t border-white/10 flex items-center justify-between text-xs text-slate-300 select-text">
                      <div>
                        <span className="font-bold text-white block">Data-Center Recovery Infrastructure</span>
                        <span className="text-slate-400 text-[11px]">Validated RPO/RTO &bull; Cross-environment restoration workflows</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider">
                    <Database className="w-3.5 h-3.5 text-[#00A3E0]" />
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

            {/* Capability C: High Availability & Failover Design (Image on Right) */}
            <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-white dark:bg-[#070E1E] border border-slate-200/80 dark:border-white/10 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                
                <div className="lg:col-span-6 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider">
                    <GitFork className="w-3.5 h-3.5 text-[#00A3E0]" />
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
                  <div
                    className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-950 flex flex-col transition-all duration-300"
                  >
                    <div className="relative w-full aspect-[16/9] overflow-hidden">
                      <img
                        src={capabilities[2].image}
                        alt="High availability redundant application architecture connected through failover pathways"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3.5 bg-[#070E1E] border-t border-white/10 flex items-center justify-between text-xs text-slate-300 select-text">
                      <div>
                        <span className="font-bold text-white block">Multi-Zone Redundant Clusters</span>
                        <span className="text-slate-400 text-[11px]">Intelligent load balancing &bull; Dynamic failover routing</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Capability D: Reliability Risk & Incident Management (Image on Left) */}
            <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-white dark:bg-[#070E1E] border border-slate-200/80 dark:border-white/10 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                
                <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col justify-center">
                  <div
                    className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-950 flex flex-col transition-all duration-300"
                  >
                    <div className="relative w-full aspect-[16/9] overflow-hidden">
                      <img
                        src={capabilities[3].image}
                        alt="Reliability risk and incident management infrastructure visual featuring protected services and response concepts"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3.5 bg-[#070E1E] border-t border-white/10 flex items-center justify-between text-xs text-slate-300 select-text">
                      <div>
                        <span className="font-bold text-white block">Incident Response &amp; Mitigation Fabric</span>
                        <span className="text-slate-400 text-[11px]">Blameless root-cause analysis &bull; Continual runbook refinement</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider">
                    <ShieldAlert className="w-3.5 h-3.5 text-[#00A3E0]" />
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

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: RELIABILITY ENGINEERING APPROACH
          ========================================================================= */}
      <section id="approach" className="py-20 bg-white dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <Workflow className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>OUR APPROACH</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              From Risk Assessment to Operational Resilience
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              We follow a structured approach to understand service dependencies, identify failure risks, prepare recovery mechanisms, and continuously improve reliability practices.
            </p>
          </div>

          {/* Desktop Horizontal Process Stepper */}
          <div className="hidden lg:grid grid-cols-4 gap-4 relative">
            {approachStages.map((stage, idx) => (
              <button
                key={stage.num}
                type="button"
                onClick={() => setActiveApproachStage(idx)}
                className={`p-6 rounded-2xl text-left border transition-all cursor-pointer ${
                  activeApproachStage === idx
                    ? 'bg-slate-50 dark:bg-[#0B1528] border-[#00A3E0] shadow-lg shadow-cyan-500/10 ring-2 ring-[#00A3E0]/20'
                    : 'bg-white dark:bg-[#070E1E] border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-black tracking-wider uppercase px-2.5 py-1 rounded-md ${
                    activeApproachStage === idx
                      ? 'bg-[#00A3E0] text-white'
                      : 'bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400'
                  }`}>
                    STAGE {stage.num}
                  </span>
                  <div className={`w-3 h-3 rounded-full ${activeApproachStage === idx ? 'bg-[#00A3E0]' : 'bg-slate-300 dark:bg-slate-700'}`} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {stage.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                  {stage.tagline}
                </p>
              </button>
            ))}
          </div>

          {/* Active Stage Detailed Panel (Desktop & Mobile) */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#00A3E0] block">
                  STAGE {approachStages[activeApproachStage].num} &bull; DETAILED METHODOLOGY
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  {approachStages[activeApproachStage].title}
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-[#00A3E0] text-xs font-bold">
                Operational Lifecycle
              </span>
            </div>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              {approachStages[activeApproachStage].description}
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Key Engineering &amp; Operational Activities:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {approachStages[activeApproachStage].activities.map((act, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-white dark:bg-[#070E1E] border border-slate-200/70 dark:border-white/5 flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-cyan-500/10 text-[#00A3E0] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-xs text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                      {act}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Vertical Stepper (Visible only on mobile) */}
          <div className="lg:hidden space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
              Select Another Stage:
            </span>
            <div className="grid grid-cols-2 gap-2">
              {approachStages.map((stg, idx) => (
                <button
                  key={stg.num}
                  type="button"
                  onClick={() => setActiveApproachStage(idx)}
                  className={`p-3 rounded-xl text-left border text-xs font-bold cursor-pointer ${
                    activeApproachStage === idx
                      ? 'bg-[#00A3E0] text-white border-[#00A3E0]'
                      : 'bg-white dark:bg-[#070E1E] border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <span className="block text-[10px] opacity-80">STAGE {stg.num}</span>
                  <span>{stg.title}</span>
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: AVAILABILITY & RELIABILITY ACROSS YOUR ENVIRONMENT
          ========================================================================= */}
      <section id="environments" className="py-20 bg-slate-50 dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <Boxes className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>ENTERPRISE ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Availability &amp; Reliability Across Your Environment
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Reliability depends on how applications, infrastructure, databases, integrations, and recovery mechanisms work together. Knooviq helps organizations evaluate these relationships and develop appropriate continuity practices across their technology landscape.
            </p>
          </div>

          {/* Wide Technical Illustration */}
          <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl bg-slate-900 aspect-[21/9] sm:aspect-[16/7] group">
            <img
              src="/images/cloud/avail_across_environments.jpg"
              alt="Multi-tier enterprise availability architecture showing relationships between applications, load balancing, compute, storage, recovery, and business users"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050B17]/95 via-[#050B17]/40 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#070E1E]/90 backdrop-blur-md border border-white/15 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-slate-300">
              <div className="space-y-0.5">
                <span className="font-bold text-white text-sm">Unified Enterprise Continuity Fabric</span>
                <p className="text-slate-300 text-xs">Applications &bull; Load Distribution &bull; Compute Nodes &bull; Persistent Storage &bull; Recovery Systems</p>
              </div>
              <span className="px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 font-bold shrink-0">
                End-to-End Resilience Topology
              </span>
            </div>
          </div>

          {/* 6 Environments Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {enterpriseEnvironments.map((env, idx) => (
              <div
                key={env.name}
                className="p-6 rounded-2xl bg-white dark:bg-[#070E1E] border border-slate-200/80 dark:border-white/10 hover:border-[#00A3E0]/40 transition-all space-y-4 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#00A3E0] px-2.5 py-1 rounded-md bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-100 dark:border-cyan-400/20">
                    {env.tag}
                  </span>
                  <span className="text-xs font-bold text-slate-400">0{idx + 1}</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {env.name}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {env.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-white/5 space-y-1">
                  <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 block">
                    Continuity &amp; Recovery Focus:
                  </span>
                  <p className="text-xs text-slate-700 dark:text-slate-200 font-medium">
                    {env.focus}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: PRACTICAL BUSINESS OUTCOMES
          ========================================================================= */}
      <section id="outcomes" className="py-20 bg-white dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>BUSINESS VALUE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Stronger Reliability. Greater Confidence.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Availability and reliability practices deliver predictable operational stability and confidence across engineering, IT operations, and executive leadership.
            </p>
          </div>

          {/* 5 Outcomes in Distinct Editorial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practicalOutcomes.map((outcome, idx) => {
              const Icon = outcome.icon;
              return (
                <div
                  key={outcome.title}
                  className={`p-7 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 space-y-4 hover:border-[#00A3E0]/40 transition-all ${
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

                  <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex items-center gap-2 text-xs font-bold text-[#00A3E0]">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Verified Operational Advantage</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: CLOSING CALL TO ACTION BANNER
          ========================================================================= */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-[#070E1E] via-[#050B17] to-slate-950 text-white">
        {/* Subtle background graphic overlay */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <img
            src="/images/cloud/avail_closing_banner.jpg"
            alt="Enterprise Technology Visual"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#050B17] via-[#050B17]/90 to-[#050B17]/70 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-8 sm:p-12 lg:p-14 bg-gradient-to-r from-blue-900/30 via-cyan-950/30 to-slate-900/60 border border-cyan-500/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 backdrop-blur-sm">

            <div className="space-y-4 max-w-2xl text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 block">
                SRE &amp; APM &bull; APPLICATION CONTINUITY
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
                Build Resilient Applications for What's Next.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Strengthen service continuity, improve recovery readiness, and develop a practical reliability strategy aligned with your application landscape.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-4 shrink-0 w-full lg:w-auto">
              <button
                type="button"
                onClick={() => handleOpenContact('Talk to Our Experts – Availability & Reliability')}
                className="px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-gradient-to-r from-[#00A3E0] to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-lg shadow-cyan-500/30 flex items-center gap-2.5 group cursor-pointer"
              >
                <span>Talk to Our Cloud Experts</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                to="/cloud-operations/application-operations"
                className="px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 hover:text-white border border-white/20 font-bold text-xs sm:text-sm tracking-wide transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>Explore Application Operations</span>
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

export default AvailabilityReliabilityPage;
