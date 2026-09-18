import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Workflow,
  Layers,
  Cpu,
  Sparkles,
  Cloud,
  RefreshCw,
  Network,
  Compass,
  Server,
  Scale,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Database,
  Users,
  Building2,
  ShoppingCart,
  Truck,
  Factory,
  LifeBuoy,
  FileText,
  ChevronRight,
  PhoneCall,
  Activity,
  Globe2,
  Sliders,
  Eye,
  Rocket,
  GitBranch,
  Lock,
  Boxes,
  FileCheck2,
  Bot,
  HelpCircle
} from 'lucide-react';

interface PracticeItem {
  name: string;
  desc: string;
  tag: string;
  deliverables: string[];
  route: string;
}

interface ValueDriver {
  badge: string;
  title: string;
  desc: string;
}

interface PracticeSection {
  id: string;
  num: string;
  title: string;
  badge: string;
  badgeColor: string;
  icon: React.ReactNode;
  tagline: string;
  summary: string;
  architecturalImpact: string;
  deliverables: string[];
  valueDrivers: ValueDriver[];
  items: PracticeItem[];
}

const TRANSFORMATION_PRACTICES: PracticeSection[] = [
  {
    id: 'business-transformation',
    num: '01',
    title: 'Business Transformation',
    badge: 'CORE STRATEGY',
    badgeColor: 'text-sky-600 dark:text-cyan-300 bg-sky-50 dark:bg-cyan-500/10 border-sky-200 dark:border-cyan-500/30',
    icon: <Workflow className="w-5 h-5 text-[#00A3E0]" />,
    tagline: 'Orchestrating End-to-End Enterprise Reinvention',
    summary: 'Comprehensive business process re-engineering and strategic transformation blueprints that align organizational operations with modern digital SAP architectures, eliminating departmental silos and legacy operational friction.',
    architecturalImpact: 'Eliminates fragmented operational ledgers by establishing a unified business process backbone with continuous real-time synchronization.',
    deliverables: [
      'Enterprise Value Stream Mapping & Opportunity Diagnostics',
      'Fit-to-Standard Process Blueprinting aligned to Clean Core',
      'Organizational Readiness & Change Enablement Frameworks',
      'Continuous Process Mining & Workflow Optimization Governance'
    ],
    valueDrivers: [
      {
            "badge": "01",
            "title": "Clean Core Realignment",
            "desc": "Fit-to-standard process adoption eliminating legacy ERP modifications"
      },
      {
            "badge": "02",
            "title": "Real-Time Visibility",
            "desc": "Instant enterprise-wide operational and financial insights on demand"
      },
      {
            "badge": "03",
            "title": "Continuous Agility",
            "desc": "Future-ready foundation supporting rapid innovation and cloud releases"
      }
],
    items: [
      {
        name: 'SAP S/4HANA Transformation',
        desc: 'Holistic modernization replacing legacy ERP systems with an in-memory real-time digital core that unifies finance, supply chain, and commercial operations.',
        tag: 'Clean Core ERP',
        deliverables: ['Universal Journal Consolidation', 'Real-Time Operational MRP Live', 'Role-Based Fiori User Workspaces'],
        route: '/solutions/sap-s4hana'
      },
      {
        name: 'ERP Transformation',
        desc: 'Comprehensive redesign of enterprise resource planning models from siloed departmental transactions to continuous, synchronized business workflows.',
        tag: 'Enterprise Workflow',
        deliverables: ['Process Standardization', 'Master Data Architecture Harmonization', 'Cross-Functional KPI Governance'],
        route: '/solutions/sap-s4hana?tab=erp'
      },
      {
        name: 'Digital Transformation',
        desc: 'Strategic integration of cloud, automation, and modern API technologies into every operational facet, reshaping how the enterprise delivers value.',
        tag: 'Digital Capability',
        deliverables: ['Digital Capability Maturity Audits', 'Cloud Adoption Frameworks', 'Agile Product Operating Models'],
        route: '/services'
      },
      {
        name: 'Enterprise Transformation',
        desc: 'Multi-entity governance and business model agility empowering global organizations to scale operations, onboard subsidiaries, and adjust to market shifts.',
        tag: 'Global Operating Model',
        deliverables: ['Multi-Company Code Federation', 'Intercompany Automated Balancing', 'Global Governance Blueprints'],
        route: '/solutions/sap-s4hana'
      },
      {
        name: 'Business Process Transformation',
        desc: 'Data-driven analysis and re-engineering of core workflows using process intelligence to eliminate bottlenecks and enforce enterprise best practices.',
        tag: 'Process Intelligence',
        deliverables: ['End-to-End Value Stream Diagnostic', 'Friction Point Root-Cause Remediation', 'Standardized Execution Templates'],
        route: '/solutions/sap-s4hana'
      },
      {
        name: 'Intelligent Enterprise',
        desc: 'Embedding artificial intelligence, predictive automation, and self-learning systems directly into core workflows for proactive operational decision-making.',
        tag: 'Cognitive ERP',
        deliverables: ['Autonomous Workflow Triggers', 'Predictive Exceptions Handling', 'Augmented Executive Decision Systems'],
        route: '/products/knooviq-ai-consultant'
      },
      {
        name: 'SAP Business Suite Transformation',
        desc: 'Orderly architectural evolution from classical SAP ECC 6.0 landscapes into the modern S/4HANA digital ecosystem with zero operational disruption.',
        tag: 'Suite Evolution',
        deliverables: ['Custom Code Decoupling on BTP', 'Landscape Simplification', 'Data Harmonization & Cleansing'],
        route: '/solutions/sap-s4hana'
      },
      {
        name: 'RISE with SAP Transformation',
        desc: 'Single-contract enterprise business transformation as a service, moving complex workloads to S/4HANA Private Cloud with dedicated hyperscaler resources.',
        tag: 'Private Cloud',
        deliverables: ['Hyperscaler Infrastructure Orchestration', 'Tailored System Customization Retained', 'Unified Enterprise Support SLA'],
        route: '/solutions/rise-with-sap'
      },
      {
        name: 'SAP Cloud Transformation',
        desc: 'Turnkey public cloud SaaS adoption leveraging GROW with SAP for rapid deployment, pre-configured best practice processes, and continuous updates.',
        tag: 'Public Cloud SaaS',
        deliverables: ['Rapid Implementation Blueprints', 'Quarterly Automated Cloud Innovations', 'Zero Infrastructure Maintenance'],
        route: '/solutions/grow-with-sap'
      },
      {
        name: 'Transformation Roadmap',
        desc: 'Phase-gated strategic implementation plans balancing immediate quick-win milestones with long-term architectural stability and risk mitigation.',
        tag: 'Strategic Blueprint',
        deliverables: ['Milestone Dependency Matrices', 'Risk Assessment & Cutover Protocols', 'Architecture Transition Architecture'],
        route: '/solutions/sap-s4hana'
      }
    ]
  },
  {
    id: 'business-applications',
    num: '02',
    title: 'Business Applications',
    badge: 'ERP SUITE',
    badgeColor: 'text-indigo-600 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-500/10 border-indigo-200 dark:border-indigo-500/30',
    icon: <Layers className="w-5 h-5 text-indigo-500" />,
    tagline: 'Mission-Critical Modular Enterprise Applications',
    summary: 'Deep, synchronized functional execution modules spanning multi-entity finance, global resilient supply chains, talent management, customer experience, and industrial physical assets.',
    architecturalImpact: 'Replaces batch interface reconciliations with unified in-memory data tables shared across finance, sales, manufacturing, and procurement.',
    deliverables: [
      'Universal Journal Single Source of Financial Truth (ACDOCA)',
      'In-Memory Real-Time Material Requirements Planning (MRP Live)',
      'Synchronized Talent Lifecycle Management & Payroll Engines',
      'Unified Commercial Order-to-Cash & Customer Experience Fabric'
    ],
    valueDrivers: [
      {
            "badge": "01",
            "title": "Universal Data Hub",
            "desc": "Single source of financial and operational truth across all global entities"
      },
      {
            "badge": "02",
            "title": "Synchronized Supply Chains",
            "desc": "End-to-end material orchestration from procurement to fulfillment"
      },
      {
            "badge": "03",
            "title": "Empowered Workforce",
            "desc": "Unified talent lifecycle management and employee experience architecture"
      }
],
    items: [
      {
        name: 'SAP S/4HANA',
        desc: 'Next-generation in-memory ERP engine unifying operational accounting, inventory, billing, and resource management on a real-time columnar database.',
        tag: 'Core ERP',
        deliverables: ['Universal Journal Real-Time Close', 'MRP Live Execution Engine', 'Standardized Fiori Experience'],
        route: '/solutions/sap-s4hana'
      },
      {
        name: 'Finance: SAP FI, CO, Central Finance & Treasury',
        desc: 'Comprehensive financial accounting and managerial control encompassing general ledger, asset accounting, working capital management, and continuous multi-ledger reconciliation.',
        tag: 'Financial Core',
        deliverables: ['Central Finance Data Hub', 'Cash & Liquidity Forecasting', 'Automated Intercompany Settlements'],
        route: '/solutions/sap-datasphere'
      },
      {
        name: 'Supply Chain: MM, SD, PP, EWM, WM, TM & IBP',
        desc: 'End-to-end supply chain orchestration coordinating material management, production planning, advanced warehouse execution, and multi-modal freight transport.',
        tag: 'Supply Chain Network',
        deliverables: ['Extended Warehouse Automation', 'Real-Time Available-to-Promise (aATP)', 'Synchronized Production Scheduling'],
        route: '/solutions/sap-supply-chain'
      },
      {
        name: 'Human Capital: SuccessFactors & Talent',
        desc: 'Modern cloud HR software empowering human capital management, employee central records, automated payroll execution, and continuous employee development.',
        tag: 'Workforce & Talent',
        deliverables: ['Employee Central Master Hub', 'Performance & Succession Planning', 'Global Payroll Governance'],
        route: '/solutions/sap-successfactors'
      },
      {
        name: 'Customer Experience: SAP CX & CRM',
        desc: 'Customer journey synchronization connecting commerce, sales pipeline execution, customer service support, and targeted marketing campaigns.',
        tag: 'Customer Experience',
        deliverables: ['Omnichannel Commerce Engines', 'Field Service Management Synchronization', 'Unified Customer Identity Repository'],
        route: '/solutions/sap-cx'
      },
      {
        name: 'Asset Management (EAM)',
        desc: 'Industrial asset reliability and plant maintenance governance covering predictive equipment maintenance, work order scheduling, and spare parts availability.',
        tag: 'Enterprise Asset Management',
        deliverables: ['Equipment Digital Twin Models', 'Preventive Inspection Cycles', 'Real-Time Machine Telemetry Integration'],
        route: '/products/asset-management'
      },
      {
        name: 'Quality Management (QM)',
        desc: 'Closed-loop quality governance spanning goods receipt inspection lots, in-process sampling, defect recording, and international certificate of analysis generation.',
        tag: 'Quality Governance',
        deliverables: ['Automated Inspection Lot Generation', 'Non-Conformance Remediation Cycles', 'Supplier Quality Scorecarding'],
        route: '/solutions/sap-s4hana'
      }
    ]
  },
  {
    id: 'sap-technology',
    num: '03',
    title: 'SAP Technology',
    badge: 'PLATFORM & DEV',
    badgeColor: 'text-cyan-600 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-500/10 border-cyan-200 dark:border-cyan-500/30',
    icon: <Cpu className="w-5 h-5 text-cyan-500" />,
    tagline: 'Modern Foundation for Clean Core Extensibility',
    summary: 'The robust technological platform powering modern SAP landscapes, decoupling bespoke business logic from the digital core via SAP BTP, modern RESTful ABAP, and intuitive SAP Fiori interfaces.',
    architecturalImpact: 'Ensures zero-regression core upgrades by keeping custom applications and third-party integrations cleanly decoupled on SAP BTP.',
    deliverables: [
      'SAP Business Technology Platform (BTP) Tenant Setup & Governance',
      'RESTful Application Programming Model (RAP) on Cloud ABAP',
      'Intuitive SAP Fiori & SAP UI5 Custom App Development',
      'Enterprise Role Authorization, SSO & Security Architecture'
    ],
    valueDrivers: [
      {
            "badge": "01",
            "title": "Decoupled Extensions",
            "desc": "Clean Core side-by-side app development on SAP BTP using RAP and CAP"
      },
      {
            "badge": "02",
            "title": "High-Speed In-Memory",
            "desc": "Columnar database engine processing transactional workloads instantaneously"
      },
      {
            "badge": "03",
            "title": "Zero-Regression Upgrades",
            "desc": "Seamless SAP cloud release adoption without custom code breakage"
      }
],
    items: [
      {
        name: 'SAP BTP (Business Technology Platform)',
        desc: 'Enterprise integration, application development, and automation platform that provides a flexible environment for extending SAP and third-party systems.',
        tag: 'Cloud Platform',
        deliverables: ['Multi-Cloud Cloud Foundry & Kyma Runtime', 'Sub-Account Security Governance', 'Central Launchpad Integration'],
        route: '/solutions/sap-btp'
      },
      {
        name: 'SAP HANA',
        desc: 'High-performance in-memory columnar database enabling real-time analytics, instantaneous transaction processing, and advanced data modeling without latency.',
        tag: 'In-Memory Engine',
        deliverables: ['Columnar Storage Optimization', 'Calculation Views & CDS Modeling', 'In-Memory Parallel Processing'],
        route: '/solutions/sap-datasphere'
      },
      {
        name: 'SAP Fiori',
        desc: 'Role-based, responsive user experience design system delivering streamlined consumer-grade interfaces across desktop, tablet, and mobile devices.',
        tag: 'Modern UX',
        deliverables: ['Responsive Role-Based Launchpads', 'Custom Fiori Elements Apps', 'Adaptive Mobile Workspaces'],
        route: '/solutions/sap-btp'
      },
      {
        name: 'SAP UI5',
        desc: 'Enterprise-grade HTML5 UI framework for developing robust, accessible, and high-performing web applications tailored to specific enterprise business flows.',
        tag: 'Frontend Framework',
        deliverables: ['Cross-Device Responsive Components', 'OData Service Consumption', 'Custom Reusable UI Libraries'],
        route: '/solutions/sap-btp'
      },
      {
        name: 'SAP ABAP (Cloud & RAP)',
        desc: 'Modern ABAP programming model for building clean core-compliant extensions, cloud services, and RESTful APIs without touching standard ERP tables.',
        tag: 'Cloud Development',
        deliverables: ['RESTful Application Programming (RAP)', 'ABAP Core Data Services (CDS)', 'Side-by-Side Extension Blueprints'],
        route: '/solutions/sap-btp'
      },
      {
        name: 'SAP Integration Suite',
        desc: 'Comprehensive cloud integration service connecting cloud and on-premise systems with pre-built integration packs, API management, and event routing.',
        tag: 'iPaaS Platform',
        deliverables: ['Pre-Configured Integration Flows', 'B2B/EDI Electronic Data Interchange', 'Event-Driven Messaging via Event Mesh'],
        route: '/solutions/sap-btp'
      },
      {
        name: 'SAP APIs & Graph',
        desc: 'Standardized REST and OData APIs providing unified semantic access to core ERP data models and business processes for external developer ecosystems.',
        tag: 'API Architecture',
        deliverables: ['SAP Business Accelerator Hub APIs', 'Enterprise API Gateway & Throttling', 'Federated Semantic Data Graph'],
        route: '/solutions/sap-btp'
      },
      {
        name: 'SAP Extensions',
        desc: 'Side-by-side extension architecture that isolates proprietary custom features and workflows outside the core ERP, protecting system upgradeability.',
        tag: 'Clean Core Extensions',
        deliverables: ['Decoupled Business Logic', 'Microservice Containerization', 'Automated Regression-Free Upgrades'],
        route: '/solutions/sap-btp'
      },
      {
        name: 'Enterprise Architecture',
        desc: 'Strategic technology blueprinting defining system landscapes, data flows, cloud residency, and cybersecurity protocols across the enterprise IT estate.',
        tag: 'Landscape Strategy',
        deliverables: ['Target Architecture Blueprinting', 'Hyperscaler Multi-Region Topology', 'Disaster Recovery Readiness'],
        route: '/solutions/sap-s4hana'
      },
      {
        name: 'SAP Security',
        desc: 'Multi-tiered cybersecurity governance encompassing granular role authorizations, identity federation, data masking, and continuous audit trails.',
        tag: 'Identity & Access',
        deliverables: ['Role-Based Access Control (RBAC)', 'Single Sign-On (SSO) & MFA Integration', 'Sensitive Field Data Masking'],
        route: '/solutions/sap-s4hana'
      }
    ]
  },
  {
    id: 'data-analytics-ai',
    num: '04',
    title: 'Data, Analytics & AI',
    badge: 'AI & DATA FABRIC',
    badgeColor: 'text-purple-600 dark:text-purple-300 bg-purple-50 dark:bg-purple-500/10 border-purple-200 dark:border-purple-500/30',
    icon: <Sparkles className="w-5 h-5 text-purple-500" />,
    tagline: 'Contextual Intelligence from Operational Data',
    summary: 'Harmonizing operational transaction data, federated data fabrics, and embedded AI agents to deliver real-time predictive visibility, automated reconciliations, and augmented executive decision intelligence.',
    architecturalImpact: 'Unifies distributed enterprise data without requiring massive redundant data extraction pipelines or batch data warehouse synchronizations.',
    deliverables: [
      'SAP Datasphere Unified Data Fabric Modeling',
      'SAP Analytics Cloud (SAC) Strategic Executive Stories',
      'Contextual AI Copilots & Autonomous Decision Engines',
      'Enterprise Master Data Governance (MDG) Repository'
    ],
    valueDrivers: [
      {
            "badge": "01",
            "title": "Autonomous Business AI",
            "desc": "Context-aware intelligence embedded directly into daily operational workflows"
      },
      {
            "badge": "02",
            "title": "Unified Data Fabric",
            "desc": "Datasphere integration connecting SAP and non-SAP data without replication"
      },
      {
            "badge": "03",
            "title": "Predictive Steering",
            "desc": "Executive scenario modeling and augmented forecasting via SAC"
      }
],
    items: [
      {
        name: 'SAP Business AI',
        desc: 'Purpose-built artificial intelligence embedded directly into standard business workflows, automating routine tasks and surfacing contextual recommendations.',
        tag: 'Embedded AI',
        deliverables: ['Automated Document Processing', 'Intelligent Cash Application Matching', 'Predictive Stock Replenishment'],
        route: '/products/knooviq-ai-consultant'
      },
      {
        name: 'Generative AI',
        desc: 'Enterprise generative AI applications securely leveraging corporate business semantics to synthesize insights, draft communications, and summarize complex reports.',
        tag: 'GenAI Solutions',
        deliverables: ['Context-Aware Prompt Engineering', 'Secure Enterprise LLM Guardrails', 'Automated Narrative Generation'],
        route: '/products/knooviq-ai-insights'
      },
      {
        name: 'AI Agents',
        desc: 'Autonomous multi-step agents executing complex operational tasks, tracking exceptions, and coordinating cross-system workflows without human intervention.',
        tag: 'Autonomous Agents',
        deliverables: ['Autonomous Exception Resolvers', 'Cross-System Multi-Agent Workflows', 'Task Verification Auditing'],
        route: '/products/knooviq-ai-engagement'
      },
      {
        name: 'Machine Learning',
        desc: 'Predictive algorithms trained on historical ERP transactions to forecast demand, detect anomalies, and optimize pricing and inventory buffers.',
        tag: 'Predictive Models',
        deliverables: ['Demand Forecasting Models', 'Anomaly Detection in Accounting Ledgers', 'Equipment Failure Prediction'],
        route: '/products/supply-chain-intelligence'
      },
      {
        name: 'SAP Analytics Cloud (SAC)',
        desc: 'Unified cloud solution combining business intelligence, collaborative financial planning, and augmented predictive analytics in one intuitive cockpit.',
        tag: 'Cloud Analytics',
        deliverables: ['Real-Time Executive Dashboards', 'Collaborative Enterprise Planning Models', 'Simulative Scenario Planning'],
        route: '/solutions/sap-datasphere'
      },
      {
        name: 'SAP Datasphere',
        desc: 'Comprehensive data fabric service providing semantic business context across distributed SAP and non-SAP data repositories without manual extraction.',
        tag: 'Unified Data Fabric',
        deliverables: ['Business Data Fabric Modeling', 'Federated Non-SAP Data Connections', 'Cataloging & Data Lineage Governance'],
        route: '/solutions/sap-datasphere'
      },
      {
        name: 'SAP BW/4HANA',
        desc: 'Modern, high-speed packaged enterprise data warehouse running natively on SAP HANA for complex historical reporting and multi-source consolidation.',
        tag: 'Data Warehouse',
        deliverables: ['Optimized Core Data Services', 'Simplified Data Tiering Architecture', 'Enterprise Historical Reporting'],
        route: '/solutions/sap-datasphere'
      },
      {
        name: 'Data Intelligence',
        desc: 'Comprehensive data orchestration framework managing machine learning lifecycles, structured data pipelines, and metadata governance across hybrid environments.',
        tag: 'Data Orchestration',
        deliverables: ['Hybrid Pipeline Automation', 'Metadata Discovery & Cataloging', 'Model Lifecycle Management'],
        route: '/solutions/sap-datasphere'
      },
      {
        name: 'Master Data Governance (MDG)',
        desc: 'Centralized master data governance establishing a single, verified golden record for business partners, materials, customer accounts, and financial hierarchies.',
        tag: 'Master Data Golden Record',
        deliverables: ['Collaborative Workflow Approvals', 'Automated Duplicate Detection', 'Multi-System Master Data Distribution'],
        route: '/solutions/sap-s4hana'
      },
      {
        name: 'Data Management',
        desc: 'End-to-end data lifecycle administration encompassing data volume sanitization, archiving policies, retention rules, and secure regulatory compliance.',
        tag: 'Data Lifecycle',
        deliverables: ['Information Lifecycle Management (ILM)', 'Data Volume Reduction Assessments', 'Secure Archiving & Purging Rules'],
        route: '/solutions/sap-datasphere'
      }
    ]
  },
  {
    id: 'cloud-transformation',
    num: '05',
    title: 'Cloud Transformation',
    badge: 'HYPERSCALER CLOUD',
    badgeColor: 'text-blue-600 dark:text-blue-300 bg-blue-50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/30',
    icon: <Cloud className="w-5 h-5 text-blue-500" />,
    tagline: 'Flexible Cloud Deployments for Agile Growth',
    summary: 'Tailored enterprise cloud adoption pathways providing seamless transitions to public, private, or hybrid cloud environments with hyperscaler resilience and continuous innovation cycles.',
    architecturalImpact: 'Transfers technical infrastructure maintenance and disaster recovery obligations to certified hyperscalers while keeping business applications agile.',
    deliverables: [
      'GROW with SAP Public Cloud Turnkey Fast-Track Deployments',
      'RISE with SAP Private Cloud Hyperscaler Dedicated Landscapes',
      'AWS, Microsoft Azure & Google Cloud Platform Architecture',
      'Zero-Downtime Migration & Enterprise Cloud SLA Management'
    ],
    valueDrivers: [
      {
            "badge": "01",
            "title": "Predictable Cloud Journey",
            "desc": "Structured RISE and GROW methodology accelerating migration timelines"
      },
      {
            "badge": "02",
            "title": "Elastic Multi-Cloud",
            "desc": "Flexible deployment options across major enterprise hyperscalers"
      },
      {
            "badge": "03",
            "title": "Total Cost Governance",
            "desc": "FinOps architecture delivering complete transparency over cloud workloads"
      }
],
    items: [
      {
        name: 'RISE with SAP',
        desc: 'Complete business-transformation-as-a-service offering single-tenant S/4HANA Private Cloud hosted on AWS, Azure, or GCP with full SLA coverage.',
        tag: 'Private Cloud Edition',
        deliverables: ['Single Commercial Contract (Software + Cloud)', 'Hyperscaler High Availability', 'Legacy Custom Code Retained'],
        route: '/solutions/rise-with-sap'
      },
      {
        name: 'GROW with SAP',
        desc: 'Turnkey public cloud ERP designed for mid-market organizations seeking rapid go-live, pre-packaged industry best practices, and continuous automated innovation.',
        tag: 'Public Cloud SaaS',
        deliverables: ['Fit-to-Standard Rapid Activation', 'Automated Bi-Annual Cloud Upgrades', 'Zero Server Maintenance Overhead'],
        route: '/solutions/grow-with-sap'
      },
      {
        name: 'Cloud ERP',
        desc: 'Pure cloud-native enterprise resource planning delivering multi-tenant scalability, real-time security updates, and global accessibility across all facilities.',
        tag: 'Cloud-Native ERP',
        deliverables: ['Instant Global Deployment', 'Continuous Security Hardening', 'Elastic Resource Scaling'],
        route: '/solutions/grow-with-sap'
      },
      {
        name: 'Cloud Migration',
        desc: 'Structured lift-and-shift or selective conversion of on-premise SAP workloads to hyperscaler clouds with minimal business interruption.',
        tag: 'Migration Methodology',
        deliverables: ['Cloud Readiness Feasibility Studies', 'Network & Latency Optimization', 'Phased Cutover Orchestration'],
        route: '/solutions/rise-with-sap'
      },
      {
        name: 'Multi-Cloud Architecture',
        desc: 'Strategic cloud architecture distributing mission-critical workloads across multiple hyperscalers to mitigate lock-in and optimize geographic latency.',
        tag: 'Multi-Cloud Strategy',
        deliverables: ['Workload Placement Optimization', 'Cross-Cloud Disaster Recovery', 'Unified Cloud Governance Policies'],
        route: '/solutions/rise-with-sap'
      },
      {
        name: 'Hyperscaler Integration: AWS, Azure & GCP',
        desc: 'Deep engineering integration connecting the SAP core with advanced hyperscaler services like AI cognitive tools, object storage, and analytics.',
        tag: 'Hyperscaler Ecosystem',
        deliverables: ['Azure Active Directory Identity Federation', 'AWS S3 Cold Data Tiering', 'Google BigQuery Bi-Directional Pipelines'],
        route: '/solutions/rise-with-sap'
      },
      {
        name: 'Private Cloud',
        desc: 'Dedicated single-tenant cloud environment providing total data sovereignty, customized configuration flexibility, and dedicated compute resources.',
        tag: 'Single-Tenant Security',
        deliverables: ['Customized Maintenance Windows', 'Dedicated Network Peering', 'Full IMG Implementation Guide Access'],
        route: '/solutions/rise-with-sap'
      },
      {
        name: 'Public Cloud',
        desc: 'Standardized multi-tenant cloud delivery offering the lowest total cost of ownership, automated feature rollouts, and strict Clean Core governance.',
        tag: 'Standardized SaaS',
        deliverables: ['Pre-Configured Best Practices', 'Continuous Automated Regression Testing', 'Zero Custom Code Tech Debt'],
        route: '/solutions/grow-with-sap'
      },
      {
        name: 'Hybrid Cloud',
        desc: 'Two-tier ERP landscape combining standardized public cloud instances for regional operating units with private cloud or on-premise for headquarters.',
        tag: 'Two-Tier ERP',
        deliverables: ['Two-Tier Financial Consolidation', 'Centralized Master Data Replication', 'Localized Operational Autonomy'],
        route: '/solutions/sap-s4hana'
      },
      {
        name: 'Cloud Security',
        desc: 'Rigorous cloud compliance and cybersecurity frameworks meeting ISO 27001, SOC 2, data sovereignty laws, and encrypted key management standards.',
        tag: 'Cloud Compliance',
        deliverables: ['Customer-Managed Encryption Keys', 'Continuous Threat Monitoring', 'Geographic Data Residency Guarantees'],
        route: '/solutions/rise-with-sap'
      }
    ]
  },
  {
    id: 'migration-modernization',
    num: '06',
    title: 'Migration & Modernization',
    badge: 'CLEAN CORE TRANSITION',
    badgeColor: 'text-amber-600 dark:text-amber-300 bg-amber-50 dark:bg-amber-500/10 border-amber-200 dark:border-amber-500/30',
    icon: <RefreshCw className="w-5 h-5 text-amber-500" />,
    tagline: 'De-Risked Pathways to S/4HANA Modern Core',
    summary: 'Proven transition methodologies converting legacy SAP ECC systems to high-speed S/4HANA with automated custom code remediation, selective data carving, and near-zero downtime cutovers.',
    architecturalImpact: 'Strips decades of accumulated custom technical debt, converting complex Z-code into clean, upgrade-safe BTP microservices.',
    deliverables: [
      'Comprehensive ECC Landscape Readiness & Compatibility Scans',
      'Automated Custom ABAP Code Remediation & Decoupling',
      'Brownfield, Greenfield & Selective Data Transition (Bluefield) Strategies',
      'Zero-Data-Loss Cutover Protocols & Business Continuity Assurance'
    ],
    valueDrivers: [
      {
            "badge": "01",
            "title": "Risk-Mitigated Cutover",
            "desc": "Near-zero downtime cutover protocols protecting mission-critical operations"
      },
      {
            "badge": "02",
            "title": "Automated Code Remediation",
            "desc": "AI-driven custom code modernization ensuring Clean Core compliance"
      },
      {
            "badge": "03",
            "title": "Flexible Transition Paths",
            "desc": "Greenfield, brownfield, or selective data transition customized to business needs"
      }
],
    items: [
      {
        name: 'SAP ECC to S/4HANA Migration',
        desc: 'End-to-end technical and functional conversion moving corporate history, ledgers, and open items into the modern S/4HANA architecture.',
        tag: 'Core Conversion',
        deliverables: ['Database Migration Option (DMO)', 'Financial Universal Journal Reconciliation', 'Fiori App Role Mapping'],
        route: '/solutions/sap-s4hana'
      },
      {
        name: 'Brownfield Migration',
        desc: 'System conversion strategy retaining existing historical transaction records and business configurations while modernizing database and code.',
        tag: 'System Conversion',
        deliverables: ['Full Historical Data Preservation', 'Minimal Organizational Disruption', 'Automated Software Update Manager (SUM)'],
        route: '/solutions/sap-s4hana'
      },
      {
        name: 'Greenfield Implementation',
        desc: 'Fresh re-implementation strategy discarding legacy customizations in favor of standard out-of-the-box SAP best practice processes.',
        tag: 'Clean Slate Redesign',
        deliverables: ['100% Clean Core Alignment', 'Elimination of Obsolete Custom Modifications', 'Streamlined Operating Model'],
        route: '/solutions/sap-s4hana'
      },
      {
        name: 'Selective Data Transition (Bluefield)',
        desc: 'Hybrid migration carving out valuable historical data and active business entities while leaving behind inactive company codes and obsolete code.',
        tag: 'Selective Carve-Out',
        deliverables: ['Selective Master & Transactional Migration', 'Near-Zero Weekend Downtime', 'System Consolidation in Flight'],
        route: '/solutions/sap-s4hana'
      },
      {
        name: 'Legacy System Modernization',
        desc: 'Retirement of outdated legacy satellite applications and peripheral spreadsheets by consolidating workflows directly onto the unified SAP platform.',
        tag: 'Legacy Decommissioning',
        deliverables: ['Application Rationalization', 'Historical Data Archival Repository', 'Infrastructure Footprint Reduction'],
        route: '/solutions/sap-s4hana'
      },
      {
        name: 'System Consolidation',
        desc: 'Merging multiple regional SAP ECC instances or acquired business systems into a single centralized global S/4HANA instance.',
        tag: 'Instance Harmonization',
        deliverables: ['Global Chart of Accounts Alignment', 'Centralized Master Data Repositories', 'Consolidated Corporate Reporting'],
        route: '/solutions/sap-s4hana'
      },
      {
        name: 'Database Migration to HANA',
        desc: 'Migrating legacy relational databases (Oracle, DB2, SQL Server) to the in-memory SAP HANA platform to unlock sub-second query performance.',
        tag: 'Database Modernization',
        deliverables: ['Heterogeneous System Copy', 'Columnar Storage Index Reduction', 'In-Memory Query Performance Gains'],
        route: '/solutions/sap-datasphere'
      },
      {
        name: 'Unicode Conversion',
        desc: 'Pre-requisite character encoding conversions preparing legacy systems for global multi-language characters and modern interface protocols.',
        tag: 'Technical Readiness',
        deliverables: ['Single-Byte to Multi-Byte Transformation', 'Data Integrity Validation', 'System Internationalization Readiness'],
        route: '/solutions/sap-s4hana'
      },
      {
        name: 'Code Remediation',
        desc: 'Automated scanning and refactoring of custom ABAP programs to ensure full compatibility with HANA memory syntax and S/4HANA simplification lists.',
        tag: 'ABAP Refactoring',
        deliverables: ['Automated Custom Code Migration Workbenches', 'Obsolete Table Syntax Replacement', 'Side-by-Side BTP Decoupling'],
        route: '/solutions/sap-btp'
      },
      {
        name: 'Clean Core Strategy',
        desc: 'Architectural governance ensuring the core ERP stays pristine by enforcing standard APIs and building all extensions on SAP BTP.',
        tag: 'Clean Core Governance',
        deliverables: ['Zero Core ERP Table Modifications', 'Public Interface Contract Compliance', 'Rapid Regression-Free Upgrades'],
        route: '/solutions/sap-s4hana'
      }
    ]
  },
  {
    id: 'integration-ecosystem',
    num: '07',
    title: 'Integration & Ecosystem',
    badge: 'CONNECTED ECOSYSTEM',
    badgeColor: 'text-emerald-600 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/30',
    icon: <Network className="w-5 h-5 text-emerald-500" />,
    tagline: 'Synchronizing Non-SAP & Enterprise Ecosystems',
    summary: 'Robust, event-driven integration frameworks linking the central SAP core with third-party software (Salesforce, Workday, ServiceNow), banking networks, B2B partners, and cloud services.',
    architecturalImpact: 'Replaces brittle point-to-point batch files with asynchronous event meshes, guaranteed delivery queues, and API gateways.',
    deliverables: [
      'SAP BTP Integration Suite Enterprise Connectivity Frameworks',
      'Bi-Directional Synchronizations with Salesforce, Workday & ServiceNow',
      'B2B Electronic Data Interchange (EDI) & Automated Trade Gateways',
      'Event-Driven Messaging via SAP Event Mesh & Asynchronous Queues'
    ],
    valueDrivers: [
      {
            "badge": "01",
            "title": "API-First Connected Core",
            "desc": "Seamless interoperability across hybrid enterprise IT ecosystems"
      },
      {
            "badge": "02",
            "title": "Event-Driven Real-Time",
            "desc": "Instantaneous messaging and event mesh connecting distributed platforms"
      },
      {
            "badge": "03",
            "title": "Accelerated Connectors",
            "desc": "Pre-built integration content for rapid third-party and B2B EDI onboarding"
      }
],
    items: [
      {
        name: 'SAP BTP Integration Suite',
        desc: 'Enterprise iPaaS orchestrating end-to-end business processes across hybrid, cloud, and on-premise IT landscapes with pre-built accelerators.',
        tag: 'Enterprise iPaaS',
        deliverables: ['Pre-Packaged Integration Content', 'Centralized Connection Monitoring', 'High-Volume Message Transformation'],
        route: '/solutions/sap-btp'
      },
      {
        name: 'API Management',
        desc: 'Comprehensive lifecycle management of enterprise APIs, providing developer portals, access security, rate limiting, and analytics.',
        tag: 'API Gateway',
        deliverables: ['Secure API Proxies & Throttling', 'Developer Self-Service Portals', 'Enterprise Usage Telemetry'],
        route: '/solutions/sap-btp'
      },
      {
        name: 'EDI Integration',
        desc: 'Automated electronic data interchange handling ANSI X12, EDIFACT, and XML formats for orders, advance ship notices, and commercial invoices.',
        tag: 'B2B Trade Networks',
        deliverables: ['Automated Supplier EDI Onboarding', 'Real-Time Order-to-Invoice Translation', 'Trading Partner Communications'],
        route: '/solutions/sap-btp'
      },
      {
        name: 'Non-SAP Integration: Salesforce, Workday, ServiceNow & Microsoft',
        desc: 'Pre-built bi-directional connectors synchronizing CRM leads, HR employee records, IT service tickets, and Office 365 workflows with SAP.',
        tag: 'Third-Party Connectors',
        deliverables: ['Salesforce Quote-to-Cash Sync', 'Workday Employee Master Replications', 'ServiceNow Asset Sync'],
        route: '/solutions/sap-btp'
      },
      {
        name: 'Third-Party ERP Integration',
        desc: 'Bridging specialized peripheral ERPs or acquired company systems with the central corporate SAP financial consolidation core.',
        tag: 'Two-Tier ERP Sync',
        deliverables: ['Standardized Financial Intercompany Feeds', 'Master Data Synchronization Loops', 'Consolidated Tax Reporting'],
        route: '/solutions/sap-btp'
      },
      {
        name: 'Microservices Architecture',
        desc: 'Containerized modular microservices running on Kubernetes and Cloud Foundry to handle high-frequency custom transactional logic.',
        tag: 'Cloud-Native Services',
        deliverables: ['Docker & Kubernetes Containerization', 'Independent Service Scaling', 'Resilient Fault Isolation'],
        route: '/solutions/sap-btp'
      },
      {
        name: 'Event-Driven Architecture',
        desc: 'Asynchronous event streaming using SAP Event Mesh to broadcast real-time business events across satellite applications without polling.',
        tag: 'Event Streaming',
        deliverables: ['Decoupled Asynchronous Messaging', 'Event Subscription Workflows', 'Zero-Latency Status Broadcasts'],
        route: '/solutions/sap-btp'
      },
      {
        name: 'Custom Integration Adapters',
        desc: 'Proprietary adapters developed for legacy in-house systems, proprietary databases, and specialized industrial protocols.',
        tag: 'Bespoke Adapters',
        deliverables: ['Legacy Mainframe Adapters', 'Industrial Protocol Bridges (OPC-UA)', 'Secure Tunnel Encapsulation'],
        route: '/solutions/sap-btp'
      },
      {
        name: 'Middleware Modernization',
        desc: 'Phased migration from sunsetting legacy middleware (SAP PI/PO, IBM WebSphere, TIBCO) to modern cloud-native SAP Integration Suite.',
        tag: 'iPaaS Migration',
        deliverables: ['Automated Interface Assessment & Mapping', 'Regression Testing Simulation Tools', 'Decommissioning of On-Prem Middleware'],
        route: '/solutions/sap-btp'
      },
      {
        name: 'Secure Data Exchange',
        desc: 'Encrypted financial, banking, and government compliance gateways protecting sensitive commercial payloads in transit.',
        tag: 'Encrypted Gateways',
        deliverables: ['Host-to-Host Banking Gateways (SWIFT)', 'Zero-Trust Protocol Enforcement', 'Payload Cryptographic Verification'],
        route: '/solutions/sap-btp'
      }
    ]
  },
  {
    id: 'advisory-consulting',
    num: '08',
    title: 'Advisory & Consulting',
    badge: 'STRATEGY & AUDIT',
    badgeColor: 'text-rose-600 dark:text-rose-300 bg-rose-50 dark:bg-rose-500/10 border-rose-200 dark:border-rose-500/30',
    icon: <Compass className="w-5 h-5 text-rose-500" />,
    tagline: 'Strategic Governance for Maximum Business Value',
    summary: 'Senior executive advisory, technical readiness assessments, license optimization, and organizational change management ensuring your SAP journey delivers sustained operational outcomes.',
    architecturalImpact: 'Aligns executive business strategy directly with technical architectural execution, preventing costly re-work and scope creep.',
    deliverables: [
      'Comprehensive SAP Readiness & Business Case Assessments',
      'Target Architecture Blueprints & Technology Roadmap Design',
      'SAP Licensing Optimization & Contract Advisory Audits',
      'Structured Change Management & User Adoption Frameworks'
    ],
    valueDrivers: [
      {
            "badge": "01",
            "title": "Strategic Roadmap Clarity",
            "desc": "Target operating models aligned to long-term enterprise business objectives"
      },
      {
            "badge": "02",
            "title": "Fit-to-Standard Alignment",
            "desc": "Process harmonization minimizing technical debt and maximizing standard ROI"
      },
      {
            "badge": "03",
            "title": "High User Adoption",
            "desc": "Change management frameworks driving organizational alignment from day one"
      }
],
    items: [
      {
        name: 'ERP Strategy & Roadmap',
        desc: 'Executive-level roadmapping aligning digital ERP investments with five-year enterprise corporate growth and international expansion plans.',
        tag: 'Executive Strategy',
        deliverables: ['Multi-Year Modernization Roadmaps', 'Business Architecture Modeling', 'Capital Investment Prioritization'],
        route: '/services'
      },
      {
        name: 'Digital Transformation Strategy',
        desc: 'Holistic strategy defining how digital technology transforms customer touchpoints, employee workflows, and supply chain responsiveness.',
        tag: 'Strategic Advisory',
        deliverables: ['Digital Maturity Scorecards', 'Competitive Capability Benchmarking', 'Innovation Portfolio Definition'],
        route: '/services'
      },
      {
        name: 'Process Optimization',
        desc: 'In-depth process discovery and benchmarking identifying operational inefficiencies, redundant approval gates, and cycle time delays.',
        tag: 'Process Re-Engineering',
        deliverables: ['Process Bottleneck Heatmaps', 'Lean Process Harmonization', 'Automated Exception Governance'],
        route: '/services'
      },
      {
        name: 'SAP Readiness Assessment',
        desc: 'Technical and functional audit of current ECC landscapes covering database volume, custom code debt, add-on compatibility, and cloud sizing.',
        tag: 'Feasibility Audit',
        deliverables: ['Readiness Check Analysis', 'Simplification Item Cataloging', 'Recommended Conversion Pathway'],
        route: '/services'
      },
      {
        name: 'Architecture Advisory',
        desc: 'Independent architectural review verifying scalability, high availability, security controls, and Clean Core compliance for proposed landscapes.',
        tag: 'Architecture Review',
        deliverables: ['Landscape Architecture Diagrams', 'Clean Core Compliance Certifications', 'Hyperscaler Resilience Audits'],
        route: '/services'
      },
      {
        name: 'License Optimization',
        desc: 'Analysis of SAP user authorization profiles and usage patterns to ensure license entitlement compliance and prevent unexpected audit true-ups.',
        tag: 'Commercial Advisory',
        deliverables: ['Full Use Equivalent (FUE) Modeling', 'Authorization vs. Actual Usage Analysis', 'Indirect Access Risk Mitigation'],
        route: '/services'
      },
      {
        name: 'Business Case Development',
        desc: 'Formulation of comprehensive executive business cases detailing qualitative operational benefits, cost structures, and risk mitigation models.',
        tag: 'Business Case',
        deliverables: ['Total Cost of Ownership (TCO) Models', 'Qualitative Strategic Value Stream Maps', 'Executive Investment Justifications'],
        route: '/services'
      },
      {
        name: 'Change Management',
        desc: 'Structured organizational change programs addressing employee training, stakeholder alignment, and cultural readiness for digital work patterns.',
        tag: 'Adoption & Enablement',
        deliverables: ['Stakeholder Impact Analysis', 'Role-Specific Enablement Curriculums', 'User Adoption Telemetry Tracking'],
        route: '/services'
      },
      {
        name: 'IT Governance',
        desc: 'Establishing formal IT management frameworks, release governance, approval hierarchies, and standardized documentation protocols.',
        tag: 'IT Standards',
        deliverables: ['Enterprise IT Governance Charters', 'Release Cadence Guidelines', 'Architecture Review Board Guidelines'],
        route: '/services'
      },
      {
        name: 'Risk & Quality Assurance',
        desc: 'Independent program oversight auditing implementation partners, testing rigor, cutover protocols, and data migration completeness.',
        tag: 'Independent QA',
        deliverables: ['Program Milestone Audits', 'Cutover Rehearsal Evaluations', 'Go/No-Go Decision Gate Governance'],
        route: '/services'
      }
    ]
  },
  {
    id: 'managed-services',
    num: '09',
    title: 'Managed Services',
    badge: 'RUN & 24/7 SUPPORT',
    badgeColor: 'text-teal-600 dark:text-teal-300 bg-teal-50 dark:bg-teal-500/10 border-teal-200 dark:border-teal-500/30',
    icon: <Server className="w-5 h-5 text-teal-500" />,
    tagline: 'Always-On Global Application Management Services',
    summary: '24/7/365 follow-the-sun enterprise application support, proactive system health monitoring, rapid incident remediation, and continuous release engineering governed by stringent SLAs.',
    architecturalImpact: 'Ensures near-zero unscheduled downtime, optimal system performance, and continuous post-go-live optimization of core ERP operations.',
    deliverables: [
      'Tier 1 to Tier 3 24/7 Follow-the-Sun Production Support',
      'Proactive System Health, Memory & Job Queue Monitoring',
      'Quarterly Patch Management, Security Hardening & Upgrades',
      'Database Administration, Backup Verification & Disaster Drills'
    ],
    valueDrivers: [
      {
            "badge": "01",
            "title": "24/7 Enterprise SLAs",
            "desc": "Proactive round-the-clock monitoring and incident mitigation guarantees"
      },
      {
            "badge": "02",
            "title": "Continuous Core Optimization",
            "desc": "Regular performance tuning, patch management, and health audits"
      },
      {
            "badge": "03",
            "title": "Disaster Recovery Readiness",
            "desc": "Rigorous backup and business continuity protocols safeguarding data integrity"
      }
],
    items: [
      {
        name: 'SAP Application Management Services (AMS)',
        desc: 'Comprehensive post-go-live operational support providing dedicated functional and technical specialists across all deployed modules.',
        tag: 'Enterprise AMS',
        deliverables: ['Dedicated Functional Experts', 'Incident & Problem Management', 'Continuous Value Enhancements'],
        route: '/services'
      },
      {
        name: '24/7 Production Support',
        desc: 'Always-on global helpdesk responding to critical severity incidents with guaranteed fast resolution times and escalation matrices.',
        tag: 'Round-the-Clock',
        deliverables: ['Follow-the-Sun Support Hubs', 'Priority Severity 1 Incident Teams', 'Executive Incident Status Briefings'],
        route: '/services'
      },
      {
        name: 'System Monitoring & Maintenance',
        desc: 'Automated monitoring tracking background job queues, CPU utilization, HANA memory consumption, and interface pipeline health.',
        tag: 'Proactive Telemetry',
        deliverables: ['Automated Exception Alerts', 'Batch Job Queue Optimization', 'Interface Telemetry Cockpits'],
        route: '/services'
      },
      {
        name: 'Performance Optimization',
        desc: 'Continuous SQL query tuning, expensive statement analysis, database table partitioning, and ABAP code optimization.',
        tag: 'Performance Tuning',
        deliverables: ['Expensive SQL Statement Remediation', 'HANA Memory Distribution Audits', 'Fiori App Latency Reduction'],
        route: '/services'
      },
      {
        name: 'Patch Management & Upgrades',
        desc: 'Structured deployment of SAP security notes, support package stacks (SPS), and feature pack stacks without disrupting business operations.',
        tag: 'System Maintenance',
        deliverables: ['Zero-Downtime Patch Application', 'Pre-Release Regression Testing', 'Security Vulnerability Patching'],
        route: '/services'
      },
      {
        name: 'Security & Vulnerability Management',
        desc: 'Ongoing security audits, penetration test remediation, user access reviews, and segregation of duties (SoD) conflict resolution.',
        tag: 'Security Governance',
        deliverables: ['Quarterly Access Right Certifications', 'SoD Conflict Remediation', 'Security Audit Log Auditing'],
        route: '/services'
      },
      {
        name: 'Disaster Recovery & Backup',
        desc: 'Automated database backups, geo-replicated data protection, and periodic disaster recovery failover simulations.',
        tag: 'Business Continuity',
        deliverables: ['Geo-Redundant Backup Protocols', 'Annual DR Simulation Drill Execution', 'Recovery Time Objective (RTO) Auditing'],
        route: '/services'
      },
      {
        name: 'Database Administration',
        desc: 'Expert SAP HANA database administration managing memory allocation, log volume archiving, and storage optimization.',
        tag: 'HANA DBA',
        deliverables: ['HANA In-Memory Tier Management', 'Database Compaction & Defragmentation', 'System Replication Monitoring'],
        route: '/services'
      },
      {
        name: 'Release Management',
        desc: 'Disciplined transport management and change request governance ensuring clean, audit-compliant progression across DEV, QA, and PROD.',
        tag: 'Transport Control',
        deliverables: ['Automated Transport Import Protocols', 'Dual-Landscape Synchronization', 'Change Impact Risk Scoring'],
        route: '/services'
      },
      {
        name: 'Helpdesk & SLA Support',
        desc: 'Centralized IT service desk integrated with enterprise ticketing systems, delivering transparent SLA performance tracking.',
        tag: 'SLA Governance',
        deliverables: ['Transparent SLA Cockpits', 'User Self-Service Ticketing', 'Root-Cause Problem Elimination'],
        route: '/services'
      }
    ]
  },
  {
    id: 'compliance-localization',
    num: '10',
    title: 'Compliance & Localization',
    badge: 'STATUTORY & LEGAL',
    badgeColor: 'text-indigo-600 dark:text-cyan-300 bg-indigo-50 dark:bg-cyan-500/10 border-indigo-200 dark:border-cyan-500/30',
    icon: <Scale className="w-5 h-5 text-indigo-500" />,
    tagline: 'Automated Regulatory, Tax & Statutory Frameworks',
    summary: 'End-to-end statutory compliance, electronic invoicing, e-way bill generation, global tax governance, and export/import compliance integrated directly into core ERP transactions.',
    architecturalImpact: 'Automates direct, encrypted real-time reporting to statutory tax authorities and customs portals without manual spreadsheet intervention.',
    deliverables: [
      'Real-Time Direct GSTN, IRP & NIC Integration Gateways',
      'Automated E-Invoicing (IRN & QR Code Generation in ERP)',
      'Automated E-Way Bill Consignment Generation from Deliveries',
      'Global Tax Compliance, Electronic Filing & EXIM Customs Engines'
    ],
    valueDrivers: [
      {
            "badge": "01",
            "title": "Global Statutory Compliance",
            "desc": "Turnkey legal reporting and tax engine integration across jurisdictions"
      },
      {
            "badge": "02",
            "title": "Automated Digital Invoicing",
            "desc": "Real-time e-invoicing and direct regulatory authority gateway synchronization"
      },
      {
            "badge": "03",
            "title": "Audit-Ready Governance",
            "desc": "Multi-GAAP financial ledger accuracy and continuous regulatory transparency"
      }
],
    items: [
      {
        name: 'India Localization: GST, E-Way Bill & E-Invoicing',
        desc: 'Turnkey SAP localization suite automating GSTR-1, GSTR-3B, real-time IRN generation, and vehicle e-way bills directly within SAP billing documents.',
        tag: 'India Statutory Suite',
        deliverables: ['Instant IRN & QR Generation on Invoices', 'One-Click Part-A & Part-B E-Way Bills', 'GSTR-2B Automated Input Tax Reconciliation'],
        route: '/products/gst'
      },
      {
        name: 'Global Tax Compliance',
        desc: 'Multi-country tax calculation engines managing VAT, sales tax, withholding tax, and cross-border customs duties across international operating jurisdictions.',
        tag: 'Global Tax Engine',
        deliverables: ['Multi-Jurisdiction Tax Determination', 'Cross-Border Withholding Tax Rules', 'Standardized Tax Return Filing'],
        route: '/products/gst'
      },
      {
        name: 'Statutory Reporting Frameworks',
        desc: 'Standardized financial disclosure statements adhering to local GAAP, Ind AS, and international financial reporting standards (IFRS).',
        tag: 'Statutory Statements',
        deliverables: ['Automated Balance Sheet & P&L Disclosures', 'Cash Flow Direct/Indirect Schedules', 'Legal Entity Segment Reporting'],
        route: '/products/gst'
      },
      {
        name: 'E-Invoicing & Digital Invoicing',
        desc: 'Automated transmission of digital invoices to government tax clearinghouses across Europe (Peppol), Latin America, the Middle East (ZATCA), and Asia.',
        tag: 'Digital Invoicing',
        deliverables: ['Peppol Network Direct Routing', 'ZATCA Phase 2 Cryptographic Clearing', 'Universal XML/JSON Validation'],
        route: '/e-invoice'
      },
      {
        name: 'Regulatory Compliance Monitoring',
        desc: 'Continuous monitoring of evolving regulatory requirements and automatic updates to statutory tax tables and electronic reporting schemas.',
        tag: 'Regulatory Tracking',
        deliverables: ['Automated Schema Updates', 'Legal Change Impact Assessments', 'Continuous Compliance Auditing'],
        route: '/products/gst'
      },
      {
        name: 'Data Privacy & GDPR',
        desc: 'Comprehensive data privacy frameworks enforcing customer consent, right-to-be-forgotten data purging, and sensitive personal information masking.',
        tag: 'Data Privacy',
        deliverables: ['Consent Management Integration', 'Personal Data Masking & Anonymization', 'Data Subject Access Request Workflows'],
        route: '/products/gst'
      },
      {
        name: 'Internal Controls & SOX Compliance',
        desc: 'Automated internal control frameworks enforcing strict segregation of duties, multi-level sign-offs, and immutable system audit logs.',
        tag: 'Internal Controls',
        deliverables: ['SOX 404 Control Matrices', 'Automated Journal Entry Approval Gates', 'Periodic Control Self-Assessments'],
        route: '/products/gst'
      },
      {
        name: 'Audit Trail & Governance',
        desc: 'Unbreakable system audit logs documenting all master record changes, manual financial adjustments, and administrative system actions.',
        tag: 'Audit Trail',
        deliverables: ['Tamper-Proof Financial Change Logs', 'User Action History Tracking', 'Instant Auditor Inquiry Workspaces'],
        route: '/products/gst'
      },
      {
        name: 'Export / Import Compliance (EXIM)',
        desc: 'Automated foreign trade management governing customs filings, export licensing controls, duty drawback tracking, and bonded warehouse compliance.',
        tag: 'Trade Governance',
        deliverables: ['Automated Customs Documentation', 'Duty Drawback Reconciliations', 'Restricted Party Screening'],
        route: '/exim'
      },
      {
        name: 'Legal & Financial Compliance',
        desc: 'Corporate governance frameworks aligning statutory audit protocols, company law disclosures, and board-level risk management requirements.',
        tag: 'Corporate Governance',
        deliverables: ['Statutory Filing Schedules', 'Board Resolution Audit Ties', 'Legal Entity Risk Reporting'],
        route: '/products/gst'
      }
    ]
  }
];

