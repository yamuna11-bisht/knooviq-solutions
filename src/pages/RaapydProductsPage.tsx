import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Layers,
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Building2,
  Truck,
  ShoppingBag,
  CreditCard,
  Briefcase,
  Users2,
  Wrench,
  Cpu,
  GitMerge,
  Workflow,
  Sparkles,
  Database
} from 'lucide-react';

interface RaapydProductsPageProps {
  onOpenContact?: (service?: string) => void;
}

type ProductCategory = 'all' | 'supply-chain' | 'sales-channel' | 'service-lifecycle';

interface ProductItem {
  id: string;
  title: string;
  category: 'supply-chain' | 'sales-channel' | 'service-lifecycle';
  categoryLabel: string;
  tagline: string;
  description: string;
  capabilities: string[];
  sapBackbone: string;
  route: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  badge: string;
}

const RAAPYD_PRODUCTS: ProductItem[] = [
  {
    id: 'vendor-management',
    title: 'Vendor Management',
    category: 'supply-chain',
    categoryLabel: 'Supply Chain & Operations',
    tagline: 'End-to-End Supplier Lifecycle & Compliance Orchestration',
    description: 'Digitize and automate supplier intake, qualification workflows, risk assessments, and performance scorecards while maintaining synchronized procurement master records.',
    capabilities: [
      'Self-service supplier onboarding portal with automated KYC and statutory validation',
      'Dynamic risk scoring, SLA compliance tracking, and automated audit governance',
      'Direct synchronization with SAP S/4HANA MM, purchasing info records, and Ariba'
    ],
    sapBackbone: 'SAP S/4HANA MM & Ariba Network',
    route: '/products/vendor-management',
    icon: Building2,
    accentColor: 'from-blue-600 to-cyan-500',
    badge: 'Procurement Core'
  },
  {
    id: 'field-service-management',
    title: 'Field Service Management',
    category: 'service-lifecycle',
    categoryLabel: 'Customer & Service Lifecycle',
    tagline: 'Intelligent Dispatch & First-Time-Fix Field Execution',
    description: 'Empower dispatchers and field engineers with dynamic scheduling, mobile work orders, offline asset diagnostics, and digital proof-of-service.',
    capabilities: [
      'Automated dispatch matrix matching technician skillset, location, and spare-parts availability',
      'Offline-first mobile job sheets with barcode scanning, photo verification, and digital sign-off',
      'Bilateral integration with SAP Plant Maintenance (PM) and Customer Service (CS)'
    ],
    sapBackbone: 'SAP S/4HANA PM / CS & FSM Cloud',
    route: '/products/field-service-management',
    icon: Wrench,
    accentColor: 'from-indigo-600 to-cyan-400',
    badge: 'Service Execution'
  },
  {
    id: 'real-estate-management',
    title: 'Real Estate Management',
    category: 'supply-chain',
    categoryLabel: 'Supply Chain & Operations',
    tagline: 'Intelligent Property Portfolio & Lease Accounting Governance',
    description: 'Unified commercial real estate lifecycle platform combining automated lease accounting compliance, dynamic rent rolls, space utilization, and facility maintenance.',
    capabilities: [
      'Complete lease lifecycle administration with automated rent escalation schedules',
      'IFRS 16 and US GAAP ASC 842 statutory compliance and liability valuation schedules',
      'Native integration with SAP RE-FX, FI-AA asset ledgers, and plant maintenance'
    ],
    sapBackbone: 'SAP S/4HANA RE-FX & FI-CO',
    route: '/products/real-estate-management',
    icon: Building2,
    accentColor: 'from-sky-600 to-blue-500',
    badge: 'RE-FX Governance'
  },
  {
    id: 'distribution-management',
    title: 'Distribution Management',
    category: 'supply-chain',
    categoryLabel: 'Supply Chain & Operations',
    tagline: 'Intelligent Multi-Echelon Logistics & Route Optimization',
    description: 'Synchronize high-velocity supply networks with multi-depot stock visibility, automated wave picking, carrier tendering, and real-time electronic proof of delivery.',
    capabilities: [
      'Dynamic multi-echelon stock visibility powered by Advanced Available-to-Promise (aATP)',
      'Intelligent warehouse wave picking, automated cross-docking, and cubic load optimization',
      'Real-time transit milestone tracking, GPS telematics, and contactless electronic POD'
    ],
    sapBackbone: 'SAP S/4HANA TM, EWM & SD',
    route: '/products/distribution-management',
    icon: Truck,
    accentColor: 'from-cyan-600 to-teal-500',
    badge: 'Supply Network'
  },
  {
    id: 'digital-retail-solution',
    title: 'Digital Retail Solution',
    category: 'sales-channel',
    categoryLabel: 'Sales & Channel Commerce',
    tagline: 'Connected Omnichannel Commerce & Store Intelligence',
    description: 'Unify physical stores, online marketplaces, and mobile apps into one continuous shopping experience with real-time inventory allocation and centralized promotional pricing.',
    capabilities: [
      'Frictionless omnichannel fulfillment including BOPIS, ship-from-store, and endless aisle catalog',
      'Unified pricing, promotion rules, and customer loyalty governance across all retail channels',
      'Sub-second transactional synchronization with SAP Retail, POS DM, and SAP Commerce'
    ],
    sapBackbone: 'SAP S/4HANA Retail & Commerce Cloud',
    route: '/products/digital-retail-solution',
    icon: ShoppingBag,
    accentColor: 'from-blue-600 to-indigo-500',
    badge: 'Unified Commerce'
  },
  {
    id: 'subscription-billing',
    title: 'Subscription Billing',
    category: 'sales-channel',
    categoryLabel: 'Sales & Channel Commerce',
    tagline: 'Agile Recurring Revenue Engine & Usage-Based Monetization',
    description: 'Launch, adapt, and scale recurring business models with automated rating, multi-tier subscription plans, automated dunning, and statutory deferred revenue recognition.',
    capabilities: [
      'Flexible monetization models: tiered recurring, prepaid allowances, volume tiers, and overage',
      'High-throughput mediation and rating engine processing consumption events with zero lag',
      'IFRS 15 and ASC 606 revenue recognition schedules seamlessly connected to SAP BRIM and FI'
    ],
    sapBackbone: 'SAP BRIM & S/4HANA Finance',
    route: '/products/subscription-billing',
    icon: CreditCard,
    accentColor: 'from-violet-600 to-cyan-500',
    badge: 'Revenue Engine'
  },
  {
    id: 'sales-force-automation',
    title: 'Sales Force Automation',
    category: 'sales-channel',
    categoryLabel: 'Sales & Channel Commerce',
    tagline: 'High-Velocity B2B Route-to-Market & Field Sales Execution',
    description: 'Equip sales reps and channel managers with intelligent beat planning, GPS-verified outlet visits, on-the-spot order capture, and distributor credit validation.',
    capabilities: [
      'Algorithmic daily beat planning with geolocation check-ins and structured store audits',
      'Offline mobile order capture with customer-specific tier pricing and promotional schemes',
      'Instant sales order generation in SAP SD with immediate inventory reservation'
    ],
    sapBackbone: 'SAP S/4HANA SD & CX Sales Cloud',
    route: '/products/sales-force-automation',
    icon: Briefcase,
    accentColor: 'from-cyan-600 to-blue-600',
    badge: 'Route-to-Market'
  },
  {
    id: 'dealer-management-system',
    title: 'Dealer Management System',
    category: 'sales-channel',
    categoryLabel: 'Sales & Channel Commerce',
    tagline: 'Bimodal Channel Bridge & Partner Ecosystem Collaboration',
    description: 'Streamline collaboration between manufacturers and dealer networks with real-time inventory visibility, spare parts ordering, warranty claims, and incentive settlements.',
    capabilities: [
      'Multi-tier dealer portal for vehicle and equipment ordering with real-time production tracking',
      'Accelerated warranty claim submission, automated parts cataloging, and service booking',
      'Automated scheme calculations, dealer rebate settlements, and credit line governance in SAP'
    ],
    sapBackbone: 'SAP S/4HANA SD & Dealer Portal',
    route: '/products/dealer-management-system',
    icon: Users2,
    accentColor: 'from-blue-700 to-cyan-600',
    badge: 'Channel Bridge'
  },
  {
    id: 'asset-management',
    title: 'Asset Management (EAM)',
    category: 'service-lifecycle',
    categoryLabel: 'Customer & Service Lifecycle',
    tagline: 'Predictive Equipment Reliability & Digital Twin Governance',
    description: 'Maximize industrial asset uptime and operational lifespan through condition-based monitoring, predictive maintenance triggers, digital twin models, and automated work orders.',
    capabilities: [
      'Comprehensive equipment master register and operational hierarchy synchronized with SAP PM',
      'Condition-based maintenance triggers driven by operational sensor data and threshold limits',
      'Automated maintenance order generation, spare parts requisitions, and turnaround tracking'
    ],
    sapBackbone: 'SAP S/4HANA Plant Maintenance (PM)',
    route: '/products/asset-management',
    icon: Cpu,
    accentColor: 'from-indigo-600 to-teal-500',
    badge: 'Asset Reliability'
  }
];

