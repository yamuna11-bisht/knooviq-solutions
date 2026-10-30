import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Server,
  Cloud,
  CheckCircle2,
  ShieldCheck,
  Layers,
  Database,
  Lock,
  DollarSign,
  Maximize2,
  Zap,
  Globe,
  Cpu,
  ArrowUpRight,
  Sparkles,
  Network,
  RefreshCw,
  FolderTree,
  ChevronRight,
  Sliders,
  Shield,
  FileCheck,
  X
} from 'lucide-react';
import { RelatedCloudServices } from '../../components/cloud/RelatedCloudServices';
import { CloudConsultationCTA } from '../../components/cloud/CloudConsultationCTA';

interface PublicCloudPageProps {
  onOpenContact?: (topic?: string) => void;
}

interface LightboxState {
  url: string;
  title: string;
  subtitle: string;
  figure?: string;
  badge?: string;
}

export const PublicCloudPage: React.FC<PublicCloudPageProps> = ({ onOpenContact }) => {
  const [lightboxImage, setLightboxImage] = useState<LightboxState | null>(null);

  useEffect(() => {
    document.title = 'Public Cloud Infrastructure & Architecture Services | KNOOVIQ';
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
      onOpenContact('Public Cloud Infrastructure & Architecture');
    }
  };

  const handleExploreCapabilities = () => {
    const el = document.getElementById('section-01');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Section 3: The Public Cloud Advantage (5 Compact Highlights)
  const cloudAdvantages = [
    {
      title: 'Scalable Infrastructure',
      icon: Maximize2,
      description: 'Scale compute, storage, and networking dynamically to align with business demand without hardware over-provisioning.'
    },
    {
      title: 'Faster Innovation',
      icon: Zap,
      description: 'Accelerate time to market using managed services, pre-built application runtimes, and automated deployment pipelines.'
    },
    {
      title: 'Cost Management',
      icon: DollarSign,
      description: 'Transition capital expenses into transparent operational expenditure with granular resource tagging and usage-based billing.'
    },
    {
      title: 'Global Reach',
      icon: Globe,
      description: 'Deploy applications in low-latency regional datacenters worldwide with consistent compliance and network performance.'
    },
    {
      title: 'Managed Services',
      icon: Cpu,
      description: 'Offload infrastructure patching, hardware maintenance, and baseline operational overhead to hyperscaler platform services.'
    }
  ];

  // Section 4: Exactly Seven Main Service Sections (Crystal-Clear 3D Architecture Diagrams)
  const mainServices = [
    {
      number: '01',
      id: 'section-01',
      heading: 'Public Cloud Architecture and Design',
      subheading: 'Design Cloud Environments Around Your Business',
      description:
        'Cloud architecture decisions depend directly on specific application requirements, network boundaries, inter-system dependencies, security controls, and resilience targets. Knooviq evaluates your technical estate to architect structured landing zones, subscription topologies, and workload placement patterns tailored for agility, compliance, and long-term viability.',
      capabilities: [
        'Cloud architecture assessment and design',
        'Workload and service placement',
        'Network and environment design',
        'Application dependency mapping',
        'High availability and resilience planning'
      ],
      image: '/images/cloud/public_cloud_arch_design.jpg',
      imageAlt:
        'Public Cloud Architecture and Design - Multi-AZ landing zone architecture on AWS, Azure, and Google Cloud with CDN, Load Balancing, Compute, Database, and IaC Automation',
      badge: 'MULTI-AZ HYPERSCALER ARCHITECTURE',
      imageLeft: false
    },
    {
      number: '02',
      id: 'section-02',
      heading: 'Compute and Application Hosting',
      subheading: 'Run Applications on the Right Cloud Infrastructure',
      description:
        'Modern enterprise workloads require flexible hosting strategies balancing virtual machines, managed application platforms, container runtimes, and orchestration frameworks. We architect compute sizing and deployment topologies that ensure consistent throughput, automated scaling, and reliable execution across varied application lifecycles.',
      capabilities: [
        'Virtual machine and compute configuration',
        'Application hosting environments',
        'Container and orchestration platforms',
        'Compute sizing and capacity planning',
        'Workload deployment architecture'
      ],
      image: '/images/cloud/public_cloud_compute_hosting.jpg',
      imageAlt:
        'Compute and Application Hosting - Modern enterprise datacenter with server racks, cloud infrastructure, and engineering team collaborating on workloads',
      badge: 'ELASTIC COMPUTE & KUBERNETES FABRIC',
      imageLeft: true
    },
    {
      number: '03',
      id: 'section-03',
      heading: 'Cloud Networking and Connectivity',
      subheading: 'Connect Cloud Resources Securely',
      description:
        'Robust virtual networking establishes protected communication paths between distributed applications, corporate datacenters, and end users. We design segmented virtual private clouds (VPCs), transit gateways, dedicated direct connects, and intelligent traffic routing to ensure high throughput, predictable latency, and granular perimeter protection.',
      capabilities: [
        'Virtual networks and subnet design',
        'Network segmentation and routing',
        'Private and hybrid connectivity',
        'Load balancing and traffic distribution',
        'DNS and connectivity architecture'
      ],
      image: '/images/cloud/public_cloud_networking.jpg',
      imageAlt:
        'Cloud Networking and Connectivity - 3D isometric cloud networking platform showing central cloud core and interconnected endpoints',
      badge: 'TRANSIT GATEWAY & CARRIER-GRADE VPCS',
      imageLeft: false
    },
    {
      number: '04',
      id: 'section-04',
      heading: 'Cloud Storage and Database Services',
      subheading: 'Build the Right Foundation for Enterprise Data',
      description:
        'Storage tiers and database services must be selected based on access frequencies, throughput constraints, relational integrity, retention lifecycles, and recovery point objectives. Knooviq architects scalable block volumes, elastic object repositories, managed relational engines, and distributed NoSQL databases with continuous automated protection.',
      capabilities: [
        'Object, block, and file storage architecture',
        'Managed database service selection',
        'Data access and lifecycle planning',
        'Backup and recovery integration',
        'Storage governance and protection'
      ],
      image: '/images/cloud/public_cloud_storage_db.jpg',
      imageAlt:
        'Cloud Storage and Database Services - 3D architecture showing central tiered database cylinder receiving cloud data streams and storage endpoints',
      badge: 'HIGH-IOPS STORAGE & DISTRIBUTED DBS',
      imageLeft: true
    },
    {
      number: '05',
      id: 'section-05',
      heading: 'Cloud Security and Identity',
      subheading: 'Build Security into the Cloud Foundation',
      description:
        'Enterprise cloud environments require identity-centric controls, fine-grained access policies, micro-segmented network boundaries, and cryptographic protection at rest and in transit. We embed zero-trust governance, role-based access controls, key management hierarchies, and posture monitoring into the foundational fabric of your cloud estate.',
      capabilities: [
        'Identity and access management',
        'Role-based access and permissions',
        'Network security configuration',
        'Security posture and configuration reviews',
        'Data protection and audit readiness'
      ],
      image: '/images/cloud/public_cloud_security_iam.jpg',
      imageAlt:
        'Cloud Security and Identity - Cloud security assessment showing shield-protected cloud, posture monitoring dashboard, and compliance audit checklist',
      badge: 'ZERO-TRUST IAM & KMS KEY HIERARCHY',
      imageLeft: false
    },
    {
      number: '06',
      id: 'section-06',
      heading: 'Cloud Governance and Cost Management',
      subheading: 'Maintain Control Over Cloud Resources',
      description:
        'Effective cloud governance provides complete visibility and accountability across multi-account hierarchies, automated resource tagging, and operational policies. We implement FinOps cost allocation frameworks, policy-as-code guardrails, and continuous utilization reviews to prevent budget overruns while maintaining developer velocity.',
      capabilities: [
        'Resource tagging and ownership policies',
        'Cloud account and subscription organization',
        'Budgeting and cost allocation practices',
        'Resource utilization reviews',
        'Governance policies and configuration standards'
      ],
      image: '/images/cloud/public_cloud_governance_cost.jpg',
      imageAlt:
        'Cloud Governance and Cost Management - Secure, compliant, and cost-optimized cloud environment showing policy controls, cloud spend dashboard, and resource governance',
      badge: 'GOVERNANCE & FINOPS COST CONTROL',
      imageLeft: true
    },
    {
      number: '07',
      id: 'section-07',
      heading: 'Cloud Resilience and Scalability',
      subheading: 'Prepare Your Infrastructure for Changing Demand',
      description:
        'Resilient systems withstand localized datacenter disruptions through multi-availability zone replication, automated health checks, dynamic scaling, and disciplined failover runbooks. Knooviq architects high-availability cloud topographies that dynamically adapt to traffic surges and ensure rapid recovery from unexpected outages.',
      capabilities: [
        'Auto-scaling architecture',
        'Load distribution and availability design',
        'Multi-zone deployment planning',
        'Disaster recovery architecture',
        'Capacity and resilience assessment'
      ],
      image: '/images/cloud/public_cloud_resilience.jpg',
      imageAlt:
        'Cloud Resilience and Scalability - High-availability cloud architecture with automated failover, elastic scaling, enterprise server clusters, and continuous data protection',
      badge: 'HIGH-AVAILABILITY & RESILIENCE CLUSTERS',
      imageLeft: false
    }
  ];

  // Section 5: Public Cloud Platforms We Work With
  const cloudProviders = [
    {
      name: 'Amazon Web Services (AWS)',
      shortName: 'AWS',
      tagline: 'Global Hyperscaler Infrastructure & Cloud-Native Services',
      path: '/cloud-operations/aws',
      badge: 'HYPERSCALER',
      color: '#FF9900',
      description:
        'Scalable cloud infrastructure utilizing Amazon EC2, managed EKS containers, multi-AZ Aurora databases, and Transit Gateways designed for high availability and enterprise compliance.',
      coreServices: [
        'Amazon EC2, ECS & EKS Container Orchestration',
        'Amazon Aurora & DynamoDB Managed Databases',
        'AWS Transit Gateway & Direct Connect Hybrid Networking',
        'AWS Organizations, IAM Identity Center & Control Tower'
      ]
    },
    {
      name: 'Microsoft Azure',
      shortName: 'Azure',
      tagline: 'Enterprise Cloud Ecosystem & Seamless Hybrid Integration',
      path: '/cloud-operations/azure',
      badge: 'HYPERSCALER',
      color: '#0089D6',
      description:
        'Enterprise landing zones built on Azure Virtual Machines, Azure Kubernetes Service (AKS), Azure SQL Managed Instances, and Entra ID federation aligned with enterprise Microsoft agreements.',
      coreServices: [
        'Azure Virtual Machines & Azure Kubernetes Service (AKS)',
        'Azure SQL Database & Cosmos DB Multi-Model Stores',
        'Azure Virtual WAN, ExpressRoute & Private Endpoint Links',
        'Microsoft Entra ID, Azure Policy & Defender for Cloud'
      ]
    },
    {
      name: 'Google Cloud Platform (GCP)',
      shortName: 'Google Cloud',
      tagline: 'Open Cloud Architecture, Advanced Data & Container Leadership',
      path: '/cloud-operations/gcp',
      badge: 'HYPERSCALER',
      color: '#4285F4',
      description:
        'High-performance workloads engineered on Google Kubernetes Engine (GKE Autopilot), BigQuery data intelligence, Cloud Spanner global consistency, and VPC Service Controls.',
      coreServices: [
        'Google Compute Engine & GKE Autopilot Clusters',
        'Cloud Spanner, Cloud SQL & BigQuery Analytics',
        'VPC Service Controls, Cloud Interconnect & Global Load Balancing',
        'Google Cloud IAM, Security Command Center & Policy Intelligence'
      ]
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
            <span className="text-slate-900 dark:text-white font-medium">Public Cloud</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          HERO SECTION — BUILD AND RUN YOUR BUSINESS ON PUBLIC CLOUD
          (Cinematic Full-Bleed Enterprise Hero with Full-Screen Background Image)
         ========================================================================= */}
      <section className="relative w-full min-h-[560px] sm:min-h-[580px] lg:min-h-[640px] flex items-center overflow-hidden bg-[#040B17] text-white border-b border-slate-800 shadow-2xl py-16 sm:py-20 lg:py-24">
        
        {/* Full-Bleed Enterprise Background Image */}
        <div className="absolute inset-0 z-0 group/hero pointer-events-none">
          <img 
            src="/images/cloud/public_cloud_hero.jpg" 
            alt="Build and Run Your Business on Public Cloud - Reference Architecture showing connected devices, enterprise services, and cloud compute" 
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
              <Cloud className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>CLOUD INFRASTRUCTURE &amp; PLATFORMS</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.16] text-white drop-shadow-md">
              Build and Run Your Business on{' '}
              <span className="text-[#00A3E0]">Public Cloud</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed drop-shadow-sm max-w-2xl">
              Public cloud provides access to computing, storage, networking, databases, and managed services without requiring organizations to own and maintain all the underlying infrastructure. Knooviq supports the design of cloud environments around application requirements, security policies, infrastructure needs, and long-term technology plans.
            </p>



            {/* Key Architecture Badges */}
            <div className="pt-6 border-t border-white/15 grid grid-cols-3 gap-4 text-xs max-w-xl backdrop-blur-[2px]">
              <div>
                <span className="font-mono text-[#00A3E0] font-bold block text-sm sm:text-base">Multi-AZ</span>
                <span className="text-slate-300 mt-0.5 block">High Availability</span>
              </div>
              <div>
                <span className="font-mono text-[#00A3E0] font-bold block text-sm sm:text-base">Zero-Trust</span>
                <span className="text-slate-300 mt-0.5 block">Security Baseline</span>
              </div>
              <div>
                <span className="font-mono text-[#00A3E0] font-bold block text-sm sm:text-base">FinOps</span>
                <span className="text-slate-300 mt-0.5 block">Cost Optimization</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: THE PUBLIC CLOUD ADVANTAGE (Compact White Section)
         ========================================================================= */}
      <section className="py-14 sm:py-16 bg-white dark:bg-[#070E1C] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Header */}
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00A3E0] block">
              ENTERPRISE CAPABILITIES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 dark:text-white tracking-tight">
              The Public Cloud Advantage
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Public cloud gives organizations the flexibility to scale, innovate, and respond to changing business needs. The right architecture, governance, and operating practices help establish a reliable foundation for enterprise workloads.
            </p>
          </div>

          {/* 5 Compact Capability Highlights with Outline Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {cloudAdvantages.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/5 space-y-3 hover:border-[#00A3E0]/40 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-100 dark:border-cyan-800/30 flex items-center justify-center text-[#00A3E0]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: EXACTLY SEVEN MAIN SERVICE SECTIONS (Alternating 2-Column with Clear 3D Architecture Diagrams)
         ========================================================================= */}
      <div id="capabilities" className="divide-y divide-slate-200 dark:divide-white/10">
        {mainServices.map((service) => (
          <section
            key={service.number}
            id={service.id}
            className="py-16 sm:py-20 bg-white dark:bg-[#060D1A] transition-colors"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                
                {/* Text Content Column */}
                <div className={`lg:col-span-6 space-y-5 ${service.imageLeft ? 'lg:order-2' : 'lg:order-1'}`}>
                  
                  {/* Numbered Section Label */}
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-[#00A3E0]/10 text-[#00A3E0] font-mono text-xs font-bold flex items-center justify-center border border-[#00A3E0]/20">
                      {service.number}
                    </span>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00A3E0]">
                      SERVICE DOMAIN {service.number}
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

                  {/* Short Description */}
                  <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {service.description}
                  </p>

                  {/* Concise Capabilities List */}
                  <div className="pt-2 space-y-2.5">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                      Core Architecture Capabilities
                    </span>
                    <div className="space-y-2">
                      {service.capabilities.map((cap, cIdx) => (
                        <div
                          key={cIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                          <span className="leading-relaxed font-medium">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Technical Architecture Diagram Column */}
                <div className={`lg:col-span-6 ${service.imageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="group relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-900 transition-all">
                    {/* Fixed High-DPI Aspect Ratio Container */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                      <img
                        src={service.image}
                        alt={service.imageAlt}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 filter brightness-100 contrast-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                      {/* Floating Badge (Top Left) */}
                      <div className="absolute top-3.5 left-3.5">
                        <span className="px-3 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-cyan-400/30 text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-300 flex items-center gap-1.5">
                          <Sparkles className="w-3 h-3 text-[#00A3E0]" />
                          <span>{service.badge}</span>
                        </span>
                      </div>

                      {/* Floating Subtitle / Tech Spec on Image (Bottom Left) */}
                      <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-xs text-slate-200 select-text">
                        <span className="font-mono text-[11px] text-cyan-200 truncate">
                          {service.subheading}
                        </span>
                      </div>
                    </div>

                    {/* Caption Overlay */}
                    <div className="p-3.5 bg-slate-50 dark:bg-[#0B1528] border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">
                        FIGURE {service.number}: {service.heading.toUpperCase()}
                      </span>
                      <span className="text-[#00A3E0] font-bold flex items-center gap-1">
                        <span>ARCHITECTURE SPEC</span>
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
          SECTION 5: PUBLIC CLOUD PLATFORMS WE WORK WITH (Full-Width Navy Section)
         ========================================================================= */}
      <section className="py-20 bg-[#060D1A] text-white border-t border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header */}
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00A3E0] block">
              HYPERSCALER PLATFORMS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight">
              Public Cloud Platforms We Work With
            </h2>
            <p className="text-base text-slate-300 leading-relaxed font-normal">
              Cloud architecture and implementation can be tailored to the organization's workloads, technical requirements, and preferred cloud environment.
            </p>
          </div>

          {/* 3 Hyperscaler Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cloudProviders.map((provider) => (
              <div
                key={provider.name}
                className="p-6 sm:p-7 rounded-2xl bg-[#091528] border border-slate-800 transition-all flex flex-col justify-between space-y-6 select-text"
              >
                <div className="space-y-4">
                  
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white/10 text-slate-300">
                      {provider.badge}
                    </span>
                    <Cloud className="w-4 h-4 text-[#00A3E0]" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {provider.name}
                    </h3>
                    <p className="text-xs font-mono text-[#00A3E0] mt-1">
                      {provider.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {provider.description}
                  </p>

                  <div className="pt-2 border-t border-slate-800 space-y-2">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                      Core Platform Capabilities
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {provider.coreServices.map((svc, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3E0] shrink-0 mt-0.5" />
                          <span>{svc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          RELATED CLOUD SERVICES (Cross-Navigation)
         ========================================================================= */}
      <RelatedCloudServices currentPath="/cloud-operations/infrastructure/public-cloud" />

      {/* =========================================================================
          SECTION 6: CONSULTATION CTA SECTION
         ========================================================================= */}
      <CloudConsultationCTA
        onOpenContact={() => onOpenContact && onOpenContact('Public Cloud Architecture Consulting')}
        title="Ready to Build or Optimize Your Public Cloud Architecture?"
        description="Connect with our enterprise cloud architects to review workload requirements, evaluate hyperscaler platform suitability, and design a secure, cost-optimized public cloud foundation."
        primaryBtnText="Talk to Our Cloud Experts"
        secondaryBtnText="Explore Private Cloud"
        secondaryBtnLink="/cloud-operations/infrastructure/private-cloud"
      />

      {/* =========================================================================
          HIGH-DEFINITION LIGHTBOX MODAL (Full-Screen High-Res Architecture Viewer)
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
                    {lightboxImage.figure} &bull; FULL-SCREEN ARCHITECTURE BLUEPRINT
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
                aria-label="Close diagram modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Display */}
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
                <span>100% High-Resolution Architecture Visual</span>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
