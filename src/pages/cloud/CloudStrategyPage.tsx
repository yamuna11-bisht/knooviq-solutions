import React, { useEffect, useState } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import {
  Compass,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  DollarSign,
  ShieldCheck,
  ChevronDown,
  Layers,
  BarChart3,
  Globe,
  Zap,
  Activity,
  ChevronRight,
  Sparkles,
  Server,
  Database,
  Lock,
  Workflow,
  Cpu,
  FileText,
  Search,
  Check,
  Maximize2,
  X,
  Building2,
  ShieldAlert,
  ArrowUpRight
} from 'lucide-react';
import { RelatedCloudServices } from '../../components/cloud/RelatedCloudServices';

interface ChildPageProps {
  onOpenContact?: (topic?: string) => void;
}

export const CloudStrategyPage: React.FC<ChildPageProps> = ({ onOpenContact }) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Interactive UI States
  const [activePillar, setActivePillar] = useState<number>(0);
  const [activeApproachStep, setActiveApproachStep] = useState<number>(0);
  const [activeDeliverableCategory, setActiveDeliverableCategory] = useState<string>('ALL');
  const [lightboxImage, setLightboxImage] = useState<{ src: string; caption: string } | null>(null);

  useEffect(() => {
    document.title = 'Enterprise Cloud Strategy & Advisory | Architecture & Roadmap | KNOOVIQ';
    window.scrollTo({ top: 0, behavior: 'instant' });

    const tabParam = searchParams.get('tab');
    if (tabParam === 'readiness') {
      navigate('/cloud-operations/readiness', { replace: true });
    } else if (tabParam === 'adoption') {
      navigate('/cloud-operations/adoption', { replace: true });
    } else if (tabParam === 'operating-model') {
      navigate('/cloud-operations/operating-model', { replace: true });
    }
  }, [searchParams, navigate]);

  const handleDiscussStrategy = () => {
    if (onOpenContact) {
      onOpenContact('Cloud Strategy Consulting');
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // =========================================================================
  // SECTION 2 DATA: 6 Key Benefits of Cloud Strategy
  // =========================================================================
  const strategyBenefits = [
    {
      id: 'business-alignment',
      title: 'Business Alignment',
      description: 'Anchor every cloud investment directly to commercial outcomes, revenue acceleration, and customer engagement priorities.',
      icon: TrendingUp
    },
    {
      id: 'cloud-model-selection',
      title: 'Cloud Model Selection',
      description: 'Evaluate public, private, hybrid, and sovereign cloud environments with quantitative workload suitability criteria.',
      icon: Globe
    },
    {
      id: 'investment-planning',
      title: 'Investment Planning',
      description: 'Establish comprehensive 3-year TCO economics, CapEx-to-OpEx transitions, and unit-cost FinOps governance.',
      icon: DollarSign
    },
    {
      id: 'risk-compliance',
      title: 'Risk & Compliance',
      description: 'Proactively resolve regulatory mandates (GDPR, HIPAA, RBI, SOC 2), regional data residency, and zero-trust controls.',
      icon: ShieldCheck
    },
    {
      id: 'scalability-flexibility',
      title: 'Scalability & Flexibility',
      description: 'Build an elastic infrastructure foundation capable of handling 10x demand surges with zero operational re-architecture.',
      icon: Layers
    },
    {
      id: 'innovation-enablement',
      title: 'Innovation Enablement',
      description: 'Accelerate adoption of generative AI, event-driven microservices, real-time analytics, and cloud-native modernization.',
      icon: Zap
    }
  ];

  // =========================================================================
  // SECTION 3 DATA: 5 Strategic Cloud Pillars
  // =========================================================================
  const strategicPillars = [
    {
      id: 'adoption-roadmap',
      number: '01',
      title: 'Cloud Adoption Roadmap',
      tagline: 'Prioritized Wave Scheduling & Risk Mitigation',
      description: 'Establish a structured, phased adoption plan that sequences enterprise workloads into manageable migration waves. We balance technical dependencies, business seasonality, regulatory constraints, and operational velocity to ensure seamless execution without organizational fatigue.',
      metrics: ['Deterministic 7 R’s Classification', 'Dependency Wave Sequencing', 'Low-Risk Pilot Identification'],
      icon: Workflow
    },
    {
      id: 'target-architecture',
      number: '02',
      title: 'Target Cloud Architecture',
      tagline: 'Multi-Cloud Blueprints & Resilient Landing Zones',
      description: 'Architect scalable, hyperscaler-agnostic target environments across AWS, Azure, Google Cloud, and private cloud clusters. We define modular account hierarchies, transit network fabrics, zero-trust identity perimeters, and automated infrastructure-as-code guardrails from day one.',
      metrics: ['Multi-Account Landing Zones', 'Sub-5ms Hybrid Interconnects', 'Active-Active Disaster Recovery'],
      icon: Cpu
    },
    {
      id: 'governance-security',
      number: '03',
      title: 'Governance & Security',
      tagline: 'Continuous Compliance & Policy-as-Code',
      description: 'Embed security, compliance, and governance directly into your automated deployment pipelines. We implement centralized identity management, least-privilege role boundaries, continuous posture monitoring, and sovereign data residency controls that protect enterprise brand equity.',
      metrics: ['Automated Policy Enforcement', 'Unified IAM Role Governance', 'Continuous CSPM Compliance'],
      icon: Lock
    },
    {
      id: 'cost-optimization',
      number: '04',
      title: 'Cost Optimization',
      tagline: 'Proactive FinOps & Economic Transparency',
      description: 'Shift cloud economics from surprise monthly billing to predictive, value-driven unit cost management. We institute real-time utilization telemetry, right-sizing algorithms, commitment discount strategies (Reserved Instances & Savings Plans), and departmental showback/chargeback models.',
      metrics: ['35%+ Average TCO Reduction', 'Real-Time Anomaly Telemetry', 'Showback & FinOps Culture'],
      icon: BarChart3
    },
    {
      id: 'innovation-enablement',
      number: '05',
      title: 'Innovation Enablement',
      tagline: 'Modern Runtimes & Digital Velocity',
      description: 'Transform cloud from a mere hosting destination into an engine of continuous business differentiation. We architect modern container platforms (Kubernetes), serverless runtimes, automated CI/CD release trains, and enterprise data fabrics that empower product engineering teams.',
      metrics: ['Containerized Fleet Agility', 'Automated GitOps Pipelines', 'Fast GenAI & Data Ingestion'],
      icon: Sparkles
    }
  ];

  // =========================================================================
  // SECTION 4 DATA: 5-Step Methodology
  // =========================================================================
  const approachSteps = [
    {
      number: '01',
      title: 'Assess',
      tag: 'CURRENT-STATE AUDIT',
      description: 'Understand business goals, existing infrastructure, applications, and technical constraints.',
      deliverables: ['Agentless IT Asset Discovery', 'Workload Dependency Clustering', 'Executive Objectives Alignment']
    },
    {
      number: '02',
      title: 'Analyze',
      tag: 'RISK & SUITABILITY',
      description: 'Identify dependencies, risks, cloud suitability, and modernization opportunities across the portfolio.',
      deliverables: ['Technical Debt Scoring', '7 R’s Workload Dispositions', 'Application Modernization Matrix']
    },
    {
      number: '03',
      title: 'Strategize',
      tag: 'MODEL SELECTION',
      description: 'Select suitable cloud models and establish strategic priorities, hyperscaler mix, and FinOps models.',
      deliverables: ['Public vs Private vs Hybrid Matrix', '3-Year TCO Financial Model', 'Hyperscaler Platform Selection']
    },
    {
      number: '04',
      title: 'Plan',
      tag: 'BLUEPRINT FORMULATION',
      description: 'Define target architecture, governance, security, and structured wave-based adoption roadmaps.',
      deliverables: ['Enterprise Landing Zone Blueprint', 'Phased Wave Migration Schedule', 'Policy-as-Code Guardrails']
    },
    {
      number: '05',
      title: 'Execute & Evolve',
      tag: 'CONTINUOUS REFINEMENT',
      description: 'Support implementation planning and continuously refine the strategy as business needs change.',
      deliverables: ['Pilot Workload Cutover Playbook', 'Operating Model Handover Charter', 'Quarterly Strategy Re-alignment']
    }
  ];

  // =========================================================================
  // SECTION 5 DATA: 8 Practical Deliverables
  // =========================================================================
  const deliverables = [
    {
      id: 'strategy-dossier',
      category: 'STRATEGY',
      title: 'Business-Aligned Cloud Strategy',
      summary: 'Executive-level strategic dossier linking cloud technology decisions directly to business growth goals, market velocity, and capital allocation.',
      format: 'Executive Strategic Report & Presentation'
    },
    {
      id: 'adoption-roadmap',
      category: 'ROADMAP',
      title: 'Cloud Adoption Roadmap',
      summary: 'Comprehensive timeline sequencing migration waves, technical dependencies, workload complexity, and required organizational milestones.',
      format: 'Interactive Wave Matrix & Gantt Schedule'
    },
    {
      id: 'target-architecture',
      category: 'ARCHITECTURE',
      title: 'Target Architecture Principles',
      summary: 'Detailed technical reference blueprints defining modular landing zones, hybrid network topologies, high-availability tiers, and data residency.',
      format: 'Architectural Blueprints & Visio/CAD Schematics'
    },
    {
      id: 'platform-recommendations',
      category: 'ARCHITECTURE',
      title: 'Cloud Platform Recommendations',
      summary: 'Quantitative evaluation scorecard detailing optimal cloud platform placements across AWS, Microsoft Azure, Google Cloud, and private environments.',
      format: 'Vendor-Agnostic Decision Matrix'
    },
    {
      id: 'governance-framework',
      category: 'GOVERNANCE',
      title: 'Governance and Security Framework',
      summary: 'Standardized operational policies, zero-trust identity federation, role-based access controls, and automated compliance guardrails.',
      format: 'Policy-as-Code Runbooks & RACI Matrix'
    },
    {
      id: 'cost-recommendations',
      category: 'FINOPS',
      title: 'Cost-Management Recommendations',
      summary: 'Rigorous 3-year total cost of ownership (TCO) projection, workload right-sizing guidance, and commitment discount optimization plans.',
      format: 'FinOps Economic Model & Excel Spreadsheet'
    },
    {
      id: 'modernization-priorities',
      category: 'ROADMAP',
      title: 'Modernization Priorities',
      summary: 'Deterministic 7 R’s disposition matrix evaluating containerization feasibility, PaaS database transition, and microservice decoupling candidates.',
      format: 'Portfolio Rationalization Catalog'
    },
    {
      id: 'implementation-guidance',
      category: 'STRATEGY',
      title: 'Implementation Planning Guidance',
      summary: 'Actionable execution playbooks specifying migration tooling, proof-of-concept pilot scopes, rollback contingencies, and risk governance.',
      format: 'Migration Factory Tooling & Execution Playbook'
    }
  ];

  // =========================================================================
  // SECTION 6 DATA: 6 Cloud Strategy Focus Areas
  // =========================================================================
  const focusAreas = [
    {
      id: 'enterprise-strategy',
      title: 'Enterprise Cloud Strategy',
      badge: 'EXECUTIVE ADVISORY',
      summary: 'Define long-term cloud direction and business priorities.',
      description: 'Align C-suite executive vision with actionable engineering mandates, establishing enterprise-wide standards for cloud adoption, operating culture, and digital capability growth.',
      link: '/cloud-operations/strategy',
      linkText: 'Explore Enterprise Strategy'
    },
    {
      id: 'deployment-planning',
      title: 'Public, Private & Hybrid Cloud Planning',
      badge: 'DEPLOYMENT MODELS',
      summary: 'Evaluate appropriate deployment models.',
      description: 'Balance regulatory compliance, data latency, and cost efficiency by formulating deterministic workload placement guidelines spanning bare metal, on-prem VMware, and public cloud regions.',
      link: '/cloud-operations/infrastructure',
      linkText: 'Explore Cloud Infrastructure'
    },
    {
      id: 'multicloud-strategy',
      title: 'Multicloud Strategy',
      badge: 'PORTABILITY & RESILIENCE',
      summary: 'Plan the use and governance of multiple cloud providers where appropriate.',
      description: 'Mitigate single-vendor risk and leverage best-of-breed services across AWS, Azure, and Google Cloud with unified identity, cross-cloud networking, and container portability.',
      link: '/cloud-operations/azure',
      linkText: 'Explore Multi-Cloud Practice'
    },
    {
      id: 'architecture-planning',
      title: 'Cloud Architecture Planning',
      badge: 'TECHNICAL BLUEPRINTS',
      summary: 'Establish scalable, secure, and resilient architectural principles.',
      description: 'Design robust multi-region landing zones, hub-and-spoke transit networks, automated disaster recovery, and infrastructure-as-code foundations built for longevity.',
      link: '/solutions/solution-architecture',
      linkText: 'Explore Solution Architecture'
    },
    {
      id: 'governance-security',
      title: 'Cloud Governance & Security Strategy',
      badge: 'ZERO-TRUST POSTURE',
      summary: 'Define policies, responsibilities, identity controls, and compliance requirements.',
      description: 'Protect enterprise assets through automated policy-as-code guardrails, unified IAM governance, continuous CSPM auditing, and strict data sovereignty compliance.',
      link: '/cloud-operations/security',
      linkText: 'Explore Security & Resilience'
    },
    {
      id: 'app-modernization',
      title: 'Application Modernization Strategy',
      badge: 'PORTFOLIO RATIONALIZATION',
      summary: 'Identify opportunities to modernize applications and improve cloud compatibility.',
      description: 'Uncover technical debt across legacy monoliths, evaluate containerization with Kubernetes, and transition proprietary databases to agile cloud-native platforms.',
      link: '/cloud-operations/readiness',
      linkText: 'Explore Cloud Readiness'
    }
  ];

  return (
    <div className="bg-white dark:bg-[#070E1C] text-slate-900 dark:text-slate-100 transition-colors duration-300">

      {/* =========================================================================
      {/* =========================================================================
          SECTION 1: CLOUD STRATEGY HERO (Cinematic Full-Bleed Enterprise Hero)
          Includes breadcrumb: Home → Cloud & Operations → Cloud Strategy
         ========================================================================= */}
      <section className="relative w-full min-h-[560px] sm:min-h-[580px] lg:min-h-[620px] flex items-center overflow-hidden bg-[#040B17] text-white border-b border-slate-200/20 dark:border-white/10 shadow-2xl pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20">
        
        {/* Full-Bleed Enterprise Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="/images/cloud/strategy_hero.jpg" 
            alt="Enterprise Cloud Strategy Infrastructure Overview and Architecture Review in Modern Data Center" 
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
              <Compass className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>CLOUD STRATEGY &amp; ADVISORY</span>
            </div>

            {/* Headings */}
            <div className="space-y-3">
              <span className="block text-xs sm:text-sm font-mono font-semibold uppercase tracking-wider text-[#00A3E0]">
                Cloud Strategy
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-[1.18]">
                Plan Smarter. Build Stronger. Scale Faster.
              </h1>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
              Help enterprises establish a clear cloud direction that aligns technology decisions with business priorities, security requirements, architecture, and long-term modernization goals.
            </p>

            {/* Value Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 max-w-2xl">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 font-medium">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Business-Driven Cloud Placement</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 font-medium">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>7 R’s Workload Rationalization</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 font-medium">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>FinOps 3-Year TCO Modeling</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 font-medium">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Hyperscaler-Neutral Advisory</span>
              </div>
            </div>



            {/* Live Status Footnote / Badge */}
            <div className="pt-2 flex items-center gap-3 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-cyan-400 font-bold">
                <Activity className="w-4 h-4 animate-pulse text-[#00A3E0]" />
                Enterprise Architecture Strategy
              </span>
              <span>&bull;</span>
              <span>Validated Hyperscaler Placement</span>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2: WHY CLOUD STRATEGY MATTERS
          Heading: A Strategic Approach for a Cloud-First Future
          Content: Explain how a well-defined cloud strategy helps organizations make informed decisions...
          6 Key Benefits: Business Alignment, Cloud Model Selection, Investment Planning,
                          Risk & Compliance, Scalability & Flexibility, Innovation Enablement
          Layout: Introductory content on left, six compact icon-led capability items in center/grid,
                  unique supporting Image 2 on the right.
         ========================================================================= */}
      <section id="why-matters" className="py-20 lg:py-24 bg-slate-50 dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Section Header & Narrative */}
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
              <span>SECTION 02 &bull; STRATEGIC IMPERATIVE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              A Strategic Approach for a Cloud-First Future
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Moving workloads to the cloud without an overarching strategy frequently produces unpredictable operational spend, fragmented identity silos, security vulnerabilities, and stalled migration programs. Knooviq helps organizations make informed technology decisions, manage enterprise risks, plan capital and operating resources, and establish a scalable cloud foundation tailored to long-term commercial goals.
            </p>
          </div>

          {/* Core Content Grid: 6 Icon-led Capabilities on Left & Center, Unique Image 2 on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* 6 Compact Icon-Led Capability Items */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {strategyBenefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={benefit.id}
                    className="p-5 rounded-2xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 hover:border-[#00A3E0] dark:hover:border-[#00A3E0]/50 hover:shadow-md transition-all group flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-xl bg-[#00A3E0]/10 dark:bg-cyan-500/10 flex items-center justify-center text-[#00A3E0] group-hover:scale-110 transition-transform">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                          0{idx + 1}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-[#00A3E0] transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Side: Unique Image 2 (Planning scene analyzing infrastructure and dependencies) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0B1528] shadow-lg group">
                <div className="relative h-80 sm:h-96 w-full overflow-hidden">
                  <img
                    src="/images/cloud/strategy_matters.jpg"
                    alt="Enterprise Technology Professionals Analyzing Cloud Infrastructure and System Dependencies in Conference Room"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 text-white select-text">
                    <span className="text-[11px] font-mono font-bold text-cyan-300 uppercase tracking-wider block">
                      Multi-Cloud Collaborative Review
                    </span>
                    <p className="text-xs text-slate-200 mt-1 font-medium">
                      Rigorous architecture sessions resolving systemic dependencies prior to migration wave execution.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: CLOUD STRATEGY PILLARS
          Heading: Building a Future-Ready Cloud Strategy
          5 Strategic Pillars: Cloud Adoption Roadmap, Target Cloud Architecture,
                               Governance & Security, Cost Optimization, Innovation Enablement
          Layout: Light-blue background with clear strategy framework, interconnected elements,
                  and unique supporting Image 3.
         ========================================================================= */}
      <section id="pillars" className="py-20 lg:py-24 bg-gradient-to-b from-[#F0F7FD] via-sky-50/50 to-white dark:from-[#061226] dark:via-[#071630] dark:to-[#050B17] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-100/70 dark:bg-cyan-500/15 border border-cyan-300/60 dark:border-cyan-400/30 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
              <span>SECTION 03 &bull; ARCHITECTURAL PILLARS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Building a Future-Ready Cloud Strategy
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Sustainable enterprise transformation requires a balanced framework that spans roadmaps, landing zones, security policies, and FinOps economics. Knooviq anchors your cloud journey across five future-ready pillars.
            </p>
          </div>

          {/* Interactive Strategy Framework: Left Tabs + Supporting Unique Image 3 on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 5 Pillars Navigation Accordion / Tabs */}
            <div className="lg:col-span-7 space-y-3">
              {strategicPillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                const isActive = activePillar === idx;
                return (
                  <div
                    key={pillar.id}
                    className={`rounded-2xl border transition-all overflow-hidden ${
                      isActive
                        ? 'bg-white dark:bg-[#0B1528] border-[#00A3E0] shadow-md'
                        : 'bg-white/70 dark:bg-[#070E1E] border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setActivePillar(idx)}
                      className="w-full text-left p-5 flex items-start gap-4 cursor-pointer"
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? 'bg-[#00A3E0] text-white'
                          : 'bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${
                            isActive ? 'text-[#00A3E0]' : 'text-slate-400'
                          }`}>
                            PILLAR {pillar.number}
                          </span>
                          {isActive && (
                            <span className="text-[10px] font-bold text-[#00A3E0] bg-[#00A3E0]/10 px-2 py-0.5 rounded-full">
                              Active Focus
                            </span>
                          )}
                        </div>
                        <h3 className={`text-base sm:text-lg font-bold mt-0.5 transition-colors ${
                          isActive ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300'
                        }`}>
                          {pillar.title}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          {pillar.tagline}
                        </p>
                      </div>
                    </button>

                    {/* Expanded Content Details */}
                    {isActive && (
                      <div className="px-5 pb-5 pt-1 space-y-4 border-t border-slate-100 dark:border-white/5 animate-in fade-in duration-200">
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          {pillar.description}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                          {pillar.metrics.map((m, mIdx) => (
                            <div key={mIdx} className="p-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 text-xs text-slate-700 dark:text-slate-200 font-medium flex items-center gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3E0] shrink-0" />
                              <span className="truncate">{m}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Side: Unique Image 3 (Architectural concept illustrating cloud progression) */}
            <div className="lg:col-span-5 sticky top-28">
              <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0B1528] shadow-xl group">
                <div className="relative h-80 sm:h-96 w-full overflow-hidden">
                  <img
                    src="/images/cloud/strategy_pillars.jpg"
                    alt="Enterprise Architects Reviewing Cloud Transformation Roadmap Model and Data Center Server Enclosures"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-5 left-5 right-5 text-white space-y-1 select-text">
                    <span className="text-[11px] font-mono font-bold text-cyan-300 uppercase tracking-wider block">
                      Architectural Modeling &amp; Validation
                    </span>
                    <p className="text-xs text-slate-200">
                      Multi-tier roadmap models uniting on-premises datacenters, AWS, Azure, and target hybrid landing zones.
                    </p>
                  </div>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-[#070E1E] border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                  <span>Pillar Alignment: 5 / 5 Complete</span>
                  <span className="text-[#00A3E0] font-bold">100% Roadmap Verified</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: OUR CLOUD STRATEGY APPROACH
          Heading: A Structured Approach to Cloud Success
          5-Step Methodology: Assess, Analyze, Strategize, Plan, Execute & Evolve
          Layout: Horizontal five-step process on desktop, vertical on mobile,
                  and separate Image 4 panel (top-down photograph of architect desk).
         ========================================================================= */}
      <section id="approach" className="py-20 lg:py-24 bg-white dark:bg-[#070E1C] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Header */}
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
              <span>SECTION 04 &bull; CONSULTING METHODOLOGY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              A Structured Approach to Cloud Success
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Our 5-phase strategic framework eliminates guesswork, converting complex multi-tier application estates into sequenced, predictable transformation waves with zero disruption to active business transactions.
            </p>
          </div>

          {/* Desktop Horizontal Process Bar / Selector */}
          <div className="hidden lg:grid grid-cols-5 gap-3">
            {approachSteps.map((step, idx) => {
              const isActive = activeApproachStep === idx;
              return (
                <button
                  key={step.number}
                  type="button"
                  onClick={() => setActiveApproachStep(idx)}
                  className={`p-4 rounded-2xl text-left border transition-all cursor-pointer relative overflow-hidden ${
                    isActive
                      ? 'bg-[#F0F7FD] dark:bg-[#0B1528] border-[#00A3E0] shadow-sm'
                      : 'bg-slate-50 dark:bg-[#070E1E] border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-mono font-bold ${isActive ? 'text-[#00A3E0]' : 'text-slate-400'}`}>
                      PHASE {step.number}
                    </span>
                    {isActive && <div className="w-2 h-2 rounded-full bg-[#00A3E0] animate-ping" />}
                  </div>
                  <h3 className={`text-base font-bold ${isActive ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300'}`}>
                    {step.title}
                  </h3>
                  <span className="text-[10px] font-mono text-slate-400 uppercase block mt-1">
                    {step.tag}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Step Detail + Unique Image 4 Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Side: Active Step Detailed View (or accordion list on mobile) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 space-y-6">
                
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-[#00A3E0] text-white font-mono font-bold flex items-center justify-center text-sm shadow-md shadow-[#00A3E0]/20">
                      {approachSteps[activeApproachStep].number}
                    </span>
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase text-[#00A3E0] block">
                        {approachSteps[activeApproachStep].tag}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                        {approachSteps[activeApproachStep].title} Phase
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {approachSteps[activeApproachStep].description}
                </p>

                <div className="space-y-3">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                    Key Phase Deliverables &amp; Milestones:
                  </span>
                  <div className="space-y-2">
                    {approachSteps[activeApproachStep].deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-[#070E1E] border border-slate-200 dark:border-white/5 text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium">
                        <Check className="w-4 h-4 text-[#00A3E0] shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile Step Switcher Buttons */}
                <div className="flex lg:hidden items-center justify-between pt-2">
                  <button
                    type="button"
                    onClick={() => setActiveApproachStep((prev) => (prev > 0 ? prev - 1 : 4))}
                    className="px-4 py-2 rounded-xl border border-slate-200 dark:border-white/10 text-xs font-bold text-slate-700 dark:text-slate-200"
                  >
                    &larr; Previous Phase
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveApproachStep((prev) => (prev < 4 ? prev + 1 : 0))}
                    className="px-4 py-2 rounded-xl bg-[#00A3E0] text-white text-xs font-bold"
                  >
                    Next Phase &rarr;
                  </button>
                </div>

              </div>
            </div>

            {/* Right Side: Unique Image 4 (Top-down photograph of technology architect reviewing blueprints & documentation) */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0B1528] shadow-xl group">
                <div className="relative h-80 sm:h-96 w-full overflow-hidden">
                  <img
                    src="/images/cloud/strategy_approach.jpg"
                    alt="Realistic Top-Down Photograph of Technology Architect Reviewing Cloud Migration Blueprints, Dependency Mapping and System Documentation on Desk"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 text-white select-text">
                    <span className="text-[11px] font-mono font-bold text-cyan-300 uppercase tracking-wider block">
                      Phase 04: Blueprint Execution Plans
                    </span>
                    <p className="text-xs text-slate-200 mt-1">
                      Translating workload telemetry into definitive migration runbooks and architecture specifications.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: CLOUD STRATEGY DELIVERABLES
          Heading: What You Get with Our Cloud Strategy
          8 Practical Outputs: Business-aligned cloud strategy, Cloud adoption roadmap,
                               Target architecture principles, Cloud platform recommendations,
                               Governance and security framework, Cost-management recommendations,
                               Modernization priorities, Implementation planning guidance
          Layout: Document-style visual on one side and a clearly organized deliverables list on the other.
         ========================================================================= */}
      <section id="deliverables" className="py-20 lg:py-24 bg-slate-50 dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Header */}
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
              <span>SECTION 05 &bull; TANGIBLE ASSETS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              What You Get with Our Cloud Strategy
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              We provide actionable, enterprise-ready engineering assets, executive dossiers, and technical blueprints—not generic presentations. Every deliverable is customized to your existing IT assets and commercial objectives.
            </p>
          </div>

          {/* Deliverables Layout: Unique Image 5 on Left + Organized Deliverables List on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Side: Unique Image 5 (Close-up photograph of enterprise strategy binder & documentation) */}
            <div className="lg:col-span-5 sticky top-28 space-y-4">
              <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0B1528] shadow-xl group">
                <div className="relative h-80 sm:h-[420px] w-full overflow-hidden">
                  <img
                    src="/images/cloud/strategy_deliverables.jpg"
                    alt="Professional Close-Up of Enterprise Cloud Strategy Document Binder, Architectural Roadmap Diagrams and Planning Materials on Boardroom Table"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-5 left-5 right-5 text-white select-text">
                    <span className="text-[11px] font-mono font-bold text-cyan-300 uppercase tracking-wider block">
                      Audit-Ready Deliverables Dossier
                    </span>
                    <p className="text-xs text-slate-200 mt-1">
                      Complete architectural binders ready for executive review, board approval, and migration factory handover.
                    </p>
                  </div>
                </div>
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {['ALL', 'STRATEGY', 'ROADMAP', 'ARCHITECTURE', 'GOVERNANCE', 'FINOPS'].map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveDeliverableCategory(cat)}
                    className={`px-3 py-1 rounded-full text-[11px] font-mono font-bold transition-all cursor-pointer ${
                      activeDeliverableCategory === cat
                        ? 'bg-[#00A3E0] text-white shadow-sm'
                        : 'bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:border-slate-300'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side: Clearly Organized Deliverables List (8 Required Items) */}
            <div className="lg:col-span-7 space-y-3.5">
              {deliverables
                .filter((d) => activeDeliverableCategory === 'ALL' || d.category === activeDeliverableCategory)
                .map((del, idx) => (
                  <div
                    key={del.id}
                    className="p-5 rounded-2xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 hover:border-[#00A3E0] dark:hover:border-[#00A3E0]/50 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
                  >
                    <div className="space-y-1.5 max-w-xl">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-[#00A3E0]/10 text-[#00A3E0] text-[10px] font-mono font-bold flex items-center justify-center">
                          {idx + 1}
                        </span>
                        <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-[#00A3E0] transition-colors">
                          {del.title}
                        </h3>
                        <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 ml-auto sm:ml-2">
                          {del.category}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-7">
                        {del.summary}
                      </p>
                    </div>

                    <div className="pl-7 sm:pl-0 shrink-0">
                      <span className="text-[11px] font-mono text-slate-400 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 px-3 py-1.5 rounded-lg block text-right sm:text-left">
                        {del.format}
                      </span>
                    </div>
                  </div>
                ))}
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: CLOUD STRATEGY FOCUS AREAS
          Heading: Strategic Services for Your Cloud Journey
          6 Focus Areas: Enterprise Cloud Strategy, Public Private & Hybrid Cloud Planning,
                         Multicloud Strategy, Cloud Architecture Planning,
                         Cloud Governance & Security Strategy, Application Modernization Strategy
          Layout: Distinctive editorial grid / asymmetric layout with concise descriptions,
                  small icons, clear navigation links, and unique Image 6.
         ========================================================================= */}
      <section id="focus-areas" className="py-20 lg:py-24 bg-white dark:bg-[#070E1C] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Header */}
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
              <span>SECTION 06 &bull; STRATEGIC SERVICES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Strategic Services for Your Cloud Journey
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Whether you are architecting a net-new multi-cloud footprint or modernizing legacy mission-critical applications, our consulting practice delivers specialized advisory for every stage of your transformation.
            </p>
          </div>

          {/* Editorial Asymmetric Grid: 6 Distinctive Cards + Supporting Unique Image 6 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* 6 Specialized Practice Focus Areas Cards (Readable Information Cards) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {focusAreas.map((area) => (
                <div
                  key={area.id}
                  className="p-5 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 shadow-sm flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#00A3E0] block">
                      {area.badge}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {area.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      {area.summary}
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                      {area.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side: Unique Image 6 (Enterprise architecture multi-cloud command room) */}
            <div className="lg:col-span-5 sticky top-28">
              <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0B1528] shadow-xl group">
                <div className="relative h-80 sm:h-[440px] w-full overflow-hidden">
                  <img
                    src="/images/cloud/strategy_focus_areas.jpg"
                    alt="Professional Enterprise Architecture Environment Featuring Modern Cloud Infrastructure, Interconnected Systems and Technology Workspace"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent pointer-events-none" />
                  <div className="absolute bottom-5 left-5 right-5 text-white space-y-1 select-text">
                    <span className="text-[11px] font-mono font-bold text-cyan-300 uppercase tracking-wider block">
                      Global Cloud Network Topologies
                    </span>
                    <p className="text-xs text-slate-200">
                      Cross-provider connectivity linking AWS, Azure, Google Cloud, and private enterprise datacenters seamlessly.
                    </p>
                  </div>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-[#070E1E] border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                  <span>6 Advisory Practices Active</span>
                  <span className="text-emerald-500 font-bold">Unified Governance</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: CLOUD STRATEGY CALL TO ACTION
          Heading: Let's Build a Smarter Cloud Strategy Together
          Description: Define your cloud direction, align technology with business priorities,
                       and establish a practical roadmap for sustainable transformation.
          Button: Talk to Our Cloud Experts
          Image 7: A premium, realistic modern data-center environment with server infrastructure
                   and subtle cloud connectivity visualization.
          Layout: Visually striking dark-navy and blue CTA banner with readable white text,
                  strong contact button, and the seventh unique image.
         ========================================================================= */}
      <section id="cta" className="py-20 lg:py-24 bg-slate-50 dark:bg-[#050B17] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-slate-950 via-[#061226] to-[#040B17] border border-cyan-500/25 shadow-2xl">
            
            {/* Subtle Tech Cyber Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-[#00A3E0]/15 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-10 w-[400px] h-[250px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Left Column: CTA Headings, Narrative, Bullet Metrics & Action Button */}
              <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 space-y-6 text-white">
                
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-[#00A3E0]" />
                  <span>SECTION 07 &bull; COMMENCE YOUR ENGAGEMENT</span>
                </div>

                <div className="space-y-3">
                  <span className="block text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-[#00A3E0]">
                    Actionable Next Steps
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
                    Let's Build a Smarter Cloud Strategy Together
                  </h2>
                </div>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                  Define your cloud direction, align technology with business priorities, and establish a practical roadmap for sustainable transformation.
                </p>

                {/* Key Assurance Points */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 max-w-lg">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Vendor-Neutral Architecture</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>3-Year TCO Business Case</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Certified Principal Architects</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Zero Disruption Migration Waves</span>
                  </div>
                </div>

                {/* Main Action Button */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={handleDiscussStrategy}
                    className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#00A3E0] to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm tracking-wide transition-all shadow-lg shadow-cyan-500/30 flex items-center gap-2.5 group cursor-pointer"
                  >
                    <span>Talk to Our Cloud Experts</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <Link
                    to="/cloud-operations/adoption"
                    className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 hover:text-white border border-white/20 font-bold text-sm tracking-wide transition-all flex items-center gap-2 group"
                  >
                    <span>Explore Cloud Adoption</span>
                    <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </div>

              {/* Right Column: Unique Image 7 (Premium Data Center Infrastructure) */}
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10">
                <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-slate-900/60 shadow-2xl group">
                  <div className="relative h-72 sm:h-96 w-full overflow-hidden">
                    <img
                      src="/images/cloud/strategy_cta_datacenter.jpg"
                      alt="Premium Realistic Modern Data-Center Environment with Server Infrastructure and Cloud Connectivity Visualization"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 text-white select-text">
                      <span className="text-[11px] font-mono font-bold text-cyan-300 uppercase tracking-wider block">
                        Enterprise Infrastructure Ready
                      </span>
                      <p className="text-xs text-slate-200 mt-1">
                        SLA-governed enterprise hosting linking on-premises estates to hyperscaler cloud zones.
                      </p>
                    </div>
                  </div>
                  <div className="p-4 bg-slate-950 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="text-cyan-400 font-bold flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#00A3E0]" />
                      Global Cloud SRE
                    </span>
                    <span>24x7 Enterprise Governance</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Related Cloud Services */}
      <RelatedCloudServices currentPath="/cloud-operations/strategy" limit={3} />

      {/* =========================================================================
          FULL-SCREEN LIGHTBOX MODAL
         ========================================================================= */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
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
              src={lightboxImage.src} 
              alt={lightboxImage.caption}
              className="max-w-full max-h-[85vh] object-contain rounded-2xl border border-white/20 shadow-2xl"
            />
            <span className="px-4 py-2 rounded-full bg-black/80 border border-white/20 text-xs font-mono font-bold text-cyan-300 backdrop-blur-md shadow-xl text-center">
              {lightboxImage.caption}
            </span>
          </div>
        </div>
      )}

    </div>
  );
};
