import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Server,
  Network,
  Database,
  HardDrive,
  Cpu,
  Layers,
  Activity,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Workflow,
  Eye,
  FileCheck,
  FileText,
  AlertTriangle,
  Boxes,
  Sliders,
  Clock,
  RefreshCw,
  GitCommit,
  Sparkles,
  TrendingUp,
  Settings,
  ShieldAlert,
  FolderGit2,
  Maximize2,
  X
} from 'lucide-react';

interface ChildPageProps {
  onOpenContact?: (topic?: string) => void;
}

export const InfrastructureOperationsPage: React.FC<ChildPageProps> = ({ onOpenContact }) => {
  const [activeApproachStage, setActiveApproachStage] = useState<number>(0);
  const [selectedEnv, setSelectedEnv] = useState<number>(0);
  const [isFullscreenOpen, setIsFullscreenOpen] = useState<boolean>(false);

  useEffect(() => {
    document.title = 'Infrastructure Operations – Reliable IT Foundations & Continuity | KNOOVIQ';
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
      onOpenContact(topic || 'Infrastructure Operations');
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
      id: 'visibility',
      title: 'Infrastructure Visibility',
      tagline: 'Understanding infrastructure health, dependencies & status.',
      description:
        'Understanding infrastructure health, dependencies, resource availability, and operational status across physical, virtualized, and cloud-connected environments.',
      icon: Eye,
      accent: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/20'
    },
    {
      id: 'utilization',
      title: 'Resource Utilization',
      tagline: 'Managing compute, memory, storage & network resources.',
      description:
        'Managing compute, memory, storage, and network resources to support application requirements effectively without wasteful headroom or unexpected saturation.',
      icon: Cpu,
      accent: 'text-blue-500 bg-blue-500/10 border-blue-500/20'
    },
    {
      id: 'consistency',
      title: 'Configuration Consistency',
      tagline: 'Maintaining documented configurations across all tiers.',
      description:
        'Maintaining documented configurations and reducing inconsistencies across infrastructure components to prevent configuration drift and operational surprises.',
      icon: Sliders,
      accent: 'text-amber-500 bg-amber-500/10 border-amber-500/20'
    },
    {
      id: 'coordination',
      title: 'Maintenance Coordination',
      tagline: 'Planning routine maintenance, updates & dependencies.',
      description:
        'Planning routine maintenance, software and firmware updates, infrastructure modifications, and interdependent service dependencies without disrupting critical workloads.',
      icon: Clock,
      accent: 'text-purple-500 bg-purple-500/10 border-purple-500/20'
    },
    {
      id: 'readiness',
      title: 'Operational Readiness',
      tagline: 'Keeping documentation, escalation & recovery current.',
      description:
        'Keeping infrastructure documentation, support operating procedures, escalation paths, and recovery arrangements current and aligned with evolving environments.',
      icon: FileCheck,
      accent: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20'
    }
  ];

  // Core Capabilities Data (5 Distinct Sections)
  const capabilities = [
    {
      id: 'server-compute',
      badge: 'CAPABILITY A • COMPUTE PLATFORMS',
      title: 'Server & Compute Operations',
      tagline: 'Server administration, operating environment maintenance, and compute resource oversight.',
      description:
        'We manage physical bare-metal and hypervisor compute fleets to ensure consistent execution environments. Our operations encompass hardware health oversight, operating system maintenance, patch scheduling, and coordination with application teams to maintain steady server performance.',
      image: '/images/cloud/infra_ops_server_compute.png',
      points: [
        'Physical server hardware diagnostic reviews, firmware patch management, and component health monitoring',
        'Operating system administration across enterprise Linux distributions and Windows Server platforms',
        'Compute capacity and thread utilization tracking to prevent CPU exhaustion and memory starvation',
        'Coordinated server maintenance schedules aligned with business cycles and application availability'
      ]
    },
    {
      id: 'network-operations',
      badge: 'CAPABILITY B • ENTERPRISE CONNECTIVITY',
      title: 'Network Operations',
      tagline: 'Network health oversight, connectivity validation, and device configuration management.',
      description:
        'Our network operations focus on maintaining stable, secure connectivity across local enterprise networks, data center fabrics, and external cloud interconnects. We monitor link health, manage network device configurations, and coordinate rapid triage when connectivity degradation occurs.',
      image: '/images/cloud/infra_ops_network.png',
      points: [
        'Continuous link health monitoring across switches, routers, firewalls, and cloud direct connections',
        'Network device configuration backup, baseline version control, and change validation',
        'Transit latency and packet loss inspection across local, hybrid, and WAN interconnects',
        'Structured network troubleshooting and escalation coordination during connectivity incidents'
      ]
    },
    {
      id: 'storage-infrastructure',
      badge: 'CAPABILITY C • PERSISTENCE & CAPACITY',
      title: 'Storage & Data Infrastructure',
      tagline: 'Storage capacity management, array health checks, and alignment with backup processes.',
      description:
        'Enterprise data requires dependable, scalable storage infrastructure. We oversee storage area networks (SAN), network-attached storage (NAS), and block/object storage pools, conducting routine health checks, tracking consumption trends, and coordinating with backup teams to maintain data integrity.',
      image: '/images/cloud/infra_ops_storage.png',
      points: [
        'Storage array health assessments, drive status monitoring, and controller redundancy verification',
        'Storage pool capacity trending, volume allocation oversight, and thin-provisioning management',
        'Input/Output operations per second (IOPS) and throughput performance reviews for database workloads',
        'Coordination with enterprise backup processes and snapshot schedules to ensure restoration readiness'
      ]
    },
    {
      id: 'virtualization-cloud',
      badge: 'CAPABILITY D • VIRTUALIZATION & CLOUD',
      title: 'Virtualization & Cloud Infrastructure',
      tagline: 'Virtual machine administration, host resource balancing, and cloud infrastructure oversight.',
      description:
        'We support virtualized and cloud-connected infrastructure across VMware, Hyper-V, and public hyperscaler environments. Our team coordinates host resource allocations, virtual machine lifecycles, and cloud compute instances to maintain operational consistency across heterogeneous environments.',
      image: '/images/cloud/infra_ops_virtualization.png',
      points: [
        'Hypervisor cluster management, virtual machine sizing, and dynamic host load balancing',
        'Operational oversight of cloud compute instances, virtual private clouds (VPCs), and managed services',
        'Consistent administrative practices across on-premises hypervisors and public cloud accounts',
        'Virtual machine template standardization, snapshot hygiene, and resource reclaim reviews'
      ]
    },
    {
      id: 'monitoring-maintenance',
      badge: 'CAPABILITY E • HEALTH & MAINTENANCE',
      title: 'Infrastructure Monitoring & Maintenance',
      tagline: 'Continuous telemetry oversight, planned maintenance routines, and structured issue escalation.',
      description:
        'Proactive infrastructure management relies on continuous telemetry and disciplined maintenance routines. We track hardware sensors, operating system logs, and network thresholds, ensuring routine updates and firmware upgrades are scheduled smoothly with clear technical escalation protocols.',
      image: '/images/cloud/infra_ops_monitoring.jpg',
      points: [
        'Comprehensive infrastructure monitoring tracking hardware metrics, temperature, power, and fan status',
        'Scheduled preventative maintenance windows, firmware patch rollouts, and driver updates',
        'Centralized configuration documentation keeping infrastructure inventories and cabling records current',
        'Documented technical escalation procedures connecting Tier-1 alerts with Tier-2/3 infrastructure specialists'
      ]
    }
  ];

  // 4-Stage Workflow Data
  const approachStages = [
    {
      num: '01',
      title: 'Assess & Document',
      tagline: 'Review infrastructure components, configurations, dependencies, resource usage, and existing operational procedures.',
      description:
        'We begin by inventorying your physical, virtual, and cloud infrastructure assets. Our team reviews existing configurations, hardware lifecycles, network topologies, storage allocations, and operational documentation to establish an accurate operational baseline.',
      activities: [
        'Compile an exhaustive inventory of servers, network switches, storage arrays, and cloud instances',
        'Map network connectivity pathways, VLAN configurations, and inter-system dependencies',
        'Review current resource consumption curves across compute, memory, and storage tiers',
        'Audit operational procedures, maintenance schedules, and third-party vendor support contracts'
      ]
    },
    {
      num: '02',
      title: 'Monitor & Maintain',
      tagline: 'Review infrastructure health, identify operational concerns, coordinate routine maintenance, and maintain configuration records.',
      description:
        'We establish structured day-to-day oversight across the infrastructure estate. Telemetry thresholds are monitored continuously, configuration records are updated as changes occur, and preventative maintenance activities are coordinated systematically.',
      activities: [
        'Monitor server hardware metrics, storage array integrity, and network interface status',
        'Execute pre-scheduled operating system security patching and firmware updates',
        'Maintain configuration records and asset tags within the central infrastructure registry',
        'Coordinate routine hardware health inspections and air-filtration or power checks'
      ]
    },
    {
      num: '03',
      title: 'Resolve & Coordinate',
      tagline: 'Investigate infrastructure issues, coordinate with relevant technical teams, document corrective actions, and escalate issues according to established procedures.',
      description:
        'When infrastructure events or hardware faults occur, our operational processes guide swift investigation and coordinated triage. We interface with application engineers, database administrators, and hardware vendors to restore normal operations without delay.',
      activities: [
        'Conduct root-cause triage on hardware failures, network link drops, and resource spikes',
        'Mobilize vendor warranty dispatches and coordinate replacement part installations',
        'Document detailed incident logs, troubleshooting steps taken, and resolution verifications',
        'Follow established escalation paths to notify key stakeholders and application owners'
      ]
    },
    {
      num: '04',
      title: 'Review & Improve',
      tagline: 'Evaluate recurring operational concerns, review resource requirements, update documentation, and refine maintenance practices.',
      description:
        'Operational discipline requires ongoing refinement. We conduct periodic operational reviews to examine chronic hardware issues, assess future capacity demands, update standard operating procedures, and enhance overall infrastructure dependability.',
      activities: [
        'Analyze recurring hardware alert trends and identify aging components requiring lifecycle refresh',
        'Evaluate 6-to-12-month capacity growth curves across storage, compute, and network bandwidth',
        'Update standard operating procedures (SOPs) based on lessons learned from recent operations',
        'Refine preventative maintenance schedules to minimize operational friction with business users'
      ]
    }
  ];

  // Enterprise Environments Data (6 Environments)
  const enterpriseEnvironments = [
    {
      name: 'Physical Servers & Data-Center Systems',
      tag: 'BARE-METAL & RACKS',
      description:
        'Enterprise rackmount and blade servers, uninterruptible power supplies (UPS), power distribution units (PDU), and physical data-center facilities housing core systems.',
      focus: 'Hardware diagnostic monitoring, environmental temperature controls, BIOS/firmware governance, and power redundancy.'
    },
    {
      name: 'Enterprise Networking & Connectivity',
      tag: 'SWITCHING & ROUTING',
      description:
        'Core, aggregation, and edge switches, edge routers, enterprise firewalls, and dedicated fiber interconnects linking local facilities and remote offices.',
      focus: 'VLAN and subnet routing stability, port utilization management, configuration backups, and carrier link failover.'
    },
    {
      name: 'Storage & Data Infrastructure',
      tag: 'SAN, NAS & OBJECT TIERS',
      description:
        'Storage area network fabrics, high-performance NVMe/all-flash arrays, NAS file filers, and long-term archive storage supporting critical enterprise data.',
      focus: 'LUN provisioning, volume capacity alerting, RAID controller integrity, and coordination with backup snapshot engines.'
    },
    {
      name: 'Virtual Machines & Hypervisors',
      tag: 'VIRTUALIZATION FLEETS',
      description:
        'VMware vSphere, Microsoft Hyper-V, KVM clusters, and virtual switching layers providing scalable abstraction across physical server resources.',
      focus: 'Cluster resource balancing, hypervisor patch cycles, VM template governance, and virtual disk thin-provisioning control.'
    },
    {
      name: 'Public, Private & Hybrid Cloud Infrastructure',
      tag: 'CLOUD PLATFORMS',
      description:
        'Infrastructure-as-a-Service (IaaS) resources across AWS, Microsoft Azure, Google Cloud, and private enterprise cloud environments.',
      focus: 'Cloud compute instance right-sizing, virtual network security group audit, interconnect routing, and storage tiering.'
    },
    {
      name: 'On-Premises & Distributed Environments',
      tag: 'BRANCH & EDGE LOCATIONS',
      description:
        'Distributed branch offices, remote facilities, retail edge nodes, and regional distribution centers requiring localized infrastructure support.',
      focus: 'Remote out-of-band management, standardized edge hardware builds, local UPS monitoring, and automated configuration synchronization.'
    }
  ];

  // Operational Governance Tenets (Section 7)
  const governanceTenets = [
    {
      title: 'Infrastructure Inventories & Configuration Records',
      description:
        'Accurate documentation of hardware assets, serial numbers, firmware versions, IP allocations, and topological connections, ensuring complete transparency across the estate.',
      icon: FolderGit2
    },
    {
      title: 'Standard Operating Procedures & Maintenance Schedules',
      description:
        'Documented, repeatable runbooks for routine tasks such as server reboots, patching cycles, hardware part replacements, and planned maintenance windows.',
      icon: FileText
    },
    {
      title: 'Clear Ownership & Escalation Responsibilities',
      description:
        'Explicitly defined support roles connecting Tier-1 monitoring with Tier-2/3 system administrators, network engineers, and third-party hardware maintenance vendors.',
      icon: ShieldCheck
    },
    {
      title: 'Resource & Capacity Review Practices',
      description:
        'Regular evaluation of storage growth, compute load, and network bandwidth utilization to anticipate expansion requirements well ahead of saturation thresholds.',
      icon: TrendingUp
    },
    {
      title: 'Cross-Functional Team Coordination',
      description:
        'Structured coordination between infrastructure specialists, application development teams, database administrators, and IT service desk personnel during releases and maintenance.',
      icon: Workflow
    }
  ];

  // Practical Business Value (Section 8 - Strictly no fake stats)
  const practicalOutcomes = [
    {
      title: 'Better Visibility into Infrastructure Health and Dependencies',
      description:
        'Gain a cohesive, accurate view of physical, virtual, and cloud infrastructure components and their interdependencies, eliminating blind spots.',
      icon: Eye
    },
    {
      title: 'More Consistent Infrastructure Maintenance',
      description:
        'Replace haphazard, ad-hoc patching with scheduled, predictable maintenance windows that keep firmware, operating systems, and hardware current.',
      icon: Sliders
    },
    {
      title: 'Improved Resource and Capacity Awareness',
      description:
        'Understand exactly how compute, memory, and storage assets are consumed, allowing informed decisions about hardware refresh and cloud allocation.',
      icon: Cpu
    },
    {
      title: 'Clearer Operational Documentation and Responsibilities',
      description:
        'Establish standard operating procedures, verified escalation workflows, and up-to-date configuration records that streamline daily operations.',
      icon: FileCheck
    },
    {
      title: 'Better Coordination Between Infrastructure and Application Teams',
      description:
        'Bridge the gap between infrastructure administrators and software engineers, ensuring maintenance, deployments, and triage occur with mutual alignment.',
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
            src="/images/cloud/infra_ops_hero_wide.jpg"
            alt="Enterprise Infrastructure Operations Datacenter"
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
                Infrastructure Operations
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.12]">
                Infrastructure Operations
              </h1>
              <p className="text-lg sm:text-xl font-bold text-cyan-300 tracking-tight">
                Reliable Infrastructure. Consistent Operations. Business Continuity.
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
              Knooviq helps organizations maintain dependable IT infrastructure through structured infrastructure management, resource oversight, operational monitoring, and maintenance practices. From servers and storage to networks and cloud-connected environments, we help teams maintain visibility, address operational risks, and support the technology foundations that enterprise applications depend on.
            </p>

          </div>
        </div>

        {/* Infrastructure Signals Ribbon */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-8">
          <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/10 backdrop-blur-md">
              <span className="font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 text-xs">
                <Server className="w-3.5 h-3.5" />
                <span>Compute</span>
              </span>
              <div className="text-sm font-bold text-white mt-1">Server Fleet</div>
              <div className="text-xs text-slate-400 mt-0.5">OS &amp; Host Oversight</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/10 backdrop-blur-md">
              <span className="font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 text-xs">
                <Network className="w-3.5 h-3.5" />
                <span>Network</span>
              </span>
              <div className="text-sm font-bold text-white mt-1">Core Routing</div>
              <div className="text-xs text-slate-400 mt-0.5">Switching &amp; Fabrics</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/10 backdrop-blur-md">
              <span className="font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 text-xs">
                <Database className="w-3.5 h-3.5" />
                <span>Storage</span>
              </span>
              <div className="text-sm font-bold text-white mt-1">SAN / NAS Tiers</div>
              <div className="text-xs text-slate-400 mt-0.5">Volume Integrity</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/10 backdrop-blur-md">
              <span className="font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 text-xs">
                <Layers className="w-3.5 h-3.5" />
                <span>Virtualization</span>
              </span>
              <div className="text-sm font-bold text-white mt-1">Hypervisors</div>
              <div className="text-xs text-slate-400 mt-0.5">Multi-Cloud Nodes</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: OPERATIONAL CHALLENGES
          ========================================================================= */}
      <section id="challenges" className="py-20 bg-white dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <AlertTriangle className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>OPERATIONAL CHALLENGES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Strong Infrastructure Starts with Consistent Operations.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Enterprise infrastructure consists of interconnected compute, storage, networking, virtualization, and cloud resources. Maintaining these environments requires clear operational procedures, resource visibility, configuration discipline, and coordinated maintenance.
            </p>
          </div>

          {/* 5 Challenges in Clean Horizontal Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {operationalChallenges.map((challenge, idx) => {
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
                    <span>Core Discipline</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: CORE CAPABILITIES (5 Distinct Blocks with Varied Layouts)
          ========================================================================= */}
      <section id="capabilities" className="py-20 bg-slate-50 dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <Server className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>CORE CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Managing the Technology Behind Your Business
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Knooviq supports infrastructure operations through structured management practices designed to improve visibility, maintain operational consistency, and support dependable enterprise technology environments.
            </p>
          </div>

          {/* 5 Distinct Capability Blocks */}
          <div className="space-y-16">

            {/* Capability A: Server & Compute Operations (Image on Right) */}
            <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-white dark:bg-[#070E1E] border border-slate-200/80 dark:border-white/10 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                
                <div className="lg:col-span-6 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider">
                    <Server className="w-3.5 h-3.5 text-[#00A3E0]" />
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

                <div className="lg:col-span-6">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-900 aspect-[16/10] group">
                    <img
                      src={capabilities[0].image}
                      alt="Enterprise data center with server racks and compute equipment"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070E1E]/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#070E1E]/90 backdrop-blur-md border border-white/10 text-xs text-slate-300">
                      <span className="font-bold text-white block">Enterprise Compute &amp; Server Infrastructure</span>
                      <span className="text-slate-400 text-[11px]">Hardware health diagnostic reviews &bull; Operating environment administration</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Capability B: Network Operations (Image on Left) */}
            <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-white dark:bg-[#070E1E] border border-slate-200/80 dark:border-white/10 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-900 aspect-[16/10] group">
                    <img
                      src={capabilities[1].image}
                      alt="Professional network infrastructure visualization showing switches, routers, and connected enterprise systems"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070E1E]/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#070E1E]/90 backdrop-blur-md border border-white/10 text-xs text-slate-300">
                      <span className="font-bold text-white block">Network Connectivity &amp; Switching Operations</span>
                      <span className="text-slate-400 text-[11px]">Interface telemetry &bull; Configuration backup &bull; Link oversight</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider">
                    <Network className="w-3.5 h-3.5 text-[#00A3E0]" />
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

            {/* Capability C: Storage & Data Infrastructure (Image on Right) */}
            <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-white dark:bg-[#070E1E] border border-slate-200/80 dark:border-white/10 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                
                <div className="lg:col-span-6 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider">
                    <Database className="w-3.5 h-3.5 text-[#00A3E0]" />
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

                <div className="lg:col-span-6">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-900 aspect-[16/10] group">
                    <img
                      src={capabilities[2].image}
                      alt="Modern enterprise storage arrays and data infrastructure in a clean technical environment"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070E1E]/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#070E1E]/90 backdrop-blur-md border border-white/10 text-xs text-slate-300">
                      <span className="font-bold text-white block">Enterprise SAN &bull; NAS &bull; Data Fabric</span>
                      <span className="text-slate-400 text-[11px]">Storage capacity management &bull; LUN allocation &bull; Backup alignment</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Capability D: Virtualization & Cloud Infrastructure (Image on Left) */}
            <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-white dark:bg-[#070E1E] border border-slate-200/80 dark:border-white/10 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-900 aspect-[16/10] group">
                    <img
                      src={capabilities[3].image}
                      alt="Architectural visualization showing virtualized compute resources connected to cloud and on-premises infrastructure"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070E1E]/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#070E1E]/90 backdrop-blur-md border border-white/10 text-xs text-slate-300">
                      <span className="font-bold text-white block">Hypervisor Clusters &amp; Cloud Compute</span>
                      <span className="text-slate-400 text-[11px]">Host balancing &bull; VM lifecycle oversight &bull; Multi-cloud operational consistency</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider">
                    <Layers className="w-3.5 h-3.5 text-[#00A3E0]" />
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

            {/* Capability E: Infrastructure Monitoring & Maintenance (Image on Right) */}
            <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-white dark:bg-[#070E1E] border border-slate-200/80 dark:border-white/10 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                
                <div className="lg:col-span-6 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider">
                    <Activity className="w-3.5 h-3.5 text-[#00A3E0]" />
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

                <div className="lg:col-span-6">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-900 aspect-[16/10] group">
                    <img
                      src={capabilities[4].image}
                      alt="Professional infrastructure engineering environment showing server and network operations"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070E1E]/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#070E1E]/90 backdrop-blur-md border border-white/10 text-xs text-slate-300">
                      <span className="font-bold text-white block">Continuous Infrastructure Health Monitoring</span>
                      <span className="text-slate-400 text-[11px]">Hardware telemetry &bull; Planned maintenance &bull; Technical escalation paths</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: INFRASTRUCTURE OPERATIONS WORKFLOW (4-Stage Process)
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
              From Infrastructure Visibility to Operational Control
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              A structured operational workflow that uncovers infrastructure dependencies, establishes proactive oversight, ensures coordinated maintenance, and drives continuous operational refinement.
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

          {/* Active Stage Detailed Panel */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#00A3E0] block">
                  STAGE {approachStages[activeApproachStage].num} &bull; DETAILED OPERATIONAL ACTIVITIES
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  {approachStages[activeApproachStage].title}
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-[#00A3E0] text-xs font-bold">
                Operational Discipline
              </span>
            </div>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              {approachStages[activeApproachStage].description}
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Key Operational Deliverables &amp; Focus Tasks:
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

          {/* Mobile Selector Buttons */}
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
          SECTION 5: INFRASTRUCTURE ACROSS ENTERPRISE ENVIRONMENTS
          ========================================================================= */}
      <section id="environments" className="py-20 bg-slate-50 dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <Boxes className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>TECHNOLOGY LANDSCAPE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Infrastructure Operations Across Your Technology Landscape
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Infrastructure operations must account for the relationships between physical systems, virtualized resources, network connectivity, storage, and cloud platforms. Knooviq helps organizations establish consistent operational practices across their infrastructure landscape.
            </p>
          </div>

          {/* Dedicated Architecture Image Card */}
          <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl bg-slate-900 aspect-[21/9] sm:aspect-[16/7] group">
            <img
              src="/images/cloud/infra_ops_architecture.jpg"
              alt="Connected enterprise infrastructure architecture across physical, virtual, and cloud systems"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050B17]/95 via-[#050B17]/40 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#070E1E]/90 backdrop-blur-md border border-white/15 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-slate-300">
              <div className="space-y-0.5">
                <span className="font-bold text-white text-sm">Enterprise Technology Infrastructure Topology</span>
                <p className="text-slate-300 text-xs">Compute Racks &bull; Core Switching &bull; SAN Storage &bull; Hypervisor Clusters &bull; Cloud Landing Zones</p>
              </div>
              <span className="px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 font-bold shrink-0">
                Unified Infrastructure Landscape
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
                    Operational Continuity Focus:
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
          SECTION 6: OPERATIONAL GOVERNANCE & DOCUMENTATION
          ========================================================================= */}
      <section id="governance" className="py-20 bg-white dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <FileCheck className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>OPERATIONAL GOVERNANCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Consistency Through Operational Discipline
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Well-defined operational practices help organizations maintain clarity, reduce configuration drift, and ensure dependable coordination across teams.
            </p>
          </div>

          {/* Structured Governance Workflow Composition */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {governanceTenets.map((tenet, idx) => {
              const Icon = tenet.icon;
              return (
                <div
                  key={tenet.title}
                  className={`p-7 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 space-y-4 hover:border-[#00A3E0]/40 transition-all ${
                    idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/20 text-[#00A3E0] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {tenet.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {tenet.description}
                  </p>

                  <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex items-center gap-2 text-xs font-bold text-[#00A3E0]">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Governance Standard</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: PRACTICAL BUSINESS VALUE
          ========================================================================= */}
      <section id="value" className="py-20 bg-slate-50 dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>BUSINESS VALUE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              A Stronger Foundation for Enterprise IT
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Structured infrastructure management delivers dependable operational consistency, enhanced clarity, and resilience across the entire organization.
            </p>
          </div>

          {/* 5 Outcomes in Distinct Editorial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practicalOutcomes.map((outcome, idx) => {
              const Icon = outcome.icon;
              return (
                <div
                  key={outcome.title}
                  className={`p-7 rounded-2xl bg-white dark:bg-[#070E1E] border border-slate-200/80 dark:border-white/10 space-y-4 hover:border-[#00A3E0]/40 transition-all shadow-sm ${
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
          SECTION 8: CLOSING CALL TO ACTION BANNER
          ========================================================================= */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-[#070E1E] via-[#050B17] to-slate-950 text-white">
        {/* Subtle background graphic overlay */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <img
            src="/images/cloud/infra_ops_closing_banner.jpg"
            alt="Enterprise IT Infrastructure Operations Background"
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
                Build a More Dependable Infrastructure Foundation.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Strengthen infrastructure oversight, improve operational consistency, and establish practical management processes aligned with your enterprise technology environment.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-4 shrink-0 w-full lg:w-auto">
              <button
                type="button"
                onClick={() => handleOpenContact('Talk to Our Experts – Infrastructure Operations')}
                className="px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-gradient-to-r from-[#00A3E0] to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-lg shadow-cyan-500/30 flex items-center gap-2.5 group cursor-pointer"
              >
                <span>Talk to Our Cloud Experts</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                to="/cloud-operations/service-management"
                className="px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 hover:text-white border border-white/20 font-bold text-xs sm:text-sm tracking-wide transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>Explore Service Management</span>
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
                  Infrastructure Operations — Enterprise Infrastructure Visual
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
                src="/images/cloud/infra_ops_hero_wide.jpg"
                alt="Infrastructure Operations"
                className="max-h-[82vh] w-auto max-w-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default InfrastructureOperationsPage;
