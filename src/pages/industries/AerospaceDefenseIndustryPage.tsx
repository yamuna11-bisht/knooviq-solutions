import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Plane, 
  ShieldCheck, 
  Activity, 
  TrendingUp, 
  BarChart3, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  Sparkles, 
  Clock, 
  Workflow, 
  Compass, 
  Zap, 
  Boxes, 
  Globe2, 
  RefreshCw, 
  FileText, 
  Radio, 
  Server, 
  Factory,
  Scan,
  Cloud,
  Sliders,
  Award,
  FileCheck2,
  Navigation,
  Layers
} from 'lucide-react';

interface AerospaceDefenseIndustryPageProps {
  onOpenContact?: (defaultTopic?: string) => void;
}

export const AerospaceDefenseIndustryPage: React.FC<AerospaceDefenseIndustryPageProps> = ({ 
  onOpenContact 
}) => {
  // State for Section 2 Interactive Journey
  const [activeJourneyStep, setActiveJourneyStep] = useState(0);

  // State for Section 4 Circular Chevron Wheel
  const [hoveredWheelIndex, setHoveredWheelIndex] = useState<number | null>(null);

  // State for Section 6 Solution Category Filter
  const [activeSolutionCategory, setActiveSolutionCategory] = useState<string>('ALL');

  // State for Section 8 Transformation Stage
  const [activeTransformStage, setActiveTransformStage] = useState<number>(0);

  // Section 4: 8-Segment Circular Chevron Wheel (KNOOVIQ Aerospace & Defense Platform)
  const wheelSegments = [
    {
      id: 'rotable-mro',
      title: 'Rotable Engine & Avionics Management',
      desc: 'Tracking high-value rotable aircraft components through closed-loop overhaul cycles with flight hours (FH) and flight cycles (FC).',
      side: 'right',
      color: '#0284C7',
      textColor: 'text-sky-400',
      bgGlow: 'rgba(2, 132, 199, 0.3)',
      icon: RefreshCw
    },
    {
      id: 'itar-ear',
      title: 'ITAR & EAR Export Control Governance',
      desc: 'Automated technical data access restrictions and end-user verification protecting defense military specifications.',
      side: 'right',
      color: '#0EA5E9',
      textColor: 'text-cyan-400',
      bgGlow: 'rgba(14, 165, 233, 0.3)',
      icon: ShieldCheck
    },
    {
      id: 'as9100-quality',
      title: 'AS9100 / AS9110 Quality Governance',
      desc: 'Strict aerospace first-article inspection (FAI AS9102), non-conformance records, and automated containment locks.',
      side: 'right',
      color: '#10B981',
      textColor: 'text-emerald-400',
      bgGlow: 'rgba(16, 185, 129, 0.3)',
      icon: Award
    },
    {
      id: 'airworthiness-certs',
      title: 'FAA 8130-3 & EASA Form 1 Automation',
      desc: 'Digitally generating and signing authorized release certificates directly from completed SAP work orders.',
      side: 'right',
      color: '#F59E0B',
      textColor: 'text-amber-400',
      bgGlow: 'rgba(245, 158, 11, 0.3)',
      icon: FileCheck2
    },
    {
      id: 'life-limited-parts',
      title: 'Life-Limited Parts (LLP) Hard Limits',
      desc: 'Real-time calculation of remaining flight cycles, automatically grounding aircraft before mandatory turbine discard limits.',
      side: 'left',
      color: '#F97316',
      textColor: 'text-orange-400',
      bgGlow: 'rgba(249, 115, 22, 0.3)',
      icon: Clock
    },
    {
      id: 'evm-reporting',
      title: 'Earned Value Management (EVM)',
      desc: 'ANSI/EIA-748 compliant project structure budgeting cost and schedule variances for long-cycle defense programs.',
      side: 'left',
      color: '#8B5CF6',
      textColor: 'text-purple-400',
      bgGlow: 'rgba(139, 92, 246, 0.3)',
      icon: BarChart3
    },
    {
      id: 'configuration-mgmt',
      title: 'As-Designed vs As-Maintained CMII',
      desc: 'Comprehensive tail-number configuration baseline maintaining serial-level modification status throughout aircraft service life.',
      side: 'left',
      color: '#EC4899',
      textColor: 'text-pink-400',
      bgGlow: 'rgba(236, 72, 153, 0.3)',
      icon: Workflow
    },
    {
      id: 'tat-analytics',
      title: 'MRO Turnaround Time (TAT) AI Analytics',
      desc: 'Predictive machine learning forecasting shop teardown discoveries, parts lead times, and rotable pool availability.',
      side: 'left',
      color: '#3B82F6',
      textColor: 'text-blue-400',
      bgGlow: 'rgba(59, 130, 246, 0.3)',
      icon: Plane
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
    const thetaMid = (theta1 + theta2) / 2 + tip / 2;
    const rad = (deg: number) => (deg * Math.PI) / 180;
    return {
      x: cx + rMid * Math.cos(rad(thetaMid)),
      y: cy + rMid * Math.sin(rad(thetaMid))
    };
  };

  // Section 2: Journey Steps
  const journeySteps = [
    {
      id: 'defense-evm',
      label: 'Defense Program Planning & EVM',
      sublabel: 'Program Milestone Control',
      desc: 'Earned Value Management (EVM), WBS budgeting, and contract milestone tracking compliant with ANSI/EIA-748 and DFARS.',
      tech: 'SAP Project Systems (PS)',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80',
      icon: BarChart3
    },
    {
      id: 'induction',
      label: 'Rotable Induction & Triage',
      sublabel: 'MRO Inbound Inspection',
      desc: 'Aircraft logbooks, teardown condition reports, logbook cross-checks, and service bulletin compliance audits.',
      tech: 'SAP Complex Maintenance MRO',
      image: 'https://images.unsplash.com/photo-1519074069444-1ba4ea16e6f1?auto=format&fit=crop&w=1200&q=80',
      icon: RefreshCw
    },
    {
      id: 'llp',
      label: 'Life-Limited Parts (LLP) Control',
      sublabel: 'Hard Time Limits',
      desc: 'Flight cycles (FC) and flight hours (FH) calculations preventing inadvertent over-flying of critical turbine discs and airframe spars.',
      tech: 'SAP Plant Maintenance (PM)',
      image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80',
      icon: Clock
    },
    {
      id: 'itar',
      label: 'ITAR & Defense Security Vault',
      sublabel: 'Export Data Protection',
      desc: 'Role-based technical data access firewalls restricting engineering drawings, work cards, and defense specs to authorized personnel.',
      tech: 'SAP BTP Defense Vault',
      image: 'https://images.unsplash.com/photo-1517976487545-288219eb0b21?auto=format&fit=crop&w=1200&q=80',
      icon: ShieldCheck
    },
    {
      id: 'faa8130',
      label: 'Digital Release & FAA Form 8130-3',
      sublabel: 'Airworthiness Release',
      desc: 'Automated generation and electronic signature of FAA 8130-3 and EASA Form 1 certificates directly from verified work orders.',
      tech: 'SAP Quality Management',
      image: 'https://images.unsplash.com/photo-1559297434-fae8a1916a79?auto=format&fit=crop&w=1200&q=80',
      icon: FileCheck2
    },
    {
      id: 'fleet',
      label: 'Fleet Readiness & Predictive MRO',
      sublabel: 'Aviation BI',
      desc: 'Predictive unscheduled maintenance modeling, turnaround time (TAT) tracking, and rotable pool sizing across global air fleets.',
      tech: 'SAP Analytics Cloud',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      icon: Plane
    }
  ];

  // Section 3: Aerospace & Defense Industry Challenges
  const aerospaceChallenges = [
    {
      icon: Plane,
      tag: 'AOG CRISIS',
      title: 'Aircraft on Ground (AOG) Bottlenecks',
      desc: 'Missing rotable engines, uncertified spare parts, or delayed MRO triage ground commercial and military aircraft, costing thousands per hour.',
      footer: 'Catastrophic AOG Grounding'
    },
    {
      icon: ShieldCheck,
      tag: 'EXPORT CONTROL',
      title: 'ITAR & EAR Compliance Exposure',
      desc: 'Unregulated technical data access across multi-tier defense suppliers risks severe federal violations and loss of military contractor clearance.',
      footer: 'Defense Sanction Vulnerabilities'
    },
    {
      icon: Clock,
      tag: 'AIRWORTHINESS',
      title: 'Life-Limited Parts (LLP) Excursions',
      desc: 'Tracking cumulative flight hours (FH) and cycles (FC) manually across swapped rotable parts risks over-flying mandatory FAA discard limits.',
      footer: 'Critical Airworthiness Violations'
    },
    {
      icon: FileCheck2,
      tag: 'RELEASE CERTS',
      title: 'Manual FAA 8130-3 & EASA Releases',
      desc: 'Paper-based release certificates, missing mechanic stamp verifications, and disconnected logbooks create lengthy return-to-service delays.',
      footer: 'Documentation Release Latency'
    },
    {
      icon: RefreshCw,
      tag: 'MRO SCOPE',
      title: 'Unanticipated MRO Teardown Discoveries',
      desc: 'Deep engine disassembly frequently uncovers secondary cracks and corrosion that expand work scopes without real-time customer re-approval.',
      footer: 'Unbilled MRO Scope Drift'
    },
    {
      icon: BarChart3,
      tag: 'DEFENSE AUDITS',
      title: 'Defense Contract Audit Agency (DCAA) Audits',
      desc: 'Inability to provide transparent cost-schedule integration and Earned Value Management (EVM) data leads to government billing disallowances.',
      footer: 'DCAA Audit Disallowances'
    }
  ];

  // Section 6: 9 Modular Enterprise Industry Solutions (Symmetrical 3x3 Grid)
  const industrySolutions = [
    {
      title: 'Rotable Asset & Overhaul Lifecycle',
      tag: 'ROTABLE POOL MRO',
      category: 'MRO_OPERATIONS',
      categoryLabel: 'Hangar & MRO Operations',
      description: 'Closed-loop repair, overhaul, and pool management tracking rotable engines and avionics with flight hours and cycles.',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80',
      highlights: ['Flight Hour & Cycle Ingestion', 'Rotable Pool Sizing', 'Shop Work Scope Authoring'],
      icon: RefreshCw
    },
    {
      title: 'ITAR & EAR Defense Vault',
      tag: 'EXPORT SECURITY',
      category: 'DEFENSE_PROGRAMS',
      categoryLabel: 'Defense & Programs',
      description: 'Zero-trust defense data architecture restricting CAD models, repair drawings, and technical manuals by nationality and clearance.',
      image: 'https://images.unsplash.com/photo-1517976487545-288219eb0b21?auto=format&fit=crop&w=800&q=80',
      highlights: ['US-Persons Access Enclaves', 'End-User Verification Gates', 'Immutable Export Audit Logs'],
      icon: ShieldCheck
    },
    {
      title: 'FAA 8130-3 & EASA Release Hub',
      tag: 'AIRWORTHINESS CERTS',
      category: 'AIRWORTHINESS',
      categoryLabel: 'Airworthiness & Safety',
      description: 'Direct generation and cryptographically secure digital signing of airworthiness release certificates from completed shop tasks.',
      image: 'https://images.unsplash.com/photo-1559297434-fae8a1916a79?auto=format&fit=crop&w=800&q=80',
      highlights: ['FAA 8130-3 Automation', 'EASA Form 1 Generation', 'Digital Technician Signatures'],
      icon: FileCheck2
    },
    {
      title: 'Life-Limited Parts (LLP) Engine',
      tag: 'DISCARD LIMITS',
      category: 'AIRWORTHINESS',
      categoryLabel: 'Airworthiness & Safety',
      description: 'Automated calculation of flight cycles and hours, generating predictive replacement alerts before mandatory discard thresholds.',
      image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80',
      highlights: ['Hard Time Tracking', 'Automated Grounding Triggers', 'Back-to-Birth Genealogy'],
      icon: Clock
    },
    {
      title: 'Earned Value Management (EVM)',
      tag: 'DCAA COMPLIANCE',
      category: 'DEFENSE_PROGRAMS',
      categoryLabel: 'Defense & Programs',
      description: 'ANSI/EIA-748 compliant budgeting linking Work Breakdown Structure (WBS) milestones, planned costs, and actual labor burn.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      highlights: ['BCWS / BCWP / ACWP Calculations', 'Schedule Variance Tracking', 'DCAA-Ready Reporting'],
      icon: BarChart3
    },
    {
      title: 'As-Designed vs As-Maintained CMII',
      tag: 'CONFIG MANAGEMENT',
      category: 'AIRWORTHINESS',
      categoryLabel: 'Airworthiness & Safety',
      description: 'Tail-number level configuration control managing engineering changes, Airworthiness Directives (AD), and Service Bulletins (SB).',
      image: 'https://images.unsplash.com/photo-1519074069444-1ba4ea16e6f1?auto=format&fit=crop&w=800&q=80',
      highlights: ['Tail-Number CMII Baseline', 'Service Bulletin Compliance', 'Airworthiness Directive Audits'],
      icon: Workflow
    },
    {
      title: 'Aircraft on Ground (AOG) Dispatch',
      tag: 'EMERGENCY LOGISTICS',
      category: 'MRO_OPERATIONS',
      categoryLabel: 'Hangar & MRO Operations',
      description: 'Emergency parts locating, carrier expediting, and hangar priority scheduling to resolve grounded aircraft within target hours.',
      image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=800&q=80',
      highlights: ['Global AOG Inventory Search', 'Dynamic Hangar Allocation', 'Expedited Courier Tracking'],
      icon: Plane
    },
    {
      title: 'MRO Turnaround Time (TAT) AI',
      tag: 'AI MRO PREDICTION',
      category: 'MRO_OPERATIONS',
      categoryLabel: 'Hangar & MRO Operations',
      description: 'Machine learning forecasting shop teardown discoveries, non-destructive testing (NDT) bottlenecks, and delivery commitments.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
      highlights: ['TAT Prediction Models', 'NDT Bottleneck Isolation', 'Overhaul Labor Leveling'],
      icon: Sparkles
    },
    {
      title: 'Defense Subcontractor Network',
      tag: 'SUPPLY INTEGRATION',
      category: 'DEFENSE_PROGRAMS',
      categoryLabel: 'Defense & Programs',
      description: 'Secure B2B collaboration portals for tier-1 and tier-2 defense suppliers with automated quality acceptance and delivery sync.',
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
      highlights: ['First Article Inspection (AS9102)', 'CMMC Security Standards', 'Supplier Quality Scorecards'],
      icon: Factory
    }
  ];

  // Section 8: Transformation in Action (Connected 4-Phase Architecture Pipeline)
  const transformationStages = [
    {
      phase: 'INITIAL CHALLENGE',
      badge: 'SILOED HANGARS',
      title: 'Disconnected MRO & Defense',
      subtitle: 'Legacy Aerospace Fragmentation',
      description: 'Aviation hangars, component overhaul shops, defense program managers, and quality inspectors operating on disconnected paper logbooks and spreadsheets.',
      accent: 'rose',
      borderBase: 'border-rose-500/30 hover:border-rose-400',
      activeBorder: 'border-rose-400 ring-2 ring-rose-500/30 bg-rose-950/20 shadow-[0_0_25px_rgba(244,63,94,0.2)]',
      glowColor: 'bg-rose-500',
      textColor: 'text-rose-400',
      icon: Activity,
      tag: 'AOG Delays & ITAR Exposure',
      before: 'Paper maintenance logs & manual flight cycle tracking',
      after: 'Unified digital rotable thread & automated airworthiness certs',
      metrics: ['AOG Grounding Days', 'Manual 8130-3 Paperwork', 'ITAR Data Gaps']
    },
    {
      phase: 'STRATEGIC FRAMEWORK',
      badge: 'CLEAN CORE',
      title: 'BTP Defense Data Fabric',
      subtitle: 'Architecture Foundation',
      description: 'Deploying decoupled event-driven microservices on SAP BTP to manage ITAR-compliant defense vaults, digital technician signatures, and flight hour ingestion.',
      accent: 'sky',
      borderBase: 'border-sky-500/30 hover:border-sky-400',
      activeBorder: 'border-sky-400 ring-2 ring-sky-500/30 bg-sky-950/20 shadow-[0_0_25px_rgba(56,189,248,0.2)]',
      glowColor: 'bg-sky-500',
      textColor: 'text-sky-400',
      icon: Workflow,
      tag: 'Real-Time Airworthiness Mesh',
      before: 'Disconnected spreadsheets & unsecured drawing servers',
      after: 'Sub-second flight cycle updates & zero-trust export security',
      metrics: ['Decoupled Core', 'ITAR Data Vault', 'Digital Form 8130-3 Engine']
    },
    {
      phase: 'DEPLOYED STACK',
      badge: 'LIVE ECOSYSTEM',
      title: 'S/4HANA Aerospace Core',
      subtitle: 'Complex MRO + Project Systems',
      description: 'Unifying S/4HANA Aerospace Core with SAP Complex Maintenance & Overhaul, driving automated rotable triage and ANSI/EIA-748 EVM reporting.',
      accent: 'cyan',
      borderBase: 'border-cyan-500/30 hover:border-cyan-400',
      activeBorder: 'border-cyan-400 ring-2 ring-cyan-500/30 bg-cyan-950/20 shadow-[0_0_25px_rgba(34,211,238,0.2)]',
      glowColor: 'bg-cyan-500',
      textColor: 'text-cyan-400',
      icon: Plane,
      tag: 'Orchestrated S/4HANA',
      before: 'Disjointed hangar work orders & unbilled teardown discoveries',
      after: 'Centralized tail-number configuration & touchless MRO workflows',
      metrics: ['S/4HANA Aerospace Core', 'EVM Project Systems', 'Universal Journal ACDOCA']
    },
    {
      phase: 'STRATEGIC VALUE',
      badge: 'REALIZED IMPACT',
      title: 'Fleet Availability Velocity',
      subtitle: 'Zero-Defect Airworthiness',
      description: 'Attaining end-to-end component genealogy from raw titanium forging to installed turbine blade, maximizing mission readiness and safeguarding margins.',
      accent: 'emerald',
      borderBase: 'border-emerald-500/30 hover:border-emerald-400',
      activeBorder: 'border-emerald-400 ring-2 ring-emerald-500/30 bg-emerald-950/20 shadow-[0_0_25px_rgba(52,211,153,0.2)]',
      glowColor: 'bg-emerald-500',
      textColor: 'text-emerald-400',
      icon: ShieldCheck,
      tag: 'Touchless Operations',
      before: 'Excessive hangar dwell time and costly DCAA audit penalties',
      after: 'Guaranteed airworthiness compliance and compressed MRO turnaround',
      metrics: ['Minimized AOG Time', 'Zero ITAR Violations', 'Protected Defense Margins']
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#0070C0] selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* =========================================================================
          SECTION 1: HERO SECTION (Pure Enterprise Aerospace Hero)
          ========================================================================= */}
      <section className="relative w-full min-h-[620px] lg:min-h-[680px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 overflow-hidden bg-slate-900">
        
        {/* Full-Bleed Enterprise Aerospace Background Image with Seamless Cinematic Scrim */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=2000&q=80" 
            alt="Aerospace Hangar and Defense Aviation Facility Atmosphere" 
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
                <Plane className="w-3.5 h-3.5 text-cyan-400" />
                <span>KNOOVIQ INDUSTRY PRACTICE</span>
              </div>
              
              {/* Prominent High-Impact Heading with Crisp Drop-Shadow */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                Intelligent ERP for <br />
                <span className="text-cyan-400">Aerospace, Defense & MRO</span>
              </h1>

              {/* Subheading / Value Proposition */}
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight leading-snug pt-0.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                Airworthiness Compliance, Rotable Lifecycle & Defense Program Management.
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
                Empowering aerospace OEMs, defense contractors, and commercial airline MRO facilities with{' '}
                <strong className="text-white font-semibold">SAP S/4HANA Clean Core</strong>, automated{' '}
                <strong className="text-cyan-300 font-semibold">FAA 8130-3 / EASA Release Certificates</strong>, ITAR export vaults, and unbroken rotable part genealogy.
              </p>
              
              {/* Clean Feature Highlights */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Clean Core Architecture</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>FAA 8130-3 Automation</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  <span>ITAR / EAR Compliance</span>
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
                  <Plane className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">ARCHITECTURE</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">SAP S/4HANA Aerospace</div>
                <div className="text-xs text-slate-300 mt-0.5">Clean Core Ready</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">SECURITY</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">ITAR / EAR Controls</div>
                <div className="text-xs text-slate-300 mt-0.5">Defense Data Vault</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <RefreshCw className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">MRO LIFECYCLE</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">Rotable Engine Hub</div>
                <div className="text-xs text-slate-300 mt-0.5">Flight Hours / Cycles</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <FileCheck2 className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">AIRWORTHINESS</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">FAA 8130-3 / EASA</div>
                <div className="text-xs text-slate-300 mt-0.5">Digital Sign-Offs</div>
              </div>
            </motion.div>

          </div>

        </div>

      </section>

      {/* =========================================================================
          SECTION 2: EXECUTIVE INDUSTRY PERSPECTIVE ("Building a Connected Aerospace Enterprise")
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
                Building a Connected <span className="text-[#0070C0]">Aerospace & Defense Enterprise</span>
              </h2>

              {/* Executive Thesis Quote */}
              <div className="border-l-4 border-[#0070C0] border-y border-r border-slate-300 pl-4 py-2 bg-gradient-to-r from-sky-50/80 via-sky-50/30 to-transparent rounded-r-xl">
                <p className="text-sm font-semibold text-slate-800 leading-relaxed italic">
                  &ldquo;Aerospace and defense leadership hinges on absolute airworthiness: ensuring every rotable turbine, avionics module, and structural fastener meets rigorous regulatory lineage before returning to service.&rdquo;
                </p>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                Knooviq engineers an integrated enterprise ecosystem on SAP S/4HANA Clean Core. By harmonizing data across maintenance hangars, technical records, and defense program accounting, aerospace leaders achieve rapid turnaround times, flawless audit compliance, and maximum fleet readiness.
              </p>

              {/* 3 Executive Strategic Pillars */}
              <div className="space-y-2.5 pt-1">
                <div className="p-3.5 rounded-xl border border-slate-300 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-slate-300">
                    <RefreshCw className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-950">Airworthiness & Rotable Asset Governance</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Continuous calculation of cumulative flight hours and flight cycles with automated Life-Limited Parts (LLP) hard limits.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-slate-300 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-slate-300">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-950">ITAR / EAR Defense Security Firewalls</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Zero-trust data isolation restricting CAD files, overhaul work cards, and defense contracts by nationality and clearance.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-slate-300 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-slate-300">
                    <FileCheck2 className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-950">Closed-Loop AS9100 & FAA Release Workflows</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Automated generation and cryptographic technician sign-offs for FAA 8130-3 and EASA Form 1 airworthiness documents.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Side: Clean Photography Showcase & Stage Navigator */}
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

              {/* Selected Stage Detail Card */}
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
          SECTION 3: INDUSTRY CHALLENGES ("Navigating the Complexity of Modern Aerospace & Defense")
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
              Navigating the Complexity of Modern Aerospace & Defense
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              Paper maintenance logs, export control restrictions, and stringent defense contracting create operational friction. Knooviq addresses the six systemic challenges aerospace leaders face.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {aerospaceChallenges.map((item, idx) => {
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
          SECTION 4: KNOOVIQ AEROSPACE PLATFORM (Circular Chevron Radial Diagram)
          ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#070B14] text-white border-b border-slate-800 relative overflow-hidden">
        
        {/* Dark Ambient Radial Hues */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-sky-500/10 via-cyan-500/10 to-amber-500/10 blur-[140px] rounded-full pointer-events-none" />
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
              <span>CONNECTED AEROSPACE ECOSYSTEM</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Capabilities Designed for Aerospace, Defense & MRO
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              A synchronized, circular enterprise platform uniting rotable engines, ITAR security vaults, FAA release certificates, EVM project accounting, and fleet analytics into one continuous loop.
            </p>
          </motion.div>

          {/* 3-Column Radial Wheel & Flanking Capabilities Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            
            {/* Left Column */}
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
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/15 via-cyan-500/10 to-amber-500/15 blur-2xl rounded-full pointer-events-none" />

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
                        KNOOVIQ Aero
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-300 mt-1 tracking-wide">
                        Platform
                      </span>
                    </div>
                  </foreignObject>
                </svg>

              </div>
            </div>

            {/* Right Column */}
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
          SECTION 5: SAP & TECHNOLOGY FOUNDATION ("Technology Foundation for Aerospace & Defense")
          ========================================================================= */}
      <section className="py-20 sm:py-24 lg:py-28 bg-white border-b border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
              <Layers className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>PLATFORM ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Technology Foundation for Aerospace & Defense
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We engineer clean-core SAP technology suites layered with modern cloud extensions, ITAR defense vaults, and digital airworthiness releases.
            </p>
          </div>

          {/* Layered Technology Ecosystem Visual */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Tech 1: SAP S/4HANA */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">CORE ERP SUITE</span>
                <Plane className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                SAP S/4HANA Aerospace
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Integrated Earned Value Management, complex engineering bills-of-materials, configuration baselines, and defense contract accounting ledgers.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• Universal Journal (ACDOCA) program valuation</div>
                <div className="flex items-center gap-1.5">• Tail-number configuration CMII tracking</div>
              </div>
            </div>

            {/* Tech 2: SAP Complex MRO */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">DOMAIN SOLUTION</span>
                <RefreshCw className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                SAP Complex Maintenance (MRO)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Component overhaul workshop execution, task card sign-offs, rotable swap tracking, and automated FAA 8130-3 airworthiness certificate creation.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• Digital mechanic stamp verifications</div>
                <div className="flex items-center gap-1.5">• Disassembly & teardown scope workflows</div>
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
                ITAR-compliant zero-trust defense vaults protecting CAD files, maintenance manuals, and subcontractor delivery feeds off the core ERP.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• ITAR / EAR zero-trust security enclaves</div>
                <div className="flex items-center gap-1.5">• Subcontractor AS9102 FAI collaboration</div>
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
                Real-time visibility into rotable inventory pool sizing, shop turnaround time (TAT) scorecards, and defense contract margin health.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• Fleet Turnaround Time (TAT) Analytics</div>
                <div className="flex items-center gap-1.5">• ANSI/EIA-748 EVM Variance Dashboards</div>
              </div>
            </div>

            {/* Tech 5: SAP Fiori */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">ROLE-BASED UX</span>
                <Scan className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                SAP Fiori Aviation Mobile UX
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Ruggedized tablet applications for flight line technicians, digital work card completion, and Illustrated Parts Catalog (IPC) lookups.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• Offline flight line maintenance execution</div>
                <div className="flex items-center gap-1.5">• Illustrated Parts Catalog (IPC) 3D Viewer</div>
              </div>
            </div>

            {/* Tech 6: AI & Automation */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">COGNITIVE ENGINES</span>
                <Sparkles className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                AI Fleet Predictive Maintenance
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Algorithmic failure prediction analyzing jet engine telemetry, hydraulic sensor wear, and flight stress anomalies to eliminate in-flight faults.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• Predictive Jet Engine Sensor Drift</div>
                <div className="flex items-center gap-1.5">• Automated Pre-Emptive Part Staging</div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: INDUSTRY SOLUTIONS ("Solutions for Every Stage of Aerospace & Defense")
          ========================================================================= */}
      <section id="industry-solutions" className="py-10 sm:py-12 lg:py-14 bg-[#F8FAFC] border-b border-slate-200 relative scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-7 sm:mb-8 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-300 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0] shadow-2xs">
              <Plane className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>ENTERPRISE FUNCTIONAL CATALOG</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Solutions for Every Stage of Aerospace & Defense
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              Explore specialized enterprise functional modules engineered to modernize aerospace execution across MRO overhaul hangars, export control vaults, and defense program offices.
            </p>
          </div>

          {/* Solution Domain Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-7 sm:mb-8">
            {[
              { id: 'ALL', label: 'All Solutions' },
              { id: 'MRO_OPERATIONS', label: 'Hangar & MRO Operations' },
              { id: 'AIRWORTHINESS', label: 'Airworthiness & Safety' },
              { id: 'DEFENSE_PROGRAMS', label: 'Defense & Programs' }
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
          SECTION 7: BUSINESS OUTCOMES ("Turning Aerospace Complexity into Mission Advantage")
          ========================================================================= */}
      <section className="py-20 sm:py-24 lg:py-28 bg-white border-b border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold uppercase tracking-wider text-emerald-700">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
              <span>MEASURABLE BUSINESS IMPACT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Turning Aerospace Complexity into Mission Advantage
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              When maintenance workshops, technical records, export vaults, and program ledgers operate in unison, aerospace organizations achieve sustainable operational excellence.
            </p>
          </div>

          {/* 6 Outcomes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Outcome 1 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <Plane className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Accelerated Return-to-Service
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Compress hangar turnaround time and reduce AOG grounding duration through proactive parts kitting, automated task sign-offs, and instant rotable availability.
              </p>
            </div>

            {/* Outcome 2 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Zero ITAR Export Escapes
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Enforce nationality-based digital access controls across all engineering repositories. Eliminate costly export compliance violations and audit penalties.
              </p>
            </div>

            {/* Outcome 3 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                100% LLP Airworthiness Safety
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Automated continuous calculation of flight hours and cycles guarantees zero components exceed FAA mandatory discard limits, protecting passenger safety.
              </p>
            </div>

            {/* Outcome 4 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Digital FAA/EASA Release
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Generate and cryptographically sign FAA 8130-3 and EASA Form 1 certificates straight from completed work orders, eliminating paperwork delays.
              </p>
            </div>

            {/* Outcome 5 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Accurate Defense Program Margins
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Meet ANSI/EIA-748 Earned Value Management criteria with live cost-schedule variance analytics, preventing contract overrun write-downs.
              </p>
            </div>

            {/* Outcome 6 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Optimized Rotable Pool Sizing
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Free up tens of millions in tied-up capital by deploying machine learning to right-size spare engine, APU, and avionics rotable inventory buffers.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 8: TRANSFORMATION IN ACTION (Connected 4-Phase Architecture Pipeline)
          ========================================================================= */}
      <section className="py-10 sm:py-12 lg:py-14 bg-gradient-to-b from-[#060D1A] via-[#0A1628] to-[#060C17] border-b border-slate-800 relative overflow-hidden text-white">
        
        {/* Subtle Ambient Background Grids & Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(0,112,192,0.18),transparent)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-8 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <Workflow className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>TRANSFORMATION ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Transformation in Action
            </h2>
            <div className="text-xs sm:text-sm font-semibold text-cyan-400 font-mono tracking-wider uppercase">
              Intelligent Aerospace, Defense & MRO Architecture
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              How aerospace enterprises advance from disconnected paper logbooks to an integrated clean-core event ecosystem.
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

          {/* 4 Connected Interactive Transformation Cards */}
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

          {/* Interactive Live Transformation Console / Delta Inspector */}
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
          SECTION 9: FINAL CTA (Full-Width Blue Executive Section)
          ========================================================================= */}
      <section className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-gradient-to-r from-[#003B73] via-[#005B9E] to-[#0070C0] text-white">
        
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
            <Plane className="w-3.5 h-3.5 text-cyan-300" />
            <span>CONNECT YOUR AEROSPACE & DEFENSE ENTERPRISE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Build a Smarter Aerospace & Defense Business?
          </h2>

          <p className="text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed font-normal">
            Connect your MRO hangars, defense programs, and airworthiness systems with Knooviq.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => onOpenContact?.('Aerospace & Defense Practice')}
              className="px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-[#003B73] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-2xl shadow-black/25 transition-all flex items-center gap-2 group"
            >
              <span>Talk to Aerospace & Defense Experts</span>
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
