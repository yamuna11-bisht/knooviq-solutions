import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Cloud,
  CheckCircle2,
  ArrowRight,
  Shield,
  Activity,
  Server,
  Lock,
  Database,
  Layers,
  Sparkles,
  GitBranch,
  KeyRound,
  Boxes,
  Workflow,
  Cpu,
  Network,
  Share2,
  FileCode2,
  Brain,
  Gauge,
  Compass,
  ArrowUpRight,
  Clock,
  Terminal,
  ChevronRight,
  BarChart3,
  Globe2,
  Radio,
  FileSearch,
  HardDrive,
  Maximize2,
  X
} from 'lucide-react';
import { RelatedCloudServices } from '../../components/cloud/RelatedCloudServices';

interface ChildPageProps {
  onOpenContact?: (topic?: string) => void;
}

interface LightboxState {
  url: string;
  title: string;
  subtitle: string;
  badge?: string;
}

// -------------------------------------------------------------
// Section 2: Google Cloud Architecture Layers Data
// -------------------------------------------------------------
const architectureLayers = [
  {
    id: 'application-layer',
    name: 'Application Layer',
    badge: 'GKE & SERVERLESS RUNTIMES',
    tagline: 'Google Kubernetes Engine (GKE Autopilot), Cloud Run & App Engine',
    description:
      'Cloud-native compute abstraction supporting enterprise container fleets with GKE Autopilot, event-driven serverless microservices with Cloud Run that scale to zero, and managed App Engine runtimes.',
    services: [
      {
        name: 'Google Kubernetes Engine (GKE Autopilot)',
        role: 'Industry-standard managed Kubernetes with automated cluster provisioning, node auto-upgrades, Cilium-powered Dataplane v2, and pod-level 99.95% SLA.'
      },
      {
        name: 'Cloud Run & Cloud Run Functions',
        role: 'Serverless container platform executing HTTP and event-driven workloads triggered by Eventarc and Pub/Sub, scaling from zero to thousands of instances in milliseconds.'
      },
      {
        name: 'App Engine',
        role: 'Fully managed PaaS for enterprise web backends featuring zero operational server maintenance, integrated traffic splitting, and automatic SSL certificate provisioning.'
      }
    ],
    technicalHighlights: [
      'GKE Autopilot eliminates master and node infrastructure management overhead',
      'Instant scale-to-zero compute eliminates idle infrastructure costs',
      'Direct integration with Artifact Registry for cryptographic container image verification'
    ]
  },
  {
    id: 'compute-networking',
    name: 'Compute & Networking',
    badge: 'ANDROMEDA SDN & GLOBAL MESH',
    tagline: 'Compute Engine, Virtual Private Cloud (VPC), Cloud Load Balancing & Cloud Interconnect',
    description:
      'Global software-defined infrastructure leveraging Google’s private low-latency fiber backbone, single Anycast IP global load balancers, and dedicated enterprise interconnects.',
    services: [
      {
        name: 'Compute Engine (Tau T2D & C3 Instances)',
        role: 'High-performance VMs with custom machine types, Confidential VMs with hardware-level AMD SEV memory encryption, and transparent live migration during host updates.'
      },
      {
        name: 'Global Virtual Private Cloud (VPC)',
        role: 'Single software-defined network spanning all worldwide Google Cloud regions without complex cross-region VPN meshes or transitive transit gateways.'
      },
      {
        name: 'Cloud Load Balancing (Global Anycast)',
        role: 'Ultra-low-latency Layer 7 proxy fronted by a single global Anycast VIP, terminating TLS at Google’s edge PoPs with automated cross-region instant failover.'
      },
      {
        name: 'Dedicated Cloud Interconnect & Cross-Cloud Network',
        role: 'Enterprise 10Gbps/100Gbps physical private fiber connections bypassing the public internet directly into Google Cloud with sub-5ms deterministic latency.'
      }
    ],
    technicalHighlights: [
      'Zero-downtime infrastructure maintenance powered by Google live VM migration',
      'Global VPC eliminates inter-region transit routing appliance complexity',
      'Cloud Armor integrated with Anycast edge mitigating volumetric 46M+ rps DDoS attacks'
    ]
  },
  {
    id: 'storage-databases',
    name: 'Storage & Databases',
    badge: 'EXTERNAL CONSISTENCY & HIGH IOPS',
    tagline: 'Cloud Storage, Persistent Disk Hyperdisk, Cloud Spanner, Cloud SQL & Firestore',
    description:
      'Enterprise persistence tier offering 11 9s durable object storage, sub-millisecond Hyperdisk block volumes, and globally distributed databases with Paxos and TrueTime atomic clocks.',
    services: [
      {
        name: 'Cloud Storage (Multi-Regional & Dual-Regional)',
        role: 'Exabyte-scale object storage with 99.999999999% (11 9s) durability, automated lifecycle tiering, object versioning, and Customer-Managed Encryption Keys (CMEK).'
      },
      {
        name: 'Cloud Spanner',
        role: 'Globally distributed relational database delivering unlimited horizontal scale, external consistency, and five-nines (99.999%) SLA synchronized by TrueTime atomic clocks.'
      },
      {
        name: 'AlloyDB & Cloud SQL',
        role: 'Fully managed PostgreSQL, MySQL, and SQL Server with automated high-availability clustering, instant read replicas, and AlloyDB analytical acceleration.'
      },
      {
        name: 'Bigtable & Firestore',
        role: 'Massively scalable NoSQL engines powering sub-10ms key-value lookups (Bigtable) and real-time synchronized mobile document collections (Firestore).'
      }
    ],
    technicalHighlights: [
      'Dual-region automated replication across geographic zones with zero RPO',
      'TrueTime atomic clock synchronization guarantees serializable multi-region transactions',
      'Hyperdisk dynamically decouples IOPS and throughput sizing from compute instances'
    ]
  },
  {
    id: 'data-platform',
    name: 'Data Platform',
    badge: 'BIGQUERY SERVERLESS ANALYTICS',
    tagline: 'BigQuery, Dataflow (Apache Beam), Pub/Sub & Looker',
    description:
      'Serverless analytical backbone processing streaming and batch telemetry at petabyte scale with distributed Dremel execution, governed by Dataplex Universal Catalog.',
    services: [
      {
        name: 'BigQuery & BigQuery Studio',
        role: 'Serverless enterprise data warehouse utilizing columnar Capacitor format, multi-cloud BigQuery Omni analytics, and in-database SQL machine learning (BigQuery ML).'
      },
      {
        name: 'Dataflow (Apache Beam Engine)',
        role: 'Unified stream and batch ETL processing engine with automated dynamic worker autoscaling, sliding window aggregations, and exactly-once processing guarantees.'
      },
      {
        name: 'Pub/Sub Event Streaming',
        role: 'Globally distributed asynchronous event ingestion buffer ingesting hundreds of millions of events per second with zero provisioned infrastructure.'
      },
      {
        name: 'Looker & LookML Semantic Layer',
        role: 'Enterprise business intelligence suite providing governed semantic data modeling, self-service dashboards, and operationalized embedded analytics.'
      }
    ],
    technicalHighlights: [
      'Serverless MPP engine eliminates cluster provisioning and database index maintenance',
      'Sub-second real-time streaming ingestion into BigQuery partition tables',
      'Dataplex Universal Catalog delivers unified metadata, data quality, and lineage tracking'
    ]
  },
  {
    id: 'security-operations',
    name: 'Security & Operations',
    badge: 'BEYONDCORP & SECURITY COMMAND CENTER',
    tagline: 'IAM, Security Command Center (SCC), Cloud KMS & Cloud Monitoring',
    description:
      'Enterprise Zero-Trust security perimeter enforcing context-aware access, Mandiant-powered threat detection, cryptographic key vaults, and full-stack SRE observability.',
    services: [
      {
        name: 'Identity & Access Management (Cloud IAM)',
        role: 'Granular least-privilege role assignments with Workload Identity Federation, eliminating permanent service account keys in favor of short-lived tokens.'
      },
      {
        name: 'Security Command Center (SCC Enterprise)',
        role: 'Continuous asset discovery, vulnerability detection, compliance posture scoring, and real-time threat hunting powered by Google Mandiant intelligence.'
      },
      {
        name: 'Cloud Key Management Service (KMS / Cloud HSM)',
        role: 'FIPS 140-2 Level 3 validated HSMs managing Customer-Managed Encryption Keys (CMEK) with automated cryptographic key rotation.'
      },
      {
        name: 'Cloud Monitoring, Logging & Cloud Trace',
        role: 'Full-stack application telemetry ingestion, distributed latency tracing, log metric alert policies, and automated incident escalation action groups.'
      }
    ],
    technicalHighlights: [
      'BeyondCorp Enterprise provides context-aware access without traditional corporate VPNs',
      'VPC Service Controls form cryptographic perimeters preventing unauthorized data exfiltration',
      'Cloud Profiler and Cloud Trace enable deep kernel-level latency bottleneck detection'
    ]
  }
];

