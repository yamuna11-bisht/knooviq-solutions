import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Activity, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Workflow, 
  BarChart3, 
  Users, 
  TrendingUp, 
  ChevronRight, 
  Globe2, 
  Zap, 
  Sliders,
  PackageCheck,
  Building2,
  Clock,
  Briefcase,
  DollarSign,
  FileCheck,
  Ship,
  Anchor,
  Scale,
  CreditCard,
  FileText,
  Boxes,
  Truck,
  RotateCcw,
  Compass,
  Database,
  LineChart,
  Settings,
  Share2
} from 'lucide-react';

interface TradingIndustryPageProps {
  onOpenContact?: (defaultTopic?: string) => void;
}

export const TradingIndustryPage: React.FC<TradingIndustryPageProps> = ({ 
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

  // Section 2: Journey Steps (6 Steps)
  const journeySteps = [
    {
      title: 'Deal Origination & Quote',
      subtitle: 'Market Benchmarking',
      desc: 'Capturing commodity counterparty quotes, price benchmark indexes, and physical delivery terms into clean digital records.',
      icon: Briefcase,
      metric: 'Real-Time Pricing Formula Sync',
      tech: 'SAP Commodity Deal Capture',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Credit & FX Exposure Hedging',
      subtitle: 'Risk & Limit Verification',
      desc: 'Real-time counterparty credit exposure checks and automated currency hedging contract tie-ups before trade execution.',
      icon: Scale,
      metric: '100% FX Margin Lock-In',
      tech: 'SAP TRM Hedging Ledger',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Charter & Maritime Logistics',
      subtitle: 'Vessel Nomination & Laytime',
      desc: 'Laytime tracking, electronic bill of lading issuance, and bulk cargo vessel nomination schedules with real-time AIS telemetry.',
      icon: Ship,
      metric: 'Zero Preventable Demurrage Claims',
      tech: 'Automated Laytime Calculator',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Customs & Port Terminal Clearing',
      subtitle: 'Tariff Classification & GTS',
      desc: 'Automated HS code tariff calculation, terminal discharge logging, port demurrage monitoring, and import duty clearing.',
      icon: Anchor,
      metric: '4.5x Accelerated Terminal Discharge',
      tech: 'SAP Global Trade Services (GTS)',
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Letter of Credit Governance',
      subtitle: 'Trade Finance Package',
      desc: 'Automated documentary credit package submission to issuing banks with discrepancy detection for touchless draw-down.',
      icon: FileCheck,
      metric: '68% Faster Bank LC Draw-Down',
      tech: 'Documentary Credit AI Matcher',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Multi-Currency Trade Settlement',
      subtitle: 'Realized Margin Reconciliation',
      desc: 'True voyage profitability reconciliation factoring physical commodity costs, freight, insurance premiums, and customs duties.',
      icon: CreditCard,
      metric: 'Instant Trade-Level Net Margin',
      tech: 'SAP S/4HANA Parallel Currency Ledger',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80'
    }
  ];

  // Section 3: Trading Industry Challenges (6 Cards)
  const industryChallenges = [
    {
      icon: Scale,
      tag: 'PRICE & FX RISK',
      title: 'Unhedged Currency Volatility',
      desc: 'Fluctuating foreign exchange rates and delayed contract hedge bookings erode paper profit margins between deal sign-off and final port delivery.',
      footer: 'Automated Treasury Hedge Allocation'
    },
    {
      icon: Anchor,
      tag: 'PORT BOTTLENECK',
      title: 'Demurrage & Detention Penalties',
      desc: 'Slow documentary processing and customs clearance delays cause container laytime overages, incurring costly shipping line demurrage fees.',
      footer: 'Digital Laytime Statement Engine'
    },
    {
      icon: FileCheck,
      tag: 'TRADE FINANCE',
      title: 'Letter of Credit Discrepancies',
      desc: 'Minor paperwork errors between commercial invoices and bill of lading documents hold up bank LC liquidations and tie up operational working capital.',
      footer: 'AI Document Discrepancy Prevention'
    },
    {
      icon: BarChart3,
      tag: 'P&L TRANSPARENCY',
      title: 'Delayed Deal-Level Profitability',
      desc: 'Tracking freight accessorials, insurance premiums, and customs duties across disconnected sheets prevents real-time true net margin visibility per trade.',
      footer: 'True Net Voyage P&L Visibility'
    },
    {
      icon: ShieldCheck,
      tag: 'REGULATORY COMPLIANCE',
      title: 'Sanctions & Denied Party Exposure',
      desc: 'Rapidly shifting global trade sanctions and complex vessel ownership structures risk severe regulatory fines if screened manually.',
      footer: 'Automated Real-Time Sanction Screening'
    },
    {
      icon: Boxes,
      tag: 'COMMODITY VOLATILITY',
      title: 'Physical Quality & Moisture Variances',
      desc: 'Discrepancies in bulk cargo weight, moisture content, or chemical assays upon port arrival lead to costly arbitration and price discounts.',
      footer: 'Automated Assay Penalty Calculations'
    }
  ];

  // Section 4: 8 Radial Capability Pillars
  const capabilityPillars = [
    {
      id: 0,
      title: 'Deal Capture & Contract Governance',
      desc: 'End-to-end physical trade capture, tolerance bands, automated back-to-back matching, and contract amendment audit logs.',
      icon: Briefcase,
      badge: 'DEAL CORE',
      color: '#0070C0'
    },
    {
      id: 1,
      title: 'Treasury & FX Exposure Hedging',
      desc: 'Automated integration linking spot contracts directly with derivative hedging ledgers to lock in projected trading margins.',
      icon: Scale,
      badge: 'RISK HEDGING',
      color: '#00A3E0'
    },
    {
      id: 2,
      title: 'Letter of Credit (LC) Automation',
      desc: 'Documentary credit automation matching bills of lading, inspection certificates, and commercial invoices to prevent bank rejections.',
      icon: FileCheck,
      badge: 'TRADE FINANCE',
      color: '#38BDF8'
    },
    {
      id: 3,
      title: 'Maritime Freight & Vessel Telemetry',
      desc: 'Bulk cargo chartering, container booking, AIS vessel position updates, and laytime event monitoring.',
      icon: Ship,
      badge: 'OCEAN LOGISTICS',
      color: '#005B9E'
    },
    {
      id: 4,
      title: 'Global Trade Services & Sanctions',
      desc: 'Automated HS code classification, export license checks, sanction party screening, and electronic customs declarations.',
      icon: ShieldCheck,
      badge: 'TRADE COMPLIANCE',
      color: '#003B73'
    },
    {
      id: 5,
      title: 'Demurrage & Laytime Calculation Engine',
      desc: 'Real-time vessel time-sheet logging, demurrage claim dispute validation, and carrier freight invoice reconciliation.',
      icon: Anchor,
      badge: 'LAYTIME ENGINE',
      color: '#0284C7'
    },
    {
      id: 6,
      title: 'Multi-Currency Parallel Ledgers',
      desc: 'Parallel general ledgers supporting multi-currency trade entries, automated FX revaluations, and global cash pooling.',
      icon: CreditCard,
      badge: 'FINANCIAL CORE',
      color: '#0369A1'
    },
    {
      id: 7,
      title: 'Mark-to-Market Real-Time Deal P&L',
      desc: 'Trade-level net margin reporting factoring all physical commodity, freight, insurance, and duty cost components.',
      icon: BarChart3,
      badge: 'VOYAGE P&L',
      color: '#075985'
    }
  ];

  // Helper function to calculate SVG chevron segment paths for Section 4
  const getChevronPath = (index: number, total: number = 8) => {
    const cx = 250;
    const cy = 250;
    const rIn = 110;
    const rOut = 215;
    const angleStep = 360 / total;
    const startAngle = index * angleStep;
    const endAngle = (index + 1) * angleStep;
    const rad = (deg: number) => (deg - 90) * (Math.PI / 180);

    const sIn = { x: cx + rIn * Math.cos(rad(startAngle)), y: cy + rIn * Math.sin(rad(startAngle)) };
    const sOut = { x: cx + rOut * Math.cos(rad(startAngle)), y: cy + rOut * Math.sin(rad(startAngle)) };
    const eIn = { x: cx + rIn * Math.cos(rad(endAngle)), y: cy + rIn * Math.sin(rad(endAngle)) };
    const eOut = { x: cx + rOut * Math.cos(rad(endAngle)), y: cy + rOut * Math.sin(rad(endAngle)) };
    const arrowTipAngle = endAngle + 4;
    const tip = {
      x: cx + ((rIn + rOut) / 2) * Math.cos(rad(arrowTipAngle)),
      y: cy + ((rIn + rOut) / 2) * Math.sin(rad(arrowTipAngle))
    };

    return `M ${sIn.x} ${sIn.y} L ${sOut.x} ${sOut.y} A ${rOut} ${rOut} 0 0 1 ${eOut.x} ${eOut.y} L ${tip.x} ${tip.y} L ${eIn.x} ${eIn.y} A ${rIn} ${rIn} 0 0 0 ${sIn.x} ${sIn.y} Z`;
  };

  const getIconCoords = (index: number, total: number = 8) => {
    const cx = 250;
    const cy = 250;
    const rMid = 162;
    const angle = (index + 0.5) * (360 / total) - 90;
    const rad = angle * (Math.PI / 180);
    return { x: cx + rMid * Math.cos(rad), y: cy + rMid * Math.sin(rad) };
  };


  // Section 6: SAP & Technology Solutions (6 Cards)
  const sapTechSolutions = [
    {
      title: 'SAP S/4HANA Commodity Management',
      tag: 'CORE TRADING ERP',
      desc: 'Comprehensive trading and risk management platform capturing deal contracts, pricing formulas, quality tolerances, and back-to-back physical execution.',
      features: ['Physical Contract Administration', 'Formula & Index Pricing Engine', 'Automated Back-to-Back Matching'],
      icon: Database
    },
    {
      title: 'SAP Treasury & Risk Management (TRM)',
      tag: 'FINANCIAL RISK',
      desc: 'Integrated treasury suite providing continuous exposure visibility, mark-to-market valuations, and automated hedge accounting compliance.',
      features: ['Foreign Exchange Forward Cover', 'Interest Rate & Commodity Swaps', 'Real-Time Cash Positioning'],
      icon: Scale
    },
    {
      title: 'SAP Global Trade Services (GTS)',
      tag: 'CUSTOMS & SANCTIONS',
      desc: 'Automated customs declarations, electronic tariff lookup, denied party screening, and preferential trade agreement documentation.',
      features: ['Automated HS Tariff Lookup', 'Denied Party & Embargo Screening', 'Electronic Customs Filing'],
      icon: ShieldCheck
    },
    {
      title: 'SAP Business Technology Platform (BTP)',
      tag: 'AGILE INTEGRATION',
      desc: 'Cloud platform hosting vessel AIS telemetry APIs, electronic bill of lading integrations, and counterparty portal access.',
      features: ['Vessel Telemetry API Mesh', 'Banking SWIFT MT700 Connectors', 'Counterparty Trade Confirmation Hub'],
      icon: Layers
    },
    {
      title: 'SAP Fiori Trader & Risk Cockpit',
      tag: 'ROLE-BASED UX',
      desc: 'Customized trading desk workspaces displaying live open positions, credit exposure meters, and voyage profitability charts.',
      features: ['One-Click Deal Booking', 'Credit Limit Exception Approval', 'Laytime Overrun Warning Alerts'],
      icon: Settings
    },
    {
      title: 'AI Demurrage & Margin Predictor',
      tag: 'PREDICTIVE AI',
      desc: 'Predictive algorithms identifying high-risk port congestion, estimating demurrage charges in advance, and forecasting true net voyage margins.',
      features: ['Port Congestion Early Warnings', 'Laytime Dispute Probability Scores', 'Dynamic Voyage Profitability Forecasts'],
      icon: Sparkles
    }
  ];

  // Section 7: 9 Modular Enterprise Industry Solutions (Symmetrical 3x3 Grid)
  const industrySolutions = [
    {
      title: 'Deal Capture & Trade Contracts',
      tag: 'DEAL CORE',
      category: 'COMMERCE',
      categoryLabel: 'Trading Operations',
      description: 'Physical and financial trade contract capture, tolerance bands, formula pricing, and back-to-back matching.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      highlights: ['Formula Pricing Engine', 'Back-to-Back Trade Link', 'Contract Amendment Log'],
      icon: Briefcase
    },
    {
      title: 'Trade Risk & FX Hedging',
      tag: 'TREASURY RISK',
      category: 'COMMERCE',
      categoryLabel: 'Trading Operations',
      description: 'Automated foreign exchange risk exposure monitoring and forward hedge contract allocation on ERP ledgers.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
      highlights: ['Real-Time FX Exposure', 'Automated Hedge Accounting', 'Counterparty Limit Check'],
      icon: Scale
    },
    {
      title: 'Letter of Credit (LC) Governance',
      tag: 'TRADE FINANCE',
      category: 'COMMERCE',
      categoryLabel: 'Trading Operations',
      description: 'Documentary credit automation matching bills of lading, inspection certificates, and commercial invoices.',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
      highlights: ['Discrepancy Auto-Detection', 'Electronic LC Tracking', 'Bank Submission Package'],
      icon: FileCheck
    },
    {
      title: 'Vessel & Maritime Freight Tracking',
      tag: 'OCEAN LOGISTICS',
      category: 'SUPPLY_CHAIN',
      categoryLabel: 'Global Logistics',
      description: 'Bulk cargo chartering, container booking, AIS vessel position updates, and laytime event monitoring.',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      highlights: ['Laytime Log Calculator', 'Vessel Tracking Telemetry', 'Charter Party Compliance'],
      icon: Ship
    },
    {
      title: 'Customs & Global Trade Services',
      tag: 'GTS COMPLIANCE',
      category: 'SUPPLY_CHAIN',
      categoryLabel: 'Global Logistics',
      description: 'Automated HS code classification, export license checks, sanction party screening, and customs declarations.',
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80',
      highlights: ['Automated HS Tariff Lookup', 'Sanctioned Party Screening', 'Electronic Customs Interface'],
      icon: ShieldCheck
    },
    {
      title: 'Demurrage & Freight Cost Settlement',
      tag: 'COST CLEARING',
      category: 'SUPPLY_CHAIN',
      categoryLabel: 'Global Logistics',
      description: 'Automated laytime calculation sheets, demurrage claim validation, and carrier freight invoice audit.',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80',
      highlights: ['Laytime Statement Engine', 'Demurrage Dispute Mitigation', 'Carrier Freight Matching'],
      icon: Anchor
    },
    {
      title: 'Multi-Currency Enterprise Ledgers',
      tag: 'FINANCIAL CORE',
      category: 'CUSTOMER',
      categoryLabel: 'Finance & Analytics',
      description: 'Parallel general ledgers supporting multi-currency trade entries, automatic revaluations, and cash pooling.',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
      highlights: ['Daily FX Rate Revaluation', 'Parallel Currency Ledgers', 'Global Cash Positioning'],
      icon: CreditCard
    },
    {
      title: 'Counterparty Credit & Exposure Control',
      tag: 'CREDIT SHIELD',
      category: 'CUSTOMER',
      categoryLabel: 'Finance & Analytics',
      description: 'Dynamic credit scoring, open order exposure tracking, and collateral guarantee management.',
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
      highlights: ['Dynamic Exposure Ceiling', 'Collateral Margin Tracking', 'Default Risk Alert Engine'],
      icon: Zap
    },
    {
      title: 'Real-Time Deal P&L Analytics',
      tag: 'APPLIED AI',
      category: 'CUSTOMER',
      categoryLabel: 'Finance & Analytics',
      description: 'Trade-level net margin reporting factoring all physical commodity, freight, insurance, and duty cost components.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      highlights: ['True Net Margin by Trade', 'Mark-to-Market Valuation', 'Voyage Profitability Matrix'],
      icon: Sparkles
    }
  ];

  // Section 8: Measurable Business Outcomes & ROI (6 Cards)
  const businessOutcomes = [
    {
      metric: '100%',
      label: 'FX Hedge Accuracy',
      desc: 'Immediate hedging contract tie-up upon deal commitment eliminates foreign exchange rate slippage across global commodity trades.',
      icon: Scale
    },
    {
      metric: '-85%',
      label: 'Demurrage & Laytime Fines',
      desc: 'Real-time terminal tracking, automated laytime logging, and expedited customs paperwork prevent costly shipping line detention penalties.',
      icon: Anchor
    },
    {
      metric: '68%',
      label: 'Faster Bank LC Draw-Down',
      desc: 'AI document validation catches discrepancies before submission, slashing bank liquidation cycles and releasing working capital.',
      icon: FileCheck
    },
    {
      metric: 'Real-Time',
      label: 'True Net Deal P&L Visibility',
      desc: 'Consolidated allocation of freight accessorials, customs duties, and financing fees delivers accurate net trade margins instantly.',
      icon: BarChart3
    },
    {
      metric: '0.0',
      label: 'Sanction Screening Violations',
      desc: 'Continuous automated screening of vessels, beneficial owners, and counterparties against international embargo lists.',
      icon: ShieldCheck
    },
    {
      metric: '3.4x',
      label: 'Trading Desk Deal Velocity',
      desc: 'Automated deal capture, tolerance checking, and back-to-back matching empower trading desks to execute higher volume safely.',
      icon: TrendingUp
    }
  ];

  // Section 9: Transformation in Action (4 Interactive Stages)
  const transformationStages = [
    {
      phase: 'INITIAL CHALLENGE',
      badge: 'DISCONNECTED SPREADSHEETS',
      title: 'Manual Trade Sheets',
      subtitle: 'Siloed Deal Logs',
      description: 'Wholesale trading enterprise managing deal commitments on individual desk spreadsheets while treasury manually tracked currency hedges, leading to unhedged currency exposures and costly demurrage claims.',
      accent: 'rose',
      borderBase: 'border-rose-500/30 hover:border-rose-400',
      activeBorder: 'border-rose-400 ring-2 ring-rose-500/30 bg-rose-950/20 shadow-[0_0_25px_rgba(244,63,94,0.2)]',
      glowColor: 'bg-rose-500',
      textColor: 'text-rose-400',
      icon: Activity,
      tag: 'Fragmented Trade Sheets',
      before: 'Uncoordinated trade spreadsheets & surprise FX losses',
      after: 'Synchronized deal capture and automatic forward hedge lock',
      metrics: ['Unhedged FX Losses', 'Excess Demurrage Fees', 'Delayed LC Liquidations']
    },
    {
      phase: 'STRATEGIC FRAMEWORK',
      badge: 'CLEAN CORE',
      title: 'Trade Event Mesh',
      subtitle: 'Decoupled Financial Fabric',
      description: 'Uniting physical commodity deals, shipping manifests, and financial treasury ledgers on an event-driven architecture, validating counterparty exposures and hedging requirements immediately upon deal entry.',
      accent: 'sky',
      borderBase: 'border-sky-500/30 hover:border-sky-400',
      activeBorder: 'border-sky-400 ring-2 ring-sky-500/30 bg-sky-950/20 shadow-[0_0_25px_rgba(56,189,248,0.2)]',
      glowColor: 'bg-sky-500',
      textColor: 'text-sky-400',
      icon: Workflow,
      tag: 'Commodity Architecture Bus',
      before: 'Overnight batch updates with stale counterparty limits',
      after: 'Sub-second global trade exposure calculation',
      metrics: ['Decoupled Core', 'Live Treasury Sync', 'Commodity Rule Engine']
    },
    {
      phase: 'DEPLOYED STACK',
      badge: 'LIVE ECOSYSTEM',
      title: 'Engineered Stack',
      subtitle: 'S/4HANA Commodity + TRM + GTS',
      description: 'Deploying SAP S/4HANA Commodity Management integrated with Treasury & Risk Management (TRM) and Global Trade Services (GTS), automating customs documents and mark-to-market valuations.',
      accent: 'cyan',
      borderBase: 'border-cyan-500/30 hover:border-cyan-400',
      activeBorder: 'border-cyan-400 ring-2 ring-cyan-500/30 bg-cyan-950/20 shadow-[0_0_25px_rgba(34,211,238,0.2)]',
      glowColor: 'bg-cyan-500',
      textColor: 'text-cyan-400',
      icon: Cpu,
      tag: 'Orchestrated S/4HANA',
      before: 'Manual customs preparation and letter of credit delays',
      after: 'Touchless export filing and electronic bank submission',
      metrics: ['S/4HANA Commodity Core', 'TRM Currency Hedging', 'Automated GTS Customs']
    },
    {
      phase: 'STRATEGIC VALUE',
      badge: 'REALIZED IMPACT',
      title: 'Trading Velocity',
      subtitle: 'Protected Net Margins',
      description: 'Locking in projected trade margins against FX fluctuations, cutting port demurrage penalties to near-zero, speeding up LC liquidation times, and maximizing capital efficiency.',
      accent: 'emerald',
      borderBase: 'border-emerald-500/30 hover:border-emerald-400',
      activeBorder: 'border-emerald-400 ring-2 ring-emerald-500/30 bg-emerald-950/20 shadow-[0_0_25px_rgba(52,211,153,0.2)]',
      glowColor: 'bg-emerald-500',
      textColor: 'text-emerald-400',
      icon: ShieldCheck,
      tag: 'Protected Trade Yield',
      before: 'Unpredictable FX slippage and delayed bank settlement',
      after: 'Fully secured profit margins and fast cash turnover',
      metrics: ['Protected Trade Margins', 'Eliminated Demurrage Penalties', 'Accelerated Cash Velocity']
    }
  ];


  const filteredSolutions = activeSolutionCategory === 'ALL'
    ? industrySolutions
    : industrySolutions.filter(item => item.category === activeSolutionCategory);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#0070C0] selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* =========================================================================
          SECTION 1: HERO SECTION (Pure Enterprise Trading Hero)
          ========================================================================= */}
      <section className="relative w-full min-h-[620px] lg:min-h-[680px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 overflow-hidden bg-slate-900">
        
        {/* Full-Bleed Enterprise Background Image with Seamless Cinematic Scrim */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=80" 
            alt="International Maritime Trade and Commercial Terminal" 
            className="w-full h-full object-cover object-center"
          />
          {/* Multi-layered cinematic gradient scrim: left dark for perfect readability, smooth fade to showcase facility on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 sm:via-slate-950/60 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/30 pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl space-y-4">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="space-y-2.5"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 shadow-sm">
                <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
                <span>KNOOVIQ INDUSTRY PRACTICE</span>
              </div>
              
              {/* Prominent High-Impact Heading with Crisp Drop-Shadow */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                Wholesale & <span className="text-cyan-400">Trading</span>
              </h1>

              {/* Subheading / Value Proposition */}
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight leading-snug pt-0.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                Synchronizing Deal Capture, Global Hedging, Maritime Freight & Bank Settlement in Real Time.
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
                Empower global commodity traders with <strong className="text-white font-semibold">SAP S/4HANA Commodity Clean Core</strong>, <strong className="text-cyan-300 font-semibold">automated treasury FX risk hedging</strong>, and <strong className="text-white font-semibold">touchless trade finance governance</strong>.
              </p>
              
              {/* Clean Feature Highlights */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>SAP Commodity Clean Core</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Automated Treasury Hedging</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  <span>True Net Deal P&L</span>
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
                  <DollarSign className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">FX RISK HEDGE</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">Automated Margin Lock</div>
                <div className="text-xs text-slate-300 mt-0.5">Real-Time Exposure Hedging</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <Anchor className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">PORT LAYTIME</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">Minimized Demurrage</div>
                <div className="text-xs text-slate-300 mt-0.5">Predictive Berth Scheduling</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <CreditCard className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">LC SETTLEMENT</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">Accelerated Settlement</div>
                <div className="text-xs text-slate-300 mt-0.5">Touchless Bank Matching</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <Zap className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">TRADE VELOCITY</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">High Desk Velocity</div>
                <div className="text-xs text-slate-300 mt-0.5">Sub-Second Deal Capture</div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: EXECUTIVE INDUSTRY PERSPECTIVE
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Narrative Column (col-span-6) */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-semibold text-[#0070C0] uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5" />
                <span>EXECUTIVE PERSPECTIVE</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Empowering Trading Houses with <span className="text-[#0070C0]">Real-Time Position Visibility</span> and Zero Currency Slippage
              </h2>

              <div className="border-l-4 border-[#0070C0] pl-4 py-2 bg-gradient-to-r from-sky-50/80 to-transparent rounded-r-lg">
                <p className="text-sm sm:text-base font-semibold text-slate-800 italic">
                  "In high-volume international trade, unhedged exchange rate fluctuations and documentary letter of credit delays can wipe out entire gross margins on a voyage before cargo is even discharged."
                </p>
              </div>

              <div className="space-y-4 text-sm text-slate-600 leading-relaxed font-normal">
                <p>
                  Global wholesale trading houses manage razor-thin margins across millions of dollars in physical commodities, bulk raw materials, and cross-border consumer goods. Fragmented spreadsheets and disconnected treasury desks leave companies vulnerable to sudden foreign exchange shifts, unexpected port demurrage claims, and delayed banking settlements.
                </p>
                <p>
                  KNOOVIQ architects clean-core SAP S/4HANA Commodity Management solutions integrated with real-time Treasury & Risk Management (TRM) and Global Trade Services (GTS). By binding every trade contract directly to automated hedging ledgers, live AIS vessel tracking, and digital bank documentary workflows, we protect gross margins and accelerate cash liquidity.
                </p>
              </div>

              {/* 3 Strategic Pillars Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-300 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0070C0] flex items-center justify-center mb-2 font-black text-sm">
                    <Scale className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold text-slate-900">Treasury Hedging</div>
                  <div className="text-[11px] text-slate-500 mt-1">Automated FX forward lock-in on deal booking</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-300 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0070C0] flex items-center justify-center mb-2 font-black text-sm">
                    <Anchor className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold text-slate-900">Demurrage Guard</div>
                  <div className="text-[11px] text-slate-500 mt-1">Laytime calculation & port discharge sync</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-300 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0070C0] flex items-center justify-center mb-2 font-black text-sm">
                    <FileCheck className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold text-slate-900">LC Automation</div>
                  <div className="text-[11px] text-slate-500 mt-1">Clean banking submissions & accelerated draws</div>
                </div>
              </div>

            </div>

            {/* Right Interactive Photo Showcase + Navigator (col-span-6) */}
            <div className="lg:col-span-6 space-y-4">
              
              {/* Photo Display Card with Live State */}
              <div className="relative h-60 sm:h-72 w-full rounded-2xl overflow-hidden border-2 border-slate-300 shadow-xl group">
                <img 
                  src={journeySteps[activeJourneyStep].image} 
                  alt={journeySteps[activeJourneyStep].title} 
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent pointer-events-none" />
                
                {/* Stage Badge Overlay */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-white text-xs font-mono font-bold">
                  STAGE 0{activeJourneyStep + 1} OF 06
                </div>

                {/* Tech Badge Overlay */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-sky-500/90 backdrop-blur-md border border-sky-400 text-white text-xs font-bold shadow-lg">
                  {journeySteps[activeJourneyStep].tech}
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-900/85 backdrop-blur-md border border-white/10">
                  <div className="text-xs font-mono text-cyan-300 uppercase tracking-wider">{journeySteps[activeJourneyStep].subtitle}</div>
                  <div className="text-base sm:text-lg font-bold text-white leading-tight">{journeySteps[activeJourneyStep].title}</div>
                  <div className="text-xs text-slate-300 mt-1 line-clamp-1">{journeySteps[activeJourneyStep].desc}</div>
                </div>
              </div>

              {/* Stage Navigation Grid (6 Buttons) */}
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {journeySteps.map((step, idx) => {
                  const Icon = step.icon;
                  const isActive = activeJourneyStep === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveJourneyStep(idx)}
                      className={`p-2.5 rounded-xl text-left border transition-all flex flex-col items-center text-center gap-1.5 ${
                        isActive 
                          ? 'bg-[#0070C0] text-white border-[#0070C0] shadow-md shadow-sky-600/30 ring-2 ring-sky-300' 
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#0070C0]'}`} />
                      <span className="text-[10px] font-bold leading-tight line-clamp-1">{step.title.split(' ')[0]}</span>
                    </button>
                  );
                })}
              </div>

              {/* Selected Stage Detail Card */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-sky-50 to-slate-50 border border-sky-200 flex items-center justify-between">
                <div className="space-y-1">
                  <div className="text-[11px] font-mono font-bold text-[#0070C0] uppercase tracking-wider">
                    TARGET OPERATIONAL METRIC
                  </div>
                  <div className="text-sm font-black text-slate-900">
                    {journeySteps[activeJourneyStep].metric}
                  </div>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-white border border-sky-300 text-xs font-semibold text-[#0070C0] shadow-sm">
                  Verified Trade Benchmark
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: TRADING INDUSTRY CHALLENGES (6 Cards)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-semibold text-rose-600 uppercase tracking-wider">
              <Activity className="w-3.5 h-3.5" />
              <span>MARKET BOTTLENECKS & OPERATIONAL EXPOSURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Critical Obstacles Constraining <span className="text-[#0070C0]">Trading Houses</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Wholesale trading desks navigate thin spreads, complex maritime logistics, sudden currency shifts, and stringent international compliance gates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryChallenges.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-sky-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-full bg-slate-100 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-600 group-hover:bg-sky-50 group-hover:text-[#0070C0] transition-colors">
                        {item.tag}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-600 group-hover:bg-[#0070C0] group-hover:text-white transition-all flex items-center justify-center shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-[#0070C0] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0070C0]">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0070C0]" />
                      {item.footer}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: CIRCULAR CHEVRON RADIAL DIAGRAM (Synchronized Hover)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#070B14] text-white border-b border-slate-800 relative overflow-hidden">
        
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0070C0]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono font-bold uppercase tracking-widest text-cyan-300">
              <Cpu className="w-3.5 h-3.5 text-cyan-300" />
              <span>PLATFORM ECOSYSTEM</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Unified <span className="text-[#38BDF8]">Wholesale & Trading Platform</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-normal">
              Eight synchronized architectural capabilities orchestrating physical deal booking, hedging, maritime logistics, customs declarations, and banking settlements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left 4 Cards (Indices 7, 6, 5, 4) */}
            <div className="lg:col-span-4 space-y-3 order-2 lg:order-1">
              {[7, 6, 5, 4].map((idx) => {
                const item = capabilityPillars[idx];
                const Icon = item.icon;
                const isHovered = hoveredWheelIndex === idx;
                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setHoveredWheelIndex(idx)}
                    onMouseLeave={() => setHoveredWheelIndex(null)}
                    className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                      isHovered
                        ? 'bg-gradient-to-r from-sky-950/80 to-slate-900 border-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.25)] translate-x-1'
                        : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg transition-colors ${
                        isHovered ? 'bg-[#0070C0] text-white' : 'bg-slate-800 text-slate-300'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="space-y-1 flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-wider">{item.badge}</span>
                          <span className="text-[10px] font-mono text-slate-500">0{idx + 1}</span>
                        </div>
                        <h4 className={`text-sm font-bold transition-colors ${isHovered ? 'text-white' : 'text-slate-200'}`}>
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed font-normal">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Center Circular Chevron Wheel (500x500 SVG) */}
            <div className="lg:col-span-4 flex justify-center order-1 lg:order-2 py-4">
              <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] lg:w-[420px] lg:h-[420px]">
                <svg viewBox="0 0 500 500" className="w-full h-full transform -rotate-90">
                  {capabilityPillars.map((pillar, idx) => {
                    const isHovered = hoveredWheelIndex === idx;
                    const path = getChevronPath(idx);
                    return (
                      <path
                        key={idx}
                        d={path}
                        onClick={() => setHoveredWheelIndex(idx)}
                        onMouseEnter={() => setHoveredWheelIndex(idx)}
                        onMouseLeave={() => setHoveredWheelIndex(null)}
                        fill={isHovered ? '#0070C0' : '#1E293B'}
                        stroke={isHovered ? '#38BDF8' : '#334155'}
                        strokeWidth={isHovered ? '2.5' : '1.5'}
                        className="cursor-pointer transition-all duration-300 hover:brightness-125"
                      />
                    );
                  })}
                  
                  {/* Icon Markers on Chevrons */}
                  {capabilityPillars.map((pillar, idx) => {
                    const coords = getIconCoords(idx);
                    const isHovered = hoveredWheelIndex === idx;
                    return (
                      <g 
                        key={`icon-${idx}`} 
                        className="pointer-events-none"
                        transform={`rotate(90 ${coords.x} ${coords.y})`}
                      >
                        <circle
                          cx={coords.x}
                          cy={coords.y}
                          r="15"
                          fill={isHovered ? '#FFFFFF' : '#0F172A'}
                          stroke={isHovered ? '#38BDF8' : '#475569'}
                          strokeWidth="1.5"
                        />
                        <text
                          x={coords.x}
                          y={coords.y + 4}
                          textAnchor="middle"
                          fill={isHovered ? '#0070C0' : '#94A3B8'}
                          fontSize="11"
                          fontWeight="bold"
                          fontFamily="monospace"
                        >
                          {idx + 1}
                        </text>
                      </g>
                    );
                  })}
                </svg>

                {/* Center Hub */}
                <div className="absolute inset-0 m-auto w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border-2 border-cyan-400/40 shadow-[0_0_30px_rgba(0,112,192,0.4)] flex flex-col items-center justify-center p-3 text-center pointer-events-none">
                  <Briefcase className="w-6 h-6 text-[#38BDF8] mb-1" />
                  <span className="text-[10px] font-mono font-bold text-cyan-300 uppercase tracking-widest leading-tight">
                    KNOOVIQ TRADE
                  </span>
                  <span className="text-xs font-black text-white leading-tight">
                    Commodity Hub
                  </span>
                </div>
              </div>
            </div>

            {/* Right 4 Cards (Indices 0, 1, 2, 3) */}
            <div className="lg:col-span-4 space-y-3 order-3">
              {[0, 1, 2, 3].map((idx) => {
                const item = capabilityPillars[idx];
                const Icon = item.icon;
                const isHovered = hoveredWheelIndex === idx;
                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setHoveredWheelIndex(idx)}
                    onMouseLeave={() => setHoveredWheelIndex(null)}
                    className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                      isHovered
                        ? 'bg-gradient-to-r from-slate-900 to-sky-950/80 border-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.25)] -translate-x-1'
                        : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg transition-colors ${
                        isHovered ? 'bg-[#0070C0] text-white' : 'bg-slate-800 text-slate-300'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="space-y-1 flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-wider">{item.badge}</span>
                          <span className="text-[10px] font-mono text-slate-500">0{idx + 1}</span>
                        </div>
                        <h4 className={`text-sm font-bold transition-colors ${isHovered ? 'text-white' : 'text-slate-200'}`}>
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed font-normal">
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
          SECTION 6: SAP & TECHNOLOGY SOLUTIONS (6 Cards)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-semibold text-[#0070C0] uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              <span>ENTERPRISE TECHNOLOGY FOUNDATION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Enterprise SAP Architecture for <span className="text-[#0070C0]">Wholesale & Trading</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Built on Clean Core principles, combining SAP S/4HANA Commodity Management, Treasury TRM, and Global Trade Services GTS for complete operational control.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sapTechSolutions.map((sol, idx) => {
              const Icon = sol.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-sky-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-full bg-sky-50 text-[10px] font-mono font-bold uppercase tracking-wider text-[#0070C0]">
                        {sol.tag}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-slate-50 text-[#0070C0] group-hover:bg-[#0070C0] group-hover:text-white transition-colors flex items-center justify-center shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-[#0070C0] transition-colors">
                      {sol.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {sol.desc}
                    </p>

                    <div className="space-y-1.5 pt-2">
                      {sol.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0070C0]">
                    <span>Architected for Clean Core</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: INDUSTRY SOLUTIONS (4 Filter Tabs, 9 Modular Cards)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-semibold text-cyan-800 uppercase tracking-wider">
              <Boxes className="w-3.5 h-3.5 text-cyan-700" />
              <span>MODULAR INDUSTRY SOLUTIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Pre-Packaged Capabilities for <span className="text-[#0070C0]">Trading Houses</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Turnkey functional modules designed for rapid deployment across physical deal capture, treasury risk, maritime freight, and financial reconciliation.
            </p>

            {/* 4 Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 pt-4">
              {[
                { id: 'ALL', label: 'All Solutions (9)' },
                { id: 'COMMERCE', label: 'Trading Operations' },
                { id: 'SUPPLY_CHAIN', label: 'Global Logistics' },
                { id: 'CUSTOMER', label: 'Finance & Analytics' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSolutionCategory(tab.id)}
                  className={`industry-category-tab px-4 py-2 rounded-xl transition-all ${
                    activeSolutionCategory === tab.id
                      ? 'bg-[#0070C0] text-white shadow-md shadow-sky-600/30'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Symmetrical 3x3 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSolutions.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="h-[400px] bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-sky-300 hover:shadow-xl transition-all duration-300 flex flex-col group"
                >
                  {/* Image Header - 50% Height */}
                  <div className="relative h-1/2 w-full overflow-hidden shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                    <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono font-bold">
                      {item.tag}
                    </div>
                    <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-white text-xs font-semibold">
                      <span>{item.categoryLabel}</span>
                      <Icon className="w-4 h-4 text-cyan-300" />
                    </div>
                  </div>

                  {/* Body Content - 50% Height */}
                  <div className="h-1/2 p-4 sm:p-5 flex flex-col justify-between overflow-hidden">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0070C0] transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal mt-1 line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    <div className="space-y-1.5 pt-1">
                      {item.highlights.map((high, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0070C0] shrink-0" />
                          <span className="truncate">{high}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 8: BUSINESS OUTCOMES & ROI (6 Cards)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-700 uppercase tracking-wider">
              <BarChart3 className="w-3.5 h-3.5" />
              <span>QUANTIFIABLE BUSINESS VALUE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Measurable ROI Across Global <span className="text-[#0070C0]">Trading Desks</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Validated financial returns and operational velocity improvements achieved across international physical trading enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessOutcomes.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border border-slate-200 hover:border-sky-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl sm:text-4xl font-black text-[#0070C0] tracking-tight">
                        {item.metric}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0070C0] group-hover:bg-[#0070C0] group-hover:text-white transition-colors flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      {item.label}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>Verified Desk Benchmark</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 9: TRANSFORMATION IN ACTION (Interactive 4-Phase Console)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#070B14] text-white border-b border-slate-800 relative overflow-hidden">
        
        {/* Glow Effects */}
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono font-bold uppercase tracking-widest text-cyan-300">
              <Workflow className="w-3.5 h-3.5" />
              <span>TRANSFORMATION BENCHMARK</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Executing the Trading Transformation <span className="text-[#38BDF8]">Roadmap</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-normal">
              A proven four-stage transition turning high-risk, disconnected commodity trading operations into an autonomous, secured financial powerhouse.
            </p>
          </div>

          {/* 4 Interactive Stage Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {transformationStages.map((stage, idx) => {
              const Icon = stage.icon;
              const isActive = activeTransformStage === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveTransformStage(idx)}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? stage.activeBorder
                      : `bg-slate-900/60 ${stage.borderBase}`
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                        {stage.phase}
                      </span>
                      <Icon className={`w-4 h-4 ${stage.textColor}`} />
                    </div>

                    <div className="space-y-1">
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                        isActive ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400'
                      }`}>
                        {stage.badge}
                      </span>
                      <h3 className="text-base font-bold text-white pt-1">{stage.title}</h3>
                      <div className="text-xs text-slate-400 font-medium">{stage.subtitle}</div>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed font-normal line-clamp-3">
                      {stage.description}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                    <span className={stage.textColor}>{stage.tag}</span>
                    <ChevronRight className={`w-3.5 h-3.5 ${isActive ? 'translate-x-1 text-white' : 'text-slate-600'} transition-transform`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Live Transformation Delta Console */}
          <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 backdrop-blur-md">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              
              <div className="space-y-2 max-w-xl">
                <div className="text-xs font-mono text-cyan-300 font-bold uppercase tracking-wider">
                  ACTIVE PHASE: {transformationStages[activeTransformStage].phase} — {transformationStages[activeTransformStage].title}
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">
                  {transformationStages[activeTransformStage].description}
                </div>
              </div>

              {/* Before vs After Comparison */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-auto">
                <div className="p-3.5 rounded-xl bg-rose-950/20 border border-rose-500/30">
                  <div className="text-[10px] font-mono font-bold text-rose-400 uppercase tracking-wider mb-1">PRIOR STATE</div>
                  <div className="text-xs text-slate-200 font-medium leading-relaxed">{transformationStages[activeTransformStage].before}</div>
                </div>
                <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30">
                  <div className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider mb-1">TRANSFORMED STATE</div>
                  <div className="text-xs text-slate-200 font-medium leading-relaxed">{transformationStages[activeTransformStage].after}</div>
                </div>
              </div>

            </div>

            {/* Checklist Chips */}
            <div className="flex flex-wrap items-center gap-2 pt-4 mt-4 border-t border-slate-800">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider mr-2">VERIFIED MILESTONES:</span>
              {transformationStages[activeTransformStage].metrics.map((m, mIdx) => (
                <span key={mIdx} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-xs font-medium text-slate-200 border border-slate-700">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>{m}</span>
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>



      {/* =========================================================================
          SECTION 11: FINAL CTA (Full-Width Blue Executive Section)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#003B73] via-[#005B9E] to-[#0070C0] text-white relative overflow-hidden">
        
        {/* Subtle Decorative Backdrop Elements */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono font-bold uppercase tracking-widest text-cyan-200">
            <Sparkles className="w-3.5 h-3.5" />
            <span>COMMENCE YOUR TRADING MODERNIZATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Ready to Protect Your Margins and Accelerate <br className="hidden sm:inline" />
            <span className="text-cyan-200">Global Trading Velocity?</span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-slate-100 max-w-2xl mx-auto font-normal leading-relaxed">
            Partner with KNOOVIQ's senior trading and treasury advisors to architect an agile SAP S/4HANA Commodity platform customized for your desks.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <button
              onClick={() => onOpenContact && onOpenContact('Wholesale & Trading Transformation')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-[#003B73] hover:bg-slate-100 text-sm font-bold shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2"
            >
              <span>Talk to Our Trading Experts</span>
              <ArrowRight className="w-4 h-4 text-[#003B73]" />
            </button>
            <Link
              to="/services/sap-s4hana"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-bold backdrop-blur-md transition-all flex items-center justify-center gap-2"
            >
              <span>Explore SAP Solutions</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs text-slate-200 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-300" />
              <span>SAP Commodity Management Certified</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-300" />
              <span>Real-Time FX Hedging Synchronization</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-sky-300" />
              <span>Global Laytime & GTS Compliance</span>
            </span>
          </div>

        </div>
      </section>

    </div>
  );
};
