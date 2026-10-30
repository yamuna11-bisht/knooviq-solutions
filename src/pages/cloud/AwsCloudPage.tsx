import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Cloud,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Cpu,
  Layers,
  ChevronDown,
  ChevronUp,
  Shield,
  Activity,
  Server,
  Zap,
  Lock,
  Database,
  BarChart3,
  Network,
  Sparkles,
  ArrowUpRight,
  Clock,
  Compass,
  FileCheck2,
  GitBranch,
  KeyRound,
  Boxes,
  Maximize2,
  X,
  SlidersHorizontal,
  HardDrive,
  Workflow,
  Radio,
  Scale
} from 'lucide-react';
import { RelatedCloudServices } from '../../components/cloud/RelatedCloudServices';

interface ChildPageProps {
  onOpenContact?: (topic?: string) => void;
}

interface LightboxState {
  url: string;
  title: string;
  subtitle: string;
}

// 1. AWS Cloud Architecture: 5 Technical Tiers
const awsArchitectureTiers = [
  {
    id: 'connectivity-edge',
    tierNumber: 'Tier 01',
    name: 'Connectivity & Edge',
    tagline: 'Amazon VPC, Transit Gateway, Direct Connect & CloudFront Edge',
    description:
      'Establishes enterprise-grade hybrid cloud interconnects, micro-segmented virtual private clouds (VPCs), and low-latency global content delivery.',
    services: [
      { name: 'Amazon VPC', role: 'Isolated private cloud networks with custom IPv4/IPv6 CIDR subnets and route tables' },
      { name: 'AWS Transit Gateway', role: 'Centralized hub routing network traffic across hundreds of VPCs and on-premises sites' },
      { name: 'AWS Direct Connect', role: 'Dedicated 10Gbps/100Gbps private fiber connection bypassing the public internet' },
      { name: 'Amazon CloudFront & Route 53', role: 'Global edge caching network with low-latency DNS routing and DDoS mitigation' },
      { name: 'AWS PrivateLink', role: 'Secure private connectivity to AWS managed services without internet gateways' }
    ],
    technicalHighlights: [
      'Sub-millisecond inter-VPC transit routing latency',
      'End-to-end MACsec encryption on Direct Connect circuits',
      'Automated VPC peering mesh with centralized egress inspection'
    ]
  },
  {
    id: 'compute-applications',
    tierNumber: 'Tier 02',
    name: 'Compute & Applications',
    tagline: 'Amazon EC2 Nitro, Amazon EKS, AWS Lambda & Fargate',
    description:
      'Provides scalable compute fabrics tailored for high-throughput transactional backends, container microservices, and event-driven serverless functions.',
    services: [
      { name: 'Amazon EC2 (Nitro System)', role: 'High-performance compute instances with hardware-offloaded virtualization' },
      { name: 'Amazon EKS (Kubernetes)', role: 'Certified managed Kubernetes with Karpenter dynamic node autoscaling' },
      { name: 'AWS Lambda', role: 'Stateless serverless compute executing code in response to system triggers and events' },
      { name: 'AWS Fargate', role: 'Serverless container execution without managing underlying EC2 virtual machines' },
      { name: 'Elastic Load Balancing (ALB/NLB)', role: 'High-availability traffic distribution across multi-AZ targets with TLS offloading' }
    ],
    technicalHighlights: [
      'Sub-minute Karpenter pod autoscaling scaling 10 to 1,000+ pods',
      'High-memory EC2 bare metal instances certified for SAP HANA workloads',
      'Zero idle server costs for event-driven serverless microservices'
    ]
  },
  {
    id: 'data-storage',
    tierNumber: 'Tier 03',
    name: 'Data & Storage',
    tagline: 'Amazon S3, Amazon RDS, Aurora Multi-AZ & DynamoDB',
    description:
      'Delivers petabyte-scale durable object storage, mission-critical relational clustering, and single-digit millisecond NoSQL engines.',
    services: [
      { name: 'Amazon S3 & Glacier', role: '99.999999999% (11 9s) durable object storage with Intelligent-Tiering policies' },
      { name: 'Amazon Aurora Multi-AZ', role: 'High-performance cloud-native MySQL/PostgreSQL with 6-way automated storage replication' },
      { name: 'Amazon RDS (PostgreSQL/SQL Server)', role: 'Managed relational databases with automated patching, backups, and read replicas' },
      { name: 'Amazon DynamoDB', role: 'Fully managed serverless key-value NoSQL database delivering single-digit millisecond latency' },
      { name: 'Amazon EBS (io2 Block Express)', role: 'Sub-millisecond SAN block storage designed for tier-1 database transaction engines' }
    ],
    technicalHighlights: [
      'Automated cross-region database failover within 30 seconds',
      'S3 lifecycle rules reducing archive retention spend by up to 70%',
      'Continuous Point-In-Time Recovery (PITR) with zero data loss'
    ]
  },
  {
    id: 'security-governance',
    tierNumber: 'Tier 04',
    name: 'Security & Governance',
    tagline: 'AWS IAM Identity Center, Control Tower, KMS & GuardDuty',
    description:
      'Implements zero-trust identity federation, multi-account Service Control Policies (SCPs), hardware encryption, and continuous threat monitoring.',
    services: [
      { name: 'AWS IAM Identity Center (SSO)', role: 'Centralized workforce single sign-on with time-bound role-based privilege elevation' },
      { name: 'AWS Control Tower & Organizations', role: 'Multi-account landing zone governance with automated compliance guardrails' },
      { name: 'AWS Key Management Service (KMS)', role: 'Hardware-backed cryptographic key lifecycle management with automated rotation' },
      { name: 'Amazon GuardDuty & Security Hub', role: 'Intelligent ML-driven threat detection and centralized posture scoring' },
      { name: 'AWS WAF & Shield Advanced', role: 'Web application firewall with managed rule sets and Layer 3/4/7 DDoS protection' }
    ],
    technicalHighlights: [
      'Elimination of static IAM user access keys across 100% of accounts',
      'Automated baseline compliance against CIS AWS Foundations & NIST 800-53',
      'Immutable CloudTrail audit log vault with cross-region replication'
    ]
  },
  {
    id: 'operations-observability',
    tierNumber: 'Tier 05',
    name: 'Operations & Observability',
    tagline: 'Amazon CloudWatch, AWS Systems Manager & Cost Explorer',
    description:
      'Ensures continuous operational health with unified telemetry dashboards, automated patch runbooks, distributed tracing, and FinOps unit cost modeling.',
    services: [
      { name: 'Amazon CloudWatch', role: 'Real-time infrastructure metrics, distributed log aggregation, and composite alarms' },
      { name: 'AWS CloudTrail', role: 'Immutable event tracking recording every API call and console administrative action' },
      { name: 'AWS Systems Manager', role: 'Fleet patch management, inventory auditing, and secure Session Manager access without open SSH ports' },
      { name: 'AWS X-Ray & OpenTelemetry', role: 'End-to-end distributed transaction tracing identifying microservice latency bottlenecks' },
      { name: 'AWS Cost Explorer & Compute Optimizer', role: 'ML-based rightsizing recommendations, Savings Plans modeling, and anomaly alerts' }
    ],
    technicalHighlights: [
      'Automated self-healing EventBridge workflows triggering SSM runbooks',
      'Centralized FinOps cost allocation tagging enforced via Control Tower',
      'Zero-bastion secure remote server access through AWS Session Manager'
    ]
  }
];

