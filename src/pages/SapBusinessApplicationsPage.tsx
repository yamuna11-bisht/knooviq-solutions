import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Search, 
  Settings, 
  ShieldCheck, 
  BarChart3, 
  Database, 
  Target, 
  Zap, 
  Sparkles, 
  Layers, 
  Globe, 
  RefreshCw, 
  Cpu,
  Wallet,
  Truck,
  Users,
  HeartHandshake,
  CheckCircle2,
  Activity,
  Workflow,
  Network,
  Boxes,
  Compass,
  ArrowUpRight,
  Server,
  Cloud,
  FileCheck,
  Bot,
  PieChart,
  ShoppingBag,
  Store,
  Eye,
  Sliders,
  Sparkle,
  Maximize2,
  X,
  TrendingUp
} from 'lucide-react';
import { SapFinanceSolutionView } from '../components/transformation/SapFinanceSolutionView';
import { SapSupplyChainSolutionView } from '../components/transformation/SapSupplyChainSolutionView';
import { SapHumanCapitalSolutionView } from '../components/transformation/SapHumanCapitalSolutionView';
import { SapCustomerExperienceSolutionView } from '../components/transformation/SapCustomerExperienceSolutionView';

interface SapBusinessApplicationsPageProps {
  onOpenContact: (topic?: string) => void;
  initialApp?: 's4hana' | 'finance' | 'supply-chain' | 'human-capital' | 'cx' | string;
}

export type BusinessAppKey = 's4hana' | 'finance' | 'supply-chain' | 'human-capital' | 'cx';

export interface ArchitectureNodeDetail {
  id: string;
  name: string;
  category: string;
  role: string;
  specs: string[];
}

export interface BusinessAppContent {
  id: BusinessAppKey;
  tabLabel: string;
  appTitle: string;
  categoryTag: string;
  heroBadge: string;
  heroHeadline: string;
  heroSubheadline: string;
  
  // Section 2: Executive Overview & Clean Core Capabilities
  overviewTag: string;
  overviewHeading: string;
  overviewNarrative1: string;
  overviewNarrative2: string;
  cleanCorePillars: {
    title: string;
    description: string;
    features: string[];
    tag: string;
    iconBg: string;
    iconColor: string;
    image?: string;
  }[];

  // Section 3: Architecture Diagram & Data Flow
  architectureHeading: string;
  architectureSubtitle: string;
  centralCoreName: string;
  centralCoreRole: string;
  architectureNodes: ArchitectureNodeDetail[];

  // Section 4: Enterprise Transformation Journey (Flow Graph)
  journeyHeading: string;
  journeySubtitle: string;
  journeyStages: {
    stage: string;
    title: string;
    phaseName: string;
    description: string;
    deliverable: string;
    outcomeTag: string;
  }[];

  // Section 5: Capability Radar & Operating Model Matrix
  radarHeading: string;
  radarSubtitle: string;
  radarVectors: {
    label: string;
    legacyState: string;
    sapState: string;
    transformationImpact: string;
    legacyScore: number;
    sapScore: number;
  }[];

  // Section 6: Industry Scenarios & Real-World Solutions
  scenariosHeading: string;
  scenariosSubtitle: string;
  scenarios: {
    industry: string;
    challenge: string;
    solution: string;
    valueOutcome: string;
    accentColor: string;
  }[];

  // Section 7: Integration Topology & Ecosystem Bridge
  ecosystemHeading: string;
  ecosystemSubtitle: string;
  ecosystemSatellites: {
    name: string;
    protocol: string;
    role: string;
    accent: string;
  }[];

  // Section 8: Transformation Advisory Gateway
  advisoryHeading: string;
  advisorySubtitle: string;
  advisorySteps: {
    num: string;
    title: string;
    desc: string;
    duration: string;
  }[];
}

