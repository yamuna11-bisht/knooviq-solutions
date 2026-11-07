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
export const WELCOME_GREETING = "Hello! 👋";
export const WELCOME_SUBTITLE = "I'm KNOOVIQ AI Assistant. How can I help you today?";

export const SUGGESTED_QUESTIONS = [
  "What is SAP S/4HANA Clean Core?",
  "Tell me about Global Trade & EXIM",
  "How does E-Invoicing integration work?",
  "Where is KNOOVIQ Mumbai HQ located?",
  "What are your 24/7 AMS SLA tiers?",
  "Tell me about KNOOVIQ AI Studio"
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
  // 1. SERVICES OVERVIEW (Action Card 1)
  {
    keywords: [
      "tell me about knooviq's services",
      "knooviq's services",
      "knooviq services",
      "tell me about services",
      "what services do you offer",
      "services overview",
      "all services",
      "what do you do"
    ],
    intents: ['services_overview'],
    response: () => ({
      text: `**KNOOVIQ Enterprise Services & Practices**\n\nWe provide end-to-end enterprise digital transformation, cloud modernization, and SAP practices:\n\n• **SAP S/4HANA Transformation:** Greenfield implementation adopting Clean Core standards, Brownfield system conversion, and Selective Data Transition.\n• **24/7 Managed AMS Support:** SLA-backed L1–L4 technical Basis and functional module operations with a 15-minute response guarantee.\n• **SAP BTP & Cloud Integration:** Decoupled side-by-side extensions, CPI pipelines, API Management, and hybrid cloud integration.\n• **Digital Intelligence & AI Studio:** Custom enterprise AI agents, Generative AI models, and predictive analytics.\n• **Intelligent Automation (RPA & IDP):** Computer-vision optical data extraction for accounts payable and bank reconciliation.\n• **Enterprise Products Suite:** Statutory engines for EXIM Global Trade, E-Invoicing, E-Way Bill, and Accelerated GST.`,
      navLinks: [
        { label: 'Explore SAP S/4HANA', path: '/transformation/sap-s4hana', primary: true },
        { label: 'Advisory & Managed AMS', path: '/advisory/sap-ams' },
        { label: 'View All Enterprise Products', path: '/products' }
      ],
      followUps: [
        'How can KNOOVIQ help my business?',
        'Connect me with an expert',
        'Tell me about Global Trade & EXIM'
      ]
    })
  },

  // 2. HOW CAN KNOOVIQ HELP MY BUSINESS (Action Card 2)
  {
    keywords: [
      'how can knooviq help my business',
      'help my business',
      'why choose knooviq',
      'value proposition',
      'business benefits',
      'how do you help enterprises',
      'business transformation'
    ],
    intents: ['help_business'],
    response: () => ({
      text: `**How KNOOVIQ Empowers Your Enterprise**\n\nWe partner with industry leaders to maximize operational efficiency, eliminate technical debt, and ensure seamless statutory compliance:\n\n• **Risk-Mitigated ERP Modernization:** Upgrade from legacy ECC to S/4HANA with zero disruption to daily sales, finance, and plant operations.\n• **Cost Optimization & Clean Core:** Decouple custom code onto SAP BTP to lower your long-term Total Cost of Ownership (TCO).\n• **100% Tax & Trade Compliance:** Millisecond automated statutory filing with Indian IRP and ICEGATE portals for E-Invoicing, E-Way Bills, and EXIM incentives.\n• **Hyperautomation & AI:** Automate 85%+ of repetitive invoice processing and vendor coordination using intelligent bots.\n• **Dedicated SLA Support:** 24/7 proactive monitoring by certified consultants with strict response and resolution SLAs.`,
      navLinks: [
        { label: 'Explore Transformation Roadmaps', path: '/transformation', primary: true }
      ],
      followUps: [
        "Tell me about KNOOVIQ's services",
        'Connect me with an expert',
        'What is SAP S/4HANA Clean Core?'
      ]
    })
  },

  // 3. CAREERS AT KNOOVIQ (Action Card 3)
  {
    keywords: [
      "i'm interested in a career at knooviq",
      'career at knooviq',
      'job',
      'career',
      'careers',
      'hiring',
      'vacancy',
      'vacancies',
      'opening',
      'openings',
      'work with us',
      'apply',
      'interview',
      'recruitment',
      'resume',
      'cv'
    ],
    intents: ['careers'],
    response: () => ({
      text: `**Careers at KNOOVIQ Industries**\n\nWe are actively hiring passionate consultants and engineers at our **Mumbai Corporate Headquarters** (Hybrid model):\n\n• **Senior SAP S/4HANA Consultants** (FICO, MM, SD, PP, EWM)\n• **SAP BTP & ABAP on HANA Developers** (3–7 Yrs)\n• **Enterprise AI & Full-Stack Engineers** (React, TypeScript, Python, LLMs)\n• **Cloud & Basis Infrastructure Specialists**\n\nWe provide competitive compensation, global certification sponsorship, and leadership opportunities in high-impact enterprise digital transformations.`,
      navLinks: [
        { label: 'View Open Roles & Apply', path: '/about/grow-with-us', primary: true },
        { label: 'Learn About Our Story', path: '/about/the-knooviq-story' }
      ],
      followUps: [
        'Where is KNOOVIQ Mumbai HQ located?',
        'Connect me with an expert',
        'Tell me about KNOOVIQ culture'
      ]
    })
  },

  // 4. CONNECT WITH AN EXPERT / CONSULTATION (Action Card 4)
  {
    keywords: [
      'connect me with an expert',
      'connect with an expert',
      'expert',
      'consultant',
      'consultation',
      'consult',
      'quote',
      'proposal',
      'rfp',
      'pricing',
      'price',
      'cost',
      'demo',
      'schedule call',
      'talk to sales',
      'enquiry',
      'inquiry',
      'meeting'
    ],
    intents: ['expert_consultation'],
    response: () => ({
      text: `We would be delighted to arrange a direct technical consultation with our enterprise solution architects.\n\nPlease share your details below and our team will get back to you with a customized architecture scope and proposal:`,
      showEnquiryForm: true,
      defaultService: 'SAP S/4HANA & Enterprise Transformation',
      navLinks: [
        { label: 'View Mumbai HQ Location', path: '/about/global-presence', primary: true }
      ],
      followUps: [
        "Tell me about KNOOVIQ's services",
        'Can we execute an NDA first?',
        'Where is KNOOVIQ Mumbai HQ located?'
      ]
    })
  },

  // 5. SAP S/4HANA & CLEAN CORE
  {
    keywords: ['s4hana', 's/4hana', 's4 hana', 'clean core', 'greenfield', 'brownfield', 'system conversion', 'selective data', 'ecc migration', 'ecc to s4', 'rise with sap', 'grow with sap', 'hana'],
    intents: ['sap_s4hana'],
    response: () => ({
      text: `**KNOOVIQ SAP S/4HANA Transformation**\n\nWe deliver enterprise-grade S/4HANA transitions focused on maintaining a **Clean Core** and minimizing operational disruption through three strategic pathways:\n\n• **Greenfield Implementation:** Cloud-native fresh deployment adopting SAP standard best practices.\n• **Brownfield Conversion:** Direct system conversion preserving your custom configurations, historical master data, and transaction history.\n• **Selective Data Transition:** Phased hybrid carving of active organizational units for multi-ERP landscapes.\n\nWe also support **RISE with SAP** and **GROW with SAP** cloud adoption frameworks.`,
      navLinks: [
        { label: 'Explore SAP S/4HANA', path: '/transformation/sap-s4hana', primary: true },
        { label: 'Brownfield Conversion', path: '/transformation/brownfield' },
        { label: 'Greenfield Pathways', path: '/transformation/greenfield' },
      ],
      followUps: [
        'How does KNOOVIQ handle custom code migration?',
        'What is your methodology for RISE with SAP?',
        'Connect me with an expert'
      ]
    })
  },

  // 6. SAP BTP & INTEGRATION SUITE
  {
    keywords: ['btp', 'integration suite', 'cpi', 'api management', 'extension suite', 'cloud integration', 'odata', 'middleware', 'kyma', 'event mesh'],
    intents: ['sap_btp'],
    response: () => ({
      text: `**SAP Business Technology Platform (BTP) & Integration**\n\nKNOOVIQ architects decoupled, highly available enterprise integration architectures:\n\n• **SAP Integration Suite:** Pre-packaged A2A and B2B flows using SAP Cloud Integration (CPI), Open Connectors, and API Management.\n• **Side-by-Side Extensions:** Building custom business applications outside the ERP core on SAP BTP to preserve a clean core.\n• **Event-Driven Architecture:** Real-time data synchronization with SAP Event Mesh and Kafka connectors.\n• **Analytics & Data Fabric:** Seamless federation across SAP Datasphere and enterprise data lakes.`,
      navLinks: [
        { label: 'View SAP BTP Solutions', path: '/technology/sap-btp', primary: true },
        { label: 'Integration Architecture', path: '/advisory/solution-architecture' }
      ],
      followUps: [
        'How do you integrate SAP with non-SAP systems?',
        'Tell me about KNOOVIQ AI Studio on BTP',
        'Connect me with an expert'
      ]
    })
  },

  // 7. SAP AMS & MANAGED SUPPORT
  {
    keywords: ['ams', 'managed services', 'support', 'sla', 'l1', 'l2', 'l3', 'l4', 'basis', 'incident management', 'change management', 'application support', 'maintenance'],
    intents: ['sap_ams'],
    response: () => ({
      text: `**24/7 SLA-Backed SAP Application Management (AMS)**\n\nKNOOVIQ provides end-to-end managed operations across technical and functional SAP modules:\n\n• **Tiered L1–L4 SLA Support:** 15-minute response times for Severity-1 production incidents.\n• **SAP Basis & Infrastructure:** Kernel upgrades, transport management, OSS notes, and health monitoring.\n• **Continuous Enhancement:** Minor CR rollouts, statutory tax patches, and routine regression testing.\n• **Proactive Observability:** Automated synthetic health checks and performance tuning.`,
      navLinks: [
        { label: 'Explore SAP AMS Services', path: '/advisory/sap-ams', primary: true },
        { label: 'Application Support', path: '/advisory/application-support' },
        { label: 'Managed Operations', path: '/cloud-operations/managed-operations' }
      ],
      followUps: [
        'What SLA tiers do you provide?',
        'Do you provide offshore and nearshore support?',
        'Connect me with an expert'
      ]
    })
  },

  // 8. GLOBAL TRADE & COMPLIANCE (EXIM)
  {
    keywords: ['exim', 'export', 'import', 'global trade', 'customs', 'duty drawback', 'advance authorization', 'foreign trade', 'epcg'],
    intents: ['product_exim'],
    response: () => ({
      text: `**KNOOVIQ Global Trade & Compliance (EXIM)**\n\nOur flagship solution for international commerce integrates seamlessly with your ERP:\n\n• **Export-Import Documentation:** Automated generation of shipping bills, bills of lading, invoices, and packing lists.\n• **Customs & Incentive Schemes:** Automated tracking of EPCG, Advance Authorizations, RoDTEP, and Duty Drawback claims.\n• **Real-Time Regulatory Filing:** Direct connectivity with Indian ICEGATE and international customs gateways.\n• **Trade Compliance Audits:** Automated screening against denied party lists and license validation.`,
      navLinks: [
        { label: 'Explore EXIM Solution', path: '/exim', primary: true },
        { label: 'View All Enterprise Products', path: '/products' }
      ],
      followUps: [
        'Does EXIM integrate directly with SAP S/4HANA?',
        'How does it handle Duty Drawback reconciliation?',
        'Connect me with an expert'
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
        'Connect me with an expert'
      ]
    })
  },

  // 10. GST & ACCELERATED TAX
  {
    keywords: ['gst', 'gstr', 'tax', 'gstr-1', 'gstr-2b', 'itc', 'input tax credit', 'tax compliance', 'reconciliation'],
    intents: ['product_gst'],
    response: () => ({
      text: `**KNOOVIQ Accelerated GST Solution**\n\nComplete tax automation for Indian and cross-border statutory compliance:\n\n• **Automated 2B vs Purchase Register Reconciliation:** AI-driven fuzzy matching to maximize Input Tax Credit (ITC) claiming.\n• **Real-Time Filing:** Direct upload and verification for GSTR-1, GSTR-3B, and GSTR-9.\n• **Vendor Tax Compliance Monitoring:** Flag non-compliant suppliers before payment release.\n• **Audit Trail & Error Diagnostics:** Field-level discrepancy highlighting with automated correction triggers.`,
      navLinks: [
        { label: 'Explore GST Solution', path: '/products/gst', primary: true },
        { label: 'Vendor Management', path: '/products/vendor-management' }
      ],
      followUps: [
        'How does 2B reconciliation flag mismatched invoices?',
        'Can it block vendor payments for non-compliance?',
        'Connect me with an expert'
      ]
    })
  },

  // 11. HEADQUARTERS & CONTACT DETAILS
  {
    keywords: ['contact', 'address', 'location', 'where', 'office', 'headquarters', 'hq', 'mumbai', 'malad', 'phone', 'email', 'map', 'reach'],
    intents: ['contact_location'],
    response: () => ({
      text: `**KNOOVIQ Industries Private Limited — Corporate Headquarters**\n\n📍 **Registered Office & Tech Center:**\n1210, One World by Sanjar, Bhadran Nagar, Malad West, Mumbai (India)\n\n📧 **Corporate Inquiries:** contact@knooviq.com\n📞 **Direct Phone:** +91 99877 52646\n🕒 **Operating Hours:** Monday – Friday, 9:30 AM – 6:30 PM IST\n\nOur office is situated in the western corporate hub of Mumbai with direct access via Link Road and Western Express Highway.`,
      navLinks: [
        { label: 'View Location Map', path: '/about/global-presence', primary: true }
      ],
      followUps: [
        'Schedule an in-person meeting at Mumbai HQ',
        'Connect me with an expert',
        'View open career openings'
      ]
    })
  },

  // 12. DIGITAL INTELLIGENCE & AI STUDIO
  {
    keywords: ['artificial intelligence', 'ai', 'generative ai', 'genai', 'ai agents', 'ai assistants', 'llm', 'machine learning', 'predictive analytics', 'predictive', 'ai studio', 'rag'],
    intents: ['ai_digital_intelligence'],
    response: () => ({
      text: `**KNOOVIQ Digital Intelligence & AI**\n\nWe operationalize AI directly into enterprise business workflows:\n\n• **KNOOVIQ AI Studio:** Enterprise foundation for building, deploying, and governing domain-specific AI agents.\n• **Autonomous AI Agents:** Context-aware digital workers for customer service, supplier interactions, and procurement tracking.\n• **Generative AI & Enterprise RAG:** Secure retrieval-augmented generation grounded in proprietary enterprise knowledge with strict data isolation.\n• **Predictive Analytics:** Forecasting demand, optimizing working capital, and flagging operational anomalies before disruption occurs.`,
      navLinks: [
        { label: 'AI Powered Automation', path: '/digital-intelligence/ai-powered-automation', primary: true },
        { label: 'Generative AI Practice', path: '/ai/generative-ai' },
        { label: 'Enterprise AI Agents', path: '/ai/ai-agents' }
      ],
      followUps: [
        'How does KNOOVIQ secure proprietary data in GenAI?',
        'Connect me with an expert',
        'Tell me about KNOOVIQ services'
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
      text: `How can I help you explore KNOOVIQ's enterprise capabilities today? You can ask about our SAP S/4HANA solutions, AI Studio, enterprise products like EXIM, or request an architect consultation.`,
      followUps: [
        "Tell me about KNOOVIQ's services",
        'How can KNOOVIQ help my business?',
        'Connect me with an expert'
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
    text: `Thank you for your question. As KNOOVIQ's enterprise AI assistant, I provide verified information on our **SAP S/4HANA transitions**, **Digital Intelligence & AI Studio**, **Enterprise Products (EXIM, E-Invoicing, GST)**, and **Mumbai Headquarters**.\n\nWhile I don't have a verified answer for that specific query in my knowledge base, our solution architects will be glad to assist you directly with exact technical blueprints.`,
    navLinks: [
      { label: 'Explore Products & Solutions', path: '/products', primary: true },
      { label: 'View Mumbai Headquarters', path: '/about/global-presence' }
    ],
    showEnquiryForm: false,
    followUps: [
      "Tell me about KNOOVIQ's services",
      'How can KNOOVIQ help my business?',
      'Where is KNOOVIQ Mumbai HQ located?'
    ]
  };
}
