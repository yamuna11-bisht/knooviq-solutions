import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Database,
  Network,
  Layers,
  ShieldCheck,
  Zap,
  BarChart3,
  FileCheck,
  AlertTriangle,
  RefreshCw,
  Search,
  ChevronRight,
  Shield,
  Scale,
  Activity,
  Lock,
  Play,
  Pause,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ChevronDown,
  ExternalLink,
  XCircle,
  Server,
  Workflow,
  Cpu
} from 'lucide-react';

interface DataArchitecturePageProps {
  onOpenContact?: (defaultTopic?: string) => void;
}

export const DataArchitecturePage: React.FC<DataArchitecturePageProps> = ({
  onOpenContact
}) => {
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

  // State for Section 5: Architecture Comparison Sandbox Tab
  const [activeSandboxTab, setActiveSandboxTab] = useState<'comparison' | 'layers' | 'contracts'>('comparison');

  // State for Section 7: FAQ Accordion
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Section 4: Circular Chevron Segments (8 Interlocking Layers)
  const wheelSegments = [
    {
      id: 'decoupled-storage',
      shortTag: 'STORAGE',
      title: 'Decoupled Multi-Cloud Storage',
      desc: 'Sovereign object storage separation enabling dynamic scaling of compute clusters without data duplication.',
      badge: 'STORAGE INDEPENDENCE',
      metric: 'Zero Storage Lock-In',
      side: 'right',
      color: '#0070C0',
      textColor: 'text-sky-400',
      bgGlow: 'rgba(0, 112, 192, 0.35)',
      icon: Database
    },
    {
      id: 'open-lakehouse',
      shortTag: 'TABLES',
      title: 'Open Table Lakehouse Formats',
      desc: 'Standardized open table layers guaranteeing transactional ACID consistency across distributed query engines.',
      badge: 'OPEN STANDARDS',
      metric: 'Multi-Engine Interoperability',
      side: 'right',
      color: '#0284C7',
      textColor: 'text-cyan-400',
      bgGlow: 'rgba(2, 132, 199, 0.35)',
      icon: Layers
    },
    {
      id: 'streaming-cdc',
      shortTag: 'CDC',
      title: 'Microsecond Streaming & CDC',
      desc: 'Event-driven Change Data Capture listening directly to transactional database logs with zero ERP load.',
      badge: 'ZERO-IMPACT STREAMING',
      metric: 'Log-Based Delta Capture',
      side: 'right',
      color: '#06B6D4',
      textColor: 'text-cyan-300',
      bgGlow: 'rgba(6, 182, 212, 0.35)',
      icon: Activity
    },
    {
      id: 'virtualization-mesh',
      shortTag: 'VIRT',
      title: 'Zero-Copy Virtualization Mesh',
      desc: 'In-situ query federation pushing distributed execution down to source databases without ETL staging delays.',
      badge: 'IN-SITU FEDERATION',
      metric: 'Zero Physical Duplication',
      side: 'right',
      color: '#10B981',
      textColor: 'text-emerald-400',
      bgGlow: 'rgba(16, 185, 129, 0.35)',
      icon: Zap
    },
    {
      id: 'semantic-modeling',
      shortTag: 'SEMANTICS',
      title: 'Universal Business Semantics',
      desc: 'Centralized metric layer translating technical database schemas into canonical business terms across tools.',
      badge: 'CANONICAL METRICS',
      metric: 'Harmonized Dimension Models',
      side: 'left',
      color: '#F59E0B',
      textColor: 'text-amber-400',
      bgGlow: 'rgba(245, 158, 11, 0.35)',
      icon: Workflow
    },
    {
      id: 'schema-contracts',
      shortTag: 'CONTRACTS',
      title: 'Automated Data Contracts',
      desc: 'Enforceable schema contracts preventing upstream software updates from corrupting downstream analytics.',
      badge: 'SCHEMA DEFENSE',
      metric: 'Automated Drift Interlocks',
      side: 'left',
      color: '#EC4899',
      textColor: 'text-pink-400',
      bgGlow: 'rgba(236, 72, 153, 0.35)',
      icon: FileCheck
    },
    {
      id: 'sovereign-boundary',
      shortTag: 'SECURITY',
      title: 'Zero-Trust Security Perimeter',
      desc: 'Role-based and attribute-based security policies enforced uniformly across physical and virtual data nodes.',
      badge: 'CONTINUOUS ENCRYPTION',
      metric: 'Air-Gapped Sovereign Enclaves',
      side: 'left',
      color: '#8B5CF6',
      textColor: 'text-purple-400',
      bgGlow: 'rgba(139, 92, 246, 0.35)',
      icon: Lock
    },
    {
      id: 'domain-products',
      shortTag: 'PRODUCTS',
      title: 'Self-Serve Domain Data Products',
      desc: 'Decentralized data product registry allowing domain business teams to publish, discover, and consume data.',
      badge: 'PRODUCT REGISTRY',
      metric: 'Autonomous Business Squads',
      side: 'left',
      color: '#6366F1',
      textColor: 'text-indigo-400',
      bgGlow: 'rgba(99, 102, 241, 0.35)',
      icon: Network
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
      id: 'decoupled-compute',
      label: 'Decoupled Compute & Storage',
      sublabel: 'Hyperscaler Elasticity',
      desc: 'Independent scaling of compute resources from underlying cloud object stores, eliminating resource contention between transactional reporting and ad-hoc analytical workloads.',
      tech: 'Decoupled Lakehouse Architecture',
      icon: Server,
      highlights: [
        'Compute Sizing Tailored to Specific Workload Profiles',
        'Direct Access Over Low-Cost Cloud Object Storage',
        'Elimination of Over-Provisioned Standby Nodes'
      ]
    },
    {
      id: 'open-lakehouse-tables',
      label: 'Open Table Formats',
      sublabel: 'ACID Transactionality',
      desc: 'Deploying open table standards across distributed cloud buckets to provide ACID transactional integrity, time-travel queries, and partition evolution without vendor lock-in.',
      tech: 'Open Table Lakehouse Core',
      icon: Layers,
      highlights: [
        'Multi-Engine Concurrent Read & Write Consistency',
        'In-Place Schema and Partition Evolution',
        'Universal Support Across Modern Query Engines'
      ]
    },
    {
      id: 'streaming-cdc-pipeline',
      label: 'Event-Driven CDC Pipelines',
      sublabel: 'Zero Ingestion Latency',
      desc: 'Continuous real-time Change Data Capture reading directly from transactional database commit logs, streaming deltas instantly into analytical layers without impacting ERP operations.',
      tech: 'Distributed Streaming Bus',
      icon: Activity,
      highlights: [
        'Microsecond Transaction Log Delta Detection',
        'Zero Operational Overhead on Core Transactional Backbones',
        'Continuous Ingestion Streaming Across Multi-Cloud Footprints'
      ]
    },
    {
      id: 'logical-data-fabric',
      label: 'Logical Data Fabric',
      sublabel: 'In-Situ Virtualization',
      desc: 'A unified logical data tier executing distributed query pushdown directly across operational SAP ERP and hyperscaler stores without intermediate data movement.',
      tech: 'SAP Datasphere & Semantic Virtualization',
      icon: Zap,
      highlights: [
        'Distributed Query Optimization & Execution Pushdown',
        'Elimination of Intermediate Staging Tables',
        'Unified Virtual Schemas Across Heterogeneous Datastores'
      ]
    },
    {
      id: 'data-contract-governance',
      label: 'Schema Contract Enforcement',
      sublabel: 'Proactive Reliability',
      desc: 'Programmatic data contracts established between data producer services and downstream consumer products to ensure breaking schema modifications are intercepted at the CI/CD boundary.',
      tech: 'Automated Schema Firewall',
      icon: FileCheck,
      highlights: [
        'Pre-Deployment Schema Drift Interlocks',
        'Automated Breaking Change Detection in Pipelines',
        'Verifiable Service-Level Objectives on Data Feeds'
      ]
    },
    {
      id: 'sovereign-mesh-enclaves',
      label: 'Sovereign Mesh Enclaves',
      sublabel: 'Multi-Tenant Security',
      desc: 'Cryptographically protected domain boundaries enforcing regional data residency, field-level encryption, and continuous auditing across multi-entity corporate structures.',
      tech: 'Zero-Trust Enterprise Perimeter',
      icon: Lock,
      highlights: [
        'Strict Cross-Border Data Residency Guarantees',
        'Field-Level Tokenization and Attribute-Based Access Control',
        'Deterministic Cryptographic Audit Logging'
      ]
    }
  ];

  // Section 3: Enterprise Data Architecture Bottlenecks
  const dataBottlenecks = [
    {
      icon: Server,
      tag: 'TIGHT COUPLING',
      title: 'Monolithic Compute & Storage Contention',
      desc: 'Traditional data warehouses force simultaneous scaling of compute nodes with physical storage, driving unsustainable cloud billing during routine analytical workload spikes.',
      footer: 'Decoupled Open Lakehouse Architecture'
    },
    {
      icon: AlertTriangle,
      tag: 'PIPELINE FRAGILITY',
      title: 'Brittle Point-to-Point ETL Chains',
      desc: 'Complex multi-hop batch ETL scripts constantly break on minor schema adjustments, requiring manual engineering interventions and delaying executive decision-making.',
      footer: 'Zero-Copy Virtualization & CDC Streams'
    },
    {
      icon: Zap,
      tag: 'INGESTION LATENCY',
      title: 'Overnight Batch Synchronization Lag',
      desc: 'Relying on scheduled nocturnal data copy jobs leaves commercial, supply chain, and financial decision-makers operating on outdated operational data throughout the trading day.',
      footer: 'Sub-Second Event-Driven CDC Fabric'
    },
    {
      icon: Scale,
      tag: 'SCHEMA DRIFT',
      title: 'Unannounced Upstream Schema Mutations',
      desc: 'Application developers frequently modify operational database columns without notifying analytical teams, causing silent downstream report corruption and model failures.',
      footer: 'Automated Data Contract Gateways'
    },
    {
      icon: Lock,
      tag: 'SOVEREIGNTY RISK',
      title: 'Fragmented Multi-Cloud Governance',
      desc: 'Operating distinct data stores across hyperscalers leads to inconsistent access policies, untracked analytical copies, and severe international data residency compliance risks.',
      footer: 'Unified Logical Semantic Fabric'
    },
    {
      icon: RefreshCw,
      tag: 'EGRESS SPRAWL',
      title: 'Proprietary Storage Lock-In & Egress Tolls',
      desc: 'Storing corporate data in closed, proprietary warehouse formats locks enterprises into specific vendor query engines and generates massive inter-cloud data movement fees.',
      footer: 'Standardized Open Table Formats'
    }
  ];

  // Section 5: Side-by-side Architectural Comparison Matrix
  const architecturalComparison = [
    {
      dimension: 'Infrastructure Coupling',
      legacyApproach: 'Compute and storage tightly bound together, requiring expensive node provisioning for simple storage expansion.',
      modernApproach: 'Fully decoupled architecture allowing independent compute scaling over low-cost sovereign object storage.',
      statusBadge: 'DECOUPLED COMPUTE'
    },
    {
      dimension: 'Table Formats & Portability',
      legacyApproach: 'Closed proprietary storage formats restricting query access strictly to the vendor native database engine.',
      modernApproach: 'Standardized open table formats accessible by any query engine with full ACID and time-travel guarantees.',
      statusBadge: 'OPEN FORMATS'
    },
    {
      dimension: 'Ingestion Architecture',
      legacyApproach: 'Monolithic overnight batch extracts that impact production ERP response times and create data staleness.',
      modernApproach: 'Continuous log-based Change Data Capture streaming microsecond deltas with zero production ERP overhead.',
      statusBadge: 'REAL-TIME CDC'
    },
    {
      dimension: 'Query Execution Model',
      legacyApproach: 'Physical duplication of raw tables across multiple staging layers and mart databases before analysis.',
      modernApproach: 'Zero-copy logical virtualization federating direct pushdown queries across source systems in-situ.',
      statusBadge: 'ZERO DUPLICATION'
    },
    {
      dimension: 'Reliability & Contracts',
      legacyApproach: 'Silent downstream pipeline breaks and report failures triggered by unannounced upstream schema updates.',
      modernApproach: 'Programmatic data contracts enforcing schema validation interlocks at the service boundary.',
      statusBadge: 'SCHEMA CONTRACTS'
    }
  ];

  // Section 6: Phased Transformation Stages
  const transformationPhases = [
    {
      phase: 'STAGE ONE',
      title: 'Architecture Audit & Pipeline Discovery',
      focus: 'Comprehensive mapping of all operational transactional databases, batch dependencies, storage footprints, and pipeline friction points.',
      deliverable: 'Target State Reference Architecture & Gap Analysis',
      icon: Search
    },
    {
      phase: 'STAGE TWO',
      title: 'Decoupled Foundation & Open Lakehouse Core',
      focus: 'Deployment of sovereign multi-cloud object storage, open table layers, and foundational network security perimeters.',
      deliverable: 'Production Open Table Lakehouse Environment',
      icon: Layers
    },
    {
      phase: 'STAGE THREE',
      title: 'Streaming CDC & Zero-Copy Virtualization',
      focus: 'Integration of real-time transactional log-based CDC connectors and logical query federation across SAP and cloud estates.',
      deliverable: 'Live Event Streaming & Virtualized Query Mesh',
      icon: Zap
    },
    {
      phase: 'STAGE FOUR',
      title: 'Data Contracts & Autonomous Governance',
      focus: 'Operationalization of automated schema validation firewalls, self-service data product registries, and sovereign clean rooms.',
      deliverable: 'Enterprise-Wide Governed Self-Serve Data Architecture',
      icon: ShieldCheck
    }
  ];

  // Section 7: Executive FAQs
  const dataArchitectureFaqs = [
    {
      question: 'How does modern Data Architecture prevent runaway cloud infrastructure expenditures?',
      answer: 'By completely decoupling compute from storage, modern data architectures allow enterprises to store massive volumes of structured and unstructured data on cost-effective cloud object storage without paying for continuously running compute nodes. Compute clusters are spun up dynamically only when analytical queries execute and scaled back immediately after completion.'
    },
    {
      question: 'What advantages do Open Table Formats provide over proprietary cloud data warehouses?',
      answer: 'Open table formats bring transactional ACID reliability, snapshot isolation, time-travel history, and in-place schema evolution directly to standard cloud storage. Because the files are stored in open standards, organizations can query the exact same data simultaneously using different specialized engines without paying costly egress or conversion fees.'
    },
    {
      question: 'How does Log-Based Change Data Capture (CDC) ensure zero impact on mission-critical ERPs?',
      answer: 'Traditional batch extraction queries the database directly using heavy SQL queries that consume database CPU, lock critical tables, and slow down day-to-day user transactions. Log-based CDC operates entirely outside the query execution path by reading raw database commit logs, capturing every insert, update, and delete in microseconds with zero performance impact on the core ERP.'
    },
    {
      question: 'What role do Data Contracts play in enterprise architecture reliability?',
      answer: 'Data contracts establish formal, programmatic agreements between upstream application engineering teams and downstream data product consumers. They define exact schema definitions, quality constraints, and versioning protocols. When an upstream team updates a database, the automated schema firewall ensures that breaking alterations are flagged and managed before affecting production reporting.'
    },
    {
      question: 'How does KNOOVIQ architect real-time integration between SAP S/4HANA and multi-cloud platforms?',
      answer: 'We deploy an advanced semantic virtualization topology leveraging SAP Datasphere in harmony with modern open lakehouse engines. This architecture preserves all rich SAP transactional semantics, complex master data hierarchies, and currency conversion logic while enabling zero-copy federation with non-SAP cloud data across AWS, Azure, and Google Cloud.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#0070C0] selection:text-white font-sans antialiased overflow-x-hidden">

      {/* =========================================================================
          SECTION 1: HERO SECTION (Generative AI Style with Rich Dynamic Animations)
          ========================================================================= */}
      <section className="relative w-full min-h-[620px] sm:min-h-[680px] lg:min-h-[720px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 overflow-hidden bg-slate-950 text-white">

        {/* Dynamic Background Image with subtle Ken Burns breathing animation (IMAGE 1 OF 3) */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img
            src="/images/data-architecture/enterprise_data_architecture_lakehouse.jpg"
            alt="Enterprise Data Architecture & Modern Lakehouse"
            className="w-full h-full object-cover object-bottom select-none contrast-[1.02]"
            style={{ transformOrigin: 'bottom center', imageRendering: '-webkit-optimize-contrast' }}
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        {/* Lighter Directional Scrim for Maximum Visual Clarity & Text Contrast */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-slate-950/70 via-slate-950/30 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <div className="max-w-3xl space-y-4">

            {/* Animated Category Tag Badge */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-cyan-500/40 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 shadow-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>KNOOVIQ DIGITAL INTELLIGENCE &bull; DATA ARCHITECTURE</span>
            </motion.div>

            {/* Animated Headline with High-Contrast Typography */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.1] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]"
            >
              Enterprise <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-cyan-400">
                Data Architecture &amp; Modern Lakehouse
              </span>
            </motion.h1>

            {/* Subtitle with High Legibility */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-100 leading-relaxed font-normal max-w-2xl pt-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]"
            >
              Engineer resilient, decoupled enterprise data foundations with open table lakehouses, event-driven Change Data Capture, in-situ virtualization, and programmatic data contracts across multi-cloud footprints.
            </motion.p>

            {/* Enterprise Assurance Indicators (With Interactive Hover Motion & No Buttons) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-3 flex flex-wrap items-center gap-2.5 sm:gap-3"
            >
              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-cyan-200 cursor-default shadow-xs"
              >
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Decoupled Storage & Compute</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-emerald-200 cursor-default shadow-xs"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Open Table Lakehouse Formats</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-sky-200 cursor-default shadow-xs"
              >
                <Database className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Sub-Second Streaming CDC</span>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: EXECUTIVE PERSPECTIVE (Clean Light Corporate Theme - Large Legible Text)
          ========================================================================= */}
      <section id="architecture-evolution" className="py-24 bg-gradient-to-b from-white via-[#F8FBFE] to-white border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-300 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#0070C0]">
                <Cpu className="w-4 h-4 text-[#0070C0]" />
                <span>EXECUTIVE ARCHITECTURE PERSPECTIVE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
                Architecting Modern <span className="text-[#0070C0]">Decoupled Enterprise Foundations</span>
              </h2>

              <div className="border-l-4 border-[#0070C0] border-y border-r border-slate-300 pl-5 py-3.5 bg-gradient-to-r from-sky-50/80 via-sky-50/30 to-transparent rounded-r-2xl">
                <p className="text-base sm:text-lg font-semibold text-slate-800 leading-relaxed italic">
                  &ldquo;Enterprise data architecture must be decoupled, elastic, and sovereign—enabling independent compute engines to query open standard tables without vendor captivity or brittle point-to-point ETL pipelines.&rdquo;
                </p>
              </div>

              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
                Knooviq constructs production-grade multi-tier data architectures that liberate data from monolithic databases and proprietary cloud formats. We establish decoupled open lakehouses, event-driven streaming backbones, and zero-copy virtualization fabrics that empower modern business intelligence and autonomous AI.
              </p>

              {/* 3 Executive Pillars (Clear, Large, Highly Legible Text) */}
              <div className="space-y-4 pt-2">
                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <Server className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-950">Decoupled Multi-Engine Compute</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Analytical query clusters scale dynamically per workload, querying uniform storage layers without blocking core enterprise ERP transactions.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-950">Event-Driven Transactional CDC</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Database mutation logs are captured at sub-second intervals and streamed across enterprise layers, replacing delayed overnight batch ingestion scripts.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-950">Programmatic Data Contracts</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Contract-driven schema governance verifies breaking changes before code deployment, protecting downstream reports, dashboards, and AI agents.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Interactive Evolution Visual (IMAGE 2 OF 3) */}
            <div className="lg:col-span-6 space-y-5">

              <div
                className="relative rounded-2xl overflow-hidden border-2 border-slate-300 shadow-xl bg-slate-900 group h-96 sm:h-[440px] lg:h-[490px] w-full cursor-pointer"
                onClick={() => setActiveJourneyStep((activeJourneyStep + 1) % journeySteps.length)}
                title="Click image to advance to next architecture step"
              >
                {/* IMAGE 2 */}
                <img
                  src="/images/data-architecture/pipeline_mesh.jpg"
                  alt="Enterprise Data Architecture Streaming Pipeline and Real-Time Topology Command Center"
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
          SECTION 3: ENTERPRISE DATA CHALLENGES (Clean Slate-50 - Highly Visible Text)
          ========================================================================= */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3.5">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#0070C0] uppercase">
              ARCHITECTURAL FRICTION POINTS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950">
              Critical Bottlenecks Facing Legacy Data Stacks
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Why traditional tightly coupled warehouses and fragile batch ingestion scripts impede operational speed and inflate costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {dataBottlenecks.map((item, idx) => {
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
                    <span className="text-slate-400 font-mono text-xs">ARCHITECTURAL REMEDY:</span>
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
              DECOUPLED ARCHITECTURE FRAMEWORK
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              The KNOOVIQ Data Architecture Ecosystem
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Explore the eight mutually reinforcing layers of our modern enterprise data topology. Hover over any segment to inspect its architectural role.
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
                        LAKEHOUSE MESH
                      </span>
                      <div className="text-sm sm:text-base font-black text-white leading-tight">
                        Data Architecture
                      </div>
                      <div className="text-xs text-slate-300">
                        Topological Mesh
                      </div>
                    </div>
                  )}
                </div>

              </div>

              <div className="mt-5 flex items-center justify-center">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-400/50 text-xs font-mono font-bold text-cyan-300 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                  <span>ACTIVE ARCHITECTURE LAYER: {(hoveredWheelIndex !== null ? wheelSegments[hoveredWheelIndex].title : 'CONTINUOUS ROTATION').toUpperCase()}</span>
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
              Modern Data Architecture vs. Legacy Monoliths
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Examine the concrete architectural distinction between legacy tightly coupled data silos and KNOOVIQ decoupled open lakehouse architectures.
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
              Architectural Comparison Matrix
            </button>
            <button
              onClick={() => setActiveSandboxTab('layers')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all border ${activeSandboxTab === 'layers'
                ? 'bg-[#0070C0] text-white border-[#0070C0] shadow-md'
                : 'bg-slate-100 text-slate-700 border-slate-200 hover:text-slate-950 hover:bg-slate-200'
                }`}
            >
              Full-Stack Blueprint Visual
            </button>
            <button
              onClick={() => setActiveSandboxTab('contracts')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all border ${activeSandboxTab === 'contracts'
                ? 'bg-[#0070C0] text-white border-[#0070C0] shadow-md'
                : 'bg-slate-100 text-slate-700 border-slate-200 hover:text-slate-950 hover:bg-slate-200'
                }`}
            >
              Data Contract & Perimeter Protocol
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
                      <th className="py-4 px-6 font-bold w-1/4">Architectural Dimension</th>
                      <th className="py-4 px-6 font-bold w-1/3 text-rose-800 bg-rose-50/70">Legacy Monolithic Stacks</th>
                      <th className="py-4 px-6 font-bold w-1/3 text-[#0070C0] bg-sky-50/70">KNOOVIQ Modern Data Architecture</th>
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

          {/* TAB 2 & TAB 3: Central Blueprint Display (IMAGE 3 OF 3) */}
          {(activeSandboxTab === 'layers' || activeSandboxTab === 'contracts') && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-10 shadow-sm"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

                {/* Blueprint Image (IMAGE 3) */}
                <div className="lg:col-span-8 overflow-hidden rounded-2xl border-2 border-slate-300 relative group shadow-lg bg-slate-900 h-[380px] sm:h-[460px] lg:h-[500px] w-full">
                  <img
                    src="/images/data-architecture/blueprint_model.jpg"
                    alt="Enterprise Data Architecture Open Table Lakehouse and Streaming Mesh Blueprint"
                    className="w-full h-full object-cover object-center rounded-2xl transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs sm:text-sm p-3.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-white">
                    <div className="flex items-center gap-2.5">
                      <Database className="w-4 h-4 text-cyan-400" />
                      <span className="font-bold">Topological Mesh Reference Stack</span>
                    </div>
                    <span className="font-mono text-xs text-cyan-300 font-bold uppercase">
                      OPEN LAKEHOUSE CORE
                    </span>
                  </div>
                </div>

                {/* Technical Layers Checklist (Clear, Visible Text) */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div className="text-xs font-mono text-[#0070C0] uppercase font-bold mb-1">
                      TIER ONE: DATABASE CONNECTORS
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">Decoupled Operational Backbones</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      SAP S/4HANA ERP instances, cloud databases, and event topics connected via zero-impact commit log listeners.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div className="text-xs font-mono text-[#0070C0] uppercase font-bold mb-1">
                      TIER TWO: STREAMING DATA BUS
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">Event-Driven Distribution Fabric</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Sub-second delta streaming routing transactional mutations to analytical caches without batch latency.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div className="text-xs font-mono text-[#0070C0] uppercase font-bold mb-1">
                      TIER THREE: OPEN LAKEHOUSE TABLES
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">ACID Transactional Storage</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Standardized open table formats on sovereign object storage enabling concurrent read-write access.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div className="text-xs font-mono text-[#0070C0] uppercase font-bold mb-1">
                      TIER FOUR: SEMANTIC MODELING & SECURITY
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">Unified Business Entities & Policies</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Air-gapped data contracts and continuous attribute-based security governing self-service analytics and AI.
                    </p>
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
              ARCHITECTURAL METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950">
              Phased Enterprise Implementation Roadmap
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              A structured, risk-mitigated journey from monolithic data silos to an enterprise-wide, decoupled lakehouse mesh.
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
              <span>EXECUTIVE CLARIFICATIONS &bull; DATA ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#005A9C] via-[#0070C0] to-sky-500">Architecture Questions</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
              Addressing key structural, scalability, and governance considerations for enterprise chief architects and technology leaders.
            </p>
          </div>

          <div className="space-y-4">
            {dataArchitectureFaqs.map((faq, index) => {
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
              ARCHITECTURE ENGAGEMENT ADVISORY
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Ready to Modernize Your Enterprise Data Architecture?
          </h2>

          <p className="text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed font-normal">
            Collaborate with senior data architects to design your decoupled lakehouse blueprint, establish real-time CDC pipelines, and enforce automated data contracts.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
            <button
              onClick={() => onOpenContact ? onOpenContact('Enterprise Data Architecture Workshop') : undefined}
              className="px-9 py-4 rounded-xl font-bold text-sm sm:text-base text-slate-900 bg-white hover:bg-sky-50 shadow-xl transition-all flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              <span>Schedule Architecture Review</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#0070C0]" />
            </button>
            <Link
              to="/digital-intelligence/data-engineering"
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold uppercase tracking-wider backdrop-blur-md flex items-center gap-2 group transition-all w-full sm:w-auto justify-center"
            >
              <span>Explore Data Engineering</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-7 text-xs sm:text-sm text-sky-100 font-mono">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              <span>Decoupled Storage & Compute</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-cyan-200" />
              <span>Air-Gapped Sovereign Perimeter</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-300" />
              <span>Microsecond Ingestion Streaming</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default DataArchitecturePage;
