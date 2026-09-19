import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Layers, 
  Activity, 
  ShieldCheck, 
  Gauge, 
  TrendingUp, 
  BarChart3, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  ChevronDown, 
  Sparkles, 
  Clock, 
  Workflow, 
  Compass, 
  Cpu, 
  Zap, 
  Boxes, 
  HelpCircle,
  Factory,
  Award,
  Truck,
  Globe2,
  RefreshCw,
  FileText,
  Radio,
  Server,
  AlertTriangle,
  Landmark,
  MapPin,
  Route,
  Scale
} from 'lucide-react';

interface IndustryPageProps {
  onOpenContact: (defaultService?: string) => void;
}

export const InfrastructureIndustryPage: React.FC<IndustryPageProps> = ({ onOpenContact }) => {
  // State for Executive Perspective Journey
  const [activeJourneyStep, setActiveJourneyStep] = useState(0);

  // State for Circular Chevron Wheel
  const [hoveredWheelIndex, setHoveredWheelIndex] = useState<number | null>(null);

  // State for Modular Solutions Filter
  const [activeSolutionCategory, setActiveSolutionCategory] = useState<string>('ALL');

  // State for Transformation Stage Console
  const [activeTransformStage, setActiveTransformStage] = useState<number>(0);

  // State for Architecture Tab
  const [activeArchTab, setActiveArchTab] = useState<string>('core');

  // State for FAQ Accordion
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Section 4: Circular Chevron Radial Wheel Segments (KNOOVIQ Infrastructure Platform Ecosystem)
  const wheelSegments = [
    {
      id: 'lrs-chainage',
      title: 'Linear Referencing System (LRS)',
      desc: 'Milepost and chainage-based asset structuring for highways, bridges, tunnels, and high-speed rail corridors.',
      side: 'right',
      color: '#0284C7', // Sky Blue
      textColor: 'text-sky-400',
      bgGlow: 'rgba(2, 132, 199, 0.3)',
      icon: Route
    },
    {
      id: 'ppp-annuity',
      title: 'Public-Private Partnership (PPP) Ledgers',
      desc: 'Concessionaire annuity schedules, tolling revenue share models, and debt-service reserve account (DSRA) controls.',
      side: 'right',
      color: '#0EA5E9', // Cyan
      textColor: 'text-cyan-400',
      bgGlow: 'rgba(14, 165, 233, 0.3)',
      icon: Landmark
    },
    {
      id: 'row-clearance',
      title: 'Right-of-Way (RoW) Land Governance',
      desc: 'Cadastral parcel tracking, statutory environmental clearances, and compensation disbursement milestones.',
      side: 'right',
      color: '#10B981', // Emerald
      textColor: 'text-emerald-400',
      bgGlow: 'rgba(16, 185, 129, 0.3)',
      icon: MapPin
    },
    {
      id: 'shm-telemetry',
      title: 'Structural Health Monitoring (SHM)',
      desc: 'Real-time ingestion of strain gauge, inclinometer, and fiber optic acoustic data mapped to digital bridge twins.',
      side: 'right',
      color: '#F59E0B', // Amber
      textColor: 'text-amber-400',
      bgGlow: 'rgba(245, 158, 11, 0.3)',
      icon: Gauge
    },
    {
      id: 'sovereign-capex',
      title: 'Multilateral & Sovereign Capex Ledgers',
      desc: 'Multi-year appropriation governance aligning World Bank, ADB, and sovereign bond drawdowns to project milestones.',
      side: 'left',
      color: '#F97316', // Orange
      textColor: 'text-orange-400',
      bgGlow: 'rgba(249, 115, 22, 0.3)',
      icon: BarChart3
    },
    {
      id: 'linear-eam',
      title: 'Linear Asset Maintenance (SAP LAM)',
      desc: 'Predictive track geometry, pavement resurfacing, and catenary wire inspection dispatch based on chainage segments.',
      side: 'left',
      color: '#8B5CF6', // Purple
      textColor: 'text-purple-400',
      bgGlow: 'rgba(139, 92, 246, 0.3)',
      icon: Workflow
    },
    {
      id: 'esg-carbon-ledger',
      title: 'Embodied Carbon & Green Infrastructure',
      desc: 'Life-cycle greenhouse gas emission tracking for low-carbon concrete, recycled steel, and environmental offsets.',
      side: 'left',
      color: '#10B981', // Emerald
      textColor: 'text-emerald-400',
      bgGlow: 'rgba(16, 185, 129, 0.3)',
      icon: ShieldCheck
    },
    {
      id: 'multi-agency-audit',
      title: 'Multi-Agency Statutory Audit Console',
      desc: 'Immutable digital audit trails and expenditure certification across government ministries, concessionaires, and lenders.',
      side: 'left',
      color: '#3B82F6', // Blue
      textColor: 'text-blue-400',
      bgGlow: 'rgba(59, 130, 246, 0.3)',
      icon: Scale
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

  // Section 2: Journey Steps
  const journeySteps = [
    {
      id: 'row',
      label: 'Right-of-Way (RoW)',
      sublabel: 'Land & Environmental',
      tech: 'GIS & SAP Cadastral Portal',
      desc: 'Mapping land acquisition parcels, environmental permits, and statutory compensation disbursement to WBS milestones.',
      image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=1200&q=80',
      icon: MapPin
    },
    {
      id: 'capex',
      label: 'Capital Appropriation',
      sublabel: 'Funding & Sovereign Grants',
      tech: 'SAP PS Funds Management',
      desc: 'Locking multilateral development bank tranches and sovereign bond appropriations against multi-year capital expenditure schedules.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
      icon: Landmark
    },
    {
      id: 'linear',
      label: 'Linear Structuring',
      sublabel: 'Chainage & Mileposts',
      tech: 'SAP Linear Asset Mgmt',
      desc: 'Structuring civil infrastructure assets into continuous linear segments with dynamic starting/ending chainage offsets.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
      icon: Route
    },
    {
      id: 'disbursement',
      label: 'EPC Disbursement',
      sublabel: 'Progressive Verification',
      tech: 'SAP Earned Value Engine',
      desc: 'Certifying major civil engineering milestones, tunnel breakthrough tranches, and viaduct erection progress for payment release.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
      icon: TrendingUp
    },
    {
      id: 'cod',
      label: 'Commercial Ops (COD)',
      sublabel: 'Toll & Annuity Sharing',
      tech: 'SAP Revenue Accounting',
      desc: 'Achieving Commercial Operation Date (COD) and transitioning project ledgers into automated concessionaire toll and annuity revenue sharing.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
      icon: BarChart3
    },
    {
      id: 'shm',
      label: 'Structural Integrity',
      sublabel: 'Predictive Monitoring',
      tech: 'SAP Asset Central IoT',
      desc: 'Streaming continuous bridge strain gauge, vibration, and foundation telemetry to schedule predictive civil maintenance work orders.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      icon: Gauge
    }
  ];

  // Section 3: Infrastructure Industry Challenges & Bottlenecks Data (6 Cards)
  const industryChallenges = [
    {
      icon: TrendingUp,
      tag: 'MULTI-YEAR OVERRUNS',
      title: 'Decade-Scale Budget Escalation',
      desc: 'Megaprojects spanning 5 to 15 years incur rampant cost creep when sovereign funding, forex swings, and inflation indices remain untracked in real time.',
      footer: 'Unmitigated Capex Budget Creep'
    },
    {
      icon: Route,
      tag: 'LINEAR ASSET COMPLEXITY',
      title: 'Milepost Maintenance Blindspots',
      desc: 'Standard discrete ERP models fail to handle linear assets like 300-km railway tracks or highways, causing mislocated defect work orders.',
      footer: 'Lack of Linear Referencing (LRS)'
    },
    {
      icon: Landmark,
      tag: 'PPP REVENUE DISPUTES',
      title: 'Contested Concessionaire Annuities',
      desc: 'Lack of automated tolling reconciliation and traffic volume verification leads to lengthy litigation between government authorities and private operators.',
      footer: 'Disputed Concessionaire Settlements'
    },
    {
      icon: MapPin,
      tag: 'ROW DELAYS',
      title: 'Land Acquisition Stalls',
      desc: 'Disconnected cadastral records and manual compensation sign-offs stall civil contractors, triggering massive delay-claim damages.',
      footer: 'Critical Path Site Access Delays'
    },
    {
      icon: Gauge,
      tag: 'SENSOR SILOS',
      title: 'Disconnected Structural Telemetry',
      desc: 'Critical strain and vibration sensors installed on suspension bridges and tunnels operate in isolated SCADA silos away from maintenance ledgers.',
      footer: 'Catastrophic Civil Asset Risks'
    },
    {
      icon: Scale,
      tag: 'STATUTORY AUDITS',
      title: 'Multi-Agency Audit Friction',
      desc: 'Disparate documentation across contractors, lenders, and sovereign audit bodies leads to frozen multilateral grant disbursements.',
      footer: 'Blocked Multilateral Tranche Releases'
    }
  ];

  // Section 6: Modular Solutions Data
  const categories = [
    { key: 'ALL', label: 'All Infrastructure Suites' },
    { key: 'LINEAR', label: 'Linear Assets & GIS' },
    { key: 'PPP', label: 'PPP & Capital Governance' },
    { key: 'HEALTH', label: 'Structural Integrity & ESG' }
  ];

  const modularSolutions = [
    {
      category: 'LINEAR',
      categoryLabel: 'LINEAR ASSETS & GIS',
      tag: 'SAP LAM CORE',
      title: 'Linear Asset Management (SAP LAM)',
      description: 'Native chainage-based asset structuring mapping maintenance work orders, pavement condition indexes, and rail inspections to exact mileposts.',
      image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=800&q=80',
      icon: Route,
      highlights: ['Chainage start/end offset tracking', 'GIS map overlay integration', 'Dynamic linear defect logging']
    },
    {
      category: 'PPP',
      categoryLabel: 'PPP & CAPITAL GOVERNANCE',
      tag: 'SAP FIN & RAR',
      title: 'PPP Concessionaire & Annuity Suite',
      description: 'Automated tolling fee reconciliation, traffic volume indexing, concessionaire revenue sharing, and statutory debt-service escrow controls.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
      icon: Landmark,
      highlights: ['Automated tolling ledger clearing', 'Traffic volume variance indexing', 'DSRA debt reserve monitoring']
    },
    {
      category: 'PPP',
      categoryLabel: 'PPP & CAPITAL GOVERNANCE',
      tag: 'FUNDS MANAGEMENT',
      title: 'Multi-Year Capital Appropriation Engine',
      description: 'Manages sovereign bond tranches, multilateral development bank funds, and contractor milestone disbursements with strict multi-tier approval rules.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
      icon: BarChart3,
      highlights: ['Multi-currency funding pool ledgers', 'Sovereign grant compliance tracking', 'Progressive milestone drawdowns']
    },
    {
      category: 'LINEAR',
      categoryLabel: 'LINEAR ASSETS & GIS',
      tag: 'GIS & ROW',
      title: 'Right-of-Way & Land Cadastral Portal',
      description: 'Integrates geospatial parcel data with SAP Project Systems to coordinate statutory environmental clearances and compensation disbursements.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      icon: MapPin,
      highlights: ['Geospatial parcel boundary sync', 'Digital statutory clearance gates', 'Compensation disbursement audits']
    },
    {
      category: 'HEALTH',
      categoryLabel: 'STRUCTURAL INTEGRITY & ESG',
      tag: 'IOT DIGITAL TWIN',
      title: 'Structural Health Monitoring (SHM) Hub',
      description: 'Continuous ingestion of strain, tilt, and temperature sensor streams from bridges, tunnels, and dams to trigger predictive maintenance.',
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
      icon: Gauge,
      highlights: ['Real-time strain & vibration feeds', 'Automated civil safety alerts', 'Digital twin deflection modeling']
    },
    {
      category: 'HEALTH',
      categoryLabel: 'STRUCTURAL INTEGRITY & ESG',
      tag: 'GREEN INFRASTRUCTURE',
      title: 'Embodied Carbon & Green Asset Ledger',
      description: 'Calculates embedded Scope 3 greenhouse gas emissions from low-carbon concrete and steel, generating audited green bond compliance reports.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
      icon: ShieldCheck,
      highlights: ['Material embodied carbon tracking', 'Green bond certification reporting', 'Life-cycle sustainability scoring']
    }
  ];

  const filteredSolutions = activeSolutionCategory === 'ALL' 
    ? modularSolutions 
    : modularSolutions.filter(s => s.category === activeSolutionCategory);

  // Section 8: Transformation Roadmap Stages
  const transformationStages = [
    {
      id: 'stage-1',
      badge: 'FOUNDATION',
      title: 'Linear Asset Digitization',
      subtitle: 'Chainage & Milepost Setup',
      description: 'Mapping highways, railways, and tunnels into SAP Linear Asset Management (LAM) with precise geographic chainage markers and asset attributes.',
      tag: 'SAP LAM & Geospatial Core',
      textColor: 'text-sky-400',
      glowColor: 'bg-sky-500',
      borderBase: 'border-sky-500/30',
      activeBorder: 'border-sky-400 ring-2 ring-sky-500/30 bg-sky-950/30',
      icon: Route,
      before: 'Disconnected static spreadsheets with ambiguous milepost defect locations',
      after: 'Unified SAP Linear Asset structure with GPS and chainage offset accuracy',
      metrics: ['Exacting linear asset accuracy', 'Exact GIS defect mapping', 'Clean corridor register']
    },
    {
      id: 'stage-2',
      badge: 'INTEGRATION',
      title: 'Capital Budget Governance',
      subtitle: 'Multi-Year Tranche Controls',
      description: 'Aligning sovereign bond funding and development bank loans to SAP Funds Management with strict multi-tier milestone disbursement rules.',
      tag: 'SAP Funds Management & PS',
      textColor: 'text-cyan-400',
      glowColor: 'bg-cyan-500',
      borderBase: 'border-cyan-500/30',
      activeBorder: 'border-cyan-400 ring-2 ring-cyan-500/30 bg-cyan-950/30',
      icon: Landmark,
      before: 'Spreadsheet tracking of multi-billion dollar capital pools with funding leakage',
      after: 'Automated multi-year appropriation ledger preventing unapproved budget drawdowns',
      metrics: ['Eliminated unbudgeted appropriations', 'Audit-ready grant drawdowns', 'Strict commitment control']
    },
    {
      id: 'stage-3',
      badge: 'ORCHESTRATION',
      title: 'Concessionaire PPP Automation',
      subtitle: 'Toll & Annuity Ledgers',
      description: 'Deploying real-time automated revenue reconciliation between electronic toll collection (ETC) gateways and private concessionaire ledgers.',
      tag: 'SAP RAR & Billing Cloud',
      textColor: 'text-amber-400',
      glowColor: 'bg-amber-500',
      borderBase: 'border-amber-500/30',
      activeBorder: 'border-amber-400 ring-2 ring-amber-500/30 bg-amber-950/30',
      icon: BarChart3,
      before: 'Monthly manual toll audits with prolonged disputes over traffic volume splits',
      after: 'Daily automated revenue settlement with transparent escrow allocations',
      metrics: ['Instant toll ledger posting', 'Zero concessionaire disputes', 'Transparent revenue audits']
    },
    {
      id: 'stage-4',
      badge: 'AUTONOMY',
      title: 'Predictive Civil Operations',
      subtitle: 'Structural Health Telemetry',
      description: 'Integrating IoT strain gauges, vibration sensors, and weather feeds into SAP Asset Central to schedule predictive resurfacing and repairs.',
      tag: 'BTP IoT & Predictive EAM',
      textColor: 'text-emerald-400',
      glowColor: 'bg-emerald-500',
      borderBase: 'border-emerald-500/30',
      activeBorder: 'border-emerald-400 ring-2 ring-emerald-500/30 bg-emerald-950/30',
      icon: Gauge,
      before: 'Reactive repairs triggered only after visible structural distress or public hazard',
      after: 'Predictive maintenance dispatched months ahead based on sensor strain curves',
      metrics: ['Optimized lifecycle maintenance cost', 'Extended civil asset longevity', 'Uncompromised public safety']
    }
  ];

  // Section 10: FAQs
  const faqs = [
    {
      q: 'How does SAP Linear Asset Management (LAM) differ from standard Plant Maintenance?',
      a: 'Standard SAP Plant Maintenance (PM) treats equipment as discrete units (e.g., a pump or motor). SAP Linear Asset Management (LAM) structures assets continuously across distance (e.g., a 250-km highway or high-speed rail line). It allows work orders, pavement roughness indexes, catenary wire wear, and bridge joints to be tracked with starting and ending chainage offsets (e.g. Km 42.150 to Km 44.800).'
    },
    {
      q: 'How are Public-Private Partnership (PPP) annuity and toll revenues settled in S/4HANA?',
      a: 'We configure SAP Revenue Accounting and Reporting (RAR) integrated with electronic toll collection (ETC/Fastag/RFID) streams. Toll revenues are automatically reconciled against actual traffic volume logs, statutory concession agreements, and debt-service reserve account (DSRA) waterfalls, outputting compliant daily settlement statements.'
    },
    {
      q: 'Can Knooviq integrate geospatial GIS data (ArcGIS, QGIS) into SAP S/4HANA?',
      a: 'Yes. We utilize SAP Geographical Enablement Framework (GEF) to map linear and polygon assets between enterprise GIS databases and SAP S/4HANA. Field engineers can view asset health, maintenance histories, and work orders directly on an interactive GIS map layer from their mobile devices.'
    },
    {
      q: 'How does the system ensure compliance with World Bank and sovereign audit mandates?',
      a: 'SAP Funds Management and Project Systems enforce statutory commitment controls and multi-tier electronic approval workflows. All expenditures, variation orders, and milestone disbursements maintain an immutable digital audit trail with supporting inspection certificates, ensuring immediate compliance during multilateral audits.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#0070C0] selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* =========================================================================
          SECTION 1: HERO SECTION (Pure Enterprise Infrastructure Hero)
          ========================================================================= */}
      <section className="relative w-full min-h-[620px] lg:min-h-[680px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 overflow-hidden bg-slate-900">
        
        {/* Full-bleed High Resolution Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=2000&q=80" 
            alt="Mega-Infrastructure Bridge and Highway Network"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Seamless Cinematic Left Scrim */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950/95 via-slate-950/85 sm:via-slate-950/65 to-transparent pointer-events-none" />

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
                <Route className="w-3.5 h-3.5 text-cyan-400" />
                <span>KNOOVIQ INDUSTRY PRACTICE</span>
              </div>

              {/* Prominent High-Impact Heading with Crisp Drop-Shadow */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                Intelligent ERP for <br />
                <span className="text-cyan-400">Infrastructure & Megaprojects</span>
              </h1>

              {/* Subheading / Value Proposition */}
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight leading-snug pt-0.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                Capital Project Governance, Linear Asset Management (LRS) & PPP Annuity Ledgers.
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
                Empowering highway authorities, rail corporations, and sovereign concessionaires with{' '}
                <strong className="text-white font-semibold">SAP S/4HANA Linear Asset Management (LAM)</strong>, automated{' '}
                <strong className="text-cyan-300 font-semibold">PPP Toll & Annuity Ledgers</strong>, and real-time structural health telemetry.
              </p>

              {/* Clean Feature Highlights */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Chainage-Based Linear LRS</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>PPP Annuity & Tolling Reconciliation</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  <span>Sovereign Capex Appropriation</span>
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
                  <Route className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">LINEAR ASSETS</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">SAP LAM (LRS)</div>
                <div className="text-xs text-slate-300 mt-0.5">Chainage Offset Tracking</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <Landmark className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">PPP CONCESSION</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">Annuity Ledgers</div>
                <div className="text-xs text-slate-300 mt-0.5">Automated Toll Splits</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <Gauge className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">STRUCTURAL SHM</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">Strain Telemetry</div>
                <div className="text-xs text-slate-300 mt-0.5">Predictive Civil Maintenance</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <Scale className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">GOVERNANCE</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">Sovereign Grants</div>
                <div className="text-xs text-slate-300 mt-0.5">Audit-Proof Ledgers</div>
              </div>
            </motion.div>

          </div>
        </div>

      </section>

      {/* =========================================================================
          SECTION 2: EXECUTIVE INDUSTRY PERSPECTIVE & VALUE CHAIN SHOWCASE
          ========================================================================= */}
      <section className="py-14 sm:py-18 bg-gradient-to-b from-white via-[#F8FBFE] to-white border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-300 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
                <Activity className="w-3.5 h-3.5 text-[#0070C0]" />
                <span>EXECUTIVE INDUSTRY PERSPECTIVE</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight leading-tight">
                Governing Multi-Decade <span className="text-[#0070C0]">Sovereign Infrastructure Assets</span>
              </h2>

              <div className="border-l-4 border-[#0070C0] border-y border-r border-slate-300 pl-4 py-2 bg-gradient-to-r from-sky-50/80 via-sky-50/30 to-transparent rounded-r-xl">
                <p className="text-sm font-semibold text-slate-800 leading-relaxed italic">
                  &ldquo;Infrastructure investments succeed when linear assets, capital funding appropriations, and concessionaire revenues are synchronized. Eliminating blindspots between the milepost and the ledger protects public funds.&rdquo;
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                National infrastructure programs face acute fiscal risks when linear corridors (highways, tunnels, rail networks) lack dynamic chainage maintenance tracking and public-private partnership (PPP) concession ledgers suffer from reconciliation lag. Knooviq delivers an integrated digital core uniting geospatial GIS data, structural health sensors, and sovereign capital governance.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {[
                  'Dynamic Chainage & Milepost Precision',
                  'Sovereign Capital Appropriation Control',
                  'Automated Concessionaire Toll Clearing',
                  'Continuous Civil Structural Health Telemetry'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-slate-800 bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-[#0070C0] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Interactive Visualizer: Journey Step Console */}
            <div className="lg:col-span-6 space-y-4">
              
              <div className="rounded-2xl border-2 border-slate-200 bg-white p-5 shadow-lg relative overflow-hidden">
                <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden mb-4">
                  <img 
                    src={journeySteps[activeJourneyStep].image} 
                    alt={journeySteps[activeJourneyStep].label} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                    <div>
                      <span className="px-2.5 py-0.5 rounded-full bg-cyan-400 text-slate-950 font-mono text-[10px] font-bold uppercase tracking-wider">
                        {journeySteps[activeJourneyStep].tech}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                        {journeySteps[activeJourneyStep].label}
                      </h3>
                    </div>
                    <span className="text-xs font-mono font-bold text-sky-200 bg-white/10 px-2 py-1 rounded backdrop-blur-md">
                      STAGE WORKFLOW
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed min-h-[44px]">
                  {journeySteps[activeJourneyStep].desc}
                </p>
              </div>

              {/* Stage Navigation Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {journeySteps.map((step, idx) => {
                  const isSelected = activeJourneyStep === idx;
                  const StepIcon = step.icon;
                  return (
                    <button
                      key={step.id}
                      type="button"
                      onClick={() => setActiveJourneyStep(idx)}
                      className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex items-center gap-2 ${
                        isSelected 
                          ? 'bg-[#0070C0] text-white border-[#0070C0] shadow-sm' 
                          : 'bg-white text-slate-700 border-slate-300 hover:border-slate-400 hover:bg-slate-50'
                      }`}
                    >
                      <StepIcon className={`w-4 h-4 shrink-0 ${isSelected ? 'text-white' : 'text-[#0070C0]'}`} />
                      <div className="truncate">
                        <div className="text-[11px] font-bold truncate leading-tight">{step.label}</div>
                        <div className={`text-[9.5px] truncate font-mono ${isSelected ? 'text-sky-100' : 'text-slate-400'}`}>{step.sublabel}</div>
                      </div>
                    </button>
                  );
                })}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: OPERATIONAL CHALLENGES & PHYSICAL CONSTRAINTS
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-mono font-bold uppercase tracking-wider text-rose-600">
              <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
              <span>INFRASTRUCTURE DOMAIN BOTTLENECKS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              Operational Challenges Across Megaproject Lifecycles
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Infrastructure authorities suffer massive financial penalties when linear asset maintenance, sovereign capital drawdowns, and concessionaire revenues operate on siloed legacy systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {industryChallenges.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="rounded-2xl p-5 sm:p-6 bg-white border border-slate-200 shadow-xs hover:shadow-lg hover:border-slate-400 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 font-mono text-[10px] font-bold uppercase tracking-wider border border-rose-100">
                        {item.tag}
                      </span>
                      <div className="p-2 rounded-xl bg-slate-50 text-slate-700">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>STATUS IMPACT</span>
                    <span className="text-rose-600 font-semibold">{item.footer}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: CIRCULAR RADIAL CHEVRON WHEEL & ARCHITECTURAL ECOSYSTEM
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-[#050B17] text-white relative overflow-hidden border-b border-slate-800">
        
        {/* Glow ambient background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-sky-500/10 via-cyan-500/5 to-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/80 border border-sky-700/60 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300">
              <Route className="w-3.5 h-3.5 text-cyan-400" />
              <span>RADIAL PLATFORM ECOSYSTEM</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              KNOOVIQ Infrastructure Architecture Core
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Hover over any segment in the interlocking wheel to explore how Linear Asset Management, PPP concession ledgers, and structural health telemetry operate in seamless harmony.
            </p>
          </motion.div>

          {/* 3-Column Radial Wheel & Flanking Capabilities Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            
            {/* Left Column (4 Capabilities) */}
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
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/15 via-cyan-500/10 to-emerald-500/15 blur-2xl rounded-full pointer-events-none" />

                <svg
                  viewBox="0 0 500 500"
                  className="w-full h-full drop-shadow-2xl overflow-visible"
                >
                  {/* 8 Interlocking Chevron Segments */}
                  {wheelSegments.map((seg, idx) => {
                    const isHovered = hoveredWheelIndex === idx;
                    const pathD = getChevronPath(idx);
                    const coords = getIconCoords(idx);
                    const IconComponent = seg.icon;

                    return (
                      <g 
                        key={seg.id}
                        className="cursor-pointer transition-all duration-300"
                        onMouseEnter={() => setHoveredWheelIndex(idx)}
                        onMouseLeave={() => setHoveredWheelIndex(null)}
                      >
                        <path
                          d={pathD}
                          fill={isHovered ? seg.color : `${seg.color}35`}
                          stroke={seg.color}
                          strokeWidth={isHovered ? 3.5 : 1.5}
                          className="transition-all duration-300"
                          style={{
                            filter: isHovered ? `drop-shadow(0 0 14px ${seg.color})` : 'none'
                          }}
                        />
                        <foreignObject
                          x={coords.x - 14}
                          y={coords.y - 14}
                          width="28"
                          height="28"
                          className="pointer-events-none"
                        >
                          <div className="w-full h-full flex items-center justify-center">
                            <IconComponent 
                              className={`w-5 h-5 transition-colors duration-200 ${
                                isHovered ? 'text-white' : 'text-slate-200'
                              }`} 
                            />
                          </div>
                        </foreignObject>
                      </g>
                    );
                  })}

                  {/* Hub Center Circle */}
                  <circle
                    cx="250"
                    cy="250"
                    r="96"
                    fill="#050B17"
                    stroke="#1E293B"
                    strokeWidth="3"
                  />
                  <circle
                    cx="250"
                    cy="250"
                    r="90"
                    fill="#0A1428"
                    stroke="#0284C7"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />

                  {/* Center Text */}
                  <text
                    x="250"
                    y="238"
                    textAnchor="middle"
                    fill="#38BDF8"
                    fontSize="11"
                    fontFamily="monospace"
                    fontWeight="bold"
                    letterSpacing="2"
                  >
                    KNOOVIQ
                  </text>
                  <text
                    x="250"
                    y="258"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="14"
                    fontWeight="900"
                  >
                    INFRASTRUCTURE
                  </text>
                  <text
                    x="250"
                    y="274"
                    textAnchor="middle"
                    fill="#94A3B8"
                    fontSize="9"
                    fontFamily="monospace"
                  >
                    LINEAR ASSET CORE
                  </text>
                </svg>

              </div>
            </div>

            {/* Right Column (4 Capabilities) */}
            <div className="order-3 lg:col-span-4 flex flex-col justify-between space-y-4 sm:space-y-5">
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
                      <div className="w-2 h-7 rounded-full shrink-0 mt-0.5 transition-all duration-300"
                        style={{ 
                          backgroundColor: item.color,
                          boxShadow: isHovered ? `0 0 12px ${item.color}` : 'none'
                        }}
                      />
                      <div className="space-y-1 text-right flex-1">
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
          SECTION 5: ENTERPRISE TECHNICAL ARCHITECTURE BLUEPRINT (Interactive Tabs)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
              <Cpu className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>CLEAN CORE ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Enterprise Infrastructure Technology Blueprint
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Decoupling IoT structural strain sensors, GIS mapping, and concessionaire portals on SAP BTP while preserving an uncorrupted S/4HANA core.
            </p>
          </div>

          {/* Interactive Layer Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setActiveArchTab('telemetry')}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeArchTab === 'telemetry'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              GIS & Structural IoT Telemetry
            </button>
            <button
              onClick={() => setActiveArchTab('core')}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeArchTab === 'core'
                  ? 'bg-[#0070C0] text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              SAP S/4HANA LAM & Funds Core
            </button>
            <button
              onClick={() => setActiveArchTab('cloud')}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeArchTab === 'cloud'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Cloud BTP Concessionaire Portal
            </button>
          </div>

          {/* Active Blueprint View */}
          <div className="rounded-2xl border-2 border-slate-300 bg-slate-950 text-white p-6 sm:p-8 shadow-xl">
            {activeArchTab === 'telemetry' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <Radio className="w-6 h-6 text-sky-400" />
                    <div>
                      <h3 className="text-lg font-bold text-white">Geospatial GIS & Structural Health Sensors</h3>
                      <p className="text-xs text-slate-400 font-mono">ArcGIS • Fiber Optic Acoustic • Strain Gauges • Weather Stations • Drone Surveys</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-mono">Sub-Minute Feeds</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-xs font-bold text-sky-300 uppercase font-mono mb-1">Geospatial Cadastral Sync</h4>
                    <p className="text-xs text-slate-300">Bi-directional GIS layer sync translating map coordinates into chainage mileposts in SAP LAM.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-xs font-bold text-sky-300 uppercase font-mono mb-1">Fiber-Optic Deflection</h4>
                    <p className="text-xs text-slate-300">Continuous optical strain sensing monitors bridge girder load stress and foundation settlement.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-xs font-bold text-sky-300 uppercase font-mono mb-1">Drone Photogrammetry</h4>
                    <p className="text-xs text-slate-300">High-resolution drone ortho-mosaics automatically detect pavement cracking and slope erosion.</p>
                  </div>
                </div>
              </div>
            )}

            {activeArchTab === 'core' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <Server className="w-6 h-6 text-[#0070C0]" />
                    <div>
                      <h3 className="text-lg font-bold text-white">SAP S/4HANA Linear Asset Management & Sovereign Funds Core</h3>
                      <p className="text-xs text-slate-400 font-mono">SAP LAM • Funds Management (FM) • Universal Journal • Grant Accounting</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono">Clean Core Standard</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-xs font-bold text-cyan-300 uppercase font-mono mb-1">Linear Referencing (LRS)</h4>
                    <p className="text-xs text-slate-300">Assets and work orders anchored dynamically by Start Chainage, End Chainage, and Marker Posts.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-xs font-bold text-cyan-300 uppercase font-mono mb-1">Sovereign Tranche Controls</h4>
                    <p className="text-xs text-slate-300">Budget availability controls prevent multi-year overspending on sovereign loan accounts.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-xs font-bold text-cyan-300 uppercase font-mono mb-1">IFRS 15 Concession Billing</h4>
                    <p className="text-xs text-slate-300">Recognizes progressive construction revenue and automated post-COD annuity disbursements.</p>
                  </div>
                </div>
              </div>
            )}

            {activeArchTab === 'cloud' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <Zap className="w-6 h-6 text-amber-400" />
                    <div>
                      <h3 className="text-lg font-bold text-white">SAP BTP Concessionaire & Lender Collaboration Suite</h3>
                      <p className="text-xs text-slate-400 font-mono">BTP Event Mesh • ETC Toll Settlement API • Audit Portal</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-mono">Cloud Event Mesh</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-xs font-bold text-amber-300 uppercase font-mono mb-1">ETC Toll Clearinghouse</h4>
                    <p className="text-xs text-slate-300">Ingests real-time FASTag, RFID, and ANPR camera feeds to verify concessionaire revenue splits.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-xs font-bold text-amber-300 uppercase font-mono mb-1">Multi-Lender Audit Vault</h4>
                    <p className="text-xs text-slate-300">Secure digital repository providing sovereign auditors and bondholders real-time compliance docs.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-xs font-bold text-amber-300 uppercase font-mono mb-1">Predictive Corridor AI</h4>
                    <p className="text-xs text-slate-300">Machine learning models forecast pavement deterioration and schedule resurfacing contracts.</p>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: MODULAR INDUSTRY SOLUTION SUITES
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
              <Boxes className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>MODULAR SOLUTIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Knooviq Infrastructure Solution Suites
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Targeted capability packages designed to modernize national infrastructure networks without disrupting operational traffic.
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveSolutionCategory(cat.key)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeSolutionCategory === cat.key
                    ? 'bg-[#0070C0] text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid of Solution Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSolutions.map((sol) => {
              const Icon = sol.icon;
              return (
                <div 
                  key={sol.title}
                  className="rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#0070C0] hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group h-full"
                >
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100 shrink-0">
                    <img 
                      src={sol.image} 
                      alt={sol.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-white/20 text-white font-mono text-[10px] font-bold uppercase tracking-wider">
                      {sol.tag}
                    </div>
                    <div className="absolute bottom-3 right-3 p-2 rounded-lg bg-white/90 backdrop-blur-md text-[#0070C0] shadow-sm">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono font-bold text-[#0070C0] uppercase tracking-wider bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                        {sol.categoryLabel}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-950 group-hover:text-[#0070C0] transition-colors leading-snug line-clamp-2">
                        {sol.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                        {sol.description}
                      </p>
                    </div>

                    <div className="space-y-2 pt-3 border-t border-slate-100 mt-4">
                      {sol.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0070C0] shrink-0" />
                          <span className="truncate">{h}</span>
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
          SECTION 7: STANDARDIZATION & CLEAN CORE ARCHITECTURE MATRIX
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold uppercase tracking-wider text-emerald-700">
              <Award className="w-3.5 h-3.5 text-emerald-600" />
              <span>ENTERPRISE STANDARDIZATION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Legacy Infrastructure Silos vs Knooviq Clean Core
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Compare traditional public works administrative bottlenecks against Knooviq&apos;s real-time SAP S/4HANA Clean Core architecture.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white font-mono text-[11px] uppercase tracking-wider">
                  <th className="p-4 sm:p-5">Infrastructure Dimension</th>
                  <th className="p-4 sm:p-5 text-rose-300">Legacy / Fragmented Approach</th>
                  <th className="p-4 sm:p-5 text-cyan-300">Knooviq S/4HANA Clean Core</th>
                  <th className="p-4 sm:p-5 text-emerald-300">Measurable Value Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Linear Asset Maintenance</td>
                  <td className="p-4 sm:p-5 text-slate-600">Discrete asset numbering with ambiguous location descriptions.</td>
                  <td className="p-4 sm:p-5 text-slate-900 font-medium">SAP LAM dynamic chainage offsets and GIS visual layers.</td>
                  <td className="p-4 sm:p-5 text-emerald-600 font-semibold">Flawless location accuracy; accelerated repair dispatch.</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-4 sm:p-5 font-bold text-slate-900">PPP Concession Revenue</td>
                  <td className="p-4 sm:p-5 text-slate-600">Manual monthly spreadsheet toll volume reconciliations.</td>
                  <td className="p-4 sm:p-5 text-slate-900 font-medium">Real-time ETC tolling gateway integration and automated split.</td>
                  <td className="p-4 sm:p-5 text-emerald-600 font-semibold">Eliminated toll revenue leakage; dispute-free settlements.</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Capital Appropriation</td>
                  <td className="p-4 sm:p-5 text-slate-600">Disjointed agency ledgers causing World Bank grant delays.</td>
                  <td className="p-4 sm:p-5 text-slate-900 font-medium">SAP Funds Management with strict multi-tranche controls.</td>
                  <td className="p-4 sm:p-5 text-emerald-600 font-semibold">Audit-ready compliance; instant tranche release.</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Right-of-Way (RoW)</td>
                  <td className="p-4 sm:p-5 text-slate-600">Paper cadastral files delaying contractor site handover.</td>
                  <td className="p-4 sm:p-5 text-slate-900 font-medium">Digital cadastral portal tying clearances to WBS milestones.</td>
                  <td className="p-4 sm:p-5 text-emerald-600 font-semibold">Eliminated delay claims from contractor standstills.</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Structural Safety Monitoring</td>
                  <td className="p-4 sm:p-5 text-slate-600">Periodic manual inspection cycles with undetected structural fatigue.</td>
                  <td className="p-4 sm:p-5 text-slate-900 font-medium">Continuous IoT strain gauge and vibration data streaming.</td>
                  <td className="p-4 sm:p-5 text-emerald-600 font-semibold">Predictive civil risk mitigation; extended asset life.</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 8: TRANSFORMATION ROADMAP & DELTA INSPECTOR
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-[#050B17] text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono font-bold uppercase tracking-wider text-sky-300">
              <RefreshCw className="w-3.5 h-3.5 text-sky-300" />
              <span>TRANSFORMATION ROADMAP & DELTA INSPECTOR</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Phased Roadmap to Autonomous Infrastructure Operations
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              Inspect how legacy public works administration transforms into an orchestrated digital corridor across every stage of the SAP deployment.
            </p>
          </div>

          {/* 4 Interactive Transformation Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {transformationStages.map((stage, sIdx) => {
              const isSelected = activeTransformStage === sIdx;
              const IconComp = stage.icon;
              return (
                <div
                  key={stage.id}
                  onClick={() => setActiveTransformStage(sIdx)}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                    isSelected
                      ? stage.activeBorder
                      : `bg-white/[0.03] ${stage.borderBase} hover:border-slate-600 hover:bg-white/[0.05]`
                  }`}
                >
                  {isSelected && (
                    <div className={`absolute top-0 left-0 right-0 h-0.5 ${stage.glowColor} shadow-[0_0_10px_currentColor]`} />
                  )}

                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className={`w-2 h-2 rounded-full ${stage.glowColor} ${isSelected ? 'animate-ping' : ''}`} />
                        <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${stage.textColor}`}>
                          {stage.badge}
                        </span>
                      </div>
                      <div className={`p-1.5 rounded-lg bg-white/5 border border-white/10 ${stage.textColor}`}>
                        <IconComp className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                        {stage.title}
                      </h3>
                      <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wide mt-0.5">
                        {stage.subtitle}
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                      {stage.description}
                    </p>
                  </div>

                  <div className="pt-2.5 mt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[9.5px] font-mono text-slate-400">
                      {stage.tag}
                    </span>
                    <span className={`text-[9.5px] font-mono font-bold uppercase tracking-wider ${stage.textColor} inline-flex items-center gap-0.5`}>
                      <span>{isSelected ? 'ACTIVE' : 'INSPECT'}</span>
                      <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Live Transformation Console / Delta Inspector */}
          {(() => {
            const currentStage = transformationStages[activeTransformStage];
            return (
              <div className="rounded-2xl bg-slate-900/90 border-2 border-slate-700/80 p-5 sm:p-6 shadow-2xl backdrop-blur-md relative overflow-hidden">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-white/10 pb-4 mb-4">
                  <div>
                    <span className={`text-[11px] font-mono font-bold uppercase tracking-wider ${currentStage.textColor}`}>
                      {currentStage.badge} ARCHITECTURAL DELTA
                    </span>
                    <h3 className="text-lg font-bold text-white mt-0.5">
                      {currentStage.title} &mdash; {currentStage.subtitle}
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-slate-200 text-xs font-mono">
                    Target: {currentStage.tag}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-rose-950/30 border border-rose-500/30">
                    <div className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider mb-1">Legacy State</div>
                    <p className="text-xs text-slate-200">{currentStage.before}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30">
                    <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-1">Modernized Clean Core</div>
                    <p className="text-xs text-slate-200">{currentStage.after}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-4 mt-4 border-t border-white/10">
                  <span className="text-xs font-mono text-slate-400 uppercase">Key Results:</span>
                  {currentStage.metrics.map((m, idx) => (
                    <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-sky-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{m}</span>
                    </span>
                  ))}
                </div>
              </div>
            );
          })()}

        </div>
      </section>

      {/* =========================================================================
          SECTION 9: STRATEGIC ENTERPRISE VALUE DRIVERS & OPERATIONAL SAFEGUARDS
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>ENTERPRISE VALUE DRIVERS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Strategic Value Drivers & Operational Safeguards
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Architectural outcomes delivered across sovereign infrastructure corridors and public-private concessionaires.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#0070C0] hover:shadow-md transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-[#0070C0]">
                  <Route className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  Corridor Maintenance Optimization
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Dynamic chainage and milepost-based maintenance dispatch eliminating resurfacing guesswork and optimizing civil upkeep budgets.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono font-bold text-sky-700 uppercase">
                <span>LINEAR PRECISION</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  Tolling Audit Integrity
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Real-time electronic toll collection gateway integration ensuring continuous concessionaire revenue reconciliation and zero leakage.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono font-bold text-emerald-700 uppercase">
                <span>REVENUE ASSURANCE</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#0070C0] hover:shadow-md transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-[#0070C0]">
                  <Landmark className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  Sovereign Capex Compliance
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Strict multi-tranche public finance and multilateral loan ledger controls, ensuring audit-proof documentation for capital grants.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono font-bold text-sky-700 uppercase">
                <span>FUNDS INTEGRITY</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                  <Gauge className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  Structural Longevity Assurance
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Continuous IoT strain and vibration telemetry detecting structural fatigue early, extending the operational life of civil megastructures.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono font-bold text-emerald-700 uppercase">
                <span>CIVIL RESILIENCE</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 10: FREQUENTLY ASKED QUESTIONS
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
              <HelpCircle className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Infrastructure Architecture Advisory
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Key technical and commercial considerations for transport authorities and sovereign concessionaires deploying SAP S/4HANA.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx}
                  className="rounded-xl border border-slate-200 overflow-hidden bg-slate-50/50 transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left text-xs sm:text-sm font-bold text-slate-900 flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-[#0070C0]' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 11: FINAL EXECUTIVE CTA
          ========================================================================= */}
      <section className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-gradient-to-r from-[#003B73] via-[#005B9E] to-[#0070C0] text-white">
        
        {/* Abstract 3D Mesh Visual Background */}
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
            <Route className="w-3.5 h-3.5 text-cyan-300" />
            <span>CONNECT YOUR INFRASTRUCTURE CORRIDORS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Build Next-Generation Infrastructure Governance?
          </h2>

          <p className="text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed font-normal">
            Synchronize your linear assets, concessionaire revenue ledgers, and sovereign grants with Knooviq.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => onOpenContact('Infrastructure Architecture Advisory')}
              className="px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-[#003B73] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-2xl shadow-black/25 transition-all flex items-center gap-2 group cursor-pointer"
            >
              <span>Talk to Our Infrastructure Experts</span>
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
              <span>Continuous Global SLA Support</span>
            </span>
          </div>

        </div>

      </section>

    </div>
  );
};

export default InfrastructureIndustryPage;
