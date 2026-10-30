import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  Layers,
  Network,
  Server,
  Database,
  Lock,
  Workflow,
  ShieldCheck,
  Activity,
  FileText,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Maximize2,
  X,
  Cpu,
  RefreshCw,
  GitBranch,
  Shield,
  KeyRound,
  Boxes,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Zap,
  BarChart3,
  Terminal,
  ArrowUpRight,
  HardDrive,
  FolderSync,
  SlidersHorizontal,
  Code2,
  AlertTriangle,
  Radio,
  FileCheck2,
  Scale,
  Sparkles
} from 'lucide-react';
import { RelatedCloudServices } from '../../components/cloud/RelatedCloudServices';
import { CloudConsultationCTA } from '../../components/cloud/CloudConsultationCTA';

interface CloudArchitecturePageProps {
  onOpenContact?: (topic?: string) => void;
}

interface LightboxState {
  url: string;
  title: string;
  subtitle: string;
  figure?: string;
  badge?: string;
}

// 6 Technical Layers for Overview
const architectureLayers = [
  {
    id: 'layer-app',
    number: 'Layer 01',
    name: 'Application & Microservices Tier',
    tagline: 'Component boundaries, API facades, and business logic execution',
    description:
      'Defines application decoupling strategies, containerized microservices, serverless execution units, and frontend delivery pipelines.',
    elements: ['Stateless API Containers', 'GraphQL / REST Gateways', 'BFF (Backend-For-Frontend) Patterns', 'Strangler-Fig Modernization Facades'],
    spec: '12-factor cloud-native compliance with zero local state dependencies'
  },
  {
    id: 'layer-compute',
    number: 'Layer 02',
    name: 'Compute & Runtime Platform',
    tagline: 'Multi-AZ node fleets, Kubernetes control planes, and serverless compute',
    description:
      'Determines physical-to-virtual abstraction, orchestrator scheduling (EKS, AKS, GKE), auto-scaling triggers, and hardware acceleration pools.',
    elements: ['Managed Kubernetes Fleets', 'Multi-AZ Auto-Scaling Groups', 'ARM64 / x86 Mixed Workload Scheduling', 'Serverless Event Workers'],
    spec: 'Sub-minute pod scale-out with affinity/anti-affinity placement rules'
  },
  {
    id: 'layer-storage',
    number: 'Layer 03',
    name: 'Storage & Persistence Fabric',
    tagline: 'Tiered data stores, high-IOPS NVMe blocks, and cloud object vaults',
    description:
      'Aligns data access characteristics with appropriate storage primitives: low-latency transactional disks, distributed NoSQL, and immutable object archives.',
    elements: ['High-IOPS Block Disks (gp3 / io2)', 'Distributed Managed Relational DBs', 'Scalable Object Lakehouses (S3 / Blob)', 'WORM Immutable Snapshots'],
    spec: 'Multi-region synchronous commit with deterministic sub-5ms read latencies'
  },
  {
    id: 'layer-network',
    number: 'Layer 04',
    name: 'Networking & Interconnect Mesh',
    tagline: 'VPC topology, subnet segmentation, transit routing, and secure egress',
    description:
      'Establishes software-defined connectivity, non-overlapping IP allocation, transit gateway hubs, private endpoints, and resilient edge routing.',
    elements: ['Hub-and-Spoke Transit Gateways', 'PrivateLink Service Endpoints', 'Dedicated Direct Connect / ExpressRoute', 'L4/L7 Application Load Balancers'],
    spec: 'Zero public IP exposure for backend databases and middle-tier microservices'
  },
  {
    id: 'layer-security',
    number: 'Layer 05',
    name: 'Identity & Security Perimeter',
    tagline: 'Zero-trust RBAC, hardware encryption, secrets management, and trust zones',
    description:
      'Embeds cryptographic controls into every tier: centralized SAML/OIDC identity, least-privilege IAM roles, KMS envelope encryption, and mutual TLS.',
    elements: ['Cloud KMS / HSM Envelope Encryption', 'Role-Based Access Control (RBAC)', 'Automated Secrets Rotation Vaults', 'Distributed Web Application Firewalls (WAF)'],
    spec: 'FIPS 140-2 Level 3 hardware security module key hierarchies'
  },
  {
    id: 'layer-governance',
    number: 'Layer 06',
    name: 'Observability & Policy Governance',
    tagline: 'Distributed tracing, telemetry pipelines, and GitOps policy guardrails',
    description:
      'Provides continuous operational feedback: single-pane OpenTelemetry instrumentation, declarative drift remediation, and FinOps unit cost modeling.',
    elements: ['OpenTelemetry Metric & Trace Ingestion', 'GitOps Infrastructure-as-Code (Terraform)', 'Open Policy Agent (OPA) Guardrails', 'FinOps Resource Tagging & Budget Alarms'],
    spec: 'Real-time telemetry ingestion with continuous policy compliance auditing'
  }
];

// 6 Architecture Decision Framework Considerations
const decisionFactors = [
  {
    id: 'workload',
    title: 'Business & Workload Requirements',
    badge: 'MISSION CONTEXT',
    principle: 'Architecture serves the business transaction, not technological novelty.',
    questions: [
      'What are the core transactional throughput and latency constraints?',
      'Does the workload require steady-state predictability or burstable elasticity?',
      'What are the geographic residency mandates and sovereign compliance boundaries?'
    ],
    architecturalTradeoff:
      'Balancing monolithic transactional simplicity against microservices operational overhead.'
  },
  {
    id: 'security',
    title: 'Security Architecture & Trust Boundaries',
    badge: 'DEFENSE-IN-DEPTH',
    principle: 'Never trust, always verify every network boundary, service request, and token.',
    questions: [
      'Where are the critical trust boundaries separating multi-tenant environments?',
      'Are cryptographic keys managed via customer-owned HSM or provider KMS?',
      'What is the blast-radius containment policy if a single service is compromised?'
    ],
    architecturalTradeoff:
      'Balancing aggressive micro-segmentation security with developer friction and network complexity.'
  },
  {
    id: 'reliability',
    title: 'Reliability & Recovery Architecture',
    badge: 'FAULT ISOLATION',
    principle: 'Assume everything will eventually fail; architect for rapid, deterministic recovery.',
    questions: [
      'What are the strict Recovery Point (RPO) and Recovery Time (RTO) objectives?',
      'Are failure domains isolated across multiple physical availability zones and regions?',
      'Is failover automated or governed by human-in-the-loop validation runbooks?'
    ],
    architecturalTradeoff:
      'Balancing multi-region active-active synchronization costs against pilot-light recovery times.'
  },
  {
    id: 'integration',
    title: 'Integration & Dependency Architecture',
    badge: 'SYSTEM INTEROP',
    principle: 'Loose coupling between services ensures changes in one domain do not ripple catastrophically.',
    questions: [
      'Are cross-service dependencies synchronous (blocking HTTP) or asynchronous (event streams)?',
      'How are legacy on-premises ERP systems integrated without creating latency chokepoints?',
      'Are API schemas version-controlled, backward-compatible, and contract-tested?'
    ],
    architecturalTradeoff:
      'Balancing synchronous request-response simplicity against asynchronous event-driven resilience.'
  },
  {
    id: 'scalability',
    title: 'Scalability & Resource Planning',
    badge: 'ELASTIC CAPACITY',
    principle: 'Scale horizontal stateless compute dynamically while keeping stateful data clustered cleanly.',
    questions: [
      'Can compute pods or instances scale horizontally without database lock contention?',
      'Are storage tiers architected to handle 10x throughput spikes during peak seasons?',
      'What caching primitives (Redis, CDN edge) absorb read-heavy traffic patterns?'
    ],
    architecturalTradeoff:
      'Balancing over-provisioned peak headroom expenses against aggressive auto-scaling ramp-up lag.'
  },
  {
    id: 'operations',
    title: 'Operational Complexity & Governance',
    badge: 'MAINTAINABILITY',
    principle: 'The best architecture is one your engineering team can reliably understand, operate, and debug.',
    questions: [
      'Does the architecture leverage managed services to eliminate manual patching toil?',
      'Is all infrastructure provisioned declaratively via version-controlled Terraform / GitOps?',
      'Are distributed traces and error budgets tied to automated rollback triggers?'
    ],
    architecturalTradeoff:
      'Balancing cutting-edge architectural sophistication against team operational cognitive load.'
  }
];