const ARCHITECTURE_PILLARS = [
  {
    title: 'Clean Core Interoperability',
    subtitle: 'Zero ERP Modification Debt',
    description: 'Knooviq enterprise solutions connect to your SAP S/4HANA core through standard BAPIs, OData services, and RFC interfaces. This clean-core architecture ensures your core ERP remains completely upgrade-safe while business logic evolves rapidly on the edge.',
    highlights: [
      'Standardized API contracts and event-driven webhooks',
      'Zero modification to standard SAP database tables',
      'Seamless SAP Cloud ALM & BTP lifecycle integration'
    ],
    icon: GitMerge,
    badge: 'Clean Core Certified'
  },
  {
    title: 'Bilateral Real-Time Synchronization',
    subtitle: 'Unified Single Source of Truth',
    description: 'Frontline mobile devices, dealer portals, warehouse barcode scanners, and supplier workspaces communicate directly with the enterprise backbone. Master data changes propagate instantly across systems with automated reconciliation.',
    highlights: [
      'Sub-second master data and transactional propagation',
      'Offline-capable synchronization with conflict resolution',
      'Guaranteed transactional delivery via message brokers'
    ],
    icon: Workflow,
    badge: 'Real-Time Pipeline'
  },
  {
    title: 'Enterprise Security & Governance',
    subtitle: 'Statutory Compliance Guardrails',
    description: 'Every interaction across all 9 Raapyd engines is protected by enterprise-grade security protocols, granular role-based authorization, end-to-end data encryption, and immutable audit logs tailored for global compliance standards.',
    highlights: [
      'Single Sign-On (SSO) with SAML 2.0 / OpenID Connect',
      'Granular role-based access control (RBAC) aligned with SAP roles',
      'Full compliance readiness for IFRS, statutory taxes, and data privacy'
    ],
    icon: ShieldCheck,
    badge: 'Enterprise Grade'
  }
];

