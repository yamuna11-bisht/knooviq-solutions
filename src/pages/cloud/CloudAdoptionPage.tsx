import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Server,
  Layers,
  Database,
  Search,
  CheckCircle2,
  Sparkles,
  Cpu,
  Workflow,
  Activity,
  Cloud,
  Check,
  Zap,
  Target,
  RefreshCw,
  Lock,
  BarChart3,
  GitBranch,
  Shield,
  FileCode,
  Network,
  Radio,
  FileCheck,
  Box,
  TrendingUp,
  HardDrive,
  Maximize2,
  X
} from 'lucide-react';
import { RelatedCloudServices } from '../../components/cloud/RelatedCloudServices';

interface CloudAdoptionPageProps {
  onOpenContact?: (topic?: string) => void;
}

export const CloudAdoptionPage: React.FC<CloudAdoptionPageProps> = ({ onOpenContact }) => {
  // Interactive state for Section 1 (Assessment Domains)
  const [activeAssessmentDomain, setActiveAssessmentDomain] = useState<number>(0);

  // Interactive state for Section 2 (Migration Waves)
  const [activeMigrationWave, setActiveMigrationWave] = useState<number>(0);

  // Full screen image modal state
  const [isFullscreenImageOpen, setIsFullscreenImageOpen] = useState<boolean>(false);

  // Interactive state for Section 3 (Modernization Pathways)
  const [activeModernizationPath, setActiveModernizationPath] = useState<number>(0);

  // Interactive state for Section 6 (Data Transition Stages)
  const [activeTransitionStage, setActiveTransitionStage] = useState<number>(0);

  useEffect(() => {
    document.title = 'Enterprise Cloud Adoption Services & Execution Framework | KNOOVIQ';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleOpenContact = (topic?: string) => {
    if (onOpenContact) {
      onOpenContact(topic || 'Enterprise Cloud Adoption');
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Section 1 Assessment Domains Data
  const assessmentDomains = [
    {
      title: 'Infrastructure & Estate Discovery',
      badge: 'INVENTORY & CMDB',
      summary: 'Complete physical, virtual, and network topology cataloging across on-premises and co-located data centers.',
      metrics: ['Server utilization baselines', 'Storage IOPS & tiering analysis', 'Network ingress/egress mapping'],
      deliverable: 'Automated CMDB Inventory & Infrastructure Topology Graph'
    },
    {
      title: 'Application Dependency Mapping',
      badge: 'SERVICE TOPOLOGY',
      summary: 'In-depth analysis of synchronous RPCs, message queues, shared databases, and cross-tier network latencies.',
      metrics: ['Inter-process network latency profiling', 'Shared database & file coupling', 'Third-party API dependencies'],
      deliverable: 'Multi-Tier Application Dependency & Latency Matrix'
    },
    {
      title: 'Workload 6R Suitability Analysis',
      badge: 'TREATMENT SELECTION',
      summary: 'Deterministic evaluation of every workload to assign Rehost, Replatform, Refactor, Repurchase, Retain, or Retire.',
      metrics: ['Technical debt scoring', 'Codebase modularity evaluation', 'Licensing & OS compatibility'],
      deliverable: 'Workload Cloud-Fit Scorecard & Treatment Plan'
    },
    {
      title: 'Organizational & Operational Readiness',
      badge: 'PEOPLE & GOVERNANCE',
      summary: 'Evaluating Cloud Center of Excellence (CCoE) maturity, DevOps team skills, and security policy readiness.',
      metrics: ['DevOps skill-gap matrix', 'Security policy translation', 'Incident management transition'],
      deliverable: 'Cloud Readiness Gap Analysis & Change Strategy'
    }
  ];

  // Section 2 Migration Waves Data
  const migrationWaves = [
    {
      wave: 'Wave 0',
      title: 'Landing Zone & Foundation Pilot',
      duration: 'Weeks 1 – 4',
      scope: 'Core networking, IAM federations, transit gateways, and initial dev/test pilot workloads.',
      risk: 'Low Risk',
      validation: 'End-to-end security compliance, connectivity latency under 5ms, and automated IaC validation.'
    },
    {
      wave: 'Wave 1',
      title: 'Non-Critical Tier & Edge Services',
      duration: 'Weeks 5 – 8',
      scope: 'Stateless web services, read-only caching tiers, internal reporting tools, and staging clusters.',
      risk: 'Controlled Risk',
      validation: 'DNS traffic routing verification, performance benchmark parity, and zero downtime to primary ops.'
    },
    {
      wave: 'Wave 2',
      title: 'Business-Critical Application Tiers',
      duration: 'Weeks 9 – 14',
      scope: 'Customer-facing portals, transactional service APIs, distributed microservices, and operational storage.',
      risk: 'Medium Risk',
      validation: 'Full data synchronization, real-time replication parity, and rehearsed fallback dry-runs.'
    },
    {
      wave: 'Wave 3',
      title: 'Core Databases & ERP Systems',
      duration: 'Weeks 15 – 20',
      scope: 'Primary enterprise transactional databases, SAP digital core, high-throughput message brokers.',
      risk: 'High Criticality',
      validation: 'Maintenance cutover window execution, transaction row-count verification, and signed stakeholder sign-off.'
    }
  ];

  // Section 3 Modernization Pathways Data
  const modernizationPathways = [
    {
      pathway: 'Replatforming to Managed Cloud Services',
      tag: 'MANAGED DATABASE & CACHING',
      description: 'Migrate self-hosted relational databases, caching nodes, and search clusters to fully managed cloud engines without altering business application logic.',
      benefits: ['Zero database patching overhead', 'Automated multi-AZ replication', 'Sub-minute recovery time objectives (RTO)'],
      typicalTargets: 'Self-hosted MySQL, PostgreSQL, Oracle, Redis, ElasticSearch'
    },
    {
      pathway: 'Containerization & Kubernetes Orchestration',
      tag: 'DOCKER & K8S PLATFORMS',
      description: 'Package legacy application runtimes into standardized Open Container Initiative (OCI) containers orchestrated via managed Kubernetes (EKS, AKS, GKE).',
      benefits: ['Standardized deployment artifacts', 'Elastic horizontal pod autoscaling', 'Decoupled underlying VM management'],
      typicalTargets: 'Java Spring, .NET Framework / Core, Node.js, Python microservices'
    },
    {
      pathway: 'API-First & Event-Driven Refactoring',
      tag: 'DECOUPLED ARCHITECTURE',
      description: 'Decompose monolithic transactional workflows into decoupled, event-driven services utilizing cloud message queues, pub/sub topics, and REST/gRPC endpoints.',
      benefits: ['Fault isolation between services', 'Independent team deployment cadences', 'High-throughput asynchronous scaling'],
      typicalTargets: 'Monolithic billing, order processing, and customer onboarding engines'
    },
    {
      pathway: 'Serverless & Cloud-Native Redesign',
      tag: 'ELASTIC EXECUTION',
      description: 'Redesign intermittent, event-triggered workloads to execute on serverless compute frameworks, paying exclusively for active processing milliseconds.',
      benefits: ['True zero-idle infrastructure costs', 'Infinite instant concurrency', 'Built-in high-availability across availability zones'],
      typicalTargets: 'Document processing, asynchronous ETL pipelines, webhook consumers'
    }
  ];

  // Section 6 Data Transition Stages Data
  const dataTransitionStages = [
    {
      stage: 'Step 1',
      title: 'Pre-Migration Profiling & Schema Audit',
      description: 'Comprehensive inventory of data volume, schema dialects, LOB/blob storage distributions, and network throughput baselines.',
      safeguard: 'Zero production lock during read-only profiling passes'
    },
    {
      stage: 'Step 2',
      title: 'Initial Bulk Seed & Storage Ingestion',
      description: 'High-speed encrypted bulk transfer of historical database snapshots and unstructured storage objects to cloud target repositories.',
      safeguard: 'TLS 1.3 encrypted transit and AES-256 at-rest storage validation'
    },
    {
      stage: 'Step 3',
      title: 'Continuous Change Data Capture (CDC)',
      description: 'Real-time log-based CDC replication capturing ongoing transaction deltas and write operations while legacy systems remain live.',
      safeguard: 'Sub-second replication lag monitoring with automated alerts'
    },
    {
      stage: 'Step 4',
      title: 'Cutover Validation & Atomic Switchover',
      description: 'Controlled maintenance window execution with row-count verification, checksum matching, DNS repointing, and rollback runbooks.',
      safeguard: 'Pre-configured reverse-replication pipeline for immediate fallback if needed'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#060D1A] text-slate-900 dark:text-slate-100 transition-colors">
      
      {/* =========================================================================
          HERO SECTION — CLOUD ADOPTION
          Heading: Move to the Cloud with Confidence
          Description: Build a practical cloud adoption strategy that aligns business
          requirements, application dependencies, infrastructure readiness, security,
          and operational needs. Knooviq helps enterprises plan and execute cloud
          adoption through a structured, secure, and business-aligned approach.
          CTA buttons: Explore Our Approach | Talk to Our Experts
          ========================================================================= */}
      {/* =========================================================================
          HERO SECTION — CLOUD ADOPTION (Cinematic Full-Bleed Enterprise Hero)
          Heading: Move to the Cloud with Confidence
          Description: Build a practical cloud adoption strategy that aligns business
          requirements, application dependencies, infrastructure readiness, security,
          and operational needs. Knooviq helps enterprises plan and execute cloud
          adoption through a structured, secure, and business-aligned approach.
          CTA buttons: Explore Our Approach | Talk to Our Experts
          ========================================================================= */}
      <section className="relative w-full min-h-[560px] sm:min-h-[580px] lg:min-h-[620px] flex items-center overflow-hidden bg-[#040B17] text-white border-b border-slate-200/20 dark:border-white/10 shadow-2xl pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20">
        
        {/* Full-Bleed Enterprise Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="/images/cloud/cloud_adoption_hero.jpg" 
            alt="Enterprise Cloud Architecture visualization showing connected business applications, hybrid infrastructure, and secure data movement" 
            className="w-full h-full object-cover object-right sm:object-right md:object-[80%_center]"
          />
          {/* Smooth gradient overlay on left for razor-sharp typography readability while letting the visual shine on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#040B17]/95 via-[#040B17]/80 sm:via-[#040B17]/60 md:via-[#040B17]/45 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#040B17] to-transparent pointer-events-none" />

          {/* Top Hairline Accent */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00A3E0] to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-8">
          


          <div className="max-w-3xl space-y-6">
            
            {/* Practice Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/25 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>ENTERPRISE CLOUD EXECUTION &amp; MIGRATION</span>
            </div>

            {/* Main Heading & Subhead */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-[1.18]">
                Move to the Cloud with Confidence
              </h1>
              <p className="text-base sm:text-lg font-medium text-cyan-300 tracking-normal">
                Execution-Led Migration, Modernization, and Hybrid Operations
              </p>
            </div>

            {/* Required Exact Description */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
              Build a practical cloud adoption strategy that aligns business requirements, application dependencies, infrastructure readiness, security, and operational needs. Knooviq helps enterprises plan and execute cloud adoption through a structured, secure, and business-aligned approach.
            </p>



            {/* Adoption Pillar Highlights */}
            <div className="pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block">Assessment</span>
                <span className="text-sm font-bold text-white">Full 6R Portfolio Mapping</span>
              </div>
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block">Cutover</span>
                <span className="text-sm font-bold text-white">Deterministic Waves</span>
              </div>
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block">Governance</span>
                <span className="text-sm font-bold text-white">Zero-Trust by Default</span>
              </div>
            </div>

            {/* Floating Architectural Annotation Footnote */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono text-slate-300">
              <span className="flex items-center gap-1.5 text-cyan-300 font-bold">
                <Radio className="w-3.5 h-3.5 text-[#00A3E0] animate-pulse" />
                Connected Enterprise Architecture
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-[#00A3E0]" />
                Hybrid Cloud Interconnect (AWS &bull; Azure &bull; GCP)
              </span>
              <span>&bull;</span>
              <span className="text-slate-400">Secure Data Movement</span>
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
            className="relative max-w-7xl w-full max-h-[92vh] flex flex-col items-center justify-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src="/images/cloud/cloud_adoption_hero.jpg" 
              alt="Enterprise Cloud Architecture Visualization"
              className="max-w-full max-h-[85vh] object-contain rounded-2xl border border-white/20 shadow-2xl"
            />
            <span className="px-4 py-2 rounded-full bg-black/80 border border-white/20 text-xs font-mono font-bold text-cyan-300 backdrop-blur-md shadow-xl text-center">
              Cloud Operations &bull; Enterprise Cloud Execution &amp; Migration
            </span>
          </div>
        </div>
      )}


      {/* =========================================================================
          SECTION 1 — CLOUD ADOPTION ASSESSMENT
          Requirement: Assess existing infrastructure, applications, workloads,
          dependencies, and organizational readiness before planning cloud migration.
          Image: Enterprise IT professionals reviewing application architecture and
          infrastructure dependencies (/images/cloud/cloud_adoption_assessment.jpg)
          ========================================================================= */}
      <section id="assessment" className="py-24 bg-white dark:bg-[#060D1A] transition-colors border-b border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          {/* Clean Enterprise Section Header without robotic numbering */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
              <span>PORTFOLIO DISCOVERY &amp; READINESS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Cloud Adoption Assessment
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Assess existing infrastructure, applications, workloads, dependencies, and organizational readiness before planning cloud migration. Knooviq conducts rigorous portfolio discovery to eliminate hidden legacy blockers before any workloads move.
            </p>
          </div>

          {/* Section Main Content: Left Image, Right Structured Assessment Domains */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image Showcase */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-900 shadow-xl group">
                <div className="relative h-80 sm:h-96 w-full overflow-hidden">
                  <img
                    src="/images/cloud/cloud_adoption_assessment.jpg"
                    alt="Enterprise IT professionals reviewing application architecture and infrastructure dependencies"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="p-3.5 rounded-2xl bg-black/70 backdrop-blur-md border border-white/15 text-xs text-white space-y-1">
                      <div className="font-bold flex items-center gap-1.5 text-cyan-300">
                        <Search className="w-3.5 h-3.5" />
                        Infrastructure &amp; Dependency Audit
                      </div>
                      <p className="text-[11px] text-slate-300">
                        Analyzing server topologies, database clustering, and network latencies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Architectural Methodology Callout */}
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs space-y-2">
                <span className="font-mono font-bold text-[#00A3E0] uppercase tracking-wider block">
                  Discovery Methodology
                </span>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Utilizes automated discovery agents, agentless network packet inspections, and CMDB reconciliations to detect shadow IT and dormant database links.
                </p>
              </div>
            </div>

            {/* Right Interactive Assessment Domains */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Four Essential Dimensions of Cloud Readiness
              </h3>

              {/* Assessment Tabs */}
              <div className="grid grid-cols-2 gap-2">
                {assessmentDomains.map((domain, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveAssessmentDomain(idx)}
                    className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                      activeAssessmentDomain === idx
                        ? 'bg-cyan-50 dark:bg-cyan-500/10 border-[#00A3E0] dark:border-cyan-400 text-slate-900 dark:text-white shadow-sm'
                        : 'bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:border-slate-300'
                    }`}
                  >
                    <span className="text-[10px] font-mono font-bold text-[#00A3E0] block uppercase">
                      {domain.badge}
                    </span>
                    <span className="text-xs sm:text-sm font-bold block mt-0.5">
                      {domain.title}
                    </span>
                  </button>
                ))}
              </div>

              {/* Active Assessment Domain Details Card */}
              <div className="p-6 rounded-3xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 space-y-5">
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase text-[#00A3E0]">
                      Investigation Scope
                    </span>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
                      {assessmentDomains[activeAssessmentDomain].title}
                    </h4>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-500/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold">
                    {assessmentDomains[activeAssessmentDomain].badge}
                  </span>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {assessmentDomains[activeAssessmentDomain].summary}
                </p>

                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold uppercase text-slate-400 block">
                    Key Evaluation Factors
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {assessmentDomains[activeAssessmentDomain].metrics.map((m, i) => (
                      <div key={i} className="p-2.5 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs text-slate-700 dark:text-slate-200 flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#00A3E0] shrink-0 mt-0.5" />
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white dark:bg-white/5 border border-cyan-500/20 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                    Primary Deliverable:
                  </span>
                  <span className="text-xs font-mono font-bold text-[#00A3E0] dark:text-cyan-300">
                    {assessmentDomains[activeAssessmentDomain].deliverable}
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* 6R Workload Treatment Breakdown Callout */}
          <div className="p-8 rounded-3xl bg-slate-50 dark:bg-[#07101F] border border-slate-200 dark:border-white/10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-bold text-[#00A3E0] uppercase tracking-wider block">
                  SYSTEMATIC CLASSIFICATION
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                  The 6R Workload Treatment Framework
                </h3>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md">
                Every enterprise service receives a documented rationale, technical feasibility score, and cost model before scheduling.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {[
                { r: 'Rehost', desc: 'Lift-and-shift VMs to cloud compute with minimal architecture changes.' },
                { r: 'Replatform', desc: 'Move to managed databases and containers without rewriting core code.' },
                { r: 'Refactor', desc: 'Redesign for cloud-native elasticity, serverless, and microservices.' },
                { r: 'Repurchase', desc: 'Retire custom legacy apps in favor of specialized SaaS platforms.' },
                { r: 'Retain', desc: 'Keep highly customized or regulatory-bound apps on-premises temporarily.' },
                { r: 'Retire', desc: 'Decommission redundant or obsolete systems to eliminate support costs.' }
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-2">
                  <span className="px-2 py-0.5 rounded-md bg-cyan-50 dark:bg-cyan-500/10 text-[#00A3E0] dark:text-cyan-300 font-mono font-bold text-[11px] inline-block">
                    {item.r}
                  </span>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed pt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 2 — CLOUD MIGRATION PLANNING
          Requirement: Develop workload migration plans based on business priorities,
          application dependencies, technical complexity, and migration sequencing.
          Image: Enterprise application migration from legacy infrastructure to modern
          cloud environments (/images/cloud/cloud_adoption_migration.jpg)
          ========================================================================= */}
      <section id="migration-planning" className="py-24 bg-slate-50 dark:bg-[#07101E] transition-colors border-b border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          {/* Clean Enterprise Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
              <span>MIGRATION ROADMAP &amp; SEQUENCING</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Cloud Migration Planning
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Develop workload migration plans based on business priorities, application dependencies, technical complexity, and migration sequencing. Our wave-based engineering model prevents operational disruption and guarantees business continuity.
            </p>
          </div>

          {/* Section Main Content: Left Strategy Details, Right Image Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Dependency-Aware Migration Wave Orchestration
              </h3>
              
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Rather than attempting risky big-bang cutovers, Knooviq groups workloads into tightly coordinated migration batches. Workloads with heavy synchronous coupling are migrated together or isolated with transient network proxy meshes to maintain low latencies during intermediate hybrid states.
              </p>

              {/* 4 Interactive Wave Cards */}
              <div className="space-y-3">
                {migrationWaves.map((wave, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActiveMigrationWave(idx)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                      activeMigrationWave === idx
                        ? 'bg-white dark:bg-[#0A162B] border-[#00A3E0] dark:border-cyan-400/50 shadow-md'
                        : 'bg-white/60 dark:bg-white/5 border-slate-200 dark:border-white/10 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-md bg-cyan-100 dark:bg-cyan-500/20 text-[#00A3E0] dark:text-cyan-300 font-mono font-bold text-xs">
                          {wave.wave}
                        </span>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                          {wave.title}
                        </h4>
                      </div>
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                        {wave.duration}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-2">
                      {wave.scope}
                    </p>

                    {activeMigrationWave === idx && (
                      <div className="pt-2 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                        <span className="text-[#00A3E0] font-bold">Validation Gate:</span>
                        <span className="text-right truncate max-w-xs">{wave.validation}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

            </div>

            {/* Right Image Showcase */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-900 shadow-xl group">
                <div className="relative h-80 sm:h-96 w-full overflow-hidden">
                  <img
                    src="/images/cloud/cloud_adoption_migration.jpg"
                    alt="Enterprise application migration from legacy infrastructure to modern cloud environments"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="p-3.5 rounded-2xl bg-black/70 backdrop-blur-md border border-white/15 text-xs text-white space-y-1">
                      <div className="font-bold flex items-center gap-1.5 text-cyan-300">
                        <Workflow className="w-3.5 h-3.5" />
                        Controlled Workload Cutover
                      </div>
                      <p className="text-[11px] text-slate-300">
                        Coordinated wave scheduling with pre-flight rehearsal dry-runs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cutover Protocol Visual Callout */}
              <div className="p-5 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs space-y-2">
                <div className="flex items-center gap-2 text-[#00A3E0] font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Zero-Downtime Rollback Guarantee</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Every cutover script contains an automated fallback trigger. If database validation latency or API error thresholds are violated, traffic rolls back seamlessly within 120 seconds.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 3 — APPLICATION MODERNIZATION
          Requirement: Identify opportunities to refactor, replatform, containerize,
          or redesign applications to make them suitable for cloud-native environments.
          Image: Modern enterprise application architecture with containers, APIs,
          and cloud-native services (/images/cloud/cloud_adoption_modernization.jpg)
          ========================================================================= */}
      <section id="modernization" className="py-24 bg-white dark:bg-[#060D1A] transition-colors border-b border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          {/* Clean Enterprise Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
              <span>CLOUD-NATIVE ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Application Modernization
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Identify opportunities to refactor, replatform, containerize, or redesign applications to make them suitable for cloud-native environments. Unlock elasticity, developer speed, and lower operational maintenance by modernizing legacy application tiers.
            </p>
          </div>

          {/* Section Main Content: Left Image, Right Modernization Architecture */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image Showcase */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-900 shadow-xl group">
                <div className="relative h-80 sm:h-96 w-full overflow-hidden">
                  <img
                    src="/images/cloud/cloud_adoption_modernization.jpg"
                    alt="Modern enterprise application architecture with containers, APIs, and cloud-native services"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="p-3.5 rounded-2xl bg-black/70 backdrop-blur-md border border-white/15 text-xs text-white space-y-1">
                      <div className="font-bold flex items-center gap-1.5 text-cyan-300">
                        <Box className="w-3.5 h-3.5" />
                        Containers, APIs &amp; Microservices
                      </div>
                      <p className="text-[11px] text-slate-300">
                        Decoupling monolithic dependencies into horizontally scalable services.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Architectural Shift Callout */}
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs space-y-2">
                <span className="font-mono font-bold text-[#00A3E0] uppercase tracking-wider block">
                  Decoupled Runtime Velocity
                </span>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Moving from monolithic release trains to isolated containerized releases increases deployment frequency from quarterly freezes to daily continuous deliveries.
                </p>
              </div>
            </div>

            {/* Right Modernization Pathways Grid */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Four Modernization Pathways
              </h3>

              <div className="space-y-4">
                {modernizationPathways.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActiveModernizationPath(idx)}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                      activeModernizationPath === idx
                        ? 'bg-slate-50 dark:bg-[#0A162B] border-[#00A3E0] dark:border-cyan-400/40 shadow-sm'
                        : 'bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-cyan-100 dark:bg-cyan-500/20 text-[#00A3E0] dark:text-cyan-300 uppercase">
                        {item.tag}
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-400">
                        {item.tag.split('&')[0]}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                      {item.pathway}
                    </h4>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                      {item.description}
                    </p>

                    <div className="pt-2 border-t border-slate-200/60 dark:border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {item.benefits.map((b, bi) => (
                        <div key={bi} className="flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3E0] shrink-0" />
                          <span className="truncate">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 4 — CLOUD PLATFORM ADOPTION
          Requirement: Help enterprises select and adopt suitable services across
          AWS, Microsoft Azure, Google Cloud, and hybrid environments according
          to their requirements.
          Image: A sophisticated multi-cloud infrastructure visualization with
          interconnected cloud environments (/images/cloud/cloud_adoption_platforms.jpg)
          ========================================================================= */}
      <section id="platforms" className="py-24 bg-slate-50 dark:bg-[#07101E] transition-colors border-b border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          {/* Clean Enterprise Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
              <span>HYPERSCALER &amp; HYBRID PLATFORMS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Cloud Platform Adoption
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Help enterprises select and adopt suitable services across AWS, Microsoft Azure, Google Cloud, and hybrid environments according to their requirements. We design landing zones tailored to enterprise governance, data residency, and application performance.
            </p>
          </div>

          {/* Section Main Content: Left Platform Evaluation, Right Image Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Objective Platform Placement &amp; Landing Zone Design
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Knooviq provides objective, workload-centric platform guidance. Rather than imposing a single provider, we evaluate compute requirements, licensing footprints, regional latency constraints, and existing enterprise software agreements to establish resilient landing zones.
              </p>

              {/* 4 Hyperscaler / Multi-Cloud Workload Fit Blocks (No trademark provider logos) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="p-5 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#00A3E0]">AWS ECOSYSTEM</span>
                    <Cloud className="w-4 h-4 text-[#00A3E0]" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    Amazon Web Services
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Optimal for global distributed microservices, massive container clusters (EKS), Aurora relational databases, and enterprise serverless architectures.
                  </p>
                  <div className="pt-2 border-t border-slate-100 dark:border-white/5 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    Control Tower &bull; Transit Gateway &bull; KMS
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#00A3E0]">MICROSOFT ECOSYSTEM</span>
                    <Layers className="w-4 h-4 text-[#00A3E0]" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    Microsoft Azure
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Premier choice for enterprise Windows/SQL estates, Active Directory / Entra ID federations, Microsoft 365 integrations, and hybrid Azure Arc management.
                  </p>
                  <div className="pt-2 border-t border-slate-100 dark:border-white/5 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    Azure Virtual WAN &bull; AKS &bull; Sentinel
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#00A3E0]">GOOGLE ECOSYSTEM</span>
                    <Cpu className="w-4 h-4 text-[#00A3E0]" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    Google Cloud (GCP)
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Exceptional for enterprise data lakes (BigQuery), automated Kubernetes orchestration (GKE Autopilot), AI/ML workloads, and global multi-region networks.
                  </p>
                  <div className="pt-2 border-t border-slate-100 dark:border-white/5 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    VPC Service Controls &bull; Anthos &bull; Vertex AI
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#00A3E0]">HYBRID / PRIVATE</span>
                    <Server className="w-4 h-4 text-[#00A3E0]" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    Hybrid &amp; Private Cloud
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Designed for data residency mandates, sovereign clouds, and ultra-low-latency on-premises manufacturing or healthcare operations requiring direct interconnects.
                  </p>
                  <div className="pt-2 border-t border-slate-100 dark:border-white/5 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    Direct Connect &bull; ExpressRoute &bull; VMware HCX
                  </div>
                </div>

              </div>

            </div>

            {/* Right Image Showcase */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-900 shadow-xl group">
                <div className="relative h-80 sm:h-96 w-full overflow-hidden">
                  <img
                    src="/images/cloud/cloud_adoption_platforms.jpg"
                    alt="A sophisticated multi-cloud infrastructure visualization with interconnected cloud environments"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="p-3.5 rounded-2xl bg-black/70 backdrop-blur-md border border-white/15 text-xs text-white space-y-1">
                      <div className="font-bold flex items-center gap-1.5 text-cyan-300">
                        <Network className="w-3.5 h-3.5" />
                        Multi-Cloud Infrastructure Interconnect
                      </div>
                      <p className="text-[11px] text-slate-300">
                        Unified network transit routing across public and private estates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Landing Zone Architecture Callout */}
              <div className="p-5 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs space-y-2">
                <span className="font-mono font-bold text-[#00A3E0] uppercase tracking-wider block">
                  Enterprise Landing Zone Blueprint
                </span>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Every landing zone includes automated organizational units, centralized logging, strict network egress firewalls, and least-privilege IAM guardrails provisioned via Infrastructure as Code (Terraform).
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 5 — CLOUD SECURITY AND GOVERNANCE
          Requirement: Integrate identity and access management, security controls,
          data protection, compliance requirements, and governance policies into
          the adoption process.
          Image: Enterprise cloud security architecture showing identity controls,
          protected data flows, and secure infrastructure (/images/cloud/cloud_adoption_security.jpg)
          ========================================================================= */}
      <section id="security" className="py-24 bg-white dark:bg-[#060D1A] transition-colors border-b border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          {/* Clean Enterprise Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
              <span>ZERO-TRUST GOVERNANCE &amp; COMPLIANCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Cloud Security and Governance
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Integrate identity and access management, security controls, data protection, compliance requirements, and governance policies into the adoption process. We implement defense-in-depth security directly into deployment pipelines from Day One.
            </p>
          </div>

          {/* Section Main Content: Left Image, Right Security Framework */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image Showcase */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-900 shadow-xl group">
                <div className="relative h-80 sm:h-96 w-full overflow-hidden">
                  <img
                    src="/images/cloud/cloud_adoption_security.jpg"
                    alt="Enterprise cloud security architecture showing identity controls, protected data flows, and secure infrastructure"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="p-3.5 rounded-2xl bg-black/70 backdrop-blur-md border border-white/15 text-xs text-white space-y-1">
                      <div className="font-bold flex items-center gap-1.5 text-cyan-300">
                        <Lock className="w-3.5 h-3.5" />
                        Zero-Trust Security Architecture
                      </div>
                      <p className="text-[11px] text-slate-300">
                        Centralized IAM, microsegmentation, and Customer-Managed Key encryption.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Compliance Assurance Callout */}
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs space-y-2">
                <span className="font-mono font-bold text-[#00A3E0] uppercase tracking-wider block">
                  Continuous Compliance Guardrails
                </span>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Automated Cloud Security Posture Management (CSPM) continuously audits landing zones against CIS Benchmarks, ISO 27001, SOC 2, and regional privacy mandates.
                </p>
              </div>
            </div>

            {/* Right 4 Core Security Pillars */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Four Zero-Trust Security Tenets
              </h3>

              <div className="space-y-3.5">
                {[
                  {
                    title: 'Centralized Identity & Access Management (IAM)',
                    icon: Shield,
                    desc: 'Enforce single sign-on (SSO), short-lived credentials, just-in-time access approvals, and strict role-based access controls (RBAC) across multi-account environments.',
                    feature: 'Zero static administrative API credentials'
                  },
                  {
                    title: 'Data Protection & Customer-Managed Encryption',
                    icon: Lock,
                    desc: 'Bake hardware-backed key encryption (KMS / HSM) into all cloud storage, relational databases, and data movement pipelines both in transit and at rest.',
                    feature: 'Enforced TLS 1.3 & AES-256 GCM across all endpoints'
                  },
                  {
                    title: 'Policy-as-Code & Automated Guardrails',
                    icon: FileCode,
                    desc: 'Deploy pre-commit and pipeline-level Open Policy Agent (OPA) checks preventing unencrypted storage, open security groups, or unauthorized public access.',
                    feature: 'Automated drift detection and self-remediating alerts'
                  },
                  {
                    title: 'Continuous Threat Detection & SIEM Integration',
                    icon: ShieldCheck,
                    desc: 'Aggregate VPC flow logs, cloud audit trails, and container runtimes into centralized security operations center (SOC) dashboards for 24/7 telemetry.',
                    feature: 'Sub-minute anomaly alert routing to incident engineers'
                  }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4.5 rounded-2xl bg-slate-50 dark:bg-[#0A162B] border border-slate-200 dark:border-white/10 space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Icon className="w-4 h-4 text-[#00A3E0]" />
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                            {item.title}
                          </h4>
                        </div>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        {item.desc}
                      </p>
                      <div className="pt-2 border-t border-slate-200/60 dark:border-white/10 text-[11px] font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#00A3E0]" />
                        <span>{item.feature}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 6 — DATA AND WORKLOAD TRANSITION
          Requirement: Plan the movement of enterprise data, application workloads,
          integrations, and business services while addressing validation,
          dependencies, and transition risks.
          Image: Data pipelines and interconnected enterprise workloads moving between
          legacy systems and cloud infrastructure (/images/cloud/cloud_adoption_transition.jpg)
          ========================================================================= */}
      <section id="transition" className="py-24 bg-slate-50 dark:bg-[#07101E] transition-colors border-b border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          {/* Clean Enterprise Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
              <span>DATA MIGRATION &amp; WORKLOAD TRANSITION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Data and Workload Transition
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Plan the movement of enterprise data, application workloads, integrations, and business services while addressing validation, dependencies, and transition risks. Zero data loss and verified transactional integrity are guaranteed at every milestone.
            </p>
          </div>

          {/* Section Main Content: Left Transition Protocol, Right Image Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Continuous Data Replication &amp; Cutover Architecture
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Enterprise data movement cannot rely on static database export/import passes. We implement real-time log-based Change Data Capture (CDC) pipelines that synchronize multi-terabyte transactional databases to the cloud continuously, reducing cutover downtime to minutes.
              </p>

              {/* 4 Interactive Data Transition Steps */}
              <div className="space-y-3.5">
                {dataTransitionStages.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActiveTransitionStage(idx)}
                    className={`p-4.5 rounded-2xl border transition-all cursor-pointer ${
                      activeTransitionStage === idx
                        ? 'bg-white dark:bg-[#0A162B] border-[#00A3E0] dark:border-cyan-400/50 shadow-md'
                        : 'bg-white/60 dark:bg-white/5 border-slate-200 dark:border-white/10 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-md bg-cyan-100 dark:bg-cyan-500/20 text-[#00A3E0] dark:text-cyan-300 font-mono font-bold text-xs">
                          {item.stage}
                        </span>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                          {item.title}
                        </h4>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-2">
                      {item.description}
                    </p>

                    <div className="pt-2 border-t border-slate-100 dark:border-white/5 flex items-center gap-2 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#00A3E0] shrink-0" />
                      <span>{item.safeguard}</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Image Showcase */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-900 shadow-xl group">
                <div className="relative h-80 sm:h-96 w-full overflow-hidden">
                  <img
                    src="/images/cloud/cloud_adoption_transition.jpg"
                    alt="Data pipelines and interconnected enterprise workloads moving between legacy systems and cloud infrastructure"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="p-3.5 rounded-2xl bg-black/70 backdrop-blur-md border border-white/15 text-xs text-white space-y-1">
                      <div className="font-bold flex items-center gap-1.5 text-cyan-300">
                        <Database className="w-3.5 h-3.5" />
                        Live CDC Pipelines &amp; Message Mesh
                      </div>
                      <p className="text-[11px] text-slate-300">
                        Continuous asynchronous data flight between legacy servers and cloud targets.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Validation Checksum Callout */}
              <div className="p-5 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs space-y-2">
                <div className="flex items-center gap-2 text-[#00A3E0] font-bold">
                  <FileCheck className="w-4 h-4" />
                  <span>Row-Count &amp; Cryptographic Hash Verification</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Before cutover sign-off, automated validators run row-level counts and SHA-256 block checksum comparisons between source and target tables, guaranteeing 100% data integrity.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 7 — CLOUD OPTIMIZATION AND CONTINUOUS IMPROVEMENT
          Requirement: Establish practices for resource management, cost visibility,
          workload performance, operational monitoring, and ongoing cloud environment
          improvement.
          Image: Cloud operations engineers examining infrastructure telemetry and
          resource utilization in a realistic operations environment. Avoid
          dashboard-heavy website layouts.
          ========================================================================= */}
      <section id="optimization" className="py-24 bg-white dark:bg-[#060D1A] transition-colors border-b border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          {/* Clean Enterprise Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
              <span>CONTINUOUS OPTIMIZATION &amp; FINOPS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Cloud Optimization and Continuous Improvement
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Establish practices for resource management, cost visibility, workload performance, operational monitoring, and ongoing cloud environment improvement. Cloud adoption succeeds in Day 2 through disciplined engineering practices and transparent economics.
            </p>
          </div>

          {/* Section Main Content: Left Image, Right Continuous Improvement Framework */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image Showcase */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-900 shadow-xl group">
                <div className="relative h-80 sm:h-96 w-full overflow-hidden">
                  <img
                    src="/images/cloud/cloud_adoption_operations.jpg"
                    alt="Cloud operations engineers examining infrastructure telemetry and resource utilization in a realistic operations environment"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="p-3.5 rounded-2xl bg-black/70 backdrop-blur-md border border-white/15 text-xs text-white space-y-1">
                      <div className="font-bold flex items-center gap-1.5 text-cyan-300">
                        <Activity className="w-3.5 h-3.5" />
                        Infrastructure Telemetry &amp; SRE Practice
                      </div>
                      <p className="text-[11px] text-slate-300">
                        Proactive reliability engineering without dashboard fatigue.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FinOps Economics Callout */}
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs space-y-2">
                <span className="font-mono font-bold text-[#00A3E0] uppercase tracking-wider block">
                  FinOps Unit Economics
                </span>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  We align infrastructure expense with actual business metrics (cost per customer transaction, cost per order booked) rather than abstract virtual machine billing.
                </p>
              </div>
            </div>

            {/* Right 4 Operational Tenets (Clean engineering focus, avoiding dashboard clutter) */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Four Pillars of Ongoing Cloud Optimization
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#0A162B] border border-slate-200 dark:border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#00A3E0]">FINOPS CADENCE</span>
                    <BarChart3 className="w-4 h-4 text-[#00A3E0]" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    Cost Visibility &amp; Rightsizing
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Automated rightsizing algorithms identify over-provisioned memory or compute tiers, while automated commitment discount models (Savings Plans &amp; Reserved Instances) optimize baseline spend.
                  </p>
                  <div className="pt-2 border-t border-slate-200/60 dark:border-white/5 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    Showback &bull; Automated Anomaly Triage
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#0A162B] border border-slate-200 dark:border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#00A3E0]">RELIABILITY (SRE)</span>
                    <Activity className="w-4 h-4 text-[#00A3E0]" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    Full-Stack OpenTelemetry
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Vendor-neutral OpenTelemetry instrumentation collects distributed traces, latency distributions, and runtime exceptions, enabling pinpoint root-cause analysis in under 5 minutes.
                  </p>
                  <div className="pt-2 border-t border-slate-200/60 dark:border-white/5 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    SLO Tracking &bull; Error Budget Governance
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#0A162B] border border-slate-200 dark:border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#00A3E0]">AUTONOMOUS OPS</span>
                    <Zap className="w-4 h-4 text-[#00A3E0]" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    Self-Healing Runbooks
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Event-driven automation handles standard operational remediations (disk expansions, pod restarts, SSL certificate rotations) without waking on-call engineers.
                  </p>
                  <div className="pt-2 border-t border-slate-200/60 dark:border-white/5 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    Automated Incident Runbooks &bull; 99.99% Uptime
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#0A162B] border border-slate-200 dark:border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#00A3E0]">ARCHITECTURE REVIEW</span>
                    <RefreshCw className="w-4 h-4 text-[#00A3E0]" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    Well-Architected Reviews
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Quarterly Well-Architected Framework reviews evaluate operational resilience, cost efficiency, and security posture against evolving cloud provider capabilities.
                  </p>
                  <div className="pt-2 border-t border-slate-200/60 dark:border-white/5 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    Quarterly Audits &bull; Continuous Evolution
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 8: RELATED CLOUD & OPERATIONS PRACTICES
          ========================================================================= */}
      <RelatedCloudServices currentPath="/cloud-operations/adoption" limit={3} />


      {/* =========================================================================
          SECTION 9: CONTACT CTA SECTION
          ========================================================================= */}
      <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-[#060D1A] dark:via-[#081224] dark:to-[#050A14] border-t border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-slate-900 via-[#0A1A33] to-[#050E1F] border border-cyan-500/30 text-white shadow-2xl relative overflow-hidden space-y-8">
            
            {/* Ambient Cyan Accent Glow */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#00A3E0]/20 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#00A3E0]" />
                <span>EXECUTIVE ADVISORY &amp; ARCHITECTURE</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                Ready to Move to the Cloud with Predictable Execution?
              </h2>
              
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Connect directly with certified Knooviq enterprise architects to evaluate workload readiness, structure deterministic migration waves, and safeguard business continuity across AWS, Azure, and Google Cloud.
              </p>
            </div>

            {/* Value Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-slate-300 font-mono">
                <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0" />
                <span>Current-State Workload Audit</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300 font-mono">
                <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0" />
                <span>Multi-Cloud Architecture Blueprint</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300 font-mono">
                <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0" />
                <span>Phased Cutover Wave Planning</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => handleOpenContact('Enterprise Cloud Adoption')}
                className="px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-gradient-to-r from-[#00A3E0] to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg shadow-cyan-500/30 flex items-center gap-2.5 group cursor-pointer"
              >
                <span>Talk to Our Cloud Experts</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                to="/cloud-operations/operating-model"
                className="px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 hover:text-white border border-white/20 font-bold text-xs sm:text-sm tracking-wider transition-all flex items-center gap-2 group"
              >
                <span>Explore Cloud Operating Model</span>
                <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