// 2. AWS Migration & Modernization Phases
const migrationMethodology = [
  {
    phase: 'Stage 01',
    title: 'Workload Discovery & Dependency Mapping',
    badge: 'DISCOVERY',
    description: 'We deploy agentless scanners and AWS Migration Evaluator to profile server fleets, CPU/RAM utilization, storage IOPS, and network interconnect dependencies.',
    deliverable: 'Comprehensive Workload Inventory & 3-Year TCO Business Case',
    milestone: 'C-suite financial sign-off & AWS MAP funding credit qualification'
  },
  {
    phase: 'Stage 02',
    title: 'Dependency Assessment & 7Rs Strategy',
    badge: 'STRATEGY',
    description: 'Each application is mapped to the optimal 7Rs migration strategy: Rehost, Replatform, Refactor, Repurchase, Retire, Retain, or Relocate based on business priority.',
    deliverable: 'Application Rationalization Matrix & Target Architecture Blueprints',
    milestone: 'Validated migration wave sequencing & risk containment plan'
  },
  {
    phase: 'Stage 03',
    title: 'Landing Zone Foundation & Security Setup',
    badge: 'FOUNDATION',
    description: 'We provision an enterprise AWS Control Tower multi-account environment with Transit Gateway networking, IAM federation, and automated Service Control Policies.',
    deliverable: 'Production-Ready AWS Multi-Account Landing Zone',
    milestone: 'Infosec sign-off on KMS encryption & network egress controls'
  },
  {
    phase: 'Stage 04',
    title: 'Migration Factory Execution & Modernization',
    badge: 'EXECUTION',
    description: 'We execute automated block-level server replication via AWS Application Migration Service (MGN) and continuous database replication with AWS DMS.',
    deliverable: 'Non-Disruptive Migration Wave Pipelines & Test Validation Reports',
    milestone: 'Production cutovers completed with minimal maintenance windows'
  },
  {
    phase: 'Stage 05',
    title: 'Post-Migration Validation & Optimization',
    badge: 'VALIDATION',
    description: 'Post-cutover smoke testing, performance benchmark comparison, automated backup policy verification, and activation of 24/7 CloudWatch observability.',
    deliverable: 'Operational Handover Runbook & FinOps Rightsizing Plan',
    milestone: 'Full workload stability verified with 99.99% availability SLAs'
  }
];

// 3. AWS Security & Governance Pillars
const securityPillars = [
  {
    id: 'iam',
    title: 'Identity & Access Management (IAM)',
    badge: 'ZERO-TRUST ACCESS',
    description: 'Centralized workforce authentication via AWS IAM Identity Center integrated with enterprise Azure AD/Okta directories. Elimination of long-lived access keys in favor of short-lived session roles.',
    controls: ['IAM Identity Center SAML 2.0 federation', 'Least-privilege permission boundaries', 'Temporary STS session credentials', 'Service Control Policies (SCPs) regional lockdowns']
  },
  {
    id: 'network-sec',
    title: 'Network Security & Boundary Defense',
    badge: 'PERIMETER SHIELD',
    description: 'Multi-layer network isolation utilizing private subnets, AWS Network Firewall for stateful inspection, and AWS PrivateLink to eliminate public internet exposure.',
    controls: ['AWS Network Firewall with Snort IPS rules', 'Strict security groups and NACL filtering', 'AWS WAF Layer 7 inspection against OWASP Top 10', 'AWS Shield Advanced managed DDoS protection']
  },
  {
    id: 'encryption',
    title: 'Cryptographic Protection & Key Governance',
    badge: 'DATA PROTECTION',
    description: 'Universal encryption across data-at-rest and data-in-transit utilizing customer-managed KMS keys with automated rotation and CloudHSM FIPS 140-2 Level 3 cryptographic hardware.',
    controls: ['AWS KMS Customer Managed Keys (CMKs)', 'Enforced TLS 1.3 across all load balancers', 'EBS & S3 default KMS encryption policies', 'Dedicated AWS CloudHSM dedicated clusters']
  },
  {
    id: 'logging-threats',
    title: 'Logging, Auditing & Threat Detection',
    badge: 'CONTINUOUS TELEMETRY',
    description: 'Aggregating immutable audit trails across all AWS accounts into a centralized Log Archive account, analyzed continuously by machine learning anomaly engines.',
    controls: ['Multi-region AWS CloudTrail audit logging', 'Amazon GuardDuty ML threat detection', 'AWS Config continuous drift evaluation', 'AWS Security Hub aggregated compliance scoring']
  },
  {
    id: 'governance-compliance',
    title: 'Governance, Backup & Disaster Recovery',
    badge: 'RESILIENCE POSTURE',
    description: 'Automating enterprise backup policies, cross-region immutable vaults with WORM lock, and standardized Account Factory deployment via AWS Control Tower.',
    controls: ['AWS Backup cross-region automated policies', 'Immutable air-gapped backup vaults', 'RPO < 15 mins & RTO < 1 hour target benchmarks', 'Compliance benchmarking against CIS AWS & SOC 2']
  }
];

