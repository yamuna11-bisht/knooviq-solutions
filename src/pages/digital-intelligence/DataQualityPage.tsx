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
  Maximize2,
  X
} from 'lucide-react';

interface DataQualityPageProps {
  onOpenContact?: (defaultTopic?: string) => void;
}

export const DataQualityPage: React.FC<DataQualityPageProps> = ({
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
  const [activeProtocolTab, setActiveProtocolTab] = useState<'anomaly-firewall' | 'golden-record' | 'self-healing'>('anomaly-firewall');

  // State for Section 7: FAQ Accordion
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // =========================================================================
  // DATA STRUCTURES
  // =========================================================================

  // Section 4: Circular Chevron Segments (8 Interlocking Data Quality Layers)
  const wheelSegments = [
    {
      id: 'statistical-profiling',
      shortTag: 'PROFILING',
      title: 'Autonomous Statistical Profiling',
      desc: 'Continuous real-time profiling computing statistical distributions, schema integrity, and semantic drift across all distributed ingestion pipelines.',
      badge: 'CONTINUOUS MONITORING',
      metric: 'Real-Time Distribution Baselines',
      side: 'right',
      color: '#0070C0',
      textColor: 'text-sky-400',
      bgGlow: 'rgba(0, 112, 192, 0.35)',
      icon: BarChart3
    },
    {
      id: 'ingestion-firewalls',
      shortTag: 'FIREWALLS',
      title: 'In-Flight Quality Firewalls',
      desc: 'Sub-millisecond data validation gates intercepting malformed payloads, out-of-range values, and broken relations at producer boundaries.',
      badge: 'SHIFT-LEFT DEFENSE',
      metric: 'Sub-Millisecond Interception',
      side: 'right',
      color: '#0284C7',
      textColor: 'text-cyan-400',
      bgGlow: 'rgba(2, 132, 199, 0.35)',
      icon: ShieldCheck
    },
    {
      id: 'anomaly-detection',
      shortTag: 'ANOMALY',
      title: 'Unsupervised Anomaly Detection',
      desc: 'Machine learning algorithms detecting multi-dimensional data drift, sudden volume spikes, and subtle metric corruption without manual threshold tuning.',
      badge: 'ML-POWERED HEURISTICS',
      metric: 'Automated Drift Sensing',
      side: 'right',
      color: '#06B6D4',
      textColor: 'text-cyan-300',
      bgGlow: 'rgba(6, 182, 212, 0.35)',
      icon: Activity
    },
    {
      id: 'entity-resolution',
      shortTag: 'RESOLUTION',
      title: 'Golden Record Entity Resolution',
      desc: 'Fuzzy-logic matching and deterministic deduplication reconciling disparate customer, vendor, and product records into a single verified master record.',
      badge: 'GOLDEN RECORD HARMONIZATION',
      metric: 'Probabilistic Entity Matching',
      side: 'right',
      color: '#10B981',
      textColor: 'text-emerald-400',
      bgGlow: 'rgba(16, 185, 129, 0.35)',
      icon: Database
    },
    {
      id: 'declarative-contracts',
      shortTag: 'CONTRACTS',
      title: 'Declarative Quality Contracts',
      desc: 'Version-controlled data contracts integrated into CI/CD workflows, guaranteeing structural and semantic compliance before code deployments.',
      badge: 'CI/CD INTERLOCKS',
      metric: 'Code-Driven Schema Defense',
      side: 'left',
      color: '#F59E0B',
      textColor: 'text-amber-400',
      bgGlow: 'rgba(245, 158, 11, 0.35)',
      icon: FileCheck
    },
    {
      id: 'self-healing',
      shortTag: 'HEALING',
      title: 'Automated Quarantine & Remediation',
      desc: 'Isolated dead-letter queues routing corrupted events to automated repair workflows while compliant data streams forward without disruption.',
      badge: 'SELF-HEALING PIPELINES',
      metric: 'Zero-Downtime Dead-Lettering',
      side: 'left',
      color: '#EC4899',
      textColor: 'text-pink-400',
      bgGlow: 'rgba(236, 72, 153, 0.35)',
      icon: RefreshCw
    },
    {
      id: 'pipeline-observability',
      shortTag: 'OBSERVABILITY',
      title: 'Full-Stack Pipeline Telemetry',
      desc: 'End-to-end visibility into pipeline latency, data freshness, completeness SLAs, and blast-radius impact analysis across all enterprise domains.',
      badge: 'END-TO-END TELEMETRY',
      metric: 'Proactive SLA Monitoring',
      side: 'left',
      color: '#8B5CF6',
      textColor: 'text-purple-400',
      bgGlow: 'rgba(139, 92, 246, 0.35)',
      icon: Eye
    },
    {
      id: 'reverse-sync',
      shortTag: 'REVERSE-SYNC',
      title: 'Closed-Loop Operational Reverse-ETL',
      desc: 'Continuous synchronization of cleansed, harmonized golden records directly back into SAP S/4HANA, Salesforce, and operational frontlines.',
      badge: 'CLOSED-LOOP HARMONIZATION',
      metric: 'Bidirectional Master Sync',
      side: 'left',
      color: '#6366F1',
      textColor: 'text-indigo-400',
      bgGlow: 'rgba(99, 102, 241, 0.35)',
      icon: Workflow
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
      id: 'continuous-profiling',
      label: 'Autonomous Profiling',
      sublabel: 'Statistical Baselines',
      desc: 'Self-calibrating algorithms continuously profiling column distributions, cardinality, and completeness across streaming and batch pipelines without manual SQL scripts.',
      tech: 'Autonomous Statistical Telemetry',
      icon: BarChart3,
      highlights: [
        'Automated Column Shape & Nullability Baselines',
        'Continuous Distribution Variance Monitoring',
        'Real-Time Semantic Classification'
      ]
    },
    {
      id: 'ingestion-firewalls',
      label: 'Ingestion Firewalls',
      sublabel: 'In-Flight Interception',
      desc: 'Real-time validation interlocks operating at producer boundaries, intercepting broken schemas, negative currency values, and foreign key violations in sub-milliseconds.',
      tech: 'In-Flight Quality Gates',
      icon: ShieldCheck,
      highlights: [
        'Sub-Millisecond Pipeline Ingestion Checks',
        'Automated Dead-Letter Routing',
        'Zero-Impact High-Throughput Filtering'
      ]
    },
    {
      id: 'anomaly-detection',
      label: 'Anomaly Detection',
      sublabel: 'Unsupervised ML',
      desc: 'Machine learning heuristics monitoring multi-variate correlations and volume patterns, alerting engineers to subtle data corruption before it reaches downstream consumers.',
      tech: 'Multi-Variate Drift Heuristics',
      icon: Activity,
      highlights: [
        'Unsupervised Multi-Dimensional Drift Detection',
        'Intelligent Volume & Freshness Alerting',
        'Elimination of False-Positive Alert Fatigue'
      ]
    },
    {
      id: 'entity-resolution',
      label: 'Entity Resolution',
      sublabel: 'Golden Record Matching',
      desc: 'Deterministic and probabilistic record linkage resolving disparate customer, vendor, and material records into authoritative, deduplicated golden entities.',
      tech: 'Probabilistic Graph Linkage',
      icon: Database,
      highlights: [
        'Deterministic & Fuzzy Entity Resolution',
        'Automated Survivorship Rules',
        'Cross-Platform Entity ID Harmonization'
      ]
    },
    {
      id: 'automated-remediation',
      label: 'Automated Remediation',
      sublabel: 'Self-Healing DAGs',
      desc: 'Programmatic self-healing workflows automatically correcting predictable format discrepancies, resolving missing attributes, and re-injecting valid payloads.',
      tech: 'Declarative Self-Healing Fabric',
      icon: RefreshCw,
      highlights: [
        'Automated Formatting & Standardization',
        'Intelligent Attribute Imputation',
        'Quarantine Re-Injection Orchestration'
      ]
    },
    {
      id: 'closed-loop-sync',
      label: 'Closed-Loop Sync',
      sublabel: 'Bidirectional Reverse-ETL',
      desc: 'Continuous reverse-ETL synchronizing validated golden records back into transactional SAP S/4HANA systems and frontline operational applications.',
      tech: 'Operational Reverse-ETL',
      icon: Workflow,
      highlights: [
        'Direct S/4HANA Master Record Synchronization',
        'Bi-directional Delta Replication',
        'Zero-Drift Operational Convergence'
      ]
    }
  ];

  // Section 3: Enterprise Data Quality Challenges (6 Comprehensive Cards)
  const dataQualityChallenges = [
    {
      icon: AlertTriangle,
      tag: 'SILENT CONTAMINATION',
      title: 'Silent Metric & Financial Contamination',
      desc: 'Undetected null spikes, inverted exchange rates, and corrupted decimals silently seep into executive reporting, causing leadership to make strategic decisions on false figures.',
      footer: 'Automated Distribution Anomaly Firewalls'
    },
    {
      icon: Database,
      tag: 'ENTITY FRAGMENTATION',
      title: 'Rampant Master Data Duplication',
      desc: 'Fragmented customer and vendor entities spread across disconnected CRM, billing, and ERP silos, creating conflicting records with no single source of truth.',
      footer: 'Probabilistic Golden Record Entity Resolution'
    },
    {
      icon: XCircle,
      tag: 'SCHEMA DRIFT',
      title: 'Unannounced Upstream Schema Drift',
      desc: 'Application releases modify column data types and alter JSON structures without notice, causing downstream lakehouse transformations to fail mid-execution.',
      footer: 'Declarative Schema Contract Gates in CI/CD'
    },
    {
      icon: RefreshCw,
      tag: 'MANUAL DEBT',
      title: 'Costly Manual Cleanup Spreadsheets',
      desc: 'Data steward teams waste thousands of hours manually reviewing exception lists and reconciling duplicate rows in uncontrolled, error-prone spreadsheets.',
      footer: 'Self-Healing Pipeline Remediation DAGs'
    },
    {
      icon: Zap,
      tag: 'AI HALLUCINATION RISK',
      title: 'Skewed AI Training & Machine Learning Risk',
      desc: 'Garbage-in, garbage-out data pipelines feed corrupted feature sets to predictive models and GenAI agents, triggering catastrophic business forecast failures.',
      footer: 'Continuous Feature Store Validation & Drift Tracking'
    },
    {
      icon: Scale,
      tag: 'REGULATORY RISK',
      title: 'Regulatory & Audit Compliance Penalties',
      desc: 'Inability to prove historical data accuracy and mathematical auditability exposes organizations to heavy fines under IFRS, SOX, and global tax authorities.',
      footer: 'Deterministic Cryptographic Quality Audit Trails'
    }
  ];

  // Section 5: Side-by-side Architectural Comparison Matrix
  const architecturalComparison = [
    {
      dimension: 'Detection Timing',
      legacyApproach: 'Post-hoc discovery occurring days later when financial analysts or dashboard consumers notice broken KPI totals.',
      modernApproach: 'In-flight sub-millisecond quality firewalls intercepting anomalies at stream and batch ingestion boundaries.',
      statusBadge: 'IN-FLIGHT DEFENSE'
    },
    {
      dimension: 'Rule Maintenance',
      legacyApproach: 'Thousands of brittle, hardcoded SQL rules and regex scripts that constantly break as business processes evolve.',
      modernApproach: 'Self-calibrating statistical machine learning baselines that adapt dynamically to natural business seasonality.',
      statusBadge: 'ML BASELINES'
    },
    {
      dimension: 'Entity Resolution',
      legacyApproach: 'Manual matching queues in disconnected spreadsheets, resulting in stale and unresolved customer duplicates.',
      modernApproach: 'Automated probabilistic entity resolution with graph matching algorithms generating deterministic golden records.',
      statusBadge: 'GOLDEN RECORD'
    },
    {
      dimension: 'Remediation Workflow',
      legacyApproach: 'Manual ticket creation, finger-pointing between teams, and ad-hoc database updates without audit logs.',
      modernApproach: 'Automated dead-letter quarantine with programmable self-healing rules and auditable re-injection pipelines.',
      statusBadge: 'SELF-HEALING'
    },
    {
      dimension: 'Operational Convergence',
      legacyApproach: 'Cleansed data remains trapped in reporting warehouses, leaving operational ERPs full of dirty legacy records.',
      modernApproach: 'Closed-loop reverse-ETL streaming validated master entities back into core SAP S/4HANA systems in real time.',
      statusBadge: 'CLOSED-LOOP'
    }
  ];

  // Section 5: Protocol Sandbox Tab Specifications
  const protocolDetails = {
    'anomaly-firewall': {
      badge: 'IN-FLIGHT ANOMALY FIREWALL',
      title: 'Sub-Millisecond Ingestion Quality Gates',
      desc: 'Intercept invalid payloads, corrupt currencies, and broken foreign-key relationships at the API and streaming boundary before records enter analytical storage.',
      specs: [
        { label: 'Evaluation Latency', val: '< 2.5 Milliseconds' },
        { label: 'Coverage', val: 'Streaming & Batch ELT' },
        { label: 'Detection Logic', val: 'Statistical & Contractual' },
        { label: 'Quarantine Action', val: 'Dead-Letter Queue Isolation' }
      ],
      steps: [
        { name: 'Schema Compilation', detail: 'Parses incoming payload payloads against registered declarative data contracts.' },
        { name: 'Statistical Verification', detail: 'Evaluates distribution variance against historical rolling statistical baselines.' },
        { name: 'Gate Interception', detail: 'Instantly routes compliant records to production and isolates anomalies to quarantine.' }
      ]
    },
    'golden-record': {
      badge: 'GOLDEN RECORD ENGINE',
      title: 'Probabilistic Entity Matching & Deduplication',
      desc: 'Harmonize fragmented customer, supplier, and material entities across multi-cloud ERPs and CRMs into authoritative, deduplicated golden profiles.',
      specs: [
        { label: 'Matching Algorithm', val: 'Probabilistic & Fuzzy Graph' },
        { label: 'Deduplication Speed', val: 'Up to 50K Records/sec' },
        { label: 'Survivorship Mode', val: 'Configurable Attribute Priority' },
        { label: 'Lineage Provenance', val: 'Deterministic Source Linkage' }
      ],
      steps: [
        { name: 'Candidate Blocking', detail: 'Partitions incoming entity datasets into high-probability matching clusters.' },
        { name: 'Multi-Field Scoring', detail: 'Computes weighted similarity across names, tax IDs, addresses, and phone numbers.' },
        { name: 'Golden Survivorship', detail: 'Applies source-trust rules to synthesize the definitive single source of truth.' }
      ]
    },
    'self-healing': {
      badge: 'SELF-HEALING PIPELINES',
      title: 'Automated Quarantine & Remediation DAGs',
      desc: 'Isolate bad data without breaking downstream analytics pipelines, apply programmatic formatting and healing rules, and re-inject validated records automatically.',
      specs: [
        { label: 'Pipeline Interruption', val: 'Zero Pipeline Downtime' },
        { label: 'Remediation Logic', val: 'Declarative Python & SQL DAGs' },
        { label: 'Re-Injection Mode', val: 'Idempotent Automated Retry' },
        { label: 'Audit Trail', val: '100% Cryptographic Log Trace' }
      ],
      steps: [
        { name: 'Quarantine Tagging', detail: 'Tags rejected rows with explicit violation reason codes and source trace metadata.' },
        { name: 'Programmatic Correction', detail: 'Executes rule-based normalization, address cleansing, and automated value imputation.' },
        { name: 'Safe Re-Ingestion', detail: 'Validates healed records through quality gates and commits them to destination tables.' }
      ]
    }
  };

  // Section 6: Phased Transformation Stages
  const transformationPhases = [
    {
      phase: 'STAGE ONE',
      title: 'Enterprise Data Health Diagnostic & Profiling Baseline',
      focus: 'Automated scanning of multi-cloud data estates, profiling historical distribution patterns, and calculating data health scorecards.',
      deliverable: 'Comprehensive Data Health Diagnostic & Anomaly Hotspot Report',
      icon: Search
    },
    {
      phase: 'STAGE TWO',
      title: 'Declarative Quality Contracts & Ingestion Firewalls',
      focus: 'Defining producer schema contracts, setting automated nullability and type interlocks, and deploying in-flight filter nodes.',
      deliverable: 'Active Ingestion Firewalls & CI/CD Contract Gates',
      icon: ShieldCheck
    },
    {
      phase: 'STAGE THREE',
      title: 'ML Anomaly Detection & Master Entity Resolution',
      focus: 'Calibrating unsupervised drift models, deploying fuzzy deduplication rules, and configuring golden record repositories.',
      deliverable: 'Automated Golden Record Engine & Drift Observability Console',
      icon: Database
    },
    {
      phase: 'STAGE FOUR',
      title: 'Closed-Loop Automated Remediation & Reverse-ETL',
      focus: 'Operationalizing self-healing quarantine DAGs, connecting bidirectional ERP reverse-syncs, and launching executive SLA scorecards.',
      deliverable: 'Enterprise-Wide Autonomous Data Quality Fabric',
      icon: RefreshCw
    }
  ];

  // Section 7: Executive FAQs
  const dataQualityFaqs = [
    {
      question: 'How does autonomous data quality differ from traditional manual data cleansing?',
      answer: 'Traditional data cleansing is reactive, manual, and episodic—often conducted in static spreadsheets only after executive reports show errors. Autonomous data quality embeds automated validation firewalls directly inside stream and batch pipelines, utilizing statistical machine learning to detect distribution shifts and resolve duplicate entities in real time before data enters warehouse storage.'
    },
    {
      question: 'What are in-flight data quality firewalls, and how do they prevent pipeline outages?',
      answer: 'In-flight quality firewalls are low-latency validation gates positioned at the ingestion boundary of APIs, event streams (Kafka), and ELT pipelines. They evaluate each incoming payload against declarative schema contracts and statistical rules in under 2.5 milliseconds. Non-conforming records are isolated to dead-letter queues while valid data continues without delay, preventing pipeline lockups.'
    },
    {
      question: 'How does probabilistic entity resolution generate authoritative golden records?',
      answer: 'Probabilistic entity resolution uses fuzzy string matching, semantic classification, and graph relationship clustering to evaluate records from disparate ERP, CRM, and billing systems. It calculates weighted confidence scores across multiple fields (such as tax IDs, phone numbers, and addresses) and synthesizes an authoritative golden record governed by configurable survivorship rules.'
    },
    {
      question: 'Can data quality checks be applied to real-time streaming pipelines without causing latency bottlenecks?',
      answer: 'Yes. KNOOVIQ leverages lightweight, compiled validation engines that perform in-memory schema evaluation and statistical threshold testing without disk-bound overhead. This enables microsecond-level validation across high-throughput streaming architectures (such as Kafka or SAP Datasphere CDC) without degrading transactional performance.'
    },
    {
      question: 'How does closed-loop reverse-ETL synchronize validated data back into SAP and operational systems?',
      answer: 'Rather than leaving clean data stranded in analytical data warehouses, KNOOVIQ implements closed-loop reverse-ETL connectors. Once master data entities are deduplicated and validated, they are pushed back into transactional systems like SAP S/4HANA via clean core APIs, ensuring operational staff and frontline systems work with identical, flawless records.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#0070C0] selection:text-white">      {/* =========================================================================
          SECTION 1: HERO SECTION (AI Agents Style Full Bleed Panoramic Background)
          IMAGE: /images/data-quality/enterprise_quality_observability_hero.png
          ========================================================================= */}
      <section className="relative w-full min-h-[560px] sm:min-h-[620px] lg:min-h-[660px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 overflow-hidden bg-slate-950 text-white">
        {/* Full-Bleed 16:9 Panoramic Image - AI Agents Style */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/data-quality/enterprise_quality_observability_hero.png"
            alt="Enterprise Data Quality Control Center and Autonomous Observability Fabric"
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
                  <span>Data Quality &amp; Observability</span>
                </div>
              </div>

              {/* Animated Headline with High-Contrast Typography */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                Enterprise <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-cyan-400">
                  Data Quality &amp; Autonomous Observability
                </span>
              </h1>

              {/* Subtitle with High Legibility */}
              <p className="text-base sm:text-lg text-slate-100 leading-relaxed font-normal pt-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                Continuous data profiling, automated anomaly firewalls, declarative quality contracts, and closed-loop golden record remediation across enterprise lakehouses and operational ERP backbones.
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
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Continuous Anomaly Firewalls</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-emerald-200 shadow-sm">
                <Database className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Automated Golden Records</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-sky-200 shadow-sm">
                <Activity className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Zero-Lag Pipeline Observability</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: EXECUTIVE PERSPECTIVE (Clean Light Corporate Theme - Large Legible Text)
          IMAGE 2 OF 3: /images/data-quality/quality_profiling.jpg
          ========================================================================= */}
      <section id="quality-evolution" className="py-24 bg-gradient-to-b from-white via-[#F8FBFE] to-white border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-300 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#0070C0]">
                <Activity className="w-4 h-4 text-[#0070C0]" />
                <span>EXECUTIVE DATA QUALITY PERSPECTIVE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
                Architecting the Autonomous <span className="text-[#0070C0]">Data Quality &amp; Observability Fabric</span>
              </h2>

              <div className="border-l-4 border-[#0070C0] border-y border-r border-slate-300 pl-5 py-3.5 bg-gradient-to-r from-sky-50/80 via-sky-50/30 to-transparent rounded-r-2xl">
                <p className="text-base sm:text-lg font-semibold text-slate-800 leading-relaxed italic">
                  &ldquo;Data quality cannot be an afterthought audited only when executive dashboards break or machine learning predictions fail. In modern enterprise architectures, quality is an autonomous, self-healing control plane embedded at ingestion boundaries, intercepting corrupt records in-flight before they pollute operational ERP and analytics layers.&rdquo;
                </p>
              </div>

              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
                Knooviq shifts enterprise data quality from reactive manual cleanup spreadsheets into an active, continuous defense fabric. We deploy automated profiling algorithms that detect statistical distribution shifts, enforce declarative schema contracts, and orchestrate automated deduplication without interrupting transactional throughput.
              </p>

              {/* 3 Executive Pillars (Clear, Large, Highly Legible Text) */}
              <div className="space-y-4 pt-2">
                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-950">Autonomous Statistical Profiling</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Continuous monitoring of record volumes, distribution variance, nullability thresholds, and semantic drift across all ingestion streams.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-950">In-Flight Quality Firewalls</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Programmatic data contract gates intercepting malformed payloads, invalid currencies, and corrupted foreign keys at producer boundaries.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-950">Closed-Loop Golden Record Healing</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Automated entity matching, multi-source resolution, and bidirectional reverse-ETL synchronizing validated master records back to source ERPs.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Interactive Evolution Visual (IMAGE 5: Architecting Autonomous Quality & Observability Fabric) */}
            <div className="lg:col-span-6 space-y-4">
              
              <div 
                onClick={() => setActiveJourneyStep((activeJourneyStep + 1) % journeySteps.length)}
                title="Click image to advance to next architecture step"
                className="relative rounded-2xl overflow-hidden border-2 border-slate-300 shadow-xl bg-slate-900 group h-96 sm:h-[440px] lg:h-[490px] w-full cursor-pointer"
              >
                {/* IMAGE 5: Full box fit, no frame */}
                <img
                  src="/images/data-quality/architecting_autonomous_quality_fabric.png"
                  alt="Architecting the Autonomous Data Quality & Observability Fabric"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-lg bg-slate-900/90 backdrop-blur-md border border-cyan-400/50 text-xs sm:text-sm font-mono font-bold text-cyan-300 flex items-center gap-2 shadow-lg z-10">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>QUALITY FOCUS: {journeySteps[activeJourneyStep].label.toUpperCase()}</span>
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
              Critical Failures in Legacy Data Quality Management
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Why traditional manual data cleansing and fragmented validation rules generate operational risks and analytics debt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {dataQualityChallenges.map((item, idx) => {
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
              INTERCONNECTED DATA QUALITY FABRIC
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              The KNOOVIQ Autonomous Data Quality Mesh
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Explore the eight mutually reinforcing layers of our continuous data quality foundation. Hover over any segment to inspect its architectural role.
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
                        QUALITY CORE
                      </span>
                      <div className="text-sm sm:text-base font-black text-white leading-tight">
                        Autonomous Observability
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
          IMAGE 3 OF 3: /images/data-quality/remediation_mesh.jpg
          ========================================================================= */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3.5">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#0070C0] uppercase">
              TOPOLOGICAL ARCHITECTURE BLUEPRINT
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950">
              Autonomous Data Quality &amp; Remediation Matrix
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Examine the concrete architectural difference between legacy post-ingestion cleanup and KNOOVIQ autonomous in-flight data quality fabrics.
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
              Interactive Quality Protocols
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
                      <th className="py-4 px-6 font-bold w-1/4">Quality Dimension</th>
                      <th className="py-4 px-6 font-bold w-1/3 text-rose-800 bg-rose-50/70">Legacy Data Cleansing</th>
                      <th className="py-4 px-6 font-bold w-1/3 text-[#0070C0] bg-sky-50/70">KNOOVIQ Autonomous Quality Fabric</th>
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
                    src="/images/data-quality/remediation_mesh.jpg"
                    alt="Enterprise Data Quality Self-Healing Remediation Mesh and Ingestion Firewalls"
                    className="w-full h-full object-cover object-center rounded-2xl transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs sm:text-sm p-3.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-white">
                    <div className="flex items-center gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-cyan-400" />
                      <span className="font-bold">Autonomous Remediation Control Plane</span>
                    </div>
                    <span className="font-mono text-xs text-cyan-300 font-bold uppercase">
                      ZERO-ANOMALY PIPELINE FABRIC
                    </span>
                  </div>
                </div>

                {/* Technical Layers Checklist (Clear, Visible Text) */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div className="text-xs font-mono text-[#0070C0] uppercase font-bold mb-1">
                      LAYER ONE: PROFILING
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">Autonomous Ingestion Profilers</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Continuous real-time statistical evaluation calculating cardinality, completeness, and distribution baselines.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div className="text-xs font-mono text-[#0070C0] uppercase font-bold mb-1">
                      LAYER TWO: INGESTION GATES
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">In-Flight Quality Firewalls</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Sub-millisecond data contracts intercepting schema drift and invalid business payloads before storage arrival.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div className="text-xs font-mono text-[#0070C0] uppercase font-bold mb-1">
                      LAYER THREE: RESOLUTION
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">Probabilistic Golden Record Match</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Multi-field fuzzy graph linkage synthesizing contradictory customer, vendor, and product entity fragments.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div className="text-xs font-mono text-[#0070C0] uppercase font-bold mb-1">
                      LAYER FOUR: OPERATIONALIZATION
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">Closed-Loop S/4HANA Reverse-ETL</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Continuous synchronization of cleansed master records back into core ERP backbones with zero transactional drift.
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* TAB 3: Interactive Quality Protocols Sandbox */}
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
                  onClick={() => setActiveProtocolTab('anomaly-firewall')}
                  className={`flex-1 py-2 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    activeProtocolTab === 'anomaly-firewall'
                      ? 'bg-[#0070C0] text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  Anomaly Firewalls
                </button>
                <button
                  onClick={() => setActiveProtocolTab('golden-record')}
                  className={`flex-1 py-2 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    activeProtocolTab === 'golden-record'
                      ? 'bg-[#0070C0] text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  Golden Record Match
                </button>
                <button
                  onClick={() => setActiveProtocolTab('self-healing')}
                  className={`flex-1 py-2 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    activeProtocolTab === 'self-healing'
                      ? 'bg-[#0070C0] text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  Self-Healing DAGs
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
                    Quality Protocol Execution Sequence
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
              Phased Enterprise Data Quality Roadmap
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              A structured, risk-mitigated journey from reactive manual data repair to an automated, self-healing quality fabric.
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
              <span>EXECUTIVE CLARIFICATIONS &bull; DATA QUALITY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#005A9C] via-[#0070C0] to-sky-500">Data Quality Questions</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
              Addressing key strategic, operational, and architectural data quality considerations for enterprise technology leaders.
            </p>
          </div>

          <div className="space-y-4">
            {dataQualityFaqs.map((faq, index) => {
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
            Ready to Eliminate Bad Data with an Autonomous Quality Fabric?
          </h2>

          <p className="text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed font-normal">
            Collaborate with senior data architects and quality engineers to deploy in-flight anomaly firewalls, automated golden record resolution, and closed-loop ERP reverse-synchronization.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
            <button
              onClick={() => onOpenContact ? onOpenContact('Enterprise Data Quality Workshop') : undefined}
              className="px-9 py-4 rounded-xl font-bold text-sm sm:text-base text-slate-900 bg-white hover:bg-sky-50 shadow-xl transition-all flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              <span>Schedule Quality Workshop</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#0070C0]" />
            </button>
            <Link
              to="/digital-intelligence/data-platforms"
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold uppercase tracking-wider backdrop-blur-md flex items-center gap-2 group transition-all w-full sm:w-auto justify-center text-sm"
            >
              <span>Explore Data Platforms</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-7 text-xs sm:text-sm text-sky-100 font-mono">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              <span>Zero-Impact In-Flight Validation</span>
            </div>
            <div className="flex items-center gap-2">
              <Database className="w-4 h-4 text-cyan-200" />
              <span>Automated Golden Record Resolution</span>
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

export default DataQualityPage;
