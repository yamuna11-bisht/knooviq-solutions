import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  BarChart3,
  Activity,
  Layers,
  Search,
  Target,
  ArrowRight,
  ShieldCheck,
  Zap,
  GitBranch,
  Gauge,
  CheckCircle2,
  Radio,
  LineChart,
  PieChart,
  MessageSquare,
  AlertTriangle,
  TrendingDown,
  Maximize2,
  X,
  ChevronDown,
  XCircle,
  Cpu,
  Database,
  Boxes,
  Award,
  FileCheck,
  Workflow
} from 'lucide-react';

interface ExperienceAnalyticsPageProps {
  onOpenContact?: (defaultTopic?: string) => void;
}

export const ExperienceAnalyticsPage: React.FC<ExperienceAnalyticsPageProps> = ({
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
    document.title = 'Enterprise Experience Analytics & Journey Telemetry | Digital Intelligence | KNOOVIQ';
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

  // State for Section 5: Diagnostic Chamber tabs
  const [activeTelemetryTab, setActiveTelemetryTab] = useState<'omnichannel' | 'funnel' | 'churn'>('omnichannel');

  // State for Section 7: FAQ Accordion
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Section 4: Circular Chevron Segments (8 Interlocking Layers)
  const wheelSegments = [
    {
      id: 'telemetry-ingestion',
      shortTag: 'INGEST',
      title: 'Real-Time Omnichannel Telemetry Capture',
      desc: 'Lossless sub-second streaming ingestion capturing clicks, micro-interactions, API latencies, and device states across all digital touchpoints.',
      badge: 'STREAM INGESTION',
      metric: 'Continuous Event Streaming',
      side: 'right',
      color: '#0070C0',
      textColor: 'text-sky-400',
      bgGlow: 'rgba(0, 112, 192, 0.35)',
      icon: Radio
    },
    {
      id: 'journey-reconstruction',
      shortTag: 'RECONSTRUCT',
      title: 'Cross-Device Journey Graph Stitching',
      desc: 'Deterministic identity resolution bridging anonymous browsing sessions, native mobile apps, authenticated client portals, and offline ERP records.',
      badge: 'JOURNEY GRAPH',
      metric: 'Deterministic Session Unification',
      side: 'right',
      color: '#0284C7',
      textColor: 'text-cyan-400',
      bgGlow: 'rgba(2, 132, 199, 0.35)',
      icon: GitBranch
    },
    {
      id: 'friction-detection',
      shortTag: 'FRICTION',
      title: 'Algorithmic Bottleneck & Dropout Detection',
      desc: 'Machine learning anomaly models identifying rage clicks, form stalls, recursive navigation loops, and silent checkout drop-offs instantly.',
      badge: 'FRICTION RADAR',
      metric: 'Silent Anomaly Surfacing',
      side: 'right',
      color: '#06B6D4',
      textColor: 'text-cyan-300',
      bgGlow: 'rgba(6, 182, 212, 0.35)',
      icon: AlertTriangle
    },
    {
      id: 'sentiment-nlp',
      shortTag: 'SENTIMENT',
      title: 'Continuous Voice-of-Customer NLP Mining',
      desc: 'Semantic sentiment and topic extraction transforming unstructured service transcripts, ratings, and customer tickets into qualitative experience scores.',
      badge: 'SENTIMENT NLP',
      metric: 'Unstructured Text Intelligence',
      side: 'right',
      color: '#10B981',
      textColor: 'text-emerald-400',
      bgGlow: 'rgba(16, 185, 129, 0.35)',
      icon: MessageSquare
    },
    {
      id: 'revenue-attribution',
      shortTag: 'ATTRIBUTION',
      title: 'Algorithmic Multi-Touch Attribution Modeling',
      desc: 'Shapley and Markov chain attribution linking every digital touchpoint along multi-month journeys directly to enterprise contract values and pipeline velocity.',
      badge: 'PIPELINE ATTRIBUTION',
      metric: 'Comprehensive Multi-Touch Modeling',
      side: 'left',
      color: '#F59E0B',
      textColor: 'text-amber-400',
      bgGlow: 'rgba(245, 158, 11, 0.35)',
      icon: LineChart
    },
    {
      id: 'churn-forecasting',
      shortTag: 'CHURN',
      title: 'Predictive Churn & Dissatisfaction Scoring',
      desc: 'Behavioral degradation algorithms flagging declining portal frequency and telemetry dissatisfaction patterns before key renewal cycles.',
      badge: 'ATTRITION RADAR',
      metric: 'Proactive Account Defense',
      side: 'left',
      color: '#EC4899',
      textColor: 'text-pink-400',
      bgGlow: 'rgba(236, 72, 153, 0.35)',
      icon: TrendingDown
    },
    {
      id: 'funnel-optimization',
      shortTag: 'CONVERT',
      title: 'End-to-End Conversion Funnel Optimization',
      desc: 'Continuous pathing analysis evaluating stage-by-stage dropouts across enterprise self-service, quote configurations, and checkout flows.',
      badge: 'FUNNEL VELOCITY',
      metric: 'Drop-Off Mitigation',
      side: 'left',
      color: '#8B5CF6',
      textColor: 'text-purple-400',
      bgGlow: 'rgba(139, 92, 246, 0.35)',
      icon: Target
    },
    {
      id: 'closed-loop-action',
      shortTag: 'REMEDY',
      title: 'Closed-Loop Experience Governance & Remediation',
      desc: 'Automated event triggers dispatching real-time notifications to customer success desks and activating corrective UX workflows during customer distress.',
      badge: 'CLOSED-LOOP ACTION',
      metric: 'Automated Service Interventions',
      side: 'left',
      color: '#6366F1',
      textColor: 'text-indigo-400',
      bgGlow: 'rgba(99, 102, 241, 0.35)',
      icon: ShieldCheck
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

    const angleStart = index * 45 - 90 + gap;
    const angleEnd = (index + 1) * 45 - 90 - gap;
    const angleTip = angleEnd + tip;
    const angleBack = angleStart + tip;

    const toRad = (deg: number) => (deg * Math.PI) / 180;

    const x1 = cx + rOut * Math.cos(toRad(angleStart));
    const y1 = cy + rOut * Math.sin(toRad(angleStart));
    const x2 = cx + rOut * Math.cos(toRad(angleEnd));
    const y2 = cy + rOut * Math.sin(toRad(angleEnd));
    const xTip = cx + rMid * Math.cos(toRad(angleTip));
    const yTip = cy + rMid * Math.sin(toRad(angleTip));
    const x3 = cx + rIn * Math.cos(toRad(angleEnd));
    const y3 = cy + rIn * Math.sin(toRad(angleEnd));
    const x4 = cx + rIn * Math.cos(toRad(angleStart));
    const y4 = cy + rIn * Math.sin(toRad(angleStart));
    const xBack = cx + rMid * Math.cos(toRad(angleBack));
    const yBack = cy + rMid * Math.sin(toRad(angleBack));

    return `M ${x1} ${y1}
            A ${rOut} ${rOut} 0 0 1 ${x2} ${y2}
            L ${xTip} ${yTip}
            L ${x3} ${y3}
            A ${rIn} ${rIn} 0 0 0 ${x4} ${y4}
            L ${xBack} ${yBack}
            Z`;
  };

  const getIconCoords = (index: number) => {
    const cx = 250;
    const cy = 250;
    const r = 168;
    const angleMid = index * 45 - 90 + 22.5;
    const toRad = (deg: number) => (deg * Math.PI) / 180;
    return {
      x: cx + r * Math.cos(toRad(angleMid)),
      y: cy + r * Math.sin(toRad(angleMid))
    };
  };

  // Section 2 Interactive Journey Steps Data
  const journeySteps = [
    {
      id: 'stream',
      label: 'Stream Ingestion',
      sublabel: 'Lossless Telemetry',
      desc: 'Sub-second event streaming capturing DOM mutations, API latency events, and micro-interactions across web and mobile touchpoints.',
      tech: 'Kafka & Event Hub Streaming Mesh',
      icon: Radio,
      highlights: [
        'Client-side SDKs with sub-millisecond execution footprint',
        'Real-time ingestion pipelines processing millions of events per second',
        'Automatic field-level tokenization masking sensitive PII'
      ]
    },
    {
      id: 'identity',
      label: 'Identity Graph',
      sublabel: 'Deterministic Stitch',
      desc: 'Stitching anonymous multi-device browsing sessions to verified customer accounts and ERP billing trees with persistent continuity.',
      tech: 'Real-Time Customer Graph Database',
      icon: GitBranch,
      highlights: [
        'Deterministic identity resolution via encrypted credentials',
        'Graph database clustering linking multi-user account buying committees',
        'Real-time identity sync across marketing automation and ERP'
      ]
    },
    {
      id: 'friction',
      label: 'Friction Radar',
      sublabel: 'Anomaly Detection',
      desc: 'Algorithmic friction radar detecting rage clicks, form stalls, recursive navigation loops, and silent checkout drop-offs instantly.',
      tech: 'Anomaly Isolation & Replay Engine',
      icon: AlertTriangle,
      highlights: [
        'Automated anomaly models surfacing silent JavaScript errors',
        'Step-by-step funnel drop-off diagnostics with session replay',
        'Direct correlation between telemetry latency and cart abandonment'
      ]
    },
    {
      id: 'sentiment',
      label: 'Voice-of-Customer',
      sublabel: 'Sentiment NLP',
      desc: 'Transformer NLP mining extracting fine-grained emotional sentiment, urgency, and operational topics from support transcripts and chats.',
      tech: 'Enterprise NLP Transformer Pipeline',
      icon: MessageSquare,
      highlights: [
        'Transformer-based sentiment classifiers tuned for enterprise language',
        'Automated topic extraction clustering recurring bottlenecks',
        'Cross-referencing customer verbatim sentiment with actual session telemetry'
      ]
    },
    {
      id: 'attribution',
      label: 'Revenue Modeling',
      sublabel: 'Multi-Touch Value',
      desc: 'Data-driven Shapley and Markov multi-touch attribution directly correlated with enterprise CRM opportunities and ERP contract values.',
      tech: 'Algorithmic Shapley Attribution Model',
      icon: LineChart,
      highlights: [
        'Algorithmic weight distribution across months-long buying journeys',
        'Direct integration with CRM opportunity stages and ERP revenue',
        'Channel efficiency scoring identifying high-converting content paths'
      ]
    },
    {
      id: 'remediation',
      label: 'Closed-Loop Action',
      sublabel: 'Automated Response',
      desc: 'Real-time event webhooks dispatching proactive intervention alerts to customer success teams and automated tickets to engineering desks.',
      tech: 'Event-Driven Workflow Automation Hub',
      icon: ShieldCheck,
      highlights: [
        'Real-time alerts notifying account executives when key accounts stall',
        'Automated incident ticketing in Jira and ServiceNow for UX defects',
        'Executive dashboards offering boardroom-level visibility into journey health'
      ]
    }
  ];

  // Section 3: Enterprise Challenges Data
  const challengeCards = [
    {
      code: 'CH-01',
      title: 'Siloed Clickstream & App Databases',
      desc: 'Web analytics, mobile application logs, customer service portals, and core billing systems maintain disjointed telemetry logs without unified customer identifiers.',
      remedy: 'KNOOVIQ implements unified event schemas and distributed graph databases that deterministically stitch multi-platform sessions into single customer timelines.'
    },
    {
      code: 'CH-02',
      title: 'Delayed Retrospective Reporting',
      desc: 'Traditional business intelligence workflows deliver aggregated slide decks weeks after high-value enterprise accounts experience catastrophic digital checkout failures.',
      remedy: 'Our streaming event architecture processes clickstream anomalies in sub-second intervals, alerting digital product teams while affected users are still engaged.'
    },
    {
      code: 'CH-03',
      title: 'Silent UX & Workflow Friction',
      desc: 'Subtle form validation issues, broken third-party scripts, and unresponsive navigation elements cause massive drop-offs that remain invisible in basic pageview metrics.',
      remedy: 'Algorithmic friction radar continuously flags rage clicking, dead clicks, and repeated form resets, automatically generating prioritized engineering tickets.'
    },
    {
      code: 'CH-04',
      title: 'Low Survey Response Rates',
      desc: 'Only a tiny fraction of frustrated buyers complete post-interaction CSAT surveys, resulting in statistically skewed feedback and blind spots regarding silent account attrition.',
      remedy: 'Continuous Voice-of-Customer NLP algorithms passively parse support transcripts, chat logs, and emails, quantifying customer sentiment across 100% of interactions.'
    },
    {
      code: 'CH-05',
      title: 'Distorted Last-Touch Attribution',
      desc: 'Simplistic attribution rules allocate 100% of pipeline credit to final brand search clicks, hiding the critical influence of whitepapers, webinar series, and portal demo modules.',
      remedy: 'Data-driven Shapley and Markov multi-touch attribution models accurately credit every influence touchpoint along complex, multi-stakeholder enterprise journeys.'
    },
    {
      code: 'CH-06',
      title: 'Lack of Automated Remediation',
      desc: 'Product and marketing teams generate extensive diagnostic dashboards, yet digital experience systems lack automated orchestration to intervene when customers experience friction.',
      remedy: 'Real-time event webhooks trigger automated interventions, routing high-value accounts encountering friction directly to proactive customer support specialists.'
    }
  ];

  // Section 5 Comparison Matrix Data
  const comparisonRows = [
    {
      capability: 'Data Granularity & Ingestion Mode',
      legacy: 'Sampled, batched pageview pings with 24-48 hour reporting latency and heavy UI overhead.',
      knooviq: 'Lossless sub-second streaming event capture across web, mobile, and APIs with zero client-side lag.'
    },
    {
      capability: 'Cross-Device Journey Stitching',
      legacy: 'Isolated cookie tracking easily broken by browser privacy modes and device changes.',
      knooviq: 'Deterministic graph resolution correlating anonymous browsing with authenticated enterprise IDs.'
    },
    {
      capability: 'Friction & Anomaly Detection',
      legacy: 'Manual review of aggregated bounce rates and anecdotal user complaints weeks after churn.',
      knooviq: 'Algorithmic micro-rage, dead click, and drop-off anomaly models surfacing root UX causes instantly.'
    },
    {
      capability: 'Feedback & Sentiment Analysis',
      legacy: 'Infrequent quarterly CSAT surveys capturing responses from less than 2% of the user base.',
      knooviq: 'Continuous Voice-of-Customer NLP mining sentiment across support chats, emails, and ticket transcripts.'
    },
    {
      capability: 'Pipeline Revenue Attribution',
      legacy: 'First-touch or last-touch rules over-crediting closing channels and misallocating capital.',
      knooviq: 'Algorithmic Shapley & Markov multi-touch models directly integrated with CRM pipeline and ERP revenue.'
    },
    {
      capability: 'Operational Remediation',
      legacy: 'Static dashboard presentations requiring manual analysis with no direct link to operations.',
      knooviq: 'Automated event triggers dispatching proactive service interventions and engineering bug tickets.'
    }
  ];

  // Section 5 Architecture Layers Data
  const architectureLayers = [
    {
      layer: 'Layer 01',
      title: 'Omnichannel Event Capture & Edge Brokerage',
      desc: 'Lightweight client SDKs, server-side tracking containers, and API gateways that stream raw micro-interactions into distributed Kafka event brokers with sub-second latency.',
      tech: 'Kafka, AWS Kinesis, WebAssembly SDKs, Edge Cloudflare Workers, PII Tokenization'
    },
    {
      layer: 'Layer 02',
      title: 'Real-Time Journey Stitching & Graph Processing',
      desc: 'Distributed graph algorithms that resolve disparate identity tokens, matching anonymous device sessions to persistent customer records and enterprise account trees.',
      tech: 'Neo4j, AWS Neptune, Apache Flink, Redis In-Memory Session Cache, Deterministic Graph Solvers'
    },
    {
      layer: 'Layer 03',
      title: 'Algorithmic Telemetry & Machine Learning Layer',
      desc: 'Real-time predictive models calculating journey friction scores, sentiment NLP indices, multi-touch attribution weights, and customer lifetime value projections.',
      tech: 'PyTorch, Hugging Face NLP, Databricks Lakehouse, Shapley Valuation Models, Anomaly Isolation Forests'
    },
    {
      layer: 'Layer 04',
      title: 'Enterprise Action & Governance Layer',
      desc: 'Two-way integration bus routing journey intelligence into customer success consoles, CRM account records, marketing automation tools, and executive cockpits.',
      tech: 'Salesforce API, ServiceNow Webhooks, Jira Automations, Snowflake Data Sharing, PowerBI Embedded'
    }
  ];

  // Section 5 Chamber Tab Diagnostics
  const telemetryScenarios = {
    omnichannel: {
      title: 'Global Omnichannel Client Journey Reconstruction',
      summary: 'Deterministic session correlation spanning B2B buyer research, client portal quote submission, and ERP enterprise order finalization.',
      latency: 'Sub-second real-time sync',
      accuracy: 'Deterministic Identity Unification',
      findings: [
        {
          metric: 'Unified Account Timelines',
          title: '360° Stakeholder Visibility',
          desc: 'Correlating 14 discrete employee interactions from the same enterprise client account across web portals, documentation hubs, and mobile app instances.'
        },
        {
          metric: 'Zero Identity Loss',
          title: 'Pre-to-Post Login Continuity',
          desc: 'Seamlessly attaching 3 weeks of anonymous technical documentation reading to the newly registered procurement director profile.'
        },
        {
          metric: 'Real-Time ERP Linkage',
          title: 'Telemetry-to-Revenue Correlation',
          desc: 'Directly linking portal self-service quote configurations with SAP ERP sales order fulfillment timelines.'
        }
      ]
    },
    funnel: {
      title: 'Enterprise Checkout & Self-Service Funnel Optimization',
      summary: 'Algorithmic bottleneck detection across multi-step enterprise onboarding, software license provisioning, and contract signature flows.',
      latency: 'Instant event alerts',
      accuracy: 'Automated Friction Isolation',
      findings: [
        {
          metric: 'Silent Friction Radar',
          title: 'Step 3 Form Validation Glitch',
          desc: 'Identified recurring input validation timeouts on corporate tax identification fields, preventing millions in completed contract self-service.'
        },
        {
          metric: 'Micro-Rage Detection',
          title: 'Unresponsive CTA Button Fix',
          desc: 'Surfaced 420 instances of rapid frustrated clicking on disabled purchase buttons due to asynchronous billing address verification.'
        },
        {
          metric: 'Conversion Velocity',
          title: 'Streamlined Approval Paths',
          desc: 'Streamlined administrative approval gates, reducing average contract completion duration from 4 days to 45 minutes.'
        }
      ]
    },
    churn: {
      title: 'Predictive Churn & Account Dissatisfaction Defense',
      summary: 'Early-warning telemetry alerting customer success teams when key enterprise accounts exhibit behavioral disengagement patterns.',
      latency: 'Continuous predictive scoring',
      accuracy: 'Proactive Account Defense',
      findings: [
        {
          metric: 'Session Frequency Decay',
          title: 'Early Warning Indicators',
          desc: 'Flagged a 60% decline in daily active administrator logins 90 days prior to contract renewal, triggering proactive account management outreach.'
        },
        {
          metric: 'Support NLP Escalation',
          title: 'Negative Sentiment Clustering',
          desc: 'Consolidated repeated unresolved ticket threads mentioning slow API response times into an immediate executive review.'
        },
        {
          metric: 'Remediation Velocity',
          title: 'Proactive Outreach Playbooks',
          desc: 'Automated workflow alerts assigned dedicated technical architects to resolve client roadblocks before formal renewal discussions commenced.'
        }
      ]
    }
  };

  // Section 6 Phased Implementation Roadmap
  const roadmapStages = [
    {
      phase: 'STAGE ONE',
      weeks: 'WEEKS 01 - 04',
      title: 'Telemetry Discovery & Tracking Architecture Audit',
      focus: 'Assessment & Architecture Blueprint',
      deliverables: [
        'Comprehensive audit of current digital tracking tools, tag management containers, and data silos',
        'Definition of standardized enterprise event taxonomy, naming conventions, and payload schemas',
        'Regulatory compliance and PII governance audit ensuring full GDPR, CCPA, and ISO 27001 adherence',
        'Technical architectural blueprint for edge-based event ingestion and graph database schema'
      ]
    },
    {
      phase: 'STAGE TWO',
      weeks: 'WEEKS 05 - 08',
      title: 'Event Streaming Ingestion & Identity Graph Setup',
      focus: 'Data Pipeline Engineering',
      deliverables: [
        'Deployment of lightweight client SDKs across enterprise web portals, mobile apps, and APIs',
        'Configuration of high-throughput Kafka / Event Hub streaming ingestion clusters',
        'Implementation of deterministic identity resolution engine linking anonymous and known profiles',
        'Validation of sub-second streaming latency and zero client-side UI performance degradation'
      ]
    },
    {
      phase: 'STAGE THREE',
      weeks: 'WEEKS 09 - 12',
      title: 'Algorithmic Friction Radar & Sentiment NLP Deployment',
      focus: 'Machine Learning Intelligence',
      deliverables: [
        'Training and tuning machine learning models for rage-click and funnel stall detection',
        'Integration of Voice-of-Customer NLP pipeline ingesting support transcripts and customer reviews',
        'Configuration of multi-touch Shapley and Markov attribution algorithms connected to CRM pipeline',
        'Creation of custom executive journey telemetry dashboards and operational alert cockpits'
      ]
    },
    {
      phase: 'STAGE FOUR',
      weeks: 'WEEKS 13 - 16+',
      title: 'Closed-Loop Operationalization & Enterprise Scale',
      focus: 'Actionable Governance & Value Realization',
      deliverables: [
        'Establishment of automated webhooks dispatching friction alerts to CRM and customer success desks',
        'Integration of automated issue tracking with Jira and ServiceNow for engineering defect remediation',
        'Comprehensive training and enablement programs for product, marketing, and executive leadership',
        'Ongoing quarterly model refinement, identity graph expansion, and governance reviews'
      ]
    }
  ];

  // Section 7 Strategic FAQs
  const faqs = [
    {
      q: 'How does KNOOVIQ journey telemetry differ from standard Google Analytics or Adobe Analytics installations?',
      a: 'Traditional analytics platforms rely on aggregated, sampled pageviews and batched beacon payloads with 24 to 48 hours of reporting latency. They show surface traffic numbers but cannot explain root causes of user hesitation. KNOOVIQ engineers lossless, sub-second streaming telemetry architectures that capture every micro-interaction, DOM mutation, network latency event, and API response. Furthermore, our platform deterministically stitches cross-device interactions into unified customer graph timelines and links them directly to enterprise CRM pipeline and ERP revenue records.'
    },
    {
      q: 'How does cross-device identity stitching respect international privacy mandates like GDPR and CCPA?',
      a: 'Our telemetry architecture is engineered from the ground up on Privacy-by-Design principles. All client-side SDKs execute real-time field-level tokenization, stripping and hashing IP addresses and personal identifiers before transmission into event brokers. Identity graph resolution uses cryptographic one-way salted hashes of authenticated corporate credentials. Organizations maintain complete sovereign data ownership without exporting raw customer telemetry to shared third-party ad networks.'
    },
    {
      q: 'What technical overhead or latency does lossless client-side event capture add to web and mobile apps?',
      a: 'Zero measurable performance degradation. KNOOVIQ utilizes asynchronous WebAssembly-compiled SDKs and background Web Workers that execute off the main browser thread in sub-millisecond execution windows. Event payloads are compressed and dispatched during idle browser periods using Beacon APIs, ensuring that First Contentful Paint (FCP), Largest Contentful Paint (LCP), and Interaction to Next Paint (INP) remain completely unimpacted.'
    },
    {
      q: 'Can KNOOVIQ experience analytics ingest unstructured interactions such as call center recordings and live chat transcripts?',
      a: 'Yes. Our platform features an integrated Voice-of-Customer NLP pipeline that ingests raw text and audio transcripts from customer service desks, contact centers, live chatbots, and public review forums. Pre-trained transformer models extract fine-grained emotional sentiment, operational urgency, and specific product topics, immediately attaching qualitative sentiment scores to the customer’s unified telemetry timeline.'
    },
    {
      q: 'How quickly can enterprise commerce and product engineering teams detect actionable conversion friction?',
      a: 'In real time. Rather than waiting for month-end reports or customer complaints, our anomaly detection algorithms monitor live event streams continuously. If a newly deployed checkout module or portal update causes rage-clicking or unexpected drop-offs, automated alert webhooks notify engineering teams within minutes, accompanied by diagnostic telemetry traces and reconstructed session replays.'
    }
  ];

  const currentSegment = wheelSegments[hoveredWheelIndex ?? 0];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased overflow-x-hidden selection:bg-[#0070C0] selection:text-white">
      {/* =========================================================================
          SECTION 1: HERO SECTION
          ========================================================================= */}
      <section className="relative min-h-[620px] sm:min-h-[680px] lg:min-h-[720px] bg-slate-950 text-white flex items-center overflow-hidden">
        {/* Background Visual (Static, Lighter Scrim, No Animation) */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/enterprise_experience_analytics_journey_telemetry_hero.jpg"
            alt="Enterprise Experience Analytics and Journey Telemetry Platform"
            className="w-full h-full object-cover object-right select-none"
            style={{ imageRendering: '-webkit-optimize-contrast' }}
          />

          {/* Balanced Lighter Directional Scrim */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/30 to-transparent pointer-events-none" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28 w-full">
          <div className="max-w-3xl">
            {/* Top Category Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold tracking-wider uppercase mb-5 backdrop-blur-md shadow-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>ENTERPRISE EXPERIENCE ANALYTICS &amp; JOURNEY TELEMETRY</span>
            </motion.div>

            {/* Main Executive Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]"
            >
              Architecting Omnichannel Journey Telemetry &amp;{' '}
              <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-white bg-clip-text text-transparent">
                Predictive Customer Insight
              </span>
            </motion.h1>

            {/* Executive Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg md:text-xl text-slate-100 font-normal leading-relaxed max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
            >
              Transform fragmented touchpoint clickstreams into unified behavioral telemetry graphs. KNOOVIQ engineers real-time experience analytics platforms that detect silent friction, surface intent anomalies, and correlate digital interactions directly with enterprise revenue outcomes.
            </motion.p>

            {/* Enterprise Assurance Indicators (With Interactive Hover Motion & No Buttons) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-6 flex flex-wrap items-center gap-2.5 sm:gap-3"
            >
              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-cyan-200 cursor-default shadow-xs"
              >
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Cross-Device Stitching</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-emerald-200 cursor-default shadow-xs"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Algorithmic Friction Radar</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-sky-200 cursor-default shadow-xs"
              >
                <Database className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Voice-of-Customer NLP</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-cyan-200 cursor-default shadow-xs"
              >
                <LineChart className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Multi-Touch Attribution</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: EXECUTIVE PERSPECTIVE (Clean Light Corporate Theme - Large Legible Text)
          ========================================================================= */}
      <section id="telemetry-evolution" className="py-24 bg-gradient-to-b from-white via-[#F8FBFE] to-white border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Column: Executive Narrative & 3 Large Legible Pillars */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-300 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#0070C0]">
                <Activity className="w-4 h-4 text-[#0070C0]" />
                <span>EXECUTIVE TELEMETRY PERSPECTIVE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
                Architecting Omnichannel <span className="text-[#0070C0]">Journey Telemetry &amp; Action</span>
              </h2>

              <div className="border-l-4 border-[#0070C0] border-y border-r border-slate-300 pl-5 py-3.5 bg-gradient-to-r from-sky-50/80 via-sky-50/30 to-transparent rounded-r-2xl">
                <p className="text-base sm:text-lg font-semibold text-slate-800 leading-relaxed italic">
                  &ldquo;Traditional web analytics captures delayed pageviews and vanity traffic counts; modern digital intelligence demands real-time journey telemetry that diagnoses why enterprise customers hesitate, where workflows stall, and how experience directly governs gross margin and contract renewal.&rdquo;
                </p>
              </div>

              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
                KNOOVIQ helps enterprise leadership transition away from sampled, isolated clickstream silos toward unified behavioral telemetry graphs. We connect raw client-side interactions directly to persistent customer identity graphs, conversion funnels, and ERP revenue realization with deterministic audit compliance.
              </p>

              {/* 3 Executive Pillars (Clear, Large, Highly Legible Text with Icons) */}
              <div className="space-y-4 pt-2">
                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <Radio className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-950">Lossless Stream Ingestion</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Sub-second event streaming capturing DOM changes, API latency events, and micro-interactions with zero client-side browser overhead.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <GitBranch className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-950">Deterministic Identity Graphing</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Stitching anonymous multi-device browsing sessions to verified customer accounts and ERP billing trees with persistent journey continuity.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-950">Automated Closed-Loop Remediation</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Event webhooks dispatching proactive intervention alerts to customer success teams and automated tickets to engineering desks.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Interactive Evolution Visual & 6 Professional Step Buttons */}
            <div className="lg:col-span-6 space-y-5">

              <div
                className="relative rounded-2xl overflow-hidden border-2 border-slate-300 shadow-xl bg-slate-900 group h-[440px] sm:h-[540px] lg:h-[620px] w-full cursor-pointer"
                onClick={() => setActiveJourneyStep((activeJourneyStep + 1) % journeySteps.length)}
                title="Click image to advance to next telemetry step"
              >
                <img
                  src="/images/experience_analytics_console.jpg"
                  alt="Enterprise Journey Telemetry & Experience Analytics Console"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-lg bg-slate-900/90 backdrop-blur-md border border-cyan-400/50 text-xs sm:text-sm font-mono font-bold text-cyan-300 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                  <span>TELEMETRY FOCUS: {journeySteps[activeJourneyStep].label.toUpperCase()}</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1.5 p-3.5 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-700/80">
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
                      className={`p-3.5 rounded-2xl border text-left transition-all flex items-center gap-3 cursor-pointer ${isSelected
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
          SECTION 3: ENTERPRISE CHALLENGES (THE COST OF BLIND EXPERIENCE GAPS)
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-mono font-bold tracking-wider uppercase mb-3">
              <AlertTriangle className="w-3.5 h-3.5 text-red-500" />
              <span>ENTERPRISE ROADBLOCKS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Why Legacy Web Analytics Fails Modern Enterprise Ecosystems
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              When business-critical revenue depends on omnichannel portals and complex B2B buyer journeys, simplistic pageview metrics leave enterprise leadership operating with massive blind spots.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challengeCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-red-600 px-2 py-0.5 rounded bg-red-50 border border-red-100">
                      {card.code}
                    </span>
                    <XCircle className="w-4 h-4 text-red-400" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {card.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <div className="text-[11px] font-mono font-bold text-[#0070C0] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#0070C0]" />
                    <span>KNOOVIQ REMEDY</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed font-normal">
                    {card.remedy}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: CIRCULAR CHEVRON ECOSYSTEM WHEEL
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-[#0B1528] text-white relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0070C0]/15 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold tracking-wider uppercase mb-3">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>THE 8-DIMENSION JOURNEY TELEMETRY ENGINE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
              An Integrated Behavioral Intelligence Architecture
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Hover over or inspect each interconnected telemetry segment to examine how KNOOVIQ unifies real-time event streaming, deterministic identity graphs, and predictive retention modeling.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Synchronized Detail Card (Segments 4-7) */}
            <div className="lg:col-span-3 space-y-3 order-2 lg:order-1">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-widest px-1 font-semibold">
                PREDICTIVE &amp; ACTION LAYERS
              </div>
              {wheelSegments.slice(4, 8).map((seg, i) => {
                const actualIndex = i + 4;
                const isHovered = hoveredWheelIndex === actualIndex;
                const IconComponent = seg.icon;
                return (
                  <div
                    key={seg.id}
                    onMouseEnter={() => setHoveredWheelIndex(actualIndex)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer ${
                      isHovered
                        ? 'bg-slate-900 border-[#0070C0] shadow-lg shadow-[#0070C0]/20 translate-x-1'
                        : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${seg.textColor}`}>
                        {seg.badge}
                      </span>
                      <IconComponent className={`w-4 h-4 ${isHovered ? seg.textColor : 'text-slate-500'}`} />
                    </div>
                    <h4 className="text-xs font-bold text-white mb-1 leading-snug">
                      {seg.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                      {seg.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Center Circular Radial Chevron Wheel */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center order-1 lg:order-2">
              <div className="relative w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] flex items-center justify-center">
                <svg viewBox="0 0 500 500" className="w-full h-full select-none">
                  <defs>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="8" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Interlocking SVG Chevron Segments */}
                  {wheelSegments.map((segment, index) => {
                    const isHovered = hoveredWheelIndex === index;
                    const pathData = getChevronPath(index);
                    const coords = getIconCoords(index);
                    const IconComponent = segment.icon;

                    return (
                      <g
                        key={segment.id}
                        className="cursor-pointer transition-all duration-300"
                        onMouseEnter={() => setHoveredWheelIndex(index)}
                      >
                        <path
                          d={pathData}
                          fill={isHovered ? segment.color : '#13233D'}
                          stroke={isHovered ? '#ffffff' : '#1E3A5F'}
                          strokeWidth={isHovered ? 2.5 : 1.2}
                          filter={isHovered ? 'url(#glow)' : undefined}
                          className="transition-colors duration-300"
                        />
                        <foreignObject
                          x={coords.x - 14}
                          y={coords.y - 14}
                          width={28}
                          height={28}
                          className="pointer-events-none"
                        >
                          <div className="w-full h-full flex items-center justify-center">
                            <IconComponent
                              className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors ${
                                isHovered ? 'text-white drop-shadow' : 'text-slate-400'
                              }`}
                            />
                          </div>
                        </foreignObject>
                      </g>
                    );
                  })}

                  {/* Central Core Reactor Hub */}
                  <circle cx="250" cy="250" r="105" fill="#0A1324" stroke="#0070C0" strokeWidth="2.5" />
                  <circle cx="250" cy="250" r="98" fill="none" stroke="#1E3A5F" strokeWidth="1" strokeDasharray="4 4" />
                </svg>

                {/* Center Reactor Inner HTML Display */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center pointer-events-none">
                  <Activity className="w-6 h-6 text-cyan-400 mb-1 animate-pulse" />
                  <span className="text-[10px] font-mono tracking-widest uppercase text-cyan-300 font-bold">
                    JOURNEY TELEMETRY CORE
                  </span>
                  <div className="text-xs sm:text-sm font-black text-white mt-1 max-w-[170px] leading-snug">
                    {currentSegment.title}
                  </div>
                  <span className="text-[9px] font-mono text-slate-400 mt-1">
                    {currentSegment.metric}
                  </span>
                </div>
              </div>

              {/* Active Segment Pill Below Wheel */}
              <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-slate-300">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: currentSegment.color }} />
                <span>ACTIVE LAYER: <strong className="text-white">{currentSegment.badge}</strong></span>
              </div>
            </div>

            {/* Right Synchronized Detail Card (Segments 0-3) */}
            <div className="lg:col-span-3 space-y-3 order-3">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-widest px-1 font-semibold">
                INGESTION &amp; RECONSTRUCTION
              </div>
              {wheelSegments.slice(0, 4).map((seg, i) => {
                const isHovered = hoveredWheelIndex === i;
                const IconComponent = seg.icon;
                return (
                  <div
                    key={seg.id}
                    onMouseEnter={() => setHoveredWheelIndex(i)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer ${
                      isHovered
                        ? 'bg-slate-900 border-[#0070C0] shadow-lg shadow-[#0070C0]/20 -translate-x-1'
                        : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${seg.textColor}`}>
                        {seg.badge}
                      </span>
                      <IconComponent className={`w-4 h-4 ${isHovered ? seg.textColor : 'text-slate-500'}`} />
                    </div>
                    <h4 className="text-xs font-bold text-white mb-1 leading-snug">
                      {seg.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
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
          SECTION 5: ARCHITECTURAL EVOLUTION & TECHNICAL DEPTH
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-[#0070C0] text-xs font-mono font-bold tracking-wider uppercase mb-3">
              <Cpu className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>TECHNICAL ARCHITECTURE &amp; EVALUATION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Architectural Rigor vs. Legacy Siloed Analytics
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Compare conventional aggregated web metrics with KNOOVIQ&rsquo;s real-time journey telemetry mesh, or inspect our 4-tier streaming technical architecture.
            </p>

            {/* Sandbox View Mode Tabs */}
            <div className="mt-8 inline-flex p-1.5 rounded-xl bg-slate-100 border border-slate-200">
              <button
                type="button"
                onClick={() => setActiveSandboxTab('comparison')}
                className={`px-4 sm:px-6 py-2.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  activeSandboxTab === 'comparison'
                    ? 'bg-white text-[#0070C0] shadow-md shadow-slate-200'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                COMPARISON MATRIX
              </button>
              <button
                type="button"
                onClick={() => setActiveSandboxTab('layers')}
                className={`px-4 sm:px-6 py-2.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  activeSandboxTab === 'layers'
                    ? 'bg-white text-[#0070C0] shadow-md shadow-slate-200'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                SYSTEM ARCHITECTURE &amp; LAYERS
              </button>
              <button
                type="button"
                onClick={() => setActiveSandboxTab('telemetry')}
                className={`px-4 sm:px-6 py-2.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  activeSandboxTab === 'telemetry'
                    ? 'bg-white text-[#0070C0] shadow-md shadow-slate-200'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                DIAGNOSTIC TELEMETRY CHAMBER
              </button>
            </div>
          </div>

          {/* TAB 1: COMPARISON MATRIX */}
          {activeSandboxTab === 'comparison' && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm"
            >
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white font-mono uppercase tracking-wider text-xs">
                      <th className="py-4 px-6 font-bold w-1/4">Telemetry Dimension</th>
                      <th className="py-4 px-6 font-bold w-3/8 text-slate-300">Legacy Web Analytics</th>
                      <th className="py-4 px-6 font-bold w-3/8 text-cyan-300 bg-slate-800/90">
                        KNOOVIQ Journey Telemetry Mesh
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {comparisonRows.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}>
                        <td className="py-4 px-6 font-bold text-slate-900 font-mono text-xs">
                          {row.capability}
                        </td>
                        <td className="py-4 px-6 text-slate-600 leading-relaxed font-normal">
                          {row.legacy}
                        </td>
                        <td className="py-4 px-6 text-slate-900 font-semibold bg-sky-50/50 leading-relaxed">
                          {row.knooviq}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {/* TAB 2: SYSTEM ARCHITECTURE & LAYERS */}
          {activeSandboxTab === 'layers' && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              {/* Architecture Blueprint Visual */}
              <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl relative">
                <div className="p-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                      FULL-STACK EXPERIENCE ANALYTICS BLUEPRINT
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">DISTRIBUTED STREAMING MESH</span>
                </div>
                <div className="p-4 sm:p-6 bg-slate-950 flex items-center justify-center">
                  <img
                    src="/images/experience_analytics_mesh.jpg"
                    alt="Full-Stack Experience Analytics Architecture Diagram"
                    className="w-full max-h-[460px] object-contain rounded-lg select-none"
                  />
                </div>
              </div>

              {/* 4 Technical Layers Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {architectureLayers.map((layer, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
                    <div className="text-xs font-mono font-bold text-[#0070C0] mb-1">{layer.layer}</div>
                    <h4 className="text-base font-bold text-slate-900 mb-2">{layer.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-4">
                      {layer.desc}
                    </p>
                    <div className="pt-3 border-t border-slate-200">
                      <span className="text-[11px] font-mono font-semibold text-slate-500 uppercase tracking-wider">
                        CORE STACK:
                      </span>
                      <p className="text-xs font-mono font-bold text-slate-800 mt-0.5">{layer.tech}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* TAB 3: DIAGNOSTIC TELEMETRY CHAMBER */}
          {activeSandboxTab === 'telemetry' && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-slate-200 bg-slate-950 text-white overflow-hidden shadow-2xl p-6 sm:p-8"
            >
              {/* Telemetry Scenario Switcher */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div>
                  <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold">
                    INTERACTIVE TELEMETRY LAB
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-white mt-0.5">
                    Live Experience Telemetry Simulations
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  {(['omnichannel', 'funnel', 'churn'] as const).map((key) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setActiveTelemetryTab(key)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                        activeTelemetryTab === key
                          ? 'bg-[#0070C0] text-white'
                          : 'bg-slate-900 text-slate-400 hover:text-white'
                      }`}
                    >
                      {key.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Scenario Body */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 items-center">
                <div className="lg:col-span-5 space-y-4">
                  <div className="inline-block px-2.5 py-1 rounded bg-cyan-950 border border-cyan-800 text-cyan-300 font-mono text-[11px]">
                    {telemetryScenarios[activeTelemetryTab].accuracy}
                  </div>
                  <h4 className="text-xl font-bold text-white">
                    {telemetryScenarios[activeTelemetryTab].title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {telemetryScenarios[activeTelemetryTab].summary}
                  </p>
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-400">
                    PROCESSING LATENCY: <span className="text-cyan-300 font-bold">{telemetryScenarios[activeTelemetryTab].latency}</span>
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-3">
                  {telemetryScenarios[activeTelemetryTab].findings.map((f, i) => (
                    <div key={i} className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-white">{f.title}</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0070C0]/40 text-cyan-300 font-semibold">
                          {f.metric}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed font-normal">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chamber Visual Footer */}
              <div className="mt-8 pt-6 border-t border-slate-800 rounded-xl overflow-hidden">
                <img
                  src="/images/experience_analytics_chamber.jpg"
                  alt="Telemetry Diagnostic Chamber"
                  className="w-full max-h-56 object-cover rounded-lg"
                />
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: PHASED IMPLEMENTATION ROADMAP
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-[#0070C0] text-xs font-mono font-bold tracking-wider uppercase mb-3">
              <Workflow className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>THE ENGAGEMENT BLUEPRINT</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              A 16-Week Journey Telemetry Implementation Methodology
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              From audit and event taxonomy design to machine learning friction radar and closed-loop enterprise governance, our structured framework ensures measurable risk mitigation and accelerated time-to-insight.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmapStages.map((stage, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-[#0070C0] px-2.5 py-0.5 rounded bg-sky-50 border border-sky-100">
                      {stage.phase}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 font-semibold">{stage.weeks}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1 leading-snug">
                    {stage.title}
                  </h3>
                  <div className="text-xs font-mono text-cyan-700 font-semibold mb-4">
                    FOCUS: {stage.focus}
                  </div>
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    {stage.deliverables.map((del, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0070C0] shrink-0 mt-0.5" />
                        <span className="leading-relaxed font-normal">{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: STRATEGIC FAQS (EXECUTIVE PERSPECTIVES)
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200 relative overflow-hidden">
        {/* Ambient Top Glow and Micro-Grid Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-b from-[#0070C0]/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-[#0070C0] text-xs font-mono font-bold tracking-wider uppercase mb-3">
              <Search className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>FREQUENTLY ASKED STRATEGIC QUESTIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Enterprise Journey Telemetry &amp; Analytics FAQs
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Direct insights into architecture migration, privacy compliance, client-side latency, and closed-loop operational governance.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-slate-50 border-l-4 border-l-[#0070C0] border-t border-r border-b border-slate-200 shadow-md'
                      : 'bg-white border border-slate-200 hover:border-slate-300 shadow-sm'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full py-5 px-6 sm:px-7 flex items-center justify-between gap-4 text-left cursor-pointer"
                  >
                    <span className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {faq.q}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? 'bg-[#0070C0] text-white rotate-180' : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-6 sm:px-7 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 font-normal">
                          {faq.a}
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
          SECTION 8: STRATEGIC CALL TO ACTION (CTA)
          ========================================================================= */}
      <section className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-gradient-to-r from-[#003865] via-[#005A9C] to-[#0070C0] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-400/20 via-transparent to-transparent pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono font-bold uppercase tracking-widest text-cyan-200">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            <span>ENTERPRISE TELEMETRY ACCELERATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Unify Journey Telemetry &amp; Eliminate Silent Enterprise Friction?
          </h2>

          <p className="text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed font-normal">
            Partner with KNOOVIQ to deploy real-time behavioral ingestion, cross-device identity graphs, and multi-touch revenue attribution across your digital landscape.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() =>
                onOpenContact
                  ? onOpenContact('Experience Analytics Consultation')
                  : undefined
              }
              className="px-8 py-4 rounded-xl bg-white text-[#003865] font-black text-sm tracking-wide shadow-xl hover:bg-sky-50 transition-all transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
            >
              <span>REQUEST EXPERIENCE ANALYTICS CONSULTATION</span>
              <ArrowRight className="w-4 h-4 text-[#003865]" />
            </button>

            <Link
              to="/digital-experience/personalization"
              className="px-6 py-4 rounded-xl bg-white/10 text-white font-bold text-sm border border-white/20 hover:bg-white/15 transition-all"
            >
              Explore Hyper-Personalization
            </Link>
          </div>

          <div className="pt-8 flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-cyan-100">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-300" />
              <span>Sub-Second Edge Latency</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-cyan-300" />
              <span>Zero UI Overhead</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-300" />
              <span>Strict GDPR &amp; CCPA Compliance</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Full Screen Lightbox Modal */}
      {isHeroModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200"
          onClick={() => setIsHeroModalOpen(false)}
        >
          <div
            className="relative max-w-6xl w-full max-h-[90vh] bg-slate-950 border border-cyan-500/30 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800 bg-slate-900/80">
              <div className="flex items-center gap-2.5">
                <BarChart3 className="w-4 h-4 text-cyan-400" />
                <span className="text-xs sm:text-sm font-mono font-bold text-white uppercase tracking-wider">
                  Enterprise Experience Analytics &amp; Journey Telemetry
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsHeroModalOpen(false)}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="Close modal (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative flex-1 overflow-auto bg-slate-950 flex items-center justify-center p-2 sm:p-4">
              <img
                src="/images/enterprise_experience_analytics_journey_telemetry_hero.jpg"
                alt="Enterprise Experience Analytics Architecture Full View"
                className="w-full h-auto max-h-[78vh] object-contain rounded-lg"
              />
            </div>
            <div className="px-5 py-2.5 border-t border-slate-800 bg-slate-900/60 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Full Panoramic Architecture Diagram</span>
              <span className="text-cyan-400">Press ESC or click outside to close</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExperienceAnalyticsPage;
