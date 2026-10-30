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
  Bot,
  UserCheck,
  FileText,
  Clock,
  Shuffle,
  GitCommit,
  Key,
  Monitor,
  Video,
  Layers3,
  SlidersHorizontal,
  HardDrive,
  Maximize2,
  X
} from 'lucide-react';

interface RpaPageProps {
  onOpenContact?: (defaultTopic?: string) => void;
}

export const RpaPage: React.FC<RpaPageProps> = ({
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

  // State for Section 2: Executive Perspective Interactive Evolution
  const [activeJourneyStep, setActiveJourneyStep] = useState(0);

  // State for Section 4: Circular Chevron Ecosystem Wheel (Continuous Auto-Rotation)
  const [hoveredWheelIndex, setHoveredWheelIndex] = useState<number | null>(0);

  // Auto-tour rotation for Section 4 (Always Automatic)
  useEffect(() => {
    const interval = setInterval(() => {
      setHoveredWheelIndex((prev) => (prev === null ? 0 : (prev + 1) % 8));
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  // State for Section 5: Architecture Comparison Sandbox Tab
  const [activeSandboxTab, setActiveSandboxTab] = useState<'comparison' | 'layers' | 'protocols'>('comparison');

  // State for Section 5 Tab 3: Specific Protocol Sandbox Sub-Tab
  const [activeProtocolTab, setActiveProtocolTab] = useState<'self-healing-dom' | 'elastic-dispatch' | 'zero-trust-vault'>('self-healing-dom');

  // State for Section 7: FAQ Accordion
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // =========================================================================
  // DATA STRUCTURES
  // =========================================================================

  // Section 4: Circular Chevron Segments (8 Interlocking RPA Fleet Layers)
  const wheelSegments = [
    {
      id: 'unattended-bot-swarm',
      shortTag: 'UNATTENDED',
      title: 'Unattended Robotic Swarm Execution',
      desc: '24/7 background robot instances executing high-volume, rule-based transactional workloads across SAP ledgers and banking gateways with zero human latency.',
      badge: '24/7 LIGHTS-OUT BOTS',
      metric: '99.95% Task Completion',
      side: 'right',
      color: '#0070C0',
      textColor: 'text-sky-400',
      bgGlow: 'rgba(0, 112, 192, 0.35)',
      icon: Bot
    },
    {
      id: 'attended-desktop-copilot',
      shortTag: 'ATTENDED',
      title: 'Attended Desktop Human Copilots',
      desc: 'On-demand sidekick automations triggered directly by call center agents and customer service reps to automate data entry and customer lookups.',
      badge: 'ON-DEMAND DESKTOP COPILOT',
      metric: '68% Call Handle Time Drop',
      side: 'right',
      color: '#0284C7',
      textColor: 'text-cyan-400',
      bgGlow: 'rgba(2, 132, 199, 0.35)',
      icon: UserCheck
    },
    {
      id: 'cognitive-computer-vision',
      shortTag: 'COMPUTER VISION',
      title: 'Surface Vision & Citrix AI Automation',
      desc: 'Computer vision and optical recognition neural networks automating virtualized desktop environments (Citrix, RDP, VMware) without pixel breakages.',
      badge: 'CITRIX & RDP RESILIENCE',
      metric: 'Zero Virtual Breakage',
      side: 'right',
      color: '#06B6D4',
      textColor: 'text-cyan-300',
      bgGlow: 'rgba(6, 182, 212, 0.35)',
      icon: Eye
    },
    {
      id: 'self-healing-selectors',
      shortTag: 'SELF-HEALING',
      title: 'Adaptive Multi-Anchor Selectors',
      desc: 'Multi-layer fallback algorithms that dynamically recalculate DOM element targets when web application layouts, class names, or CSS styles change.',
      badge: 'ZERO DOM-BREAK DOWNTIME',
      metric: '94% Maintenance Reduction',
      side: 'right',
      color: '#10B981',
      textColor: 'text-emerald-400',
      bgGlow: 'rgba(16, 185, 129, 0.35)',
      icon: Wrench
    },
    {
      id: 'centralized-fleet-orchestrator',
      shortTag: 'FLEET CONTROL',
      title: 'Centralized Multi-Tenant Fleet Control',
      desc: 'Enterprise management plane providing real-time robot heartbeat telemetry, workload re-prioritization, and dynamic virtual machine auto-scaling.',
      badge: 'DYNAMIC AUTO-DISPATCH',
      metric: 'Sub-Second Queue Routing',
      side: 'left',
      color: '#F59E0B',
      textColor: 'text-amber-400',
      bgGlow: 'rgba(245, 158, 11, 0.35)',
      icon: Gauge
    },
    {
      id: 'zero-trust-credential-vault',
      shortTag: 'ZERO-TRUST VAULT',
      title: 'Hardware-Backed Credential Vaulting',
      desc: 'Hardware security module (HSM) integrations dynamically injecting single-use credentials into bot sessions without human exposure or plain-text secrets.',
      badge: 'HARDWARE-LEVEL SECRETS',
      metric: 'Zero Credential Exposure',
      side: 'left',
      color: '#EC4899',
      textColor: 'text-pink-400',
      bgGlow: 'rgba(236, 72, 153, 0.35)',
      icon: Key
    },
    {
      id: 'sap-gui-scripting-mesh',
      shortTag: 'SAP GUI & APIS',
      title: 'SAP GUI & Legacy Terminal Connectors',
      desc: 'Optimized low-level drivers interfacing with SAP GUI transactions, AS400 green-screens, and mainframes with high-velocity keyboard and memory hooks.',
      badge: 'NATIVE ERP SCRIPTING',
      metric: '12x Faster Than Human UI',
      side: 'left',
      color: '#8B5CF6',
      textColor: 'text-purple-400',
      bgGlow: 'rgba(139, 92, 246, 0.35)',
      icon: Terminal
    },
    {
      id: 'bot-audit-session-telemetry',
      shortTag: 'COMPLIANCE HUD',
      title: 'Cryptographic Audit & Session Replay',
      desc: 'Full video screen recording and cryptographic audit logging capturing every robotic keystroke, API response, and calculation for SOX compliance.',
      badge: '100% AUDIT REPLAYABILITY',
      metric: 'Complete Forensic Trail',
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

  // Section 2: Journey Steps (6 Progressive RPA Evolution Phases)
  const journeySteps = [
    {
      id: 'bot-workload-intake',
      label: '1. Workload Intake',
      sublabel: 'Dynamic Queue Routing',
      desc: 'Centralized orchestrator ingests transactional items from ERP tables, message queues, and shared mailbox triggers into prioritized work queues.',
      tech: 'Enterprise Work Queue Schedulers',
      icon: Zap,
      highlights: [
        'Priority-Based Queue Allocation',
        'Multi-Tenant Workload Segregation',
        'Automated SLA Deadline Timers'
      ]
    },
    {
      id: 'cognitive-screen-vision',
      label: '2. Cognitive Vision',
      sublabel: 'Citrix & DOM AI Vision',
      desc: 'Applying machine learning vision to detect UI controls across virtualized Citrix, remote desktops, and legacy terminals without coordinate errors.',
      tech: 'Optical Computer Vision Neural Nets',
      icon: Eye,
      highlights: [
        'Pixel-Independent Control Anchors',
        'Virtual Desktop Surface Automation',
        'Sub-Millisecond Element Recognition'
      ]
    },
    {
      id: 'transactional-execution',
      label: '3. Transactional Execution',
      sublabel: 'SAP GUI & Web Actions',
      desc: 'Bots execute end-to-end multi-screen workflows: posting journal entries, updating delivery notes in SAP, and cross-verifying banking portals.',
      tech: 'Native SAP GUI & Web Driver Hooks',
      icon: Bot,
      highlights: [
        'Deep SAP GUI Transaction Automation',
        'Automated Two-Way Data Reconciliation',
        'Zero-Error Transactional Commits'
      ]
    },
    {
      id: 'self-healing-selectors',
      label: '4. Self-Healing Selectors',
      sublabel: 'Adaptive Multi-Anchor Fallback',
      desc: 'When underlying applications undergo UI redesigns or updates, the self-healing engine dynamically recalculates targets to avoid bot failure.',
      tech: 'Fuzzy DOM & Visual Semantic Trees',
      icon: Wrench,
      highlights: [
        'Dynamic Attribute Matching Fallbacks',
        'Zero Script Breakages on App Updates',
        'Autonomous Maintenance Log Alerts'
      ]
    },
    {
      id: 'fleet-load-balancing',
      label: '5. Fleet Auto-Scaling',
      sublabel: 'Dynamic VM Fleet Scaling',
      desc: 'Orchestrator dynamically provisions virtual worker machines during month-end financial closing surges and scales them down during idle periods.',
      tech: 'Cloud Virtual Desktop Auto-Scalers',
      icon: Gauge,
      highlights: [
        'Scale-to-Demand VM Allocation',
        'Elimination of Idle License Waste',
        'Automated Worker Health Monitoring'
      ]
    },
    {
      id: 'audit-sovereign-telemetry',
      label: '6. Immutable Audit',
      sublabel: 'Forensic Video & Keystroke Logs',
      desc: 'Every robot execution is cryptographically signed, timestamped, and stored with optional video session recordings for internal audit and SOX compliance.',
      tech: 'Cryptographic Audit & Session Video',
      icon: ShieldCheck,
      highlights: [
        'Immutable Step-by-Step Action Logs',
        'Full Video Session Audit Playback',
        '100% SOX Regulatory Compliance'
      ]
    }
  ];

  // Section 3: Enterprise RPA Challenges (6 Comprehensive Cards)
  const rpaChallenges = [
    {
      icon: AlertTriangle,
      tag: 'FRAGILE UI SELECTORS',
      title: 'Bots Crashing After Minor App Updates',
      desc: 'Traditional bots fail catastrophically when a SaaS application alters CSS class names or moves a button, generating constant emergency maintenance tickets.',
      footer: 'Multi-Anchor Self-Healing AI Selectors'
    },
    {
      icon: Boxes,
      tag: 'UNMONITORED BOT SPRAWL',
      title: 'Isolated Desktop Scripts Without Oversight',
      desc: 'Uncoordinated desktop automations created across regional departments operate in silos with zero centralized monitoring, security controls, or SLA visibility.',
      footer: 'Centralized Multi-Tenant Fleet Orchestrator'
    },
    {
      icon: Key,
      tag: 'SECURITY & SECRETS RISK',
      title: 'Hardcoded Passwords & Shared Accounts',
      desc: 'Dangerous practices like embedding database passwords inside script files expose enterprises to severe credential compromise and audit failures.',
      footer: 'CyberArk & Azure Key Vault Hardware HSM'
    },
    {
      icon: Monitor,
      tag: 'VIRTUAL DESKTOP BLINDNESS',
      title: 'Inability to Automate Citrix & Remote RDP',
      desc: 'Legacy screen scrapers cannot identify UI elements inside Citrix virtualized environments, leaving core remote desktop workflows completely unautomated.',
      footer: 'GPU-Accelerated Optical Computer Vision'
    },
    {
      icon: Clock,
      tag: 'HIGH LICENSE WASTE',
      title: 'Robots Idling 70% of the Working Day',
      desc: 'Fixed bot licenses dedicated to single departments sit unused overnight while finance operations choke on month-end backlog processing surges.',
      footer: 'Dynamic Elastic Workload Auto-Scheduling'
    },
    {
      icon: ShieldCheck,
      tag: 'UNVERIFIABLE EXECUTION',
      title: 'Lack of Audit Evidence in Financial Runs',
      desc: 'When an unattended robot encounters a ledger discrepancy, auditors have no forensic trail or visual proof of what the bot observed on the screen.',
      footer: 'Video Recording & Immutable Action Ledgers'
    }
  ];

  // Section 5: Side-by-side Architectural Comparison Matrix
  const architecturalComparison = [
    {
      dimension: 'UI Stability & Maintenance',
      legacyApproach: 'Brittle single-attribute selectors that break immediately when a web or desktop application updates its UI layout.',
      modernApproach: 'Cognitive multi-anchor selectors with computer vision and fuzzy DOM fallbacks that automatically self-heal.',
      statusBadge: 'SELF-HEALING'
    },
    {
      dimension: 'Deployment Architecture',
      legacyApproach: 'Uncoordinated desktop scripts executed on local employee laptops without centralized scheduling or recovery.',
      modernApproach: 'Centralized multi-tenant cloud orchestrator managing auto-scaling virtual machine runner pools 24/7/365.',
      statusBadge: 'MULTI-TENANT'
    },
    {
      dimension: 'Credential Security',
      legacyApproach: 'Plain-text passwords embedded in configuration files or shared static accounts stored insecurely on workstations.',
      modernApproach: 'Zero-trust enterprise vault integration (CyberArk/Azure Key Vault) injecting short-lived dynamic credentials.',
      statusBadge: 'ZERO-TRUST'
    },
    {
      dimension: 'Virtual Desktop Support',
      legacyApproach: 'Unreliable pixel-coordinate clicking in Citrix/RDP that fails when screen resolution or zoom level changes.',
      modernApproach: 'Neural optical computer vision recognizing buttons, tables, and text across virtual desktops with sub-pixel precision.',
      statusBadge: 'OPTICAL AI'
    },
    {
      dimension: 'Audit & Compliance Proof',
      legacyApproach: 'Basic text log files easily altered or deleted, providing zero visual verification for compliance auditors.',
      modernApproach: 'Cryptographic tamper-evident action logs with optional full-motion video session recordings for SOX reviews.',
      statusBadge: 'SOX GOVERNED'
    }
  ];

  // Section 5: Protocol Sandbox Tab Specifications
  const protocolDetails = {
    'self-healing-dom': {
      badge: 'ADAPTIVE SELECTOR ENGINE',
      title: 'Multi-Anchor Self-Healing DOM Engine',
      desc: 'Eliminate bot maintenance by combining structural DOM paths, semantic text anchors, and visual computer vision into an adaptive selector consensus.',
      specs: [
        { label: 'Fallback Layers', val: '4-Tier Adaptive Resolution' },
        { label: 'Healing Resolution', val: '< 18ms Dynamic Recalculation' },
        { label: 'Visual Anchoring', val: 'Proximity Semantic Neighbor Mesh' },
        { label: 'Maintenance Telemetry', val: 'Automated Selector Drift Alert' }
      ],
      steps: [
        { name: 'Primary Target Scan', detail: 'Attempts structural DOM XPath and CSS identifier binding on the target UI button.' },
        { name: 'Drift Interception', detail: 'Detects layout alteration and automatically initiates semantic visual proximity search.' },
        { name: 'Consensus Binding', detail: 'Confirms target using surrounding label text and commits click without execution failure.' }
      ]
    },
    'elastic-dispatch': {
      badge: 'ELASTIC FLEET ORCHESTRATION',
      title: 'Dynamic Work Queue & VM Auto-Scaler',
      desc: 'Maximize bot asset utilization by dynamically routing pending transactions to available virtual machines and scaling runner pools on demand.',
      specs: [
        { label: 'Queue Capacity', val: '> 500,000 Concurrent Items' },
        { label: 'Dispatch Latency', val: 'Sub-Second Workload Routing' },
        { label: 'Auto-Scaling Trigger', val: 'SLA Burn Rate & Queue Depth' },
        { label: 'Multi-Tenancy', val: 'Complete RBAC Departmental Isolation' }
      ],
      steps: [
        { name: 'Workload Enqueue', detail: 'SAP batch job inserts 10,000 vendor invoices into prioritized processing queue.' },
        { name: 'Capacity Evaluation', detail: 'Orchestrator calculates required throughput and spins up 15 cloud virtual workers.' },
        { name: 'Load Balanced Execution', detail: 'Distributes items evenly across runners and terminates instances upon queue clearance.' }
      ]
    },
    'zero-trust-vault': {
      badge: 'CYBER-ISOLATED VAULTING',
      title: 'Zero-Trust Credential Injection Protocol',
      desc: 'Ensure flawless compliance by delegating all password retrieval and session authentication to enterprise-grade credential vaults.',
      specs: [
        { label: 'Vault Integration', val: 'CyberArk, Azure Key Vault, HashiCorp' },
        { label: 'Session Token Life', val: 'Ephemeral Single-Use (TTL < 5m)' },
        { label: 'Secret Storage', val: 'Hardware Security Module (HSM) FIPS' },
        { label: 'Audit Trail', val: '100% Cryptographic Signature Logging' }
      ],
      steps: [
        { name: 'Authentication Challenge', detail: 'Bot reaches banking portal login screen and issues cryptographically signed vault ticket.' },
        { name: 'Identity Attestation', detail: 'Vault verifies bot runner VM hardware identity, process hash, and current work order.' },
        { name: 'In-Memory Injection', detail: 'Injects one-time credentials directly into secure browser memory without disk exposure.' }
      ]
    }
  };

  // Section 6: Phased Transformation Stages
  const transformationPhases = [
    {
      phase: 'STAGE 01',
      title: 'Process Discovery & Bot Complexity Scoring',
      focus: 'Screening operational workflows, calculating automation suitability matrices, measuring manual labor baselines, and modeling licensing ROI.',
      deliverable: 'RPA Feasibility Assessment & Opportunity Scorecard',
      icon: Search
    },
    {
      phase: 'STAGE 02',
      title: 'Fleet Infrastructure & Security Vault Architecture',
      focus: 'Deploying the multi-tenant orchestrator, provisioning virtual machine pools, integrating enterprise credential vaults, and hardening network paths.',
      deliverable: 'Hardened Fleet Orchestrator & CyberArk Vault Integration',
      icon: ShieldCheck
    },
    {
      phase: 'STAGE 03',
      title: 'Cognitive Scripting & High-Volume Bot Deployment',
      focus: 'Developing self-healing automated bots, training computer vision for Citrix applications, and scripting core SAP GUI transactional flows.',
      deliverable: 'Production Bot Fleet & Self-Healing Automation Modules',
      icon: Bot
    },
    {
      phase: 'STAGE 04',
      title: 'Autonomous Scaling & Continuous Fleet Governance',
      focus: 'Activating elastic auto-scaling runner pools, setting up live NOC control towers, and expanding automation across global operating units.',
      deliverable: 'Autonomous Bot Fleet Control Tower & SLA Governance',
      icon: Activity
    }
  ];

  // Section 7: Enterprise FAQs
  const rpaFaqs = [
    {
      question: 'What is the difference between unattended and attended RPA bots, and which should we deploy?',
      answer: 'Unattended bots operate 24/7 in lights-out virtual machine environments without human intervention, ideal for back-office transactional processing like SAP invoice entry, journal postings, and batch reconciliations. Attended bots act as digital desktop copilots triggered on-demand by customer service agents or accountants to assist with live tasks. Most enterprise roadmaps deploy 80% unattended bots for scale and 20% attended bots for high-touch customer support.'
    },
    {
      question: 'How does self-healing computer vision prevent bots from breaking when an application updates?',
      answer: 'Traditional bots rely on brittle DOM XPaths or static screen coordinates that fail when a button shifts position or changes color. KNOOVIQ incorporates adaptive multi-anchor algorithms and optical computer vision neural networks. The bot recognizes UI elements based on semantic text proximity, visual icon patterns, and surrounding contextual anchors, automatically adapting to UI modifications without human code revisions.'
    },
    {
      question: 'Can KNOOVIQ software robots automate legacy SAP GUI transactions without performance drag?',
      answer: 'Yes. Our bots interface with SAP through low-level SAP GUI Scripting APIs and RFC connections rather than surface optical scraping whenever possible. This enables robots to execute SAP transactions up to 12 times faster than a human operator while bypassing visual rendering delays. Because transactions execute through standard SAP validation layers, all business rules and authorization checks are strictly maintained.'
    },
    {
      question: 'How do you guarantee that software bots do not compromise our enterprise cybersecurity or SOX compliance?',
      answer: 'We treat software bots with the same rigor as human employees. Robots are provisioned with unique non-human identities (NHI), and their credentials are never hardcoded. Instead, they are retrieved at runtime from hardware-backed vaults (such as CyberArk or Azure Key Vault) with ephemeral single-use session tokens. Every action, keystroke, and database update is logged immutably, and full video recordings are captured for audit review.'
    },
    {
      question: 'What infrastructure is required to host an enterprise fleet of unattended software bots?',
      answer: 'Unattended bot fleets typically run on scalable cloud virtual machine pools (AWS EC2, Azure Virtual Machines, or on-premises Hyper-V/VMware). Our centralized orchestrator dynamically spins up runner instances when work queues experience surges (such as month-end closing) and scales down to zero during quiet periods, eliminating idle cloud computing costs and maximizing software license utilization.'
    },
    {
      question: 'Can we migrate our existing bots from legacy RPA vendors (UiPath, Automation Anywhere, Blue Prism)?',
      answer: 'Yes. KNOOVIQ provides automated bot migration utilities and architectural refactoring services to transition legacy scripts into modern, resilient, API-first automations. We assess existing workflows, eliminate redundant desktop screen-scraping logic in favor of direct ERP APIs where available, and upgrade remaining UI interactions with self-healing selector engines.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#0070C0] selection:text-white antialiased overflow-x-hidden">

      {/* =========================================================================
          SECTION 1: HERO SECTION (AI Agents Style Full Bleed Panoramic Background)
          IMAGE: /images/rpa/enterprise_robotic_process_automation_hero.png
          ========================================================================= */}
      <section className="relative w-full min-h-[560px] sm:min-h-[620px] lg:min-h-[660px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 overflow-hidden bg-slate-950 text-white">
        {/* Full-Bleed 16:9 Panoramic Image - AI Agents Style */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/rpa/enterprise_robotic_process_automation_hero.png"
            alt="Enterprise Robotic Process Automation & Intelligent Bot Fleet Management"
            className="w-full h-full object-cover object-right sm:object-[78%_center] lg:object-center brightness-[1.10] contrast-[1.06]"
            style={{ imageRendering: '-webkit-optimize-contrast' }}
          />
          {/* Lighter radiant blue overlay for lighter, clearer look */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/40 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-sky-500/10 mix-blend-screen pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-2xl lg:max-w-xl space-y-6">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.55 }}
              className="space-y-4"
            >
              {/* Practice Pill Badge (Digital Intelligence Practice and Full Screen removed) */}
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/70 backdrop-blur-md border border-cyan-500/30 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 shadow-sm">
                  <Bot className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Robotic Process Automation (RPA)</span>
                </div>
              </div>

              {/* Animated Headline with High-Contrast Typography */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                Enterprise <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-200">
                  Robotic Process Automation &amp; Intelligent Bot Fleet
                </span>
              </h1>

              {/* Subtitle with High Legibility */}
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal pt-1 drop-shadow-md">
                Resilient unattended software bots, self-healing UI selectors, cognitive computer vision, and centralized multi-tenant orchestrators automating high-volume repetitive enterprise operations.
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
                <Bot className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>99.9% Bot Fleet Uptime</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-emerald-200 shadow-sm">
                <Eye className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Citrix &amp; RDP Vision</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-sky-200 shadow-sm">
                <Key className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Hardware HSM Vault</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: EXECUTIVE PERSPECTIVE (Clean Light Corporate Theme - Large Legible Text)
          IMAGE 2 OF 3: /images/rpa/bot_fleet_control.png
          ========================================================================= */}
      <section id="rpa-evolution" className="py-24 bg-gradient-to-b from-white via-[#F8FBFE] to-white border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-300 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#0070C0]">
                <Bot className="w-4 h-4 text-[#0070C0]" />
                <span>EXECUTIVE RPA PERSPECTIVE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
                Architecting Resilient, Cognitive <span className="text-[#0070C0]">Robotic Process Automation</span>
              </h2>

              <div className="border-l-4 border-[#0070C0] border-y border-r border-slate-300 pl-5 py-3.5 bg-gradient-to-r from-sky-50/80 via-sky-50/30 to-transparent rounded-r-2xl">
                <p className="text-base sm:text-lg font-semibold text-slate-800 leading-relaxed italic">
                  &ldquo;First-generation RPA bots broke every time an application button moved three pixels. Enterprise-grade modern RPA demands cognitive computer vision, self-healing DOM selectors, and centralized fleet governance that keeps critical transactional robots operating uninterrupted 24/7/365.&rdquo;
                </p>
              </div>

              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
                Knooviq engineers cognitive robotic process automation fleets that liberate human professionals from repetitive swivel-chair administration. We deploy unattended cloud worker swarms, attended desktop copilots, and optical vision models that interface seamlessly with SAP S/4HANA, banking portals, and legacy virtualized terminal environments.
              </p>

              {/* 3 Executive Pillars (Clear, Large, Highly Legible Text) */}
              <div className="space-y-4 pt-2">
                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-950">Resilient Self-Healing Selectors</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Multi-anchor DOM and computer vision fallbacks that automatically adapt when underlying web or desktop application interfaces change.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <Gauge className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-950">Centralized Fleet Orchestration</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Dynamic workload load-balancing, auto-scaling virtual machine pools, and sub-second job dispatch across global enterprise tenants.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <Key className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-950">Zero-Trust Credential Vaulting</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Automated hardware-backed password vaulting ensuring software robots authenticate without human credential exposure or plain-text secrets.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Interactive Evolution Visual (IMAGE 4: 100% Clear, Complete Infographic without any Side Cut) */}
            <div className="lg:col-span-6 space-y-5">
              
              <div className="relative rounded-3xl overflow-hidden border-2 border-slate-300 shadow-xl bg-slate-900 group h-[440px] sm:h-[540px] lg:h-[620px] w-full">
                {/* IMAGE 4 */}
                <img
                  src="/images/rpa/architecting_cognitive_robotic_process_automation.jpg"
                  alt="Architecting Resilient, Cognitive Robotic Process Automation"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-lg bg-slate-900/90 backdrop-blur-md border border-cyan-400/50 text-xs sm:text-sm font-mono font-bold text-cyan-300 flex items-center gap-2 shadow-md z-10">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>RPA FOCUS: {journeySteps[activeJourneyStep].label.toUpperCase()}</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1.5 p-3 rounded-xl bg-slate-900/85 backdrop-blur-md border border-slate-700/80 z-10">
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
              Critical Impediments in First-Generation RPA
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Why brittle desktop macros, unmanaged robot sprawl, and hardcoded credentials create mounting maintenance overhead and security vulnerabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {rpaChallenges.map((item, idx) => {
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
              INTERCONNECTED ROBOTIC ECOSYSTEM
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              The KNOOVIQ Cognitive RPA Framework
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Explore the eight mutually reinforcing layers of our production-grade bot execution platform. Hover over any segment to inspect its runtime mechanics.
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
                        RPA FLEET CORE
                      </span>
                      <div className="text-sm sm:text-base font-black text-white leading-tight">
                        Cognitive Bot Fabric
                      </div>
                      <div className="text-xs text-slate-300">
                        Interactive Topology
                      </div>
                    </div>
                  )}
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
          IMAGE 3 OF 3: /images/rpa/bot_architecture_mesh.png
          ========================================================================= */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3.5">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#0070C0] uppercase">
              TOPOLOGICAL ARCHITECTURE BLUEPRINT
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950">
              Modern Cognitive RPA vs. Legacy Desktop Macros
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Examine the concrete architectural difference between fragile desktop scripts and KNOOVIQ enterprise-governed cognitive bot swarms.
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
              Transformation Matrix (Macros vs. Cognitive RPA)
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
              Interactive RPA Protocols
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
                      <th className="py-4 px-6 font-bold w-1/4">RPA Dimension</th>
                      <th className="py-4 px-6 font-bold w-1/3 text-rose-800 bg-rose-50/70">Legacy Desktop Macros &amp; Scripts</th>
                      <th className="py-4 px-6 font-bold w-1/3 text-[#0070C0] bg-sky-50/70">KNOOVIQ Cognitive RPA Fleet</th>
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
                  src="/images/rpa/bot_architecture_mesh.png"
                  alt="Enterprise Robotic Process Automation Fleet Architecture Topology"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4 px-4 py-2 rounded-xl bg-slate-900/90 backdrop-blur-md border border-cyan-400/50 text-xs sm:text-sm font-mono font-bold text-cyan-300 flex items-center gap-2">
                  <Bot className="w-4 h-4 text-cyan-400" />
                  <span>ARCHITECTURE: CENTRALIZED RPA FLEET &amp; ORCHESTRATION MESH</span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2 p-4 rounded-2xl bg-slate-900/85 backdrop-blur-md border border-slate-700/80">
                  <div className="text-sm sm:text-base font-mono font-bold text-cyan-300">
                    Central Fleet Controller, Virtual Runner Swarm &amp; CyberArk Credential Vault
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 font-normal leading-relaxed">
                    Zero-trust robotic architecture deploying headless virtual runners, hardware HSM credential injection, self-healing computer vision selectors, and sub-second queue balancing across enterprise tenants.
                  </p>
                </div>
              </div>

              {/* Architectural Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-sky-100 text-[#0070C0] shrink-0">
                    <Gauge className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Fleet Control Tower</h4>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                      Real-time heartbeat monitoring, automated exception failover, and dynamic workload load-balancing.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-sky-100 text-[#0070C0] shrink-0">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Self-Healing Selectors</h4>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                      Multi-anchor fuzzy DOM algorithms adapting dynamically when SaaS or desktop screens receive layout changes.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-sky-100 text-[#0070C0] shrink-0">
                    <Key className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">CyberArk Vault Integration</h4>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                      Dynamic, ephemeral single-use credential injection eliminating hardcoded passwords and plain-text secrets.
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
                  onClick={() => setActiveProtocolTab('self-healing-dom')}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all border cursor-pointer ${
                    activeProtocolTab === 'self-healing-dom'
                      ? 'bg-[#0070C0] text-white border-[#0070C0]'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  Self-Healing Selector Engine
                </button>
                <button
                  onClick={() => setActiveProtocolTab('elastic-dispatch')}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all border cursor-pointer ${
                    activeProtocolTab === 'elastic-dispatch'
                      ? 'bg-[#0070C0] text-white border-[#0070C0]'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  Elastic Workload Queueing
                </button>
                <button
                  onClick={() => setActiveProtocolTab('zero-trust-vault')}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all border cursor-pointer ${
                    activeProtocolTab === 'zero-trust-vault'
                      ? 'bg-[#0070C0] text-white border-[#0070C0]'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  Zero-Trust Credential Injection
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
              A structured, risk-mitigated journey from fragile desktop scripts to enterprise-wide cognitive bot fleet orchestration.
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
          SECTION 7: EXECUTIVE FAQS (Clean White Theme - Large Readable Typography)
          ========================================================================= */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3.5">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#0070C0] uppercase">
              EXECUTIVE CLARIFICATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950">
              Frequently Asked RPA Fleet Questions
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Addressing key strategic, operational, and architectural considerations for enterprise technology leaders.
            </p>
          </div>

          <div className="space-y-4">
            {rpaFaqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 bg-white shadow-xs overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <span className="font-bold text-base sm:text-lg text-slate-900">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#0070C0] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-6 pb-6 pt-1 border-t border-slate-100 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
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
            Ready to Modernize Your Enterprise RPA Fleet?
          </h2>

          <p className="text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed font-normal">
            Collaborate with senior automation architects to eliminate fragile desktop scripts, implement self-healing computer vision, and deploy hardware-backed credential vaulting.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
            <button
              onClick={() => onOpenContact ? onOpenContact('RPA Fleet Modernization Workshop') : undefined}
              className="px-9 py-4 rounded-xl font-bold text-sm sm:text-base text-slate-900 bg-white hover:bg-sky-50 shadow-xl transition-all flex items-center gap-2 group w-full sm:w-auto justify-center cursor-pointer"
            >
              <span>Schedule RPA Workshop</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#0070C0]" />
            </button>
            <Link
              to="/digital-intelligence/intelligent-document-processing"
              className="px-8 py-4 rounded-xl font-bold text-sm sm:text-base text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all w-full sm:w-auto justify-center flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Intelligent Document Processing</span>
              <ExternalLink className="w-4 h-4 text-sky-200" />
            </Link>
          </div>

          <div className="pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-7 text-xs sm:text-sm text-sky-100 font-mono">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              <span>CyberArk HSM Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-cyan-200" />
              <span>Citrix &amp; RDP Compatible</span>
            </div>
            <div className="flex items-center gap-2">
              <Bot className="w-4 h-4 text-amber-300" />
              <span>99.9% Fleet Availability</span>
            </div>
          </div>

        </div>
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
                <Bot className="w-4 h-4 text-cyan-400" />
                <span className="text-xs sm:text-sm font-mono font-bold text-white uppercase tracking-wider">
                  Enterprise Robotic Process Automation &amp; Intelligent Bot Fleet Management
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsHeroModalOpen(false)}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
                title="Close modal (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative flex-1 overflow-auto bg-slate-950 flex items-center justify-center p-2 sm:p-4">
              <img
                src="/images/rpa/enterprise_robotic_process_automation_hero.png"
                alt="Enterprise RPA Bot Fleet Architecture Full View"
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

export default RpaPage;
