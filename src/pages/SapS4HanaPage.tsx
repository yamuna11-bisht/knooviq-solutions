import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Search, 
  Settings, 
  TrendingUp, 
  Lightbulb, 
  ShieldCheck, 
  BarChart3, 
  Database, 
  Maximize2, 
  Target, 
  Zap, 
  Sparkles, 
  Layers, 
  Globe, 
  RefreshCw, 
  Cpu,
  Waves,
  X,
  CheckCircle2,
  Cloud,
  Server,
  Workflow,
  Building2,
  ChevronDown,
  ChevronUp,
  FileText,
  Users,
  PhoneCall,
  Clock,
  Award,
  HelpCircle
} from 'lucide-react';
import { DigitalTransformationView } from '../components/transformation/DigitalTransformationView';
import { RiseWithSapView } from '../components/transformation/RiseWithSapView';


interface SapS4HanaPageProps {
  onOpenContact: (topic?: string) => void;
  initialTab?: 'overview' | 'grow' | 'rise' | 'architecture' | 'capabilities' | string;
}

type TransformationDomainKey = 'sap-s4hana' | 'erp' | 'digital' | 'rise';

interface CloudDeploymentOption {
  edition: string;
  badge: string;
  program: string;
  tenancy: string;
  targetAudience: string;
  customizationModel: string;
  upgradeCadence: string;
  deploymentTimeline: string;
  keyStrengths: string[];
  accentColor: string;
}

interface MigrationPathway {
  id: string;
  name: string;
  tag: string;
  summary: string;
  bestFor: string;
  deliverables: string[];
  icon: React.ReactNode;
}

interface TransformationContent {
  id: TransformationDomainKey;
  tabLabel: string;
  categoryTag: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage?: string;
  ctaText: string;
  
  overviewHeading: string;
  overviewParagraph1: string;
  overviewParagraph2: string;
  overviewPills: { label: string; icon: React.ReactNode }[];

  cloudDeploymentOptions?: CloudDeploymentOption[];
  migrationPathways?: MigrationPathway[];
  
  approachHeading: string;
  approachCards: {
    title: string;
    description: string;
    bullets: string[];
    iconColor: string;
    iconBg: string;
    icon: React.ReactNode;
  }[];
  
  journeyHeading: string;
  journeySubtitle: string;
  journeySteps: {
    num: string;
    title: string;
    description: string;
    highlight?: string;
    image?: string;
  }[];
  
  benefitsHeading: string;
  benefitsSubtitle: string;
  benefitsCards: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
  
  ctaBannerHeading: string;
  ctaBannerSubtext: string;
  ctaBannerButton: string;
}

const DEFAULT_JOURNEY_IMAGES = [
  'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'
];

