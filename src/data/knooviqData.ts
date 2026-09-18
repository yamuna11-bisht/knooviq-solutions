import { ServiceItem, IndustryItem, CaseStudyItem, TrainingProgram, JobOpening, SolutionDetail, InsightArticle, ProcessStepItem } from '../types';

export const COMPANY_INFO = {
  name: 'Knooviq Industries Private Limited',
  tagline: 'Transforming Businesses Through Intelligent Technology',
  description: 'A premier enterprise technology & SAP consulting partner empowering global businesses with end-to-end digital transformation, SAP S/4HANA migrations, cloud integration, and corporate enablement.',
  headquarters: {
    address: 'B15, Shree Siddhivinayak Plaza, Opp. City Mall, Off Link Road, Andheri (W)',
    city: 'Mumbai',
    state: 'Maharashtra',
    postalCode: '400053',
    country: 'India',
  },
  contact: {
    email: 'admin@knooviq.com',
    phone: '+91-7900073410',
    secondaryPhone: '+91-8047795745',
    hours: 'Monday – Friday, 9:00 AM – 6:30 PM IST',
  },
  metrics: [
    { value: '100+', label: 'SAP Implementations & Rollouts' },
    { value: '99.8%', label: 'SLA Adherence in Managed Services' },
    { value: '45+', label: 'Certified SAP Specialists' },
    { value: '10+', label: 'Industry Verticals Transformed' },
  ],
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'sap-consulting-outsourcing',
    title: 'SAP Consulting & Outsourcing',
    shortDesc: 'Strategic advisory, business process re-engineering, and dedicated expert talent outsourcing for enterprise SAP ecosystems.',
    fullDesc: 'We provide specialized SAP consulting to align your ERP architecture with strategic business objectives. Our outsourcing models deliver certified, battle-tested functional and technical consultants tailored to your project milestones.',
    iconName: 'Briefcase',
    keyFeatures: [
      'ERP Strategy & Roadmap Alignment',
      'Dedicated & Flexible Talent Staffing',
      'Process Blueprinting & Gap Analysis',
      'Total Cost of Ownership (TCO) Optimization'
    ],
    benefits: [
      'Rapid ramp-up with domain-certified consultants',
      'Up to 40% reduction in implementation overheads',
      'Seamless knowledge transfer and change management'
    ],
    technologies: ['SAP S/4HANA', 'SAP ECC 6.0', 'SAP BTP', 'Solution Manager']
  },
  {
    id: 'sap-application-management',
    title: 'SAP Application Management (AMS)',
    shortDesc: 'Proactive 24/7 lifecycle management, performance monitoring, continuous enhancement, and system health governance.',
    fullDesc: 'Ensure uninterrupted business continuity with Knooviq AMS. We deliver multi-tier (L1-L4) support, preventative maintenance, quarterly release updates, and SLA-driven issue resolution.',
    iconName: 'Server',
    keyFeatures: [
      '24/7/365 Global Incident & Problem Management',
      'SLA-backed L1, L2, L3 and Technical Support',
      'Performance Tuning & Database Optimization',
      'Custom Enhancements & Change Request Delivery'
    ],
    benefits: [
      'Zero-downtime operations and robust reliability',
      'Predictable operational IT expenditures',
      'Continuous system optimization aligned with ITIL standards'
    ],
    technologies: ['SAP HANA DB', 'SAP BTP', 'ITIL Framework', 'SAP Cloud ALM']
  },
  {
    id: 'sap-support',
    title: 'SAP Support Services',
    shortDesc: 'Rapid technical & functional troubleshooting, patch management, security audit compliance, and system stabilization.',
    fullDesc: 'Dedicated on-demand and ongoing technical support for resolving mission-critical bottlenecks, applying security notes, handling tax/regulatory changes, and maintaining database integrity.',
    iconName: 'LifeBuoy',
    keyFeatures: [
      'Critical Hotfix & OSS Note Application',
      'Statutory & Tax Compliance Updates (GST, e-Invoicing)',
      'Security Audit Hardening & Authorizations Review',
      'Disaster Recovery Planning & Health Checks'
    ],
    benefits: [
      'Average response time under 15 minutes for critical tickets',
      'Complete compliance with local fiscal regulations',
      'Enhanced system security posture'
    ],
    technologies: ['SAP Security / GRC', 'SAP Basis', 'SAP FICO', 'SAP SD/MM']
  },
  {
    id: 'sap-integration',
    title: 'SAP Integration & BTP Solutions',
    shortDesc: 'Connecting SAP with heterogeneous cloud platforms, legacy systems, CRM, third-party APIs, and IoT devices.',
    fullDesc: 'Eliminate data silos by interconnecting your core SAP ERP with modern cloud ecosystems, payment gateways, e-commerce portals, and manufacturing execution systems via SAP Integration Suite / CPI.',
    iconName: 'Layers',
    keyFeatures: [
      'SAP Integration Suite / Cloud Platform Integration (CPI)',
      'REST & OData API Gateway Design',
      'Legacy ERP to Cloud SAP Middleware Architecture',
      'Real-Time Event-Driven & IoT Integration'
    ],
    benefits: [
      'Unified single source of truth across enterprise apps',
      'Real-time automated data flow between CRM, SCM & ERP',
      'Reduced manual reconciliation and error rates'
    ],
    technologies: ['SAP CPI / Cloud Integration', 'SAP BTP', 'OData', 'REST/SOAP', 'Kafka']
  },
  {
    id: 'sap-mobility',
    title: 'SAP Mobility & Fiori UX',
    shortDesc: 'Modern role-based mobile workflows, responsive SAP Fiori apps, and real-time field operations enablement.',
    fullDesc: 'Transform legacy green-screen SAP transactions into intuitive, modern, touch-friendly mobile and web experiences using SAP Fiori and custom responsive web apps.',
    iconName: 'Smartphone',
    keyFeatures: [
      'SAP Fiori Launchpad & Custom App Development',
      'Warehouse & Field Service Mobile Enablement',
      'Offline-First Data Sync & Barcode/RFID Integration',
      'Cross-Device Executive Dashboards & Approval Flows'
    ],
    benefits: [
      'Boost employee productivity by up to 60%',
      'Instant PO approvals and inventory tracking on mobile',
      'Minimal training needed for end-users'
    ],
    technologies: ['SAP Fiori', 'SAPUI5', 'SAP Mobile Services', 'HTML5/TypeScript']
  },
  {
    id: 'sap-migration',
    title: 'SAP S/4HANA Migration & Upgrades',
    shortDesc: 'Risk-mitigated transition paths: Greenfield implementations, Brownfield system conversions, and Cloud moves.',
    fullDesc: 'Seamlessly migrate your legacy SAP ECC 6.0 landscape to modern SAP S/4HANA on private or public cloud. We ensure comprehensive data cleansing, custom code remediation, and business downtime minimization.',
    iconName: 'RefreshCw',
    keyFeatures: [
      'Readiness Assessment & Business Scenario Modeling',
      'Brownfield Conversion & Selective Data Transition',
      'Greenfield Implementation with Clean Core Principles',
      'Custom ABAP Code Remediation & HANA DB Optimization'
    ],
    benefits: [
      'Near-zero business downtime during cutover',
      'Unlock in-memory real-time analytics and predictive insights',
      'Streamlined processes with clean digital core'
    ],
    technologies: ['SAP S/4HANA 2023', 'SAP Readiness Check', 'SAP ACTIVATE', 'SAP SLT']
  }
];

export const S4HANA_OFFERINGS = {
  headline: 'Accelerate Your Digital Evolution with SAP S/4HANA',
  subheadline: 'Future-proof your enterprise with the next-generation intelligent ERP suite designed for speed, agility, and live analytics.',
  pillars: [
    {
      title: 'Greenfield Implementation',
      badge: 'Fresh Start',
      description: 'Re-engineer and modernize processes from the ground up, adopting SAP best practices and a clean core architecture for maximum long-term flexibility.',
      points: ['Elimination of legacy technical debt', 'Pre-configured industry best practices', 'Native cloud-first architecture']
    },
    {
      title: 'Brownfield Conversion',
      badge: 'System Conversion',
      description: 'Upgrade your existing SAP ECC system to S/4HANA while preserving custom configurations, historical transaction data, and proven workflows.',
      points: ['Preserves valuable historical business data', 'Shortened project timelines & lower disruption', 'Automated code remediation tools']
    },
    {
      title: 'Selective Data Transition (Hybrid)',
      badge: 'Phased Migration',
      description: 'Consolidate multiple legacy ERP landscapes into a unified S/4HANA instance, migrating selected business units or historical timeframes.',
      points: ['Flexible unit-by-unit migration', 'Carve-outs & merger consolidation', 'Targeted master data cleansing']
    }
  ]
};