const VALUE_CHAIN_STAGES = [
  {
    stage: '01',
    name: 'Supplier Intake & Sourcing',
    products: ['Vendor Management'],
    description: 'Digital onboarding, compliance qualification, and procurement master synchronization.',
    handover: 'Approved supplier and vendor master records push directly into the ERP procurement engine.'
  },
  {
    stage: '02',
    name: 'Channel & Sales Execution',
    products: ['Sales Force Automation', 'Dealer Management System'],
    description: 'Field sales beat planning, distributor order capture, and dealer network inventory coordination.',
    handover: 'Customer orders and replenishment requests flow cleanly into central order orchestration.'
  },
  {
    stage: '03',
    name: 'Fulfillment & Omnichannel',
    products: ['Distribution Management', 'Digital Retail Solution'],
    description: 'Multi-echelon inventory allocation, warehouse wave picking, route delivery, and unified store POS.',
    handover: 'Goods issue, transit milestones, and store transactions post automatically to the ledger.'
  },
  {
    stage: '04',
    name: 'Operational Maintenance & Assets',
    products: ['Field Service Management', 'Asset Management (EAM)'],
    description: 'Intelligent technician dispatch, work order completion, and predictive equipment reliability.',
    handover: 'Maintenance labor hours, spare parts consumption, and asset logs update the PM register.'
  },
  {
    stage: '05',
    name: 'Recurring Revenue & Contracts',
    products: ['Subscription Billing', 'Real Estate Management'],
    description: 'Complex recurring revenue monetization, usage rating, commercial property leases, and IFRS compliance.',
    handover: 'Automated billing schedules and statutory liability schedules feed into SAP FI-CO.'
  }
];