const TRANSFORMATION_FAQS = [
  {
    q: 'What SAP transformation solutions does Knooviq deliver?',
    a: 'Knooviq delivers comprehensive SAP transformation solutions across ten specialized strategic practices: Business Transformation, Business Applications, SAP Technology, Data, Analytics & AI, Cloud Transformation, Migration & Modernization, Integration & Ecosystem, Advisory & Consulting, Managed Services, and Compliance & Localization.'
  },
  {
    q: 'How is Knooviq\'s transformation approach structured for enterprise success?',
    a: 'Knooviq adopts a Clean Core architectural philosophy and Fit-to-Standard methodology. We decouple bespoke extensions onto SAP BTP, automate custom code remediation, and align process execution directly with strategic business priorities rather than implementing technical features in isolation.'
  },
  {
    q: 'Can Knooviq manage end-to-end S/4HANA migrations with zero business disruption?',
    a: 'Yes. Knooviq manages the complete transformation lifecycle—from initial Clean Core readiness diagnostic and architecture blueprinting, through Greenfield, Brownfield, or Selective Data Transition, to near-zero downtime cutover protocols and 24/7 post-go-live Managed Services.'
  },
  {
    q: 'Which industries are supported by Knooviq’s SAP transformation practices?',
    a: 'Knooviq serves enterprise leaders across manufacturing, life sciences, retail, consumer goods, energy, utilities, logistics, and professional services. Tailored industry templates accelerate implementation timelines and guarantee statutory compliance from day one.'
  },
  {
    q: 'Does Knooviq provide cloud adoption support for mid-market enterprises?',
    a: 'Yes. Through GROW with SAP and pre-configured cloud accelerators, Knooviq enables fast-growing businesses to deploy scalable public cloud ERP, automated financial governance, and real-time inventory visibility in a predictable, cloud-first delivery model.'
  },
  {
    q: 'What strategic business outcomes can we expect from an engagement?',
    a: 'Engagements deliver unified data models, continuous real-time financial reporting, streamlined supply chain execution, simplified IT landscapes with reduced technical debt, future-proof Clean Core extensibility for autonomous AI, and rigorous regulatory compliance.'
  }
];

