import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Layers,
  ArrowRight,
  ChevronDown,
  Boxes,
  Network,
  Database,
  ShieldCheck,
  Cpu,
  CheckCircle2,
  Workflow,
  Sparkles,
  GitBranch,
  Server,
  Cloud,
  Lock,
  RefreshCw,
  Compass,
  ArrowUpRight,
  Check,
  Zap,
  Globe2,
  Sliders,
  Share2
} from 'lucide-react';
import { AdvisoryServiceNav, AdvisorySuiteFooterCrosslinks } from '../../components/advisory/AdvisoryServiceNav';

interface SolutionArchitecturePageProps {
  onOpenContact?: (topic?: string) => void;
}

export const SolutionArchitecturePage: React.FC<SolutionArchitecturePageProps> = ({ onOpenContact }) => {
  useEffect(() => {
    document.title = 'SAP Solution Architecture & Enterprise Blueprinting | KNOOVIQ';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Section: Requirement Traceability Mapping State
  const [selectedReq, setSelectedReq] = useState<number>(0);
  const traceabilityMatrix = [
    {
      capability: 'Real-Time Omnichannel Order Fulfillment',
      driver: 'Sub-second inventory reservations across regional warehouses and digital storefronts.',
      pattern: 'Event-Driven Decoupled Architecture',
      blocks: ['SAP S/4HANA EWM', 'SAP Event Mesh', 'Kafka Connector', 'Commerce Headless API'],
      target: 'Sub-second reservation latency across all sales channels'
    },
    {
      capability: 'Unified Global Financial Consolidation',
      driver: 'Continuous multi-currency ledger reconciliation across international operating subsidiaries.',
      pattern: 'Universal Single Source of Truth',
      blocks: ['S/4 Group Reporting', 'SAP Datasphere', 'Real-Time Financial Analytics'],
      target: 'Continuous real-time ledger visibility with zero period-end lag'
    },
    {
      capability: 'Straight-Through Direct Procurement',
      driver: 'Automated requisition matching, purchase order generation, and contract compliance.',
      pattern: 'Hybrid Composable Cloud Integration',
      blocks: ['SAP Ariba PunchOut', 'S/4HANA Core MM', 'Document Intelligence Services'],
      target: 'Automated straight-through order processing without manual intervention'
    },
    {
      capability: 'Predictive Multi-Echelon Supply Chain Synchrony',
      driver: 'Synchronized demand sensing with supplier production capacities under dynamic lead times.',
      pattern: 'Real-Time Planning & Analytics Pipeline',
      blocks: ['SAP Integrated Business Planning (IBP)', 'HANA In-Memory Views', 'Supply Assignment Engine'],
      target: 'Continuous dynamic planning recalculation based on live inventory'
    }
  ];

  // Section: Interactive Solution Blueprint Layers
  const [activeBlueprintTier, setActiveBlueprintTier] = useState<number>(0);
  const blueprintTiers = [
    {
      name: 'Channels & Digital Experience Layer',
      role: 'User Touchpoints & Interface Modernization',
      components: ['SAP Fiori Workspaces', 'Mobile Field Touchpoints', 'Customer B2B Portals', 'Supplier Self-Service Interfaces'],
      protocol: 'Secure HTTPS and Responsive Web Standards',
      governance: 'Responsive accessibility guidelines, unified corporate design system, decoupled microfrontends'
    },
    {
      name: 'API Gateway & Integration Mesh Layer',
      role: 'Unified API Gateway & Event Orchestration',
      components: ['SAP API Management', 'SAP Event Mesh Pub/Sub Broker', 'Cloud Integration Services', 'Zero-Trust Security Gateway'],
      protocol: 'RESTful Web Services, Standard OData, Event Streams',
      governance: 'Centralized API catalogs, token authentication, rate limiting, and strict schema validation'
    },
    {
      name: 'Clean Core Enterprise ERP Engine Layer',
      role: 'Standard Transactional Core & Process Automation',
      components: ['SAP S/4HANA Core (Universal Ledger, MM, SD, EWM)', 'Side-by-Side Cloud Extensions', 'In-App Extensibility'],
      protocol: 'Certified Public Enterprise APIs',
      governance: 'Zero standard code modification, automated cloud upgrade readiness, standardized workflows'
    },
    {
      name: 'Real-Time Data Intelligence Fabric Layer',
      role: 'Unified Data Orchestration, Virtualization & Analytics',
      components: ['SAP Datasphere Data Fabric', 'In-Memory Columnar Database', 'Hyperscaler Data Lakehouse', 'Enterprise Business Intelligence'],
      protocol: 'Direct in-memory querying, federated virtualization',
      governance: 'Zero unmanaged data duplication, governed business semantic layers, global data privacy standards'
    },
    {
      name: 'Multi-Cloud Resilient Infrastructure Layer',
      role: 'Hyperscaler Hosting & Automated Business Continuity',
      components: ['Hyperscaler Dedicated Clouds (AWS, Azure, GCP)', 'Multi-Zone Active-Passive Clusters', 'Continuous Snapshot Storage'],
      protocol: 'Dedicated Private Cloud Peering & Direct Connect',
      governance: 'Continuous high-availability service level agreements, zero data loss failover protocols'
    }
  ];

  // Section: Integration Pattern Matrix State
  const [activePattern, setActivePattern] = useState<'event' | 'rest' | 'bulk' | 'edi'>('event');
  const integrationPatterns = {
    event: {
      title: 'Asynchronous Event-Driven Architecture (Pub/Sub)',
      useCase: 'Inventory movement notifications, order status transitions, master data lifecycle updates.',
      mechanism: 'Decoupled Event Publication via Enterprise Event Brokers',
      advantage: 'Systems publish business events without needing to know consumer system details, guaranteeing loose coupling.',
      flow: [
        { sender: 'Core Enterprise ERP', action: 'Emits business event notification payload upon order creation', receiver: 'Enterprise Event Mesh' },
        { sender: 'Event Mesh Broker', action: 'Broadcasts verified event payload across subscribed topics', receiver: 'Target Distribution Queues' },
        { sender: 'Subscribed Services', action: 'Executes warehouse allocation and shipment scheduling concurrently', receiver: 'Fulfillment & Logistics Systems' }
      ]
    },
    rest: {
      title: 'Synchronous REST & Standard OData APIs',
      useCase: 'Live pricing calculations, customer credit limits, real-time product availability checks.',
      mechanism: 'Standardized RESTful Service Endpoints with Centralized Gateway',
      advantage: 'Direct sub-second request-response data retrieval with unified authorization and audit trails.',
      flow: [
        { sender: 'Customer Portal', action: 'Transmits real-time inquiry request with filter parameters', receiver: 'Enterprise API Gateway' },
        { sender: 'API Gateway', action: 'Validates security credentials, enforces rate limits, and routes call', receiver: 'Core Business Service' },
        { sender: 'Core Service', action: 'Executes in-memory query and returns structured JSON response', receiver: 'Customer Portal' }
      ]
    },
    bulk: {
      title: 'High-Throughput Data Streaming & Analytics Replication',
      useCase: 'Feeding analytical data lakes, executive dashboards, and regulatory compliance repositories.',
      mechanism: 'Continuous Change Data Capture & High-Speed Ingestion',
      advantage: 'Near-zero transactional impact on production ERP while maintaining fresh analytical models.',
      flow: [
        { sender: 'Transactional Database', action: 'Captures database log changes on transactional tables', receiver: 'Replication Pipeline' },
        { sender: 'Replication Engine', action: 'Formats delta records into compressed analytical formats', receiver: 'Enterprise Data Lake' },
        { sender: 'Analytics Engine', action: 'Refreshes enterprise business semantic views and executive metrics', receiver: 'Executive Dashboards' }
      ]
    },
    edi: {
      title: 'B2B Electronic Data Interchange & E-Invoicing',
      useCase: 'Supplier purchase orders, advance shipping notices, electronic invoice exchange, tax authorities.',
      mechanism: 'Secure Standard Document Interchange & Translation Networks',
      advantage: 'Automated global trading partner compliance with cryptographic non-repudiation.',
      flow: [
        { sender: 'Purchasing System', action: 'Generates approved purchase order requisition', receiver: 'Integration Suite' },
        { sender: 'Integration Suite', action: 'Translates internal business format to certified EDI standard', receiver: 'Secure B2B Gateway' },
        { sender: 'B2B Gateway', action: 'Transmits encrypted document package with digital receipt', receiver: 'Supplier Trading Network' }
      ]
    }
  };

  // Section: Data Architecture Storage Stratification
  const dataTiers = [
    {
      tier: 'Hot In-Memory Tier',
      technology: 'In-Memory Columnar Database',
      dataTypes: 'Active transactions, current fiscal year entries, open sales orders, core master data.',
      retention: 'Current Operational Window',
      advantage: 'Sub-millisecond processing speed supporting real-time operational transactions.'
    },
    {
      tier: 'Warm Analytical Tier',
      technology: 'Unified Enterprise Data Fabric',
      dataTypes: 'Closed historical transactions, multi-year reporting models, seasonal trend analysis.',
      retention: 'Multi-Year Business Horizon',
      advantage: 'Optimized query execution without consuming premium in-memory transactional compute.'
    },
    {
      tier: 'Cold Archival Tier',
      technology: 'Secure Cloud Object Repository',
      dataTypes: 'Statutory audit archives, regulatory document trails, long-term historical records.',
      retention: 'Statutory Retention Window',
      advantage: 'Cost-effective, immutable, encrypted storage meeting stringent regulatory standards.'
    }
  ];

  // Section: Architecture Review Board (ARB) Principles
  const arbPrinciples = [
    {
      title: 'Clean Core Primacy',
      desc: 'Maintain standard ERP core logic. Differentiating business capabilities are developed as decoupled cloud extensions utilizing standard public APIs.'
    },
    {
      title: 'API-First Interoperability',
      desc: 'Direct database connections and uncataloged point-to-point links are strictly avoided. All system interactions are mediated through governed API catalogs.'
    },
    {
      title: 'Fault Isolation & Resilience',
      desc: 'Architect for graceful degradation. Peripheral service interruptions or external latency must never impact core transactional enterprise operations.'
    },
    {
      title: 'Data Virtualization Over Duplication',
      desc: 'Access enterprise data at the source via federated data fabrics rather than copying redundant data tables across multiple departmental silos.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-500 selection:text-white">

      {/* =========================================================================
          HERO SECTION: SOLUTION ARCHITECTURE BLUEPRINT (CLEAN WHITE FORMAT)
          ========================================================================= */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200/80">
        
        {/* Subtle Architectural Blueprint Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(to right, #0F172A 1px, transparent 1px), linear-gradient(to bottom, #0F172A 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 text-xs md:text-sm text-slate-500 font-medium">
              <li><Link to="/" className="hover:text-blue-600 transition-colors">Home</Link></li>
              <li className="text-slate-400">/</li>
              <li><Link to="/advisory-managed-services" className="hover:text-blue-600 transition-colors">Advisory &amp; Managed Services</Link></li>
              <li className="text-slate-400">/</li>
              <li className="text-blue-600 font-semibold" aria-current="page">Solution Architecture</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold tracking-wider uppercase">
                <Boxes className="w-3.5 h-3.5 text-blue-600" />
                <span>ENTERPRISE ARCHITECTURE BLUEPRINT &bull; SCALABLE SYSTEMS DESIGN</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                Solution Architecture
              </h1>

              <p className="text-xl sm:text-2xl font-bold text-slate-700 leading-snug">
                Design Connected, Scalable, and Resilient SAP Enterprise Blueprints
              </p>

              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                Translate complex business strategies into robust, modular, and future-proof enterprise architectures. Knooviq designs decoupled SAP solution blueprints uniting cloud ERP cores, real-time integration meshes, intelligent data fabrics, and multi-cloud platforms.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenContact && onOpenContact('Solution Architecture Design')}
                  className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base shadow-lg shadow-blue-600/25 transition-all flex items-center gap-2.5 cursor-pointer"
                >
                  <span>Request Architecture Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#blueprint-framework"
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold text-base transition-all flex items-center gap-2 shadow-sm"
                >
                  <span>Explore Blueprint Framework</span>
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Right Hero Visual: IMAGE 1 - Enterprise Solution Architecture Overview */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl relative group bg-white">
                <img
                  src="/images/architecture/solution-architecture-hero.jpg"
                  alt="Enterprise SAP Solution Architecture Blueprint Overview"
                  className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg flex items-center justify-between text-slate-900">
                  <div>
                    <span className="text-xs font-mono font-bold text-blue-600 block">ARCHITECTURE BLUEPRINT</span>
                    <span className="text-sm font-bold text-slate-900">Multi-Tier Decoupled Enterprise Framework</span>
                  </div>
                  <span className="text-xs font-mono font-extrabold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                    Clean Core Standard
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Sticky Service Navigation */}
      <AdvisoryServiceNav currentServiceId="solution-architecture" />

      {/* =========================================================================
          SECTION 1: ENTERPRISE SOLUTION BLUEPRINT FRAMEWORK
          ========================================================================= */}
      <section id="blueprint-framework" className="py-16 sm:py-20 border-b border-slate-200/80 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider block mb-2 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full w-fit">
              Architectural Blueprint &amp; Layered Topology
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              End-to-End Enterprise Solution Blueprint Framework
            </h2>
            <p className="text-slate-600 text-base mt-2 font-sans">
              A modular, multi-tier architectural foundation that separates digital user touchpoints, integration orchestration, core transactional ERP, enterprise data intelligence, and resilient hyperscaler hosting.
            </p>
          </div>

          {/* IMAGE 2: Solution Blueprint Framework Diagram */}
          <div className="mb-12 rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-white">
            <img
              src="/images/architecture/solution-blueprint-framework.jpg"
              alt="Enterprise Solution Architecture Blueprint Framework Diagram"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Layer Cards with Clean Typography */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {blueprintTiers.map((tier, idx) => (
              <div
                key={idx}
                onClick={() => setActiveBlueprintTier(idx)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                  activeBlueprintTier === idx
                    ? 'bg-blue-50 border-blue-500 shadow-md ring-1 ring-blue-500/30'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-3">
                    <Layers className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-2 leading-snug">{tier.name}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-sans">{tier.role}</p>
                </div>
                <div className="pt-3 mt-4 border-t border-slate-100 text-[11px] text-blue-600 font-semibold flex items-center gap-1">
                  <span>View Specifications</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            ))}
          </div>

          {/* Active Layer Detail Card */}
          <div className="mt-6 p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-100 gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
                <h3 className="text-lg font-bold text-slate-900">{blueprintTiers[activeBlueprintTier].name}</h3>
              </div>
              <span className="text-xs font-mono text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                {blueprintTiers[activeBlueprintTier].protocol}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div>
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block mb-2 font-bold">
                  Core Solution Components:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {blueprintTiers[activeBlueprintTier].components.map((comp, cIdx) => (
                    <div key={cIdx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2 text-xs text-slate-800">
                      <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block mb-2 font-bold">
                  Architectural Governance:
                </span>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed font-sans">
                  {blueprintTiers[activeBlueprintTier].governance}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2: REQUIREMENT TRACEABILITY & CAPABILITY MAPPING
          ========================================================================= */}
      <section className="py-16 sm:py-20 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider block mb-2 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full w-fit">
              Capability Mapping &amp; Traceability
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Aligning Business Capabilities With Modular Solution Components
            </h2>
            <p className="text-slate-600 text-base mt-2 font-sans">
              Every architectural decision must directly trace back to business outcomes. We map enterprise capabilities across finance, supply chain, customer operations, and procurement into standard SAP modules and decoupled cloud extensions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Selector Column */}
            <div className="lg:col-span-5 space-y-3">
              {traceabilityMatrix.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedReq(idx)}
                  className={`w-full p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                    selectedReq === idx
                      ? 'bg-blue-50 border-blue-500 shadow-sm ring-1 ring-blue-500/30'
                      : 'bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-700'
                  }`}
                >
                  <div className="text-sm font-bold text-slate-900 mb-1">{item.capability}</div>
                  <div className="text-xs text-slate-500 line-clamp-1">{item.driver}</div>
                </button>
              ))}
            </div>

            {/* Right Traceability Detail Card */}
            <div className="lg:col-span-7 p-7 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider">
                  ARCHITECTURAL PATTERN &amp; BLOCKS
                </span>
                <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  Validated Blueprint
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {traceabilityMatrix[selectedReq].capability}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                  {traceabilityMatrix[selectedReq].driver}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
                <span className="text-xs font-mono text-slate-500 block font-bold uppercase">
                  Target Architectural Pattern:
                </span>
                <span className="text-sm font-bold text-blue-700 block">
                  {traceabilityMatrix[selectedReq].pattern}
                </span>
              </div>

              <div>
                <span className="text-xs font-mono text-slate-500 block mb-2 font-bold uppercase">
                  Mapped Solution Building Blocks:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {traceabilityMatrix[selectedReq].blocks.map((blk, bIdx) => (
                    <div key={bIdx} className="p-3 rounded-xl bg-white border border-slate-200 flex items-center gap-2 text-xs text-slate-800">
                      <Boxes className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{blk}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs">
                <span className="text-slate-500">Architectural Target:</span>
                <span className="font-bold text-slate-900">{traceabilityMatrix[selectedReq].target}</span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: INTEGRATION ARCHITECTURE & API FABRIC
          ========================================================================= */}
      <section className="py-16 sm:py-20 border-b border-slate-200/80 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider block mb-2 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full w-fit">
              Enterprise Integration Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Decoupled API Fabric, Event Mesh &amp; Secure Protocol Orchestration
            </h2>
            <p className="text-slate-600 text-base mt-2 font-sans">
              Eliminate fragile point-to-point connections with an event-driven, API-first integration fabric. We establish governed integration patterns connecting cloud ERP, SaaS applications, on-premise assets, and external trading networks.
            </p>
          </div>

          {/* IMAGE 3: Integration Mesh & Event-Driven Architecture Visual */}
          <div className="mb-12 rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-white">
            <img
              src="/images/architecture/solution-integration-mesh.jpg"
              alt="Enterprise SAP Integration Architecture: 3D Multi-Tier Integration Mesh"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Integration Pattern Selector Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {(['event', 'rest', 'bulk', 'edi'] as const).map((key) => (
              <button
                key={key}
                onClick={() => setActivePattern(key)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activePattern === key
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 shadow-sm'
                }`}
              >
                {integrationPatterns[key].title.split(' (')[0]}
              </button>
            ))}
          </div>

          {/* Pattern Details Panel */}
          <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-slate-100 gap-3">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  {integrationPatterns[activePattern].title}
                </h3>
                <p className="text-xs text-slate-500 font-sans">
                  {integrationPatterns[activePattern].useCase}
                </p>
              </div>
              <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-3 py-1.5 rounded-xl border border-blue-200 self-start md:self-auto">
                {integrationPatterns[activePattern].mechanism}
              </span>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed font-sans">
              {integrationPatterns[activePattern].advantage}
            </p>

            {/* Sequence Flow */}
            <div className="space-y-3">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block font-bold">
                Architectural Communication Sequence:
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {integrationPatterns[activePattern].flow.map((step, sIdx) => (
                  <div key={sIdx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-3">
                    <div>
                      <span className="text-[10px] font-mono font-bold text-blue-700 block mb-1 uppercase">
                        Origin: {step.sender}
                      </span>
                      <p className="text-xs text-slate-800 leading-snug">{step.action}</p>
                    </div>
                    <div className="pt-2 border-t border-slate-200 text-[11px] text-blue-600 font-mono">
                      Destination: {step.receiver}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: DATA ARCHITECTURE & STORAGE STRATIFICATION
          ========================================================================= */}
      <section className="py-16 sm:py-20 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider block mb-2 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full w-fit">
              Data Architecture &amp; Unified Fabric
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              High-Performance Data Fabric, In-Memory Storage &amp; Virtualization
            </h2>
            <p className="text-slate-600 text-base mt-2 font-sans">
              Modern solution architecture requires a data tier that scales with exponential transactional growth while maintaining sub-second query performance. We design tiered data architectures separating active transactional memory from long-term analytical lakes.
            </p>
          </div>

          {/* IMAGE 4: Data Architecture & Pipeline Visual */}
          <div className="mb-12 rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-white">
            <img
              src="/images/architecture/solution-data-fabric.jpg"
              alt="Enterprise Data Architecture Pipeline & In-Memory Cloud Fabric"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* 3 Storage Stratification Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dataTiers.map((dt, idx) => (
              <div key={idx} className="p-7 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Database className="w-4 h-4 text-blue-600" />
                    <span className="text-xs font-mono font-bold text-blue-700 uppercase">{dt.technology}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{dt.tier}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans mb-3">{dt.dataTypes}</p>
                </div>
                <div className="pt-3 border-t border-slate-200 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Retention Horizon:</span>
                    <span className="font-semibold text-slate-900">{dt.retention}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 italic pt-1">{dt.advantage}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: SECURITY ARCHITECTURE, CLOUD RESILIENCY & HA/DR
          ========================================================================= */}
      <section className="py-16 sm:py-20 border-b border-slate-200/80 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider block mb-2 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full w-fit">
              Security &amp; Operational Resiliency
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Zero-Trust Security Perimeter, Multi-Zone Redundancy &amp; Business Continuity
            </h2>
            <p className="text-slate-600 text-base mt-2 font-sans">
              Enterprise architectures must guarantee uninterrupted operations and data sovereignty. We design zero-trust perimeters, role-based access governance, active-passive disaster recovery, and continuous resilience frameworks.
            </p>
          </div>

          {/* IMAGE 5: Operations & Multi-Cloud Global Command Center Visual */}
          <div className="mb-12 rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-white">
            <img
              src="/images/architecture/solution-governance-cloud.jpg"
              alt="Enterprise Architecture Operations Command Center: Global Multi-Cloud Network"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* 4 Pillars of Resiliency */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Lock,
                title: 'Identity Federation & Zero Trust',
                desc: 'Single sign-on, hardware multi-factor authentication, and dynamic risk-based conditional access across all enterprise touchpoints.'
              },
              {
                icon: ShieldCheck,
                title: 'Private Network Isolation',
                desc: 'End-to-end data encryption in transit and at rest, routed across private hyperscaler interconnects with zero public exposure.'
              },
              {
                icon: RefreshCw,
                title: 'Multi-Zone High Availability',
                desc: 'Synchronous database replication across independent cloud availability zones ensuring zero data loss during localized hardware events.'
              },
              {
                icon: Server,
                title: 'Automated Disaster Recovery',
                desc: 'Rapid failover orchestration, geo-redundant snapshot storage, and automated business continuity test verification.'
              }
            ].map((sec, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                  <sec.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">{sec.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">{sec.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: ARCHITECTURE GOVERNANCE & ARB PRINCIPLES
          ========================================================================= */}
      <section className="py-16 sm:py-20 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider block mb-2 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full w-fit">
              Governance &amp; Architectural Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Architecture Review Board Governance &amp; Clean Core Standards
            </h2>
            <p className="text-slate-600 text-base mt-2 font-sans">
              Long-term architectural success requires disciplined governance. We establish enterprise Architecture Review Boards (ARB) that enforce Clean Core guidelines, standardize interface catalogs, and prevent architectural erosion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {arbPrinciples.map((arb, idx) => (
              <div key={idx} className="p-7 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider">
                    Core Architectural Principle
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{arb.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">{arb.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Crosslink Suite Navigation */}
      <AdvisorySuiteFooterCrosslinks activeServiceId="solution-architecture" />

      {/* Final Call to Action */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white border-t border-slate-200 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-widest block bg-blue-50 border border-blue-200 px-3 py-1 rounded-full w-fit mx-auto">
            ENTERPRISE ARCHITECTURE &bull; CLEAN CORE BLUEPRINT &bull; HIGH AVAILABILITY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Design Your Target SAP Solution Architecture
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal">
            Collaborate with senior enterprise architects to design a connected, scalable, and resilient SAP blueprint tailored to your organizational scale.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onOpenContact && onOpenContact('Solution Architecture Design')}
              className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base shadow-xl shadow-blue-600/25 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Schedule Architecture Blueprint Briefing</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              to="/services/sap-strategy"
              className="px-8 py-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold text-base transition-all shadow-sm"
            >
              Explore SAP Strategy Advisory
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SolutionArchitecturePage;
