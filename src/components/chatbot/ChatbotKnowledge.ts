// ============================================================================
// KNOOVIQ AI ASSISTANT — VERIFIED ENTERPRISE KNOWLEDGE BASE & RETRIEVAL ENGINE
// ============================================================================

export interface NavLink {
  label: string;
  path: string;
  primary?: boolean;
}

export interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  navLinks?: NavLink[];
  followUps?: string[];
  showEnquiryForm?: boolean;
  defaultService?: string;
}

export interface BotResponse {
  text: string;
  navLinks?: NavLink[];
  followUps?: string[];
  showEnquiryForm?: boolean;
  defaultService?: string;
}

export const COMPANY_HEADQUARTERS = {
  name: 'Knooviq Industries Pvt. Ltd.',
  address: '1210, One World by Sanjar, Bhadran Nagar, Malad West, Mumbai (India)',
  email: 'contact@knooviq.com',
  phone: '+91 99877 52646',
  hours: 'Monday – Friday, 9:30 AM – 6:30 PM IST',
  website: 'https://knooviq.com',
};

// ----------------------------------------------------------------------------
// Initial Welcome State
// ----------------------------------------------------------------------------
export const WELCOME_GREETING = "Hello! Welcome to Knooviq Industries.";
export const WELCOME_SUBTITLE = "I'm here to help you explore SAP solutions, digital intelligence, enterprise products, and business transformation services.";

export const QUICK_ACTIONS = [
  {
    id: 'sap-solutions',
    title: 'Explore SAP Solutions',
    description: 'S/4HANA, BTP, Cloud ERP & Migration',
    query: 'Tell me about your SAP solutions and S/4HANA migration services',
  },
  {
    id: 'digital-ai',
    title: 'Digital Intelligence & AI',
    description: 'GenAI, AI Agents & Automation Suite',
    query: 'What digital intelligence and AI capabilities does Knooviq provide?',
  },
  {
    id: 'products',
    title: 'Products & Enterprise Solutions',
    description: 'EXIM, E-Invoice, E-Way Bill & GST',
    query: 'Tell me about Knooviq enterprise products like EXIM, E-Invoicing and GST',
  },
  {
    id: 'industries',
    title: 'Industries We Serve',
    description: 'Manufacturing, Energy, BFSI & EPC',
    query: 'Which industry verticals and sectors does Knooviq serve?',
  },
  {
    id: 'consultation',
    title: 'Request a Consultation',
    description: 'Connect with our solution architects',
    query: 'I would like to request an enterprise consultation',
  },
  {
    id: 'contact',
    title: 'Contact Our Team',
    description: 'Mumbai HQ, Email & Direct Desk',
    query: 'How can I contact Knooviq Industries or visit your Mumbai office?',
  },
];

// ----------------------------------------------------------------------------
// Semantic Matching & Response Generator
// ----------------------------------------------------------------------------

interface KnowledgeEntry {
  keywords: string[];
  intents: string[];
  response: () => BotResponse;
}