export const PROCESS_STEPS = [
  {
    step: '01',
    phase: 'Discover',
    title: 'Landscape Audit & Readiness Assessment',
    description: 'We perform a full inventory of your current ERP environment, data structures, custom code objects, and business workflows to establish baseline readiness.',
    deliverables: ['SAP Readiness Check Analysis', 'Custom Code Impact Report', 'Business Process Benchmark']
  },
  {
    step: '02',
    phase: 'Analyze',
    title: 'Gap Analysis & Clean Core Strategy',
    description: 'Evaluate fit-to-standard opportunities, identify non-standard enhancements, and formulate a decoupled side-by-side extension roadmap on SAP BTP.',
    deliverables: ['Fit-to-Standard Matrix', 'Clean Core Decoupling Plan', 'TCO Reduction Projection']
  },
  {
    step: '03',
    phase: 'Strategize',
    title: 'Architecture Blueprint & Migration Roadmap',
    description: 'Architect the target target state on S/4HANA Cloud or On-Premise with detailed cutover schedules, security boundaries, and SLA frameworks.',
    deliverables: ['Enterprise Target Architecture', 'Step-by-Step Cutover Timeline', 'Risk Mitigation Protocols']
  },
  {
    step: '04',
    phase: 'Implement',
    title: 'Agile Configuration, Data Migration & Testing',
    description: 'Iterative sprint-based configuration, automated data extraction/cleansing/loading, middleware integration, and thorough user acceptance testing.',
    deliverables: ['Automated ETL Pipeline', 'Integrated OData / CPI Endpoints', 'UAT Sign-Off & Cutover Runbook']
  },
  {
    step: '05',
    phase: 'Optimize',
    title: 'Cutover, Hypercare & Performance Tuning',
    description: 'Near-zero downtime cutover execution, 24/7 hypercare team support, database index optimization, and real-time user adoption tracking.',
    deliverables: ['Flawless Production Cutover', 'Hypercare Incident Resolution', 'HANA In-Memory Query Tuning']
  },
  {
    step: '06',
    phase: 'Support',
    title: '24/7 SLA-Backed AMS & Continuous Innovation',
    description: 'Proactive lifecycle management, preventive maintenance, quarterly release adoption, and SLA-governed support for sustained enterprise excellence.',
    deliverables: ['Multi-Tier SLA Support (L1-L4)', 'Continuous Security Audits', 'Ongoing Innovation Enhancements']
  }
];

