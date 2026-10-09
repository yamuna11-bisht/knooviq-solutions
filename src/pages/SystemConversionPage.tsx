import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Server,
  RefreshCw,
  Database,
  ShieldCheck,
  Zap,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Activity,
  Layers,
  Check,
  Workflow,
  Cpu,
  BarChart3,
  Lock,
  Boxes,
  HelpCircle,
  ChevronDown,
  Gauge,
  Sliders,
  Sparkles,
  ArrowUpRight,
  FolderSync,
  FileCheck2,
  Network,
  Terminal,
  Layers3,
  FileText,
  TrendingUp,
  CheckCheck,
  Play,
  Maximize2,
  X
} from 'lucide-react';

interface SystemConversionPageProps {
  onOpenContact?: (topic?: string) => void;
}

export const SystemConversionPage: React.FC<SystemConversionPageProps> = ({ onOpenContact }) => {
  useEffect(() => {
    document.title = 'SAP S/4HANA System Conversion | In-Place 1-Step Modernization Factory | KNOOVIQ';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const [isHeroFullScreen, setIsHeroFullScreen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsHeroFullScreen(false);
      }
    };
    if (isHeroFullScreen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isHeroFullScreen]);

  // State for Section 1 (Hero): Technical parameter tab
  const [activeHeroTab, setActiveHeroTab] = useState<'architecture' | 'downtime' | 'cvi' | 'finance'>('architecture');

  // State for Section 3 (Downtime Timeline): Active timeline phase
  const [activeTimelineStep, setActiveTimelineStep] = useState<number>(1);

  // State for Section 4 (Core Workstreams): Active pillar
  const [activePillarTab, setActivePillarTab] = useState<number>(0);

  // State for Section 5 (5-Stage Methodology): Active stage
  const [activeStage, setActiveStage] = useState<number>(0);

  // State for Section 6 (Tooling): Active tool inspection
  const [activeToolIndex, setActiveToolIndex] = useState<number>(0);

  // State for Section 7: FAQ Accordion
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Hero interactive parameter definitions
  const heroTabs = [
    {
      id: 'architecture',
      label: '1-Step SUM DMO Engine',
      icon: Server,
      badge: 'COMBINED SHIFT',
      content: {
        title: 'Single-Pass Database & Application Transformation',
        description: 'Simultaneously upgrades SAP ABAP software version and migrates the database from AnyDB (Oracle, SQL Server, IBM DB2) to SAP HANA 2.0 in a single coordinated pipeline execution.',
        stats: [
          { label: 'Execution Mode', val: '1-Step Combined' },
          { label: 'Source AnyDB', val: 'Oracle / SQL / DB2' },
          { label: 'Target Platform', val: 'SAP S/4HANA 2023' },
          { label: 'Config Retained', val: '100% Preserved' }
        ]
      }
    },
    {
      id: 'downtime',
      label: 'Downtime-Optimized Cutover',
      icon: Clock,
      badge: '< 18H OUTAGE',
      content: {
        title: 'Shadow System & Table Replication During Operations',
        description: 'Large financial and logistical tables are replicated and converted in shadow mode while regular production business continues on Friday. Production downtime is compressed to under 18 hours over the weekend.',
        stats: [
          { label: 'Weekend Downtime', val: '< 18 Hours' },
          { label: 'Shadow Replication', val: 'In-Flight Active' },
          { label: 'Business Impact', val: 'Zero Monday Outage' },
          { label: 'Cutover Runbook', val: 'Minute-by-Minute' }
        ]
      }
    },
    {
      id: 'cvi',
      label: 'CVI Business Partner Sync',
      icon: FolderSync,
      badge: 'ZERO DATA LOSS',
      content: {
        title: 'Automated Customer Vendor Integration (CVI)',
        description: 'Legacy customer (KNA1) and vendor (LFA1) master records are systematically harmonized and synchronized into unified Business Partners (BUT000) prior to cutover with automated error correction.',
        stats: [
          { label: 'KNA1 Customers', val: 'Auto-Harmonized' },
          { label: 'LFA1 Vendors', val: 'Unified into BP' },
          { label: 'Validation Tool', val: 'CVI_COCKPIT' },
          { label: 'Data Accuracy', val: '100% Verified' }
        ]
      }
    },
    {
      id: 'finance',
      label: 'ACDOCA Universal Journal',
      icon: FileCheck2,
      badge: 'FINANCIAL INTEGRITY',
      content: {
        title: 'Multi-Ledger Consolidation into Universal Journal',
        description: 'Legacy FI (BSEG, BSIS, BSAS) and CO (COEP, COEJ) tables merge into the unified Universal Journal (ACDOCA). Pre-cutover FIN_CORR runs guarantee exact balance matching to the last cent.',
        stats: [
          { label: 'Balance Match', val: '100% Reconciled' },
          { label: 'Legacy Tables', val: 'BSEG ➔ ACDOCA' },
          { label: 'Asset Accounting', val: 'New FI-AA Sync' },
          { label: 'Closing Speed', val: '4× Faster Month-End' }
        ]
      }
    }
  ];

  // Section 3: Cutover Timeline Steps
  const cutoverPhases = [
    {
      time: 'Friday 18:00 – Sunday 02:00',
      title: 'Phase A: Shadow System Replication & Pre-Cutover Sync',
      tag: 'OPERATIONS LIVE',
      tagColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      description: 'Business continues live on Friday afternoon. Software Update Manager runs shadow instance table conversions in background without interrupting order booking, plant shipping, or customer invoicing.',
      highlights: [
        'Near-Zero Downtime Technology (NZDT) active',
        'Direct RAM memory pipes pre-load unchanged tables',
        'Live delta queues capture in-flight business changes',
        'Zero performance impact on active ECC user base'
      ]
    },
    {
      time: 'Sunday 02:00 – Sunday 18:00',
      title: 'Phase B: 16-Hour Offline Cutover & Database Migration',
      tag: 'OFFLINE BLACKOUT (<18H)',
      tagColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
      description: 'SAP ECC enters scheduled offline window. Final delta replay captures remaining transaction buffers. Direct memory pipes push tables into SAP HANA 2.0 column store, followed by Universal Journal table fusion.',
      highlights: [
        'Final delta queue synchronization & database shutdown',
        'High-speed R3load worker threads executing at 4.8 GB/s',
        'ACDOCA table conversion and New Asset Accounting activation',
        'Automated ABAP Quick Fix transports release'
      ]
    },
    {
      time: 'Sunday 18:00 – Monday 02:00',
      title: 'Phase C: Automated Financial Balancing & Quality Gates',
      tag: 'VERIFICATION ACTIVE',
      tagColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
      description: 'Automated FIN_CORR scripts verify trial balances, general ledger lines, open items, and customer balances down to the exact penny against pre-cutover baseline extracts.',
      highlights: [
        '100% trial balance match verified against ECC baseline',
        'Customer/Vendor subledger reconciliation completed',
        'Material Ledger (ML) inventory balance sign-off',
        'Post-conversion technical checks & index validation'
      ]
    },
    {
      time: 'Monday 02:00 – Monday 06:00',
      title: 'Phase D: Final Ramp-Up & Seamless Business Go-Live',
      tag: 'GO-LIVE SUCCESS',
      tagColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      description: 'SAP S/4HANA production instance opened for global logistics and business users ahead of schedule. Factory shipping gates and customer orders resume with zero Monday disruption.',
      highlights: [
        'Background job scheduler re-enabled',
        'SAP Fiori Launchpad and SAP GUI user access opened',
        'Global warehouse scanning & EDI channels active',
        '24/7 dedicated hypercare war room operational'
      ]
    }
  ];

  // Section 4: 4 Core Conversion Pillars
  const conversionPillars = [
    {
      id: 'cvi',
      number: '01',
      title: 'Customer Vendor Integration (CVI)',
      badge: 'MANDATORY PRE-REQUISITE',
      icon: FolderSync,
      lead: 'In S/4HANA, legacy customer (KNA1) and vendor (LFA1) tables are superseded by the unified Business Partner (BP / BUT000) data model.',
      problem: 'Missing tax numbers, overlapping numbering ranges, duplicate addresses, and unlinked bank accounts abort the conversion engine during the database commit phase.',
      solution: 'Knooviq CVI Automation Engine executes pre-conversion cleansing in ECC. We auto-resolve numbering collisions, populate missing mandatory fields, and verify 100% synchronization into BUT000 before SUM DMO is initiated.',
      kpis: [
        { label: 'BP Sync Accuracy', value: '100% Verified' },
        { label: 'Collision Resolution', value: 'Automated' },
        { label: 'Tool Utilized', value: 'CVI_COCKPIT' }
      ]
    },
    {
      id: 'abap',
      number: '02',
      title: 'ABAP Test Cockpit & Clean Core',
      badge: 'AUTOMATED CODE QUICK FIXES',
      icon: Cpu,
      lead: 'Custom Z-programs, user exits, and reports built for ECC often reference obsolete cluster/pool tables (KONV, BSEG) or non-HANA queries.',
      problem: 'Unoptimized SELECT * queries without ORDER BY and hardcoded dictionary structures cause runtime dumps or severe query bottlenecks on SAP HANA.',
      solution: 'We run the SAP Custom Code Migration App with ABAP Test Cockpit (ATC) to apply automated Quick Fixes, remediating 85%+ of syntax deviations and converting custom code to modern Clean Core CDS views.',
      kpis: [
        { label: 'Automated Quick Fixes', value: '85%+ Remediated' },
        { label: 'Clean Core Alignment', value: 'Tier 1 Certified' },
        { label: 'Custom Code Sizing', value: '-40% Obsolete Purged' }
      ]
    },
    {
      id: 'finance',
      number: '03',
      title: 'ACDOCA Universal Journal Consolidation',
      badge: 'FINANCIAL DATA INTEGRITY',
      icon: FileCheck2,
      lead: 'S/4HANA eliminates redundant financial index tables, consolidating General Ledger (BSEG), Cost Accounting (COEP), and Asset Accounting into ACDOCA.',
      problem: 'Historical ledger imbalances, unreconciled clearing accounts, or inconsistent depreciation keys from legacy years will halt the financial conversion runbook.',
      solution: 'Our automated FIN_CORR pre-audit scripts execute in ECC months prior to cutover to identify and resolve historical discrepancies, guaranteeing 100% automated balance sign-off during weekend cutover.',
      kpis: [
        { label: 'Balance Reconciliation', value: 'To the Cent' },
        { label: 'Historical Ledgers', value: '100% Retained' },
        { label: 'Month-End Closing', value: '4× Accelerated' }
      ]
    },
    {
      id: 'fiori',
      number: '04',
      title: 'SAP Fiori UX & Role Provisioning',
      badge: 'MODERNIZED WORKSPACE',
      icon: Sparkles,
      lead: 'Transition legacy, convoluted SAP GUI transaction codes into modern, responsive, role-based SAP Fiori Launchpad spaces and apps.',
      problem: 'Forcing legacy SAP GUI menus onto S/4HANA limits user adoption and denies the organization the embedded analytics and machine learning insights native to modern S/4HANA.',
      solution: 'We auto-provision standard and customized SAP Fiori catalogs, spaces, and analytical tiles tailored to user roles (Finance, Purchasing, Warehouse, Sales) with responsive mobile tablet access.',
      kpis: [
        { label: 'Fiori Apps Deployed', value: '150+ Native Roles' },
        { label: 'User Adoption Rate', value: '98% Within 30 Days' },
        { label: 'GUI Clutter Reduction', value: '75% Simplified' }
      ]
    }
  ];

  // Section 5: 5-Phase Conversion Methodology
  const stageData = [
    {
      step: '01',
      phase: 'Assessment & Readiness',
      heading: 'SAP Readiness Check 2.0 & Landscape Telemetry Extraction',
      description: 'Deep telemetry extraction using SAP Readiness Check 2.0. We analyze HANA memory sizing (/SDF/HANA_BW_SIZING), Simplification Item catalog impact (600+ items), CVI readiness scores, and third-party ISV add-on compatibility.',
      deliverables: ['HANA RAM Sizing & Data Archiving Blueprint', 'Simplification Item Impact Matrix (600+ Items)', 'CVI Readiness Scorecard & Maintenance Planner Stack XML'],
      timeline: '2 – 3 Weeks'
    },
    {
      step: '02',
      phase: 'Preparation & Remediation',
      heading: 'CVI Business Partner Synchronization & ABAP Pre-Fixes',
      description: 'Executing Customer Vendor Integration (CVI) to synchronize KNA1 customers and LFA1 vendors into unified Business Partners (BUT000) in ECC. Custom ABAP code is scanned via ABAP Test Cockpit (ATC) to apply automated Quick Fixes.',
      deliverables: ['100% CVI Business Partner Synchronization', 'Automated ABAP Quick Fixes Applied', 'FIN_CORR Ledger Imbalance Pre-Corrections'],
      timeline: '4 – 6 Weeks'
    },
    {
      step: '03',
      phase: 'Sandbox Rehearsals',
      heading: 'Dual Mock Conversions & Cutover Calibration Runbook',
      description: 'Two end-to-end rehearsal conversions executed on fresh production-copy databases. We benchmark exact table transfer throughput, calibrate SUM DMO memory pipes, test functional transactions, and draft the minute-by-minute cutover runbook.',
      deliverables: ['Minute-by-Minute Weekend Cutover Runbook', 'Table Export/Import Speed Benchmarks', 'Financial Reconciliation Baseline Report'],
      timeline: '4 – 6 Weeks'
    },
    {
      step: '04',
      phase: 'DEV & QAS Landscape',
      heading: 'Development & Quality Assurance System Conversion',
      description: 'Converting the Development (DEV) and Quality Assurance (QAS) environments. Custom code adjustments are finalized, business test scripts are executed across all core functional modules, and business sign-off is secured.',
      deliverables: ['Converted S/4HANA DEV & QAS Systems', 'Clean Core Custom Code Transport Package', 'End-to-End User Acceptance Testing (UAT) Sign-Off'],
      timeline: '6 – 8 Weeks'
    },
    {
      step: '05',
      phase: 'Cutover & Hypercare',
      heading: 'Weekend Cutover (< 18h Outage) & 24/7 Month-End Hypercare',
      description: 'Execution of Software Update Manager (SUM 2.0) with Downtime-Optimized DMO over a planned weekend. Table conversions run in shadow mode, production downtime is compressed to under 18 hours, and 24/7 hypercare supports the first month-end close.',
      deliverables: ['Live Production SAP S/4HANA System', '100% ACDOCA Financial Reconciliation Sign-Off', 'First Month-End Financial Closing Support'],
      timeline: 'Weekend Window (< 18h) + 4 Weeks Hypercare'
    }
  ];

  // Section 6: Certified Tooling Stack
  const toolingStack = [
    {
      name: 'Software Update Manager 2.0 (SUM DMO)',
      role: 'CORE CONVERSION ENGINE',
      badge: 'SAP CERTIFIED',
      desc: 'Combines database migration (AnyDB to SAP HANA), application release upgrade, and data structure conversion into a single coordinated pipeline with shadow system acceleration.',
      metric: 'Throughput up to 4.8 GB/s',
      feature: 'doDMO (Downtime-Optimized Database Migration Option)'
    },
    {
      name: 'SAP Readiness Check 2.0 & /SDF Sizing',
      role: 'PRE-CONVERSION TELEMETRY',
      badge: 'ASSESSMENT SUITE',
      desc: 'Extracts full ECC landscape telemetry: exact RAM memory footprint sizing, simplification item matrix, financial data consistency check, and custom code health index.',
      metric: '600+ Simplification Items Mapped',
      feature: '/SDF/HANA_BW_SIZING with Cold Data Archiving'
    },
    {
      name: 'Customer Vendor Integration (CVI_COCKPIT)',
      role: 'MASTER DATA HARMONIZATION',
      badge: 'AUTOMATION FACTORY',
      desc: 'Automates harmonization of customer (KNA1) and vendor (LFA1) master records into unified Business Partners (BUT000) with pre-cutover validation.',
      metric: '100% Zero-Defect Master Records',
      feature: 'Automated Numbering Range Collision Engine'
    },
    {
      name: 'ABAP Test Cockpit (ATC) & Quick Fixes',
      role: 'CLEAN CORE CODE TRANSPILER',
      badge: 'CODE REMEDIATION',
      desc: 'Performs syntax analysis against the target S/4HANA dictionary, applying automated Quick Fixes to resolve deprecated cluster/pool tables and optimize queries for SAP HANA.',
      metric: '85%+ Automated Remediation',
      feature: 'Core Data Services (CDS) Migration Engine'
    },
    {
      name: 'SAP Maintenance Planner & Stack XML',
      role: 'DEPENDENCY & KERNEL VALIDATOR',
      badge: 'CLOUD ORCHESTRATION',
      desc: 'Validates target S/4HANA software components, operating system/database kernel compatibility, and verifies that third-party ISV add-ons are certified for the target release.',
      metric: 'Zero Cutover Abort Guarantee',
      feature: 'Automated Stack XML Dependency Resolution'
    },
    {
      name: 'FIN_CORR Ledger Reconciliation Workbench',
      role: 'AUDIT & FINANCIAL BALANCE ASSURANCE',
      badge: 'FINANCIAL INTEGRITY',
      desc: 'Automated balance verification engine comparing pre-conversion ECC General Ledger, AP, AR, and Asset Accounting trial balances against post-conversion ACDOCA records.',
      metric: 'Zero Balance Discrepancies',
      feature: 'Automated Multi-Ledger Reconciliation Cockpit'
    }
  ];

  // Section 7: FAQs
  const faqs = [
    {
      q: 'What is the main difference between SAP System Conversion and Greenfield?',
      a: 'SAP System Conversion (Brownfield) technically transforms your existing SAP ECC 6.0 instance into SAP S/4HANA in-place. It preserves 100% of your business configurations, custom development, master data history, and transactional financial records. Greenfield, in contrast, builds a brand-new system from scratch, requiring you to rebuild configurations and selectively migrate master data, discarding transactional history.'
    },
    {
      q: 'How does Software Update Manager (SUM) with DMO reduce conversion downtime?',
      a: 'Traditionally, upgrading an OS, upgrading the database, and updating the application took 3 separate steps with extensive downtime. SUM with Database Migration Option (DMO) combines all three into a single automated step. Furthermore, Downtime-Optimized DMO creates a shadow system that converts large database tables in the background while business operations continue live on Friday, compressing offline downtime to under 18 hours.'
    },
    {
      q: 'Can we convert our ECC system directly to S/4HANA if we are on an older ECC release?',
      a: 'Yes. Any SAP ECC 6.0 system running Enhancement Package (EHP) 0 through EHP 8 can be converted directly to SAP S/4HANA in a single step using SUM DMO. If your system is on a single-byte Unicode code page, Unicode conversion can also be performed in the same 1-step DMO process.'
    },
    {
      q: 'What happens to our custom Z-programs and user exits during System Conversion?',
      a: 'Your custom code remains in the system. However, code that interacts with simplified SAP tables (such as BSEG, KONV, or obsolete status tables) must be adapted. Using the SAP Custom Code Migration App and ABAP Test Cockpit (ATC), Knooviq automatedly remediates 85%+ of syntax errors using Quick Fixes, ensuring full compatibility with SAP HANA and S/4HANA Clean Core guidelines.'
    },
    {
      q: 'Why is Customer Vendor Integration (CVI) mandatory before System Conversion?',
      a: 'SAP S/4HANA uses the Business Partner (BP) data model as the single leading entity for all customers and vendors. SUM will fail to convert the database if Customer (KNA1) and Vendor (LFA1) records are not harmonized into Business Partners in ECC first. Knooviq automates this CVI synchronization process completely prior to the conversion cutover.'
    },
    {
      q: 'What safeguards prevent operational failure during the cutover weekend?',
      a: 'We mandate two complete mock sandbox conversions on exact production-copy databases. These rehearsals calibrate exact table transfer speeds, test minute-by-minute runbooks, and perform dry-run financial balancing. If any unforeseen anomaly arises during production cutover, strict go/no-go quality gates and tested rollback points ensure zero disruption to live operations.'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#050B17] text-slate-900 dark:text-white transition-colors duration-300">
      
      {/* =========================================================================
          SECTION 1: HERO — SYSTEM CONVERSION (FULL-BLEED WIDESCREEN HERO)
          ========================================================================= */}
      <section className="relative w-full min-h-[600px] lg:min-h-[660px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 overflow-hidden bg-slate-950 text-white">
        
        {/* Full-Bleed Background Visual */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/system_conversion_hero_widescreen.jpg"
            alt="SAP ECC to S/4HANA System Conversion showing automated document and ledger transfer from ECC to S/4HANA"
            className="w-full h-full object-cover object-right lg:object-[82%_center] brightness-105 contrast-105 saturate-[1.05]"
          />
          {/* Dedicated text-readability scrim on left; 100% bright & clear on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/65 via-50% to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl space-y-5 text-left">
            
            {/* Top Pill Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-mono font-bold tracking-wider uppercase backdrop-blur-md">
                <Server className="w-3.5 h-3.5 text-amber-400" />
                <span>1-STEP IN-PLACE SAP S/4HANA CONVERSION FACTORY</span>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-mono font-bold backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>SUM 2.0 DMO Certified &bull; &lt; 18h Downtime</span>
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.12] text-white">
              SAP S/4HANA <br />
              <span className="bg-gradient-to-r from-amber-400 via-sky-300 to-cyan-400 bg-clip-text text-transparent">
                System Conversion
              </span>
              <span className="block text-xl sm:text-2xl lg:text-3xl font-bold text-slate-300 mt-2 font-sans tracking-normal">
                In-Place Technical Transformation with Zero Business Interruption
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Technically convert your existing <strong>SAP ECC 6.0 instance (EHP 0–8) on AnyDB</strong> (Oracle, SQL Server, IBM DB2) into <strong>SAP S/4HANA in a single coordinated step</strong>. Powered by SAP Software Update Manager (SUM 2.0) with Downtime-Optimized DMO, our conversion factory preserves <strong>100% of your historical general ledgers, customized processes, and transaction history</strong> while compressing production cutover downtime to <strong>under 18 hours</strong> over a planned weekend.
            </p>

            {/* 4 Architectural Fact Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {[
                { label: 'Ledger Audit Trail', val: '100% Preserved', icon: ShieldCheck, color: 'text-emerald-400' },
                { label: 'Production Cutover', val: '< 18 Hours', icon: Clock, color: 'text-cyan-400' },
                { label: 'Execution Path', val: '1-Step Combined', icon: RefreshCw, color: 'text-amber-400' },
                { label: 'Master Data Sync', val: 'CVI Automated', icon: FolderSync, color: 'text-blue-400' }
              ].map((stat, i) => (
                <div key={i} className="p-3 rounded-xl bg-slate-900/80 border border-slate-700/70 backdrop-blur-md space-y-1">
                  <stat.icon className={`w-4 h-4 ${stat.color}`} />
                  <div className="text-sm font-black text-white">{stat.val}</div>
                  <div className="text-[10px] text-slate-400 uppercase font-mono tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Conversion Pathway Callout */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/10 via-sky-500/10 to-transparent border border-amber-400/20 text-xs sm:text-sm text-slate-200 flex items-center justify-between gap-3 backdrop-blur-md">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold text-xs shrink-0">
                  ECC
                </div>
                <div>
                  <span className="font-bold text-white">Source: </span>
                  <span className="text-slate-300">SAP ECC 6.0 (Oracle / SQL / DB2)</span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-amber-400 shrink-0" />
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-bold text-xs shrink-0">
                  S/4
                </div>
                <div>
                  <span className="font-bold text-white">Target: </span>
                  <span className="text-slate-300">SAP S/4HANA 2023 In-Memory Core</span>
                </div>
              </div>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => onOpenContact ? onOpenContact('SAP S/4HANA System Conversion Assessment') : null}
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm tracking-wide transition-all shadow-xl shadow-amber-500/25 flex items-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>Request Conversion Readiness Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#architecture-mechanics"
                className="px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-white font-bold text-sm tracking-wide transition-all flex items-center gap-2 cursor-pointer backdrop-blur-sm"
              >
                <span>Explore 1-Step Architecture</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </a>
            </div>

          </div>
        </div>

      </section>

      {/* =========================================================================
          SECTION 2: 1-STEP SUM DMO ARCHITECTURE & IN-PLACE MECHANICS
          ========================================================================= */}
      <section id="architecture-mechanics" className="py-20 lg:py-28 relative bg-white dark:bg-[#070E1C] border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-sky-500/10 border border-blue-200 dark:border-sky-500/30 text-sky-600 dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
              <Database className="w-3.5 h-3.5" />
              <span>THE 1-STEP IN-PLACE SUM DMO ENGINE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              In-Place Technical Upgrade & Database Migration Option (DMO)
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Unlike Greenfield implementations that discard legacy customizations, System Conversion executes an in-place technical transformation of your existing SAP ECC 6.0 instance directly into SAP S/4HANA in a single combined pass.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left: Detailed Mechanics & 4 Core In-Place Pillars */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Why Enterprises Choose In-Place System Conversion
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Organizations with mature business processes, complex custom ABAP configurations, and strict legal requirements to retain decades of transactional audit history choose System Conversion to modernize to S/4HANA without disrupting core operations.
                </p>
              </div>

              <div className="space-y-3.5">
                {[
                  {
                    title: 'Combined 1-Step OS/DB/App Upgrade',
                    desc: 'Database Migration Option (DMO) merges database migration to SAP HANA and application upgrade to S/4HANA into a single automated execution pass without intermediate staging.',
                    icon: Zap,
                    color: 'text-amber-500'
                  },
                  {
                    title: '100% Historical Ledger & Audit Preservation',
                    desc: 'Every historical transaction, customer invoice, purchase order, and general ledger document is preserved and migrated into the Universal Journal (ACDOCA).',
                    icon: ShieldCheck,
                    color: 'text-emerald-500'
                  },
                  {
                    title: 'Downtime-Optimized Shadow System (doDMO)',
                    desc: 'Table conversion executes in background shadow mode during active production hours on Friday, compressing offline cutover downtime to under 18 hours.',
                    icon: Clock,
                    color: 'text-cyan-500'
                  },
                  {
                    title: '50% Faster & Lower Risk than Greenfield',
                    desc: 'Eliminates the cost, risk, and organizational strain of re-training your entire workforce on completely new business processes from scratch.',
                    icon: BarChart3,
                    color: 'text-blue-500'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200 dark:border-slate-800 transition-all hover:border-slate-300 dark:hover:border-slate-700">
                    <div className="p-2 rounded-lg bg-white dark:bg-slate-900 shadow-sm shrink-0 mt-0.5">
                      <item.icon className={`w-4 h-4 ${item.color}`} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">{item.title}</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Right: Technical 3D Diagram Visual of SUM DMO Pipeline */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl bg-[#060D1A] group">
                
                <div className="px-5 py-3.5 bg-[#0A1628] border-b border-slate-800 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2 text-cyan-400 font-bold">
                    <Workflow className="w-4 h-4 text-cyan-400" />
                    <span>PARALLEL MEMORY PIPES ARCHITECTURE</span>
                  </div>
                  <span className="text-amber-400 font-mono text-[11px]">SUM DMO Engine</span>
                </div>

                <div className="relative p-2.5 bg-[#060D1A]">
                  <img
                    src="/images/system_conversion_sum_dmo_engine.jpg"
                    alt="SAP Software Update Manager SUM 2.0 with Database Migration Option DMO technical architecture showing AnyDB to SAP HANA 2.0 conversion"
                    className="w-full h-80 sm:h-96 lg:h-[400px] object-cover rounded-2xl border border-slate-800 bg-slate-950 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none rounded-2xl" />

                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-white space-y-1">
                    <div className="flex items-center justify-between text-xs font-bold text-amber-300">
                      <span>Source AnyDB ➔ Shadow Instance ➔ Target SAP HANA 2.0</span>
                      <span className="text-emerald-400 font-mono text-[11px]">Direct RAM Stream</span>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-snug">
                      High-speed parallel memory pipes stream database tables directly into SAP HANA RAM column store without staging to intermediate disk.
                    </p>
                  </div>
                </div>

                <div className="px-5 py-3 bg-[#081220] border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>SAP SUM 2.0 • Downtime-Optimized</span>
                  <span className="text-cyan-400 font-bold">Universal Journal (ACDOCA) Ready</span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: CUTOVER DOWNTIME OPTIMIZATION & SHADOW SYSTEM STRATEGY
          ========================================================================= */}
      <section className="py-20 lg:py-28 relative bg-slate-50 dark:bg-[#050B17] border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/30 text-amber-700 dark:text-amber-300 text-xs font-mono font-bold uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5 text-amber-500" />
              <span>DOWNTIME-OPTIMIZED CUTOVER RUNBOOK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Compressing Cutover Downtime to Under 18 Hours
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Global operations cannot afford multi-day outages. Through Downtime-Optimized DMO (doDMO) and shadow table replication, critical business operations run uninterrupted until the final weekend blackout window.
            </p>
          </div>

          {/* Timeline Graphic Banner */}
          <div className="rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl bg-[#060D1A] group">
            <div className="px-5 py-3.5 bg-[#0A1628] border-b border-slate-800 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
                <span>WEEKEND CUTOVER EXECUTION RUNBOOK (FRIDAY 18:00 – MONDAY 06:00)</span>
              </div>
              <span className="text-cyan-400 font-mono text-[11px]">SLA Guaranteed &lt; 18h Outage</span>
            </div>

            <div className="relative p-2.5 bg-[#060D1A]">
              <img
                src="/images/system_conversion_cutover_downtime.jpg"
                alt="SAP S/4HANA System Conversion downtime-optimized cutover timeline from Friday evening to Monday morning go-live"
                className="w-full h-80 sm:h-96 lg:h-[420px] object-cover rounded-2xl border border-slate-800 bg-slate-950 transition-transform duration-700 group-hover:scale-102"
              />
            </div>
          </div>

          {/* Interactive 4-Phase Cutover Inspector */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {cutoverPhases.map((phase, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveTimelineStep(idx)}
                  className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                    activeTimelineStep === idx
                      ? 'bg-white dark:bg-[#0B1528] border-amber-500 shadow-lg ring-1 ring-amber-500/30'
                      : 'bg-white/60 dark:bg-[#081220] border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <span className="text-[11px] font-mono text-slate-400 block mb-1">
                    {phase.time}
                  </span>
                  <div className="text-sm font-bold text-slate-900 dark:text-white line-clamp-1 mb-2">
                    {phase.title}
                  </div>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold border ${phase.tagColor}`}>
                    {phase.tag}
                  </span>
                </button>
              ))}
            </div>

            {/* Active Cutover Phase Detail Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-slate-800 shadow-xl space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-3 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <span className="text-xs font-mono text-amber-500 font-bold uppercase tracking-wider block">
                    {cutoverPhases[activeTimelineStep].time}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-0.5">
                    {cutoverPhases[activeTimelineStep].title}
                  </h3>
                </div>
                <span className={`text-xs font-mono px-3 py-1 rounded-full font-bold border ${cutoverPhases[activeTimelineStep].tagColor}`}>
                  {cutoverPhases[activeTimelineStep].tag}
                </span>
              </div>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                {cutoverPhases[activeTimelineStep].description}
              </p>

              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  Critical Execution Protocols & Safety Gates:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cutoverPhases[activeTimelineStep].highlights.map((h, i) => (
                    <div key={i} className="p-3 rounded-xl bg-slate-50 dark:bg-[#070E1C] border border-slate-200/80 dark:border-slate-800 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-800 dark:text-slate-200 font-medium">
                        {h}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: CORE CONVERSION WORKSTREAMS & TECHNICAL REMEDIATION PILLARS
          ========================================================================= */}
      <section className="py-20 lg:py-28 relative bg-white dark:bg-[#070E1C] border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
              <Boxes className="w-3.5 h-3.5 text-cyan-400" />
              <span>THE 4 FOUNDATIONAL TRANSFORMATION PILLARS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Master Data, Clean Core ABAP, ACDOCA & Fiori UX
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              System Conversion succeeds through deep technical preparation across four synchronized workstreams.
            </p>
          </div>

          {/* Workbench Infographic Frame */}
          <div className="rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl bg-[#060D1A] group">
            <div className="px-5 py-3.5 bg-[#0A1628] border-b border-slate-800 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2 text-cyan-400 font-bold">
                <Layers3 className="w-4 h-4 text-cyan-400" />
                <span>CORE PILLARS WORKBENCH: CVI • ABAP ATC • ACDOCA • FIORI UX</span>
              </div>
              <span className="text-amber-400 font-mono text-[11px]">100% De-Risked</span>
            </div>

            <div className="relative p-2.5 bg-[#060D1A]">
              <img
                src="/images/system_conversion_workstreams_matrix.jpg"
                alt="SAP S/4HANA core conversion pillars workbench showing Customer Vendor Integration CVI, ABAP Test Cockpit Clean Core, Financial Ledger Consolidation ACDOCA, and SAP Fiori Modern UX"
                className="w-full h-80 sm:h-96 lg:h-[420px] object-cover rounded-2xl border border-slate-800 bg-slate-950 transition-transform duration-700 group-hover:scale-102"
              />
            </div>
          </div>

          {/* 4 Interactive Workstream Detail Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {conversionPillars.map((pillar, idx) => {
              const isSelected = activePillarTab === idx;
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  onClick={() => setActivePillarTab(idx)}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white dark:bg-[#0B1528] border-sky-500 shadow-xl ring-1 ring-sky-500/30'
                      : 'bg-white dark:bg-[#081222] border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-9 h-9 rounded-xl bg-sky-500/15 text-[#00A3E0] flex items-center justify-center font-bold text-sm">
                        {pillar.number}
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold">
                        {pillar.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                      {pillar.title}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                      {pillar.lead}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                      <div className="text-[11px] text-rose-600 dark:text-rose-400 font-bold uppercase tracking-wider font-mono">
                        The Technical Challenge:
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                        {pillar.problem}
                      </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                      <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider font-mono flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Knooviq Solution:</span>
                      </div>
                      <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                        {pillar.solution}
                      </p>
                    </div>
                  </div>

                  {/* KPIs */}
                  <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-2 text-xs">
                    {pillar.kpis.slice(0, 2).map((kpi, kIdx) => (
                      <div key={kIdx}>
                        <span className="text-[10px] text-slate-400 block font-mono">{kpi.label}:</span>
                        <span className="font-bold text-slate-900 dark:text-white text-[11px]">{kpi.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: THE 5-PHASE CONVERSION EXECUTION METHODOLOGY & REHEARSALS
          ========================================================================= */}
      <section className="py-20 lg:py-28 relative bg-slate-50 dark:bg-[#050B17] border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs font-mono font-bold uppercase tracking-wider">
              <Workflow className="w-3.5 h-3.5 text-emerald-500" />
              <span>STRUCTURED 5-PHASE FACTORY METHODOLOGY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Predictable 5-Phase Conversion Execution & Dual Mock Rehearsals
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Every conversion project executes through strict SAP Activate milestones, governed by two complete dry-run conversions on production-copy databases.
            </p>
          </div>

          {/* Mission Control Visual Frame */}
          <div className="rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl bg-[#060D1A] group">
            <div className="px-5 py-3.5 bg-[#0A1628] border-b border-slate-800 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <CheckCheck className="w-4 h-4 text-emerald-400" />
                <span>MISSION CONTROL ROADMAP: 5 STAGES OF GO-LIVE CERTAINTY</span>
              </div>
              <span className="text-cyan-400 font-mono text-[11px]">SAP Activate Compliant</span>
            </div>

            <div className="relative p-2.5 bg-[#060D1A]">
              <img
                src="/images/system_conversion_methodology_roadmap.jpg"
                alt="SAP S/4HANA System Conversion 5-phase roadmap displayed in high-tech enterprise mission control center"
                className="w-full h-80 sm:h-96 lg:h-[420px] object-cover rounded-2xl border border-slate-800 bg-slate-950 transition-transform duration-700 group-hover:scale-102"
              />
            </div>
          </div>

          {/* Stepper Navigation */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3">
            {stageData.map((st, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveStage(idx)}
                className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer ${
                  activeStage === idx
                    ? 'bg-white dark:bg-[#0B1528] border-amber-500 shadow-md ring-1 ring-amber-500/30'
                    : 'bg-white/60 dark:bg-[#081220] border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <span className="text-xs font-mono font-black text-amber-500 block mb-1">
                  STAGE {st.step}
                </span>
                <span className="text-xs font-bold text-slate-900 dark:text-white block leading-tight line-clamp-1">
                  {st.phase}
                </span>
              </button>
            ))}
          </div>

          {/* Active Stage Detailed Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-black font-mono text-amber-500">
                  {stageData[activeStage].step}
                </span>
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block">
                    {stageData[activeStage].phase}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    {stageData[activeStage].heading}
                  </h3>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-mono font-bold">
                <Clock className="w-3.5 h-3.5 text-amber-500" />
                <span>Typical Duration: {stageData[activeStage].timeline}</span>
              </div>
            </div>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              {stageData[activeStage].description}
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                Key Phase Deliverables & Quality Gates:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {stageData[activeStage].deliverables.map((del, dIdx) => (
                  <div
                    key={dIdx}
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#070E1C] border border-slate-200/80 dark:border-slate-800 flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-slate-800 dark:text-slate-200 leading-snug">
                      {del}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: REAL-TIME CONVERSION COMMAND COCKPIT & TOOLING MATRIX
          ========================================================================= */}
      <section className="py-20 lg:py-28 relative bg-white dark:bg-[#070E1C] border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-500/10 border border-teal-200 dark:border-teal-500/30 text-teal-700 dark:text-teal-300 text-xs font-mono font-bold uppercase tracking-wider">
              <Activity className="w-3.5 h-3.5 text-teal-400" />
              <span>CERTIFIED CONVERSION TELEMETRY & TOOLING MATRIX</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Real-Time Conversion Command Cockpit & SAP Certified Tooling
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              We monitor every worker thread, table replication pipe, and memory allocation in real-time, executing strictly with official SAP utilities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left: Custom Real-Time Command Cockpit Visual */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl bg-[#060D1A] group">
                
                <div className="px-5 py-3.5 bg-[#0A1628] border-b border-slate-800 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold">
                    <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
                    <span>LIVE CONVERSION TELEMETRY COCKPIT</span>
                  </div>
                  <span className="text-cyan-400 font-mono text-[11px]">S/4HANA 2023 Validated</span>
                </div>

                <div className="p-2.5 bg-[#060D1A]">
                  <img
                    src="/images/system_conversion_command_cockpit.jpg"
                    alt="SAP Enterprise Migration Command Cockpit displaying Software Update Manager 2.0 conversion progress and ACDOCA table conversion"
                    className="w-full h-80 sm:h-96 object-cover rounded-2xl border border-slate-800 bg-slate-950 transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="px-5 py-3 bg-[#081220] border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>ACDOCA • MATDOC • CVI Synchronized</span>
                  <span className="text-emerald-400 font-bold">Throughput: 4.8 GB/s</span>
                </div>

              </div>
            </div>

            {/* Right: Technical Tooling Cards */}
            <div className="lg:col-span-6 space-y-3.5">
              {toolingStack.map((t, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveToolIndex(idx)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start justify-between gap-3 ${
                    activeToolIndex === idx
                      ? 'bg-slate-100 dark:bg-[#0B1528] border-teal-500 shadow-md ring-1 ring-teal-500/20'
                      : 'bg-slate-50 dark:bg-[#0B1528]/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-slate-900 dark:text-white">{t.name}</span>
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-teal-500/10 text-teal-600 dark:text-teal-400 font-bold border border-teal-500/20">
                        {t.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">{t.desc}</p>
                    <div className="flex items-center gap-3 pt-1 text-[11px] font-mono">
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">{t.metric}</span>
                      <span className="text-slate-400">•</span>
                      <span className="text-slate-500 dark:text-slate-400">{t.feature}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: MEASURABLE BUSINESS OUTCOMES, CIO FAQs & EXECUTIVE AUDIT CTA
          ========================================================================= */}
      <section className="py-20 lg:py-28 relative bg-gradient-to-b from-slate-900 via-[#0B1528] to-[#050B17] text-white">
        
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-amber-500/15 via-blue-600/15 to-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-mono font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>MEASURABLE BUSINESS ROI & ZERO-RISK ASSURANCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Guaranteed Cutover Window with 100% Historical Continuity
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Accelerate your time-to-value while eliminating operational disruption. Convert to S/4HANA with complete audit safety and predictable execution.
            </p>
          </div>

          {/* Go-Live Success Visual Banner */}
          <div className="rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl bg-[#060D1A] group">
            <div className="px-5 py-3.5 bg-[#0A1628] border-b border-slate-800 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>ENTERPRISE GO-LIVE CELEBRATION: S/4HANA OPERATIONAL TRANSFORMATION</span>
              </div>
              <span className="text-amber-400 font-mono text-[11px]">Zero Transaction Loss Verified</span>
            </div>

            <div className="relative p-2.5 bg-[#060D1A]">
              <img
                src="/images/system_conversion_business_success.jpg"
                alt="Executive boardroom and enterprise operations center celebrating successful SAP S/4HANA system conversion go-live with 4x accelerated closing and zero transaction loss"
                className="w-full h-80 sm:h-96 lg:h-[420px] object-cover rounded-2xl border border-slate-800 bg-slate-950 transition-transform duration-700 group-hover:scale-102"
              />
            </div>
          </div>

          {/* 4 Outcome Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                stat: '70%',
                title: 'Database Footprint Reduction',
                desc: 'HANA in-memory columnar compression shrinking multi-terabyte AnyDB storage.',
                badge: 'STORAGE EFFICIENCY'
              },
              {
                stat: '100%',
                title: 'Historical Audit Trail Retained',
                desc: 'Complete general ledger, purchasing, and billing records preserved in ACDOCA.',
                badge: 'COMPLIANCE SAFE'
              },
              {
                stat: '< 18h',
                title: 'Weekend Cutover Outage',
                desc: 'Downtime-Optimized DMO compresses system downtime with zero shipping loss.',
                badge: 'SLA GUARANTEED'
              },
              {
                stat: '50%',
                title: 'Faster Time-to-Value vs Greenfield',
                desc: 'Protects existing customizations and avoids multi-year re-implementation costs.',
                badge: 'RAPID ROI'
              }
            ].map((outcome, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-700/80 backdrop-blur-md space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold">
                    {outcome.badge}
                  </span>
                  <div className="text-4xl font-black font-mono bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">
                    {outcome.stat}
                  </div>
                  <h3 className="text-base font-bold text-white leading-snug">{outcome.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{outcome.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Executive CTA Box */}
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0B1D38] via-[#0E2445] to-[#0A1A33] border border-amber-400/30 shadow-2xl text-center space-y-6 relative overflow-hidden">
            <div className="max-w-2xl mx-auto space-y-3">
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Ready to Evaluate Your SAP ECC System Conversion?
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Connect with Knooviq&apos;s senior SAP conversion architects for a complimentary <strong>SAP Readiness Check 2.0 evaluation</strong> and custom cutover simulation roadmap.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => onOpenContact ? onOpenContact('SAP S/4HANA System Conversion Assessment') : null}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm tracking-wide transition-all shadow-xl shadow-amber-500/25 flex items-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>Schedule Conversion Architecture Session</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                to="/solutions/greenfield"
                className="px-7 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-white font-bold text-sm tracking-wide transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Compare with Greenfield Implementation</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </Link>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero Production Disruption</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                <span>1-Step SUM DMO Certified</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>24/7 Month-End Hypercare</span>
              </span>
            </div>
          </div>

          {/* Section FAQ Accordion */}
          <div className="pt-8 max-w-4xl mx-auto space-y-4">
            <h3 className="text-xl font-bold text-white text-center mb-6">
              Frequently Asked Questions on SAP System Conversion
            </h3>
            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-xl border border-slate-800 bg-slate-900/60 overflow-hidden transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full p-4 sm:p-5 text-left text-sm font-bold text-white flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-800/50"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${
                          isOpen ? 'rotate-180 text-amber-400' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </section>

      {/* =========================================================================
          FULL-SCREEN SAP S/4HANA SYSTEM CONVERSION MODAL
          ========================================================================= */}
      {isHeroFullScreen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-between p-4 sm:p-6 transition-all duration-300 animate-in fade-in"
          onClick={() => setIsHeroFullScreen(false)}
        >
          {/* Top Modal Controls Header */}
          <div 
            className="w-full max-w-7xl flex items-center justify-between pb-3 border-b border-white/15 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 shadow-md">
                <FolderSync className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-white text-base sm:text-lg font-black tracking-tight flex items-center gap-2">
                  <span>SAP S/4HANA System Conversion</span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-400/30">
                    FULL RESOLUTION
                  </span>
                </h3>
                <p className="text-xs text-slate-400 font-mono hidden sm:block">
                  Automated ECC to S/4HANA Transition &bull; Zero Data Loss &bull; In-Place Modernization Factory
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsHeroFullScreen(false)}
              className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white hover:text-amber-300 transition-all border border-white/20 shadow-lg flex items-center gap-1.5 cursor-pointer"
              aria-label="Close full screen view"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="hidden sm:inline text-xs font-mono font-bold pr-1">ESC</span>
            </button>
          </div>

          {/* Full Screen Image Presentation Container */}
          <div 
            className="relative flex-1 w-full max-w-7xl flex items-center justify-center p-2 sm:p-4 my-auto overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#0b1c3a] rounded-2xl p-4 sm:p-8 shadow-2xl border border-blue-500/30 max-h-[82vh] flex items-center justify-center">
              <img
                src="/images/sap_s4hana_ecc_conversion_folders.png"
                alt="SAP S/4HANA System Conversion - ECC to S/4HANA"
                className="max-w-full max-h-[76vh] w-auto h-auto object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Bottom Info Bar with Telemetry */}
          <div 
            className="w-full max-w-7xl pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-slate-300 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-4">
              <span className="text-amber-300">&bull; SAP S/4HANA System Conversion: Automated database and application modernization.</span>
            </div>
            <div className="text-slate-400 text-center sm:text-right shrink-0">
              Press <kbd className="px-2 py-0.5 rounded bg-white/10 text-white border border-white/20 font-bold">ESC</kbd> or click outside to exit full screen
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default SystemConversionPage;