const KNOWLEDGE_BASE: KnowledgeEntry[] = [
  // 1. LEAD GENERATION / CONSULTATION / QUOTE
  {
    keywords: ['consultation', 'consult', 'quote', 'proposal', 'rfp', 'pricing', 'price', 'cost', 'estimate', 'demo', 'schedule call', 'talk to sales', 'enquiry', 'inquiry', 'meeting'],
    intents: ['lead_gen', 'consultation'],
    response: () => ({
      text: `We would be delighted to arrange a dedicated technical consultation with our enterprise solution architects.\n\nPlease share a few details below and our team will get back to you with a tailored assessment, scope blueprint, and commercial proposal:`,
      showEnquiryForm: true,
      defaultService: 'SAP S/4HANA & Enterprise Transformation',
      followUps: [
        'What are the typical project timelines?',
        'Do you offer proof of concepts (PoC)?',
        'Can we sign an enterprise NDA first?'
      ]
    })
  },

  // 2. SAP S/4HANA & CLEAN CORE
  {
    keywords: ['s4hana', 's/4hana', 's4 hana', 'clean core', 'greenfield', 'brownfield', 'system conversion', 'selective data', 'ecc migration', 'ecc to s4', 'rise with sap', 'grow with sap', 'hana'],
    intents: ['sap_s4hana'],
    response: () => ({
      text: `**Knooviq SAP S/4HANA Transformation**\n\nWe deliver enterprise-grade S/4HANA transitions focused on maintaining a **Clean Core** and minimizing operational disruption through three proven pathways:\n\n• **Greenfield Implementation:** Cloud-native fresh deployment adopting SAP standard best practices.\n• **Brownfield Conversion:** Direct system conversion preserving your custom configurations, historical master data, and transaction history.\n• **Selective Data Transition:** Phased hybrid carving of active organizational units for multi-ERP landscapes.\n\nWe also support **RISE with SAP** and **GROW with SAP** cloud adoption frameworks.`,
      navLinks: [
        { label: 'Explore SAP S/4HANA', path: '/transformation/sap-s4hana', primary: true },
        { label: 'Brownfield Conversion', path: '/transformation/brownfield' },
        { label: 'Greenfield Pathways', path: '/transformation/greenfield' },
      ],
      followUps: [
        'How does Knooviq handle custom code migration?',
        'What is your methodology for RISE with SAP?',
        'Request S/4HANA readiness assessment'
      ]
    })
  },

  // 3. SAP BTP & INTEGRATION SUITE
  {
    keywords: ['btp', 'integration suite', 'cpi', 'api management', 'extension suite', 'cloud integration', 'odata', 'middleware', 'kyma', 'event mesh'],
    intents: ['sap_btp'],
    response: () => ({
      text: `**SAP Business Technology Platform (BTP) & Integration**\n\nKnooviq architects scalable, decoupled enterprise integration architectures:\n\n• **SAP Integration Suite:** Pre-packaged A2A and B2B flows using SAP Cloud Integration (CPI), Open Connectors, and API Management.\n• **Side-by-Side Extensions:** Building custom business logic outside the ERP core on SAP BTP to preserve a clean core.\n• **Event-Driven Architecture:** Real-time data synchronization with SAP Event Mesh and Kafka connectors.\n• **Analytics & Data Fabric:** Seamless federation across SAP Datasphere and third-party lakes.`,
      navLinks: [
        { label: 'View SAP BTP Solutions', path: '/technology/sap-btp', primary: true },
        { label: 'Integration Architecture', path: '/advisory/solution-architecture' }
      ],
      followUps: [
        'How do you integrate SAP with non-SAP systems?',
        'Tell me about Knooviq AI Studio on BTP',
        'Request an integration assessment'
      ]
    })
  },

  // 4. SAP AMS & MANAGED SUPPORT
  {
    keywords: ['ams', 'managed services', 'support', 'sla', 'l1', 'l2', 'l3', 'l4', 'basis', 'incident management', 'change management', 'application support', 'maintenance'],
    intents: ['sap_ams'],
    response: () => ({
      text: `**24/7 SLA-Backed SAP Application Management (AMS)**\n\nKnooviq provides end-to-end managed operations across technical and functional SAP modules:\n\n• **Tiered L1–L4 SLA Support:** 15-minute response times for Severity-1 production incidents.\n• **SAP Basis & Infrastructure:** Kernel upgrades, transport management, OSS notes, and health monitoring.\n• **Continuous Enhancement:** Minor CR rollouts, statutory tax patches, and routine regression testing.\n• **Proactive Observability:** Automated synthetic health checks and performance tuning.`,
      navLinks: [
        { label: 'Explore SAP AMS Services', path: '/advisory/sap-ams', primary: true },
        { label: 'Application Support', path: '/advisory/application-support' },
        { label: 'Managed Operations', path: '/cloud-operations/managed-operations' }
      ],
      followUps: [
        'What SLA tiers do you provide?',
        'Do you provide offshore and nearshore support?',
        'Request an AMS proposal'
      ]
    })
  },

  // 5. SAP FUNCTIONAL DOMAINS (FINANCE, SUPPLY CHAIN, HR, CX)
  {
    keywords: ['fico', 'finance', 'controlling', 'supply chain', 'scm', 'mm', 'sd', 'pp', 'ewm', 'warehouse', 'tm', 'transportation', 'successfactors', 'hcm', 'hr', 'cx', 'fiori'],
    intents: ['sap_functional'],
    response: () => ({
      text: `**SAP Functional Domain Excellence**\n\nOur cross-certified consultants optimize core business processes:\n\n• **Financials (FICO):** Universal Journal, parallel ledgers, statutory reporting, and automated cash management.\n• **Procurement & Logistics (MM/EWM):** Intelligent sourcing, automated 3-way matching, advanced warehouse handling.\n• **Order-to-Cash (SD/TM):** Multi-channel pricing engines, dynamic dispatch, and integrated e-way bill generation.\n• **Human Experience (SuccessFactors):** Employee Central, performance tracking, and global payroll integration.\n• **Modern UX (SAP Fiori):** Role-tailored mobile applications and simplified desktop interfaces.`,
      navLinks: [
        { label: 'Explore Transformation', path: '/transformation', primary: true },
        { label: 'Warehouse & EWM Practice', path: '/industries/warehouse-ewm' }
      ],
      followUps: [
        'Tell me about your E-Invoicing integration',
        'How do you handle GST compliance in SAP?',
        'Speak with a functional architect'
      ]
    })
  },

  // 6. DIGITAL INTELLIGENCE, AI STUDIO & GENAI
  {
    keywords: ['artificial intelligence', 'ai', 'generative ai', 'genai', 'ai agents', 'ai assistants', 'llm', 'machine learning', 'predictive analytics', 'predictive', 'ai studio', 'rag'],
    intents: ['ai_digital_intelligence'],
    response: () => ({
      text: `**Knooviq Digital Intelligence & AI**\n\nWe operationalize AI directly into enterprise business workflows:\n\n• **Knooviq AI Studio:** Enterprise foundation for building, deploying, and governing domain-specific AI agents.\n• **Autonomous AI Agents:** Context-aware digital workers for customer service, supplier interactions, and procurement tracking.\n• **Generative AI & Enterprise RAG:** Secure retrieval-augmented generation grounded in proprietary enterprise knowledge with strict data isolation.\n• **Predictive Analytics:** Forecasting demand, optimizing working capital, and flagging operational anomalies before disruption occurs.`,
      navLinks: [
        { label: 'AI Powered Automation', path: '/digital-intelligence/ai-powered-automation', primary: true },
        { label: 'Generative AI Practice', path: '/ai/generative-ai' },
        { label: 'Enterprise AI Agents', path: '/ai/ai-agents' }
      ],
      followUps: [
        'How does Knooviq secure proprietary data in GenAI?',
        'What use cases have you built for SAP ERP?',
        'Schedule an AI architecture discovery call'
      ]
    })
  },

  // 7. INTELLIGENT AUTOMATION, RPA & IDP
  {
    keywords: ['automation', 'rpa', 'robotic process', 'idp', 'document processing', 'intelligent document', 'ocr', 'invoice extraction', 'bank statement', 'workflow automation'],
    intents: ['intelligent_automation'],
    response: () => ({
      text: `**Intelligent Automation & Document Processing**\n\nEliminate repetitive manual intervention across high-volume transactions:\n\n• **Intelligent Document Processing (IDP):** Computer-vision and transformer-based data extraction for vendor invoices, bills of lading, and bank statements.\n• **Enterprise RPA:** Attended and unattended bots executing cross-system data entry between legacy portals and modern ERPs.\n• **Accounts Payable Intelligence:** End-to-end invoice capture, 3-way line-item matching, discrepancy detection, and automated posting.\n• **Knooviq Automation Suite:** Low-code orchestration connecting API microservices and business rules engines.`,
      navLinks: [
        { label: 'Automation Suite', path: '/products/knooviq-automation-suite', primary: true },
        { label: 'Document Intelligence', path: '/digital-intelligence/intelligent-document-processing' },
        { label: 'Accounts Payable Solution', path: '/accounts-payable-intelligence' }
      ],
      followUps: [
        'What is your extraction accuracy for multi-page invoices?',
        'Can IDP post directly into SAP?',
        'Request an automation demo'
      ]
    })
  },

  // 8. GLOBAL TRADE & COMPLIANCE (EXIM)
  {
    keywords: ['exim', 'export', 'import', 'global trade', 'customs', 'duty drawback', 'advance authorization', 'foreign trade', 'epcg'],
    intents: ['product_exim'],
    response: () => ({
      text: `**Knooviq Global Trade & Compliance (EXIM)**\n\nOur flagship solution for international commerce integrates seamlessly with your ERP:\n\n• **Export-Import Documentation:** Automated generation of shipping bills, bills of lading, invoices, and packing lists.\n• **Customs & Incentive Schemes:** Automated tracking of EPCG, Advance Authorizations, RoDTEP, and Duty Drawback claims.\n• **Real-Time Regulatory Filing:** Direct connectivity with Indian ICEGATE and international customs gateways.\n• **Trade Compliance Audits:** Automated screening against denied party lists and license validation.`,
      navLinks: [
        { label: 'Explore EXIM Solution', path: '/exim', primary: true },
        { label: 'View All Enterprise Products', path: '/products' }
      ],
      followUps: [
        'Does EXIM integrate directly with SAP S/4HANA?',
        'How does it handle Duty Drawback reconciliation?',
        'Request an EXIM product demo'
      ]
    })
  },

  // 9. E-INVOICING & E-WAY BILL
  {
    keywords: ['e-invoicing', 'e-invoice', 'einvoice', 'einvoicing', 'e-way bill', 'eway bill', 'ewaybill', 'irp', 'irn', 'qr code', 'nic'],
    intents: ['product_einvoice_eway'],
    response: () => ({
      text: `**E-Invoicing & E-Way Bill Enterprise Engines**\n\nBuilt for high-volume, zero-failure statutory tax compliance:\n\n• **Instant IRN & QR Generation:** Millisecond direct API connectivity to government IRP portals.\n• **Automated E-Way Bill Creation:** Synchronized dispatch generation with automated multi-vehicle and transshipment handling.\n• **Seamless ERP Integration:** Plug-and-play connectors for SAP ECC, S/4HANA, and custom ERPs with zero manual intervention.\n• **Failover & High Availability:** Multi-GSP automated failover ensuring 99.99% operational uptime.`,
      navLinks: [
        { label: 'E-Invoicing Solution', path: '/e-invoice', primary: true },
        { label: 'E-Way Bill Solution', path: '/eway-bill' }
      ],
      followUps: [
        'How does automated failover between GSPs work?',
        'Can it generate thousands of invoices per hour?',
        'Request a compliance consultation'
      ]
    })
  },

  // 10. GST & ACCELERATED TAX
  {
    keywords: ['gst', 'gstr', 'tax', 'gstr-1', 'gstr-2b', 'itc', 'input tax credit', 'tax compliance', 'reconciliation'],
    intents: ['product_gst'],
    response: () => ({
      text: `**Knooviq Accelerated GST Solution**\n\nComplete tax automation for Indian and cross-border statutory compliance:\n\n• **Automated 2B vs Purchase Register Reconciliation:** AI-driven fuzzy matching to maximize Input Tax Credit (ITC) claiming.\n• **Real-Time Filing:** Direct upload and verification for GSTR-1, GSTR-3B, and GSTR-9.\n• **Vendor Tax Compliance Monitoring:** Flag non-compliant suppliers before payment release.\n• **Audit Trail & Error Diagnostics:** Field-level discrepancy highlighting with automated correction triggers.`,
      navLinks: [
        { label: 'Explore GST Solution', path: '/products/gst', primary: true },
        { label: 'Vendor Management', path: '/products/vendor-management' }
      ],
      followUps: [
        'How does 2B reconciliation flag mismatched invoices?',
        'Can it block vendor payments for non-compliance?',
        'Schedule a GST product walk-through'
      ]
    })
  },

  // 11. ENTERPRISE PRODUCTS (VENDOR, ASSET, SFA, DMS, REAL ESTATE)
  {
    keywords: ['vendor management', 'vms', 'supplier portal', 'field service', 'fsm', 'sfa', 'sales force', 'dealer management', 'dms', 'asset management', 'real estate', 'subscription billing', 'retail'],
    intents: ['products_suite'],
    response: () => ({
      text: `**Knooviq Enterprise Products Suite**\n\nSpecialized domain applications designed for rapid deployment alongside core ERP systems:\n\n• **Vendor Management System:** Digital supplier onboarding, e-procurement, self-service invoice submission, and KPI scoring.\n• **Sales Force Automation & DMS:** Field sales tracking, beat planning, distributor ordering, and secondary sales visibility.\n• **Field Service Management:** Technician dispatch, mobile job execution, warranty management, and SLA tracking.\n• **Asset & Real Estate Management:** Lease accounting, property lifecycle, and preventive equipment maintenance.`,
      navLinks: [
        { label: 'View All Products', path: '/products', primary: true },
        { label: 'Vendor Management', path: '/products/vendor-management' },
        { label: 'Dealer Management System', path: '/products/dealer-management-system' }
      ],
      followUps: [
        'Tell me more about the Vendor Portal',
        'How does Sales Force Automation sync with SAP?',
        'Request a demo of enterprise products'
      ]
    })
  },

  // 12. INDUSTRIES WE SERVE
  {
    keywords: ['industry', 'industries', 'sector', 'manufacturing', 'oil', 'gas', 'energy', 'utilities', 'epc', 'construction', 'infrastructure', 'bfsi', 'banking', 'insurance', 'logistics', 'high tech', 'retail', 'automotive'],
    intents: ['industries'],
    response: () => ({
      text: `**Targeted Industry Solutions**\n\nKnooviq delivers tailored technological frameworks across key industry sectors:\n\n• **Energy, Oil & Gas and Utilities:** Asset-intensive maintenance, regulatory compliance, and joint venture accounting.\n• **Engineering, Procurement & Construction (EPC):** Milestone-based revenue recognition, project systems (SAP PS), and vendor billing.\n• **Discrete & Process Manufacturing:** Shop-floor IoT integration, batch traceability, and supply chain synchronization.\n• **Banking, Financial Services & Insurance (BFSI):** Risk analytics, anti-money laundering workflows, and core integration.\n• **Logistics & Transportation:** Multi-modal freight, automated cross-docking, and warehouse automation.`,
      navLinks: [
        { label: 'Explore All Industries', path: '/industries', primary: true },
        { label: 'Oil & Gas Practice', path: '/industries/oil-gas' },
        { label: 'Engineering & EPC', path: '/industries/engineering' }
      ],
      followUps: [
        'Do you have case studies for manufacturing?',
        'What solutions do you offer for Logistics & Warehousing?',
        'Connect with an industry specialist'
      ]
    })
  },

  // 13. CAREERS & OPPORTUNITIES
  {
    keywords: ['job', 'career', 'careers', 'hiring', 'vacancy', 'vacancies', 'opening', 'openings', 'work with us', 'apply', 'interview', 'hr', 'recruitment', 'resume'],
    intents: ['careers'],
    response: () => ({
      text: `**Careers at Knooviq Industries**\n\nWe are actively expanding our enterprise consulting and engineering teams at our **Mumbai Headquarters** (Hybrid model):\n\n• **Senior SAP S/4HANA Consultants** (FICO, MM, SD, PP, EWM)\n• **SAP BTP & ABAP on HANA Architects**\n• **Enterprise AI & Full-Stack Engineers** (React, TypeScript, Python, LLMs)\n• **Solution Architects — Cloud & Managed Services**\n\nWe provide competitive compensation, continuous global certification sponsorship, and exposure to tier-1 enterprise digital transformations.`,
      navLinks: [
        { label: 'View Open Roles & Apply', path: '/careers', primary: true },
        { label: 'Learn About Knooviq Culture', path: '/about/the-knooviq-story' }
      ],
      followUps: [
        'How can I submit my CV?',
        'Where is the Mumbai office located?',
        'Explore the Knooviq story'
      ]
    })
  },

  // 14. COMPANY BACKGROUND, LEADERSHIP & CULTURE
  {
    keywords: ['about', 'story', 'company', 'knooviq', 'who is', 'who are', 'leadership', 'vision', 'management', 'founded', 'culture', 'global presence', 'presence'],
    intents: ['company_info'],
    response: () => ({
      text: `**About Knooviq Industries Pvt. Ltd.**\n\nKnooviq is an enterprise technology innovation company specializing in **SAP digital transformations, enterprise AI solutions, cloud infrastructure, and intelligent business applications**.\n\n• **Mission:** Accelerating enterprise agility through clean core architectures and autonomous digital intelligence.\n• **Approach:** Deep functional domain mastery paired with battle-tested engineering frameworks.\n• **Footprint:** Headquartered in Mumbai with enterprise clients across manufacturing, energy, trade, and financial sectors.`,
      navLinks: [
        { label: 'The Knooviq Story', path: '/about/the-knooviq-story', primary: true },
        { label: 'Visionary Leadership', path: '/about/visionary-leadership' },
        { label: 'Our Global Presence', path: '/about/global-presence' }
      ],
      followUps: [
        'Where are your global and regional locations?',
        'What makes Knooviq different from traditional SAP partners?',
        'Contact Knooviq leadership'
      ]
    })
  },

  // 15. HEADQUARTERS, OFFICE LOCATION & CONTACT DETAILS
  {
    keywords: ['contact', 'address', 'location', 'where', 'office', 'headquarters', 'hq', 'mumbai', 'malad', 'phone', 'email', 'map', 'reach'],
    intents: ['contact_location'],
    response: () => ({
      text: `**Knooviq Industries Private Limited — Corporate Headquarters**\n\n📍 **Registered Office & Tech Center:**\n1210, One World by Sanjar, Bhadran Nagar, Malad West, Mumbai (India)\n\n📧 **Corporate Inquiries:** contact@knooviq.com\n📞 **Direct Phone:** +91 99877 52646\n🕒 **Operating Hours:** Monday – Friday, 9:30 AM – 6:30 PM IST\n\nOur office is situated in the western corporate hub of Mumbai with direct access via Link Road and Western Express Highway.`,
      navLinks: [
        { label: 'Official Contact Page', path: '/contact', primary: true },
        { label: 'View Location Map', path: '/about/global-presence' }
      ],
      followUps: [
        'Schedule an in-person meeting at Mumbai HQ',
        'Request an enterprise consultation',
        'View open career openings'
      ]
    })
  },

  // 16. DATA SECURITY, COMPLIANCE & PRIVACY
  {
    keywords: ['security', 'privacy', 'nda', 'gdpr', 'iso', 'soc', 'data protection', 'safe', 'confidentiality', 'cybersecurity'],
    intents: ['security'],
    response: () => ({
      text: `**Enterprise Security & Data Protection**\n\nTrust and architectural resilience are the bedrock of Knooviq's engagements:\n\n• **Mutual Non-Disclosure Agreement (NDA):** Standard execution prior to reviewing client system landscapes or data repositories.\n• **Zero Data Retention in AI:** Client enterprise data is never used to train public foundation models; tenant isolation is strictly enforced.\n• **Cloud & Network Hardening:** Dual-factor authentication, end-to-end TLS 1.3 encryption, and rigorous Row Level Security (RLS).\n• **Regulatory Alignment:** Adherence to ISO 27001, Indian Digital Personal Data Protection (DPDP) Act, and GDPR norms.`,
      navLinks: [
        { label: 'Cybersecurity Practice', path: '/cloud-operations/cybersecurity', primary: true },
        { label: 'Data Protection Architecture', path: '/cloud-operations/data-protection' }
      ],
      followUps: [
        'Can we execute an NDA before sharing our ERP specs?',
        'How does your AI protect proprietary company records?',
        'Contact our compliance team'
      ]
    })
  }
];