export const RaapydProductsPage: React.FC<RaapydProductsPageProps> = ({ onOpenContact }) => {
  useEffect(() => {
    document.title = 'Knooviq Enterprise Solutions | Connected Enterprise Suite';
  }, []);

  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');
  const [activeValueStage, setActiveValueStage] = useState<number>(0);

  const filteredProducts = activeCategory === 'all'
    ? RAAPYD_PRODUCTS
    : RAAPYD_PRODUCTS.filter(p => p.category === activeCategory);

  const handleScrollToSection = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#050B17] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      {/* ========================================================================= */}
      {/* SECTION 1: HERO — THE CONNECTED ENTERPRISE PRODUCT SUITE                  */}
      {/* ========================================================================= */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-[#070E1C] dark:via-[#050B17] dark:to-[#040813] border-b-2 border-slate-300 dark:border-cyan-500/25">
        {/* Subtle geometric grid backdrop */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[radial-gradient(#00A3E0_1px,transparent_1px)] [background-size:24px_24px]" />
        
        {/* Ambient atmospheric glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 dark:from-cyan-500/20 dark:via-blue-600/15 dark:to-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Executive Value Narrative */}
            <div className="lg:col-span-7 space-y-7">
              {/* Product Suite Badge */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border-2 border-cyan-500/40 bg-cyan-50/80 dark:bg-cyan-950/40 backdrop-blur-md shadow-sm"
              >
                <div className="w-2 h-2 rounded-full bg-[#00A3E0] animate-pulse" />
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#0077B6] dark:text-cyan-300">
                  Knooviq Enterprise Solutions • Suite
                </span>
              </motion.div>

              {/* Primary Display Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]"
              >
                Purpose-Built Enterprise Products.{' '}
                <span className="bg-gradient-to-r from-[#0077B6] via-[#00A3E0] to-cyan-400 bg-clip-text text-transparent">
                  Seamlessly Connected.
                </span>
              </motion.h1>

              {/* Subtitle / Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl text-slate-700 dark:text-slate-200 leading-relaxed font-normal max-w-2xl"
              >
                A unified ecosystem of specialized enterprise engines built to extend SAP core capabilities across supply chains, channel commerce, field operations, and recurring revenue without custom ERP modification.
              </motion.p>

              {/* Architectural Guardrails List (Zero Stats, Qualitative Enterprise Pillars) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2"
              >
                {[
                  'Clean-Core SAP Interoperability',
                  'Standardized BAPI & OData APIs',
                  'Role-Based Governance & Compliance',
                  'Real-Time Bilateral Synchronization'
                ].map((pillar, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white dark:bg-[#0B1528] border-2 border-slate-300 dark:border-cyan-500/30 shadow-xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#00A3E0] flex-shrink-0" />
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                      {pillar}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4 pt-4"
              >
                <button
                  onClick={() => handleScrollToSection('showcase')}
                  className="px-7 py-3.5 rounded-xl text-sm font-extrabold text-white bg-gradient-to-r from-[#0077B6] to-[#00A3E0] hover:from-[#005B8C] hover:to-[#008CC4] transition-all duration-200 shadow-lg shadow-[#00A3E0]/25 flex items-center gap-2 group cursor-pointer"
                >
                  <span>Explore All 9 Products</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onOpenContact?.('Raapyd Enterprise Suite Consultation')}
                  className="px-7 py-3.5 rounded-xl text-sm font-extrabold text-slate-900 dark:text-white bg-white dark:bg-[#0E1A30] border-2 border-slate-300 dark:border-cyan-500/40 hover:bg-slate-100 dark:hover:bg-[#132342] transition-all duration-200 shadow-sm cursor-pointer"
                >
                  Schedule Solution Architecture Demo
                </button>
              </motion.div>
            </div>

            {/* Right Column: Visual Architecture Composition */}
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative rounded-3xl overflow-hidden border-2 border-slate-300 dark:border-cyan-500/35 bg-white dark:bg-[#070E1C] shadow-2xl p-3"
              >
                {/* Visual Frame */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900">
                  <img
                    src="/images/distribution_global_net.jpg"
                    alt="Raapyd Enterprise Product Architecture"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050B17] via-transparent to-transparent opacity-80" />

                  {/* Top Architecture Status Pill */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[11px] font-extrabold bg-[#050B17]/90 text-cyan-300 border border-cyan-500/40 backdrop-blur-md">
                      Clean Core Topology
                    </span>
                    <span className="px-3 py-1 rounded-full text-[11px] font-extrabold bg-blue-950/90 text-blue-200 border border-blue-400/40 backdrop-blur-md">
                      Bilateral SAP Sync
                    </span>
                  </div>

                  {/* Floating Architecture Annotation Card */}
                  <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-[#070E1C]/95 border-2 border-cyan-500/40 backdrop-blur-md text-left">
                    <div className="flex items-center gap-2 mb-1">
                      <Layers className="w-4 h-4 text-cyan-400" />
                      <p className="text-xs font-bold text-white tracking-wide">
                        Enterprise Operational Fabric
                      </p>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      9 specialized engines unifying supply, channel, field, and revenue workflows with the SAP S/4HANA core.
                    </p>
                  </div>
                </div>

                {/* Bottom Quick Feature Strip */}
                <div className="grid grid-cols-3 gap-2 mt-3 pt-2 border-t border-slate-200 dark:border-white/10 text-center">
                  <div className="p-2 rounded-lg bg-slate-50 dark:bg-white/5">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Modularity</p>
                    <p className="text-xs font-black text-slate-800 dark:text-slate-200">Plug & Play</p>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-50 dark:bg-white/5">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Connectivity</p>
                    <p className="text-xs font-black text-slate-800 dark:text-slate-200">BAPI & OData</p>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-50 dark:bg-white/5">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Governance</p>
                    <p className="text-xs font-black text-slate-800 dark:text-slate-200">Zero Debt</p>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: THE RAAPYD PRODUCTS SHOWCASE (ALL 9 ENGINES)                   */}
      {/* ========================================================================= */}
      <section id="showcase" className="py-20 md:py-28 relative scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border-2 border-slate-300 dark:border-cyan-500/35 bg-white dark:bg-[#0B1528] shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#0077B6] dark:text-cyan-300">
                Knooviq Enterprise Solutions Directory
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Nine Purpose-Built Engines.{' '}
              <span className="bg-gradient-to-r from-[#0077B6] to-[#00A3E0] bg-clip-text text-transparent">
                One Enterprise Ecosystem.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 font-normal leading-relaxed">
              Every enterprise solution is engineered to eliminate operational fragmentation between your frontline workforce, dealer networks, supply partners, and the central ERP ledger.
            </p>
          </div>

          {/* Category Filter Controls */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
            {[
              { id: 'all', label: 'All 9 Products' },
              { id: 'supply-chain', label: 'Supply Chain & Operations' },
              { id: 'sales-channel', label: 'Sales & Channel Commerce' },
              { id: 'service-lifecycle', label: 'Customer & Service Lifecycle' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as ProductCategory)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-gradient-to-r from-[#0077B6] to-[#00A3E0] text-white shadow-md shadow-[#00A3E0]/25 border-2 border-transparent'
                    : 'bg-white dark:bg-[#0B1528] text-slate-700 dark:text-slate-200 border-2 border-slate-300 dark:border-cyan-500/30 hover:border-[#00A3E0] dark:hover:border-cyan-400'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* 9 Product Cards Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
          >
            <AnimatePresence>
              {filteredProducts.map((product) => {
                const IconComponent = product.icon;
                return (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    whileHover={{ y: -6, scale: 1.015 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col h-full rounded-3xl p-6 sm:p-7 bg-white dark:bg-[#070E1C] border-2 border-slate-300 dark:border-cyan-500/35 hover:border-[#00A3E0] dark:hover:border-cyan-400 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#00A3E0]/15 group"
                  >
                    {/* Header Row: Icon + Category Badge */}
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.accentColor} p-3 flex items-center justify-center text-white shadow-md flex-shrink-0 group-hover:scale-105 transition-transform duration-300`}>
                        <IconComponent className="w-7 h-7" />
                      </div>
                      
                      <div className="flex flex-col items-end gap-1.5">
                        <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-slate-100 dark:bg-white/10 text-slate-800 dark:text-cyan-300 border border-slate-200 dark:border-white/10">
                          {product.badge}
                        </span>
                        <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">
                          {product.categoryLabel}
                        </span>
                      </div>
                    </div>

                    {/* Title & Tagline */}
                    <div className="space-y-1.5 mb-3">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-[#00A3E0] dark:group-hover:text-cyan-400 transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-xs font-semibold text-[#0077B6] dark:text-cyan-300">
                        {product.tagline}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-normal mb-5 flex-grow">
                      {product.description}
                    </p>

                    {/* Concrete Capabilities (Checklist Format, Zero Stats) */}
                    <div className="space-y-2.5 pt-4 pb-5 border-t border-slate-200 dark:border-white/10">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Key Capabilities
                      </p>
                      {product.capabilities.map((cap, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-[#00A3E0] flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{cap}</span>
                        </div>
                      ))}
                    </div>

                    {/* SAP Backbone Integration Tag */}
                    <div className="pt-3 pb-4 border-t border-slate-200 dark:border-white/10">
                      <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-600 dark:text-slate-300">
                        <Database className="w-3.5 h-3.5 text-[#00A3E0] flex-shrink-0" />
                        <span className="truncate">
                          Backbone: <strong className="text-slate-900 dark:text-white font-bold">{product.sapBackbone}</strong>
                        </span>
                      </div>
                    </div>

                    {/* Action Button: Dedicated Route Link */}
                    <Link
                      to={product.route}
                      className="mt-auto w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-extrabold text-center text-slate-900 dark:text-white bg-slate-100 dark:bg-white/5 border-2 border-slate-300 dark:border-cyan-500/35 hover:bg-[#00A3E0] hover:text-white dark:hover:bg-[#00A3E0] dark:hover:border-[#00A3E0] transition-all duration-200 flex items-center justify-center gap-2 group/btn"
                    >
                      <span>Explore Engine Architecture</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: UNIFIED ARCHITECTURAL FOUNDATIONS                              */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 relative bg-slate-100 dark:bg-[#040813] border-y-2 border-slate-300 dark:border-cyan-500/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border-2 border-slate-300 dark:border-cyan-500/35 bg-white dark:bg-[#070E1C] shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#0077B6] dark:text-cyan-300">
                Enterprise Standards
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Engineered for Enterprise Stability and{' '}
              <span className="bg-gradient-to-r from-[#0077B6] to-[#00A3E0] bg-clip-text text-transparent">
                Clean-Core Agility.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 font-normal leading-relaxed">
              Knooviq enterprise solutions decouple business innovation velocity from ERP customization, ensuring your organization achieves agility with zero technical debt.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {ARCHITECTURE_PILLARS.map((pillar, idx) => {
              const PillarIcon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl p-8 bg-white dark:bg-[#070E1C] border-2 border-slate-300 dark:border-cyan-500/35 shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 dark:bg-cyan-500/20 text-[#00A3E0] dark:text-cyan-300 flex items-center justify-center border border-cyan-500/30">
                        <PillarIcon className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 rounded-full text-[11px] font-extrabold bg-slate-100 dark:bg-white/10 text-slate-800 dark:text-cyan-300 border border-slate-200 dark:border-white/10">
                        {pillar.badge}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {pillar.title}
                      </h3>
                      <p className="text-xs font-semibold text-[#0077B6] dark:text-cyan-400">
                        {pillar.subtitle}
                      </p>
                    </div>

                    <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-5 border-t border-slate-200 dark:border-white/10 space-y-2.5">
                    {pillar.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-[#00A3E0] flex-shrink-0" />
                        <span className="font-medium">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: CONNECTED ENTERPRISE VALUE CHAIN                               */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border-2 border-slate-300 dark:border-cyan-500/35 bg-white dark:bg-[#070E1C] shadow-xs">
              <Workflow className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#0077B6] dark:text-cyan-300">
                End-to-End Value Stream
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              The Connected Enterprise{' '}
              <span className="bg-gradient-to-r from-[#0077B6] to-[#00A3E0] bg-clip-text text-transparent">
                Value Chain.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 font-normal leading-relaxed">
              Witness how Raapyd engines connect disparate business units into one unified, uninterrupted operational loop.
            </p>
          </div>

          {/* Stepper Navigation */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
            {VALUE_CHAIN_STAGES.map((st, idx) => (
              <button
                key={idx}
                onClick={() => setActiveValueStage(idx)}
                className={`p-4 rounded-2xl text-left border-2 transition-all duration-200 cursor-pointer ${
                  activeValueStage === idx
                    ? 'bg-white dark:bg-[#0B1528] border-[#00A3E0] dark:border-cyan-400 shadow-md shadow-[#00A3E0]/20'
                    : 'bg-white/60 dark:bg-white/5 border-slate-300 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/20'
                }`}
              >
                <span className={`text-xs font-black block mb-1 ${activeValueStage === idx ? 'text-[#00A3E0] dark:text-cyan-400' : 'text-slate-400'}`}>
                  STAGE {st.stage}
                </span>
                <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white line-clamp-2">
                  {st.name}
                </p>
              </button>
            ))}
          </div>

          {/* Active Stage Detailed View */}
          <motion.div
            key={activeValueStage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl p-8 sm:p-10 bg-white dark:bg-[#070E1C] border-2 border-slate-300 dark:border-cyan-500/35 shadow-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/50 border border-cyan-500/40 text-[#0077B6] dark:text-cyan-300 text-xs font-extrabold">
                  Stage {VALUE_CHAIN_STAGES[activeValueStage].stage} Orchestration
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                  {VALUE_CHAIN_STAGES[activeValueStage].name}
                </h3>

                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                  {VALUE_CHAIN_STAGES[activeValueStage].description}
                </p>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0B1528] border-2 border-slate-300 dark:border-cyan-500/30 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#0077B6] dark:text-cyan-400 uppercase tracking-wider">
                    <Zap className="w-3.5 h-3.5" />
                    <span>ERP Handover Contract</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium">
                    {VALUE_CHAIN_STAGES[activeValueStage].handover}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 bg-slate-50 dark:bg-[#0B1528] p-6 rounded-2xl border-2 border-slate-300 dark:border-cyan-500/30 space-y-4">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Powered by Raapyd Engine(s)
                </p>
                
                <div className="space-y-3">
                  {VALUE_CHAIN_STAGES[activeValueStage].products.map((pName, pIdx) => {
                    const prodMatch = RAAPYD_PRODUCTS.find(p => p.title === pName);
                    return (
                      <div
                        key={pIdx}
                        className="flex items-center justify-between p-3.5 rounded-xl bg-white dark:bg-[#070E1C] border-2 border-slate-300 dark:border-cyan-500/35"
                      >
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-4 h-4 text-[#00A3E0]" />
                          <span className="text-sm font-bold text-slate-900 dark:text-white">
                            {pName}
                          </span>
                        </div>
                        {prodMatch && (
                          <Link
                            to={prodMatch.route}
                            className="text-xs font-bold text-[#0077B6] dark:text-cyan-400 hover:underline flex items-center gap-1"
                          >
                            <span>Details</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="pt-2 text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                  Fully decoupled execution with instant bidirectional SAP S/4HANA transactional commitments.
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: EXECUTIVE ENTERPRISE CTA                                       */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-br from-[#050B17] via-[#070E1C] to-[#0A1830] text-white border-t-2 border-cyan-500/30">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00A3E0_1px,transparent_1px)] [background-size:20px_20px]" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border-2 border-cyan-500/40 bg-cyan-950/40 text-cyan-300 text-xs font-extrabold uppercase tracking-widest shadow-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready for Enterprise Deployment</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Accelerate Your Enterprise Transformation with{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-[#00A3E0] bg-clip-text text-transparent">
              Knooviq Enterprise Solutions.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
            Schedule an architectural workshop with Knooviq solution engineers to map our purpose-built engines directly against your current SAP landscape.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenContact?.('Enterprise Solutions Architecture Review')}
              className="px-8 py-4 rounded-xl text-sm font-extrabold text-white bg-gradient-to-r from-[#0077B6] to-[#00A3E0] hover:from-[#005B8C] hover:to-[#008CC4] transition-all duration-200 shadow-xl shadow-[#00A3E0]/25 flex items-center gap-2 group cursor-pointer"
            >
              <span>Schedule Architecture Review</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <Link
              to="/solutions/sap-s4hana"
              className="px-8 py-4 rounded-xl text-sm font-extrabold text-white bg-white/10 hover:bg-white/15 border-2 border-cyan-500/40 transition-all duration-200 backdrop-blur-md cursor-pointer"
            >
              Explore SAP S/4HANA Solutions
            </Link>
          </div>

          {/* Trust assurances footer */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium border-t border-white/10">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-cyan-400" /> SOC 2 & ISO Security
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Zero SAP Standard Modifications
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-cyan-400" /> Rapid Plug-and-Play Rollout
            </span>
          </div>

        </div>
      </section>

    </div>
  );
};
