import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Bot,
  Sparkles,
  Database,
  Cpu,
  Layers,
  Workflow,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Activity,
  Compass,
  Lock,
  Network,
  Boxes,
  FileCheck,
  Server,
  Zap,
  BarChart3,
  CreditCard,
  ShoppingBag,
  Users2,
  FileText,
  AlertCircle,
  Clock,
  Send,
  CornerDownRight,
  Terminal,
  HelpCircle,
  Building2,
  ChevronRight,
  ChevronDown,
  Search,
  Check,
  ShieldAlert,
  Scale,
  Sparkle,
  FileCode
} from 'lucide-react';

interface TechnologyPageProps {
  onOpenContact: (defaultService?: string) => void;
}

interface JouleScenario {
  id: string;
  tabLabel: string;
  prompt: string;
  role: string;
  module: string;
  responseHeadline: string;
  responseBody: string;
  erpCitation: string;
  confidence: string;
  actionTitle: string;
  actionDetails: string[];
}

const JOULE_SCENARIOS: JouleScenario[] = [
  {
    id: 'finance',
    tabLabel: 'Finance & Cash App',
    prompt: 'Analyze unmatched customer remittance advice for invoice batch #INV-9821.',
    role: 'Treasury & Receivables Controller',
    module: 'SAP S/4HANA Finance (FI-AR)',
    responseHeadline: 'Automated 98.4% Confidence Payment Matching Identified',
    responseBody: 'Evaluated 4 open ledger entries against incoming wire from Acme Corp ($428,500). Identified $12,400 early settlement discount applied without prior EDI note.',
    erpCitation: 'Live Tables: BSEG, BSID, ACDOCA (Journal Entry #10009281)',
    confidence: '99.2%',
    actionTitle: 'Clear Open Items & Post Settlement',
    actionDetails: ['Post discount variance to G/L #64020', 'Trigger automated clearance confirmation email to payer', 'Update debtor credit score balance']
  },
  {
    id: 'supply-chain',
    tabLabel: 'Supply Chain & IBP',
    prompt: 'Predict stockout risks across European distribution centers for next 30 days.',
    role: 'Global Supply Chain Planner',
    module: 'SAP Integrated Business Planning (IBP)',
    responseHeadline: 'High Critical Stockout Probability in Munich DC (Part #TX-4402)',
    responseBody: 'Telemetry shows 34% surge in regional demand coupled with a 6-day logistics delay at Rotterdam terminal. Current safety stock will deplete in 9 days.',
    erpCitation: 'Live Tables: MARC, MARD, MD04 Stock/Requirements List',
    confidence: '97.8%',
    actionTitle: 'Execute Dynamic Re-Routing & Transfer Order',
    actionDetails: ['Initiate 4,200 unit inter-warehouse transfer from Antwerp', 'Notify tier-1 freight forwarder via BTP Event Mesh', 'Recalibrate dynamic reorder points']
  },
  {
    id: 'procurement',
    tabLabel: 'Procurement Sourcing',
    prompt: 'Evaluate supplier risk and RFP anomalies for Q3 Microcontroller procurement.',
    role: 'Strategic Sourcing Manager',
    module: 'SAP Ariba & S/4HANA Sourcing',
    responseHeadline: 'Supplier Concentration Risk Detected across 3 Bidders',
    responseBody: 'Bidder Alpha offers 4.2% lower unit cost but presents high financial volatility index (Altman Z-Score 1.42). Bidder Beta meets ISO 26000 ESG benchmarks with verified redundant fab capacity.',
    erpCitation: 'Live Connectors: Ariba Network Supplier Risk & LFA1 Master Data',
    confidence: '96.5%',
    actionTitle: 'Generate Weighted Scorecard & Contract Draft',
    actionDetails: ['Recommend dual-award allocation: 70% Beta, 30% Alpha', 'Embed automated penalty clauses for lead-time variance', 'Route approval to CPO delegation']
  },
  {
    id: 'hr',
    tabLabel: 'HR & Talent',
    prompt: 'Recommend cross-skilling pathways for 140 SAP ABAP developers transitioning to Clean Core.',
    role: 'Chief Human Resources Officer',
    module: 'SAP SuccessFactors Opportunity Marketplace',
    responseHeadline: 'Curated 12-Week Cloud Transformation Curriculum Formulated',
    responseBody: 'Analyzed skill taxonomy across engineering teams. Identified high baseline proficiency in SQL and CDS view modeling with a 42% gap in RAP (RESTful Application Programming) and CAP.',
    erpCitation: 'SuccessFactors Employee Profile & BTP Learning Hub Ontologies',
    confidence: '98.9%',
    actionTitle: 'Deploy Personalized Learning Tracks',
    actionDetails: ['Assign hands-on BTP trial tenants to cohort', 'Schedule weekly architecture sandbox pairing', 'Track certification milestones in SuccessFactors']
  },
  {
    id: 'cx',
    tabLabel: 'Customer Experience',
    prompt: 'Identify top 5 high-value enterprise accounts at risk of subscription churn this quarter.',
    role: 'VP of Commercial Operations',
    module: 'SAP Sales Cloud & Customer Experience',
    responseHeadline: '3 Enterprise Accounts Flagged with Negative Health Trajectory',
    responseBody: 'Cross-referenced open support ticket escalations, usage decline in Core billing APIs, and delayed renewal approvals. Identified $2.4M ARR at immediate risk.',
    erpCitation: 'Live Tables: VBAK, VBAP, Service Cloud Escalation Queue',
    confidence: '95.1%',
    actionTitle: 'Automate Executive Intervention Playbook',
    actionDetails: ['Draft customized renewal concession package in CPQ', 'Schedule executive QBR with Customer Success Director', 'Alert territory Account Executive']
  }
];

interface ScenarioCatalogItem {
  id: string;
  domain: 'finance' | 'supply-chain' | 'procurement' | 'hr' | 'cx' | 'clean-core' | 'governance';
  title: string;
  badge: string;
  description: string;
  sapModule: string;
  keyTables: string;
  aiMechanism: string;
  businessImpact: string;
  image: string;
}

