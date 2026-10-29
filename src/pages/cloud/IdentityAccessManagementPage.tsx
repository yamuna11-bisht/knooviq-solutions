import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  KeyRound,
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
  UserPlus,
  UserMinus,
  Key,
  Fingerprint,
  FileCheck2,
  ClipboardList,
  AlertCircle,
  Building2,
  Globe,
  Settings2,
  FolderGit2,
  Shield,
  Layers2,
  Maximize2,
  X
} from 'lucide-react';

interface ChildPageProps {
  onOpenContact?: (topic?: string) => void;
}

export const IdentityAccessManagementPage: React.FC<ChildPageProps> = ({ onOpenContact }) => {
  const [activeRoadmapPhase, setActiveRoadmapPhase] = useState<number>(0);
  const [activeFlowStep, setActiveFlowStep] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState<boolean>(false);

  useEffect(() => {
    document.title = 'Identity & Access Management (IAM) – The Right Access at the Right Time | KNOOVIQ';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsImageModalOpen(false);
      }
    };
    if (isImageModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isImageModalOpen]);

  const handleOpenContact = (topic?: string) => {
    if (onOpenContact) {
      onOpenContact(topic || 'Identity & Access Management (IAM)');
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Section 4: Common Identity & Access Challenges (5 Challenges)
  const iamChallenges = [
    {
      id: 'fragmented-identities',
      title: 'Fragmented User Identities',
      tagline: 'Distributed credentials across disconnected platforms.',
      description:
        'User identities, passwords, and access records are often distributed across legacy Active Directory domains, multiple cloud directories, SaaS subscriptions, and independent databases, making cohesive governance nearly impossible.',
      icon: Users,
      accent: 'text-amber-500 bg-amber-500/10 border-amber-500/20'
    },
    {
      id: 'excessive-privileges',
      title: 'Excessive Access Privileges',
      tagline: 'Permissions retained beyond current job responsibilities.',
      description:
        'Employees and contractors routinely accumulate permissions as they shift between projects and business units. Without automated reconciliation, privilege creep leaves accounts with far more access than their active duties require.',
      icon: KeyRound,
      accent: 'text-rose-500 bg-rose-500/10 border-rose-500/20'
    },
    {
      id: 'complex-auth',
      title: 'Complex Authentication Experiences',
      tagline: 'Inconsistent, friction-heavy sign-in processes.',
      description:
        'Inconsistent login interfaces, competing credentials, and poorly integrated multi-factor prompts cause user frustration, reduce daily productivity, and drive insecure credential workarounds across business teams.',
      icon: Fingerprint,
      accent: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/20'
    },
    {
      id: 'delayed-changes',
      title: 'Delayed Access Changes',
      tagline: 'Outdated permissions after organizational moves.',
      description:
        'Role transfers, team relocations, contractor terminations, and personnel departures often take days or weeks to propagate through disconnected IT systems, leaving dormant accounts and orphaned access rights exposed.',
      icon: RefreshCw,
      accent: 'text-purple-500 bg-purple-500/10 border-purple-500/20'
    },
    {
      id: 'limited-visibility',
      title: 'Limited Access Visibility',
      tagline: 'Difficulty answering who has access to which resources.',
      description:
        'Without centralized entitlement registers, regular access certifications, and clear ownership models, organizations struggle during audits to demonstrate who holds access to critical systems and why.',
      icon: Eye,
      accent: 'text-blue-500 bg-blue-500/10 border-blue-500/20'
    }
  ];

  // Section 5: Core IAM Capabilities (6 Detailed Blocks)
  const iamCapabilities = [
    {
      id: 'lifecycle-management',
      badge: 'CAPABILITY A • JOINER, MOVER & LEAVER',
      title: 'Identity Lifecycle Management',
      tagline: 'Provision, update, and deprovision workforce identities seamlessly across their employment lifecycle.',
      description:
        'Identity Lifecycle Management ensures digital accounts accurately mirror personnel changes within an enterprise. By coordinating HR management systems, central identity directories, and business applications, accounts are automatically provisioned when people join, modified when they change roles or departments, and promptly deactivated when they depart.',
      image: '/images/cloud/iam_lifecycle.jpg?v=9',
      points: [
        'Automated Joiner, Mover, and Leaver (JML) workflows triggered by authoritative HR system events',
        'Role and department change synchronization ensuring legacy entitlements are revoked upon transfer',
        'Immediate account deactivation and token invalidation upon employee or contractor offboarding',
        'End-to-end audit logs documenting every provisioning, modification, and revocation event'
      ]
    },
    {
      id: 'authentication-sso-mfa',
      badge: 'CAPABILITY B • SECURE AUTHENTICATION',
      title: 'Authentication, SSO & MFA',
      tagline: 'Verify identities with frictionless Single Sign-On and risk-aware Multi-Factor Authentication.',
      description:
        'Modern authentication verifies user identity before access is evaluated. We help organizations deploy enterprise Single Sign-On (SSO) backed by Multi-Factor Authentication (MFA), SAML 2.0, and OpenID Connect (OIDC) protocols. While SSO simplifies user access across supported systems, it operates hand-in-hand with fine-grained authorization to ensure security is never compromised.',
      image: '/images/cloud/iam_authentication.jpg?v=20',
      points: [
        'Enterprise Single Sign-On (SSO) unifying access across cloud SaaS, on-premises ERP, and internal tools',
        'Adaptive Multi-Factor Authentication (MFA) with FIDO2 WebAuthn hardware tokens and authenticator apps',
        'Federated identity architectures establishing trusted sign-in relationships across corporate boundaries',
        'Context-aware session policies evaluating device posture, network location, and anomalous sign-ins'
      ]
    },
    {
      id: 'authorization-rbac-abac',
      badge: 'CAPABILITY C • ENTITLEMENT ENFORCEMENT',
      title: 'Authorization & Role-Based Access Control',
      tagline: 'Enforce least privilege through structured RBAC, contextual ABAC, and separation of duties.',
      description:
        'Authentication verifies identity, but authorization governs what that identity is allowed to do. We assist organizations in designing Role-Based Access Control (RBAC) hierarchies and Attribute-Based Access Control (ABAC) policies. By enforcing least privilege and strict separation of duties (SoD), businesses prevent toxic combinations of permissions across core financial and operational systems.',
      image: '/images/cloud/iam_authorization.jpg?v=8',
      points: [
        'Structured Role-Based Access Control (RBAC) aligning entitlements with formal job descriptions',
        'Attribute-Based Access Control (ABAC) evaluating dynamic contextual parameters such as classification and IP',
        'Enforcement of strict Separation of Duties (SoD) rules to prevent conflicting operational authority',
        'Granular API and resource-level authorization policies minimizing access to sensitive business logic'
      ]
    },
    {
      id: 'governance-access-reviews',
      badge: 'CAPABILITY D • COMPLIANCE & ATTESTATION',
      title: 'Identity Governance & Access Reviews',
      tagline: 'Maintain continuous oversight with periodic access recertification and owner sign-offs.',
      description:
        'Identity Governance and Administration (IGA) provides the administrative oversight needed to satisfy audit and compliance mandates. We establish structured access certification campaigns where department managers and application owners periodically review and re-attest user entitlements, ensuring inappropriate or stale privileges are routinely removed.',
      image: '/images/cloud/iam_governance.jpg?v=8',
      points: [
        'Scheduled access recertification campaigns enabling managers to affirm or revoke permissions',
        'Resource-owner approval workflows for out-of-band or elevated access requests',
        'Automated detection and reporting of toxic entitlement combinations and orphaned accounts',
        'Audit-ready governance documentation providing defensible evidence for ISO, SOC 2, and regulatory reviews'
      ]
    },
    {
      id: 'privileged-access-management',
      badge: 'CAPABILITY E • ADMINISTRATIVE SAFEGUARDS',
      title: 'Privileged Access Management (PAM)',
      tagline: 'Protect administrative credentials, enforce Just-In-Time elevation, and record sensitive sessions.',
      description:
        'Accounts with elevated administrative privileges represent high-value targets. Privileged Access Management establishes strict safeguards over infrastructure, database, and cloud root accounts. We design PAM architectures incorporating secure credential vaulting, Just-In-Time (JIT) ephemeral elevation, and session recording to ensure administrative activity remains strictly controlled.',
      image: '/images/cloud/iam_privileged_access.jpg?v=8',
      points: [
        'Discovery and vaulting of all administrative, domain, database, and cloud root credentials',
        'Just-In-Time (JIT) access elevation granting time-bounded permissions only during approved work windows',
        'Administrative session oversight and audit logging recording privileged operational commands',
        'Clear separation between standard daily corporate user accounts and elevated technical personas'
      ]
    },
    {
      id: 'workload-nonhuman-identities',
      badge: 'CAPABILITY F • SERVICE & WORKLOAD ACCOUNTS',
      title: 'External, Partner & Non-Human Identities',
      tagline: 'Govern contractor access, third-party accounts, microservice identities, and API credentials.',
      description:
        'Modern enterprise environments feature more machine and partner identities than human employees. We help organizations establish comprehensive governance for contractor logins, vendor integrations, microservice accounts, and CI/CD service principals, ensuring automated credentials undergo lifecycle rotation and strict expiration rules.',
      image: '/images/cloud/iam_workload_identities.jpg?v=8',
      points: [
        'Governed onboarding, time-bound access, and mandatory termination for third-party contractor accounts',
        'Workload identity federation replacing long-lived static API keys with short-lived cryptographic tokens',
        'Automated credential rotation and ownership assignment for backend service principals',
        'Continuous inventory tracking preventing unmonitored service account sprawl across multi-cloud tiers'
      ]
    }
  ];

  // Section 6: How IAM Works (Identity-to-Resource Flow Data)
  const flowSteps = [
    {
      num: '01',
      title: 'Establish Identity',
      tagline: 'Directory ingestion & authoritative identity record creation.',
      description:
        'Create or maintain a verified, unique digital identity record for an employee, contractor, partner, administrator, or automated workload within an authoritative directory.',
      detail: 'Syncs with HR records, contractor management portals, or workload registry databases.'
    },
    {
      num: '02',
      title: 'Authenticate',
      tagline: 'Verification via modern MFA & cryptographic assertions.',
      description:
        'Verify the identity asserting the request using configured authentication methods, including biometric factors, FIDO2 tokens, or OpenID Connect token exchanges.',
      detail: 'Evaluates contextual risk indicators like geolocation, device health, and credential freshness.'
    },
    {
      num: '03',
      title: 'Evaluate Access',
      tagline: 'Policy engine checks roles, attributes & environmental context.',
      description:
        'Check the requested target resource against assigned roles (RBAC), specific resource tags, environmental attributes (ABAC), and applicable security policies.',
      detail: 'Enforces separation of duties and verifies that the requester holds an active business justification.'
    },
    {
      num: '04',
      title: 'Grant or Deny',
      tagline: 'Deterministic decision enforcement at the gateway.',
      description:
        'Allow only the explicit, least-privilege access supported by the applicable authorization policy, blocking unauthorized lateral movements or anomalous requests.',
      detail: 'Issues scoped, time-limited access tokens without exposing long-lived master credentials.'
    },
    {
      num: '05',
      title: 'Monitor & Review',
      tagline: 'Audit telemetry capture & periodic governance recertification.',
      description:
        'Record relevant access events in centralized audit logs, monitor for privilege misuse, and adjust access permissions promptly when personnel roles change.',
      detail: 'Feeds continuous telemetry into SIEM dashboards and quarterly manager certification campaigns.'
    }
  ];

  // Section 8: Enterprise Environments (6 Environments)
  const iamEnvironments = [
    {
      title: 'Workforce Applications',
      tag: 'ENTERPRISE SAAS & ERP',
      description:
        'Unified Single Sign-On (SSO) and automated provisioning across corporate collaboration suites, SAP ERP, Salesforce, HR portals, and internal business platforms.',
      focus: 'Frictionless sign-in, SCIM lifecycle automation, and centralized session revocation.'
    },
    {
      title: 'Cloud Environments',
      tag: 'HYPERSCALER ROLES & IAM',
      description:
        'Identity federation, AWS IAM Identity Center, Azure AD / Entra ID, and Google Cloud IAM roles managing cloud engineer and developer entitlements.',
      focus: 'Eliminating static AWS access keys, managing cross-account roles, and enforcing least privilege.'
    },
    {
      title: 'Hybrid Infrastructure',
      tag: 'ON-PREMISES & DOMAINS',
      description:
        'Coordination between legacy Active Directory domain controllers, enterprise LDAP trees, Linux server SSH access, and cloud identity providers.',
      focus: 'Hybrid directory synchronization, Kerberos federation, and consistent privilege boundaries.'
    },
    {
      title: 'Third-Party & Partner Access',
      tag: 'EXTERNAL & CONTRACTORS',
      description:
        'Controlled external access for supply-chain vendors, auditing contractors, joint-venture partners, and temporary contingent workers.',
      focus: 'Time-bounded guest accounts, mandatory MFA, strictly scoped portal access, and automatic expiration.'
    },
    {
      title: 'Administrative Systems',
      tag: 'PAM & CRITICAL TIER-0',
      description:
        'Specialized protection for server hypervisors, database administrative accounts, network switch consoles, and security operations platforms.',
      focus: 'Privileged Access Management (PAM) vaulting, JIT temporary checkout, and session auditing.'
    },
    {
      title: 'Application & Workload Identities',
      tag: 'MACHINE-TO-MACHINE & APIS',
      description:
        'Managed identities for microservices, container workloads, CI/CD deployment pipelines, automated scripts, and inter-service API communications.',
      focus: 'Cryptographic workload federation, zero hard-coded secrets, and automated token rotation.'
    }
  ];

  // Section 9: Implementation Roadmap (6 Phases)
  const roadmapPhases = [
    {
      phase: 'Phase 1',
      title: 'Discover & Assess',
      tagline: 'Identity inventory, directory mapping, and access audit.',
      description:
        'We begin by inventorying all existing identity repositories, directories, business applications, and privileged accounts. Our team evaluates current onboarding workflows, identifies orphaned accounts, and maps where permission accumulation occurs.',
      activities: [
        'Inventory all user accounts, contractor identities, and service accounts across directories',
        'Map current provisioning, role change, and deprovisioning processes against HR systems',
        'Identify legacy unvaulted privileged accounts and hard-coded service credentials',
        'Assess current authentication practices and compliance gaps against ISO and NIST standards'
      ]
    },
    {
      phase: 'Phase 2',
      title: 'Define the Identity Model',
      tagline: 'Role definitions, governance policies, and entitlement matrices.',
      description:
        'We establish the foundational identity architecture: formalizing role definitions, defining separation-of-duties boundaries, and designating system ownership between HR, business unit managers, and IT administrators.',
      activities: [
        'Design Role-Based Access Control (RBAC) structures for core enterprise departments',
        'Formulate toxic combination rules preventing separation-of-duties conflicts',
        'Establish standard identity lifecycle policies and approval matrices for access requests',
        'Select authoritative identity directories and protocols (SAML 2.0, OIDC, SCIM)'
      ]
    },
    {
      phase: 'Phase 3',
      title: 'Strengthen Authentication',
      tagline: 'Single Sign-On federation and enterprise MFA rollout.',
      description:
        'We streamline user access and strengthen perimeter defense by unifying application logins behind enterprise Single Sign-On and deploying phishing-resistant Multi-Factor Authentication.',
      activities: [
        'Configure central Identity Provider (IdP) federation across corporate SaaS and web portals',
        'Implement enterprise MFA policies with FIDO2 WebAuthn and push notification authenticators',
        'Establish adaptive conditional access policies evaluating device compliance and network origin',
        'Conduct user communication and rollout training to ensure a smooth authentication transition'
      ]
    },
    {
      phase: 'Phase 4',
      title: 'Govern Permissions & PAM',
      tagline: 'Automated access reviews and privileged credential vaulting.',
      description:
        'We deploy governance workflows and secure administrative operations. Access certification campaigns are established for resource owners, while high-privilege credentials are moved into secure PAM vaults.',
      activities: [
        'Implement scheduled access recertification campaigns for department and application owners',
        'Deploy Privileged Access Management (PAM) vaulting for tier-0 server and database root credentials',
        'Configure Just-In-Time (JIT) elevation workflows with required managerial approvals',
        'Establish automated alerts for unauthorized privilege escalations and orphaned access'
      ]
    },
    {
      phase: 'Phase 5',
      title: 'Integrate & Validate',
      tagline: 'End-to-end testing, SCIM sync, and operational handoff.',
      description:
        'We integrate target enterprise applications with SCIM provisioning endpoints, execute rigorous joiner-mover-leaver test cases, and validate access decisions across heterogeneous systems.',
      activities: [
        'Configure SCIM connectors to automate user provisioning into downstream business apps',
        'Execute end-to-end user acceptance tests for onboarding, promotion, and termination scenarios',
        'Validate session revocation speed and token expiration across federated applications',
        'Deliver comprehensive standard operating procedures (SOPs) for identity support personnel'
      ]
    },
    {
      phase: 'Phase 6',
      title: 'Review & Optimize',
      tagline: 'Continuous metric tracking, entitlement hygiene, and optimization.',
      description:
        'IAM is an evolving operational discipline. We establish ongoing review cadences to analyze access request trends, review certification audit findings, and continually simplify role models.',
      activities: [
        'Review quarterly access certification completion rates and remediation turnaround times',
        'Analyze service account usage and retire dormant or decommissioned API credentials',
        'Refine role definitions based on business feedback to reduce ad-hoc entitlement requests',
        'Assess emerging identity standards and cloud features to further enhance access governance'
      ]
    }
  ];

  // Section 10: Operational Responsibilities (6 Roles)
  const operationalRoles = [
    {
      role: 'Identity Team',
      scope: 'CORE INFRASTRUCTURE & LIFECYCLE',
      responsibilities:
        'Maintains central identity providers, SCIM connectors, SSO configurations, directory replication, and automated lifecycle provisioning pipelines.',
      icon: Settings2
    },
    {
      role: 'People Managers',
      scope: 'ACCESS VALIDATION & ROLE TRANSFERS',
      responsibilities:
        'Validates initial access requests for direct reports, reviews recurring access certification campaigns, and initiates role change notifications upon job transfers.',
      icon: UserCheck
    },
    {
      role: 'Application Owners',
      scope: 'ENTITLEMENT DEFINITION & REVIEWS',
      responsibilities:
        'Defines application-specific permission tiers, approves non-standard access requests, and periodically reviews who holds rights to sensitive modules.',
      icon: FolderGit2
    },
    {
      role: 'Security Team',
      scope: 'POLICY DEFINITION & THREAT MONITORING',
      responsibilities:
        'Establishes enterprise authentication standards, sets passwordless/MFA requirements, defines PAM policies, and monitors audit logs for anomalous sign-ins.',
      icon: Shield
    },
    {
      role: 'IT Administrators',
      scope: 'TECHNICAL PRIVILEGE EXECUTION',
      responsibilities:
        'Executes approved technical system changes through vaulted PAM accounts, adheres to JIT check-out workflows, and maintains domain infrastructure.',
      icon: Cpu
    },
    {
      role: 'Audit & Compliance',
      scope: 'EVIDENCE ATTESTATION & GOVERNANCE',
      responsibilities:
        'Reviews recertification logs, samples user access records for regulatory audits, and verifies evidence of prompt leaver deactivation.',
      icon: FileCheck2
    }
  ];

  // Section 11: Practical Outcomes (7 Outcomes)
  const practicalOutcomes = [
    {
      title: 'More Consistent Identity Lifecycle Processes',
      description:
        'Automated Joiner, Mover, and Leaver workflows eliminate manual email chains and ensure accounts are created and closed promptly.',
      icon: UserPlus
    },
    {
      title: 'Better Visibility Into Access Permissions',
      description:
        'Centralized entitlement reporting replaces guesswork with definitive records of exactly who holds access to which enterprise systems.',
      icon: Eye
    },
    {
      title: 'Reduced Accumulation of Unnecessary Privileges',
      description:
        'Periodic manager recertification and automated mover cleanup reverse privilege creep, keeping accounts aligned with actual job duties.',
      icon: Sliders
    },
    {
      title: 'Simplified Sign-In Experiences Across Applications',
      description:
        'Enterprise Single Sign-On provides employees and contractors with a single, secure login experience, boosting daily productivity.',
      icon: CheckCircle2
    },
    {
      title: 'Structured Access Reviews & Audit Records',
      description:
        'Defensible, timestamped certification records simplify regulatory audits for ISO/IEC 27001, SOC 2, HIPAA, and data protection mandates.',
      icon: FileCheck
    },
    {
      title: 'Improved Control Over Privileged & External Access',
      description:
        'Credential vaulting and JIT elevation safeguard critical root passwords while guest access rules keep vendor logins strictly contained.',
      icon: Lock
    },
    {
      title: 'Clear Documentation of Governance Decisions',
      description:
        'Every access request, manager approval, and entitlement modification is logged, ensuring complete organizational accountability.',
      icon: ClipboardList
    }
  ];

  // Section 12: IAM Deliverables (9 Deliverables)
  const iamDeliverables = [
    {
      title: 'Identity & Access Assessment',
      desc: 'Comprehensive diagnostic of existing identity directories, provisioning workflows, and access control gaps.'
    },
    {
      title: 'Identity Lifecycle Process Recommendations',
      desc: 'Documented workflows for automated joiner, mover, and leaver handling synchronized with HR systems.'
    },
    {
      title: 'Role & Entitlement Design Blueprint',
      desc: 'Structured Role-Based Access Control matrix aligning user permissions with department responsibilities.'
    },
    {
      title: 'SSO & MFA Planning Specification',
      desc: 'Architecture blueprint for centralizing authentication, SAML/OIDC federation, and adaptive MFA rules.'
    },
    {
      title: 'Identity Federation & Integration Guide',
      desc: 'Technical integration specifications connecting cloud SaaS, ERP suites, and on-premises LDAP systems.'
    },
    {
      title: 'Privileged Access Improvement Roadmap',
      desc: 'Phased strategy for credential vaulting, JIT temporary elevation, and administrative session oversight.'
    },
    {
      title: 'Access Review & Governance Procedures',
      desc: 'Standard operating procedures for quarterly manager recertification campaigns and audit evidence capture.'
    },
    {
      title: 'IAM Architecture Documentation',
      desc: 'Comprehensive reference diagrams and policy specifications covering directory synchronization and tokens.'
    },
    {
      title: 'Implementation & Validation Plan',
      desc: 'Milestone roadmap detailing deployment phases, test cases, rollback safeguards, and operational handoff.'
    }
  ];

  // Section 13: Frequently Asked Questions (7 Questions)
  const faqs = [
    {
      q: 'What is Identity & Access Management (IAM)?',
      a: 'Identity and Access Management (IAM) is a foundational cybersecurity and operational framework comprising policies, business processes, and technologies used to create, manage, authenticate, and govern digital identities. It ensures that the right individuals and automated workloads can access the right enterprise resources at the right time for valid business reasons.'
    },
    {
      q: 'What is the difference between authentication and authorization?',
      a: 'Authentication verifies the identity of the person or machine attempting to log in—answering "Who are you?" through passwords, biometric scans, or MFA tokens. Authorization occurs after authentication and determines what resources, data, and operations that verified identity is allowed to access—answering "What are you permitted to do?" based on assigned roles and access policies.'
    },
    {
      q: 'What is the difference between Single Sign-On (SSO) and Multi-Factor Authentication (MFA)?',
      a: 'Single Sign-On (SSO) is an access mechanism that allows users to authenticate once with a central Identity Provider and seamlessly access multiple authorized enterprise applications without re-entering credentials. Multi-Factor Authentication (MFA) is a security safeguard requiring users to present two or more distinct pieces of evidence (such as a password plus a hardware token or push notification) to verify their identity.'
    },
    {
      q: 'What is Role-Based Access Control (RBAC)?',
      a: 'Role-Based Access Control (RBAC) is an authorization approach that assigns permissions to specific business roles rather than individual user accounts. Users are granted roles (such as "Financial Analyst" or "Network Engineer") aligned with their formal job responsibilities, simplifying entitlement administration and ensuring consistent least-privilege access across the organization.'
    },
    {
      q: 'What is Privileged Access Management (PAM)?',
      a: 'Privileged Access Management (PAM) encompasses specialized cybersecurity controls designed to protect, manage, and monitor accounts that possess elevated administrative rights (such as server root, domain administrator, or cloud account owner). PAM incorporates credential vaulting, session recording, and Just-In-Time (JIT) ephemeral elevation to minimize the blast radius of potential compromises.'
    },
    {
      q: 'How does IAM support Zero Trust architecture?',
      a: 'Zero Trust operates on the principle of "never trust, always verify." IAM is the cornerstone of Zero Trust because it enforces explicit identity verification, evaluates contextual signals (such as device security and network origin) before every access decision, enforces least-privilege permissions, and continuously inspects session tokens rather than assuming internal networks are inherently safe.'
    },
    {
      q: 'Does implementing IAM automatically make an organization completely secure?',
      a: 'No. While IAM is a critical pillar of enterprise cybersecurity, it must be supported by complementary controls including endpoint detection, network segmentation, vulnerability management, employee security awareness, and continuous security monitoring. Robust IAM drastically reduces unauthorized access and credential compromise, but remains part of a broader defense-in-depth strategy.'
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
            src="/images/cloud/iam_hero_wide.jpg"
            alt="Zero-Trust Identity and Access Management Architecture"
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
                Identity &amp; Access Management
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.12] drop-shadow-lg">
                Identity &amp; Access Management
              </h1>
              <p className="text-lg sm:text-xl font-bold text-cyan-300 tracking-tight drop-shadow-md">
                The Right Identity. The Right Access. At the Right Time.
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl drop-shadow">
              Knooviq helps organizations structure how digital identities are created, authenticated, authorized, governed, and maintained throughout their lifecycle. Our IAM approach helps align access privileges with job responsibilities, strengthen authentication practices, simplify access experiences, and improve visibility into who can access enterprise systems and sensitive resources.
            </p>




          </div>
        </div>
      </section>

      {/* IAM Signals Ribbon directly below hero */}
      <div className="bg-[#050B17] border-b border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <div className="p-3.5 rounded-xl bg-slate-900/70 border border-white/10 backdrop-blur-md">
              <span className="font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 text-xs">
                <KeyRound className="w-3.5 h-3.5" />
                <span>Authentication</span>
              </span>
              <div className="text-sm font-bold text-white mt-1">SSO &amp; Adaptive MFA</div>
              <div className="text-xs text-slate-400 mt-0.5">Passwordless &amp; FIDO2</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/70 border border-white/10 backdrop-blur-md">
              <span className="font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 text-xs">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Authorization</span>
              </span>
              <div className="text-sm font-bold text-white mt-1">RBAC &amp; ABAC Policies</div>
              <div className="text-xs text-slate-400 mt-0.5">Least-Privilege Enforcement</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/70 border border-white/10 backdrop-blur-md">
              <span className="font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 text-xs">
                <Users className="w-3.5 h-3.5" />
                <span>Governance</span>
              </span>
              <div className="text-sm font-bold text-white mt-1">Access Certifications</div>
              <div className="text-xs text-slate-400 mt-0.5">Automated Reviews</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/70 border border-white/10 backdrop-blur-md">
              <span className="font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 text-xs">
                <Lock className="w-3.5 h-3.5" />
                <span>Privileged Access</span>
              </span>
              <div className="text-sm font-bold text-white mt-1">PAM &amp; JIT Elevation</div>
              <div className="text-xs text-slate-400 mt-0.5">Session Recording</div>
            </div>
          </div>
        </div>
      </div>



      {/* =========================================================================
          SECTION 2: IAM OVERVIEW (Identity Governance)
          ========================================================================= */}
      <section className="py-20 bg-white dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <span>IDENTITY GOVERNANCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Access Should Follow Identity, Responsibility, and Context.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Enterprise users, contractors, partners, administrators, and service accounts interact with a growing range of applications and technology platforms. Identity and Access Management provides the processes and controls used to establish identities, verify users or workloads, determine access permissions, and maintain appropriate access throughout the relationship.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Diagram / Visual Area */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-900 aspect-[16/10] group">
                <img
                  src="/images/cloud/iam_overview.jpg?v=8"
                  alt="Enterprise Identity Architecture showing relationship between identities, directory providers, authentication, and applications"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Architectural Elements List */}
            <div className="lg:col-span-6 space-y-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 space-y-1">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                  <Users className="w-4 h-4 text-[#00A3E0]" />
                  <span>Workforce &amp; External Identities</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Employees, contingent contractors, business partners, guest accounts, and automated service principals requiring structured access credentials.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 space-y-1">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                  <Database className="w-4 h-4 text-[#00A3E0]" />
                  <span>Identity Directories &amp; Providers (IdPs)</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Authoritative directory sources, LDAP fabrics, and modern cloud Identity Providers managing single sources of truth.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 space-y-1">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                  <Fingerprint className="w-4 h-4 text-[#00A3E0]" />
                  <span>Authentication Mechanisms</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Enterprise Single Sign-On (SSO), adaptive Multi-Factor Authentication (MFA), FIDO2 WebAuthn keys, and SAML/OIDC federated token exchanges.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 space-y-1">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                  <Lock className="w-4 h-4 text-[#00A3E0]" />
                  <span>Authorization Policies &amp; Access Roles</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Role-Based Access Control (RBAC) and contextual Attribute-Based Access Control (ABAC) ensuring least-privilege permission grants.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 space-y-1">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                  <Server className="w-4 h-4 text-[#00A3E0]" />
                  <span>Enterprise Applications &amp; Cloud Workloads</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Downstream target systems including SAP ERP, core databases, custom APIs, hyperscaler consoles, and collaboration software.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 space-y-1">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                  <FileCheck2 className="w-4 h-4 text-[#00A3E0]" />
                  <span>Identity Governance &amp; Access Reviews</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Periodic manager recertification campaigns, audit logging, and automated revocation reversing permission drift over time.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: COMMON IDENTITY & ACCESS CHALLENGES (5 Cards)
          ========================================================================= */}
      <section className="py-20 bg-slate-50 dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <span>IDENTITY CHALLENGES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Managing Access Across a Connected Enterprise.
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              As technology estates expand, identity administration becomes complex. We help organizations solve five structural access hurdles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {iamChallenges.map((challenge, idx) => {
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
          SECTION 4: CORE IAM CAPABILITIES (6 Detailed Alternating Sections)
          ========================================================================= */}
      <section id="capabilities" className="py-20 bg-white dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <span>IAM CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Build a Structured Identity and Access Foundation.
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Knooviq helps organizations establish identity and access practices that connect authentication, authorization, lifecycle management, governance, and privileged access controls.
            </p>
          </div>

          <div className="space-y-20">
            {iamCapabilities.map((cap, idx) => {
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
                        onClick={() => handleOpenContact(`IAM Capability: ${cap.title}`)}
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
          SECTION 5: HOW IAM WORKS (Identity-to-Resource Flow)
          ========================================================================= */}
      <section className="py-20 bg-slate-50 dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <span>IDENTITY-TO-RESOURCE FLOW</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              From Identity Verification to Authorized Access.
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              A structured technical progression from initial identity establishment to continuous access evaluation across corporate systems.
            </p>
          </div>

          {/* Central Architecture Flow Visual Banner (Full Panoramic Widescreen) */}
          <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl bg-[#030712] group">
            <div 
              className="relative w-full aspect-[16/9] sm:aspect-[21/9] lg:aspect-[16/8] max-h-[580px] overflow-hidden cursor-pointer" 
              onClick={() => setIsImageModalOpen(true)}
              title="Click to view full screen"
            >
              <img
                src="/images/cloud/iam_flow_diagram.jpg?v=65"
                alt="Identity and Access Management - Dual human and cryptographic digital identity verification flow"
                className="w-full h-full object-cover object-center group-hover:scale-[1.015] transition-transform duration-700 select-none"
                loading="eager"
              />

              {/* Cinematic subtle edge gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#030712]/30 via-transparent to-[#030712]/30 pointer-events-none" />

              {/* Top-Right View Full Screen Button */}
              <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsImageModalOpen(true);
                  }}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/85 hover:bg-[#00A3E0] text-white text-xs font-semibold backdrop-blur-md border border-white/20 shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                  title="Open full screen"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Full Screen</span>
                </button>
              </div>

              {/* Bottom Subtle Badge Indicating Dual Human & AI Verification */}
              <div className="absolute bottom-4 left-4 sm:left-6 z-20 pointer-events-none">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#030712]/80 backdrop-blur-md border border-cyan-400/30 text-cyan-300 text-[11px] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span>Dual Human &amp; Cryptographic Zero-Trust Verification</span>
                </div>
              </div>
            </div>
          </div>

          {/* 5 Sequential Stage Cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {flowSteps.map((step, idx) => {
              const isActive = activeFlowStep === idx;
              return (
                <div
                  key={step.num}
                  onClick={() => setActiveFlowStep(idx)}
                  className={`p-5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between space-y-3 ${isActive
                      ? 'bg-white dark:bg-slate-900 border-[#00A3E0] shadow-md ring-1 ring-[#00A3E0]'
                      : 'bg-white/60 dark:bg-slate-900/40 border-slate-200 dark:border-white/10 hover:border-slate-300'
                    }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#00A3E0] dark:text-cyan-400">
                        STAGE {step.num}
                      </span>
                      {isActive && <span className="w-2 h-2 rounded-full bg-[#00A3E0]" />}
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                      {step.tagline}
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                      {step.description}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-100 dark:border-white/5 text-[10px] text-slate-500 dark:text-slate-400 italic">
                    {step.detail}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: ZERO TRUST & LEAST-PRIVILEGE ACCESS
          ========================================================================= */}
      <section className="py-20 bg-white dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
                <span>ACCESS CONTROL PRINCIPLES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                Verify Explicitly. Grant Only What Is Needed.
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Zero Trust is an architectural and operational philosophy, not a standalone software product. Within an enterprise IAM program, Zero Trust mandates that no identity—whether human employee, external partner, or backend automated workload—is implicitly trusted, even when originating from inside a corporate network perimeter.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10">
                  <ShieldCheck className="w-5 h-5 text-[#00A3E0] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">Explicit Authentication &amp; Authorization</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300">Every single access request is verified against current user credentials, device health status, and active directory attributes before permission is issued.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10">
                  <Sliders className="w-5 h-5 text-[#00A3E0] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">Least-Privilege Entitlements</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300">Accounts receive only the minimum permissions necessary to complete immediate tasks, preventing attackers from pivoting laterally across unaffected systems.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10">
                  <Activity className="w-5 h-5 text-[#00A3E0] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">Continuous Session Inspection</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300">Authorization is continually evaluated throughout active sessions; sudden changes in IP, geolocation, or device compliance trigger re-authentication or token revocation.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-900 aspect-[16/10] group">
                <img
                  src="/images/cloud/iam_zero_trust.jpg?v=8"
                  alt="Zero Trust identity verification and least-privilege access enforcement illustration"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: IAM FOR DIFFERENT ENTERPRISE ENVIRONMENTS
          ========================================================================= */}
      <section className="py-20 bg-slate-50 dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <span>HETEROGENEOUS ECOSYSTEMS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              One Identity Strategy Across Multiple Platforms.
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Modern enterprises operate across hybrid environments, third-party portals, and automated workloads. Knooviq harmonizes identity governance across all tiers without creating operational friction.
            </p>
          </div>

          {/* Wide Architecture Graphic */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-900 aspect-[16/7] sm:aspect-[16/6] group">
            <img
              src="/images/cloud/iam_environments.jpg?v=8"
              alt="Multi-platform IAM architecture covering SaaS, cloud providers, hybrid directories, and partner systems"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>

          {/* 6 Environment Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {iamEnvironments.map((env) => (
              <div
                key={env.title}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 shadow-sm space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-wider text-[#00A3E0] dark:text-cyan-400 uppercase bg-cyan-500/10 px-2.5 py-1 rounded-md">
                    {env.tag}
                  </span>
                  <Globe className="w-4 h-4 text-slate-400" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {env.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {env.description}
                </p>
                <div className="pt-2 border-t border-slate-100 dark:border-white/5 text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                  <span className="text-slate-900 dark:text-white">Focus: </span>
                  {env.focus}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 8: IAM IMPLEMENTATION & MATURITY ROADMAP (6 Phases)
          ========================================================================= */}
      <section className="py-20 bg-white dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <span>IMPLEMENTATION APPROACH</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Establish the Foundation. Improve Access Governance Over Time.
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              A disciplined, phased methodology that balances immediate credential security with long-term identity lifecycle maturity.
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
          SECTION 9: IAM GOVERNANCE & OPERATIONAL RESPONSIBILITIES (6 Roles)
          ========================================================================= */}
      <section className="py-20 bg-slate-50 dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <span>OPERATING MODEL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Clear Ownership for Every Identity and Permission.
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              A successful IAM program requires collaborative governance. Different organizational stakeholders hold distinct, complementary duties in maintaining access integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {operationalRoles.map((roleItem) => {
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
                    <span>Defined Operating Responsibility</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 10: PRACTICAL IAM OUTCOMES (7 Outcomes)
          ========================================================================= */}
      <section className="py-20 bg-white dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <span>BUSINESS &amp; SECURITY VALUE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Better Access Control. Clearer Accountability.
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Pragmatic operational outcomes achieved through disciplined identity lifecycle governance and unified authentication.
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
          SECTION 11: IAM DELIVERABLES & ENGAGEMENT APPROACH (9 Deliverables)
          ========================================================================= */}
      <section className="py-20 bg-slate-50 dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <span>ENGAGEMENT ARTIFACTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Turn Identity Requirements into an Actionable Plan.
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Every IAM consulting engagement produces audit-ready deliverables structured to guide engineering implementation and satisfy regulatory oversight.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {iamDeliverables.map((deliv, idx) => (
              <div
                key={deliv.title}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 shadow-sm space-y-2.5 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="font-bold text-[#00A3E0] dark:text-cyan-400">DELIVERABLE 0{idx + 1}</span>
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
              Frequently Asked Questions on Enterprise IAM.
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Clear answers regarding identity lifecycle management, authentication, role design, and Zero Trust.
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
                SECURITY &amp; RESILIENCE &bull; IDENTITY &amp; ACCESS
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
                Make Every Digital Identity Count.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Build a more consistent approach to identity lifecycle management, authentication, authorization, and access governance with Knooviq.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-4 shrink-0 w-full lg:w-auto">
              <button
                type="button"
                onClick={() => handleOpenContact('Talk to Our Experts – Identity & Access Management')}
                className="px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-gradient-to-r from-[#00A3E0] to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-lg shadow-cyan-500/30 flex items-center gap-2.5 group cursor-pointer"
              >
                <span>Talk to Our Cloud Experts</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                to="/cloud-operations/data-protection"
                className="px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 hover:text-white border border-white/20 font-bold text-xs sm:text-sm tracking-wide transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>Explore Data Protection</span>
                <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Full Screen Image Lightbox Modal */}
      {isImageModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setIsImageModalOpen(false)}
        >
          {/* Top Control Bar */}
          <div className="absolute top-4 inset-x-4 sm:inset-x-6 flex items-center justify-between z-50 pointer-events-none">
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-white/20 text-white text-xs font-semibold backdrop-blur-md pointer-events-auto shadow-xl">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Full Screen HD • Identity-to-Resource Verification Architecture</span>
            </div>

            <button
              type="button"
              onClick={() => setIsImageModalOpen(false)}
              className="p-3 rounded-full bg-slate-900/90 hover:bg-rose-600 text-white border border-white/20 transition-all hover:scale-110 pointer-events-auto cursor-pointer shadow-xl"
              title="Close Full Screen (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Full Screen Image Container */}
          <div
            className="relative max-w-6xl w-full max-h-[88vh] flex items-center justify-center p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src="/images/cloud/iam_flow_diagram.jpg?v=65"
              alt="Identity and Access Management - Dual human and cryptographic digital identity verification flow (Full Screen)"
              className="w-full h-auto max-h-[86vh] object-contain rounded-2xl shadow-2xl border border-white/10 select-none"
            />
          </div>

          <div className="absolute bottom-4 text-center text-xs text-slate-400 pointer-events-none">
            Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white border border-white/20">Esc</kbd> or click anywhere to exit full screen
          </div>
        </div>
      )}

    </div>
  );
};

export default IdentityAccessManagementPage;