const BUSINESS_APPS_DATA: Record<BusinessAppKey, BusinessAppContent> = {
  's4hana': {
    id: 's4hana',
    tabLabel: 'SAP S/4HANA',
    appTitle: 'Enterprise Digital Core',
    categoryTag: 'INTELLIGENT ERP SUITE',
    heroBadge: 'Core Enterprise Backbone',
    heroHeadline: 'Autonomous Digital Core for Modern Enterprise Orchestration',
    heroSubheadline: 'Unify corporate transactions, multi-dimensional analytics, and automated workflows on an in-memory platform engineered for uninterrupted enterprise agility.',
    
    // S2
    overviewTag: 'CLEAN CORE ARCHITECTURE',
    overviewHeading: 'Modernizing the Strategic Enterprise Engine',
    overviewNarrative1: 'SAP S/4HANA transforms fragmented operations into an interconnected, real-time operating system. By consolidating transaction processing and analytical reasoning onto a unified in-memory architecture, organizations eliminate data latency, deprecate brittle ETL pipelines, and enable autonomous cross-functional decisioning.',
    overviewNarrative2: 'Adhering strictly to Clean Core principles, custom business extensions are decoupled from core application logic using the SAP Business Technology Platform. This ensures your transactional core remains pristine, compliant, and continuously upgradable without expensive regressions.',
    cleanCorePillars: [
      {
        title: 'Universal Journal Architecture',
        description: 'Single-source-of-truth financial and operational data model unifying general ledger, profitability analysis, and asset tracking.',
        features: ['Zero data redundancy between subledgers', 'Instantaneous real-time ledger reconciliation', 'Granular multi-dimensional line item granularity'],
        tag: 'TOUCHLESS DATA CONSISTENCY',
        iconBg: 'bg-sky-50 dark:bg-sky-950/60',
        iconColor: 'text-sky-500',
        image: '/images/sap_app_s4hana_3d.jpg'
      },
      {
        title: 'Embedded Machine Reasoning',
        description: 'Native machine learning algorithms predicting supply bottlenecks, customer demand fluctuations, and payment delays.',
        features: ['Automated anomaly detection across transactions', 'Predictive material requirements planning', 'Contextual Joule assistant orchestration'],
        tag: 'CONTINUOUS INTELLIGENCE',
        iconBg: 'bg-cyan-50 dark:bg-cyan-950/60',
        iconColor: 'text-[#00A3E0]',
        image: '/images/sap_cloud_erp_architecture.png'
      },
      {
        title: 'Clean Core Extensibility',
        description: 'Strict separation of bespoke innovations from core ERP code via developer extensibility and side-by-side BTP microservices.',
        features: ['Pristine zero-modification ERP codebase', 'Frictionless quarterly cloud upgrades', 'Cloud-native API-led integration contracts'],
        tag: 'DECOUPLED AGILITY',
        iconBg: 'bg-emerald-50 dark:bg-emerald-950/60',
        iconColor: 'text-emerald-500',
        image: '/images/sap_app_s4hana_3d.jpg'
      },
      {
        title: 'Hybrid Cloud Orchestration',
        description: 'Flexible deployment topology spanning private cloud instances, public multi-tenant architectures, and hybrid distributed nodes.',
        features: ['High-availability fault-tolerant clusters', 'Sovereign regional data residency governance', 'Dynamic elastic workload scalability'],
        tag: 'MAXIMUM RESILIENCE',
        iconBg: 'bg-indigo-50 dark:bg-indigo-950/60',
        iconColor: 'text-indigo-500',
        image: '/images/rise_sap_architecture.png'
      }
    ],

    // S3
    architectureHeading: 'System Architecture & Event-Driven Data Pipeline',
    architectureSubtitle: 'Click or hover across architectural nodes to inspect real-time transaction pipelines and data governance boundaries.',
    centralCoreName: 'SAP S/4HANA In-Memory Engine',
    centralCoreRole: 'High-throughput transactional and analytical in-memory core orchestrating enterprise execution.',
    architectureNodes: [
      {
        id: 'node-ledger',
        name: 'ACDOCA Universal Table',
        category: 'Data Persistence',
        role: 'Single high-density table eliminating ledger reconciliation delays across all enterprise entities.',
        specs: ['Columnar in-memory compression', 'Zero synthetic lock bottlenecks', 'Native multi-currency normalization']
      },
      {
        id: 'node-event',
        name: 'SAP Event Mesh Relay',
        category: 'Event Broker',
        role: 'Asynchronous pub/sub event distribution streaming business events across hybrid cloud boundaries.',
        specs: ['Sub-millisecond event propagation', 'Enterprise CloudEvents standard compliance', 'Guaranteed at-least-once message delivery']
      },
      {
        id: 'node-ai',
        name: 'Embedded Predictive Engine',
        category: 'Inference Layer',
        role: 'On-premise and cloud machine learning models generating contextual guidance inside daily transactions.',
        specs: ['Continuous streaming inference', 'Contextual situational alerts', 'Automated document processing pipelines']
      },
      {
        id: 'node-ext',
        name: 'BTP Side-by-Side Runtime',
        category: 'Extension Platform',
        role: 'Isolated cloud sandbox where custom enterprise business logic runs independently from ERP core.',
        specs: ['RESTful Application Programming (RAP)', 'Automated CI/CD deployment pipelines', 'Role-based identity federation']
      }
    ],

    // S4
    journeyHeading: 'Enterprise Transformation Journey & Milestone Flow',
    journeySubtitle: 'Structured migration conduit guiding legacy landscapes into an intelligent, autonomous ERP core.',
    journeyStages: [
      {
        stage: 'Phase 01',
        title: 'Discovery & Readiness',
        phaseName: 'Landscape Blueprint',
        description: 'Thorough evaluation of custom code footprints, process variances, and clean core transition trajectories.',
        deliverable: 'Clean Core Architecture Blueprint',
        outcomeTag: 'COMPLIANCE AUDIT'
      },
      {
        stage: 'Phase 02',
        title: 'Harmonization',
        phaseName: 'Process Consolidation',
        description: 'Standardization of global business processes against SAP Best Practice standard catalogs.',
        deliverable: 'Unified Master Data Schema',
        outcomeTag: 'ZERO REDUNDANCY'
      },
      {
        stage: 'Phase 03',
        title: 'Core Orchestration',
        phaseName: 'System Conversion & Cutover',
        description: 'Executing in-memory database migration with automated business validation checkpoints and zero downtime cutover.',
        deliverable: 'Pristine S/4HANA Production Core',
        outcomeTag: 'FLAWLESS CUTOVER'
      },
      {
        stage: 'Phase 04',
        title: 'Autonomous Scale',
        phaseName: 'Continuous Value Creation',
        description: 'Activating embedded AI agents, predictive procurement cycles, and automated touchless operations.',
        deliverable: 'Self-Optimizing Enterprise Ecosystem',
        outcomeTag: 'MAXIMUM AGILITY'
      }
    ],

    // S5
    radarHeading: 'Capability Maturity & Operating Model Matrix',
    radarSubtitle: 'Strategic dimensional evaluation contrasting legacy ERP environments with an intelligent S/4HANA operating model.',
    radarVectors: [
      {
        label: 'Operational Agility',
        legacyState: 'Rigid batch windows and slow release cycles requiring extensive regression testing.',
        sapState: 'Instantaneous real-time execution with modular side-by-side cloud extensions.',
        transformationImpact: 'Rapid adaptation to fluctuating market opportunities without core modification.',
        legacyScore: 3,
        sapScore: 9
      },
      {
        label: 'Touchless Automation',
        legacyState: 'Heavy manual reconciliation across isolated spreadsheets and third-party tools.',
        sapState: 'End-to-end touchless document matching, automated clearing, and self-triggering workflows.',
        transformationImpact: 'Frees strategic talent from clerical burden to focus on enterprise growth.',
        legacyScore: 2,
        sapScore: 9
      },
      {
        label: 'Master Data Integrity',
        legacyState: 'Fragmented customer, material, and vendor masters across isolated divisional silos.',
        sapState: 'Universal single source of truth continuously validated by enterprise governance rules.',
        transformationImpact: 'Impeccable data reliability across every corporate dashboard and transactional screen.',
        legacyScore: 4,
        sapScore: 10
      },
      {
        label: 'Regulatory Compliance',
        legacyState: 'Retroactive audits, delayed statutory filings, and disparate multi-jurisdiction reconciliations.',
        sapState: 'Continuous compliance embedded directly into transaction entry points with auditable logs.',
        transformationImpact: 'Proactive adherence to global tax, statutory, and trade governance mandates.',
        legacyScore: 4,
        sapScore: 9
      },
      {
        label: 'Cross-Silo Visibility',
        legacyState: 'Overnight batch aggregation reports presenting delayed operational snapshots.',
        sapState: 'Live real-time visibility spanning manufacturing, sales, procurement, and financial ledgers.',
        transformationImpact: 'Executive visibility enabling decisive interventions before disruptions cascade.',
        legacyScore: 3,
        sapScore: 10
      }
    ],

    // S6
    scenariosHeading: 'Real-World Enterprise Deployment Scenarios',
    scenariosSubtitle: 'Demonstrated operational modernization across high-velocity global industry environments.',
    scenarios: [
      {
        industry: 'Advanced High-Tech Manufacturing',
        challenge: 'Prolonged component lead times and disconnected shop floor telemetry resulting in excess inventory buffering.',
        solution: 'Configured SAP S/4HANA Manufacturing with integrated demand sensing and automated Kanban replenishment.',
        valueOutcome: 'Achieved fully synchronized component procurement and real-time production visibility across global fabrication sites.',
        accentColor: '#00A3E0'
      },
      {
        industry: 'Global Consumer Packaged Goods',
        challenge: 'Disconnected trade promotion budgeting and disparate regional financial ledgers delaying statutory consolidations.',
        solution: 'Implemented Universal Journal architecture with centralized group reporting and real-time margin analysis.',
        valueOutcome: 'Unified multinational accounting entities into continuous financial reporting with instant profitability tracking.',
        accentColor: '#0284C7'
      },
      {
        industry: 'Aerospace & Defense Systems',
        challenge: 'Strict defense traceability mandates across complex multi-tier supply chains and serialized assemblies.',
        solution: 'Deployed S/4HANA serialized inventory governance with immutable engineering change tracking.',
        valueOutcome: 'Established flawless cradle-to-grave component pedigree and automated compliance verification.',
        accentColor: '#0369A1'
      },
      {
        industry: 'Multinational Healthcare & Lifesciences',
        challenge: 'Maintaining cold-chain compliance and strict FDA validation requirements across cross-border distribution.',
        solution: 'Harmonized batch management, quality inspection lots, and temperature-controlled storage triggers.',
        valueOutcome: 'Secured touchless audit readiness, uncompromising regulatory governance, and zero-compromise patient safety.',
        accentColor: '#0EA5E9'
      }
    ],

    // S7
    ecosystemHeading: 'Technology Ecosystem & Extension Topology',
    ecosystemSubtitle: 'Native connectivity linking the digital core to surrounding analytical, integration, and cloud ecosystems.',
    ecosystemSatellites: [
      {
        name: 'SAP BTP Integration Suite',
        protocol: 'OData v4 / Open APIs',
        role: 'Seamless real-time orchestration across third-party software and legacy on-premises assets.',
        accent: 'border-sky-400/50'
      },
      {
        name: 'SAP Datasphere & Analytics',
        protocol: 'Zero-ETL Federation',
        role: 'Semantic data fabric preserving business context for enterprise-wide analytical modeling.',
        accent: 'border-cyan-400/50'
      },
      {
        name: 'SAP Joule & Copilot AI',
        protocol: 'Contextual REST Mesh',
        role: 'Generative AI companion automating routine document drafts, inquiries, and exception workflows.',
        accent: 'border-indigo-400/50'
      },
      {
        name: 'Hyperscaler Sovereign Cloud',
        protocol: 'Secure Virtual VPC',
        role: 'Enterprise cloud hosting meeting strict government and international sovereignty mandates.',
        accent: 'border-emerald-400/50'
      }
    ],

    // S8
    advisoryHeading: 'Strategic Adoption Advisory & Architecture Consultation',
    advisorySubtitle: 'A proven advisory engagement framework ensuring minimal operational disruption and rapid time-to-value.',
    advisorySteps: [
      {
        num: '01',
        title: 'Architecture & Clean Core Audit',
        desc: 'Deep inspection of current ECC/legacy custom modifications, identifying standard replacement opportunities.',
        duration: 'Strategic Discovery'
      },
      {
        num: '02',
        title: 'Sandbox Pilot & Value Validation',
        desc: 'Simulating your actual data in a pre-configured SAP S/4HANA sandbox to validate process velocity gains.',
        duration: 'Proof of Value'
      },
      {
        num: '03',
        title: 'Enterprise Cutover & Continuous Scale',
        desc: 'Executing phased wave cutovers with automated testing and continuous hypercare value realization.',
        duration: 'Production Go-Live'
      }
    ]
  },

  'finance': {
    id: 'finance',
    tabLabel: 'Finance',
    appTitle: 'Financial Management & Central Finance',
    categoryTag: 'MODERN FINANCIAL EXCELLENCE',
    heroBadge: 'Touchless Financial Operations',
    heroHeadline: 'Continuous Accounting & Touchless Financial Orchestration',
    heroSubheadline: 'Transition from historic batch closing to real-time financial transparency, unified global ledgers, and automated multi-GAAP reporting.',
    
    // S2
    overviewTag: 'INTELLIGENT TREASURY & RECORD-TO-REPORT',
    overviewHeading: 'Elevating Finance from Bookkeeping to Strategic Value Engine',
    overviewNarrative1: 'SAP S/4HANA Finance fundamentally reimagines the office of the CFO. By consolidating general ledger, profitability analysis, accounts payable, accounts receivable, and fixed assets into the Universal Journal (ACDOCA), financial leaders gain instant visibility into company-wide cash positions and margin contributions without waiting for month-end batch runs.',
    overviewNarrative2: 'For complex multi-ERP conglomerates, Central Finance serves as an agile consolidation bridge — replicating transactional details from disparate source ERPs into a central S/4HANA instance in real time, delivering standardized financial reporting without tearing down legacy branch installations.',
    cleanCorePillars: [
      {
        title: 'Continuous Touchless Accounting',
        description: 'Automated intercompany reconciliations, bank statement matching, and balance sheet variance analysis running continuously.',
        features: ['Automated bank transaction clearing', 'Touchless intercompany elimination', 'Real-time perpetual financial closing'],
        tag: 'PERPETUAL CLOSE',
        iconBg: 'bg-emerald-50 dark:bg-emerald-950/60',
        iconColor: 'text-emerald-500',
        image: '/images/sap_app_finance_3d.jpg'
      },
      {
        title: 'Central Finance Architecture',
        description: 'Non-disruptive financial consolidation engine replicating financial documents from multi-vendor ERPs in real time.',
        features: ['Real-time transactional journal replication', 'Harmonized corporate chart of accounts', 'Centralized global credit and collections'],
        tag: 'NON-DISRUPTIVE CONSOLIDATION',
        iconBg: 'bg-sky-50 dark:bg-sky-950/60',
        iconColor: 'text-sky-500',
        image: '/images/sap_cloud_erp_architecture.png'
      },
      {
        title: 'Intelligent Treasury & Cash Management',
        description: 'Unified cash positioning, automated liquidity forecasting, and integrated currency risk hedging strategies.',
        features: ['Real-time global bank account visibility', 'Predictive multi-week cash flow horizons', 'Automated financial risk and exposure mitigation'],
        tag: 'REAL-TIME LIQUIDITY',
        iconBg: 'bg-cyan-50 dark:bg-cyan-950/60',
        iconColor: 'text-[#00A3E0]',
        image: '/images/sap_app_finance_3d.jpg'
      },
      {
        title: 'Automated Multi-GAAP Governance',
        description: 'Parallel ledgers natively recording transactions under IFRS, US GAAP, and local statutory standards simultaneously.',
        features: ['Parallel ledger valuation postings', 'Automated statutory tax compliance rules', 'Immutable audit trails with drill-down lineage'],
        tag: 'UNCOMPROMISING COMPLIANCE',
        iconBg: 'bg-amber-50 dark:bg-amber-950/60',
        iconColor: 'text-amber-500',
        image: '/images/sap_app_s4hana_3d.jpg'
      }
    ],

    // S3
    architectureHeading: 'Financial Data Pipeline & Universal Ledger Core',
    architectureSubtitle: 'Inspect the single-source-of-truth pipeline connecting transaction ingestion to instant statutory consolidation.',
    centralCoreName: 'Universal Financial Journal (ACDOCA)',
    centralCoreRole: 'Unified ledger combining managerial accounting, asset valuation, and financial accounting in one table.',
    architectureNodes: [
      {
        id: 'node-cfin',
        name: 'Central Finance SLT Ingestion',
        category: 'Replication Layer',
        role: 'High-speed replication engine streaming transactions from heterogeneous SAP and non-SAP source instances.',
        specs: ['Continuous change data capture', 'Automated accounting document mapping', 'Error isolation and automated re-posting']
      },
      {
        id: 'node-fpa',
        name: 'Predictive FP&A Analytics Engine',
        category: 'Planning & Simulation',
        role: 'Driver-based financial planning engine supporting continuous forecasting and real-time what-if scenario simulations.',
        specs: ['Direct ledger integration', 'Multi-scenario driver modeling', 'Instant variance root-cause decomposition']
      },
      {
        id: 'node-treasury',
        name: 'Corporate Treasury Hub',
        category: 'Cash & Risk Management',
        role: 'Centralized liquidity cockpit connecting banking networks via SWIFT and Open Banking APIs.',
        specs: ['Direct bank API communication', 'Automated FX exposure matching', 'Automated debt and investment valuation']
      },
      {
        id: 'node-compliance',
        name: 'Group Reporting & Tax Compliance',
        category: 'Statutory Consolidation',
        role: 'Consolidation engine generating audit-ready financial statements directly from underlying transactional journals.',
        specs: ['Matrix elimination rules', 'Currency translation harmonization', 'Complete audit trail transparency']
      }
    ],

    // S4
    journeyHeading: 'Financial Transformation & Continuous Accounting Roadmap',
    journeySubtitle: 'Structured migration conduit guiding finance organizations toward real-time touchless closing.',
    journeyStages: [
      {
        stage: 'Phase 01',
        title: 'Ledger Alignment',
        phaseName: 'Chart of Accounts Rationalization',
        description: 'Standardizing disparate regional account trees into a unified global chart of accounts with universal dimensions.',
        deliverable: 'Global Accounting Architecture Matrix',
        outcomeTag: 'DATA UNIFICATION'
      },
      {
        stage: 'Phase 02',
        title: 'Central Replication',
        phaseName: 'Central Finance Pilot',
        description: 'Deploying real-time transactional replication from existing ERP instances to establish a unified reporting hub.',
        deliverable: 'Operational Central Finance Sandbox',
        outcomeTag: 'ZERO DISRUPTION'
      },
      {
        stage: 'Phase 03',
        title: 'Close Automation',
        phaseName: 'Continuous Close Activation',
        description: 'Enabling automated intercompany clearing, touchless reconciliations, and parallel multi-GAAP valuations.',
        deliverable: 'Continuous Financial Close Framework',
        outcomeTag: 'TOUCHLESS CLEARING'
      },
      {
        stage: 'Phase 04',
        title: 'Predictive Finance',
        phaseName: 'Cognitive Treasury & Planning',
        description: 'Activating predictive cash forecasts, automated credit exposure recalculation, and AI-driven variance insights.',
        deliverable: 'Autonomous Strategic Finance Hub',
        outcomeTag: 'PROACTIVE GOVERNANCE'
      }
    ],

    // S5
    radarHeading: 'Financial Capability Maturity & Operating Model Matrix',
    radarSubtitle: 'Strategic dimensional evaluation comparing legacy batch finance operations with real-time continuous accounting.',
    radarVectors: [
      {
        label: 'Closing Speed & Frequency',
        legacyState: 'Exhaustive multi-day month-end scramble tied up with manual balance reconciliations.',
        sapState: 'Continuous accounting with transactions validated and reconciled in real-time as they occur.',
        transformationImpact: 'Transforms month-end closing from an emergency drill into a quiet non-event.',
        legacyScore: 2,
        sapScore: 9
      },
      {
        label: 'Reconciliation Overhead',
        legacyState: 'Tedious offline spreadsheet matching between management and financial reporting.',
        sapState: 'Zero reconciliation needed due to Universal Journal unifying statutory and managerial dimensions.',
        transformationImpact: 'Complete elimination of discrepancies between internal and external reports.',
        legacyScore: 3,
        sapScore: 10
      },
      {
        label: 'Cash Flow Foresight',
        legacyState: 'Retrospective cash position reporting with delayed visibility over foreign bank accounts.',
        sapState: 'Global real-time liquidity visibility with predictive scenario modeling for working capital.',
        transformationImpact: 'Optimized capital allocation and reduced short-term borrowing costs.',
        legacyScore: 4,
        sapScore: 9
      },
      {
        label: 'Statutory Multi-GAAP Governance',
        legacyState: 'Manual duplicate book adjustments prone to human error and lengthy auditor scrutiny.',
        sapState: 'Parallel ledgers natively recording local GAAP and IFRS entries synchronously.',
        transformationImpact: 'Audit-ready compliance with clear provenance down to original line items.',
        legacyScore: 3,
        sapScore: 10
      },
      {
        label: 'Granular Margin Transparency',
        legacyState: 'High-level cost center summaries without real-time customer or SKU-level contribution data.',
        sapState: 'Instantaneous multi-dimensional profitability analysis available on every transaction.',
        transformationImpact: 'Immediate strategic guidance on product pricing and commercial contracts.',
        legacyScore: 3,
        sapScore: 9
      }
    ],

    // S6
    scenariosHeading: 'Real-World Financial Modernization Scenarios',
    scenariosSubtitle: 'Demonstrated operational success stories across international corporate finance teams.',
    scenarios: [
      {
        industry: 'Global Financial Services Group',
        challenge: 'Consolidating balance sheets across dozens of autonomous subsidiaries running heterogeneous accounting software.',
        solution: 'Implemented SAP Central Finance to replicate daily journals without disrupting operational legacy instances.',
        valueOutcome: 'Achieved real-time global group consolidation with centralized credit risk management across all subsidiaries.',
        accentColor: '#10B981'
      },
      {
        industry: 'Commercial Airline & Aviation Logistics',
        challenge: 'High-volume international fuel purchases and volatile currency fluctuations causing manual treasury reconciliations.',
        solution: 'Configured SAP Advanced Treasury Management with automated SWIFT bank feeds and automated FX hedging.',
        valueOutcome: 'Secured instant real-time currency exposure tracking and automated payment settlements across world airports.',
        accentColor: '#0284C7'
      },
      {
        industry: 'Renewable Energy & Utilities Operator',
        challenge: 'Complex joint-venture accounting and multi-currency capital expenditure tracking for infrastructure construction.',
        solution: 'Deployed Universal Journal with parallel ledgers and automated asset capitalization workflows.',
        valueOutcome: 'Ensured seamless statutory compliance across international regulatory jurisdictions with transparent audit trails.',
        accentColor: '#059669'
      },
      {
        industry: 'Omnichannel Retail Conglomerate',
        challenge: 'Massive daily POS payment transactions causing massive clearing bottlenecks and delayed revenue recognition.',
        solution: 'Activated SAP Automated Clearing and Revenue Accounting and Reporting (RAR) conforming to IFRS 15.',
        valueOutcome: 'Enabled touchless automated reconciliation of high-volume payment streams with instant revenue recognition.',
        accentColor: '#00A3E0'
      }
    ],

    // S7
    ecosystemHeading: 'Financial Integration Topology & Banking Mesh',
    ecosystemSubtitle: 'Secure enterprise connectivity linking financial ledgers directly to banks, regulators, and planning hubs.',
    ecosystemSatellites: [
      {
        name: 'SWIFT & Open Banking APIs',
        protocol: 'ISO 20022 Direct Connect',
        role: 'Secure bi-directional payment transmission and automated daily account statement ingestion.',
        accent: 'border-emerald-400/50'
      },
      {
        name: 'SAP Analytics Cloud (SAC)',
        protocol: 'Direct Live Data Connection',
        role: 'Executive financial dashboards and driver-based planning directly bound to ACDOCA ledgers.',
        accent: 'border-sky-400/50'
      },
      {
        name: 'Tax & E-Invoicing Regulators',
        protocol: 'Government Statutory APIs',
        role: 'Automated real-time tax validation, e-invoice registration, and statutory reporting filing.',
        accent: 'border-cyan-400/50'
      },
      {
        name: 'Treasury Trading Portals',
        protocol: 'Secure Financial Gateway',
        role: 'Seamless integration with FX and money market platforms for automated trade confirmation.',
        accent: 'border-indigo-400/50'
      }
    ],

    // S8
    advisoryHeading: 'Finance Modernization Advisory & Assessment Gateway',
    advisorySubtitle: 'Engage with our senior financial architecture consultants to map your path to continuous accounting.',
    advisorySteps: [
      {
        num: '01',
        title: 'Financial Landscape Discovery',
        desc: 'Review of current chart of accounts, intercompany bottlenecks, and manual closing workflows.',
        duration: 'Readiness Review'
      },
      {
        num: '02',
        title: 'Universal Ledger Design & Pilot',
        desc: 'Prototyping multi-GAAP ledgers and automated bank clearing in an isolated enterprise sandbox.',
        duration: 'Architecture Pilot'
      },
      {
        num: '03',
        title: 'Central Finance Deployment',
        desc: 'Gradual deployment of Central Finance replication followed by continuous accounting rollout.',
        duration: 'Phased Migration'
      }
    ]
  },

  'supply-chain': {
    id: 'supply-chain',
    tabLabel: 'Supply Chain',
    appTitle: 'Digital Supply Chain & Logistics',
    categoryTag: 'SYNCHRONIZED LOGISTICS & PLANNING',
    heroBadge: 'Resilient Supply Network',
    heroHeadline: 'Synchronized Supply Chain Execution & High-Velocity Logistics',
    heroSubheadline: 'Anticipate disruptions with machine-learning demand sensing, optimize warehousing throughput, and automate multi-modal freight distribution.',
    
    // S2
    overviewTag: 'DEMAND SENSING TO AUTONOMOUS YARD',
    overviewHeading: 'Transforming Fragile Supply Chains into Adaptive Digital Ecosystems',
    overviewNarrative1: 'Global supply chain volatility, geopolitical realignments, and shifting customer expectations require unprecedented operational responsiveness. The SAP Digital Supply Chain suite bridges the gap between long-term strategic forecasting and dock-level warehouse execution by synchronizing SAP Integrated Business Planning (IBP), Extended Warehouse Management (EWM), and Transportation Management (TM).',
    overviewNarrative2: 'Rather than operating in disconnected information silos, planners, warehouse supervisors, and freight forwarders collaborate on a unified telemetry backbone. Live sensor signals, automated demand sensing algorithms, and robotic storage systems ensure inventories are positioned precisely where demand emerges.',
    cleanCorePillars: [
      {
        title: 'SAP Integrated Business Planning (IBP)',
        description: 'Cloud-native demand sensing, sales and operations planning (S&OP), and multi-echelon inventory optimization.',
        features: ['Machine learning statistical demand algorithms', 'Real-time what-if scenario simulations', 'Constrained capacity and supply network leveling'],
        tag: 'PREDICTIVE S&OP',
        iconBg: 'bg-cyan-50 dark:bg-cyan-950/60',
        iconColor: 'text-[#00A3E0]',
        image: '/images/sap_app_supplychain_3d.jpg'
      },
      {
        title: 'SAP Extended Warehouse Management (EWM)',
        description: 'High-throughput distribution center automation orchestrating robotics, wave picking, slotting, and labor management.',
        features: ['Automated Guided Vehicle (AGV) orchestration', 'Dynamic wave picking and cross-docking', 'Sub-second RF barcode and RFID verification'],
        tag: 'AUTONOMOUS FULFILLMENT',
        iconBg: 'bg-sky-50 dark:bg-sky-950/60',
        iconColor: 'text-sky-500',
        image: '/images/sap_app_supplychain_3d.jpg'
      },
      {
        title: 'SAP Transportation Management (TM)',
        description: 'Multi-modal freight planning, automated dynamic load building, carrier tendering, and track-and-trace tracking.',
        features: ['Multi-modal routing and load consolidation', 'Automated carrier bidding and contract dispatch', 'Real-time GPS telemetry and exception alerts'],
        tag: 'OPTIMIZED TRANSIT',
        iconBg: 'bg-blue-50 dark:bg-blue-950/60',
        iconColor: 'text-blue-500',
        image: '/images/distribution_global_net.jpg'
      },
      {
        title: 'Logistics Business Network (LBN)',
        description: 'Collaborative cloud network linking shippers, carriers, freight forwarders, and logistics tracking providers.',
        features: ['Real-time freight milestone transparency', 'Touchless freight invoice audit and settlement', 'Direct supplier dock appointment scheduling'],
        tag: 'COLLABORATIVE NETWORK',
        iconBg: 'bg-teal-50 dark:bg-teal-950/60',
        iconColor: 'text-teal-500',
        image: '/images/distribution_hero_3d.jpg'
      }
    ],

    // S3
    architectureHeading: 'Digital Supply Chain Synchronized Orchestration Core',
    architectureSubtitle: 'Explore the end-to-end data flow bridging strategic planning horizons down to physical dock-door movements.',
    centralCoreName: 'Digital Supply Chain Execution Core',
    centralCoreRole: 'Real-time operational bridge synchronizing demand signals with physical fulfillment and freight dispatch.',
    architectureNodes: [
      {
        id: 'node-ibp',
        name: 'SAP IBP Demand Engine',
        category: 'Demand Sensing',
        role: 'Continuously evaluates market signals, historical seasonality, and weather models to generate constrained demand forecasts.',
        specs: ['Multi-echelon safety stock balancing', 'Collaborative consensus demand planning', 'Automated supply deficit alerts']
      },
      {
        id: 'node-ewm',
        name: 'SAP EWM Warehouse Control',
        category: 'Intralogistics',
        role: 'Orchestrates automated storage systems, conveyor sorting lines, and workforce task interleaving.',
        specs: ['Dynamic warehouse slotting optimization', 'Automated yard management gate triggers', 'Material flow system (MFS) integration']
      },
      {
        id: 'node-tm',
        name: 'SAP TM Freight Optimizer',
        category: 'Transportation',
        role: 'Calculates optimal multi-stop consolidation routes, selects compliant freight carriers, and monitors in-transit milestones.',
        specs: ['3D container load packing algorithms', 'Dynamic carrier tendering protocols', 'Automated freight accrual accounting']
      },
      {
        id: 'node-track',
        name: 'Global Telemetry & Track-Trace',
        category: 'IoT & Telematics',
        role: 'Monitors cold-chain sensor status, container GPS coordinates, and port demurrage alerts in real time.',
        specs: ['Continuous sensor anomaly detection', 'Automated geofence departure logging', 'Digital bill of lading verification']
      }
    ],

    // S4
    journeyHeading: 'Supply Chain Modernization & Synchronization Conduit',
    journeySubtitle: 'Structured migration blueprint converting disjointed logistics into a synchronized, resilient fulfillment engine.',
    journeyStages: [
      {
        stage: 'Phase 01',
        title: 'Planning Calibration',
        phaseName: 'IBP Cloud Blueprinting',
        description: 'Harmonizing global sales history, lead times, and bill of materials into unified IBP planning areas.',
        deliverable: 'Demand Sensing & S&OP Architecture',
        outcomeTag: 'FORECAST ACCURACY'
      },
      {
        stage: 'Phase 02',
        title: 'Warehouse Modernization',
        phaseName: 'EWM Intralogistics Deployment',
        description: 'Implementing high-density warehouse storage logic, mobile RF execution, and robotic equipment integration.',
        deliverable: 'Autonomous Distribution Center Blueprint',
        outcomeTag: 'MAXIMUM THROUGHPUT'
      },
      {
        stage: 'Phase 03',
        title: 'Freight Automation',
        phaseName: 'TM Routing & Carrier Integration',
        description: 'Connecting carrier EDI gateways, automated load packing algorithms, and collaborative freight bidding portals.',
        deliverable: 'Unified Freight Execution Engine',
        outcomeTag: 'ROUTE EFFICIENCY'
      },
      {
        stage: 'Phase 04',
        title: 'Control Tower',
        phaseName: 'Autonomous Supply Network',
        description: 'Activating end-to-end supply chain control tower with automated disruption mitigation workflows.',
        deliverable: 'Self-Balancing Logistics Network',
        outcomeTag: 'CONTINUOUS RESILIENCE'
      }
    ],

    // S5
    radarHeading: 'Supply Chain Capability Maturity & Operating Model Matrix',
    radarSubtitle: 'Strategic evaluation comparing fragmented logistics operations against an integrated SAP digital supply network.',
    radarVectors: [
      {
        label: 'Disruption Responsiveness',
        legacyState: 'Blind reactions to supplier delays discovered only when shipments fail to arrive at destination.',
        sapState: 'Automated multi-tier alert monitoring re-routing shipments dynamically before assembly stops.',
        transformationImpact: 'Proactive crisis containment preserving production uptime and customer trust.',
        legacyScore: 3,
        sapScore: 9
      },
      {
        label: 'Warehouse Velocity',
        legacyState: 'Paper-based pick lists, manual stock checks, and congested staging docks.',
        sapState: 'Dynamic wave planning, automated guided vehicles, and system-directed task interleaving.',
        transformationImpact: 'Drastic reduction in order cycle times and touchless warehouse fulfillment.',
        legacyScore: 3,
        sapScore: 10
      },
      {
        label: 'Inventory Precision',
        legacyState: 'Heavy reliance on safety buffer stock due to unreliable multi-echelon demand forecasts.',
        sapState: 'Multi-echelon inventory optimization positioning inventory precisely based on real-time consumption.',
        transformationImpact: 'Drastically reduced working capital lockup while maximizing product availability.',
        legacyScore: 4,
        sapScore: 9
      },
      {
        label: 'Freight Settlement Governance',
        legacyState: 'Manual paper invoice reconciliation plagued by carrier billing disputes and duplicate charges.',
        sapState: 'Automated freight audit, dispute management, and touchless three-way invoice matching.',
        transformationImpact: 'Elimination of freight billing leakage and automated audit-compliant settlements.',
        legacyScore: 2,
        sapScore: 10
      },
      {
        label: 'Cross-Network Visibility',
        legacyState: 'Isolated updates locked within separate transport dispatchers and internal ERP modules.',
        sapState: 'Single collaborative control tower tracking raw material transit to customer delivery.',
        transformationImpact: 'Flawless transparency across shippers, logistics partners, and enterprise customers.',
        legacyScore: 3,
        sapScore: 9
      }
    ],

    // S6
    scenariosHeading: 'Real-World Supply Chain Transformation Scenarios',
    scenariosSubtitle: 'Proven operational deployments across mission-critical distribution networks.',
    scenarios: [
      {
        industry: 'Automotive Original Equipment Manufacturer (OEM)',
        challenge: 'Synchronizing thousands of just-in-time component deliveries across tiered international suppliers.',
        solution: 'Deployed SAP IBP and TM with synchronized production sequencing and carrier visibility.',
        valueOutcome: 'Eliminated assembly line stoppages and established transparent just-in-sequence supplier delivery.',
        accentColor: '#0284C7'
      },
      {
        industry: 'Pharmaceutical Cold-Chain Distribution',
        challenge: 'Maintaining unbroken temperature logs and immediate recall capabilities for temperature-sensitive biologics.',
        solution: 'Integrated SAP EWM batch management with real-time IoT sensor telemetry and automated quarantine alerts.',
        valueOutcome: 'Achieved flawless regulatory compliance, verified cold-chain integrity, and rapid lot traceability.',
        accentColor: '#00A3E0'
      },
      {
        industry: 'Fast-Moving Fashion & Omnichannel Apparel',
        challenge: 'Rapid seasonal inventory turnover with fluctuating online order spikes causing warehouse picking gridlock.',
        solution: 'Configured SAP EWM automated wave picking, sortation system integration, and rapid return processing.',
        valueOutcome: 'Delivered rapid order turnaround times and automated return-to-inventory restocking workflows.',
        accentColor: '#0D9488'
      },
      {
        industry: 'Heavy Machinery & Aftermarket Spares',
        challenge: 'Managing thousands of slow-moving critical spare parts across distributed regional service depots.',
        solution: 'Implemented multi-echelon inventory optimization (MEIO) in SAP IBP with dynamic depot replenishment.',
        valueOutcome: 'Maximized equipment service uptime while rationalizing surplus inventory holding across depots.',
        accentColor: '#0369A1'
      }
    ],

    // S7
    ecosystemHeading: 'Logistics Integration Topology & Partner Mesh',
    ecosystemSubtitle: 'Interconnected logistics backbone connecting internal planning modules to carriers, ports, and IoT sensors.',
    ecosystemSatellites: [
      {
        name: 'Carrier EDI & API Gateways',
        protocol: 'EDI 204 / 214 / AS2',
        role: 'Automated freight tendering, pickup booking, and continuous GPS in-transit milestone alerts.',
        accent: 'border-cyan-400/50'
      },
      {
        name: 'Automated Warehouse Robotics (AGV/MFS)',
        protocol: 'OPC-UA / Industrial IoT',
        role: 'Direct programmable interface communicating movement instructions to automated guided vehicles.',
        accent: 'border-sky-400/50'
      },
      {
        name: 'SAP Ariba Supplier Network',
        protocol: 'Commerce eXtensible Markup',
        role: 'Synchronized purchase orders, advance shipping notices (ASNs), and supplier dispatch schedules.',
        accent: 'border-teal-400/50'
      },
      {
        name: 'Global Maritime & Air Tracking',
        protocol: 'Telematics Data Stream',
        role: 'Live port congestion alerts, vessel telemetry, and customs clearance milestone tracking.',
        accent: 'border-indigo-400/50'
      }
    ],

    // S8
    advisoryHeading: 'Supply Chain Advisory & Logistics Readiness Consultation',
    advisorySubtitle: 'Collaborate with our supply chain architects to assess your logistics maturity and unlock synchronized fulfillment.',
    advisorySteps: [
      {
        num: '01',
        title: 'Supply Chain Diagnostic',
        desc: 'Analyzing inventory holding profiles, fulfillment cycle bottlenecks, and carrier coordination friction.',
        duration: 'Logistics Health Check'
      },
      {
        num: '02',
        title: 'IBP & EWM Proof of Concept',
        desc: 'Validating machine learning demand models and warehouse layout logic using historical customer transaction data.',
        duration: 'Solution Sandbox'
      },
      {
        num: '03',
        title: 'Synchronized Network Rollout',
        desc: 'Phased go-live across priority fulfillment centers, carrier onboarding, and automated control tower activation.',
        duration: 'Network Activation'
      }
    ]
  },

  'human-capital': {
    id: 'human-capital',
    tabLabel: 'Human Capital',
    appTitle: 'Workforce Intelligence & SAP SuccessFactors',
    categoryTag: 'HUMAN EXPERIENCE MANAGEMENT (HXM)',
    heroBadge: 'People-First Enterprise',
    heroHeadline: 'Human Experience Management & Strategic Workforce Intelligence',
    heroSubheadline: 'Empower modern workforces with personalized career pathways, automated multi-country payroll, and data-driven talent orchestration.',
    
    // S2
    overviewTag: 'EMPLOYEE CENTRAL TO TALENT INTELLIGENCE',
    overviewHeading: 'Reimagining Human Resources from Compliance to Competitive Advantage',
    overviewNarrative1: 'In the modern enterprise, talent agility is the definitive differentiator. SAP SuccessFactors elevates traditional human capital management into Human Experience Management (HXM). By placing individual employee growth, transparent feedback, and intuitive mobile self-service at the core, organizations cultivate engaged, high-performing global teams.',
    overviewNarrative2: 'With SAP SuccessFactors Employee Central operating as the single global system of record, organizations effortlessly navigate complex multi-country labor regulations, automate payroll with localized precision, and dynamically mobilize internal talent toward strategic initiatives using AI-driven skills ontologies.',
    cleanCorePillars: [
      {
        title: 'SAP SuccessFactors Employee Central',
        description: 'Single, secure cloud repository for global core HR data, organizational charting, and employee life-cycle transitions.',
        features: ['Localized compliance across hundreds of countries', 'Intuitive self-service employee & manager portals', 'Automated position management and org modeling'],
        tag: 'GLOBAL SYSTEM OF RECORD',
        iconBg: 'bg-emerald-50 dark:bg-emerald-950/60',
        iconColor: 'text-emerald-500'
      },
      {
        title: 'Dynamic Talent & Skills Intelligence',
        description: 'AI-powered skills ontology identifying institutional capabilities, internal mobility paths, and personalized learning journeys.',
        features: ['Automated talent gap identification', 'Internal opportunity marketplace matching', 'Continuous performance dialogue and goal tracking'],
        tag: 'SKILLS-FIRST CULTURE',
        iconBg: 'bg-sky-50 dark:bg-sky-950/60',
        iconColor: 'text-sky-500'
      },
      {
        title: 'Global Employee Payroll Engine',
        description: 'Rock-solid payroll processing engine accommodating multi-jurisdiction tax structures, collective bargaining rules, and benefit plans.',
        features: ['Automated gross-to-net calculation engine', 'Continuous pre-payroll audit and discrepancy checks', 'Seamless integration with general ledger accounting'],
        tag: 'TOUCHLESS PAYROLL',
        iconBg: 'bg-cyan-50 dark:bg-cyan-950/60',
        iconColor: 'text-[#00A3E0]'
      },
      {
        title: 'Continuous Employee Listening',
        description: 'Pulse surveys and sentiment analysis embedded into key milestone interactions from onboarding to role transitions.',
        features: ['Real-time team sentiment telemetry', 'Automated manager action recommendations', 'Attrition risk identification and intervention guidance'],
        tag: 'ACTIONABLE SENTIMENT',
        iconBg: 'bg-purple-50 dark:bg-purple-950/60',
        iconColor: 'text-purple-500'
      }
    ],

    // S3
    architectureHeading: 'HXM System Architecture & Workforce Data Highway',
    architectureSubtitle: 'Inspect the cloud architecture connecting employee profile updates to enterprise payroll and skills mobility.',
    centralCoreName: 'Employee Central Global Core',
    centralCoreRole: 'Secure centralized foundation managing global workforce identities, organizational hierarchies, and compliance.',
    architectureNodes: [
      {
        id: 'node-ec',
        name: 'Employee Central Data Core',
        category: 'Core HR Foundation',
        role: 'Standardized employee profile vault maintaining historical records, position hierarchies, and statutory attributes.',
        specs: ['Immutable audit change history', 'Granular field-level privacy permissions', 'Dynamic approval workflow routing']
      },
      {
        id: 'node-payroll',
        name: 'Employee Central Payroll Engine',
        category: 'Compensation & Benefits',
        role: 'High-speed calculation engine automating statutory tax withholdings, social contributions, and direct deposit files.',
        specs: ['Automated retrograde adjustment handling', 'Country-specific statutory tax packs', 'Direct posting to S/4HANA Finance general ledger']
      },
      {
        id: 'node-talent',
        name: 'Skills & Talent Intelligence Mesh',
        category: 'AI Talent Mobility',
        role: 'Maps employee aspirations, past achievements, and certifications against emerging enterprise project staffing needs.',
        specs: ['Dynamic skills inference algorithms', 'Personalized career journey roadmaps', 'Succession risk benchmarking']
      },
      {
        id: 'node-workzone',
        name: 'SAP Build Work Zone Portal',
        category: 'Employee Digital Workplace',
        role: 'Unified conversational digital entry point bringing HR tasks, enterprise approvals, and productivity apps together.',
        specs: ['Personalized role-based desktop cards', 'Mobile-first native experience', 'Embedded Joule HR assistant copilot']
      }
    ],

    // S4
    journeyHeading: 'Workforce Modernization & Experience Transformation Conduit',
    journeySubtitle: 'Structured migration conduit guiding HR organizations toward modern, unified workforce intelligence.',
    journeyStages: [
      {
        stage: 'Phase 01',
        title: 'Global Foundation',
        phaseName: 'Employee Central Blueprint',
        description: 'Harmonizing global job codes, compensation structures, and statutory reporting frameworks into a unified schema.',
        deliverable: 'Global Organization & Job Architecture',
        outcomeTag: 'CORE HARMONIZATION'
      },
      {
        stage: 'Phase 02',
        title: 'Payroll Automation',
        phaseName: 'Localized Payroll Deployment',
        description: 'Migrating legacy on-premise payroll to Employee Central Payroll with parallel run reconciliations.',
        deliverable: 'Validated Global Payroll Automation',
        outcomeTag: 'COMPLIANT PAYROLL'
      },
      {
        stage: 'Phase 03',
        title: 'Talent & Skills',
        phaseName: 'Performance & Learning Activation',
        description: 'Activating continuous feedback loops, curated corporate learning academies, and skills-based talent marketplaces.',
        deliverable: 'Dynamic Talent Intelligence Hub',
        outcomeTag: 'TALENT RETENTION'
      },
      {
        stage: 'Phase 04',
        title: 'Autonomous HR',
        phaseName: 'AI-Enabled Workforce Agility',
        description: 'Enabling predictive attrition alerts, automated workforce capacity modeling, and self-service conversational assistants.',
        deliverable: 'Autonomous People Operations',
        outcomeTag: 'CONTINUOUS AGILITY'
      }
    ],

    // S5
    radarHeading: 'Workforce Capability Maturity & Operating Model Matrix',
    radarSubtitle: 'Strategic evaluation comparing legacy HR administrative silos with modern Human Experience Management.',
    radarVectors: [
      {
        label: 'Employee Self-Service Experience',
        legacyState: 'Manual paper forms, delayed email requests, and cumbersome HR ticketing queues.',
        sapState: 'Intuitive mobile-first self-service with instant conversational Joule AI resolution.',
        transformationImpact: 'Immediate employee satisfaction and drastic reduction in HR clerical requests.',
        legacyScore: 2,
        sapScore: 9
      },
      {
        label: 'Global Compliance Governance',
        legacyState: 'Decentralized local payroll bureaus with disparate compliance standards and audit exposure.',
        sapState: 'Single global core with automated statutory legal updates across all operational countries.',
        transformationImpact: 'Elimination of non-compliance penalties and seamless international audits.',
        legacyScore: 3,
        sapScore: 10
      },
      {
        label: 'Internal Talent Mobility',
        legacyState: 'Opaque departmental walls with management struggling to identify internal candidate skillsets.',
        sapState: 'AI-driven opportunity marketplace matching internal candidates to priority projects dynamically.',
        transformationImpact: 'Retention of top performers and reduced external recruitment spending.',
        legacyScore: 2,
        sapScore: 9
      },
      {
        label: 'Strategic Workforce Planning',
        legacyState: 'Static annual headcount spreadsheets disconnected from actual enterprise strategic goals.',
        sapState: 'Dynamic headcount modeling tied directly to financial budgets and pipeline forecasts.',
        transformationImpact: 'Proactive talent pipeline preparation ahead of future organizational expansion.',
        legacyScore: 3,
        sapScore: 9
      },
      {
        label: 'Data Consistency & Insight',
        legacyState: 'Conflicting headcounts and disparate compensation figures across country subsidiaries.',
        sapState: 'Single verified source of workforce truth continuously reconciled with finance ledgers.',
        transformationImpact: 'Accurate executive decision-making grounded in unified global people data.',
        legacyScore: 4,
        sapScore: 10
      }
    ],

    // S6
    scenariosHeading: 'Real-World Human Experience Modernization Scenarios',
    scenariosSubtitle: 'Demonstrated workforce transformation across diverse, multi-country organizations.',
    scenarios: [
      {
        industry: 'Multinational Healthcare & Hospital Systems',
        challenge: 'Managing credentialing, shift scheduling, and localized clinical compliance across thousands of healthcare workers.',
        solution: 'Deployed SAP SuccessFactors Employee Central with automated clinical certification tracking and mobile shift access.',
        valueOutcome: 'Secured flawless regulatory credential governance and improved healthcare staff satisfaction.',
        accentColor: '#10B981'
      },
      {
        industry: 'Global Information Technology Consulting',
        challenge: 'High staff attrition and opaque project staffing causing skilled consultants to seek outside opportunities.',
        solution: 'Activated Opportunity Marketplace and dynamic skills ontology matching consultants to global project roles.',
        valueOutcome: 'Boosted internal project staffing fulfillment and retained premier technical leadership talent.',
        accentColor: '#00A3E0'
      },
      {
        industry: 'Precision Industrial Manufacturing',
        challenge: 'Complex shop-floor collective bargaining agreements and multi-shift overtime tracking across factories.',
        solution: 'Implemented Employee Central Payroll integrated with shop-floor time recording and automated union rules.',
        valueOutcome: 'Eliminated payroll calculation discrepancies and ensured transparent labor union compliance.',
        accentColor: '#0284C7'
      },
      {
        industry: 'International Banking & Financial Services',
        challenge: 'Strict regulatory executive compensation disclosures and complex multi-year performance vesting cycles.',
        solution: 'Configured SuccessFactors Compensation & Variable Pay with audit-proof governance rules.',
        valueOutcome: 'Streamlined annual compensation cycles while meeting stringent global banking oversight standards.',
        accentColor: '#8B5CF6'
      }
    ],

    // S7
    ecosystemHeading: 'HXM Integration Topology & Enterprise Ecosystem',
    ecosystemSubtitle: 'Unified architecture connecting employee identities with enterprise communication, collaboration, and ERP tools.',
    ecosystemSatellites: [
      {
        name: 'SAP S/4HANA Finance General Ledger',
        protocol: 'Direct Core Interop',
        role: 'Automated bi-directional posting of payroll expenses, tax liabilities, and benefit accruals.',
        accent: 'border-emerald-400/50'
      },
      {
        name: 'Microsoft 365 & Teams Integration',
        protocol: 'Enterprise Graph API',
        role: 'Enables quick HR approvals, peer feedback, and time tracking directly inside everyday communication apps.',
        accent: 'border-sky-400/50'
      },
      {
        name: 'SAP Fieldglass Contingent Workforce',
        protocol: 'Total Workforce API',
        role: 'Unified visibility across permanent employees, contractors, and external statement-of-work specialists.',
        accent: 'border-purple-400/50'
      },
      {
        name: 'Third-Party Identity & SSO (Okta / Azure AD)',
        protocol: 'SAML 2.0 / SCIM 2.0',
        role: 'Instant zero-trust employee provisioning, de-provisioning, and secure biometric multi-factor authentication.',
        accent: 'border-cyan-400/50'
      }
    ],

    // S8
    advisoryHeading: 'Human Capital Advisory & Readiness Assessment',
    advisorySubtitle: 'Partner with our certified SuccessFactors consultants to elevate your employee experience and payroll precision.',
    advisorySteps: [
      {
        num: '01',
        title: 'HR Architecture Diagnostic',
        desc: 'Assessing your global organizational hierarchy, local payroll complexities, and talent bottlenecks.',
        duration: 'Strategic Readiness'
      },
      {
        num: '02',
        title: 'Core Prototype & Self-Service Pilot',
        desc: 'Configuring a prototype Employee Central instance tailored to your corporate approval workflows.',
        duration: 'Prototype Validation'
      },
      {
        num: '03',
        title: 'Global Wave Deployment',
        desc: 'Executing phased country rollouts with automated data migration and hypercare adoption support.',
        duration: 'Global Rollout'
      }
    ]
  },

  'cx': {
    id: 'cx',
    tabLabel: 'Customer Experience',
    appTitle: 'SAP Customer Experience & Omnichannel Commerce',
    categoryTag: 'UNIFIED CUSTOMER ENGAGEMENT',
    heroBadge: 'Customer-First Architecture',
    heroHeadline: 'Connected Customer 360 & High-Scale Omnichannel Commerce',
    heroSubheadline: 'Unify B2B and B2C digital commerce, consent-driven customer data platforms, and automated service resolution into a continuous customer engagement loop.',
    
    // S2
    overviewTag: 'COMMERCE CLOUD TO INTELLIGENT SERVICE',
    overviewHeading: 'Bridging Front-Office Promises with Back-Office Execution',
    overviewNarrative1: 'Traditional CRM tools frequently isolate customer touchpoints from supply chain and inventory reality, leading to broken promises and frustrated buyers. SAP Customer Experience (CX) bridges the front office with the digital core — ensuring that customer interactions, bespoke price books, and real-time inventory promises are backed by live operational data.',
    overviewNarrative2: 'From enterprise B2B complex configure-price-quote (CPQ) orders to frictionless direct-to-consumer digital storefronts, the SAP CX suite harmonizes commerce, customer data, marketing automation, and field service into a unified customer journey that builds enduring loyalty.',
    cleanCorePillars: [
      {
        title: 'SAP Commerce Cloud Platform',
        description: 'Scalable, composable commerce platform supporting high-volume B2B, B2C, and B2B2C transactional storefronts.',
        features: ['Headless architecture with modern Spartacus storefronts', 'Complex B2B multi-tiered price books and punchout catalogs', 'Real-time available-to-promise inventory confirmation'],
        tag: 'COMPOSABLE COMMERCE',
        iconBg: 'bg-amber-50 dark:bg-amber-950/60',
        iconColor: 'text-amber-500'
      },
      {
        title: 'SAP Customer Data Platform (CDP)',
        description: 'Enterprise customer data platform resolving anonymous and known identities into a verified Customer 360 profile.',
        features: ['Real-time cross-channel identity resolution', 'Consent-first privacy governance conforming to GDPR and CCPA', 'Dynamic behavioral segmentation and affinity scoring'],
        tag: 'VERIFIED CUSTOMER 360',
        iconBg: 'bg-sky-50 dark:bg-sky-950/60',
        iconColor: 'text-sky-500'
      },
      {
        title: 'Intelligent Service Cloud',
        description: 'Omnichannel customer support desk providing agents with unified customer history and automated resolution guidance.',
        features: ['Unified agent workspace spanning voice, chat, and email', 'AI-assisted case summarization and solution recommendations', 'Direct integration with ERP asset warranties and billing'],
        tag: 'TOUCHLESS RESOLUTION',
        iconBg: 'bg-cyan-50 dark:bg-cyan-950/60',
        iconColor: 'text-[#00A3E0]'
      },
      {
        title: 'Omnichannel Marketing Automation',
        description: 'Predictive customer journey orchestration delivering hyper-personalized messages across digital and physical touchpoints.',
        features: ['Event-driven behavioral trigger journeys', 'AI-optimized delivery timing and channel selection', 'Closed-loop attribution connecting marketing to ERP orders'],
        tag: 'PRECISION ENGAGEMENT',
        iconBg: 'bg-rose-50 dark:bg-rose-950/60',
        iconColor: 'text-rose-500'
      }
    ],

    // S3
    architectureHeading: 'Customer Experience Architecture & Commerce Loop',
    architectureSubtitle: 'Inspect the connected data pipeline linking storefront clicks directly to ERP fulfillment and customer service.',
    centralCoreName: 'SAP CX Customer 360 Core',
    centralCoreRole: 'Single unified customer foundation linking digital touchpoints to live back-office order fulfillment.',
    architectureNodes: [
      {
        id: 'node-commerce',
        name: 'SAP Commerce Cloud Storefront',
        category: 'Omnichannel Commerce',
        role: 'High-availability headless commerce engine managing product catalogs, complex pricing rules, and checkout carts.',
        specs: ['Composable API-first architecture', 'Automated currency and tax localization', 'Direct real-time inventory validation']
      },
      {
        id: 'node-cdp',
        name: 'Customer Data Platform (CDP)',
        category: 'Identity & Data Fabric',
        role: 'Aggregates clickstreams, store purchases, and support inquiries into an enriched, actionable customer profile.',
        specs: ['Consent and preference vault', 'Real-time segment streaming', 'Machine-learning lifetime value modeling']
      },
      {
        id: 'node-service',
        name: 'Intelligent Service Cloud Hub',
        category: 'Customer Support',
        role: 'Empowers service technicians and call center agents with comprehensive order history and instant warranty lookup.',
        specs: ['Automated SLA escalation triggers', 'Embedded generative AI response drafting', 'Seamless field service dispatching']
      },
      {
        id: 'node-sync',
        name: 'ERP Live ATP & Order Bridge',
        category: 'Core Synchronization',
        role: 'Direct transactional pipeline feeding confirmed orders into S/4HANA logistics with zero data latency.',
        specs: ['Sub-second order injection', 'Automated credit limit verification', 'Live order tracking milestone updates']
      }
    ],

    // S4
    journeyHeading: 'Customer Experience Transformation Conduit',
    journeySubtitle: 'Structured migration blueprint converting disjointed front-office tools into a unified customer engine.',
    journeyStages: [
      {
        stage: 'Phase 01',
        title: 'Identity Unification',
        phaseName: 'Customer Data Architecture',
        description: 'Harmonizing fragmented customer records across legacy CRMs and POS systems into a clean Customer 360.',
        deliverable: 'Unified Customer Data Blueprint',
        outcomeTag: 'SINGLE IDENTITY'
      },
      {
        stage: 'Phase 02',
        title: 'Commerce Launch',
        phaseName: 'Headless Commerce Deployment',
        description: 'Deploying high-performance commerce storefronts with integrated catalog management and ERP pricing.',
        deliverable: 'Modern Composable Digital Storefront',
        outcomeTag: 'SEAMLESS TRANSACTIONS'
      },
      {
        stage: 'Phase 03',
        title: 'Service Synergy',
        phaseName: 'Omnichannel Support Desk',
        description: 'Empowering service agents with unified customer histories, automated case routing, and warranty resolution.',
        deliverable: 'Connected Customer Service Hub',
        outcomeTag: 'RAPID RESOLUTION'
      },
      {
        stage: 'Phase 04',
        title: 'Autonomous Growth',
        phaseName: 'Predictive Engagement Engine',
        description: 'Activating AI-driven personalized recommendations, replenishment prompts, and automated loyalty journeys.',
        deliverable: 'Continuous Customer Growth Engine',
        outcomeTag: 'LIFETIME VALUE'
      }
    ],

    // S5
    radarHeading: 'Customer Engagement Capability Maturity & Operating Matrix',
    radarSubtitle: 'Strategic evaluation comparing siloed customer contact points with an integrated SAP CX ecosystem.',
    radarVectors: [
      {
        label: 'Order Promise Accuracy',
        legacyState: 'Storefront displaying estimated stock counts that conflict with actual warehouse inventory.',
        sapState: 'Direct real-time Available-to-Promise (ATP) validation ensuring 100% fulfillable order commitments.',
        transformationImpact: 'Complete elimination of backorders and disappointed customer cancellations.',
        legacyScore: 3,
        sapScore: 10
      },
      {
        label: 'Personalized Journey Velocity',
        legacyState: 'Generic email blasts sent on fixed schedules with no relevance to recent buying behavior.',
        sapState: 'Dynamic real-time messaging triggered by behavioral milestones across digital and physical touchpoints.',
        transformationImpact: 'Dramatically higher engagement and brand affinity across all customer cohorts.',
        legacyScore: 2,
        sapScore: 9
      },
      {
        label: 'Customer 360 Cohesion',
        legacyState: 'Service agents blind to recent web orders and sales representatives unaware of open support tickets.',
        sapState: 'Single shared customer record visible synchronously across sales, service, and executive teams.',
        transformationImpact: 'Informed, empathetic customer conversations without repeated questions.',
        legacyScore: 3,
        sapScore: 10
      },
      {
        label: 'Privacy & Consent Governance',
        legacyState: 'Fragmented marketing email lists with questionable opt-in tracking and legal liability.',
        sapState: 'Centralized consent vault synchronizing customer preferences strictly conforming to international laws.',
        transformationImpact: 'Trustworthy, compliant customer interactions and zero regulatory exposure.',
        legacyScore: 3,
        sapScore: 9
      },
      {
        label: 'B2B Procurement Convenience',
        legacyState: 'Manual order entry from phoned-in PDF catalogs with delayed credit approvals.',
        sapState: 'Self-service B2B portal with custom negotiated pricing, punchouts, and instant order tracking.',
        transformationImpact: 'Frictionless purchasing for corporate clients driving higher order volume.',
        legacyScore: 2,
        sapScore: 9
      }
    ],

    // S6
    scenariosHeading: 'Real-World Customer Experience Transformation Scenarios',
    scenariosSubtitle: 'Proven customer engagement breakthroughs across B2B and consumer industries.',
    scenarios: [
      {
        industry: 'Global Industrial Equipment Manufacturer',
        challenge: 'Complex machinery with thousands of configurable components requiring weeks of back-and-forth quoting.',
        solution: 'Deployed SAP Commerce Cloud with integrated CPQ (Configure, Price, Quote) and ERP price calculation.',
        valueOutcome: 'Enabled clients to configure complex machinery online with instant real-time quote generation.',
        accentColor: '#F59E0B'
      },
      {
        industry: 'Direct-to-Consumer Luxury Fashion',
        challenge: 'Disconnect between digital luxury boutique and VIP in-store clienteling creating fragmented customer service.',
        solution: 'Configured SAP Customer Data Platform and Service Cloud linking in-store associates to online preferences.',
        valueOutcome: 'Created personalized white-glove clienteling across online, mobile, and flagship retail boutiques.',
        accentColor: '#00A3E0'
      },
      {
        industry: 'Nationwide Construction Materials Wholesale',
        challenge: 'Trade contractors demanding rapid job-site delivery and multi-project invoicing on flexible credit terms.',
        solution: 'Implemented mobile-first B2B commerce with job-site geocoding, credit validation, and automated re-ordering.',
        valueOutcome: 'Streamlined contractor ordering and established transparent multi-project billing.',
        accentColor: '#0284C7'
      },
      {
        industry: 'Telecommunications & Digital Media Services',
        challenge: 'High customer churn driven by delayed dispute resolution and opaque subscription billing invoices.',
        solution: 'Integrated SAP Service Cloud with Subscription Billing and self-service plan management.',
        valueOutcome: 'Dramatically accelerated customer service resolution and enhanced customer subscription retention.',
        accentColor: '#E11D48'
      }
    ],

    // S7
    ecosystemHeading: 'Customer Experience Integration Topology',
    ecosystemSubtitle: 'Unified architecture connecting front-end shopper storefronts directly to back-end fulfillment networks.',
    ecosystemSatellites: [
      {
        name: 'SAP S/4HANA Order Management',
        protocol: 'Direct Core Interop',
        role: 'Direct injection of validated storefront orders into warehouse fulfillment queues and financial invoicing.',
        accent: 'border-amber-400/50'
      },
      {
        name: 'Global Payment Gateways',
        protocol: 'PCI-DSS Tokenized APIs',
        role: 'Secure multi-currency payment processing supporting digital wallets, buy-now-pay-later, and corporate terms.',
        accent: 'border-sky-400/50'
      },
      {
        name: 'Logistics Track-and-Trace APIs',
        protocol: 'Carrier Real-Time Webhooks',
        role: 'Live parcel status alerts sent automatically to customer smartphones and customer self-service portals.',
        accent: 'border-cyan-400/50'
      },
      {
        name: 'Marketing & Social Channels',
        protocol: 'Omnichannel Event Feeds',
        role: 'Coordinated marketing campaigns and conversational commerce across messaging platforms and search engines.',
        accent: 'border-rose-400/50'
      }
    ],

    // S8
    advisoryHeading: 'Customer Experience Advisory & Modernization Gateway',
    advisorySubtitle: 'Partner with our CX architects to design an interconnected commerce and customer service ecosystem.',
    advisorySteps: [
      {
        num: '01',
        title: 'Customer Journey Diagnostic',
        desc: 'Analyzing buyer touchpoint friction, cart abandonment points, and back-office order latency.',
        duration: 'Journey Assessment'
      },
      {
        num: '02',
        title: 'Commerce & CDP Prototype',
        desc: 'Creating a tailored prototype storefront connecting your catalog to an automated ERP pricing engine.',
        duration: 'Interactive Sandbox'
      },
      {
        num: '03',
        title: 'Omnichannel Launch & Optimization',
        desc: 'Deploying composable commerce storefronts, integrating service desks, and orchestrating customer data.',
        duration: 'Production Deployment'
      }
    ]
  }
};