const PREBUILT_SCENARIOS: ScenarioCatalogItem[] = [
  {
    id: 'sc-1',
    domain: 'finance',
    title: 'Intelligent Cash Application & Remittance Parsing',
    badge: 'S/4HANA FINANCE',
    description: 'Autonomous machine learning matching of unstructured PDF and EDI bank remittance advices with open accounts receivable line items.',
    sapModule: 'SAP S/4HANA Finance (FI-AR)',
    keyTables: 'BSEG, BSID, ACDOCA Universal Journal',
    aiMechanism: 'Deep Learning OCR + Semantic Vector Matching',
    businessImpact: '88% reduction in manual cash application labor; same-day ledger clearance.',
    image: '/images/sap_business_ai_cash_application_remittance.png'
  },
  {
    id: 'sc-2',
    domain: 'finance',
    title: 'Continuous Anomaly & Duplicate Invoice Shield',
    badge: 'CONTROLLING & AUDIT',
    description: 'Real-time inspection of inbound vendor invoices before posting, preventing duplicate disbursements and fraudulent vendor bank alterations.',
    sapModule: 'SAP S/4HANA Accounts Payable (FI-AP)',
    keyTables: 'RBKP, RSEG, BKPF, LFBK Bank Details',
    aiMechanism: 'Bayesian Anomaly Detection + Pattern Clustering',
    businessImpact: 'Zero unauthorized duplicate payments; 100% audit-proof transaction trail.',
    image: '/images/sap_business_ai_anomaly_duplicate_invoice_shield.png'
  },
  {
    id: 'sc-finance-treasury',
    domain: 'finance',
    title: 'Finance & Treasury Intelligence',
    badge: 'TREASURY & S/4HANA',
    description: 'Autonomous cash position forecasting, liquidity curve modeling, and algorithmic FX hedging across global multi-entity bank accounts.',
    sapModule: 'SAP S/4HANA Advanced Treasury Management',
    keyTables: 'FQM_FLOW, ACDOCA Universal Ledger, VTBFHA Deals',
    aiMechanism: 'Deep Liquidity Forecasting + Monte Carlo Simulation',
    businessImpact: '92% reduction in unhedged FX currency exposure; instant global cash visibility.',
    image: '/images/sap_business_ai_finance_treasury_intelligence.png'
  },
  {
    id: 'sc-3',
    domain: 'supply-chain',
    title: 'Multi-Echelon Demand Sensing & Lead-Time Prediction',
    badge: 'SAP IBP & LOGISTICS',
    description: 'Combines historical consumption with real-time port congestion, weather telemetry, and supplier lead-time variances to optimize replenishment.',
    sapModule: 'SAP Integrated Business Planning (IBP)',
    keyTables: 'MARC, MARD, MD04, EKET Schedule Lines',
    aiMechanism: 'Time-Series Prophet + Gradient Boosted Ensembles',
    businessImpact: '32% decrease in safety stock buffers while lifting order fulfillment to 99.4%.',
    image: '/images/sap_business_ai_demand_sensing_lead_time.png'
  },
  {
    id: 'sc-4',
    domain: 'supply-chain',
    title: 'Intelligent Available-to-Promise (aATP) Optimization',
    badge: 'WAREHOUSE & DELIVERY',
    description: 'Dynamic order allocation prioritizing tier-1 contracts and high-margin shipments during sudden inventory constraints.',
    sapModule: 'SAP Extended Warehouse Management (EWM)',
    keyTables: 'VBBE, LIPS, /SCWM/AQUA Available Quantity',
    aiMechanism: 'Constraint Programming & Priority Optimization',
    businessImpact: 'Protects key SLA penalty clauses; reduces cross-dock transit delays by 40%.',
    image: '/images/sap_business_ai_aatp_optimization.png'
  },
  {
    id: 'sc-5',
    domain: 'procurement',
    title: 'Generative Sourcing Event & RFQ Formulation',
    badge: 'SAP ARIBA',
    description: 'Generates comprehensive RFQ specifications, milestone payment terms, and vendor qualification questionnaires in seconds from line-item prompts.',
    sapModule: 'SAP Ariba Sourcing & Strategic Sourcing Suite',
    keyTables: 'Ariba Network Master API & LFA1 Supplier Hub',
    aiMechanism: 'Generative AI Hub (Claude 3.5 / GPT-4o on BTP)',
    businessImpact: '4x faster time-to-market for strategic sourcing events and vendor onboarding.',
    image: '/images/sap_business_ai_generative_sourcing_rfq.png'
  },
  {
    id: 'sc-6',
    domain: 'procurement',
    title: 'Automated Supplier ESG & Solvency Risk Radar',
    badge: 'SUPPLIER RISK',
    description: 'Continuous web, news, and credit agency scanning flagging financial distress, sanctions list additions, and ESG non-compliance in real time.',
    sapModule: 'SAP Ariba Supplier Risk',
    keyTables: 'LFA1, BUT000 Business Partners, Risk Feeds',
    aiMechanism: 'NLP Entity Extraction + Multimodal Sentiment Analysis',
    businessImpact: 'Early warning alert 45-60 days before critical tier-1 component supplier defaults.',
    image: '/images/sap_business_ai_supplier_risk_radar.png'
  },
  {
    id: 'sc-lksg-due-diligence',
    domain: 'procurement',
    title: 'Global Supply Chain Due Diligence (LkSG)',
    badge: 'LKSG & ESG',
    description: 'Cognitive verification of supplier ethical credentials, child labor prevention, and environmental compliance across multi-echelon global logistics corridors.',
    sapModule: 'SAP Ariba Supplier Risk & Sustainability Control Tower',
    keyTables: 'LFA1, BUT000, ESG Due Diligence Records',
    aiMechanism: 'Multimodal Entity Extraction + LkSG Statutory Rule Guardrails',
    businessImpact: '100% German LkSG & EU CSDDD regulatory compliance; real-time ethical violation alerts.',
    image: '/images/sap_genai_supply_chain_due_diligence_lksg.png'
  },
  {
    id: 'sc-7',
    domain: 'hr',
    title: 'Dynamic Skills Ontology & Internal Mobility Match',
    badge: 'SUCCESSFACTORS',
    description: 'Evaluates employee project history and continuous learning completions to automatically match talent with open internal gigs and promotions.',
    sapModule: 'SAP SuccessFactors Opportunity Marketplace',
    keyTables: 'SuccessFactors Employee Central & Talent Profiles',
    aiMechanism: 'Graph Neural Networks + Semantic Skill Embeddings',
    businessImpact: '65% higher internal talent retention; 50% savings on external recruitment fees.',
    image: '/images/sap_business_ai_skills_ontology_mobility.png'
  },
  {
    id: 'sc-8',
    domain: 'cx',
    title: 'Predictive Sales Win Probability & Next-Best Action',
    badge: 'SAP SALES CLOUD',
    description: 'Analyzes enterprise deal velocity, decision-maker engagement, and competitor mentions to advise sales reps on high-probability closing maneuvers.',
    sapModule: 'SAP Sales Cloud & CPQ (Configure, Price, Quote)',
    keyTables: 'VBAK, VBAP, CRM Opportunity Objects',
    aiMechanism: 'Contextual Bandit Algorithms & LLM Summarization',
    businessImpact: '28% higher pipeline win rates; eliminates deal stalling in qualification phase.',
    image: '/images/sap_business_ai_predictive_sales_win_probability.png'
  },
  {
    id: 'sc-clean-core',
    domain: 'clean-core',
    title: 'ERP Modernization & Clean Core Assessment',
    badge: 'CLEAN CORE & BTP',
    description: 'Autonomous architectural audit parsing legacy custom ABAP routines, direct table updates, and obsolete dynpros into certified Clean Core RAP business objects.',
    sapModule: 'SAP BTP ABAP Environment & Custom Code Migration',
    keyTables: 'TADIR, PROGDIR, CDS View Entities & RAP Interfaces',
    aiMechanism: 'Generative Code Transpilation & Static AST Semantic Analysis',
    businessImpact: '70% reduction in upgrade rework; 100% cloud-compliant RAP objects.',
    image: '/images/sap_genai_erp_modernization_clean_core.png'
  },
  {
    id: 'sc-governance',
    domain: 'governance',
    title: 'Zero Data Retention & EU AI Act Guardrails',
    badge: 'SOVEREIGN CLOUD & TRUST',
    description: 'Rigorous tenant boundary isolation guaranteeing zero customer ERP telemetry or prompts are ever retained or used to train public foundation models.',
    sapModule: 'SAP Cloud ALM & Generative AI Hub Prompt Guard',
    keyTables: 'Audit Trails, Tenant KMS Keys, PII Redaction Logs',
    aiMechanism: 'Zero Data Retention SLA + Deterministic EU AI Act Guardrails',
    businessImpact: '100% EU AI Act Article 50 compliance; zero enterprise intellectual property leakage.',
    image: '/images/sap_business_ai_zero_data_retention_eu_ai_act.png'
  }
];

interface SapAiFaq {
  id: string;
  category: 'joule' | 'privacy' | 'clean-core' | 'licensing';
  categoryLabel: string;
  q: string;
  aiTakeaway: string;
  a: string;
  details: string[];
}