// -------------------------------------------------------------
// Section 3: Data Analytics Pipeline Stages (Data Journey)
// -------------------------------------------------------------
const dataJourneyStages = [
  {
    stage: '01',
    name: 'Ingest',
    service: 'Pub/Sub & Storage Transfer',
    description:
      'Capture streaming operational telemetry, IoT messages, and change-data-capture (CDC) feeds through globally distributed serverless Pub/Sub messaging and Storage Transfer Service.',
    badge: 'EVENT STREAMING'
  },
  {
    stage: '02',
    name: 'Store',
    service: 'Cloud Storage & Data Lake',
    description:
      'Persist structured, semi-structured, and raw unstructured files in durable Cloud Storage buckets with dual-region redundancy and automated lifecycle tiering.',
    badge: 'DATA LAKE FOUNDATION'
  },
  {
    stage: '03',
    name: 'Process',
    service: 'Dataflow & Apache Beam',
    description:
      'Execute unified stream and batch transformations with Apache Beam, executing schema validation, anomaly filtering, and windowed aggregations without managing clusters.',
    badge: 'STREAM & BATCH ETL'
  },
  {
    stage: '04',
    name: 'Analyze',
    service: 'BigQuery & Dataplex',
    description:
      'Execute analytical SQL queries across petabytes in seconds using serverless BigQuery, governed by Dataplex Universal Catalog for centralized metadata and data lineage.',
    badge: 'SERVERLESS WAREHOUSING'
  },
  {
    stage: '05',
    name: 'Activate',
    service: 'Looker & BigQuery ML',
    description:
      'Power enterprise semantic dashboards, operationalized alerts, and embedded machine learning inferences directly inside daily business workflows and decision portals.',
    badge: 'BUSINESS INTELLIGENCE'
  }
];

// -------------------------------------------------------------
// Section 5: Cloud-Native Engineering Capabilities
// -------------------------------------------------------------
const cloudNativePillars = [
  {
    title: 'GKE Enterprise Container Platform',
    service: 'Google Kubernetes Engine • Autopilot • Cilium Dataplane',
    description:
      'Automated cluster management with Google-managed control planes, automated OS upgrades, horizontal pod autoscaling, and private VPC clusters.'
  },
  {
    title: 'Serverless Application Runtimes',
    service: 'Cloud Run • Cloud Run Functions • Eventarc Triggers',
    description:
      'Deploy containerized microservices and event-driven functions that scale from zero based on HTTP requests or Pub/Sub events with zero idle operational cost.'
  },
  {
    title: 'Managed Application Hosting',
    service: 'App Engine • Traffic Splitting • SSL Lifecycle',
    description:
      'PaaS hosting for web backends with automated canary rollouts, built-in TLS management, and rapid rollback mechanisms.'
  },
  {
    title: 'Immutable Software Supply Chain',
    service: 'Artifact Registry • Cloud Build • Binary Authorization',
    description:
      'Secure container artifact repositories with automated vulnerability scanning, cryptographic signature verification, and GitOps deployments via Cloud Deploy.'
  },
  {
    title: 'Declarative Infrastructure as Code',
    service: 'Terraform • Google Cloud Infrastructure Manager',
    description:
      'Reproducible, version-controlled cloud environments deployed through automated CI/CD pipelines with automated drift detection and policy validation.'
  }
];

// -------------------------------------------------------------
// Section 8: Hybrid & Multicloud Connected Components
// -------------------------------------------------------------
const hybridComponents = [
  {
    name: 'GKE Enterprise (Multi-Cloud Fleet)',
    role: 'Consistent Kubernetes management plane governing container clusters across Google Cloud, on-premises datacenters, and third-party clouds.'
  },
  {
    name: 'Google Distributed Cloud (GDC)',
    role: 'Brings Google Cloud hardware and software directly into customer datacenters and edge locations for sovereign data residency and low latency.'
  },
  {
    name: 'Dedicated Cloud Interconnect & Cloud VPN',
    role: 'Resilient private networking linking corporate enterprise datacenters directly to Google Cloud VPC networks via IPSec VPN or 100Gbps cross-connects.'
  },
  {
    name: 'Cross-Cloud Network & PSC',
    role: 'Private Service Connect (PSC) and centralized configuration management ensuring consistent security policies, identity federation, and deployment templates.'
  }
];

