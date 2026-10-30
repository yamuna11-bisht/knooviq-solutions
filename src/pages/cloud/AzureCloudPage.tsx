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
// Section 3: Azure Cloud Architecture Domains Data
// -------------------------------------------------------------
const architectureDomains = [
  {
    id: 'applications',
    name: 'Applications',
    tagline: 'Azure App Service, Azure Functions & Azure Kubernetes Service (AKS)',
    description:
      'High-throughput application fabrics engineered for cloud-native microservices, event-driven serverless computing, and enterprise container fleets with automated autoscaling.',
    services: [
      {
        name: 'Azure Kubernetes Service (AKS)',
        role: 'Enterprise managed Kubernetes with automated node provisioning, Azure CNI network micro-segmentation, and private API cluster endpoints.'
      },
      {
        name: 'Azure App Service',
        role: 'Fully managed enterprise web application hosting with built-in TLS lifecycle, staging deployment slots, and regional VNet injection.'
      },
      {
        name: 'Azure Functions',
        role: 'Event-driven serverless computing triggered by Azure Event Grid, Cosmos DB change feeds, and message queues with dynamic scale-to-zero.'
      }
    ],
    technicalHighlights: [
      'Sub-minute horizontal pod autoscaling with KEDA event-driven triggers',
      'Immutable container deployments with Azure Container Registry (ACR) signing',
      'Regional Virtual Network integration with zero public internet exposure'
    ]
  },
  {
    id: 'infrastructure',
    name: 'Infrastructure',
    tagline: 'Azure Virtual Machines, Azure Virtual Network (VNet) & Azure Load Balancer',
    description:
      'Resilient compute and networking foundations connecting hybrid enterprise sites, software-defined virtual networks, and multi-zone high-availability failover topologies.',
    services: [
      {
        name: 'Azure Virtual Machines',
        role: 'Optimized compute instances spanning memory-intensive M-series, confidential compute VMs, and GPU-accelerated clusters with managed disks.'
      },
      {
        name: 'Azure Virtual Network (VNet)',
        role: 'Software-defined isolated enterprise networks with custom IPv4/IPv6 CIDR subnets, Network Security Groups (NSGs), and User Defined Routes (UDRs).'
      },
      {
        name: 'Azure Load Balancer',
        role: 'Ultra-low latency Layer 4 load balancing delivering high-throughput packet forwarding across Availability Zones with health probes.'
      }
    ],
    technicalHighlights: [
      'Up to 99.99% VM uptime backed by Microsoft Availability Zones',
      'Accelerated networking delivering up to 100Gbps network bandwidth',
      'Private dedicated fiber interconnectivity via Azure ExpressRoute'
    ]
  },
  {
    id: 'data-storage',
    name: 'Data & Storage',
    tagline: 'Azure Blob Storage, Azure SQL Database & Azure Data Lake Storage',
    description:
      'Unified enterprise persistence layer offering exabyte-scale object storage, mission-critical relational clustering, and hierarchical analytics data lakes.',
    services: [
      {
        name: 'Azure Blob Storage',
        role: 'Massively scalable object storage with immutable WORM policies, automated lifecycle archiving, and customer-managed key encryption.'
      },
      {
        name: 'Azure SQL Database & Managed Instance',
        role: 'Fully managed relational database engine with automated indexing, built-in high availability, and evergreen SQL Server compatibility.'
      },
      {
        name: 'Azure Data Lake Storage (ADLS Gen2)',
        role: 'Hierarchical namespace storage tailored for high-performance enterprise analytics, Spark processing engines, and large-scale big data ingestion.'
      }
    ],
    technicalHighlights: [
      'Geo-zone-redundant storage (GZRS) replicating across paired primary regions',
      'Intelligent performance tuning with automated deadlock remediation',
      'POSIX-compliant access control lists (ACLs) integrated with Entra ID'
    ]
  },
  {
    id: 'security',
    name: 'Security',
    tagline: 'Microsoft Entra ID, Azure Key Vault & Microsoft Defender for Cloud',
    description:
      'Zero-Trust security envelope implementing continuous identity verification, hardware-backed cryptographic vaults, and automated multi-cloud threat protection.',
    services: [
      {
        name: 'Microsoft Entra ID',
        role: 'Enterprise identity and access management with Privileged Identity Management (PIM), Conditional Access, and seamless single sign-on.'
      },
      {
        name: 'Azure Key Vault',
        role: 'FIPS 140-2 Level 3 validated hardware security modules (HSM) safeguarding cryptographic keys, secrets, and TLS certificates.'
      },
      {
        name: 'Microsoft Defender for Cloud',
        role: 'Cloud Security Posture Management (CSPM) and Cloud Workload Protection (CWP) delivering continuous threat detection and compliance scoring.'
      }
    ],
    technicalHighlights: [
      'Just-in-time (JIT) privileged access eliminating permanent administrative standing rights',
      'Automated key rotation and certificate renewal without application downtime',
      '100% compliance mapping against Microsoft Cloud Security Benchmark'
    ]
  },
  {
    id: 'management',
    name: 'Management',
    tagline: 'Azure Monitor, Azure Policy & Azure Automation',
    description:
      'Centralized operational observability, declarative policy-as-code governance, and self-healing automation runbooks governing enterprise subscriptions.',
    services: [
      {
        name: 'Azure Monitor & Application Insights',
        role: 'Unified full-stack telemetry ingestion, distributed request tracing, metrics visual dashboards, and automated alert action groups.'
      },
      {
        name: 'Azure Policy',
        role: 'Declarative policy-as-code engine enforcing resource location boundaries, required billing tags, and CIS benchmark baselines.'
      },
      {
        name: 'Azure Automation',
        role: 'Cloud configuration management, OS patch orchestration, and event-driven PowerShell and Python runbooks for self-healing systems.'
      }
    ],
    technicalHighlights: [
      'Subscription-wide guardrails preventing unapproved resource creation',
      'Centralized Log Analytics workspaces with automated data retention policies',
      'Automated drift remediation and schedule-based resource power cycling'
    ]
  }
];

