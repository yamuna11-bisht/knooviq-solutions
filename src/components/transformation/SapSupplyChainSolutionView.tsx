import React, { useState } from 'react';
import {
  Truck,
  Boxes,
  Cpu,
  ShieldCheck,
  Zap,
  Layers,
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
  AlertTriangle,
  RefreshCw,
  Compass,
  Gauge,
  Factory,
  Radio,
  FileCheck2,
  TrendingDown,
  Globe2
} from 'lucide-react';

interface SapSupplyChainSolutionViewProps {
  onOpenContact: (topic?: string) => void;
}

export const SapSupplyChainSolutionView: React.FC<SapSupplyChainSolutionViewProps> = ({ onOpenContact }) => {
  const [activeStage, setActiveStage] = useState<number>(0);
  const [activeDisruption, setActiveDisruption] = useState<number>(0);
  const [activeAiTab, setActiveAiTab] = useState<number>(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isFullscreenImageOpen, setIsFullscreenImageOpen] = useState<boolean>(false);

  // 1. End-to-End Value Stream Pipeline (5 Sequential Stages)
  const valueStreamStages = [
    {
      id: 'plan',
      num: '01',
      stage: 'PLAN',
      title: 'SAP Integrated Business Planning (IBP)',
      subtitle: 'Cognitive Demand Sensing & Multi-Echelon Inventory',
      desc: 'Replaces siloed monthly spreadsheets with continuous probabilistic demand forecasting. Connects POS data, weather indices, and econometric signals to dynamically rebalance safety stocks across distribution tiers.',
      modules: ['SAP IBP for Demand', 'SAP IBP for Inventory', 'SAP Supply Chain Control Tower'],
      inputs: 'POS Sell-Through Data, Channel Promotions, Historical Seasonality',
      outputs: 'Unconstrained Demand Plan, Optimized Safety Stock Targets, Replenishment Signals',
      telemetry: { accuracy: '94.8% Forecast Precision', safetyStock: '-28% Excess Buffer', responseSpeed: '< 2 Hours Cycle' }
    },
    {
      id: 'source',
      num: '02',
      stage: 'SOURCE',
      title: 'Supplier Network & Digital Procurement',
      subtitle: 'SAP Ariba Supply Chain Collaboration Mesh',
      desc: 'Seamlessly links Tier-1 and Tier-2 suppliers into a real-time event mesh. Automates forecast sharing, PO confirmations, advance shipping notices (ASNs), and supplier capacity constraints without manual expediting.',
      modules: ['SAP Business Network', 'SAP Ariba SCM Collaboration', 'SAP Direct Material Sourcing'],
      inputs: 'Material Requirements Plan (MRP), Approved Vendor Lists, Production Schedules',
      outputs: 'Digitized ASNs, Barcoded Shipping Labels, Quality Certificates (CoA)',
      telemetry: { supplierSync: '100% Touchless ASNs', poAcknowledge: '< 4 Hours SLA', leadVariance: '-65% Jitter' }
    },
    {
      id: 'make',
      num: '03',
      stage: 'MANUFACTURE',
      title: 'Digital Manufacturing Cloud (DMC) & IoT',
      subtitle: 'Industry 4.0 Shop Floor Execution & Digital Twins',
      desc: 'Bridges enterprise ERP planning with real-time shop floor machinery. Ingests OPC-UA machine telemetry, monitors overall equipment effectiveness (OEE), and executes closed-loop predictive maintenance before tool failures occur.',
      modules: ['SAP Digital Manufacturing Cloud', 'SAP Plant Connectivity (PCo)', 'SAP Asset Intelligence'],
      inputs: 'Production Orders, Routing Master, CAD Schematics, IoT Vibration Telemetry',
      outputs: 'Machine OEE Logs, Scrap Telemetry, Traceability Genealogy Records',
      telemetry: { oeeUplift: '+18.4% Efficiency', scrapReduction: '-34% Defect Rate', mtbfGain: '+42% Asset Life' }
    },
    {
      id: 'warehouse',
      num: '04',
      stage: 'WAREHOUSE',
      title: 'SAP Extended Warehouse Management (EWM)',
      subtitle: 'Autonomous AGV Robotics, Wave Picking & Yard Mesh',
      desc: 'Orchestrates high-velocity automated distribution centers. Manages automated storage and retrieval systems (ASRS), autonomous mobile robots (AMRs), dynamic slotting algorithms, and dock appointment scheduling.',
      modules: ['SAP EWM Advanced', 'SAP Warehouse Robotics', 'SAP Yard Logistics'],
      inputs: 'ASNs, Inbound Pallet Scans, Pick Waves, Outbound Delivery Batches',
      outputs: 'Optimized Putaway Routes, AMR Task Queues, Gate Release Passes',
      telemetry: { throughput: '3.2x Pick Velocity', dockTurnaround: '-45% Dwell Time', inventoryAccuracy: '99.98% RFID' }
    },
    {
      id: 'deliver',
      num: '05',
      stage: 'DELIVER',
      title: 'SAP Transportation Management (TM)',
      subtitle: 'Multi-Modal Logistics, Dynamic Routing & Green Fleet',
      desc: 'Optimizes global freight consolidation across ocean, air, rail, and road. Employs multi-tier freight tendering, electronic carrier billing settlements, and real-time carbon emission balancing to meet Net-Zero logistics mandates.',
      modules: ['SAP TM On S/4HANA', 'SAP Logistics Business Network (LBN)', 'SAP Green Ledger Logistics'],
      inputs: 'Sales Orders, Container Loading Specs, Carrier Rate Tariffs, GPS Trackers',
      outputs: 'Optimized Freight Manifests, Multi-Stop Trip Plans, Proof-of-Delivery (e-POD)',
      telemetry: { freightCost: '-14.2% Freight Spend', onTimeDelivery: '99.4% OTIF', co2Savings: '22% Carbon Drop' }
    }
  ];

  // 2. Interactive Disruption Simulator Scenarios
  const disruptionScenarios = [
    {
      id: 'port-choke',
      title: 'Major International Port Chokepoint & Maritime Delay',
      trigger: '48-hour container terminal strike at transshipment hub delaying 32 vessels.',
      impact: '14 inbound raw material shipments delayed by 11 days; 3 automotive assembly lines at risk of line-stop.',
      resolution: [
        'SAP IBP automated simulation triggers multi-tier buffer inventory re-allocation from secondary distribution centers.',
        'SAP TM dynamically re-tenders critical shortage SKUs to high-speed air cargo carriers with automated tariff calculation.',
        'Production schedules automatically re-sequenced in SAP DMC to prioritize non-affected product variants.'
      ],
      kpiImpact: { serviceLevel: '99.1% (SLA Maintained)', lineStops: 'Zero Downtime', additionalCost: 'Offset by +8% Margin Priority' }
    },
    {
      id: 'supplier-shortage',
      title: 'Tier-2 Critical Semiconductor / Chemical Stockout',
      trigger: 'Tier-2 raw component factory outage leading to sudden 45-day force majeure notification.',
      impact: 'Immediate projected stockout on 18 finished goods SKUs within 7 business days.',
      resolution: [
        'Ariba Business Network automated supplier discovery surfaces 3 pre-qualified alternate suppliers in regional geography.',
        'Quality CoA specifications automatically verified against engineering tolerances in S/4HANA PLM.',
        'Automated spot-purchase order issued with expedited delivery terms and escrow bank guarantee.'
      ],
      kpiImpact: { serviceLevel: '98.6% (Unbroken Orders)', timeToRemediate: '< 3.5 Hours', stockoutAverted: '$4.2M Revenue Preserved' }
    },
    {
      id: 'demand-surge',
      title: 'Sudden 400% E-Commerce Demand Spike (Viral Campaign)',
      trigger: 'Unexpected viral social marketing campaign creates a 4x order volume spike across 48 hours.',
      impact: 'Regional fulfillment centers risk immediate out-of-stock and 5-day shipping backlog.',
      resolution: [
        'SAP IBP Demand Sensing identifies the velocity anomaly within 45 minutes using real-time POS event streaming.',
        'SAP EWM switches warehouse operations to dynamic batch wave picking with AMR robotic priority queuing.',
        'Nearby retail store inventory automatically converted into ship-from-store hubs with local courier integration.'
      ],
      kpiImpact: { serviceLevel: '99.7% Next-Day Delivery', fulfillmentCapacity: '+310% Surge Absorbed', cartAbandonment: 'Minimal (< 1.8%)' }
    }
  ];

  // 3. Autonomous AI & Vision Robotics Agents
  const aiSupplyChainAgents = [
    {
      id: 'replenishment-agent',
      name: 'Predictive Demand Sensing Agent',
      role: 'Autonomous Replenishment & Buffer Tuning',
      desc: 'Continuously monitors live downstream sell-through, machine cycle times, and weather trends. Automatically triggers replenishment requisitions and tunes dynamic safety stock parameters without planner intervention.',
      deliverable: 'Autonomous PO Generation & Multi-Echelon Buffer Calibration',
      stat: '94.8% Demand Precision'
    },
    {
      id: 'yard-vision-agent',
      name: 'Vision AI Yard & Gate Sentinel',
      role: 'Computer Vision Gate OCR & Damage Diagnostic',
      desc: 'Deploys edge computer vision at security gates to read trailer license plates, ISO container codes, and seal integrity. Cross-references ASNs in SAP EWM, assigns dock doors, and issues automated gate passes in sub-10 seconds.',
      deliverable: 'Touchless Gate Check-In & Automated Yard Asset Tracking',
      stat: 'Sub-10s Gate Clearance'
    },
    {
      id: 'carbon-optimizer',
      name: 'Intermodal Carbon & Freight Optimizer',
      role: 'Dynamic Route Balancing & ESG Logistics',
      desc: 'Evaluates freight rates, carrier reliability, and greenhouse gas metrics across sea, rail, and road. Recommends modal shifts to meet sustainability targets while guaranteeing customer contractual delivery commitments.',
      deliverable: 'Automated Carrier Tendering with Carbon Footprint Minimization',
      stat: '22% Logistics CO2 Drop'
    }
  ];

  // 4. Industry-Specific Execution Blueprints
  const industryBlueprints = [
    {
      sector: 'Automotive & Discrete Manufacturing',
      badge: 'JUST-IN-TIME (JIT / JIS)',
      description: 'Synchronized sequencing of complex sub-assemblies directly to the manufacturing line with micro-second Kanban triggers.',
      capabilities: ['Kanban replenishment directly from line-side supermarkets', 'Sub-second VIN-based component traceability', 'Integrated ECN (Engineering Change Order) workflow'],
      accent: 'border-cyan-500/30 bg-cyan-500/5'
    },
    {
      sector: 'Consumer Goods & Retail Distribution',
      badge: 'OMNICHANNEL FULFILLMENT',
      description: 'High-speed automated distribution centers coordinating dark stores, ship-from-store, and multi-tier pallet sorting.',
      capabilities: ['Cold-chain IoT real-time temperature tracking', 'Automated FIFO / FEFO batch expiry rotation', 'Cross-docking with zero intermediate storage dwell'],
      accent: 'border-emerald-500/30 bg-emerald-500/5'
    },
    {
      sector: 'Pharmaceuticals & Life Sciences',
      badge: 'GMP & DSCSA SERIALIZATION',
      description: 'End-to-end anti-counterfeiting compliance tracking unique unit, carton, and pallet serialization from plant to hospital bedside.',
      capabilities: ['2D Datamatrix serialization & aggregation verification', 'Automated quarantine hold for temperature excursions', 'Direct integration with national verification repositories'],
      accent: 'border-purple-500/30 bg-purple-500/5'
    }
  ];

  // 5. Client Case Studies
  const caseStudies = [
    {
      client: 'Global Tier-1 Automotive Components Leader',
      scale: '24 Plants across 8 Countries',
      challenge: 'Frequent manufacturing line stoppages caused by late supplier deliveries and manual spreadsheet buffer calculations.',
      solution: 'Deployed SAP S/4HANA Digital Supply Chain, SAP EWM with robotics integration, and Ariba Supply Chain Collaboration.',
      outcomes: [
        '65% reduction in unplanned plant line stoppages',
        '28% decrease in raw material safety stock inventory',
        '100% real-time part genealogy tracking'
      ]
    },
    {
      client: 'Multi-National Food & Beverage Conglomerate',
      scale: '1,200+ SKUs across 45 Regional Warehouses',
      challenge: 'Perishable goods spoilage, slow order turnaround, and high logistics demurrage costs across cold-chain network.',
      solution: 'Implemented SAP IBP Demand Sensing, SAP TM multi-modal freight consolidation, and IoT cold-chain sensor mesh.',
      outcomes: [
        '14-day reduction in inventory cash-to-cash cycle',
        '38% reduction in product spoilage write-offs',
        '99.4% On-Time In-Full (OTIF) fulfillment rate'
      ]
    }
  ];

  // 6. FAQs
  const scmFaqs = [
    {
      q: 'How does SAP IBP differ from traditional SCM MRP runs?',
      a: 'Traditional MRP calculates deterministic material requirements in scheduled overnight batches. In contrast, SAP IBP uses in-memory probabilistic algorithms and machine learning to continuously analyze demand fluctuations, supplier lead times, and capacity bottlenecks in real time, enabling predictive rather than reactive planning.'
    },
    {
      q: 'Can SAP EWM integrate directly with automated guided vehicles (AGVs) and warehouse robotics?',
      a: 'Yes. SAP EWM includes native Warehouse Robotics integration services that communicate directly with vendor-agnostic AMR and AGV fleet management systems via standardized REST and WebSocket APIs. Task queues, pick paths, and pallet drops are orchestrated dynamically without custom middleware.'
    },
    {
      q: 'How does SAP TM optimize both freight logistics cost and carbon emissions?',
      a: 'SAP TM incorporates multi-objective optimization algorithms that evaluate carrier rate matrices alongside verified GHG emission factors across transport modes (ocean, rail, intermodal, road). The system automatically recommends optimal consolidation routes that satisfy both arrival deadlines and sustainability targets.'
    },
    {
      q: 'What is the implementation timeline for a SAVIC Digital Supply Chain transformation?',
      a: 'Using SAVIC’s pre-configured FAST templates and One Piece Flow agile delivery methodology, core SAP IBP and EWM modules can be deployed in 12 to 16 weeks, followed by iterative multi-echelon optimization releases without business disruption.'
    }
  ];

  const currentStage = valueStreamStages[activeStage];
  const currentDisruption = disruptionScenarios[activeDisruption];
  const currentAi = aiSupplyChainAgents[activeAiTab];

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
            src="/images/sap_app_supplychain_3d.jpg" 
            alt="SAP Autonomous Digital Supply Chain Control Tower" 
            className="w-full h-full object-cover object-center lg:object-[66%_center] transition-transform duration-1000 ease-out group-hover/hero:scale-102"
          />
          
          {/* Scrim Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#030914]/90 via-[#04111E]/75 sm:via-[#04111E]/50 lg:via-[#04111E]/30 to-[#030914]/20 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030914]/80 via-transparent to-[#030914]/50 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030914]/60 via-transparent to-transparent pointer-events-none" />

          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#00A3E0_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

          {/* Click to expand pill */}
          <div className="absolute bottom-4 right-5 z-10 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/50 backdrop-blur-md border border-white/20 text-xs font-mono text-cyan-300 hover:bg-black/70 hover:text-white transition-all shadow-xl">
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Click to View Full Screen Visual</span>
          </div>
        </div>

        {/* Hero Content Overlay */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl space-y-2.5 sm:space-y-3">
            
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-cyan-400/30 text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-300 shadow-xl">
                <Truck className="w-3.5 h-3.5 text-cyan-400" />
                <span>SAP DIGITAL SUPPLY CHAIN (SCM) & IBP</span>
              </div>
              <span className="text-slate-400 text-xs font-mono hidden sm:inline">/</span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-slate-300 uppercase tracking-wider bg-black/30 px-2.5 py-0.5 rounded-full border border-white/10 backdrop-blur-sm shadow-md">
                <Factory className="w-3.5 h-3.5 text-emerald-400" />
                <span>INDUSTRY 4.0 SYNCHRONIZATION</span>
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-black tracking-tight text-white leading-[1.14] drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
              Autonomous Digital Supply Chain, Smart Warehousing & Real-Time Logistics
            </h1>

            {/* Narrative */}
            <p className="text-xs sm:text-sm lg:text-[14px] font-medium text-slate-200 leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] max-w-2xl">
              Synchronize demand sensing, automated warehouse robotics, dynamic transportation routing, and digital manufacturing into a resilient, touchless logistics network powered by SAP S/4HANA & SAP IBP.
            </p>

            {/* Architectural Checkpoints */}
            <div className="flex flex-wrap items-center gap-2 pt-0.5">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/35 backdrop-blur-md border border-white/15 text-[11px] font-medium text-slate-200 shadow-lg">
                <Activity className="w-3.5 h-3.5 text-cyan-400" />
                <span>SAP IBP Demand Sensing</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/35 backdrop-blur-md border border-white/15 text-[11px] font-medium text-slate-200 shadow-lg">
                <Boxes className="w-3.5 h-3.5 text-emerald-400" />
                <span>SAP EWM Smart Robotics</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/35 backdrop-blur-md border border-white/15 text-[11px] font-medium text-slate-200 shadow-lg">
                <Truck className="w-3.5 h-3.5 text-amber-400" />
                <span>SAP TM Dynamic Routing</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/35 backdrop-blur-md border border-white/15 text-[11px] font-medium text-slate-200 shadow-lg">
                <Cpu className="w-3.5 h-3.5 text-purple-400" />
                <span>SAP DMC Industry 4.0</span>
              </span>
            </div>

            {/* Strategic Content Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-0.5">
              <div className="px-3 py-2 rounded-xl bg-black/35 backdrop-blur-md border border-white/15 shadow-md">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <Activity className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-[10.5px] font-mono font-bold uppercase text-white">
                    Probabilistic Demand Sensing
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 leading-snug font-normal">
                  Real-time machine learning algorithms adjusting replenishment buffers dynamically based on downstream sell-through.
                </p>
              </div>

              <div className="px-3 py-2 rounded-xl bg-black/35 backdrop-blur-md border border-white/15 shadow-md">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <Boxes className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-[10.5px] font-mono font-bold uppercase text-white">
                    Multi-Modal Fleet & AGV Mesh
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 leading-snug font-normal">
                  Direct vendor-agnostic API orchestration linking warehouse robotics, automated forklifts, and intermodal carriers.
                </p>
              </div>
            </div>



            {/* KPI Highlights Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 font-mono">
              <div className="px-3 py-2 rounded-xl bg-black/35 backdrop-blur-md border border-white/15 shadow-md">
                <p className="text-[9px] text-cyan-300 uppercase font-bold tracking-wider">Fulfillment OTIF</p>
                <p className="text-base sm:text-lg font-black text-white mt-0.5 leading-none">99.4%</p>
                <p className="text-[8.5px] text-slate-400 mt-0.5">On-Time In-Full</p>
              </div>
              <div className="px-3 py-2 rounded-xl bg-black/35 backdrop-blur-md border border-white/15 shadow-md">
                <p className="text-[9px] text-cyan-300 uppercase font-bold tracking-wider">Lead Time Delta</p>
                <p className="text-base sm:text-lg font-black text-white mt-0.5 leading-none">-45%</p>
                <p className="text-[8.5px] text-slate-400 mt-0.5">Continuous Cycle</p>
              </div>
              <div className="px-3 py-2 rounded-xl bg-black/35 backdrop-blur-md border border-white/15 shadow-md">
                <p className="text-[9px] text-cyan-300 uppercase font-bold tracking-wider">Inventory Capital</p>
                <p className="text-base sm:text-lg font-black text-white mt-0.5 leading-none">-30%</p>
                <p className="text-[8.5px] text-slate-400 mt-0.5">Safety Buffer Lean</p>
              </div>
              <div className="px-3 py-2 rounded-xl bg-black/35 backdrop-blur-md border border-white/15 shadow-md">
                <p className="text-[9px] text-cyan-300 uppercase font-bold tracking-wider">Freight Green</p>
                <p className="text-base sm:text-lg font-black text-emerald-400 mt-0.5 leading-none">22% CO2</p>
                <p className="text-[8.5px] text-slate-400 mt-0.5">Intermodal Routing</p>
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
              src="/images/sap_app_supplychain_3d.jpg" 
              alt="SAP Autonomous Digital Supply Chain Control Tower" 
              className="max-w-full max-h-[90vh] object-contain rounded-2xl border border-white/20 shadow-2xl"
            />
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <span className="px-4 py-2 rounded-full bg-black/80 border border-white/20 text-xs font-mono font-bold text-cyan-300 backdrop-blur-md shadow-xl">
                SAP Digital Supply Chain // Autonomous Logistics Control Tower (3D)
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-24">

        {/* =========================================================================
            2. END-TO-END VALUE STREAM PIPELINE (Sequential 5-Stage Interactive Flow)
            ========================================================================= */}
        <section className="space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-0.5 bg-[#00A3E0]" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00A3E0]">
                VALUE STREAM ARCHITECTURE • SYNCHRONOUS LOGISTICS FLOW
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0A1931] dark:text-white tracking-tight">
              End-to-End Digital Supply Chain Value Stream Pipeline
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-3xl">
              Eliminate functional silos. Connect planning, procurement, manufacturing, warehousing, and transportation onto a unified in-memory event mesh.
            </p>
          </div>

          {/* Stepper Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 border-b border-slate-200 dark:border-white/10 pb-3">
            {valueStreamStages.map((stage, idx) => {
              const isActive = activeStage === idx;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStage(idx)}
                  className={`p-3 rounded-2xl text-left transition-all duration-300 border cursor-pointer ${
                    isActive
                      ? 'bg-[#00A3E0]/15 border-[#00A3E0] shadow-md shadow-[#00A3E0]/10'
                      : 'bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 hover:border-[#00A3E0]/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-[#00A3E0]' : 'text-slate-400'}`}>
                      STAGE {stage.num}
                    </span>
                    <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-[#00A3E0] animate-pulse' : 'bg-slate-300 dark:bg-slate-600'}`} />
                  </div>
                  <p className="text-xs sm:text-sm font-black text-slate-900 dark:text-white truncate">
                    {stage.stage}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Stage Inspection Console */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white via-sky-50/20 to-slate-50 dark:from-[#071326] dark:via-[#050E1C] dark:to-[#030914] border border-slate-200 dark:border-cyan-500/20 shadow-xl space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-white/10">
              <div>
                <span className="text-xs font-mono font-bold text-[#00A3E0] uppercase tracking-wider block mb-1">
                  STAGE {currentStage.num} // {currentStage.stage} ENGINE SPECIFICATION
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  {currentStage.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium mt-1">
                  {currentStage.subtitle}
                </p>
              </div>

              {/* Modules Pill Group */}
              <div className="flex flex-wrap items-center gap-1.5">
                {currentStage.modules.map((m, mIdx) => (
                  <span key={mIdx} className="px-2.5 py-1 rounded-lg bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 text-[11px] font-mono font-semibold text-slate-700 dark:text-cyan-300">
                    {m}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {currentStage.desc}
            </p>

            {/* Inputs & Outputs Architecture Box */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white dark:bg-black/30 border border-slate-200 dark:border-white/10">
                <p className="text-[11px] font-mono font-bold text-slate-400 uppercase mb-1">Upstream Inputs / Data Ingestion</p>
                <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium">
                  {currentStage.inputs}
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-white dark:bg-black/30 border border-slate-200 dark:border-white/10">
                <p className="text-[11px] font-mono font-bold text-cyan-500 uppercase mb-1">Downstream Outputs / Real-Time Artifacts</p>
                <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium">
                  {currentStage.outputs}
                </p>
              </div>
            </div>

            {/* Live Telemetry Benchmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-200 dark:border-white/10 font-mono">
              {Object.entries(currentStage.telemetry).map(([key, val], idx) => (
                <div key={idx} className="p-3 rounded-xl bg-[#00A3E0]/5 dark:bg-cyan-500/10 border border-[#00A3E0]/20 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0" />
                  <span className="text-xs font-bold text-slate-800 dark:text-cyan-200">{val}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. INTERACTIVE DISRUPTION SIMULATOR CONSOLE (Stress-Testing Network Resilience)
            ========================================================================= */}
        <section className="bg-gradient-to-br from-[#061224] via-[#081830] to-[#040C1A] rounded-3xl border border-cyan-500/20 p-8 sm:p-12 shadow-2xl text-white space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold text-cyan-300 bg-cyan-500/15 border border-cyan-500/30 mb-2">
              <Compass className="w-3.5 h-3.5 text-cyan-400" />
              <span>DYNAMIC EVENT SIMULATION • DISRUPTION MITIGATION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
              Interactive Supply Chain Disruption Simulator
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
              Test how the intelligent digital core automatically detects supply anomalies, recalculates multi-echelon buffers, and re-routes freight in real time.
            </p>
          </div>

          {/* Scenario Selection Pills */}
          <div className="flex flex-wrap gap-2.5">
            {disruptionScenarios.map((sc, idx) => {
              const isActive = activeDisruption === idx;
              return (
                <button
                  key={sc.id}
                  onClick={() => setActiveDisruption(idx)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-mono font-bold uppercase transition-all cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/30'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
                  }`}
                >
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>{sc.title}</span>
                </button>
              );
            })}
          </div>

          {/* Disruption Response Console */}
          <div className="p-6 sm:p-8 rounded-2xl bg-black/40 border border-white/10 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                <span className="text-[10px] font-mono font-bold uppercase text-red-400 block mb-1">Simulated Threat Trigger</span>
                <p className="text-xs sm:text-sm text-slate-200">{currentDisruption.trigger}</p>
                <p className="text-xs text-red-300 font-medium mt-2">{currentDisruption.impact}</p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <span className="text-[10px] font-mono font-bold uppercase text-emerald-400 block mb-1">Automated Resolution Outcome</span>
                <div className="space-y-1.5 mt-1">
                  {Object.entries(currentDisruption.kpiImpact).map(([k, v], idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-400 uppercase">{k}:</span>
                      <span className="font-bold text-emerald-300">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-cyan-300 tracking-wider block">
                Autonomous Automated Actions Executed by SAP Core:
              </span>
              <div className="space-y-2">
                {currentDisruption.resolution.map((step, sIdx) => (
                  <div key={sIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. AUTONOMOUS AI & COMPUTER VISION LOGISTICS SPOTLIGHT
            ========================================================================= */}
        <section className="space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-0.5 bg-[#00A3E0]" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00A3E0]">
                EMBEDDED COGNITIVE INTELLIGENCE • ROBOTICS ORCHESTRATION
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0A1931] dark:text-white tracking-tight">
              AI Agents & Computer Vision in Supply Chain Operations
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-3xl">
              Deploy autonomous intelligent agents that monitor supplier lead times, inspect incoming trailers at gate checkpoints, and optimize freight carbon footprints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aiSupplyChainAgents.map((agent, idx) => (
              <div
                key={agent.id}
                className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#071326] border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-cyan-50 dark:bg-cyan-500/10 text-[#00A3E0] flex items-center justify-center mb-4">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#00A3E0] uppercase tracking-wider block mb-1">
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
                  <span className="text-slate-400">Benchmark:</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">{agent.stat}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            5. INDUSTRY-SPECIFIC SCM EXECUTION BLUEPRINTS
            ========================================================================= */}
        <section className="space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-0.5 bg-[#00A3E0]" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00A3E0]">
                VERTICAL SPECIALIZATION • PRE-BUILT BEST PRACTICES
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0A1931] dark:text-white tracking-tight">
              SAVIC Industry SCM Execution Blueprints
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-3xl">
              Pre-configured business process flows and master data templates built to satisfy exact vertical regulatory and operational requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industryBlueprints.map((bp, idx) => (
              <div
                key={idx}
                className={`p-6 sm:p-7 rounded-3xl border shadow-sm flex flex-col justify-between ${bp.accent} dark:bg-[#071326]`}
              >
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#00A3E0] uppercase tracking-wider block mb-1">
                    {bp.badge}
                  </span>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2">
                    {bp.sector}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {bp.description}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-200 dark:border-white/10">
                    {bp.capabilities.map((c, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3E0] shrink-0" />
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            6. ENTERPRISE CASE STUDIES & TRANSFORMATION OUTCOMES
            ========================================================================= */}
        <section className="space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-0.5 bg-[#00A3E0]" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00A3E0]">
                PROVEN IMPACT • CLIENT VALIDATION
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0A1931] dark:text-white tracking-tight">
              Real-World SCM Transformation Case Studies
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
                  <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-bold">
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
            7. FAQS & EXECUTIVE SCM ADVISORY CTA
            ========================================================================= */}
        <section className="bg-gradient-to-br from-[#061224] via-[#091D3A] to-[#050C1A] rounded-3xl border border-cyan-500/20 p-8 sm:p-12 shadow-2xl text-white space-y-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
              <span>EXECUTIVE SCM ADVISORY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              Frequently Asked Questions on Digital Supply Chain
            </h2>
          </div>

          <div className="space-y-3">
            {scmFaqs.map((faq, idx) => {
              const isExpanded = expandedFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setExpandedFaq(isExpanded ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-cyan-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
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
                Ready to Modernize Your Supply Chain Architecture?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                Engage with SAVIC’s certified SAP Digital Supply Chain architects to evaluate your IBP demand sensing accuracy, warehouse automation readiness, and multi-modal freight costs.
              </p>
            </div>

            <button
              onClick={() => onOpenContact('Supply Chain Architecture Workshop')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#00A3E0] to-cyan-400 hover:from-cyan-300 hover:to-[#00A3E0] text-[#040D1A] font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-xl shadow-cyan-500/25 shrink-0 cursor-pointer"
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