// ----------------------------------------------------------------------------
// Fallback & Smart Dispatch
// ----------------------------------------------------------------------------

export function generateBotResponse(userInput: string): BotResponse {
  const query = userInput.toLowerCase().trim();

  if (!query) {
    return {
      text: `How can I help you explore Knooviq's enterprise capabilities today? You can ask about our SAP S/4HANA solutions, AI Studio, enterprise products like EXIM, or request an architect consultation.`,
      followUps: [
        'Explore SAP Solutions',
        'Digital Intelligence & AI',
        'Products & Enterprise Solutions'
      ]
    };
  }

  // 1. Direct match scoring
  let bestMatch: KnowledgeEntry | null = null;
  let highestScore = 0;

  for (const entry of KNOWLEDGE_BASE) {
    let score = 0;
    for (const keyword of entry.keywords) {
      if (query.includes(keyword)) {
        // Boost score for multi-word or exact matches
        score += keyword.split(' ').length * 3;
      }
    }
    if (score > highestScore) {
      highestScore = score;
      bestMatch = entry;
    }
  }

  if (bestMatch && highestScore >= 3) {
    return bestMatch.response();
  }

  // 2. Intelligent Fallback (Zero hallucinations)
  return {
    text: `Thank you for your question. As Knooviq's enterprise AI assistant, I provide verified information on our **SAP S/4HANA services**, **Digital Intelligence & AI Studio**, **Enterprise Products (EXIM, E-Invoicing, GST)**, and **Mumbai Headquarters**.\n\nWhile I don't have a verified answer for that specific query in my knowledge base, our solution architects will be glad to assist you directly with exact technical blueprints and specifications.`,
    navLinks: [
      { label: 'Request an Architecture Consultation', path: '/contact', primary: true },
      { label: 'Explore Solutions Overview', path: '/solutions' }
    ],
    showEnquiryForm: false,
    followUps: [
      'Tell me about SAP S/4HANA Migration',
      'What AI solutions do you provide?',
      'How do I contact Knooviq Mumbai HQ?'
    ]
  };
}
