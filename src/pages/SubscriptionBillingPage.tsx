import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  Play,
  Pause,
  Terminal,
  Radio,
  Eye,
  Info,
  X,
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
  CreditCard,
  RotateCw,
  Workflow,
  Sliders,
  Award,
  Globe
} from 'lucide-react';

interface SubscriptionBillingPageProps {
  onOpenContact: (topic?: string) => void;
}

export const SubscriptionBillingPage: React.FC<SubscriptionBillingPageProps> = ({ onOpenContact }) => {
  // Set document title
  useEffect(() => {
    document.title = 'Subscription Billing Solution | KNOOVIQ Enterprise Products';
  }, []);

  // =========================================================================
  // STATE: Section 2 - 6-Stage Subscription Lifecycle Journey (1s Auto-Cycle, 5s Click-Pause)
  // =========================================================================
  const [activeJourneyIndex, setActiveJourneyIndex] = useState<number>(0);
  const [activeHotspotId, setActiveHotspotId] = useState<string | null>(null);
  const [activeCapId, setActiveCapId] = useState<string>('pricing-models');
  const [pricingSandboxTab, setPricingSandboxTab] = useState<'flat' | 'tiered' | 'metered' | 'hybrid'>('flat');
  const journeyIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const journeyPauseTimerRef = useRef<NodeJS.Timeout | null>(null);

  const startJourneyAutoCycle = useCallback(() => {
    if (journeyIntervalRef.current) clearInterval(journeyIntervalRef.current);
    journeyIntervalRef.current = setInterval(() => {
      setActiveJourneyIndex((prev) => (prev + 1) % 6);
      setActiveHotspotId(null);
    }, 1000);
  }, []);

  const stopJourneyAutoCycle = useCallback(() => {
    if (journeyIntervalRef.current) {
      clearInterval(journeyIntervalRef.current);
      journeyIntervalRef.current = null;
    }
    if (journeyPauseTimerRef.current) {
      clearTimeout(journeyPauseTimerRef.current);
      journeyPauseTimerRef.current = null;
    }
  }, []);

  const handleJourneyStageClick = (index: number) => {
    setActiveJourneyIndex(index);
    setActiveHotspotId(null);
    stopJourneyAutoCycle();
    journeyPauseTimerRef.current = setTimeout(() => {
      startJourneyAutoCycle();
    }, 5000);
  };

  useEffect(() => {
    startJourneyAutoCycle();
    return () => {
      stopJourneyAutoCycle();
    };
  }, [startJourneyAutoCycle, stopJourneyAutoCycle]);

  // =========================================================================
  // STATE: Section 4 - 5-Layer Cloud Architecture Auto-Cycle & Click Pause
  // =========================================================================
  const archLayerKeys: Array<'telemetry' | 'rating' | 'invoicing' | 'settlement' | 'erp'> = [
    'telemetry',
    'rating',
    'invoicing',
    'settlement',
    'erp'
  ];
  const [activeArchLayer, setActiveArchLayer] = useState<'telemetry' | 'rating' | 'invoicing' | 'settlement' | 'erp'>('rating');
  const archIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const archPauseTimerRef = useRef<NodeJS.Timeout | null>(null);

  const startArchAutoCycle = useCallback(() => {
    if (archIntervalRef.current) clearInterval(archIntervalRef.current);
    archIntervalRef.current = setInterval(() => {
      setActiveArchLayer((current) => {
        const idx = archLayerKeys.indexOf(current);
        return archLayerKeys[(idx + 1) % archLayerKeys.length];
      });
    }, 3800);
  }, [archLayerKeys]);

  const handleArchLayerClick = (layerId: 'telemetry' | 'rating' | 'invoicing' | 'settlement' | 'erp') => {
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
  // DATA: Section 2 - 6-Stage Subscription Lifecycle Journey
  // =========================================================================
  const journeyStages = [
    {
      step: '01',
      title: 'Contract & Activation',
      label: 'TENANT & PLAN PROVISIONING',
      summary: 'Initiate commercial subscription contracts with localized pricing matrices, trial periods, and SAP SOM integration.',
      image: '/images/billing_lifecycle_workflow.jpg',
      tcode: 'SAP SOM • Subscription Order Management / BP',
      statusChip: 'PROVISIONED',
      chipColor: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
      technicalDesc: 'Event-driven background listeners capture confirmed customer orders and commercial terms. Automatically provisions tenant accounts, binds contracted rate plans, sets billing anchor dates, and initializes contract items in SAP S/4HANA Finance without manual data reentry.',
      checkpoints: [
        'Automated contract binding with custom discount conditions and grandfathered tiers',
        'Direct mapping to SAP Business Partner (BP) and Contract Accounts (VKONT)',
        'Support for multi-entity corporate hierarchies and localized tax residency rules'
      ],
      simulatedEvent: {
        eventType: 'CONTRACT_ACTIVATED',
        statusBadge: '201 CREATED',
        latency: '14ms',
        payload: {
          event: 'CONTRACT_ACTIVATED',
          tenant_id: 'TENANT_ACRO_8942',
          contract_type: 'Enterprise Annual Tier',
          billing_anchor: 'Day 01 (Monthly)',
          sap_bp_id: 'BP-77401',
          rate_plan: 'Cloud-ERP-Enterprise'
        }
      },
      hotspots: [
        {
          id: 's1-h1',
          x: 22,
          y: 28,
          title: 'SOM Order Intake Engine',
          sapContext: 'SAP SOM • Contract Creation',
          desc: 'Captures commercial contract terms, multi-tier pricing schedules, and customer legal entity IDs directly into master records.'
        },
        {
          id: 's1-h2',
          x: 58,
          y: 44,
          title: 'Business Partner Provisioning',
          sapContext: 'SAP BP & Contract Account (VKONT)',
          desc: 'Automatically sets up financial business partners, payment terms, and connects corporate parent-subsidiary billing accounts.'
        },
        {
          id: 's1-h3',
          x: 80,
          y: 68,
          title: 'Tenant Entitlement Engine',
          sapContext: 'Cloud Service Provisioning Bus',
          desc: 'Generates API keys, provisions cloud tenant seat quotas, and configures feature access flags within seconds of contract signing.'
        }
      ]
    },
    {
      step: '02',
      title: 'Usage Rating & Mediation',
      label: 'REAL-TIME TELEMETRY RATING',
      summary: 'High-speed ingestion bus rating millions of daily consumption records, API calls, and compute hours with zero clock drift.',
      image: '/images/billing_hero_visual.jpg',
      tcode: 'SAP CC • Convergent Charging / BTP Event Mesh',
      statusChip: 'RATING <180ms',
      chipColor: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/30',
      technicalDesc: 'High-throughput event mediation engine ingests raw consumption telemetry via Kafka and REST endpoints. Automatically deduplicates, validates, and rates events in sub-seconds against contracted tier thresholds, pre-calculating unbilled accrued revenue.',
      checkpoints: [
        'Sub-second rating processing 100,000+ raw usage events per minute',
        'Dynamic volume bracket calculations with automated tiered overage ratings',
        'Real-time unbilled consumption balance tracking visible in customer portals'
      ],
      simulatedEvent: {
        eventType: 'TELEMETRY_RATED',
        statusBadge: '200 STREAMING',
        latency: '38ms',
        payload: {
          event: 'TELEMETRY_RATED',
          throughput: '142,500 events/min',
          active_tier: 'Enterprise Tier 3',
          rating_engine: 'SAP CC Convergent Charging',
          unbilled_status: 'Accrued to Ledger',
          duplicate_drops: 0
        }
      },
      hotspots: [
        {
          id: 's2-h1',
          x: 24,
          y: 32,
          title: 'Kafka Telemetry Listener',
          sapContext: 'SAP BTP Event Mesh & Kafka',
          desc: 'Ingests high-volume usage events, storage metrics, and API executions with guaranteed ordering and deduplication.'
        },
        {
          id: 's2-h2',
          x: 54,
          y: 46,
          title: 'Dynamic Rating Matrix',
          sapContext: 'SAP CC • Convergent Charging',
          desc: 'Applies complex multi-dimensional rating algorithms in sub-seconds (<180ms) according to custom customer discount tiers.'
        },
        {
          id: 's2-h3',
          x: 78,
          y: 65,
          title: 'Entitlement & Quota Watcher',
          sapContext: 'SAP Entitlement Management',
          desc: 'Compares real-time usage meters against contract caps, firing webhooks for automated burst capacity and proactive sales alerts.'
        }
      ]
    },
    {
      step: '03',
      title: 'Consolidated Invoicing',
      label: 'STATUTORY COMPLIANT E-BILLING',
      summary: 'Combine recurring subscription fees, hardware leases, and rated consumption meters into single tax-audited invoices.',
      image: '/images/billing_architecture_workflow.jpg',
      tcode: 'SAP CI • Convergent Invoicing / Tax Engine',
      statusChip: 'IRN STAMPED',
      chipColor: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30',
      technicalDesc: 'Consolidates fixed recurring charges and variable rated consumption into one clean, transparent corporate invoice. Automatically applies GST/VAT/Sales Tax rate slabs, embeds mandatory government e-invoicing QR stamps, and generates secure customer PDFs.',
      checkpoints: [
        'Single consolidated billing document combining fixed commitments and metered usage',
        'Automatic Place of Supply (POS) and cross-border statutory tax validation',
        'Direct generation of PDF invoices with embedded QR stamps and payment links'
      ],
      simulatedEvent: {
        eventType: 'INVOICE_COMPILED',
        statusBadge: '200 OK',
        latency: '82ms',
        payload: {
          event: 'INVOICE_COMPILED',
          invoice_id: 'INV-2026-0891',
          base_plan: 'Enterprise Core License',
          metered_usage: 'Telemetry Units Rated',
          tax_slab: 'GST 18% (Place of Supply Verified)',
          irn_hash: 'c8f9...39a1',
          status: 'PDF_READY'
        }
      },
      hotspots: [
        {
          id: 's3-h1',
          x: 25,
          y: 30,
          title: 'Document Aggregator',
          sapContext: 'SAP CI • Convergent Invoicing',
          desc: 'Consolidates multi-stream line items (subscriptions, hardware leases, and metered API consumption) into a unified bill.'
        },
        {
          id: 's3-h2',
          x: 52,
          y: 48,
          title: 'Tax Determination Gateway',
          sapContext: 'Statutory GST/VAT Engine',
          desc: 'Calculates compliant domestic and cross-border tax slabs using Place of Supply (POS) rules with real-time tax validation.'
        },
        {
          id: 's3-h3',
          x: 76,
          y: 66,
          title: 'E-Invoice Dispatch & IRN',
          sapContext: 'Govt E-Invoicing & QR Code',
          desc: 'Transmits encrypted invoices directly to tax authority portals and stamps returned IRN tokens onto customer-facing PDFs.'
        }
      ]
    },
    {
      step: '04',
      title: 'Payment & Settlement',
      label: 'MULTI-GATEWAY RECONCILIATION',
      summary: 'Automated multi-currency card captures, direct debits, and smart dunning retry cascades with open AR settlement.',
      image: '/images/billing_lifecycle_workflow.jpg',
      tcode: 'SAP FI-CA • Contract Accounts Receivables / PSP Switch',
      statusChip: 'SEPA CLEARED',
      chipColor: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
      technicalDesc: 'Smart payment router connects to global PSP gateways (Stripe, Adyen, Razorpay, SEPA/NACHA). Executes automated recurring charges, tokenized card captures, and manages intelligent dunning schedules that minimize involuntary payment failures.',
      checkpoints: [
        '99.4% automated first-pass payment capture with multi-gateway failover',
        'Configurable smart dunning retry cascades with automated reminder notifications',
        'Automated clearing of customer open items directly in SAP FI-CA ledgers'
      ],
      simulatedEvent: {
        eventType: 'SETTLEMENT_CLEARED',
        statusBadge: '200 SETTLED',
        latency: '115ms',
        payload: {
          event: 'SETTLEMENT_CLEARED',
          psp_gateway: 'SEPA Direct Debit B2B',
          captured_status: 'Settlement Confirmed',
          auth_code: 'AUTH_SEPA_9921',
          fica_clearing_doc: 'DOC-9011024',
          open_ar_balance: 'Fully Reconciled'
        }
      },
      hotspots: [
        {
          id: 's4-h1',
          x: 22,
          y: 34,
          title: 'PSP Smart Router',
          sapContext: 'Multi-Gateway Switch',
          desc: 'Directs payments across global payment rails (Stripe, Adyen, SEPA, NACHA) with automatic fallbacks to maximize capture rates.'
        },
        {
          id: 's4-h2',
          x: 56,
          y: 45,
          title: 'Smart Dunning Cascade',
          sapContext: 'Involuntary Churn Prevention',
          desc: 'Executes timed retry cadences for soft declines, reducing involuntary payment churn by up to 48% through machine learning timing.'
        },
        {
          id: 's4-h3',
          x: 78,
          y: 68,
          title: 'FI-CA Subledger Clearing',
          sapContext: 'SAP FI-CA Contract Accounts',
          desc: 'Automatically clears customer open AR line items, matches settlement payouts to bank statements, and reconciles fees.'
        }
      ]
    },
    {
      step: '05',
      title: 'S/4HANA Accounting Sync',
      label: 'ASC 606 & IFRS 15 COMPLIANCE',
      summary: 'Post real-time journal entries into SAP ACDOCA, automating revenue recognition schedules and balance reconciliation.',
      image: '/images/billing_transformation_impact.jpg',
      tcode: 'SAP FI-CO • ACDOCA Universal Journal / RAR',
      statusChip: 'ACDOCA POSTED',
      chipColor: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/30',
      technicalDesc: 'Eliminates end-of-month manual spreadsheet reconciliation. Automatically amortizes upfront annual commitments, creates contract asset/liability schedules compliant with IFRS 15 and ASC 606, and posts balanced journal entries into SAP general ledgers.',
      checkpoints: [
        'Automated revenue recognition amortization conforming to IFRS 15 / ASC 606 mandates',
        'Real-time synchronization with SAP ACDOCA Universal Journal and profitability segments',
        'Zero-touch reconciliation between customer billing history and financial audit trails'
      ],
      simulatedEvent: {
        eventType: 'ACDOCA_POSTED',
        statusBadge: '200 POSTED',
        latency: '62ms',
        payload: {
          event: 'ACDOCA_POSTED',
          leading_ledger: '0L (S/4HANA)',
          compliance_std: 'IFRS 15 / ASC 606',
          rev_recognized: 'Period Schedule Active',
          deferred_liability: 'Amortization Balanced',
          gl_account: 'GL-400100 (SaaS ARR)',
          balanced: true
        }
      },
      hotspots: [
        {
          id: 's5-h1',
          x: 24,
          y: 30,
          title: 'RevRec Amortization Engine',
          sapContext: 'SAP RAR • Revenue Accounting',
          desc: 'Decouples billing events from revenue recognition, automatically generating straight-line or milestone amortization schedules.'
        },
        {
          id: 's5-h2',
          x: 54,
          y: 50,
          title: 'Universal Journal ACDOCA',
          sapContext: 'SAP S/4HANA Finance Central Ledger',
          desc: 'Posts real-time, multi-currency debit/credit journal entries directly into the SAP Universal Journal with full transaction lineage.'
        },
        {
          id: 's5-h3',
          x: 78,
          y: 66,
          title: 'Profitability Segment Analyzer',
          sapContext: 'SAP CO-PA Segment Margin',
          desc: 'Supplies real-time gross margin, customer acquisition cost (CAC) payback, and net revenue retention (NRR) data to finance leaders.'
        }
      ]
    },
    {
      step: '06',
      title: 'Renewal & Continuity',
      label: 'LIFECYCLE EXPANSION & RETENTION',
      summary: 'Automate contract rollovers, co-terming additions, price indexation adjustments, and involuntary churn mitigation.',
      image: '/images/billing_closing_ecosystem.jpg',
      tcode: 'Subscription Lifecycle • Evergreen Rollover & Retention',
      statusChip: 'ROLLOVER ACTIVE',
      chipColor: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30',
      technicalDesc: 'Predictive renewal workflows monitor expiring contract terms and customer usage patterns. Automatically triggers evergreen rollovers, executes contracted inflation indexation escalations, and flags expansion opportunities for client success teams.',
      checkpoints: [
        'Zero-human-touch evergreen contract renewals with pre-configured notification windows',
        'Intelligent co-terming of mid-cycle seat additions and modular enterprise add-ons',
        'Proactive churn detection algorithms triggering timely retention incentives'
      ],
      simulatedEvent: {
        eventType: 'EVERGREEN_ROLLOVER',
        statusBadge: '200 EXTENDED',
        latency: '24ms',
        payload: {
          event: 'EVERGREEN_ROLLOVER',
          contract_extension: 'Year 2 Active',
          anniversary_date: '2027-01-01',
          indexation_applied: '+3.5% CPI Adjustment',
          continuity_metric: 'Full Retention Projected',
          continuity_status: 'UNINTERRUPTED'
        }
      },
      hotspots: [
        {
          id: 's6-h1',
          x: 22,
          y: 32,
          title: 'Predictive Renewal Health Radar',
          sapContext: 'Customer Telemetry AI',
          desc: 'Monitors consumption velocity 60 days before contract expiry to predict churn risk and guide proactive customer success outreach.'
        },
        {
          id: 's6-h2',
          x: 52,
          y: 46,
          title: 'Evergreen Rollover Bus',
          sapContext: 'Contract Continuity Orchestrator',
          desc: 'Automatically extends agreements into their next billing period with pre-negotiated CPI indexation and tier escalations.'
        },
        {
          id: 's6-h3',
          x: 80,
          y: 64,
          title: 'Co-Terming Expansion Engine',
          sapContext: 'Mid-Term Entitlement Proration',
          desc: 'Aligns newly purchased seats or modules with the customer’s existing contract anniversary date, eliminating separate billing cycles.'
        }
      ]
    }
  ];

  // =========================================================================
  // DATA: Section 3 - Core Enterprise Capabilities (6 Strategic Pillars)
  // =========================================================================
  const coreCapabilities = [
    {
      id: 'pricing-models',
      title: 'Adaptive Multi-Model Pricing',
      subtitle: '4-in-1 Rating Engine',
      stat: '4 Models in 1',
      desc: 'Deploy flat recurring fees, tiered volume tiers, dynamic consumption rating, and hybrid enterprise contracts from a single unified pricing catalog without writing custom code.',
      icon: Sliders,
      accent: 'from-blue-600 to-cyan-500',
      badge: 'Unified Engine',
      details: [
        'Recurring seat-based, flat platform fees, and prepaid credit drawdowns',
        'Graduated and volume-bracketed pricing tiers with custom threshold discounts',
        'Hybrid enterprise packages combining baseline commitments and metered overages'
      ]
    },
    {
      id: 'event-mediation',
      title: 'High-Throughput Telemetry Mediation',
      subtitle: 'Sub-Second Event Rating',
      stat: '100k+ Events/Min',
      desc: 'High-speed ingestion bus that collects, deduplicates, and rates millions of raw telemetry signals in real-time, calculating instant unbilled balances and preventing revenue leakage.',
      icon: Zap,
      accent: 'from-cyan-600 to-teal-500',
      badge: 'Real-Time Telemetry',
      details: [
        'Event-driven Kafka and REST API listeners for high-frequency consumption streams',
        'Automated deduplication and anomaly filtering preventing fraudulent usage spikes',
        'Continuous synchronization with customer-facing usage counters and budget alert limits'
      ]
    },
    {
      id: 'e-invoicing',
      title: 'Automated Compliant Invoicing',
      subtitle: 'Multi-Jurisdiction Tax & QR',
      stat: '100% Tax Compliant',
      desc: 'Eliminates billing errors by calculating localized tax liabilities (GST, VAT, Sales Tax) and generating electronic billing documents with QR stamps directly integrated with SAP.',
      icon: FileText,
      accent: 'from-indigo-600 to-blue-500',
      badge: 'Statutory Defense',
      details: [
        'Direct calculation of Place of Supply (POS) rules and cross-border withholding tax',
        'Embedded government e-invoicing QR codes and cryptographic IRN stamping',
        'Multi-currency PDF generation with automated customer portal dispatch'
      ]
    },
    {
      id: 'payment-dunning',
      title: 'Multi-Gateway Settlement & Dunning',
      subtitle: 'Smart Recovery Cascade',
      stat: '99.4% Settlement',
      desc: 'Global payment gateway routing with tokenized credit card captures, automated SEPA/ACH direct debits, and intelligent dunning workflows that recover failed payments automatically.',
      icon: CreditCard,
      accent: 'from-emerald-600 to-cyan-500',
      badge: 'Smart Liquidity',
      details: [
        'Tokenized PCI-DSS compliant vaulting across major global PSP switches',
        'Intelligent multi-stage dunning retry cascades reducing involuntary churn by 35%',
        'Instant automated reconciliation with SAP FI-CA accounts receivables ledgers'
      ]
    },
    {
      id: 'sap-brim',
      title: 'Native SAP S/4HANA & BRIM Sync',
      subtitle: 'Clean-Core Architecture',
      stat: '0 Manual Sheets',
      desc: 'Built natively for SAP S/4HANA (Cloud & On-Premise) and ECC 6.0. Seamlessly interfaces with SAP Billing and Revenue Innovation Management (BRIM) components via clean BTP APIs.',
      icon: Database,
      accent: 'from-blue-700 to-indigo-600',
      badge: 'Native Architecture',
      details: [
        'Direct two-way synchronization with standard SAP SD, MM, and FI-CA tables',
        'Pre-built SAP BTP Integration Suite packages ensuring zero-downtime deployment',
        'Unified customer 360-degree view linking CRM, billing contracts, and ERP accounting'
      ]
    },
    {
      id: 'rev-recognition',
      title: 'ASC 606 & IFRS 15 Revenue Recognition',
      subtitle: 'Automated Audit Ledgers',
      stat: '100% Audit-Ready',
      desc: 'Automates complex multi-element revenue allocation, contract asset/liability schedules, and monthly amortization postings directly into the SAP ACDOCA Universal Journal.',
      icon: ShieldCheck,
      accent: 'from-purple-600 to-blue-600',
      badge: 'Statutory Compliance',
      details: [
        'Automated allocation of standalone selling prices (SSP) for bundled contracts',
        'Real-time contract asset and deferred revenue balance sheets maintained in SAP',
        'Full compliance reporting ready for external statutory auditors without manual rework'
      ]
    }
  ];

  // =========================================================================
  // DATA: Section 4 - 5-Layer Cloud Architecture
  // =========================================================================
  const architectureLayers = {
    telemetry: {
      name: '01. Telemetry Ingestion & Mediation',
      focus: 'High-Frequency Ingestion Bus',
      desc: 'Collects raw digital consumption data from SaaS applications, IoT devices, cloud infrastructure, and API gateways. Ingests via high-throughput Kafka and REST Webhooks with real-time deduplication.',
      techStack: 'SAP BTP Event Mesh • Apache Kafka • REST API Gateways • JSON Webhooks',
      dbTouch: 'Raw Ingestion Store • Event Deduplication Cache • Device Telemetry Log',
      highlights: [
        'Sub-millisecond event ingestion handling peak transaction volumes without data loss',
        'Cryptographic payload validation and automated anomaly filtering for rogue spikes',
        'Normalized event payloads mapped directly to contractual customer subscription IDs'
      ]
    },
    rating: {
      name: '02. Dynamic Rating & Entitlement Engine',
      focus: 'Real-Time Pricing Calculation Matrix',
      desc: 'Evaluates rated usage against active customer contract rules. Supports recurring flat fees, multi-tier graduated volume discounts, prepaid wallet drawdowns, and hybrid enterprise commitments.',
      techStack: 'SAP CC (Convergent Charging) • Dynamic Rating Matrix • Price Condition Engine',
      dbTouch: 'Rate Plan Master (KONP) • Tier Boundary Table • Unbilled Usage Ledger',
      highlights: [
        'Calculates real-time charges using native SAP condition technique formulas',
        'Supports mid-cycle plan upgrades, prorated additions, and custom client discounts',
        'Continuous calculation of accrued unbilled revenue for real-time finance visibility'
      ]
    },
    invoicing: {
      name: '03. Invoicing & Statutory Compliance Press',
      focus: 'Consolidated Billing & Tax Engine',
      desc: 'Consolidates fixed recurring fees and variable usage into unified billing documents. Calculates localized GST, VAT, and Sales Tax liabilities, applies e-invoicing QR stamps, and dispatches compliant PDFs.',
      techStack: 'SAP CI (Convergent Invoicing) • Multi-Tax Engine • Government E-Invoice API',
      dbTouch: 'Billing Document Header (DFKKINVDOC_H) • Item Ledger • Tax Matrix Table',
      highlights: [
        'Consolidates multiple subscriptions, seats, and usage meters into one transparent bill',
        'Automatic Place of Supply (POS) and cross-border tax determination verification',
        'Instant generation of signed digital PDFs with embedded QR codes and payment links'
      ]
    },
    settlement: {
      name: '04. Multi-Gateway Payment & Dunning Gate',
      focus: 'Automated Collections & Liquidity',
      desc: 'Orchestrates global payment collection across credit cards, ACH, SEPA direct debit, and wire transfers. Manages intelligent multi-stage dunning retry cascades that recover failed recurring charges automatically.',
      techStack: 'SAP FI-CA • Global PSP Switch (Stripe/Adyen/Razorpay) • Smart Dunning AI',
      dbTouch: 'Contract Accounts (VKONT) • Payment Lot Store • Open Item Ledger (DFKKOP)',
      highlights: [
        '99.4% first-pass payment capture with automated multi-gateway failover routing',
        'Configurable dunning cascades with smart retry timing and automated customer alerts',
        'Instant real-time settlement and automatic clearing of customer open receivables'
      ]
    },
    erp: {
      name: '05. SAP S/4HANA Universal Journal Integration',
      focus: 'IFRS 15 / ASC 606 General Ledger Posting',
      desc: 'Direct clean-core integration with SAP S/4HANA Finance. Automates revenue recognition schedules, deferred revenue accounting, and posts balanced journal entries directly into the ACDOCA table.',
      techStack: 'SAP S/4HANA Cloud & ECC 6.0 • SAP BTP Integration Suite • SAP RAR',
      dbTouch: 'Universal Journal (ACDOCA) • Contract Asset/Liability Table • Profitability Segments',
      highlights: [
        'Zero manual spreadsheet reconciliation between customer billing and general ledgers',
        'Automated contract asset/liability recognition conforming to IFRS 15 and ASC 606',
        'Executive financial dashboards reflecting live MRR, ARR, churn, and deferred revenue'
      ]
    }
  };

  return (
    <div className="bg-[#F8FAFC] dark:bg-[#050B17] text-slate-900 dark:text-white min-h-screen selection:bg-blue-600 selection:text-white transition-colors duration-300">
      
      {/* =====================================================================
          SECTION 1: HERO SECTION
          ===================================================================== */}
      <section className="relative pt-28 pb-20 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-blue-50/30 dark:from-[#030712] dark:via-[#070E1E] dark:to-[#0A1931] border-b border-slate-200/80 dark:border-white/10 transition-colors">
        
        {/* Subtle Decorative Grid Backdrop */}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
            style={{
              backgroundImage: `linear-gradient(to right, #00A3E0 1px, transparent 1px), linear-gradient(to bottom, #00A3E0 1px, transparent 1px)`,
              backgroundSize: '48px 48px',
            }}
          />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-tr from-blue-500/10 dark:from-[#00A3E0]/15 via-indigo-500/10 dark:via-[#0052CC]/10 to-transparent blur-[140px] rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Heading, Value Proposition & Actions */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-blue-50 dark:bg-cyan-950/50 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-cyan-500/30 shadow-sm"
              >
                <Sparkles className="h-3.5 w-3.5 text-blue-600 dark:text-cyan-400" />
                <span>SAP S/4HANA &amp; BRIM Subscription Billing Accelerator</span>
              </motion.div>

              {/* Exact Headline */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.12]"
              >
                Subscription Billing, Built for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
                  Business Growth.
                </span>
              </motion.h1>

              {/* Supporting Text */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-xl"
              >
                Automate recurring billing. Simplify revenue operations. KNOOVIQ Subscription Billing synchronizes multi-model pricing, real-time usage rating, automated invoicing, multi-gateway payments, and SAP S/4HANA financial ledgers into one connected enterprise workflow.
              </motion.p>

              {/* Action CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
              >
                <button
                  onClick={() => onOpenContact('Subscription Billing Consultation')}
                  className="btn-primary-gradient px-8 py-4 rounded-xl text-white font-display text-xs font-bold uppercase tracking-wider shadow-xl flex items-center justify-center gap-2.5 cursor-pointer hover:shadow-cyan-500/25 transition-all"
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
              <div className="flex flex-wrap items-center gap-4 pt-4 text-xs font-mono text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-white/10">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>SAP S/4HANA &amp; BRIM Ready</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Sub-Second Event Rating Engine</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>ASC 606 &amp; IFRS 15 Compliant</span>
                </div>
              </div>

            </div>

            {/* Right Column: Hero Visual - Clean High-Res Enterprise Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-6 relative flex items-center justify-center"
            >
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-[#070E1E] group">
                <img 
                  src="/images/billing_hero_visual.jpg" 
                  alt="KNOOVIQ Subscription Billing Platform Interface" 
                  className="w-full h-[480px] sm:h-[540px] lg:h-[620px] object-cover object-top transform group-hover:scale-[1.02] transition-transform duration-700"
                />

                {/* Floating Operational Telemetry Badge */}
                <div className="absolute top-4 right-4 bg-white/95 dark:bg-[#070E1E]/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-blue-200 dark:border-cyan-500/30 shadow-lg flex items-center gap-2.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase text-slate-500 dark:text-slate-400 block leading-none">
                      Operational Uptime
                    </span>
                    <span className="text-xs font-bold text-slate-900 dark:text-white">
                      99.99% Live Rating
                    </span>
                  </div>
                </div>

                {/* Floating Revenue Pulse Badge */}
                <div className="absolute bottom-4 left-4 bg-white/95 dark:bg-[#070E1E]/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-blue-200 dark:border-cyan-500/30 shadow-lg flex items-center gap-3">
                  <div className="h-9 w-9 rounded-lg bg-blue-50 dark:bg-cyan-500/15 border border-blue-200 dark:border-cyan-400/30 flex items-center justify-center text-blue-600 dark:text-cyan-300">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-blue-600 dark:text-cyan-400 font-bold uppercase block">
                      Automated Settlement
                    </span>
                    <span className="text-xs font-bold text-slate-900 dark:text-white">
                      99.4% Multi-Currency Cleared
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 2: REVENUE PIPELINE COMMAND CONSOLE (CONNECTED ARTERY & SIMULATION)
          ===================================================================== */}
      {/* =====================================================================
          SECTION 2: REVENUE PIPELINE COMMAND CONSOLE (COMPACT & SIMPLE)
          ===================================================================== */}
      <section id="journey" className="py-14 sm:py-16 bg-white dark:bg-[#030712] border-b border-slate-200/80 dark:border-white/10 transition-colors relative overflow-hidden">
        {/* Subtle background ambient pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="max-w-3xl mb-8 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-cyan-500/10 border border-blue-200 dark:border-cyan-400/25 text-xs font-mono text-blue-700 dark:text-cyan-300">
              <Zap className="h-3.5 w-3.5" />
              <span>THE RECURRING BILLING ENGINE</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 dark:text-white font-display">
              Every Subscription,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
                One Connected Journey.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
              Connect every stage of the subscription lifecycle through a streamlined, automated billing workflow—from initial contract activation to automated renewal.
            </p>
          </div>

          {/* =================================================================
              CONNECTED DIGITAL PIPELINE ARTERY (CLEAN & COMPACT)
              ================================================================= */}
          <div className="mb-8">
            {/* Desktop Pipeline Track */}
            <div className="hidden md:block relative py-4">
              {/* Background Conduit Track */}
              <div className="absolute top-1/2 left-6 right-6 -translate-y-1/2 h-1 bg-slate-200 dark:bg-white/10 rounded-full" />

              {/* Progress Fill Line */}
              <motion.div
                className="absolute top-1/2 left-6 -translate-y-1/2 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                initial={false}
                animate={{
                  width: `${(activeJourneyIndex / (journeyStages.length - 1)) * 94}%`
                }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
              />

              {/* 6 Station Nodes */}
              <div className="relative z-10 flex items-center justify-between">
                {journeyStages.map((stage, idx) => {
                  const isActive = activeJourneyIndex === idx;
                  const isCompleted = idx < activeJourneyIndex;

                  return (
                    <button
                      key={stage.step}
                      onClick={() => handleJourneyStageClick(idx)}
                      className="group flex flex-col items-center text-center cursor-pointer focus:outline-none"
                    >
                      {/* Circle Indicator */}
                      <div
                        className={`h-9 w-9 rounded-full flex items-center justify-center font-mono font-bold text-xs transition-all duration-300 relative ${
                          isActive
                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 ring-4 ring-blue-400/30 scale-110'
                            : isCompleted
                            ? 'bg-emerald-600 text-white shadow-sm'
                            : 'bg-white dark:bg-[#0B1528] border border-slate-300 dark:border-white/20 text-slate-500 group-hover:border-blue-400 group-hover:text-blue-600'
                        }`}
                      >
                        {isCompleted ? <Check className="h-3.5 w-3.5" /> : stage.step}
                        {isActive && (
                          <span className="absolute -inset-1 rounded-full bg-blue-500/20 animate-ping pointer-events-none" />
                        )}
                      </div>

                      {/* Title & Status */}
                      <div className="mt-2 max-w-[110px] space-y-0.5">
                        <p className={`text-xs font-semibold leading-tight truncate ${
                          isActive
                            ? 'text-blue-900 dark:text-white font-bold'
                            : 'text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200'
                        }`}>
                          {stage.title}
                        </p>
                        <span className={`inline-block font-mono text-[8px] font-bold px-1.5 py-0.2 rounded border ${stage.chipColor}`}>
                          {stage.statusChip}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mobile Responsive Compact Grid */}
            <div className="md:hidden grid grid-cols-2 sm:grid-cols-3 gap-2">
              {journeyStages.map((stage, idx) => {
                const isActive = activeJourneyIndex === idx;
                const isCompleted = idx < activeJourneyIndex;

                return (
                  <button
                    key={stage.step}
                    onClick={() => handleJourneyStageClick(idx)}
                    className={`p-2.5 rounded-xl text-left border transition-all cursor-pointer ${
                      isActive
                        ? 'bg-blue-50 dark:bg-cyan-500/15 border-blue-500 dark:border-cyan-400 text-blue-900 dark:text-white shadow-sm'
                        : 'bg-slate-50 dark:bg-[#070E1E] border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="font-mono text-[10px] font-bold text-blue-600 dark:text-cyan-400">
                        STAGE {stage.step}
                      </span>
                      {isCompleted ? (
                        <Check className="h-3 w-3 text-emerald-500" />
                      ) : isActive ? (
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-cyan-400 animate-pulse" />
                      ) : null}
                    </div>
                    <p className="font-bold text-xs text-slate-900 dark:text-white truncate">
                      {stage.title}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* =================================================================
              ACTIVE STAGE COMMAND CONSOLE (CLEAN & BALANCED)
              ================================================================= */}
          <div className="bg-slate-50 dark:bg-[#070E1E] rounded-2xl border border-slate-200/90 dark:border-white/10 p-6 sm:p-8 shadow-lg overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeJourneyIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                
                {/* Left Column: Stage Details, SAP Badge & Checkpoints */}
                <div className="lg:col-span-7 space-y-4">
                  
                  {/* Stage Classification Header */}
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-cyan-500/20 text-blue-700 dark:text-cyan-300">
                        STAGE {journeyStages[activeJourneyIndex].step} OF 06
                      </span>
                      <span className="text-[11px] font-mono font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        {journeyStages[activeJourneyIndex].label}
                      </span>
                      <span className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded-full border ${journeyStages[activeJourneyIndex].chipColor}`}>
                        {journeyStages[activeJourneyIndex].statusChip}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white tracking-tight font-display">
                      {journeyStages[activeJourneyIndex].title}
                    </h3>

                    <p className="text-sm text-blue-700 dark:text-cyan-300 font-medium leading-normal">
                      {journeyStages[activeJourneyIndex].summary}
                    </p>
                  </div>

                  {/* Clean Integrated SAP Architecture & Telemetry Strip */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white dark:bg-[#0B1528] border border-blue-200 dark:border-cyan-500/30 text-xs font-mono text-slate-700 dark:text-slate-300">
                      <Building2 className="h-4 w-4 text-blue-600 dark:text-cyan-400 shrink-0" />
                      <span className="truncate">SAP Architecture: <strong>{journeyStages[activeJourneyIndex].tcode.split('•')[0].trim()}</strong></span>
                    </div>

                    <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-600 dark:text-slate-300">
                      <Radio className="h-3.5 w-3.5 text-emerald-500 animate-pulse shrink-0" />
                      <span className="truncate font-semibold text-slate-800 dark:text-slate-200">{journeyStages[activeJourneyIndex].simulatedEvent.eventType}</span>
                    </div>
                  </div>

                  {/* Technical Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {journeyStages[activeJourneyIndex].technicalDesc}
                  </p>

                  {/* Key Technical Checkpoints */}
                  <div className="space-y-2 pt-1">
                    <h4 className="text-[11px] font-mono uppercase tracking-wider text-slate-900 dark:text-white font-bold">
                      Key Technical Checkpoints:
                    </h4>
                    <div className="space-y-1.5">
                      {journeyStages[activeJourneyIndex].checkpoints.map((cp, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{cp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Right Column: Workflow Stage Visual Image + Hotspot Radar */}
                <div className="lg:col-span-5 relative">
                  <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-md bg-white dark:bg-[#0B1528] relative group">
                    <img 
                      src={journeyStages[activeJourneyIndex].image} 
                      alt={journeyStages[activeJourneyIndex].title} 
                      className="w-full h-[260px] sm:h-[280px] object-cover object-top"
                    />

                    {/* Interactive Hotspot Radar Pins */}
                    {journeyStages[activeJourneyIndex].hotspots.map((hotspot, hIdx) => {
                      const isPinSelected = activeHotspotId === hotspot.id;

                      return (
                        <div
                          key={hotspot.id}
                          className="absolute z-20"
                          style={{ top: `${hotspot.y}%`, left: `${hotspot.x}%` }}
                        >
                          <button
                            onClick={() => setActiveHotspotId(isPinSelected ? null : hotspot.id)}
                            className="relative flex items-center justify-center p-1 cursor-pointer focus:outline-none group/pin"
                            title={hotspot.title}
                            aria-label={hotspot.title}
                          >
                            <span className="absolute h-6 w-6 rounded-full bg-blue-500/40 animate-ping" />
                            <span className={`relative h-5 w-5 rounded-full flex items-center justify-center font-mono text-[9px] font-bold border-2 transition-transform duration-200 ${
                              isPinSelected
                                ? 'bg-amber-500 text-slate-950 border-white scale-110 shadow-md'
                                : 'bg-blue-600 text-white border-white shadow-sm group-hover/pin:scale-110'
                            }`}>
                              {hIdx + 1}
                            </span>
                          </button>
                        </div>
                      );
                    })}

                    {/* Active Hotspot Slide-in Drawer */}
                    <AnimatePresence>
                      {activeHotspotId && (() => {
                        const selectedHotspot = journeyStages[activeJourneyIndex].hotspots.find(
                          (h) => h.id === activeHotspotId
                        );
                        if (!selectedHotspot) return null;

                        return (
                          <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 15 }}
                            transition={{ duration: 0.2 }}
                            className="absolute inset-x-2.5 bottom-2.5 z-30 p-3 rounded-lg bg-slate-950/95 backdrop-blur-md border border-cyan-500/40 text-white shadow-xl space-y-1"
                          >
                            <div className="flex items-start justify-between gap-2">
                              <div>
                                <span className="font-mono text-[9px] uppercase font-bold text-cyan-400 block">
                                  {selectedHotspot.sapContext}
                                </span>
                                <h5 className="font-bold text-[11px] text-white">
                                  {selectedHotspot.title}
                                </h5>
                              </div>
                              <button
                                onClick={() => setActiveHotspotId(null)}
                                className="p-0.5 rounded hover:bg-white/10 text-slate-400 hover:text-white cursor-pointer"
                                aria-label="Close hotspot detail"
                              >
                                <X className="h-3 w-3" />
                              </button>
                            </div>
                            <p className="text-[10px] text-slate-300 leading-snug font-normal">
                              {selectedHotspot.desc}
                            </p>
                          </motion.div>
                        );
                      })()}
                    </AnimatePresence>

                    {/* Status Footer Ribbon */}
                    <div className="p-3 bg-white/95 dark:bg-[#070E1E]/95 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-[11px] font-mono">
                      <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
                        <Sparkles className="h-3 w-3 text-blue-500" />
                        <span>Interactive Pins (1-3)</span>
                      </span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                        <Check className="h-3 w-3" /> ACDOCA Linked
                      </span>
                    </div>

                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* =====================================================================
          SECTION 3: CORE ENTERPRISE CAPABILITIES THAT SCALE (6 STRATEGIC PILLARS)
          ===================================================================== */}
      <section className="py-16 sm:py-20 bg-slate-50 dark:bg-[#050B17] border-b border-slate-200/80 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-cyan-500/10 border border-blue-200 dark:border-cyan-400/25 text-xs font-mono text-blue-700 dark:text-cyan-300">
              <Layers className="h-3.5 w-3.5" />
              <span>CAPABILITIES THAT SCALE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white font-display">
              Engineered for Enterprise{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
                Scale &amp; Complexity.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
              Six synchronized capabilities designed to eliminate billing friction, protect recurring margins, and automate financial compliance with native SAP S/4HANA integration.
            </p>
          </div>

          {/* Interactive Capability Selector Ribbon (6 Pills) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {coreCapabilities.map((cap) => {
              const Icon = cap.icon;
              const isSelected = activeCapId === cap.id;
              return (
                <button
                  key={cap.id}
                  onClick={() => setActiveCapId(cap.id)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white dark:bg-[#0B1528] border-blue-600 dark:border-cyan-400 shadow-md ring-2 ring-blue-500/20'
                      : 'bg-white/60 dark:bg-[#070E1E]/60 border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className={`p-1.5 rounded-lg ${
                      isSelected
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300'
                    }`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded ${
                      isSelected
                        ? 'bg-blue-100 dark:bg-cyan-500/20 text-blue-700 dark:text-cyan-300'
                        : 'bg-slate-100 dark:bg-white/5 text-slate-500'
                    }`}>
                      {cap.stat}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 dark:text-slate-400 block truncate">
                      {cap.subtitle}
                    </span>
                    <p className={`text-xs font-bold truncate ${
                      isSelected ? 'text-blue-900 dark:text-white' : 'text-slate-700 dark:text-slate-300'
                    }`}>
                      {cap.title}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* =================================================================
              ACTIVE CAPABILITY SPOTLIGHT STUDIO & LIVE SIMULATOR
              ================================================================= */}
          {(() => {
            const selectedCap = coreCapabilities.find((c) => c.id === activeCapId) || coreCapabilities[0];
            const CapIcon = selectedCap.icon;

            return (
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCap.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-3xl bg-white dark:bg-[#070E1E] border border-slate-200/90 dark:border-cyan-500/30 p-6 sm:p-10 shadow-xl overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                    
                    {/* Left Column (7 cols): Detailed Architectural Capability Specs */}
                    <div className="lg:col-span-7 space-y-5">
                      
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-full bg-blue-100 dark:bg-cyan-500/20 text-blue-700 dark:text-cyan-300 flex items-center gap-1.5">
                            <CapIcon className="h-3.5 w-3.5" />
                            <span>{selectedCap.badge}</span>
                          </span>
                          <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 font-bold border border-slate-200 dark:border-white/10">
                            Enterprise Metric: {selectedCap.stat}
                          </span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-display">
                          {selectedCap.title}
                        </h3>

                        <p className="text-sm font-medium text-blue-700 dark:text-cyan-400">
                          {selectedCap.subtitle}
                        </p>
                      </div>

                      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                        {selectedCap.desc}
                      </p>

                      {/* Technical Checkpoints */}
                      <div className="space-y-2.5 pt-2">
                        <h4 className="text-xs font-mono uppercase font-bold text-slate-900 dark:text-white tracking-wider">
                          Enterprise Implementation Capabilities:
                        </h4>
                        <div className="space-y-2">
                          {selectedCap.details.map((detail, idx) => (
                            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                              <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Architecture Integration Tag Footer */}
                      <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-500">
                        <div className="flex items-center gap-2">
                          <Building2 className="h-4 w-4 text-blue-600 dark:text-cyan-400" />
                          <span>SAP Integration: <strong>{selectedCap.id === 'pricing-models' ? 'SAP SOM & Convergent Charging' : selectedCap.id === 'event-mediation' ? 'SAP BTP Event Mesh & Kafka' : selectedCap.id === 'e-invoicing' ? 'SAP CI & Tax Framework' : selectedCap.id === 'payment-dunning' ? 'SAP FI-CA Contract Accounts' : selectedCap.id === 'sap-brim' ? 'SAP S/4HANA & ECC 6.0 Core' : 'SAP RAR & Universal Journal (ACDOCA)'}</strong></span>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-200 dark:border-emerald-500/30">
                          Production Ready
                        </span>
                      </div>

                    </div>

                    {/* Right Column (5 cols): Live Dynamic Capability Simulator Widget */}
                    <div className="lg:col-span-5">
                      <div className="rounded-2xl bg-slate-900 text-white p-5 sm:p-6 border border-slate-700/80 shadow-2xl space-y-4">
                        
                        {/* Console Header */}
                        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                          <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-[11px] font-mono text-cyan-400 font-bold uppercase tracking-wider">
                              Live Capability Engine
                            </span>
                          </div>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                            {selectedCap.id.toUpperCase()}
                          </span>
                        </div>

                        {/* CASE 1: PRICING MODELS SIMULATOR */}
                        {selectedCap.id === 'pricing-models' && (
                          <div className="space-y-4">
                            <div className="flex gap-1.5 p-1 rounded-xl bg-slate-950 border border-slate-800 text-[10px] font-mono">
                              {(['flat', 'tiered', 'metered', 'hybrid'] as const).map((tab) => (
                                <button
                                  key={tab}
                                  onClick={() => setPricingSandboxTab(tab)}
                                  className={`flex-1 py-1.5 rounded-lg capitalize font-bold transition-all cursor-pointer ${
                                    pricingSandboxTab === tab
                                      ? 'bg-blue-600 text-white shadow-sm'
                                      : 'text-slate-400 hover:text-white'
                                  }`}
                                >
                                  {tab}
                                </button>
                              ))}
                            </div>

                            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2 font-mono text-xs">
                              {pricingSandboxTab === 'flat' && (
                                <>
                                  <div className="flex justify-between text-slate-300">
                                    <span>Condition Type: PR00 Base License</span>
                                    <span className="text-cyan-400 font-bold">Standard Recurring Rate</span>
                                  </div>
                                  <div className="flex justify-between text-slate-400 text-[11px]">
                                    <span>Provisioning: 25 Named Enterprise Seats</span>
                                    <span>Proration: Day-Level Delta Calc</span>
                                  </div>
                                  <div className="text-[10px] text-emerald-400 pt-1 border-t border-slate-800">
                                    • Co-term anniversary sync aligned to master billing anchor
                                  </div>
                                </>
                              )}

                              {pricingSandboxTab === 'tiered' && (
                                <>
                                  <div className="flex justify-between text-slate-300">
                                    <span>Condition Scale: Graduated Marginal (Tier 3)</span>
                                    <span className="text-cyan-400 font-bold">Stepped Threshold Rate</span>
                                  </div>
                                  <div className="flex justify-between text-slate-400 text-[11px]">
                                    <span>Telemetry Range: 50,000 – 100,000 Units</span>
                                    <span>Scale Rule: Zero-Cliff Transition</span>
                                  </div>
                                  <div className="text-[10px] text-emerald-400 pt-1 border-t border-slate-800">
                                    • Marginal rate recalculated in SAP CC condition table
                                  </div>
                                </>
                              )}

                              {pricingSandboxTab === 'metered' && (
                                <>
                                  <div className="flex justify-between text-slate-300">
                                    <span>Telemetry Meter: High-Frequency Stream</span>
                                    <span className="text-cyan-400 font-bold">Sub-Second Rating</span>
                                  </div>
                                  <div className="flex justify-between text-slate-400 text-[11px]">
                                    <span>Ingestion Bus: Kafka + Event Mesh</span>
                                    <span>Accrual: Unbilled Ledger Active</span>
                                  </div>
                                  <div className="text-[10px] text-emerald-400 pt-1 border-t border-slate-800">
                                    • Real-time rating against unbilled balance cache
                                  </div>
                                </>
                              )}

                              {pricingSandboxTab === 'hybrid' && (
                                <>
                                  <div className="flex justify-between text-slate-300">
                                    <span>Hybrid Enterprise Composite Agreement</span>
                                    <span className="text-cyan-400 font-bold">Multi-Element Split</span>
                                  </div>
                                  <div className="flex justify-between text-slate-400 text-[11px]">
                                    <span>Base Retainer: Platform Core License</span>
                                    <span>Overage Scale: Dynamic Multiplier</span>
                                  </div>
                                  <div className="text-[10px] text-emerald-400 pt-1 border-t border-slate-800">
                                    • Multi-element arrangement allocated to ASC 606 ledger
                                  </div>
                                </>
                              )}
                            </div>

                            <div className="text-center p-2.5 rounded-lg bg-blue-950/40 border border-blue-500/30 text-[11px] font-mono text-cyan-300">
                              Validated against SAP Convergent Charging (CC) Rate Master
                            </div>
                          </div>
                        )}

                        {/* CASE 2: TELEMETRY MEDIATION SIMULATOR */}
                        {selectedCap.id === 'event-mediation' && (
                          <div className="space-y-3 font-mono">
                            <div className="grid grid-cols-2 gap-2 text-xs">
                              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                                <span className="text-slate-400 text-[10px] block">Ingestion Rate</span>
                                <span className="text-cyan-400 font-bold text-sm">142,800 ev/min</span>
                              </div>
                              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                                <span className="text-slate-400 text-[10px] block">Deduplication</span>
                                <span className="text-emerald-400 font-bold text-sm">100% Zero-Loss</span>
                              </div>
                            </div>

                            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5 text-[10px] text-slate-300">
                              <div className="text-cyan-400 font-bold">Kafka Topic: enterprise.billing.events.v1</div>
                              <div className="text-slate-400 truncate">&gt; [16:04:12.012] RECV: tenant_4091 API_CALL bytes=1048576 [RATED]</div>
                              <div className="text-slate-400 truncate">&gt; [16:04:12.045] RECV: tenant_8820 COMPUTE_HR delta=0.5 [RATED]</div>
                              <div className="text-emerald-400 truncate">&gt; [16:04:12.091] DEDUP: hash=8f1c32 duplicate suppressed [CLEAN]</div>
                              <div className="text-slate-400 truncate">&gt; [16:04:12.120] ACCRUE: unbilled consumption committed to ledger</div>
                            </div>

                            <div className="text-center p-2 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-[11px] text-cyan-300">
                              Event-driven stream rated in sub-second latency
                            </div>
                          </div>
                        )}

                        {/* CASE 3: E-INVOICING SIMULATOR */}
                        {selectedCap.id === 'e-invoicing' && (
                          <div className="space-y-3 font-mono text-xs">
                            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                              <div className="flex justify-between items-center text-slate-300">
                                <span className="font-bold text-white">Invoice #INV-2026-EU-9812</span>
                                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">
                                  IRN VALIDATED
                                </span>
                              </div>
                              <div className="text-[11px] text-slate-400 space-y-1">
                                <div className="flex justify-between">
                                  <span>Place of Supply (POS):</span>
                                  <span className="text-white">State 27 / DE-Munich</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Tax Breakdown:</span>
                                  <span className="text-white">19% VAT (Place of Supply Verified)</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Cryptographic Hash:</span>
                                  <span className="text-cyan-400 truncate max-w-[140px]">7f9b8c2a4e...e109d</span>
                                </div>
                              </div>
                            </div>

                            <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-[11px]">
                              <span className="text-slate-300">Direct Government Gateway:</span>
                              <span className="text-emerald-400 font-bold flex items-center gap-1">
                                <Check className="h-3 w-3" /> Digitally Stamped
                              </span>
                            </div>

                            <div className="text-center p-2 rounded-lg bg-indigo-950/40 border border-indigo-500/30 text-[11px] text-indigo-300">
                              PDF generated and dispatched directly to client AP portal
                            </div>
                          </div>
                        )}

                        {/* CASE 4: PAYMENT & DUNNING SIMULATOR */}
                        {selectedCap.id === 'payment-dunning' && (
                          <div className="space-y-3 font-mono text-xs">
                            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                              <div className="flex justify-between text-slate-300 text-[11px]">
                                <span className="text-slate-400">Recovery Cascade Status</span>
                                <span className="text-emerald-400 font-bold">99.4% Settlement</span>
                              </div>

                              <div className="space-y-1.5 text-[11px]">
                                <div className="flex items-center justify-between p-1.5 rounded bg-slate-900 border border-slate-800">
                                  <span className="text-slate-400">T+0: Primary Card Switch</span>
                                  <span className="text-amber-400">Soft Decline (Insufficient)</span>
                                </div>
                                <div className="flex items-center justify-between p-1.5 rounded bg-slate-900 border border-slate-800">
                                  <span className="text-slate-400">T+3: AI Smart Reschedule</span>
                                  <span className="text-cyan-400">72% Recovered</span>
                                </div>
                                <div className="flex items-center justify-between p-1.5 rounded bg-slate-900 border border-slate-800">
                                  <span className="text-slate-400">T+7: SEPA/ACH + Magic Link</span>
                                  <span className="text-emerald-400 font-bold">99.4% Fully Cleared</span>
                                </div>
                              </div>
                            </div>

                            <div className="text-center p-2 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-[11px] text-emerald-300">
                              Open items cleared automatically in SAP FI-CA
                            </div>
                          </div>
                        )}

                        {/* CASE 5: SAP BRIM CLEAN-CORE SIMULATOR */}
                        {selectedCap.id === 'sap-brim' && (
                          <div className="space-y-3 font-mono text-xs">
                            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                              <div className="text-cyan-400 font-bold text-[11px]">Clean-Core BRIM Integration Topology</div>
                              <div className="flex items-center justify-between text-[11px] text-slate-300 py-1 border-b border-slate-800">
                                <span>BTP Event Mesh</span>
                                <span className="text-emerald-400">&harr; SAP SOM Contract</span>
                              </div>
                              <div className="flex items-center justify-between text-[11px] text-slate-300 py-1 border-b border-slate-800">
                                <span>Rating Conditions</span>
                                <span className="text-emerald-400">&harr; SAP CC Engine</span>
                              </div>
                              <div className="flex items-center justify-between text-[11px] text-slate-300 py-1">
                                <span>Invoicing Press</span>
                                <span className="text-emerald-400">&harr; SAP CI &amp; ACDOCA</span>
                              </div>
                            </div>

                            <div className="text-center p-2 rounded-lg bg-blue-950/40 border border-blue-500/30 text-[11px] text-cyan-300">
                              0 Custom Z-Tables • 100% Upgrade Compatible
                            </div>
                          </div>
                        )}

                        {/* CASE 6: REVENUE RECOGNITION SIMULATOR */}
                        {selectedCap.id === 'rev-recognition' && (
                          <div className="space-y-3 font-mono text-xs">
                            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                              <div className="flex justify-between text-slate-300 text-[11px]">
                                <span>ASC 606 Contract Scope:</span>
                                <span className="text-white font-bold">Multi-Year Enterprise Term</span>
                              </div>
                              <div className="space-y-1 text-[11px] text-slate-400">
                                <div className="flex justify-between">
                                  <span>Obligation 1 (Platform License):</span>
                                  <span className="text-cyan-400">Monthly Straight-Line Schedule</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Obligation 2 (Implementation):</span>
                                  <span className="text-emerald-400">Milestone Point-in-Time Schedule</span>
                                </div>
                              </div>
                            </div>

                            <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-[11px]">
                              <span className="text-slate-400">Journal Posting:</span>
                              <span className="text-emerald-400 font-bold">Direct ACDOCA Synchronized</span>
                            </div>

                            <div className="text-center p-2 rounded-lg bg-purple-950/40 border border-purple-500/30 text-[11px] text-purple-300">
                              Audit-ready revenue schedules compliant with IFRS 15
                            </div>
                          </div>
                        )}

                      </div>
                    </div>

                  </div>
                </motion.div>
              </AnimatePresence>
            );
          })()}

        </div>
      </section>

      {/* =====================================================================
          SECTION 4: INTERACTIVE ARCHITECTURE & TECHNICAL DATA FLOW
          ===================================================================== */}
      <section className="py-14 sm:py-16 bg-white dark:bg-[#030712] border-b border-slate-200/80 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          {/* Header */}
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-cyan-500/10 border border-blue-200 dark:border-cyan-400/25 text-xs font-mono text-blue-700 dark:text-cyan-300">
              <Cpu className="h-3.5 w-3.5" />
              <span>CLEAN-CORE CLOUD ARCHITECTURE</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 dark:text-white font-display">
              Enterprise Billing Architecture,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
                Native to SAP S/4HANA.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
              Explore how KNOOVIQ Subscription Billing mediates high-throughput telemetry, calculates rating conditions, executes multi-gateway dunning, and posts real-time journal entries directly into the SAP ACDOCA ledger.
            </p>
          </div>

          {/* =================================================================
              TOP: 5-STAGE COLORFUL ARCHITECTURAL FLOW PIPELINE (HIGHWAY)
              ================================================================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 sm:gap-2.5 relative">
            {archLayerKeys.map((layerKey, idx) => {
              const layer = architectureLayers[layerKey];
              const isActive = activeArchLayer === layerKey;

              // Color mappings per layer
              const colorSchemes = {
                telemetry: {
                  activeBorder: 'border-cyan-500 dark:border-cyan-400',
                  activeBg: 'bg-cyan-50/80 dark:bg-cyan-950/30',
                  badge: 'bg-cyan-500 text-white',
                  text: 'text-cyan-600 dark:text-cyan-400',
                  ring: 'ring-cyan-500/25'
                },
                rating: {
                  activeBorder: 'border-blue-500 dark:border-blue-400',
                  activeBg: 'bg-blue-50/80 dark:bg-blue-950/30',
                  badge: 'bg-blue-600 text-white',
                  text: 'text-blue-600 dark:text-blue-400',
                  ring: 'ring-blue-500/25'
                },
                invoicing: {
                  activeBorder: 'border-purple-500 dark:border-purple-400',
                  activeBg: 'bg-purple-50/80 dark:bg-purple-950/30',
                  badge: 'bg-purple-600 text-white',
                  text: 'text-purple-600 dark:text-purple-400',
                  ring: 'ring-purple-500/25'
                },
                settlement: {
                  activeBorder: 'border-emerald-500 dark:border-emerald-400',
                  activeBg: 'bg-emerald-50/80 dark:bg-emerald-950/30',
                  badge: 'bg-emerald-600 text-white',
                  text: 'text-emerald-600 dark:text-emerald-400',
                  ring: 'ring-emerald-500/25'
                },
                erp: {
                  activeBorder: 'border-amber-500 dark:border-amber-400',
                  activeBg: 'bg-amber-50/80 dark:bg-amber-950/30',
                  badge: 'bg-amber-600 text-white',
                  text: 'text-amber-600 dark:text-amber-400',
                  ring: 'ring-amber-500/25'
                }
              }[layerKey];

              return (
                <button
                  key={layerKey}
                  onClick={() => handleArchLayerClick(layerKey)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                    isActive
                      ? `${colorSchemes.activeBorder} ${colorSchemes.activeBg} shadow-md ring-2 ${colorSchemes.ring}`
                      : 'bg-slate-50 dark:bg-[#070E1E] border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`h-5 w-5 rounded-full flex items-center justify-center font-mono text-[10px] font-bold ${
                      isActive ? colorSchemes.badge : 'bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-slate-300'
                    }`}>
                      0{idx + 1}
                    </span>
                    {isActive ? (
                      <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                      </span>
                    ) : (
                      <span className="text-[9px] font-mono text-slate-400">Step {idx + 1}</span>
                    )}
                  </div>

                  <div>
                    <h4 className={`text-xs font-bold leading-snug truncate ${
                      isActive ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300'
                    }`}>
                      {layer.name.split('. ')[1]}
                    </h4>
                    <p className={`text-[10px] font-mono mt-0.5 truncate ${
                      isActive ? colorSchemes.text : 'text-slate-500'
                    }`}>
                      {layer.focus}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* =================================================================
              BOTTOM: ARCHITECTURE DUAL-COCKPIT COMMAND CENTER
              ================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
            
            {/* Left Column (7 cols): Architecture Visual Blueprint Frame */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div className="rounded-2xl overflow-hidden border border-slate-200/90 dark:border-cyan-500/30 shadow-xl bg-white dark:bg-[#070E1E] group relative h-full flex flex-col justify-between">
                
                {/* Visual Header Ribbon */}
                <div className="px-4 py-2.5 bg-slate-900 text-white border-b border-slate-800 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-cyan-400 font-bold uppercase tracking-wider text-[11px]">
                      Live Architecture Topology Map
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-cyan-300 text-[9px] font-bold border border-cyan-500/30">
                    {architectureLayers[activeArchLayer].name.split('. ')[1].toUpperCase()}
                  </span>
                </div>

                {/* High-Res Architecture Workflow Image */}
                <div className="relative overflow-hidden flex-1 flex items-center bg-slate-950">
                  <img 
                    src="/images/billing_architecture_workflow.jpg" 
                    alt="Subscription Billing Enterprise Cloud Architecture" 
                    className="w-full h-full object-cover transform group-hover:scale-[1.015] transition-transform duration-700 max-h-[380px]"
                  />
                  
                  {/* Subtle Colored Scanner Glow Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Technology Capability Footprint Strip */}
                <div className="p-3 bg-slate-50 dark:bg-[#0B1528] border-t border-slate-200 dark:border-white/10 grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
                  <div className="p-1.5 rounded-lg bg-white dark:bg-[#070E1E] border border-slate-200 dark:border-white/5">
                    <span className="text-slate-400 block text-[8px] uppercase">Integration</span>
                    <strong className="text-slate-800 dark:text-slate-200 truncate block">SAP BTP Event Mesh</strong>
                  </div>
                  <div className="p-1.5 rounded-lg bg-white dark:bg-[#070E1E] border border-slate-200 dark:border-white/5">
                    <span className="text-slate-400 block text-[8px] uppercase">Ledger Sync</span>
                    <strong className="text-emerald-600 dark:text-emerald-400 truncate block">ACDOCA Real-Time</strong>
                  </div>
                  <div className="p-1.5 rounded-lg bg-white dark:bg-[#070E1E] border border-slate-200 dark:border-white/5">
                    <span className="text-slate-400 block text-[8px] uppercase">Clean Core</span>
                    <strong className="text-blue-600 dark:text-cyan-400 truncate block">0 Custom Z-Tables</strong>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column (5 cols): Deep-Dive Specification Terminal */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeArchLayer}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-2xl bg-slate-50 dark:bg-[#070E1E] border border-slate-200/90 dark:border-cyan-500/30 p-5 sm:p-6 space-y-3.5 shadow-xl h-full flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-blue-600 dark:text-cyan-400 font-bold uppercase tracking-wider">
                        LAYER ARCHITECTURE SPECIFICATION
                      </span>
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-blue-100 dark:bg-cyan-500/20 text-blue-700 dark:text-cyan-300 font-bold">
                        ACTIVE SPEC
                      </span>
                    </div>

                    <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      {architectureLayers[activeArchLayer].name}
                    </h4>

                    <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      Focus: <span className="text-slate-700 dark:text-slate-200 font-bold">{architectureLayers[activeArchLayer].focus}</span>
                    </p>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {architectureLayers[activeArchLayer].desc}
                    </p>
                  </div>

                  {/* Tech Stack & DB Touch Cards */}
                  <div className="space-y-2 pt-1 text-xs font-mono">
                    <div className="p-2.5 rounded-xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 shadow-sm">
                      <span className="text-slate-400 block text-[9px] uppercase font-bold">Technology Stack &amp; Frameworks</span>
                      <strong className="text-slate-800 dark:text-slate-200 mt-0.5 block leading-relaxed text-[11px]">{architectureLayers[activeArchLayer].techStack}</strong>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 shadow-sm">
                      <span className="text-slate-400 block text-[9px] uppercase font-bold">SAP ERP Database Touchpoints</span>
                      <strong className="text-blue-700 dark:text-cyan-400 mt-0.5 block leading-relaxed text-[11px]">{architectureLayers[activeArchLayer].dbTouch}</strong>
                    </div>
                  </div>

                  {/* Architecture Guarantees Checklist */}
                  <div className="space-y-1.5 pt-1.5 border-t border-slate-200 dark:border-white/10">
                    <h5 className="text-[10px] font-mono uppercase font-bold text-slate-900 dark:text-white tracking-wider">
                      Verified Architectural Guarantees:
                    </h5>
                    <div className="space-y-1">
                      {architectureLayers[activeArchLayer].highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-[11px]">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Execution Status Footer */}
                  <div className="pt-2.5 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-[10px] font-mono">
                    <span className="text-slate-500">Clean Core Rating:</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                      <Check className="h-3 w-3" /> 100% S/4HANA Upgrade Safe
                    </span>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================================
          SECTION 5: BUSINESS IMPACT — BEFORE VS. AFTER TRANSFORMATION
          ===================================================================== */}
      <section className="py-12 sm:py-16 bg-slate-50 dark:bg-[#050B17] border-b border-slate-200/80 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-cyan-500/10 border border-blue-200 dark:border-cyan-400/25 text-xs font-mono text-blue-700 dark:text-cyan-300">
              <TrendingUp className="h-3.5 w-3.5" />
              <span>MEASURABLE BUSINESS IMPACT</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 dark:text-white font-display">
              The Value Behind Every Subscription:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
                Chaos to Clarity.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
              Compare traditional fragmented recurring billing with KNOOVIQ’s automated SAP-integrated platform. Experience dramatic reductions in billing cycle times and audit friction.
            </p>
          </div>

          {/* Interactive Switcher Toggle */}
          <div className="flex justify-center">
            <div className="inline-flex p-1 rounded-xl bg-white dark:bg-[#070E1E] border border-slate-200 dark:border-white/10 shadow-sm">
              <button
                onClick={() => setImpactView('after')}
                className={`px-5 py-2 rounded-lg font-display text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  impactView === 'after'
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                With KNOOVIQ Solution (After)
              </button>
              <button
                onClick={() => setImpactView('before')}
                className={`px-5 py-2 rounded-lg font-display text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  impactView === 'before'
                    ? 'bg-rose-600 text-white shadow-md shadow-rose-500/25'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Traditional Billing (Before)
              </button>
            </div>
          </div>

          {/* Transformation Infographic Display + Hard KPI Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center pt-2">
            
            {/* Left: High-Res Infographic Image */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-white dark:bg-[#070E1E] group">
                <img 
                  src="/images/billing_transformation_impact.jpg" 
                  alt="Digital Transformation of Subscription Billing Infographic" 
                  className="w-full h-auto max-h-[420px] object-cover transform group-hover:scale-[1.01] transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right: Operational Metric Highlights */}
            <div className="lg:col-span-5 space-y-4">
              
              <div className="space-y-1.5">
                <span className="text-xs font-mono text-blue-600 dark:text-cyan-400 font-bold uppercase tracking-wider">
                  ENTERPRISE OUTCOMES
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight font-display">
                  {impactView === 'after' ? 'Automated, Predictable Recurring Operations' : 'Fragmented Manual Billing Bottlenecks'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {impactView === 'after'
                    ? 'By synchronizing contract initiation, telemetry rating, and automated payment settlement into SAP S/4HANA, finance teams reduce billing close cycles from weeks to minutes.'
                    : 'Disparate billing tools, offline spreadsheets, unmetered usage loss, and delayed invoicing create recurring revenue leakage and severe audit vulnerability.'}
                </p>
              </div>

              {/* 4 Hard Business Stats */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3.5 rounded-xl bg-white dark:bg-[#070E1E] border border-slate-200 dark:border-white/10 shadow-sm">
                  <span className="text-2xl font-black text-blue-600 dark:text-cyan-400 font-display block">
                    85%
                  </span>
                  <span className="text-[11px] text-slate-600 dark:text-slate-400 font-medium leading-tight block mt-0.5">
                    Reduction in Billing Cycle Time
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-white dark:bg-[#070E1E] border border-slate-200 dark:border-white/10 shadow-sm">
                  <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400 font-display block">
                    99.4%
                  </span>
                  <span className="text-[11px] text-slate-600 dark:text-slate-400 font-medium leading-tight block mt-0.5">
                    Automated Multi-Currency Clearance
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-white dark:bg-[#070E1E] border border-slate-200 dark:border-white/10 shadow-sm">
                  <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400 font-display block">
                    100%
                  </span>
                  <span className="text-[11px] text-slate-600 dark:text-slate-400 font-medium leading-tight block mt-0.5">
                    IFRS 15 &amp; ASC 606 Compliance
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-white dark:bg-[#070E1E] border border-slate-200 dark:border-white/10 shadow-sm">
                  <span className="text-2xl font-black text-cyan-600 dark:text-cyan-400 font-display block">
                    35%
                  </span>
                  <span className="text-[11px] text-slate-600 dark:text-slate-400 font-medium leading-tight block mt-0.5">
                    Decrease in Involuntary Churn
                  </span>
                </div>
              </div>

              {/* Call to Action Button */}
              <button
                onClick={() => onOpenContact('Subscription Billing Impact Assessment')}
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-display text-xs font-bold uppercase tracking-wider shadow-md flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <span>Request Custom ROI Assessment</span>
                <ArrowRight className="h-4 w-4" />
              </button>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================================
          SECTION 6: FLEXIBLE PRICING MODELS (CONTENT-RICH ARCHITECTURES)
          ===================================================================== */}
      <section className="py-16 sm:py-20 bg-white dark:bg-[#030712] border-b border-slate-200/80 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Header & Architectural Capabilities Badges */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-cyan-500/10 border border-blue-200 dark:border-cyan-400/25 text-xs font-mono text-blue-700 dark:text-cyan-300">
                <Sliders className="h-3.5 w-3.5" />
                <span>BUILT AROUND FLEXIBLE COMMERCIAL MODELS</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 dark:text-white font-display">
                Support Evolving{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
                  Commercial Pricing Models.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
                Modern enterprises require dynamic pricing strategies that evolve with customer scale. KNOOVIQ unifies recurring commitments, tiered brackets, consumption metering, and hybrid enterprise contracts in a single native billing catalog with direct SAP S/4HANA rating.
              </p>
            </div>

            {/* Architecture Governance Badges */}
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-slate-600 dark:text-slate-400 shrink-0">
              <span className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-[#070E1E] border border-slate-200 dark:border-white/10 flex items-center gap-1.5 font-semibold">
                <ShieldCheck className="h-3.5 w-3.5 text-blue-600 dark:text-cyan-400" />
                <span>Clean-Core Condition Matrix</span>
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-[#070E1E] border border-slate-200 dark:border-white/10 flex items-center gap-1.5 font-semibold">
                <Globe className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Multi-Jurisdiction Tax Native</span>
              </span>
            </div>
          </div>

          {/* 4 Informative Commercial Archetype Cards (No Prices or Amounts) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            
            {/* CARD 1: Recurring Commitments (Electric Blue) */}
            <div className="rounded-2xl bg-gradient-to-b from-blue-50/50 via-white to-white dark:from-blue-950/20 dark:via-[#070E1E] dark:to-[#070E1E] border border-blue-200 dark:border-blue-500/30 p-5 space-y-4 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-3.5">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300">
                    01 • SEAT &amp; LICENSE
                  </span>
                  <span className="h-2 w-2 rounded-full bg-blue-500" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                    Recurring Commitments
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-normal">
                    Fixed-period user seats, concurrent named licenses, and modular retainers
                  </p>
                </div>

                {/* Technical Architecture Box */}
                <div className="p-3 rounded-xl bg-white dark:bg-[#0B1528] border border-blue-100 dark:border-white/5 space-y-1.5 font-mono text-[11px]">
                  <div className="flex justify-between text-slate-600 dark:text-slate-300">
                    <span className="text-slate-400">Cadence:</span>
                    <strong className="text-slate-800 dark:text-slate-200">Monthly / Annual / Multi-Year</strong>
                  </div>
                  <div className="flex justify-between text-slate-600 dark:text-slate-300">
                    <span className="text-slate-400">Proration:</span>
                    <strong className="text-blue-600 dark:text-cyan-400">Automated Day-Level Calc</strong>
                  </div>
                  <div className="flex justify-between text-slate-600 dark:text-slate-300">
                    <span className="text-slate-400">Alignment:</span>
                    <strong className="text-emerald-600 dark:text-emerald-400">Co-Term Anniversary Sync</strong>
                  </div>
                </div>

                {/* Key Capabilities Checklist */}
                <div className="space-y-1.5 pt-1 text-xs text-slate-600 dark:text-slate-400">
                  <div className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-blue-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                    <span>Automated calendar indexation &amp; CPI contractual escalations</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-blue-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                    <span>Seamless mid-cycle seat additions without separate billing splits</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-blue-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                    <span>Multi-entity seat pooling with centralized corporate invoicing</span>
                  </div>
                </div>

              </div>

              <div className="mt-2 pt-2.5 border-t border-blue-100 dark:border-white/5 text-[10px] font-mono text-blue-600 dark:text-cyan-400 font-bold truncate">
                SAP Target: SAP SOM Master Agreement (BTP-SOM)
              </div>
            </div>

            {/* CARD 2: Tiered Volume Brackets (Radiant Cyan) */}
            <div className="rounded-2xl bg-gradient-to-b from-cyan-50/50 via-white to-white dark:from-cyan-950/20 dark:via-[#070E1E] dark:to-[#070E1E] border border-cyan-200 dark:border-cyan-500/30 p-5 space-y-4 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-3.5">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold px-2.5 py-1 rounded-full bg-cyan-100 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300">
                    02 • VOLUME SCALING
                  </span>
                  <span className="h-2 w-2 rounded-full bg-cyan-400" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                    Tiered Volume Brackets
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-normal">
                    Graduated or stepped pricing scales that adapt as customer volume scales
                  </p>
                </div>

                {/* Technical Architecture Box */}
                <div className="p-3 rounded-xl bg-white dark:bg-[#0B1528] border border-cyan-100 dark:border-white/5 space-y-1.5 font-mono text-[11px]">
                  <div className="flex justify-between text-slate-600 dark:text-slate-300">
                    <span className="text-slate-400">Scale Model:</span>
                    <strong className="text-slate-800 dark:text-slate-200">Graduated Marginal &amp; Flat</strong>
                  </div>
                  <div className="flex justify-between text-slate-600 dark:text-slate-300">
                    <span className="text-slate-400">Transitions:</span>
                    <strong className="text-cyan-600 dark:text-cyan-400">Automated Threshold Shift</strong>
                  </div>
                  <div className="flex justify-between text-slate-600 dark:text-slate-300">
                    <span className="text-slate-400">Protection:</span>
                    <strong className="text-emerald-600 dark:text-emerald-400">Retroactive Recalculation</strong>
                  </div>
                </div>

                {/* Key Capabilities Checklist */}
                <div className="space-y-1.5 pt-1 text-xs text-slate-600 dark:text-slate-400">
                  <div className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                    <span>Graduated marginal rating preventing sudden pricing cliff edges</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                    <span>Multi-metric composite tiering across API volume and storage</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                    <span>Negotiated custom scale tiers for global enterprise accounts</span>
                  </div>
                </div>

              </div>

              <div className="mt-2 pt-2.5 border-t border-cyan-100 dark:border-white/5 text-[10px] font-mono text-cyan-600 dark:text-cyan-400 font-bold truncate">
                SAP Target: SAP CC Condition Technique (KONP)
              </div>
            </div>

            {/* CARD 3: Consumption & Metering (Deep Violet) */}
            <div className="rounded-2xl bg-gradient-to-b from-purple-50/50 via-white to-white dark:from-purple-950/20 dark:via-[#070E1E] dark:to-[#070E1E] border border-purple-200 dark:border-purple-500/30 p-5 space-y-4 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-3.5">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold px-2.5 py-1 rounded-full bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300">
                    03 • REAL-TIME USAGE
                  </span>
                  <span className="h-2 w-2 rounded-full bg-purple-500" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                    Consumption &amp; Metering
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-normal">
                    Pay-as-you-go, prepaid digital wallet drawdowns, and overage mediation
                  </p>
                </div>

                {/* Technical Architecture Box */}
                <div className="p-3 rounded-xl bg-white dark:bg-[#0B1528] border border-purple-100 dark:border-white/5 space-y-1.5 font-mono text-[11px]">
                  <div className="flex justify-between text-slate-600 dark:text-slate-300">
                    <span className="text-slate-400">Ingestion:</span>
                    <strong className="text-slate-800 dark:text-slate-200">Kafka Stream &amp; Webhooks</strong>
                  </div>
                  <div className="flex justify-between text-slate-600 dark:text-slate-300">
                    <span className="text-slate-400">Rating Speed:</span>
                    <strong className="text-purple-600 dark:text-purple-400">Sub-Second Event Mediation</strong>
                  </div>
                  <div className="flex justify-between text-slate-600 dark:text-slate-300">
                    <span className="text-slate-400">Liquidity:</span>
                    <strong className="text-emerald-600 dark:text-emerald-400">Prepaid Wallet Drawdowns</strong>
                  </div>
                </div>

                {/* Key Capabilities Checklist */}
                <div className="space-y-1.5 pt-1 text-xs text-slate-600 dark:text-slate-400">
                  <div className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                    <span>Real-time unbilled balance accumulation without batch delay</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                    <span>Configurable threshold notifications at quota exhaustion milestones</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                    <span>Automated deduplication suppressing anomaly bursts and fraud</span>
                  </div>
                </div>

              </div>

              <div className="mt-2 pt-2.5 border-t border-purple-100 dark:border-white/5 text-[10px] font-mono text-purple-600 dark:text-purple-400 font-bold truncate">
                SAP Target: SAP CI Billable Items (BIT) &amp; CI
              </div>
            </div>

            {/* CARD 4: Hybrid Enterprise Bundles (Warm Amber) */}
            <div className="rounded-2xl bg-gradient-to-b from-amber-50/50 via-white to-white dark:from-amber-950/20 dark:via-[#070E1E] dark:to-[#070E1E] border border-amber-200 dark:border-amber-500/30 p-5 space-y-4 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-3.5">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300">
                    04 • ENTERPRISE SUITE
                  </span>
                  <span className="h-2 w-2 rounded-full bg-amber-500" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                    Hybrid Enterprise Bundles
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-normal">
                    Base platform retainers, bundled usage allowances, and overage tiers
                  </p>
                </div>

                {/* Technical Architecture Box */}
                <div className="p-3 rounded-xl bg-white dark:bg-[#0B1528] border border-amber-100 dark:border-white/5 space-y-1.5 font-mono text-[11px]">
                  <div className="flex justify-between text-slate-600 dark:text-slate-300">
                    <span className="text-slate-400">Structure:</span>
                    <strong className="text-slate-800 dark:text-slate-200">Commitment + Metered Quota</strong>
                  </div>
                  <div className="flex justify-between text-slate-600 dark:text-slate-300">
                    <span className="text-slate-400">Accounting:</span>
                    <strong className="text-amber-600 dark:text-amber-400">ASC 606 / IFRS 15 Multi-Split</strong>
                  </div>
                  <div className="flex justify-between text-slate-600 dark:text-slate-300">
                    <span className="text-slate-400">Overage:</span>
                    <strong className="text-emerald-600 dark:text-emerald-400">Dynamic Multiplier Rating</strong>
                  </div>
                </div>

                {/* Key Capabilities Checklist */}
                <div className="space-y-1.5 pt-1 text-xs text-slate-600 dark:text-slate-400">
                  <div className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <span>Unifies flat retainers with burst usage capacity and SLA add-ons</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <span>Automated Standalone Selling Price (SSP) allocation for bundles</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <span>Bespoke contract riders mapped directly to SAP S/4HANA Finance</span>
                  </div>
                </div>

              </div>

              <div className="mt-2 pt-2.5 border-t border-amber-100 dark:border-white/5 text-[10px] font-mono text-amber-600 dark:text-amber-400 font-bold truncate">
                SAP Target: SAP RAR &amp; ACDOCA Universal Journal
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================================
          SECTION 7: CLOSING ENTERPRISE CTA & CONSULTATION BANNER
          ===================================================================== */}
      <section className="py-24 bg-gradient-to-b from-slate-50 via-blue-50/20 to-white dark:from-[#070E1E] dark:via-[#0A1931] dark:to-[#030712] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="relative rounded-3xl bg-white dark:bg-[#070E1E] border border-slate-200 dark:border-cyan-500/30 p-8 sm:p-14 shadow-2xl overflow-hidden">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Narrative & Action Buttons */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-blue-50 dark:bg-cyan-950/50 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-cyan-500/30 shadow-sm">
                  <Sparkles className="h-3.5 w-3.5 text-blue-600 dark:text-cyan-400" />
                  <span>ENTERPRISE REVENUE OPERATIONS</span>
                </div>

                <div className="space-y-3">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white font-display leading-[1.12]">
                    Turn Recurring Billing Into a{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
                      Growth Engine.
                    </span>
                  </h2>
                  <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
                    Create a connected subscription experience with automated multi-model billing, flexible pricing, and clean-core SAP S/4HANA integration.
                  </p>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <button
                    onClick={() => onOpenContact('Subscription Billing Enterprise Consultation')}
                    className="btn-primary-gradient px-8 py-4 rounded-xl text-white font-display text-xs font-bold uppercase tracking-wider shadow-xl flex items-center justify-center gap-2.5 cursor-pointer hover:shadow-cyan-500/25 transition-all"
                  >
                    <span>Talk to an Expert</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  <a
                    href="#journey"
                    className="px-6 py-4 rounded-xl border border-slate-300 dark:border-white/20 bg-white/80 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-800 dark:text-white font-display text-xs font-bold uppercase tracking-wider transition-all text-center"
                  >
                    Explore Architecture
                  </a>
                </div>

                {/* Security and Certification Badges */}
                <div className="pt-6 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                    <ShieldCheck className="h-4 w-4 text-blue-600 dark:text-cyan-400" />
                    <span>SAP S/4HANA Certified</span>
                  </div>
                  <span>•</span>
                  <span>IFRS 15 / ASC 606 Ready</span>
                  <span>•</span>
                  <span>PCI-DSS Level 1 Encrypted</span>
                </div>

              </div>

              {/* Right Column: Executive Boardroom Scaling Visual */}
              <div className="lg:col-span-5 relative">
                <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-white dark:bg-[#070E1E] group">
                  <img 
                    src="/images/billing_closing_ecosystem.jpg" 
                    alt="Global Enterprise Executive Boardroom Recurring Revenue Operations" 
                    className="w-full h-[320px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-4 bg-white/95 dark:bg-[#070E1E]/95 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-500 dark:text-slate-400">Global ARR Compounding</span>
                    <span className="text-blue-600 dark:text-cyan-400 font-bold">Multi-Jurisdiction Invoiced</span>
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
