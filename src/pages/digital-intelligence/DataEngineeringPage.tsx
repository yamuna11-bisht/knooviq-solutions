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
  Sliders,
  Maximize2,
  X
} from 'lucide-react';

interface DataEngineeringPageProps {
  onOpenContact?: (defaultTopic?: string) => void;
}

export const DataEngineeringPage: React.FC<DataEngineeringPageProps> = ({
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

  // State for Section 6: Engineering Pipeline Sandbox Tab
  const [activeSandboxTab, setActiveSandboxTab] = useState<'realtime-cdc' | 'medallion-dag' | 'quality-contracts'>('realtime-cdc');

  // State for Section 7: FAQ Accordion
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Section 2: 5 Executive Pipeline Evolution Steps
  const journeySteps = [
    {
      id: 'cdc-ingestion',
      step: 'PHASE 01',
      label: 'Log-Based Change Data Capture',
      sublabel: 'Zero Production Overhead',
      desc: 'Non-invasive database transaction log mining capturing inserts, updates, and deletes with microsecond latency without locking production operational tables.',
      tech: 'Debezium & Kafka Connectors',
      icon: Activity
    },
    {
      id: 'declarative-elt',
      step: 'PHASE 02',
      label: 'Declarative DAG Transformations',
      sublabel: 'Code-Driven Lineage',
      desc: 'Version-controlled transformation logic expressed in SQL and Python with automated dependency resolution, compilation checks, and idempotent materializations.',
      tech: 'dbt Core & Apache Airflow',
      icon: Workflow
    },
    {
      id: 'medallion-processing',
      step: 'PHASE 03',
      label: 'Medallion Lakehouse Structuring',
      sublabel: 'Bronze, Silver & Gold Zones',
      desc: 'Multi-hop data refinement isolating raw immutable telemetry, harmonized deduplicated entity tables, and curated high-performance business data products.',
      tech: 'Apache Iceberg & Delta Engine',
      icon: Layers
    },
    {
      id: 'schema-drift',
      step: 'PHASE 04',
      label: 'Automated Schema Contract Gates',
      sublabel: 'Drift Interception',
      desc: 'Programmatic CI/CD data contract checks intercepting breaking upstream schema alterations, payload type variations, and null-column violations before warehouse arrival.',
      tech: 'Great Expectations & OpenLineage',
      icon: FileCheck
    },
    {
      id: 'operational-reverse-etl',
      step: 'PHASE 05',
      label: 'Continuous Reverse-ETL Sync',
      sublabel: 'Closed-Loop Operationalization',
      desc: 'Sync curated golden business records and real-time analytical scores back into enterprise ERP, CRM, and frontline operational applications continuously.',
      tech: 'Streaming Message Hubs & APIs',
      icon: RefreshCw
    }
  ];

  // Section 3: Engineering Pipeline Challenges (Legacy vs Reality)
  const dataEngineeringChallenges = [
    {
      icon: AlertTriangle,
      tag: 'BATCH FRAGILITY',
      title: 'Brittle Overnight Batch Windows',
      desc: 'Legacy multi-hour batch runs fail unpredictably during volume spikes, leaving executive dashboards stale and delaying daily manufacturing or financial closeouts.',
      solution: 'Continuous Micro-Batch & Event-Driven Streaming CDC'
    },
    {
      icon: XCircle,
      tag: 'SILENT BREAKS',
      title: 'Unannounced Upstream Schema Drift',
      desc: 'Operational source applications modify column names or alter data types without notification, silently breaking downstream transformations and corrupting reports.',
      solution: 'Programmatic Schema Contract Gates in CI/CD'
    },
    {
      icon: RefreshCw,
      tag: 'PIPELINE DEBT',
      title: 'Monolithic Spaghetti Code Pipelines',
      desc: 'Thousands of undocumented, imperative SQL scripts and cron jobs create unmaintainable pipeline debt where nobody understands the blast radius of a single edit.',
      solution: 'Declarative Modular DAGs with Automated Lineage'
    },
    {
      icon: Zap,
      tag: 'RUNAWAY COMPUTE',
      title: 'Inefficient Compute & Cluster Spillover',
      desc: 'Full-table reprocessing and unpartitioned queries trigger runaway cloud warehouse costs and query throttling across peak business decision hours.',
      solution: 'Incremental Ingestion & Ephemeral Dynamic Scaling'
    },
    {
      icon: Database,
      tag: 'FRAGMENTED SILOS',
      title: 'Incompatible Multi-Cloud Data Formats',
      desc: 'Proprietary cloud storage formats trap records in vendor silos, forcing expensive ongoing replication and redundant ETL sync maintenance across platforms.',
      solution: 'Unified Open Table Standards Across Cloud Stores'
    },
    {
      icon: ShieldCheck,
      tag: 'AUDIT UNCERTAINTY',
      title: 'Lack of End-to-End Pipeline Provenance',
      desc: 'Inability to track the exact transformation path and source timestamp of a published KPI leads to executive mistrust and severe regulatory compliance audit exposure.',
      solution: 'Deterministic Cryptographic Pipeline Lineage'
    }
  ];

  // Section 4: 8-Segment Circular Chevron Wheel (Knooviq Data Engineering Fabric)
  const wheelSegments = [
    {
      id: 'cdc-stream',
      shortTag: 'CDC',
      title: 'Sub-Second Log Ingestion',
      desc: 'Non-blocking transaction log streaming synchronizing enterprise database modifications continuously.',
      badge: 'LOG-BASED STREAMING',
      metric: 'Zero Production Lockout',
      side: 'right',
      color: '#0070C0',
      textColor: 'text-sky-400',
      bgGlow: 'rgba(0, 112, 192, 0.35)',
      icon: Activity
    },
    {
      id: 'declarative-dag',
      shortTag: 'DAG',
      title: 'Declarative Orchestration',
      desc: 'Code-driven transformation workflows with automated dependency tracking and idempotent execution.',
      badge: 'DECLARATIVE ORCHESTRATION',
      metric: 'Version-Controlled Code',
      side: 'right',
      color: '#0284C7',
      textColor: 'text-cyan-400',
      bgGlow: 'rgba(2, 132, 199, 0.35)',
      icon: Workflow
    },
    {
      id: 'medallion',
      shortTag: 'LAKE',
      title: 'Medallion Lakehouse Fabric',
      desc: 'Multi-stage Bronze raw ingestion, Silver cleansed harmonization, and Gold business aggregation.',
      badge: 'MEDALLION ARCHITECTURE',
      metric: 'Structured Data Zones',
      side: 'right',
      color: '#06B6D4',
      textColor: 'text-cyan-300',
      bgGlow: 'rgba(6, 182, 212, 0.35)',
      icon: Layers
    },
    {
      id: 'schema-gates',
      shortTag: 'GATE',
      title: 'Automated Schema Contracts',
      desc: 'Deterministic schema validation intercepting breaking column additions, drops, or type alterations.',
      badge: 'SCHEMA CONTRACTS',
      metric: 'Zero Unannounced Drift',
      side: 'right',
      color: '#10B981',
      textColor: 'text-emerald-400',
      bgGlow: 'rgba(16, 185, 129, 0.35)',
      icon: FileCheck
    },
    {
      id: 'quality-assert',
      shortTag: 'TEST',
      title: 'Continuous Quality Assertions',
      desc: 'Automated in-flight data anomaly checks evaluating uniqueness, freshness, and referential integrity.',
      badge: 'DATA QUALITY ASSURANCE',
      metric: 'Continuous Test Assertions',
      side: 'left',
      color: '#F59E0B',
      textColor: 'text-amber-400',
      bgGlow: 'rgba(245, 158, 11, 0.35)',
      icon: ShieldCheck
    },
    {
      id: 'elastic-compute',
      shortTag: 'SCALE',
      title: 'Elastic Distributed Compute',
      desc: 'Dynamic cluster auto-scaling isolating heavy analytical transformations from operational query workloads.',
      badge: 'AUTONOMOUS COMPUTE',
      metric: 'On-Demand Elasticity',
      side: 'left',
      color: '#EC4899',
      textColor: 'text-pink-400',
      bgGlow: 'rgba(236, 72, 153, 0.35)',
      icon: Server
    },
    {
      id: 'lineage-catalog',
      shortTag: 'LINE',
      title: 'End-to-End Lineage Tracking',
      desc: 'Column-level graph lineage tracing data provenance from source transactions to executive BI dashboards.',
      badge: 'COLUMN-LEVEL LINEAGE',
      metric: 'Deterministic Audit Trails',
      side: 'left',
      color: '#8B5CF6',
      textColor: 'text-purple-400',
      bgGlow: 'rgba(139, 92, 246, 0.35)',
      icon: Network
    },
    {
      id: 'reverse-etl',
      shortTag: 'SYNC',
      title: 'Reverse-ETL Operationalization',
      desc: 'Closed-loop synchronization feeding transformed analytical insights back into frontline operational ERPs.',
      badge: 'OPERATIONAL FEEDBACK',
      metric: 'Closed-Loop Actionability',
      side: 'left',
      color: '#3B82F6',
      textColor: 'text-blue-400',
      bgGlow: 'rgba(59, 130, 246, 0.35)',
      icon: RefreshCw
    }
  ];

  // Section 5: Transformation Comparison Matrix (Legacy Monolithic ETL vs. Modern Declarative Data Engineering)
  const comparisonMatrix = [
    {
      dimension: 'Pipeline Ingestion Mechanism',
      legacy: 'Rigid batch SQL queries executed on fixed overnight schedules, causing significant production database CPU contention.',
      modern: 'Non-invasive log-based Change Data Capture streaming row deltas with continuous microsecond synchronization.'
    },
    {
      dimension: 'Transformation Architecture',
      legacy: 'Monolithic procedural scripts with tightly coupled dependencies and hidden side-effects across staging tables.',
      modern: 'Declarative, modular DAG pipelines with isolated model dependencies and automated execution graphs.'
    },
    {
      dimension: 'Schema Evolution Handling',
      legacy: 'Silent production pipeline failure when upstream ERP changes data types, requiring manual hotfixes.',
      modern: 'Programmatic schema contracts enforced via CI/CD pipelines, intercepting breaking changes before ingest.'
    },
    {
      dimension: 'Data Quality & Validation',
      legacy: 'Post-hoc manual validation after business users discover discrepancies in published quarterly reports.',
      modern: 'Automated in-pipeline assertions testing uniqueness, referential integrity, and freshness at every step.'
    },
    {
      dimension: 'Compute & Resource Scaling',
      legacy: 'Over-provisioned on-premise or static cloud servers running continuously regardless of actual workload.',
      modern: 'Elastic distributed compute clusters provisioning dynamically on demand and terminating immediately after job completion.'
    },
    {
      dimension: 'Audit Lineage & Provenance',
      legacy: 'Manual spreadsheet documentation that falls out of date immediately following code deployments.',
      modern: 'Automated column-level metadata graph tracking exact code commits, execution runtimes, and upstream sources.'
    }
  ];

  // Section 6: Interactive Pipeline Sandbox Details
  const sandboxDetails = {
    'realtime-cdc': {
      title: 'High-Throughput ERP Change Data Capture Pipeline',
      badge: 'STREAMING INGESTION ARCHITECTURE',
      desc: 'Sub-second event streaming extracting incremental updates directly from transactional database transaction logs with zero operational table locking.',
      specs: [
        { label: 'Extraction Mode', val: 'Log-based binary mining' },
        { label: 'Latency Profile', val: 'Sub-second replication' },
        { label: 'ERP Overhead', val: 'Negligible CPU impact' },
        { label: 'Ingestion Format', val: 'Open streaming event envelopes' }
      ],
      steps: [
        {
          name: 'Binary Log Capture',
          detail: 'Continuous mining of database transaction journals recording row-level inserts, updates, and deletes.'
        },
        {
          name: 'Distributed Message Serialization',
          detail: 'Events serialized into structured JSON/Avro envelopes with transactional timestamps and sequence keys.'
        },
        {
          name: 'Bronze Lakehouse Delivery',
          detail: 'Parallel micro-batch streaming directly into append-only raw storage with ACID transactional guarantees.'
        }
      ]
    },
    'medallion-dag': {
      title: 'Declarative Medallion DAG Transformation Engine',
      badge: 'STRUCTURED REFINEMENT PIPELINE',
      desc: 'Multi-stage automated transformation graph converting raw unstructured operational telemetry into unified, high-performance analytical data products.',
      specs: [
        { label: 'Orchestration Pattern', val: 'Declarative DAG execution' },
        { label: 'Processing Model', val: 'Incremental stateful processing' },
        { label: 'Refinement Stages', val: 'Bronze Raw → Silver Clean → Gold Product' },
        { label: 'Execution Engine', val: 'Distributed in-memory compute' }
      ],
      steps: [
        {
          name: 'Bronze Zone Preservation',
          detail: 'Raw, immutable source records preserved with original source metadata for complete historical replayability.'
        },
        {
          name: 'Silver Cleansing & Harmonization',
          detail: 'Deduplication, schema normalization, and master entity resolution across disparate operational systems.'
        },
        {
          name: 'Gold Business Mart Aggregation',
          detail: 'Domain-oriented dimensional models optimized for sub-second query performance in executive cockpits.'
        }
      ]
    },
    'quality-contracts': {
      title: 'Programmatic Schema Contract & Quality Verification Gate',
      badge: 'AUTOMATED GOVERNANCE & DRIFT CONTROL',
      desc: 'Continuous CI/CD quality gate verifying schema definitions, statistical boundaries, and business rules before data reaches consumption layers.',
      specs: [
        { label: 'Enforcement Point', val: 'Pre-ingestion & post-transformation' },
        { label: 'Drift Mitigation', val: 'Automated quarantine & alerting' },
        { label: 'Lineage Resolution', val: 'End-to-end column-level tracing' },
        { label: 'Governance Standard', val: 'Enterprise Data Contract Spec' }
      ],
      steps: [
        {
          name: 'Schema Pre-Validation',
          detail: 'Incoming event batches evaluated against registered schema contracts; breaking payload changes quarantined.'
        },
        {
          name: 'In-Flight Quality Assertions',
          detail: 'Automated tests validating primary key uniqueness, foreign key relationships, and metric corridors.'
        },
        {
          name: 'Deterministic Lineage Publishing',
          detail: 'Execution telemetry and column provenance logged to unified metadata catalog for immediate audit inspection.'
        }
      ]
    }
  };

  // Section 7: FAQs
  const engineeringFaqs = [
    {
      question: 'How does Log-Based Change Data Capture differ from traditional query-based extraction?',
      answer: 'Query-based extraction periodically executes polling queries against production databases, which consumes database CPU, locks operational tables, and can miss intermediate updates. Log-Based CDC reads the database transaction logs directly without touching operational tables, providing continuous sub-second data streaming with negligible impact on production applications.'
    },
    {
      question: 'What is the role of Declarative Data Engineering compared to traditional scripted ETL?',
      answer: 'Traditional ETL relies on imperative scripts that specify exactly how to extract, transform, and load data step-by-step, making them brittle and difficult to maintain. Declarative data engineering specifies the desired end-state data models in code (such as SQL and Python), allowing the orchestration engine to automatically resolve dependencies, determine optimal execution paths, and enforce idempotent runs.'
    },
    {
      question: 'How do automated Data Contracts prevent unexpected dashboard outages?',
      answer: 'Data Contracts define explicit, version-controlled agreements between data producers (such as application engineering teams) and data consumers. By validating schemas and payload structures at the pipeline boundary, breaking changes like removed columns or modified data types are intercepted and quarantined before they can corrupt downstream analytics.'
    },
    {
      question: 'What is the Medallion Architecture, and why is it recommended for modern lakehouses?',
      answer: 'The Medallion Architecture organizes data into three distinct refinement layers: Bronze (raw, append-only historical records), Silver (cleansed, deduplicated, and harmonized entity records), and Gold (curated, business-ready aggregations). This logical separation ensures data traceability, facilitates easy error recovery, and delivers high-performance queries for business users.'
    },
    {
      question: 'How does Reverse-ETL close the loop between data analytics and business operations?',
      answer: 'Traditional analytics pipelines move data in one direction—from operational systems into warehouses and dashboards. Reverse-ETL takes curated golden records, calculated risk scores, and customer insights from the lakehouse and automatically synchronizes them back into frontline ERP, CRM, and supply chain tools, turning insights into immediate operational action.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#0070C0] selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* =========================================================================
          SECTION 1: HERO SECTION (Full-Screen Panoramic Background - Aligned with AI Agents)
          ========================================================================= */}
      <section className="relative w-full min-h-[560px] sm:min-h-[620px] lg:min-h-[660px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 overflow-hidden bg-slate-950 text-white">

        {/* Full-Bleed 16:9 Panoramic Image - Zero Cropping on Data Engineering & Streaming Pipelines */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/data-engineering/data_engineering_ai_hero.jpg"
            alt="Enterprise Data Engineering AI Control Center"
            className="w-full h-full object-cover object-right sm:object-[78%_center] lg:object-center select-none contrast-[1.02]"
            style={{ imageRendering: '-webkit-optimize-contrast' }}
          />
        </div>

        {/* Lighter Directional Scrim for Maximum Visual Clarity & Text Contrast */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-slate-950/70 via-slate-950/30 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-2xl lg:max-w-xl space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="space-y-4">
              {/* Practice Pill Badge */}
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-cyan-500/40 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 shadow-md">
                  <Database className="w-3.5 h-3.5 text-cyan-400" />
                  <span>KNOOVIQ DIGITAL INTELLIGENCE &bull; DATA ENGINEERING</span>
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.1] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                Enterprise <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-cyan-400">
                  Data Engineering &amp; Streaming Pipelines
                </span>
              </h1>

              {/* Sub-headline */}
              <p className="text-base sm:text-lg text-slate-100 leading-relaxed font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                Build autonomous, high-throughput data engineering pipelines with declarative ELT orchestration, sub-second Change Data Capture, programmatic data quality gates, and scalable multi-cloud ingestion fabrics.
              </p>
            </motion.div>

            {/* Enterprise Trust Indicators */}
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="pt-1 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-cyan-200 shadow-lg">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Declarative ELT Orchestration</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-emerald-200 shadow-lg">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Sub-Second CDC Streaming</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-sky-200 shadow-lg">
                <Database className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Automated Schema Contracts</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: EXECUTIVE PERSPECTIVE (Clean Light Corporate Theme - Space Optimized)
          ========================================================================= */}
      <section id="pipeline-evolution" className="py-14 sm:py-16 bg-gradient-to-b from-white via-[#F8FBFE] to-white border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-300 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
                <Activity className="w-3.5 h-3.5 text-[#0070C0]" />
                <span>EXECUTIVE ENGINEERING PERSPECTIVE</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight leading-tight">
                Modernizing the <span className="text-[#0070C0]">Enterprise Data Pipeline</span>
              </h2>

              <div className="border-l-4 border-[#0070C0] border-y border-r border-slate-300 pl-4 py-2 bg-gradient-to-r from-sky-50/80 via-sky-50/30 to-transparent rounded-r-xl">
                <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed italic">
                  &ldquo;Resilient data engineering is about building autonomous, self-healing pipelines that treat data models as version-controlled software assets, with programmatic quality guarantees at every stage.&rdquo;
                </p>
              </div>

              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-normal">
                Knooviq transforms legacy, batch-driven data pipelines into continuous, declarative data engineering fabrics. We eliminate overnight job failures, automate schema contract enforcement, and ensure that analytical data products are continuously synchronized with operational ERPs.
              </p>

              {/* 3 Executive Engineering Pillars (Compact 3-Col Grid) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div className="p-3 rounded-xl border border-slate-200 bg-white shadow-xs hover:border-[#0070C0] transition-colors space-y-1.5">
                  <div className="w-8 h-8 rounded-lg bg-sky-50 text-[#0070C0] flex items-center justify-center border border-sky-200">
                    <Activity className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-950">Zero-Lock Extraction</h4>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Log-based CDC streams deltas without locking production tables.
                  </p>
                </div>

                <div className="p-3 rounded-xl border border-slate-200 bg-white shadow-xs hover:border-[#0070C0] transition-colors space-y-1.5">
                  <div className="w-8 h-8 rounded-lg bg-sky-50 text-[#0070C0] flex items-center justify-center border border-sky-200">
                    <Workflow className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-950">Declarative DAGs</h4>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Version-controlled models with automated idempotent execution.
                  </p>
                </div>

                <div className="p-3 rounded-xl border border-slate-200 bg-white shadow-xs hover:border-[#0070C0] transition-colors space-y-1.5">
                  <div className="w-8 h-8 rounded-lg bg-sky-50 text-[#0070C0] flex items-center justify-center border border-sky-200">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-950">Anomaly Interception</h4>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Automated quality gates quarantine breaking schema drift in-flight.
                  </p>
                </div>
              </div>

            </div>

            {/* Right Interactive Pipeline Evolution Viewer (IMAGE 2 OF 3 - Space Optimized) */}
            <div className="lg:col-span-6 space-y-3">
              
              {/* Image 2 with integrated overlay */}
              <div 
                className="relative rounded-2xl overflow-hidden border-2 border-slate-300 shadow-xl bg-slate-950 group h-96 sm:h-[440px] lg:h-[490px] w-full cursor-pointer"
                onClick={() => setActiveJourneyStep((activeJourneyStep + 1) % journeySteps.length)}
                title="Click image to advance to next architecture step"
              >
                <img
                  src="/images/data-engineering/stream_processing.jpg"
                  alt="Enterprise Data Engineering Real-Time Stream Processing and Pipeline Operations"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent pointer-events-none" />
                
                {/* Active Phase Badge */}
                <div className="absolute top-3 left-3 px-3 py-1.5 rounded-lg bg-slate-900/90 backdrop-blur-md border border-cyan-400/50 text-xs font-mono font-bold text-cyan-300 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                  <span>PIPELINE ENGINE: {journeySteps[activeJourneyStep].step}</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm sm:text-base font-bold tracking-tight text-white truncate">
                      {journeySteps[activeJourneyStep].label}
                    </h3>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-sky-500/20 text-cyan-300 border border-sky-400/30 shrink-0">
                      {journeySteps[activeJourneyStep].tech}
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-300 font-normal leading-relaxed line-clamp-2 mt-0.5">
                    {journeySteps[activeJourneyStep].desc}
                  </p>
                </div>
              </div>

              {/* Step Selectors - Compact Row */}
              <div className="grid grid-cols-5 gap-2">
                {journeySteps.map((step, idx) => {
                  const Icon = step.icon;
                  const isActive = activeJourneyStep === idx;
                  return (
                    <button
                      key={step.id}
                      onClick={() => setActiveJourneyStep(idx)}
                      className={`p-2 rounded-xl border text-center transition-all ${
                        isActive
                          ? 'bg-[#0070C0] border-[#0070C0] text-white shadow-xs'
                          : 'bg-white border-slate-200 hover:border-sky-300 text-slate-700 hover:bg-sky-50/50'
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 mx-auto mb-1 ${isActive ? 'text-white' : 'text-[#0070C0]'}`} />
                      <div className={`text-[10px] font-mono font-bold leading-none ${isActive ? 'text-sky-100' : 'text-slate-400'}`}>
                        {step.step}
                      </div>
                      <div className={`text-[10px] font-bold leading-tight truncate mt-1 ${isActive ? 'text-white' : 'text-slate-900'}`}>
                        {step.label.split(' ')[0]}
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
          SECTION 3: PIPELINE ENGINEERING CHALLENGES (Deep Tech Tone)
          ========================================================================= */}
      <section className="py-24 bg-[#070e1c] text-white border-b border-slate-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-cyan-300">
              <AlertTriangle className="w-4 h-4 text-cyan-400" />
              <span>OVERCOMING PIPELINE COMPLEXITY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              The Reality of <span className="text-cyan-400">Legacy Data Pipelines</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              Enterprise engineering teams spend excessive time debugging brittle midnight batch runs and repairing downstream reports caused by unannounced schema modifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dataEngineeringChallenges.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 space-y-4 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded bg-slate-800 text-cyan-300 border border-slate-700">
                        {item.tag}
                      </span>
                      <Icon className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800 flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                    <span>{item.solution}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: CIRCULAR CHEVRON ECOSYSTEM WHEEL (Interactive Pipeline Tour)
          ========================================================================= */}
      <section className="py-24 bg-white border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-300 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#0070C0]">
              <Sparkles className="w-4 h-4 text-[#0070C0]" />
              <span>THE KNOOVIQ DATA ENGINEERING ECOSYSTEM</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              Integrated <span className="text-[#0070C0]">Pipeline Architecture Wheel</span>
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
              An end-to-end declarative pipeline framework unifying real-time Change Data Capture, modular medallion storage, automated schema gates, and closed-loop operationalization.
            </p>

            <div className="flex items-center justify-center pt-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-400/50 text-xs font-mono font-bold text-cyan-300 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                <span>ACTIVE PIPELINE LAYER: {(hoveredWheelIndex !== null ? wheelSegments[hoveredWheelIndex].title : 'CONTINUOUS ROTATION').toUpperCase()}</span>
              </div>
            </div>
          </div>

          {/* 8-Segment Interactive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {wheelSegments.map((segment, idx) => {
              const Icon = segment.icon;
              const isSelected = hoveredWheelIndex === idx;
              return (
                <div
                  key={segment.id}
                  onClick={() => setHoveredWheelIndex(idx)}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer space-y-4 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-slate-950 border-[#0070C0] text-white shadow-xl scale-[1.02]'
                      : 'bg-[#F8FBFE] border-slate-200 hover:border-sky-300 hover:bg-white text-slate-800'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                        isSelected ? 'bg-sky-500/20 text-cyan-300 border border-sky-400/40' : 'bg-white text-slate-600 border border-slate-200'
                      }`}>
                        {segment.shortTag}
                      </span>
                      <Icon className={`w-5 h-5 ${isSelected ? segment.textColor : 'text-[#0070C0]'}`} />
                    </div>

                    <h3 className={`text-base font-bold leading-tight ${isSelected ? 'text-white' : 'text-slate-950'}`}>
                      {segment.title}
                    </h3>

                    <p className={`text-sm leading-relaxed font-normal ${isSelected ? 'text-slate-300' : 'text-slate-600'}`}>
                      {segment.desc}
                    </p>
                  </div>

                  <div className={`pt-3 border-t text-xs font-mono font-bold flex items-center gap-1.5 ${
                    isSelected ? 'border-slate-800 text-cyan-300' : 'border-slate-200 text-[#0070C0]'
                  }`}>
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{segment.metric}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: ARCHITECTURAL TRANSFORMATION MATRIX (High Value Comparative Matrix)
          ========================================================================= */}
      <section className="py-24 bg-gradient-to-b from-[#F8FBFE] via-white to-[#F8FBFE] border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-300 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#0070C0]">
              <Scale className="w-4 h-4 text-[#0070C0]" />
              <span>PIPELINE PARADIGM SHIFT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              Legacy Monolithic ETL vs. <span className="text-[#0070C0]">Declarative Pipeline Fabric</span>
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
              A comprehensive technical comparison contrasting legacy procedural ETL with Knooviq&apos;s modern declarative, event-driven data engineering standard.
            </p>
          </div>

          {/* Side-by-Side Comparison Matrix */}
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-12 bg-slate-950 text-white font-mono text-xs font-bold uppercase tracking-wider border-b border-slate-800">
              <div className="md:col-span-4 p-4 text-slate-400">Engineering Dimension</div>
              <div className="md:col-span-4 p-4 text-rose-300 border-t md:border-t-0 md:border-l border-slate-800">Legacy Monolithic ETL</div>
              <div className="md:col-span-4 p-4 text-cyan-300 border-t md:border-t-0 md:border-l border-slate-800">Knooviq Declarative Fabric</div>
            </div>

            <div className="divide-y divide-slate-200">
              {comparisonMatrix.map((row, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-12 text-sm hover:bg-sky-50/30 transition-colors">
                  <div className="md:col-span-4 p-5 font-bold text-slate-900 bg-slate-50/70 flex items-center">
                    {row.dimension}
                  </div>
                  <div className="md:col-span-4 p-5 text-slate-600 border-t md:border-t-0 md:border-l border-slate-200 leading-relaxed font-normal">
                    {row.legacy}
                  </div>
                  <div className="md:col-span-4 p-5 text-slate-900 border-t md:border-t-0 md:border-l border-slate-200 leading-relaxed font-semibold bg-sky-50/20">
                    {row.modern}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: ENGINEERING BLUEPRINT & PIPELINE SANDBOX (IMAGE 3 OF 3 - Space Optimized)
          ========================================================================= */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Blueprint Visual (IMAGE 3 OF 3 - Compact & Sleek) */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-950 group">
                <div className="h-72 sm:h-84 lg:h-[410px] w-full overflow-hidden">
                  <img
                    src="/images/data-engineering/orchestration_fabric.jpg"
                    alt="Enterprise Data Engineering Declarative Orchestration DAG Fabric"
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />
                
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-900/95 backdrop-blur-md border border-slate-700/80 text-white flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <div>
                      <div className="text-[10px] font-mono uppercase text-slate-400 font-bold">PIPELINE FABRIC</div>
                      <div className="text-xs sm:text-sm font-bold text-white">Declarative Execution Active</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-md bg-sky-500/20 text-cyan-300 border border-sky-400/40">
                    SELF-HEALING
                  </span>
                </div>
              </div>
            </div>

            {/* Right Interactive Architecture Sandbox (Compact & High-Impact) */}
            <div className="lg:col-span-7 space-y-4">
              
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-300 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
                  <Workflow className="w-3.5 h-3.5 text-[#0070C0]" />
                  <span>INTERACTIVE PIPELINE SANDBOX</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight leading-tight">
                  Declarative Pipeline <span className="text-[#0070C0]">Execution Blueprints</span>
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  Explore how Knooviq engineers declarative data pipelines from high-throughput log ingestion through Medallion lakehouse structuring and continuous schema contract gating.
                </p>
              </div>

              {/* 3 Sandbox Switcher Tabs - Sleek Compact Bar */}
              <div className="flex gap-2 p-1 rounded-xl bg-slate-100 border border-slate-200">
                <button
                  onClick={() => setActiveSandboxTab('realtime-cdc')}
                  className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-mono font-bold transition-all ${
                    activeSandboxTab === 'realtime-cdc'
                      ? 'bg-white text-[#0070C0] shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Log-Based CDC
                </button>
                <button
                  onClick={() => setActiveSandboxTab('medallion-dag')}
                  className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-mono font-bold transition-all ${
                    activeSandboxTab === 'medallion-dag'
                      ? 'bg-white text-[#0070C0] shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Medallion DAG
                </button>
                <button
                  onClick={() => setActiveSandboxTab('quality-contracts')}
                  className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-mono font-bold transition-all ${
                    activeSandboxTab === 'quality-contracts'
                      ? 'bg-white text-[#0070C0] shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Schema Contracts
                </button>
              </div>

              {/* Active Tab Panel - Compact Card */}
              <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 bg-[#F8FBFE] space-y-3.5">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-sky-100 text-[#0070C0]">
                    {sandboxDetails[activeSandboxTab].badge}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-950 mt-1">
                    {sandboxDetails[activeSandboxTab].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mt-0.5">
                    {sandboxDetails[activeSandboxTab].desc}
                  </p>
                </div>

                {/* Specs Grid - 4 Columns Compact */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-slate-200">
                  {sandboxDetails[activeSandboxTab].specs.map((item, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-white border border-slate-200">
                      <div className="text-[10px] font-mono text-slate-400">{item.label}</div>
                      <div className="text-xs font-bold text-slate-900 truncate mt-0.5">{item.val}</div>
                    </div>
                  ))}
                </div>

                {/* Step Flow - 3 Columns Horizontal Grid */}
                <div className="space-y-1.5 pt-2 border-t border-slate-200">
                  <div className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider">Pipeline Execution Stages</div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {sandboxDetails[activeSandboxTab].steps.map((st, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-white border border-slate-200 space-y-1">
                        <div className="flex items-center gap-1.5">
                          <span className="w-4 h-4 rounded-full bg-sky-50 text-[#0070C0] border border-sky-200 text-[10px] font-mono font-bold flex items-center justify-center shrink-0">
                            {idx + 1}
                          </span>
                          <h4 className="text-xs font-bold text-slate-900 truncate">{st.name}</h4>
                        </div>
                        <p className="text-[11px] text-slate-600 leading-relaxed font-normal line-clamp-3">{st.detail}</p>
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
          SECTION 7: TECHNICAL FAQ ACCORDION (Modern Attractive Sapphire Theme)
          ========================================================================= */}
      <section className="relative py-24 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/60 border-b border-slate-200 overflow-hidden">
        {/* Subtle Ambient Decorative Glow & Grid */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[340px] bg-gradient-to-b from-sky-100/60 via-blue-50/30 to-transparent blur-3xl pointer-events-none -z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(#0070c0_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.035] pointer-events-none -z-0" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/80 text-xs font-mono font-bold tracking-widest text-[#0070C0] uppercase shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>TECHNICAL CLARIFICATIONS &bull; DATA ENGINEERING</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#005A9C] via-[#0070C0] to-sky-500">Engineering Questions</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal max-w-2xl mx-auto">
              Technical insights on architecting autonomous, streaming data engineering pipelines across complex enterprise landscapes.
            </p>
          </div>

          <div className="space-y-4">
            {engineeringFaqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                    isOpen
                      ? 'bg-white border-[#0070C0] shadow-lg shadow-sky-500/5 ring-1 ring-[#0070C0]/20 border-l-4 border-l-[#0070C0]'
                      : 'bg-white border-slate-200/90 hover:border-slate-300 hover:shadow-xs'
                  }`}
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
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
          SECTION 8: EXECUTIVE CALL TO ACTION
          ========================================================================= */}
      <section className="py-24 bg-gradient-to-b from-[#070e1c] to-[#040812] text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-400/40 bg-sky-500/10 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-cyan-300">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>ACCELERATE YOUR PIPELINE MODERNIZATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Build Resilient, <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-300">Streaming Data Pipelines</span>?
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
            Partner with Knooviq&apos;s data engineering architects to design declarative ELT workflows, sub-second Change Data Capture, and automated schema contracts tailored to your enterprise systems.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenContact && onOpenContact('Data Engineering Practice Advisory')}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#0070C0] to-cyan-500 text-white font-bold text-base hover:from-sky-600 hover:to-cyan-600 transition-all shadow-lg shadow-sky-900/50 flex items-center gap-2 group cursor-pointer"
            >
              <span>Schedule Architecture Session</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <Link
              to="/digital-intelligence/data-governance"
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold uppercase tracking-wider backdrop-blur-md flex items-center gap-2 group transition-all"
            >
              <span>Explore Data Governance</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
};
