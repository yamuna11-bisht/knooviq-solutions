import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  Server,
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
  Network,
  Zap,
  HardDrive,
  RefreshCw,
  GitBranch
} from 'lucide-react';
import { CloudOperationsHero } from '../../components/cloud/CloudOperationsHero';
import { RelatedCloudServices } from '../../components/cloud/RelatedCloudServices';
import { CloudConsultationCTA } from '../../components/cloud/CloudConsultationCTA';

interface ChildPageProps {
  onOpenContact?: (topic?: string) => void;
}

export const CloudInfrastructurePage: React.FC<ChildPageProps> = ({ onOpenContact }) => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<number>(0);
  const [activeTier, setActiveTier] = useState<number>(0);
  const [activePhase, setActivePhase] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    document.title = 'Cloud Infrastructure & Platforms | Public, Private & Hybrid | KNOOVIQ';
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    // Support ?tab= query parameter
    const tabParam = searchParams.get('tab');
    if (tabParam === 'public') setActiveTab(0);
    else if (tabParam === 'private') setActiveTab(1);
    else if (tabParam === 'hybrid') setActiveTab(2);
    else if (tabParam === 'architecture') setActiveTab(3);
  }, [searchParams]);

  const infrastructurePillars = [
    {
      id: 'public',
      title: 'Public Cloud Platforms',
      badge: 'HYPERSCALER INFRASTRUCTURE',
      subtitle: 'Multi-AZ high availability, elastic compute scaling, and globally distributed VPC topologies.',
      image: '/images/cloud/public_cloud_hero.jpg',
      subParts: [
        {
          name: 'Elastic Compute Clustering',
          description: 'Auto-scaling instance fleets across multi-Availability Zones with automated load balancing and zero-downtime rolling upgrades.',
          spec: '99.99% infrastructure uptime SLA with automated cross-AZ failover under 30 seconds'
        },
        {
          name: 'Software-Defined Cloud VPCs',
          description: 'Isolated virtual private clouds, transit gateway meshes, egress proxy firewalls, and carrier-grade subnet routing.',
          spec: 'Isolated multi-tier network topologies with micro-segmentation security policies'
        },
        {
          name: 'Distributed Object & Block Storage',
          description: 'High-throughput NVMe block volumes and lifecycle-managed object tiers with automated geo-replication.',
          spec: '11 9s (99.999999999%) data durability with automated cryptographic envelope encryption'
        },
        {
          name: 'Infrastructure-as-Code Automation',
          description: 'Declarative Terraform and OpenTofu modules managing 100% of cloud resources with automated drift detection.',
          spec: 'GitOps CI/CD pipelines enforcing policy-as-code validations prior to merge'
        }
      ]
    },
    {
      id: 'private',
      title: 'Private Cloud & Bare Metal',
      badge: 'SOVEREIGN & AIR-GAPPED',
      subtitle: 'Dedicated on-premises hyperconverged platforms, VMware sovereign clouds, and compliant air-gapped compute.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80',
      subParts: [
        {
          name: 'Hyperconverged Infrastructure (HCI)',
          description: 'Integrated compute, storage, and networking pools powered by Nutanix, VMware vSphere, and OpenStack environments.',
          spec: 'Sub-millisecond flash NVMe latency with zero public cloud telemetry exposure'
        },
        {
          name: 'Sovereign Data Storage Clusters',
          description: 'On-premises enterprise SAN/NAS fabrics with strict jurisdictional data residency guarantees.',
          spec: '100% local regulatory compliance ensuring data never crosses geopolitical borders'
        },
        {
          name: 'Hardware Virtualization & Micro-segmentation',
          description: 'Kernel-based virtualization and software-defined switching with hardware root of trust and TPM 2.0 attestation.',
          spec: 'Full isolation between multi-tenant business units and critical production workloads'
        },
        {
          name: 'Private Cloud Self-Service Portals',
          description: 'Role-based automated VM and container provisioning workflows integrated with corporate LDAP and ServiceNow.',
          spec: 'Automated catalog provisioning reducing server delivery from 3 weeks to 8 minutes'
        }
      ]
    },
    {
      id: 'hybrid',
      title: 'Hybrid Cloud Mesh & Interconnects',
      badge: 'ENTERPRISE CONNECTIVITY',
      subtitle: 'Dedicated Direct Connect and ExpressRoute fiber pipelines bridging on-prem data centers with hyperscalers.',
      image: '/images/cloud/hybrid_cloud_hero.jpg',
      subParts: [
        {
          name: 'Dedicated Cloud Interconnects (DX/ExpressRoute)',
          description: 'Redundant 10 Gbps / 100 Gbps dedicated fiber cross-connects with BGP dynamic routing and MACsec line-rate encryption.',
          spec: 'Sub-5ms deterministic latency between corporate core datacenters and hyperscaler regions'
        },
        {
          name: 'Hybrid Container Orchestration',
          description: 'Single-pane container fleet management utilizing Red Hat OpenShift, Google Anthos, and AWS EKS Anywhere.',
          spec: 'Consistent Kubernetes APIs and CI/CD deployment pipelines across on-prem and public cloud'
        },
        {
          name: 'Synchronous Data Replication & Bursting',
          description: 'Hybrid storage caching and active-active database clustering enabling burstable peak compute offloading.',
          spec: 'Automated burst-capacity elasticity handling 10x traffic spikes without on-prem hardware purchases'
        },
        {
          name: 'Unified Hybrid Governance & Monitoring',
          description: 'Centralized observability aggregating telemetry across physical servers, hypervisors, and multi-cloud accounts.',
          spec: 'Single pane of glass tracking unified health, telemetry, and security policies'
        }
      ]
    },
    {
      id: 'architecture',
      title: 'Cloud Architecture & Well-Architected Framework',
      badge: 'ENTERPRISE PATTERNS',
      subtitle: 'Architectural blueprints aligned with Hyperscaler Well-Architected Frameworks across Reliability, Security, and Cost.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=80',
      subParts: [
        {
          name: 'Multi-Region High Availability & Failover',
          description: 'Active-active and active-passive multi-region architectures with global anycast DNS routing and automated health probes.',
          spec: 'RTO under 15 minutes, RPO under 60 seconds across catastrophic regional outages'
        },
        {
          name: 'Decoupled Microservices Patterns',
          description: 'Event-driven asynchronous architectures utilizing Kafka, SQS/SNS, and API gateways for horizontal elasticity.',
          spec: 'Decoupled fault domains ensuring individual component failures do not cascade'
        },
        {
          name: 'Well-Architected Reviews (WAR)',
          description: 'Structured technical audits across Operational Excellence, Security, Reliability, Performance, and Cost Optimization.',
          spec: 'Actionable remediation roadmap eliminating high-risk architectural findings within 30 days'
        },
        {
          name: 'Cloud Network Security Perimeters',
          description: 'Next-gen cloud firewalls, distributed denial-of-service (DDoS) mitigation, and WAF inspection layers.',
          spec: 'Zero-trust perimeter inspecting 100% of ingress and egress packet flows'
        }
      ]
    }
  ];

  const infrastructureTiers = [
    {
      title: 'Tier 01: Edge & Network Interconnect Mesh',
      desc: 'Global Anycast CDN points of presence, dedicated cloud direct connect cross-connects, and transit gateway routing backbones.',
      components: [
        { name: 'Redundant Direct Connect & ExpressRoute', role: 'Dedicated 10Gbps line-rate encrypted hybrid pipeline' },
        { name: 'Transit Gateway Multi-VPC Hub', role: 'Centralized routing fabric connecting thousands of cloud VPCs' },
        { name: 'Global Cloud Edge CDN & WAF', role: 'Edge caching and sub-second distributed DDoS mitigation' },
        { name: 'Zero Trust Network Access (ZTNA)', role: 'Identity-aware micro-tunnels replacing legacy slow VPNs' }
      ]
    },
    {
      title: 'Tier 02: Sovereign & Private Cloud Compute Foundation',
      desc: 'Hyperconverged compute clusters, on-prem bare metal hypervisors, and air-gapped sovereign data repositories.',
      components: [
        { name: 'Nutanix / VMware HCI Cluster', role: 'Sub-millisecond flash storage and elastic virtualization pool' },
        { name: 'OpenStack Sovereign Cloud Fabric', role: 'Air-gapped compute orchestration complying with local data sovereignty' },
        { name: 'High-Throughput NVMe SAN Fabric', role: 'Tier-1 database block storage with zero virtualization overhead' },
        { name: 'Automated Bare Metal Provisioner', role: 'PXE boot and Terraform metal controllers for rapid node expansion' }
      ]
    },
    {
      title: 'Tier 03: Hyperscaler Elastic Cloud Workload Tier',
      desc: 'Multi-AZ auto-scaling instance fleets, managed Kubernetes clusters, and serverless compute runtimes.',
      components: [
        { name: 'Managed Kubernetes (EKS / AKS / GKE)', role: 'Production container fleet with automated node pool autoscaling' },
        { name: 'Hyperscaler Elastic Compute Fleets', role: 'Spot and on-demand mixed instance scaling for optimal cost-performance' },
        { name: 'Distributed Managed Database Clusters', role: 'Multi-AZ Aurora, Cloud SQL, and Cosmos DB transactional backbones' },
        { name: 'Serverless Event Triggers & Functions', role: 'Event-driven compute executing stateless business workloads' }
      ]
    },
    {
      title: 'Tier 04: GitOps & Declarative IaC Control Plane',
      desc: 'Infrastructure-as-Code automation, policy-as-code security guardrails, and automated drift reconciliation engines.',
      components: [
        { name: 'Terraform & OpenTofu Enterprise Modules', role: 'Version-controlled infrastructure templates across all environments' },
        { name: 'ArgoCD / Flux GitOps Continuous Delivery', role: 'Automated synchronization between Git commits and live clusters' },
        { name: 'OPA (Open Policy Agent) Guardrails', role: 'Automated security checks preventing unencrypted or misconfigured deployments' },
        { name: 'Continuous Drift Detection Engine', role: 'Real-time alert dispatching when manual console edits violate code state' }
      ]
    }
  ];

  const deliveryPhases = [
    {
      stage: 'Phase 01',
      title: 'Network & Cloud Infrastructure Audit',
      badge: 'DISCOVERY',
      desc: 'Deep audit of existing datacenter capacity, fiber latency, hypervisor utilization, and public cloud account posture.',
      deliverables: ['Network Latency & Topology Map', 'Hypervisor Capacity Benchmark', 'Cloud Security Posture Audit'],
      gate: 'Discovery Gate: Comprehensive inventory and latency feasibility validated'
    },
    {
      stage: 'Phase 02',
      title: 'Multi-Cloud Landing Zone Architecture',
      badge: 'DESIGN & BLUEPRINT',
      desc: 'Architecting modular multi-account structures, transit network routing hubs, and zero-trust perimeter firewalls.',
      deliverables: ['Landing Zone HLD & LLD', 'IP Addressing & CIDR Plan', 'Security Perimeter Architecture'],
      gate: 'Design Gate: Executive and Infosec sign-off on landing zone network topology'
    },
    {
      stage: 'Phase 03',
      title: 'IaC Pipeline & Automation Deployment',
      badge: 'AUTOMATION',
      desc: 'Deploying declarative Terraform modules, GitOps deployment engines, and policy-as-code guardrails.',
      deliverables: ['Terraform Modular Codebase', 'GitOps Deployment Pipelines', 'Policy-as-Code Rule Library'],
      gate: 'Testing Gate: Automated drift reconciliation and security linting verified'
    },
    {
      stage: 'Phase 04',
      title: 'Workload Migration & Hybrid Link Cutover',
      badge: 'PROVISIONING & CUTOVER',
      desc: 'Provisioning compute pools, establishing redundant direct connects, and shifting production network traffic.',
      deliverables: ['Dedicated Interconnect Activation', 'Compute Cluster Fleet Scaling', 'Cutover Smoke Test Report'],
      gate: 'Cutover Gate: Production cutover completed with sub-minute failover SLA verified'
    },
    {
      stage: 'Phase 05',
      title: 'Well-Architected Governance & 24/7 Operations',
      badge: 'CONTINUOUS RUN',
      desc: 'Handover to 24x7 infrastructure engineering teams with continuous Well-Architected reviews and rightsizing.',
      deliverables: ['Operational Runbooks & SOPs', 'Well-Architected Scorecard', 'Rightsizing & FinOps Baseline'],
      gate: 'Operational Gate: 99.99% infrastructure availability SLA contract established'
    }
  ];

  const infrastructureFaqs = [
    {
      question: 'How do you design for high availability across Public, Private, and Hybrid architectures?',
      answer: 'We architect active-active and active-passive topologies across geographically isolated Availability Zones and hybrid colocation datacenters. Using redundant BGP routing, global Anycast DNS, health-checking load balancers, and asynchronous database replication, we eliminate single points of failure and guarantee 99.99% availability.'
    },
    {
      question: 'What is the advantage of using Infrastructure-as-Code (IaC) with Terraform for our cloud platforms?',
      answer: 'Terraform and OpenTofu allow your entire infrastructure (VPCs, firewalls, subnets, Kubernetes clusters, and IAM permissions) to be version-controlled in Git. This eliminates manual configuration errors, allows instant staging environment replication, enforces peer review, and provides continuous drift detection.'
    },
    {
      question: 'How does KNOOVIQ ensure data sovereignty in hybrid and private cloud setups?',
      answer: 'For regulated industries (banking, defense, government, healthcare), we deploy private cloud hyperconverged platforms (OpenStack/VMware) situated strictly within domestic borders. We implement hardware security modules (HSM) with customer-controlled cryptographic keys, ensuring complete data sovereignty.'
    },
    {
      question: 'What dedicated connectivity options are best for hybrid cloud integrations?',
      answer: 'We architect and provision redundant 10 Gbps / 100 Gbps dedicated interconnects (AWS Direct Connect, Azure ExpressRoute, GCP Cloud Interconnect) paired with backup IPsec VPN tunnels. This setup delivers predictable sub-5ms latency and eliminates public internet transit risks.'
    },
    {
      question: 'How often are Well-Architected Framework Reviews conducted for our cloud environments?',
      answer: 'We conduct Well-Architected reviews quarterly or ahead of major workload deployments. Audits evaluate Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, and Sustainability, ensuring your environment constantly aligns with hyperscaler best practices.'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#050B17] text-slate-900 dark:text-white transition-colors duration-300">
      
      {/* SECTION 01: HERO */}
      <CloudOperationsHero
        badgeText="INFRASTRUCTURE & PLATFORMS PRACTICE"
        badgeIcon={<Server className="w-3.5 h-3.5 text-[#00A3E0]" />}
        heading="Cloud Infrastructure & Platforms"
        headline="Enterprise Public, Private & Hybrid Cloud Architectures Engineered for Scale"
        description="Design, provision, and operate resilient multi-cloud foundations. From hyperscaler landing zones and on-prem private clouds to dedicated hybrid fiber interconnects and Well-Architected frameworks."
        primaryCtaText="Explore Cloud Platforms"
        primaryCtaHref="#capabilities"
        secondaryCtaText="Consult Infrastructure Lead"
        secondaryCtaAction={() => onOpenContact && onOpenContact('Cloud Infrastructure Architecture')}
        currentPage="Cloud Infrastructure & Platforms"
        heroImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
        stats={[
          { label: "Uptime SLA", value: "99.99%", subtext: "Multi-AZ Resilience" },
          { label: "Interconnect Latency", value: "<5ms", subtext: "Dedicated Cloud Mesh" },
          { label: "IaC Automation", value: "100%", subtext: "Terraform & GitOps" },
          { label: "Data Durability", value: "11 9s", subtext: "Encrypted Storage" }
        ]}
      />

      {/* SECTION 02: CAPABILITY PILLARS (SECTION WITHIN SECTION + IMAGE) */}
      <section id="capabilities" className="py-20 bg-slate-50 dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
              <span>SECTION 02 &bull; INFRASTRUCTURE DOMAINS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Four Core Infrastructure Pillars (Section-within-Section)
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Select any infrastructure domain below to inspect its detailed specifications, engineering standards, and enterprise architecture deliverables.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {infrastructurePillars.map((pillar, idx) => (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(idx)}
                className={`p-4 rounded-2xl text-left transition-all border cursor-pointer ${
                  activeTab === idx
                    ? 'bg-white dark:bg-[#0B1528] border-[#00A3E0] shadow-lg shadow-[#00A3E0]/15'
                    : 'bg-white/60 dark:bg-[#070E1E] border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${
                    activeTab === idx ? 'text-[#00A3E0] dark:text-cyan-400' : 'text-slate-400'
                  }`}>
                    DOMAIN 0{idx + 1}
                  </span>
                  {activeTab === idx && (
                    <span className="w-2 h-2 rounded-full bg-[#00A3E0] animate-pulse" />
                  )}
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mt-1 line-clamp-1">
                  {pillar.title}
                </h3>
              </button>
            ))}
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 shadow-xl space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-3">
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold tracking-wider">
                  {infrastructurePillars[activeTab].badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                  {infrastructurePillars[activeTab].title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {infrastructurePillars[activeTab].subtitle}
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-lg aspect-video">
                  <img
                    src={infrastructurePillars[activeTab].image}
                    alt={infrastructurePillars[activeTab].title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium backdrop-blur-md bg-black/40 p-2 rounded-lg border border-white/20">
                    Production Architecture Validated &bull; KNOOVIQ Enterprise Infrastructure Practice
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-200 dark:border-white/10 pt-6">
              <h4 className="text-xs font-mono font-bold text-[#00A3E0] dark:text-cyan-400 uppercase tracking-wider mb-4">
                DETAILED ARCHITECTURAL CAPABILITIES & STANDARDS:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {infrastructurePillars[activeTab].subParts.map((sub, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-5 rounded-2xl bg-slate-50 dark:bg-[#070E1E] border border-slate-200 dark:border-white/5 space-y-2 hover:border-[#00A3E0]/40 transition-colors"
                  >
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                      <div>
                        <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                          {sub.name}
                        </h5>
                        <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                          {sub.description}
                        </p>
                        <div className="mt-2.5 pt-2 border-t border-slate-200/60 dark:border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-cyan-700 dark:text-cyan-300 font-semibold">
                          <Activity className="w-3 h-3 text-[#00A3E0]" />
                          <span>SPEC: {sub.spec}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {activeTab === 0 && (
              <div className="p-4 rounded-xl bg-cyan-50 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-800/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="text-xs text-slate-700 dark:text-slate-300">
                  Looking for our comprehensive 7-domain Public Cloud Architecture and Services guide?
                </div>
                <Link
                  to="/cloud-operations/infrastructure/public-cloud"
                  className="text-xs font-bold text-[#00A3E0] hover:underline flex items-center gap-1 shrink-0"
                >
                  <span>Explore Dedicated Public Cloud Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}

            {activeTab === 1 && (
              <div className="p-4 rounded-xl bg-cyan-50 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-800/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="text-xs text-slate-700 dark:text-slate-300">
                  Looking for our comprehensive dedicated Private Cloud Solutions &amp; Architecture guide?
                </div>
                <Link
                  to="/cloud-operations/infrastructure/private-cloud"
                  className="text-xs font-bold text-[#00A3E0] hover:underline flex items-center gap-1 shrink-0"
                >
                  <span>Explore Dedicated Private Cloud Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}

            {activeTab === 2 && (
              <div className="p-4 rounded-xl bg-cyan-50 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-800/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="text-xs text-slate-700 dark:text-slate-300">
                  Looking for our comprehensive dedicated Hybrid Cloud Architecture &amp; Orchestration guide?
                </div>
                <Link
                  to="/cloud-operations/infrastructure/hybrid-cloud"
                  className="text-xs font-bold text-[#00A3E0] hover:underline flex items-center gap-1 shrink-0"
                >
                  <span>Explore Dedicated Hybrid Cloud Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}

            {activeTab === 3 && (
              <div className="p-4 rounded-xl bg-cyan-50 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-800/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="text-xs text-slate-700 dark:text-slate-300">
                  Looking for our comprehensive dedicated Enterprise Cloud Architecture &amp; Systems Engineering guide?
                </div>
                <Link
                  to="/cloud-operations/infrastructure/cloud-architecture"
                  className="text-xs font-bold text-[#00A3E0] hover:underline flex items-center gap-1 shrink-0"
                >
                  <span>Explore Dedicated Cloud Architecture Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200 dark:border-white/10">
              <div className="text-xs text-slate-500 dark:text-slate-400">
                Need customized sizing for hyperscaler or private datacenter workloads?
              </div>
              <button
                onClick={() => onOpenContact && onOpenContact(`Cloud Infrastructure: ${infrastructurePillars[activeTab].title}`)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00A3E0] hover:bg-[#0087ba] text-white text-xs font-bold transition-all shadow-md cursor-pointer"
              >
                <span>Request {infrastructurePillars[activeTab].title} Blueprint</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 03: ARCHITECTURAL BLUEPRINT (4-TIER FABRIC) */}
      <section id="architecture" className="py-20 bg-white dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
              <span>SECTION 03 &bull; ARCHITECTURAL FABRIC</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              4-Tier Enterprise Cloud Infrastructure Fabric
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              End-to-end multi-cloud topology bridging physical fiber edges, private sovereign computing, and hyperscaler container fleets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            {infrastructureTiers.map((tier, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTier(idx)}
                className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                  activeTier === idx
                    ? 'bg-[#00A3E0] text-white border-[#00A3E0] shadow-lg shadow-[#00A3E0]/20'
                    : 'bg-slate-50 dark:bg-[#0B1528] text-slate-900 dark:text-white border-slate-200 dark:border-white/10 hover:border-[#00A3E0]/40'
                }`}
              >
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider opacity-80">
                  TIER 0{idx + 1}
                </div>
                <div className="text-xs font-black mt-1 line-clamp-1">
                  {tier.title.split(':')[1] || tier.title}
                </div>
              </button>
            ))}
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 shadow-xl space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-[#00A3E0] dark:text-cyan-400 uppercase tracking-widest">
                ACTIVE ARCHITECTURAL LEVEL SPECIFICATION
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                {infrastructureTiers[activeTier].title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl">
                {infrastructureTiers[activeTier].desc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-200 dark:border-white/10">
              {infrastructureTiers[activeTier].components.map((c, cIdx) => (
                <div
                  key={cIdx}
                  className="p-4 rounded-xl bg-white dark:bg-[#070E1E] border border-slate-200 dark:border-white/10 space-y-1 hover:border-[#00A3E0]/40 transition-colors"
                >
                  <div className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                    {c.name}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 pl-3.5">
                    {c.role}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 04: DELIVERY METHODOLOGY & ROADMAP */}
      <section id="methodology" className="py-20 bg-slate-50 dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
              <span>SECTION 04 &bull; IMPLEMENTATION ENGINE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              5-Phase Cloud Infrastructure Delivery Methodology
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Structured engineering phases with formal deliverables, security gates, and automated cutover smoke tests.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3">
            {deliveryPhases.map((phase, idx) => (
              <button
                key={idx}
                onClick={() => setActivePhase(idx)}
                className={`p-3 sm:p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                  activePhase === idx
                    ? 'bg-white dark:bg-[#0B1528] border-[#00A3E0] shadow-md ring-2 ring-[#00A3E0]/20'
                    : 'bg-white/60 dark:bg-[#070E1E] border-slate-200 dark:border-white/10 hover:border-slate-300'
                }`}
              >
                <span className={`text-[10px] font-mono font-bold uppercase ${
                  activePhase === idx ? 'text-[#00A3E0] dark:text-cyan-400' : 'text-slate-400'
                }`}>
                  {phase.stage}
                </span>
                <div className="text-xs font-bold text-slate-900 dark:text-white mt-1 line-clamp-1">
                  {phase.badge}
                </div>
              </button>
            ))}
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 shadow-xl space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-bold text-[#00A3E0] dark:text-cyan-400 uppercase tracking-widest">
                  {deliveryPhases[activePhase].stage} &bull; {deliveryPhases[activePhase].badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">
                  {deliveryPhases[activePhase].title}
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold">
                STAGE-GATE COMPLIANT
              </span>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {deliveryPhases[activePhase].desc}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-200 dark:border-white/10">
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  VERIFIED DELIVERABLES:
                </h4>
                <ul className="space-y-2">
                  {deliveryPhases[activePhase].deliverables.map((del, dIdx) => (
                    <li key={dIdx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3E0] shrink-0" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-cyan-50/50 dark:bg-cyan-950/20 border border-cyan-200 dark:border-cyan-500/20 space-y-2">
                <div className="text-xs font-mono font-bold text-[#00A3E0] dark:text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5" />
                  <span>GOVERNANCE QUALITY GATE:</span>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed">
                  {deliveryPhases[activePhase].gate}
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 05: BUSINESS IMPACT & INFRASTRUCTURE ROI */}
      <section id="roi-metrics" className="py-20 bg-white dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
              <span>SECTION 05 &bull; BENCHMARKS & VALUE REALIZATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Quantifiable Business Impact & Infrastructure ROI
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Verified performance benchmarks from enterprise cloud modernization engagements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                stat: '99.99%',
                title: 'High Availability SLA',
                desc: 'Multi-AZ active clustering and automated sub-minute failovers protecting tier-1 applications.'
              },
              {
                stat: '70% Faster',
                title: 'Environment Provisioning',
                desc: 'Terraform and GitOps infrastructure modules reducing environment rollout from weeks to minutes.'
              },
              {
                stat: '35% Cost',
                title: 'Reduction in Waste',
                desc: 'Automated rightsizing, spot instance scheduling, and unattached volume termination.'
              },
              {
                stat: 'Zero Downtime',
                title: 'Continuous Deployments',
                desc: 'Blue/green cluster switching and canary deployments eliminating scheduled maintenance windows.'
              }
            ].map((metric, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 space-y-3 hover:border-[#00A3E0]/40 transition-colors"
              >
                <div className="text-3xl font-black text-[#00A3E0] dark:text-cyan-400 font-mono">
                  {metric.stat}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {metric.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {metric.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 06: TECHNICAL FAQS */}
      <section id="faqs" className="py-20 bg-slate-50 dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
              <span>SECTION 06 &bull; KNOWLEDGE BASE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Frequently Asked Technical Questions
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Clear answers on hyperscaler architectures, private sovereign setups, and hybrid networking.
            </p>
          </div>

          <div className="space-y-3">
            {infrastructureFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm font-bold text-slate-900 dark:text-white">
                    {faq.question}
                  </span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-4 h-4 text-[#00A3E0] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-white/5 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 07: EXECUTIVE CTA & RELATED SERVICES */}
      <CloudConsultationCTA
        onOpenContact={onOpenContact}
        badge="ENTERPRISE INFRASTRUCTURE WORKSHOP"
        title="Ready to Architect a Resilient Cloud Infrastructure?"
        description="Book a dedicated technical session with our Principal Cloud Infrastructure Architects to review your network topologies, evaluate hybrid interconnects, and plan high-availability landing zones."
        primaryBtnText="Schedule Infrastructure Review"
        secondaryBtnText="Download Well-Architected Checklist"
      />

      <RelatedCloudServices currentPath="/cloud-operations/infrastructure" />

    </div>
  );
};
