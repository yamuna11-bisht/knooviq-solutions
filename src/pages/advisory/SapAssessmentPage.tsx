import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Search,
  ArrowRight,
  ChevronDown,
  Layers,
  Cpu,
  Database,
  ShieldAlert,
  FileText,
  AlertTriangle,
  Server,
  Zap,
  Activity,
  GitPullRequest,
  CheckCircle2,
  HardDrive,
  BarChart,
  Network,
  Clock,
  ExternalLink,
  Code,
  FileCheck,
  RefreshCw,
  FolderTree,
  Sliders,
  PieChart
} from 'lucide-react';
import { AdvisoryServiceNav, AdvisorySuiteFooterCrosslinks } from '../../components/advisory/AdvisoryServiceNav';

interface SapAssessmentPageProps {
  onOpenContact?: (topic?: string) => void;
}

export const SapAssessmentPage: React.FC<SapAssessmentPageProps> = ({ onOpenContact }) => {
  useEffect(() => {
    document.title = 'SAP Landscape Assessment & Technical Audit | KNOOVIQ';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Landscape Discovery Assessment Pillars
  const discoveryPillars = [
    {
      icon: Server,
      title: 'Core ERP & Transactional Systems',
      scope: 'SAP ECC 6.0 & S/4HANA Instances',
      desc: 'Deep diagnostic analysis of system versions, database sizing, patch levels, Unicode status, and active functional modules across finance, sales, and supply chain.',
      metrics: ['Database volume & annual growth rate', 'Custom code footprint & modification inventory', 'Unicode & platform prerequisites']
    },
    {
      icon: BarChart,
      title: 'Analytics & Data Warehousing',
      scope: 'SAP BW, BW/4HANA & Reporting Marts',
      desc: 'Holistic evaluation of reporting models, BEx queries, extraction pipelines, and data volume growth to plan modern data fabric and virtualization strategies.',
      metrics: ['Query execution runtimes & cache hit ratios', 'Redundant data cubes & staging table sizing', 'Cloud analytics & Datasphere modernization roadmap']
    },
    {
      icon: Network,
      title: 'Integration & Middleware Fabric',
      scope: 'SAP PI/PO, RFC, IDoc & API Endpoints',
      desc: 'Complete mapping of synchronous and asynchronous interfaces, security certificates, and third-party links to identify sunset risks and event-driven patterns.',
      metrics: ['Critical interface dependencies & failure rates', 'Legacy point-to-point connections cataloged', 'Decoupled API & Event Mesh migration pathways']
    },
    {
      icon: Layers,
      title: 'Satellite & Composable Cloud Applications',
      scope: 'CRM, SCM, Ariba, Field Service & BTP Apps',
      desc: 'Audit of peripheral enterprise applications, legacy customizations, user licensing allocations, and operational dependencies impacting transformation agility.',
      metrics: ['System obsolescence & support deadlines', 'Custom user interface technical debt', 'Target cloud SaaS replacement options']
    }
  ];

  // Integration Protocol Vulnerability Audit
  const integrationProtocols = [
    { protocol: 'Direct Database Table Reads', instances: 42, risk: 'Critical', s4Compatible: 'No (Direct Reads Blocked)', targetPath: 'Expose via Core Data Services (CDS) Views & OData APIs' },
    { protocol: 'Point-to-Point Custom RFCs & BAPIs', instances: 168, risk: 'High', s4Compatible: 'Partial (Breaks Clean Core)', targetPath: 'Modernize with REST / OData v4 on SAP BTP' },
    { protocol: 'File-Based IDoc Drops (SFTP / NFS)', instances: 94, risk: 'Medium', s4Compatible: 'Yes (Legacy Batch Delay)', targetPath: 'Transition to SAP Event Mesh & Real-Time Webhooks' },
    { protocol: 'SOAP Web Services (Legacy PI/PO)', instances: 73, risk: 'Medium', s4Compatible: 'Yes (Maintenance Burden)', targetPath: 'Migrate to SAP Cloud Integration (Cloud Integration Suite)' },
    { protocol: 'Modern REST & OData APIs', instances: 51, risk: 'Low', s4Compatible: '100% Native Compatible', targetPath: 'Register in SAP API Management Catalog' }
  ];

  // Data Quality Telemetry
  const dataAuditMetrics = [
    { entity: 'Customer Master (KNA1 / BP)', volume: '480,000 Records', duplicateRate: '16.4%', deadHistory: '38%', cleansingEffort: 'High' },
    { entity: 'Vendor Master (LFA1 / BP)', volume: '92,000 Records', duplicateRate: '9.2%', deadHistory: '42%', cleansingEffort: 'Medium' },
    { entity: 'Material Master (MARA)', volume: '1,250,000 SKUs', duplicateRate: '18.8%', deadHistory: '54%', cleansingEffort: 'Critical' },
    { entity: 'Financial Documents (BKPF/BSEG)', volume: '68,000,000 Records', duplicateRate: 'N/A', deadHistory: '62% >5 yrs', cleansingEffort: 'Archive to NLS' }
  ];

  // Risk Matrix 2x2 Quadrant Data
  const [activeRiskQuadrant, setActiveRiskQuadrant] = useState<'critical' | 'strategic' | 'operational' | 'hygiene'>('critical');
  const riskQuadrants = {
    critical: {
      label: 'High Impact • High Likelihood (Immediate Action Required)',
      badge: 'CRITICAL HOTSPOTS',
      badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
      items: [
        { title: 'Monolithic Database In-Memory Cost Blowout', detail: 'Without data archiving, moving 5.8 TB ECC data to SAP HANA will require an oversized, high-cost multi-terabyte cloud appliance.' },
        { title: 'PI/PO Middleware End-of-Support Cliff', detail: 'Over 180 critical supplier and banking interfaces face security non-compliance with the pending SAP PI/PO end-of-support deadline.' },
        { title: 'Legacy Architecture Incompatibilities', detail: 'Outdated architectural tables and legacy database aggregates must be rationalized for standard cloud ERP operations.' }
      ]
    },
    strategic: {
      label: 'High Impact • Low Likelihood (Structural & Architecture Gaps)',
      badge: 'STRATEGIC ARCHITECTURE RISKS',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      items: [
        { title: 'Vendor Lock-in via Non-Standard Satellites', detail: 'Point-to-point connections with custom non-SAP logistics engines create severe multi-region migration dependencies.' },
        { title: 'Business Partner (CVI) Data Mapping Conflicts', detail: 'Customer-Vendor Integration conflicts between SD and MM records will halt data migration runs if unaddressed.' }
      ]
    },
    operational: {
      label: 'Low Impact • High Likelihood (Process & Efficiency Friction)',
      badge: 'OPERATIONAL BOTTLENECKS',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      items: [
        { title: 'Excessive Batch Job Failure Rate in Month-End', detail: 'Unsynchronized background job chains cause 2–3 hour delays during financial closing windows.' },
        { title: 'Authorization Roles Built Without SoD Compliance', detail: 'Overlapping composite roles grant high-risk transaction access (e.g. creating and releasing vendors).' }
      ]
    },
    hygiene: {
      label: 'Low Impact • Low Likelihood (Routine Technical Debt)',
      badge: 'TECHNICAL HYGIENE',
      badgeColor: 'bg-slate-100 text-slate-700 border-slate-200',
      items: [
        { title: 'Spool and Job Log Table Accumulation', detail: 'Historical log tables consuming over 240 GB of unpruned temporary spool print data.' },
        { title: 'Unused User Accounts with Active Licences', detail: 'Over 140 departed employee user accounts consuming expensive professional enterprise licenses.' }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-500 selection:text-white">

      {/* =========================================================================
          SECTION 1: HERO — SAP ASSESSMENT (FULL-BLEED WIDESCREEN HERO)
          ========================================================================= */}
      <section className="relative w-full min-h-[600px] lg:min-h-[660px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 overflow-hidden bg-slate-950 text-white">

        {/* Full-Bleed Background Visual */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/assessment/sap-assessment-hero.jpg"
            alt="Enterprise SAP Landscape Assessment Diagnostic Dashboard"
            className="w-full h-full object-cover object-right lg:object-[82%_center] brightness-105 contrast-105 saturate-[1.05]"
          />
          {/* Dedicated text-readability scrim on left; 100% bright & clear on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/65 via-50% to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 text-xs md:text-sm text-slate-400 font-medium">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li className="text-slate-600">/</li>
              <li><Link to="/advisory-managed-services" className="hover:text-blue-400 transition-colors">Advisory &amp; Managed Services</Link></li>
              <li className="text-slate-600">/</li>
              <li className="text-blue-400 font-semibold" aria-current="page">SAP Assessment</li>
            </ol>
          </nav>

          <div className="max-w-3xl space-y-5 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-bold tracking-wider uppercase backdrop-blur-md">
              <Search className="w-3.5 h-3.5 text-blue-400" />
              <span>LANDSCAPE DIAGNOSTIC AUDIT &bull; TECHNICAL HEALTH SCAN</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              SAP <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                Assessment
              </span>
            </h1>

            <p className="text-xl sm:text-2xl font-bold text-slate-200 leading-snug">
              Understand Your SAP Landscape. Identify Opportunities. Plan With Confidence.
            </p>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              Gain a clear view of your SAP environment through structured assessment of systems, processes, applications, integrations, data and technical dependencies.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={() => onOpenContact && onOpenContact('SAP Landscape Assessment')}
                className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>Request SAP Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#landscape-discovery"
                className="px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-base transition-all flex items-center gap-2 shadow-sm backdrop-blur-sm"
              >
                <span>Explore Assessment Scope</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Sticky Service Navigation */}
      <AdvisoryServiceNav currentServiceId="sap-assessment" />

      {/* =========================================================================
          SECTION 1: SAP LANDSCAPE DISCOVERY
          ========================================================================= */}
      <section id="landscape-discovery" className="py-16 sm:py-20 border-b border-slate-200/80 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider block mb-2 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full w-fit">
              Landscape Discovery
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Comprehensive Discovery of Systems, Modules &amp; Dependencies
            </h2>
            <p className="text-slate-600 text-base mt-2 font-sans">
              Understand systems, environments, modules, applications and dependencies across your SAP estate. We establish complete visibility into system versions, database sizing, patch levels, and integration points.
            </p>
          </div>

          {/* 4 Clean Landscape Discovery Domain Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {discoveryPillars.map((pillar, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 mb-3">
                    <pillar.icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-blue-700 uppercase block mb-1">
                    {pillar.scope}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans mb-3">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 space-y-2">
                  <span className="text-[11px] font-mono font-bold text-slate-500 uppercase block">
                    Assessment Scope:
                  </span>
                  {pillar.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2: BUSINESS PROCESS ASSESSMENT
          ========================================================================= */}
      <section className="py-16 sm:py-20 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider block mb-2 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full w-fit">
              Business Process Assessment
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Analyze Business Processes, Process Efficiency &amp; Bottlenecks
            </h2>
            <p className="text-slate-600 text-base mt-2 font-sans">
              Analyze business processes, process efficiency, bottlenecks and improvement opportunities across Order-to-Cash, Procure-to-Pay, and Record-to-Report transactional flows.
            </p>
          </div>

          {/* IMAGE 2: Business Process Assessment & Mining Visual */}
          <div className="mb-8 rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-white">
            <img
              src="/images/assessment/sap-assessment-process.jpg"
              alt="Enterprise Business Process Assessment & Mining: SAP ERP Flows"
              className="w-full h-auto object-cover"
            />
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: APPLICATION PORTFOLIO & WORKFLOW REVIEW
          ========================================================================= */}
      <section className="py-16 sm:py-20 border-b border-slate-200/80 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider block mb-2 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full w-fit">
              Application Portfolio &amp; Scope Review
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Review Application Modules, Workflow Fitment &amp; Process Streamlining
            </h2>
            <p className="text-slate-600 text-base mt-2 font-sans">
              Comprehensive review of business application portfolios, functional module utilization, workflow streamlining, and alignment with modern standard SAP best practices to reduce operational complexity.
            </p>
          </div>

          {/* IMAGE 3: Enterprise Application Portfolio Review */}
          <div className="mb-8 rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-white">
            <img
              src="/images/assessment/sap-assessment-code.jpg"
              alt="Enterprise Application Portfolio Rationalization Review"
              className="w-full h-auto object-cover"
            />
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: INTEGRATION & INTERFACE ASSESSMENT
          ========================================================================= */}
      <section className="py-16 sm:py-20 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider block mb-2 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full w-fit">
              Integration &amp; Interface Assessment
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Analyze Interfaces, APIs, Middleware &amp; System Connectivity
            </h2>
            <p className="text-slate-600 text-base mt-2 font-sans">
              Analyze interfaces, APIs, middleware, system connectivity and integration dependencies. We inventory RFCs, IDocs, web services, direct database links, and middleware topologies to uncover security vulnerabilities and modernize communication protocols.
            </p>
          </div>

          {/* IMAGE 4: Enterprise SAP Integration Assessment Diagram */}
          <div className="mb-12 rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-white">
            <img
              src="/images/assessment/sap-assessment-integration.jpg"
              alt="Enterprise SAP Integration Assessment Diagram"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 overflow-hidden shadow-sm">
            <div className="divide-y divide-slate-200">
              {integrationProtocols.map((proto, idx) => (
                <div key={idx} className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white transition-colors">
                  <div className="md:w-1/3">
                    <span className="text-xs font-mono text-blue-600 font-bold block mb-1">
                      {proto.instances} Active Endpoints
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      {proto.protocol}
                    </h3>
                  </div>

                  <div className="md:w-1/4">
                    <span className="text-[11px] font-mono text-slate-500 block mb-1">S/4 COMPATIBILITY</span>
                    <span className="text-xs font-semibold text-slate-800">{proto.s4Compatible}</span>
                  </div>

                  <div className="md:w-1/3">
                    <span className="text-[11px] font-mono text-slate-500 block mb-1">MODERNIZATION ROADMAP</span>
                    <span className="text-xs text-blue-600 font-mono font-medium">{proto.targetPath}</span>
                  </div>

                  <div>
                    <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border ${proto.risk === 'Critical' ? 'bg-rose-50 text-rose-700 border-rose-200' :
                        proto.risk === 'High' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                          proto.risk === 'Medium' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                            'bg-emerald-50 text-emerald-700 border-emerald-200'
                      }`}>
                      {proto.risk} Risk
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: DATA QUALITY & INFRASTRUCTURE ASSESSMENT
          ========================================================================= */}
      <section className="py-16 sm:py-20 border-b border-slate-200/80 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider block mb-2 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full w-fit">
              Data Quality &amp; Infrastructure Assessment
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Review Data Quality, Technology Stack, Databases &amp; Infrastructure
            </h2>
            <p className="text-slate-600 text-base mt-2 font-sans">
              Review data quality, technology stack, databases, infrastructure and technical dependencies. We profile master data duplication, historical transaction data archiving potential, and in-memory sizing requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {dataAuditMetrics.map((data, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
                <span className="text-xs font-mono font-bold text-blue-600 block">
                  Data Domain: {data.entity}
                </span>
                <h3 className="text-base font-bold text-slate-900">
                  {data.entity}
                </h3>
                <div className="pt-2 border-t border-slate-100 space-y-1.5 text-xs font-mono text-slate-700">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Record Volume:</span>
                    <span className="font-bold text-slate-900">{data.volume}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Duplicate Ratio:</span>
                    <span className="font-bold text-rose-600">{data.duplicateRate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Dormant Data:</span>
                    <span className="font-bold text-amber-600">{data.deadHistory}</span>
                  </div>
                  <div className="flex justify-between pt-1 border-t border-slate-100">
                    <span className="text-slate-500">Cleansing Path:</span>
                    <span className="font-bold text-emerald-600">{data.cleansingEffort}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: RISK & GAP ANALYSIS
          ========================================================================= */}
      <section className="py-16 sm:py-20 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider block mb-2 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full w-fit">
              Risk &amp; Gap Analysis
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Identify Functional Gaps, Technical Risks &amp; Compliance Concerns
            </h2>
            <p className="text-slate-600 text-base mt-2 font-sans">
              Identify functional gaps, technical risks, compliance concerns, performance issues and areas of improvement across your entire SAP ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* 2x2 Quadrant Selector */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              {[
                { id: 'critical', title: 'Critical Hotspots', desc: 'High Impact / High Likelihood', color: 'border-rose-300 text-rose-700' },
                { id: 'strategic', title: 'Strategic Risks', desc: 'High Impact / Low Likelihood', color: 'border-amber-300 text-amber-700' },
                { id: 'operational', title: 'Operational Friction', desc: 'Low Impact / High Likelihood', color: 'border-blue-300 text-blue-700' },
                { id: 'hygiene', title: 'Technical Hygiene', desc: 'Low Impact / Low Likelihood', color: 'border-slate-300 text-slate-700' }
              ].map(quad => (
                <div
                  key={quad.id}
                  onClick={() => setActiveRiskQuadrant(quad.id as any)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${activeRiskQuadrant === quad.id
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                      : 'bg-slate-50 border-slate-200 hover:border-blue-400 text-slate-700'
                    }`}
                >
                  <div className="text-xs font-bold font-mono mb-1">{quad.title}</div>
                  <div className={`text-[10px] ${activeRiskQuadrant === quad.id ? 'text-white/80' : 'text-slate-500'}`}>
                    {quad.desc}
                  </div>
                </div>
              ))}
            </div>

            {/* Selected Quadrant Detailed Findings */}
            <div className="lg:col-span-7">
              <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <span className={`text-xs font-mono font-bold px-3 py-1 rounded-md border ${riskQuadrants[activeRiskQuadrant].badgeColor}`}>
                    {riskQuadrants[activeRiskQuadrant].badge}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">
                    {riskQuadrants[activeRiskQuadrant].items.length} Vulnerabilities Flagged
                  </span>
                </div>

                <div className="space-y-3">
                  {riskQuadrants[activeRiskQuadrant].items.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1.5 shadow-xs">
                      <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />
                        <span>{item.title}</span>
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed pl-6 font-sans">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: ASSESSMENT FINDINGS & RECOMMENDATIONS
          ========================================================================= */}
      <section className="py-16 sm:py-20 border-b border-slate-200/80 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider block mb-2 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full w-fit">
              Actionable Recommendations &amp; Roadmap
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Assessment Findings, Priorities &amp; Actionable Improvement Roadmap
            </h2>
            <p className="text-slate-600 text-base mt-2 font-sans">
              Present findings, priorities, recommendations and an actionable improvement roadmap. We structure results into prioritized execution waves to resolve immediate risks and prepare your systems for future modernization.
            </p>
          </div>

          {/* IMAGE 5: SAP Assessment Findings & Actionable Recommendations Roadmap */}
          <div className="mb-8 rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-white">
            <img
              src="/images/assessment/sap-assessment-recommendations.jpg"
              alt="SAP Assessment Findings & Actionable Recommendations Roadmap"
              className="w-full h-auto object-cover"
            />
          </div>

        </div>
      </section>

      {/* Crosslink Suite Navigation */}
      <AdvisorySuiteFooterCrosslinks activeServiceId="sap-assessment" />

      {/* Final Call to Action */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-slate-100 border-t border-slate-200 text-center text-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest block">
            CONFIDENTIAL &bull; NON-INVASIVE &bull; READ-ONLY SCANS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Schedule Your Comprehensive SAP Landscape Assessment
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-sans">
            Get an objective, data-backed diagnostic audit of your SAP systems, application footprint, and migration readiness in under 3 weeks.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onOpenContact && onOpenContact('SAP Landscape Assessment')}
              className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base shadow-xl shadow-blue-600/20 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Book an Assessment Workshop</span>
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

export default SapAssessmentPage;