// -------------------------------------------------------------
// Section 4: Migration & Modernization Methodology Steps
// -------------------------------------------------------------
const migrationSteps = [
  {
    step: '01',
    title: 'Infrastructure & Application Discovery',
    description:
      'Deploy agentless Azure Migrate appliances to scan VMware, Hyper-V, physical servers, and databases, cataloging compute resources, operating system configurations, and network interfaces.',
    outcome: 'Complete asset inventory and hardware utilization telemetry'
  },
  {
    step: '02',
    title: 'Workload Dependency Assessment',
    description:
      'Perform deep dependency mapping across multi-tier enterprise systems, identifying network interconnects, data flow latencies, and critical third-party integrations to prevent cutover disruption.',
    outcome: 'Wave grouping matrix based on inter-service dependencies'
  },
  {
    step: '03',
    title: 'Azure Landing-Zone Planning',
    description:
      'Construct a production-ready Azure Landing Zone (ALZ) using the Microsoft Cloud Adoption Framework (CAF) with Management Group hierarchy, subscription isolation, and Virtual WAN hub topologies.',
    outcome: 'Automated Terraform/Bicep landing zone foundation'
  },
  {
    step: '04',
    title: 'Server & Database Migration',
    description:
      'Execute continuous block-level server replication via Azure Site Recovery and transactional database sync via Azure Database Migration Service without impacting ongoing business operations.',
    outcome: 'Near-zero downtime cutovers with automated data replication'
  },
  {
    step: '05',
    title: 'Application Replatforming & Modernization',
    description:
      'Refactor monolithic workloads into containerized services running on Azure Kubernetes Service (AKS), App Service, and managed Azure SQL instances to eliminate operational OS overhead.',
    outcome: 'Cloud-native scalability, automated patch cycles, and reduced TCO'
  },
  {
    step: '06',
    title: 'Validation & Operational Handover',
    description:
      'Execute comprehensive smoke test suites, performance regression audits, and failover drills before transferring the environment to the 24/7 Azure certified operations team.',
    outcome: 'Validated production cutover sign-off and runbook handover'
  }
];

// -------------------------------------------------------------
// Section 6: Data, Analytics & AI Flow Steps
// -------------------------------------------------------------
const dataAiStages = [
  {
    stage: '01',
    title: 'Data Ingestion',
    service: 'Azure Data Factory & Event Hubs',
    role: 'Hybrid batch and real-time streaming data ingestion across 90+ enterprise connectors, SaaS platforms, and on-premises operational databases.',
    badge: 'INGEST'
  },
  {
    stage: '02',
    title: 'Unified Lake Storage',
    service: 'Azure Data Lake Storage Gen2',
    role: 'Hierarchical namespace storage providing secure, cost-effective data lake persistence for structured, semi-structured, and unstructured telemetry.',
    badge: 'STORE'
  },
  {
    stage: '03',
    title: 'Analytics & Warehousing',
    service: 'Azure Synapse Analytics & Databricks',
    role: 'Massively parallel processing (MPP) query engines and unified Apache Spark clusters powering scalable ETL pipelines and enterprise semantic models.',
    badge: 'PROCESS'
  },
  {
    stage: '04',
    title: 'Machine Learning & AI',
    service: 'Azure Machine Learning & Azure AI',
    role: 'Automated MLOps pipelines, custom model fine-tuning, and enterprise cognitive services backed by responsible AI governance and security.',
    badge: 'INTELLIGENCE'
  },
  {
    stage: '05',
    title: 'Enterprise Consumption',
    service: 'Microsoft Fabric & Power BI',
    role: 'Seamless semantic reporting, unified executive dashboards, and real-time operational decision support embedded directly in business workflows.',
    badge: 'ACT'
  }
];

// -------------------------------------------------------------
// Section 7: Microsoft Ecosystem Integration Scenarios
// -------------------------------------------------------------
const ecosystemIntegrations = [
  {
    title: 'Microsoft 365 & Workplace Modernization',
    tech: 'Microsoft 365 • Graph API • Teams',
    description:
      'Integrate core Azure infrastructure with Microsoft 365 applications using Microsoft Graph API, enabling secure document automation, Teams collaboration workflows, and enterprise communication.'
  },
  {
    title: 'Unified Identity & Zero Trust Perimeter',
    tech: 'Microsoft Entra ID • Conditional Access • PIM',
    description:
      'Single centralized identity directory synchronizing active directory accounts across on-prem datacenters, Azure subscriptions, and third-party SaaS apps with adaptive multi-factor authentication.'
  },
  {
    title: 'Low-Code Enterprise Automation',
    tech: 'Microsoft Power Platform • Power Apps • Power Automate',
    description:
      'Connect citizen-developed Power Apps and automated flow sequences directly to enterprise Azure APIs, Azure SQL backends, and serverless Azure Functions with enterprise governance.'
  },
  {
    title: 'Unified Data & Analytics Fabric',
    tech: 'Microsoft Fabric • OneLake • Synapse',
    description:
      'Unify enterprise data assets through Microsoft Fabric OneLake, eliminating data duplication while granting seamless analytics access to Power BI and Azure Synapse workloads.'
  },
  {
    title: 'Hybrid & Multi-Cloud Connectivity',
    tech: 'Azure Arc • ExpressRoute • Azure Stack',
    description:
      'Project on-premises bare metal servers, remote edge systems, and external cloud infrastructure into Azure Resource Manager, enforcing consistent security and compliance baselines.'
  },
  {
    title: 'Enterprise APIs & Legacy Modernization',
    tech: 'Azure API Management • Azure Logic Apps',
    description:
      'Modernize legacy ERP and CRM platforms by wrapping transactional endpoints in managed Azure API gateways with token rate-limiting, OAuth security, and real-time monitoring.'
  }
];