// 4. AWS Application & Platform Engineering Capabilities
const appEngineeringCards = [
  {
    title: 'Cloud-Native & Microservices',
    tagline: 'Decoupled, Resilient Application Architectures',
    description: 'Transform legacy monolithic codebases into loosely coupled, scalable microservices using Domain-Driven Design (DDD) and API-first contract development.',
    icon: Boxes,
    features: ['Strangler-fig legacy migration facades', 'Event-driven pub/sub communication', 'Independent microservice deployment pipelines']
  },
  {
    title: 'Serverless Computing',
    tagline: 'Zero-Maintenance, Auto-Scaling Runtimes',
    description: 'Build enterprise workloads on AWS Lambda, Amazon EventBridge, and AWS Step Functions, paying only for milliseconds of compute consumed with zero idle costs.',
    icon: Zap,
    features: ['EventBridge routing across SaaS & custom APIs', 'AWS Step Functions visual workflow orchestration', 'Amazon SQS FIFO & SNS decoupled messaging']
  },
  {
    title: 'Container Platforms (EKS & Fargate)',
    tagline: 'High-Density Production Kubernetes',
    description: 'Enterprise container orchestration on Amazon EKS with Karpenter autoscaling, GitOps continuous delivery, and AWS Fargate serverless container nodes.',
    icon: Cpu,
    features: ['Sub-minute Karpenter pod node provisioning', 'Cilium eBPF high-performance network security', 'Amazon ECR automated vulnerability scanning']
  },
  {
    title: 'API Integration & Edge Delivery',
    tagline: 'Global Edge Caching & Secure Gateways',
    description: 'Expose secure, monitored REST and WebSocket endpoints with Amazon API Gateway, protected by AWS WAF and accelerated globally by Amazon CloudFront.',
    icon: Radio,
    features: ['Sub-50ms global API response times', 'Token-based rate limiting & API throttling', 'CloudFront edge TLS offload & caching']
  },
  {
    title: 'CI/CD & DevOps Automation',
    tagline: 'Automated Build, Test & Deployment',
    description: 'Continuous integration and delivery pipelines utilizing AWS CodePipeline, GitHub Actions runners, and automated blue/green canary deployments with zero downtime.',
    icon: GitBranch,
    features: ['Automated unit, security, and integration testing', 'Canary deployments with automated CloudWatch rollback', 'Hardened AMI and container image factories']
  },
  {
    title: 'Infrastructure as Code (IaC)',
    tagline: 'Declarative, Version-Controlled Infrastructure',
    description: 'Manage 100% of AWS cloud resources through declarative Terraform and AWS Cloud Development Kit (CDK) scripts, eliminating manual configuration drift.',
    icon: Workflow,
    features: ['Terraform modular enterprise landing zones', 'GitOps declarative cluster sync with ArgoCD', 'Automated drift detection & policy-as-code']
  }
];

// 5. AWS Data, Analytics & AI Suite
const dataAnalyticsServices = [
  {
    name: 'Amazon S3 Data Lake',
    category: 'OBJECT STORAGE FOUNDATION',
    description: 'Centralized, infinitely scalable data lake storage foundation holding structured and unstructured corporate data with Lake Formation security controls.',
    role: 'Central single source of truth with granular table-level and column-level access controls.'
  },
  {
    name: 'AWS Glue',
    category: 'SERVERLESS DATA INTEGRATION',
    description: 'Serverless data preparation and ETL service with automated schema discovery crawlers and centralized AWS Glue Data Catalog integration.',
    role: 'Automates data ingestion, cleaning, transformation, and partition indexing without servers.'
  },
  {
    name: 'Amazon Redshift',
    category: 'PETABYTE CLOUD DATA WAREHOUSE',
    description: 'High-performance SQL data warehousing with columnar storage, Redshift Serverless auto-scaling, and Redshift Spectrum querying directly on S3 data lakes.',
    role: 'Runs complex analytical queries across petabytes of data with sub-second response times.'
  },
  {
    name: 'Amazon Athena',
    category: 'SERVERLESS INTERACTIVE SQL',
    description: 'Serverless interactive query service that makes it easy to analyze data directly in Amazon S3 using standard ANSI SQL without database setup.',
    role: 'Pay-per-query model enabling instant exploratory analysis on Parquet and JSON datasets.'
  },
  {
    name: 'Amazon SageMaker & Bedrock',
    category: 'ENTERPRISE AI & MACHINE LEARNING',
    description: 'End-to-end platform for building, training, and deploying ML models alongside Amazon Bedrock serverless foundation model APIs for generative AI applications.',
    role: 'Powers predictive analytics, forecasting engines, and generative AI copilot applications securely.'
  }
];