export const TransformationPage: React.FC<{ onOpenContact: (service?: string) => void }> = ({ onOpenContact }) => {
  const [activeSection, setActiveSection] = useState<string>('business-transformation');
  const subnavRef = useRef<HTMLDivElement>(null);
  const isClickingRef = useRef(false);

  useEffect(() => {
    document.title = 'SAP Transformation Suite | 10 Strategic Practices | Knooviq Enterprise Solutions';
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  // Handle URL hash on initial load or change
  useEffect(() => {
    if (window.location.hash) {
      const targetId = window.location.hash.replace('#', '');
      const el = document.getElementById(targetId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setActiveSection(targetId);
        }, 150);
      }
    }
  }, []);

  // Scrollspy to detect currently active section
  useEffect(() => {
    const handleScroll = () => {
      if (isClickingRef.current) return;
      const scrollPosition = window.scrollY + 200;

      for (let i = TRANSFORMATION_PRACTICES.length - 1; i >= 0; i--) {
        const section = document.getElementById(TRANSFORMATION_PRACTICES[i].id);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(TRANSFORMATION_PRACTICES[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    isClickingRef.current = true;
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -130;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setTimeout(() => {
      isClickingRef.current = false;
    }, 600);
  };

  return (
    <div className="min-h-screen pt-16 sm:pt-20 bg-[#F8FAFC] dark:bg-[#070E1C] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      {/* =========================================================================
          1. PAGE HERO BANNER (Exact Savic Format - Clean, Focused, No Bloated Ribbons)
          ========================================================================= */}
      <section className="relative py-8 sm:py-12 lg:py-14 overflow-hidden bg-gradient-to-b from-[#0A1931] via-[#14324f] to-[#0A2540] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 shadow-sm mb-3.5">
            <span className="w-2 h-2 rounded-full bg-[#00A3E0] animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#00A3E0] font-mono">
              Enterprise SAP Solutions
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3.5 leading-tight">
            Business-Outcome-Driven <span className="text-[#00A3E0]">SAP Solutions</span>
          </h1>

          <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto mb-6 leading-relaxed font-sans">
            End-to-end SAP transformation solutions architected around your strategic business outcomes — operational excellence, Clean Core agility, and sustainable competitive advantage.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => onOpenContact('Talk to a Solutions Expert')}
              className="btn-primary-gradient shimmer-sweep inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-xl shadow-[#00A3E0]/25"
            >
              <span>Talk to a Solutions Expert</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onOpenContact('Book Discovery Workshop')}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 hover:bg-white/20 px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white transition-all backdrop-blur-sm"
            >
              <span>Book Discovery Workshop</span>
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. STICKY SUB-NAVIGATION BAR (Exact Savic Format)
          Sticky bar with clean pill links and Lucide SVG icons (14x14)
          ========================================================================= */}
      <section className="bg-white dark:bg-[#070E1C] border-b border-gray-200 dark:border-white/10 sticky top-16 sm:top-20 z-40 shadow-sm transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={subnavRef} className="flex gap-1 overflow-x-auto py-3 no-scrollbar">
            {TRANSFORMATION_PRACTICES.map((practice) => {
              const isActive = activeSection === practice.id;
              return (
                <a
                  key={practice.id}
                  data-nav-id={practice.id}
                  href={`#${practice.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(practice.id);
                  }}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-colors ${
                    isActive
                      ? 'text-[#00A3E0] dark:text-cyan-400 bg-blue-50 dark:bg-white/10 font-semibold shadow-xs'
                      : 'text-gray-600 dark:text-slate-300 hover:text-[#00A3E0] hover:bg-blue-50 dark:hover:bg-white/5'
                  }`}
                >
                  {React.cloneElement(practice.icon as React.ReactElement, {
                    className: `w-3.5 h-3.5 shrink-0 ${isActive ? 'text-[#00A3E0] dark:text-cyan-400' : 'text-slate-500 dark:text-slate-400'}`
                  })}
                  <span>{practice.title}</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. ALL 10 TRANSFORMATION SUB-SECTIONS (Exact Savic 5-Column Structure)
          Clean & compact: NO extra 10-card subgrids underneath!
          Left 60%: Icon, Tagline, Title, Summary, 2-Col Capabilities vs Benefits, CTAs
          Right 40%: Gradient Strategic Value Card + 2 Action Cards
          ========================================================================= */}
      <div className="space-y-0">
        {TRANSFORMATION_PRACTICES.map((practice, pIdx) => {
          const isEven = pIdx % 2 === 0;

          return (
            <section
              key={practice.id}
              id={practice.id}
              className={`py-16 sm:py-20 border-b border-gray-100 dark:border-white/10 scroll-mt-28 transition-colors duration-300 ${
                isEven ? 'bg-white dark:bg-[#070E1C]' : 'bg-[#F8FAFC] dark:bg-[#050B17]'
              }`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Savic 5-Column Grid */}
                <div className="grid lg:grid-cols-5 gap-12 items-start">
                  
                  {/* Left Column (3 of 5 cols = 60%) */}
                  <div className="lg:col-span-3">
                    
                    {/* Icon box + uppercase tagline kicker */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#0A1931] to-[#14324f] dark:from-[#00A3E0] dark:to-cyan-600 rounded-xl flex items-center justify-center shadow-md text-white shrink-0">
                        {React.cloneElement(practice.icon as React.ReactElement, { className: 'w-6 h-6 text-white' })}
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-[#00A3E0] uppercase tracking-wider font-mono">
                          {practice.tagline}
                        </div>
                      </div>
                    </div>

                    {/* Section Title */}
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0A1931] dark:text-white mb-4 tracking-tight">
                      {practice.title}
                    </h2>

                    {/* Summary Lead Paragraph */}
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg mb-8 font-sans">
                      {practice.summary}
                    </p>

                    {/* 2-Column Split: Capabilities vs Business Benefits */}
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Column 1: Capabilities (Listing all user items cleanly) */}
                      <div>
                        <h3 className="font-bold text-[#0A1931] dark:text-white mb-4 flex items-center gap-2 text-base">
                          <Zap className="w-4 h-4 text-[#00A3E0]" />
                          <span>Capabilities</span>
                        </h3>
                        <div className="space-y-2.5">
                          {practice.items.map((item) => (
                            <div key={item.name} className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-[#00A3E0] mt-0.5 shrink-0" />
                              <span className="text-sm text-slate-700 dark:text-slate-300 font-medium leading-snug">
                                {item.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Column 2: Business Benefits */}
                      <div>
                        <h3 className="font-bold text-[#0A1931] dark:text-white mb-4 flex items-center gap-2 text-base">
                          <ArrowRight className="w-4 h-4 text-[#00A3E0]" />
                          <span>Business Benefits</span>
                        </h3>
                        <div className="space-y-2.5">
                          {practice.deliverables.map((ben, bIdx) => (
                            <div key={bIdx} className="flex items-start gap-2.5">
                              <div className="w-5 h-5 bg-emerald-100 dark:bg-emerald-500/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                                <div className="w-1.5 h-1.5 bg-emerald-600 dark:bg-emerald-400 rounded-full" />
                              </div>
                              <span className="text-sm text-slate-700 dark:text-slate-300 leading-snug">
                                {ben}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="mt-8 flex flex-wrap gap-3">
                      <button
                        onClick={() => onOpenContact(`SAP Transformation: ${practice.title}`)}
                        className="btn-primary text-sm px-5 py-2.5 rounded-lg font-semibold flex items-center gap-2 bg-[#00A3E0] hover:bg-[#008cc0] text-white shadow-sm transition-all"
                      >
                        <span>Talk to Expert</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => onOpenContact(`Discovery Workshop: ${practice.title}`)}
                        className="btn-secondary text-sm px-5 py-2.5 rounded-lg font-semibold border border-slate-300 dark:border-white/15 bg-white/80 dark:bg-[#0B1528] text-slate-800 dark:text-slate-200 hover:border-[#00A3E0] hover:text-[#00A3E0] dark:hover:text-cyan-400 transition-all"
                      >
                        Book Discovery Session
                      </button>
                    </div>
                  </div>

                  {/* Right Column (2 of 5 cols = 40%) */}
                  <div className="lg:col-span-2">
                    {/* Gradient Strategic Outcomes Card */}
                    <div className="bg-gradient-to-br from-[#0A1931] via-[#14324f] to-[#0A2540] rounded-3xl p-7 sm:p-8 text-white shadow-xl mb-4 border border-white/10">
                      <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-[#00A3E0]" />
                        <span>Strategic Value Drivers</span>
                      </h3>
                      <div className="space-y-4">
                        {practice.valueDrivers.map((driver, vIdx) => (
                          <div key={vIdx} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4 border border-white/10">
                            <div className="w-9 h-9 rounded-lg bg-[#00A3E0]/20 text-[#00A3E0] flex items-center justify-center font-bold text-xs font-mono shrink-0">
                              {driver.badge}
                            </div>
                            <div>
                              <div className="text-white font-semibold text-xs">{driver.title}</div>
                              <div className="text-white/80 text-[11px] leading-snug mt-0.5">{driver.desc}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="grid grid-cols-1 gap-3">
                      <button
                        onClick={() => onOpenContact(`Architecture Blueprint: ${practice.title}`)}
                        className="border border-slate-200 dark:border-white/10 rounded-2xl p-4 bg-white dark:bg-[#0B1528] hover:border-[#00A3E0] hover:shadow-md transition-all group flex items-center justify-between text-left"
                      >
                        <div>
                          <div className="text-[#0A1931] dark:text-white text-sm font-semibold group-hover:text-[#00A3E0] transition-colors">
                            Clean Core Architecture Blueprint
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">
                            Fit-to-standard reference model
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-[#00A3E0] group-hover:translate-x-1 transition-transform" />
                      </button>

                      <button
                        onClick={() => onOpenContact(`Solution Brief: ${practice.title}`)}
                        className="border border-slate-200 dark:border-white/10 rounded-2xl p-4 bg-white dark:bg-[#0B1528] hover:border-[#00A3E0] hover:shadow-md transition-all group flex items-center justify-between text-left"
                      >
                        <div>
                          <div className="text-[#0A1931] dark:text-white text-sm font-semibold group-hover:text-[#00A3E0] transition-colors">
                            Download Solution Brief
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">
                            Comprehensive technical overview
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-[#00A3E0] group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            </section>
          );
        })}
      </div>

      {/* =========================================================================
          4. FREQUENTLY ASKED QUESTIONS (Exact Savic Format)
          ========================================================================= */}
      <section id="faq" className="py-16 sm:py-20 bg-white dark:bg-[#070E1C] border-b border-gray-100 dark:border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-white/5 border border-blue-200 dark:border-white/10 text-xs font-mono font-bold text-[#00A3E0] uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>FAQ</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1931] dark:text-white mb-3 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
              Common questions about Knooviq’s SAP enterprise transformation solutions.
            </p>
          </div>

          <div className="space-y-3">
            {TRANSFORMATION_FAQS.map((faq, idx) => (
              <details
                key={idx}
                className="group rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-[#0B1528] open:bg-white dark:open:bg-[#0B1528] open:shadow-sm transition-all duration-200"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-4 font-semibold text-[#0A1931] dark:text-white text-sm sm:text-base leading-snug list-none select-none">
                  <span>{faq.q}</span>
                  <span className="shrink-0 w-6 h-6 rounded-full bg-slate-200/70 dark:bg-white/10 flex items-center justify-center text-slate-700 dark:text-slate-300 group-open:rotate-45 transition-transform duration-200 text-base leading-none font-bold">
                    +
                  </span>
                </summary>
                <p className="px-6 pb-5 text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-100 dark:border-white/5 pt-3">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. BOTTOM DISCOVERY WORKSHOP CTA BANNER (Exact Savic Format)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC] dark:bg-[#040813] text-center border-t border-slate-200/80 dark:border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1931] dark:text-white mb-4 tracking-tight">
            Ready to Transform Your Enterprise with SAP?
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Schedule a 1-on-1 discovery workshop with our certified SAP solution architects to design your tailored Clean Core modernization roadmap.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onOpenContact('Talk to a Solutions Expert')}
              className="btn-primary-gradient shimmer-sweep inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-xl shadow-[#00A3E0]/25"
            >
              <span>Talk to a Solutions Expert</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onOpenContact('Book Discovery Workshop')}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 dark:border-white/15 bg-white dark:bg-[#0B1528] px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 hover:border-[#00A3E0] hover:text-[#00A3E0] dark:hover:text-cyan-400 transition-all shadow-sm"
            >
              <span>Book Discovery Workshop</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default TransformationPage;
