import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Database,
  Network,
  Layers,
  ShieldCheck,
  Zap,
  BarChart3,
  FileCheck,
  AlertTriangle,
  RefreshCw,
  Search,
  ChevronRight,
  Shield,
  Scale,
  Activity,
  Lock,
  Play,
  Pause,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ChevronDown,
  ExternalLink,
  XCircle,
  Server,
  Workflow,
  Cpu,
  GitBranch,
  Terminal,
  Code2,
  Sliders,
  FileSpreadsheet,
  Eye,
  TrendingUp,
  PieChart,
  LineChart,
  Binary,
  Target,
  Gauge,
  BrainCircuit,
  Wrench,
  Boxes,
  HelpCircle,
  Microscope,
  Compass,
  Check,
  Radio,
  Clock,
  Flame,
  RadioTower,
  BellRing,
  Maximize2,
  X
} from 'lucide-react';

interface RealTimeAnalyticsPageProps {
  onOpenContact?: (defaultTopic?: string) => void;
}

export const RealTimeAnalyticsPage: React.FC<RealTimeAnalyticsPageProps> = ({
  onOpenContact
}) => {
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

  // State for Section 5: Architecture Comparison Sandbox Tab
  const [activeSandboxTab, setActiveSandboxTab] = useState<'comparison' | 'layers' | 'protocols'>('comparison');

  // State for Section 5 Tab 3: Specific Protocol Sandbox Sub-Tab
  const [activeProtocolTab, setActiveProtocolTab] = useState<'streaming-mesh' | 'cep-engine' | 'realtime-olap'>('streaming-mesh');

  // State for Section 7: FAQ Accordion
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // =========================================================================
  // DATA STRUCTURES
  // =========================================================================

  // Section 4: Circular Chevron Segments (8 Interlocking Real-Time Streaming Layers)
  const wheelSegments = [
    {
      id: 'event-stream-backbone',
      shortTag: 'INGESTION',
      title: 'Distributed Event Stream Backbones',
      desc: 'High-throughput, fault-tolerant message streaming handling millions of events per second with sub-millisecond latencies and zero data loss.',
      badge: 'HIGH-THROUGHPUT INGESTION',
      metric: '> 1.2M Events/Sec Ingestion',
      side: 'right',
      color: '#0070C0',
      textColor: 'text-sky-400',
      bgGlow: 'rgba(0, 112, 192, 0.35)',
      icon: RadioTower
    },
    {
      id: 'stateful-stream-processing',
      shortTag: 'FLINK / CEP',
      title: 'Stateful Stream Processing & Joins',
      desc: 'In-memory temporal sliding, tumbling, and session windows joining disparate streams and calculating running KPIs on live streaming data.',
      badge: 'CONTINUOUS WINDOWING',
      metric: '< 5ms Processing Latency',
      side: 'right',
      color: '#0284C7',
      textColor: 'text-cyan-400',
      bgGlow: 'rgba(2, 132, 199, 0.35)',
      icon: Activity
    },
    {
      id: 'subsecond-olap',
      shortTag: 'SUB-SEC OLAP',
      title: 'Real-Time Columnar OLAP Storage',
      desc: 'Specialized real-time storage engines executing distributed analytical queries across billions of raw events in tens of milliseconds.',
      badge: 'SUB-SECOND QUERIES',
      metric: '< 50ms Query Response',
      side: 'right',
      color: '#06B6D4',
      textColor: 'text-cyan-300',
      bgGlow: 'rgba(6, 182, 212, 0.35)',
      icon: Database
    },
    {
      id: 'in-stream-anomaly',
      shortTag: 'FAST AI',
      title: 'In-Stream Anomaly & Fraud Detection',
      desc: 'Deploying optimized machine learning inference engines directly inside streaming pipelines to intercept fraudulent transactions in-flight.',
      badge: 'IN-STREAM INFERENCE',
      metric: 'Zero-Lag Interception',
      side: 'right',
      color: '#10B981',
      textColor: 'text-emerald-400',
      bgGlow: 'rgba(16, 185, 129, 0.35)',
      icon: Zap
    },
    {
      id: 'live-telemetry-cockpits',
      shortTag: 'LIVE VISUALS',
      title: 'Operational Live Telemetry Dashboards',
      desc: 'Real-time WebSocket and server-sent event visualization layers pushing instant operational telemetry to mission control and NOC desks.',
      badge: 'SUB-SECOND PUSH',
      metric: 'Sub-Second Screen Push',
      side: 'left',
      color: '#F59E0B',
      textColor: 'text-amber-400',
      bgGlow: 'rgba(245, 158, 11, 0.35)',
      icon: Gauge
    },
    {
      id: 'schema-registry-governance',
      shortTag: 'SCHEMAS',
      title: 'Event Schema Registry & Contracts',
      desc: 'Strict Avro and Protobuf schema evolution rules enforcing backward and forward compatibility, eliminating silent pipeline breakage.',
      badge: 'SCHEMA GOVERNANCE',
      metric: '100% Contract Compliance',
      side: 'left',
      color: '#EC4899',
      textColor: 'text-pink-400',
      bgGlow: 'rgba(236, 72, 153, 0.35)',
      icon: FileCheck
    },
    {
      id: 'change-data-capture',
      shortTag: 'ZERO-COPY CDC',
      title: 'Low-Impact Change Data Capture (CDC)',
      desc: 'Log-based replication extracting transactional database inserts and updates with zero compute overhead on source SAP HANA and SQL systems.',
      badge: 'ZERO-OVERHEAD CDC',
      metric: '< 100ms Database Replication',
      side: 'left',
      color: '#8B5CF6',
      textColor: 'text-purple-400',
      bgGlow: 'rgba(139, 92, 246, 0.35)',
      icon: GitBranch
    },
    {
      id: 'closed-loop-reflexes',
      shortTag: 'ACTIONING',
      title: 'Closed-Loop Automated Reflex Actions',
      desc: 'Event-driven architectural triggers executing instant business actions: auto-reordering safety stocks, updating dynamic pricing, and dispatching alerts.',
      badge: 'INSTANT ERP REFLEX',
      metric: 'Automated Event Triggering',
      side: 'left',
      color: '#6366F1',
      textColor: 'text-indigo-400',
      bgGlow: 'rgba(99, 102, 241, 0.35)',
      icon: BellRing
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

  // Section 2: Journey Steps (6 Progressive Real-Time Evolution Phases)
  const journeySteps = [
    {
      id: 'event-streaming-mesh',
      label: '1. Event Streaming Mesh',
      sublabel: 'Sub-Second Ingestion',
      desc: 'Deploying high-throughput distributed event backbones decoupling microservices and transactional databases into asynchronous pub-sub topics.',
      tech: 'Apache Kafka, Redpanda, Event Hubs',
      icon: RadioTower,
      highlights: [
        'Millions of Events per Second',
        'Persistent Partitioned Commit Log',
        'Decoupled Producer-Consumer Architecture'
      ]
    },
    {
      id: 'stateful-stream-joins',
      label: '2. Stateful Stream Joins',
      sublabel: 'Continuous Windowing',
      desc: 'Executing stateful computations across high-velocity event streams, combining clickstream data with customer profile caches in memory.',
      tech: 'Apache Flink, Spark Streaming',
      icon: Activity,
      highlights: [
        'Tumbling & Sliding Temporal Windows',
        'Stateful Stream-Stream Joins',
        'RocksDB Memory-Mapped State Backends'
      ]
    },
    {
      id: 'complex-event-processing',
      label: '3. Complex Event Processing',
      sublabel: 'Pattern Matching CEP',
      desc: 'Identifying complex temporal multi-event patterns—such as rapid credit card swipes in geographically distant locations—within milliseconds.',
      tech: 'Flink CEP, Kafka Streams',
      icon: BrainCircuit,
      highlights: [
        'Temporal Pattern Recognition',
        'Sub-Millisecond Fraud Scoring',
        'Dynamic Multi-Condition Rules Engines'
      ]
    },
    {
      id: 'subsecond-olap-storage',
      label: '4. Sub-Second OLAP Storage',
      sublabel: 'Real-Time Columnar Stores',
      desc: 'Streaming events directly into real-time vectorized columnar stores that power interactive operational queries over petabytes without indexing lag.',
      tech: 'ClickHouse, Apache Pinot, StarRocks',
      icon: Database,
      highlights: [
        'Direct Stream Sink Ingestion',
        'Vectorized Parallel Execution',
        'Sub-50ms Dashboard Query Speed'
      ]
    },
    {
      id: 'operational-live-cockpits',
      label: '5. Operational Live Cockpits',
      sublabel: 'Sub-Second Visualizations',
      desc: 'Delivering live operational telemetry through WebSockets and real-time push engines to mission control, NOC desks, and supply chain control towers.',
      tech: 'WebSockets, SSE, Grafana, Custom Canvas',
      icon: Gauge,
      highlights: [
        'Continuous Push Architecture',
        'Zero-Refresh Interactive Canvases',
        'Real-Time Anomaly Highlight Overlays'
      ]
    },
    {
      id: 'automated-reflex-actions',
      label: '6. Automated Reflex Actions',
      sublabel: 'Instant Closed-Loop Triggers',
      desc: 'Transforming stream detections into automated operational execution: triggering SAP purchase orders, adjusting dynamic pricing, and dispatching engineers.',
      tech: 'SAP Event Mesh, Webhooks, REST APIs',
      icon: Zap,
      highlights: [
        'Zero-Latency Closed-Loop Execution',
        'Direct Operational ERP Write-Back',
        'Automated Failsafe Trip-Locks'
      ]
    }
  ];

  // Section 3: Enterprise Real-Time Challenges (6 Comprehensive Cards)
  const realTimeChallenges = [
    {
      icon: Clock,
      tag: 'BATCH LATENCY PENALTY',
      title: 'Overnight ETL Stalls Operational Reaction',
      desc: '24-hour delayed batch data blinds operators to flash supply shortages, sudden demand surges, and fraudulent transactions until financial damage is done.',
      footer: 'Low-Latency Event Streaming Mesh'
    },
    {
      icon: AlertTriangle,
      tag: 'OUT-OF-ORDER CHAOS',
      title: 'Event Loss & Temporal Miscalculation',
      desc: 'Asynchronous network delays cause events to arrive out of chronological order, corrupting financial reconciliations and session metrics.',
      footer: 'Watermarking & Exactly-Once Semantics'
    },
    {
      icon: Flame,
      tag: 'STATEFUL MEMORY BLOAT',
      title: 'Cluster Out-of-Memory Pipeline Crashes',
      desc: 'High-velocity sliding windows and unbounded stream joins exhaust streaming cluster RAM, causing frequent pipeline failures during peak traffic.',
      footer: 'RocksDB State Backend Optimization'
    },
    {
      icon: Database,
      tag: 'QUERY PERFORMANCE COLLAPSE',
      title: 'Relational Databases Choking on Events',
      desc: 'Traditional relational and batch databases crawl to a halt when queried against billions of high-frequency IoT or transaction events simultaneously.',
      footer: 'Real-Time Columnar OLAP (ClickHouse)'
    },
    {
      icon: BellRing,
      tag: 'ALERT FATIGUE DEBT',
      title: 'False Positive Floods in Mission Control',
      desc: 'Primitive static threshold rules flood operations centers with thousands of false alarms daily, causing engineers to ignore genuine critical failures.',
      footer: 'Adaptive Machine Learning Anomaly Filters'
    },
    {
      icon: Network,
      tag: 'SILOED STREAM ISLANDS',
      title: 'Kafka Pipelines Detached from Core ERP',
      desc: 'Event streaming platforms operate in isolation from enterprise SAP master data, making it impossible to enrich telemetry with customer credit limits.',
      footer: 'Bidirectional SAP Event Mesh Bridges'
    }
  ];

  // Section 5: Side-by-side Architectural Comparison Matrix
  const architecturalComparison = [
    {
      dimension: 'Data Freshness & Latency',
      legacyApproach: 'Overnight batch ETL pipelines with 12 to 24-hour operational blind spots and frequent morning pipeline failures.',
      modernApproach: 'Sub-second event stream processing with immediate in-flight computation and instant operational visibility.',
      statusBadge: 'SUB-SECOND'
    },
    {
      dimension: 'Processing Paradigm',
      legacyApproach: 'Store-first, process-later paradigm requiring petabytes of intermediate disk staging and costly data extracts.',
      modernApproach: 'Continuous in-memory event-driven computation evaluating events in-flight before persisting to long-term storage.',
      statusBadge: 'EVENT-DRIVEN'
    },
    {
      dimension: 'Analytical Query Engine',
      legacyApproach: 'Slow batch SQL queries over partitioned tables requiring heavy pre-aggregation and minutes to return results.',
      modernApproach: 'Vectorized real-time columnar engines executing ad-hoc queries over billions of raw events in under 50ms.',
      statusBadge: 'VECTORIZED OLAP'
    },
    {
      dimension: 'Out-of-Order Handling',
      legacyApproach: 'Ignored or manually patched in daily reconciliations, causing inaccurate billing and distorted session timelines.',
      modernApproach: 'Event-time watermarking with deterministic late-arriving data policies and audited exactly-once delivery.',
      statusBadge: 'EXACTLY-ONCE'
    },
    {
      dimension: 'Operational Action Execution',
      legacyApproach: 'Static notifications emailed to operators requiring manual login into ERP systems to enter corrective orders.',
      modernApproach: 'Automated event-driven closed-loop triggers directly executing purchase orders and parameter changes in SAP.',
      statusBadge: 'CLOSED-LOOP'
    }
  ];

  // Section 5: Protocol Sandbox Tab Specifications
  const protocolDetails = {
    'streaming-mesh': {
      badge: 'DISTRIBUTED EVENT BACKBONE',
      title: 'Enterprise Event Mesh & Schema Registry',
      desc: 'Decouple core applications with a resilient distributed event log that guarantees high throughput, exactly-once delivery, and strict schema compliance.',
      specs: [
        { label: 'Message Broker', val: 'Apache Kafka / Redpanda Cluster' },
        { label: 'Throughput Capacity', val: '> 1,000,000 Messages/Sec' },
        { label: 'Schema Validation', val: 'Avro & Protobuf Contract Registry' },
        { label: 'Delivery Guarantee', val: 'Idempotent Exactly-Once (EOS)' }
      ],
      steps: [
        { name: 'Producer Ingestion', detail: 'Captures IoT sensors, web clickstreams, and transactional commits via Kafka REST proxies.' },
        { name: 'Schema Serialization', detail: 'Validates payload against Schema Registry, preventing unversioned fields from breaking consumers.' },
        { name: 'Partitioned Log Commit', detail: 'Writes immutable records across distributed brokers with cross-AZ quorum replication.' }
      ]
    },
    'cep-engine': {
      badge: 'STATEFUL STREAM PROCESSING',
      title: 'Complex Event Processing (CEP) & In-Stream AI',
      desc: 'Compute complex multi-stream temporal relationships, join live transactions with reference master data, and execute sub-millisecond fraud scoring.',
      specs: [
        { label: 'Stream Engine', val: 'Apache Flink Distributed Runtime' },
        { label: 'State Storage', val: 'Incremental RocksDB Memory-Mapped' },
        { label: 'Windowing Functions', val: 'Sliding, Tumbling & Session Windows' },
        { label: 'Model Serving', val: 'ONNX In-Memory Vector Inference' }
      ],
      steps: [
        { name: 'Stream-Table Join', detail: 'Enriches incoming financial transactions with cached customer risk profiles within 2ms.' },
        { name: 'Temporal Pattern Match', detail: 'Applies CEP rules across 5-minute sliding windows to detect abnormal velocity spikes.' },
        { name: 'In-Stream Scoring', detail: 'Executes lightweight fraud classification model directly inside the pipeline task slot.' }
      ]
    },
    'realtime-olap': {
      badge: 'SUB-SECOND OLAP FABRIC',
      title: 'Real-Time Columnar Vectorized Analytics',
      desc: 'Ingest millions of streaming events continuously while serving concurrent executive dashboards and analytical queries in tens of milliseconds.',
      specs: [
        { label: 'Storage Engine', val: 'ClickHouse / StarRocks Columnar' },
        { label: 'Ingestion Latency', val: 'Sub-Second Stream Tail Sinking' },
        { label: 'Compression Ratio', val: '85–90% Vectorized Columnar' },
        { label: 'Query Performance', val: '< 45ms for 500M Row Scans' }
      ],
      steps: [
        { name: 'Micro-Batch Sinking', detail: 'Flushes streaming buffers into columnar parts without table lock contention.' },
        { name: 'Background Compaction', detail: 'Merges sorted parts in background to eliminate fragmentation and optimize disk scans.' },
        { name: 'Vectorized Query Execution', detail: 'Executes SIMD-accelerated aggregation queries directly from memory-mapped files.' }
      ]
    }
  };

  // Section 6: Phased Transformation Stages
  const transformationPhases = [
    {
      phase: 'STAGE 01',
      title: 'Event Architecture Discovery & Latency Baseline Audit',
      focus: 'Identifying high-value real-time use cases, cataloging legacy batch bottlenecks, assessing network bandwidth, and formulating technical streaming specifications.',
      deliverable: 'Event-Driven Architecture Blueprint & ROI Value Assessment',
      icon: Search
    },
    {
      phase: 'STAGE 02',
      title: 'Event Mesh Infrastructure & Schema Governance Setup',
      focus: 'Deploying enterprise Kafka/Flink clusters, configuring Schema Registries, implementing Log-Based CDC on core databases, and hardening security.',
      deliverable: 'Resilient Multi-AZ Event Mesh & Audited Schema Registry',
      icon: RadioTower
    },
    {
      phase: 'STAGE 03',
      title: 'Stateful Stream Processing & In-Stream Analytics Pipelines',
      focus: 'Constructing continuous tumbling/sliding window transformations, integrating in-memory ML models, and connecting sub-second columnar OLAP storage.',
      deliverable: 'Continuous Streaming Pipeline & Sub-Second Query Engine',
      icon: Activity
    },
    {
      phase: 'STAGE 04',
      title: 'Operational Live Cockpits & Closed-Loop Reflex Automation',
      focus: 'Connecting WebSocket visualization canvases to NOC desks, building automated SAP S/4HANA write-back reflex actions, and scaling enterprise adoption.',
      deliverable: 'Live Operational Control Towers & Automated ERP Write-Backs',
      icon: Zap
    }
  ];

  // Section 7: Enterprise FAQs
  const realTimeFaqs = [
    {
      question: 'How do you guarantee exactly-once processing across high-velocity event pipelines?',
      answer: 'KNOOVIQ implements end-to-end exactly-once semantics (EOS) by orchestrating transactional producers in Apache Kafka with two-phase commit state checkpoints in Apache Flink. Messages are tagged with deterministic idempotency keys, and consumer offsets are committed atomically with processing state. This guarantees that even during sudden cluster node failures or network partitions, financial transactions and telemetry metrics are never duplicated or dropped.'
    },
    {
      question: 'How does real-time streaming integrate with our core SAP S/4HANA transactional system?',
      answer: 'We connect directly to SAP via log-based Change Data Capture (CDC) and the SAP Event Mesh. Log-based CDC reads database transaction logs directly without issuing resource-heavy SELECT queries, ensuring zero performance overhead on operational SAP HANA compute. On the action side, streaming alerts write back into SAP via standard OData and RFC microservices to adjust safety stocks or generate purchase requisitions automatically.'
    },
    {
      question: 'How do you handle out-of-order events caused by mobile network disconnects or latency spikes?',
      answer: 'Our streaming architectures decouple event generation time (Event Time) from pipeline arrival time (Processing Time). We configure deterministic watermarking algorithms that allow for bounded out-of-order latency windows. If events arrive after the watermark boundary, they are routed to specialized late-arriving data reconciliation handlers and appended to historical audit records without corrupting live operational counters.'
    },
    {
      question: 'How does the total cost of ownership (TCO) of real-time streaming compare to traditional batch warehouses?',
      answer: 'While traditional wisdom assumed streaming was cost-prohibitive, modern architectures actually lower TCO by flattening compute demand. Traditional batch architectures require massive, expensive compute clusters spun up for a few hours every morning to process giant ETL backlogs. Real-time streaming processes events incrementally as they arrive, utilizing lean, continuously utilized serverless compute clusters and compressed columnar storage.'
    },
    {
      question: 'Which event streaming platforms and cloud hyperscaler stacks does KNOOVIQ support?',
      answer: 'KNOOVIQ architects cloud-agnostic, open-standard streaming fabrics. We support Apache Kafka, Confluent Cloud, Redpanda, Apache Flink, ClickHouse, Apache Pinot, AWS (MSK, Kinesis), Microsoft Azure (Event Hubs, Stream Analytics), Google Cloud (Pub/Sub, Dataflow), and SAP Business Technology Platform (SAP Event Mesh).'
    },
    {
      question: 'How do you prevent schema drift from crashing downstream streaming consumers?',
      answer: 'We mandate centralized Schema Registries (supporting Apache Avro and Protocol Buffers) across all event topics. Ingestion gateways validate message schemas prior to broker commit. By enforcing strict Backward and Forward Transitive Compatibility policies, teams can safely add fields or deprecate parameters without breaking downstream real-time dashboards or microservices.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#0070C0] selection:text-white">

      {/* =========================================================================
          SECTION 1: HERO SECTION (AI Agents Style Full Bleed Panoramic Background)
          IMAGE: /images/real-time-analytics/enterprise_realtime_streaming_analytics_hero.jpg
          ========================================================================= */}
      <section className="relative w-full min-h-[560px] sm:min-h-[620px] lg:min-h-[660px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 overflow-hidden bg-slate-950 text-white">
        {/* Full-Bleed 16:9 Panoramic Image - AI Agents Style */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/real-time-analytics/enterprise_realtime_streaming_analytics_hero.jpg"
            alt="Enterprise Real-Time Streaming Analytics & Event-Driven Telemetry"
            className="w-full h-full object-cover object-right sm:object-[78%_center] lg:object-center select-none contrast-[1.02]"
            style={{ imageRendering: '-webkit-optimize-contrast' }}
          />
        </div>

        {/* Lighter Directional Scrim for Maximum Visual Clarity & Text Contrast */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-slate-950/70 via-slate-950/30 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-2xl lg:max-w-xl space-y-6">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.55 }}
              className="space-y-4"
            >
              {/* Practice Pill Badge */}
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/70 backdrop-blur-md border border-cyan-500/30 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Real-Time Streaming &amp; Telemetry</span>
                </div>
              </div>

              {/* Animated Headline with High-Contrast Typography */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                Enterprise <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-cyan-400">
                  Real-Time Streaming Analytics &amp; Telemetry
                </span>
              </h1>

              {/* Subtitle with High Legibility */}
              <p className="text-base sm:text-lg text-slate-100 leading-relaxed font-normal pt-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                Sub-second stream processing, distributed event mesh backbones, in-memory continuous aggregations, and automated operational reflex actions for mission-critical enterprise environments.
              </p>
            </motion.div>

            {/* Enterprise Assurance Indicators */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.2 }} 
              className="pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3"
            >
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-cyan-200 shadow-sm">
                <RadioTower className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Sub-Millisecond Stream Ingestion</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-emerald-200 shadow-sm">
                <Activity className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>In-Memory Continuous Windows</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-sky-200 shadow-sm">
                <Zap className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Closed-Loop Operational Reflexes</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: EXECUTIVE PERSPECTIVE (Clean Light Corporate Theme - Large Legible Text)
          IMAGE 2 OF 3: /images/real-time-analytics/telemetry_cockpit.jpg
          ========================================================================= */}
      <section id="streaming-evolution" className="py-24 bg-gradient-to-b from-white via-[#F8FBFE] to-white border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-300 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#0070C0]">
                <Radio className="w-4 h-4 text-[#0070C0]" />
                <span>EXECUTIVE STREAMING PERSPECTIVE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
                Architecting Event-Driven Real-Time <span className="text-[#0070C0]">Streaming Intelligence</span>
              </h2>

              <div className="border-l-4 border-[#0070C0] border-y border-r border-slate-300 pl-5 py-3.5 bg-gradient-to-r from-sky-50/80 via-sky-50/30 to-transparent rounded-r-2xl">
                <p className="text-base sm:text-lg font-semibold text-slate-800 leading-relaxed italic">
                  &ldquo;In modern global commerce, data loses up to 90% of its operational value within minutes. Real-time streaming analytics shifts enterprises from passive post-mortem batch reporting to instant, event-driven detection and automated corrective reflexes before customer churn or equipment failure occurs.&rdquo;
                </p>
              </div>

              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
                Knooviq engineers enterprise event mesh architectures and sub-second streaming pipelines that unite high-volume telemetry with core business systems. We deploy Apache Kafka, Apache Flink, ClickHouse, and SAP Event Mesh to transform static batch architectures into self-orchestrating event-driven enterprises.
              </p>

              {/* 3 Executive Pillars (Clear, Large, Highly Legible Text) */}
              <div className="space-y-4 pt-2">
                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <RadioTower className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-950">Distributed Event Backbones</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      High-throughput, fault-tolerant message streaming with exactly-once processing guarantees across hybrid multi-cloud environments.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-950">Complex Event Processing (CEP)</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      In-memory temporal pattern matching, sliding anomaly detection windows, and real-time stateful stream transformations.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-950">Sub-Second Closed-Loop Reflexes</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Instant algorithmic write-backs into operational SAP S/4HANA, fraud prevention engines, and automated industrial trip-locks.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Interactive Evolution Visual (IMAGE 2 OF 3) */}
            <div className="lg:col-span-6 space-y-5">
              
              <div 
                onClick={() => setActiveJourneyStep((activeJourneyStep + 1) % journeySteps.length)}
                title="Click video to advance to next architecture step"
                className="relative rounded-2xl overflow-hidden border-2 border-slate-300 shadow-xl bg-slate-950 group h-96 sm:h-[440px] lg:h-[490px] w-full flex items-center justify-center cursor-pointer"
              >
                {/* Real-Time Event-Driven Streaming Video Stream */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain rounded-2xl transition-transform duration-700 group-hover:scale-[1.01]"
                >
                  <source src="/videos/event_driven_realtime_streaming_intelligence.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20 pointer-events-none" />
                
                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-lg bg-slate-900/90 backdrop-blur-md border border-cyan-400/50 text-xs sm:text-sm font-mono font-bold text-cyan-300 flex items-center gap-2 z-10 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                  <span>STREAMING INTELLIGENCE &bull; {journeySteps[activeJourneyStep].label.toUpperCase()}</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1.5 p-3 rounded-xl bg-slate-900/85 backdrop-blur-md border border-slate-700/80 z-10 shadow-lg">
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
                      className={`p-3.5 rounded-2xl border text-left transition-all flex items-center gap-3 cursor-pointer ${
                        isSelected
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
          SECTION 3: ENTERPRISE DATA CHALLENGES (Clean Slate-50 - Highly Visible Text)
          ========================================================================= */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3.5">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#0070C0] uppercase">
              ENTERPRISE FRICTION POINTS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950">
              Critical Impediments in Legacy Batch Architectures
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Why 24-hour batch pipelines, memory exhaustion during peak traffic, and query collapse on event logs compromise operational competitiveness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {realTimeChallenges.map((item, idx) => {
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
              INTERCONNECTED STREAMING ECOSYSTEM
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              The KNOOVIQ Real-Time Streaming Fabric
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Explore the eight mutually reinforcing layers of our production-grade streaming foundation. Hover over any segment to inspect its runtime mechanics.
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
                    className={`p-4 rounded-xl border transition-all cursor-pointer ${
                      isHovered
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
                        STREAMING CORE
                      </span>
                      <div className="text-sm sm:text-base font-black text-white leading-tight">
                        Event Fabric
                      </div>
                      <div className="text-xs text-slate-300">
                        Interactive Topology
                      </div>
                    </div>
                  )}
                </div>

              </div>

              <div className="mt-5 flex items-center justify-center">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-400/50 text-xs font-mono font-bold text-cyan-300 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                  <span>ACTIVE FABRIC: {wheelSegments[hoveredWheelIndex ?? 0]?.title.toUpperCase()}</span>
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
                    className={`p-4 rounded-xl border transition-all cursor-pointer ${
                      isHovered
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
          SECTION 5: TOPOLOGICAL ARCHITECTURE BLUEPRINT & COMPARATIVE MATRIX (Clean White Theme)
          IMAGE 3 OF 3: /images/real-time-analytics/streaming_mesh.jpg
          ========================================================================= */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3.5">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#0070C0] uppercase">
              TOPOLOGICAL ARCHITECTURE BLUEPRINT
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950">
              Modern Event Streaming vs. Legacy Batch Architectures
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Examine the concrete architectural difference between slow 24-hour batch pipelines and KNOOVIQ sub-second event-driven streaming fabrics.
            </p>
          </div>

          {/* Interactive Mode Toggle */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setActiveSandboxTab('comparison')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all border cursor-pointer ${
                activeSandboxTab === 'comparison'
                  ? 'bg-[#0070C0] text-white border-[#0070C0] shadow-md'
                  : 'bg-slate-100 text-slate-700 border-slate-200 hover:text-slate-950 hover:bg-slate-200'
              }`}
            >
              Transformation Matrix (Batch vs. Streaming)
            </button>
            <button
              onClick={() => setActiveSandboxTab('layers')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all border cursor-pointer ${
                activeSandboxTab === 'layers'
                  ? 'bg-[#0070C0] text-white border-[#0070C0] shadow-md'
                  : 'bg-slate-100 text-slate-700 border-slate-200 hover:text-slate-950 hover:bg-slate-200'
              }`}
            >
              Full-Stack Blueprint Visual
            </button>
            <button
              onClick={() => setActiveSandboxTab('protocols')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all border cursor-pointer ${
                activeSandboxTab === 'protocols'
                  ? 'bg-[#0070C0] text-white border-[#0070C0] shadow-md'
                  : 'bg-slate-100 text-slate-700 border-slate-200 hover:text-slate-950 hover:bg-slate-200'
              }`}
            >
              Interactive Streaming Protocols
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
                      <th className="py-4 px-6 font-bold w-1/4">Streaming Dimension</th>
                      <th className="py-4 px-6 font-bold w-1/3 text-rose-800 bg-rose-50/70">Legacy Batch Pipelines</th>
                      <th className="py-4 px-6 font-bold w-1/3 text-[#0070C0] bg-sky-50/70">KNOOVIQ Event Streaming Fabric</th>
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
                        <td className="py-5 px-6 text-slate-900 bg-sky-50/20 font-semibold leading-relaxed">
                          <div className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#0070C0] shrink-0 mt-1" />
                            <span>{row.modernApproach}</span>
                          </div>
                        </td>
                        <td className="py-5 px-5 text-center">
                          <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold uppercase bg-sky-100 text-[#0070C0] border border-sky-300">
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

          {/* TAB 2: Full-Stack Architecture Visual */}
          {activeSandboxTab === 'layers' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div className="relative rounded-3xl overflow-hidden border-2 border-slate-300 shadow-xl bg-slate-900 group h-[400px] sm:h-[480px] lg:h-[520px] w-full">
                {/* IMAGE 3 */}
                <img
                  src="/images/real-time-analytics/streaming_mesh.jpg"
                  alt="Enterprise Real-Time Event Streaming Topology and Mesh"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4 px-4 py-2 rounded-xl bg-slate-900/90 backdrop-blur-md border border-cyan-400/50 text-xs sm:text-sm font-mono font-bold text-cyan-300 flex items-center gap-2">
                  <RadioTower className="w-4 h-4 text-cyan-400" />
                  <span>ARCHITECTURE: HIGH-THROUGHPUT REAL-TIME EVENT STREAMING MESH</span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2 p-4 rounded-2xl bg-slate-900/85 backdrop-blur-md border border-slate-700/80">
                  <div className="text-sm sm:text-base font-mono font-bold text-cyan-300">
                    Distributed Streaming Ingestion, In-Memory Flink CEP &amp; Sub-Second OLAP
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 font-normal leading-relaxed">
                    Zero-data-loss event streaming architecture pairing Apache Kafka backbones with Apache Flink stateful transformations, ClickHouse columnar storage, and automated operational write-backs into SAP S/4HANA.
                  </p>
                </div>
              </div>

              {/* Architectural Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-sky-100 text-[#0070C0] shrink-0">
                    <RadioTower className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Distributed Event Backbone</h4>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                      Millions of events per second processed with multi-AZ broker replication and exactly-once delivery guarantees.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-sky-100 text-[#0070C0] shrink-0">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Stateful Stream Processing</h4>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                      Sliding and tumbling window operations executed in-memory with incremental RocksDB state checkpoints.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-sky-100 text-[#0070C0] shrink-0">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Sub-Second Vectorized OLAP</h4>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                      Direct micro-batch stream ingestion into ClickHouse powering complex analytical scans in tens of milliseconds.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: Interactive Platform Protocols */}
          {activeSandboxTab === 'protocols' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Protocol Sub-Selection Buttons */}
              <div className="flex flex-wrap justify-center gap-3">
                <button
                  onClick={() => setActiveProtocolTab('streaming-mesh')}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all border cursor-pointer ${
                    activeProtocolTab === 'streaming-mesh'
                      ? 'bg-[#0070C0] text-white border-[#0070C0]'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  Distributed Event Mesh &amp; Schemas
                </button>
                <button
                  onClick={() => setActiveProtocolTab('cep-engine')}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all border cursor-pointer ${
                    activeProtocolTab === 'cep-engine'
                      ? 'bg-[#0070C0] text-white border-[#0070C0]'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  Complex Event Processing (CEP)
                </button>
                <button
                  onClick={() => setActiveProtocolTab('realtime-olap')}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all border cursor-pointer ${
                    activeProtocolTab === 'realtime-olap'
                      ? 'bg-[#0070C0] text-white border-[#0070C0]'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  Sub-Second Columnar OLAP
                </button>
              </div>

              {/* Protocol Active Specification Details */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-6 space-y-6">
                  <div>
                    <span className="text-xs font-mono font-bold tracking-widest text-[#0070C0] uppercase px-3 py-1 rounded-lg bg-sky-50 border border-sky-200">
                      {protocolDetails[activeProtocolTab].badge}
                    </span>
                    <h3 className="text-2xl font-black text-slate-950 mt-3 mb-2">
                      {protocolDetails[activeProtocolTab].title}
                    </h3>
                    <p className="text-base text-slate-600 leading-relaxed font-normal">
                      {protocolDetails[activeProtocolTab].desc}
                    </p>
                  </div>

                  {/* 4 Protocol Engineering Specs */}
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    {protocolDetails[activeProtocolTab].specs.map((spec, i) => (
                      <div key={i} className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                        <div className="text-xs font-mono text-slate-500">{spec.label}</div>
                        <div className="text-sm font-bold text-slate-900 mt-1">{spec.val}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-4">
                  <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Live Protocol Execution Pipeline
                  </div>
                  {protocolDetails[activeProtocolTab].steps.map((st, i) => (
                    <div key={i} className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-sky-50 text-[#0070C0] border border-sky-200 flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                        {i + 1}
                      </div>
                      <div>
                        <div className="text-base font-bold text-slate-900">{st.name}</div>
                        <div className="text-sm text-slate-600 mt-1 leading-relaxed font-normal">{st.detail}</div>
                      </div>
                    </div>
                  ))}

                  <div className="pt-2">
                    <button
                      onClick={() => onOpenContact ? onOpenContact(`Sandbox Protocol Inquiry: ${protocolDetails[activeProtocolTab].title}`) : undefined}
                      className="w-full py-3 rounded-xl border border-sky-300 hover:border-[#0070C0] bg-sky-50 text-[#0070C0] hover:bg-sky-100 text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Simulate {protocolDetails[activeProtocolTab].badge}</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: PHASED IMPLEMENTATION ROADMAP (Clean Slate-50)
          ========================================================================= */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3.5">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#0070C0] uppercase">
              TIME-TO-VALUE BLUEPRINT
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950">
              4-Stage Phased Implementation Roadmap
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              A structured, risk-mitigated journey from delayed batch pipelines to an enterprise-wide event-driven streaming fabric.
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
              <span>EXECUTIVE CLARIFICATIONS &bull; REAL-TIME STREAMING</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#005A9C] via-[#0070C0] to-sky-500">Streaming Questions</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
              Addressing key strategic, operational, and architectural considerations for enterprise technology leaders.
            </p>
          </div>

          <div className="space-y-4">
            {realTimeFaqs.map((faq, index) => {
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
            Ready to Transition to Real-Time Streaming Intelligence?
          </h2>

          <p className="text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed font-normal">
            Collaborate with senior streaming architects to decouple monolithic systems, build resilient event meshes, and unlock sub-second operational reflexes across your enterprise.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
            <button
              onClick={() => onOpenContact ? onOpenContact('Real-Time Streaming Analytics Workshop') : undefined}
              className="px-9 py-4 rounded-xl font-bold text-sm sm:text-base text-slate-900 bg-white hover:bg-sky-50 shadow-xl transition-all flex items-center gap-2 group w-full sm:w-auto justify-center cursor-pointer"
            >
              <span>Schedule Streaming Workshop</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#0070C0]" />
            </button>
            <Link
              to="/digital-intelligence/data-strategy"
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold uppercase tracking-wider backdrop-blur-md flex items-center gap-2 group transition-all w-full sm:w-auto justify-center text-sm"
            >
              <span>Explore Data Strategy</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-7 text-xs sm:text-sm text-sky-100 font-mono">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              <span>Exactly-Once Guarantees</span>
            </div>
            <div className="flex items-center gap-2">
              <RadioTower className="w-4 h-4 text-cyan-200" />
              <span>Sub-Second Telemetry Sinks</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-300" />
              <span>SAP Event Mesh Compatible</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default RealTimeAnalyticsPage;
