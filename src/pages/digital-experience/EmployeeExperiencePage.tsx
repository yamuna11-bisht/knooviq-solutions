import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Users,
  Briefcase,
  HeartHandshake,
  MessageSquare,
  Globe2,
  Layers,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Search,
  Activity,
  Compass,
  TrendingUp,
  TrendingDown,
  Target,
  Smartphone,
  LifeBuoy,
  Database,
  Brain,
  GraduationCap,
  FolderSync,
  ChevronDown,
  XCircle,
  Maximize2,
  X,
  FileCheck
} from 'lucide-react';

interface EmployeeExperiencePageProps {
  onOpenContact?: (defaultTopic?: string) => void;
}

export const EmployeeExperiencePage: React.FC<EmployeeExperiencePageProps> = ({
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
    document.title = 'Enterprise Employee Experience (EX) & Modern Workplace | KNOOVIQ';
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
  const [activeTelemetryTab, setActiveTelemetryTab] = useState<'onboarding' | 'workspace' | 'talent'>('onboarding');

  // State for Section 7: FAQ Accordion
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Section 4: Circular Chevron Segments (8 Interlocking Layers)
  const wheelSegments = [
    {
      id: 'touchless-onboarding',
      shortTag: 'ONBOARD',
      title: 'Automated Lifecycle Onboarding',
      desc: 'Orchestrating seamless Day-One readiness across IT provisioning, security credentials, payroll setup, and departmental orientation.',
      badge: 'LIFECYCLE READINESS',
      metric: 'Frictionless Day-One Productivity',
      side: 'right',
      color: '#0070C0',
      textColor: 'text-sky-400',
      bgGlow: 'rgba(0, 112, 192, 0.35)',
      icon: GraduationCap
    },
    {
      id: 'unified-workspace',
      shortTag: 'PORTAL',
      title: 'Unified Modern Digital Workplace',
      desc: 'Centralizing cross-departmental tools, announcements, personalized tasks, and knowledge assets in an intuitive role-based workspace.',
      badge: 'DIGITAL WORKSPACE',
      metric: 'Consolidated Single Access Point',
      side: 'right',
      color: '#0284C7',
      textColor: 'text-cyan-400',
      bgGlow: 'rgba(2, 132, 199, 0.35)',
      icon: Briefcase
    },
    {
      id: 'conversational-assist',
      shortTag: 'ASSIST',
      title: 'Conversational HR & IT Assistants',
      desc: 'Empowering personnel with generative AI copilots that answer policy queries, file expense reports, and resolve IT tickets instantaneously.',
      badge: 'COGNITIVE COPILOTS',
      metric: 'Zero-Wait Internal Support',
      side: 'right',
      color: '#06B6D4',
      textColor: 'text-cyan-300',
      bgGlow: 'rgba(6, 182, 212, 0.35)',
      icon: MessageSquare
    },
    {
      id: 'self-service',
      shortTag: 'SERVICE',
      title: 'Autonomous Employee Self-Service',
      desc: 'Streamlining leave approvals, benefit selections, compensation statements, and address changes without manual HR personnel intervention.',
      badge: 'TOUCHLESS SELF-SERVICE',
      metric: 'Straight-Through Request Processing',
      side: 'right',
      color: '#10B981',
      textColor: 'text-emerald-400',
      bgGlow: 'rgba(16, 185, 129, 0.35)',
      icon: CheckCircle2
    },
    {
      id: 'talent-mobility',
      shortTag: 'GROWTH',
      title: 'Intelligent Talent Mobility & Upskilling',
      desc: 'Matching employees dynamically with internal project gigs, mentorship programs, and targeted skill pathways based on enterprise demand.',
      badge: 'TALENT MOBILITY',
      metric: 'Maximized Organizational Potential',
      side: 'left',
      color: '#F59E0B',
      textColor: 'text-amber-400',
      bgGlow: 'rgba(245, 158, 11, 0.35)',
      icon: TrendingUp
    },
    {
      id: 'pulse-sentiment',
      shortTag: 'PULSE',
      title: 'Continuous Workforce Sentiment Pulse',
      desc: 'Capturing longitudinal engagement indicators across organizational tiers, pinpointing burnout patterns and team friction before attrition occurs.',
      badge: 'SENTIMENT SENTINEL',
      metric: 'Proactive Retention Telemetry',
      side: 'left',
      color: '#EC4899',
      textColor: 'text-pink-400',
      bgGlow: 'rgba(236, 72, 153, 0.35)',
      icon: HeartHandshake
    },
    {
      id: 'workflow-harmonization',
      shortTag: 'FLOW',
      title: 'Cross-System Workflow Harmonization',
      desc: 'Unifying approval flows across SAP SuccessFactors, ServiceNow, Microsoft Teams, and Workday into a consolidated universal inbox.',
      badge: 'UNIVERSAL INBOX',
      metric: 'Zero Approval Bottlenecks',
      side: 'left',
      color: '#8B5CF6',
      textColor: 'text-purple-400',
      bgGlow: 'rgba(139, 92, 246, 0.35)',
      icon: FolderSync
    },
    {
      id: 'global-compliance',
      shortTag: 'COMPLY',
      title: 'Global Labor & Policy Compliance Sentinel',
      desc: 'Enforcing statutory labor laws, data privacy, and corporate ethics guidelines automatically across international operating subsidiaries.',
      badge: 'POLICY ASSURANCE',
      metric: 'Audit-Proof Governance',
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

  // Section 2: Journey Steps
  const journeySteps = [
    {
      id: 'friction-audit',
      label: 'Friction Diagnostics',
      sublabel: 'Empirical Journey Mining',
      desc: 'Isolating administrative bottlenecks, multi-system login fatigue, and broken handoffs that sap workforce productivity across global departments.',
      tech: 'Workplace Interaction Mining & Friction Heatmaps',
      icon: Search,
      highlights: [
        'Multi-System Login Fatigue Analysis',
        'Cross-Departmental Approval Loop Profiling',
        'Empirical Administrative Friction Heatmaps'
      ]
    },
    {
      id: 'portal-unification',
      label: 'Portal Unification',
      sublabel: 'Consolidated Single Gateway',
      desc: 'Integrating disparate enterprise tools into a unified, responsive employee workspace featuring role-tailored dashboards and single-sign-on access.',
      tech: 'Enterprise Portal Mesh & Modern Design Tokens',
      icon: Briefcase,
      highlights: [
        'Unified Application Launcher & Directory',
        'Role-Based Granular Dashboard Customization',
        'Frictionless Single-Sign-On (SSO) Federation'
      ]
    },
    {
      id: 'cognitive-copilot',
      label: 'Cognitive Copilots',
      sublabel: 'Zero-Wait AI Assistants',
      desc: 'Equipping staff with intelligent generative AI assistants trained on verified corporate policies, payroll guidelines, and IT troubleshooting manuals.',
      tech: 'Enterprise Policy RAG & Task Automation Bots',
      icon: MessageSquare,
      highlights: [
        'Instantaneous Verified Policy Guidance',
        'Automated IT & HR Ticket Remediation',
        'Contextual Natural Language Task Execution'
      ]
    },
    {
      id: 'universal-inbox',
      label: 'Universal Task Inbox',
      sublabel: 'Cross-System Flow Sync',
      desc: 'Aggregating leave, purchase requisition, expense, and project sign-off requests into a single unified inbox accessible on mobile and collaboration tools.',
      tech: 'SAP BTP Task Center & Webhook Event Mesh',
      icon: FolderSync,
      highlights: [
        'One-Click Mobile Approval Execution',
        'Cross-System Task Federation (SAP, Workday, ServiceNow)',
        'Automated Delegation & Escalation Rules'
      ]
    },
    {
      id: 'sentiment-telemetry',
      label: 'Sentiment Telemetry',
      sublabel: 'Continuous Engagement Pulse',
      desc: 'Tracking organizational pulse signals and team health continuously, identifying engagement dips, sentiment shifts, and workload imbalances in real time.',
      tech: 'Longitudinal Sentiment Sentinels & Early Warning',
      icon: HeartHandshake,
      highlights: [
        'Intraday Micro-Pulse Feedback Telemetry',
        'Early-Warning Burnout & Attrition Indicators',
        'Actionable Manager Guidance Dashboards'
      ]
    },
    {
      id: 'talent-mobility',
      label: 'Talent Mobility Mesh',
      sublabel: 'Internal Growth Ecosystem',
      desc: 'Scaling dynamic talent matching and personalized skills curricula across multinational operating units to nurture high-potential employees.',
      tech: 'Dynamic Skill Ontologies & Internal Gig Marketplace',
      icon: TrendingUp,
      highlights: [
        'Algorithmic Internal Gig & Project Matching',
        'Dynamic Competency & Skill Gap Mapping',
        'Personalized Executive Career Pathways'
      ]
    }
  ];

  // Section 3: Enterprise Challenges
  const exChallenges = [
    {
      icon: Layers,
      tag: 'COGNITIVE OVERLOAD',
      title: 'Application Sprawl & Context Fatigue',
      desc: 'Employees must constantly switch between dozens of disconnected applications for time tracking, benefits, travel expenses, and training, eroding focus and output.',
      footer: 'Unified Digital Workspace Gateway'
    },
    {
      icon: GraduationCap,
      tag: 'ONBOARDING FRICTION',
      title: 'Prolonged Day-One Provisioning Delays',
      desc: 'New hires spend weeks waiting for hardware deliveries, security badges, software permissions, and role onboarding, stalling immediate team contribution.',
      footer: 'Automated Lifecycle Onboarding Orchestration'
    },
    {
      icon: LifeBuoy,
      tag: 'ADMINISTRATIVE LATENCY',
      title: 'Overburdened HR & IT Service Desks',
      desc: 'Internal support specialists spend hours answering repetitive inquiries regarding leave balances, policy clauses, and equipment, slowing high-priority tasks.',
      footer: 'Conversational Enterprise Policy AI Copilots'
    },
    {
      icon: FolderSync,
      tag: 'APPROVAL BOTTLENECK',
      title: 'Scattered Multi-System Task Queues',
      desc: 'Critical purchase approvals, hiring requisitions, and travel authorizations sit unattended across fragmented software inboxes without consolidated visibility.',
      footer: 'Universal Task Center & Mobile Approvals'
    },
    {
      icon: TrendingDown,
      tag: 'ENGAGEMENT BLINDSPOT',
      title: 'Infrequent Annual Engagement Surveys',
      desc: 'Traditional annual surveys deliver lagging retrospective feedback, failing to catch team burnout, operational friction, and key talent attrition risks.',
      footer: 'Continuous Workforce Sentiment Sentinels'
    },
    {
      icon: Briefcase,
      tag: 'TALENT ATTRITION',
      title: 'Opaque Internal Career Progression',
      desc: 'High-performing personnel leave the organization due to lack of visibility into cross-departmental growth opportunities, mentors, and skill development.',
      footer: 'Intelligent Internal Talent & Gig Marketplace'
    }
  ];

  // Section 5: Side-by-side Architectural Comparison Matrix
  const architecturalComparison = [
    {
      dimension: 'Workplace Access',
      legacyApproach: 'Dozens of disjointed web portals requiring separate URLs, repetitive logins, and disconnected bookmarks.',
      modernApproach: 'Unified digital workspace gateway with single-sign-on (SSO) and role-tailored application launchers.',
      statusBadge: 'SINGLE WORKSPACE'
    },
    {
      dimension: 'Onboarding Lifecycle',
      legacyApproach: 'Manual paper-based forms and sequential email chains causing multi-week provisioning delays for new staff.',
      modernApproach: 'Automated Day-One onboarding orchestration linking HRIS, IT security, and department workflows instantly.',
      statusBadge: 'DAY-ONE READINESS'
    },
    {
      dimension: 'Internal Support & Q&A',
      legacyApproach: 'Long ticket queues and delayed email chains for basic questions regarding leave, benefits, and policies.',
      modernApproach: 'Cognitive generative AI assistants delivering instantaneous answers anchored in verified policy repositories.',
      statusBadge: 'ZERO-WAIT AI'
    },
    {
      dimension: 'Task & Approval Routing',
      legacyApproach: 'Scattered approval tasks across SAP, Workday, and ServiceNow requiring multiple individual logins.',
      modernApproach: 'Universal Task Center aggregating all corporate sign-offs into a single one-click mobile interface.',
      statusBadge: 'UNIVERSAL INBOX'
    },
    {
      dimension: 'Talent Mobility & Retention',
      legacyApproach: 'Opaque internal job boards and static career ladders leading to avoidable high-performer turnover.',
      modernApproach: 'Dynamic talent marketplace matching employees with internal gigs, mentors, and targeted upskilling paths.',
      statusBadge: 'INTERNAL MOBILITY'
    }
  ];

  // Section 5: Diagnostic Chamber Telemetry Data
  const diagnosticProcesses = {
    onboarding: {
      id: 'onboarding',
      tabLabel: 'Enterprise Onboarding',
      title: 'Global Employee Lifecycle Provisioning & Day-One Flow',
      processInfo: 'Cross-Functional HR, IT & Security Orchestration',
      conformanceLevel: 'DAY-ONE PRODUCTIVITY • ZERO ACCESS DELAYS',
      riskBadgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/50 shadow-emerald-500/10',
      recommendation: 'Orchestrate parallel hardware dispatch and SSO security provisioning 10 days prior to start date to guarantee complete Day-One enablement.',
      findings: [
        {
          level: 'STREAMLINED PROVISIONING',
          levelColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
          borderColor: 'border-emerald-500/40 hover:border-emerald-400',
          title: 'Automated Security & SSO Credentialing',
          desc: 'Credentials and multi-factor authorization tokens generate automatically across all corporate tools upon contract execution.',
          source: 'Module: Identity Lifecycle Orchestrator'
        },
        {
          level: 'INSTANT HARDWARE DISPATCH',
          levelColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
          borderColor: 'border-cyan-500/40 hover:border-cyan-400',
          title: 'Automated Device Configuration & Shipping',
          desc: 'Pre-configured laptops and peripherals dispatch automatically to remote employee addresses with end-to-end logistics tracking.',
          source: 'System: IT Asset Management & Provisioning Mesh'
        },
        {
          level: 'DAY-ONE ORIENTATION',
          levelColor: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
          borderColor: 'border-sky-500/40 hover:border-sky-400',
          title: 'Interactive Departmental Welcome Hub',
          desc: 'New hires receive personalized orientation schedules, peer mentor introductions, and team checklists within their mobile portal.',
          source: 'Portal: Modern Employee Workspace Gateway'
        }
      ]
    },
    workspace: {
      id: 'workspace',
      tabLabel: 'Digital Workspace',
      title: 'Universal Modern Workplace & Universal Task Inbox',
      processInfo: 'Single-Sign-On Workspace • Cross-System Approval Routing',
      conformanceLevel: 'SUB-SECOND ACTIONS • CONSOLIDATED TASK FLOW',
      riskBadgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-400/50 shadow-cyan-500/10',
      recommendation: 'Deploy SAP BTP Task Center mobile push notifications to eliminate purchase order and leave approval bottlenecks across management tiers.',
      findings: [
        {
          level: 'UNIVERSAL INBOX',
          levelColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
          borderColor: 'border-emerald-500/40 hover:border-emerald-400',
          title: 'One-Click Cross-System Approvals',
          desc: 'Managers approve time off, purchase orders, and hire requisitions directly from mobile devices or Microsoft Teams without logging into ERPs.',
          source: 'Integration: SAP BTP Task Center Mesh'
        },
        {
          level: 'COGNITIVE COPILOT',
          levelColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
          borderColor: 'border-cyan-500/40 hover:border-cyan-400',
          title: 'Instant HR & IT Policy Verification',
          desc: 'Conversational AI assistants provide accurate answers regarding travel expense policies, parental leave, and health insurance coverage.',
          source: 'Intelligence: Enterprise Policy Knowledge RAG'
        },
        {
          level: 'TOUCHLESS SELF-SERVICE',
          levelColor: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
          borderColor: 'border-sky-500/40 hover:border-sky-400',
          title: 'Autonomous Benefits & Payroll Management',
          desc: 'Employees update tax exemptions, retrieve salary slips, and manage direct deposit details with straight-through ERP ledger updates.',
          source: 'Execution: SAP SuccessFactors Employee Central API'
        }
      ]
    },
    talent: {
      id: 'talent',
      tabLabel: 'Talent & Mobility',
      title: 'Workforce Talent Marketplace & Sentiment Sentinel',
      processInfo: 'Dynamic Skill Ontologies • Longitudinal Engagement Radar',
      conformanceLevel: 'MAXIMIZED RETENTION • INTERNAL GIG VELOCITY',
      riskBadgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/50 shadow-emerald-500/10',
      recommendation: 'Implement dynamic gig matching across global business units to retain top technical talent and reduce costly external agency recruiting fees.',
      findings: [
        {
          level: 'DYNAMIC GIG MATCHING',
          levelColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
          borderColor: 'border-emerald-500/40 hover:border-emerald-400',
          title: 'Algorithmic Project & Mentorship Alignment',
          desc: 'Employees are automatically recommended for cross-departmental innovation sprints and mentorships matching their career goals.',
          source: 'Engine: Enterprise Skill Graph & Talent Mesh'
        },
        {
          level: 'BURNOUT RADAR',
          levelColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
          borderColor: 'border-cyan-500/40 hover:border-cyan-400',
          title: 'Continuous Team Health Telemetry',
          desc: 'Anonymous micro-pulse sentiments flag workload imbalances and morale shifts early, empowering managers to support at-risk teams.',
          source: 'Sentinel: Longitudinal Workforce Sentiment Pulse'
        },
        {
          level: 'CAREER PATHING',
          levelColor: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
          borderColor: 'border-sky-500/40 hover:border-sky-400',
          title: 'Transparent Executive Progression Maps',
          desc: 'Employees explore transparent competency roadmaps and personalized learning pathways required for subsequent leadership roles.',
          source: 'Academy: Continuous Executive Development Suite'
        }
      ]
    }
  };

  // Section 6: Phased Transformation Stages
  const transformationPhases = [
    {
      phase: 'STAGE ONE',
      title: 'Workplace Friction Audit & Journey Diagnostics',
      focus: 'Assessment of cross-departmental tool sprawl, onboarding friction, login fatigue, approval bottlenecks, and workforce satisfaction baselines.',
      deliverable: 'Employee Journey Blueprint & Workplace Friction Heatmap',
      icon: Search
    },
    {
      phase: 'STAGE TWO',
      title: 'Unified Identity Mesh & Portal Gateway Blueprint',
      focus: 'Formulation of canonical employee identity graphs, single-sign-on topologies, role-tailored dashboard taxonomies, and design systems.',
      deliverable: 'Workforce Identity Architecture & Digital Workspace Specifications',
      icon: Layers
    },
    {
      phase: 'STAGE THREE',
      title: 'Core HR Integration & Universal Task Deployment',
      focus: 'Deployment of bi-directional SAP SuccessFactors connectors, SAP BTP Task Center mobile inboxes, and conversational policy AI copilots.',
      deliverable: 'Live Production Digital Workspace & Universal Approval Inbox',
      icon: Zap
    },
    {
      phase: 'STAGE FOUR',
      title: 'Autonomous Workforce Intelligence & Retention Governance',
      focus: 'Operationalization of dynamic internal talent marketplaces, continuous sentiment pulse sentinels, and enterprise workforce governance.',
      deliverable: 'Enterprise-Wide Modern Employee Experience Ecosystem',
      icon: ShieldCheck
    }
  ];

  // Section 7: Executive FAQs
  const exStrategyFaqs = [
    {
      question: 'How does an Enterprise Employee Experience (EX) Strategy differ from basic HR intranet portals?',
      answer: 'Traditional intranets are passive content repositories for company announcements and static documents. A modern Enterprise Employee Experience Strategy establishes an active, decoupled digital workplace. It federates identity across all tools, delivers intelligent conversational AI copilots for instant policy resolution, and consolidates tasks from SAP, Workday, and ServiceNow into a single one-click approval inbox.'
    },
    {
      question: 'How does KNOOVIQ ensure seamless integration with SAP SuccessFactors and existing HRIS cores?',
      answer: 'We utilize SAP Clean Core architecture and standard OData APIs via SAP Integration Suite and SAP BTP. This approach preserves existing organizational structures, payroll rules, and role-based permissions while enabling modern, rapid frontend experiences across web and mobile without modifying sensitive core ERP database schemas.'
    },
    {
      question: 'How does automated onboarding orchestration accelerate Day-One employee productivity?',
      answer: 'By linking the HRIS directly to IT asset management, identity governance, and departmental orientation workflows, new hire credentials, security tokens, and pre-configured hardware are provisioned automatically prior to start date. On Day One, new team members simply log in and contribute immediately without spending weeks waiting for permissions.'
    },
    {
      question: 'What is the Universal Task Center, and how does it prevent approval bottlenecks?',
      answer: 'The Universal Task Center aggregates pending approvals from multiple disparate enterprise systems—including purchase requisitions from SAP, leave requests from SuccessFactors, and IT hardware sign-offs from ServiceNow—into a single consolidated inbox accessible via desktop or mobile push notifications. Managers can review and approve items with one click.'
    },
    {
      question: 'How does continuous sentiment telemetry respect employee privacy while preventing attrition?',
      answer: 'Our Continuous Workforce Sentiment Sentinel collects aggregated, anonymized feedback pulses and interaction velocity trends rather than intrusive individual surveillance. It analyzes organizational-level trends, highlighting burnout risks and workload imbalances so leadership can proactively support teams before attrition occurs.'
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
            src="/images/enterprise_employee_experience_modern_workplace_hero.jpg"
            alt="Enterprise Employee Experience & Modern Digital Workplace"
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
                <span>KNOOVIQ DIGITAL EXPERIENCE &bull; EMPLOYEE EXPERIENCE</span>
              </div>
            </div>

            {/* Static Headline with High-Contrast Typography */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.1] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
              Enterprise <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-cyan-400">
                Employee Experience &amp; Modern Workplace
              </span>
            </h1>

            {/* Subtitle with High Legibility */}
            <p className="text-base sm:text-lg text-slate-100 leading-relaxed font-normal max-w-2xl pt-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
              Unified workforce identity graphs, AI-driven conversational copilots, frictionless Day-One onboarding orchestration, and universal task centers connected directly to SAP SuccessFactors and S/4HANA core systems.
            </p>

            {/* Enterprise Assurance Indicators (With Interactive Hover Motion & No Buttons) */}
            <div className="pt-3 flex flex-wrap items-center gap-2.5 sm:gap-3">
              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-cyan-200 cursor-default shadow-xs"
              >
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Unified Workforce Graph</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-emerald-200 cursor-default shadow-xs"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero-Wait Cognitive Copilots</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-sky-200 cursor-default shadow-xs"
              >
                <Zap className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Universal Task Orchestration</span>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: EXECUTIVE PERSPECTIVE (Clean Light Corporate Theme - Large Legible Text)
          ========================================================================= */}
      <section id="workplace-evolution" className="py-24 bg-gradient-to-b from-white via-[#F8FBFE] to-white border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-300 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#0070C0]">
                <Activity className="w-4 h-4 text-[#0070C0]" />
                <span>EXECUTIVE WORKFORCE PERSPECTIVE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
                Architecting the <span className="text-[#0070C0]">Frictionless Digital Employee Experience</span>
              </h2>

              <div className="border-l-4 border-[#0070C0] border-y border-r border-slate-300 pl-5 py-3.5 bg-gradient-to-r from-sky-50/80 via-sky-50/30 to-transparent rounded-r-2xl">
                <p className="text-base sm:text-lg font-semibold text-slate-800 leading-relaxed italic">
                  &ldquo;A transformative employee experience removes operational friction, unifies fragmented software tools into a single role-based cockpit, and provides personnel with instant generative answers.&rdquo;
                </p>
              </div>

              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
                KNOOVIQ helps enterprise leadership transition away from fragmented intranets, manual approval chains, and disparate ticketing portals. We establish an integrated modern workplace architecture connecting front-end mobile and web experiences directly to SAP SuccessFactors, S/4HANA, and ServiceNow cores with deterministic audit compliance.
              </p>

              {/* 3 Executive Pillars (Clear, Large, Highly Legible Text) */}
              <div className="space-y-4 pt-2">
                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-950">Consolidated Digital Workspace Gateway</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Single-sign-on access unifying application launchers, company updates, and team directories into an intuitive role-based portal.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-950">Autonomous Conversational HR &amp; IT</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Generative AI copilots trained on corporate policies that provide instantaneous verified answers and execute routine self-service tasks.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <FolderSync className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-950">Universal Single-Click Task Approvals</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Consolidated approval queue federating sign-offs across SAP, Workday, and ServiceNow into one unified mobile inbox.
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
                title="Click image to advance to next workplace step"
              >
                <img
                  src="/images/employee_experience_console.jpg"
                  alt="Enterprise Employee Experience Management Cockpit"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-lg bg-slate-900/90 backdrop-blur-md border border-cyan-400/50 text-xs sm:text-sm font-mono font-bold text-cyan-300 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                  <span>WORKPLACE FOCUS: {journeySteps[activeJourneyStep].label.toUpperCase()}</span>
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
          SECTION 3: ENTERPRISE EX CHALLENGES (Clean Slate-50 - Highly Visible Text)
          ========================================================================= */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3.5">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#0070C0] uppercase">
              WORKFORCE FRICTION POINTS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950">
              Strategic Hurdles Facing Legacy Employee Touchpoints
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Why traditional fragmented HR portals, multiple login prompts, and scattered approval queues create severe productivity loss and employee turnover.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {exChallenges.map((item, idx) => {
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
              INTERCONNECTED WORKPLACE FLYWHEEL
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              The KNOOVIQ Unified Employee Experience Mesh
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Explore the eight mutually reinforcing layers of our modern employee experience foundation. Hover over any segment to inspect its architectural role.
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
                        WORKPLACE CORE
                      </span>
                      <div className="text-sm sm:text-base font-black text-white leading-tight">
                        Employee Experience
                      </div>
                      <div className="text-xs text-slate-300">
                        Modern Workplace
                      </div>
                    </div>
                  )}
                </div>

              </div>

              <div className="mt-5 flex items-center justify-center">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-400/50 text-xs font-mono font-bold text-cyan-300 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                  <span>ACTIVE WORKPLACE LAYER: {(hoveredWheelIndex !== null ? wheelSegments[hoveredWheelIndex].title : 'CONTINUOUS ROTATION').toUpperCase()}</span>
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
              Modern Workplace &amp; Employee Experience Architecture Matrix
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Examine the concrete architectural difference between legacy decoupled HR intranets and KNOOVIQ modern unified employee experience architectures.
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
              Full-Stack Workplace Blueprint
            </button>
            <button
              onClick={() => setActiveSandboxTab('telemetry')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all border ${activeSandboxTab === 'telemetry'
                ? 'bg-[#0070C0] text-white border-[#0070C0] shadow-md'
                : 'bg-slate-100 text-slate-700 border-slate-200 hover:text-slate-950 hover:bg-slate-200'
                }`}
            >
              Live Workforce Telemetry Chamber
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
                      <th className="py-4 px-6 font-bold w-1/4">Workplace Dimension</th>
                      <th className="py-4 px-6 font-bold w-1/3 text-rose-800 bg-rose-50/70">Legacy HR Stacks</th>
                      <th className="py-4 px-6 font-bold w-1/3 text-[#0070C0] bg-sky-50/70">KNOOVIQ Modern Workplace Mesh</th>
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

          {/* TAB 2: Full-Stack Workplace Blueprint Display */}
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
                    src="/images/enterprise_employee_experience_architecture.jpg"
                    alt="Enterprise Employee Experience Architecture Blueprint"
                    className="w-full h-full object-cover object-center rounded-2xl transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs sm:text-sm p-3.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-white">
                    <div className="flex items-center gap-2.5">
                      <Layers className="w-4 h-4 text-cyan-400" />
                      <span className="font-bold">Full Stack Employee Experience Reference</span>
                    </div>
                    <span className="font-mono text-xs text-cyan-300 font-bold uppercase">
                      SAP SUCCESSFACTORS CLEAN CORE
                    </span>
                  </div>
                </div>

                {/* Technical Layers Checklist */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div className="text-xs font-mono text-[#0070C0] uppercase font-bold mb-1">
                      LAYER ONE: WORKFORCE IDENTITY
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">Unified Human Capital Graph</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Synchronized worker records, role permissions, and access credentials unified across enterprise HR systems.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div className="text-xs font-mono text-[#0070C0] uppercase font-bold mb-1">
                      LAYER TWO: MODERN WORKPLACE GATEWAY
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">Responsive Omnichannel Portal</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Single-sign-on access integrated into Microsoft Teams, mobile apps, and browser desktops with sub-second speeds.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div className="text-xs font-mono text-[#0070C0] uppercase font-bold mb-1">
                      LAYER THREE: COGNITIVE COPILOTS
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">Enterprise Policy AI Assistants</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Generative AI trained on corporate policy manuals resolving inquiries and automating routine support tickets.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div className="text-xs font-mono text-[#0070C0] uppercase font-bold mb-1">
                      LAYER FOUR: UNIVERSAL TASK ORCHESTRATION
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">Unified Approval Inbox Engine</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Consolidated approval queues from SAP BTP, ServiceNow, and Workday with one-click mobile actions.
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* TAB 3: Live Workforce Telemetry Chamber */}
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
                  {(['onboarding', 'workspace', 'talent'] as const).map((tabKey) => (
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
                      src="/images/interactive_employee_journey_telemetry.jpg"
                      alt="Interactive Employee Journey Telemetry"
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
                      <span>Workforce Optimization Directive</span>
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
              A structured, risk-mitigated journey from fragmented employee tools to an enterprise-wide, governed modern workplace ecosystem.
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
              <span>EXECUTIVE CLARIFICATIONS &bull; EMPLOYEE EXPERIENCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#005A9C] via-[#0070C0] to-sky-500">Strategic Questions</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
              Addressing modern workplace paradigms, SAP SuccessFactors clean core integration, Day-One onboarding, and universal task centers for technology leaders.
            </p>
          </div>

          <div className="space-y-4">
            {exStrategyFaqs.map((faq, index) => {
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
              STRATEGIC WORKPLACE ADVISORY
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Ready to Transform Your Enterprise Employee Experience?
          </h2>

          <p className="text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed font-normal">
            Collaborate with senior workplace architects to eliminate tool sprawl, deploy conversational AI policy copilots, and orchestrate universal task approvals across your global workforce.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
            <button
              onClick={() => onOpenContact ? onOpenContact('Employee Experience Strategy Workshop') : undefined}
              className="px-9 py-4 rounded-xl font-bold text-sm sm:text-base text-slate-900 bg-white hover:bg-sky-50 shadow-xl transition-all flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              <span>Schedule Workplace Workshop</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#0070C0]" />
            </button>
            <Link
              to="/digital-experience/digital-applications"
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold uppercase tracking-wider backdrop-blur-md flex items-center gap-2 group transition-all w-full sm:w-auto justify-center"
            >
              <span>Explore Digital Applications</span>
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
              <span>Single Sign-On (SSO) Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-300" />
              <span>Zero-Wait Cognitive Copilots</span>
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
                  Employee Experience (EX) &bull; Modern Workplace Architecture
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
                src="/images/enterprise_employee_experience_modern_workplace_hero.jpg"
                alt="Enterprise Employee Experience & Modern Digital Workplace"
                className="max-w-full max-h-[76vh] object-contain rounded-xl shadow-2xl border border-white/10"
              />
            </div>

            {/* Bottom info bar */}
            <div className="w-full px-6 py-3 bg-slate-900/90 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span className="text-cyan-300 font-semibold">Modern Workplace Experience Radar</span>
              </div>
              <div className="flex items-center gap-4">
                <span>Unified Employee 360</span>
                <span>•</span>
                <span>Universal Task Center</span>
                <span>•</span>
                <span>Core SuccessFactors Integration</span>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default EmployeeExperiencePage;