export const DETAILED_SOLUTIONS_DATA: Record<string, SolutionDetail> = {
  'sap-s4hana': {
    id: 'sap-s4hana',
    slug: 'sap-s4hana',
    title: 'SAP S/4HANA Enterprise Transformation',
    subtitle: 'Next-Generation Intelligent ERP Suite for Real-Time Global Business Operations',
    heroDescription: 'KNOOVIQ delivers seamless, risk-free migrations to SAP S/4HANA Cloud and On-Premise. Harness in-memory computing, automated workflows, and embedded AI to transform your business velocity.',
    overview: [
      'SAP S/4HANA is the digital core that unifies finance, supply chain, manufacturing, and customer operations on a single in-memory database.',
      'Our team utilizes SAP ACTIVATE methodology combined with proprietary assessment accelerators to ensure rapid time-to-value, clean core compliance, and near-zero cutover downtime.'
    ],
    coreCapabilities: [
      {
        title: 'Universal Journal (ACDOCA) Financials',
        description: 'Single source of truth uniting General Ledger, Asset Accounting, Cost Controlling, and Profitability Analysis in real time.',
        points: ['Instant month-end closing', 'Live management reporting', 'Elimination of reconciliation overhead']
      },
      {
        title: 'Live Material Requirements Planning (MRP Live)',
        description: 'Accelerate MRP runs from hours to minutes directly in HANA in-memory database, providing instantaneous demand-supply visibility.',
        points: ['Real-time procurement triggers', 'Dynamic safety stock adjustment', 'Supplier lead-time optimization']
      },
      {
        title: 'Clean Core Architecture on SAP BTP',
        description: 'Keep the core ERP standard while building scalable custom business apps and integrations side-by-side on SAP Business Technology Platform.',
        points: ['Frictionless future upgrades', 'Modular API-first connectivity', 'Lower maintenance costs']
      }
    ],
    architecturePillars: [
      { title: 'In-Memory HANA DB', description: 'Massively parallel data processing eliminating batch bottlenecks.' },
      { title: 'Role-Based Fiori UX', description: 'Intuitive modern web and mobile apps tailored for each employee role.' },
      { title: 'Embedded Analytics & AI', description: 'Predictive forecasting and automated invoice matching within transactions.' }
    ],
    businessBenefits: [
      { metric: '70%', label: 'Faster Financial Close', description: 'Drastically compressed reporting timelines.' },
      { metric: '4x', label: 'MRP Execution Velocity', description: 'Real-time supply chain response.' },
      { metric: '0', label: 'Unplanned Cutover Downtime', description: 'Predictable business continuity.' }
    ],
    deliverables: [
      'Comprehensive SAP Readiness Check Analysis',
      'Automated Custom ABAP Code Remediation',
      'Production Cutover Runbook & 24/7 Hypercare Support'
    ],
    technologies: ['SAP S/4HANA 2023', 'SAP HANA DB', 'SAP BTP', 'SAP Fiori', 'SAP Solution Manager']
  },
  'sap-consulting': {
    id: 'sap-consulting',
    slug: 'sap-consulting',
    title: 'SAP Strategic Consulting & Advisory',
    subtitle: 'Aligning Technology Architecture with High-Impact Business Objectives',
    heroDescription: 'From ERP roadmap strategy to business process re-engineering (BPR), KNOOVIQ provides specialized advisory services to maximize your enterprise software investment.',
    overview: [
      'We combine deep functional domain knowledge across FMCG, Manufacturing, Energy, and Retail with technical mastery of the SAP ecosystem.',
      'Our consulting engagements deliver clear, actionable transformation blueprints designed to optimize Total Cost of Ownership (TCO) and accelerate ROI.'
    ],
    coreCapabilities: [
      {
        title: 'ERP Roadmap & Architecture Advisory',
        description: 'Comprehensive evaluation of existing software landscape to architect a future-ready, scalable ERP ecosystem.',
        points: ['Multi-year IT roadmap creation', 'Cloud vs On-Premise feasibility study', 'License & infrastructure cost optimization']
      },
      {
        title: 'Business Process Re-Engineering (BPR)',
        description: 'Eliminate outdated manual handoffs and optimize operational flows aligned with industry-leading SAP standard practices.',
        points: ['End-to-end value stream mapping', 'Bottleneck elimination', 'Standardization across multi-company entities']
      }
    ],
    architecturePillars: [
      { title: 'Best Practice Frameworks', description: 'Leveraging SAP Model Company templates for rapid deployment.' },
      { title: 'Change Governance', description: 'Structured stakeholder management ensuring rapid user adoption.' }
    ],
    businessBenefits: [
      { metric: '40%', label: 'Lower Implementation TCO', description: 'Eliminating redundant custom code and scope creep.' },
      { metric: '100%', label: 'Audit & Compliance Alignment', description: 'Full adherence to regulatory requirements.' }
    ],
    deliverables: [
      'Enterprise Target Operating Model Blueprint',
      'Process Gap & Fitment Matrix',
      'Executive Transformation Business Case'
    ],
    technologies: ['SAP Best Practices', 'SAP Signavio', 'LeanIX', 'ITIL Framework']
  },
  'sap-implementation': {
    id: 'sap-implementation',
    slug: 'sap-implementation',
    title: 'SAP End-to-End Implementation',
    subtitle: 'Flawless Full-Lifecycle ERP Deployment Across Global Operations',
    heroDescription: 'Deliver complex greenfield rollouts on time and within budget using our proven SAP ACTIVATE implementation methodology and domain-certified specialist teams.',
    overview: [
      'We oversee the entire implementation lifecycle—from initial discovery and blueprinting to system configuration, rigorous testing, data migration, and live go-live cutover.',
      'Our disciplined project governance ensures complete transparent tracking of milestones, deliverables, and risk mitigation.'
    ],
    coreCapabilities: [
      {
        title: 'SAP ACTIVATE Sprint Governance',
        description: 'Agile methodology driving iterative design validation, continuous stakeholder alignment, and reduced delivery risks.',
        points: ['Prepare, Explore, Realize, Deploy, Run phases', 'Pre-configured best practice demo systems', 'Iterative sprint demo sign-offs']
      },
      {
        title: 'Comprehensive Master Data Migration',
        description: 'Automated extraction, validation, enrichment, and loading of historical master and transactional records.',
        points: ['Automated data cleansing scripts', 'Mock migration cutover trials', 'Data validation audit trails']
      }
    ],
    architecturePillars: [
      { title: 'Rigorous Quality Gates', description: 'Multi-stage validation before approving system promotion.' },
      { title: 'End-to-End Integration', description: 'Seamless connectivity with CRM, MES, banks, and supplier portals.' }
    ],
    businessBenefits: [
      { metric: '99.8%', label: 'On-Time Milestone Delivery', description: 'Disciplined project execution track record.' },
      { metric: '60%', label: 'Faster Data Cleansing', description: 'Accelerated master data preparation.' }
    ],
    deliverables: [
      'Full Functional & Technical Design Specifications (FDD/TDD)',
      'Configured SAP Core Landscape',
      'End-User Standard Operating Procedures (SOPs)'
    ],
    technologies: ['SAP ACTIVATE', 'SAP S/4HANA', 'SAP Migration Cockpit', 'SAP Solution Manager']
  },
  'sap-migration': {
    id: 'sap-migration',
    slug: 'sap-migration',
    title: 'SAP S/4HANA Migration & Cloud Conversion',
    subtitle: 'Risk-Mitigated Transitions from Legacy SAP ECC 6.0 to Intelligent Cloud ERP',
    heroDescription: 'Safeguard historical enterprise data while transitioning to modern in-memory architecture with KNOOVIQ automated code remediation and proven cutover protocols.',
    overview: [
      'Whether your strategy calls for a Brownfield system conversion, a Greenfield fresh start, or a Hybrid Selective Data Transition, we ensure seamless execution with zero data loss.',
      'Our team specializes in database upgrades to SAP HANA DB, custom ABAP code modernization, and cloud hyperscaler infrastructure migration on AWS or Azure.'
    ],
    coreCapabilities: [
      {
        title: 'Brownfield System Conversion',
        description: 'Upgrade your existing ECC 6.0 system in-place to S/4HANA, preserving decades of historical transaction records and business configuration.',
        points: ['Automated SUM (Software Update Manager) execution', 'Custom code syntax and performance remediation', 'Universal Journal balance migration']
      },
      {
        title: 'Selective Data Transition',
        description: 'Carve out active company codes and migrate only relevant historical windows into a clean S/4HANA instance.',
        points: ['Flexible entity-by-entity rollout', 'Historical data archiving', 'Consolidation of fragmented ERP instances']
      }
    ],
    architecturePillars: [
      { title: 'Zero Data Loss Protocol', description: 'Cryptographically verified database reconciliation post-migration.' },
      { title: 'Optimized Downtime', description: 'Downtime-optimized conversion reducing operational freeze window.' }
    ],
    businessBenefits: [
      { metric: '< 24 hrs', label: 'Total Cutover Window', description: 'Weekend conversion minimizing business impact.' },
      { metric: '100%', label: 'Data Integrity Verification', description: 'Flawless balance reconciliation.' }
    ],
    deliverables: [
      'HANA DB Sizing & Capacity Architecture',
      'Remediated Custom ABAP Codebase',
      'Signed Go-Live Verification Certificate'
    ],
    technologies: ['SAP SUM / DMO', 'SAP Readiness Check', 'SAP SLT', 'AWS / Microsoft Azure']
  },
  'sap-support': {
    id: 'sap-support',
    slug: 'sap-support',
    title: 'SAP Support & Application Management (AMS)',
    subtitle: '24/7/365 SLA-Governed Enterprise Maintenance, Security & Continuous Enhancement',
    heroDescription: 'Guarantee uninterrupted business continuity with dedicated multi-tier support teams, proactive system health monitoring, and fast incident resolution.',
    overview: [
      'KNOOVIQ Application Management Services (AMS) provide flexible support models tailored to your SLA requirements, covering functional troubleshooting, technical basis administration, patch updates, and regulatory compliance.',
      'We monitor database performance, background jobs, and integration endpoints 24/7 to catch and resolve anomalies before they impact your operations.'
    ],
    coreCapabilities: [
      {
        title: 'Multi-Tier SLA Support (L1 - L4)',
        description: 'Dedicated helpdesk providing rapid first-response and expert escalation for functional (FICO, MM, SD, PP) and technical issues.',
        points: ['< 15 min response time for P1 critical incidents', 'Root-cause problem management', 'ITIL-aligned ticketing workflows']
      },
      {
        title: 'Proactive Health & Security Monitoring',
        description: 'Continuous monitoring of memory consumption, lock entries, short dumps, backup integrity, and SAP security notes.',
        points: ['Early detection of performance bottlenecks', 'Regular OSS note and security patch application', 'Quarterly disaster recovery simulations']
      }
    ],
    architecturePillars: [
      { title: 'Guaranteed SLA Uptime', description: '99.8% SLA adherence with penalty-backed performance commitments.' },
      { title: 'Continuous Enhancements', description: 'Dedicated sprint bandwidth for change requests and reports.' }
    ],
    businessBenefits: [
      { metric: '99.8%', label: 'SLA Adherence Rate', description: 'Dependable operational peace of mind.' },
      { metric: '< 15 min', label: 'Critical Ticket Response', description: 'Rapid emergency mobilization.' }
    ],
    deliverables: [
      'Monthly Service Level & System Health Reports',
      'Quarterly Security Audit & Compliance Reviews',
      'Ongoing User Support & Change Management'
    ],
    technologies: ['SAP Cloud ALM', 'SAP Solution Manager', 'ITIL v4', 'SAP Security / GRC']
  },
  'sap-outsourcing': {
    id: 'sap-outsourcing',
    slug: 'sap-outsourcing',
    title: 'SAP Talent Outsourcing & Staff Augmentation',
    subtitle: 'Deploy Battle-Tested, Domain-Certified SAP Specialists On-Demand',
    heroDescription: 'Scale your internal SAP engineering and functional consulting capacity with senior talent pre-vetted for enterprise migrations, integrations, and ongoing support.',
    overview: [
      'Finding certified SAP talent with hands-on S/4HANA experience can be challenging. KNOOVIQ provides dedicated functional consultants, ABAP on HANA developers, and Basis architects ready to integrate into your agile teams.',
      'Our flexible engagement models range from short-term milestone staffing to multi-year dedicated offshore development centers (ODC).'
    ],
    coreCapabilities: [
      {
        title: 'Dedicated Functional Specialists',
        description: 'Senior consultants across FICO, MM, SD, PP, PM, QM, and SuccessFactors with deep domain experience.',
        points: ['Immediate onboarding within 5-10 business days', 'Proven full-lifecycle implementation backgrounds', 'Autonomous problem-solving capabilities']
      },
      {
        title: 'Technical & BTP Developers',
        description: 'Expert developers proficient in modern ABAP 7.5+, CDS Views, RAP, AMDP, OData APIs, and SAP BTP Integration Suite.',
        points: ['Clean Core compliant coding standards', 'Deep understanding of integration protocols (REST, SOAP, Kafka)', 'Thorough unit test coverage & documentation']
      }
    ],
    architecturePillars: [
      { title: 'Pre-Vetted Excellence', description: 'Top 5% talent vetted through rigorous technical and domain assessments.' },
      { title: 'Seamless Ramp-Up', description: 'Pre-configured secure developer environments and rapid knowledge transfer.' }
    ],
    businessBenefits: [
      { metric: '45+', label: 'Certified Specialists', description: 'Extensive bench of domain experts.' },
      { metric: '5 Days', label: 'Average Onboarding Time', description: 'Accelerated resource deployment.' }
    ],
    deliverables: [
      'Dedicated Certified SAP Resource Staffing',
      'Bi-Weekly Velocity & Milestone Reports',
      'Structured Knowledge Handover Documentation'
    ],
    technologies: ['SAP S/4HANA', 'ABAP on HANA', 'SAP BTP', 'SAP Fiori', 'SAP Basis']
  },
  'sap-training': {
    id: 'sap-training',
    slug: 'sap-training',
    title: 'Enterprise Corporate SAP Training',
    subtitle: 'Empowering Workforces with Role-Based, Hands-On SAP S/4HANA Certification Pathways',
    heroDescription: 'Upskill your internal IT teams and business process owners with intensive, hands-on corporate training led by senior industry practitioners.',
    overview: [
      'A successful digital transformation depends on user adoption. KNOOVIQ delivers customized corporate training programs designed around your specific business processes and system configurations.',
      'Our training tracks combine conceptual architecture lectures with live SAP sandbox exercises and official certification exam preparation.'
    ],
    coreCapabilities: [
      {
        title: 'Functional Certification Tracks',
        description: 'In-depth modules for S/4HANA Finance (FICO), Sourcing & Procurement (MM), and Sales & Distribution (SD).',
        points: ['Real-world enterprise case studies', 'Hands-on live system configuration exercises', 'Official certification exam mock tests']
      },
      {
        title: 'Technical Developer Masterclasses',
        description: 'Modern developer enablement covering ABAP on HANA, CDS Views, AMDP, SAP Fiori / UI5, and BTP Integration Suite.',
        points: ['Clean core programming techniques', 'API design and OData services', 'Modern debugging and profiling tools']
      }
    ],
    architecturePillars: [
      { title: 'Live Sandbox Environments', description: 'Dedicated high-performance SAP S/4HANA training instances.' },
      { title: 'Practitioner-Led Instruction', description: 'Trainers with 10+ years of active field implementation experience.' }
    ],
    businessBenefits: [
      { metric: '85%', label: 'Certification Pass Rate', description: 'Proven methodology for credential achievement.' },
      { metric: '2.5x', label: 'Faster User Adoption', description: 'Accelerated transition to S/4HANA interfaces.' }
    ],
    deliverables: [
      'Curated Enterprise Training Curriculum & Labs',
      'Individual Student Progress Tracking & Assessments',
      'Certificate of Completion & Post-Training Mentorship'
    ],
    technologies: ['SAP S/4HANA Sandbox', 'SAP Learning Hub', 'SAP Enable Now', 'SAP BTP Sandbox']
  },
  'sap-business-ai': {
    id: 'sap-business-ai',
    slug: 'sap-business-ai',
    title: 'SAP Business AI & Joule Copilot',
    subtitle: 'Contextual Generative AI Embedded Across Finance, Supply Chain, HR & Customer Workflows',
    heroDescription: 'Empower your workforce with SAP Joule—the generative AI copilot that truly understands your business context. Accelerate decision-making, automate complex three-way matching, and generate predictive supply forecasts.',
    overview: [
      'SAP Business AI is built directly into core SAP enterprise applications, providing contextual insights without requiring data replication to third-party models.',
      'KNOOVIQ architects secure, enterprise-grade AI extensions using SAP AI Core and Foundation Models on SAP BTP, strictly adhering to role-based access and data sovereignty.'
    ],
    coreCapabilities: [
      {
        title: 'Joule Natural Language Assistant',
        description: 'Conversational copilot integrated across SAP S/4HANA, SuccessFactors, and Ariba to trigger transactions, summarize reports, and draft RFQs.',
        points: ['Context-aware enterprise search', 'Automated transaction drafting & execution', 'Multi-system conversational navigation']
      },
      {
        title: 'Embedded Predictive Automation',
        description: 'Automate high-volume financial accounting matching, vendor invoice dispute resolution, and predictive delivery delays.',
        points: ['Up to 92% automated invoice reconciliation', 'Predictive customer churn mitigation', 'Autonomous inventory restocking triggers']
      },
      {
        title: 'SAP AI Core & Foundation Model Studio',
        description: 'Custom fine-tuned generative AI agents running securely on SAP Business Technology Platform with zero data leakage.',
        points: ['Enterprise LLM orchestration', 'Vector embeddings on HANA Cloud', 'Strict ethical AI guardrails & GDPR compliance']
      }
    ],
    architecturePillars: [
      { title: 'In-Context Intelligence', description: 'AI directly embedded in daily business screens and approval flows.' },
      { title: 'Zero Data Compromise', description: 'Enterprise data remains strictly protected within your private SAP tenant.' },
      { title: 'Continuous Model Tuning', description: 'Self-improving accuracy based on operational feedback loops.' }
    ],
    businessBenefits: [
      { metric: '55%', label: 'Reduction in Manual Data Tasks', description: 'Substantial boost in staff productivity.' },
      { metric: '90%', label: 'Automated Invoice Matching', description: 'Instant accounts payable cycle velocity.' },
      { metric: '3x', label: 'Faster Executive Decision Speed', description: 'Real-time contextual summaries on demand.' }
    ],
    deliverables: [
      'SAP Business AI Readiness & Security Assessment',
      'Joule Copilot Tenant Provisioning & User Role Setup',
      'Custom SAP AI Core Workflow & Vector Search Integration'
    ],
    technologies: ['SAP Joule Copilot', 'SAP AI Core / AI Launchpad', 'SAP HANA Cloud Vector Engine', 'SAP BTP']
  },
  'rise-with-sap': {
    id: 'rise-with-sap',
    slug: 'rise-with-sap',
    title: 'RISE with SAP (Cloud Transformation)',
    subtitle: 'Comprehensive Business Transformation as a Service with Guaranteed Cloud SLA & Clean Core',
    heroDescription: 'Modernize mission-critical enterprise workloads into a managed cloud ERP with RISE with SAP. Single-contract governance covering S/4HANA Cloud, SAP BTP credits, SAP Signavio process mining, and hyperscaler infrastructure.',
    overview: [
      'RISE with SAP is a holistic offering that delivers business-driven cloud ERP at your pace, bundling cloud software, infrastructure management, and continuous optimization into one SLA.',
      'KNOOVIQ serves as your transformation partner, guiding architecture design, clean core code decoupling, custom extension migration to BTP, and cutover execution.'
    ],
    coreCapabilities: [
      {
        title: 'S/4HANA Cloud Private & Public Editions',
        description: 'Fully managed enterprise ERP on top hyperscalers (AWS, Azure, Google Cloud) with automated patch management and 99.9% uptime.',
        points: ['Standardized infrastructure tiering', 'Automated security updates & backups', 'Elastic cloud computing scalability']
      },
      {
        title: 'Embedded SAP Signavio Process Insights',
        description: 'Continuous analysis of historical transactional workflows to benchmark performance against industry peers and eliminate bottlenecks.',
        points: ['Instant process mining on live ERP logs', 'Automated root-cause bottleneck detection', 'Quantified ROI simulation for improvements']
      },
      {
        title: 'Clean Core Advisory & BTP Entitlement',
        description: 'Decouple legacy Z-modifications and transition custom logic into side-by-side microservices on SAP BTP.',
        points: ['Frictionless bi-annual cloud upgrades', 'Zero disruption to custom extensions', 'API-first enterprise connectivity']
      }
    ],
    architecturePillars: [
      { title: 'Single Cloud Governance', description: 'One SLA covering software, cloud hosting, and technical operations.' },
      { title: 'Continuous Modernization', description: 'Seamless access to latest SAP innovation releases and Joule AI.' }
    ],
    businessBenefits: [
      { metric: '30%', label: 'Lower Infrastructure TCO', description: 'Optimized cloud hyperscaler efficiency.' },
      { metric: '2x', label: 'Faster Upgrade Cadence', description: 'Rapid feature rollout without regression.' }
    ],
    deliverables: [
      'RISE with SAP Sizing, TCO & Hyperscaler Architecture Plan',
      'Clean Core Code Remediation & BTP Decoupling Blueprint',
      'End-to-End Migration Cutover & 24/7 Cloud Hypercare'
    ],
    technologies: ['RISE with SAP', 'SAP S/4HANA Cloud Private Edition', 'SAP BTP', 'SAP Signavio', 'AWS / Azure / GCP']
  },
  'grow-with-sap': {
    id: 'grow-with-sap',
    slug: 'grow-with-sap',
    title: 'GROW with SAP for Midmarket',
    subtitle: 'Predictable, Fast-Track Public Cloud ERP Implementation with Built-In Industry Best Practices',
    heroDescription: 'Scale rapidly with GROW with SAP—a purpose-built offering for midmarket enterprises and fast-growing organizations. Achieve rapid go-live in weeks with fixed-scope adoption and pre-configured industry processes.',
    overview: [
      'GROW with SAP provides midsize businesses with the speed, predictability, and continuous innovation of SAP S/4HANA Cloud Public Edition.',
      'With transparent pricing, pre-configured best practices, and automated testing, KNOOVIQ accelerates time-to-value while keeping operational costs tightly controlled.'
    ],
    coreCapabilities: [
      {
        title: 'Rapid Best-Practice Activation',
        description: 'Deploy ready-to-run business processes across Finance, Sales, Procurement, and Manufacturing within 8 to 16 weeks.',
        points: ['Standardized industry scope templates', 'Automated test scripts & verification', 'Elimination of lengthy custom blueprinting']
      },
      {
        title: 'Continuous Cloud Innovation',
        description: 'Automatic bi-annual software updates delivered directly by SAP with zero manual upgrade friction.',
        points: ['Instant access to latest AI and regulatory updates', 'Zero hardware maintenance overhead', 'Strict public cloud compliance standards']
      }
    ],
    architecturePillars: [
      { title: 'Turnkey Predictability', description: 'Fixed-price, fixed-timeline implementation methodology.' },
      { title: 'Standard-First Mindset', description: 'Adopt proven global workflows and minimize custom code debt.' }
    ],
    businessBenefits: [
      { metric: '8-12 Wks', label: 'Average Go-Live Timeline', description: 'Rapid deployment to active production.' },
      { metric: '50%', label: 'Lower Implementation Cost', description: 'Pre-packaged industry configurations.' }
    ],
    deliverables: [
      'GROW with SAP Fit-to-Standard Evaluation',
      'Rapid Cloud Instance Provisioning & Master Data Upload',
      'User Onboarding & Standard SOP Training'
    ],
    technologies: ['GROW with SAP', 'SAP S/4HANA Cloud Public Edition', 'SAP BTP', 'SAP Central Business Configuration']
  },
  'sap-btp': {
    id: 'sap-btp',
    slug: 'sap-btp',
    title: 'SAP BTP (Business Technology Platform) & SAP Build',
    subtitle: 'The Unified Platform for Side-by-Side Clean Core Extensions, Integrations & Low-Code Innovation',
    heroDescription: 'Transform your integration and application landscape with SAP BTP. Build custom mobile & web applications, automate multi-system business processes, and unify analytics with SAP Build and Integration Suite.',
    overview: [
      'SAP Business Technology Platform is the architectural foundation that brings together data management, analytics, artificial intelligence, application development, and automation in one unified environment.',
      'KNOOVIQ leverages SAP BTP to build decoupled, clean core extensions and mission-critical cloud integrations that scale independently of core ERP release cycles.'
    ],
    coreCapabilities: [
      {
        title: 'SAP Integration Suite & API Management',
        description: 'Connect heterogeneous cloud applications, on-premise systems, and third-party SaaS platforms with pre-built enterprise connectors.',
        points: ['1,500+ pre-packaged integration flows', 'Event-Driven Architecture with SAP Event Mesh', 'Secure B2B / EDI Trading Partner Management']
      },
      {
        title: 'SAP Build (Apps, Process Automation & Work Zone)',
        description: 'Empower developers and business technologists to create custom apps, approval workflows, and unified digital work zones.',
        points: ['Visual low-code / no-code application design', 'Robotic Process Automation (RPA) bots', 'Enterprise unified digital workplace launchpads']
      },
      {
        title: 'ABAP Cloud & Side-by-Side Extensibility',
        description: 'Develop enterprise-grade custom extensions using ABAP Cloud, RAP (RESTful Application Programming), and SAP CAP on NodeJS/Java.',
        points: ['Guaranteed clean core upgrade safety', 'Native consumption of S/4HANA OData APIs', 'High-throughput microservices architecture']
      }
    ],
    architecturePillars: [
      { title: 'Decoupled Agility', description: 'Build and deploy extensions without modifying core ERP standard code.' },
      { title: 'Multi-Cloud Portability', description: 'Run seamlessly across AWS, Microsoft Azure, and GCP.' }
    ],
    businessBenefits: [
      { metric: '60%', label: 'Faster App Development', description: 'Accelerated low-code / pro-code velocity.' },
      { metric: '100%', label: 'Clean Core Compliance', description: 'Zero core modification upgrade guarantee.' }
    ],
    deliverables: [
      'SAP BTP Architecture Blueprint & Account Setup',
      'Integration Flow (iFlow) Catalog & API Gateway Configuration',
      'Custom SAP Build / RAP Cloud Application Deployment'
    ],
    technologies: ['SAP BTP', 'SAP Integration Suite', 'SAP Build Apps', 'SAP Build Process Automation', 'ABAP Cloud']
  },
  'sap-signavio': {
    id: 'sap-signavio',
    slug: 'sap-signavio',
    title: 'SAP Signavio Process Transformation Suite',
    subtitle: 'Data-Driven Process Mining, Simulation & Enterprise Journey Modeling for Continuous Operational Excellence',
    heroDescription: 'Gain unprecedented transparency into your end-to-end operational workflows. Mine real-time transaction data from SAP and third-party systems to pinpoint bottlenecks, simulate improvements, and drive automated compliance.',
    overview: [
      'SAP Signavio delivers actionable process intelligence that bridges the gap between executive strategy and daily operational reality.',
      'KNOOVIQ utilizes Signavio Process Insights, Process Intelligence, and Process Manager to baseline your existing workflows, optimize lead times, and accelerate S/4HANA migrations.'
    ],
    coreCapabilities: [
      {
        title: 'Process Insights & Live Benchmarking',
        description: 'Instant data mining over SAP transactional logs to diagnose inefficiencies across Procure-to-Pay, Order-to-Cash, and Record-to-Report.',
        points: ['Plug-and-play connection in under 24 hours', 'Comparison against global industry peer benchmarks', 'Pre-configured optimization recommendations']
      },
      {
        title: 'Process Mining & Conformance Checking',
        description: 'Discover hidden process variations, identify Maverick buying, and enforce standard operational path compliance.',
        points: ['Automated Petri-net process visualization', 'Root cause discovery for shipment delays', 'Real-time compliance monitoring & alerts']
      },
      {
        title: 'Simulation & Journey Modeling',
        description: 'Simulate the business impact of proposed process changes before investing in software customization.',
        points: ['What-if scenario modeling and cost calculation', 'Interactive collaboration across business teams', 'Integrated customer journey & employee touchpoints']
      }
    ],
    architecturePillars: [
      { title: 'Evidence-Based Optimization', description: 'Decisions guided by real transactional data rather than subjective opinions.' },
      { title: 'Closed-Loop Governance', description: 'Continuous automated tracking from discovery to realized ROI.' }
    ],
    businessBenefits: [
      { metric: '40%', label: 'Cycle Time Reduction', description: 'Eliminating manual approval loops.' },
      { metric: '80%', label: 'Process Harmonization', description: 'Unified operating models across business units.' }
    ],
    deliverables: [
      'SAP Signavio Process Insights Diagnostic Report',
      'Target Value Stream Map & Conformance Matrix',
      'Automated Bottleneck Remediation Roadmap'
    ],
    technologies: ['SAP Signavio Process Insights', 'SAP Signavio Process Intelligence', 'SAP Signavio Process Manager']
  },
  'sap-datasphere': {
    id: 'sap-datasphere',
    slug: 'sap-datasphere',
    title: 'SAP Datasphere & Analytics Cloud (SAC)',
    subtitle: 'The Next-Generation Business Data Fabric Unifying Real-Time SAP & Non-SAP Enterprise Data',
    heroDescription: 'Unleash the full power of your enterprise data with SAP Datasphere and SAP Analytics Cloud (SAC). Build a unified data fabric that retains rich business context without data duplication.',
    overview: [
      'SAP Datasphere is the comprehensive data service that enables every organization to deliver meaningful data to every data consumer, with business context and logic preserved.',
      'KNOOVIQ designs scalable semantic data models, real-time boardrooms, and predictive financial planning models combining SAP S/4HANA, Salesforce, Snowflake, and legacy data warehouses.'
    ],
    coreCapabilities: [
      {
        title: 'Business Data Fabric Architecture',
        description: 'Access real-time data across hybrid and multi-cloud environments while maintaining critical business semantics and authorizations.',
        points: ['Zero data movement via federation & virtualization', 'Self-service data spaces for business departments', 'Built-in SAP business content and semantic data models']
      },
      {
        title: 'SAP Analytics Cloud (SAC) Planning & BI',
        description: 'Unified Business Intelligence, augmented analytics with Joule AI, and collaborative enterprise planning in a single cloud solution.',
        points: ['Executive digital boardrooms with live drill-down', 'Integrated financial budgeting & predictive forecasting', 'Natural language query exploration & automated anomaly detection']
      }
    ],
    architecturePillars: [
      { title: 'Semantic Integrity', description: 'Retain currencies, hierarchies, and accounting logic automatically.' },
      { title: 'Unified Governance', description: 'Single security catalog across enterprise-wide analytical assets.' }
    ],
    businessBenefits: [
      { metric: '10x', label: 'Faster Analytical Queries', description: 'HANA in-memory data processing power.' },
      { metric: '100%', label: 'Single Source of Truth', description: 'Elimination of contradictory spreadsheet metrics.' }
    ],
    deliverables: [
      'SAP Datasphere Space Architecture & Federation Setup',
      'SAC Executive Dashboard & Financial Planning Models',
      'Semantic Data Mesh & Role-Based Access Governance'
    ],
    technologies: ['SAP Datasphere', 'SAP Analytics Cloud (SAC)', 'SAP HANA Cloud', 'Databricks / Snowflake Connector']
  },
  'sap-green-ledger': {
    id: 'sap-green-ledger',
    slug: 'sap-green-ledger',
    title: 'SAP Sustainability & Green Ledger (ESG)',
    subtitle: 'Transactional Carbon Accounting, Supply Chain Traceability & Auditable ESG Governance',
    heroDescription: 'Treat carbon with the same accounting rigor as financial currency. SAP Green Ledger embeds carbon emissions tracking directly into transactional ERP entries—from raw material purchase to final product dispatch.',
    overview: [
      'Transition from estimated averages to precise, audit-ready carbon footprints. SAP Sustainability solutions capture actual transaction-level greenhouse gas data directly in your general ledger.',
      'KNOOVIQ helps global corporations comply with CSRD, SEC, BRSR, and Scope 1/2/3 emissions mandates with automated ERP-integrated carbon bookkeeping.'
    ],
    coreCapabilities: [
      {
        title: 'Transactional Carbon Accounting (Green Ledger)',
        description: 'Record carbon emissions alongside financial debits and credits for every line item in procurement, production, and shipping.',
        points: ['Actual vs estimated emissions calculation', 'Carbon balance sheet and profit-and-loss statements', 'Seamless integration with SAP S/4HANA Universal Journal']
      },
      {
        title: 'SAP Sustainability Footprint Management',
        description: 'Calculate product-level and corporate carbon footprints across the full upstream and downstream supply chain.',
        points: ['Scope 1, 2, and 3 emissions automated aggregation', 'Supplier ESG scorecards & green procurement criteria', 'Audit-ready compliance reporting (BRSR, CSRD, GHG Protocol)']
      }
    ],
    architecturePillars: [
      { title: 'Audit-Proof Precision', description: 'Direct ledger-level calculation backed by immutable transactional data.' },
      { title: 'Green Procurement', description: 'Factor carbon impact into sourcing and supplier selection algorithms.' }
    ],
    businessBenefits: [
      { metric: '100%', label: 'Audit-Ready ESG Compliance', description: 'Transparent reporting for global regulators.' },
      { metric: '25%', label: 'Reduction in Supply Chain Carbon', description: 'Targeted green supplier optimization.' }
    ],
    deliverables: [
      'SAP Green Ledger Configuration & Accounting Ruleset',
      'Scope 1/2/3 Emissions Data Pipeline & Supplier Portal Setup',
      'Automated BRSR / CSRD ESG Executive Reporting Deck'
    ],
    technologies: ['SAP Sustainability Footprint Management', 'SAP Sustainability Control Tower', 'SAP S/4HANA Green Ledger']
  },
  'sap-supply-chain': {
    id: 'sap-supply-chain',
    slug: 'sap-supply-chain',
    title: 'SAP Digital Supply Chain (IBP, EWM, TM)',
    subtitle: 'Resilient, Synchronized Supply Chain Planning, High-Velocity Warehousing & Intelligent Logistics',
    heroDescription: 'End-to-end digital supply chain transformation. Synchronize demand sensing with multi-tier inventory optimization, automated warehouse robotics, and multi-modal freight tracking.',
    overview: [
      'Volatility and disruptions demand agile, responsive supply networks. KNOOVIQ delivers integrated solutions spanning SAP Integrated Business Planning (IBP), Extended Warehouse Management (EWM), and Transportation Management (TM).',
      'Our solutions provide real-time visibility across global supply tiers, cutting inventory holding costs and ensuring on-time in-full (OTIF) fulfillment.'
    ],
    coreCapabilities: [
      {
        title: 'SAP Integrated Business Planning (IBP)',
        description: 'Cloud-based demand, supply, inventory, and sales & operations planning (S&OP) powered by machine learning algorithms.',
        points: ['Real-time what-if scenario simulations', 'Machine-learning demand sensing & forecasting', 'Multi-echelon inventory optimization (MEIO)']
      },
      {
        title: 'SAP Extended Warehouse Management (EWM)',
        description: 'High-throughput warehouse operations management covering automated storage, wave picking, cross-docking, and RFID tracking.',
        points: ['Automated Guided Vehicle (AGV) & robotics integration', 'Slotting, labor management & yard logistics', 'Mobile RF scanning apps for warehouse floor operators']
      },
      {
        title: 'SAP Transportation Management (TM)',
        description: 'Optimize freight tendering, multi-modal routing, carrier collaboration, and automated freight invoice reconciliation.',
        points: ['Dynamic load building & container optimization', 'Real-time GPS track-and-trace milestones', 'Automated freight settlement reducing invoice leakage']
      }
    ],
    architecturePillars: [
      { title: 'End-to-End Synchronization', description: 'Seamless data flow from demand forecast to physical dock delivery.' },
      { title: 'Real-Time Telemetry', description: 'Live sensor tracking of cold chain, routes, and warehouse throughput.' }
    ],
    businessBenefits: [
      { metric: '99.5%', label: 'On-Time Delivery (OTIF)', description: 'Flawless supply chain fulfillment.' },
      { metric: '30%', label: 'Reduction in Freight Costs', description: 'Automated carrier tendering & load consolidation.' }
    ],
    deliverables: [
      'SAP IBP / EWM / TM Enterprise Architecture Blueprint',
      'Automated Carrier EDI & Logistics Integration Pipelines',
      'Go-Live Cutover Runbook & Hypercare Support'
    ],
    technologies: ['SAP IBP', 'SAP EWM', 'SAP TM', 'SAP Logistics Business Network (LBN)']
  },
  'sap-ariba': {
    id: 'sap-ariba',
    slug: 'sap-ariba',
    title: 'SAP Ariba & Intelligent Spend Management',
    subtitle: 'Strategic Sourcing, Supplier Network Collaboration & Guided Buying for Global Procurement',
    heroDescription: 'Modernize source-to-pay processes with SAP Ariba and SAP Business Network. Digitize supplier onboarding, automate contract management, and enforce touchless invoice processing.',
    overview: [
      'SAP Ariba connects millions of buyers and suppliers worldwide, enabling complete visibility over direct and indirect spend.',
      'KNOOVIQ implements end-to-end Ariba Strategic Sourcing, Guided Buying, and Supply Chain Collaboration to eliminate rogue spending and maximize negotiated savings.'
    ],
    coreCapabilities: [
      {
        title: 'Ariba Guided Buying & Catalogs',
        description: 'Consumer-like procurement interface that automatically steers employees toward approved suppliers and contracted prices.',
        points: ['Interactive catalog management & dynamic punchouts', 'Automated approval workflows based on budget thresholds', 'Elimination of off-contract rogue purchasing']
      },
      {
        title: 'Ariba Network Supplier Collaboration',
        description: 'Digitize purchase orders, advance shipping notices (ASNs), and electronic invoices directly with suppliers.',
        points: ['Over 90% touchless electronic invoice processing', 'Supplier self-service onboarding and tax compliance portals', 'Real-time PO confirmation and fulfillment tracking']
      }
    ],
    architecturePillars: [
      { title: 'Total Spend Visibility', description: 'Categorized analysis of 100% of corporate expenditures.' },
      { title: 'Touchless Automation', description: 'Zero-touch three-way matching and invoice settlement.' }
    ],
    businessBenefits: [
      { metric: '15-20%', label: 'Procurement Cost Savings', description: 'Negotiated catalog discounts & contract compliance.' },
      { metric: '70%', label: 'Faster Requisition Cycles', description: 'Streamlined guided shopping experience.' }
    ],
    deliverables: [
      'Ariba Sourcing & Guided Buying System Configuration',
      'Ariba CIG (Cloud Integration Gateway) S/4HANA Connection',
      'Supplier Enablement Campaign & Training Portals'
    ],
    technologies: ['SAP Ariba', 'SAP Business Network', 'SAP Ariba CIG', 'SAP S/4HANA Sourcing']
  },
  'sap-successfactors': {
    id: 'sap-successfactors',
    slug: 'sap-successfactors',
    title: 'SAP SuccessFactors & Human Experience Management (HXM)',
    subtitle: 'Next-Gen Cloud HR, Global Payroll, Talent Acquisition, Learning & Performance Management',
    heroDescription: 'Put your people at the heart of digital transformation with SAP SuccessFactors. Deliver personalized employee experiences, global multi-country payroll, and data-driven workforce planning.',
    overview: [
      'SuccessFactors transforms traditional human resources into dynamic human experience management (HXM), supporting the entire employee lifecycle from hire to retire.',
      'KNOOVIQ delivers end-to-end SuccessFactors implementations covering Employee Central, Payroll, Recruiting, Onboarding, Performance & Goals, and Learning.'
    ],
    coreCapabilities: [
      {
        title: 'Employee Central & Global Payroll',
        description: 'Single, standardized global core HR database with automated local statutory compliance across 100+ countries.',
        points: ['Self-service mobile HR workflows for managers and employees', 'Automated localized tax calculations and direct deposits', 'Seamless bi-directional integration with S/4HANA Finance']
      },
      {
        title: 'Talent Acquisition, Learning & Succession',
        description: 'AI-assisted candidate sourcing, personalized digital onboarding journeys, and skill-based continuous learning tracks.',
        points: ['Intelligent skill-gap analysis & succession planning', 'Gamified employee goal tracking & 360 performance reviews', 'Integrated corporate compliance training LMS']
      }
    ],
    architecturePillars: [
      { title: 'Global Compliance', description: 'Pre-configured compliance with local labor and data privacy laws.' },
      { title: 'Mobile-First Experience', description: 'Intuitive iOS and Android apps for modern mobile workforces.' }
    ],
    businessBenefits: [
      { metric: '40%', label: 'Reduction in HR Administrative Time', description: 'Automated self-service approvals.' },
      { metric: '95%', label: 'On-Time Payroll Accuracy', description: 'Flawless global payroll processing.' }
    ],
    deliverables: [
      'SuccessFactors Employee Central & Module Configuration',
      'Integration Center / CPI Pipeline to SAP S/4HANA',
      'Role-Based Permission Matrix & Change Management SOPs'
    ],
    technologies: ['SAP SuccessFactors', 'Employee Central', 'SuccessFactors Payroll', 'SAP BTP']
  },
  'sap-cx': {
    id: 'sap-cx',
    slug: 'sap-cx',
    title: 'SAP Customer Experience (CX) & Commerce Cloud',
    subtitle: 'Omnichannel B2B/B2C Commerce, Sales Cloud CRM & Customer Data Cloud (CDC)',
    heroDescription: 'Deliver connected, personalized customer journeys across online storefronts, partner portals, field sales, and customer service centers with SAP Customer Experience.',
    overview: [
      'SAP CX unites customer identity, front-office sales, and back-office ERP order fulfillment into one frictionless operational flow.',
      'KNOOVIQ architects enterprise B2B and B2C eCommerce portals on SAP Commerce Cloud with deep real-time pricing and stock synchronization directly with SAP S/4HANA.'
    ],
    coreCapabilities: [
      {
        title: 'SAP Commerce Cloud (B2B & B2C)',
        description: 'Enterprise eCommerce platform designed for complex pricing matrices, customer-specific catalogs, and high-volume transactions.',
        points: ['Real-time ERP price and stock check at checkout', 'Multi-site, multi-currency global storefronts', 'Headless commerce architecture with Composable Storefront']
      },
      {
        title: 'SAP Sales Cloud & Service Cloud',
        description: 'Equip sales reps and service technicians with 360-degree customer insight, lead scoring, and mobile field service management.',
        points: ['Instant CPQ (Configure, Price, Quote) generation', 'Omnichannel ticket routing and SLA resolution', 'Mobile field service tracking & offline inventory visibility']
      }
    ],
    architecturePillars: [
      { title: 'Zero Data Disconnect', description: 'Real-time synchronization with S/4HANA Order-to-Cash (SD).' },
      { title: 'Enterprise Scalability', description: 'Proven stability handling peak Black Friday / holiday traffic.' }
    ],
    businessBenefits: [
      { metric: '45%', label: 'Increase in Online B2B Revenue', description: 'Self-service ordering with negotiated rates.' },
      { metric: '3x', label: 'Faster Quote Turnaround Time', description: 'Automated SAP CPQ configuration.' }
    ],
    deliverables: [
      'SAP Commerce Cloud Storefront Deployment & UI Customization',
      'Real-Time OData Integration with S/4HANA Order Processing',
      'Sales Cloud & Service Cloud Role Workflows'
    ],
    technologies: ['SAP Commerce Cloud', 'SAP Sales Cloud', 'SAP Service Cloud', 'SAP CPQ', 'SAP S/4HANA']
  }
};


