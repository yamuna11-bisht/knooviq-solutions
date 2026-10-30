import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Target,
  Sliders,
  Eye,
  Layers,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Search,
  Activity,
  Compass,
  TrendingUp,
  Brain,
  ShoppingBag,
  Users,
  Fingerprint,
  ChevronDown,
  XCircle,
  Maximize2,
  X,
  Cpu,
  Database,
  Globe2,
  FileCheck
} from 'lucide-react';

interface PersonalizationPageProps {
  onOpenContact?: (defaultTopic?: string) => void;
}

export const PersonalizationPage: React.FC<PersonalizationPageProps> = ({
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
    document.title = 'Enterprise Hyper-Personalization & Contextual Decisioning | KNOOVIQ';
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
  const [activeTelemetryTab, setActiveTelemetryTab] = useState<'b2b' | 'retail' | 'service'>('b2b');

  // State for Section 7: FAQ Accordion
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Section 4: Circular Chevron Segments (8 Interlocking Layers)
  const wheelSegments = [
    {
      id: 'affinity-graph',
      shortTag: 'AFFINITY',
      title: 'Real-Time Customer Affinity Graphing',
      desc: 'Synthesizing multi-touch browsing signals, order histories, and search interactions into dynamic vector preference profiles.',
      badge: 'AFFINITY GRAPH',
      metric: 'Continuous Preference Profiling',
      side: 'right',
      color: '#0070C0',
      textColor: 'text-sky-400',
      bgGlow: 'rgba(0, 112, 192, 0.35)',
      icon: Fingerprint
    },
    {
      id: 'next-best-action',
      shortTag: 'ACTION',
      title: 'Contextual Next-Best-Action (NBA) Engine',
      desc: 'Calculating high-affinity next actions across portal sessions, prioritizing relevant products and proactive replenishment.',
      badge: 'NBA DECISIONING',
      metric: 'Deterministic Opportunity Scoping',
      side: 'right',
      color: '#0284C7',
      textColor: 'text-cyan-400',
      bgGlow: 'rgba(2, 132, 199, 0.35)',
      icon: Target
    },
    {
      id: 'dynamic-content',
      shortTag: 'CONTENT',
      title: 'Adaptive Modular Content Re-Ranking',
      desc: 'Dynamically reconfiguring storefront banners, catalog hierarchies, and collateral based on live buyer corporate roles.',
      badge: 'DYNAMIC RE-RANKING',
      metric: 'Context-Aware Presentation',
      side: 'right',
      color: '#06B6D4',
      textColor: 'text-cyan-300',
      bgGlow: 'rgba(6, 182, 212, 0.35)',
      icon: Sliders
    },
    {
      id: 'predictive-pricing',
      shortTag: 'PRICING',
      title: 'Predictive Contract & Volume Pricing',
      desc: 'Recommending optimal contract pricing tiers, bulk rebate structures, and payment terms calibrated to corporate buying frequency.',
      badge: 'CONTRACT REBATES',
      metric: 'Margin-Optimized Value Exchange',
      side: 'right',
      color: '#10B981',
      textColor: 'text-emerald-400',
      bgGlow: 'rgba(16, 185, 129, 0.35)',
      icon: ShoppingBag
    },
    {
      id: 'omnichannel-sync',
      shortTag: 'SYNC',
      title: 'Synchronized Cross-Channel Personalization',
      desc: 'Ensuring customized recommendations persist smoothly between field rep tablet sessions, B2B portals, and mobile notifications.',
      badge: 'JOURNEY CONTINUITY',
      metric: 'Unified Omnichannel Memory',
      side: 'left',
      color: '#F59E0B',
      textColor: 'text-amber-400',
      bgGlow: 'rgba(245, 158, 11, 0.35)',
      icon: Globe2
    },
    {
      id: 'consent-privacy',
      shortTag: 'PRIVACY',
      title: 'Zero-Party Consent & Privacy Sentinel',
      desc: 'Enforcing stringent GDPR, CCPA, and enterprise zero-party data permissions, preserving trust while executing tailored experiences.',
      badge: 'PRIVACY-FIRST',
      metric: 'Audit-Proof Consent Adherence',
      side: 'left',
      color: '#EC4899',
      textColor: 'text-pink-400',
      bgGlow: 'rgba(236, 72, 153, 0.35)',
      icon: ShieldCheck
    },
    {
      id: 'churn-interception',
      shortTag: 'RETENTION',
      title: 'Proactive Churn & Dormancy Interception',
      desc: 'Detecting subtle decreases in ordering frequency, triggering targeted service consultations and bespoke replenishment proposals.',
      badge: 'CHURN INTERCEPTOR',
      metric: 'Preemptive Relationship Defense',
      side: 'left',
      color: '#8B5CF6',
      textColor: 'text-purple-400',
      bgGlow: 'rgba(139, 92, 246, 0.35)',
      icon: Zap
    },
    {
      id: 'scale-learning',
      shortTag: 'SCALE',
      title: 'Self-Optimizing Algorithmic Learning',
      desc: 'Continuously refining machine learning scoring models through closed-loop feedback from accepted proposals and order conversions.',
      badge: 'REINFORCEMENT LEARNING',
      metric: 'Compounding Precision Model',
      side: 'left',
      color: '#6366F1',
      textColor: 'text-indigo-400',
      bgGlow: 'rgba(99, 102, 241, 0.35)',
      icon: Brain
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
      id: 'step-1',
      label: 'Real-Time Intent Streaming',
      sublabel: 'Zero-Party Intent Capture',
      desc: 'Ingesting client search queries, category views, and past buying cadences directly from digital portals and CRM platforms.',
      tech: 'Real-Time Intent Streaming & Identity Graphing',
      icon: Search,
      highlights: [
        'Live Digital Interaction Event Ingestion',
        'Consented Zero-Party Preference Graphing',
        'Deterministic Corporate Account Stitching'
      ]
    },
    {
      id: 'step-2',
      label: 'Dynamic Affinity Scoring',
      sublabel: 'Vector Preference Modeling',
      desc: 'Calculating high-dimensional preference vectors mapping customer purchase patterns to catalog hierarchies and inventory nodes.',
      tech: 'Vector Similarity Search & Catalog Embeddings',
      icon: Fingerprint,
      highlights: [
        'High-Dimensional Catalog Vector Embeddings',
        'Real-Time In-Memory Semantic Scoring',
        'Dynamic Behavioral Cohort Clustering'
      ]
    },
    {
      id: 'step-3',
      label: 'Contextual NBA Arbitration',
      sublabel: 'Next-Best-Action Decisioning',
      desc: 'Filtering potential proposals through commercial viability, current contract agreements, and inventory availability rules.',
      tech: 'Decision Arbitration Engine & Margin Guards',
      icon: Target,
      highlights: [
        'Real-Time Available-to-Promise (ATP) Stock Checks',
        'Contract Margin Threshold Protections',
        'Commercial Business Rule Arbitration'
      ]
    },
    {
      id: 'step-4',
      label: 'Edge Micro-Frontend Delivery',
      sublabel: 'Sub-Second Page Hydration',
      desc: 'Rendering tailored catalog selections, personalized banner messaging, and pre-configured reorder bundles instantaneously.',
      tech: 'Edge Rendering & Micro-Frontend Hydration',
      icon: Sliders,
      highlights: [
        'Sub-Second Edge Cache Delivery',
        'Dynamic Role-Based Catalog Navigation',
        'Personalized One-Click Replenishment Carts'
      ]
    },
    {
      id: 'step-5',
      label: 'Cross-Channel Synchronization',
      sublabel: 'Omnichannel Memory Persistence',
      desc: 'Persisting buyer interaction context seamlessly so sales reps and digital portals offer harmonized, cohesive recommendations.',
      tech: 'Distributed Session Fabric & Rep Cockpits',
      icon: Globe2,
      highlights: [
        'Unified Web, Mobile & Rep Session State',
        'Sales Representative Intelligence Cockpit',
        'Seamless Cross-Device Quote Resumption'
      ]
    },
    {
      id: 'step-6',
      label: 'Closed-Loop Reinforcement',
      sublabel: 'Algorithmic Self-Optimization',
      desc: 'Re-training scoring models automatically using conversion outcomes, refining future predictive accuracy without manual tuning.',
      tech: 'Reinforcement Learning Loop & Continuous Audits',
      icon: Brain,
      highlights: [
        'Continuous Model Retraining & Accuracy Tuning',
        'Multi-Armed Bandit Conversion Optimization',
        'Algorithmic Fairness & Bias Governance'
      ]
    }
  ];

  // Section 3: Strategic Enterprise Personalization Challenges
  const personalizationChallenges = [
    {
      icon: ShoppingBag,
      tag: 'EXPERIENCE FRICTION',
      title: 'One-Size-Fits-All Catalog Presentation',
      desc: 'Corporate buyers must manually wade through thousands of irrelevant product lines to locate the specific materials governed by their corporate contracts.',
      footer: 'Role-Based Dynamic Catalog Filtering'
    },
    {
      icon: Database,
      tag: 'DATA STALENESS',
      title: 'Batch Behavioral Data & Stale Offers',
      desc: 'Overnight batch processing causes recommendation engines to suggest products that the customer already purchased earlier in the day.',
      footer: 'Real-Time Streaming Vector Affinity Scoring'
    },
    {
      icon: Users,
      tag: 'OMNICHANNEL GAP',
      title: 'Disconnect Between Digital & Sales Reps',
      desc: 'Sales representatives approach enterprise clients blind to the products, specifications, and quotes their clients have recently explored online.',
      footer: 'Unified Sales Rep Client Intelligence Cockpit'
    },
    {
      icon: TrendingUp,
      tag: 'COMMERCIAL RISK',
      title: 'Margin-Blind Recommendation Models',
      desc: 'Standard algorithm models push items with low profit margins or out-of-stock inventory, worsening supply chain stress and reducing margins.',
      footer: 'Decision Arbitration Engine & Margin Guards'
    },
    {
      icon: ShieldCheck,
      tag: 'COMPLIANCE EXPOSURE',
      title: 'Third-Party Cookies & Regulatory Penalties',
      desc: 'Third-party cookie reliance exposes brands to severe statutory privacy fines under GDPR, CCPA, and evolving global regulations.',
      footer: 'Zero-Party Consented Operational Signals'
    },
    {
      icon: Activity,
      tag: 'ONBOARDING DEFICIT',
      title: 'Cold-Start Paralysis for New Accounts',
      desc: 'Recommendation engines fail on newly onboarded commercial accounts due to an absence of historical transaction records.',
      footer: 'Firmographic & Cohort-Based Affinity Clustering'
    }
  ];

  // Section 5: Side-by-side Architectural Comparison Matrix
  const architecturalComparison = [
    {
      dimension: 'Decisioning Velocity',
      legacyApproach: 'Overnight batch scripts generating static recommendation lists that fail to reflect live in-session client interest.',
      modernApproach: 'Sub-second real-time event streaming calculating vector affinity scores during the active user visit.',
      statusBadge: 'SUB-SECOND STREAMING'
    },
    {
      dimension: 'Commercial Governance',
      legacyApproach: 'Black-box algorithms recommending low-margin or out-of-stock items, hurting profitability.',
      modernApproach: 'Contextual Next-Best-Action arbitration balancing client preference against live ERP inventory and margins.',
      statusBadge: 'MARGIN-AWARE DECISIONING'
    },
    {
      dimension: 'Omnichannel Memory',
      legacyApproach: 'Disconnected recommendation engines across web, mobile, and field sales teams creating conflicting pitches.',
      modernApproach: 'Unified customer affinity graph synchronizing digital browsing intent with field sales rep cockpits.',
      statusBadge: 'UNIFIED JOURNEY MEMORY'
    },
    {
      dimension: 'Catalog Presentation',
      legacyApproach: 'Generic, unorganized catalogs forcing buyers to manually search through thousands of irrelevant lines.',
      modernApproach: 'Dynamic role-based catalogs displaying contract-approved items, custom bundles, and negotiated pricing.',
      statusBadge: 'ROLE-TAILORED CATALOG'
    },
    {
      dimension: 'Privacy & Data Governance',
      legacyApproach: 'Intrusive third-party tracker dependencies triggering regulatory non-compliance and customer distrust.',
      modernApproach: 'Zero-party consented operational signals with deterministic cryptographic audit provenance.',
      statusBadge: 'ZERO-PARTY PRIVACY'
    }
  ];

  // Section 5: Diagnostic Chamber Telemetry Data
  const diagnosticProcesses = {
    b2b: {
      id: 'b2b',
      tabLabel: 'B2B Enterprise Portal Personalization',
      title: 'Corporate Procurement Dynamic Personalization Flow',
      processInfo: 'Contract Accounts • Role-Tailored Sourcing Catalogs',
      conformanceLevel: 'ZERO CATALOG NOISE • INSTANT REORDERING',
      riskBadgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/50 shadow-emerald-500/10',
      recommendation: 'Filter navigation menus by negotiated master agreement contracts and render automated replenishment proposals upon session start.',
      findings: [
        {
          level: 'ROLE-TAILORED CATALOG',
          levelColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
          borderColor: 'border-emerald-500/40 hover:border-emerald-400',
          title: 'Automated Contract Hierarchy Filtering',
          desc: 'Plant procurement officers view only pre-approved spare parts and raw materials, eradicating unauthorized off-contract browsing.',
          source: 'Module: S/4HANA Contract Catalog Filtering'
        },
        {
          level: 'PREDICTIVE REORDER',
          levelColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
          borderColor: 'border-cyan-500/40 hover:border-cyan-400',
          title: 'Anticipatory Replenishment Staging',
          desc: 'Recurring consumable supply baskets pre-populate based on historical plant run rates, saving extensive requisition entry time.',
          source: 'Algorithm: Consumption Cycle Prediction Model'
        },
        {
          level: 'MARGIN PROTECTED',
          levelColor: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
          borderColor: 'border-sky-500/40 hover:border-sky-400',
          title: 'Stock-Aware Substitute Recommendations',
          desc: 'When preferred materials encounter supply lead-time delays, compatible stocked alternatives surface automatically with verified specs.',
          source: 'System: Dynamic Inventory Alternative Engine'
        }
      ]
    },
    retail: {
      id: 'retail',
      tabLabel: 'Direct Digital Commerce Experience',
      title: 'Omnichannel Consumer Personalization & Basket Building',
      processInfo: 'Consumer Storefronts • Sub-Second Recommendation Delivery',
      conformanceLevel: 'HIGH RELEVANCE CONFORMANCE • ZERO STALE OFFERS',
      riskBadgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-400/50 shadow-cyan-500/10',
      recommendation: 'Incorporate real-time session browsing signals to adjust category ranks within active visits.',
      findings: [
        {
          level: 'IN-SESSION RE-RANKING',
          levelColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
          borderColor: 'border-emerald-500/40 hover:border-emerald-400',
          title: 'Adaptive Category Page Sorting',
          desc: 'Storefront merchandise categories re-order dynamically based on active browsing intent, accelerating product discovery.',
          source: 'Fabric: Real-Time Vector Affinity Matcher'
        },
        {
          level: 'OFFER HARMONY',
          levelColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
          borderColor: 'border-cyan-500/40 hover:border-cyan-400',
          title: 'Cross-Device Cart Retention & Recommendation',
          desc: 'Product recommendations harmonize with items already in the user mobile cart, avoiding redundant duplicate pushes.',
          source: 'Engine: Unified Cart Session Fabric'
        },
        {
          level: 'TOUCHLESS INCENTIVES',
          levelColor: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
          borderColor: 'border-sky-500/40 hover:border-sky-400',
          title: 'Contextual Loyalty Milestone Rewards',
          desc: 'Special client tier benefits activate automatically during checkout without requiring manual voucher code inputs.',
          source: 'Integration: Omnichannel Loyalty Engine'
        }
      ]
    },
    service: {
      id: 'service',
      tabLabel: 'Customer Service & Assisted Sales',
      title: 'Field Sales & Customer Care Guidance',
      processInfo: 'Sales Representative Cockpits • Proactive Account Care',
      conformanceLevel: 'MAXIMIZED ACCOUNT HARMONY • ACTIONABLE INSIGHTS',
      riskBadgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/50 shadow-emerald-500/10',
      recommendation: 'Equip sales reps with live alerts on account dormancy and suggested strategic conversation starters.',
      findings: [
        {
          level: 'ACCOUNT INTELLIGENCE',
          levelColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
          borderColor: 'border-emerald-500/40 hover:border-emerald-400',
          title: 'Digital Intent Surfacing for Field Teams',
          desc: 'Reps receive daily briefings highlighting which corporate clients have been researching new product categories on the portal.',
          source: 'Cockpit: Sales Force Automation Intelligence'
        },
        {
          level: 'PREEMPTIVE INTERCEPT',
          levelColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
          borderColor: 'border-cyan-500/40 hover:border-cyan-400',
          title: 'Dormancy Early Warning Sentinel',
          desc: 'Accounts exhibiting drop-offs in seasonal ordering trigger immediate proactive advisory prompts for account executives.',
          source: 'Sentinel: Account Retention Early Warning'
        },
        {
          level: 'TAILORED PACKAGES',
          levelColor: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
          borderColor: 'border-sky-500/40 hover:border-sky-400',
          title: 'Pre-Approved Bespoke Contract Extensions',
          desc: 'System automatically formulates renewal contract options pre-aligned with customer historical usage trends.',
          source: 'Module: Dynamic Contract Extension Generator'
        }
      ]
    }
  };

  // Section 6: Phased Transformation Stages
  const transformationPhases = [
    {
      phase: 'STAGE ONE',
      title: 'Intent Capture & Behavioral Scoping Audit',
      focus: 'Assessment of current-state interaction data latency, third-party tracking exposure, catalog noise, and conversion friction across digital channels.',
      deliverable: 'Personalization Maturity Assessment & Friction Blueprint',
      icon: Search
    },
    {
      phase: 'STAGE TWO',
      title: 'Vector Affinity & Decisioning Architecture',
      focus: 'Formulation of high-dimensional vector embeddings, Next-Best-Action decision arbitration rules, and zero-party consent frameworks.',
      deliverable: 'Target Personalization Architecture & Vector Data Model',
      icon: Layers
    },
    {
      phase: 'STAGE THREE',
      title: 'Next-Best-Action & Catalog Re-Ranking Deployment',
      focus: 'Deployment of sub-second streaming decision engines, dynamic role-tailored catalogs, and automated sales rep intelligence cockpits.',
      deliverable: 'Live Production Decisioning Engine & Dynamic Catalog Mesh',
      icon: Zap
    },
    {
      phase: 'STAGE FOUR',
      title: 'Closed-Loop Reinforcement & Privacy Governance',
      focus: 'Operationalization of automated machine learning re-training loops, conversion attribution verification, and continuous regulatory compliance audits.',
      deliverable: 'Enterprise-Wide Autonomous Hyper-Personalization Ecosystem',
      icon: ShieldCheck
    }
  ];

  // Section 7: Executive FAQs
  const persStrategyFaqs = [
    {
      question: 'How does enterprise hyper-personalization differ from basic eCommerce product recommendations?',
      answer: 'Basic eCommerce recommendations rely on broad collaborative filtering (e.g., "people who bought X also bought Y") without understanding commercial constraints. Enterprise hyper-personalization leverages real-time vector affinity modeling combined with contextual Next-Best-Action (NBA) arbitration. It accounts for negotiated corporate contract pricing, live SAP inventory levels, account credit terms, and buyer corporate roles.'
    },
    {
      question: 'How does the Next-Best-Action (NBA) engine enforce profit margin and supply chain rules?',
      answer: 'Before any recommendation or promotional proposal is displayed to a client, it passes through an arbitration layer. This layer checks real-time Available-to-Promise (ATP) stock in SAP S/4HANA, enforces minimum gross margin thresholds, and verifies supplier delivery lead times. If a product is on backorder or delivers insufficient margin, the system automatically arbitrates to a commercially superior alternative.'
    },
    {
      question: 'How does sub-second vector scoring operate during live user sessions?',
      answer: 'We utilize in-memory vector databases (such as SAP HANA Cloud Vector Engine) that represent products, categories, and customer interactions as mathematical embedding vectors. As a buyer navigates search filters or views spec sheets, their active vector shifts in real time. Nearby product vectors are calculated and re-ranked in milliseconds, adapting the page layout without reload latency.'
    },
    {
      question: 'What is Zero-Party Consent, and how does it protect the enterprise from regulatory fines?',
      answer: 'Zero-party data consists of preferences, requirements, and communication permissions intentionally and proactively shared by the customer (such as requested notification topics, preferred packaging formats, and delivery windows). By anchoring personalization strictly to first-party and zero-party consented data, organizations achieve superior recommendation relevance while remaining fully audit-proof under GDPR and CCPA.'
    },
    {
      question: 'How does the platform solve the "Cold-Start" dilemma for newly onboarded corporate accounts?',
      answer: 'When a new corporate client is created, there is no historical order record to analyze. Our platform utilizes firmographic cohort clustering—analyzing industry sector, fleet size, regional location, and facility type—to map the account to an initial probabilistic affinity vector. This ensures relevant contract bundles and essential consumables surface on Day One.'
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
            src="/images/enterprise_hyper_personalization_contextual_decisioning_hero.png"
            alt="Enterprise Hyper-Personalization & Contextual Decisioning"
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
                <span>KNOOVIQ DIGITAL EXPERIENCE &bull; PERSONALIZATION</span>
              </div>
            </div>

            {/* Static Headline with High-Contrast Typography */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.1] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
              Enterprise <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-cyan-400">
                Hyper-Personalization &amp; Decisioning Mesh
              </span>
            </h1>

            {/* Subtitle with High Legibility */}
            <p className="text-base sm:text-lg text-slate-100 leading-relaxed font-normal max-w-2xl pt-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
              Real-time vector preference modeling, contextual Next-Best-Action (NBA) arbitration, dynamic catalog re-ranking, and zero-party privacy governance across enterprise commerce touchpoints.
            </p>

            {/* Enterprise Assurance Indicators (With Interactive Hover Motion & No Buttons) */}
            <div className="pt-3 flex flex-wrap items-center gap-2.5 sm:gap-3">
              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-cyan-200 cursor-default shadow-xs"
              >
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Vector Affinity Modeling</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-emerald-200 cursor-default shadow-xs"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Contextual NBA Decisioning</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-sky-200 cursor-default shadow-xs"
              >
                <Zap className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Zero-Party Consent Governance</span>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: EXECUTIVE PERSPECTIVE (Clean Light Corporate Theme - Large Legible Text)
          ========================================================================= */}
      <section id="personalization-evolution" className="py-24 bg-gradient-to-b from-white via-[#F8FBFE] to-white border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-300 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#0070C0]">
                <Activity className="w-4 h-4 text-[#0070C0]" />
                <span>EXECUTIVE PERSONALIZATION PERSPECTIVE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
                Architecting the <span className="text-[#0070C0]">Contextual Decisioning &amp; Next-Best-Action Mesh</span>
              </h2>

              <div className="border-l-4 border-[#0070C0] border-y border-r border-slate-300 pl-5 py-3.5 bg-gradient-to-r from-sky-50/80 via-sky-50/30 to-transparent rounded-r-2xl">
                <p className="text-base sm:text-lg font-semibold text-slate-800 leading-relaxed italic">
                  &ldquo;Effective enterprise personalization is not about generic product recommendations—it is about real-time contextual decisioning that matches client need with commercial contract rules and live inventory.&rdquo;
                </p>
              </div>

              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
                KNOOVIQ helps enterprise commerce and revenue leaders transition away from static catalog layouts and delayed batch recommendation lists. We build real-time vector affinity models and Next-Best-Action arbitration engines connected directly to SAP S/4HANA stock and pricing masters, delivering individualized B2B and B2C experiences with complete margin protection.
              </p>

              {/* 3 Executive Pillars (Clear, Large, Highly Legible Text) */}
              <div className="space-y-4 pt-2">
                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <Fingerprint className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-950">Dynamic Vector Preference Modeling</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      High-dimensional vector embeddings mapping real-time clickstream events and historical purchases to catalog hierarchies.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-950">Commercially Governed NBA Decisioning</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Next-Best-Action arbitration balancing buyer affinity with real-time ERP inventory availability and corporate profit margins.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-950">Zero-Party Privacy Architecture</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Audit-proof consent management personalizing solely on explicit customer intent signals without third-party tracking cookies.
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
                title="Click image to advance to next decisioning step"
              >
                <img
                  src="/images/personalization_console.jpg"
                  alt="Enterprise Hyper-Personalization Management Cockpit"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-lg bg-slate-900/90 backdrop-blur-md border border-cyan-400/50 text-xs sm:text-sm font-mono font-bold text-cyan-300 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                  <span>DECISION FOCUS: {journeySteps[activeJourneyStep].label.toUpperCase()}</span>
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
          SECTION 3: ENTERPRISE PERSONALIZATION CHALLENGES (Clean Slate-50 - Highly Visible Text)
          ========================================================================= */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3.5">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#0070C0] uppercase">
              EXPERIENCE FRICTION POINTS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950">
              Strategic Hurdles Facing Legacy Recommendation Engines
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Why traditional one-size-fits-all product catalogs, overnight batch models, and margin-blind recommendation widgets damage customer loyalty and profitability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {personalizationChallenges.map((item, idx) => {
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
              INTERCONNECTED DECISIONING FLYWHEEL
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              The KNOOVIQ Unified Personalization Mesh
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Explore the eight mutually reinforcing layers of our modern hyper-personalization architecture. Hover over any segment to inspect its architectural role.
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
                        DECISIONING CORE
                      </span>
                      <div className="text-sm sm:text-base font-black text-white leading-tight">
                        Hyper-Personalization
                      </div>
                      <div className="text-xs text-slate-300">
                        Contextual NBA Mesh
                      </div>
                    </div>
                  )}
                </div>

              </div>

              <div className="mt-5 flex items-center justify-center">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-400/50 text-xs font-mono font-bold text-cyan-300 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                  <span>ACTIVE DECISION LAYER: {(hoveredWheelIndex !== null ? wheelSegments[hoveredWheelIndex].title : 'CONTINUOUS ROTATION').toUpperCase()}</span>
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
              Contextual Next-Best-Action &amp; Personalization Architecture Matrix
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Examine the concrete architectural difference between legacy rules-based recommendations and KNOOVIQ real-time vector decisioning mesh frameworks.
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
              Full-Stack Decisioning Blueprint
            </button>
            <button
              onClick={() => setActiveSandboxTab('telemetry')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all border ${activeSandboxTab === 'telemetry'
                ? 'bg-[#0070C0] text-white border-[#0070C0] shadow-md'
                : 'bg-slate-100 text-slate-700 border-slate-200 hover:text-slate-950 hover:bg-slate-200'
                }`}
            >
              Live Personalization Telemetry Chamber
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
                      <th className="py-4 px-6 font-bold w-1/4">Personalization Dimension</th>
                      <th className="py-4 px-6 font-bold w-1/3 text-rose-800 bg-rose-50/70">Legacy Recommendation Widgets</th>
                      <th className="py-4 px-6 font-bold w-1/3 text-[#0070C0] bg-sky-50/70">KNOOVIQ Contextual Decisioning Mesh</th>
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

          {/* TAB 2: Full-Stack Personalization Blueprint Display */}
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
                    src="/images/personalization_mesh.jpg"
                    alt="Enterprise Hyper-Personalization Architecture Blueprint"
                    className="w-full h-full object-cover object-center rounded-2xl transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs sm:text-sm p-3.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-white">
                    <div className="flex items-center gap-2.5">
                      <Layers className="w-4 h-4 text-cyan-400" />
                      <span className="font-bold">Full Stack Decisioning Mesh Reference</span>
                    </div>
                    <span className="font-mono text-xs text-cyan-300 font-bold uppercase">
                      HANA CLOUD VECTOR DECISIONING
                    </span>
                  </div>
                </div>

                {/* Technical Layers Checklist */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div className="text-xs font-mono text-[#0070C0] uppercase font-bold mb-1">
                      LAYER ONE: INTENT STREAMING
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">Event-Driven Preference Graph</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Captures micro-interactions and search queries in real time, stitching them to verified customer accounts.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div className="text-xs font-mono text-[#0070C0] uppercase font-bold mb-1">
                      LAYER TWO: VECTOR PREDICTION
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">HANA Cloud Vector Embeddings</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Transforms catalogs and buyer activity into high-dimensional vector spaces for instant semantic relevance scoring.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div className="text-xs font-mono text-[#0070C0] uppercase font-bold mb-1">
                      LAYER THREE: DECISION ARBITRATION
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">Contextual NBA Arbitration</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Arbitrates ranked recommendations against commercial business rules, inventory availability, and margin thresholds.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div className="text-xs font-mono text-[#0070C0] uppercase font-bold mb-1">
                      LAYER FOUR: OMNICHANNEL DELIVERY
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">Edge Micro-Frontend Delivery</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Delivers personalized content, custom bundles, and pricing tiers to web storefronts and sales rep cockpits.
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* TAB 3: Live Personalization Telemetry Chamber */}
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
                  {(['b2b', 'retail', 'service'] as const).map((tabKey) => (
                    <button
                      key={tabKey}
                      type="button"
                      onClick={() => setActiveTelemetryTab(tabKey)}
                      className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${activeTelemetryTab === tabKey
                        ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                        : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 border border-slate-700'
                        }`}
                    >
                      <Target className="w-3.5 h-3.5" />
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
                      src="/images/personalization_chamber.jpg"
                      alt="Personalization Diagnostic Telemetry"
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
                      <span>Decision Optimization Directive</span>
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
              A structured, risk-mitigated journey from static product catalogs to an enterprise-wide, governed hyper-personalization decisioning mesh.
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
              <span>EXECUTIVE CLARIFICATIONS &bull; PERSONALIZATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#005A9C] via-[#0070C0] to-sky-500">Strategic Questions</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
              Addressing vector affinity models, Next-Best-Action decisioning with ERP margin guards, sub-second vector scoring, and zero-party privacy for technology leaders.
            </p>
          </div>

          <div className="space-y-4">
            {persStrategyFaqs.map((faq, index) => {
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
              STRATEGIC DECISIONING ADVISORY
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Ready to Accelerate Your Enterprise Personalization Strategy?
          </h2>

          <p className="text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed font-normal">
            Collaborate with senior decisioning architects to build real-time vector affinity models, deploy Next-Best-Action arbitration with margin guards, and safeguard client privacy.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
            <button
              onClick={() => onOpenContact ? onOpenContact('Hyper-Personalization Strategy Workshop') : undefined}
              className="px-9 py-4 rounded-xl font-bold text-sm sm:text-base text-slate-900 bg-white hover:bg-sky-50 shadow-xl transition-all flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              <span>Schedule Decisioning Workshop</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#0070C0]" />
            </button>
            <Link
              to="/digital-experience/experience-analytics"
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold uppercase tracking-wider backdrop-blur-md flex items-center gap-2 group transition-all w-full sm:w-auto justify-center"
            >
              <span>Explore Experience Analytics</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-7 text-xs sm:text-sm text-sky-100 font-mono">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              <span>Clean Core Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-cyan-200" />
              <span>Zero-Party Consent Adherence</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-300" />
              <span>Sub-Second Recommendation Velocity</span>
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
                <Target className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-mono font-bold text-white tracking-wide uppercase">
                  Personalization &bull; Contextual Next-Best-Action Decisioning Architecture
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
                src="/images/enterprise_hyper_personalization_contextual_decisioning_hero.png"
                alt="Enterprise Hyper-Personalization & Contextual Decisioning"
                className="max-w-full max-h-[76vh] object-contain rounded-xl shadow-2xl border border-white/10"
              />
            </div>

            {/* Bottom info bar */}
            <div className="w-full px-6 py-3 bg-slate-900/90 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span className="text-cyan-300 font-semibold">Contextual Decisioning Radar</span>
              </div>
              <div className="flex items-center gap-4">
                <span>Vector Affinity Modeling</span>
                <span>•</span>
                <span>Next-Best-Action Engine</span>
                <span>•</span>
                <span>ERP Margin Guards</span>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default PersonalizationPage;
