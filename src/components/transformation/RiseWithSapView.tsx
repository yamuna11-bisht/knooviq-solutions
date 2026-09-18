import React, { useState } from 'react';
import {
  Award,
  Cloud,
  Server,
  ShieldCheck,
  Workflow,
  CheckCircle2,
  XCircle,
  TrendingUp,
  Layers,
  Database,
  ArrowRight,
  HelpCircle,
  ChevronDown,
  Building2,
  Clock,
  Settings,
  PhoneCall,
  FileText,
  Target,
  BarChart3,
  Network,
  Cpu,
  RefreshCw,
  Boxes,
  Lock,
  Globe2,
  Gauge,
  Sparkles,
  Zap,
  FolderGit2,
  Check,
  Minus,
  Sliders,
  Maximize2
} from 'lucide-react';

interface RiseWithSapViewProps {
  onOpenContact: (subject: string) => void;
}

export const RiseWithSapView: React.FC<RiseWithSapViewProps> = ({ onOpenContact }) => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [activeBundleTab, setActiveBundleTab] = useState<number>(0);
  const [activePathway, setActivePathway] = useState<number>(0);
  const [isArchDiagramZoomed, setIsArchDiagramZoomed] = useState<boolean>(false);

  // 5 Core Enablers of RISE with SAP Bundle
  const riseBundleComponents = [
    {
      id: 'cloud-erp',
      badge: 'CORE TRANSACTION ENGINE',
      title: 'SAP S/4HANA Cloud Private Edition',
      subtitle: 'The full breadth of enterprise S/4HANA capabilities tailored for your specific industry requirements.',
      icon: <Cpu className="w-5 h-5 text-[#00A3E0]" />,
      highlights: [
        'Universal Journal unifying Financial Accounting (FI) and Controlling (CO) into a single in-memory truth ledger',
        'Sub-second analytical queries and live operational reporting powered by SAP HANA in-memory architecture',
        'Modern SAP Fiori user experience accessible on desktop, tablet, and mobile with role-based personalization',
        'Built-in support for deep enterprise customizations with continuous Clean Core compliance governance'
      ],
      tag: 'Core Cloud ERP'
    },
    {
      id: 'hyperscalers',
      badge: 'ENTERPRISE MULTI-CLOUD',
      title: 'Hyperscaler Infrastructure (AWS, Azure, GCP)',
      subtitle: 'Dedicated single-tenant private cloud infrastructure backed by a binding 99.9% SAP availability SLA.',
      icon: <Cloud className="w-5 h-5 text-sky-400" />,
      highlights: [
        'Freedom of hyperscaler choice: Deploy on Microsoft Azure, Amazon Web Services (AWS), or Google Cloud Platform',
        'Automated enterprise disaster recovery, multi-region snapshot replication, and sub-15 minute RPO/RTO',
        'Turnkey cloud operations managed directly by SAP: operating system administration, firmware, and database patching',
        'Single consolidated SLA covering infrastructure availability, uptime, and database layer support'
      ],
      tag: 'Hyperscaler Infra'
    },
    {
      id: 'signavio',
      badge: 'PROCESS INTELLIGENCE',
      title: 'Business Process Intelligence (SAP Signavio)',
      subtitle: 'Data-driven process discovery, simulation, and bottleneck diagnostics across all enterprise value streams.',
      icon: <Gauge className="w-5 h-5 text-emerald-400" />,
      highlights: [
        'Automated transactional log mining across Order-to-Cash and Procure-to-Pay to identify process friction and rework loops',
        'Comparative benchmarking against industry peer performance metrics to expose operational value leaks',
        'Live process simulation to stress-test organizational workflow adjustments before technical deployment',
        'Integrated collaboration hub connecting business process stakeholders with technical implementation leads'
      ],
      tag: 'Process Mining'
    },
    {
      id: 'btp-credits',
      badge: 'INNOVATION EXTENSIBILITY',
      title: 'SAP Business Technology Platform (BTP) Credits',
      subtitle: 'Pre-allocated Cloud Platform Enterprise Agreement (CPEA) credits to build and run side-by-side apps.',
      icon: <Layers className="w-5 h-5 text-purple-400" />,
      highlights: [
        'Flexible cloud credits allocated upfront to consume any SAP BTP service dynamically as business priorities evolve',
        'SAP Integration Suite: Hundreds of pre-built connectors linking S/4HANA to banks, government portals, and CRMs',
        'SAP Build: Low-code / no-code application development for rapid line-of-business custom forms and workflows',
        'Enforces Clean Core architecture by decoupling custom ABAP business logic into external microservices'
      ],
      tag: 'BTP Innovation'
    },
    {
      id: 'business-network',
      badge: 'SUPPLY CHAIN COLLABORATION',
      title: 'SAP Business Network Starter Pack',
      subtitle: 'Seamless digital collaboration with suppliers, logistics carriers, and asset equipment manufacturers.',
      icon: <Network className="w-5 h-5 text-amber-400" />,
      highlights: [
        'SAP Ariba Network: Digital PO exchange, automated e-invoicing, order confirmations, and supplier onboarding',
        'Logistics Business Network: Real-time freight tracking, carrier tender bidding, and milestone tracking',
        'Asset Intelligence Network: Centralized digital twins, maintenance schedules, and OEM documentation',
        'Dramatically reduces supplier disputes, manual expediting phone calls, and invoice discrepancies'
      ],
      tag: 'Business Network'
    }
  ];

  // 3 Cloud Migration Pathways
  const migrationPathways = [
    {
      title: 'System Conversion (Brownfield)',
      badge: 'RAPID VALUE & CONTINUITY',
      tagline: 'Preserve existing business logic, configurations, and historical transactional data while modernizing the core.',
      idealFor: 'Enterprises with proven ERP configurations, mature operating workflows, and strict historical audit requirements.',
      duration: '3 to 6 Months',
      strengths: [
        '1-to-1 database conversion directly from ECC 6.0 to S/4HANA HANA in-memory DB',
        'Preservation of complete historical accounting, sales, and supply chain audit trails',
        'Minimal retraining required for operational staff since familiar processes remain intact',
        'High-fidelity dual-run rehearsals with near-zero business disruption during weekend cutover'
      ],
      accent: 'border-sky-500/30 bg-sky-500/5'
    },
    {
      title: 'New Implementation (Greenfield)',
      badge: 'COMPLETE CLEAN SLATE',
      tagline: 'Start fresh with standard SAP Best Practices, eliminate decades of custom code technical debt, and enforce Clean Core.',
      idealFor: 'Organizations burdened by legacy customization sprawl, business model changes, or multi-ERP consolidation.',
      duration: '4 to 8 Months',
      strengths: [
        'Immediate 100% Clean Core compliance with zero legacy technical debt or obsolete ABAP',
        'Adoption of pre-configured SAP Best Practice industry processes straight out of the box',
        'Accelerated Fit-to-Standard workshops compressing discovery and scoping schedules',
        'Continuous automatic release upgrades without regression testing or custom code maintenance'
      ],
      accent: 'border-[#00A3E0]/40 bg-[#00A3E0]/10'
    },
    {
      title: 'Selective Data Transition (Hybrid / Bluefield)',
      badge: 'SURGICAL PRECISION',
      tagline: 'Carve out selected organizational units, clean historical data selectively, and redesign specific processes.',
      idealFor: 'Large conglomerates undergoing carve-outs, mergers, acquisitions, or multi-system consolidations.',
      duration: '5 to 9 Months',
      strengths: [
        'Migrate only active company codes, master data, and open items while archiving dormant records',
        'Re-structure chart of accounts, profit centers, and plant hierarchies during transition',
        'Combine the speed of Brownfield data retention with the cleanliness of Greenfield standards',
        'Customized cutover sequencing allowing multi-country or multi-business-unit phased rollouts'
      ],
      accent: 'border-purple-500/30 bg-purple-500/5'
    }
  ];

  // Comparison Matrix: RISE vs Traditional On-Prem vs Third-Party Hosting
  const comparisonMatrix = [
    {
      dimension: 'Commercial Model',
      rise: '1 Unified Subscription Contract (Software + Cloud + Ops)',
      onPrem: 'Capex software license + separate hardware maintenance + separate support',
      iaas: 'Software license + separate hyperscaler hosting contract + separate MSP'
    },
    {
      dimension: 'Infrastructure & Hardware',
      rise: 'Managed directly by SAP on AWS / Azure / GCP',
      onPrem: 'Client owns, refreshes, and manages data center hardware',
      iaas: 'Managed by third-party hosting partner or internal DevOps team'
    },
    {
      dimension: 'Service Level Agreement (SLA)',
      rise: 'Single 99.9% Uptime SLA directly from SAP',
      onPrem: 'No unified SLA; internal IT bears entire risk',
      iaas: 'Fragmented SLAs between hosting provider, cloud, and software'
    },
    {
      dimension: 'System Operations & Patching',
      rise: 'SAP manages OS, DB, backup, security patches, and DR',
      onPrem: 'Client IT must manually test and deploy security patches',
      iaas: 'Client IT or third-party MSP must orchestrate patch maintenance'
    },
    {
      dimension: 'Process Intelligence Included',
      rise: 'SAP Signavio process mining and benchmarking included',
      onPrem: 'Requires separate expensive software licensing',
      iaas: 'Requires separate expensive software licensing'
    },
    {
      dimension: 'Clean Core & AI Upgrades',
      rise: 'Continuous bi-annual innovation & embedded Joule AI',
      onPrem: 'Custom code lock-in; multi-year expensive upgrade projects',
      iaas: 'Custom code lock-in; manual upgrade testing'
    }
  ];

  return (
    <div className="space-y-20">

      {/* =========================================================================
          EXECUTIVE VALUE STRIP (The 3 Core Guarantees of RISE with SAP)
          ========================================================================= */}
      <section className="bg-white dark:bg-[#0B1528] rounded-3xl border border-slate-200/80 dark:border-white/10 p-6 sm:p-8 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-100 dark:divide-white/10">
          
          <div className="flex items-center gap-4 pt-4 md:pt-0 first:pt-0">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 dark:bg-sky-500/10 text-[#00A3E0] flex items-center justify-center shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                COMMERCIAL SIMPLICITY
              </span>
              <h4 className="text-base font-extrabold text-[#0A1931] dark:text-white">
                One Single Contract
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Software, cloud infrastructure, and technical management under one predictable operational expense.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-4 md:pt-0 md:pl-6">
            <div className="w-12 h-12 rounded-2xl bg-cyan-50 dark:bg-cyan-500/10 text-cyan-500 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                MISSION-CRITICAL RESILIENCE
              </span>
              <h4 className="text-base font-extrabold text-[#0A1931] dark:text-white">
                99.9% Availability SLA
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Single-tenant dedicated infrastructure on AWS, Azure, or GCP backed directly by SAP.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-4 md:pt-0 md:pl-6">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                FINANCIAL PREDICTABILITY
              </span>
              <h4 className="text-base font-extrabold text-[#0A1931] dark:text-white">
                Up to 20% TCO Savings
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Zero hardware refresh cycles and eliminated multi-vendor maintenance contracts.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 1: THE ENTERPRISE COMPARISON MATRIX (RISE vs On-Prem vs Hosting)
          ========================================================================= */}
      <section className="space-y-6">
        <div>
          <div className="flex items-center gap-1.5 mb-2">
            <span className="h-0.5 w-6 bg-amber-400 rounded-full" />
            <span className="h-0.5 w-3 bg-[#00A3E0] rounded-full" />
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-[#00A3E0] bg-[#00A3E0]/10 border border-[#00A3E0]/20 mb-2">
                <Sliders className="w-3.5 h-3.5 text-[#00A3E0]" />
                <span>ARCHITECTURAL & COMMERCIAL COMPARISON</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1931] dark:text-white tracking-tight">
                RISE with SAP vs. Traditional On-Premise vs. Third-Party Hosting
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md">
              Understand why enterprises worldwide are replacing fragmented hosting arrangements with a single unified cloud offering.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-[#0B1528] rounded-3xl border border-slate-200/80 dark:border-white/10 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02]">
                  <th className="p-4 sm:p-5 text-xs font-mono font-bold uppercase text-slate-500 dark:text-slate-400 w-1/4">
                    Transformation Dimension
                  </th>
                  <th className="p-4 sm:p-5 text-xs font-mono font-bold uppercase text-[#00A3E0] bg-sky-50/50 dark:bg-sky-500/5 w-1/3 border-x border-sky-100 dark:border-sky-500/10">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#00A3E0]" />
                      <span>RISE with SAP (Recommended)</span>
                    </div>
                  </th>
                  <th className="p-4 sm:p-5 text-xs font-mono font-bold uppercase text-slate-600 dark:text-slate-400 w-1/5">
                    Traditional On-Premise
                  </th>
                  <th className="p-4 sm:p-5 text-xs font-mono font-bold uppercase text-slate-600 dark:text-slate-400 w-1/5">
                    Third-Party IaaS Hosting
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-white/5 text-xs sm:text-sm">
                {comparisonMatrix.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70 dark:hover:bg-white/[0.01] transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white">
                      {row.dimension}
                    </td>
                    <td className="p-4 sm:p-5 bg-sky-50/30 dark:bg-sky-500/[0.02] border-x border-sky-100 dark:border-sky-500/10 text-slate-800 dark:text-slate-200">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                        <span className="font-semibold text-[#0A1931] dark:text-cyan-300">{row.rise}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-slate-500 dark:text-slate-400">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        <span>{row.onPrem}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-slate-500 dark:text-slate-400">
                      <div className="flex items-start gap-2">
                        <Minus className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        <span>{row.iaas}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: RISE WITH SAP CLOUD ARCHITECTURE BLUEPRINT
          ========================================================================= */}
      <section className="bg-white dark:bg-[#0B1528] rounded-3xl border border-slate-200/80 dark:border-white/10 p-8 sm:p-12 shadow-sm space-y-8">
        <div>
          <div className="flex items-center gap-1.5 mb-2">
            <span className="h-0.5 w-6 bg-amber-400 rounded-full" />
            <span className="h-0.5 w-3 bg-[#00A3E0] rounded-full" />
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 mb-2">
                <Cpu className="w-3.5 h-3.5" />
                <span>RISE WITH SAP ARCHITECTURAL BLUEPRINT</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1931] dark:text-white tracking-tight">
                RISE with SAP Multi-Cloud Architecture
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md">
              A multi-layered architectural model combining hyperscaler private cloud, SAP BTP extensibility, Signavio process intelligence, and S/4HANA digital core under a single contract.
            </p>
          </div>
        </div>

        {/* Architecture Showcase Visual with Clean Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Side: High-Resolution RISE with SAP Architecture Diagram */}
          <div className="lg:col-span-7 bg-slate-950 rounded-2xl p-4 sm:p-6 border border-slate-800 shadow-xl relative group overflow-hidden">
            <img
              src="/images/rise_sap_architecture.png"
              alt="RISE with SAP Architecture: Hyperscalers, SAP BTP, Signavio, and S/4HANA Cloud"
              className="w-full h-auto object-contain rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="pt-4 flex items-center justify-between border-t border-white/10 mt-3 text-[11px] font-mono text-slate-400">
              <span>RISE WITH SAP • HYPERSCALERS • BTP • SIGNAVIO</span>
              <span className="text-cyan-400 font-bold">Single Contract & 99.9% SLA</span>
            </div>
          </div>

          {/* Right Side: Architectural Tiers Breakdown */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/60 dark:border-white/5 space-y-1.5">
              <div className="flex items-center gap-2">
                <Cloud className="w-4 h-4 text-cyan-500 shrink-0" />
                <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">
                  Tier 1: Multi-Cloud Hyperscaler & Business Network
                </h4>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Dedicated private cloud on <strong>AWS, Microsoft Azure, or Google Cloud</strong> with automated DR and SAP-managed OS/DB patching, connected to <strong>SAP Business Network</strong> for seamless supplier and logistics collaboration.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/60 dark:border-white/5 space-y-1.5">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#00A3E0] shrink-0" />
                <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">
                  Tier 2: SAP BTP & Signavio Process Intelligence
                </h4>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Continuous process mining via <strong>SAP Signavio</strong> to eliminate operational bottlenecks, paired with <strong>SAP Business Technology Platform</strong> to build side-by-side apps and keep the core pristine.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/60 dark:border-white/5 space-y-1.5">
              <div className="flex items-center gap-2">
                <Server className="w-4 h-4 text-emerald-500 shrink-0" />
                <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">
                  Tier 3: SAP S/4HANA Cloud & Embedded Joule AI
                </h4>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Universal in-memory ledger running on high-performance infrastructure with sub-second analytics, real-time MRP, and embedded contextual <strong>Joule AI</strong> for autonomous routine decisions.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: WHAT'S IN THE RISE WITH SAP BUNDLE (Interactive Component Cockpit)
          ========================================================================= */}
      <section className="bg-gradient-to-br from-[#061224] via-[#091D3A] to-[#040D1A] rounded-3xl border border-cyan-500/20 p-8 sm:p-12 lg:p-14 shadow-2xl text-white space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 mb-2">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>THE ALL-IN-ONE BUNDLE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            What's in the Box: The 5 RISE with SAP Enablers
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mt-1">
            Click across the 5 integrated enablers to explore how RISE delivers end-to-end transformation as a unified service.
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
          {riseBundleComponents.map((comp, idx) => {
            const isActive = activeBundleTab === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveBundleTab(idx)}
                className={`p-3.5 rounded-xl text-left transition-all border cursor-pointer ${
                  isActive
                    ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-lg shadow-cyan-500/10'
                    : 'bg-white/[0.03] border-white/10 text-slate-300 hover:bg-white/[0.06]'
                }`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  {comp.icon}
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400">
                    PART 0{idx + 1}
                  </span>
                </div>
                <h4 className="text-xs font-bold leading-tight line-clamp-1">{comp.tag}</h4>
              </button>
            );
          })}
        </div>

        {/* Active Component Details Box */}
        <div className="p-7 sm:p-9 rounded-2xl bg-white/[0.04] border border-white/15 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-white/10">
            <div>
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider block">
                {riseBundleComponents[activeBundleTab].badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                {riseBundleComponents[activeBundleTab].title}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md sm:text-right">
              {riseBundleComponents[activeBundleTab].subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {riseBundleComponents[activeBundleTab].highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-200 leading-relaxed">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 flex justify-center">
          <button
            onClick={() => onOpenContact('RISE with SAP - Sizing and Pricing')}
            className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-[#040D1A] font-extrabold px-8 py-3.5 text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg shadow-cyan-500/25 cursor-pointer"
          >
            <span>Request RISE with SAP Sizing & Pricing</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: 3 CLOUD MIGRATION PATHWAYS (Interactive Pathway Advisor)
          ========================================================================= */}
      <section className="space-y-8">
        <div>
          <div className="flex items-center gap-1.5 mb-2">
            <span className="h-0.5 w-6 bg-amber-400 rounded-full" />
            <span className="h-0.5 w-3 bg-[#00A3E0] rounded-full" />
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-[#00A3E0] bg-[#00A3E0]/10 border border-[#00A3E0]/20 mb-2">
                <FolderGit2 className="w-3.5 h-3.5 text-[#00A3E0]" />
                <span>STRATEGIC MIGRATION BLUEPRINT</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1931] dark:text-white tracking-tight">
                Tailored Cloud Migration Pathways
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md">
              Select a migration strategy tailored to your legacy code footprint, organizational complexity, and timeline urgency.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {migrationPathways.map((path, idx) => (
            <div 
              key={idx} 
              className={`bg-white dark:bg-[#0B1528] rounded-2xl border border-slate-200/80 dark:border-white/10 p-7 sm:p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-all cursor-pointer ${
                activePathway === idx ? 'ring-2 ring-[#00A3E0] border-[#00A3E0]/50' : ''
              }`}
              onClick={() => setActivePathway(idx)}
            >
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-sky-50 dark:bg-sky-500/10 text-[#00A3E0]">
                  {path.badge}
                </span>
                <h3 className="text-xl font-black text-[#0A1931] dark:text-white mt-3 mb-1">
                  {path.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {path.tagline}
                </p>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/50 dark:border-white/5 mb-4">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">TYPICAL TIMELINE</span>
                  <span className="text-sm font-black text-[#0A1931] dark:text-white">{path.duration}</span>
                </div>

                <div className="space-y-2.5 pt-2">
                  {path.strengths.map((point, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-6 border-t border-slate-100 dark:border-white/5">
                <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  <strong className="text-slate-800 dark:text-slate-200">Best for:</strong> {path.idealFor}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: SAVIC ONE PIECE FLOW DELIVERY FRAMEWORK FOR RISE
          ========================================================================= */}
      <section className="bg-white dark:bg-[#0B1528] rounded-3xl border border-slate-200/80 dark:border-white/10 p-8 sm:p-12 shadow-sm space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 mb-2">
            <Workflow className="w-3.5 h-3.5" />
            <span>SAVIC PROPRIETARY DELIVERY METHODOLOGY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1931] dark:text-white tracking-tight">
            SAVIC One Piece Flow for RISE with SAP
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl mt-1">
            A battle-tested transformation framework engineered to de-risk cloud cutovers, eliminate operational downtime, and ensure Day-1 productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { step: '01', title: 'Readiness & Sizing', desc: 'SAP Readiness Check, Signavio process mining, ECC custom code audit, and hyperscaler sizing.' },
            { step: '02', title: 'Cloud Architecture', desc: 'Hyperscaler tenant design, private cloud network topology, BTP setup, and Clean Core boundary definition.' },
            { step: '03', title: 'Code Remediation', desc: 'ABAP Cloud refactoring, automated data cleansing, interface rewrites, and iterative test migration sprints.' },
            { step: '04', title: 'Dual-Run Cutover', desc: 'End-to-end rehearsal in pre-production, financial parallel reconciliation, and near-zero downtime live cutover.' },
            { step: '05', title: 'MAXCare AMS', desc: '24/7 SLA-driven hypercare, continuous Basis administration, quarterly release updates, and business value tracking.' }
          ].map((phase, idx) => (
            <div key={idx} className="relative p-5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/60 dark:border-white/5 flex flex-col justify-between">
              <div>
                <span className="text-2xl font-black text-[#00A3E0]/40 dark:text-cyan-400/30 block mb-2 font-mono">
                  {phase.step}
                </span>
                <h3 className="text-sm font-extrabold text-[#0A1931] dark:text-white mb-1.5 leading-snug">
                  {phase.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {phase.desc}
                </p>
              </div>
              <div className="pt-3 mt-4 border-t border-slate-200/50 dark:border-white/5 flex items-center justify-between text-[10px] font-mono font-semibold text-slate-400">
                <span>PHASE {phase.step}</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: REAL ENTERPRISE RISE CASE STUDIES (Proven Client Results)
          ========================================================================= */}
      <section className="space-y-8">
        <div>
          <div className="flex items-center gap-1.5 mb-2">
            <span className="h-0.5 w-6 bg-amber-400 rounded-full" />
            <span className="h-0.5 w-3 bg-[#00A3E0] rounded-full" />
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-amber-500 bg-amber-500/10 border border-amber-500/20 mb-2">
                <Award className="w-3.5 h-3.5" />
                <span>VERIFIED TRANSFORMATION RESULTS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1931] dark:text-white tracking-tight">
                Real Results from Leading Enterprises
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md">
              Verified transformation milestones achieved across diversified industries with RISE with SAP.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-[#0B1528] rounded-2xl border border-slate-200/80 dark:border-white/10 p-7 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-sky-50 dark:bg-sky-500/10 text-[#00A3E0]">
                CONSUMER GOODS & FMCG
              </span>
              <h3 className="text-xl font-black text-[#0A1931] dark:text-white mt-3 mb-1">
                Apex Consumer Brands
              </h3>
              <p className="text-xs font-semibold text-[#00A3E0] mb-3">
                RISE with SAP on AWS Cloud
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Migrated from legacy on-premise ECC to SAP S/4HANA Private Cloud Edition on AWS, consolidating 4 disparate manufacturing entities into a single universal ledger.
              </p>
              <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200/60 dark:border-emerald-500/20 mb-4">
                <span className="text-[10px] uppercase font-bold text-emerald-600 dark:text-emerald-400 block">KEY MILESTONE</span>
                <span className="text-base font-black text-emerald-700 dark:text-emerald-300">22% 5-Year TCO Reduction</span>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-white/10">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400">Zero unplanned downtime cutover</span>
            </div>
          </div>

          <div className="bg-white dark:bg-[#0B1528] rounded-2xl border border-slate-200/80 dark:border-white/10 p-7 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400">
                AUTOMOTIVE TIER-1 MANUFACTURING
              </span>
              <h3 className="text-xl font-black text-[#0A1931] dark:text-white mt-3 mb-1">
                Precision Auto Dynamics
              </h3>
              <p className="text-xs font-semibold text-purple-500 mb-3">
                RISE with SAP on Microsoft Azure
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Converted ECC 6.0 to S/4HANA Cloud with Clean Core ABAP remediation, integrating shop-floor MES systems via SAP BTP and automating supplier ASN delivery notices.
              </p>
              <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200/60 dark:border-emerald-500/20 mb-4">
                <span className="text-[10px] uppercase font-bold text-emerald-600 dark:text-emerald-400 block">KEY MILESTONE</span>
                <span className="text-base font-black text-emerald-700 dark:text-emerald-300">45% Faster Month-End Close</span>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-white/10">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400">100% Clean Core compliant</span>
            </div>
          </div>

          <div className="bg-white dark:bg-[#0B1528] rounded-2xl border border-slate-200/80 dark:border-white/10 p-7 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400">
                CHEMICALS & PROCESS ENGINEERING
              </span>
              <h3 className="text-xl font-black text-[#0A1931] dark:text-white mt-3 mb-1">
                Vanguard Speciality Chemicals
              </h3>
              <p className="text-xs font-semibold text-amber-500 mb-3">
                Selective Data Transition to RISE
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Executed a selective carve-out migration preserving 10 years of regulatory batch genealogy while streamlining the general ledger and deploying automated statutory e-invoicing.
              </p>
              <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200/60 dark:border-emerald-500/20 mb-4">
                <span className="text-[10px] uppercase font-bold text-emerald-600 dark:text-emerald-400 block">KEY MILESTONE</span>
                <span className="text-base font-black text-emerald-700 dark:text-emerald-300">100% Audit & Batch Compliance</span>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-white/10">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400">Near-zero cutover variance</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: START YOUR RISE JOURNEY TODAY & ADVISORY FAQS
          ========================================================================= */}
      <section className="bg-gradient-to-br from-[#061224] via-[#091D3A] to-[#040D1A] rounded-3xl border border-cyan-500/20 p-8 sm:p-12 lg:p-14 shadow-2xl text-white space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 mb-2">
            <Target className="w-3.5 h-3.5 text-cyan-400" />
            <span>START YOUR CLOUD JOURNEY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Start Your RISE with SAP Journey Today
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mt-1">
            Evaluate your cloud readiness and discover the optimal roadmap to SAP S/4HANA Cloud.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col justify-between">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4">
              <PhoneCall className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Talk to a RISE Expert</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Engage directly with an SAP enterprise cloud architect to evaluate your technical and commercial readiness.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col justify-between">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Readiness & TCO Audit</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Run an automated SAP Readiness Check to evaluate database sizing, custom code impact, and 5-year cloud TCO.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col justify-between">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Discovery Workshop</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              1-day executive working session to map business requirements, evaluate hyperscalers, and draft your migration roadmap.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col justify-between">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Capabilities Brief</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Download our comprehensive RISE with SAP transformation handbook, SLA frameworks, and case studies.
            </p>
          </div>
        </div>

        <div className="pt-2 flex justify-center">
          <button
            onClick={() => onOpenContact('RISE with SAP - Start Journey')}
            className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-[#040D1A] font-extrabold px-8 py-3.5 text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg shadow-cyan-500/25 cursor-pointer"
          >
            <span>Start Your RISE Transformation Today</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: FREQUENTLY ASKED QUESTIONS (Savic FAQ Accordion)
          ========================================================================= */}
      <section className="bg-white dark:bg-[#0B1528] rounded-3xl border border-slate-200/80 dark:border-white/10 p-8 sm:p-12 shadow-sm space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-[#00A3E0] bg-[#00A3E0]/10 border border-[#00A3E0]/20 mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>RISE WITH SAP ENTERPRISE FAQ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1931] dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl mt-1">
            Key architectural, commercial, and operational questions regarding RISE with SAP and cloud modernization.
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              q: 'What is the primary difference between RISE with SAP and GROW with SAP?',
              a: 'GROW with SAP is designed for mid-market and rapid-growth organizations adopting SAP S/4HANA Cloud Public Edition (multi-tenant SaaS) utilizing standardized, pre-configured best practices and rapid go-lives. RISE with SAP is designed for larger enterprises requiring SAP S/4HANA Cloud Private Edition on dedicated hyperscaler cloud infrastructure (AWS, Azure, GCP) with support for deep legacy custom code conversions, full IMG configurations, and specialized industry requirements.'
            },
            {
              q: 'What does "One Contract, One SLA" mean under RISE with SAP?',
              a: 'Under traditional on-premise deployments, you must manage separate contracts for software licenses, hyperscaler infrastructure, hardware hosting, OS administration, and application support. RISE with SAP consolidates all of these into a single subscription contract directly with SAP, governed by a unified 99.9% availability SLA covering infrastructure and technical operations.'
            },
            {
              q: 'Can our customized ABAP code from SAP ECC be migrated to RISE with SAP?',
              a: 'Yes. In SAP S/4HANA Cloud Private Edition under RISE, custom ABAP code can be remediated using the SAP Custom Code Migration tool and ABAP Cloud. Custom code that follows Clean Core principles is refactored onto the SAP Business Technology Platform (BTP), allowing your organization to retain essential business logic while keeping the digital core upgradeable.'
            },
            {
              q: 'Which hyperscaler should we choose for our RISE deployment?',
              a: 'RISE with SAP supports Microsoft Azure, Amazon Web Services (AWS), and Google Cloud Platform (GCP). The choice typically depends on your existing corporate cloud agreements, regional data center proximity, disaster recovery requirements, and existing enterprise toolchain integrations (such as Microsoft 365, Azure Active Directory, or AWS Data Lakes).'
            },
            {
              q: 'How does Knooviq accelerate the RISE with SAP migration timeline?',
              a: 'Using our SAVIC One Piece Flow delivery framework and pre-configured industry accelerators, we compress typical RISE migration timelines by up to 40%. We execute automated readiness audits, automated data cleansing, parallel financial reconciliations, and multiple rehearsal cutovers to guarantee a secure, near-zero downtime transition.'
            }
          ].map((faq, idx) => {
            const isOpen = expandedFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/70 dark:border-white/10 overflow-hidden transition-all bg-slate-50/50 dark:bg-white/[0.02]"
              >
                <button
                  onClick={() => setExpandedFaq(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 transition-colors hover:bg-slate-100/50 dark:hover:bg-white/[0.04] cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-[#0A1931] dark:text-white">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#00A3E0]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/40 dark:border-white/5">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};
export default RiseWithSapView;
