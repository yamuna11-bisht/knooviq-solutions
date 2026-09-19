import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Truck, 
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
  Building2, 
  Clock, 
  Workflow, 
  Compass, 
  Cpu, 
  Zap, 
  Boxes, 
  HelpCircle,
  Factory,
  Award,
  Radio,
  Globe2,
  RefreshCw,
  FileText,
  Droplet,
  AlertTriangle
} from 'lucide-react';

interface IndustryPageProps {
  onOpenContact: (defaultService?: string) => void;
}

export const EnergyServicesIndustryPage: React.FC<IndustryPageProps> = ({ onOpenContact }) => {
  const [activeJourneyStep, setActiveJourneyStep] = useState(0);
  const [hoveredWheelIndex, setHoveredWheelIndex] = useState<number | null>(null);
  const [activeSolutionCategory, setActiveSolutionCategory] = useState<string>('ALL');
  const [activeTransformStage, setActiveTransformStage] = useState<number>(0);
  const [activeArchTab, setActiveArchTab] = useState<string>('core');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Section 4: 8-Segment Interlocking Chevron Circular Wheel (KNOOVIQ OFS Platform Ecosystem)
  const wheelSegments = [
    {
      id: 'wellsite-ticketing',
      title: 'Mobile Wellsite e-Ticketing',
      desc: 'Offline electronic field ticket capture with digital operator sign-off',
      side: 'right',
      color: '#0284C7',
      textColor: 'text-sky-400',
      bgGlow: 'rgba(2, 132, 199, 0.3)',
      icon: FileText
    },
    {
      id: 'downhole-tools',
      title: 'Downhole Tool Serialization & RUL',
      desc: 'Drilling motor, MWD/LWD sensor tracking & rotating hours accounting',
      side: 'right',
      color: '#0EA5E9',
      textColor: 'text-cyan-400',
      bgGlow: 'rgba(14, 165, 233, 0.3)',
      icon: Gauge
    },
    {
      id: 'rig-moves',
      title: 'Rig Move Heavy Haul Logistics',
      desc: 'Multimodal permits, crane mobilization & teardown route optimization',
      side: 'right',
      color: '#10B981',
      textColor: 'text-emerald-400',
      bgGlow: 'rgba(16, 185, 129, 0.3)',
      icon: Truck
    },
    {
      id: 'subsea-vessels',
      title: 'Offshore Vessel & Subsea ROV',
      desc: 'Supply vessel scheduling, deck cargo loading & subsea tool tracking',
      side: 'right',
      color: '#F59E0B',
      textColor: 'text-amber-400',
      bgGlow: 'rgba(245, 158, 11, 0.3)',
      icon: Compass
    },
    {
      id: 'crew-hse',
      title: 'Field Crew Competency & HSE',
      desc: 'Offshore HUET survival passes, well control certifications & safety audits',
      side: 'left',
      color: '#F97316',
      textColor: 'text-orange-400',
      bgGlow: 'rgba(249, 115, 22, 0.3)',
      icon: ShieldCheck
    },
    {
      id: 'price-books',
      title: 'Master Price Books & Billing',
      desc: 'Customer contract rate cards, standby time calculations & billing sync',
      side: 'left',
      color: '#EF4444',
      textColor: 'text-rose-400',
      bgGlow: 'rgba(239, 68, 68, 0.3)',
      icon: RefreshCw
    },
    {
      id: 'drilling-fluids',
      title: 'Drilling Fluids & Chemical Blending',
      desc: 'Mud viscosity tracking, bulk barite silo inventory & batch traceability',
      side: 'left',
      color: '#8B5CF6',
      textColor: 'text-purple-400',
      bgGlow: 'rgba(139, 92, 246, 0.3)',
      icon: Droplet
    },
    {
      id: 'wellsite-iot',
      title: 'Wellsite IoT Telemetry & Edge',
      desc: 'Mud motor vibration, torque-and-drag telemetry & rig satellite uplink',
      side: 'left',
      color: '#6366F1',
      textColor: 'text-indigo-400',
      bgGlow: 'rgba(99, 102, 241, 0.3)',
      icon: Radio
    }
  ];

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

  // Section 2: Executive Value Chain Steps (Zero stats, clean enterprise narrative)
  const journeySteps = [
    {
      id: 'ticketing',
      label: 'Mobile Wellsite e-Ticketing',
      sublabel: 'Field Service Delivery',
      desc: 'Digitized time, material, and equipment logsheets completed on rugged tablets at remote wellsite locations, capturing operator signatures with zero paper delay.',
      tech: 'SAP Service & Asset Manager',
      image: 'https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&w=1200&q=80',
      icon: FileText
    },
    {
      id: 'tools',
      label: 'Downhole Tool Serialization & RUL',
      sublabel: 'Subsurface Assets',
      desc: 'Serial number level tracking of rotary steerable systems and MWD pulser units, calculating cumulative rotating hours and downhole shock degradation.',
      tech: 'SAP EAM Equipment Serialization',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      icon: Gauge
    },
    {
      id: 'rig-moves',
      label: 'Heavy Rig Move & Crane Logistics',
      sublabel: 'Mobilization Network',
      desc: 'Synchronized coordination of oversize road transport convoys, crane permits, and rig site pad preparation with live satellite tracking.',
      tech: 'SAP Transportation Management',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
      icon: Truck
    },
    {
      id: 'offshore',
      label: 'Offshore Supply Vessel Scheduling',
      sublabel: 'Marine Supply Chain',
      desc: 'Optimized deck manifest planning for platform supply vessels (PSVs), managing subsea ROVs, tubular casing, and offshore weather windows.',
      tech: 'SAP Yard & Port Logistics',
      image: 'https://images.unsplash.com/photo-1545239351-ef35f43d514b?auto=format&fit=crop&w=1200&q=80',
      icon: Compass
    },
    {
      id: 'certifications',
      label: 'Crew Competencies & Offshore HSE',
      sublabel: 'Workforce Governance',
      desc: 'Automated skill checks preventing uncertified roustabouts or drillers from being dispatched to high-pressure offshore exploration wells.',
      tech: 'SAP SuccessFactors & HSE',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
      icon: ShieldCheck
    },
    {
      id: 'billing',
      label: 'Dynamic Rate Cards & Invoicing',
      sublabel: 'Revenue Recognition',
      desc: 'Instant translation of signed wellsite e-tickets into approved customer invoices based on complex Master Services Agreement (MSA) pricing schedules.',
      tech: 'SAP S/4HANA Sales & Billing',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      icon: RefreshCw
    }
  ];

  // Section 3: Operational Challenges
  const challenges = [
    {
      icon: AlertTriangle,
      title: 'Disputed Wellsite Paper Tickets',
      tag: 'CASH FLOW DELAYS',
      desc: 'Lost, smudged, or disputed paper field tickets delay customer invoicing by months, trapping working capital and forcing unbilled revenue write-offs.',
      footer: 'Eliminated via Offline Digital e-Ticketing'
    },
    {
      icon: Gauge,
      title: 'Lost Downhole Tool Assemblies',
      tag: 'DOWNHOLE ASSET INTEGRITY',
      desc: 'Untracked downhole tool fatigue causes catastrophic drill string twist-offs inside deep wells, leading to multi-million dollar fishing operations.',
      footer: 'Prevented via Rotating Hour Fatigue Tracking'
    },
    {
      icon: Truck,
      title: 'Uncoordinated Rig Move Convoys',
      tag: 'HEAVY HAUL DELAYS',
      desc: 'Delayed crane mobilizations and highway permit snags during drilling rig moves inflate non-productive time (NPT) for operators.',
      footer: 'Optimized via Multimodal Rig Move Schedulers'
    },
    {
      icon: ShieldCheck,
      title: 'Uncertified Crew Deployment Risks',
      tag: 'OFFSHORE SAFETY COMPLIANCE',
      desc: 'Deploying offshore crews with expired well control or helicopter underwater escape (HUET) passes triggers immediate rig-wide regulatory work stops.',
      footer: 'Shielded via Automated Competency Gating'
    },
    {
      icon: Compass,
      title: 'Offshore Supply Vessel Deck Congestion',
      tag: 'MARINE LOGISTICS',
      desc: 'Misaligned backhaul cargo and unplanned marine vessel deck loading cause expensive port waiting times and emergency helicopter hot-shots.',
      footer: 'Managed via Visual PSV Deck Planning'
    },
    {
      icon: RefreshCw,
      title: 'Complex MSA Price Book Leakage',
      tag: 'COMMERCIAL CONTRACTS',
      desc: 'Failing to bill contracted standby rates, harsh environment surcharges, and customized mud chemical additives drains operating margins.',
      footer: 'Enforced via Automated MSA Rate Card Sync'
    }
  ];

  // Section 6: Modular Solutions Matrix
  const modularSolutions = [
    {
      category: 'TICKETING',
      categoryLabel: 'Wellsite e-Ticketing',
      icon: FileText,
      tag: 'OFS-01',
      title: 'Mobile Wellsite e-Ticketing & Customer Sign-Off',
      description: 'Native mobile app operating offline at remote drilling locations, allowing tool pushers and supervisors to record labor, equipment, and consumables.',
      image: 'https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&w=800&q=80',
      highlights: ['Offline Tablet Signature Capture', 'Automated Daily Work Logs', 'Same-Day Invoicing Integration']
    },
    {
      category: 'TOOLS',
      categoryLabel: 'Downhole Asset Management',
      icon: Gauge,
      tag: 'OFS-02',
      title: 'Downhole Motor & MWD Serialization Tracker',
      description: 'End-to-end serialized life tracking for mud motors, rotary steerables, and drill bits, tracking downhole rotating hours and shock telemetry.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
      highlights: ['Rotating Hour Accumulation Logs', 'Magnetic Particle NDT Inspection', 'Fatigue-Based Workshop Teardowns']
    },
    {
      category: 'RIGS',
      categoryLabel: 'Rig Move Logistics',
      icon: Truck,
      tag: 'OFS-03',
      title: 'Heavy Rig Move & Heavy Haul Dispatch',
      description: 'Coordinates specialized lowboy trailers, winch trucks, and mobile cranes, ensuring sequenced rig teardowns, route permits, and pad assembly.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      highlights: ['Route Clearance & Permit Tracking', 'Crane & Truck Convoys Sequencing', 'Pad Staging Buffer Management']
    },
    {
      category: 'OFFSHORE',
      categoryLabel: 'Marine Supply Vessel Hub',
      icon: Compass,
      tag: 'OFS-04',
      title: 'Platform Supply Vessel (PSV) Deck Logistics',
      description: 'Digital manifest builder organizing offshore platform supply vessels, tracking chemical bulk tanks, subsea tool baskets, and backhaul scrap.',
      image: 'https://images.unsplash.com/photo-1545239351-ef35f43d514b?auto=format&fit=crop&w=800&q=80',
      highlights: ['Visual Deck Stowage Planning', 'Dangerous Goods Marine Compliance', 'Real-Time Jetty Crane Mobilization']
    },
    {
      category: 'CONTRACTS',
      categoryLabel: 'MSA Rate Card Invoicing',
      icon: RefreshCw,
      tag: 'OFS-05',
      title: 'Master Service Agreement (MSA) Price Books',
      description: 'Multi-customer price book engine managing rig day-rates, directional drilling hourly charges, mud chemical markups, and standby fees.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      highlights: ['Customer-Specific Contract Rates', 'Automated Standby & NPT Billing', 'Universal Ledger Reconciliation']
    },
    {
      category: 'HSE',
      categoryLabel: 'Field Crew Compliance',
      icon: ShieldCheck,
      tag: 'OFS-06',
      title: 'Field Crew Safety Passport & Certification Gate',
      description: 'Automated compliance checkpoint ensuring line crews, divers, and drillers hold valid BOSIET, HUET, and IADC well control certifications before mobilization.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      highlights: ['Automatic Expiry Alerts', 'Mobilization Block for Non-Compliance', 'OSHA & BSEE Digital Auditing']
    }
  ];

  const categories = [
    { key: 'ALL', label: 'All Modules' },
    { key: 'TICKETING', label: 'Wellsite e-Ticketing' },
    { key: 'TOOLS', label: 'Downhole Tools' },
    { key: 'RIGS', label: 'Rig Moves' },
    { key: 'OFFSHORE', label: 'Offshore Vessels' },
    { key: 'CONTRACTS', label: 'MSA Price Books' }
  ];

  // Section 8: Interactive Multi-Stage Transformation Journey (Delta Inspector)
  const transformationStages = [
    {
      id: 'foundation',
      badge: 'PHASE 01',
      title: 'Mobile Wellsite e-Ticketing Foundation',
      subtitle: 'Field Mobility & Digital Data Capture',
      description: 'Deploy offline rugged mobile tablets with SAP Service & Asset Manager, capturing tool pusher signatures and eliminating paper field tickets.',
      tag: 'OFFLINE MOBILITY & E-TICKETS',
      before: 'Lost paper tickets & delayed month-end invoicing',
      after: 'Instant digital wellsite signatures & same-day billing sync',
      capabilities: ['Offline Tablet Signature Capture', 'GPS Wellsite Geofencing', 'Digital Material Usage Logs'],
      textColor: 'text-sky-400',
      glowColor: 'bg-sky-400',
      borderBase: 'border-sky-500/30',
      activeBorder: 'border-sky-400 bg-sky-950/40 shadow-[0_0_20px_rgba(56,189,248,0.25)]',
      icon: FileText
    },
    {
      id: 'modernization',
      badge: 'PHASE 02',
      title: 'SAP S/4HANA Clean Core Migration',
      subtitle: 'Downhole Serialization & MSA Price Books',
      description: 'Serialize downhole tool strings and establish automated Master Services Agreement (MSA) pricing schedules inside standard S/4HANA core.',
      tag: 'SERIALIZATION & PRICING',
      before: 'Unrecorded tool fatigue & price leakage on day-rates',
      after: 'Rotating hour tracking & automated contract billing calculations',
      capabilities: ['Tool Serial Number Tracking', 'Multi-Tier MSA Price Books', 'Universal Financial Ledger'],
      textColor: 'text-cyan-400',
      glowColor: 'bg-cyan-400',
      borderBase: 'border-cyan-500/30',
      activeBorder: 'border-cyan-400 bg-cyan-950/40 shadow-[0_0_20px_rgba(34,211,238,0.25)]',
      icon: Gauge
    },
    {
      id: 'intelligence',
      badge: 'PHASE 03',
      title: 'Predictive Rig Moves & Marine Supply',
      subtitle: 'Heavy Haul Coordination & PSV Deck Optimization',
      description: 'Deploy SAP Transportation Management to coordinate heavy transport permits, crane mobilizations, and offshore supply vessel deck loading.',
      tag: 'LOGISTICS & VESSEL DISPATCH',
      before: 'Costly non-productive rig move time & vessel demurrage',
      after: 'Sequenced convoy routing & visual deck manifest planning',
      capabilities: ['Heavy Haul Road Permit Routing', 'Visual Vessel Deck Manifests', 'Crew Certification Gates'],
      textColor: 'text-emerald-400',
      glowColor: 'bg-emerald-400',
      borderBase: 'border-emerald-500/30',
      activeBorder: 'border-emerald-400 bg-emerald-950/40 shadow-[0_0_20px_rgba(52,211,153,0.25)]',
      icon: Truck
    },
    {
      id: 'autonomous',
      badge: 'PHASE 04',
      title: 'Autonomous Field Service Orchestration',
      subtitle: 'AI Tool Life Models & Instant Cash Flow',
      description: 'Leverage machine learning to predict downhole motor vibration failure and trigger automated customer invoice generation upon ticket sign-off.',
      tag: 'AUTONOMOUS OPERATIONS',
      before: 'Catastrophic downhole twist-offs & weeks of DSO collection',
      after: 'Predictive tool teardowns & accelerated days sales outstanding',
      capabilities: ['Predictive Downhole Shock Alerts', 'Automated Dispute Reconciliation', 'Auditor-Ready Safety Passports'],
      textColor: 'text-purple-400',
      glowColor: 'bg-purple-400',
      borderBase: 'border-purple-500/30',
      activeBorder: 'border-purple-400 bg-purple-950/40 shadow-[0_0_20px_rgba(192,132,252,0.25)]',
      icon: Zap
    }
  ];

  // Section 9: Case Studies (Zero percentages or numbers, qualitative enterprise outcomes)
  const caseStudies = [
    {
      badge: 'GLOBAL DIRECTIONAL DRILLING LEADER',
      title: 'Global Oilfield Services Major Slashes Days Sales Outstanding with Mobile e-Ticketing',
      client: 'Directional Drilling & MWD/LWD Contractor',
      summary: 'Replaced multi-copy paper field tickets with SAP Service and Asset Manager on ruggedized tablets across onshore drilling basins.',
      deliverables: ['Digital Wellsite Sign-Off', 'Instant Pricing Calculation', 'Elimination of Ticket Disputes'],
      desc: 'Implemented SAP S/4HANA with offline mobile e-ticketing, enabling company men to sign completed drill runs digitally and generating verified customer invoices on the same day.'
    },
    {
      badge: 'OFFSHORE DRILLING FLEET OPERATOR',
      title: 'Offshore Drilling Contractor Prevents Subsea Tool Twist-Offs with Downhole Serialization',
      client: 'Deepwater Jack-Up & Drillship Fleet Operator',
      summary: 'Connected mud motor rotating hours directly to SAP EAM, enforcing mandatory workshop teardowns before fatigue limits are reached.',
      deliverables: ['Rotating Hour Tracking', 'Non-Destructive Testing History', 'Zero Unplanned Twist-Offs'],
      desc: 'Deployed serialized tool tracking in S/4HANA across 12 offshore drilling rigs, preventing catastrophic downhole twist-offs and multi-million dollar fishing operations.'
    },
    {
      badge: 'RIG MOBILIZATION SPECIALIST',
      title: 'Heavy Haul Rig Moving Leader Coordinates 60-Truck Convoys with Real-Time SAP TM',
      client: 'Specialized Oilfield Transport & Crane Contractor',
      summary: 'Automated highway transport permits, crane assignments, and pad assembly sequencing across remote shale basins.',
      deliverables: ['Sequenced Convoy Routing', 'Live GPS Truck Tracking', 'Non-Productive Time Elimination'],
      desc: 'Integrated SAP Transportation Management with mobile driver apps, reducing rig teardown-to-spud transit times and maximizing heavy haul equipment utilization.'
    }
  ];

  // Section 10: FAQs
  const faqs = [
    {
      q: 'How does SAP Service and Asset Manager handle wellsite e-ticketing with zero cellular connectivity?',
      a: 'The mobile app operates fully offline on rugged tablets, caching all active customer Master Service Agreements, price books, and equipment serial numbers. Once the technician re-enters coverage or docks at the field camp, the app synchronizes all signed tickets instantly.'
    },
    {
      q: 'How does downhole tool serialization reduce non-productive drilling time (NPT)?',
      a: 'By tracking cumulative rotating hours, operating temperatures, and shock levels against each serialized tool, SAP S/4HANA automatically triggers preventative maintenance work orders before the component exceeds its certified fatigue limit.'
    },
    {
      q: 'Can SAP S/4HANA handle complex oilfield services rate cards and standby billing?',
      a: 'Yes. Our solution models tiered MSA price books with rules for operating rates, standby with crew, standby without crew, weather delays, and hazardous environment surcharges, automatically calculating the correct line items from field ticket logs.'
    },
    {
      q: 'How does the system enforce offshore safety certifications before crew mobilization?',
      a: 'SAP SuccessFactors integrates with Field Service Management to verify that every technician assigned to a work order holds active certifications (such as BOSIET, HUET, and WellSharp) before dispatch manifests can be approved.'
    },
    {
      q: 'How does SAP Transportation Management optimize heavy rig move logistics?',
      a: 'SAP TM sequences truck arrivals to match crane setup and rig teardown phases, preventing road bottlenecks and ensuring heavy transport lowboys are loaded and dispatched in the exact sequence required at the new drill pad.'
    }
  ];

  const filteredSolutions = activeSolutionCategory === 'ALL'
    ? modularSolutions
    : modularSolutions.filter(s => s.category === activeSolutionCategory);

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden selection:bg-[#0070C0] selection:text-white">
      
      {/* =========================================================================
          SECTION 1: HERO SECTION (Pure Enterprise Hero - Zero Shading on Image)
          ========================================================================= */}
      <section className="relative w-full min-h-[620px] lg:min-h-[680px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 overflow-hidden bg-slate-900">
        
        {/* Full-Bleed Enterprise Background Image with Seamless Cinematic Scrim */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&w=2000&q=80" 
            alt="Energy Services Field Operations Enterprise Atmosphere" 
            className="w-full h-full object-cover object-center"
          />
          {/* Multi-layered cinematic gradient scrim: left dark for perfect readability, smooth fade to showcase vibrant field operations on right */}
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
              {/* Practice Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 shadow-sm">
                <Truck className="w-3.5 h-3.5 text-cyan-400" />
                <span>KNOOVIQ INDUSTRY PRACTICE</span>
              </div>
              
              {/* Prominent High-Impact Heading with Crisp Drop-Shadow */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                Intelligent ERP for <br />
                <span className="text-cyan-400">Energy & Oilfield Services</span>
              </h1>

              {/* Subheading / Value Proposition */}
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight leading-snug pt-0.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                Empowering Wellsite Dispatch, Mobile e-Ticketing & Downhole Tool Serialization on SAP S/4HANA.
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
                Supercharge field service productivity with integrated{' '}
                <strong className="text-white font-semibold">SAP S/4HANA Clean Core</strong>, offline-capable{' '}
                <strong className="text-cyan-300 font-semibold">Mobile Wellsite e-Ticketing</strong>, heavy haul rig movement logistics, and{' '}
                <strong className="text-white font-semibold">predictive downhole tool fatigue tracking</strong>.
              </p>
              
              {/* Clean Feature Highlights */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Clean Core Architecture</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Offline Wellsite e-Ticketing</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  <span>Serialized Tool Telemetry</span>
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
                  <FileText className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">FIELD OPS</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">Mobile e-Ticketing</div>
                <div className="text-xs text-slate-300 mt-0.5">Offline-First Sync</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <Activity className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">DOWNHOLE ASSETS</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">Tool Serialization</div>
                <div className="text-xs text-slate-300 mt-0.5">Fatigue Cycles APM</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <Truck className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">RIG LOGISTICS</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">Heavy Haul Moves</div>
                <div className="text-xs text-slate-300 mt-0.5">Automated Fleet Routes</div>
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
            
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-300 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
                <Activity className="w-3.5 h-3.5 text-[#0070C0]" />
                <span>EXECUTIVE INDUSTRY PERSPECTIVE</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight leading-tight">
                Streamlining Field Services & Logistics on <span className="text-[#0070C0]">SAP Clean Core</span>
              </h2>

              <div className="border-l-4 border-[#0070C0] border-y border-r border-slate-300 pl-4 py-2 bg-gradient-to-r from-sky-50/80 via-sky-50/30 to-transparent rounded-r-xl">
                <p className="text-sm font-semibold text-slate-800 leading-relaxed italic">
                  &ldquo;In energy services, cash flow is won at the wellsite: when digital field tickets are approved instantaneously with zero pricing disputes.&rdquo;
                </p>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                Knooviq bridges remote wellsite technicians, downhole tool workshops, heavy haul transporters, and corporate billing ledgers onto SAP S/4HANA. Eliminating paper tickets accelerates cash flow, prevents downhole motor fatigue failures, and enforces strict contractor safety compliance.
              </p>

              <div className="space-y-2.5 pt-1">
                <div className="p-3.5 rounded-xl border border-slate-300 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-slate-300">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-950">Immediate Wellsite Digital Sign-Off</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Rugged tablet e-ticketing capturing customer company-man approvals without paper processing delays.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-slate-300 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-slate-300">
                    <Gauge className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-950">Serialized Downhole Fatigue Tracking</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Accumulated rotating hours and shock telemetry triggering automated workshop inspections before drill-string failure.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-slate-300 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-slate-300">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-950">Rig Site Crew Competency Governance</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Automatic dispatch blocking for personnel with expired well control or survival passes, mitigating liability risks.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            <div className="lg:col-span-6 space-y-3.5">
              <div className="relative h-64 sm:h-76 w-full rounded-2xl overflow-hidden border-2 border-slate-300 shadow-md bg-slate-100">
                <img 
                  src={journeySteps[activeJourneyStep].image} 
                  alt={journeySteps[activeJourneyStep].label} 
                  className="w-full h-full object-cover object-center transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <div className="text-[11px] font-mono uppercase text-sky-300 font-bold">{journeySteps[activeJourneyStep].tech}</div>
                  <div className="text-sm sm:text-base font-bold">{journeySteps[activeJourneyStep].label}</div>
                  <p className="text-xs text-slate-300 line-clamp-2 mt-0.5">{journeySteps[activeJourneyStep].desc}</p>
                </div>
              </div>

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
          SECTION 3: OPERATIONAL CHALLENGES
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-mono font-bold uppercase tracking-wider text-rose-600">
              <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
              <span>ENERGY SERVICES DOMAIN BOTTLENECKS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              Operational Challenges Across the Field Service Lifecycle
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              When wellsite tickets remain on paper, downhole tools lack cumulative rotating hour records, and rig move convoys lack unified tracking, service margins decline and cash flow stalls.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {challenges.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="rounded-2xl p-5 sm:p-6 bg-white border border-slate-200 shadow-xs hover:shadow-lg hover:border-slate-400 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 text-[#0070C0] flex items-center justify-center border border-slate-200">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded-md">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono font-semibold text-[#0070C0]">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{item.footer}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: NEW CREATIVE SECTION 1 - CIRCULAR CHEVRON RADIAL DIAGRAM
          ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#070B14] text-white border-b border-slate-800 relative overflow-hidden">
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-sky-500/10 via-cyan-500/10 to-emerald-500/10 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700 text-xs font-mono font-bold uppercase tracking-wider text-sky-300 shadow-inner">
              <Workflow className="w-3.5 h-3.5 text-sky-300" />
              <span>CIRCULAR ENERGY SERVICES ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Capabilities Designed for Oilfield Services
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              A synchronized, circular enterprise platform uniting wellsite mobile e-ticketing, serialized downhole tool tracking, heavy rig move logistics, and customer billing into one continuous loop.
            </p>
          </motion.div>

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
                
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/15 via-cyan-500/10 to-emerald-500/15 blur-2xl rounded-full pointer-events-none" />

                <svg
                  viewBox="0 0 500 500"
                  className="w-full h-full drop-shadow-2xl overflow-visible"
                >
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

                  <foreignObject
                    x="150"
                    y="200"
                    width="200"
                    height="100"
                    className="pointer-events-none"
                  >
                    <div className="w-full h-full flex flex-col items-center justify-center text-center select-none px-3">
                      <span className="text-sm sm:text-base font-black text-white tracking-wider uppercase leading-tight">
                        KNOOVIQ OFS
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
              Enterprise Energy Services Technology Blueprint
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Decoupling offline mobile field ticketing and specialized rig move logistics on SAP BTP while maintaining standard S/4HANA core upgradability.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setActiveArchTab('edge')}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeArchTab === 'edge'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              1. Mobile Wellsite Edge
            </button>
            <button
              onClick={() => setActiveArchTab('core')}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeArchTab === 'core'
                  ? 'bg-[#0070C0] text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              2. SAP S/4HANA Services Core
            </button>
            <button
              onClick={() => setActiveArchTab('cloud')}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeArchTab === 'cloud'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              3. Cloud BTP & Services AI
            </button>
          </div>

          <div className="rounded-2xl border-2 border-slate-300 bg-slate-950 text-white p-6 sm:p-8 shadow-xl">
            {activeArchTab === 'edge' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <Radio className="w-6 h-6 text-sky-400" />
                    <div>
                      <h3 className="text-lg font-bold text-white">Rugged Mobile Tablets & Wellsite SCADA Ingestion</h3>
                      <p className="text-xs text-slate-400 font-mono">Offline SQLite • Satellite Sync • MWD Shock Sensors • WITSML Uplink</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-mono">Offline-First Resilient</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-sm font-bold text-sky-300 mb-1">Ruggedized Mobile e-Ticketing</h4>
                    <p className="text-xs text-slate-300">Offline sign-off by company-men on remote drilling pads with geofenced digital signatures.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-sm font-bold text-sky-300 mb-1">Downhole Tool Shock Telemetry</h4>
                    <p className="text-xs text-slate-300">Continuous MWD/LWD drilling dynamics, vibration bursts, and circulating temperature logs.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-sm font-bold text-sky-300 mb-1">Heavy Haul Rig GPS Convoys</h4>
                    <p className="text-xs text-slate-300">Real-time convoy telematics ensuring oversized transport loads adhere to highway permit corridors.</p>
                  </div>
                </div>
              </div>
            )}

            {activeArchTab === 'core' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <Cpu className="w-6 h-6 text-cyan-400" />
                    <div>
                      <h3 className="text-lg font-bold text-white">SAP S/4HANA Oilfield Services Digital Clean Core</h3>
                      <p className="text-xs text-slate-400 font-mono">SAP FSM • SAP EAM Serialization • SAP TM • Universal Financials</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-mono">Clean Core Standard</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-sm font-bold text-cyan-300 mb-1">Master Services Agreement (MSA) Billing</h4>
                    <p className="text-xs text-slate-300">Automated price books calculating rig day-rates, standby fees, and consumables without manual review.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-sm font-bold text-cyan-300 mb-1">Downhole Tool Serialization (EAM)</h4>
                    <p className="text-xs text-slate-300">Individual serial number history tracking rotating hours, component stress, and NDT inspection passports.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-sm font-bold text-cyan-300 mb-1">Rig Move Logistics (SAP TM)</h4>
                    <p className="text-xs text-slate-300">Automated dispatching of specialized trailers, cranes, and escort vehicles between drilling pads.</p>
                  </div>
                </div>
              </div>
            )}

            {activeArchTab === 'cloud' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <Zap className="w-6 h-6 text-emerald-400" />
                    <div>
                      <h3 className="text-lg font-bold text-white">SAP BTP & Predictive Energy Services AI</h3>
                      <p className="text-xs text-slate-400 font-mono">SAP APM • SuccessFactors Skills • Offshore Deck Cloud</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono">Cognitive Layer</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-sm font-bold text-emerald-300 mb-1">Downhole Motor Predictive RUL</h4>
                    <p className="text-xs text-slate-300">Machine learning models anticipating elastomer stator de-bonding and bearing wear in drilling motors.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-sm font-bold text-emerald-300 mb-1">Field Crew Competency Gating</h4>
                    <p className="text-xs text-slate-300">Real-time credential verification preventing uncertified personnel from being dispatched to high-risk wells.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-sm font-bold text-emerald-300 mb-1">Visual PSV Deck Optimization</h4>
                    <p className="text-xs text-slate-300">3D visual stowage algorithms organizing offshore vessel cargo manifests for fastest port turnaround.</p>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: MODULAR SOLUTIONS MATRIX
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
              <Boxes className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>MODULAR OFS PACKAGES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Pre-Configured Energy Services Modules
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Rapidly deployable solution packages engineered for wellsite execution, downhole tool maintenance, rig moves, and offshore vessel supply chains.
            </p>
          </div>

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSolutions.map((sol) => {
              const Icon = sol.icon;
              return (
                <div 
                  key={sol.tag}
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-300 text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
              <Layers className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>CLEAN CORE VS LEGACY CUSTOM CODE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Standardizing Complex Energy Services
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              How Knooviq replaces brittle custom billing and dispatch scripts with SAP standard oilfield industry packages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-6 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-4">
              <div className="flex items-center gap-2 text-rose-700 font-mono text-xs font-bold uppercase">
                <AlertTriangle className="w-4 h-4" />
                <span>Legacy Custom Z-Developments</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold shrink-0">✕</span>
                  <span>Paper-based field tickets scanned and re-typed by back-office accounting staff.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold shrink-0">✕</span>
                  <span>Untracked downhole tool rotating hours leading to unexpected in-well twist-offs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold shrink-0">✕</span>
                  <span>Manual email coordination of rig move lowboys causing days of non-productive pad time.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold shrink-0">✕</span>
                  <span>Spreadsheet rate cards with missing standby surcharges and revenue leakage.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-200 space-y-4">
              <div className="flex items-center gap-2 text-emerald-700 font-mono text-xs font-bold uppercase">
                <CheckCircle2 className="w-4 h-4" />
                <span>Knooviq S/4HANA Clean Core</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold shrink-0">✓</span>
                  <span>Offline mobile e-ticketing with instant digital signature capture at remote wellpads.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold shrink-0">✓</span>
                  <span>Serialized downhole tool fatigue tracking with automated workshop maintenance orders.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold shrink-0">✓</span>
                  <span>SAP TM heavy haul dispatch coordinating transport permits and crane sequences.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold shrink-0">✓</span>
                  <span>Automated Master Services Agreement price books with instant invoice creation.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 8: NEW CREATIVE SECTION 2 - MULTI-STAGE TRANSFORMATION JOURNEY
          ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#0A0F1D] text-white border-b border-slate-800 relative overflow-hidden">
        
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono font-bold uppercase tracking-wider text-sky-300">
              <RefreshCw className="w-3.5 h-3.5 text-sky-300" />
              <span>TRANSFORMATION ROADMAP & DELTA INSPECTOR</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Four Phases to Autonomous Field Services
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              Inspect how legacy manual workflows transform into intelligent real-time operations across every phase of the SAP deployment.
            </p>
          </div>

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

          {/* Interactive Live Transformation Console */}
          {(() => {
            const currentStage = transformationStages[activeTransformStage];
            return (
              <div className="rounded-2xl bg-slate-900/90 border-2 border-slate-700/80 p-4 sm:p-5 shadow-2xl backdrop-blur-md relative overflow-hidden">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                  
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 flex-1">
                    <div className="flex items-center gap-2 shrink-0">
                      <span className={`w-2.5 h-2.5 rounded-full ${currentStage.glowColor} animate-pulse`} />
                      <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                        {currentStage.title} Delta:
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="px-2.5 py-1 rounded-md bg-rose-950/60 border border-rose-500/40 text-rose-300 text-[11px] font-mono">
                        PRIOR: {currentStage.before}
                      </span>
                      <ArrowRight className="w-4 h-4 text-sky-400 shrink-0" />
                      <span className="px-2.5 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-[11px] font-mono font-medium">
                        TRANSFORMED: {currentStage.after}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5 shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-white/10 w-full lg:w-auto">
                    {currentStage.capabilities.map((item, mIdx) => (
                      <span
                        key={mIdx}
                        className="px-2.5 py-1 rounded-md bg-white/5 border border-white/15 text-[10.5px] font-mono text-slate-300 font-semibold"
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
          SECTION 9: CASE STUDIES (Zero numbers or percentages)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
              <Award className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>PROVEN CLIENT TRANSFORMATIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Enterprise Client Success Stories
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Real operational outcomes delivered for directional drilling contractors, offshore drillship fleets, and rig transport specialists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-[10px] font-mono font-bold text-[#0070C0] bg-sky-50 px-2 py-0.5 rounded border border-sky-100 uppercase tracking-wider">
                    {cs.badge}
                  </span>
                  <h3 className="text-base font-bold text-slate-950 leading-snug">
                    {cs.title}
                  </h3>
                  <div className="text-xs font-medium text-slate-500">
                    {cs.client}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cs.desc}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-slate-100 space-y-1.5">
                  {cs.deliverables.map((d, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs font-mono text-emerald-700">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 10: FAQS
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
              <HelpCircle className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Energy Services Architecture Advisory
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Technical considerations for oilfield service executives modernizing wellsite execution and contract billing on SAP S/4HANA.
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
          SECTION 11: FINAL EXECUTIVE CTA (Exact Retail & E-Commerce Blueprint)
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
            <Truck className="w-3.5 h-3.5 text-cyan-300" />
            <span>CONNECT YOUR ENERGY SERVICES ECOSYSTEM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Build a Smarter Energy Services Enterprise?
          </h2>

          <p className="text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed font-normal">
            Connect your wellsite crews, downhole tools, rig transports, and billing contracts with Knooviq.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => onOpenContact('Energy Services Architecture Advisory')}
              className="px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-[#003B73] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-2xl shadow-black/25 transition-all flex items-center gap-2 group cursor-pointer"
            >
              <span>Talk to Our Energy Services Experts</span>
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

export default EnergyServicesIndustryPage;