// -------------------------------------------------------------
// Section 10: Implementation Sequence Steps
// -------------------------------------------------------------
const implementationSequence = [
  {
    step: '01',
    name: 'Discover',
    tagline: 'Workload & Data Assessment',
    description:
      'Assess existing application topologies, data assets, network dependencies, and business priorities using StratoZone and Migration Center to establish a clear modernization roadmap.',
    deliverables: ['Workload readiness scorecard', 'Data flow dependency map', 'GCP TCO & architectural assessment']
  },
  {
    step: '02',
    name: 'Architect',
    tagline: 'Foundation & Security Design',
    description:
      'Define the enterprise Resource Hierarchy, Shared VPC networks, Organization Policy guardrails, and IAM least-privilege access models aligned with Google Cloud Architecture Framework.',
    deliverables: ['Enterprise Landing Zone blueprint', 'Shared VPC network topology', 'IAM & BeyondCorp security matrix']
  },
  {
    step: '03',
    name: 'Build & Migrate',
    tagline: 'Infrastructure & Workload Cutover',
    description:
      'Deploy infrastructure-as-code pipelines, establish Cloud Interconnect pipelines, migrate selected virtual machines via Migrate to VMs, and stream databases continuously via DMS.',
    deliverables: ['Production Terraform modules', 'Non-disruptive database sync via DMS', 'GKE & Cloud Run deployment manifests']
  },
  {
    step: '04',
    name: 'Validate',
    tagline: 'Integrity, Security & Performance',
    description:
      'Conduct rigorous smoke testing, disaster recovery simulation, latency benchmarking, and security audits against CIS and Google Cloud benchmarks.',
    deliverables: ['Security posture audit report', 'Load & performance baselines', 'Operational cutover sign-off']
  },
  {
    step: '05',
    name: 'Operate & Improve',
    tagline: 'Continuous Observability & FinOps',
    description:
      'Transfer to 24/7 Site Reliability Engineering monitoring, activate Cloud Monitoring alerting, and conduct continuous cost optimization via Active Assist recommendations.',
    deliverables: ['24/7 monitoring dashboards', 'Monthly FinOps cost reports', 'Quarterly architecture review']
  }
];

