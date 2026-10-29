import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Server,
  Database,
  RefreshCw,
  HardDrive,
  ShieldAlert,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Cpu,
  Layers,
  Network,
  Activity,
  FileText,
  FileCheck2,
  Workflow,
  Sparkles,
  Sliders,
  Clock,
  RotateCcw,
  BookOpen,
  FolderTree,
  ShieldCheck,
  CheckSquare,
  AlertTriangle,
  Scale,
  Maximize2,
  X
} from 'lucide-react';

interface ChildPageProps {
  onOpenContact?: (topic?: string) => void;
}

export const DisasterRecoveryPage: React.FC<ChildPageProps> = ({ onOpenContact }) => {
  const [activeMethodologyStep, setActiveMethodologyStep] = useState<number>(0);
  const [selectedDeliverable, setSelectedDeliverable] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Disaster Recovery – Restore, Rebuild, Get Back to Business | KNOOVIQ';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleOpenContact = (topic?: string) => {
    if (onOpenContact) {
      onOpenContact(topic || 'Disaster Recovery');
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Section 3: Why Disaster Recovery Matters (4 Benefits)
  const coreBenefits = [
    {
      id: 'reduce-downtime',
      title: 'Reduce Downtime',
      description:
        'Prepare recovery procedures that help restore critical technology services in a controlled manner, preventing chaotic ad-hoc troubleshooting during outages.',
      icon: Clock,
      highlight: 'Controlled restoration workflows'
    },
    {
      id: 'protect-data-integrity',
      title: 'Protect Data Integrity',
      description:
        'Establish appropriate backup, replication, verification, and restoration practices to guard databases, storage volumes, and transaction logs against permanent loss.',
      icon: HardDrive,
      highlight: 'Validated replication & snapshots'
    },
    {
      id: 'restore-critical-systems',
      title: 'Restore Critical Systems',
      description:
        'Coordinate recovery across interdependent applications, virtualized compute, network topologies, and foundational identity and authentication services.',
      icon: Server,
      highlight: 'Dependency-ordered recovery'
    },
    {
      id: 'strengthen-resilience',
      title: 'Strengthen Resilience',
      description:
        'Validate recovery plans through regular exercises and maintain technical readiness as hybrid cloud, multi-region, and SaaS architectures evolve.',
      icon: RotateCcw,
      highlight: 'Continuous technical validation'
    }
  ];

  // Section 5: Methodology Steps
  const methodologySteps = [
    {
      step: '01',
      title: 'Assess & Plan',
      tagline: 'Define technical recovery baselines.',
      icon: FolderTree,
      description:
        'Identify critical IT systems, map application dependencies, evaluate single points of failure, and establish clear recovery time and recovery point objectives.'
    },
    {
      step: '02',
      title: 'Build & Configure',
      tagline: 'Engineer redundant recovery pathways.',
      icon: Layers,
      description:
        'Prepare backup schedules, configure database replication, structure standby infrastructure, and document step-by-step restoration procedures.'
    },
    {
      step: '03',
      title: 'Test & Validate',
      tagline: 'Prove recoverability through drills.',
      icon: CheckCircle2,
      description:
        'Exercise restoration procedures in isolated sandboxes, verify technical dependencies, validate backup integrity, and benchmark actual recovery timing.'
    },
    {
      step: '04',
      title: 'Recover',
      tagline: 'Execute governed cutover playbooks.',
      icon: RotateCcw,
      description:
        'Execute approved procedures to restore systems, data, applications, and network routing in an orderly, pre-determined sequence during disruptive events.'
    },
    {
      step: '05',
      title: 'Improve',
      tagline: 'Refine runbooks and technical posture.',
      icon: RefreshCw,
      description:
        'Document exercise observations and post-incident findings, update runbook instructions, remediate configuration gaps, and refine the ongoing DR strategy.'
    }
  ];

  // Section 7: Deliverables Data
  const deliverables = [
    {
      id: 'dr-strategy',
      title: 'Disaster Recovery Strategy',
      subtitle: 'Technical recovery framework & governance',
      description:
        'Comprehensive architectural blueprint establishing Recovery Time Objectives (RTO), Recovery Point Objectives (RPO), multi-region failover models, tiering classifications, and technical recovery governance across all IT systems.',
      icon: Server,
      deliverableType: 'TECHNICAL BLUEPRINT',
      points: [
        'System criticality classification (Tier 0 to Tier 3)',
        'RTO & RPO targets mapped to application SLAs',
        'Multi-region & hybrid cloud failover architecture',
        'Technical roles, command escalation, and authority matrix'
      ]
    },
    {
      id: 'dependency-map',
      title: 'System & Application Dependency Map',
      subtitle: 'Full-stack topology & sequence matrix',
      description:
        'Detailed architectural visualization and sequence matrix mapping the exact upstream and downstream dependencies between databases, web services, microservices, identity directories, DNS, and external APIs.',
      icon: Network,
      deliverableType: 'TOPOLOGY REGISTER',
      points: [
        'Inter-system service dependency trees and APIs',
        'Database-to-application coupling and data pipelines',
        'Active Directory, IAM, and KMS cryptographic dependencies',
        'Optimal restoration sequence order to avoid circular deadlocks'
      ]
    },
    {
      id: 'backup-plan',
      title: 'Backup & Replication Plan',
      subtitle: 'Retention schedules, replication & immutability',
      description:
        'Exhaustive operational framework governing snapshot cadences, continuous asynchronous database replication, cross-region storage synchronization, retention windows, and air-gapped immutable backup locks.',
      icon: Database,
      deliverableType: 'DATA PROTECTION PLAN',
      points: [
        'Automated snapshot and differential backup schedules',
        'Cross-region / cross-cloud continuous replication topology',
        'Immutable retention policies (WORM vaults against ransomware)',
        'Automated checksum integrity verification & cataloging'
      ]
    },
    {
      id: 'recovery-runbooks',
      title: 'Recovery Runbooks',
      subtitle: 'Step-by-step technical restoration procedures',
      description:
        'Actionable, modular execution guides providing concrete CLI commands, console instructions, network routing reconfigurations, and database mount checklists for system administrators under outage pressure.',
      icon: BookOpen,
      deliverableType: 'OPERATIONAL PLAYBOOKS',
      points: [
        'Component-specific recovery procedures with command lines',
        'Database point-in-time recovery and log replay guides',
        'DNS, Anycast, and load balancer traffic redirection playbooks',
        'Smoke-test checklists and service readiness criteria'
      ]
    },
    {
      id: 'testing-findings',
      title: 'Recovery Testing & Validation Findings',
      subtitle: 'Empirical drill logs & bottleneck analysis',
      description:
        'Evidence-based technical reports documenting tabletop walkthroughs, sandbox recovery simulations, actual restoration timings achieved, observed configuration drifts, and procedural friction points.',
      icon: FileCheck2,
      deliverableType: 'VALIDATION REPORT',
      points: [
        'Timed recovery drill observations vs. target RTO/RPO',
        'Database restoration consistency check results',
        'Network routing and firewall failover verification',
        'Itemized gap inventory with technical remediation tickets'
      ]
    },
    {
      id: 'improvement-roadmap',
      title: 'Recovery Improvement Roadmap',
      subtitle: 'Prioritized technical resilience evolution',
      description:
        'Strategic multi-quarter program outlining infrastructure upgrades, automation of manual recovery steps (Infrastructure as Code), periodic drill schedules, and architecture reviews for new workloads.',
      icon: Sliders,
      deliverableType: 'STRATEGIC ROADMAP',
      points: [
        'Prioritized backlog of recovery automation initiatives',
        'Quarterly drill and tabletop exercise calendar',
        'Infrastructure as Code (IaC) templating for rapid rebuilds',
        'Annual architecture re-certification cadence'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#050B17] text-slate-800 dark:text-slate-100 transition-colors selection:bg-[#00A3E0]/20 selection:text-[#00A3E0]">
      {/* =========================================================================
          SECTION 1: HERO SECTION (Panoramic Full-Screen Cinematic Hero)
          ========================================================================= */}
      <section className="relative w-full min-h-[85vh] lg:min-h-[92vh] flex items-center overflow-hidden bg-[#030712] border-b border-white/10 pt-28 pb-16 sm:pt-32 sm:pb-20">

        {/* 100% Full-Bleed Panoramic Background Image — Spans Corner to Corner */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/images/cloud/avail_disaster_recovery_wide.jpg"
            alt="Disaster Recovery and Automated Multi-Region Failover Architecture"
            className="w-full h-full object-cover object-[68%_center] filter brightness-[1.06] contrast-[1.05]"
          />
          {/* Subtle directional gradient on left for razor-sharp typography readability; right 55%+ visual is 100% untouched */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/80 sm:via-[#030712]/60 via-35% to-transparent w-full lg:w-[52%] pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#030712] via-[#030712]/50 to-transparent pointer-events-none" />
        </div>



        {/* Main Content Container (Over the Left Side) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
          <div className="max-w-2xl lg:max-w-3xl space-y-6">

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#00A3E0] animate-pulse" />
              <span>IT INFRASTRUCTURE &amp; SERVICE RESTORATION</span>
            </div>

            {/* Main Heading & Subtitle */}
            <div className="space-y-3">
              <span className="block text-sm sm:text-base font-semibold uppercase tracking-wider text-[#00A3E0]">
                Disaster Recovery
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.12] drop-shadow-lg">
                Disaster Recovery
              </h1>
              <p className="text-lg sm:text-xl font-bold text-cyan-300 tracking-tight drop-shadow-md">
                Restore. Rebuild. Get Back to Business.
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl drop-shadow">
              Minimize disruption and recover with confidence. Knooviq helps organizations plan, prepare, and restore critical systems, applications, data, and infrastructure after unexpected outages or disruptive events.
            </p>




          </div>
        </div>
      </section>

      {/* DR Signals Ribbon directly below hero */}
      <div className="bg-[#050B17] border-b border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <div className="p-3.5 rounded-xl bg-slate-900/70 border border-white/10 backdrop-blur-md">
              <span className="font-bold uppercase tracking-wider text-cyan-400 block text-xs">
                Multi-Tier DR
              </span>
              <div className="text-sm font-bold text-white mt-1">Topology &amp; Architecture</div>
              <div className="text-xs text-slate-400 mt-0.5">On-prem, Cloud &amp; Hybrid</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/70 border border-white/10 backdrop-blur-md">
              <span className="font-bold uppercase tracking-wider text-cyan-400 block text-xs">
                Data Integrity
              </span>
              <div className="text-sm font-bold text-white mt-1">Replication Validation</div>
              <div className="text-xs text-slate-400 mt-0.5">RPO &amp; RTO Verification</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/70 border border-white/10 backdrop-blur-md">
              <span className="font-bold uppercase tracking-wider text-cyan-400 block text-xs">
                Tested Runbooks
              </span>
              <div className="text-sm font-bold text-white mt-1">Failover Execution</div>
              <div className="text-xs text-slate-400 mt-0.5">Step-by-Step Restoration</div>
            </div>
          </div>
        </div>
      </div>



      {/* =========================================================================
          SECTION 2: WHY DISASTER RECOVERY MATTERS
          ========================================================================= */}
      <section id="why-it-matters" className="py-20 lg:py-24 bg-white dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <ShieldAlert className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>PREPARED RESTORATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Be Ready for What’s Next
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Technology disruptions can result from infrastructure failures, accidental changes, cyber incidents, software issues, or environmental events. A well-prepared disaster recovery strategy helps organizations define restoration priorities, protect recoverable data, and bring essential technology services back online through controlled procedures.
            </p>
          </div>

          {/* 4 Benefits Horizontal Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreBenefits.map((benefit, idx) => {
              const IconComp = benefit.icon;
              return (
                <div
                  key={benefit.id}
                  className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300 flex flex-col justify-between space-y-5"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-[#00A3E0]">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400">0{idx + 1}</span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {benefit.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {benefit.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200/60 dark:border-white/5">
                    <span className="text-[11px] font-semibold text-[#00A3E0]">
                      &bull; {benefit.highlight}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: END-TO-END DISASTER RECOVERY CAPABILITIES (6 CAPABILITIES)
          ========================================================================= */}
      <section id="capabilities" className="py-20 lg:py-24 bg-slate-50 dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>CORE TECHNICAL DISCIPLINES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              End-to-End Recovery Support
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              From preparation to restoration, Knooviq helps organizations establish the plans, technology practices, and operational procedures needed to recover critical IT services after disruption.
            </p>
          </div>

          {/* Capabilities List - Combines numbered capability blocks, thin dividers, concise text, and selective imagery */}
          <div className="space-y-16">

            {/* 01. Recovery Planning & Strategy (Structured Block) */}
            <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 shadow-sm space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-5">
                <div className="flex items-center gap-4">
                  <span className="text-2xl sm:text-3xl font-black text-[#00A3E0] font-mono">01</span>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      Recovery Planning &amp; Strategy
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                      Understand critical systems, recovery dependencies, and establish structured restoration goals.
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-[#00A3E0] text-xs font-bold shrink-0">
                  Architectural Foundation
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    Effective disaster recovery starts with clear visibility into how technology systems support business operations. Knooviq helps IT teams evaluate server estates, cloud environments, and application interdependencies to define realistic Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO). We design recovery strategies tailored to organizational tolerances—from active-active multi-region deployments to warm standby and rapid automated rebuilds.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    By documenting recovery procedures, decision trees, and operational prerequisites before disruptions happen, teams gain predictable, auditable guidelines that eliminate guesswork during stressful outages.
                  </p>
                </div>

                <div className="lg:col-span-5 bg-slate-50 dark:bg-[#070E1E] p-5 rounded-xl border border-slate-200/60 dark:border-white/5 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white block">
                    Core Architectural Elements:
                  </span>
                  <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3E0] shrink-0 mt-0.5" />
                      <span><strong>IT service and dependency assessment:</strong> Catalog all databases, host servers, network gateways, and APIs.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3E0] shrink-0 mt-0.5" />
                      <span><strong>Recovery requirements and priorities:</strong> Establish defensible RTO and RPO targets for each service tier.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3E0] shrink-0 mt-0.5" />
                      <span><strong>Recovery strategy definition:</strong> Determine active-passive, warm standby, or cloud-native container replication patterns.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3E0] shrink-0 mt-0.5" />
                      <span><strong>Recovery procedures and documentation:</strong> Author centralized runbooks detailing prerequisites and command-line execution steps.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 02. Backup & Replication (With Image 3) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-6 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-black text-[#00A3E0] font-mono">02</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#00A3E0]">DATA PRESERVATION &amp; SYNCHRONIZATION</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Backup &amp; Replication
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  Data cannot be recovered if it was never captured or if replication failed unnoticed. Knooviq designs robust backup architectures and streaming replication pipelines that ensure current, intact copies of databases, file shares, and system state are readily accessible during restoration.
                </p>
                <div className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  <div className="p-3 rounded-xl bg-white dark:bg-[#0B1528] border border-slate-200/70 dark:border-white/5 space-y-1">
                    <strong className="text-slate-900 dark:text-white block">Backup strategy and scheduling</strong>
                    <span className="text-slate-500 dark:text-slate-400">Implement automated snapshot cadences, continuous incremental backups, and transaction log archiving tailored to data modification rates.</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white dark:bg-[#0B1528] border border-slate-200/70 dark:border-white/5 space-y-1">
                    <strong className="text-slate-900 dark:text-white block">Replication architecture</strong>
                    <span className="text-slate-500 dark:text-slate-400">Configure synchronous and asynchronous data replication across availability zones, secondary cloud regions, and air-gapped recovery targets.</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white dark:bg-[#0B1528] border border-slate-200/70 dark:border-white/5 space-y-1">
                    <strong className="text-slate-900 dark:text-white block">Backup integrity verification &amp; retention planning</strong>
                    <span className="text-slate-500 dark:text-slate-400">Automate recurring test restores, verify cryptographic checksums, and enforce immutability policies to protect against ransomware tampering.</span>
                  </div>
                </div>
              </div>

              {/* Image 3 */}
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-900 group aspect-[16/10]">
                  <img
                    src="/images/disaster-recovery-backup.webp"
                    alt="Storage engineer inspecting SAN storage arrays and automated enterprise cloud backup appliance racks in an enterprise data center"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050B17]/90 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 text-xs text-white">
                    <span className="font-bold block text-sm">Enterprise Storage &amp; Backup Replication Environment</span>
                    <span className="text-slate-300 text-[11px]">Continuous database replication &bull; Immutable backup vaults &bull; Checksum integrity audits</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 03. Infrastructure Recovery (With Image 2) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Image 2 */}
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-900 group aspect-[16/10]">
                  <img
                    src="/images/disaster-recovery-infrastructure.webp"
                    alt="Modern enterprise server racks and technology infrastructure in a high-density corporate data center"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050B17]/90 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 text-xs text-white">
                    <span className="font-bold block text-sm">Enterprise Server &amp; Compute Infrastructure Fabric</span>
                    <span className="text-slate-300 text-[11px]">Virtualized host restoration &bull; Cloud network re-provisioning &bull; Hybrid environment failover</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-black text-[#00A3E0] font-mono">03</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#00A3E0]">COMPUTE, STORAGE &amp; NETWORK FABRIC</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Infrastructure Recovery
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  Applications require underlying compute, hypervisors, network routes, and storage arrays to function. Knooviq establishes standardized recovery workflows that reconstruct supporting infrastructure across on-premises data centers, private cloud clusters, hyperscaler public clouds, and hybrid configurations.
                </p>
                <div className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  <div className="p-3 rounded-xl bg-white dark:bg-[#0B1528] border border-slate-200/70 dark:border-white/5 space-y-1">
                    <strong className="text-slate-900 dark:text-white block">Infrastructure recovery planning &amp; configuration</strong>
                    <span className="text-slate-500 dark:text-slate-400">Utilize declarative Infrastructure as Code (IaC) templates to re-provision identical environments with pre-validated security groups, subnets, and routes.</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white dark:bg-[#0B1528] border border-slate-200/70 dark:border-white/5 space-y-1">
                    <strong className="text-slate-900 dark:text-white block">Cloud and virtual machine restoration</strong>
                    <span className="text-slate-500 dark:text-slate-400">Restore VM images, container registries, and server instances from remote snapshot repositories directly into target availability zones.</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white dark:bg-[#0B1528] border border-slate-200/70 dark:border-white/5 space-y-1">
                    <strong className="text-slate-900 dark:text-white block">Network and storage dependencies</strong>
                    <span className="text-slate-500 dark:text-slate-400">Reconfigure VPN tunnels, Anycast IP routing, DNS pointers, and SAN/NAS volume mount mappings to re-establish connectivity seamlessly.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 04. Application Recovery (With Image 4) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-6 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-black text-[#00A3E0] font-mono">04</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#00A3E0]">ORDERLY SERVICE RESTORATION</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Application Recovery
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  Restoring servers in random order causes database deadlocks and service connection errors. Knooviq helps organizations document and execute the correct sequencing of enterprise applications, accounting for database mounts, credential services, message queues, and upstream third-party APIs.
                </p>
                <div className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  <div className="p-3 rounded-xl bg-white dark:bg-[#0B1528] border border-slate-200/70 dark:border-white/5 space-y-1">
                    <strong className="text-slate-900 dark:text-white block">Application dependency mapping</strong>
                    <span className="text-slate-500 dark:text-slate-400">Document the precise multi-tier relationships linking databases, microservices, authentication servers, and web proxies.</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white dark:bg-[#0B1528] border border-slate-200/70 dark:border-white/5 space-y-1">
                    <strong className="text-slate-900 dark:text-white block">Database and application restoration</strong>
                    <span className="text-slate-500 dark:text-slate-400">Bring database engines online, apply transactional replays, and verify schema integrity before launching dependent application services.</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white dark:bg-[#0B1528] border border-slate-200/70 dark:border-white/5 space-y-1">
                    <strong className="text-slate-900 dark:text-white block">Recovery runbooks &amp; technical validation checks</strong>
                    <span className="text-slate-500 dark:text-slate-400">Execute deterministic smoke tests, endpoint health probes, and synthetic user transactions to confirm full functionality before release.</span>
                  </div>
                </div>
              </div>

              {/* Image 4 */}
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-900 group aspect-[16/10]">
                  <img
                    src="/images/disaster-recovery-applications.webp"
                    alt="Enterprise software architects reviewing application database dependency topology diagram on a screen in a collaborative meeting"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050B17]/90 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 text-xs text-white">
                    <span className="font-bold block text-sm">Application Dependency Mapping &amp; Sequencing</span>
                    <span className="text-slate-300 text-[11px]">Database topology &bull; Service orchestration &bull; Smoke-test validation criteria</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 05. Testing & Validation (With Image 5) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Image 5 */}
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-900 group aspect-[16/10]">
                  <img
                    src="/images/disaster-recovery-testing.webp"
                    alt="IT systems engineers conducting a disaster recovery simulation exercise in a modern glass conference room"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050B17]/90 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 text-xs text-white">
                    <span className="font-bold block text-sm">Disaster Recovery Simulation &amp; Runbook Review</span>
                    <span className="text-slate-300 text-[11px]">Tabletop walkthroughs &bull; Sandbox restoration testing &bull; Gap identification logs</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-black text-[#00A3E0] font-mono">05</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#00A3E0]">VERIFICATION &amp; AUDITING</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Testing &amp; Validation
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  Untested recovery procedures routinely fail when real disruptions strike. Knooviq designs structured recovery simulations and sandbox restoration drills that prove procedures work as documented, give technical teams practical operational familiarity, and reveal gaps without impacting live production traffic.
                </p>
                <div className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  <div className="p-3 rounded-xl bg-white dark:bg-[#0B1528] border border-slate-200/70 dark:border-white/5 space-y-1">
                    <strong className="text-slate-900 dark:text-white block">Recovery simulations and tabletop drills</strong>
                    <span className="text-slate-500 dark:text-slate-400">Step through diverse scenarios—including datacenter power loss, network partition, and ransomware lockouts—with engineering teams.</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white dark:bg-[#0B1528] border border-slate-200/70 dark:border-white/5 space-y-1">
                    <strong className="text-slate-900 dark:text-white block">Backup restoration tests &amp; application validation</strong>
                    <span className="text-slate-500 dark:text-slate-400">Spin up isolated environments directly from backup snapshots, verifying data consistency and benchmarking recovery duration against targets.</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white dark:bg-[#0B1528] border border-slate-200/70 dark:border-white/5 space-y-1">
                    <strong className="text-slate-900 dark:text-white block">Gap identification and corrective action tracking</strong>
                    <span className="text-slate-500 dark:text-slate-400">Catalog missing configuration parameters, outdated credentials, and procedural bottlenecks, assigning remediation tickets with clear deadlines.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 06. Ongoing Support & Improvement (Structured Block) */}
            <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 shadow-sm space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-5">
                <div className="flex items-center gap-4">
                  <span className="text-2xl sm:text-3xl font-black text-[#00A3E0] font-mono">06</span>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      Ongoing Support &amp; Improvement
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                      Keep recovery plans synchronized with ongoing infrastructure and application evolution.
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-[#00A3E0] text-xs font-bold shrink-0">
                  Continuous Readiness
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    Enterprise IT environments change constantly—new microservices launch, databases expand, cloud configurations adapt, and third-party SaaS integrations are introduced. A static recovery plan becomes obsolete quickly. Knooviq implements an ongoing governance rhythm that guarantees disaster recovery plans, runbooks, and automation scripts remain synchronized with technology changes.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    Through recurring architecture audits, periodic procedure reviews, and tracking of post-drill corrective actions, we help organizations maintain long-term technical resilience without operational decay.
                  </p>
                </div>

                <div className="lg:col-span-5 bg-slate-50 dark:bg-[#070E1E] p-5 rounded-xl border border-slate-200/60 dark:border-white/5 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white block">
                    Ongoing Governance Areas:
                  </span>
                  <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3E0] shrink-0 mt-0.5" />
                      <span><strong>Recovery plan maintenance:</strong> Conduct scheduled quarterly audits of runbooks, access keys, and contact trees.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3E0] shrink-0 mt-0.5" />
                      <span><strong>Periodic procedure reviews:</strong> Update restoration instructions whenever major application releases or migrations take place.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3E0] shrink-0 mt-0.5" />
                      <span><strong>Configuration and dependency updates:</strong> Keep topology maps and database replication parameters current with production.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3E0] shrink-0 mt-0.5" />
                      <span><strong>Continuous improvement planning:</strong> Convert exercise findings into prioritized automation tasks to continually reduce recovery time.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: DISASTER RECOVERY METHODOLOGY (A Structured Path to Recovery)
          ========================================================================= */}
      <section id="methodology" className="py-20 lg:py-24 bg-white dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <Workflow className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>STEP-BY-STEP TECHNICAL METHODOLOGY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              A Structured Path to Recovery
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              A disciplined, engineering-backed five-step lifecycle ensuring technology systems and data can be restored accurately, securely, and without delay.
            </p>
          </div>

          {/* Desktop Horizontal Timeline / Mobile Vertical Sequence */}
          <div className="relative">
            {/* Connecting line on desktop */}
            <div className="hidden lg:block absolute top-[44px] left-[5%] right-[5%] h-0.5 bg-slate-200 dark:bg-white/10 z-0" />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 relative z-10">
              {methodologySteps.map((step, idx) => {
                const IconComp = step.icon;
                const isSelected = activeMethodologyStep === idx;
                return (
                  <div
                    key={step.step}
                    onClick={() => setActiveMethodologyStep(idx)}
                    className={`p-6 rounded-2xl transition-all duration-300 cursor-pointer text-left flex flex-col justify-between ${
                      isSelected
                        ? 'bg-slate-50 dark:bg-[#0B1528] border-2 border-[#00A3E0] shadow-xl ring-2 ring-[#00A3E0]/20'
                        : 'bg-white dark:bg-[#070E1E] border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20'
                    }`}
                  >
                    <div className="space-y-4">
                      {/* Step Header */}
                      <div className="flex items-center justify-between">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm transition-colors ${
                            isSelected
                              ? 'bg-[#00A3E0] text-white shadow-md shadow-cyan-500/20'
                              : 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300'
                          }`}
                        >
                          <IconComp className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-mono font-bold text-slate-400">
                          STEP {step.step}
                        </span>
                      </div>

                      {/* Title & Tagline */}
                      <div className="space-y-1">
                        <h3 className="text-base font-bold text-slate-900 dark:text-white">
                          {step.title}
                        </h3>
                        <p className="text-xs font-medium text-[#00A3E0]">
                          {step.tagline}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                        {step.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                      <span>Phase {idx + 1} of 5</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#00A3E0]" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: RECOVERY OUTCOMES (Stronger Recovery. Greater Confidence.)
          ========================================================================= */}
      <section id="outcomes" className="py-20 lg:py-24 bg-slate-50 dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Supporting Image (Image 6) */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/15 shadow-2xl bg-slate-900 group aspect-[16/10]">
                <img
                  src="/images/disaster-recovery-outcomes.webp"
                  alt="Senior IT systems engineer reviewing disaster recovery runbooks and technical restoration documentation on a laptop"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B17]/90 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-xs text-white">
                  <span className="font-bold block text-sm">Documented Restoration Procedures &amp; Runbook Review</span>
                  <span className="text-slate-300 text-[11px]">Systematic checklists &bull; Architecture notes &bull; Verified failover readiness</span>
                </div>
              </div>
            </div>

            {/* Right Explanatory Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00A3E0]" />
                <span>OPERATIONAL CONFIDENCE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                Stronger Recovery. Greater Confidence.
              </h2>

              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                A well-maintained disaster recovery approach gives teams a clear framework for responding to technology disruptions, restoring systems in a controlled sequence, and validating that recovered services are ready for use.
              </p>

              {/* 4 Outcome Highlights */}
              <div className="space-y-3.5 pt-2">
                <div className="p-3.5 rounded-xl bg-white dark:bg-[#0B1528] border border-slate-200/70 dark:border-white/5 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 dark:text-white text-xs sm:text-sm block">Clear restoration priorities and responsibilities</strong>
                    <span className="text-xs text-slate-500 dark:text-slate-400">Technical responders know precisely which systems recover first and who holds execution authority.</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white dark:bg-[#0B1528] border border-slate-200/70 dark:border-white/5 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 dark:text-white text-xs sm:text-sm block">More structured system and data recovery procedures</strong>
                    <span className="text-xs text-slate-500 dark:text-slate-400">Deterministic steps replace improvised troubleshooting, protecting databases and storage volumes from corruption.</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white dark:bg-[#0B1528] border border-slate-200/70 dark:border-white/5 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 dark:text-white text-xs sm:text-sm block">Better visibility into application and infrastructure dependencies</strong>
                    <span className="text-xs text-slate-500 dark:text-slate-400">Comprehensive topology registers eliminate circular dependencies and unmapped third-party API blockers.</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white dark:bg-[#0B1528] border border-slate-200/70 dark:border-white/5 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 dark:text-white text-xs sm:text-sm block">Documented recovery testing and improvement actions</strong>
                    <span className="text-xs text-slate-500 dark:text-slate-400">Empirical drill logs provide leadership and auditors with verified evidence of technological recoverability.</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-cyan-50/80 dark:bg-cyan-950/20 border border-cyan-200/60 dark:border-cyan-400/20 text-xs text-slate-700 dark:text-slate-300">
                <span className="font-bold text-[#00A3E0] block mb-1">Realistic Assurance:</span>
                While no organization can prevent all external disruptive events, disciplined disaster recovery planning ensures your technical team can restore services methodically, reliably, and with full operational clarity.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: DISASTER RECOVERY DELIVERABLES
          ========================================================================= */}
      <section id="deliverables" className="py-20 lg:py-24 bg-white dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <FileText className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>TECHNICAL ARTIFACTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Disaster Recovery Deliverables
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Actionable engineering assets and operational documentation formulated during a Knooviq disaster recovery engagement.
            </p>
          </div>

          {/* Deliverables Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item, idx) => {
              const IconComp = item.icon;
              const isSelected = selectedDeliverable === idx;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedDeliverable(isSelected ? null : idx)}
                  className={`p-6 sm:p-7 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-5 ${
                    isSelected
                      ? 'border-[#00A3E0] shadow-xl ring-2 ring-[#00A3E0]/20'
                      : 'border-slate-200/80 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 shadow-sm'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-white dark:bg-white/5 flex items-center justify-center text-[#00A3E0] border border-slate-200/60 dark:border-white/10">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-white dark:bg-white/5 text-slate-500 dark:text-slate-400 border border-slate-200/60 dark:border-white/5">
                        {item.deliverableType}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#00A3E0] font-medium">
                        {item.subtitle}
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {item.description}
                    </p>

                    <div className="pt-2 border-t border-slate-200/60 dark:border-white/5 space-y-2">
                      <span className="text-[11px] font-bold text-slate-800 dark:text-slate-200 block">
                        Included Technical Components:
                      </span>
                      <ul className="space-y-1.5 text-[11px] text-slate-500 dark:text-slate-400">
                        {item.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-1.5">
                            <span className="text-[#00A3E0] font-bold mt-0.5">&bull;</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-200/60 dark:border-white/5 flex items-center justify-between text-xs text-[#00A3E0] font-semibold">
                    <span>Consult on deliverable scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: BUSINESS CONTINUITY RELATIONSHIP
          ========================================================================= */}
      <section id="relationship" className="py-20 lg:py-24 bg-slate-50 dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <Scale className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>DISCIPLINE RELATIONSHIP</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Disaster Recovery and Business Continuity
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Understanding how technology restoration connects to wider organizational resilience.
            </p>
          </div>

          {/* Clean Split Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {/* Box 1: Disaster Recovery */}
            <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 shadow-sm space-y-5">
              <div>
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-[#00A3E0] text-xs font-bold uppercase tracking-wider">
                  TECHNICAL FOCUS
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Disaster Recovery (DR)
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                <strong>Disaster Recovery</strong> focuses on restoring IT systems, infrastructure, applications, and data after a disruptive event.
              </p>

              <div className="pt-2 space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
                <p>
                  <strong>Domain:</strong> Cloud workloads, storage volumes, virtual machines, database consistency, network routes, and automated failover.
                </p>
                <p>
                  <strong>Lead Ownership:</strong> IT systems engineers, cloud architects, database administrators, and network operations leads.
                </p>
                <p>
                  <strong>Metric of Success:</strong> Restoring technological infrastructure and data availability within agreed RTO and RPO limits.
                </p>
              </div>
            </div>

            {/* Box 2: Business Continuity */}
            <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 shadow-sm space-y-5">
              <div>
                <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-500 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
                  OPERATIONAL FOCUS
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Business Continuity (BC)
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                <strong>Business Continuity</strong> focuses on maintaining or resuming essential business functions, coordinating people and processes, and keeping operations moving during disruption.
              </p>

              <div className="pt-2 space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
                <p>
                  <strong>Domain:</strong> Workforce safety, alternate facility relocation, manual business workarounds, supplier communication, and customer fulfillment.
                </p>
                <p>
                  <strong>Lead Ownership:</strong> Executive leadership, business unit heads, risk officers, and crisis communications leads.
                </p>
                <p>
                  <strong>Metric of Success:</strong> Preserving commercial transactions, brand reputation, regulatory compliance, and business viability.
                </p>
              </div>
            </div>
          </div>

          {/* Integration Summary */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-blue-500/5 to-transparent border border-cyan-500/20 text-slate-700 dark:text-slate-300 text-sm leading-relaxed space-y-2">
            <div className="flex items-center gap-2 text-[#00A3E0] font-bold text-sm">
              <ShieldCheck className="w-4 h-4 text-[#00A3E0]" />
              <span>Coordinated Alignment</span>
            </div>
            <p>
              Disaster recovery provides the technical capability that enables business continuity. When an outage occurs, disaster recovery engineers restore servers, rebuild networks, and mount replicated databases. Simultaneously, business continuity teams guide employees on alternate procedures, manual paper processes, and customer updates while systems recover. Synchronized priority mapping ensures that technology recovery orders match core business commitments.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: FINAL CTA
          ========================================================================= */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-[#050B17] border-t border-white/10 overflow-hidden text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00A3E0]/10 via-transparent to-blue-900/10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="rounded-3xl p-8 sm:p-12 lg:p-14 bg-gradient-to-r from-blue-900/30 via-cyan-950/30 to-slate-900/60 border border-cyan-500/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 backdrop-blur-sm">

            <div className="space-y-4 max-w-2xl text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 block">
                SECURITY &amp; RESILIENCE &bull; DISASTER RECOVERY
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
                Ready to Strengthen Your Recovery Strategy?
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Let's build a disaster recovery approach that fits your business, technology environment, critical systems, and recovery requirements.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-4 shrink-0 w-full lg:w-auto">
              <button
                type="button"
                onClick={() => handleOpenContact('Talk to Our Experts – Disaster Recovery')}
                className="px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-gradient-to-r from-[#00A3E0] to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-lg shadow-cyan-500/30 flex items-center gap-2.5 group cursor-pointer"
              >
                <span>Talk to Our Cloud Experts</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                to="/cloud-operations/cybersecurity"
                className="px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 hover:text-white border border-white/20 font-bold text-xs sm:text-sm tracking-wide transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>Explore Cybersecurity</span>
                <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default DisasterRecoveryPage;