export const CloudArchitecturePage: React.FC<CloudArchitecturePageProps> = ({ onOpenContact }) => {
  const [lightboxImage, setLightboxImage] = useState<LightboxState | null>(null);
  const [activeLayer, setActiveLayer] = useState<number>(0);
  const [layerDelay, setLayerDelay] = useState<number>(3000);
  const [layerTrigger, setLayerTrigger] = useState<number>(0);

  const [activeDecisionFactor, setActiveDecisionFactor] = useState<number>(0);
  const [decisionDelay, setDecisionDelay] = useState<number>(3000);
  const [decisionTrigger, setDecisionTrigger] = useState<number>(0);

  const [activeProcessStage, setActiveProcessStage] = useState<number>(2); // Default to "Design"
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Automatically cycle through architectural layers from top to bottom (Layer 01 to 06, then loop)
  // When user clicks any layer: wait for 2.5 seconds (2 to 3 seconds), then continue automatically.
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveLayer((current) => (current + 1) % architectureLayers.length);
      setLayerDelay(3000);
    }, layerDelay);

    return () => clearTimeout(timer);
  }, [activeLayer, layerDelay, layerTrigger]);

  const handleSelectLayer = (idx: number) => {
    setActiveLayer(idx);
    setLayerDelay(2500); // Wait for 2.5 seconds, then continue
    setLayerTrigger((prev) => prev + 1);
  };

  // Automatically cycle through Six Evaluation Priorities from top to bottom (0 to 5, then loop)
  // When user clicks any priority: wait for 2.5 seconds (2 to 3 seconds), then continue automatically.
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveDecisionFactor((current) => (current + 1) % decisionFactors.length);
      setDecisionDelay(3000);
    }, decisionDelay);

    return () => clearTimeout(timer);
  }, [activeDecisionFactor, decisionDelay, decisionTrigger]);

  const handleSelectDecisionFactor = (idx: number) => {
    setActiveDecisionFactor(idx);
    setDecisionDelay(2500); // Wait for 2.5 seconds, then continue
    setDecisionTrigger((prev) => prev + 1);
  };

  useEffect(() => {
    document.title = 'Enterprise Cloud Architecture & Technical Foundation | KNOOVIQ';
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

  const handleDiscussArchitecture = () => {
    if (onOpenContact) {
      onOpenContact('Cloud Architecture Consulting');
    }
  };

  const handleExploreApproach = () => {
    const el = document.getElementById('architecture-overview');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 6 Engagement Process Stages
  const engagementStages = [
    {
      step: '01',
      name: 'Discover',
      tagline: 'Understand applications, infrastructure, and technical constraints',
      description:
        'We conduct structured interviews and agentless scans to catalog application estates, data schemas, network topologies, and business continuity expectations.',
      deliverable: 'Current-State Architectural Inventory & Dependency Map',
      activities: ['Workload portfolio telemetry audit', 'Network flow & latency profiling', 'Data governance & sovereignty audit']
    },
    {
      step: '02',
      name: 'Assess',
      tagline: 'Evaluate design gaps, single points of failure, and risks',
      description:
        'We benchmark existing topologies against industry Well-Architected frameworks, uncovering hidden interdependencies, security risks, and cost inefficiencies.',
      deliverable: 'Architecture Gap Analysis & Risk Assessment Matrix',
      activities: ['Single points of failure (SPOF) audit', 'Security perimeter vulnerability assessment', 'TCO & egress economics evaluation']
    },
    {
      step: '03',
      name: 'Design',
      tagline: 'Develop target architecture, principles, and ADR blueprints',
      description:
        'Our enterprise architects draft target-state blueprints, define logical/physical views, establish technology standards, and author Architecture Decision Records (ADRs).',
      deliverable: 'Target Cloud Architecture HLD/LLD & Architecture Decision Records (ADRs)',
      activities: ['Logical & physical network topologies', 'Multi-account landing zone blueprints', 'Data tiering & replication schemas']
    },
    {
      step: '04',
      name: 'Validate',
      tagline: 'Peer review security, connectivity, resilience, and operational fit',
      description:
        'Target designs are evaluated through the Architecture Review Board (ARB), security threat modeling, failover failure-mode simulations, and FinOps budgeting checks.',
      deliverable: 'Architecture Validation Scorecard & Threat Model Sign-off',
      activities: ['STRIDE security threat modeling', 'Failure-domain simulation review', 'FinOps unit cost model sign-off']
    },
    {
      step: '05',
      name: 'Implement',
      tagline: 'Support declarative IaC delivery and architectural alignment',
      description:
        'We guide engineering teams in translating blueprints into reusable Terraform modules, GitOps deployment pipelines, and automated policy-as-code guardrails.',
      deliverable: 'Declarative IaC Blueprints & Implementation Guidance',
      activities: ['Terraform / OpenTofu modular codebase', 'ArgoCD / Flux GitOps pipelines', 'Open Policy Agent (OPA) rule catalog']
    },
    {
      step: '06',
      name: 'Evolve',
      tagline: 'Continuous architecture reviews as workloads and technologies change',
      description:
        'Architecture is a living discipline. We establish quarterly Well-Architected reviews, technical debt retirement roadmaps, and modernization iteration cycles.',
      deliverable: 'Continuous Architecture Lifecycle Framework & Evolution Roadmap',
      activities: ['Quarterly Well-Architected audits', 'Modernization backlog prioritization', 'Technology radar & deprecation tracking']
    }
  ];

  // Exactly the 8 required FAQs
  const faqs = [
    {
      q: 'What is cloud architecture?',
      a: 'Cloud architecture is the conceptual model and technical design that defines how infrastructure components, software applications, data stores, network pathways, and security controls interact to deliver business capabilities in a cloud environment. It establishes the principles, standards, and blueprints that guide how systems are built, scaled, and maintained.'
    },
    {
      q: 'What are the main layers of a cloud architecture?',
      a: 'An enterprise cloud architecture typically encompasses six interdependent layers: (1) Application & Microservices Tier, (2) Compute & Runtime Platform, (3) Storage & Persistence Fabric, (4) Networking & Interconnect Mesh, (5) Identity & Security Perimeter, and (6) Observability & Governance Plane. Each layer has distinct responsibilities while communicating through standardized interfaces.'
    },
    {
      q: 'How does cloud architecture differ from cloud infrastructure?',
      a: 'Cloud infrastructure refers to the physical and virtual resources themselves—the actual virtual machines, SSD storage volumes, subnets, routers, and load balancers. Cloud architecture is the strategic design that dictates how, where, and why those resources are arranged, how they communicate, how they handle failures, and how they support business outcomes.'
    },
    {
      q: 'What is the difference between logical and physical architecture?',
      a: 'Logical architecture describes the conceptual organization of system components—such as microservices, message queues, API gateways, and database domains—independent of specific hosting providers or hardware. Physical architecture maps those logical components to concrete cloud provider services, regions, availability zones, IP subnets, instance sizes, and storage tiers.'
    },
    {
      q: 'How are security and networking incorporated into cloud design?',
      a: 'Security and networking are embedded as foundational architectural pillars rather than bolted on after deployment. This includes defining zero-trust network boundaries, microsegmentation via Virtual Routing and Forwarding (VRF), hardware-level encryption (KMS/HSM), least-privilege IAM roles, automated secrets rotation, and strict ingress/egress inspection gateways.'
    },
    {
      q: 'How does cloud architecture support high availability and disaster recovery?',
      a: 'Architectural patterns ensure resilience by distributing workloads across multiple failure domains—such as distinct physical availability zones and geographic regions. Key design choices include stateless compute autoscaling, synchronous database clustering, asynchronous cross-region replication, health-check failover routing, and immutable WORM backup vaults with defined RPO and RTO targets.'
    },
    {
      q: 'When should an organization review or redesign its cloud architecture?',
      a: 'Architecture reviews should occur whenever major business or technical inflection points arise: during substantial workload growth, when adopting modern microservices or generative AI, after security audits reveal design gaps, when cloud bills diverge from initial forecasts, or during mergers and acquisitions. Regular quarterly Well-Architected reviews ensure continuous alignment.'
    },
    {
      q: 'How do organizations document and govern architecture decisions?',
      a: 'Mature enterprises utilize Architecture Decision Records (ADRs)—lightweight, version-controlled markdown documents that record the context, considered alternatives, consequences, and rationale of key architectural choices. These are governed through an Architecture Review Board (ARB) and enforced programmatically using Policy-as-Code (such as Open Policy Agent).'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#040812] text-slate-900 dark:text-slate-100 selection:bg-[#00A3E0]/30 selection:text-[#00A3E0] transition-colors duration-300">
      {/* Breadcrumb Navigation Bar */}
      <div className="bg-slate-50 dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10 text-xs py-3 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
            <Link to="/" className="hover:text-[#00A3E0] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to="/cloud-operations" className="hover:text-[#00A3E0] transition-colors">Cloud &amp; Operations</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to="/cloud-operations/infrastructure" className="hover:text-[#00A3E0] transition-colors">Cloud Infrastructure &amp; Platforms</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 dark:text-white font-medium">Cloud Architecture</span>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. HERO SECTION — Full-Screen Panoramic Hero with Full-Bleed Image & Text Overlay */}
      {/* ============================================================ */}
      <section className="relative w-full min-h-[calc(100vh-5rem)] flex items-center bg-[#060D1A] text-white border-b border-slate-800 overflow-hidden">
        
        {/* Full-Bleed Panoramic Background Image — Spans 100% of Screen */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/cloud/cloud_architecture_designer_robot.png"
            alt="Enterprise Cloud Architecture & Technical Foundation"
            className="w-full h-full object-cover object-center lg:object-[65%_center] filter brightness-105 contrast-105"
          />
          {/* Directional scrim: smoothly protects text readability on the left while keeping center & right visuals 100% bright */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#060D1A] via-[#060D1A]/85 sm:via-[#060D1A]/70 md:via-[#060D1A]/50 to-transparent w-full lg:w-3/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060D1A] via-transparent to-[#060D1A]/50" />
          <div className="absolute inset-0 bg-[radial-gradient(#00A3E0_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full py-16 sm:py-20 lg:py-24 space-y-8">
          
          <div className="max-w-2xl lg:max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00A3E0]/10 border border-[#00A3E0]/30 text-[#00A3E0] text-xs font-mono font-semibold uppercase tracking-wider backdrop-blur-md">
              <Compass className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>ENTERPRISE SYSTEMS ARCHITECTURE</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-[1.12] text-white drop-shadow-md">
              Architect the Foundation of{' '}
              <span className="text-[#00A3E0]">Your Cloud Future</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl drop-shadow-sm">
              Design cloud environments around your enterprise applications, infrastructure requirements, security
              policies, and long-term technology objectives. Knooviq helps organizations define cloud architectures that
              connect infrastructure, applications, data, integration, and governance into a coherent technical foundation.
            </p>


            {/* Key Architecture Badges */}
            <div className="pt-4 border-t border-slate-700/60 grid grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-800/90 shadow-md">
                <span className="font-mono text-[#00A3E0] font-bold block text-sm sm:text-base">Multi-Tier</span>
                <span className="text-slate-400 mt-0.5 block">Isolated Layers</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-800/90 shadow-md">
                <span className="font-mono text-[#00A3E0] font-bold block text-sm sm:text-base">Zero-Trust</span>
                <span className="text-slate-400 mt-0.5 block">Security Baseline</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-800/90 shadow-md">
                <span className="font-mono text-[#00A3E0] font-bold block text-sm sm:text-base">Line-Rate</span>
                <span className="text-slate-400 mt-0.5 block">High Resilience</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. ARCHITECTURE OVERVIEW SECTION                             */}
      {/* Heading: Architecture That Connects Every Technical Layer     */}
      {/* ============================================================ */}
      <section id="architecture-overview" className="py-20 lg:py-28 bg-white dark:bg-[#060D1A] transition-colors border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#00A3E0] dark:text-cyan-400">
              <Layers className="w-4 h-4" />
              <span>Architectural Systems Integration</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Architecture That Connects Every Technical Layer
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Effective cloud architecture does not treat servers, databases, and networks as disconnected catalog
              items. It provides the structured blueprint that harmonizes infrastructure, applications, data, identity,
              and governance into a coherent, resilient technical engine.
            </p>
          </div>

          {/* Interactive Layered Architecture Diagram (Auto-cycles top to bottom, waits 1s on click) */}
          <div
            className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#071224] p-6 lg:p-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Stack Navigator */}
              <div className="lg:col-span-5 space-y-2">
                <div className="pb-2 border-b border-slate-200/80 dark:border-slate-800/80 mb-3">
                  <div className="text-xs font-mono font-bold uppercase text-slate-500 dark:text-slate-400">
                    EXPLORE ARCHITECTURAL LAYERS:
                  </div>
                </div>

                {architectureLayers.map((layer, idx) => {
                  const isActive = activeLayer === idx;
                  return (
                    <button
                      key={layer.id}
                      onClick={() => handleSelectLayer(idx)}
                      className={`relative w-full p-3.5 rounded-xl text-left transition-all duration-300 flex items-center justify-between border cursor-pointer overflow-hidden ${
                        isActive
                          ? 'bg-cyan-50/90 dark:bg-cyan-950/60 border-[#00A3E0] shadow-md ring-1 ring-[#00A3E0]/40'
                          : 'bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      {/* Active Live Progress Indicator */}
                      {isActive && (
                        <div
                          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#00A3E0] via-cyan-400 to-sky-300 animate-pulse"
                          style={{ width: '100%' }}
                        />
                      )}

                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-[10px] font-mono font-bold ${
                              isActive ? 'text-[#00A3E0] dark:text-cyan-400' : 'text-slate-500'
                            }`}
                          >
                            {layer.number}
                          </span>
                          {isActive && (
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0] animate-pulse" />
                          )}
                        </div>
                        <div
                          className={`text-sm font-bold ${
                            isActive ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300'
                          }`}
                        >
                          {layer.name}
                        </div>
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 transition-transform ${
                          isActive ? 'text-[#00A3E0] translate-x-1' : 'text-slate-400'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Right Column: Layer Technical Detail Blueprint */}
              <div
                key={activeLayer}
                className="lg:col-span-7 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-7 space-y-6 shadow-sm transition-all duration-300"
              >
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#00A3E0]/10 text-[#00A3E0] dark:text-cyan-400 text-xs font-mono font-semibold uppercase">
                    {architectureLayers[activeLayer].number} SPECIFICATION
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    {architectureLayers[activeLayer].name}
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-600 dark:text-cyan-400 font-medium">
                    {architectureLayers[activeLayer].tagline}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {architectureLayers[activeLayer].description}
                </p>

                {/* Sub-Components */}
                <div className="space-y-2.5 pt-2 border-t border-slate-200 dark:border-slate-800">
                  <h4 className="text-xs font-mono font-bold uppercase text-slate-500 tracking-wider">
                    Core Architectural Components:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {architectureLayers[activeLayer].elements.map((elem, eIdx) => (
                      <div
                        key={eIdx}
                        className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-xs text-slate-800 dark:text-slate-200"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3E0] shrink-0" />
                        <span className="truncate">{elem}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Architectural Standard Spec */}
                <div className="p-3.5 rounded-xl bg-cyan-50/60 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-800/40 flex items-center gap-3 text-xs">
                  <Activity className="w-4 h-4 text-[#00A3E0] shrink-0" />
                  <div>
                    <span className="font-mono font-bold text-cyan-800 dark:text-cyan-300">Design Benchmark: </span>
                    <span className="text-slate-700 dark:text-slate-300">
                      {architectureLayers[activeLayer].spec}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. SEVEN MAIN CAPABILITY SECTIONS (EACH WITH UNIQUE LAYOUT)  */}
      {/* ============================================================ */}

      {/* SECTION 1 — ENTERPRISE CLOUD ARCHITECTURE BLUEPRINT          */}
      {/* Layout: Wide blueprint-style composition with explanatory    */}
      {/*         text alongside a custom technical architecture visual*/}
      {/* ============================================================ */}
      <section className="py-20 lg:py-24 bg-slate-50 dark:bg-[#040812] transition-colors border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#00A3E0] dark:text-cyan-400">
              <FileText className="w-4 h-4" />
              <span>Section 01 / Blueprint Specification</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Enterprise Cloud Architecture Blueprint
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Architecture blueprints bridge the gap between executive business requirements and low-level code deployment.
              We formulate target-state architectural blueprints, establish immutable design principles, and document
              every choice in auditable Architecture Decision Records (ADRs).
            </p>
          </div>

          {/* Wide Blueprint Composition */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#071224] p-6 lg:p-8 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Visual 1: Technical Engineering Blueprint */}
              <div className="lg:col-span-6 relative">
                <div className="relative rounded-xl overflow-hidden border border-slate-300 dark:border-slate-700 aspect-[4/3] bg-slate-950 group shadow-md">
                  <img
                    src="/images/cloud/cloud_architecture_blueprint.png"
                    alt="Enterprise Cloud Architecture Blueprint - Centralized cloud platform with container pods, microservices, databases, and datacenter server interconnects"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 text-[11px] font-mono text-cyan-300 bg-slate-900/80 px-2.5 py-1 rounded border border-slate-700 select-text">
                    LOGICAL &amp; PHYSICAL SYSTEM BLUEPRINT
                  </div>
                </div>
              </div>

              {/* Blueprint Scope Checklist */}
              <div className="lg:col-span-6 space-y-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Blueprint Scope &amp; Artifact Deliverables
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 space-y-1">
                    <div className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-[#00A3E0]" />
                      <span>Current-State vs. Target-State Topologies</span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Baseline technical audits capturing tech debt, unmapped dependencies, and target multi-region topologies.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 space-y-1">
                    <div className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <GitBranch className="w-4 h-4 text-[#00A3E0]" />
                      <span>Architecture Decision Records (ADRs)</span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Version-controlled records documenting technical trade-offs, technology evaluations, and architectural justifications.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 space-y-1">
                    <div className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <Boxes className="w-4 h-4 text-[#00A3E0]" />
                      <span>Logical &amp; Physical Architecture Views</span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Clear separation between vendor-agnostic logical abstractions and provider-specific physical mappings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — INFRASTRUCTURE, COMPUTE & STORAGE DESIGN         */}
      {/* Layout: Asymmetric editorial layout with prominent           */}
      {/*         infrastructure image and structured explanations.    */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-24 bg-white dark:bg-[#060D1A] transition-colors border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#00A3E0] dark:text-cyan-400">
              <Server className="w-4 h-4" />
              <span>Section 02 / Compute &amp; Storage Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Infrastructure, Compute &amp; Storage Design
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Underpinning every cloud application is a deliberate pairing of compute orchestrators and storage tiers.
              We architect multi-zone container platforms, spot-and-ondemand compute pools, and hierarchical data stores
              tailored to real-world workload access patterns.
            </p>
          </div>

          {/* Asymmetric Editorial Presentation */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Prominent Editorial Image 3 */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 aspect-[4/3] bg-slate-950 group shadow-xl">
                <img
                  src="/images/cloud/cloud_compute_storage.png"
                  alt="Enterprise Infrastructure, Compute & Storage Design - Workstations, high-density server racks, cloud orchestrators, and multi-device telemetry"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700 text-xs select-text">
                  <div className="font-mono text-cyan-400 font-bold">COMPUTE-STORAGE TOPOLOGY</div>
                  <div className="text-slate-300 text-[11px] mt-0.5">
                    Multi-AZ Kubernetes Clusters • Tiered Flash SAN • S3 Lakehouse Storage
                  </div>
                </div>
              </div>
            </div>

            {/* Structured Technical Explanations */}
            <div className="lg:col-span-6 space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-snug">
                Capacity Planning, Failure Domains &amp; Tiered Persistence
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Rather than treating storage as an afterthought, we architect multi-tier persistence pipelines that
                separate sub-millisecond transactional IOPS from cold historical archives.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#071224] border border-slate-200 dark:border-slate-800">
                  <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-[#00A3E0]" />
                    <span>Container Platforms &amp; Virtual Machine Sizing</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Managed EKS, AKS, and GKE fleets with automated Karpenter node autoscaling, mixing spot and reserved
                    compute for maximum efficiency.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#071224] border border-slate-200 dark:border-slate-800">
                  <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <HardDrive className="w-4 h-4 text-[#00A3E0]" />
                    <span>Tiered Storage Lifecycle Automation</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Automated data migration from high-IOPS NVMe volumes to warm object storage and glacier archive tiers,
                    minimizing long-term storage spend.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#071224] border border-slate-200 dark:border-slate-800">
                  <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Radio className="w-4 h-4 text-[#00A3E0]" />
                    <span>Availability Zones &amp; Failure Isolation</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Workload distribution across minimum three geographically separated availability zones, ensuring zero
                    downtime during localized datacenter outages.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — CLOUD NETWORKING & CONNECTIVITY ARCHITECTURE     */}
      {/* Layout: Dark navy technical feature section with custom       */}
      {/*         network topology illustration.                       */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-28 bg-[#040916] text-white border-b border-cyan-900/40 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00A3E0]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
              <Network className="w-4 h-4 text-[#00A3E0]" />
              <span>Section 03 / Software-Defined Networking</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Cloud Networking &amp; Connectivity Architecture
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Enterprise network architecture provides the nervous system of cloud systems. We engineer segmented
              Virtual Private Clouds (VPCs), deterministic routing transit hubs, private service endpoints, and secure
              edge gateways that eliminate unnecessary exposure to the public internet.
            </p>
          </div>

          {/* Network Visualization & Technical Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual 4: Network Architecture Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 bg-slate-950 aspect-[4/3] group shadow-2xl">
                <img
                  src="/images/cloud/cloud_networking_connectivity.png"
                  alt="Cloud Networking & Connectivity Architecture - Central mesh cloud connected to distributed server cabinets and datacenter nodes"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-95"
                />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-cyan-500/40 space-y-1 select-text">
                  <div className="text-[11px] font-mono text-cyan-400 font-bold flex items-center gap-2">
                    <Network className="w-3.5 h-3.5 text-[#00A3E0]" />
                    <span>TRANSIT GATEWAY ROUTING FABRIC</span>
                  </div>
                  <div className="text-[11px] text-slate-300">
                    Non-Overlapping CIDR • PrivateLink • Redundant NAT Egress
                  </div>
                </div>
              </div>
            </div>

            {/* 6 Networking Pillars */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-colors space-y-1.5">
                <div className="text-xs font-mono font-bold text-cyan-400 flex items-center gap-1.5">
                  <Network className="w-3.5 h-3.5 text-[#00A3E0]" />
                  <span>VPC &amp; Subnet Design</span>
                </div>
                <h4 className="text-sm font-bold text-white">Hierarchical CIDR Allocation</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Clean separation between public ingress DMZs, private application compute, and isolated data subnets
                  with non-overlapping RFC 1918 CIDR blocks.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-colors space-y-1.5">
                <div className="text-xs font-mono font-bold text-cyan-400 flex items-center gap-1.5">
                  <Workflow className="w-3.5 h-3.5 text-[#00A3E0]" />
                  <span>Transit Routing</span>
                </div>
                <h4 className="text-sm font-bold text-white">Hub-and-Spoke Gateways</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Centralized transit gateway routing traffic between hundreds of spoke VPCs, corporate data centers,
                  and software-as-a-service providers without point-to-point mesh spaghetti.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-colors space-y-1.5">
                <div className="text-xs font-mono font-bold text-cyan-400 flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-[#00A3E0]" />
                  <span>Private Connectivity</span>
                </div>
                <h4 className="text-sm font-bold text-white">PrivateLink Endpoints</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Consume cloud provider services (S3, KMS, RDS) over private internal IPs, ensuring zero data packets
                  traverse public internet transit lines.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-colors space-y-1.5">
                <div className="text-xs font-mono font-bold text-cyan-400 flex items-center gap-1.5">
                  <Scale className="w-3.5 h-3.5 text-[#00A3E0]" />
                  <span>Traffic Balancing</span>
                </div>
                <h4 className="text-sm font-bold text-white">L4 / L7 Ingress Gateways</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Application load balancers enforcing TLS 1.3 termination, path-based routing, health-checked target
                  groups, and automated DDoS mitigation.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-colors space-y-1.5">
                <div className="text-xs font-mono font-bold text-cyan-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00A3E0]" />
                  <span>Egress Governance</span>
                </div>
                <h4 className="text-sm font-bold text-white">Controlled Inspection Firewalls</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Centralized inspection VPCs routing all outbound internet traffic through stateful firewalls with domain
                  whitelisting and TLS inspection.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-colors space-y-1.5">
                <div className="text-xs font-mono font-bold text-cyan-400 flex items-center gap-1.5">
                  <RefreshCw className="w-3.5 h-3.5 text-[#00A3E0]" />
                  <span>Failover Resilience</span>
                </div>
                <h4 className="text-sm font-bold text-white">BGP Dynamic Routing</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Automated BGP failover across redundant direct connects and hot-standby IPsec VPN tunnels, avoiding
                  manual network routing interventions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — APPLICATION & INTEGRATION ARCHITECTURE          */}
      {/* Layout: Interconnected component diagram with supporting     */}
      {/*         explanatory text. (Avoids generic card grids).       */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-24 bg-white dark:bg-[#060D1A] transition-colors border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#00A3E0] dark:text-cyan-400">
              <Workflow className="w-4 h-4" />
              <span>Section 04 / Integration &amp; Decoupling</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Application &amp; Integration Architecture
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Monolithic tight-coupling is the primary cause of fragile cloud deployments. We design domain-driven
              application boundaries, API-led integration contracts, and asynchronous event streams that allow services
              to scale and evolve independently without breaking upstream dependencies.
            </p>
          </div>

          {/* Interconnected Component Stage */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#071224] p-6 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Supporting Software Architecture Visual 5 */}
              <div className="lg:col-span-5">
                <div className="relative rounded-xl overflow-hidden border border-slate-300 dark:border-slate-700 aspect-[4/3] bg-slate-950 group shadow-md">
                  <img
                    src="/images/cloud/cloud_app_integration.png"
                    alt="Application & Integration Architecture - Engineering teams designing AI neural software architectures, API event streams, and decoupled systems"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 text-[11px] font-mono text-cyan-300 bg-slate-900/80 px-2.5 py-1 rounded border border-slate-700 select-text">
                    DECOUPLED SERVICE TOPOLOGY
                  </div>
                </div>
              </div>

              {/* Interconnected Domain Explanation */}
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Four Modern Integration Patterns
                </h3>

                <div className="divide-y divide-slate-200 dark:divide-slate-800 border-y border-slate-200 dark:border-slate-800">
                  <div className="py-3 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-100 dark:bg-cyan-950/60 text-[#00A3E0] flex items-center justify-center shrink-0 mt-0.5 font-mono text-xs font-bold">
                      01
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                        API-Led Gateway Architecture
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
                        Standardized OpenAPI specifications with rate limiting, token validation, and backward-compatible
                        versioning separating consumers from backend implementations.
                      </p>
                    </div>
                  </div>

                  <div className="py-3 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-100 dark:bg-cyan-950/60 text-[#00A3E0] flex items-center justify-center shrink-0 mt-0.5 font-mono text-xs font-bold">
                      02
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                        Event-Driven Architecture (EDA)
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
                        Apache Kafka and cloud message queues decoupling order ingestion from inventory, billing, and
                        fulfillment, absorbing traffic bursts without downstream lockups.
                      </p>
                    </div>
                  </div>

                  <div className="py-3 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-100 dark:bg-cyan-950/60 text-[#00A3E0] flex items-center justify-center shrink-0 mt-0.5 font-mono text-xs font-bold">
                      03
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                        Strangler Fig Modernization Facade
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
                        Routing new capabilities to cloud-native microservices while gradually intercepting legacy core
                        calls, avoiding risky all-at-once re-platforming.
                      </p>
                    </div>
                  </div>

                  <div className="py-3 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-100 dark:bg-cyan-950/60 text-[#00A3E0] flex items-center justify-center shrink-0 mt-0.5 font-mono text-xs font-bold">
                      04
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                        Service Mesh &amp; Mutual TLS
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
                        Envoy sidecar proxies managing cross-service traffic routing, circuit breaking, distributed
                        tracing headers, and automatic mTLS encryption transparently.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — SECURITY ARCHITECTURE & TRUST BOUNDARIES          */}
      {/* Layout: Layered security architecture composition with       */}
      {/*         clearly differentiated trust zones.                  */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-24 bg-slate-50 dark:bg-[#040812] transition-colors border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#00A3E0] dark:text-cyan-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Section 05 / Cryptographic Trust Boundaries</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Security Architecture &amp; Trust Boundaries
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Security must be designed into the architecture from the first blueprint, not retrofitted after deployment.
              We implement defense-in-depth trust boundaries, hardware envelope encryption, automated secrets rotation,
              and strict least-privilege IAM roles aligned with the shared-responsibility model.
            </p>
          </div>

          {/* Layered Security Architecture Stage */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#071224] p-6 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Supporting Visual 6: Security Architecture */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-xl overflow-hidden border border-slate-300 dark:border-slate-700 aspect-[4/3] bg-slate-950 group shadow-md">
                  <img
                    src="/images/cloud/cloud_security_trust_boundaries.png"
                    alt="Security Architecture & Trust Boundaries - Executive security council with holographic shield and document lock in command center"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 text-[11px] font-mono text-cyan-300 bg-slate-900/80 px-2.5 py-1 rounded border border-slate-700 select-text">
                    ZERO-TRUST PERIMETER MATRIX
                  </div>
                </div>
              </div>

              {/* 3 Layered Trust Zones */}
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Three Concentric Trust Zones
                </h3>

                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase">ZONE A: EXTERNAL PERIMETER</span>
                      <span className="text-[10px] font-mono text-slate-500">INGRESS DMZ</span>
                    </div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">DDoS, WAF &amp; Identity Gateway</div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      Edge inspection inspecting all inbound traffic against OWASP Top 10 exploits, rate limiting API calls,
                      and terminating public TLS certificates before reaching internal workloads.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase">ZONE B: INTERNAL SERVICE MESH</span>
                      <span className="text-[10px] font-mono text-slate-500">APP TIER</span>
                    </div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">Least-Privilege RBAC &amp; mTLS</div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      Every inter-service call requires cryptographic identity verification. Microservices receive temporary,
                      short-lived IAM credentials tied strictly to their defined functional scope.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase">ZONE C: DATA ENCLAVE</span>
                      <span className="text-[10px] font-mono text-slate-500">ISOLATED CORE</span>
                    </div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">Envelope Encryption &amp; Immutable Audit</div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      Customer-managed KMS keys enforce envelope encryption at rest. All database administrative queries and
                      access events stream to tamper-proof, write-once SIEM log repositories.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — RESILIENCE, OBSERVABILITY & RECOVERY ARCHITECTURE */}
      {/* Layout: Technical scenario-based section showing component   */}
      {/*         failure response and recovery pathways.              */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-24 bg-white dark:bg-[#060D1A] transition-colors border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#00A3E0] dark:text-cyan-400">
              <Activity className="w-4 h-4" />
              <span>Section 06 / Failure Mode Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Resilience, Observability &amp; Recovery Architecture
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              True enterprise resilience is engineered at the architecture level, not during a midnight outage.
              We establish multi-region failure-domain separation, health-checked circuit breakers, and distributed
              telemetry pipelines that isolate faults instantly without cascading across services.
            </p>
          </div>

          {/* Technical Scenario-Based Layout */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#071224] p-6 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Supporting Visual 7: Observability & Resilience */}
              <div className="lg:col-span-5">
                <div className="relative rounded-xl overflow-hidden border border-slate-300 dark:border-slate-700 aspect-[4/3] bg-slate-950 group shadow-md">
                  <img
                    src="/images/cloud/cloud_resilience_recovery.png"
                    alt="Resilience, Observability & Recovery Architecture - Global digital earth, space rocket launch, server infrastructure, and telemetry circuits"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 text-[11px] font-mono text-cyan-300 bg-slate-900/80 px-2.5 py-1 rounded border border-slate-700 select-text">
                    MULTI-ZONE FAULT ISOLATION
                  </div>
                </div>
              </div>

              {/* Scenario Response Breakdown */}
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Deterministic Failure-Mode Scenarios
                </h3>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <div className="flex items-start gap-2.5">
                      <div className="p-1 rounded bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5">
                        <AlertTriangle className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                          Scenario A: Single Availability Zone Hardware Outage
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                          Automated load balancer health checks remove failing zone targets within seconds. Stateless
                          compute scales horizontally across surviving AZs while database synchronous replicas promote instantly.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <div className="flex items-start gap-2.5">
                      <div className="p-1 rounded bg-blue-100 dark:bg-blue-950/60 text-[#0070C0] dark:text-blue-400 shrink-0 mt-0.5">
                        <RefreshCw className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                          Scenario B: Catastrophic Regional Disaster
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                          DNS failover routes traffic to a warm pilot light or secondary recovery region. Asynchronous
                          replicated data stores spin up warm compute pools with strict verified RTO (&lt;15 mins) and RPO (&lt;1 min).
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <div className="flex items-start gap-2.5">
                      <div className="p-1 rounded bg-cyan-100 dark:bg-cyan-950/60 text-[#00A3E0] dark:text-cyan-400 shrink-0 mt-0.5">
                        <Activity className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                          Scenario C: Downstream Microservice Latency Spike
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                          Envoy proxy circuit breakers open automatically, serving cached responses or degrading gracefully
                          rather than exhausting connection pools and cascading failures to user interfaces.
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

      {/* SECTION 7 — ARCHITECTURE GOVERNANCE, STANDARDS & EVOLUTION    */}
      {/* Layout: Structured architecture lifecycle visual showing     */}
      {/*         design, review, implementation, validation, evolve.  */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-24 bg-slate-50 dark:bg-[#040812] transition-colors border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#00A3E0] dark:text-cyan-400">
              <Compass className="w-4 h-4" />
              <span>Section 07 / Lifecycle Governance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Architecture Governance, Standards &amp; Evolution
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Great cloud architectures are not static artifacts drawn once and forgotten. We establish formal Architecture
              Review Boards (ARB), automated Policy-as-Code guardrails, FinOps unit economics, and quarterly evolution
              reviews to prevent technical debt from accumulating.
            </p>
          </div>

          {/* Structured Architecture Governance Matrix */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#071224] p-6 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Supporting Visual 8: Architecture Governance */}
              <div className="lg:col-span-5">
                <div className="relative rounded-xl overflow-hidden border border-slate-300 dark:border-slate-700 aspect-[4/3] bg-slate-950 group shadow-md">
                  <img
                    src="/images/cloud/cloud_architecture_governance.png"
                    alt="Architecture Governance, Standards & Evolution - AI Code Generator holographic interface with robotic engineering assistant"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 text-[11px] font-mono text-cyan-300 bg-slate-900/80 px-2.5 py-1 rounded border border-slate-700 select-text">
                    ARCHITECTURE LIFECYCLE REVIEWS
                  </div>
                </div>
              </div>

              {/* Four Pillars of Lifecycle Governance */}
              <div className="lg:col-span-7 space-y-3">
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800">
                  <div className="text-xs font-mono font-bold text-[#00A3E0] dark:text-cyan-400">01. Architecture Review Board (ARB)</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">Formal Technical Evaluation</div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                    Bi-weekly peer reviews evaluating new service proposals against security, compliance, data sovereignty,
                    and operational scalability standards.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800">
                  <div className="text-xs font-mono font-bold text-[#00A3E0] dark:text-cyan-400">02. Automated Policy-as-Code (OPA)</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">Programmatic Guardrails</div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                    Open Policy Agent and Conftest rules embedded in CI/CD pipelines, preventing unencrypted disks, public
                    subnets, or non-compliant resource types from deploying.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800">
                  <div className="text-xs font-mono font-bold text-[#00A3E0] dark:text-cyan-400">03. FinOps Architectural Economics</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">Cost-Aware Technical Decisions</div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                    Architectural evaluation of data transfer egress costs, managed service premium fees versus self-hosted
                    operational overhead, and reserved capacity commitments.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800">
                  <div className="text-xs font-mono font-bold text-[#00A3E0] dark:text-cyan-400">04. Technical Debt &amp; Modernization Roadmap</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">Continuous Evolution</div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                    Quarterly Well-Architected Framework reviews identifying aging runtimes, deprecated APIs, and
                    infrastructure components requiring orderly deprecation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. ARCHITECTURE DECISION FRAMEWORK SECTION                   */}
      {/* Heading: Make Architecture Decisions with Clear Technical    */}
      {/*          Priorities                                          */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-24 bg-white dark:bg-[#060D1A] transition-colors border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#00A3E0] dark:text-cyan-400">
              <Scale className="w-4 h-4" />
              <span>Architectural Evaluation Framework</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Make Architecture Decisions with Clear Technical Priorities
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Every architectural decision involves trade-offs. Rather than making subjective choices or relying on
              vendor marketing, Knooviq evaluates cloud architecture choices through a structured six-pillar decision
              framework that balances business outcomes with technical reality.
            </p>
          </div>

          {/* Interactive Decision Framework Board (NOT a repeated card grid) */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#071224] p-6 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Pillar Selector Tabs */}
              <div className="lg:col-span-5 space-y-2">
                <div className="text-xs font-mono font-bold uppercase text-slate-500 pb-1">
                  SIX EVALUATION PRIORITIES:
                </div>
                {decisionFactors.map((factor, idx) => {
                  const isActive = activeDecisionFactor === idx;
                  return (
                    <button
                      key={factor.id}
                      onClick={() => handleSelectDecisionFactor(idx)}
                      className={`relative w-full p-3.5 rounded-xl text-left transition-all duration-300 border cursor-pointer overflow-hidden ${
                        isActive
                          ? 'bg-cyan-50/90 dark:bg-cyan-950/60 border-[#00A3E0] shadow-md ring-1 ring-[#00A3E0]/40'
                          : 'bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      {/* Active Live Progress Indicator */}
                      {isActive && (
                        <div
                          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#00A3E0] via-cyan-400 to-sky-300 animate-pulse"
                          style={{ width: '100%' }}
                        />
                      )}
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-[#00A3E0] dark:text-cyan-400">
                          {factor.badge}
                        </span>
                        {isActive && <span className="w-2 h-2 rounded-full bg-[#00A3E0] animate-pulse" />}
                      </div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white mt-1">
                        {factor.title}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Active Decision Pillar Details */}
              <div
                key={activeDecisionFactor}
                className="lg:col-span-7 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-7 space-y-5 shadow-sm transition-all duration-300"
              >
                <div className="space-y-1">
                  <div className="text-xs font-mono font-bold text-[#00A3E0] dark:text-cyan-400 uppercase">
                    {decisionFactors[activeDecisionFactor].badge}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    {decisionFactors[activeDecisionFactor].title}
                  </h3>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium italic">
                  &ldquo;{decisionFactors[activeDecisionFactor].principle}&rdquo;
                </div>

                <div className="space-y-2.5 pt-1">
                  <h4 className="text-xs font-mono font-bold uppercase text-slate-500 tracking-wider">
                    Core Architectural Inquiry &amp; Validation:
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    {decisionFactors[activeDecisionFactor].questions.map((q, qIdx) => (
                      <li key={qIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-cyan-50/70 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-800/40 text-xs space-y-1">
                  <div className="font-mono font-bold text-cyan-800 dark:text-cyan-300">
                    ARCHITECTURAL TRADE-OFF BALANCING:
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {decisionFactors[activeDecisionFactor].architecturalTradeoff}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. CLOUD ARCHITECTURE ENGAGEMENT PROCESS                     */}
      {/* Heading: From Technical Discovery to Architecture Validation */}
      {/* Blueprint-inspired six-stage process                         */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-24 bg-slate-50 dark:bg-[#040812] transition-colors border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#00A3E0] dark:text-cyan-400">
              <FileCheck2 className="w-4 h-4" />
              <span>Six-Stage Delivery Roadmap</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              From Technical Discovery to Architecture Validation
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Our structured engagement process ensures no component is left undocumented and no trade-off is made
              in isolation. Here is how Knooviq partners with enterprise engineering teams from initial audit to continuous evolution.
            </p>
          </div>

          {/* Blueprint-Inspired Stepped Process Diagram */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="grid grid-cols-2 sm:grid-cols-6 gap-2.5">
              {engagementStages.map((stage, idx) => (
                <button
                  key={stage.step}
                  onClick={() => setActiveProcessStage(idx)}
                  className={`p-3 rounded-xl text-left transition-all border cursor-pointer ${
                    activeProcessStage === idx
                      ? 'bg-cyan-50 dark:bg-cyan-950/50 border-[#00A3E0] shadow-sm'
                      : 'bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#00A3E0] dark:text-cyan-400">
                      PHASE {stage.step}
                    </span>
                    {activeProcessStage === idx && <span className="w-2 h-2 rounded-full bg-[#00A3E0]" />}
                  </div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white mt-1">
                    {stage.name}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Active Stage Detailed Breakdown Panel */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#071224] p-6 lg:p-8">
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-4">
                <div>
                  <div className="text-xs font-mono font-bold text-[#00A3E0] dark:text-cyan-400 uppercase">
                    STAGE {engagementStages[activeProcessStage].step} ARCHITECTURAL ACTIVITY
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-0.5">
                    {engagementStages[activeProcessStage].name}: {engagementStages[activeProcessStage].tagline}
                  </h3>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/40 text-xs font-mono font-semibold text-[#00A3E0] dark:text-cyan-400 shrink-0">
                  ENGAGEMENT PHASE {activeProcessStage + 1} OF 6
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {engagementStages[activeProcessStage].description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div className="text-xs font-mono font-bold text-slate-500 uppercase">CORE TECHNICAL ACTIVITIES:</div>
                  <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                    {engagementStages[activeProcessStage].activities.map((act, aIdx) => (
                      <li key={aIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3E0] shrink-0" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div className="text-xs font-mono font-bold text-slate-500 uppercase">AUDITABLE DELIVERABLE ARTIFACT:</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">
                    {engagementStages[activeProcessStage].deliverable}
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Signed off by the Architecture Review Board (ARB) and executive stakeholders prior to proceeding to subsequent phases.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. FREQUENTLY ASKED QUESTIONS SECTION (Exactly 8 FAQs)       */}
      {/* ============================================================ */}
      <section className="py-16 lg:py-20 bg-white dark:bg-[#060D1A] transition-colors border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#00A3E0] dark:text-cyan-400">
              <HelpCircle className="w-4 h-4" />
              <span>Technical Clarity &amp; Principles</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, fIdx) => (
              <div
                key={fIdx}
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#071224] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === fIdx ? null : fIdx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={openFaqIndex === fIdx}
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                    {faq.q}
                  </span>
                  <div className="p-1 rounded-md bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 shrink-0">
                    {openFaqIndex === fIdx ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>
                {openFaqIndex === fIdx && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200 dark:border-slate-800/80 pt-3">
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
      <section className="py-16 bg-slate-50 dark:bg-[#040812] transition-colors border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RelatedCloudServices currentId="cloud-architecture" currentPath="/cloud-operations/infrastructure/cloud-architecture" />
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. FINAL CTA — ARCHITECTURE CONSULTATION                     */}
      {/* Heading: Build a Cloud Architecture Around Your Enterprise    */}
      {/*          Needs                                               */}
      {/* CTA: Discuss Your Cloud Architecture                         */}
      {/* ============================================================ */}
      <CloudConsultationCTA
        badge="ENTERPRISE CLOUD ARCHITECTURE CONSULTING"
        title="Build a Cloud Architecture Around Your Enterprise Needs"
        description="Create a clear technical foundation for your cloud environment with architecture decisions informed by your applications, infrastructure, security requirements, integration dependencies, and operational goals."
        primaryBtnText="Talk to Our Cloud Experts"
        secondaryBtnText="Explore Public Cloud"
        secondaryBtnLink="/cloud-operations/infrastructure/public-cloud"
        onOpenContact={handleDiscussArchitecture}
      />

      {/* ============================================================ */}
      {/* LIGHTBOX HIGH-RESOLUTION BLUEPRINT MODAL                     */}
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
                onClick={handleDiscussArchitecture}
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
