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
  Cpu,
  GitBranch,
  Terminal,
  Code2,
  Sliders,
  FileSpreadsheet,
  Eye,
  Key,
  Fingerprint,
  FileSearch,
  Check,
  Cloud,
  Maximize2,
  X
} from 'lucide-react';

interface DataPlatformsPageProps {
  onOpenContact?: (defaultTopic?: string) => void;
}

export const DataPlatformsPage: React.FC<DataPlatformsPageProps> = ({
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
  const [activeSandboxTab, setActiveSandboxTab] = useState<'comparison' | 'layers' | 'protocols'>('comparison');

  // State for Section 5 Tab 3: Specific Protocol Sandbox Sub-Tab
  const [activeProtocolTab, setActiveProtocolTab] = useState<'open-lakehouse' | 'elastic-compute' | 'finops-governance'>('open-lakehouse');

  // State for Section 7: FAQ Accordion
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // =========================================================================
  // DATA STRUCTURES
  // =========================================================================

  // Section 4: Circular Chevron Segments (8 Interlocking Platform Layers)
  const wheelSegments = [
    {
      id: 'open-lakehouse',
      shortTag: 'LAKEHOUSE',
      title: 'Open Table Lakehouse Storage',
      desc: 'Standardized open table storage formats guaranteeing transactional ACID consistency and zero proprietary cloud warehouse lock-in.',
      badge: 'STORAGE INDEPENDENCE',
      metric: 'Zero Proprietary Lock-In',
      side: 'right',
      color: '#0070C0',
      textColor: 'text-sky-400',
      bgGlow: 'rgba(0, 112, 192, 0.35)',
      icon: Database
    },
    {
      id: 'serverless-compute',
      shortTag: 'COMPUTE',
      title: 'Elastic Serverless Compute',
      desc: 'Decoupled query processing clusters auto-scaling dynamically to workload demands and spinning down to zero during idle periods.',
      badge: 'DYNAMIC AUTO-SCALING',
      metric: 'Sub-Second Cluster Scaling',
      side: 'right',
      color: '#0284C7',
      textColor: 'text-cyan-400',
      bgGlow: 'rgba(2, 132, 199, 0.35)',
      icon: Cpu
    },
    {
      id: 'zero-copy-federation',
      shortTag: 'FEDERATION',
      title: 'Zero-Copy Query Virtualization',
      desc: 'Pushdown execution engines federating live operational queries directly into underlying transactional stores without data copying.',
      badge: 'IN-SITU FEDERATION',
      metric: 'Zero Physical Duplication',
      side: 'right',
      color: '#06B6D4',
      textColor: 'text-cyan-300',
      bgGlow: 'rgba(6, 182, 212, 0.35)',
      icon: Zap
    },
    {
      id: 'finops-governance',
      shortTag: 'FINOPS',
      title: 'Autonomous FinOps Cost Governance',
      desc: 'Real-time telemetry, automated partition pruning, and cluster throttling that slash runaway cloud warehouse costs by up to 55%.',
      badge: 'CLOUD COST DEFENSE',
      metric: 'Automated Cost Throttling',
      side: 'right',
      color: '#10B981',
      textColor: 'text-emerald-400',
      bgGlow: 'rgba(16, 185, 129, 0.35)',
      icon: BarChart3
    },
    {
      id: 'event-streaming',
      shortTag: 'STREAMING',
      title: 'High-Throughput Event Streaming',
      desc: 'Sub-second event streaming hubs and log-based CDC connectors capturing operational changes with microsecond delivery latency.',
      badge: 'EVENT-DRIVEN FABRIC',
      metric: 'Sub-Second Log Capture',
      side: 'left',
      color: '#F59E0B',
      textColor: 'text-amber-400',
      bgGlow: 'rgba(245, 158, 11, 0.35)',
      icon: Activity
    },
    {
      id: 'sovereign-enclaves',
      shortTag: 'SECURITY',
      title: 'Sovereign Multi-Cloud Security',
      desc: 'Zero-trust cryptographic boundaries, geo-fenced data residency controls, and sovereign clean rooms protecting cross-border estates.',
      badge: 'SOVEREIGN ISOLATION',
      metric: 'Air-Gapped Cloud Enclaves',
      side: 'left',
      color: '#EC4899',
      textColor: 'text-pink-400',
      bgGlow: 'rgba(236, 72, 153, 0.35)',
      icon: Lock
    },
    {
      id: 'dag-orchestration',
      shortTag: 'ORCHESTRATION',
      title: 'Declarative Pipeline Orchestration',
      desc: 'Modular, version-controlled DAG execution fabrics with automated dependency checking, self-healing retries, and SLA tracking.',
      badge: 'DECLARATIVE DAGS',
      metric: 'Idempotent Pipeline Flow',
      side: 'left',
      color: '#8B5CF6',
      textColor: 'text-purple-400',
      bgGlow: 'rgba(139, 92, 246, 0.35)',
      icon: Workflow
    },
    {
      id: 'semantic-mesh',
      shortTag: 'SEMANTICS',
      title: 'Universal Semantic Business Layer',
      desc: 'Canonical metrics layer abstracting technical storage layouts into standardized business KPIs consumed across BI and AI agents.',
      badge: 'CANONICAL TAXONOMY',
      metric: 'Harmonized Metric Model',
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

  // Section 2: Journey Steps (6 Progressive Evolution Phases)
  const journeySteps = [
    {
      id: 'decoupled-storage',
      label: 'Decoupled Storage',
      sublabel: 'Open Table Formats',
      desc: 'Separating persistent object storage from ephemeral compute engines using open table standards (Apache Iceberg & Delta Lake) to eliminate cloud vendor lock-in.',
      tech: 'Open Table Standards',
      icon: Database,
      highlights: [
        'Multi-Engine Query Interoperability',
        'ACID Transactional Consistency on Object Storage',
        'Zero Data Duplication Across Hyperscalers'
      ]
    },
    {
      id: 'elastic-compute',
      label: 'Elastic Compute',
      sublabel: 'Dynamic Auto-Scaling',
      desc: 'Deploying serverless, containerized query engines that scale compute nodes up in seconds during peak decision periods and scale down to zero when idle.',
      tech: 'Serverless Kubernetes Clusters',
      icon: Cpu,
      highlights: [
        'Instant Auto-Scaling Under Workload Spikes',
        'Scale-to-Zero Idle Resource Reclamation',
        'Isolated Workload Clusters (Zero Contention)'
      ]
    },
    {
      id: 'zero-copy-federation',
      label: 'Zero-Copy Federation',
      sublabel: 'In-Situ Pushdown',
      desc: 'Executing distributed queries in-situ directly where operational records live, bypassing multi-terabyte staging extracts and multi-hour ETL lag.',
      tech: 'SAP Datasphere & Distributed Query',
      icon: Zap,
      highlights: [
        'Direct Transactional Pushdown Execution',
        'Cross-Cloud Federation (AWS, Azure, GCP, SAP)',
        'Zero Data Transfer Egress Penalties'
      ]
    },
    {
      id: 'finops-cost-governance',
      label: 'FinOps Governance',
      sublabel: 'Automated Cost Controls',
      desc: 'Implementing algorithmic cost guards that monitor query execution complexity, auto-kill runaway unpartitioned scans, and allocate costs per department.',
      tech: 'Autonomous Cost Optimization',
      icon: BarChart3,
      highlights: [
        'Runaway Query Interception & Throttling',
        'Granular Business Domain Cost Attribution',
        'Intelligent Hot/Warm/Cold Storage Tiering'
      ]
    },
    {
      id: 'sovereign-security',
      label: 'Sovereign Security',
      sublabel: 'Air-Gapped Boundaries',
      desc: 'Enforcing localized data sovereignty, air-gapped cryptographic enclaves, and uniform role-based access control across all physical and virtual platforms.',
      tech: 'Zero-Trust Multi-Cloud Security',
      icon: Lock,
      highlights: [
        'Geographic Cloud Residency Enclaves',
        'End-to-End Bring-Your-Own-Key (BYOK) Encryption',
        'Continuous Multi-Cloud Audit Telemetry'
      ]
    },
    {
      id: 'self-serve-products',
      label: 'Data Product Registry',
      sublabel: 'Governed Self-Service',
      desc: 'Empowering cross-functional squads to publish, discover, and consume certified, SLA-backed data products through a unified platform catalog.',
      tech: 'Enterprise Product Registry',
      icon: Network,
      highlights: [
        'Self-Service Data Product Subscriptions',
        'Standardized Data Contract Guarantees',
        'Automated API & SQL Access Provisioning'
      ]
    }
  ];

  // Section 3: Enterprise Data Platform Challenges (6 Comprehensive Cards)
  const dataPlatformChallenges = [
    {
      icon: AlertTriangle,
      tag: 'HYPERSCALER LOCK-IN',
      title: 'Proprietary Storage & Vendor Lock-In',
      desc: 'Proprietary cloud data warehouse file formats trap enterprise records in vendor silos, triggering immense egress penalties and painful migrations when strategy shifts.',
      footer: 'Open Table Lakehouse Standards (Iceberg / Delta)'
    },
    {
      icon: Zap,
      tag: 'RUNAWAY COMPUTE',
      title: 'Runaway Cloud Compute & Idle Sprawl',
      desc: 'Uncontrolled cluster auto-scaling, unindexed full-table scans, and 24/7 idle warehouse compute spin up hundreds of thousands of dollars in unexpected monthly cloud invoices.',
      footer: 'Autonomous FinOps Cost Governance & Auto-Scaling'
    },
    {
      icon: RefreshCw,
      tag: 'ETL DUPLICATION DEBT',
      title: 'Endless Physical Data Replication',
      desc: 'Legacy multi-hop batch pipelines create dozens of stale physical copies of transactional ERP tables across staging buckets, lakehouses, and datamarts.',
      footer: 'Zero-Copy Logical Virtualization & In-Situ Pushdown'
    },
    {
      icon: Server,
      tag: 'CONCURRENCY BOTTLENECKS',
      title: 'Cluster Contention & Query Throttling',
      desc: 'Mixed analytical workloads cause executive dashboard queries to queue behind massive multi-hour batch transformations, freezing critical decision-making.',
      footer: 'Decoupled Ephemeral Compute Clusters'
    },
    {
      icon: Scale,
      tag: 'SOVEREIGNTY BARRIERS',
      title: 'Cross-Border Sovereignty & Compliance Fines',
      desc: 'Global data privacy mandates demand sovereign regional residency and air-gapped isolation that monolithic cloud data warehouses cannot systematically enforce.',
      footer: 'Sovereign Multi-Cloud Clean Rooms & Regional Enclaves'
    },
    {
      icon: Network,
      tag: 'DISCONNECTED SILOS',
      title: 'SAP & Hyperscaler Disconnect',
      desc: 'Transactional SAP S/4HANA systems remain isolated from non-SAP cloud data lakes, requiring brittle bespoke extraction code that breaks upon every ERP update.',
      footer: 'SAP Datasphere & Modern Data Fabric Integration'
    }
  ];

  // Section 5: Side-by-side Architectural Comparison Matrix
  const architecturalComparison = [
    {
      dimension: 'Storage Architecture',
      legacyApproach: 'Tightly coupled proprietary cloud data warehouse storage with vendor lock-in and high multi-cloud egress penalties.',
      modernApproach: 'Decoupled sovereign object storage formatted with open table standards (Apache Iceberg, Delta Lake) accessible by any engine.',
      statusBadge: 'OPEN STANDARDS'
    },
    {
      dimension: 'Compute Provisioning',
      legacyApproach: 'Statically sized warehouse clusters running 24/7 with severe resource contention during month-end closes.',
      modernApproach: 'Ephemeral, serverless compute clusters spinning up on-demand in seconds, isolated by workload, and scaling to zero.',
      statusBadge: 'SCALE-TO-ZERO'
    },
    {
      dimension: 'Query Execution',
      legacyApproach: 'Multi-terabyte ETL extraction duplicating records into intermediate cloud staging tiers before querying.',
      modernApproach: 'Zero-copy query federation pushing distributed execution down directly to operational systems in-situ.',
      statusBadge: 'ZERO DUPLICATION'
    },
    {
      dimension: 'Cost Governance (FinOps)',
      legacyApproach: 'End-of-month invoice shock with no automated visibility into which queries or users consumed budget.',
      modernApproach: 'Real-time FinOps telemetry with algorithmic query throttling, cold storage tiering, and departmental chargeback.',
      statusBadge: 'ACTIVE FINOPS'
    },
    {
      dimension: 'Cloud Sovereignty',
      legacyApproach: 'Single-region lock-in making multi-national sovereign data compliance nearly impossible to enforce.',
      modernApproach: 'Multi-cloud sovereign fabrics spanning AWS, Azure, GCP, and on-premises with uniform air-gapped security.',
      statusBadge: 'SOVEREIGN FABRIC'
    }
  ];

  // Section 5: Protocol Sandbox Tab Specifications
  const protocolDetails = {
    'open-lakehouse': {
      badge: 'OPEN TABLE LAKEHOUSE ENGINE',
      title: 'Decoupled Open Lakehouse Storage Architecture',
      desc: 'Prevent vendor lock-in and excessive cloud egress fees by maintaining a single source of truth in open table formats queried simultaneously by multiple analytical engines.',
      specs: [
        { label: 'Storage Standard', val: 'Apache Iceberg & Delta' },
        { label: 'Consistency Model', val: 'ACID Transactional' },
        { label: 'Multi-Engine Support', val: 'Spark, Trino, Snowflake, SAP' },
        { label: 'Egress Elimination', val: 'In-Situ Multi-Cloud Reads' }
      ],
      steps: [
        { name: 'Schema Registration', detail: 'Registers partitioned object storage metadata into unified enterprise metastores.' },
        { name: 'ACID Enforcement', detail: 'Applies snapshot isolation and optimistic concurrency control across writes.' },
        { name: 'Multi-Engine Execution', detail: 'Allows distributed query engines to scan shared data files without duplication.' }
      ]
    },
    'elastic-compute': {
      badge: 'DYNAMIC SERVERLESS COMPUTE',
      title: 'Ephemeral Workload-Isolated Compute Clusters',
      desc: 'Eliminate concurrency bottlenecks and idle cloud spend with ephemeral compute clusters tailored to specific business workloads that scale to zero when inactive.',
      specs: [
        { label: 'Spin-Up Latency', val: '< 3.5 Seconds' },
        { label: 'Isolation Mode', val: 'Dedicated Per-Workload Cluster' },
        { label: 'Idle Policy', val: 'Automated Scale-to-Zero' },
        { label: 'Scaling Dynamic', val: 'Sub-Second Resource Elasticity' }
      ],
      steps: [
        { name: 'Workload Classification', detail: 'Categorizes incoming query streams by urgency, SLA, and computational complexity.' },
        { name: 'Dynamic Spawning', detail: 'Allocates containerized compute workers matched precisely to query requirements.' },
        { name: 'Zero-Waste Teardown', detail: 'Immediately reclaims compute nodes upon query completion to halt billing.' }
      ]
    },
    'finops-governance': {
      badge: 'AUTONOMOUS FINOPS CONTROL',
      title: 'Algorithmic Cloud Cost Governance & Throttling',
      desc: 'Maintain predictable cloud analytics budgets with proactive query complexity scoring, automated unpartitioned scan kills, and automated storage tiering.',
      specs: [
        { label: 'Cost Reduction', val: '35% to 55% Cloud Savings' },
        { label: 'Protection Mode', val: 'Pre-Execution Query Cost Scoring' },
        { label: 'Storage Optimization', val: 'Automated Hot/Cold Tiering' },
        { label: 'Attribution', val: '100% Departmental Chargeback' }
      ],
      steps: [
        { name: 'Cost Prediction', detail: 'Evaluates query execution plans before launch to estimate scan byte costs.' },
        { name: 'Threshold Interception', detail: 'Flags or throttles queries that exceed predefined organizational expense gates.' },
        { name: 'Automated Compaction', detail: 'Continuously rewrites and compacts small files to optimize object storage costs.' }
      ]
    }
  };

  // Section 6: Phased Transformation Stages
  const transformationPhases = [
    {
      phase: 'STAGE ONE',
      title: 'Cloud Data Maturity & FinOps Spend Audit',
      focus: 'Assessment of existing cloud warehouse sprawl, compute utilization patterns, runaway query bottlenecks, and hyperscaler egress fees.',
      deliverable: 'Platform Modernization Blueprint & FinOps Optimization Roadmap',
      icon: Search
    },
    {
      phase: 'STAGE TWO',
      title: 'Open Table Lakehouse & Storage Decoupling',
      focus: 'Migration from proprietary warehouse tables to standardized open table formats (Apache Iceberg / Delta Lake) with transactional ACID guarantees.',
      deliverable: 'Unified Sovereign Storage Fabric & Multi-Engine Access Layer',
      icon: Database
    },
    {
      phase: 'STAGE THREE',
      title: 'Zero-Copy Query Virtualization & SAP Federation',
      focus: 'Deployment of distributed virtualization nodes, in-situ pushdown execution across SAP S/4HANA, and sub-second CDC streaming pipelines.',
      deliverable: 'Live Production Data Platform & Zero-Copy Federation Mesh',
      icon: Zap
    },
    {
      phase: 'STAGE FOUR',
      title: 'Autonomous FinOps & Governed Self-Service',
      focus: 'Operationalization of automated cost guards, self-service data product catalogs, multi-cloud air-gapped security, and continuous SLA scorecards.',
      deliverable: 'Enterprise-Wide Governed Self-Service Data Platform',
      icon: ShieldCheck
    }
  ];

  // Section 7: Executive FAQs
  const dataPlatformsFaqs = [
    {
      question: 'How do modern Data Platforms differ from legacy Cloud Data Warehouses?',
      answer: 'Legacy cloud data warehouses tightly couple compute and storage in proprietary file formats, forcing enterprises into expensive vendor lock-in and high cross-cloud egress fees. Modern Data Platforms decouple storage using open table formats (such as Apache Iceberg and Delta Lake) while deploying serverless, ephemeral compute clusters that spin up on demand, scale to zero when idle, and federate queries across multi-cloud footprints without data duplication.'
    },
    {
      question: 'What is Zero-Copy Query Federation, and how does it reduce platform costs?',
      answer: 'Zero-copy federation translates high-level analytical queries into native source database dialects and pushes execution down directly to operational systems (like SAP HANA, transactional databases, and object stores) in-situ. This eliminates the need to build and maintain multi-terabyte staging pipelines and redundant copies, significantly slashing cloud storage fees and egress charges.'
    },
    {
      question: 'How does KNOOVIQ bridge SAP S/4HANA with non-SAP hyperscaler data platforms?',
      answer: 'KNOOVIQ integrates SAP Datasphere and SAP BTP with open multi-cloud lakehouse architectures. We preserve core transactional semantics, currency conversions, and authorization hierarchies from SAP while federating seamlessly with hyperscaler stores (AWS S3, Azure ADLS, Snowflake, Databricks) without custom extraction scripts that break on upgrades.'
    },
    {
      question: 'How do autonomous FinOps controls prevent runaway cloud data bills?',
      answer: 'Our platforms integrate algorithmic query cost estimators that evaluate execution plans prior to launch. Unpartitioned queries or runaway scans that exceed cost thresholds are intercepted or queued for review. In addition, automated background compaction and intelligent storage tiering continually optimize storage costs without manual engineering intervention.'
    },
    {
      question: 'How does a modern data platform guarantee regional data sovereignty and regulatory compliance?',
      answer: 'By decoupling the compute execution plane from sovereign storage enclaves, the platform ensures that data never leaves its designated regulatory jurisdiction. Queries are pushed to localized compute nodes within regional boundaries, applying attribute-based encryption and zero-trust access controls to ensure strict compliance with GDPR, DPDP, and financial sovereignty laws.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#0070C0] selection:text-white">

      {/* =========================================================================
          SECTION 1: HERO SECTION (AI Agents Style Full Bleed Panoramic Background)
          IMAGE: /images/data-platforms/enterprise_data_platforms_multicloud_lakehouse.jpg
          ========================================================================= */}
      <section className="relative w-full min-h-[560px] sm:min-h-[620px] lg:min-h-[660px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 overflow-hidden bg-slate-950 text-white">
        {/* Full-Bleed 16:9 Panoramic Image - AI Agents Style */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/data-platforms/enterprise_data_platforms_multicloud_lakehouse.jpg"
            alt="Enterprise Data Platforms & Multi-Cloud Lakehouse Architecture"
            className="w-full h-full object-cover object-right sm:object-[78%_center] lg:object-center select-none contrast-[1.02]"
            style={{ imageRendering: '-webkit-optimize-contrast' }}
          />
        </div>

        {/* Lighter Directional Scrim for Maximum Visual Clarity & Text Contrast */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-slate-950/70 via-slate-950/30 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-2xl lg:max-w-xl space-y-6">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.55 }}
              className="space-y-4"
            >
              {/* Practice Pill Badge */}
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/70 backdrop-blur-md border border-cyan-500/30 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Data Platforms &amp; Lakehouse</span>
                </div>
              </div>

              {/* Animated Headline with High-Contrast Typography */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                Enterprise <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-cyan-400">
                  Data Platforms &amp; Multi-Cloud Lakehouse
                </span>
              </h1>

              {/* Subtitle with High Legibility */}
              <p className="text-base sm:text-lg text-slate-100 leading-relaxed font-normal pt-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                High-throughput cloud data platforms, open table format lakehouses, serverless elastic compute clusters, and sovereign multi-cloud data fabric infrastructures.
              </p>
            </motion.div>

            {/* Enterprise Assurance Indicators */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.2 }} 
              className="pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3"
            >
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-cyan-200 shadow-sm">
                <Database className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Open Table Lakehouse Fabric</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-emerald-200 shadow-sm">
                <Cpu className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Decoupled Elastic Compute</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-sky-200 shadow-sm">
                <Cloud className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Clean Core Interoperability</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: EXECUTIVE PERSPECTIVE (Clean Light Corporate Theme - Large Legible Text)
          IMAGE 2 OF 3: /images/data-platforms/platform_infrastructure.jpg
          ========================================================================= */}
      <section id="platform-evolution" className="py-24 bg-gradient-to-b from-white via-[#F8FBFE] to-white border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-300 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#0070C0]">
                <Cpu className="w-4 h-4 text-[#0070C0]" />
                <span>EXECUTIVE PLATFORM PERSPECTIVE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
                Architecting Sovereign, Elastic <span className="text-[#0070C0]">Enterprise Data Platforms</span>
              </h2>

              <div className="border-l-4 border-[#0070C0] border-y border-r border-slate-300 pl-5 py-3.5 bg-gradient-to-r from-sky-50/80 via-sky-50/30 to-transparent rounded-r-2xl">
                <p className="text-base sm:text-lg font-semibold text-slate-800 leading-relaxed italic">
                  &ldquo;Enterprise data platforms must transcend proprietary hyperscaler lock-in and runaway cloud compute costs. Modern data architectures demand open table formats, zero-copy query federation, and decoupled elastic compute clusters that scale dynamically without duplicating multi-petabyte datasets.&rdquo;
                </p>
              </div>

              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
                Knooviq engineers high-performance, cost-governed enterprise data platforms that seamlessly bridge operational SAP cores with multi-cloud analytics ecosystems. We unify Apache Iceberg, Delta Lake, SAP Datasphere, and hyperscaler lakehouses into an interoperable, sovereign data foundation with automated FinOps cost controls.
              </p>

              {/* 3 Executive Pillars (Clear, Large, Highly Legible Text) */}
              <div className="space-y-4 pt-2">
                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-950">Decoupled Multi-Cloud Storage</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Separation of persistent open table storage from ephemeral query clusters, eliminating proprietary cloud lock-in and vendor egress penalties.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-950">Multi-Engine Query Federation</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Sub-second in-situ analytical processing pushing distributed queries across SAP HANA, Snowflake, and Databricks without data movement.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-950">Autonomous FinOps Governance</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Dynamic workload auto-scaling, intelligent cache tiering, and proactive cluster throttling preventing runaway cloud infrastructure bills.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Interactive Evolution Visual (IMAGE 2: Architecting Sovereign Elastic Platforms) */}
            <div className="lg:col-span-6 space-y-4">
              
              <div 
                onClick={() => setActiveJourneyStep((activeJourneyStep + 1) % journeySteps.length)}
                title="Click image to advance to next architecture step"
                className="relative rounded-2xl overflow-hidden border-2 border-slate-300 shadow-xl bg-slate-900 group h-96 sm:h-[440px] lg:h-[490px] w-full cursor-pointer"
              >
                {/* IMAGE 2: Full box fit, no frame */}
                <img
                  src="/images/data-platforms/architecting_sovereign_elastic_platforms.png"
                  alt="Architecting Sovereign, Elastic Enterprise Data Platforms"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-lg bg-slate-900/90 backdrop-blur-md border border-cyan-400/50 text-xs sm:text-sm font-mono font-bold text-cyan-300 flex items-center gap-2 shadow-lg z-10">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>PLATFORM FOCUS: {journeySteps[activeJourneyStep].label.toUpperCase()}</span>
                </div>
              </div>

              {/* Step info pill */}
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-mono font-bold text-[#0070C0] uppercase tracking-wider">{journeySteps[activeJourneyStep].tech}</div>
                  <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">{journeySteps[activeJourneyStep].desc}</p>
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
                      className={`p-3.5 rounded-2xl border text-left transition-all flex items-center gap-3 ${
                        isSelected
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
              ENTERPRISE FRICTION POINTS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950">
              Critical Impediments in Legacy Cloud Platforms
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Why proprietary cloud data warehouses and tightly coupled architectures create unmanageable financial and operational burdens.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {dataPlatformChallenges.map((item, idx) => {
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
              INTERCONNECTED PLATFORM ECOSYSTEM
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              The KNOOVIQ Multi-Cloud Platform Fabric
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Explore the eight mutually reinforcing layers of our sovereign, decoupled data platform foundation. Hover over any segment to inspect its architectural role.
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
                    className={`p-4 rounded-xl border transition-all cursor-pointer ${
                      isHovered
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
                        PLATFORM CORE
                      </span>
                      <div className="text-sm sm:text-base font-black text-white leading-tight">
                        Multi-Cloud Lakehouse
                      </div>
                      <div className="text-xs text-slate-300">
                        Interactive Topology
                      </div>
                    </div>
                  )}
                </div>

              </div>

              <div className="mt-5 flex items-center justify-center">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-400/50 text-xs font-mono font-bold text-cyan-300 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                  <span>ACTIVE FABRIC: {wheelSegments[hoveredWheelIndex ?? 0]?.title.toUpperCase()}</span>
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
                    className={`p-4 rounded-xl border transition-all cursor-pointer ${
                      isHovered
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
          SECTION 5: TOPOLOGICAL ARCHITECTURE BLUEPRINT & COMPARATIVE MATRIX (Clean White Theme)
          IMAGE 3 OF 3: /images/data-platforms/multi_cloud_mesh.jpg
          ========================================================================= */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3.5">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#0070C0] uppercase">
              TOPOLOGICAL ARCHITECTURE BLUEPRINT
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950">
              Modern Data Platforms &amp; Multi-Cloud Fabric Matrix
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Examine the concrete architectural difference between legacy proprietary cloud warehouses and KNOOVIQ decoupled open lakehouse platforms.
            </p>
          </div>

          {/* Interactive Mode Toggle */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setActiveSandboxTab('comparison')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all border ${
                activeSandboxTab === 'comparison'
                  ? 'bg-[#0070C0] text-white border-[#0070C0] shadow-md'
                  : 'bg-slate-100 text-slate-700 border-slate-200 hover:text-slate-950 hover:bg-slate-200'
              }`}
            >
              Transformation Matrix (Legacy vs. KNOOVIQ)
            </button>
            <button
              onClick={() => setActiveSandboxTab('layers')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all border ${
                activeSandboxTab === 'layers'
                  ? 'bg-[#0070C0] text-white border-[#0070C0] shadow-md'
                  : 'bg-slate-100 text-slate-700 border-slate-200 hover:text-slate-950 hover:bg-slate-200'
              }`}
            >
              Full-Stack Blueprint Visual
            </button>
            <button
              onClick={() => setActiveSandboxTab('protocols')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all border ${
                activeSandboxTab === 'protocols'
                  ? 'bg-[#0070C0] text-white border-[#0070C0] shadow-md'
                  : 'bg-slate-100 text-slate-700 border-slate-200 hover:text-slate-950 hover:bg-slate-200'
              }`}
            >
              Interactive Platform Protocols
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
                      <th className="py-4 px-6 font-bold w-1/4">Platform Dimension</th>
                      <th className="py-4 px-6 font-bold w-1/3 text-rose-800 bg-rose-50/70">Legacy Cloud Warehouses</th>
                      <th className="py-4 px-6 font-bold w-1/3 text-[#0070C0] bg-sky-50/70">KNOOVIQ Multi-Cloud Lakehouse</th>
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

          {/* TAB 2: Central Blueprint Display (IMAGE 3 OF 3) */}
          {activeSandboxTab === 'layers' && (
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
                    src="/images/data-platforms/multi_cloud_mesh.jpg"
                    alt="Enterprise Multi-Cloud Data Platform Mesh Blueprint"
                    className="w-full h-full object-cover object-center rounded-2xl transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs sm:text-sm p-3.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-white">
                    <div className="flex items-center gap-2.5">
                      <Cloud className="w-4 h-4 text-cyan-400" />
                      <span className="font-bold">Multi-Cloud Platform Fabric</span>
                    </div>
                    <span className="font-mono text-xs text-cyan-300 font-bold uppercase">
                      OPEN LAKEHOUSE TOPOLOGY
                    </span>
                  </div>
                </div>

                {/* Technical Layers Checklist (Clear, Visible Text) */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div className="text-xs font-mono text-[#0070C0] uppercase font-bold mb-1">
                      LAYER ONE: STORAGE
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">Decoupled Open Table Storage</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Immutable object stores formatted with Apache Iceberg and Delta Lake accessible by multiple query engines.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div className="text-xs font-mono text-[#0070C0] uppercase font-bold mb-1">
                      LAYER TWO: COMPUTE
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">Ephemeral Elastic Compute</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Serverless query worker clusters auto-scaling to workload intensity and scaling to zero during idle periods.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div className="text-xs font-mono text-[#0070C0] uppercase font-bold mb-1">
                      LAYER THREE: VIRTUALIZATION
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">Zero-Copy In-Situ Pushdown</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Direct transactional database query federation eliminating multi-hop ETL replication across cloud regions.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div className="text-xs font-mono text-[#0070C0] uppercase font-bold mb-1">
                      LAYER FOUR: GOVERNANCE
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">Autonomous FinOps &amp; Security</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Algorithmic cloud spend controls, automated query throttling, and sovereign air-gapped security enclaves.
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* TAB 3: Interactive Platform Protocols Sandbox */}
          {activeSandboxTab === 'protocols' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-10 shadow-sm space-y-6"
            >
              {/* Protocol Switcher Sub-Tabs */}
              <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-white border border-slate-200 max-w-xl mx-auto">
                <button
                  onClick={() => setActiveProtocolTab('open-lakehouse')}
                  className={`flex-1 py-2 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    activeProtocolTab === 'open-lakehouse'
                      ? 'bg-[#0070C0] text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  Open Lakehouse
                </button>
                <button
                  onClick={() => setActiveProtocolTab('elastic-compute')}
                  className={`flex-1 py-2 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    activeProtocolTab === 'elastic-compute'
                      ? 'bg-[#0070C0] text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  Elastic Compute
                </button>
                <button
                  onClick={() => setActiveProtocolTab('finops-governance')}
                  className={`flex-1 py-2 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    activeProtocolTab === 'finops-governance'
                      ? 'bg-[#0070C0] text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  FinOps Governance
                </button>
              </div>

              {/* Protocol Detail Content */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold uppercase px-3 py-1 rounded-md bg-sky-100 text-[#0070C0]">
                    {protocolDetails[activeProtocolTab].badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-950 mt-2">
                    {protocolDetails[activeProtocolTab].title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mt-1">
                    {protocolDetails[activeProtocolTab].desc}
                  </p>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-slate-100">
                  {protocolDetails[activeProtocolTab].specs.map((item, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-xs font-mono text-slate-400">{item.label}</div>
                      <div className="text-sm font-bold text-slate-900 truncate mt-1">{item.val}</div>
                    </div>
                  ))}
                </div>

                {/* Workflow Step Flow */}
                <div className="space-y-3 pt-3 border-t border-slate-100">
                  <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                    Platform Operational Workflow
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {protocolDetails[activeProtocolTab].steps.map((st, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-sky-100 text-[#0070C0] text-xs font-bold flex items-center justify-center shrink-0">
                            <Check className="w-3.5 h-3.5" />
                          </span>
                          <h4 className="text-sm font-bold text-slate-900 truncate">{st.name}</h4>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed font-normal">{st.detail}</p>
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
              Phased Enterprise Data Platform Roadmap
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              A structured, risk-mitigated journey from fragmented cloud warehouses to an open, sovereign lakehouse platform.
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
              <span>EXECUTIVE CLARIFICATIONS &bull; DATA PLATFORMS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#005A9C] via-[#0070C0] to-sky-500">Platform Questions</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
              Addressing key strategic, operational, and architectural considerations for enterprise technology leaders.
            </p>
          </div>

          <div className="space-y-4">
            {dataPlatformsFaqs.map((faq, index) => {
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
              STRATEGIC ENGAGEMENT ADVISORY
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Ready to Unify Your Multi-Cloud Enterprise Data Platform?
          </h2>

          <p className="text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed font-normal">
            Collaborate with senior cloud architects to decouple storage with open table formats, deploy zero-copy query federation, and enforce autonomous FinOps cost controls.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
            <button
              onClick={() => onOpenContact ? onOpenContact('Enterprise Data Platforms Workshop') : undefined}
              className="px-9 py-4 rounded-xl font-bold text-sm sm:text-base text-slate-900 bg-white hover:bg-sky-50 shadow-xl transition-all flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              <span>Schedule Architecture Workshop</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#0070C0]" />
            </button>
            <Link
              to="/digital-intelligence/business-intelligence"
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold uppercase tracking-wider backdrop-blur-md flex items-center gap-2 group transition-all w-full sm:w-auto justify-center text-sm"
            >
              <span>Explore Business Intelligence</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-7 text-xs sm:text-sm text-sky-100 font-mono">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              <span>Zero Hyperscaler Lock-In</span>
            </div>
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-200" />
              <span>Elastic Scale-to-Zero Compute</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-300" />
              <span>Clean Core Compliant</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default DataPlatformsPage;