export const GoogleCloudPage: React.FC<ChildPageProps> = ({ onOpenContact }) => {
  // State for interactive Architecture Layers
  const [activeArchIdx, setActiveArchIdx] = useState<number>(0);
  const [archDelay, setArchDelay] = useState<number>(5000);
  const [archTrigger, setArchTrigger] = useState<number>(0);

  // State for Data Journey Stage
  const [activeDataStage, setActiveDataStage] = useState<number>(0);

  // State for Implementation Sequence
  const [activeSeqIdx, setActiveSeqIdx] = useState<number>(0);

  // Lightbox modal state
  const [lightboxImage, setLightboxImage] = useState<LightboxState | null>(null);

  useEffect(() => {
    document.title = 'Google Cloud Platform (GCP) Consulting, Data Analytics & AI | KNOOVIQ';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Keyboard escape listener for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Auto-cycling for Architecture Layers with 3-second click delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveArchIdx((prev) => (prev + 1) % architectureLayers.length);
      setArchDelay(5000);
    }, archDelay);
    return () => clearTimeout(timer);
  }, [activeArchIdx, archDelay, archTrigger]);

  const handleSelectArchLayer = (idx: number) => {
    setActiveArchIdx(idx);
    setArchDelay(3000);
    setArchTrigger((prev) => prev + 1);
  };

  const handleDiscussStrategy = () => {
    if (onOpenContact) {
      onOpenContact('Google Cloud (GCP) Strategy');
    }
  };

  const handleExploreGcp = () => {
    const el = document.getElementById('gcp-architecture');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#050B17] text-slate-900 dark:text-white transition-colors duration-300 selection:bg-[#4285F4]/20 selection:text-[#4285F4]">

      {/* ============================================================ */}
      {/* ============================================================ */}
      {/* 1. HERO SECTION: Full-Screen Panoramic Hero with Full-Bleed GCP Image & Text Overlay */}
      {/* ============================================================ */}
      <section className="relative w-full min-h-[calc(100vh-5rem)] flex items-center bg-[#050B17] text-white overflow-hidden border-b border-slate-800">
        
        {/* Full-Bleed Panoramic Background Image — 16:9 Widescreen with complete AI character and global data telemetry */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#050B17]">
          <img
            src="/images/cloud/gcp/gcp_hero_panoramic.jpg"
            alt="Google Cloud Platform Enterprise Practice - AI Cognitive Intelligence and Global Data Network"
            className="w-full h-full object-cover object-[right_top] sm:object-[center_top] lg:object-center filter brightness-110 contrast-105"
          />
          {/* Directional scrim: smoothly protects text readability on the left while keeping the AI character and global constellation 100% bright and clear */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050B17]/95 via-[#050B17]/75 sm:via-[#050B17]/40 md:via-transparent to-transparent w-full lg:w-3/5 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050B17] via-transparent to-[#050B17]/40 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(#4285F4_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-16 sm:py-20 lg:py-24 space-y-8">
          
          {/* Top Breadcrumb & Google Cloud Eyebrow */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-md backdrop-blur-md">
              {/* Google Brand Colored Dots */}
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#4285F4]" />
                <span className="w-2 h-2 rounded-full bg-[#EA4335]" />
                <span className="w-2 h-2 rounded-full bg-[#FBBC05]" />
                <span className="w-2 h-2 rounded-full bg-[#34A853]" />
              </div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                GOOGLE CLOUD PLATFORM
              </span>
            </div>

            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-800">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-slate-600">/</span>
              <Link to="/cloud-operations" className="hover:text-white transition-colors">Cloud</Link>
              <span className="text-slate-600">/</span>
              <span className="text-[#4285F4]">Google Cloud</span>
            </nav>
          </div>

          {/* Hero Header Content: Heading, Description & Action Buttons */}
          <div className="max-w-2xl lg:max-w-3xl space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] drop-shadow-md">
              Turn Data into Intelligence with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-[#4285F4]">
                Google Cloud
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl drop-shadow-sm">
              Help enterprises build secure cloud foundations, modern applications, and data-driven solutions with Google Cloud.
              Knooviq supports cloud architecture, infrastructure modernization, analytics, AI/ML implementation,
              and operational management aligned with business and technical requirements.
            </p>


            {/* Value Bullet Bar */}
            <div className="pt-4 border-t border-slate-700/60 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#4285F4] shrink-0" />
                <span>BigQuery Analytics Engine</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#34A853] shrink-0" />
                <span>GKE Autopilot Platform</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FBBC05] shrink-0" />
                <span>Vertex AI &amp; Gemini Workflows</span>
              </div>
            </div>
          </div>

          {/* 4 Core Pillars Summary Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            {[
              { label: 'BigQuery Analytics', value: 'Petabyte Scale', detail: 'Serverless columnar query engine' },
              { label: 'GKE Autopilot', value: 'Managed Fleets', detail: 'Zero-overhead container operations' },
              { label: 'Vertex AI & Gemini', value: 'Enterprise AI', detail: 'Foundation models & custom MLOps' },
              { label: 'BeyondCorp Security', value: 'Zero Trust', detail: 'Context-aware identity perimeter' }
            ].map((stat, sIdx) => (
              <div
                key={sIdx}
                className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-slate-800/90 hover:border-slate-700 transition-colors space-y-1 shadow-lg"
              >
                <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-[#4285F4]">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. GOOGLE CLOUD ARCHITECTURE                                 */}
      {/* Modern Architecture for Scalable Innovation                   */}
      {/* ============================================================ */}
      <section id="gcp-architecture" className="py-20 lg:py-24 bg-slate-50 dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              <span>ENTERPRISE ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Modern Architecture for Scalable Innovation
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Google Cloud services combine to deliver an agile, software-defined enterprise cloud foundation.
              Review the five foundational architectural layers supporting modern applications, global networking,
              high-durability persistence, serverless data engineering, and proactive security.
            </p>
          </div>

          {/* Interactive Architecture Visualization */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 4 Cols: 5 Architectural Layers Selector */}
            <div className="lg:col-span-4 space-y-3">
              <div className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider pb-1">
                ARCHITECTURAL LAYERS:
              </div>
              {architectureLayers.map((layer, lIdx) => (
                <button
                  key={layer.id}
                  onClick={() => handleSelectArchLayer(lIdx)}
                  className={`w-full p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                    activeArchIdx === lIdx
                      ? 'bg-white dark:bg-[#0B1528] border-[#4285F4] dark:border-[#4285F4] shadow-lg shadow-[#4285F4]/10 ring-1 ring-[#4285F4]'
                      : 'bg-white/60 dark:bg-[#070E1E] border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold text-[#4285F4] dark:text-cyan-400 uppercase tracking-wider">
                      LAYER 0{lIdx + 1}
                    </span>
                    {activeArchIdx === lIdx && (
                      <span className="w-2 h-2 rounded-full bg-[#4285F4] animate-ping" />
                    )}
                  </div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white mt-1">
                    {layer.name}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                    {layer.tagline}
                  </div>
                </button>
              ))}
            </div>

            {/* Right 8 Cols: Active Layer Deep Dive */}
            <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 shadow-xl space-y-8">
              
              <div className="space-y-2 border-b border-slate-100 dark:border-white/10 pb-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-400/20 text-[#4285F4] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
                    {architectureLayers[activeArchIdx].badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    Auto-cycles • click to pause
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {architectureLayers[activeArchIdx].name}
                </h3>
                <p className="text-xs font-mono font-bold text-[#4285F4] dark:text-cyan-400">
                  {architectureLayers[activeArchIdx].tagline}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                  {architectureLayers[activeArchIdx].description}
                </p>
              </div>

              {/* Core Services in this Layer */}
              <div className="space-y-4">
                <div className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  CORE GOOGLE CLOUD SERVICES IN THIS LAYER:
                </div>
                <div className="space-y-3">
                  {architectureLayers[activeArchIdx].services.map((svc, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-4 rounded-xl bg-slate-50 dark:bg-[#070E1E] border border-slate-200/80 dark:border-white/5 space-y-1"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#4285F4] dark:text-cyan-400 shrink-0" />
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                          {svc.name}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 pl-6 leading-relaxed">
                        {svc.role}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Benchmarks */}
              <div className="p-4 rounded-2xl bg-blue-50/60 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-400/20 space-y-2">
                <div className="text-xs font-mono font-bold text-[#4285F4] dark:text-cyan-300 uppercase tracking-wider flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5" />
                  <span>ARCHITECTURAL BENCHMARK &amp; CAPABILITY:</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-slate-700 dark:text-slate-300">
                  {architectureLayers[activeArchIdx].technicalHighlights.map((th, thIdx) => (
                    <div key={thIdx} className="flex items-start gap-1.5">
                      <span className="text-[#4285F4] font-bold">•</span>
                      <span>{th}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Architecture Blueprint Visual Banner */}
          <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-lg bg-slate-950">
            <div
              className="w-full h-[340px] sm:h-[440px] lg:h-[500px] relative bg-slate-950 overflow-hidden"
            >
              <img
                src="/images/cloud/gcp/gcp_architecture_diagram.jpg"
                alt="Resource Hierarchy, Shared VPC & Global Anycast Architecture - Central global earth network connecting bank headquarters, trading floors, and datacenter server clusters"
                className="w-full h-full object-cover object-center filter brightness-105 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-5 rounded-2xl backdrop-blur-md bg-slate-900/85 border border-slate-700/60 text-white space-y-1.5 max-w-2xl select-text">
                <span className="text-xs font-mono font-bold text-[#00A3E0] uppercase tracking-wider block">
                  GCP LANDING ZONE BLUEPRINT
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  Resource Hierarchy, Shared VPC &amp; Global Anycast Architecture
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Enterprise Google Cloud fabric unifying global Anycast edge routing, Andromeda software-defined networking, GKE container clusters, BigQuery data platforms, and Security Command Center.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. DATA ANALYTICS & BIGQUERY                                 */}
      {/* Transform Enterprise Data into Actionable Insights           */}
      {/* ============================================================ */}
      <section id="gcp-analytics" className="py-20 lg:py-24 bg-white dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
              <BarChart3 className="w-3.5 h-3.5" />
              <span>DATA ENGINEERING &amp; ANALYTICS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Transform Enterprise Data into Actionable Insights
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Google Cloud’s data analytics stack is an industry benchmark for enterprise scale.
              Unify real-time streaming event ingestion, batch ETL transformations, petabyte data warehousing with BigQuery,
              and universal data governance via Dataplex.
            </p>
          </div>

          {/* Custom Visual: The Data Journey (Ingest -> Store -> Process -> Analyze -> Activate) */}
          <div className="space-y-4">
            <div className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              ENTERPRISE DATA JOURNEY FLOW:
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {dataJourneyStages.map((stg, idx) => (
                <button
                  key={stg.stage}
                  onClick={() => setActiveDataStage(idx)}
                  className={`p-4 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                    activeDataStage === idx
                      ? 'bg-white dark:bg-[#0B1528] border-[#4285F4] dark:border-[#4285F4] shadow-lg ring-1 ring-[#4285F4]'
                      : 'bg-slate-50 dark:bg-[#070E1E] border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-500/10 text-[#4285F4] dark:text-cyan-400">
                        {stg.badge}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        0{idx + 1}
                      </span>
                    </div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                      {stg.name}
                    </div>
                    <div className="text-[11px] font-mono text-[#4285F4] dark:text-cyan-300 font-medium line-clamp-1">
                      {stg.service}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Active Data Stage Card */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[#4285F4] dark:text-cyan-400">
                      STEP 0{activeDataStage + 1} • {dataJourneyStages[activeDataStage].name.toUpperCase()}
                    </span>
                    <span className="text-slate-300 dark:text-slate-600">|</span>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {dataJourneyStages[activeDataStage].service}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {dataJourneyStages[activeDataStage].description}
                  </p>
                </div>
                <div className="shrink-0 text-xs font-mono text-slate-400 flex items-center gap-1">
                  <span>Data Flow Active</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#34A853]" />
                </div>
              </div>
            </div>
          </div>

          {/* Section Image & Narrative Layout (Global Data Replication & Storage Mesh) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-4">
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl bg-slate-950 p-2 sm:p-2.5">
                <div
                  className="relative rounded-2xl overflow-hidden w-full aspect-[16/10] sm:aspect-[16/9] bg-slate-950 flex items-center justify-center"
                >
                  <img
                    src="/images/cloud/gcp/gcp_bigquery_pipeline.jpg"
                    alt="Dataplex Universal Catalog & Governed Self-Service - Digital library archives with holographic data ledger and metadata governance indicators"
                    className="w-full h-full object-cover filter brightness-105 contrast-105"
                  />
                </div>

                {/* Clean Floating Badge Placed Below Image, Zero Obstruction */}
                <div className="mt-2.5 p-3.5 rounded-xl backdrop-blur-md bg-slate-900/90 border border-slate-700/60 text-white space-y-1 select-text">
                  <div className="text-xs font-mono text-[#4285F4] font-bold">
                    SERVERLESS BIGQUERY ENGINE
                  </div>
                  <p className="text-[11px] text-slate-300">
                    Columnar Capacitor storage with federated query execution across Cloud Storage, Spanner, and multi-cloud datasets.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Dataplex Universal Catalog &amp; Governed Self-Service
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Modern enterprise analytics requires robust data governance. Dataplex enables centralized data discovery,
                automated metadata harvesting, and unified policy enforcement across data lakes, warehouses, and operational stores,
                empowering business units with self-service discovery without risking data compliance.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#070E1E] border border-slate-200/80 dark:border-white/5 space-y-1">
                  <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5 text-[#4285F4]" />
                    <span>BigQuery Studio &amp; BI Engine</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Unified analytics workspace supporting SQL, Python, Spark, and sub-second in-memory BI caching.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#070E1E] border border-slate-200/80 dark:border-white/5 space-y-1">
                  <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <FileSearch className="w-3.5 h-3.5 text-[#34A853]" />
                    <span>Dataplex Governance</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Automated data quality checks, data lineage tracking, and column-level access controls.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. AI & MACHINE LEARNING WITH GOOGLE CLOUD                   */}
      {/* Build Intelligent Applications with Google Cloud AI          */}
      {/* ============================================================ */}
      <section id="gcp-ai" className="py-20 lg:py-24 bg-slate-50 dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left 5 Cols: AI Neural Network Mesh Visual Frame */}
            <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl bg-slate-950 p-2 sm:p-2.5">
                <div
                  className="relative rounded-2xl overflow-hidden w-full aspect-[16/10] sm:aspect-[16/9] bg-slate-950 flex items-center justify-center p-2 sm:p-3"
                >
                  <img
                    src="/images/cloud/gcp/gcp_vertex_gemini_ai.jpg"
                    alt="Build Intelligent Applications with Google Cloud AI - 3D AI assistant with Google search AI Overview, Gemini reasoning core, and smart enterprise results"
                    className="w-full h-full object-contain filter brightness-105 contrast-105 rounded-xl"
                  />
                </div>

                {/* Clean Floating Badge Placed Below Image, Zero Obstruction */}
                <div className="mt-2.5 p-3.5 rounded-xl backdrop-blur-md bg-slate-900/90 border border-slate-700/60 text-white space-y-1 select-text">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#4285F4] font-bold">VERTEX AI PLATFORM</span>
                    <span className="text-[#FBBC05] font-semibold">GEMINI 1.5 PRO READY</span>
                  </div>
                  <p className="text-[11px] text-slate-300">
                    2 Million token context windows, enterprise RAG grounding, and custom model tuning with total data isolation.
                  </p>
                </div>
              </div>

              {/* Responsible AI Box */}
              <div className="p-5 rounded-2xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 space-y-2">
                <div className="text-xs font-mono font-bold text-[#4285F4] dark:text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5" />
                  <span>RESPONSIBLE AI GOVERNANCE</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Customer enterprise data is never used to train foundational Google models without explicit consent,
                  ensuring total intellectual property isolation and regulatory compliance.
                </p>
              </div>
            </div>

            {/* Right 7 Cols: AI Capabilities Content */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
                  <Brain className="w-3.5 h-3.5" />
                  <span>AI &amp; MACHINE LEARNING</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Build Intelligent Applications with Google Cloud AI
                </h2>
                <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  Google Cloud offers an end-to-end artificial intelligence ecosystem.
                  From accessing frontier Gemini foundation models through Vertex AI Model Garden to managing feature stores,
                  training custom models on Cloud TPUs, and operationalizing MLOps deployments, we help organizations implement
                  secure, high-impact AI architectures.
                </p>
              </div>

              {/* 6 AI Capabilities Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Vertex AI & Model Garden',
                    desc: 'Discover, customize, and deploy 150+ foundation models including Gemini 1.5 Pro and Flash with dedicated private endpoints.'
                  },
                  {
                    title: 'Gemini Models in Enterprise Workflows',
                    desc: 'Integrate multi-modal reasoning across text, code, audio, and visual inputs directly into enterprise applications via unified REST APIs.'
                  },
                  {
                    title: 'Model Evaluation & Tuning',
                    desc: 'Parameter-efficient fine-tuning (PEFT), prompt engineering evaluation, and RLHF workflows tailored to specific business domains.'
                  },
                  {
                    title: 'Feature Engineering & Vector Search',
                    desc: 'Vertex AI Feature Store and Vector Search using Google ScaNN algorithms for sub-millisecond retrieval-augmented generation.'
                  },
                  {
                    title: 'MLOps & Model Lifecycle',
                    desc: 'Continuous training pipelines, model registry versioning, automated drift detection, and canary rollback mechanisms.'
                  },
                  {
                    title: 'Enterprise Search & Conversation',
                    desc: 'Ground generative AI outputs in enterprise factual data using Vertex AI Search and Conversation with RAG retrieval architectures.'
                  }
                ].map((cap, cIdx) => (
                  <div
                    key={cIdx}
                    className="p-5 rounded-2xl bg-white dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 space-y-2 hover:border-[#4285F4]/40 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#4285F4] dark:text-cyan-400 shrink-0" />
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                        {cap.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. CLOUD-NATIVE APPLICATION ENGINEERING                      */}
      {/* Build and Deploy Applications for the Cloud                  */}
      {/* ============================================================ */}
      <section id="gcp-cloud-native" className="py-20 lg:py-24 bg-white dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left 7 Cols: Asymmetric Layout Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>CLOUD-NATIVE ENGINEERING</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Build and Deploy Applications for the Cloud
                </h2>
                <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  Adopt a high-velocity engineering posture with modern application runtimes.
                  Whether leveraging container orchestration on Google Kubernetes Engine (GKE), serverless containers with Cloud Run,
                  or declarative GitOps delivery with Cloud Build and Terraform, our teams construct scalable, resilient software delivery platforms.
                </p>
              </div>

              {/* Engineering Pillars */}
              <div className="space-y-3">
                {cloudNativePillars.map((p, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 space-y-1.5 hover:border-[#4285F4]/40 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                        {p.title}
                      </h3>
                      <span className="text-[10px] font-mono font-bold text-[#4285F4] dark:text-cyan-400">
                        {p.service}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 5 Cols: Application Engineering Visual (Kubernetes Container Clusters & Cloud Run) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl bg-slate-950 p-2 sm:p-2.5">
                <div
                  className="relative rounded-2xl overflow-hidden w-full aspect-[16/10] sm:aspect-[16/9] bg-slate-950 flex items-center justify-center"
                >
                  <img
                    src="/images/cloud/gcp/gcp_cloud_native.jpg"
                    alt="Build and Deploy Applications for the Cloud - DevOps continuous delivery loop with laptop coding workstation, cloud server racks, Docker, and Kubernetes"
                    className="w-full h-full object-cover filter brightness-105 contrast-105"
                  />
                </div>

                {/* Clean Floating Badge Placed Below Image, Zero Obstruction */}
                <div className="mt-2.5 p-3.5 rounded-xl backdrop-blur-md bg-slate-900/90 border border-slate-700/60 text-white space-y-1 select-text">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#4285F4] font-bold">GKE AUTOPILOT FLEETS</span>
                    <span className="text-[#34A853] font-semibold">CLOUD RUN SERVERLESS</span>
                  </div>
                  <p className="text-[11px] text-slate-300">
                    Automated horizontal pod autoscaling, binary authorization security signatures, and continuous delivery via Cloud Deploy.
                  </p>
                </div>
              </div>

              {/* Dev Experience Box */}
              <div className="p-5 rounded-2xl bg-blue-50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-400/20 space-y-2">
                <div className="text-xs font-mono font-bold text-[#4285F4] dark:text-cyan-300 uppercase tracking-wider flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>DEVELOPER EXPERIENCE (DEVEX)</span>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  Cloud Code extensions for VS Code and Cloud Workstations provide isolated, pre-configured development
                  environments with integrated security scanning and rapid local emulation.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. GOOGLE CLOUD MIGRATION & MODERNIZATION                    */}
      {/* Modernize Your Infrastructure with a Clear Roadmap           */}
      {/* ============================================================ */}
      <section id="gcp-migration" className="py-20 lg:py-24 bg-slate-50 dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left 5 Cols: Migration Interconnect Visual Frame */}
            <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl bg-slate-950 p-2 sm:p-2.5">
                <div
                  className="relative rounded-2xl overflow-hidden w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-square bg-slate-950 flex items-center justify-center"
                >
                  <img
                    src="/images/cloud/gcp/gcp_migration_modernize.jpg"
                    alt="Modernize Your Infrastructure with a Clear Roadmap - Architect standing on multi-tier illuminated digital platform overseeing city skyline with cloud milestones"
                    className="w-full h-full object-cover filter brightness-105 contrast-105"
                  />
                </div>

                {/* Clean Floating Badge Placed Below Image, Zero Obstruction */}
                <div className="mt-2.5 p-3.5 rounded-xl backdrop-blur-md bg-slate-900/90 border border-slate-700/60 text-white space-y-1 select-text">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#4285F4] font-bold">MIGRATE TO VMS &amp; DMS</span>
                    <span className="text-[#34A853] font-semibold">MINIMAL OVERHEAD</span>
                  </div>
                  <p className="text-[11px] text-slate-300">
                    Non-disruptive continuous data streaming replication with automated validation drills prior to cutover.
                  </p>
                </div>
              </div>

              {/* Callout box */}
              <div className="p-5 rounded-2xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 space-y-2">
                <div className="text-xs font-mono font-bold text-[#4285F4] dark:text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>DATABASE MIGRATION SERVICE (DMS)</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Serverless database replication streams data continuously from on-prem MySQL, PostgreSQL, and Oracle systems into
                  Cloud SQL and Spanner with sub-second replication latency and zero cutover data loss.
                </p>
              </div>
            </div>

            {/* Right 7 Cols: Migration Roadmap Pillars */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
                  <Workflow className="w-3.5 h-3.5" />
                  <span>MIGRATION &amp; MODERNIZATION</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Modernize Your Infrastructure with a Clear Roadmap
                </h2>
                <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  Enterprise migrations succeed when anchored in structured discovery, dependency assessment, and automated validation.
                  We lead organizations through each wave of the Google Cloud migration journey, transforming legacy workloads
                  into scalable, cost-optimized cloud architectures.
                </p>
              </div>

              {/* 6 Step Migration Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    step: '01',
                    title: 'Discovery & Readiness Assessment',
                    desc: 'Catalog on-premises infrastructure, VMware clusters, databases, and dependencies using StratoZone and Google Cloud Migration Center.'
                  },
                  {
                    step: '02',
                    title: 'Landing Zone Foundation',
                    desc: 'Construct a production-ready Google Cloud Resource Hierarchy with Shared VPC network topologies and Organization Policy guardrails.'
                  },
                  {
                    step: '03',
                    title: 'VM & Compute Migration',
                    desc: 'Execute continuous background replication using Migrate to Virtual Machines, enabling non-disruptive testing before scheduled cutover.'
                  },
                  {
                    step: '04',
                    title: 'Database & Data Replication',
                    desc: 'Stream transactional data continuously via Database Migration Service (DMS) and transfer object data with Storage Transfer Service.'
                  },
                  {
                    step: '05',
                    title: 'Application Containerization',
                    desc: 'Modernize monolithic applications directly into GKE and Cloud Run containers using Migrate to Containers automated toolchains.'
                  },
                  {
                    step: '06',
                    title: 'Validation & Handover',
                    desc: 'Execute performance regression benchmarks, security compliance audits, and structured operational runbook transfers to the SRE team.'
                  }
                ].map((stg) => (
                  <div
                    key={stg.step}
                    className="p-5 rounded-2xl bg-white dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 space-y-1.5 hover:border-[#4285F4]/40 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[#4285F4] dark:text-cyan-400">
                        PHASE {stg.step}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      {stg.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {stg.desc}
                    </p>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. SECURITY, GOVERNANCE & RELIABILITY                        */}
      {/* Protect Workloads and Strengthen Cloud Governance            */}
      {/* ============================================================ */}
      <section id="gcp-security" className="py-20 lg:py-24 bg-white dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left 7 Cols: Security Capabilities */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
                  <Shield className="w-3.5 h-3.5" />
                  <span>SECURITY &amp; GOVERNANCE</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Protect Workloads and Strengthen Cloud Governance
                </h2>
                <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  Enterprise cloud security requires holistic governance. Google Cloud’s Zero-Trust architecture protects workloads
                  through context-aware IAM, centralized Security Command Center visibility, Cloud KMS cryptographic controls,
                  and automated compliance auditing aligned with organizational obligations.
                </p>
              </div>

              {/* Security Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: 'IAM & Least-Privilege Access',
                    desc: 'Fine-grained role assignments with Workforce and Workload Identity Federation, eliminating long-lived service account keys.'
                  },
                  {
                    title: 'Organization Policies & Guardrails',
                    desc: 'Declarative policy constraints enforcing regional resource restrictions, disabling external public IPs, and mandating CMEK.'
                  },
                  {
                    title: 'Cloud Key Management Service (KMS)',
                    desc: 'FIPS 140-2 Level 3 hardware security modules (HSM) managing Customer-Managed Encryption Keys with automated cryptographic rotation.'
                  },
                  {
                    title: 'Security Command Center (SCC)',
                    desc: 'Continuous asset discovery, vulnerability detection, compliance posture scoring, and real-time threat detection against MITRE ATT&CK.'
                  },
                  {
                    title: 'Cloud Logging & Cloud Monitoring',
                    desc: 'Immutable audit logs with VPC Service Controls establishing perimeter boundaries preventing unauthorized data exfiltration.'
                  },
                  {
                    title: 'Resilience & Disaster Recovery',
                    desc: 'Dual-region replication, automated snapshot schedules, and cross-region failover drills guaranteeing RTO and RPO targets.'
                  }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 space-y-2 hover:border-[#4285F4]/40 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Lock className="w-4 h-4 text-[#4285F4] dark:text-cyan-400 shrink-0" />
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

            </div>

            {/* Right 5 Cols: Security Architecture Blueprint Visual Frame */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl bg-slate-950 p-2 sm:p-2.5">
                <div
                  className="relative rounded-2xl overflow-hidden w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-square bg-slate-950 flex items-center justify-center"
                >
                  <img
                    src="/images/cloud/gcp/gcp_security_governance.jpg"
                    alt="Protect Workloads and Strengthen Cloud Governance - Cybernetic AI entity writing in open compliance ledger with structured autonomous knowledge registers"
                    className="w-full h-full object-cover filter brightness-105 contrast-105"
                  />
                </div>

                {/* Clean Floating Badge Placed Below Image, Zero Obstruction */}
                <div className="mt-2.5 p-3.5 rounded-xl backdrop-blur-md bg-slate-900/90 border border-slate-700/60 text-white space-y-1 select-text">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#4285F4] font-bold">BEYONDCORP &amp; VPC SC</span>
                    <span className="text-[#34A853] font-semibold">ZERO EXFILTRATION</span>
                  </div>
                  <p className="text-[11px] text-slate-300">
                    Cryptographic security perimeters preventing data movement outside authorized Google Cloud projects.
                  </p>
                </div>
              </div>

              {/* Compliance Box */}
              <div className="p-5 rounded-2xl bg-blue-50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-400/20 space-y-2">
                <div className="text-xs font-mono font-bold text-[#4285F4] dark:text-cyan-300 uppercase tracking-wider flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5" />
                  <span>COMPLIANCE CERTIFICATIONS</span>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  Automated Security Command Center mapping enforces continuous alignment with ISO 27001, SOC 2, HIPAA,
                  PCI-DSS, and the CIS Google Cloud Computing Foundations Benchmark.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. HYBRID, MULTICLOUD & DISTRIBUTED INFRASTRUCTURE           */}
      {/* Connect Workloads Across Environments                        */}
      {/* ============================================================ */}
      <section id="gcp-hybrid" className="py-20 lg:py-24 bg-slate-50 dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
              <Globe2 className="w-3.5 h-3.5" />
              <span>HYBRID &amp; DISTRIBUTED INFRASTRUCTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Connect Workloads Across Environments
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Modern enterprises operate across hybrid datacenters, edge locations, and multi-cloud environments.
              Google Cloud’s distributed infrastructure technologies enable consistent container management,
              low-latency private interconnectivity, and unified operational control.
            </p>
          </div>

          {/* Custom Connected Hybrid Architecture Diagram */}
          <div className="p-8 rounded-3xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 shadow-xl space-y-8">
            <div className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              DISTRIBUTED WORKLOAD &amp; HYBRID TOPOLOGY:
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {hybridComponents.map((comp, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50 dark:bg-[#070E1E] border border-slate-200/80 dark:border-white/5 space-y-2 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-[#4285F4] dark:text-cyan-400">
                        NODE 0{idx + 1}
                      </span>
                      <Radio className="w-3.5 h-3.5 text-[#34A853]" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      {comp.name}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {comp.role}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-200/60 dark:border-white/5 text-[11px] font-mono text-slate-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-[#4285F4]" />
                    <span>Fabric Connected</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Anycast Global Resilience Visual Frame */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-md">
              <div
                className="w-full h-[240px] sm:h-[300px] relative bg-slate-950"
              >
                <img
                  src="/images/cloud/gcp/gcp_global_anycast_mesh.jpg"
                  alt="Zero-RPO Cross-Region Availability - Glowing cloud server datacenter core connected via luminous conduits to enterprise devices and storage arrays"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent flex items-center pointer-events-none">
                  <div className="p-6 sm:p-8 max-w-lg space-y-2 text-white select-text pointer-events-auto">
                    <span className="text-xs font-mono font-bold text-[#4285F4] uppercase">
                      ANYCAST MULTI-REGION RESILIENCE
                    </span>
                    <h4 className="text-lg font-bold">
                      Zero-RPO Cross-Region Availability
                    </h4>
                    <p className="text-xs text-slate-300">
                      Synchronous intra-region clustering combined with automated health-check Anycast DNS routing
                      ensures seamless failover to secondary regions without customer disruption.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50/70 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-400/20 select-text">
              <div className="space-y-0.5">
                <span className="text-xs font-mono font-bold text-[#4285F4] dark:text-cyan-300 uppercase tracking-wider">
                  ARCHITECTURAL BOUNDARIES NOTE:
                </span>
                <p className="text-xs text-slate-700 dark:text-slate-300">
                  Workload placement and portability depend on latency constraints, data residency regulations, and specific hardware requirements.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 9. CLOUD OPERATIONS & COST MANAGEMENT                        */}
      {/* Operate Google Cloud with Confidence                         */}
      {/* ============================================================ */}
      <section id="gcp-operations" className="py-20 lg:py-24 bg-white dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left 5 Cols: Real SRE Command Center Visual */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl bg-slate-950 p-2 sm:p-2.5">
                <div
                  className="relative rounded-2xl overflow-hidden w-full aspect-[16/10] sm:aspect-[16/9] bg-slate-950 flex items-center justify-center"
                >
                  <img
                    src="/images/cloud/gcp/gcp_sre_operations.jpg"
                    alt="Operate Google Cloud with Confidence - Google Cloud SRE command center, real-time observability telemetry, GKE cluster metrics, and FinOps analytics"
                    className="w-full h-full object-cover filter brightness-105 contrast-105"
                  />
                </div>

                {/* Clean Floating Badge Placed Below Image, Zero Obstruction */}
                <div className="mt-2.5 p-3.5 rounded-xl backdrop-blur-md bg-slate-900/90 border border-slate-700/60 text-white space-y-1 select-text">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#4285F4] font-bold">ACTIVE ASSIST &amp; FINOPS</span>
                    <span className="text-[#34A853] font-semibold">24/7 SRE OBSERVABILITY</span>
                  </div>
                  <p className="text-[11px] text-slate-300">
                    Full-stack metrics telemetry, Cloud Trace distributed waterfall analysis, and committed use discount modeling.
                  </p>
                </div>
              </div>

              {/* FinOps Box */}
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 space-y-2">
                <div className="text-xs font-mono font-bold text-[#4285F4] dark:text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                  <Gauge className="w-3.5 h-3.5" />
                  <span>ACTIVE ASSIST COST OPTIMIZATION</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Machine learning recommendations identify idle disks, over-provisioned VMs, and unattached IP addresses,
                  ensuring cloud consumption directly maps to business value.
                </p>
              </div>
            </div>

            {/* Right 7 Cols: Operations Pillars Grid */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
                  <Activity className="w-3.5 h-3.5" />
                  <span>OPERATIONS &amp; COST MANAGEMENT</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Operate Google Cloud with Confidence
                </h2>
                <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  Operating enterprise cloud platforms demands continuous observability, rapid incident response,
                  and structured cost visibility. We combine Site Reliability Engineering (SRE) practices,
                  Cloud Monitoring dashboards, and continuous Cloud Billing governance.
                </p>
              </div>

              {/* 6 Operations Capabilities */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Cloud Monitoring & Logging',
                    desc: 'Full-stack application performance observability, log aggregations, and distributed trace analysis via Cloud Trace.'
                  },
                  {
                    title: 'Alerting & Incident Management',
                    desc: 'Dynamic threshold metric alerts, automated multi-channel escalation policies, and self-healing Cloud Functions runbooks.'
                  },
                  {
                    title: 'Availability & Resilience Planning',
                    desc: 'Multi-region architectures leveraging Cloud Load Balancing with Anycast routing and automated cross-region failovers.'
                  },
                  {
                    title: 'Backup & Disaster Recovery',
                    desc: 'Google Cloud Backup and DR service providing centralized management for database and VM recovery point objectives (RPO).'
                  },
                  {
                    title: 'Cloud Billing & Cost Visibility',
                    desc: 'Export billing telemetry into BigQuery for custom cost allocation reports, budget alerts, and enterprise unit economics.'
                  },
                  {
                    title: 'Resource Optimization & CUDs',
                    desc: 'Committed Use Discounts (CUDs) and automated VM rightsizing recommendations optimizing compute spend continuously.'
                  }
                ].map((op, oIdx) => (
                  <div
                    key={oIdx}
                    className="p-5 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 space-y-2 hover:border-[#4285F4]/40 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#4285F4] dark:text-cyan-400 shrink-0" />
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                        {op.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {op.desc}
                    </p>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 10. GOOGLE CLOUD IMPLEMENTATION APPROACH                     */}
      {/* Clean Connected Engineering Sequence                         */}
      {/* ============================================================ */}
      <section id="gcp-approach" className="py-20 lg:py-24 bg-slate-50 dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5" />
              <span>ENGAGEMENT METHODOLOGY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Google Cloud Implementation Approach
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Our structured engineering sequence ensures risk-mitigated delivery across five connected stages,
              from initial workload discovery through continuous operational optimization.
            </p>
          </div>

          {/* Sequence Step Selector */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {implementationSequence.map((item, idx) => (
              <button
                key={item.step}
                onClick={() => setActiveSeqIdx(idx)}
                className={`p-5 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                  activeSeqIdx === idx
                    ? 'bg-white dark:bg-[#0B1528] border-[#4285F4] dark:border-[#4285F4] shadow-xl ring-2 ring-[#4285F4]/20'
                    : 'bg-white/60 dark:bg-[#070E1E] border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold ${
                      activeSeqIdx === idx
                        ? 'bg-[#4285F4] text-white'
                        : 'bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-slate-300'
                    }`}>
                      {item.step}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                      STAGE
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {item.name}
                    </h3>
                    <p className="text-xs font-mono text-[#4285F4] dark:text-cyan-400 font-medium mt-0.5 line-clamp-1">
                      {item.tagline}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Active Step Details Card */}
          <div className="p-8 rounded-3xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 shadow-lg space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-white/10 pb-6">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-[#4285F4] dark:text-cyan-400 uppercase tracking-wider">
                  STAGE {implementationSequence[activeSeqIdx].step} • ENGINEERING DELIVERABLE
                </span>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                  {implementationSequence[activeSeqIdx].name} — {implementationSequence[activeSeqIdx].tagline}
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed max-w-4xl">
              {implementationSequence[activeSeqIdx].description}
            </p>

            <div className="space-y-3 pt-2">
              <div className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                CORE DELIVERABLES &amp; ARTIFACTS:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {implementationSequence[activeSeqIdx].deliverables.map((del, dIdx) => (
                  <div
                    key={dIdx}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-[#070E1E] border border-slate-200/80 dark:border-white/5 flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#4285F4] dark:text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-slate-800 dark:text-slate-200">
                      {del}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 11. FINAL CTA SECTION                                        */}
      {/* Build Your Next Chapter on Google Cloud                      */}
      {/* ============================================================ */}
      <section className="relative py-24 bg-[#070E1E] text-white overflow-hidden border-b border-slate-800">
        {/* Subtle Google Cloud Color Flow Lines */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[350px] bg-[#4285F4]/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[300px] bg-[#34A853]/15 rounded-full blur-[120px] pointer-events-none" />

        {/* Linework Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.04] pointer-events-none" 
          style={{ backgroundImage: 'linear-gradient(to right, #4285F4 1px, transparent 1px), linear-gradient(to bottom, #4285F4 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800/90 border border-slate-700 text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#FBBC05]" />
            <span>START YOUR GOOGLE CLOUD CONVERSATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Build Your Next Chapter on Google Cloud
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Whether you are planning a cloud migration, developing a modern data platform, introducing AI capabilities,
            or improving your cloud operations, Knooviq can help you define a practical technical roadmap.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={handleDiscussStrategy}
              className="px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-gradient-to-r from-[#00A3E0] to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-lg shadow-cyan-500/30 flex items-center gap-2.5 group cursor-pointer"
            >
              <span>Talk to Our Cloud Experts</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <Link
              to="/cloud-operations/aws"
              className="px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 hover:text-white border border-white/20 font-bold text-xs sm:text-sm tracking-wide transition-all flex items-center gap-2 group cursor-pointer"
            >
              <span>Explore Amazon Web Services</span>
              <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#4285F4]" />
              <span>BigQuery &amp; Vertex AI Specialization</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#34A853]" />
              <span>GKE Autopilot Enterprise Foundation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#FBBC05]" />
              <span>24/7 Managed SRE Operations</span>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 12. COMPLEMENTARY CAPABILITIES (Purely Informative)          */}
      {/* ============================================================ */}
      <RelatedCloudServices currentPath="/cloud-operations/gcp" />

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-fadeIn"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-slate-900 border border-slate-700/80 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between gap-4">
              <div>
                {lightboxImage.badge && (
                  <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-2 py-0.5 rounded font-bold">
                    {lightboxImage.badge}
                  </span>
                )}
                <h3 className="text-lg font-bold text-white mt-1">
                  {lightboxImage.title}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  {lightboxImage.subtitle}
                </p>
              </div>
              <button
                onClick={() => setLightboxImage(null)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 sm:p-6 flex items-center justify-center bg-slate-950">
              <img
                src={lightboxImage.url}
                alt={lightboxImage.title}
                className="max-h-[70vh] w-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
