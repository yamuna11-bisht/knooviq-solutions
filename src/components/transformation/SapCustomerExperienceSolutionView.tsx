import React, { useState } from 'react';
import {
  ShoppingBag,
  Sparkles,
  Zap,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  ChevronDown,
  Building2,
  Clock,
  Settings,
  Workflow,
  Maximize2,
  X,
  Target,
  Search,
  Activity,
  Network,
  Compass,
  FileCheck2,
  Globe2,
  Layers,
  ShieldCheck,
  TrendingUp,
  Cpu,
  BarChart3,
  Bot,
  Sliders,
  Store,
  MessageSquareQuote,
  Flame
} from 'lucide-react';

interface SapCustomerExperienceSolutionViewProps {
  onOpenContact: (topic?: string) => void;
}

export const SapCustomerExperienceSolutionView: React.FC<SapCustomerExperienceSolutionViewProps> = ({ onOpenContact }) => {
  const [activeStackTier, setActiveStackTier] = useState<number>(0);
  const [activeJourneyTab, setActiveJourneyTab] = useState<number>(0);
  const [activeAiTab, setActiveAiTab] = useState<number>(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isFullscreenImageOpen, setIsFullscreenImageOpen] = useState<boolean>(false);

  // 1. Composable Commerce Cloud Architecture Stack (4 Tiers)
  const architectureStack = [
    {
      tier: 'TIER 01',
      name: 'Experience & Storefront Layer',
      badge: 'HEADLESS PRESENTATION',
      tech: ['Composable Storefront (Spartacus)', 'Next.js / Nuxt SSR', 'Native iOS/Android SDKs', 'B2B Punchout Portals'],
      description: 'Decoupled frontend architecture delivering sub-second page loads. Connects shoppers across web, native mobile apps, in-store digital kiosks, and B2B procurement punchout systems without touching backend commerce logic.',
      latency: '< 120ms P95 TTFB',
      benefit: '100% Frontend Freedom'
    },
    {
      tier: 'TIER 02',
      name: 'API & Microservices Orchestration',
      badge: 'MACH COMPOSABLE APIS',
      tech: ['GraphQL Commerce Mesh', 'REST Microservices Gateway', 'Algolia Search & Merchandising', 'CDN Edge Caching'],
      description: 'API-first middleware routing shopping carts, product search, inventory check, and order placement. Enforces stateless microservices communication and real-time event streaming via SAP BTP Event Mesh.',
      latency: '< 45ms Microservice Hop',
      benefit: 'Zero Monolithic Lock-In'
    },
    {
      tier: 'TIER 03',
      name: 'Commerce Core & Journey Intelligence',
      badge: 'COMMERCE CLOUD & CDP',
      tech: ['SAP Commerce Cloud', 'SAP Customer Data Platform (CDP)', 'SAP Emarsys Marketing', 'SAP CPQ Engine'],
      description: 'The transactional commerce engine handling multi-catalog hierarchies, customer-specific price books, complex industrial bundle configuration, and cross-channel marketing automation based on real-time consent.',
      latency: '99.99% Availability SLA',
      benefit: 'Unified Customer Profile'
    },
    {
      tier: 'TIER 04',
      name: 'Enterprise ERP & Financial Backbone',
      badge: 'CLEAN CORE S/4HANA',
      tech: ['SAP S/4HANA Digital Core', 'Real-Time ATP (Available-to-Promise)', 'Universal Journal (ACDOCA)', 'SAP TM Logistics'],
      description: 'The immutable transactional core executing instant order fulfillment, live credit checks, automated invoicing, and warehouse dispatch without batch sync delays or inventory discrepancies.',
      latency: 'Sub-Second ATP Check',
      benefit: 'Single Source of Inventory'
    }
  ];

  // 2. Omnichannel Customer Journey Orchestrator Console (5 Streams)
  const customerJourneyStreams = [
    {
      id: 'commerce',
      title: 'B2B & B2C Commerce Engine',
      badge: 'HYBRID COMMERCE CORE',
      summary: 'Orchestrates high-volume consumer retail and complex industrial B2B purchasing on a single scalable cloud platform.',
      capabilities: [
        'Multi-site, multi-currency, and multilingual global storefront deployments',
        'Complex B2B multi-tier organizational hierarchies with automated spending limits',
        'cXML and OCI punchout procurement integration for enterprise procurement portals',
        'Real-time Available-to-Promise (ATP) inventory synchronization across stores and warehouses'
      ],
      metrics: { conversion: '+28% Checkout Rate', p95Speed: '< 120ms P95', orderScale: '150,000 Orders/Hr' }
    },
    {
      id: 'cdp',
      title: 'SAP Customer Data Platform (CDP)',
      badge: 'REAL-TIME IDENTITY GRAPH',
      summary: 'Resolves disparate online, in-store, and CRM touchpoints into a unified 360-degree customer profile with zero-party privacy consent governance.',
      capabilities: [
        'Deterministic and probabilistic identity resolution merging anonymous and logged-in users',
        'Real-time streaming behavioral event ingestion from web, mobile, and POS',
        'Native consent and privacy governance compliant with GDPR, CCPA, and cookie-less mandates',
        'Clean Room data integration for secure publisher audience activation'
      ],
      metrics: { profileMatch: '98.2% Resolution', latency: 'Sub-50ms Real-Time', consentAccuracy: '100% Audit-Proof' }
    },
    {
      id: 'emarsys',
      title: 'SAP Emarsys Omnichannel Automation',
      badge: 'PREDICTIVE ENGAGEMENT',
      summary: 'AI-driven contextual engagement delivering personalized communications across SMS, email, mobile push, and web.',
      capabilities: [
        'Predictive AI segmentation identifying churn risk, customer lifetime value, and affinity',
        'Automated multi-step journey triggers (cart abandonment, post-purchase replenishment)',
        'Dynamic product recommendations personalized down to individual shopper preference',
        'Omnichannel revenue attribution tracking campaign ROI directly to settled invoices'
      ],
      metrics: { openRate: '+44% Engagement', revenueLift: '+34% Retention Revenue', sendScale: '1B+ Msgs/Month' }
    },
    {
      id: 'service',
      title: 'SAP Sales & Service Cloud Version 2',
      badge: 'AGENT PRODUCTIVITY COCKPIT',
      summary: 'Cloud-native agent workspace unifying customer service inquiries, field technician dispatch, and predictive sales pipeline management.',
      capabilities: [
        'Single unified agent desktop combining telephony, chat, WhatsApp, and email timelines',
        'Predictive deal scoring and opportunity risk detection powered by SAP Joule',
        'Automated warranty verification and RMA returns processing directly linked to S/4HANA',
        'SLA clock monitoring with automated escalations to senior support tiers'
      ],
      metrics: { firstContactResolution: '86% (+32%)', agentHandlingTime: '-45% Duration', csatScore: '94.2% Rating' }
    },
    {
      id: 'cpq',
      title: 'SAP CPQ (Configure, Price, Quote)',
      badge: 'COMPLEX INDUSTRIAL BUNDLES',
      summary: 'Empowers sales reps and self-service B2B portals to configure complex multi-million dollar engineered-to-order products with guaranteed pricing accuracy.',
      capabilities: [
        'Multi-thousand rule product compatibility constraint engine preventing invalid configurations',
        'Automated margin and discount matrix governance with multi-tier approval routing',
        'Instantaneous PDF proposal and technical specification document generation',
        'Direct conversion from accepted quote to confirmed S/4HANA production order'
      ],
      metrics: { quoteCycle: 'Minutes vs Weeks', quoteAccuracy: '100% Error-Free', dealSize: '+22% Average Value' }
    }
  ];

  // 3. AI Agents in Generative Commerce
  const aiCommerceAgents = [
    {
      id: 'seo-agent',
      name: 'Generative Product Catalog & SEO Agent',
      role: 'Automated Multilingual Merchandiser',
      desc: 'Ingests raw engineering specs and generates rich, persuasive product descriptions, localized SEO metadata, and category tagging in 20+ languages simultaneously.',
      stat: '10x Catalog Ingestion Speed'
    },
    {
      id: 'pricing-agent',
      name: 'Dynamic Price Elasticity & Margin Optimizer',
      role: 'Algorithmic Pricing Sentinel',
      desc: 'Continuously balances competitor price benchmarks, inventory velocity, and contractual customer tiers to recommend optimal pricing that maximizes gross margin.',
      stat: '+4.8% Net Margin Lift'
    },
    {
      id: 'care-agent',
      name: 'Autonomous Customer Care & Resolution Agent',
      role: 'Instant Order & Return Resolver',
      desc: 'Conversational AI agent that authenticates customers, inspects real-time S/4HANA order statuses, issues return shipping labels, and processes replacement requests without human agent intervention.',
      stat: '72% Touchless Ticket Resolution'
    }
  ];

  // 4. Case Studies
  const caseStudies = [
    {
      client: 'Global Industrial Equipment & Automation Manufacturer',
      scale: '3,500+ B2B Distributor Accounts in 48 Countries',
      challenge: 'Sales engineers spent 10 to 14 days manually calculating quotes for complex multi-component machinery, losing deals to agile competitors.',
      solution: 'Implemented SAP Commerce Cloud B2B, SAP CPQ engine, and real-time integration with S/4HANA manufacturing schedules.',
      outcomes: [
        'Quote generation time slashed from 12 days to under 15 minutes',
        '3.2x increase in B2B repeat order self-service velocity',
        'Zero manual errors in complex product configuration BOMs'
      ]
    },
    {
      client: 'Multi-Brand Luxury Consumer & Fashion Conglomerate',
      scale: '18 International Online Stores & 350 Retail Flagships',
      challenge: 'Fragmented customer profiles across digital and physical stores, slow page speeds during flash sales, and low marketing conversion.',
      solution: 'Deployed Composable Headless SAP Commerce Cloud, SAP CDP for real-time customer stitch, and Emarsys AI marketing journeys.',
      outcomes: [
        'Sub-120ms P95 page load speed during record Black Friday traffic',
        '+28% increase in checkout cart conversion rate',
        '44% uplift in repeat customer lifetime value (LTV)'
      ]
    }
  ];

  // 5. FAQs
  const cxFaqs = [
    {
      q: 'What is Composable Commerce and how does SAP Commerce Cloud support it?',
      a: 'Composable Commerce is an architectural approach where best-of-breed components (storefront, search, checkout, cart) are combined via APIs rather than tightly coupled. SAP Commerce Cloud provides headless APIs (OCC - Omni Commerce Connect) and modern frameworks like Spartacus or Next.js, allowing organizations to rapidly swap and customize presentation layers while maintaining the rock-solid transactional reliability of the SAP core.'
    },
    {
      q: 'How does SAP Customer Data Platform (CDP) differ from a traditional CRM?',
      a: 'A CRM primarily stores static business contact data and sales pipelines. In contrast, SAP CDP is a real-time event streaming engine that continuously ingests granular behavioral telemetry (page visits, cart additions, mobile app clicks, IoT telemetry, in-store POS receipts) and unifies them into a single dynamic profile with instant consent compliance.'
    },
    {
      q: 'How does SAP CPQ accelerate high-value industrial sales cycles?',
      a: 'SAP CPQ eliminates spreadsheet errors and rogue sales discounting. Its rules engine checks millions of configuration dependencies in milliseconds, calculates accurate costs from S/4HANA actuals, enforces management approval limits, and generates binding legal contracts in minutes instead of weeks.'
    },
    {
      q: 'Can SAP Commerce Cloud handle extreme traffic spikes like Black Friday or flash sales?',
      a: 'Yes. SAP Commerce Cloud runs on dedicated, auto-scaling hyperscaler Kubernetes infrastructure backed by high-performance Content Delivery Networks (CDNs). It comfortably scales to support over 150,000 orders per hour with guaranteed 99.99% uptime SLAs.'
    }
  ];

  const currentTier = architectureStack[activeStackTier];
  const currentStream = customerJourneyStreams[activeJourneyTab];

  return (
    <div className="w-full pb-20">

      {/* =========================================================================
          1. FULL-SCREEN CINEMATIC HERO SECTION (Full-Bleed 3D Visual & Enterprise Content Overlay)
          ========================================================================= */}
      <section className="relative w-full h-[540px] sm:h-[560px] lg:h-[580px] flex items-center overflow-hidden bg-[#030914] text-white border-b border-slate-200/20 dark:border-white/10 shadow-2xl py-6 sm:py-8 lg:py-8">
        
        {/* Full-Bleed Enterprise 3D Background Image */}
        <div 
          className="absolute inset-0 z-0 group/hero cursor-pointer"
          onClick={() => setIsFullscreenImageOpen(true)}
          title="Click to view full screen 3D visual"
        >
          <img 
            src="/images/sap_app_cx_3d.jpg" 
            alt="SAP Omnichannel Commerce Command Center" 
            className="w-full h-full object-cover object-center lg:object-[66%_center] transition-transform duration-1000 ease-out group-hover/hero:scale-102"
          />
          
          {/* Scrim Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#030914]/90 via-[#130E09]/75 sm:via-[#130E09]/50 lg:via-[#130E09]/30 to-[#030914]/20 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030914]/80 via-transparent to-[#030914]/50 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030914]/60 via-transparent to-transparent pointer-events-none" />

          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

          {/* Click to expand pill */}
          <div className="absolute bottom-4 right-5 z-10 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/50 backdrop-blur-md border border-white/20 text-xs font-mono text-amber-300 hover:bg-black/70 hover:text-white transition-all shadow-xl">
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Click to View Full Screen Visual</span>
          </div>
        </div>

        {/* Hero Content Overlay */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl space-y-2.5 sm:space-y-3">
            
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-amber-400/30 text-[11px] font-mono font-bold uppercase tracking-wider text-amber-300 shadow-xl">
                <ShoppingBag className="w-3.5 h-3.5 text-amber-400" />
                <span>SAP COMMERCE CLOUD & COMPOSABLE CX</span>
              </div>
              <span className="text-slate-400 text-xs font-mono hidden sm:inline">/</span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-slate-300 uppercase tracking-wider bg-black/30 px-2.5 py-0.5 rounded-full border border-white/10 backdrop-blur-sm shadow-md">
                <Target className="w-3.5 h-3.5 text-cyan-400" />
                <span>REAL-TIME IDENTITY RESOLUTION</span>
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-black tracking-tight text-white leading-[1.14] drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
              Composable Omnichannel Commerce, Real-Time CDP & Unified Customer Experience
            </h1>

            {/* Narrative */}
            <p className="text-xs sm:text-sm lg:text-[14px] font-medium text-slate-200 leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] max-w-2xl">
              Deliver hyper-personalized customer journeys at global scale. Unify headless B2B and B2C commerce, real-time identity resolution on SAP CDP, predictive Emarsys engagement, and sub-second checkout speeds.
            </p>

            {/* Architectural Checkpoints */}
            <div className="flex flex-wrap items-center gap-2 pt-0.5">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/35 backdrop-blur-md border border-white/15 text-[11px] font-medium text-slate-200 shadow-lg">
                <Store className="w-3.5 h-3.5 text-amber-400" />
                <span>Composable Commerce Cloud</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/35 backdrop-blur-md border border-white/15 text-[11px] font-medium text-slate-200 shadow-lg">
                <Target className="w-3.5 h-3.5 text-cyan-400" />
                <span>SAP Customer Data Platform</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/35 backdrop-blur-md border border-white/15 text-[11px] font-medium text-slate-200 shadow-lg">
                <Zap className="w-3.5 h-3.5 text-purple-400" />
                <span>Emarsys Omnichannel AI</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/35 backdrop-blur-md border border-white/15 text-[11px] font-medium text-slate-200 shadow-lg">
                <Sliders className="w-3.5 h-3.5 text-emerald-400" />
                <span>SAP CPQ Complex Bundles</span>
              </span>
            </div>

            {/* Strategic Content Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-0.5">
              <div className="px-3 py-2 rounded-xl bg-black/35 backdrop-blur-md border border-white/15 shadow-md">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <Layers className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-[10.5px] font-mono font-bold uppercase text-white">
                    Composable Headless Mesh
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 leading-snug font-normal">
                  Decoupled MACH architecture separating frontend UX from core transactional order processing for sub-second speeds.
                </p>
              </div>

              <div className="px-3 py-2 rounded-xl bg-black/35 backdrop-blur-md border border-white/15 shadow-md">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <Target className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-[10.5px] font-mono font-bold uppercase text-white">
                    Real-Time Customer Data Platform
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 leading-snug font-normal">
                  Deterministic identity stitching reconciling anonymous clicks, authenticated apps, and in-store POS receipts.
                </p>
              </div>
            </div>



            {/* KPI Highlights Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 font-mono">
              <div className="px-3 py-2 rounded-xl bg-black/35 backdrop-blur-md border border-white/15 shadow-md">
                <p className="text-[9px] text-amber-300 uppercase font-bold tracking-wider">Conversion Lift</p>
                <p className="text-base sm:text-lg font-black text-white mt-0.5 leading-none">+28%</p>
                <p className="text-[8.5px] text-slate-400 mt-0.5">Cart Checkout Rate</p>
              </div>
              <div className="px-3 py-2 rounded-xl bg-black/35 backdrop-blur-md border border-white/15 shadow-md">
                <p className="text-[9px] text-amber-300 uppercase font-bold tracking-wider">P95 Latency</p>
                <p className="text-base sm:text-lg font-black text-white mt-0.5 leading-none">&lt; 120ms</p>
                <p className="text-[8.5px] text-slate-400 mt-0.5">Sub-Second Storefront</p>
              </div>
              <div className="px-3 py-2 rounded-xl bg-black/35 backdrop-blur-md border border-white/15 shadow-md">
                <p className="text-[9px] text-amber-300 uppercase font-bold tracking-wider">Customer LTV</p>
                <p className="text-base sm:text-lg font-black text-white mt-0.5 leading-none">+34%</p>
                <p className="text-[8.5px] text-slate-400 mt-0.5">Emarsys Retention</p>
              </div>
              <div className="px-3 py-2 rounded-xl bg-black/35 backdrop-blur-md border border-white/15 shadow-md">
                <p className="text-[9px] text-amber-300 uppercase font-bold tracking-wider">B2B Reorder</p>
                <p className="text-base sm:text-lg font-black text-emerald-400 mt-0.5 leading-none">3.2x</p>
                <p className="text-[8.5px] text-slate-400 mt-0.5">Velocity Multiplier</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {isFullscreenImageOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setIsFullscreenImageOpen(false)}
        >
          <button
            onClick={() => setIsFullscreenImageOpen(false)}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md transition-all cursor-pointer shadow-xl"
            aria-label="Close full screen"
          >
            <X className="w-6 h-6" />
          </button>
          <div 
            className="relative max-w-7xl w-full max-h-[92vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src="/images/sap_app_cx_3d.jpg" 
              alt="SAP Omnichannel Commerce Command Center" 
              className="max-w-full max-h-[90vh] object-contain rounded-2xl border border-white/20 shadow-2xl"
            />
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <span className="px-4 py-2 rounded-full bg-black/80 border border-white/20 text-xs font-mono font-bold text-amber-300 backdrop-blur-md shadow-xl">
                SAP Commerce Cloud // Omnichannel Journey & CDP Command Center (3D)
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-24">

        {/* =========================================================================
            2. COMPOSABLE ARCHITECTURE STACK (4 Interactive Tiers)
            ========================================================================= */}
        <section className="space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-0.5 bg-amber-500" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-500">
                MACH COMPOSABLE ARCHITECTURE • DECOUPLED STACK
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0A1931] dark:text-white tracking-tight">
              Composable Enterprise Commerce Architecture Stack
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-3xl">
              Eliminate rigid monolithic constraints. Build lightning-fast headless storefronts backed by enterprise-grade SAP S/4HANA order management.
            </p>
          </div>

          {/* Tier Selection Stepper */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 border-b border-slate-200 dark:border-white/10 pb-4">
            {architectureStack.map((tier, idx) => {
              const isActive = activeStackTier === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStackTier(idx)}
                  className={`p-4 rounded-2xl text-left transition-all duration-300 border cursor-pointer ${
                    isActive
                      ? 'bg-amber-500/15 border-amber-500 shadow-md shadow-amber-500/10'
                      : 'bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 hover:border-amber-500/50'
                  }`}
                >
                  <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-amber-400' : 'text-slate-400'}`}>
                    {tier.tier}
                  </span>
                  <p className="text-xs sm:text-sm font-black text-slate-900 dark:text-white mt-1">
                    {tier.name}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Tier Console */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white via-amber-50/20 to-slate-50 dark:from-[#140F08] dark:via-[#0E0B06] dark:to-[#030914] border border-slate-200 dark:border-amber-500/20 shadow-xl space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-white/10">
              <div>
                <span className="text-xs font-mono font-bold text-amber-500 uppercase tracking-wider block mb-1">
                  {currentTier.tier} // {currentTier.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  {currentTier.name}
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1.5 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 font-mono text-xs font-bold">
                  {currentTier.latency}
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 font-mono text-xs font-bold">
                  {currentTier.benefit}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {currentTier.description}
            </p>

            <div>
              <span className="text-xs font-mono font-bold uppercase text-slate-400 block mb-2">
                Pre-Built Production Connectors & Frameworks:
              </span>
              <div className="flex flex-wrap gap-2">
                {currentTier.tech.map((t, tIdx) => (
                  <span key={tIdx} className="px-3 py-1.5 rounded-xl bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 text-xs font-semibold text-slate-800 dark:text-slate-200">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. OMNICHANNEL JOURNEY CONSOLE (5 Functional Streams)
            ========================================================================= */}
        <section className="space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-0.5 bg-amber-500" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-500">
                UNIFIED CUSTOMER EXPERIENCE SUITE
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0A1931] dark:text-white tracking-tight">
              Interactive Omnichannel Customer Experience Console
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-3xl">
              Inspect the five core operational engines that synchronize digital commerce, marketing journeys, customer service, and CPQ quotes.
            </p>
          </div>

          {/* Stream Selector Pills */}
          <div className="flex flex-wrap gap-2">
            {customerJourneyStreams.map((stream, idx) => {
              const isActive = activeJourneyTab === idx;
              return (
                <button
                  key={stream.id}
                  onClick={() => setActiveJourneyTab(idx)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                    isActive
                      ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                      : 'bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:border-amber-500/40'
                  }`}
                >
                  {stream.title}
                </button>
              );
            })}
          </div>

          {/* Stream Console Box */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#071326] border border-slate-200 dark:border-white/10 shadow-sm space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-white/5">
              <div>
                <span className="text-[10px] font-mono font-bold text-amber-500 uppercase tracking-wider block mb-1">
                  {currentStream.badge}
                </span>
                <h3 className="text-xl font-black text-slate-900 dark:text-white">
                  {currentStream.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md">
                {currentStream.summary}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentStream.capabilities.map((cap, cIdx) => (
                <div key={cIdx} className="p-3.5 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/5 flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-100 dark:border-white/5 font-mono">
              {Object.entries(currentStream.metrics).map(([k, v], idx) => (
                <div key={idx} className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-between text-xs">
                  <span className="text-slate-400 capitalize">{k}:</span>
                  <span className="font-bold text-amber-600 dark:text-amber-300">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. AI IN GENERATIVE COMMERCE SPOTLIGHT
            ========================================================================= */}
        <section className="space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-0.5 bg-amber-500" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-500">
                COGNITIVE COMMERCE • GENERATIVE AGENTS
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0A1931] dark:text-white tracking-tight">
              Autonomous AI Agents in Commerce Operations
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-3xl">
              Deploy autonomous commerce agents that automatically generate rich catalog descriptions, optimize margins algorithmically, and resolve customer service cases instantly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aiCommerceAgents.map((agent) => (
              <div
                key={agent.id}
                className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#071326] border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-amber-50 dark:bg-amber-500/10 text-amber-500 flex items-center justify-center mb-4">
                    <Bot className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-amber-500 uppercase tracking-wider block mb-1">
                    {agent.role}
                  </span>
                  <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2">
                    {agent.name}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {agent.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Measured Impact:</span>
                  <span className="font-bold text-amber-600 dark:text-amber-400">{agent.stat}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            5. ENTERPRISE CASE STUDIES
            ========================================================================= */}
        <section className="space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-0.5 bg-amber-500" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-500">
                PROVEN COMMERCE EXCELLENCE
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0A1931] dark:text-white tracking-tight">
              Enterprise CX Transformation Case Studies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((cs, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white dark:bg-[#071326] border border-slate-200 dark:border-white/10 shadow-sm space-y-4"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-black text-slate-900 dark:text-white">
                    {cs.client}
                  </h3>
                  <span className="text-xs font-mono text-amber-600 dark:text-amber-400 font-bold">
                    {cs.scale}
                  </span>
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-300 space-y-1">
                  <p><strong className="text-slate-900 dark:text-white">Challenge:</strong> {cs.challenge}</p>
                  <p><strong className="text-slate-900 dark:text-white">Architecture:</strong> {cs.solution}</p>
                </div>
                <div className="pt-4 border-t border-slate-100 dark:border-white/5 space-y-1.5 font-mono">
                  {cs.outcomes.map((out, oIdx) => (
                    <div key={oIdx} className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>{out}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            6. FAQS & COMMERCE DISCOVERY CTA
            ========================================================================= */}
        <section className="bg-gradient-to-br from-[#120D08] via-[#1A120B] to-[#040C1A] rounded-3xl border border-amber-500/20 p-8 sm:p-12 shadow-2xl text-white space-y-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold text-amber-300 bg-amber-500/10 border border-amber-500/20 mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
              <span>EXECUTIVE COMMERCE ADVISORY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              Frequently Asked Questions on SAP CX & Commerce Cloud
            </h2>
          </div>

          <div className="space-y-3">
            {cxFaqs.map((faq, idx) => {
              const isExpanded = expandedFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setExpandedFaq(isExpanded ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white hover:text-amber-300 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-amber-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>
                  {isExpanded && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Ready to Modernize Your Customer Experience?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                Partner with SAVIC’s certified SAP Commerce Cloud and CDP architects to evaluate your composable storefront latency, CPQ rules engine, and omnichannel conversion roadmap.
              </p>
            </div>

            <button
              onClick={() => onOpenContact('Commerce Architecture Discovery Workshop')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-[#00A3E0] hover:from-amber-400 hover:to-cyan-400 text-slate-950 font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-xl shadow-amber-500/25 shrink-0 cursor-pointer"
            >
              <span>Schedule Architecture Discovery Workshop</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

      </div>

    </div>
  );
};