export const INSIGHTS_ARTICLES: InsightArticle[] = [
  {
    id: 'art-clean-core-2026',
    slug: 'clean-core-strategy-sap-s4hana',
    title: 'The Clean Core Strategy: Why Decoupled ERP Architecture Wins in 2026',
    category: 'SAP S/4HANA',
    author: 'KNOOVIQ Enterprise Architecture Practice',
    readTime: '6 min read',
    publishedAt: 'August 2026',
    excerpt: 'How leading enterprises are decoupling custom business logic from the digital core using SAP BTP to eliminate upgrade fatigue and accelerate innovation.',
    content: [
      'In legacy ERP deployments, custom code modifications (Z-tables, user exits, modifications) created deeply entangled systems where every upgrade required months of regression testing and remediation.',
      'The Clean Core strategy fundamentally changes this paradigm. By enforcing strictly standard SAP core processes and implementing custom extensions side-by-side on SAP BTP using OData APIs and event meshes, enterprises achieve total upgrade independence.',
      'Organizations adopting Clean Core reduce their long-term ERP Total Cost of Ownership (TCO) by up to 40% while unlocking rapid integration with external AI, CRM, and eCommerce platforms.'
    ],
    tags: ['Clean Core', 'SAP S/4HANA', 'SAP BTP', 'Enterprise Architecture'],
    keyTakeaways: [
      'Never modify standard core tables; utilize side-by-side BTP extensions.',
      'Leverage ABAP Cloud and RESTful Application Programming (RAP) for custom apps.',
      'Reduce future upgrade cycles from months to days.'
    ]
  },
  {
    id: 'art-greenfield-vs-brownfield',
    slug: 'greenfield-vs-brownfield-migration-guide',
    title: 'Greenfield vs Brownfield: Strategic Decision Framework for S/4HANA Cutover',
    category: 'Digital Transformation',
    author: 'KNOOVIQ Transformation Advisory',
    readTime: '8 min read',
    publishedAt: 'July 2026',
    excerpt: 'A comprehensive comparative guide evaluating business continuity, historical data preservation, cost structures, and implementation timelines.',
    content: [
      'One of the most critical decisions in an SAP modernization roadmap is choosing between a Greenfield (new implementation) and Brownfield (system conversion) approach.',
      'Brownfield conversions are ideal for enterprises with well-maintained master data, streamlined processes, and a need to preserve historical transaction records with minimal user retraining.',
      'Greenfield implementations provide a once-in-a-generation opportunity to eliminate decades of accumulated technical debt, adopt standard industry best practices, and build a cloud-native clean core from day one.'
    ],
    tags: ['SAP Migration', 'ECC to S/4HANA', 'Brownfield', 'Greenfield'],
    keyTakeaways: [
      'Run the SAP Readiness Check early to quantify custom code impact.',
      'Consider Selective Data Transition if consolidating multiple ERP instances.',
      'Factor change management into the total timeline calculation.'
    ]
  },
  {
    id: 'art-ai-automation-sap',
    slug: 'ai-automation-sap-ecosystem',
    title: 'Embedding Predictive AI & Automation in SAP S/4HANA Workflows',
    category: 'AI & Automation',
    author: 'KNOOVIQ Innovation Lab',
    readTime: '5 min read',
    publishedAt: 'June 2026',
    excerpt: 'Exploring real-world applications of automated invoice matching, predictive maintenance forecasting, and generative business intelligence.',
    content: [
      'Artificial intelligence in the enterprise has transitioned from experimental proof-of-concepts to core operational capabilities embedded directly within transactional ERP flows.',
      'With SAP Joule and in-memory HANA machine learning algorithms, accounts payable teams can automate 90% of three-way invoice matching, while supply chain planners receive predictive warning alerts on vendor supply bottlenecks.',
      'KNOOVIQ helps enterprises design secure, enterprise-grade AI integration pipelines that respect data privacy boundaries and role-based permissions.'
    ],
    tags: ['Artificial Intelligence', 'Machine Learning', 'Automation', 'SAP S/4HANA'],
    keyTakeaways: [
      'Embed intelligence at the point of decision, not in disconnected silos.',
      'Automate repetitive operational tasks to free talent for strategic initiatives.',
      'Ensure strict data governance and GDPR / local compliance.'
    ]
  }
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: 'consumer-commerce',
    name: 'Consumer & Commerce',
    tagline: 'Retail, Consumer Goods, Food & Omnichannel Commerce',
    description: 'Connecting physical store networks, e-commerce storefronts, FMCG production plants, and fashion supply chains on a unified in-memory digital core.',
    iconName: 'Store',
    solutions: [
      'Retail & E-Commerce Omnichannel Fulfillment',
      'Consumer Goods (CPG) Demand Sensing',
      'Food & Beverage Batch Traceability',
      'Fashion, Apparel & Lifestyle Merchandising',
      'Textile, Wholesale Trading & Distribution'
    ],
    caseSnippet: 'Unified 50+ retail stores and distribution hubs with real-time stock allocation, reducing inventory holding costs by 32%.',
    keyChallenges: ['Omnichannel inventory fragmentation', 'Perishable food batch expiration', 'Fast fashion demand volatility'],
    knooviqAdvantage: ['Real-time POS & eCommerce sync', 'Automated store replenishment', 'End-to-end farm-to-shelf traceability']
  },
  {
    id: 'industrial-manufacturing',
    name: 'Industrial & Manufacturing',
    tagline: 'Smart Industry 4.0, Automotive & Advanced Materials',
    description: 'Connecting shop-floor robotics, machinery, discrete assemblies, and process chemical plants with SAP S/4HANA for zero-defect production.',
    iconName: 'Cpu',
    solutions: [
      'Automotive & Mobility Tier-1 / OEM Sequencing',
      'Discrete Manufacturing & Live Shop-Floor MES',
      'Process Manufacturing & Formulation Control',
      'Industrial Products Equipment Tracking',
      'Chemicals & Hazardous Materials Compliance'
    ],
    caseSnippet: 'Implemented automated machine telemetry and MRP Live for industrial manufacturing, cutting production lead times by 28%.',
    keyChallenges: ['Shop-floor data silos', 'Unplanned machine downtime', 'Complex discrete multi-level BOMs'],
    knooviqAdvantage: ['Deep shop-floor MES integration', 'Automated machine telemetry', 'Real-time production visibility']
  },
  {
    id: 'health-life-sciences',
    name: 'Health & Life Sciences',
    tagline: 'Hospital Systems, Pharma Track-and-Trace & MedTech',
    description: 'Delivering end-to-end pharma serialization, 21 CFR Part 11 compliant digital batch records, and automated hospital supply management.',
    iconName: 'Activity',
    solutions: [
      'Hospitals & Healthcare Inventory Logistics',
      'Pharmaceutical Serialization & Track-and-Trace',
      'Medical Devices UDI Compliance & Maintenance',
      'Diagnostics & Laboratory Sample Tracking',
      'Wellness & Care Provider Supply Orchestration'
    ],
    caseSnippet: 'Deployed complete serialization and electronic batch records (EBR) across global pharma manufacturing plants.',
    keyChallenges: ['Strict FDA / cGMP regulatory audits', 'Cold chain temperature excursions', 'Complex medical device serial tracking'],
    knooviqAdvantage: ['21 CFR Part 11 validated workflows', 'Electronic Batch Record (EBR) automation', 'Integrated cold-chain telemetry']
  },
  {
    id: 'energy-resources',
    name: 'Energy & Resources',
    tagline: 'Oil, Gas, Utilities, Renewables & Mining Integrity',
    description: 'Enabling hydrocarbon operators, renewable utilities, and mining conglomerates to maximize asset uptime, monitor smart grids, and ensure HSE safety.',
    iconName: 'Flame',
    solutions: [
      'Upstream, Midstream & Downstream Oil & Gas',
      'Power Generation & Smart Grid Distribution',
      'Renewable Energy Plant Asset Management',
      'Mining, Metals & Ore Extraction Logistics',
      'HSE Environmental Compliance & Energy Services'
    ],
    caseSnippet: 'Optimized plant turnaround schedules and predictive asset maintenance for mega refinery and utility facilities.',
    keyChallenges: ['Unplanned plant shutdowns', 'Strict environmental safety standards', 'Remote mining & energy asset tracking'],
    knooviqAdvantage: ['Predictive vibration & sensor analysis', 'Mobile maintenance inspection apps', 'Zero-leakage audit compliance']
  },
  {
    id: 'built-environment',
    name: 'Built Environment',
    tagline: 'Engineering, Mega-EPC, Infrastructure & Real Estate',
    description: 'Controlling capital project budgets, subcontractor claims, equipment allocation, and multi-asset real estate management.',
    iconName: 'Building2',
    solutions: [
      'Engineering & Design Project Systems (SAP PS)',
      'Construction & EPC Milestone Billing',
      'Infrastructure Capital Project Governance',
      'Commercial & Residential Real Estate Management',
      'Facilities, Plant & Asset Life-Cycle Tracking'
    ],
    caseSnippet: 'Delivered earned value management (EVM) on large-scale infrastructure projects, preventing budget overruns by 24%.',
    keyChallenges: ['High capital project cost overruns', 'Disputed subcontractor milestone claims', 'Complex multi-property lease accounting'],
    knooviqAdvantage: ['Earned Value Management (EVM)', 'Subcontractor verification workflows', 'Live site expenditure alerts']
  },
  {
    id: 'technology-logistics-mobility',
    name: 'Technology, Logistics & Mobility',
    tagline: 'High-Tech, SaaS, Warehousing, Freight & Aerospace',
    description: 'Accelerating high-velocity supply chains with SAP Extended Warehouse Management (EWM), Transportation Management (TM), and High-Tech contract manufacturing.',
    iconName: 'Truck',
    solutions: [
      'Technology Services & Professional Staffing',
      'Software, SaaS & Subscription Billing',
      'High-Tech & Electronics Contract Manufacturing',
      'Warehouse & Warehousing Execution (SAP EWM)',
      'Transportation, Logistics & Aerospace / Defense MRO'
    ],
    caseSnippet: 'Accelerated warehouse dispatch velocity by 35% with automated SAP EWM, RF scanner routing, and live TM route optimization.',
    keyChallenges: ['Freight cost leakage', 'Warehouse congestion during peak cycles', 'High-tech electronics warranty tracking'],
    knooviqAdvantage: ['Deep SAP EWM configuration', 'Automated freight reconciliation', 'Live shipment telemetry']
  },
  {
    id: 'financial-business-services',
    name: 'Financial & Business Services',
    tagline: 'Banking, Insurance, FinTech & Professional Consultancies',
    description: 'Transforming statutory multi-entity consolidation, risk governance, milestone-based professional billing, and modern FinTech ledger orchestration.',
    iconName: 'Briefcase',
    solutions: [
      'Banking & Financial Institutions Core Ledger',
      'Insurance Policy & Claims Accounting',
      'Financial Services & Multi-GAAP Ledgers',
      'FinTech Real-Time Payment Settlements',
      'Professional Services Utilization & Billing'
    ],
    caseSnippet: 'Streamlined resource utilization and milestone billing for professional services, increasing billable recovery rates by 22%.',
    keyChallenges: ['Complex statutory multi-GAAP reporting', 'Disconnected professional timesheets', 'Strict financial regulatory compliance'],
    knooviqAdvantage: ['Automated milestone billing', 'Real-time project margin tracking', 'Multi-entity ledger unification']
  },
  {
    id: 'experience-media-education',
    name: 'Experience, Media & Education',
    tagline: 'Hospitality, Travel, Media Entertainment & Higher Education',
    description: 'Modernizing guest reservation experiences, media rights management, student lifecycle administration, and campus grant accounting.',
    iconName: 'Sparkles',
    solutions: [
      'Hospitality Guest Management & POS Reconciliations',
      'Travel & Tourism Booking Financials',
      'Entertainment Media Rights & Royalty Management',
      'Higher Education Student Lifecycle Management (SLcM)',
      'Campus Grants & Academic Endowment Governance'
    ],
    caseSnippet: 'Unified student lifecycle management and grant fund allocations across multi-campus institutions, speeding fee reconciliations.',
    keyChallenges: ['Siloed student records', 'Seasonal travel demand shifts', 'Complex media royalty distributions'],
    knooviqAdvantage: ['Unified campus & guest portals', 'Automated royalty & grant accounting', 'Digital payment gateway reconciliation']
  }
];

