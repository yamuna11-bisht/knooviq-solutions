import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  TrendingUp,
  BarChart3,
  Activity,
  Layers,
  Cpu,
  Database,
  Workflow,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Lock,
  Network,
  Boxes,
  FileCheck,
  Server,
  Zap,
  RefreshCw,
  Search,
  ChevronRight,
  Shield,
  Scale,
  Eye,
  Sliders,
  Clock,
  Globe2,
  Users,
  Compass,
  LineChart,
  Calendar,
  AlertTriangle,
  Terminal,
  Gauge,
  SlidersHorizontal,
  CloudRain,
  Ship,
  DollarSign,
  Package,
  Sparkles,
  Play,
  Pause,
  CheckSquare
} from 'lucide-react';

interface PredictiveAiPracticePageProps {
  onOpenContact?: (defaultTopic?: string) => void;
}

export const PredictiveAiPracticePage: React.FC<PredictiveAiPracticePageProps> = ({
  onOpenContact
}) => {
  // State for Section 2 Interactive Showcase
  const [activeJourneyStep, setActiveJourneyStep] = useState(0);

  // State for Section 4 Circular Chevron Wheel
  const [hoveredWheelIndex, setHoveredWheelIndex] = useState<number | null>(null);
  const [activeWheelIndex, setActiveWheelIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  // State for Section 7 Solution Category Filter
  const [activeSolutionCategory, setActiveSolutionCategory] = useState<string>('ALL');

  // State for Section 9 Interactive Sandbox
  const [activeDocTab, setActiveDocTab] = useState<'demand' | 'inventory' | 'maintenance'>('demand');

  // Section 4: 8-Segment Cybernetic Cockpit Wheel Capabilities
  const wheelSegments = [
    {
      id: 'hierarchical',
      shortTag: 'RECON',
      title: 'Hierarchical Demand Reconciliation',
      desc: 'Mathematically guaranteed forecast coherence across SKU, brand, distribution center, and global tiers',
      badge: 'HIERARCHICAL RECON',
      metric: 'Coherent Quantile Integrity',
      side: 'right',
      color: '#0070C0',
      textColor: 'text-sky-400',
      bgGlow: 'rgba(0, 112, 192, 0.35)',
      icon: Database
    },
    {
      id: 'neural',
      shortTag: 'NEURAL',
      title: 'Deep Autoregressive Time-Series Engines',
      desc: 'Multi-horizon probabilistic neural networks capturing non-linear seasonal spikes and market cycles',
      badge: 'NEURAL FORECASTING',
      metric: 'Multi-Horizon Calibration',
      side: 'right',
      color: '#0EA5E9',
      textColor: 'text-cyan-400',
      bgGlow: 'rgba(14, 165, 233, 0.35)',
      icon: TrendingUp
    },
    {
      id: 'sensor',
      shortTag: 'SENSOR',
      title: 'Exogenous Sensor & Signal Mesh',
      desc: 'Real-time live ingestion of port dwell, meteorological extremes, freight indices, and commodity prices',
      badge: 'EXOGENOUS MESH',
      metric: 'Real-Time External Signals',
      side: 'right',
      color: '#10B981',
      textColor: 'text-emerald-400',
      bgGlow: 'rgba(16, 185, 129, 0.35)',
      icon: CloudRain
    },
    {
      id: 'buffer',
      shortTag: 'BUFFER',
      title: 'Dynamic Safety Stock & Buffer Optimizer',
      desc: 'Continuous safety buffer recalculation replacing rigid static assumptions across supply chain nodes',
      badge: 'SAFETY BUFFER',
      metric: 'Trapped Capital Release',
      side: 'right',
      color: '#8B5CF6',
      textColor: 'text-purple-400',
      bgGlow: 'rgba(139, 92, 246, 0.35)',
      icon: Gauge
    },
    {
      id: 'prescriptive',
      shortTag: 'SOLVE',
      title: 'Prescriptive Mixed-Integer Action Solvers',
      desc: 'Automated translation of probabilistic forecasts into SAP Purchase Requisitions and stock transfer orders',
      badge: 'PRESCRIPTIVE SOLVER',
      metric: 'Automated Action Dispatch',
      side: 'left',
      color: '#F43F5E',
      textColor: 'text-rose-400',
      bgGlow: 'rgba(244, 63, 94, 0.35)',
      icon: Sliders
    },
    {
      id: 'maintenance',
      shortTag: 'RUL',
      title: 'Asset Remaining Useful Life Telemetry',
      desc: 'IoT acoustic, vibration, and thermal sensor analytics predicting equipment failures before shutdowns occur',
      badge: 'RUL TELEMETRY',
      metric: 'Zero Unplanned Downtime',
      side: 'left',
      color: '#EC4899',
      textColor: 'text-pink-400',
      bgGlow: 'rgba(236, 72, 153, 0.35)',
      icon: Activity
    },
    {
      id: 'anomaly',
      shortTag: 'ANOMALY',
      title: 'Sub-Second Anomaly & Leakage Guards',
      desc: 'Continuous real-time scanning of procurement contracts, freight manifests, and transactional records',
      badge: 'ANOMALY GUARDS',
      metric: 'Instant Leakage Defense',
      side: 'left',
      color: '#06B6D4',
      textColor: 'text-teal-400',
      bgGlow: 'rgba(6, 182, 212, 0.35)',
      icon: ShieldCheck
    },
    {
      id: 'explainability',
      shortTag: 'SHAP',
      title: 'Attributional Shapley Explainability',
      desc: 'Decomposing forecasts into exact feature contributions proving why specific demand spikes were predicted',
      badge: 'EXPLAINABLE AI',
      metric: 'Transparent Audit Lineage',
      side: 'left',
      color: '#6366F1',
      textColor: 'text-indigo-400',
      bgGlow: 'rgba(99, 102, 241, 0.35)',
      icon: Eye
    }
  ];

  // Auto-rotation effect for Section 4 Wheel
  useEffect(() => {
    if (!isAutoRotating) return;
    const interval = setInterval(() => {
      setActiveWheelIndex((prev) => (prev + 1) % wheelSegments.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoRotating, wheelSegments.length]);

  // SVG Geometry for Interlocking 8-Segment Chevron Wheel
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

  // Section 2: Journey Steps (Interactive 6-step switcher)
  const journeySteps = [
    {
      id: 'demand-sensing',
      label: 'Multi-Tier Demand Sensing',
      sublabel: 'Dynamic Flash Forecasts',
      desc: 'Ingesting daily point-of-sale sell-through, regional promotional calendars, and basket composition telemetry to predict near-term consumer demand with high statistical confidence.',
      tech: 'Neural Probabilistic Time-Series',
      icon: TrendingUp
    },
    {
      id: 'supply-disruption',
      label: 'Supply Disruption Modeling',
      sublabel: 'Lead-Time Variance',
      desc: 'Predicting ocean container dwell times, raw material bottlenecks, and tier-2 vendor delivery risks to protect manufacturing schedules before delays cascade.',
      tech: 'Exogenous Maritime & Freight Mesh',
      icon: Ship
    },
    {
      id: 'predictive-maint',
      label: 'Asset Remaining Useful Life',
      sublabel: 'Telemetry Sensing',
      desc: 'Transforming high-frequency IoT acoustic, thermal, and vibration sensors into remaining useful life projections, scheduling repairs before critical mechanical failures occur.',
      tech: 'IoT Edge & In-Memory HANA APL',
      icon: Activity
    },
    {
      id: 'price-elasticity',
      label: 'Pricing & Margin Elasticity',
      sublabel: 'Promotional Optimization',
      desc: 'Simulating cross-elasticity curves and competitor price moves in real time to recommend profit-maximizing price points across retail and B2B channels.',
      tech: 'Prescriptive Mixed-Integer Solvers',
      icon: DollarSign
    },
    {
      id: 'cash-flow',
      label: 'Working Capital & Cash Flow',
      sublabel: 'DSO Compression',
      desc: 'Probabilistic modeling of invoice dispute likelihood and customer payment delinquency, allowing treasury teams to forecast cash balances with reliable statistical certainty.',
      tech: 'Predictive Financial Analytics',
      icon: BarChart3
    },
    {
      id: 'risk-intelligence',
      label: 'Operational Anomaly Detection',
      sublabel: 'Real-Time Leakage Defense',
      desc: 'Continuous real-time scanning of procurement contracts, shipping manifests, and expense reports to detect operational leakage and compliance infractions instantly.',
      tech: 'Kolmogorov-Smirnov Anomaly Guards',
      icon: ShieldCheck
    }
  ];

  // Section 3: Core Bottlenecks & Challenges
  const challenges = [
    {
      icon: AlertTriangle,
      tag: 'BULLWHIP DISTORTION',
      title: 'The Bullwhip Distortion Trap',
      desc: 'Upstream order variance amplification creates massive warehouse overstock and recurring store stockouts across multi-echelon distribution networks.',
      footer: 'Closed-Loop Multi-Echelon Reconciliation'
    },
    {
      icon: Calendar,
      tag: 'PLANNING LAG',
      title: 'Static Monthly Planning Cycles',
      desc: 'Traditional monthly batch forecasting cycles are obsolete upon publication, unable to respond to rapid market shifts, stockouts, or sudden supply gluts.',
      footer: 'Sub-Hour Continuous Rolling Sensing'
    },
    {
      icon: CloudRain,
      tag: 'EXOGENOUS BLINDNESS',
      title: 'Lack of Exogenous Signal Ingestion',
      desc: 'Internal ERP sales history alone cannot account for port congestion, weather extremes, macroeconomic fluctuations, or competitor promotions.',
      footer: 'Dynamic Macro & Meteorological Mesh'
    },
    {
      icon: Workflow,
      tag: 'EXECUTION SILOS',
      title: 'Disconnected BI Execution Silos',
      desc: 'Predictions generated in static BI visualization dashboards require slow, error-prone manual re-entry into transactional ERP systems for execution.',
      footer: 'Automated SAP S/4HANA PO Generation'
    },
    {
      icon: Package,
      tag: 'COLD-START FAILURES',
      title: 'Cold-Start & New SKU Fragility',
      desc: 'Newly introduced product launches and seasonal items fail under traditional statistical models due to an absence of historical transaction history.',
      footer: 'Transfer Learning & Attribute Embedding'
    },
    {
      icon: Eye,
      tag: 'MODEL MISTRUST',
      title: 'Algorithmic Black-Box Mistrust',
      desc: 'Supply chain planners override statistical models with manual spreadsheets because algorithms lack transparent, attributional explainability.',
      footer: 'Shapley Attributional Feature Scoring'
    }
  ];

  // Section 6: Technology Foundation Cards
  const foundationCards = [
    {
      tag: 'ERP INTEGRATION',
      icon: Network,
      title: 'SAP IBP & S/4HANA Clean Core Bridge',
      desc: 'Bi-directional OData v4 and CDS View synchronization passing real-time inventory balances and generating purchase requisitions directly into SAP S/4HANA.',
      bullets: [
        'Zero Core Modifications with Clean Core Standards',
        'Direct SAP Integrated Business Planning (IBP) Sync'
      ]
    },
    {
      tag: 'IN-MEMORY ENGINES',
      icon: Database,
      title: 'In-Memory SAP HANA APL & PAL',
      desc: 'Running advanced statistical models and neural algorithms directly in-database without high-latency data extraction or third-party storage movement.',
      bullets: [
        'Automated Predictive Library (APL) In-Database',
        'Sub-15ms Query Execution on Millions of Records'
      ]
    },
    {
      tag: 'FEATURE STORAGE',
      icon: Layers,
      title: 'Distributed Time-Series Feature Store',
      desc: 'Point-in-time correct lagging, rolling aggregates, and exogenous weather calendars preventing data leakage and guaranteeing training-serving parity.',
      bullets: [
        'Time-Travel Backfill Capabilities',
        'Real-Time Streaming Feature Calculation'
      ]
    },
    {
      tag: 'MODEL MONITORING',
      icon: RefreshCw,
      title: 'Continuous Drift Detection & Backtesting',
      desc: 'Automated Kolmogorov-Smirnov distribution tracking detecting data shifts and triggering autonomous model retraining before error rates degrade.',
      bullets: [
        'Automated Concept Drift Alerting',
        'Shadow Model Scoring with Canary Testing'
      ]
    },
    {
      tag: 'PRESCRIPTIVE SOLVER',
      icon: SlidersHorizontal,
      title: 'Prescriptive Optimization Solver',
      desc: 'Mixed-Integer Linear Programming solvers translating uncertain forecast probability distributions into optimal operational supply actions.',
      bullets: [
        'Multi-Facility Capacity Constraint Modeling',
        'Cost-Optimal Safety Buffer Allocations'
      ]
    },
    {
      tag: 'EVENT STREAMING',
      icon: Zap,
      title: 'High-Throughput Kafka & REST Hooks',
      desc: 'Low-latency event streaming architecture publishing operational risk alerts, stockout warnings, and maintenance work orders to downstream teams instantly.',
      bullets: [
        'Sub-20ms Event Broker Latency',
        'Seamless Microsoft Teams & Slack Alerts'
      ]
    }
  ];

  // Section 7: 9 Modular Functional Solutions (3x3 Grid, NO Card Images)
  const industrySolutions = [
    {
      category: 'DEMAND',
      categoryLabel: 'Demand & Inventory',
      title: 'Multi-Echelon Demand Sensing',
      tag: 'DEMAND SENSING',
      description: 'Hierarchical probabilistic neural forecasting reconciling plant, distribution center, and retail store replenishment waves with high statistical accuracy.',
      highlights: ['Point-of-Sale Telemetry', 'Hierarchical Reconciliation', 'Multi-Horizon Calibration'],
      icon: TrendingUp
    },
    {
      category: 'DEMAND',
      categoryLabel: 'Demand & Inventory',
      title: 'Dynamic Safety Stock Optimizer',
      tag: 'BUFFER OPTIMIZATION',
      description: 'Continuous recalculation of buffer inventories based on lead-time variability and supplier volatility, releasing trapped working capital.',
      highlights: ['Lead-Time Volatility Tracking', 'Buffer Recalculation', 'Working Capital Release'],
      icon: Gauge
    },
    {
      category: 'OPS',
      categoryLabel: 'Operations & Assets',
      title: 'Prescriptive Maintenance & RUL',
      tag: 'ASSET RELIABILITY',
      description: 'Sensor-driven acoustic and thermal vibration analytics predicting mechanical breakdown and generating SAP PM work orders automatically.',
      highlights: ['Acoustic IoT Sensing', 'Remaining Useful Life', 'SAP PM Integration'],
      icon: Activity
    },
    {
      category: 'OPS',
      categoryLabel: 'Operations & Assets',
      title: 'Logistics & Port Lead-Time Forecaster',
      tag: 'FREIGHT TRACKING',
      description: 'Predicting ocean container dwell times, customs clearance bottlenecks, and freight lane delays to dynamically reroute inbound supply shipments.',
      highlights: ['Vessel Telemetry', 'Customs Congestion Index', 'Automated Re-Routing'],
      icon: Ship
    },
    {
      category: 'DEMAND',
      categoryLabel: 'Demand & Inventory',
      title: 'Omnichannel Price Elasticity Engine',
      tag: 'PROFIT MAXIMIZATION',
      description: 'Simulating cross-elasticity and promotional lift across thousands of SKUs to set margin-maximizing prices without risking volume goals.',
      highlights: ['Cross-Elasticity Curves', 'Competitor Price Tracking', 'Margin Protection'],
      icon: DollarSign
    },
    {
      category: 'RISK',
      categoryLabel: 'Financial & Risk',
      title: 'Predictive Supplier Insolvency Risk',
      tag: 'SUPPLIER RESILIENCE',
      description: 'Aggregating financial filings, credit default indicators, and delivery variance to alert procurement to supplier disruption well in advance.',
      highlights: ['Financial Health Scoring', 'Dual-Sourcing Alerts', 'Proactive Disruption Warning'],
      icon: ShieldCheck
    },
    {
      category: 'RISK',
      categoryLabel: 'Financial & Risk',
      title: 'Automated Cash Flow & DSO Predictor',
      tag: 'TREASURY ANALYTICS',
      description: 'Probabilistic modeling of invoice payment delays and customer dispute rates to forecast rolling cash balances with high statistical certainty.',
      highlights: ['Dispute Probability', 'DSO Compression', 'Dynamic Discounting'],
      icon: BarChart3
    },
    {
      category: 'RISK',
      categoryLabel: 'Financial & Risk',
      title: 'Predictive Churn & Retention Interception',
      tag: 'CUSTOMER LIFETIME',
      description: 'Detecting subtle changes in client order frequencies and support tickets to trigger automated customer retention workflows and account reviews.',
      highlights: ['Behavioral Event Signals', 'Automated CRM Triggers', 'Customer Value Preservation'],
      icon: Users
    },
    {
      category: 'OPS',
      categoryLabel: 'Operations & Assets',
      title: 'Energy & Utility Load Optimization',
      tag: 'FACILITY EFFICIENCY',
      description: 'Forecasting manufacturing plant kilowatt consumption against spot electricity tariff curves to optimize batch run schedules and reduce utility costs.',
      highlights: ['Tariff Arbitrage', 'Peak Demand Shaving', 'Carbon Footprint Tracking'],
      icon: Zap
    }
  ];

  // Section 8: Enterprise Value & Architecture Pillars (ZERO numbers/percentages)
  const strategicPillars = [
    {
      category: 'DEMAND ACCURACY',
      title: 'Multi-Horizon Forecast Precision',
      desc: 'Eliminating the bullwhip effect through neural probabilistic time-series modeling and automatic hierarchical reconciliation.',
      statusBadge: 'HIGH-PRECISION',
      statusColor: 'text-cyan-300 border-cyan-400/40 bg-cyan-950/60',
      points: [
        'Calibrated P10 / P50 / P90 quantile distributions',
        'Direct ingestion of point-of-sale sell-through signals',
        'Coherent reconciliation across SKU, DC, and global levels'
      ]
    },
    {
      category: 'CAPITAL EFFICIENCY',
      title: 'Dynamic Working Capital Release',
      desc: 'Replacing static buffer inventory rules with continuous, variance-aware safety stock calculations across regional warehouses.',
      statusBadge: 'OPTIMIZED',
      statusColor: 'text-emerald-300 border-emerald-400/40 bg-emerald-950/60',
      points: [
        'Dynamic safety buffer tuning driven by supplier volatility',
        'Multi-facility constraint allocation with mixed-integer solvers',
        'Elimination of costly stockouts and dead inventory accumulation'
      ]
    },
    {
      category: 'OPERATIONAL RESILIENCE',
      title: 'Asset Reliability & Lead-Time Sensing',
      desc: 'Predicting equipment failures and port dwell delays weeks ahead to ensure continuous factory throughput and customer fulfillment.',
      statusBadge: 'CONTINUOUS',
      statusColor: 'text-sky-300 border-sky-400/40 bg-sky-950/60',
      points: [
        'Sensor-driven acoustic and vibration remaining useful life analytics',
        'Automated generation of SAP PM maintenance work orders',
        'Exogenous maritime vessel and freight lane congestion tracking'
      ]
    },
    {
      category: 'GOVERNANCE & TRUST',
      title: 'Attributional Explainability & Compliance',
      desc: 'Decomposing forecasts into transparent Shapley attribution values to build executive planner confidence and regulatory alignment.',
      statusBadge: 'AUDIT-READY',
      statusColor: 'text-purple-300 border-purple-400/40 bg-purple-950/60',
      points: [
        'Shapley value feature attribution for every predicted demand spike',
        'Bi-directional SAP S/4HANA clean core OData synchronization',
        'Continuous drift detection and automated model recalibration'
      ]
    }
  ];

  // Section 9: Interactive Sandbox Scenarios
  const auditDocuments = {
    demand: {
      title: 'Real-Time Multi-Echelon Demand Sensing Telemetry',
      fileInfo: 'SKU Cluster: Global Consumer Goods • Daily Rolling Horizon • In-Database SAP HANA',
      riskLevel: 'PROBABILISTIC FORECAST ACTIVE',
      riskBadgeColor: 'bg-emerald-950/60 text-emerald-300 border-emerald-400/40',
      recommendation: 'Probabilistic demand spike sensed from regional promotional calendar and POS sell-through. Automated replenishment wave dispatched to SAP S/4HANA.',
      findings: [
        {
          tag: 'SELL-THROUGH TELEMETRY',
          title: 'Direct Point-of-Sale Signal Ingestion',
          desc: 'High-frequency sell-through data ingested across 400+ retail nodes with zero batch processing delay.',
          confidence: 'CONFIDENCE: HIGH',
          metricBadge: 'ZERO INGESTION LAG',
          icon: TrendingUp
        },
        {
          tag: 'HIERARCHICAL RECONCILIATION',
          title: 'Mathematically Coherent Quantile Calibration',
          desc: 'National, regional, and store-level forecasts reconciled with mathematically guaranteed coherence across all tiers.',
          confidence: 'MATHEMATICALLY COHERENT',
          metricBadge: 'HIERARCHICAL ALIGNED',
          icon: Database
        },
        {
          tag: 'CLOSED-LOOP EXECUTION',
          title: 'Automated SAP S/4HANA Replenishment Wave',
          desc: 'Automatic Purchase Requisition generated directly via Clean Core OData v4 APIs, avoiding manual planner re-entry.',
          confidence: 'AUTO-DISPATCHED',
          metricBadge: 'CLEAN CORE SYNC',
          icon: CheckCircle2
        }
      ]
    },
    inventory: {
      title: 'Dynamic Safety Stock & Working Capital Optimizer',
      fileInfo: 'Warehouse Network: Central Distribution Hubs • Multi-Facility Inventory Balancing',
      riskLevel: 'BUFFER OPTIMIZATION ACTIVE',
      riskBadgeColor: 'bg-sky-950/60 text-sky-300 border-sky-400/40',
      recommendation: 'Lead-time variability dynamically recalculated against supplier transit indices, releasing trapped buffer capital without compromising service levels.',
      findings: [
        {
          tag: 'LEAD-TIME VARIANCE',
          title: 'Transit Dwell & Supplier Risk Modeling',
          desc: 'Supplier delivery variance and ocean freight congestion automatically factored into daily buffer calculations.',
          confidence: 'REAL-TIME TRACKING',
          metricBadge: 'VARIANCE SENSING',
          icon: Ship
        },
        {
          tag: 'CAPITAL RECOVERY',
          title: 'Trapped Working Capital Release',
          desc: 'Replaces static 30-day buffer assumptions with dynamic quantile limits, optimizing inventory across multi-echelon hubs.',
          confidence: 'CONTINUOUS OPTIMIZATION',
          metricBadge: 'ZERO EXCESS STOCK',
          icon: DollarSign
        },
        {
          tag: 'STOCKOUT DEFENSE',
          title: 'Proactive Service Level Protection',
          desc: 'Rebalancing inventory across regional nodes prevents localized stockout spikes while maintaining target fulfillment thresholds.',
          confidence: 'FULFILLMENT ASSURED',
          metricBadge: 'SERVICE LEVEL SECURE',
          icon: Gauge
        }
      ]
    },
    maintenance: {
      title: 'Industrial Asset Remaining Useful Life & Failure Sentinel',
      fileInfo: 'Asset Class: High-Throughput Manufacturing Turbines • High-Frequency IoT Vibration Sensors',
      riskLevel: 'PREDICTIVE SENTINEL ACTIVE',
      riskBadgeColor: 'bg-purple-950/60 text-purple-300 border-purple-400/40',
      recommendation: 'Acoustic harmonic anomalies detected in bearing casing. Automated preventive maintenance work order dispatched into SAP Plant Maintenance.',
      findings: [
        {
          tag: 'HARMONIC SENSING',
          title: 'Sensor-Driven Acoustic & Vibration Analysis',
          desc: 'Continuous IoT edge telemetry detects early micro-vibration shifts weeks before physical bearing failure.',
          confidence: 'EARLY WARNING DETECTED',
          metricBadge: 'IOT EDGE SENSING',
          icon: Activity
        },
        {
          tag: 'RUL PROJECTION',
          title: 'Deterministic Remaining Useful Life Curve',
          desc: 'In-database machine learning algorithms calculate precise degradation timelines to optimize overhaul scheduling.',
          confidence: 'DEGRADATION MAPPED',
          metricBadge: 'RUL DETERMINED',
          icon: Clock
        },
        {
          tag: 'AUTOMATED SAP PM',
          title: 'Direct Maintenance Order Dispatch',
          desc: 'Automated work order creation with spare parts reservations in SAP PM, eliminating unscheduled factory downtime.',
          confidence: 'DISPATCHED TO SAP PM',
          metricBadge: 'ZERO OVERTIME STOPPAGE',
          icon: ShieldCheck
        }
      ]
    }
  };

  const filteredSolutions = activeSolutionCategory === 'ALL'
    ? industrySolutions
    : industrySolutions.filter(s => s.category === activeSolutionCategory);

  return (
    <div className="w-full bg-white text-slate-900 font-sans selection:bg-[#0070C0] selection:text-white">
      
      {/* =========================================================================
          SECTION 1: HERO SECTION (Image 1 of 4 - Ultra-Clean & Sleek, NO Buttons)
          ========================================================================= */}
      <section className="relative w-full min-h-[460px] sm:min-h-[500px] lg:min-h-[540px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-14 sm:pb-16 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/predictive_ai_hero.jpg"
            alt="Enterprise Predictive AI & Multi-Horizon Demand Sensing"
            className="w-full h-full object-cover object-center opacity-40"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950/95 via-slate-950/80 sm:via-slate-950/60 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <div className="max-w-3xl space-y-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 shadow-sm">
                <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
                <span>KNOOVIQ DIGITAL INTELLIGENCE &bull; PREDICTIVE & PRESCRIPTIVE AI</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Enterprise Predictive AI & Multi-Horizon Demand Sensing
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl">
                Transition your enterprise from reactive supply chain firefighting to deterministic foresight with neural time-series engines, dynamic safety buffer optimization, and closed-loop SAP execution.
              </p>
            </motion.div>

            {/* 3 Enterprise Trust Badges (Zero CTA Buttons in Hero) */}
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.15 }} className="pt-2 flex flex-wrap items-center gap-2 sm:gap-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 text-xs font-medium text-slate-200 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Probabilistic Demand Sensing</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 text-xs font-medium text-slate-200 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>SAP IBP Hierarchical Reconciliation</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 text-xs font-medium text-slate-200 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                <span>Dynamic Safety Stock Optimization</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: EXECUTIVE PERSPECTIVE (Image 2 of 4 - Same Font & Layout as Generative AI)
          ========================================================================= */}
      <section className="py-14 sm:py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10 sm:mb-12">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#0070C0] block mb-2">
              Strategic Executive Vision
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight leading-tight">
              Deterministic Forecasting & Prescriptive Supply Chain Autonomy
            </h2>
            <p className="mt-3 text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
              Traditional ERP planning relies on historical averages and static spreadsheets. Knooviq deploys neural probabilistic architectures that ingest real-time market signals, simulate risk curves, and dispatch execution orders into SAP automatically.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            
            {/* Left Column: 3 Strategic Pillars + Quote Box */}
            <div className="lg:col-span-6 space-y-4">
              <div className="p-5 sm:p-6 rounded-2xl bg-white border-2 border-slate-200 shadow-sm hover:border-[#0070C0]/50 transition-all space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0070C0] flex items-center justify-center border border-sky-100 shrink-0">
                    <TrendingUp className="w-4 h-4 text-[#0070C0]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-950">
                    Probabilistic Multi-Horizon Demand Sensing
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  Continuous generation of calibrated P10, P50, and P90 forecast bands, eliminating batch planning latency and adapting to volatile promotional spikes.
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-white border-2 border-slate-200 shadow-sm hover:border-[#0070C0]/50 transition-all space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0070C0] flex items-center justify-center border border-sky-100 shrink-0">
                    <Gauge className="w-4 h-4 text-[#0070C0]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-950">
                    Dynamic Safety Buffer Recalculation
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  Replacing rigid static buffer days with real-time lead-time variance tracking, releasing trapped working capital across global distribution nodes.
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-white border-2 border-slate-200 shadow-sm hover:border-[#0070C0]/50 transition-all space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0070C0] flex items-center justify-center border border-sky-100 shrink-0">
                    <Workflow className="w-4 h-4 text-[#0070C0]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-950">
                    Closed-Loop SAP S/4HANA Order Dispatch
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  Prescriptive optimization models directly generate Purchase Requisitions and stock transfer orders via clean core OData APIs without human transcription errors.
                </p>
              </div>

              {/* Quote Box (Exact Match to Generative AI Page) */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-100 border-l-4 border-[#0070C0] text-slate-800">
                <div className="flex items-start gap-3">
                  <Eye className="w-4 h-4 text-[#0070C0] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="text-xs sm:text-sm font-semibold text-slate-800 italic leading-snug">
                      "Predictive AI moves modern enterprises from retroactive hindsight to proactive foresight, optimizing capital and eliminating supply disruptions before they occur."
                    </p>
                    <p className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                      Knooviq Supply Chain & Predictive Intelligence Practice
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Deep-Dive Visual Card (Image 2 of 4) + Step Switcher */}
            <div className="lg:col-span-6 space-y-3.5">
              <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden border-2 border-slate-300 shadow-xl bg-slate-900 group">
                <img
                  src="/images/predictive_ai_hero.jpg"
                  alt="Knooviq Enterprise Predictive AI Command Center"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3 px-3 py-1.5 rounded-lg bg-slate-900/90 backdrop-blur-md border border-cyan-400/50 text-xs font-mono font-bold text-cyan-300 shadow-sm flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
                  <span>ACTIVE ARCHITECTURE: {journeySteps[activeJourneyStep].label.toUpperCase()}</span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white space-y-1">
                  <div className="text-xs sm:text-sm font-mono font-bold text-cyan-300">{journeySteps[activeJourneyStep].tech}</div>
                  <p className="text-xs sm:text-sm text-slate-100 font-medium line-clamp-2 leading-relaxed">{journeySteps[activeJourneyStep].desc}</p>
                </div>
              </div>

              {/* 6 Step Switcher Buttons (Exact Same Font & Size as Generative AI) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {journeySteps.map((step, idx) => (
                  <button
                    key={step.id}
                    onClick={() => setActiveJourneyStep(idx)}
                    className={`p-2.5 rounded-xl border text-left transition-all ${
                      activeJourneyStep === idx
                        ? 'bg-[#0070C0] text-white border-[#0070C0] shadow-md shadow-sky-950/20'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="text-[10px] font-mono font-bold uppercase tracking-wider opacity-80">
                      STEP 0{idx + 1}
                    </div>
                    <div className="text-xs font-bold truncate mt-0.5">
                      {step.label}
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: GOVERNANCE RISKS & BOTTLENECKS (Exact Same Font as Generative AI)
          ========================================================================= */}
      <section className="py-14 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10 sm:mb-12">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#0070C0] block mb-2">
              Overcoming Legacy Vulnerabilities
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight leading-tight">
              Enterprise Planning Bottlenecks & Algorithmic Remedies
            </h2>
            <p className="mt-3 text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
              Why traditional forecasting methods fail during market volatility and how modern Clean Core predictive engineering eliminates operational latency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((c, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border-2 border-slate-200 hover:border-[#0070C0]/50 transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-sky-50 text-[#0070C0] border border-sky-100">
                      {c.tag}
                    </span>
                    <c.icon className="w-4 h-4 text-[#0070C0] group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-950 group-hover:text-[#0070C0] transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {c.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200 text-[11px] font-mono font-bold text-[#0070C0] flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>{c.footer}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: CYBERNETIC COCKPIT RADIAL WHEEL
          ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-950 text-white relative overflow-hidden border-y border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,112,192,0.15)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-mono font-bold text-cyan-300">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>PREDICTIVE COCKPIT ENGINE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
              Knooviq Predictive & Prescriptive Architecture
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              8 interlocking core engines powering real-time demand sensing, dynamic safety buffers, and closed-loop SAP execution.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left 4 Capability Cards */}
            <div className="lg:col-span-3 space-y-3 order-2 lg:order-1">
              {wheelSegments.slice(4, 8).map((seg, idx) => {
                const actualIndex = idx + 4;
                const isSelected = activeWheelIndex === actualIndex;
                const isHovered = hoveredWheelIndex === actualIndex;
                return (
                  <div
                    key={seg.id}
                    onClick={() => {
                      setActiveWheelIndex(actualIndex);
                      setIsAutoRotating(false);
                    }}
                    onMouseEnter={() => setHoveredWheelIndex(actualIndex)}
                    onMouseLeave={() => setHoveredWheelIndex(null)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer text-left ${
                      isSelected || isHovered
                        ? 'bg-slate-900 border-cyan-400 shadow-lg shadow-cyan-950/50 scale-[1.02]'
                        : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${seg.textColor}`}>
                        {seg.badge}
                      </span>
                      <seg.icon className={`w-3.5 h-3.5 ${seg.textColor}`} />
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-white leading-snug">
                      {seg.title}
                    </div>
                    <div className="text-[11px] font-mono text-cyan-300/80 mt-1">
                      &bull; {seg.metric}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Center: Interlocking Circular Chevron SVG Wheel */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center order-1 lg:order-2">
              <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] lg:w-[420px] lg:h-[420px] select-none">
                <svg viewBox="0 0 500 500" className="w-full h-full filter drop-shadow-2xl">
                  {wheelSegments.map((seg, idx) => {
                    const isSelected = activeWheelIndex === idx;
                    const isHovered = hoveredWheelIndex === idx;
                    const coords = getIconCoords(idx);
                    const SegIcon = seg.icon;

                    return (
                      <g
                        key={seg.id}
                        className="cursor-pointer transition-all duration-300"
                        onClick={() => {
                          setActiveWheelIndex(idx);
                          setIsAutoRotating(false);
                        }}
                        onMouseEnter={() => setHoveredWheelIndex(idx)}
                        onMouseLeave={() => setHoveredWheelIndex(null)}
                      >
                        <path
                          d={getChevronPath(idx)}
                          fill={isSelected || isHovered ? seg.color : '#0f172a'}
                          stroke={isSelected || isHovered ? '#38bdf8' : '#334155'}
                          strokeWidth={isSelected || isHovered ? '2.5' : '1.5'}
                          className="transition-colors duration-300"
                        />
                        <foreignObject
                          x={coords.x - 14}
                          y={coords.y - 14}
                          width="28"
                          height="28"
                          className="pointer-events-none"
                        >
                          <div className="w-full h-full flex items-center justify-center">
                            <SegIcon
                              className={`w-4 h-4 ${
                                isSelected || isHovered ? 'text-white' : seg.textColor
                              }`}
                            />
                          </div>
                        </foreignObject>
                      </g>
                    );
                  })}

                  {/* Center Hub */}
                  <circle cx="250" cy="250" r="105" fill="#020617" stroke="#38bdf8" strokeWidth="2" />
                  <circle cx="250" cy="250" r="95" fill="#0f172a" stroke="#1e293b" strokeWidth="1.5" />
                </svg>

                {/* Center Hub Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center pointer-events-none">
                  <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-widest">
                    {wheelSegments[activeWheelIndex].badge}
                  </span>
                  <div className="text-sm sm:text-base font-bold text-white leading-tight mt-1 line-clamp-2">
                    {wheelSegments[activeWheelIndex].title}
                  </div>
                  <div className="text-[10px] font-mono text-emerald-400 mt-1">
                    {wheelSegments[activeWheelIndex].metric}
                  </div>
                </div>
              </div>

              {/* Pause/Resume Auto-Rotation Toggle */}
              <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
                <button
                  type="button"
                  onClick={() => setIsAutoRotating(!isAutoRotating)}
                  className="px-3 py-1 rounded-full bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-300 font-mono text-[11px] flex items-center gap-1.5"
                >
                  {isAutoRotating ? (
                    <>
                      <Pause className="w-3 h-3 text-cyan-400" />
                      <span>PAUSE ROTATION</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3 h-3 text-emerald-400" />
                      <span>RESUME ROTATION</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right 4 Capability Cards */}
            <div className="lg:col-span-3 space-y-3 order-3">
              {wheelSegments.slice(0, 4).map((seg, idx) => {
                const isSelected = activeWheelIndex === idx;
                const isHovered = hoveredWheelIndex === idx;
                return (
                  <div
                    key={seg.id}
                    onClick={() => {
                      setActiveWheelIndex(idx);
                      setIsAutoRotating(false);
                    }}
                    onMouseEnter={() => setHoveredWheelIndex(idx)}
                    onMouseLeave={() => setHoveredWheelIndex(null)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer text-left ${
                      isSelected || isHovered
                        ? 'bg-slate-900 border-cyan-400 shadow-lg shadow-cyan-950/50 scale-[1.02]'
                        : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${seg.textColor}`}>
                        {seg.badge}
                      </span>
                      <seg.icon className={`w-3.5 h-3.5 ${seg.textColor}`} />
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-white leading-snug">
                      {seg.title}
                    </div>
                    <div className="text-[11px] font-mono text-cyan-300/80 mt-1">
                      &bull; {seg.metric}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: CLEAN CORE ARCHITECTURE BLUEPRINT (Image 3 of 4 - Same Layout as Generative AI)
          ========================================================================= */}
      <section className="py-14 sm:py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#0070C0] block mb-2">
              Clean Core Architecture Fabric
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight leading-tight">
              Clean Core Predictive Fabric & Time-Series Engine Architecture
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
              In-memory statistical execution, exogenous sensor integration, and zero-downtime SAP IBP reconciliation without core ERP modifications.
            </p>
          </div>

          {/* Architecture Neural Mesh Visual Card (Image 3 of 4) */}
          <div className="rounded-3xl overflow-hidden border-2 border-slate-200 bg-slate-950 shadow-xl relative group">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7 relative h-72 sm:h-80 lg:h-96 overflow-hidden">
                <img
                  src="/images/predictive_ai_architecture_mesh.jpg"
                  alt="Enterprise Predictive AI Architecture Blueprint"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-slate-950/90 hidden lg:block pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent lg:hidden pointer-events-none" />
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-slate-950/80 backdrop-blur-md border border-cyan-400/40 text-xs font-mono font-bold text-cyan-300 shadow-sm flex items-center gap-1.5">
                  <Database className="w-4 h-4 text-cyan-400" />
                  <span>PREDICTIVE FABRIC BLUEPRINT</span>
                </div>
              </div>
              <div className="lg:col-span-5 p-6 sm:p-8 space-y-4 text-white">
                <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
                  Clean Core Predictive Fabric
                </div>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white leading-snug">
                  SAP IBP Time-Series Ingestion & Prescriptive Action Mesh
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Knooviq integrates SAP Integrated Business Planning and S/4HANA CDS Views directly into distributed time-series feature stores, running in-memory HANA PAL algorithms without moving sensitive master data outside your sovereign boundary.
                </p>
                <div className="pt-2 grid grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-cyan-400 block font-bold">IN-DATABASE</span>
                    <span className="text-slate-300 text-[11px]">HANA APL / PAL</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-emerald-400 block font-bold">CLEAN CORE</span>
                    <span className="text-slate-300 text-[11px]">OData v4 Direct Sync</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 6 Architecture Foundation Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {foundationCards.map((card, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border-2 border-slate-200 hover:border-[#0070C0]/50 transition-all flex flex-col justify-between space-y-4 shadow-sm"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-sky-50 text-[#0070C0] border border-sky-100">
                      {card.tag}
                    </span>
                    <card.icon className="w-4 h-4 text-[#0070C0]" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-950">
                    {card.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {card.desc}
                  </p>
                </div>
                <div className="space-y-1.5 pt-3 border-t border-slate-100">
                  {card.bullets.map((b, bIdx) => (
                    <div key={bIdx} className="text-xs text-slate-700 flex items-center gap-1.5 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: MODULAR SOLUTIONS (3x3 Grid - EXACT Generative AI Card Format, NO Images)
          ========================================================================= */}
      <section className="py-14 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="max-w-3xl">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#0070C0] block mb-2">
                Production-Ready Blueprints
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight leading-tight">
                Modular Enterprise Predictive AI Solutions
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium mt-2">
                Standardized enterprise accelerators pre-configured for rapid deployment across supply chain, operations, and finance.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 border border-slate-200 self-start sm:self-auto shrink-0">
              {['ALL', 'DEMAND', 'OPS', 'RISK'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveSolutionCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                    activeSolutionCategory === cat
                      ? 'bg-[#0070C0] text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* 3x3 Grid - EXACT Generative AI Card Format (NO Images) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSolutions.map((sol, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border-2 border-slate-200 hover:border-[#0070C0]/50 transition-all flex flex-col justify-between space-y-4 group shadow-sm"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded border bg-sky-50 text-[#0070C0] border-sky-100">
                      {sol.tag}
                    </span>
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-sky-50 text-[#0070C0] border border-sky-100">
                      <sol.icon className="w-4 h-4 text-[#0070C0]" />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-950 group-hover:text-[#0070C0] transition-colors leading-snug">
                    {sol.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {sol.description}
                  </p>
                </div>

                <div className="space-y-2 pt-3 border-t border-slate-100">
                  {sol.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="text-xs text-slate-700 flex items-center gap-1.5 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                  
                  <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-[#0070C0] font-bold">
                    <span>SAP Clean Core & IBP Compatible</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 8: VALUE ARCHITECTURE SCORECARD (ZERO numbers/percentages)
          ========================================================================= */}
      <section className="py-14 sm:py-16 lg:py-20 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,112,192,0.15)_0%,transparent_60%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10 sm:space-y-12">
          
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-cyan-400 block mb-2">
              Enterprise Value Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
              Predictive AI Strategic Impact Scorecard
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal mt-2">
              Transforming uncertain forward projections into deterministic operational execution, capital efficiency, and audit-ready explainability.
            </p>
          </div>

          {/* 4 Scorecard Columns (ZERO numbers/percentages - All Qualitative Badges) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strategicPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-400/50 transition-all flex flex-col justify-between space-y-4 shadow-lg group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                      {pillar.category}
                    </span>
                    <div className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold border ${pillar.statusColor}`}>
                      {pillar.statusBadge}
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>

                <div className="space-y-2 pt-3 border-t border-slate-800">
                  {pillar.points.map((pt, pIdx) => (
                    <div key={pIdx} className="text-xs text-slate-200 flex items-start gap-1.5 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 9: REAL-TIME INFERENCE & DRIFT SANDBOX (Image 4 of 4 - Zero Gap Above/Below)
          ========================================================================= */}
      <section className="py-14 sm:py-16 lg:py-20 bg-slate-900 border-t border-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-cyan-400 block mb-2">
              Interactive Execution Sandbox
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
              Real-Time Predictive Forecasting & Demand Sensing Console
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal mt-2">
              Explore how Knooviq ingests continuous POS telemetry, calculates dynamic safety buffers, and generates automated SAP S/4HANA replenishment orders.
            </p>
          </div>

          {/* Interactive Tab Switcher */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-slate-950 border border-slate-800 self-start">
            <button
              onClick={() => setActiveDocTab('demand')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2 ${
                activeDocTab === 'demand'
                  ? 'bg-[#0070C0] text-white shadow-md shadow-sky-950/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>MULTI-ECHELON DEMAND SENSING</span>
            </button>

            <button
              onClick={() => setActiveDocTab('inventory')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2 ${
                activeDocTab === 'inventory'
                  ? 'bg-[#0070C0] text-white shadow-md shadow-sky-950/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Gauge className="w-3.5 h-3.5" />
              <span>DYNAMIC SAFETY STOCK OPTIMIZER</span>
            </button>

            <button
              onClick={() => setActiveDocTab('maintenance')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2 ${
                activeDocTab === 'maintenance'
                  ? 'bg-[#0070C0] text-white shadow-md shadow-sky-950/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              <span>ASSET REMAINING USEFUL LIFE (RUL)</span>
            </button>
          </div>

          {/* Sandbox Terminal Box */}
          <div className="p-4 sm:p-6 rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl space-y-4">
            
            {/* Top Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {auditDocuments[activeDocTab].title}
                  </h3>
                  <span className="text-[11px] sm:text-xs text-slate-400">
                    &bull; {auditDocuments[activeDocTab].fileInfo}
                  </span>
                </div>
              </div>

              {/* Status Badge */}
              <div className="flex items-center gap-2 shrink-0">
                <div className={`px-2.5 py-1 rounded-md border text-[11px] font-mono font-bold flex items-center gap-1.5 shadow-sm ${auditDocuments[activeDocTab].riskBadgeColor}`}>
                  <AlertTriangle className="w-3 h-3 shrink-0" />
                  <span>{auditDocuments[activeDocTab].riskLevel}</span>
                </div>
              </div>
            </div>

            {/* Main Showcase Grid: Visual Image (Image 4 of 4) + Structured Extracted Findings */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
              
              {/* Left Column: Visual AI Document Scan (Image 4 of 4 - Zero Dead Space Above or Below) */}
              <div className="lg:col-span-5 relative rounded-xl overflow-hidden border border-cyan-400/40 shadow-lg group min-h-[260px] sm:min-h-[300px] lg:min-h-full">
                <img
                  src="/images/predictive_ai_sandbox_execution.jpg"
                  alt="Enterprise Predictive AI Real-Time Demand Sensing & Forecast Console"
                  className="absolute inset-0 w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />
                
                <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-cyan-400/50 text-[10px] font-mono font-bold text-cyan-300 flex items-center gap-1.5 z-10 shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Probabilistic Demand Sensing</span>
                </div>

                <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2.5 rounded-lg bg-black/85 backdrop-blur-md border border-white/15 text-white text-left z-10 space-y-0.5">
                  <span className="text-[10px] font-mono font-bold text-cyan-300 uppercase tracking-wider block">
                    Zero Lag Ingestion
                  </span>
                  <div className="text-xs font-bold text-emerald-300">
                    Calibrated P10/P50/P90 Confidence Bands with Closed-Loop Execution
                  </div>
                </div>
              </div>

              {/* Right Column: High-Visibility Extracted Intelligence Cards */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-2">
                
                {/* 3 Compact High-Contrast Findings Boxes */}
                <div className="space-y-1.5">
                  {auditDocuments[activeDocTab].findings.map((finding, fIdx) => (
                    <div
                      key={fIdx}
                      className="p-2 sm:p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-cyan-400/40 transition-colors text-left space-y-0.5"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/60 uppercase">
                            {finding.tag}
                          </span>
                          <span className="text-xs font-bold text-white leading-tight">
                            {finding.title}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-emerald-400 font-bold shrink-0">
                          {finding.confidence}
                        </span>
                      </div>
                      
                      <p className="text-[11px] text-slate-300 leading-snug font-normal line-clamp-2">
                        {finding.desc}
                      </p>

                      <div className="pt-0.5 flex items-center justify-between text-[10px] font-mono text-slate-400">
                        <span className="text-cyan-300 font-semibold">&bull; {finding.metricBadge}</span>
                        <span className="text-slate-500">Autonomous Sentinel Validated</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Recommendation Box (Compact High-Contrast) */}
                <div className="p-2.5 sm:p-3 rounded-lg bg-gradient-to-r from-cyan-950/80 to-blue-950/80 border border-cyan-500/30 text-left space-y-1 shadow-inner">
                  <div className="flex items-center gap-1 text-[11px] font-mono font-bold text-cyan-300 uppercase tracking-wider">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                    <span>EXECUTIVE ACTION RECOMMENDATION</span>
                  </div>
                  <p className="text-xs text-white font-medium leading-relaxed">
                    {auditDocuments[activeDocTab].recommendation}
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 11: FINAL CTA (Identical to Generative AI Page)
          ========================================================================= */}
      <section className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-gradient-to-r from-[#003B73] via-[#005B9E] to-[#0070C0] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-mono font-bold uppercase tracking-widest text-cyan-200 backdrop-blur-sm shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            <span>DEPLOY ENTERPRISE PREDICTIVE AI</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Operationalize Enterprise Predictive AI?
          </h2>

          <p className="text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed font-normal">
            Schedule an architecture discovery session with our SAP IBP, predictive analytics, and Clean Core specialists to benchmark forecast accuracy and working capital optimization.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => onOpenContact?.('Predictive AI Practice Consultation')}
              className="px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-[#003B73] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-2xl shadow-black/25 transition-all flex items-center gap-2 group"
            >
              <span>Consult Our Predictive AI Architects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#0070C0]" />
            </button>

            <Link
              to="/digital-intelligence"
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/30 text-white text-xs sm:text-sm font-bold uppercase tracking-wider backdrop-blur-md transition-all flex items-center gap-2"
            >
              <span>Explore Digital Intelligence</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PredictiveAiPracticePage;
