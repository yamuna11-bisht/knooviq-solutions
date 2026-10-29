import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  Compass,
  Layers,
  GitBranch,
  ShieldCheck,
  BarChart3,
  RefreshCw,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  Cpu,
  Workflow,
  Check,
  Zap,
  Lock,
  FileCheck,
  Network,
  Radio,
  FileCode,
  Sliders,
  FolderKanban,
  UserCheck,
  TrendingUp,
  Award,
  BookOpen,
  Maximize2,
  X,
  Activity
} from 'lucide-react';
import { RelatedCloudServices } from '../../components/cloud/RelatedCloudServices';

interface CloudOperatingModelPageProps {
  onOpenContact?: (topic?: string) => void;
}

export const CloudOperatingModelPage: React.FC<CloudOperatingModelPageProps> = ({ onOpenContact }) => {
  // State for interactive capability highlights
  const [activeMaturityStage, setActiveMaturityStage] = useState<number>(0);
  const [lightboxImage, setLightboxImage] = useState<{ src: string; caption: string } | null>(null);

  useEffect(() => {
    document.title = 'Enterprise Cloud Operating Model & CCoE Governance | KNOOVIQ';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleOpenContact = (topic?: string) => {
    if (onOpenContact) {
      onOpenContact(topic || 'Cloud Operating Model Advisory');
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Operating Model 5-Pillar Interlock (Concise overview after hero)
  const operatingModelPillars = [
    {
      title: 'People & Teams',
      badge: 'ORGANIZATION',
      icon: Users,
      desc: 'Cross-functional cloud centers of excellence (CCoE), clear role boundaries, and product-aligned delivery teams.'
    },
    {
      title: 'Governance & Decisions',
      badge: 'ACCOUNTABILITY',
      icon: Compass,
      desc: 'Transparent decision rights, architecture review boards, policy guardrails, and exception workflows.'
    },
    {
      title: 'Service Consumption',
      badge: 'ENGAGEMENT',
      icon: Layers,
      desc: 'Curated cloud service catalogs, self-service request pipelines, and standardized internal delivery SLAs.'
    },
    {
      title: 'Platform Engineering',
      badge: 'CAPABILITIES',
      icon: Cpu,
      desc: 'Shared landing zones, reusable Infrastructure as Code (IaC) modules, and automated deployment baselines.'
    },
    {
      title: 'Financial & Security Ownership',
      badge: 'DISCIPLINE',
      icon: ShieldCheck,
      desc: 'Workload-level FinOps accountability, unit economics showback, and distributed security responsibilities.'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#060D1A] text-slate-900 dark:text-slate-100 transition-colors">
      
      {/* =========================================================================
          HERO SECTION — CLOUD OPERATING MODEL
          Eyebrow: CLOUD & OPERATIONS
          Heading: Design a Cloud Operating Model Built for Enterprise Scale
          Description: Establish the people, processes, governance, and technology
          practices required to manage cloud services effectively. Knooviq helps
          organizations define cloud responsibilities, structure cross-functional
          teams, establish decision-making frameworks, and align cloud delivery
          with enterprise priorities.
          Primary CTA: Discuss Your Cloud Operating Model
          Secondary CTA: Explore Our Capabilities
          ========================================================================= */}
      {/* =========================================================================
          HERO SECTION — CLOUD OPERATING MODEL (Cinematic Full-Bleed Enterprise Hero)
          Eyebrow: CLOUD & OPERATIONS
          Heading: Design a Cloud Operating Model Built for Enterprise Scale
          Description: Establish the people, processes, governance, and technology
          practices required to manage cloud services effectively. Knooviq helps
          organizations define cloud responsibilities, structure cross-functional
          teams, establish decision-making frameworks, and align cloud delivery
          with enterprise priorities.
          Primary CTA: Discuss Your Cloud Operating Model
          Secondary CTA: Explore Our Capabilities
          ========================================================================= */}
      <section className="relative w-full min-h-[560px] sm:min-h-[580px] lg:min-h-[620px] flex items-center overflow-hidden bg-[#040B17] text-white border-b border-slate-200/20 dark:border-white/10 shadow-2xl pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20">
        
        {/* Full-Bleed Enterprise Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="/images/cloud/cloud_op_model_hero.jpg" 
            alt="Design a Cloud Operating Model Built for Enterprise Scale - Global cloud connectivity, digital network governance, and enterprise platform ecosystem" 
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
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/25 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>CLOUD &amp; OPERATIONS</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-[1.18]">
                Design a Cloud Operating Model Built for Enterprise Scale
              </h1>
              <p className="text-base sm:text-lg font-medium text-cyan-300 tracking-normal">
                Align People, Governance, Platform Capabilities, and Commercial Outcomes
              </p>
            </div>

            {/* Required Exact Narrative */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
              Establish the people, processes, governance, and technology practices required to manage cloud services effectively. Knooviq helps organizations define cloud responsibilities, structure cross-functional teams, establish decision-making frameworks, and align cloud delivery with enterprise priorities.
            </p>



            {/* Operating Model Pillars Anchor */}
            <div className="pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block">Structure</span>
                <span className="text-sm font-bold text-white">CCoE &amp; Platform Teams</span>
              </div>
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block">Governance</span>
                <span className="text-sm font-bold text-white">Decision Rights &amp; Policy</span>
              </div>
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block">Delivery</span>
                <span className="text-sm font-bold text-white">Self-Service Platforms</span>
              </div>
            </div>

            {/* Floating Annotation Footnote */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono text-slate-300">
              <span className="flex items-center gap-1.5 text-cyan-300 font-bold">
                <Radio className="w-3.5 h-3.5 text-[#00A3E0] animate-pulse" />
                Operating Ecosystem
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#00A3E0]" />
                Cross-Functional Alignment (Platform &bull; Apps &bull; CISO)
              </span>
              <span>&bull;</span>
              <span className="text-slate-400">Autonomous Delivery &bull; Guardrails</span>
            </div>

          </div>

        </div>
      </section>

      {/* Full-Screen Lightbox Modal */}
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


      {/* =========================================================================
          OPERATING-MODEL OVERVIEW (Introductory visual, as requested)
          Explaining the relationship between people, processes, governance,
          platforms, and business outcomes.
          ========================================================================= */}
      <section id="operating-model-overview" className="py-20 bg-slate-50 dark:bg-[#07101E] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
              <span>OPERATING ECOSYSTEM ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              The Five Dimensions of a Mature Operating Model
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              A high-performing cloud organization does not happen by accident. It requires intentional design connecting people, decision rights, consumption models, platform engineering, and financial accountability into one cohesive delivery engine.
            </p>
          </div>

          {/* 5-Pillar Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {operatingModelPillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 space-y-3 flex flex-col justify-between hover:border-[#00A3E0] dark:hover:border-cyan-400/30 transition-all shadow-sm"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 flex items-center justify-center text-[#00A3E0]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        {p.badge}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      {p.title}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 dark:border-white/5 text-[11px] font-mono text-[#00A3E0]">
                    Integrated Domain
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 1 — CLOUD ORGANIZATION AND TEAM STRUCTURE
          Heading: Build the Right Teams for Cloud Delivery
          Content: Define the organizational structure required to deliver and manage
          cloud services consistently. Establish clear responsibilities across cloud
          platform teams, application owners, security specialists, infrastructure
          teams, and business stakeholders. Knooviq helps organizations determine
          team responsibilities, ownership boundaries, collaboration practices,
          and decision-making authority to support effective cloud delivery.
          Image: Organizational architecture illustration showing interconnected
          teams (/images/cloud/cloud_op_model_teams.jpg)
          ========================================================================= */}
      <section id="organization-teams" className="py-24 bg-white dark:bg-[#060D1A] transition-colors border-b border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
              <span>ORGANIZATIONAL ARCHITECTURE &amp; TEAMS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 dark:text-white tracking-tight leading-snug">
              Build the Right Teams for Cloud Delivery
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Define the organizational structure required to deliver and manage cloud services consistently. Establish clear responsibilities across cloud platform teams, application owners, security specialists, infrastructure teams, and business stakeholders. Knooviq helps organizations determine team responsibilities, ownership boundaries, collaboration practices, and decision-making authority to support effective cloud delivery.
            </p>
          </div>

          {/* Main Grid: Left Image, Right Key Capabilities */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image Showcase */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-900 shadow-xl group">
                <div className="relative h-80 sm:h-96 w-full overflow-hidden">
                  <img
                    src="/images/cloud/cloud_op_model_teams.jpg"
                    alt="Organizational architecture illustration showing interconnected cloud platform, application, security, and business teams"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="p-3.5 rounded-2xl bg-black/70 backdrop-blur-md border border-white/15 text-xs text-white space-y-1">
                      <div className="font-bold flex items-center gap-1.5 text-cyan-300">
                        <Users className="w-3.5 h-3.5" />
                        Team Topologies &amp; Interaction Modes
                      </div>
                      <p className="text-[11px] text-slate-300">
                        Enabling autonomous stream-aligned delivery with platform enablement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Callout */}
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs space-y-2">
                <span className="font-mono font-bold text-[#00A3E0] uppercase tracking-wider block">
                  Team Interaction Contracts
                </span>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  We define clear collaboration modes (X-as-a-Service, Facilitating, Collaboration) between platform engineering and line-of-business application teams to prevent communication bottlenecks.
                </p>
              </div>
            </div>

            {/* Right Capabilities Column */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Team Topology &amp; Ownership Capabilities
              </h3>

              <div className="space-y-3.5">
                {[
                  {
                    title: 'Cloud team structure and role definition',
                    desc: 'Structuring Cloud Centers of Excellence (CCoE), dedicated platform engineering units, cloud architecture review boards, and embedded cloud champions within product squads.'
                  },
                  {
                    title: 'Responsibility and ownership mapping',
                    desc: 'Establishing unambiguous RACI matrices defining exactly who designs, provisions, deploys, operates, and secures each tier of the enterprise cloud stack.'
                  },
                  {
                    title: 'Centralized and distributed team models',
                    desc: 'Balancing central platform standardization with federated developer autonomy, ensuring enterprise guardrails do not impede delivery velocity.'
                  },
                  {
                    title: 'Cross-functional collaboration frameworks',
                    desc: 'Formulating structured engagement rituals between infrastructure engineering, software delivery squads, cybersecurity, and commercial finance teams.'
                  },
                  {
                    title: 'Skills and capability planning',
                    desc: 'Assessing organizational cloud fluency, identifying critical skill gaps, and architecting targeted role progression pathways from legacy sysadmin to cloud platform engineer.'
                  }
                ].map((cap, idx) => (
                  <div
                    key={idx}
                    className="p-4.5 rounded-2xl bg-slate-50 dark:bg-[#0A162B] border border-slate-200 dark:border-white/10 space-y-1.5 hover:border-[#00A3E0] dark:hover:border-cyan-400/40 transition-all"
                  >
                    <div className="flex items-center gap-2.5">
                      <UserCheck className="w-4 h-4 text-[#00A3E0] shrink-0" />
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        {cap.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-6.5">
                      {cap.desc}
                    </p>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 2 — CLOUD GOVERNANCE AND DECISION RIGHTS
          Heading: Establish Clear Rules and Accountable Decisions
          Content: Create a governance framework that defines how cloud decisions
          are made, who owns them, and how policies are maintained across the
          organization. Establish appropriate controls without creating unnecessary
          barriers to delivery. Knooviq supports governance structures that align
          platform standards, security requirements, architecture decisions, and
          business accountability.
          Image: Governance framework illustration featuring policy layers and
          decision pathways (/images/cloud/cloud_op_model_governance.jpg)
          ========================================================================= */}
      <section id="governance-decisions" className="py-24 bg-slate-50 dark:bg-[#07101E] transition-colors border-b border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
              <span>DECISION RIGHTS &amp; GOVERNANCE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 dark:text-white tracking-tight leading-snug">
              Establish Clear Rules and Accountable Decisions
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Create a governance framework that defines how cloud decisions are made, who owns them, and how policies are maintained across the organization. Establish appropriate controls without creating unnecessary barriers to delivery. Knooviq supports governance structures that align platform standards, security requirements, architecture decisions, and business accountability.
            </p>
          </div>

          {/* Main Grid: Left Capabilities, Right Image Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Capabilities Column */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Accountable Decision Frameworks
              </h3>

              <div className="space-y-3.5">
                {[
                  {
                    title: 'Cloud governance framework design',
                    desc: 'Structuring multi-layered governance bodies, aligning executive oversight with technical review cadences to steer architectural direction without bureaucracy.'
                  },
                  {
                    title: 'Decision rights and accountability',
                    desc: 'Documenting clear authorization boundaries for cloud service adoption, multi-region expansions, third-party SaaS integrations, and production architecture approvals.'
                  },
                  {
                    title: 'Architecture review processes',
                    desc: 'Implementing streamlined, asynchronous Architecture Decision Records (ADRs) and lightweight peer-review gates that accelerate approval turnaround times.'
                  },
                  {
                    title: 'Policy ownership and exception management',
                    desc: 'Establishing formal exception lifecycles with mandatory compensating controls, explicit expiration dates, and risk sign-off by designated business owners.'
                  },
                  {
                    title: 'Governance committees and review mechanisms',
                    desc: 'Formulating focused charters for Cloud Steering Committees, Technical Advisory Boards, and FinOps Councils to maintain continuous alignment.'
                  }
                ].map((cap, idx) => (
                  <div
                    key={idx}
                    className="p-4.5 rounded-2xl bg-white dark:bg-[#0A162B] border border-slate-200 dark:border-white/10 space-y-1.5 hover:border-[#00A3E0] dark:hover:border-cyan-400/40 transition-all shadow-sm"
                  >
                    <div className="flex items-center gap-2.5">
                      <Compass className="w-4 h-4 text-[#00A3E0] shrink-0" />
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        {cap.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-6.5">
                      {cap.desc}
                    </p>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Image Showcase */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-900 shadow-xl group">
                <div className="relative h-80 sm:h-96 w-full overflow-hidden">
                  <img
                    src="/images/cloud/cloud_op_model_governance.jpg"
                    alt="Governance framework illustration featuring policy layers, decision pathways, and controlled cloud environments"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-4 left-4 right-4 select-text">
                    <div className="p-3.5 rounded-2xl bg-black/70 backdrop-blur-md border border-white/15 text-xs text-white space-y-1">
                      <div className="font-bold flex items-center gap-1.5 text-cyan-300">
                        <Compass className="w-3.5 h-3.5" />
                        Decision Rights &amp; Policy Layers
                      </div>
                      <p className="text-[11px] text-slate-300">
                        Transparent architectural authority, exception management, and committee cadences.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Callout */}
              <div className="p-5 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs space-y-2">
                <span className="font-mono font-bold text-[#00A3E0] uppercase tracking-wider block">
                  Frictionless Governance Principles
                </span>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Governance works when rules are automated as code rather than trapped in static PDF manuals. We translate compliance mandates into automated guardrails enforced directly in deployment pipelines.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 3 — CLOUD SERVICE DELIVERY AND ENGAGEMENT
          Heading: Make Cloud Services Easy to Consume
          Content: Define how internal teams request, access, and consume cloud
          services. Establish clear engagement models between cloud platform teams
          and application or business teams, supported by standardized service
          offerings and transparent delivery processes. Knooviq helps organizations
          create service catalogs, request workflows, service ownership practices,
          and collaboration models that improve consistency across cloud delivery.
          Image: Enterprise service delivery illustration showing business teams
          accessing curated cloud services (/images/cloud/cloud_op_model_service_delivery.jpg)
          ========================================================================= */}
      <section id="service-delivery" className="py-24 bg-white dark:bg-[#060D1A] transition-colors border-b border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
              <span>SERVICE DELIVERY &amp; CONSUMPTION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 dark:text-white tracking-tight leading-snug">
              Make Cloud Services Easy to Consume
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Define how internal teams request, access, and consume cloud services. Establish clear engagement models between cloud platform teams and application or business teams, supported by standardized service offerings and transparent delivery processes. Knooviq helps organizations create service catalogs, request workflows, service ownership practices, and collaboration models that improve consistency across cloud delivery.
            </p>
          </div>

          {/* Main Grid: Left Image, Right Capabilities */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image Showcase */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-900 shadow-xl group">
                <div className="relative h-80 sm:h-96 w-full overflow-hidden">
                  <img
                    src="/images/cloud/cloud_op_model_service_delivery.jpg"
                    alt="Enterprise service delivery illustration showing business teams accessing curated cloud platform services"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-4 left-4 right-4 select-text">
                    <div className="p-3.5 rounded-2xl bg-black/70 backdrop-blur-md border border-white/15 text-xs text-white space-y-1">
                      <div className="font-bold flex items-center gap-1.5 text-cyan-300">
                        <Layers className="w-3.5 h-3.5" />
                        Curated Cloud Service Catalog
                      </div>
                      <p className="text-[11px] text-slate-300">
                        Standardized, pre-approved patterns for databases, compute, and networking.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Callout */}
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs space-y-2">
                <span className="font-mono font-bold text-[#00A3E0] uppercase tracking-wider block">
                  Product Management for Platforms
                </span>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  We guide platform teams to treat developer squads as internal customers, tracking Net Promoter Scores (NPS), lead time to first deployment, and catalog adoption rates.
                </p>
              </div>
            </div>

            {/* Right Capabilities Column */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Service Engagement &amp; Delivery Framework
              </h3>

              <div className="space-y-3.5">
                {[
                  {
                    title: 'Cloud service catalog design',
                    desc: 'Structuring an enterprise catalog of vetted, pre-configured cloud architectures (e.g., container clusters, secure data stores, API gateways) with clear SLAs.'
                  },
                  {
                    title: 'Service request and fulfillment workflows',
                    desc: 'Automating intake and approval workflows through ITSM integrations (ServiceNow/Jira), slashing cloud provisioning lead times from weeks to minutes.'
                  },
                  {
                    title: 'Business and application team engagement',
                    desc: 'Establishing white-glove onboarding and architectural consultation cadences that guide business projects from requirements discovery to production launch.'
                  },
                  {
                    title: 'Service ownership and escalation paths',
                    desc: 'Defining clear service tiering (Tier 1 Mission-Critical to Tier 3 Internal) with unambiguous operational escalation trees and emergency support protocols.'
                  },
                  {
                    title: 'Standardized cloud service delivery',
                    desc: 'Ensuring that every provisioned service adheres strictly to enterprise tagging, logging, encryption, and network ingress standards by default.'
                  }
                ].map((cap, idx) => (
                  <div
                    key={idx}
                    className="p-4.5 rounded-2xl bg-slate-50 dark:bg-[#0A162B] border border-slate-200 dark:border-white/10 space-y-1.5 hover:border-[#00A3E0] dark:hover:border-cyan-400/40 transition-all"
                  >
                    <div className="flex items-center gap-2.5">
                      <Layers className="w-4 h-4 text-[#00A3E0] shrink-0" />
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        {cap.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-6.5">
                      {cap.desc}
                    </p>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 4 — PLATFORM ENGINEERING AND SELF-SERVICE
          Heading: Create Consistent Cloud Experiences for Delivery Teams
          Content: Establish shared cloud platforms and reusable engineering
          capabilities that help application teams provision approved infrastructure
          and deploy workloads consistently. Define how automation, reusable
          templates, platform standards, and self-service capabilities are delivered
          and maintained. Knooviq supports platform engineering practices that
          balance developer autonomy with enterprise standards and operational controls.
          Image: Detailed technical architecture showing shared platform, reusable
          modules, and pipelines (/images/cloud/cloud_op_model_platform_engineering.jpg)
          ========================================================================= */}
      <section id="platform-engineering" className="py-24 bg-slate-50 dark:bg-[#07101E] transition-colors border-b border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
              <span>PLATFORM ENGINEERING &amp; SELF-SERVICE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 dark:text-white tracking-tight leading-snug">
              Create Consistent Cloud Experiences for Delivery Teams
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Establish shared cloud platforms and reusable engineering capabilities that help application teams provision approved infrastructure and deploy workloads consistently. Define how automation, reusable templates, platform standards, and self-service capabilities are delivered and maintained. Knooviq supports platform engineering practices that balance developer autonomy with enterprise standards and operational controls.
            </p>
          </div>

          {/* Main Grid: Left Capabilities, Right Image Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Capabilities Column */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Internal Developer Platform (IDP) Capabilities
              </h3>

              <div className="space-y-3.5">
                {[
                  {
                    title: 'Internal developer platform planning',
                    desc: 'Designing intuitive portal interfaces (Backstage / custom developer consoles) that empower engineering squads to spin up environments independently.'
                  },
                  {
                    title: 'Infrastructure-as-code standards',
                    desc: 'Establishing modular, versioned Terraform and OpenTofu module registries with integrated static analysis (Checkov / tfsec) before state commits.'
                  },
                  {
                    title: 'Reusable deployment templates',
                    desc: 'Publishing standardized CI/CD pipeline blueprints (GitHub Actions, GitLab, Azure DevOps) with built-in security scans and release validation.'
                  },
                  {
                    title: 'Self-service provisioning workflows',
                    desc: 'Enabling developers to spin up ephemeral staging environments and on-demand sandbox accounts within automated budget limits.'
                  },
                  {
                    title: 'Platform product ownership and lifecycle management',
                    desc: 'Managing internal platform capabilities through formal roadmap iterations, deprecation notices, version migrations, and user support channels.'
                  }
                ].map((cap, idx) => (
                  <div
                    key={idx}
                    className="p-4.5 rounded-2xl bg-white dark:bg-[#0A162B] border border-slate-200 dark:border-white/10 space-y-1.5 hover:border-[#00A3E0] dark:hover:border-cyan-400/40 transition-all shadow-sm"
                  >
                    <div className="flex items-center gap-2.5">
                      <Cpu className="w-4 h-4 text-[#00A3E0] shrink-0" />
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        {cap.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-6.5">
                      {cap.desc}
                    </p>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Image Showcase */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-900 shadow-xl group">
                <div className="relative h-80 sm:h-96 w-full overflow-hidden">
                  <img
                    src="/images/cloud/cloud_op_model_platform_engineering.jpg"
                    alt="Technical architecture illustration showing shared cloud platform, reusable infrastructure modules, and deployment pipelines"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-4 left-4 right-4 select-text">
                    <div className="p-3.5 rounded-2xl bg-black/70 backdrop-blur-md border border-white/15 text-xs text-white space-y-1">
                      <div className="font-bold flex items-center gap-1.5 text-cyan-300">
                        <Cpu className="w-3.5 h-3.5" />
                        Platform-as-a-Product Architecture
                      </div>
                      <p className="text-[11px] text-slate-300">
                        Reusable IaC modules, automated testing, and developer self-service.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Callout */}
              <div className="p-5 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs space-y-2">
                <span className="font-mono font-bold text-[#00A3E0] uppercase tracking-wider block">
                  Paved Road Engineering
                </span>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  We build golden deployment pathways so appealing, safe, and fast that development teams choose to adopt enterprise standards organically rather than seeking shadow workarounds.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 5 — CLOUD FINANCIAL MANAGEMENT AND ACCOUNTABILITY
          Heading: Connect Cloud Consumption with Business Ownership
          Content: Define how cloud costs are allocated, reviewed, and managed across
          business units, products, and technology teams. Establish clear financial
          responsibilities and collaborative practices between engineering, finance,
          and business stakeholders. Knooviq helps organizations incorporate cost
          visibility, resource ownership, budgeting processes, and optimization
          responsibilities into their cloud operating model.
          Image: Enterprise architecture visual showing cloud resource ownership
          connected to finance, engineering, and business functions
          (/images/cloud/cloud_op_model_financial_mgmt.jpg)
          ========================================================================= */}
      <section id="financial-management" className="py-24 bg-white dark:bg-[#060D1A] transition-colors border-b border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
              <span>FINANCIAL ACCOUNTABILITY &amp; FINOPS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 dark:text-white tracking-tight leading-snug">
              Connect Cloud Consumption with Business Ownership
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Define how cloud costs are allocated, reviewed, and managed across business units, products, and technology teams. Establish clear financial responsibilities and collaborative practices between engineering, finance, and business stakeholders. Knooviq helps organizations incorporate cost visibility, resource ownership, budgeting processes, and optimization responsibilities into their cloud operating model.
            </p>
          </div>

          {/* Main Grid: Left Image, Right Capabilities */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image Showcase */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-900 shadow-xl group">
                <div className="relative h-80 sm:h-96 w-full overflow-hidden">
                  <img
                    src="/images/cloud/cloud_op_model_financial_mgmt.jpg"
                    alt="Enterprise architecture visual showing cloud resource ownership connected to finance, engineering, and business functions"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-4 left-4 right-4 select-text">
                    <div className="p-3.5 rounded-2xl bg-black/70 backdrop-blur-md border border-white/15 text-xs text-white space-y-1">
                      <div className="font-bold flex items-center gap-1.5 text-cyan-300">
                        <BarChart3 className="w-3.5 h-3.5" />
                        FinOps Operating Cadence
                      </div>
                      <p className="text-[11px] text-slate-300">
                        Connecting cloud resource usage directly to product unit economics.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Callout */}
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs space-y-2">
                <span className="font-mono font-bold text-[#00A3E0] uppercase tracking-wider block">
                  Showback Culture Transformation
                </span>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Engineers make better design decisions when cost is treated as a first-class architectural metric alongside latency, reliability, and security.
                </p>
              </div>
            </div>

            {/* Right Capabilities Column */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                FinOps Operating Model &amp; Cost Ownership
              </h3>

              <div className="space-y-3.5">
                {[
                  {
                    title: 'Cloud cost ownership and allocation',
                    desc: 'Enforcing mandatory cost allocation tags across accounts and subscriptions, mapping every virtual machine and cluster to specific business P&L owners.'
                  },
                  {
                    title: 'Finance and engineering collaboration',
                    desc: 'Establishing shared FinOps operating cadences bridging monthly financial variance reviews with engineering sprint planning and backlog priorities.'
                  },
                  {
                    title: 'Budgeting and consumption review processes',
                    desc: 'Instituting automated budget threshold alerts, forecast modeling, and early-warning notifications before unexpected consumption overruns occur.'
                  },
                  {
                    title: 'Cost accountability by workload or business unit',
                    desc: 'Implementing transparent departmental showback and chargeback models that attribute shared landing zone costs fairly across participating teams.'
                  },
                  {
                    title: 'Optimization responsibility and governance',
                    desc: 'Assigning explicit engineering accountability for continuous rightsizing, idle resource cleanups, and commitment discount renewals.'
                  }
                ].map((cap, idx) => (
                  <div
                    key={idx}
                    className="p-4.5 rounded-2xl bg-slate-50 dark:bg-[#0A162B] border border-slate-200 dark:border-white/10 space-y-1.5 hover:border-[#00A3E0] dark:hover:border-cyan-400/40 transition-all"
                  >
                    <div className="flex items-center gap-2.5">
                      <BarChart3 className="w-4 h-4 text-[#00A3E0] shrink-0" />
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        {cap.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-6.5">
                      {cap.desc}
                    </p>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 6 — SECURITY, RISK, AND COMPLIANCE RESPONSIBILITIES
          Heading: Embed Security into Every Cloud Responsibility
          Content: Define how security, risk management, and compliance responsibilities
          are distributed across cloud teams. Establish clear ownership for access
          controls, security policies, risk assessment, evidence collection, and
          exception handling. Knooviq helps organizations integrate security
          responsibilities into everyday cloud decisions while maintaining clear
          accountability across technical and business functions.
          Image: Enterprise responsibility architecture illustration showing shared
          security responsibilities across platform, application, and governance
          (/images/cloud/cloud_op_model_security_risk.jpg)
          ========================================================================= */}
      <section id="security-risk" className="py-24 bg-slate-50 dark:bg-[#07101E] transition-colors border-b border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
              <span>SHARED SECURITY RESPONSIBILITIES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 dark:text-white tracking-tight leading-snug">
              Embed Security into Every Cloud Responsibility
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Define how security, risk management, and compliance responsibilities are distributed across cloud teams. Establish clear ownership for access controls, security policies, risk assessment, evidence collection, and exception handling. Knooviq helps organizations integrate security responsibilities into everyday cloud decisions while maintaining clear accountability across technical and business functions.
            </p>
          </div>

          {/* Main Grid: Left Capabilities, Right Image Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Capabilities Column */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Distributed Security &amp; Compliance Ownership
              </h3>

              <div className="space-y-3.5">
                {[
                  {
                    title: 'Shared responsibility model definition',
                    desc: 'Tailoring the hyperscaler shared responsibility model to your specific organization, detailing exact demarcations between platform engineering, app teams, and CISO.'
                  },
                  {
                    title: 'Security ownership and escalation',
                    desc: 'Establishing clear accountability for container base-image patching, secrets rotation, vulnerability remediation SLAs, and security incident escalation.'
                  },
                  {
                    title: 'Risk and compliance accountability',
                    desc: 'Defining who conducts threat modeling for new architectures, approves third-party APIs, and validates adherence to regional data sovereignty mandates.'
                  },
                  {
                    title: 'Policy exception management',
                    desc: 'Structuring transparent security exception workflows requiring executive risk acceptance and automatic re-assessment timelines.'
                  },
                  {
                    title: 'Audit evidence and control ownership',
                    desc: 'Assigning designated control owners for ISO 27001, SOC 2, and PCI-DSS compliance checks, automating evidence aggregation directly from cloud audit logs.'
                  }
                ].map((cap, idx) => (
                  <div
                    key={idx}
                    className="p-4.5 rounded-2xl bg-white dark:bg-[#0A162B] border border-slate-200 dark:border-white/10 space-y-1.5 hover:border-[#00A3E0] dark:hover:border-cyan-400/40 transition-all shadow-sm"
                  >
                    <div className="flex items-center gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-[#00A3E0] shrink-0" />
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        {cap.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-6.5">
                      {cap.desc}
                    </p>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Image Showcase */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-900 shadow-xl group">
                <div className="relative h-80 sm:h-96 w-full overflow-hidden">
                  <img
                    src="/images/cloud/cloud_op_model_security_risk.jpg"
                    alt="Enterprise responsibility architecture illustration showing shared security responsibilities across platform, application, and risk teams"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-4 left-4 right-4 select-text">
                    <div className="p-3.5 rounded-2xl bg-black/70 backdrop-blur-md border border-white/15 text-xs text-white space-y-1">
                      <div className="font-bold flex items-center gap-1.5 text-cyan-300">
                        <Lock className="w-3.5 h-3.5" />
                        Integrated Security Accountability
                      </div>
                      <p className="text-[11px] text-slate-300">
                        Clear boundaries between platform guardrails, app code, and governance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Callout */}
              <div className="p-5 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs space-y-2">
                <span className="font-mono font-bold text-[#00A3E0] uppercase tracking-wider block">
                  Security as an Enabler
                </span>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Instead of functioning as a gatekeeper at the end of the development lifecycle, security teams provide pre-approved, compliant golden modules that let developers ship faster with confidence.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 7 — CLOUD SKILLS, PERFORMANCE, AND CONTINUOUS IMPROVEMENT
          Heading: Evolve Your Operating Model as Your Business Changes
          Content: Create a sustainable approach to cloud skills development, service
          ownership, operating reviews, and organizational improvement. Define how
          teams develop expertise, review service delivery, learn from operational
          feedback, and adapt cloud practices as business and technology requirements
          evolve. Knooviq helps organizations establish improvement mechanisms that
          support a mature, accountable, and adaptable cloud operating model.
          Image: Enterprise illustration showing connected teams, knowledge-sharing,
          and continuous improvement cycles (/images/cloud/cloud_op_model_continuous_improvement.jpg)
          ========================================================================= */}
      <section id="skills-improvement" className="py-24 bg-white dark:bg-[#060D1A] transition-colors border-b border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
              <span>CAPABILITY EVOLUTION &amp; MATURITY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 dark:text-white tracking-tight leading-snug">
              Evolve Your Operating Model as Your Business Changes
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Create a sustainable approach to cloud skills development, service ownership, operating reviews, and organizational improvement. Define how teams develop expertise, review service delivery, learn from operational feedback, and adapt cloud practices as business and technology requirements evolve. Knooviq helps organizations establish improvement mechanisms that support a mature, accountable, and adaptable cloud operating model.
            </p>
          </div>

          {/* Main Grid: Left Image, Right Capabilities */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image Showcase */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-900 shadow-xl group">
                <div className="relative h-80 sm:h-96 w-full overflow-hidden">
                  <img
                    src="/images/cloud/cloud_op_model_continuous_improvement.jpg"
                    alt="Enterprise illustration showing connected teams, knowledge-sharing pathways, and continuous improvement cycles"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-4 left-4 right-4 select-text">
                    <div className="p-3.5 rounded-2xl bg-black/70 backdrop-blur-md border border-white/15 text-xs text-white space-y-1">
                      <div className="font-bold flex items-center gap-1.5 text-cyan-300">
                        <RefreshCw className="w-3.5 h-3.5" />
                        Continuous Organizational Evolution
                      </div>
                      <p className="text-[11px] text-slate-300">
                        Maturity assessment, role enablement, and learning feedback loops.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Callout */}
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs space-y-2">
                <span className="font-mono font-bold text-[#00A3E0] uppercase tracking-wider block">
                  Operating Model Maturity Cadence
                </span>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  We institute bi-annual Operating Model Maturity Assessments to evaluate how effectively teams consume cloud capabilities, identify emerging bottlenecks, and refine organizational topologies.
                </p>
              </div>
            </div>

            {/* Right Capabilities Column */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Enablement, Performance &amp; Maturity Mechanisms
              </h3>

              <div className="space-y-3.5">
                {[
                  {
                    title: 'Cloud skills and competency planning',
                    desc: 'Conducting structured skills-inventory audits across architecture, DevOps, security, and FinOps to map multi-year engineering enablement roadmaps.'
                  },
                  {
                    title: 'Role-based learning and enablement',
                    desc: 'Structuring hands-on cloud academies, sandbox training environments, and guild communities of practice to elevate organizational engineering depth.'
                  },
                  {
                    title: 'Service ownership and review practices',
                    desc: 'Instituting quarterly service health retrospectives where application owners and platform architects evaluate delivery velocity, outages, and cost efficiency.'
                  },
                  {
                    title: 'Operational feedback and improvement cycles',
                    desc: 'Harvesting operational insights from production incidents and support tickets into the platform engineering product backlog for automated prevention.'
                  },
                  {
                    title: 'Operating model maturity assessments',
                    desc: 'Benchmarking organizational cloud operating maturity against global industry standards across governance, platform automation, culture, and business value delivery.'
                  }
                ].map((cap, idx) => (
                  <div
                    key={idx}
                    className="p-4.5 rounded-2xl bg-slate-50 dark:bg-[#0A162B] border border-slate-200 dark:border-white/10 space-y-1.5 hover:border-[#00A3E0] dark:hover:border-cyan-400/40 transition-all"
                  >
                    <div className="flex items-center gap-2.5">
                      <BookOpen className="w-4 h-4 text-[#00A3E0] shrink-0" />
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        {cap.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-6.5">
                      {cap.desc}
                    </p>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          RELATED CLOUD & OPERATIONS SERVICES
          ========================================================================= */}
      <RelatedCloudServices currentPath="/cloud-operations/operating-model" limit={3} />


      {/* =========================================================================
          CONSULTATION CTA SECTION
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
                Design an Operating Model Built for Your Business
              </h2>
              
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Partner with Knooviq enterprise advisors to structure your Cloud Center of Excellence, clarify cross-functional decision rights, and build self-service platform capabilities that scale.
              </p>
            </div>

            {/* Operating Model Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-slate-300 font-mono">
                <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0" />
                <span>Organizational Structure &amp; RACI</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300 font-mono">
                <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0" />
                <span>Paved Road Platform Engineering</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300 font-mono">
                <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0" />
                <span>FinOps &amp; Security Governance</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => handleOpenContact('Cloud Operating Model Consultation')}
                className="px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-gradient-to-r from-[#00A3E0] to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg shadow-cyan-500/30 flex items-center gap-2.5 group cursor-pointer"
              >
                <span>Talk to Our Cloud Experts</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                to="/cloud-operations/readiness"
                className="px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 hover:text-white border border-white/20 font-bold text-xs sm:text-sm tracking-wider transition-all flex items-center gap-2 group"
              >
                <span>Explore Cloud Readiness</span>
                <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
