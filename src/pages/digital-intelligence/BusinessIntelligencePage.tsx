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
  TrendingUp,
  PieChart,
  LineChart,
  Maximize2,
  X
} from 'lucide-react';

interface BusinessIntelligencePageProps {
  onOpenContact?: (defaultTopic?: string) => void;
}

export const BusinessIntelligencePage: React.FC<BusinessIntelligencePageProps> = ({
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
  const [activeProtocolTab, setActiveProtocolTab] = useState<'semantic-layer' | 'augmented-variance' | 'ledger-drillthrough'>('semantic-layer');

  // State for Section 7: FAQ Accordion
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // =========================================================================
  // DATA STRUCTURES
  // =========================================================================

  // Section 4: Circular Chevron Segments (8 Interlocking BI Layers)
  const wheelSegments = [
    {
      id: 'semantic-modeling',
      shortTag: 'SEMANTICS',
      title: 'Canonical Semantic Layer',
      desc: 'Centralized business logic abstracting complex multi-cloud schemas into governed, standardized metrics and dimensions across all tools.',
      badge: 'UNIFIED SINGLE SOURCE',
      metric: 'Harmonized Metric Model',
      side: 'right',
      color: '#0070C0',
      textColor: 'text-sky-400',
      bgGlow: 'rgba(0, 112, 192, 0.35)',
      icon: Layers
    },
    {
      id: 'executive-cockpits',
      shortTag: 'COCKPITS',
      title: 'Real-Time Boardroom Cockpits',
      desc: 'Sub-second interactive executive dashboards providing instant visibility into global revenue, cash flows, and operational margins.',
      badge: 'SUB-SECOND REFRESH',
      metric: 'Live In-Memory Visuals',
      side: 'right',
      color: '#0284C7',
      textColor: 'text-cyan-400',
      bgGlow: 'rgba(2, 132, 199, 0.35)',
      icon: BarChart3
    },
    {
      id: 'augmented-analytics',
      shortTag: 'AUGMENTED',
      title: 'Augmented Variance Intelligence',
      desc: 'Machine learning algorithms autonomously decomposing variance anomalies, uncovering hidden cost drivers, and explaining KPI movements.',
      badge: 'AUTONOMOUS EXPLANATION',
      metric: 'Algorithmic Driver Attribution',
      side: 'right',
      color: '#06B6D4',
      textColor: 'text-cyan-300',
      bgGlow: 'rgba(6, 182, 212, 0.35)',
      icon: Sparkles
    },
    {
      id: 'conversational-nlq',
      shortTag: 'NLQ',
      title: 'Natural Language Querying (NLQ)',
      desc: 'Conversational decision intelligence allowing executives to interrogate complex enterprise data models using simple natural language prompts.',
      badge: 'CONVERSATIONAL DECISIONS',
      metric: 'Zero-SQL Prompt Querying',
      side: 'right',
      color: '#10B981',
      textColor: 'text-emerald-400',
      bgGlow: 'rgba(16, 185, 129, 0.35)',
      icon: Search
    },
    {
      id: 'ledger-drillthrough',
      shortTag: 'DRILL-THROUGH',
      title: 'Zero-Copy Transactional Drill-Through',
      desc: 'Seamless navigation from high-level consolidated executive balance sheets directly down into originating SAP line-item ledger records.',
      badge: 'TRANSACTIONAL AUDIT',
      metric: 'Direct Ledger Verification',
      side: 'left',
      color: '#F59E0B',
      textColor: 'text-amber-400',
      bgGlow: 'rgba(245, 158, 11, 0.35)',
      icon: Zap
    },
    {
      id: 'collaborative-xpa',
      shortTag: 'PLANNING',
      title: 'Extended Planning & Analysis (xP&A)',
      desc: 'Unified forecasting and dynamic scenario simulations bridging financial budgets, supply chain allocations, and sales pipelines.',
      badge: 'CONNECTED SIMULATION',
      metric: 'Multi-Scenario Forecasts',
      side: 'left',
      color: '#EC4899',
      textColor: 'text-pink-400',
      bgGlow: 'rgba(236, 72, 153, 0.35)',
      icon: Scale
    },
    {
      id: 'contextual-security',
      shortTag: 'SECURITY',
      title: 'Dynamic Row-Level Security (RLS)',
      desc: 'Fine-grained attribute-based permissions ensuring sensitive organizational salaries and territorial metrics stay strictly confidential.',
      badge: 'ATTRIBUTE-BASED RLS',
      metric: 'Zero-Leakage Access Filtering',
      side: 'left',
      color: '#8B5CF6',
      textColor: 'text-purple-400',
      bgGlow: 'rgba(139, 92, 246, 0.35)',
      icon: Lock
    },
    {
      id: 'self-service-catalog',
      shortTag: 'SELF-SERVICE',
      title: 'Governed Self-Service Analytics',
      desc: 'Curated data marts and certified analytics models empowering business units to build reliable reports without engineering dependencies.',
      badge: 'GOVERNED DATA MARTS',
      metric: 'Zero Report Sprawl',
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
      id: 'semantic-modeling',
      label: 'Semantic Layer',
      sublabel: 'Canonical Metric Model',
      desc: 'Formulating universal, audited metric definitions independent of underlying technical schemas, ensuring identical EBITDA and churn metrics across all tools.',
      tech: 'Enterprise Semantic Framework',
      icon: Layers,
      highlights: [
        'Single Source of Truth Metric Standard',
        'Built-in Multi-Currency & Calendar Hierarchies',
        'Independent of Backend ERP Migrations'
      ]
    },
    {
      id: 'live-federation',
      label: 'Live Federation',
      sublabel: 'In-Situ Pushdown',
      desc: 'Direct query federation connecting dashboards directly to transactional ERP databases and cloud lakehouses without slow intermediate ETL staging extracts.',
      tech: 'SAP Datasphere & Direct Pushdown',
      icon: Zap,
      highlights: [
        'Zero Data Extraction Staging Lag',
        'Direct Transactional Pushdown Execution',
        'Elimination of Multi-Terabyte Duplication'
      ]
    },
    {
      id: 'augmented-intelligence',
      label: 'Augmented Insights',
      sublabel: 'Variance Attribution',
      desc: 'Autonomous machine learning models scanning thousands of dimensional combinations to surface the precise root causes behind revenue and margin fluctuations.',
      tech: 'Autonomous Driver Decomposition',
      icon: Sparkles,
      highlights: [
        'Automated Root-Cause Driver Analysis',
        'Statistical Anomaly & Outlier Identification',
        'Proactive Executive Variance Summaries'
      ]
    },
    {
      id: 'conversational-cockpit',
      label: 'Conversational NLQ',
      sublabel: 'Natural Language Cockpits',
      desc: 'Conversational analytics interfaces translating natural language business questions into precise, governed semantic queries with interactive charts.',
      tech: 'Generative AI & Semantic NLQ',
      icon: Search,
      highlights: [
        'Natural Language Prompt-to-Chart Synthesis',
        'Audited Semantic Guardrails (Zero Hallucination)',
        'Executive Voice & Chat Boardroom Interaction'
      ]
    },
    {
      id: 'extended-planning',
      label: 'Connected xP&A',
      sublabel: 'Planning & Simulation',
      desc: 'Unifying operational planning across financial ledgers, workforce allocations, and supply chain schedules with dynamic what-if simulation modeling.',
      tech: 'Collaborative Enterprise Planning',
      icon: Scale,
      highlights: [
        'Closed-Loop Budgeting & Actuals Reconciliations',
        'Dynamic Multi-Variable What-If Simulations',
        'Direct Write-Back into Operational ERPs'
      ]
    },
    {
      id: 'governed-security',
      label: 'Executive Governance',
      sublabel: 'Row-Level Audit',
      desc: 'Continuous attribute-based row and column access security ensuring that sensitive executive compensation and regional financial data are cryptographically protected.',
      tech: 'Zero-Trust Row-Level Security',
      icon: Lock,
      highlights: [
        'Dynamic Departmental & Geographic RLS',
        'Complete Mathematical Lineage Provenance',
        'Automated SOX & Regulatory Audit Telemetry'
      ]
    }
  ];

  // Section 3: Enterprise Business Intelligence Challenges (6 Comprehensive Cards)
  const dataBiChallenges = [
    {
      icon: AlertTriangle,
      tag: 'SEMANTIC DISSONANCE',
      title: 'Conflicting Corporate Metrics & Boardroom Disputes',
      desc: 'Finance, sales, and supply chain report contradictory margin and revenue numbers due to uncoordinated metric definitions hardcoded inside separate BI workbooks.',
      footer: 'Universal Canonical Semantic Layer'
    },
    {
      icon: Zap,
      tag: 'REPORTING LATENCY',
      title: 'Stale Overnight Batch ETL Pipelines',
      desc: 'Overnight batch aggregation scripts delay critical operational visibility by 24 to 48 hours, leaving leaders unable to react to intraday market and supply shifts.',
      footer: 'Live In-Situ Query Pushdown & Federation'
    },
    {
      icon: FileSpreadsheet,
      tag: 'SHADOW EXCEL DEBT',
      title: 'Proliferation of Ungoverned Spreadsheets',
      desc: 'Frustrated business analysts export raw data into ungoverned local spreadsheets, creating massive compliance vulnerabilities and unverified manual calculation errors.',
      footer: 'Governed Self-Service Data Marts'
    },
    {
      icon: Search,
      tag: 'OPAQUE DRILL-DOWN',
      title: 'Inability to Verify Transactional Evidence',
      desc: 'Executive cockpits show high-level variance summaries but cannot drill down to the originating ERP invoice or purchase order line item, stalling root cause resolution.',
      footer: 'Direct Transactional Ledger Drill-Through'
    },
    {
      icon: RefreshCw,
      tag: 'REPORT SPRAWL DEBT',
      title: 'Thousands of Abandoned, Duplicate Reports',
      desc: 'Enterprises drown in thousands of unmaintained dashboards created for one-off meetings, wasting cloud compute resources and confusing end users.',
      footer: 'Certified Enterprise Data Product Registry'
    },
    {
      icon: Database,
      tag: 'ANALYTICS BOTTLENECK',
      title: 'Overburdened Data Engineering Teams',
      desc: 'Business teams wait weeks for data engineers to build custom views and modify reports, resulting in missed commercial opportunities and high operational frustration.',
      footer: 'Augmented Conversational NLQ Cockpits'
    }
  ];

  // Section 5: Side-by-side Architectural Comparison Matrix
  const architecturalComparison = [
    {
      dimension: 'Metric Consistency',
      legacyApproach: 'Business metric logic coded manually in hundreds of disconnected BI workbooks, causing departmental disputes.',
      modernApproach: 'Universal canonical semantic layer enforced centrally across all dashboards, reporting tools, and GenAI agents.',
      statusBadge: 'SINGLE TRUTH'
    },
    {
      dimension: 'Data Freshness',
      legacyApproach: 'Overnight batch ETL jobs creating 24-hour operational lag and frequent morning pipeline extraction failures.',
      modernApproach: 'In-situ query federation executing directly on live operational databases with sub-second data freshness.',
      statusBadge: 'ZERO LATENCY'
    },
    {
      dimension: 'Root Cause Analysis',
      legacyApproach: 'Static charts requiring days of manual data manipulation in Excel to investigate why a regional margin dropped.',
      modernApproach: 'Augmented machine learning driver attribution automatically surfacing underlying variance factors in seconds.',
      statusBadge: 'AUTOMATED ML'
    },
    {
      dimension: 'User Accessibility',
      legacyApproach: 'Complex SQL queries and rigid dashboards requiring technical specialists for every new business inquiry.',
      modernApproach: 'Conversational natural language querying (NLQ) allowing executives to ask questions and generate charts instantly.',
      statusBadge: 'CONVERSATIONAL'
    },
    {
      dimension: 'Audit & Provenance',
      legacyApproach: 'Untracked aggregation formulas with zero mathematical proof connecting numbers back to source ERP ledgers.',
      modernApproach: 'Deterministic end-to-end cryptographic lineage with one-click drill-down to transactional ERP commits.',
      statusBadge: 'AUDIT PROVENANCE'
    }
  ];

  // Section 5: Protocol Sandbox Tab Specifications
  const protocolDetails = {
    'semantic-layer': {
      badge: 'CANONICAL SEMANTIC FABRIC',
      title: 'Universal Enterprise Semantic Modeling',
      desc: 'Eliminate metric disputes by defining KPIs, dimensional hierarchies, and multi-currency exchange rates in an open semantic model accessible by all BI tools.',
      specs: [
        { label: 'Modeling Standard', val: 'Open Semantic Specifications' },
        { label: 'Integration Scope', val: 'SAP, Power BI, Tableau' },
        { label: 'Currency Conversion', val: 'Real-Time Dynamic FX' },
        { label: 'Governance Mode', val: 'Version-Controlled Definitions' }
      ],
      steps: [
        { name: 'Metric Standardization', detail: 'Defines unambiguous corporate formulas for Net Margin, ARR, and Customer Lifetime Value.' },
        { name: 'Dimensional Hierarchies', detail: 'Maps organizational structures, fiscal calendars, and multi-entity consolidation rules.' },
        { name: 'Multi-Tool Federation', detail: 'Exposes semantic objects via standard APIs to ensure metric uniformity across tools.' }
      ]
    },
    'augmented-variance': {
      badge: 'AUGMENTED INTELLIGENCE',
      title: 'Automated Root-Cause Variance Attribution',
      desc: 'Empower executive teams with machine learning algorithms that dissect variance outliers, identify driving factors, and generate natural language summaries.',
      specs: [
        { label: 'Decomposition Speed', val: '< 3.0 Seconds' },
        { label: 'Dimension Depth', val: 'Multi-Variate Combinatorial' },
        { label: 'Output Format', val: 'Interactive Waterfall & Text' },
        { label: 'Algorithm Class', val: 'Statistical Attribution ML' }
      ],
      steps: [
        { name: 'Variance Ingestion', detail: 'Captures deviations between actual performance, budgeted targets, and historical baselines.' },
        { name: 'Driver Clustering', detail: 'Evaluates hundreds of product, geographic, and customer factors to isolate drivers.' },
        { name: 'Narrative Synthesis', detail: 'Generates concise executive summaries explaining the top contributors to the shift.' }
      ]
    },
    'ledger-drillthrough': {
      badge: 'TRANSACTIONAL DRILL-DOWN',
      title: 'Zero-Copy ERP Ledger Drill-Through',
      desc: 'Enable audit teams and executives to click any consolidated financial indicator and navigate directly to the originating ERP journal entries with zero latency.',
      specs: [
        { label: 'Granularity', val: 'Document Line-Item Ledger' },
        { label: 'ERP Connectors', val: 'SAP S/4HANA, Datasphere' },
        { label: 'Navigation Mode', val: 'In-Situ In-Memory Drill' },
        { label: 'Audit Trail', val: 'Full Transaction Commit Hash' }
      ],
      steps: [
        { name: 'Cell Selection', detail: 'User selects any high-level aggregated figure in the executive financial cockpit.' },
        { name: 'Query Pushdown', detail: 'Generates targeted SQL pushdown query into the underlying operational SAP ACDOCA table.' },
        { name: 'Instant Lineage Display', detail: 'Renders the exact journal entries, vendor invoices, and approvals behind the figure.' }
      ]
    }
  };

  // Section 6: Phased Transformation Stages
  const transformationPhases = [
    {
      phase: 'STAGE ONE',
      title: 'Enterprise Metric Harmonization & Taxonomy Audit',
      focus: 'Assessment of existing fragmented reporting tools, cataloging redundant dashboards, and resolving conflicting departmental metric definitions.',
      deliverable: 'Canonical Metric Dictionary & BI Rationalization Blueprint',
      icon: Search
    },
    {
      phase: 'STAGE TWO',
      title: 'Canonical Semantic Layer & Real-Time Connectors',
      focus: 'Deployment of universal semantic modeling layer, real-time pushdown connectors into SAP S/4HANA, and elimination of batch staging ETL.',
      deliverable: 'Live Production Semantic Data Fabric & Fast-Query Nodes',
      icon: Layers
    },
    {
      phase: 'STAGE THREE',
      title: 'Executive Boardroom Cockpits & Augmented Analytics',
      focus: 'Launch of sub-second interactive executive dashboards, automated variance attribution engines, and conversational natural language querying.',
      deliverable: 'Executive Digital Boardroom & Augmented Variance Cockpit',
      icon: BarChart3
    },
    {
      phase: 'STAGE FOUR',
      title: 'Governed Self-Service & Collaborative xP&A',
      focus: 'Operationalization of curated domain data marts, dynamic scenario simulation models, and closed-loop ERP planning write-back.',
      deliverable: 'Enterprise-Wide Governed Self-Service BI & Connected Planning',
      icon: TrendingUp
    }
  ];

  // Section 7: Executive FAQs
  const businessIntelligenceFaqs = [
    {
      question: 'How does modern Augmented Business Intelligence differ from traditional reporting dashboards?',
      answer: 'Traditional reporting relies on static, rear-view mirror dashboards created via slow overnight batch ETL pipelines that show what happened but cannot explain why. Augmented Business Intelligence utilizes machine learning algorithms and a universal semantic layer to autonomously dissect variance root causes, identify anomalies, and enable conversational natural language querying directly against live operational databases.'
    },
    {
      question: 'What is a Canonical Semantic Layer, and why is it essential for enterprise analytics?',
      answer: 'A Canonical Semantic Layer is a centralized business abstraction layer that defines metrics (such as EBITDA, gross margin, customer acquisition cost) and dimensional hierarchies once. All downstream visualization tools (SAP Analytics Cloud, Power BI, Tableau) query this single layer, eliminating conflicting calculations between departments and ensuring metric stability across ERP upgrades.'
    },
    {
      question: 'How does KNOOVIQ enable real-time drill-through from board reports into SAP S/4HANA ledgers?',
      answer: 'By leveraging in-situ query federation platforms like SAP Datasphere, queries are pushed down directly to transactional database tables (such as SAP Universal Journal ACDOCA) without physical data duplication. An executive clicking an aggregated financial balance can instantly inspect the exact underlying journal entries, invoice line items, and approval timestamps.'
    },
    {
      question: 'How does Conversational Natural Language Querying (NLQ) prevent AI hallucinations?',
      answer: 'KNOOVIQ grounds conversational generative AI directly in the deterministic canonical semantic layer. Rather than allowing an LLM to guess database table names or generate unverified SQL, the model interprets executive intent, maps it to validated semantic entities and approved business formulas, and executes audited queries with zero hallucination.'
    },
    {
      question: 'How can enterprises enable self-service analytics without creating report sprawl?',
      answer: 'We implement a governed data mesh architecture with certified data product registries. Business squad analysts have freedom to create exploratory reports using pre-validated semantic models and certified dimensions. Automated lifecycle management identifies and decommissions abandoned workbooks, keeping the enterprise catalog lean and compliant.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#0070C0] selection:text-white">

      {/* =========================================================================
          SECTION 1: HERO SECTION (AI Agents Style Full Bleed Panoramic Background)
          IMAGE: /images/business-intelligence/enterprise_bi_augmented_analytics_hero.jpg
          ========================================================================= */}
      <section className="relative w-full min-h-[560px] sm:min-h-[620px] lg:min-h-[660px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 overflow-hidden bg-slate-950 text-white">
        {/* Full-Bleed 16:9 Panoramic Image - AI Agents Style */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/business-intelligence/enterprise_bi_augmented_analytics_hero.jpg"
            alt="Enterprise Business Intelligence & Augmented Analytics Collaborative Cockpit"
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
                  <span>Business Intelligence &amp; Analytics</span>
                </div>
              </div>

              {/* Animated Headline with High-Contrast Typography */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                Enterprise <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-cyan-400">
                  Business Intelligence &amp; Augmented Analytics
                </span>
              </h1>

              {/* Subtitle with High Legibility */}
              <p className="text-base sm:text-lg text-slate-100 leading-relaxed font-normal pt-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                Unified semantic data fabrics, sub-second executive boardroom cockpits, conversational NLQ intelligence, and live transactional drill-through directly connected to enterprise ERP cores.
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
                <Zap className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Live Pushdown Analytics</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-emerald-200 shadow-sm">
                <Layers className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Canonical Semantics</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-sky-200 shadow-sm">
                <BarChart3 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Augmented Cockpits</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: EXECUTIVE PERSPECTIVE (Clean Light Corporate Theme - Large Legible Text)
          IMAGE 2 OF 3: /images/business-intelligence/bi_cockpit.jpg
          ========================================================================= */}
      <section id="bi-evolution" className="py-24 bg-gradient-to-b from-white via-[#F8FBFE] to-white border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-300 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#0070C0]">
                <BarChart3 className="w-4 h-4 text-[#0070C0]" />
                <span>EXECUTIVE INTELLIGENCE PERSPECTIVE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
                Architecting Next-Generation <span className="text-[#0070C0]">Enterprise Business Intelligence</span>
              </h2>

              <div className="border-l-4 border-[#0070C0] border-y border-r border-slate-300 pl-5 py-3.5 bg-gradient-to-r from-sky-50/80 via-sky-50/30 to-transparent rounded-r-2xl">
                <p className="text-base sm:text-lg font-semibold text-slate-800 leading-relaxed italic">
                  &ldquo;Business intelligence must evolve beyond static, stale PDF decks and fragmented departmental dashboards. True enterprise BI provides a unified semantic cockpit—where executive queries trigger sub-second in-situ pushdown into live operational ledgers with complete mathematical auditability.&rdquo;
                </p>
              </div>

              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
                Knooviq transforms legacy, delayed reporting workflows into active, augmented business intelligence fabrics. We harmonize conflicting departmental definitions into canonical enterprise metric models, empower executive decision-makers with natural language conversational querying, and bridge transactional ERP backbones directly to modern analytics visualization suites without staging extract latency.
              </p>

              {/* 3 Executive Pillars (Clear, Large, Highly Legible Text) */}
              <div className="space-y-4 pt-2">
                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-950">Canonical Enterprise Semantic Layer</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Single source of truth metrics modeling business KPIs consistently across ERP upgrades and multi-cloud dashboards.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-950">In-Situ Operational Drill-Through</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Real-time drill-down capabilities from consolidated high-level EBITDA and revenue figures directly into raw ERP ledger transactions.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-950">Augmented Conversational Analytics</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      AI-driven automated variance analysis, driver discovery, and natural language query generation eliminating executive reporting bottlenecks.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Interactive Evolution Visual (IMAGE 4: Architecting Next-Gen Enterprise BI) */}
            <div className="lg:col-span-6 space-y-4">
              
              <div 
                onClick={() => setActiveJourneyStep((activeJourneyStep + 1) % journeySteps.length)}
                title="Click image to advance to next architecture step"
                className="relative rounded-2xl overflow-hidden border-2 border-slate-300 shadow-xl bg-slate-900 group h-96 sm:h-[440px] lg:h-[490px] w-full cursor-pointer"
              >
                {/* IMAGE 4: Full box fit, no frame */}
                <img
                  src="/images/business-intelligence/architecting_nextgen_enterprise_bi.jpg"
                  alt="Architecting Next-Generation Enterprise Business Intelligence"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-lg bg-slate-900/90 backdrop-blur-md border border-cyan-400/50 text-xs sm:text-sm font-mono font-bold text-cyan-300 flex items-center gap-2 shadow-lg z-10">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>BI FOCUS: {journeySteps[activeJourneyStep].label.toUpperCase()}</span>
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
              Critical Roadblocks in Legacy Business Intelligence
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Why traditional static reporting dashboards generate metric disputes, shadow spreadsheets, and decision paralysis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {dataBiChallenges.map((item, idx) => {
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
              INTERCONNECTED INTELLIGENCE ECOSYSTEM
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              The KNOOVIQ Augmented Intelligence Mesh
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Explore the eight mutually reinforcing layers of our modern business intelligence foundation. Hover over any segment to inspect its architectural role.
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
                        BI CORE
                      </span>
                      <div className="text-sm sm:text-base font-black text-white leading-tight">
                        Augmented Intelligence
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
          IMAGE 3 OF 3: /images/business-intelligence/augmented_analytics.jpg
          ========================================================================= */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3.5">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#0070C0] uppercase">
              TOPOLOGICAL ARCHITECTURE BLUEPRINT
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950">
              Augmented Business Intelligence &amp; Analytics Matrix
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Examine the concrete architectural difference between legacy static reporting dashboards and KNOOVIQ augmented business intelligence fabrics.
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
              Interactive BI Protocols
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
                      <th className="py-4 px-6 font-bold w-1/4">Intelligence Dimension</th>
                      <th className="py-4 px-6 font-bold w-1/3 text-rose-800 bg-rose-50/70">Legacy Static Dashboards</th>
                      <th className="py-4 px-6 font-bold w-1/3 text-[#0070C0] bg-sky-50/70">KNOOVIQ Augmented Intelligence</th>
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
                    src="/images/business-intelligence/augmented_analytics.jpg"
                    alt="Enterprise Augmented Business Intelligence Architecture Blueprint"
                    className="w-full h-full object-cover object-center rounded-2xl transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs sm:text-sm p-3.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-white">
                    <div className="flex items-center gap-2.5">
                      <BarChart3 className="w-4 h-4 text-cyan-400" />
                      <span className="font-bold">Augmented Analytics Architecture</span>
                    </div>
                    <span className="font-mono text-xs text-cyan-300 font-bold uppercase">
                      IN-SITU ENTERPRISE BI
                    </span>
                  </div>
                </div>

                {/* Technical Layers Checklist (Clear, Visible Text) */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div className="text-xs font-mono text-[#0070C0] uppercase font-bold mb-1">
                      LAYER ONE: SEMANTICS
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">Canonical Enterprise Metric Fabric</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Standardized business formulas, dimensional hierarchies, and real-time multi-currency conversions.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div className="text-xs font-mono text-[#0070C0] uppercase font-bold mb-1">
                      LAYER TWO: IN-SITU PUSHDOWN
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">Direct Operational Query Federation</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Queries translated and pushed down directly into transactional ERP backbones with zero data duplication.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div className="text-xs font-mono text-[#0070C0] uppercase font-bold mb-1">
                      LAYER THREE: AUGMENTATION
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">Machine Learning Driver Attribution</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Automated variance analysis surfacing root-cause drivers behind complex financial and operational shifts.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div className="text-xs font-mono text-[#0070C0] uppercase font-bold mb-1">
                      LAYER FOUR: GOVERNANCE
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">Audited Row-Level Security &amp; Lineage</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Cryptographic data provenance connecting executive KPIs directly to underlying transactional ledger hashes.
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* TAB 3: Interactive BI Protocols Sandbox */}
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
                  onClick={() => setActiveProtocolTab('semantic-layer')}
                  className={`flex-1 py-2 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    activeProtocolTab === 'semantic-layer'
                      ? 'bg-[#0070C0] text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  Semantic Fabric
                </button>
                <button
                  onClick={() => setActiveProtocolTab('augmented-variance')}
                  className={`flex-1 py-2 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    activeProtocolTab === 'augmented-variance'
                      ? 'bg-[#0070C0] text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  Variance Attribution
                </button>
                <button
                  onClick={() => setActiveProtocolTab('ledger-drillthrough')}
                  className={`flex-1 py-2 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    activeProtocolTab === 'ledger-drillthrough'
                      ? 'bg-[#0070C0] text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  Ledger Drill-Through
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
                    Analytics Operational Sequence
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
              Phased Enterprise Business Intelligence Roadmap
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              A structured, risk-mitigated journey from fragmented reporting workbooks to an augmented executive decision cockpit.
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
              <span>EXECUTIVE CLARIFICATIONS &bull; BUSINESS INTELLIGENCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#005A9C] via-[#0070C0] to-sky-500">Analytics Questions</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
              Addressing key strategic, operational, and architectural business intelligence considerations for enterprise technology leaders.
            </p>
          </div>

          <div className="space-y-4">
            {businessIntelligenceFaqs.map((faq, index) => {
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
            Ready to Upgrade to Augmented Enterprise Business Intelligence?
          </h2>

          <p className="text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed font-normal">
            Collaborate with senior analytics architects to establish your canonical semantic layer, deploy sub-second executive boardroom cockpits, and unlock conversational AI decision intelligence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
            <button
              onClick={() => onOpenContact ? onOpenContact('Enterprise Business Intelligence Workshop') : undefined}
              className="px-9 py-4 rounded-xl font-bold text-sm sm:text-base text-slate-900 bg-white hover:bg-sky-50 shadow-xl transition-all flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              <span>Schedule Analytics Workshop</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#0070C0]" />
            </button>
            <Link
              to="/digital-intelligence/predictive-analytics"
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold uppercase tracking-wider backdrop-blur-md flex items-center gap-2 group transition-all w-full sm:w-auto justify-center text-sm"
            >
              <span>Explore Predictive Analytics</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-7 text-xs sm:text-sm text-sky-100 font-mono">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              <span>100% Metric Consistency</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-cyan-200" />
              <span>Sub-Second Query Federation</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Audited Generative NLQ</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default BusinessIntelligencePage;