interface HeroBadgeConfig {
  title: string;
  subtitle: string;
  iconName: 'Database' | 'Cpu' | 'ShieldCheck' | 'Wallet' | 'Layers' | 'Boxes' | 'Truck' | 'Workflow' | 'Users' | 'Sparkles' | 'HeartHandshake' | 'Store' | 'Zap';
}

interface HeroVisualItem {
  image: string;
  badgeTop: HeroBadgeConfig;
  badgeBottom: HeroBadgeConfig;
  badgeSide: HeroBadgeConfig;
  orbitNodes: string[];
}

interface HeroBadgeConfig {
  title: string;
  subtitle: string;
  iconName: 'Database' | 'Cpu' | 'ShieldCheck' | 'Wallet' | 'Layers' | 'Boxes' | 'Truck' | 'Workflow' | 'Users' | 'Sparkles' | 'HeartHandshake' | 'Store' | 'Zap';
}

interface HeroVisualItem {
  image: string;
  badgeTop: HeroBadgeConfig;
  badgeBottom: HeroBadgeConfig;
  badgeSide: HeroBadgeConfig;
  orbitNodes: string[];
  pipelineStages: [string, string, string];
}

const HERO_VISUALS_CONFIG: Record<BusinessAppKey, HeroVisualItem> = {
  's4hana': {
    image: '/images/sap_app_s4hana_3d.jpg',
    badgeTop: {
      title: 'Universal Journal ACDOCA',
      subtitle: 'Single Source of Financial & Operational Truth',
      iconName: 'Database'
    },
    badgeBottom: {
      title: 'In-Memory HANA Engine',
      subtitle: 'Real-Time Transaction Telemetry & Sub-Second Processing',
      iconName: 'Cpu'
    },
    badgeSide: {
      title: 'Clean Core Architecture',
      subtitle: 'Decoupled BTP Extensions & Zero Modification Core',
      iconName: 'ShieldCheck'
    },
    orbitNodes: ['Event Mesh', 'Joule AI', 'ACDOCA Core', 'Clean Core'],
    pipelineStages: ['Source Transactions', 'SAP Event Mesh', 'Universal Journal ACDOCA']
  },
  'finance': {
    image: '/images/sap_app_finance_3d.jpg',
    badgeTop: {
      title: 'Perpetual Financial Close',
      subtitle: 'Continuous Touchless Accounting & Reconciliation',
      iconName: 'Wallet'
    },
    badgeBottom: {
      title: 'Central Finance (cFin) SLT',
      subtitle: 'Non-Disruptive Multi-ERP Journal Replication',
      iconName: 'Layers'
    },
    badgeSide: {
      title: 'Parallel Multi-GAAP & Green Ledger',
      subtitle: 'IFRS, Statutory & Carbon Line-Item Accounting',
      iconName: 'ShieldCheck'
    },
    orbitNodes: ['SWIFT ISO', 'FP&A Engine', 'Tax Vault', 'Cash Mesh'],
    pipelineStages: ['Multi-Entity GL', 'Central Finance SLT', 'Continuous Reporting']
  },
  'supply-chain': {
    image: '/images/sap_app_supplychain_3d.jpg',
    badgeTop: {
      title: 'IBP Demand Sensing',
      subtitle: 'AI Multi-Echelon Stock Balancing & Forecast Accuracy',
      iconName: 'Boxes'
    },
    badgeBottom: {
      title: 'TM Multi-Modal Logistics',
      subtitle: 'Dynamic Routing, Live Freight Milestones & Yard Sync',
      iconName: 'Truck'
    },
    badgeSide: {
      title: 'Autonomous EWM Robotics Hub',
      subtitle: 'Robotic Sortation, AGVs & Automated Wave Picking',
      iconName: 'Workflow'
    },
    orbitNodes: ['IoT Cold-Chain', 'AGV Robotics', 'Carrier EDI', 'LBN Hub'],
    pipelineStages: ['IBP Demand Sensing', 'EWM Warehouse', 'TM Multi-Modal Routing']
  },
  'human-capital': {
    image: '/images/sap_app_humancapital_3d.jpg',
    badgeTop: {
      title: 'Employee Central Global Core',
      subtitle: 'Universal Master Record & Real-Time Org Hierarchy',
      iconName: 'Users'
    },
    badgeBottom: {
      title: 'Talent Intelligence Mesh',
      subtitle: 'AI-Driven Skills Ontology & Internal Mobility Matching',
      iconName: 'Sparkles'
    },
    badgeSide: {
      title: 'Automated Global Payroll',
      subtitle: 'Statutory Compliance Across 100+ Jurisdictions',
      iconName: 'ShieldCheck'
    },
    orbitNodes: ['Build WorkZone', 'HXM Journey', 'Skills Graph', 'Joule HR'],
    pipelineStages: ['Employee Central', 'Skills Intelligence', 'Dynamic Workforce']
  },
  'cx': {
    image: '/images/sap_app_cx_3d.jpg',
    badgeTop: {
      title: 'Verified Customer 360 & CDP',
      subtitle: 'Real-Time Cross-Channel Identity Stitching',
      iconName: 'HeartHandshake'
    },
    badgeBottom: {
      title: 'SAP Commerce Cloud',
      subtitle: 'Headless Composable Architecture & Sub-Second P95',
      iconName: 'Store'
    },
    badgeSide: {
      title: 'Live ATP Inventory Sync',
      subtitle: 'Direct S/4HANA Order Orchestration & AI Pricing',
      iconName: 'Zap'
    },
    orbitNodes: ['CDP Privacy', 'Omnichannel', 'CPQ Engine', 'Service Hub'],
    pipelineStages: ['Omnichannel Store', 'Customer CDP', 'Direct ERP Fulfillment']
  }
};