export const TRAINING_PROGRAMS: TrainingProgram[] = [
  {
    id: 's4hana-finance-fico',
    title: 'SAP S/4HANA Financial Accounting & Controlling (FICO)',
    code: 'TS4F01-FICO',
    level: 'Professional',
    duration: '60 Hours (Weekend / Weekday Batches)',
    mode: 'Live Virtual & Corporate On-Site',
    overview: 'Comprehensive deep dive into modern SAP S/4HANA Finance architecture, Universal Journal (ACDOCA), Central Finance, Asset Accounting, and Management Controlling.',
    modules: [
      'Architecture of SAP S/4HANA Finance & Universal Journal',
      'General Ledger, New Asset Accounting & Bank Ledger',
      'Accounts Payable (AP) & Accounts Receivable (AR) Optimization',
      'Controlling (CO): Cost Center, Profit Center & Internal Orders',
      'Product Costing (CO-PC) & Profitability Analysis (CO-PA)',
      'Integration with MM, SD & Real-Time Financial Closing'
    ],
    targetAudience: ['Finance Executives', 'SAP ECC Consultants', 'Chartered Accountants', 'ERP Project Managers']
  },
  {
    id: 's4hana-sourcing-procurement-mm',
    title: 'SAP S/4HANA Sourcing & Procurement (MM)',
    code: 'TS4500-MM',
    level: 'Associate',
    duration: '50 Hours',
    mode: 'Hybrid',
    overview: 'Master enterprise procurement, inventory valuation, invoice verification, MRP execution, and vendor evaluation in S/4HANA Enterprise Management.',
    modules: [
      'Procurement Processes & Master Data Configuration',
      'Purchasing Optimization: RFQ, Contracts & Scheduling Agreements',
      'Inventory Management & Physical Inventory Verification',
      'Logistics Invoice Verification (LIV) & Automated Matching',
      'Valuation & Account Determination (OBYC)',
      'Subcontracting, Consignment & Third-Party Procurement'
    ],
    targetAudience: ['Procurement Professionals', 'Supply Chain Analysts', 'Junior SAP Consultants']
  },
  {
    id: 'abap-on-hana-btp',
    title: 'Modern ABAP on HANA, CDS Views & SAP BTP',
    code: 'BC400-HANA',
    level: 'Professional',
    duration: '65 Hours',
    mode: 'Live Virtual',
    overview: 'Equip developers with modern ABAP 7.5+ programming paradigms, Core Data Services (CDS), AMDP, ABAP RESTful Application Programming (RAP), and BTP integration.',
    modules: [
      'Modern ABAP Syntax, Expressions & Data Structures',
      'Core Data Services (CDS Views) & Access Controls (DCL)',
      'ABAP Managed Database Procedures (AMDP) & SQLScript',
      'ABAP RESTful Application Programming Model (RAP)',
      'OData Service Creation & SAP Fiori Elements Integration',
      'SAP BTP Development Tools & Cloud Extension Principles'
    ],
    targetAudience: ['Software Engineers', 'Legacy ABAP Developers', 'Technical Architects']
  },
  {
    id: 'sap-sales-distribution-sd',
    title: 'SAP S/4HANA Sales & Distribution (SD)',
    code: 'TS4600-SD',
    level: 'Associate',
    duration: '50 Hours',
    mode: 'Live Virtual & Corporate On-Site',
    overview: 'End-to-end order-to-cash (OTC) cycle, dynamic pricing condition techniques, credit management, shipping/transportation, and billing automation.',
    modules: [
      'Enterprise Structure for Sales & Distribution',
      'Order-to-Cash (OTC) Business Cycles & Special Sales Orders',
      'Condition Technique & Advanced Pricing Logic',
      'Shipping, Picking, Packing & Goods Issue Execution',
      'Billing, Revenue Account Determination & Credit Management',
      'Output Management with Adobe Forms & BRF+'
    ],
    targetAudience: ['Sales Operations Specialists', 'ERP Functional Analysts', 'Business Process Owners']
  }
];

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: 'case-fmcg-migration',
    title: 'Seamless ECC to S/4HANA Cloud Transition for Multi-Regional FMCG Giant',
    clientIndustry: 'FMCG & Consumer Packaged Goods',
    challenge: 'High transaction volumes across 25 distribution centers caused database locks and delayed month-end financial reconciliations by 6 business days.',
    solution: 'Engineered a phased Brownfield conversion with automated code remediation, in-memory HANA data modeling, and automated distributor billing integrations.',
    outcomes: [
      { metric: '75%', label: 'Faster Financial Month-End Close' },
      { metric: '3.8x', label: 'Improvement in MRP Execution Speed' },
      { metric: '0', label: 'Unplanned Cutover Downtime' }
    ],
    technologies: ['SAP S/4HANA 2023', 'HANA DB', 'SAP BTP', 'Fiori UX']
  },
  {
    id: 'case-oil-gas-maintenance',
    title: 'Enterprise Asset Management & Plant Modernization for Petrochemical Refinery',
    clientIndustry: 'Oil, Gas & Energy',
    challenge: 'Manual equipment inspection logs and disconnected maintenance ticketing resulted in unexpected plant downtime and compliance inspection delays.',
    solution: 'Implemented SAP EAM/PM with mobile Fiori apps for field technicians, automated calibration scheduling, and integrated sensor telemetry.',
    outcomes: [
      { metric: '32%', label: 'Reduction in Unscheduled Equipment Downtime' },
      { metric: '100%', label: 'Digital Safety Audit Trail Compliance' },
      { metric: '40%', label: 'Faster Maintenance Work Order Dispatch' }
    ],
    technologies: ['SAP Plant Maintenance (PM)', 'SAP Fiori', 'SAP Mobility', 'IoT Connector']
  },
  {
    id: 'case-automotive-edi',
    title: 'Automated Tier-1 Automotive EDI Integration & JIT Production Synchronization',
    clientIndustry: 'Automotive Component Manufacturing',
    challenge: 'Manual translation of OEM dispatch orders caused delayed shipping manifests and inventory discrepancies across assembly lines.',
    solution: 'Designed an event-driven integration framework using SAP Integration Suite, synchronizing EDI 830/862 schedules directly with production lines.',
    outcomes: [
      { metric: '99.9%', label: 'On-Time In-Sequence Delivery Rate' },
      { metric: '55%', label: 'Decrease in Manual Data Entry Overhead' },
      { metric: '15 min', label: 'Real-Time OEM Manifest Confirmation' }
    ],
    technologies: ['SAP CPI / Integration Suite', 'SAP PP/SD', 'EDI Protocols', 'REST APIs']
  }
];

