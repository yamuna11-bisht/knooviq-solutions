import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  ShieldCheck,
  ShieldAlert,
  Lock,
  KeyRound,
  Eye,
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  Layers,
  Server,
  Network,
  Users,
  FileText,
  Search,
  Radio,
  Workflow,
  Sparkles,
  RefreshCw,
  Sliders,
  FileCheck,
  Database,
  Cpu,
  Boxes,
  HelpCircle,
  FileCode,
  Tag,
  Flame,
  Activity,
  Compass,
  Zap,
  Globe,
  Terminal,
  RotateCcw,
  CheckSquare,
  Maximize2,
  X
} from 'lucide-react';

interface ChildPageProps {
  onOpenContact?: (topic?: string) => void;
}

export const CybersecurityPage: React.FC<ChildPageProps> = ({ onOpenContact }) => {
  const [activeLifecycleStage, setActiveLifecycleStage] = useState<number>(0);
  const [selectedLayer, setSelectedLayer] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    document.title = 'Cybersecurity – Protect Your Enterprise, Anticipate Threats | KNOOVIQ';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleOpenContact = (topic?: string) => {
    if (onOpenContact) {
      onOpenContact(topic || 'Cybersecurity');
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Section 4: Cybersecurity Risks & Challenges Data (5 Challenges)
  const securityChallenges = [
    {
      id: 'evolving-threats',
      title: 'Evolving Threats',
      tagline: 'Phishing, malicious software, credential compromise & exploits.',
      description:
        'Organizations face continuously evolving attack techniques—from targeted phishing and credential compromise to ransomware and zero-day software exploits designed to bypass perimeter controls.',
      icon: ShieldAlert,
      accent: 'text-rose-500 bg-rose-500/10 border-rose-500/20'
    },
    {
      id: 'expanding-surface',
      title: 'Expanding Attack Surface',
      tagline: 'Cloud platforms, remote access, endpoints & third-party integrations.',
      description:
        'Decentralized work, multi-cloud architectures, external APIs, and SaaS dependencies expand the enterprise perimeter, introducing blind spots where unmanaged assets can be targeted.',
      icon: Network,
      accent: 'text-amber-500 bg-amber-500/10 border-amber-500/20'
    },
    {
      id: 'vulnerability-exposure',
      title: 'Vulnerability Exposure',
      tagline: 'Unpatched software, configuration drift & outdated components.',
      description:
        'Rapid software release cycles and fragmented IT estates lead to unpatched CVEs, configuration drift, and neglected legacy assets that offer adversaries straightforward paths of entry.',
      icon: AlertTriangle,
      accent: 'text-purple-500 bg-purple-500/10 border-purple-500/20'
    },
    {
      id: 'limited-visibility',
      title: 'Limited Security Visibility',
      tagline: 'Fragmented logs, disconnected tools & incomplete asset telemetry.',
      description:
        'Siloed security solutions generate disconnected notification streams without central correlation, making it difficult for security teams to detect sophisticated, multi-stage intrusions in time.',
      icon: Eye,
      accent: 'text-blue-500 bg-blue-500/10 border-blue-500/20'
    },
    {
      id: 'governance-complexity',
      title: 'Governance & Compliance Complexity',
      tagline: 'Documented responsibilities, risk treatments & regulatory obligations.',
      description:
        'Meeting regulatory mandates while managing day-to-day risk requires formalized policy frameworks, continuous control verification, and auditable proof of due diligence.',
      icon: FileCheck,
      accent: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/20'
    }
  ];

  // Section 5: Core Capabilities Data (6 Detailed Sections with Unique Visuals)
  const capabilities = [
    {
      id: 'security-assessment',
      badge: 'CAPABILITY A • POSTURE & EXPOSURE DIAGNOSTICS',
      title: 'Security Assessment & Risk Management',
      tagline: 'Evaluate security posture, identify exposure, prioritize risks, and build actionable roadmaps.',
      description:
        'Knooviq helps organizations systematically evaluate their security controls against practical operational risks. We identify critical assets, analyze threat exposure across architecture tiers, evaluate existing preventive safeguards, and translate assessment findings into a prioritized, business-aligned security remediation roadmap.',
      image: '/images/cloud/cyber_assessment.jpg?v=8',
      points: [
        'Security posture assessments evaluating technical controls across on-premise, cloud, and hybrid tiers',
        'Asset discovery and business-criticality classification to focus protection on core revenue drivers',
        'Threat modeling and exposure analysis identifying potential attack paths and security weaknesses',
        'Actionable risk treatment plans providing engineering teams with clear remediation priorities'
      ]
    },
    {
      id: 'vulnerability-management',
      badge: 'CAPABILITY B • THREAT & VULNERABILITY MANAGEMENT',
      title: 'Threat & Vulnerability Management',
      tagline: 'Identify vulnerabilities, contextualize threats, prioritize by exploitability, and track remediation.',
      description:
        'Managing vulnerabilities requires moving beyond uncurated vulnerability scanner output. We help teams evaluate vulnerability severity by factoring in asset criticality, network exposure, active exploitability, and compensating controls, ensuring technical teams address genuinely dangerous weaknesses first.',
      image: '/images/cloud/cyber_vulnerability.jpg?v=8',
      points: [
        'Continuous vulnerability identification and validation across applications, OS fleets, and container hosts',
        'Risk-based prioritization factoring in real-world exploit availability and asset exposure',
        'Coordination of patch cycles and configuration hardening to minimize operational disruption',
        'Periodic reassessments and tracking to verify that verified remediations remain effective'
      ]
    },
    {
      id: 'security-architecture',
      badge: 'CAPABILITY C • DEFENSE IN DEPTH & ZERO TRUST',
      title: 'Security Architecture & Defense in Depth',
      tagline: 'Architect layered preventive, detective, and corrective controls across enterprise technology.',
      description:
        'A single security control should never be the sole barrier between an attacker and critical business data. We help organizations design layered security architectures founded on Zero Trust principles, incorporating strict network segmentation, secure API gateways, mutual TLS, and least-privilege access boundaries.',
      image: '/images/cloud/cyber_architecture.jpg?v=8',
      points: [
        'Enterprise security architecture reviews ensuring controls operate coherently across all tiers',
        'Network micro-segmentation and software-defined perimeter boundaries to prevent lateral movement',
        'Application security and API gateway controls protecting data exchanges and public endpoints',
        'Cloud security architecture reviews establishing secure landing zones and IAM boundaries'
      ]
    },
    {
      id: 'threat-detection-monitoring',
      badge: 'CAPABILITY D • TELEMETRY & SIEM CORRELATION',
      title: 'Security Monitoring & Threat Detection',
      tagline: 'Collect relevant security telemetry, correlate events, identify suspicious activity, and triage alerts.',
      description:
        'Early detection prevents localized anomalies from escalating into enterprise-wide crises. We assist teams in defining meaningful security detection use cases, aggregating audit logs from identity providers, endpoints, and cloud infrastructures into SIEM platforms, and designing structured alert triage workflows.',
      image: '/images/cloud/cyber_monitoring.jpg?v=8',
      points: [
        'Security event collection and normalization across cloud audit trails, firewalls, and endpoints',
        'High-fidelity detection rules tailored to identify unauthorized privilege escalations and data exfiltration',
        'Structured alert triage processes reducing alert fatigue and focusing analyst attention on verified anomalies',
        'Security operations runbooks defining explicit escalation pathways between analysts and technical leads'
      ]
    },
    {
      id: 'incident-response',
      badge: 'CAPABILITY E • CONTAINMENT & INVESTIGATION',
      title: 'Security Incident Response',
      tagline: 'Prepare incident response plans, classify security threats, contain compromises, and coordinate recovery.',
      description:
        'Cybersecurity incident response requires distinct procedures from routine IT troubleshooting. We help organizations establish dedicated security response frameworks that define incident classification, rapid threat containment protocols, digital evidence preservation, and coordinated communication with executive leadership.',
      image: '/images/cloud/cyber_incident_response.jpg?v=8',
      points: [
        'Incident response planning defining severity thresholds, containment procedures, and commander ownership',
        'Threat containment runbooks providing pre-approved steps to isolate compromised hosts and revoke credentials',
        'Forensic evidence preservation practices ensuring diagnostic logs remain untampered for root-cause analysis',
        'Post-incident retrospectives converting lessons from active incidents into permanent defensive enhancements'
      ]
    },
    {
      id: 'governance-compliance',
      badge: 'CAPABILITY F • POLICIES, CONTROLS & COMPLIANCE',
      title: 'Security Governance, Policies & Compliance',
      tagline: 'Establish security policies, define accountability, maintain risk registers, and align with frameworks.',
      description:
        'Sustainable cybersecurity requires strong governance and clear organizational ownership. We assist clients in drafting practical security policies, maintaining institutional risk registers, preparing audit evidence, and aligning security controls with recognized industry standards such as ISO/IEC 27001, NIST CSF, and CIS Controls.',
      image: '/images/cloud/cyber_governance.jpg?v=8',
      points: [
        'Development of practical, readable security policies tailored to enterprise operating models',
        'Security risk registers mapping technical findings, assigned risk owners, and agreed treatment plans',
        'Audit readiness and evidence collection frameworks supporting regulatory and customer security reviews',
        'Alignment with recognized standards including ISO/IEC 27001, NIST Cybersecurity Framework, and CIS Controls'
      ]
    }
  ];

  // Section 6: Defense-in-Depth Architecture Layers
  const architectureLayers = [
    {
      layer: 'Layer 1',
      title: 'Identity & Access',
      tag: 'AUTHENTICATION & PRIVILEGE',
      icon: KeyRound,
      description:
        'Strong multi-factor authentication (MFA), least-privilege authorization policies, single sign-on federation, and privileged access management (PAM) controls.',
      safeguards: ['Adaptive MFA & Hardware FIDO2 keys', 'Role-Based Access Control (RBAC)', 'Just-in-Time privileged access elevation', 'Continuous identity lifecycle governance']
    },
    {
      layer: 'Layer 2',
      title: 'Endpoint & Workload',
      tag: 'SYSTEM HARDENING & EDR',
      icon: Cpu,
      description:
        'Endpoint detection and response (EDR), standardized secure operating system baselines, vulnerability patching, and container workload security.',
      safeguards: ['Behavioral endpoint detection and response', 'Hardened OS configuration baselines (CIS)', 'Vulnerability patching schedules', 'Immutable container image scanning']
    },
    {
      layer: 'Layer 3',
      title: 'Network & Connectivity',
      tag: 'SEGMENTATION & PERIMETER',
      icon: Network,
      description:
        'Network micro-segmentation, zero-trust network access (ZTNA), next-generation firewalls, encrypted transport, and strict ingress/egress filtering.',
      safeguards: ['Micro-segmentation between application tiers', 'Mutual TLS (mTLS) for inter-service communication', 'Egress traffic inspection and domain filtering', 'Software-defined perimeter access']
    },
    {
      layer: 'Layer 4',
      title: 'Application & Cloud',
      tag: 'SECURE CODING & CSPM',
      icon: Server,
      description:
        'Secure software development lifecycles, API security gateways, cloud security posture management (CSPM), and input validation controls.',
      safeguards: ['API gateway authentication & rate limiting', 'Cloud configuration drift and misconfiguration scanning', 'Static and dynamic application security reviews', 'Dependency vulnerability scanning']
    },
    {
      layer: 'Layer 5',
      title: 'Data Protection',
      tag: 'ENCRYPTION & LOSS PREVENTION',
      icon: Lock,
      description:
        'Data classification, cryptographic encryption at rest and in transit, key management, database access monitoring, and data loss prevention.',
      safeguards: ['Customer-managed KMS envelope encryption', 'Column-level tokenization for sensitive records', 'Data loss prevention (DLP) content inspection', 'Automated data classification tags']
    },
    {
      layer: 'Layer 6',
      title: 'Detection & Response',
      tag: 'TELEMETRY & SOC READINESS',
      icon: Eye,
      description:
        'Centralized security logging, SIEM correlation rules, automated alert triage, threat intelligence contextualization, and security incident response runbooks.',
      safeguards: ['Centralized security audit log aggregation', 'Automated containment workflows for verified threats', 'Security incident response coordination', 'Periodic threat-hunting exercises']
    }
  ];

  // Section 7: Continuous Security Improvement Lifecycle (5 Stages)
  const improvementStages = [
    {
      step: '01',
      title: 'Discover',
      tagline: 'Asset & Baseline Discovery',
      description:
        'Identify critical assets, technology environments, third-party connections, existing controls, and regulatory requirements.',
      icon: Search,
      focus: 'Cataloging enterprise digital assets, public IP blocks, cloud accounts, and data classifications to establish true operational scope.'
    },
    {
      step: '02',
      title: 'Assess',
      tagline: 'Vulnerability & Exposure Analysis',
      description:
        'Evaluate technical exposure, software vulnerabilities, configuration weaknesses, active threat vectors, and control gaps.',
      icon: Sliders,
      focus: 'Conducting comprehensive configuration audits, reviewing network perimeters, and testing control effectiveness across environments.'
    },
    {
      step: '03',
      title: 'Prioritize',
      tagline: 'Risk-Based Ranking',
      description:
        'Rank security findings according to true business risk, asset criticality, exploitability, and potential operational impact.',
      icon: ShieldAlert,
      focus: 'Filtering out non-exploitable noise and aligning technical vulnerabilities with business services to guide engineering resources.'
    },
    {
      step: '04',
      title: 'Remediate',
      tagline: 'Coordinated Protection',
      description:
        'Coordinate technical and procedural improvements, assign explicit engineering responsibilities, and track remediation progress.',
      icon: CheckSquare,
      focus: 'Deploying configuration patches, hardening firewall rules, tightening IAM policies, and implementing compensating controls.'
    },
    {
      step: '05',
      title: 'Validate & Improve',
      tagline: 'Reassessment & Roadmap Refinement',
      description:
        'Reassess relevant controls, review remediation evidence, update risk registers, and refine the long-term security roadmap.',
      icon: RefreshCw,
      focus: 'Verifying that remediation actions eliminated target vulnerabilities without introducing operational side-effects.'
    }
  ];

  // Section 8: Enterprise Technology Environments
  const enterpriseEnvironments = [
    {
      name: 'Enterprise Applications & APIs',
      icon: FileCode,
      desc: 'Protecting core business ERP systems, customer portals, and internal microservice APIs from unauthorized access and data injection.'
    },
    {
      name: 'Multi-Cloud Environments',
      icon: Globe,
      desc: 'Enforcing consistent security baselines across AWS, Microsoft Azure, Google Cloud, and private hypervisor compute clusters.'
    },
    {
      name: 'On-Premises Infrastructure',
      icon: Server,
      desc: 'Securing legacy servers, data center networks, storage arrays, and physical hardware appliances against physical and network compromise.'
    },
    {
      name: 'Remote Users & Endpoints',
      icon: Users,
      desc: 'Safeguarding distributed workstations, mobile devices, and remote access pathways through endpoint detection and zero-trust policies.'
    },
    {
      name: 'Third-Party Services & Integrations',
      icon: Network,
      desc: 'Managing supply chain risk, external SaaS integrations, vendor VPN connections, and webhook data exchanges.'
    },
    {
      name: 'Databases & Sensitive Information',
      icon: Database,
      desc: 'Shielding transactional databases, customer records, financial ledgers, and analytical data lakes with cryptographic envelope controls.'
    }
  ];

  // Section 10: Engagement Deliverables
  const engagementDeliverables = [
    {
      title: 'Security Posture & Gap Assessment',
      desc: 'Comprehensive evaluation of existing technical controls benchmarked against recognized industry standards.'
    },
    {
      title: 'Prioritized Risk & Remediation Register',
      desc: 'Actionable inventory of validated vulnerabilities, assigned owners, risk ratings, and recommended treatment paths.'
    },
    {
      title: 'Security Architecture Recommendations',
      desc: 'Architectural blueprints detailing network segmentation, zero-trust boundaries, and defense-in-depth safeguards.'
    },
    {
      title: 'Vulnerability Remediation Roadmap',
      desc: 'Phased implementation timeline guiding engineering squads on patch deployments and configuration hardening.'
    },
    {
      title: 'Security Monitoring & Response Playbooks',
      desc: 'Operational runbooks defining detection criteria, alert triage steps, and containment protocols.'
    },
    {
      title: 'Security Policy & Control Documentation',
      desc: 'Documented security policies, standard operating procedures, and acceptable-use guidelines tailored to your team.'
    },
    {
      title: 'Governance & Control Improvement Plan',
      desc: 'Strategic recommendations for continuous compliance oversight, internal auditing, and executive reporting.'
    },
    {
      title: 'Follow-Up Validation & Review Guidance',
      desc: 'Structured criteria to reassess remediated vulnerabilities and verify ongoing control effectiveness.'
    }
  ];

  // Section 11: Practical Outcomes (7 Outcomes)
  const practicalOutcomes = [
    {
      title: 'Better Visibility Into Security Risks & Vulnerabilities',
      description:
        'A consolidated view of exposure replaces scattered tool notifications, giving technical teams clear insight into genuine security weaknesses.',
      icon: Eye
    },
    {
      title: 'More Structured Remediation Prioritization',
      description:
        'Focusing on exploitability and business-asset criticality ensures engineering time is spent addressing high-impact vulnerabilities first.',
      icon: Sliders
    },
    {
      title: 'Clearer Security Ownership & Accountability',
      description:
        'Formal risk registers and defined responsibilities eliminate ambiguity regarding who maintains, patches, and approves security controls.',
      icon: Users
    },
    {
      title: 'Stronger Alignment Between Controls & Business Risks',
      description:
        'Security investments directly support business resilience, ensuring compliance mandates and operational continuity goals are mutually met.',
      icon: ShieldCheck
    },
    {
      title: 'More Coordinated Incident Preparation & Response',
      description:
        'Established containment runbooks and clear communication protocols enable rapid, calm coordination if suspicious activity occurs.',
      icon: ShieldAlert
    },
    {
      title: 'Better Documentation for Governance & Audits',
      description:
        'Audit-ready policy documentation and verifiable remediation records streamline compliance reviews with customers and regulators.',
      icon: FileCheck
    },
    {
      title: 'A Structured Approach to Continuous Improvement',
      description:
        'Iterative discover-assess-remediate cycles steadily mature your defense posture alongside evolving technologies and business needs.',
      icon: RefreshCw
    }
  ];

  // Section 12: Cybersecurity FAQs (6 Questions)
  const faqs = [
    {
      q: 'What does enterprise cybersecurity cover?',
      a: 'Enterprise cybersecurity encompasses the people, processes, governance policies, and technical controls used to protect systems, networks, applications, user identities, and data from security threats. It goes beyond antivirus software to establish defense in depth, proactive vulnerability management, detection workflows, and incident response readiness.'
    },
    {
      q: 'How does a cybersecurity assessment help an organization?',
      a: 'A cybersecurity assessment provides an objective evaluation of your current security posture against recognized industry frameworks. It identifies technical vulnerabilities, configuration weaknesses, and procedural gaps, helping organizations prioritize remediation efforts based on actual business risk rather than generic checklists.'
    },
    {
      q: 'What is the difference between vulnerability management and threat detection?',
      a: 'Vulnerability management is a proactive discipline focused on discovering, evaluating, and remediating weaknesses in software, configurations, and network perimeters before adversaries can exploit them. Threat detection is a reactive and detective discipline focused on monitoring telemetry to identify suspicious or malicious activity currently occurring in an environment.'
    },
    {
      q: 'How does defense in depth improve security?',
      a: 'Defense in depth implements multiple complementary security controls across identity, endpoints, networks, applications, and data. If an adversary manages to bypass one barrier (such as obtaining a user password), secondary safeguards (such as multi-factor authentication, network segmentation, and endpoint behavioral detection) prevent them from accessing critical core assets.'
    },
    {
      q: 'How should an organization prioritize cybersecurity risks?',
      a: 'Prioritization should weigh the criticality of the affected business asset, the real-world exploitability of the vulnerability, the exposure level of the system to external untrusted networks, the potential financial or operational impact of compromise, and the presence of compensating controls.'
    },
    {
      q: 'Does cybersecurity guarantee that an organization cannot be breached?',
      a: 'No security methodology or technology can guarantee complete immunity from cyber threats. A mature cybersecurity strategy aims to reduce attack surface exposure, significantly raise the difficulty and cost for attackers, detect suspicious activity as early as possible, and maintain resilient response procedures that contain potential compromises before they disrupt core operations.'
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
            src="/images/cloud/cyber_hero_wide.jpg"
            alt="Cybersecurity Threat Defense and 24/7 Security Operations Center"
            className="w-full h-full object-cover object-[72%_center] filter brightness-[1.06] contrast-[1.05]"
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
                Cybersecurity
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.12] drop-shadow-lg">
                Cybersecurity
              </h1>
              <p className="text-lg sm:text-xl font-bold text-cyan-300 tracking-tight drop-shadow-md">
                Protect Your Enterprise. Anticipate Threats. Strengthen Trust.
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl drop-shadow">
              Knooviq helps organizations strengthen their cybersecurity posture through security assessments, threat and vulnerability management, security architecture, detection and response planning, and governance practices. We help businesses understand their exposure, prioritize security risks, protect critical technology assets, and build security practices aligned with their operational needs.
            </p>




          </div>
        </div>
      </section>

      {/* Security Signals Ribbon directly below hero */}
      <div className="bg-[#050B17] border-b border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <div className="p-3.5 rounded-xl bg-slate-900/70 border border-white/10 backdrop-blur-md">
              <span className="font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 text-xs">
                <Search className="w-3.5 h-3.5" />
                <span>Assessment</span>
              </span>
              <div className="text-sm font-bold text-white mt-1">Posture &amp; Exposure</div>
              <div className="text-xs text-slate-400 mt-0.5">Control Gap Analysis</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/70 border border-white/10 backdrop-blur-md">
              <span className="font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 text-xs">
                <Layers className="w-3.5 h-3.5" />
                <span>Architecture</span>
              </span>
              <div className="text-sm font-bold text-white mt-1">Defense in Depth</div>
              <div className="text-xs text-slate-400 mt-0.5">Zero Trust Boundaries</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/70 border border-white/10 backdrop-blur-md">
              <span className="font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 text-xs">
                <Eye className="w-3.5 h-3.5" />
                <span>Detection</span>
              </span>
              <div className="text-sm font-bold text-white mt-1">Telemetry &amp; SIEM</div>
              <div className="text-xs text-slate-400 mt-0.5">Real-Time Monitoring</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/70 border border-white/10 backdrop-blur-md">
              <span className="font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 text-xs">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Response</span>
              </span>
              <div className="text-sm font-bold text-white mt-1">Contain &amp; Recover</div>
              <div className="text-xs text-slate-400 mt-0.5">Tested Playbooks</div>
            </div>
          </div>
        </div>
      </div>



      {/* =========================================================================
          SECTION 2: CYBERSECURITY OVERVIEW (Security Strategy)
          ========================================================================= */}
      <section id="overview" className="py-20 bg-white dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>SECURITY STRATEGY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Security That Starts with Understanding Risk.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Modern enterprises depend on connected applications, cloud platforms, endpoints, identities, networks, and data. Protecting these environments requires more than isolated security tools. Organizations need a coordinated approach to understanding exposure, establishing safeguards, detecting suspicious activity, responding to incidents, and continuously improving security practices.
            </p>
          </div>

          {/* Editorial Visual & Interconnected Strategy Grid */}
          <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 shadow-sm space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              <div className="lg:col-span-6 space-y-5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#00A3E0] block">
                  HOLISTIC PROTECTION ECOSYSTEM
                </span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Coordinating Safeguards Across the Technology Landscape
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  Effective defense connects technical controls to business priorities. Rather than treating security as an afterthought or a friction-heavy gate, we integrate visibility and protective boundaries into everyday architectural workflows.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <strong>Business Assets &amp; Critical Apps:</strong> Categorized by operational dependency and data sensitivity
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <strong>Users, Identities &amp; Endpoints:</strong> Verified through multi-factor authentication and endpoint health
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <strong>Networks &amp; Cloud Environments:</strong> Protected through micro-segmentation and Zero-Trust perimeters
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <strong>Controls &amp; Threat Visibility:</strong> Correlated across SIEM platforms to detect anomalies early
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <strong>Incident Response &amp; Governance:</strong> Guided by pre-tested runbooks and auditable policies
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-900 aspect-[16/11] group">
                  <img
                    src="/images/cloud/cyber_overview.jpg?v=2"
                    alt="Enterprise security architecture showing connections between applications, identities, cloud perimeters, and governance"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070E1E]/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#070E1E]/90 backdrop-blur-md border border-white/10 text-xs text-slate-300">
                    <span className="font-bold text-white block">Enterprise Security Architecture Ecosystem</span>
                    <span className="text-slate-400 text-[11px]">Identity boundaries &bull; Cloud controls &bull; Continuous visibility</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: CYBERSECURITY RISKS & CHALLENGES
          ========================================================================= */}
      <section id="challenges" className="py-20 bg-slate-50 dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <AlertTriangle className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>THE SECURITY CHALLENGE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Protecting an Enterprise Requires More Than One Layer of Defense.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Modern cyber threats target multiple entry vectors simultaneously. Organizations must prepare across all operational fronts to prevent isolated vulnerabilities from compromising core business continuity.
            </p>
          </div>

          {/* 5 Challenges in Editorial Horizontal Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {securityChallenges.map((challenge) => {
              const Icon = challenge.icon;
              return (
                <div
                  key={challenge.id}
                  className="p-6 rounded-2xl bg-white dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 hover:border-[#00A3E0]/40 transition-all flex flex-col justify-between space-y-4 group shadow-sm"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${challenge.accent}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-slate-400">Risk Vector</span>
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-[#00A3E0] dark:group-hover:text-cyan-300 transition-colors">
                        {challenge.title}
                      </h3>
                      <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 leading-snug">
                        {challenge.tagline}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {challenge.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-white/5 flex items-center gap-1.5 text-xs font-bold text-[#00A3E0]">
                    <span>Security Domain</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: CORE CYBERSECURITY CAPABILITIES (6 Detailed Blocks)
          ========================================================================= */}
      <section id="capabilities" className="py-20 bg-white dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>SECURITY CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              A Coordinated Approach to Enterprise Protection
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Knooviq helps organizations evaluate their security posture, strengthen technical controls, improve threat visibility, and establish practical security governance across their technology environments.
            </p>
          </div>

          {/* 6 Distinct Capability Blocks */}
          <div className="space-y-12">

            {/* Capability A: Security Assessment & Risk Management (Image on Right) */}
            <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

                <div className="lg:col-span-6 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-200/80 dark:bg-white/5 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider">
                    <Search className="w-3.5 h-3.5 text-[#00A3E0]" />
                    <span>{capabilities[0].badge}</span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      {capabilities[0].title}
                    </h3>
                    <p className="text-sm sm:text-base font-bold text-[#00A3E0] dark:text-cyan-300">
                      {capabilities[0].tagline}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {capabilities[0].description}
                  </p>

                  <div className="space-y-3 pt-2">
                    {capabilities[0].points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium">
                          {pt}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-900 aspect-[16/10] group">
                    <img
                      src={capabilities[0].image}
                      alt="Enterprise security architecture being assessed for exposure with clearly defined protection boundaries"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                </div>

              </div>
            </div>

            {/* Capability B: Threat & Vulnerability Management (Image on Left) */}
            <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

                <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-900 aspect-[16/10] group">
                    <img
                      src={capabilities[1].image}
                      alt="Technical visualization showing vulnerable system components being prioritized and addressed across an enterprise environment"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-200/80 dark:bg-white/5 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider">
                    <Sliders className="w-3.5 h-3.5 text-[#00A3E0]" />
                    <span>{capabilities[1].badge}</span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      {capabilities[1].title}
                    </h3>
                    <p className="text-sm sm:text-base font-bold text-[#00A3E0] dark:text-cyan-300">
                      {capabilities[1].tagline}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {capabilities[1].description}
                  </p>

                  <div className="space-y-3 pt-2">
                    {capabilities[1].points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium">
                          {pt}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Capability C: Security Architecture & Defense in Depth (Image on Right) */}
            <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

                <div className="lg:col-span-6 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-200/80 dark:bg-white/5 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider">
                    <Layers className="w-3.5 h-3.5 text-[#00A3E0]" />
                    <span>{capabilities[2].badge}</span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      {capabilities[2].title}
                    </h3>
                    <p className="text-sm sm:text-base font-bold text-[#00A3E0] dark:text-cyan-300">
                      {capabilities[2].tagline}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {capabilities[2].description}
                  </p>

                  <div className="space-y-3 pt-2">
                    {capabilities[2].points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium">
                          {pt}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-900 aspect-[16/10] group">
                    <img
                      src={capabilities[2].image}
                      alt="Architectural cross-section of enterprise applications, networks, and layered security controls"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                </div>

              </div>
            </div>

            {/* Capability D: Security Monitoring & Threat Detection (Image on Left) */}
            <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

                <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-900 aspect-[16/10] group">
                    <img
                      src={capabilities[3].image}
                      alt="Enterprise security operations environment investigating correlated security signals and telemetry"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-200/80 dark:bg-white/5 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider">
                    <Eye className="w-3.5 h-3.5 text-[#00A3E0]" />
                    <span>{capabilities[3].badge}</span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      {capabilities[3].title}
                    </h3>
                    <p className="text-sm sm:text-base font-bold text-[#00A3E0] dark:text-cyan-300">
                      {capabilities[3].tagline}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {capabilities[3].description}
                  </p>

                  <div className="space-y-3 pt-2">
                    {capabilities[3].points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium">
                          {pt}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Capability E: Security Incident Response (Image on Right) */}
            <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

                <div className="lg:col-span-6 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-200/80 dark:bg-white/5 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider">
                    <ShieldAlert className="w-3.5 h-3.5 text-[#00A3E0]" />
                    <span>{capabilities[4].badge}</span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      {capabilities[4].title}
                    </h3>
                    <p className="text-sm sm:text-base font-bold text-[#00A3E0] dark:text-cyan-300">
                      {capabilities[4].tagline}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {capabilities[4].description}
                  </p>

                  <div className="space-y-3 pt-2">
                    {capabilities[4].points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium">
                          {pt}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-900 aspect-[16/10] group">
                    <img
                      src={capabilities[4].image}
                      alt="Cyber incident response environment showing security specialists, containment planning, and forensic evidence tracking"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                </div>

              </div>
            </div>

            {/* Capability F: Security Governance, Policies & Compliance (Image on Left) */}
            <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

                <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-900 aspect-[16/10] group">
                    <img
                      src={capabilities[5].image}
                      alt="Enterprise governance illustration showing security controls, policies, risk registers, and compliance alignment"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-200/80 dark:bg-white/5 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider">
                    <FileCheck className="w-3.5 h-3.5 text-[#00A3E0]" />
                    <span>{capabilities[5].badge}</span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      {capabilities[5].title}
                    </h3>
                    <p className="text-sm sm:text-base font-bold text-[#00A3E0] dark:text-cyan-300">
                      {capabilities[5].tagline}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {capabilities[5].description}
                  </p>

                  <div className="space-y-3 pt-2">
                    {capabilities[5].points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium">
                          {pt}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: ENTERPRISE SECURITY ARCHITECTURE (DEFENSE IN DEPTH)
          ========================================================================= */}
      <section id="architecture" className="py-20 bg-slate-50 dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>DEFENSE IN DEPTH</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Connect Security Controls Across Your Enterprise.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Effective cybersecurity requires controls that work together across identity, endpoints, applications, networks, cloud platforms, data, and security operations. A defense-in-depth approach combines complementary safeguards so that a weakness in one control does not automatically expose the entire environment.
            </p>
          </div>

          {/* Wide Architecture Graphic + Layered Controls Composition */}
          <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-white dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 shadow-sm space-y-10">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#00A3E0] block">
                  LAYERED PROTECTION ARCHITECTURE
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                  Six Complementary Safeguards Spanning the Enterprise
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  Overarching security governance and risk management span all six layers, ensuring that identity policies, endpoint controls, network firewalls, and application code adhere to consistent institutional baselines.
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-900">
                  <img
                    src="/images/cloud/cyber_six_safeguards.jpg?v=12"
                    alt="Six Complementary Safeguards Spanning the Enterprise - Layered protection architecture across people, process, technology and data"
                    className="w-full h-auto block"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* 6 Layer Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 border-t border-slate-100 dark:border-white/5">
              {architectureLayers.map((layer, idx) => {
                const Icon = layer.icon;
                return (
                  <div
                    key={layer.layer}
                    onClick={() => setSelectedLayer(idx)}
                    className={`p-6 rounded-2xl border transition-all cursor-pointer space-y-4 ${selectedLayer === idx
                        ? 'bg-slate-50 dark:bg-[#070E1E] border-[#00A3E0] shadow-sm'
                        : 'bg-white dark:bg-[#0B1528] border-slate-200/80 dark:border-white/5 hover:border-slate-300'
                      }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-400/20 text-[#00A3E0] flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        {layer.layer}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">
                        {layer.title}
                      </h4>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#00A3E0] block">
                        {layer.tag}
                      </span>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal pt-1">
                        {layer.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 dark:border-white/5 space-y-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Core Safeguards:
                      </span>
                      {layer.safeguards.map((s, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3E0] shrink-0 mt-0.5" />
                          <span>{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: CYBERSECURITY ASSESSMENT & IMPROVEMENT LIFECYCLE
          ========================================================================= */}
      <section id="lifecycle" className="py-20 bg-white dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <RefreshCw className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>CONTINUOUS SECURITY IMPROVEMENT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Assess. Prioritize. Strengthen. Reassess.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Cybersecurity is an iterative journey rather than a one-time project. Our continuous improvement model structures protection into a repeating cycle centered around Enterprise Security Posture.
            </p>
          </div>

          {/* Iterative Improvement Model */}
          <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 shadow-sm space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#00A3E0] block">
                  CONTINUOUS POSTURE MATURATION
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Five-Stage Security Maturation Cycle
                </h3>
              </div>
              <span className="px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-[#00A3E0] text-xs font-bold shrink-0">
                Center: Enterprise Security Posture
              </span>
            </div>

            {/* 5 Stages Grid */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {improvementStages.map((stage, idx) => {
                const Icon = stage.icon;
                const isSelected = activeLifecycleStage === idx;
                return (
                  <div
                    key={stage.step}
                    onClick={() => setActiveLifecycleStage(idx)}
                    className={`p-5 rounded-2xl transition-all cursor-pointer flex flex-col justify-between border ${isSelected
                        ? 'bg-white dark:bg-[#070E1E] border-[#00A3E0] shadow-md'
                        : 'bg-white/60 dark:bg-[#070E1E]/50 border-slate-200/80 dark:border-white/5 hover:border-[#00A3E0]/40'
                      }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-400/20 text-[#00A3E0] flex items-center justify-center">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold text-slate-400">
                          {stage.step}
                        </span>
                      </div>

                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                          {stage.title}
                        </h4>
                        <span className="text-[11px] font-semibold text-[#00A3E0] block">
                          {stage.tagline}
                        </span>
                      </div>

                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                        {stage.description}
                      </p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-[11px] font-bold text-[#00A3E0]">
                      <span>Stage {stage.step}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Active Stage Detail */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#070E1E] border border-slate-200/80 dark:border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#00A3E0]">
                <Activity className="w-4 h-4" />
                <span>STAGE {improvementStages[activeLifecycleStage].step} OPERATIONAL FOCUS: {improvementStages[activeLifecycleStage].title.toUpperCase()}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {improvementStages[activeLifecycleStage].focus}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: CYBERSECURITY ACROSS ENTERPRISE ENVIRONMENTS
          ========================================================================= */}
      <section id="environments" className="py-20 bg-slate-50 dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <Globe className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>HYBRID &amp; MULTI-CLOUD PROTECTION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Protect the Technology Your Business Depends On.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Cybersecurity controls must account for heterogeneous operating environments without introducing performance bottlenecks or administrative fragmentation.
            </p>
          </div>

          {/* Environments Grid with Wide Illustration */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-900 aspect-[4/3] group">
                <img
                  src="/images/cloud/cyber_environments.jpg?v=3"
                  alt="Enterprise technology environments connected through security boundaries and shared security governance"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070E1E] via-[#070E1E]/40 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#070E1E]/90 backdrop-blur-md border border-white/10 text-xs text-slate-300">
                  <span className="font-bold text-white block">Connected Enterprise Environments</span>
                  <span className="text-slate-400 text-[11px]">Applications &bull; Multi-Cloud &bull; Data Centers &bull; Managed Endpoints</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {enterpriseEnvironments.map((env) => {
                const Icon = env.icon;
                return (
                  <div
                    key={env.name}
                    className="p-5 rounded-2xl bg-white dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 space-y-2 hover:border-[#00A3E0]/40 transition-all shadow-xs"
                  >
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-400/20 text-[#00A3E0] flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {env.name}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {env.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed italic border-t border-slate-200 dark:border-white/5 pt-4">
            Note: Specific safeguards, network boundaries, and deployment configurations depend on each organization's unique software architecture, legacy dependencies, operational constraints, and risk profile.
          </p>

        </div>
      </section>

      {/* =========================================================================
          SECTION 8: SECURITY GOVERNANCE & RISK PRIORITIZATION
          ========================================================================= */}
      <section id="governance" className="py-20 bg-white dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <FileCheck className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>RISK-BASED DECISIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Make Security Decisions Based on Risk.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Not all security vulnerabilities carry equal consequence. By grounding remediation decisions in empirical business impact and technical exploitability, organizations maximize security return on engineering investment.
            </p>
          </div>

          {/* 2-Column Editorial Decision Matrix */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left: 6 Evaluation Criteria */}
            <div className="lg:col-span-6 space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Core Risk Evaluation Criteria
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Security findings are triaged through six objective lenses to determine genuine operational exposure before work is scheduled:
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/5 space-y-1">
                  <span className="text-xs font-bold text-[#00A3E0] block">1. Asset Criticality</span>
                  <p className="text-xs text-slate-600 dark:text-slate-300">Revenue generation, regulatory compliance exposure, or core business operations.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/5 space-y-1">
                  <span className="text-xs font-bold text-[#00A3E0] block">2. Likelihood &amp; Exploitability</span>
                  <p className="text-xs text-slate-600 dark:text-slate-300">Public exploit maturity, weaponized proof-of-concepts, and active adversary campaigns.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/5 space-y-1">
                  <span className="text-xs font-bold text-[#00A3E0] block">3. External Exposure</span>
                  <p className="text-xs text-slate-600 dark:text-slate-300">Direct internet ingress vs. air-gapped or internal micro-segmented backends.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/5 space-y-1">
                  <span className="text-xs font-bold text-[#00A3E0] block">4. Compensating Controls</span>
                  <p className="text-xs text-slate-600 dark:text-slate-300">WAF rules, PAM credential rotation, or network access controls that mitigate exposure.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/5 space-y-1">
                  <span className="text-xs font-bold text-[#00A3E0] block">5. Business Dependencies</span>
                  <p className="text-xs text-slate-600 dark:text-slate-300">Customer SLAs, operational work schedules, and supply-chain contractual mandates.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/5 space-y-1">
                  <span className="text-xs font-bold text-[#00A3E0] block">6. Remediation Feasibility</span>
                  <p className="text-xs text-slate-600 dark:text-slate-300">Vendor patch availability, configuration complexity, and required testing downtime.</p>
                </div>
              </div>
            </div>

            {/* Right: Conceptual Risk Prioritization Matrix */}
            <div className="lg:col-span-6 p-7 rounded-3xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 space-y-6">
              <div className="border-b border-slate-200 dark:border-white/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#00A3E0] block">
                  ILLUSTRATIVE RISK MATRIX
                </span>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  Triage &amp; Treatment Posture
                </h4>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-xl border border-rose-500 bg-rose-500/10 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-rose-500 uppercase tracking-wider">Critical Severity (P1)</span>
                    <span className="text-[10px] font-bold text-rose-400">Immediate Remediation</span>
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300">
                    Remotely exploitable vulnerability on internet-facing critical business asset with active threat intelligence.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-amber-500 bg-amber-500/10 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-500 uppercase tracking-wider">High Severity (P2)</span>
                    <span className="text-[10px] font-bold text-amber-400">Expedited Sprint Action</span>
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300">
                    High exploitability on internal core systems or medium exploitability on public endpoints without compensating control.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-blue-500 bg-blue-500/10 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-blue-500 uppercase tracking-wider">Medium Severity (P3)</span>
                    <span className="text-[10px] font-bold text-blue-400">Scheduled Patch Cycle</span>
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300">
                    Vulnerabilities requiring local authentication or existing compensating controls that prevent direct exploitation.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-400 bg-slate-500/10 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Low Severity (P4)</span>
                    <span className="text-[10px] font-bold text-slate-400">Routine Maintenance</span>
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300">
                    Minor configuration recommendations or informational findings handled during standard system updates.
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed italic border-t border-slate-200 dark:border-white/5 pt-4">
                Note: This prioritization framework serves as an illustrative conceptual model. Actual risk classification matrices, remediation timelines, and treatment approvals adapt to each client's operational architecture and governance requirements.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 9: CYBERSECURITY DELIVERABLES & ENGAGEMENT APPROACH
          ========================================================================= */}
      <section id="deliverables" className="py-20 bg-slate-50 dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <FileText className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>ACTIONABLE OUTPUTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              From Security Findings to Actionable Improvements.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Every cybersecurity engagement concludes with structured, audit-ready deliverables designed to help technical teams execute improvements smoothly and demonstrate compliance progress to leadership.
            </p>
          </div>

          {/* 8 Deliverables Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {engagementDeliverables.map((item, idx) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-white dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 space-y-3 hover:border-[#00A3E0]/40 transition-all shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-400/20 text-[#00A3E0] text-xs font-bold flex items-center justify-center">
                    0{idx + 1}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-100 dark:border-white/5 flex items-center gap-1 text-[11px] font-bold text-[#00A3E0]">
                  <span>Engagement Output</span>
                  <CheckCircle2 className="w-3 h-3" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 10: PRACTICAL CYBERSECURITY OUTCOMES
          ========================================================================= */}
      <section id="outcomes" className="py-20 bg-white dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>OPERATIONAL ADVANTAGE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Stronger Controls. Clearer Security Decisions.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Structured cybersecurity replaces fear and uncertainty with disciplined risk evaluation, pragmatic engineering remediation, and defensible compliance records.
            </p>
          </div>

          {/* 7 Outcomes in Distinct Editorial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practicalOutcomes.map((outcome, idx) => {
              const Icon = outcome.icon;
              return (
                <div
                  key={outcome.title}
                  className={`p-7 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 space-y-4 hover:border-[#00A3E0]/40 transition-all shadow-sm ${idx === 6 ? 'md:col-span-2 lg:col-span-1' : ''
                    }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/20 text-[#00A3E0] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {outcome.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {outcome.description}
                  </p>

                  <div className="pt-3 border-t border-slate-200 dark:border-white/5 flex items-center gap-2 text-xs font-bold text-[#00A3E0]">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Operational Advantage</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 11: CYBERSECURITY FAQS
          ========================================================================= */}
      <section id="faqs" className="py-20 bg-slate-50 dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section Header */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Clear Answers on Enterprise Cybersecurity
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Insights into our assessment methods, risk prioritization frameworks, and defense-in-depth principles.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0B1528] overflow-hidden transition-all shadow-xs"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                  >
                    <span className="text-base font-bold text-slate-900 dark:text-white">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#00A3E0] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                        }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-white/5">
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
          SECTION 12: FINAL CALL TO ACTION BANNER
          ========================================================================= */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-[#070E1E] via-[#050B17] to-slate-950 text-white">
        {/* Subtle background graphic overlay */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <img
            src="/images/cloud/cyber_closing_banner.jpg"
            alt="Enterprise cybersecurity and operational resilience background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#050B17] via-[#050B17]/90 to-[#050B17]/70 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-8 sm:p-12 lg:p-14 bg-gradient-to-r from-blue-900/30 via-cyan-950/30 to-slate-900/60 border border-cyan-500/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 backdrop-blur-sm">

            <div className="space-y-4 max-w-2xl text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 block">
                SECURITY &amp; RESILIENCE
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
                Strengthen Your Security Posture with Confidence.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Understand your security risks, improve protection across your technology environment, and develop a practical cybersecurity roadmap aligned with your business needs.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-4 shrink-0 w-full lg:w-auto">
              <button
                type="button"
                onClick={() => handleOpenContact('Talk to Our Experts – Cybersecurity')}
                className="px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-gradient-to-r from-[#00A3E0] to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-lg shadow-cyan-500/30 flex items-center gap-2.5 group cursor-pointer"
              >
                <span>Talk to Our Cloud Experts</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                to="/cloud-operations/iam"
                className="px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 hover:text-white border border-white/20 font-bold text-xs sm:text-sm tracking-wide transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>Explore Identity &amp; Access Management</span>
                <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default CybersecurityPage;
