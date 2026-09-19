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
  Fan,
  Wrench,
  ThermometerSnowflake,
  Wind
} from 'lucide-react';

interface IndustryPageProps {
  onOpenContact: (defaultService?: string) => void;
}

export const FacilitiesAssetsIndustryPage: React.FC<IndustryPageProps> = ({ onOpenContact }) => {
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

  // Section 4: Circular Chevron Radial Wheel Segments (KNOOVIQ Facilities & Assets Platform Ecosystem)
  const wheelSegments = [
    {
      id: 'iot-bms-telemetry',
      title: 'IoT BMS & Chiller Telemetry Stream',
      desc: 'Sub-second BACnet, Modbus, and MQTT ingestion from chillers, air handling units (AHUs), and variable frequency drives.',
      side: 'right',
      color: '#0284C7', // Sky Blue
      textColor: 'text-sky-400',
      bgGlow: 'rgba(2, 132, 199, 0.3)',
      icon: Radio
    },
    {
      id: 'predictive-apm',
      title: 'Predictive Asset Performance (APM)',
      desc: 'Vibration FFT spectral analysis and thermal degradation modeling alerting engineering teams before catastrophic equipment seizure.',
      side: 'right',
      color: '#0EA5E9', // Cyan
      textColor: 'text-cyan-400',
      bgGlow: 'rgba(14, 165, 233, 0.3)',
      icon: Gauge
    },
    {
      id: 'dynamic-work-orders',
      title: 'Dynamic SLA Work Order Dispatch',
      desc: 'Automated conversion of BMS anomaly alarms into geocoded work orders dispatched to technicians based on trade certifications.',
      side: 'right',
      color: '#10B981', // Emerald
      textColor: 'text-emerald-400',
      bgGlow: 'rgba(16, 185, 129, 0.3)',
      icon: Wrench
    },
    {
      id: 'occupancy-iaq',
      title: 'Indoor Air Quality (IAQ) & Occupancy',
      desc: 'Demand-controlled ventilation adjusting fresh air CFM and fan speeds in real time based on CO2 sensors and desk occupancy.',
      side: 'right',
      color: '#F59E0B', // Amber
      textColor: 'text-amber-400',
      bgGlow: 'rgba(245, 158, 11, 0.3)',
      icon: Wind
    },
    {
      id: 'energy-carbon-esg',
      title: 'Building Energy & Carbon Ledger',
      desc: 'Automated Energy Star rating benchmarks and Scope 1/2 greenhouse gas accounting across multi-campus corporate real estate.',
      side: 'left',
      color: '#10B981', // Emerald
      textColor: 'text-emerald-400',
      bgGlow: 'rgba(16, 185, 129, 0.3)',
      icon: Zap
    },
    {
      id: 'mro-spare-parts',
      title: 'MRO Spare Parts & Inventory Sync',
      desc: 'Critical spares reordering for belts, filters, bearings, and refrigerants mapped directly to equipment serial numbers in SAP EAM.',
      side: 'left',
      color: '#F97316', // Orange
      textColor: 'text-orange-400',
      bgGlow: 'rgba(249, 115, 22, 0.3)',
      icon: Boxes
    },
    {
      id: 'contractor-sla',
      title: 'Vendor & FM Contractor Governance',
      desc: 'Digital Permit-to-Work sign-offs, contractor response time KPI scorecards, and performance-based maintenance fee clearance.',
      side: 'left',
      color: '#8B5CF6', // Purple
      textColor: 'text-purple-400',
      bgGlow: 'rgba(139, 92, 246, 0.3)',
      icon: ShieldCheck
    },
    {
      id: 'lifecycle-depreciation',
      title: 'Asset Lifecycle & Capital Replacement',
      desc: 'Predictive remaining useful life (RUL) modeling and 10-year capital expenditure replacement planning in SAP Asset Central.',
      side: 'left',
      color: '#3B82F6', // Blue
      textColor: 'text-blue-400',
      bgGlow: 'rgba(59, 130, 246, 0.3)',
      icon: Building2
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
      id: 'telemetry',
      label: 'BMS Telemetry Ingestion',
      sublabel: 'Continuous IoT Streams',
      tech: 'SAP BTP IoT Gateway',
      desc: 'Streaming real-time temperature, pressure, flow rate, and electrical power metrics from multi-vendor BMS systems.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      icon: Radio
    },
    {
      id: 'anomaly',
      label: 'AI Anomaly Detection',
      sublabel: 'Vibration & Thermal FFT',
      tech: 'SAP Predictive Maintenance',
      desc: 'Algorithmic pattern recognition detecting bearing wear and refrigerant leaks weeks before physical equipment failure.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
      icon: Gauge
    },
    {
      id: 'workorder',
      label: 'Automated Work Order',
      sublabel: 'Priority & SLA Tagging',
      tech: 'SAP S/4HANA PM / EAM',
      desc: 'Translating sensor anomaly triggers into formal maintenance orders with pre-populated bill-of-materials and safety procedures.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
      icon: Wrench
    },
    {
      id: 'dispatch',
      label: 'Technician Mobile Dispatch',
      sublabel: 'Field App & Navigation',
      tech: 'SAP Service & Asset Manager',
      desc: 'Field technicians receive step-by-step digital work instructions, electrical schematics, and indoor GPS asset locations on mobile.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
      icon: Workflow
    },
    {
      id: 'mro',
      label: 'Spare Parts Requisition',
      sublabel: 'MRO Store Inventory',
      tech: 'SAP Inventory Management',
      desc: 'Automated reservation and stock issue of replacement impellers, gaskets, and filters directly charged to the maintenance work order.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
      icon: Boxes
    },
    {
      id: 'closeout',
      label: 'Sign-Off & Energy Tuning',
      sublabel: 'SLA Verification & ESG',
      tech: 'SAP Sustainability Ledger',
      desc: 'Digital supervisor sign-off confirming vibration normalization, restoring baseline energy efficiency and updating ESG carbon metrics.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      icon: ShieldCheck
    }
  ];

  // Section 3: Facilities & Assets Industry Challenges & Bottlenecks Data (6 Cards)
  const industryChallenges = [
    {
      icon: ThermometerSnowflake,
      tag: 'CATASTROPHIC DOWNTIME',
      title: 'Unplanned Chiller & HVAC Outages',
      desc: 'Critical building cooling systems trip unexpectedly during peak summer heatwaves, causing severe tenant business disruption and lease penalties.',
      footer: 'Unscheduled Equipment Stoppages'
    },
    {
      icon: Zap,
      tag: 'ENERGY BLEED',
      title: 'Runaway Building Utility Bills',
      desc: 'Air handling units and water pumps running at full power during unoccupied night and weekend hours generate astronomical electricity bills.',
      footer: 'Uncontrolled Operating Expenditures'
    },
    {
      icon: Wrench,
      tag: 'DISORGANIZED MAINTENANCE',
      title: 'Unproductive Technician Dispatch',
      desc: 'Paper work orders and missing spare parts force technicians to spend vital shift hours searching for tools instead of wrenching.',
      footer: 'Depressed Wrench Time & High MTTR'
    },
    {
      icon: Wind,
      tag: 'IAQ COMPLAINTS',
      title: 'Poor Indoor Air Quality & Sick Building',
      desc: 'Inadequate fresh air circulation and undetected filter clogging result in high CO2 levels, tenant fatigue, and compliance fines.',
      footer: 'Tenant Dissatisfaction & Lease Churn'
    },
    {
      icon: Server,
      tag: 'HARDWARE SILOS',
      title: 'Fragmented BMS Across Campuses',
      desc: 'Multi-campus facilities operating legacy Schneider, Honeywell, and Johnson Controls BMS systems lack unified monitoring.',
      footer: 'Disconnected Building Automation'
    },
    {
      icon: ShieldCheck,
      tag: 'CONTRACTOR OPACITY',
      title: 'Unverified Vendor Maintenance SLAs',
      desc: 'Facility managers pay full preventive maintenance service retainers without proof of whether contractors actually serviced the assets.',
      footer: 'Unenforced Maintenance SLA Penalties'
    }
  ];

  // Section 6: Modular Solutions Data
  const categories = [
    { key: 'ALL', label: 'All Facilities Suites' },
    { key: 'APM', label: 'Predictive APM & IoT' },
    { key: 'WORK', label: 'Work Orders & Field Mobility' },
    { key: 'ESG', label: 'Energy & Sustainability' }
  ];

  const modularSolutions = [
    {
      category: 'APM',
      categoryLabel: 'PREDICTIVE APM & IOT',
      tag: 'SAP APM CORE',
      title: 'Predictive Asset Performance Management (APM)',
      description: 'Ingests vibration, acoustic, and thermal telemetry from chillers, cooling towers, and pumps to predict mechanical failures weeks in advance.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      icon: Gauge,
      highlights: ['FFT vibration spectrum monitoring', 'Automated anomaly threshold triggers', 'Remaining Useful Life (RUL) estimation']
    },
    {
      category: 'WORK',
      categoryLabel: 'WORK ORDERS & FIELD MOBILITY',
      tag: 'SAP SAM SUITE',
      title: 'SAP Service & Asset Manager (Mobile Field Suite)',
      description: 'Equips facility maintenance technicians with offline-capable mobile tablets for work order execution, barcode scanning, and spare parts booking.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      icon: Wrench,
      highlights: ['Offline digital work pack execution', 'Asset barcode & RFID verification', 'Direct labor time & parts charging']
    },
    {
      category: 'ESG',
      categoryLabel: 'ENERGY & SUSTAINABILITY',
      tag: 'ENERGY OPTIMIZATION',
      title: 'Smart Building Energy & Carbon Ledger',
      description: 'Synchronizes building smart submetering data with SAP Sustainability Footprint Management to track real-time Energy Star performance.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
      icon: Zap,
      highlights: ['Automated Energy Star benchmark sync', 'Real-time Scope 1 & 2 GHG tracking', 'Peak demand shaving notifications']
    },
    {
      category: 'APM',
      categoryLabel: 'PREDICTIVE APM & IOT',
      tag: 'BMS GATEWAY',
      title: 'Unified Multi-BMS Ingestion Gateway',
      description: 'Normalizes BACnet, Modbus, and OPC-UA sensor streams across Johnson Controls, Honeywell, and Siemens hardware into SAP Clean Core.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
      icon: Radio,
      highlights: ['Universal hardware protocol bridge', 'Edge telemetry data cleansing', 'Direct SAP Asset Central sync']
    },
    {
      category: 'WORK',
      categoryLabel: 'WORK ORDERS & FIELD MOBILITY',
      tag: 'MRO INVENTORY',
      title: 'MRO Spare Parts & Store Optimization',
      description: 'Automates min-max inventory replenishment for HVAC filters, pump seals, and electrical contactors tied directly to equipment BOMs.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      icon: Boxes,
      highlights: ['Equipment-to-part BOM relationship', 'Automated purchase reorder points', 'Zero stockout of critical breakdown spares']
    },
    {
      category: 'ESG',
      categoryLabel: 'ENERGY & SUSTAINABILITY',
      tag: 'IAQ & OCCUPANCY',
      title: 'Dynamic IAQ & Demand-Controlled Ventilation',
      description: 'Coordinates desk occupancy sensors and CO2 air quality probes to dynamically adjust outdoor air CFM intake, cutting cooling loads.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
      icon: Wind,
      highlights: ['CO2 & VOC sensor integration', 'Occupancy-driven fan speed throttling', 'Enhanced tenant wellness & productivity']
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
      title: 'Asset Register Digitization',
      subtitle: 'Hierarchy & Barcoding',
      description: 'Cataloging physical plant equipment (chillers, AHUs, switchgear, pumps) into standardized SAP Asset Central hierarchies with QR codes.',
      tag: 'SAP PM & Master Asset Data',
      textColor: 'text-sky-400',
      glowColor: 'bg-sky-500',
      borderBase: 'border-sky-500/30',
      activeBorder: 'border-sky-400 ring-2 ring-sky-500/30 bg-sky-950/30',
      icon: Building2,
      before: 'Uncataloged legacy plant rooms with missing manuals and unknown asset ages',
      after: 'Unified SAP Asset Hierarchy with digital technical nameplates and QR verification',
      metrics: ['Exacting asset register accuracy', 'Single-source equipment history', 'Clean maintenance records']
    },
    {
      id: 'stage-2',
      badge: 'INTEGRATION',
      title: 'Mobile Work Order Dispatch',
      subtitle: 'Technician Field Automation',
      description: 'Deploying SAP Service & Asset Manager on mobile tablets to eliminate paper work orders and enable instant digital labor and spare parts logging.',
      tag: 'SAP Service & Asset Manager',
      textColor: 'text-cyan-400',
      glowColor: 'bg-cyan-500',
      borderBase: 'border-cyan-500/30',
      activeBorder: 'border-cyan-400 ring-2 ring-cyan-500/30 bg-cyan-950/30',
      icon: Wrench,
      before: 'Paper clipboards and manual work order entry causing extensive lost wrench time',
      after: 'Mobile digital work packs with integrated schematics and parts reservations',
      metrics: ['Maximized technician wrench time', 'Accelerated reduction in MTTR', 'Touchless job closeouts']
    },
    {
      id: 'stage-3',
      badge: 'ORCHESTRATION',
      title: 'Predictive APM Integration',
      subtitle: 'Vibration & Sensor AI',
      description: 'Connecting BMS sensor streams to SAP Asset Performance Management for continuous vibration FFT and bearing temperature pattern analysis.',
      tag: 'SAP APM & IoT Edge',
      textColor: 'text-amber-400',
      glowColor: 'bg-amber-500',
      borderBase: 'border-amber-500/30',
      activeBorder: 'border-amber-400 ring-2 ring-amber-500/30 bg-amber-950/30',
      icon: Gauge,
      before: 'Run-to-failure emergency breakdowns causing expensive emergency technician callouts',
      after: 'Early warning anomaly detection scheduling planned repairs weeks before failure',
      metrics: ['Eradicated catastrophic trips', 'Significantly lower maintenance cost', 'Extended chiller life']
    },
    {
      id: 'stage-4',
      badge: 'AUTONOMY',
      title: 'Autonomous Building Operations',
      subtitle: 'Energy & Carbon Optimization',
      description: 'Closing the loop between occupancy sensors, weather forecasts, and BMS setpoints to minimize utility consumption and carbon emissions.',
      tag: 'BTP AI & ESG Sustainability Hub',
      textColor: 'text-emerald-400',
      glowColor: 'bg-emerald-500',
      borderBase: 'border-emerald-500/30',
      activeBorder: 'border-emerald-400 ring-2 ring-emerald-500/30 bg-emerald-950/30',
      icon: Zap,
      before: 'Static cooling schedules running empty office floors with massive energy waste',
      after: 'Dynamic demand-controlled HVAC optimization reducing overall building energy consumption',
      metrics: ['Optimized electricity consumption', 'Verified ESG carbon accounting', 'Optimal indoor comfort']
    }
  ];

  // Section 10: FAQs
  const faqs = [
    {
      q: 'How does Knooviq connect multi-vendor BMS systems (Honeywell, Johnson Controls, Siemens) into SAP?',
      a: 'We implement an industrial IoT edge gateway running on SAP BTP. The gateway communicates via standard protocols (BACnet/IP, Modbus TCP, OPC-UA, and MQTT) to poll field controllers without interfering with safety interlocks. Sensor data is normalized, cleansed, and streamed directly into SAP Asset Performance Management.'
    },
    {
      q: 'What is the difference between preventive maintenance and predictive maintenance (APM) in SAP?',
      a: 'Preventive maintenance is calendar-based or run-hour-based (e.g., replace oil every 6 months or 1,000 hours), often servicing healthy machines unnecessarily. Predictive Asset Performance Management (APM) uses real-time condition sensors (vibration FFT, bearing temperature, motor current) to predict the exact degradation curve, dispatching maintenance only when actual failure probability rises.'
    },
    {
      q: 'Can technicians use the mobile maintenance app without internet in basement plant rooms?',
      a: 'Yes. SAP Service & Asset Manager operates on an offline-first architecture. Technicians download their assigned work orders, equipment documentation, and spare parts catalogs onto their rugged tablet before entering subterranean mechanical vaults. When re-entering Wi-Fi or cellular coverage, all completed tasks and timestamps sync automatically.'
    },
    {
      q: 'How does the solution support corporate ESG Scope 1 and Scope 2 emissions reporting?',
      a: 'Building utility submeters (electricity, chilled water, natural gas, diesel generator fuel) feed real-time consumption into SAP Sustainability Footprint Management. The system converts kWh and fuel liters into carbon dioxide equivalent (tCO2e) based on regional emission factors, providing audit-proof ESG disclosure data.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#0070C0] selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* =========================================================================
          SECTION 1: HERO SECTION (Pure Enterprise Facilities & Assets Hero)
          ========================================================================= */}
      <section className="relative w-full min-h-[620px] lg:min-h-[680px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 overflow-hidden bg-slate-900">
        
        {/* Full-bleed High Resolution Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80" 
            alt="Modern Corporate Campus Intelligent Facilities Atrium"
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
                <Factory className="w-3.5 h-3.5 text-cyan-400" />
                <span>KNOOVIQ INDUSTRY PRACTICE</span>
              </div>

              {/* Prominent High-Impact Heading with Crisp Drop-Shadow */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                Intelligent ERP for <br />
                <span className="text-cyan-400">Facilities & Smart Asset Operations</span>
              </h1>

              {/* Subheading / Value Proposition */}
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight leading-snug pt-0.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                IoT-Driven Building Operations, Predictive APM & Dynamic Work Order Dispatch.
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
                Empowering corporate real estate operators, industrial plant managers, and facility management service providers with{' '}
                <strong className="text-white font-semibold">SAP S/4HANA Asset Management (PM/EAM)</strong>, automated{' '}
                <strong className="text-cyan-300 font-semibold">Predictive APM Telemetry</strong>, and mobile field execution.
              </p>

              {/* Clean Feature Highlights */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Predictive Vibration FFT AI</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Offline Mobile Work Order App</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  <span>Demand-Controlled Energy & IAQ</span>
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
                  <Gauge className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">PREDICTIVE APM</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">Vibration FFT AI</div>
                <div className="text-xs text-slate-300 mt-0.5">Zero Catastrophic Trips</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <Wrench className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">FIELD MOBILITY</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">Mobile Work Orders</div>
                <div className="text-xs text-slate-300 mt-0.5">Maximized Wrench Time</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <Wind className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">IAQ & OCCUPANCY</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">Smart Ventilation</div>
                <div className="text-xs text-slate-300 mt-0.5">Dynamic CFM Control</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <Zap className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">ENERGY & ESG</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">Scope 1 & 2 Carbon</div>
                <div className="text-xs text-slate-300 mt-0.5">Optimized Energy Consumption</div>
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
                Transforming Facilities into <span className="text-[#0070C0]">Autonomous Smart Assets</span>
              </h2>

              <div className="border-l-4 border-[#0070C0] border-y border-r border-slate-300 pl-4 py-2 bg-gradient-to-r from-sky-50/80 via-sky-50/30 to-transparent rounded-r-xl">
                <p className="text-sm font-semibold text-slate-800 leading-relaxed italic">
                  &ldquo;A facility is not a passive concrete shell—it is an intricate electro-mechanical ecosystem. Connecting sensor streams directly to maintenance work orders eliminates catastrophic downtime and halves utility costs.&rdquo;
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Traditional facility management suffers from reactive firefighting: discovering chiller failures only after tenant complaints flood the helpdesk, paper work orders getting lost in transit, and multi-campus BMS systems operating in dark silos. Knooviq transforms facilities operations into an intelligent, closed-loop predictive enterprise running on SAP S/4HANA.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {[
                  'Predictive Vibration FFT & APM Health Scores',
                  'Mobile Work Order Dispatch & Hands-On Wrench Time',
                  'Dynamic Demand-Controlled HVAC Optimization',
                  'MRO Spare Parts Bill of Materials Governance'
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
              <span>FACILITIES DOMAIN BOTTLENECKS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              Operational Challenges Across Facilities & Plant Operations
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Property and plant operators lose millions annually when building management systems, work order dispatch, and spare parts remain disconnected from ERP ledgers.
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
              <Factory className="w-3.5 h-3.5 text-cyan-400" />
              <span>RADIAL PLATFORM ECOSYSTEM</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              KNOOVIQ Facilities & Asset Performance Core
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Hover over any segment in the interlocking wheel to explore how IoT telemetry, mobile work orders, and predictive APM operate in continuous synchronization.
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
                    FACILITIES
                  </text>
                  <text
                    x="250"
                    y="274"
                    textAnchor="middle"
                    fill="#94A3B8"
                    fontSize="9"
                    fontFamily="monospace"
                  >
                    CLEAN CORE APM
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
              Enterprise Facilities Technology Blueprint
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Decoupling IoT BMS field gateways, technician mobile apps, and predictive analytics on SAP BTP while preserving an uncorrupted S/4HANA core.
            </p>
          </div>

          {/* Interactive Layer Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setActiveArchTab('bms')}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeArchTab === 'bms'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              IoT BMS & Chiller Telemetry
            </button>
            <button
              onClick={() => setActiveArchTab('core')}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeArchTab === 'core'
                  ? 'bg-[#0070C0] text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              SAP S/4HANA PM / EAM Clean Core
            </button>
            <button
              onClick={() => setActiveArchTab('cloud')}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeArchTab === 'cloud'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Cloud BTP Technician & ESG Hub
            </button>
          </div>

          {/* Active Blueprint View */}
          <div className="rounded-2xl border-2 border-slate-300 bg-slate-950 text-white p-6 sm:p-8 shadow-xl">
            {activeArchTab === 'bms' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <Radio className="w-6 h-6 text-sky-400" />
                    <div>
                      <h3 className="text-lg font-bold text-white">Multi-BMS Protocol Gateway & Sensor Telemetry</h3>
                      <p className="text-xs text-slate-400 font-mono">BACnet/IP • Modbus TCP • LoRaWAN • OPC-UA • Vibration Accelerometers</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-mono">Sub-Second Streaming</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-xs font-bold text-sky-300 uppercase font-mono mb-1">Vibration FFT Analytics</h4>
                    <p className="text-xs text-slate-300">Continuous tri-axial accelerometers detect unbalance, misalignment, and bearing raceway faults.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-xs font-bold text-sky-300 uppercase font-mono mb-1">Multi-Vendor BMS Bridge</h4>
                    <p className="text-xs text-slate-300">Normalizes cooling setpoints and alarm telemetry across disparate Johnson Controls and Siemens hardware.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-xs font-bold text-sky-300 uppercase font-mono mb-1">IAQ Air Quality Feeds</h4>
                    <p className="text-xs text-slate-300">CO2, particulate matter, and humidity streams drive demand-controlled ventilation dampers.</p>
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
                      <h3 className="text-lg font-bold text-white">SAP S/4HANA Plant Maintenance (PM) & MRO Core</h3>
                      <p className="text-xs text-slate-400 font-mono">Clean Core Standard • Asset Hierarchy • Universal Journal • Spare Parts BOM</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono">Zero Core Modifications</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-xs font-bold text-cyan-300 uppercase font-mono mb-1">Asset Master Hierarchy</h4>
                    <p className="text-xs text-slate-300">Standardized functional locations and equipment records mapping every mechanical component.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-xs font-bold text-cyan-300 uppercase font-mono mb-1">Automated Work Orders</h4>
                    <p className="text-xs text-slate-300">Converts APM sensor thresholds into formal maintenance orders with reserved replacement parts.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-xs font-bold text-cyan-300 uppercase font-mono mb-1">Universal Journal Costing</h4>
                    <p className="text-xs text-slate-300">Captures technician labor hours and vendor service invoices directly into property cost centers.</p>
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
                      <h3 className="text-lg font-bold text-white">SAP BTP Mobile Execution & ESG Analytics Suite</h3>
                      <p className="text-xs text-slate-400 font-mono">SAP Service & Asset Manager • BTP Event Mesh • ESG Sustainability Hub</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-mono">Offline Mobile Ready</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-xs font-bold text-amber-300 uppercase font-mono mb-1">Mobile Technician App</h4>
                    <p className="text-xs text-slate-300">Step-by-step digital work instructions, electrical schematics, and barcode verification on mobile.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-xs font-bold text-amber-300 uppercase font-mono mb-1">ESG Carbon Footprint</h4>
                    <p className="text-xs text-slate-300">Converts electricity and fuel meter streams into certified Scope 1 & 2 carbon emissions ledgers.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-xs font-bold text-amber-300 uppercase font-mono mb-1">Vendor SLA Scorecards</h4>
                    <p className="text-xs text-slate-300">Evaluates external FM contractor response times and first-time fix rates against contract terms.</p>
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
              Knooviq Facilities & Asset Solution Suites
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Targeted capability packages designed to eliminate equipment downtime, cut energy waste, and streamline facility maintenance teams.
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
              Legacy Facilities Firefighting vs Knooviq Clean Core
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Compare reactive facilities management against Knooviq&apos;s predictive, IoT-driven SAP S/4HANA Clean Core architecture.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white font-mono text-[11px] uppercase tracking-wider">
                  <th className="p-4 sm:p-5">Facilities Dimension</th>
                  <th className="p-4 sm:p-5 text-rose-300">Legacy / Reactive Approach</th>
                  <th className="p-4 sm:p-5 text-cyan-300">Knooviq S/4HANA Clean Core</th>
                  <th className="p-4 sm:p-5 text-emerald-300">Measurable Value Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Equipment Reliability</td>
                  <td className="p-4 sm:p-5 text-slate-600">Run-to-failure breakdown repairs after tenant complaints.</td>
                  <td className="p-4 sm:p-5 text-slate-900 font-medium">Predictive APM vibration FFT and thermal anomaly alerts.</td>
                  <td className="p-4 sm:p-5 text-emerald-600 font-semibold">Systemic prevention of catastrophic chiller downtime.</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Technician Productivity</td>
                  <td className="p-4 sm:p-5 text-slate-600">Paper work orders and manual spare parts searches in storage.</td>
                  <td className="p-4 sm:p-5 text-slate-900 font-medium">Offline mobile app with digital schematics and parts reservations.</td>
                  <td className="p-4 sm:p-5 text-emerald-600 font-semibold">Substantial increase in technician hands-on wrench time.</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Building Energy & ESG</td>
                  <td className="p-4 sm:p-5 text-slate-600">Static unoptimized HVAC cooling schedules running empty spaces.</td>
                  <td className="p-4 sm:p-5 text-slate-900 font-medium">Demand-controlled ventilation tied to occupancy and weather.</td>
                  <td className="p-4 sm:p-5 text-emerald-600 font-semibold">Measurable reduction in facility electricity costs.</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-4 sm:p-5 font-bold text-slate-900">MRO Spare Parts</td>
                  <td className="p-4 sm:p-5 text-slate-600">Stockouts of critical bearings during emergency breakdowns.</td>
                  <td className="p-4 sm:p-5 text-slate-900 font-medium">Automated min-max reordering mapped to equipment BOMs.</td>
                  <td className="p-4 sm:p-5 text-emerald-600 font-semibold">Zero stockout delays on critical mechanical components.</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Vendor Governance</td>
                  <td className="p-4 sm:p-5 text-slate-600">Unverified maintenance retainers with no proof of service.</td>
                  <td className="p-4 sm:p-5 text-slate-900 font-medium">Digital work sign-offs and automated SLA response time scoring.</td>
                  <td className="p-4 sm:p-5 text-emerald-600 font-semibold">Fully verified SLA performance; eliminated fee leakage.</td>
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
              Phased Roadmap to Autonomous Facilities Operations
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              Inspect how legacy manual facility maintenance transforms into an orchestrated predictive operational fabric across every stage of the SAP deployment.
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
              Architectural outcomes delivered across corporate campuses, healthcare centers, and industrial facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#0070C0] hover:shadow-md transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-[#0070C0]">
                  <Gauge className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  Catastrophic Downtime Prevention
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Predictive APM vibration FFT alerts and thermal anomaly detection scheduling proactive repairs weeks before physical chiller failure.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono font-bold text-sky-700 uppercase">
                <span>PLANT RELIABILITY</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                  <Wrench className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  Field Technician Efficiency
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Offline mobile work packs with digital schematics, automated spare reservations, and instant labor logging maximizing hands-on wrench time.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono font-bold text-emerald-700 uppercase">
                <span>WORKFORCE MOBILITY</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#0070C0] hover:shadow-md transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-[#0070C0]">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  Demand-Controlled Energy Savings
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Dynamic HVAC ventilation and cooling adjustments synchronized with live zone occupancy and weather forecasts, eliminating utility waste.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono font-bold text-sky-700 uppercase">
                <span>ENERGY OPTIMIZATION</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  Vendor Maintenance SLA Integrity
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Verified digital proof-of-service sign-offs and automated vendor SLA response time audit scoring eliminating maintenance fee leakage.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono font-bold text-emerald-700 uppercase">
                <span>SLA COMPLIANCE</span>
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
              Facilities & APM Architecture Advisory
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Key considerations for facility directors and asset operations managers evaluating SAP S/4HANA Asset Management.
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
            <Factory className="w-3.5 h-3.5 text-cyan-300" />
            <span>CONNECT YOUR FACILITIES ECOSYSTEM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Build Predictive, Autonomous Facilities Operations?
          </h2>

          <p className="text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed font-normal">
            Synchronize your building management systems, mobile work orders, and asset lifecycle financials with Knooviq.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => onOpenContact('Facilities & APM Architecture Advisory')}
              className="px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-[#003B73] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-2xl shadow-black/25 transition-all flex items-center gap-2 group cursor-pointer"
            >
              <span>Talk to Our Facilities Experts</span>
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

export default FacilitiesAssetsIndustryPage;