export const INITIAL_JOB_OPENINGS: JobOpening[] = [
  {
    id: 'job-1',
    title: 'Senior SAP S/4HANA Finance (FICO) Consultant',
    department: 'SAP Consulting',
    location: 'Mumbai, India (Hybrid)',
    employment_type: 'Full-time',
    experience_level: '5 - 8 Years',
    description: 'Lead enterprise financial transformations, configure General Ledger, AP/AR, Asset Accounting, and CO-PA for Fortune 500 clients.',
    requirements: [
      '5+ years in SAP FICO with at least 2 full-lifecycle S/4HANA implementations',
      'Strong understanding of Universal Journal (ACDOCA) and Central Finance',
      'Excellent stakeholder management and solution design skills'
    ]
  },
  {
    id: 'job-2',
    title: 'SAP ABAP on HANA & Cloud Integration Developer',
    department: 'Technical Services',
    location: 'Mumbai, India (Hybrid)',
    employment_type: 'Full-time',
    experience_level: '3 - 6 Years',
    description: 'Design and build scalable custom extensions, CDS Views, AMDP, OData services, and SAP BTP integrations.',
    requirements: [
      'Strong hands-on experience in ABAP on HANA, CDS Views & OData APIs',
      'Experience with SAP BTP Integration Suite / CPI is a plus',
      'Proficient in debugging and code optimization'
    ]
  },
  {
    id: 'job-3',
    title: 'SAP Supply Chain (MM/SD/PP) Solutions Architect',
    department: 'Supply Chain & Operations',
    location: 'Mumbai, India (Hybrid)',
    employment_type: 'Full-time',
    experience_level: '6 - 10 Years',
    description: 'Architect integrated supply chain solutions across procurement, inventory, production planning, and sales distribution.',
    requirements: [
      'Deep expertise in SAP MM/SD with S/4HANA Enterprise Management',
      'Proven experience in FMCG or Manufacturing domain',
      'Strong analytical, blueprinting, and client communication skills'
    ]
  },
  {
    id: 'job-4',
    title: 'SAP Basis & Cloud Migration Specialist',
    department: 'Infrastructure & Cloud',
    location: 'Mumbai, India',
    employment_type: 'Full-time',
    experience_level: '4 - 7 Years',
    description: 'Manage enterprise SAP landscapes, high availability, OS/DB migrations, and cloud deployments on AWS/Azure.',
    requirements: [
      'Hands-on experience in SAP HANA DB administration, upgrades, and system refreshes',
      'Expertise in Greenfield & Brownfield S/4HANA migration pathways',
      'Solid knowledge of Linux, backup strategies, and security hardening'
    ]
  }
];

