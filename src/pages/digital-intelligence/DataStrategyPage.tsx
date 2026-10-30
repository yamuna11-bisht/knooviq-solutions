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
  XCircle
} from 'lucide-react';

interface DataStrategyPageProps {
  onOpenContact?: (defaultTopic?: string) => void;
}

export const DataStrategyPage: React.FC<DataStrategyPageProps> = ({
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
  const [activeSandboxTab, setActiveSandboxTab] = useState<'comparison' | 'layers' | 'governance'>('comparison');

  // State for Section 7: FAQ Accordion
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Section 4: Circular Chevron Segments (8 Interlocking Layers)
  const wheelSegments = [
    {
      id: 'semantic-fabric',
      shortTag: 'FABRIC',
      title: 'Unified Semantic Data Fabric',
      desc: 'Decoupled logical business layer unifying distributed transactional and analytical data domains.',
      badge: 'LOGICAL ABSTRACTION',
      metric: 'Single Source of Truth',
      side: 'right',
      color: '#0070C0',
      textColor: 'text-sky-400',
      bgGlow: 'rgba(0, 112, 192, 0.35)',
      icon: Layers
    },
    {
      id: 'data-mesh',
      shortTag: 'MESH',
      title: 'Distributed Domain Data Mesh',
      desc: 'Domain-oriented decentralized data ownership with standardized enterprise governance federations.',
      badge: 'DOMAIN OWNERSHIP',
      metric: 'Decentralized Data Products',
      side: 'right',
      color: '#0284C7',
      textColor: 'text-cyan-400',
      bgGlow: 'rgba(2, 132, 199, 0.35)',
      icon: Network
    },
    {
      id: 'zero-copy',
      shortTag: 'VIRT',
      title: 'Zero-Copy Data Virtualization',
      desc: 'In-situ query execution across multi-cloud stores eliminating redundant ETL pipelines and data duplication.',
      badge: 'ZERO-COPY QUERIES',
      metric: 'Direct Storage Federation',
      side: 'right',
      color: '#06B6D4',
      textColor: 'text-cyan-300',
      bgGlow: 'rgba(6, 182, 212, 0.35)',
      icon: Zap
    },
    {
      id: 'master-data',
      shortTag: 'MDG',
      title: 'Master Data Lineage & Governance',
      desc: 'Automated golden record harmonization, cataloging, and end-to-end audit provenance from source to consumption.',
      badge: 'CONTINUOUS LINEAGE',
      metric: 'Deterministic Golden Records',
      side: 'right',
      color: '#10B981',
      textColor: 'text-emerald-400',
      bgGlow: 'rgba(16, 185, 129, 0.35)',
      icon: ShieldCheck
    },
    {
      id: 'streaming-cdc',
      shortTag: 'STREAM',
      title: 'Real-Time Streaming & CDC',
      desc: 'Sub-second event-driven Change Data Capture synchronizing enterprise transactional backbones continuously.',
      badge: 'EVENT-DRIVEN FABRIC',
      metric: 'Continuous Delta Propagation',
      side: 'left',
      color: '#F59E0B',
      textColor: 'text-amber-400',
      bgGlow: 'rgba(245, 158, 11, 0.35)',
      icon: Activity
    },
    {
      id: 'sovereign-cleanroom',
      shortTag: 'CLEAN',
      title: 'Sovereign Clean Rooms & Privacy',
      desc: 'Cryptographically isolated multi-party analytical environments enforcing zero row-level data leakage.',
      badge: 'SOVEREIGN ISOLATION',
      metric: 'Zero-Trust Data Boundaries',
      side: 'left',
      color: '#EC4899',
      textColor: 'text-pink-400',
      bgGlow: 'rgba(236, 72, 153, 0.35)',
      icon: Lock
    },
    {
      id: 'open-lakehouse',
      shortTag: 'LAKE',
      title: 'Open Table Lakehouse Integration',
      desc: 'Decoupled compute engines querying standard open table formats to prevent proprietary storage lock-in.',
      badge: 'OPEN ARCHITECTURE',
      metric: 'Decoupled Compute & Storage',
      side: 'left',
      color: '#8B5CF6',
      textColor: 'text-purple-400',
      bgGlow: 'rgba(139, 92, 246, 0.35)',
      icon: Database
    },
    {
      id: 'quality-firewall',
      shortTag: 'GUARD',
      title: 'Autonomous Data Quality Firewalls',
      desc: 'Automated anomaly detection, schema drift prevention, and deterministic validation policies at ingestion borders.',
      badge: 'SCHEMA DEFENSE',
      metric: 'Automated Ingestion Interlocks',
      side: 'left',
      color: '#6366F1',
      textColor: 'text-indigo-400',
      bgGlow: 'rgba(99, 102, 241, 0.35)',
      icon: FileCheck
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
      id: 'mesh',
      label: 'Domain Data Mesh',
      sublabel: 'Federated Ownership',
      desc: 'Transitioning from monolithic data warehouses to autonomous domain data products, governed by centralized enterprise policies and automated interoperability standards.',
      tech: 'Enterprise Semantic Framework',
      icon: Network,
      highlights: [
        'Domain-Oriented Data Product Architecture',
        'Standardized Cross-Domain Data Contracts',
        'Federated Computational Governance'
      ]
    },
    {
      id: 'virtualization',
      label: 'Zero-Copy Virtualization',
      sublabel: 'In-Situ Federation',
      desc: 'Eliminating fragile, delayed ETL duplication by executing high-performance distributed queries directly across transactional backbones and cloud stores.',
      tech: 'SAP Datasphere & Federation Layer',
      icon: Zap,
      highlights: [
        'Direct Query Pushdown Without Duplication',
        'Unified Business Semantics Across Heterogeneous Silos',
        'Sub-Second In-Memory Analytical Execution'
      ]
    },
    {
      id: 'governance',
      label: 'Master Data Governance',
      sublabel: 'Deterministic Trust',
      desc: 'Continuous harmonization of core business entities across finance, procurement, and supply chain, providing end-to-end cryptographic lineage from raw source to board report.',
      tech: 'Automated Lineage & MDG Core',
      icon: ShieldCheck,
      highlights: [
        'Golden Record Entity Resolution',
        'Full Breadth Source-to-Consumption Lineage Traceability',
        'Deterministic Compliance & Access Policy Enforcement'
      ]
    },
    {
      id: 'streaming',
      label: 'Real-Time Streaming Fabric',
      sublabel: 'Event-Driven Deltas',
      desc: 'Capturing transactional delta events at the database transaction log layer to power continuous analytical consumption without batch latency.',
      tech: 'High-Throughput Streaming Backbone',
      icon: Activity,
      highlights: [
        'Microsecond Transaction Log Change Data Capture',
        'Zero-Impact Replication Across Mission-Critical ERPs',
        'Continuous Stream Processing & Dynamic Enrichment'
      ]
    },
    {
      id: 'open-lakehouse',
      label: 'Open Table Lakehouse',
      sublabel: 'Decoupled Compute',
      desc: 'Unifying structured transactional data and unstructured sensory assets within open table formats, ensuring enterprise sovereignty and avoiding proprietary storage lock-in.',
      tech: 'Open Lakehouse Architecture',
      icon: Database,
      highlights: [
        'Multi-Engine Decoupled Query Processing',
        'ACID Guarantees on Distributed Object Storage',
        'Zero Proprietary Vendor Storage Dependencies'
      ]
    },
    {
      id: 'cleanrooms',
      label: 'Sovereign Clean Rooms',
      sublabel: 'Cryptographic Privacy',
      desc: 'Facilitating secure multi-entity data collaboration and advanced algorithmic modeling within air-gapped enclaves where proprietary underlying records remain completely confidential.',
      tech: 'Zero-Trust Sovereign Fabric',
      icon: Lock,
      highlights: [
        'Differential Privacy & Mathematical Anonymization',
        'Air-Gapped Multi-Party Computation Enclaves',
        'Immutable Cryptographic Audit Trails'
      ]
    }
  ];

  // Section 3: Enterprise Data Challenges
  const dataChallenges = [
    {
      icon: Database,
      tag: 'DATA FRAGMENTATION',
      title: 'Heterogeneous Silos & Schema Drift',
      desc: 'Critical enterprise data remains locked inside disparate ERP instances, cloud applications, legacy databases, and untracked file shares, resulting in inconsistent business definitions.',
      footer: 'Unified Logical Data Fabric'
    },
    {
      icon: AlertTriangle,
      tag: 'GOVERNANCE DEBT',
      title: 'Dark Data & Unregulated Sprawl',
      desc: 'Massive accumulation of untracked analytical copies, duplicated spreadsheets, and stale lakehouse extracts exposes organizations to regulatory penalties and compliance risks.',
      footer: 'Automated Metadata Cataloging'
    },
    {
      icon: Zap,
      tag: 'LATENCY BOTTLENECK',
      title: 'Brittle Overnight Batch ETL',
      desc: 'Overnight batch ingestion scripts create operational lag, frequently fail on schema changes, and prevent executive leadership from acting on intraday market developments.',
      footer: 'Real-Time Streaming & Zero-Copy Federation'
    },
    {
      icon: Scale,
      tag: 'SEMANTIC DISSONANCE',
      title: 'Conflicting Corporate Metrics',
      desc: 'Different business units report incompatible figures for revenue, margins, and customer lifetime value due to uncoordinated metric calculations and fragmented data ownership.',
      footer: 'Universal Semantic Business Layer'
    },
    {
      icon: Lock,
      tag: 'REGULATORY RISK',
      title: 'Cross-Border Sovereignty Mandates',
      desc: 'Global data privacy regulations mandate sovereign data residency and strict lineage traceability that legacy lakehouse architectures cannot enforce.',
      footer: 'Sovereign Data Clean Rooms & Air-Gapped RBAC'
    },
    {
      icon: RefreshCw,
      tag: 'INFRASTRUCTURE SPRAWL',
      title: 'Proprietary Storage & Compute Lock-In',
      desc: 'Tightly coupled cloud analytics architectures create runaway egress fees and rigid technological dependencies that prevent agile multi-cloud flexibility.',
      footer: 'Open Table Formats & Decoupled Architecture'
    }
  ];

  // Section 5: Side-by-side Architectural Comparison Matrix
  const architecturalComparison = [
    {
      dimension: 'Storage & Ingestion',
      legacyApproach: 'Repeated physical data copies extracted via overnight batch ETL jobs into centralized data warehouses.',
      modernApproach: 'Zero-copy logical virtualization federating direct in-situ queries with sub-second streaming deltas.',
      statusBadge: 'ZERO DUPLICATION'
    },
    {
      dimension: 'Business Semantics',
      legacyApproach: 'Fragmented metric logic re-coded inside individual reporting tools, causing departmental metric disputes.',
      modernApproach: 'Canonical business semantic layer shared across ERP, analytics tools, and autonomous AI systems.',
      statusBadge: 'SINGLE TRUTH'
    },
    {
      dimension: 'Ownership Model',
      legacyApproach: 'Overburdened central data engineering teams creating severe analytical backlog for business units.',
      modernApproach: 'Domain-oriented Data Mesh empowering business squads to build and publish self-serve data products.',
      statusBadge: 'DOMAIN AUTONOMY'
    },
    {
      dimension: 'Governance & Audits',
      legacyApproach: 'Manual documentation spreadsheets, untracked spreadsheets, and unverifiable lineage provenance.',
      modernApproach: 'Deterministic end-to-end lineage mapping from raw transactional tables directly to board decks.',
      statusBadge: 'CONTINUOUS AUDIT'
    },
    {
      dimension: 'Cloud Sovereignty',
      legacyApproach: 'Proprietary cloud data warehouse file formats creating high egress penalties and hyperscaler lock-in.',
      modernApproach: 'Decoupled compute engines querying standard open table formats over sovereign object storage.',
      statusBadge: 'OPEN STANDARDS'
    }
  ];

  // Section 6: Phased Transformation Stages
  const transformationPhases = [
    {
      phase: 'STAGE ONE',
      title: 'Enterprise Data Maturity & Discovery Audit',
      focus: 'Assessment of current-state data fragmentation, pipeline dependencies, catalog hygiene, and regulatory exposures across all corporate systems.',
      deliverable: 'Strategic Blueprint & Target Architecture Roadmap',
      icon: Search
    },
    {
      phase: 'STAGE TWO',
      title: 'Semantic Modeling & Federation Blueprint',
      focus: 'Formulation of universal business semantic definitions, data mesh domain boundaries, and zero-copy virtualization topologies.',
      deliverable: 'Enterprise Data Dictionary & Domain Contract Framework',
      icon: Layers
    },
    {
      phase: 'STAGE THREE',
      title: 'Unified Data Fabric & Streaming Modernization',
      focus: 'Deployment of high-performance CDC streaming connectors, zero-copy virtualization nodes, and automated data quality firewalls.',
      deliverable: 'Live Production Data Fabric & In-Situ Federation',
      icon: Zap
    },
    {
      phase: 'STAGE FOUR',
      title: 'Autonomous Governance & Value Realization',
      focus: 'Operationalization of automated master data cataloging, deterministic lineage graphs, self-service data products, and sovereign clean rooms.',
      deliverable: 'Enterprise-Wide Governed Self-Service Data Mesh',
      icon: ShieldCheck
    }
  ];

  // Section 7: Executive FAQs
  const dataStrategyFaqs = [
    {
      question: 'How does an Enterprise Data Strategy differ from traditional Data Warehousing?',
      answer: 'Traditional data warehousing relies on centralized, physically copied data models updated via slow overnight batch ETL pipelines. A modern Enterprise Data Strategy implements a decoupled Data Mesh and Logical Data Fabric, enabling distributed business domains to own their data products while a universal semantic layer federates real-time queries in-situ without redundant data duplication.'
    },
    {
      question: 'What is Zero-Copy Data Virtualization, and how does it prevent storage sprawl?',
      answer: 'Zero-copy virtualization executes analytical queries directly where data resides—whether in operational SAP S/4HANA instances, cloud lakehouses, or external SaaS applications—without creating intermediate physical copies. This eliminates redundant cloud storage costs, mitigates pipeline failure risks, and ensures decisions are always based on live operational truth.'
    },
    {
      question: 'How does KNOOVIQ ensure seamless integration between SAP and non-SAP data ecosystems?',
      answer: 'We leverage advanced semantic virtualization platforms like SAP Datasphere in conjunction with modern open lakehouse standards (such as Apache Iceberg and Delta Lake). This preserves rich SAP business context, transactional hierarchies, and currency conversions while seamlessly joining with non-SAP hyperscaler data without complex extraction code.'
    },
    {
      question: 'How does deterministic data lineage support regulatory and audit compliance?',
      answer: 'Deterministic data lineage automatically maps every data element from its originating transactional system through every intermediate transformation directly to the final board report or BI visualization. During financial or regulatory audits, enterprises can instantly prove the exact origin, transformation rules, and access history of any metric.'
    },
    {
      question: 'What are Sovereign Data Clean Rooms, and when are they required?',
      answer: 'Sovereign Data Clean Rooms are secure, cryptographically isolated analytical environments that enable multiple internal business divisions or external partners to perform joint analytics without sharing raw underlying records. They are essential for organizations operating across multi-jurisdictional regions with stringent data residency and privacy mandates.'
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
            src="/images/data-strategy/transforming_enterprise_data_hero.png"
            alt="Enterprise Data Strategy & Semantic Fabric"
            className="w-full h-full object-cover object-bottom select-none contrast-[1.02]"
            style={{ transformOrigin: 'bottom center', imageRendering: '-webkit-optimize-contrast' }}
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.03, 1] }}
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
              <span>KNOOVIQ DIGITAL INTELLIGENCE &bull; DATA STRATEGY</span>
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
                Data Strategy &amp; Semantic Fabric
              </span>
            </motion.h1>

            {/* Subtitle with High Legibility */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-100 leading-relaxed font-normal max-w-2xl pt-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]"
            >
              Decentralized data mesh topologies, zero-copy query virtualization, automated master data governance, and sub-second streaming synchronization across multi-cloud enterprise footprints.
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
                <span>Zero-Copy Virtualization</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-emerald-200 cursor-default shadow-xs"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Unified Semantic Fabric</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-sky-200 cursor-default shadow-xs"
              >
                <Database className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Deterministic Lineage Governance</span>
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
                <Activity className="w-4 h-4 text-[#0070C0]" />
                <span>EXECUTIVE ARCHITECTURE PERSPECTIVE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
                Architecting the <span className="text-[#0070C0]">Sovereign Enterprise Data Mesh</span>
              </h2>

              <div className="border-l-4 border-[#0070C0] border-y border-r border-slate-300 pl-5 py-3.5 bg-gradient-to-r from-sky-50/80 via-sky-50/30 to-transparent rounded-r-2xl">
                <p className="text-base sm:text-lg font-semibold text-slate-800 leading-relaxed italic">
                  &ldquo;A competitive data strategy is no longer about consolidating physical bytes into a single monolithic lake—it is about establishing a unified logical semantic layer that federates queries in-situ with deterministic trust.&rdquo;
                </p>
              </div>

              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
                Knooviq helps enterprise leadership transition away from rigid, centralized batch architectures toward modern, domain-driven data meshes. We decouple business semantic models from underlying transactional schemas, empowering business units to self-serve validated analytical products with continuous compliance.
              </p>

              {/* 3 Executive Pillars (Clear, Large, Highly Legible Text) */}
              <div className="space-y-4 pt-2">
                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-950">Decoupled Business Semantics</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Canonical business definitions established independently from physical database column keys, ensuring metric stability across ERP upgrades.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-950">Zero-Copy In-Situ Query Pushdown</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Analytical queries are translated into native source dialects and executed directly inside operational databases, eliminating multi-terabyte data copying.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-950">Continuous Master Data Governance</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Automated golden record harmonization across customer, vendor, and material entities with deterministic cryptographic lineage tracking.
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
                  src="/images/data-strategy/sovereign_enterprise_data_mesh.jpg"
                  alt="Architecting the Sovereign Enterprise Data Mesh"
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
              ENTERPRISE FRICTION POINTS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950">
              Strategic Hurdles Facing Legacy Data Architectures
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Why traditional centralized data warehousing models fail in distributed enterprises and generate severe technical debt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {dataChallenges.map((item, idx) => {
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
              INTERCONNECTED ARCHITECTURAL FABRIC
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              The KNOOVIQ Unified Data Strategy Mesh
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Explore the eight mutually reinforcing layers of our modern enterprise data foundation. Hover over any segment to inspect its architectural role.
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
                        DATA MESH CORE
                      </span>
                      <div className="text-sm sm:text-base font-black text-white leading-tight">
                        Unified Data Strategy
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
                  <span>ACTIVE DATA MESH LAYER: {(hoveredWheelIndex !== null ? wheelSegments[hoveredWheelIndex].title : 'CONTINUOUS ROTATION').toUpperCase()}</span>
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
              Zero-Copy Lakehouse & Modern Data Strategy Matrix
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Examine the concrete architectural difference between legacy physical data warehouses and KNOOVIQ zero-copy semantic data fabrics.
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
              Full-Stack Blueprint Visual
            </button>
            <button
              onClick={() => setActiveSandboxTab('governance')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all border ${activeSandboxTab === 'governance'
                ? 'bg-[#0070C0] text-white border-[#0070C0] shadow-md'
                : 'bg-slate-100 text-slate-700 border-slate-200 hover:text-slate-950 hover:bg-slate-200'
                }`}
            >
              Deterministic Lineage Protocol
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
                      <th className="py-4 px-6 font-bold w-1/3 text-rose-800 bg-rose-50/70">Legacy Data Stacks</th>
                      <th className="py-4 px-6 font-bold w-1/3 text-[#0070C0] bg-sky-50/70">KNOOVIQ Modern Data Strategy</th>
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
          {(activeSandboxTab === 'layers' || activeSandboxTab === 'governance') && (
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
                    src="/images/data-strategy/solutions_mesh.jpg"
                    alt="Enterprise Zero-Copy Lakehouse and Semantic Virtualization Mesh Blueprint"
                    className="w-full h-full object-cover object-center rounded-2xl transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs sm:text-sm p-3.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-white">
                    <div className="flex items-center gap-2.5">
                      <Database className="w-4 h-4 text-cyan-400" />
                      <span className="font-bold">Full Stack Topological Reference</span>
                    </div>
                    <span className="font-mono text-xs text-cyan-300 font-bold uppercase">
                      OPEN LAKEHOUSE STANDARDS
                    </span>
                  </div>
                </div>

                {/* Technical Layers Checklist (Clear, Visible Text) */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div className="text-xs font-mono text-[#0070C0] uppercase font-bold mb-1">
                      LAYER ONE: OPERATIONAL SOURCES
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">Decoupled ERP & Lakehouses</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      SAP S/4HANA transactional backbones and external data streams federated without lock contention.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div className="text-xs font-mono text-[#0070C0] uppercase font-bold mb-1">
                      LAYER TWO: ZERO-COPY VIRTUALIZATION
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">Logical Pushdown Engine</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Direct queries executed in-situ across underlying nodes with zero intermediate staging copies.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div className="text-xs font-mono text-[#0070C0] uppercase font-bold mb-1">
                      LAYER THREE: UNIFIED BUSINESS SEMANTICS
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">Canonical Enterprise Metrics</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Unified KPI taxonomy with built-in multi-currency, calendar hierarchies, and audited dimensions.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div className="text-xs font-mono text-[#0070C0] uppercase font-bold mb-1">
                      LAYER FOUR: SECURE CONSUMPTION
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">Autonomous Analytics & AI</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Audited live dashboards, predictive models, and autonomous AI agents consuming validated data products.
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
              TRANSFORMATION METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950">
              Phased Enterprise Implementation Roadmap
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              A structured, risk-mitigated journey from fragmented operational silos to an enterprise-wide, governed data mesh.
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
              <span>EXECUTIVE CLARIFICATIONS &bull; DATA STRATEGY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#005A9C] via-[#0070C0] to-sky-500">Strategic Questions</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
              Addressing core architectural paradigms, zero-copy virtualization, regulatory compliance, and cross-platform semantic governance for technology leaders.
            </p>
          </div>

          <div className="space-y-4">
            {dataStrategyFaqs.map((faq, index) => {
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
            Ready to Unify Your Enterprise Data Architecture?
          </h2>

          <p className="text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed font-normal">
            Collaborate with senior enterprise architects to formulate your zero-copy virtualization roadmap, establish deterministic master data lineage, and decouple core business semantics.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
            <button
              onClick={() => onOpenContact ? onOpenContact('Enterprise Data Strategy Workshop') : undefined}
              className="px-9 py-4 rounded-xl font-bold text-sm sm:text-base text-slate-900 bg-white hover:bg-sky-50 shadow-xl transition-all flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              <span>Schedule Architecture Workshop</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#0070C0]" />
            </button>
            <Link
              to="/digital-intelligence/data-architecture"
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold uppercase tracking-wider backdrop-blur-md flex items-center gap-2 group transition-all w-full sm:w-auto justify-center"
            >
              <span>Explore Data Architecture</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-7 text-xs sm:text-sm text-sky-100 font-mono">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              <span>Clean Core Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-cyan-200" />
              <span>Zero Row-Level Leakage</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-300" />
              <span>Zero-Copy Query Virtualization</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default DataStrategyPage;
