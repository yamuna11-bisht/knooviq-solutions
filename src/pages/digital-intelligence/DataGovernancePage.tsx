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
  FileSearch,
  Check,
  Maximize2,
  X
} from 'lucide-react';

interface DataGovernancePageProps {
  onOpenContact?: (defaultTopic?: string) => void;
}

export const DataGovernancePage: React.FC<DataGovernancePageProps> = ({
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
  const [activeProtocolTab, setActiveProtocolTab] = useState<'column-lineage' | 'dynamic-masking' | 'data-contracts'>('column-lineage');

  // State for Section 7: FAQ Accordion
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // =========================================================================
  // DATA STRUCTURES
  // =========================================================================

  // Section 4: Circular Chevron Segments (8 Interlocking Governance Layers)
  const wheelSegments = [
    {
      id: 'automated-catalog',
      shortTag: 'CATALOG',
      title: 'Automated Metadata Catalog',
      desc: 'Autonomous discovery engines indexing distributed schemas, profiling data shapes, and classifying confidential fields across multi-cloud stores.',
      badge: 'CONTINUOUS DISCOVERY',
      metric: 'Real-Time Schema Profiling',
      side: 'right',
      color: '#0070C0',
      textColor: 'text-sky-400',
      bgGlow: 'rgba(0, 112, 192, 0.35)',
      icon: Database
    },
    {
      id: 'column-lineage',
      shortTag: 'LINEAGE',
      title: 'Cryptographic Column Lineage',
      desc: 'AST-parsed directed acyclic graphs tracking granular attribute provenance from transactional ERP writes through transforms to board reports.',
      badge: 'GRANULAR PROVENANCE',
      metric: 'Column-Level Graph Trace',
      side: 'right',
      color: '#0284C7',
      textColor: 'text-cyan-400',
      bgGlow: 'rgba(2, 132, 199, 0.35)',
      icon: GitBranch
    },
    {
      id: 'data-contracts',
      shortTag: 'CONTRACTS',
      title: 'Declarative Data Contracts',
      desc: 'Version-controlled schema and semantic specifications enforced at producer boundaries to intercept breaking changes before warehouse arrival.',
      badge: 'SHIFT-LEFT DEFENSE',
      metric: 'Automated CI/CD Quality Gates',
      side: 'right',
      color: '#06B6D4',
      textColor: 'text-cyan-300',
      bgGlow: 'rgba(6, 182, 212, 0.35)',
      icon: FileCheck
    },
    {
      id: 'dynamic-abac',
      shortTag: 'ABAC',
      title: 'Dynamic Attribute Access Control',
      desc: 'Contextual, fine-grained access policies evaluating caller identity, residency geography, and purpose-of-use dynamically at query execution.',
      badge: 'RUNTIME SECURITY',
      metric: 'Inline Policy Evaluation',
      side: 'right',
      color: '#10B981',
      textColor: 'text-emerald-400',
      bgGlow: 'rgba(16, 185, 129, 0.35)',
      icon: ShieldCheck
    },
    {
      id: 'virtual-masking',
      shortTag: 'MASKING',
      title: 'Automated In-Flight Tokenization',
      desc: 'Dynamic, format-preserving encryption and hashing applied to sensitive PII and financial records without physical storage duplication.',
      badge: 'ZERO DATA DUPLICATION',
      metric: 'Cryptographic Query Masking',
      side: 'left',
      color: '#F59E0B',
      textColor: 'text-amber-400',
      bgGlow: 'rgba(245, 158, 11, 0.35)',
      icon: Lock
    },
    {
      id: 'domain-stewardship',
      shortTag: 'STEWARD',
      title: 'Federated Domain Stewardship',
      desc: 'Cross-functional domain squads empowered with autonomous data product ownership operating under centralized corporate guardrails.',
      badge: 'DATA MESH GOVERNANCE',
      metric: 'Autonomous Product Owners',
      side: 'left',
      color: '#EC4899',
      textColor: 'text-pink-400',
      bgGlow: 'rgba(236, 72, 153, 0.35)',
      icon: Layers
    },
    {
      id: 'continuous-audit',
      shortTag: 'AUDIT',
      title: 'Continuous Regulatory Audit',
      desc: 'Immutable, tamper-evident telemetry logs capturing every data access, schema migration, and policy decision for automated sovereignty compliance.',
      badge: 'SOVEREIGN ASSURANCE',
      metric: 'Continuous Compliance Ledger',
      side: 'left',
      color: '#8B5CF6',
      textColor: 'text-purple-400',
      bgGlow: 'rgba(139, 92, 246, 0.35)',
      icon: Scale
    },
    {
      id: 'semantic-ontology',
      shortTag: 'GLOSSARY',
      title: 'Unified Semantic Taxonomy',
      desc: 'Standardized enterprise business taxonomy and glossary translating disparate technical table schemas into unambiguous corporate terms.',
      badge: 'CANONICAL TAXONOMY',
      metric: 'Universal Business Glossary',
      side: 'left',
      color: '#6366F1',
      textColor: 'text-indigo-400',
      bgGlow: 'rgba(99, 102, 241, 0.35)',
      icon: Search
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
      id: 'automated-discovery',
      label: 'Autonomous Discovery',
      sublabel: 'Active Crawlers',
      desc: 'Autonomous metadata crawlers continuously indexing schemas, profiling data shapes, and identifying confidential fields across enterprise cloud data stores.',
      tech: 'Autonomous Schema Ingestion',
      icon: Database,
      highlights: [
        'Continuous Schema Crawling & Auto-Classification',
        'Automated Sensitive Attribute Fingerprinting',
        'Unified Searchable Enterprise Catalog'
      ]
    },
    {
      id: 'column-lineage',
      label: 'Column-Level Lineage',
      sublabel: 'AST Graph Parsers',
      desc: 'Automated parser-driven column provenance connecting source transactional databases through complex transformations to analytical dashboards and feature stores.',
      tech: 'Directed Acyclic Graph Fabric',
      icon: GitBranch,
      highlights: [
        'SQL AST Parsing Across Multi-Cloud Stores',
        'Pre-Deployment Downstream Impact Simulation',
        'End-to-End Cryptographic Provenance Proofs'
      ]
    },
    {
      id: 'data-contracts',
      label: 'Declarative Contracts',
      sublabel: 'Producer CI/CD Gates',
      desc: 'Shift-left quality enforcement establishing versioned data contracts between upstream application producers and downstream analytics consumers.',
      tech: 'Declarative Semantic Manifests',
      icon: FileCheck,
      highlights: [
        'Version-Controlled Schema Contract Specifications',
        'Automated Pull-Request Contract Validation',
        'Quarantine Isolation & Dead-Letter Routing'
      ]
    },
    {
      id: 'dynamic-abac',
      label: 'Dynamic Policy Enforcement',
      sublabel: 'Runtime ABAC',
      desc: 'Active attribute-based access control with real-time tokenization, virtual masking, and automated security controls applied seamlessly at query execution.',
      tech: 'Inline Query Rewrite Engine',
      icon: ShieldCheck,
      highlights: [
        'Contextual Access Evaluation (Role, Geo, Purpose)',
        'Zero-Copy In-Flight Virtual PII Masking',
        'Dynamic Attribute-Based Access Control'
      ]
    },
    {
      id: 'domain-stewardship',
      label: 'Federated Stewardship',
      sublabel: 'Data Mesh Guardrails',
      desc: 'Empowering cross-functional domain teams with autonomous stewardship of their data products under centralized automated enterprise guardrails.',
      tech: 'Federated Computational Governance',
      icon: Layers,
      highlights: [
        'Domain-Oriented Data Product Registries',
        'Self-Serve Compliance & Quality Dashboards',
        'Cross-Domain Contract Negotiation Workflows'
      ]
    },
    {
      id: 'continuous-audit',
      label: 'Continuous Regulatory Audit',
      sublabel: 'Compliance Ledgers',
      desc: 'Programmatic data contracts, automated regulatory telemetry, and self-healing quality checks that protect enterprise data estates against drift and non-compliance.',
      tech: 'Immutable Audit Stream',
      icon: Scale,
      highlights: [
        'Tamper-Evident Access & Modification Logs',
        'Cross-Border Sovereignty Verification',
        'Automated Regulatory Evidence Generation'
      ]
    }
  ];

  // Section 3: Enterprise Data Governance Challenges (6 Comprehensive Cards)
  const dataGovernanceChallenges = [
    {
      icon: AlertTriangle,
      tag: 'DARK DATA SPRAWL',
      title: 'Dark Data & Unregulated Shadow Sprawl',
      desc: 'Massive accumulation of untracked analytical copies, duplicated spreadsheets, and stale lakehouse extracts exposes organizations to severe regulatory penalties and compliance risks.',
      footer: 'Automated Active Metadata Cataloging'
    },
    {
      icon: XCircle,
      tag: 'SCHEMA DRIFT',
      title: 'Silent Schema Drift & Pipeline Breakages',
      desc: 'Upstream microservices alter column names and data types without notification, silently breaking downstream executive dashboards and critical predictive machine learning models.',
      footer: 'Declarative Schema Contracts & CI/CD Gates'
    },
    {
      icon: GitBranch,
      tag: 'LINEAGE FRICTION',
      title: 'Opaque Provenance & Audit Friction',
      desc: 'Regulatory compliance inquiries demand full end-to-end audit trails, yet organizations cannot determine where specific financial or operational metrics originated.',
      footer: 'Cryptographic Column-Level Lineage Graphs'
    },
    {
      icon: Lock,
      tag: 'ACCESS BOTTLENECK',
      title: 'Coarse-Grained Access & Privilege Debt',
      desc: 'Traditional role-based security forces binary access decisions, resulting in either excessive data exposure or multi-week operational bottlenecks for data analysts.',
      footer: 'Dynamic Attribute-Based Access Control (ABAC)'
    },
    {
      icon: Scale,
      tag: 'SOVEREIGNTY RISK',
      title: 'Cross-Border Sovereignty & Privacy Mandates',
      desc: 'Global privacy regulations mandate strict data residency, anonymization, and right-to-be-forgotten controls that legacy lakehouses cannot systematically enforce.',
      footer: 'Dynamic In-Flight Virtual PII Masking'
    },
    {
      icon: Database,
      tag: 'AI INTEGRITY GAP',
      title: 'Unverified AI Training & Reproducibility Debt',
      desc: 'GenAI agents and LLMs ingest unverified enterprise data partitions, risking hallucinated business answers and intellectual property leakage without lineage safeguards.',
      footer: 'Governed Feature Stores & Verifiable Provenance'
    }
  ];

  // Section 5: Side-by-side Architectural Comparison Matrix
  const architecturalComparison = [
    {
      dimension: 'Metadata & Cataloging',
      legacyApproach: 'Static documentation, stale wiki pages, and annual manual spreadsheets that drift immediately out of date.',
      modernApproach: 'Continuous autonomous crawlers indexing schemas, profiling data shapes, and applying AI semantic tags in real time.',
      statusBadge: 'ACTIVE DISCOVERY'
    },
    {
      dimension: 'Data Provenance & Lineage',
      legacyApproach: 'Coarse table-level guesswork relying on oral history, leaving audit inquiries vulnerable to heavy scrutiny.',
      modernApproach: 'Deterministic AST-parsed column-level lineage graph tracing from transactional ERP commits directly to board decks.',
      statusBadge: 'COLUMN LINEAGE'
    },
    {
      dimension: 'Schema Quality & Drift',
      legacyApproach: 'Silent breaking schema modifications discovered in production after downstream reports fail or report false figures.',
      modernApproach: 'Declarative version-controlled schema contracts enforced directly within producer CI/CD pull request workflows.',
      statusBadge: 'SHIFT-LEFT GATES'
    },
    {
      dimension: 'Access Control & Privacy',
      legacyApproach: 'Rigid, static role-based access requiring physical data duplication to create anonymized reporting replicas.',
      modernApproach: 'Dynamic attribute-based access control (ABAC) with inline query rewriting and virtual in-flight PII masking.',
      statusBadge: 'ZERO DUPLICATION'
    },
    {
      dimension: 'Regulatory Compliance',
      legacyApproach: 'Panicked, manual evidence assembly during audits with unprovable data handling and high fine exposure.',
      modernApproach: 'Continuous immutable audit telemetry automatically exporting verifiable residency and sovereignty proofs.',
      statusBadge: 'CONTINUOUS AUDIT'
    }
  ];

  // Section 5: Protocol Sandbox Tab Specifications
  const protocolDetails = {
    'column-lineage': {
      badge: 'GRAPH-BASED LINEAGE ENGINE',
      title: 'Column-Level Provenance & Dependency Graph',
      desc: 'Trace every transformed attribute backward to its origin database transaction and forward to every affected dashboard, eliminating breakages before modifications are deployed.',
      specs: [
        { label: 'Granularity', val: 'Column-Level Dependency' },
        { label: 'Coverage', val: 'Cross-Lakehouse & BI' },
        { label: 'Detection Engine', val: 'AST Continuous Parsing' },
        { label: 'Validation Mode', val: 'Pre-Deployment Interception' }
      ],
      steps: [
        { name: 'Query Log Ingestion', detail: 'Ingests distributed query execution plans and database transaction logs across clouds.' },
        { name: 'Graph Resolution', detail: 'Constructs directed acyclic graphs connecting source tables directly to semantic layers.' },
        { name: 'Impact Interception', detail: 'Simulates proposed schema updates against downstream models to prevent outages.' }
      ]
    },
    'dynamic-masking': {
      badge: 'ACTIVE ZERO-TRUST MASKING',
      title: 'Automated PII Discovery & Dynamic Tokenization',
      desc: 'Discover sensitive customer data across all storage layers and apply dynamic, format-preserving encryption and hashing based on user roles without altering physical storage.',
      specs: [
        { label: 'Discovery Mode', val: 'Continuous Semantic Scan' },
        { label: 'Execution Overhead', val: 'Inline Query Evaluation' },
        { label: 'Cryptographic Type', val: 'Format-Preserving Encryption' },
        { label: 'Storage Footprint', val: 'Zero Data Duplication' }
      ],
      steps: [
        { name: 'Semantic Detection', detail: 'Continuously scans incoming batches for identifying customer attributes and secrets.' },
        { name: 'Policy Association', detail: 'Applies organizational governance tiers and regulatory classifications automatically.' },
        { name: 'Runtime Obfuscation', detail: 'Evaluates user identity at query execution to deliver masked or cleartext data dynamically.' }
      ]
    },
    'data-contracts': {
      badge: 'DECLARATIVE QUALITY GATES',
      title: 'Programmatic Data Contracts & Schema Gating',
      desc: 'Shift data governance left by enforcing versioned data contracts between upstream application producers and downstream analytics consumers directly within CI pipelines.',
      specs: [
        { label: 'Contract Syntax', val: 'Declarative Specifications' },
        { label: 'Boundary Layer', val: 'Producer Service Ingestion' },
        { label: 'Violation Action', val: 'Automated Dead-Letter Routing' },
        { label: 'Versioning Standard', val: 'Semantic Version Control' }
      ],
      steps: [
        { name: 'Contract Registration', detail: 'Data creators publish schema definitions, freshness rules, and semantic types to version control.' },
        { name: 'In-Flight Verification', detail: 'Ingestion gates validate each micro-batch against registered contract expectations.' },
        { name: 'Quarantine Isolation', detail: 'Non-conforming events route to dedicated review queues while compliant data streams forward.' }
      ]
    }
  };

  // Section 6: Phased Transformation Stages
  const transformationPhases = [
    {
      phase: 'STAGE ONE',
      title: 'Enterprise Metadata Audit & Dark Data Discovery',
      focus: 'Automated scanning of data estates, cataloging dormant partitions, identifying confidential PII attributes, and evaluating regulatory exposure.',
      deliverable: 'Complete Enterprise Data Inventory & Governance Risk Assessment',
      icon: Search
    },
    {
      phase: 'STAGE TWO',
      title: 'Schema Contract Definition & Lineage Graph Baselines',
      focus: 'Deployment of parser-based column lineage engines, creation of canonical semantic dictionaries, and establishment of declarative producer contracts.',
      deliverable: 'End-to-End Lineage Directed Graph & CI/CD Contract Gates',
      icon: GitBranch
    },
    {
      phase: 'STAGE THREE',
      title: 'Dynamic ABAC & Runtime In-Flight Masking Deployment',
      focus: 'Integration of query rewrite engines, dynamic attribute-based security rules, format-preserving encryption, and zero-copy virtual views.',
      deliverable: 'Active Zero-Trust Access Fabric & Virtual Masking Policies',
      icon: ShieldCheck
    },
    {
      phase: 'STAGE FOUR',
      title: 'Autonomous Federated Stewardship & Continuous Compliance',
      focus: 'Operationalization of domain stewardship consoles, automated compliance telemetry, self-healing quality checks, and audit reporting engines.',
      deliverable: 'Enterprise-Wide Governed Self-Service Data Mesh',
      icon: Scale
    }
  ];

  // Section 7: Executive FAQs
  const dataGovernanceFaqs = [
    {
      question: 'How does active data governance differ from traditional passive governance frameworks?',
      answer: 'Traditional passive data governance relies on static documentation, stale wiki pages, and annual audit reviews that become outdated immediately after publication. Active data governance, by contrast, integrates directly into query execution engines, CI/CD pipelines, and stream processors. It continuously evaluates schema contracts, tracks end-to-end column lineage, and enforces dynamic attribute-based access control and PII masking in real time.'
    },
    {
      question: 'How does KNOOVIQ construct automated column-level data lineage across heterogeneous multi-cloud architectures?',
      answer: 'KNOOVIQ utilizes automated SQL parser engines and metadata crawlers that intercept execution plans across databases, lakehouses, orchestration engines, and business intelligence platforms. Rather than relying on manual documentation, our lineage engine reconstructs directed acyclic graphs down to individual columns, capturing formulas, joins, and aggregations as they execute.'
    },
    {
      question: 'Can dynamic PII masking and tokenization be implemented without physically duplicating datasets?',
      answer: 'Yes. KNOOVIQ implements virtualization and query rewrite layers that evaluate user permissions and data classifications at query runtime. Authorized users receive the true data attributes, while unauthorized analysts receive format-preserving masked values or cryptographic tokens, completely eliminating the need to maintain redundant, pre-masked copies of massive lakehouse tables.'
    },
    {
      question: 'What role do programmatic data contracts play in preventing downstream pipeline and machine learning outages?',
      answer: 'Data contracts act as binding agreements between software engineering teams producing transactional data and analytics teams consuming it. By declaring schemas, expected ranges, nullability constraints, and freshness expectations in version-controlled manifests, upstream modifications that violate the contract are intercepted during pull request validation rather than silently corrupting analytical models.'
    },
    {
      question: 'How does federated computational governance empower domain squads while enforcing centralized enterprise compliance?',
      answer: 'Through a federated computational governance framework, centralized data governance teams establish overarching security policies, compliance standards, and metadata schemas, while decentralized domain teams retain autonomy over their data products. Automated policy engines ensure every domain artifact adheres to corporate security and regulatory baselines without creating bureaucratic bottlenecks.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#0070C0] selection:text-white">

      {/* =========================================================================
          SECTION 1: HERO SECTION (Full-Screen Panoramic Background - Aligned with AI Agents)
          ========================================================================= */}
      <section className="relative w-full min-h-[560px] sm:min-h-[620px] lg:min-h-[660px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 overflow-hidden bg-slate-950 text-white">

        {/* Full-Bleed 16:9 Panoramic Image - Zero Cropping on Data Governance & Active Policy Fabric */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/data-governance/enterprise_governance_policy_fabric.jpg"
            alt="Enterprise Data Governance & Active Policy Fabric"
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
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span>KNOOVIQ DIGITAL INTELLIGENCE &bull; DATA GOVERNANCE</span>
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.1] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                Enterprise <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-cyan-400">
                  Data Governance &amp; Active Policy Fabric
                </span>
              </h1>

              {/* Sub-headline */}
              <p className="text-base sm:text-lg text-slate-100 leading-relaxed font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                Active metadata catalogs, end-to-end cryptographic column lineage, declarative schema contracts, and dynamic attribute-based access controls across modern enterprise lakehouses.
              </p>
            </motion.div>

            {/* Enterprise Trust Indicators */}
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="pt-1 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-cyan-200 shadow-lg">
                <Database className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Automated Metadata &amp; Cataloging</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-emerald-200 shadow-lg">
                <GitBranch className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Cryptographic Column-Level Lineage</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-sky-200 shadow-lg">
                <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Declarative Contracts &amp; Active ABAC</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: EXECUTIVE PERSPECTIVE (Clean Light Corporate Theme - Large Legible Text)
          IMAGE 2 OF 3: /images/data-governance/metadata_lineage.jpg
          ========================================================================= */}
      <section id="governance-evolution" className="py-24 bg-gradient-to-b from-white via-[#F8FBFE] to-white border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-300 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#0070C0]">
                <Shield className="w-4 h-4 text-[#0070C0]" />
                <span>EXECUTIVE GOVERNANCE PERSPECTIVE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
                Architecting the Active Enterprise <span className="text-[#0070C0]">Data Governance Fabric</span>
              </h2>

              <div className="border-l-4 border-[#0070C0] border-y border-r border-slate-300 pl-5 py-3.5 bg-gradient-to-r from-sky-50/80 via-sky-50/30 to-transparent rounded-r-2xl">
                <p className="text-base sm:text-lg font-semibold text-slate-800 leading-relaxed italic">
                  &ldquo;Data governance must not be a post-hoc bureaucratic hurdle. In modern enterprise architectures, governance is an active, automated control plane embedded directly inside data pipelines, enforcing security, quality, and provenance continuously.&rdquo;
                </p>
              </div>

              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
                Knooviq shifts data governance from static documentation into executable architecture. We automate metadata ingestion, trace end-to-end column lineage across distributed lakehouses, and programmatically intercept breaking schema drift before data reaches downstream analytics and machine learning applications.
              </p>

              {/* 3 Executive Pillars (Clear, Large, Highly Legible Text) */}
              <div className="space-y-4 pt-2">
                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-950">Active Semantic Metadata Fabric</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Autonomous crawlers continuously index schemas, classify confidential fields, and link canonical business glossaries to operational stores.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <GitBranch className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-950">Cryptographic Column-Level Lineage</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Automated SQL AST parsers construct directed acyclic graphs tracking data provenance from source transactions directly to executive dashboards.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-950">Dynamic Policy Gates &amp; Runtime Masking</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Attribute-based access control (ABAC) applying real-time virtual masking and tokenization at query execution with zero storage duplication.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Interactive Evolution Visual (IMAGE 3: Architecting Active Governance Fabric) */}
            <div className="lg:col-span-6 space-y-4">
              
              <div 
                onClick={() => setActiveJourneyStep((activeJourneyStep + 1) % journeySteps.length)}
                title="Click image to advance to next architecture step"
                className="relative rounded-2xl overflow-hidden border-2 border-slate-300 shadow-xl bg-slate-900 group h-96 sm:h-[440px] lg:h-[490px] w-full cursor-pointer"
              >
                {/* IMAGE 3: Full box fit, no frame */}
                <img
                  src="/images/data-governance/architecting_governance_lineage_shield.jpg"
                  alt="Architecting the Active Enterprise Data Governance Fabric - Lineage and Trust"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-lg bg-slate-900/90 backdrop-blur-md border border-cyan-400/50 text-xs sm:text-sm font-mono font-bold text-cyan-300 flex items-center gap-2 shadow-lg z-10">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>GOVERNANCE FOCUS: {journeySteps[activeJourneyStep].label.toUpperCase()}</span>
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
              Strategic Hurdles in Legacy Data Governance
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Why passive documentation and manual auditing fail across distributed enterprise data architectures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {dataGovernanceChallenges.map((item, idx) => {
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
              INTERCONNECTED GOVERNANCE ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              The KNOOVIQ Active Governance Mesh
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Explore the eight mutually reinforcing pillars of our modern enterprise data governance foundation. Hover over any segment to inspect its architectural role.
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
                        GOVERNANCE FABRIC
                      </span>
                      <div className="text-sm sm:text-base font-black text-white leading-tight">
                        Active Policy Mesh
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
          IMAGE 3 OF 3: /images/data-governance/policy_mesh.jpg
          ========================================================================= */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3.5">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#0070C0] uppercase">
              TOPOLOGICAL ARCHITECTURE BLUEPRINT
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950">
              Active Data Governance &amp; Policy Execution Matrix
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Examine the concrete architectural difference between passive regulatory compliance and KNOOVIQ active data governance fabrics.
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
              Transformation Matrix (Passive vs. Active)
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
              Interactive Policy Protocols
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
                      <th className="py-4 px-6 font-bold w-1/4">Governance Dimension</th>
                      <th className="py-4 px-6 font-bold w-1/3 text-rose-800 bg-rose-50/70">Legacy Passive Governance</th>
                      <th className="py-4 px-6 font-bold w-1/3 text-[#0070C0] bg-sky-50/70">KNOOVIQ Active Governance Fabric</th>
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
                    src="/images/data-governance/policy_mesh.jpg"
                    alt="Enterprise Data Governance Active Policy Mesh and Zero-Trust Access Control"
                    className="w-full h-full object-cover object-center rounded-2xl transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs sm:text-sm p-3.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-white">
                    <div className="flex items-center gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-cyan-400" />
                      <span className="font-bold">Active Policy Control Plane</span>
                    </div>
                    <span className="font-mono text-xs text-cyan-300 font-bold uppercase">
                      ZERO-TRUST CONTROL FABRIC
                    </span>
                  </div>
                </div>

                {/* Technical Layers Checklist (Clear, Visible Text) */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div className="text-xs font-mono text-[#0070C0] uppercase font-bold mb-1">
                      LAYER ONE: HARVESTING
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">Autonomous Metadata Crawlers</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Continuous ingestion of database schemas, object stores, and event streams with automated sensitive field tagging.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div className="text-xs font-mono text-[#0070C0] uppercase font-bold mb-1">
                      LAYER TWO: PROVENANCE
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">AST Lineage Graph Compilation</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Automated SQL AST parsing tracing column-level dependencies from source databases through transforms to analytics.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div className="text-xs font-mono text-[#0070C0] uppercase font-bold mb-1">
                      LAYER THREE: POLICY EXECUTION
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">Dynamic ABAC &amp; Virtual Masking</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Real-time query rewrite engine applying cryptographic tokenization and access filtering without altering storage.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div className="text-xs font-mono text-[#0070C0] uppercase font-bold mb-1">
                      LAYER FOUR: ASSURANCE
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">Continuous Compliance Telemetry</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Immutable, tamper-evident audit streams capturing all policy decisions for automated regulatory sovereignty verification.
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* TAB 3: Interactive Policy Protocols Sandbox */}
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
                  onClick={() => setActiveProtocolTab('column-lineage')}
                  className={`flex-1 py-2 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    activeProtocolTab === 'column-lineage'
                      ? 'bg-[#0070C0] text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  Column Lineage Graph
                </button>
                <button
                  onClick={() => setActiveProtocolTab('dynamic-masking')}
                  className={`flex-1 py-2 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    activeProtocolTab === 'dynamic-masking'
                      ? 'bg-[#0070C0] text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  Dynamic PII Masking
                </button>
                <button
                  onClick={() => setActiveProtocolTab('data-contracts')}
                  className={`flex-1 py-2 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    activeProtocolTab === 'data-contracts'
                      ? 'bg-[#0070C0] text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  Declarative Contracts
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
                    Policy Enforcement Protocol Execution
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
              Phased Enterprise Governance Roadmap
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              A structured, risk-mitigated journey from static compliance checklists to an automated, active governance fabric.
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
              <span>EXECUTIVE CLARIFICATIONS &bull; DATA GOVERNANCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#005A9C] via-[#0070C0] to-sky-500">Governance Questions</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
              Addressing key strategic, architectural, and regulatory compliance considerations for enterprise technology leaders.
            </p>
          </div>

          <div className="space-y-4">
            {dataGovernanceFaqs.map((faq, index) => {
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
            Ready to Transform Data Governance into an Active Control Fabric?
          </h2>

          <p className="text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed font-normal">
            Collaborate with senior data architects and governance engineers to deploy automated column lineage, declarative schema contracts, and dynamic access security across your entire data landscape.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
            <button
              onClick={() => onOpenContact ? onOpenContact('Enterprise Data Governance Workshop') : undefined}
              className="px-9 py-4 rounded-xl font-bold text-sm sm:text-base text-slate-900 bg-white hover:bg-sky-50 shadow-xl transition-all flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              <span>Schedule Architecture Workshop</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#0070C0]" />
            </button>
            <Link
              to="/digital-intelligence/data-quality"
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold uppercase tracking-wider backdrop-blur-md flex items-center gap-2 group transition-all w-full sm:w-auto justify-center text-sm"
            >
              <span>Explore Data Quality</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-7 text-xs sm:text-sm text-sky-100 font-mono">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              <span>100% Column-Level Provenance</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-cyan-200" />
              <span>Zero Row-Level Leakage</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-300" />
              <span>Automated Contract Interlocks</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default DataGovernancePage;
