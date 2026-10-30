import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Cloud,
  Compass,
  Layers,
  Activity,
  Server,
  ShieldCheck,
  ArrowRight,
  Cpu,
  Database,
  Lock,
  Boxes,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  BarChart3,
  Globe,
  Zap,
  Terminal,
  Workflow
} from 'lucide-react';
import { CloudOperationsHero } from '../../components/cloud/CloudOperationsHero';
import { RelatedCloudServices } from '../../components/cloud/RelatedCloudServices';
import { CloudConsultationCTA } from '../../components/cloud/CloudConsultationCTA';

interface ChildPageProps {
  onOpenContact?: (topic?: string) => void;
}

export const CloudOperationsPage: React.FC<ChildPageProps> = ({ onOpenContact }) => {
  const [activeDomain, setActiveDomain] = useState<number>(0);
  const [activeTier, setActiveTier] = useState<number>(0);
  const [activeStage, setActiveStage] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    document.title = 'Cloud & Operations Solutions | Enterprise Architecture & Managed IT | KNOOVIQ';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Section 02: 6 Core Capability Groups with nested sub-parts & links
  const coreDomains = [
    {
      id: 'cloud-strategy',
      title: 'Cloud Strategy & Economics',
      path: '/cloud-operations/strategy',
      subtitle: 'Readiness assessments, target architectures, FinOps cost governance, and business-led cloud adoption.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
      badge: 'STRATEGY & FINOPS',
      subParts: [
        {
          name: 'Cloud Readiness Assessment',
          description: 'Evaluating application dependencies, data sovereignty constraints, and cloud migration maturity.',
          spec: 'Readiness scorecard evaluating 100% of enterprise workload portfolios'
        },
        {
          name: 'Target Architecture & Placement',
          description: 'Defining optimal landing zone topologies across Public, Private, and Hybrid cloud environments.',
          spec: 'Multi-AZ reference architectures meeting 99.99% availability targets'
        },
        {
          name: 'Cloud Adoption Roadmap & Waves',
          description: 'Prioritizing migration waves using the 7 R\'s framework to minimize business disruption.',
          spec: 'Zero unmapped legacy workloads across wave planning models'
        },
        {
          name: 'Operating Model & FinOps Governance',
          description: 'Transforming organizational structures into Cloud Centers of Excellence (CCoE) with unit cost tracking.',
          spec: 'Guaranteed 25% to 40% reduction in unbudgeted cloud infrastructure spend'
        }
      ]
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure & Platforms',
      path: '/cloud-operations/infrastructure',
      subtitle: 'Public, private, and hybrid cloud foundations, multi-zone compute, and Kubernetes platform engineering.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80',
      badge: 'PLATFORMS & KUBERNETES',
      subParts: [
        {
          name: 'Hybrid Cloud Connectivity',
          description: 'High-speed dedicated circuits (Direct Connect, ExpressRoute) bypassing public internet routing.',
          spec: 'Sub-3ms dedicated latency with automated redundant BGP peering'
        },
        {
          name: 'Compute, Storage & Networking',
          description: 'Multi-zone compute instances, NVMe block storage, and software-defined private virtual networks.',
          spec: '100% automated scaling responding within 45s of traffic spikes'
        },
        {
          name: 'Containers & Kubernetes (EKS / AKS / GKE)',
          description: 'Production-grade Kubernetes clusters equipped with service mesh, mTLS, and declarative GitOps.',
          spec: 'Upstream-compliant K8s clusters with automated zero-downtime upgrades'
        },
        {
          name: 'Infrastructure as Code (Terraform / OpenTofu)',
          description: 'Immutable, version-controlled cloud infrastructure delivery with automated policy verification.',
          spec: 'Zero manual configuration drift in production environments'
        }
      ]
    },
    {
      id: 'cloud-providers',
      title: 'Cloud Provider Platforms (Hyperscalers)',
      path: '/cloud-operations/aws',
      subtitle: 'Deep certified engineering across Amazon Web Services, Microsoft Azure, and Google Cloud (GCP).',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80',
      badge: 'HYPERSCALER FLEETS',
      subParts: [
        {
          name: 'Amazon Web Services (AWS)',
          description: 'EC2, EKS, RDS Aurora multi-AZ, S3 Intelligent-Tiering, and Control Tower multi-account landing zones.',
          spec: 'Multi-AZ architecture with 11 9s durability storage lakes'
        },
        {
          name: 'Microsoft Azure',
          description: 'Azure VMs, AKS clusters, Azure SQL Managed Instance, and Microsoft Entra ID Zero-Trust identity.',
          spec: 'Azure Hybrid Benefit optimization reducing licensing spend up to 40%'
        },
        {
          name: 'Google Cloud (GCP)',
          description: 'GKE Autopilot hands-free Kubernetes, Cloud Run serverless, BigQuery, and global VPC fabrics.',
          spec: 'Single global Anycast network routing with VPC Service Controls'
        },
        {
          name: 'Multi-Cloud Transit Mesh',
          description: 'Interconnecting hyperscalers with encrypted transit gateways and unified cross-cloud governance.',
          spec: 'Single-pane-of-glass visibility across all active cloud providers'
        }
      ]
    },
    {
      id: 'application-operations',
      title: 'Application Operations & SRE',
      path: '/cloud-operations/application-operations',
      subtitle: 'End-to-end OpenTelemetry distributed tracing, P99 latency tuning, and automated SRE runbooks.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
      badge: 'APM & RELIABILITY',
      subParts: [
        {
          name: 'Full-Stack APM & OpenTelemetry',
          description: 'Vendor-neutral telemetry collection correlating user clicks, Kubernetes pods, and database queries.',
          spec: 'Sub-1% runtime CPU overhead with W3C distributed trace propagation'
        },
        {
          name: 'Site Reliability Engineering (SRE) & SLOs',
          description: 'Quantifiable error budget burn alarms, blameless post-mortems, and continuous hardening.',
          spec: 'Multi-window multi-burn-rate alerting reducing false-positive pages by 85%'
        },
        {
          name: 'Synthetic Probing & Performance Tuning',
          description: 'Continuous simulated end-user journeys probing APIs and checkout funnels from 25+ global edge locations.',
          spec: 'Instant alarm triggered upon failure across 2 consecutive probes'
        },
        {
          name: 'Capacity Modeling & Autoscaling',
          description: 'Predictive traffic surge modeling with KEDA event-driven autoscaling based on queue depth.',
          spec: 'Zero message backlog accumulation during unexpected traffic surges'
        }
      ]
    },
    {
      id: 'managed-it-operations',
      title: 'IT Operations & Managed Operations',
      path: '/cloud-operations/managed-operations',
      subtitle: '24/7/365 Global Operations Center, disciplined ITIL v4 Incident & Change CAB governance, and CMDB.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=80',
      badge: '24/7 GOC & ITIL v4',
      subParts: [
        {
          name: '24/7 Global Operations Center (GOC)',
          description: 'Follow-the-sun command center providing continuous shift monitoring and Major Incident bridges.',
          spec: 'Sub-5 minute initial triage response time for all critical infrastructure alarms'
        },
        {
          name: 'ITIL v4 Incident, Problem & Change (CAB)',
          description: 'Standardized P1-P4 priority triage matrix with peer-reviewed Change Advisory Board workflows.',
          spec: '99.8% change success rate with zero unapproved production modifications'
        },
        {
          name: 'Configuration Management & CMDB Baselines',
          description: 'Automated continuous discovery of Configuration Items (CIs) with real-time drift detection.',
          spec: 'Daily reconciliation ensuring zero shadow IT or unmanaged infrastructure'
        },
        {
          name: 'Infrastructure Patching & Release Engineering',
          description: 'Automated rolling kernel patching, CVE zero-day mitigations, and CIS benchmark golden images.',
          spec: 'Zero downtime during patching via automated node cordon, drain, and reboot'
        }
      ]
    },
    {
      id: 'security-resilience',
      title: 'Security & Operational Resilience',
      path: '/cloud-operations/security',
      subtitle: 'Zero-Trust network segmentation, Customer-Managed KMS keys, and sub-hour Disaster Recovery (DR).',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80',
      badge: 'ZERO-TRUST & CONTINUITY',
      subParts: [
        {
          name: 'Zero-Trust Perimeter & Micro-Segmentation',
          description: 'Software-defined perimeter with mutual TLS (mTLS) pod-to-pod identity validation.',
          spec: '100% encrypted internal east-west traffic with sub-millisecond proxy latency'
        },
        {
          name: 'Identity Fabric & Privileged Access (PAM/PIM)',
          description: 'Zero standing administrative privileges; engineers activate temporary scoped roles with FIDO2 MFA.',
          spec: 'Time-bounded role activations automatically expiring within 4 hours'
        },
        {
          name: 'Cloud Cryptography & Secrets Management',
          description: 'Customer-Managed Encryption Keys (CMEK) backed by FIPS 140-3 HSMs with automated secret rotation.',
          spec: 'AES-256 envelope encryption across all object buckets, block disks, and databases'
        },
        {
          name: 'Disaster Recovery as a Service (DRaaS) & Chaos',
          description: 'Continuous asynchronous block replication and one-click automated cross-region failover.',
          spec: 'RPO < 15 minutes and RTO < 45 minutes guaranteed across disaster scenarios'
        }
      ]
    }
  ];

  // Section 03: 4-Tier Blueprint
  const architectureTiers = [
    {
      tier: 'Tier 01: Edge & Hybrid Ingress',
      desc: 'Global Anycast CDN routing, Web Application Firewalls (WAF), and dedicated on-premises interconnects.',
      specs: ['CloudFront / Azure Front Door', 'AWS WAF / Cloud Armor', '100Gbps Direct Connect / ExpressRoute', 'Global Anycast DNS']
    },
    {
      tier: 'Tier 02: Resilient Compute & Microservices',
      desc: 'Multi-zone container orchestration, serverless microservices, and automated elastic instance groups.',
      specs: ['Amazon EKS / Azure AKS / Google GKE', 'AWS Lambda / Cloud Run', 'Auto-scaling Spot & On-Demand Fleets', 'Karpenter / KEDA Autoscaling']
    },
    {
      tier: 'Tier 03: Multi-Region Data & Storage Fabrics',
      desc: 'High-availability transactional relational engines, globally distributed NoSQL, and durable object lakes.',
      specs: ['Amazon Aurora / Azure SQL MI', 'Cloud Spanner / DynamoDB', 'S3 Intelligent-Tiering / Blob Storage', 'In-Memory Redis Caching']
    },
    {
      tier: 'Tier 04: Governance, SRE & 24/7 GOC',
      desc: 'Continuous CSPM security compliance, immutable audit logging, and 24/7 Site Reliability Engineering.',
      specs: ['AWS Control Tower / Azure Policy', 'OpenTelemetry Tracing Mesh', '24/7 Global Operations Center', 'Automated DR Orchestration']
    }
  ];

  // Section 04: 5-Stage Methodology
  const lifecycleStages = [
    {
      num: '01',
      title: 'Strategy & TCO Assessment',
      deliverable: 'Workload discovery, cloud readiness scorecard, and 3-year TCO financial business case.',
      gate: 'Readiness Gate: Executive sign-off on target operating model and cloud economics.'
    },
    {
      num: '02',
      title: 'Landing Zone & Security Foundation',
      deliverable: 'Multi-account architecture, transit networking, and zero-trust IAM deployed via Terraform.',
      gate: 'Security Gate: Infosec approval of network isolation, KMS encryption, and boundary policies.'
    },
    {
      num: '03',
      title: 'Migration Factory Execution',
      deliverable: 'Automated server and database replication waves with non-disruptive dry-run cutovers.',
      gate: 'Validation Gate: Staging cutover verifying zero data loss and sub-30 minute database delta.'
    },
    {
      num: '04',
      title: 'Application Modernization',
      deliverable: 'Refactoring monoliths into containerized Kubernetes microservices and cloud-native databases.',
      gate: 'Performance Gate: Production load testing verifying 99.99% availability under 2x peak load.'
    },
    {
      num: '05',
      title: '24/7 SRE & Continuous FinOps',
      deliverable: 'Round-the-clock GOC shift coverage, automated runbooks, and ongoing cost optimization.',
      gate: 'Operational Gate: Production SLA compliance meeting 99.99% monthly availability.'
    }
  ];

  // Section 07: 5 Executive FAQs
  const faqs = [
    {
      q: 'How does KNOOVIQ ensure zero downtime during large-scale enterprise cloud migrations?',
      a: 'We leverage proven Migration Factory automation tools (such as AWS Application Migration Service, Azure Migrate, and Google Database Migration Service). Data is replicated continuously at the block and database level in real time while your primary systems remain live. Final cutover happens in minutes during scheduled windows with zero data loss.'
    },
    {
      q: 'Which cloud provider does KNOOVIQ recommend: AWS, Microsoft Azure, or Google Cloud?',
      a: 'We are vendor-neutral and certified across all three major hyperscalers. Our architects evaluate your existing software stack, licensing agreements (e.g. Microsoft EA, SAP ERP), latency constraints, and analytical requirements to design either a primary hyperscaler landing zone or an optimized multi-cloud topology.'
    },
    {
      q: 'How does your FinOps practice guarantee cloud cost reduction?',
      a: 'Our FinOps engineers implement automated rightsizing, eliminate orphaned disks and snapshots, enforce storage lifecycle policies, leverage spot/preemptible instances for batch workloads, and structure optimal 1-year and 3-year Savings Plans. Clients typically see 25% to 40% reductions in monthly cloud spend within 90 days.'
    },
    {
      q: 'What is included in KNOOVIQ 24/7 Managed IT Operations and SRE coverage?',
      a: 'Our 24/7 Global Operations Center (GOC) provides continuous follow-the-sun shift monitoring, rapid L1/L2/L3 alert triage, automated runbook execution, Major Incident Management (MIM) war rooms, ITIL v4 change governance (CAB), automated patch management, and contractual SLAs guaranteeing 99.99% availability.'
    },
    {
      q: 'How does your Zero-Trust security model protect sensitive data against ransomware?',
      a: 'We enforce micro-segmented network perimeters, FIDO2 phishing-resistant authentication, and Customer-Managed Encryption Keys (CMEK). For business continuity, we implement air-gapped, immutable WORM backup vaults that prevent modification or deletion even by compromised administrator accounts.'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#050B17] text-slate-900 dark:text-white transition-colors duration-300">

      {/* =========================================================================
          SECTION 01: HERO SECTION WITH ENTERPRISE IMAGE & EXECUTIVE METRICS
          ========================================================================= */}
      <CloudOperationsHero
        badgeText="ENTERPRISE CLOUD PRACTICE"
        badgeIcon={<Cloud className="w-3.5 h-3.5 text-[#00A3E0]" />}
        heading="Cloud & Operations Architecture"
        headline="Enterprise Multi-Cloud Infrastructure, 24/7 SRE & Managed Operations"
        description="Architect resilient multi-cloud foundations, optimize compute FinOps, establish defense-in-depth zero-trust security, and deliver round-the-clock Site Reliability Engineering across AWS, Microsoft Azure, and Google Cloud."
        primaryCtaText="Explore 6 Practice Areas"
        primaryCtaHref="#capabilities"
        secondaryCtaText="Schedule Architecture Workshop"
        secondaryCtaAction={() => onOpenContact && onOpenContact('Cloud & Operations Consulting')}
        currentPage="Cloud & Operations"
        heroImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
        stats={[
          { label: "Target Availability", value: "99.99%", subtext: "Multi-Zone Resilience" },
          { label: "Interconnect Latency", value: "< 3ms", subtext: "Dedicated 10Gbps Circuits" },
          { label: "TCO Reduction", value: "35%+", subtext: "Continuous FinOps" },
          { label: "Operations Model", value: "24/7/365", subtext: "Global SRE & GOC" }
        ]}
      />

      {/* =========================================================================
          SECTION 02: SIX CORE CAPABILITY GROUPS (SECTION WITHIN SECTION + REAL IMAGE)
          ========================================================================= */}
      <section id="capabilities" className="py-20 bg-slate-50 dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
              <span>SECTION 02 &bull; SIX CAPABILITY GROUPS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Six Enterprise Cloud &amp; Operations Practices (Section-within-Section)
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Select any capability group below to inspect its detailed engineering building blocks, architecture specifications, and operational guardrails.
            </p>
          </div>

          {/* Interactive Group Selector Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {coreDomains.map((domain, idx) => (
              <button
                key={domain.id}
                onClick={() => setActiveDomain(idx)}
                className={`p-3.5 rounded-2xl text-left transition-all border cursor-pointer ${activeDomain === idx
                    ? 'bg-white dark:bg-[#0B1528] border-[#00A3E0] shadow-lg shadow-[#00A3E0]/15'
                    : 'bg-white/60 dark:bg-[#070E1E] border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20'
                  }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${activeDomain === idx ? 'text-[#00A3E0] dark:text-cyan-400' : 'text-slate-400'
                    }`}>
                    PRACTICE 0{idx + 1}
                  </span>
                  {activeDomain === idx && (
                    <span className="w-2 h-2 rounded-full bg-[#00A3E0] animate-pulse" />
                  )}
                </div>
                <h3 className="text-xs font-bold text-slate-900 dark:text-white mt-1 line-clamp-1">
                  {domain.title}
                </h3>
              </button>
            ))}
          </div>

          {/* Active Capability Group Card (Section within Section + Image) */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 shadow-xl space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              <div className="lg:col-span-7 space-y-3">
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold tracking-wider">
                  {coreDomains[activeDomain].badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                  {coreDomains[activeDomain].title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {coreDomains[activeDomain].subtitle}
                </p>
                <div className="pt-2">
                  <Link
                    to={coreDomains[activeDomain].path}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#00A3E0] hover:underline"
                  >
                    <span>Explore Full Dedicated Practice Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-md h-48 sm:h-56 group">
                  <img
                    src={coreDomains[activeDomain].image}
                    alt={coreDomains[activeDomain].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                    <span className="text-xs text-white/90 font-mono">Enterprise Reference Architecture</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Nested Sub-Parts Grid (Section within Section) */}
            <div className="pt-6 border-t border-slate-100 dark:border-white/5 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-[#00A3E0] uppercase tracking-wider">
                  CAPABILITY ARCHITECTURE &amp; SUB-PARTS
                </span>
                <div className="h-px flex-1 bg-slate-200 dark:bg-white/10" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {coreDomains[activeDomain].subParts.map((sub, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-5 rounded-2xl bg-slate-50 dark:bg-[#070E1E] border border-slate-200 dark:border-white/5 space-y-2 hover:border-[#00A3E0]/30 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        {sub.name}
                      </h4>
                      <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {sub.description}
                    </p>
                    <div className="pt-2 border-t border-slate-200/60 dark:border-white/5 flex items-center gap-2">
                      <span className="text-[10px] font-mono text-slate-400">SPEC:</span>
                      <span className="text-[11px] font-mono font-medium text-[#00A3E0] dark:text-cyan-400">
                        {sub.spec}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 03: 4-TIER ENTERPRISE ARCHITECTURE BLUEPRINT
          ========================================================================= */}
      <section className="py-20 bg-white dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
              <span>SECTION 03 &bull; ARCHITECTURE BLUEPRINT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              4-Tier Enterprise Production Architecture Blueprint
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Interactive architectural tiers illustrating edge ingress, microservices compute, multi-region data fabrics, and 24/7 GOC governance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Interactive Tier Tabs */}
            <div className="lg:col-span-5 space-y-3">
              {architectureTiers.map((tier, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTier(idx)}
                  className={`w-full p-5 rounded-2xl text-left transition-all border cursor-pointer ${activeTier === idx
                      ? 'bg-slate-50 dark:bg-[#0B1528] border-[#00A3E0] shadow-md'
                      : 'bg-white dark:bg-[#070E1E] border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20'
                    }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[11px] font-mono font-bold uppercase ${activeTier === idx ? 'text-[#00A3E0]' : 'text-slate-400'
                      }`}>
                      TIER 0{idx + 1}
                    </span>
                    <ArrowRight className={`w-4 h-4 transition-transform ${activeTier === idx ? 'text-[#00A3E0] translate-x-1' : 'text-slate-400'
                      }`} />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-1">
                    {tier.tier}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                    {tier.desc}
                  </p>
                </button>
              ))}
            </div>

            {/* Active Tier Deep Dive Card */}
            <div className="lg:col-span-7 p-8 rounded-3xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/10">
                <div>
                  <span className="text-xs font-mono font-bold text-[#00A3E0] uppercase">ACTIVE BLUEPRINT STACK</span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
                    {architectureTiers[activeTier].tier}
                  </h3>
                </div>
                <Layers className="w-6 h-6 text-[#00A3E0]" />
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300">
                {architectureTiers[activeTier].desc}
              </p>

              <div className="space-y-3">
                {architectureTiers[activeTier].specs.map((item, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3.5 rounded-xl bg-white dark:bg-[#070E1E] border border-slate-200 dark:border-white/5 flex items-center justify-between gap-2"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                      <span className="text-xs font-bold text-slate-900 dark:text-white">
                        {item}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-cyan-500">PRODUCTION CERTIFIED</span>
                  </div>
                ))}
              </div>

              {/* Reference Blueprint Image */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 h-44 group">
                <img
                  src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80"
                  alt="Enterprise Architecture Blueprint"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs text-white/90 font-mono">Zero-Drift Declarative Infrastructure as Code (Terraform)</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 04: 5-STAGE ADOPTION & IMPLEMENTATION METHODOLOGY
          ========================================================================= */}
      <section className="py-20 bg-slate-50 dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
              <span>SECTION 04 &bull; ADOPTION METHODOLOGY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              5-Stage Cloud Adoption &amp; Modernization Framework
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Structured lifecycle transitioning enterprise IT from legacy on-premises datacenters to resilient cloud foundations and Day-2 FinOps.
            </p>
          </div>

          {/* Interactive Stage Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {lifecycleStages.map((stage, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStage(idx)}
                className={`p-4 rounded-2xl text-left transition-all border cursor-pointer ${activeStage === idx
                    ? 'bg-white dark:bg-[#0B1528] border-[#00A3E0] shadow-lg'
                    : 'bg-white/60 dark:bg-[#070E1E] border-slate-200 dark:border-white/10 hover:border-slate-300'
                  }`}
              >
                <span className={`text-[10px] font-mono font-bold uppercase block ${activeStage === idx ? 'text-[#00A3E0]' : 'text-slate-400'
                  }`}>
                  PHASE {stage.num}
                </span>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white mt-1 line-clamp-1">
                  {stage.title}
                </h4>
              </button>
            ))}
          </div>

          {/* Active Stage Details Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 shadow-xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-white/5">
              <div>
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-[#00A3E0] text-xs font-mono font-bold">
                  STAGE {lifecycleStages[activeStage].num} OF 05
                </span>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-2">
                  {lifecycleStages[activeStage].title}
                </h3>
              </div>
              <span className="text-xs font-mono font-bold text-slate-400">
                KNOOVIQ CLOUD METHODOLOGY
              </span>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {lifecycleStages[activeStage].deliverable}
            </p>

            <div className="p-4 rounded-2xl bg-cyan-50/50 dark:bg-cyan-950/20 border border-cyan-200 dark:border-cyan-500/20 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#00A3E0] shrink-0" />
              <p className="text-xs text-cyan-900 dark:text-cyan-200 font-mono">
                {lifecycleStages[activeStage].gate}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 05: MEASURABLE BUSINESS IMPACT & FINOPS BENCHMARKS
          ========================================================================= */}
      <section className="py-20 bg-white dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
              <span>SECTION 05 &bull; BUSINESS IMPACT &amp; TCO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Quantifiable Performance, FinOps &amp; SLA Impact
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Demonstrated cost efficiency, uptime acceleration, and operational reliability achieved across client migrations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-7 rounded-3xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 space-y-2">
              <span className="text-xs font-mono font-bold text-[#00A3E0] uppercase">TCO REDUCTION</span>
              <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">-35%</div>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Average reduction in annual cloud spend realized via FinOps rightsizing, Graviton adoption, and committed use plans.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 space-y-2">
              <span className="text-xs font-mono font-bold text-[#00A3E0] uppercase">SYSTEM AVAILABILITY</span>
              <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">99.99%</div>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Guaranteed contractual SLA maintained across multi-zone container platforms and enterprise databases.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 space-y-2">
              <span className="text-xs font-mono font-bold text-[#00A3E0] uppercase">DEPLOYMENT VELOCITY</span>
              <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">5.4x</div>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Acceleration in release cycle times achieved through GitOps delivery pipelines and automated canary deployments.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 space-y-2">
              <span className="text-xs font-mono font-bold text-[#00A3E0] uppercase">MTTR RESOLUTION</span>
              <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">-72%</div>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Reduction in Mean Time to Resolution for production incidents via OpenTelemetry distributed tracing and AIOps runbooks.
              </p>
            </div>
          </div>

          {/* High-Resolution Operations Center Photo */}
          <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-lg h-64 sm:h-80 group">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
              alt="Cloud Operations War Room"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent flex items-end p-8">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                  ENTERPRISE OPERATIONS
                </span>
                <h4 className="text-lg sm:text-xl font-bold text-white">
                  24/7/365 Global Operations Center &amp; Continuous Telemetry
                </h4>
                <p className="text-xs text-white/80 max-w-2xl">
                  Unified command operations coordinating continuous shift coverage, proactive alert correlation, and ITIL v4 governance standards.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 06: ENTERPRISE TOOLCHAIN MATRIX
          ========================================================================= */}
      <section className="py-20 bg-slate-50 dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
              <span>SECTION 06 &bull; TECHNOLOGY ECOSYSTEM</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Enterprise Cloud &amp; Operations Certified Toolchain
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Industry-standard platforms, orchestration runtimes, observability suites, and ITIL management tools deployed by KNOOVIQ.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="p-6 rounded-3xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-white/5">
                <span className="text-xs font-mono font-bold text-[#00A3E0] uppercase">HYPERSCALERS</span>
                <Cloud className="w-4 h-4 text-[#00A3E0]" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">Cloud Platforms</h4>
              <div className="flex flex-wrap gap-1.5">
                {['AWS Cloud', 'Microsoft Azure', 'Google Cloud', 'Terraform', 'OpenTofu', 'Ansible'].map((t, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-[#070E1E] text-slate-700 dark:text-slate-300 text-[11px] font-mono border border-slate-200 dark:border-white/5">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-white/5">
                <span className="text-xs font-mono font-bold text-[#00A3E0] uppercase">KUBERNETES &amp; MESH</span>
                <Boxes className="w-4 h-4 text-[#00A3E0]" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">Container Platforms</h4>
              <div className="flex flex-wrap gap-1.5">
                {['Amazon EKS', 'Azure AKS', 'Google GKE', 'Istio Mesh', 'ArgoCD', 'Karpenter'].map((t, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-[#070E1E] text-slate-700 dark:text-slate-300 text-[11px] font-mono border border-slate-200 dark:border-white/5">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-white/5">
                <span className="text-xs font-mono font-bold text-[#00A3E0] uppercase">OBSERVABILITY</span>
                <Activity className="w-4 h-4 text-[#00A3E0]" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">APM &amp; Telemetry</h4>
              <div className="flex flex-wrap gap-1.5">
                {['OpenTelemetry', 'Datadog', 'Prometheus', 'Grafana Mimir', 'Dynatrace', 'Jaeger'].map((t, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-[#070E1E] text-slate-700 dark:text-slate-300 text-[11px] font-mono border border-slate-200 dark:border-white/5">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-white/5">
                <span className="text-xs font-mono font-bold text-[#00A3E0] uppercase">ITSM &amp; ZERO-TRUST</span>
                <ShieldCheck className="w-4 h-4 text-[#00A3E0]" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">ITSM &amp; Security</h4>
              <div className="flex flex-wrap gap-1.5">
                {['ServiceNow', 'PagerDuty', 'Entra ID', 'HashiCorp Vault', 'AWS KMS', 'Elastic DR'].map((t, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-[#070E1E] text-slate-700 dark:text-slate-300 text-[11px] font-mono border border-slate-200 dark:border-white/5">
                    {t}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 07: EXECUTIVE FREQUENTLY ASKED QUESTIONS & ADVISORY CTA
          ========================================================================= */}
      <section className="py-20 bg-white dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
              <span>SECTION 07 &bull; EXECUTIVE FAQS &amp; ADVISORY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Frequently Asked Questions: Cloud &amp; Operations
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Clear answers on migration timelines, multi-cloud governance, FinOps savings, and 24/7 managed support.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0B1528] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-100/50 dark:hover:bg-white/5 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                      {faq.q}
                    </span>
                    <span className="p-1 rounded-full bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-slate-300 shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/50 dark:border-white/5">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* FINAL CONSULTATION CTA */}
      <CloudConsultationCTA
        heading="Modernize Your Enterprise on Resilient Cloud Infrastructure"
        description="Collaborate with Knooviq certified cloud architects to design high-availability landing zones, optimize compute FinOps, and establish 24/7 Site Reliability Engineering."
        primaryBtnText="Consult a Cloud Architect"
        secondaryBtnText="Schedule Advisory Call"
        serviceTopic="Cloud & Operations Consulting"
        onOpenContact={onOpenContact}
      />

    </div>
  );
};