// 6. AWS Reliability, Operations & Cost Optimization Tiers
const opsReliabilityAreas = [
  {
    title: 'Observability & Full-Stack Telemetry',
    icon: Activity,
    points: [
      'Amazon CloudWatch custom dashboards tracking SLIs/SLOs across compute, databases, and APIs',
      'AWS X-Ray distributed transaction tracing pinpointing downstream microservice latency',
      'OpenTelemetry standardized metric and trace collection fed into OpenSearch clusters'
    ]
  },
  {
    title: 'Multi-AZ High Availability & Resilience',
    icon: Shield,
    points: [
      'Multi-Availability Zone active-active deployment isolating failure domains across physical datacenters',
      'Amazon Aurora automated multi-AZ storage replication across 3 AZs with sub-30s failover',
      'Amazon Route 53 health checking routing traffic dynamically away from degraded endpoints'
    ]
  },
  {
    title: 'Incident Management & SRE Runbooks',
    icon: Zap,
    points: [
      'AWS Systems Manager OpsCenter centralizing operational items from CloudWatch alarms',
      'Amazon EventBridge automated event rules executing self-healing remediation Lambda scripts',
      '24/7 AWS Certified Cloud Operations Engineers monitoring and resolving incidents'
    ]
  },
  {
    title: 'Backup, Disaster Recovery & Compliance',
    icon: Lock,
    points: [
      'Centralized AWS Backup policies managing automated snapshots across EC2, RDS, EBS, and EFS',
      'Air-gapped cross-region backup vaults protected with AWS Backup Vault Lock (WORM)',
      'Pilot-light and warm-standby DR architectures delivering strict RPO < 15m and RTO < 1h'
    ]
  },
  {
    title: 'FinOps & Continuous Cost Optimization',
    icon: TrendingUp,
    points: [
      'Strategic 1-year and 3-year Compute Savings Plans and Reserved Instances delivering up to 72% discounts',
      'AWS Graviton3 and Graviton4 ARM-based instance migration yielding up to 40% better price-performance',
      'Amazon S3 Intelligent-Tiering and lifecycle rules cutting cold storage expenses by 50%+'
    ]
  }
];

// 7. AWS Engagement Timeline (Horizontal 5-Step Roadmap)
const engagementSteps = [
  {
    step: '01',
    name: 'Discover',
    tagline: 'Workload & Financial Discovery',
    description: 'Inventory application estates, profile CPU/RAM/IOPS workloads, and build an accurate AWS 3-year TCO financial business case with MAP funding evaluation.',
    deliverable: 'Migration Readiness Assessment & TCO Charter'
  },
  {
    step: '02',
    name: 'Architect',
    tagline: 'Target Landing Zone Design',
    description: 'Design multi-account AWS Control Tower governance, Transit Gateway networking, IAM federation, and Architecture Decision Records (ADRs).',
    deliverable: 'Target AWS High-Level & Low-Level Design (HLD/LLD)'
  },
  {
    step: '03',
    name: 'Migrate & Build',
    tagline: 'Factory Execution & Modernization',
    description: 'Establish automated migration pipelines via AWS MGN and DMS, configure Amazon EKS clusters, and execute prioritized pilot and production waves.',
    deliverable: 'Migration Wave Runbooks & Target Environments'
  },
  {
    step: '04',
    name: 'Validate',
    tagline: 'Testing & Cutover Readiness',
    description: 'Execute automated non-disruptive cutover testing, performance benchmarking, disaster recovery simulation, and InfoSec security compliance sign-off.',
    deliverable: 'Cutover Runbook & Verification Sign-off'
  },
  {
    step: '05',
    name: 'Operate & Improve',
    tagline: '24/7 SRE & Continuous FinOps',
    description: 'Transition to 24/7 managed AWS operations with CloudWatch monitoring, continuous Savings Plans management, and quarterly Well-Architected reviews.',
    deliverable: '24/7 SLA Operations & FinOps Cost Reports'
  }
];

// Enterprise AWS FAQs
const awsFaqs = [
  {
    question: 'What is the AWS Migration Acceleration Program (MAP) and how does KNOOVIQ help?',
    answer:
      'The AWS Migration Acceleration Program (MAP) provides financial credits, training, and certified methodologies to significantly offset migration costs. As an enterprise AWS consulting partner, KNOOVIQ guides you through the Assess, Mobilize, and Migrate phases, securing AWS funding credits that can offset up to 25% to 50% of partner consulting and migration service fees.'
  },
  {
    question: 'How does KNOOVIQ ensure zero-downtime database migrations to Amazon Aurora and RDS?',
    answer:
      'We combine AWS Database Migration Service (DMS) with AWS Schema Conversion Tool (SCT). AWS DMS performs continuous Change Data Capture (CDC), replicating live transactional changes in real-time from source on-premise databases (Oracle, Microsoft SQL Server, PostgreSQL, MySQL) to the target AWS Aurora database. Final production cutover is scheduled during a brief maintenance window that typically takes less than 15 minutes.'
  },
  {
    question: 'What is AWS Control Tower and why is a multi-account landing zone essential?',
    answer:
      'AWS Control Tower sets up and governs an enterprise-ready multi-account AWS environment using AWS Organizations. Instead of hosting production, staging, and security in a single account, Control Tower isolates workloads into dedicated organizational units (OUs), enforces mandatory Service Control Policies (SCPs), centralizes audit logging into an immutable Log Archive, and ensures continuous compliance against CIS AWS benchmarks.'
  },
  {
    question: 'Can you migrate mission-critical SAP workloads to Amazon Web Services?',
    answer:
      'Yes. KNOOVIQ specializes in migrating SAP S/4HANA, SAP ECC 6.0, and SAP BW/4HANA to AWS. We utilize certified Amazon EC2 High Memory instances (scaling up to 24TiB of RAM), Amazon EBS io2 Block Express sub-millisecond volumes, and AWS Launch Wizard for SAP to deliver high-availability clustered SAP architectures backed by strict 99.99% availability SLAs.'
  },
  {
    question: 'How do you optimize AWS cloud spend and implement FinOps after migration?',
    answer:
      'We implement a continuous FinOps governance model combining AWS Cost Explorer, Compute Optimizer, and automated rightsizing routines. We strategically manage 1-year and 3-year Compute Savings Plans and Reserved Instances, migrate suitable workloads to high-efficiency AWS Graviton3/Graviton4 ARM processors, and implement S3 Intelligent-Tiering to reduce baseline AWS expenditure by 30% to 40%.'
  }
];