const SAP_AI_FAQS: SapAiFaq[] = [
  {
    id: 'faq-1',
    category: 'joule',
    categoryLabel: 'Joule Copilot',
    q: 'What is SAP Joule and how does it differ from generic chatbots like ChatGPT or Microsoft Copilot?',
    aiTakeaway: 'Joule is deeply grounded in your SAP transactional data model (CDS views, ACDOCA, PFCG roles) and executes business transactions natively, rather than just generating static text.',
    a: 'Generic external chatbots have zero contextual awareness of your company codes, chart of accounts, sales organization hierarchies, or material master dependencies. Joule is natively embedded across the entire SAP portfolio (S/4HANA, SuccessFactors, Ariba, IBP, CX). When an authorized user asks Joule a question, it queries live SAP CDS views, enforces user-specific PFCG security authorizations, and can trigger automated business transactions (e.g. creating a purchase requisition or posting a payment clearance) through standard APIs.',
    details: [
      'Zero Prompt Engineering required by end users; Joule understands ERP terminology natively.',
      'Role-based security: users only see answers and records permitted by their existing SAP authorizations.',
      'Full audit logging in SAP Cloud ALM ensuring every AI recommendation has verifiable provenance.'
    ]
  },
  {
    id: 'faq-2',
    category: 'privacy',
    categoryLabel: 'Privacy & Security',
    q: 'How does SAP guarantee customer data privacy and prevent foundational LLMs from training on our ERP data?',
    aiTakeaway: 'SAP enforces strict Tenant Boundary Isolation with a legal Zero Data Retention guarantee. No customer ERP telemetry, master data, or prompts are ever used to train commercial AI models.',
    a: 'Enterprise security is the cornerstone of SAP Business AI. All generative AI requests transit through the SAP BTP Generative AI Hub, which acts as a fortified security gateway between your SAP landscape and foundational model providers (such as Azure OpenAI, AWS Bedrock, or Google Cloud Vertex AI). Strict enterprise agreements stipulate that inference calls are stateless: prompts are processed, results returned, and memory purged immediately. Furthermore, automated PII masking sanitizes sensitive identifiers (such as bank IBANs and personal IDs) before payloads leave your tenant.',
    details: [
      'EU AI Act & GDPR compliant with sovereign EU cloud and US FedRAMP hosting availability.',
      'Prompt Shield actively blocks jailbreaks, prompt injection, and harmful output payloads.',
      'End-to-end encryption in transit (mTLS) and at rest (AES-256) with customer-managed encryption keys.'
    ]
  },
  {
    id: 'faq-3',
    category: 'clean-core',
    categoryLabel: 'Clean Core & Architecture',
    q: 'How does SAP Business AI align with the SAP Clean Core strategy?',
    aiTakeaway: 'Zero custom code modifications inside the ERP core. All custom AI extensions, vector embeddings, and LLM integrations run side-by-side on SAP BTP using released APIs.',
    a: 'Clean Core mandates that the standard ERP runtime remains pristine so that cloud upgrades occur automatically without regression testing nightmares. SAP Business AI strictly adheres to this standard. Pre-built AI capabilities are delivered as cloud-native microservices integrated into standard Fiori apps. Custom AI applications are developed on SAP BTP using the RESTful Application Programming (RAP) model, Cloud Application Programming (CAP), and released Core Data Services (CDS) views, communicating with the core via standard OData v4 and SAP Event Mesh.',
    details: [
      'Automated seamless bi-annual S/4HANA Cloud upgrades without breaking AI workflows.',
      'Decoupled architecture preserves the longevity and auditability of your ERP investments.',
      'Extensible via SAP Build Code, allowing citizen and professional developers to build custom Joule skills.'
    ]
  },
  {
    id: 'faq-4',
    category: 'licensing',
    categoryLabel: 'Licensing & AI Units',
    q: 'How is SAP Business AI licensed, and what is an "SAP AI Unit"?',
    aiTakeaway: 'Standard Joule interactions are bundled into modern RISE with SAP Cloud editions, while custom Generative AI Hub extensions consume metered "SAP AI Units" based on usage.',
    a: 'SAP Business AI utilizes a dual-tier commercial framework. Embedded AI features (such as foundational Joule Copilot queries in S/4HANA Cloud Public Edition or standard SuccessFactors talent matches) are included directly in RISE with SAP Premium and Cloud ERP subscriptions. For bespoke generative AI applications, high-volume vector search in SAP HANA Cloud, or routing requests through third-party LLMs on the Generative AI Hub, organizations consume "SAP AI Units"—a predictable, metered currency that scales with actual inference consumption.',
    details: [
      'Granular cost transparency: monitor AI Unit burn-rates by department or application in SAP BTP Cockpit.',
      'No upfront GPU infrastructure purchase or on-premise hardware maintenance required.',
      'Flexibility to switch between cost-effective models (e.g. GPT-4o-mini) and high-reasoning models (Claude 3.5 Sonnet).'
    ]
  },
  {
    id: 'faq-5',
    category: 'joule',
    categoryLabel: 'Joule Copilot',
    q: 'Can organizations running on-premise SAP ECC 6.0 or S/4HANA On-Premise leverage SAP Business AI?',
    aiTakeaway: 'While native Joule Copilot is optimized for Cloud ERP, hybrid on-premise landscapes can access Generative AI Hub capabilities via SAP BTP and SAP Integration Suite Cloud Connectors.',
    a: 'Enterprises on ECC 6.0 or private on-premise S/4HANA can still harness the power of SAP Business AI through side-by-side architecture. By deploying SAP BTP and connecting on-premise systems via secure SAP Cloud Connectors, organizations can build custom generative AI applications, automate invoice processing, and implement predictive analytics without undertaking an immediate full-scale ERP migration.',
    details: [
      'Cloud Connector creates an encrypted reverse tunnel without opening inbound firewall ports.',
      'Enables legacy landscapes to start achieving tangible AI ROI while planning their S/4HANA cloud roadmap.',
      'Seamless stepping stone towards complete RISE with SAP and Cloud ERP transformation.'
    ]
  },
  {
    id: 'faq-6',
    category: 'privacy',
    categoryLabel: 'Privacy & Security',
    q: 'How does SAP Business AI eliminate hallucinations in high-stakes financial and supply chain decisions?',
    aiTakeaway: 'Through Retrieval-Augmented Generation (RAG) grounded in deterministic SAP database tables (ACDOCA, BSEG, MARC) and strict business validation rules.',
    a: 'Unlike public AI models that generate text based on probabilistic word guessing, SAP Business AI relies on Retrieval-Augmented Generation (RAG) anchored by the SAP HANA Cloud Vector Engine. Prompts are fused with immutable, verified master and transactional data extracted through released CDS views. Before any automated update is committed to the universal journal, standard SAP business logic validations, currency precision checks, and balancing rules are strictly enforced.',
    details: [
      'Every answer provides verifiable ERP citations linking back to original journal entry and document IDs.',
      'Configurable confidence thresholds: transactions below 95% confidence route to human approvers.',
      'Separation of reasoning engine from database: LLM does not write raw SQL; it communicates via controlled APIs.'
    ]
  },
  {
    id: 'faq-7',
    category: 'clean-core',
    categoryLabel: 'Clean Core & Architecture',
    q: 'Which foundational AI models are supported on the SAP BTP Generative AI Hub?',
    aiTakeaway: 'SAP offers a multi-model ecosystem including OpenAI (GPT-4o), Anthropic (Claude 3.5 Sonnet), Mistral Large, Meta (Llama 3), and Google Gemini—all swappable without recoding.',
    a: 'SAP avoids single-vendor lock-in. Through the BTP Generative AI Hub, developers and enterprise architects gain instantaneous access to top-tier models from OpenAI, Anthropic, Mistral AI, Meta, and Google. The hub abstracts vendor-specific API differences, enabling your development team to write code once using the SAP GenAI SDK and switch underlying models via configuration as newer, faster, or more cost-effective models emerge.',
    details: [
      'Direct orchestration across OpenAI GPT-4o, Anthropic Claude 3.5, Mistral Large, and Llama 3 70B.',
      'Integrated benchmarking tools to measure latency, accuracy, and token cost across different models.',
      'Sovereign deployment options hosted in European, North American, and Asia-Pacific hyperscaler regions.'
    ]
  },
  {
    id: 'faq-8',
    category: 'licensing',
    categoryLabel: 'Licensing & AI Units',
    q: 'What is Knooviq’s methodology and timeline for implementing our first SAP Business AI use case?',
    aiTakeaway: 'Our accelerated 4-Phase framework delivers production AI value in as little as 6 to 9 weeks with zero core modification.',
    a: 'Knooviq guides enterprises through an agile, low-risk adoption lifecycle. We start with a 2-week AI Readiness Diagnostic analyzing your existing transaction data quality and high-friction manual bottlenecks. Next, we configure your SAP BTP Generative AI Hub tenant and establish secure identity federation. Within 4 weeks, we calibrate and deploy an initial high-impact scenario (such as Intelligent Cash Application or Sourcing RFQ synthesis), measuring actual labor hours saved before scaling across other LOBs.',
    details: [
      'Phase 1: Process mining and AI value discovery (2 Weeks)',
      'Phase 2: BTP AI Hub setup, security guardrails, and tenant provisioning (2 Weeks)',
      'Phase 3: High-impact scenario pilot deployment and user enablement (4 Weeks)',
      'Phase 4: Enterprise scale-out, AI Unit optimization, and governance review (Ongoing)'
    ]
  }
];

