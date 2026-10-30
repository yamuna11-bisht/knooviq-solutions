import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Network,
  Server,
  Cloud,
  ShieldCheck,
  Layers,
  Activity,
  CheckCircle2,
  ArrowRight,
  Maximize2,
  X,
  Cpu,
  Database,
  Lock,
  Workflow,
  RefreshCw,
  FileCheck,
  Sliders,
  Globe,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Zap,
  BarChart3,
  Terminal,
  ArrowUpRight,
  HardDrive,
  GitBranch,
  Shield,
  KeyRound,
  Boxes,
  Compass,
  SlidersHorizontal,
  FolderSync
} from 'lucide-react';
import { RelatedCloudServices } from '../../components/cloud/RelatedCloudServices';
import { CloudConsultationCTA } from '../../components/cloud/CloudConsultationCTA';

interface HybridCloudPageProps {
  onOpenContact?: (topic?: string) => void;
}

interface LightboxState {
  url: string;
  title: string;
  subtitle: string;
  figure?: string;
  badge?: string;
}

export const HybridCloudPage: React.FC<HybridCloudPageProps> = ({ onOpenContact }) => {
  const [lightboxImage, setLightboxImage] = useState<LightboxState | null>(null);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    document.title = 'Hybrid Cloud Architecture & Orchestration | KNOOVIQ';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleDiscussRequirements = () => {
    if (onOpenContact) {
      onOpenContact('Hybrid Cloud Architecture & Connectivity');
    }
  };

  const handleExploreArchitecture = () => {
    const el = document.getElementById('connected-architecture');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Section 4 Timeline Steps
  const migrationSteps = [
    {
      id: 'step-discover',
      stepNumber: '01',
      title: 'Discover',
      tagline: 'Automated Topology & Workload Discovery',
      description:
        'Deploy agentless telemetry collectors to map every virtual machine, bare-metal server, container cluster, storage volume, and network port across your existing on-premises datacenters.',
      capabilities: [
        'Automated hardware & hypervisor inventory capture',
        'Process-level dependency and communication mapping',
        'Network port, protocol, and packet volume telemetry',
        'Storage utilization and IOPS profile benchmarking'
      ],
      deliverable: 'Comprehensive Hybrid Asset & Dependency Catalog'
    },
    {
      id: 'step-assess',
      stepNumber: '02',
      title: 'Assess Dependencies',
      tagline: 'Latency Bounds & Application Compatibility',
      description:
        'Analyze cross-system communication patterns and latency sensitivities. We classify every workload by compliance posture, database coupling, and technical migration feasibility.',
      capabilities: [
        'East-West network latency threshold modeling',
        'Database transactional coupling & lock contention analysis',
        'Operating system, kernel, and driver compatibility audits',
        'Regulatory sovereignty and jurisdictional boundary check'
      ],
      deliverable: 'Workload Affinity & Migration Feasibility Scorecard'
    },
    {
      id: 'step-select',
      stepNumber: '03',
      title: 'Select Environment',
      tagline: 'Intelligent Workload Placement Framework',
      description:
        'Match each workload to its optimal home—on-premises, dedicated private cloud, or public hyperscaler—based on latency requirements, security classifications, and unit cost curves.',
      capabilities: [
        '6R migration strategy assignment (Rehost, Replatform, Refactor, Retain)',
        'Private vs. public cloud TCO and egress traffic modeling',
        'High-IOPS and low-latency hardware placement rules',
        'Elastic burst capacity and autoscaling tier assignment'
      ],
      deliverable: 'Workload Target Topology & Network Routing Matrix'
    },
    {
      id: 'step-migrate',
      stepNumber: '04',
      title: 'Migrate or Integrate',
      tagline: 'Non-Disruptive Data Movement & API Modernization',
      description:
        'Execute phased workload shifts using block-level continuous replication, live hypervisor migrations, or API facades without freezing daily enterprise business operations.',
      capabilities: [
        'Continuous Change Data Capture (CDC) replication pipelines',
        'Live virtual machine vMotion over dedicated Direct Connect links',
        'API proxy and microservices strangler-fig facades',
        'Bi-directional synchronization for phased cutovers'
      ],
      deliverable: 'Automated Cutover Runbooks & Verified Data Synchronization'
    },
    {
      id: 'step-validate',
      stepNumber: '05',
      title: 'Validate',
      tagline: 'Synthetic Testing & Resiliency Verification',
      description:
        'Conduct end-to-end performance benchmarking, synthetic transaction monitoring, security perimeter checks, and automated disaster recovery failback drills before sign-off.',
      capabilities: [
        'End-to-end latency and throughput regression benchmarks',
        'Zero-trust network access (ZTNA) policy audits',
        'Automated disaster failover and failback drills',
        'FinOps telemetry baseline and cost anomaly alarms'
      ],
      deliverable: 'Production Certification & 24/7 Operations Handover'
    }
  ];

  // Frequently Asked Questions
  const faqs = [
    {
      q: 'How does Knooviq guarantee sub-millisecond connectivity in hybrid setups?',
      a: 'We architect redundant private interconnects (such as AWS Direct Connect, Azure ExpressRoute, or Google Cloud Interconnect) paired with carrier-neutral colocation facilities and BGP dynamic routing. This bypasses the public internet entirely, ensuring deterministic latency and predictable throughput.'
    },
    {
      q: 'Can we retain legacy on-premises ERP systems while building new apps in the cloud?',
      a: 'Yes. This is the hallmark of modern hybrid architectures. We establish secure API gateways, message queues (such as Apache Kafka), and change-data-capture pipelines that allow cloud-native microservices to exchange transactional data with legacy core databases in real time.'
    },
    {
      q: 'How do you handle security and compliance across different cloud platforms?',
      a: 'We implement a unified zero-trust security architecture featuring centralized identity federation (Entra ID / Okta), MACsec line-rate encryption across dedicated links, software-defined microsegmentation, and continuous policy-as-code guardrails via Open Policy Agent (OPA).'
    },
    {
      q: 'What happens if a network link between our datacenter and the public cloud drops?',
      a: 'Our hybrid designs incorporate multi-carrier redundancy with automated BGP fast-reroute and dual IPsec VPN tunnels as hot-standby paths. Critical edge and on-premises workloads are architected with local survivability so factory floors or local operations never stop even during WAN disruptions.'
    },
    {
      q: 'How does Knooviq prevent unexpected cloud egress charges in hybrid environments?',
      a: 'We design intelligent data placement architectures that keep chatty, transaction-heavy database traffic local. High-volume data transfers utilize dedicated interconnect pricing (which costs up to 60-70% less than public internet egress), complemented by active FinOps telemetry and egress quotas.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#040812] text-slate-900 dark:text-slate-100 selection:bg-[#00A3E0]/30 selection:text-[#00A3E0] transition-colors duration-300">
      {/* ============================================================ */}
      {/* 1. HERO SECTION: Full-Screen Panoramic Hero with Full-Bleed Hybrid Image & Text Overlay */}
      {/* ============================================================ */}
      <section className="relative w-full min-h-[calc(100vh-5rem)] flex items-center overflow-hidden bg-[#040812] text-white border-b border-cyan-900/30">
        
        {/* Full-Bleed Panoramic Background Image — Spans 100% of Screen */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/cloud/hybrid_cloud_hero.png"
            alt="Enterprise Hybrid Cloud & Orchestration"
            className="w-full h-full object-cover object-center lg:object-[65%_center] filter brightness-105 contrast-105"
          />
          {/* Directional scrim: smoothly protects text readability on the left while keeping center & right visuals 100% bright */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#040812] via-[#040812]/85 sm:via-[#040812]/70 md:via-[#040812]/50 to-transparent w-full lg:w-3/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040812] via-transparent to-[#040812]/50" />
          <div className="absolute inset-0 bg-[radial-gradient(#00A3E0_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-16 sm:py-20 lg:py-24 space-y-8">

          <div className="max-w-2xl lg:max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 text-xs font-mono font-semibold tracking-wide uppercase backdrop-blur-md">
              <Network className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>Enterprise Hybrid Cloud &amp; Orchestration</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight text-white leading-[1.12] drop-shadow-md">
              Connect Your Enterprise.{' '}
              <span className="bg-gradient-to-r from-[#00A3E0] via-cyan-300 to-sky-400 bg-clip-text text-transparent">
                Orchestrate Your Cloud.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl drop-shadow-sm">
              Bring private infrastructure, public cloud services, and on-premises applications together through a
              coordinated hybrid cloud architecture. Knooviq helps enterprises establish secure connectivity,
              intelligent workload placement, and operational consistency across complex IT environments.
            </p>


            {/* Technical Value Indicators */}
            <div className="pt-4 border-t border-slate-700/60 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-800/90 shadow-md">
                <div className="text-[10px] font-mono text-cyan-400 font-semibold uppercase">Latency</div>
                <div className="text-xs font-bold text-white mt-0.5">&lt;5ms Link</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-800/90 shadow-md">
                <div className="text-[10px] font-mono text-cyan-400 font-semibold uppercase">Security</div>
                <div className="text-xs font-bold text-white mt-0.5">Zero-Trust</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-800/90 shadow-md">
                <div className="text-[10px] font-mono text-cyan-400 font-semibold uppercase">Control</div>
                <div className="text-xs font-bold text-white mt-0.5">Policy Plane</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-800/90 shadow-md">
                <div className="text-[10px] font-mono text-cyan-400 font-semibold uppercase">Agility</div>
                <div className="text-xs font-bold text-white mt-0.5">Bi-Directional</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 1 — A CONNECTED HYBRID ARCHITECTURE                   */}
      {/* Layout: Wide architectural diagram with explanatory text.      */}
      {/* ============================================================ */}
      <section id="connected-architecture" className="py-20 lg:py-28 bg-white dark:bg-[#060D1A] transition-colors border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Header */}
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#00A3E0] dark:text-cyan-400">
              <Layers className="w-4 h-4" />
              <span>Section 01 / Architectural Interoperability</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              A Connected Hybrid Architecture
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Enterprise workloads no longer live in silos. Modern hybrid architecture synchronizes on-premises systems,
              dedicated private cloud hardware, and public cloud platforms into a cohesive operational ecosystem.
              Through dedicated fiber interconnects, federated identity, standardized APIs, and controlled data exchange,
              your applications communicate with deterministic performance and enterprise security.
            </p>
          </div>

          {/* Wide Architectural Diagram & Explanatory Presentation */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#071224] p-6 lg:p-8 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Wide Visual Diagram / Image 2 */}
              <div className="lg:col-span-7">
                <div className="relative rounded-xl overflow-hidden border border-slate-300 dark:border-slate-700/80 bg-slate-900 aspect-[16/9] group shadow-inner">
                  <img
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=85"
                    alt="Hybrid Infrastructure Topology: Optical Interconnects, Identity Federation, and Secure Service Mesh"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/80 via-transparent to-slate-950/20 pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white bg-slate-950/80 backdrop-blur-md px-3.5 py-2 rounded-lg border border-slate-700 select-text">
                    <span className="font-mono text-cyan-400 font-semibold">FIG 1.1: Multi-Environment Topology</span>
                    <span className="text-slate-400 text-[11px]">BGP EVPN • mTLS APIs • Sync CDC</span>
                  </div>
                </div>
              </div>

              {/* Explanatory Pillars of Connection */}
              <div className="lg:col-span-5 space-y-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Four Pillars of Hybrid Interoperability
                </h3>
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                    <div className="flex items-start gap-2.5">
                      <div className="p-1.5 rounded-md bg-cyan-100 dark:bg-cyan-950 text-[#00A3E0] shrink-0 mt-0.5">
                        <Network className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 dark:text-white">Deterministic Connectivity</h4>
                        <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                          Direct fiber cross-connects (Direct Connect / ExpressRoute) providing dedicated bandwidth and sub-5ms packet transport.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                    <div className="flex items-start gap-2.5">
                      <div className="p-1.5 rounded-md bg-cyan-100 dark:bg-cyan-950 text-[#00A3E0] shrink-0 mt-0.5">
                        <KeyRound className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 dark:text-white">Identity &amp; Directory Federation</h4>
                        <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                          Single-pane directory integration bridging on-premises Active Directory with Entra ID, Okta, and cloud IAM roles.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                    <div className="flex items-start gap-2.5">
                      <div className="p-1.5 rounded-md bg-cyan-100 dark:bg-cyan-950 text-[#00A3E0] shrink-0 mt-0.5">
                        <Workflow className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 dark:text-white">Managed API &amp; Service Mesh</h4>
                        <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                          Mutual TLS (mTLS) gateways and Envoy proxy meshes enabling secure cross-boundary service-to-service calls.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                    <div className="flex items-start gap-2.5">
                      <div className="p-1.5 rounded-md bg-cyan-100 dark:bg-cyan-950 text-[#00A3E0] shrink-0 mt-0.5">
                        <FolderSync className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 dark:text-white">Controlled Data Exchange</h4>
                        <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                          Change Data Capture (CDC) streaming pipelines and synchronous replication queues for zero data loss.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 2 — CHOOSE THE RIGHT ENVIRONMENT FOR EVERY WORKLOAD  */}
      {/* Layout: Three visually distinct columns or interconnected    */}
      {/*         panels explaining On-Prem, Private, and Public Cloud. */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-28 bg-slate-50 dark:bg-[#040812] transition-colors border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#00A3E0] dark:text-cyan-400">
              <Boxes className="w-4 h-4" />
              <span>Section 02 / Placement Strategy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Choose the Right Environment for Every Workload
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              True hybrid agility isn’t about putting everything in one place—it is about placing every workload where
              it performs best, satisfies regulatory mandates, and delivers the most predictable economic outcome.
            </p>
          </div>

          {/* Three Interconnected Panels */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Column 1: On-Premises Infrastructure */}
            <div className="rounded-2xl bg-white dark:bg-[#071224] border-2 border-slate-300 dark:border-slate-700 p-6 lg:p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    <Server className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono font-bold uppercase px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    On-Premises
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">On-Premises Infrastructure</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Direct Physical &amp; Local Hardware Control</p>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Best suited for legacy monolithic engines, industrial SCADA systems, factory-floor robotics, and
                  sub-millisecond hardware instrumentation where physical bus proximity is mandatory.
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800 text-xs">
                  <div className="font-semibold text-slate-900 dark:text-white">Primary Workload Candidates:</div>
                  <ul className="space-y-1.5 text-slate-600 dark:text-slate-400">
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                      <span>Manufacturing Execution Systems (MES)</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                      <span>Specialized Mainframe / AS400 Platforms</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                      <span>Hardware Security Appliance (HSM) Hosts</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                      <span>Air-gapped lab testing environments</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 text-[11px] font-mono text-slate-500">
                Placement Driver: Microsecond Bus Latency &amp; Physical Containment
              </div>
            </div>

            {/* Column 2: Private Cloud */}
            <div className="rounded-2xl bg-white dark:bg-[#07132a] border-2 border-[#0070C0] p-6 lg:p-7 flex flex-col justify-between shadow-lg relative overflow-hidden">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-[#0070C0] dark:text-blue-400">
                    <Database className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono font-bold uppercase px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-[#0070C0] dark:text-blue-400">
                    Private Cloud
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Dedicated Private Cloud</h3>
                  <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">Sovereign Control with Virtualized Agility</p>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Engineered for mission-critical core databases, regulated healthcare records, high-concurrency ERP
                  ledgers, and proprietary R&amp;D IP requiring dedicated physical hypervisors and predictable spend.
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800 text-xs">
                  <div className="font-semibold text-slate-900 dark:text-white">Primary Workload Candidates:</div>
                  <ul className="space-y-1.5 text-slate-600 dark:text-slate-400">
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0070C0] shrink-0" />
                      <span>SAP S/4HANA &amp; Oracle Exadata DBs</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0070C0] shrink-0" />
                      <span>Regulated Financial Transaction Cores</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0070C0] shrink-0" />
                      <span>Patient Health Information (HIPAA/GDPR)</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0070C0] shrink-0" />
                      <span>Dedicated Sovereign Kubernetes Clusters</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 text-[11px] font-mono text-[#0070C0] dark:text-blue-400 font-semibold">
                Placement Driver: Compliance Mandates &amp; Predictable I/O Throughput
              </div>
            </div>

            {/* Column 3: Public Cloud */}
            <div className="rounded-2xl bg-white dark:bg-[#07152c] border-2 border-[#00A3E0] p-6 lg:p-7 flex flex-col justify-between shadow-lg relative overflow-hidden">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 text-[#00A3E0] dark:text-cyan-400">
                    <Cloud className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono font-bold uppercase px-2.5 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950 text-[#00A3E0] dark:text-cyan-400">
                    Public Cloud
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Public Cloud Hyperscalers</h3>
                  <p className="text-xs text-cyan-600 dark:text-cyan-400 mt-1">Infinite Elasticity &amp; Global Acceleration</p>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Optimized for external customer web and mobile applications, elastic e-commerce spikes, generative AI
                  model training/inference, and global content delivery networks across AWS, Azure, and Google Cloud.
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800 text-xs">
                  <div className="font-semibold text-slate-900 dark:text-white">Primary Workload Candidates:</div>
                  <ul className="space-y-1.5 text-slate-600 dark:text-slate-400">
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3E0] shrink-0" />
                      <span>Customer Portals &amp; Mobile APIs</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3E0] shrink-0" />
                      <span>Elastic Big Data Analytics &amp; Lakehouses</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3E0] shrink-0" />
                      <span>Generative AI RAG &amp; Inference Services</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3E0] shrink-0" />
                      <span>Global Multi-Region CDN Points of Presence</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 text-[11px] font-mono text-[#00A3E0] dark:text-cyan-400 font-semibold">
                Placement Driver: Rapid Elastic Scaling &amp; Cloud-Native Ecosystems
              </div>
            </div>
          </div>

          {/* Section Supporting Image & Workload Placement Matrix */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#071224] p-6 lg:p-8 overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-950 group border border-slate-300 dark:border-slate-700">
                {/* Image 2: Multi-Factor Workload Evaluation Criteria Matrix */}
                <img
                  src="/images/cloud/hybrid_workload_evaluation.png"
                  alt="Multi-Factor Workload Evaluation Criteria - Performance, Operational, Security, and Cost Decision Matrix"
                  className="w-full h-full object-contain bg-white dark:bg-slate-900 group-hover:scale-105 transition-transform duration-700 p-1"
                />
              </div>

              <div className="lg:col-span-7 space-y-4">
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  Multi-Factor Workload Evaluation Criteria
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Our architecture team scores every application across six critical dimensions to prevent architectural
                  mismatches, avoid egress budget surprises, and maintain uninterrupted uptime.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                    <div className="text-[11px] font-mono font-bold text-cyan-600 dark:text-cyan-400">DATA SENSITIVITY</div>
                    <div className="text-xs text-slate-700 dark:text-slate-300 mt-1">PCI-DSS, HIPAA &amp; GDPR governance rules</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                    <div className="text-[11px] font-mono font-bold text-cyan-600 dark:text-cyan-400">LATENCY TOLERANCE</div>
                    <div className="text-xs text-slate-700 dark:text-slate-300 mt-1">Sub-1ms vs &lt;10ms vs asynchronous queues</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                    <div className="text-[11px] font-mono font-bold text-cyan-600 dark:text-cyan-400">DEPENDENCY MATRIX</div>
                    <div className="text-xs text-slate-700 dark:text-slate-300 mt-1">Direct database locks vs decoupled APIs</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                    <div className="text-[11px] font-mono font-bold text-cyan-600 dark:text-cyan-400">SCALABILITY PROFILE</div>
                    <div className="text-xs text-slate-700 dark:text-slate-300 mt-1">Predictable steady-state vs sudden 10x spikes</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                    <div className="text-[11px] font-mono font-bold text-cyan-600 dark:text-cyan-400">LICENSING MODEL</div>
                    <div className="text-xs text-slate-700 dark:text-slate-300 mt-1">BYOL core licensing vs consumption meters</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                    <div className="text-[11px] font-mono font-bold text-cyan-600 dark:text-cyan-400">EGRESS ECONOMICS</div>
                    <div className="text-xs text-slate-700 dark:text-slate-300 mt-1">Chatty outbound bytes vs inbound intake</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 3 — SECURE CONNECTIVITY ACROSS ENVIRONMENTS          */}
      {/* Layout: Dark navy technical feature section with network     */}
      {/*         visualization and subtle cyan connections.           */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-28 bg-[#040916] text-white border-b border-cyan-900/40 relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00A3E0]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          {/* Section Header */}
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
              <ShieldCheck className="w-4 h-4 text-[#00A3E0]" />
              <span>Section 03 / Zero-Trust Interconnects</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Secure Connectivity Across Environments
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Extending your network across corporate datacenters and hyperscalers introduces architectural attack
              surfaces if improperly segmented. We deploy zero-trust perimeter boundaries, line-rate MACsec hardware
              encryption, identity federation, and software-defined firewalls to keep every packet authenticated and verified.
            </p>
          </div>

          {/* Network Visualization & Technical Capabilities Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual: Encrypted Matrix Security Image 3 */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 bg-slate-950 aspect-[4/3] group shadow-2xl">
                <img
                  src="/images/cloud/hybrid_secure_connectivity.png"
                  alt="Secure Connectivity Across Environments - Edge routers, cellular towers, and industrial telemetry connecting to cloud"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-cyan-500/40 space-y-1 select-text">
                  <div className="text-[11px] font-mono text-cyan-400 font-bold flex items-center gap-2">
                    <Lock className="w-3.5 h-3.5 text-[#00A3E0]" />
                    <span>ENCRYPTED TRANSIT MESH ACTIVE</span>
                  </div>
                  <div className="text-[11px] text-slate-300">
                    MACsec Line-Rate 100G + BGP Route Filtering + mTLS Enforcement
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Security Pillars Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-colors space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold">
                  <Network className="w-4 h-4 text-[#00A3E0]" />
                  <span>Network Segmentation</span>
                </div>
                <h3 className="text-sm font-bold text-white">VRF &amp; Micro-Segmentation</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Virtual Routing and Forwarding (VRF) isolating sensitive core ERP databases from public-facing DMZ
                  gateways across shared physical interconnects.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-colors space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold">
                  <Lock className="w-4 h-4 text-[#00A3E0]" />
                  <span>Line-Rate Encryption</span>
                </div>
                <h3 className="text-sm font-bold text-white">MACsec &amp; IPsec Tunnels</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Layer 2 IEEE 802.1AE MACsec hardware encryption providing line-rate wire encryption with zero latency
                  overhead, backed by hot-standby IPsec failovers.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-colors space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold">
                  <KeyRound className="w-4 h-4 text-[#00A3E0]" />
                  <span>Identity Federation</span>
                </div>
                <h3 className="text-sm font-bold text-white">Single Sign-On &amp; PAM</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Centralized SAML 2.0 / OIDC identity federation connecting on-prem Active Directory with cloud IAM,
                  backed by session-recorded Privileged Access Management.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-colors space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold">
                  <ShieldCheck className="w-4 h-4 text-[#00A3E0]" />
                  <span>API Security</span>
                </div>
                <h3 className="text-sm font-bold text-white">mTLS &amp; API Gateways</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Cryptographic mutual TLS certificate handshakes and schema validation protecting all service-to-service
                  cross-boundary transactions against interception.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-colors space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold">
                  <SlidersHorizontal className="w-4 h-4 text-[#00A3E0]" />
                  <span>Access Policies</span>
                </div>
                <h3 className="text-sm font-bold text-white">Zero Trust Network Access (ZTNA)</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Adaptive context-aware access policies continuously evaluating device health, user identity, and geographic
                  location before granting application access.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-colors space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold">
                  <Activity className="w-4 h-4 text-[#00A3E0]" />
                  <span>East-West Inspection</span>
                </div>
                <h3 className="text-sm font-bold text-white">Distributed Next-Gen Firewalls</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Deep packet inspection monitoring all lateral traffic moving between on-prem racks and cloud VPCs,
                  quarantining anomalies automatically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 4 — WORKLOAD MIGRATION & INTEGRATION                 */}
      {/* Layout: Horizontal process timeline (Discover -> Assess      */}
      {/*         Dependencies -> Select Environment -> Migrate ->      */}
      {/*         Validate) with interactive step inspection.          */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-28 bg-white dark:bg-[#060D1A] transition-colors border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Header */}
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#00A3E0] dark:text-cyan-400">
              <Workflow className="w-4 h-4" />
              <span>Section 04 / Structured Methodology</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Workload Migration &amp; Integration
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Moving workloads across hybrid boundaries requires surgical precision. Our proven 5-stage migration and
              integration workflow guarantees continuous data integrity, zero unplanned business outages, and verified
              service performance.
            </p>
          </div>

          {/* Horizontal Process Timeline Navigation */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {migrationSteps.map((step, idx) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={`p-3.5 rounded-xl text-left transition-all border cursor-pointer ${
                    activeStep === idx
                      ? 'bg-cyan-50 dark:bg-cyan-950/40 border-[#00A3E0] shadow-sm'
                      : 'bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-mono font-bold ${
                        activeStep === idx ? 'text-[#00A3E0]' : 'text-slate-500'
                      }`}
                    >
                      STEP {step.stepNumber}
                    </span>
                    {activeStep === idx && <span className="w-2 h-2 rounded-full bg-[#00A3E0]" />}
                  </div>
                  <div
                    className={`text-sm font-bold mt-1 ${
                      activeStep === idx ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {step.title}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Active Step Detailed Showcase Panel */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#071224] p-6 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Step Narrative & Details */}
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#00A3E0]/10 text-[#00A3E0] dark:text-cyan-400 font-mono text-xs font-semibold uppercase">
                  <span>Phase {migrationSteps[activeStep].stepNumber} Active Execution</span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {migrationSteps[activeStep].title}: {migrationSteps[activeStep].tagline}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                    {migrationSteps[activeStep].description}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800">
                  <h4 className="text-xs font-mono font-bold uppercase text-slate-500 tracking-wider">
                    Core Technical Activities &amp; Validations:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {migrationSteps[activeStep].capabilities.map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Auditable Phase Gate Deliverable:</span>
                  <span className="font-mono font-bold text-[#00A3E0] dark:text-cyan-400">
                    {migrationSteps[activeStep].deliverable}
                  </span>
                </div>
              </div>

              {/* Supporting Technical Illustration Image 4 */}
              <div className="lg:col-span-5">
                <div className="relative rounded-xl overflow-hidden border border-slate-300 dark:border-slate-700 aspect-[4/3] bg-slate-950 group shadow-md">
                  <img
                    src="/images/cloud/hybrid_workload_discovery.png"
                    alt="Discover: Automated Topology & Workload Discovery - Cognitive workload discovery and system dependency analysis"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 text-[11px] font-mono text-cyan-300 bg-slate-900/80 px-2.5 py-1 rounded border border-slate-700 select-text">
                    PHASE {migrationSteps[activeStep].stepNumber}: {migrationSteps[activeStep].title.toUpperCase()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 5 — DATA FLOW, CONTINUITY & RESILIENCE              */}
      {/* Layout: Asymmetric editorial layout with one prominent image  */}
      {/*         and supporting text.                                 */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-28 bg-slate-50 dark:bg-[#040812] transition-colors border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Header */}
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#00A3E0] dark:text-cyan-400">
              <FolderSync className="w-4 h-4" />
              <span>Section 05 / Business Continuity</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Data Flow, Continuity &amp; Resilience
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              When business operations span on-premises datacenters and multiple cloud regions, data architecture must
              guarantee zero data loss, strict transactional ordering, and deterministic disaster recovery.
            </p>
          </div>

          {/* Asymmetric Editorial Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Prominent Editorial Image 5 with Differentiated Recovery Callouts */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700/80 aspect-[4/3] bg-slate-950 group shadow-xl">
                <img
                  src="/images/cloud/hybrid_data_continuity.jpg"
                  alt="Data Flow, Continuity & Resilience - Central database and datacenter interconnecting storage, cloud, analytics, and business continuity"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                {/* Asymmetric Differentiated Environment Tags */}
                <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700">
                    <div className="text-[10px] font-mono uppercase text-slate-400 font-bold">PRIMARY SITE</div>
                    <div className="text-xs font-bold text-white mt-0.5">On-Premises SAN / NVMe</div>
                    <div className="text-[11px] text-emerald-400 mt-1">Active-Active Sync (RPO = 0)</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-cyan-500/50">
                    <div className="text-[10px] font-mono uppercase text-cyan-400 font-bold">RECOVERY REGION</div>
                    <div className="text-xs font-bold text-white mt-0.5">Cloud Pilot Light Vault</div>
                    <div className="text-[11px] text-cyan-300 mt-1">Automated Failover (RTO &lt;15m)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Editorial Supporting Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-snug">
                  Zero-Data-Loss Synchronization and Cloud-Backed Disaster Recovery
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Rather than paying millions for idle duplicate hardware, our hybrid recovery architectures leverage
                  cloud pilot light patterns. Core database transaction logs are replicated continuously over dedicated
                  links, while compute nodes remain spun down until a cutover is triggered.
                </p>
              </div>

              <div className="space-y-3.5">
                <div className="p-4 rounded-xl bg-white dark:bg-[#071224] border border-slate-200 dark:border-slate-800 space-y-1">
                  <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <HardDrive className="w-4 h-4 text-[#00A3E0]" />
                    <span>Synchronous Metro vs. Asynchronous WAN Replication</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Local sub-5ms fibers support zero-RPO synchronous mirror writes, while WAN links utilize
                    bandwidth-optimized delta compression for geo-separated cloud replication.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white dark:bg-[#071224] border border-slate-200 dark:border-slate-800 space-y-1">
                  <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[#00A3E0]" />
                    <span>Immutable Air-Gapped Ransomware Vaults</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Write Once Read Many (WORM) storage policies prevent accidental or malicious snapshot tampering,
                    guaranteeing clean recovery points during security emergencies.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white dark:bg-[#071224] border border-slate-200 dark:border-slate-800 space-y-1">
                  <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <RefreshCw className="w-4 h-4 text-[#00A3E0]" />
                    <span>Non-Disruptive Disaster Recovery Testing</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Automated sandbox spin-ups allow infosec and compliance teams to validate DR runbooks quarterly
                    without impacting live production systems or data flows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 6 — UNIFIED OPERATIONS & GOVERNANCE                  */}
      {/* Layout: Structured operational framework, NOT dashboard      */}
      {/*         cards. No fake metrics or invented dashboard data.   */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-28 bg-white dark:bg-[#060D1A] transition-colors border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Header */}
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#00A3E0] dark:text-cyan-400">
              <Compass className="w-4 h-4" />
              <span>Section 06 / Enterprise Operating Model</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Unified Operations &amp; Governance
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Operating a hybrid cloud cannot mean running fragmented operations teams for every hosting provider.
              We establish a standardized enterprise operational framework that coordinates telemetry, incident resolution,
              configuration drift, policy enforcement, and multi-cloud FinOps under a single discipline.
            </p>
          </div>

          {/* Structured Operational Framework Matrix */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#071224] p-6 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Supporting Technical Illustration Image 6 */}
              <div className="lg:col-span-5">
                <div className="relative rounded-xl overflow-hidden border border-slate-300 dark:border-slate-700 aspect-[4/3] bg-slate-950 group shadow-md">
                  <img
                    src="/images/cloud/hybrid_unified_governance.png"
                    alt="Unified Operations & Governance - AI-assisted telemetry, multi-cloud governance, and automated operational control plane"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 text-[11px] font-mono text-cyan-300 bg-slate-900/80 px-2.5 py-1 rounded border border-slate-700 select-text">
                    UNIFIED GOVERNANCE &amp; AIOPS
                  </div>
                </div>
              </div>

              {/* 5 Core Framework Disciplines (Not cards, but a clean structured table/matrix) */}
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Five Core Operational Disciplines
                </h3>
                <div className="divide-y divide-slate-200 dark:divide-slate-800 border-y border-slate-200 dark:border-slate-800">
                  <div className="py-3 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                    <div className="w-44 shrink-0 text-xs font-mono font-bold text-[#00A3E0] dark:text-cyan-400">
                      01. Observability
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      Single-pane OpenTelemetry pipelines collecting logs, metrics, and traces from bare metal, VMware, and cloud Kubernetes clusters without blind spots.
                    </div>
                  </div>

                  <div className="py-3 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                    <div className="w-44 shrink-0 text-xs font-mono font-bold text-[#00A3E0] dark:text-cyan-400">
                      02. Incident &amp; ITSM
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      Unified service desk integration (ServiceNow / PagerDuty) with bi-directional alert correlation and automated runbooks for Tier-1 fault remediation.
                    </div>
                  </div>

                  <div className="py-3 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                    <div className="w-44 shrink-0 text-xs font-mono font-bold text-[#00A3E0] dark:text-cyan-400">
                      03. GitOps Drift Control
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      Declarative Terraform and ArgoCD control planes continuously reconciling live infrastructure against approved version-controlled Git repositories.
                    </div>
                  </div>

                  <div className="py-3 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                    <div className="w-44 shrink-0 text-xs font-mono font-bold text-[#00A3E0] dark:text-cyan-400">
                      04. Policy Guardrails
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      Continuous Open Policy Agent (OPA) enforcement guaranteeing encryption, least-privilege RBAC, and CIS security benchmarks across all environments.
                    </div>
                  </div>

                  <div className="py-3 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                    <div className="w-44 shrink-0 text-xs font-mono font-bold text-[#00A3E0] dark:text-cyan-400">
                      05. FinOps &amp; Economics
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      Cross-cloud cost allocation attributing expenses to business units, automated right-sizing of idle instances, and committed-use discount management.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 7 — MODERNIZE WITHOUT DISRUPTING EVERYTHING          */}
      {/* Layout: Full-width closing feature section with fresh striking*/}
      {/*         image and pragmatic modernization philosophy.        */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
        {/* Background Image 8 with Deep Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=85"
            alt="Enterprise Technology Command Center: Harmonizing Legacy Core Systems with Cloud-Native Platforms"
            className="w-full h-full object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          {/* Section Header */}
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
              <Zap className="w-4 h-4 text-[#00A3E0]" />
              <span>Section 07 / Progressive Evolution</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Modernize Without Disrupting Everything
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Forced "rip-and-replace" cloud migrations frequently result in budget overruns, delayed delivery, and
              catastrophic production disruption. A well-designed hybrid cloud lets you modernize selectively—wrapping
              valuable legacy engines in cloud APIs, adopting hyperscaler AI services where they generate competitive
              advantage, and retaining stable on-premises databases without artificial urgency.
            </p>
          </div>

          {/* Four Modernization Tenets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/40 transition-all space-y-3">
              <div className="p-2.5 rounded-lg bg-cyan-950/80 text-cyan-400 w-fit">
                <Workflow className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Strangler Fig Migration</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Incrementally route new business features through cloud microservices while leaving core transactional
                monoliths untouched and stable.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/40 transition-all space-y-3">
              <div className="p-2.5 rounded-lg bg-cyan-950/80 text-cyan-400 w-fit">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Legacy System Retention</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Retain mature, high-investment ERPs and specialized manufacturing appliances on-premises where their
                operational economics remain superior.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/40 transition-all space-y-3">
              <div className="p-2.5 rounded-lg bg-cyan-950/80 text-cyan-400 w-fit">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Plug-and-Play Cloud Services</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Connect external hyperscaler services—like generative AI foundation models, serverless event hubs, and
                analytics lakehouses—via secure API brokers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/40 transition-all space-y-3">
              <div className="p-2.5 rounded-lg bg-cyan-950/80 text-cyan-400 w-fit">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Controlled Pace of Change</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Eliminate big-bang migration risks by testing, validating, and optimizing each application release
                independently on its own schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* BUSINESS USE-CASES SECTION (Compact & Professionally Designed)*/}
      {/* ============================================================ */}
      <section className="py-20 lg:py-24 bg-white dark:bg-[#060D1A] transition-colors border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#00A3E0] dark:text-cyan-400">
              <BarChart3 className="w-4 h-4" />
              <span>Enterprise Scenarios / Production Use Cases</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Where Hybrid Cloud Delivers Immediate Business Value
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Real-world deployment scenarios where enterprise organizations leverage Knooviq hybrid architecture
              blueprints to solve mission-critical IT challenges.
            </p>
          </div>

          {/* 6 Use Case Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#071224] border border-slate-200 dark:border-slate-800 space-y-2.5 hover:border-[#00A3E0]/40 transition-colors">
              <div className="text-xs font-mono font-bold text-[#00A3E0] dark:text-cyan-400 uppercase">
                SCENARIO 01
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Legacy Application Integration</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Connect mission-critical on-premises ERP databases with customer-facing cloud mobile apps and e-commerce
                storefronts through real-time, low-latency API gateways.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#071224] border border-slate-200 dark:border-slate-800 space-y-2.5 hover:border-[#00A3E0]/40 transition-colors">
              <div className="text-xs font-mono font-bold text-[#00A3E0] dark:text-cyan-400 uppercase">
                SCENARIO 02
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Sensitive Enterprise Workloads</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Retain customer personally identifiable information (PII) and sovereign payment ledgers on dedicated
                private infrastructure while offloading stateless compute to the public cloud.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#071224] border border-slate-200 dark:border-slate-800 space-y-2.5 hover:border-[#00A3E0]/40 transition-colors">
              <div className="text-xs font-mono font-bold text-[#00A3E0] dark:text-cyan-400 uppercase">
                SCENARIO 03
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Cloud-Connected Edge &amp; Retail</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Run autonomous manufacturing execution or retail checkout nodes locally to survive internet outages,
                synchronizing telemetry and inventory back to cloud analytics hubs.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#071224] border border-slate-200 dark:border-slate-800 space-y-2.5 hover:border-[#00A3E0]/40 transition-colors">
              <div className="text-xs font-mono font-bold text-[#00A3E0] dark:text-cyan-400 uppercase">
                SCENARIO 04
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Cost-Effective Disaster Recovery</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Replace expensive secondary physical colocation facilities with cloud-based pilot lights that replicate
                data in real time without incurring continuous compute fees.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#071224] border border-slate-200 dark:border-slate-800 space-y-2.5 hover:border-[#00A3E0]/40 transition-colors">
              <div className="text-xs font-mono font-bold text-[#00A3E0] dark:text-cyan-400 uppercase">
                SCENARIO 05
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Distributed Infrastructure Fabric</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Centrally manage compute capacity spanning headquarters data centers, regional branches, and hyperscaler
                availability zones through a unified Kubernetes control plane.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#071224] border border-slate-200 dark:border-slate-800 space-y-2.5 hover:border-[#00A3E0]/40 transition-colors">
              <div className="text-xs font-mono font-bold text-[#00A3E0] dark:text-cyan-400 uppercase">
                SCENARIO 06
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Gradual Application Modernization</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Deconstruct monolithic legacy applications progressively into containerized microservices over quarters
                rather than forcing a high-risk multi-year waterfall migration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FREQUENTLY ASKED QUESTIONS SECTION                           */}
      {/* ============================================================ */}
      <section className="py-16 lg:py-20 bg-slate-50 dark:bg-[#040812] transition-colors border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#00A3E0] dark:text-cyan-400">
              <HelpCircle className="w-4 h-4" />
              <span>Hybrid Architecture Insights</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, fIdx) => (
              <div
                key={fIdx}
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#071224] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === fIdx ? null : fIdx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={openFaqIndex === fIdx}
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                    {faq.q}
                  </span>
                  <div className="p-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 shrink-0">
                    {openFaqIndex === fIdx ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>
                {openFaqIndex === fIdx && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* RELATED CLOUD SERVICES SUITE                                 */}
      {/* ============================================================ */}
      <section className="py-16 bg-white dark:bg-[#060D1A] transition-colors border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RelatedCloudServices currentId="hybrid-cloud" currentPath="/cloud-operations/infrastructure/hybrid-cloud" />
        </div>
      </section>

      {/* ============================================================ */}
      {/* FINAL CALL TO ACTION (User Requirement #5)                   */}
      {/* Heading: Design a Hybrid Cloud Architecture That Fits Your    */}
      {/*          Enterprise                                          */}
      {/* Button: Talk to Knooviq Experts                              */}
      {/* ============================================================ */}
      <CloudConsultationCTA
        badge="HYBRID ARCHITECTURE &amp; ORCHESTRATION"
        title="Design a Hybrid Cloud Architecture That Fits Your Enterprise"
        description="Connect existing systems and cloud platforms through an architecture designed around your workload requirements, security controls, and operational needs."
        primaryBtnText="Talk to Our Cloud Experts"
        secondaryBtnText="Explore Cloud Architecture"
        secondaryBtnLink="/cloud-operations/infrastructure/cloud-architecture"
        onOpenContact={handleDiscussRequirements}
      />

      {/* ============================================================ */}
      {/* LIGHTBOX HIGH-RESOLUTION IMAGE MODAL                         */}
      {/* ============================================================ */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/90 backdrop-blur-md animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-w-5xl w-full bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-950">
              <div className="flex items-center gap-2">
                {lightboxImage.badge && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#00A3E0]/20 text-[#00A3E0] border border-[#00A3E0]/30 uppercase">
                    {lightboxImage.badge}
                  </span>
                )}
                <span className="text-xs font-mono text-slate-400">{lightboxImage.figure}</span>
                <span className="text-sm font-bold text-white truncate max-w-md sm:max-w-lg">
                  {lightboxImage.title}
                </span>
              </div>
              <button
                onClick={() => setLightboxImage(null)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
                aria-label="Close image modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-auto bg-slate-950 flex items-center justify-center p-2">
              <img
                src={lightboxImage.url}
                alt={lightboxImage.title}
                className="max-h-[65vh] w-auto max-w-full object-contain rounded-lg shadow-lg"
              />
            </div>

            <div className="p-4 border-t border-slate-800 bg-slate-950 text-xs text-slate-300 leading-relaxed flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <p className="max-w-2xl">{lightboxImage.subtitle}</p>
              <button
                onClick={handleDiscussRequirements}
                className="px-4 py-2 rounded-lg bg-[#00A3E0] hover:bg-[#00B4F5] text-white font-semibold text-xs transition-colors shrink-0 cursor-pointer"
              >
                Consult Knooviq Architects
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