export const AwsCloudPage: React.FC<ChildPageProps> = ({ onOpenContact }) => {
  const [activeArchTier, setActiveArchTier] = useState<number>(0);
  const [archTierDelay, setArchTierDelay] = useState<number>(3000);
  const [archTierTrigger, setArchTierTrigger] = useState<number>(0);

  const [activeSecurityPillar, setActiveSecurityPillar] = useState<number>(0);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [lightboxImage, setLightboxImage] = useState<LightboxState | null>(null);

  // Automatically cycle through AWS Architecture Tiers from top to bottom (Tier 01 to 05, then loop)
  // When user clicks any tier: wait for 3 seconds (3000ms), then continue automatically.
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveArchTier((current) => (current + 1) % awsArchitectureTiers.length);
      setArchTierDelay(3000);
    }, archTierDelay);

    return () => clearTimeout(timer);
  }, [activeArchTier, archTierDelay, archTierTrigger]);

  const handleSelectArchTier = (idx: number) => {
    setActiveArchTier(idx);
    setArchTierDelay(3000); // Wait for 3 seconds, then continue
    setArchTierTrigger((prev) => prev + 1);
  };

  useEffect(() => {
    document.title = 'Amazon Web Services (AWS) Consulting & Cloud Architecture | KNOOVIQ';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleDiscussStrategy = () => {
    if (onOpenContact) {
      onOpenContact('AWS Cloud Strategy & Migration');
    }
  };

  const handleExploreSolutions = () => {
    const el = document.getElementById('aws-architecture');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#050B17] text-slate-900 dark:text-white transition-colors duration-300 selection:bg-[#FF9900]/20 selection:text-[#FF9900]">

      {/* ============================================================ */}
      {/* 1. HERO SECTION: Full-Screen Panoramic Hero with Full-Bleed AWS Image & Text Overlay */}
      {/* ============================================================ */}
      <section className="relative w-full min-h-[calc(100vh-5rem)] flex items-center bg-[#050B17] text-white overflow-hidden border-b border-slate-800">
        
        {/* Full-Bleed Panoramic Background Image — Spans 100% of Screen */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/cloud/aws/aws_datacenter_hero.jpg"
            alt="Amazon Web Services Enterprise Practice"
            className="w-full h-full object-cover object-center lg:object-[65%_center] filter brightness-105 contrast-105"
          />
          {/* Directional scrim: smoothly protects text readability on the left while keeping center & right visuals 100% bright */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050B17] via-[#050B17]/85 sm:via-[#050B17]/70 md:via-[#050B17]/50 to-transparent w-full lg:w-3/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050B17] via-transparent to-[#050B17]/50" />
          <div className="absolute inset-0 bg-[radial-gradient(#FF9900_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-16 sm:py-20 lg:py-24 space-y-8">
          
          {/* Top Breadcrumb & Badge */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-md backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#FF9900] animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                AWS CONSULTING &amp; MANAGED SERVICES
              </span>
            </div>

            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-800">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-slate-600">/</span>
              <Link to="/cloud-operations" className="hover:text-white transition-colors">Cloud</Link>
              <span className="text-slate-600">/</span>
              <span className="text-[#FF9900]">AWS</span>
            </nav>
          </div>

          {/* Text Content Block */}
          <div className="max-w-2xl lg:max-w-3xl space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.12] drop-shadow-md">
              Build, Modernize and Scale on{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-200 to-[#FF9900]">
                Amazon Web Services
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl drop-shadow-sm">
              Help enterprises design secure, resilient, and scalable AWS environments through cloud strategy,
              infrastructure architecture, migration, application modernization, security, and managed operations.
            </p>


            {/* Value Bullet Bar */}
            <div className="pt-4 border-t border-slate-700/60 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF9900] shrink-0" />
                <span>MAP Funding Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Well-Architected</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF9900] shrink-0" />
                <span>Zero Cutover Loss</span>
              </div>
            </div>
          </div>

          {/* Key Metric Highlights Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            {[
              { value: 'Up to 50%', label: 'AWS MAP Cost Offsets', detail: 'Migration funding & service fee credits' },
              { value: '< 15 Mins', label: 'Cutover Downtime Window', detail: 'Continuous block replication via AWS MGN' },
              { value: '35% - 40%', label: 'Baseline Cost Reduction', detail: 'FinOps Savings Plans & Graviton processors' },
              { value: '99.99%', label: 'Enterprise Uptime SLA', detail: 'Multi-AZ Aurora & Karpenter auto-scaling' }
            ].map((stat, sIdx) => (
              <div
                key={sIdx}
                className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-slate-800/90 hover:border-slate-700 transition-colors space-y-1 shadow-lg"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-[#FF9900]">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 1: AWS CLOUD ARCHITECTURE                            */}
      {/* Custom architecture visualization across 5 tiers             */}
      {/* ============================================================ */}
      <section id="aws-architecture" className="py-20 lg:py-24 bg-slate-50 dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              <span>TECHNICAL FOUNDATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              AWS Cloud Architecture &amp; Platform Tiers
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Our architecture practice structures enterprise AWS environments into five modular, resilient technical layers.
              From hybrid Direct Connect transit routing to serverless runtimes and automated SRE runbooks, each tier is
              governed by strict Well-Architected reliability standards.
            </p>
          </div>

          {/* Interactive 5-Tier Architecture Explorer */}
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B1528] p-6 lg:p-8 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: 5 Tier Navigators */}
              <div className="lg:col-span-5 space-y-2.5">
                <div className="text-xs font-mono font-bold uppercase text-slate-500 pb-1 border-b border-slate-200 dark:border-slate-800">
                  EXPLORE ARCHITECTURAL LAYERS:
                </div>
                {awsArchitectureTiers.map((tier, idx) => {
                  const isActive = activeArchTier === idx;
                  return (
                    <button
                      key={tier.id}
                      onClick={() => handleSelectArchTier(idx)}
                      className={`relative w-full p-4 rounded-2xl text-left transition-all duration-300 border cursor-pointer overflow-hidden ${
                        isActive
                          ? 'bg-cyan-50/90 dark:bg-cyan-950/50 border-[#00A3E0] shadow-md ring-1 ring-[#00A3E0]/30'
                          : 'bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      {/* Active Live Progress Indicator */}
                      {isActive && (
                        <div
                          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#FF9900] via-cyan-400 to-[#00A3E0] animate-pulse"
                          style={{ width: '100%' }}
                        />
                      )}
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono font-bold text-[#FF9900]">
                          {tier.tierNumber}
                        </span>
                        {isActive && <span className="w-2 h-2 rounded-full bg-[#00A3E0] animate-pulse" />}
                      </div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white mt-1">
                        {tier.name}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                        {tier.tagline}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Right Column: Active Tier Blueprint & Services */}
              <div
                key={activeArchTier}
                className="lg:col-span-7 rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-6 sm:p-7 space-y-6 transition-all duration-300"
              >
                <div className="space-y-1.5">
                  <div className="text-xs font-mono font-bold text-[#FF9900] uppercase tracking-wider">
                    {awsArchitectureTiers[activeArchTier].tierNumber} &bull; COMPONENT SPECIFICATION
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {awsArchitectureTiers[activeArchTier].name}
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-600 dark:text-cyan-400 font-medium">
                    {awsArchitectureTiers[activeArchTier].tagline}
                  </p>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {awsArchitectureTiers[activeArchTier].description}
                </p>

                {/* Services Grid */}
                <div className="space-y-3 pt-2 border-t border-slate-200 dark:border-slate-800">
                  <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                    CORE AWS SERVICES IN THIS TIER:
                  </h4>
                  <div className="space-y-2">
                    {awsArchitectureTiers[activeArchTier].services.map((svc, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs"
                      >
                        <span className="font-bold text-slate-900 dark:text-white font-mono flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3E0]" />
                          {svc.name}
                        </span>
                        <span className="text-slate-600 dark:text-slate-300 sm:text-right text-[11px] max-w-sm">
                          {svc.role}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Highlights */}
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs space-y-1">
                  <div className="font-mono font-bold text-amber-600 dark:text-amber-400">
                    ARCHITECTURAL BENCHMARK &amp; GUARANTEE:
                  </div>
                  <ul className="space-y-1 text-slate-700 dark:text-slate-300">
                    {awsArchitectureTiers[activeArchTier].technicalHighlights.map((th, tIdx) => (
                      <li key={tIdx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF9900]" />
                        <span>{th}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>

            {/* Architecture Visual Blueprint Card */}
            <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-3">
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold tracking-wider">
                  WELL-ARCHITECTED BLUEPRINT
                </span>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                  Multi-Account AWS Landing Zone &amp; High-Availability Architecture
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Our target state blueprint leverages AWS Control Tower for automated landing zones, Transit Gateway for hub-and-spoke
                  connectivity, and multi-AZ database clustering to ensure 99.99% operational continuity.
                </p>
              </div>

              <div className="lg:col-span-7">
                <div
                  className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-md aspect-video bg-slate-900"
                >
                  <img
                    src="/images/cloud/aws/aws_architecture_visual.png"
                    alt="AWS Enterprise Cloud Architecture Diagram"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-950/10 pointer-events-none" />

                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 2: AWS CLOUD MIGRATION & MODERNIZATION               */}
      {/* 5-pillar migration lifecycle with unique visual              */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-24 bg-white dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
                <Cloud className="w-3.5 h-3.5" />
                <span>MIGRATION &amp; MODERNIZATION</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Accelerated AWS Migration &amp; Workload Modernization
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Migrating enterprise estates to AWS demands more than a simple lift-and-shift. KNOOVIQ deploys a structured
                migration factory methodology backed by AWS Migration Acceleration Program (MAP) tooling, automated block-level
                continuous replication, and database modernization pipelines that eliminate business disruption.
              </p>
              
              <div className="space-y-3 pt-2">
                {[
                  {
                    title: 'AWS Application Migration Service (MGN)',
                    desc: 'Continuous background server block replication minimizing cutover maintenance windows to under 15 minutes.'
                  },
                  {
                    title: 'Database Migration Service (DMS) & SCT',
                    desc: 'Zero-downtime database replication converting legacy Oracle/SQL Server databases to Amazon Aurora.'
                  },
                  {
                    title: 'Application Modernization to Amazon EKS',
                    desc: 'Refactoring monolithic codebases into containerized microservices managed on Kubernetes.'
                  }
                ].map((item, iIdx) => (
                  <div key={iIdx} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1">
                    <div className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FF9900]" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-6">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl bg-slate-900 w-full h-[400px] lg:h-[460px]">
                <img
                  src="/images/cloud/aws/aws_migration_modernization.jpg"
                  alt="Enterprise Legacy to AWS Cloud Migration Journey"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl backdrop-blur-md bg-slate-900/85 border border-slate-700/60 text-white select-text">
                  <div className="text-[11px] font-mono font-bold text-[#FF9900] uppercase tracking-wider">
                    AWS MIGRATION FACTORY &bull; MAP CERTIFIED
                  </div>
                  <div className="text-sm font-semibold mt-0.5">
                    Legacy On-Premises to Modern AWS Cloud Infrastructure
                  </div>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Structured discovery, automated wave sequencing, and post-cutover validation.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* 5-Stage Migration Framework Cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 pt-4">
            {migrationMethodology.map((stage, sIdx) => (
              <div
                key={sIdx}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3 relative hover:border-[#00A3E0]/50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#FF9900]">
                    {stage.phase}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-500/10 text-[#00A3E0] dark:text-cyan-400">
                    {stage.badge}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                  {stage.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {stage.description}
                </p>
                <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Deliverable:</span> {stage.deliverable}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 3: AWS SECURITY & GOVERNANCE                         */}
      {/* Identity, encryption, network security, and compliance       */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-24 bg-slate-50 dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
              <Shield className="w-3.5 h-3.5" />
              <span>SECURITY, COMPLIANCE &amp; GOVERNANCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Enterprise AWS Security, Governance &amp; Compliance
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              We design defense-in-depth security architectures that align with the AWS Well-Architected Security Pillar.
              From short-lived credential federation to multi-region KMS encryption and immutable log vaults, your data
              remains protected against emerging threats and sovereign regulatory audits.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Security Image Frame */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div
                className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl bg-slate-900 w-full h-[460px] lg:h-[540px]"
              >
                <img
                  src="/images/cloud/aws/aws_security_governance.jpg"
                  alt="Enterprise AWS Security, Governance & Compliance - Collaborative human developer and AI robotic assistant engineering secure cloud control planes"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl backdrop-blur-md bg-slate-900/85 border border-slate-700/60 text-white select-text">
                  <div className="text-[11px] font-mono font-bold text-[#FF9900] uppercase tracking-wider">
                    ZERO-TRUST SECURITY PERIMETER
                  </div>
                  <div className="text-xs font-semibold text-slate-200 mt-0.5">
                    Automated SCP Guardrails &amp; Continuous Posture Auditing
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Security Pillars Accordion/Tabs */}
            <div className="lg:col-span-7 space-y-3">
              {securityPillars.map((pillar, pIdx) => {
                const isActive = activeSecurityPillar === pIdx;
                return (
                  <div
                    key={pillar.id}
                    className={`rounded-2xl border transition-all overflow-hidden ${
                      isActive
                        ? 'bg-white dark:bg-[#0B1528] border-[#00A3E0] shadow-md'
                        : 'bg-white/80 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <button
                      onClick={() => setActiveSecurityPillar(isActive ? -1 : pIdx)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-mono font-bold text-[#FF9900]">
                            PILLAR 0{pIdx + 1}
                          </span>
                          <span className="text-xs font-mono text-[#00A3E0] dark:text-cyan-400 font-semibold">
                            &bull; {pillar.badge}
                          </span>
                        </div>
                        <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-0.5">
                          {pillar.title}
                        </h4>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                          isActive ? 'rotate-180 text-[#00A3E0]' : ''
                        }`}
                      />
                    </button>

                    {isActive && (
                      <div className="px-5 pb-5 pt-1 space-y-3 border-t border-slate-100 dark:border-slate-800/80 text-xs sm:text-sm">
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                          {pillar.description}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 font-mono text-xs">
                          {pillar.controls.map((ctrl, cIdx) => (
                            <div
                              key={cIdx}
                              className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3E0] shrink-0" />
                              <span className="truncate">{ctrl}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 4: AWS APPLICATION & PLATFORM ENGINEERING            */}
      {/* Microservices, serverless, containers, CI/CD, and IaC        */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-24 bg-white dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
                <Cpu className="w-3.5 h-3.5" />
                <span>APPLICATION &amp; PLATFORM ENGINEERING</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Modern Application &amp; Platform Engineering on AWS
              </h2>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Empower your development teams with cloud-native architectures. We design automated container platforms on
                Amazon EKS, event-driven serverless backends on AWS Lambda, and declarative Terraform GitOps pipelines that
                accelerate release cycles without sacrificing stability.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-600 dark:text-slate-400">
                <span>Infrastructure-as-Code &bull; GitOps Driven</span>
              </div>
            </div>
          </div>

          {/* 6 Capabilities Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {appEngineeringCards.map((card, cIdx) => {
              const CardIcon = card.icon;
              return (
                <div
                  key={cIdx}
                  className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200 dark:border-slate-800 space-y-4 hover:border-[#00A3E0]/40 transition-all hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-[#00A3E0]">
                      <CardIcon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#FF9900] uppercase tracking-wider">
                      MODULE 0{cIdx + 1}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {card.title}
                    </h3>
                    <div className="text-xs text-cyan-600 dark:text-cyan-400 font-medium">
                      {card.tagline}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {card.description}
                  </p>

                  <div className="pt-3 border-t border-slate-200 dark:border-slate-800 space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                    {card.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3E0] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 5: AWS DATA, ANALYTICS & AI                          */}
      {/* S3, Glue, Redshift, Athena, SageMaker & Generative AI        */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-24 bg-slate-50 dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div
                className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl bg-slate-900 w-full h-[440px] lg:h-[520px]"
              >
                <img
                  src="/images/cloud/aws/aws_data_analytics.jpg"
                  alt="Enterprise Data Lakes, Analytics & Machine Learning on AWS - Advanced AI humanoid robot synthesizing neural network models and predictive analytics"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl backdrop-blur-md bg-slate-900/85 border border-slate-700/60 text-white select-text">
                  <div className="text-[11px] font-mono font-bold text-[#FF9900] uppercase tracking-wider">
                    DATA LAKE &amp; AI ENGINE
                  </div>
                  <div className="text-sm font-semibold mt-0.5">
                    Petabyte Analytics with Amazon Redshift &amp; SageMaker
                  </div>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Unified data pipelines from raw S3 objects to real-time generative AI inference.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
                <Database className="w-3.5 h-3.5" />
                <span>DATA, ANALYTICS &amp; ARTIFICIAL INTELLIGENCE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Enterprise Data Lakes, Analytics &amp; Machine Learning on AWS
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Unlock the full value of your enterprise data. We architect unified data lake foundations on Amazon S3,
                automated ETL pipelines with AWS Glue, petabyte data warehouses on Amazon Redshift, and secure AI/ML workflows
                powered by Amazon SageMaker and Bedrock foundation models.
              </p>

              {/* Service Capabilities List */}
              <div className="space-y-3 pt-2">
                {dataAnalyticsServices.map((svc, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-4 rounded-xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-slate-800 space-y-1 hover:border-[#FF9900]/40 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900 dark:text-white text-sm font-mono flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#FF9900]" />
                        {svc.name}
                      </span>
                      <span className="text-[10px] font-mono font-bold text-[#00A3E0] dark:text-cyan-400 uppercase">
                        {svc.category}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-6">
                      {svc.description}
                    </p>
                    <div className="text-[11px] font-mono text-cyan-700 dark:text-cyan-300 pl-6 pt-1">
                      Role: {svc.role}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 6: AWS RELIABILITY, OPERATIONS & COST OPTIMIZATION   */}
      {/* Monitoring, high availability, SRE, and FinOps savings       */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-24 bg-white dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>SRE, OPERATIONS &amp; FINOPS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              AWS Reliability, Operations &amp; FinOps Cost Optimization
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Operating at cloud scale requires continuous operational excellence and financial discipline. Our AWS Certified
              SRE and FinOps engineers guarantee 99.99% multi-AZ availability while continuously optimizing compute and storage
              commitments to maximize your return on investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {opsReliabilityAreas.map((area, aIdx) => {
              const AreaIcon = area.icon;
              return (
                <div
                  key={aIdx}
                  className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200 dark:border-slate-800 space-y-4 hover:border-[#FF9900]/40 transition-all hover:shadow-md"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FF9900]/10 flex items-center justify-center text-[#FF9900]">
                    <AreaIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {area.title}
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                    {area.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3E0] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* FinOps Callout Bar */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-[#0B1A35] to-[#071329] border border-amber-500/30 text-white shadow-xl">
            <div className="space-y-2 max-w-4xl select-text">
              <span className="text-xs font-mono font-bold text-[#FF9900] uppercase tracking-wider">
                COMPUTE SAVINGS PLANS &amp; GRAVITON MIGRATION
              </span>
              <h3 className="text-xl sm:text-2xl font-bold">
                Reduce Your Monthly AWS Compute Bill by Up to 40%
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Our FinOps specialists conduct automated rightsizing, eliminate unattached EBS volumes, and structure 1-year/3-year
                Savings Plans without locking you into obsolete instance families.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 7: AWS ENGAGEMENT APPROACH                           */}
      {/* Clean horizontal timeline: Discover -> Architect -> ...     */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-24 bg-slate-50 dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5" />
              <span>METHODOLOGY ROADMAP</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              AWS Engagement &amp; Delivery Approach
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              A structured five-phase delivery model designed to take your enterprise from initial workload discovery to continuous 24/7 cloud operations.
            </p>
          </div>

          {/* Horizontal Timeline Bar */}
          <div className="relative">
            {/* Desktop Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-1 bg-slate-200 dark:bg-slate-800 -translate-y-1/2 z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
              {engagementSteps.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <button
                    key={step.step}
                    onClick={() => setActiveStep(idx)}
                    className={`p-6 rounded-2xl text-left transition-all border cursor-pointer space-y-3 ${
                      isActive
                        ? 'bg-white dark:bg-[#0B1528] border-[#FF9900] shadow-xl shadow-[#FF9900]/10 ring-2 ring-[#FF9900]/30'
                        : 'bg-white/80 dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="w-8 h-8 rounded-full bg-[#FF9900]/10 text-[#FF9900] font-mono font-bold text-xs flex items-center justify-center border border-[#FF9900]/30">
                        {step.step}
                      </span>
                      {isActive && <span className="w-2 h-2 rounded-full bg-[#00A3E0] animate-pulse" />}
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">
                        {step.name}
                      </h4>
                      <div className="text-xs text-[#00A3E0] dark:text-cyan-400 font-medium">
                        {step.tagline}
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] font-mono text-slate-500">
                      Deliverable: <span className="font-semibold text-slate-700 dark:text-slate-300">{step.deliverable}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* ENTERPRISE AWS FAQS                                          */}
      {/* ============================================================ */}
      <section className="py-20 bg-white dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00A3E0] dark:text-cyan-400">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Enterprise AWS Cloud Advisory &amp; Operations FAQ
            </h2>
          </div>

          <div className="space-y-3">
            {awsFaqs.map((faq, fIdx) => {
              const isOpen = openFaq === fIdx;
              return (
                <div
                  key={fIdx}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-slate-50 dark:bg-slate-900/60 transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : fIdx)}
                    className="w-full p-5 text-left font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#00A3E0] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/60 dark:border-slate-800">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 8: FINAL CTA                                         */}
      {/* Required Text: Plan Your Next Step with AWS                  */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-slate-900 via-[#0A1A33] to-[#050B17] text-white border-b border-slate-800 relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FF9900]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#00A3E0]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-[#FF9900] text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AWS CLOUD CONSULTATION &amp; STRATEGY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Plan Your Next Step with AWS
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Whether you are planning a cloud migration, modernizing existing applications, or improving an established
            AWS environment, Knooviq can help you define a practical technical roadmap.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={handleDiscussStrategy}
              className="px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-gradient-to-r from-[#00A3E0] to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-lg shadow-cyan-500/30 flex items-center gap-2.5 group cursor-pointer"
            >
              <span>Talk to Our Cloud Experts</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <Link
              to="/cloud-operations/azure"
              className="px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 hover:text-white border border-white/20 font-bold text-xs sm:text-sm tracking-wide transition-all flex items-center gap-2 group cursor-pointer"
            >
              <span>Explore Microsoft Azure</span>
              <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-xs font-mono text-slate-400">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#FF9900]" />
              <span>Complimentary Architecture Review</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>AWS MAP Funding TCO Modeling</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#FF9900]" />
              <span>Zero-Downtime Migration Blueprint</span>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* RELATED CLOUD SERVICES                                       */}
      {/* ============================================================ */}
      <RelatedCloudServices currentPath="/cloud-operations/aws" />

      {/* ============================================================ */}
      {/* LIGHTBOX MODAL FOR ARCHITECTURE DIAGRAMS                     */}
      {/* ============================================================ */}
      {lightboxImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-fadeIn"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl space-y-4 p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div>
                <h3 className="text-lg font-bold text-white">
                  {lightboxImage.title}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  {lightboxImage.subtitle}
                </p>
              </div>
              <button
                onClick={() => setLightboxImage(null)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative rounded-2xl overflow-hidden bg-slate-950 max-h-[70vh] flex items-center justify-center">
              <img
                src={lightboxImage.url}
                alt={lightboxImage.title}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
