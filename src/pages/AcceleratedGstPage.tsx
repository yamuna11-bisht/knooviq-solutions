import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Activity,
  Layers,
  Database,
  RefreshCw,
  Eye,
  Lock,
  Clock,
  TrendingUp,
  FileText,
  Sliders,
  Check,
  Building2,
  Cpu,
  FileCheck2,
  XCircle,
  QrCode,
  Archive,
  BarChart3
} from 'lucide-react';

interface AcceleratedGstPageProps {
  onOpenContact: (topic?: string) => void;
}

export const AcceleratedGstPage: React.FC<AcceleratedGstPageProps> = ({ onOpenContact }) => {
  // =========================================================================
  // STATE: Section 2 - 6-Stage GST Compliance Journey Auto-Cycle & Click Pause
  // =========================================================================
  const [activeJourneyIndex, setActiveJourneyIndex] = useState<number>(0);
  const journeyIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const journeyPauseTimerRef = useRef<NodeJS.Timeout | null>(null);

  const startJourneyAutoCycle = useCallback(() => {
    if (journeyIntervalRef.current) clearInterval(journeyIntervalRef.current);
    journeyIntervalRef.current = setInterval(() => {
      setActiveJourneyIndex((prev) => (prev + 1) % 6);
    }, 3000);
  }, []);

  const handleJourneyStageClick = (index: number) => {
    setActiveJourneyIndex(index);
    if (journeyIntervalRef.current) {
      clearInterval(journeyIntervalRef.current);
      journeyIntervalRef.current = null;
    }
    if (journeyPauseTimerRef.current) {
      clearTimeout(journeyPauseTimerRef.current);
    }
    journeyPauseTimerRef.current = setTimeout(() => {
      startJourneyAutoCycle();
    }, 5000);
  };

  useEffect(() => {
    startJourneyAutoCycle();
    return () => {
      if (journeyIntervalRef.current) clearInterval(journeyIntervalRef.current);
      if (journeyPauseTimerRef.current) clearTimeout(journeyPauseTimerRef.current);
    };
  }, [startJourneyAutoCycle]);

  // =========================================================================
  // STATE: Section 4 - SAP Integration Architecture Layer Switcher
  // =========================================================================
  const [activeArchLayer, setActiveArchLayer] = useState<'sd_mm' | 'validation' | 'recon' | 'tables' | 'middleware' | 'ledgers'>('recon');
  const archIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const archPauseTimerRef = useRef<NodeJS.Timeout | null>(null);

  const archLayerKeys: ('sd_mm' | 'validation' | 'recon' | 'tables' | 'middleware' | 'ledgers')[] = useMemo(() => [
    'sd_mm',
    'validation',
    'recon',
    'tables',
    'middleware',
    'ledgers'
  ], []);

  const startArchAutoCycle = useCallback(() => {
    if (archIntervalRef.current) clearInterval(archIntervalRef.current);
    archIntervalRef.current = setInterval(() => {
      setActiveArchLayer((current) => {
        const idx = archLayerKeys.indexOf(current);
        return archLayerKeys[(idx + 1) % archLayerKeys.length];
      });
    }, 3500);
  }, [archLayerKeys]);

  const handleArchLayerClick = (layerId: 'sd_mm' | 'validation' | 'recon' | 'tables' | 'middleware' | 'ledgers') => {
    setActiveArchLayer(layerId);
    if (archIntervalRef.current) {
      clearInterval(archIntervalRef.current);
      archIntervalRef.current = null;
    }
    if (archPauseTimerRef.current) {
      clearTimeout(archPauseTimerRef.current);
    }
    archPauseTimerRef.current = setTimeout(() => {
      startArchAutoCycle();
    }, 6000);
  };

  useEffect(() => {
    startArchAutoCycle();
    return () => {
      if (archIntervalRef.current) clearInterval(archIntervalRef.current);
      if (archPauseTimerRef.current) clearTimeout(archPauseTimerRef.current);
    };
  }, [startArchAutoCycle]);

  // =========================================================================
  // STATE: Section 5 - Before vs. After KnoovIQ Impact Switcher
  // =========================================================================
  const [impactView, setImpactView] = useState<'after' | 'before'>('after');

  // =========================================================================
  // DATA: Section 2 - 6-Stage GST Compliance Journey
  // =========================================================================
  const journeyStages = [
    {
      step: '01',
      title: 'Ingest',
      label: 'TRANSACTION CAPTURE',
      summary: 'Directly ingest sales, purchase, and debit/credit notes from native SAP SD, MM, and FI tables.',
      image: '/images/einvoice-stage1-create.jpg',
      tcode: 'SAP VF01 / FB70 / MIRO / VL02N',
      technicalDesc: 'Event-driven background listeners capture confirmed billing documents and vendor purchase registers in real time. Extracts invoice line items, tax conditions (JOIG, JOCG, JOSG), and 15-digit counterparty GSTINs without intermediate manual file exports.',
      checkpoints: [
        'Automatic trigger on SAP Billing Document Save & Goods Receipt (MIGO)',
        'Normalizes multi-company, multi-plant transactional data streams',
        'Direct extraction of HSN/SAC codes, quantities, and taxable values'
      ]
    },
    {
      step: '02',
      title: 'Validate',
      label: 'TAX RULES & MASTER CHECKS',
      summary: 'Pre-screen transactions against 140+ real-time tax logic rules and central GSTIN master records.',
      image: '/images/einvoice-stage2-validate.jpg',
      tcode: 'Rules Engine: J_1BTAXCOD & GSTIN Master',
      technicalDesc: 'Verifies active counterparty registration status via government API, enforces Place of Supply (POS) state codes, checks Reverse Charge Mechanism (RCM) eligibility, and flags rate mismatches before records move downstream.',
      checkpoints: [
        'Real-time active GSTIN verification with live government database check',
        'State-to-pincode validation ensuring correct CGST/SGST vs IGST split',
        'Mathematical cross-validation of tax rates against taxable base amounts'
      ]
    },
    {
      step: '03',
      title: 'Reconcile',
      label: 'SMART PURCHASE MATCHING',
      summary: 'Continuously reconcile internal purchase registers against GSTN auto-drafted GSTR-2B datasets.',
      image: '/images/journey/fresh_s1_finance_planning.jpg',
      tcode: 'Reconciliation: PR vs GSTR-2B / 2A',
      technicalDesc: 'Multi-dimensional matching engine aligns vendor records across invoice numbers, tax values, and dates. Applies configurable rounding tolerances and invoice fuzzy normalization to isolate exact matches, variances, and missing vendor filings.',
      checkpoints: [
        'Multi-tier fuzzy matching accounting for slashes, prefixes, and zeros',
        'Configurable tolerance rules (±₹1.00 rounding & ±5 day date window)',
        'Early detection of missing vendor invoices to safeguard eligible ITC'
      ]
    },
    {
      step: '04',
      title: 'Prepare',
      label: 'RETURN AUTO-POPULATION',
      summary: 'Auto-compile GSTR-1 outward summaries and GSTR-3B monthly computation tables directly from validated records.',
      image: '/images/journey/fresh_s1_accountant_desk.jpg',
      tcode: 'Return Payload: GSTR-1, GSTR-3B & GSTR-9',
      technicalDesc: 'Maps outward B2B, B2C, and SEZ invoices to GSTR-1 Tables 4A, 4B, 6B, and 9B. Auto-populates GSTR-3B Table 4 with eligible Input Tax Credit (ITC) while cleanly apportioning ineligibility under Section 17(5) and Rule 42/43 reversals.',
      checkpoints: [
        'Zero manual copy-pasting or CSV conversions for monthly filing tables',
        'Dynamic computation of eligible vs ineligible ITC credit buckets',
        'Generates GSTN-compliant JSON payloads ready for digital signature'
      ]
    },
    {
      step: '05',
      title: 'Audit & Lock',
      label: 'TRACEABILITY & SECURITY',
      summary: 'Maintain tamper-evident audit logs and permanent transactional histories across all operating entities.',
      image: '/images/gst_workflow_exec.jpg',
      tcode: 'Audit Trail: ISO 27001 & SHA-256 Vault',
      technicalDesc: 'Every automated matching decision, user override, and return preparation action is cryptographically logged with timestamps and user credentials, guaranteeing complete inspection readiness during departmental statutory audits.',
      checkpoints: [
        'Immutable cryptographic logging of all tax overrides and adjustments',
        '8-year statutory record retention matching Section 36 requirements',
        'Role-based access control (RBAC) preventing unauthorized ledger updates'
      ]
    },
    {
      step: '06',
      title: 'File & Settle',
      label: 'SETTLEMENT & REPORTING',
      summary: 'Synchronize electronic cash & credit ledgers, complete filing, and post financial settlements into SAP.',
      image: '/images/einvoice-stage6-record.jpg',
      tcode: 'SAP FI-CO • ACDOCA Universal Journal',
      technicalDesc: 'Validates cash/credit utilization against statutory liability, executes return submission, retrieves official Acknowledgement Reference Numbers (ARN), and posts reconciled settlement entries directly into SAP general ledgers.',
      checkpoints: [
        'Direct API integration with GST Portal for return packet submission',
        'Automated settlement posting into SAP ACDOCA general ledgers',
        'Consolidated executive multi-GSTIN dashboard with compliance scorecards'
      ]
    }
  ];

  // =========================================================================
  // DATA: Section 3 - Core GST Compliance Capabilities
  // =========================================================================
  const coreCapabilities = [
    {
      id: 'sap-integration',
      title: 'Native SAP ERP Integration',
      subtitle: 'Zero Manual Extraction',
      stat: '0 Manual Steps',
      desc: 'Connects directly with SAP S/4HANA and ECC 6.0 via RFC, BAPI, and clean core BTP integration. Eliminates spreadsheets, third-party utilities, and manual CSV exports.',
      icon: Zap,
      accent: 'from-blue-600 to-cyan-500',
      badge: 'Native Architecture',
      details: [
        'Supports S/4HANA (Cloud & On-Premise) and ECC 6.0',
        'Direct read/write access to standard SAP SD, MM, and FI tables',
        'Continuous background synchronization with zero downtime'
      ]
    },
    {
      id: 'tax-validation',
      title: 'Multi-Point Validation Engine',
      subtitle: '140+ Real-Time Rules',
      stat: '99.9% Clean Data',
      desc: 'In-memory rules engine audits GSTIN status, Place of Supply (POS), HSN rate mappings, and mathematical accuracy before records enter return preparation.',
      icon: ShieldCheck,
      accent: 'from-cyan-600 to-teal-500',
      badge: 'Pre-Filing Defense',
      details: [
        'Real-time live GSTIN validity verification via government API',
        'Pin-to-state Place of Supply (POS) validation logic',
        'Comprehensive HSN 6/8-digit format and rate slab enforcement'
      ]
    },
    {
      id: 'recon-engine',
      title: 'Automated 2-Way & 3-Way Recon',
      subtitle: 'PR vs GSTR-2B Matching',
      stat: '100% ITC Safeguard',
      desc: 'Multi-tier fuzzy matching algorithm pairs internal purchase orders and supplier invoices with GSTR-2B/2A data, immediately flagging vendor filing delays.',
      icon: RefreshCw,
      accent: 'from-emerald-600 to-teal-500',
      badge: 'Zero Credit Loss',
      details: [
        'Smart fuzzy matching for invoice numbering, prefixes, and dates',
        'Configurable tolerance bands for rounding variances (±₹1.00)',
        'Automated discrepancy alerts sent directly to defaulting vendors'
      ]
    },
    {
      id: 'return-automation',
      title: 'Automated Return Preparation',
      subtitle: 'GSTR-1, 3B & Annual GSTR-9',
      stat: 'One-Click Filing',
      desc: 'Auto-compiles monthly and quarterly return packets from validated transaction data. Automatically calculates eligible ITC and handles Section 17(5) reversals.',
      icon: FileText,
      accent: 'from-indigo-600 to-blue-500',
      badge: 'Statutory Alignment',
      details: [
        'Auto-populates GSTR-1 outward tables and GSTR-3B ITC Table 4',
        'Automates Rule 42 & Rule 43 input tax reversal computations',
        'Pre-compiled GSTR-9 annual reconciliation tables'
      ]
    },
    {
      id: 'multi-gstin',
      title: 'Multi-GSTIN Oversight Console',
      subtitle: 'Pan-India Entity Management',
      stat: 'All State GSTINs',
      desc: 'Manage filing schedules, return statuses, electronic cash/credit ledgers, and compliance health across all operating state entities from a single unified cockpit.',
      icon: Building2,
      accent: 'from-amber-500 to-orange-500',
      badge: 'Enterprise Visibility',
      details: [
        'Consolidated group-level tax liability and credit position',
        'State-by-state due date countdown and readiness tracking',
        'Role-based permissions for corporate headquarters and regional teams'
      ]
    },
    {
      id: 'audit-vault',
      title: 'Cryptographic Audit Trail Vault',
      subtitle: '8-Year Statutory Archive',
      stat: 'Tamper-Evident',
      desc: 'Maintains an immutable historical record of all invoice uploads, reconciliation decisions, manual overrides, and return filings to satisfy departmental audits.',
      icon: Lock,
      accent: 'from-purple-600 to-pink-500',
      badge: 'Inspection Ready',
      details: [
        'SHA-256 cryptographic logging of every transaction edit',
        'One-click statutory export for GST departmental audit queries',
        'ISO 27001 & SOC 2 certified data security infrastructure'
      ]
    }
  ];

  // =========================================================================
  // DATA: Section 4 - SAP Integration Architecture Layers
  // =========================================================================
  const sapArchLayers = [
    {
      id: 'sd_mm' as const,
      layer: 'Layer 01',
      title: 'Source Transaction Layer',
      subtitle: 'SAP SD Sales & MM Purchase Ingestion',
      tcode: 'SD/MM • VF01 / VL02N / MIGO / MIRO',
      desc: 'Captures outbound billing documents and inbound purchase records from native SAP transactions. Event listeners monitor standard SAP posting events and extract full commercial line items.',
      sapObjects: ['VBRK / VBRP (Sales Billing Header & Item)', 'EKKO / EKPO (Purchase Order Header & Item)', 'RBKP / RSEG (Invoice Receipt Header & Item)']
    },
    {
      id: 'validation' as const,
      layer: 'Layer 02',
      title: 'Tax Validation Engine',
      subtitle: 'Pre-Processing Logic & Master Verification',
      tcode: 'FI-TAX • TAXINN & Condition Procedures',
      desc: 'Cross-checks invoice line items against central master tables and condition pricing types (JOIG, JOCG, JOSG). Enforces Place of Supply rules and ensures zero tax determination conflicts.',
      sapObjects: ['J_1BTAXCOD (Tax Calculation Structure)', 'A003 / KONP (Tax Condition Master Records)', 'KNA1 / LFA1 (Customer & Vendor Master GSTINs)']
    },
    {
      id: 'recon' as const,
      layer: 'Layer 03',
      title: 'Smart Reconciliation Workspace',
      subtitle: 'Automated 2-Way & 3-Way Matching Engine',
      tcode: 'Reconciliation • GSTR-2B vs Internal PR',
      desc: 'Applies multi-tier fuzzy matching and configurable tolerance thresholds to align purchase registers with GSTN 2B auto-drafted data, segregating matches and quarantining variances.',
      sapObjects: ['Fuzzy String Normalization Algorithms', 'Tolerance Rules Engine (Date, Rounding, Value)', 'Vendor Dispute & Mismatch Flagging Registry']
    },
    {
      id: 'tables' as const,
      layer: 'Layer 04',
      title: 'Return Auto-Compilation',
      subtitle: 'GSTR-1, 3B & 9 Table Structuring',
      tcode: 'Statutory Payload Generator • Schema v1.4',
      desc: 'Auto-maps reconciled transactional totals into official government return tables. Eliminates manual compilation errors and dynamically prepares eligible vs blocked credit ledgers.',
      sapObjects: ['GSTR-1 Table 4A/4B/6B/9B JSON Formatter', 'GSTR-3B Table 3.1 & Table 4 ITC Logic Engine', 'Rule 42/43 Common Credit Reversal Calculator']
    },
    {
      id: 'middleware' as const,
      layer: 'Layer 05',
      title: 'Secure BTP & API Connector',
      subtitle: 'High-Speed Encrypted Gateway to GSTN',
      tcode: 'KNOOVIQ Core GST API Connector',
      desc: 'Communicates directly with the GSTN portal through authorized GST Suvidha Provider (GSP) channels via OAuth 2.0 encrypted REST APIs with sub-second response times and multi-node failover.',
      sapObjects: ['OAuth 2.0 Token & Key Lifecycle Manager', 'Multi-GSP High-Availability Failover Router', 'AES-256 Payload Encryption & Decryption Engine']
    },
    {
      id: 'ledgers' as const,
      layer: 'Layer 06',
      title: 'Financial Settlement & Ledgers',
      subtitle: 'Universal Journal (ACDOCA) & Postings',
      tcode: 'FI-GL • FB03 / FBL3N / ACDOCA Postings',
      desc: 'Updates electronic cash and credit ledger balances in real time, logs official statutory Acknowledgement Reference Numbers (ARN), and posts final tax settlement entries into SAP.',
      sapObjects: ['ACDOCA (Universal Journal Financial Ledger)', 'BSID / BSAD (Customer Open & Cleared Items)', 'J_1IG_GSTSETTLE (Statutory GST Settlement Table)']
    }
  ];

  const currentArchLayer = sapArchLayers.find(l => l.id === activeArchLayer) || sapArchLayers[2];

  return (
    <div className="bg-[#F8FAFC] dark:bg-[#030712] text-slate-900 dark:text-white transition-colors duration-300 overflow-hidden font-sans">

      {/* =========================================================================
          SECTION 1 — HERO: Intelligent Accelerated GST Solution
          Headline: “Smarter GST Operations. Seamless Compliance.”
          Value Prop + Trust Metrics + Interactive Tax Mode Specimen + Photo Frame
          ========================================================================= */}
      <section
        id="hero"
        className="relative pt-32 pb-20 lg:pt-36 lg:pb-24 min-h-[580px] lg:min-h-[640px] flex items-center overflow-hidden bg-gradient-to-b from-white via-sky-50/40 to-[#F0F7FF] dark:from-[#030712] dark:via-[#071324] dark:to-[#0A1A30] border-b border-slate-200/80 dark:border-white/10"
      >
        {/* Soft Ambient Radiant Backlight */}
        <div className="absolute top-20 left-1/4 w-[550px] h-[350px] bg-cyan-500/10 dark:bg-cyan-400/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-36 right-1/4 w-[500px] h-[350px] bg-blue-600/10 dark:bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Hero Headline, Copy & CTAs (6 Cols) */}
            <div className="lg:col-span-6 text-left">
              
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-blue-50 dark:bg-cyan-950/50 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-cyan-500/30 shadow-sm mb-6"
              >
                <Sparkles className="h-3.5 w-3.5 text-blue-600 dark:text-cyan-400" />
                <span>SAP S/4HANA & ECC GST Accelerator</span>
              </motion.div>

              {/* Exact Headline */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-6"
              >
                Smarter GST Operations.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
                  Seamless Compliance.
                </span>
              </motion.h1>

              {/* Supporting Text */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed font-sans mb-8 max-w-xl"
              >
                Accelerated GST Solution brings invoice data, validation, reconciliation and return preparation into a connected digital workflow—helping businesses improve operational visibility and manage GST processes with greater consistency.
              </motion.p>

              {/* Action CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8"
              >
                <button
                  onClick={() => onOpenContact('Accelerated GST Solution Consultation')}
                  className="btn-primary-gradient shimmer-sweep px-8 py-4 rounded-xl text-white font-display text-xs font-bold uppercase tracking-wider shadow-xl flex items-center justify-center gap-2.5 cursor-pointer hover:shadow-cyan-500/25 transition-all"
                >
                  <span>Talk to an Expert</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href="#journey"
                  className="px-6 py-4 rounded-xl border border-slate-300 dark:border-white/20 bg-white/80 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-800 dark:text-white font-display text-xs font-bold uppercase tracking-wider transition-all text-center"
                >
                  Explore 6-Stage Journey
                </a>
              </motion.div>

              {/* Regulatory Trust Metrics */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>GSTN &amp; NIC Authorized API</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Pan-India Multi-GSTIN</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>SAP S/4HANA &amp; ECC 6.0</span>
                </div>
              </div>

            </div>

            {/* Right Column: Hero Visual (6 Cols) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-6 relative flex items-center justify-center"
            >
              {/* Backdrop Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-indigo-600/20 rounded-3xl blur-2xl opacity-50 pointer-events-none" />

              <div className="relative w-full max-w-[620px] h-[440px] sm:h-[480px] lg:h-[530px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 dark:border-cyan-500/30 bg-[#020817] group">
                <img
                  src="/images/gst_hero_visual.jpg"
                  alt="Intelligent SAP GST Solution & Compliance"
                  className="w-full h-full object-cover object-center rounded-3xl group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — THE GST COMPLIANCE JOURNEY (6-Stage Interactive Execution)
          Flow: Ingest → Validate → Reconcile → Prepare → Audit → Settle
          Real Stage Imagery + Concrete Technical Runbooks + 3s Auto-Cycle & 5s Pause
          ========================================================================= */}
      <section id="journey" className="py-16 sm:py-20 relative bg-white dark:bg-[#070E1C] border-b border-slate-200/80 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-blue-50 dark:bg-cyan-950/40 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-cyan-500/30 shadow-sm mb-3">
              <Activity className="h-3.5 w-3.5 text-blue-600 dark:text-cyan-400" />
              <span>Full Lifecycle Execution</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              From Transaction Data to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
                Compliance Clarity
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
              Trace how commercial invoices flow seamlessly from SAP sales and purchases into validation, smart reconciliation, and statutory return filing.
            </p>
          </div>

          {/* 6-Stage Interactive Flow Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-8">
            {journeyStages.map((stage, sIdx) => {
              const isSelected = activeJourneyIndex === sIdx;
              return (
                <button
                  key={stage.step}
                  onClick={() => handleJourneyStageClick(sIdx)}
                  className={`p-3 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-blue-600 text-white border-blue-600 shadow-lg scale-102'
                      : 'bg-slate-50 dark:bg-[#0B1528] border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-blue-400'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-mono text-xs font-black ${isSelected ? 'text-white' : 'text-blue-600 dark:text-cyan-400'}`}>
                      {stage.step}
                    </span>
                    <span className={`text-[8px] font-mono px-1.5 py-0.5 rounded uppercase ${isSelected ? 'bg-white/20 text-white' : 'bg-slate-200/70 dark:bg-white/10 text-slate-500'}`}>
                      Phase
                    </span>
                  </div>
                  <span className="font-display text-sm font-bold block leading-tight">
                    {stage.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Stage Deep-Dive Showcase Card (Real Photo + Runbook Blueprint) */}
          <motion.div
            key={activeJourneyIndex}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 p-6 sm:p-8 shadow-xl overflow-hidden text-left"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Stage Photo (5 Cols) */}
              <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 h-72 sm:h-80 shadow-lg bg-slate-900 group">
                <img
                  src={journeyStages[activeJourneyIndex].image}
                  alt={journeyStages[activeJourneyIndex].title}
                  className="w-full h-full object-cover brightness-[1.03] contrast-[1.02] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3 px-3 py-1.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-cyan-400/40 text-white font-mono text-[10px] font-bold shadow-md">
                  STAGE {journeyStages[activeJourneyIndex].step} • {journeyStages[activeJourneyIndex].label}
                </div>
                <div className="absolute bottom-3 inset-x-3 text-white">
                  <span className="font-mono text-xs text-cyan-300 font-bold block bg-slate-950/60 backdrop-blur-sm px-2.5 py-1 rounded-lg inline-block border border-white/10">
                    {journeyStages[activeJourneyIndex].tcode}
                  </span>
                </div>
              </div>

              {/* Right Column: Execution Runbook & Checkpoints (7 Cols) */}
              <div className="lg:col-span-7 space-y-4">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400">
                    PHASE {journeyStages[activeJourneyIndex].step} OPERATIONAL BLUEPRINT
                  </span>
                  <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mt-1">
                    {journeyStages[activeJourneyIndex].title} — {journeyStages[activeJourneyIndex].label}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed mt-2">
                    {journeyStages[activeJourneyIndex].technicalDesc}
                  </p>
                </div>

                {/* Checkpoint Bullets */}
                <div className="space-y-2 pt-2 border-t border-slate-200/80 dark:border-white/10">
                  {journeyStages[activeJourneyIndex].checkpoints.map((cp, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-2.5 text-xs font-mono text-slate-700 dark:text-slate-200">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{cp}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Standard SAP S/4HANA &amp; ECC Compliant</span>
                  <button
                    onClick={() => onOpenContact(`GST Stage Consultation: ${journeyStages[activeJourneyIndex].title}`)}
                    className="inline-flex items-center gap-1 font-bold text-blue-600 dark:text-cyan-400 hover:underline cursor-pointer"
                  >
                    <span>Request Technical Runbook</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — CORE GST COMPLIANCE CAPABILITIES
          6 Interactive Feature Cards with Rich Domain Substance & Specifics
          ========================================================================= */}
      <section id="capabilities" className="py-16 sm:py-20 relative bg-[#F8FAFC] dark:bg-[#030712] border-b border-slate-200/80 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-blue-500/30 shadow-sm mb-3">
              <Layers className="h-3.5 w-3.5 text-blue-600 dark:text-cyan-400" />
              <span>Built for Mission-Critical Tax Operations</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              Enterprise GST{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
                Capabilities
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
              Enterprise-grade compliance framework engineered to manage high invoice volumes across multi-state operating entities with zero filing discrepancies.
            </p>
          </div>

          {/* 6 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreCapabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={cap.id}
                  whileHover={{ y: -4 }}
                  className="rounded-3xl p-6 sm:p-7 bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all text-left flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cap.accent} text-white flex items-center justify-center shadow-md`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="font-mono text-[10px] font-bold uppercase px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-cyan-300 border border-slate-200 dark:border-white/5">
                        {cap.badge}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-1">
                      {cap.title}
                    </h3>
                    <span className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400 block mb-3">
                      {cap.subtitle} • {cap.stat}
                    </span>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed mb-4">
                      {cap.desc}
                    </p>

                    <div className="space-y-1.5 pt-3 border-t border-slate-100 dark:border-white/10">
                      {cap.details.map((d, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2 text-xs font-mono text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                          <span className="truncate">{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-xs font-mono text-blue-600 dark:text-cyan-400">
                    <span className="font-bold">Enterprise Ready</span>
                    <button
                      onClick={() => onOpenContact(`Capability Inquiry: ${cap.title}`)}
                      className="font-bold hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Explore</span>
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — SAP INTEGRATION ARCHITECTURE
          6-Layer Interactive Technical Switcher with Native SAP Objects & T-Codes
          ========================================================================= */}
      <section id="architecture" className="py-16 sm:py-20 relative bg-white dark:bg-[#070E1C] border-b border-slate-200/80 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-blue-50 dark:bg-cyan-950/40 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-cyan-500/30 shadow-sm mb-3">
              <Cpu className="h-3.5 w-3.5 text-blue-600 dark:text-cyan-400" />
              <span>Native SAP Integration Architecture</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              Engineered Inside the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
                SAP Clean Core
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
              Explore how Accelerated GST Solution integrates directly with SAP ECC 6.0 and S/4HANA across all functional architectural layers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: 6 Layer Nav Buttons (5 Cols) */}
            <div className="lg:col-span-5 space-y-2.5">
              {sapArchLayers.map((layer) => {
                const isSelected = activeArchLayer === layer.id;
                return (
                  <button
                    key={layer.id}
                    onClick={() => handleArchLayerClick(layer.id)}
                    className={`w-full p-4 rounded-2xl text-left border transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-blue-600 text-white border-blue-600 shadow-lg'
                        : 'bg-slate-50 dark:bg-[#0B1528] border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-blue-400'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`font-mono text-xs font-bold uppercase ${isSelected ? 'text-white' : 'text-blue-600 dark:text-cyan-400'}`}>
                          {layer.layer}
                        </span>
                        <span className={`text-[10px] font-mono ${isSelected ? 'text-blue-100' : 'text-slate-400'}`}>
                          • {layer.tcode.split('•')[0]}
                        </span>
                      </div>
                      <h4 className="font-display text-base font-bold leading-tight">
                        {layer.title}
                      </h4>
                    </div>
                    <ChevronRight className={`h-4 w-4 shrink-0 transition-transform ${isSelected ? 'rotate-90 text-white' : 'text-slate-400'}`} />
                  </button>
                );
              })}
            </div>

            {/* Right Column: Layer Detailed Data Specifications & Schemas (7 Cols) */}
            <div className="lg:col-span-7">
              <motion.div
                key={activeArchLayer}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25 }}
                className="rounded-3xl p-6 sm:p-8 bg-slate-50 dark:bg-[#0B1528] border border-slate-200 dark:border-cyan-500/20 shadow-xl text-left flex flex-col justify-between min-h-[420px]"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 dark:border-white/10 mb-4">
                    <span className="font-mono text-xs font-bold text-blue-600 dark:text-cyan-400 uppercase">
                      {currentArchLayer.layer} SPECIFICATION
                    </span>
                    <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400">
                      {currentArchLayer.tcode}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-1">
                    {currentArchLayer.title}
                  </h3>
                  <span className="text-xs font-mono text-blue-600 dark:text-cyan-400 font-bold block mb-4">
                    {currentArchLayer.subtitle}
                  </span>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed mb-6">
                    {currentArchLayer.desc}
                  </p>

                  {/* Connected SAP Technical Objects */}
                  <div className="p-4 rounded-2xl bg-white dark:bg-[#07101E] border border-slate-200 dark:border-white/10 space-y-2">
                    <span className="text-[10px] font-mono text-slate-400 uppercase block font-bold">
                      Native SAP Tables &amp; Schema Objects
                    </span>
                    {currentArchLayer.sapObjects.map((obj, oIdx) => (
                      <div key={oIdx} className="flex items-center gap-2 text-xs font-mono text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                        <span>{obj}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Clean Core &amp; BTP Extension Ready</span>
                  <button
                    onClick={() => onOpenContact(`SAP GST Architecture: ${currentArchLayer.title}`)}
                    className="font-bold text-blue-600 dark:text-cyan-400 hover:underline cursor-pointer flex items-center gap-1"
                  >
                    <span>Schedule Technical Deep Dive</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </motion.div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5 — OPERATIONAL IMPACT & TRANSFORMATION
          Stat Tiles + Interactive Before vs. After Switcher + Enterprise CTA
          ========================================================================= */}
      <section className="py-16 sm:py-20 relative bg-[#F8FAFC] dark:bg-[#030712] border-b border-slate-200/80 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30 shadow-sm mb-3">
              <TrendingUp className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Proven Operational ROI</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              Measurable{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
                Business Impact
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
              Replacing manual offline portal utilities and disconnected spreadsheets with automated SAP GST compliance generates tangible speed, eliminates credit leakage, and guarantees audit readiness.
            </p>
          </div>

          {/* 4 Large Impact Statistic Tiles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            
            <motion.div whileHover={{ y: -4 }} className="rounded-3xl p-6 bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 shadow-sm text-left flex flex-col justify-between">
              <div>
                <span className="font-display text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 block mb-2">
                  80%
                </span>
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-1">
                  Less Manual Effort
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                  Completely eliminates manual spreadsheet reconciliation, offline JSON compilation, and manual GSTR portal data uploads.
                </p>
              </div>
              <div className="pt-3 mt-4 border-t border-slate-100 dark:border-white/10 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5" /> Direct SAP Automation
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -4 }} className="rounded-3xl p-6 bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 shadow-sm text-left flex flex-col justify-between">
              <div>
                <span className="font-display text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-500 block mb-2">
                  100%
                </span>
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-1">
                  ITC Safeguarded
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                  Continuous 2-way and 3-way matching catches missing vendor filings early, preventing forfeiture of eligible input tax credit.
                </p>
              </div>
              <div className="pt-3 mt-4 border-t border-slate-100 dark:border-white/10 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5" /> GSTR-2B Rule 36(4) Guard
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -4 }} className="rounded-3xl p-6 bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 shadow-sm text-left flex flex-col justify-between">
              <div>
                <span className="font-display text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 block mb-2">
                  99.9%
                </span>
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-1">
                  First-Pass Accuracy
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                  140+ pre-filing validation rules prevent statutory notices, interest penalties, and return filing rejections.
                </p>
              </div>
              <div className="pt-3 mt-4 border-t border-slate-100 dark:border-white/10 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5" /> Zero Mismatch Errors
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -4 }} className="rounded-3xl p-6 bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 shadow-sm text-left flex flex-col justify-between">
              <div>
                <span className="font-display text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 block mb-2">
                  100%
                </span>
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-1">
                  Audit Readiness
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                  Permanent cryptographic audit trail maintains 8-year statutory record retention with one-click export capabilities.
                </p>
              </div>
              <div className="pt-3 mt-4 border-t border-slate-100 dark:border-white/10 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5" /> Departmental Audit Proof
              </div>
            </motion.div>

          </div>

          {/* Interactive Before vs After Comparison Switcher */}
          <div className="rounded-3xl p-6 sm:p-8 bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 shadow-xl mb-12 text-left">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-white/10 mb-6">
              <div>
                <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
                  Operational Comparison
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-sans">
                  Evaluate the stark transformation between manual GST handling and KnoovIQ SAP automation.
                </p>
              </div>

              {/* Toggle Buttons */}
              <div className="flex items-center p-1 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                <button
                  onClick={() => setImpactView('after')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    impactView === 'after'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  With Accelerated GST
                </button>
                <button
                  onClick={() => setImpactView('before')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    impactView === 'before'
                      ? 'bg-rose-600 text-white shadow-md'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  Traditional Manual GST
                </button>
              </div>
            </div>

            {/* View Content */}
            <AnimatePresence mode="wait">
              {impactView === 'after' ? (
                <motion.div
                  key="after"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                  <div className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/40 space-y-2">
                    <span className="font-mono text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase block">
                      Direct SAP Flow
                    </span>
                    <h4 className="font-display text-base font-bold text-slate-900 dark:text-white">
                      Automated Billing Ingestion
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                      Transactions flow directly from SAP billing documents into the tax engine with zero file downloads, copy-pasting, or external CSV preparation.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/40 space-y-2">
                    <span className="font-mono text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase block">
                      Intelligent Reconciliation
                    </span>
                    <h4 className="font-display text-base font-bold text-slate-900 dark:text-white">
                      Continuous 2B Auto-Matching
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                      Fuzzy algorithms continuously match vendor records against GSTR-2B, instantly highlighting missing vendor invoices and safeguarding 100% of input tax credit.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/40 space-y-2">
                    <span className="font-mono text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase block">
                      One-Click Filing
                    </span>
                    <h4 className="font-display text-base font-bold text-slate-900 dark:text-white">
                      Direct GSTN API Submission
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                      GSTR-1, 3B, and annual returns are prepared automatically with verified figures, signed digitally, and synced directly to the government portal.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="before"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                  <div className="p-4 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-800/40 space-y-2">
                    <span className="font-mono text-xs font-bold text-rose-700 dark:text-rose-400 uppercase block">
                      Manual Bottlenecks
                    </span>
                    <h4 className="font-display text-base font-bold text-slate-900 dark:text-white">
                      Error-Prone Spreadsheet Exports
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                      Finance teams spend days downloading Excel sheets from SAP, reformatting columns, and manually copying line items into government offline utilities.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-800/40 space-y-2">
                    <span className="font-mono text-xs font-bold text-rose-700 dark:text-rose-400 uppercase block">
                      ITC Leakage
                    </span>
                    <h4 className="font-display text-base font-bold text-slate-900 dark:text-white">
                      Unidentified Vendor Defaults
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                      Delayed or missing supplier filings go unnoticed until after the filing deadline, resulting in irreversible forfeiture of high-value input tax credit claims.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-800/40 space-y-2">
                    <span className="font-mono text-xs font-bold text-rose-700 dark:text-rose-400 uppercase block">
                      Statutory Notices
                    </span>
                    <h4 className="font-display text-base font-bold text-slate-900 dark:text-white">
                      Mismatches &amp; Interest Penalties
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                      Frequent discrepancies between GSTR-1, GSTR-3B, and general ledgers trigger scrutiny notices, departmental audits, and compounding late fees.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Final Call to Action Banner */}
          <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-blue-700 via-indigo-700 to-cyan-600 text-white shadow-2xl relative overflow-hidden text-center sm:text-left">
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-8">
              <div className="space-y-3 max-w-2xl">
                <span className="font-mono text-xs uppercase tracking-widest text-cyan-200 font-bold block">
                  READY FOR ENTERPRISE GST AUTOMATION?
                </span>
                <h3 className="font-display text-3xl sm:text-4xl font-black leading-tight">
                  Accelerate Your GST Compliance With KnoovIQ
                </h3>
                <p className="text-sm sm:text-base text-blue-100 font-sans leading-relaxed">
                  Join leading enterprises running zero-error, audit-proof GST compliance natively inside SAP. Speak with our certified solution architects today.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3.5 shrink-0">
                <button
                  onClick={() => onOpenContact('Accelerated GST Enterprise Implementation')}
                  className="px-8 py-4 rounded-2xl bg-white text-blue-800 hover:bg-slate-100 font-display text-xs font-bold uppercase tracking-wider shadow-xl flex items-center gap-2 cursor-pointer transition-all"
                >
                  <span>Talk to an Expert</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  onClick={() => onOpenContact('Accelerated GST Architecture Review')}
                  className="px-6 py-4 rounded-2xl border border-white/30 hover:bg-white/10 text-white font-display text-xs font-bold uppercase tracking-wider cursor-pointer transition-all"
                >
                  <span>Request Architecture Review</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