const PILLAR_FALLBACK_IMAGES = [
  '/images/sap_app_s4hana_3d.jpg',
  '/images/sap_app_finance_3d.jpg',
  '/images/sap_app_supplychain_3d.jpg',
  '/images/sap_app_humancapital_3d.jpg'
];

const CARD_COLOR_THEMES = [
  {
    // Theme 1: Luminous Cyber Cyan & Ice Blue Shading
    cardBg: 'bg-white/95 dark:bg-[#07172E]/95',
    border: 'border-sky-200/90 dark:border-sky-500/40 hover:border-[#00A3E0]',
    glow: 'bg-[#00A3E0]/15',
    topBar: 'from-transparent via-[#00A3E0] to-transparent',
    iconBg: 'bg-sky-50 dark:bg-[#00A3E0]/15',
    iconColor: 'text-[#00A3E0]',
    tagColor: 'bg-sky-50 dark:bg-[#00A3E0]/15 text-[#00A3E0] border-[#00A3E0]/30',
    shadowGlow: 'hover:shadow-[0_20px_40px_-10px_rgba(0,163,224,0.22)]',
    accentDot: 'bg-[#00A3E0]'
  },
  {
    // Theme 2: Luminous Royal Sapphire & Azure Shading
    cardBg: 'bg-white/95 dark:bg-[#061736]/95',
    border: 'border-blue-200/90 dark:border-blue-500/40 hover:border-blue-500',
    glow: 'bg-blue-500/15',
    topBar: 'from-transparent via-blue-500 to-transparent',
    iconBg: 'bg-blue-50 dark:bg-blue-600/15',
    iconColor: 'text-blue-600 dark:text-blue-400',
    tagColor: 'bg-blue-50 dark:bg-blue-600/15 text-blue-600 dark:text-blue-300 border-blue-300/50',
    shadowGlow: 'hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.22)]',
    accentDot: 'bg-blue-500'
  },
  {
    // Theme 3: Luminous Oceanic Cobalt & Sky Shading
    cardBg: 'bg-white/95 dark:bg-[#051833]/95',
    border: 'border-sky-200/90 dark:border-sky-500/40 hover:border-sky-500',
    glow: 'bg-sky-500/15',
    topBar: 'from-transparent via-sky-400 to-transparent',
    iconBg: 'bg-sky-50 dark:bg-sky-500/15',
    iconColor: 'text-sky-600 dark:text-sky-300',
    tagColor: 'bg-sky-50 dark:bg-sky-500/15 text-sky-600 dark:text-sky-300 border-sky-300/50',
    shadowGlow: 'hover:shadow-[0_20px_40px_-10px_rgba(14,165,233,0.22)]',
    accentDot: 'bg-sky-400'
  },
  {
    // Theme 4: Luminous Celestial Frost & Cyan Shading
    cardBg: 'bg-white/95 dark:bg-[#061C33]/95',
    border: 'border-cyan-200/90 dark:border-cyan-500/40 hover:border-cyan-400',
    glow: 'bg-cyan-400/15',
    topBar: 'from-transparent via-cyan-400 to-transparent',
    iconBg: 'bg-cyan-50 dark:bg-cyan-500/15',
    iconColor: 'text-cyan-600 dark:text-cyan-300',
    tagColor: 'bg-cyan-50 dark:bg-cyan-500/15 text-cyan-600 dark:text-cyan-300 border-cyan-300/50',
    shadowGlow: 'hover:shadow-[0_20px_40px_-10px_rgba(6,182,212,0.22)]',
    accentDot: 'bg-cyan-400'
  }
];


