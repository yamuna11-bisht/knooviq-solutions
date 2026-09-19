import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Store, 
  ShoppingBag, 
  ShoppingCart, 
  Truck, 
  Boxes, 
  Database, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Activity, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Workflow, 
  RefreshCw, 
  BarChart3, 
  Users, 
  TrendingUp, 
  ChevronRight, 
  Globe2, 
  Clock, 
  ArrowUpRight, 
  Zap, 
  Cloud, 
  Compass, 
  Search, 
  FileText, 
  Sliders,
  Scan,
  Share2,
  PackageCheck
} from 'lucide-react';

interface RetailEcommerceIndustryPageProps {
  onOpenContact?: (defaultTopic?: string) => void;
}

export const RetailEcommerceIndustryPage: React.FC<RetailEcommerceIndustryPageProps> = ({ 
  onOpenContact 
}) => {
  // State for Section 2 Interactive Journey
  const [activeJourneyStep, setActiveJourneyStep] = useState(0);

  // State for Section 4 Circular Chevron Wheel
  const [hoveredWheelIndex, setHoveredWheelIndex] = useState<number | null>(null);

  // State for Section 7 Solution Category Filter
  const [activeSolutionCategory, setActiveSolutionCategory] = useState<string>('ALL');

  // State for Section 9 Transformation Stage
  const [activeTransformStage, setActiveTransformStage] = useState<number>(0);

  // Section 4: 8-Segment Circular Chevron Wheel (KNOOVIQ Retail Platform Ecosystem)
  const wheelSegments = [
    {
      id: 'process',
      title: 'Retail Process Transformation',
      desc: 'Streamline and modernize retail operations',
      side: 'right',
      color: '#22C55E', // Green
      textColor: 'text-emerald-400',
      bgGlow: 'rgba(34, 197, 94, 0.3)',
      icon: RefreshCw
    },
    {
      id: 'commerce',
      title: 'Omnichannel Commerce',
      desc: 'Integrate online and offline sales channels',
      side: 'right',
      color: '#84CC16', // Lime Green
      textColor: 'text-lime-400',
      bgGlow: 'rgba(132, 204, 22, 0.3)',
      icon: ShoppingCart
    },
    {
      id: 'inventory',
      title: 'Merchandise & Inventory Management',
      desc: 'Optimize stock levels and product placement',
      side: 'right',
      color: '#EAB308', // Yellow
      textColor: 'text-yellow-400',
      bgGlow: 'rgba(234, 179, 8, 0.3)',
      icon: Boxes
    },
    {
      id: 'supply-chain',
      title: 'Supply Chain Optimization',
      desc: 'Enhance efficiency and reduce costs',
      side: 'right',
      color: '#F97316', // Orange
      textColor: 'text-orange-400',
      bgGlow: 'rgba(249, 115, 22, 0.3)',
      icon: Truck
    },
    {
      id: 'procurement',
      title: 'Procurement & Supplier Management',
      desc: 'Build strong relationships and manage suppliers',
      side: 'left',
      color: '#F43F5E', // Coral / Rose
      textColor: 'text-rose-400',
      bgGlow: 'rgba(244, 63, 94, 0.3)',
      icon: FileText
    },
    {
      id: 'sales-customer',
      title: 'Sales & Customer Management',
      desc: 'Drive sales and improve customer satisfaction',
      side: 'left',
      color: '#EC4899', // Pink / Magenta
      textColor: 'text-pink-400',
      bgGlow: 'rgba(236, 72, 153, 0.3)',
      icon: Users
    },
    {
      id: 'analytics',
      title: 'Retail Analytics & Business Intelligence',
      desc: 'Gain insights and make data-driven decisions',
      side: 'left',
      color: '#A855F7', // Purple / Violet
      textColor: 'text-purple-400',
      bgGlow: 'rgba(168, 85, 247, 0.3)',
      icon: BarChart3
    },
    {
      id: 'ai-decision',
      title: 'AI-Powered Decision Support',
      desc: 'Leverage AI for smarter retail strategies',
      side: 'left',
      color: '#6366F1', // Indigo / Blue-violet
      textColor: 'text-indigo-400',
      bgGlow: 'rgba(99, 102, 241, 0.3)',
      icon: Cpu
    }
  ];

  // Helper calculation for interlocking circular chevron path
  const getChevronPath = (index: number) => {
    const cx = 250;
    const cy = 250;
    const rOut = 218;
    const rIn = 118;
    const rMid = 168;
    const gap = 1.6;
    const tip = 7.5;
    
    const theta1 = -90 + index * 45 + gap;
    const theta2 = -90 + (index + 1) * 45 - gap;
    
    const rad = (deg: number) => (deg * Math.PI) / 180;
    
    const p1 = { x: cx + rOut * Math.cos(rad(theta1)), y: cy + rOut * Math.sin(rad(theta1)) };
    const p2 = { x: cx + rOut * Math.cos(rad(theta2)), y: cy + rOut * Math.sin(rad(theta2)) };
    const p3 = { x: cx + rMid * Math.cos(rad(theta2 + tip)), y: cy + rMid * Math.sin(rad(theta2 + tip)) };
    const p4 = { x: cx + rIn * Math.cos(rad(theta2)), y: cy + rIn * Math.sin(rad(theta2)) };
    const p5 = { x: cx + rIn * Math.cos(rad(theta1)), y: cy + rIn * Math.sin(rad(theta1)) };
    const p6 = { x: cx + rMid * Math.cos(rad(theta1 + tip)), y: cy + rMid * Math.sin(rad(theta1 + tip)) };
    
    return `M ${p1.x.toFixed(2)} ${p1.y.toFixed(2)} A ${rOut} ${rOut} 0 0 1 ${p2.x.toFixed(2)} ${p2.y.toFixed(2)} L ${p3.x.toFixed(2)} ${p3.y.toFixed(2)} L ${p4.x.toFixed(2)} ${p4.y.toFixed(2)} A ${rIn} ${rIn} 0 0 0 ${p5.x.toFixed(2)} ${p5.y.toFixed(2)} L ${p6.x.toFixed(2)} ${p6.y.toFixed(2)} Z`;
  };

  const getIconCoords = (index: number) => {
    const cx = 250;
    const cy = 250;
    const rMid = 168;
    const gap = 1.6;
    const tip = 7.5;
    const theta1 = -90 + index * 45 + gap;
    const theta2 = -90 + (index + 1) * 45 - gap;
    const midAngle = (theta1 + theta2) / 2 + tip / 2;
    const rad = (deg: number) => (deg * Math.PI) / 180;
    return {
      x: cx + rMid * Math.cos(rad(midAngle)),
      y: cy + rMid * Math.sin(rad(midAngle))
    };
  };

  // Section 2: Journey Steps (Clean, no numbers, no statistics, no percentages)
  const journeySteps = [
    {
      id: 'store',
      label: 'Store Operations',
      sublabel: 'Physical Retail',
      desc: 'Smart POS terminals, RFID shelf auditing, and unified store order fulfillment with continuous offline resilience.',
      tech: 'In-Store Fiori Apps',
      image: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80',
      icon: Store
    },
    {
      id: 'digital',
      label: 'Digital Commerce',
      sublabel: 'Web & Channels',
      desc: 'Headless storefronts, multi-tenant catalog orchestration, and centralized live stock allocation across channels.',
      tech: 'SAP Commerce Cloud',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      icon: ShoppingBag
    },
    {
      id: 'inventory',
      label: 'Inventory Visibility',
      sublabel: 'Universal Stock',
      desc: 'Unified stock pooling across regional distribution centers, dark stores, and retail shelves without data silos.',
      tech: 'S/4HANA ATP Engine',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
      icon: Boxes
    },
    {
      id: 'fulfillment',
      label: 'Order Fulfillment',
      sublabel: 'Dynamic Dispatch',
      desc: 'Algorithmic routing selecting the optimal store or distribution center for same-day dispatch and click-and-collect.',
      tech: 'SAP EWM / TM',
      image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1200&q=80',
      icon: Truck
    },
    {
      id: 'customer',
      label: 'Customer Loyalty',
      sublabel: 'Unified Profiles',
      desc: 'Omnichannel loyalty programs, personalized promotions, and integrated cross-channel return governance.',
      tech: 'SAP Emarsys / CX',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80',
      icon: Users
    },
    {
      id: 'analytics',
      label: 'Enterprise Analytics',
      sublabel: 'Decision Support',
      desc: 'Continuous basket analysis, predictive trend forecasting, and executive margin transparency across channels.',
      tech: 'SAP Analytics Cloud',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      icon: BarChart3
    }
  ];

  // Section 7: 9 Modular Enterprise Industry Solutions (Symmetrical 3x3 Grid)
  const industrySolutions = [
    {
      title: 'Retail & Store Operations',
      tag: 'STORE OPERATIONS',
      category: 'COMMERCE',
      categoryLabel: 'Stores & Channels',
      description: 'Unified management of retail stores, franchise networks, registers, and localized branch stock replenishment.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
      highlights: ['Master Data Sync', 'Store Register Control', 'Store Manager Hub'],
      icon: Store
    },
    {
      title: 'Omnichannel Commerce',
      tag: 'UNIFIED COMMERCE',
      category: 'COMMERCE',
      categoryLabel: 'Stores & Channels',
      description: 'Synchronized digital buying across online storefronts, mobile applications, and direct-to-consumer portals.',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80',
      highlights: ['Marketplace Sync', 'Unified Basket Engine', 'Click & Collect (BOPIS)'],
      icon: ShoppingCart
    },
    {
      title: 'Sales Force & Field Trade',
      tag: 'FIELD OPERATIONS',
      category: 'COMMERCE',
      categoryLabel: 'Stores & Channels',
      description: 'Field rep mobility, tablet order booking, dealer consignment tracking, and visual merchandising compliance.',
      image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80',
      highlights: ['Route Beat Planning', 'Mobile Order Booking', 'Visual Planogram Audit'],
      icon: Share2
    },
    {
      title: 'Inventory Management',
      tag: 'STOCK VISIBILITY',
      category: 'SUPPLY_CHAIN',
      categoryLabel: 'Inventory & SCM',
      description: 'Real-time inventory pooling across regional distribution centers, in-transit shipments, and store backrooms.',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80',
      highlights: ['Unified Stock Pool', 'Safety Stock Control', 'Cross-Channel Allocation'],
      icon: Boxes
    },
    {
      title: 'Warehouse Management',
      tag: 'DC AUTOMATION',
      category: 'SUPPLY_CHAIN',
      categoryLabel: 'Inventory & SCM',
      description: 'High-velocity warehouse automation with RF scanner directed putaway, wave picking, and automated dispatch.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      highlights: ['Direct Dispatch Flow', 'Multi-Zone Picking', 'Reverse Logistics Triage'],
      icon: PackageCheck
    },
    {
      title: 'Supply Chain Logistics',
      tag: 'FREIGHT & LOGISTICS',
      category: 'SUPPLY_CHAIN',
      categoryLabel: 'Inventory & SCM',
      description: 'End-to-end inbound container tracking, carrier coordination, and automated purchase order dispatch governance.',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80',
      highlights: ['Inbound Milestone Tracking', 'Carrier Collaboration', 'Purchase Order Sync'],
      icon: Truck
    },
    {
      title: 'Subscription Billing',
      tag: 'RECURRING BILLING',
      category: 'CUSTOMER',
      categoryLabel: 'Customer & Analytics',
      description: 'Flexible recurring customer billing, subscription replenishment schedules, and automated renewal handling.',
      image: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80',
      highlights: ['Replenishment Cycles', 'Tier Plan Upgrades', 'Payment Settlement Engine'],
      icon: Zap
    },
    {
      title: 'Customer & Loyalty Solutions',
      tag: 'LOYALTY SYSTEM',
      category: 'CUSTOMER',
      categoryLabel: 'Customer & Analytics',
      description: 'Unified customer profiles uniting in-store POS purchase records with digital browsing for personalized engagement.',
      image: 'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&w=800&q=80',
      highlights: ['Single Customer ID', 'Tiered Reward Rules', 'Targeted Engagement'],
      icon: Users
    },
    {
      title: 'Retail Analytics & AI Insights',
      tag: 'APPLIED AI',
      category: 'CUSTOMER',
      categoryLabel: 'Customer & Analytics',
      description: 'Unified merchandising analytics and predictive machine learning models for margin protection and stock positioning.',
      image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80',
      highlights: ['Demand Forecasting', 'Margin Diagnostics', 'Predictive Stock Positioning'],
      icon: Sparkles
    }
  ];

  // Section 3: Retail Challenges & Bottlenecks Data
  const retailChallenges = [
    {
      icon: Share2,
      tag: 'OMNICHANNEL',
      title: 'Omnichannel Complexity',
      desc: 'Managing physical stores, direct web storefronts, third-party marketplaces, and mobile apps with disconnected logic creates catalog confusion and inconsistent customer experiences.',
      footer: 'Cross-Channel Fragmentation'
    },
    {
      icon: Boxes,
      tag: 'INVENTORY',
      title: 'Inventory Visibility',
      desc: 'Lack of single-pane stock visibility leads to stockouts on best-selling SKUs, overstocking in regional depots, and phantom inventory across store shelves.',
      footer: 'Phantom Inventory & Stockouts'
    },
    {
      icon: TrendingUp,
      tag: 'DEMAND',
      title: 'Demand Volatility',
      desc: 'Fast-shifting consumer tastes, social viral trends, and seasonal spikes outpace traditional batch forecasting, leading to margin-eroding emergency markdowns.',
      footer: 'Margin-Eroding Markdowns'
    },
    {
      icon: Truck,
      tag: 'SUPPLY CHAIN',
      title: 'Supply Chain Pressure',
      desc: 'Inbound port congestion, rising freight costs, and sluggish vendor responsiveness complicate multi-node replenishment and compress operating margins.',
      footer: 'Inbound Logistics Bottlenecks'
    },
    {
      icon: Users,
      tag: 'CUSTOMER',
      title: 'Customer Expectations',
      desc: 'Consumers expect same-day doorstep fulfillment, frictionless in-store returns for online purchases, and personalized promotions across all touchpoints.',
      footer: 'Seamless Experience Mandate'
    },
    {
      icon: Database,
      tag: 'DATA & CORE',
      title: 'Data Fragmentation',
      desc: 'Customer records in CRM, transactions in POS, and inventory balances in legacy ERP create disparate numbers, preventing timely commercial decision-making.',
      footer: 'Siloed Disparate Databases'
    }
  ];

  // Section 9: Transformation in Action (Connected 4-Phase Architecture Pipeline)
  const transformationStages = [
    {
      phase: 'INITIAL CHALLENGE',
      badge: 'SILOED STATE',
      title: 'Fragmented Channels',
      subtitle: 'Legacy Complexity',
      description: 'Physical stores, online storefronts, and distribution centers operating on disjointed legacy systems, resulting in phantom stock and manual reconciliation burdens.',
      accent: 'rose',
      borderBase: 'border-rose-500/30 hover:border-rose-400',
      activeBorder: 'border-rose-400 ring-2 ring-rose-500/30 bg-rose-950/20 shadow-[0_0_25px_rgba(244,63,94,0.2)]',
      glowColor: 'bg-rose-500',
      textColor: 'text-rose-400',
      icon: Activity,
      tag: 'Inventory Silos',
      before: 'Fragmented batch sync & phantom stock cancellations',
      after: 'Synchronized real-time event pipeline across channels',
      metrics: ['POS Discrepancies', 'Manual PO Clearing', 'Fulfillment Delays']
    },
    {
      phase: 'STRATEGIC FRAMEWORK',
      badge: 'CLEAN CORE',
      title: 'Event-Driven Fabric',
      subtitle: 'Architecture Foundation',
      description: 'Decoupling the ERP core with an asynchronous event mesh, synchronizing catalog master data and inventory reservations instantaneously across all nodes.',
      accent: 'sky',
      borderBase: 'border-sky-500/30 hover:border-sky-400',
      activeBorder: 'border-sky-400 ring-2 ring-sky-500/30 bg-sky-950/20 shadow-[0_0_25px_rgba(56,189,248,0.2)]',
      glowColor: 'bg-sky-500',
      textColor: 'text-sky-400',
      icon: Workflow,
      tag: 'Real-Time Event Mesh',
      before: 'Overnight batch files & stale inventory views',
      after: 'Sub-second event propagation across the enterprise',
      metrics: ['Decoupled Core', 'Event-Driven Mesh', 'Master Data Sync']
    },
    {
      phase: 'DEPLOYED STACK',
      badge: 'LIVE ECOSYSTEM',
      title: 'Engineered Stack',
      subtitle: 'SAP S/4HANA + BTP',
      description: 'Deploying S/4HANA Retail coupled with Extended Warehouse Management and SAP BTP integration, driving dynamic Available-to-Promise fulfillment routing.',
      accent: 'cyan',
      borderBase: 'border-cyan-500/30 hover:border-cyan-400',
      activeBorder: 'border-cyan-400 ring-2 ring-cyan-500/30 bg-cyan-950/20 shadow-[0_0_25px_rgba(34,211,238,0.2)]',
      glowColor: 'bg-cyan-500',
      textColor: 'text-cyan-400',
      icon: Cpu,
      tag: 'Orchestrated S/4HANA',
      before: 'Disjointed warehouse logic and isolated carts',
      after: 'Centralized dynamic aATP routing and touchless workflows',
      metrics: ['S/4HANA Retail Core', 'EWM Warehouse Engine', 'Dynamic aATP Routing']
    },
    {
      phase: 'STRATEGIC VALUE',
      badge: 'REALIZED IMPACT',
      title: 'Operational Velocity',
      subtitle: 'Unified Execution',
      description: 'Attaining end-to-end inventory certainty across stores and DCs, accelerating dispatch cycles, protecting gross margins, and boosting buyer satisfaction.',
      accent: 'emerald',
      borderBase: 'border-emerald-500/30 hover:border-emerald-400',
      activeBorder: 'border-emerald-400 ring-2 ring-emerald-500/30 bg-emerald-950/20 shadow-[0_0_25px_rgba(52,211,153,0.2)]',
      glowColor: 'bg-emerald-500',
      textColor: 'text-emerald-400',
      icon: ShieldCheck,
      tag: 'Touchless Operations',
      before: 'Unpredictable shipment delays and high returns',
      after: 'Predictable fulfillment velocity and sustained margin health',
      metrics: ['Single Stock Pool', 'Touchless Invoicing', 'Protected Margin Health']
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#0070C0] selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* =========================================================================
          SECTION 1: HERO SECTION (Pure Enterprise Retail Hero - Zero Shading on Image)
          ========================================================================= */}
      <section className="relative w-full min-h-[620px] lg:min-h-[680px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 overflow-hidden bg-slate-900">
        
        {/* Full-Bleed Enterprise Retail Background Image with Seamless Cinematic Scrim */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=2000&q=80" 
            alt="Connected Retail Flagship Enterprise Atmosphere" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Seamless Cinematic Left Scrim */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950/95 via-slate-950/80 sm:via-slate-950/60 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          
          <div className="max-w-3xl space-y-4">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="space-y-2.5"
            >
              {/* Practice Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 shadow-sm">
                <Store className="w-3.5 h-3.5 text-cyan-400" />
                <span>KNOOVIQ INDUSTRY PRACTICE</span>
              </div>
              
              {/* Prominent High-Impact Heading with Crisp Drop-Shadow */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                Intelligent ERP for <br />
                <span className="text-cyan-400">Retail & E-Commerce</span>
              </h1>

              {/* Subheading / Value Proposition */}
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight leading-snug pt-0.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                Unified Omnichannel Commerce, Agile Inventory Routing & Storefront Control.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3 max-w-2xl"
            >
              {/* Clear Open Typography */}
              <p className="text-sm sm:text-base lg:text-[17px] text-slate-100 font-normal leading-relaxed drop-shadow-sm">
                Empowering retail brands, digital merchants, and omnichannel store networks with{' '}
                <strong className="text-white font-semibold">SAP S/4HANA Clean Core</strong>, automated{' '}
                <strong className="text-cyan-300 font-semibold">AI Demand Sensing</strong>, dynamic order orchestration, and real-time inventory visibility.
              </p>
              
              {/* Clean Feature Highlights */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Clean Core Architecture</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>AI Demand Sensing</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  <span>Sub-Second Stock Visibility</span>
                </span>
              </div>
            </motion.div>

            {/* Enterprise Architectural Trust Ribbon */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 sm:mt-8 pt-4 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
            >
              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <Cpu className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">ARCHITECTURE</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">SAP S/4HANA Core</div>
                <div className="text-xs text-slate-300 mt-0.5">Clean Core Ready</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <Store className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">OMNICHANNEL</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">Unified Commerce</div>
                <div className="text-xs text-slate-300 mt-0.5">POS & Digital Sync</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <Boxes className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">STOCK VISIBILITY</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">Sub-Second Accuracy</div>
                <div className="text-xs text-slate-300 mt-0.5">Zero Phantom Stock</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <Truck className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">FULFILLMENT</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">Dynamic Routing</div>
                <div className="text-xs text-slate-300 mt-0.5">Touchless Orchestration</div>
              </div>
            </motion.div>

          </div>

        </div>

      </section>

      {/* =========================================================================
          SECTION 2: EXECUTIVE INDUSTRY PERSPECTIVE ("Building a Connected Retail Enterprise")
          ========================================================================= */}
      <section className="py-12 sm:py-14 lg:py-16 bg-gradient-to-b from-white via-[#F8FBFE] to-white border-b border-slate-200 relative overflow-hidden">
        
        {/* Subtle Ambient Tone */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#0070C0]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-400/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-6 space-y-4">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-300 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
                <Activity className="w-3.5 h-3.5 text-[#0070C0]" />
                <span>EXECUTIVE INDUSTRY PERSPECTIVE</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight leading-tight">
                Building a Connected <span className="text-[#0070C0]">Retail Enterprise</span>
              </h2>

              {/* Executive Thesis Quote */}
              <div className="border-l-4 border-[#0070C0] border-y border-r border-slate-300 pl-4 py-2 bg-gradient-to-r from-sky-50/80 via-sky-50/30 to-transparent rounded-r-xl">
                <p className="text-sm font-semibold text-slate-800 leading-relaxed italic">
                  &ldquo;Modern retail success is defined by channel synchronization: unifying physical customer touchpoints, digital commerce, and agile supply chains into one cohesive operational core.&rdquo;
                </p>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                Knooviq engineers an integrated enterprise ecosystem on SAP S/4HANA Clean Core. By bridging data across retail touchpoints and distribution networks, retail leaders gain continuous visibility, automated order flow, and responsive operations.
              </p>

              {/* 3 Executive Strategic Pillars */}
              <div className="space-y-2.5 pt-1">
                <div className="p-3.5 rounded-xl border border-slate-300 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-slate-300">
                    <Store className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-950">Unified Commerce & Storefront Backbone</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Single-pane-of-glass coordination across in-store POS, headless digital stores, and sales channels without latency.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-slate-300 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-slate-300">
                    <Boxes className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-950">Intelligent Stock Routing</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Pool enterprise inventory across retail shelves, micro-hubs, and regional distribution centers for flexible fulfillment.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-slate-300 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-slate-300">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-950">Operational Financial Governance</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Continuous multi-channel reconciliations, promotional compliance, and unified financial ledger integration.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Side: Clean Photography Showcase & Stage Navigator (No Overlays on Image, No Numbers/Percentages) */}
            <div className="lg:col-span-6 space-y-3.5">
              
              {/* Pure High-Resolution Photography Showcase with Defined Dark Border */}
              <div className="relative h-60 sm:h-72 w-full rounded-2xl overflow-hidden border-2 border-slate-300 shadow-md bg-slate-100">
                <img 
                  src={journeySteps[activeJourneyStep].image} 
                  alt={journeySteps[activeJourneyStep].label} 
                  className="w-full h-full object-cover object-center transition-all duration-500"
                />
              </div>

              {/* Stage Navigation Grid (Clean Labels + Icons, No Numbers) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {journeySteps.map((step, idx) => {
                  const isSelected = activeJourneyStep === idx;
                  const StepIcon = step.icon;
                  return (
                    <button
                      key={step.id}
                      type="button"
                      onClick={() => setActiveJourneyStep(idx)}
                      className={`p-2.5 rounded-xl border text-left transition-all flex items-center gap-2.5 ${
                        isSelected
                          ? 'bg-[#0070C0] text-white border-2 border-[#0070C0] shadow-sm scale-[1.01]'
                          : 'bg-white text-slate-700 border border-slate-300 hover:bg-sky-50 hover:border-[#0070C0]'
                      }`}
                    >
                      <div className={`p-1.5 rounded-lg shrink-0 ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-sky-50 text-[#0070C0] border border-slate-300'
                      }`}>
                        <StepIcon className="w-3.5 h-3.5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold truncate">{step.label}</div>
                        <div className={`text-[10px] truncate ${isSelected ? 'text-sky-100' : 'text-slate-500'}`}>
                          {step.sublabel}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Selected Stage Detail Card (Placed Below the Image & Controls with Defined Border) */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-slate-300 shadow-xs space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#003B73]">
                    {journeySteps[activeJourneyStep].label}
                  </span>
                  <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-sky-50 text-[#0070C0] border border-sky-300">
                    {journeySteps[activeJourneyStep].tech}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {journeySteps[activeJourneyStep].desc}
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: INDUSTRY CHALLENGES ("Navigating the Complexity of Modern Retail")
          ========================================================================= */}
      <section className="py-12 sm:py-14 lg:py-16 bg-[#F8FAFC] border-b border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-2.5"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-mono font-bold uppercase tracking-wider text-rose-600">
              <Compass className="w-3.5 h-3.5 text-rose-600" />
              <span>CORE BOTTLENECKS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              Navigating the Complexity of Modern Retail
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              Disjointed IT platforms and siloed business functions constrain agility. Knooviq addresses the six systemic challenges modern retail leaders face.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {retailChallenges.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: idx * 0.08, ease: "easeOut" }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="h-full flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-white border border-slate-300 shadow-xs hover:border-[#0070C0] hover:shadow-lg transition-all group"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 rounded-xl bg-sky-50 text-[#0070C0] border border-slate-200 group-hover:bg-[#0070C0] group-hover:text-white group-hover:scale-105 transition-all">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-mono text-[#0070C0] font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0070C0] group-hover:scale-125 transition-transform" />
                    <span>{item.footer}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: KNOOVIQ RETAIL PLATFORM ECOSYSTEM (Circular Chevron Radial Diagram)
          ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#070B14] text-white border-b border-slate-800 relative overflow-hidden">
        
        {/* Dark Ambient Radial Hues */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-indigo-500/10 via-emerald-500/10 to-pink-500/10 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 shadow-inner">
              <Workflow className="w-3.5 h-3.5 text-cyan-300" />
              <span>CONNECTED RETAIL ECOSYSTEM</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Capabilities Designed for Modern Retail
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              A synchronized, circular enterprise platform uniting touchpoints, intelligent inventory, agile logistics, clean ERP ledgers, and cognitive AI into one continuous loop.
            </p>
          </motion.div>

          {/* 3-Column Radial Wheel & Flanking Capabilities Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            
            {/* Left Column (4 Capabilities: Top-Left to Bottom-Left) */}
            <div className="order-2 lg:order-1 lg:col-span-4 flex flex-col justify-between space-y-4 sm:space-y-5">
              {[7, 6, 5, 4].map((segIdx) => {
                const item = wheelSegments[segIdx];
                const isHovered = hoveredWheelIndex === segIdx;
                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setHoveredWheelIndex(segIdx)}
                    onMouseLeave={() => setHoveredWheelIndex(null)}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      isHovered
                        ? 'bg-slate-900/95 border-white/40 shadow-xl -translate-x-1'
                        : 'bg-slate-900/40 border-slate-800/90 hover:border-slate-700 hover:bg-slate-900/60'
                    }`}
                    style={{
                      boxShadow: isHovered ? `0 0 24px ${item.bgGlow}` : undefined,
                      borderColor: isHovered ? item.color : undefined
                    }}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1 text-left">
                        <h4 className="text-sm sm:text-base font-bold tracking-tight" style={{ color: item.color }}>
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-300 leading-relaxed font-medium">
                          {item.desc}
                        </p>
                      </div>
                      <div 
                        className="w-2 h-7 rounded-full shrink-0 mt-0.5 transition-all duration-300"
                        style={{ 
                          backgroundColor: item.color,
                          boxShadow: isHovered ? `0 0 12px ${item.color}` : 'none'
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Center Column: 8-Segment Interlocking Chevron Circular Wheel */}
            <div className="order-1 lg:order-2 lg:col-span-4 flex justify-center items-center py-4 sm:py-6">
              <div className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[460px] aspect-square flex items-center justify-center">
                
                {/* Glow ring under wheel */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/15 via-emerald-500/10 to-pink-500/15 blur-2xl rounded-full pointer-events-none" />

                <svg
                  viewBox="0 0 500 500"
                  className="w-full h-full drop-shadow-2xl overflow-visible"
                >
                  {/* 8 Interlocking Chevron Segments */}
                  {wheelSegments.map((seg, idx) => {
                    const isHovered = hoveredWheelIndex === idx;
                    const d = getChevronPath(idx);
                    const iconPos = getIconCoords(idx);
                    const IconComponent = seg.icon;

                    return (
                      <g
                        key={seg.id}
                        onMouseEnter={() => setHoveredWheelIndex(idx)}
                        onMouseLeave={() => setHoveredWheelIndex(null)}
                        className="cursor-pointer transition-all duration-300"
                      >
                        {/* Chevron Wedge */}
                        <path
                          d={d}
                          fill={isHovered ? `${seg.color}25` : '#0A0F1D'}
                          stroke={seg.color}
                          strokeWidth={isHovered ? "3.5" : "2.2"}
                          strokeLinejoin="round"
                          className="transition-all duration-300"
                          style={{
                            filter: isHovered ? `drop-shadow(0 0 10px ${seg.color})` : undefined
                          }}
                        />

                        {/* Segment Icon */}
                        <foreignObject
                          x={iconPos.x - 14}
                          y={iconPos.y - 14}
                          width={28}
                          height={28}
                          className="pointer-events-none overflow-visible"
                        >
                          <div 
                            className={`w-full h-full flex items-center justify-center transition-transform duration-300 ${
                              isHovered ? 'scale-125' : ''
                            }`}
                            style={{ color: seg.color }}
                          >
                            <IconComponent className="w-5 h-5 drop-shadow-md" />
                          </div>
                        </foreignObject>
                      </g>
                    );
                  })}

                  {/* Center Hub Outer Circle */}
                  <circle
                    cx="250"
                    cy="250"
                    r="106"
                    fill="#070B14"
                    stroke="#FFFFFF"
                    strokeWidth="2.5"
                    className="drop-shadow-2xl"
                  />
                  <circle
                    cx="250"
                    cy="250"
                    r="102"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="1"
                    strokeOpacity="0.25"
                  />

                  {/* Center Hub Label */}
                  <foreignObject
                    x="150"
                    y="200"
                    width="200"
                    height="100"
                    className="pointer-events-none"
                  >
                    <div className="w-full h-full flex flex-col items-center justify-center text-center select-none px-3">
                      <span className="text-sm sm:text-base font-black text-white tracking-wider uppercase leading-tight">
                        KNOOVIQ Retail
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-300 mt-1 tracking-wide">
                        Platform
                      </span>
                    </div>
                  </foreignObject>
                </svg>

              </div>
            </div>

            {/* Right Column (4 Capabilities: Top-Right to Bottom-Right) */}
            <div className="order-3 lg:order-3 lg:col-span-4 flex flex-col justify-between space-y-4 sm:space-y-5">
              {[0, 1, 2, 3].map((segIdx) => {
                const item = wheelSegments[segIdx];
                const isHovered = hoveredWheelIndex === segIdx;
                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setHoveredWheelIndex(segIdx)}
                    onMouseLeave={() => setHoveredWheelIndex(null)}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      isHovered
                        ? 'bg-slate-900/95 border-white/40 shadow-xl translate-x-1'
                        : 'bg-slate-900/40 border-slate-800/90 hover:border-slate-700 hover:bg-slate-900/60'
                    }`}
                    style={{
                      boxShadow: isHovered ? `0 0 24px ${item.bgGlow}` : undefined,
                      borderColor: isHovered ? item.color : undefined
                    }}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div 
                        className="w-2 h-7 rounded-full shrink-0 mt-0.5 transition-all duration-300"
                        style={{ 
                          backgroundColor: item.color,
                          boxShadow: isHovered ? `0 0 12px ${item.color}` : 'none'
                        }}
                      />
                      <div className="space-y-1 text-left flex-1">
                        <h4 className="text-sm sm:text-base font-bold tracking-tight" style={{ color: item.color }}>
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-300 leading-relaxed font-medium">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 6: SAP & TECHNOLOGY SOLUTIONS ("Technology Foundation for Intelligent Retail")
          ========================================================================= */}
      <section className="py-20 sm:py-24 lg:py-28 bg-white border-b border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
              <Layers className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>PLATFORM ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Technology Foundation for Intelligent Retail
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We engineer clean-core SAP technology suites layered with modern cloud extensions, role-based interfaces, and autonomous business AI.
            </p>
          </div>

          {/* Layered Technology Ecosystem Visual */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Tech 1: SAP S/4HANA */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">CORE ERP SUITE</span>
                <Cpu className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                SAP S/4HANA
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Integrated enterprise processes uniting financial ledgers, vendor procurement, stock valuation, and multi-channel fulfillment into a single in-memory database.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• Universal Journal (ACDOCA)</div>
                <div className="flex items-center gap-1.5">• Real-time MRP Live processing</div>
              </div>
            </div>

            {/* Tech 2: SAP Retail */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">DOMAIN SOLUTION</span>
                <Store className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                SAP Retail
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Retail-specific capabilities purpose-built for merchandise category trees, store replenishment algorithms, seasonal promotions, and wholesale distribution.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• Article Master & Variant Grids</div>
                <div className="flex items-center gap-1.5">• Allocation Tables & Push/Pull logic</div>
              </div>
            </div>

            {/* Tech 3: SAP BTP */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">INTEGRATION & EXTENSIONS</span>
                <Cloud className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                SAP Business Technology Platform
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Seamless side-by-side extensibility keeping the ERP core clean while connecting eCommerce APIs, payment gateways, and custom loyalty applications.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• SAP Integration Suite (OData / REST)</div>
                <div className="flex items-center gap-1.5">• Event-Driven Architecture (Event Mesh)</div>
              </div>
            </div>

            {/* Tech 4: SAP Analytics Cloud */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">BUSINESS INTELLIGENCE</span>
                <BarChart3 className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                SAP Analytics Cloud
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Real-time visibility into sell-through velocity, SKU profitability, promotional return on spend, and enterprise merchandise financial planning (MFP).
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• Collaborative Merchandise Planning</div>
                <div className="flex items-center gap-1.5">• Predictive Margin Sensitivity Models</div>
              </div>
            </div>

            {/* Tech 5: SAP Fiori */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">ROLE-BASED UX</span>
                <Scan className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                SAP Fiori
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Intuitive mobile and web apps designed specifically for store associates, DC inventory pickers, buyers, and regional merchandise directors.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• Handheld Barcode Scanning UX</div>
                <div className="flex items-center gap-1.5">• Touch-optimized store receiving</div>
              </div>
            </div>

            {/* Tech 6: AI & Automation */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">COGNITIVE ENGINES</span>
                <Sparkles className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                AI & Automation
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Intelligent demand forecasting, automated re-order thresholds, dynamic bundle recommendations, and touchless invoice reconciliation.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• Predictive stock repositioning</div>
                <div className="flex items-center gap-1.5">• Automated vendor dispute resolutions</div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: INDUSTRY SOLUTIONS ("Solutions for Every Stage of Retail")
          ========================================================================= */}
      <section id="industry-solutions" className="py-10 sm:py-12 lg:py-14 bg-[#F8FAFC] border-b border-slate-200 relative scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-7 sm:mb-8 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-300 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0] shadow-2xs">
              <ShoppingBag className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>ENTERPRISE FUNCTIONAL CATALOG</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Solutions for Every Stage of Retail
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              Explore specialized enterprise functional modules engineered to modernize retail execution across physical stores, digital channels, and unified supply networks.
            </p>
          </div>

          {/* Solution Domain Category Tabs - 4 Symmetrical Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-7 sm:mb-8">
            {[
              { id: 'ALL', label: 'All Solutions' },
              { id: 'COMMERCE', label: 'Stores & Channels' },
              { id: 'SUPPLY_CHAIN', label: 'Inventory & SCM' },
              { id: 'CUSTOMER', label: 'Customer & Analytics' }
            ].map((cat) => {
              const isActive = activeSolutionCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveSolutionCategory(cat.id)}
                  className={`industry-category-tab px-4 py-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-[#0070C0] text-white shadow-md shadow-[#0070C0]/25 scale-105'
                      : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-300 hover:border-slate-400 shadow-2xs'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Structured Compact 3-Column Enterprise Grid (Symmetrical 3x3 Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 items-stretch">
            {industrySolutions
              .filter((sol) => activeSolutionCategory === 'ALL' || sol.category === activeSolutionCategory)
              .map((sol) => {
                const IconComponent = sol.icon;
                return (
                  <div
                    key={sol.title}
                    className="h-[400px] rounded-xl bg-white border-2 border-slate-300 shadow-xs hover:border-[#0070C0] hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col group"
                  >
                    {/* 1. Top Image Banner - 50% Pure Photo */}
                    <div className="relative h-1/2 w-full overflow-hidden bg-slate-100 shrink-0">
                      <img 
                        src={sol.image} 
                        alt={sol.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-transparent transition-colors pointer-events-none" />
                      
                      {/* Floating Tag Pill */}
                      <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-slate-950/80 border border-white/20 text-[9px] font-mono font-bold text-sky-300 uppercase tracking-wider backdrop-blur-md shadow-xs">
                        {sol.tag}
                      </div>
                    </div>

                    {/* 2. Card Content Body - 50% Height */}
                    <div className="h-1/2 p-3.5 sm:p-4 flex flex-col justify-between space-y-2.5 overflow-hidden">
                      
                      <div className="space-y-1.5">
                        {/* Category & Icon Indicator */}
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono font-bold text-[#0070C0] uppercase tracking-wider">
                            {sol.categoryLabel}
                          </span>
                          <div className="p-1.5 rounded-lg bg-sky-50 text-[#0070C0] border border-slate-200 group-hover:bg-[#0070C0] group-hover:text-white transition-all">
                            <IconComponent className="w-3.5 h-3.5" />
                          </div>
                        </div>

                        {/* Title - Bold & Compact */}
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#0070C0] transition-colors leading-snug">
                          {sol.title}
                        </h3>

                        {/* Description - Snug & Concise */}
                        <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                          {sol.description}
                        </p>
                      </div>

                      {/* Key Capabilities Structured Inline Chips */}
                      <div className="space-y-2.5 pt-1">
                        <div className="flex flex-wrap gap-1.5">
                          {sol.highlights.map((hl, hIdx) => (
                            <span
                              key={hIdx}
                              className="px-2 py-0.5 rounded-md bg-slate-100 text-[10px] font-medium text-slate-700 border border-slate-200/80"
                            >
                              {hl}
                            </span>
                          ))}
                        </div>

                      </div>

                    </div>
                  </div>
                );
              })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 8: BUSINESS OUTCOMES ("Turning Retail Complexity into Business Advantage")
          ========================================================================= */}
      <section className="py-20 sm:py-24 lg:py-28 bg-white border-b border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold uppercase tracking-wider text-emerald-700">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
              <span>MEASURABLE BUSINESS IMPACT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Turning Retail Complexity into Business Advantage
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              When commerce, stock, fulfillment, and financial ledgers operate in unison, retail organizations achieve sustainable commercial performance.
            </p>
          </div>

          {/* 6 Outcomes (Large typography, flowing blue paths, generous whitespace, NO dashboards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Outcome 1 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <Boxes className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Better Inventory Visibility
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Know what is available, where it is, and when it is needed. Eradicate phantom stock and guarantee reliable available-to-promise commitments across channels.
              </p>
            </div>

            {/* Outcome 2 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Faster Operations
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Automate repetitive processes and streamline workflows. Eliminate manual PO re-keying, accelerate cross-dock sortation, and speed up closing cycles.
              </p>
            </div>

            {/* Outcome 3 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Improved Customer Experience
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Deliver consistent experiences across physical and digital channels. Enable flexible buy-online-pickup-in-store (BOPIS) and hassle-free omnichannel returns.
              </p>
            </div>

            {/* Outcome 4 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Smarter Decisions
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Use connected data and analytics to make informed decisions. Predict regional markdown curves before excess inventory degrades commercial margins.
              </p>
            </div>

            {/* Outcome 5 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Optimized Supply Chain
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Improve coordination from suppliers to warehouses to customers. Synchronize inbound container deliveries with automated store staging slots.
              </p>
            </div>

            {/* Outcome 6 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Scalable Growth
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Build a technology foundation that can support new channels, products, and markets. Rapidly onboard franchise partners and international storefronts.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 9: SUCCESS STORY / USE CASE ("Transformation in Action")
          ========================================================================= */}
      <section className="py-10 sm:py-12 lg:py-14 bg-gradient-to-b from-[#060D1A] via-[#0A1628] to-[#060C17] border-b border-slate-800 relative overflow-hidden text-white">
        
        {/* Subtle Ambient Background Grids & Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(0,112,192,0.18),transparent)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header - Compact & High-Impact */}
          <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-8 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <Workflow className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>TRANSFORMATION ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Transformation in Action
            </h2>
            <div className="text-xs sm:text-sm font-semibold text-cyan-400 font-mono tracking-wider uppercase">
              Intelligent Omnichannel Retail Architecture
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              How enterprise retailers advance from legacy channel fragmentation to an integrated clean-core event ecosystem.
            </p>
          </div>

          {/* Flowing Laser Conduit Connecting the Stages */}
          <div className="hidden lg:block relative mb-4">
            <div className="h-0.5 bg-slate-800 rounded-full w-full relative overflow-hidden">
              <motion.div 
                animate={{ x: ['-25%', '125%'] }} 
                transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
                className="absolute top-0 bottom-0 w-48 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#22d3ee]" 
              />
            </div>
          </div>

          {/* 4 Connected Interactive Transformation Cards (Compact, Crisp, Zero Numbers) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 items-stretch mb-3.5 sm:mb-4">
            {transformationStages.map((stage, sIdx) => {
              const IconComp = stage.icon;
              const isSelected = activeTransformStage === sIdx;
              return (
                <div
                  key={stage.title}
                  onClick={() => setActiveTransformStage(sIdx)}
                  className={`cursor-pointer rounded-xl backdrop-blur-md p-4 flex flex-col justify-between transition-all duration-300 relative group overflow-hidden border-2 ${
                    isSelected
                      ? stage.activeBorder
                      : `bg-white/[0.03] ${stage.borderBase}`
                  }`}
                >
                  {/* Subtle Top Glowing Strip on Active */}
                  {isSelected && (
                    <div className={`absolute top-0 left-0 right-0 h-0.5 ${stage.glowColor} shadow-[0_0_10px_currentColor]`} />
                  )}

                  <div className="space-y-2.5">
                    {/* Header: Phase badge & Icon */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className={`w-2 h-2 rounded-full ${stage.glowColor} ${isSelected ? 'animate-ping' : ''}`} />
                        <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${stage.textColor}`}>
                          {stage.badge}
                        </span>
                      </div>
                      <div className={`p-1.5 rounded-lg bg-white/5 border border-white/10 ${stage.textColor} group-hover:scale-110 transition-transform`}>
                        <IconComp className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Stage Title & Subtitle */}
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                        {stage.title}
                      </h3>
                      <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wide">
                        {stage.subtitle}
                      </div>
                    </div>

                    {/* Concise Narrative */}
                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                      {stage.description}
                    </p>
                  </div>

                  {/* Bottom Deliverable Pillar */}
                  <div className="pt-2.5 mt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[9.5px] font-mono font-medium text-slate-400">
                      {stage.tag}
                    </span>
                    <span className={`text-[9.5px] font-mono font-bold uppercase tracking-wider ${stage.textColor} group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-0.5`}>
                      <span>{isSelected ? 'ACTIVE' : 'INSPECT'}</span>
                      <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Live Transformation Console / Delta Inspector (Compact) */}
          {(() => {
            const currentStage = transformationStages[activeTransformStage];
            return (
              <div className="rounded-xl bg-slate-900/90 border-2 border-slate-700/80 p-3.5 sm:p-4 shadow-xl backdrop-blur-md relative overflow-hidden">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3">
                  
                  {/* Left: Active Stage Name & Transformation Contrast */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 flex-1">
                    <div className="flex items-center gap-2 shrink-0">
                      <span className={`w-2.5 h-2.5 rounded-full ${currentStage.glowColor} animate-pulse`} />
                      <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                        {currentStage.title} Delta:
                      </span>
                    </div>

                    {/* Before vs After Ribbon */}
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="px-2 py-0.5 rounded-md bg-rose-950/60 border border-rose-500/40 text-rose-300 text-[10.5px] font-mono">
                        PRIOR: {currentStage.before}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="px-2 py-0.5 rounded-md bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-[10.5px] font-mono font-medium">
                        TRANSFORMED: {currentStage.after}
                      </span>
                    </div>
                  </div>

                  {/* Right: Stage Key Capabilities Chips */}
                  <div className="flex flex-wrap items-center gap-1.5 shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-white/10 w-full lg:w-auto">
                    {currentStage.metrics.map((item, mIdx) => (
                      <span
                        key={mIdx}
                        className="px-2 py-0.5 rounded-md bg-white/5 border border-white/15 text-[10px] font-mono text-slate-300 font-semibold"
                      >
                        ✓ {item}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            );
          })()}

        </div>
      </section>


      {/* =========================================================================
          SECTION 11: FINAL CTA (Full-Width Blue Executive Section)
          ========================================================================= */}
      <section className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-gradient-to-r from-[#003B73] via-[#005B9E] to-[#0070C0] text-white">
        
        {/* Abstract 3D Digital Commerce / Network Mesh Visual (Minimal, Elegant, No Text) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div 
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.4) 0%, transparent 70%)',
              backgroundSize: '100% 100%'
            }}
          />
          <div 
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: 'linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)',
              backgroundSize: '36px 36px'
            }}
          />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-mono font-bold uppercase tracking-widest text-cyan-200 backdrop-blur-sm shadow-sm">
            <Store className="w-3.5 h-3.5 text-cyan-300" />
            <span>CONNECT YOUR RETAIL ECOSYSTEM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Build a Smarter Retail Business?
          </h2>

          <p className="text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed font-normal">
            Connect your retail operations, technology, data, and customer experience with Knooviq.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => onOpenContact?.('Retail & E-Commerce Consultation')}
              className="px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-[#003B73] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-2xl shadow-black/25 transition-all flex items-center gap-2 group"
            >
              <span>Talk to Our Retail Experts</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#0070C0]" />
            </button>

            <Link
              to="/solutions/sap-s4hana"
              className="px-8 py-4 rounded-xl bg-transparent hover:bg-white/10 text-white text-xs sm:text-sm font-bold uppercase tracking-wider border-2 border-white/40 hover:border-white transition-all flex items-center gap-2"
            >
              <span>Explore SAP Solutions</span>
            </Link>
          </div>

          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-sky-200">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              <span>SAP Certified Clean Core</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-cyan-300" />
              <span>Rapid Time-to-Value Delivery</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Globe2 className="w-4 h-4 text-sky-300" />
              <span>Global 24/7 SLA AMS Support</span>
            </span>
          </div>

        </div>

      </section>

    </div>
  );
};