export const SapBusinessAiPage: React.FC<TechnologyPageProps> = ({ onOpenContact }) => {
  const [activeScenarioId, setActiveScenarioId] = useState<string>('finance');
  const [activeCatalogDomain, setActiveCatalogDomain] = useState<'all' | 'finance' | 'supply-chain' | 'procurement' | 'hr' | 'cx' | 'clean-core' | 'governance'>('all');
  const [activeLobTab, setActiveLobTab] = useState<'finance' | 'supply-chain' | 'procurement' | 'hr'>('finance');
  const [faqCategory, setFaqCategory] = useState<'all' | 'joule' | 'privacy' | 'clean-core' | 'licensing'>('all');
  const [faqSearch, setFaqSearch] = useState<string>('');
  const [expandedFaqId, setExpandedFaqId] = useState<string>('faq-1');

  const currentScenario = JOULE_SCENARIOS.find((s) => s.id === activeScenarioId) || JOULE_SCENARIOS[0];

  const filteredScenarios = PREBUILT_SCENARIOS.filter((item) => {
    return activeCatalogDomain === 'all' || item.domain === activeCatalogDomain;
  });

  const filteredFaqs = SAP_AI_FAQS.filter((faq) => {
    const matchesCategory = faqCategory === 'all' || faq.category === faqCategory;
    const matchesSearch =
      faqSearch.trim() === '' ||
      faq.q.toLowerCase().includes(faqSearch.toLowerCase()) ||
      faq.a.toLowerCase().includes(faqSearch.toLowerCase()) ||
      faq.aiTakeaway.toLowerCase().includes(faqSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const lobDetails = {
    finance: {
      title: 'Finance & Treasury Intelligence',
      badge: 'FINANCIAL ACCURACY',
      image: '/images/sap_business_ai_finance_treasury_intelligence.png',
      manualPain: 'Accountants spend 18+ hours weekly manually reconciling obscure remittance notices, cross-referencing bank statements, and calculating currency discrepancies across multiple corporate legal entities.',
      aiSolution: 'Intelligent Cash Application and Anomaly Detection parse bank telecommunication files (MT940/CAMT) in real-time, matching 90%+ of line items autonomously into the ACDOCA universal ledger with full audit traceability.',
      kpis: ['88% Reduction in Manual Matching', 'Sub-Second Anomaly Detection', 'Zero Clean Core Contamination']
    },
    'supply-chain': {
      title: 'Autonomous Supply Chain & Demand Sensing',
      badge: 'RESILIENT OPERATIONS',
      image: '/images/sap_business_ai_demand_sensing_lead_time.png',
      manualPain: 'Demand planners rely on backward-looking sales reports and static Excel models, resulting in either catastrophic component stockouts or tens of millions in tied-up working capital across regional depots.',
      aiSolution: 'Machine learning algorithms ingest real-time POS velocity, external shipping weather events, and supplier lead-time variances, continuously updating dynamic safety stocks directly inside SAP IBP and S/4HANA.',
      kpis: ['32% Reduction in Safety Stock Buffer', '99.4% Fulfillment Reliability', 'Continuous Automated Rescheduling']
    },
    procurement: {
      title: 'Cognitive Procurement & Contract Intelligence',
      badge: 'STRATEGIC SPEND',
      image: '/images/sap_business_ai_generative_sourcing_rfq.png',
      manualPain: 'Procurement teams struggle to inspect thousands of line-item bids and supplier sustainability declarations, leaving companies exposed to single-source disruptions and unvetted supplier solvency risks.',
      aiSolution: 'Natural Language Processing scans hundreds of pages of RFP documentation, scoring suppliers against ESG compliance, historical delivery performance, and contractual liability clauses in minutes.',
      kpis: ['4x Faster RFP Bid Synthesis', '100% Contract Clause Compliance', 'Real-Time Vendor Financial Health Alerts']
    },
    hr: {
      title: 'Workforce Agility & Talent Intelligence',
      badge: 'EMPLOYEE EXPERIENCE',
      image: '/images/sap_business_ai_skills_ontology_mobility.png',
      manualPain: 'Enterprise talent managers lack visibility into true internal employee capabilities, resulting in expensive outside hiring while internal staff disengage due to stagnant career progression pathways.',
      aiSolution: 'Ethical AI models in SAP SuccessFactors continuously map institutional employee skills, automatically surfacing internal project gigs, personalized mentorship opportunities, and targeted career paths.',
      kpis: ['65% Higher Internal Mobility', '3x Faster Project Staffing', 'Zero Unconscious Bias in Candidate Matching']
    }
  };

  const currentLob = lobDetails[activeLobTab];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-slate-100 font-sans antialiased selection:bg-[#00A3E0] selection:text-white">

      {/* =========================================================================
          HERO SECTION: Full-Screen Bright Enterprise AI Operations Visual (Zero Box)
          ========================================================================= */}
      <section className="relative w-full min-h-screen flex flex-col justify-between pt-28 sm:pt-32 pb-0 overflow-hidden bg-slate-950 text-white border-b border-white/10">
        
        {/* Full-Screen Edge-to-Edge Hero Image Background (Bright & High-Clarity Enterprise AI Operations) */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/sap_business_ai_hero_bright.jpg"
            alt="Modern SAP Business AI Enterprise Operations Center"
            className="w-full h-full object-cover object-center lg:object-[78%_center] opacity-100 brightness-110 contrast-105 transition-all duration-700"
          />
          {/* Asymmetric Scrim: Confined strictly to the left behind text, leaving the central/right operations center and neural screens 100% bright, pure, and unobstructed */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#030914]/95 via-[#030914]/85 to-transparent lg:w-[58%] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030914]/60 via-transparent to-[#030914]/40 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(#00A3E0_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />
        </div>

        {/* Hero Content: Left Column for Text, Right Column Open for Full-Screen Operations Visual */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 my-auto w-full py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Heading, Proposition, Chips & Action Buttons (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-[#00A3E0]/60 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 shadow-md backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-[#00A3E0] animate-pulse" />
                <span>SAP BUSINESS AI &bull; PURPOSE-BUILT ENTERPRISE INTELLIGENCE</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black text-white tracking-tight leading-[1.12]">
                Contextual Intelligence <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A3E0] via-cyan-300 to-sky-200">
                  Embedded In Every SAP Transaction
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                Generic external AI chatbots don't understand your universal ledger, supply chain bills of material, or customer hierarchies. <strong className="text-white font-semibold">SAP Business AI</strong> weaves native machine intelligence directly into your core business processes—governed by strict tenant privacy and clean core architecture.
              </p>

              {/* Telemetry Chips */}
              <div className="grid grid-cols-3 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-[#050D1C]/80 border border-white/10 backdrop-blur-md shadow-sm">
                  <div className="text-xs font-mono text-[#00A3E0] font-bold">COPILOT</div>
                  <div className="text-sm font-bold text-white mt-0.5">Joule AI</div>
                  <div className="text-[11px] text-slate-400">Contextual Assistant</div>
                </div>
                <div className="p-3 rounded-xl bg-[#050D1C]/80 border border-white/10 backdrop-blur-md shadow-sm">
                  <div className="text-xs font-mono text-emerald-400 font-bold">PRIVACY</div>
                  <div className="text-sm font-bold text-white mt-0.5">Zero Training</div>
                  <div className="text-[11px] text-slate-400">Tenant-Bound Security</div>
                </div>
                <div className="p-3 rounded-xl bg-[#050D1C]/80 border border-white/10 backdrop-blur-md shadow-sm">
                  <div className="text-xs font-mono text-cyan-300 font-bold">CLEAN CORE</div>
                  <div className="text-sm font-bold text-white mt-0.5">Direct BTP</div>
                  <div className="text-[11px] text-slate-400">Universal Ledger Aware</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenContact('SAP Business AI Advisory')}
                  className="px-6 py-3.5 rounded-xl font-bold text-sm bg-[#00A3E0] hover:bg-[#008cc0] text-white shadow-xl shadow-[#00A3E0]/30 transition-all flex items-center gap-2 group cursor-pointer"
                >
                  <span>Request Live Architecture Demo</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Bottom Hero Quantified Value KPI Strip */}
        <div className="relative z-10 w-full border-t border-white/15 bg-[#040B17]/90 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-2">
                <div className="text-xl sm:text-2xl font-black text-[#00A3E0]">42% Faster</div>
                <div className="text-xs text-slate-300 font-medium">Month-End Financial Close</div>
              </div>
              <div className="p-2 border-l border-white/10">
                <div className="text-xl sm:text-2xl font-black text-emerald-400">98.4% Precision</div>
                <div className="text-xs text-slate-300 font-medium">Autonomous Cash Application</div>
              </div>
              <div className="p-2 border-l border-white/10">
                <div className="text-xl sm:text-2xl font-black text-cyan-300">35% Reduction</div>
                <div className="text-xs text-slate-300 font-medium">Inventory Buffer Carrying Cost</div>
              </div>
              <div className="p-2 border-l border-white/10">
                <div className="text-xl sm:text-2xl font-black text-white">100% Tenant Boundary</div>
                <div className="text-xs text-slate-300 font-medium">Zero Public Model Retraining</div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* =========================================================================
          SECTION 2: DEDICATED JOULE COPILOT SIMULATOR COMMAND CENTER
          ========================================================================= */}
      <section id="joule-simulator" className="py-20 bg-[#061224] border-b border-white/10 text-white relative overflow-hidden">
        
        {/* Ambient Subtle Glow */}
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#00A3E0]/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-[#00A3E0]/40 text-xs font-mono font-bold uppercase text-cyan-300 mb-3">
              <Bot className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>INTERACTIVE JOULE COPILOT COMMAND CENTER</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Experience SAP Joule Copilot In Action
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2">
              Select an enterprise role below to test how Joule reasons over live S/4HANA tables, provides verifiable ledger citations, and prepares automated transaction payloads.
            </p>
          </div>

          {/* Centered Sleek Joule Copilot Console */}
          <div className="rounded-2xl border-2 border-[#00A3E0]/50 bg-[#08152B]/95 shadow-2xl overflow-hidden backdrop-blur-xl">
            
            {/* Console Header Bar */}
            <div className="px-5 py-3.5 bg-[#050D1C] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 font-mono text-xs text-slate-300 flex items-center gap-1.5">
                  <Bot className="w-3.5 h-3.5 text-[#00A3E0]" />
                  <span>SAP Joule Copilot &bull; Production Tenant Console</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  LIVE CDS GROUNDING
                </span>
              </div>
            </div>

            {/* Scenario Selector Tabs */}
            <div className="px-4 pt-3.5 pb-2.5 border-b border-white/5 flex gap-2 overflow-x-auto custom-scrollbar">
              {JOULE_SCENARIOS.map((sc) => (
                <button
                  key={sc.id}
                  onClick={() => setActiveScenarioId(sc.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                    activeScenarioId === sc.id
                      ? 'bg-[#00A3E0] text-white shadow-md font-bold'
                      : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {sc.tabLabel}
                </button>
              ))}
            </div>

            {/* Simulated Conversation Body */}
            <div className="p-6 space-y-5 min-h-[380px] flex flex-col justify-between">
              
              <div className="space-y-4">
                {/* User Prompt Bubble */}
                <div className="flex items-start gap-3 justify-end">
                  <div className="max-w-xl bg-[#0F2244] border border-[#00A3E0]/30 rounded-2xl rounded-tr-sm p-4 text-xs text-slate-100 shadow-md">
                    <div className="text-[10px] font-mono text-cyan-300 font-bold mb-1.5 flex items-center gap-1.5">
                      <Users2 className="w-3.5 h-3.5" />
                      <span>{currentScenario.role} ({currentScenario.module})</span>
                    </div>
                    <p className="font-medium text-slate-200 text-sm">{currentScenario.prompt}</p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-xs font-bold shrink-0 shadow">
                    U
                  </div>
                </div>

                {/* Joule AI Response Card */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentScenario.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#00A3E0] to-blue-700 flex items-center justify-center text-white shrink-0 shadow-lg shadow-[#00A3E0]/30">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    
                    <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm p-5 space-y-3.5">
                      <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-2.5">
                        <span className="text-sm font-bold text-[#00A3E0] flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          <span>{currentScenario.responseHeadline}</span>
                        </span>
                        <span className="text-[10px] font-mono font-bold text-emerald-300 bg-emerald-950/60 px-2.5 py-0.5 rounded border border-emerald-500/30">
                          {currentScenario.confidence} MATCH
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                        {currentScenario.responseBody}
                      </p>

                      <div className="p-3 rounded-lg bg-black/40 border border-white/10 text-xs font-mono text-slate-300 flex items-center gap-2">
                        <Database className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span className="truncate">{currentScenario.erpCitation}</span>
                      </div>

                      {/* Recommended Autonomous Actions */}
                      <div className="pt-1">
                        <div className="text-[11px] font-mono uppercase font-bold text-slate-400 mb-2 flex items-center gap-1.5">
                          <CornerDownRight className="w-3.5 h-3.5 text-[#00A3E0]" />
                          <span>Automated Action Payload:</span>
                        </div>
                        <div className="space-y-1.5">
                          {currentScenario.actionDetails.map((action, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                              <span>{action}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Simulator Bottom Input Mock */}
              <div className="pt-3">
                <div className="p-3 rounded-xl bg-black/50 border border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-2 italic">
                    <Terminal className="w-4 h-4 text-[#00A3E0]" />
                    <span>Prompt Joule in natural language or execute automated flow...</span>
                  </span>
                  <button 
                    onClick={() => onOpenContact('Joule Copilot Trial')}
                    className="p-2 rounded-lg bg-[#00A3E0] text-white hover:bg-cyan-500 transition-colors shadow"
                    title="Simulate prompt"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: PRE-BUILT SAP BUSINESS AI SCENARIOS CATALOG (Interactive Explorer with Rich Images)
          ========================================================================= */}
      <section id="scenarios" className="py-20 bg-white dark:bg-[#070E1C] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700/50 text-xs font-mono font-bold uppercase text-blue-700 dark:text-blue-300 mb-3">
              <Boxes className="w-3.5 h-3.5" />
              <span>PRE-BUILT ENTERPRISE USE CASES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Pre-Built SAP Business AI Scenarios
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2">
              Over 300+ pre-trained AI scenarios ready to deploy across your core SAP landscape with zero core modifications and immediate time-to-value.
            </p>
          </div>

          {/* Domain Filter Tabs */}
          <div className="flex justify-center gap-2 mb-10 overflow-x-auto pb-2">
            {[
              { key: 'all', label: 'All Scenarios', icon: <Boxes className="w-4 h-4" /> },
              { key: 'finance', label: 'Finance & Treasury', icon: <CreditCard className="w-4 h-4" /> },
              { key: 'supply-chain', label: 'Supply Chain & IBP', icon: <ShoppingBag className="w-4 h-4" /> },
              { key: 'procurement', label: 'Procurement (Ariba)', icon: <Layers className="w-4 h-4" /> },
              { key: 'hr', label: 'SuccessFactors HR', icon: <Users2 className="w-4 h-4" /> },
              { key: 'cx', label: 'Customer Experience', icon: <BarChart3 className="w-4 h-4" /> },
              { key: 'clean-core', label: 'Clean Core ERP', icon: <FileCode className="w-4 h-4" /> },
              { key: 'governance', label: 'Trust & Governance', icon: <ShieldCheck className="w-4 h-4" /> }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveCatalogDomain(tab.key as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeCatalogDomain === tab.key
                    ? 'bg-[#00A3E0] text-white shadow-md shadow-[#00A3E0]/25'
                    : 'bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Scenarios Grid with Rich Header Preview Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredScenarios.map((sc) => (
              <div
                key={sc.id}
                className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0B1528] hover:border-[#00A3E0]/50 transition-all flex flex-col justify-between group shadow-sm hover:shadow-xl overflow-hidden"
              >
                {/* Visual Header Image */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-800">
                  <img
                    src={sc.image}
                    alt={sc.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-105 contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528] via-[#0B1528]/20 to-transparent" />

                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-md bg-[#00A3E0]/95 text-white backdrop-blur-md shadow-md">
                      {sc.badge}
                    </span>
                  </div>
                  
                  <div className="absolute top-3 right-3 flex items-center gap-1.5">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-black/70 text-cyan-300 border border-white/20 backdrop-blur-md">
                      {sc.sapModule}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-[#00A3E0] transition-colors leading-snug">
                      {sc.title}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {sc.description}
                    </p>
                  </div>

                  <div className="space-y-2 pt-3 border-t border-slate-200 dark:border-white/10 text-[11px] font-mono">
                    <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
                      <span>ERP Tables:</span>
                      <span className="font-semibold text-slate-700 dark:text-slate-200">{sc.keyTables}</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
                      <span>AI Model:</span>
                      <span className="font-semibold text-cyan-600 dark:text-cyan-400">{sc.aiMechanism}</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 border-t border-slate-200 dark:border-white/10 bg-emerald-50 dark:bg-emerald-950/20">
                  <div className="text-[11px] font-bold text-emerald-700 dark:text-emerald-300 flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    <span>{sc.businessImpact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: LINE-OF-BUSINESS MATRIX (Interactive Process Transformation with Visual Showcase)
          ========================================================================= */}
      <section className="py-20 bg-slate-50 dark:bg-[#040A17] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700/50 text-xs font-mono font-bold uppercase text-blue-700 dark:text-blue-300 mb-3">
              <Workflow className="w-3.5 h-3.5" />
              <span>MEASURABLE BUSINESS IMPACT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Line-of-Business AI Transformation Matrix
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2">
              Compare traditional manual ERP execution against embedded autonomous SAP Business AI workflows across your core departments.
            </p>
          </div>

          {/* Department Tabs */}
          <div className="flex justify-center gap-2 mb-8 overflow-x-auto pb-2">
            {[
              { key: 'finance', label: 'Finance & Treasury', icon: <CreditCard className="w-4 h-4" /> },
              { key: 'supply-chain', label: 'Supply Chain & Logistics', icon: <ShoppingBag className="w-4 h-4" /> },
              { key: 'procurement', label: 'Procurement & Spend', icon: <Layers className="w-4 h-4" /> },
              { key: 'hr', label: 'Workforce & Talent', icon: <Users2 className="w-4 h-4" /> }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveLobTab(tab.key as any)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeLobTab === tab.key
                    ? 'bg-[#00A3E0] text-white shadow-lg shadow-[#00A3E0]/25'
                    : 'bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Visual Showcase Banner for Active Department */}
          <div className="mb-8 rounded-2xl overflow-hidden relative border border-slate-200 dark:border-white/10 h-56 sm:h-72 shadow-xl group/lob">
            <img
              src={currentLob.image}
              alt={currentLob.title}
              className="w-full h-full object-cover filter brightness-105 contrast-105 group-hover/lob:scale-105 transition-transform duration-500"
            />
            {/* Scrim strictly behind text on the left, keeping center and right bright and clear */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#030914]/90 via-[#030914]/60 to-transparent flex items-center p-6 sm:p-10 pointer-events-none">
              <div className="max-w-xl space-y-2">
                <span className="text-xs font-mono font-bold text-[#00A3E0] uppercase tracking-wider bg-blue-500/20 px-3 py-1 rounded-full border border-[#00A3E0]/40 inline-block backdrop-blur-md">
                  {currentLob.badge} &bull; PROCESS RE-ENGINEERING
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  {currentLob.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 font-normal leading-relaxed">
                  Eliminate manual transaction delays, transcription friction, and reconciliation bottlenecks with native SAP Business AI.
                </p>
              </div>
            </div>
          </div>

          {/* Side-by-Side Comparison Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Left Card: Traditional Legacy Bottleneck */}
            <div className="p-8 rounded-2xl border-2 border-rose-200 dark:border-rose-900/30 bg-rose-50/40 dark:bg-rose-950/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>TRADITIONAL MANUAL ERP PROCESS</span>
                  </span>
                  <span className="text-xs text-slate-500 font-mono">STATUS QUO</span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  High Latency & Reactive Human Execution
                </h3>

                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-6 font-normal">
                  {currentLob.manualPain}
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-rose-200/60 dark:border-rose-900/40 text-xs text-rose-800 dark:text-rose-300 font-medium">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 shrink-0" />
                  <span>Significant processing latency measured in days</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>Prone to transcription errors and reconciliation fatigue</span>
                </div>
              </div>
            </div>

            {/* Right Card: SAP Business AI Autonomous Flow */}
            <div className="p-8 rounded-2xl border-2 border-[#00A3E0]/40 bg-gradient-to-br from-sky-50/70 via-white to-sky-50/30 dark:from-[#091B33] dark:via-[#071324] dark:to-[#071324] flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#00A3E0] text-white shadow-sm">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>SAP BUSINESS AI AUTONOMOUS FLOW</span>
                  </span>
                  <span className="text-xs text-[#00A3E0] font-mono font-bold">{currentLob.badge}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  Touchless Sub-Second Operational Velocity
                </h3>

                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-6 font-normal">
                  {currentLob.aiSolution}
                </p>
              </div>

              {/* Quantified Value KPI Strip */}
              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-sky-200 dark:border-white/10">
                {currentLob.kpis.map((kpi, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-white dark:bg-white/5 border border-sky-200/60 dark:border-white/10 text-center">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mx-auto mb-1" />
                    <span className="text-[11px] font-bold text-slate-900 dark:text-white leading-tight block">
                      {kpi}
                    </span>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: ENTERPRISE TRUST, PRIVACY & EU AI ACT GOVERNANCE STACK (With Visual Security Vault)
          ========================================================================= */}
      <section className="py-20 bg-white dark:bg-[#070E1C] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-700/50 text-xs font-mono font-bold uppercase text-emerald-700 dark:text-emerald-300 mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>RESPONSIBLE AI GOVERNANCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Enterprise Trust & Governance Architecture
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2">
              Why enterprise CIOs trust SAP Business AI over generic public LLM integrations. Strict tenant boundary isolation, automatic PII redaction, and full regulatory compliance.
            </p>
          </div>

          {/* Visual Security Banner */}
          <div className="mb-10 rounded-2xl overflow-hidden relative border border-slate-200 dark:border-white/10 h-64 sm:h-80 shadow-xl group/sec">
            <img
              src="/images/sap_business_ai_zero_data_retention_eu_ai_act.png"
              alt="Zero Data Retention & EU AI Act Guardrails"
              className="w-full h-full object-cover object-[center_30%] sm:object-cover filter brightness-105 contrast-105 group-hover/sec:scale-105 transition-transform duration-500"
            />
            {/* Scrim confined strictly to left side so robot judge and EU flag on right remain 100% bright, pure, and vibrant */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#030914]/90 via-[#030914]/55 to-transparent flex items-center p-6 sm:p-10 pointer-events-none">
              <div className="max-w-xl space-y-2">
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-500/40 inline-flex items-center gap-1.5 backdrop-blur-md">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>SOVEREIGN CLOUD & TENANT PRIVACY</span>
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  Zero Data Retention & EU AI Act Guardrails
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 font-normal leading-relaxed">
                  Your business telemetry never leaves your enterprise tenant boundary. Prompts are sanitized with real-time PII masking and strictly audited in SAP Cloud ALM.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-[#00A3E0]">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Zero Data Training</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Enterprise legal guarantee that your ERP master data, journal entries, and employee conversations will never be used to train commercial foundation models.
              </p>
              <div className="pt-2 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> SLA Guaranteed
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Prompt Shield & PII Mask</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                In-flight anonymization automatically strips customer tax IDs, bank IBANs, and employee personal data before prompts reach inference endpoints.
              </p>
              <div className="pt-2 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> Real-Time Redaction
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">EU AI Act & ISO 42001</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Audited risk classification compliant with European AI regulations, ensuring human-in-the-loop validation for all high-risk automated transactions.
              </p>
              <div className="pt-2 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> Full Audit Trail
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">PFCG Role Inheritance</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Joule inherits each user's exact SAP authorization profile. A warehouse supervisor cannot query C-level compensation packages via prompt injection.
              </p>
              <div className="pt-2 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> Strict Authorization
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: ARCHITECTURAL BLUEPRINT (SAP Generative AI Hub on BTP with Visual Architecture)
          ========================================================================= */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        
        {/* Subtle Background Mesh Image */}
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80"
            alt="Global Cloud Network"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300">
                <Cpu className="w-4 h-4" />
                <span>SAP BTP GENERATIVE AI HUB</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                One Gateway. Any Foundation Model. <br />
                <span className="text-[#00A3E0]">Zero Clean Core Contamination.</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Connect your business applications directly to leading foundational LLMs (OpenAI GPT-4o, Anthropic Claude 3.5, Mistral Large, Meta Llama 3) through SAP's unified Generative AI Hub on Business Technology Platform (BTP).
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#00A3E0]/20 flex items-center justify-center text-[#00A3E0] shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Automated PII & Masking Guardrails</h4>
                    <p className="text-xs text-slate-400">Customer social security numbers, bank IBANs, and pricing agreements are redacted before prompts touch external inference APIs.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#00A3E0]/20 flex items-center justify-center text-[#00A3E0] shrink-0 mt-0.5">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Zero Model Training Guarantee</h4>
                    <p className="text-xs text-slate-400">Strict legal enterprise SLA guarantees no commercial AI vendor will ever use your proprietary ERP telemetry to train foundational weights.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#00A3E0]/20 flex items-center justify-center text-[#00A3E0] shrink-0 mt-0.5">
                    <Database className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Sovereign Cloud & Multi-Region Hosting</h4>
                    <p className="text-xs text-slate-400">Deployable across Microsoft Azure, AWS, and Google Cloud with sovereign EU and US regional residency compliance.</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Architecture Stack Diagram */}
            <div className="lg:col-span-7">
              <div className="p-6 rounded-2xl bg-[#0B1528] border-2 border-white/10 shadow-2xl space-y-3">
                
                <div className="p-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-[#00A3E0] text-center font-bold text-sm tracking-wide text-white shadow-md">
                  1. CONSUMPTION LAYER: SAP S/4HANA &bull; Joule Copilot &bull; Custom Fiori Apps
                </div>

                <div className="text-center font-mono text-[11px] text-cyan-300 font-bold uppercase tracking-widest py-0.5">
                  &darr; OData v4 &bull; Event Mesh &bull; BTP Destinations &darr;
                </div>

                <div className="p-5 rounded-xl bg-white/5 border border-cyan-500/30 space-y-3">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-xs font-mono font-bold text-cyan-300 uppercase">2. SAP BTP GENERATIVE AI HUB GATEWAY</span>
                    <span className="text-[10px] bg-cyan-950 text-cyan-200 px-2 py-0.5 rounded border border-cyan-800">Prompt Shield & Reranker</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="p-2 rounded bg-black/40 border border-white/5">
                      <span className="text-slate-300 block font-semibold">Guardrails</span>
                      <span className="text-[10px] text-slate-500">Harm & PII Filter</span>
                    </div>
                    <div className="p-2 rounded bg-black/40 border border-white/5">
                      <span className="text-slate-300 block font-semibold">Context Augment</span>
                      <span className="text-[10px] text-slate-500">HANA Vector DB</span>
                    </div>
                    <div className="p-2 rounded bg-black/40 border border-white/5">
                      <span className="text-slate-300 block font-semibold">Telemetry & Metering</span>
                      <span className="text-[10px] text-slate-500">AI Unit Token Tracking</span>
                    </div>
                  </div>
                </div>

                <div className="text-center font-mono text-[11px] text-cyan-300 font-bold uppercase tracking-widest py-0.5">
                  &darr; Zero-Data-Retention Sovereign Inference &darr;
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/10 grid grid-cols-4 gap-2 text-center text-xs font-bold text-slate-200">
                  <div className="p-2 rounded bg-white/5 border border-white/5">OpenAI GPT-4o</div>
                  <div className="p-2 rounded bg-white/5 border border-white/5">Claude 3.5 Sonnet</div>
                  <div className="p-2 rounded bg-white/5 border border-white/5">Mistral Large</div>
                  <div className="p-2 rounded bg-white/5 border border-white/5">Llama 3 70B</div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: COMPREHENSIVE QUESTION-ANSWERING (Q&A / FAQ SECTION with Advisory Card)
          ========================================================================= */}
      <section id="faq-section" className="py-20 bg-slate-50 dark:bg-[#030712] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-900/30 border border-cyan-200 dark:border-cyan-700/50 text-xs font-mono font-bold uppercase text-cyan-700 dark:text-cyan-300 mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>EXECUTIVE & TECHNICAL QUESTION-ANSWERING</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              SAP Business AI: Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2">
              Everything enterprise CIOs, SAP leaders, and architects need to know about Joule, security guardrails, licensing units, and Clean Core compatibility.
            </p>
          </div>

          {/* Search & Category Filter Controls */}
          <div className="space-y-4 mb-8">
            {/* Search Bar */}
            <div className="relative">
              <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={faqSearch}
                onChange={(e) => setFaqSearch(e.target.value)}
                placeholder="Search questions (e.g. Joule, Clean Core, Data Privacy, AI Units, On-premise)..."
                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-300 dark:border-white/10 bg-white dark:bg-[#0B1528] text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00A3E0] shadow-sm transition-all"
              />
              {faqSearch && (
                <button
                  onClick={() => setFaqSearch('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
              {[
                { key: 'all', label: 'All Questions' },
                { key: 'joule', label: 'Joule Copilot' },
                { key: 'privacy', label: 'Data Privacy & Security' },
                { key: 'clean-core', label: 'Clean Core & Architecture' },
                { key: 'licensing', label: 'Licensing & AI Units' }
              ].map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setFaqCategory(cat.key as any)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    faqCategory === cat.key
                      ? 'bg-[#00A3E0] text-white shadow-sm'
                      : 'bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Expandable Q&A Accordion */}
          <div className="space-y-4">
            {filteredFaqs.length === 0 ? (
              <div className="p-8 text-center rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-500">
                <HelpCircle className="w-8 h-8 mx-auto mb-2 text-slate-400" />
                <p className="text-sm font-semibold">No questions matched your query.</p>
                <button
                  onClick={() => { setFaqSearch(''); setFaqCategory('all'); }}
                  className="mt-3 text-xs text-[#00A3E0] font-bold underline"
                >
                  Reset search filters
                </button>
              </div>
            ) : (
              filteredFaqs.map((faq) => {
                const isExpanded = expandedFaqId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#071324] overflow-hidden transition-all shadow-sm"
                  >
                    <button
                      onClick={() => setExpandedFaqId(isExpanded ? '' : faq.id)}
                      className="w-full text-left p-6 flex items-start justify-between gap-4 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                    >
                      <div className="space-y-1.5 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-blue-700/40">
                            {faq.categoryLabel}
                          </span>
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                          {faq.q}
                        </h3>
                      </div>
                      <div className={`p-2 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 transition-transform duration-200 shrink-0 ${isExpanded ? 'rotate-180 text-[#00A3E0]' : ''}`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-white/5 space-y-4">
                            
                            {/* Executive Takeaway Callout */}
                            <div className="p-4 rounded-xl bg-gradient-to-r from-sky-50 to-blue-50 dark:from-[#0B1E38] dark:to-[#08182D] border border-sky-200/80 dark:border-[#00A3E0]/30 flex items-start gap-3">
                              <Sparkles className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                              <div>
                                <span className="text-[11px] font-mono uppercase font-bold text-[#00A3E0] block mb-0.5">
                                  AI Executive Takeaway
                                </span>
                                <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-100 leading-relaxed">
                                  {faq.aiTakeaway}
                                </p>
                              </div>
                            </div>

                            {/* Full Detailed Answer */}
                            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                              {faq.a}
                            </p>

                            {/* Bullet Points */}
                            <div className="space-y-1.5 pt-1">
                              {faq.details.map((detail, idx) => (
                                <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                  <span>{detail}</span>
                                </div>
                              ))}
                            </div>

                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })
            )}
          </div>

          {/* Need Custom Architecture Advice CTA Card with Expert Photo */}
          <div className="mt-10 rounded-2xl overflow-hidden border border-[#00A3E0]/30 bg-gradient-to-r from-[#00A3E0]/15 via-blue-900/20 to-transparent shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 p-6 sm:p-8">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shrink-0 border-2 border-[#00A3E0]/50 shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=400&q=80"
                  alt="Knooviq SAP AI Advisory Team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  Have a specific SAP Business AI or Joule architecture question?
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 max-w-lg leading-relaxed">
                  Our certified SAP Enterprise AI architects review your existing landscape and provide a tailored feasibility analysis.
                </p>
              </div>
            </div>
            <button
              onClick={() => onOpenContact('SAP AI Technical Consultation')}
              className="px-6 py-3 rounded-xl bg-[#00A3E0] text-white font-bold text-xs hover:bg-[#008cc0] shadow-lg shadow-[#00A3E0]/30 transition-all whitespace-nowrap shrink-0"
            >
              Ask an SAP AI Architect
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 8: 4-PHASE IMPLEMENTATION ROADMAP
          ========================================================================= */}
      <section className="py-20 bg-white dark:bg-[#070E1C] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700/50 text-xs font-mono font-bold uppercase text-blue-700 dark:text-blue-300 mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>PROVEN DELIVERY FRAMEWORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Knooviq 4-Phase SAP AI Adoption Roadmap
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2">
              From initial readiness audit to production autonomous transactions with zero core disruption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 space-y-3 relative">
              <span className="text-2xl font-black text-[#00A3E0]/40 font-mono">01</span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">AI Readiness Audit</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Analyze S/4HANA release levels, Clean Core compatibility, and data quality across ACDOCA and master tables to pinpoint highest-ROI AI use cases.
              </p>
              <div className="text-[11px] font-mono font-bold text-[#00A3E0]">WEEKS 1 - 2</div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 space-y-3 relative">
              <span className="text-2xl font-black text-[#00A3E0]/40 font-mono">02</span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">BTP Hub & Security Setup</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Provision SAP BTP Generative AI Hub entitlements, establish Identity Authentication (IAS) federation, and configure Prompt Shield guardrails.
              </p>
              <div className="text-[11px] font-mono font-bold text-[#00A3E0]">WEEKS 3 - 4</div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 space-y-3 relative">
              <span className="text-2xl font-black text-[#00A3E0]/40 font-mono">03</span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Pilot Scenario Deployment</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Activate initial pre-built scenario (e.g., Cash Application or Sourcing RFQ synthesis), calibrate confidence thresholds, and enable user feedback.
              </p>
              <div className="text-[11px] font-mono font-bold text-[#00A3E0]">WEEKS 5 - 8</div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 space-y-3 relative">
              <span className="text-2xl font-black text-[#00A3E0]/40 font-mono">04</span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Scale & Value Realization</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Expand Joule Copilot across all core LOBs, monitor AI Unit consumption metrics, and continuously train organizational prompt practices.
              </p>
              <div className="text-[11px] font-mono font-bold text-[#00A3E0]">CONTINUOUS</div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 9: CALL TO ACTION & CONSULTATION (Full-Bleed Image Background)
          ========================================================================= */}
      <section className="relative py-24 overflow-hidden text-white">
        
        {/* Full-Bleed Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2400&q=85"
            alt="SAP Business AI Consultation Background"
            className="w-full h-full object-cover object-center filter brightness-[0.25] contrast-[1.15]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061426]/95 via-[#0A1931]/90 to-[#040D1A]/95" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-xs font-mono font-bold uppercase text-cyan-300 shadow-md backdrop-blur-md">
            <Zap className="w-3.5 h-3.5" />
            <span>KNOOVIQ ACCELERATED AI ONBOARDING</span>
          </span>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Ready to Activate Native SAP Business AI <br />
            <span className="text-[#00A3E0]">Within Your Existing Tenant?</span>
          </h2>

          <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Our certified SAP Enterprise Architects evaluate your current S/4HANA release, configure your BTP Generative AI Hub entitlements, and deploy Joule Copilots with zero core code contamination.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenContact('SAP Business AI Activation')}
              className="px-8 py-4 rounded-xl font-bold text-sm bg-[#00A3E0] text-white hover:bg-[#008cc0] shadow-xl shadow-[#00A3E0]/30 transition-all flex items-center gap-2 group"
            >
              <span>Schedule Architecture Feasibility Call</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <Link
              to="/transformation"
              className="px-6 py-4 rounded-xl font-semibold text-sm text-slate-200 hover:text-white border border-white/20 hover:border-white/40 transition-all bg-white/5 backdrop-blur-md"
            >
              <span>Explore Practice Hub &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};



