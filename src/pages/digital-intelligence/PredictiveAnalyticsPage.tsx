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
  Calendar,
  Layers3,
  Maximize2,
  X
} from 'lucide-react';

interface PredictiveAnalyticsPageProps {
  onOpenContact?: (defaultTopic?: string) => void;
}

export const PredictiveAnalyticsPage: React.FC<PredictiveAnalyticsPageProps> = ({
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
  const [activeProtocolTab, setActiveProtocolTab] = useState<'demand-engine' | 'churn-scoring' | 'drift-defense'>('demand-engine');

  // State for Section 7: FAQ Accordion
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // =========================================================================
  // DATA STRUCTURES
  // =========================================================================

  // Section 4: Circular Chevron Segments (8 Interlocking Predictive Intelligence Layers)
  const wheelSegments = [
    {
      id: 'demand-forecasting',
      shortTag: 'DEMAND',
      title: 'Stochastic Demand Forecasting',
      desc: 'Multi-echelon probabilistic time-series algorithms projecting seasonal swings, promotional lift, and supply disruptions with P10/P50/P90 quantile intervals.',
      badge: 'PROBABILISTIC ENSEMBLES',
      metric: '94.8% Demand Accuracy',
      side: 'right',
      color: '#0070C0',
      textColor: 'text-sky-400',
      bgGlow: 'rgba(0, 112, 192, 0.35)',
      icon: TrendingUp
    },
    {
      id: 'churn-propensity',
      shortTag: 'CHURN & LTV',
      title: 'Customer Lifetime & Churn Propensity',
      desc: 'Survival analysis and gradient boosting models calculating micro-churn signatures 60 to 90 days before order degradation or contract cancellation.',
      badge: 'PROACTIVE RETENTION',
      metric: '3.4x Churn Preemption',
      side: 'right',
      color: '#0284C7',
      textColor: 'text-cyan-400',
      bgGlow: 'rgba(2, 132, 199, 0.35)',
      icon: Target
    },
    {
      id: 'predictive-maintenance',
      shortTag: 'ASSET PDM',
      title: 'Asset Health & Predictive Maintenance',
      desc: 'High-frequency vibration, thermal, and IoT sensor telemetry predicting Remaining Useful Life (RUL) to eliminate catastrophic plant and fleet outages.',
      badge: 'ZERO UNPLANNED DOWNTIME',
      metric: '41% Maintenance Savings',
      side: 'right',
      color: '#06B6D4',
      textColor: 'text-cyan-300',
      bgGlow: 'rgba(6, 182, 212, 0.35)',
      icon: Wrench
    },
    {
      id: 'financial-monte-carlo',
      shortTag: 'STRESS TEST',
      title: 'Financial Stress-Testing & Monte Carlo',
      desc: 'Simulating tens of thousands of macroeconomic, FX, interest rate, and commodity cost permutations to optimize enterprise cash buffers.',
      badge: 'PROBABILISTIC RISK',
      metric: '10,000+ Stochastic Iterations',
      side: 'right',
      color: '#10B981',
      textColor: 'text-emerald-400',
      bgGlow: 'rgba(16, 185, 129, 0.35)',
      icon: Scale
    },
    {
      id: 'supply-leadtime',
      shortTag: 'LEAD TIME',
      title: 'Supply Chain Port & Lead-Time Anticipation',
      desc: 'Global maritime, customs clearance, and supplier reliability models predicting shipment delay risk and recommending dynamic inventory allocations.',
      badge: 'SUPPLY RESILIENCE',
      metric: '8-14 Days Lead Buffer',
      side: 'left',
      color: '#F59E0B',
      textColor: 'text-amber-400',
      bgGlow: 'rgba(245, 158, 11, 0.35)',
      icon: Boxes
    },
    {
      id: 'enterprise-feature-store',
      shortTag: 'FEATURES',
      title: 'Enterprise Feature Store & Lineage',
      desc: 'Unified repository for curated offline training and low-latency online inference feature vectors, guaranteeing zero feature leakage in production.',
      badge: 'ZERO FEATURE LEAKAGE',
      metric: '< 8ms Online Serving',
      side: 'left',
      color: '#EC4899',
      textColor: 'text-pink-400',
      bgGlow: 'rgba(236, 72, 153, 0.35)',
      icon: Database
    },
    {
      id: 'drift-monitoring',
      shortTag: 'MLOPS DRIFT',
      title: 'Concept & Data Drift Defense Mesh',
      desc: 'Automated statistical testing (KS-test, PSI) monitoring incoming live distributions and triggering autonomous model recalibration pipelines.',
      badge: 'CONTINUOUS CALIBRATION',
      metric: '24/7 Automated Retraining',
      side: 'left',
      color: '#8B5CF6',
      textColor: 'text-purple-400',
      bgGlow: 'rgba(139, 92, 246, 0.35)',
      icon: Activity
    },
    {
      id: 'explainable-governance',
      shortTag: 'XAI & AUDIT',
      title: 'Explainable AI (XAI) & Model Governance',
      desc: 'Game-theoretic SHAP and LIME attribution giving business leaders and regulatory auditors mathematical visibility into every prediction factor.',
      badge: 'AUDITED COMPLIANCE',
      metric: '100% Deterministic Attribution',
      side: 'left',
      color: '#6366F1',
      textColor: 'text-indigo-400',
      bgGlow: 'rgba(99, 102, 241, 0.35)',
      icon: ShieldCheck
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

  // Section 2: Journey Steps (6 Progressive Evolution Phases)
  const journeySteps = [
    {
      id: 'descriptive-heuristics',
      label: '1. Descriptive Baselines',
      sublabel: 'Historical Moving Averages',
      desc: 'Baseline historical trend extrapolation and simple moving averages relying on manual spreadsheets, unable to model non-linear demand shifts.',
      tech: 'Manual Excel & SQL Aggregates',
      icon: FileSpreadsheet,
      highlights: [
        'Trailing Hindsight Only',
        'Vulnerable to Outliers & Volatility',
        'High Manual Compilation Overhead'
      ]
    },
    {
      id: 'statistical-timeseries',
      label: '2. Statistical Time-Series',
      sublabel: 'ARIMA & Exponential Smoothing',
      desc: 'Decomposing historical data into trend, cyclical, and seasonal components to produce parametric forecasts with defined statistical confidence bands.',
      tech: 'SARIMAX, Holt-Winters, Prophet',
      icon: LineChart,
      highlights: [
        'Seasonal & Calendar Decomposition',
        'Confidence Interval Bands',
        'Parametric Baseline Projections'
      ]
    },
    {
      id: 'machine-learning-ensembles',
      label: '3. Machine Learning Ensembles',
      sublabel: 'Non-Linear Gradient Boosting',
      desc: 'Integrating hundreds of cross-functional features—price elasticity, competitor actions, and macro indices—into robust gradient boosting trees.',
      tech: 'XGBoost, LightGBM, CatBoost',
      icon: BrainCircuit,
      highlights: [
        'Non-Linear Feature Interactions',
        'Multi-Variate Exogenous Signals',
        'Significantly Reduced Mean Error'
      ]
    },
    {
      id: 'deep-temporal-networks',
      label: '4. Deep Temporal Models',
      sublabel: 'Transformers & DeepAR',
      desc: 'Deploying neural temporal architectures that learn long-term dependencies across thousands of interrelated SKUs and regional nodes simultaneously.',
      tech: 'Temporal Fusion Transformers, DeepAR',
      icon: Cpu,
      highlights: [
        'Cross-Series Hierarchical Learning',
        'Attention-Based Temporal Weighting',
        'Probabilistic Quantile Forecasts'
      ]
    },
    {
      id: 'stochastic-simulation',
      label: '5. Stochastic Simulation',
      sublabel: 'Monte Carlo & What-If Stress',
      desc: 'Running 10,000+ probabilistic simulations against supply shocks, currency swings, and inflationary pressures to prescribe optimal financial buffers.',
      tech: 'Monte Carlo & Constraint Solvers',
      icon: Scale,
      highlights: [
        'Tail-Risk & VaR Quantification',
        'Dynamic Buffer Stock Sizing',
        'Multi-Scenario Capital Allocation'
      ]
    },
    {
      id: 'closed-loop-decisioning',
      label: '6. Closed-Loop ERP Action',
      sublabel: 'Autonomous ERP Write-Back',
      desc: 'Seamlessly closing the operational loop: predictions automatically generate purchase requisitions, adjust safety stocks, and trigger work orders in SAP.',
      tech: 'Real-Time ERP API Integration',
      icon: Zap,
      highlights: [
        'Zero-Latency Automated Triggering',
        'Direct SAP S/4HANA Write-Back',
        'Autonomous Closed-Loop Execution'
      ]
    }
  ];

  // Section 3: Enterprise Predictive Challenges (6 Comprehensive Cards)
  const predictiveChallenges = [
    {
      icon: FileSpreadsheet,
      tag: 'STATIC SPREADSHEET BIAS',
      title: 'Fragile Excel Forecasts & Intuitive Guesswork',
      desc: 'Planners rely on fragile spreadsheets with linear formulas that fail to capture non-linear market shifts, leading to costly inventory gluts and missed sales.',
      footer: 'Multi-Variate Machine Learning Ensembles'
    },
    {
      icon: AlertTriangle,
      tag: 'SILENT ACCURACY DECAY',
      title: 'Model Concept Drift in Production',
      desc: 'Data science models degrade silently as consumer habits evolve and macroeconomic conditions shift, rendering static offline algorithms inaccurate.',
      footer: 'Continuous Drift Monitoring & Auto-Retraining'
    },
    {
      icon: Boxes,
      tag: 'THE POC GRAVEYARD',
      title: 'Models Trapped in Jupyter Notebooks',
      desc: 'Over 80% of corporate data science pilots fail to reach production due to a lack of industrial MLOps pipelines and real-time feature serving infrastructure.',
      footer: 'Production Feature Store & MLOps Pipelines'
    },
    {
      icon: Eye,
      tag: 'BLACK BOX DISTRUST',
      title: 'Executive Skepticism & Audit Rejection',
      desc: 'Business leaders and internal audit reject complex deep learning models when data scientists cannot explain why a specific revenue or churn prediction was made.',
      footer: 'Explainable AI (XAI) with SHAP/LIME Attribution'
    },
    {
      icon: RefreshCw,
      tag: 'DISCONNECTED PREDICTIONS',
      title: 'Predictions That Never Lead to Action',
      desc: 'Algorithmic forecasts remain stranded on static analytics slides while procurement and manufacturing teams continue operating on legacy manual spreadsheets.',
      footer: 'Closed-Loop ERP Automated Write-Backs'
    },
    {
      icon: Database,
      tag: 'DATA FRAGMENTATION',
      title: 'Feature Leakage & Inconsistent Data Training',
      desc: 'Discrepancies between training feature calculations and live production APIs cause models to fail catastrophically during live real-time inference.',
      footer: 'Unified Online & Offline Feature Store Fabric'
    }
  ];

  // Section 5: Side-by-side Architectural Comparison Matrix
  const architecturalComparison = [
    {
      dimension: 'Forecasting Horizon',
      legacyApproach: 'Historical trailing averages and annual linear budgets modified with arbitrary percentage markups.',
      modernApproach: 'Dynamic multi-horizon probabilistic forecasts with automated confidence bands and stochastic volatility modeling.',
      statusBadge: 'PROBABILISTIC'
    },
    {
      dimension: 'Feature Ingestion',
      legacyApproach: 'Isolated internal sales figures extracted monthly without accounting for external market dynamics.',
      modernApproach: 'Real-time feature store combining ERP transactions, macro indices, weather signals, and competitor pricing.',
      statusBadge: 'MULTI-MODAL'
    },
    {
      dimension: 'Model Lifecycle (MLOps)',
      legacyApproach: 'Ad-hoc script execution with zero automated testing, manual retraining once a year, and untracked drift.',
      modernApproach: 'Full CI/CD/CT pipelines with automated statistical drift detection and dynamic retraining triggers.',
      statusBadge: 'CONTINUOUS MLOPS'
    },
    {
      dimension: 'Explainability & Trust',
      legacyApproach: 'Black-box algorithms offering zero mathematical justification for why an account is flagged as high-risk.',
      modernApproach: 'Full SHAP and LIME feature attribution providing transparent factor rankings for every single inference score.',
      statusBadge: 'EXPLAINABLE XAI'
    },
    {
      dimension: 'Operational Actioning',
      legacyApproach: 'Predictions emailed in slide decks requiring human operators to manually re-key figures into ERP systems.',
      modernApproach: 'Direct bi-directional API write-back into SAP S/4HANA automatically adjusting safety stocks and POs.',
      statusBadge: 'CLOSED LOOP'
    }
  ];

  // Section 5: Protocol Sandbox Tab Specifications
  const protocolDetails = {
    'demand-engine': {
      badge: 'STOCHASTIC TIME-SERIES ENGINE',
      title: 'Multi-Echelon Demand & Volatility Forecaster',
      desc: 'Forecast demand across thousands of SKU-location nodes simultaneously while accounting for price promotions, stockouts, and external economic drivers.',
      specs: [
        { label: 'Algorithm Ensemble', val: 'Temporal Fusion Transformer + LightGBM' },
        { label: 'Forecast Granularity', val: 'Daily SKU-Store Level' },
        { label: 'Prediction Interval', val: 'P10, P50, P90 Quantile Bands' },
        { label: 'Inference Latency', val: '< 2.4s per 10,000 SKUs' }
      ],
      steps: [
        { name: 'Feature Compilation', detail: 'Ingests point-of-sale data, promo calendars, lead-times, and regional weather indices.' },
        { name: 'Hierarchical Reconciliation', detail: 'Reconciles bottom-up SKU forecasts with top-down corporate revenue budgets.' },
        { name: 'Confidence Quantification', detail: 'Outputs probabilistic quantile spreads to calculate dynamic safety stock levels.' }
      ]
    },
    'churn-scoring': {
      badge: 'REAL-TIME PROPENSITY PIPELINE',
      title: 'Customer Lifetime & Retention Propensity Engine',
      desc: 'Identify accounts showing early disengagement signatures months before contract renewal, enabling targeted pre-emptive retention campaigns.',
      specs: [
        { label: 'Model Architecture', val: 'Cox Proportional Hazards + XGBoost' },
        { label: 'Scoring Cadence', val: 'Real-Time Event-Driven & Daily Batch' },
        { label: 'Lead Indicator Window', val: '60 to 90 Days Pre-Event' },
        { label: 'Actionable Trigger', val: 'Automated CRM Task & Incentive Routing' }
      ],
      steps: [
        { name: 'Telemetry Feature Extraction', detail: 'Aggregates portal logins, support ticket sentiment, and transaction frequency drops.' },
        { name: 'Propensity Inference', detail: 'Computes probability of churn and expected customer lifetime value depreciation.' },
        { name: 'Prescriptive Playbook', detail: 'Generates customized retention incentives and triggers high-priority CSM alerts.' }
      ]
    },
    'drift-defense': {
      badge: 'MLOPS TELEMETRY SHIELD',
      title: 'Autonomous Concept & Data Drift Detection Shield',
      desc: 'Continuously compare live production feature distributions against training baselines to detect degradation and execute zero-downtime retraining.',
      specs: [
        { label: 'Drift Metrics', val: 'Population Stability Index (PSI) & KS-Test' },
        { label: 'Inspection Frequency', val: 'Continuous Micro-Batch Telemetry' },
        { label: 'Retraining Trigger', val: 'Automated Airflow/Kubeflow Pipeline' },
        { label: 'Deployment Mode', val: 'Canary Rollout with Blue-Green Safety' }
      ],
      steps: [
        { name: 'Distribution Monitoring', detail: 'Calculates statistical divergence scores between incoming requests and baseline tensors.' },
        { name: 'Threshold Alerting', detail: 'Raises automated alert if PSI exceeds 0.20, indicating meaningful population shift.' },
        { name: 'Canary Validation', detail: 'Trains candidate model on fresh data, validates against shadow traffic, and hot-swaps.' }
      ]
    }
  };

  // Section 6: Phased Transformation Stages
  const transformationPhases = [
    {
      phase: 'STAGE 01',
      title: 'Predictive Opportunity Discovery & Data Feasibility Audit',
      focus: 'High-impact use case identification, historical data sufficiency assessment, signal-to-noise evaluation, and enterprise business case modeling.',
      deliverable: 'Audited Value Matrix & Algorithmic Feasibility Blueprint',
      icon: Search
    },
    {
      phase: 'STAGE 02',
      title: 'Feature Engineering & Algorithmic Prototyping',
      focus: 'Constructing normalized feature stores, creating domain-specific feature vectors, and training ensemble models with rigorous cross-validation.',
      deliverable: 'Unified Feature Store & High-Accuracy Tournament Ensembles',
      icon: Cpu
    },
    {
      phase: 'STAGE 03',
      title: 'Production MLOps Industrialization & ERP Integration',
      focus: 'Containerizing inference pipelines, configuring automated CI/CD/CT workflows, and building bidirectional connectors into core ERP systems.',
      deliverable: 'Sub-10ms Serving Gateways & Bi-Directional SAP Write-Backs',
      icon: Zap
    },
    {
      phase: 'STAGE 04',
      title: 'Autonomous Calibration & Scale-Out Decisioning',
      focus: 'Activating closed-loop self-healing models, expanding feature stores across business units, and delivering continuous business impact metrics.',
      deliverable: 'Enterprise-Wide Model Mesh & Self-Healing Retraining Pipelines',
      icon: Activity
    }
  ];

  // Section 7: Enterprise FAQs
  const predictiveFaqs = [
    {
      question: 'How do KNOOVIQ predictive models handle black swan events or extreme market anomalies?',
      answer: 'Standard regression models often fail during unprecedented market shocks because they overfit to historical patterns. KNOOVIQ addresses this through probabilistic quantile forecasts (P10/P50/P90), synthetic stress scenario injections, and stochastic Monte Carlo simulations. Furthermore, our models incorporate macroeconomic leading indicators and feature automated anomaly detection filters that prevent non-representative shock data from distorting long-term baseline parameters.'
    },
    {
      question: 'What measurable improvements in forecast accuracy can our enterprise anticipate?',
      answer: 'Across enterprise supply chain and retail engagements, migrating from manual spreadsheet heuristics to KNOOVIQ multi-variate machine learning models typically reduces Mean Absolute Percentage Error (MAPE) by 18% to 35%. This directly translates to a 15–25% reduction in excess safety stock holding costs and an 8–14% reduction in lost sales caused by stockouts.'
    },
    {
      question: 'How do predictions translate into real-world automated actions in our SAP or ERP system?',
      answer: 'We avoid leaving predictions stranded in analytical dashboards. Through our closed-loop ERP integration layer, approved predictive outputs write back directly into transactional operational systems. For example, demand forecasts dynamically update MRP safety stock parameters in SAP S/4HANA, asset predictive maintenance scores automatically generate preventive work orders in SAP Asset Manager, and customer churn scores create prioritized escalation cases in Salesforce or SAP Service Cloud.'
    },
    {
      question: 'How do you overcome the "black box" objection with business executives and regulators?',
      answer: 'Every model engineered by KNOOVIQ is grounded in Explainable AI (XAI) principles. We implement game-theoretic SHAP (SHapley Additive exPlanations) and LIME algorithms that compute the exact mathematical contribution of every feature—such as recent price changes, delivery delays, or macro inflation—for each specific prediction score. This provides executives and compliance auditors with clear, human-understandable justifications behind every algorithmic output.'
    },
    {
      question: 'What cloud data platforms and machine learning frameworks does KNOOVIQ support?',
      answer: 'We architect platform-agnostic predictive solutions that run seamlessly on your preferred enterprise stack. This includes Databricks (MLflow, Feature Store), Snowflake (Snowpark ML), AWS (SageMaker), Microsoft Azure (Azure Machine Learning), Google Cloud (Vertex AI), and SAP Business Technology Platform (SAP Datasphere, SAP AI Core). We prevent vendor lock-in by using open-standard containerized pipelines.'
    },
    {
      question: 'What is feature leakage, and how does your enterprise feature store prevent it?',
      answer: 'Feature leakage occurs when data from the future is inadvertently used to train a model, resulting in deceptively high training accuracy but catastrophic failure during live production inference. KNOOVIQ implements point-in-time correct feature stores that enforce strict temporal joins during offline training. This guarantees that offline model training precisely mirrors the real-time feature state available at the exact millisecond of live inference.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#0070C0] selection:text-white">

      {/* =========================================================================
          SECTION 1: HERO SECTION (AI Agents Style Full Bleed Panoramic Background)
          IMAGE: /images/predictive-analytics/enterprise_predictive_algorithmic_foresight_hero.jpg
          ========================================================================= */}
      <section className="relative w-full min-h-[560px] sm:min-h-[620px] lg:min-h-[660px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 overflow-hidden bg-slate-950 text-white">
        {/* Full-Bleed 16:9 Panoramic Image - AI Agents Style */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/predictive-analytics/enterprise_predictive_algorithmic_foresight_hero.jpg"
            alt="Enterprise Predictive Analytics & Algorithmic Foresight Command Center"
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
                  <span>Predictive Analytics &amp; Foresight</span>
                </div>
              </div>

              {/* Animated Headline with High-Contrast Typography */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                Enterprise <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-cyan-400">
                  Predictive Analytics &amp; Algorithmic Foresight
                </span>
              </h1>

              {/* Subtitle with High Legibility */}
              <p className="text-base sm:text-lg text-slate-100 leading-relaxed font-normal pt-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                Transform static historical reporting into production algorithmic foresight. KNOOVIQ engineers stochastic time-series models, predictive asset maintenance, churn propensity engines, and closed-loop ERP automated decisioning.
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
                <TrendingUp className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Stochastic Monte Carlo Engines</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-emerald-200 shadow-sm">
                <Activity className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Automated Drift Defense</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-sky-200 shadow-sm">
                <Zap className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Closed-Loop ERP Automation</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: EXECUTIVE PERSPECTIVE (Clean Light Corporate Theme - Large Legible Text)
          IMAGE 2 OF 3: /images/predictive-analytics/forecasting_cockpit.jpg
          ========================================================================= */}
      <section id="predictive-evolution" className="py-24 bg-gradient-to-b from-white via-[#F8FBFE] to-white border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-300 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#0070C0]">
                <BrainCircuit className="w-4 h-4 text-[#0070C0]" />
                <span>EXECUTIVE PREDICTIVE PERSPECTIVE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
                Architecting Algorithmic Foresight &amp; <span className="text-[#0070C0]">Predictive Intelligence</span>
              </h2>

              <div className="border-l-4 border-[#0070C0] border-y border-r border-slate-300 pl-5 py-3.5 bg-gradient-to-r from-sky-50/80 via-sky-50/30 to-transparent rounded-r-2xl">
                <p className="text-base sm:text-lg font-semibold text-slate-800 leading-relaxed italic">
                  &ldquo;Descriptive BI tells leadership why margins eroded last quarter; Predictive Analytics alerts the executive team 90 days in advance, quantifies the volatility corridor, and automatically prescribes corrective supply adjustments directly in the ERP.&rdquo;
                </p>
              </div>

              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
                Knooviq engineers production-grade predictive intelligence platforms that liberate enterprises from fragile spreadsheets and retrospective reporting. We build stochastic time-series models, automated drift detection shields, and real-time feature stores that write back directly into operational SAP S/4HANA workflows.
              </p>

              {/* 3 Executive Pillars (Clear, Large, Highly Legible Text) */}
              <div className="space-y-4 pt-2">
                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-950">Algorithmic Rigor &amp; Ensembles</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Combining stochastic time-series, deep temporal transformers, and non-linear gradient boosting to capture volatile real-world dynamics.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-950">Industrial MLOps &amp; Drift Defense</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Production feature stores, low-latency API serving, and 24/7 population stability testing (PSI) triggering autonomous model recalibration.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-950">Closed-Loop ERP Automation</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Writing predicted demand and asset maintenance scores directly into operational SAP S/4HANA workflows to trigger dynamic replenishment.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Interactive Evolution Visual (IMAGE 2 OF 3) */}
            <div className="lg:col-span-6 space-y-5">
              
              <div 
                onClick={() => setActiveJourneyStep((activeJourneyStep + 1) % journeySteps.length)}
                title="Click image to advance to next architecture step"
                className="relative rounded-2xl overflow-hidden border-2 border-slate-300 shadow-xl bg-slate-900 group h-96 sm:h-[440px] lg:h-[490px] w-full cursor-pointer"
              >
                {/* IMAGE 2 */}
                <img
                  src="/images/predictive-analytics/forecasting_cockpit.jpg"
                  alt="Enterprise Predictive Analytics Algorithmic Forecasting Cockpit"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />
                
                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-lg bg-slate-900/90 backdrop-blur-md border border-cyan-400/50 text-xs sm:text-sm font-mono font-bold text-cyan-300 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>PREDICTIVE FOCUS: {journeySteps[activeJourneyStep].label.toUpperCase()}</span>
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
                      className={`p-3.5 rounded-2xl border text-left transition-all flex items-center gap-3 ${
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
              Critical Impediments in Legacy Forecasting
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Why manual spreadsheets, untracked concept drift, and disconnected analytics create costly inventory gluts and missed commercial opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {predictiveChallenges.map((item, idx) => {
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
              INTERCONNECTED PREDICTIVE ECOSYSTEM
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              The KNOOVIQ Algorithmic Intelligence Fabric
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Explore the eight mutually reinforcing layers of our production predictive analytics foundation. Hover over any segment to inspect its algorithmic mechanics.
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
                        PREDICTIVE CORE
                      </span>
                      <div className="text-sm sm:text-base font-black text-white leading-tight">
                        Algorithmic Fabric
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
          IMAGE 3 OF 3: /images/predictive-analytics/mlops_mesh.jpg
          ========================================================================= */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3.5">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#0070C0] uppercase">
              TOPOLOGICAL ARCHITECTURE BLUEPRINT
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950">
              Modern Algorithmic Architecture vs. Legacy Heuristics
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Examine the concrete architectural difference between fragile spreadsheet forecasts and KNOOVIQ production-grade predictive intelligence.
            </p>
          </div>

          {/* Interactive Mode Toggle */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setActiveSandboxTab('comparison')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all border ${
                activeSandboxTab === 'comparison'
                  ? 'bg-[#0070C0] text-white border-[#0070C0] shadow-md'
                  : 'bg-slate-100 text-slate-700 border-slate-200 hover:text-slate-950 hover:bg-slate-200'
              }`}
            >
              Transformation Matrix (Legacy vs. KNOOVIQ)
            </button>
            <button
              onClick={() => setActiveSandboxTab('layers')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all border ${
                activeSandboxTab === 'layers'
                  ? 'bg-[#0070C0] text-white border-[#0070C0] shadow-md'
                  : 'bg-slate-100 text-slate-700 border-slate-200 hover:text-slate-950 hover:bg-slate-200'
              }`}
            >
              Full-Stack Blueprint Visual
            </button>
            <button
              onClick={() => setActiveSandboxTab('protocols')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all border ${
                activeSandboxTab === 'protocols'
                  ? 'bg-[#0070C0] text-white border-[#0070C0] shadow-md'
                  : 'bg-slate-100 text-slate-700 border-slate-200 hover:text-slate-950 hover:bg-slate-200'
              }`}
            >
              Interactive Predictive Protocols
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
                      <th className="py-4 px-6 font-bold w-1/4">Predictive Dimension</th>
                      <th className="py-4 px-6 font-bold w-1/3 text-rose-800 bg-rose-50/70">Legacy Heuristic Approach</th>
                      <th className="py-4 px-6 font-bold w-1/3 text-[#0070C0] bg-sky-50/70">KNOOVIQ Predictive Intelligence</th>
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
                  src="/images/predictive-analytics/mlops_mesh.jpg"
                  alt="Enterprise Predictive Analytics Architecture Blueprint and MLOps Mesh"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4 px-4 py-2 rounded-xl bg-slate-900/90 backdrop-blur-md border border-cyan-400/50 text-xs sm:text-sm font-mono font-bold text-cyan-300 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  <span>ARCHITECTURE: MULTI-MODAL PREDICTIVE INFERENCE MESH</span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2 p-4 rounded-2xl bg-slate-900/85 backdrop-blur-md border border-slate-700/80">
                  <div className="text-sm sm:text-base font-mono font-bold text-cyan-300">
                    High-Throughput Feature Serving &amp; Real-Time ERP Automation
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 font-normal leading-relaxed">
                    Decoupled online/offline feature store architecture ensuring sub-10ms inference latencies across cloud environments, zero feature leakage, and automated write-backs into SAP S/4HANA.
                  </p>
                </div>
              </div>

              {/* Architectural Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-sky-100 text-[#0070C0] shrink-0">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Unified Feature Store</h4>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                      Point-in-time correct temporal joins preventing training-serving skew across online and offline repositories.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-sky-100 text-[#0070C0] shrink-0">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Automated Drift Telemetry</h4>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                      Continuous Population Stability Index (PSI) testing triggering automated zero-downtime model retrains.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-sky-100 text-[#0070C0] shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">ERP Closed-Loop Action</h4>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                      Direct transactional write-back into SAP S/4HANA automatically updating safety stocks and triggering work orders.
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
                  onClick={() => setActiveProtocolTab('demand-engine')}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all border ${
                    activeProtocolTab === 'demand-engine'
                      ? 'bg-[#0070C0] text-white border-[#0070C0]'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  Stochastic Demand Forecaster
                </button>
                <button
                  onClick={() => setActiveProtocolTab('churn-scoring')}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all border ${
                    activeProtocolTab === 'churn-scoring'
                      ? 'bg-[#0070C0] text-white border-[#0070C0]'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  Churn &amp; LTV Propensity Pipeline
                </button>
                <button
                  onClick={() => setActiveProtocolTab('drift-defense')}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all border ${
                    activeProtocolTab === 'drift-defense'
                      ? 'bg-[#0070C0] text-white border-[#0070C0]'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  Concept Drift Defense Shield
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
              A structured, risk-mitigated journey from fragile spreadsheet heuristics to production algorithmic foresight.
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
              <span>EXECUTIVE CLARIFICATIONS &bull; PREDICTIVE ANALYTICS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#005A9C] via-[#0070C0] to-sky-500">Predictive Questions</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
              Addressing key strategic, operational, and architectural considerations for enterprise technology leaders.
            </p>
          </div>

          <div className="space-y-4">
            {predictiveFaqs.map((faq, index) => {
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
            Ready to Replace Guesswork with Algorithmic Foresight?
          </h2>

          <p className="text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed font-normal">
            Collaborate with senior data science architects to audit your existing forecast baseline, identify high-ROI predictive opportunities, and deploy production MLOps pipelines.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
            <button
              onClick={() => onOpenContact ? onOpenContact('Predictive Analytics Advisory Workshop') : undefined}
              className="px-9 py-4 rounded-xl font-bold text-sm sm:text-base text-slate-900 bg-white hover:bg-sky-50 shadow-xl transition-all flex items-center gap-2 group w-full sm:w-auto justify-center cursor-pointer"
            >
              <span>Schedule Architecture Workshop</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#0070C0]" />
            </button>
            <Link
              to="/digital-intelligence/real-time-analytics"
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold uppercase tracking-wider backdrop-blur-md flex items-center gap-2 group transition-all w-full sm:w-auto justify-center text-sm"
            >
              <span>Explore Real-Time Analytics</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-7 text-xs sm:text-sm text-sky-100 font-mono">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              <span>Zero Black-Box Guesswork</span>
            </div>
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-200" />
              <span>Production Sub-10ms Serving</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-300" />
              <span>Closed-Loop SAP Write-Back</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default PredictiveAnalyticsPage;