// -------------------------------------------------------------
// Section 9: 5-Phase Implementation Approach Timeline
// -------------------------------------------------------------
const implementationTimeline = [
  {
    phase: 'Phase 01',
    name: 'Discover',
    tagline: 'Workload & Dependency Assessment',
    description:
      'Comprehensive discovery of application architecture, technical dependencies, licensing entitlements, and business objectives to establish the cloud modernization baseline.',
    deliverables: [
      'Automated workload dependency maps',
      'Azure Hybrid Benefit TCO financial model',
      'Cloud readiness scorecard & risk register'
    ]
  },
  {
    phase: 'Phase 02',
    name: 'Design',
    tagline: 'Architecture & Security Strategy',
    description:
      'Detailed blueprinting of Azure Landing Zone management hierarchy, network hub-and-spoke topologies, zero-trust security perimeters, and wave cutover sequencing.',
    deliverables: [
      'Enterprise Landing Zone (ALZ) architecture specification',
      'Security baseline & Entra ID RBAC matrix',
      'Step-by-step migration wave runbook'
    ]
  },
  {
    phase: 'Phase 03',
    name: 'Build & Migrate',
    tagline: 'Foundation & Workload Execution',
    description:
      'Deployment of infrastructure as code, automated Landing Zone provisioning, non-disruptive data replication, and controlled pilot and wave cutovers with minimal downtime.',
    deliverables: [
      'Production-ready Terraform/Bicep code repositories',
      'Database transactional replication via DMS',
      'Continuous block synchronization via Azure Site Recovery'
    ]
  },
  {
    phase: 'Phase 04',
    name: 'Validate',
    tagline: 'Security & Operational Readiness',
    description:
      'Rigorous testing covering performance load baselines, disaster recovery failover simulations, regulatory compliance audits, and security vulnerability validation.',
    deliverables: [
      'Performance benchmarking sign-off report',
      'Disaster recovery RTO/RPO drill verification',
      'End-to-end user acceptance & security approval'
    ]
  },
  {
    phase: 'Phase 05',
    name: 'Operate & Improve',
    tagline: 'Continuous Monitoring & FinOps',
    description:
      'Transition to 24/7 managed cloud operations, continuous Azure Cost Management optimization, proactive telemetry alerting, and ongoing architectural reviews.',
    deliverables: [
      '24/7 observability and incident response runbooks',
      'Monthly FinOps right-sizing & Savings Plan audits',
      'Quarterly Microsoft Well-Architected reviews'
    ]
  }
];

