import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Globe2, 
  Ship, 
  Plane, 
  Truck, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  FileText, 
  Layers, 
  Cpu, 
  Database, 
  Boxes, 
  TrendingUp, 
  Clock, 
  Sparkles, 
  Anchor, 
  FileCheck, 
  CreditCard, 
  Coins, 
  Scale, 
  DollarSign, 
  PackageCheck, 
  Building2, 
  ExternalLink,
  ChevronRight,
  RefreshCw,
  Zap,
  BarChart3
} from 'lucide-react';

interface EximPageProps {
  onOpenContact: (topic?: string) => void;
}

export const EximPage: React.FC<EximPageProps> = ({ onOpenContact }) => {
  // State for Section 1 Hero Transport Mode (Auto-cycling every 1 second)
  const [activeHeroMode, setActiveHeroMode] = useState<'ocean' | 'air' | 'inland'>('ocean');
  const heroIntervalRef = React.useRef<NodeJS.Timeout | null>(null);
  const heroPauseTimerRef = React.useRef<NodeJS.Timeout | null>(null);

  const heroModes: ('ocean' | 'air' | 'inland')[] = React.useMemo(() => [
    'ocean',
    'air',
    'inland'
  ], []);

  // 2-second auto-cycle for the 3 Hero transport mode images
  const startHeroAutoCycle = React.useCallback(() => {
    if (heroIntervalRef.current) clearInterval(heroIntervalRef.current);
    heroIntervalRef.current = setInterval(() => {
      setActiveHeroMode((current) => {
        const idx = heroModes.indexOf(current);
        return heroModes[(idx + 1) % heroModes.length];
      });
    }, 2000);
  }, [heroModes]);

  // Pause on manual click, then resume 1s rotation
  const handleHeroModeClick = (mode: 'ocean' | 'air' | 'inland') => {
    setActiveHeroMode(mode);
    if (heroIntervalRef.current) {
      clearInterval(heroIntervalRef.current);
      heroIntervalRef.current = null;
    }
    if (heroPauseTimerRef.current) {
      clearTimeout(heroPauseTimerRef.current);
    }
    heroPauseTimerRef.current = setTimeout(() => {
      startHeroAutoCycle();
    }, 4000);
  };

  React.useEffect(() => {
    startHeroAutoCycle();
    return () => {
      if (heroIntervalRef.current) clearInterval(heroIntervalRef.current);
      if (heroPauseTimerRef.current) clearTimeout(heroPauseTimerRef.current);
    };
  }, [startHeroAutoCycle]);

  // State for Section 4 Process Interactive Step
  const [activeProcessStep, setActiveProcessStep] = useState(0);
  
  // State for Section 5 SAP Nexus Active Node with Auto-Rotation (3s) & 5s Click Pause
  const [activeSapNode, setActiveSapNode] = useState<'business-data' | 'logistics' | 'finance' | 'sales' | 'materials' | 'compliance'>('logistics');
  const [isSapPaused, setIsSapPaused] = useState<boolean>(false);
  const pauseTimerRef = React.useRef<NodeJS.Timeout | null>(null);
  const cycleIntervalRef = React.useRef<NodeJS.Timeout | null>(null);

  const sapNodeKeys: ('business-data' | 'logistics' | 'finance' | 'sales' | 'materials' | 'compliance')[] = React.useMemo(() => [
    'business-data',
    'logistics',
    'finance',
    'sales',
    'materials',
    'compliance'
  ], []);

  // Function to start or resume the 1-second auto cycle
  const startAutoCycle = React.useCallback(() => {
    if (cycleIntervalRef.current) clearInterval(cycleIntervalRef.current);
    cycleIntervalRef.current = setInterval(() => {
      setActiveSapNode((current) => {
        const idx = sapNodeKeys.indexOf(current);
        return sapNodeKeys[(idx + 1) % sapNodeKeys.length];
      });
    }, 1000);
    setIsSapPaused(false);
  }, [sapNodeKeys]);

  // Handle user clicking a particular node (e.g. Finance):
  // Pause for 5 seconds on the clicked node, then resume 3-second auto cycle
  const handleSapNodeClick = (node: 'business-data' | 'logistics' | 'finance' | 'sales' | 'materials' | 'compliance') => {
    setActiveSapNode(node);
    setIsSapPaused(true);

    // Stop active 3s interval immediately
    if (cycleIntervalRef.current) {
      clearInterval(cycleIntervalRef.current);
      cycleIntervalRef.current = null;
    }
    // Clear previous pause timer if user clicks multiple nodes
    if (pauseTimerRef.current) {
      clearTimeout(pauseTimerRef.current);
    }
    // Hold paused for exactly 5 seconds, then resume auto-rotation
    pauseTimerRef.current = setTimeout(() => {
      startAutoCycle();
    }, 5000);
  };

  // Mount effect to launch auto cycle
  React.useEffect(() => {
    startAutoCycle();
    return () => {
      if (cycleIntervalRef.current) clearInterval(cycleIntervalRef.current);
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    };
  }, [startAutoCycle]);

  // Hero Transport Mode Images & Telemetry (100% matched to names, authentic, non-repeated)
  const heroModeData = {
    ocean: {
      title: 'Ocean Freight & Container Shipping',
      tag: 'FCL & LCL MARITIME CORRIDORS',
      image: '/images/ocean-freight.jpg',
      route: 'JNPT / Nhava Sheva ➔ Jebel Ali ➔ Rotterdam',
      manifest: 'Bill of Lading #BL-992014 • Vessel En Route',
      customs: 'ICEGATE Shipping Bill #849201 Verified'
    },
    air: {
      title: 'International Air Cargo Express',
      tag: 'TIME-CRITICAL AIR FREIGHT',
      image: 'https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?q=80&w=1200&auto=format&fit=crop',
      route: 'Mumbai Cargo Terminal (BOM) ➔ Frankfurt (FRA)',
      manifest: 'Air Waybill #AWB-774102 • Cleared for Flight',
      customs: 'Priority Green Channel Clearance Granted'
    },
    inland: {
      title: 'Inland Container Depots (ICD) & Rail',
      tag: 'MULTI-MODAL BONDED LOGISTICS',
      image: '/images/inland-icd.jpg',
      route: 'ICD Tughlakabad ➔ Mundra Port Corridor',
      manifest: 'Train Manifest #TR-55301 • Bonded Transit',
      customs: 'Bond Register Quota Debited & Verified'
    }
  };

  // ==========================================
  // SECTION 3: 8 Key Features Data
  // ==========================================
  const eximFeatures = [
    {
      id: 'export-management',
      title: 'Export Management',
      subtitle: 'End-to-End Outward Trade Control',
      desc: 'Automate export sales contracts, proforma generation, export packing lists, shipping bills, and statutory outward declarations with complete audit tracking.',
      icon: Ship,
      tag: 'OUTBOUND TRADE',
      color: 'from-blue-600 to-cyan-500',
      badgeBg: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-cyan-300 dark:border-blue-700/50',
      highlights: ['Automated Shipping Bills', 'Multi-Currency Export Invoicing', 'Container Stuffing Plans']
    },
    {
      id: 'import-management',
      title: 'Import Management',
      subtitle: 'Seamless Inward Clearance',
      desc: 'Track Bills of Entry, assess customs duty liabilities, manage bonded warehousing, and reconcile port clearances directly with purchase orders.',
      icon: Anchor,
      tag: 'INBOUND CLEARANCE',
      color: 'from-cyan-600 to-teal-500',
      badgeBg: 'bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-900/30 dark:text-cyan-300 dark:border-cyan-700/50',
      highlights: ['Bill of Entry (BOE) Tracking', 'Customs Duty Assessment', 'Bonded Warehouse Management']
    },
    {
      id: 'documentation-management',
      title: 'Documentation Management',
      subtitle: 'Zero-Error Paperless Trade',
      desc: 'Centralized digital document repository producing error-free commercial invoices, packing lists, origin certificates, and inspection declarations.',
      icon: FileText,
      tag: 'DIGITAL ARCHIVE',
      color: 'from-indigo-600 to-blue-500',
      badgeBg: 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-700/50',
      highlights: ['One-Click Document Packs', 'Certificate of Origin (CoO)', 'Automated Bank Submissions']
    },
    {
      id: 'license-management',
      title: 'License Management',
      subtitle: 'Statutory Quota Governance',
      desc: 'Real-time utilization tracking for Advance Authorisation, EPCG, DFIA, and special economic zone (SEZ) licenses with automated bond register ledgers.',
      icon: FileCheck,
      tag: 'GOVERNMENT LICENSES',
      color: 'from-emerald-600 to-teal-500',
      badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-700/50',
      highlights: ['Advance / EPCG License Ledger', 'Export Obligation Monitoring', 'Automated Redemption Filing']
    },
    {
      id: 'letter-of-credit',
      title: 'Letter of Credit (LC)',
      subtitle: 'Financial Security & Compliance',
      desc: 'Streamline LC issuance, amendment tracking, bank guarantee verification, and discrepancy checks before document presentation to eliminate penalties.',
      icon: CreditCard,
      tag: 'TRADE FINANCE',
      color: 'from-violet-600 to-purple-500',
      badgeBg: 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-700/50',
      highlights: ['Clause Discrepancy Prevention', 'Bank Guarantee Tracking', 'Swift MT700 Compliance']
    },
    {
      id: 'export-incentives',
      title: 'Export Incentives',
      subtitle: 'Maximized Duty Drawback & Subsidies',
      desc: 'Accurately compute, track, and realize export subsidies including RoDTEP, RoSCTL, Duty Drawback (DBK), and GST refund claims without manual leakage.',
      icon: Coins,
      tag: 'INCENTIVE REALIZATION',
      color: 'from-amber-500 to-orange-500',
      badgeBg: 'bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-700/50',
      highlights: ['RoDTEP & RoSCTL Automation', 'Duty Drawback Ledgers', 'GST Refund Synchronization']
    },
    {
      id: 'customs-compliance',
      title: 'Customs & Compliance',
      subtitle: 'Frictionless Regulatory Clearance',
      desc: 'Seamless ICEGATE API integration, automatic HS code verification, prohibited cargo screening, and comprehensive audit logs for foreign trade compliance.',
      icon: Scale,
      tag: 'ICEGATE INTEGRATION',
      color: 'from-rose-500 to-pink-500',
      badgeBg: 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-900/30 dark:text-rose-300 dark:border-rose-700/50',
      highlights: ['Live ICEGATE EDI Gateways', 'HS Code Tariff Lookup', 'Sanctions & Denied Party Screening']
    },
    {
      id: 'logistics-cost-management',
      title: 'Logistics Cost Management',
      subtitle: 'Total Landed Cost Optimization',
      desc: 'Calculate true landed costs per unit, audit multi-modal carrier freight invoices, and actively monitor container detention and demurrage risks.',
      icon: DollarSign,
      tag: 'COST VISIBILITY',
      color: 'from-teal-600 to-emerald-500',
      badgeBg: 'bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-900/30 dark:text-teal-300 dark:border-teal-700/50',
      highlights: ['Unit-Level Landed Costing', 'Demurrage & Detention Alerting', 'Freight Audit & Reconciliation']
    }
  ];

  // ==========================================
  // SECTION 4: 6-Step Process Pipeline Data
  // ==========================================
  const eximProcessSteps = [
    {
      step: '01',
      title: 'Order',
      tag: 'TRADE INCEPTION',
      desc: 'Capture export sales contract or import purchase order with international commercial terms (Incoterms 2020), payment milestones, and regulatory requirements.',
      icon: FileText,
      color: '#0052CC',
      points: ['Incoterms verification (FOB, CIF, EXW)', 'Automated export quota checks', 'Currency hedging linkage']
    },
    {
      step: '02',
      title: 'Documentation',
      tag: 'DIGITAL GENERATION',
      desc: 'Generate complete export/import document sets including Proforma, Commercial Invoice, Packing List, Certificate of Origin, and Shipper Declarations.',
      icon: FileCheck,
      color: '#00A3E0',
      points: ['Multi-currency commercial invoice', 'Itemized packing list generation', 'Origin & inspection certificates']
    },
    {
      step: '03',
      title: 'Compliance',
      tag: 'LEGAL CLEARANCE',
      desc: 'Perform statutory checks: HS code verification, duty debit against Advance / EPCG licenses, denied party screening, and LC clause verification.',
      icon: Scale,
      color: '#6366F1',
      points: ['HS code tariff validation', 'EPCG/Advance license debit', 'Pre-shipment LC discrepancy scan']
    },
    {
      step: '04',
      title: 'Shipment',
      tag: 'MULTI-MODAL TRANSIT',
      desc: 'Book container cargo, dispatch multi-modal transport (Ocean / Air / Land), generate bill of lading / airway bill, and monitor live container milestones.',
      icon: Ship,
      color: '#10B981',
      points: ['Container booking & seal logs', 'Bill of Lading / AWB creation', 'Live satellite GPS route tracking']
    },
    {
      step: '05',
      title: 'Customs',
      tag: 'PORT CLEARANCE',
      desc: 'Automated electronic filing of Shipping Bill / Bill of Entry via direct ICEGATE EDI interfaces, duty disbursement, and terminal gate-out clearance.',
      icon: ShieldCheck,
      color: '#F59E0B',
      points: ['Direct ICEGATE EDI submission', 'Automated e-payment of duties', 'Port clearance & assessment order']
    },
    {
      step: '06',
      title: 'Delivery',
      tag: 'FULFILLMENT & CLOSURE',
      desc: 'Final inward delivery to destination plant or customer facility, proof of delivery confirmation, RoDTEP/drawback filing, and financial ledger closure.',
      icon: PackageCheck,
      color: '#8B5CF6',
      points: ['Proof of delivery (e-PoD) capture', 'Export incentive claim activation', 'SAP financial ledger closure']
    }
  ];

  // ==========================================
  // SECTION 5: EXIM + SAP Integration Nodes
  // ==========================================
  const sapNodes = [
    {
      id: 'business-data' as const,
      label: 'Business Data',
      badge: 'SINGLE SOURCE OF TRUTH',
      desc: 'Centralizes global trade master data, vendor/customer international profiles, currency exchange rates, and statutory tax masters directly inside SAP.',
      metric: 'Unified Enterprise Core',
      icon: Database,
      color: 'blue'
    },
    {
      id: 'logistics' as const,
      label: 'Logistics',
      badge: 'TRANSPORTATION & FREIGHT',
      desc: 'Integrates with SAP Transportation Management (TM) and Warehouse Management (EWM) for container dispatch, carrier scheduling, and dock gate-in/out tracking.',
      metric: 'Real-Time Manifest Sync',
      icon: Truck,
      color: 'cyan'
    },
    {
      id: 'finance' as const,
      label: 'Finance',
      badge: 'FINANCIAL SETTLEMENTS (FI-CO)',
      desc: 'Automates customs duty postings, Letter of Credit bank liabilities, forex gain/loss calculations, export incentive receipts, and landed cost apportionment.',
      metric: 'Automated Ledger Postings',
      icon: DollarSign,
      color: 'emerald'
    },
    {
      id: 'sales' as const,
      label: 'Sales',
      badge: 'SALES & DISTRIBUTION (SD)',
      desc: 'Connects foreign sales orders directly to export packing slips, commercial invoices, customer export quotas, and billing document creation.',
      metric: 'Direct Order-to-Invoice Flow',
      icon: Building2,
      color: 'indigo'
    },
    {
      id: 'materials' as const,
      label: 'Materials',
      badge: 'MATERIALS MANAGEMENT (MM)',
      desc: 'Enables smooth import purchase order matching, bonded warehouse inventory tracking, customs tariff determination, and inward GRN processing.',
      metric: 'Bonded Stock Governance',
      icon: Boxes,
      color: 'purple'
    },
    {
      id: 'compliance' as const,
      label: 'Compliance',
      badge: 'GLOBAL TRADE SERVICES (GTS)',
      desc: 'Synchronizes with SAP GTS for international trade sanctions screening, export control classification numbers (ECCN), and preferential trade agreements.',
      metric: '100% Audit Readiness',
      icon: ShieldCheck,
      color: 'rose'
    }
  ];

  // ==========================================
  // SECTION 6: 6 Smarter EXIM Benefits Data
  // ==========================================
  const eximBenefits = [
    {
      metric: '70%',
      title: 'Reduced Manual Work',
      subtitle: 'Eliminate Repetitive Paperwork',
      desc: 'Automate multi-document packages, commercial invoices, and shipping bills directly from SAP sales and purchase orders without double data entry.',
      icon: RefreshCw,
      color: 'from-blue-600 to-cyan-500',
      badge: 'Efficiency'
    },
    {
      metric: '3x',
      title: 'Faster Processing',
      subtitle: 'Accelerate Customs Clearance',
      desc: 'Direct electronic ICEGATE EDI transmission and pre-validated documentation compress port dwell time and speed up container release cycles.',
      icon: Zap,
      color: 'from-cyan-600 to-teal-500',
      badge: 'Velocity'
    },
    {
      metric: '100%',
      title: 'Better Compliance',
      subtitle: 'Zero Regulatory Non-Conformity',
      desc: 'Built-in validation checks for HS Codes, foreign trade policy rules, and export license quotas eliminate statutory audit penalties.',
      icon: ShieldCheck,
      color: 'from-indigo-600 to-blue-500',
      badge: 'Governance'
    },
    {
      metric: 'Zero',
      title: 'Reduced Errors',
      subtitle: 'Prevent Costly Discrepancies',
      desc: 'Algorithmic clause checking against Letters of Credit and customs declarations ensures zero document rejections at banking and port checkpoints.',
      icon: CheckCircle2,
      color: 'from-emerald-600 to-teal-500',
      badge: 'Precision'
    },
    {
      metric: '24/7',
      title: 'Real-Time Visibility',
      subtitle: 'End-to-End Shipment Transparency',
      desc: 'Track cross-border shipments, container gate status, and customs inspection milestones from origin warehouse to destination doorstep.',
      icon: Globe2,
      color: 'from-violet-600 to-purple-500',
      badge: 'Visibility'
    },
    {
      metric: '25%+',
      title: 'Improved Cost Control',
      subtitle: 'Eliminate Demurrage & Reclaim Subsidies',
      desc: 'Actively prevent container demurrage and detention fees while ensuring 100% capture of eligible RoDTEP, RoSCTL, and duty drawback refunds.',
      icon: BarChart3,
      color: 'from-amber-500 to-orange-500',
      badge: 'Cost Savings'
    }
  ];

  const activeSapData = sapNodes.find(n => n.id === activeSapNode) || sapNodes[0];

  return (
    <div className="bg-[#F8FAFC] dark:bg-[#030712] text-slate-900 dark:text-white transition-colors duration-300 overflow-hidden">

      {/* =========================================================================
          SECTION 1 — HERO
          Heading: "SAP-Powered EXIM Solutions"
          Text: "Simplify and automate your export and import operations with better visibility, compliance and control."
          CTA: "Talk to an EXIM Expert"
          Visual: Premium 3D global trade visual (Globe, cargo shipping containers, trade corridors, animated connections)
          ========================================================================= */}
      <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-24 min-h-[580px] lg:min-h-[620px] flex items-center overflow-hidden bg-gradient-to-b from-white via-sky-50/40 to-[#F0F7FF] dark:from-[#030712] dark:via-[#071324] dark:to-[#0A1A30] border-b border-slate-200/80 dark:border-white/10">
        
        {/* Soft Ambient Colorful Radiant Glow */}
        <div className="absolute top-20 left-1/4 w-[500px] h-[350px] bg-cyan-500/10 dark:bg-cyan-400/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-36 right-1/4 w-[500px] h-[350px] bg-blue-600/10 dark:bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Hero Copy & CTA (6 Cols) */}
            <div className="lg:col-span-6 text-left">
              
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-blue-50 dark:bg-cyan-950/50 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-cyan-500/30 shadow-sm mb-6"
              >
                <Ship className="h-3.5 w-3.5 text-blue-600 dark:text-cyan-400" />
                <span>SAP-Integrated Global Trade Management</span>
              </motion.div>

              {/* Exact Heading */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-6"
              >
                SAP-Powered <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">EXIM Solutions</span>
              </motion.h1>

              {/* Exact Text */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed font-sans mb-8 max-w-xl"
              >
                Simplify and automate your export and import operations with better visibility, compliance and control.
              </motion.p>

              {/* CTA and Trust Metric */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8"
              >
                <button
                  onClick={() => onOpenContact('SAP-Powered EXIM Solutions')}
                  className="btn-primary-gradient shimmer-sweep px-8 py-4 rounded-xl text-white font-display text-xs font-bold uppercase tracking-wider shadow-xl flex items-center justify-center gap-2.5 cursor-pointer hover:shadow-cyan-500/25 transition-all"
                >
                  <span>Talk to an EXIM Expert</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href="#features"
                  className="px-6 py-4 rounded-xl border border-slate-300 dark:border-white/20 bg-white/80 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-800 dark:text-white font-display text-xs font-bold uppercase tracking-wider transition-all text-center"
                >
                  Explore Capabilities
                </a>
              </motion.div>

              {/* Quick Feature Chips */}
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>ICEGATE Direct EDI</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>SAP S/4HANA & ECC Ready</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>100% Duty Drawback Accuracy</span>
                </div>
              </div>

            </div>

            {/* Right Column: Real Global Trade Photographic Image Showcase (6 Cols) */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              
              <div className="relative w-full max-w-[540px] rounded-3xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-cyan-500/30 shadow-2xl p-4 sm:p-5 overflow-hidden group">
                
                {/* Mode Selector Tabs (Ocean, Air, Inland) */}
                <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-slate-100 dark:bg-[#07101E] border border-slate-200/80 dark:border-white/5 mb-3.5">
                  <button
                    onClick={() => handleHeroModeClick('ocean')}
                    className={`flex-1 py-1.5 px-3 rounded-xl font-mono text-[11px] font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      activeHeroMode === 'ocean'
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <Ship className="h-3.5 w-3.5" />
                    <span>Ocean Freight</span>
                  </button>
                  <button
                    onClick={() => handleHeroModeClick('air')}
                    className={`flex-1 py-1.5 px-3 rounded-xl font-mono text-[11px] font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      activeHeroMode === 'air'
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <Plane className="h-3.5 w-3.5" />
                    <span>Air Cargo</span>
                  </button>
                  <button
                    onClick={() => handleHeroModeClick('inland')}
                    className={`flex-1 py-1.5 px-3 rounded-xl font-mono text-[11px] font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      activeHeroMode === 'inland'
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <Truck className="h-3.5 w-3.5" />
                    <span>Inland ICD</span>
                  </button>
                </div>

                {/* Main Hero Photographic Image Frame with Dynamic Transition */}
                <div className="relative w-full h-[280px] sm:h-[320px] rounded-2xl overflow-hidden shadow-inner border border-slate-200/60 dark:border-white/10">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeHeroMode}
                      src={heroModeData[activeHeroMode].image}
                      alt={heroModeData[activeHeroMode].title}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </AnimatePresence>

                  {/* High-Tech Gradient Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent pointer-events-none" />

                  {/* Top Floating Badge 1: ICEGATE Status */}
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-3 left-3 px-3 py-1.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-emerald-500/40 text-white flex items-center gap-2 shadow-lg"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="font-mono text-[10px] font-bold text-emerald-300">ICEGATE DIRECT EDI • ACTIVE</span>
                  </motion.div>

                  {/* Top Floating Badge 2: Mode Tag */}
                  <div className="absolute top-3 right-3 px-3 py-1.5 rounded-xl bg-blue-600/90 backdrop-blur-md border border-white/20 text-white font-mono text-[10px] font-bold uppercase shadow-lg">
                    {heroModeData[activeHeroMode].tag}
                  </div>

                  {/* Bottom Photographic Overlay Info */}
                  <div className="absolute bottom-3 inset-x-3 text-white text-left">
                    <div className="p-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/15 shadow-xl">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-display text-sm font-bold text-white flex items-center gap-1.5">
                          <Globe2 className="h-4 w-4 text-cyan-400" />
                          {heroModeData[activeHeroMode].title}
                        </span>
                        <span className="text-[10px] font-mono text-cyan-300 font-semibold">SAP S/4HANA Sync</span>
                      </div>
                      <div className="text-[11px] font-mono text-slate-300 flex items-center justify-between">
                        <span>Route: {heroModeData[activeHeroMode].route}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Real-Time Telemetry Bar */}
                <div className="mt-3 grid grid-cols-2 gap-2 text-left">
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#07101E] border border-slate-200/80 dark:border-white/5">
                    <span className="text-[9px] font-mono font-bold text-slate-400 uppercase block">Manifest Status</span>
                    <span className="text-[11px] font-display font-bold text-slate-800 dark:text-slate-200 truncate block">
                      {heroModeData[activeHeroMode].manifest}
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#07101E] border border-slate-200/80 dark:border-white/5">
                    <span className="text-[9px] font-mono font-bold text-slate-400 uppercase block">Customs Assessment</span>
                    <span className="text-[11px] font-display font-bold text-emerald-600 dark:text-emerald-400 truncate block flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3 inline shrink-0" />
                      {heroModeData[activeHeroMode].customs}
                    </span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — WHAT IS EXIM?
          Heading: "Smarter Export & Import Management"
          Brief explanation of EXIM and how it helps businesses manage operations, documentation, compliance, shipments.
          Visual: Animated Export -> Trade -> Import flow with arrows and global connection lines.
          Keep text short.
          ========================================================================= */}
      <section className="py-14 sm:py-18 relative bg-white dark:bg-[#070E1C] border-b border-slate-200/80 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-500/30 shadow-sm mb-3">
              <Globe2 className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>Cross-Border Fundamentals</span>
            </div>
            {/* Exact Heading */}
            <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              Smarter Export & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">Import Management</span>
            </h2>
            {/* Short Concise Explanation */}
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
              EXIM provides complete automated governance over international commerce—unifying statutory export/import documentation, customs compliance (ICEGATE), Letters of Credit, and multi-modal freight operations inside your SAP ERP.
            </p>
          </div>

          {/* Animated Export -> Trade -> Import Flow Visual */}
          <div className="relative max-w-5xl mx-auto">
            
            {/* Desktop Connecting Laser Rail with Traveling Pulse */}
            <div className="hidden md:block absolute top-1/2 left-[12%] right-[12%] -translate-y-1/2 h-[2px] bg-slate-200 dark:bg-slate-700 z-0 rounded-full overflow-hidden">
              <motion.div
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="w-1/3 h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              
              {/* STAGE 1: EXPORT */}
              <motion.div 
                whileHover={{ y: -4 }}
                className="p-6 rounded-3xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 shadow-lg text-left flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex items-center justify-center shadow-md">
                      <Ship className="h-6 w-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-blue-600 dark:text-cyan-400 bg-blue-50 dark:bg-blue-900/30 px-2.5 py-1 rounded-full border border-blue-200 dark:border-blue-700/50">
                      STEP 01
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-2">
                    Export Operations
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed mb-4">
                    Automated proforma generation, export packing lists, shipping bills, and statutory outward trade filings.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200 dark:border-white/10 space-y-1 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-blue-600" />
                    <span>Outbound Invoicing</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-blue-600" />
                    <span>Shipping Bill Tracking</span>
                  </div>
                </div>
              </motion.div>

              {/* STAGE 2: GLOBAL TRADE */}
              <motion.div 
                whileHover={{ y: -4 }}
                className="p-6 rounded-3xl bg-gradient-to-b from-blue-50/50 to-indigo-50/30 dark:from-[#0C1A30] dark:to-[#081220] border-2 border-blue-400/50 dark:border-cyan-400/50 shadow-xl text-left flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-600 text-white flex items-center justify-center shadow-md">
                      <Globe2 className="h-6 w-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-indigo-600 dark:text-cyan-300 bg-white dark:bg-indigo-950/60 px-2.5 py-1 rounded-full border border-indigo-200 dark:border-indigo-700/50 shadow-xs">
                      TRANSIT CORRIDOR
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-2">
                    Global Trade & Freight
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed mb-4">
                    Multi-modal freight orchestration across sea, air, and land corridors with real-time milestone telemetry.
                  </p>
                </div>
                <div className="pt-3 border-t border-blue-200/60 dark:border-white/10 space-y-1 text-[11px] font-mono text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-indigo-600" />
                    <span>Multi-Modal Routing</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-indigo-600" />
                    <span>In-Transit Container GPS</span>
                  </div>
                </div>
              </motion.div>

              {/* STAGE 3: IMPORT */}
              <motion.div 
                whileHover={{ y: -4 }}
                className="p-6 rounded-3xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 shadow-lg text-left flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-600 to-emerald-500 text-white flex items-center justify-center shadow-md">
                      <Anchor className="h-6 w-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-teal-600 dark:text-emerald-400 bg-teal-50 dark:bg-teal-900/30 px-2.5 py-1 rounded-full border border-teal-200 dark:border-teal-700/50">
                      STEP 03
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-2">
                    Import Clearance
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed mb-4">
                    Bill of Entry tracking, landed cost calculation, customs tariff assessment, and port gate-out reconciliation.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200 dark:border-white/10 space-y-1 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-teal-600" />
                    <span>Bill of Entry Filing</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-teal-600" />
                    <span>Landed Cost Apportionment</span>
                  </div>
                </div>
              </motion.div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — EXIM KEY FEATURES
          8 Interactive Cards with modern icons, images, and 3D hover effects:
          1. Export Management
          2. Import Management
          3. Documentation Management
          4. License Management
          5. Letter of Credit (LC)
          6. Export Incentives
          7. Customs & Compliance
          8. Logistics Cost Management
          ========================================================================= */}
      <section id="features" className="py-16 sm:py-20 relative bg-[#F8FAFC] dark:bg-[#030712] border-b border-slate-200/80 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-blue-500/30 shadow-sm mb-3">
              <Layers className="h-3.5 w-3.5 text-blue-600 dark:text-cyan-400" />
              <span>Comprehensive Feature Suite</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              Core Capabilities of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">EXIM Automation</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
              Designed specifically for multi-national manufacturers and trading enterprises to eliminate manual paperwork and secure regulatory compliance.
            </p>
          </div>

          {/* 8 Interactive Cards Grid with 3D Hover Effects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eximFeatures.map((feat) => {
              const FeatIcon = feat.icon;

              return (
                <motion.div
                  key={feat.id}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-3xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 p-6 flex flex-col justify-between shadow-sm hover:shadow-2xl hover:border-blue-500/40 transition-all group"
                >
                  <div>
                    {/* Top Icon & Tag */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${feat.color} text-white flex items-center justify-center shadow-md group-hover:rotate-6 transition-transform`}>
                        <FeatIcon className="h-5 w-5" />
                      </div>
                      <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-md border uppercase ${feat.badgeBg}`}>
                        {feat.tag}
                      </span>
                    </div>

                    <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                      {feat.title}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-400 dark:text-slate-400 block mb-3 font-semibold">
                      {feat.subtitle}
                    </span>
                    <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed mb-4">
                      {feat.desc}
                    </p>
                  </div>

                  {/* Feature Highlights Pills */}
                  <div className="pt-3 border-t border-slate-100 dark:border-white/10 space-y-1.5">
                    {feat.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-1.5 text-[11px] font-mono text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="h-3 w-3 text-cyan-500 shrink-0" />
                        <span>{item}</span>
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
          SECTION 4 — EXIM PROCESS
          Visual interactive process:
          Order -> Documentation -> Compliance -> Shipment -> Customs -> Delivery
          Animated connecting lines and moving data particles. Hover for short explanation.
          ========================================================================= */}
      <section className="py-16 sm:py-20 relative bg-white dark:bg-[#070E1C] border-b border-slate-200/80 dark:border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30 shadow-sm mb-3">
              <TrendingUp className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400" />
              <span>Execution Pipeline</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              The Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">EXIM Process</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
              Hover over each phase to inspect how digital data particles travel through statutory validation, carrier dispatch, and final port delivery.
            </p>
          </div>

          {/* Desktop Horizontal Connecting Circuit Rail */}
          <div className="relative mb-8">
            
            {/* Animated Laser Rail with Moving Particles */}
            <div className="hidden lg:block absolute top-[45px] left-[6%] right-[6%] h-[2px] bg-slate-200 dark:bg-slate-700 z-0 rounded-full overflow-hidden">
              <motion.div
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                className="w-1/4 h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
              />
            </div>

            {/* 6 Step Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 relative z-10">
              {eximProcessSteps.map((step, idx) => {
                const StepIcon = step.icon;
                const isSelected = activeProcessStep === idx;

                return (
                  <motion.div
                    key={step.step}
                    onMouseEnter={() => setActiveProcessStep(idx)}
                    onClick={() => setActiveProcessStep(idx)}
                    whileHover={{ y: -4 }}
                    className={`rounded-2xl p-4 border cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                      isSelected
                        ? 'bg-blue-50/70 dark:bg-[#0C1A30] border-2 border-blue-600 dark:border-cyan-400 shadow-xl scale-102'
                        : 'bg-white dark:bg-[#0B1528] border-slate-200 dark:border-white/10 hover:border-blue-400/40 shadow-sm'
                    }`}
                  >
                    <div>
                      {/* Step Number & Icon */}
                      <div className="flex items-center justify-between mb-3">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono text-xs font-black shadow-sm ${
                          isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                        }`}>
                          <StepIcon className="h-4 w-4" />
                        </div>
                        <span className="font-mono text-[10px] font-bold text-slate-400">
                          {step.step}
                        </span>
                      </div>

                      <span className="font-mono text-[9px] font-bold text-blue-600 dark:text-cyan-400 uppercase tracking-wider block mb-1">
                        {step.tag}
                      </span>
                      <h4 className="font-display text-base font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                        {step.title}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed line-clamp-3">
                        {step.desc}
                      </p>
                    </div>

                    <div className="pt-2 mt-3 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-[10px] font-mono text-blue-600 dark:text-cyan-400 font-bold">
                      <span>Inspect</span>
                      <ChevronRight className="h-3.5 w-3.5" />
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

          {/* Active Step Detailed Telemetry Banner */}
          <motion.div
            key={activeProcessStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="p-6 rounded-3xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            <div className="space-y-1 max-w-2xl text-left">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-blue-600 dark:text-cyan-400 uppercase tracking-wider">
                  PHASE {eximProcessSteps[activeProcessStep].step} DETAIL:
                </span>
                <span className="font-display text-base font-bold text-slate-900 dark:text-white">
                  {eximProcessSteps[activeProcessStep].title}
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                {eximProcessSteps[activeProcessStep].desc}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 text-xs font-mono">
              {eximProcessSteps[activeProcessStep].points.map((pt, pIdx) => (
                <span key={pIdx} className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 font-medium flex items-center gap-1.5 shadow-xs">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                  <span>{pt}</span>
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5 — EXIM + SAP
          Heading: "Connected EXIM. Powered by SAP."
          Show EXIM at the center with animated connections to relevant SAP business processes:
          EXIM -> SAP -> Business Data -> Logistics -> Finance -> Sales -> Materials -> Compliance
          Futuristic 3D network/data-flow design.
          ========================================================================= */}
      <section className="py-16 sm:py-20 relative bg-[#F8FAFC] dark:bg-[#030712] border-b border-slate-200/80 dark:border-white/10 overflow-hidden">
        
        {/* Soft background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-indigo-500/10 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-blue-50 dark:bg-cyan-950/40 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-cyan-500/30 shadow-sm mb-3">
              <Cpu className="h-3.5 w-3.5 text-blue-600 dark:text-cyan-400" />
              <span>Enterprise Architectural Nexus</span>
            </div>
            {/* Exact Heading */}
            <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              Connected EXIM. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">Powered by SAP.</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
              How SAP integrates as the central digital heartbeat—orchestrating business data, freight logistics, finance, sales, materials, and statutory compliance.
            </p>
          </div>

          {/* Futuristic 3D Network Arena */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left: Interactive Constellation Graph (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="relative rounded-3xl p-6 bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-cyan-500/20 shadow-xl h-[400px] sm:h-[450px] flex items-center justify-center overflow-hidden">
                
                {/* SVG Connecting Vectors */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
                  <defs>
                    <linearGradient id="sapLaser" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0052CC" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#00A3E0" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>

                  {/* Rotating Concentric Orbit Rings */}
                  <motion.g
                    animate={{ rotate: 360 }}
                    transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
                    style={{ transformOrigin: '50px 50px' }}
                  >
                    <circle cx="50" cy="50" r="28" fill="none" stroke="#00A3E0" strokeWidth="1" strokeDasharray="3 4" opacity="0.4" />
                    <circle cx="50" cy="22" r="1.5" fill="#00A3E0" className="animate-pulse" />
                  </motion.g>
                  <motion.g
                    animate={{ rotate: -360 }}
                    transition={{ duration: 48, repeat: Infinity, ease: 'linear' }}
                    style={{ transformOrigin: '50px 50px' }}
                  >
                    <circle cx="50" cy="50" r="38" fill="none" stroke="#6366F1" strokeWidth="0.8" strokeDasharray="4 6" opacity="0.35" />
                    <circle cx="88" cy="50" r="1.5" fill="#6366F1" className="animate-pulse" />
                  </motion.g>

                  {/* Laser Lines from Center (50, 50) to 6 Satellites */}
                  {/* To Business Data (50, 14) */}
                  <line x1="50" y1="50" x2="50" y2="14" stroke={activeSapNode === 'business-data' ? '#0052CC' : 'url(#sapLaser)'} strokeWidth={activeSapNode === 'business-data' ? '2.5' : '1.2'} />
                  {/* To Logistics (14, 32) */}
                  <line x1="50" y1="50" x2="14" y2="32" stroke={activeSapNode === 'logistics' ? '#00A3E0' : 'url(#sapLaser)'} strokeWidth={activeSapNode === 'logistics' ? '2.5' : '1.2'} />
                  {/* To Finance (86, 32) */}
                  <line x1="50" y1="50" x2="86" y2="32" stroke={activeSapNode === 'finance' ? '#10B981' : 'url(#sapLaser)'} strokeWidth={activeSapNode === 'finance' ? '2.5' : '1.2'} />
                  {/* To Sales (86, 68) */}
                  <line x1="50" y1="50" x2="86" y2="68" stroke={activeSapNode === 'sales' ? '#6366F1' : 'url(#sapLaser)'} strokeWidth={activeSapNode === 'sales' ? '2.5' : '1.2'} />
                  {/* To Materials (14, 68) */}
                  <line x1="50" y1="50" x2="14" y2="68" stroke={activeSapNode === 'materials' ? '#8B5CF6' : 'url(#sapLaser)'} strokeWidth={activeSapNode === 'materials' ? '2.5' : '1.2'} />
                  {/* To Compliance (50, 86) */}
                  <line x1="50" y1="50" x2="50" y2="86" stroke={activeSapNode === 'compliance' ? '#F43F5E' : 'url(#sapLaser)'} strokeWidth={activeSapNode === 'compliance' ? '2.5' : '1.2'} />
                </svg>

                {/* Central EXIM ➔ SAP Nexus Hub */}
                <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20 cursor-default text-center">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#0A2540] via-[#0052CC] to-[#00A3E0] shadow-[0_0_35px_rgba(0,82,204,0.5)] border-2 border-white flex flex-col items-center justify-center p-2 text-white">
                    <div className="absolute inset-0 rounded-full border border-cyan-300 animate-ping opacity-25" />
                    <Sparkles className="h-4 w-4 text-cyan-200 mb-0.5" />
                    <span className="font-display text-xs sm:text-sm font-black tracking-wider">EXIM</span>
                    <span className="text-[7px] font-mono text-cyan-200 tracking-widest uppercase">POWERED BY SAP</span>
                  </div>
                </div>

                {/* 6 Peripheral Orbit Nodes */}
                {/* 1. Business Data (Top) */}
                <button
                  onClick={() => handleSapNodeClick('business-data')}
                  className={`absolute top-[14%] left-[50%] -translate-x-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition-all duration-300 z-20 flex items-center gap-1.5 cursor-pointer ${
                    activeSapNode === 'business-data' 
                      ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.6)] scale-110 ring-2 ring-blue-400' 
                      : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/20 text-slate-700 dark:text-slate-300 hover:border-blue-500'
                  }`}
                >
                  <Database className="h-3.5 w-3.5" />
                  <span>Business Data</span>
                </button>

                {/* 2. Logistics (Top-Left) */}
                <button
                  onClick={() => handleSapNodeClick('logistics')}
                  className={`absolute top-[32%] left-[14%] -translate-x-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition-all duration-300 z-20 flex items-center gap-1.5 cursor-pointer ${
                    activeSapNode === 'logistics' 
                      ? 'bg-cyan-500 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.6)] scale-110 font-extrabold ring-2 ring-cyan-300' 
                      : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/20 text-slate-700 dark:text-slate-300 hover:border-cyan-400'
                  }`}
                >
                  <Truck className="h-3.5 w-3.5" />
                  <span>Logistics</span>
                </button>

                {/* 3. Finance (Top-Right) */}
                <button
                  onClick={() => handleSapNodeClick('finance')}
                  className={`absolute top-[32%] left-[86%] -translate-x-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition-all duration-300 z-20 flex items-center gap-1.5 cursor-pointer ${
                    activeSapNode === 'finance' 
                      ? 'bg-emerald-600 text-white shadow-[0_0_20px_rgba(16,185,129,0.6)] scale-110 ring-2 ring-emerald-400' 
                      : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/20 text-slate-700 dark:text-slate-300 hover:border-emerald-500'
                  }`}
                >
                  <DollarSign className="h-3.5 w-3.5" />
                  <span>Finance</span>
                </button>

                {/* 4. Sales (Bottom-Right) */}
                <button
                  onClick={() => handleSapNodeClick('sales')}
                  className={`absolute top-[68%] left-[86%] -translate-x-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition-all duration-300 z-20 flex items-center gap-1.5 cursor-pointer ${
                    activeSapNode === 'sales' 
                      ? 'bg-indigo-600 text-white shadow-[0_0_20px_rgba(99,102,241,0.6)] scale-110 ring-2 ring-indigo-400' 
                      : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/20 text-slate-700 dark:text-slate-300 hover:border-indigo-500'
                  }`}
                >
                  <Building2 className="h-3.5 w-3.5" />
                  <span>Sales</span>
                </button>

                {/* 5. Materials (Bottom-Left) */}
                <button
                  onClick={() => handleSapNodeClick('materials')}
                  className={`absolute top-[68%] left-[14%] -translate-x-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition-all duration-300 z-20 flex items-center gap-1.5 cursor-pointer ${
                    activeSapNode === 'materials' 
                      ? 'bg-purple-600 text-white shadow-[0_0_20px_rgba(147,51,234,0.6)] scale-110 ring-2 ring-purple-400' 
                      : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/20 text-slate-700 dark:text-slate-300 hover:border-purple-500'
                  }`}
                >
                  <Boxes className="h-3.5 w-3.5" />
                  <span>Materials</span>
                </button>

                {/* 6. Compliance (Bottom) */}
                <button
                  onClick={() => handleSapNodeClick('compliance')}
                  className={`absolute top-[86%] left-[50%] -translate-x-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition-all duration-300 z-20 flex items-center gap-1.5 cursor-pointer ${
                    activeSapNode === 'compliance' 
                      ? 'bg-rose-600 text-white shadow-[0_0_20px_rgba(225,29,72,0.6)] scale-110 ring-2 ring-rose-400' 
                      : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/20 text-slate-700 dark:text-slate-300 hover:border-rose-500'
                  }`}
                >
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>Compliance</span>
                </button>

              </div>
            </div>

            {/* Right: Active SAP Node Telemetry Console (5 Cols) */}
            <div className="lg:col-span-5 text-left">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSapData.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-3xl p-6 sm:p-8 bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 shadow-xl flex flex-col justify-between h-[400px] sm:h-[450px]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-blue-700/50">
                        {activeSapData.badge}
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-400">
                        SAP Interface
                      </span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-2">
                      EXIM ➔ {activeSapData.label}
                    </h3>
                    
                    <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 mb-4">
                      <span className="font-mono text-[10px] text-slate-400 uppercase block mb-1">Architecture Integration Metric</span>
                      <span className="font-display text-base font-bold text-blue-600 dark:text-cyan-300">{activeSapData.metric}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed mb-4">
                      {activeSapData.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-400">SAP Standard API Compliant</span>
                    <button
                      onClick={() => onOpenContact(`EXIM SAP Integration: ${activeSapData.label}`)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-blue-600 dark:text-cyan-300 hover:underline cursor-pointer"
                    >
                      <span>Discuss Architecture</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6 — BENEFITS
          Heading: "The Benefits of Smarter EXIM"
          Show 6 important benefits with animated icons/numbers:
          1. Reduced Manual Work
          2. Faster Processing
          3. Better Compliance
          4. Reduced Errors
          5. Real-Time Visibility
          6. Improved Cost Control
          ========================================================================= */}
      <section className="py-16 sm:py-20 relative bg-white dark:bg-[#070E1C] border-b border-slate-200/80 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30 shadow-sm mb-3">
              <TrendingUp className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Proven ROI & Operational Value</span>
            </div>
            {/* Exact Heading */}
            <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              The Benefits of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">Smarter EXIM</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
              Transform your cross-border trade economics with measurable speed, cost avoidance, and frictionless customs compliance.
            </p>
          </div>

          {/* 6 Benefit Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eximBenefits.map((benefit, bIdx) => {
              const BenefitIcon = benefit.icon;

              return (
                <motion.div
                  key={bIdx}
                  whileHover={{ y: -5 }}
                  className="rounded-3xl p-6 sm:p-7 bg-slate-50 dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-xl transition-all text-left flex flex-col justify-between"
                >
                  <div>
                    {/* Metric Top Bar */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-display text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                        {benefit.metric}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 flex items-center justify-center text-blue-600 dark:text-cyan-400 shadow-xs">
                        <BenefitIcon className="h-5 w-5" />
                      </div>
                    </div>

                    <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-1">
                      {benefit.title}
                    </h3>
                    <span className="text-[11px] font-mono text-blue-600 dark:text-cyan-400 font-bold block mb-3">
                      {benefit.subtitle}
                    </span>
                    <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span>Performance Target</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      Verified
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7 — FINAL CTA
          Full-width CTA section.
          Heading: "Ready to Simplify Your EXIM Operations?"
          Text: "Transform your export and import processes with SAP-powered automation, visibility and control."
          Button: "Talk to Our EXIM Experts"
          Subtle animated 3D globe/global trade background.
          ========================================================================= */}
      <section className="py-16 sm:py-24 relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#EEF5FC] to-[#E0EDFB] dark:from-[#030712] dark:via-[#071324] dark:to-[#0A1B33] border-t border-slate-200/80 dark:border-white/10">
        
        {/* Soft Ambient Colorful Radiant Glow */}
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-400/15 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/15 dark:bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="rounded-3xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-cyan-500/30 shadow-2xl p-8 sm:p-12 lg:p-14 overflow-hidden relative">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              
              {/* Left Column: Heading, Subtitle & Action CTAs (7 Cols) */}
              <div className="lg:col-span-7 text-left space-y-6">
                
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-blue-50 dark:bg-cyan-950/50 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-cyan-500/30 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span>ENTERPRISE TRADE ACCELERATION</span>
                </div>

                {/* Exact Heading */}
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15]">
                  Ready to Simplify Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">EXIM Operations?</span>
                </h2>

                {/* Exact Text */}
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-sans leading-relaxed max-w-xl">
                  Transform your export and import processes with SAP-powered automation, visibility and control.
                </p>

                {/* Exact Button and Links */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <button
                    onClick={() => onOpenContact('EXIM Solutions Consultation')}
                    className="btn-primary-gradient shimmer-sweep px-8 py-4 rounded-xl text-white font-display text-xs font-bold uppercase tracking-wider shadow-xl flex items-center justify-center gap-2.5 cursor-pointer hover:shadow-cyan-500/25 transition-all"
                  >
                    <span>Talk to Our EXIM Experts</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <Link
                    to="/solutions"
                    className="px-6 py-4 rounded-xl border border-slate-300 dark:border-white/20 bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-800 dark:text-white font-display text-xs font-bold uppercase tracking-wider transition-all text-center"
                  >
                    Explore Solutions Hub
                  </Link>
                </div>

                {/* 4 Trust Checkpoints */}
                <div className="pt-4 border-t border-slate-200/80 dark:border-white/10 grid grid-cols-2 gap-3 text-xs font-mono text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>ICEGATE EDI 1.5 Direct</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Zero LC Discrepancies</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Rapid 3-Week Cloud Rollout</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>24/7 SLA Support</span>
                  </div>
                </div>

              </div>

              {/* Right Column: EXIM Operations Command Showcase Card (5 Cols) */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-cyan-500/30 shadow-2xl bg-white dark:bg-slate-900 transition-all">
                  
                  {/* High-Clarity Visual Frame with Elegant Dark Border Shading */}
                  <div className="p-3.5 sm:p-4 bg-slate-100/60 dark:bg-slate-950/60 border-b border-slate-200/80 dark:border-white/10">
                    <div className="relative bg-white rounded-2xl p-3 sm:p-4 flex items-center justify-center overflow-hidden border border-slate-300/90 dark:border-slate-700/80 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                      
                      <img
                        src="/images/exim-simplify-operations.jpg"
                        alt="Intelligent Connected EXIM Global Trade, Logistics & Supply Chain Ecosystem"
                        className="w-full h-auto max-h-[290px] sm:max-h-[320px] object-contain hover:scale-[1.02] transition-transform duration-500"
                      />
                      
                      {/* Dark Border Shading (Inner Vignette along all 4 edges) */}
                      <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_0_32px_rgba(15,23,42,0.25),inset_0_0_12px_rgba(15,23,42,0.18)] border border-slate-400/40" />
                    </div>
                  </div>

                  {/* Operational Telemetry Metrics */}
                  <div className="p-5 space-y-3 bg-slate-50/80 dark:bg-slate-950 text-left">
                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-xs">
                        <span className="text-[9px] font-mono text-slate-400 uppercase block">Trade Ecosystem</span>
                        <span className="text-sm font-display font-bold text-blue-600 dark:text-cyan-300">Global Connected</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-xs">
                        <span className="text-[9px] font-mono text-slate-400 uppercase block">Clearance Speed</span>
                        <span className="text-sm font-display font-bold text-emerald-600 dark:text-emerald-400">&lt; 3.5 Hours</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 flex items-center justify-between shadow-xs">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="h-4 w-4 text-emerald-500 dark:text-emerald-400" />
                        <span className="text-xs font-mono text-slate-700 dark:text-slate-200 font-medium">SAP S/4HANA Core</span>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-500/40">
                        99.98% SLA SYNC
                      </span>
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

export default EximPage;