const APP_HERO_THEMES: Record<BusinessAppKey, {
  lightBg: string;
  darkBg: string;
  glow1: string;
  glow2: string;
  gridColor: string;
  topLine: string;
  badgeBorder: string;
  badgeBg: string;
  badgeText: string;
}> = {
  's4hana': {
    lightBg: 'from-[#EDF6FF] via-[#F4F9FF] to-[#FFFFFF]',
    darkBg: 'dark:from-[#020B18] dark:via-[#051733] dark:to-[#020914]',
    glow1: 'from-[#00A3E0]/25 via-blue-600/15 to-transparent',
    glow2: 'from-sky-400/20 to-cyan-500/10',
    gridColor: 'rgba(0, 163, 224, 0.08)',
    topLine: 'from-transparent via-[#00A3E0]/80 to-transparent',
    badgeBorder: 'border-[#00A3E0]/30 dark:border-cyan-400/30',
    badgeBg: 'bg-[#00A3E0]/10 dark:bg-[#00A3E0]/15',
    badgeText: 'text-[#00A3E0] dark:text-cyan-300'
  },
  'finance': {
    lightBg: 'from-[#EBF4FF] via-[#F2F8FF] to-[#FFFFFF]',
    darkBg: 'dark:from-[#020C1C] dark:via-[#05193B] dark:to-[#010813]',
    glow1: 'from-blue-600/25 via-cyan-500/15 to-transparent',
    glow2: 'from-sky-400/20 to-blue-700/10',
    gridColor: 'rgba(37, 99, 235, 0.08)',
    topLine: 'from-transparent via-blue-400/80 to-transparent',
    badgeBorder: 'border-blue-500/30 dark:border-blue-400/30',
    badgeBg: 'bg-blue-500/10 dark:bg-blue-500/15',
    badgeText: 'text-blue-600 dark:text-blue-300'
  },
  'supply-chain': {
    lightBg: 'from-[#EDF9FF] via-[#F3FAFF] to-[#FFFFFF]',
    darkBg: 'dark:from-[#021022] dark:via-[#04203F] dark:to-[#010B17]',
    glow1: 'from-sky-500/25 via-blue-600/15 to-transparent',
    glow2: 'from-cyan-400/20 to-sky-600/10',
    gridColor: 'rgba(14, 165, 233, 0.08)',
    topLine: 'from-transparent via-sky-400/80 to-transparent',
    badgeBorder: 'border-sky-500/30 dark:border-sky-400/30',
    badgeBg: 'bg-sky-500/10 dark:bg-sky-500/15',
    badgeText: 'text-sky-600 dark:text-sky-300'
  },
  'human-capital': {
    lightBg: 'from-[#EEF5FF] via-[#F5F9FF] to-[#FFFFFF]',
    darkBg: 'dark:from-[#020A1A] dark:via-[#061838] dark:to-[#010714]',
    glow1: 'from-blue-500/25 via-sky-600/15 to-transparent',
    glow2: 'from-cyan-400/20 to-blue-600/10',
    gridColor: 'rgba(59, 130, 246, 0.08)',
    topLine: 'from-transparent via-blue-400/80 to-transparent',
    badgeBorder: 'border-blue-500/30 dark:border-blue-400/30',
    badgeBg: 'bg-blue-500/10 dark:bg-blue-500/15',
    badgeText: 'text-blue-600 dark:text-blue-300'
  },
  'cx': {
    lightBg: 'from-[#EBF8FF] via-[#F2FAFF] to-[#FFFFFF]',
    darkBg: 'dark:from-[#020D1E] dark:via-[#041D42] dark:to-[#010813]',
    glow1: 'from-cyan-500/25 via-blue-600/15 to-transparent',
    glow2: 'from-sky-400/20 to-cyan-600/10',
    gridColor: 'rgba(6, 182, 212, 0.08)',
    topLine: 'from-transparent via-cyan-400/80 to-transparent',
    badgeBorder: 'border-cyan-500/30 dark:border-cyan-400/30',
    badgeBg: 'bg-cyan-500/10 dark:bg-cyan-500/15',
    badgeText: 'text-cyan-600 dark:text-cyan-300'
  }
};

