import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Server,
  Layers,
  Database,
  Lock,
  DollarSign,
  Users,
  Search,
  FileText,
  BarChart3,
  Network,
  Cpu,
  Workflow,
  Sparkles,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  FolderTree,
  FileCheck,
  Check,
  Building2,
  ShieldAlert,
  ArrowUpRight,
  Zap,
  Maximize2,
  Activity,
  X
} from 'lucide-react';

interface CloudReadinessPageProps {
  onOpenContact?: (topic?: string) => void;
}

export const CloudReadinessPage: React.FC<CloudReadinessPageProps> = ({ onOpenContact }) => {
  const [activeAssessmentArea, setActiveAssessmentArea] = useState<number>(0);
  const [isAreaAutoPlaying, setIsAreaAutoPlaying] = useState<boolean>(true);
  const [areaTimerKey, setAreaTimerKey] = useState<number>(0);
  const [activeApproachStep, setActiveApproachStep] = useState<number>(0);
  const [activeDeliverableTab, setActiveDeliverableTab] = useState<number>(0);
  const [isDeliverableAutoPlaying, setIsDeliverableAutoPlaying] = useState<boolean>(true);
  const [isDeliverableUserPaused, setIsDeliverableUserPaused] = useState<boolean>(false);
  const [isDeliverableHovered, setIsDeliverableHovered] = useState<boolean>(false);
  const deliverableResumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isFullscreenImageOpen, setIsFullscreenImageOpen] = useState<boolean>(false);

  useEffect(() => {
    document.title = 'Cloud Readiness Assessment & Migration Strategy | KNOOVIQ';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleDiscussReadiness = () => {
    if (onOpenContact) {
      onOpenContact('Cloud Readiness Assessment');
    }
  };

  const handleExploreApproach = () => {
    const el = document.getElementById('readiness-approach');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Section 3: Why Cloud Readiness Matters (6 Capabilities)
  const readinessCapabilities = [
    {
      id: 'current-state',
      title: 'Current-State Assessment',
      icon: Server,
      tag: 'VISIBILITY',
      description: 'Understand existing infrastructure, applications, workloads, hardware utilization, and inter-system dependencies.'
    },
    {
      id: 'gap-identification',
      title: 'Gap Identification',
      icon: Search,
      tag: 'DIAGNOSTICS',
      description: 'Identify critical technology debt, security posture vulnerabilities, governance deficits, and operational bottlenecks.'
    },
    {
      id: 'strategy-roadmap',
      title: 'Cloud Strategy & Roadmap',
      icon: Compass,
      tag: 'ALIGNMENT',
      description: 'Establish a practical, phased adoption roadmap aligned directly with business outcomes and technical feasibility.'
    },
    {
      id: 'risk-compliance',
      title: 'Risk & Compliance Assessment',
      icon: ShieldCheck,
      tag: 'GOVERNANCE',
      description: 'Evaluate cybersecurity controls, regulatory data sovereignty laws, resilience parameters, and migration risks.'
    },
    {
      id: 'operational-readiness',
      title: 'Operational Readiness',
      icon: Users,
      tag: 'PEOPLE & PROCESS',
      description: 'Assess internal team capabilities, ITIL operating models, continuous monitoring tooling, and incident support processes.'
    },
    {
      id: 'business-application',
      title: 'Business & Application Readiness',
      icon: Layers,
      tag: 'PORTFOLIO',
      description: 'Determine workload cloud suitability, modernization opportunities, 7 R’s disposition, and organizational agility.'
    }
  ];

  // Section 4: 6 Cloud Readiness Assessment Areas (Detailed Diagnostic Framework)
  const assessmentAreas = [
    {
      id: 'infrastructure-platform',
      number: '01',
      title: 'Infrastructure & Cloud Platform Suitability',
      shortTitle: 'Infrastructure & Platform',
      icon: Server,
      scope: 'Compute, Hypervisors, Storage IOPS, Networks & Latency',
      overview: 'Rigorous technical evaluation of physical servers, virtual machines, storage performance, and networking topology to determine hyperscaler compatibility.',
      keyEvaluations: [
        'Compute & Sizing Telemetry: Real-time CPU, RAM, and burst utilization to prevent over-provisioning in target cloud.',
        'Storage Profile Audit: Throughput, IOPS requirements, SAN/NAS attachments, and cold vs hot retention policies.',
        'Network Topology & Bandwidth: Dedicated circuit readiness, Direct Connect / ExpressRoute sizing, and multi-tier routing.',
        'Hybrid & Edge Dependencies: Low-latency on-premises interconnects, shop-floor equipment links, and hardware dongles.'
      ],
      methodology: 'Agentless discovery probes collect 30+ days of uninterrupted utilization metrics, eliminating guesswork.',
      outcomeMetric: 'Optimized Target Compute Profiles & Right-Sizing Matrix'
    },
    {
      id: 'application-architecture',
      number: '02',
      title: 'Application Architecture & Workload Dependencies',
      shortTitle: 'Applications & Dependencies',
      icon: Layers,
      scope: 'Monoliths, Microservices, Middleware & 7 R’s Dispositions',
      overview: 'Deep architectural discovery mapping how applications interact, identifying shared dependencies, and assigning deterministic migration pathways.',
      keyEvaluations: [
        'Dependency Cluster Analysis: Mapping API, batch, and database couplings to prevent latency degradation post-cutover.',
        'Technical Debt & Runtimes: Unsupported OS versions, end-of-life language frameworks, and third-party commercial library locks.',
        '7 R’s Disposition Categorization: Rehost, Replatform, Refactor, Repurchase, Retain, Retire, or Relocate.',
        'Modernization Feasibility: Containerization viability (Docker/K8s) and managed PaaS database migration suitability.'
      ],
      methodology: 'Automated code repository scans and network telemetry clustering group applications into independent migration waves.',
      outcomeMetric: 'Full Application Portfolio Catalog with 7 R’s Classifications'
    },
    {
      id: 'data-readiness',
      number: '03',
      title: 'Data Readiness, Integration & Migration Considerations',
      shortTitle: 'Data & Integration',
      icon: Database,
      scope: 'Data Gravity, RDBMS, Integration Fabrics & Synchronization',
      overview: 'Comprehensive audit of database schemas, data volumes, ingestion pipelines, and synchronization mechanisms required for zero-loss cutover.',
      keyEvaluations: [
        'Data Gravity & Volume Analysis: Multi-terabyte database footprints, historical growth rates, and archiving opportunities.',
        'Database Engine Compatibility: Commercial RDBMS (Oracle, SQL Server) to open-source or managed engines (Aurora, Cloud SQL).',
        'Integration Protocol Audit: Synchronous RFC/BAPI, SFTP file drops, asynchronous messaging, and webhooks.',
        'Change Data Capture (CDC) Readiness: Replication throughput tolerances and delta synchronization windows during cutovers.'
      ],
      methodology: 'Assessment of transaction logs and schema complexity to determine cutover maintenance window feasibility.',
      outcomeMetric: 'Data Migration Playbook & Database Target Mapping'
    },
    {
      id: 'identity-security',
      number: '04',
      title: 'Identity, Access Management & Security Controls',
      shortTitle: 'Security & Identity (IAM)',
      icon: Lock,
      scope: 'Zero-Trust, Directory Federation, Cryptography & Threat Surfaces',
      overview: 'In-depth assessment of enterprise security posture, identity boundaries, perimeter controls, and compliance controls across multi-cloud environments.',
      keyEvaluations: [
        'IAM & Directory Federation: Active Directory / Okta federation, MFA enforcement, and Role-Based Access Control (RBAC).',
        'Data Encryption & Key Management: Encryption at rest (AES-256), in-transit (TLS 1.3), and Customer-Managed Key (CMK) strategies.',
        'Network Perimeter & Micro-segmentation: Virtual firewalls, Web Application Firewalls (WAF), and bastion jump host architectures.',
        'Security Information & Event Management (SIEM): Centralized audit log streaming, SOC ingestion, and threat detection.'
      ],
      methodology: 'Benchmarked against NIST CSF, CIS Hyperscaler Foundations, and ISO 27001 control requirements.',
      outcomeMetric: 'Zero-Trust Cloud Security Architecture Blueprint'
    },
    {
      id: 'governance-finops',
      number: '05',
      title: 'Governance, Compliance & Cost-Management Planning',
      shortTitle: 'Governance & FinOps',
      icon: DollarSign,
      scope: 'TCO Modeling, FinOps Unit Economics & Regulatory Boundaries',
      overview: 'Financial and regulatory readiness planning establishing multi-account hierarchy, cost allocation guardrails, and statutory data residency compliance.',
      keyEvaluations: [
        '3-Year TCO Financial Modeling: Comparative model contrasting on-premises CapEx vs cloud OpEx with cash flow forecasts.',
        'Regulatory & Data Residency: GDPR, HIPAA, PCI-DSS, RBI, and local data protection statutory mandates.',
        'FinOps Tagging & Cost Allocation: Mandatory metadata schemas allocating cloud spend to business units and cost centers.',
        'Policy-as-Code Guardrails: Automated regional restrictions and compute budget quotas to eliminate runaway spending.'
      ],
      methodology: 'Quantitative financial modeling factoring reserved capacity discounts, savings plans, and decommission savings.',
      outcomeMetric: 'Executive 3-Year TCO Business Case & FinOps Policy Guide'
    },
    {
      id: 'it-operations-skills',
      number: '06',
      title: 'IT Operations, Skills & Organizational Change Readiness',
      shortTitle: 'IT Operations & Culture',
      icon: Users,
      scope: 'CCoE Charter, SRE Practices, ITIL Workflows & Team Upskilling',
      overview: 'Evaluation of operational team capabilities, organizational culture, change management protocols, and service desk maturity for cloud operations.',
      keyEvaluations: [
        'Cloud Center of Excellence (CCoE): Cross-functional leadership charters uniting architecture, security, finance, and operations.',
        'Skills Inventory & Gap Analysis: Assessing internal familiarity with Terraform, Kubernetes, hyperscaler consoles, and CI/CD.',
        'ITIL & SRE Alignment: Incident escalation paths, Change Advisory Board (CAB) velocities, and SLA/SLO definition.',
        'Organizational Change Enablement: Training pathways, cultural readiness programs, and developer self-service enablement.'
      ],
      methodology: 'Structured interviews and competency matrix mapping to formulate a sustainable enablement roadmap.',
      outcomeMetric: 'Cloud Operating Model Transition Charter & Upskilling Plan'
    }
  ];

  // Auto-tour rotation for Section 4 (Assessment Areas - 3-second cycle)
  useEffect(() => {
    if (!isAreaAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveAssessmentArea((prev) => (prev + 1) % assessmentAreas.length);
      setAreaTimerKey((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [isAreaAutoPlaying, areaTimerKey, assessmentAreas.length]);

  const handleSelectArea = (idx: number) => {
    setActiveAssessmentArea(idx);
    setAreaTimerKey((prev) => prev + 1); // Restarts the 3-second timer on user interaction
  };

  // Section 5: Our Cloud Readiness Approach (5-Step Path)
  const approachSteps = [
    {
      step: '01',
      title: 'Assess',
      lead: 'Current-State Discovery',
      description: 'Review existing infrastructure, applications, workloads, data stores, and overarching business objectives.',
      activities: [
        'Deploy non-intrusive automated telemetry probes across on-premises and hosting facilities',
        'Catalog 100% of servers, storage tiers, databases, and network interconnects',
        'Conduct executive stakeholder interviews on business agility goals and budget priorities'
      ],
      milestone: 'Comprehensive IT Landscape Asset Inventory & Baseline Metric Report'
    },
    {
      step: '02',
      title: 'Analyze',
      lead: 'Deep Diagnostics & Gap Evaluation',
      description: 'Identify dependencies, readiness gaps, security vulnerabilities, migration risks, and modernization opportunities.',
      activities: [
        'Execute multi-tier dependency clustering to reveal hidden inter-application communication channels',
        'Audit compliance vulnerabilities, legacy operating systems, and technical debt hotspots',
        'Evaluate application modernization suitability for containerization and managed databases'
      ],
      milestone: 'Technical Debt, Risk Matrix & Workload Dependency Graph'
    },
    {
      step: '03',
      title: 'Strategize',
      lead: 'Target Blueprint & Wave Formulation',
      description: 'Define cloud adoption priorities, target landing zone architecture, and deterministic migration options.',
      activities: [
        'Assign definitive 7 R’s disposition to every application component',
        'Design hyperscaler landing zone blueprints (account hierarchy, networking, identity)',
        'Structure migration waves balancing technical risk, business continuity, and quick ROI wins'
      ],
      milestone: 'Target Cloud Reference Architecture & Phased Wave Migration Plan'
    },
    {
      step: '04',
      title: 'Prepare',
      lead: 'Foundational Prerequisite Enablement',
      description: 'Establish security boundaries, governance policies, operational runbooks, and migration factory prerequisites.',
      activities: [
        'Implement automated Landing Zone as Code with baseline security guardrails',
        'Configure identity federation and establish role-based access controls',
        'Test automated block and database replication pipelines with a low-risk pilot workload'
      ],
      milestone: 'Production-Ready Cloud Landing Zone & Validated Migration Factory Tooling'
    },
    {
      step: '05',
      title: 'Enable',
      lead: 'Roadmap Handover & Organizational Launch',
      description: 'Deliver a practical readiness roadmap with prioritized next steps, governance guidance, and execution leadership.',
      activities: [
        'Present executive briefing with TCO business case and quantified ROI timeline',
        'Deliver comprehensive cutover playbooks, rollback procedures, and operational checklists',
        'Charter the Cloud Center of Excellence (CCoE) and initiate team upskilling workshops'
      ],
      milestone: 'Final Executive Readiness Dossier & Board-Level Adoption Charter'
    }
  ];

  // Section 6: Deliverables (7 Core Outputs)
  const deliverables = [
    {
      id: 'current-state-findings',
      title: 'Current-State Assessment Findings',
      format: 'Executive Dossier & Inventory Data Mart',
      summary: 'Complete technical documentation of all servers, storage arrays, network topologies, virtualization layers, and active software licenses currently powering enterprise operations.',
      highlights: [
        '100% cataloged IT asset inventory with CPU, RAM, and disk IOPS utilization metrics',
        'Virtualization hypervisor profiling and physical bare-metal hardware mapping',
        'Network bandwidth and latency baseline between core sites and hosting providers',
        'Software license inventory identifying transferable Bring-Your-Own-License (BYOL) assets'
      ]
    },
    {
      id: 'application-workload-insights',
      title: 'Application & Workload Readiness Insights',
      format: 'Portfolio Scoring Catalog & 7 R’s Matrix',
      summary: 'Granular evaluation of every business application, detailing architectural patterns, framework versions, database couplings, and cloud platform suitability.',
      highlights: [
        'Objective cloud suitability score assigned to each workload based on 40+ criteria',
        'Categorization into Rehost, Replatform, Refactor, Repurchase, Retain, or Retire',
        'Containerization and serverless modernization feasibility ratings',
        'Batch job, messaging broker, and asynchronous worker dependency documentation'
      ]
    },
    {
      id: 'risk-dependency-gap',
      title: 'Risk, Dependency & Capability-Gap Analysis',
      format: 'Risk Heatmap & Remediation Registry',
      summary: 'Exhaustive audit uncovering migration blockers, legacy architectural debt, compliance exposures, and inter-application communication latency constraints.',
      highlights: [
        'Clustered dependency map eliminating risk of split-system network latency',
        'End-of-life operating systems and database version vulnerability inventory',
        'Regulatory residency and cross-border data transfer compliance review',
        'Pre-migration remediation checklist specifying required prerequisites prior to wave execution'
      ]
    },
    {
      id: 'recommended-cloud-strategy',
      title: 'Recommended Cloud Adoption Strategy',
      format: 'Strategic Vision Document & Multi-Cloud Direction',
      summary: 'A unified enterprise strategy defining public, private, and hybrid cloud placement recommendations based on quantitative performance and cost metrics.',
      highlights: [
        'Hyperscaler platform alignment (AWS, Microsoft Azure, Google Cloud, or Hybrid)',
        'IaaS vs PaaS vs SaaS placement recommendations for each tier of the application stack',
        'Multi-region redundancy and disaster recovery failover tiering',
        'Business case justification detailing agility, scalability, and innovation impact'
      ]
    },
    {
      id: 'target-state-architecture',
      title: 'Target-State Architecture Considerations',
      format: 'Infrastructure Blueprint & Landing Zone Specs',
      summary: 'Detailed technical reference blueprints illustrating target multi-account topologies, virtual network transit routing, security perimeters, and shared services.',
      highlights: [
        'Multi-account hierarchy blueprint isolating Dev, Test, Prod, and Shared Services',
        'Hub-and-spoke transit network design with egress filtering and corporate VPN/Direct Connect',
        'Zero-trust identity boundary specification and single sign-on federation model',
        'Infrastructure as Code (Terraform/OpenTofu) modular architecture design'
      ]
    },
    {
      id: 'prioritized-roadmap',
      title: 'Prioritized Cloud Readiness Roadmap',
      format: 'Wave Schedule & Cutover Playbook',
      summary: 'An actionable, time-phased execution plan grouping applications into logical migration waves designed to deliver rapid business value while mitigating downtime.',
      highlights: [
        'Phased migration schedule with pilot, wave 1, wave 2, and steady-state cutovers',
        'Interdependency-based sequencing preventing decoupled latency traps',
        'Cutover maintenance window duration estimates and rollback contingency runbooks',
        'Resource allocation plan mapping internal teams, cloud consultants, and vendor partners'
      ]
    },
    {
      id: 'security-governance-recs',
      title: 'Security, Governance & Operational Recommendations',
      format: 'Policy Guardrail Framework & CCoE Handbook',
      summary: 'Pragmatic operational guidelines establishing the Cloud Center of Excellence (CCoE), FinOps unit cost tracking, continuous compliance, and SRE incident response.',
      highlights: [
        'Mandatory resource tagging taxonomy for automated chargeback and FinOps tracking',
        'Automated policy-as-code guardrails enforcing encryption and region locking',
        'ITIL v4 Change Advisory Board (CAB) modernization for cloud velocity',
        'Operational incident response playbooks and cloud monitoring toolchain recommendations'
      ]
    }
  ];

  // Auto-tour rotation for Section 6 (Deliverables - 1-second automatic cycle dropping down)
  useEffect(() => {
    if (!isDeliverableAutoPlaying || isDeliverableUserPaused || isDeliverableHovered) return;

    const interval = setInterval(() => {
      setActiveDeliverableTab((prev) => (prev + 1) % deliverables.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [isDeliverableAutoPlaying, isDeliverableUserPaused, isDeliverableHovered, deliverables.length]);

  // Handle user click: immediately select, wait 5 seconds ("wait sometime"), then continue auto-cycling down
  const handleSelectDeliverable = (idx: number) => {
    setActiveDeliverableTab(idx);
    setIsDeliverableUserPaused(true);

    if (deliverableResumeTimeoutRef.current) {
      clearTimeout(deliverableResumeTimeoutRef.current);
    }

    // Wait 5 seconds after user click, then automatically resume 1-second auto cycle
    deliverableResumeTimeoutRef.current = setTimeout(() => {
      setIsDeliverableUserPaused(false);
    }, 5000);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (deliverableResumeTimeoutRef.current) {
        clearTimeout(deliverableResumeTimeoutRef.current);
      }
    };
  }, []);

  // Section 8: Related Cloud & Operations Services (Compact 4-Card Grid)
  const relatedServices = [
    {
      title: 'Cloud Strategy',
      tag: 'ADVISORY & FINOPS',
      path: '/cloud-operations/strategy',
      description: 'Business case modeling, target operating models, and FinOps unit cost economics to guide long-term cloud investments.',
      badge: 'STRATEGY'
    },
    {
      title: 'Cloud Adoption',
      tag: 'MIGRATION & WAVES',
      path: '/cloud-operations/adoption',
      description: 'Structured migration wave execution, 7 R’s factory tooling, and zero-downtime cutover orchestration across enterprise workloads.',
      badge: 'ADOPTION'
    },
    {
      title: 'Cloud Operating Model',
      tag: 'CCoE & GOVERNANCE',
      path: '/cloud-operations/operating-model',
      description: 'Transform organizational processes, establish Cloud Centers of Excellence, and implement automated policy guardrails.',
      badge: 'GOVERNANCE'
    },
    {
      title: 'Cloud Infrastructure & Platforms',
      tag: 'HYPERSCALER FOUNDATIONS',
      path: '/cloud-operations/infrastructure',
      description: 'Enterprise landing zones, hybrid interconnects, multi-zone resilience, and Kubernetes platform engineering.',
      badge: 'PLATFORMS'
    }
  ];

  // Frequently Asked Questions
  const readinessFaqs = [
    {
      q: 'How long does an enterprise Cloud Readiness Assessment typically take?',
      a: 'A standard comprehensive assessment spans 3 to 6 weeks, depending on the scale and complexity of your IT landscape. We begin automated agentless discovery within the first 48 hours to gather real-time performance telemetry, while concurrently conducting stakeholder interviews and architectural reviews.'
    },
    {
      q: 'Will running readiness discovery tools impact our active production systems?',
      a: 'No. Knooviq utilizes lightweight, agentless discovery protocols that query standard management APIs (WMI, SSH, SNMP, vCenter APIs) with minimal network and compute overhead (under 0.5% CPU utilization). There is zero system disruption or production downtime.'
    },
    {
      q: 'How does Knooviq handle legacy monolithic applications and proprietary databases?',
      a: 'We evaluate each legacy workload against our 7 R’s decision framework. If an application is too coupled or reliant on legacy OS runtimes, we determine whether a low-friction Replatform, containerized wrapper, or Retain strategy makes the most technical and economic sense, rather than forcing an expensive, risky rewrite.'
    },
    {
      q: 'Is the readiness assessment neutral across AWS, Microsoft Azure, and Google Cloud?',
      a: 'Yes. Knooviq provides independent, hyperscaler-agnostic consulting. Our recommendations are driven strictly by your technical workloads, compliance mandates, latency demands, existing enterprise licensing (e.g., Microsoft Enterprise Agreements, SAP contracts), and total cost of ownership (TCO).'
    },
    {
      q: 'What is the immediate next step after completing the Cloud Readiness Assessment?',
      a: 'At the conclusion of the engagement, you receive an executive presentation, complete technical asset inventory, and a prioritized wave roadmap. From there, organizations typically initiate Phase 1: Foundational Landing Zone deployment and low-risk pilot wave execution.'
    }
  ];

  return (
    <div className="bg-white dark:bg-[#070E1C] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      {/* =========================================================================
          SECTION 2: HERO SECTION (Cinematic Architectural Hero - Unified Knooviq Suite Format)
         ========================================================================= */}
      <section className="relative w-full min-h-[540px] sm:min-h-[560px] lg:min-h-[580px] flex items-center overflow-hidden bg-[#040B17] text-white border-b border-slate-200/20 dark:border-white/10 shadow-2xl py-10 sm:py-12 lg:py-14">
        
        {/* Full-Bleed Enterprise Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="/images/cloud/cloud_readiness_hero.jpg" 
            alt="Knooviq Cloud Readiness Consulting and Architecture Assessment" 
            className="w-full h-full object-cover object-right"
          />
          {/* Subtle smooth gradient on the left edge for text legibility while keeping the cloud graphic 100% luminous and crystal clear */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#040B17]/85 via-[#040B17]/35 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#040B17] to-transparent pointer-events-none" />

          {/* Top Hairline Accent */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00A3E0] to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl space-y-2.5 sm:space-y-3">
            
            {/* Category Dash & Tag */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-cyan-400/30 text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-300 shadow-xl">
                <Sparkles className="w-3.5 h-3.5 text-[#00A3E0]" />
                <span>CLOUD STRATEGY &amp; ADVISORY</span>
              </div>
              <span className="text-slate-400 text-xs font-mono">/</span>
              <span className="text-[11px] font-mono font-bold text-slate-300 uppercase tracking-wider bg-black/30 px-2.5 py-0.5 rounded-full border border-white/10 backdrop-blur-sm shadow-md">
                CLOUD READINESS ASSESSMENT
              </span>
            </div>

            {/* Hero Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.18]">
              Assess. Plan. Prepare. Accelerate.
            </h1>

            {/* Subtitle / Strategic Narrative */}
            <p className="text-base sm:text-lg font-normal text-slate-200 leading-relaxed max-w-2xl mt-3">
              Knooviq systematically evaluates existing enterprise IT infrastructure, applications, data stores, security perimeters, operating workflows, and organizational skills before cloud adoption. We uncover hidden technical debt, quantify migration risks, and design a validated roadmap to ensure seamless, predictable modernization with zero core business disruption.
            </p>

            {/* Architectural Feature Checkpoints */}
            <div className="flex flex-wrap items-center gap-2 pt-0.5">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/35 backdrop-blur-md border border-white/15 text-[11px] font-medium text-slate-200 shadow-lg">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>Agentless IT Discovery</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/35 backdrop-blur-md border border-white/15 text-[11px] font-medium text-slate-200 shadow-lg">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Objective 7 R’s Framework</span>
              </span>
              <span className="inline-flex items-center gap-2.5 px-2.5 py-1 rounded-full bg-black/35 backdrop-blur-md border border-white/15 text-[11px] font-medium text-slate-200 shadow-lg">
                <Database className="w-3.5 h-3.5 text-[#00A3E0]" />
                <span>Zero Disruption Assurance</span>
              </span>
            </div>

            {/* Strategic Content Blocks (Pure Information - Zero Clutter) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-0.5">
              <div className="px-3 py-2 rounded-xl bg-black/35 backdrop-blur-md border border-white/15 shadow-md">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-[10.5px] font-mono font-bold uppercase text-white">
                    AGENTLESS IT DISCOVERY
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 leading-snug font-normal">
                  Single Source of Full-Stack Telemetry &amp; Workload Dependencies
                </p>
              </div>

              <div className="px-3 py-2 rounded-xl bg-black/35 backdrop-blur-md border border-white/15 shadow-md">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <Activity className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-[10.5px] font-mono font-bold uppercase text-white">
                    FINOPS &amp; 7 R’S ROADMAP
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 leading-snug font-normal">
                  Deterministic 3-Year TCO Modeling &amp; Migration Economics
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

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
              src="/images/cloud/cloud_readiness_hero.jpg" 
              alt="Knooviq Cloud Readiness Consulting and Architecture Assessment"
              className="max-w-full max-h-[90vh] object-contain rounded-2xl border border-white/20 shadow-2xl"
            />
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <span className="px-4 py-2 rounded-full bg-black/80 border border-white/20 text-xs font-mono font-bold text-cyan-300 backdrop-blur-md shadow-xl">
                Cloud Strategy &amp; Advisory // Cloud Readiness Assessment
              </span>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          SECTION 3: WHY CLOUD READINESS MATTERS (6 Key Capabilities & Value Framework)
         ========================================================================= */}
      <section className="py-20 bg-slate-50 dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Discovery & Readiness Telemetry Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-5 rounded-2xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 shadow-sm font-mono text-xs">
            <div className="space-y-1 border-r border-slate-100 dark:border-white/5 pr-4 last:border-0">
              <span className="text-slate-500 dark:text-slate-400 uppercase text-[10px] block font-bold">Discovery Scope</span>
              <span className="text-slate-900 dark:text-white font-black text-sm sm:text-base block">100% IT Assets</span>
              <span className="text-slate-500 dark:text-slate-400 text-[11px] block font-sans">Full Stack &amp; Dependencies</span>
            </div>
            <div className="space-y-1 border-r border-slate-100 dark:border-white/5 pr-4 last:border-0">
              <span className="text-slate-500 dark:text-slate-400 uppercase text-[10px] block font-bold">Workload Decision</span>
              <span className="text-[#00A3E0] font-black text-sm sm:text-base block">7 R’s Framework</span>
              <span className="text-slate-500 dark:text-slate-400 text-[11px] block font-sans">Deterministic Classification</span>
            </div>
            <div className="space-y-1 border-r border-slate-100 dark:border-white/5 pr-4 last:border-0">
              <span className="text-slate-500 dark:text-slate-400 uppercase text-[10px] block font-bold">Business Case</span>
              <span className="text-slate-900 dark:text-white font-black text-sm sm:text-base block">3-Year TCO Model</span>
              <span className="text-slate-500 dark:text-slate-400 text-[11px] block font-sans">CapEx vs OpEx Projection</span>
            </div>
            <div className="space-y-1">
              <span className="text-slate-500 dark:text-slate-400 uppercase text-[10px] block font-bold">Production Impact</span>
              <span className="text-emerald-500 font-black text-sm sm:text-base block">Zero Disruption</span>
              <span className="text-slate-500 dark:text-slate-400 text-[11px] block font-sans">Agentless Telemetry Probes</span>
            </div>
          </div>

          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00A3E0] block">
              STRATEGIC IMPERATIVE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Build a Strong Foundation for Your Cloud Journey
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Moving workloads to the cloud without an objective readiness assessment leads to unexpected cost blowouts, stalled migration waves, compliance violations, and post-cutover performance degradation. Knooviq establishes certainty before a single server is migrated.
            </p>
          </div>

          {/* 6 Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {readinessCapabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.id}
                  className="p-6 rounded-2xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 hover:border-[#00A3E0] dark:hover:border-[#00A3E0]/50 hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-[#00A3E0]/10 dark:bg-cyan-500/10 flex items-center justify-center text-[#00A3E0] group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400">
                        {cap.tag}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#00A3E0] transition-colors">
                        {cap.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {cap.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>CAPABILITY 0{idx + 1}</span>
                    <Check className="w-4 h-4 text-[#00A3E0]" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Executive Insight Strip (Readable Info) */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#F0F7FD] dark:bg-[#09152B] border border-[#00A3E0]/20">
            <div className="space-y-1.5 max-w-3xl">
              <span className="text-xs font-mono font-bold text-[#00A3E0] uppercase tracking-wider block">
                ENTERPRISE READINESS INSIGHT
              </span>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Eliminate Cloud Migration Surprises Before Deployment
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Organizations that conduct structured technical and organizational assessments experience up to 45% lower post-migration operating expenses and complete cutovers without rollback cycles.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: CLOUD READINESS ASSESSMENT AREAS (6-Dimensional Framework)
         ========================================================================= */}
      <section id="assessment-areas" className="py-20 bg-white dark:bg-[#070E1C] border-b border-slate-200 dark:border-white/10 transition-colors">
        <style>{`
          @keyframes areaTimerProgress {
            0% { width: 0%; }
            100% { width: 100%; }
          }
        `}</style>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header with 3s Auto-Cycle Controller */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00A3E0] block">
                  EVALUATION SCOPE
                </span>
                <span className="text-slate-300 dark:text-slate-700">&bull;</span>
                <button
                  type="button"
                  onClick={() => setIsAreaAutoPlaying(!isAreaAutoPlaying)}
                  className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] hover:bg-cyan-100 transition-colors cursor-pointer"
                  title={isAreaAutoPlaying ? "Click to Pause 3s Auto-Cycle" : "Click to Resume 3s Auto-Cycle"}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isAreaAutoPlaying ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'}`} />
                  <span>{isAreaAutoPlaying ? 'Auto-Cycle (3s Active)' : 'Paused'}</span>
                </button>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                Cloud Readiness Assessment Areas
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Knooviq examines your enterprise landscape across six interdependent dimensions. Our structured framework evaluates technical feasibility, operational maturity, and governance readiness to form a complete architectural picture.
              </p>
            </div>
          </div>

          {/* Assessment Interactive Tabs and Depth Framework */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: 6 Area Selector Cards */}
            <div className="lg:col-span-5 space-y-3">
              {assessmentAreas.map((area, idx) => {
                const Icon = area.icon;
                const isActive = activeAssessmentArea === idx;
                return (
                  <button
                    key={area.id}
                    type="button"
                    onClick={() => handleSelectArea(idx)}
                    className={`relative overflow-hidden w-full text-left p-4 sm:p-5 rounded-2xl transition-all flex items-start gap-4 border cursor-pointer ${
                      isActive
                        ? 'bg-[#F0F7FD] dark:bg-[#0B1528] border-[#00A3E0] shadow-sm'
                        : 'bg-white dark:bg-[#070E1E] border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20'
                    }`}
                  >
                    {/* 3-Second Active Progress Bar */}
                    {isActive && isAreaAutoPlaying && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-cyan-100 dark:bg-cyan-950/40 overflow-hidden">
                        <div 
                          key={`area-progress-${idx}-${areaTimerKey}`}
                          className="h-full bg-gradient-to-r from-[#00A3E0] to-blue-600 rounded-full"
                          style={{
                            animation: 'areaTimerProgress 3000ms linear forwards'
                          }}
                        />
                      </div>
                    )}

                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isActive
                        ? 'bg-[#00A3E0] text-white'
                        : 'bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${
                          isActive ? 'text-[#00A3E0]' : 'text-slate-400'
                        }`}>
                          DIMENSION {area.number}
                        </span>
                        {isActive && (
                          <span className="text-[10px] font-bold text-[#00A3E0] bg-[#00A3E0]/10 px-2 py-0.5 rounded-full flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0] animate-ping" />
                            Active
                          </span>
                        )}
                      </div>
                      <h3 className={`text-sm sm:text-base font-bold mt-0.5 transition-colors ${
                        isActive ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300'
                      }`}>
                        {area.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 truncate mt-1">
                        {area.scope}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Deep-Dive Assessment Diagnostic Card */}
            <div className="lg:col-span-7">
              {(() => {
                const selected = assessmentAreas[activeAssessmentArea];
                const Icon = selected.icon;
                return (
                  <div key={selected.id} className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 space-y-6 animate-in fade-in duration-300">
                    
                    {/* Diagnostic Card Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-white/10">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-[#00A3E0] text-white flex items-center justify-center shadow-md shadow-[#00A3E0]/20">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-xs font-mono font-bold text-[#00A3E0] uppercase tracking-wider block">
                            ASSESSMENT DOMAIN {selected.number}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                            {selected.title}
                          </h3>
                        </div>
                      </div>

                      <div className="text-right sm:block">
                        <span className="text-[11px] font-mono text-slate-400 block uppercase">Scope Focus</span>
                        <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{selected.scope}</span>
                      </div>
                    </div>

                    {/* Overview Description */}
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                      {selected.overview}
                    </p>

                    {/* Key Technical Evaluations */}
                    <div className="space-y-3 pt-2">
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                        CORE EVALUATION CHECKPOINTS
                      </h4>
                      <div className="space-y-2.5">
                        {selected.keyEvaluations.map((item, idx) => (
                          <div
                            key={idx}
                            className="p-3.5 rounded-xl bg-white dark:bg-[#070E1E] border border-slate-200/80 dark:border-white/5 flex items-start gap-3"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Methodology & Deliverable Outcome */}
                    <div className="pt-4 border-t border-slate-200 dark:border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div className="p-4 rounded-xl bg-white dark:bg-[#070E1E] border border-slate-200/70 dark:border-white/5 space-y-1">
                        <span className="font-mono font-bold text-slate-400 uppercase tracking-wider block text-[10px]">
                          EVALUATION METHODOLOGY
                        </span>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                          {selected.methodology}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-white dark:bg-[#070E1E] border border-slate-200/70 dark:border-white/5 space-y-1">
                        <span className="font-mono font-bold text-[#00A3E0] uppercase tracking-wider block text-[10px]">
                          DIAGNOSTIC ARTIFACT
                        </span>
                        <p className="font-bold text-slate-900 dark:text-white">
                          {selected.outcomeMetric}
                        </p>
                      </div>
                    </div>

                  </div>
                );
              })()}
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: OUR CLOUD READINESS APPROACH (5-Step Horizontal Process)
         ========================================================================= */}
      <section id="readiness-approach" className="py-20 bg-slate-50 dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00A3E0] block">
              STRUCTURED METHODOLOGY
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              A Structured Path to Cloud Confidence
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Knooviq executes a five-stage readiness assessment framework engineered for enterprise rigor. We turn ambiguous IT landscapes into deterministic migration programs backed by empirical data.
            </p>
          </div>

          {/* Desktop 5-Step Horizontal Process Bar */}
          <div className="hidden lg:block relative pt-6 pb-2">
            {/* Connecting Line Across Steps */}
            <div className="absolute top-12 left-10 right-10 h-0.5 bg-slate-200 dark:bg-white/15 -z-0" />

            <div className="grid grid-cols-5 gap-4 relative z-10">
              {approachSteps.map((step, idx) => {
                const isActive = activeApproachStep === idx;
                return (
                  <button
                    key={step.step}
                    type="button"
                    onClick={() => setActiveApproachStep(idx)}
                    className="group text-left focus:outline-none cursor-pointer"
                  >
                    <div className="flex flex-col items-start space-y-3">
                      {/* Step Number Marker */}
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-mono font-bold text-sm transition-all shadow-sm ${
                        isActive
                          ? 'bg-[#00A3E0] text-white ring-4 ring-[#00A3E0]/20 scale-105'
                          : 'bg-white dark:bg-[#0B1528] text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-white/20 group-hover:border-[#00A3E0]'
                      }`}>
                        {step.step}
                      </div>

                      <div className="space-y-1">
                        <span className="text-[11px] font-mono font-bold uppercase text-[#00A3E0]">
                          STAGE {step.step}
                        </span>
                        <h3 className={`text-base font-bold transition-colors ${
                          isActive ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white'
                        }`}>
                          {step.title}
                        </h3>
                        <p className="text-xs text-slate-500 line-clamp-2">
                          {step.lead}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile Step Selector Pills */}
          <div className="lg:hidden flex items-center gap-2 overflow-x-auto pb-2 custom-scrollbar">
            {approachSteps.map((step, idx) => (
              <button
                key={step.step}
                type="button"
                onClick={() => setActiveApproachStep(idx)}
                className={`px-4 py-2 rounded-xl text-xs font-bold font-mono shrink-0 transition-colors ${
                  activeApproachStep === idx
                    ? 'bg-[#00A3E0] text-white'
                    : 'bg-white dark:bg-[#0B1528] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10'
                }`}
              >
                {step.step} — {step.title}
              </button>
            ))}
          </div>

          {/* Active Step Detailed Inspection Card */}
          {(() => {
            const current = approachSteps[activeApproachStep];
            return (
              <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 space-y-6 shadow-sm">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-white/10">
                  <div className="space-y-1">
                    <span className="text-xs font-mono font-bold text-[#00A3E0] uppercase tracking-wider block">
                      STAGE {current.step} EXECUTION DETAIL
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                      Step {current.step} — {current.title}: {current.lead}
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 text-xs font-mono font-bold uppercase self-start sm:self-center">
                    Methodology Phase
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {current.description}
                </p>

                {/* Key Activities */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                    CORE ACTIVITIES &amp; WORKSTREAMS
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {current.activities.map((act, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-slate-50 dark:bg-[#070E1E] border border-slate-200/80 dark:border-white/5 flex items-start gap-3"
                      >
                        <div className="w-5 h-5 rounded-full bg-[#00A3E0]/10 text-[#00A3E0] flex items-center justify-center font-mono text-[10px] font-bold shrink-0 mt-0.5">
                          {idx + 1}
                        </div>
                        <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                          {act}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stage Milestone */}
                <div className="p-4 rounded-2xl bg-[#F0F7FD] dark:bg-[#09152B] border border-[#00A3E0]/20 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00A3E0] shrink-0" />
                  <div className="text-xs sm:text-sm">
                    <span className="font-bold text-slate-900 dark:text-white">Target Milestone: </span>
                    <span className="text-slate-600 dark:text-slate-300">{current.milestone}</span>
                  </div>
                </div>

              </div>
            );
          })()}

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: CLOUD READINESS DELIVERABLES (7 Core Practical Outputs)
         ========================================================================= */}
      <section className="py-20 bg-white dark:bg-[#070E1C] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00A3E0] block">
                  ENGAGEMENT OUTPUTS
                </span>
                <span className="text-slate-300 dark:text-slate-700">&bull;</span>
                <button
                  type="button"
                  onClick={() => {
                    if (deliverableResumeTimeoutRef.current) {
                      clearTimeout(deliverableResumeTimeoutRef.current);
                    }
                    setIsDeliverableUserPaused(false);
                    setIsDeliverableAutoPlaying(!isDeliverableAutoPlaying);
                  }}
                  className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] hover:bg-cyan-100 dark:hover:bg-cyan-500/20 transition-colors cursor-pointer"
                  title={isDeliverableAutoPlaying ? "Click to Pause Auto-Cycle" : "Click to Resume Auto-Cycle"}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isDeliverableAutoPlaying && !isDeliverableUserPaused ? 'bg-emerald-500 animate-pulse' : isDeliverableUserPaused ? 'bg-amber-500' : 'bg-slate-400'}`} />
                  <span>
                    {!isDeliverableAutoPlaying
                      ? 'Paused'
                      : isDeliverableUserPaused
                      ? 'Paused on Click'
                      : 'Auto-Cycle (1s)'}
                  </span>
                </button>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 dark:text-white tracking-tight">
                What Your Readiness Assessment Delivers
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Our assessment concludes with comprehensive, board-ready architectural documentation and technical workbooks that serve as the single source of truth for your cloud transformation.
              </p>
            </div>
          </div>

          {/* Deliverables Interactive Document Dossier */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: 7 Deliverables List (Drops down automatically one by one) */}
            <div className="lg:col-span-5 space-y-2.5">
              {deliverables.map((item, idx) => {
                const isActive = activeDeliverableTab === idx;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelectDeliverable(idx)}
                    className={`relative w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-center justify-between border cursor-pointer ${
                      isActive
                        ? 'bg-[#F0F7FD] dark:bg-[#0B1528] border-[#00A3E0] shadow-md shadow-[#00A3E0]/10 translate-x-1'
                        : 'bg-white dark:bg-[#070E1E] border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20'
                    }`}
                  >
                    {/* Visual left drop indicator on the active item */}
                    {isActive && (
                      <span className="absolute left-0 top-2.5 bottom-2.5 w-1 bg-[#00A3E0] rounded-r-full shadow-sm shadow-[#00A3E0]/50" />
                    )}

                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-bold shrink-0 transition-colors ${
                        isActive
                          ? 'bg-[#00A3E0] text-white shadow-sm shadow-[#00A3E0]/30'
                          : 'bg-slate-100 dark:bg-white/5 text-slate-500'
                      }`}>
                        0{idx + 1}
                      </div>
                      <span className={`text-xs sm:text-sm font-semibold truncate transition-colors ${
                        isActive ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300'
                      }`}>
                        {item.title}
                      </span>
                    </div>

                    <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${
                      isActive ? 'text-[#00A3E0] translate-x-1' : 'text-slate-400'
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Right Column: Deliverable Dossier Preview Sheet */}
            <div 
              className="lg:col-span-7"
              onMouseEnter={() => setIsDeliverableHovered(true)}
              onMouseLeave={() => setIsDeliverableHovered(false)}
            >
              {(() => {
                const activeDoc = deliverables[activeDeliverableTab];
                return (
                  <div key={activeDoc.id} className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 space-y-6 shadow-sm transition-all duration-300">
                    
                    {/* Document Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-200 dark:border-white/10">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-[#00A3E0]" />
                          <span className="text-xs font-mono font-bold text-[#00A3E0] uppercase tracking-wider">
                            DELIVERABLE 0{activeDeliverableTab + 1}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white">
                          {activeDoc.title}
                        </h3>
                      </div>

                      <span className="px-3 py-1 rounded-full bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-slate-300 text-xs font-mono font-bold self-start">
                        {activeDoc.format}
                      </span>
                    </div>

                    {/* Summary Narrative */}
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {activeDoc.summary}
                    </p>

                    {/* Deliverable Inclusions */}
                    <div className="space-y-3 pt-2">
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                        TECHNICAL CONTENT INCLUDED IN THIS ARTIFACT
                      </h4>
                      <div className="space-y-2.5">
                        {activeDoc.highlights.map((point, idx) => (
                          <div
                            key={idx}
                            className="p-3.5 rounded-xl bg-white dark:bg-[#070E1E] border border-slate-200/80 dark:border-white/5 flex items-start gap-3"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                              {point}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Standardized Governance Footer */}
                    <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs text-slate-500 font-mono">
                      <span>Standard Formats: PDF, XLSX, Draw.io / Visio</span>
                      <span className="text-[#00A3E0] font-bold">Executive Board Ready</span>
                    </div>

                  </div>
                );
              })()}
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: CLOUD READINESS CTA SECTION (Distinctive Architecture Banner)
         ========================================================================= */}
      <section className="py-20 bg-slate-50 dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-800 bg-[#070E1E] text-white">
            
            {/* Background Image with Dark Vignette Overlay */}
            <div className="absolute inset-0 z-0">
              <img
                src="/images/cloud/cloud_readiness_infra.jpg"
                alt="Knooviq Cloud Infrastructure and Data Center Environment"
                className="w-full h-full object-cover opacity-25"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#070E1E] via-[#070E1E]/95 to-[#070E1E]/80" />
            </div>

            {/* CTA Content Container */}
            <div className="relative z-10 p-8 sm:p-12 lg:p-16 space-y-8 max-w-3xl">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00A3E0]/15 border border-[#00A3E0]/30 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#00A3E0]" />
                <span>EXECUTIVE ADVISORY WORKSHOP</span>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                  Ready to Understand Your Cloud Readiness?
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed">
                  Identify your cloud adoption priorities, address readiness gaps, and establish a clear path toward a secure and well-planned cloud environment.
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0" />
                  <span>Agentless IT Discovery</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0" />
                  <span>Objective 7 R’s Classification</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0" />
                  <span>FinOps TCO Savings Plan</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={handleDiscussReadiness}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#00A3E0] to-[#0077B6] hover:from-[#38BDF8] hover:to-[#00A3E0] text-white font-bold text-sm tracking-wide transition-all shadow-lg shadow-[#00A3E0]/30 flex items-center gap-2.5 cursor-pointer group"
                >
                  <span>Talk to Our Cloud Experts</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <Link
                  to="/cloud-operations/strategy"
                  className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 hover:text-white border border-white/20 font-bold text-sm tracking-wide transition-all flex items-center gap-2 group"
                >
                  <span>Explore Cloud Strategy</span>
                  <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 8: RELATED CLOUD & OPERATIONS SERVICES (Compact 4-Card Grid)
         ========================================================================= */}
      <section className="py-20 bg-white dark:bg-[#070E1C] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00A3E0] block">
                COMPLEMENTARY DISCIPLINES
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight mt-1">
                Related Cloud &amp; Operations Services
              </h2>
            </div>
            
            <Link
              to="/cloud-operations"
              className="text-xs font-bold text-[#00A3E0] hover:underline flex items-center gap-1 group"
            >
              <span>View Full Cloud Suite</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* 4 Related Cards Grid (Readable Information Cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedServices.map((service) => (
              <div
                key={service.title}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white dark:bg-white/5 text-slate-600 dark:text-slate-400">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 9: FREQUENTLY ASKED QUESTIONS (Enterprise FAQ Accordion)
         ========================================================================= */}
      <section className="py-20 bg-slate-50 dark:bg-[#050B17] transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00A3E0] block">
              READINESS CLARITY
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
              Answers to common executive and technical questions regarding Knooviq&apos;s Cloud Readiness Assessment engagement.
            </p>
          </div>

          <div className="space-y-3">
            {readinessFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                      {faq.q}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center shrink-0 text-slate-500">
                      {isOpen ? <ChevronUp className="w-4 h-4 text-[#00A3E0]" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-white/5">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};
