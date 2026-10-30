import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Server,
  Shield,
  ShieldCheck,
  Lock,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Maximize2,
  X,
  Cpu,
  Database,
  Network,
  Layers,
  Activity,
  FileCheck,
  RefreshCw,
  Sliders,
  Globe,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Zap,
  BarChart3,
  Sparkles,
  Terminal,
  ArrowUpRight,
  HardDrive,
  Workflow,
  KeyRound,
  FolderTree
} from 'lucide-react';
import { RelatedCloudServices } from '../../components/cloud/RelatedCloudServices';
import { CloudConsultationCTA } from '../../components/cloud/CloudConsultationCTA';

interface PrivateCloudPageProps {
  onOpenContact?: (topic?: string) => void;
}

interface LightboxState {
  url: string;
  title: string;
  subtitle: string;
  figure?: string;
  badge?: string;
}

export const PrivateCloudPage: React.FC<PrivateCloudPageProps> = ({ onOpenContact }) => {
  const [lightboxImage, setLightboxImage] = useState<LightboxState | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeBenefitTab, setActiveBenefitTab] = useState<number>(0);

  useEffect(() => {
    document.title = 'Private Cloud Solutions for Enterprise Control and Security | KNOOVIQ';
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

  const handleDiscussRequirements = () => {
    if (onOpenContact) {
      onOpenContact('Private Cloud Strategy & Architecture');
    }
  };

  const handleExploreCapabilities = () => {
    const el = document.getElementById('capability-section-01');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 7 Capability Sections with Unique, Realistic Enterprise Datacenter / Hardware Images
  const capabilitySections = [
    {
      number: '01',
      id: 'capability-section-01',
      heading: 'Private Cloud Architecture & Design',
      subheading: 'Engineered for Performance, Availability, and Deterministic Latency',
      description:
        'Private cloud architecture requires deliberate engineering across compute clusters, storage fabrics, leaf-spine network topologies, and virtualization hypervisors. Knooviq designs dedicated private environments tailored to your workload profile, data gravity, compliance mandates, and high availability targets without the uncertainty of multi-tenant resource contention.',
      specs: [
        { label: 'Compute Architecture', value: 'High-density multi-socket x86 servers with NUMA-aware allocation' },
        { label: 'Network Fabric', value: 'Non-blocking 25/100GbE leaf-spine switching with BGP EVPN and VXLAN' },
        { label: 'Storage Topography', value: 'NVMe-over-Fabrics (NVMe-oF) with automated tiering and deduplication' },
        { label: 'Availability Profile', value: 'N+1 and N+2 cluster redundancy with zero single points of failure' }
      ],
      capabilities: [
        'Infrastructure sizing and capacity modeling',
        'Leaf-spine network segmentation and VLAN/VXLAN design',
        'Storage fabric architecture (SAN, NAS, Ceph, NVMe-oF)',
        'Virtualization hypervisor evaluation and clustering',
        'High-availability clustering and fault-domain planning'
      ],
      image: '/images/cloud/private_cloud_arch_design.jpg',
      imageAlt:
        'Private Cloud Architecture & Design - Secure On-Premise Cloud Infrastructure blueprint with Spine-Leaf Networking, Compute & Storage Layers, WAF, and Datacenter Operations',
      badge: 'SECURE ON-PREMISE BLUEPRINT',
      imageLeft: false
    },
    {
      number: '02',
      id: 'capability-section-02',
      heading: 'Dedicated Infrastructure & Resource Control',
      subheading: 'Guaranteed Performance with Complete Physical and Logical Isolation',
      description:
        'Enterprise workloads requiring predictable input/output operations, microsecond response times, and deterministic throughput benefit from single-tenant dedicated hardware. We architect bare-metal compute instances, dedicated storage arrays, and private switching matrices that grant your engineering teams complete oversight over processor quotas, memory reservations, and hardware firmware cycles.',
      specs: [
        { label: 'Workload Isolation', value: 'Physically isolated bare-metal blades with hardware TPM 2.0 root of trust' },
        { label: 'Resource Guarantees', value: '100% committed vCPU-to-pCPU ratios with zero noisy-neighbor degradation' },
        { label: 'Hardware Lifecycle', value: 'Standardized server generation refreshes with automated firmware baselines' },
        { label: 'Placement Policies', value: 'Strict affinity and anti-affinity rules for mission-critical core nodes' }
      ],
      capabilities: [
        'Dedicated compute, memory, and storage provisioning',
        'Bare-metal and virtualized workload isolation models',
        'Hardware lifecycle management and firmware maintenance',
        'Dynamic resource allocation and reservation policies',
        'Co-location and enterprise datacenter capacity planning'
      ],
      image: '/images/cloud/private_cloud_dedicated_infra.jpg',
      imageAlt:
        'Dedicated Infrastructure & Resource Control - Isolated Bare-Metal Compute, Storage Arrays, and Private Switching Matrix with Central Shielded Security Core',
      badge: 'DEDICATED HARDWARE FABRIC',
      imageLeft: true
    },
    {
      number: '03',
      id: 'capability-section-03',
      heading: 'Security, Identity & Governance',
      subheading: 'Zero-Trust Perimeters, Role-Based Access, and Cryptographic Controls',
      description:
        'Protecting enterprise assets demands multi-layered security embedded directly into the physical host, hypervisor, software-defined network, and administrative interfaces. We implement unified Identity and Access Management (IAM), Privileged Access Management (PAM), micro-segmented network security firewalls, and automated policy-as-code guardrails that establish verifiable audit readiness.',
      specs: [
        { label: 'Access Control', value: 'Role-Based Access Control (RBAC) with adaptive multi-factor authentication' },
        { label: 'Network Security', value: 'Distributed East-West firewalling with micro-segmentation per tenant' },
        { label: 'Cryptographic Keys', value: 'Hardware Security Modules (HSM) with customer-owned root key hierarchies' },
        { label: 'Audit & Compliance', value: 'Immutable SIEM event logging with real-time configuration drift alerts' }
      ],
      capabilities: [
        'Identity federation and single sign-on (SSO) integration',
        'Privileged access management and session recording',
        'East-West network micro-segmentation and intrusion defense',
        'Hardware Security Module (HSM) and key management integration',
        'Automated configuration baselines and compliance auditing'
      ],
      image: '/images/cloud/private_cloud_security_gov.jpg',
      imageAlt:
        'Security, Identity & Governance - Integrated Framework for Secure Enterprise with Identity Orchestration, IAM, SIEM & SOAR Platforms, Compliance, and Networking/Integration Layers',
      badge: 'ZERO-TRUST IAM & COMPLIANCE',
      imageLeft: false
    },
    {
      number: '04',
      id: 'capability-section-04',
      heading: 'Data Protection & Disaster Recovery',
      subheading: 'Continuous Replication, Immutable Snapshots, and Deterministic RTO/RPO',
      description:
        'Resilience in private environments requires structured backup governance, synchronous local data replication, and geographically separated disaster recovery sites. Knooviq implements storage-level replication, automated snapshot lifecycle policies, air-gapped immutable backup vaults, and programmatic failover runbooks to ensure continuous business operations during catastrophic site failures.',
      specs: [
        { label: 'Recovery Targets', value: 'RPO under 60 seconds with RTO under 15 minutes for Tier-1 production' },
        { label: 'Replication Mode', value: 'Synchronous metro-clustering (<5ms) with asynchronous cross-region DR' },
        { label: 'Ransomware Defense', value: 'WORM (Write Once Read Many) immutable snapshots with air-gapped vaults' },
        { label: 'Drill Validation', value: 'Automated non-disruptive disaster recovery testing and runbook audit' }
      ],
      capabilities: [
        'Multi-site replication and disaster recovery topology',
        'Air-gapped immutable backups and snapshot retention schedules',
        'Failover orchestration and automated runbook execution',
        'Non-disruptive disaster recovery testing and validation',
        'Data lifecycle management and retention compliance'
      ],
      image: '/images/cloud/private_cloud_data_protection.jpg',
      imageAlt:
        'Data Protection & Disaster Recovery - Cloud Backup & Storage Clusters, Shielded Resilience, and Continuous Replication Topology across Endpoints',
      badge: 'CONTINUOUS REPLICATION & DR',
      imageLeft: true
    },
    {
      number: '05',
      id: 'capability-section-05',
      heading: 'Virtualization & Workload Management',
      subheading: 'Flexible Compute Pools Across Hypervisors, Containers, and Runtimes',
      description:
        'Modern private clouds combine traditional enterprise hypervisors with modern container orchestration engines to host legacy monoliths alongside modern microservices. We configure resource pools, distributed resource schedulers, live VM migration without service interruption, and self-service automation portals that reduce workload provisioning times from weeks to minutes.',
      specs: [
        { label: 'Hypervisor Support', value: 'VMware vSphere/ESXi, KVM, Nutanix AHV, and enterprise OpenStack' },
        { label: 'Container Runtime', value: 'Kubernetes orchestration via OpenShift, Rancher, or Tanzu on bare metal' },
        { label: 'Live Migration', value: 'Zero-downtime vMotion / Live Migration across physical compute blades' },
        { label: 'Self-Service', value: 'Catalog-driven automated provisioning with quota and approval guardrails' }
      ],
      capabilities: [
        'Hypervisor deployment, clustering, and version management',
        'Enterprise Kubernetes deployment on private infrastructure',
        'Resource pool quotas, dynamic balancing, and NUMA optimization',
        'Live workload migration and host maintenance without downtime',
        'Automated catalog provisioning and multi-tenant self-service'
      ],
      image: '/images/cloud/private_cloud_virtualization.jpg',
      imageAlt:
        'Virtualization & Workload Management - Cloud server compute cluster distributing virtualized workloads with security shield to enterprise endpoints',
      badge: 'VIRTUALIZATION & ORCHESTRATION',
      imageLeft: false
    },
    {
      number: '06',
      id: 'capability-section-06',
      heading: 'Hybrid Cloud Integration',
      subheading: 'Unified Network Mesh, Direct Interconnects, and Identity Federation',
      description:
        'Private clouds operate most effectively when seamlessly connected to hyperscaler public clouds for burst capacity, analytics, and global edge delivery. Knooviq implements dedicated low-latency fiber cross-connects (Direct Connect, ExpressRoute), transit routing meshes, federated identity directories, and consistent infrastructure-as-code management across all environments.',
      specs: [
        { label: 'Dedicated Fiber', value: 'Redundant 10Gbps / 100Gbps cross-connects with BGP dynamic routing' },
        { label: 'Identity Mesh', value: 'Federated Active Directory / Entra ID / Okta across private & public' },
        { label: 'Transit Routing', value: 'Carrier-grade IPsec VPN backup with line-rate MACsec fiber encryption' },
        { label: 'Configuration Plane', value: 'Declarative Terraform / OpenTofu modules managing hybrid resources' }
      ],
      capabilities: [
        'Dedicated fiber cross-connect design (Direct Connect / ExpressRoute)',
        'Hybrid IP routing, BGP peering, and transit network segmentation',
        'Unified Active Directory / Entra ID / LDAP federation',
        'Declarative GitOps and Terraform configuration synchronization',
        'Workload portability assessment and burst capacity governance'
      ],
      image: '/images/cloud/private_cloud_hybrid_integration.jpg',
      imageAlt:
        'Hybrid Cloud Integration - Hybrid AI architecture interconnecting Public Cloud with On-Premises enterprise datacenter server racks',
      badge: 'HYBRID CLOUD ORCHESTRATION',
      imageLeft: true
    },
    {
      number: '07',
      id: 'capability-section-07',
      heading: 'Private Cloud Operations & Modernization',
      subheading: 'Automated Lifecycle Management, Continuous Telemetry, and SRE Practices',
      description:
        'Sustaining private cloud reliability requires rigorous day-2 operational disciplines, including proactive hardware telemetry, automated operating system patching, configuration drift remediation, and platform modernization. We implement Site Reliability Engineering (SRE) frameworks, automated backup drills, and observability pipelines to ensure operational excellence.',
      specs: [
        { label: 'Telemetry Fabric', value: 'Full-stack metric and log collection across IPMI, hypervisor, and OS' },
        { label: 'Patch Automation', value: 'Staged rolling hypervisor and guest OS patch deployment with zero outage' },
        { label: 'Drift Detection', value: 'Continuous policy-as-code validation against hardened security baselines' },
        { label: 'Capacity Planning', value: 'Predictive storage and compute utilization forecasting for budgeting' }
      ],
      capabilities: [
        '24/7 infrastructure health telemetry and alert correlation',
        'Automated hypervisor and guest operating system patching',
        'Configuration drift detection and policy remediation',
        'Capacity trend forecasting and hardware refresh planning',
        'Platform modernization and hyperconverged infrastructure migration'
      ],
      image: '/images/cloud/private_cloud_operations.jpg',
      imageAlt:
        'Private Cloud Operations & Modernization - Enterprise SRE operations team monitoring server infrastructure and cloud architecture',
      badge: 'DAY-2 SRE OPERATIONS',
      imageLeft: false
    }
  ];

  // Business Benefits
  const businessBenefits = [
    {
      title: 'Infrastructure Control',
      icon: Sliders,
      tag: 'ABSOLUTE AUTONOMY',
      description:
        'Retain complete sovereignty over hardware selection, virtualization hypervisors, storage architecture, and maintenance schedules without forced platform deprecations or provider updates.'
    },
    {
      title: 'Workload Isolation',
      icon: Shield,
      tag: 'ZERO NOISY NEIGHBORS',
      description:
        'Eliminate multi-tenant resource contention by dedicating computing cores, memory buses, and high-throughput network interfaces exclusively to your enterprise applications.'
    },
    {
      title: 'Governance Alignment',
      icon: FileCheck,
      tag: 'STRICT REGULATORY COMPLIANCE',
      description:
        'Enforce strict data residency, jurisdictional boundaries, and security policies that satisfy complex regulatory standards such as RBI, GDPR, HIPAA, and defense compliance.'
    },
    {
      title: 'Predictable Resource Planning',
      icon: BarChart3,
      tag: 'STABLE UNIT ECONOMICS',
      description:
        'Convert volatile cloud consumption charges into predictable operational and capital expenditure models with fixed, deterministic cost profiles for sustained workloads.'
    },
    {
      title: 'Operational Flexibility',
      icon: Workflow,
      tag: 'CUSTOM HARDWARE & KERNEL SUPPORT',
      description:
        'Deploy custom hardware accelerators, specialized network interface cards (NICs), legacy operating systems, and custom kernel parameters unavailable in public cloud platforms.'
    }
  ];

  // Where Private Cloud Fits (5 Concrete Enterprise Use Cases)
  const wherePrivateCloudFits = [
    {
      category: 'Regulated Workloads',
      suitability: 'Financial institutions, healthcare organizations, and government contractors bound by strict data localization and security auditing regulations.',
      examples: 'Core banking transaction systems, electronic medical record (EMR) databases, sovereign intelligence platforms.',
      keyDriver: 'Strict jurisdictional boundaries and air-gapped data residency mandates.'
    },
    {
      category: 'Sensitive Enterprise Data',
      suitability: 'Enterprises managing proprietary intellectual property, strategic algorithms, or confidential client records requiring dedicated physical storage.',
      examples: 'Core ERP databases (SAP HANA on bare-metal), proprietary R&D simulations, financial risk engines.',
      keyDriver: 'Zero public telemetry exposure with physical hardware root of trust.'
    },
    {
      category: 'Legacy Applications & Custom Stacks',
      suitability: 'Critical legacy enterprise applications with specific operating system, hardware dongle, or custom kernel dependencies that cannot run on public cloud.',
      examples: 'Legacy ERP monoliths, custom Linux/Unix distributions, specialized industrial SCADA and telemetry servers.',
      keyDriver: 'Direct hypervisor and hardware-level configuration freedom.'
    },
    {
      category: 'Specialized High-Performance Infrastructure',
      suitability: 'Compute workloads requiring sub-millisecond network latency, dedicated GPU acceleration arrays, or massive continuous I/O throughput.',
      examples: 'High-frequency algorithmic trading systems, massive AI model inference clusters, large-scale video rendering fabrics.',
      keyDriver: 'Line-rate 100GbE non-blocking network switching and dedicated PCIe NVMe storage.'
    },
    {
      category: 'Hybrid Cloud Anchors',
      suitability: 'Organizations using a steady-state private cloud for baseline transactional workloads while bursting to public cloud for elastic seasonal compute.',
      examples: 'Two-tier retail transaction backends with public web fronts, enterprise data warehouses with public cloud BI.',
      keyDriver: 'Optimal hybrid economics balancing fixed baseline cost with elastic public burst.'
    }
  ];

  // Implementation Approach (6 Sequential Phases)
  const implementationPhases = [
    {
      phase: '01',
      title: 'Assess & Profile',
      tag: 'WORKLOAD AUDIT',
      description:
        'Audit existing physical and virtual estates, analyze performance metrics (CPU, RAM, IOPS, latency), identify system dependencies, and establish workload suitability criteria.'
    },
    {
      phase: '02',
      title: 'Design & Architect',
      tag: 'ENGINEERING BLUEPRINT',
      description:
        'Formulate comprehensive leaf-spine network topographies, compute node configurations, storage tiers, hypervisor clustering, and N+1 high-availability topologies.'
    },
    {
      phase: '03',
      title: 'Build & Harden',
      tag: 'DEPLOYMENT & SECURITY',
      description:
        'Racking, physical cabling, hypervisor deployment, software-defined network (SDN) configuration, storage volume initialization, and zero-trust security hardening.'
    },
    {
      phase: '04',
      title: 'Migrate & Modernize',
      tag: 'STRUCTURED CUTOVERS',
      description:
        'Execute wave-based physical-to-virtual (P2V) and virtual-to-virtual (V2V) workload migrations using automated synchronization tools with minimal planned cutover downtime.'
    },
    {
      phase: '05',
      title: 'Validate & Test',
      tag: 'DISASTER RECOVERY DRILLS',
      description:
        'Conduct rigorous load benchmarking, failover simulations, automated disaster recovery drills, vulnerability assessments, and regulatory compliance verifications.'
    },
    {
      phase: '06',
      title: 'Operate & Evolve',
      tag: 'SRE DAY-2 PRACTICES',
      description:
        'Transition to continuous 24/7 telemetry monitoring, automated patching pipelines, proactive capacity forecasting, and regular platform modernization cycles.'
    }
  ];

  // FAQs
  const faqs = [
    {
      q: 'How does Private Cloud differ from Public Cloud and Traditional On-Premises Datacenters?',
      a: 'Unlike traditional on-premises setups where servers are siloed and manually configured, a private cloud introduces virtualization, pooled compute and storage resources, software-defined networking, automated provisioning, and cloud-like self-service. Unlike public cloud, all infrastructure is physically dedicated exclusively to your organization, providing absolute control over data placement, network perimeter security, and hardware firmware.'
    },
    {
      q: 'Is a Private Cloud automatically more secure than Public Cloud platforms?',
      a: 'Not inherently. Security is not a property of the deployment model itself; it is the direct outcome of architecture, configuration, access controls, patching discipline, and operational governance. While private cloud gives you complete physical and network isolation, you must actively configure zero-trust boundaries, role-based access controls, vulnerability scanning, and robust physical datacenter defenses.'
    },
    {
      q: 'What hypervisor and virtualization technologies does Knooviq support?',
      a: 'Knooviq supports enterprise virtualization and container platforms including VMware vSphere (ESXi and vCenter), Kernel-based Virtual Machine (KVM), Nutanix AHV, Red Hat OpenStack, and enterprise Kubernetes runtimes (Red Hat OpenShift, SUSE Rancher, and VMware Tanzu). We select hypervisors based on workload requirements, licensing models, and long-term modernization strategies.'
    },
    {
      q: 'How can our Private Cloud connect securely to AWS, Microsoft Azure, or Google Cloud?',
      a: 'We design dedicated hybrid network interconnects utilizing carrier-grade fiber connections such as AWS Direct Connect, Azure ExpressRoute, and Google Cloud Interconnect. These dedicated circuits are complemented by dynamic BGP routing, encrypted MACsec or IPsec failover tunnels, and centralized identity federation (Active Directory, Entra ID, Okta) across on-premises and hyperscaler environments.'
    },
    {
      q: 'Can our internal teams achieve cloud-like elasticity and self-service in a Private Cloud?',
      a: 'Yes. By deploying cloud management platforms, Infrastructure-as-Code (Terraform / Ansible), and self-service catalogs, engineering teams can provision virtual machines, container pods, and storage volumes on demand within pre-approved resource quotas, maintaining rapid developer velocity while adhering to strict architectural guardrails.'
    },
    {
      q: 'Who is responsible for day-to-day operations, hardware maintenance, and patching in a Private Cloud?',
      a: 'Knooviq offers flexible operational models ranging from architecture advisory and initial implementation handoff to complete 24/7 Managed Platform Operations. In a managed model, Knooviq engineers handle hypervisor upgrades, security patch management, telemetry monitoring, backup verification, and incident response, while your internal teams focus on core business applications.'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#060D1A] text-slate-900 dark:text-white transition-colors">
      
      {/* =========================================================================
          BREADCRUMB BAR
         ========================================================================= */}
      <div className="bg-slate-50 dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10 text-xs py-3 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
            <Link to="/" className="hover:text-[#00A3E0] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to="/cloud-operations" className="hover:text-[#00A3E0] transition-colors">Cloud &amp; Operations</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to="/cloud-operations/infrastructure" className="hover:text-[#00A3E0] transition-colors">Cloud Infrastructure &amp; Platforms</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 dark:text-white font-medium">Private Cloud</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          HERO SECTION — PRIVATE CLOUD SOLUTIONS FOR ENTERPRISE CONTROL & SECURITY
          (Cinematic Full-Bleed Enterprise Hero with Full-Screen Background Image)
         ========================================================================= */}
      <section className="relative w-full min-h-[560px] sm:min-h-[580px] lg:min-h-[640px] flex items-center overflow-hidden bg-[#040B17] text-white border-b border-slate-800 shadow-2xl py-16 sm:py-20 lg:py-24">
        
        {/* Full-Bleed Enterprise Background Image */}
        <div className="absolute inset-0 z-0 group/hero pointer-events-none">
          <img 
            src="/images/cloud/private_cloud_hero.jpg" 
            alt="Private Cloud Solutions for Enterprise Control and Security - Dedicated glass-enclosed datacenter server racks with 3D secure cloud" 
            className="w-full h-full object-cover object-center md:object-[82%_center] transition-transform duration-1000 ease-out group-hover/hero:scale-102 filter brightness-[0.9] contrast-105"
            loading="eager"
          />
          {/* Smooth gradient overlay on left for razor-sharp typography readability while letting the visual shine on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#040B17]/95 via-[#040B17]/85 sm:via-[#040B17]/70 md:via-[#040B17]/45 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#040B17] via-[#040B17]/60 to-transparent pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#040B17]/80 to-transparent pointer-events-none" />

          {/* Top Hairline Accent */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00A3E0] to-transparent" />
        </div>

        {/* Hero Content Layer */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
          <div className="max-w-2xl lg:max-w-3xl space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00A3E0]/20 border border-[#00A3E0]/40 text-[#00A3E0] text-xs font-mono font-semibold uppercase tracking-wider backdrop-blur-md">
              <Shield className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>DEDICATED ENTERPRISE INFRASTRUCTURE</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.16] text-white drop-shadow-md">
              Private Cloud Solutions for{' '}
              <span className="text-[#00A3E0]">Enterprise Control and Security</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed drop-shadow-sm max-w-2xl">
              Build a secure, dedicated cloud environment designed around your organization's infrastructure, governance, performance, and operational requirements. Knooviq helps enterprises design, modernize, and operate private cloud platforms that support critical workloads while maintaining control over data, access, and resources.
            </p>


            {/* Key Architecture Badges */}
            <div className="pt-6 border-t border-white/15 grid grid-cols-3 gap-4 text-xs max-w-xl backdrop-blur-[2px]">
              <div>
                <span className="font-mono text-[#00A3E0] font-bold block text-sm sm:text-base">Single-Tenant</span>
                <span className="text-slate-300 mt-0.5 block">Zero Contention</span>
              </div>
              <div>
                <span className="font-mono text-[#00A3E0] font-bold block text-sm sm:text-base">Sovereign</span>
                <span className="text-slate-300 mt-0.5 block">Data Residency</span>
              </div>
              <div>
                <span className="font-mono text-[#00A3E0] font-bold block text-sm sm:text-base">Line-Rate</span>
                <span className="text-slate-300 mt-0.5 block">Sub-ms Latency</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: PRIVATE CLOUD OVERVIEW
          Heading: Infrastructure Built Around Your Enterprise
         ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50 dark:bg-[#070E1C] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00A3E0] block">
              ENTERPRISE CONTROL &amp; GOVERNANCE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 dark:text-white tracking-tight leading-snug">
              Infrastructure Built Around Your Enterprise
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Private cloud delivers dedicated physical compute, storage, and networking resources along with complete authority over security policies, data placement, workload configurations, and operational governance. It is designed specifically for organizations navigating specialized regulatory constraints, sensitive intellectual property, legacy application dependencies, and sustained, predictable infrastructure demands.
            </p>
          </div>

          {/* Strategic Context & Engineering Nuance (As requested in prompt) */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 shadow-sm space-y-5">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/40 flex items-center justify-center text-[#00A3E0] shrink-0 mt-0.5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                  Architectural Rigor and Operational Nuance
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Private cloud is not automatically more secure, compliant, or cost-effective in every situation. Optimal enterprise outcomes depend directly on intentional architecture, automated configuration management, disciplined patching, policy-as-code guardrails, and rigorous operational governance. Knooviq assists enterprises in evaluating trade-offs between dedicated capital investment and hyperscaler operational agility to formulate the optimal infrastructure placement strategy.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-100 dark:border-white/5 text-xs">
              <div className="space-y-1">
                <span className="font-mono text-[#00A3E0] font-bold block">Physical Control</span>
                <span className="text-slate-600 dark:text-slate-400">Total ownership over CPU microcode, firmware, and physical access controls.</span>
              </div>
              <div className="space-y-1">
                <span className="font-mono text-[#00A3E0] font-bold block">Data Placement</span>
                <span className="text-slate-600 dark:text-slate-400">Deterministic storage residency with zero multi-tenant geographic cross-border leakage.</span>
              </div>
              <div className="space-y-1">
                <span className="font-mono text-[#00A3E0] font-bold block">Predictable Economics</span>
                <span className="text-slate-600 dark:text-slate-400">Fixed monthly cost structures without unexpected network egress or API call spikes.</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: EXACTLY SEVEN CAPABILITY SECTIONS
          Varied Layouts, Unique Professional Images, Technical Spec Grids
         ========================================================================= */}
      <div id="capabilities" className="divide-y divide-slate-200 dark:divide-white/10">
        {capabilitySections.map((service, index) => (
          <section
            key={service.number}
            id={service.id}
            className={`py-16 sm:py-20 transition-colors ${
              index % 2 === 1 ? 'bg-slate-50/60 dark:bg-[#071020]' : 'bg-white dark:bg-[#060D1A]'
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                
                {/* Content Column */}
                <div className={`lg:col-span-6 space-y-6 ${service.imageLeft ? 'lg:order-2' : 'lg:order-1'}`}>
                  
                  {/* Numbered Section Label */}
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-[#00A3E0]/10 text-[#00A3E0] font-mono text-xs font-bold flex items-center justify-center border border-[#00A3E0]/20">
                      {service.number}
                    </span>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00A3E0]">
                      PRIVATE CLOUD DOMAIN {service.number}
                    </span>
                  </div>

                  {/* Heading & Subheading */}
                  <div className="space-y-2">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white tracking-tight leading-snug">
                      {service.heading}
                    </h2>
                    <p className="text-sm sm:text-base font-semibold text-[#0070C0] dark:text-cyan-400">
                      {service.subheading}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {service.description}
                  </p>

                  {/* Technical Specifications Matrix */}
                  <div className="p-4 rounded-xl bg-slate-100/70 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/5 space-y-2">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2">
                      Engineering Specifications
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      {service.specs.map((item, sIdx) => (
                        <div key={sIdx} className="space-y-0.5">
                          <span className="font-mono text-slate-500 dark:text-slate-400 block text-[10px] uppercase">
                            {item.label}
                          </span>
                          <span className="font-medium text-slate-800 dark:text-slate-200 block">
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Core Architecture Capabilities */}
                  <div className="space-y-2.5 pt-1">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                      Core Architecture Capabilities
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.capabilities.map((cap, cIdx) => (
                        <div
                          key={cIdx}
                          className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-200"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3E0] shrink-0 mt-0.5" />
                          <span className="leading-snug font-medium">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Technical Image Column */}
                <div className={`lg:col-span-6 ${service.imageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="group relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-900 transition-all">
                    {/* Fixed High-DPI Aspect Ratio Container */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                      <img
                        src={service.image}
                        alt={service.imageAlt}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent pointer-events-none" />

                      {/* Floating Badge (Top Left) */}
                      <div className="absolute top-3.5 left-3.5">
                        <span className="px-3 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-cyan-400/30 text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-300 flex items-center gap-1.5">
                          <Sparkles className="w-3 h-3 text-[#00A3E0]" />
                          <span>{service.badge}</span>
                        </span>
                      </div>

                      {/* Floating Subtitle / Tech Spec on Image (Bottom Left) */}
                      <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-xs text-slate-200 select-text">
                        <span className="font-mono text-[11px] text-cyan-200 truncate pr-2">
                          {service.subheading}
                        </span>
                      </div>
                    </div>

                    {/* Caption Overlay */}
                    <div className="p-3.5 bg-slate-50 dark:bg-[#0B1528] border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400 select-text">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">
                        FIGURE {service.number}: {service.heading.toUpperCase()}
                      </span>
                      <span className="text-[#00A3E0] font-bold flex items-center gap-1">
                        <span>ENTERPRISE SPEC</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>
        ))}
      </div>

      {/* =========================================================================
          SECTION 5: BUSINESS BENEFITS OF PRIVATE CLOUD
         ========================================================================= */}
      <section className="py-20 bg-slate-50 dark:bg-[#070E1C] border-t border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00A3E0] block">
              STRATEGIC ADVANTAGES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 dark:text-white tracking-tight leading-snug">
              Key Business Benefits of Dedicated Private Cloud
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Private cloud delivers clear strategic advantages when specialized workload controls, data residency guarantees, and predictable unit economics are enterprise imperatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessBenefits.map((benefit, bIdx) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={bIdx}
                  className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#091528] border border-slate-200 dark:border-white/10 hover:border-[#00A3E0]/40 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-100 dark:border-cyan-800/30 flex items-center justify-center text-[#00A3E0]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300">
                        {benefit.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {benefit.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: WHERE PRIVATE CLOUD FITS (Structured Matrix)
         ========================================================================= */}
      <section className="py-20 bg-white dark:bg-[#060D1A] border-t border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00A3E0] block">
              WORKLOAD SUITABILITY
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 dark:text-white tracking-tight leading-snug">
              Where Private Cloud Fits Best
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Not all applications belong in the public cloud. Private cloud establishes a deterministic foundation for workloads with strict governance, specialized performance requirements, or persistent data gravity.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm bg-white dark:bg-[#091528]">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 dark:bg-[#0B1528] text-slate-700 dark:text-slate-300 font-mono text-[11px] uppercase tracking-wider border-b border-slate-200 dark:border-white/10">
                <tr>
                  <th className="py-4 px-5">Workload Category</th>
                  <th className="py-4 px-5">Enterprise Suitability</th>
                  <th className="py-4 px-5">Typical Systems</th>
                  <th className="py-4 px-5">Primary Architectural Driver</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-white/10 text-slate-600 dark:text-slate-300">
                {wherePrivateCloudFits.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-5 font-semibold text-slate-900 dark:text-white whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#00A3E0]" />
                        <span>{item.category}</span>
                      </div>
                    </td>
                    <td className="py-4 px-5 leading-relaxed min-w-[240px]">
                      {item.suitability}
                    </td>
                    <td className="py-4 px-5 font-mono text-xs text-slate-700 dark:text-slate-300 min-w-[200px]">
                      {item.examples}
                    </td>
                    <td className="py-4 px-5 text-[#0070C0] dark:text-cyan-400 font-medium min-w-[200px]">
                      {item.keyDriver}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: OUR IMPLEMENTATION APPROACH (6 Sequential Phases)
         ========================================================================= */}
      <section className="py-20 bg-slate-50 dark:bg-[#070E1C] border-t border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00A3E0] block">
              METHODOLOGY &amp; DELIVERY
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 dark:text-white tracking-tight leading-snug">
              Our Private Cloud Implementation Approach
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              A disciplined, phased engineering methodology designed to mitigate cutover risk, ensure predictable delivery, and establish enterprise operational readiness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {implementationPhases.map((phase) => (
              <div
                key={phase.phase}
                className="p-6 rounded-2xl bg-white dark:bg-[#091528] border border-slate-200 dark:border-white/10 space-y-4 hover:border-[#00A3E0]/40 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black font-mono text-[#00A3E0]">
                      {phase.phase}
                    </span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200/50 dark:border-cyan-800/30 text-[#00A3E0] dark:text-cyan-300">
                      {phase.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {phase.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {phase.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>PHASE {phase.phase} DELIVERABLE</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 8: FREQUENTLY ASKED QUESTIONS (FAQ Accordion)
         ========================================================================= */}
      <section className="py-20 bg-white dark:bg-[#060D1A] border-t border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00A3E0] block">
              COMMON ARCHITECTURAL INQUIRIES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 dark:text-white tracking-tight leading-snug">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Practical answers regarding private cloud architecture, deployment trade-offs, security controls, and operational models.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, fIdx) => (
              <div
                key={fIdx}
                className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#091528] overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(openFaqIndex === fIdx ? null : fIdx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-100/60 dark:hover:bg-white/[0.02] transition-colors"
                  aria-expanded={openFaqIndex === fIdx}
                >
                  <span className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white">
                    {faq.q}
                  </span>
                  <span className="w-8 h-8 rounded-lg bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 shrink-0">
                    {openFaqIndex === fIdx ? (
                      <ChevronUp className="w-4 h-4 text-[#00A3E0]" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </span>
                </button>

                {openFaqIndex === fIdx && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/60 dark:border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          RELATED CLOUD SERVICES
         ========================================================================= */}
      <RelatedCloudServices currentPath="/cloud-operations/infrastructure/private-cloud" />

      {/* =========================================================================
          SECTION 9: FINAL CTA — DESIGN YOUR PRIVATE CLOUD STRATEGY
         ========================================================================= */}
      <CloudConsultationCTA
        onOpenContact={() => onOpenContact && onOpenContact('Private Cloud Strategy & Architecture Consulting')}
        title="Design Your Private Cloud Strategy"
        description="Engage with Knooviq's enterprise cloud architects to evaluate workload placement, size dedicated compute and storage fabrics, and engineer a compliant, high-performance private cloud foundation."
        primaryBtnText="Talk to Our Cloud Experts"
        secondaryBtnText="Explore Hybrid Cloud"
        secondaryBtnLink="/cloud-operations/infrastructure/hybrid-cloud"
        badge="PRIVATE CLOUD ADVISORY"
      />

      {/* =========================================================================
      {/* =========================================================================
          HIGH-DEFINITION LIGHTBOX MODAL (Full-Screen Infrastructure Viewer)
         ========================================================================= */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/95 backdrop-blur-xl transition-all animate-in fade-in duration-200"
          onClick={() => setLightboxImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-7xl w-full max-h-[95vh] flex flex-col bg-[#070E1E] border border-cyan-500/40 rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-[#0B1528] shrink-0">
              <div>
                {lightboxImage.figure && (
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#00A3E0] block">
                    {lightboxImage.figure} &bull; FULL-SCREEN INFRASTRUCTURE BLUEPRINT
                  </span>
                )}
                <h3 className="text-base sm:text-xl font-bold text-white tracking-tight">
                  {lightboxImage.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setLightboxImage(null)}
                className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white border border-white/15 transition-all cursor-pointer shadow-lg"
                aria-label="Close image modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative flex-1 overflow-auto bg-slate-950 flex items-center justify-center p-3 sm:p-6 min-h-[350px]">
              <img
                src={lightboxImage.url}
                alt={lightboxImage.title}
                className="max-w-full max-h-[76vh] object-contain rounded-xl shadow-2xl border border-white/5"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 border-t border-white/10 bg-[#0B1528] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs shrink-0">
              <p className="text-slate-300 font-medium">
                {lightboxImage.subtitle}
              </p>
              <div className="flex items-center gap-2 font-mono text-[11px] text-cyan-400 shrink-0">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3E0]" />
                <span>100% High-Resolution Dedicated Hardware Spec</span>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
export default PrivateCloudPage;
