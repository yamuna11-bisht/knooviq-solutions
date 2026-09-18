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
  Lock,
  Clock,
  TrendingUp,
  FileText,
  Check,
  Building2,
  Cpu,
  FileCheck2,
  XCircle,
  BarChart3,
  Users,
  Network,
  Award,
  Send,
  Handshake,
  AlertTriangle
} from 'lucide-react';

interface VendorManagementPageProps {
  onOpenContact: (topic?: string) => void;
}

export const VendorManagementPage: React.FC<VendorManagementPageProps> = ({ onOpenContact }) => {
  // Set document title
  useEffect(() => {
    document.title = 'Accelerated Vendor Management Solution | Knooviq Enterprise Solutions';
  }, []);

  // =========================================================================
  // STATE: Section 2 - 6-Stage Vendor Lifecycle Journey Auto-Cycle & Click Pause
  // =========================================================================
  const [activeJourneyIndex, setActiveJourneyIndex] = useState<number>(0);
  const journeyIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const journeyPauseTimerRef = useRef<NodeJS.Timeout | null>(null);

  const startJourneyAutoCycle = useCallback(() => {
    if (journeyIntervalRef.current) clearInterval(journeyIntervalRef.current);
    journeyIntervalRef.current = setInterval(() => {
      setActiveJourneyIndex((prev) => (prev + 1) % 6);
    }, 3200);
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
    }, 5500);
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
  const [activeArchLayer, setActiveArchLayer] = useState<'portal' | 'validation' | 'master' | 'procure' | 'invoice' | 'settlement'>('master');
  const archIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const archPauseTimerRef = useRef<NodeJS.Timeout | null>(null);

  const archLayerKeys: ('portal' | 'validation' | 'master' | 'procure' | 'invoice' | 'settlement')[] = useMemo(() => [
    'portal',
    'validation',
    'master',
    'procure',
    'invoice',
    'settlement'
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

  const handleArchLayerClick = (layerId: 'portal' | 'validation' | 'master' | 'procure' | 'invoice' | 'settlement') => {
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
  // DATA: Section 2 - 6-Stage Vendor Lifecycle Journey
  // =========================================================================
  const journeyStages = [
    {
      step: '01',
      title: 'Ingest & Invite',
      label: 'DIGITAL INTAKE DISPATCH',
      summary: 'Initiate encrypted supplier invitations mapped directly to plant categories and SAP Purchasing Organizations.',
      image: '/images/vendor_ingest_invite.png',
      tcode: 'SAP BP Initiation • RFQ / Sourcing Event',
      technicalDesc: 'Event-driven background dispatchers generate unique, 72-hour SHA-256 encrypted portal tokens. Pre-configures corporate terms, NDA covenants, and material groups directly tied to SAP Purchasing Organizations (EKORG) without unsecured email exchanges.',
      checkpoints: [
        'Single-click invitation dispatch with 72-hour tamper-evident encrypted token',
        'Direct mapping to SAP Purchasing Organization (EKORG) & Company Code (BUKRS)',
        'Granular category assignment across Raw Materials, Services, and Capital Goods'
      ]
    },
    {
      step: '02',
      title: 'Register',
      label: 'SELF-SERVICE REGISTRATION',
      summary: 'Guided digital supplier portal with automated GSTIN, MCA, and penny-drop banking master data capture.',
      image: '/images/vendor_register.png',
      tcode: 'Supplier Self-Service • MCA / GSTN Registry',
      technicalDesc: 'Vendors enter their credentials into a self-service portal. Real-time API listeners call government GSTN and MCA databases to automatically pre-fill legal name, registered address, and director details, while penny-drop automated testing verifies bank account ownership.',
      checkpoints: [
        'Real-time MCA and GSTIN master data lookup pre-populating 28+ entity attributes',
        'Zero-human-touch penny-drop bank account verification matching PAN records',
        'Automatic MSME / Udyam classification and enterprise category validation'
      ]
    },
    {
      step: '03',
      title: 'Verify & Validate',
      label: 'STATUTORY RISK SCREENING',
      summary: 'AI-driven OCR certificate validation, sanctions list screening, and real-time GST tax compliance checks.',
      image: '/images/vendor_verify_validate.png',
      tcode: 'Compliance Guard • OFAC / PEP / GSTN Checks',
      technicalDesc: 'Deep OCR extracts dates, certificate numbers, and entity names from ISO certificates, cancelled cheques, and tax clearances. Real-time background queries cross-screen directors and corporate entities against international OFAC, PEP, and domestic tax defaulter registries.',
      checkpoints: [
        '99.4% OCR confidence extraction of tax IDs, incorporation dates, and certificate expiries',
        'Automated screening against international OFAC, PEP, and domestic defaulter lists',
        'Proactive 30, 60, and 90-day statutory certificate expiration alert triggers'
      ]
    },
    {
      step: '04',
      title: 'Authorize',
      label: 'MULTI-TIER GOVERNANCE',
      summary: 'Configurable approval routing across Procurement, Legal, Tax, and Finance with automatic SAP BP creation.',
      image: '/images/vendor_authorize.png',
      tcode: 'SAP BP / XK01 • Business Partner Creation',
      technicalDesc: 'Dynamic approval matrices route supplier packets across cross-functional departments based on spend threshold and category risk. Upon final CFO authorization, the system programmatically generates the SAP Business Partner (BP) and populates LFA1/LFB1 master records.',
      checkpoints: [
        'Parallel cross-departmental approval workflow with strict SLA escalation rules',
        'One-click mobile and email authorization with cryptographic user fingerprinting',
        'Automated generation of SAP Business Partner (BP) and Vendor Master records'
      ]
    },
    {
      step: '05',
      title: 'Transact',
      label: 'PROCUREMENT COLLABORATION',
      summary: 'Real-time SAP Purchase Order delivery, Advance Shipping Notices (ASN), and automated 3-way invoice matching.',
      image: '/images/vendor_transact.png',
      tcode: 'SAP MM-PUR • ME21N / MIGO / MIRO',
      technicalDesc: 'Suppliers receive Purchase Orders (ME21N) directly in their portal, submit digital order acknowledgments, and generate Advance Shipping Notices (ASN) synchronized with E-Way Bill portals. Facilitates automated 3-way matching between PO, GRN (MIGO), and invoice line items.',
      checkpoints: [
        'Real-time PO dispatch, download, and digital acknowledgment from SAP MM',
        'Advance Shipping Notice (ASN) generation synchronized with E-Way Bill data',
        'Automated 3-way matching cross-checking PO (EKPO), GRN (MSEG), and Invoice (RSEG)'
      ]
    },
    {
      step: '06',
      title: 'Evaluate & Settle',
      label: 'OTIF SCORING & SETTLEMENT',
      summary: 'Data-driven supplier scorecards, automated OTIF rating, payment advice dispatch, and SAP financial settlement.',
      image: '/images/vendor_evaluate_settle.png',
      tcode: 'SAP FI-AP • FBL1N / ACDOCA Universal Journal',
      technicalDesc: 'Computes objective supplier performance indices from actual Goods Receipt timestamps and quality inspection lots (SAP QM). Automatically dispatches electronic payment advices upon invoice clearance and posts final tax and payment settlements into the SAP Universal Journal.',
      checkpoints: [
        'Algorithmic On-Time In-Full (OTIF) scoring derived from SAP Goods Receipt timestamps',
        'Quality rejection and return percentages automatically tracked against SAP QM lots',
        'Automated payment advice transmission and direct settlement into SAP ACDOCA ledger'
      ]
    }
  ];

  // =========================================================================
  // DATA: Section 3 - Core Enterprise Vendor Capabilities
  // =========================================================================
  const coreCapabilities = [
    {
      id: 'sap-clean-core',
      title: 'Native SAP S/4HANA & ECC Integration',
      subtitle: 'Clean Core Architecture',
      stat: 'Sub-second Sync',
      desc: 'Certified bidirectional integration with SAP Business Partner (BP), Vendor Master (XK01/XK02), and Purchase Orders (ME21N) with zero core modifications.',
      icon: Cpu,
      accent: 'from-blue-600 to-cyan-500',
      badge: 'Certified Clean Core',
      details: [
        'Real-time replication of SAP BP roles FLVN00 (FI Vendor) & FLVN01 (Purchasing)',
        'Zero disruption to standard ERP customizing tables and user exits',
        'Seamless support across SAP ECC 6.0 EhP7/8 and SAP S/4HANA Cloud/On-Prem'
      ]
    },
    {
      id: 'statutory-verification',
      title: 'Automated Statutory Identity Verification',
      subtitle: 'Zero-Human-Touch Intake',
      stat: '100% Verified',
      desc: 'Instantly validates supplier authenticity using direct government API gateways for GSTIN, PAN, Corporate CIN, and commercial banking rails.',
      icon: ShieldCheck,
      accent: 'from-cyan-500 to-blue-600',
      badge: 'Anti-Fraud Gateway',
      details: [
        'Real-time PAN-to-GSTIN reconciliation via authorized government tax gateways',
        'Automated penny-drop bank account validation confirming legal beneficiary name',
        'Active MCA21 corporate status and director verification queries'
      ]
    },
    {
      id: 'document-ocr-vault',
      title: 'AI Document OCR & Expiry Vault',
      subtitle: 'Cryptographic Document Store',
      stat: '99.4% Accuracy',
      desc: 'Extracts critical metadata from uploaded tax certificates, MSME documents, and agreements while scheduling automated statutory renewal triggers.',
      icon: FileCheck2,
      accent: 'from-indigo-600 to-blue-600',
      badge: 'Tamper-Proof Vault',
      details: [
        'Optical character recognition extracts tax numbers and validity dates automatically',
        'Proactive 30, 60, and 90-day renewal alerts sent across email and WhatsApp',
        'Immutable cryptographic SHA-256 document hashing meeting ISO 27001 standards'
      ]
    },
    {
      id: 'approval-orchestration',
      title: 'Configurable Multi-Tier Governance',
      subtitle: 'Dynamic Departmental Routing',
      stat: '1.8-Day Avg SLA',
      desc: 'Enforces cross-functional review matrices across Procurement, Tax, Finance, and Legal with strict SLA escalation and mobile one-tap approvals.',
      icon: Layers,
      accent: 'from-blue-600 to-indigo-600',
      badge: 'SLA Guarded',
      details: [
        'Dynamic approval routing based on vendor category, geography, and spend threshold',
        'One-click executive email and mobile authorization with timestamped audit trails',
        'Automated escalation alerts to category heads when review SLAs are breached'
      ]
    },
    {
      id: 'supplier-collaboration',
      title: 'Supplier Collaboration & Transaction Cockpit',
      subtitle: 'Unified Transactional Hub',
      stat: 'Zero Inquiries',
      desc: 'Dedicated self-service vendor portal providing real-time visibility into SAP Purchase Orders, dispatch acknowledgments, ASNs, and invoice payment statuses.',
      icon: Handshake,
      accent: 'from-emerald-600 to-teal-500',
      badge: 'Real-Time Sync',
      details: [
        'Live Purchase Order delivery, digital acknowledgment, and delivery schedule updates',
        'Advance Shipping Notice (ASN) dispatch linked to E-Way Bill generation',
        'Self-service invoice status and payment advice tracking eliminates inquiry calls'
      ]
    },
    {
      id: 'performance-scorecards',
      title: 'Objective OTIF & Performance Scorecards',
      subtitle: 'Data-Backed Appraisals',
      stat: '94% Composite Score',
      desc: 'Eliminates subjective vendor reviews with automated performance calculations derived from actual Goods Receipt (MIGO) timestamps and quality inspection lots.',
      icon: TrendingUp,
      accent: 'from-amber-500 to-orange-600',
      badge: 'Automated Scorecards',
      details: [
        'Automated On-Time In-Full (OTIF) ratings computed from SAP MIGO timestamps',
        'Defect and return percentages automatically tracked against SAP QM inspection lots',
        'Dynamic supplier tiering (Platinum, Gold, Silver) driving PO allocation weights'
      ]
    }
  ];

  // =========================================================================
  // DATA: Section 4 - SAP Integration Architecture Layers
  // =========================================================================
  const sapArchLayers = [
    {
      id: 'portal' as const,
      layer: 'Layer 01',
      title: 'Supplier Intake & Collaboration Portal',
      subtitle: 'Self-Service Web Tier & Token Engine',
      tcode: 'BTP Work Zone • Supplier Intake Portal',
      desc: 'Encrypted cloud entrypoint for vendors. Issues unique one-time onboarding tokens, captures structured company data, and facilitates secure document uploads with zero ERP attack surface.',
      sapObjects: ['SAP BTP Work Zone Portal Layer', 'OAuth 2.0 Identity Authentication Service (IAS)', 'SHA-256 Token Lifecycle & Invitation Manager']
    },
    {
      id: 'validation' as const,
      layer: 'Layer 02',
      title: 'Statutory Verification & Risk Gateway',
      subtitle: 'External Public API Verification',
      tcode: 'Public APIs • GSTN / MCA / NPCI Banking',
      desc: 'High-availability middleware microservices query government registries in real time. Verifies corporate CIN, active GSTIN filing status, PAN ownership, and bank account validity via penny drop.',
      sapObjects: ['GSTN Public Search API & Return Trackers', 'MCA21 Company & Director Master Connector', 'National NPCI / Banking IMPS API Adapters']
    },
    {
      id: 'master' as const,
      layer: 'Layer 03',
      title: 'Vendor Master & Business Partner Layer',
      subtitle: 'Central SAP BP Synchronization',
      tcode: 'SAP BP • FLVN00 / FLVN01 & Master Tables',
      desc: 'Reconciles approved vendor attributes and automatically creates or updates SAP Business Partner (BP) records. Populates standard financial and purchasing organization views without manual data entry.',
      sapObjects: ['BUT000 (BP General Master Data Header)', 'LFA1 / LFB1 (Vendor Master General & Company Code)', 'LFM1 / LFM2 (Purchasing Organization Data Views)']
    },
    {
      id: 'procure' as const,
      layer: 'Layer 04',
      title: 'Procurement & Purchase Order Flow',
      subtitle: 'SAP MM-PUR Transactional Integration',
      tcode: 'SAP MM-PUR • ME21N / ME22N / EKKO',
      desc: 'Streams approved SAP Purchase Orders into the supplier portal in real time. Captures digital order confirmations, tracks delivery milestones, and ingests Advance Shipping Notices (ASN).',
      sapObjects: ['EKKO / EKPO (Purchasing Document Header & Item)', 'EKET (Delivery Schedule Lines & Allocations)', 'VBLPA (Partner Roles in Commercial Deliveries)']
    },
    {
      id: 'invoice' as const,
      layer: 'Layer 05',
      title: 'Invoice 3-Way Matching & Verification',
      subtitle: 'Automated Cross-Verification Engine',
      tcode: 'SAP MM-IV • MIRO / RSEG / MIGO Cross-Check',
      desc: 'Automates 3-way invoice matching between supplier tax invoices, SAP Purchase Orders, and physical Goods Receipts (GRN). Flags line-item rate or quantity discrepancies outside tolerances.',
      sapObjects: ['RBKP / RSEG (Invoice Receipt Header & Item Lines)', 'MSEG (Goods Movement & Physical Delivery Items)', 'T007A / TAXINN (Statutory Tax Code Rules)']
    },
    {
      id: 'settlement' as const,
      layer: 'Layer 06',
      title: 'Spend Analytics & Settlement Ledgers',
      subtitle: 'Universal Journal (ACDOCA) & Analytics',
      tcode: 'SAP FI-AP & SAC • ACDOCA / FBL1N Postings',
      desc: 'Updates open and cleared vendor accounts payable ledgers, transmits automated payment advices upon clearance, and feeds live spend intelligence into SAP Analytics Cloud (SAC).',
      sapObjects: ['ACDOCA (Universal Journal Financial Ledger)', 'BSIK / BSAK (Vendor Open & Cleared Item Registers)', 'SAP Analytics Cloud (SAC) Spend Intelligence Views']
    }
  ];

  const currentArchLayer = sapArchLayers.find(l => l.id === activeArchLayer) || sapArchLayers[2];

  return (
    <div className="bg-[#F8FAFC] dark:bg-[#030712] text-slate-900 dark:text-white transition-colors duration-300 overflow-hidden font-sans">

      {/* =========================================================================
          SECTION 1 — HERO: Intelligent Vendor Management Accelerator
          Headline: “Smarter Vendor Operations. Seamless Governance.”
          Value Prop + Trust Metrics + Single Clean Large Image (NO DASHBOARDS/BOXES)
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
                <span>SAP S/4HANA &amp; ECC Vendor Management Accelerator</span>
              </motion.div>

              {/* Exact Headline */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-6"
              >
                Smarter Vendor Operations.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
                  Seamless Governance.
                </span>
              </motion.h1>

              {/* Supporting Text */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed font-sans mb-8 max-w-xl"
              >
                Accelerated Vendor Management brings supplier intake, statutory tax verification, automated 3-way compliance, and procurement collaboration into an integrated digital workflow—helping businesses eliminate supplier onboarding friction and manage vendor lifecycle processes with greater consistency.
              </motion.p>

              {/* Action CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8"
              >
                <button
                  onClick={() => onOpenContact('Accelerated Vendor Management Consultation')}
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
                  <span>SAP S/4HANA &amp; ECC 6.0 Certified</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Automated MCA &amp; GSTIN Verification</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Sub-Second Business Partner (BP) Sync</span>
                </div>
              </div>

            </div>

            {/* Right Column: Hero Visual - Clean High-Res Image (6 Cols, exactly like GST Hero) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-6 relative flex items-center justify-center"
            >
              {/* Backdrop Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-indigo-600/20 rounded-3xl blur-2xl opacity-50 pointer-events-none" />

              <div className="relative w-full max-w-[620px] h-[440px] sm:h-[480px] lg:h-[530px] rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-200/80 dark:border-cyan-500/40 bg-white flex items-center justify-center p-6 sm:p-10 group">
                <img
                  src="/images/vendor_lifecycle_diagram.png"
                  alt="Vendor Lifecycle Management Diagram"
                  className="w-full h-full object-contain object-center rounded-2xl group-hover:scale-105 transition-transform duration-700 select-none"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — THE VENDOR LIFECYCLE JOURNEY (6-Stage Interactive Execution)
          Flow: Ingest → Register → Verify → Authorize → Transact → Settle
          Real Stage Imagery + Concrete Technical Runbooks + 3.2s Auto-Cycle & 5.5s Pause
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
              From Supplier Intake to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
                Performance Excellence
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
              Trace how supplier information flows seamlessly from self-service onboarding into automated statutory validation, SAP Business Partner creation, and spend settlement.
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
                    onClick={() => onOpenContact(`Vendor Lifecycle Consultation: ${journeyStages[activeJourneyIndex].title}`)}
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
          SECTION 3 — CORE ENTERPRISE VENDOR CAPABILITIES
          6 Interactive Feature Cards with Rich Domain Substance & Specifics
          ========================================================================= */}
      <section id="capabilities" className="py-16 sm:py-20 relative bg-[#F8FAFC] dark:bg-[#030712] border-b border-slate-200/80 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-blue-500/30 shadow-sm mb-3">
              <Layers className="h-3.5 w-3.5 text-blue-600 dark:text-cyan-400" />
              <span>Built for Mission-Critical Supply Chain Governance</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              Enterprise Vendor{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
                Capabilities
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
              Enterprise-grade vendor management framework engineered to eliminate manual onboarding friction, ensure ironclad statutory compliance, and optimize procurement performance.
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
              Explore how KNOOVIQ Vendor Management Accelerator integrates directly with SAP ECC 6.0 and S/4HANA across all enterprise transactional layers.
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
                    onClick={() => onOpenContact(`SAP Architecture Deep Dive: ${currentArchLayer.title}`)}
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
          Stat Tiles + Interactive Before vs. After Switcher + Enterprise CTA Banner
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
              Replacing manual paper forms and disconnected spreadsheets with automated SAP vendor lifecycle governance generates tangible speed, eliminates compliance risks, and guarantees audit readiness.
            </p>
          </div>

          {/* 4 Large Impact Statistic Tiles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            
            <motion.div whileHover={{ y: -4 }} className="rounded-3xl p-6 bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 shadow-sm text-left flex flex-col justify-between">
              <div>
                <span className="font-display text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 block mb-2">
                  85%
                </span>
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-1">
                  Faster Vendor Onboarding
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                  Supplier intake cycle time reduced from 21 days to an average of 3.2 days with automated digital self-service.
                </p>
              </div>
              <div className="pt-3 mt-4 border-t border-slate-100 dark:border-white/10 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5" /> Benchmark: 21d down to 3.2d
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -4 }} className="rounded-3xl p-6 bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 shadow-sm text-left flex flex-col justify-between">
              <div>
                <span className="font-display text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-500 block mb-2">
                  70%
                </span>
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-1">
                  Less Manual Administrative Effort
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                  Automated OCR certificate parsing, penny-drop bank verification, and pre-populated master fields eliminate manual data entry.
                </p>
              </div>
              <div className="pt-3 mt-4 border-t border-slate-100 dark:border-white/10 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5" /> Zero Re-Keying into SAP XK01
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -4 }} className="rounded-3xl p-6 bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 shadow-sm text-left flex flex-col justify-between">
              <div>
                <span className="font-display text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 block mb-2">
                  96%
                </span>
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-1">
                  Continuous Statutory Compliance
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                  Active monitoring of GST return filing regularity and automatic sanctions screening protects against tax credit loss.
                </p>
              </div>
              <div className="pt-3 mt-4 border-t border-slate-100 dark:border-white/10 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5" /> 100% Tax Return Visibility
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -4 }} className="rounded-3xl p-6 bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 shadow-sm text-left flex flex-col justify-between">
              <div>
                <span className="font-display text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 block mb-2">
                  25%
                </span>
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-1">
                  Improvement in Delivery Accuracy
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                  Real-time On-Time In-Full (OTIF) scorecards and quality defect tracking drive accountability and tier incentives.
                </p>
              </div>
              <div className="pt-3 mt-4 border-t border-slate-100 dark:border-white/10 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5" /> Derived from SAP MIGO Receipts
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
                  Evaluate the stark transformation between manual vendor handling and KNOOVIQ SAP automation.
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
                  With Accelerated Vendor
                </button>
                <button
                  onClick={() => setImpactView('before')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    impactView === 'before'
                      ? 'bg-rose-600 text-white shadow-md'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  Traditional Manual Vendor
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
                      Direct Digital Intake
                    </span>
                    <h4 className="font-display text-base font-bold text-slate-900 dark:text-white">
                      3-Day Guided Onboarding
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                      Suppliers complete guided digital registration with automated GSTIN/PAN pre-filling, reducing onboarding cycle time by 85%.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/40 space-y-2">
                    <span className="font-mono text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase block">
                      Automated Verification
                    </span>
                    <h4 className="font-display text-base font-bold text-slate-900 dark:text-white">
                      Zero-Touch Bank &amp; Tax Checks
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                      Penny-drop testing validates account numbers and beneficiary names instantly, while continuous GST return tracking protects tax credit.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/40 space-y-2">
                    <span className="font-mono text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase block">
                      Native SAP Sync
                    </span>
                    <h4 className="font-display text-base font-bold text-slate-900 dark:text-white">
                      Automated BP Creation &amp; 3-Way Match
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                      Approved supplier data automatically generates SAP Business Partner (BP) and LFA1/LFB1 records with sub-second 3-way invoice matching.
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
                      Manual Paperwork
                    </span>
                    <h4 className="font-display text-base font-bold text-slate-900 dark:text-white">
                      3-Week Intake Delays
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                      Disconnected PDF forms and email exchanges drag onboarding out for 2 to 4 weeks, creating serious procurement bottlenecks.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-800/40 space-y-2">
                    <span className="font-mono text-xs font-bold text-rose-700 dark:text-rose-400 uppercase block">
                      Banking Errors &amp; Risk
                    </span>
                    <h4 className="font-display text-base font-bold text-slate-900 dark:text-white">
                      Manual Scanned Cheque Review
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                      Manual review of scanned cheques leads to typos in account numbers and frequent payment bounce-backs and vendor disputes.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-800/40 space-y-2">
                    <span className="font-mono text-xs font-bold text-rose-700 dark:text-rose-400 uppercase block">
                      Statutory Blindspots
                    </span>
                    <h4 className="font-display text-base font-bold text-slate-900 dark:text-white">
                      Unidentified Supplier Tax Defaults
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                      Delayed or missing vendor GST return filings go unnoticed until the annual audit, causing irreversible forfeiture of Input Tax Credit.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Final Call to Action Banner - Embedded cleanly inside Section 5 exactly like GST Page */}
          <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-blue-700 via-indigo-700 to-cyan-600 text-white shadow-2xl relative overflow-hidden text-center sm:text-left">
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-8">
              <div className="space-y-3 max-w-2xl">
                <span className="font-mono text-xs uppercase tracking-widest text-cyan-200 font-bold block">
                  READY FOR ENTERPRISE VENDOR AUTOMATION?
                </span>
                <h3 className="font-display text-3xl sm:text-4xl font-black leading-tight">
                  Accelerate Your Vendor Governance With KnoovIQ
                </h3>
                <p className="text-sm sm:text-base text-blue-100 font-sans leading-relaxed">
                  Join leading enterprises running zero-delay, audit-proof vendor management natively inside SAP. Speak with our certified solution architects today.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3.5 shrink-0">
                <button
                  onClick={() => onOpenContact('Accelerated Vendor Management Implementation')}
                  className="px-8 py-4 rounded-2xl bg-white text-blue-800 hover:bg-slate-100 font-display text-xs font-bold uppercase tracking-wider shadow-xl flex items-center gap-2 cursor-pointer transition-all"
                >
                  <span>Talk to an Expert</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  onClick={() => onOpenContact('Accelerated Vendor Management Architecture Review')}
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

export default VendorManagementPage;
