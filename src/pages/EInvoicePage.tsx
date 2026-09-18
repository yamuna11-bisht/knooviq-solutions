import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  QrCode, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  Layers, 
  Cpu, 
  Database, 
  BarChart3, 
  TrendingUp, 
  Clock, 
  Sparkles, 
  FileCheck, 
  Share2, 
  Archive, 
  Search, 
  AlertCircle, 
  Building2, 
  Users, 
  Receipt, 
  ChevronRight, 
  RefreshCw,
  Lock,
  Send,
  Eye,
  Activity,
  Check,
  X,
  Smartphone,
  ExternalLink,
  Laptop,
  HelpCircle
} from 'lucide-react';

interface EInvoicePageProps {
  onOpenContact: (topic?: string) => void;
}

export const EInvoicePage: React.FC<EInvoicePageProps> = ({ onOpenContact }) => {
  // State for Section 2 Journey Interactive Stage (2s auto-rotation, 5s click pause)
  const [activeJourneyIndex, setActiveJourneyIndex] = useState<number>(0);
  const journeyIntervalRef = React.useRef<NodeJS.Timeout | null>(null);
  const journeyPauseTimerRef = React.useRef<NodeJS.Timeout | null>(null);

  // Auto-cycle through the 6 journey stages every 2 seconds
  const startJourneyAutoCycle = React.useCallback(() => {
    if (journeyIntervalRef.current) clearInterval(journeyIntervalRef.current);
    journeyIntervalRef.current = setInterval(() => {
      setActiveJourneyIndex((prev) => (prev + 1) % 6);
    }, 2000);
  }, []);

  // On user manual click, pause rotation for 5 seconds on the clicked stage, then resume
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

  React.useEffect(() => {
    startJourneyAutoCycle();
    return () => {
      if (journeyIntervalRef.current) clearInterval(journeyIntervalRef.current);
      if (journeyPauseTimerRef.current) clearTimeout(journeyPauseTimerRef.current);
    };
  }, [startJourneyAutoCycle]);

  // State for Section 4 SAP Architecture Node (2s auto-rotation, 5s click pause)
  const [activeArchLayer, setActiveArchLayer] = useState<'sales' | 'billing' | 'tax' | 'customer' | 'einvoice' | 'accounting'>('billing');
  const archIntervalRef = React.useRef<NodeJS.Timeout | null>(null);
  const archPauseTimerRef = React.useRef<NodeJS.Timeout | null>(null);

  const archLayerKeys: ('sales' | 'billing' | 'tax' | 'customer' | 'einvoice' | 'accounting')[] = React.useMemo(() => [
    'sales',
    'billing',
    'tax',
    'customer',
    'einvoice',
    'accounting'
  ], []);

  // Auto-cycle through the 6 architecture layers every 2 seconds
  const startArchAutoCycle = React.useCallback(() => {
    if (archIntervalRef.current) clearInterval(archIntervalRef.current);
    archIntervalRef.current = setInterval(() => {
      setActiveArchLayer((current) => {
        const idx = archLayerKeys.indexOf(current);
        return archLayerKeys[(idx + 1) % archLayerKeys.length];
      });
    }, 2000);
  }, [archLayerKeys]);

  // On manual click, pause rotation for 5 seconds on the clicked layer, then resume 2s auto-cycle
  const handleArchLayerClick = (layerId: 'sales' | 'billing' | 'tax' | 'customer' | 'einvoice' | 'accounting') => {
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
    }, 5000);
  };

  React.useEffect(() => {
    startArchAutoCycle();
    return () => {
      if (archIntervalRef.current) clearInterval(archIntervalRef.current);
      if (archPauseTimerRef.current) clearTimeout(archPauseTimerRef.current);
    };
  }, [startArchAutoCycle]);

  // State for Section 5 Before/After Switcher
  const [impactView, setImpactView] = useState<'after' | 'before'>('after');

  // ==========================================
  // SECTION 2: Interactive Invoice Journey with Technical Depth & Imagery
  // Flow: Create → Validate → Authenticate → Generate → Share → Record
  // ==========================================
  const journeyStages = [
    {
      step: '01',
      title: 'Create',
      label: 'BILLING GENERATION',
      summary: 'SAP SD or FI Billing document triggered upon delivery or milestone approval.',
      image: '/images/einvoice-stage1-create.jpg',
      tcode: 'T-Codes: VF01 / VF02 / FB70',
      technicalDesc: 'When sales dispatch (VL02N) confirms PGI, standard billing creation runs. Our background event extractor parses header tables (VBRK) and line item tables (VBRP) into standard e-invoice data structures without requiring custom shadow tables.',
      checkpoints: [
        'Automatic trigger on SAP Billing Document Save',
        'Extracts Seller & Buyer master GSTIN, address and state code',
        'Captures HSN/SAC codes, item quantities, discounts & gross values'
      ]
    },
    {
      step: '02',
      title: 'Validate',
      label: 'SCHEMA PRE-AUDIT',
      summary: '200+ GSTN validation rules pre-screened in-memory to prevent government rejections.',
      image: '/images/einvoice-stage2-validate.jpg',
      tcode: 'Pre-Audit Rule Engine v1.03',
      technicalDesc: 'Validates mandatory fields against GSTN schema: Buyer GSTIN active check, pin code mapping with State code, HSN 6-to-8 digit minimum length for turnover > ₹5 Cr, and decimal rounding precision.',
      checkpoints: [
        'Live verification of buyer GSTIN active status',
        'Validates mathematical roundings across CGST, SGST & IGST',
        'Blocks duplicate invoice payloads before network transmission'
      ]
    },
    {
      step: '03',
      title: 'Authenticate',
      label: 'IRP HANDSHAKE',
      summary: 'Encrypted TLS 1.3 handshake with authorized Invoice Registration Portal (IRP/NIC).',
      image: '/images/einvoice-stage3-authenticate.jpg',
      tcode: 'API Gateway: HTTPS / REST OAuth 2.0',
      technicalDesc: 'Transmits signed JSON payloads directly to authorized IRP endpoints (NIC / ClearTax / Iris / Cygnet). Features multi-IRP auto-failover to ensure uninterrupted billing during peak month-end government server load.',
      checkpoints: [
        'Sub-200 millisecond round-trip response time',
        'Automated token caching and session key encryption',
        'Zero-downtime failover to secondary IRP servers'
      ]
    },
    {
      step: '04',
      title: 'Generate',
      label: 'IRN & QR CODE',
      summary: '64-character hash IRN and cryptographically signed QR code embedded into SAP.',
      image: '/images/einvoice-stage4-generate.jpg',
      tcode: 'Output: SmartForms / Adobe Forms',
      technicalDesc: 'Receives the unique 64-character Invoice Reference Number (IRN), digital signature string, and signed QR code. Automatically populates standard SAP tables (J_1IG_INVREFNUM) and dynamically renders high-DPI QR codes onto customer invoice PDFs.',
      checkpoints: [
        'Unique 64-character SHA-256 government hash generated',
        'Digitally signed 500-character B2B QR code attached',
        'Ready for instant mobile verification using official GST App'
      ]
    },
    {
      step: '05',
      title: 'Share',
      label: 'DIGITAL DELIVERY',
      summary: 'Automated multi-channel dispatch of digitally signed PDF & JSON to buyers.',
      image: '/images/einvoice-stage5-share.jpg',
      tcode: 'Dispatch: Automated SMTP & SFTP / Webhook',
      technicalDesc: 'Dispatches password-protected or signed PDFs via automated email to buyer finance teams, sends WhatsApp notifications for dispatch confirmations, and syncs directly into vendor collaboration portals for instantaneous input credit processing.',
      checkpoints: [
        'Automated customer email delivery with certified PDF',
        'Webhook triggers for customer ERP accounting integration',
        'Instant transporter copy generation for dispatch gate-pass'
      ]
    },
    {
      step: '06',
      title: 'Record',
      label: 'STATUTORY RECONCILIATION',
      summary: 'Auto-reconciles GSTR-1, generates E-Way Bill, and updates SAP General Ledger.',
      image: '/images/einvoice-stage6-record.jpg',
      tcode: 'Reconciliation: GSTR-1 & ACDOCA Universal Journal',
      technicalDesc: 'IRP automatically syncs e-invoice data into GSTN GSTR-1 Table 4A/4B and enables parallel Part-A/Part-B E-Way Bill generation with vehicle number assignment without re-entering consignment details.',
      checkpoints: [
        'Direct auto-population into GSTN GSTR-1 filing tables',
        'Single-payload parallel E-Way Bill (EWB) generation',
        'Complete audit-proof financial posting into SAP ACDOCA ledger'
      ]
    }
  ];

  // ==========================================
  // SECTION 3: 6 Core Capabilities Data
  // ==========================================
  const coreCapabilities = [
    {
      id: 'automated-generation',
      title: 'Automated Invoice Generation',
      subtitle: 'Native SAP SD/FI Triggering',
      stat: '0 Manual Steps',
      desc: 'Generates compliant e-invoices directly from standard SAP billing saves (VF01/FB70). Completely eliminates third-party file exports, CSV preparation, and offline utilities.',
      icon: Zap,
      accent: 'from-blue-600 to-cyan-500',
      badge: 'Native Integration',
      details: [
        'Works seamlessly on SAP S/4HANA (Cloud & On-Premise) & ECC 6.0',
        'Covers B2B Invoices, SEZ Sales, Deemed Exports & Job Work',
        'Handles Credit Notes, Debit Notes & Tax Adjustments'
      ]
    },
    {
      id: 'invoice-validation',
      title: 'Invoice Data Validation',
      subtitle: '200+ GST Pre-Screening Rules',
      stat: '99.9% First-Pass',
      desc: 'Proprietary in-memory validation engine checks 200+ GSTN schema rules, pin code-to-state matching, decimal tolerances, and active GSTIN status before sending to IRP.',
      icon: ShieldCheck,
      accent: 'from-cyan-600 to-teal-500',
      badge: 'Zero Rejections',
      details: [
        'Real-time GSTIN validity check via government API',
        'HSN length enforcement (min 6 digits for turnover > ₹5 Cr)',
        'Comprehensive mathematical reconciliation across line items'
      ]
    },
    {
      id: 'irn-qr-handling',
      title: 'IRN & QR Code Handling',
      subtitle: 'Sub-Second Stamping',
      stat: '< 200ms Latency',
      desc: 'Retrieves authorized 64-character hash (IRN) and digitally signed B2B QR codes, automatically mapping and embedding them into SAP SmartForms, Adobe Forms, or Fiori apps.',
      icon: QrCode,
      accent: 'from-indigo-600 to-blue-500',
      badge: 'NIC Certified',
      details: [
        'Stores IRN & digital signature in standard SAP tables',
        'Dynamic high-resolution 2D QR code rendering on printouts',
        'Compatible with official NIC verification scanning apps'
      ]
    },
    {
      id: 'gst-synchronization',
      title: 'GST Data Synchronization',
      subtitle: 'Auto GSTR-1 & E-Way Bill',
      stat: '100% Tax Match',
      desc: 'Synchronizes confirmed invoice payloads directly into GSTN GSTR-1 monthly filing tables while simultaneously initiating E-Way Bill generation using identical transportation data.',
      icon: RefreshCw,
      accent: 'from-emerald-600 to-teal-500',
      badge: 'Unified Compliance',
      details: [
        'Auto-populates GSTR-1 Tables 4A, 4B, 6B and 9B',
        'Simultaneous E-Way Bill Part-A and Part-B creation',
        'Eliminates month-end GSTR-1 vs sales register mismatches'
      ]
    },
    {
      id: 'status-tracking',
      title: 'Invoice Status Tracking',
      subtitle: 'Comprehensive SAP Cockpit',
      stat: 'Live Dashboard',
      desc: 'Monitor company-wide invoice lifecycles across multiple GSTINs and plants within an executive SAP cockpit with real-time status pills: Generated, Cancelled, or Exception.',
      icon: Eye,
      accent: 'from-amber-500 to-orange-500',
      badge: 'Real-Time Telemetry',
      details: [
        'Centralized monitor for plant dispatchers and finance heads',
        'One-click statutory IRN cancellation within 24-hour window',
        'Intelligent error diagnosis with actionable correction hints'
      ]
    },
    {
      id: 'digital-archiving',
      title: 'Digital Invoice Archiving',
      subtitle: 'Audit-Proof 8-Year Vault',
      stat: '8-Year Retention',
      desc: 'Cryptographically secures and archives all signed JSON payloads, PDF invoices, and communication audit logs to satisfy statutory GST record retention requirements.',
      icon: Archive,
      accent: 'from-purple-600 to-pink-500',
      badge: 'Audit Readiness',
      details: [
        'Tamper-evident SHA-256 cryptographic storage',
        'Instant search by IRN, GSTIN, Date, or Billing Doc Number',
        'Ready for tax authority inspection with one-click export'
      ]
    }
  ];

  // ==========================================
  // SECTION 4: SAP Integration Architecture Layers
  // ==========================================
  const sapArchLayers = [
    {
      id: 'sales' as const,
      layer: 'Layer 01',
      title: 'Sales Transactions',
      subtitle: 'SAP SD Sales Order & Delivery Outbound',
      tcode: 'SD (Sales & Distribution) • VL02N / VA01',
      desc: 'Sales orders and physical delivery notes capture commercial terms, Incoterms, customer ship-to locations, and transportation details. As soon as PGI is posted, billing trigger is queued.',
      sapObjects: ['VBAK / VBAP (Sales Header & Item)', 'LIKP / LIPS (Delivery Header & Item)', 'Ship-To Party Master (KNA1)']
    },
    {
      id: 'billing' as const,
      layer: 'Layer 02',
      title: 'Billing Data',
      subtitle: 'Native SAP Invoice Tables',
      tcode: 'SD-BIL • VF01 / VF02 / VF04',
      desc: 'Pulls header and item details directly from standard SAP billing tables without intermediate staging tables. Manages complex multi-item invoices, freight charges, and trade discounts.',
      sapObjects: ['VBRK (Billing Document Header)', 'VBRP (Billing Item Details)', 'KONV (Pricing Condition Records)']
    },
    {
      id: 'tax' as const,
      layer: 'Layer 03',
      title: 'Tax Information',
      subtitle: 'GST Calculation Engine',
      tcode: 'FI-TAX • TAXINN / Pricing Procedure',
      desc: 'Extracts exact tax determinations calculated by SAP condition types (JOIG, JOCG, JOSG, JIRX). Validates HSN/SAC codes, reverse charge mechanism (RCM), and applicable GST rate slabs (0%, 5%, 12%, 18%, 28%).',
      sapObjects: ['J_1BTAXCOD (Tax Calculation Structure)', 'A003 / KONP (Condition Records for Tax)', 'HSN / SAC Master Configuration']
    },
    {
      id: 'customer' as const,
      layer: 'Layer 04',
      title: 'Customer Information',
      subtitle: 'Business Partner / Buyer Master',
      tcode: 'BP / XD03 • Customer Master Data',
      desc: 'Validates buyer legal registered name, active 15-digit GSTIN, state code, PIN code, and Place of Supply (POS) rules to ensure 100% compliance with government recipient schema.',
      sapObjects: ['BUT000 / BUT020 (Business Partner Master)', 'KNA1 / KNVV (Customer Master Data)', 'Place of Supply (POS) Logic Engine']
    },
    {
      id: 'einvoice' as const,
      layer: 'Layer 05',
      title: 'E-Invoice System',
      subtitle: 'High-Speed BTP / RFC Middleware Connector',
      tcode: 'KNOOVIQ Core E-Invoice Engine',
      desc: 'Converts SAP internal structures into official NIC-compliant JSON payload (Schema 1.03), handles digital signature encryption, and communicates with IRP via secure OAuth 2.0 REST APIs in < 200ms.',
      sapObjects: ['Schema v1.03 Payload Formatter', 'OAuth 2.0 Token & Key Cache', 'Multi-IRP Failover Router']
    },
    {
      id: 'accounting' as const,
      layer: 'Layer 06',
      title: 'Accounting Records',
      subtitle: 'Universal Journal (ACDOCA) & AR',
      tcode: 'FI-CO • FB03 / FBL5N / ACDOCA',
      desc: 'Updates SAP financial ledgers with the confirmed IRN reference code, creates customer open items, posts statutory tax liability ledgers, and locks the invoice against unauthorized edits.',
      sapObjects: ['ACDOCA (Universal Journal Ledger)', 'BSID / BSAD (Customer Open & Cleared Items)', 'J_1IG_INVREFNUM (Official IRN Table)']
    }
  ];

  const currentArchLayer = sapArchLayers.find(l => l.id === activeArchLayer) || sapArchLayers[1];

  return (
    <div className="bg-[#F8FAFC] dark:bg-[#030712] text-slate-900 dark:text-white transition-colors duration-300 overflow-hidden">

      {/* =========================================================================
          SECTION 1 — HERO: Intelligent E-Invoicing with SAP
          Headline: “Smarter Invoicing. Seamless Compliance.”
          Supporting Text + CTA + Interactive Live E-Invoice Specimen with Photo Frame
          ========================================================================= */}
      <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-24 min-h-[580px] lg:min-h-[620px] flex items-center overflow-hidden bg-gradient-to-b from-white via-sky-50/40 to-[#F0F7FF] dark:from-[#030712] dark:via-[#071324] dark:to-[#0A1A30] border-b border-slate-200/80 dark:border-white/10">
        
        {/* Soft Ambient Colorful Radiant Glow */}
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
                <span>SAP S/4HANA & ECC E-Invoicing Accelerator</span>
              </motion.div>

              {/* Exact Headline */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-6"
              >
                Smarter Invoicing.{' '}
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
                Automate your enterprise invoice lifecycle directly inside SAP. Generate government-authorized IRN and signed QR codes in sub-seconds, eliminate manual errors, and maintain frictionless GST compliance.
              </motion.p>

              {/* Action CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8"
              >
                <button
                  onClick={() => onOpenContact('SAP E-Invoicing Solutions')}
                  className="btn-primary-gradient shimmer-sweep px-8 py-4 rounded-xl text-white font-display text-xs font-bold uppercase tracking-wider shadow-xl flex items-center justify-center gap-2.5 cursor-pointer hover:shadow-cyan-500/25 transition-all"
                >
                  <span>Talk to an E-Invoicing Expert</span>
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
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>NIC / IRP Authorized v1.03</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>&lt; 200ms IRN Latency</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Rule 48(4) Compliant</span>
                </div>
              </div>

            </div>

            {/* Right Column: Hero Image (6 Cols) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-6 relative flex items-center justify-center"
            >
              {/* Subtle ambient backdrop glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-indigo-600/20 rounded-3xl blur-2xl opacity-50 pointer-events-none" />

              <div className="relative w-full max-w-[560px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 dark:border-cyan-500/30 bg-[#020817] group">
                <img
                  src="/images/einvoice-hero.png"
                  alt="Intelligent SAP E-Invoicing & Compliance"
                  className="w-full h-auto object-cover rounded-3xl group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — FROM INVOICE CREATION TO DIGITAL DELIVERY
          Flow: Create → Validate → Authenticate → Generate → Share → Record
          Interactive Flowchart with Real Stage Imagery & Concrete Technical Runbooks
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
              From Invoice Creation to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
                Digital Delivery
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
              Trace how billing transactions flow effortlessly from SAP sales orders to government IRP authentication and customer inbox delivery.
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
                      Step
                    </span>
                  </div>
                  <span className="font-display text-sm font-bold block leading-tight">
                    {stage.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Stage Deep-Dive Showcase Card (Image + Technical Runbook) */}
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
                {/* Subtle bottom-only gradient for T-Code readability without darkening the main image */}
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

              {/* Right Column: Concrete Domain Details & Execution Checkpoints (7 Cols) */}
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
                  <span>Standard SAP S/4HANA & ECC Compliant</span>
                  <button
                    onClick={() => onOpenContact(`E-Invoice Stage Consultation: ${journeyStages[activeJourneyIndex].title}`)}
                    className="inline-flex items-center gap-1 font-bold text-blue-600 dark:text-cyan-400 hover:underline cursor-pointer"
                  >
                    <span>Request Architecture Details</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — CORE E-INVOICING CAPABILITIES
          6 Interactive Feature Cards with Rich Domain Substance & Specifics
          ========================================================================= */}
      <section id="capabilities" className="py-16 sm:py-20 relative bg-[#F8FAFC] dark:bg-[#030712] border-b border-slate-200/80 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-blue-500/30 shadow-sm mb-3">
              <Layers className="h-3.5 w-3.5 text-blue-600 dark:text-cyan-400" />
              <span>Built for Mission-Critical Finance Operations</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              Core E-Invoicing{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
                Capabilities
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
              High-availability architecture engineered to handle tens of thousands of invoices daily with zero government rejections.
            </p>
          </div>

          {/* 6 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreCapabilities.map((cap) => {
              const CapIcon = cap.icon;

              return (
                <motion.div
                  key={cap.id}
                  whileHover={{ y: -6, scale: 1.015 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-3xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-2xl hover:border-blue-500/40 transition-all text-left group"
                >
                  <div>
                    {/* Top Row: Icon, Tag & Metric */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${cap.accent} text-white flex items-center justify-center shadow-md group-hover:rotate-6 transition-transform`}>
                        <CapIcon className="h-5 w-5" />
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] font-mono font-bold text-blue-600 dark:text-cyan-400 block">
                          {cap.badge}
                        </span>
                        <span className="font-display text-xs font-bold text-slate-800 dark:text-slate-200">
                          {cap.stat}
                        </span>
                      </div>
                    </div>

                    <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                      {cap.title}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block mb-3 font-semibold">
                      {cap.subtitle}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed mb-5">
                      {cap.desc}
                    </p>
                  </div>

                  {/* Highlights Bulleted Details */}
                  <div className="pt-3.5 border-t border-slate-100 dark:border-white/10 space-y-2">
                    {cap.details.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2 text-xs font-mono text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="h-3.5 w-3.5 text-cyan-500 shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — SAP INTEGRATION — ONE CONNECTED INVOICE ECOSYSTEM
          Title: “Connected to SAP. Built for Business.”
          Creative Layered Architecture Matrix (Instead of standard circle diagram)
          ========================================================================= */}
      <section className="py-16 sm:py-20 relative bg-white dark:bg-[#070E1C] border-b border-slate-200/80 dark:border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-blue-50 dark:bg-cyan-950/40 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-cyan-500/30 shadow-sm mb-3">
              <Cpu className="h-3.5 w-3.5 text-blue-600 dark:text-cyan-400" />
              <span>Native SAP Integration Blueprint</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              Connected to SAP.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
                Built for Business.
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
              Understand how our e-invoicing architecture connects directly with sales orders, billing documents, tax calculations, customer masters, and the General Ledger.
            </p>
          </div>

          {/* Layered Architectural Layout (6 Connected SAP Business Nodes) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: 6 Interactive Architecture Layer Tabs (5 Cols) */}
            <div className="lg:col-span-5 space-y-2.5">
              {sapArchLayers.map((layer) => {
                const isSelected = activeArchLayer === layer.id;

                return (
                  <button
                    key={layer.id}
                    onClick={() => handleArchLayerClick(layer.id)}
                    className={`w-full p-4 rounded-2xl text-left border transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-blue-600 text-white border-blue-600 shadow-xl scale-102'
                        : 'bg-slate-50 dark:bg-[#0B1528] border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-blue-400'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-[10px] font-mono font-bold uppercase ${isSelected ? 'text-cyan-200' : 'text-blue-600 dark:text-cyan-400'}`}>
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
                      Native SAP Tables & Schema Objects
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
                  <span className="text-slate-400">Clean Core & BTP Extension Ready</span>
                  <button
                    onClick={() => onOpenContact(`SAP E-Invoicing Architecture: ${currentArchLayer.title}`)}
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
          SECTION 5 — BUSINESS IMPACT
          Large Visual Statistics & Animated Counters + Before vs After Comparison
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
              Replacing manual offline portal utilities with automated SAP e-invoicing creates immediate measurable speed, eliminates transcription errors, and guarantees seamless input tax credit for your customers.
            </p>
          </div>

          {/* 4 Large Impact Statistic Tiles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            
            <motion.div whileHover={{ y: -5 }} className="rounded-3xl p-6 bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 shadow-sm text-left flex flex-col justify-between">
              <div>
                <span className="font-display text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 block mb-2">
                  75%
                </span>
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-1">
                  Less Manual Processing
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                  Eliminates repetitive data entry, offline JSON tool uploading, and manual QR code pasting onto invoices.
                </p>
              </div>
              <div className="pt-3 mt-4 border-t border-slate-100 dark:border-white/10 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5" /> Direct SAP SD Automation
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="rounded-3xl p-6 bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 shadow-sm text-left flex flex-col justify-between">
              <div>
                <span className="font-display text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-500 block mb-2">
                  &lt; 200ms
                </span>
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-1">
                  Faster Invoice Lifecycle
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                  Sub-second roundtrip IRN generation and signed QR code delivery prevents warehouse dispatch gate-pass delays.
                </p>
              </div>
              <div className="pt-3 mt-4 border-t border-slate-100 dark:border-white/10 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5" /> High-Throughput REST APIs
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="rounded-3xl p-6 bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 shadow-sm text-left flex flex-col justify-between">
              <div>
                <span className="font-display text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 block mb-2">
                  99.9%
                </span>
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-1">
                  Higher Data Accuracy
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                  200+ in-memory validation rules pre-audit schema, HSN codes, and tax rates before IRP transmission.
                </p>
              </div>
              <div className="pt-3 mt-4 border-t border-slate-100 dark:border-white/10 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5" /> Zero Government Rejections
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="rounded-3xl p-6 bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 shadow-sm text-left flex flex-col justify-between">
              <div>
                <span className="font-display text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 block mb-2">
                  100%
                </span>
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-1">
                  Better Visibility
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                  Complete real-time audit trail from billing document creation to customer delivery and GSTR-1 matching.
                </p>
              </div>
              <div className="pt-3 mt-4 border-t border-slate-100 dark:border-white/10 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5" /> Full Audit Readiness
              </div>
            </motion.div>

          </div>

          {/* Interactive Before vs After Transformation Comparison Matrix */}
          <div className="rounded-3xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 p-6 sm:p-8 shadow-xl text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100 dark:border-white/10 mb-6">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase text-blue-600 dark:text-cyan-400">
                  OPERATIONAL TRANSFORMATION COMPARISON
                </span>
                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                  Manual Offline Process vs Automated SAP E-Invoicing
                </h3>
              </div>

              {/* View Toggle */}
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-[#07101E] border border-slate-200 dark:border-white/5 font-mono text-xs">
                <button
                  onClick={() => setImpactView('after')}
                  className={`px-3 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                    impactView === 'after' ? 'bg-emerald-600 text-white shadow' : 'text-slate-500'
                  }`}
                >
                  Automated SAP Model
                </button>
                <button
                  onClick={() => setImpactView('before')}
                  className={`px-3 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                    impactView === 'before' ? 'bg-rose-600 text-white shadow' : 'text-slate-500'
                  }`}
                >
                  Legacy Manual Model
                </button>
              </div>
            </div>

            {impactView === 'after' ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/40">
                  <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300 font-display font-bold text-sm mb-1">
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    <span>Real-Time Sub-Second IRN</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-mono">
                    Billing creation triggers instantaneous IRP API call. Truck drivers receive gate-pass with signed QR code immediately.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/40">
                  <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300 font-display font-bold text-sm mb-1">
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    <span>Zero Data Transcription</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-mono">
                    Direct mapping from SAP VBRK/VBRP tables. Eliminates CSV spreadsheets, offline JSON tools, and manual errors.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/40">
                  <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300 font-display font-bold text-sm mb-1">
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    <span>Automatic GSTR-1 & E-Way Bill</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-mono">
                    Single payload simultaneously creates e-invoice and Part-A E-Way Bill while auto-populating GSTR-1 return tables.
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-rose-50/70 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-800/40">
                  <div className="flex items-center gap-2 text-rose-700 dark:text-rose-300 font-display font-bold text-sm mb-1">
                    <X className="h-4 w-4 shrink-0" />
                    <span>15–30 Min Batch Delays</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-mono">
                    Accounts team extracts Excel sheets, converts to JSON manually, and uploads batches. Dispatches stall at warehouse gates.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-rose-50/70 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-800/40">
                  <div className="flex items-center gap-2 text-rose-700 dark:text-rose-300 font-display font-bold text-sm mb-1">
                    <X className="h-4 w-4 shrink-0" />
                    <span>Frequent Schema Rejections</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-mono">
                    Portal rejects invoices due to decimal rounding differences, inactive buyer GSTINs, or invalid HSN digit lengths.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-rose-50/70 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-800/40">
                  <div className="flex items-center gap-2 text-rose-700 dark:text-rose-300 font-display font-bold text-sm mb-1">
                    <X className="h-4 w-4 shrink-0" />
                    <span>Month-End Reco Nightmares</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-mono">
                    Sales register in SAP diverges from GSTR-1 portal numbers, risking audit penalties and delaying buyer Input Tax Credit.
                  </p>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6 — FINAL CTA — MAKE EVERY INVOICE SMARTER
          Headline: “Ready to Transform Your Invoicing Process?”
          Supporting text focusing on automation, SAP integration, visibility, compliance.
          CTA: “Talk to Our E-Invoicing Experts”
          Visual: Executive Finance Consultation Showcase (Zero Cross Lines)
          ========================================================================= */}
      <section className="py-16 sm:py-24 relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#EEF5FC] to-[#E0EDFB] dark:from-[#030712] dark:via-[#071324] dark:to-[#0A1B33] border-t border-slate-200/80 dark:border-white/10">
        
        {/* Soft Radiant Ambient Glow */}
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-400/15 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/15 dark:bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="rounded-3xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-cyan-500/30 shadow-2xl p-8 sm:p-12 lg:p-14 overflow-hidden relative">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              
              {/* Left Column: Heading, Copy & Action CTAs (7 Cols) */}
              <div className="lg:col-span-7 text-left space-y-6">
                
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-blue-50 dark:bg-cyan-950/50 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-cyan-500/30 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span>GST COMPLIANCE ACCELERATION</span>
                </div>

                {/* Exact Headline */}
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15]">
                  Ready to Transform Your{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
                    Invoicing Process?
                  </span>
                </h2>

                {/* Short Supporting Text */}
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-sans leading-relaxed max-w-xl">
                  Automate your enterprise invoice lifecycle with native SAP integration, sub-second IRN generation, real-time lifecycle visibility, and frictionless GST compliance.
                </p>

                {/* Action CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <button
                    onClick={() => onOpenContact('E-Invoicing Transformation Consultation')}
                    className="btn-primary-gradient shimmer-sweep px-8 py-4 rounded-xl text-white font-display text-xs font-bold uppercase tracking-wider shadow-xl flex items-center justify-center gap-2.5 cursor-pointer hover:shadow-cyan-500/25 transition-all"
                  >
                    <span>Talk to Our E-Invoicing Experts</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <Link
                    to="/solutions"
                    className="px-6 py-4 rounded-xl border border-slate-300 dark:border-white/20 bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-800 dark:text-white font-display text-xs font-bold uppercase tracking-wider transition-all text-center"
                  >
                    Explore SAP Solutions
                  </Link>
                </div>

                {/* 4 Trust Checkpoints */}
                <div className="pt-4 border-t border-slate-200/80 dark:border-white/10 grid grid-cols-2 gap-3 text-xs font-mono text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>NIC & IRP Direct Interface</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>&lt; 200ms IRN Latency</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>GSTR-1 Auto-Population</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>24/7 Dedicated Support</span>
                  </div>
                </div>

              </div>

              {/* Right Column: Invoicing Transformation Showcase Card (5 Cols) */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-cyan-500/30 shadow-2xl bg-white dark:bg-slate-900 transition-all text-left">
                  
                  {/* High-Clarity Visual Frame with Elegant Dark Border Shading */}
                  <div className="p-3.5 sm:p-4 bg-slate-100/60 dark:bg-slate-950/60 border-b border-slate-200/80 dark:border-white/10">
                    <div className="relative rounded-2xl overflow-hidden border border-slate-300/90 dark:border-slate-700/80 shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-center bg-[#397FB8]">
                      
                      <img
                        src="/images/einvoice-transform-process.png"
                        alt="Connected B2B E-Invoicing & Automated SAP Lifecycle Ecosystem"
                        className="w-full h-auto max-h-[340px] sm:max-h-[380px] object-contain hover:scale-[1.02] transition-transform duration-500"
                      />
                      
                      {/* Dark Border Shading (Inner Vignette along all 4 edges) */}
                      <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_0_32px_rgba(15,23,42,0.28),inset_0_0_12px_rgba(15,23,42,0.18)] border border-slate-400/40" />
                    </div>
                  </div>

                  {/* Consultation Card Content & Implementation Guarantee */}
                  <div className="p-5 space-y-3 bg-slate-50/80 dark:bg-slate-950">
                    <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 space-y-2 shadow-xs">
                      <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase font-bold block">Implementation Guarantee</span>
                      <div className="text-xs font-mono text-slate-700 dark:text-slate-200 space-y-1.5">
                        <div className="flex items-center gap-2">
                          <Check className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                          <span>3-Week Rapid Go-Live for SAP ECC / S/4HANA</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                          <span>Zero Core Modification (Clean Core Architecture)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                          <span>100% Tax Reconciliation with GSTR-2B & GSTR-1</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400 pt-1">
                      <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                        <ShieldCheck className="h-4 w-4" />
                        NIC & GSTN Certified
                      </span>
                      <span>Bank-Grade TLS 1.3</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default EInvoicePage;