export const AzureCloudPage: React.FC<ChildPageProps> = ({ onOpenContact }) => {
  // Active state for interactive architecture domain explorer
  const [activeDomainIdx, setActiveDomainIdx] = useState<number>(0);
  const [domainDelay, setDomainDelay] = useState<number>(5000);
  const [domainTrigger, setDomainTrigger] = useState<number>(0);

  // Active state for interactive implementation timeline
  const [activePhaseIdx, setActivePhaseIdx] = useState<number>(0);

  // Active state for data & AI pipeline stages
  const [activeDataStageIdx, setActiveDataStageIdx] = useState<number>(0);

  // Lightbox modal state
  const [lightboxImage, setLightboxImage] = useState<LightboxState | null>(null);

  // Document setup
  useEffect(() => {
    document.title = 'Microsoft Azure Consulting, Migration & Cloud Architecture | KNOOVIQ';
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

  // Auto-cycling for Architecture Domains with 3-second delay upon click
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveDomainIdx((prev) => (prev + 1) % architectureDomains.length);
      setDomainDelay(5000); // Resume regular 5-second interval
    }, domainDelay);
    return () => clearTimeout(timer);
  }, [activeDomainIdx, domainDelay, domainTrigger]);

  const handleSelectDomain = (idx: number) => {
    setActiveDomainIdx(idx);
    setDomainDelay(3000); // Wait 3 seconds upon click before continuing
    setDomainTrigger((prev) => prev + 1);
  };

  const handleDiscussStrategy = () => {
    if (onOpenContact) {
      onOpenContact('Microsoft Azure Enterprise Strategy');
    }
  };

  const handleExploreSolutions = () => {
    const el = document.getElementById('azure-architecture');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#050B17] text-slate-900 dark:text-white transition-colors duration-300 selection:bg-[#0078D4]/20 selection:text-[#0078D4]">

      {/* ============================================================ */}
      {/* 1. HERO SECTION: Full-Screen Panoramic Hero with Full-Bleed Image & Text Overlay */}
      {/* ============================================================ */}
      <section className="relative w-full min-h-[calc(100vh-5rem)] flex items-center bg-[#050B17] text-white overflow-hidden border-b border-slate-800">
        
        {/* Full-Bleed Panoramic Background Image — Spans 100% of Screen */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/cloud/azure/azure_hero_datacenter.jpg"
            alt="Microsoft Azure Enterprise Practice"
            className="w-full h-full object-cover object-center lg:object-[65%_center] filter brightness-105 contrast-105"
          />
          {/* Directional scrim: smoothly protects text readability on the left while keeping center & right visuals 100% bright */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050B17] via-[#050B17]/85 sm:via-[#050B17]/70 md:via-[#050B17]/50 to-transparent w-full lg:w-3/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050B17] via-transparent to-[#050B17]/50" />
          <div className="absolute inset-0 bg-[radial-gradient(#0078D4_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-16 sm:py-20 lg:py-24 space-y-8">
          
          {/* Top Breadcrumb & Clean Badge */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-md backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#0078D4] animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                MICROSOFT AZURE ENTERPRISE PRACTICE
              </span>
            </div>

            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-800">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-slate-600">/</span>
              <Link to="/cloud-operations" className="hover:text-white transition-colors">Cloud</Link>
              <span className="text-slate-600">/</span>
              <span className="text-[#00A3E0]">Microsoft Azure</span>
            </nav>
          </div>

          {/* Text Content Block (Sits over the left side of the full screen background) */}
          <div className="max-w-2xl lg:max-w-3xl space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.12] drop-shadow-md">
              Build Smarter. Innovate Faster with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-[#0078D4]">
                Microsoft Azure
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl drop-shadow-sm">
              Help enterprises build, modernize, and operate secure cloud environments with Microsoft Azure.
              Knooviq supports cloud strategy, application modernization, infrastructure migration,
              identity management, enterprise integration, and data-driven solutions aligned with business and
              technical requirements.
            </p>

            {/* Value Bullet Bar */}
            <div className="pt-4 border-t border-slate-700/60 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0078D4] shrink-0" />
                <span>CAF Aligned</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0" />
                <span>Landing Zones</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0078D4] shrink-0" />
                <span>Zero-Trust Model</span>
              </div>
            </div>
          </div>

          {/* Key Metric Highlights Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            {[
              { value: 'Up to 85%', label: 'Azure Hybrid Benefit', detail: 'Windows & SQL Server license cost savings' },
              { value: '< 30 Mins', label: 'Migration Cutover Window', detail: 'Continuous block sync via Azure Site Recovery' },
              { value: '100% Policy', label: 'Security Benchmark Compliance', detail: 'Automated Azure Policy-as-code guardrails' },
              { value: '99.99%', label: 'High Availability Target', detail: 'Multi-zone failover & redundant data storage' }
            ].map((stat, sIdx) => (
              <div
                key={sIdx}
                className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-slate-800/90 hover:border-slate-700 transition-colors space-y-1 shadow-lg"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-[#0078D4]">
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
      {/* 2. AZURE CLOUD ARCHITECTURE                                  */}
      {/* Modern Architecture for Modern Business                       */}
      {/* ============================================================ */}
      <section id="azure-architecture" className="py-20 lg:py-24 bg-slate-50 dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              <span>TECHNICAL ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Modern Architecture for Modern Business
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Explore how core Microsoft Azure services interconnect to form a high-availability, zero-trust cloud foundation
              spanning applications, high-density infrastructure, enterprise data storage, identity security, and operational management.
            </p>
          </div>

          {/* Interactive Architecture Explorer Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 4 Cols: 5 Architectural Domain Tabs */}
            <div className="lg:col-span-4 space-y-3">
              <div className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider pb-1">
                EXPLORE ARCHITECTURAL DOMAINS:
              </div>
              {architectureDomains.map((domain, dIdx) => (
                <button
                  key={domain.id}
                  onClick={() => handleSelectDomain(dIdx)}
                  className={`w-full p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                    activeDomainIdx === dIdx
                      ? 'bg-white dark:bg-[#0B1528] border-[#0078D4] dark:border-cyan-400/60 shadow-lg shadow-[#0078D4]/10 ring-1 ring-[#0078D4]'
                      : 'bg-white/60 dark:bg-[#070E1E] border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold text-[#0078D4] dark:text-cyan-400 uppercase tracking-wider">
                      DOMAIN 0{dIdx + 1}
                    </span>
                    {activeDomainIdx === dIdx && (
                      <span className="w-2 h-2 rounded-full bg-[#0078D4] animate-ping" />
                    )}
                  </div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white mt-1">
                    {domain.name}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                    {domain.tagline}
                  </div>
                </button>
              ))}
            </div>

            {/* Right 8 Cols: Domain Deep Dive & Services Breakdown */}
            <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 shadow-xl space-y-8">
              
              {/* Header of Active Domain */}
              <div className="space-y-2 border-b border-slate-100 dark:border-white/10 pb-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="px-3 py-1 rounded-full bg-sky-50 dark:bg-cyan-500/10 border border-sky-200 dark:border-cyan-400/20 text-[#0078D4] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
                    DOMAIN 0{activeDomainIdx + 1} • COMPONENT SPECIFICATION
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    Auto-cycles • click to pause
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {architectureDomains[activeDomainIdx].name}
                </h3>
                <p className="text-xs font-mono font-bold text-[#0078D4] dark:text-cyan-400">
                  {architectureDomains[activeDomainIdx].tagline}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                  {architectureDomains[activeDomainIdx].description}
                </p>
              </div>

              {/* Core Services in this Domain */}
              <div className="space-y-4">
                <div className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  CORE AZURE SERVICES IN THIS DOMAIN:
                </div>
                <div className="space-y-3">
                  {architectureDomains[activeDomainIdx].services.map((svc, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-4 rounded-xl bg-slate-50 dark:bg-[#070E1E] border border-slate-200/80 dark:border-white/5 space-y-1"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0078D4] dark:text-cyan-400 shrink-0" />
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

              {/* Technical Highlights Bar */}
              <div className="p-4 rounded-2xl bg-sky-50/60 dark:bg-cyan-950/20 border border-sky-100 dark:border-cyan-400/20 space-y-2">
                <div className="text-xs font-mono font-bold text-[#0078D4] dark:text-cyan-300 uppercase tracking-wider flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5" />
                  <span>ARCHITECTURAL BENCHMARK &amp; GUARANTEE:</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-slate-700 dark:text-slate-300">
                  {architectureDomains[activeDomainIdx].technicalHighlights.map((th, thIdx) => (
                    <div key={thIdx} className="flex items-start gap-1.5">
                      <span className="text-[#0078D4] font-bold">•</span>
                      <span>{th}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Architecture Visual Banner */}
          <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-lg">
            <div
              className="w-full h-[260px] sm:h-[300px] relative bg-slate-950"
            >
              <img
                src="/images/cloud/azure/azure_architecture_systems.jpg"
                alt="Unified Multi-Tier Cloud Interconnect - Central cloud infrastructure connected to laptops, smartphones, and distributed management consoles"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-transparent flex items-center">
                <div className="p-6 sm:p-10 max-w-xl space-y-3 select-text">
                  <span className="text-xs font-mono font-bold text-[#00A3E0] uppercase tracking-wider block">
                    ENTERPRISE INTEGRATION BLUEPRINT
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Unified Multi-Tier Cloud Interconnect
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Designed according to the Microsoft Well-Architected Framework, ensuring security, resilience, operational
                    excellence, performance efficiency, and cost optimization across all enterprise subscriptions.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. AZURE MIGRATION & MODERNIZATION                           */}
      {/* Move to the Cloud with Confidence                             */}
      {/* ============================================================ */}
      <section id="azure-migration" className="py-20 lg:py-24 bg-white dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left 6 Cols: Content & 6-Step Migration Methodology */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
                  <Workflow className="w-3.5 h-3.5" />
                  <span>MIGRATION &amp; MODERNIZATION</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Move to the Cloud with Confidence
                </h2>
                <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  Migrating mission-critical enterprise workloads requires rigorous dependency mapping, structured landing zones,
                  and automated synchronization. We lead enterprise migrations from discovery through operational handover
                  with minimal disruption to production business processes.
                </p>
              </div>

              {/* 6 Structured Migration Steps */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {migrationSteps.map((step) => (
                  <div
                    key={step.step}
                    className="p-5 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 space-y-2 hover:border-[#0078D4]/40 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[#0078D4] dark:text-cyan-400">
                        STEP {step.step}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="pt-2 border-t border-slate-200/60 dark:border-white/5 text-[11px] font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <span className="font-bold text-[#0078D4] dark:text-cyan-400">Outcome:</span>
                      <span className="line-clamp-1">{step.outcome}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 5 Cols: Migration Visual Frame */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-950 p-2">
                <div
                  className="relative rounded-2xl overflow-hidden w-full h-[400px] sm:h-[460px]"
                >
                  <img
                    src="/images/cloud/azure/azure_migration_modernize.jpg"
                    alt="Move to the Cloud with Confidence - Enterprise cloud architect evaluating illuminated cloud network topology and workload telemetry"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent pointer-events-none" />
                  
                  {/* Floating Overlay Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl backdrop-blur-md bg-slate-900/85 border border-slate-700/60 text-white space-y-1 select-text">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-[#0078D4] font-bold">AZURE MIGRATE ACCELERATORS</span>
                      <span className="text-cyan-300 font-semibold">ZERO DISRUPTION</span>
                    </div>
                    <p className="text-[11px] text-slate-300">
                      Continuous block replication, automated schema migration for SQL Server, and non-disruptive cutover smoke testing.
                    </p>
                  </div>
                </div>
              </div>

              {/* Technical Capabilities Callout Box */}
              <div className="p-5 rounded-2xl bg-sky-50 dark:bg-cyan-950/20 border border-sky-100 dark:border-cyan-400/20 space-y-2">
                <div className="text-xs font-mono font-bold text-[#0078D4] dark:text-cyan-300 uppercase tracking-wider flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>KEY MIGRATION HIGHLIGHTS:</span>
                </div>
                <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1.5 list-disc list-inside">
                  <li>Automated license optimization maximizing Azure Hybrid Benefit savings</li>
                  <li>Replatforming legacy monolithic APIs into Azure Container Apps and AKS</li>
                  <li>Database Migration Service (DMS) ensuring continuous zero-loss transactional replication</li>
                </ul>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. AZURE SECURITY & GOVERNANCE                               */}
      {/* Protect Every Layer of Your Cloud                            */}
      {/* ============================================================ */}
      <section id="azure-security" className="py-20 lg:py-24 bg-slate-50 dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left 5 Cols: Security Visual Frame */}
            <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-950 p-2">
                <div
                  className="relative rounded-2xl overflow-hidden w-full h-[400px] sm:h-[460px]"
                >
                  <img
                    src="/images/cloud/azure/azure_security_governance.jpg"
                    alt="Protect Every Layer of Your Cloud - Secure datacenter servers transmitting encrypted telemetry to multi-layered cloud security envelopes"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent pointer-events-none" />
                  
                  {/* Floating Overlay Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl backdrop-blur-md bg-slate-900/85 border border-slate-700/60 text-white space-y-1 select-text">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-cyan-400 font-bold">ZERO-TRUST ARCHITECTURE</span>
                      <span className="text-[#0078D4] font-semibold">DEFENDER FOR CLOUD</span>
                    </div>
                    <p className="text-[11px] text-slate-300">
                      Unified identity perimeter, just-in-time access, cryptographic key isolation, and continuous posture auditing.
                    </p>
                  </div>
                </div>
              </div>

              {/* Policy Callout Box */}
              <div className="p-5 rounded-2xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 space-y-2">
                <div className="text-xs font-mono font-bold text-[#0078D4] dark:text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5" />
                  <span>REGULATORY ALIGNMENT</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Automated Azure Policy blueprints enforce continuous compliance with ISO 27001, SOC 2, HIPAA, and the
                  Microsoft Cloud Security Benchmark (MCSB) across all landing zone subscriptions.
                </p>
              </div>
            </div>

            {/* Right 7 Cols: Security Deep Dive Content */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
                  <Lock className="w-3.5 h-3.5" />
                  <span>SECURITY &amp; GOVERNANCE</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Protect Every Layer of Your Cloud
                </h2>
                <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  Security in Azure is built on a defense-in-depth model where identity is the new security perimeter.
                  We implement robust access controls, cryptographic isolation, policy-driven guardrails, and automated resilience
                  mechanisms across every workload.
                </p>
              </div>

              {/* Security Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: Shield,
                    title: 'Microsoft Entra ID & Identity Management',
                    desc: 'Privileged Identity Management (PIM) with just-in-time access, Conditional Access policies, and passwordless authentication eliminating permanent admin privileges.'
                  },
                  {
                    icon: Lock,
                    title: 'Role-Based Access Control (RBAC)',
                    desc: 'Granular least-privilege role assignments at Management Group, subscription, and resource group scopes with automated access review certifications.'
                  },
                  {
                    icon: KeyRound,
                    title: 'Azure Key Vault & Encryption',
                    desc: 'FIPS 140-2 Level 3 validated HSMs managing Customer-Managed Keys (CMK) for data-at-rest encryption and automated TLS certificate lifecycles.'
                  },
                  {
                    icon: Activity,
                    title: 'Microsoft Defender for Cloud',
                    desc: 'Continuous Cloud Security Posture Management (CSPM) and Cloud Workload Protection (CWP) with integrated SIEM/SOAR threat hunting via Microsoft Sentinel.'
                  },
                  {
                    icon: FileCode2,
                    title: 'Azure Policy & Guardrails',
                    desc: 'Automated policy-as-code guardrails preventing unencrypted storage, unauthorized regional deployments, and non-compliant network configurations.'
                  },
                  {
                    icon: Server,
                    title: 'Logging, Backup & Disaster Recovery',
                    desc: 'Centralized Log Analytics auditing, Azure Backup with immutable vaults, and Azure Site Recovery testing sub-hour RTO/RPO disaster recovery.'
                  }
                ].map((pillar, pIdx) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={pIdx}
                      className="p-5 rounded-2xl bg-white dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 space-y-2 hover:border-[#0078D4]/40 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-sky-50 dark:bg-cyan-500/10 flex items-center justify-center text-[#0078D4] dark:text-cyan-400">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                          {pillar.title}
                        </h3>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. AZURE APPLICATION ENGINEERING                             */}
      {/* Engineer Applications for the Next Stage                     */}
      {/* ============================================================ */}
      <section id="azure-app-engineering" className="py-20 lg:py-24 bg-white dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left 7 Cols: Content & Cloud-Native Engineering Matrix */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>CLOUD-NATIVE ENGINEERING</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Engineer Applications for the Next Stage
                </h2>
                <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  Accelerate developer productivity and deployment velocity with modern cloud-native architectures.
                  We architect container fleets on Azure Kubernetes Service (AKS), event-driven serverless backends with
                  Azure Functions, managed API gateways, and automated CI/CD pipelines with Bicep and Terraform.
                </p>
              </div>

              {/* Application Engineering Services Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Azure App Service',
                    tech: 'PaaS Web Hosting • Auto-scale',
                    desc: 'Enterprise web application hosting with automated scaling, deployment slots for zero-downtime releases, and native Virtual Network integration.'
                  },
                  {
                    title: 'Azure Functions & Serverless',
                    tech: 'Event-Driven • KEDA • Micro-billing',
                    desc: 'Serverless compute responding instantly to messaging queues and HTTP triggers, scaling horizontally to absorb traffic spikes with zero idle cost.'
                  },
                  {
                    title: 'Azure Kubernetes Service (AKS)',
                    tech: 'Enterprise Containers • GitOps',
                    desc: 'Certified managed Kubernetes with Azure CNI powered by Cilium, automated node pool scaling, private clusters, and Azure RBAC integration.'
                  },
                  {
                    title: 'Azure API Management (APIM)',
                    tech: 'API Gateway • Rate Limiting • OAuth',
                    desc: 'Centralized enterprise API gateway providing token validation, rate-limiting, request transformations, and unified developer portal documentation.'
                  },
                  {
                    title: 'Azure DevOps & GitHub Actions',
                    tech: 'Automated CI/CD • DevSecOps',
                    desc: 'End-to-end continuous integration and deployment pipelines with automated static security analysis and container vulnerability scanning.'
                  },
                  {
                    title: 'Infrastructure as Code (IaC)',
                    tech: 'Bicep • Terraform • Modular Templates',
                    desc: 'Declarative, reproducible infrastructure pipelines with automated PR validation, drift detection, and immutable environment spinning.'
                  }
                ].map((app, aIdx) => (
                  <div
                    key={aIdx}
                    className="p-5 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 space-y-2 hover:border-[#0078D4]/40 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                        {app.title}
                      </h3>
                    </div>
                    <div className="text-[10px] font-mono font-bold text-[#0078D4] dark:text-cyan-400">
                      {app.tech}
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {app.desc}
                    </p>
                  </div>
                ))}
              </div>

            </div>

            {/* Right 5 Cols: Application Engineering Visual */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-950 p-2">
                <div
                  className="relative rounded-2xl overflow-hidden w-full h-[400px] sm:h-[460px]"
                >
                  <img
                    src="/images/cloud/azure/azure_app_engineering.jpg"
                    alt="Engineer Applications for the Next Stage - Autonomous ChatGPT and Claude AI agents engineering next-generation application architectures"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent pointer-events-none" />
                  
                  {/* Floating Overlay Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl backdrop-blur-md bg-slate-900/85 border border-slate-700/60 text-white space-y-1 select-text">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-[#0078D4] font-bold">DEVSECOPS PIPELINES</span>
                      <span className="text-cyan-300 font-semibold">GITOPS &amp; BICEP</span>
                    </div>
                    <p className="text-[11px] text-slate-300">
                      Declarative infrastructure definitions, container scanning in ACR, and automated rollback triggers.
                    </p>
                  </div>
                </div>
              </div>

              {/* Developer Velocity Box */}
              <div className="p-5 rounded-2xl bg-sky-50 dark:bg-cyan-950/20 border border-sky-100 dark:border-cyan-400/20 space-y-2">
                <div className="text-xs font-mono font-bold text-[#0078D4] dark:text-cyan-300 uppercase tracking-wider flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>DEVELOPER EXPERIENCE EXCELLENCE</span>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  Ephemeral testing environments and integrated GitHub Actions workflows enable development teams to push
                  code with confidence, cutting deployment cycle times while preserving architectural integrity.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. AZURE DATA, ANALYTICS & AI                                */}
      {/* Turn Enterprise Data into Intelligent Decisions              */}
      {/* ============================================================ */}
      <section id="azure-data-ai" className="py-20 lg:py-24 bg-slate-50 dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
              <Brain className="w-3.5 h-3.5" />
              <span>DATA, ANALYTICS &amp; ARTIFICIAL INTELLIGENCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Turn Enterprise Data into Intelligent Decisions
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Build resilient, scalable enterprise data pipelines and machine learning workflows.
              From high-capacity data lake storage and distributed Spark processing to Synapse data warehousing,
              Databricks modeling, and enterprise Azure AI services, transform raw operational telemetry into predictive intelligence.
            </p>
          </div>

          {/* Custom Connected Visual Data Flow Pipeline */}
          <div className="space-y-4">
            <div className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              END-TO-END ENTERPRISE DATA &amp; AI WORKFLOW:
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              {dataAiStages.map((stg, idx) => (
                <button
                  key={stg.stage}
                  onClick={() => setActiveDataStageIdx(idx)}
                  className={`p-4 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                    activeDataStageIdx === idx
                      ? 'bg-white dark:bg-[#0B1528] border-[#0078D4] dark:border-cyan-400 shadow-lg ring-1 ring-[#0078D4]'
                      : 'bg-white/70 dark:bg-[#070E1E] border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-sky-50 dark:bg-cyan-500/10 text-[#0078D4] dark:text-cyan-400">
                        {stg.badge}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        0{idx + 1}
                      </span>
                    </div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">
                      {stg.title}
                    </div>
                    <div className="text-[11px] font-mono text-[#0078D4] dark:text-cyan-300 font-medium line-clamp-1">
                      {stg.service}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Selected Stage Detail Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 shadow-md">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[#0078D4] dark:text-cyan-400">
                      STAGE 0{activeDataStageIdx + 1} • {dataAiStages[activeDataStageIdx].badge}
                    </span>
                    <span className="text-slate-300 dark:text-slate-600">|</span>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {dataAiStages[activeDataStageIdx].title}: {dataAiStages[activeDataStageIdx].service}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {dataAiStages[activeDataStageIdx].role}
                  </p>
                </div>
                <div className="shrink-0 text-xs font-mono text-slate-400 flex items-center gap-1">
                  <span>Pipeline node active</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0078D4] dark:text-cyan-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Section Image & Architecture Narrative Banner */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
            <div className="lg:col-span-5">
              <div
                className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-lg aspect-video lg:aspect-square bg-slate-950"
              >
                <img
                  src="/images/cloud/azure/azure_data_analytics_ai.jpg"
                  alt="Scalable Data Governance & Responsible AI - Cybernetic AI interface with holographic GPT-4 neural parameters and data governance metadata"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl backdrop-blur-md bg-slate-900/80 border border-slate-700/60 text-white space-y-1 select-text">
                  <div className="text-xs font-mono text-[#0078D4] font-bold">
                    AZURE SYNAPSE &amp; DATABRICKS
                  </div>
                  <p className="text-[11px] text-slate-300">
                    High-throughput delta lake caching with distributed Spark computation and native Azure OpenAI models.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Scalable Data Governance &amp; Responsible AI
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Enterprises running analytics on Azure benefit from native Microsoft Purview data governance,
                ensuring automated data cataloging, lineage tracking, and compliance classification across multi-cloud
                and on-premises assets.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-xl bg-white dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 space-y-1">
                  <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5 text-[#0078D4] dark:text-cyan-400" />
                    <span>Azure Synapse Analytics</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Limitless analytics service bringing together enterprise data warehousing and big data processing.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 space-y-1">
                  <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#0078D4] dark:text-cyan-400" />
                    <span>Azure AI &amp; Azure OpenAI</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Enterprise cognitive models, semantic search, and generative AI with private data isolation.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. MICROSOFT ECOSYSTEM & ENTERPRISE INTEGRATION              */}
      {/* Connect Azure with Your Business Technology                  */}
      {/* ============================================================ */}
      <section id="azure-ecosystem" className="py-20 lg:py-24 bg-white dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
              <Share2 className="w-3.5 h-3.5" />
              <span>ECOSYSTEM INTEGRATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Connect Azure with Your Business Technology
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Azure delivers the greatest value when deeply integrated with the wider enterprise technology landscape.
              We architect interconnected solutions uniting Microsoft 365 productivity, Microsoft Entra ID governance,
              Power Platform automation, Microsoft Fabric analytics, and hybrid on-premises environments.
            </p>
          </div>

          {/* Interconnected Enterprise Architecture Ecosystem Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ecosystemIntegrations.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 space-y-3 hover:border-[#0078D4]/40 transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="text-[11px] font-mono font-bold text-[#0078D4] dark:text-cyan-400">
                    {item.tech}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
                <div className="pt-3 border-t border-slate-200/60 dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  <span>Architecture Verified</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0078D4] dark:text-cyan-400" />
                </div>
              </div>
            ))}
          </div>

          {/* Technical Interconnect Callout Banner */}
          <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-3 select-text">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-[#00A3E0] uppercase tracking-wider">
                HYBRID EXTENSION VIA AZURE ARC
              </span>
              <h3 className="text-xl font-bold text-white">
                Bridge On-Premises &amp; Multi-Cloud with Azure Arc
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-4xl">
              Azure Arc projects non-Azure servers, Kubernetes clusters, and data services directly into Azure Resource Manager (ARM).
              Apply unified Azure Policy compliance, centralized patching via Azure Update Manager, and threat monitoring through
              Microsoft Defender across your entire heterogeneous enterprise IT footprint.
            </p>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. AZURE OPERATIONS & COST MANAGEMENT                        */}
      {/* Operate Azure with Clarity and Control                       */}
      {/* ============================================================ */}
      <section id="azure-operations" className="py-20 lg:py-24 bg-slate-50 dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left 5 Cols: Operations Image & Cockpit Frame */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-950 p-2">
                <div
                  className="relative rounded-2xl overflow-hidden w-full h-[400px] sm:h-[460px]"
                >
                  <img
                    src="/images/cloud/azure/azure_cloud_operations.jpg"
                    alt="Operate Azure with Clarity and Control - Azure Active Directory diamond network topology, biometric zero-trust shield, and enterprise server clusters"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent pointer-events-none" />
                  
                  {/* Floating Overlay Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl backdrop-blur-md bg-slate-900/85 border border-slate-700/60 text-white space-y-1 select-text">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-[#0078D4] font-bold">AZURE MONITOR &amp; SRE</span>
                      <span className="text-cyan-300 font-semibold">24/7 GOC GOVERNED</span>
                    </div>
                    <p className="text-[11px] text-slate-300">
                      Full-stack APM with distributed tracing, automated self-healing runbooks, and continuous FinOps cost modeling.
                    </p>
                  </div>
                </div>
              </div>

              {/* FinOps Callout Box */}
              <div className="p-5 rounded-2xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 space-y-2">
                <div className="text-xs font-mono font-bold text-[#0078D4] dark:text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                  <Gauge className="w-3.5 h-3.5" />
                  <span>CONTINUOUS FINOPS CONTROL</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Automated cost allocation tagging, budget anomaly alerts, and structured Reserved Instance commitments
                  ensure your Azure investment remains predictable and closely aligned with business unit value.
                </p>
              </div>
            </div>

            {/* Right 7 Cols: Operations & Cost Management Pillars */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
                  <Activity className="w-3.5 h-3.5" />
                  <span>OPERATIONS &amp; COST MANAGEMENT</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Operate Azure with Clarity and Control
                </h2>
                <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  Running enterprise cloud environments requires active operational discipline.
                  Our managed cloud services combine 24/7 Site Reliability Engineering (SRE), deep Application Insights APM telemetry,
                  automated disaster recovery, and continuous FinOps unit-cost optimization.
                </p>
              </div>

              {/* Operations Capabilities Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Azure Monitor & Application Insights',
                    desc: 'Full-stack application performance monitoring (APM), distributed request tracing, and live metric streams resolving bottlenecks rapidly.'
                  },
                  {
                    title: 'Infrastructure Monitoring & Alerting',
                    desc: 'Centralized Log Analytics workspaces with automated dynamic metric alerts and multi-channel escalation action groups.'
                  },
                  {
                    title: 'Availability & Resilience Planning',
                    desc: 'Multi-region architectures leveraging Availability Zones, paired regions, and Azure Traffic Manager for uninterrupted continuity.'
                  },
                  {
                    title: 'Backup & Disaster Recovery',
                    desc: 'Immutable Azure Backup vaults safeguarding databases and VMs with Azure Site Recovery validating recovery time objectives.'
                  },
                  {
                    title: 'Incident & Problem Management',
                    desc: 'ITIL v4 aligned incident workflows, automated self-healing PowerShell runbooks, and seamless integration with enterprise ITSM platforms.'
                  },
                  {
                    title: 'Azure Cost Management & FinOps',
                    desc: 'Proactive rightsizing recommendations, orphan resource cleanup, and multi-year Azure Savings Plan commitment modeling.'
                  }
                ].map((op, oIdx) => (
                  <div
                    key={oIdx}
                    className="p-5 rounded-2xl bg-white dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 space-y-2 hover:border-[#0078D4]/40 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0078D4] dark:text-cyan-400 shrink-0" />
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
      {/* 9. AZURE IMPLEMENTATION APPROACH                             */}
      {/* Connected Horizontal Timeline                                */}
      {/* ============================================================ */}
      <section id="azure-approach" className="py-20 lg:py-24 bg-white dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5" />
              <span>METHODOLOGY &amp; TIMELINE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Azure Implementation Approach
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Our proven engagement framework moves enterprise initiatives smoothly from strategic workload assessment
              to ongoing cloud optimization across five connected phases.
            </p>
          </div>

          {/* Connected Horizontal Timeline Navigation */}
          <div className="relative">
            {/* Horizontal Line connecting nodes (Desktop) */}
            <div className="hidden lg:block absolute top-6 left-10 right-10 h-0.5 bg-slate-200 dark:bg-white/10 pointer-events-none" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
              {implementationTimeline.map((item, idx) => (
                <button
                  key={item.phase}
                  onClick={() => setActivePhaseIdx(idx)}
                  className={`p-5 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                    activePhaseIdx === idx
                      ? 'bg-white dark:bg-[#0B1528] border-[#0078D4] dark:border-cyan-400 shadow-xl ring-2 ring-[#0078D4]/20'
                      : 'bg-slate-50 dark:bg-[#070E1E] border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold ${
                        activePhaseIdx === idx
                          ? 'bg-[#0078D4] text-white'
                          : 'bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-slate-300'
                      }`}>
                        0{idx + 1}
                      </div>
                      <span className="text-[10px] font-mono font-bold text-slate-400">
                        {item.phase}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">
                        {item.name}
                      </h3>
                      <p className="text-xs font-mono text-[#0078D4] dark:text-cyan-400 font-medium mt-0.5 line-clamp-1">
                        {item.tagline}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Detailed View of Active Timeline Phase */}
          <div className="p-8 rounded-3xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 shadow-lg space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 dark:border-white/10 pb-6">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-[#0078D4] dark:text-cyan-400 uppercase tracking-wider">
                  {implementationTimeline[activePhaseIdx].phase} • ENGAGEMENT MILESTONE
                </span>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                  {implementationTimeline[activePhaseIdx].name} — {implementationTimeline[activePhaseIdx].tagline}
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed max-w-4xl">
              {implementationTimeline[activePhaseIdx].description}
            </p>

            <div className="space-y-3 pt-2">
              <div className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                CORE DELIVERABLES &amp; GOVERNANCE ARTIFACTS:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {implementationTimeline[activePhaseIdx].deliverables.map((del, dIdx) => (
                  <div
                    key={dIdx}
                    className="p-4 rounded-xl bg-white dark:bg-[#070E1E] border border-slate-200/80 dark:border-white/5 flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#0078D4] dark:text-cyan-400 shrink-0 mt-0.5" />
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
      {/* 10. FINAL CTA SECTION                                        */}
      {/* Plan Your Next Step with Microsoft Azure                     */}
      {/* ============================================================ */}
      <section className="relative py-24 bg-[#070E1E] text-white overflow-hidden border-b border-slate-800">
        {/* Subtle Architectural Linework & Ambient Azure Glow */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[350px] bg-[#0078D4]/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[300px] bg-[#00A3E0]/15 rounded-full blur-[120px] pointer-events-none" />
        
        {/* Linework Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.04] pointer-events-none" 
          style={{ backgroundImage: 'linear-gradient(to right, #0078D4 1px, transparent 1px), linear-gradient(to bottom, #0078D4 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800/90 border border-slate-700 text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#0078D4]" />
            <span>START YOUR AZURE CONVERSATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Plan Your Next Step with Microsoft Azure
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Whether you are planning your first Azure migration, modernizing applications, integrating Microsoft technologies,
            or strengthening cloud governance, Knooviq can help you define a practical technical roadmap.
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
              to="/cloud-operations/gcp"
              className="px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 hover:text-white border border-white/20 font-bold text-xs sm:text-sm tracking-wide transition-all flex items-center gap-2 group cursor-pointer"
            >
              <span>Explore Google Cloud</span>
              <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0078D4]" />
              <span>Microsoft Cloud Adoption Framework (CAF)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Azure Well-Architected Framework</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0078D4]" />
              <span>24/7 Managed Cloud Operations</span>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 11. COMPLEMENTARY CAPABILITIES (Purely Informative)          */}
      {/* ============================================================ */}
      <RelatedCloudServices currentPath="/cloud-operations/azure" />

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
