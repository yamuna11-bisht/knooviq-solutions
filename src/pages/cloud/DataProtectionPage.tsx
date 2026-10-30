import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  ShieldAlert,
  Lock,
  Eye,
  CheckCircle2,
  ChevronDown,
  Layers,
  Server,
  Network,
  FileText,
  Search,
  Workflow,
  Sparkles,
  RefreshCw,
  Sliders,
  FileCheck,
  Database,
  Cpu,
  Boxes,
  HelpCircle,
  Activity,
  ArrowRight,
  UserCheck,
  KeyRound,
  Fingerprint,
  FileCheck2,
  ClipboardList,
  AlertCircle,
  Building2,
  Globe,
  Settings2,
  FolderGit2,
  Shield,
  FileSpreadsheet,
  HardDrive,
  Trash2,
  Share2,
  Scale,
  Binary,
  Radio,
  FileLock,
  CloudCog,
  ShieldX,
  Maximize2,
  X
} from 'lucide-react';

interface ChildPageProps {
  onOpenContact?: (topic?: string) => void;
}

export const DataProtectionPage: React.FC<ChildPageProps> = ({ onOpenContact }) => {
  const [activeRoadmapPhase, setActiveRoadmapPhase] = useState<number>(0);
  const [activeStateTab, setActiveStateTab] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    document.title = 'Data Protection – Protect Sensitive Data, Preserve Trust | KNOOVIQ';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleOpenContact = (topic?: string) => {
    if (onOpenContact) {
      onOpenContact(topic || 'Data Protection');
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Section 3: Common Data Protection Challenges (5 Challenges)
  const dataChallenges = [
    {
      id: 'unidentified-data',
      title: 'Unidentified Sensitive Information',
      tagline: 'Dark data scattered across multi-cloud and on-premises repos.',
      description:
        'Organizations frequently lack an exhaustive inventory of sensitive records, intellectual property, and personally identifiable information (PII) distributed across legacy file servers, databases, shadow SaaS tools, and unmanaged endpoints.',
      icon: Search,
      accent: 'text-amber-500 bg-amber-500/10 border-amber-500/20'
    },
    {
      id: 'inconsistent-classification',
      title: 'Inconsistent Data Classification',
      tagline: 'Ambiguous labeling leading to misapplied security controls.',
      description:
        'Without standardized, automated classification schemes, business squads apply ad-hoc handling rules. Highly confidential customer data or financial models end up stored or shared with the same casual permissions as public marketing materials.',
      icon: FileSpreadsheet,
      accent: 'text-rose-500 bg-rose-500/10 border-rose-500/20'
    },
    {
      id: 'uncontrolled-movement',
      title: 'Uncontrolled Data Movement',
      tagline: 'Untracked downloads, cloud sharing, and external transfers.',
      description:
        'Sensitive files are routinely downloaded to personal devices, emailed to external vendors, or pasted into generative AI portals without automated boundary inspection or policy enforcement to prevent exfiltration.',
      icon: Share2,
      accent: 'text-purple-500 bg-purple-500/10 border-purple-500/20'
    },
    {
      id: 'inconsistent-controls',
      title: 'Inconsistent Protection Controls',
      tagline: 'Fragmented encryption, key management, and access practices.',
      description:
        'Disparate operating environments use conflicting cryptographic standards, uncoordinated key storage, and mismatched access logging, creating security blind spots where data transitions between platforms.',
      icon: ShieldAlert,
      accent: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/20'
    },
    {
      id: 'unclear-retention-disposal',
      title: 'Unclear Retention & Disposal',
      tagline: 'Hoarded stale data and unverified deletion processes.',
      description:
        'Keeping obsolete data longer than required balloons storage overhead and creates severe liability during regulatory audits, while ad-hoc deletion fails to purge records from live replicas, archives, and immutable backup vaults.',
      icon: Trash2,
      accent: 'text-blue-500 bg-blue-500/10 border-blue-500/20'
    }
  ];

  // Section 4: Core Data Protection Capabilities (6 Capabilities)
  const dataCapabilities = [
    {
      id: 'discovery-classification',
      badge: 'CAPABILITY A • DISCOVERY & CLASSIFICATION',
      title: 'Data Discovery & Classification',
      tagline: 'Automate content inspection, map sensitive repositories, and enforce structured sensitivity labels.',
      description:
        'Effective data protection starts with knowing exactly what information you hold. Knooviq deploys automated discovery tools to scan structured databases, cloud object stores, document repositories, and file servers. We establish granular classification schemes—categorizing assets by business value, regulatory scope, and confidentiality—so that security safeguards are applied proportionally.',
      image: '/images/cloud/data_discovery.jpg?v=9',
      points: [
        'Automated discovery across structured SQL/NoSQL databases, cloud S3/blob storage, and file shares',
        'Multi-tier classification frameworks (Public, Internal, Confidential, Highly Restricted)',
        'Metadata tagging and handling labels integrated with enterprise document authoring tools',
        'Data ownership registers establishing clear accountability for business data sets'
      ]
    },
    {
      id: 'encryption-key-management',
      badge: 'CAPABILITY B • CRYPTOGRAPHY & KMS',
      title: 'Encryption & Key Management',
      tagline: 'Safeguard information with modern encryption at rest, in transit, and centralized KMS lifecycle.',
      description:
        'Encryption transforms confidential information into unreadable ciphertext unless decrypted with authorized keys. We architect end-to-end cryptographic strategies incorporating AES-256 for storage volumes, TLS 1.3 for network communication, and hardware security modules (HSM) with centralized Key Management Services (KMS) ensuring keys remain isolated from data stores.',
      image: '/images/cloud/data_encryption.jpg?v=9',
      points: [
        'Storage volume and database-level Transparent Data Encryption (TDE) for data at rest',
        'Enforced TLS 1.3 cryptographic pipelines with mutual authentication (mTLS) for data in transit',
        'Centralized Key Management Service (KMS) with automated key rotation and strict separation of duties',
        'Client-Side Encryption (CSE) and envelope encryption models for multi-tenant cloud storage'
      ]
    },
    {
      id: 'data-loss-prevention',
      badge: 'CAPABILITY C • EXFILTRATION MITIGATION',
      title: 'Data Loss Prevention (DLP)',
      tagline: 'Detect, monitor, and prevent unauthorized movement of sensitive data across enterprise channels.',
      description:
        'Data Loss Prevention controls inspect data in motion and at rest to block accidental or malicious exfiltration. We design DLP policies across corporate email, cloud collaboration workspaces, endpoints, and web gateways. By contextualizing inspection rules, we protect intellectual property without creating disruptive false positives for daily operational workflows.',
      image: '/images/cloud/data_dlp.jpg?v=25',
      points: [
        'Real-time content inspection and contextual regex/fingerprint matching for sensitive data types',
        'Endpoint controls restricting USB copying, unauthorized screen captures, and unapproved web uploads',
        'Email and cloud gateway DLP blocking outbound transmissions of PII, financial, or source code data',
        'Automated policy violation triage, incident escalation workflows, and exception management'
      ]
    },
    {
      id: 'data-access-usage',
      badge: 'CAPABILITY D • ACCESS & MASKING',
      title: 'Data Access & Usage Protection',
      tagline: 'Control query access, implement dynamic data masking, and enforce least-privilege consumption.',
      description:
        'Unlike identity authentication which verifies user credentials, data access protection focuses specifically on what happens to information once queried. We implement row- and column-level security, dynamic data masking, tokenization, and strict export boundaries, ensuring analysts and applications view only the sanitized attributes necessary for valid tasks.',
      image: '/images/cloud/data_access_protection.jpg?v=9',
      points: [
        'Dynamic data masking and tokenization concealing sensitive fields during operational queries',
        'Row-level and column-level security policies enforcing attribute-based access at the database layer',
        'Strict export restrictions and watermarking on sensitive financial and customer reports',
        'Comprehensive audit logging recording read, modify, and query operations on regulated data'
      ]
    },
    {
      id: 'privacy-regulatory-handling',
      badge: 'CAPABILITY E • PRIVACY & COMPLIANCE',
      title: 'Privacy & Regulatory Data Handling',
      tagline: 'Align data management with global privacy standards, data minimization, and statutory obligations.',
      description:
        'Regulatory frameworks such as the EU GDPR and India\'s Digital Personal Data Protection (DPDP) Act 2023 require disciplined personal data stewardship. Knooviq helps organizations embed privacy-by-design principles: documenting lawful business purposes, maintaining consent registers, establishing data minimization gates, and fulfilling Data Subject Access Requests (DSAR).',
      image: '/images/cloud/data_privacy_governance.jpg?v=9',
      points: [
        'Personal data mapping documenting legal bases, cross-border flows, and processing purposes',
        'Data minimization gates restricting collection strictly to verified operational necessities',
        'Consent tracking frameworks and automated Data Subject Access Request (DSAR) workflows',
        'Evidence preparation supporting privacy impact assessments (DPIA) and statutory audits'
      ]
    },
    {
      id: 'lifecycle-retention-disposal',
      badge: 'CAPABILITY F • RETENTION & DISPOSAL',
      title: 'Data Lifecycle, Retention & Secure Disposal',
      tagline: 'Manage information from ingestion to immutable archival, retention review, and certified sanitization.',
      description:
        'Unmanaged data accumulation invites severe regulatory and operational exposure. We formulate enforceable data retention schedules tailored to statutory preservation mandates. When records reach end-of-life, we execute certified cryptographic erasure or physical sanitization procedures that account for live databases, replica tiers, and long-term backup archives.',
      image: '/images/cloud/data_lifecycle.jpg?v=9',
      points: [
        'Defensible data retention schedules aligned with tax, legal, and operational compliance mandates',
        'Automated tiering to Write-Once-Read-Many (WORM) immutable archival storage for long-term records',
        'Cryptographic erasure (crypto-shredding) rendering decommissioned data cryptographically unrecoverable',
        'End-to-end sanitization verification covering live databases, warm replicas, and cold backups'
      ]
    }
  ];

  // Section 5: Data Protection Architecture Layers (5 Layers)
  const architectureLayers = [
    {
      layer: 'Layer 1',
      title: 'Data Sources',
      tag: 'ENTERPRISE ASSETS',
      description:
        'Relational databases, NoSQL stores, file servers, ERP platforms, CRM systems, documents, object storage buckets, and third-party SaaS environments.',
      focus: 'Source discovery, repository mapping, and technical baseline cataloging.'
    },
    {
      layer: 'Layer 2',
      title: 'Discovery & Classification',
      tag: 'CONTEXTUAL METADATA',
      description:
        'Automated content scanning engines, PII/PCI detection algorithms, classification metadata tagging, and data ownership attribution.',
      focus: 'Applying uniform handling labels (Public, Internal, Confidential, Restricted).'
    },
    {
      layer: 'Layer 3',
      title: 'Protection Controls',
      tag: 'CRYPTOGRAPHY & MASKING',
      description:
        'AES-256 storage volume encryption, database transparent data encryption (TDE), dynamic data masking, tokenization, and KMS key management.',
      focus: 'Safeguarding data confidentiality and integrity directly at the storage and query tiers.'
    },
    {
      layer: 'Layer 4',
      title: 'Movement & Sharing',
      tag: 'PERIMETER & DLP GATES',
      description:
        'TLS 1.3 encrypted transport pipelines, mutual TLS (mTLS), endpoint DLP agents, cloud CASB inspection, and external sharing controls.',
      focus: 'Preventing unauthorized data leaks and unmonitored external exfiltration.'
    },
    {
      layer: 'Layer 5',
      title: 'Monitoring & Governance',
      tag: 'AUDIT & COMPLIANCE',
      description:
        'Centralized access telemetry, SIEM anomaly detection, retention schedule execution, privacy consent tracking, and audit report generation.',
      focus: 'Verifiable accountability, regulatory compliance, and continuous control validation.'
    }
  ];

  // Section 6: States of Data (3 States)
  const dataStates = [
    {
      title: 'Data at Rest',
      state: 'STORAGE & ARCHIVES',
      image: '/images/cloud/data_at_rest.jpg?v=2',
      tagline: 'Securing databases, file systems, object storage, and backup vaults.',
      description:
        'Data at rest refers to inactive information housed across database disks, cloud buckets, file shares, and archival repositories. Protection relies on AES-256 volume encryption, dedicated Key Management Services (KMS), hardware security modules (HSM), immutable WORM backup vaults, and strict operating system access permissions.',
      controls: [
        'Transparent Data Encryption (TDE) for relational and NoSQL databases',
        'Centralized Customer-Managed Keys (CMK) with automated annual rotation',
        'Immutable, air-gapped backup vaults preventing ransomware tampering',
        'Storage-level access control lists and storage bucket public-access blocks'
      ]
    },
    {
      title: 'Data in Transit',
      state: 'NETWORK & APIS',
      image: '/images/cloud/data_in_transit.jpg?v=2',
      tagline: 'Protecting information moving across networks, APIs, and cloud services.',
      description:
        'Data in transit represents information traversing internal enterprise networks, public internet connections, API gateways, and external partner links. Protection ensures that communications cannot be intercepted or modified through enforced TLS 1.3, mutual TLS (mTLS) authentication, and software-defined perimeters.',
      controls: [
        'Enforced modern TLS 1.3 protocol standards disabling obsolete ciphers',
        'Mutual TLS (mTLS) verifying identities between inter-service microservices',
        'Encrypted API gateways validating payload signatures and throttling transfers',
        'Encrypted VPN and private interconnect conduits for hybrid cloud links'
      ]
    },
    {
      title: 'Data in Use',
      state: 'PROCESSING & MEMORY',
      image: '/images/cloud/data_in_use.jpg?v=2',
      tagline: 'Safeguarding active information being computed, viewed, or analyzed.',
      description:
        'Data in use is information actively loaded into server memory, computed by business applications, or viewed by end users. Protection requires dynamic data masking, confidential computing with hardware-based secure enclaves, memory encryption, and strict least-privilege export boundaries.',
      controls: [
        'Dynamic data masking concealing sensitive fields from unauthorized roles',
        'Confidential computing utilizing CPU-isolated secure hardware enclaves',
        'Restricted application-level clipboard and screen capture protections',
        'Watermarking and controlled export restrictions on generated reports'
      ]
    }
  ];

  // Section 7: Enterprise Environments (8 Environments)
  const enterpriseEnvironments = [
    {
      title: 'On-Premises Databases & File Servers',
      description: 'Transparent database encryption, network share permission audits, and SAN/NAS storage security.',
      tag: 'CORE DATACENTER'
    },
    {
      title: 'Multi-Cloud Object & Block Storage',
      description: 'AWS S3, Azure Blob, and GCP Cloud Storage bucket protection, access block policies, and KMS encryption.',
      tag: 'HYPERSCALERS'
    },
    {
      title: 'Enterprise Applications & ERP',
      description: 'SAP ERP, Salesforce, custom business tools, and core operational platforms holding transactional records.',
      tag: 'BUSINESS CORE'
    },
    {
      title: 'Collaboration Tools & Document Hubs',
      description: 'Microsoft 365, SharePoint, Google Workspace, and internal wikis holding unstructured documentation.',
      tag: 'WORKFORCE HUBS'
    },
    {
      title: 'Endpoints & Remote Workspaces',
      description: 'Laptops, workstations, and mobile devices protected with BitLocker/FileVault and endpoint DLP agents.',
      tag: 'DISTRIBUTED FLEET'
    },
    {
      title: 'APIs, Integrations & Data Pipelines',
      description: 'Microservice API gateways, ETL streaming pipelines, and Kafka message buses transporting payload records.',
      tag: 'DATA IN MOTION'
    },
    {
      title: 'Backup & Archival Systems',
      description: 'Immutable backup repositories, disaster recovery replicas, and long-term compliance storage vaults.',
      tag: 'RESILIENCE TIERS'
    },
    {
      title: 'Third-Party & Vendor Data Exchanges',
      description: 'Secure SFTP servers, partner APIs, external vendor contracts, and governed data sharing portals.',
      tag: 'SUPPLY CHAIN'
    }
  ];

  // Section 8: Implementation Roadmap (6 Phases)
  const roadmapPhases = [
    {
      phase: 'Phase 1',
      title: 'Discover',
      tagline: 'Inventory data repositories, sensitive assets, and data flows.',
      description:
        'We execute automated discovery scans across databases, cloud buckets, and file repositories. Our team catalogs sensitive data locations, identifies orphaned repositories, and maps inter-system data flows.',
      activities: [
        'Deploy automated discovery connectors across multi-cloud and on-premises stores',
        'Map internal data flows between core applications, APIs, and partner endpoints',
        'Identify unmanaged "dark data" repositories and shadow cloud storage locations',
        'Document baseline encryption settings and access permission structures'
      ]
    },
    {
      phase: 'Phase 2',
      title: 'Classify',
      tagline: 'Establish classification schemes, handling rules, and data ownership.',
      description:
        'We formalize an enterprise data classification taxonomy. Handling guidelines are defined for each tier, metadata tagging is embedded into business tools, and business owners are formally designated.',
      activities: [
        'Formalize a 4-tier data classification policy (Public, Internal, Confidential, Restricted)',
        'Configure automated classification labeling in Microsoft 365 and cloud stores',
        'Assign formal Data Owners and Stewards for key business information domains',
        'Publish data handling guidelines detailing approved storage, sharing, and disposal rules'
      ]
    },
    {
      phase: 'Phase 3',
      title: 'Assess Exposure',
      tagline: 'Evaluate access permissions, encryption gaps, and data loss risks.',
      description:
        'We review current exposure vectors against the classification baseline. Our team evaluates where sensitive data lacks encryption, where access permissions are overly permissive, and where DLP rules are needed.',
      activities: [
        'Audit database and storage bucket encryption against AES-256 and TLS standards',
        'Identify excessive access privileges and unmasked queries on regulated data sets',
        'Evaluate external email and collaboration sharing configurations for leakage risks',
        'Assess compliance gaps against statutory frameworks (GDPR, India DPDP Act 2023)'
      ]
    },
    {
      phase: 'Phase 4',
      title: 'Prioritize Safeguards',
      tagline: 'Rank technical controls based on data sensitivity and operational impact.',
      description:
        'Not all data can or should be protected identically. We establish a risk-based remediation roadmap, prioritizing controls for high-impact confidential data and core revenue-generating repositories.',
      activities: [
        'Prioritize encryption and key management upgrades for mission-critical databases',
        'Define initial DLP rule sets focused on high-risk egress channels (email, USB, web upload)',
        'Establish dynamic data masking priorities for customer-facing analytics and support portals',
        'Align implementation sequencing with business release cycles to minimize disruption'
      ]
    },
    {
      phase: 'Phase 5',
      title: 'Implement & Integrate',
      tagline: 'Deploy technical controls, KMS key rotation, and DLP enforcement.',
      description:
        'We coordinate technical deployment across applications, infrastructure, and cloud environments: configuring centralized KMS, enabling dynamic masking, and activating policy-based DLP blocking.',
      activities: [
        'Activate database transparent data encryption and centralized KMS key rotation',
        'Deploy and tune Data Loss Prevention (DLP) policies to minimize false positives',
        'Implement dynamic data masking and tokenization on operational query gateways',
        'Conduct workforce awareness training on approved data handling and classification labels'
      ]
    },
    {
      phase: 'Phase 6',
      title: 'Validate & Improve',
      tagline: 'Monitor telemetry, audit exceptions, and refine retention schedules.',
      description:
        'Data protection requires continuous operational hygiene. We establish recurring governance cadences to review DLP incident alerts, verify disposal records, and adapt controls as technology evolves.',
      activities: [
        'Review quarterly DLP violation trends and adjust policy thresholds accordingly',
        'Audit automated retention schedule execution and verify certified data disposal',
        'Conduct re-discovery scans to detect new data repositories and prevent drift',
        'Deliver updated audit evidence packages for executive leadership and external auditors'
      ]
    }
  ];

  // Section 9: Governance & Responsibilities (6 Roles)
  const governanceRoles = [
    {
      role: 'Data Owners',
      scope: 'BUSINESS DOMAIN LEADERSHIP',
      responsibilities:
        'Business unit leaders who define the operational purpose, classification tier, authorized usage, and approved sharing boundaries for their domain data.',
      icon: Building2
    },
    {
      role: 'Data Stewards',
      scope: 'OPERATIONAL DATA HYGIENE',
      responsibilities:
        'Operational specialists who maintain day-to-day classification accuracy, review data quality, oversee handling guidelines, and approve exception requests.',
      icon: UserCheck
    },
    {
      role: 'Security Teams',
      scope: 'TECHNICAL SAFEGUARD ARCHITECTURE',
      responsibilities:
        'Cybersecurity engineers who design encryption standards, manage KMS infrastructure, configure DLP policies, and monitor data exfiltration telemetry.',
      icon: Shield
    },
    {
      role: 'Application & Platform Owners',
      scope: 'SYSTEM-LEVEL IMPLEMENTATION',
      responsibilities:
        'Technical leads who implement database encryption, configure dynamic masking, restrict export features, and maintain system-level audit logging.',
      icon: Server
    },
    {
      role: 'Privacy & Compliance',
      scope: 'STATUTORY ATTESTATION',
      responsibilities:
        'Legal and compliance officers who interpret regulatory mandates (GDPR, DPDP), review Data Protection Impact Assessments (DPIA), and manage DSARs.',
      icon: Scale
    },
    {
      role: 'Business Users',
      scope: 'EVERYDAY INFORMATION HANDLING',
      responsibilities:
        'Employees and contractors who follow data classification labels, utilize approved secure sharing channels, and adhere to clean desk and disposal policies.',
      icon: FileText
    }
  ];

  // Section 10: Practical Outcomes (7 Outcomes)
  const practicalOutcomes = [
    {
      title: 'Clearer Understanding of Sensitive Data Locations',
      description:
        'Automated discovery eliminates blind spots, providing a comprehensive, updated inventory of exactly where critical data resides across the enterprise.',
      icon: Search
    },
    {
      title: 'Consistent Classification & Handling Rules',
      description:
        'Standardized labels and automated tagging ensure teams apply uniform handling, storage, and transmission protections across all departments.',
      icon: FileSpreadsheet
    },
    {
      title: 'Better Control Over Sensitive Data Sharing',
      description:
        'DLP inspection gates prevent accidental email attachments, unapproved web uploads, and unauthorized external transfers before leaks occur.',
      icon: Share2
    },
    {
      title: 'Coordinated Encryption & Centralized Key Management',
      description:
        'Centralized KMS with automated key rotation ensures data at rest and in transit remains cryptographically shielded against unauthorized access.',
      icon: KeyRound
    },
    {
      title: 'Structured Retention & Defensible Disposal',
      description:
        'Automated retention schedules purge obsolete records systematically, reducing storage overhead and eliminating liability from outdated dark data.',
      icon: Trash2
    },
    {
      title: 'Defensible Governance & Audit Documentation',
      description:
        'Timestamped access telemetry, classification logs, and disposal certificates streamline customer security reviews and statutory compliance audits.',
      icon: FileCheck2
    },
    {
      title: 'Alignment with Global Privacy Standards',
      description:
        'Data minimization and purpose-based handling provide measurable alignment with GDPR, the India DPDP Act 2023, and regional data protection laws.',
      icon: Scale
    }
  ];

  // Section 11: Deliverables (10 Deliverables)
  const dataDeliverables = [
    {
      title: 'Data Discovery & Classification Assessment',
      desc: 'Comprehensive inventory of enterprise data stores, dark data repositories, and classified sensitivity mappings.'
    },
    {
      title: 'Data Flow & Repository Inventory',
      desc: 'Detailed architectural blueprints mapping data ingestion, storage tiers, processing conduits, and egress pathways.'
    },
    {
      title: 'Data Protection Architecture Blueprint',
      desc: 'Technical recommendations for multi-tier safeguards, cryptographic boundaries, and isolation enclaves.'
    },
    {
      title: 'Encryption & Key Management Specification',
      desc: 'Standards document detailing AES-256 ciphers, TLS 1.3 parameters, KMS key hierarchy, and rotation schedules.'
    },
    {
      title: 'Data Loss Prevention (DLP) Policy Guide',
      desc: 'Tailored rule sets for endpoint, email, and cloud gateways to block unauthorized data exfiltration.'
    },
    {
      title: 'Data Access & Sharing Control Matrix',
      desc: 'Row/column access specifications, dynamic data masking guidelines, and external sharing approval workflows.'
    },
    {
      title: 'Data Retention & Secure Disposal Procedures',
      desc: 'Defensible retention schedules and certified cryptographic sanitization runbooks across storage and backups.'
    },
    {
      title: 'Privacy & Governance Control Mapping',
      desc: 'Detailed control alignment matrix mapping data practices to GDPR, India DPDP Act 2023, and ISO/IEC 27701.'
    },
    {
      title: 'Prioritized Improvement Roadmap',
      desc: 'Phased implementation plan balancing immediate risk reduction, budget constraints, and operational continuity.'
    },
    {
      title: 'Validation & Operational Handover Package',
      desc: 'Standard operating procedures, audit evidence templates, and administrative handoff documentation for staff.'
    }
  ];

  // Section 12: Frequently Asked Questions (7 Questions)
  const faqs = [
    {
      q: 'What is enterprise data protection?',
      a: 'Enterprise data protection is a comprehensive discipline combining technical safeguards, operational policies, and governance controls to protect sensitive business and customer information throughout its complete lifecycle—from creation and collection through processing, storage, transmission, archival, and certified disposal. It ensures data confidentiality, integrity, and availability while enabling legitimate business use.'
    },
    {
      q: 'What is the difference between data protection and cybersecurity?',
      a: 'Cybersecurity is a broad domain focused on protecting systems, networks, servers, endpoints, user identities, and applications from malicious threats and unauthorized access. Data protection is a specialized discipline focused specifically on the data itself—discovering where it lives, classifying its sensitivity, controlling its use, encrypting its contents, preventing exfiltration, and enforcing retention and disposal rules.'
    },
    {
      q: 'What is Data Loss Prevention (DLP)?',
      a: 'Data Loss Prevention (DLP) consists of specialized technologies and operational policies designed to identify sensitive information (such as credit card numbers, source code, or personal data) and enforce rules to prevent its unauthorized or accidental movement. DLP operates across endpoints, corporate email, web gateways, and cloud storage to block data leaks.'
    },
    {
      q: 'Why is data classification fundamental to security?',
      a: 'Without data classification, organizations must either treat all data as public (leaving sensitive secrets exposed) or treat all data as top-secret (creating excessive friction and unsustainable costs). Classification categorizes data by sensitivity and value, allowing teams to apply strict encryption, restricted access, and monitoring where it truly matters while keeping routine business operations agile.'
    },
    {
      q: 'Does encryption alone protect all sensitive information?',
      a: 'No. While encryption is a crucial safeguard for data at rest and in transit, it does not solve every exposure scenario. If an authorized user account is compromised, the attacker can still view decrypted data. True protection requires layered controls: robust key management, dynamic data masking for data in use, fine-grained access policies, and DLP monitoring.'
    },
    {
      q: 'How should organizations determine how long data is retained?',
      a: 'Data retention schedules should be based on formal business requirements, statutory tax and accounting preservation mandates, regulatory compliance obligations (such as GDPR or India DPDP Act 2023), and contractual agreements. Retaining data indefinitely increases cyber liability and legal discovery costs without providing operational value.'
    },
    {
      q: 'Can data be securely deleted from every backup immediately?',
      a: 'Not always. Modern backup architectures use immutable, write-once-read-many (WORM) storage vaults designed specifically to resist tampering or deletion, even by administrators. Data disposal runbooks must account for this reality: securely purging live databases and warm replicas immediately, while allowing immutable backup snapshots to expire naturally under strict retention clocks.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050B17] text-slate-800 dark:text-slate-100 font-sans antialiased selection:bg-[#00A3E0] selection:text-white">

      {/* =========================================================================
          SECTION 1: HERO SECTION (Panoramic Full-Screen Cinematic Hero)
          ========================================================================= */}
      <section className="relative w-full min-h-[85vh] lg:min-h-[92vh] flex items-center overflow-hidden bg-[#030712] border-b border-white/10 pt-28 pb-16 sm:pt-32 sm:pb-20">

        {/* 100% Full-Bleed Panoramic Background Image — Spans Corner to Corner */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/images/cloud/data_hero_wide.jpg"
            alt="Cryptographic Data Protection, KMS and DLP Controls"
            className="w-full h-full object-cover object-[70%_center] filter brightness-[1.06] contrast-[1.05]"
          />
          {/* Subtle directional gradient on left for razor-sharp typography readability; right 55%+ visual is 100% untouched */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/80 sm:via-[#030712]/60 via-35% to-transparent w-full lg:w-[52%] pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#030712] via-[#030712]/50 to-transparent pointer-events-none" />
        </div>



        {/* Main Content Container (Over the Left Side) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
          <div className="max-w-2xl lg:max-w-3xl space-y-6">

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#00A3E0] animate-pulse" />
              <span>SECURITY &amp; RESILIENCE</span>
            </div>

            {/* Main Heading & Subtitle */}
            <div className="space-y-3">
              <span className="block text-sm sm:text-base font-semibold uppercase tracking-wider text-[#00A3E0]">
                Data Protection
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.12] drop-shadow-lg">
                Data Protection
              </h1>
              <p className="text-lg sm:text-xl font-bold text-cyan-300 tracking-tight drop-shadow-md">
                Protect Sensitive Data. Preserve Trust. Maintain Control.
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl drop-shadow">
              Knooviq helps organizations protect sensitive information throughout its lifecycle, from creation and collection to storage, sharing, archival, and secure disposal. Our approach combines data discovery, classification, access controls, encryption strategies, data loss prevention, privacy considerations, and governance practices to help businesses manage information responsibly across their technology environments.
            </p>




          </div>
        </div>
      </section>

      {/* Data Protection Signals Ribbon directly below hero */}
      <div className="bg-[#050B17] border-b border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <div className="p-3.5 rounded-xl bg-slate-900/70 border border-white/10 backdrop-blur-md">
              <span className="font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 text-xs">
                <Search className="w-3.5 h-3.5" />
                <span>Classification</span>
              </span>
              <div className="text-sm font-bold text-white mt-1">Discovery &amp; Tagging</div>
              <div className="text-xs text-slate-400 mt-0.5">Asset Inventory</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/70 border border-white/10 backdrop-blur-md">
              <span className="font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 text-xs">
                <Lock className="w-3.5 h-3.5" />
                <span>Cryptography</span>
              </span>
              <div className="text-sm font-bold text-white mt-1">AES-256 &amp; KMS</div>
              <div className="text-xs text-slate-400 mt-0.5">Rest &amp; Transit Protection</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/70 border border-white/10 backdrop-blur-md">
              <span className="font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 text-xs">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>DLP Controls</span>
              </span>
              <div className="text-sm font-bold text-white mt-1">Exfiltration Defense</div>
              <div className="text-xs text-slate-400 mt-0.5">Egress Inspection</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/70 border border-white/10 backdrop-blur-md">
              <span className="font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 text-xs">
                <FileCheck className="w-3.5 h-3.5" />
                <span>Governance</span>
              </span>
              <div className="text-sm font-bold text-white mt-1">Privacy &amp; Lifecycle</div>
              <div className="text-xs text-slate-400 mt-0.5">Retention Standards</div>
            </div>
          </div>
        </div>
      </div>



      {/* =========================================================================
          SECTION 2: DATA PROTECTION OVERVIEW (Information Governance)
          ========================================================================= */}
      <section id="overview" className="py-20 bg-white dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <span>INFORMATION GOVERNANCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Protect Data Wherever Business Takes It.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Enterprise information moves across applications, databases, cloud services, collaboration platforms, endpoints, integrations, and external partners. Protecting that information requires an understanding of what data exists, how sensitive it is, who should access it, where it moves, and how it should be retained or disposed of.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Diagram / Visual Area */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-900 aspect-[16/10] group">
                <img
                  src="/images/cloud/data_overview.jpg?v=3"
                  alt="Enterprise information lifecycle and data flow architecture showing creation, classification, storage, sharing, monitoring, and disposal"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Stages Breakdown */}
            <div className="lg:col-span-6 space-y-3.5">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 space-y-1">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                  <Database className="w-4 h-4 text-[#00A3E0]" />
                  <span>1. Data Creation &amp; Collection</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Ingestion from customer portals, IoT streams, enterprise ERP, and transactional databases with initial metadata capture.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 space-y-1">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                  <Search className="w-4 h-4 text-[#00A3E0]" />
                  <span>2. Discovery &amp; Classification</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Automated scanning, PII/PCI detection, and application of standardized sensitivity labels (Public, Internal, Confidential, Restricted).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 space-y-1">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                  <Lock className="w-4 h-4 text-[#00A3E0]" />
                  <span>3. Storage &amp; Processing</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Cryptographic protection via AES-256 volume encryption, Transparent Data Encryption (TDE), and secure memory enclaves.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 space-y-1">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                  <Share2 className="w-4 h-4 text-[#00A3E0]" />
                  <span>4. Authorized Access &amp; Sharing</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Fine-grained query controls, dynamic data masking, export watermarks, and TLS 1.3 transport encryption.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 space-y-1">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                  <Activity className="w-4 h-4 text-[#00A3E0]" />
                  <span>5. Monitoring &amp; Protection</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Real-time Data Loss Prevention (DLP) inspection across endpoints, email, and cloud gateways to block exfiltration.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 space-y-1">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                  <Trash2 className="w-4 h-4 text-[#00A3E0]" />
                  <span>6. Retention, Archival &amp; Disposal</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Immutable WORM archival, statutory retention clocks, and certified cryptographic sanitization upon record expiry.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: COMMON DATA PROTECTION CHALLENGES (5 Cards)
          ========================================================================= */}
      <section className="py-20 bg-slate-50 dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <span>DATA SECURITY CHALLENGES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Understanding Data Is the First Step to Protecting It.
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Fragmented architectures and decentralized cloud platforms create distinct information risks that demand disciplined governance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dataChallenges.map((challenge, idx) => {
              const IconComponent = challenge.icon;
              return (
                <div
                  key={challenge.id}
                  className={`p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-md transition-all space-y-4 ${idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                    }`}
                >
                  <div className="flex items-center justify-between">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${challenge.accent}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-slate-400">0{idx + 1}</span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {challenge.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#00A3E0] dark:text-cyan-400">
                      {challenge.tagline}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {challenge.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: CORE DATA PROTECTION CAPABILITIES (6 Detailed Sections)
          ========================================================================= */}
      <section id="capabilities" className="py-20 bg-white dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <span>DATA PROTECTION CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Build Protection Around the Information That Matters.
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Knooviq helps organizations establish practical data protection controls aligned with information sensitivity, business use, technology architecture, and applicable governance requirements.
            </p>
          </div>

          <div className="space-y-20">
            {dataCapabilities.map((cap, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={cap.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${!isEven ? 'lg:flex-row-reverse' : ''
                    }`}
                >
                  {/* Visual Column */}
                  <div className={`lg:col-span-6 ${!isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-900 group">
                      <img
                        src={cap.image}
                        alt={`${cap.title} architectural illustration`}
                        className="w-full h-auto block group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-6 space-y-5 ${!isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="space-y-2">
                      <div className="text-[11px] font-bold tracking-wider uppercase text-[#00A3E0] dark:text-cyan-400">
                        {cap.badge}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                        {cap.title}
                      </h3>
                      <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">
                        {cap.tagline}
                      </p>
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {cap.description}
                    </p>

                    <div className="space-y-2.5 pt-2">
                      {cap.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => handleOpenContact(`Data Protection: ${cap.title}`)}
                        className="inline-flex items-center gap-2 text-xs font-bold text-[#00A3E0] dark:text-cyan-400 hover:underline cursor-pointer"
                      >
                        <span>Discuss this capability</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: DATA PROTECTION ARCHITECTURE (Layered Protection)
          ========================================================================= */}
      <section className="py-20 bg-slate-50 dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <span>PROTECTION BY DESIGN</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Apply the Right Safeguards at Every Data Layer.
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              A comprehensive data architecture combines complementary safeguards so that no single control failure exposes enterprise information.
            </p>
          </div>

          {/* Wide Architecture Graphic */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-900 group">
            <img
              src="/images/cloud/data_architecture.jpg?v=10"
              alt="5-tier Data Protection Architecture diagram spanning Data Sources, Classification, Controls, Movement, and Monitoring"
              className="w-full h-auto block group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>

          {/* 5 Layer Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {architectureLayers.map((l) => (
              <div
                key={l.layer}
                className="p-5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 shadow-sm flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-[#00A3E0] dark:text-cyan-400 uppercase tracking-widest">
                      {l.layer}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase">
                      {l.tag}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    {l.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {l.description}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-100 dark:border-white/5 text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                  <span className="text-slate-900 dark:text-white">Focus: </span>
                  {l.focus}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: DATA AT REST, IN TRANSIT & IN USE (3 Comparison Panels)
          ========================================================================= */}
      <section className="py-20 bg-white dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <span>STATES OF DATA</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Protect Information Across Its Different States.
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Different states introduce unique vulnerabilities. Comprehensive protection requires synchronized controls across stored, moving, and processed data.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {dataStates.map((stateItem, sIdx) => (
              <div
                key={stateItem.title}
                className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/40 overflow-hidden shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="h-56 overflow-hidden bg-slate-900">
                    <img
                      src={stateItem.image}
                      alt={`${stateItem.title} technical illustration`}
                      className="w-full h-full object-cover object-center hover:scale-103 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-[#00A3E0] dark:text-cyan-400 uppercase tracking-widest">
                        STATE 0{sIdx + 1} &bull; {stateItem.state}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {stateItem.title}
                      </h3>
                      <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                        {stateItem.tagline}
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {stateItem.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-slate-200/60 dark:border-white/5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Core Technical Controls:
                      </span>
                      {stateItem.controls.map((ctrl, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3E0] shrink-0 mt-0.5" />
                          <span>{ctrl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    type="button"
                    onClick={() => handleOpenContact(`Data Protection: ${stateItem.title}`)}
                    className="w-full py-2.5 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-bold text-slate-800 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 transition-colors cursor-pointer text-center"
                  >
                    Discuss {stateItem.title} Controls
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: DATA PROTECTION ACROSS ENTERPRISE ENVIRONMENTS
          ========================================================================= */}
      <section className="py-20 bg-slate-50 dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <span>HETEROGENEOUS ECOSYSTEMS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              One Data Protection Strategy Across Connected Systems.
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Modern enterprises operate across hybrid environments, multi-cloud storage, collaboration suites, and remote endpoints. Knooviq harmonizes information safeguards across every tier.
            </p>
          </div>

          {/* Wide Architecture Graphic */}
          <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-900">
            <img
              src="/images/cloud/data_environments.jpg"
              alt="Connected enterprise data environments including on-premises databases, multi-cloud storage, document hubs, endpoints, and APIs"
              className="w-full h-[260px] sm:h-[340px] object-cover object-center"
              loading="lazy"
            />
          </div>

          {/* 8 Environment Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {enterpriseEnvironments.map((env) => (
              <div
                key={env.title}
                className="p-5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 shadow-sm space-y-2 flex flex-col justify-between"
              >
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold tracking-wider text-[#00A3E0] dark:text-cyan-400 uppercase bg-cyan-500/10 px-2 py-0.5 rounded">
                    {env.tag}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white pt-1">
                    {env.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {env.description}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-100 dark:border-white/5 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Governed Environment</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 8: IMPLEMENTATION ROADMAP (6 Phases)
          ========================================================================= */}
      <section className="py-20 bg-white dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <span>IMPLEMENTATION APPROACH</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Discover the Data. Define the Controls. Validate the Protection.
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              A phased, disciplined implementation roadmap that turns data exposure into structured, audit-ready operational safeguards.
            </p>
          </div>

          {/* Phase Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 max-w-4xl mx-auto">
            {roadmapPhases.map((phase, idx) => (
              <button
                key={phase.phase}
                type="button"
                onClick={() => setActiveRoadmapPhase(idx)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${activeRoadmapPhase === idx
                  ? 'bg-[#00A3E0] text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
              >
                {phase.phase}
              </button>
            ))}
          </div>

          {/* Active Phase Deep Dive Card */}
          <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 max-w-4xl mx-auto space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-[#00A3E0] dark:text-cyan-400 uppercase tracking-widest">
                  {roadmapPhases[activeRoadmapPhase].phase} &bull; {roadmapPhases[activeRoadmapPhase].title}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">
                  {roadmapPhases[activeRoadmapPhase].tagline}
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {roadmapPhases[activeRoadmapPhase].description}
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Key Activities &amp; Milestones:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {roadmapPhases[activeRoadmapPhase].activities.map((act, actIdx) => (
                  <div key={actIdx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-200 p-2.5 rounded-lg bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                    <span>{act}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 9: GOVERNANCE, OWNERSHIP & RESPONSIBILITIES (6 Roles)
          ========================================================================= */}
      <section className="py-20 bg-slate-50 dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <span>OPERATING RESPONSIBILITY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Make Data Protection a Shared Responsibility.
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Effective information governance bridges business, security, legal, and engineering functions. Clear ownership prevents data hoarding and control decay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {governanceRoles.map((roleItem) => {
              const RoleIcon = roleItem.icon;
              return (
                <div
                  key={roleItem.role}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 shadow-sm space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-[#00A3E0] dark:text-cyan-300">
                        <RoleIcon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 text-slate-400">
                        {roleItem.scope}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {roleItem.role}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {roleItem.responsibilities}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 dark:border-white/5 flex items-center gap-2 text-[11px] text-cyan-600 dark:text-cyan-400 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Operating Accountability</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 10: PRACTICAL OUTCOMES (7 Outcomes)
          ========================================================================= */}
      <section className="py-20 bg-white dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <span>BUSINESS VALUE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Better Visibility. More Responsible Data Handling.
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Tangible operational improvements achieved through discovery, classification, encryption, and disciplined retention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practicalOutcomes.map((outcome, idx) => {
              const OutcomeIcon = outcome.icon;
              return (
                <div
                  key={outcome.title}
                  className={`p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 space-y-3 ${idx === 6 ? 'md:col-span-2 lg:col-span-1' : ''
                    }`}
                >
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-[#00A3E0] dark:text-cyan-300">
                    <OutcomeIcon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    {outcome.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {outcome.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 11: DATA PROTECTION DELIVERABLES (10 Deliverables)
          ========================================================================= */}
      <section className="py-20 bg-slate-50 dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <span>ENGAGEMENT ARTIFACTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Turn Data Risks into a Practical Protection Plan.
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Every data protection engagement produces concrete technical and governance deliverables tailored to your regulatory scope and architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dataDeliverables.map((deliv, idx) => (
              <div
                key={deliv.title}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 shadow-sm space-y-2.5 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="font-bold text-[#00A3E0] dark:text-cyan-400">DELIVERABLE {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</span>
                    <FileText className="w-4 h-4 text-slate-400" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    {deliv.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {deliv.desc}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-100 dark:border-white/5 text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Scope-Dependent Deliverable</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 12: FREQUENTLY ASKED QUESTIONS (7 Questions Accordion)
          ========================================================================= */}
      <section className="py-20 bg-white dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <span>FAQ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Frequently Asked Questions on Enterprise Data Protection.
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Clear answers regarding discovery, classification, encryption, DLP, and statutory data retention.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/40 overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-900/80 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#00A3E0] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                        }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/60 dark:border-white/5">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 13: CLOSING CALL TO ACTION BANNER (Dark Navy)
          ========================================================================= */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-[#050B17] border-t border-white/10 overflow-hidden text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00A3E0]/10 via-transparent to-blue-900/10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="rounded-3xl p-8 sm:p-12 lg:p-14 bg-gradient-to-r from-blue-900/30 via-cyan-950/30 to-slate-900/60 border border-cyan-500/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 backdrop-blur-sm">

            <div className="space-y-4 max-w-2xl text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 block">
                SECURITY &amp; RESILIENCE &bull; DATA PROTECTION
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
                Protect the Information That Powers Your Business.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Build a structured data protection approach that improves visibility, strengthens information safeguards, and supports responsible data handling across your enterprise.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-4 shrink-0 w-full lg:w-auto">
              <button
                type="button"
                onClick={() => handleOpenContact('Talk to Our Experts – Data Protection')}
                className="px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-gradient-to-r from-[#00A3E0] to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-lg shadow-cyan-500/30 flex items-center gap-2.5 group cursor-pointer"
              >
                <span>Talk to Our Cloud Experts</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                to="/cloud-operations/business-continuity"
                className="px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 hover:text-white border border-white/20 font-bold text-xs sm:text-sm tracking-wide transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>Explore Business Continuity</span>
                <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default DataProtectionPage;
