import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Smartphone,
  Layers,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Search,
  Activity,
  Compass,
  TrendingUp,
  Server,
  Cloud,
  Code2,
  GitBranch,
  Gauge,
  Globe2,
  ChevronDown,
  XCircle,
  Maximize2,
  X,
  LayoutGrid,
  Boxes,
  Eye,
  FileCheck
} from 'lucide-react';

interface DigitalApplicationsPageProps {
  onOpenContact?: (defaultTopic?: string) => void;
}

export const DigitalApplicationsPage: React.FC<DigitalApplicationsPageProps> = ({
  onOpenContact
}) => {
  // Lightbox modal state for hero visual
  const [isHeroModalOpen, setIsHeroModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsHeroModalOpen(false);
    };
    if (isHeroModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isHeroModalOpen]);

  // Update document title for SEO
  useEffect(() => {
    document.title = 'Enterprise Digital Applications & Cloud-Native Platforms | KNOOVIQ';
  }, []);

  // State for Section 2: Executive Perspective Interactive Evolution
  const [activeJourneyStep, setActiveJourneyStep] = useState(0);

  // State for Section 4: Circular Chevron Ecosystem Wheel
  const [hoveredWheelIndex, setHoveredWheelIndex] = useState<number | null>(0);
  const [isAutoPlaying] = useState<boolean>(true);

  // Auto-tour rotation for Section 4
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setHoveredWheelIndex((prev) => (prev === null ? 0 : (prev + 1) % 8));
    }, 3200);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // State for Section 5: Architecture Sandbox Tab
  const [activeSandboxTab, setActiveSandboxTab] = useState<'comparison' | 'layers' | 'telemetry'>('comparison');

  // State for Section 5: Telemetry Chamber tabs
  const [activeTelemetryTab, setActiveTelemetryTab] = useState<'cloud' | 'mobile' | 'api'>('cloud');

  // State for Section 7: FAQ Accordion
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Section 4: Circular Chevron Segments (8 Interlocking Layers)
  const wheelSegments = [
    {
      id: 'app-modernization',
      shortTag: 'MODERNIZE',
      title: 'Legacy Application Modernization',
      desc: 'Deconstructing monolithic legacy applications into decoupled, cloud-native microservices with zero operational disruption.',
      badge: 'APP REFACTORING',
      metric: 'Monolith-to-Cloud Migration',
      side: 'right',
      color: '#0070C0',
      textColor: 'text-sky-400',
      bgGlow: 'rgba(0, 112, 192, 0.35)',
      icon: Cloud
    },
    {
      id: 'cloud-native',
      shortTag: 'NATIVE',
      title: 'Resilient Microservices Architecture',
      desc: 'Architecting containerized services that autoscale dynamically under fluctuating enterprise transactional loads.',
      badge: 'CONTAINER FABRIC',
      metric: 'Elastic High-Availability Uptime',
      side: 'right',
      color: '#0284C7',
      textColor: 'text-cyan-400',
      bgGlow: 'rgba(2, 132, 199, 0.35)',
      icon: Server
    },
    {
      id: 'headless-frontends',
      shortTag: 'FRONTEND',
      title: 'Headless Micro-Frontend Frameworks',
      desc: 'Delivering blazing-fast, modular web frontends using modern frameworks decoupled from backend database constraints.',
      badge: 'HEADLESS UI',
      metric: 'Instantaneous UI Responsiveness',
      side: 'right',
      color: '#06B6D4',
      textColor: 'text-cyan-300',
      bgGlow: 'rgba(6, 182, 212, 0.35)',
      icon: LayoutGrid
    },
    {
      id: 'mobile-enterprise',
      shortTag: 'MOBILE',
      title: 'Mission-Critical Mobile Applications',
      desc: 'Engineering offline-capable native and progressive web apps for field technicians, warehouse pickers, and mobile executives.',
      badge: 'OFFLINE RESILIENCE',
      metric: 'Seamless Field Synchronization',
      side: 'right',
      color: '#10B981',
      textColor: 'text-emerald-400',
      bgGlow: 'rgba(16, 185, 129, 0.35)',
      icon: Smartphone
    },
    {
      id: 'api-mesh',
      shortTag: 'API-MESH',
      title: 'Unified API & Event Integration Mesh',
      desc: 'Orchestrating standardized REST, GraphQL, and event-driven webhooks connecting ERP cores to external SaaS platforms.',
      badge: 'INTEGRATION MESH',
      metric: 'Frictionless Systems Interoperability',
      side: 'left',
      color: '#F59E0B',
      textColor: 'text-amber-400',
      bgGlow: 'rgba(245, 158, 11, 0.35)',
      icon: GitBranch
    },
    {
      id: 'clean-core-btp',
      shortTag: 'CLEAN-CORE',
      title: 'Clean Core Extension Development',
      desc: 'Building customized business logic strictly on SAP Business Technology Platform (BTP), keeping core ERP clean and upgrade-ready.',
      badge: 'SAP BTP EXTENSIONS',
      metric: 'Zero-Modification Upgrade Security',
      side: 'left',
      color: '#EC4899',
      textColor: 'text-pink-400',
      bgGlow: 'rgba(236, 72, 153, 0.35)',
      icon: Code2
    },
    {
      id: 'devsecops',
      shortTag: 'DEVSECOPS',
      title: 'Automated CI/CD & Security Pipelines',
      desc: 'Enforcing continuous vulnerability scanning, code quality analysis, and zero-downtime deployment automation across cloud environments.',
      badge: 'ZERO-DOWNTIME CI/CD',
      metric: 'Continuous Safe Deployment',
      side: 'left',
      color: '#8B5CF6',
      textColor: 'text-purple-400',
      bgGlow: 'rgba(139, 92, 246, 0.35)',
      icon: ShieldCheck
    },
    {
      id: 'app-observability',
      shortTag: 'OBSERVE',
      title: 'Full-Stack Application Observability',
      desc: 'Gaining end-to-end telemetry into API response times, database query execution, and front-end performance bottlenecks.',
      badge: 'FULL-STACK TELEMETRY',
      metric: 'Uninterrupted System Health',
      side: 'left',
      color: '#6366F1',
      textColor: 'text-indigo-400',
      bgGlow: 'rgba(99, 102, 241, 0.35)',
      icon: Gauge
    }
  ];

  // Calculation for circular chevron SVG path
  const getChevronPath = (index: number) => {
    const cx = 250;
    const cy = 250;
    const rOut = 218;
    const rIn = 118;
    const rMid = 168;
    const gap = 1.6;
    const tip = 7.5;

    const theta1 = -90 + index * 45 + gap;
    const theta2 = -90 + (index + 1) * 45 - gap;

    const rad = (deg: number) => (deg * Math.PI) / 180;

    const p1 = { x: cx + rOut * Math.cos(rad(theta1)), y: cy + rOut * Math.sin(rad(theta1)) };
    const p2 = { x: cx + rOut * Math.cos(rad(theta2)), y: cy + rOut * Math.sin(rad(theta2)) };
    const p3 = { x: cx + rMid * Math.cos(rad(theta2 + tip)), y: cy + rMid * Math.sin(rad(theta2 + tip)) };
    const p4 = { x: cx + rIn * Math.cos(rad(theta2)), y: cy + rIn * Math.sin(rad(theta2)) };
    const p5 = { x: cx + rIn * Math.cos(rad(theta1)), y: cy + rIn * Math.sin(rad(theta1)) };
    const p6 = { x: cx + rMid * Math.cos(rad(theta1 + tip)), y: cy + rMid * Math.sin(rad(theta1 + tip)) };

    return `M ${p1.x.toFixed(2)} ${p1.y.toFixed(2)} A ${rOut} ${rOut} 0 0 1 ${p2.x.toFixed(2)} ${p2.y.toFixed(2)} L ${p3.x.toFixed(2)} ${p3.y.toFixed(2)} L ${p4.x.toFixed(2)} ${p4.y.toFixed(2)} A ${rIn} ${rIn} 0 0 0 ${p5.x.toFixed(2)} ${p5.y.toFixed(2)} L ${p6.x.toFixed(2)} ${p6.y.toFixed(2)} Z`;
  };

  const getIconCoords = (index: number) => {
    const cx = 250;
    const cy = 250;
    const rMid = 168;
    const gap = 1.6;
    const tip = 7.5;
    const theta1 = -90 + index * 45 + gap;
    const theta2 = -90 + (index + 1) * 45 - gap;
    const midAngle = (theta1 + theta2) / 2 + tip / 2;
    const rad = (deg: number) => (deg * Math.PI) / 180;
    return {
      x: cx + rMid * Math.cos(rad(midAngle)),
      y: cy + rMid * Math.sin(rad(midAngle))
    };
  };

  // Section 2: Journey Steps
  const journeySteps = [
    {
      id: 'step-1',
      label: 'Portfolio Diagnostics',
      sublabel: 'Landscape Discovery',
      desc: 'Assessing enterprise software portfolios to isolate monolithic technical debt, end-of-life legacy dependencies, and integration bottlenecks.',
      tech: 'Architecture Mining & Technical Debt Scoping',
      icon: Search,
      highlights: [
        'Monolithic Codebase Complexity Profiling',
        'End-of-Life Dependency Mapping',
        'Database Lock Contention Scoping'
      ]
    },
    {
      id: 'step-2',
      label: 'Cloud-Native Architecture',
      sublabel: 'Clean Core Decomposition',
      desc: 'Designing modular microservices and event-driven micro-frontends decoupled from underlying transactional database schemas.',
      tech: 'Domain-Driven Design & Microservices Blueprint',
      icon: Cloud,
      highlights: [
        'Bounded Context Service Boundary Definition',
        'Strict API Contract & Schema Governance',
        'Decoupled Compute & Storage Topologies'
      ]
    },
    {
      id: 'step-3',
      label: 'Agile DevSecOps',
      sublabel: 'Continuous Deployment',
      desc: 'Building high-throughput applications with automated continuous integration, vulnerability scanning, and container orchestration.',
      tech: 'Next.js, TypeScript & Kubernetes Pipelines',
      icon: Code2,
      highlights: [
        'Automated Static & Dynamic Security Scans',
        'Zero-Downtime Blue/Green Deployments',
        'Declarative Infrastructure as Code (IaC)'
      ]
    },
    {
      id: 'step-4',
      label: 'SAP BTP Extensions',
      sublabel: 'Side-by-Side Purity',
      desc: 'Extending core ERP capabilities without modifying standard ABAP tables, utilizing modern OData v4 and SAP Event Mesh pipelines.',
      tech: 'SAP Cloud Application Programming (CAP) Model',
      icon: Zap,
      highlights: [
        'Strict Clean Core Compliance Enforcement',
        'Asynchronous SAP Event Mesh Pub/Sub',
        'Fiori Elements UX Integration'
      ]
    },
    {
      id: 'step-5',
      label: 'Full Observability',
      sublabel: 'Live Telemetry & Tracing',
      desc: 'Deploying distributed tracing, latency trackers, and automated anomaly detection across all application runtime nodes.',
      tech: 'OpenTelemetry & Distributed Request Tracing',
      icon: Gauge,
      highlights: [
        'End-to-End Distributed Transaction Tracing',
        'Sub-Second Performance Anomaly Detection',
        'Automated Health Alerting & Auto-Remediation'
      ]
    },
    {
      id: 'step-6',
      label: 'Global Resilience',
      sublabel: 'Multi-Region High Availability',
      desc: 'Scaling digital applications across international regions with multi-zone redundancy, automated failover, and global edge CDNs.',
      tech: 'Multi-Region Kubernetes & Global Edge Caching',
      icon: Globe2,
      highlights: [
        'Active-Active Multi-Zone Availability',
        'Global Edge Content Delivery & Caching',
        'Automated Cross-Region Disaster Recovery'
      ]
    }
  ];

  // Section 3: Strategic Enterprise Digital App Challenges
  const appChallenges = [
    {
      icon: Server,
      tag: 'ARCHITECTURE OBSOLESCENCE',
      title: 'Monolithic Technical Debt & Fragility',
      desc: 'Decades of tightly coupled custom code make simple application updates hazardous, resulting in multi-month release cycles and system instability.',
      footer: 'Decoupled Cloud-Native Microservices'
    },
    {
      icon: Code2,
      tag: 'UPGRADE COMPROMISE',
      title: 'Tightly Coupled ERP Customizations',
      desc: 'Direct modifications to standard ERP tables create massive upgrade barriers, requiring extensive testing and costly remediation during version shifts.',
      footer: 'SAP BTP Side-by-Side Clean Core Extensions'
    },
    {
      icon: Smartphone,
      tag: 'FIELD LATENCY',
      title: 'Fragile Offline Mobile Synchronization',
      desc: 'Mobile field applications crash when connectivity drops in remote warehouses or production plants, causing data loss and operational stoppage.',
      footer: 'Offline-First Progressive SQLite Architecture'
    },
    {
      icon: GitBranch,
      tag: 'RELEASE BOTTLENECK',
      title: 'Manual & Error-Prone Deployments',
      desc: 'Lack of automated CI/CD pipelines forces development teams to execute manual cutovers during weekend maintenance windows, generating errors.',
      footer: 'Automated DevSecOps & Blue/Green Deployments'
    },
    {
      icon: Boxes,
      tag: 'INTEGRATION SPRAWL',
      title: 'Spaghetti Point-to-Point Integrations',
      desc: 'Dozens of brittle custom connectors between SaaS apps, legacy systems, and ERP backbones break without warning when schemas change.',
      footer: 'Unified API Gateway & Event Mesh Fabric'
    },
    {
      icon: Eye,
      tag: 'MONITORING GAP',
      title: 'Absence of Full-Stack Observability',
      desc: 'Engineering teams rely on user complaints to detect performance degradations rather than proactive tracing and real-time distributed telemetry.',
      footer: 'OpenTelemetry Distributed Request Tracing'
    }
  ];

  // Section 5: Side-by-side Architectural Comparison Matrix
  const architecturalComparison = [
    {
      dimension: 'Application Architecture',
      legacyApproach: 'Monolithic tightly coupled codebase where any minor modification risks bringing down the entire enterprise system.',
      modernApproach: 'Decoupled cloud-native microservices architecture isolating custom logic with independent release cycles.',
      statusBadge: 'MICROSERVICES FABRIC'
    },
    {
      dimension: 'ERP Extension Strategy',
      legacyApproach: 'Direct modifications to standard ERP tables, creating massive upgrade barriers and technical debt.',
      modernApproach: 'Side-by-side extension development on SAP BTP preserving an upgrade-ready clean core.',
      statusBadge: 'CLEAN CORE EXTENSION'
    },
    {
      dimension: 'Mobile Field Operations',
      legacyApproach: 'Web views dependent on constant cellular connectivity that fail during remote warehouse blackouts.',
      modernApproach: 'Offline-first progressive architecture with local SQLite staging and conflict-free delta sync.',
      statusBadge: 'OFFLINE RESILIENCE'
    },
    {
      dimension: 'Deployment & CI/CD',
      legacyApproach: 'Manual high-risk weekend deployments with prolonged maintenance windows and manual rollbacks.',
      modernApproach: 'Automated containerized DevSecOps pipelines with zero-downtime blue/green deployment.',
      statusBadge: 'ZERO-DOWNTIME CI/CD'
    },
    {
      dimension: 'Integration Fabric',
      legacyApproach: 'Fragile point-to-point batch scripts breaking unpredictably upon schema updates.',
      modernApproach: 'Standardized API gateway and event-driven integration fabric governing all enterprise data exchange.',
      statusBadge: 'UNIFIED API MESH'
    }
  ];

  // Section 5: Diagnostic Chamber Telemetry Data
  const diagnosticProcesses = {
    cloud: {
      id: 'cloud',
      tabLabel: 'Cloud Microservices Architecture',
      title: 'Cloud-Native Application Scaling & Latency Flow',
      processInfo: 'Autoscaling Container Cluster • Decoupled Microservices',
      conformanceLevel: 'HIGH AVAILABILITY ACTIVE • ZERO LATENCY SPIKES',
      riskBadgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/50 shadow-emerald-500/10',
      recommendation: 'Deploy container autoscaling policies and implement database read-replica caching to eliminate peak query contention.',
      findings: [
        {
          level: 'ELASTIC SCALING',
          levelColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
          borderColor: 'border-emerald-500/40 hover:border-emerald-400',
          title: 'Automated Horizontal Pod Autoscaling',
          desc: 'Application containers scale dynamically in response to incoming user traffic surges, maintaining instantaneous page responses.',
          source: 'Infrastructure: Kubernetes Horizontal Autoscaler'
        },
        {
          level: 'SUB-SECOND CACHING',
          levelColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
          borderColor: 'border-cyan-500/40 hover:border-cyan-400',
          title: 'Distributed Edge Redis Data Layer',
          desc: 'High-frequency read queries serve directly from regional edge caches, avoiding repeated relational database roundtrips.',
          source: 'Cache: Distributed In-Memory Edge Fabric'
        },
        {
          level: 'ZERO DOWNTIME',
          levelColor: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
          borderColor: 'border-sky-500/40 hover:border-sky-400',
          title: 'Automated Canary & Blue/Green Deployments',
          desc: 'New code releases roll out progressively across traffic pools, eliminating maintenance downtime and mitigating rollback risks.',
          source: 'Delivery: GitOps Automated Release Pipeline'
        }
      ]
    },
    mobile: {
      id: 'mobile',
      tabLabel: 'Enterprise Mobile Offline Sync',
      title: 'Warehouse & Field Mobile Offline-First Flow',
      processInfo: 'Mobile Handheld Scanners & Tablets • Edge Sync Protocol',
      conformanceLevel: 'RESILIENT OFFLINE MODE • REAL-TIME RECONCILIATION',
      riskBadgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-400/50 shadow-cyan-500/10',
      recommendation: 'Enforce local transaction queueing on handheld devices with asynchronous background replication to core ERP.',
      findings: [
        {
          level: 'SEAMLESS OFFLINE',
          levelColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
          borderColor: 'border-emerald-500/40 hover:border-emerald-400',
          title: 'Local Embedded SQLite Transaction Staging',
          desc: 'Field technicians continue logging work order steps and spare-part consumption without interruption even in cellular blackouts.',
          source: 'Mobile: Client-Side Embedded Database'
        },
        {
          level: 'DETERMINISTIC SYNC',
          levelColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
          borderColor: 'border-cyan-500/40 hover:border-cyan-400',
          title: 'Conflict-Free Transactional Merging',
          desc: 'Reconnecting devices sync queued records via timestamped reconciliation logic, ensuring zero inventory data overwrites.',
          source: 'Sync: Differential Delta Replication Engine'
        },
        {
          level: 'OPTIMIZED COMPRESSION',
          levelColor: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
          borderColor: 'border-sky-500/40 hover:border-sky-400',
          title: 'Binary Payload Compression Protocol',
          desc: 'High-density barcode and inspection image assets compress before transmission, saving mobile bandwidth on field connections.',
          source: 'Engine: Binary Protocol Serialization Mesh'
        }
      ]
    },
    api: {
      id: 'api',
      tabLabel: 'SAP BTP & Clean Core APIs',
      title: 'Clean Core Extension & Event-Driven Orchestration',
      processInfo: 'SAP BTP Integration Suite • Event-Driven Architecture',
      conformanceLevel: 'PRISTINE CORE PRESERVED • ZERO MODIFICATIONS',
      riskBadgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/50 shadow-emerald-500/10',
      recommendation: 'Route all custom logic through side-by-side BTP microservices using public standard APIs to safeguard future S/4HANA upgrades.',
      findings: [
        {
          level: 'CLEAN CORE EXTENSION',
          levelColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
          borderColor: 'border-emerald-500/40 hover:border-emerald-400',
          title: 'Side-by-Side SAP BTP Logic Execution',
          desc: 'Custom business rules run in decoupled cloud microservices, reading and writing to S/4HANA strictly through released public APIs.',
          source: 'Platform: SAP Business Technology Platform'
        },
        {
          level: 'EVENT-DRIVEN FLOW',
          levelColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
          borderColor: 'border-cyan-500/40 hover:border-cyan-400',
          title: 'Asynchronous Event Mesh Propagation',
          desc: 'Sales order and goods receipt events publish to an event mesh, triggering external custom microservices without blocking ERP locks.',
          source: 'Messaging: SAP Event Mesh Streaming Fabric'
        },
        {
          level: 'GOVERNED ACCESS',
          levelColor: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
          borderColor: 'border-sky-500/40 hover:border-sky-400',
          title: 'Centralized API Gateway Security & Quotas',
          desc: 'Every external integration passes through strict OAuth authentication and automated threat protection before touching backend databases.',
          source: 'Security: Enterprise API Management Gateway'
        }
      ]
    }
  };

  // Section 6: Phased Transformation Stages
  const transformationPhases = [
    {
      phase: 'STAGE ONE',
      title: 'Portfolio Diagnostics & Technical Debt Scoping',
      focus: 'Assessment of legacy monolithic dependencies, database locks, brittle point-to-point scripts, and modernization readiness.',
      deliverable: 'Application Modernization Blueprint & Technical Debt Scorecard',
      icon: Search
    },
    {
      phase: 'STAGE TWO',
      title: 'Clean Core & Microservice Architecture Design',
      focus: 'Formulation of domain-driven microservice boundaries, SAP BTP extension models, and decoupled headless presentation standards.',
      deliverable: 'Cloud-Native Target Architecture & API Contract Specifications',
      icon: Layers
    },
    {
      phase: 'STAGE THREE',
      title: 'Agile DevSecOps & Cloud Platform Deployment',
      focus: 'Implementation of containerized CI/CD deployment pipelines, SAP CAP model extensions, and offline-first mobile apps.',
      deliverable: 'Live Production Microservices & Mobile Application Suite',
      icon: Zap
    },
    {
      phase: 'STAGE FOUR',
      title: 'Full-Stack Observability & Global Resilience',
      focus: 'Operationalization of distributed request tracing, automated horizontal scaling, and continuous multi-region failover testing.',
      deliverable: 'Enterprise-Wide Resilient Digital Application Fabric',
      icon: ShieldCheck
    }
  ];

  // Section 7: Executive FAQs
  const appStrategyFaqs = [
    {
      question: 'What is Clean Core architecture, and how does SAP BTP protect future ERP upgrades?',
      answer: 'Clean Core architecture dictates that custom business logic and bespoke application workflows must never modify standard ERP database tables directly. By building extensions side-by-side on SAP Business Technology Platform (BTP) using standard OData APIs and SAP Event Mesh, enterprises maintain an agile custom application ecosystem while keeping their core S/4HANA instance completely pristine and instantly upgradeable.'
    },
    {
      question: 'How do cloud-native microservices improve application reliability compared to monolithic architectures?',
      answer: 'In a monolithic architecture, a failure in a single module or high load on one function can cause the entire application to crash. Cloud-native microservices break applications into independent, containerized services with separate compute resources. If one service experiences a surge or error, autoscaling pods spin up automatically and the rest of the enterprise application suite continues operating without interruption.'
    },
    {
      question: 'How do offline-first mobile architectures ensure continuity in remote field and factory environments?',
      answer: 'Our offline-first applications use local client-side databases (such as embedded SQLite) to capture and validate work orders, inventory scans, and inspection data locally without requiring active network connectivity. When connectivity is restored, differential delta replication protocols synchronize the staged transactions seamlessly with the core ERP with conflict-free deterministic logic.'
    },
    {
      question: 'What advantages do Headless Micro-Frontends provide over monolithic web templates?',
      answer: 'Headless micro-frontends decouple the user interface from backend business logic and databases. Frontend teams can build, test, and deploy fast, responsive user experiences using modern frameworks (such as Next.js and React) independently. This eliminates cross-team release bottlenecks and ensures sub-second page performance across devices.'
    },
    {
      question: 'How does full-stack observability differ from basic server uptime monitoring?',
      answer: 'Basic monitoring only tracks whether a server is online. Full-stack observability leverages OpenTelemetry and distributed request tracing to follow every individual transaction from the user click through API gateways, microservices, and database queries. It pinpoints the exact line of code or slow SQL query causing latency before end-users experience degradation.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#0070C0] selection:text-white font-sans antialiased overflow-x-hidden">

      {/* =========================================================================
          SECTION 1: HERO SECTION (Clean, High-Contrast, Professional Static Hero)
          ========================================================================= */}
      <section className="relative w-full min-h-[620px] sm:min-h-[680px] lg:min-h-[720px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 overflow-hidden bg-slate-950 text-white">

        {/* Crisp Static Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/enterprise_digital_applications_cloud_native_hero.png"
            alt="Enterprise Digital Applications & Cloud-Native Platforms"
            className="w-full h-full object-cover object-center lg:object-right brightness-[1.02] contrast-[1.05]"
            style={{ imageRendering: '-webkit-optimize-contrast' }}
          />
        </div>

        {/* Lighter Directional Scrim for Crystal-Clear Text Readability & Brighter Visuals */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-slate-950/75 via-slate-950/45 sm:via-slate-950/20 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <div className="max-w-3xl space-y-4">

            {/* Breadcrumb Navigation & Category Tag Badge (Full Screen View removed) */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-cyan-500/40 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 shadow-md">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>KNOOVIQ DIGITAL EXPERIENCE &bull; DIGITAL APPLICATIONS</span>
              </div>
            </div>

            {/* Static Headline with High-Contrast Typography */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.1] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
              Enterprise <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-cyan-400">
                Digital Applications &amp; Cloud-Native Platforms
              </span>
            </h1>

            {/* Subtitle with High Legibility */}
            <p className="text-base sm:text-lg text-slate-100 leading-relaxed font-normal max-w-2xl pt-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
              Decoupled cloud-native microservices architecture, modern headless micro-frontends, offline-first mobile enterprise apps, and clean core SAP BTP extensions across multi-cloud footprints.
            </p>

            {/* Enterprise Assurance Indicators (With Interactive Hover Motion & No Buttons) */}
            <div className="pt-3 flex flex-wrap items-center gap-2.5 sm:gap-3">
              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-cyan-200 cursor-default shadow-xs"
              >
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Cloud-Native Microservices</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-emerald-200 cursor-default shadow-xs"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>SAP BTP Clean Core Extensions</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-sky-200 cursor-default shadow-xs"
              >
                <Zap className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Offline-First Resilient Mobile</span>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: EXECUTIVE PERSPECTIVE (Clean Light Corporate Theme - Large Legible Text)
          ========================================================================= */}
      <section id="applications-evolution" className="py-24 bg-gradient-to-b from-white via-[#F8FBFE] to-white border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-300 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#0070C0]">
                <Activity className="w-4 h-4 text-[#0070C0]" />
                <span>EXECUTIVE APPLICATION PERSPECTIVE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
                Architecting the <span className="text-[#0070C0]">Decoupled Enterprise Application Mesh</span>
              </h2>

              <div className="border-l-4 border-[#0070C0] border-y border-r border-slate-300 pl-5 py-3.5 bg-gradient-to-r from-sky-50/80 via-sky-50/30 to-transparent rounded-r-2xl">
                <p className="text-base sm:text-lg font-semibold text-slate-800 leading-relaxed italic">
                  &ldquo;Enterprise agility requires decoupling business innovation from monolithic database cores. Clean core architectures liberate custom development, allowing rapid innovation without upgrade lock-in.&rdquo;
                </p>
              </div>

              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
                KNOOVIQ helps enterprise technology leaders decompose brittle monolithic software into scalable, event-driven microservices. We build modern digital applications on SAP Business Technology Platform (BTP) and cloud-native frameworks, preserving core ERP integrity while accelerating time-to-market.
              </p>

              {/* 3 Executive Pillars (Clear, Large, Highly Legible Text) */}
              <div className="space-y-4 pt-2">
                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <Cloud className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-950">Decoupled Clean Core BTP Extensions</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Custom business applications engineered side-by-side on SAP BTP, reading and writing strictly via published standard APIs.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <Server className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-950">Elastic Cloud-Native Microservices</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Containerized microservices that autoscale horizontally under peak transaction loads, eliminating operational downtime.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-950">Offline-Resilient Mobile Systems</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Field applications with embedded client-side database caching, enabling continuous productivity during cellular dropouts.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Interactive Evolution Visual */}
            <div className="lg:col-span-6 space-y-5">

              <div
                className="relative rounded-2xl overflow-hidden border-2 border-slate-300 shadow-xl bg-slate-900 group h-96 sm:h-[440px] lg:h-[490px] w-full cursor-pointer"
                onClick={() => setActiveJourneyStep((activeJourneyStep + 1) % journeySteps.length)}
                title="Click image to advance to next architecture step"
              >
                <img
                  src="/images/digital_applications_console.jpg"
                  alt="Enterprise Digital Application Architecture Platform"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-lg bg-slate-900/90 backdrop-blur-md border border-cyan-400/50 text-xs sm:text-sm font-mono font-bold text-cyan-300 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                  <span>ARCHITECTURE FOCUS: {journeySteps[activeJourneyStep].label.toUpperCase()}</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1.5 p-3 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-700/80">
                  <div className="text-xs sm:text-sm font-mono font-bold text-cyan-300">{journeySteps[activeJourneyStep].tech}</div>
                  <p className="text-xs sm:text-sm text-slate-100 font-normal leading-relaxed line-clamp-2">{journeySteps[activeJourneyStep].desc}</p>
                </div>
              </div>

              {/* 6 Interactive Step Buttons (Large, Clear, High-Contrast Text) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {journeySteps.map((step, idx) => {
                  const isSelected = activeJourneyStep === idx;
                  const StepIcon = step.icon;
                  return (
                    <button
                      key={step.id}
                      type="button"
                      onClick={() => setActiveJourneyStep(idx)}
                      className={`p-3.5 rounded-2xl border text-left transition-all flex items-center gap-3 ${isSelected
                        ? 'bg-[#0070C0] text-white border-2 border-[#0070C0] shadow-md scale-[1.01]'
                        : 'bg-white text-slate-800 border border-slate-200 hover:bg-sky-50 hover:border-[#0070C0]'
                        }`}
                    >
                      <div className={`p-2 rounded-xl shrink-0 ${isSelected ? 'bg-white/20 text-white' : 'bg-sky-50 text-[#0070C0] border border-sky-200'}`}>
                        <StepIcon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs sm:text-sm font-bold truncate">{step.label}</div>
                        <div className={`text-xs truncate ${isSelected ? 'text-sky-100 font-medium' : 'text-slate-500'}`}>{step.sublabel}</div>
                      </div>
                    </button>
                  );
                })}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: ENTERPRISE DIGITAL APP CHALLENGES (Clean Slate-50 - Highly Visible Text)
          ========================================================================= */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3.5">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#0070C0] uppercase">
              APPLICATION FRICTION POINTS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950">
              Strategic Hurdles Facing Legacy Enterprise Software
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Why traditional monolithic applications, tight ERP customizations, and manual deployments stall innovation and generate severe maintenance costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {appChallenges.map((item, idx) => {
              const ChallengeIcon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white p-7 flex flex-col justify-between hover:border-[#0070C0] hover:shadow-xl transition-all group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 group-hover:text-[#0070C0] group-hover:bg-sky-50 transition-colors">
                        {item.tag}
                      </span>
                      <div className="p-2.5 rounded-xl bg-sky-50 text-[#0070C0] group-hover:scale-110 transition-transform">
                        <ChallengeIcon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-slate-400 font-mono text-xs">KNOOVIQ REMEDY:</span>
                    <span className="font-bold text-[#0070C0] font-mono text-xs sm:text-sm">{item.footer}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: CIRCULAR CHEVRON ECOSYSTEM (Contrasting Deep Navy Sandbox)
          ========================================================================= */}
      <section className="py-24 bg-[#0B1528] text-white border-b border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3.5">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-cyan-400 uppercase">
              INTERCONNECTED APPLICATION FLYWHEEL
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              The KNOOVIQ Unified Digital Application Mesh
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Explore the eight mutually reinforcing layers of our modern application architecture. Hover over any segment to inspect its architectural role.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left Segments (4 Segments) */}
            <div className="lg:col-span-3 space-y-4 order-2 lg:order-1">
              {wheelSegments.slice(4, 8).map((seg, i) => {
                const actualIndex = i + 4;
                const isHovered = hoveredWheelIndex === actualIndex;
                const SegIcon = seg.icon;
                return (
                  <div
                    key={seg.id}
                    onMouseEnter={() => setHoveredWheelIndex(actualIndex)}
                    onMouseLeave={() => setHoveredWheelIndex(null)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer ${isHovered
                      ? 'border-sky-400 bg-sky-500/20 shadow-lg shadow-sky-500/20 translate-x-1'
                      : 'border-slate-800 bg-slate-900/85 hover:border-slate-700'
                      }`}
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <SegIcon className={`w-4 h-4 ${seg.textColor}`} />
                      <span className={`text-sm font-bold ${seg.textColor}`}>{seg.title}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-2">
                      {seg.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Center Circular SVG Wheel */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center order-1 lg:order-2">
              <div className="relative w-[340px] h-[340px] sm:w-[460px] sm:h-[460px]">
                <svg viewBox="0 0 500 500" className="w-full h-full filter drop-shadow-2xl">
                  {wheelSegments.map((segment, index) => {
                    const isHovered = hoveredWheelIndex === index;
                    const pathD = getChevronPath(index);
                    const iconPos = getIconCoords(index);
                    const SegIcon = segment.icon;

                    return (
                      <g
                        key={segment.id}
                        className="cursor-pointer transition-all duration-300"
                        onMouseEnter={() => setHoveredWheelIndex(index)}
                        onMouseLeave={() => setHoveredWheelIndex(null)}
                      >
                        <path
                          d={pathD}
                          fill={segment.color}
                          fillOpacity={isHovered ? 0.95 : 0.3}
                          stroke={segment.color}
                          strokeWidth={isHovered ? 3 : 1.5}
                          className="transition-all duration-300"
                        />
                        <circle
                          cx={iconPos.x}
                          cy={iconPos.y}
                          r={18}
                          fill="#0b1324"
                          stroke={segment.color}
                          strokeWidth={2}
                          className="transition-all duration-300"
                        />
                        <foreignObject
                          x={iconPos.x - 9}
                          y={iconPos.y - 9}
                          width={18}
                          height={18}
                          className="pointer-events-none"
                        >
                          <SegIcon className={`w-4.5 h-4.5 ${segment.textColor}`} />
                        </foreignObject>
                      </g>
                    );
                  })}
                  <circle cx="250" cy="250" r="88" fill="#080e1d" stroke="#00A3E0" strokeWidth="2.5" />
                  <circle cx="250" cy="250" r="76" fill="#0a152d" stroke="#0284c7" strokeWidth="1" strokeDasharray="4 4" />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center p-6">
                  {hoveredWheelIndex !== null ? (
                    <motion.div
                      key={hoveredWheelIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-1.5"
                    >
                      <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
                        {wheelSegments[hoveredWheelIndex].badge}
                      </span>
                      <div className="text-sm sm:text-base font-black text-white max-w-[150px] mx-auto leading-tight">
                        {wheelSegments[hoveredWheelIndex].title}
                      </div>
                      <div className="text-xs text-slate-300 font-mono">
                        {wheelSegments[hoveredWheelIndex].metric}
                      </div>
                    </motion.div>
                  ) : (
                    <div className="space-y-1.5">
                      <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
                        APPLICATION CORE
                      </span>
                      <div className="text-sm sm:text-base font-black text-white leading-tight">
                        Digital Applications
                      </div>
                      <div className="text-xs text-slate-300">
                        Cloud-Native Mesh
                      </div>
                    </div>
                  )}
                </div>

              </div>

              <div className="mt-5 flex items-center justify-center">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-400/50 text-xs font-mono font-bold text-cyan-300 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                  <span>ACTIVE APPLICATION LAYER: {(hoveredWheelIndex !== null ? wheelSegments[hoveredWheelIndex].title : 'CONTINUOUS ROTATION').toUpperCase()}</span>
                </div>
              </div>
            </div>

            {/* Right Segments (4 Segments) */}
            <div className="lg:col-span-3 space-y-4 order-3">
              {wheelSegments.slice(0, 4).map((seg, i) => {
                const isHovered = hoveredWheelIndex === i;
                const SegIcon = seg.icon;
                return (
                  <div
                    key={seg.id}
                    onMouseEnter={() => setHoveredWheelIndex(i)}
                    onMouseLeave={() => setHoveredWheelIndex(null)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer ${isHovered
                      ? 'border-sky-400 bg-sky-500/20 shadow-lg shadow-sky-500/20 -translate-x-1'
                      : 'border-slate-800 bg-slate-900/85 hover:border-slate-700'
                      }`}
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <SegIcon className={`w-4 h-4 ${seg.textColor}`} />
                      <span className={`text-sm font-bold ${seg.textColor}`}>{seg.title}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-2">
                      {seg.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: ARCHITECTURAL TRANSFORMATION MATRIX & BLUEPRINT (Clean White Theme)
          ========================================================================= */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3.5">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#0070C0] uppercase">
              TOPOLOGICAL ARCHITECTURE BLUEPRINT
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950">
              Cloud-Native Applications &amp; Clean Core Architecture Matrix
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Examine the concrete architectural difference between legacy monolithic applications and KNOOVIQ decoupled cloud-native microservices frameworks.
            </p>
          </div>

          {/* Interactive Mode Toggle (Clear, Large, Highly Visible Text) */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setActiveSandboxTab('comparison')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all border ${activeSandboxTab === 'comparison'
                ? 'bg-[#0070C0] text-white border-[#0070C0] shadow-md'
                : 'bg-slate-100 text-slate-700 border-slate-200 hover:text-slate-950 hover:bg-slate-200'
                }`}
            >
              Transformation Matrix (Legacy vs. KNOOVIQ)
            </button>
            <button
              onClick={() => setActiveSandboxTab('layers')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all border ${activeSandboxTab === 'layers'
                ? 'bg-[#0070C0] text-white border-[#0070C0] shadow-md'
                : 'bg-slate-100 text-slate-700 border-slate-200 hover:text-slate-950 hover:bg-slate-200'
                }`}
            >
              Full-Stack Application Blueprint
            </button>
            <button
              onClick={() => setActiveSandboxTab('telemetry')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all border ${activeSandboxTab === 'telemetry'
                ? 'bg-[#0070C0] text-white border-[#0070C0] shadow-md'
                : 'bg-slate-100 text-slate-700 border-slate-200 hover:text-slate-950 hover:bg-slate-200'
                }`}
            >
              Live Application Telemetry Chamber
            </button>
          </div>

          {/* TAB 1: Comparative Matrix (High Contrast, Large Visible Text) */}
          {activeSandboxTab === 'comparison' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl border border-slate-200 overflow-hidden shadow-sm"
            >
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-200 text-xs sm:text-sm font-mono uppercase text-slate-700 tracking-wider">
                      <th className="py-4 px-6 font-bold w-1/4">Application Dimension</th>
                      <th className="py-4 px-6 font-bold w-1/3 text-rose-800 bg-rose-50/70">Legacy Monolithic Stacks</th>
                      <th className="py-4 px-6 font-bold w-1/3 text-[#0070C0] bg-sky-50/70">KNOOVIQ Modern Cloud-Native Mesh</th>
                      <th className="py-4 px-5 font-bold text-center">Standard</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-sm sm:text-base">
                    {architecturalComparison.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-5 px-6 font-bold text-slate-900 flex items-center gap-2.5">
                          <span className="w-2 h-2 rounded-full bg-[#0070C0] shrink-0" />
                          <span>{row.dimension}</span>
                        </td>
                        <td className="py-5 px-6 text-slate-700 bg-rose-50/20 leading-relaxed font-normal">
                          <div className="flex items-start gap-2.5">
                            <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-1" />
                            <span>{row.legacyApproach}</span>
                          </div>
                        </td>
                        <td className="py-5 px-6 text-slate-900 bg-sky-50/20 font-medium leading-relaxed">
                          <div className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#0070C0] shrink-0 mt-1" />
                            <span>{row.modernApproach}</span>
                          </div>
                        </td>
                        <td className="py-5 px-5 text-center">
                          <span className="inline-block px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-sky-100 text-[#0070C0] border border-sky-200">
                            {row.statusBadge}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {/* TAB 2: Full-Stack Application Blueprint Display */}
          {activeSandboxTab === 'layers' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-10 shadow-sm"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

                {/* Blueprint Image */}
                <div className="lg:col-span-8 overflow-hidden rounded-2xl border-2 border-slate-300 relative group shadow-lg bg-slate-900 h-[380px] sm:h-[460px] lg:h-[500px] w-full">
                  <img
                    src="/images/enterprise_digital_application_architecture_framework.png"
                    alt="Enterprise Digital Application Architecture Framework Blueprint"
                    className="w-full h-full object-cover object-center rounded-2xl transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs sm:text-sm p-3.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-white">
                    <div className="flex items-center gap-2.5">
                      <Layers className="w-4 h-4 text-cyan-400" />
                      <span className="font-bold">Full Stack Application Framework Reference</span>
                    </div>
                    <span className="font-mono text-xs text-cyan-300 font-bold uppercase">
                      SAP BTP &amp; KUBERNETES FABRIC
                    </span>
                  </div>
                </div>

                {/* Technical Layers Checklist */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div className="text-xs font-mono text-[#0070C0] uppercase font-bold mb-1">
                      LAYER ONE: CLOUD INFRASTRUCTURE
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">Multi-Cloud Container Fabric</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Resilient Kubernetes orchestration supporting automated horizontal scaling and multi-region redundancy.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div className="text-xs font-mono text-[#0070C0] uppercase font-bold mb-1">
                      LAYER TWO: BUSINESS MICROSERVICES
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">Domain-Driven Microservices</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Modular stateless services executing business logic without creating cross-application database locks.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div className="text-xs font-mono text-[#0070C0] uppercase font-bold mb-1">
                      LAYER THREE: CLEAN CORE EXTENSIONS
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">SAP BTP CAP Framework</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Side-by-side extension platform connecting custom digital apps to SAP S/4HANA via clean core APIs.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div className="text-xs font-mono text-[#0070C0] uppercase font-bold mb-1">
                      LAYER FOUR: HEADLESS UX &amp; MOBILE
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">Modern Micro-Frontends</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Consumer-grade responsive frontends and native mobile apps engineered with offline SQLite synchronization.
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* TAB 3: Live Application Telemetry Chamber */}
          {activeSandboxTab === 'telemetry' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl border border-slate-800 bg-slate-950 p-6 sm:p-10 shadow-xl text-white space-y-6"
            >
              {/* Telemetry Tab Switcher */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
                <div className="flex flex-wrap gap-2">
                  {(['cloud', 'mobile', 'api'] as const).map((tabKey) => (
                    <button
                      key={tabKey}
                      type="button"
                      onClick={() => setActiveTelemetryTab(tabKey)}
                      className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${activeTelemetryTab === tabKey
                        ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                        : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 border border-slate-700'
                        }`}
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                      <span>{diagnosticProcesses[tabKey].tabLabel}</span>
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider border ${diagnosticProcesses[activeTelemetryTab].riskBadgeColor}`}>
                    {diagnosticProcesses[activeTelemetryTab].conformanceLevel}
                  </span>
                </div>
              </div>

              {/* Diagnostic Chamber Body */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Telemetry Image */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 p-2 group">
                    <img
                      src="/images/digital_applications_chamber.jpg"
                      alt="Digital Applications Diagnostic Telemetry"
                      className="w-full h-auto max-h-[340px] object-contain rounded-xl transform group-hover:scale-[1.01] transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-cyan-400/50 text-xs font-mono font-bold text-cyan-300 flex items-center gap-1.5 shadow-md">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                      <span>TELEMETRY STREAM &bull; LIVE</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/50 space-y-1">
                    <div className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Application Architecture Directive</span>
                    </div>
                    <p className="text-xs text-cyan-100 leading-relaxed font-normal">
                      {diagnosticProcesses[activeTelemetryTab].recommendation}
                    </p>
                  </div>
                </div>

                {/* Right Applied Enhancements */}
                <div className="lg:col-span-7 space-y-3">
                  <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
                    <span>Applied Application Enhancements</span>
                    <span className="text-cyan-400">Straight-Through Verification</span>
                  </div>

                  <div className="space-y-3">
                    {diagnosticProcesses[activeTelemetryTab].findings.map((finding, fIdx) => (
                      <div
                        key={fIdx}
                        className={`p-4 rounded-xl border bg-slate-900/60 backdrop-blur-md transition-all text-left space-y-2 ${finding.borderColor}`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className={`px-2.5 py-0.5 rounded text-xs font-mono font-bold uppercase tracking-wider border ${finding.levelColor}`}>
                            {finding.level}
                          </span>
                          <span className="text-xs font-mono text-slate-400 truncate">
                            {finding.source}
                          </span>
                        </div>
                        <h4 className="text-sm sm:text-base font-bold text-white">
                          {finding.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                          {finding.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          )}

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: PHASED IMPLEMENTATION ROADMAP (Clean Slate-50 - Highly Legible Text)
          ========================================================================= */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3.5">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#0070C0] uppercase">
              TRANSFORMATION METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950">
              Phased Enterprise Implementation Roadmap
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              A structured, risk-mitigated journey from monolithic legacy codebases to an enterprise-wide, governed cloud-native application mesh.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {transformationPhases.map((phase, idx) => {
              const PhaseIcon = phase.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white p-7 flex flex-col justify-between hover:border-[#0070C0] hover:shadow-xl transition-all group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-lg bg-sky-50 text-[#0070C0] border border-sky-200">
                        {phase.phase}
                      </span>
                      <div className="p-2.5 rounded-xl bg-sky-50 text-[#0070C0] group-hover:scale-110 transition-transform">
                        <PhaseIcon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                      {phase.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {phase.focus}
                    </p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-slate-100">
                    <span className="text-xs font-mono text-slate-400 uppercase block mb-1">
                      KEY DELIVERABLE:
                    </span>
                    <span className="text-sm font-bold text-slate-900">
                      {phase.deliverable}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: EXECUTIVE FAQS (Modern Attractive Sapphire & Ambient Glow Theme)
          ========================================================================= */}
      <section className="relative py-24 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/60 border-b border-slate-200 overflow-hidden">
        {/* Subtle Ambient Decorative Glow & Grid */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[340px] bg-gradient-to-b from-sky-100/60 via-blue-50/30 to-transparent blur-3xl pointer-events-none -z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(#0070c0_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.035] pointer-events-none -z-0" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/80 text-xs font-mono font-bold tracking-widest text-[#0070C0] uppercase shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>EXECUTIVE CLARIFICATIONS &bull; DIGITAL APPLICATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#005A9C] via-[#0070C0] to-sky-500">Strategic Questions</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
              Addressing cloud-native modernization, SAP BTP clean core extensions, offline-first mobile sync, and DevSecOps pipelines for technology leaders.
            </p>
          </div>

          <div className="space-y-4">
            {appStrategyFaqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                    isOpen
                      ? 'bg-white border-[#0070C0] shadow-lg shadow-sky-500/5 ring-1 ring-[#0070C0]/20 border-l-4 border-l-[#0070C0]'
                      : 'bg-white border-slate-200/90 hover:border-slate-300 hover:shadow-xs'
                  }`}
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full py-5 px-6 sm:px-7 text-left flex items-center justify-between gap-4 group cursor-pointer"
                  >
                    <span className={`font-bold text-base sm:text-lg transition-colors leading-snug flex-1 ${
                      isOpen ? 'text-[#0070C0]' : 'text-slate-900 group-hover:text-[#0070C0]'
                    }`}>
                      {faq.question}
                    </span>

                    <span className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 shrink-0 ${
                      isOpen
                        ? 'bg-[#0070C0] text-white rotate-180 shadow-sm shadow-[#0070C0]/25'
                        : 'bg-slate-100/90 text-slate-500 group-hover:bg-sky-50 group-hover:text-[#0070C0]'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-6 sm:px-7 pb-6 pt-2 border-t border-slate-100 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 8: EXECUTIVE STRATEGY CTA RIBBON (Executive Sapphire Gradient)
          ========================================================================= */}
      <section className="py-20 bg-gradient-to-r from-[#003865] via-[#005A9C] to-[#0070C0] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-300/40 bg-white/10 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-cyan-200" />
            <span className="text-xs sm:text-sm font-bold tracking-widest text-cyan-100 uppercase font-mono">
              STRATEGIC APPLICATION ADVISORY
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Ready to Modernize Your Enterprise Application Landscape?
          </h2>

          <p className="text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed font-normal">
            Collaborate with senior software architects to refactor monolithic applications into scalable microservices, build clean core SAP BTP extensions, and automate continuous DevSecOps delivery.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
            <button
              onClick={() => onOpenContact ? onOpenContact('Digital Applications Strategy Workshop') : undefined}
              className="px-9 py-4 rounded-xl font-bold text-sm sm:text-base text-slate-900 bg-white hover:bg-sky-50 shadow-xl transition-all flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              <span>Schedule Architecture Workshop</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#0070C0]" />
            </button>
            <Link
              to="/digital-experience/personalization"
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold uppercase tracking-wider backdrop-blur-md flex items-center gap-2 group transition-all w-full sm:w-auto justify-center"
            >
              <span>Explore Personalization</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-7 text-xs sm:text-sm text-sky-100 font-mono">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              <span>Clean Core Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Cloud className="w-4 h-4 text-cyan-200" />
              <span>Zero-Downtime Deployment</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-300" />
              <span>Sub-Second Response Velocity</span>
            </div>
          </div>

        </div>
      </section>

      {/* Lightbox Full-Screen Modal for Hero Architecture Image */}
      {isHeroModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 sm:p-6"
          onClick={() => setIsHeroModalOpen(false)}
        >
          <div
            className="relative max-w-7xl w-full max-h-[92vh] flex flex-col items-center justify-center bg-slate-950/80 border border-white/15 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar with Title and Close Button */}
            <div className="w-full flex items-center justify-between px-6 py-4 bg-slate-900/90 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <Cloud className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-mono font-bold text-white tracking-wide uppercase">
                  Digital Applications &bull; Cloud-Native Architecture Framework
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-slate-400 hidden sm:inline-block">Press ESC or click outside to exit</span>
                <button
                  type="button"
                  onClick={() => setIsHeroModalOpen(false)}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-rose-500/80 text-white transition-colors cursor-pointer"
                  title="Close (ESC)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Image Container */}
            <div className="p-3 sm:p-6 w-full flex items-center justify-center overflow-auto max-h-[calc(92vh-120px)] bg-slate-950">
              <img
                src="/images/enterprise_digital_applications_cloud_native_hero.png"
                alt="Enterprise Digital Applications & Cloud-Native Platforms"
                className="max-w-full max-h-[76vh] object-contain rounded-xl shadow-2xl border border-white/10"
              />
            </div>

            {/* Bottom info bar */}
            <div className="w-full px-6 py-3 bg-slate-900/90 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span className="text-cyan-300 font-semibold">Cloud-Native Application Mesh Radar</span>
              </div>
              <div className="flex items-center gap-4">
                <span>Microservices Fabric</span>
                <span>•</span>
                <span>SAP BTP Extensions</span>
                <span>•</span>
                <span>Offline-First Mobile</span>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default DigitalApplicationsPage;
