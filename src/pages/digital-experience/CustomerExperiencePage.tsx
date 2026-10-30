import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Compass,
  Eye,
  Globe2,
  MessageSquare,
  ShoppingBag,
  HeartHandshake,
  Brain,
  Zap,
  Users,
  Smartphone,
  LifeBuoy,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  XCircle,
  Activity,
  Layers,
  Search,
  Award,
  Target,
  TrendingDown,
  RefreshCw,
  Play,
  Pause,
  Radio,
  Maximize2,
  X,
  FileCheck
} from 'lucide-react';

interface CustomerExperiencePageProps {
  onOpenContact?: (defaultTopic?: string) => void;
}

export const CustomerExperiencePage: React.FC<CustomerExperiencePageProps> = ({
  onOpenContact
}) => {
  // Lightbox modal state for hero visual
  const [isHeroModalOpen, setIsHeroModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsHeroModalOpen(false);
    };
    if (isHeroModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isHeroModalOpen]);

  // Update document title for SEO
  useEffect(() => {
    document.title = 'Enterprise Customer Experience (CX) & Omnichannel Architecture | KNOOVIQ';
  }, []);

  // State for Section 2: Executive Perspective Interactive Evolution
  const [activeJourneyStep, setActiveJourneyStep] = useState(0);

  // State for Section 4: Circular Chevron Ecosystem Wheel
  const [hoveredWheelIndex, setHoveredWheelIndex] = useState<number | null>(0);
  const [isAutoPlaying] = useState<boolean>(true);

  // Auto-tour rotation for Section 4
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setHoveredWheelIndex((prev) => (prev === null ? 0 : (prev + 1) % 8));
    }, 3200);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // State for Section 5: Architecture Sandbox Tab
  const [activeSandboxTab, setActiveSandboxTab] = useState<'comparison' | 'layers' | 'telemetry'>('comparison');

  // State for Section 5: Telemetry Chamber tabs
  const [activeTelemetryTab, setActiveTelemetryTab] = useState<'b2b' | 'b2c' | 'omni'>('b2b');

  // State for Section 7: FAQ Accordion
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Section 4: Circular Chevron Segments (8 Interlocking Layers)
  const wheelSegments = [
    {
      id: 'journey-orchestration',
      shortTag: 'JOURNEY',
      title: 'Unified Journey Discovery & Orchestration',
      desc: 'Continuous multi-touchpoint customer pathway mapping across web, mobile, partner portals, and physical channels.',
      badge: 'JOURNEY MAPPING',
      metric: 'End-to-End Pathway Transparency',
      side: 'right',
      color: '#0070C0',
      textColor: 'text-sky-400',
      bgGlow: 'rgba(0, 112, 192, 0.35)',
      icon: Compass
    },
    {
      id: 'behavioral-sensing',
      shortTag: 'INTENT',
      title: 'Real-Time Intent & Behavioral Sensing',
      desc: 'Sub-second digital telemetry capturing customer micro-interactions to predict purchasing and support intent.',
      badge: 'INTENT ENGINE',
      metric: 'Proactive Engagement Detection',
      side: 'right',
      color: '#0284C7',
      textColor: 'text-cyan-400',
      bgGlow: 'rgba(2, 132, 199, 0.35)',
      icon: Eye
    },
    {
      id: 'omnichannel-mesh',
      shortTag: 'OMNI',
      title: 'Synchronized Omnichannel Mesh',
      desc: 'Universal session state persistence preserving active cart items, client history, and context across all channels.',
      badge: 'CHANNEL HARMONY',
      metric: 'Zero Context Drop Across Channels',
      side: 'right',
      color: '#06B6D4',
      textColor: 'text-cyan-300',
      bgGlow: 'rgba(6, 182, 212, 0.35)',
      icon: Globe2
    },
    {
      id: 'self-service',
      shortTag: 'CARE',
      title: 'Intelligent Autonomous Self-Service',
      desc: 'Conversational AI assistants and unified client cockpits for instant order tracking, dispute logging, and invoice retrieval.',
      badge: 'TOUCHLESS RESOLUTION',
      metric: 'Instant Resolution Velocity',
      side: 'right',
      color: '#10B981',
      textColor: 'text-emerald-400',
      bgGlow: 'rgba(16, 185, 129, 0.35)',
      icon: MessageSquare
    },
    {
      id: 'b2b-commerce',
      shortTag: 'COMMERCE',
      title: 'Frictionless B2B Digital Commerce',
      desc: 'Consumer-grade ordering portals engineered for complex contract pricing, multi-tier approvals, and live ERP stock.',
      badge: 'COMMERCE FABRIC',
      metric: 'Accelerated Order Placement',
      side: 'left',
      color: '#F59E0B',
      textColor: 'text-amber-400',
      bgGlow: 'rgba(245, 158, 11, 0.35)',
      icon: ShoppingBag
    },
    {
      id: 'voice-of-customer',
      shortTag: 'SENTINEL',
      title: 'Continuous Voice of Customer (VoC)',
      desc: 'Real-time sentiment scoring and automated early-warning telemetry detecting customer friction across active transactions.',
      badge: 'SENTIMENT SENTINEL',
      metric: 'Automated Retention Interventions',
      side: 'left',
      color: '#EC4899',
      textColor: 'text-pink-400',
      bgGlow: 'rgba(236, 72, 153, 0.35)',
      icon: HeartHandshake
    },
    {
      id: 'predictive-recommendations',
      shortTag: 'AI RE-RANK',
      title: 'Predictive Next-Best-Action Models',
      desc: 'Contextual machine learning algorithms delivering real-time product recommendations, reorder prompts, and content.',
      badge: 'CONTEXTUAL AI',
      metric: 'Hyper-Personalized Interactions',
      side: 'left',
      color: '#8B5CF6',
      textColor: 'text-purple-400',
      bgGlow: 'rgba(139, 92, 246, 0.35)',
      icon: Brain
    },
    {
      id: 'closed-loop-erp',
      shortTag: 'CORE ERP',
      title: 'Closed-Loop ERP Service Execution',
      desc: 'Direct transactional API pushdown reserving warehouse inventory, dispatching orders, and clearing billing disputes.',
      badge: 'CORE ERP SYNC',
      metric: 'Straight-Through Fulfillment',
      side: 'left',
      color: '#6366F1',
      textColor: 'text-indigo-400',
      bgGlow: 'rgba(99, 102, 241, 0.35)',
      icon: Zap
    }
  ];

  // Calculation for circular chevron SVG path
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
      id: 'omnichannel-orchestration',
      label: 'Omnichannel Journey Mesh',
      sublabel: 'Zero Context Drop',
      desc: 'Unifying fragmented client touchpoints across web, mobile, partner portals, and physical service centers into a single transparent interaction graph with zero context loss.',
      tech: 'Enterprise Omnichannel Orchestration Framework',
      icon: Compass,
      highlights: [
        'Persistent Cross-Channel Session Continuity',
        'Unified Interaction Event Telemetry',
        'Deterministic Customer Journey Graph'
      ]
    },
    {
      id: 'customer-360',
      label: 'Unified Customer 360',
      sublabel: 'Deterministic Identity',
      desc: 'Harmonizing disparate CRM records, anonymous web sessions, corporate account hierarchies, and historical purchases into a single, real-time golden customer profile.',
      tech: 'Customer Identity & Entity Resolution Mesh',
      icon: Users,
      highlights: [
        'Golden Account Profile Harmonization',
        'Cross-Platform Entity Resolution',
        'Deterministic Lineage & Consent Compliance'
      ]
    },
    {
      id: 'headless-experience',
      label: 'Headless Experience Tier',
      sublabel: 'Decoupled Frontends',
      desc: 'Decoupling client presentation layers from rigid ERP backbones via high-velocity micro-frontends, edge-rendered APIs, and reusable design systems.',
      tech: 'Modern Edge API & Headless Commerce Mesh',
      icon: Smartphone,
      highlights: [
        'Sub-Second Edge Page Rendering',
        'Independent Frontend Release Cycles',
        'Universal Design Token Synchronization'
      ]
    },
    {
      id: 'contextual-intelligence',
      label: 'Predictive Next-Best-Action',
      sublabel: 'Real-Time Intent AI',
      desc: 'Analyzing real-time clickstream events and past transaction telemetry to deliver contextually tailored product recommendations and proactive service prompts.',
      tech: 'Streaming Behavioral Re-Ranking Engine',
      icon: Brain,
      highlights: [
        'Sub-Second Contextual Re-Ranking',
        'Algorithmic Intent Sensing',
        'Dynamic Quote & Reorder Personalization'
      ]
    },
    {
      id: 'core-erp-execution',
      label: 'Straight-Through ERP Sync',
      sublabel: 'Clean Core Integration',
      desc: 'Direct transactional API pipelines connecting customer storefronts to SAP S/4HANA OData services for live inventory reservation and automated order placement.',
      tech: 'SAP S/4HANA OData Event Mesh',
      icon: Zap,
      highlights: [
        'Live Available-to-Promise (ATP) Inventory Checks',
        'Zero-Latency Order Allocation to Plants',
        'Touchless Invoice & Dispute Clearing'
      ]
    },
    {
      id: 'voice-of-customer-flow',
      label: 'Continuous Voice of Customer',
      sublabel: 'Sentiment Early Warning',
      desc: 'Continuous feedback telemetry capturing satisfaction sentiment across transactional touchpoints to trigger automated service recovery workflows for at-risk accounts.',
      tech: 'Intraday Sentiment Sentinel Engine',
      icon: HeartHandshake,
      highlights: [
        'Intraday NPS & CSAT Telemetry Triggers',
        'Automated Executive Escalation Protocols',
        'Closed-Loop Remediation Tracking'
      ]
    }
  ];

  // Section 3: Strategic Enterprise Challenges
  const cxChallenges = [
    {
      icon: Globe2,
      tag: 'CHANNEL FRAGMENTATION',
      title: 'Disconnected Touchpoints & Context Loss',
      desc: 'Customers encounter jarring experience gaps when shifting between mobile apps, sales reps, and customer care desks, forcing repetitive credential re-entry and explanation.',
      footer: 'Unified Omnichannel Session Continuity'
    },
    {
      icon: Zap,
      tag: 'EXECUTION LATENCY',
      title: 'Brittle Front-to-Back ERP Integration',
      desc: 'Front-end commerce portals decoupled from operational ERP backbones cause stale inventory displays, delayed order processing, and post-purchase fulfillment friction.',
      footer: 'Real-Time SAP S/4HANA OData Connectors'
    },
    {
      icon: Users,
      tag: 'IDENTITY DRIFT',
      title: 'Fragmented Customer Records & Blind Spots',
      desc: 'Disparate CRM, eCommerce, and billing databases store conflicting contact definitions and transaction histories, obstructing a true single customer view.',
      footer: 'Deterministic Customer 360 Identity Graph'
    },
    {
      icon: ShoppingBag,
      tag: 'B2B COMPLEXITY',
      title: 'Rigid Procurement & Pricing Bottlenecks',
      desc: 'Complex corporate contract conditions, multi-tiered approval hierarchies, and punchout catalogs fail when forced through generic retail storefronts.',
      footer: 'Enterprise B2B Commerce Architecture'
    },
    {
      icon: LifeBuoy,
      tag: 'SERVICE DEBT',
      title: 'Multi-Hop Escalations & Unresolved Cases',
      desc: 'Service agents lack unified interaction histories and transactional power, bouncing frustrated corporate clients between departments without resolution.',
      footer: 'Autonomous Agentic Service Cockpit'
    },
    {
      icon: HeartHandshake,
      tag: 'RETENTION BLINDNESS',
      title: 'Lagging Surveys & Unmonitored Churn Risk',
      desc: 'Quarterly surveys arrive too late to prevent customer attrition, leaving revenue leaders blind to intraday satisfaction dips across key commercial accounts.',
      footer: 'Intraday Sentiment AI & Proactive Care'
    }
  ];

  // Section 5: Side-by-side Architectural Comparison Matrix
  const architecturalComparison = [
    {
      dimension: 'Touchpoint Continuity',
      legacyApproach: 'Siloed web and mobile applications with isolated session states, forcing repetitive logins and basket drop-offs.',
      modernApproach: 'Headless omnichannel mesh with unified session continuity and zero-latency context preservation.',
      statusBadge: 'ZERO CONTEXT LOSS'
    },
    {
      dimension: 'Core ERP Synchronization',
      legacyApproach: 'Overnight batch synchronization causing inventory discrepancies, out-of-stock orders, and fulfillment friction.',
      modernApproach: 'Direct bi-directional SAP S/4HANA OData event mesh executing live stock allocation and order creation.',
      statusBadge: 'REAL-TIME CORE'
    },
    {
      dimension: 'Customer 360 Identity',
      legacyApproach: 'Conflicting account records split across disparate CRM, billing, and marketing databases with zero lineage.',
      modernApproach: 'Harmonized real-time identity graph delivering deterministic golden customer profiles enterprise-wide.',
      statusBadge: 'UNIFIED IDENTITY'
    },
    {
      dimension: 'B2B Commerce Experience',
      legacyApproach: 'Manual spreadsheet ordering, disconnected contract quotes, and multi-day approval delays.',
      modernApproach: 'Consumer-grade B2B portal with automated contract conditions, punchout catalogs, and one-click approvals.',
      statusBadge: 'FRICTIONLESS FLOW'
    },
    {
      dimension: 'Customer Care & Resolution',
      legacyApproach: 'Siloed ticketing desks requiring multiple ERP screen toggles and repetitive client explanations.',
      modernApproach: 'Intelligent service cockpit with full interaction history, conversational AI, and 1-click ERP corrections.',
      statusBadge: 'FIRST-TOUCH FINALITY'
    }
  ];

  // Section 5: Diagnostic Chamber Telemetry Data
  const diagnosticProcesses = {
    b2b: {
      id: 'b2b',
      tabLabel: 'Enterprise B2B Commerce',
      title: 'Global B2B Customer Portal & Reordering Flow',
      processInfo: 'Enterprise Client Accounts • Multi-Tier Approval Workflows',
      conformanceLevel: 'FRICTIONLESS REORDERING • ZERO APPROVAL DELAYS',
      riskBadgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/50 shadow-emerald-500/10',
      recommendation: 'Deploy automated punchout catalog validation and establish direct ERP allocation to eliminate sales order staging delays.',
      findings: [
        {
          level: 'STREAMLINED FLOW',
          levelColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
          borderColor: 'border-emerald-500/40 hover:border-emerald-400',
          title: 'Automated Contract Pricing Application',
          desc: 'Negotiated contract pricing applies automatically during portal basket creation, eliminating customer pricing disputes.',
          source: 'Module: S/4HANA Condition Master Integration'
        },
        {
          level: 'INSTANT CONTEXT',
          levelColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
          borderColor: 'border-cyan-500/40 hover:border-cyan-400',
          title: 'Real-Time Inventory Allocation Preview',
          desc: 'Purchasers view accurate warehouse stock availability prior to order submission, avoiding post-order delivery surprises.',
          source: 'System: S/4HANA ATP (Available-to-Promise) Service'
        },
        {
          level: 'FAST-PATH APPROVAL',
          levelColor: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
          borderColor: 'border-sky-500/40 hover:border-sky-400',
          title: 'Automated Corporate Approval Routing',
          desc: 'Pre-approved spend limits bypass internal client approval bottlenecks, accelerating order transmission to fulfillment hubs.',
          source: 'Governance: Dynamic Approval Hierarchy Mesh'
        }
      ]
    },
    b2c: {
      id: 'b2c',
      tabLabel: 'Direct-to-Consumer (D2C)',
      title: 'Omnichannel Consumer Engagement & Checkout',
      processInfo: 'Consumer Storefronts • Unified Mobile & Web Experiences',
      conformanceLevel: 'HIGH RETENTION VELOCITY • INSTANT CHECKOUT',
      riskBadgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-400/50 shadow-cyan-500/10',
      recommendation: 'Synchronize cart state across mobile app and web sessions while deploying instant automated returns validation.',
      findings: [
        {
          level: 'PERSISTENT BASKET',
          levelColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
          borderColor: 'border-emerald-500/40 hover:border-emerald-400',
          title: 'Unified Cross-Device Cart Synchronization',
          desc: 'Shoppers resume baskets seamlessly across mobile devices and desktop portals without item drops or session resets.',
          source: 'Fabric: Real-Time Session Continuity Engine'
        },
        {
          level: 'RAPID RESOLUTION',
          levelColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
          borderColor: 'border-cyan-500/40 hover:border-cyan-400',
          title: 'Autonomous Instant Return Authorizations',
          desc: 'Standard return requests generate pre-paid shipping documentation immediately without waiting for customer care queues.',
          source: 'Integration: Automated Reverse Logistics Protocol'
        },
        {
          level: 'TOUCHLESS DISPATCH',
          levelColor: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
          borderColor: 'border-sky-500/40 hover:border-sky-400',
          title: 'Intelligent Order Routing to Nearest Hub',
          desc: 'Orders route automatically to regional distribution hubs closest to client delivery addresses for rapid fulfillment.',
          source: 'Execution: Omnichannel Fulfillment Optimizer'
        }
      ]
    },
    omni: {
      id: 'omni',
      tabLabel: 'Customer Service & Support',
      title: 'Customer Service Center & Case Escalation',
      processInfo: 'Omnichannel Contact Center • Live ERP Workflow Integration',
      conformanceLevel: 'FIRST-TOUCH FINALITY • SEAMLESS ESCALATION',
      riskBadgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/50 shadow-emerald-500/10',
      recommendation: 'Empower frontline support agents with integrated ERP transactional actions to resolve inquiries within initial contact.',
      findings: [
        {
          level: 'UNIFIED TELEMETRY',
          levelColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
          borderColor: 'border-emerald-500/40 hover:border-emerald-400',
          title: 'Complete Interaction History Available Instantly',
          desc: 'Service agents review all past purchases, service tickets, and portal visits in a unified single screen upon call connection.',
          source: 'Cockpit: Unified Agent Experience Console'
        },
        {
          level: 'TOUCHLESS ACTION',
          levelColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
          borderColor: 'border-cyan-500/40 hover:border-cyan-400',
          title: 'One-Click In-App Order Adjustments',
          desc: 'Agents make address modifications, item substitutions, or expedite requests directly without toggling multiple ERP windows.',
          source: 'Action: SAP BTP Guided Agent Workflows'
        },
        {
          level: 'PROACTIVE SERVICE',
          levelColor: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
          borderColor: 'border-sky-500/40 hover:border-sky-400',
          title: 'Predictive Transit Delay Notification',
          desc: 'Automated alerts notify customers of logistics delays with proactive resolution offers before clients contact support.',
          source: 'Sentinel: Logistics Exception Proactive Messenger'
        }
      ]
    }
  };

  // Section 6: Phased Transformation Stages
  const transformationPhases = [
    {
      phase: 'STAGE ONE',
      title: 'Journey Discovery & Experience Friction Audit',
      focus: 'Comprehensive baseline assessment of cross-channel touchpoint drop-offs, identity fragmentation, ERP latency bottlenecks, and customer satisfaction friction.',
      deliverable: 'Omnichannel Experience Blueprint & Friction Heatmap',
      icon: Search
    },
    {
      phase: 'STAGE TWO',
      title: 'Customer 360 & Headless Architecture Blueprint',
      focus: 'Formulation of canonical customer identity graphs, decoupled headless micro-frontend topologies, and real-time behavioral telemetry models.',
      deliverable: 'Customer 360 Schema & Headless Experience Specifications',
      icon: Layers
    },
    {
      phase: 'STAGE THREE',
      title: 'Closed-Loop Core ERP Integration & Portal Deployment',
      focus: 'Deployment of bi-directional SAP S/4HANA OData event mesh connectors, B2B purchasing storefronts, and conversational AI self-service cockpits.',
      deliverable: 'Live Production Omnichannel Mesh & Self-Service Portals',
      icon: Zap
    },
    {
      phase: 'STAGE FOUR',
      title: 'Autonomous Experience Intelligence & Value Realization',
      focus: 'Operationalization of predictive next-best-action models, intraday Voice of Customer sentiment sentinels, and continuous experience governance.',
      deliverable: 'Enterprise-Wide Autonomous Experience Ecosystem',
      icon: ShieldCheck
    }
  ];

  // Section 7: Executive FAQs
  const cxStrategyFaqs = [
    {
      question: 'How does a Modern Customer Experience Strategy differ from traditional CRM implementations?',
      answer: 'Traditional CRM projects typically function as static databases of historical customer contacts with siloed data entry. A modern Enterprise Customer Experience Strategy establishes a dynamic, decoupled experience mesh. It harmonizes real-time identity, synchronizes persistent sessions across web and mobile, and connects directly to operational SAP S/4HANA systems to execute live orders and resolve customer disputes in real time.'
    },
    {
      question: 'How does KNOOVIQ connect digital storefronts to core SAP S/4HANA without creating technical debt?',
      answer: 'We leverage SAP Clean Core design principles with high-performance OData APIs and event-driven SAP Integration Suite adapters. By decoupling the presentation layer from the core ERP, your commercial storefronts and mobile apps can evolve and release independently at high velocity while ensuring all transactional integrity and inventory validations remain strictly enforced inside SAP S/4HANA.'
    },
    {
      question: 'What is a Unified Customer 360 Identity Graph, and how does it eliminate channel fragmentation?',
      answer: 'A Customer 360 Identity Graph connects fragmented behavioral records across anonymous web interactions, mobile apps, CRM accounts, and billing systems into a single deterministic golden customer record. This ensures that when a client moves from browsing on a phone to calling customer care or placing a bulk order via a B2B portal, their entire interaction context is instantly available with zero information loss.'
    },
    {
      question: 'How does Headless Digital Experience architecture accelerate page performance and omnichannel agility?',
      answer: 'Headless architecture separates the customer-facing frontend from the backend business logic. Using modern micro-frontends, edge-computed APIs, and global CDNs, pages load almost instantaneously with sub-second response times. This decoupled structure allows marketing and digital product teams to deploy new features and localized portals rapidly without risking core transactional systems.'
    },
    {
      question: 'How does real-time sentiment telemetry prevent customer attrition in enterprise B2B accounts?',
      answer: 'Rather than waiting for delayed quarterly surveys, our Continuous Voice of Customer sentinel continuously captures behavioral and transaction signals—such as repeated order revisions, delayed shipments, or escalation tickets. When friction thresholds are breached, the system automatically alerts account directors and triggers prioritized service recovery workflows to resolve issues before churn occurs.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#0070C0] selection:text-white font-sans antialiased overflow-x-hidden">

      {/* =========================================================================
          SECTION 1: HERO SECTION (Clean, High-Contrast, Professional Static Hero)
          ========================================================================= */}
      <section className="relative w-full min-h-[620px] sm:min-h-[680px] lg:min-h-[720px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 overflow-hidden bg-slate-950 text-white">

        {/* Crisp Static Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/customer_experience_omnichannel_transformation_hero.jpg"
            alt="Enterprise Customer Experience & Omnichannel Transformation"
            className="w-full h-full object-cover object-center lg:object-right brightness-[1.02] contrast-[1.05]"
            style={{ imageRendering: '-webkit-optimize-contrast' }}
          />
        </div>

        {/* Lighter Directional Scrim for Crystal-Clear Text Readability & Brighter Visuals */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-slate-950/75 via-slate-950/45 sm:via-slate-950/20 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <div className="max-w-3xl space-y-4">

            {/* Breadcrumb Navigation & Category Tag Badge (Full Screen View removed) */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-cyan-500/40 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 shadow-md">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>KNOOVIQ DIGITAL EXPERIENCE &bull; CUSTOMER EXPERIENCE</span>
              </div>
            </div>

            {/* Static Headline with High-Contrast Typography */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.1] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
              Enterprise <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-cyan-400">
                Customer Experience &amp; Omnichannel Mesh
              </span>
            </h1>

            {/* Subtitle with High Legibility */}
            <p className="text-base sm:text-lg text-slate-100 leading-relaxed font-normal max-w-2xl pt-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
              Unified Customer 360 identity graphs, headless digital experience delivery, predictive next-best-action models, and straight-through SAP S/4HANA core execution across global enterprise touchpoints.
            </p>

            {/* Enterprise Assurance Indicators (With Interactive Hover Motion & No Buttons) */}
            <div className="pt-3 flex flex-wrap items-center gap-2.5 sm:gap-3">
              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-cyan-200 cursor-default shadow-xs"
              >
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Unified Customer 360 Fabric</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-emerald-200 cursor-default shadow-xs"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Frictionless Portals</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-sky-200 cursor-default shadow-xs"
              >
                <Zap className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Closed-Loop Core ERP Execution</span>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: EXECUTIVE PERSPECTIVE (Clean Light Corporate Theme - Large Legible Text)
          ========================================================================= */}
      <section id="experience-evolution" className="py-24 bg-gradient-to-b from-white via-[#F8FBFE] to-white border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-300 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#0070C0]">
                <Activity className="w-4 h-4 text-[#0070C0]" />
                <span>EXECUTIVE EXPERIENCE PERSPECTIVE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
                Bridging the Gap Between <span className="text-[#0070C0]">Customer Expectations &amp; Core Execution</span>
              </h2>

              <div className="border-l-4 border-[#0070C0] border-y border-r border-slate-300 pl-5 py-3.5 bg-gradient-to-r from-sky-50/80 via-sky-50/30 to-transparent rounded-r-2xl">
                <p className="text-base sm:text-lg font-semibold text-slate-800 leading-relaxed italic">
                  &ldquo;A competitive customer experience is no longer confined to beautiful digital interfaces—it requires direct, real-time synchronization between front-end consumer touchpoints and operational ERP execution backbones.&rdquo;
                </p>
              </div>

              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
                KNOOVIQ helps enterprise leadership transition away from siloed customer channels and fragile spreadsheet quoting toward unified omnichannel architectures. We connect modern headless storefronts, mobile apps, and customer care consoles directly to SAP S/4HANA digital cores, guaranteeing zero context drop and instantaneous fulfillment.
              </p>

              {/* 3 Executive Pillars (Clear, Large, Highly Legible Text) */}
              <div className="space-y-4 pt-2">
                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <Globe2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-950">Decoupled Headless Experience Mesh</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      High-performance edge micro-frontends and reusable design tokens delivered independently from underlying ERP database schemas.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-950">Deterministic Customer 360 Graph</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Unified identity resolution harmonizing CRM accounts, anonymous digital browsing, and order history into a single golden profile.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-950">Straight-Through ERP Core Sync</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Direct transactional API pushdown reserving warehouse inventory, triggering dispatch, and clearing billing disputes without manual staging.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Interactive Evolution Visual */}
            <div className="lg:col-span-6 space-y-5">

              <div
                className="relative rounded-2xl overflow-hidden border-2 border-slate-300 shadow-xl bg-slate-900 group h-96 sm:h-[440px] lg:h-[490px] w-full cursor-pointer"
                onClick={() => setActiveJourneyStep((activeJourneyStep + 1) % journeySteps.length)}
                title="Click image to advance to next architecture step"
              >
                <img
                  src="/images/bridging_gap_customer_expectations_core_execution.png"
                  alt="Bridging the Gap Between Customer Expectations & Core Execution"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-lg bg-slate-900/90 backdrop-blur-md border border-cyan-400/50 text-xs sm:text-sm font-mono font-bold text-cyan-300 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                  <span>EXPERIENCE FOCUS: {journeySteps[activeJourneyStep].label.toUpperCase()}</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1.5 p-3 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-700/80">
                  <div className="text-xs sm:text-sm font-mono font-bold text-cyan-300">{journeySteps[activeJourneyStep].tech}</div>
                  <p className="text-xs sm:text-sm text-slate-100 font-normal leading-relaxed line-clamp-2">{journeySteps[activeJourneyStep].desc}</p>
                </div>
              </div>

              {/* 6 Interactive Step Buttons (Large, Clear, High-Contrast Text) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {journeySteps.map((step, idx) => {
                  const isSelected = activeJourneyStep === idx;
                  const StepIcon = step.icon;
                  return (
                    <button
                      key={step.id}
                      type="button"
                      onClick={() => setActiveJourneyStep(idx)}
                      className={`p-3.5 rounded-2xl border text-left transition-all flex items-center gap-3 ${isSelected
                        ? 'bg-[#0070C0] text-white border-2 border-[#0070C0] shadow-md scale-[1.01]'
                        : 'bg-white text-slate-800 border border-slate-200 hover:bg-sky-50 hover:border-[#0070C0]'
                        }`}
                    >
                      <div className={`p-2 rounded-xl shrink-0 ${isSelected ? 'bg-white/20 text-white' : 'bg-sky-50 text-[#0070C0] border border-sky-200'}`}>
                        <StepIcon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs sm:text-sm font-bold truncate">{step.label}</div>
                        <div className={`text-xs truncate ${isSelected ? 'text-sky-100 font-medium' : 'text-slate-500'}`}>{step.sublabel}</div>
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
          SECTION 3: ENTERPRISE CUSTOMER CHALLENGES (Clean Slate-50 - Highly Visible Text)
          ========================================================================= */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3.5">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#0070C0] uppercase">
              ENTERPRISE FRICTION POINTS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950">
              Strategic Hurdles Facing Legacy Customer Touchpoints
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Why traditional fragmented CRM systems and decoupled portals create execution latency, customer churn, and operational overhead.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {cxChallenges.map((item, idx) => {
              const ChallengeIcon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white p-7 flex flex-col justify-between hover:border-[#0070C0] hover:shadow-xl transition-all group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 group-hover:text-[#0070C0] group-hover:bg-sky-50 transition-colors">
                        {item.tag}
                      </span>
                      <div className="p-2.5 rounded-xl bg-sky-50 text-[#0070C0] group-hover:scale-110 transition-transform">
                        <ChallengeIcon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-slate-400 font-mono text-xs">KNOOVIQ REMEDY:</span>
                    <span className="font-bold text-[#0070C0] font-mono text-xs sm:text-sm">{item.footer}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: CIRCULAR CHEVRON ECOSYSTEM (Contrasting Deep Navy Sandbox)
          ========================================================================= */}
      <section className="py-24 bg-[#0B1528] text-white border-b border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3.5">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-cyan-400 uppercase">
              INTERCONNECTED EXPERIENCE FLYWHEEL
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              The KNOOVIQ Unified Customer Experience Mesh
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Explore the eight mutually reinforcing layers of our modern customer experience foundation. Hover over any segment to inspect its architectural role.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left Segments (4 Segments) */}
            <div className="lg:col-span-3 space-y-4 order-2 lg:order-1">
              {wheelSegments.slice(4, 8).map((seg, i) => {
                const actualIndex = i + 4;
                const isHovered = hoveredWheelIndex === actualIndex;
                const SegIcon = seg.icon;
                return (
                  <div
                    key={seg.id}
                    onMouseEnter={() => setHoveredWheelIndex(actualIndex)}
                    onMouseLeave={() => setHoveredWheelIndex(null)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer ${isHovered
                      ? 'border-sky-400 bg-sky-500/20 shadow-lg shadow-sky-500/20 translate-x-1'
                      : 'border-slate-800 bg-slate-900/85 hover:border-slate-700'
                      }`}
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <SegIcon className={`w-4 h-4 ${seg.textColor}`} />
                      <span className={`text-sm font-bold ${seg.textColor}`}>{seg.title}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-2">
                      {seg.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Center Circular SVG Wheel */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center order-1 lg:order-2">
              <div className="relative w-[340px] h-[340px] sm:w-[460px] sm:h-[460px]">
                <svg viewBox="0 0 500 500" className="w-full h-full filter drop-shadow-2xl">
                  {wheelSegments.map((segment, index) => {
                    const isHovered = hoveredWheelIndex === index;
                    const pathD = getChevronPath(index);
                    const iconPos = getIconCoords(index);
                    const SegIcon = segment.icon;

                    return (
                      <g
                        key={segment.id}
                        className="cursor-pointer transition-all duration-300"
                        onMouseEnter={() => setHoveredWheelIndex(index)}
                        onMouseLeave={() => setHoveredWheelIndex(null)}
                      >
                        <path
                          d={pathD}
                          fill={segment.color}
                          fillOpacity={isHovered ? 0.95 : 0.3}
                          stroke={segment.color}
                          strokeWidth={isHovered ? 3 : 1.5}
                          className="transition-all duration-300"
                        />
                        <circle
                          cx={iconPos.x}
                          cy={iconPos.y}
                          r={18}
                          fill="#0b1324"
                          stroke={segment.color}
                          strokeWidth={2}
                          className="transition-all duration-300"
                        />
                        <foreignObject
                          x={iconPos.x - 9}
                          y={iconPos.y - 9}
                          width={18}
                          height={18}
                          className="pointer-events-none"
                        >
                          <SegIcon className={`w-4.5 h-4.5 ${segment.textColor}`} />
                        </foreignObject>
                      </g>
                    );
                  })}
                  <circle cx="250" cy="250" r="88" fill="#080e1d" stroke="#00A3E0" strokeWidth="2.5" />
                  <circle cx="250" cy="250" r="76" fill="#0a152d" stroke="#0284c7" strokeWidth="1" strokeDasharray="4 4" />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center p-6">
                  {hoveredWheelIndex !== null ? (
                    <motion.div
                      key={hoveredWheelIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-1.5"
                    >
                      <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
                        {wheelSegments[hoveredWheelIndex].badge}
                      </span>
                      <div className="text-sm sm:text-base font-black text-white max-w-[150px] mx-auto leading-tight">
                        {wheelSegments[hoveredWheelIndex].title}
                      </div>
                      <div className="text-xs text-slate-300 font-mono">
                        {wheelSegments[hoveredWheelIndex].metric}
                      </div>
                    </motion.div>
                  ) : (
                    <div className="space-y-1.5">
                      <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
                        EXPERIENCE CORE
                      </span>
                      <div className="text-sm sm:text-base font-black text-white leading-tight">
                        Customer Experience
                      </div>
                      <div className="text-xs text-slate-300">
                        Omnichannel Mesh
                      </div>
                    </div>
                  )}
                </div>

              </div>

              <div className="mt-5 flex items-center justify-center">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-400/50 text-xs font-mono font-bold text-cyan-300 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                  <span>ACTIVE EXPERIENCE LAYER: {(hoveredWheelIndex !== null ? wheelSegments[hoveredWheelIndex].title : 'CONTINUOUS ROTATION').toUpperCase()}</span>
                </div>
              </div>
            </div>

            {/* Right Segments (4 Segments) */}
            <div className="lg:col-span-3 space-y-4 order-3">
              {wheelSegments.slice(0, 4).map((seg, i) => {
                const isHovered = hoveredWheelIndex === i;
                const SegIcon = seg.icon;
                return (
                  <div
                    key={seg.id}
                    onMouseEnter={() => setHoveredWheelIndex(i)}
                    onMouseLeave={() => setHoveredWheelIndex(null)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer ${isHovered
                      ? 'border-sky-400 bg-sky-500/20 shadow-lg shadow-sky-500/20 -translate-x-1'
                      : 'border-slate-800 bg-slate-900/85 hover:border-slate-700'
                      }`}
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <SegIcon className={`w-4 h-4 ${seg.textColor}`} />
                      <span className={`text-sm font-bold ${seg.textColor}`}>{seg.title}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-2">
                      {seg.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: ARCHITECTURAL TRANSFORMATION MATRIX & BLUEPRINT (Clean White Theme)
          ========================================================================= */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3.5">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#0070C0] uppercase">
              TOPOLOGICAL ARCHITECTURE BLUEPRINT
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950">
              Omnichannel Mesh &amp; Experience Architecture Matrix
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Examine the concrete architectural difference between legacy decoupled customer portals and KNOOVIQ closed-loop experience mesh frameworks.
            </p>
          </div>

          {/* Interactive Mode Toggle (Clear, Large, Highly Visible Text) */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setActiveSandboxTab('comparison')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all border ${activeSandboxTab === 'comparison'
                ? 'bg-[#0070C0] text-white border-[#0070C0] shadow-md'
                : 'bg-slate-100 text-slate-700 border-slate-200 hover:text-slate-950 hover:bg-slate-200'
                }`}
            >
              Transformation Matrix (Legacy vs. KNOOVIQ)
            </button>
            <button
              onClick={() => setActiveSandboxTab('layers')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all border ${activeSandboxTab === 'layers'
                ? 'bg-[#0070C0] text-white border-[#0070C0] shadow-md'
                : 'bg-slate-100 text-slate-700 border-slate-200 hover:text-slate-950 hover:bg-slate-200'
                }`}
            >
              Full-Stack Experience Blueprint
            </button>
            <button
              onClick={() => setActiveSandboxTab('telemetry')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all border ${activeSandboxTab === 'telemetry'
                ? 'bg-[#0070C0] text-white border-[#0070C0] shadow-md'
                : 'bg-slate-100 text-slate-700 border-slate-200 hover:text-slate-950 hover:bg-slate-200'
                }`}
            >
              Live Journey Telemetry Chamber
            </button>
          </div>

          {/* TAB 1: Comparative Matrix (High Contrast, Large Visible Text) */}
          {activeSandboxTab === 'comparison' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl border border-slate-200 overflow-hidden shadow-sm"
            >
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-200 text-xs sm:text-sm font-mono uppercase text-slate-700 tracking-wider">
                      <th className="py-4 px-6 font-bold w-1/4">Experience Dimension</th>
                      <th className="py-4 px-6 font-bold w-1/3 text-rose-800 bg-rose-50/70">Legacy Customer Portals</th>
                      <th className="py-4 px-6 font-bold w-1/3 text-[#0070C0] bg-sky-50/70">KNOOVIQ Modern Omnichannel Mesh</th>
                      <th className="py-4 px-5 font-bold text-center">Standard</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-sm sm:text-base">
                    {architecturalComparison.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-5 px-6 font-bold text-slate-900 flex items-center gap-2.5">
                          <span className="w-2 h-2 rounded-full bg-[#0070C0] shrink-0" />
                          <span>{row.dimension}</span>
                        </td>
                        <td className="py-5 px-6 text-slate-700 bg-rose-50/20 leading-relaxed font-normal">
                          <div className="flex items-start gap-2.5">
                            <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-1" />
                            <span>{row.legacyApproach}</span>
                          </div>
                        </td>
                        <td className="py-5 px-6 text-slate-900 bg-sky-50/20 font-medium leading-relaxed">
                          <div className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#0070C0] shrink-0 mt-1" />
                            <span>{row.modernApproach}</span>
                          </div>
                        </td>
                        <td className="py-5 px-5 text-center">
                          <span className="inline-block px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-sky-100 text-[#0070C0] border border-sky-200">
                            {row.statusBadge}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {/* TAB 2: Full-Stack Experience Blueprint Display */}
          {activeSandboxTab === 'layers' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-10 shadow-sm"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

                {/* Blueprint Image */}
                <div className="lg:col-span-8 overflow-hidden rounded-2xl border-2 border-slate-300 relative group shadow-lg bg-slate-900 h-[380px] sm:h-[460px] lg:h-[500px] w-full">
                  <img
                    src="/images/customer_experience_mesh.jpg"
                    alt="Enterprise Customer Experience Architectural Blueprint"
                    className="w-full h-full object-cover object-center rounded-2xl transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs sm:text-sm p-3.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-white">
                    <div className="flex items-center gap-2.5">
                      <Layers className="w-4 h-4 text-cyan-400" />
                      <span className="font-bold">Full Stack Experience Mesh Reference</span>
                    </div>
                    <span className="font-mono text-xs text-cyan-300 font-bold uppercase">
                      CLEAN CORE ODATA ARCHITECTURE
                    </span>
                  </div>
                </div>

                {/* Technical Layers Checklist */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div className="text-xs font-mono text-[#0070C0] uppercase font-bold mb-1">
                      LAYER ONE: IDENTITY GRAPH
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">Unified Customer 360 Fabric</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Deterministic entity resolution unifying anonymous browsing sessions and corporate accounts into a single golden profile.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div className="text-xs font-mono text-[#0070C0] uppercase font-bold mb-1">
                      LAYER TWO: HEADLESS PRESENTATION
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">High-Velocity Micro-Frontends</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Decoupled modern frontend interfaces delivered via global edge CDNs with sub-second page performance.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div className="text-xs font-mono text-[#0070C0] uppercase font-bold mb-1">
                      LAYER THREE: CONTEXTUAL AI
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">Next-Best-Action Re-Ranking</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Machine learning intent algorithms delivering contextually tailored product recommendations and proactive care alerts.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div className="text-xs font-mono text-[#0070C0] uppercase font-bold mb-1">
                      LAYER FOUR: CORE ORCHESTRATION
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">Closed-Loop SAP S/4HANA Sync</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Direct transactional API pushdown reserving warehouse inventory, triggering dispatch, and clearing invoices.
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* TAB 3: Live Journey Telemetry Chamber */}
          {activeSandboxTab === 'telemetry' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl border border-slate-800 bg-slate-950 p-6 sm:p-10 shadow-xl text-white space-y-6"
            >
              {/* Telemetry Tab Switcher */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
                <div className="flex flex-wrap gap-2">
                  {(['b2b', 'b2c', 'omni'] as const).map((tabKey) => (
                    <button
                      key={tabKey}
                      type="button"
                      onClick={() => setActiveTelemetryTab(tabKey)}
                      className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${activeTelemetryTab === tabKey
                        ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                        : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 border border-slate-700'
                        }`}
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                      <span>{diagnosticProcesses[tabKey].tabLabel}</span>
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider border ${diagnosticProcesses[activeTelemetryTab].riskBadgeColor}`}>
                    {diagnosticProcesses[activeTelemetryTab].conformanceLevel}
                  </span>
                </div>
              </div>

              {/* Diagnostic Chamber Body */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Telemetry Image */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 p-2 group">
                    <img
                      src="/images/interactive_customer_journey_telemetry.png"
                      alt="Interactive Customer Journey Telemetry"
                      className="w-full h-auto max-h-[340px] object-contain rounded-xl transform group-hover:scale-[1.01] transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-cyan-400/50 text-xs font-mono font-bold text-cyan-300 flex items-center gap-1.5 shadow-md">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                      <span>TELEMETRY STREAM &bull; LIVE</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/50 space-y-1">
                    <div className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Experience Optimization Directive</span>
                    </div>
                    <p className="text-xs text-cyan-100 leading-relaxed font-normal">
                      {diagnosticProcesses[activeTelemetryTab].recommendation}
                    </p>
                  </div>
                </div>

                {/* Right Applied Enhancements */}
                <div className="lg:col-span-7 space-y-3">
                  <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
                    <span>Applied Experience Enhancements</span>
                    <span className="text-cyan-400">Straight-Through Verification</span>
                  </div>

                  <div className="space-y-3">
                    {diagnosticProcesses[activeTelemetryTab].findings.map((finding, fIdx) => (
                      <div
                        key={fIdx}
                        className={`p-4 rounded-xl border bg-slate-900/60 backdrop-blur-md transition-all text-left space-y-2 ${finding.borderColor}`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className={`px-2.5 py-0.5 rounded text-xs font-mono font-bold uppercase tracking-wider border ${finding.levelColor}`}>
                            {finding.level}
                          </span>
                          <span className="text-xs font-mono text-slate-400 truncate">
                            {finding.source}
                          </span>
                        </div>
                        <h4 className="text-sm sm:text-base font-bold text-white">
                          {finding.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                          {finding.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          )}

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: PHASED IMPLEMENTATION ROADMAP (Clean Slate-50 - Highly Legible Text)
          ========================================================================= */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3.5">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#0070C0] uppercase">
              TRANSFORMATION METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950">
              Phased Enterprise Implementation Roadmap
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              A structured, risk-mitigated journey from fragmented touchpoints to an enterprise-wide, governed omnichannel customer experience mesh.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {transformationPhases.map((phase, idx) => {
              const PhaseIcon = phase.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white p-7 flex flex-col justify-between hover:border-[#0070C0] hover:shadow-xl transition-all group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-lg bg-sky-50 text-[#0070C0] border border-sky-200">
                        {phase.phase}
                      </span>
                      <div className="p-2.5 rounded-xl bg-sky-50 text-[#0070C0] group-hover:scale-110 transition-transform">
                        <PhaseIcon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                      {phase.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {phase.focus}
                    </p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-slate-100">
                    <span className="text-xs font-mono text-slate-400 uppercase block mb-1">
                      KEY DELIVERABLE:
                    </span>
                    <span className="text-sm font-bold text-slate-900">
                      {phase.deliverable}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: EXECUTIVE FAQS (Modern Attractive Sapphire & Ambient Glow Theme)
          ========================================================================= */}
      <section className="relative py-24 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/60 border-b border-slate-200 overflow-hidden">
        {/* Subtle Ambient Decorative Glow & Grid */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[340px] bg-gradient-to-b from-sky-100/60 via-blue-50/30 to-transparent blur-3xl pointer-events-none -z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(#0070c0_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.035] pointer-events-none -z-0" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/80 text-xs font-mono font-bold tracking-widest text-[#0070C0] uppercase shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>EXECUTIVE CLARIFICATIONS &bull; CUSTOMER EXPERIENCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#005A9C] via-[#0070C0] to-sky-500">Strategic Questions</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
              Addressing core omnichannel paradigms, clean core ERP integration, real-time identity graphs, and predictive sentiment telemetry for technology leaders.
            </p>
          </div>

          <div className="space-y-4">
            {cxStrategyFaqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                    isOpen
                      ? 'bg-white border-[#0070C0] shadow-lg shadow-sky-500/5 ring-1 ring-[#0070C0]/20 border-l-4 border-l-[#0070C0]'
                      : 'bg-white border-slate-200/90 hover:border-slate-300 hover:shadow-xs'
                  }`}
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full py-5 px-6 sm:px-7 text-left flex items-center justify-between gap-4 group cursor-pointer"
                  >
                    <span className={`font-bold text-base sm:text-lg transition-colors leading-snug flex-1 ${
                      isOpen ? 'text-[#0070C0]' : 'text-slate-900 group-hover:text-[#0070C0]'
                    }`}>
                      {faq.question}
                    </span>

                    <span className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 shrink-0 ${
                      isOpen
                        ? 'bg-[#0070C0] text-white rotate-180 shadow-sm shadow-[#0070C0]/25'
                        : 'bg-slate-100/90 text-slate-500 group-hover:bg-sky-50 group-hover:text-[#0070C0]'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-6 sm:px-7 pb-6 pt-2 border-t border-slate-100 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 8: EXECUTIVE STRATEGY CTA RIBBON (Executive Sapphire Gradient)
          ========================================================================= */}
      <section className="py-20 bg-gradient-to-r from-[#003865] via-[#005A9C] to-[#0070C0] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-300/40 bg-white/10 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-cyan-200" />
            <span className="text-xs sm:text-sm font-bold tracking-widest text-cyan-100 uppercase font-mono">
              STRATEGIC ENGAGEMENT ADVISORY
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Ready to Unify Your Enterprise Customer Experience?
          </h2>

          <p className="text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed font-normal">
            Collaborate with senior experience architects to eliminate channel disconnects, deploy consumer-grade B2B portals, and integrate customer touchpoints directly with core SAP S/4HANA workflows.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
            <button
              onClick={() => onOpenContact ? onOpenContact('Customer Experience Strategy Workshop') : undefined}
              className="px-9 py-4 rounded-xl font-bold text-sm sm:text-base text-slate-900 bg-white hover:bg-sky-50 shadow-xl transition-all flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              <span>Schedule Experience Workshop</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#0070C0]" />
            </button>
            <Link
              to="/digital-experience/employee-experience"
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold uppercase tracking-wider backdrop-blur-md flex items-center gap-2 group transition-all w-full sm:w-auto justify-center"
            >
              <span>Explore Employee Experience</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-7 text-xs sm:text-sm text-sky-100 font-mono">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              <span>Clean Core Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe2 className="w-4 h-4 text-cyan-200" />
              <span>Zero Context Drop Across Channels</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-300" />
              <span>Sub-Second Response Velocity</span>
            </div>
          </div>

        </div>
      </section>

      {/* Lightbox Full-Screen Modal for Hero Architecture Image */}
      {isHeroModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 sm:p-6"
          onClick={() => setIsHeroModalOpen(false)}
        >
          <div
            className="relative max-w-7xl w-full max-h-[92vh] flex flex-col items-center justify-center bg-slate-950/80 border border-white/15 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar with Title and Close Button */}
            <div className="w-full flex items-center justify-between px-6 py-4 bg-slate-900/90 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <HeartHandshake className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-mono font-bold text-white tracking-wide uppercase">
                  Customer Experience (CX) &bull; Omnichannel Transformation Architecture
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-slate-400 hidden sm:inline-block">Press ESC or click outside to exit</span>
                <button
                  type="button"
                  onClick={() => setIsHeroModalOpen(false)}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-rose-500/80 text-white transition-colors cursor-pointer"
                  title="Close (ESC)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Image Container */}
            <div className="p-3 sm:p-6 w-full flex items-center justify-center overflow-auto max-h-[calc(92vh-120px)] bg-slate-950">
              <img
                src="/images/customer_experience_omnichannel_transformation_hero.jpg"
                alt="Enterprise Customer Experience & Omnichannel Transformation"
                className="max-w-full max-h-[76vh] object-contain rounded-xl shadow-2xl border border-white/10"
              />
            </div>

            {/* Bottom info bar */}
            <div className="w-full px-6 py-3 bg-slate-900/90 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span className="text-cyan-300 font-semibold">Omnichannel Customer Experience Radar</span>
              </div>
              <div className="flex items-center gap-4">
                <span>Unified Customer 360</span>
                <span>•</span>
                <span>B2B/B2C Portals</span>
                <span>•</span>
                <span>Core SAP Execution</span>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default CustomerExperiencePage;