const TRANSFORMATION_DATA: Record<TransformationDomainKey, TransformationContent> = {
  'sap-s4hana': {
    id: 'sap-s4hana',
    tabLabel: 'SAP S/4HANA Transformation',
    categoryTag: 'BUSINESS TRANSFORMATION',
    heroTitle: 'SAP S/4HANA Transformation',
    heroSubtitle: 'Transform your business with intelligent, scalable and future-ready SAP solutions.',
    heroImage: '/images/sap_s4hana_transformation_hero.png',
    ctaText: 'Talk to an Expert',
    
    overviewHeading: 'Transform Your Enterprise',
    overviewParagraph1: "SAP S/4HANA is more than just a system upgrade — it's a strategic transformation that helps you simplify processes, improve efficiency and unlock real-time insights. We help you move to SAP S/4HANA with minimal disruption and maximum value.",
    overviewParagraph2: 'Our Clean Core methodology decouples standard enterprise capabilities from bespoke innovation, ensuring your digital core remains pristine and continuously upgradeable while advanced capabilities thrive independently on the SAP Business Technology Platform.',
    overviewPills: [
      { label: 'Modern Platform', icon: <ShieldCheck className="w-4 h-4 text-[#00A3E0]" /> },
      { label: 'Real-time Insights', icon: <BarChart3 className="w-4 h-4 text-emerald-500" /> },
      { label: 'Future Ready', icon: <Zap className="w-4 h-4 text-amber-500" /> },
    ],
    
    approachHeading: 'Our S/4HANA Transformation Approach',
    approachCards: [
      {
        title: 'Assessment & Strategy',
        description: 'Analyze your current landscape, identify gaps and create a clear transformation roadmap.',
        bullets: ['System Readiness Audit', 'Custom Code Evaluation', 'Clean Core Architecture Blueprint', 'Target Operating Model'],
        iconColor: 'text-blue-500',
        iconBg: 'bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20',
        icon: <Search className="w-5 h-5 text-blue-500" />
      },
      {
        title: 'Migration & Implementation',
        description: 'Seamless migration to SAP S/4HANA with minimal disruption to your business.',
        bullets: ['Greenfield, Brownfield & Selective', 'Automated Data Cleansing', 'Near-Zero Downtime Cutover', 'Robust Quality Assurance'],
        iconColor: 'text-purple-500',
        iconBg: 'bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20',
        icon: <Settings className="w-5 h-5 text-purple-500" />
      },
      {
        title: 'Process Optimization',
        description: 'Redesign and streamline processes for better efficiency and performance.',
        bullets: ['SAP Signavio Process Mining', 'Standard Practice Harmonization', 'Cycle Time Elimination', 'Continuous Performance Tracking'],
        iconColor: 'text-teal-500',
        iconBg: 'bg-teal-50 dark:bg-teal-500/10 border border-teal-200 dark:border-teal-500/20',
        icon: <TrendingUp className="w-5 h-5 text-teal-500" />
      },
      {
        title: 'Continuous Innovation',
        description: 'Leverage new capabilities and innovations to stay ahead in the digital era.',
        bullets: ['SAP BTP Extension Framework', 'Embedded Enterprise AI', 'Automated Workflow Triggers', 'Ongoing Capability Enablement'],
        iconColor: 'text-amber-500',
        iconBg: 'bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20',
        icon: <Lightbulb className="w-5 h-5 text-amber-500" />
      }
    ],
    
    journeyHeading: 'The Transformation Journey',
    journeySubtitle: 'A structured approach to ensure a smooth and successful transition.',
    journeySteps: [
      {
        num: '01',
        title: 'Discover',
        description: 'Understand your goals, challenges and opportunities.',
        highlight: 'Scoping & Readiness Check'
      },
      {
        num: '02',
        title: 'Plan',
        description: 'Design the right strategy and solution architecture.',
        highlight: 'Target Blueprinting'
      },
      {
        num: '03',
        title: 'Transform',
        description: 'Execute migration, implementation and testing.',
        highlight: 'Cutover & Dual-Run Sync'
      },
      {
        num: '04',
        title: 'Optimize',
        description: 'Drive continuous improvement and innovation.',
        highlight: 'Hypercare & Value Realization'
      }
    ],
    
    benefitsHeading: 'Key Benefits',
    benefitsSubtitle: 'Achieve more with SAP S/4HANA.',
    benefitsCards: [
      {
        title: 'Faster Business Processes',
        description: 'Reduce cycle times and increase productivity across operations.',
        icon: <Zap className="w-5 h-5 text-[#00A3E0]" />
      },
      {
        title: 'Real-time Insights',
        description: 'Make data-driven decisions, faster, using live transactional data.',
        icon: <Database className="w-5 h-5 text-[#00A3E0]" />
      },
      {
        title: 'Improved Efficiency',
        description: 'Optimize resources and reduce operational overheads seamlessly.',
        icon: <Settings className="w-5 h-5 text-[#00A3E0]" />
      },
      {
        title: 'Scalable Architecture',
        description: 'Grow with a flexible and secure platform decoupled from core debt.',
        icon: <Maximize2 className="w-5 h-5 text-[#00A3E0]" />
      },
      {
        title: 'Better Decision-Making',
        description: 'Gain complete visibility across your enterprise through unified truth.',
        icon: <Target className="w-5 h-5 text-[#00A3E0]" />
      }
    ],
    
    ctaBannerHeading: 'Ready to transform your business with SAP S/4HANA?',
    ctaBannerSubtext: "Let's build a smarter, more agile and future-ready enterprise together.",
    ctaBannerButton: 'Contact Us'
  },
  
  'erp': {
    id: 'erp',
    tabLabel: 'ERP Transformation',
    categoryTag: 'SAP PLATINUM PARTNER ECOSYSTEM • RISE & GROW METHODOLOGY',
    heroTitle: 'ERP Transformation',
    heroSubtitle: 'Modernize to an agile, clean-core digital backbone across modern deployment editions with pre-built industry accelerators, zero core modifications, and One Piece Flow delivery.',
    heroImage: '/images/erp_transformation_hero.png',
    ctaText: 'Talk to an SAP Expert',
    
    overviewHeading: 'Modernize to an Autonomous, Clean-Core ERP Architecture',
    overviewParagraph1: 'Legacy on-premise ERP landscapes accumulate unsustainable technical debt, interface fragmentation, and high maintenance costs that restrict market adaptability. Our ERP Transformation practice equips forward-thinking enterprises with a pristine, standardized digital backbone designed for continuous agility and automated innovation.',
    overviewParagraph2: 'By decoupling bespoke extensions onto the SAP Business Technology Platform (BTP) and adopting pre-configured industry best practices, we ensure your digital core remains pristine, continuously upgradeable, and primed for autonomous AI workflows without disrupting day-to-day operations.',
    overviewPills: [
      { label: 'Clean Core Compliance', icon: <ShieldCheck className="w-4 h-4 text-[#00A3E0]" /> },
      { label: 'Fit-to-Standard Workflows', icon: <Target className="w-4 h-4 text-emerald-500" /> },
      { label: 'Automated Release Upgrades', icon: <RefreshCw className="w-4 h-4 text-amber-500" /> },
      { label: 'Embedded Joule & AI Agents', icon: <Sparkles className="w-4 h-4 text-cyan-400" /> },
    ],

    cloudDeploymentOptions: [
      {
        edition: 'SAP S/4HANA Cloud Public Edition',
        badge: 'Standardized SaaS',
        program: 'GROW with SAP',
        tenancy: 'Multi-Tenant Cloud Infrastructure',
        targetAudience: 'Mid-market leaders & rapid scale-ups prioritizing speed & standard processes',
        customizationModel: 'Side-by-side extensibility via SAP BTP (Zero core code modifications)',
        upgradeCadence: 'Continuous automated release upgrades managed directly by SAP',
        deploymentTimeline: 'Rapid Go-Live (4–8 Weeks accelerated Fit-to-Standard delivery)',
        keyStrengths: [
          'Ready-to-run pre-configured industry best practices',
          'Fixed-scope, transparent subscription economics',
          'Zero legacy technical debt & automatic maintenance',
          'Instant access to native SAP AI & analytics updates'
        ],
        accentColor: 'border-sky-400 bg-sky-500/10 text-sky-400'
      },
      {
        edition: 'SAP S/4HANA Cloud Private Edition',
        badge: 'Tailored Enterprise Cloud',
        program: 'RISE with SAP',
        tenancy: 'Dedicated Single-Tenant Hyperscaler (AWS, Azure, Google Cloud)',
        targetAudience: 'Global enterprises with complex legacy customizations & industry specificities',
        customizationModel: 'Full functional scope, custom code refactoring & clean-core governance',
        upgradeCadence: 'Controlled annual upgrade cycles aligned with enterprise roadmaps',
        deploymentTimeline: 'Phased Migration (Brownfield, Greenfield, or Selective Data Transition)',
        keyStrengths: [
          'Seamless conversion path from legacy SAP ECC environments',
          'Dedicated hyperscaler infrastructure with unified enterprise SLA',
          'Support for specialized partner add-ons and industry extensions',
          'Comprehensive business process intelligence via SAP Signavio'
        ],
        accentColor: 'border-cyan-400 bg-cyan-500/10 text-cyan-400'
      }
    ],

    migrationPathways: [
      {
        id: 'greenfield',
        name: 'Greenfield Implementation',
        tag: 'FRESH START',
        summary: 'Complete re-imagination of business processes using pre-configured SAP Best Practices, establishing a pristine, clean digital core with zero inherited baggage.',
        bestFor: 'Organizations looking to eliminate decades of custom code sprawl and adopt unified global standards.',
        deliverables: [
          'Fit-to-Standard Process Workshops',
          'Automated Data Cleansing & Extraction',
          'Clean Core BTP Extension Blueprint',
          'Accelerated Role-Based Enablement'
        ],
        icon: <Sparkles className="w-5 h-5 text-sky-400" />
      },
      {
        id: 'brownfield',
        name: 'Brownfield System Conversion',
        tag: 'CONTINUITY & SPEED',
        summary: 'Direct conversion of your existing SAP ECC 6.0 environment into SAP S/4HANA Cloud, preserving historical transaction records and proven business configurations.',
        bestFor: 'Enterprises prioritizing minimal disruption, rapid technical cutover, and protection of existing process investments.',
        deliverables: [
          'Readiness Check & Code Remediation',
          'Database Conversion to SAP HANA In-Memory',
          'Near-Zero Downtime Dual-Run Cutover',
          'Fiori UX Modernization'
        ],
        icon: <Server className="w-5 h-5 text-cyan-400" />
      },
      {
        id: 'selective',
        name: 'Selective Data Transition',
        tag: 'FLEXIBLE ARCHITECTURE',
        summary: 'A precision hybrid approach that migrates relevant business entities, harmonizes charts of accounts, and leaves behind outdated legacy clutter.',
        bestFor: 'Multi-entity enterprises undergoing divestitures, mergers, acquisitions, or multi-phase regional rollouts.',
        deliverables: [
          'Selective Entity Carve-Out Modeling',
          'Chart of Accounts Harmonization',
          'Phased Geographic Staging',
          'Cross-System Reconciliation'
        ],
        icon: <Workflow className="w-5 h-5 text-indigo-400" />
      }
    ],
    
    approachHeading: 'Our ERP Transformation Methodology',
    approachCards: [
      {
        title: 'Fit-to-Standard Discovery',
        description: 'Evaluate existing operational flows against standard SAP Best Practices to eliminate costly customization overhead.',
        bullets: ['SAP Best Practice Scoping', 'Process Gap Rationalization', 'Signavio Process Mining', 'Standard Operating Alignment'],
        iconColor: 'text-blue-500',
        iconBg: 'bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20',
        icon: <Search className="w-5 h-5 text-blue-500" />
      },
      {
        title: 'Clean Core & BTP Architecture',
        description: 'Isolate customizations onto SAP Business Technology Platform (BTP) using event meshes and modern API gateways.',
        bullets: ['Side-by-Side Microservices', 'API-Led Integration Mesh', 'Custom Code Retirement', 'Continuous Upgradability'],
        iconColor: 'text-purple-500',
        iconBg: 'bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20',
        icon: <Settings className="w-5 h-5 text-purple-500" />
      },
      {
        title: 'Embedded AI & Predictive Analytics',
        description: 'Deploy embedded machine learning models, Joule AI assistants, and real-time operational telemetry.',
        bullets: ['SAP Joule Contextual Guidance', 'Automated Matching & Reconciliation', 'Predictive Supply Chain Signals', 'Real-Time Financial Close'],
        iconColor: 'text-teal-500',
        iconBg: 'bg-teal-50 dark:bg-teal-500/10 border border-teal-200 dark:border-teal-500/20',
        icon: <TrendingUp className="w-5 h-5 text-teal-500" />
      },
      {
        title: 'Dual-Run Cutover & 24/7 AMS',
        description: 'Orchestrate parallel-run reconciliations, near-zero downtime cutovers, and SLA-backed global hypercare.',
        bullets: ['Automated Data Reconciliation', 'Weekend Technical Cutover', 'Global Hypercare Command Center', 'Continuous Optimization Services'],
        iconColor: 'text-amber-500',
        iconBg: 'bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20',
        icon: <Lightbulb className="w-5 h-5 text-amber-500" />
      }
    ],
    
    journeyHeading: 'The ERP Transformation Journey',
    journeySubtitle: 'A structured Fit-to-Standard methodology ensuring zero disruption and rapid business value.',
    journeySteps: [
      {
        num: '01',
        title: 'Readiness & Debt Audit',
        description: 'Comprehensive 4–6 week landscape evaluation, custom code audit, and cloud edition recommendation.',
        highlight: 'ECC Debt & Readiness Check',
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80'
      },
      {
        num: '02',
        title: 'Fit-to-Standard Blueprint',
        description: 'Interactive workshops mapping business requirements to standard cloud scopes and BTP extensions.',
        highlight: 'Standard Scope Mapping',
        image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80'
      },
      {
        num: '03',
        title: 'Execution & Cutover',
        description: 'Agile sprints, automated data migration, dual-run validation, and near-zero downtime cutover.',
        highlight: 'Dual-Run Sync & Cutover',
        image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80'
      },
      {
        num: '04',
        title: 'Hypercare & Scaling',
        description: '24/7 post-go-live stabilization, ongoing release governance, and continuous value realization.',
        highlight: 'Hypercare & Continuous AMS',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'
      }
    ],
    
    benefitsHeading: 'Enterprise Business Value',
    benefitsSubtitle: 'Tangible operational and financial outcomes delivered by ERP Transformation.',
    benefitsCards: [
      {
        title: 'Rapid Time-to-Value',
        description: 'Accelerate go-live schedules with pre-configured industry templates and standardized workflows.',
        icon: <Zap className="w-5 h-5 text-[#00A3E0]" />
      },
      {
        title: 'Zero Technical Debt',
        description: 'Maintain a pristine clean core that seamlessly adopts automated release updates without breaking customizations.',
        icon: <ShieldCheck className="w-5 h-5 text-[#00A3E0]" />
      },
      {
        title: 'Autonomous Financial Close',
        description: 'Automate bank reconciliations, accruals, and intercompany settlements with embedded intelligent agents.',
        icon: <Database className="w-5 h-5 text-[#00A3E0]" />
      },
      {
        title: 'Live Operational Telemetry',
        description: 'Achieve end-to-end transparency across supply chains, sales channels, and cost commitments.',
        icon: <Maximize2 className="w-5 h-5 text-[#00A3E0]" />
      },
      {
        title: 'Predictable Cloud Economics',
        description: 'Transform heavy capital expenditures into flexible, SLA-backed operational subscription models.',
        icon: <Target className="w-5 h-5 text-[#00A3E0]" />
      }
    ],
    
    ctaBannerHeading: 'Ready for Your ERP Transformation?',
    ctaBannerSubtext: "Schedule an architecture evaluation to determine the optimal modernization roadmap for your enterprise.",
    ctaBannerButton: 'Request ERP Transformation Audit'
  },
  
  'digital': {
    id: 'digital',
    tabLabel: 'Digital Transformation',
    categoryTag: 'ENTERPRISE DIGITAL TRANSFORMATION • BTP & AUTONOMOUS AI ECOSYSTEM',
    heroTitle: 'Enterprise Digital Transformation',
    heroSubtitle: 'Reimagine enterprise operations with autonomous AI agents, cloud-native SAP BTP architectures, and connected edge portals — transforming fragmented workflows into an agile, predictive digital enterprise.',
    heroImage: '/images/digital_transformation_connect.jpg',
    ctaText: 'Talk to a Digital Expert',
    
    overviewHeading: 'Power the Intelligent Enterprise',
    overviewParagraph1: 'Digital transformation is not merely about adopting technology — it requires reimagining customer experiences, empowering workforce productivity through automation, and building predictive business models.',
    overviewParagraph2: 'Knooviq combines deep SAP enterprise expertise with artificial intelligence, cloud integration, and process intelligence to elevate your business into an autonomous, proactive digital leader in your industry.',
    overviewPills: [
      { label: 'Autonomous Intelligence', icon: <Sparkles className="w-4 h-4 text-[#00A3E0]" /> },
      { label: 'Connected Ecosystem', icon: <Cpu className="w-4 h-4 text-emerald-500" /> },
      { label: 'Agile Innovation', icon: <TrendingUp className="w-4 h-4 text-amber-500" /> },
    ],
    
    approachHeading: 'Our Digital Transformation Approach',
    approachCards: [
      {
        title: 'Digital Capability Mapping',
        description: 'Identify highest-impact opportunities across customer and employee journeys.',
        bullets: ['Value Stream Identification', 'Friction Point Eradication', 'Capability Prioritization', 'Digital Roadmapping'],
        iconColor: 'text-blue-500',
        iconBg: 'bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20',
        icon: <Search className="w-5 h-5 text-blue-500" />
      },
      {
        title: 'Ecosystem Connectivity',
        description: 'Unify edge applications, partner networks, and smart devices with the core.',
        bullets: ['Real-Time Event Mesh', 'API Orchestration', 'Partner Portal Integration', 'Data Pipeline Unification'],
        iconColor: 'text-purple-500',
        iconBg: 'bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20',
        icon: <Settings className="w-5 h-5 text-purple-500" />
      },
      {
        title: 'Intelligent Automation',
        description: 'Embed artificial intelligence into standard decision workflows and approvals.',
        bullets: ['Cognitive Document Processing', 'Autonomous Reconciliation', 'Predictive Supply Signals', 'Conversational AI'],
        iconColor: 'text-teal-500',
        iconBg: 'bg-teal-50 dark:bg-teal-500/10 border border-teal-200 dark:border-teal-500/20',
        icon: <TrendingUp className="w-5 h-5 text-teal-500" />
      },
      {
        title: 'Continuous Capability Scaling',
        description: 'Establish agile governance to roll out new innovations across business units.',
        bullets: ['Innovation Sandboxing', 'Rapid Prototyping', 'Change Leadership', 'Continuous Value Realization'],
        iconColor: 'text-amber-500',
        iconBg: 'bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20',
        icon: <Lightbulb className="w-5 h-5 text-amber-500" />
      }
    ],
    
    journeyHeading: 'The Digital Transformation Journey',
    journeySubtitle: 'A structured approach to ensure a smooth and successful transition.',
    journeySteps: [
      {
        num: '01',
        title: 'Discover',
        description: 'Define digital ambition, high-value use cases, and operating goals.',
        highlight: 'Ambition & Visioning'
      },
      {
        num: '02',
        title: 'Plan',
        description: 'Architect integrated digital foundation connecting core and edge.',
        highlight: 'Digital Architecture'
      },
      {
        num: '03',
        title: 'Transform',
        description: 'Deploy AI agents, automated workflows, and connected portals.',
        highlight: 'Intelligent Rollout'
      },
      {
        num: '04',
        title: 'Optimize',
        description: 'Scale digital maturity across global operational footprints.',
        highlight: 'Autonomous Growth'
      }
    ],
    
    benefitsHeading: 'Key Benefits',
    benefitsSubtitle: 'Achieve more with Intelligent Digital Operations.',
    benefitsCards: [
      {
        title: 'Autonomous Workflows',
        description: 'Automate high-volume decision cycles with embedded enterprise AI.',
        icon: <Zap className="w-5 h-5 text-[#00A3E0]" />
      },
      {
        title: 'Predictive Market Agility',
        description: 'Anticipate demand shifts through connected live data streams.',
        icon: <Database className="w-5 h-5 text-[#00A3E0]" />
      },
      {
        title: 'Frictionless Experience',
        description: 'Deliver modern, unified digital touchpoints for customers and vendors.',
        icon: <Settings className="w-5 h-5 text-[#00A3E0]" />
      },
      {
        title: 'Democratized Intelligence',
        description: 'Provide self-service analytics and actionable insights to every role.',
        icon: <Maximize2 className="w-5 h-5 text-[#00A3E0]" />
      },
      {
        title: 'Accelerated Time-to-Market',
        description: 'Launch digital capabilities and service offerings with rapid turnaround.',
        icon: <Target className="w-5 h-5 text-[#00A3E0]" />
      }
    ],
    
    ctaBannerHeading: 'Ready to build your intelligent digital enterprise?',
    ctaBannerSubtext: "Let's innovate together with AI, connected data, and agile cloud platforms.",
    ctaBannerButton: 'Contact Us'
  },
  
  'rise': {
    id: 'rise',
    tabLabel: 'RISE with SAP',
    categoryTag: 'SAP PLATINUM PARTNER ECOSYSTEM • BUSINESS TRANSFORMATION AS A SERVICE',
    heroTitle: 'RISE with SAP Transformation',
    heroSubtitle: 'A comprehensive, single-contract journey to the intelligent cloud — combining SAP S/4HANA Cloud, enterprise hyperscaler infrastructure, business process intelligence, and 24/7 managed services under one unified SLA.',
    heroImage: '/images/rise_with_sap_hero.jpg',
    ctaText: 'Talk to a RISE Expert',
    
    overviewHeading: 'Accelerate Cloud Agility with RISE',
    overviewParagraph1: 'RISE with SAP brings together everything your organization needs to transform business operations: cloud ERP software, hyperscaler infrastructure, business process intelligence, and technical managed services under one unified contract.',
    overviewParagraph2: 'Knooviq serves as your strategic transformation partner, orchestrating clean-core architectural advisory, database migration, side-by-side BTP extensions, and 24x7 enterprise governance to maximize your return on cloud investment.',
    overviewPills: [
      { label: 'One Unified Contract', icon: <Globe className="w-4 h-4 text-[#00A3E0]" /> },
      { label: 'Enterprise Cloud SLA', icon: <ShieldCheck className="w-4 h-4 text-emerald-500" /> },
      { label: 'Clean Core BTP', icon: <Layers className="w-4 h-4 text-amber-500" /> },
    ],
    
    approachHeading: 'Our RISE with SAP Transformation Approach',
    approachCards: [
      {
        title: 'RISE Readiness & Scoping',
        description: 'Evaluate technical landscape, hyperscaler options, and licensing structures.',
        bullets: ['Cloud TCO Modeling', 'Hyperscaler Alignment', 'Custom Code Readiness', 'Target Operating Model'],
        iconColor: 'text-blue-500',
        iconBg: 'bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20',
        icon: <Search className="w-5 h-5 text-blue-500" />
      },
      {
        title: 'Clean Core Conversion',
        description: 'Execute technical migration with rigorous clean-core governance.',
        bullets: ['Database & System Cutover', 'Data Volume Management', 'Standard Best Practices', 'Secure Cloud Architecture'],
        iconColor: 'text-purple-500',
        iconBg: 'bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20',
        icon: <Settings className="w-5 h-5 text-purple-500" />
      },
      {
        title: 'BTP Side-by-Side Innovation',
        description: 'Decouple customizations into cloud services maintaining core purity.',
        bullets: ['BTP Extension Deployment', 'Event-Mesh Integration', 'Custom Code Extraction', 'Continuous Compliance'],
        iconColor: 'text-teal-500',
        iconBg: 'bg-teal-50 dark:bg-teal-500/10 border border-teal-200 dark:border-teal-500/20',
        icon: <TrendingUp className="w-5 h-5 text-teal-500" />
      },
      {
        title: 'Continuous Cloud Value',
        description: 'Manage 24x7 operations, process health monitoring, and release updates.',
        bullets: ['Signavio Process Mining', 'Quarterly Update Governance', 'Continuous Optimization', '24x7 Enterprise Support'],
        iconColor: 'text-amber-500',
        iconBg: 'bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20',
        icon: <Lightbulb className="w-5 h-5 text-amber-500" />
      }
    ],
    
    journeyHeading: 'The RISE Transformation Journey',
    journeySubtitle: 'A structured approach to ensure a smooth and successful transition.',
    journeySteps: [
      {
        num: '01',
        title: 'Discover',
        description: 'Align business strategy, hyperscaler selection, and cloud roadmap.',
        highlight: 'Strategy & Sizing'
      },
      {
        num: '02',
        title: 'Plan',
        description: 'Architect clean core conversion and cloud data strategy.',
        highlight: 'Architecture Blueprint'
      },
      {
        num: '03',
        title: 'Transform',
        description: 'Seamless migration to S/4HANA Cloud with near-zero outage.',
        highlight: 'Conversion & Cutover'
      },
      {
        num: '04',
        title: 'Optimize',
        description: 'Continuous process intelligence and BTP feature expansion.',
        highlight: 'Continuous Value'
      }
    ],
    
    benefitsHeading: 'Key Benefits',
    benefitsSubtitle: 'Achieve more with RISE with SAP.',
    benefitsCards: [
      {
        title: 'Simplified Cloud Governance',
        description: 'Single contract covering software, hyperscaler, and support SLA.',
        icon: <Zap className="w-5 h-5 text-[#00A3E0]" />
      },
      {
        title: 'Guaranteed Availability',
        description: 'Enterprise-grade uptime backed directly by SAP and cloud leaders.',
        icon: <Database className="w-5 h-5 text-[#00A3E0]" />
      },
      {
        title: 'Process Intelligence',
        description: 'Identify operational bottlenecks in real time with SAP Signavio.',
        icon: <Settings className="w-5 h-5 text-[#00A3E0]" />
      },
      {
        title: 'Pristine Clean Core',
        description: 'Eliminate technical debt and maintain continuous upgradeability.',
        icon: <Maximize2 className="w-5 h-5 text-[#00A3E0]" />
      },
      {
        title: 'Predictable Cloud Economics',
        description: 'Transform high capital expenditures into scalable operational costs.',
        icon: <Target className="w-5 h-5 text-[#00A3E0]" />
      }
    ],
    
    ctaBannerHeading: 'Ready to begin your RISE with SAP journey?',
    ctaBannerSubtext: "Let's architect your seamless transition to the cloud with Knooviq advisory.",
    ctaBannerButton: 'Contact Us'
  }
};