export const SapBusinessApplicationsPage: React.FC<SapBusinessApplicationsPageProps> = ({ 
  onOpenContact, 
  initialApp = 's4hana' 
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryApp = searchParams.get('app') as BusinessAppKey | null;

  // Determine active application
  const validAppKeys: BusinessAppKey[] = ['s4hana', 'finance', 'supply-chain', 'human-capital', 'cx'];
  const resolvedInitialApp = (validAppKeys.includes(queryApp as BusinessAppKey) 
    ? queryApp 
    : validAppKeys.includes(initialApp as BusinessAppKey) 
      ? (initialApp as BusinessAppKey) 
      : 's4hana') as BusinessAppKey;

  const [activeApp, setActiveApp] = useState<BusinessAppKey>(resolvedInitialApp);
  const [activeNodeId, setActiveNodeId] = useState<string>('node-ledger');
  const [activeRadarVectorIdx, setActiveRadarVectorIdx] = useState<number>(0);
  const [isRadarPaused, setIsRadarPaused] = useState<boolean>(false);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isFullscreenImageOpen, setIsFullscreenImageOpen] = useState<boolean>(false);

  // Manual dimension selection: sets index, pauses rotation for 8 seconds, then resumes automatically
  const handleSelectRadarVector = (idx: number) => {
    setActiveRadarVectorIdx(idx);
    setIsRadarPaused(true);

    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }

    // Wait before auto-resuming rotation
    pauseTimeoutRef.current = setTimeout(() => {
      setIsRadarPaused(false);
    }, 12000);
  };

  // Continuous auto-rotation
  useEffect(() => {
    if (isRadarPaused) return;

    const interval = setInterval(() => {
      setActiveRadarVectorIdx((prev) => (prev + 1) % 5);
    }, 7500);

    return () => clearInterval(interval);
  }, [isRadarPaused, activeApp]);

  // Clean up pause timeout
  useEffect(() => {
    return () => {
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
    };
  }, []);

  // Sync state with URL parameter
  useEffect(() => {
    if (queryApp && validAppKeys.includes(queryApp)) {
      setActiveApp(queryApp);
    }
  }, [queryApp]);

  const handleTabChange = (key: BusinessAppKey) => {
    setActiveApp(key);
    setSearchParams({ app: key }, { replace: true });
    // Reset selected node
    const firstNode = BUSINESS_APPS_DATA[key].architectureNodes[0];
    if (firstNode) {
      setActiveNodeId(firstNode.id);
    }
    setActiveRadarVectorIdx(0);
    setIsRadarPaused(false);
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }
  };

  const currentData = BUSINESS_APPS_DATA[activeApp];
  const selectedNode = currentData.architectureNodes.find(n => n.id === activeNodeId) || currentData.architectureNodes[0];
  const selectedRadarVector = currentData.radarVectors[activeRadarVectorIdx] || currentData.radarVectors[0];

  const renderVisualIcon = (iconName: string) => {
    switch (iconName) {
      case 'Database': return <Database className="w-4 h-4 text-cyan-400" />;
      case 'Cpu': return <Cpu className="w-4 h-4 text-sky-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-4 h-4 text-cyan-400" />;
      case 'Wallet': return <Wallet className="w-4 h-4 text-sky-400" />;
      case 'Layers': return <Layers className="w-4 h-4 text-[#00A3E0]" />;
      case 'Boxes': return <Boxes className="w-4 h-4 text-cyan-400" />;
      case 'Truck': return <Truck className="w-4 h-4 text-sky-400" />;
      case 'Workflow': return <Workflow className="w-4 h-4 text-sky-400" />;
      case 'Users': return <Users className="w-4 h-4 text-blue-400" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4 text-[#00A3E0]" />;
      case 'HeartHandshake': return <HeartHandshake className="w-4 h-4 text-sky-400" />;
      case 'Store': return <Store className="w-4 h-4 text-blue-400" />;
      case 'Zap': return <Zap className="w-4 h-4 text-cyan-400" />;
      default: return <Sparkles className="w-4 h-4 text-[#00A3E0]" />;
    }
  };

  const heroVisual = HERO_VISUALS_CONFIG[activeApp];


  // Helper for App Icon
  const getAppIcon = (key: BusinessAppKey, className: string) => {
    switch (key) {
      case 's4hana': return <Cpu className={className} />;
      case 'finance': return <Wallet className={className} />;
      case 'supply-chain': return <Truck className={className} />;
      case 'human-capital': return <Users className={className} />;
      case 'cx': return <HeartHandshake className={className} />;
    }
  };

  // Dynamic coordinates helper for 5-axis capability radar
  const getRadarCoord = (score: number, index: number, maxRadius = 100, centerX = 170, centerY = 160) => {
    const angle = (index * 72 - 90) * (Math.PI / 180);
    const r = Math.max(16, (score / 10) * maxRadius);
    return {
      x: Math.round(centerX + r * Math.cos(angle)),
      y: Math.round(centerY + r * Math.sin(angle))
    };
  };

  const getRadarTipCoord = (index: number, tipRadius = 120, centerX = 170, centerY = 160) => {
    const angle = (index * 72 - 90) * (Math.PI / 180);
    return {
      x: Math.round(centerX + tipRadius * Math.cos(angle)),
      y: Math.round(centerY + tipRadius * Math.sin(angle))
    };
  };

  // Capability Benchmark Telemetry Computed Metrics
  const avgSapScore = (currentData.radarVectors.reduce((acc, v) => acc + v.sapScore, 0) / currentData.radarVectors.length).toFixed(1);
  const avgLegacyScore = (currentData.radarVectors.reduce((acc, v) => acc + v.legacyScore, 0) / currentData.radarVectors.length).toFixed(1);
  const scoreMultiplier = (selectedRadarVector.sapScore / Math.max(1, selectedRadarVector.legacyScore)).toFixed(1);
  const advantagePercent = Math.round(((Number(avgSapScore) - Number(avgLegacyScore)) / Number(avgLegacyScore)) * 100);

  const sapPolygonPoints = currentData.radarVectors.map((v, i) => {
    const pt = getRadarCoord(v.sapScore, i, 100, 170, 160);
    return `${pt.x},${pt.y}`;
  }).join(' ');

  const legacyPolygonPoints = currentData.radarVectors.map((v, i) => {
    const pt = getRadarCoord(v.legacyScore, i, 100, 170, 160);
    return `${pt.x},${pt.y}`;
  }).join(' ');

  return (
    <div className="min-h-screen pt-16 sm:pt-20 bg-[#F8FAFC] dark:bg-[#050B17] text-slate-900 dark:text-white transition-colors duration-300">
      
      {/* =========================================================================
          1. STICKY TOP SUB-NAVIGATION BAR (Seamless Switcher Across All 5 SAP Applications)
          ========================================================================= */}
      <div className="sticky top-16 sm:top-20 z-40 bg-white/95 dark:bg-[#070E1C]/95 backdrop-blur-md border-b border-slate-200 dark:border-white/10 shadow-xs transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between overflow-x-auto no-scrollbar gap-4">
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#00A3E0]" />
            <span className="text-xs font-black uppercase tracking-wider text-[#0A1931] dark:text-[#00A3E0] font-mono">
              SAP BUSINESS APPLICATIONS
            </span>
          </div>
          
          <div className="flex items-center gap-1.5 sm:gap-2 w-full sm:w-auto overflow-x-auto no-scrollbar">
            {validAppKeys.map((key) => {
              const item = BUSINESS_APPS_DATA[key];
              const isActive = activeApp === key;
              
              return (
                <button
                  key={key}
                  onClick={() => handleTabChange(key)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-[#00A3E0] text-white shadow-md shadow-[#00A3E0]/25'
                      : 'text-slate-700 dark:text-slate-300 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-slate-100 dark:hover:bg-white/5'
                  }`}
                >
                  {getAppIcon(key, "w-3.5 h-3.5")}
                  <span>{item.tabLabel}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* =========================================================================
          APPLICATION ROUTING: DEDICATED DOMAIN SOLUTION VIEWS OR DEFAULT CORE ERP TEMPLATE
          ========================================================================= */}
      {activeApp === 'finance' ? (
        <SapFinanceSolutionView onOpenContact={onOpenContact} />
      ) : activeApp === 'supply-chain' ? (
        <SapSupplyChainSolutionView onOpenContact={onOpenContact} />
      ) : activeApp === 'human-capital' ? (
        <SapHumanCapitalSolutionView onOpenContact={onOpenContact} />
      ) : activeApp === 'cx' ? (
        <SapCustomerExperienceSolutionView onOpenContact={onOpenContact} />
      ) : (
        <>
          {/* =========================================================================
              2. FULL-SCREEN HERO SECTION (Full Bleed Background with Deep Enterprise Atmosphere)
              ========================================================================= */}
          <section className="relative w-full h-[540px] sm:h-[560px] lg:h-[580px] flex items-center overflow-hidden bg-[#040B17] text-white border-b border-slate-200/20 dark:border-white/10 shadow-2xl py-6 sm:py-8 lg:py-8">
        
        {/* Full-Bleed Enterprise Background Image (Covers entire screen) */}
        <div 
          className="absolute inset-0 z-0 group/hero cursor-pointer"
          onClick={() => setIsFullscreenImageOpen(true)}
          title="Click to view full screen visual"
        >
          <img 
            src={heroVisual.image} 
            alt={currentData.appTitle} 
            className="w-full h-full object-cover object-center lg:object-[68%_center] transition-transform duration-1000 ease-out group-hover/hero:scale-102"
          />
          {/* Multi-layered cinematic gradient scrim */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#040B17]/90 via-[#061224]/75 sm:via-[#061224]/50 to-[#040B17]/20 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040B17]/80 via-transparent to-[#040B17]/40 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#040B17]/50 via-transparent to-transparent pointer-events-none" />
          
          {/* Subtle high-tech radial cyber mesh overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#00A3E0_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none" />

          {/* Top Hairline Accent */}
          <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${APP_HERO_THEMES[activeApp].topLine}`} />

          {/* Click to expand pill in bottom right */}
          <div className="absolute bottom-4 right-4 z-10 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/50 backdrop-blur-md border border-white/20 text-[11px] font-mono text-cyan-300 hover:bg-black/70 transition-colors shadow-xl">
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Click to View Full Screen Visual</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl space-y-2.5 sm:space-y-3">
            
            {/* Category Dash & Tag */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-cyan-400/30 text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-300 shadow-xl">
                <Sparkles className="w-3.5 h-3.5 text-[#00A3E0]" />
                <span>{currentData.categoryTag}</span>
              </div>
              <span className="text-slate-400 text-xs font-mono">/</span>
              <span className="text-[11px] font-mono font-bold text-slate-300 uppercase tracking-wider bg-black/30 px-2.5 py-0.5 rounded-full border border-white/10 backdrop-blur-sm shadow-md">
                {currentData.heroBadge}
              </span>
            </div>

            {/* Large Hero Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-black tracking-tight text-white leading-[1.14] drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
              {currentData.heroHeadline}
            </h1>

            {/* Subtitle / Strategic Narrative */}
            <p className="text-xs sm:text-sm lg:text-[14px] font-medium text-slate-100 leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] max-w-2xl">
              {currentData.heroSubheadline}
            </p>

            {/* Architectural Feature Checkpoints */}
            <div className="flex flex-wrap items-center gap-2 pt-0.5">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/35 backdrop-blur-md border border-white/15 text-[11px] font-medium text-slate-200 shadow-lg">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>Clean Core Certified</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/35 backdrop-blur-md border border-white/15 text-[11px] font-medium text-slate-200 shadow-lg">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Sub-Second Telemetry</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/35 backdrop-blur-md border border-white/15 text-[11px] font-medium text-slate-200 shadow-lg">
                <Database className="w-3.5 h-3.5 text-[#00A3E0]" />
                <span>Single Source of Truth</span>
              </span>
            </div>

            {/* Strategic Content Blocks (Pure Information - Zero Clutter) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-0.5">
              <div className="px-3 py-2 rounded-xl bg-black/35 backdrop-blur-md border border-white/15 shadow-md">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-[10.5px] font-mono font-bold uppercase text-white">
                    {heroVisual.badgeTop.title}
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 leading-snug font-normal">
                  {heroVisual.badgeTop.subtitle}
                </p>
              </div>

              <div className="px-3 py-2 rounded-xl bg-black/35 backdrop-blur-md border border-white/15 shadow-md">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <Activity className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-[10.5px] font-mono font-bold uppercase text-white">
                    {heroVisual.badgeBottom.title}
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 leading-snug font-normal">
                  {heroVisual.badgeBottom.subtitle}
                </p>
              </div>
            </div>



          </div>
        </div>
      </section>

      {/* Full-Screen Lightbox Modal */}
      {isFullscreenImageOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setIsFullscreenImageOpen(false)}
        >
          <button
            onClick={() => setIsFullscreenImageOpen(false)}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md transition-all cursor-pointer shadow-xl"
            aria-label="Close full screen"
          >
            <X className="w-6 h-6" />
          </button>
          <div 
            className="relative max-w-7xl w-full max-h-[92vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={heroVisual.image} 
              alt={currentData.appTitle}
              className="max-w-full max-h-[90vh] object-contain rounded-2xl border border-white/20 shadow-2xl"
            />
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <span className="px-4 py-2 rounded-full bg-black/80 border border-white/20 text-xs font-mono font-bold text-cyan-300 backdrop-blur-md shadow-xl">
                {currentData.tabLabel} // {currentData.appTitle}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">

        {/* =========================================================================
            SECTION 2: EXECUTIVE ARCHITECTURAL CAPABILITIES (LUMINOUS LIGHT SHADING & COMPACT CARDS)
            ========================================================================= */}
        <section className="relative rounded-3xl p-6 sm:p-8 lg:p-10 bg-gradient-to-b from-white via-sky-50/40 to-blue-50/20 dark:from-[#051124] dark:via-[#040E1E] dark:to-[#020814] border-2 border-sky-100 dark:border-sky-900/50 shadow-[0_20px_50px_-15px_rgba(0,163,224,0.08)] overflow-hidden space-y-8 sm:space-y-10">
          
          {/* Subtle Ambient Light Shading Halos (Soft Sky & Cyan) */}
          <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-gradient-to-br from-[#00A3E0]/8 via-sky-400/5 to-transparent blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[250px] bg-gradient-to-tr from-blue-500/6 to-transparent blur-[100px] rounded-full pointer-events-none" />
          
          {/* Delicate Blue Tech Grid Watermark */}
          <div 
            className="absolute inset-0 opacity-[0.4] pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(to right, rgba(0, 163, 224, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 163, 224, 0.05) 1px, transparent 1px)',
              backgroundSize: '28px 28px'
            }}
          />

          {/* Section Heading & Narrative Header */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start pb-6 border-b border-sky-100 dark:border-white/10">
            
            {/* Left Column: Overline, Headline & Metadata */}
            <div className="lg:col-span-5 space-y-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 dark:bg-cyan-500/15 border border-sky-200 dark:border-cyan-400/35 text-xs font-mono font-bold uppercase tracking-widest text-[#00A3E0] dark:text-cyan-300 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#00A3E0]" />
                <span>{currentData.overviewTag}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-black text-slate-900 dark:text-white tracking-tight leading-[1.18]">
                {currentData.overviewHeading}
              </h2>
              <div className="flex items-center gap-2 pt-0.5 text-xs font-mono text-[#00A3E0] dark:text-cyan-400/80 uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#00A3E0]" />
                <span>ENTERPRISE DIGITAL CAPABILITY SPECIFICATION</span>
              </div>
            </div>

            {/* Right Column: High-Level Architecture Narrative */}
            <div className="lg:col-span-7 space-y-3 text-slate-600 dark:text-slate-300 text-sm sm:text-[15px] leading-relaxed">
              <p className="font-medium text-slate-800 dark:text-white leading-relaxed border-l-2 border-[#00A3E0] pl-4 bg-sky-50/60 dark:bg-white/[0.03] py-2 rounded-r-lg">
                {currentData.overviewNarrative1}
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed pl-4 font-normal">
                {currentData.overviewNarrative2}
              </p>
            </div>

          </div>

          {/* 4 Architectural Capability Cards: SHORT & COMPACT with Light Shading */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {currentData.cleanCorePillars.map((pillar, idx) => {
              const theme = CARD_COLOR_THEMES[idx % CARD_COLOR_THEMES.length];
              
              // Dynamic distinct icon per pillar
              const renderPillarHeaderIcon = (pillarIdx: number) => {
                switch (pillarIdx % 4) {
                  case 0: return <Database className="w-3.5 h-3.5" />;
                  case 1: return <Zap className="w-3.5 h-3.5" />;
                  case 2: return <Layers className="w-3.5 h-3.5" />;
                  case 3: return <Cpu className="w-3.5 h-3.5" />;
                  default: return <Sparkles className="w-3.5 h-3.5" />;
                }
              };

              const pillarImage = pillar.image || PILLAR_FALLBACK_IMAGES[idx % PILLAR_FALLBACK_IMAGES.length];

              return (
                <div
                  key={idx}
                  className={`relative ${theme.cardBg} backdrop-blur-xl border ${theme.border} shadow-[0_10px_25px_-5px_rgba(0,163,224,0.08)] ${theme.shadowGlow} transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between overflow-hidden group rounded-bl-2xl rounded-tl-2xl rounded-br-2xl`}
                  style={{
                    clipPath: 'polygon(0% 0%, calc(100% - 20px) 0%, 100% 20px, 100% 100%, 0% 100%)'
                  }}
                >
                  {/* Subtle Background Mesh Watermark */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#00A3E006_1px,transparent_1px),linear-gradient(to_bottom,#00A3E006_1px,transparent_1px)] bg-[size:16px_16px] opacity-40 pointer-events-none" />

                  {/* Corner Precision Tech Cut Accent (Top-Right) */}
                  <div className="absolute top-0 right-0 w-5 h-5 pointer-events-none overflow-hidden z-20">
                    <div className="absolute top-0 right-0 w-5 h-5 border-b border-l border-sky-300 dark:border-cyan-400/60 bg-sky-100 dark:bg-cyan-400/25" />
                  </div>

                  {/* Top Glowing Color Flow Line */}
                  <div className={`absolute top-0 left-0 right-5 h-[2px] bg-gradient-to-r ${theme.topBar} opacity-80 group-hover:opacity-100 group-hover:h-[3px] transition-all z-20`} />

                  {/* Ambient Corner Glow Orb */}
                  <div className={`absolute -top-10 -left-10 w-24 h-24 rounded-full ${theme.glow} blur-2xl opacity-40 group-hover:opacity-70 transition-opacity pointer-events-none`} />

                  {/* ============================================================
                      1. SHORT CINEMATIC IMAGE BANNER (Compact ~115px Height)
                      ============================================================ */}
                  <div className="relative w-full h-28 sm:h-32 overflow-hidden group/img">
                    <img 
                      src={pillarImage} 
                      alt={pillar.title} 
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700" 
                    />
                    
                    {/* Soft Shading Gradient Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent pointer-events-none" />
                    
                    {/* Luxury Diagonal Glass Shimmer Glint */}
                    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
                      <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 animate-glass-shimmer" />
                    </div>

                    {/* Top-Right Architectural Corner Tag on Image */}
                    <div className="absolute top-2 right-6 px-2 py-0.5 rounded bg-slate-950/80 border border-sky-400/40 text-[8.5px] font-mono font-bold text-sky-300 uppercase tracking-widest backdrop-blur-sm shadow-sm">
                      0{idx + 1} // SPEC
                    </div>

                    {/* Bottom Overlay on Image: Pillar Tag & Icon */}
                    <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                      <span className={`inline-flex items-center gap-1 text-[8.5px] font-mono font-extrabold uppercase px-2 py-0.5 rounded bg-slate-950/85 border border-sky-400/30 text-sky-200 backdrop-blur-md shadow-md`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${theme.accentDot}`} />
                        <span className="truncate max-w-[130px]">{pillar.tag}</span>
                      </span>
                      
                      <div className="p-1 rounded-md bg-slate-950/85 border border-white/20 text-cyan-300 backdrop-blur-md shadow-md">
                        {renderPillarHeaderIcon(idx)}
                      </div>
                    </div>
                  </div>

                  {/* ============================================================
                      2. COMPACT CONTENT SECTION (Light & Clean)
                      ============================================================ */}
                  <div className="p-3.5 sm:p-4 flex flex-col flex-1 justify-between space-y-2.5">
                    
                    {/* Title & Short Description */}
                    <div>
                      <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white mb-1 leading-snug group-hover:text-[#00A3E0] transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal line-clamp-2">
                        {pillar.description}
                      </p>
                    </div>

                    {/* Compact 1-Line Checkpoint Items */}
                    <div className="pt-2 border-t border-slate-100 dark:border-white/10 space-y-1">
                      {pillar.features.map((feat, fIdx) => (
                        <div 
                          key={fIdx} 
                          className="flex items-center gap-2 text-[10.5px] sm:text-[11px] text-slate-700 dark:text-slate-200 font-medium leading-tight py-0.5"
                        >
                          <CheckCircle2 className={`w-3.5 h-3.5 ${theme.iconColor} shrink-0`} />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Compact Architectural Validation Footer */}
                    <div className="pt-2 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-[8.5px] sm:text-[9px] font-mono text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-1 text-[#00A3E0] font-bold">
                        <ShieldCheck className="w-3 h-3" />
                        <span>CLEAN CORE</span>
                      </span>
                      <span className="uppercase font-semibold tracking-wider text-sky-600 dark:text-cyan-300">
                        TOUCHLESS
                      </span>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>

        </section>

        {/* =========================================================================
            SECTION 3: SYSTEM ARCHITECTURE & DATA FLOW DIAGRAM (LUMINOUS LIGHT SHADING & HOLOGRAPHIC TOPOLOGY)
            ========================================================================= */}
        <section id="architecture-section" className="relative rounded-3xl p-6 sm:p-8 lg:p-10 bg-gradient-to-b from-white via-sky-50/40 to-slate-50/80 dark:from-[#051124] dark:via-[#040E1E] dark:to-[#020814] border-2 border-sky-100 dark:border-sky-900/50 shadow-[0_20px_50px_-15px_rgba(0,163,224,0.08)] overflow-hidden space-y-8 sm:space-y-10 scroll-mt-28">
          
          {/* Multi-layered Light Shading & Ambient Blue Glows */}
          <div className="absolute top-0 right-1/4 w-[550px] h-[350px] bg-gradient-to-br from-[#00A3E0]/10 via-sky-400/5 to-transparent blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[450px] h-[280px] bg-gradient-to-tr from-blue-500/6 to-transparent blur-[100px] rounded-full pointer-events-none" />
          
          {/* High-Tech Circuit Grid Watermark */}
          <div 
            className="absolute inset-0 opacity-[0.35] pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(to right, rgba(0, 163, 224, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 163, 224, 0.05) 1px, transparent 1px)',
              backgroundSize: '32px 32px'
            }}
          />

          {/* Section Heading & Topology Intro */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start pb-6 border-b border-sky-100 dark:border-white/10">
            <div className="lg:col-span-6 space-y-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 dark:bg-cyan-500/15 border border-sky-200 dark:border-cyan-400/35 text-xs font-mono font-bold uppercase tracking-widest text-[#00A3E0] dark:text-cyan-300 shadow-sm">
                <Network className="w-3.5 h-3.5 text-[#00A3E0]" />
                <span>SECTION 03 // SYSTEM TOPOLOGY & EVENT MESH</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-black text-slate-900 dark:text-white tracking-tight leading-[1.18]">
                {currentData.architectureHeading}
              </h2>
            </div>
            <div className="lg:col-span-6 flex flex-col justify-end space-y-2">
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-[15px] leading-relaxed border-l-2 border-[#00A3E0] pl-4 bg-sky-50/60 dark:bg-white/[0.03] py-2 rounded-r-lg">
                {currentData.architectureSubtitle}
              </p>
              <div className="flex items-center gap-2 pl-4 text-xs font-mono text-[#00A3E0] dark:text-cyan-400 uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#00A3E0]" />
                <span>INTERACTIVE TOPOLOGY // CLICK ANY NODE TO INSPECT SPECS</span>
              </div>
            </div>
          </div>

          {/* Interactive Architecture Canvas (Split Grid: SVG Diagram Left + Inspector Right) */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* SVG Visual Architecture Map (8 Cols on Desktop - Clean Light Canvas) */}
            <div className="lg:col-span-8 relative min-h-[400px] sm:min-h-[440px] flex items-center justify-center bg-gradient-to-b from-white via-sky-50/30 to-slate-50/70 dark:from-[#051429]/95 dark:via-[#030E1E]/95 dark:to-[#020814]/98 rounded-2xl border-2 border-sky-200/90 dark:border-sky-400/35 shadow-[0_10px_30px_-5px_rgba(0,163,224,0.08)] p-3 sm:p-5 overflow-hidden group">
              
              {/* Radial Center Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#00A3E0]/10 blur-[80px] rounded-full pointer-events-none" />

              {/* Sub-grid Watermark */}
              <div className="absolute inset-0 bg-[radial-gradient(#00A3E0_1px,transparent_1px)] [background-size:20px_20px] opacity-15 pointer-events-none" />

              {/* Responsive Holographic Vector SVG */}
              <svg className="w-full h-full max-h-[420px]" viewBox="0 0 760 380" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  {/* Linear Gradients for Data Pipelines */}
                  <linearGradient id="pipelineBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00A3E0" stopOpacity="0.9" />
                    <stop offset="50%" stopColor="#0284C7" stopOpacity="1" />
                    <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.9" />
                  </linearGradient>

                  {/* Core Hub Light Background Gradient */}
                  <linearGradient id="coreLightBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
                    <stop offset="50%" stopColor="#F0F9FF" stopOpacity="0.98" />
                    <stop offset="100%" stopColor="#E0F2FE" stopOpacity="1" />
                  </linearGradient>

                  <filter id="glowFilter" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* ============================================================
                    1. HIGH-TECH DATA HIGHWAYS / ORTHOGONAL CONDUITS (NON-CURVE)
                    ============================================================ */}
                {/* Node 01 Conduit: Top-Left to Core */}
                <path d="M 235 85 L 295 85 L 325 150" stroke="#E2E8F0" strokeWidth="4" strokeLinecap="round" />
                <path d="M 235 85 L 295 85 L 325 150" stroke="url(#pipelineBlueGrad)" strokeWidth="2" strokeDasharray="8 6" className="animate-pulse" />

                {/* Node 02 Conduit: Top-Right to Core */}
                <path d="M 525 85 L 465 85 L 435 150" stroke="#E2E8F0" strokeWidth="4" strokeLinecap="round" />
                <path d="M 525 85 L 465 85 L 435 150" stroke="url(#pipelineBlueGrad)" strokeWidth="2" strokeDasharray="8 6" className="animate-pulse" />

                {/* Node 03 Conduit: Bottom-Left to Core */}
                <path d="M 235 295 L 295 295 L 325 230" stroke="#E2E8F0" strokeWidth="4" strokeLinecap="round" />
                <path d="M 235 295 L 295 295 L 325 230" stroke="url(#pipelineBlueGrad)" strokeWidth="2" strokeDasharray="8 6" className="animate-pulse" />

                {/* Node 04 Conduit: Bottom-Right to Core */}
                <path d="M 525 295 L 465 295 L 435 230" stroke="#E2E8F0" strokeWidth="4" strokeLinecap="round" />
                <path d="M 525 295 L 465 295 L 435 230" stroke="url(#pipelineBlueGrad)" strokeWidth="2" strokeDasharray="8 6" className="animate-pulse" />

                {/* Vertical Backbone Conduits */}
                <path d="M 380 40 L 380 135" stroke="url(#pipelineBlueGrad)" strokeWidth="1.5" strokeDasharray="5 5" opacity="0.6" />
                <path d="M 380 245 L 380 340" stroke="url(#pipelineBlueGrad)" strokeWidth="1.5" strokeDasharray="5 5" opacity="0.6" />

                {/* ============================================================
                    2. CENTRAL PLATFORM CORE (OCTAGONAL CHAMFERED SILICON HUB - NON-ROUND)
                    ============================================================ */}
                <g transform="translate(0, 0)">
                  {/* Outer Octagonal Aura */}
                  <polygon 
                    points="346,128 414,128 448,155 448,225 414,252 346,252 312,225 312,155" 
                    fill="none" 
                    stroke="#00A3E0" 
                    strokeWidth="1.5" 
                    strokeDasharray="8 6" 
                    opacity="0.8" 
                  />

                  {/* Primary Core Octagonal Shell (Luminous Light Silicon Core) */}
                  <polygon 
                    points="350,135 410,135 440,160 440,220 410,245 350,245 320,220 320,160" 
                    fill="url(#coreLightBgGrad)" 
                    stroke="#00A3E0" 
                    strokeWidth="2.5" 
                    filter="url(#glowFilter)" 
                  />

                  {/* Core Inner Chamfer Accent */}
                  <polygon 
                    points="355,142 405,142 430,165 430,215 405,238 355,238 330,215 330,165" 
                    fill="#00A3E0" 
                    fillOpacity="0.05" 
                    stroke="#38BDF8" 
                    strokeWidth="1" 
                  />

                  {/* Core Typography */}
                  <text textAnchor="middle" x="380" y="162" fill="#0284C7" fontSize="8.5" fontWeight="bold" fontFamily="monospace" letterSpacing="1.5">
                    PLATFORM CORE
                  </text>
                  <text textAnchor="middle" x="380" y="185" fill="#0F172A" fontSize="13" fontWeight="900" letterSpacing="0.5">
                    {currentData.tabLabel}
                  </text>
                  <text textAnchor="middle" x="380" y="202" fill="#475569" fontSize="8.5" fontWeight="semibold" fontFamily="monospace">
                    IN-MEMORY ORCHESTRATION
                  </text>

                  {/* Core Status Pill */}
                  <rect x="335" y="213" width="90" height="16" rx="4" fill="#FFFFFF" stroke="#00A3E0" strokeWidth="1" />
                  <circle cx="347" cy="221" r="2" fill="#0284C7" />
                  <text textAnchor="middle" x="385" y="224" fill="#0284C7" fontSize="7.5" fontWeight="extrabold" fontFamily="monospace">
                    SYNCHRONIZED
                  </text>
                </g>

                {/* ============================================================
                    3. 4 CLICKABLE SATELLITE NODES (CHAMFERED RECTANGLES - CLEAN LIGHT)
                    ============================================================ */}
                {/* NODE 01: Top Left */}
                {(() => {
                  const node = currentData.architectureNodes[0];
                  const isActive = activeNodeId === node?.id;
                  return (
                    <g 
                      transform="translate(45, 50)" 
                      className="cursor-pointer group/node"
                      onClick={() => setActiveNodeId(node?.id || '')}
                    >
                      <polygon 
                        points="0,0 170,0 190,20 190,70 0,70" 
                        fill={isActive ? '#F0F9FF' : '#FFFFFF'} 
                        stroke={isActive ? '#00A3E0' : '#CBD5E1'} 
                        strokeWidth={isActive ? '2.5' : '1.5'} 
                        filter={isActive ? 'url(#glowFilter)' : undefined}
                      />
                      <line x1="0" y1="0" x2="170" y2="0" stroke={isActive ? '#00A3E0' : '#94A3B8'} strokeWidth={isActive ? '3' : '1.5'} />
                      
                      <text x="14" y="22" fill={isActive ? '#0284C7' : '#64748B'} fontSize="9" fontWeight="bold" fontFamily="monospace">
                        NODE 01 // {node?.category.toUpperCase()}
                      </text>
                      
                      <text x="14" y="44" fill={isActive ? '#0F172A' : '#1E293B'} fontSize="11" fontWeight="extrabold">
                        {node?.name.length > 24 ? node?.name.slice(0, 22) + '...' : node?.name}
                      </text>

                      <circle cx="20" cy="58" r="2.5" fill={isActive ? '#00A3E0' : '#94A3B8'} />
                      <text x="28" y="61" fill={isActive ? '#0284C7' : '#64748B'} fontSize="8" fontWeight="bold" fontFamily="monospace">
                        {isActive ? 'INSPECTING TELEMETRY' : 'CLICK TO INSPECT'}
                      </text>
                    </g>
                  );
                })()}

                {/* NODE 02: Top Right */}
                {(() => {
                  const node = currentData.architectureNodes[1];
                  const isActive = activeNodeId === node?.id;
                  return (
                    <g 
                      transform="translate(525, 50)" 
                      className="cursor-pointer group/node"
                      onClick={() => setActiveNodeId(node?.id || '')}
                    >
                      <polygon 
                        points="0,0 170,0 190,20 190,70 0,70" 
                        fill={isActive ? '#F0F9FF' : '#FFFFFF'} 
                        stroke={isActive ? '#00A3E0' : '#CBD5E1'} 
                        strokeWidth={isActive ? '2.5' : '1.5'} 
                        filter={isActive ? 'url(#glowFilter)' : undefined}
                      />
                      <line x1="0" y1="0" x2="170" y2="0" stroke={isActive ? '#00A3E0' : '#94A3B8'} strokeWidth={isActive ? '3' : '1.5'} />
                      
                      <text x="14" y="22" fill={isActive ? '#0284C7' : '#64748B'} fontSize="9" fontWeight="bold" fontFamily="monospace">
                        NODE 02 // {node?.category.toUpperCase()}
                      </text>
                      <text x="14" y="44" fill={isActive ? '#0F172A' : '#1E293B'} fontSize="11" fontWeight="extrabold">
                        {node?.name.length > 24 ? node?.name.slice(0, 22) + '...' : node?.name}
                      </text>

                      <circle cx="20" cy="58" r="2.5" fill={isActive ? '#00A3E0' : '#94A3B8'} />
                      <text x="28" y="61" fill={isActive ? '#0284C7' : '#64748B'} fontSize="8" fontWeight="bold" fontFamily="monospace">
                        {isActive ? 'INSPECTING TELEMETRY' : 'CLICK TO INSPECT'}
                      </text>
                    </g>
                  );
                })()}

                {/* NODE 03: Bottom Left */}
                {(() => {
                  const node = currentData.architectureNodes[2];
                  const isActive = activeNodeId === node?.id;
                  return (
                    <g 
                      transform="translate(45, 260)" 
                      className="cursor-pointer group/node"
                      onClick={() => setActiveNodeId(node?.id || '')}
                    >
                      <polygon 
                        points="0,0 170,0 190,20 190,70 0,70" 
                        fill={isActive ? '#F0F9FF' : '#FFFFFF'} 
                        stroke={isActive ? '#00A3E0' : '#CBD5E1'} 
                        strokeWidth={isActive ? '2.5' : '1.5'} 
                        filter={isActive ? 'url(#glowFilter)' : undefined}
                      />
                      <line x1="0" y1="0" x2="170" y2="0" stroke={isActive ? '#00A3E0' : '#94A3B8'} strokeWidth={isActive ? '3' : '1.5'} />
                      
                      <text x="14" y="22" fill={isActive ? '#0284C7' : '#64748B'} fontSize="9" fontWeight="bold" fontFamily="monospace">
                        NODE 03 // {node?.category.toUpperCase()}
                      </text>
                      <text x="14" y="44" fill={isActive ? '#0F172A' : '#1E293B'} fontSize="11" fontWeight="extrabold">
                        {node?.name.length > 24 ? node?.name.slice(0, 22) + '...' : node?.name}
                      </text>

                      <circle cx="20" cy="58" r="2.5" fill={isActive ? '#00A3E0' : '#94A3B8'} />
                      <text x="28" y="61" fill={isActive ? '#0284C7' : '#64748B'} fontSize="8" fontWeight="bold" fontFamily="monospace">
                        {isActive ? 'INSPECTING TELEMETRY' : 'CLICK TO INSPECT'}
                      </text>
                    </g>
                  );
                })()}

                {/* NODE 04: Bottom Right */}
                {(() => {
                  const node = currentData.architectureNodes[3];
                  const isActive = activeNodeId === node?.id;
                  return (
                    <g 
                      transform="translate(525, 260)" 
                      className="cursor-pointer group/node"
                      onClick={() => setActiveNodeId(node?.id || '')}
                    >
                      <polygon 
                        points="0,0 170,0 190,20 190,70 0,70" 
                        fill={isActive ? '#F0F9FF' : '#FFFFFF'} 
                        stroke={isActive ? '#00A3E0' : '#CBD5E1'} 
                        strokeWidth={isActive ? '2.5' : '1.5'} 
                        filter={isActive ? 'url(#glowFilter)' : undefined}
                      />
                      <line x1="0" y1="0" x2="170" y2="0" stroke={isActive ? '#00A3E0' : '#94A3B8'} strokeWidth={isActive ? '3' : '1.5'} />
                      
                      <text x="14" y="22" fill={isActive ? '#0284C7' : '#64748B'} fontSize="9" fontWeight="bold" fontFamily="monospace">
                        NODE 04 // {node?.category.toUpperCase()}
                      </text>
                      <text x="14" y="44" fill={isActive ? '#0F172A' : '#1E293B'} fontSize="11" fontWeight="extrabold">
                        {node?.name.length > 24 ? node?.name.slice(0, 22) + '...' : node?.name}
                      </text>

                      <circle cx="20" cy="58" r="2.5" fill={isActive ? '#00A3E0' : '#94A3B8'} />
                      <text x="28" y="61" fill={isActive ? '#0284C7' : '#64748B'} fontSize="8" fontWeight="bold" fontFamily="monospace">
                        {isActive ? 'INSPECTING TELEMETRY' : 'CLICK TO INSPECT'}
                      </text>
                    </g>
                  );
                })()}

              </svg>

              {/* Bottom Canvas Helper Prompt */}
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-slate-700 dark:text-cyan-400 bg-white/90 dark:bg-slate-950/70 px-3 py-1.5 rounded-lg border border-sky-200 dark:border-cyan-500/20 shadow-sm backdrop-blur-md">
                <span className="flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-[#00A3E0]" />
                  <span className="font-bold text-[#00A3E0]">TOPOLOGY PROTOCOL: SYNCHRONOUS ACDOCA UNIVERSAL FABRIC</span>
                </span>
                <span className="text-slate-500 dark:text-slate-400 hidden sm:inline">SELECT ANY SATELLITE NODE</span>
              </div>
            </div>

            {/* Architecture Node Inspector Panel (4 Cols on Desktop - Clean Luminous Shading) */}
            <div 
              className="lg:col-span-4 relative bg-gradient-to-b from-white via-sky-50/25 to-slate-50/70 dark:from-[#081830]/95 dark:via-[#051226]/95 dark:to-[#020814]/98 rounded-2xl p-5 sm:p-6 border-2 border-sky-200/90 dark:border-sky-400/40 shadow-[0_15px_35px_-5px_rgba(0,163,224,0.1)] flex flex-col justify-between overflow-hidden"
              style={{
                clipPath: 'polygon(0% 0%, calc(100% - 20px) 0%, 100% 20px, 100% 100%, 0% 100%)'
              }}
            >
              {/* Corner Tech Cut Accent */}
              <div className="absolute top-0 right-0 w-5 h-5 pointer-events-none overflow-hidden z-20">
                <div className="absolute top-0 right-0 w-5 h-5 border-b border-l border-sky-300 dark:border-cyan-400/60 bg-sky-100 dark:bg-cyan-400/25" />
              </div>

              {/* Top Hairline Flow Bar */}
              <div className="absolute top-0 left-0 right-5 h-[2px] bg-gradient-to-r from-transparent via-[#00A3E0] to-transparent" />

              <div className="space-y-4 relative z-10">
                {/* Node Category Badge */}
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 dark:bg-cyan-500/15 border border-sky-200 dark:border-cyan-400/35 text-[#00A3E0] dark:text-cyan-300 text-[10px] font-mono font-bold uppercase shadow-sm">
                    <Activity className="w-3 h-3 text-[#00A3E0]" />
                    <span>{selectedNode.category}</span>
                  </div>
                  <span className="text-[9px] font-mono text-[#00A3E0] dark:text-cyan-400 font-extrabold uppercase">
                    LIVE INSPECTION
                  </span>
                </div>

                {/* Node Title & Narrative Role */}
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white mb-2 leading-snug">
                    {selectedNode.name}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {selectedNode.role}
                  </p>
                </div>

                {/* Architectural Specifications */}
                <div>
                  <h4 className="text-[10.5px] font-mono font-bold uppercase tracking-wider text-[#0284C7] dark:text-cyan-400 mb-2.5 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#00A3E0]" />
                    <span>Architectural Specifications</span>
                  </h4>
                  <div className="space-y-2">
                    {selectedNode.specs.map((spec, sIdx) => (
                      <div 
                        key={sIdx} 
                        className="flex items-start gap-2 p-2 rounded-lg bg-white dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 text-xs text-slate-700 dark:text-slate-200 font-medium leading-relaxed hover:border-sky-300 dark:hover:border-cyan-400/30 transition-colors shadow-sm"
                      >
                        <Sparkle className="w-3.5 h-3.5 text-[#00A3E0] dark:text-cyan-400 shrink-0 mt-0.5" />
                        <span className="flex-1">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Inspector Bottom Assurance Footer */}
              <div className="relative z-10 pt-4 border-t border-slate-100 dark:border-white/10 mt-6 flex items-center justify-between text-[9px] font-mono text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1 text-[#00A3E0] font-bold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>CLEAN CORE COMPLIANT</span>
                </span>
                <span className="text-sky-700 dark:text-cyan-300/80 font-bold">
                  SUB-SECOND TELEMETRY
                </span>
              </div>
            </div>

          </div>

        </section>

        {/* =========================================================================
            SECTION 4: ENTERPRISE PROCESS FLOW & TRANSFORMATION JOURNEY (FLOW GRAPH)
            ========================================================================= */}
        <section className="space-y-8">
          
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-0.5 bg-blue-500" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00A3E0]">
                SECTION 04 • ROADMAP & FLOW
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0A1931] dark:text-white tracking-tight">
              {currentData.journeyHeading}
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              {currentData.journeySubtitle}
            </p>
          </div>

          {/* 4 Flow Conduit Milestones */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {currentData.journeyStages.map((stage, idx) => (
              <div 
                key={idx} 
                className="bg-white dark:bg-[#0B1528] rounded-2xl p-6 border border-slate-200/90 dark:border-white/10 shadow-sm hover:shadow-xl hover:border-[#00A3E0]/50 transition-all flex flex-col justify-between relative group"
              >
                {/* Connecting arrow badge */}
                {idx < 3 && (
                  <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-white dark:bg-[#071326] border border-slate-200 dark:border-white/20 items-center justify-center text-[#00A3E0] shadow-sm">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}

                <div>
                  {/* Phase pill & Outcome tag */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono font-extrabold text-[#00A3E0] bg-[#00A3E0]/10 px-2.5 py-1 rounded-full">
                      {stage.stage}
                    </span>
                    <span className="text-[9px] font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                      {stage.outcomeTag}
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-[#0A1931] dark:text-white mb-1 group-hover:text-[#00A3E0] transition-colors">
                    {stage.title}
                  </h3>
                  <p className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 font-semibold mb-3">
                    {stage.phaseName}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {stage.description}
                  </p>
                </div>

                {/* Primary Deliverable */}
                <div className="pt-4 border-t border-slate-100 dark:border-white/5">
                  <p className="text-[10px] font-mono uppercase text-slate-400">Core Deliverable:</p>
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-0.5">
                    {stage.deliverable}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </section>

        {/* =========================================================================
            SECTION 5: CAPABILITY RADAR & OPERATING MATRIX (QUALITATIVE GRAPH)
            ========================================================================= */}
        <section className="space-y-8">
          
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-0.5 bg-emerald-500" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00A3E0]">
                SECTION 05 • MATURITY MATRIX
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0A1931] dark:text-white tracking-tight">
              {currentData.radarHeading}
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              {currentData.radarSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white dark:bg-[#071326] rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-white/10 shadow-lg">
            
            {/* SVG Radar Cockpit (5 Cols on Desktop) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-between p-5 bg-slate-50/80 dark:bg-[#0B1528]/80 rounded-2xl border border-slate-200/80 dark:border-white/5 relative overflow-hidden">
              
              {/* Cockpit Header Status */}
              <div className="w-full flex items-center justify-between text-xs font-mono mb-2">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${isRadarPaused ? 'bg-amber-400' : 'bg-cyan-400 animate-pulse'}`} />
                  <span className="text-slate-700 dark:text-cyan-300 font-bold uppercase tracking-wider text-[11px]">
                    {isRadarPaused ? 'PAUSED' : 'CAPABILITY RADAR'}
                  </span>
                </div>
                <span className={`px-2 py-0.5 rounded-md font-bold text-[10px] border transition-colors ${
                  isRadarPaused 
                    ? 'bg-amber-500/10 text-amber-500 border-amber-500/30' 
                    : 'bg-[#00A3E0]/10 text-[#00A3E0] dark:text-cyan-400 border-[#00A3E0]/20'
                }`}>
                  DIMENSION 0{activeRadarVectorIdx + 1} / 05
                </span>
              </div>

              {/* SVG Radar Visual Canvas */}
              <div className="w-full max-w-[340px] aspect-square relative flex items-center justify-center py-2">
                <svg viewBox="0 0 340 320" className="w-full h-full select-none overflow-visible">
                  <defs>
                    <radialGradient id="radarAreaGradient" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#00A3E0" stopOpacity="0.45" />
                      <stop offset="100%" stopColor="#0284C7" stopOpacity="0.12" />
                    </radialGradient>
                    <filter id="radarGlow" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="0" stdDeviation="3.5" floodColor="#00A3E0" floodOpacity="0.45" />
                    </filter>
                    <linearGradient id="radarScannerBeam" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00A3E0" stopOpacity="0.7" />
                      <stop offset="60%" stopColor="#38BDF8" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="#0284C7" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* 4 Concentric Pentagons (25%, 50%, 75%, 100%) */}
                  {[0.25, 0.5, 0.75, 1.0].map((level, ringIdx) => {
                    const pts = [0, 1, 2, 3, 4].map(i => {
                      const pt = getRadarCoord(level * 10, i, 100, 170, 160);
                      return `${pt.x},${pt.y}`;
                    }).join(' ');
                    return (
                      <g key={ringIdx}>
                        <polygon
                          points={pts}
                          fill={ringIdx === 3 ? "rgba(0, 163, 224, 0.02)" : "none"}
                          stroke="currentColor"
                          strokeWidth={ringIdx === 3 ? "1.5" : "1"}
                          strokeDasharray={ringIdx === 3 ? undefined : "3 3"}
                          className={ringIdx === 3 ? "text-slate-300 dark:text-cyan-500/30" : "text-slate-200 dark:text-white/10"}
                        />
                        {/* Percentage Label along Vertical Axis */}
                        <text
                          x="174"
                          y={160 - Math.round(level * 100) + 9}
                          fontSize="8"
                          fontFamily="monospace"
                          className="fill-slate-400 dark:fill-slate-500 select-none text-[8px]"
                        >
                          {Math.round(level * 100)}%
                        </text>
                      </g>
                    );
                  })}

                  {/* 5 Axis Radial Spines */}
                  {[0, 1, 2, 3, 4].map((i) => {
                    const tip = getRadarCoord(10, i, 100, 170, 160);
                    const outerTip = getRadarTipCoord(i, 118, 170, 160);
                    const isActive = activeRadarVectorIdx === i;
                    return (
                      <g key={i}>
                        <line
                          x1="170"
                          y1="160"
                          x2={tip.x}
                          y2={tip.y}
                          stroke="currentColor"
                          strokeWidth={isActive ? "1.5" : "1"}
                          className={isActive ? "text-[#00A3E0]" : "text-slate-200 dark:text-white/15"}
                        />
                        {/* Subtle spine extension to tip badge */}
                        <line
                          x1={tip.x}
                          y1={tip.y}
                          x2={outerTip.x}
                          y2={outerTip.y}
                          stroke="currentColor"
                          strokeWidth="1"
                          strokeDasharray="2 2"
                          className={isActive ? "text-[#00A3E0]/70" : "text-slate-300/40 dark:text-white/10"}
                        />
                      </g>
                    );
                  })}

                  {/* 360° Rotating Radar Scanner Beam */}
                  <g style={{ transformOrigin: '170px 160px' }} className="animate-[spin_7s_linear_infinite] pointer-events-none opacity-40">
                    {/* 60-degree radar sweep pie */}
                    <path d="M 170 160 L 170 60 A 100 100 0 0 1 257 110 Z" fill="url(#radarScannerBeam)" />
                    {/* Leading radar beam laser edge */}
                    <line x1="170" y1="160" x2="257" y2="110" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
                  </g>

                  {/* Legacy Operating Model Polygon (Rose Dashed) */}
                  <polygon
                    points={legacyPolygonPoints}
                    fill="rgba(244, 63, 94, 0.08)"
                    stroke="#F43F5E"
                    strokeWidth="1.5"
                    strokeDasharray="4 3"
                    className="transition-all duration-700 ease-out"
                  />

                  {/* Modern SAP Business Application Polygon (Glowing Cyan) */}
                  <polygon
                    points={sapPolygonPoints}
                    fill="url(#radarAreaGradient)"
                    stroke="#00A3E0"
                    strokeWidth="2.5"
                    filter="url(#radarGlow)"
                    className="transition-all duration-700 ease-out"
                  />

                  {/* Legacy Vertex Dots */}
                  {currentData.radarVectors.map((v, idx) => {
                    const pt = getRadarCoord(v.legacyScore, idx, 100, 170, 160);
                    return (
                      <circle
                        key={`legacy-dot-${idx}`}
                        cx={pt.x}
                        cy={pt.y}
                        r="3"
                        fill="#F43F5E"
                        stroke="#FFFFFF"
                        strokeWidth="1"
                        className="transition-all duration-500"
                      />
                    );
                  })}

                  {/* Modern SAP Interactive Knots */}
                  {currentData.radarVectors.map((v, idx) => {
                    const pt = getRadarCoord(v.sapScore, idx, 100, 170, 160);
                    const isActive = activeRadarVectorIdx === idx;
                    return (
                      <g
                        key={`sap-knot-${idx}`}
                        className="cursor-pointer group"
                        onClick={() => handleSelectRadarVector(idx)}
                      >
                        {isActive && (
                          <circle
                            cx={pt.x}
                            cy={pt.y}
                            r="11"
                            fill="#00A3E0"
                            fillOpacity="0.25"
                            stroke="#38BDF8"
                            strokeWidth="1.5"
                            className="animate-pulse"
                          />
                        )}
                        <circle
                          cx={pt.x}
                          cy={pt.y}
                          r={isActive ? 6 : 4}
                          fill={isActive ? '#38BDF8' : '#00A3E0'}
                          stroke="#FFFFFF"
                          strokeWidth={isActive ? 2 : 1.5}
                          className="transition-all duration-300 group-hover:scale-125"
                        />
                        {/* Floating score tag badge */}
                        <g className={`transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                          <rect
                            x={pt.x - 16}
                            y={pt.y - 22}
                            width="32"
                            height="16"
                            rx="8"
                            className="fill-slate-950/95 dark:fill-[#0A1931]/95 stroke-[#38BDF8]"
                            strokeWidth="1"
                          />
                          <text
                            x={pt.x}
                            y={pt.y - 11}
                            textAnchor="middle"
                            className="fill-cyan-300 font-mono text-[9px] font-bold select-none"
                          >
                            {v.sapScore}.0
                          </text>
                        </g>
                      </g>
                    );
                  })}

                  {/* 5 Outer Dimension Tip Badges (Interactive 01..05) */}
                  {currentData.radarVectors.map((_, idx) => {
                    const tipPt = getRadarTipCoord(idx, 120, 170, 160);
                    const isActive = activeRadarVectorIdx === idx;
                    return (
                      <g
                        key={`tip-badge-${idx}`}
                        className="cursor-pointer group"
                        onClick={() => handleSelectRadarVector(idx)}
                      >
                        {isActive && (
                          <circle
                            cx={tipPt.x}
                            cy={tipPt.y}
                            r="15"
                            fill="#00A3E0"
                            fillOpacity="0.2"
                            stroke="#38BDF8"
                            strokeWidth="1.5"
                            className="animate-pulse"
                          />
                        )}
                        <circle
                          cx={tipPt.x}
                          cy={tipPt.y}
                          r={isActive ? 11 : 9.5}
                          className={`transition-all duration-200 ${
                            isActive
                              ? 'fill-[#00A3E0] stroke-white'
                              : 'fill-white dark:fill-slate-900 stroke-slate-300 dark:stroke-white/20 group-hover:stroke-[#00A3E0]'
                          }`}
                          strokeWidth={isActive ? '2' : '1'}
                        />
                        <text
                          x={tipPt.x}
                          y={tipPt.y + 3.5}
                          textAnchor="middle"
                          className={`font-mono text-[8.5px] font-bold select-none transition-colors ${
                            isActive
                              ? 'fill-white'
                              : 'fill-slate-600 dark:fill-slate-400 group-hover:fill-[#00A3E0]'
                          }`}
                        >
                          0{idx + 1}
                        </text>
                      </g>
                    );
                  })}

                  {/* Central Sensor Core */}
                  <circle cx="170" cy="160" r="7" fill="#0A1931" stroke="#00A3E0" strokeWidth="2" />
                  <circle cx="170" cy="160" r="2.5" fill="#38BDF8" />
                </svg>
              </div>

              {/* Legend & Telemetry Readout Strip */}
              <div className="w-full mt-2 pt-3 border-t border-slate-200 dark:border-white/10 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#00A3E0] shadow-[0_0_8px_rgba(0,163,224,0.6)]" />
                    <span className="text-slate-700 dark:text-slate-200 font-bold">Intelligent SAP Core</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full border border-dashed border-rose-500 bg-rose-500/20" />
                    <span className="text-slate-500 dark:text-slate-400">Legacy Architecture</span>
                  </div>
                </div>

                {/* Telemetry Metrics Bar */}
                <div className="grid grid-cols-2 gap-2 bg-white/70 dark:bg-black/25 p-2.5 rounded-xl border border-slate-200/80 dark:border-white/5 font-mono">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-1.5 text-[10px] text-slate-500 dark:text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                      <span>SAP Modern Benchmark</span>
                    </div>
                    <p className="text-sm sm:text-base font-black text-[#0A1931] dark:text-white pl-3">
                      {avgSapScore} <span className="text-[10px] text-slate-400 font-normal">/ 10.0</span>
                    </p>
                  </div>
                  <div className="space-y-0.5 border-l border-slate-200 dark:border-white/10 pl-3">
                    <div className="flex items-center gap-1.5 text-[10px] text-slate-500 dark:text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full border border-dashed border-rose-500 bg-rose-500/20" />
                      <span>Legacy Baseline</span>
                    </div>
                    <p className="text-sm sm:text-base font-black text-rose-500 dark:text-rose-400 pl-3">
                      {avgLegacyScore} <span className="text-[10px] text-slate-400 font-normal">/ 10.0</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono px-1">
                  <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Live Radar Benchmark
                  </span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                    +{advantagePercent}% Modernization Gain
                  </span>
                </div>
              </div>

            </div>

            {/* Interactive Vector Matrix Detail (7 Cols on Desktop) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#00A3E0] font-bold">
                    VECTOR DIMENSION 0{activeRadarVectorIdx + 1} OF 05
                  </span>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/50 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{scoreMultiplier}x Performance Multiplier</span>
                  </div>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-black text-[#0A1931] dark:text-white tracking-tight">
                  {selectedRadarVector.label}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-6 font-mono">
                  Evaluating architectural efficiency, operational velocity, and enterprise governance.
                </p>

                {/* Dual Score Comparison Meters */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  
                  {/* Legacy State Card */}
                  <div className="p-5 rounded-2xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200/80 dark:border-rose-900/40 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                          Legacy Operating Baseline
                        </span>
                        <span className="text-xs font-mono font-black text-rose-600 dark:text-rose-400">
                          {selectedRadarVector.legacyScore}.0 / 10.0
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full h-2 rounded-full bg-rose-200/60 dark:bg-rose-950/60 overflow-hidden mb-3">
                        <div 
                          style={{ width: `${selectedRadarVector.legacyScore * 10}%` }} 
                          className="h-full bg-gradient-to-r from-rose-500 to-rose-400 rounded-full transition-all duration-700 ease-out" 
                        />
                      </div>

                      <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                        {selectedRadarVector.legacyState}
                      </p>
                    </div>
                    
                    <div className="mt-4 pt-3 border-t border-rose-200/60 dark:border-rose-900/30 flex items-center gap-1.5 text-[11px] font-mono text-rose-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                      <span>Structural Bottleneck Identified</span>
                    </div>
                  </div>

                  {/* Modern SAP State Card */}
                  <div className="p-5 rounded-2xl bg-sky-50/60 dark:bg-[#071F38]/50 border border-cyan-200/80 dark:border-cyan-800/40 flex flex-col justify-between shadow-xs">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#00A3E0] dark:text-cyan-300">
                          Intelligent SAP Modern State
                        </span>
                        <span className="text-xs font-mono font-black text-[#00A3E0] dark:text-cyan-300">
                          {selectedRadarVector.sapScore}.0 / 10.0
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden mb-3">
                        <div 
                          style={{ width: `${selectedRadarVector.sapScore * 10}%` }} 
                          className="h-full bg-gradient-to-r from-[#00A3E0] to-sky-300 rounded-full shadow-[0_0_12px_rgba(0,163,224,0.6)] transition-all duration-700 ease-out" 
                        />
                      </div>

                      <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                        {selectedRadarVector.sapState}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-cyan-200/60 dark:border-cyan-800/30 flex items-center gap-1.5 text-[11px] font-mono text-[#00A3E0] dark:text-cyan-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3E0]" />
                      <span>Optimal Autonomous Capability</span>
                    </div>
                  </div>

                </div>

                {/* Enterprise Strategic Value Card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-[#0A1931] to-[#0A2540] text-white border border-[#00A3E0]/30 shadow-md">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-[#00A3E0]/20 border border-[#00A3E0]/40 flex items-center justify-center shrink-0 mt-0.5">
                      <TrendingUp className="w-5 h-5 text-cyan-300" />
                    </div>
                    <div>
                      <p className="text-[11px] font-mono uppercase tracking-widest text-cyan-300 font-bold mb-1">
                        Enterprise Strategic Value Realization:
                      </p>
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                        {selectedRadarVector.transformationImpact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 5-Dimension Selector Grid */}
              <div className="pt-4 border-t border-slate-200 dark:border-white/10">
                <div className="flex items-center justify-between mb-2.5">
                  <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-bold">
                    Switch Evaluation Dimension:
                  </p>
                  <span className="text-[10px] font-mono text-slate-400">
                    Click dimension to inspect
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {currentData.radarVectors.map((vec, vIdx) => {
                    const isSelected = activeRadarVectorIdx === vIdx;
                    const delta = vec.sapScore - vec.legacyScore;
                    return (
                      <button
                        key={vIdx}
                        onClick={() => handleSelectRadarVector(vIdx)}
                        className={`text-left p-2.5 rounded-xl border transition-all duration-200 cursor-pointer relative overflow-hidden ${
                          isSelected
                            ? 'bg-[#00A3E0]/15 border-[#00A3E0] shadow-sm ring-1 ring-[#00A3E0]/40'
                            : 'bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20'
                        }`}
                      >
                        {isSelected && !isRadarPaused && (
                          <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#00A3E0] animate-pulse" />
                        )}
                        <div className="flex items-center justify-between font-mono text-[10px] text-slate-400 mb-1">
                          <span className={isSelected ? 'text-[#00A3E0] font-bold' : ''}>0{vIdx + 1}</span>
                          <span className="text-emerald-500 font-bold">+{delta}</span>
                        </div>
                        <p className={`text-xs font-bold line-clamp-1 ${isSelected ? 'text-[#0A1931] dark:text-cyan-300' : 'text-slate-700 dark:text-slate-300'}`}>
                          {vec.label}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>

        </section>

        {/* =========================================================================
            SECTION 6: REAL-WORLD INDUSTRY SCENARIOS (4 VISUAL CARDS)
            ========================================================================= */}
        <section className="space-y-8">
          
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-0.5 bg-amber-500" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00A3E0]">
                SECTION 06 • INDUSTRY DEPLOYMENTS
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0A1931] dark:text-white tracking-tight">
              {currentData.scenariosHeading}
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              {currentData.scenariosSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentData.scenarios.map((item, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#0B1528] rounded-2xl p-6 sm:p-7 border border-slate-200/90 dark:border-white/10 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between relative overflow-hidden group"
              >
                {/* Decorative accent glow */}
                <div 
                  className="absolute -top-16 -right-16 w-36 h-36 rounded-full blur-2xl opacity-10 group-hover:opacity-25 transition-opacity pointer-events-none"
                  style={{ backgroundColor: item.accentColor }}
                />

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span 
                      className="w-2.5 h-2.5 rounded-full shrink-0" 
                      style={{ backgroundColor: item.accentColor }} 
                    />
                    <h3 className="text-sm font-mono font-extrabold uppercase tracking-wider text-slate-900 dark:text-white">
                      {item.industry}
                    </h3>
                  </div>

                  {/* Problem & Solution */}
                  <div className="space-y-3 mb-5">
                    <div>
                      <p className="text-[10px] font-mono font-bold uppercase text-slate-400 mb-0.5">Operational Bottleneck:</p>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {item.challenge}
                      </p>
                    </div>

                    <div>
                      <p className="text-[10px] font-mono font-bold uppercase text-[#00A3E0] mb-0.5">SAP Solution Architecture:</p>
                      <p className="text-xs text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Delivered Value Outcome */}
                <div className="pt-4 border-t border-slate-100 dark:border-white/5">
                  <p className="text-[10px] font-mono uppercase text-emerald-600 dark:text-emerald-400 font-bold">Delivered Strategic Value:</p>
                  <p className="text-xs font-bold text-slate-900 dark:text-white mt-0.5">
                    {item.valueOutcome}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </section>

        {/* =========================================================================
            SECTION 7: TECHNOLOGY ECOSYSTEM & EXTENSION TOPOLOGY (SVG BRIDGE)
            ========================================================================= */}
        <section className="space-y-8">
          
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-0.5 bg-indigo-500" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00A3E0]">
                SECTION 07 • INTEGRATION TOPOLOGY
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0A1931] dark:text-white tracking-tight">
              {currentData.ecosystemHeading}
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              {currentData.ecosystemSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentData.ecosystemSatellites.map((sat, idx) => (
              <div 
                key={idx}
                className={`bg-white dark:bg-[#0B1528] rounded-2xl p-6 border ${sat.accent} shadow-sm hover:shadow-lg transition-all flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 text-[#00A3E0]">
                      <Network className="w-5 h-5" />
                    </div>
                    <span className="text-[9px] font-mono font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded-full">
                      {sat.protocol}
                    </span>
                  </div>

                  <h3 className="text-sm font-extrabold text-[#0A1931] dark:text-white mb-2">
                    {sat.name}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {sat.role}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-[#00A3E0]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Certified Enterprise Connector</span>
                </div>
              </div>
            ))}
          </div>

        </section>

        {/* =========================================================================
            SECTION 8: TRANSFORMATION ADVISORY & CONSULTATION GATEWAY
            ========================================================================= */}
        <section className="space-y-10">
          
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-0.5 bg-cyan-500" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00A3E0]">
                SECTION 08 • ADVISORY ROADMAP
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0A1931] dark:text-white tracking-tight">
              {currentData.advisoryHeading}
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              {currentData.advisorySubtitle}
            </p>
          </div>

          {/* 3 Step Advisory Framework */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentData.advisorySteps.map((step, idx) => (
              <div 
                key={idx}
                className="bg-white dark:bg-[#0B1528] rounded-2xl p-6 border border-slate-200/80 dark:border-white/10 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-black text-slate-300 dark:text-white/20 font-mono">
                    {step.num}
                  </span>
                  <h3 className="text-base font-extrabold text-[#0A1931] dark:text-white mt-2 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-white/5">
                  <span className="text-[10px] font-mono font-bold text-[#00A3E0] uppercase tracking-wider">
                    Phase Scope: {step.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-[#00A3E0] via-[#0284C7] to-[#0A2548] text-white shadow-xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3 text-center lg:text-left">
              <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-mono font-bold uppercase tracking-wider text-cyan-200">
                Ready for Clean Core Modernization?
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                Schedule an Architecture Discovery Workshop for {currentData.tabLabel}
              </h3>
              <p className="text-sm text-white/80 leading-relaxed">
                Meet with our senior enterprise architects to review your system landscape, identify Clean Core opportunities, and receive a customized technical roadmap.
              </p>
            </div>

            <div className="shrink-0">
              <button
                onClick={() => onOpenContact(`Architecture Discovery Workshop: ${currentData.tabLabel}`)}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-[#0A2548] bg-white hover:bg-slate-100 shadow-xl transition-all hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Schedule Architecture Discovery Workshop</span>
                <ArrowRight className="w-4 h-4 text-[#00A3E0]" />
              </button>
            </div>
          </div>

        </section>

      </div>
        </>
      )}

    </div>
  );
};

export default SapBusinessApplicationsPage;