export const SapS4HanaPage: React.FC<SapS4HanaPageProps> = ({ 
  onOpenContact, 
  initialTab = 'sap-s4hana' 
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Resolve active domain from searchParams, initialTab, or default to sap-s4hana
  const getInitialDomain = (): TransformationDomainKey => {
    const tabParam = searchParams.get('tab');
    if (tabParam && ['sap-s4hana', 'erp', 'digital', 'rise'].includes(tabParam)) {
      return tabParam as TransformationDomainKey;
    }
    if (initialTab === 'rise') return 'rise';
    if (initialTab === 'erp') return 'erp';
    if (initialTab === 'digital') return 'digital';
    return 'sap-s4hana';
  };

  const [activeDomain, setActiveDomain] = useState<TransformationDomainKey>(getInitialDomain());
  const [isFullscreenImageOpen, setIsFullscreenImageOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam && ['sap-s4hana', 'erp', 'digital', 'rise'].includes(tabParam)) {
      setActiveDomain(tabParam as TransformationDomainKey);
    } else if (initialTab && ['sap-s4hana', 'erp', 'digital', 'rise'].includes(initialTab)) {
      setActiveDomain(initialTab as TransformationDomainKey);
    } else {
      setActiveDomain('sap-s4hana');
    }
  }, [searchParams, initialTab]);

  useEffect(() => {
    document.title = `${TRANSFORMATION_DATA[activeDomain].heroTitle} | Knooviq Enterprise Solutions`;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [activeDomain]);

  const handleDomainChange = (domain: TransformationDomainKey) => {
    setActiveDomain(domain);
    if (domain === 'sap-s4hana') {
      setSearchParams({});
    } else {
      setSearchParams({ tab: domain });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentData = TRANSFORMATION_DATA[activeDomain];

  return (
    <div className="min-h-screen pt-16 sm:pt-20 bg-[#F8FAFC] dark:bg-[#070E1C] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      {/* =========================================================================
          1. STICKY TOP SUB-NAVIGATION BAR (Replaces sidebar completely with full-width tabs)
          ========================================================================= */}
      <div className="sticky top-16 sm:top-20 z-40 bg-white/95 dark:bg-[#070E1C]/95 backdrop-blur-md border-b border-slate-200 dark:border-white/10 shadow-xs transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between overflow-x-auto no-scrollbar gap-4">
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#00A3E0] animate-pulse" />
            <span className="text-xs font-black uppercase tracking-wider text-[#0A1931] dark:text-[#00A3E0] font-mono">
              BUSINESS TRANSFORMATION
            </span>
          </div>
          
          <div className="flex items-center gap-1.5 sm:gap-2 w-full sm:w-auto overflow-x-auto no-scrollbar">
            {(Object.keys(TRANSFORMATION_DATA) as TransformationDomainKey[]).map((key) => {
              const item = TRANSFORMATION_DATA[key];
              const isActive = activeDomain === key;
              
              return (
                <button
                  key={key}
                  onClick={() => handleDomainChange(key)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-[#00A3E0] text-white shadow-md shadow-[#00A3E0]/25'
                      : 'text-slate-700 dark:text-slate-300 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-slate-100 dark:hover:bg-white/5'
                  }`}
                >
                  {item.tabLabel}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* =========================================================================
          2. FULL-SCREEN HERO SECTION (Full Bleed Background with Deep Enterprise Atmosphere)
          ========================================================================= */}
      <section className="relative w-full h-[540px] sm:h-[560px] lg:h-[580px] flex items-center overflow-hidden bg-[#040B17] text-white border-b border-slate-200/20 dark:border-white/10 shadow-xl py-6 sm:py-8 lg:py-8">
        
        {/* Full-Bleed Enterprise Background Image (Covers entire screen) */}
        <div className="absolute inset-0 z-0">
          <img 
            src={currentData.heroImage || '/images/sap_s4hana_transformation_hero.png'} 
            alt="SAP S/4HANA Enterprise Digital Transformation Ecosystem" 
            className="w-full h-full object-cover object-center lg:object-[70%_center] transition-transform duration-1000 ease-out"
          />
          {/* Multi-layered cinematic gradient scrim: ensures maximum readability of text on the left while revealing the 3D SAP core and circuit traces */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#040B17]/90 via-[#061021]/70 sm:via-[#061021]/50 to-[#040B17]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040B17]/80 via-transparent to-[#040B17]/40" />
          
          {/* Subtle high-tech radial cyber mesh overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#00A3E0_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl space-y-3 sm:space-y-3.5">
            
            {/* Category Dash & Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-[11px] font-mono font-bold uppercase tracking-widest text-cyan-300 shadow-xl">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>{currentData.categoryTag}</span>
            </div>

            {/* Large Hero Title */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.12] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              {currentData.heroTitle}
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm lg:text-base font-medium text-slate-100 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] max-w-2xl">
              {currentData.heroSubtitle}
            </p>

            {/* Key Capability Badges */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/35 backdrop-blur-md border border-white/15 text-xs font-medium text-slate-200 shadow-md">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>Clean Core Architecture</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/35 backdrop-blur-md border border-white/15 text-xs font-medium text-slate-200 shadow-md">
                <Globe className="w-3.5 h-3.5 text-emerald-400" />
                <span>Connected Industry Ecosystem</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/35 backdrop-blur-md border border-white/15 text-xs font-medium text-slate-200 shadow-md">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Zero Disruption Rollout</span>
              </span>
            </div>



          </div>
        </div>

        {/* Full-Screen Lightbox Modal */}
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
                src={currentData.heroImage || '/images/sap_s4hana_transformation_hero.jpg'} 
                alt="SAP S/4HANA Transformation Ecosystem Full Screen" 
                className="w-full h-auto max-h-[90vh] object-contain rounded-2xl shadow-2xl border border-white/20"
              />
            </div>
          </div>
        )}
      </section>

      {/* =========================================================================
          3. FULL WIDTH MAIN CONTENT SECTIONS (Spacious & Clean, Zero Cramping)
          ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-20">
        
        {activeDomain === 'erp' ? (
          /* =========================================================================
             SAVIC-ALIGNED ENTERPRISE FORMAT FOR ERP TRANSFORMATION
             ========================================================================= */
          <>

            {/* 2. THE ENTERPRISE ADVANTAGE (4 Pillars) */}
            <section className="space-y-6">
              <div>
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="h-0.5 w-6 bg-amber-400 rounded-full" />
                  <span className="h-0.5 w-3 bg-[#00A3E0] rounded-full" />
                </div>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-[#00A3E0] bg-[#00A3E0]/10 border border-[#00A3E0]/20 mb-2">
                      <Award className="w-3.5 h-3.5 text-[#00A3E0]" />
                      <span>ENTERPRISE ADVISORY & GOVERNANCE</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1931] dark:text-white tracking-tight">
                      The Enterprise Advantage: Discipline, Scale & Speed
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md">
                    Measurable business outcomes, governance rigor, and certified SAP Platinum-level expertise delivered at speed.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white dark:bg-[#0B1528] rounded-2xl border border-slate-200/80 dark:border-white/10 p-7 shadow-sm hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-500/10 text-[#00A3E0] flex items-center justify-center mb-5">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-extrabold text-[#0A1931] dark:text-white mb-2">
                    Proven SAP Domain Depth
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Deep vertical experience across Manufacturing, Retail, Chemicals, Life Sciences, and Consumer Goods refined across enterprise transformations.
                  </p>
                </div>

                <div className="bg-white dark:bg-[#0B1528] rounded-2xl border border-slate-200/80 dark:border-white/10 p-7 shadow-sm hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-5">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-extrabold text-[#0A1931] dark:text-white mb-2">
                    Global Delivery Model
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Seamless onsite leadership paired with dedicated offshore center delivery ensuring cost efficiency, speed, and 24/7 global execution.
                  </p>
                </div>

                <div className="bg-white dark:bg-[#0B1528] rounded-2xl border border-slate-200/80 dark:border-white/10 p-7 shadow-sm hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-500/10 text-amber-500 flex items-center justify-center mb-5">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-extrabold text-[#0A1931] dark:text-white mb-2">
                    Accelerated Implementations
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Pre-configured industry accelerators and the One Piece Flow methodology compress deployment cycles by up to 40% without compromising quality.
                  </p>
                </div>

                <div className="bg-white dark:bg-[#0B1528] rounded-2xl border border-slate-200/80 dark:border-white/10 p-7 shadow-sm hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-500/10 text-purple-500 flex items-center justify-center mb-5">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-extrabold text-[#0A1931] dark:text-white mb-2">
                    Governance & Quality Control
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Structured PMO, risk management protocols, clean core compliance checks, and senior principal oversight on every engagement.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. THE SIGNATURE SAVIC SPLIT: "WHAT WE DELIVER" vs "KEY OUTCOMES" */}
            <section className="space-y-8">
              <div>
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="h-0.5 w-6 bg-amber-400 rounded-full" />
                  <span className="h-0.5 w-3 bg-[#00A3E0] rounded-full" />
                </div>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-sky-600 dark:text-sky-400 bg-sky-500/10 border border-sky-500/20 mb-2">
                      <Layers className="w-3.5 h-3.5 text-sky-500" />
                      <span>CORE SERVICE ARCHITECTURE</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1931] dark:text-white tracking-tight">
                      What We Deliver vs. Key Business Outcomes
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md">
                    From strategic cloud advisory to post-go-live managed services — aligning engineering rigor with measurable business ROI.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Left Column: What We Deliver */}
                <div className="bg-white dark:bg-[#0B1528] rounded-3xl border border-slate-200/80 dark:border-white/10 p-8 sm:p-10 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#00A3E0]/10 text-[#00A3E0] border border-[#00A3E0]/20">
                        CAPABILITY PORTFOLIO
                      </span>
                      <Workflow className="w-5 h-5 text-[#00A3E0]" />
                    </div>

                    <h3 className="text-2xl font-black text-[#0A1931] dark:text-white mb-2">
                      What We Deliver
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                      Complete lifecycle capabilities covering every technical and functional phase of your ERP transformation:
                    </p>

                    <div className="space-y-4">
                      {[
                        { title: 'Hyperscaler Multi-Cloud Infrastructure', desc: 'Deploying SAP on AWS, Microsoft Azure, or GCP with high availability, automated backup, and strict SLA commitments.' },
                        { title: 'Public & Private Cloud S/4HANA Deployments', desc: 'Accelerated implementation of GROW with SAP (Public SaaS) and enterprise-tailored RISE with SAP (Private Cloud).' },
                        { title: 'Greenfield, Brownfield & Selective Migration', desc: 'Tailored transition roadmaps ensuring clean data cutover, code remediation, and zero historical data loss.' },
                        { title: 'Clean Core Strategy & SAP BTP Extensions', desc: 'Decoupling custom business logic to SAP Business Technology Platform to ensure zero modifications to standard code.' },
                        { title: 'Full Cross-Functional Module Localization', desc: 'Comprehensive module configuration across FI, CO, MM, SD, PP, WM, QM, PM with statutory tax and e-invoicing compliance.' },
                        { title: 'Process Mining & Signavio Intelligence', desc: 'Automated operational process discovery, bottleneck diagnostics, and continuous workflow optimization.' },
                        { title: 'Custom ABAP Code Remediation', desc: 'Comprehensive code audit, custom code retirement, and modernization into cloud-ready RESTful APIs.' }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/50 dark:border-white/5">
                          <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                          <div>
                            <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">{item.title}</h4>
                            <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Key Outcomes */}
                <div className="bg-white dark:bg-[#0B1528] rounded-3xl border border-slate-200/80 dark:border-white/10 p-8 sm:p-10 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                        MEASURABLE IMPACT
                      </span>
                      <Target className="w-5 h-5 text-emerald-500" />
                    </div>

                    <h3 className="text-2xl font-black text-[#0A1931] dark:text-white mb-2">
                      Key Business Outcomes
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                      Tangible operational outcomes delivered with speed, predictability, and sustained return on investment:
                    </p>

                    <div className="space-y-4">
                      {[
                        { title: 'Up to 40% Faster Go-Live Timelines', desc: 'Accelerated implementation cycles driven by pre-configured industry accelerators and the SAVIC One Piece Flow methodology.' },
                        { title: 'Predictable, Optimized Cloud TCO', desc: 'Single transparent subscription economics eliminating surprise infrastructure costs and expensive hardware refreshes.' },
                        { title: 'Continuous Automated Innovation', desc: 'Direct, zero-disruption access to bi-annual SAP innovations without protracted regression testing cycles.' },
                        { title: 'Sub-Second Real-Time Analytics', desc: 'Instant enterprise-wide operational and financial insights powered by in-memory SAP HANA and embedded Joule AI.' },
                        { title: '100% Clean Core Agility', desc: 'Zero technical debt accumulation, ensuring the core remains pristine and ready for ongoing cloud innovations.' },
                        { title: 'Near-Zero Downtime Business Continuity', desc: 'Rigorous parallel-run reconciliations and high-fidelity cutover dry runs protecting critical factory and commercial operations.' },
                        { title: 'Comprehensive Regulatory Compliance', desc: 'Audit-ready segregation of duties (SOD), localized statutory ledgers, and automated e-way bill / GST integrations.' }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/50 dark:border-white/5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <div>
                            <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">{item.title}</h4>
                            <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* 4. CLOUD DEPLOYMENT TOPOLOGY: PUBLIC (GROW) vs PRIVATE (RISE) */}
            {currentData.cloudDeploymentOptions && currentData.cloudDeploymentOptions.length > 0 && (
              <section className="space-y-8">
                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="h-0.5 w-6 bg-amber-400 rounded-full" />
                    <span className="h-0.5 w-3 bg-[#00A3E0] rounded-full" />
                  </div>
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-[#00A3E0] bg-[#00A3E0]/10 border border-[#00A3E0]/20 mb-2">
                        <Cloud className="w-3.5 h-3.5 text-[#00A3E0]" />
                        <span>DEPLOYMENT TOPOLOGY</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1931] dark:text-white tracking-tight">
                        ERP Deployment Architecture: Public vs. Private Edition
                      </h2>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md">
                      Evaluating multi-tenant velocity against dedicated single-tenant hyperscaler control to match your compliance and architectural needs.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {currentData.cloudDeploymentOptions.map((opt, idx) => (
                    <div
                      key={idx}
                      className="relative bg-white dark:bg-[#0B1528] rounded-3xl border border-slate-200/80 dark:border-white/10 p-8 sm:p-9 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                    >
                      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#00A3E0]/10 to-transparent rounded-full blur-3xl pointer-events-none group-hover:from-[#00A3E0]/20 transition-all duration-500" />

                      <div>
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#0A1931] text-white dark:bg-[#0070C0] dark:text-white shadow-xs">
                            <span>{opt.program}</span>
                          </div>
                          <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${opt.accentColor}`}>
                            {opt.badge}
                          </span>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-black text-[#0A1931] dark:text-white mb-2 leading-tight">
                          {opt.edition}
                        </h3>

                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                          {opt.targetAudience}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/60 dark:border-white/5 text-xs">
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Infrastructure Tenancy</span>
                            <span className="font-semibold text-slate-800 dark:text-slate-200">{opt.tenancy}</span>
                          </div>
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Upgrade Cadence</span>
                            <span className="font-semibold text-slate-800 dark:text-slate-200">{opt.upgradeCadence}</span>
                          </div>
                          <div className="sm:col-span-2 pt-2 border-t border-slate-200/50 dark:border-white/5">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Extensibility Framework</span>
                            <span className="font-medium text-slate-700 dark:text-slate-300">{opt.customizationModel}</span>
                          </div>
                        </div>

                        <div className="space-y-3 mb-6">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-[#0A1931] dark:text-slate-200">
                            Strategic Architectural Advantages
                          </h4>
                          <ul className="space-y-2.5">
                            {opt.keyStrengths.map((strength, sIdx) => (
                              <li key={sIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                <span>{strength}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-xs">
                        <span className="text-slate-500 dark:text-slate-400 font-medium">Implementation Profile:</span>
                        <span className="font-bold text-[#00A3E0]">{opt.deploymentTimeline}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 5. STRATEGIC MIGRATION PATHWAYS (Greenfield, Brownfield, Selective) */}
            {currentData.migrationPathways && currentData.migrationPathways.length > 0 && (
              <section className="space-y-8">
                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="h-0.5 w-6 bg-amber-400 rounded-full" />
                    <span className="h-0.5 w-3 bg-[#00A3E0] rounded-full" />
                  </div>
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 mb-2">
                        <Workflow className="w-3.5 h-3.5 text-emerald-500" />
                        <span>TRANSITION METHODOLOGIES</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1931] dark:text-white tracking-tight">
                        Strategic SAP S/4HANA Migration Pathways
                      </h2>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md">
                      Tailoring your technical journey between complete clean-slate innovation, legacy investment protection, or selective modular carve-outs.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {currentData.migrationPathways.map((pathway, idx) => (
                    <div
                      key={idx}
                      className="bg-white dark:bg-[#0B1528] rounded-2xl border border-slate-200/80 dark:border-white/10 p-7 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300">
                            {pathway.tag}
                          </span>
                          <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 flex items-center justify-center">
                            {pathway.icon}
                          </div>
                        </div>

                        <h3 className="text-lg font-black text-[#0A1931] dark:text-white mb-2 leading-snug">
                          {pathway.name}
                        </h3>

                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                          {pathway.summary}
                        </p>

                        <div className="p-3.5 rounded-xl bg-sky-50/70 dark:bg-sky-500/5 border border-sky-200/60 dark:border-sky-500/10 mb-5">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 block mb-1">
                            Ideal Fitment:
                          </span>
                          <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                            {pathway.bestFor}
                          </p>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-slate-100 dark:border-white/10">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2.5">
                          Key Deliverables
                        </span>
                        <div className="space-y-2">
                          {pathway.deliverables.map((item, dIdx) => (
                            <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0] shrink-0" />
                              <span className="truncate font-medium">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 6. THE GLOBAL HYBRID DELIVERY MODEL (The 3 Pillars) */}
            <section className="space-y-8">
              <div>
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="h-0.5 w-6 bg-amber-400 rounded-full" />
                  <span className="h-0.5 w-3 bg-[#00A3E0] rounded-full" />
                </div>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-[#00A3E0] bg-[#00A3E0]/10 border border-[#00A3E0]/20 mb-2">
                      <Globe className="w-3.5 h-3.5 text-[#00A3E0]" />
                      <span>DELIVERY ORCHESTRATION</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1931] dark:text-white tracking-tight">
                      The Global Hybrid Delivery Model
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md">
                    Onsite + offshore delivery model ensuring cost efficiency, speed, governance, and 24/7 business continuity.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-[#0B1528] rounded-2xl border border-slate-200/80 dark:border-white/10 p-7 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-500/10 text-[#00A3E0] flex items-center justify-center mb-5">
                      <Users className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300">
                      STRATEGIC GOVERNANCE
                    </span>
                    <h3 className="text-xl font-black text-[#0A1931] dark:text-white mt-3 mb-2">
                      Onsite Engagement
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      Business analysts, solution architects, and project managers embedded directly at client headquarters for executive steering, change enablement, and organizational alignment.
                    </p>
                  </div>
                  <div className="pt-4 mt-6 border-t border-slate-100 dark:border-white/10 flex flex-wrap gap-2">
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-sky-50 dark:bg-sky-500/10 text-sky-700 dark:text-sky-300">Program PMO</span>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-sky-50 dark:bg-sky-500/10 text-sky-700 dark:text-sky-300">Change Management</span>
                  </div>
                </div>

                <div className="bg-white dark:bg-[#0B1528] rounded-2xl border border-slate-200/80 dark:border-white/10 p-7 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-5">
                      <Cpu className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300">
                      ENGINEERING SCALE
                    </span>
                    <h3 className="text-xl font-black text-[#0A1931] dark:text-white mt-3 mb-2">
                      Offshore Delivery Centers
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      Cost-effective centers of excellence in India executing rapid configuration, ABAP Cloud refactoring, unit testing, automated cutovers, and interface integrations.
                    </p>
                  </div>
                  <div className="pt-4 mt-6 border-t border-slate-100 dark:border-white/10 flex flex-wrap gap-2">
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300">Rapid Configuration</span>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300">ABAP Cloud Labs</span>
                  </div>
                </div>

                <div className="bg-white dark:bg-[#0B1528] rounded-2xl border border-slate-200/80 dark:border-white/10 p-7 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-500/10 text-amber-500 flex items-center justify-center mb-5">
                      <Clock className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300">
                      POST-GO-LIVE HYPERCARE
                    </span>
                    <h3 className="text-xl font-black text-[#0A1931] dark:text-white mt-3 mb-2">
                      24/7 MAXCare Managed Services
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      Round-the-clock application management, Basis & hyperscaler administration, proactive telemetry, and continuous improvement backed by binding enterprise SLAs.
                    </p>
                  </div>
                  <div className="pt-4 mt-6 border-t border-slate-100 dark:border-white/10 flex flex-wrap gap-2">
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-300">SLA-Driven AMS</span>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-300">Continuous Support</span>
                  </div>
                </div>
              </div>
            </section>

            {/* 7. SAVIC ONE PIECE FLOW METHODOLOGY (5-Stage Visual Workflow) */}
            <section className="bg-white dark:bg-[#0B1528] rounded-3xl border border-slate-200/80 dark:border-white/10 p-8 sm:p-12 shadow-sm space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-cyan-500 bg-cyan-500/10 border border-cyan-500/20 mb-2">
                  <Workflow className="w-3.5 h-3.5" />
                  <span>PROPRIETARY DELIVERY METHODOLOGY</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1931] dark:text-white tracking-tight">
                  SAVIC One Piece Flow Framework
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl mt-1">
                  A transformation-led delivery framework engineered to compress time-to-value, eliminate operational disruption, and enforce clean core standards.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {[
                  { step: '01', title: 'Readiness Diagnostic', desc: 'SAP Readiness Check, Signavio process mining, TCO analysis, and landscape simplification.' },
                  { step: '02', title: 'Fit-to-Standard', desc: 'Scoping standard SAP Best Practices and defining side-by-side BTP extension boundaries.' },
                  { step: '03', title: 'Code Remediation', desc: 'ABAP Cloud refactoring, automated data cleansing, and API integration development.' },
                  { step: '04', title: 'Dual-Run Cutover', desc: 'Parallel-run reconciliation, high-fidelity rehearsal, and near-zero downtime cutover.' },
                  { step: '05', title: 'MAXCare Evolution', desc: '24/7 SLA-backed hypercare, continuous feature activation, and embedded AI enablement.' }
                ].map((phase, idx) => (
                  <div key={idx} className="relative p-5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/60 dark:border-white/5 flex flex-col justify-between">
                    <div>
                      <span className="text-2xl font-black text-[#00A3E0]/40 dark:text-cyan-400/30 block mb-2 font-mono">
                        {phase.step}
                      </span>
                      <h3 className="text-sm font-extrabold text-[#0A1931] dark:text-white mb-1.5 leading-snug">
                        {phase.title}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {phase.desc}
                      </p>
                    </div>
                    <div className="pt-3 mt-4 border-t border-slate-200/50 dark:border-white/5 flex items-center justify-between text-[10px] font-mono font-semibold text-slate-400">
                      <span>PHASE {phase.step}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 8. REAL ENTERPRISE CASE STUDIES (Savic Benchmark) */}
            <section className="space-y-8">
              <div>
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="h-0.5 w-6 bg-amber-400 rounded-full" />
                  <span className="h-0.5 w-3 bg-[#00A3E0] rounded-full" />
                </div>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-amber-500 bg-amber-500/10 border border-amber-500/20 mb-2">
                      <Award className="w-3.5 h-3.5" />
                      <span>PROVEN CLIENT RESULTS</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1931] dark:text-white tracking-tight">
                      Real Results from Real Enterprises
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md">
                    Verified transformation milestones achieved across diversified industries and geographies.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-[#0B1528] rounded-2xl border border-slate-200/80 dark:border-white/10 p-7 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-sky-50 dark:bg-sky-500/10 text-[#00A3E0]">
                      REAL ESTATE & INFRASTRUCTURE
                    </span>
                    <h3 className="text-xl font-black text-[#0A1931] dark:text-white mt-3 mb-1">
                      Adarsh Developers
                    </h3>
                    <p className="text-xs font-semibold text-[#00A3E0] mb-3">
                      S/4HANA Private Cloud Implementation
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      Rapid greenfield deployment uniting commercial leasing, project budgeting, and contracting under a unified real-time ledger.
                    </p>
                    <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200/60 dark:border-emerald-500/20 mb-4">
                      <span className="text-[10px] uppercase font-bold text-emerald-600 dark:text-emerald-400 block">KEY MILESTONE</span>
                      <span className="text-base font-black text-emerald-700 dark:text-emerald-300">Go-Live in Record 23 Days</span>
                    </div>
                  </div>
                  <button
                    onClick={() => onOpenContact('Case Study - Adarsh Developers')}
                    className="text-xs font-bold text-[#00A3E0] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Read Transformation Story</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="bg-white dark:bg-[#0B1528] rounded-2xl border border-slate-200/80 dark:border-white/10 p-7 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400">
                      FOOD & BEVERAGES / DISTRIBUTION
                    </span>
                    <h3 className="text-xl font-black text-[#0A1931] dark:text-white mt-3 mb-1">
                      Anjani Beverages
                    </h3>
                    <p className="text-xs font-semibold text-[#00A3E0] mb-3">
                      RISE with SAP Cloud Transformation
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      End-to-end multi-currency, multi-entity migration connecting manufacturing plants, warehousing hubs, and secondary distribution fleets.
                    </p>
                    <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-500/10 border border-purple-200/60 dark:border-purple-500/20 mb-4">
                      <span className="text-[10px] uppercase font-bold text-purple-600 dark:text-purple-400 block">KEY MILESTONE</span>
                      <span className="text-base font-black text-purple-700 dark:text-purple-300">Multi-Country Rollout Across Africa</span>
                    </div>
                  </div>
                  <button
                    onClick={() => onOpenContact('Case Study - Anjani Beverages')}
                    className="text-xs font-bold text-[#00A3E0] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Read Transformation Story</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="bg-white dark:bg-[#0B1528] rounded-2xl border border-slate-200/80 dark:border-white/10 p-7 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-teal-50 dark:bg-teal-500/10 text-teal-600 dark:text-teal-400">
                      PRECISION MANUFACTURING
                    </span>
                    <h3 className="text-xl font-black text-[#0A1931] dark:text-white mt-3 mb-1">
                      Global Industrial Manufacturer
                    </h3>
                    <p className="text-xs font-semibold text-[#00A3E0] mb-3">
                      S/4HANA Greenfield Clean Core
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      Replacement of heavily customized legacy ERP with Clean Core S/4HANA Cloud, automated shop-floor MES integration, and MRP Live.
                    </p>
                    <div className="p-3 rounded-xl bg-teal-50 dark:bg-teal-500/10 border border-teal-200/60 dark:border-teal-500/20 mb-4">
                      <span className="text-[10px] uppercase font-bold text-teal-600 dark:text-teal-400 block">KEY MILESTONE</span>
                      <span className="text-base font-black text-teal-700 dark:text-teal-300">40% Reduction in Month-End Close</span>
                    </div>
                  </div>
                  <button
                    onClick={() => onOpenContact('Case Study - Global Manufacturer')}
                    className="text-xs font-bold text-[#00A3E0] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Read Transformation Story</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </section>

            {/* 9. START YOUR SAP TRANSFORMATION TODAY (Savic's 4 Action Boxes) */}
            <section className="bg-gradient-to-br from-[#061224] via-[#091D3A] to-[#040D1A] rounded-3xl border border-cyan-500/20 p-8 sm:p-12 lg:p-14 shadow-2xl text-white space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 mb-2">
                  <Target className="w-3.5 h-3.5 text-cyan-400" />
                  <span>START YOUR JOURNEY</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                  Start Your ERP Transformation Today
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mt-1">
                  Choose the right starting point for your enterprise modernization roadmap.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col justify-between">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">Talk to an Expert</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Speak directly with an SAP enterprise architect to evaluate your business landscape.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col justify-between">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">Readiness Assessment</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Assess your ECC custom code, database sizing, and compatibility for modern ERP architectures.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col justify-between">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">Discovery Workshop</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    1-day executive working session to map business requirements to standard Best Practices.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col justify-between">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">Capabilities Brief</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Download our comprehensive ERP transformation capabilities portfolio and service blueprints.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex justify-center">
                <button
                  onClick={() => onOpenContact('ERP Transformation - Start Journey')}
                  className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-[#040D1A] font-extrabold px-8 py-3.5 text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg shadow-cyan-500/25 cursor-pointer"
                >
                  <span>Start Your Transformation Today</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </section>

            {/* 10. FREQUENTLY ASKED QUESTIONS (Savic FAQ Accordion) */}
            <section className="bg-white dark:bg-[#0B1528] rounded-3xl border border-slate-200/80 dark:border-white/10 p-8 sm:p-12 shadow-sm space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-[#00A3E0] bg-[#00A3E0]/10 border border-[#00A3E0]/20 mb-2">
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>ENTERPRISE ADVISORY FAQ</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1931] dark:text-white tracking-tight">
                  Frequently Asked Questions
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl mt-1">
                  Key architectural and operational questions regarding ERP Transformation, RISE, and GROW implementations.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    q: 'What is the primary difference between RISE with SAP and GROW with SAP?',
                    a: 'GROW with SAP is tailored for high-growth mid-market organizations deploying SAP S/4HANA Cloud Public Edition (multi-tenant SaaS) utilizing standard pre-configured best practices and rapid implementation timelines. RISE with SAP is designed for larger enterprises with complex legacy customizations requiring SAP S/4HANA Cloud Private Edition on dedicated hyperscaler cloud infrastructure (AWS, Azure, GCP) with comprehensive business process intelligence via SAP Signavio.'
                  },
                  {
                    q: 'How long does an ERP Transformation implementation typically take?',
                    a: 'Utilizing our One Piece Flow delivery framework and pre-built industry accelerators, focused SAP S/4HANA Cloud Public Edition implementations can achieve go-live in 4 to 8 weeks. Larger enterprise rollouts and complex ECC brownfield conversions under RISE with SAP typically range from 3 to 9 months depending on scope, data volumes, and multi-country rollouts.'
                  },
                  {
                    q: 'Can our existing SAP ECC 6.0 system be directly converted without data loss?',
                    a: 'Yes. Through our Brownfield System Conversion and Selective Data Transition methodologies, we execute 1-to-1 database conversion to SAP HANA in-memory architecture while preserving historical transaction records, master data, and proven configurations. High-fidelity dry runs and parallel testing ensure near-zero cutover downtime.'
                  },
                  {
                    q: 'What is MAXCare Managed Services (AMS) and what does it include?',
                    a: 'MAXCare is our comprehensive SAP Application Management Services offering. It provides 24/7 SLA-driven functional and technical support, Basis administration, proactive cloud infrastructure monitoring, automated security patch testing, and continuous improvement advisory to ensure peak performance post-go-live.'
                  },
                  {
                    q: 'How does Clean Core compliance prevent future upgrade disruptions?',
                    a: 'Clean Core enforces decoupling all custom ABAP code and bespoke application logic from the underlying ERP kernel onto the SAP Business Technology Platform (BTP). Because the digital core remains untouched, SAP automated bi-annual release upgrades occur seamlessly without broken customizations or expensive re-testing.'
                  }
                ].map((faq, idx) => {
                  const isOpen = expandedFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border border-slate-200/70 dark:border-white/10 overflow-hidden transition-all bg-slate-50/50 dark:bg-white/[0.02]"
                    >
                      <button
                        onClick={() => setExpandedFaq(isOpen ? null : idx)}
                        className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-100/50 dark:hover:bg-white/[0.04] transition-colors"
                      >
                        <span className="text-sm sm:text-base font-bold text-[#0A1931] dark:text-white">
                          {faq.q}
                        </span>
                        <span className="p-1 rounded-lg bg-slate-200/60 dark:bg-white/10 text-slate-700 dark:text-slate-300 shrink-0">
                          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/50 dark:border-white/5 pt-4">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          </>
        ) : activeDomain === 'digital' ? (
          /* =========================================================================
             SAVIC-ALIGNED ENTERPRISE FORMAT FOR DIGITAL TRANSFORMATION
             ========================================================================= */
          <DigitalTransformationView onOpenContact={onOpenContact} />
        ) : activeDomain === 'rise' ? (
          /* =========================================================================
             SAVIC-ALIGNED ENTERPRISE FORMAT FOR RISE WITH SAP
             ========================================================================= */
          <RiseWithSapView onOpenContact={onOpenContact} />
        ) : (
          /* =========================================================================
             STANDARD TRANSFORMATION LAYOUT FOR OTHER DOMAINS
             ========================================================================= */
          <>
            {/* -----------------------------------------------------------------------
                SECTION 1: OVERVIEW ("Transform Your Enterprise" with Glowing City Card)
                ----------------------------------------------------------------------- */}
            <section className="bg-white dark:bg-[#0B1528] rounded-3xl border border-slate-200/80 dark:border-white/10 p-8 sm:p-12 lg:p-14 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                
                {/* Left Column: Text & Features */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-2">
                    <span className="h-0.5 w-6 bg-amber-400 rounded-full" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">
                      OVERVIEW
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1931] dark:text-white tracking-tight">
                    {currentData.overviewHeading}
                  </h2>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {currentData.overviewParagraph1}
                  </p>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {currentData.overviewParagraph2}
                  </p>

                  {/* Feature Pills */}
                  <div className="pt-3 flex flex-wrap gap-3">
                    {currentData.overviewPills.map((pill, idx) => (
                      <div 
                        key={idx}
                        className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/70 dark:border-white/10 text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 shadow-xs"
                      >
                        {pill.icon}
                        <span>{pill.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column: Glowing Cloud Skyline Graphic Card */}
                <div className="lg:col-span-5">
                  <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 bg-gradient-to-b from-[#0B1E38] via-[#09182E] to-[#040B17] p-8 shadow-2xl aspect-4/3 flex flex-col justify-between group">
                    
                    {/* Glowing background glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-[#00A3E0]/20 rounded-full blur-3xl pointer-events-none group-hover:bg-[#00A3E0]/30 transition-all duration-500" />
                    
                    {/* Top Cloud & Upward Arrows Graphic (SVG) */}
                    <div className="relative z-10 flex flex-col items-center justify-center pt-4">
                      <div className="relative">
                        <svg className="w-32 h-24 text-[#00A3E0] drop-shadow-[0_0_20px_rgba(0,163,224,0.65)]" viewBox="0 0 64 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 36h28a12 12 0 0 0 0-24 16 16 0 0 0-31.2 4.4A10 10 0 0 0 18 36z" fill="rgba(0, 163, 224, 0.08)" />
                          <line x1="26" y1="30" x2="26" y2="18" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
                          <polyline points="22 22 26 18 30 22" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <line x1="32" y1="32" x2="32" y2="14" stroke="#38BDF8" strokeWidth="2.2" strokeLinecap="round" />
                          <polyline points="28 18 32 14 36 18" stroke="#38BDF8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                          <line x1="38" y1="30" x2="38" y2="18" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
                          <polyline points="34 22 38 18 42 22" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>

                    {/* Bottom City Skyline Silhouettes */}
                    <div className="relative z-10 w-full pt-6">
                      <svg className="w-full h-24" viewBox="0 0 240 80" preserveAspectRatio="none" fill="none">
                        <path d="M0 80 L0 55 L15 55 L15 45 L30 45 L30 60 L45 60 L45 35 L60 35 L60 50 L75 50 L75 25 L85 20 L95 25 L95 55 L110 55 L110 30 L125 30 L125 45 L140 45 L140 20 L150 15 L160 20 L160 60 L175 60 L175 40 L190 40 L190 55 L205 55 L205 35 L220 35 L220 65 L240 65 L240 80 Z" fill="#0E2849" />
                        <path d="M20 80 L20 62 L35 62 L35 50 L55 50 L55 65 L70 65 L70 42 L85 32 L100 42 L100 68 L120 68 L120 48 L135 48 L135 60 L150 60 L150 38 L165 38 L165 65 L185 65 L185 52 L200 52 L200 70 L240 70 L240 80 Z" fill="#13355F" opacity="0.7" />
                        <circle cx="50" cy="42" r="1" fill="#38BDF8" />
                        <circle cx="54" cy="42" r="1" fill="#FBBF24" />
                        <circle cx="50" cy="48" r="1" fill="#38BDF8" />
                        <circle cx="80" cy="35" r="1" fill="#38BDF8" />
                        <circle cx="88" cy="30" r="1" fill="#FBBF24" />
                        <circle cx="85" cy="40" r="1" fill="#38BDF8" />
                        <circle cx="115" cy="38" r="1" fill="#38BDF8" />
                        <circle cx="120" cy="42" r="1" fill="#FBBF24" />
                        <circle cx="145" cy="28" r="1" fill="#38BDF8" />
                        <circle cx="155" cy="25" r="1" fill="#38BDF8" />
                        <circle cx="152" cy="35" r="1" fill="#FBBF24" />
                        <circle cx="195" cy="46" r="1" fill="#38BDF8" />
                        <circle cx="210" cy="42" r="1" fill="#38BDF8" />
                        <line x1="0" y1="76" x2="240" y2="76" stroke="#00A3E0" strokeWidth="1" strokeOpacity="0.4" />
                        <line x1="10" y1="78" x2="230" y2="78" stroke="#38BDF8" strokeWidth="0.5" strokeOpacity="0.3" />
                      </svg>
                    </div>

                    <div className="relative z-10 pt-2 flex items-center justify-between border-t border-white/10 text-[10px] font-mono text-cyan-300/80">
                      <span>CLOUD CORE INFRASTRUCTURE</span>
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>ACTIVE</span>
                      </span>
                    </div>

                  </div>
                </div>

              </div>
            </section>

            {/* -----------------------------------------------------------------------
                SECTION 2: OUR TRANSFORMATION APPROACH (4 Full-Width Cards Grid)
                ----------------------------------------------------------------------- */}
            <section className="space-y-8">
              <div>
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="h-0.5 w-6 bg-amber-400 rounded-full" />
                  <span className="h-0.5 w-3 bg-[#00A3E0] rounded-full" />
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1931] dark:text-white tracking-tight">
                  {currentData.approachHeading}
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {currentData.approachCards.map((card, idx) => (
                  <div 
                    key={idx}
                    className="bg-white dark:bg-[#0B1528] rounded-2xl border border-slate-200/80 dark:border-white/10 p-7 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-5 ${card.iconBg}`}>
                        {card.icon}
                      </div>

                      <h3 className="text-base font-extrabold text-[#0A1931] dark:text-white mb-2.5 leading-snug">
                        {card.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                        {card.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 dark:border-white/5 space-y-2">
                      {card.bullets.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                          <span className="truncate">{b}</span>
                        </div>
                      ))}
                    </div>

                  </div>
                ))}
              </div>
            </section>

            {/* -----------------------------------------------------------------------
                SECTION 3: THE TRANSFORMATION JOURNEY (Sinusoidal Wave Flow with Circular Image Nodes)
                ----------------------------------------------------------------------- */}
            <section className="relative bg-white dark:bg-[#071326] rounded-3xl border border-slate-200/80 dark:border-white/10 p-8 sm:p-12 lg:p-14 shadow-sm overflow-hidden space-y-10">
              <div className="text-center max-w-3xl mx-auto space-y-2.5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold text-[#00A3E0] bg-[#00A3E0]/10 border border-[#00A3E0]/20 mb-1">
                  <Waves className="w-3.5 h-3.5 text-[#00A3E0]" />
                  <span>TRANSFORMATION METHODOLOGY</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1931] dark:text-white tracking-tight">
                  {currentData.journeyHeading}
                </h2>
                <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                  {currentData.journeySubtitle}
                </p>
              </div>

              <div className="relative z-10 min-h-[420px] lg:min-h-[480px] pt-4 pb-12 lg:pb-28">
                <div className="hidden lg:block absolute top-4 left-0 right-0 w-full h-[280px] pointer-events-none z-0">
                  <svg className="w-full h-full" viewBox="0 0 1200 280" preserveAspectRatio="none" fill="none">
                    <path 
                      d="M 40 100 C 80 88, 115 88, 150 88 C 250 88, 350 184, 450 184 C 550 184, 650 88, 750 88 C 850 88, 950 184, 1050 184 C 1085 184, 1120 180, 1160 170"
                      stroke="#94A3B8"
                      strokeWidth="2.5"
                      strokeDasharray="7 7"
                      strokeLinecap="round"
                      className="opacity-70 dark:opacity-40"
                    />
                  </svg>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
                  {currentData.journeySteps.map((step, idx) => {
                    const isCrest = idx % 2 === 0;
                    const stepImage = step.image || DEFAULT_JOURNEY_IMAGES[idx % DEFAULT_JOURNEY_IMAGES.length];

                    return (
                      <div 
                        key={idx} 
                        className={`relative flex flex-col items-center text-center transition-all duration-500 group ${
                          isCrest ? 'lg:translate-y-0' : 'lg:translate-y-24'
                        }`}
                      >
                        <div className="relative">
                          <div className="absolute top-0 left-0 -translate-x-1 -translate-y-1 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0A1931] dark:bg-[#0070C0] text-white flex items-center justify-center font-black text-xs sm:text-sm border-2 border-white dark:border-slate-900 shadow-md shadow-slate-900/30">
                            <span>{step.num}</span>
                          </div>

                          <div className="w-36 h-36 sm:w-40 sm:h-40 lg:w-44 lg:h-44 rounded-full p-1 bg-white dark:bg-slate-800 border-4 sm:border-[6px] border-white dark:border-slate-800 shadow-xl shadow-slate-300/60 dark:shadow-black/70 overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                            <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 dark:bg-slate-700">
                              <img 
                                src={stepImage} 
                                alt={step.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                                loading="lazy"
                              />
                            </div>
                          </div>
                        </div>

                        <h3 className="text-base sm:text-lg font-black text-[#0A1931] dark:text-white mt-4 sm:mt-5 leading-snug tracking-tight">
                          {step.title}
                        </h3>

                        <p className="text-xs sm:text-[13px] text-slate-500 dark:text-slate-400 mt-2 leading-relaxed max-w-[220px] sm:max-w-[240px] mx-auto">
                          {step.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* -----------------------------------------------------------------------
                SECTION 4: KEY BENEFITS (5 Cards Grid with Crisp Light-Blue Icons)
                ----------------------------------------------------------------------- */}
            <section className="space-y-8">
              <div>
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="h-0.5 w-6 bg-amber-400 rounded-full" />
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1931] dark:text-white tracking-tight mb-2">
                  {currentData.benefitsHeading}
                </h2>
                <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
                  {currentData.benefitsSubtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                {currentData.benefitsCards.map((benefit, idx) => (
                  <div 
                    key={idx}
                    className="bg-white dark:bg-[#0B1528] rounded-2xl border border-slate-200/80 dark:border-white/10 p-6 shadow-sm hover:border-[#00A3E0]/40 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-11 h-11 rounded-xl bg-sky-50 dark:bg-[#00A3E0]/10 flex items-center justify-center mb-4 text-[#00A3E0]">
                        {benefit.icon}
                      </div>

                      <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#0A1931] dark:text-white mb-2 leading-snug">
                        {benefit.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}


        {/* -----------------------------------------------------------------------
            SECTION 6: READY TO TRANSFORM BANNER (Full-Width Mountain Silhouette CTA)
            ----------------------------------------------------------------------- */}
        <section className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#071426] via-[#0A1E38] to-[#040C1A] text-white p-8 sm:p-14 lg:p-16 border border-slate-200/20 dark:border-white/10 shadow-xl">
          
          {/* Mountain Horizon Landscape Silhouette Effect */}
          <div className="absolute right-0 bottom-0 w-full sm:w-1/2 h-full pointer-events-none opacity-40 sm:opacity-60">
            <svg className="w-full h-full" viewBox="0 0 400 240" preserveAspectRatio="none" fill="none">
              {/* Distant Mountain Ridges */}
              <path d="M50 240 L160 120 L240 180 L320 90 L400 150 L400 240 Z" fill="#0A2548" />
              <path d="M120 240 L220 140 L300 200 L370 110 L400 130 L400 240 Z" fill="#0E3360" opacity="0.6" />
              {/* Foreground Mountain Peak with Hiker / Explorer Silhouette */}
              <path d="M220 240 L310 145 L350 165 L400 130 L400 240 Z" fill="#040D1A" />
              {/* Standing explorer silhouette at mountain ridge */}
              <circle cx="350" cy="154" r="3" fill="#040D1A" />
              <rect x="348.5" y="157" width="3" height="7" rx="1" fill="#040D1A" />
              <line x1="349" y1="164" x2="347" y2="170" stroke="#040D1A" strokeWidth="1.5" />
              <line x1="351" y1="164" x2="353" y2="170" stroke="#040D1A" strokeWidth="1.5" />
              {/* Subtle glowing dawn horizon */}
              <circle cx="400" cy="100" r="80" fill="url(#dawnGlowFull)" opacity="0.4" />
              <defs>
                <radialGradient id="dawnGlowFull" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#38BDF8" />
                  <stop offset="100%" stopColor="#071426" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </div>

          <div className="relative z-10 max-w-2xl space-y-5">
            {/* Gold Accent Dash */}
            <div className="h-0.5 w-7 bg-amber-400 rounded-full" />

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
              {currentData.ctaBannerHeading}
            </h2>

            {/* Subtext */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
              {currentData.ctaBannerSubtext}
            </p>

            {/* Amber/Yellow CTA Button */}
            <div className="pt-2">
              <button
                onClick={() => onOpenContact(currentData.heroTitle)}
                className="inline-flex items-center gap-2 rounded-xl bg-[#F59E0B] hover:bg-[#D97706] active:scale-95 text-slate-950 font-extrabold px-7 py-3.5 text-xs sm:text-sm uppercase tracking-wider transition-all shadow-xl shadow-[#F59E0B]/25 cursor-pointer"
              >
                <span>{currentData.ctaBannerButton}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </section>

      </div>

    </div>
  );
};

export default SapS4HanaPage;
